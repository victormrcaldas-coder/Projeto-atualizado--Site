import json,csv,io,re,unicodedata,subprocess,difflib
from collections import Counter,defaultdict
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
def J(p):
    x=json.load(open(p)); return json.loads(x) if isinstance(x,str) else x
old=J('old_quotes.json'); qua=J('old_quarentena.json')
v105=list(csv.DictReader(open('/mnt/user-data/uploads/curadoria-frases__1_.csv',encoding='utf-8-sig'),delimiter=';'))
cur=J('/tmp/t/quotes.json') if False else None
K=lambda a,t:(a,nz(t))
V={K(x['autor'],x['frase']):x for x in v105}
byV=defaultdict(list)
for x in v105: byV[x['autor']].append(x)
def best(a,t,pool):
    b=(0,None)
    for x in pool.get(a,[]):
        r=difflib.SequenceMatcher(None,nz(t),nz(x['frase'])).ratio()
        if r>b[0]: b=(r,x)
    return b
A={K(x['a'],x['t']):x for x in old}
gone=[A[k] for k in A.keys()-V.keys()]
cls=Counter(); out=[]
for x in gone:
    r,m=best(x['a'],x['t'],byV)
    inold=m is not None and K(m['autor'],m['frase']) in A
    if m is not None and r>=0.70 and not inold: c='modificada-ou-fundida'
    elif m is not None and r>=0.70 and inold: c='fundida-em-existente'
    elif m is not None and r>=0.5: c='duvida'
    else: c='removida'
    cls[c]+=1; out.append((x,c,r,m))
print(cls)
cand=Counter(('ou ' in x['s'] and ' ou ' in x['s']) for x,c,r,m in out if c=='removida'); print('removidas com " ou " na fonte (classe B?):',cand)
print(Counter(x['s'][:30] for x,c,r,m in out if c=='removida').most_common(8))
for x,c,r,m in out[:0]: pass
# quarentena: restauradas?
cur=[]
