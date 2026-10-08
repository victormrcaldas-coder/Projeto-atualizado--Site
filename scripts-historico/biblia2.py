import json,re,unicodedata,csv
from rapidfuzz import fuzz, process
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
d=json.load(open('/tmp/bib/json/aa.json',encoding='utf-8-sig'))
verses=[(b['name'],ci,vi,v) for b in d for ci,c in enumerate(b['chapters'],1) for vi,v in enumerate(c,1)]
byref={(n,c,v):t for n,c,v,t in verses}
NV=[nz(v[3]) for v in verses]
names=[b['name'] for b in d]; BN={nz(n):n for n in names}
ALIAS={'miqueias':'Miquéias','livrodossalmos':'Salmos','livrodeproverbios':'Provérbios','livrodosproverbios':'Provérbios','livrodeeclesiastes':'Eclesiastes','cartadetiago':'Tiago','cartaaoscolossenses':'Colossenses','cartaaoshebreus':'Hebreus','cartadetiago':'Tiago'}
def book(s): k=nz(s); return ALIAS.get(k) or BN.get(k)
rd=lambda p:list(csv.DictReader(open(p,encoding='utf-8-sig'),delimiter=';'))
fr=rd('/tmp/repo/curadoria/curadoria-frases.csv')
B=[r for r in fr if 'Almeida' in r['fonte'] or r['fonte'].startswith('Bíblia')]
ref_re=re.compile(r'(\d?\s?[A-Za-zÀ-ú]+(?:\s[A-Za-zÀ-ú]+)?)\s+(\d+):(\d+)(?:[–-](\d+))?')
out=[]
for r in B:
    q=nz(r['frase']); cand=None
    for fld in (r['autor'],r['fonte']):
        m=ref_re.search(fld)
        if m:
            b=book(m.group(1).strip())
            if b: cand=(b,int(m.group(2)),int(m.group(3)),int(m.group(4) or m.group(3))); break
    o=dict(autor=r['autor'],frase=r['frase'],fonte=r['fonte'],cat=r['categoria'],ref=None,txt=None,pr=0,cls='')
    if cand:
        b,c,v1,v2=cand; txt=' '.join(byref.get((b,c,v),'') for v in range(v1,v2+1)).strip()
        pr=fuzz.partial_ratio(q,nz(txt)); o.update(ref=f"{b} {c}:{v1}"+(f"-{v2}" if v2!=v1 else ''),txt=txt,pr=pr)
        o['cls']='trecho-exato' if pr>=95 else 'parafrase-mesmo-versiculo' if pr>=60 else 'ref-duvidosa'
    else: o['cls']='sem-ref'
    if o['cls'] in('sem-ref','ref-duvidosa'):
        hit=process.extractOne(q,NV,scorer=fuzz.partial_ratio)
        if hit and hit[1]>=90:
            n,c,v,t=verses[hit[2]]; o.update(ref=f"{n} {c}:{v}",txt=t,pr=hit[1],cls='achado-por-texto')
    out.append(o)
json.dump(out,open('/tmp/hist/biblia_out2.json','w'),ensure_ascii=False)
from collections import Counter
print(Counter(o['cls'] for o in out))
for o in out:
    if o['cls'] in('sem-ref','ref-duvidosa'): print(o['cls'],'|',o['autor'][:18],'|',o['frase'][:70],'|',o['fonte'][:38],'|',o['ref'],o['pr'])
print('--- parafrase (amostra)')
for o in [x for x in out if x['cls']=='parafrase-mesmo-versiculo'][:12]: print(o['ref'],'|',o['frase'][:55],'|| ARA:',o['txt'][:70])
