"""Gera o bloco JavaScript de uma fase de curadoria a partir de um arquivo de decisões (JSONL).

Cada fase é um IIFE que se registra na cadeia window.__fase5Boot (ver ARCHITECTURE.md).
Quatro tipos, os mesmos usados nas Fases 119–128:

  insercao    frases novas verificadas        (modelo: Fases 127/128)
              linha: {"autor","acao":"insere","text","orig","obra","src","cat","notaAutoria","evidencia"}
              (linhas "sem_frase" são ignoradas aqui; ficam só no registro)
  frases      correções/remoções de frases    (modelo: Fases 121–125)
              linha: {"qid","acao":"corrige|remove|duplicata","text","orig","src","st","notaAutoria",
                      "evidencia","motivo","fontes","observacao","autor","contraparte"}
  obras       fatos das obras                 (modelo: Fase 124)
              linha: {"chave":"Autor||Título","acao":"ok|corrige|remove","campos":{d,ano,tipo,sobre,contexto,
                      momento,importancia,curiosidade},"motivo"}   (campo vazio = afirmação retirada)
  biografias  fatos das biografias/histórias  (modelo: Fase 126)
              linha: {"chave":"Autor","acao":"ok|corrige","campos":{papel,feitos,titulo,resumo,curta,bio,contexto,
                      contribuicoes,cronologia,nota,"historia:<id>":{title,role,excerpt,text}}}

Uso:
  python3 ferramentas/curadoria/gerar_bloco.py insercao --fase 129 --data 20/10/2026 \
      --entrada .trabalho/fase129/decisoes.jsonl --saida .trabalho/fase129/bloco.js \
      --resumo "lacunas, lote X" --registro curadoria/trabalho/fase129-decisoes.jsonl
Depois: python3 ferramentas/curadoria/nova_fase.py (instala o bloco como arquivo novo).
"""
import argparse, json, collections, sys


def fim(t):
    t = str(t or '').rstrip()
    return t if (not t or t[-1] in '.!?…') else t + '.'


def cabecalho(fase, data, titulo, resumo, registro):
    linhas = [f'Fase {fase} — {titulo} ({data}).']
    if resumo:
        linhas.append(resumo)
    if registro:
        linhas.append(f'Registro das decisões: {registro}.')
    corpo = '\n    '.join(linhas)
    return f' /* {corpo} */\n'


def cadeia():
    return """ var prev = window.__fase5Boot;
 window.__fase5Boot = function(){ if(typeof prev==='function') prev(); aplicar(); };
})();
"""


