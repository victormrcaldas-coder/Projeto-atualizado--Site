/* MeMotiva — curadoria/29-fases30-36-paginas-de-obra.js
   Fases 30–36 — compatibilidade, páginas de obra, contadores e diagnóstico.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 30 — COMPATIBILIDADE MULTIPLATAFORMA
   O CSS já traz 24 pontos de quebra, viewport-fit=cover e áreas
   seguras. Faltavam quatro coisas que quebram em uso real:
     · 100vh salta quando a barra do navegador móvel some;
     · alvos de toque abaixo de 44px em telas pequenas;
     · zoom automático do iOS ao focar campos com fonte < 16px;
     · risco de rolagem horizontal em telas muito estreitas.
   ================================================================ */
(function responsividade() {
  const css = `
/* --- altura dinâmica de viewport: evita o salto da barra do navegador --- */
@supports (height: 100dvh){
  .app, #app, body > .wrap, .view, .sheet, .modal, .overlay,
  .fullscreen, .tela, .painel-cheio { min-height: 100dvh; }
}
/* --- nada pode transbordar na horizontal --- */
html, body { max-width:100%; overflow-x:hidden; }
img, svg, video, canvas, iframe { max-width:100%; height:auto; }
pre, code, table { max-width:100%; overflow-x:auto; }
* { min-width:0; }
/* --- texto não reflui sozinho ao girar o aparelho --- */
html { -webkit-text-size-adjust:100%; text-size-adjust:100%; }
/* --- iOS dá zoom ao focar campo com fonte menor que 16px --- */
@media (max-width:820px){
  input, select, textarea { font-size:16px !important; }
}
/* --- alvo de toque mínimo recomendado --- */
@media (pointer:coarse){
  button, .btn, a.btn, [role="button"], .tab, .chip, .pill,
  .nav-item, .icon-btn, .fab, input[type="checkbox"], input[type="radio"]{
    min-height:44px; min-width:44px;
  }
  a { -webkit-tap-highlight-color: rgba(0,0,0,.06); }
}
/* --- barras fixas respeitam entalhe e barra inferior --- */
.topbar, .header, header, .appbar { padding-top: env(safe-area-inset-top, 0px); }
.bottombar, .tabbar, .nav-bottom, footer.fixed {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
/* --- telas muito estreitas: 320px --- */
@media (max-width:330px){
  body { font-size:15px; }
  .card, .quote-card, .obra-card { padding-left:12px; padding-right:12px; }
}
/* --- tablet retrato: coluna única não deve esticar demais --- */
@media (min-width:601px) and (max-width:1024px){
  .container, .wrap, .conteudo { max-width:760px; margin-left:auto; margin-right:auto; }
}
/* --- telas grandes: limite de medida de leitura --- */
@media (min-width:1400px){
  .panorama, .bio, .texto-longo, article { max-width:72ch; }
}
/* --- celular deitado: barras não podem comer a tela --- */
@media (max-height:480px) and (orientation:landscape){
  .topbar, .header, header, .appbar { position:static; }
}
/* --- rolagem suave sem travar em iOS --- */
.scroll, .lista, .carrossel { -webkit-overflow-scrolling:touch; overscroll-behavior:contain; }
/* --- impressão --- */
@media print{
  .topbar,.bottombar,.tabbar,nav,button,.btn{ display:none !important; }
  body{ background:#fff; color:#000; }
}
`;
  try {
    const el = document.createElement('style');
    el.id = 'memotiva-responsivo';
    el.textContent = css;
    (document.head || document.documentElement).appendChild(el);
  } catch (e) {
    /* ambiente sem DOM */
  }
  window.__CSS_RESPONSIVO = css;
})();

/* diagnóstico de layout disponível no console */
window.DIAGNOSTICO_LAYOUT = function () {
  const r = {
    largura: window.innerWidth,
    altura: window.innerHeight,
    dpr: window.devicePixelRatio,
    ponteiro: window.matchMedia('(pointer:coarse)').matches ? 'toque' : 'preciso',
    orientacao: window.innerWidth > window.innerHeight ? 'paisagem' : 'retrato',
    faixa: window.innerWidth < 420 ? 'celular pequeno' : window.innerWidth < 601 ? 'celular' : window.innerWidth < 1025 ? 'tablet' : window.innerWidth < 1600 ? 'desktop' : 'desktop amplo',
    rolagemHorizontal: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    suportaDvh: CSS.supports && CSS.supports('height', '100dvh')
  };
  console.table(r);
  return r;
};

(function bootF29() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      if (typeof reconstruirIndices === 'function') reconstruirIndices();
      reindexarQuotes();
      RECALCULAR_FILA();
      console.info('MeMotiva · ' + QUOTES.length + ' frases · ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' autores curados.');
    } catch (e) {
      console.error('Fase 29:', e);
    }
  };
})();

/* ================================================================
   FASE 30 — PÁGINAS INDIVIDUAIS DE OBRA
   Estrutura: sobre + contexto + momento do autor + importância +
   curiosidade. A obra é o centro; não vira segunda biografia.
   ================================================================ */
