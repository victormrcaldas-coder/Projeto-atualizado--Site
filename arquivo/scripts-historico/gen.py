import json,csv,re,unicodedata,io,subprocess
def nz(t): return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode())
def rd(p): return list(csv.DictReader(open(p,encoding='utf-8-sig'),delimiter=';'))
cur=rd('/tmp/repo/curadoria/curadoria-frases.csv')
def full(autor,prefixo):
    m=[r for r in cur if r['autor']==autor and r['frase'].startswith(prefixo)]
    assert len(m)==1,(autor,prefixo,len(m)); return m[0]
# ---------- Fase 102: histórico anterior a 28/09 (compacto) ----------
rows=json.load(open('pre_rows.json'))
# motivo constante para quarentena (a fonte anterior fica na coluna própria)
for r in rows:
    if r['tipo']=='historico-quarentena':
        mot=re.search(r'Quarentena do build antigo: ([^.]*)\.',r['motivo']).group(1)
        r['motivo']='Quarentena do build antigo: '+mot+'. Fonte registrada na época: genérica (coluna fonte_anterior). O CHECKPOINT do build antigo informa 995 itens na quarentena (42 resgatados, 953 mantidos fora); o momento exato da remoção não é recuperável.'
tc=['historico-quarentena','historico-quarentena-restaurada','historico-removida','historico-fundida-duplicata','historico-removida-ou-fundida','historico-reatribuida']
lotes=sorted({r['lote'] for r in rows}); mots=sorted({r['motivo'] for r in rows}); fts=sorted({r['fontes'] for r in rows}); cbs=sorted({r['commit_base'] for r in rows}); crs=sorted({r['commit_remocao'] for r in rows}); ors=sorted({r['origem'] for r in rows})
comp=dict(L=lotes,M=mots,F=fts,B=cbs,R=crs,O=ors,rows=[[r['autor'],r['texto'],tc.index(r['tipo']),lotes.index(r['lote']),cbs.index(r['commit_base']),crs.index(r['commit_remocao']),r['qid'],mots.index(r['motivo']),fts.index(r['fontes']),ors.index(r['origem']),r['fonte_anterior'],r['status_anterior'],r['categoria_anterior'],r['contraparte'] or '',r['similaridade'] if r['similaridade']!='' else ''] for r in rows])
f102='''

(function(){
 /* Fase 102 — histórico estruturado das remoções ANTERIORES a 28/09/2026
    (sessão de 03/10/2026). Fontes: (1) QUARENTENA() do build antigo de
    3.196 frases (arquivo histórico fornecido pelo proprietário), com qid,
    status, fonte e motivo do próprio build; (2) diff entre as QUOTES desse
    build e o curadoria-frases.csv do build v105 (3.132 frases); (3) diff
    v105 -> primeira exportação do repositório. A classificação do diff por
    similaridade (removida / fundida / a confirmar) é INFERIDA e está
    marcada assim no motivo; datas de remoção anteriores a 28/09 não são
    recuperáveis. Itens 'historico-quarentena-restaurada' não alimentam a
    guarda. Ver curadoria/CHECKPOINT.md. */
 var H = '''+json.dumps(comp,ensure_ascii=False,separators=(',',':'))+''';
 var TIPOS = ['historico-quarentena','historico-quarentena-restaurada','historico-removida','historico-fundida-duplicata','historico-removida-ou-fundida','historico-reatribuida'];
 H.rows.forEach(function(r){
  window.CURADORIA_REMOVIDAS.push({ data:'', lote:H.L[r[3]], commit_base:H.B[r[4]], commit_remocao:H.R[r[5]], autor:r[0], texto:r[1], tipo:TIPOS[r[2]],
   motivo:H.M[r[7]], fontes:H.F[r[8]], qid:r[6], fonte_anterior:r[10], status_anterior:r[11], categoria_anterior:r[12], contraparte:r[13], similaridade:r[14], origem:H.O[r[9]] });
 });
})();
'''
# ---------- Fase 103: variantes de tradução + divisa + Frida ----------
V=[ # (autor, prefixo removido, prefixo mantido, localização, tipo)
 ('William Shakespeare','O que passou é prólogo.','O passado é prólogo.','A Tempestade, II, 1'),
 ('Krishna','Você tem direito à ação, mas não aos frutos dela.','Você tem direito ao trabalho','Bhagavad Gita, 2.47'),
 ('Friedrich Nietzsche','Torna-te aquilo que és.','Torna-te quem tu és.','A Gaia Ciência, 270'),
 ('Lao Tsé','Quem domina os outros tem força','Aquele que conquista os outros é forte','Tao Te Ching, 33'),
 ('Lao Tsé','Quem controla os outros pode ser forte','Aquele que conquista os outros é forte','Tao Te Ching, 33'),
 ('Sêneca','A vida não é curta; nós a tornamos curta.','Não recebemos uma vida curta','Sobre a Brevidade da Vida, 1'),
 ('Jane Austen','Não há desfrute como o de ler!','Não há prazer comparável ao de ler.','fonte genérica nos dois registros ("Romance de Jane Austen")'),
 ('Jane Austen','Não existe encanto igual ao coração','Não há encanto igual à ternura do coração.','fonte genérica nos dois registros ("Romance de Jane Austen")'),
 ('George S. Clason','Uma parte de tudo o que você ganha é sua para guardar.','Uma parte de tudo que ganho pertence a mim.','O Homem Mais Rico da Babilônia'),
 ('Dinah Maria Craik','Que conforto é sentir-se seguro com alguém','A amizade é o conforto indescritível','A Life for a Life (1859), cap. 16'),
 ('Marco Aurélio','A melhor vingança é ser diferente daquele que praticou a injustiça.','A melhor vingança é não ser como aquele que causou o dano.','Meditações, VI, 6'),
 ('Hillel','Não despreze ninguém e não rejeite nada','Não desprezes nenhuma pessoa e não rejeites nenhuma coisa','Pirkei Avot, 4:3'),
 ('Epicteto','Quando algo acontece, não é o acontecimento que nos perturba','Quando algo externo te perturba','Enquirídio, V'),
 ('Lao Tsé','Quem está em harmonia com o Tao é como água','O melhor homem é como a água','Tao Te Ching, 8'),
 ('Lee Iacocca','Gerenciar é, no fim das contas, motivar outras pessoas.','A administração não é nada mais do que motivar outras pessoas.','Iacocca: Uma Autobiografia'),
 ('Warren Buffett','O tempo é amigo dos negócios excelentes','O tempo é o amigo da empresa maravilhosa','Cartas aos acionistas da Berkshire Hathaway'),
 ('Alcorão 65:3','Aquele que confia em Deus, Ele lhe será suficiente.','E quem confiar em Deus, Ele lhe bastará.','Alcorão 65:3'),
 ('Elon Musk','Se algo é importante o suficiente, você deve tentar','Quando algo é importante o suficiente','"Entrevista registrada" nos dois registros'),
]
SEMF=[ # remoções por falta de fonte (variante de passagem já removida; fonte ativa genérica)
 ('Frida Kahlo','Pinto a mim mesma porque sou a pessoa que conheço melhor.','Passagem já removida na quarentena do build antigo por "fonte não localizada"; as duas variantes ativas citavam só "registrado em entrevistas/diários". Busca desta rodada (Wikiquote EN, biografia de Hayden Herrera citada em coletâneas, sites de arte): a frase circula amplamente, mas nenhuma fonte primária localizada (o Wikiquote a lista sem referência).','Wikiquote EN Frida Kahlo; buscas web 03/10/2026'),
 ('Frida Kahlo','Pinto autorretratos porque estou muito sozinha','Mesma passagem e mesmo motivo da variante anterior (ver registro acima).','Wikiquote EN Frida Kahlo; buscas web 03/10/2026'),
 ('George Bernard Shaw','A vida não é sobre se encontrar.','Variante da passagem "a vida não é sobre encontrar a si mesmo…", já removida da quarentena por fonte não localizada; a fonte ativa era "atribuído em coletâneas, sem localização em sua obra".','registro do build antigo; fonte ativa no CSV; sem nova fonte encontrada'),
 ('Santo Agostinho','O mundo é um livro, e quem não viaja','Variante da passagem "a vida é um livro e aqueles que não viajam…", já removida; a fonte ativa era "atribuído a Agostinho a partir do século XIX, sem localização".','registro histórico; fonte ativa no CSV; sem nova fonte encontrada'),
 ('Albert Schweitzer','O exemplo não é a melhor maneira de influenciar os outros.','Variante de passagem já removida; a fonte ativa era "atribuído a Schweitzer em coletâneas, sem localização em sua obra".','registro histórico; fonte ativa no CSV; sem nova fonte encontrada'),
 ('Charles Chaplin','A vida é uma tragédia quando vista de perto','Variante de passagem já classificada como disputada e removida (Fase 21 / 4º lote); a fonte ativa era "atribuído a Chaplin em coletâneas, sem registro primário".','registro histórico; fonte ativa no CSV; sem nova fonte encontrada'),
]
recs=[]
for a,pr,pm,loc in V:
    r=full(a,pr); k=full(a,pm)
    recs.append(dict(autor=a,texto=r['frase'],tipo='variante-removida',contra=k['frase'],loc=loc,fonte=r['fonte'],status=r['status'],cat=r['categoria'],
      motivo='Mesma passagem que a frase mantida, em outra tradução ('+loc+'): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      fontes='comparação dos dois registros no acervo atual; conhecimento da passagem original ('+loc+'), não reconsultada'))
for a,pr,mot,fo in SEMF:
    r=full(a,pr)
    recs.append(dict(autor=a,texto=r['frase'],tipo='removida',contra='',loc='',fonte=r['fonte'],status=r['status'],cat=r['categoria'],motivo=mot,fontes=fo))
recs.append(dict(autor='Santos Dumont',texto='Sempre segui a divisa: “Quem quer vai, quem não quer manda”.',tipo='removida-antes-do-merge',contra='',loc='',fonte='O Que Eu Vi, o Que Nós Veremos (1918), parte I',status='A',cat='motivacao',
  motivo='Decisão do proprietário (03/10/2026): confirmada como texto do livro de 1918 (parte I), mas o dito é popular e o autor o apresenta como divisa que seguia, não como criação própria; sem comprovação de autoria da máxima, sai do catálogo. Inserida no PR #2 e removida antes do merge: nunca esteve na main.',
  fontes='O que eu vi, o que nós veremos (1918), parte I (Wikisource, transcrição revista, não toda validada)'))
f103='''

(function(){
 /* Fase 103 — variantes de tradução e remoções da auditoria de 03/10/2026.
    (1) 18 variantes de tradução da mesma passagem removidas, com a frase
    mantida e a localização registradas; (2) 6 frases removidas por falta de
    fonte, por serem variantes de passagens já removidas e com fonte ativa
    genérica; (3) Santos Dumont, "divisa", removida antes do merge.
    Nenhuma remoção foi automática por semelhança: cada par foi lido. Ver
    curadoria/CHECKPOINT.md. Também define CURADORIA_CHECAR(texto, autor,
    orig) — para usar ANTES de incluir qualquer frase — e
    CURADORIA_VARIANTES_ATIVAS(limiar), que lista pares do mesmo autor com
    texto parecido para revisão manual. A comparação é por bigramas de
    caracteres (Dice); só sinaliza, não decide. Entre traduções de uma
    mesma passagem, vale a conferência humana. */
 var D = '''+json.dumps([[r['autor'],r['texto'],r['tipo'],r['contra'],r['loc'],r['fonte'],r['status'],r['cat'],r['motivo'],r['fontes']] for r in recs],ensure_ascii=False,separators=(',',':'))+''';
 D.forEach(function(r){
  window.CURADORIA_REMOVIDAS.push({ data:'2026-10-03', lote:'PR #2 — fechamento da auditoria', commit_base:'', commit_remocao:'', autor:r[0], texto:r[1], tipo:r[2],
   motivo:r[8], fontes:r[9], qid:'', fonte_anterior:r[5], status_anterior:r[6], categoria_anterior:r[7], contraparte:r[3], similaridade:'',
   origem:'decisão desta sessão; qid preenchido na remoção quando a frase estava ativa' });
 });
 var norm = function(s){ return String(s).toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/[^a-z0-9]/g,''); };
 function bigr(s){ var n = norm(s), m = {}, i, g; for(i=0;i<n.length-1;i++){ g = n.substr(i,2); m[g] = (m[g]||0)+1; } return {m:m, len:Math.max(0,n.length-1)}; }
 function dice(a,b){ if(!a.len||!b.len) return 0; var inter=0,k; for(k in a.m) if(b.m[k]) inter += Math.min(a.m[k], b.m[k]); return 2*inter/(a.len+b.len); }
 window.CURADORIA_CHECAR = function(texto, autor, orig){
  var t = bigr(texto), o = orig ? bigr(orig) : null, out = { exata:false, bloqueada:window.CURADORIA_BLOQUEADA(texto), variantes:[] };
  QUOTES.forEach(function(q){
   if(autor && q.author!==autor) return;
   if(norm(q.text)===norm(texto)) out.exata = true;
   var s = dice(t,bigr(q.text)), so = (o && q.orig) ? dice(o,bigr(q.orig)) : 0;
   if(s>=0.55 || so>=0.8) out.variantes.push({ onde:'ativa', qid:q.qid, texto:q.text, score:+Math.max(s,so).toFixed(2), via:(so>=0.8 && so>s)?'original':'texto' });
  });
  window.CURADORIA_REMOVIDAS.forEach(function(r){
   if(autor && r.autor!==autor) return;
   var s = dice(t,bigr(r.texto));
   if(s>=0.55) out.variantes.push({ onde:'registro', tipo:r.tipo, texto:r.texto, qid:r.qid||'', score:+s.toFixed(2) });
  });
  out.variantes.sort(function(a,b){ return b.score-a.score; });
  return out;
 };
 window.CURADORIA_VARIANTES_ATIVAS = function(limiar){
  limiar = limiar || 0.6; var por = {}, res = [];
  QUOTES.forEach(function(q){ (por[q.author] = por[q.author] || []).push(q); });
  Object.keys(por).forEach(function(a){
   var L = por[a].map(function(q){ return { q:q, b:bigr(q.text) }; });
   for(var i=0;i<L.length;i++) for(var j=i+1;j<L.length;j++){
    var s = dice(L[i].b, L[j].b);
    if(s>=limiar) res.push({ autor:a, score:+s.toFixed(2), a:L[i].q.text, b:L[j].q.text, qidA:L[i].q.qid, qidB:L[j].q.qid });
   }
  });
  return res.sort(function(x,y){ return y.score-x.score; });
 };
 function aplicar(){
  var feitas = 0, ausentes = [];
  window.CURADORIA_REMOVIDAS.forEach(function(r){
   if(r.data!=='2026-10-03' || (r.tipo!=='variante-removida' && r.tipo!=='removida')) return;
   var q = QUOTES.filter(function(x){ return x.author===r.autor && norm(x.text)===norm(r.texto); })[0];
   if(!q){ ausentes.push(r.autor+' — '+r.texto.slice(0,40)); return; }
   r.qid = q.qid;
   var res = (typeof removerFrase==='function') ? removerFrase(q.qid, r.motivo) : {ok:false};
   if(res && res.ok) feitas++;
  });
  if(typeof reindexarQuotes==='function') reindexarQuotes();
  if(typeof reconstruirIndices==='function') reconstruirIndices();
  if(typeof window.CURADORIA_ATUALIZAR_CONTADORES==='function') window.CURADORIA_ATUALIZAR_CONTADORES();
  if(ausentes.length) console.warn('MeMotiva · Fase 103: remoção não aplicada (frase não encontrada): '+ausentes.join('; '));
  console.log('MeMotiva · Fase 103: '+feitas+' frases removidas.');
 }
 var prev = window.__fase5Boot;
 window.__fase5Boot = function(){ if(typeof prev==='function') prev(); aplicar(); };
})();
'''
p='/tmp/repo/assets/js/memotiva.js'
s=open(p,encoding='utf-8').read()
def rep(old,new,count=1):
    global s
    assert s.count(old)==count,(s.count(old),old[:90]); s=s.replace(old,new)
# 1) divisa sai do NOVAS
i=s.index('  ["Santos Dumont",\n   "Sempre segui a divisa'); j=s.index('  ["Lima Barreto",',i)
s=s[:i]+s[j:]
# 2) guarda considera mais tipos
rep("return (r.tipo==='removida' || r.tipo==='nao-inserir' || r.tipo==='historico-removida') && norm(r.texto) === n;",
    "return ['removida','nao-inserir','removida-antes-do-merge','variante-removida','historico-removida','historico-quarentena'].indexOf(r.tipo) > -1 && norm(r.texto) === n;")
# 3) fotos: sem tentar arquivo local inexistente
rep("const AUTHOR_PHOTOS = {","""/* Arquivos locais de foto. Só tente carregar assets/authors|stories/{slug}.jpg
   se o slug estiver listado aqui (manter em sincronia com as pastas); caso
   contrário o <img> começa direto pela Wikipédia/iniciais, sem pedir um
   arquivo que não existe (isso gerava dezenas de 404 por tela). */
const LOCAL_AUTHOR_PHOTOS = new Set([]);
const LOCAL_STORY_PHOTOS = new Set([]);
const NO_IMG = 'data:,';
function localAuthorPhoto(slug){ return LOCAL_AUTHOR_PHOTOS.has(slug) ? 'assets/authors/'+slug+'.jpg' : ''; }
function localStoryPhoto(slug){ return LOCAL_STORY_PHOTOS.has(slug) ? 'assets/stories/'+slug+'.jpg' : ''; }
const AUTHOR_PHOTOS = {""")
rep("const src = AUTHOR_PHOTOS[name] || `assets/authors/${slug}.jpg`;","const src = AUTHOR_PHOTOS[name] || localAuthorPhoto(slug) || NO_IMG;")
rep("const src = s.photo || `assets/stories/${slugify(s.author)}.jpg`;","const src = s.photo || localStoryPhoto(slugify(s.author)) || NO_IMG;")
rep("const local = 'assets/authors/'+slug+'.jpg';\n  const file = p ? (ctx==='wide' && p.fw ? p.fw : p.f) : null;\n  const src = file ? commonsURL(file, width) : local;","const local = localAuthorPhoto(slug);\n  const file = p ? (ctx==='wide' && p.fw ? p.fw : p.f) : null;\n  const src = file ? commonsURL(file, width) : (local || NO_IMG);")
rep("${url || ('assets/authors/'+slugify(canonAuthor(s.author))+'.jpg')}","${url || localAuthorPhoto(slugify(canonAuthor(s.author))) || NO_IMG}")
rep("const local = 'assets/authors/' + slug + '.jpg';\n  let file","const local = localAuthorPhoto(slug);\n  let file")
rep("const src = file ? commonsURL(file, width) : (cached || local);","const src = file ? commonsURL(file, width) : (cached || local || NO_IMG);")
# 4) fases novas ao fim
tail="\n\ninit().then(()=>{ if(window.__fase5Boot) window.__fase5Boot(); });\n"
assert s.endswith(tail)
s=s[:-len(tail)]+f102+f103+tail
open(p,'w',encoding='utf-8').write(s)
print('ok', len(recs),'registros fase 103;',len(rows),'fase 102')