def insercao(D, a):
    I = [d for d in D if d.get('acao') == 'insere']
    lote = [[d['autor'], d['text'], d.get('orig') or '', d.get('obra') or '', d['cat'], d['src'], d.get('notaAutoria') or '',
             f"Fase {a.fase} ({a.data}): frase nova conferida na fonte. Evidência: {fim(d['evidencia'])}"] for d in I]
    pref = f'f{a.fase}'
    js = '(function(){\n' + cabecalho(a.fase, a.data, a.titulo or 'frases novas verificadas', a.resumo, a.registro)
    js += f""" var LOTE = {json.dumps(lote, ensure_ascii=False)};
 function aplicar(){{
  var nQ=0, pulos=[], semObra=[];
  var cats = (typeof CATEGORIES!=='undefined') ? CATEGORIES.map(function(c){{ return c.id; }}) : [];
  var qids = {{}}; QUOTES.forEach(function(q){{ qids[q.qid]=1; }});
  LOTE.forEach(function(r, idx){{
   /* CURADORIA_CHECAR: não entra texto idêntico, bloqueado (já removido) nem variante forte (>= 0,70) */
   var chk = window.CURADORIA_CHECAR(r[1], r[0], r[2]);
   var forte = chk.variantes.filter(function(v){{ return v.score >= 0.70; }});
   if(chk.exata || chk.bloqueada || forte.length){{ pulos.push(r[0]+' — '+r[1].slice(0,40)); return; }}
   if(r[3] && !(OBRAS[r[0]] && OBRAS[r[0]].some(function(o){{ return o.t===r[3]; }}))) semObra.push(r[0]+' — '+r[3]);
   var id = '{pref}'+idx.toString(36)+Math.abs((r[1].length*2654435761)%999983).toString(36);
   while(qids[id]) id += 'x';
   qids[id]=1;
   var q = {{ author:r[0], text:r[1], src:r[5], st:'A', cat: cats.indexOf(r[4])>=0 ? r[4] : 'reflexao', qid:id, notaInterna:r[7] }};
   if(r[6]) q.notaAutoria = r[6];
   if(r[2]) q.orig = r[2];
   QUOTES.push(q); nQ++;
  }});
  if(typeof reindexarQuotes==='function') reindexarQuotes();
  if(typeof reconstruirIndices==='function') reconstruirIndices();
  if(typeof window.CURADORIA_ATUALIZAR_CONTADORES==='function') window.CURADORIA_ATUALIZAR_CONTADORES();
  if(pulos.length) console.warn('MeMotiva · Fase {a.fase}: não inseridas — '+pulos.join('; '));
  if(semObra.length) console.warn('MeMotiva · Fase {a.fase}: obra fora do catálogo — '+semObra.join('; '));
  console.log('MeMotiva · Fase {a.fase}: +'+nQ+' frases.');
 }}
"""
    return js + cadeia(), f'{len(I)} frases para {len(set(d["autor"] for d in I))} pessoas'


def frases(D, a):
    MAP = {'text': 'text', 'orig': 'orig', 'src': 'src', 'st': 'st', 'notaAutoria': 'nota', 'evidencia': 'ev', 'motivo': 'mot',
           'fontes': 'fon', 'observacao': 'obs', 'autor': 'autor', 'contraparte': 'cp'}
    ops = []
    for r in D:
        o = {'qid': r['qid'], 'op': {'corrige': 'k', 'remove': 'r', 'duplicata': 'd'}[r['acao']]}
        for k, v in MAP.items():
            if r.get(k):
                o[v] = r[k]
        ops.append(o)
    ops.sort(key=lambda o: {'k': 0, 'r': 1, 'd': 2}[o['op']])
    iso = '-'.join(reversed(a.data.split('/')))
    c = collections.Counter(r['acao'] for r in D)
    js = '(function(){\n' + cabecalho(a.fase, a.data, a.titulo or 'correções de frases', a.resumo, a.registro)
    js += f""" var OPS = {json.dumps(ops, ensure_ascii=False)};
 function aplicar(){{
  var nk=0, nr=0, nd=0, nt=0, ausentes=[];
  var LOTE='Fase {a.fase} — {a.titulo or 'correções de frases'}';
  function nota(q, t){{ q.notaInterna = (q.notaInterna ? q.notaInterna+' ' : '') + t; }}
  function fim(t){{ t=String(t||'').replace(/\\s+$/,''); return /[.!?…]["”»)]?$/.test(t) ? t : t+'.'; }}
  function porQid(id){{ return QUOTES.filter(function(x){{ return x.qid===id; }})[0]; }}
  OPS.forEach(function(o){{
   var q = porQid(o.qid);
   if(!q){{ ausentes.push(o.qid); return; }}
   if(o.op==='r' || o.op==='d'){{
    /* toda remoção vai para o registro permanente (curadoria/remocoes-curadoria.csv) */
    var cp = o.cp ? porQid(o.cp) : null;
    window.CURADORIA_REMOVIDAS.push({{ data:'{iso}', lote:LOTE, commit_base:'', commit_remocao:'', autor:q.author, texto:q.text, tipo:(o.op==='d'?'variante-removida':'removida'), motivo:o.mot, fontes:o.fon||'', qid:q.qid, fonte_anterior:q.src, status_anterior:q.st, categoria_anterior:q.cat, contraparte:(cp?cp.text:''), similaridade:'', origem:'decisão desta sessão' }});
    if(typeof removerFrase==='function') removerFrase(q.qid, o.mot);
    if(o.op==='d') nd++; else nr++;
    return;
   }}
   if(o.text && o.text!==q.text){{
    window.CURADORIA_REMOVIDAS.push({{ data:'{iso}', lote:LOTE, commit_base:'', commit_remocao:'', autor:q.author, texto:q.text, tipo:'substituida', motivo:o.mot, fontes:o.ev||'', qid:q.qid, fonte_anterior:q.src, status_anterior:q.st, categoria_anterior:q.cat, contraparte:o.text, similaridade:'', origem:'decisão desta sessão' }});
    q.text = o.text; nt++;
   }}
   if(o.autor) q.author = o.autor;
   if(o.orig) q.orig = o.orig;
   if(o.src) q.src = o.src;
   if(o.nota) q.notaAutoria = o.nota;
   q.st = o.st || 'A';
   nota(q, 'Fase {a.fase} ({a.data}): '+fim(o.mot)+' Evidência: '+fim(o.ev)+(o.obs?' Observação: '+fim(o.obs):''));
   nk++;
  }});
  if(ausentes.length) console.warn('MeMotiva · Fase {a.fase}: qid não encontrado — '+ausentes.join(', '));
  console.log('MeMotiva · Fase {a.fase}: '+nk+' corrigidas ('+nt+' textos trocados); '+nr+' removidas; '+nd+' duplicatas removidas.');
  if(typeof reindexarQuotes==='function') reindexarQuotes();
  if(typeof reconstruirIndices==='function') reconstruirIndices();
 }}
"""
    return js + cadeia(), dict(c)