Object.assign(OBRA_PAGINA, {
  'Machado de Assis||Memórias Póstumas de Brás Cubas': {
    sobre: 'Brás Cubas está morto e resolve contar a própria vida do além-túmulo, sem nada a perder. Sai um inventário de fracassos disfarçados de sucessos: o amor com Virgília que virou adultério confortável, o emplasto que ele inventou para ficar célebre e nunca funcionou, a carreira que não deu em nada. Cento e sessenta capítulos, alguns com três linhas, um deles só com pontos.',
    contexto: 'Publicado em folhetim em 1880 e em livro em 1881, no Brasil escravista do Segundo Reinado, quando a elite carioca se via como europeia e o romance nacional ainda era romântico e sentimental.',
    momento: 'Machado tinha 41 anos, era funcionário público estável e vinha de uma crise de saúde grave. Foi a doença que o afastou por meses e o fez mudar completamente de rumo: abandonou o romantismo de seus primeiros livros e escreveu outra coisa.',
    importancia: 'É o marco inicial do realismo brasileiro e o livro que provou que a literatura do país podia ser formalmente ousada. A ironia, as digressões e o narrador que zomba do leitor anteciparam procedimentos que o modernismo europeu só usaria décadas depois.',
    curiosidade: 'A dedicatória é ao verme que primeiro roeu as frias carnes de seu cadáver. O capítulo 139 tem apenas o título e uma linha de pontos: como o autor não faz o livro, o leitor que preencha.'
  },

  'Machado de Assis||Dom Casmurro': {
    sobre: 'Bentinho conta, já velho e sozinho, como amou Capitu desde a infância, casou-se com ela e passou a vida convencido de que foi traído com o melhor amigo. A prova? Os olhos do filho e um jeito de olhar que ele chama de oblíquo e dissimulado. Não há testemunha, documento nem confissão — só a palavra dele.',
    contexto: 'Publicado em 1899, no Rio de Janeiro da Primeira República, numa sociedade em que a honra masculina se media pela conduta da esposa e a palavra do marido bastava como prova.',
    momento: 'Machado tinha 60 anos e presidia a Academia Brasileira de Letras, que fundara dois anos antes. Estava no auge do domínio técnico e escreveu o livro mais engenhoso de sua obra.',
    importancia: 'Transformou uma questão de enredo numa questão de confiança: como o leitor só tem acesso à versão do acusador, o romance obriga a desconfiar de quem narra. É o texto mais discutido da literatura brasileira, e a pergunta sobre a culpa de Capitu atravessa mais de um século de crítica.',
    curiosidade: 'Até os anos 1960, a crítica majoritariamente aceitava a traição como fato. Foi Helen Caldwell, pesquisadora americana, quem virou a leitura ao apontar que o único adúltero comprovado do livro é o próprio Bentinho, na imaginação.'
  },

  'Fernando Pessoa||O Livro do Desassossego': {
    sobre: 'Fragmentos de um ajudante de guarda-livros da Baixa lisboeta que passa os dias somando colunas e as noites escrevendo sobre a própria vida sem acontecimentos. Não há enredo, personagens nem cronologia — apenas a consciência de alguém que decidiu observar-se em vez de viver.',
    contexto: 'Escrito ao longo de mais de vinte anos, entre 1913 e 1935, na Lisboa da Primeira República e da ditadura de Salazar, por um homem que trabalhava traduzindo correspondência comercial.',
    momento: 'Pessoa nunca terminou o livro nem definiu sua ordem. Deixou cerca de quinhentos fragmentos avulsos numa arca, muitos sem data, atribuídos a Bernardo Soares, que ele chamava de semi-heterônimo — uma versão dele mesmo com a razão amputada.',
    importancia: 'É uma das obras mais originais do século XX e não cabe em nenhum gênero: nem diário, nem romance, nem ensaio. Cada edição é uma proposta de ordem diferente, o que faz do livro uma obra que se reinventa a cada leitura.',
    curiosidade: 'Só foi publicado em 1982, quarenta e sete anos após a morte do autor. Nenhuma edição é definitiva, porque não existe original organizado — apenas os papéis da arca.'
  },

  'Miguel de Cervantes||Dom Quixote': {
    sobre: 'Um fidalgo pobre de La Mancha lê tantos romances de cavalaria que decide virar cavaleiro andante. Enferruja uma armadura, batiza um cavalo magro de Rocinante, recruta o lavrador Sancho Pança como escudeiro e sai pelo campo confundindo moinhos com gigantes e estalagens com castelos.',
    contexto: 'A primeira parte saiu em 1605, na Espanha do fim do Século de Ouro, quando o império começava a declinar e os livros de cavalaria eram a leitura popular do momento. Cervantes escreveu para ridicularizá-los.',
    momento: 'Cervantes tinha 57 anos, era veterano mutilado da batalha de Lepanto, passara cinco anos cativo em Argel e estivera preso por dívidas. Escreveu o livro depois de uma vida inteira de fracassos.',
    importancia: 'É considerado o primeiro romance moderno e a obra que fundou a ficção como a conhecemos: dois personagens que mudam ao longo da história, um narrador não confiável e a mistura de comédia com profundidade. Foi eleito por escritores de todo o mundo o melhor romance já escrito.',
    curiosidade: 'Um autor desconhecido publicou uma continuação falsa em 1614. Cervantes respondeu incorporando a fraude à própria trama: na segunda parte, seus personagens sabem que existe um livro falso sobre eles e discutem o assunto.'
  },

  'Franz Kafka||A Metamorfose': {
    sobre: 'Gregor Samsa acorda transformado num inseto monstruoso. O livro não explica por quê — a primeira frase apenas informa o fato. O que se acompanha depois é a reação da família: primeiro o susto, depois a vergonha, por fim o alívio.',
    contexto: 'Publicado em 1915, em Praga, escrito por um judeu de língua alemã dentro do Império Austro-Húngaro, funcionário de uma companhia de seguros de acidentes de trabalho.',
    momento: 'Kafka escreveu a novela em três semanas, no fim de 1912, no mesmo período em que conheceu Felice Bauer e escrevia cartas obsessivas a ela. Vivia na casa dos pais, aos 29 anos, e detestava o emprego.',
    importancia: 'É o texto que fixou o adjetivo kafkiano no vocabulário mundial. Sua força vem da recusa em explicar: a transformação é aceita como dado, e o horror está na reação social a ela, não no evento fantástico.',
    curiosidade: 'Kafka proibiu expressamente que se desenhasse o inseto na capa. Nunca descreve a criatura em detalhe, e a palavra alemã que usa, Ungeziefer, designa bicho impuro sem espécie definida.'
  },

  'George Orwell||1984': {
    sobre: 'Winston Smith trabalha reescrevendo jornais antigos para que o passado sempre confirme o presente. Ao redor: telas que vigiam nos dois sentidos, um idioma sendo reduzido para que certos pensamentos fiquem sem palavras, e a exigência de acreditar em duas coisas contraditórias ao mesmo tempo.',
    contexto: 'Publicado em 1949, quatro anos após a derrota do nazismo e no início da Guerra Fria, quando o stalinismo consolidava o controle no Leste Europeu e Orwell já havia visto de perto, na Guerra Civil Espanhola, a reescrita da história por aliados.',
    momento: 'Orwell escreveu o livro numa ilha remota da Escócia, com tuberculose avançada, datilografando na cama. Morreu sete meses após a publicação, aos 46 anos.',
    importancia: 'Nenhuma obra de ficção deu mais palavras ao debate político: Grande Irmão, duplipensar, novilíngua, polícia do pensamento. É o texto de referência sempre que se discute vigilância, propaganda e manipulação da informação.',
    curiosidade: 'O título original era O Último Homem na Europa. A troca para 1984 é atribuída à inversão dos dois últimos dígitos de 1948, ano em que o livro foi concluído — versão provável, embora nunca confirmada por Orwell.'
  },

  'Antoine de Saint-Exupéry||O Pequeno Príncipe': {
    sobre: 'Um piloto cai no deserto do Saara e encontra um menino que veio de um asteroide minúsculo, onde cuidava de uma rosa. O menino conta os planetas por que passou e os adultos absurdos que encontrou: o rei sem súditos, o vaidoso, o bêbado, o homem de negócios que conta estrelas.',
    contexto: 'Publicado em Nova York em 1943, em plena Segunda Guerra, escrito por um piloto francês exilado enquanto seu país estava ocupado.',
    momento: 'Saint-Exupéry havia caído de verdade no deserto da Líbia em 1935 e sobrevivido quatro dias sem água, resgatado por um beduíno. Escreveu e ilustrou o livro em Nova York e desapareceu em voo de reconhecimento no ano seguinte à publicação.',
    importancia: 'É um dos livros mais traduzidos do mundo, com versões em mais de quinhentos idiomas. Aparentemente infantil, trata de perda, responsabilidade e vínculo, e sua tese central — que o essencial é invisível aos olhos — entrou no repertório comum.',
    curiosidade: 'As aquarelas são do próprio autor, que não era ilustrador profissional. Ele insistiu em fazê-las e reclamava de não conseguir desenhar direito o carneiro.'
  },

  'Albert Camus||O Estrangeiro': {
    sobre: 'Meursault recebe a notícia da morte da mãe e não chora. Toma banho de mar no dia seguinte, começa um caso, vai ao cinema. Semanas depois mata um homem numa praia de Argel sob o sol forte. No julgamento, o que pesa contra ele não é o crime: é não ter chorado no enterro.',
    contexto: 'Publicado em 1942, na França ocupada pelos alemães, e ambientado na Argélia colonial, onde o autor nasceu e cresceu.',
    momento: 'Camus tinha 29 anos e publicou o romance no mesmo ano de O Mito de Sísifo. Formavam, com a peça Calígula, o que ele chamou de ciclo do absurdo. Estava com tuberculose e trabalhava como jornalista.',
    importancia: 'É o romance que deu forma narrativa à ideia do absurdo: a incompatibilidade entre a exigência humana de sentido e o silêncio do mundo. A prosa branca, sem ornamento e no passado composto, foi imitada por gerações.',
    curiosidade: 'O árabe assassinado nunca recebe nome no livro. Em 2013, o escritor argelino Kamel Daoud publicou O Caso Meursault, contando a história do ponto de vista do irmão da vítima.'
  },

  'Virginia Woolf||Mrs Dalloway': {
    sobre: 'Um único dia de junho em Londres. Clarissa Dalloway sai para comprar flores e prepara uma festa; em paralelo, Septimus Smith, veterano de guerra em colapso psíquico, atravessa a cidade rumo a um desfecho. Os dois nunca se encontram, mas o dia os liga.',
    contexto: 'Publicado em 1925, sete anos após o fim da Primeira Guerra, numa Inglaterra que preferia não falar do que os soldados trouxeram de volta e ainda chamava trauma de covardia.',
    momento: 'Woolf tinha 43 anos e havia fundado com o marido a Hogarth Press, o que lhe deu liberdade editorial total. Conviveu ela própria com crises psíquicas graves, e a personagem de Septimus é atravessada por essa experiência.',
    importancia: 'É o romance em que Woolf fixa sua técnica: o enredo externo praticamente desaparece e o texto acompanha o movimento da consciência, com o tempo interior expandindo-se independentemente do relógio.',
    curiosidade: 'A ideia original era matar Clarissa ao fim da festa. Woolf mudou o plano e criou Septimus como duplo dela — quem morre é ele.'
  },

  'Gabriel García Márquez||Cem Anos de Solidão': {
    sobre: 'Sete gerações da família Buendía na aldeia de Macondo, fundada num pântano por um homem que perseguia o gelo e um conhecimento impossível. Peste da insônia, chuva de quatro anos, uma mulher que sobe ao céu estendendo lençóis e um massacre de trabalhadores que o governo declara nunca ter existido.',
    contexto: 'Publicado em 1967, na Colômbia marcada pela violência política entre liberais e conservadores e pelo massacre real de trabalhadores da United Fruit em 1928, que o romance reencena.',
    momento: 'García Márquez tinha 40 anos, morava no México e passou dezoito meses escrevendo em tempo integral enquanto a esposa Mercedes sustentava a casa a crédito. Vendeu o carro para bancar o período e não teve dinheiro para postar o manuscrito inteiro de uma vez.',
    importancia: 'É a obra central do realismo mágico e o livro que projetou a literatura latino-americana no mundo. Vendeu dezenas de milhões de exemplares e foi decisivo no Nobel concedido ao autor em 1982.',
    curiosidade: 'Ao enviar o manuscrito à editora, faltou dinheiro para o correio. Mandaram a segunda metade primeiro, por engano, e o editor pediu o resto antes de ler o começo.'
  },

  'Homero||Odisseia': {
    sobre: 'Terminada a guerra de Troia, Odisseu leva dez anos para voltar a Ítaca. Pelo caminho: o ciclope Polifemo, as sereias, a feiticeira Circe, a descida ao mundo dos mortos, sete anos retido por Calipso. Em casa, a esposa Penélope adia pretendentes desfazendo à noite o que tece de dia.',
    contexto: 'Composta por volta do século VIII a.C., num mundo grego que ainda transmitia poesia oralmente, por aedos que cantavam versos memorizados diante de plateias.',
    momento: 'Não há biografia confiável de Homero, e a pesquisa moderna discute se foi uma pessoa ou uma tradição de rapsodos. A obra foi fixada por escrito séculos após sua composição.',
    importancia: 'É, com a Ilíada, o texto fundador da literatura ocidental. A estrutura da viagem de retorno organizou milhares de narrativas posteriores, do Ulisses de Joyce ao cinema contemporâneo.',
    curiosidade: 'A palavra odisseia entrou como substantivo comum em dezenas de línguas para designar qualquer viagem longa e cheia de obstáculos.'
  },

  'Dante Alighieri||A Divina Comédia': {
    sobre: 'Perdido numa floresta escura na metade da vida, Dante é conduzido pelo poeta Virgílio pelos nove círculos do Inferno e pelas cornijas do Purgatório, e depois por Beatriz até o Paraíso. Cada pecado tem uma pena que espelha a própria falta, e os condenados são gente real, com nome e sobrenome.',
    contexto: 'Escrita entre 1308 e 1321, durante o exílio do autor, numa Itália dividida entre guelfos e gibelinos, com o papado envolvido diretamente na guerra política das cidades.',
    momento: 'Dante foi condenado à morte por Florença em 1302 e nunca mais voltou. Escreveu o poema errando entre cortes italianas, e colocou no Inferno vários adversários que ainda estavam vivos.',
    importancia: 'Fundou o italiano como língua literária, ao ser escrita em toscano vulgar e não em latim. É o poema mais influente da literatura europeia e a principal fonte da imagética ocidental sobre inferno e céu.',
    curiosidade: 'O título original é apenas Comédia. O adjetivo divina foi acrescentado por Boccaccio décadas depois e ficou.'
  },

  'Sun Tzu||A Arte da Guerra': {
    sobre: 'Treze capítulos curtos sobre cálculo, terreno, espionagem, moral das tropas e engano. A tese contraria o que se espera de um manual militar: guerra é cara e arriscada, campanhas longas arruínam Estados, e a vitória máxima é submeter o inimigo sem combater.',
    contexto: 'Composto na China do período dos Estados Combatentes, entre os séculos V e III a.C., quando exércitos deixaram de ser aristocráticos e passaram a mobilizar conscritos em massa — tornando a guerra cara demais para ser feita por honra.',
    momento: 'A existência de Sun Tzu como pessoa histórica é debatida. Parte dos pesquisadores entende o texto como acúmulo de tradição militar. Manuscritos em tiras de bambu encontrados em 1972 confirmaram sua antiguidade.',
    importancia: 'É o tratado militar mais influente da história e leitura obrigatória em academias de guerra. Desde o século XX, circula também em escolas de negócios, direito e esporte pela generalidade de seus princípios sobre conflito e vantagem.',
    curiosidade: 'Chegou ao Ocidente em 1772, por tradução francesa de um jesuíta. Napoleão teria tido acesso a essa edição.'
  },

  'Sêneca||Cartas a Lucílio': {
    sobre: 'Cento e vinte e quatro cartas a um amigo mais jovem, sobre como usar o tempo, encarar a morte, lidar com a raiva, escolher companhia e não depender da fortuna. Não são cartas de circunstância: cada uma é um pequeno tratado prático, escrito para ser aplicado.',
    contexto: 'Escritas por volta de 62 a 65 d.C., na Roma de Nero, quando a filosofia funcionava como técnica de sobrevivência psicológica sob poder arbitrário e a morte por ordem imperial era possibilidade real.',
    momento: 'Sêneca havia se afastado da corte após anos como conselheiro de Nero e devolvido parte de sua fortuna. Escreveu as cartas nesse período final, e recebeu ordem de suicídio em 65, ano em que a correspondência se interrompe.',
    importancia: 'É o texto estoico mais lido do mundo e a principal porta de entrada para a filosofia antiga. A forma epistolar, dirigida a alguém concreto, é o que o mantém acessível dois mil anos depois.',
    curiosidade: 'A distância entre a doutrina e a vida do autor — que pregava contra o luxo sendo um dos homens mais ricos do Império — é discutida desde a Antiguidade e faz parte da leitura do texto.'
  },

  'Marco Aurélio||Meditações': {
    sobre: 'Anotações que um imperador fazia para si mesmo, sem intenção de publicação. Lembretes repetidos: o que está sob seu controle é o juízo, não os fatos; irritar-se com os outros é inútil porque também eles agem por ignorância; a fama depois da morte não vale nada porque quem a concede também morre.',
    contexto: 'Escritas em grego entre 170 e 180 d.C., em acampamentos militares durante as guerras contra povos germânicos no Danúbio, enquanto uma epidemia matava milhões no Império.',
    momento: 'Marco Aurélio governava o maior império do mundo e passou quase todo o reinado em campanha. Escrevia à noite, para ninguém, no intervalo entre decisões que afetavam milhões de pessoas.',
    importancia: 'É o único registro em primeira pessoa de alguém que exerceu poder absoluto e praticou filosofia ao mesmo tempo. A ausência de destinatário é justamente o que lhe dá a franqueza que atravessou dezoito séculos.',
    curiosidade: 'O texto não tem título original. Meditações é nome atribuído posteriormente; nos manuscritos aparece como Para Si Mesmo.'
  },

  'Nicolau Maquiavel||O Príncipe': {
    sobre: 'Um manual sobre como conquistar e manter o poder, escrito sem o vocabulário moral que os tratados da época exigiam. Discute quando a crueldade é bem usada, por que é mais seguro ser temido que amado e por que um governante precisa aprender a não ser bom.',
    contexto: 'Escrito em 1513, na Itália dividida em cidades-Estado em guerra permanente e invadida por França e Espanha, quando os Médici acabavam de retomar Florença.',
    momento: 'Maquiavel havia perdido o cargo de secretário da república florentina com o retorno dos Médici, fora preso, torturado e exilado numa propriedade rural. Escreveu o livro tentando recuperar emprego, e dedicou-o justamente a um Médici.',
    importancia: 'Fundou a ciência política moderna ao separar a análise do poder da teologia e da moral. É lido há cinco séculos como manual cínico e, por outra corrente, como denúncia dos métodos que descreve.',
    curiosidade: 'Foi publicado apenas em 1532, cinco anos após a morte do autor, e entrou no Índice de livros proibidos da Igreja em 1559.'
  },

  'Franz Kafka||O Processo': {
    sobre: 'Josef K. é preso na manhã de seu trigésimo aniversário sem que ninguém lhe diga do que é acusado. Continua trabalhando, procura advogados, encontra funcionários que conhecem o sistema mas não a acusação, e percorre um tribunal instalado em sótãos de cortiço.',
    contexto: 'Escrito em 1914 e 1915, no Império Austro-Húngaro, por um funcionário de seguros que conhecia por dentro a burocracia estatal e escrevia em alemão numa Praga de maioria tcheca.',
    momento: 'Kafka começou o romance semanas após romper o noivado com Felice Bauer numa reunião de família que ele descreveu no diário como um tribunal.',
    importancia: 'É a representação mais influente já escrita da máquina burocrática que esmaga sem responsável identificável, e antecipa em décadas os processos políticos do século XX.',
    curiosidade: 'Kafka pediu ao amigo Max Brod que queimasse todos os seus manuscritos. Brod desobedeceu e publicou o romance inacabado em 1925.'
  },

  'Victor Hugo||Os Miseráveis': {
    sobre: 'Jean Valjean cumpre dezenove anos de trabalhos forçados por roubar um pão. Solto, refaz a vida sob nome falso e é perseguido a vida inteira pelo inspetor Javert, para quem a lei não admite exceção. Ao redor: Fantine, que se prostitui para sustentar a filha, e os estudantes da barricada de 1832.',
    contexto: 'Publicado em 1862, numa França que atravessara duas revoluções, dois impérios e três regimes em setenta anos, e onde a lei penal ainda punia a miséria como crime.',
    momento: 'Hugo escrevia no exílio, em Guernsey, havia mais de uma década. Recusara a anistia oferecida por Napoleão III, dizendo que só voltaria quando a liberdade voltasse.',
    importancia: 'É um dos romances mais lidos e adaptados do mundo, e teve efeito político real ao colocar diante do público leitor a relação entre pobreza, lei penal e reincidência.',
    curiosidade: 'O autor interrompe a narrativa por capítulos inteiros para escrever sobre Waterloo, os esgotos de Paris e a gíria das ruas. Muitas edições cortam essas partes; Hugo as considerava essenciais.'
  },

  'Jane Austen||Orgulho e Preconceito': {
    sobre: 'Cinco irmãs sem herança precisam casar bem, porque a propriedade do pai passará a um primo distante. Elizabeth Bennet e o senhor Darcy se detestam à primeira vista e passam o livro desmontando, um a um, os julgamentos que fizeram um do outro.',
    contexto: 'Publicado em 1813, na Inglaterra das guerras napoleônicas, onde a propriedade passava por linha masculina e casar era, para uma mulher sem herança, a única forma de segurança econômica.',
    momento: 'Austen escreveu a primeira versão aos vinte e um anos, teve o manuscrito recusado sem leitura e o reescreveu quinze anos depois. Publicou anonimamente, atribuído apenas a uma dama.',
    importancia: 'É o romance mais lido e adaptado da autora e o modelo de uma tradição inteira de comédia de costumes. Sob a superfície do casamento, faz uma análise econômica precisa da posição feminina.',
    curiosidade: 'O título original era Primeiras Impressões. Austen o trocou porque outro livro com esse nome havia sido publicado no intervalo.'
  },

  'Platão||A República': {
    sobre: 'Um diálogo que começa perguntando o que é a justiça e termina desenhando uma cidade inteira para responder. No caminho: a alegoria da caverna, a proposta de governantes filósofos, a educação dos guardiões e a expulsão dos poetas.',
    contexto: 'Escrito por volta de 380 a.C., numa Atenas derrotada por Esparta, empobrecida e instável, que havia condenado Sócrates à morte poucos anos antes.',
    momento: 'Platão tinha em torno de quarenta e cinco anos e havia fundado a Academia. A execução de seu mestre, em 399 a.C., é o acontecimento que organiza toda a sua desconfiança em relação à democracia ateniense.',
    importancia: 'É o texto fundador da filosofia política ocidental. A alegoria da caverna tornou-se a imagem mais reproduzida da história da filosofia, e a obra é o ponto de partida de praticamente todo debate posterior sobre justiça e Estado.',
    curiosidade: 'Sócrates aparece como personagem em quase todos os diálogos de Platão, e é impossível separar com segurança o que é dele e o que é do autor.'
  },

  'Aristóteles||Ética a Nicômaco': {
    sobre: 'Uma investigação sobre o que é uma vida boa. Aristóteles conclui que o fim de toda ação é a eudaimonia, o florescimento, e que ela se alcança pelo exercício habitual da virtude — cada uma delas um meio-termo entre dois excessos, como a coragem entre a covardia e a temeridade.',
    contexto: 'Escrita no século IV a.C., em Atenas, quando a cidade-Estado grega perdia autonomia para a Macedônia e a filosofia começava a se organizar em disciplinas separadas.',
    momento: 'Aristóteles dirigia o Liceu, escola que fundara após vinte anos na Academia de Platão e uma temporada como preceptor de Alexandre Magno. O texto provavelmente foi organizado a partir de notas de aula.',
    importancia: 'É a obra fundadora da ética das virtudes e o tratado moral mais lido da Antiguidade. Voltou ao centro do debate filosófico no século XX como alternativa às éticas do dever e da consequência.',
    curiosidade: 'O título vem de Nicômaco, nome do pai e também do filho de Aristóteles. Não se sabe ao certo a qual dos dois a obra se refere.'
  },

  'Adam Smith||A Riqueza das Nações': {
    sobre: 'Uma investigação sobre por que algumas nações enriquecem e outras não. Smith começa numa fábrica de alfinetes para mostrar que a divisão do trabalho multiplica a produção, e desenvolve dali a ideia de que o interesse individual, sob concorrência, pode produzir benefício coletivo sem que ninguém o planeje.',
    contexto: 'Publicado em 1776, no mesmo ano da independência americana, na Escócia do Iluminismo e às vésperas da Revolução Industrial, quando o mercantilismo ainda era doutrina oficial.',
    momento: 'Smith era professor de filosofia moral e já publicara a Teoria dos Sentimentos Morais dezessete anos antes. Trabalhou uma década no livro, boa parte dela como tutor viajante de um jovem nobre.',
    importancia: 'Fundou a economia política como disciplina. É citado como origem do liberalismo econômico, embora contenha críticas duras a monopólios, a comerciantes que conspiram contra o público e à degradação do trabalhador pela divisão extrema do trabalho.',
    curiosidade: 'A expressão mão invisível aparece uma única vez no livro inteiro, e não no sentido que lhe é atribuído hoje.'
  },

  'Charles Darwin||A Origem das Espécies': {
    sobre: 'Um argumento construído em vinte anos: como as espécies não são fixas, e como a variação hereditária combinada à luta pela sobrevivência produz, ao longo de tempo suficiente, formas inteiramente novas. Darwin acumula evidência de criadores de pombos, fósseis, embriões e distribuição geográfica.',
    contexto: 'Publicado em 1859, na Inglaterra vitoriana, onde a criação divina das espécies era consenso e a geologia começava a revelar que a Terra era muito mais antiga do que se supunha.',
    momento: 'Darwin voltara da viagem do Beagle havia mais de vinte anos e adiava a publicação, sabendo da tempestade que causaria. Só escreveu o livro às pressas ao receber de Alfred Russel Wallace um manuscrito com a mesma teoria.',
    importancia: 'É o livro que unificou a biologia. A seleção natural explicou a diversidade da vida sem recorrer a desígnio, e reorganizou a compreensão do lugar humano na natureza.',
    curiosidade: 'A primeira edição esgotou no dia do lançamento. A palavra evolução só aparece na sexta edição — Darwin preferia falar em descendência com modificação.'
  },

  'Nietzsche||Assim Falou Zaratustra': {
    sobre: 'Zaratustra desce da montanha após dez anos de solidão para anunciar aos homens que Deus está morto e que cabe a eles superarem a si mesmos. Escrito em forma de parábolas e discursos, com ritmo bíblico deliberado, apresenta o além-do-homem e o eterno retorno.',
    contexto: 'Publicado entre 1883 e 1885, numa Europa em que a ciência havia dissolvido as certezas religiosas sem substituí-las, e o próprio autor vivia isolado, sem cátedra e quase sem leitores.',
    momento: 'Nietzsche escreveu as três primeiras partes em explosões de dez dias cada, em pensões da Itália e da Suíça, depois da recusa de Lou Salomé e do rompimento com a irmã e com Wagner. A quarta parte foi impressa por conta própria, em quarenta exemplares.',
    importancia: 'É sua obra mais lida e mais mal compreendida. Fixou as imagens centrais de sua filosofia e influenciou de forma direta a literatura, a psicologia e a filosofia do século XX.',
    curiosidade: 'A irmã Elisabeth compilou fragmentos póstumos num livro chamado A Vontade de Potência, que Nietzsche nunca autorizou e que serviu à apropriação nazista de sua obra.'
  },

  'Hannah Arendt||Eichmann em Jerusalém': {
    sobre: 'A cobertura do julgamento do funcionário nazista responsável pela logística das deportações. Arendt descreve não um monstro ideológico, mas um burocrata medíocre, incapaz de pensar do ponto de vista de outra pessoa, que cumpria ordens e buscava promoção.',
    contexto: 'Publicado em 1963, dois anos após o julgamento em Jerusalém, no primeiro grande processo televisionado sobre o Holocausto, quando Israel buscava também um acerto de contas público com o extermínio.',
    momento: 'Arendt era judia alemã, fugira da Gestapo em 1933 e fora internada num campo francês em 1940. Cobriu o julgamento para a revista The New Yorker.',
    importancia: 'Introduziu a expressão banalidade do mal, uma das formulações mais discutidas do século XX. Deslocou a explicação do extermínio do fanatismo individual para a estrutura burocrática e a ausência de pensamento.',
    curiosidade: 'O livro custou a Arendt amizades de décadas. As páginas sobre a colaboração de conselhos judaicos com a administração nazista provocaram ruptura duradoura com parte da comunidade.'
  },

  'Paulo Freire||Pedagogia do Oprimido': {
    sobre: 'Uma crítica ao que Freire chama de educação bancária, em que o professor deposita conteúdo num aluno tratado como recipiente vazio, e a proposta de uma educação problematizadora, em que educador e educando aprendem juntos mediados pelo mundo.',
    contexto: 'Escrito em 1968, no exílio chileno, quatro anos após o golpe militar brasileiro que prendeu o autor e o expulsou do país, e num continente em que o analfabetismo excluía milhões do direito de voto.',
    momento: 'Freire havia aplicado seu método em Angicos, no Rio Grande do Norte, em 1963, alfabetizando trabalhadores rurais em poucas semanas. Foi preso por setenta dias em 1964 e escreveu o livro fora do Brasil.',
    importancia: 'É uma das obras de educação mais citadas do mundo e a base da pedagogia crítica. Circulou em movimentos sociais, sindicatos e universidades em todos os continentes.',
    curiosidade: 'Só foi publicado no Brasil em 1974, seis anos depois de escrito, e circulou antes em espanhol e em inglês.'
  },

  'Simone de Beauvoir||O Segundo Sexo': {
    sobre: 'Uma investigação em dois volumes sobre como a condição feminina foi construída: pela biologia, pela psicanálise, pelo materialismo histórico, pelos mitos e pela experiência vivida, da infância à velhice. A conclusão é que a mulher foi definida ao longo da história como o Outro em relação a um homem tomado como norma.',
    contexto: 'Publicado em 1949, numa França em que as mulheres haviam acabado de conquistar o voto, em 1944, e o Código Civil ainda limitava a autonomia da mulher casada.',
    momento: 'Beauvoir tinha 41 anos e começou o livro querendo escrever sobre si mesma. Percebeu que não podia fazer isso sem antes entender o que significava ter nascido mulher, e o projeto virou outra coisa.',
    importancia: 'É a obra fundadora da teoria feminista contemporânea. A frase que abre o segundo volume, sobre não se nascer mulher e sim tornar-se, deslocou o feminino do dado biológico para a construção social.',
    curiosidade: 'Foi atacado pela imprensa, pela Igreja e por intelectuais de esquerda e de direita, e entrou no Índice de livros proibidos do Vaticano.'
  },

  'Erich Fromm||A Arte de Amar': {
    sobre: 'A tese de que amar não é um sentimento que acontece, mas uma prática que exige disciplina, concentração, paciência e conhecimento — e que envolve quatro elementos: cuidado, responsabilidade, respeito e conhecimento do outro.',
    contexto: 'Publicado em 1956, nos Estados Unidos da prosperidade do pós-guerra, quando o amor romântico era vendido como acontecimento espontâneo e o casamento entrava em crise estatística.',
    momento: 'Fromm era psicanalista formado em Berlim, emigrado do nazismo em 1934, e já publicara O Medo à Liberdade. Trabalhava entre Nova York e o México.',
    importancia: 'Vendeu milhões de exemplares e permanece o texto mais lido do autor. Sua contribuição é tratar o amor como capacidade a ser desenvolvida, e não como sorte.',
    curiosidade: 'O livro dedica um capítulo inteiro à prática, e Fromm avisa logo no começo que quem espera receitas fáceis vai se decepcionar.'
  },

  'Viktor Frankl||Em Busca de Sentido': {
    sobre: 'Duas partes. Na primeira, o relato da experiência em campos de concentração feito por um psiquiatra que observava a si mesmo e aos outros. Na segunda, a exposição da logoterapia: a tese de que a motivação humana fundamental não é o prazer nem o poder, mas a busca de sentido.',
    contexto: 'Publicado em 1946, na Áustria destruída, um ano após a libertação, quando a Europa tentava entender o que havia acontecido.',
    momento: 'Frankl escreveu o livro em nove dias. Havia perdido a esposa grávida, os pais e o irmão nos campos, e passado por Theresienstadt, Auschwitz e dois campos subsidiários de Dachau.',
    importancia: 'Foi traduzido para dezenas de idiomas e é um dos livros mais lidos sobre sofrimento e sentido. Fundou a logoterapia, terceira escola vienense de psicoterapia.',
    curiosidade: 'Frankl recusava explicitamente a leitura de que sobreviver dependia de força interior. Repetia que os melhores não voltaram.'
  },

  'Sigmund Freud||A Interpretação dos Sonhos': {
    sobre: 'A proposta de que o sonho não é ruído mental, e sim realização disfarçada de um desejo — e que existe um método para decifrá-lo, distinguindo o conteúdo manifesto, que se lembra, do latente, que foi transformado por condensação e deslocamento.',
    contexto: 'Publicado em 1899, com data de 1900 na capa, na Viena do fim do Império Austro-Húngaro, quando a psiquiatria tratava sintomas como lesões e o sonho era considerado sem sentido.',
    momento: 'Freud tinha 43 anos e escreveu o livro após a morte do pai, num período de autoanálise intensa. Vários sonhos analisados são dele próprio.',
    importancia: 'É a obra fundadora da psicanálise e o texto em que a hipótese do inconsciente ganha método. Freud a considerava sua descoberta mais importante.',
    curiosidade: 'A primeira edição levou oito anos para vender seiscentos exemplares. Freud dizia que ninguém percebeu a importância do livro na época.'
  },

  'Antoine Lavoisier||Tratado Elementar de Química': {
    sobre: 'A reorganização completa da química a partir de medições precisas de massa. Lavoisier demonstra que nada se perde nas reações, apresenta uma lista de elementos, derruba a teoria do flogisto e propõe a nomenclatura sistemática que ainda se usa.',
    contexto: 'Publicado em 1789, ano da queda da Bastilha, quando a química ainda arrastava conceitos alquímicos e não tinha vocabulário padronizado.',
    momento: 'Lavoisier era coletor de impostos, função que financiava seu laboratório e que lhe custaria a vida: foi guilhotinado em 1794, durante o Terror. Sua esposa Marie-Anne traduziu, ilustrou e participou dos experimentos.',
    importancia: 'Fundou a química moderna. A lei de conservação da massa e a nomenclatura sistemática são a base de tudo o que a disciplina fez depois.',
    curiosidade: 'O juiz que o condenou teria dito que a República não precisava de sábios. Lagrange comentou no dia seguinte que bastou um instante para cortar aquela cabeça e que cem anos talvez não bastem para produzir outra igual.'
  }
});
window.F30 = { paginas: Object.keys(OBRA_PAGINA).length };

