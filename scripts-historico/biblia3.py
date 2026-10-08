import json,re,unicodedata,csv
from rapidfuzz import fuzz, process
exec(open('/tmp/hist/biblia2.py').read().split("rd=lambda")[0])
rd=lambda p:list(csv.DictReader(open(p,encoding='utf-8-sig'),delimiter=';'))
fr=rd('/tmp/repo/curadoria/curadoria-frases.csv')
B=[r for r in fr if 'Almeida' in r['fonte'] or r['fonte'].startswith('Bíblia')]
pref=re.compile(r'^(Livro d[eo]s?|Carta d[aeo]s?|Carta aos?|Apóstolo)\s+',re.I)
ref_re=re.compile(r'(\d?\s?[A-Za-zÀ-ú]+)\s+(\d+):(\d+)(?:[–-](\d+))?')
def parse(fld):
    f=pref.sub('',fld.split(' · ')[0].strip())
    f=re.sub(r'^(Bíblia,\s*)','',f)
    m=ref_re.search(f)
    if m:
        b=book(m.group(1).strip())
        if b: return (b,int(m.group(2)),int(m.group(3)),int(m.group(4) or m.group(3)))
def clause(txt,old):
    parts=[p.strip() for p in re.split(r'(?<=[;:.])\s+',txt) if p.strip()]
    if len(txt)<=230 or len(parts)<2: return txt
    best=max(parts,key=lambda p:fuzz.partial_ratio(nz(old),nz(p)))
    return best if fuzz.partial_ratio(nz(old),nz(best))>=60 else txt
res=[];rem=[]
usados={}
for r in B:
    q=nz(r['frase']); cand=parse(r['autor']) or parse(r['fonte'])
    if cand:
        b,c,v1,v2=cand; txt=' '.join(byref.get((b,c,v),'') for v in range(v1,v2+1)).strip(); pr=fuzz.partial_ratio(q,nz(txt)); ref=(b,c,v1,v2)
    else:
        hit=process.extractOne(q,NV,scorer=fuzz.partial_ratio)
        n,c,v,t=verses[hit[2]]; txt=t; pr=hit[1]; ref=(n,c,v,v)
    exato = pr>=97 and nz(r['frase']) in nz(txt)
    novo = r['frase'] if exato else clause(txt,r['frase'])
    refs=f"{ref[0]} {ref[1]}:{ref[2]}"+(f"-{ref[3]}" if ref[3]!=ref[2] else '')
    res.append(dict(autor=r['autor'],old=r['frase'],new=novo,ref=refs,pr=round(pr),exato=exato,fonte_antiga=r['fonte'],cat=r['categoria']))
json.dump(res,open('/tmp/hist/biblia_map.json','w'),ensure_ascii=False)
from collections import Counter
dup=[k for k,v in Counter(x['ref'] for x in res).items() if v>1]
print(len(res),'| exatos mantidos:',sum(1 for x in res if x['exato']),'| refs repetidas:',dup)
print('pr<60 (revisar):')
for x in res:
    if x['pr']<60: print(' ',x['ref'],'|',x['old'][:55],'||',x['new'][:80],'|',x['pr'])
print('amostra:')
for x in res[:8]: print(' ',x['ref'],'|',x['old'][:45],'=>',x['new'][:90])