def obras(D, a):
    K = [{'k': d['chave'], 'c': d['campos']} for d in D if d['acao'] == 'corrige' and d.get('campos')]
    R = [{'k': d['chave'], 'm': d.get('motivo', '')} for d in D if d['acao'] == 'remove']
    js = '(function(){\n' + cabecalho(a.fase, a.data, a.titulo or 'fatos das obras', a.resumo, a.registro)
    js += f""" var CORR = {json.dumps(K, ensure_ascii=False)};
 var REMOVER = {json.dumps(R, ensure_ascii=False)};
 var CAMPOS_PG = ['sobre','contexto','momento','importancia','curiosidade'];
 function aplicar(){{
  var n=0, nf=0, ausentes=[];
  CORR.forEach(function(r){{
   var i = r.k.indexOf('||'), autor = r.k.slice(0,i), titulo = r.k.slice(i+2);
   var o = (OBRAS[autor]||[]).filter(function(w){{ return w.t===titulo; }})[0];
   var pg = (typeof OBRA_PAGINA!=='undefined') ? OBRA_PAGINA[r.k] : null;
   if(!o && !pg){{ ausentes.push(r.k); return; }}
   Object.keys(r.c).forEach(function(f){{
    var v = r.c[f];
    if(f==='d' || f==='ano' || f==='tipo'){{ if(o){{ if(f==='d' && o.d && !o.dAntiga) o.dAntiga = o.d; o[f]=v; nf++; }} }}
    else if(CAMPOS_PG.indexOf(f)>=0 && pg){{ if(v===''||v===null) delete pg[f]; else pg[f]=v; nf++; }}
   }});
   n++;
  }});
  var rem = [];
  REMOVER.forEach(function(r){{
   /* remove sem renumerar os oid das outras obras (os endereços delas não mudam) */
   var i = r.k.indexOf('||'), autor = r.k.slice(0,i), titulo = r.k.slice(i+2);
   var lista = OBRAS[autor]||[], j = -1;
   lista.forEach(function(w,x){{ if(w.t===titulo) j = x; }});
   if(j<0){{ ausentes.push(r.k); return; }}
   var o = lista.splice(j,1)[0];
   if(o.oid && typeof OBRA_POR_ID!=='undefined') delete OBRA_POR_ID[o.oid];
   if(typeof OBRA_PAGINA!=='undefined') delete OBRA_PAGINA[r.k];
   rem.push({{obra:r.k, motivo:r.m}});
  }});
  if(ausentes.length) console.warn('MeMotiva · Fase {a.fase}: obra não encontrada — '+ausentes.join(' | '));
  console.log('MeMotiva · Fase {a.fase}: '+n+' obras corrigidas ('+nf+' campos), '+rem.length+' retiradas.');
 }}
"""
    return js + cadeia(), f'{len(K)} corrigidas, {len(R)} retiradas'