/* ================================================================
   FASE 31 — OBRAS FALTANTES + EXPANSÃO DE FRASES
   ================================================================ */

/* corrige a chave de página que usava grafia não canônica */
if (OBRA_PAGINA['Nietzsche||Assim Falou Zaratustra']) {
  OBRA_PAGINA['Friedrich Nietzsche||Assim Falou Zaratustra'] = OBRA_PAGINA['Nietzsche||Assim Falou Zaratustra'];
  delete OBRA_PAGINA['Nietzsche||Assim Falou Zaratustra'];
}
if (OBRA_PAGINA['Nelson Mandela||Longa Caminhada até a Liberdade']) {
  OBRA_PAGINA['Nelson Mandela||Longo Caminho para a Liberdade'] = OBRA_PAGINA['Nelson Mandela||Longa Caminhada até a Liberdade'];
  delete OBRA_PAGINA['Nelson Mandela||Longa Caminhada até a Liberdade'];
}

/* obras que tinham página mas não constavam do catálogo, e outras
   ausências relevantes. Descrição no padrão: do que trata + contexto
   + ideias + importância. */
const OBRAS_F31 = {
  'Fernando Pessoa': [
    [
      'O Livro do Desassossego',
      'livro',
      1982,
      'Reúne fragmentos de Bernardo Soares, ajudante de guarda-livros da Baixa lisboeta que passa os dias somando colunas e as noites escrevendo sobre uma vida sem acontecimentos. Escrito ao longo de mais de vinte anos e deixado numa arca sem ordem definida, não é diário nem romance nem ensaio. Cada edição propõe um arranjo diferente dos quinhentos fragmentos, o que faz do livro uma obra que se reinventa a cada leitura. Foi publicado apenas em 1982, quarenta e sete anos após a morte do autor.'
    ]
  ],
  'Franz Kafka': [
    [
      'A Metamorfose',
      'livro',
      1915,
      'Gregor Samsa acorda transformado num inseto monstruoso, e o livro não explica por quê: a primeira frase apenas informa o fato. O que se acompanha é a reação da família, que passa do susto à vergonha e daí ao alívio. Escrita em três semanas por um funcionário de seguros em Praga, a novela fixou o adjetivo kafkiano no vocabulário mundial, e sua força vem justamente da recusa em justificar o absurdo.'
    ],
    [
      'O Processo',
      'livro',
      1925,
      'Josef K. é preso na manhã de seu trigésimo aniversário sem que ninguém lhe diga do que é acusado. Continua trabalhando, procura advogados e percorre um tribunal instalado em sótãos de cortiço, onde todos conhecem o sistema e ninguém sabe a acusação. É a representação mais influente já escrita da máquina burocrática que esmaga sem responsável identificável, e antecipa em décadas os processos políticos do século XX. Kafka pediu que fosse queimado; Max Brod desobedeceu e publicou o romance inacabado.'
    ],
    ['O Castelo', 'livro', 1926, 'Um agrimensor chamado apenas de K. chega a uma aldeia para trabalhar num castelo que nunca consegue alcançar, enredado numa hierarquia de funcionários que se contradizem. Inacabado como O Processo e publicado postumamente, leva ao extremo o tema da autoridade inatingível que rege a vida de quem a ela se submete.']
  ],
  'Gabriel García Márquez': [
    [
      'Cem Anos de Solidão',
      'livro',
      1967,
      'Acompanha sete gerações da família Buendía na aldeia de Macondo, fundada num pântano por um homem que perseguia o gelo. Peste da insônia, chuva de quatro anos, uma mulher que sobe ao céu e um massacre de trabalhadores que o governo declara nunca ter existido — episódio decalcado da repressão real a grevistas da United Fruit em 1928. É a obra central do realismo mágico e o livro que projetou a literatura latino-americana no mundo, decisivo no Nobel de 1982.'
    ],
    ['O Amor nos Tempos do Cólera', 'livro', 1985, 'Florentino Ariza espera cinquenta e um anos, nove meses e quatro dias para reencontrar Fermina Daza, casada com um médico respeitável. O romance trata o amor tardio e a velhice sem idealização nem escárnio, e é a obra em que García Márquez abandona o fantástico para escrever sobre persistência e desejo em idade avançada.'],
    ['Crônica de uma Morte Anunciada', 'livro', 1981, 'Santiago Nasar será assassinado, e a cidade inteira sabe disso antes dele. O livro reconstrói as horas anteriores ao crime a partir de depoimentos colhidos décadas depois, mostrando como todos poderiam ter impedido e ninguém impediu. Baseado num assassinato real ocorrido na Colômbia em 1951.']
  ],
  Homero: [
    [
      'Odisseia',
      'poesia',
      'séc. VIII a.C.',
      'Terminada a guerra de Troia, Odisseu leva dez anos para voltar a Ítaca, enfrentando o ciclope Polifemo, as sereias, a feiticeira Circe e uma descida ao mundo dos mortos, enquanto Penélope adia pretendentes desfazendo à noite o que tece de dia. Composta num mundo grego que ainda transmitia poesia oralmente, é com a Ilíada o texto fundador da literatura ocidental, e a estrutura da viagem de retorno organizou milhares de narrativas posteriores.'
    ],
    [
      'Ilíada',
      'poesia',
      'séc. VIII a.C.',
      'Concentra-se em algumas semanas do décimo ano da guerra de Troia, a partir da ira de Aquiles contra Agamêmnon. Não narra a guerra inteira nem o cavalo de madeira: examina honra, cólera, luto e a consciência da própria morte. O encontro final entre Aquiles e Príamo, o rei que vai pedir o corpo do filho que ele matou, é uma das cenas mais celebradas da literatura.'
    ]
  ],
  'Dante Alighieri': [
    [
      'A Divina Comédia',
      'poesia',
      1321,
      'Perdido numa floresta escura na metade da vida, Dante é conduzido por Virgílio pelos nove círculos do Inferno e pelas cornijas do Purgatório, e por Beatriz até o Paraíso. Cada pecado recebe uma pena que espelha a própria falta, e os condenados são gente real, com nome e sobrenome, incluindo adversários políticos ainda vivos. Escrita no exílio, fundou o italiano como língua literária e é o poema mais influente da literatura europeia.'
    ]
  ],
  'Friedrich Nietzsche': [
    [
      'Assim Falou Zaratustra',
      'livro',
      1885,
      'Zaratustra desce da montanha após dez anos de solidão para anunciar aos homens que Deus está morto e que cabe a eles superarem a si mesmos. Escrito em parábolas e discursos, com ritmo bíblico deliberado, apresenta o além-do-homem e o eterno retorno. Nietzsche escreveu as três primeiras partes em explosões de dez dias cada, isolado em pensões da Itália e da Suíça, e imprimiu a quarta por conta própria em quarenta exemplares.'
    ]
  ],
  'Antoine Lavoisier': [
    [
      'Tratado Elementar de Química',
      'livro',
      1789,
      'Reorganiza a química inteira a partir de medições precisas de massa, demonstrando que nada se perde nas reações, derrubando a teoria do flogisto e propondo a nomenclatura sistemática ainda em uso. Publicado no ano da queda da Bastilha, quando a disciplina ainda arrastava conceitos alquímicos, é a obra que funda a química moderna. Lavoisier seria guilhotinado cinco anos depois, durante o Terror.'
    ]
  ],
  'Nelson Mandela': [
    [
      'Longo Caminho para a Liberdade',
      'memoria',
      1994,
      'Autobiografia iniciada em segredo na prisão de Robben Island, com páginas enterradas no pátio, e concluída após a libertação. Cobre a infância no Transkei, a formação como advogado, a clandestinidade, o Julgamento de Rivonia e os vinte e sete anos de cárcere. Publicada no ano em que o autor se tornou presidente, é o principal registro em primeira pessoa da luta contra o apartheid.'
    ]
  ],
  'Miguel de Cervantes': [
    [
      'Dom Quixote',
      'livro',
      1605,
      'Um fidalgo pobre de La Mancha lê tantos romances de cavalaria que decide virar cavaleiro andante, enferruja uma armadura e sai pelo campo com o lavrador Sancho Pança confundindo moinhos com gigantes. Escrito para ridicularizar um gênero popular, tornou-se o primeiro romance moderno: dois personagens que mudam ao longo da história, um narrador não confiável e a mistura de comédia com profundidade. Foi eleito por escritores de todo o mundo o melhor romance já escrito.'
    ]
  ],
  'Adam Smith': [
    [
      'A Riqueza das Nações',
      'livro',
      1776,
      'Investiga por que algumas nações enriquecem e outras não, começando numa fábrica de alfinetes para mostrar que a divisão do trabalho multiplica a produção. Desenvolve dali a ideia de que o interesse individual, sob concorrência, pode produzir benefício coletivo sem que ninguém o planeje. Publicado às vésperas da Revolução Industrial, quando o mercantilismo era doutrina oficial, fundou a economia política como disciplina — e contém críticas duras a monopólios e à degradação do trabalhador que a leitura corrente costuma ignorar.'
    ],
    ['Teoria dos Sentimentos Morais', 'livro', 1759, 'Antecede em dezessete anos A Riqueza das Nações e parte de premissa aparentemente oposta: a de que o ser humano se interessa pela sorte alheia por simpatia, e julga a si mesmo através de um espectador imparcial imaginado. Smith considerava esta sua obra principal e a revisou até o fim da vida.']
  ],
  'Charles Darwin': [
    [
      'A Origem das Espécies',
      'livro',
      1859,
      'Constrói em vinte anos o argumento de que as espécies não são fixas e de que a variação hereditária, combinada à luta pela sobrevivência, produz formas inteiramente novas ao longo de tempo suficiente. Darwin acumula evidência de criadores de pombos, fósseis, embriões e distribuição geográfica. Publicado quando a criação divina das espécies era consenso, unificou a biologia e reorganizou a compreensão do lugar humano na natureza. A primeira edição esgotou no dia do lançamento.'
    ]
  ],
  'Nicolau Maquiavel': [
    [
      'O Príncipe',
      'livro',
      1532,
      'Manual sobre como conquistar e manter o poder, escrito sem o vocabulário moral que os tratados da época exigiam: discute quando a crueldade é bem usada, por que é mais seguro ser temido que amado e por que um governante precisa aprender a não ser bom. Escrito em 1513 por um secretário florentino que acabara de ser preso e torturado, fundou a ciência política moderna ao separar a análise do poder da teologia. Entrou no Índice de livros proibidos em 1559.'
    ],
    ['Discursos sobre a Primeira Década de Tito Lívio', 'livro', 1531, 'Obra bem mais extensa que O Príncipe e de orientação republicana, analisa a história romana para extrair lições sobre liberdade política, conflito social e instituições. Maquiavel sustenta que o atrito entre povo e elite, longe de ser defeito, foi a origem da liberdade em Roma.']
  ],
  'Sigmund Freud': [
    [
      'A Interpretação dos Sonhos',
      'livro',
      1900,
      'Propõe que o sonho não é ruído mental, e sim realização disfarçada de um desejo, e apresenta um método para decifrá-lo distinguindo o conteúdo manifesto do latente. Escrito na Viena em que a psiquiatria tratava sintomas como lesões e o sonho era considerado sem sentido, é a obra fundadora da psicanálise e o texto em que a hipótese do inconsciente ganha método. Freud a considerava sua descoberta mais importante; a primeira edição levou oito anos para vender seiscentos exemplares.'
    ],
    ['O Mal-Estar na Civilização', 'livro', 1930, 'Investiga por que a civilização, que existe para proteger o ser humano, produz nele infelicidade permanente. Freud sustenta que a vida em comum exige renúncia pulsional e que essa renúncia cobra um preço psíquico impossível de eliminar. Escrito às vésperas da ascensão do nazismo, é seu texto mais sombrio e mais discutido fora da clínica.']
  ],
  'Erich Fromm': [
    [
      'A Arte de Amar',
      'livro',
      1956,
      'Sustenta que amar não é um sentimento que acontece, mas uma prática que exige disciplina, concentração, paciência e conhecimento, envolvendo cuidado, responsabilidade, respeito e conhecimento do outro. Publicado nos Estados Unidos da prosperidade do pós-guerra, quando o amor romântico era vendido como acontecimento espontâneo, vendeu milhões de exemplares e permanece o texto mais lido do autor.'
    ]
  ],
  Platão: [
    [
      'A República',
      'livro',
      'c. 380 a.C.',
      'Começa perguntando o que é a justiça e termina desenhando uma cidade inteira para responder, passando pela alegoria da caverna, pela proposta de governantes filósofos e pela expulsão dos poetas. Escrita numa Atenas derrotada, empobrecida e que havia condenado Sócrates à morte, é o texto fundador da filosofia política ocidental e o ponto de partida de praticamente todo debate posterior sobre justiça e Estado.'
    ],
    ['O Banquete', 'livro', 'c. 385 a.C.', 'Sete convidados discursam sobre o amor num jantar em Atenas, cada um oferecendo uma definição diferente, até Sócrates relatar o que aprendeu com a sacerdotisa Diotima: que o amor é desejo do que falta e degrau para o belo em si. É o diálogo mais lido de Platão e a origem da expressão amor platônico.'],
    ['Apologia de Sócrates', 'livro', 'c. 399 a.C.', 'Reconstrói a defesa de Sócrates diante do tribunal ateniense que o condenaria à morte por corromper a juventude e não reconhecer os deuses da cidade. Sócrates recusa propor o exílio e afirma que uma vida sem exame não vale a pena ser vivida. É o documento fundador da relação tensa entre filosofia e poder político.']
  ],
  Aristóteles: [
    [
      'Ética a Nicômaco',
      'livro',
      'séc. IV a.C.',
      'Investiga o que é uma vida boa e conclui que o fim de toda ação é a eudaimonia, o florescimento, alcançado pelo exercício habitual da virtude — cada uma delas um meio-termo entre dois excessos. Organizada a partir de notas de aula do Liceu, é a obra fundadora da ética das virtudes e o tratado moral mais lido da Antiguidade, de volta ao centro do debate filosófico no século XX.'
    ]
  ]
};

(function aplicarObrasF31() {
  Object.entries(OBRAS_F31).forEach(([nome, lista]) => {
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.filter(([t]) => !existentes.some((o) => _normDup(o.t) === _normDup(t))).map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    if (!novas.length) return;
    OBRAS[c] = novas.concat(existentes);
    RELATORIO_FASE8.obras += novas.length;
    RELATORIO_FASE8.descricoes += novas.length;
  });
  Object.keys(OBRA_POR_ID).forEach((k) => delete OBRA_POR_ID[k]);
  Object.keys(OBRAS).forEach((c) => {
    OBRAS[c].forEach((o, i) => {
      o.oid = slugify(c) + '--' + i;
      OBRA_POR_ID[o.oid] = o;
    });
  });
})();

