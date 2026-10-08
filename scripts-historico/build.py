import json,re,unicodedata,difflib,subprocess,csv,io
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
D=json.load(open('diffs.json'))
def child_rows(c):
    raw=subprocess.check_output(['git','-C','/tmp/repo','show',f'{c}:curadoria/curadoria-frases.csv']).decode('utf-8-sig')
    return list(csv.DictReader(io.StringIO(raw),delimiter=';'))
def date(c): return subprocess.check_output(['git','-C','/tmp/repo','log','-1','--format=%ad','--date=short',c],text=True).strip()
def qidmap(parent):
    q=json.load(open(f'quotes_{parent}.json')) if not isinstance(json.load(open(f'quotes_{parent}.json')),str) else json.loads(json.load(open(f'quotes_{parent}.json')))
    return {(x['a'],x['t']):x['qid'] for x in q}
LOTES={
 '2d04b2e->0ebade6':('3º lote (Fase 75 real + fim da atribuição popular)','CHECKPOINT: "terceiro lote"'),
 '0ebade6->7cb1303':('4º lote (atribuição popular, modo restrito)','CHECKPOINT: "quarto lote"'),
 '7cb1303->b9daa7e':('5º lote (fim da fila de atribuição popular)','CHECKPOINT: "quinto lote"'),
 'b9daa7e->e0f3f78':('6º lote (fila de atribuição popular zerada)','CHECKPOINT: "sexto lote"'),
 'e0f3f78->9f81582':('7º lote (atribuição fraca invisível ao regex "Atribuído")','CHECKPOINT: "sétimo lote", tabela das 18'),
 '9f81582->376355e':('Fase 96 (padrão "[obra] ou declaração pública registrada")','CHECKPOINT: "sessão 29/09/2026 — novo padrão de fonte fraca"; comentário da Fase 96 em memotiva.js'),
 '376355e->183c1e7':('Fecha os 11 itens (verificação)','mensagem do commit 183c1e7 e CHECKPOINT: "Fecha os 11 itens"'),
 '6b63032->fb579b1':('Fase 78 (dedup de traduções) — visível só no navegador real','CHECKPOINT: "Auditoria do PR #2", achado A'),
}
M7={'Winston Churchill':'Apêndice "Red Herrings" do maior especialista em citações de Churchill (frase "atravessando o inferno") não a atribui a ele.',
'William Butler Yeats':'Sem fonte; a versão "próxima" de Plutarco também já era contração moderna.',
'Albert Camus':'Origem real é uma coluna de jornal de 1971, sem ligação com Camus.',
'Voltaire':'Origem real: duque de Lévis, 1808 (autor não catalogado no acervo na ocasião).',
'Oscar Wilde':'A pesquisa que já existia no código do projeto concluía pela atribuição espúria; nunca tinha sido aplicada.',
'Stephen Hawking':'Pista já no acervo: é de Daniel Boorstin (não catalogado); removida em vez de reatribuída por proibição de autor novo na etapa.',
'Maya Angelou':'Pista já no acervo: é de Carl W. Buehner, 1971 (não catalogado); removida em vez de reatribuída.',
'Nikola Tesla':'Citação pseudocientífica sem fonte primária.',
'Harriet Tubman':'Contradiz achado do checkpoint v105: nenhuma palavra dela sobreviveu à verificação.',
'Zumbi dos Palmares':'Mesmo caso de Harriet Tubman (checkpoint v105).',
'Walt Disney':'Confirmado pelo arquivista oficial da Disney: escrita em 1981-82, 15 anos após sua morte.',
'Martinho Lutero':'Atribuição espúria conhecida ("macieira"); sem fonte em obra de Lutero.',
'Hipócrates':'Não consta em nenhum tratado do Corpus Hippocraticum.',
'George Bernard Shaw':'Classificada "Spurious"; origem real: William H. Whyte, revista Fortune, 1950.',
'George Eliot':'Contestada por estudiosos, não localizada em sua obra.',
'Cora Coralina':'Autoria é controvérsia documentada na crítica literária brasileira.',
'Chico Xavier':'Pista já no acervo: é de Carl Bard, 1978 (não catalogado); removida em vez de reatribuída.'}
M4={('Peter Drucker'):'Veredito da Fase 21 do projeto: refutada.',('Aristóteles'):'Veredito da Fase 21 do projeto: refutada.',('Arthur Schopenhauer'):'Veredito da Fase 21 do projeto: refutada.'}
DISPUTADA='Veredito da Fase 21 do projeto: disputada; a política antiga mantinha com ressalva, a nova regra remove.'
GURU='Pesquisa dedicada não localizou a frase em obra, entrevista ou palestra do autor; padrão de resumo/“principais aprendizados” de livro, não de citação direta (CHECKPOINT, 5º lote).'
rows=[]
for k,v in D.items():
    if k=='8d1d990->2d04b2e': continue
    parent,child=k.split('->'); qm=qidmap(parent); cr=child_rows(child); lote,fonteck=LOTES[k]; dt=date(child)
    new=v['novas']
    for r in v['removidas']:
        a,t=r['autor'],r['frase']
        if k=='6b63032->fb579b1' and a in('Plutarco','Santos Dumont','Lima Barreto'): continue
        same=[x for x in cr if x['autor']==a]
        best=max(((difflib.SequenceMatcher(None,nz(t),nz(x['frase'])).ratio(),x['frase']) for x in same),default=(0,''))
        newbest=max(((difflib.SequenceMatcher(None,nz(t),nz(x['frase'])).ratio(),x['frase'],x['autor']) for x in new),default=(0,'',''))
        tipo,motivo,contra,sim='historico-removida','',None,None
        if k=='2d04b2e->0ebade6':
            if a=='Albert Einstein': tipo='historico-substituida';motivo='Não era citação literal: paráfrase popular de nota real de 1953 sobre Pablo Casals; trocada pelo texto fiel à nota (CHECKPOINT, 3º lote, item 3).';contra=newbest[1];sim=newbest[0]
            elif a=='Mahatma Gandhi': motivo='Frase sem fonte primária em nenhum dos volumes citáveis das Collected Works nem no Wikiquote; duas variantes de tradução removidas (CHECKPOINT, 3º lote, item 3).'
            elif a=='Wolfgang Amadeus Mozart': motivo='Sem fonte primária em nenhuma variante e ausente do Wikiquote; duas variantes de tradução da mesma frase, ambas removidas (uma delas já estava entre as duplicatas fundidas pela Fase 75). (CHECKPOINT, 3º lote, item 3).'
            else:
                tipo='historico-fundida-duplicata';contra=best[1];sim=best[0]
                motivo='Duplicata de tradução detectada pela Fase 75 executada de verdade pela primeira vez; a outra versão permanece no acervo (CHECKPOINT, 3º lote, itens 1-2).'
                if a=='Marcel Proust': motivo+=' A Fase 75 havia mantido a redação errada ("únicos" em vez de "vrais"); removida esta, ficou a correta.'
                if a=='Tarsila do Amaral': motivo+=' Esta era o fragmento truncado; a versão completa da carta de 1923 permanece.'
        elif k=='0ebade6->7cb1303':
            if a in('Ken Blanchard','Robert Emmons'): motivo='Pesquisa dedicada não localizou a frase em obra do autor; parece resumo jornalístico, não citação (CHECKPOINT, 4º lote).'
            elif a=='Peter Drucker' or a=='Aristóteles' or a=='Arthur Schopenhauer': motivo=M4[a]
            else: motivo=DISPUTADA
        elif k=='7cb1303->b9daa7e':
            if a=='Simone de Beauvoir':
                if newbest[0]>=0.5: tipo='historico-substituida';contra=newbest[1];sim=newbest[0];motivo='Forma popular contraída no subjuntivo; restaurado o texto completo original de A Força da Idade (1960) (CHECKPOINT, 5º lote).'
                else: motivo='Paráfrase do argumento/título de O Segundo Sexo, não passagem citável (CHECKPOINT, 5º lote).'
            else: motivo=GURU
        elif k=='b9daa7e->e0f3f78':
            if a=='John Dewey': tipo='historico-reatribuida';contra=newbest[1];sim=newbest[0];motivo='Misatribuição: a frase é de Aristóteles, Ética a Nicômaco; reatribuída (nova entrada sob Aristóteles) (CHECKPOINT, 6º lote).'
            elif a=='Simone de Beauvoir': motivo='Sem nenhuma corroboração encontrada em pesquisa dedicada (CHECKPOINT, 6º lote).'
            elif a=='Henry Kissinger': motivo='Nenhuma fonte encontrada apesar de coerência com o vocabulário do autor (CHECKPOINT, 6º lote).'
            else: motivo=GURU+' (frase que escapara da lista de remoção da Fase 92 por prefixo; CHECKPOINT, 6º lote).'
        elif k=='e0f3f78->9f81582': motivo=M7[a]+' (CHECKPOINT, 7º lote, tabela das 18).'
        elif k=='9f81582->376355e': motivo='Padrão "[obra] ou declaração pública registrada": sem verificação individual dentro do tempo da sessão, removida pela regra do projeto "sem achar, não fica"; fila para sessão futura (CHECKPOINT, sessão 29/09/2026 e comentário da Fase 96).'
        elif k=='376355e->183c1e7': motivo='Segunda frase sem confirmação em busca dedicada (mensagem do commit 183c1e7 e CHECKPOINT "Fecha os 11 itens").'
        elif k=='6b63032->fb579b1':
            tipo='historico-fundida-duplicata';contra=best[1];sim=best[0]
            motivo='Duplicata de tradução removida pela Fase 78 do código (anterior a esta curadoria); só aparece na exportação em navegador real porque o jsdom não executa o timer da fase (CHECKPOINT, Auditoria do PR #2, achado A).'
        if tipo=='historico-fundida-duplicata' and sim is not None and sim<0.6: motivo+=' [similaridade textual com a contraparte baixa ('+format(sim,'.2f')+'): confirmar manualmente]'
        qid=qm.get((a,t))
        rows.append(dict(data_commit=dt,lote=lote,commit_base=parent,commit_remocao=child,autor=a,texto=t,tipo=tipo,motivo=motivo,fontes=fonteck,qid=qid,fonte_anterior=r['fonte'],status_anterior=r['status'],categoria_anterior=r['categoria'],contraparte=contra,similaridade=None if sim is None else round(sim,2),origem='recuperado de diff de curadoria-frases.csv entre os commits + CHECKPOINT; qid lido da execução do memotiva.js do commit base'))
json.dump(rows,open('historico.json','w'),ensure_ascii=False,indent=1)
from collections import Counter
print(len(rows),Counter(r['tipo'] for r in rows)); print('sem qid:',sum(1 for r in rows if not r['qid']))
low=[(r['autor'],r['similaridade'],r['texto'][:40]) for r in rows if r['tipo']=='historico-fundida-duplicata' and (r['similaridade'] or 0)<0.55]
print('fundidas com similaridade<0.55:',low)
print(Counter((r['commit_remocao'],r['tipo']) for r in rows))
