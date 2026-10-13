import json,csv,io,re,unicodedata,difflib,subprocess
from collections import Counter,defaultdict
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
def J(p):
    x=json.load(open(p)); return json.loads(x) if isinstance(x,str) else x
def rd(p): return list(csv.DictReader(open(p,encoding='utf-8-sig'),delimiter=';'))
old=J('old_quotes.json'); qua=J('old_quarentena.json')
v105=rd('/mnt/user-data/uploads/curadoria-frases__1_.csv')
cur=rd('/tmp/repo/curadoria/curadoria-frases.csv')
first=rd_first=None
raw=subprocess.check_output(['git','-C','/tmp/repo','show','8d1d990:curadoria/curadoria-frases.csv']).decode('utf-8-sig')
r0=list(csv.DictReader(io.StringIO(raw),delimiter=';'))
K=lambda a,t:(a,nz(t))
def pool(rows,ak='autor',tk='frase'):
    d=defaultdict(list)
    for x in rows: d[x[ak]].append(x)
    return d
def best(a,t,p,tk):
    b=(0,None)
    for x in p.get(a,[]):
        r=difflib.SequenceMatcher(None,nz(t),nz(x[tk])).ratio()
        if r>b[0]: b=(r,x)
    return b
Vp=pool(v105); Cp=pool(cur); 
V={K(x['autor'],x['frase']) for x in v105}; A={K(x['a'],x['t']):x for x in old}
Cset={K(x['autor'],x['frase']) for x in cur}
# 1) quarentena
q_rows=[];stat=Counter()
for x in qua:
    k=K(x['autor'],x['texto'])
    if k in Cset: st='ativa-hoje-mesma-chave'
    else:
        r,m=best(x['autor'],x['texto'],Cp,'frase')
        st='ativa-hoje-variante' if r>=0.80 else 'removida'
    stat[st]+=1; q_rows.append((x,st))
print('quarentena:',stat)
# 2) old - v105
gone=[A[k] for k in A.keys()-V]
rows2=[]
inold=lambda m:K(m['autor'],m['frase']) in A
c2=Counter()
for x in gone:
    r,m=best(x['a'],x['t'],Vp,'frase')
    if m is not None and r>=0.70: c='fundida-ou-modificada' if not inold(m) else 'fundida'
    elif m is not None and r>=0.50: c='duvida'
    else: c='removida'
    # ainda ativa hoje?
    ka=K(x['a'],x['t']);
    c2[c]+=1; rows2.append((x,c,round(r,2),m['frase'] if m else '', 'ativa-hoje' if ka in Cset else ''))
print('old-v105:',c2,'| ainda ativas hoje (mesma chave):',sum(1 for r in rows2 if r[4]))
# 3) v105 - repo-first
R0={K(x['autor'],x['frase']):x for x in r0}
vm=[x for x in v105 if K(x['autor'],x['frase']) not in R0]
print('v105 - repo-first:',[(x['autor'],x['frase'][:60],x['fonte'][:40]) for x in vm])
json.dump({'quar':[(x,s) for x,s in q_rows],'old':[(x,c,r,m,a) for x,c,r,m,a in rows2],'vm':vm},open('pre2.json','w'),ensure_ascii=False)
# exemplos
for x,c,r,m,a in rows2:
    if c=='duvida': print('DUVIDA',r,x['a'],'|',x['t'][:70],'||',m[:70]); 
    if c=='duvida' and r>0.66: pass