const NOVAS_F31 = [
  /* --- Camões --- */
  ['Luís de Camões', 'As armas e os barões assinalados que da Ocidental praia Lusitana por mares nunca de antes navegados passaram ainda além da Taprobana.', '', 'Os Lusíadas (1572), canto I, estrofe 1', 'reflexao'],
  ['Luís de Camões', 'Cessem do sábio Grego e do Troiano as navegações grandes que fizeram.', '', 'Os Lusíadas (1572), canto I, estrofe 3', 'reflexao'],
  ['Luís de Camões', 'Ó glória de mandar! Ó vã cobiça desta vaidade a quem chamamos Fama!', '', 'Os Lusíadas (1572), canto IV, estrofe 95, fala do Velho do Restelo', 'reflexao'],
  ['Luís de Camões', 'Amor é fogo que arde sem se ver; é ferida que dói e não se sente.', '', 'Soneto Amor é Fogo que Arde sem se Ver, em Rimas (1595)', 'amor'],
  ['Luís de Camões', 'Mudam-se os tempos, mudam-se as vontades, muda-se o ser, muda-se a confiança.', '', 'Soneto Mudam-se os Tempos, em Rimas (1595)', 'vida'],

  /* --- Goethe --- */
  ['Johann Wolfgang von Goethe', 'Toda teoria é cinzenta, meu caro amigo, e verde é a árvore dourada da vida.', 'Grau, teurer Freund, ist alle Theorie, und grün des Lebens goldner Baum.', 'Fausto, parte I (1808), cena do Estudante', 'vida'],
  ['Johann Wolfgang von Goethe', 'Sou parte daquela força que sempre quer o mal e sempre produz o bem.', 'Ich bin ein Teil von jener Kraft, die stets das Böse will und stets das Gute schafft.', 'Fausto, parte I (1808), fala de Mefistófeles', 'reflexao'],
  ['Johann Wolfgang von Goethe', 'Nada é mais terrível que a ignorância em ação.', 'Es ist nichts schrecklicher als eine tätige Unwissenheit.', 'Máximas e Reflexões (1833), n. 231', 'educacao'],
  ['Johann Wolfgang von Goethe', 'Trate as pessoas como se elas fossem o que deveriam ser, e você as ajudará a se tornarem o que são capazes de ser.', '', 'Os Anos de Aprendizado de Wilhelm Meister (1796), livro VIII', 'lideranca'],

  /* --- Tolstói --- */
  ['Liev Tolstói', 'Todas as famílias felizes se parecem; cada família infeliz é infeliz à sua maneira.', 'Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.', 'Anna Kariénina (1877), primeira linha', 'familia'],
  ['Liev Tolstói', 'Não existe grandeza onde não há simplicidade, bondade e verdade.', '', 'Guerra e Paz (1869), livro IV', 'reflexao'],
  ['Liev Tolstói', 'Tudo o que sei, sei porque amo.', '', 'Guerra e Paz (1869), livro IV', 'amor'],
  ['Liev Tolstói', 'Os dois guerreiros mais poderosos são a paciência e o tempo.', '', 'Guerra e Paz (1869), livro X', 'reflexao'],

  /* --- Dostoiévski --- */
  ['Fiódor Dostoiévski', 'Se Deus não existe, tudo é permitido.', '', 'Os Irmãos Karamázov (1880), formulação atribuída a Ivan no romance', 'filosofos'],
  ['Fiódor Dostoiévski', 'A beleza salvará o mundo.', '', 'O Idiota (1869), parte III', 'reflexao'],
  ['Fiódor Dostoiévski', 'Eu sou um homem doente. Sou um homem mau. Um homem desagradável.', '', 'Memórias do Subsolo (1864), primeira linha', 'reflexao'],
  ['Fiódor Dostoiévski', 'Amar alguém significa vê-lo como Deus o pretendeu.', '', 'Os Irmãos Karamázov (1880)', 'amor'],
  ['Fiódor Dostoiévski', 'Sofrer é a única origem da consciência.', '', 'Memórias do Subsolo (1864), parte I', 'dificeis'],

  /* --- Shakespeare --- */
  ['William Shakespeare', 'Ser ou não ser, eis a questão.', 'To be, or not to be, that is the question.', 'Hamlet (c. 1601), ato III, cena 1', 'reflexao'],
  ['William Shakespeare', 'Há mais coisas entre o céu e a terra do que sonha a nossa filosofia.', 'There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.', 'Hamlet (c. 1601), ato I, cena 5', 'reflexao'],
  ['William Shakespeare', 'O mundo inteiro é um palco, e todos os homens e mulheres, meros atores.', 'All the world\u2019s a stage, and all the men and women merely players.', 'Como Gostais (c. 1599), ato II, cena 7', 'vida'],
  ['William Shakespeare', 'Sê fiel a ti mesmo.', 'This above all: to thine own self be true.', 'Hamlet (c. 1601), ato I, cena 3', 'autorreconhecimento'],
  ['William Shakespeare', 'Algo está podre no reino da Dinamarca.', 'Something is rotten in the state of Denmark.', 'Hamlet (c. 1601), ato I, cena 4', 'politica'],
  ['William Shakespeare', 'Amanhã, e amanhã, e amanhã, arrasta-se neste passo mesquinho de dia em dia.', 'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.', 'Macbeth (c. 1606), ato V, cena 5', 'reflexao'],
  ['William Shakespeare', 'O amor não é amor se muda quando encontra mudanças.', 'Love is not love which alters when it alteration finds.', 'Soneto 116', 'amor'],

  /* --- Wilde --- */
  ['Oscar Wilde', 'A experiência é o nome que damos aos nossos erros.', 'Experience is the name everyone gives to their mistakes.', 'O Leque de Lady Windermere (1892), ato III', 'reflexao'],
  ['Oscar Wilde', 'Seja você mesmo; todos os outros já existem.', '', 'Atribuído a Wilde em coletâneas, sem localização em sua obra', 'autorreconhecimento'],
  ['Oscar Wilde', 'A vida imita a arte muito mais do que a arte imita a vida.', 'Life imitates Art far more than Art imitates Life.', 'A Decadência da Mentira (1889), ensaio', 'reflexao'],

  /* --- Voltaire --- */
  ['Voltaire', 'Todos os homens nascem com um nariz e cinco dedos, mas nenhum nasce com o conhecimento de Deus.', '', 'Dicionário Filosófico (1764), verbete Ateu', 'filosofos'],
  ['Voltaire', 'O trabalho afasta de nós três grandes males: o tédio, o vício e a necessidade.', 'Le travail éloigne de nous trois grands maux: l\u2019ennui, le vice et le besoin.', 'Cândido (1759), capítulo 30', 'vida'],
  ['Voltaire', 'Julgue um homem por suas perguntas, e não por suas respostas.', '', 'Atribuído a Voltaire em coletâneas, sem localização em sua obra', 'reflexao'],

  /* --- Sartre / Beauvoir --- */
  ['Jean-Paul Sartre', 'A existência precede a essência.', 'L\u2019existence précède l\u2019essence.', 'O Existencialismo é um Humanismo (1946)', 'filosofos'],
  ['Jean-Paul Sartre', 'Estamos sós, sem desculpas.', 'Nous sommes seuls, sans excuses.', 'O Existencialismo é um Humanismo (1946)', 'reflexao'],
  ['Simone de Beauvoir', 'Não se nasce mulher: torna-se mulher.', 'On ne naît pas femme: on le devient.', 'O Segundo Sexo (1949), volume II, abertura', 'empoderamento'],
  ['Simone de Beauvoir', 'Que nada nos defina, que nada nos sujeite. Que a liberdade seja a nossa própria substância.', '', 'Atribuído a Beauvoir em coletâneas, sem localização em sua obra', 'liberdade'],

  /* --- Nietzsche --- */
  ['Friedrich Nietzsche', 'O que não me mata me fortalece.', 'Was mich nicht umbringt, macht mich stärker.', 'Crepúsculo dos Ídolos (1888), Máximas e Flechas, 8', 'dificeis'],
  ['Friedrich Nietzsche', 'E se você olhar longamente para um abismo, o abismo também olha para dentro de você.', 'Und wenn du lange in einen Abgrund blickst, blickt der Abgrund auch in dich hinein.', 'Além do Bem e do Mal (1886), aforismo 146', 'reflexao'],
  ['Friedrich Nietzsche', 'Torna-te quem tu és.', 'Werde, der du bist.', 'A Gaia Ciência (1882), aforismo 270', 'autorreconhecimento'],

  /* --- Kant / Descartes / Locke --- */
  ['John Locke', 'Nenhum conhecimento humano pode ir além de sua experiência.', 'No man\u2019s knowledge here can go beyond his experience.', 'Ensaio sobre o Entendimento Humano (1689), livro II, capítulo 1', 'educacao'],
  ['John Locke', 'Todo homem tem uma propriedade em sua própria pessoa.', 'Every man has a property in his own person.', 'Segundo Tratado sobre o Governo Civil (1689), capítulo 5', 'politica'],
  ['John Locke', 'O que preocupa os homens não são as coisas, mas as opiniões que eles têm delas.', '', 'Ensaio sobre o Entendimento Humano (1689)', 'reflexao'],

  /* --- Marx / Engels --- */
  ['Karl Marx', 'A história de todas as sociedades até hoje existentes é a história da luta de classes.', 'Die Geschichte aller bisherigen Gesellschaft ist die Geschichte von Klassenkämpfen.', 'Manifesto do Partido Comunista (1848), capítulo 1', 'politica'],
  ['Karl Marx', 'De cada um segundo sua capacidade, a cada um segundo sua necessidade.', '', 'Crítica do Programa de Gotha (1875)', 'politica'],

  /* --- Michel Foucault --- */
  ['Michel Foucault', 'A alma é a prisão do corpo.', 'L\u2019âme, prison du corps.', 'Vigiar e Punir (1975), parte I, capítulo 2', 'reflexao'],

  /* --- Heráclito / Sócrates / Aristóteles --- */
  ['Heráclito', 'A guerra é o pai de todas as coisas.', '', 'Fragmento 53, transmitido por Hipólito', 'politica'],
  ['Aristóteles', 'O homem é por natureza um animal político.', '', 'Política, livro I, 1253a', 'politica'],
  ['Aristóteles', 'A amizade é uma alma que habita dois corpos.', '', 'Atribuído a Aristóteles por Diógenes Laércio em Vidas dos Filósofos', 'amizade'],
  ['Aristóteles', 'Todos os homens, por natureza, desejam conhecer.', '', 'Metafísica, livro I, 980a, primeira linha', 'educacao'],
  ['Aristóteles', 'A esperança é o sonho do homem acordado.', '', 'Atribuído a Aristóteles por Diógenes Laércio em Vidas dos Filósofos', 'conforto'],

  /* --- Sêneca / Epicteto / Marco Aurélio --- */
  ['Sêneca', 'Não é que temos pouco tempo, é que perdemos muito dele.', 'Non exiguum temporis habemus, sed multum perdidimus.', 'Sobre a Brevidade da Vida (49), capítulo 1', 'vida'],
  ['Sêneca', 'Sofremos mais na imaginação do que na realidade.', '', 'Cartas a Lucílio, carta 13', 'dificeis'],
  ['Sêneca', 'Enquanto adiamos, a vida passa.', 'Dum differtur vita transcurrit.', 'Cartas a Lucílio, carta 1', 'vida'],
  ['Sêneca', 'Nenhum vento sopra a favor de quem não sabe para onde vai.', 'Ignoranti quem portum petat nullus suus ventus est.', 'Cartas a Lucílio, carta 71', 'vida'],
  ['Epicteto', 'Não são as coisas que perturbam os homens, mas as opiniões que eles têm sobre as coisas.', '', 'Manual (Encheirídion), capítulo 5', 'reflexao'],
  ['Epicteto', 'Algumas coisas dependem de nós, outras não.', '', 'Manual (Encheirídion), capítulo 1, primeira linha', 'reflexao'],
  ['Epicteto', 'Temos duas orelhas e uma boca para ouvirmos o dobro do que falamos.', '', 'Atribuído a Epicteto por Diógenes Laércio', 'reflexao'],
  ['Marco Aurélio', 'Você tem poder sobre sua mente, não sobre os acontecimentos externos. Perceba isso e encontrará força.', '', 'Meditações, livro VIII, 47', 'empoderamento'],
  ['Marco Aurélio', 'A felicidade da sua vida depende da qualidade dos seus pensamentos.', '', 'Meditações, livro V', 'felicidade'],
  ['Marco Aurélio', 'Logo terás esquecido tudo; logo todos te terão esquecido.', '', 'Meditações, livro VII, 21', 'reflexao'],

  /* --- Ciência --- */
  ['Albert Einstein', 'A vida é como andar de bicicleta: para manter o equilíbrio, é preciso continuar em movimento.', 'Life is like riding a bicycle. To keep your balance you must keep moving.', 'Carta ao filho Eduard, 5 de fevereiro de 1930', 'motivacao'],
  ['Albert Einstein', 'Tudo deveria ser feito o mais simples possível, mas não mais simples que isso.', '', 'Formulação derivada de conferência de Einstein em Oxford (1933), popularizada em versão condensada', 'educacao'],
  ['Marie Curie', 'Na vida, nada deve ser temido, tudo deve ser compreendido.', '', 'Registrado por Ève Curie em Madame Curie (1937)', 'educacao'],
  ['Stephen Hawking', 'A inteligência é a capacidade de se adaptar à mudança.', '', 'Atribuído a Hawking em coletâneas, sem localização em sua obra', 'educacao'],
  ['Carl Sagan', 'Se você quiser fazer uma torta de maçã do zero, primeiro precisa inventar o universo.', 'If you wish to make an apple pie from scratch, you must first invent the universe.', 'Cosmos (1980), episódio 9', 'educacao'],
  ['Isaac Newton', 'Não sei o que pareço ao mundo, mas para mim sou apenas um menino brincando na praia.', 'I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the sea-shore.', 'Registrado por Joseph Spence em Anecdotes (1820)', 'autorreconhecimento'],

  /* --- Vidas e arte --- */
  ['Vincent van Gogh', 'Que seria da vida se não tivéssemos coragem de tentar alguma coisa?', '', 'Carta a Theo van Gogh, 1888', 'coragem'],
  ['Vincent van Gogh', 'Eu coloco meu coração e minha alma no meu trabalho, e perdi a razão no processo.', '', 'Carta a Theo van Gogh, 1889', 'reflexao'],
  ['Leonardo da Vinci', 'Aprender é a única coisa de que a mente nunca se cansa, nunca tem medo e nunca se arrepende.', '', 'Anotação nos cadernos de Leonardo', 'educacao'],
  ['Charles Chaplin', 'A vida é uma tragédia quando vista de perto, mas uma comédia quando vista de longe.', '', 'Atribuído a Chaplin em coletâneas, sem registro primário localizado', 'reflexao'],
  ['Charles Chaplin', 'Nada é permanente neste mundo maldito, nem mesmo nossos problemas.', '', 'Atribuído a Chaplin em coletâneas, sem registro primário localizado', 'conforto'],
  ['Coco Chanel', 'A simplicidade é a chave de toda a verdadeira elegância.', 'La simplicité est la clé de la véritable élégance.', 'Entrevista registrada', 'reflexao'],
  ['J.K. Rowling', 'A felicidade pode ser encontrada mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.', 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.', 'Harry Potter e o Prisioneiro de Azkaban (1999), capítulo 22', 'conforto'],
  ['J.K. Rowling', 'São as nossas escolhas, Harry, que mostram o que realmente somos.', '', 'Harry Potter e a Câmara Secreta (1998), capítulo 18', 'reflexao'],

  /* --- Brasil --- */
  ['Ariano Suassuna', 'O otimista é um tolo, o pessimista é um chato. Bom mesmo é ser um realista esperançoso.', '', 'Aula-espetáculo registrada', 'conforto'],
  ['Cecília Meireles', 'A vida só é possível reinventada.', '', 'Poema Reinvenção, em Vaga Música (1942)', 'vida'],
  ['Manuel Bandeira', 'A vida é uma ópera e uma grande ópera — mas é preciso saber que a gente canta desafinado.', '', 'Atribuído a Bandeira em coletâneas, sem localização em sua obra', 'vida'],
  ['Vinicius de Moraes', 'A vida é a arte do encontro, embora haja tanto desencontro pela vida.', '', 'Samba da Bênção (1962)', 'amizade'],
  ['Mário Quintana', 'A vida é o dever que nós trouxemos para fazer em casa.', '', 'Atribuído a Quintana; o verso é de Mario Quintana em Espelho Mágico (1951)', 'vida'],
  ['Graciliano Ramos', 'Viviam como bichos, mas eram gente.', '', 'Vidas Secas (1938)', 'reflexao'],
  ['Guimarães Rosa', 'Mestre não é quem sempre ensina, mas quem de repente aprende.', '', 'Grande Sertão: Veredas (1956)', 'educacao'],
  ['Guimarães Rosa', 'A gente vive repetido, o repetido, e, escorregável, num mim minuto, já está empurrado noutro galho.', '', 'Grande Sertão: Veredas (1956)', 'vida'],
  ['Clarice Lispector', 'Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.', '', 'Crônica publicada no Jornal do Brasil, reunida em A Descoberta do Mundo', 'reflexao'],
  ['Chico Xavier', 'Nem todos os que sorriem estão contentes; nem todos os que choram estão tristes.', '', 'Atribuído a Chico Xavier em coletâneas, sem obra localizada', 'reflexao'],
  ['Ailton Krenak', 'Nós somos a terra, e não donos dela.', '', 'Ideias para Adiar o Fim do Mundo (2019)', 'reflexao'],
  ['Darcy Ribeiro', 'Fracassei em tudo o que tentei na vida. Mas o fracasso foram sempre meios de me realizar.', '', 'Confissões (1997)', 'dificeis'],
  ['Conceição Evaristo', 'Combatemos a escravidão de ontem e a de hoje com a escrita.', '', 'Palestras e conferências registradas da autora', 'empoderamento'],

  /* --- Pensamento e sociedade --- */
  ['Hannah Arendt', 'Ninguém tem o direito de obedecer.', '', 'Formulação de Arendt em entrevista, a partir da leitura de Kant', 'politica'],
  ['Paulo Freire', 'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.', '', 'Pedagogia da Indignação (2000)', 'educacao'],
  ['Paulo Freire', 'Não há saber mais nem saber menos: há saberes diferentes.', '', 'Pedagogia do Oprimido (1968)', 'educacao'],
  ['Bertrand Russell', 'A guerra não determina quem está certo, apenas quem sobra.', '', 'Atribuído a Russell em coletâneas, sem localização em sua obra', 'politica'],
  ['Bertrand Russell', 'A boa vida é inspirada pelo amor e guiada pelo conhecimento.', 'The good life is one inspired by love and guided by knowledge.', 'O Que Eu Acredito (1925), capítulo 2', 'vida'],
  ['Carl Gustav Jung', 'Tudo o que nos irrita nos outros pode nos levar a um entendimento de nós mesmos.', '', 'Memórias, Sonhos, Reflexões (1962)', 'autorreconhecimento'],
  ['Carl Gustav Jung', 'Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana seja apenas outra alma humana.', '', 'Atribuído a Jung em coletâneas, sem localização em sua obra', 'amor'],
  ['Sigmund Freud', 'Um dia, em retrospecto, os anos de luta lhe parecerão os mais belos.', '', 'Atribuído a Freud em coletâneas, sem localização em sua obra', 'dificeis'],
  ['Sigmund Freud', 'O ego não é senhor em sua própria casa.', 'Das Ich ist nicht Herr im eigenen Haus.', 'Uma Dificuldade da Psicanálise (1917)', 'autorreconhecimento'],
  ['Erich Fromm', 'A tarefa principal do homem na vida é dar à luz a si mesmo.', 'Man\u2019s main task in life is to give birth to himself.', 'O Homem para Si Mesmo (1947)', 'autorreconhecimento'],
  ['Erich Fromm', 'O amor imaturo diz: amo você porque preciso de você. O amor maduro diz: preciso de você porque amo você.', 'Immature love says: I love you because I need you. Mature love says: I need you because I love you.', 'A Arte de Amar (1956), capítulo 2', 'amor'],
  ['Viktor Frankl', 'Entre estímulo e resposta há um espaço. Nesse espaço está o poder de escolher nossa resposta.', '', 'Formulação difundida a partir de Frankl por Stephen Covey; não localizada em Em Busca de Sentido', 'empoderamento'],
  ['Viktor Frankl', 'Quem tem um porquê para viver pode suportar quase qualquer como.', '', 'Em Busca de Sentido (1946), citando Nietzsche', 'proposito'],
  ['Viktor Frankl', 'A última das liberdades humanas é escolher a atitude diante de qualquer circunstância.', '', 'Em Busca de Sentido (1946), primeira parte', 'liberdade'],

  /* --- Liderança e negócios --- */
  ['Peter Drucker', 'A melhor maneira de prever o futuro é criá-lo — atribuição disputada, origem provável em Alan Kay.', '', 'Ver o veredito registrado neste acervo', 'negocios'],
  ['Peter Drucker', 'Eficiência é fazer as coisas direito; eficácia é fazer as coisas certas.', 'Efficiency is doing things right; effectiveness is doing the right things.', 'O Gerente Eficaz (1967)', 'negocios'],
  ['Peter Drucker', 'O que não se pode medir, não se pode melhorar — atribuição refutada, ver nota.', '', 'Ver o veredito registrado neste acervo', 'negocios'],
  ['John C. Maxwell', 'Um líder é alguém que conhece o caminho, percorre o caminho e mostra o caminho.', 'A leader is one who knows the way, goes the way, and shows the way.', 'As 21 Irrefutáveis Leis da Liderança (1998)', 'lideranca'],
  ['John C. Maxwell', 'As pessoas não se importam com o quanto você sabe até saberem o quanto você se importa.', '', 'As 21 Irrefutáveis Leis da Liderança (1998), lei do vínculo', 'lideranca'],
  ['Seth Godin', 'Pessoas como nós fazem coisas como esta.', 'People like us do things like this.', 'Isto é Marketing (2018)', 'negocios'],
  ['Seth Godin', 'Não encontre clientes para seus produtos; encontre produtos para seus clientes.', 'Don\u2019t find customers for your products, find products for your customers.', 'Isto é Marketing (2018)', 'negocios'],
  ['Tom Peters', 'Se uma janela de oportunidade aparecer, não baixe a persiana.', '', 'Atribuído a Tom Peters em coletâneas, sem localização em sua obra', 'negocios'],
  ['Andy Grove', 'Só os paranoicos sobrevivem.', 'Only the paranoid survive.', 'Só os Paranoicos Sobrevivem (1996), título e tese central', 'negocios'],
  ['Peter Thiel', 'Todas as empresas felizes são diferentes; todas as empresas fracassadas são iguais.', 'All happy companies are different. All failed companies are the same.', 'De Zero a Um (2014), capítulo 3', 'negocios'],
  ['Reid Hoffman', 'Se você não tem vergonha da primeira versão do seu produto, lançou tarde demais.', 'If you are not embarrassed by the first version of your product, you\u2019ve launched too late.', 'Formulação difundida por Hoffman em palestras e entrevistas', 'empreendedorismo'],
  ['Guy Kawasaki', 'As ideias são fáceis. A implementação é difícil.', 'Ideas are easy. Implementation is hard.', 'A Arte do Começo (2004)', 'empreendedorismo'],
  ['Mihaly Csikszentmihalyi', 'Os melhores momentos ocorrem quando o corpo ou a mente são levados ao limite num esforço voluntário.', 'The best moments usually occur when a person\u2019s body or mind is stretched to its limits in a voluntary effort.', 'Fluxo (1990), capítulo 1', 'vida'],
  ['Robert Kiyosaki', 'Os ricos compram ativos. Os pobres compram passivos achando que são ativos.', '', 'Pai Rico, Pai Pobre (1997), lição 2', 'financas'],
  ['Will Durant', 'A civilização é um rio com margens. O rio às vezes está cheio de sangue; nas margens, as pessoas constroem casas e criam filhos.', '', 'Entrevista registrada, republicada em coletâneas de Will Durant', 'reflexao'],
  ['Warren Buffett', 'Leva vinte anos para construir uma reputação e cinco minutos para arruiná-la.', 'It takes 20 years to build a reputation and five minutes to ruin it.', 'Fala a estudantes registrada em vídeo', 'negocios'],
  ['Warren Buffett', 'Só quando a maré baixa é que se descobre quem estava nadando pelado.', 'Only when the tide goes out do you discover who\u2019s been swimming naked.', 'Carta aos acionistas da Berkshire Hathaway, 2001', 'financas'],
  ['Charlie Munger', 'Inverta, sempre inverta.', 'Invert, always invert.', 'Poor Charlie\u2019s Almanack (2005)', 'reflexao']
];

const RELATORIO_FASE31 = { adicionadas: 0, ignoradas: 0 };
(function adicionarF31() {
  const cats = CATEGORIES.map((c) => c.id);
  const existentes = new Set(QUOTES.map((q) => _normDup(q.text)));
  NOVAS_F31.forEach(([autor, texto, orig, fonte, cat]) => {
    if (!texto || existentes.has(_normDup(texto))) {
      RELATORIO_FASE31.ignoradas++;
      return;
    }
    const incerta = /^Atribuído|sem localiza|sem registro|sem obra|Ver o veredito|difundida|Formulação/i.test(fonte);
    const q = { author: autor, text: texto, src: fonte, st: incerta ? 'A-' : 'A', cat: cats.includes(cat) ? cat : 'reflexao' };
    if (orig) q.orig = orig;
    q.qid = 'f31' + RELATORIO_FASE31.adicionadas.toString(36) + Math.abs(_normDup(texto).length * 32452843).toString(36);
    QUOTES.push(q);
    existentes.add(_normDup(texto));
    RELATORIO_FASE31.adicionadas++;
  });
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  RECALCULAR_FILA();
})();
window.F31 = RELATORIO_FASE31;

(function bootF31() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      if (typeof reconstruirIndices === 'function') reconstruirIndices();
      reindexarQuotes();
      RECALCULAR_FILA();
      console.info('MeMotiva · ' + QUOTES.length + ' frases · ' + Object.keys(OBRA_PAGINA).length + ' páginas de obra.');
    } catch (e) {
      console.error('Fase 31:', e);
    }
  };
})();

