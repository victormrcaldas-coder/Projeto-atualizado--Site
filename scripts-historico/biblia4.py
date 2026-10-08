import json,re,unicodedata,csv
from rapidfuzz import fuzz, process
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
d=json.load(open('/tmp/bib/json/acf.json',encoding='utf-8-sig'))
def ortho(t):
    t=re.sub(r'\b(v|l|cr|d|r)êem\b',lambda m:m.group(1)+'eem',t); t=t.replace('vôo','voo'); return re.sub(r'\s+',' ',t).strip()
verses=[(b['name'],ci,vi,ortho(v)) for b in d for ci,c in enumerate(b['chapters'],1) for vi,v in enumerate(c,1)]
byref={(n,c,v):t for n,c,v,t in verses}
NV=[nz(v[3]) for v in verses]
names=[b['name'] for b in d]; BN={nz(n):n for n in names}
ALIAS={'miqueias':'Miquéias','joao':'João'}
def book(s): k=nz(s); return ALIAS.get(k) or BN.get(k)
rd=lambda p:list(csv.DictReader(open(p,encoding='utf-8-sig'),delimiter=';'))
fr=rd('/tmp/repo/curadoria/curadoria-frases.csv')
B=[r for r in fr if 'Almeida' in r['fonte'] or r['fonte'].startswith('Bíblia')]
pref=re.compile(r'^(Livro d[eo]s?|Carta d[aeo]s?|Carta aos?|Apóstolo)\s+',re.I)
ref_re=re.compile(r'(\d?\s?[A-Za-zÀ-ú]+)\s+(\d+):(\d+)(?:[–-](\d+))?')
def parse(fld):
    f=pref.sub('',fld.split(' · ')[0].strip()); f=re.sub(r'^(Bíblia,\s*)','',f)
    m=ref_re.search(f)
    if m:
        b=book(m.group(1).strip())
        if b: return (b,int(m.group(2)),int(m.group(3)),int(m.group(4) or m.group(3)))
def clause(txt,old):
    parts=[p.strip() for p in re.split(r'(?<=[;:.!?])\s+',txt) if p.strip()]
    if len(txt)<=230 or len(parts)<2: return txt
    best=max(parts,key=lambda p:fuzz.partial_ratio(nz(old),nz(p)))
    return best if fuzz.partial_ratio(nz(old),nz(best))>=60 else txt
def search(q):
    hit=process.extractOne(q,NV,scorer=fuzz.token_set_ratio); n,c,v,t=verses[hit[2]]; return (n,c,v,v),t,hit[1]
res=[]
for r in B:
    q=nz(r['frase']); cand=parse(r['autor']) or parse(r['fonte']); how='ref'
    if cand:
        b,c,v1,v2=cand; txt=' '.join(byref.get((b,c,v),'') for v in range(v1,v2+1)).strip(); pr=fuzz.partial_ratio(q,nz(txt)); ref=cand
        if pr<62:
            alt,t2,s2=search(r['frase'])
            if s2>=75 and fuzz.partial_ratio(q,nz(t2))>pr+10: ref,txt,pr,how=alt,t2,fuzz.partial_ratio(q,nz(t2)),'texto(ref corrigida)'
    else: ref,txt,s2=search(r['frase']); pr=fuzz.partial_ratio(q,nz(txt)); how='texto'
    exato = pr>=97 and q in nz(txt)
    novo = r['frase'] if exato and r['frase'] in txt else clause(txt,r['frase'])
    refs=f"{ref[0]} {ref[1]}:{ref[2]}"+(f"-{ref[3]}" if ref[3]!=ref[2] else '')
    res.append(dict(autor=r['autor'],old=r['frase'],new=novo,ref=refs,pr=round(pr),how=how,fonte_antiga=r['fonte'],cat=r['categoria'],status=r['status']))
json.dump(res,open('/tmp/hist/biblia_map4.json','w'),ensure_ascii=False)
for i,x in enumerate(res): print(i,x['ref'],'|',x['pr'],x['how'][:5],'|',x['old'][:46],'=>',x['new'][:78])
