"""Junta as decisões dos lotes (um JSONL por agente/lote) num arquivo só, aplicando a revisão humana.

A revisão (overrides) é um JSONL com linhas que casam pelo autor + início do texto:
  {"autor": "...", "match": "início do texto", "src": "...", "motivo": "..."}   -> troca campos
  {"autor": "...", "match": "início do texto", "acao": "remove", "motivo": "..."} -> retira a frase
O motivo da revisão é anexado à evidência ("Revisão: ...").

Uso:
  python3 ferramentas/curadoria/juntar_decisoes.py --lotes ".trabalho/fase130/dec_*.jsonl" \
      --revisao .trabalho/fase130/revisao.jsonl --saida .trabalho/fase130/decisoes.jsonl
"""
import argparse, glob, json, collections

ap = argparse.ArgumentParser()
ap.add_argument('--lotes', required=True, help='glob dos arquivos de decisão dos lotes')
ap.add_argument('--revisao', default=None)
ap.add_argument('--saida', required=True)
a = ap.parse_args()
OV = [json.loads(l) for l in open(a.revisao, encoding='utf-8')] if a.revisao else []
usados, out = set(), []
for f in sorted(glob.glob(a.lotes)):
    for l in open(f, encoding='utf-8'):
        if not l.strip():
            continue
        d = json.loads(l)
        if d.get('acao') == 'insere':
            for i, o in enumerate(OV):
                if o['autor'] == d['autor'] and d['text'].startswith(o['match']):
                    usados.add(i)
                    if o.get('acao') == 'remove':
                        d = None
                        break
                    for k, v in o.items():
                        if k not in ('autor', 'match', 'motivo'):
                            d[k] = v
                    d['evidencia'] = d['evidencia'].rstrip('. ') + '. Revisão: ' + o['motivo'] + '.'
            if d is None:
                continue
        out.append(d)
for i, o in enumerate(OV):
    if i not in usados:
        print('AVISO: revisão sem correspondência:', o['autor'], '|', o['match'])
open(a.saida, 'w', encoding='utf-8').write(''.join(json.dumps(d, ensure_ascii=False) + '\n' for d in out))
print(collections.Counter(d['acao'] for d in out), '·', len({d['autor'] for d in out if d['acao'] == 'insere'}), 'pessoas com frase nova')