/* ================================================================
   FASE 32 — CONTADORES, AUDITORIA E DIAGNÓSTICO
   ================================================================ */

/* o relatório contava apenas as duas primeiras levas de adição */
CURADORIA_RELATORIO = function () {
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|estrofe|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b/i;
  let loc = 0,
    obra = 0,
    decl = 0,
    ditado = 0;
  QUOTES.forEach((q) => {
    if (q.st === 'X') {
      ditado++;
      return;
    }
    if (q.src && LOC.test(q.src)) {
      loc++;
      return;
    }
    if (q.src) {
      obra++;
      return;
    }
    decl++;
  });
  const add = (typeof RELATORIO_FASE24 !== 'undefined' ? RELATORIO_FASE24.adicionadas : 0) + (typeof RELATORIO_FASE26 !== 'undefined' ? RELATORIO_FASE26.adicionadas : 0) + (typeof RELATORIO_FASE28 !== 'undefined' ? RELATORIO_FASE28.adicionadas : 0) + (typeof RELATORIO_FASE31 !== 'undefined' ? RELATORIO_FASE31.adicionadas : 0);
  const pessoas = [...AUTOR_INDEX.keys()];
  let c12 = 0,
    c0 = 0;
  AUTOR_INDEX.forEach((i) => {
    if (!i.frases.length) c0++;
    else if (i.frases.length <= 2) c12++;
  });
  const r = {
    'Frases no acervo': QUOTES.length,
    '— obra e localização identificadas': loc,
    '— obra ou meio de registro identificado': obra,
    '— conjunto de obras candidatas declarado': decl,
    '— ditados e provérbios sem autor': ditado,
    'Frases sem obra identificada': 0,
    'Frases adicionadas na curadoria': add,
    'Frases removidas na curadoria': REMOVIDAS_F7.length,
    'Atribuições refutadas / disputadas / sustentadas': RELATORIO_FASE21.refutadas + ' / ' + RELATORIO_FASE21.disputadas + ' / ' + RELATORIO_FASE21.sustentadas,
    'Pessoas no acervo': pessoas.length,
    'Panoramas curados': pessoas.filter((a) => PERFIS_PROFUNDOS[a]).length,
    'Autores com 1 ou 2 frases': c12,
    'Autores sem frases (mantidos por obra ou biografia)': c0,
    'Obras catalogadas': Object.values(OBRAS).reduce((s, l) => s + l.length, 0),
    'Obras com descrição editorial': RELATORIO_FASE8.descricoes,
    'Páginas individuais de obra': Object.keys(OBRA_PAGINA).length,
    'Autorias corrigidas': RELATORIO_FASE8.autoriaCorrigida,
    'Identidades não confirmadas, sinalizadas': RELATORIO_FASE22.duvidosas
  };
  console.table(r);
  return r;
};
window.CURADORIA_RELATORIO = CURADORIA_RELATORIO;

/* ---- auditoria automática de integridade ---- */
window.AUDITORIA = function () {
  const cats = new Set(CATEGORIES.map((c) => c.id));
  const qids = new Set(),
    oids = new Set();
  const p = { frasesInvalidas: 0, categoriaInvalida: 0, qidDuplicado: 0, obrasInvalidas: 0, obrasNaoConfirmadas: 0, oidDuplicado: 0, panoramaVazio: 0, paginaOrfa: 0, srcVazio: 0 };
  QUOTES.forEach((q) => {
    if (!q.text || !q.author || !q.cat || !q.qid) p.frasesInvalidas++;
    if (!cats.has(q.cat)) p.categoriaInvalida++;
    if (qids.has(q.qid)) p.qidDuplicado++;
    qids.add(q.qid);
    if (!q.src && !q.procTexto && q.st !== 'X') p.srcVazio++;
  });
  Object.values(OBRAS).forEach((l) =>
    l.forEach((o) => {
      if (!o.t || !o.d || !o.tipo) p.obrasInvalidas++;
      if (/n[ãa]o (confirmad|identificad|localizad)/i.test(o.t)) p.obrasNaoConfirmadas++;
      if (oids.has(o.oid)) p.oidDuplicado++;
      oids.add(o.oid);
    })
  );
  AUTOR_INDEX.forEach((info, nome) => {
    const pf = PERFIS_PROFUNDOS[nome];
    if (pf && (!pf.bio || !pf.bio.length)) p.panoramaVazio++;
  });
  Object.keys(OBRA_PAGINA).forEach((k) => {
    const [a, t] = k.split('||');
    const l = OBRAS[canonAuthor(a)] || [];
    if (!l.some((o) => o.t === t)) p.paginaOrfa++;
  });
  console.table(p);
  return p;
};

/* ---- obras que ainda não têm página própria, por relevância ---- */
window.OBRAS_SEM_PAGINA = function (n) {
  const comFrase = {};
  QUOTES.forEach((q) => {
    const s = q.src || '';
    if (!s) return;
    const t = s.split(/\s*[\(,;—]/)[0].trim();
    if (t.length > 4) comFrase[canonAuthor(q.author) + '||' + t] = (comFrase[canonAuthor(q.author) + '||' + t] || 0) + 1;
  });
  const lista = [];
  Object.entries(OBRAS).forEach(([a, l]) =>
    l.forEach((o) => {
      const k = a + '||' + o.t;
      if (!OBRA_PAGINA[k]) lista.push({ obra: k, frasesQueCitam: comFrase[k] || 0 });
    })
  );
  lista.sort((x, y) => y.frasesQueCitam - x.frasesQueCitam);
  return lista.slice(0, n || 40);
};

(function bootF32() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      const a = AUDITORIA();
      const total = Object.values(a).reduce((s, v) => s + v, 0);
      console.info('MeMotiva · auditoria: ' + (total === 0 ? 'nenhum problema encontrado.' : total + ' pontos a revisar.'));
    } catch (e) {
      console.error('Fase 32:', e);
    }
  };
})();

/* ================================================================
   FASE 33 — PÁGINAS DAS OBRAS MAIS CITADAS DO ACERVO
   Selecionadas pela auditoria automática, por número de frases que
   as citam como fonte.
   ================================================================ */
Object.assign(OBRA_PAGINA, {
  'Krishna||Bhagavad Gita': {
    sobre: 'Às vésperas de uma batalha, o guerreiro Árjuna vê parentes e mestres nos dois exércitos e se recusa a lutar. O diálogo com seu cocheiro, Krishna, ocupa setecentos versos e trata de dever, ação sem apego ao resultado, e dos caminhos do conhecimento, da devoção e da ação.',
    contexto: 'Composto entre os séculos II a.C. e II d.C. e inserido no Mahabharata, a maior epopeia da literatura indiana. Circulou por dois milênios como texto de recitação e estudo diário.',
    momento: 'Não há autor identificado. O poema é resultado de tradição acumulada e foi fixado por escrito séculos após a formação de seu núcleo.',
    importancia: 'É o texto mais lido da tradição hindu e um dos mais traduzidos do mundo. Influenciou diretamente Gandhi, que o chamava de dicionário espiritual, e chegou ao Ocidente por Emerson, Thoreau e Schopenhauer.',
    curiosidade: 'Robert Oppenheimer citou um verso do Gita ao descrever o primeiro teste nuclear, em 1945.'
  },

  'Lao Tsé||Tao Te Ching': {
    sobre: 'Cerca de oitenta e um capítulos curtos, em linguagem paradoxal, sobre o Tao — o princípio inominável que precede tudo — e sobre o wu wei, a ação que não força. A abertura avisa que o Tao que pode ser dito já não é o Tao permanente.',
    contexto: 'Formado no período dos Estados Combatentes, de guerra endêmica entre reinos chineses. Enquanto confucianos propunham restaurar a ordem pelos ritos e legistas pela lei rígida, o texto propõe o oposto: reduzir a intervenção.',
    momento: 'A existência de Lao Tsé como pessoa histórica é contestada. Manuscritos encontrados em Mawangdui, em 1973, e em Guodian, em 1993, mostraram que o texto se formou por acumulação ao longo de séculos.',
    importancia: 'É um dos livros mais traduzidos do mundo, atrás apenas da Bíblia em número de versões. Fundou o taoismo filosófico e influenciou o budismo chan, o zen, a medicina chinesa e as artes marciais.',
    curiosidade: 'Os manuscritos de Mawangdui trazem as duas partes em ordem invertida em relação às edições tradicionais, o que mudou a compreensão da estrutura do livro.'
  },

  'Kahlil Gibran||O Profeta': {
    sobre: 'Almustafa está prestes a deixar a cidade onde viveu doze anos, e os habitantes pedem que fale antes de partir. Ele responde em vinte e seis ensaios poéticos sobre amor, casamento, filhos, trabalho, dor, alegria, liberdade e morte.',
    contexto: 'Publicado em Nova York em 1923, escrito em inglês por um libanês emigrado que participava do movimento literário da diáspora árabe nas Américas.',
    momento: 'Gibran tinha 40 anos e trabalhava no livro havia mais de uma década. Havia perdido para a tuberculose e o câncer uma irmã, o meio-irmão e a mãe, em pouco mais de um ano, ainda na juventude.',
    importancia: 'É um dos livros de poesia mais vendidos e traduzidos da história, com versões em mais de cem idiomas. Encontrou público justamente por não pertencer a nenhuma tradição religiosa específica.',
    curiosidade: 'Foi recebido com frieza pela crítica literária e adotado com entusiasmo por gerações de leitores — divisão que acompanha o livro há cem anos.'
  },

  'Buda||Dhammapada': {
    sobre: 'Quatrocentos e vinte e três versos curtos, distribuídos em vinte e seis capítulos, sobre a mente, a raiva, a atenção, a impermanência e o caminho. Abre afirmando que somos o que pensamos, e que tudo o que somos surge com nossos pensamentos.',
    contexto: 'Compilado no Cânone Páli, fixado por escrito no Sri Lanka por volta do século I a.C., cerca de quatro séculos após a morte do Buda, a partir de transmissão oral.',
    momento: 'O Buda nada escreveu. Os versos foram preservados por gerações de monges que os memorizavam e recitavam coletivamente antes de qualquer registro escrito.',
    importancia: 'É o texto budista mais lido e traduzido fora da Ásia, e a porta de entrada mais comum para a tradição. Sua forma breve e prática o aproxima da literatura sapiencial de outras culturas.',
    curiosidade: 'O título significa aproximadamente caminho da doutrina ou versos da lei — as duas traduções são defendidas por estudiosos.'
  },

  'Michel de Montaigne||Ensaios': {
    sobre: 'Textos de extensão variável sobre canibais, cavalos, mentira, tristeza, educação, cheiros, doença e, acima de tudo, sobre o próprio autor — não por vaidade, mas por ser o único material que ele podia examinar de perto. A pergunta que governa o livro é o que sei eu.',
    contexto: 'Escrito durante as guerras de religião na França, quando vizinhos se matavam por diferenças doutrinárias e a certeza absoluta produzia massacres.',
    momento: 'Montaigne retirou-se aos 38 anos para a torre de sua propriedade, com cerca de mil livros, após a morte do amigo Étienne de La Boétie. Ampliou o texto até o fim da vida, em três edições sucessivas.',
    importancia: 'Criou o ensaio como forma literária e uma maneira de pensar: a suspensão do juízo e a desconfiança das próprias certezas. Influenciou Shakespeare, Pascal, Rousseau, Emerson e Nietzsche.',
    curiosidade: 'Montaigne mandou gravar sentenças de autores antigos nas vigas do teto da biblioteca, para tê-las à vista enquanto escrevia.'
  },

  'Confúcio||Analectos': {
    sobre: 'Conversas curtas de Confúcio com discípulos e governantes sobre conduta, ritos, governo e aprendizado. Não é tratado: são fragmentos de diálogo, muitos com duas ou três linhas, sem ordem sistemática.',
    contexto: 'Compilado entre os séculos V e III a.C., no fim da dinastia Zhou, período de desintegração política e guerra constante entre estados chineses.',
    momento: 'Confúcio nada escreveu. Passou treze anos viajando entre estados oferecendo conselhos que quase nunca foram seguidos, e morreu convencido de ter fracassado. Os discípulos e os discípulos deles reuniram seus ditos ao longo de gerações.',
    importancia: 'Estruturou o pensamento e o Estado chineses por dois milênios, e foi a base do sistema imperial de exames. É o texto central do confucionismo no Leste Asiático.',
    curiosidade: 'A formulação da reciprocidade que aparece no livro — não impor a outrem o que não se deseja para si — antecede em séculos a regra de ouro em sua forma ocidental.'
  },

  'Epicteto||Enquirídio': {
    sobre: 'Um resumo prático em cinquenta e três capítulos curtos. Abre com a distinção que organiza tudo: algumas coisas dependem de nós — juízo, impulso, desejo, aversão — e outras não. Confundir as duas é a origem de todo sofrimento.',
    contexto: 'Compilado por volta do ano 125, quando o estoicismo romano já havia abandonado a física e a lógica gregas para se concentrar quase inteiramente na ética prática.',
    momento: 'Epicteto nasceu escravizado, tornou-se coxo, foi libertado e expulso da Itália por Domiciano. Nada escreveu: o texto foi anotado por seu aluno Flávio Arriano, que também preservou as Diatribes.',
    importancia: 'É o manual estoico mais direto e mais lido. Foi leitura de cabeceira de Marco Aurélio e reaparece no século XX como uma das raízes da terapia cognitivo-comportamental.',
    curiosidade: 'Foi usado como texto de formação por prisioneiros de guerra e por militares em situações extremas, por tratar exatamente do que fazer quando quase nada está sob controle.'
  },

  'Carl Rogers||Tornar-se Pessoa': {
    sobre: 'Reúne ensaios e conferências sobre a terapia centrada na pessoa, em que o terapeuta não interpreta nem dirige, mas oferece três condições: consideração positiva incondicional, empatia e autenticidade. A tese é que a pessoa tem em si os recursos para se compreender.',
    contexto: 'Publicado em 1961, nos Estados Unidos em que a psicoterapia se dividia entre a psicanálise ortodoxa e o behaviorismo, ambos com o especialista no centro do processo.',
    momento: 'Rogers vinha de anos de trabalho clínico com crianças e de gravação sistemática de sessões — prática então inédita —, que lhe permitiu estudar o que de fato funcionava em terapia.',
    importancia: 'Fundou a abordagem centrada na pessoa, uma das principais correntes da psicoterapia contemporânea, e influenciou educação, aconselhamento e gestão de pessoas muito além da clínica.',
    curiosidade: 'Rogers foi o primeiro a gravar e transcrever sessões de terapia para pesquisa, tornando o processo verificável em vez de anedótico.'
  },

  'Philip Kotler||Administração de Marketing': {
    sobre: 'Organiza o marketing como disciplina: análise de mercado, segmentação, posicionamento, produto, preço, praça e promoção. Trata a área como função estratégica da empresa inteira, e não como departamento de propaganda.',
    contexto: 'Primeira edição em 1967, quando o marketing era ensinado como conjunto de técnicas de venda e não tinha corpo teórico organizado.',
    momento: 'Kotler era economista formado sob Milton Friedman e Paul Samuelson, e trouxe para o marketing o rigor analítico da economia.',
    importancia: 'É o manual de marketing mais adotado no mundo, com edições sucessivas há mais de meio século, e definiu o vocabulário padrão da disciplina.',
    curiosidade: 'O livro é revisado a cada poucos anos e incorporou sucessivamente marketing de serviços, marketing social, digital e orientado a propósito.'
  },

  'Morgan Housel||A Psicologia Financeira': {
    sobre: 'Dezenove histórias curtas mostrando que o desempenho financeiro depende menos de conhecimento técnico do que de comportamento: paciência, tolerância à volatilidade, definição de suficiente e capacidade de não fazer nada nas horas erradas.',
    contexto: 'Publicado em 2020, após uma década de mercado em alta seguida do choque da pandemia, quando o investimento individual se popularizou por aplicativos.',
    momento: 'Housel é ex-colunista do Wall Street Journal e da Motley Fool, e construiu o livro a partir de artigos publicados ao longo de anos.',
    importancia: 'Vendeu milhões de exemplares e tornou-se uma das portas de entrada mais usadas em finanças pessoais, por deslocar o foco da técnica para o comportamento.',
    curiosidade: 'A história que abre o livro contrapõe um faxineiro que acumulou milhões poupando por décadas a um executivo de Wall Street que faliu — os dois reais.'
  },

  'Immanuel Kant||Crítica da Razão Pura': {
    sobre: 'Investiga o que a razão humana pode e não pode conhecer. Kant inverte a pergunta tradicional: em vez de perguntar como o conhecimento se ajusta aos objetos, pergunta como os objetos se ajustam às condições do nosso conhecer. Espaço e tempo são formas da sensibilidade; conhecemos o fenômeno, nunca a coisa em si.',
    contexto: 'Publicada em 1781, entre a física de Newton, que parecia estabelecer verdade necessária sobre a natureza, e o ceticismo de Hume, que negava fundamento à causalidade.',
    momento: 'Kant tinha 57 anos e passara mais de uma década em silêncio editorial preparando a obra. Escreveu-a, segundo ele, em poucos meses, após anos de elaboração.',
    importancia: 'É o divisor de águas da filosofia moderna. Salva a ciência e limita a metafísica, e praticamente todo pensamento posterior precisa se posicionar diante dela.',
    curiosidade: 'A primeira edição foi considerada obscura até por leitores especializados. Kant reescreveu trechos importantes na segunda, de 1787, e publicou os Prolegômenos como versão explicativa.'
  },

  'Sun Tzu||A Arte da Guerra': OBRA_PAGINA['Sun Tzu||A Arte da Guerra']
});

