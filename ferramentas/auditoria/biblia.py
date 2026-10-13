"""Confere cada frase bíblica contra o texto aberto da edição indicada no rótulo da fonte.

Edições abertas (repositório thiagobodruk/biblia, baixar para .trabalho/biblia/):
  ACF = Almeida Corrigida Fiel (acf.json), AA = Almeida Revisada Imprensa Bíblica (aa.json), NVI (nvi.json)
  curl -o .trabalho/biblia/acf.json https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/acf.json  (idem aa, nvi)
Uso: python3 ferramentas/auditoria/biblia.py [.trabalho/estado/auditoria.json]
Não altera nada; gera .trabalho/auditoria/biblia.json.
"""
import json, re, sys, os, unicodedata, collections
RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
E = json.load(open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(RAIZ, '.trabalho/estado/auditoria.json'), encoding='utf-8'))
ED = {'Almeida Corrigida Fiel': 'acf', 'Almeida Revisada Imprensa Bíblica': 'aa', 'Nova Versão Internacional': 'nvi'}
def norm(t):
    t = unicodedata.normalize('NFD', str(t).lower()); t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    t = t.replace('vêem', 'veem')
    return re.sub(r'[^a-z0-9 ]', ' ', t)
def toks(t): return norm(t).split()
B = {}
for sig, arq in ED.items():
    d = json.load(open(os.path.join(RAIZ, '.trabalho/biblia', arq + '.json'), encoding='utf-8-sig'))
    B[sig] = {norm(l['name']).replace(' ', ''): l['chapters'] for l in d}
ALIAS = {'cantico': 'cantares', 'canticodoscanticos': 'cantares', 'atosdosapostolos': 'atos', 'jo': 'jo'}
REF = re.compile(r'((?:[123]\s*)?[A-ZÁÉÍÓÚÂÊÔÃÕÇa-záéíóúâêôãõç]+(?:\s+[a-záéíóúâêôãõç]+)*)\s+(\d+):(\d+)(?:\s*[-–]\s*(\d+))?')
res = collections.defaultdict(list)
for q in E['QUOTES']:
    src = q.get('src') or ''
    sig = next((s for s in ED if s in src), None)
    if not sig:
        if re.search(r'Almeida|Versão|Bíblia|ARA|ACF|NVI', src): res['edicao_nao_aberta'].append((q['qid'], q['author'], src))
        continue
    m = REF.search(src.split('·')[0])
    if not m: res['referencia_ilegivel'].append((q['qid'], src)); continue
    livro = norm(m.group(1)).replace(' ', ''); livro = ALIAS.get(livro, livro)
    caps = B[sig].get(livro)
    if not caps: res['livro_nao_achado'].append((q['qid'], m.group(1), src)); continue
    c, v1 = int(m.group(2)), int(m.group(3)); v2 = int(m.group(4) or v1)
    try: verso = ' '.join(caps[c-1][v-1] for v in range(v1, v2+1))
    except IndexError: res['versiculo_inexistente'].append((q['qid'], src)); continue
    tq, tv = toks(q['text']), toks(verso)
    sq = ' '.join(tq); sv = ' '.join(tv)
    if sq in sv: res['ok_trecho_exato'].append(q['qid']); continue
    # proporção de palavras do texto que aparecem na ordem do versículo
    comum = sum((collections.Counter(tq) & collections.Counter(tv)).values()) / max(1, len(tq))
    res['divergente' if comum < 0.97 else 'ok_quase_exato'].append((q['qid'], q['author'], src, round(comum, 2), q['text'], verso))
os.makedirs(os.path.join(RAIZ, '.trabalho/auditoria'), exist_ok=True)
json.dump(res, open(os.path.join(RAIZ, '.trabalho/auditoria/biblia.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for k in sorted(res): print(f'{len(res[k]):4d} {k}')
