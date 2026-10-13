/* MeMotiva — curadoria/32-fases55-56-limpeza-descricoes.js
   Fases 55–56 — limpeza do catálogo e descrições editoriais.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ===== FASE 55 — limpeza final do catálogo e completude das páginas ===== */
(function () {
  // ---- 1. campos ausentes em páginas antigas ----
  var COMPL = {
    'Clarice Lispector||A Hora da Estrela': {
      curiosidade: 'O livro traz treze títulos alternativos impressos na abertura, todos escolhidos pela autora, entre eles “A Culpa É Minha” e “Ela Que Se Arranje”. A dedicatória é assinada por Clarice, mas o livro é atribuído ao narrador fictício Rodrigo S. M.'
    },
    'Fernando Pessoa||Mensagem': {
      curiosidade: 'O concurso ao qual o livro foi inscrito dividia os candidatos por número de páginas; “Mensagem” ficou em segundo lugar em sua categoria, atrás de uma obra hoje esquecida.'
    },
    'Anne Frank||O Diário de Anne Frank': {
      curiosidade: 'Otto Frank publicou uma versão editada, sem as passagens sobre sexualidade e sobre os conflitos com a mãe. A edição integral só apareceu em 1995, cinquenta anos após a morte da autora.'
    },
    'Benjamin Graham||O Investidor Inteligente': {
      momento: 'Graham lecionava em Columbia quando escreveu o livro, e teve entre seus alunos Warren Buffett, que obteve dele a única nota máxima que o professor concedeu em toda a carreira.',
      curiosidade: 'A figura do Sr. Mercado aparece em um único capítulo e tornou-se a metáfora mais citada da história do investimento: um sócio que oferece preços diferentes todos os dias e a quem não se deve obedecer.'
    },
    'Nelson Mandela||Longo Caminho para a Liberdade': {
      momento: 'O manuscrito foi escrito à noite em Robben Island, transcrito em letra miúda por companheiros de cela e enterrado em latas no jardim da prisão. Descoberto pelos guardas, custou a Mandela e a outros presos a perda do direito de estudar por quatro anos.',
      curiosidade: 'A autobiografia foi concluída décadas depois, já em liberdade, a partir da cópia que Mac Maharaj levara escondida ao deixar a prisão.'
    }
  };
  // ---- 2. títulos de obra malformados (prefixo com o nome do autor) ----
  var RETITULO = {
    'Hillel||Hillel · Tradição rabínica — Pirkei Avot e Talmude': 'Tradição rabínica — Pirkei Avot e Talmude',
    'Ben Zoma||Ben Zoma · Tradição rabínica — Pirkei Avot e Talmude': 'Tradição rabínica — Pirkei Avot e Talmude',
    'Rabi Tarfon||Rabi Tarfon · Tradição rabínica — Pirkei Avot e Talmude': 'Tradição rabínica — Pirkei Avot e Talmude'
  };
  // ---- 3. chave de autor duplicada que canonAuthor já unifica ----
  var AUTOR_DUPLICADO = 'Ben Zoma (Pirkei Avot)';

  function aplicar() {
    var nComp = 0,
      nRet = 0,
      nDup = 0;

    for (var k in COMPL) {
      if (!OBRA_PAGINA[k]) continue;
      for (var f in COMPL[k]) {
        if (!OBRA_PAGINA[k][f] || String(OBRA_PAGINA[k][f]).trim().length < 20) {
          OBRA_PAGINA[k][f] = COMPL[k][f];
          nComp++;
        }
      }
    }

    for (var kk in RETITULO) {
      var i = kk.indexOf('||'),
        a = kk.slice(0, i),
        t = kk.slice(i + 2),
        novo = RETITULO[kk];
      var lista = OBRAS[a];
      if (!lista) continue;
      var obra = null;
      for (var j = 0; j < lista.length; j++) {
        if (lista[j].t === t) obra = lista[j];
      }
      if (!obra) continue;
      if (
        lista.some(function (o) {
          return o !== obra && o.t === novo;
        })
      )
        continue; // evita colisão
      obra.t = novo;
      var nk = a + '||' + novo;
      if (OBRA_PAGINA[kk] && !OBRA_PAGINA[nk]) {
        OBRA_PAGINA[nk] = OBRA_PAGINA[kk];
        delete OBRA_PAGINA[kk];
      }
      nRet++;
    }

    if (OBRAS[AUTOR_DUPLICADO]) {
      var canon = typeof canonAuthor === 'function' ? canonAuthor(AUTOR_DUPLICADO) : AUTOR_DUPLICADO;
      if (canon !== AUTOR_DUPLICADO && OBRAS[canon]) {
        // remove páginas ligadas à chave duplicada
        Object.keys(OBRA_PAGINA).forEach(function (k) {
          if (k.indexOf(AUTOR_DUPLICADO + '||') === 0) {
            delete OBRA_PAGINA[k];
          }
        });
        // remove obras-fantasma da chave duplicada (nenhuma frase as referencia por oid)
        var oids = OBRAS[AUTOR_DUPLICADO].map(function (o) {
          return o.oid;
        });
        delete OBRAS[AUTOR_DUPLICADO];
        if (typeof OBRA_POR_ID === 'object') {
          oids.forEach(function (o) {
            if (o) delete OBRA_POR_ID[o];
          });
        }
        nDup = oids.length;
      }
    }

    // ---- 4. reconstrói OBRA_POR_ID com os títulos atualizados ----
    if (typeof OBRA_POR_ID === 'object') {
      Object.keys(OBRAS).forEach(function (a) {
        OBRAS[a].forEach(function (o) {
          if (o.oid) OBRA_POR_ID[o.oid] = o;
        });
      });
    }

    console.log('MeMotiva · Fase 55: ' + nComp + ' campos completados, ' + nRet + ' títulos normalizados, ' + nDup + ' registros duplicados removidos.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 56 — descrições editoriais das obras com placeholder ===== */
(function () {
  var D = {
    'Sócrates||Platão': 'Os diálogos de Platão são a principal fonte sobre Sócrates, que nada escreveu. Neles o mestre aparece interrogando atenienses sobre coragem, justiça, piedade e virtude, e levando cada interlocutor a descobrir que não sabia o que julgava saber. Não há acordo entre estudiosos sobre onde termina o Sócrates histórico e começa o personagem filosófico de Platão.',
    'Sêneca||Sobre os Benefícios': 'Tratado em sete livros sobre a arte de dar e de receber. Examina o que torna um favor genuíno, por que a gratidão é dever e não sentimento, e como a expectativa de retorno corrompe a generosidade. É o texto antigo mais extenso sobre reciprocidade e permanece referência em ética das relações e em antropologia da dádiva.',
    'Sêneca||Sobre a Providência': 'Diálogo que responde à pergunta de por que homens bons sofrem se o mundo é governado por uma ordem racional. Sêneca sustenta que a adversidade é treino, não castigo, e que a fortuna poupa quem despreza. É um dos textos estoicos mais diretos sobre a relação entre sofrimento e caráter.',
    'Sêneca||Sobre a Vida Feliz': 'Trata do que é viver bem e responde à acusação de que um filósofo rico não pode pregar a indiferença ao dinheiro. Sêneca distingue possuir riqueza de ser possuído por ela e argumenta que a felicidade está na conformidade com a razão e a natureza. Escrito ao irmão Galião, é sua defesa pessoal mais franca.',
    'Cícero||Sobre o Orador': 'Diálogo em três livros sobre a formação do orador ideal, que para Cícero exige domínio de filosofia, direito, história e psicologia, e não apenas técnica. Recusa a separação entre eloquência e sabedoria. Foi redescoberto integralmente em 1421 e tornou-se texto central do humanismo renascentista.',
    'Cícero||Tusculanas': 'Cinco diálogos sobre o medo da morte, a dor, a aflição, as paixões e a suficiência da virtude para a vida feliz. Escritos após a morte da filha Túlia e o afastamento da política, reúnem posições estoicas e acadêmicas em latim acessível. Foram uma das principais vias pelas quais a filosofia grega chegou ao Ocidente.',
    'Cícero||Sobre as Leis': 'Diálogo que fundamenta o direito não na vontade do legislador, mas em uma lei natural comum a todos os homens e anterior a qualquer Estado. É um dos textos fundadores do jusnaturalismo e influenciou diretamente a teoria dos direitos naturais moderna.',
    'Cícero||Pro Plancio': 'Discurso de defesa de Cneu Plâncio, acusado de corrupção eleitoral. Além da argumentação jurídica, Cícero discute o que a gratidão deve a quem prestou socorro em momento difícil — Plâncio o abrigara durante seu exílio. É fonte importante sobre as eleições romanas e sobre a prática forense da república tardia.',
    'Zenão de Cítio||Fragmentos recolhidos por Diógenes Laércio': 'O livro de Diógenes Laércio sobre as vidas dos filósofos é a principal fonte sobre Zenão, cuja obra se perdeu inteiramente. Preserva o esboço de sua divisão da filosofia em lógica, física e ética, suas definições de virtude e de vida conforme a natureza, e episódios biográficos — entre eles o naufrágio que o levou à filosofia.',
    'Jean-Jacques Rousseau||Contrato Social / Emílio / Confissões':
      "Conjunto das três obras centrais de Rousseau, todas publicadas entre 1762 e 1782. O 'Contrato Social' funda a soberania na vontade geral; o 'Emílio' propõe uma educação que preserve a bondade natural da criança; as 'Confissões' inauguram a autobiografia moderna como exame de si sem disfarce. Os dois primeiros foram condenados e queimados em Paris e em Genebra.",
    'Thomas Hobbes||Leviatã / De Cive': "As duas exposições da teoria política de Hobbes. Sem um poder comum que os contenha, os homens vivem em guerra de todos contra todos; a saída é o pacto que institui o soberano. 'De Cive' saiu em latim em 1642, para o público erudito europeu; o 'Leviatã', em inglês em 1651, para leitores comuns. São a fundação do contratualismo moderno.",
    'William Shakespeare||Sonho de uma Noite de Verão': 'Comédia em que quatro jovens atenienses, um grupo de artesãos ensaiando uma peça e os reis das fadas se cruzam em uma floresta onde uma poção amorosa embaralha todos os afetos. É a comédia mais encenada de Shakespeare e a que mais explora a fronteira entre sonho, teatro e ilusão.',
    'William Shakespeare||Noite de Reis': 'Comédia sobre Viola, náufraga que se disfarça de rapaz e se vê amada por uma condessa enquanto ama o duque a quem serve. Combina o riso do engano com uma melancolia constante sobre desejo, identidade e tempo perdido, e é apontada como a mais perfeita das comédias do autor.',
    'William Shakespeare||O Mercador de Veneza': 'Antônio toma dinheiro emprestado do agiota Shylock e assina um contrato que prevê uma libra de sua carne como garantia. A peça é lida simultaneamente como comédia, como drama judicial sobre o rigor da lei contra a misericórdia e como um dos textos mais desconfortáveis do cânone, pelo antissemitismo que encena e ao mesmo tempo expõe.',
    'William Shakespeare||Henrique IV': 'Peça histórica em duas partes sobre a rebelião contra o rei e sobre a formação do príncipe Hal, dividido entre a corte e as tavernas de Falstaff. A figura de Falstaff — covarde, mentiroso e irresistível — é considerada uma das maiores criações cômicas da literatura, e o abandono dele pelo príncipe, uma das cenas mais duras do autor.',
    'William Shakespeare||Como Gostais': 'Comédia ambientada na floresta de Arden, para onde fogem os exilados da corte e onde Rosalinda, disfarçada de rapaz, ensina ao homem que ama como se deve amar. É a peça do monólogo sobre o mundo como palco e as sete idades do homem, um dos trechos mais citados de toda a obra de Shakespeare.',
    'William Shakespeare||Júlio César': 'Dramatiza a conspiração contra César, o assassinato no senado e a guerra civil que se segue. O centro da peça não é o ditador, mas Brutus, dividido entre a amizade e o que julga ser o bem da república. Os discursos fúnebres de Brutus e de Marco Antônio são o estudo mais citado da literatura sobre manipulação de multidões.',
    'Fernando Pessoa||Tabacaria': 'Poema longo assinado por Álvaro de Campos, em que o narrador, à janela, contrapõe a imensidão do que sonhou ser à insignificância do que é, enquanto observa a tabacaria do outro lado da rua. É um dos poemas mais lidos da língua portuguesa e a formulação mais direta do desencanto moderno em Pessoa.',
    'Maya Angelou||Obra e entrevistas de Maya Angelou':
      'Conjunto formado pelos sete volumes autobiográficos, pela poesia e pelas entrevistas e falas públicas da autora, produzidos entre 1969 e 2014. Nele se encontram a narrativa da infância no Arkansas segregado, a militância nos direitos civis ao lado de Martin Luther King Jr. e Malcolm X, e as formulações sobre dignidade e coragem que a tornaram uma das vozes mais citadas dos Estados Unidos.',
    'Albert Einstein||Escritos':
      'Reúne os textos do físico fora da produção técnica: ensaios, cartas abertas, prefácios e discursos sobre ciência, religião, pacifismo, educação e a responsabilidade social do cientista, escritos ao longo de cinco décadas. É a referência para verificar o que Einstein de fato afirmou, já que boa parte das frases que circulam com seu nome não consta de nenhum escrito seu.',
    'Carl Sagan||Cosmos / O Mundo Assombrado pelos Demônios':
      "As duas obras centrais de Sagan na divulgação científica. 'Cosmos', de 1980, percorre a história do universo e do conhecimento humano sobre ele; 'O Mundo Assombrado pelos Demônios', de 1995, defende o método científico contra a pseudociência e oferece um kit de detecção de falácias para uso do leitor comum. Juntas, formaram gerações de cientistas e professores.",
    'Peter Drucker||The Practice of Management': 'Primeiro livro a tratar a administração como disciplina com princípios próprios, e não como conjunto de práticas herdadas. Introduz a administração por objetivos, define que o propósito de uma empresa é criar um cliente e estabelece as perguntas fundamentais sobre qual é o negócio de uma organização. É a obra que fundou a gestão moderna.',
    'Peter Drucker||The Effective Executive': 'Trata da eficácia como hábito que se aprende, não como talento. Propõe cinco práticas: administrar o tempo, concentrar-se na contribuição, apoiar-se nas forças e não nas fraquezas, priorizar poucas coisas e decidir com método. É o livro mais prático de Drucker e o mais adotado em programas de formação executiva.',
    'Peter Drucker||Inovação e Espírito Empreendedor': 'Sustenta que a inovação é atividade sistemática e ensinável, e não lampejo de inspiração, e identifica sete fontes de oportunidade — do inesperado à mudança demográfica e à nova percepção. Foi o primeiro livro a tratar o empreendedorismo como disciplina administrável dentro de empresas estabelecidas.',
    'W. Edwards Deming||Out of the Crisis e seminários':
      'Reúne a exposição madura do método de Deming, incluindo os catorze pontos para a transformação da gestão e as sete doenças mortais que a corroem. Desloca a responsabilidade pela qualidade do operário para a direção da empresa e ataca a avaliação individual de desempenho como fonte de medo e de distorção. É o texto que trouxe de volta aos Estados Unidos o que ele ensinara ao Japão três décadas antes.',
    'Jack Welch||Winning / Jack: Straight from the Gut':
      'Conjunto formado pela autobiografia do executivo, sobre seus vinte anos à frente da General Electric, e pelo manual em que sistematiza seu método de gestão, avaliação e estratégia. Descrevem a diferenciação de desempenho, a exigência de liderança de mercado em cada negócio e a franqueza como princípio organizacional. Foram dois dos livros de negócios mais vendidos de sua década.',
    'Jeff Bezos||Cartas aos acionistas da Amazon e entrevistas':
      'Série de cartas anuais publicadas desde 1997, às quais o autor sempre anexa a primeira, junto com suas intervenções públicas. Expõem os princípios da empresa: obsessão pelo cliente, horizonte de longo prazo, tolerância a experimentos que falham, distinção entre decisões reversíveis e irreversíveis e a cultura do primeiro dia. São leitura corrente em estratégia empresarial.',
    'Rosa Luxemburgo||Obra e cartas de Rosa Luxemburgo':
      'Conjunto formado por seus escritos teóricos — sobre acumulação capitalista, greve de massas e a relação entre reforma e revolução — e pela correspondência escrita em boa parte na prisão. É referência central do marxismo democrático, sobretudo pela tese de que não há revolução sem liberdade de crítica, formulada em texto contra os rumos da Revolução Russa.',
    'Mao Tsé-Tung||Obras Escolhidas de Mao Tsé-Tung':
      "Reúne os textos políticos e militares do líder chinês, entre eles 'Sobre a Prática', 'Sobre a Contradição' e 'Sobre a Guerra Prolongada'. Formulam a estratégia de guerra popular prolongada, a linha de massas e a análise das contradições dentro do próprio campo revolucionário. Foram estudadas por movimentos de guerrilha em todos os continentes e também pelas forças que os combateram.",
    'Napoleão Bonaparte||Correspondência e ditos registrados por contemporâneos':
      'Conjunto formado pelas dezenas de milhares de cartas e ordens do imperador e pelos ditos registrados por auxiliares, secretários e memorialistas, sobretudo durante o exílio em Santa Helena. É a principal fonte sobre seu pensamento militar e político, e também a origem de inúmeras frases atribuídas a ele sem documento que as confirme.',
    'Colin Powell||My American Journey e palestras':
      'Conjunto formado pela autobiografia do general, que narra a infância no Bronx como filho de imigrantes jamaicanos, as duas passagens pelo Vietnã e a chegada ao topo das forças armadas, e pelas palestras em que expôs seus princípios de liderança. É a origem das treze regras que ele mantinha sob o vidro da mesa e que se tornaram referência militar e corporativa.',
    'Buda||Cânone páli — doutrina das três características': 'Conjunto de textos do cânone budista em língua páli que expõem as três características de toda existência condicionada: a impermanência, a insatisfatoriedade e a ausência de um eu substancial. É a base doutrinária do budismo theravada e o fundamento da prática de atenção plena difundida no Ocidente.',
    'Jesus Cristo||Mateus 5': 'Capítulo que abre o Sermão da Montanha, com as bem-aventuranças, as imagens do sal da terra e da luz do mundo e a série de reformulações da lei que começam com a fórmula sobre o que foi dito aos antigos e o que agora se diz. É um dos textos mais lidos e mais citados de toda a literatura ocidental.',
    'Jesus Cristo||Mateus 7:1–7 · Almeida Revista e Atualizada': 'Passagem do Sermão da Montanha sobre não julgar para não ser julgado, sobre a trave no próprio olho diante do cisco alheio e sobre pedir, buscar e bater. Reúne algumas das formulações mais citadas do Evangelho sobre reciprocidade moral e sobre a distância entre o juízo que se faz dos outros e o que se faz de si.',
    'Jesus Cristo||João 8:32 · Almeida Revista e Atualizada': 'Passagem em que Jesus afirma que conhecer a verdade é o que torna livre, dirigindo-se aos que haviam crido nele. O versículo está gravado em universidades, tribunais e serviços de inteligência em todo o mundo, quase sempre desligado do contexto original, que trata de permanecer na palavra e não de conhecimento em geral.',
    'Jesus Cristo||Mateus 6:19–21 · Almeida Revista e Atualizada': 'Passagem do Sermão da Montanha sobre não ajuntar tesouros na terra, onde a traça e a ferrugem corroem, e sobre o coração estar onde está o tesouro. É uma das formulações mais diretas do Evangelho sobre a relação entre bens materiais e orientação da vida.',
    'Jesus Cristo||João 13–15 · Almeida Revista e Atualizada': 'Capítulos que narram a última ceia, o lava-pés e o longo discurso de despedida, com o mandamento do amor mútuo, a imagem da videira e dos ramos e a afirmação sobre não haver amor maior que dar a vida pelos amigos. São o núcleo do ensino joanino sobre comunidade e serviço.',
    'Jesus Cristo||Marcos 9:35 · Almeida Revista e Atualizada': 'Passagem em que Jesus responde à discussão dos discípulos sobre qual deles seria o maior, afirmando que quem quiser ser o primeiro deve ser o último e servo de todos. É o texto fundador da noção cristã de autoridade como serviço, retomado em toda a literatura sobre liderança servidora.',
    'Madre Teresa de Calcutá||A Simple Path e discursos registrados': 'Reúne falas, orações e orientações da religiosa sobre silêncio, oração, fé, serviço e paz, junto com depoimentos de irmãs, voluntários e pessoas atendidas pelas Missionárias da Caridade. É a principal compilação de suas palavras e a fonte de boa parte das frases que circulam com seu nome.',
    'Apóstolo Paulo||Cartas paulinas · Almeida Revista e Atualizada':
      'Conjunto das cartas atribuídas a Paulo no Novo Testamento, escritas a comunidades cristãs entre os anos 50 e 60. São os documentos cristãos mais antigos que chegaram até nós, anteriores aos evangelhos, e nelas se formulam a justificação pela fé, a igualdade entre judeus e gentios e o elogio do amor que abre a Primeira Carta aos Coríntios.',
    'Hillel||Tradição rabínica — Pirkei Avot e Talmude':
      'Conjunto dos ensinamentos atribuídos a Hillel, sábio do século I a.C., preservados no Pirkei Avot e no Talmude. Reúne suas máximas sobre responsabilidade por si e pelos outros, sobre a urgência de agir e sobre amar a paz, além da formulação da regra de ouro na forma negativa. Sua escola de interpretação prevaleceu sobre a de Shamai e moldou a prática judaica posterior.',
    'Ben Zoma||Tradição rabínica — Pirkei Avot e Talmude': 'Conjunto das máximas atribuídas a Simeon ben Zoma, sábio do século II, preservadas no Pirkei Avot e no Talmude. Define sabedoria como aprender com qualquer pessoa, força como dominar o próprio impulso, riqueza como alegrar-se com o que se tem e honra como honrar os outros. São das sentenças mais reproduzidas da ética judaica.',
    'Rabi Tarfon||Tradição rabínica — Pirkei Avot e Talmude':
      'Conjunto das máximas atribuídas a Rabi Tarfon, sábio das gerações posteriores à destruição do Segundo Templo, preservadas no Pirkei Avot e no Talmude. Trata da brevidade do dia diante do tamanho da tarefa e formula a sentença sobre não caber a ninguém concluir a obra nem ser livre para dela se afastar — hoje citada muito além do contexto religioso.',
    'Henry David Thoreau||Walden / Desobediência Civil':
      "As duas obras centrais de Thoreau. 'Walden' relata os dois anos vividos em uma cabana à beira de um lago, com reflexões sobre simplicidade, trabalho e o que é de fato necessário; 'Desobediência Civil' defende o dever de não colaborar com um governo que pratica injustiça. Juntas, fundaram o pensamento ambiental americano e influenciaram diretamente Gandhi e Martin Luther King Jr.",
    'Benjamin Franklin||Poor Richard’s Almanack e Autobiografia':
      'Conjunto formado pelo almanaque anual que Franklin publicou a partir de 1732, com os provérbios sobre trabalho, economia e prudência que entraram na cultura americana, e pela autobiografia escrita entre 1771 e 1790, com o método das treze virtudes acompanhadas em tabela. Juntos, são a matriz de toda a literatura posterior de autodesenvolvimento.',
    'Ruth Bader Ginsburg||Votos': 'Conjunto das opiniões majoritárias e dos votos divergentes escritos pela juíza em quase três décadas na Suprema Corte americana, sobre igualdade de gênero, direito ao voto, saúde e discriminação. Seus votos vencidos, lidos em voz alta no plenário, tornaram-se sua forma mais reconhecida de atuação e um deles resultou diretamente na Lei Lilly Ledbetter, de 2009.',
    'John C. Maxwell||As 21 Irrefutáveis Leis da Liderança': 'Enuncia vinte e uma leis sobre influência, processo, respeito, intuição e legado, cada uma ilustrada com casos históricos e empresariais. Sustenta que a capacidade de liderar é o teto que limita a eficácia de tudo o mais que uma pessoa faz. É o livro mais vendido do autor e um dos títulos de liderança mais lidos do mundo.',
    'Gustave Le Bon||Psicologia das Multidões':
      'Sustenta que o indivíduo inserido numa multidão perde senso crítico e responsabilidade, tornando-se suscetível à sugestão, à imagem e à afirmação repetida. Publicado em 1895, fundou o estudo do comportamento coletivo e foi lido tanto por sociólogos quanto por líderes autoritários do século XX interessados em suas conclusões práticas sobre manipulação.',
    'Solomon Asch||Estudos sobre conformidade':
      'Série de experimentos dos anos 1950 em que voluntários julgavam o comprimento de linhas diante de um grupo instruído a dar respostas erradas. Cerca de um terço das respostas acompanhou o erro do grupo, mesmo sendo a alternativa correta evidente. Demonstraram a força da pressão social sobre o juízo individual e são base dos estudos posteriores de Milgram e da psicologia social contemporânea.',
    'Warren Bennis||On Becoming a Leader': 'Sustenta que liderar começa por conhecer-se, e que líderes se formam ao converter experiência própria — inclusive o fracasso — em capacidade de conduzir outros. Reúne entrevistas com dezenas de líderes de áreas diversas e estabelece a distinção, hoje corrente, entre gerenciar e liderar. É um dos textos fundadores dos estudos modernos de liderança.',
    'Bernard Montgomery||Memórias do Marechal Montgomery':
      'Memórias do comandante britânico que venceu El Alamein e conduziu as forças terrestres aliadas no desembarque da Normandia. Relata as campanhas do norte da África e da Europa e as divergências com os comandantes americanos, sobretudo sobre a estratégia de avanço na Alemanha. É fonte de primeira mão sobre o comando aliado, conhecida pela franqueza com que o autor defende suas próprias decisões.'
  };
  function aplicar() {
    var n = 0,
      faltou = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        faltou.push(k);
        continue;
      }
      var achou = false;
      for (var j = 0; j < l.length; j++) {
        if (l[j].t === t) {
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          achou = true;
          n++;
        }
      }
      if (!achou) faltou.push(k);
    }
    if (faltou.length) console.warn('Fase 56 · não localizadas:', faltou.join(' | '));
    console.log('MeMotiva · Fase 56: ' + n + ' descrições editoriais escritas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();