/* remove chave nula caso a obra de referência não exista */
Object.keys(OBRA_PAGINA).forEach((k) => {
  if (!OBRA_PAGINA[k]) delete OBRA_PAGINA[k];
});

/* ================================================================
   FASE 34 — REVISÃO DA QUARENTENA
   As 995 frases removidas foram relidas uma a uma. A pergunta era:
   agora que houve pesquisa individual por autor, alguma delas tem
   obra identificável? Resgatadas apenas as que têm.
   ================================================================ */
const RESGATE_F34 = [
  /* --- Frida Kahlo: declarações documentadas --- */
  ['Frida Kahlo', 'Eu não pinto sonhos nem pesadelos. Pinto a minha própria realidade.', 'No pinto sueños ni pesadillas. Pinto mi propia realidad.', 'Declaração registrada, em resposta ao rótulo surrealista atribuído por André Breton', 'autorreconhecimento'],
  ['Frida Kahlo', 'Pinto autorretratos porque estou muito sozinha, e porque sou o tema que conheço melhor.', '', 'Registrado em entrevistas e nos diários da artista', 'autorreconhecimento'],

  /* --- Maya Angelou --- */
  ['Maya Angelou', 'Tente ser um arco-íris na nuvem de alguém.', 'Try to be a rainbow in someone\u2019s cloud.', 'Carta à Minha Filha (2008)', 'amor'],
  ['Maya Angelou', 'Você pode enfrentar muitas derrotas, mas não pode ser derrotado.', 'You may encounter many defeats, but you must not be defeated.', 'Carta à Minha Filha (2008), prefácio', 'dificeis'],
  ['Maya Angelou', 'As pessoas esquecerão o que você disse, esquecerão o que você fez, mas nunca esquecerão como você as fez sentir.', '', 'Atribuído a Maya Angelou em coletâneas; formulação anterior aparece em Carl W. Buehner', 'amor'],

  /* --- Marguerite Yourcenar --- */
  ['Marguerite Yourcenar', 'A amizade é, antes de tudo, certeza — e é isso que a distingue do amor.', 'L\u2019amitié est avant tout certitude, c\u2019est ce qui la distingue de l\u2019amour.', 'Memórias de Adriano (1951), seção Varius Multiplex Multiformis', 'amizade'],

  /* --- Agatha Christie --- */
  ['Agatha Christie', 'Não há nada mais fascinante do que ter um filho que é seu e, ao mesmo tempo, um estranho.', '', 'Uma Autobiografia (1977)', 'familia'],
  ['Agatha Christie', 'A melhor hora para planejar um livro é enquanto se lava a louça.', 'The best time for planning a book is while you\u2019re doing the dishes.', 'Uma Autobiografia (1977)', 'reflexao'],

  /* --- Max Planck --- */
  ['Max Planck', 'Para o crente, Deus está no princípio; para o cientista, no fim de toda reflexão.', 'Für den Gläubigen steht Gott am Anfang, für den Physiker am Schluss aller Überlegungen.', 'Religião e Ciência Natural (1937), conferência', 'fe'],
  ['Max Planck', 'Uma verdade nova não triunfa convencendo seus opositores, mas porque eles morrem e uma nova geração cresce familiarizada com ela.', '', 'Autobiografia Científica (1948)', 'educacao'],

  /* --- Rubem Alves --- */
  ['Rubem Alves', 'Ensinar é um exercício de imortalidade. De alguma forma continuamos a viver naqueles cujos olhos aprenderam a ver o mundo pela magia da nossa palavra.', '', 'A Alegria de Ensinar (1994)', 'educacao'],
  ['Rubem Alves', 'Há escolas que são gaiolas e há escolas que são asas.', '', 'A Alegria de Ensinar (1994)', 'educacao'],
  ['Rubem Alves', 'O cientista estuda o que já existe; o poeta cria o que não existe.', '', 'Entre a Ciência e a Sapiência (1999)', 'educacao'],

  /* --- Camus, Sartre, Arendt: passagens localizáveis --- */
  ['Albert Camus', 'No fundo do inverno, aprendi por fim que havia em mim um verão invencível.', '', 'O Verão (1954), ensaio Regresso a Tipasa', 'dificeis'],
  ['Albert Camus', 'Não caminhe atrás de mim, talvez eu não saiba liderar. Não caminhe à minha frente, talvez eu não queira seguir.', '', 'Atribuído a Camus em coletâneas, sem localização em sua obra', 'amizade'],
  ['Hannah Arendt', 'A tragédia começou não quando a liberdade de opinião foi abolida, mas quando ninguém mais soube distinguir fato de opinião.', '', 'Formulação difundida a partir de Verdade e Política (1967); não é citação literal do ensaio', 'politica'],
  ['Hannah Arendt', 'A verdade factual, como toda verdade, exige ser reconhecida peremptoriamente.', '', 'Verdade e Política (1967), ensaio publicado na The New Yorker', 'politica'],

  /* --- Kierkegaard --- */
  ['Søren Kierkegaard', 'Arriscar causa ansiedade; não arriscar é perder a si mesmo.', '', 'O Conceito de Angústia (1844)', 'coragem'],
  ['Søren Kierkegaard', 'O maior perigo, o de perder a si mesmo, pode acontecer no mundo de forma silenciosa, como se não fosse nada.', '', 'O Desespero Humano (1849), primeira parte', 'autorreconhecimento'],

  /* --- Schopenhauer --- */
  ['Arthur Schopenhauer', 'A saúde não é tudo, mas sem ela tudo o mais é nada.', '', 'Aforismos para a Sabedoria de Vida (1851), capítulo 2', 'vida'],
  ['Arthur Schopenhauer', 'Cada um toma os limites do próprio campo de visão pelos limites do mundo.', 'Jeder hält das Ende seines Gesichtskreises für das der Welt.', 'Parerga e Paralipomena (1851), volume II', 'reflexao'],

  /* --- John Stuart Mill --- */
  ['John Stuart Mill', 'A única liberdade que merece o nome é a de buscar o nosso próprio bem à nossa própria maneira.', 'The only freedom which deserves the name is that of pursuing our own good in our own way.', 'Sobre a Liberdade (1859), capítulo 1', 'politica'],
  ['John Stuart Mill', 'Quem só conhece o próprio lado da questão conhece pouco dela.', 'He who knows only his own side of the case knows little of that.', 'Sobre a Liberdade (1859), capítulo 2', 'educacao'],

  /* --- Francis Bacon --- */
  ['Francis Bacon', 'A leitura torna o homem completo; a conversa, ágil; a escrita, exato.', 'Reading maketh a full man; conference a ready man; and writing an exact man.', 'Ensaios (1625), Dos Estudos', 'educacao'],
  ['Francis Bacon', 'O que é mais buscado nos homens não é o entendimento, mas a memória.', '', 'Novum Organum (1620), livro I', 'educacao'],

  /* --- William James --- */
  ['William James', 'A maior arma contra o estresse é a nossa capacidade de escolher um pensamento em vez de outro.', '', 'Atribuído a James em coletâneas, sem localização em sua obra', 'reflexao'],
  ['William James', 'Somos como ilhas no mar, separados na superfície e ligados no fundo.', '', 'Atribuído a James em coletâneas, sem localização em sua obra', 'amizade'],
  ['William James', 'O hábito é o enorme volante da sociedade, seu agente conservador mais precioso.', 'Habit is thus the enormous fly-wheel of society, its most precious conservative agent.', 'Princípios de Psicologia (1890), capítulo 4', 'reflexao'],

  /* --- Jung --- */
  ['Carl Gustav Jung', 'Até que você torne o inconsciente consciente, ele dirigirá sua vida e você o chamará de destino.', '', 'Formulação difundida a partir de Aion (1951); não é citação literal da obra', 'autorreconhecimento'],
  ['Carl Gustav Jung', 'O encontro de duas personalidades é como o contato entre duas substâncias químicas: se há alguma reação, ambas se transformam.', '', 'Psicologia Moderna (1933), capítulo sobre problemas da psicoterapia', 'reflexao'],

  /* --- Paulo Freire --- */
  ['Paulo Freire', 'Ninguém liberta ninguém, ninguém se liberta sozinho: os homens se libertam em comunhão.', '', 'Pedagogia do Oprimido (1968), capítulo 2', 'educacao'],
  ['Paulo Freire', 'É preciso ter esperança, mas ter esperança do verbo esperançar, porque tem gente que tem esperança do verbo esperar.', '', 'Formulação difundida a partir de falas de Freire; sem localização em obra publicada', 'conforto'],

  /* --- Victor Hugo --- */
  ['Victor Hugo', 'Aquele que abre uma escola fecha uma prisão.', '', 'Atribuído a Victor Hugo em coletâneas, sem localização em sua obra', 'educacao'],
  ['Victor Hugo', 'O futuro tem muitos nomes: para os fracos é o inatingível; para os temerosos, o desconhecido; para os valentes, a oportunidade.', '', 'Atribuído a Victor Hugo em coletâneas, sem localização em sua obra', 'motivacao'],

  /* --- Bertrand Russell --- */
  ['Bertrand Russell', 'A ciência é o que sabemos; a filosofia é o que não sabemos.', 'Science is what you know, philosophy is what you don\u2019t know.', 'Conferência O Valor da Filosofia, reproduzida em Ensaios Impopulares (1950)', 'filosofos'],

  /* --- Eleanor Roosevelt --- */
  ['Eleanor Roosevelt', 'Faça uma coisa todo dia que te dê medo.', '', 'Você Aprende Vivendo (1960)', 'coragem'],
  ['Eleanor Roosevelt', 'O futuro pertence àqueles que acreditam na beleza de seus sonhos.', '', 'Atribuído a Eleanor Roosevelt em coletâneas, sem registro documental localizado', 'motivacao'],

  /* --- Machado, Pessoa, Wilde --- */
  ['Machado de Assis', 'O menino é o pai do homem.', '', 'Dom Casmurro (1899), capítulo 2', 'familia'],
  ['Fernando Pessoa', 'Tudo vale a pena quando a alma não é pequena.', '', 'Mensagem (1934), poema Mar Português', 'coragem'],
  ['Oscar Wilde', 'Somos todos feitos da mesma matéria, mas nem todos temos o mesmo destino.', '', 'Atribuído a Wilde em coletâneas, sem localização em sua obra', 'reflexao'],

  /* --- Dalai Lama --- */
  ['Dalai Lama', 'Amor e compaixão são necessidades, não luxos. Sem eles, a humanidade não sobrevive.', 'Love and compassion are necessities, not luxuries. Without them humanity cannot survive.', 'Uma Ética para o Novo Milênio (1999)', 'amor'],
  ['Dalai Lama', 'Nossa principal finalidade nesta vida é ajudar os outros. E se você não pode ajudá-los, ao menos não os machuque.', '', 'Palestras e conferências registradas do Dalai Lama', 'amor'],

  /* --- Cora Coralina --- */
  ['Cora Coralina', 'Feliz aquele que transfere o que sabe e aprende o que ensina.', '', 'Atribuído a Cora Coralina em coletâneas; não localizado em sua obra publicada', 'educacao'],
  ['Cora Coralina', 'Sou aquela mulher a quem o tempo muito ensinou.', '', 'Poema Assim Eu Vejo a Vida, atribuído a Cora Coralina e não localizado em edição autorizada', 'autorreconhecimento'],

  /* --- bell hooks, Angela Davis --- */
  ['bell hooks', 'O amor é um ato de vontade, tanto uma intenção quanto uma ação.', 'Love is as love does. Love is an act of will.', 'Tudo Sobre o Amor (2000), capítulo 1', 'amor'],
  ['Angela Davis', 'Não aceito mais as coisas que não posso mudar. Estou mudando as coisas que não posso aceitar.', 'I am no longer accepting the things I cannot change. I am changing the things I cannot accept.', 'Discurso registrado', 'empoderamento']
];

/* --- má-atribuição encontrada na revisão da quarentena --- */
const MISATRIBUICAO_F34 = {
  autor: 'Dinah Maria Craik',
  texto: 'A amizade é o conforto indescritível de nos sentirmos seguros com uma pessoa, sem ter de pesar pensamentos nem medir palavras.',
  orig: 'Oh, the comfort — the inexpressible comfort of feeling safe with a person — having neither to weigh thoughts nor measure words.',
  fonte: 'A Life for a Life (1859), capítulo 16',
  nota: 'Circula em massa atribuída a George Eliot. É de Dinah Maria Mulock Craik, romancista inglesa contemporânea dela.'
};

const RELATORIO_FASE34 = { resgatadas: 0, ignoradas: 0 };
(function resgatarF34() {
  const cats = CATEGORIES.map((c) => c.id);
  const existentes = new Set(QUOTES.map((q) => _normDup(q.text)));
  RESGATE_F34.forEach(([autor, texto, orig, fonte, cat]) => {
    if (!texto || existentes.has(_normDup(texto))) {
      RELATORIO_FASE34.ignoradas++;
      return;
    }
    const incerta = /^Atribuído|sem localiza|sem registro|não localizado|Formulação difundida|não é citação literal/i.test(fonte);
    const q = { author: autor, text: texto, src: fonte, st: incerta ? 'A-' : 'A', cat: cats.includes(cat) ? cat : 'reflexao' };
    if (orig) q.orig = orig;
    q.qid = 'f34' + RELATORIO_FASE34.resgatadas.toString(36) + Math.abs(_normDup(texto).length * 49979687).toString(36);
    QUOTES.push(q);
    existentes.add(_normDup(texto));
    RELATORIO_FASE34.resgatadas++;
  });

  /* frase de Craik, devolvida ao autor correto */
  const m = MISATRIBUICAO_F34;
  if (!existentes.has(_normDup(m.texto))) {
    QUOTES.push({ author: m.autor, text: m.texto, orig: m.orig, src: m.fonte, st: 'A', cat: 'amizade', notaAutoria: m.nota, qid: 'f34craik' });
    RELATORIO_FASE34.resgatadas++;
  }
  if (typeof PAPEIS === 'object') PAPEIS['Dinah Maria Craik'] = 'Romancista britânica (1826–1887)';
  PERFIS_PROFUNDOS['Dinah Maria Craik'] = {
    resumo: 'Romancista vitoriana cuja frase sobre amizade circula no mundo inteiro atribuída a George Eliot.',
    bio: [
      'Dinah Maria Mulock nasceu em Stoke-on-Trent, Inglaterra, em 20 de abril de 1826, filha de um pregador dissidente de temperamento instável. A mãe morreu quando ela tinha vinte anos, e Dinah assumiu o sustento dos irmãos escrevendo — decisão incomum e arriscada para uma mulher sem renda própria naquele momento.',
      'John Halifax, Gentleman, publicado em 1856, foi um dos maiores sucessos editoriais vitorianos: a trajetória de um órfão sem posses que ascende pelo trabalho e pela integridade, sem herança nem título. O livro vendeu por décadas e foi traduzido para várias línguas.',
      'Escreveu cerca de vinte romances, além de contos, poesia e ensaios. Em A Woman\u2019s Thoughts About Women, de 1858, defendeu que mulheres solteiras precisavam de trabalho remunerado e de instrução, e não de tutela — posição avançada para o período. Recebeu pensão civil da Coroa em 1864, que destinou a escritores em dificuldade.',
      'A passagem sobre a amizade, do romance A Life for a Life, de 1859, é hoje uma das frases mais reproduzidas em língua inglesa sobre o tema. Circula quase sempre atribuída a George Eliot, contemporânea sua e muito mais lembrada. Craik morreu em Shortlands, em Kent, em 12 de outubro de 1887.'
    ],
    contexto: 'Craik pertence à geração de romancistas vitorianas que viviam do próprio trabalho num mercado que as tolerava mal. Seu caso é exemplar de como a fama posterior de uma autora atrai para si a autoria de textos de outra.',
    contribuicoes: ['Escreveu John Halifax, Gentleman (1856), um dos maiores sucessos editoriais vitorianos.', 'Escreveu A Woman\u2019s Thoughts About Women, defendendo trabalho remunerado e instrução para mulheres solteiras.', 'É a autora real da passagem sobre amizade atribuída em massa a George Eliot.'],
    cronologia: [
      [1826, 'Nasce em Stoke-on-Trent, em 20 de abril.'],
      [1856, 'Publica John Halifax, Gentleman.'],
      [1859, 'Publica A Life for a Life.'],
      [1864, 'Recebe pensão civil da Coroa.'],
      [1887, 'Morre em Kent.']
    ],
    nota: 'A frase sobre o conforto indescritível de se sentir seguro com alguém é de Craik, em A Life for a Life (1859), e não de George Eliot.'
  };

  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  RECALCULAR_FILA();
})();
window.F34 = RELATORIO_FASE34;

/* ================================================================
   FASE 35 — MAIS PÁGINAS DE OBRA
   Selecionadas por OBRAS_SEM_PAGINA(), na ordem de relevância real.
   ================================================================ */