def biografias(D, a):
    K = [{'k': d['chave'], 'c': d['campos']} for d in D if d['acao'] == 'corrige' and d.get('campos')]
    js = '(function(){\n' + cabecalho(a.fase, a.data, a.titulo or 'fatos das biografias e histórias', a.resumo, a.registro)
    js += f""" var CORR = {json.dumps(K, ensure_ascii=False)};
 var CAMPOS_PERFIL = ['titulo','resumo','curta','bio','contexto','contribuicoes','cronologia','nota'];
 function aplicar(){{
  var n=0, nf=0, ausentes=[];
  CORR.forEach(function(r){{
   var c = canonAuthor(r.k), p = PERFIS_PROFUNDOS[c];
   Object.keys(r.c).forEach(function(f){{
    var v = r.c[f];
    if(f.indexOf('historia:')===0){{
     var id = f.slice(9), s = STORIES.filter(function(x){{ return x.id===id; }})[0];
     if(!s){{ ausentes.push(r.k+' / '+f); return; }}
     Object.keys(v).forEach(function(g){{ s[g] = v[g]; nf++; }});
     return;
    }}
    /* o papel exibido vem do role da história, se houver; senão de PAPEIS */
    if(f==='papel'){{
     var st = STORIES.filter(function(x){{ return canonAuthor(x.author)===c && x.role; }})[0];
     if(st) st.role = v; else PAPEIS[c] = v;
     nf++; return;
    }}
    if(f==='feitos'){{ FEITOS[c] = v; nf++; return; }}
    if(CAMPOS_PERFIL.indexOf(f)>=0){{
     if(!p){{ ausentes.push(r.k+' / '+f); return; }}
     if(v===''||v===null) delete p[f]; else p[f] = v;
     nf++; return;
    }}
    ausentes.push(r.k+' / campo '+f);
   }});
   n++;
  }});
  if(ausentes.length) console.warn('MeMotiva · Fase {a.fase}: não aplicado — '+ausentes.join(' | '));
  console.log('MeMotiva · Fase {a.fase}: '+n+' autores corrigidos ('+nf+' campos).');
 }}
"""
    return js + cadeia(), f'{len(K)} autores corrigidos'


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('tipo', choices=['insercao', 'frases', 'obras', 'biografias'])
    ap.add_argument('--fase', required=True, help='número da fase (ex.: 129)')
    ap.add_argument('--data', required=True, help='DD/MM/AAAA')
    ap.add_argument('--entrada', required=True, help='decisões em JSONL')
    ap.add_argument('--saida', required=True, help='arquivo .js do bloco gerado')
    ap.add_argument('--titulo', default='', help='título curto da fase (vai no comentário e no lote)')
    ap.add_argument('--resumo', default='', help='frase de resumo para o comentário do bloco')
    ap.add_argument('--registro', default='', help='caminho do JSONL de decisões no repositório (curadoria/trabalho/...)')
    a = ap.parse_args()
    D = [json.loads(l) for l in open(a.entrada, encoding='utf-8') if l.strip()]
    js, resumo = {'insercao': insercao, 'frases': frases, 'obras': obras, 'biografias': biografias}[a.tipo](D, a)
    open(a.saida, 'w', encoding='utf-8').write(js)
    print('bloco gravado em', a.saida, '·', resumo)
