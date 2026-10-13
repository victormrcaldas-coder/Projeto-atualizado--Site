"""Valida decisões de inserção de frases antes de gerar o bloco: campos obrigatórios, categoria válida,
autor da lista, pontuação final, obra do catálogo e semelhança com frases atuais/removidas
(coeficiente de Dice >= 0,55 é acusado para revisão humana).

As listas dos lotes são JSONL com {"autor","frases_atuais":[{text,orig}],"obras_catalogo":[{t}],
"removidas_registro":[{texto}]} — o formato que as Fases 127/128 deram aos agentes.

Uso: python3 ferramentas/curadoria/validar_insercoes.py --listas ".trabalho/fase130/lista_*.jsonl" \
        --decisoes ".trabalho/fase130/dec_*.jsonl"
"""
import json, os, sys, glob, re, unicodedata, collections, argparse
ap = argparse.ArgumentParser(); ap.add_argument('--listas', required=True); ap.add_argument('--decisoes', required=True)
ARGS = ap.parse_args()
CATS = set('vida reflexao filosofos motivacao dificeis conforto felicidade gratidao amor amizade familia educacao autorreconhecimento fe politica lideranca negocios empreendedorismo financas manipulacao empoderamento'.split())
def norm(t):
    t = unicodedata.normalize('NFD', str(t).lower()); t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]', '', t)
def bg(t):
    n = norm(t); return collections.Counter(n[i:i+2] for i in range(len(n)-1))
def dice(a, b):
    A, B = bg(a), bg(b); s = sum((A & B).values()); return 2*s/max(1, sum(A.values())+sum(B.values()))
L = {}
for f in glob.glob(ARGS.listas):
    for l in open(f, encoding='utf-8'):
        it = json.loads(l); L[it['autor']] = it
files = sorted(glob.glob(ARGS.decisoes))
prob = []; ins = collections.Counter(); fim = {}
for f in files:
    novos = collections.defaultdict(list)
    for n, l in enumerate(open(f, encoding='utf-8'), 1):
        try: d = json.loads(l)
        except Exception as e: prob.append((f, n, 'json', str(e))); continue
        a = d.get('autor'); tag = (os.path.basename(f), n, a)
        if a not in L: prob.append(tag + ('autor fora da lista',)); continue
        if d.get('acao') == 'sem_frase': fim[a] = d; continue
        if d.get('acao') != 'insere': prob.append(tag + ('acao', d.get('acao'))); continue
        for k in ('text', 'src', 'cat', 'evidencia'):
            if not d.get(k): prob.append(tag + ('falta ' + k,))
        if d.get('cat') not in CATS: prob.append(tag + ('cat', d.get('cat')))
        t = d.get('text', '')
        if t and not re.search(r'[.!?…]["”»)]?$', t): prob.append(tag + ('sem pontuação final', t[-30:]))
        for q in L[a]['frases_atuais']:
            s = max(dice(t, q['text']), dice(d.get('orig') or '', q.get('orig') or '') if d.get('orig') and q.get('orig') else 0)
            if s >= 0.55: prob.append(tag + ('parecida com atual %.2f' % s, q['text'][:60]))
        for r in L[a]['removidas_registro']:
            if r.get('texto') and dice(t, r['texto']) >= 0.55: prob.append(tag + ('parecida com removida %.2f' % dice(t, r['texto']), r['texto'][:60]))
        for o in novos[a]:
            if dice(t, o) >= 0.55: prob.append(tag + ('repetida no lote',))
        novos[a].append(t); ins[a] += 1
        if d.get('obra') and d['obra'] not in [o['t'] for o in L[a]['obras_catalogo']]: prob.append(tag + ('obra fora do catálogo', d['obra']))
print('inseridas', sum(ins.values()), 'pessoas com inserção', len(ins), 'sem_frase', len(fim))
for p in prob: print(' !', p)