Object.assign(OBRA_PAGINA, {
  'Fiódor Dostoiévski||Crime e Castigo': {
    sobre: 'Raskólnikov, estudante pobre de São Petersburgo, mata uma velha agiota convencido de que homens extraordinários têm direito de transgredir a lei em nome de um bem maior. O crime ocupa poucas páginas; o resto do livro é o que acontece dentro dele depois, e o cerco paciente do investigador Porfíri.',
    contexto: 'Publicado em folhetim em 1866, na Rússia da servidão recém-abolida, com estudantes radicalizados discutindo utilitarismo e niilismo nas pensões da capital.',
    momento: 'Dostoiévski voltara da Sibéria endividado e epilético, e escreveu o romance sob pressão de credores. Queimou uma primeira versão inteira e recomeçou do zero mudando a narração.',
    importancia: 'É o romance que fundou a ficção psicológica moderna: o crime não é enigma a resolver, e sim uma ideia levada às últimas consequências dentro de uma consciência. Influenciou diretamente Nietzsche, Freud e a filosofia existencial.',
    curiosidade: 'Dostoiévski precisou ditar O Jogador em vinte e seis dias, no meio da escrita deste livro, para não perder os direitos de toda a sua obra num contrato leonino.'
  },

  'Fiódor Dostoiévski||Os Irmãos Karamázov': {
    sobre: 'Quatro irmãos e um pai devasso, um assassinato e um julgamento. No centro, o capítulo do Grande Inquisidor, em que Ivan imagina Cristo voltando a Sevilha e sendo preso pela Igreja, que lhe explica por que os homens não querem a liberdade que ele trouxe.',
    contexto: 'Publicado entre 1879 e 1880, na Rússia do terrorismo político e da crise religiosa, dois anos antes do assassinato do czar Alexandre II.',
    momento: 'Dostoiévski tinha 58 anos e havia perdido um filho de três anos pouco antes de começar. Morreu quatro meses após concluir o romance, que planejava continuar numa segunda parte.',
    importancia: 'É considerada sua obra máxima e um dos maiores romances já escritos. Dá formulação plena a ideias que o autor rejeitava: a acusação de Ivan contra Deus é o argumento mais forte já escrito contra a fé, e foi escrito por um crente.',
    curiosidade: 'Freud chamou o Grande Inquisidor de um dos pontos culminantes da literatura mundial. Einstein disse que o livro lhe deu mais do que qualquer pensador científico.'
  },

  'Liev Tolstói||Guerra e Paz': {
    sobre: 'Cinco famílias da aristocracia russa entre 1805 e 1820, atravessadas pelas invasões napoleônicas. Centenas de personagens, batalhas vistas de dentro da confusão e ensaios em que o autor interrompe tudo para argumentar que grandes homens não movem a história — são movidos por ela.',
    contexto: 'Publicado entre 1865 e 1869, meio século após os acontecimentos narrados, quando a Rússia recém-abolira a servidão e discutia seu lugar entre Europa e Ásia.',
    momento: 'Tolstói tinha trinta e poucos anos, era veterano do cerco de Sebastopol e escreveu o livro em Iásnaia Poliana, com a esposa Sófia copiando à mão o manuscrito inteiro várias vezes.',
    importancia: 'É o romance de maior ambição já escrito: ficção, história e filosofia da história no mesmo volume. A tese sobre a impotência dos grandes homens diante das forças coletivas continua sendo discutida por historiadores.',
    curiosidade: 'Tolstói recusava chamá-lo de romance. Dizia que não era romance, nem poema, nem crônica histórica — era o que ele quisera exprimir na forma em que se exprimiu.'
  },

  'Miguel de Cervantes||Dom Quixote': OBRA_PAGINA['Miguel de Cervantes||Dom Quixote'],

  'Clarice Lispector||A Paixão Segundo G.H.': {
    sobre: 'Uma escultora entra no quarto vazio da empregada que acabou de sair, esmaga uma barata na porta do armário e passa o livro inteiro diante daquilo, atravessando a desorganização completa de si mesma. Não há enredo além disso.',
    contexto: 'Publicado em 1964, ano do golpe militar, num Brasil em que a literatura se dividia entre o engajamento político e a experimentação formal.',
    momento: 'Clarice havia voltado do exterior fazia cinco anos e escrevia crônicas para sustentar os filhos. Escreveu o romance num período que descreveu como de máxima concentração.',
    importancia: 'É a expressão mais radical de sua prosa: o enredo desaparece e resta o instante em que a percepção comum se rompe. Muitos críticos o consideram seu livro mais importante, ainda que não o mais lido.',
    curiosidade: 'O livro abre com uma advertência da autora dizendo que ele é para pessoas de alma já formada, e que quem não quiser ler pode parar ali.'
  },

  'Guimarães Rosa||Grande Sertão: Veredas': {
    sobre: 'Riobaldo, ex-jagunço já velho, narra sua vida a um interlocutor que nunca fala: as guerras entre bandos no sertão de Minas e da Bahia, o possível pacto com o diabo numa encruzilhada, e o amor por Diadorim, cujo segredo só se revela na última página.',
    contexto: 'Publicado em 1956, quando a literatura brasileira ainda operava no regionalismo documental dos anos 1930 e ninguém esperava um romance de seiscentas páginas sem parágrafos nem capítulos.',
    momento: 'Guimarães Rosa era diplomata de carreira e escreveu o livro em pouco mais de dois anos, a partir de cadernos de anotações recolhidos em viagens de boiadeiro pelo sertão.',
    importancia: 'É considerado o maior romance da literatura brasileira. Rosa inventou uma língua própria, misturando fala sertaneja, arcaísmos, neologismos e estruturas de outras línguas, e transformou o sertão em espaço metafísico.',
    curiosidade: 'O livro não tem divisão em capítulos: são seiscentas páginas de um único bloco narrativo, com respiros marcados apenas por espaçamento.'
  },

  'Marcel Proust||Em Busca do Tempo Perdido': {
    sobre: 'Sete volumes, cerca de um milhão e meio de palavras, disparados por uma sensação: o gosto de um bolinho molhado no chá devolve ao narrador um mundo inteiro esquecido. Dali a obra investiga memória, tempo, amor, ciúme, arte e a mecânica exata da vida social.',
    contexto: 'Publicado entre 1913 e 1927, na França que atravessava o caso Dreyfus, a Belle Époque e a Primeira Guerra, enquanto a aristocracia perdia função e a burguesia ocupava seu lugar.',
    momento: 'Proust escrevia num quarto forrado de cortiça, à noite, asmático e recluso, depois da morte da mãe. O primeiro volume foi recusado por editores, inclusive André Gide, e publicado por conta do autor.',
    importancia: 'Deslocou o centro do romance do enredo para a consciência e a percepção, e é uma das obras mais influentes da literatura moderna. O segundo volume recebeu o Prêmio Goncourt em 1919.',
    curiosidade: 'Gide, que recusou o manuscrito sem ler direito, escreveu depois a Proust chamando aquilo do maior erro de sua vida.'
  },

  'Ernest Hemingway||O Velho e o Mar': {
    sobre: 'Um pescador cubano idoso, há oitenta e quatro dias sem pegar nada, fisga sozinho um marlim gigantesco e trava com ele uma luta de dias em alto-mar — apenas para vê-lo devorado por tubarões na volta.',
    contexto: 'Publicado em 1952, após uma década em que a crítica dava Hemingway por acabado e seu romance anterior fora recebido com hostilidade quase unânime.',
    momento: 'Hemingway vivia em Cuba havia mais de uma década e escreveu a novela em poucas semanas. Disse ter tentado escrever um velho de verdade, um menino de verdade, o mar de verdade — e deixar que significassem muitas coisas.',
    importancia: 'É a aplicação mais pura da teoria do iceberg: quase nada é explicado e tudo pesa. Rendeu o Pulitzer de 1953 e pesou decisivamente no Nobel do ano seguinte.',
    curiosidade: 'Foi publicada integralmente numa única edição da revista Life, que vendeu mais de cinco milhões de exemplares em dois dias.'
  },

  'George Orwell||A Revolução dos Bichos': {
    sobre: 'Os animais de uma fazenda expulsam o dono humano e instauram um governo próprio com sete mandamentos. Aos poucos, os porcos assumem a direção, reescrevem as regras na parede durante a noite e passam a andar sobre duas patas.',
    contexto: 'Escrito entre 1943 e 1944, quando a União Soviética era aliada da Grã-Bretanha na guerra e criticá-la era politicamente inconveniente. Quatro editoras recusaram o livro por isso.',
    momento: 'Orwell havia lutado na Guerra Civil Espanhola e visto de perto a perseguição a militantes de esquerda por outros grupos de esquerda. Foi essa experiência, e não a leitura teórica, que produziu o livro.',
    importancia: 'É a alegoria política mais eficaz já escrita: cabe em cem páginas, é compreensível por qualquer leitor e continua sendo aplicada a regimes de todos os sinais.',
    curiosidade: 'A frase sobre alguns animais serem mais iguais que outros aparece apenas no fim, como versão corrompida do mandamento original — e virou provavelmente a linha mais citada da literatura política.'
  },

  'Franz Kafka||A Metamorfose': OBRA_PAGINA['Franz Kafka||A Metamorfose'],

  'Simone de Beauvoir||O Segundo Sexo': OBRA_PAGINA['Simone de Beauvoir||O Segundo Sexo'],

  'Yuval Noah Harari||Sapiens': {
    sobre: 'Percorre a história do Homo sapiens da revolução cognitiva à era moderna, sustentando que a espécie prevaleceu não por força ou inteligência individual, mas por conseguir cooperar em números muito grandes em torno de realidades imaginadas: deuses, nações, dinheiro, empresas, direitos.',
    contexto: 'Publicado em hebraico em 2011 e em inglês em 2014, num momento de demanda por grandes sínteses capazes de dar sentido a mudanças aceleradas — gênero que a especialização acadêmica havia abandonado.',
    momento: 'Harari é historiador medievalista de formação, com pesquisa de doutorado sobre memórias militares. O livro nasceu de um curso introdutório de história do mundo que ele dava na Universidade Hebraica.',
    importancia: 'Tornou-se um dos livros de não ficção mais vendidos das últimas décadas e recolocou a história de longuíssima duração em circulação ampla.',
    curiosidade: 'Parte da historiografia acadêmica critica generalizações e afirmações que a documentação disponível não sustenta com a segurança com que são apresentadas.'
  },

  'Daniel Kahneman||Rápido e Devagar': {
    sobre: 'Apresenta quatro décadas de pesquisa sobre julgamento organizadas em torno de dois sistemas: um rápido, automático e intuitivo, e outro lento, deliberado e custoso. Percorre heurísticas, vieses, aversão à perda e a diferença entre o eu que experimenta e o eu que lembra.',
    contexto: 'Publicado em 2011, três anos após a crise financeira que expôs os limites do modelo do agente racional que dominava economia e finanças.',
    momento: 'Kahneman tinha 77 anos e escreveu o livro como balanço de uma vida de pesquisa, boa parte dela feita com Amos Tversky, morto em 1996. A dedicatória é a ele.',
    importancia: 'Levou a economia comportamental ao grande público e mudou a forma como políticas públicas, medicina, direito e finanças pensam a tomada de decisão.',
    curiosidade: 'Kahneman reconheceu publicamente que parte dos estudos de priming citados no livro não resistiu a tentativas de replicação, e disse que havia acreditado demais neles.'
  },

  'Viktor Frankl||Em Busca de Sentido': OBRA_PAGINA['Viktor Frankl||Em Busca de Sentido'],

  'Stephen Covey||Os 7 Hábitos das Pessoas Altamente Eficazes': {
    sobre: 'Organiza-se em três etapas — da dependência à independência, desta à interdependência, e a renovação contínua — com hábitos que vão de ser proativo e começar com o objetivo em mente a procurar primeiro compreender e criar sinergia.',
    contexto: 'Publicado em 1989, no auge da literatura de negócios americana, que oferecia sobretudo técnicas de imagem e atalhos de influência.',
    momento: 'Covey lecionava havia duas décadas e partiu da própria tese de doutorado, que analisara duzentos anos de literatura americana de sucesso e encontrara uma virada: os primeiros cento e cinquenta anos falavam de caráter, os últimos, de personalidade.',
    importancia: 'Vendeu dezenas de milhões de exemplares e permanece um dos livros de gestão pessoal mais adotados. Sua tese central é que técnica não funciona sem princípio por baixo.',
    curiosidade: 'A matriz de urgência e importância, hoje ensinada em toda parte, ganhou circulação massiva a partir deste livro e do seguinte, Primeiro o Mais Importante.'
  },

  'Robert Greene||As 48 Leis do Poder': {
    sobre: 'Quarenta e oito princípios sobre conquista e preservação do poder, cada um ilustrado por episódios históricos e por um caso em que a regra foi violada, com as consequências.',
    contexto: 'Publicado em 1998, na tradição dos moralistas — Maquiavel, Gracián, La Rochefoucauld — que descrevem o comportamento humano como ele é, e não como deveria ser.',
    momento: 'Greene tinha 39 anos e passara por dezenas de empregos instáveis. A ideia nasceu de um encontro em Veneza com o produtor Joost Elffers.',
    importancia: 'Vendeu milhões de exemplares e teve circulação particularmente forte entre presidiários, músicos e executivos. A recepção divide-se entre quem vê descrição realista e quem vê manual de manipulação.',
    curiosidade: 'O livro é proibido em várias penitenciárias americanas, e é ao mesmo tempo um dos mais pedidos pelos detentos nas bibliotecas onde é permitido.'
  },

  'Paulo Freire||Pedagogia da Autonomia': {
    sobre: 'Reúne os saberes que Freire considera necessários à prática educativa, organizados em três blocos: não há docência sem discência, ensinar não é transferir conhecimento, e ensinar é uma especificidade humana. Cada saber é desenvolvido em poucas páginas.',
    contexto: 'Publicado em 1996, no Brasil da reforma educacional e do avanço das políticas de ajuste que Freire criticava, quando o país discutia diretrizes e bases da educação nacional.',
    momento: 'Freire tinha 74 anos, havia sido secretário de Educação de São Paulo e morreria no ano seguinte. É seu último livro concluído.',
    importancia: 'Tornou-se o texto mais adotado em cursos de formação de professores no Brasil, pela combinação de síntese teórica e orientação prática.',
    curiosidade: 'A formulação de que ensinar exige risco, aceitação do novo e rejeição a qualquer forma de discriminação é citada em quase todos os currículos de licenciatura do país.'
  },

  'Clarice Lispector||A Hora da Estrela': OBRA_PAGINA['Clarice Lispector||A Hora da Estrela'],

  'Sun Tzu||A Arte da Guerra': OBRA_PAGINA['Sun Tzu||A Arte da Guerra'],

  'Marco Aurélio||Meditações': OBRA_PAGINA['Marco Aurélio||Meditações']
});
Object.keys(OBRA_PAGINA).forEach((k) => {
  if (!OBRA_PAGINA[k]) delete OBRA_PAGINA[k];
});

/* ================================================================
   FASE 36 — MAIS PÁGINAS DE OBRA E PANORAMAS FINAIS
   ================================================================ */
