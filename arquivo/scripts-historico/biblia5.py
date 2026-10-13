import json,re
exec(open('/tmp/hist/biblia4.py').read().split("res=[]")[0])
res=json.load(open('/tmp/hist/biblia_map4.json'))
OV={0:('Hebreus',12,11,11),13:('Filipenses',4,13,13),14:('1 Tessalonicenses',5,16,18),17:('Provérbios',4,7,7),19:('Salmos',46,10,10),24:('1 Coríntios',13,2,2),26:('João',14,6,6),36:('Filipenses',4,6,6),44:('Romanos',12,2,2),45:('Romanos',8,28,28),57:('João',15,12,12),79:('Romanos',12,21,21),93:('1 João',4,16,16),100:('Romanos',5,5,5),11:('Mateus',5,44,44),10:('Lucas',6,37,37),50:('Mateus',6,33,33)}
def txtof(b,c,v1,v2): return ' '.join(byref.get((b,c,v),'') for v in range(v1,v2+1)).strip()
miss=[]
for i,(b,c,v1,v2) in OV.items():
    t=txtof(b,c,v1,v2)
    if not t: miss.append((i,b)); continue
    res[i]['ref']=f"{b} {c}:{v1}"+(f"-{v2}" if v2!=v1 else ''); res[i]['new']=clause(t,res[i]['old']) if i not in(14,) else t; res[i]['pr']=round(fuzz.partial_ratio(nz(res[i]['old']),nz(res[i]['new'])))
print('livros não achados:',miss)
def fim(t):
    t=t.strip(); t=re.sub(r'[;,:]\s*$','',t); return t if re.search(r'[.!?]$',t) else t+'.'
seen={}; out=[]
for i,x in enumerate(res):
    novo=fim(x['new']) if not (x['old'] in x['new'] and x['new']==x['old']) else x['old']
    if i==80: out.append(dict(i=i,autor=x['autor'],old=x['old'],acao='duplicata',ref=x['ref'],novo='',cat=x['cat'])); continue
    key=novo
    if key in seen: out.append(dict(i=i,autor=x['autor'],old=x['old'],acao='duplicata',ref=x['ref'],novo=novo,cat=x['cat'],igual_a=seen[key])); continue
    seen[key]=i
    out.append(dict(i=i,autor=x['autor'],old=x['old'],acao='substituir',ref=x['ref'],novo=novo,cat=x['cat'],mudou=(novo!=x['old'])))
json.dump(out,open('/tmp/hist/biblia_final.json','w'),ensure_ascii=False)
from collections import Counter
print(Counter(o['acao'] for o in out),'| mudam de texto:',sum(1 for o in out if o['acao']=='substituir' and o['mudou']))
for i in (10,11,14,17,50,57,93,100): print(i,out[i]['ref'],'|',out[i]['old'][:40],'=>',out[i]['novo'][:110])
print([ (o['i'],o['ref']) for o in out if o['acao']=='duplicata'])
