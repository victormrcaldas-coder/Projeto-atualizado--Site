import json,re,unicodedata,csv,difflib
from rapidfuzz import fuzz, process
from collections import Counter
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
d=json.load(open('/tmp/bib/json/aa.json',encoding='utf-8-sig'))
names=[b['name'] for b in d]
verses=[]
for b in d:
    for ci,c in enumerate(b['chapters'],1):
        for vi,v in enumerate(c,1): verses.append((b['name'],ci,vi,v))
byref={(n,c,v):t for n,c,v,t in verses}
BN={nz(n):n for n in names}
ALIAS={'miqueias':'Miquéias','1samuel':'1 Samuel','2corintios':'2 Coríntios','livrodossalmos':'Salmos','livrodeproverbios':'Provérbios','livrodosproverbios':'Provérbios','livrodeeclesiastes':'Eclesiastes','cartadetiago':'Tiago','cartaaoscolossenses':'Colossenses'}
def book(s):
    k=nz(s); return ALIAS.get(k) or BN.get(k)
def sim(a,b): return fuzz.ratio(nz(a),nz(b))/100
NV=[nz(v[3]) for v in verses]
rd=lambda p:list(csv.DictReader(open(p,encoding='utf-8-sig'),delimiter=';'))
fr=rd('/tmp/repo/curadoria/curadoria-frases.csv')
B=[r for r in fr if 'Almeida' in r['fonte'] or r['fonte'].startswith('Bíblia')]
ref_re=re.compile(r'(\d?\s?[A-Za-zÀ-ú]+(?:\s[A-Za-zÀ-ú]+)?)\s+(\d+):(\d+)(?:[–-](\d+))?')
out=[]
for r in B:
    cand=None
    for fld in (r['autor'],r['fonte']):
        m=ref_re.search(fld)
        if m:
            b=book(m.group(1).strip())
            if b: cand=(b,int(m.group(2)),int(m.group(3)),int(m.group(4) or m.group(3))); break
    status='sem-ref'; txt=None; loc=None; sc=0
    if cand:
        b,c,v1,v2=cand
        txt=' '.join(byref.get((b,c,v),'') for v in range(v1,v2+1)); sc=sim(r['frase'],txt); loc=f"{b} {c}:{v1}"+(f"-{v2}" if v2!=v1 else '')
        status='ref-ok' if sc>=0.55 else 'ref-divergente'
    if status!='ref-ok':
        q=nz(r['frase'])
        hit=process.extractOne(q,NV,scorer=fuzz.partial_ratio)
        if hit and hit[1]>=88:
            n,c,v,t=verses[hit[2]]; txt=t; loc=f"{n} {c}:{v}"; sc=hit[1]/100; status='achado-por-texto'
    out.append(dict(autor=r['autor'],frase=r['frase'],fonte=r['fonte'],status=status,loc=loc,txt=txt,sc=round(sc,2),cat=r['categoria']))
json.dump(out,open('/tmp/hist/biblia_out.json','w'),ensure_ascii=False)
print(Counter(o['status'] for o in out))
for o in out:
    if o['status'] in('sem-ref','ref-divergente'): print(o['status'],'|',o['autor'][:18],'|',o['frase'][:70],'|',o['fonte'][:40],'|',o['loc'],o['sc'])