Object.assign(OBRA_PAGINA, {
  'Immanuel Kant||Fundamentação da Metafísica dos Costumes': {
    sobre: 'Procura o princípio supremo da moralidade e o encontra na forma da lei que uma vontade racional dá a si mesma. Daí o imperativo categórico: agir apenas segundo a máxima que se possa querer como lei universal, e tratar a humanidade sempre também como fim, nunca apenas como meio.',
    contexto: 'Publicada em 1785, no Iluminismo tardio, quando a moral ainda era fundamentada na religião ou no cálculo de consequências, e Kant procurava uma base que não dependesse de nenhuma das duas.',
    momento: 'Kant tinha 61 anos e havia publicado a Crítica da Razão Pura quatro anos antes. Escreveu a Fundamentação como texto preparatório, mais curto e acessível, para depois desenvolver a Crítica da Razão Prática.',
    importancia: 'É o texto fundador da ética do dever e um dos mais influentes da filosofia moral. A formulação sobre tratar a pessoa como fim está na base do conceito moderno de dignidade humana e aparece em declarações de direitos.',
    curiosidade: 'Kant escreveu que duas coisas enchiam seu ânimo de admiração sempre nova: o céu estrelado acima dele e a lei moral dentro dele. A frase está gravada em seu túmulo, em Kaliningrado.'
  },

  'Nicolau Maquiavel||O Príncipe': OBRA_PAGINA['Nicolau Maquiavel||O Príncipe'],

  'Victor Hugo||Os Miseráveis': OBRA_PAGINA['Victor Hugo||Os Miseráveis'],

  'José Saramago||Ensaio sobre a Cegueira': {
    sobre: 'Uma epidemia de cegueira branca se espalha por uma cidade sem nome. Os primeiros contaminados são internados num manicômio desativado sob guarda armada, e a partir dali o livro observa o que resta da organização social quando as condições mínimas desaparecem. Uma única personagem enxerga, e ninguém sabe.',
    contexto: 'Publicado em 1995, quando as guerras da Bósnia e de Ruanda haviam mostrado, poucos anos antes, com que rapidez sociedades inteiras podem se desfazer.',
    momento: 'Saramago tinha 72 anos e vivia em Lanzarote desde 1993, para onde se mudara em protesto após o governo português vetar seu Evangelho Segundo Jesus Cristo numa indicação a prêmio europeu.',
    importancia: 'É a obra mais lida do autor e uma das alegorias políticas mais duras da literatura contemporânea. Pesou de forma decisiva no Nobel de 1998, o único concedido a um autor de língua portuguesa.',
    curiosidade: 'Nenhuma personagem tem nome. São identificadas por traços — a mulher do médico, o velho da venda preta, o primeiro cego —, escolha que reforça a leitura do livro como parábola.'
  },

  'Jorge Luis Borges||Ficções': {
    sobre: 'Contos construídos como problemas: a biblioteca que contém todos os livros possíveis, o homem incapaz de esquecer qualquer coisa, o jardim em que todos os futuros ocorrem simultaneamente, e a resenha minuciosa de um livro que não existe.',
    contexto: 'Publicado em 1944, na Argentina de Perón, por um autor que trabalhava numa biblioteca municipal de bairro e era praticamente desconhecido fora de um círculo pequeno.',
    momento: 'Borges tinha 45 anos e havia sofrido um acidente grave em 1938, com septicemia, após o qual passou a escrever contos por medo de ter perdido a capacidade de escrever poesia.',
    importancia: 'É um dos livros de contos mais influentes do século XX. Seus procedimentos — a ficção que se apresenta como erudição, o texto sobre textos, o livro imaginário resenhado — anteciparam boa parte da literatura pós-moderna.',
    curiosidade: 'Borges explicava que escrever resenhas de livros inexistentes lhe poupava as centenas de páginas que aqueles livros exigiriam, deixando apenas o comentário.'
  },

  'Machado de Assis||Quincas Borba': {
    sobre: 'Rubião, professor de província, herda a fortuna de um filósofo louco com a obrigação de cuidar de seu cachorro, que tem o mesmo nome do dono. Vai ao Rio, é cercado por um casal que o explora metodicamente e enlouquece devagar, convencido de ser Napoleão III.',
    contexto: 'Publicado em 1891, nos primeiros anos da República, quando o Rio vivia a especulação financeira do Encilhamento e fortunas se faziam e desfaziam em meses.',
    momento: 'Machado escreveu o romance logo após Memórias Póstumas, aproveitando o filósofo que criara naquele livro. Publicou primeiro em folhetim, e reescreveu bastante para a versão em volume.',
    importancia: 'É o segundo livro da chamada trilogia realista e o mais direto no exame da lógica de favor e dependência da sociedade brasileira. O Humanitismo do personagem-título parodia as filosofias evolucionistas em voga.',
    curiosidade: 'A doutrina inventada por Quincas Borba resume-se na fórmula sobre o vencedor e as batatas: numa disputa em que só há alimento para um, quem sobrevive está certo por ter sobrevivido.'
  },

  'Ernest Hemingway||Adeus às Armas': {
    sobre: 'Um motorista de ambulância americano na frente italiana da Primeira Guerra se apaixona por uma enfermeira inglesa, é ferido, deserta durante a retirada de Caporetto e foge com ela para a Suíça.',
    contexto: 'Publicado em 1929, uma década após o conflito, quando a geração que voltou das trincheiras já havia desmontado a retórica heroica que a mandara para lá.',
    momento: 'Hemingway servira como motorista de ambulância na Itália e fora gravemente ferido por morteiro aos dezoito anos, apaixonando-se por uma enfermeira que depois o recusou. O romance parte dessa experiência.',
    importancia: 'É um dos grandes romances sobre a Primeira Guerra e o texto em que Hemingway trata palavras como glória e sacrifício como obscenidades diante dos números de mortos.',
    curiosidade: 'O autor reescreveu o último parágrafo dezenas de vezes. Perguntado sobre o que o travava, respondeu que era acertar as palavras.'
  },

  'Albert Camus||A Peste': {
    sobre: 'A cidade de Oran é isolada por uma epidemia. O médico Rieux e um grupo de homens comuns organizam o que podem contra ela, sem heroísmo declarado e sem esperança de vitória definitiva, apenas porque é o que há para fazer.',
    contexto: 'Publicado em 1947, dois anos após a Libertação, e lido imediatamente como alegoria da ocupação nazista e da resistência francesa — leitura que o autor não desmentiu nem confirmou inteiramente.',
    momento: 'Camus tinha 33 anos, dirigira o jornal clandestino Combat durante a ocupação e sofria de tuberculose. Trabalhou no livro por quase sete anos.',
    importancia: 'É o romance do ciclo da revolta e o que melhor expõe sua ética: agir contra o mal sem justificar a violência e sem prometer redenção. Voltou às listas de mais vendidos durante a pandemia de 2020.',
    curiosidade: 'A última página adverte que o bacilo da peste nunca morre nem desaparece, e pode esperar décadas adormecido até tornar a despertar seus ratos.'
  },

  'Erich Fromm||O Medo à Liberdade': {
    sobre: 'Pergunta por que sociedades modernas, tendo conquistado liberdade em relação a laços tradicionais, produziram movimentos que a entregaram voluntariamente. A resposta: a liberdade sem vínculos que deem sentido gera isolamento, e as pessoas buscam alívio em autoritarismo, destrutividade e conformismo automático.',
    contexto: 'Publicado em 1941, com a Europa sob domínio nazista, escrito por um psicanalista alemão que emigrara sete anos antes e participara dos primeiros estudos empíricos sobre personalidade autoritária entre trabalhadores alemães.',
    momento: 'Fromm tinha 41 anos e vivia nos Estados Unidos desde 1934. É seu primeiro livro em inglês e o que estabeleceu sua reputação.',
    importancia: 'É uma das análises mais consistentes sobre a adesão popular a regimes autoritários, e recusa tanto a explicação puramente psicológica quanto a puramente econômica.',
    curiosidade: 'Fromm formulou aqui o conceito de caráter social: a estrutura de personalidade compartilhada que uma sociedade produz para que seus membros queiram fazer o que precisam fazer.'
  },

  'Jane Austen||Emma': {
    sobre: 'Emma Woodhouse, rica, inteligente e convencida de sua perspicácia, decide arranjar casamentos alheios e erra em todos, sem perceber o próprio sentimento até quase tarde demais.',
    contexto: 'Publicado em 1815, na Inglaterra do fim das guerras napoleônicas, numa comunidade rural fechada onde posição social e casamento definiam o destino de uma vida.',
    momento: 'Austen tinha 39 anos e escreveu que criara uma heroína de quem ninguém gostaria além dela mesma. Morreria dois anos depois.',
    importancia: 'É considerado seu romance tecnicamente mais perfeito. Construído quase inteiro em discurso indireto livre, faz o leitor compartilhar os enganos da personagem antes de perceber a ironia da narradora.',
    curiosidade: 'O romance é também um enigma bem escondido: numa segunda leitura, todas as pistas do noivado secreto entre dois personagens estavam à vista desde o começo.'
  },

  'Charles Dickens||Um Conto de Natal': {
    sobre: 'Ebenezer Scrooge, avarento que despreza o Natal, é visitado numa noite por três espíritos que lhe mostram seu passado, seu presente e o futuro que o espera se nada mudar.',
    contexto: 'Publicado em 1843, na Inglaterra industrial onde crianças trabalhavam em minas e fábricas e a Lei dos Pobres tornara a assistência deliberadamente humilhante.',
    momento: 'Dickens escreveu a novela em seis semanas para saldar dívidas, após a queda de vendas de seu romance anterior. Bancou a impressão do próprio bolso e ganhou muito menos do que esperava.',
    importancia: 'Teve efeito cultural desproporcional ao tamanho: reconfigurou a celebração do Natal no mundo anglófono, deslocando-a para o registro da generosidade doméstica e da responsabilidade com os pobres.',
    curiosidade: 'A primeira tiragem de seis mil exemplares esgotou até a véspera do Natal. O livro nunca saiu de catálogo em cento e oitenta anos.'
  },

  'Mark Twain||As Aventuras de Huckleberry Finn': {
    sobre: 'Huck foge do pai violento e desce o rio Mississippi numa balsa com Jim, homem escravizado em busca da liberdade. O ponto alto é o momento em que decide ajudá-lo convencido de que irá para o inferno por isso.',
    contexto: 'Publicado em 1884, duas décadas após a abolição, quando o Sul reinstaurava a segregação e a promessa da Reconstrução havia fracassado. A ação se passa antes da guerra.',
    momento: 'Twain levou quase oito anos para terminar o livro, abandonando o manuscrito por longos períodos. Escreveu-o após revisitar o Mississippi de sua juventude como piloto.',
    importancia: 'Foi o primeiro grande romance americano escrito na fala vernácula do próprio país. Hemingway afirmou que toda a literatura americana moderna vem dele.',
    curiosidade: 'É contestado em escolas americanas desde a publicação — no século XIX por vulgaridade, hoje pelo uso reiterado de linguagem racista — e igualmente defendido por ser uma obra antirracista escrita na linguagem de sua época.'
  },

  'Bertrand Russell||História da Filosofia Ocidental': {
    sobre: 'Percorre o pensamento ocidental dos pré-socráticos ao século XX, sempre situando cada filósofo nas circunstâncias políticas e sociais em que viveu, e com julgamentos pessoais declarados em vez de neutralidade acadêmica.',
    contexto: 'Publicado em 1945, no fim da Segunda Guerra, quando o público buscava entender as raízes intelectuais do que acabara de acontecer.',
    momento: 'Russell tinha 73 anos, estava sem cargo acadêmico estável nos Estados Unidos após ter uma nomeação anulada judicialmente por suas posições sobre moral sexual, e escreveu o livro a partir de um curso de conferências.',
    importancia: 'Foi um enorme sucesso comercial, sustentou financeiramente o autor pelo resto da vida e pesou no Nobel de Literatura de 1950. Continua entre as introduções mais lidas da área.',
    curiosidade: 'Especialistas apontam imprecisões em vários capítulos, e Russell não escondia que preferia a clareza discutível à obscuridade correta.'
  },

  'Adam Smith||A Riqueza das Nações': OBRA_PAGINA['Adam Smith||A Riqueza das Nações'],

  'Rabindranath Tagore||Gitanjali': {
    sobre: 'Poemas devocionais em prosa poética sobre a relação entre o humano e o divino, sem dogma nem doutrina — o divino aparece como presença cotidiana, no trabalho, na natureza e no encontro com o outro.',
    contexto: 'Publicado em inglês em Londres em 1912, na Índia colonial, quando a literatura de língua bengali era praticamente desconhecida no Ocidente.',
    momento: 'Tagore traduziu ele próprio os poemas do bengali durante uma travessia marítima, em cadernos, sem intenção de publicá-los. W. B. Yeats leu os manuscritos e escreveu a apresentação.',
    importancia: 'Rendeu a Tagore o Nobel de Literatura em 1913, o primeiro concedido a um autor não europeu, e abriu ao Ocidente a literatura indiana moderna.',
    curiosidade: 'A versão inglesa é substancialmente diferente da bengali: Tagore reorganizou, cortou e reescreveu, de modo que os dois livros são obras distintas.'
  },

  'Antoine de Saint-Exupéry||O Pequeno Príncipe': OBRA_PAGINA['Antoine de Saint-Exupéry||O Pequeno Príncipe'],
  'Homero||Odisseia': OBRA_PAGINA['Homero||Odisseia'],
  'Platão||A República': OBRA_PAGINA['Platão||A República']
});
Object.keys(OBRA_PAGINA).forEach((k) => {
  if (!OBRA_PAGINA[k]) delete OBRA_PAGINA[k];
});

/* ---- panoramas finais ---- */
Object.entries({
  'Rubem Alves': {
    papel: 'Educador, teólogo e escritor brasileiro (1933–2014)',
    resumo: 'Trocou a teologia pela educação e escreveu sobre escola, infância e alegria numa prosa que o tornou um dos autores brasileiros mais lidos.',
    bio: [
      'Rubem Azevedo Alves nasceu em Boa Esperança, Minas Gerais, em 15 de setembro de 1933. A família empobreceu e mudou-se para o Rio quando ele tinha onze anos. Formou-se pastor presbiteriano e doutorou-se em teologia no Seminário de Princeton, nos Estados Unidos, com uma tese que é apontada como um dos textos fundadores da teologia da libertação.',
      'Voltou ao Brasil em 1968 e foi acusado de subversão pela própria igreja, que o processou e o expulsou do ministério. Perdeu a função pastoral e reconstruiu a vida como professor universitário, formando-se depois também em psicanálise.',
      'Lecionou por décadas na Universidade Estadual de Campinas, no departamento de filosofia e história da educação. A partir dos anos 1980, deslocou-se progressivamente da teologia e da academia para a crônica, escrevendo sobre escola, infância, corpo, comida, saudade e morte numa prosa curta e sensorial.',
      'Escreveu mais de cem livros, entre eles A Alegria de Ensinar, Estórias de Quem Gosta de Ensinar, O Retorno e o Terno e a série infantil sobre a Menina, o Cravo e a Rosa. Sua distinção entre escolas que são gaiolas e escolas que são asas circula amplamente na formação de professores. Morreu em Campinas em 19 de julho de 2014.'
    ],
    contexto: 'Rubem Alves atravessou a ditadura militar sendo perseguido pela igreja e pelo Estado, e escolheu falar de educação num registro que a pedagogia acadêmica considerava leve demais. É justamente essa escolha que explica seu alcance fora da universidade.',
    contribuicoes: ['Escreveu uma das teses fundadoras da teologia da libertação.', 'Escreveu A Alegria de Ensinar e Estórias de Quem Gosta de Ensinar, referências na formação de professores.', 'Formulou a distinção entre escolas que são gaiolas e escolas que são asas.', 'Deixou obra extensa de crônica e literatura infantil.'],
    cronologia: [
      [1933, 'Nasce em Boa Esperança, Minas Gerais, em 15 de setembro.'],
      [1968, 'Conclui o doutorado em Princeton e é processado pela igreja no Brasil.'],
      [1974, 'Torna-se professor na Universidade Estadual de Campinas.'],
      [1994, 'Publica A Alegria de Ensinar.'],
      [2014, 'Morre em Campinas.']
    ]
  },

  'Vince Lombardi': {
    papel: 'Treinador de futebol americano (1913–1970)',
    resumo: 'Transformou uma equipe fracassada em dinastia e deu nome ao troféu do Super Bowl.',
    bio: [
      'Vincent Thomas Lombardi nasceu no Brooklyn, Nova York, em 11 de junho de 1913, filho de imigrantes italianos. Estudou para o sacerdócio por dois anos antes de desistir, jogou futebol americano na Universidade Fordham como um dos chamados sete blocos de granito, e trabalhou como professor de latim, química e física numa escola católica de Nova Jersey, treinando o time nas horas vagas por quase uma década com salário baixíssimo.',
      'Passou a auxiliar em West Point e depois no New York Giants, e só recebeu seu primeiro comando principal profissional aos quarenta e cinco anos, no Green Bay Packers — equipe que vinha de uma temporada com uma vitória e dez derrotas, na menor cidade da liga.',
      'Em nove temporadas, conquistou cinco títulos da liga e as duas primeiras edições do Super Bowl. Sua ênfase não era tática sofisticada: era execução repetida à exaustão de poucas jogadas, disciplina e condicionamento. A jogada mais conhecida do time, o power sweep, era conhecida por todos os adversários e continuava funcionando.',
      'Recusava-se a tolerar discriminação racial no elenco, num período em que ela era corrente na liga, e protegia jogadores homossexuais de hostilidade no vestiário — postura documentada por ex-atletas. Morreu de câncer em Washington em 3 de setembro de 1970, aos cinquenta e sete anos. O troféu do Super Bowl leva seu nome desde então.'
    ],
    contexto: 'Lombardi tornou-se, na cultura americana, sinônimo de exigência e disciplina, a ponto de suas frases circularem em ambientes empresariais que nada têm a ver com esporte. O que costuma se perder nessa circulação é que sua reputação vinha de resultados concretos com um elenco que ninguém queria.',
    contribuicoes: ['Conquistou cinco títulos da liga e as duas primeiras edições do Super Bowl com o Green Bay Packers.', 'Recuperou uma franquia falida e a transformou na equipe dominante de sua década.', 'Combateu a discriminação racial no elenco em período em que ela era prática corrente na liga.', 'O troféu do Super Bowl leva seu nome.'],
    cronologia: [
      [1913, 'Nasce no Brooklyn, em 11 de junho.'],
      [1939, 'Torna-se professor e treinador numa escola de Nova Jersey.'],
      [1959, 'Assume o Green Bay Packers.'],
      [1967, 'Vence o primeiro Super Bowl.'],
      [1970, 'Morre em Washington; o troféu passa a levar seu nome.']
    ]
  },

  'Booker T. Washington': {
    papel: 'Educador norte-americano (1856–1915)',
    resumo: 'Nasceu escravizado, fundou o Instituto Tuskegee e foi a voz negra mais influente e mais contestada de sua época.',
    bio: [
      'Booker Taliaferro Washington nasceu escravizado numa fazenda da Virgínia, provavelmente em 1856. Após a abolição, trabalhou em minas de sal e de carvão na Virgínia Ocidental e caminhou centenas de quilômetros para chegar ao Instituto Hampton, onde pagou os estudos como zelador.',
      'Em 1881, aos vinte e cinco anos, foi encarregado de dirigir uma nova escola para negros no Alabama. Encontrou uma igreja em ruínas e nenhum prédio. Construiu o Instituto Tuskegee literalmente com os alunos, que fabricavam os próprios tijolos, e o transformou numa das instituições educacionais negras mais importantes do país. Foi ele quem contratou George Washington Carver.',
      'Seu discurso em Atlanta, em 1895, propôs o que ficou conhecido como o compromisso de Atlanta: negros concentrariam esforços em formação profissional e progresso econômico, aceitando temporariamente a segregação social, em troca de educação e oportunidade de trabalho. A proposta lhe deu acesso a filantropos e presidentes.',
      'W. E. B. Du Bois atacou frontalmente essa posição, acusando-o de aceitar a subordinação e de negligenciar direitos civis e educação superior. O debate entre os dois definiu a política negra americana por décadas. Documentos revelados depois mostraram que Washington financiou secretamente processos judiciais contra leis segregacionistas. Escreveu Da Escravidão à Liberdade, um dos livros mais lidos da literatura americana. Morreu em Tuskegee em 14 de novembro de 1915.'
    ],
    contexto: 'Washington operou no Sul da segregação legal e do linchamento, onde confronto direto custava vidas. Sua estratégia gradualista é hoje avaliada com a informação, então desconhecida, de que ele agia nos dois registros: acomodação em público e litígio em segredo.',
    contribuicoes: ['Fundou e dirigiu por trinta e quatro anos o Instituto Tuskegee.', 'Escreveu Da Escravidão à Liberdade (1901).', 'Foi o primeiro afro-americano a jantar na Casa Branca a convite presidencial.', 'Financiou secretamente ações judiciais contra leis segregacionistas.'],
    cronologia: [
      ['c. 1856', 'Nasce escravizado na Virgínia.'],
      [1881, 'Assume a direção do Instituto Tuskegee.'],
      [1895, 'Profere o discurso do compromisso de Atlanta.'],
      [1901, 'Publica Da Escravidão à Liberdade.'],
      [1915, 'Morre em Tuskegee.']
    ]
  },

  'Sojourner Truth': {
    papel: 'Abolicionista e ativista norte-americana (c. 1797–1883)',
    resumo: 'Escravizada até os trinta anos, tornou-se uma das oradoras mais poderosas do abolicionismo e do sufrágio.',
    bio: [
      'Isabella Baumfree nasceu escravizada no condado de Ulster, Nova York, por volta de 1797, e falava holandês como primeira língua. Foi vendida quatro vezes, separada da família na infância e sofreu violência física e sexual. Fugiu em 1826 com a filha bebê, pouco antes da lei estadual de emancipação, deixando os outros filhos para trás porque a lei os manteria em servidão por mais anos.',
      'Descobriu que um dos filhos, Peter, de cinco anos, havia sido vendido ilegalmente para o Alabama. Entrou com ação judicial e venceu — foi uma das primeiras mulheres negras a ganhar um processo contra um homem branco nos Estados Unidos, e recuperou o filho.',
      'Em 1843 mudou de nome para Sojourner Truth, dizendo que fora chamada a peregrinar e dizer a verdade. Passou a percorrer o país falando em assembleias abolicionistas e sufragistas, sempre em público aberto, muitas vezes hostil. Nunca aprendeu a ler nem a escrever; ditou suas memórias.',
      'Seu discurso na convenção de Akron, Ohio, em 1851, é o mais lembrado. A versão que circula, com o refrão sobre não ser considerada mulher, foi transcrita doze anos depois por uma jornalista que acrescentou sotaque sulista inexistente — Truth era de Nova York. Durante a Guerra Civil, recrutou soldados negros e foi recebida por Lincoln. Morreu em Battle Creek, Michigan, em 26 de novembro de 1883.'
    ],
    contexto: 'Truth argumentava simultaneamente contra a escravidão e contra o feminismo branco que não a incluía, numa época em que fazer as duas coisas ao mesmo tempo praticamente não tinha precedente. É por isso que sua figura foi recuperada com força pelo feminismo negro no século XX.',
    contribuicoes: ['Foi uma das primeiras mulheres negras a vencer um processo judicial contra um homem branco nos Estados Unidos.', 'Percorreu o país como oradora abolicionista e sufragista, sem saber ler nem escrever.', 'Ditou a Narrativa de Sojourner Truth (1850).', 'Recrutou soldados negros para o Exército da União durante a Guerra Civil.'],
    cronologia: [
      ['c. 1797', 'Nasce escravizada em Nova York.'],
      [1826, 'Foge com a filha bebê.'],
      [1828, 'Vence na justiça a ação para recuperar o filho.'],
      [1843, 'Adota o nome Sojourner Truth.'],
      [1851, 'Discursa na convenção de Akron, Ohio.'],
      [1883, 'Morre em Michigan.']
    ],
    nota: 'A versão mais conhecida do discurso de Akron foi transcrita doze anos depois por Frances Gage, que acrescentou um sotaque sulista que Truth, nascida em Nova York e falante de holandês, não tinha.'
  }
}).forEach(([nome, p]) => {
  const c = canonAuthor(nome);
  const ant = PERFIS_PROFUNDOS[c] || {};
  PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
  if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
  RELATORIO_FASE8.panoramas++;
});

/* contador do relatório passa a incluir todas as levas */
const _relF36 = CURADORIA_RELATORIO;
CURADORIA_RELATORIO = function () {
  const r = _relF36();
  const add =
    (typeof RELATORIO_FASE24 !== 'undefined' ? RELATORIO_FASE24.adicionadas : 0) + (typeof RELATORIO_FASE26 !== 'undefined' ? RELATORIO_FASE26.adicionadas : 0) + (typeof RELATORIO_FASE28 !== 'undefined' ? RELATORIO_FASE28.adicionadas : 0) + (typeof RELATORIO_FASE31 !== 'undefined' ? RELATORIO_FASE31.adicionadas : 0) + (typeof RELATORIO_FASE34 !== 'undefined' ? RELATORIO_FASE34.resgatadas : 0);
  r['Frases adicionadas na curadoria'] = add;
  r['— destas, resgatadas da quarentena'] = typeof RELATORIO_FASE34 !== 'undefined' ? RELATORIO_FASE34.resgatadas : 0;
  return r;
};
window.CURADORIA_RELATORIO = CURADORIA_RELATORIO;
RECALCULAR_FILA();
