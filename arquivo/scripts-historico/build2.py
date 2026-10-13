import json,csv,io,re,unicodedata,difflib
from collections import Counter,defaultdict
exec(open('pre2.py').read().split("# 1) quarentena")[0])
P=json.load(open('pre2.json'))
# --- registros pré-28/09
rows=[]
LOTE_Q='Pré-28/09 — quarentena do build antigo (3.196 frases)'
LOTE_D='Pré-28/09 — diff build antigo (3.196) → v105 (3.132)'
LOTE_R='Pré-28/09 — v105 → primeira exportação do repositório'
oldq={K(x['a'],x['t']):x for x in old}
for x,st in P['quar']:
    if st=='removida':
        rows.append(dict(data='',lote=LOTE_Q,commit_base='build antigo (3.196 frases)',commit_remocao='',autor=x['autor'],texto=x['texto'],tipo='historico-quarentena',
          motivo='Quarentena do build antigo: '+x['motivo']+'. A fonte registrada era genérica ("'+x['fonteAnterior']+'"). Dos 995 itens da quarentena, o CHECKPOINT do build antigo informa que 42 foram resgatados e 953 permaneceram fora; o momento exato da remoção não é recuperável.',
          fontes='QUARENTENA() do build antigo; CHECKPOINT do build antigo, seção 1',qid=x['qid'],fonte_anterior=x['fonteAnterior'],status_anterior=x['st'],categoria_anterior='',contraparte='',similaridade='',
          origem='extraído executando o build antigo (1791039168227_memotiva__3_.html) e lendo QUARENTENA(); qid e motivo são os do próprio build'))
    else:
        r,m=best(x['autor'],x['texto'],Cp,'frase')
        rows.append(dict(data='',lote=LOTE_Q,commit_base='build antigo (3.196 frases)',commit_remocao='',autor=x['autor'],texto=x['texto'],tipo='historico-quarentena-restaurada',
          motivo='Estava na quarentena do build antigo e hoje existe frase ativa '+('idêntica' if st=='ativa-hoje-mesma-chave' else 'equivalente (similaridade ≥ 0,80)')+'; não é remoção vigente e NÃO alimenta a guarda.',
          fontes='QUARENTENA() do build antigo; acervo atual',qid=x['qid'],fonte_anterior=x['fonteAnterior'],status_anterior=x['st'],categoria_anterior='',contraparte=(m or {}).get('frase','') if st!='ativa-hoje-mesma-chave' else x['texto'],similaridade=round(r,2) if st!='ativa-hoje-mesma-chave' else 1.0,
          origem='extraído de QUARENTENA() do build antigo, cruzado com o CSV atual'))
for x,c,r,m,a in P['old']:
    base=dict(data='',lote=LOTE_D,commit_base='build antigo (3.196 frases)',commit_remocao='v105 (CSV de 3.132 frases)',autor=x['a'],texto=x['t'],qid=x['qid'],fonte_anterior=x['s'],status_anterior=x['st'],categoria_anterior=x['c'],
      fontes='diff entre QUOTES do build antigo e curadoria-frases.csv do v105; CHECKPOINT v105 (Fases 62 e 70–75)',
      origem='recuperado do build antigo (qid, fonte, status, categoria exatos) e do CSV v105; classificação por similaridade, inferida')
    if c=='removida':
        rows.append({**base,'tipo':'historico-removida','motivo':'[classificação inferida] Sem frase equivalente (similaridade < 0,50) no v105. Compatível com as 146 removidas da "classe B" (reformulações do argumento, não passagens citáveis) do CHECKPOINT v105, mas o motivo individual não é recuperável.','contraparte':'','similaridade':r})
    elif c in('fundida','fundida-ou-modificada'):
        rows.append({**base,'tipo':'historico-fundida-duplicata','motivo':'[classificação inferida] Há no v105 frase equivalente do mesmo autor (similaridade ≥ 0,70): duplicata de tradução removida pelas Fases 70–75 ou texto reescrito (Fase 83). Contraparte remanescente registrada.','contraparte':m,'similaridade':r})
    else:
        rows.append({**base,'tipo':'historico-removida-ou-fundida','motivo':'[classificação inferida; CONFIRMAR MANUALMENTE] Similaridade 0,50–0,69 com frase do mesmo autor no v105: pode ser a mesma passagem em outra tradução ou uma passagem distinta removida.','contraparte':m,'similaridade':r})
for x in P['vm']:
    q=oldq.get(K(x['autor'],x['frase']))
    pr=[y for y in cur if nz(y['frase'])==nz(x['frase'])]
    rows.append(dict(data='',lote=LOTE_R,commit_base='v105 (CSV de 3.132 frases)',commit_remocao='8d1d990',autor=x['autor'],texto=x['frase'],tipo='historico-reatribuida',
      motivo='Reatribuição documentada no CHECKPOINT (1ª sessão): a frase não é de François Mauriac, é de Marcel Proust (A Prisioneira); mantida sob Proust.',fontes='CHECKPOINT, seção Fase 86; diff v105 → 8d1d990',qid=(q or {}).get('qid',''),
      fonte_anterior=x['fonte'],status_anterior=x['status'],categoria_anterior=x['categoria'],contraparte=(pr[0]['autor']+': '+pr[0]['frase']) if pr else '',similaridade=1.0 if pr else '',origem='diff do CSV v105 com a primeira exportação do repositório'))
print(len(rows),Counter(r['tipo'] for r in rows),'sem qid:',sum(1 for r in rows if not r['qid']))
json.dump(rows,open('pre_rows.json','w'),ensure_ascii=False)
# --- varredura de variantes no acervo atual
def dice(a,b):
    A=nz(a);B=nz(b)
    if len(A)<2 or len(B)<2: return 0
    ga=Counter(A[i:i+2] for i in range(len(A)-1)); gb=Counter(B[i:i+2] for i in range(len(B)-1))
    return 2*sum((ga&gb).values())/(len(A)+len(B)-2)
pairs=[]
for a,L in Cp.items():
    for i in range(len(L)):
        for j in range(i+1,len(L)):
            s1=difflib.SequenceMatcher(None,nz(L[i]['frase']),nz(L[j]['frase'])).ratio(); d=dice(L[i]['frase'],L[j]['frase'])
            if max(s1,d)>=0.50: pairs.append((round(max(s1,d),2),a,L[i]['frase'],L[j]['frase'],L[i]['fonte'],L[j]['fonte']))
pairs.sort(reverse=True); print('pares ativos mesmo autor >=0.50:',len(pairs))
json.dump(pairs,open('pares_ativos.json','w'),ensure_ascii=False)
for p in pairs[:45]: print(p[0],p[1],'|',p[2][:75],'||',p[3][:75])
# removidas históricas vs ativas
hist=[r for r in json.load(open('historico.json'))]
rem=[(r['autor'],r['texto']) for r in hist if r['tipo']=='historico-removida']+[(r['autor'],r['texto']) for r in rows if r['tipo'] in('historico-quarentena','historico-removida')]
res=[]
for a,t in rem:
    for y in Cp.get(a,[]):
        s=max(difflib.SequenceMatcher(None,nz(t),nz(y['frase'])).ratio(),dice(t,y['frase']))
        if s>=0.60: res.append((round(s,2),a,t[:80],y['frase'][:80],y['fonte'][:40]))
res.sort(reverse=True); print('removidas com variante ativa >=0.60:',len(res))
for r in res[:30]: print(r)
json.dump(res,open('ressurgimento.json','w'),ensure_ascii=False)
