import json,re
from rapidfuzz import fuzz
def nz(t):
    import unicodedata; return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
def ortho(t):
    t=re.sub(r'\b(v|l|cr|d|r)êem\b',lambda m:m.group(1)+'eem',t); t=t.replace('vôo','voo'); return re.sub(r'\s+',' ',t).strip()
ED={'acf':'Almeida Corrigida Fiel','aa':'Almeida Revisada Imprensa Bíblica','nvi':'Nova Versão Internacional'}
BIB={}
for k in ED:
    d=json.load(open(f'/tmp/bib/json/{k}.json',encoding='utf-8-sig'))
    BIB[k]={(b['name'],ci,vi):ortho(v) for b in d for ci,c in enumerate(b['chapters'],1) for vi,v in enumerate(c,1)}
fin=json.load(open('/tmp/hist/biblia_final.json'))
def clause(txt,old):
    parts=[p.strip() for p in re.split(r'(?<=[;:.!?])\s+',txt) if p.strip()]
    if len(txt)<=230 or len(parts)<2: return txt
    best=max(parts,key=lambda p:fuzz.partial_ratio(nz(old),nz(p)))
    return best if fuzz.partial_ratio(nz(old),nz(best))>=60 else txt
def fim(t):
    t=t.strip(); t=re.sub(r'[;,:]\s*$','',t); return t if re.search(r'[.!?]$',t) else t+'.'
out=[]; seen={}
for o in fin:
    m=re.match(r'^(.+?) (\d+):(\d+)(?:-(\d+))?$',o['ref']); b,c,v1,v2=m.group(1),int(m.group(2)),int(m.group(3)),int(m.group(4) or m.group(3))
    best=None
    for k in ('acf','aa','nvi'):
        t=' '.join(BIB[k].get((b,c,v),'') for v in range(v1,v2+1)).strip()
        if not t: continue
        cl=clause(t,o['old']); sc=fuzz.partial_ratio(nz(o['old']),nz(cl))
        if best is None or sc>best[0]+1: best=(sc,k,cl)
    sc,k,cl=best; novo=o['old'] if nz(o['old']) in nz(cl) else fim(cl)
    exato_old = any(nz(o['old']) in nz(' '.join(BIB[e].get((b,c,v),'') for v in range(v1,v2+1))) for e in ED)
    single=(v1==v2)
    dup=o['acao']=='duplicata' or (single and (o['ref'] in seen))
    if not dup and single: seen[o['ref']]=o['i']
    out.append(dict(i=o['i'],autor=o['autor'],old=o['old'],novo=novo,ref=o['ref'],ed=k,sc=sc,acao='duplicata' if dup else 'substituir',cat=o['cat'],mudou=(novo!=o['old'])))
json.dump(out,open('/tmp/hist/biblia_final2.json','w'),ensure_ascii=False)
from collections import Counter
print(Counter(o['acao'] for o in out),Counter(o['ed'] for o in out if o['acao']=='substituir'),'| mudam:',sum(1 for o in out if o['acao']=='substituir' and o['mudou']))
for i in (12,13,14,26,45,57,2,4):
    o=out[i]; print(i,o['ref'],o['ed'],o['sc'],'|',o['old'][:38],'=>',o['novo'][:95])
