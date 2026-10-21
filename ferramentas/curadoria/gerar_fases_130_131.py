"""Gera os arquivos das fases 130 (filmes de arquivo) e 131 (fotos) a partir dos registros conferidos
em curadoria/trabalho/. Só dados: nada é escrito à mão. Uso: python3 -I ferramentas/curadoria/gerar_fases_130_131.py ."""
import json, sys, os

raiz = sys.argv[1]
T = os.path.join(raiz, 'curadoria/trabalho')
js = lambda v: json.dumps(v, ensure_ascii=False)

# ---------- Fase 130 ----------
aprov = json.load(open(f'{T}/fase130-filmes-de-arquivo/aprovados.json'))
linhas = []
for a in sorted(aprov, key=lambda x: x['nome']):
    nome_arq = os.path.basename(a['clipe'])
    e = {
        'mp4': 'assets/video/arquivo/' + nome_arq,
        'webm': 'assets/video/arquivo/' + nome_arq.replace('.mp4', '.webm'),
        'poster': 'assets/video/arquivo/' + os.path.basename(a['poster']),
        'ano': a['ano'],
        'licenca': a['licenca'],
        'autor': a['autor'],
        'arquivo': a['arquivo_commons'],
        'pagina': a['pagina'],
        'descricao': a['descricao_curta_pt'],
        'largura': a['largura'],
        'altura': a['altura'],
    }
    linhas.append(f'    {js(a["nome"])}: {js(e)}')
f130 = f"""/* MeMotiva — curadoria/40-fase130-filmes-de-arquivo.js
   Fase 130 — filmes de arquivo (21/10/2026): trechos curtos de filmagens reais das pessoas do acervo,
   do Wikimedia Commons, em domínio público ou CC BY / BY-SA, conferidos quadro a quadro (a pessoa
   aparece de verdade; sem ator, reconstituição, funeral ou violência). 6 a 10 s, sem som.
   Registro: curadoria/trabalho/fase130-filmes-de-arquivo/ (REGRAS.md, aprovados.json, candidatos.jsonl,
   folhas/). Os arquivos ficam em assets/video/arquivo/. Carregado na ordem definida em index.html. */

(function () {{
  /* {len(aprov)} pessoas. ano: null quando o Commons não dá a data (nunca estimado). */
  window.FILMES_DE_ARQUIVO = {{
{(',' + chr(10)).join(linhas)}
  }};
}})();
"""

# ---------- Fase 131 ----------
dec = [json.loads(l) for l in open(f'{T}/fase131-fotos/decisoes.jsonl')]
cred = [json.loads(l) for l in open(f'{T}/fase131-fotos/creditos.jsonl')]
# a revisão humana (revisao.jsonl) vale por cima da decisão da pesquisa
rev = {r['nome']: r for r in (json.loads(l) for l in open(f'{T}/fase131-fotos/revisao.jsonl'))}
dec = [dict(d, **rev[d['nome']], classe_atual=('QUEBRADA' if rev[d['nome']]['acao'] == 'sem_foto' else d['classe_atual'])) if d['nome'] in rev else d for d in dec]
for r in rev.values():
    if r['acao'] == 'trocar':
        cred = [c for c in cred if c['nome'] != r['nome']] + [{'nome': r['nome'], 'arquivo': r['arquivo_novo'], 'autor': r['autor'], 'licenca': r['licenca'], 'pagina': r['pagina']}]
    else:
        cred = [c for c in cred if c['nome'] != r['nome']]
trocas, semfoto, pequenas = [], [], []
for d in sorted(dec, key=lambda x: x['nome']):
    if d['acao'] == 'trocar':
        trocas.append(f"    [{js(d['nome'])}, {js(d['arquivo_novo'])}, {js(d['card'])}, {js(d['wide'])}]")
    elif d['classe_atual'] == 'QUEBRADA' or not d['arquivo_atual']:
        semfoto.append(js(d['nome']))
    else:
        # a foto atual é da pessoa, mas pequena: fica nos tamanhos pequenos; o retrato grande usa a placa
        pequenas.append(js(d['nome']))
# o Commons escreve o autor que não se sabe de vários jeitos ("Unknown Unknown", "Unknown author
# Unknown author", "desconhecido (…)"): no site, um só
import re
def autor_legivel(a):
    return 'autor desconhecido' if re.match(r'\s*(unknown|desconhecido|autor desconhecido)', a or '', re.I) else a
for c in cred:
    c['autor'] = autor_legivel(c['autor'])
for a in aprov:
    a['autor'] = autor_legivel(a['autor'])
creds = [f"    {js(c['nome'])}: {js({'autor': c['autor'], 'licenca': c['licenca'], 'pagina': c['pagina']})}" for c in sorted(cred, key=lambda x: x['nome'])]
f131 = f"""/* MeMotiva — curadoria/41-fase131-fotos.js
   Fase 131 — fotos (21/10/2026): troca das fotos que não existem mais no Commons ou são pequenas
   demais para o retrato grande, de Fernando Pessoa (a estátua do Chiado), de Blaise Pascal (a linha de
   escaneamento) e de Warren Buffett; ponto focal nos dois eixos; créditos de todas as fotos curadas.
   Cada arquivo novo é do Commons, com licença livre, conferido a olho, com a pessoa nomeada na descrição.
   Registro: curadoria/trabalho/fase131-fotos/ (REGRAS.md, estado.jsonl, decisoes.jsonl, revisao.jsonl,
   creditos.jsonl, folha-decisoes.jpg). Carregado na ordem definida em index.html. */

(function () {{
  /* {len(trocas)} trocas: [nome, arquivo do Commons, ponto focal do cartão, ponto focal largo] */
  var TROCAS = [
{(',' + chr(10)).join(trocas)}
  ];
  TROCAS.forEach(function (t) {{
    PHOTOS[t[0]] = {{ f: t[1], card: t[2], wide: t[3] }};
  }});
  /* {len(semfoto)} sem foto: o arquivo curado não existe mais e não há retrato livre que sirva. A placa
     com as iniciais fica no lugar (sem buscar a Wikipédia, que devolvia o mesmo arquivo ou outro pior). */
  [{', '.join(semfoto)}].forEach(function (n) {{
    PHOTOS[n] = {{ f: null, semFoto: true }};
  }});
  /* {len(pequenas)} com foto pequena e sem outra no Commons: a foto fica nos tamanhos pequenos
     (cartões); o retrato grande usa a placa, em vez de ampliar e borrar. */
  [{', '.join(pequenas)}].forEach(function (n) {{
    if (PHOTOS[n]) PHOTOS[n].pequena = true;
  }});
  /* créditos das {len(creds)} fotos curadas: "Foto: {{autor}} · {{licença}}" na página do autor */
  window.FOTO_CREDITOS = {{
{(',' + chr(10)).join(creds)}
  }};
}})();
"""
open(f'{raiz}/assets/js/curadoria/40-fase130-filmes-de-arquivo.js', 'w').write(f130)
open(f'{raiz}/assets/js/curadoria/41-fase131-fotos.js', 'w').write(f131)
print(len(aprov), 'filmes;', len(trocas), 'trocas,', len(semfoto), 'sem foto,', len(pequenas), 'pequenas,', len(creds), 'créditos')
