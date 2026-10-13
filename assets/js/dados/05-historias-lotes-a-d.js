/* MeMotiva — dados/05-historias-lotes-a-d.js
   Histórias dos lotes A–D (Fases 3 e 4).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 3 — NOVAS BIOGRAFIAS (lote A)
   Toda pessoa aqui tem foto definida em PHOTOS2 (arquivo 07).
   ================================================================ */
const NEW_STORIES_A = [
  {
    id: 'epicuro',
    author: 'Epicuro',
    cat: 'felicidade',
    profiles: ['filosofos'],
    origin: 'antiguidade',
    role: 'Filósofo grego (341–270 a.C.)',
    why: 'Ensinou que o prazer é a ausência de dor — e foi caluniado por vinte séculos como devasso.',
    title: 'O jardim onde todos entravam',
    excerpt: 'Fundou uma escola que aceitava mulheres e escravizados numa Atenas que fazia questão de separá-los.',
    photo: 'Epicurus Louvre.jpg',
    text: 'Epicuro nasceu na ilha de Samos, filho de colonos atenienses, e cresceu numa família modesta — o pai era professor de escola primária, profissão pouco prestigiada. Estudou com discípulos de Demócrito e Platão, mas rompeu com ambas as tradições e formulou algo próprio.\n\nPor volta de 306 a.C. comprou uma casa com jardim nos arredores de Atenas e ali instalou sua escola, conhecida simplesmente como O Jardim. Ao contrário da Academia e do Liceu, aceitava mulheres e pessoas escravizadas como membros plenos — o que gerou escândalo e alimentou boatos maldosos sobre orgias que perseguiriam sua reputação por dois mil anos.\n\nA calúnia é o oposto do que ele ensinava. Para Epicuro, o prazer não era acúmulo, mas ausência de dor no corpo e de perturbação na alma. Vivia de pão, água e ocasionalmente um pouco de queijo, e escreveu que quem não se contenta com pouco não se contenta com nada. Considerava a amizade o maior bem que a sabedoria oferece para a felicidade de uma vida inteira, e argumentava que o medo da morte é irracional: onde estamos, a morte não está; quando a morte chega, não estamos mais.\n\nEscreveu cerca de trezentas obras, das quais sobreviveram três cartas e algumas coletâneas de máximas. Morreu aos setenta anos, após dias de dores agudas causadas por cálculos renais. Na carta que escreveu no último dia, dizia estar vivendo um dia feliz, porque a lembrança das conversas com os amigos compensava o sofrimento do corpo.'
  },

  {
    id: 'kant',
    author: 'Immanuel Kant',
    cat: 'filosofos',
    profiles: ['filosofos'],
    origin: 'europeus',
    role: 'Filósofo alemão (1724–1804)',
    why: 'Nunca saiu de sua cidade natal e mesmo assim reorganizou toda a filosofia moderna.',
    title: 'O relógio de Königsberg',
    excerpt: 'Vivia com uma regularidade tão exata que os vizinhos ajustavam os relógios ao vê-lo passar.',
    photo: 'Kant gemaelde 3.jpg',
    text: 'Immanuel Kant nasceu em Königsberg, na Prússia, quarto de nove filhos de um seleiro. A família era pietista, um ramo protestante que valorizava a devoção interior e a disciplina moral — traços que atravessariam toda a sua obra. Estudou na universidade da cidade e, com a morte do pai, teve de interromper os estudos e trabalhar como preceptor de famílias rurais por quase uma década.\n\nTornou-se professor universitário só aos 46 anos. Sua rotina virou lenda: acordava às cinco, dava aulas, escrevia, almoçava com convidados e saía para caminhar sempre no mesmo horário, pela mesma rua. Nunca se casou, nunca viajou para longe, nunca viu o mar.\n\nEm 1781, aos 57 anos, publicou a Crítica da Razão Pura, resultado de mais de dez anos de silêncio editorial. A tese central era uma inversão: em vez de a mente se moldar aos objetos, são os objetos que se moldam às estruturas da mente. Kant chamou isso de sua revolução copernicana. Vieram depois a Crítica da Razão Prática e a Crítica do Juízo.\n\nSua ética formulou o imperativo categórico — agir apenas segundo uma máxima que se possa querer universal — e a exigência de tratar cada pessoa como fim em si mesma, nunca apenas como meio. Escreveu também um ensaio propondo uma federação de repúblicas para garantir a paz permanente, ideia que ecoaria mais tarde na criação da ONU. Morreu aos 79 anos; suas últimas palavras registradas foram simplesmente que estava bem assim.'
  },

  {
    id: 'schopenhauer',
    author: 'Arthur Schopenhauer',
    cat: 'filosofos',
    profiles: ['filosofos'],
    origin: 'europeus',
    role: 'Filósofo alemão (1788–1860)',
    why: 'Foi ignorado por trinta anos e virou o filósofo mais lido da Europa aos setenta.',
    title: 'O pessimista paciente',
    excerpt: 'Marcou suas aulas no mesmo horário de Hegel, ficou sem alunos e passou décadas esquecido — até não estar mais.',
    photo: 'Arthur Schopenhauer by J Schäfer, 1859b.jpg',
    text: 'Arthur Schopenhauer nasceu em Danzig, filho de um comerciante próspero e de Johanna Schopenhauer, que se tornaria uma escritora de sucesso. O pai morreu quando ele tinha dezessete anos, provavelmente por suicídio, deixando-lhe uma herança que garantiria independência financeira pelo resto da vida — algo raro entre filósofos e decisivo para sua trajetória.\n\nA relação com a mãe foi hostil e terminou em ruptura definitiva; os dois nunca mais se viram nos últimos vinte e quatro anos de vida dela. Doutorou-se em filosofia e, em 1818, aos trinta anos, publicou O Mundo como Vontade e Representação, obra em que reuniu tudo o que pensava. O livro vendeu quase nada; a editora acabou vendendo a maior parte da tiragem como papel usado.\n\nEm 1820 começou a lecionar em Berlim e, num gesto de desafio, marcou suas aulas no mesmo horário das de Hegel, então no auge da fama. Compareceram pouquíssimos alunos. Abandonou a carreira acadêmica e passou décadas em relativo anonimato em Frankfurt, vivendo de rendas, com seus poodles sucessivos, todos chamados Atma.\n\nO reconhecimento veio tarde, com Parerga e Paralipomena, de 1851 — uma coletânea de ensaios mais acessíveis que finalmente encontrou leitores. Nos últimos anos recebia visitas de admiradores de toda a Europa. Sua tese de que a vontade cega, e não a razão, move os seres humanos influenciou Nietzsche, Freud, Wagner, Tolstói e Machado de Assis.'
  },

  {
    id: 'kierkegaard',
    author: 'Søren Kierkegaard',
    cat: 'autorreconhecimento',
    profiles: ['filosofos', 'religiosos'],
    origin: 'europeus',
    role: 'Filósofo dinamarquês (1813–1855)',
    why: 'Rompeu o noivado com a mulher que amava para escrever — e escreveu a vida inteira sobre isso.',
    title: 'A angústia como vocação',
    excerpt: 'Publicou sob nomes falsos que discutiam entre si e fundou, sem querer, o existencialismo.',
    photo: 'Kierkegaard.jpg',
    text: 'Søren Kierkegaard nasceu em Copenhague, o mais novo de sete filhos de um comerciante de lã que enriquecera vindo da pobreza rural. O pai era um homem melancólico e atormentado pela convicção de que a família estava sob maldição divina; cinco dos sete filhos morreram antes dele. Essa atmosfera religiosa e sombria marcou o filho permanentemente.\n\nAos 27 anos ficou noivo de Regine Olsen, dez anos mais nova. Um ano depois rompeu o noivado sem explicação clara, devolvendo o anel com uma carta. A decisão o destroçou — e se tornou o material subterrâneo de quase toda a sua obra. Regine casou-se com outro; Kierkegaard nunca deixou de escrever sobre ela e lhe legou seus bens em testamento.\n\nEntre 1843 e 1846 produziu numa velocidade impressionante: Ou-Ou, Temor e Tremor, O Conceito de Angústia, Migalhas Filosóficas. Publicava sob pseudônimos elaborados — Johannes de Silentio, Victor Eremita, Johannes Climacus — que defendiam posições diferentes e chegavam a se criticar mutuamente, obrigando o leitor a decidir por conta própria.\n\nSua tese central era que a verdade que importa não é a objetiva, mas aquela pela qual alguém está disposto a viver e morrer; que a existência é escolha, e que escolher gera angústia — a vertigem da liberdade. Nos últimos anos travou uma guerra pública contra a Igreja dinamarquesa, acusando-a de ter transformado o cristianismo em conveniência social. Morreu aos 42 anos, com as economias exatamente esgotadas.'
  },

  {
    id: 'camus',
    author: 'Albert Camus',
    cat: 'dificeis',
    profiles: ['filosofos', 'literatura'],
    origin: 'africanos',
    role: 'Escritor franco-argelino (1913–1960)',
    why: 'Filho de uma faxineira analfabeta, ganhou o Nobel aos 44 anos e morreu três anos depois.',
    title: 'O absurdo e a revolta',
    excerpt: 'Cresceu sem água corrente na Argélia colonial e virou uma das consciências morais do século XX.',
    photo: 'Albert Camus, gagnant de prix Nobel, portrait en buste, posé au bureau, faisant face à gauche, cigarette de tabagisme.jpg',
    text: 'Albert Camus nasceu em Mondovi, na Argélia francesa. O pai morreu na Batalha do Marne quando ele tinha menos de um ano. A mãe, de ascendência espanhola, era parcialmente surda e quase muda, analfabeta, e trabalhava como faxineira. Cresceram num apartamento sem eletricidade nem água corrente, no bairro pobre de Belcourt, em Argel.\n\nUm professor primário, Louis Germain, percebeu seu talento e conseguiu uma bolsa que o levou ao liceu — Camus lhe dedicaria o discurso do Nobel décadas depois. Aos dezessete anos teve o primeiro surto de tuberculose, que o acompanharia a vida toda e o impediu de seguir carreira acadêmica ou servir no exército.\n\nTrabalhou como jornalista, denunciando as condições de vida da população árabe e cabila na Argélia. Durante a ocupação nazista dirigiu o jornal clandestino Combat, da Resistência francesa. Publicou O Estrangeiro e O Mito de Sísifo em 1942, A Peste em 1947, O Homem Revoltado em 1951.\n\nSua ideia central: o mundo não oferece o sentido que exigimos dele, e essa fenda é o absurdo. A resposta não é o suicídio nem a fé, mas a revolta lúcida — continuar, sem ilusões e sem desistir. Rompeu com Sartre ao condenar os campos soviéticos, o que lhe custou o isolamento da esquerda intelectual francesa. Sobre a guerra da Argélia, recusou-se a escolher um lado, posição criticada até hoje. Recebeu o Nobel em 1957. Morreu em 1960 num acidente de carro, com uma passagem de trem não utilizada no bolso.'
  },

  {
    id: 'arendt',
    author: 'Hannah Arendt',
    cat: 'politica',
    profiles: ['filosofos', 'politicos'],
    origin: 'europeus',
    role: 'Pensadora política alemã (1906–1975)',
    why: 'Fugiu de dois campos, chegou aos EUA apátrida e escreveu a análise definitiva do totalitarismo.',
    title: 'Pensar sem corrimão',
    excerpt: 'Cunhou a expressão "banalidade do mal" e foi atacada por décadas por causa dela.',
    photo: 'Hannah Arendt 1975 (cropped).jpg',
    text: 'Hannah Arendt nasceu em Hanôver, numa família judaica secular de classe média. O pai morreu de sífilis quando ela tinha sete anos. Estudante brilhante, foi para Marburgo aos dezoito anos estudar com Martin Heidegger, com quem teve um caso — relação que se tornaria constrangedora quando ele aderiu ao nazismo, e que ela nunca conseguiu resolver inteiramente.\n\nDoutorou-se sob orientação de Karl Jaspers. Em 1933 foi presa pela Gestapo por pesquisar propaganda antissemita para organizações sionistas. Solta após oito dias, fugiu para Paris. Em 1940 foi internada no campo de Gurs, no sul da França, e escapou semanas depois. Chegou a Nova York em 1941, sem cidadania, sem dinheiro e sem falar inglês.\n\nTrabalhou como pesquisadora e editora até publicar, em 1951, As Origens do Totalitarismo, obra que analisou nazismo e stalinismo como fenômenos de um mesmo tipo novo. Em 1958 veio A Condição Humana, com sua distinção entre trabalho, obra e ação.\n\nEm 1961 cobriu para a New Yorker o julgamento de Adolf Eichmann em Jerusalém. Sua conclusão — de que o funcionário responsável pela logística do extermínio não era um monstro, mas um burocrata medíocre incapaz de pensar do ponto de vista de outra pessoa — gerou uma controvérsia feroz. Amigos de décadas romperam com ela. A expressão "banalidade do mal" tornou-se, no entanto, uma das mais citadas do século. Morreu em Nova York, com a última obra inacabada na máquina de escrever.'
  },

  {
    id: 'russell',
    author: 'Bertrand Russell',
    cat: 'filosofos',
    profiles: ['filosofos', 'cientistas', 'ativistas'],
    origin: 'europeus',
    role: 'Filósofo e matemático britânico (1872–1970)',
    why: 'Foi preso duas vezes por pacifismo, com meio século de intervalo, e ganhou o Nobel de Literatura.',
    title: 'O aristocrata na cadeia',
    excerpt: 'Neto de um primeiro-ministro, reescreveu a lógica matemática e foi preso aos 89 anos numa manifestação.',
    photo: 'Honourable Bertrand Russell.jpg',
    text: 'Bertrand Russell nasceu numa das famílias mais aristocráticas da Inglaterra — o avô, Lord John Russell, fora duas vezes primeiro-ministro. Ficou órfão de mãe aos dois anos e de pai aos quatro, e foi criado pela avó paterna num ambiente vitoriano rígido e solitário. Descobriu a geometria de Euclides aos onze anos e a descreveu como o primeiro amor de sua vida.\n\nEm Cambridge dedicou-se a fundamentar a matemática na lógica. Com Alfred North Whitehead escreveu os três volumes dos Principia Mathematica, publicados entre 1910 e 1913 — obra tão densa que só chega à prova de que um mais um é igual a dois depois de centenas de páginas. Antes disso já havia descoberto o paradoxo que leva seu nome e que abalou os fundamentos da teoria dos conjuntos.\n\nEm 1916 perdeu o cargo em Cambridge por sua campanha contra a Primeira Guerra; em 1918 foi preso por seis meses, período em que escreveu um livro sobre filosofia da matemática. Fundou uma escola experimental, escreveu sobre casamento, moral e religião com uma franqueza que lhe custou um emprego em Nova York por decisão judicial.\n\nRecebeu o Nobel de Literatura em 1950. Na velhice tornou-se figura central do movimento antinuclear: aos 89 anos foi preso novamente, por incitar desobediência civil numa manifestação. Em 1955 assinou com Einstein o manifesto que alertava a humanidade sobre as armas atômicas. Morreu aos 97 anos, ainda escrevendo.'
  },

  {
    id: 'suntzu',
    author: 'Sun Tzu',
    cat: 'lideranca',
    profiles: ['estrategistas', 'lideres'],
    origin: 'asiaafrica',
    role: 'Estrategista chinês (séc. V a.C.)',
    why: 'Escreveu há 2.500 anos o manual de estratégia mais lido por generais e executivos até hoje.',
    title: 'Vencer sem lutar',
    excerpt: 'Sobre o general chinês cuja tese central é que a melhor batalha é aquela que não precisa acontecer.',
    photo: 'Enchoen27n3200.jpg',
    text: 'Sun Tzu — o nome significa "mestre Sun" — teria sido general e estrategista a serviço do reino de Wu, no período das Primaveras e Outonos da China antiga. A principal fonte sobre sua vida são os Registros do Historiador, de Sima Qian, escritos séculos depois, o que deixa historiadores divididos sobre quanto da figura é histórico e quanto é construção posterior.\n\nA anedota mais famosa conta que o rei de Wu, para testá-lo, pediu que treinasse suas cento e oitenta concubinas como soldados. Sun Tzu as organizou em duas companhias e nomeou como comandantes as duas favoritas do rei. Deu uma ordem; elas riram. Ele explicou de novo, com clareza, e deu a ordem outra vez; riram de novo. Então mandou executar as duas comandantes, apesar dos protestos do rei, explicando que, quando as instruções são claras e não são cumpridas, a culpa é dos oficiais. As demais executaram os comandos em silêncio perfeito.\n\nA Arte da Guerra tem treze capítulos curtos e uma tese que contraria a expectativa: o auge da habilidade não é vencer cem batalhas, mas submeter o inimigo sem combate. Trata de informação, terreno, moral, engano, timing e economia de recursos — a guerra prolongada, escreveu, nunca beneficiou nação alguma.\n\nO texto foi levado ao Japão no século VIII, chegou à Europa no século XVIII em tradução francesa e, no século XX, tornou-se leitura obrigatória em escolas militares e de negócios do mundo inteiro.'
  },

  {
    id: 'hugo',
    author: 'Victor Hugo',
    cat: 'politica',
    profiles: ['literatura', 'politicos'],
    origin: 'europeus',
    role: 'Escritor francês (1802–1885)',
    why: 'Escreveu "Os Miseráveis" no exílio e teve um funeral acompanhado por dois milhões de pessoas.',
    title: 'A consciência da França',
    excerpt: 'Passou dezenove anos exilado por se opor a um golpe e voltou como o homem mais popular do país.',
    photo: 'Victor Hugo by Étienne Carjat 1876 - full.jpg',
    text: 'Victor Hugo nasceu em Besançon, filho de um general napoleônico e de uma mãe monarquista — divisão política que atravessou sua infância e, mais tarde, sua própria trajetória. Publicou o primeiro livro de poemas aos vinte anos e, aos vinte e nove, o romance que o consagrou: Notre-Dame de Paris, escrito em parte para salvar a catedral, então em ruínas e ameaçada de demolição. O sucesso do livro provocou uma campanha nacional de restauração.\n\nEm 1843 sua filha Léopoldine, recém-casada, morreu afogada no Sena aos dezenove anos, junto com o marido. Hugo soube pelo jornal, num café, dias depois. Parou de publicar por quase dez anos.\n\nEleito deputado, começou conservador e foi se deslocando para a esquerda, tornando-se um dos maiores adversários da pena de morte e defensor do sufrágio universal e da educação gratuita. Quando Luís Napoleão deu um golpe em 1851, Hugo tentou organizar a resistência e teve de fugir. Passou dezenove anos exilado, sobretudo nas ilhas de Jersey e Guernsey, recusando anistias.\n\nFoi no exílio que escreveu Os Miseráveis, publicado em 1862 — a história de Jean Valjean, condenado por roubar pão, e um retrato devastador da miséria urbana. O livro foi um fenômeno imediato. Hugo voltou à França em 1870, com a queda do império, e foi recebido como herói. Quando morreu, aos 83 anos, mais de dois milhões de pessoas acompanharam o cortejo até o Panteão.'
  },

  {
    id: 'wilde',
    author: 'Oscar Wilde',
    cat: 'autorreconhecimento',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Escritor irlandês (1854–1900)',
    why: 'Foi o autor mais celebrado de Londres e terminou preso, falido e exilado por amar outro homem.',
    title: 'O espírito e a queda',
    excerpt: 'A ironia mais afiada da literatura inglesa, seguida de dois anos de trabalhos forçados.',
    photo: 'Oscar Wilde portrait.jpg',
    text: 'Oscar Wilde nasceu em Dublin, filho de um cirurgião renomado e de uma poeta nacionalista irlandesa que escrevia sob pseudônimo. Brilhou em Trinity College e depois em Oxford, onde se tornou discípulo de Walter Pater e adotou o esteticismo — a defesa da arte pela arte.\n\nMudou-se para Londres e construiu fama antes mesmo de ter obra: era conhecido pelo espírito, pelas roupas extravagantes e pelas frases que circulavam pela cidade. Fez uma turnê de palestras pelos Estados Unidos, onde teria dito na alfândega que não tinha nada a declarar exceto seu gênio. Casou-se com Constance Lloyd e teve dois filhos.\n\nA obra veio depois: O Retrato de Dorian Gray em 1890, e uma sequência de comédias que lotaram os teatros de Londres, culminando em A Importância de Ser Prudente, em 1895 — no auge de sua fama.\n\nNo mesmo ano, o pai de seu companheiro Lord Alfred Douglas o acusou publicamente de sodomia. Wilde processou-o por difamação, perdeu, e o processo se voltou contra ele. Foi condenado a dois anos de trabalhos forçados. Na prisão de Reading escreveu De Profundis, longa carta de acerto de contas, e depois A Balada do Cárcere de Reading. Saiu falido, com a saúde arruinada e o nome proibido nos teatros. Exilou-se na França sob nome falso e morreu num hotel barato em Paris, aos 46 anos. Foi perdoado oficialmente pelo Reino Unido apenas em 2017.'
  },

  {
    id: 'woolf',
    author: 'Virginia Woolf',
    cat: 'empoderamento',
    profiles: ['literatura', 'ativistas'],
    origin: 'europeus',
    role: 'Escritora britânica (1882–1941)',
    why: 'Reinventou a forma do romance e escreveu o texto fundador sobre mulheres e independência.',
    title: 'Um teto todo seu',
    excerpt: 'Nunca frequentou uma universidade — e escreveu o ensaio que explicou por quê.',
    photo: 'George Charles Beresford - Virginia Woolf in 1902 - Restoration.jpg',
    text: 'Adeline Virginia Stephen nasceu em Londres, filha de Leslie Stephen, editor e crítico literário. A casa era cheia de livros e de visitas ilustres, mas os irmãos homens foram para Cambridge e ela não: a educação das meninas ficou a cargo dos pais, em casa. Ela usaria essa assimetria como base de sua obra mais política.\n\nA infância foi marcada por perdas em cadeia — a mãe aos treze anos, a meia-irmã aos quinze, o pai aos vinte e dois — e pelo abuso sofrido de meios-irmãos, que relatou em textos autobiográficos. Sofreu crises psíquicas graves e recorrentes por toda a vida, com internações e tentativas de suicídio.\n\nCom os irmãos, formou o núcleo do grupo de Bloomsbury, reunião de escritores, economistas e artistas que discutia arte, política e sexualidade com uma liberdade incomum. Casou-se com Leonard Woolf e juntos fundaram a Hogarth Press, editora que publicaria seus livros e traduções de Freud.\n\nEm Mrs. Dalloway, Ao Farol e As Ondas, dissolveu o enredo tradicional em fluxo de consciência: um dia inteiro, um jantar, uma travessia interior. Em Um Teto Todo Seu, de 1929, argumentou que o silêncio das mulheres na literatura não era falta de talento, mas de dinheiro, tempo e espaço — e imaginou uma irmã de Shakespeare igualmente genial e condenada ao anonimato. Em 1941, sentindo a aproximação de nova crise, encheu os bolsos de pedras e entrou no rio Ouse. Deixou uma carta ao marido agradecendo a felicidade que tiveram.'
  },

  {
    id: 'tolstoi',
    author: 'Liev Tolstói',
    cat: 'vida',
    profiles: ['literatura', 'religiosos'],
    origin: 'europeus',
    role: 'Escritor russo (1828–1910)',
    why: 'Escreveu dois dos maiores romances da história e depois renunciou a tudo para viver como camponês.',
    title: 'O conde que quis ser camponês',
    excerpt: 'Autor de "Guerra e Paz" e "Anna Kariênina", passou os últimos trinta anos tentando abandonar a própria vida.',
    photo: 'L.N.Tolstoy Prokudin-Gorsky.jpg',
    text: 'Liev Nikoláievitch Tolstói nasceu em Iásnaia Poliana, propriedade da família a duzentos quilômetros de Moscou. Ficou órfão de mãe aos dois anos e de pai aos nove. Foi um estudante medíocre, abandonou a universidade e passou a juventude entre jogos de azar, dívidas e arrependimentos meticulosamente registrados em diários.\n\nServiu como oficial de artilharia na Guerra da Crimeia, experiência que lhe deu tanto material literário quanto horror à guerra. Casou-se com Sófia Behrs, dezesseis anos mais nova, que copiaria à mão os manuscritos de Guerra e Paz repetidas vezes e administraria a propriedade e os treze filhos enquanto ele escrevia.\n\nGuerra e Paz saiu entre 1865 e 1869; Anna Kariênina, entre 1875 e 1877. Depois veio a crise. Aos cinquenta anos, no auge da fama e da fortuna, Tolstói passou a considerar a própria vida sem sentido e chegou a esconder as cordas de casa para não se enforcar. Saiu dela com uma leitura radical dos Evangelhos: não resistir ao mal pela violência, renunciar à propriedade, viver do próprio trabalho.\n\nPassou a vestir roupa de camponês, fazer os próprios sapatos, condenar a Igreja — que o excomungou — e tentar doar suas terras, o que gerou uma guerra doméstica de décadas com a esposa. Sua doutrina de não violência influenciou diretamente Gandhi, com quem trocou cartas. Aos 82 anos fugiu de casa numa noite de inverno para viver seus últimos dias em coerência. Morreu dez dias depois na estação ferroviária de Astápovo.'
  },

  {
    id: 'dickens',
    author: 'Charles Dickens',
    cat: 'dificeis',
    profiles: ['literatura', 'ativistas'],
    origin: 'europeus',
    role: 'Escritor inglês (1812–1870)',
    why: 'Trabalhou numa fábrica aos doze anos e transformou a miséria inglesa em literatura popular.',
    title: 'A fábrica de graxa',
    excerpt: 'Escondeu a vida inteira que fora criança operária — e escreveu sobre isso em todos os livros.',
    photo: 'Dickens Gurney head.jpg',
    text: 'Charles Dickens nasceu em Portsmouth, o segundo de oito filhos de um funcionário da Marinha que vivia gastando mais do que ganhava. Quando o menino tinha doze anos, o pai foi preso por dívidas e levado à prisão de Marshalsea com a família — exceto Charles, que foi tirado da escola e mandado trabalhar numa fábrica de graxa de sapatos, colando rótulos dez horas por dia por um salário mínimo.\n\nO período durou poucos meses, mas foi a humilhação definidora de sua vida. Dickens escondeu o episódio de todos, inclusive da esposa e dos filhos; só veio a público na biografia publicada após sua morte. Ele reapareceria disfarçado em quase todos os seus romances, povoados de crianças abandonadas, órfãos e dívidas.\n\nTrabalhou como escrevente de advogado, depois como repórter parlamentar, e começou a publicar crônicas. Os Artigos Póstumos do Clube Pickwick, lançados em fascículos mensais em 1836, viraram fenômeno nacional. Vieram Oliver Twist, David Copperfield, Tempos Difíceis, Grandes Esperanças, Um Conto de Natal.\n\nO formato em fascículos permitia que ele ajustasse a história conforme a reação do público e tornava a leitura barata o bastante para as classes populares. Dickens usou essa audiência: fez campanha contra o trabalho infantil, as casas de trabalho e as escolas negligentes, e conseguiu mudanças concretas na legislação. Fez turnês de leituras públicas dramáticas que exauriram sua saúde. Morreu aos 58 anos, com Edwin Drood inacabado.'
  },

  {
    id: 'twain',
    author: 'Mark Twain',
    cat: 'reflexao',
    profiles: ['literatura'],
    origin: 'norteamericanos',
    role: 'Escritor americano (1835–1910)',
    why: 'Piloto de barco no Mississippi, faliu duas vezes e escreveu o romance fundador da literatura americana.',
    title: 'O humorista que não estava brincando',
    excerpt: 'Usou a piada como bisturi contra o racismo, o imperialismo e a hipocrisia do próprio país.',
    photo: 'Mark Twain by AF Bradley.jpg',
    text: 'Samuel Langhorne Clemens nasceu no Missouri, num vilarejo à beira do Mississippi, numa família que possuía pessoas escravizadas. O pai morreu quando ele tinha onze anos; aos doze foi trabalhar como aprendiz de tipógrafo. Aos vinte e um realizou o sonho de infância e virou piloto de barco a vapor no Mississippi — de onde tirou o pseudônimo: "mark twain" era o grito dos sondadores indicando duas braças de profundidade, água segura.\n\nA Guerra Civil encerrou a navegação comercial. Twain serviu duas semanas numa milícia confederada, desertou, foi para o Oeste tentar a sorte na mineração de prata, fracassou e virou jornalista em Nevada e na Califórnia. O conto sobre um sapo saltador o tornou famoso nacionalmente em 1865.\n\nAs Aventuras de Tom Sawyer saiu em 1876; As Aventuras de Huckleberry Finn, em 1884. O segundo, narrado na voz de um menino pobre que ajuda um homem escravizado a fugir e conclui que prefere ir para o inferno a entregá-lo, é frequentemente apontado como o ponto em que a literatura americana encontrou voz própria. Foi banido de bibliotecas desde a publicação, por motivos opostos ao longo do tempo.\n\nTwain investiu a fortuna em invenções desastrosas e faliu duas vezes, pagando as dívidas com turnês mundiais de palestras. Perdeu a esposa e três dos quatro filhos. Os textos finais são amargos e antimperialistas, denunciando a ocupação das Filipinas e o massacre no Congo. Morreu aos 74 anos, no ano do retorno do cometa Halley, como havia previsto.'
  },

  {
    id: 'drummond',
    author: 'Carlos Drummond de Andrade',
    cat: 'reflexao',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Poeta brasileiro (1902–1987)',
    why: 'Funcionário público a vida inteira, escreveu a poesia mais lida do Brasil no século XX.',
    title: 'A pedra no meio do caminho',
    excerpt: 'Foi ridicularizado por um verso repetitivo em 1928 e virou o maior poeta brasileiro moderno.',
    photo: 'Carlos Drummond de Andrade - Papel.jpg',
    text: 'Carlos Drummond de Andrade nasceu em Itabira, Minas Gerais, filho de fazendeiros. Foi expulso do colégio jesuíta em Belo Horizonte por "insubordinação mental" após uma discussão com um professor de português. Formou-se em Farmácia por falta de opção, exerceu a profissão por um único dia e nunca mais.\n\nEm 1928 publicou na Revista de Antropofagia o poema No Meio do Caminho, cujo verso repetitivo — tinha uma pedra no meio do caminho — provocou escárnio nacional. Jornais publicaram paródias por anos. Drummond guardou os recortes e, décadas depois, organizou-os num livro sobre a polêmica.\n\nPassou a vida como funcionário público. Foi chefe de gabinete de Gustavo Capanema no Ministério da Educação durante o Estado Novo, cargo que exerceu enquanto publicava poesia de esquerda, e depois trabalhou no Serviço do Patrimônio Histórico até se aposentar. Escrevia crônicas semanais para jornais do Rio, que o tornaram figura familiar em milhares de casas.\n\nSua obra atravessa fases distintas: o humor irônico de Alguma Poesia, o engajamento de A Rosa do Povo durante a guerra, a densidade metafísica de Claro Enigma, o retorno à memória de Itabira em Boitempo. Recusou prêmios e homenagens com constância, incluindo a Academia Brasileira de Letras. Sua filha Maria Julieta morreu doze dias antes dele; Drummond morreu aos 84 anos, sem se recuperar da perda.'
  },

  {
    id: 'rosa',
    author: 'Guimarães Rosa',
    cat: 'vida',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Escritor e diplomata brasileiro (1908–1967)',
    why: 'Médico, diplomata e poliglota, inventou uma língua própria dentro do português.',
    title: 'O idioma inventado no sertão',
    excerpt: 'Falava mais de dez idiomas e criou uma sintaxe que ninguém antes dele havia usado.',
    photo: 'João Guimarães Rosa.jpg',
    text: 'João Guimarães Rosa nasceu em Cordisburgo, Minas Gerais, filho de um comerciante. Aprendeu francês sozinho aos seis anos e, ao longo da vida, estudou alemão, russo, húngaro, tcheco, italiano, esperanto, hindi e outras línguas — dizia estudá-las para melhor entender a estrutura do português.\n\nFormou-se em Medicina e clinicou no interior de Minas, onde teve contato direto com o sertão, os vaqueiros e a fala que reproduziria depois. Serviu como médico na Revolução Constitucionalista de 1932 e entrou para a carreira diplomática. Em Hamburgo, durante a guerra, ele e a esposa Aracy de Carvalho ajudaram judeus a fugir da Alemanha emitindo vistos irregulares — Aracy é a única mulher brasileira homenageada como Justa entre as Nações em Israel.\n\nEstreou em livro em 1946 com Sagarana. Em 1956 publicou, no mesmo ano, Corpo de Baile e Grande Sertão: Veredas — este último um monólogo de mais de seiscentas páginas sem divisão em capítulos, narrado pelo jagunço Riobaldo, que conta sua vida e o amor por Diadorim.\n\nA linguagem é o centro da obra: Rosa criava palavras, recuperava arcaísmos, torcia a sintaxe e incorporava a fala sertaneja até produzir algo que não é regionalismo nem erudição, mas um idioma próprio. Foi eleito para a Academia Brasileira de Letras em 1963 e adiou a posse por quatro anos, dizendo temer a emoção. Tomou posse em novembro de 1967 e morreu três dias depois, de infarto.'
  },

  {
    id: 'cecilia',
    author: 'Cecília Meireles',
    cat: 'reflexao',
    profiles: ['literatura', 'educadores'],
    origin: 'brasileiros',
    role: 'Poeta e educadora brasileira (1901–1964)',
    why: 'Órfã antes de completar três anos, tornou-se uma das maiores vozes da poesia em português.',
    title: 'A voz e a ausência',
    excerpt: 'Perdeu pai, mãe e três irmãos antes da infância terminar — e escreveu sobre tudo isso sem uma linha de autopiedade.',
    photo: 'Cecilia Meireles.jpg',
    text: 'Cecília Benevides de Carvalho Meireles nasceu no Rio de Janeiro. O pai morreu três meses antes do nascimento; a mãe, professora, morreu quando ela tinha menos de três anos. Os três irmãos mais velhos já haviam morrido antes de ela nascer. Foi criada pela avó materna, açoriana, que lhe transmitiu o repertório de cantigas e romances populares que apareceria em toda a sua obra.\n\nFormou-se professora primária aos dezesseis anos e publicou o primeiro livro de poemas aos dezoito. Dedicou-se ao magistério e ao jornalismo educacional: escreveu por anos uma página diária sobre educação no Diário de Notícias, defendendo a escola pública, laica e gratuita, o que lhe rendeu ataques de setores conservadores e católicos. Fundou no Rio a primeira biblioteca infantil do Brasil, em 1934, com discoteca e sala de leitura.\n\nO primeiro marido, o artista português Fernando Correia Dias, suicidou-se em 1935, deixando-a com três filhas pequenas. Ela continuou trabalhando e escrevendo.\n\nSua obra madura começa com Viagem, de 1939. O ponto alto é o Romanceiro da Inconfidência, de 1953, ciclo de oitenta e cinco poemas sobre a Inconfidência Mineira construído na forma dos romances populares ibéricos — um monumento sobre liberdade, traição e memória. Escreveu também poesia infantil que continua sendo lida em escolas. Viajou pela Índia a convite do governo indiano e recebeu um título honorário em Nova Délhi. Morreu aos 63 anos.'
  },

  {
    id: 'rumi',
    author: 'Rumi',
    cat: 'fe',
    profiles: ['religiosos', 'literatura'],
    origin: 'asiaafrica',
    role: 'Poeta e místico persa (1207–1273)',
    why: 'Era um teólogo respeitável até conhecer um dervixe errante — e virou poeta aos trinta e sete anos.',
    title: 'O encontro que virou poesia',
    excerpt: 'Do jurista sóbrio ao autor de sessenta mil versos: uma amizade mudou tudo.',
    photo: 'Molana.jpg',
    text: 'Jalal ad-Din Muhammad Rumi nasceu em Balkh, no atual Afeganistão, filho de um teólogo respeitado. A família fugiu do avanço mongol quando ele era criança e percorreu Bagdá, Meca e Damasco antes de se estabelecer em Konya, na atual Turquia — daí o apelido Rumi, "o de Rum", como se chamava a região da antiga Roma oriental.\n\nSeguiu a carreira do pai: tornou-se jurista islâmico e pregador, com centenas de alunos e reputação de erudição sóbria. Nada indicava poesia. Então, em 1244, aos trinta e sete anos, encontrou Shams de Tabriz, um dervixe errante e provocador. Os dois se isolaram em conversas que duraram meses, para escândalo dos discípulos e da família de Rumi. Shams desapareceu — provavelmente assassinado por seguidores ciumentos.\n\nA perda transformou Rumi. Ele começou a compor: primeiro o Divan de Shams de Tabriz, atribuído ao amigo desaparecido, depois o Masnavi, poema de cerca de vinte e cinco mil versos que os persas chamam de "o Alcorão em língua persa". Passou a girar em torno de si mesmo enquanto ditava versos, prática que originou a dança dos dervixes rodopiantes.\n\nSua poesia trata do amor como via de conhecimento, da separação como motor da busca e da unidade por trás das formas religiosas. É lida hoje por muçulmanos, cristãos, judeus e ateus, e figura entre os poetas mais vendidos dos Estados Unidos — frequentemente em versões livres que suprimem seu contexto islâmico. Seu funeral, em Konya, foi acompanhado por pessoas de várias religiões.'
  },

  {
    id: 'muhammad',
    author: 'Profeta Muhammad',
    cat: 'fe',
    profiles: ['religiosos', 'lideres'],
    origin: 'asiaafrica',
    role: 'Profeta do Islã (c. 570–632)',
    why: 'Órfão e comerciante analfabeto, unificou a Arábia e fundou a religião de quase dois bilhões de pessoas.',
    title: 'A recitação na caverna',
    excerpt: 'Aos quarenta anos, um mercador respeitado de Meca recebeu uma revelação que reorganizaria o mundo.',
    photo: 'Rashid al-Din Hamadani. Jami al-Tawarikh. 1liyas and Muhammad.jpg',
    text: 'Muhammad ibn Abdullah nasceu em Meca, na tribo dos coraixitas. O pai morreu antes de seu nascimento; a mãe, quando ele tinha seis anos. Foi criado pelo avô e depois pelo tio Abu Talib, e trabalhou como pastor e depois como condutor de caravanas comerciais. Ganhou entre os conterrâneos o apelido de al-Amin, o confiável, por sua reputação de honestidade nas negociações.\n\nAos vinte e cinco anos casou-se com Khadija, comerciante próspera quinze anos mais velha, que fora sua empregadora e o pediu em casamento. Viveram monogamicamente por vinte e cinco anos, até a morte dela — ela foi também a primeira pessoa a acreditar em sua missão.\n\nPor volta dos quarenta anos, durante um retiro numa caverna do monte Hira, Muhammad relatou ter recebido do anjo Gabriel a ordem de recitar. As revelações continuariam por vinte e três anos e formariam o Alcorão. Sua pregação — um único Deus, responsabilidade moral, cuidado com órfãos, viúvas e pobres, crítica à idolatria e à concentração de riqueza — ameaçava a estrutura religiosa e comercial de Meca. Ele e seus seguidores foram perseguidos.\n\nEm 622 migrou para Iatribe, depois chamada Medina, evento que marca o início do calendário islâmico. Ali estabeleceu uma comunidade regida por um pacto que incluía tribos judaicas, e passou de pregador a líder político e militar. Em 630 voltou a Meca sem batalha. Morreu dois anos depois, tendo unificado a península arábica, e não indicou sucessor — divisão que originaria a separação entre sunitas e xiitas.'
  },

  {
    id: 'dalailama',
    author: 'Dalai Lama',
    cat: 'fe',
    profiles: ['religiosos', 'lideres'],
    origin: 'asiaafrica',
    role: 'Líder espiritual tibetano (1935–)',
    why: 'Reconhecido aos dois anos, exilado aos vinte e três, virou o rosto global da não violência.',
    title: 'O menino escolhido',
    excerpt: 'Filho de camponeses, foi identificado como reencarnação e passou a maior parte da vida fora do próprio país.',
    photo: 'Tenzin Gyatso - 14th Dalai Lama (2012).jpg',
    text: 'Lhamo Thondup nasceu numa família de camponeses numa aldeia da região tibetana do Amdo. Aos dois anos, uma comissão de monges chegou à casa disfarçada e apresentou ao menino objetos que pertenceram ao décimo terceiro Dalai Lama, misturados com réplicas. Ele identificou os verdadeiros dizendo que eram seus. Foi reconhecido como a décima quarta reencarnação e levado a Lhasa, onde passou a infância no palácio de Potala, estudando filosofia budista, lógica e debate.\n\nEm 1950, aos quinze anos, assumiu a autoridade política do Tibete em meio à entrada do Exército de Libertação Popular chinês. Passou os anos seguintes tentando negociar com Pequim, incluindo encontros com Mao Tsé-Tung. Em março de 1959, após o esmagamento de uma revolta em Lhasa, fugiu do Tibete disfarçado, cruzando o Himalaia a pé em quinze dias.\n\nEstabeleceu o governo tibetano no exílio em Dharamsala, na Índia, onde vive desde então. Ao longo das décadas, deslocou sua posição da independência para o que chamou de via do meio: autonomia real dentro da China. Em 2011 renunciou a todo poder político, transferindo-o a um primeiro-ministro eleito — encerrando quase quatro séculos de governo teocrático.\n\nRecebeu o Nobel da Paz em 1989. Dedicou-se ao diálogo entre budismo e ciência, especialmente neurociência, e a uma linguagem de ética secular que dispensa a religião. Sua insistência em não responder à ocupação com ódio é ao mesmo tempo sua marca e o alvo das críticas de tibetanos mais jovens e impacientes.'
  },

  {
    id: 'francisco_assis',
    author: 'Francisco de Assis',
    cat: 'fe',
    profiles: ['religiosos'],
    origin: 'europeus',
    role: 'Frade italiano (1181–1226)',
    why: 'Filho de um rico comerciante, despiu-se em praça pública e escolheu a pobreza absoluta.',
    title: 'O filho do mercador',
    excerpt: 'Trocou a herança do pai por um hábito remendado e mudou o rumo da Igreja medieval.',
    photo: 'San Francesco d\u2019Assisi.jpg',
    text: 'Giovanni di Pietro di Bernardone nasceu em Assis, na Úmbria, filho de um comerciante de tecidos enriquecido no comércio com a França — daí o apelido Francesco, "o francesinho". A juventude foi de festas, roupas caras e sonhos de glória cavaleiresca. Aos vinte anos participou de uma guerra entre Assis e Perugia, foi capturado e passou cerca de um ano numa prisão, onde adoeceu gravemente.\n\nA recuperação trouxe uma inquietação que não passou. Numa segunda expedição militar, voltou no meio do caminho. Começou a frequentar leprosários, a dar esmolas em quantidades que alarmavam a família e a restaurar capelas em ruínas com as próprias mãos. Quando vendeu tecidos do pai para financiar uma dessas obras, foi levado a julgamento diante do bispo. Ali, diante da cidade, despiu-se completamente, devolveu as roupas ao pai e declarou que dali em diante só teria um Pai no céu.\n\nPassou a viver de esmolas, vestindo um hábito grosseiro amarrado com corda. Outros se juntaram a ele. Em 1209 foi a Roma pedir aprovação do papa Inocêncio III para uma ordem cuja regra era a pobreza literal — nada de propriedades, individuais ou coletivas. Obteve autorização oral. A ordem cresceu de forma explosiva e logo escapou ao seu controle.\n\nPregava aos pássaros e chamava o sol, a lua, o vento e a própria morte de irmãos, no Cântico das Criaturas — um dos primeiros textos literários em italiano. Em 1219, no auge da Quinta Cruzada, atravessou as linhas para conversar com o sultão do Egito. Morreu aos 44 anos, cego e doente, pedindo para ser deitado no chão nu.'
  },

  {
    id: 'thich',
    author: 'Thich Nhat Hanh',
    cat: 'conforto',
    profiles: ['religiosos'],
    origin: 'asiaafrica',
    role: 'Monge budista vietnamita (1926–2022)',
    why: 'Exilado por pedir paz durante a guerra do Vietnã, levou a atenção plena ao Ocidente.',
    title: 'O monge sem país',
    excerpt: 'Recusou-se a tomar lado numa guerra e ficou trinta e nove anos proibido de voltar para casa.',
    photo: 'Thich Nhat Hanh 12 (cropped).jpg',
    text: 'Nguyễn Xuân Bảo nasceu em Huế, no Vietnã central, e entrou para um monastério aos dezesseis anos. Durante a guerra, quando o país se dividia entre norte e sul, ele e seus companheiros enfrentaram uma escolha que descreveu como impossível: permanecer meditando nos monastérios ou sair para ajudar as vítimas dos bombardeios. Escolheram os dois, e chamaram a isso de budismo engajado.\n\nFundou a Escola de Juventude para Serviço Social, que reconstruía aldeias bombardeadas e cuidava de feridos sem perguntar de que lado estavam. Vários de seus jovens voluntários foram mortos. Em 1966 viajou aos Estados Unidos e à Europa para pedir o fim da guerra. Encontrou-se com Martin Luther King Jr., que no ano seguinte se posicionou publicamente contra a guerra e o indicou ao Nobel da Paz. Nenhum prêmio foi concedido naquele ano.\n\nO gesto lhe custou o país: tanto o Vietnã do Sul quanto, depois, o governo unificado negaram-lhe o retorno. Ficou trinta e nove anos exilado. Instalou-se na França, onde fundou a comunidade de Plum Village.\n\nEscreveu mais de cem livros e popularizou uma prática simples e sem jargão: prestar atenção à respiração, ao caminhar, ao lavar a louça. Insistia que a paz não é um objetivo distante, mas o modo de caminhar até ele. Sofreu um AVC grave em 2014 e, em 2018, obteve permissão para voltar ao templo de sua ordenação em Huế, onde morreu aos 95 anos.'
  }
];

/* ================================================================
   FASE 3 — NOVAS BIOGRAFIAS (lote B)
   ================================================================ */
const NEW_STORIES_B = [
  {
    id: 'einstein',
    author: 'Albert Einstein',
    cat: 'reflexao',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Físico alemão (1879–1955)',
    why: 'Escreveu quatro artigos revolucionários num único ano, enquanto trabalhava num escritório de patentes.',
    title: 'O ano milagroso',
    excerpt: 'Rejeitado pela academia, analisava pedidos de patente em Berna quando reescreveu a física.',
    photo: 'Einstein 1921 by F Schmutzer - restoration.jpg',
    text: 'Albert Einstein nasceu em Ulm, na Alemanha, numa família judaica secular. Falou tarde e teve um percurso escolar conflituoso — não por dificuldade, mas por rejeição ao método autoritário. Abandonou o colégio na Alemanha aos quinze anos e renunciou à cidadania alemã aos dezesseis para evitar o serviço militar, ficando apátrida por cinco anos.\n\nFormou-se em Zurique, mas foi o único de sua turma a não conseguir posto acadêmico: nenhum professor o recomendou. Passou dois anos desempregado, dando aulas particulares, até um amigo lhe conseguir um emprego no escritório de patentes de Berna, avaliando invenções.\n\nEm 1905, aos vinte e seis anos, publicou quatro artigos em poucos meses. Um explicava o efeito fotoelétrico e fundava a física quântica — foi por ele que receberia o Nobel. Outro comprovava a existência dos átomos. O terceiro apresentava a relatividade restrita. O quarto derivava a equivalência entre massa e energia. Em 1915 completou a relatividade geral, reformulando a gravidade como curvatura do espaço-tempo; a confirmação veio em 1919, num eclipse observado em parte de Sobral, no Ceará.\n\nCom a ascensão de Hitler, estava nos Estados Unidos e não voltou. Em 1939 assinou a carta a Roosevelt alertando sobre a possibilidade de uma bomba atômica alemã — decisão que classificaria depois como o maior erro de sua vida. Foi pacifista declarado, defensor dos direitos civis nos Estados Unidos e crítico do racismo americano numa época em que quase nenhum cientista falava disso. Recusou a presidência de Israel em 1952. Morreu aos 76 anos.'
  },

  {
    id: 'darwin',
    author: 'Charles Darwin',
    cat: 'vida',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Naturalista britânico (1809–1882)',
    why: 'Adiou vinte anos a publicação da teoria da evolução — e só correu quando outro chegou à mesma ideia.',
    title: 'Vinte anos de hesitação',
    excerpt: 'Voltou de uma viagem de cinco anos com a resposta e passou duas décadas com medo de publicá-la.',
    photo: 'Charles Darwin seated crop.jpg',
    text: 'Charles Robert Darwin nasceu em Shrewsbury, filho de um médico próspero e neto de dois nomes notáveis: Erasmus Darwin, naturalista, e Josiah Wedgwood, o ceramista. Foi mandado estudar medicina em Edimburgo, desistiu enojado das cirurgias sem anestesia, e foi então empurrado para a teologia em Cambridge — caminho que também não seguiria.\n\nEm 1831, aos vinte e dois anos, embarcou como naturalista sem remuneração no HMS Beagle, numa viagem que duraria cinco anos. Enjoava constantemente. Percorreu a América do Sul, incluindo longas estadas no Brasil, na Patagônia e nos Andes, e passou cinco semanas nas ilhas Galápagos, onde coletou os tentilhões cujas variações de bico o intrigariam depois.\n\nDe volta à Inglaterra, formulou em poucos anos o essencial da seleção natural. E então parou. Escreveu um ensaio em 1844 e deixou instruções para publicá-lo caso morresse. Passou vinte anos estudando cracas, criando pombos, acumulando evidências e adiando — consciente do que a tese faria com a ordem religiosa e com a própria família. Sua esposa Emma, devota, temia que se separassem na eternidade.\n\nEm 1858 recebeu uma carta de Alfred Russel Wallace, do arquipélago malaio, descrevendo a mesma ideia. Os dois trabalhos foram apresentados juntos, e Darwin publicou A Origem das Espécies no ano seguinte. A primeira tiragem esgotou no primeiro dia. Sofreu de uma doença crônica nunca diagnosticada por quarenta anos. Está enterrado na Abadia de Westminster.'
  },

  {
    id: 'sagan',
    author: 'Carl Sagan',
    cat: 'educacao',
    profiles: ['cientistas', 'educadores'],
    origin: 'norteamericanos',
    role: 'Astrônomo americano (1934–1996)',
    why: 'Convenceu a NASA a virar uma sonda para fotografar a Terra como um ponto azul pálido.',
    title: 'O ponto azul pálido',
    excerpt: 'Filho de um operário têxtil, tornou-se o cientista que mais gente já ouviu falar de ciência.',
    photo: 'Carl Sagan Planetary Society.JPG',
    text: 'Carl Edward Sagan nasceu no Brooklyn, filho de um imigrante ucraniano que trabalhava como cortador numa fábrica de roupas. A mãe, sem instrução formal mas de curiosidade voraz, o levou aos cinco anos à Feira Mundial de Nova York e depois à biblioteca pública, onde ele pediu livros sobre estrelas e descobriu que eram sóis distantes. Disse mais tarde que aquele foi o momento decisivo de sua vida.\n\nDoutorou-se em astronomia e astrofísica em Chicago. Trabalhou nos programas Mariner, Viking, Voyager e Galileo. Foi o primeiro a prever corretamente que a superfície de Vênus seria escaldante por efeito estufa descontrolado, e que as manchas sazonais de Marte eram tempestades de poeira, não vegetação.\n\nDefendeu a inclusão de mensagens nas sondas: as placas da Pioneer e o Disco de Ouro da Voyager, com sons e imagens da Terra para eventuais civilizações. Em 1990 convenceu a NASA a girar a Voyager 1, a seis bilhões de quilômetros, para fotografar a Terra — um pixel esbranquiçado num feixe de luz. O texto que escreveu sobre essa imagem tornou-se um dos mais reproduzidos da divulgação científica.\n\nA série Cosmos, de 1980, foi vista por centenas de milhões de pessoas. Sagan também alertou o mundo sobre o inverno nuclear e combateu pseudociências, defendendo o que chamava de "detector de mentiras" do pensamento crítico. Foi rejeitado pela Academia Nacional de Ciências, em parte por seu sucesso popular. Morreu aos 62 anos, de pneumonia após mielodisplasia.'
  },

  {
    id: 'santosdumont',
    author: 'Santos Dumont',
    cat: 'motivacao',
    profiles: ['cientistas'],
    origin: 'brasileiros',
    role: 'Inventor brasileiro (1873–1932)',
    why: 'Voou diante de multidões em Paris e recusou patentear a invenção, para que fosse de todos.',
    title: 'O homem que voou em público',
    excerpt: 'Filho de um cafeicultor mineiro, virou celebridade em Paris e morreu vendo o avião usado na guerra.',
    photo: 'Alberto Santos-Dumont 1902.jpg',
    text: 'Alberto Santos Dumont nasceu em Palmira, Minas Gerais, filho de um engenheiro que se tornou um dos maiores cafeicultores do mundo. Cresceu entre as máquinas da fazenda em São Paulo, operando locomotivas e equipamentos desde criança. Aos dezoito anos foi com o pai para Paris; com a morte dele, herdou recursos suficientes para dedicar a vida a voar.\n\nComeçou com balões, projetando o menor da época. Depois passou aos dirigíveis. Em 1901 venceu o Prêmio Deutsch ao contornar a Torre Eiffel e retornar em menos de trinta minutos com o dirigível nº 6 — e dividiu o prêmio entre seus mecânicos e os pobres de Paris. Virou celebridade: pousava o dirigível na porta de cafés, e um relógio de pulso foi criado a seu pedido para que pudesse ver as horas sem soltar os comandos.\n\nEm 23 de outubro de 1906, no campo de Bagatelle, fez o 14-Bis decolar por meios próprios diante de multidão e comissão oficial — o primeiro voo homologado de um aparelho mais pesado que o ar. Em 1909 apresentou o Demoiselle, monoplano leve cujos planos ele publicou gratuitamente, recusando-se a patentear.\n\nAdoeceu com esclerose múltipla e afastou-se das invenções. Passou os últimos anos horrorizado com o uso militar da aviação, escrevendo à Liga das Nações para pedir sua proibição. Voltou ao Brasil e, em 1932, durante a Revolução Constitucionalista, ouviu aviões bombardeando São Paulo. Tirou a própria vida num hotel no Guarujá, aos 59 anos.'
  },

  {
    id: 'lovelace',
    author: 'Ada Lovelace',
    cat: 'educacao',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Matemática britânica (1815–1852)',
    why: 'Escreveu o primeiro algoritmo destinado a uma máquina, um século antes do primeiro computador.',
    title: 'A primeira programadora',
    excerpt: 'Filha de Lord Byron, foi afastada da poesia pela mãe e encontrou na matemática o que procurava.',
    photo: 'Ada Lovelace portrait.jpg',
    text: 'Augusta Ada Byron nasceu em Londres, filha do poeta Lord Byron e de Anne Isabella Milbanke. Os pais se separaram um mês depois do nascimento; Byron deixou a Inglaterra e nunca mais a viu. A mãe, ela própria interessada em matemática, submeteu a filha a uma educação científica rigorosa desde a infância, convencida de que isso a protegeria da "loucura poética" herdada do pai.\n\nAos dezessete anos conheceu Charles Babbage, que trabalhava na Máquina Diferencial e depois na Máquina Analítica — um computador mecânico de propósito geral que nunca chegou a ser construído. Ada ficou fascinada e tornou-se sua interlocutora por quase duas décadas.\n\nEm 1843 traduziu um artigo em francês do engenheiro italiano Luigi Menabrea sobre a máquina. Às trinta páginas do original ela acrescentou setenta páginas de notas próprias, assinadas apenas com as iniciais A.A.L. Na Nota G, descreveu passo a passo como a máquina calcularia os números de Bernoulli — reconhecido hoje como o primeiro algoritmo escrito para ser executado por uma máquina.\n\nMais do que isso, ela percebeu algo que Babbage não formulou: se a máquina podia manipular símbolos segundo regras, poderia processar não apenas números, mas qualquer coisa representável simbolicamente — música, texto, imagens. Também observou que a máquina não poderia originar nada, apenas executar o que fosse ordenado. Morreu de câncer aos 36 anos, a mesma idade do pai. As notas ficaram esquecidas por cem anos, até serem redescobertas em 1953.'
  },

  {
    id: 'ford',
    author: 'Henry Ford',
    cat: 'negocios',
    profiles: ['empresarios'],
    origin: 'norteamericanos',
    role: 'Industrial americano (1863–1947)',
    why: 'Dobrou o salário dos operários e criou a produção em massa que redefiniu o século XX.',
    title: 'A linha que mudou o trabalho',
    excerpt: 'Filho de fazendeiros, odiava a lavoura e construiu o carro que tirou os americanos do campo.',
    photo: 'Henry ford 1919.jpg',
    text: 'Henry Ford nasceu numa fazenda em Michigan e detestou o trabalho agrícola desde cedo. Aos doze anos viu pela primeira vez uma máquina a vapor autopropelida numa estrada e disse mais tarde que aquele encontro definiu sua vida. Aos dezesseis foi para Detroit trabalhar como aprendiz de mecânico. Consertava relógios nas horas vagas.\n\nTrabalhou como engenheiro-chefe na Edison Illuminating Company, e foi um encontro com o próprio Thomas Edison que o encorajou a persistir no motor a gasolina. Suas duas primeiras empresas fracassaram. A Ford Motor Company, fundada em 1903, foi a terceira tentativa.\n\nO Modelo T saiu em 1908. A inovação decisiva veio em 1913, com a linha de montagem móvel: o tempo de fabricação de um chassi caiu de doze horas para menos de duas, e o preço do carro despencou ao longo dos anos. Em 1914 Ford anunciou o salário de cinco dólares por dia — mais que o dobro da média — e a jornada de oito horas, argumentando que operários bem pagos comprariam os carros que produziam. A rotatividade despencou e a medida foi copiada pela indústria inteira.\n\nO outro lado é indissociável: Ford era hostil a sindicatos, manteve um departamento que vigiava a vida privada dos empregados e publicou por anos, em jornal próprio, uma campanha antissemita sistemática que foi celebrada por Hitler. Retratou-se publicamente em 1927 sob pressão judicial e comercial. Morreu aos 83 anos, tendo transformado tanto a forma de produzir quanto a forma de viver.'
  },

  {
    id: 'rockefeller',
    author: 'John D. Rockefeller',
    cat: 'financas',
    profiles: ['empresarios'],
    origin: 'norteamericanos',
    role: 'Industrial americano (1839–1937)',
    why: 'Construiu o maior monopólio da história e depois doou mais dinheiro do que qualquer um antes dele.',
    title: 'O contador que virou monopólio',
    excerpt: 'Filho de um vigarista itinerante, controlou 90% do petróleo americano — e teve a empresa dividida pela Justiça.',
    photo: 'John D. Rockefeller 1885.jpg',
    text: 'John Davison Rockefeller nasceu no interior de Nova York. O pai vendia elixires falsos como médico itinerante, sumia por meses e mantinha uma segunda família; a mãe, batista devota, criou os filhos na disciplina e na doação sistemática. Aos dezesseis anos Rockefeller conseguiu emprego como escriturário e passou a registrar cada centavo ganho e doado num caderno que guardaria a vida inteira.\n\nEntrou no refino de petróleo em Cleveland em 1863. Fundou a Standard Oil em 1870 e, em pouco mais de uma década, controlava cerca de noventa por cento do refino americano. O método combinava eficiência real — reaproveitava subprodutos que os concorrentes descartavam, fabricava os próprios barris — com práticas que o tornaram odiado: descontos secretos com ferrovias, guerras de preços localizadas e absorção de rivais sem alternativa.\n\nA reportagem investigativa de Ida Tarbell, cujo pai fora arruinado pela Standard, expôs esses métodos e mobilizou a opinião pública. Em 1911 a Suprema Corte determinou a dissolução da empresa em trinta e quatro companhias — várias das quais se tornariam gigantes por conta própria. Ironia final: as ações somadas valorizaram, e Rockefeller ficou ainda mais rico.\n\nNa segunda metade da vida dedicou-se à filantropia em escala inédita: fundou a Universidade de Chicago, o instituto de pesquisa médica que virou a Universidade Rockefeller e uma fundação que financiou campanhas contra a febre amarela e a ancilostomíase no mundo inteiro, inclusive no Brasil. Morreu aos 97 anos.'
  },

  {
    id: 'carnegie_a',
    author: 'Andrew Carnegie',
    cat: 'financas',
    profiles: ['empresarios'],
    origin: 'norteamericanos',
    role: 'Industrial escocês-americano (1835–1919)',
    why: 'Chegou aos EUA na miséria, virou o homem mais rico do mundo e doou quase tudo em vida.',
    title: 'As bibliotecas que ele deixou',
    excerpt: 'Trabalhou aos treze anos numa fábrica têxtil e financiou mais de 2.500 bibliotecas públicas.',
    photo: 'Andrew Carnegie, three-quarter length portrait, seated, facing slightly left, 1913.jpg',
    text: 'Andrew Carnegie nasceu em Dunfermline, na Escócia, filho de um tecelão manual arruinado pela mecanização dos teares. A família emigrou para a Pensilvânia em 1848, sem dinheiro. Aos treze anos ele trabalhava doze horas por dia numa fábrica de algodão. Sua educação veio de um coronel local que abria a biblioteca particular aos jovens trabalhadores aos sábados — experiência que determinaria sua filantropia futura.\n\nVirou mensageiro telegráfico, aprendeu a decifrar código de ouvido e foi contratado pela Pennsylvania Railroad, onde subiu rápido. Investiu em pontes, vagões e petróleo, e depois concentrou tudo no aço, adotando o processo Bessemer e integrando verticalmente minas, transporte e usinas. A Carnegie Steel dominou o setor.\n\nA mancha de sua trajetória é a greve de Homestead, em 1892: enquanto ele estava na Escócia, seu sócio Henry Frick enfrentou os grevistas com agentes armados, num confronto que deixou mortos dos dois lados e destruiu o sindicato. Carnegie manteve distância pública, mas a responsabilidade o perseguiu.\n\nEm 1889 publicou O Evangelho da Riqueza, argumentando que morrer rico era uma desgraça e que o milionário deveria administrar o excedente como um fundo em benefício da comunidade. Vendeu a empresa em 1901 e passou os dezoito anos seguintes distribuindo a fortuna: mais de 2.500 bibliotecas públicas em vários países, universidades, fundos de pensão para professores e um instituto pela paz. Morreu aos 83 anos, tendo doado a maior parte do que tinha.'
  },

  {
    id: 'jackma',
    author: 'Jack Ma',
    cat: 'empreendedorismo',
    profiles: ['empresarios'],
    origin: 'asiaafrica',
    role: 'Empresário chinês (1964–)',
    why: 'Reprovado dezenas de vezes em empregos e no vestibular, fundou uma das maiores empresas do mundo.',
    title: 'O professor de inglês',
    excerpt: 'Aprendeu inglês guiando turistas de graça e criou a Alibaba num apartamento com dezessete amigos.',
    photo: 'Jack Ma 2008.jpg',
    text: 'Ma Yun nasceu em Hangzhou, na China, numa família pobre de contadores de histórias tradicionais. Quando a China começou a se abrir ao turismo, ele passou nove anos indo de bicicleta até um hotel da cidade quase todos os dias para oferecer passeios gratuitos a estrangeiros em troca de praticar inglês. Um casal australiano que conheceu assim se tornou amigo da família por décadas.\n\nSua trajetória foi feita de rejeições que ele mesmo gostava de listar: reprovou duas vezes no vestibular, foi recusado em dez universidades americanas, e não conseguiu emprego em dezenas de lugares — incluindo, segundo seu relato, um KFC que contratou vinte e três dos vinte e quatro candidatos e deixou só ele de fora.\n\nTornou-se professor de inglês. Numa viagem aos Estados Unidos em 1995, viu a internet pela primeira vez e buscou a palavra "cerveja"; não havia nenhum resultado chinês. Criou uma primeira empresa de páginas amarelas online, que fracassou.\n\nEm 1999 reuniu dezessete pessoas em seu apartamento e fundou a Alibaba, com a ideia de conectar pequenos fabricantes chineses a compradores do mundo. Sobreviveu ao estouro da bolha, resistiu ao eBay criando o Taobao com comissão zero e construiu o sistema de pagamentos que virou o Alipay. A abertura de capital em 2014 foi a maior da história até então. Deixou o comando em 2019 para se dedicar à educação. Após criticar publicamente reguladores chineses em 2020, sumiu da vida pública por longos períodos.'
  },

  {
    id: 'graham',
    author: 'Benjamin Graham',
    cat: 'financas',
    profiles: ['investidores', 'educadores'],
    origin: 'norteamericanos',
    role: 'Investidor e professor americano (1894–1976)',
    why: 'Perdeu tudo na quebra de 1929 e criou a partir dali toda a disciplina do investimento em valor.',
    title: 'O pai do investimento em valor',
    excerpt: 'Professor de Warren Buffett, transformou a especulação de Wall Street numa disciplina com método.',
    photo: 'Benjamin Graham.jpg',
    text: 'Benjamin Grossbaum nasceu em Londres e foi levado a Nova York com um ano de idade. O pai morreu quando ele tinha nove; o negócio da família ruiu e a mãe perdeu o que restava especulando com ações na crise de 1907. Cresceram na pobreza. A família mudou o sobrenome para Graham durante a Primeira Guerra, por causa do antissemitismo e da conotação germânica.\n\nGraham foi um aluno excepcional, formou-se em Columbia aos vinte anos e recebeu convites para lecionar em três departamentos diferentes — matemática, filosofia e inglês. Escolheu Wall Street, por dinheiro. Em 1926 fundou uma sociedade de investimentos. A quebra de 1929 e os anos seguintes quase o destruíram: perdeu cerca de setenta por cento do capital e passou anos recuperando o dos clientes antes de voltar a ganhar qualquer coisa.\n\nDessa experiência tirou seu método. Em 1934, com David Dodd, publicou Security Analysis, e em 1949 O Investidor Inteligente. Três ideias sustentam tudo: uma ação é a fração de um negócio real, não um bilhete de aposta; o mercado é um sócio maníaco-depressivo — o Sr. Mercado — que todo dia oferece preços absurdos para cima ou para baixo, e você não é obrigado a aceitá-los; e nenhuma compra deve ser feita sem margem de segurança entre o preço pago e o valor estimado.\n\nLecionou em Columbia por vinte e oito anos. Warren Buffett foi seu aluno, o único a receber nota máxima, e depois seu funcionário. Graham morreu aos 82 anos, na França.'
  },

  {
    id: 'bogle',
    author: 'John Bogle',
    cat: 'financas',
    profiles: ['investidores'],
    origin: 'norteamericanos',
    role: 'Investidor americano (1929–2019)',
    why: 'Criou o fundo de índice, foi ridicularizado por isso e economizou trilhões para investidores comuns.',
    title: 'A ideia que Wall Street odiou',
    excerpt: 'Foi demitido da própria empresa e respondeu criando o produto que mudou a poupança do mundo.',
    photo: 'John C Bogle 2012.jpg',
    text: 'John Clifton Bogle nasceu em Nova Jersey. A família perdeu tudo na Grande Depressão; o pai afundou no alcoolismo e os pais se separaram. Bogle trabalhou desde os nove anos e só chegou a Princeton com bolsa integral e empregos noturnos no refeitório.\n\nSua tese de graduação, de 1951, analisava os fundos mútuos e concluía que eles não conseguiam superar consistentemente os índices de mercado depois das taxas. Foi contratado pela Wellington Management, chegou à presidência e então cometeu o que chamaria de maior erro de sua vida: aprovou uma fusão desastrosa que resultou em sua demissão em 1974.\n\nEm vez de sair, negociou a criação de uma nova estrutura administrativa — a Vanguard — organizada de modo peculiar: pertencente aos próprios fundos, e portanto aos cotistas, sem acionistas externos para remunerar. Em 1976 lançou o primeiro fundo de índice destinado ao investidor comum. A indústria o apelidou de "a loucura de Bogle"; um concorrente publicou cartazes dizendo que aceitar a média era antiamericano. O fundo captou uma fração do previsto.\n\nA aritmética acabou vencendo. Ao replicar o mercado a custo quase nulo, o fundo de índice entregava mais no longo prazo do que a maioria dos gestores que cobravam caro para tentar vencê-lo. A Vanguard tornou-se uma das maiores gestoras do mundo, e Bogle, ao renunciar a transformá-la em empresa de capital aberto, abriu mão de uma fortuna pessoal. Fez transplante de coração aos 66 anos e viveu mais vinte e três, escrevendo contra os custos e a especulação.'
  },

  {
    id: 'dalio',
    author: 'Ray Dalio',
    cat: 'financas',
    profiles: ['investidores'],
    origin: 'norteamericanos',
    role: 'Investidor americano (1949–)',
    why: 'Quebrou a empresa com uma previsão errada em público e reconstruiu tudo sobre princípios escritos.',
    title: 'O erro que virou método',
    excerpt: 'Filho de um músico de jazz, perdeu tudo aos trinta e dois e criou o maior fundo de hedge do mundo.',
    photo: 'Ray Dalio 2019.jpg',
    text: 'Raymond Dalio nasceu em Nova York, filho de um músico de jazz e de uma dona de casa. Comprou a primeira ação aos doze anos, com dinheiro ganho como caddie num clube de golfe frequentado por profissionais de Wall Street. Triplicou o investimento e ficou fisgado.\n\nFormou-se em Harvard e fundou a Bridgewater Associates em 1975, num apartamento de dois quartos. O ponto de virada foi negativo: em 1982 previu publicamente, com convicção total, uma depressão econômica americana decorrente da crise da dívida latino-americana. Testemunhou no Congresso e apareceu na televisão defendendo a tese. O mercado fez o oposto e iniciou uma das maiores altas da história. Dalio perdeu tudo, teve de demitir todos os funcionários e pegar quatro mil dólares emprestados do pai para pagar as contas.\n\nDescreveu esse episódio como a experiência mais dolorosa e mais valiosa de sua vida. A conclusão que tirou foi menos sobre economia do que sobre epistemologia: ter certeza é perigoso, e a pergunta útil não é "estou certo?", mas "como sei que estou certo?". Passou a registrar por escrito cada critério de decisão, transformando-os em regras testáveis.\n\nDessa prática nasceram tanto a estratégia de portfólio que buscava desempenho em qualquer cenário econômico quanto a cultura interna da empresa, baseada em transparência radical — reuniões gravadas, críticas diretas e avaliação pública, modelo tão elogiado quanto contestado. A Bridgewater tornou-se o maior fundo de hedge do mundo. Dalio publicou seus critérios em Princípios, em 2017, e deixou o controle da empresa em 2022.'
  },

  {
    id: 'churchill',
    author: 'Winston Churchill',
    cat: 'lideranca',
    profiles: ['politicos', 'lideres', 'literatura'],
    origin: 'europeus',
    role: 'Estadista britânico (1874–1965)',
    why: 'Foi considerado acabado politicamente aos sessenta e cinco anos — e então liderou a guerra.',
    title: 'Os anos no deserto',
    excerpt: 'Passou a década de 1930 isolado e ridicularizado por alertar sobre Hitler. Depois provou estar certo.',
    photo: 'Sir Winston Churchill - 19086236948.jpg',
    text: 'Winston Leonard Spencer Churchill nasceu no Palácio de Blenheim, filho de um político aristocrático e de uma americana rica. Foi um aluno fraco, reprovou três vezes no exame para a academia militar e cresceu praticamente ignorado pelo pai, que morreu quando ele tinha vinte anos.\n\nServiu como oficial e correspondente de guerra em Cuba, na Índia, no Sudão e na África do Sul, onde foi capturado pelos bôeres e escapou — feito que o tornou celebridade e o elegeu ao Parlamento aos vinte e cinco anos. Como Primeiro Lorde do Almirantado, foi o responsável pela desastrosa campanha de Galípoli, em 1915, que custou centenas de milhares de vidas. Demitiu-se, foi para as trincheiras da França como oficial e passou anos carregando aquele fracasso.\n\nNa década de 1930 ficou isolado: fora do governo, contrariando o próprio partido, alertava obsessivamente contra o rearmamento alemão numa Grã-Bretanha exausta e determinada a evitar outra guerra. Foi tratado como alarmista.\n\nTornou-se primeiro-ministro em maio de 1940, dias antes do colapso da França, quando a rendição parecia a única saída racional. Recusou negociar. Seus discursos daquele verão — sangue, esforço, lágrimas e suor; lutaremos nas praias; a mais bela hora — são creditados por historiadores como fator material na resistência britânica. Perdeu a eleição de 1945 semanas depois da vitória. Voltou ao poder em 1951. Recebeu o Nobel de Literatura em 1953 por sua obra histórica. Suas posições sobre o império e a Índia continuam sendo objeto de crítica severa.'
  },

  {
    id: 'lincoln',
    author: 'Abraham Lincoln',
    cat: 'politica',
    profiles: ['politicos', 'lideres'],
    origin: 'norteamericanos',
    role: 'Presidente americano (1809–1865)',
    why: 'Teve menos de um ano de escola formal e conduziu o país pela guerra que aboliu a escravidão.',
    title: 'A cabana e a emancipação',
    excerpt: 'Perdeu quase todas as eleições que disputou antes de chegar à Casa Branca.',
    photo: 'Abraham Lincoln O-77 matte collodion print.jpg',
    text: 'Abraham Lincoln nasceu numa cabana de madeira no Kentucky, filho de agricultores analfabetos ou quase. A mãe morreu quando ele tinha nove anos. Teve, somando tudo, menos de doze meses de escola formal; aprendeu lendo os poucos livros que conseguia pegar emprestado — a Bíblia, Shakespeare, Esopo, tratados de direito — à luz da lareira.\n\nTrabalhou como lenhador, balseiro no Mississippi, funcionário de armazém, agrimensor e chefe do correio local. Estudou direito sozinho e passou no exame da ordem. Foi eleito para a legislatura estadual de Illinois e para um mandato no Congresso, mas perdeu as duas disputas ao Senado, incluindo a de 1858, cujos debates com Stephen Douglas sobre a escravidão o projetaram nacionalmente apesar da derrota.\n\nEleito presidente em 1860, viu sete estados se separarem antes mesmo de sua posse. A guerra civil consumiu todo o seu mandato e cerca de seiscentos mil vidas. Lincoln entrou nela declarando que seu objetivo era preservar a União; em 1863 emitiu a Proclamação de Emancipação, e depois trabalhou pela aprovação da Décima Terceira Emenda, que aboliu a escravidão em todo o país.\n\nSofria de episódios depressivos profundos, documentados por amigos, e perdeu dois filhos — um deles, Willie, durante a presidência. Seu discurso em Gettysburg, de duzentas e setenta palavras e cerca de dois minutos, redefiniu o sentido da guerra. Foi assassinado em abril de 1865, cinco dias após a rendição confederada.'
  },

  {
    id: 'eleanor',
    author: 'Eleanor Roosevelt',
    cat: 'empoderamento',
    profiles: ['politicos', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Diplomata americana (1884–1962)',
    why: 'Presidiu a comissão que redigiu a Declaração Universal dos Direitos Humanos.',
    title: 'A primeira-dama que não quis o cargo',
    excerpt: 'Órfã, tímida e infeliz no casamento, tornou-se a mulher mais influente da política americana.',
    photo: 'Eleanor Roosevelt portrait 1933.jpg',
    text: 'Anna Eleanor Roosevelt nasceu numa família rica de Nova York e teve uma infância desoladora. A mãe, que a chamava de feia, morreu quando ela tinha oito anos; o pai, alcoólatra, morreu dois anos depois. Foi criada pela avó e enviada a um colégio na Inglaterra, onde uma diretora francesa a incentivou a pensar por conta própria — ela diria depois que aqueles foram os anos mais felizes de sua vida.\n\nCasou-se com o primo distante Franklin Delano Roosevelt aos vinte anos. Teve seis filhos. Em 1918 descobriu cartas que revelavam o caso do marido com sua secretária; o casamento sobreviveu como parceria política, não como intimidade. Quando Franklin foi atingido pela poliomielite em 1921, Eleanor passou a ser seus olhos e pernas públicos, viajando e discursando em seu lugar.\n\nComo primeira-dama, rompeu com tudo o que se esperava do papel: deu conferências de imprensa semanais só para mulheres jornalistas, forçando os jornais a contratá-las; escreveu uma coluna diária por vinte e seis anos; visitou minas de carvão e tropas em zonas de guerra. Defendeu direitos civis publicamente, renunciou a uma associação que impediu a cantora negra Marian Anderson de se apresentar e organizou o concerto alternativo no Lincoln Memorial.\n\nApós a morte do marido, Truman a nomeou delegada na ONU. Presidiu a comissão que redigiu a Declaração Universal dos Direitos Humanos, aprovada em 1948 — trabalho de negociação entre blocos ideológicos que ela conduziu por quase dois anos. Morreu aos 78 anos.'
  },

  {
    id: 'ruibarbosa',
    author: 'Rui Barbosa',
    cat: 'politica',
    profiles: ['politicos', 'literatura'],
    origin: 'brasileiros',
    role: 'Jurista e político brasileiro (1849–1923)',
    why: 'Redigiu a primeira Constituição republicana e defendeu nações pequenas em Haia contra as potências.',
    title: 'A águia de Haia',
    excerpt: 'Abolicionista, jornalista e jurista, foi a voz que exigiu igualdade entre países grandes e pequenos.',
    photo: 'Ruy Barbosa 1913.jpg',
    text: 'Rui Barbosa de Oliveira nasceu em Salvador, filho de um médico e político. Formou-se em Direito em São Paulo e voltou à Bahia como jornalista e advogado. Ainda jovem tornou-se uma das vozes mais ativas do abolicionismo e da campanha republicana, escrevendo com uma erudição e um vocabulário que já naquela época impressionavam e cansavam.\n\nCom a proclamação da República, foi ministro da Fazenda do governo provisório e principal redator da Constituição de 1891, que instituiu o federalismo, o presidencialismo e a separação entre Igreja e Estado no Brasil. Sua política monetária expansionista, conhecida como Encilhamento, gerou uma bolha especulativa e uma crise inflacionária que marcaria negativamente sua avaliação como gestor.\n\nEm 1907 chefiou a delegação brasileira à Segunda Conferência de Paz de Haia. Ali sustentou, contra a proposta das grandes potências de organizar a corte internacional segundo o poder de cada país, o princípio da igualdade jurídica entre todos os Estados soberanos. A tese prevaleceu no essencial e lhe rendeu o apelido de Águia de Haia.\n\nCandidatou-se três vezes à presidência e perdeu todas, incluindo a Campanha Civilista de 1910, quando percorreu o país fazendo comícios contra a candidatura militar — algo inédito no Brasil. Defendeu presos políticos, o habeas corpus e a liberdade de imprensa. Sua Oração aos Moços, escrita para uma turma de formandos que ele não pôde paraninfar por doença, é lida até hoje. Reuniu uma das maiores bibliotecas particulares do país. Morreu aos 74 anos.'
  },

  {
    id: 'bolivar',
    author: 'Simón Bolívar',
    cat: 'politica',
    profiles: ['lideres', 'politicos', 'ativistas'],
    origin: 'latinos',
    role: 'Militar e estadista venezuelano (1783–1830)',
    why: 'Libertou seis países do domínio espanhol e morreu pobre, exilado e derrotado politicamente.',
    title: 'O Libertador',
    excerpt: 'Órfão e riquíssimo aos nove anos, gastou a fortuna e a vida inteira na independência da América.',
    photo: 'Simón Bolívar 3.jpg',
    text: 'Simón José Antonio de la Santísima Trinidad Bolívar y Palacios nasceu em Caracas, herdeiro de uma das famílias mais ricas da Venezuela colonial. Perdeu o pai aos três anos e a mãe aos nove. Foi criado por tios e por preceptores, entre eles Simón Rodríguez, que lhe ensinou Rousseau e o levou a percorrer a Europa a pé.\n\nCasou-se aos dezoito anos com María Teresa, que morreu de febre amarela oito meses depois. Bolívar jamais se casou de novo e disse que, se ela tivesse vivido, ele teria sido apenas um fazendeiro. Em Roma, aos vinte e dois anos, fez sobre o Monte Sacro o juramento de não descansar até libertar a América do domínio espanhol.\n\nA campanha durou quase duas décadas, com derrotas devastadoras e exílios. Em 1819 realizou a travessia dos Andes com um exército maltrapilho por passagens a mais de quatro mil metros, surpreendendo os espanhóis pela retaguarda e vencendo em Boyacá. Seguiram-se Carabobo, Pichincha, Junín e Ayacucho. Das campanhas nasceram Venezuela, Colômbia, Equador, Panamá, Peru e a Bolívia, que adotou seu nome.\n\nSeu projeto político — a Grã-Colômbia, uma federação sul-americana capaz de resistir às potências — desmoronou em disputas regionais. Bolívar tornou-se cada vez mais autoritário na tentativa de mantê-la unida, sofreu um atentado e renunciou em 1830. Morreu meses depois, aos 47 anos, tuberculoso e sem recursos, a caminho de um exílio na Europa que não chegou a fazer.'
  },

  {
    id: 'malcolmx',
    author: 'Malcolm X',
    cat: 'politica',
    profiles: ['ativistas', 'lideres'],
    origin: 'norteamericanos',
    role: 'Ativista americano (1925–1965)',
    why: 'Saiu da prisão alfabetizando-se com um dicionário e virou a voz mais incômoda dos direitos civis.',
    title: 'A transformação constante',
    excerpt: 'Mudou de nome e de posição várias vezes — inclusive no último ano, o que lhe custou a vida.',
    photo: 'Malcolm X NYWTS 2a.jpg',
    text: 'Malcolm Little nasceu em Omaha, Nebraska. O pai, pastor e seguidor de Marcus Garvey, morreu quando ele tinha seis anos, atropelado por um bonde em circunstâncias que a família sempre atribuiu a supremacistas brancos. A mãe foi internada num hospital psiquiátrico e os oito filhos, separados entre lares adotivos. Um professor lhe disse que ser advogado não era objetivo realista para um menino negro; Malcolm largou a escola.\n\nMudou-se para Boston e Nova York, entrou na criminalidade e foi preso aos vinte anos, condenado a dez anos. Na prisão, começou a copiar o dicionário à mão, página por página, para aprender palavras, e leu tudo o que a biblioteca oferecia. Converteu-se à Nação do Islã e trocou o sobrenome por X, marcando o nome africano perdido.\n\nSolto em 1952, tornou-se o principal porta-voz da organização, que cresceu de algumas centenas para dezenas de milhares de membros. Sua retórica — separatismo negro, autodefesa, recusa da integração — contrastava frontalmente com a de Martin Luther King e assustava a América branca.\n\nEm 1964 rompeu com a Nação do Islã, ao descobrir a conduta pessoal de seu líder e por divergências políticas. Fez a peregrinação a Meca, onde conviveu com muçulmanos de todas as cores e reviu publicamente sua posição sobre raça, adotando o nome el-Hajj Malik el-Shabazz. Passou a defender uma luta internacional por direitos humanos. Foi assassinado a tiros em Nova York em fevereiro de 1965, aos 39 anos, semanas após o incêndio de sua casa.'
  },

  {
    id: 'bellhooks',
    author: 'bell hooks',
    cat: 'educacao',
    profiles: ['ativistas', 'educadores', 'literatura'],
    origin: 'norteamericanos',
    role: 'Escritora e educadora americana (1952–2021)',
    why: 'Escreveu o nome em minúsculas para deslocar o foco da autora para as ideias.',
    title: 'Ensinar a transgredir',
    excerpt: 'Publicou o primeiro livro aos dezenove anos e passou a vida ligando raça, gênero e classe.',
    photo: 'Bellhooks.jpg',
    text: 'Gloria Jean Watkins nasceu em Hopkinsville, no Kentucky, filha de um zelador e de uma empregada doméstica, numa família de sete filhos. Estudou em escolas segregadas na infância e viveu a integração forçada como perda: perdeu professoras negras que a tratavam como capaz e passou a conviver com professores que não a viam.\n\nAdotou como nome literário o da bisavó materna, Bell Blair Hooks, e escreveu-o em minúsculas — explicando que queria que a atenção recaísse sobre a substância dos livros, não sobre quem os assinava.\n\nComeçou a escrever E Não Sou Eu uma Mulher? aos dezenove anos, ainda na graduação em Stanford. Publicado em 1981, o livro argumentava que o feminismo dominante falava por mulheres brancas de classe média e que o movimento negro falava sobretudo por homens, deixando as mulheres negras num vão onde nenhum dos dois as via. Essa análise cruzada antecipou boa parte do que se chamaria depois de interseccionalidade.\n\nEscreveu mais de trinta livros, sobre educação, amor, masculinidade, cultura pop e cinema, sempre em prosa deliberadamente acessível — recusava o jargão acadêmico por considerá-lo uma forma de exclusão. Em Ensinando a Transgredir, de 1994, defendeu a sala de aula como espaço de liberdade e criticou a ideia de que o professor deva ser um transmissor neutro. Lecionou em Yale, Oberlin e no City College, e voltou ao Kentucky para ensinar numa pequena universidade da região onde nasceu. Morreu aos 69 anos.'
  },

  {
    id: 'chimamanda',
    author: 'Chimamanda Ngozi Adichie',
    cat: 'empoderamento',
    profiles: ['literatura', 'ativistas'],
    origin: 'asiaafrica',
    role: 'Escritora nigeriana (1977–)',
    why: 'Sua palestra sobre o perigo da história única virou uma das mais vistas do mundo.',
    title: 'Contra a história única',
    excerpt: 'Cresceu numa casa que fora de Chinua Achebe e virou a voz literária mais influente da África contemporânea.',
    photo: 'Chimamanda Ngozi Adichie (cropped).jpg',
    text: 'Chimamanda Ngozi Adichie nasceu em Enugu e cresceu em Nsukka, no campus da Universidade da Nigéria, onde o pai era professor de estatística e a mãe, a primeira mulher a ocupar o cargo de secretária da instituição. A família morou numa casa que antes pertencera ao escritor Chinua Achebe.\n\nCresceu lendo livros britânicos e americanos e, por isso mesmo, escrevendo na infância histórias povoadas de personagens brancos de olhos azuis que brincavam na neve e bebiam cerveja de gengibre — coisas que ela nunca tinha visto. Só ao descobrir Achebe percebeu que gente como ela também podia existir na literatura. Essa experiência daria origem à sua palestra mais conhecida.\n\nComeçou medicina em Nsukka e desistiu, mudando-se aos dezenove anos para os Estados Unidos, onde estudou comunicação e ciência política. Publicou Hibisco Roxo em 2003, Meio Sol Amarelo em 2006 — sobre a guerra de Biafra, que matou seus dois avôs — e Americanah em 2013, sobre raça, cabelo e o que significa tornar-se negra ao emigrar.\n\nSuas duas palestras no TED tiveram alcance massivo: O Perigo de uma História Única, de 2009, e Sejamos Todos Feministas, de 2012, transformada em livro e distribuída a todos os estudantes de dezesseis anos da Suécia. Trechos foram sampleados por Beyoncé. Divide o tempo entre a Nigéria e os Estados Unidos e mantém posições públicas que geram controvérsia, defendendo o direito ao desacordo e criticando o que considera intolerância dentro dos próprios movimentos progressistas.'
  },

  {
    id: 'zumbi',
    author: 'Zumbi dos Palmares',
    cat: 'politica',
    profiles: ['lideres', 'ativistas'],
    origin: 'brasileiros',
    role: 'Líder quilombola (1655–1695)',
    why: 'Comandou por quase duas décadas o maior território livre da América colonial.',
    title: 'O último líder de Palmares',
    excerpt: 'Nasceu livre num quilombo, foi criado por um padre, voltou aos quinze anos e resistiu até o fim.',
    photo: 'Zumbi dos Palmares - Antônio Parreiras.jpg',
    text: 'Zumbi nasceu no Quilombo dos Palmares, na Serra da Barriga, região da atual Alagoas — um conjunto de povoados formado por pessoas fugidas da escravidão que chegou a abrigar dezenas de milhares de habitantes e resistiu por quase um século a expedições holandesas e portuguesas.\n\nAinda bebê, foi capturado numa incursão e entregue ao padre António Melo, que o batizou de Francisco e o ensinou a ler, escrever, latim e português. Aos quinze anos fugiu e voltou a Palmares, retomando o nome Zumbi.\n\nDestacou-se como estrategista militar. Quando, em 1678, o líder Ganga Zumba aceitou um acordo de paz com o governador de Pernambuco que previa liberdade apenas para os nascidos no quilombo e a transferência da comunidade para outro vale, Zumbi rompeu. Considerava o acordo uma rendição, já que deixava na escravidão todos os que haviam fugido. A divisão terminou com a morte de Ganga Zumba, e Zumbi assumiu a liderança.\n\nResistiu por mais quinze anos. Palmares só caiu em 1694, após uma campanha de meses conduzida pelo bandeirante paulista Domingos Jorge Velho, com artilharia e mais de nove mil homens. Zumbi escapou ferido e sobreviveu ainda quase dois anos escondido, até ser traído por um antigo companheiro. Foi morto em 20 de novembro de 1695; sua cabeça foi exposta em praça pública no Recife para desmentir a crença popular de que era imortal. A data tornou-se o Dia da Consciência Negra e, em 2023, feriado nacional no Brasil.'
  },

  {
    id: 'maathai',
    author: 'Wangari Maathai',
    cat: 'motivacao',
    profiles: ['ativistas', 'cientistas'],
    origin: 'asiaafrica',
    role: 'Bióloga e ativista queniana (1940–2011)',
    why: 'Plantou mais de trinta milhões de árvores e foi a primeira africana a ganhar o Nobel da Paz.',
    title: 'O movimento do cinturão verde',
    excerpt: 'Foi espancada e presa por plantar árvores — porque plantar árvores era, ali, um ato político.',
    photo: 'Wangari Maathai in Nairobi.jpg',
    text: 'Wangari Muta Maathai nasceu numa aldeia rural do Quênia, filha de camponeses kikuyu. Sua irmã convenceu a família a mandá-la à escola, o que era incomum para meninas. Foi uma das centenas de jovens quenianos selecionados para estudar nos Estados Unidos num programa apoiado por John F. Kennedy. Formou-se em biologia e, em 1971, tornou-se a primeira mulher da África Oriental e Central a obter um doutorado.\n\nDe volta ao Quênia, virou também a primeira mulher a chefiar um departamento universitário no país. Ouvindo mulheres do campo falarem sobre falta de lenha, água limpa e alimento, percebeu que os problemas convergiam para o desmatamento. Em 1977 fundou o Movimento Cinturão Verde, que pagava pequenas quantias a mulheres rurais por cada muda que sobrevivesse.\n\nO que parecia um projeto ambiental tornou-se enfrentamento político. As terras estavam sendo distribuídas a aliados do regime de Daniel arap Moi; Maathai bloqueou a construção de um arranha-céu num parque público de Nairóbi e liderou greves de fome por presos políticos. Foi presa várias vezes, espancada até a inconsciência numa manifestação e chamada publicamente de louca por autoridades. O marido pediu divórcio alegando que ela era teimosa demais para uma mulher.\n\nCom a redemocratização, foi eleita deputada com quase todos os votos de seu distrito e nomeada vice-ministra do Meio Ambiente. Recebeu o Nobel da Paz em 2004 — a primeira mulher africana a receber o prêmio — pela ligação entre meio ambiente, democracia e paz. Mais de trinta milhões de árvores foram plantadas. Morreu aos 71 anos.'
  },

  {
    id: 'freud',
    author: 'Sigmund Freud',
    cat: 'autorreconhecimento',
    profiles: ['psicologos', 'cientistas'],
    origin: 'europeus',
    role: 'Neurologista austríaco (1856–1939)',
    why: 'Inventou a psicanálise ouvindo pacientes que a medicina de sua época mandava calar.',
    title: 'A escuta como método',
    excerpt: 'Fugiu de Viena aos 82 anos, já com câncer, dias antes de a Gestapo fechar seu consultório.',
    photo: 'Sigmund Freud, by Max Halberstadt (cropped).jpg',
    text: 'Sigismund Schlomo Freud nasceu em Freiberg, na atual República Tcheca, numa família judaica de comerciantes de lã que se mudou para Viena quando ele tinha três anos. Era o filho mais velho e favorito de uma mãe muito mais jovem que o pai, e a família investiu nele: enquanto os irmãos dividiam quartos, ele teve um só para estudar.\n\nFormou-se em medicina e especializou-se em neurologia. Passou uma temporada em Paris com Jean-Martin Charcot, observando o uso da hipnose em pacientes histéricas, e voltou convencido de que os sintomas tinham origem psíquica. Com Josef Breuer, publicou os Estudos sobre a Histeria em 1895; a paciente Anna O. chamou o processo de "cura pela fala".\n\nFreud substituiu a hipnose pela associação livre e formulou a ideia de um inconsciente ativo, que produz sonhos, lapsos e sintomas. A Interpretação dos Sonhos, de 1899, vendeu poucas centenas de exemplares nos primeiros anos. Aos poucos formou-se um círculo em torno dele — e as rupturas se sucederam, com Adler, com Jung.\n\nFumava cerca de vinte charutos por dia e desenvolveu câncer de mandíbula em 1923, submetendo-se a mais de trinta cirurgias nos dezesseis anos seguintes. Com a anexação da Áustria em 1938, seus livros foram queimados e sua filha Anna, interrogada pela Gestapo. Amigos e a princesa Marie Bonaparte pagaram para tirá-lo do país. Morreu em Londres no ano seguinte, aos 83 anos. Quatro de suas irmãs morreram em campos de extermínio.'
  },

  {
    id: 'fromm',
    author: 'Erich Fromm',
    cat: 'amor',
    profiles: ['psicologos', 'filosofos'],
    origin: 'europeus',
    role: 'Psicanalista alemão (1900–1980)',
    why: 'Argumentou que amar é uma arte que se aprende, não um acaso que acontece.',
    title: 'O amor como prática',
    excerpt: 'Fugiu do nazismo e passou a vida estudando por que pessoas comuns aderem a regimes autoritários.',
    photo: 'Erich Fromm 1974.jpg',
    text: 'Erich Seligmann Fromm nasceu em Frankfurt, filho único de uma família judaica ortodoxa. Descreveu os pais como neuróticos e a infância como tensa. Dois acontecimentos o marcaram na juventude: o suicídio de uma jovem amiga da família, aos vinte e poucos anos, logo após a morte do pai — episódio que o levou a querer entender o comportamento humano — e a eclosão da Primeira Guerra, quando viu pessoas equilibradas serem tomadas por fanatismo nacionalista da noite para o dia.\n\nEstudou sociologia e psicanálise, aproximou-se da Escola de Frankfurt e combinou Marx e Freud numa análise do caráter social. Emigrou para os Estados Unidos em 1934, fugindo do nazismo.\n\nEm 1941 publicou O Medo à Liberdade, argumentando que a liberdade moderna, ao dissolver os vínculos tradicionais, produz isolamento e ansiedade — e que muitos preferem entregá-la a uma autoridade que decida por eles. Era uma tentativa de explicar por que milhões apoiaram o nazismo sem serem monstros.\n\nA Arte de Amar, de 1956, tornou-se seu livro mais lido. A tese é simples e desconfortável: as pessoas tratam o amor como uma questão de encontrar o objeto certo, quando é uma questão de desenvolver a própria capacidade — cuidado, responsabilidade, respeito e conhecimento, praticados com a disciplina de qualquer outra arte. Fromm foi ativista antinuclear, participou da fundação de organizações pela paz e viveu seus últimos anos no México e na Suíça. Morreu aos 79 anos.'
  },

  {
    id: 'kahneman',
    author: 'Daniel Kahneman',
    cat: 'manipulacao',
    profiles: ['psicologos', 'economistas'],
    origin: 'europeus',
    role: 'Psicólogo israelense (1934–2024)',
    why: 'Ganhou o Nobel de Economia sem nunca ter feito um curso de economia.',
    title: 'Os dois sistemas',
    excerpt: 'Sobreviveu escondido na França ocupada e demonstrou que a mente humana erra de formas previsíveis.',
    photo: 'Daniel KAHNEMAN.jpg',
    text: 'Daniel Kahneman nasceu em Tel Aviv por acaso, durante uma visita da mãe, e cresceu em Paris. A família era de judeus lituanos; o pai, químico-chefe de uma fábrica de cosméticos. Durante a ocupação nazista viveram escondidos, mudando de esconderijo. Kahneman contava um episódio da infância: voltando para casa após o toque de recolher, com a estrela amarela virada para dentro, cruzou com um oficial da SS que o pegou no colo, mostrou-lhe a foto de um filho e lhe deu dinheiro. Aquilo o convenceu, aos sete anos, de que as pessoas são complicadas.\n\nO pai morreu em 1944; a família emigrou para a Palestina em 1948. Kahneman serviu no exército israelense montando sistemas de avaliação psicológica de recrutas — trabalho que o confrontou com a distância entre entrevistas confiantes e previsões ruins.\n\nA parceria decisiva foi com Amos Tversky, a partir de 1969. Juntos demonstraram que as pessoas não decidem como o modelo econômico supunha: usam atalhos mentais que produzem erros sistemáticos, sentem perdas com peso muito maior que ganhos equivalentes e mudam de escolha conforme a pergunta é formulada. A teoria do prospecto, de 1979, fundou a economia comportamental.\n\nTversky morreu em 1996. Kahneman recebeu o Nobel de Economia em 2002 e dedicou o prêmio à parceria. Em 2011 publicou Rápido e Devagar, sintetizando décadas de pesquisa nos dois sistemas de pensamento — o intuitivo e o deliberado. Foi também dos primeiros a reconhecer publicamente que parte da literatura que citara não resistiu a replicações. Morreu aos 90 anos.'
  },

  {
    id: 'vangogh',
    author: 'Vincent van Gogh',
    cat: 'dificeis',
    profiles: ['artistas'],
    origin: 'europeus',
    role: 'Pintor holandês (1853–1890)',
    why: 'Pintou cerca de novecentos quadros em dez anos e vendeu pouquíssimos em vida.',
    title: 'Dez anos e novecentos quadros',
    excerpt: 'Começou a pintar aos vinte e sete, depois de fracassar como marchand, professor e pastor.',
    photo: 'Vincent van Gogh - Self-Portrait - Google Art Project (454045).jpg',
    text: 'Vincent Willem van Gogh nasceu em Zundert, na Holanda, filho de um pastor protestante. Recebeu o nome de um irmão natimorto exatamente um ano antes. Aos dezesseis anos entrou como aprendiz numa firma de comércio de arte, onde trabalhou seis anos até ser demitido por dizer aos clientes o que realmente achava das obras.\n\nTentou ser professor na Inglaterra, depois livreiro, depois estudou teologia e falhou nos exames. Foi enviado como missionário leigo a uma região mineradora pobre da Bélgica, onde levou o evangelho tão literalmente — dormindo em palha, doando as roupas — que a Igreja o dispensou por excesso de zelo. Foi ali, aos vinte e sete anos, sem nada mais a tentar, que começou a desenhar.\n\nPintou por dez anos. As primeiras obras são escuras e camponesas, como Os Comedores de Batatas. Em Paris, conheceu os impressionistas e sua paleta explodiu. Em Arles, no sul da França, produziu numa velocidade febril: girassóis, o quarto, o café noturno. Convidou Gauguin a morar com ele; a convivência terminou em crise, e Van Gogh cortou parte da própria orelha.\n\nInternou-se voluntariamente no hospício de Saint-Rémy, onde pintou A Noite Estrelada olhando pela janela do quarto. Sustentou-se a vida inteira com o dinheiro do irmão Theo, marchand, a quem escreveu mais de seiscentas cartas que hoje são leitura essencial sobre seu processo. Morreu aos 37 anos, de um tiro no peito. Theo morreu seis meses depois. Foi a viúva de Theo, Johanna, quem organizou e divulgou a obra que o tornaria célebre.'
  },

  {
    id: 'chaplin',
    author: 'Charles Chaplin',
    cat: 'felicidade',
    profiles: ['artistas'],
    origin: 'europeus',
    role: 'Cineasta e ator britânico (1889–1977)',
    why: 'Cresceu em asilos de indigentes e criou o personagem mais reconhecido do cinema mundial.',
    title: 'O vagabundo',
    excerpt: 'Foi expulso dos Estados Unidos por suas posições políticas e voltou vinte anos depois para receber um Oscar.',
    photo: 'Charlie Chaplin portrait.jpg',
    text: 'Charles Spencer Chaplin nasceu em Londres, filho de artistas de music-hall. O pai, alcoólatra, abandonou a família e morreu aos 38 anos. A mãe perdeu a voz e depois a sanidade, sendo internada repetidamente. Chaplin e o meio-irmão Sydney passaram a infância entre asilos para indigentes e instituições para crianças pobres. Ele subiu ao palco pela primeira vez aos cinco anos, substituindo a mãe quando a voz dela falhou em cena.\n\nEntrou numa companhia de pantomima e viajou aos Estados Unidos, onde foi contratado pelo cinema em 1913. No ano seguinte, ao improvisar um figurino num estúdio — calças largas, casaco apertado, chapéu-coco, bengala e bigode —, criou o Vagabundo, personagem que se tornaria a imagem mais reconhecida do planeta.\n\nEm poucos anos passou a escrever, dirigir, produzir, montar e compor a trilha dos próprios filmes, e em 1919 cofundou a United Artists para controlar a distribuição. Vieram O Garoto, Em Busca do Ouro, Luzes da Cidade, Tempos Modernos — este uma crítica direta à industrialização e ao desemprego, feito quase mudo quando o som já dominava.\n\nEm 1940 fez O Grande Ditador, sátira a Hitler produzida antes da entrada americana na guerra, encerrada por um discurso pela humanidade que é seu primeiro texto falado no cinema. Na era McCarthy, foi acusado de simpatias comunistas e teve o visto de reentrada cancelado em 1952, enquanto viajava. Viveu na Suíça por vinte anos. Voltou em 1972 para receber um Oscar honorário, aplaudido de pé por doze minutos.'
  },

  {
    id: 'tarsila',
    author: 'Tarsila do Amaral',
    cat: 'autorreconhecimento',
    profiles: ['artistas'],
    origin: 'brasileiros',
    role: 'Pintora brasileira (1886–1973)',
    why: 'Pintou o quadro que deu origem ao movimento antropofágico e definiu a arte moderna brasileira.',
    title: 'A cor que faltava',
    excerpt: 'Filha de fazendeiros, estudou em Paris e voltou disposta a pintar o Brasil com as cores que a chamavam de caipira.',
    photo: 'Tarsila do Amaral, 1922.jpg',
    text: 'Tarsila do Amaral nasceu numa fazenda em Capivari, interior de São Paulo, filha de um cafeicultor abastado. Teve educação europeia, estudou em Barcelona e casou-se cedo, separando-se em seguida — algo raro para uma mulher de sua classe naquela época. Só começou a estudar arte seriamente aos trinta anos.\n\nFoi para Paris em 1920 e estudou com pintores ligados ao cubismo, entre eles Fernand Léger. Estava fora do Brasil durante a Semana de Arte Moderna de 1922, e se juntou ao movimento ao voltar, formando com Oswald de Andrade, Mário de Andrade, Anita Malfatti e Menotti del Picchia o Grupo dos Cinco.\n\nDecidiu pintar o Brasil com as cores que aprendera a considerar feias: o azul, o rosa, o violeta e o amarelo das casas caipiras de sua infância. A fase Pau-Brasil, iniciada em 1924 após uma viagem às cidades históricas de Minas, trouxe favelas, trens, palmeiras e maquinário em composições geométricas e luminosas.\n\nEm 1928 pintou Abaporu — palavra tupi para "homem que come gente" — como presente de aniversário para Oswald. O quadro, com sua figura de pé enorme e cabeça pequena, levou Oswald a escrever o Manifesto Antropófago, propondo que a cultura brasileira devorasse as influências estrangeiras e as transformasse em algo próprio. Depois da quebra de 1929, Tarsila perdeu a fortuna da família, trabalhou como funcionária pública e passou por uma fase de pintura social. O Abaporu foi vendido e hoje pertence a um museu argentino. Ela morreu aos 86 anos.'
  },

  {
    id: 'davinci',
    author: 'Leonardo da Vinci',
    cat: 'reflexao',
    profiles: ['artistas', 'cientistas'],
    origin: 'europeus',
    role: 'Artista e inventor italiano (1452–1519)',
    why: 'Filho ilegítimo sem educação formal em latim, tornou-se o símbolo da curiosidade humana.',
    title: 'Os cadernos inacabados',
    excerpt: 'Deixou milhares de páginas de anotações, projetos e perguntas — e pouquíssimos quadros terminados.',
    photo: 'Leonardo self.jpg',
    text: 'Leonardo nasceu perto da vila de Vinci, na Toscana, filho ilegítimo de um tabelião e de uma jovem camponesa. A condição o excluiu tanto da profissão do pai quanto da universidade, onde se ensinava em latim — língua que ele estudaria sozinho já adulto e sempre com dificuldade. Chamava a si mesmo de "homem sem letras" e dizia que aprendia pela experiência.\n\nAos catorze anos entrou como aprendiz no ateliê de Verrocchio, em Florença, onde aprendeu pintura, escultura, metalurgia, mecânica e cenografia. Passou boa parte da carreira em Milão, a serviço de Ludovico Sforza, apresentando-se numa carta como engenheiro militar — a pintura aparecia no último parágrafo.\n\nDeixou cerca de vinte pinturas atribuídas com segurança, várias inacabadas. A Última Ceia começou a se deteriorar poucos anos após ser concluída, porque ele experimentou uma técnica que não funcionou. A Mona Lisa ficou com ele por dezesseis anos, sendo retocada até o fim da vida.\n\nO grosso de sua obra são os cadernos: mais de sete mil páginas sobrevivem, escritas em espelho, da direita para a esquerda. Neles há dissecações anatômicas de rigor inédito, estudos sobre o voo dos pássaros, projetos de máquinas, observações sobre a água, a luz e a geologia, listas de compras e perguntas soltas — por que o céu é azul, por que os olhos dos animais brilham no escuro. Quase nada foi publicado em vida, e a ciência teria de redescobrir muito daquilo por conta própria. Morreu na França, aos 67 anos, a serviço de Francisco I.'
  },

  {
    id: 'montessori',
    author: 'Maria Montessori',
    cat: 'educacao',
    profiles: ['educadores', 'cientistas'],
    origin: 'europeus',
    role: 'Médica e educadora italiana (1870–1952)',
    why: 'Foi uma das primeiras médicas da Itália e criou o método que mudou a educação infantil no mundo.',
    title: 'A casa das crianças',
    excerpt: 'Estudava anatomia sozinha à noite porque não podia dissecar cadáveres junto com os homens.',
    photo: 'Maria Montessori1913.jpg',
    text: 'Maria Tecla Artemisia Montessori nasceu em Chiaravalle, na Itália. Contrariando o pai, insistiu em estudar numa escola técnica masculina e depois em entrar na faculdade de medicina de Roma. Foi aceita e enfrentou hostilidade constante: por decoro, não podia dissecar cadáveres na presença de colegas homens, e por isso fazia o trabalho anatômico sozinha, à noite. Formou-se em 1896, entre as primeiras médicas do país.\n\nTrabalhou numa clínica psiquiátrica com crianças consideradas deficientes, mantidas em salas vazias. Concluiu que o problema era menos médico do que pedagógico: faltava-lhes o que manipular. Criou materiais didáticos e preparou alunos dessa instituição para exames públicos, nos quais tiveram desempenho igual ou superior ao de crianças ditas normais. Em vez de comemorar, ela perguntou o que estaria impedindo as outras.\n\nEm 1907 assumiu a Casa dei Bambini, num conjunto habitacional pobre de San Lorenzo, em Roma, com crianças de três a seis anos deixadas sozinhas o dia inteiro. Ali desenvolveu o método: mobiliário no tamanho da criança, materiais autocorretivos, livre escolha da atividade, períodos longos de concentração sem interrupção e um adulto que observa mais do que ensina.\n\nOs resultados atraíram visitantes do mundo inteiro. Montessori percorreu países formando professores. Recusou-se a colaborar com o fascismo italiano, que fechou suas escolas em 1934, e exilou-se — passando parte da Segunda Guerra na Índia, onde formou milhares de educadores. Foi indicada três vezes ao Nobel da Paz. Morreu na Holanda, aos 81 anos.'
  },

  {
    id: 'dewey',
    author: 'John Dewey',
    cat: 'educacao',
    profiles: ['educadores', 'filosofos'],
    origin: 'norteamericanos',
    role: 'Filósofo e educador americano (1859–1952)',
    why: 'Defendeu que se aprende fazendo e influenciou a escola pública em todo o mundo.',
    title: 'Aprender fazendo',
    excerpt: 'Montou uma escola-laboratório em Chicago para testar na prática o que a filosofia dizia em teoria.',
    photo: 'John Dewey in 1902.jpg',
    text: 'John Dewey nasceu em Burlington, Vermont, filho de um comerciante. Foi um estudante discreto e tímido, deu aulas em escolas rurais e doutorou-se em filosofia. Sua obra combinaria dois compromissos que raramente andam juntos: a filosofia acadêmica e a reforma prática das instituições.\n\nEm 1894 foi para a Universidade de Chicago, onde fundou dois anos depois a Escola-Laboratório — uma escola de verdade, com crianças de verdade, criada para testar hipóteses pedagógicas. Nela, o currículo partia de atividades concretas como cozinhar, tecer, construir e cultivar, das quais emergiam matemática, história, química e escrita conforme a necessidade real aparecia.\n\nSua crítica à escola tradicional era que ela tratava o aluno como recipiente passivo e separava o conhecimento da experiência. Para Dewey, pensar começa com um problema genuíno; sem problema, há apenas memorização. E como a democracia exige cidadãos capazes de deliberar, a escola deveria ser ela própria uma comunidade democrática, não um treinamento para a obediência.\n\nEscreveu mais de quarenta livros, entre eles Democracia e Educação, de 1916. Foi também um interventor público constante: ajudou a fundar a união americana de liberdades civis e a associação de professores universitários, defendeu o sufrágio feminino e presidiu, em 1937, no México, a comissão independente que investigou as acusações de Stálin contra Trótski, concluindo que os processos de Moscou eram fraudulentos. No Brasil, suas ideias chegaram por Anísio Teixeira, que estudou com ele. Morreu aos 92 anos.'
  },

  {
    id: 'pele',
    author: 'Pelé',
    cat: 'motivacao',
    profiles: ['atletas'],
    origin: 'brasileiros',
    role: 'Futebolista brasileiro (1940–2022)',
    why: 'Engraxate na infância, tricampeão mundial, marcou mais de mil gols e virou sinônimo do jogo.',
    title: 'O menino de Bauru',
    excerpt: 'Prometeu ao pai em choro que ganharia a Copa. Quatro anos depois, aos dezessete, ganhou.',
    photo: 'Pelé - Santos FC (cropped).jpg',
    text: 'Edson Arantes do Nascimento nasceu em Três Corações, Minas Gerais, e cresceu em Bauru, no interior paulista. O pai, Dondinho, foi jogador de futebol de carreira modesta interrompida por uma lesão de joelho. A família era pobre; o menino engraxava sapatos e vendia amendoim, e treinava com bolas de meia recheadas de jornal. O apelido "Pelé", que ele detestava no início, veio de uma brincadeira de colegas de escola.\n\nEm 1950, aos nove anos, viu o pai chorar com a derrota do Brasil na final da Copa e prometeu que ganharia uma para ele. Aos quinze foi levado ao Santos e estreou no time profissional aos dezesseis. Aos dezessete, disputou a Copa de 1958 na Suécia, marcou dois gols na final e chorou no ombro de um companheiro.\n\nGanhou também 1962, lesionado logo no início, e 1970 no México, com a seleção considerada por muitos a melhor de todos os tempos — único jogador tricampeão mundial. Pelo Santos, conquistou dois títulos mundiais interclubes e viajou o mundo em excursões. Marcou seu milésimo gol no Maracanã em 1969, e aproveitou a ocasião para pedir atenção às crianças pobres do país.\n\nEncerrou a carreira no Cosmos de Nova York, contribuindo para popularizar o futebol nos Estados Unidos. Foi Ministro dos Esportes do Brasil, e a lei que leva seu nome deu aos jogadores o direito de negociar o próprio passe ao fim do contrato. Foi criticado por posições consideradas acomodadas em relação ao regime militar. Morreu aos 82 anos, de câncer de cólon.'
  }
];

/* ================================================================
   FASE 4 — BIOGRAFIAS (lote C)
   Seleção a partir de levantamentos temáticos: mulheres na ciência,
   filósofos fundamentais, cânone literário luso-brasileiro e mundial.
   ================================================================ */
const STORIES_C = [
  /* ---------------- CIENTISTAS ---------------- */
  {
    id: 'franklin',
    author: 'Rosalind Franklin',
    cat: 'empoderamento',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Química britânica (1920–1958)',
    why: 'A foto que revelou a estrutura do DNA era dela — e o Nobel foi para outros três.',
    title: 'A Fotografia 51',
    excerpt: 'Morreu aos 37 anos sem saber que sua imagem havia sido mostrada a Watson e Crick sem sua permissão.',
    text: 'Rosalind Elsie Franklin nasceu em Londres, numa família judaica abastada que se opôs a que ela seguisse carreira científica. Formou-se em Cambridge e especializou-se em cristalografia de raios X em Paris, onde trabalhou com carvão e grafite. Em 1951 foi para o King\u2019s College de Londres estudar a estrutura do DNA, num ambiente hostil onde mulheres não podiam sequer usar a sala comum dos pesquisadores.\n\nEm maio de 1952 produziu a Fotografia 51, uma imagem de difração de nitidez inédita que revelava o padrão helicoidal da molécula. Sem o conhecimento dela, seu colega Maurice Wilkins mostrou a imagem a James Watson. Somada a um relatório interno com suas medidas, ela deu a Watson e Crick a peça que faltava. O artigo de 1953 na Nature mencionou o trabalho dela apenas de passagem. Franklin mudou-se para outro instituto, onde fez trabalho pioneiro sobre vírus, e morreu de câncer de ovário aos 37 anos — quatro anos antes do Nobel que os três homens dividiram e do qual, por regra, ela estaria excluída de qualquer modo.'
  },

  {
    id: 'mcclintock',
    author: 'Barbara McClintock',
    cat: 'motivacao',
    profiles: ['cientistas'],
    origin: 'norteamericanos',
    role: 'Geneticista americana (1902–1992)',
    why: 'Descobriu os genes saltadores em 1944 e esperou trinta e nove anos pelo Nobel.',
    title: 'Trinta anos de descrédito',
    excerpt: 'Parou de publicar porque a comunidade científica não acreditava nela. Estava certa.',
    text: 'Barbara McClintock nasceu em Connecticut. A mãe se opôs a que ela cursasse a universidade, temendo que ficasse "inadequada para o casamento"; o pai autorizou. Formou-se em botânica em Cornell e passou a vida estudando a genética do milho, mapeando cromossomos com uma precisão que a tornou, ainda jovem, uma das maiores autoridades do campo.\n\nNos anos 1940, observando padrões de cor nos grãos, concluiu que certos elementos genéticos mudavam de lugar no cromossomo e ligavam ou desligavam outros genes. Apresentou os resultados em 1951 e foi recebida com silêncio e, segundo seu relato, com incompreensão aberta. Parou de publicar sobre o tema em 1953 e continuou trabalhando sozinha por décadas. Só quando a biologia molecular desenvolveu ferramentas capazes de confirmar transposons em bactérias, nos anos 1970, o campo a alcançou. Recebeu o Nobel de Medicina em 1983, sozinha — caso raríssimo — aos 81 anos.'
  },

  {
    id: 'hopper',
    author: 'Grace Hopper',
    cat: 'lideranca',
    profiles: ['cientistas', 'lideres'],
    origin: 'norteamericanos',
    role: 'Cientista da computação americana (1906–1992)',
    why: 'Criou o primeiro compilador e ajudou a inventar a linguagem COBOL.',
    title: 'A almirante da computação',
    excerpt: 'Disseram-lhe que computadores só faziam contas. Ela provou que podiam entender palavras.',
    text: 'Grace Brewster Murray Hopper nasceu em Nova York e desmontava despertadores na infância para entender o mecanismo. Doutorou-se em matemática em Yale, algo raríssimo para mulheres em 1934. Com a entrada dos Estados Unidos na guerra, tentou se alistar na Marinha; foi recusada por idade e por ser leve demais. Insistiu, conseguiu dispensa das regras e foi designada ao projeto do computador Mark I em Harvard.\n\nEm 1952 desenvolveu o primeiro compilador — um programa que traduz instruções escritas por humanos em código de máquina. A ideia foi rejeitada de início: diziam-lhe que computadores só faziam aritmética. Ela persistiu, e daí saiu o FLOW-MATIC e depois o COBOL, linguagem que ainda roda sistemas bancários no mundo inteiro. Popularizou o termo "bug" ao registrar no diário uma mariposa presa num relé. Aposentou-se da Marinha aos 79 anos como contra-almirante, sendo então a oficial mais velha em serviço ativo.'
  },

  {
    id: 'meitner',
    author: 'Lise Meitner',
    cat: 'dificeis',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Física austríaca (1878–1968)',
    why: 'Explicou a fissão nuclear e foi deixada de fora do Nobel dado ao seu parceiro de trinta anos.',
    title: 'A explicação que veio do exílio',
    excerpt: 'Fugiu da Áustria anexada com dez marcos no bolso e resolveu, semanas depois, o enigma da fissão.',
    text: 'Lise Meitner nasceu em Viena, numa família judaica. Mulheres só foram admitidas nas universidades austríacas quando ela tinha vinte e três anos; doutorou-se em física em 1906, a segunda mulher da instituição. Em Berlim, trabalhou décadas com o químico Otto Hahn, inicialmente num porão porque não lhe permitiam entrar no laboratório principal.\n\nCom a anexação da Áustria em 1938, perdeu a proteção da cidadania e fugiu para a Suécia, levando quase nada. Meses depois, Hahn escreveu-lhe descrevendo um resultado incompreensível: urânio bombardeado produzia bário. Meitner, com o sobrinho Otto Frisch, fez o cálculo numa caminhada na neve e concluiu que o núcleo havia se partido, liberando energia — e cunhou o nome fissão. Hahn publicou sem incluí-la e recebeu sozinho o Nobel de Química em 1944. Meitner recusou trabalhar no projeto da bomba atômica. O elemento 109, meitnério, leva seu nome.'
  },

  {
    id: 'chienwu',
    author: 'Chien-Shiung Wu',
    cat: 'empoderamento',
    profiles: ['cientistas'],
    origin: 'asiaafrica',
    role: 'Física chinesa-americana (1912–1997)',
    why: 'Derrubou uma lei fundamental da física — e o Nobel foi para os dois teóricos.',
    title: 'A Primeira-Dama da Física',
    excerpt: 'Estudou numa escola que o próprio pai fundou para meninas, na China dos anos 1920.',
    text: 'Chien-Shiung Wu nasceu perto de Xangai. O pai, engenheiro e ativista, fundou uma das primeiras escolas para meninas da região — sem ela, sua filha provavelmente não teria estudado. Wu formou-se em física na Universidade Central Nacional e emigrou para os Estados Unidos em 1936, onde doutorou-se em Berkeley. Trabalhou no Projeto Manhattan resolvendo um problema crítico de enriquecimento de urânio.\n\nEm 1956, dois teóricos, Tsung-Dao Lee e Chen-Ning Yang, propuseram que a paridade — a simetria entre um fenômeno e sua imagem espelhada — poderia não se conservar em interações fracas. Ninguém sabia testar. Wu projetou e executou o experimento, com cobalto-60 resfriado quase ao zero absoluto, e mostrou que a natureza de fato distingue esquerda de direita. O resultado abalou a física. O Nobel de 1957 foi para Lee e Yang; Wu não foi incluída. Passou o resto da carreira também denunciando a exclusão de mulheres na ciência.'
  },

  {
    id: 'hipatia',
    author: 'Hipátia',
    cat: 'educacao',
    profiles: ['cientistas', 'filosofos', 'educadores'],
    origin: 'antiguidade',
    role: 'Matemática e filósofa grega (c. 360–415)',
    why: 'Dirigiu a escola neoplatônica de Alexandria e foi assassinada por uma multidão.',
    title: 'A última bibliotecária de Alexandria',
    excerpt: 'Ensinava astronomia e matemática a cristãos, pagãos e judeus, sem distinção — numa cidade em guerra religiosa.',
    text: 'Hipátia nasceu em Alexandria, filha do matemático Teão, o último diretor conhecido do Museu. Foi educada por ele e superou-o: escreveu comentários sobre a aritmética de Diofanto e as cônicas de Apolônio, e é creditada com aperfeiçoamentos no astrolábio e no hidrômetro. Tornou-se chefe da escola neoplatônica da cidade e dava aulas públicas sobre Platão e Aristóteles.\n\nSeus alunos vinham de todas as religiões e várias regiões do Mediterrâneo, e alguns se tornaram bispos cristãos que lhe escreviam com reverência. Alexandria, porém, vivia um conflito violento entre o prefeito imperial Orestes e o patriarca Cirilo. Hipátia era próxima de Orestes e, por isso, virou alvo de boatos. Em março de 415 foi arrancada de sua carruagem por uma turba e assassinada de forma brutal numa igreja. Sua morte é frequentemente tomada como marco simbólico do fim da tradição intelectual alexandrina.'
  },

  {
    id: 'katherinej',
    author: 'Katherine Johnson',
    cat: 'empoderamento',
    profiles: ['cientistas'],
    origin: 'norteamericanos',
    role: 'Matemática americana (1918–2020)',
    why: 'John Glenn se recusou a voar até que ela conferisse à mão os cálculos do computador.',
    title: 'As contas que levaram à Lua',
    excerpt: 'Trabalhava numa ala segregada da NASA e calculou a trajetória do primeiro americano em órbita.',
    text: 'Katherine Coleman Johnson nasceu na Virgínia Ocidental. Era tão adiantada que a escola do condado não tinha série para ela; a família mudava-se todo ano letivo para que pudesse estudar. Formou-se aos dezoito anos e foi uma das três pessoas negras escolhidas para integrar a pós-graduação estadual quando esta foi dessegregada.\n\nEntrou em 1953 no grupo de "computadores humanos" da NACA, futura NASA, numa ala reservada a mulheres negras, com refeitório e banheiros separados. Impôs-se pedindo para participar das reuniões de engenharia, das quais mulheres eram excluídas, com a pergunta de por que não podia ir. Calculou a trajetória do voo suborbital de Alan Shepard e as janelas de lançamento do voo orbital de John Glenn em 1962 — que exigiu que ela refizesse à mão, por dias, o que o computador eletrônico havia produzido, porque Glenn só confiaria depois disso. Trabalhou também na Apollo 11 e no resgate da Apollo 13. Recebeu a Medalha da Liberdade aos 97 anos.'
  },

  {
    id: 'goodall',
    author: 'Jane Goodall',
    cat: 'vida',
    profiles: ['cientistas', 'ativistas'],
    origin: 'europeus',
    role: 'Primatologista britânica (1934–)',
    why: 'Sem diploma, foi para a floresta e derrubou a ideia de que só humanos usam ferramentas.',
    title: 'Sessenta anos em Gombe',
    excerpt: 'Foi criticada por dar nomes aos chimpanzés em vez de números — e mudou a etologia.',
    text: 'Valerie Jane Morris-Goodall cresceu em Bournemouth, na Inglaterra, sonhando com a África a partir dos livros. Sem dinheiro para a universidade, trabalhou como secretária e garçonete até pagar a passagem para o Quênia, aos vinte e três anos. Lá procurou o paleoantropólogo Louis Leakey, que a contratou como assistente e depois a enviou à Tanzânia para estudar chimpanzés selvagens — justamente por ela não ter formação acadêmica que a enviesasse.\n\nEm 1960 instalou-se em Gombe. Meses depois observou um chimpanzé que ela chamara de David Greybeard descascando um talo de capim para pescar cupins. Ferramentas fabricadas por não humanos contrariavam a definição vigente de humanidade. Leakey respondeu que seria preciso redefinir ferramenta, redefinir homem ou aceitar chimpanzés como humanos. Goodall documentou também guerra, caça e adoção entre eles. Doutorou-se em Cambridge sem nunca ter feito graduação e dedicou as décadas seguintes à conservação.'
  },

  {
    id: 'turing',
    author: 'Alan Turing',
    cat: 'dificeis',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Matemático britânico (1912–1954)',
    why: 'Quebrou o código nazista, fundou a computação e foi condenado pelo próprio país por ser gay.',
    title: 'O código e a condenação',
    excerpt: 'Encurtou a guerra em anos e recebeu, como recompensa, castração química.',
    text: 'Alan Mathison Turing nasceu em Londres. Em 1936, aos vinte e quatro anos, publicou um artigo que resolvia um problema lógico de Hilbert introduzindo uma máquina abstrata capaz de executar qualquer procedimento definível — a máquina de Turing, fundamento teórico de todo computador que existe.\n\nDurante a guerra trabalhou em Bletchley Park, onde projetou a Bombe, máquina eletromecânica que quebrava as mensagens da Enigma alemã. Historiadores estimam que o trabalho da equipe encurtou o conflito em dois a quatro anos. Depois da guerra pensou sobre inteligência artificial e propôs o teste que leva seu nome. Em 1952, ao relatar um roubo em sua casa, revelou involuntariamente um relacionamento com outro homem e foi processado por "indecência grave". Escolheu o tratamento hormonal em vez da prisão. Perdeu a autorização de segurança. Morreu dois anos depois, aos 41, por envenenamento com cianeto. Recebeu perdão real póstumo em 2013.'
  },

  {
    id: 'newton',
    author: 'Isaac Newton',
    cat: 'reflexao',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Físico e matemático inglês (1643–1727)',
    why: 'Formulou as leis do movimento e da gravitação durante uma quarentena de peste.',
    title: 'O ano da peste',
    excerpt: 'A universidade fechou por causa de uma epidemia; ele voltou para a fazenda e inventou o cálculo.',
    text: 'Isaac Newton nasceu prematuro numa fazenda em Lincolnshire, três meses após a morte do pai. A mãe casou-se novamente e o deixou com a avó, abandono que ele registrou com amargura ainda adulto. Estudou em Cambridge, onde era um aluno discreto e endividado.\n\nEm 1665 a peste bubônica fechou a universidade. Newton voltou para casa e passou cerca de dois anos em isolamento. Nesse período desenvolveu o cálculo diferencial e integral, decompôs a luz branca com um prisma e formulou a hipótese de que a força que faz uma maçã cair é a mesma que mantém a Lua em órbita. Chamou aquele tempo de seu auge inventivo. Publicou os Principia apenas vinte anos depois, empurrado por Halley. Foi também mestre da Casa da Moeda, perseguindo falsificadores com rigor implacável, e dedicou mais páginas à alquimia e à teologia do que à física. Disputou ferozmente com Leibniz a autoria do cálculo.'
  },

  {
    id: 'galileu',
    author: 'Galileu Galilei',
    cat: 'dificeis',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Astrônomo italiano (1564–1642)',
    why: 'Apontou uma luneta para o céu e foi condenado a prisão domiciliar pelo que viu.',
    title: 'E, no entanto, ela se move',
    excerpt: 'Passou os últimos nove anos de vida preso em casa, cego, ditando sua obra mais importante.',
    text: 'Galileu Galilei nasceu em Pisa, filho de um músico e teórico da música que lhe ensinou a desconfiar da autoridade dos antigos. Abandonou o curso de medicina pela matemática. Em 1609, ao saber de uma luneta inventada na Holanda, construiu a sua própria com ampliação muito superior e a apontou para o céu.\n\nViu montanhas na Lua, manchas no Sol, as fases de Vênus e quatro corpos orbitando Júpiter. Cada observação contrariava o modelo aristotélico de céus perfeitos e imutáveis com a Terra ao centro. Publicou os resultados e ficou famoso em toda a Europa. Em 1633 foi julgado pela Inquisição por defender o sistema de Copérnico, obrigado a abjurar de joelhos e condenado à prisão domiciliar perpétua. Já velho e cego, ditou os Discursos sobre Duas Novas Ciências, contrabandeado para fora da Itália e publicado na Holanda — a obra que funda a física moderna. A Igreja reconheceu o erro em 1992.'
  },

  {
    id: 'tesla',
    author: 'Nikola Tesla',
    cat: 'motivacao',
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Engenheiro sérvio-americano (1856–1943)',
    why: 'Deu ao mundo a corrente alternada e morreu sozinho num quarto de hotel.',
    title: 'A guerra das correntes',
    excerpt: 'Rasgou o contrato que o teria feito bilionário para que sua invenção chegasse a todos.',
    text: 'Nikola Tesla nasceu numa aldeia do atual território croata, filho de um padre ortodoxo sérvio. Tinha memória visual extraordinária e dizia conseguir montar e testar máquinas inteiras na imaginação antes de construí-las. Emigrou para os Estados Unidos em 1884 com pouquíssimo dinheiro e uma carta de recomendação para Thomas Edison.\n\nOs dois romperam rapidamente: Edison defendia a corrente contínua, Tesla a alternada, que podia ser transmitida a longas distâncias. Associou-se a George Westinghouse e venceu a chamada guerra das correntes ao iluminar a Feira Mundial de Chicago em 1893 e ao construir a usina das Cataratas do Niágara. Quando a Westinghouse enfrentou dificuldades financeiras, Tesla rasgou o contrato de royalties que valeria uma fortuna, para que o projeto sobrevivesse. Patenteou centenas de invenções, incluindo bases do rádio e do controle remoto, e passou os últimos anos em hotéis de Nova York, endividado, alimentando pombos. Morreu aos 86 anos.'
  },

  {
    id: 'oswaldocruz',
    author: 'Oswaldo Cruz',
    cat: 'lideranca',
    profiles: ['cientistas'],
    origin: 'brasileiros',
    role: 'Médico sanitarista brasileiro (1872–1917)',
    why: 'Erradicou a febre amarela do Rio de Janeiro e enfrentou uma revolta popular por isso.',
    title: 'A cidade que ele limpou',
    excerpt: 'Foi chamado de tirano, virou alvo de motim e reduziu as mortes por febre amarela a quase zero.',
    text: 'Oswaldo Gonçalves Cruz nasceu em São Luís do Paraitinga, São Paulo, filho de médico. Formou-se aos vinte e dois anos e especializou-se no Instituto Pasteur, em Paris. Voltou ao Brasil quando o Rio de Janeiro era conhecido internacionalmente como porto pestilento: febre amarela, peste bubônica e varíola matavam milhares por ano e afastavam imigrantes e navios.\n\nEm 1903 tornou-se diretor-geral de Saúde Pública com poderes amplos. Criou brigadas que entravam em casas para eliminar focos de mosquito e ratos, e em 1904 conduziu a campanha de vacinação obrigatória contra a varíola. A combinação de método autoritário, desinformação e revolta social explodiu na Revolta da Vacina, com barricadas e mortos no centro da cidade. A lei foi suspensa, mas o trabalho sanitário continuou. Em poucos anos a febre amarela praticamente desapareceu do Rio. Fundou o instituto de Manguinhos que hoje leva seu nome. Morreu aos 44 anos.'
  },

  /* ---------------- FILÓSOFOS ---------------- */
  {
    id: 'espinosa',
    author: 'Baruch Spinoza',
    cat: 'filosofos',
    profiles: ['filosofos'],
    origin: 'europeus',
    role: 'Filósofo holandês (1632–1677)',
    why: 'Foi expulso da própria comunidade aos vinte e três anos e recusou cátedras para manter a liberdade.',
    title: 'O polidor de lentes',
    excerpt: 'Viveu de polir lentes para não dever nada a ninguém e escreveu ética como quem faz geometria.',
    text: 'Baruch Espinosa nasceu em Amsterdã, numa família de judeus portugueses que fugiram da Inquisição. Foi educado na escola da sinagoga e destinado ao comércio. Aos vinte e três anos recebeu o herem, a excomunhão mais severa já registrada por aquela comunidade, que proibia qualquer pessoa de falar com ele ou ler seus escritos. Nunca mais usou o nome Baruch, adotando Benedictus.\n\nRecusou a cátedra oferecida em Heidelberg para não comprometer sua liberdade de pensamento e sustentou-se polindo lentes de precisão para microscópios e telescópios — ofício que provavelmente contribuiu para a doença pulmonar que o mataria aos 44 anos. Sua Ética, publicada postumamente, é escrita em forma de teoremas e demonstrações e identifica Deus com a natureza inteira, sem providência nem milagres. Foi chamado de ateu por gerações e redescoberto por Goethe, Hegel e Einstein, que disse acreditar no Deus de Espinosa.'
  },

  {
    id: 'voltaire',
    author: 'Voltaire',
    cat: 'politica',
    profiles: ['filosofos', 'literatura'],
    origin: 'europeus',
    role: 'Escritor francês (1694–1778)',
    why: 'Foi preso na Bastilha duas vezes e transformou a defesa da tolerância em causa pública.',
    title: 'A pena contra o fanatismo',
    excerpt: 'Usou a fama literária para reabrir processos judiciais e inocentar condenados injustamente.',
    text: 'François-Marie Arouet nasceu em Paris, filho de um tabelião. Adotou o nome Voltaire aos vinte e quatro anos, durante a primeira das duas prisões na Bastilha — a primeira por versos satíricos contra o regente, a segunda após uma desavença com um nobre que mandou espancá-lo por criados. Exilou-se na Inglaterra, onde admirou a liberdade de imprensa e a tolerância religiosa, e voltou para escrever sobre isso.\n\nProduziu uma obra imensa: teatro, poesia, história, verbetes filosóficos e o conto Cândido. Sua contribuição mais concreta, porém, foi jurídica. No caso Calas, em 1762, um comerciante protestante foi torturado e executado sob acusação falsa de ter matado o próprio filho para impedir sua conversão ao catolicismo. Voltaire investigou, publicou o Tratado sobre a Tolerância e mobilizou a opinião europeia até conseguir a reabilitação póstuma. Repetiu o método em outros casos. Morreu aos 83 anos, celebrado em Paris depois de vinte e oito anos de exílio.'
  },

  {
    id: 'rousseau',
    author: 'Jean-Jacques Rousseau',
    cat: 'politica',
    profiles: ['filosofos', 'educadores'],
    origin: 'europeus',
    role: 'Filósofo genebrino (1712–1778)',
    why: 'Escreveu o livro que inspirou a Revolução Francesa e teve as próprias obras queimadas.',
    title: 'O contrato e a contradição',
    excerpt: 'Escreveu o tratado mais influente sobre educação e entregou os cinco filhos a um orfanato.',
    text: 'Jean-Jacques Rousseau nasceu em Genebra; a mãe morreu dias depois do parto. O pai o abandonou aos dez anos. Foi aprendiz de gravador, fugiu aos dezesseis e passou a juventude entre empregos precários, protetores e conversões religiosas de conveniência. Chegou a Paris quase sem nada e ganhou notoriedade aos trinta e sete anos ao vencer um concurso de ensaios argumentando que as ciências e as artes haviam corrompido os costumes.\n\nEm 1762 publicou o Contrato Social, com a tese de que a soberania pertence ao povo e é inalienável, e o Emílio, tratado sobre educação segundo a natureza da criança. Ambos foram condenados e queimados em Paris e em Genebra; ele passou anos foragido. A contradição que o persegue é conhecida: entregou seus cinco filhos a um asilo de expostos, fato que ele próprio relatou nas Confissões, livro que praticamente inventou a autobiografia moderna. Morreu aos 66 anos, e seus restos foram levados ao Panteão pela Revolução que ajudou a inspirar.'
  },

  {
    id: 'locke',
    author: 'John Locke',
    cat: 'politica',
    profiles: ['filosofos'],
    origin: 'europeus',
    role: 'Filósofo inglês (1632–1704)',
    why: 'Formulou a ideia de direitos naturais que aparece na Declaração de Independência americana.',
    title: 'A folha em branco',
    excerpt: 'Exilou-se na Holanda sob nome falso e voltou com os dois livros que fundaram o liberalismo.',
    text: 'John Locke nasceu em Somerset, filho de um advogado que lutou pelo Parlamento na guerra civil inglesa. Estudou em Oxford, onde se entediou com a filosofia escolástica e se voltou para a medicina e a química experimental. Tornou-se médico e secretário do conde de Shaftesbury, e por essa proximidade política acabou implicado em conspirações contra a Coroa. Fugiu para a Holanda em 1683, vivendo sob nome falso por cinco anos.\n\nVoltou com a Revolução Gloriosa e publicou, em 1689 e 1690, a Carta sobre a Tolerância, o Ensaio sobre o Entendimento Humano e os Dois Tratados sobre o Governo. Argumentou que a mente nasce sem ideias inatas, como papel em branco preenchido pela experiência; que todo indivíduo tem direito natural à vida, à liberdade e à propriedade; e que um governo que viola esse pacto pode ser legitimamente deposto. Jefferson tomou essas formulações quase literalmente. Locke também investiu na Royal African Company, contradição sobre a escravidão que a crítica moderna não deixa passar.'
  },

  {
    id: 'foucault',
    author: 'Michel Foucault',
    cat: 'manipulacao',
    profiles: ['filosofos'],
    origin: 'europeus',
    role: 'Filósofo francês (1926–1984)',
    why: 'Mostrou que o poder não está só no Estado: está na escola, no hospital e no olhar.',
    title: 'Vigiar e punir',
    excerpt: 'Estudou manicômios, prisões e clínicas para entender como as sociedades produzem o que chamam de normal.',
    text: 'Paul-Michel Foucault nasceu em Poitiers, filho de um cirurgião que queria vê-lo médico. Foi um estudante brilhante e atormentado; tentou o suicídio mais de uma vez na juventude, num período em que a homossexualidade era tratada como patologia — experiência que informa boa parte de sua obra. Formou-se em filosofia e psicologia e trabalhou em hospitais psiquiátricos antes de escrever sobre eles.\n\nEm História da Loucura, de 1961, mostrou que a fronteira entre razão e loucura é histórica, não natural. Em O Nascimento da Clínica, Vigiar e Punir e História da Sexualidade, desenvolveu a tese de que o poder moderno não age principalmente pela repressão, mas pela produção de saberes, categorias e vigilância que fazem as pessoas se disciplinarem sozinhas. Foi ativista pela reforma prisional e pelos direitos dos imigrantes. Morreu aos 57 anos, uma das primeiras figuras públicas francesas vitimadas pela aids.'
  },

  {
    id: 'agostinho',
    author: 'Santo Agostinho',
    cat: 'fe',
    profiles: ['filosofos', 'religiosos'],
    origin: 'asiaafrica',
    role: 'Teólogo norte-africano (354–430)',
    why: 'Escreveu a primeira autobiografia da tradição ocidental e moldou o cristianismo por mil anos.',
    title: 'A conversão no jardim',
    excerpt: 'Norte-africano, professor de retórica e pai solteiro, viveu trinta e um anos antes de acreditar.',
    text: 'Aurélio Agostinho nasceu em Tagaste, na atual Argélia, filho de um pai pagão e de Mônica, cristã devota. Estudou retórica em Cartago e fez carreira como professor em Roma e Milão. Viveu catorze anos com uma companheira de quem teve um filho, Adeodato, e passou quase uma década ligado ao maniqueísmo antes de romper com ele.\n\nA conversão, narrada nas Confissões, aconteceu em Milão, aos trinta e um anos, num jardim onde ouviu uma criança cantando "pegue e leia" e abriu ao acaso uma carta de Paulo. Voltou ao norte da África, tornou-se bispo de Hipona e escreveu uma obra imensa. As Confissões inauguraram a escrita da vida interior no Ocidente; A Cidade de Deus, escrita após o saque de Roma em 410, respondeu à acusação de que o cristianismo havia enfraquecido o império. Suas posições sobre pecado original, graça e livre-arbítrio moldaram a teologia cristã por um milênio. Morreu durante o cerco vândalo a Hipona.'
  },

  /* ---------------- LITERATURA ---------------- */
  {
    id: 'dostoievski',
    author: 'Fiódor Dostoiévski',
    cat: 'dificeis',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Escritor russo (1821–1881)',
    why: 'Foi levado ao pelotão de fuzilamento e recebeu o perdão no último instante.',
    title: 'Quatro anos na Sibéria',
    excerpt: 'Condenado à morte, perdoado no paredão e enviado a trabalhos forçados — voltou outro escritor.',
    text: 'Fiódor Mikhailovitch Dostoiévski nasceu em Moscou, filho de um médico severo de hospital para pobres. Formou-se engenheiro militar e abandonou a carreira ao estrear em literatura aos vinte e quatro anos. Em 1849 foi preso por participar de um círculo de intelectuais que lia textos proibidos e condenado à morte. No dia da execução, já com os primeiros presos amarrados aos postes, chegou a comutação — encenada de propósito pelo czar. Passou quatro anos em trabalhos forçados na Sibéria e mais cinco no exército.\n\nVoltou epilético, endividado e viciado em roleta, mas transformado: a fé e a obsessão pela liberdade humana passaram ao centro de sua obra. Escreveu Crime e Castigo, O Idiota, Os Demônios e Os Irmãos Karamázov, muitas vezes sob prazos brutais impostos por credores — ditou O Jogador em vinte e seis dias para não perder os direitos de toda a sua obra. Morreu aos 59 anos; dezenas de milhares acompanharam o cortejo em São Petersburgo.'
  },

  {
    id: 'cervantes',
    author: 'Miguel de Cervantes',
    cat: 'dificeis',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Escritor espanhol (1547–1616)',
    why: 'Perdeu o uso de uma mão em batalha, passou cinco anos cativo e escreveu o primeiro romance moderno.',
    title: 'O manco de Lepanto',
    excerpt: 'Publicou Dom Quixote aos 58 anos, depois de guerra, cativeiro, prisão por dívidas e fracassos.',
    text: 'Miguel de Cervantes Saavedra nasceu em Alcalá de Henares, filho de um cirurgião-barbeiro endividado que mudava a família de cidade em cidade. Alistou-se como soldado e combateu na batalha naval de Lepanto, em 1571, onde levou três tiros de arcabuz e perdeu para sempre o uso da mão esquerda — orgulhava-se do apelido de Manco de Lepanto.\n\nEm 1575, voltando à Espanha, foi capturado por corsários e passou cinco anos preso em Argel, onde tentou fugir quatro vezes. Resgatado por frades trinitários, voltou a uma Espanha que não lhe deu emprego. Trabalhou como comissário de abastecimento e cobrador de impostos, foi preso ao menos duas vezes por irregularidades contábeis. Publicou a primeira parte de Dom Quixote em 1605, aos 58 anos: o fidalgo que enlouquece de tanto ler novelas de cavalaria e sai pelo mundo defendendo um ideal que já não existe. Foi um sucesso imediato e é considerado o primeiro romance moderno. Morreu pobre em 1616.'
  },

  {
    id: 'goethe',
    author: 'Johann Wolfgang von Goethe',
    cat: 'filosofos',
    profiles: ['literatura', 'cientistas'],
    origin: 'europeus',
    role: 'Escritor alemão (1749–1832)',
    why: 'Escreveu o Fausto ao longo de sessenta anos e também uma teoria das cores contra Newton.',
    title: 'Sessenta anos escrevendo o mesmo livro',
    excerpt: 'Aos vinte e quatro anos causou uma onda de imitadores; aos oitenta e dois terminou sua obra máxima.',
    text: 'Johann Wolfgang Goethe nasceu em Frankfurt, numa família próspera. Estudou direito por imposição do pai. Aos vinte e quatro anos publicou Os Sofrimentos do Jovem Werther, romance epistolar sobre um amor impossível que virou fenômeno europeu — jovens passaram a se vestir como o protagonista, e a obra foi acusada de estimular suicídios.\n\nAos vinte e seis mudou-se para Weimar a convite do duque e ali passou o resto da vida, acumulando funções administrativas: minas, estradas, finanças, teatro. Uma viagem à Itália, aos trinta e sete, reorientou sua estética para o classicismo. Dedicou-se também à ciência com seriedade: estudou anatomia comparada, botânica e escreveu uma volumosa Teoria das Cores contrapondo-se à óptica de Newton — hoje considerada errada como física e interessante como estudo da percepção. O Fausto o acompanhou por cerca de sessenta anos; concluiu a segunda parte pouco antes de morrer, aos 82 anos, e determinou que só fosse publicada postumamente.'
  },

  {
    id: 'dickinson',
    author: 'Emily Dickinson',
    cat: 'autorreconhecimento',
    profiles: ['literatura'],
    origin: 'norteamericanos',
    role: 'Poeta americana (1830–1886)',
    why: 'Escreveu quase mil e oitocentos poemas e publicou menos de doze em vida.',
    title: 'A poeta que quase ninguém leu',
    excerpt: 'Passou os últimos anos praticamente sem sair de casa e deixou os poemas costurados à mão numa gaveta.',
    text: 'Emily Elizabeth Dickinson nasceu em Amherst, Massachusetts, numa família proeminente e religiosa. Estudou no seminário feminino de Mount Holyoke, mas recusou-se a declarar publicamente sua fé, o que a marcou como uma das poucas "sem esperança" da turma, e não voltou no ano seguinte. A partir dos trinta e poucos anos foi reduzindo o contato social até quase não deixar a casa, conversando com visitas através de portas entreabertas e vestindo-se de branco.\n\nEscreveu cerca de mil e oitocentos poemas, curtos, com travessões no lugar da pontuação convencional, rimas imperfeitas e maiúsculas irregulares, tratando de morte, imortalidade, natureza e êxtase. Costurou-os à mão em pequenos cadernos guardados numa cômoda. Menos de doze foram publicados em vida, e editados sem sua autorização para "corrigir" a métrica. Pediu que os papéis fossem queimados; a irmã Lavinia desobedeceu. A primeira edição fiel só apareceu em 1955, quase setenta anos depois de sua morte.'
  },

  {
    id: 'rilke',
    author: 'Rainer Maria Rilke',
    cat: 'reflexao',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Poeta austríaco (1875–1926)',
    why: 'Escreveu dez cartas a um jovem desconhecido que se tornaram um dos livros mais lidos sobre vocação.',
    title: 'Cartas a um jovem poeta',
    excerpt: 'Respondeu a um cadete de dezenove anos que pedia opinião sobre seus versos — e falou de solidão.',
    text: 'René Karl Wilhelm Rilke nasceu em Praga, filho único de um funcionário ferroviário frustrado e de uma mãe que, tendo perdido uma filha antes dele, o vestiu de menina nos primeiros anos. Foi mandado à academia militar, experiência que descreveu como brutal e que abandonou por doença. Adotou o nome Rainer por sugestão de Lou Andreas-Salomé, com quem viveu uma relação decisiva e viajou duas vezes à Rússia, onde conheceu Tolstói.\n\nTrabalhou como secretário do escultor Auguste Rodin em Paris, aprendendo com ele a disciplina do olhar demorado sobre as coisas. Entre 1903 e 1908 respondeu a dez cartas de Franz Kappus, cadete de dezenove anos que lhe pedia opinião sobre poemas; as respostas, publicadas depois da morte de Rilke, tratam de solidão, paciência e da recusa em buscar aprovação externa. Escreveu as Elegias de Duíno ao longo de dez anos, interrompidas pela guerra e concluídas num surto de poucas semanas. Morreu de leucemia aos 51 anos.'
  },

  {
    id: 'camoes',
    author: 'Luís de Camões',
    cat: 'dificeis',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Poeta português (c. 1524–1580)',
    why: 'Perdeu um olho na guerra, naufragou e salvou o manuscrito d\u2019Os Lusíadas a nado.',
    title: 'O poema salvo do naufrágio',
    excerpt: 'Passou dezessete anos no Oriente, foi preso mais de uma vez e morreu na miséria.',
    text: 'Luís Vaz de Camões nasceu provavelmente em Lisboa, de família fidalga empobrecida. A juventude é mal documentada: sabe-se de amores contrariados na corte e de um desterro. Alistou-se e serviu em Ceuta, onde perdeu o olho direito em combate. De volta a Lisboa, feriu um funcionário do paço numa briga de rua e foi preso; obteve perdão com a condição de servir na Índia.\n\nPassou dezessete anos no Oriente, entre Goa, Moçambique, Macau e o Golfo Pérsico, em campanhas militares e cargos administrativos, sempre em dificuldades. A tradição conta que naufragou na foz do rio Mekong e nadou até a margem segurando o manuscrito d\u2019Os Lusíadas com um braço. Publicou a epopeia em 1572, dez cantos sobre a viagem de Vasco da Gama, e recebeu do rei uma tença modesta e irregular. Morreu em 1580, no ano em que Portugal perdeu a independência para a Espanha, pobre e, segundo relatos da época, dependendo da caridade.'
  },

  {
    id: 'jorgeamado',
    author: 'Jorge Amado',
    cat: 'vida',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Escritor brasileiro (1912–2001)',
    why: 'Teve livros queimados em praça pública e virou o autor brasileiro mais traduzido do mundo.',
    title: 'A Bahia em cinquenta idiomas',
    excerpt: 'Publicou o primeiro romance aos dezenove anos e passou anos exilado por sua militância.',
    text: 'Jorge Leal Amado de Faria nasceu numa fazenda de cacau em Itabuna, Bahia, e cresceu em Ilhéus, cenário de vários de seus livros. Publicou o primeiro romance aos dezenove anos. Ligado ao Partido Comunista, foi preso mais de uma vez e, em 1937, teve exemplares de seus livros queimados em praça pública em Salvador durante o Estado Novo.\n\nFoi eleito deputado federal em 1945 e é dele o projeto que garantiu a liberdade de culto no Brasil — dispositivo decisivo para as religiões de matriz africana. Com a cassação do partido, exilou-se na Europa por anos. Sua obra divide-se entre um primeiro período de denúncia social, com Cacau, Suor e Capitães da Areia, e um segundo mais sensual e cômico, iniciado com Gabriela, Cravo e Canela, seguido de Dona Flor e Seus Dois Maridos e Tieta do Agreste. Foi traduzido para cerca de cinquenta idiomas e adaptado inúmeras vezes ao cinema e à televisão. Morreu em Salvador, aos 88 anos.'
  },

  {
    id: 'limabarreto',
    author: 'Lima Barreto',
    cat: 'dificeis',
    profiles: ['literatura', 'ativistas'],
    origin: 'brasileiros',
    role: 'Escritor brasileiro (1881–1922)',
    why: 'Escreveu sobre o racismo e o subúrbio carioca numa literatura que só o reconheceu décadas depois.',
    title: 'O escritor do subúrbio',
    excerpt: 'Filho de um tipógrafo negro, foi internado duas vezes e recusado três vezes pela Academia.',
    text: 'Afonso Henriques de Lima Barreto nasceu no Rio de Janeiro, filho de um tipógrafo negro e de uma professora, sete anos antes da abolição. Teve acesso a boa formação graças ao padrinho, um visconde, e entrou na Escola Politécnica. Precisou abandonar o curso quando o pai enlouqueceu, e assumiu o sustento dos irmãos como amanuense da Secretaria de Guerra.\n\nEscreveu Recordações do Escrivão Isaías Caminha, Triste Fim de Policarpo Quaresma, Clara dos Anjos e crônicas mordazes sobre a República, o racismo, a reforma urbana que expulsou os pobres do centro e a vida no subúrbio — assunto que a literatura da época ignorava. Sua linguagem direta foi tratada como descuido pelos críticos formalistas. Candidatou-se três vezes à Academia Brasileira de Letras e nunca foi eleito. Alcoolista, foi internado duas vezes no hospício. Morreu aos 41 anos e só foi plenamente reconhecido a partir dos anos 1950.'
  },

  {
    id: 'bandeira',
    author: 'Manuel Bandeira',
    cat: 'vida',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Poeta brasileiro (1886–1968)',
    why: 'Recebeu sentença de morte por tuberculose aos dezoito anos e viveu até os 82.',
    title: 'A vida inteira que podia ter sido',
    excerpt: 'Abandonou a engenharia por causa da doença, começou a escrever para passar o tempo e virou clássico.',
    text: 'Manuel Carneiro de Sousa Bandeira Filho nasceu no Recife e mudou-se ainda criança para o Rio. Começou engenharia em São Paulo, mas em 1904, aos dezoito anos, adoeceu de tuberculose e abandonou o curso. A medicina da época lhe deu pouco tempo de vida. Passou temporadas em sanatórios, inclusive na Suíça, onde conviveu com o poeta Paul Éluard.\n\nComeçou a escrever, segundo ele mesmo, quase por falta do que fazer. Publicou A Cinza das Horas em 1917, ainda de forma parnasiana, e foi se abrindo ao verso livre e à fala coloquial até tornar-se uma das vozes centrais do modernismo brasileiro — embora não tenha participado da Semana de 22, por doença. Poemas como Vou-me Embora pra Pasárgada, Pneumotórax e Consoada tratam de morte, desejo e cotidiano com uma leveza irônica difícil de imitar. Foi professor de literatura, tradutor e crítico. Viveu sessenta e quatro anos além do prognóstico e morreu aos 82.'
  },

  {
    id: 'vinicius',
    author: 'Vinicius de Moraes',
    cat: 'amor',
    profiles: ['literatura', 'artistas'],
    origin: 'brasileiros',
    role: 'Poeta e compositor brasileiro (1913–1980)',
    why: 'Diplomata de carreira, escreveu a letra que levou a bossa nova ao mundo.',
    title: 'O poetinha',
    excerpt: 'Perdeu o cargo diplomático por causa da boemia e ganhou o mundo pela música.',
    text: 'Marcus Vinicius da Cruz de Melo Moraes nasceu no Rio de Janeiro, filho de um funcionário público que também era poeta. Formou-se em direito, estudou literatura inglesa em Oxford com bolsa e ingressou na carreira diplomática, servindo em Los Angeles, Paris e Montevidéu. Publicou poesia desde os vinte anos, atravessando de um misticismo inicial para uma poesia amorosa e sensual que o tornaria popular.\n\nEm 1956 estreou a peça Orfeu da Conceição, com música de Antônio Carlos Jobim — encontro que originaria a bossa nova. Com Jobim escreveu Garota de Ipanema, uma das canções mais gravadas da história. Parceiro também de Baden Powell nos afro-sambas, de Carlos Lyra, Toquinho e outros, transitou entre a alta literatura e a canção popular sem hierarquia. Foi aposentado compulsoriamente do Itamaraty em 1969, durante a ditadura. Casou-se nove vezes e fez disso matéria pública e poética. Morreu aos 66 anos.'
  },

  {
    id: 'quintana',
    author: 'Mário Quintana',
    cat: 'reflexao',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Poeta brasileiro (1906–1994)',
    why: 'Publicou o primeiro livro aos trinta e quatro anos e nunca quis ser famoso.',
    title: 'O poeta do hotel',
    excerpt: 'Viveu décadas num quarto de hotel em Porto Alegre, trabalhando como revisor de jornal.',
    text: 'Mário de Miranda Quintana nasceu em Alegrete, Rio Grande do Sul, filho de farmacêutico. Estudou num colégio militar em Porto Alegre, de onde saiu antes de concluir. Trabalhou a vida inteira em jornais como revisor, tradutor e cronista, vertendo para o português autores como Proust, Voltaire e Virginia Woolf.\n\nPublicou A Rua dos Cataventos em 1940, aos trinta e quatro anos. Sua poesia é curta, irônica e enganosamente simples, feita de trocadilhos, quartetos e observações que parecem anotações de quem olha pela janela. Viveu décadas em quartos de hotel no centro de Porto Alegre, entre eles o Majestic, hoje transformado em centro cultural com seu nome. Nunca se casou nem teve filhos, e resistiu a honrarias — tentou a Academia Brasileira de Letras duas vezes, não foi eleito e passou a ironizar o assunto. Tornou-se enormemente popular na velhice, quando seus versos começaram a circular em cartazes, agendas e murais escolares. Morreu aos 87 anos.'
  },

  {
    id: 'florbela',
    author: 'Florbela Espanca',
    cat: 'amor',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Poeta portuguesa (1894–1930)',
    why: 'Escreveu sobre desejo feminino num Portugal que não perdoava isso — e foi ignorada em vida.',
    title: 'A voz proibida',
    excerpt: 'Filha não reconhecida, uma das primeiras mulheres em Direito em Lisboa, morreu no dia em que fez 36 anos.',
    text: 'Florbela de Alma da Conceição Espanca nasceu em Vila Viçosa, filha ilegítima de um homem que só a reconheceria juridicamente cinquenta anos depois de sua morte. Foi criada na casa do pai, ao lado da esposa dele, com quem manteve boa relação. Perdeu a mãe adotiva na adolescência e, mais tarde, o irmão Apeles num acidente de aviação — perda que a devastou.\n\nFoi uma das primeiras mulheres a frequentar o curso de Direito em Lisboa. Casou-se três vezes, o que numa sociedade católica e conservadora bastava para escandalizar. Sua poesia, sobretudo os sonetos de Livro de Mágoas e Livro de Sóror Saudade, fala de desejo, solidão e insatisfação em primeira pessoa feminina, com uma franqueza que a crítica da época preferiu ignorar ou condenar. Morreu em Matosinhos no dia em que completava trinta e seis anos, por overdose de barbitúricos. O reconhecimento veio décadas depois; hoje é uma das poetas mais lidas em língua portuguesa.'
  },

  {
    id: 'orwell',
    author: 'George Orwell',
    cat: 'politica',
    profiles: ['literatura', 'ativistas'],
    origin: 'europeus',
    role: 'Escritor britânico (1903–1950)',
    why: 'Levou um tiro no pescoço lutando na Espanha e escreveu os dois livros que definiram o totalitarismo.',
    title: 'Contra os dois lados',
    excerpt: 'Foi policial colonial, mendigo voluntário e miliciano — e desconfiou de todo poder que conheceu.',
    text: 'Eric Arthur Blair nasceu na Índia britânica, filho de um funcionário do departamento do ópio. Estudou em Eton com bolsa e, em vez da universidade, serviu cinco anos como policial imperial na Birmânia. Saiu de lá com repulsa pelo imperialismo. Passou os anos seguintes deliberadamente pobre em Paris e Londres, lavando pratos e dormindo em albergues, para escrever sobre isso.\n\nEm 1936 foi à Espanha cobrir a guerra civil e acabou se alistando numa milícia antifascista. Levou um tiro no pescoço e sobreviveu; depois teve de fugir da Catalunha quando os comunistas alinhados a Moscou passaram a perseguir sua unidade. Essa experiência definiu sua desconfiança dupla: antifascista e anticomunista soviético. Escreveu A Revolução dos Bichos, recusada por várias editoras por ser inconveniente ao aliado soviético, e 1984, terminado já muito doente numa ilha escocesa. Morreu de tuberculose aos 46 anos, meses após a publicação.'
  },

  {
    id: 'exupery',
    author: 'Antoine de Saint-Exupéry',
    cat: 'amizade',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Aviador e escritor francês (1900–1944)',
    why: 'Escreveu o livro mais traduzido do mundo depois dos textos religiosos — e desapareceu no mar.',
    title: 'O piloto que sumiu',
    excerpt: 'Voou o correio aéreo sobre o Saara e a Patagônia, caiu no deserto, e virou autor de O Pequeno Príncipe.',
    text: 'Antoine Marie Jean-Baptiste Roger de Saint-Exupéry nasceu em Lyon, numa família aristocrática. Perdeu o pai aos quatro anos. Reprovou no exame da escola naval e acabou na aviação, durante o serviço militar. Tornou-se piloto do correio aéreo, abrindo rotas sobre o Saara e depois na América do Sul, onde dirigiu operações na Argentina — voos noturnos, sem rádio confiável, sobre território sem socorro.\n\nEm 1935, tentando um recorde Paris–Saigon, caiu no deserto da Líbia com o mecânico André Prévot. Sobreviveram quatro dias com quase nenhuma água antes de serem resgatados por um beduíno; ele já delirava. A experiência está em Terra dos Homens. Escreveu O Pequeno Príncipe em Nova York, durante a guerra, exilado e deprimido, e publicou-o em 1943. No ano seguinte, aos 44 anos e já acima da idade limite, conseguiu voltar a voar em missões de reconhecimento pelos Aliados. Desapareceu no Mediterrâneo em julho de 1944; destroços de seu avião só foram identificados em 2004.'
  }
];

/* ================================================================
   FASE 4 — BIOGRAFIAS (lote D)
   Cobertura dos filtros que ainda estavam rasos: Empresários,
   Investidores, Artistas, Ativistas, Líderes, Educadores, Esporte,
   Economia, Psicologia e Ditadores.
   ================================================================ */
const STORIES_D = [
  /* ---------------- EMPRESÁRIOS ---------------- */
  {
    id: 'disney',
    author: 'Walt Disney',
    cat: 'empreendedorismo',
    profiles: ['empresarios', 'artistas'],
    origin: 'norteamericanos',
    role: 'Animador americano (1901–1966)',
    why: 'Faliu, perdeu os direitos do próprio personagem e recomeçou criando o Mickey.',
    title: 'A falência antes do rato',
    excerpt: 'Um distribuidor lhe roubou o personagem e a equipe inteira. No trem de volta, ele desenhou outro.',
    text: 'Walter Elias Disney nasceu em Chicago e cresceu numa fazenda no Missouri, entregando jornais de madrugada para o pai. Mentiu a idade para servir como motorista de ambulância na Primeira Guerra. Sua primeira empresa de animação, a Laugh-O-Gram, faliu em Kansas City; ele dormiu no escritório e comeu feijão enlatado antes de ir para Hollywood com quarenta dólares.\n\nCriou Oswald, o Coelho Sortudo, que fez sucesso — até descobrir, numa reunião em Nova York em 1928, que o distribuidor detinha os direitos do personagem e havia contratado quase todos os seus animadores. Voltou de trem para a Califórnia e, no caminho, esboçou um rato. Steamboat Willie estreou no mesmo ano com som sincronizado. Apostou tudo em Branca de Neve, chamado na imprensa de "a loucura de Disney", e acertou. Ganhou vinte e dois Oscars. Também enfrentou uma greve amarga de seus animadores em 1941 e testemunhou no Comitê de Atividades Antiamericanas, episódios que sua biografia não apaga.'
  },

  {
    id: 'branson',
    author: 'Richard Branson',
    cat: 'empreendedorismo',
    profiles: ['empresarios'],
    origin: 'europeus',
    role: 'Empresário britânico (1950–)',
    why: 'Disléxico, largou a escola aos dezesseis e criou centenas de empresas sob a mesma marca.',
    title: 'O dono do "vamos tentar"',
    excerpt: 'Começou vendendo discos por correio e acabou fundando uma companhia aérea por causa de um voo cancelado.',
    text: 'Richard Charles Nicholas Branson nasceu em Surrey, na Inglaterra. Disléxico numa época em que a condição não era diagnosticada, teve desempenho escolar ruim e abandonou os estudos aos dezesseis anos. O diretor lhe disse que ele acabaria milionário ou na cadeia.\n\nComeçou com uma revista estudantil e depois com a venda de discos por correspondência, o que deu origem à Virgin Records — que assinou com os Sex Pistols quando ninguém queria. Em 1984 fundou a Virgin Atlantic após ficar preso num aeroporto por um voo cancelado: fretou um avião e vendeu assentos aos outros passageiros. Estendeu a marca a trens, telefonia, academias e turismo espacial, com fracassos ruidosos junto aos acertos. Tentou várias vezes recordes de balonismo e travessias oceânicas, quase morrendo em algumas. Assinou o compromisso de doar a maior parte da fortuna.'
  },

  {
    id: 'schultz',
    author: 'Howard Schultz',
    cat: 'negocios',
    profiles: ['empresarios'],
    origin: 'norteamericanos',
    role: 'Empresário americano (1953–)',
    why: 'Cresceu em habitação popular e deu plano de saúde a funcionários de meio período.',
    title: 'A xícara e o pai',
    excerpt: 'Viu o pai perder o emprego e o convênio médico após uma queda — e construiu uma empresa a partir disso.',
    text: 'Howard Schultz cresceu num conjunto habitacional público no Brooklyn. Aos sete anos viu o pai, motorista de entregas, quebrar o tornozelo e ser demitido sem indenização nem plano de saúde. Descreveu esse dia como o que definiu sua noção de empresa. Foi o primeiro da família a se formar, com bolsa esportiva.\n\nEntrou na Starbucks em 1982, quando era uma pequena torrefação de Seattle que vendia grãos, não bebidas. Numa viagem a Milão, viu os cafés italianos como espaço de convívio e propôs replicar a ideia; os donos recusaram. Ele saiu, montou a própria rede e depois comprou a Starbucks. Estendeu plano de saúde e opções de ações a funcionários de meio período, algo incomum no varejo americano. Em 2008 voltou ao comando durante a crise, fechou centenas de lojas e, num dia, todas as lojas dos EUA para retreinar baristas. A empresa também acumulou críticas trabalhistas e sindicais nos anos seguintes.'
  },

  {
    id: 'melinda',
    author: 'Melinda French Gates',
    cat: 'lideranca',
    profiles: ['empresarios', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Filantropa americana (1964–)',
    why: 'Direcionou bilhões para saúde global e para o acesso feminino a contracepção.',
    title: 'O poder de decidir',
    excerpt: 'Gerente de produto na Microsoft, virou uma das vozes mais influentes em saúde e igualdade de gênero.',
    text: 'Melinda Ann French nasceu em Dallas, filha de um engenheiro aeroespacial. Estudou computação e administração em Duke e entrou na Microsoft em 1987, onde chegou a gerente-geral de produtos de informação. Casou-se com Bill Gates em 1994 e deixou a empresa pouco depois.\n\nA fundação que criaram tornou-se a maior organização filantrópica privada do mundo, concentrada em vacinação, malária, poliomielite e saúde materna. Melinda assumiu como pauta própria o acesso ao planejamento familiar, argumentando que a possibilidade de decidir quando ter filhos é o fator isolado que mais transforma a vida de mulheres pobres — posição que a colocou em rota de colisão com sua própria igreja. Em 2015 criou uma empresa de investimentos voltada ao avanço de mulheres. Divorciou-se em 2021 e deixou a fundação em 2024 para atuar de forma independente.'
  },

  {
    id: 'abiliodiniz',
    author: 'Abílio Diniz',
    cat: 'negocios',
    profiles: ['empresarios'],
    origin: 'brasileiros',
    role: 'Empresário brasileiro (1936–2024)',
    why: 'Transformou uma doceria da família na maior rede de varejo do Brasil e sobreviveu a um sequestro.',
    title: 'Da doceria ao maior varejo do país',
    excerpt: 'Ficou seis dias em cativeiro dentro de um cubículo e voltou ao trabalho falando de disciplina.',
    text: 'Abílio dos Santos Diniz nasceu em São Paulo, filho de um imigrante português que abriu a doceria Pão de Açúcar em 1948. Formou-se na Fundação Getulio Vargas e entrou no negócio da família, transformando a doceria numa rede de supermercados que se tornaria a maior do varejo brasileiro.\n\nEm 1989 foi sequestrado por um grupo internacional e passou seis dias trancado num cubículo. Contou depois que sobreviveu psicologicamente estabelecendo rotina e exercícios no espaço mínimo. Voltou ao comando e conduziu a expansão do grupo, com a associação ao Casino francês e uma longa disputa societária que se arrastou por anos. Depois de sair do Pão de Açúcar, tornou-se acionista relevante da BRF e de outras companhias. Praticou esportes com disciplina até o fim da vida e escreveu sobre equilíbrio entre trabalho, família e saúde. Morreu aos 87 anos.'
  },

  /* ---------------- INVESTIDORES E ECONOMIA ---------------- */
  {
    id: 'lynch',
    author: 'Peter Lynch',
    cat: 'financas',
    profiles: ['investidores'],
    origin: 'norteamericanos',
    role: 'Investidor americano (1944–)',
    why: 'Multiplicou um fundo por vinte e oito vezes em treze anos e parou no auge, aos 46.',
    title: 'Invista no que você conhece',
    excerpt: 'Virou caddie de golfe aos onze anos para ajudar em casa e ouviu executivos falando de ações.',
    text: 'Peter Lynch nasceu em Massachusetts. O pai morreu de câncer quando ele tinha dez anos, e a família passou a viver com dificuldade. Aos onze começou a trabalhar como caddie num clube de golfe frequentado por executivos do mercado financeiro; ouvindo as conversas nos campos, aprendeu sobre ações antes de aprender qualquer teoria.\n\nAssumiu o fundo Magellan da Fidelity em 1977, quando administrava cerca de dezoito milhões de dólares, e o deixou em 1990 com mais de catorze bilhões, tendo obtido retorno médio anual em torno de vinte e nove por cento. Seu método era simples de enunciar e trabalhoso de executar: comprar empresas cujo negócio se entende, verificar os números, visitar centenas de companhias por ano e ignorar previsões macroeconômicas. Aposentou-se aos 46 anos para passar mais tempo com a família e dedicou-se à filantropia educacional.'
  },

  {
    id: 'marks',
    author: 'Howard Marks',
    cat: 'financas',
    profiles: ['investidores'],
    origin: 'norteamericanos',
    role: 'Investidor americano (1946–)',
    why: 'Suas cartas a clientes são lidas por Buffett assim que chegam.',
    title: 'O segundo nível de pensamento',
    excerpt: 'Construiu uma gestora sobre dívida problemática e sobre a ideia de que o preço é tudo.',
    text: 'Howard Stanley Marks nasceu em Nova York, filho de um contador. Formou-se em Wharton e em Chicago, e começou no Citibank pesquisando ações. Foi transferido para uma área então desprezada — títulos de alto risco — e ali encontrou sua tese: não existe ativo bom ou ruim, existe preço bom ou ruim.\n\nCofundou a Oaktree Capital em 1995, especializada em dívida em dificuldade, e a transformou numa das maiores gestoras do mundo nesse segmento. Desde os anos 1990 escreve cartas aos clientes sobre ciclos de mercado, risco e psicologia do investidor; Warren Buffett declarou publicamente que as lê antes de qualquer outra coisa. Sua ideia mais citada é a do segundo nível de pensamento: não basta concluir que uma empresa é boa, é preciso saber o que já está no preço e por que a maioria pensa diferente. Reuniu o essencial em O Mais Importante para o Investidor.'
  },

  {
    id: 'keynes',
    author: 'John Maynard Keynes',
    cat: 'financas',
    profiles: ['economistas'],
    origin: 'europeus',
    role: 'Economista britânico (1883–1946)',
    why: 'Reescreveu a economia durante a Grande Depressão e desenhou o sistema financeiro do pós-guerra.',
    title: 'No longo prazo',
    excerpt: 'Previu em 1919 que os termos impostos à Alemanha levariam a outra guerra. Levaram.',
    text: 'John Maynard Keynes nasceu em Cambridge, filho de um economista e de uma das primeiras mulheres formadas pela universidade. Fez parte do grupo de Bloomsbury, ao lado de Virginia Woolf. Serviu no Tesouro britânico e participou da Conferência de Paz de Paris em 1919, da qual saiu revoltado: publicou As Consequências Econômicas da Paz argumentando que as reparações impostas à Alemanha eram economicamente insustentáveis e politicamente explosivas.\n\nEm 1936, no meio da Depressão, publicou a Teoria Geral do Emprego, do Juro e da Moeda, sustentando que economias podem estacionar em desemprego alto por falta de demanda e que cabe ao Estado gastar para reativá-las — inversão frontal da ortodoxia. Em 1944 liderou a delegação britânica em Bretton Woods, ajudando a desenhar o FMI e o Banco Mundial. Foi também investidor bem-sucedido para si e para seu colégio. Morreu de infarto aos 62 anos.'
  },

  {
    id: 'friedman',
    author: 'Milton Friedman',
    cat: 'financas',
    profiles: ['economistas'],
    origin: 'norteamericanos',
    role: 'Economista americano (1912–2006)',
    why: 'Liderou a contrarrevolução monetarista e defendeu ideias que ainda dividem o debate público.',
    title: 'A outra metade do debate',
    excerpt: 'Filho de imigrantes pobres, ganhou o Nobel e virou o principal adversário intelectual de Keynes.',
    text: 'Milton Friedman nasceu em Nova York, filho de imigrantes judeus da região dos Cárpatos. O pai morreu quando ele estava no ensino médio; entrou na universidade com bolsa e trabalhou como garçom. Doutorou-se em Columbia e passou a maior parte da carreira em Chicago.\n\nCom Anna Schwartz, publicou uma história monetária dos Estados Unidos argumentando que a Grande Depressão foi agravada por erros do banco central, e não pela falência do mercado — tese que reorientou a política monetária mundial. Defendeu câmbio flutuante, imposto de renda negativo, fim do serviço militar obrigatório e vouchers escolares. Recebeu o Nobel em 1976. Sua série de televisão Free to Choose levou o argumento liberal ao grande público. Também é criticado pelo aconselhamento econômico a governos autoritários e pela doutrina de que a única responsabilidade social da empresa é o lucro — ponto que segue em disputa aberta.'
  },

  {
    id: 'amartya',
    author: 'Amartya Sen',
    cat: 'politica',
    profiles: ['economistas', 'filosofos'],
    origin: 'asiaafrica',
    role: 'Economista indiano (1933–)',
    why: 'Mostrou que fomes coletivas não acontecem em democracias com imprensa livre.',
    title: 'Fome não é falta de comida',
    excerpt: 'Aos nove anos viu a fome de Bengala matar milhões — e passou a vida explicando por que ela ocorreu.',
    text: 'Amartya Kumar Sen nasceu em Santiniketan, na Índia britânica, numa família acadêmica. Aos nove anos presenciou a fome de Bengala de 1943, que matou milhões de pessoas. Ainda criança, notou que sua família e seus vizinhos de classe média não passaram fome. A pergunta ficou.\n\nDécadas depois demonstrou, com dados, que aquela fome não decorreu de escassez de alimentos: houve produção suficiente, mas colapso do poder de compra de trabalhadores rurais somado a especulação e à ausência de imprensa livre para expor a crise. Formulou a tese de que fomes catastróficas não ocorrem em democracias funcionais. Desenvolveu a abordagem das capacidades, que mede desenvolvimento pelo que as pessoas conseguem efetivamente ser e fazer — base do Índice de Desenvolvimento Humano da ONU, que ajudou a criar. Recebeu o Nobel de Economia em 1998.'
  },

  /* ---------------- LÍDERES E POLÍTICA ---------------- */
  {
    id: 'jfk',
    author: 'John F. Kennedy',
    cat: 'motivacao',
    profiles: ['politicos', 'lideres'],
    origin: 'norteamericanos',
    role: 'Presidente americano (1917–1963)',
    why: 'Prometeu levar o homem à Lua antes do fim da década — e o país cumpriu.',
    title: 'Mil dias',
    excerpt: 'Comandou a crise dos mísseis e foi assassinado antes de completar três anos de mandato.',
    text: 'John Fitzgerald Kennedy nasceu em Massachusetts, segundo de nove filhos de uma família política e rica. Teve saúde frágil a vida inteira, com doença de Addison e dores crônicas na coluna que escondeu do público. Na guerra, comandou uma lancha torpedeira destruída por um destróier japonês; nadou horas rebocando um companheiro ferido pelo colete salva-vidas preso entre os dentes.\n\nEleito presidente em 1960, aos 43 anos, foi o mais jovem a chegar ao cargo por voto. Herdou e autorizou a invasão fracassada da Baía dos Porcos, assumindo publicamente a responsabilidade. Em 1962 conduziu a crise dos mísseis de Cuba, treze dias em que o mundo esteve mais perto de uma guerra nuclear, optando pelo bloqueio naval contra a pressão militar por ataque. Lançou o programa Apollo, o Corpo da Paz e apoiou tardiamente a legislação de direitos civis. Foi assassinado em Dallas em novembro de 1963.'
  },

  {
    id: 'havel',
    author: 'Václav Havel',
    cat: 'politica',
    profiles: ['politicos', 'literatura', 'ativistas'],
    origin: 'europeus',
    role: 'Dramaturgo e presidente tcheco (1936–2011)',
    why: 'Saiu da prisão para a presidência em poucos meses, sem disparar um tiro.',
    title: 'Do palco ao castelo',
    excerpt: 'Teve as peças proibidas, trabalhou numa cervejaria e liderou a Revolução de Veludo.',
    text: 'Václav Havel nasceu em Praga, numa família burguesa cujos bens foram confiscados pelo regime comunista. Por origem de classe, foi impedido de cursar as universidades que queria. Trabalhou como técnico de teatro e virou dramaturgo do absurdo, com peças sobre burocracia e linguagem vazia.\n\nApós a invasão soviética de 1968, foi banido dos palcos e passou a trabalhar numa cervejaria. Em 1977 ajudou a redigir a Carta 77, manifesto por direitos humanos, e cumpriu quase cinco anos de prisão em diferentes períodos. Seu ensaio O Poder dos Sem-Poder argumenta que regimes totalitários se sustentam na adesão cotidiana à mentira e caem quando as pessoas simplesmente param de fingir. Em novembro de 1989 liderou a Revolução de Veludo; em dezembro foi eleito presidente pelo mesmo parlamento que o havia perseguido. Conduziu a separação pacífica entre Tchéquia e Eslováquia e governou até 2003.'
  },

  {
    id: 'kofi',
    author: 'Kofi Annan',
    cat: 'lideranca',
    profiles: ['politicos', 'lideres'],
    origin: 'asiaafrica',
    role: 'Diplomata ganês (1938–2018)',
    why: 'Primeiro secretário-geral da ONU vindo dos quadros da própria casa, e o primeiro africano negro.',
    title: 'A cadeira mais difícil do mundo',
    excerpt: 'Admitiu publicamente as falhas da ONU em Ruanda e na Bósnia enquanto ainda estava no cargo.',
    text: 'Kofi Atta Annan nasceu em Kumasi, em Gana, numa família de chefes tradicionais, no ano em que o país ainda era colônia britânica. Estudou nos Estados Unidos e na Suíça e entrou na ONU em 1962, subindo por dentro da organização ao longo de trinta e cinco anos, em áreas de orçamento, refugiados e operações de paz.\n\nTornou-se secretário-geral em 1997. Comandou reformas administrativas, criou o Fundo Global contra aids, tuberculose e malária, e formulou os Objetivos de Desenvolvimento do Milênio. Também determinou investigações independentes sobre o fracasso da ONU em impedir o genocídio de Ruanda e o massacre de Srebrenica — episódios em que ele próprio chefiava as operações de paz — e reconheceu responsabilidade institucional. Opôs-se publicamente à invasão do Iraque em 2003, chamando-a de ilegal. Recebeu o Nobel da Paz em 2001, dividido com a organização.'
  },

  {
    id: 'lutero',
    author: 'Martinho Lutero',
    cat: 'fe',
    profiles: ['religiosos', 'ativistas'],
    origin: 'europeus',
    role: 'Teólogo alemão (1483–1546)',
    why: 'Dividiu a cristandade ocidental e traduziu a Bíblia para a língua do povo.',
    title: 'As noventa e cinco teses',
    excerpt: 'Um monge agostiniano questionou a venda de indulgências e a Europa nunca mais foi a mesma.',
    text: 'Martinho Lutero nasceu em Eisleben, filho de um trabalhador de minas que ascendeu a pequeno empresário e queria vê-lo advogado. Segundo o relato tradicional, ele mudou de rumo após ser surpreendido por uma tempestade violenta e prometer tornar-se monge se sobrevivesse. Entrou para os agostinianos e doutorou-se em teologia.\n\nEm 1517 divulgou noventa e cinco teses contra a venda de indulgências — pagamentos que prometiam reduzir o tempo de castigo após a morte. Com a imprensa recém-inventada, o texto se espalhou pela Alemanha em semanas. Convocado à Dieta de Worms em 1521, recusou-se a se retratar e foi declarado fora da lei. Escondido no castelo de Wartburg, traduziu o Novo Testamento para o alemão em cerca de onze semanas, fixando de fato a língua literária alemã. Sua obra tardia inclui textos violentamente antissemitas, mais tarde explorados pelo nazismo — parte inseparável de sua avaliação histórica.'
  },

  {
    id: 'tutu',
    author: 'Desmond Tutu',
    cat: 'conforto',
    profiles: ['religiosos', 'ativistas', 'lideres'],
    origin: 'asiaafrica',
    role: 'Arcebispo sul-africano (1931–2021)',
    why: 'Presidiu a comissão que ouviu vítimas e algozes do apartheid, buscando verdade antes de punição.',
    title: 'Verdade e reconciliação',
    excerpt: 'Cunhou a expressão "nação arco-íris" e chorou publicamente ouvindo depoimentos de tortura.',
    text: 'Desmond Mpilo Tutu nasceu em Klerksdorp, na África do Sul. Queria ser médico, mas a família não pôde pagar; virou professor e abandonou o magistério em protesto contra a lei que impôs educação inferior aos negros. Ordenou-se sacerdote anglicano e tornou-se, em 1986, o primeiro arcebispo negro da Cidade do Cabo.\n\nUsou o púlpito como plataforma contra o apartheid, defendendo sanções econômicas internacionais e a resistência não violenta, e recebeu o Nobel da Paz em 1984. Após as eleições livres, Mandela o nomeou presidente da Comissão da Verdade e Reconciliação, que ouviu milhares de vítimas e concedeu anistia condicionada a confissões completas — modelo copiado e contestado em vários países. Foi também crítico severo dos governos que se seguiram, da corrupção do próprio partido de Mandela e da homofobia dentro da Igreja anglicana. Morreu aos 90 anos.'
  },

  /* ---------------- ATIVISTAS ---------------- */
  {
    id: 'douglass',
    author: 'Frederick Douglass',
    cat: 'politica',
    profiles: ['ativistas', 'literatura'],
    origin: 'norteamericanos',
    role: 'Abolicionista americano (1818–1895)',
    why: 'Aprendeu a ler escondido, fugiu da escravidão e virou o orador mais famoso do país.',
    title: 'A leitura como fuga',
    excerpt: 'Ouviu o senhor dizer que ensinar um escravizado a ler o tornaria inútil — e entendeu o caminho.',
    text: 'Frederick Augustus Washington Bailey nasceu escravizado em Maryland e nunca soube a data exata do próprio nascimento. Aos oito anos foi enviado a Baltimore, onde a esposa do senhor começou a lhe ensinar o alfabeto até ser proibida pelo marido, que argumentou diante dele que a leitura arruinaria um escravo. Douglass entendeu ali que a leitura era a rota de saída e passou a aprender trocando pão por lições com meninos brancos da rua.\n\nFugiu em 1838 disfarçado de marinheiro e adotou novo sobrenome. Tornou-se orador do movimento abolicionista com tal eloquência que plateias duvidavam de que tivesse sido escravizado — o que o levou a publicar sua autobiografia com nomes e lugares reais, arriscando a recaptura. Fundou o jornal The North Star, aconselhou Lincoln, defendeu o alistamento de soldados negros e apoiou o sufrágio feminino, presente na convenção de Seneca Falls. Morreu aos 77 anos.'
  },

  {
    id: 'tubman',
    author: 'Harriet Tubman',
    cat: 'motivacao',
    profiles: ['ativistas', 'lideres'],
    origin: 'norteamericanos',
    role: 'Abolicionista americana (c. 1822–1913)',
    why: 'Voltou treze vezes ao território escravista para libertar dezenas de pessoas.',
    title: 'A condutora',
    excerpt: 'Fugiu sozinha e depois retornou repetidas vezes ao lugar de onde escapara, para tirar outros de lá.',
    text: 'Araminta Ross nasceu escravizada em Maryland. Ainda adolescente, ao se recusar a ajudar a conter outro escravizado, levou na cabeça um peso de ferro atirado por um capataz. A lesão lhe causou convulsões, dores de cabeça e episódios de sono súbito por toda a vida, além de visões que ela interpretava como orientação divina.\n\nFugiu em 1849 pela rede clandestina conhecida como Underground Railroad. Poderia ter permanecido livre no norte; em vez disso voltou cerca de treze vezes ao sul, conduzindo dezenas de pessoas à liberdade — segundo ela, sem jamais perder um único fugitivo. Durante a Guerra Civil serviu ao exército da União como enfermeira, cozinheira e batedora, e chegou a guiar a expedição do rio Combahee, que libertou centenas de pessoas de uma vez. Lutou décadas para receber pensão militar. Nos últimos anos apoiou o sufrágio feminino e fundou um lar para idosos negros.'
  },

  {
    id: 'marielle',
    author: 'Marielle Franco',
    cat: 'politica',
    profiles: ['ativistas', 'politicos'],
    origin: 'brasileiros',
    role: 'Socióloga e vereadora brasileira (1979–2018)',
    why: 'Saiu da Maré, foi a quinta vereadora mais votada do Rio e foi assassinada.',
    title: 'A voz da Maré',
    excerpt: 'Mãe aos dezenove anos, entrou na universidade com bolsa e virou uma das políticas mais votadas da cidade.',
    text: 'Marielle Francisco da Silva nasceu e cresceu no Complexo da Maré, no Rio de Janeiro. Tornou-se mãe aos dezenove anos e trabalhou como professora de reforço e em creche comunitária para se sustentar. A morte de uma amiga por bala perdida a aproximou da militância por direitos humanos. Entrou na PUC-Rio com bolsa, formou-se em ciências sociais e fez mestrado com dissertação sobre as unidades de polícia pacificadora.\n\nTrabalhou por dez anos na assessoria de um deputado e na comissão de defesa dos direitos humanos da Assembleia. Em 2016 elegeu-se vereadora com mais de 46 mil votos, a quinta maior votação da cidade, com pautas de segurança pública, direitos das mulheres negras e da população LGBT. Foi relatora da comissão que acompanhava a intervenção federal no Rio. Em 14 de março de 2018 foi assassinada a tiros no centro da cidade junto com o motorista Anderson Gomes. O caso teve desdobramentos judiciais que se estenderam por anos.'
  },

  {
    id: 'krenak',
    author: 'Ailton Krenak',
    cat: 'reflexao',
    profiles: ['ativistas', 'filosofos', 'literatura'],
    origin: 'brasileiros',
    role: 'Líder indígena brasileiro (1953–)',
    why: 'Pintou o rosto de jenipapo na tribuna do Congresso e mudou o texto da Constituição.',
    title: 'O gesto na tribuna',
    excerpt: 'Primeiro indígena eleito para a Academia Brasileira de Letras, escreve sobre o fim do mundo como hábito.',
    text: 'Ailton Alves Lacerda Krenak nasceu no vale do rio Doce, em Minas Gerais, povo Krenak. A família foi deslocada de suas terras e ele só se alfabetizou aos dezessete anos. Trabalhou como artesão e produtor gráfico antes de se tornar articulador do movimento indígena.\n\nEm setembro de 1987, durante a Assembleia Constituinte, discursou na tribuna enquanto pintava lentamente o próprio rosto com tinta preta de jenipapo, em silêncio entre as frases, protestando contra a retirada de direitos indígenas do texto em discussão. As imagens correram o país e o capítulo dos povos indígenas foi restaurado na Constituição de 1988. Ajudou a fundar a União das Nações Indígenas e a Aliança dos Povos da Floresta com Chico Mendes. Publicou Ideias para Adiar o Fim do Mundo, A Vida Não é Útil e outros livros que se tornaram referência no debate ambiental. Foi eleito para a Academia Brasileira de Letras em 2024, o primeiro indígena a ocupar uma cadeira.'
  },

  {
    id: 'luther_rosa',
    author: 'Rosa Luxemburgo',
    cat: 'politica',
    profiles: ['ativistas', 'filosofos', 'economistas'],
    origin: 'europeus',
    role: 'Revolucionária polonesa-alemã (1871–1919)',
    why: 'Criticou tanto o capitalismo quanto o autoritarismo bolchevique — e foi assassinada aos 47 anos.',
    title: 'A liberdade dos que pensam diferente',
    excerpt: 'Doutorou-se em economia quando quase nenhuma mulher podia, e enfrentou os dois lados do próprio campo.',
    text: 'Rosa Luxemburgo nasceu em Zamość, na Polônia sob domínio russo, numa família judaica. Teve uma doença no quadril na infância que lhe deixou sequelas permanentes. Envolveu-se cedo em atividade política clandestina e fugiu para a Suíça aos dezoito anos, onde se tornou uma das primeiras mulheres a obter doutorado em economia política.\n\nMudou-se para a Alemanha, tornou-se figura central da social-democracia e opôs-se com veemência à decisão do partido de apoiar os créditos de guerra em 1914 — posição que lhe custou o partido e a liberdade: passou a maior parte da Primeira Guerra na prisão. Criticou o reformismo por abandonar a transformação e criticou Lênin por concentrar poder, escrevendo que a liberdade é sempre a liberdade de quem pensa diferente. Fundou a Liga Espartaquista e, em janeiro de 1919, durante a revolta em Berlim, foi presa por milicianos de extrema direita, espancada, assassinada e jogada num canal.'
  },

  /* ---------------- ARTISTAS ---------------- */
  {
    id: 'picasso',
    author: 'Pablo Picasso',
    cat: 'autorreconhecimento',
    profiles: ['artistas'],
    origin: 'europeus',
    role: 'Pintor espanhol (1881–1973)',
    why: 'Reinventou a própria linguagem várias vezes e produziu mais de vinte mil obras.',
    title: 'Guernica',
    excerpt: 'Pintou em poucas semanas o quadro que se tornou o mais forte manifesto antiguerra do século.',
    text: 'Pablo Ruiz Picasso nasceu em Málaga, filho de um professor de desenho que, segundo a lenda familiar, entregou os próprios pincéis ao filho ainda adolescente ao reconhecer que fora superado. Dominou o academicismo cedo e passou a vida desmontando-o.\n\nAtravessou fases distintas: o período azul, marcado pelo suicídio de um amigo próximo; o rosa; e, a partir de 1907, com Les Demoiselles d\u2019Avignon, o cubismo que criou com Georges Braque, quebrando a perspectiva única herdada do Renascimento. Em 1937, durante a Guerra Civil Espanhola, o bombardeio da cidade basca de Guernica por aviões alemães e italianos o levou a pintar, em poucas semanas, um mural em preto, branco e cinza que virou o mais conhecido protesto visual contra a guerra. Recusou-se a voltar à Espanha enquanto Franco governasse. Deixou uma obra vastíssima e uma biografia pessoal marcada por relações duras com as mulheres à sua volta, hoje parte central da discussão sobre seu legado.'
  },

  {
    id: 'mozart',
    author: 'Wolfgang Amadeus Mozart',
    cat: 'motivacao',
    profiles: ['artistas'],
    origin: 'europeus',
    role: 'Compositor austríaco (1756–1791)',
    why: 'Compôs mais de seiscentas obras e morreu aos 35 anos, endividado.',
    title: 'A criança levada pela Europa',
    excerpt: 'Tocou para imperadores aos seis anos e morreu cedo demais, escrevendo um réquiem encomendado por um estranho.',
    text: 'Johannes Chrysostomus Wolfgangus Theophilus Mozart nasceu em Salzburgo, filho de Leopold Mozart, violinista e pedagogo. Aos cinco anos já compunha; aos seis o pai o levou, com a irmã Nannerl, igualmente prodigiosa, numa turnê de anos pelas cortes europeias, tocando para a imperatriz Maria Teresa, para Luís XV e em Londres. As viagens custaram-lhe a infância e várias doenças graves.\n\nAdulto, rompeu com o arcebispo de Salzburgo e mudou-se para Viena, tornando-se um dos primeiros compositores a tentar viver como profissional independente, sem patrono fixo — o que significou sucesso e instabilidade financeira alternados. Compôs as óperas As Bodas de Fígaro, Don Giovanni e A Flauta Mágica, além de sinfonias, concertos e música de câmara que definiram o classicismo. Morreu aos 35 anos, de causa nunca esclarecida, deixando inacabado o Réquiem encomendado anonimamente. Foi enterrado em cova comum, prática usual em Viena naquele momento.'
  },

  {
    id: 'portinari',
    author: 'Candido Portinari',
    cat: 'politica',
    profiles: ['artistas'],
    origin: 'brasileiros',
    role: 'Pintor brasileiro (1903–1962)',
    why: 'Pintou os retirantes e os murais da sede da ONU, e morreu envenenado pelas próprias tintas.',
    title: 'Os retirantes e a ONU',
    excerpt: 'Filho de imigrantes lavradores de café, pintou o Brasil pobre em telas que entraram nos museus do mundo.',
    text: 'Candido Portinari nasceu numa fazenda de café em Brodowski, São Paulo, filho de imigrantes italianos que trabalhavam na lavoura. Teve pouca escolaridade formal e começou a desenhar cedo; aos quinze foi para o Rio estudar na Escola Nacional de Belas Artes. Ganhou um prêmio de viagem à Europa em 1928.\n\nVoltou decidido a pintar o Brasil: trabalhadores rurais, jogadores de futebol de várzea, cafezais, e sobretudo Os Retirantes, série sobre a fuga da seca no Nordeste. Executou os painéis do Ministério da Educação, os azulejos da igreja da Pampulha e, em 1953, os murais Guerra e Paz doados pelo Brasil à sede da ONU em Nova York. Filiou-se ao Partido Comunista, candidatou-se e precisou se exilar no Uruguai durante a perseguição política. O contato prolongado com pigmentos à base de chumbo o intoxicou; morreu aos 58 anos, em decorrência disso.'
  },

  {
    id: 'callas',
    author: 'Maria Callas',
    cat: 'dificeis',
    profiles: ['artistas'],
    origin: 'norteamericanos',
    role: 'Soprano greco-americana (1923–1977)',
    why: 'Devolveu à ópera a ideia de que cantar é também atuar.',
    title: 'A voz e o palco',
    excerpt: 'Foi criticada pela imperfeição do timbre e admirada como a maior intérprete de sua geração.',
    text: 'Maria Anna Cecilia Sofia Kalogeropoulou nasceu em Nova York, filha de imigrantes gregos. A mãe, que queria uma filha cantora, a levou de volta à Grécia aos treze anos e a matriculou no conservatório de Atenas mentindo sobre sua idade. Callas descreveu a infância como sem carinho e sob pressão constante.\n\nEstreou profissionalmente durante a ocupação nazista da Grécia. A carreira internacional decolou na Itália nos anos 1950, no Scala de Milão. Sua voz não era considerada tecnicamente perfeita — tinha registros desiguais e um vibrato que dividia críticos —, mas ela transformou o canto lírico ao tratar cada papel como personagem dramática, resgatando óperas do bel canto que estavam fora de repertório havia décadas. Emagreceu drasticamente no auge, mudança associada por muitos ao declínio vocal precoce. Sua vida pessoal, sobretudo a relação com Aristóteles Onassis, foi devorada pela imprensa. Morreu em Paris aos 53 anos.'
  },

  /* ---------------- EDUCAÇÃO E PSICOLOGIA ---------------- */
  {
    id: 'piaget',
    author: 'Jean Piaget',
    cat: 'educacao',
    profiles: ['educadores', 'cientistas', 'psicologos'],
    origin: 'europeus',
    role: 'Psicólogo suíço (1896–1980)',
    why: 'Descobriu que crianças não pensam menos que adultos: pensam de outro jeito.',
    title: 'O erro que virou teoria',
    excerpt: 'Publicou seu primeiro artigo científico aos dez anos e passou a vida observando crianças errarem.',
    text: 'Jean William Fritz Piaget nasceu em Neuchâtel, na Suíça. Publicou uma nota científica sobre um pardal albino aos dez anos e doutorou-se em biologia aos vinte e dois, estudando moluscos. Trabalhando em Paris na padronização de testes de inteligência, notou algo que ninguém achava importante: crianças da mesma idade erravam as mesmas perguntas do mesmo jeito.\n\nEm vez de contar acertos, passou a investigar o raciocínio por trás dos erros. Concluiu que o pensamento infantil não é uma versão incompleta do adulto, mas tem lógica própria que se reorganiza em estágios — sensório-motor, pré-operatório, operatório concreto e operatório formal. Criou a epistemologia genética, estudando como o conhecimento se constrói. Suas experiências com conservação de volume e quantidade tornaram-se clássicas. A cronologia rígida dos estágios foi depois contestada, mas a ideia central — de que a criança constrói ativamente o que sabe — reorganizou a pedagogia mundial.'
  },

  {
    id: 'nise',
    author: 'Nise da Silveira',
    cat: 'conforto',
    profiles: ['psicologos', 'cientistas'],
    origin: 'brasileiros',
    role: 'Psiquiatra brasileira (1905–1999)',
    why: 'Recusou eletrochoque e lobotomia e tratou pacientes com tinta, papel e afeto.',
    title: 'O museu do inconsciente',
    excerpt: 'Única mulher entre 157 formandos em medicina, foi presa por livros marxistas e voltou para mudar a psiquiatria.',
    text: 'Nise Magalhães da Silveira nasceu em Maceió e formou-se em medicina na Bahia em 1926, única mulher entre 157 estudantes de sua turma. Em 1936, durante o Estado Novo, foi denunciada por possuir livros comunistas, presa por mais de um ano e afastada do serviço público por oito.\n\nAo retornar, foi designada a um setor desprezado do hospital psiquiátrico do Engenho de Dentro, no Rio: a terapia ocupacional. Recusou-se a aplicar eletroconvulsoterapia, insulinoterapia e lobotomia, então padrão, por considerá-las violentas e desumanas. Abriu ateliês de pintura e modelagem e passou a tratar as imagens produzidas pelos pacientes como expressão de conteúdos psíquicos, não como sintoma. Correspondeu-se com Carl Gustav Jung, que se interessou pelo material. Fundou em 1952 o Museu de Imagens do Inconsciente, com um acervo de dezenas de milhares de obras. Introduziu também a presença de gatos no tratamento. Morreu aos 94 anos.'
  },

  {
    id: 'goleman',
    author: 'Daniel Goleman',
    cat: 'manipulacao',
    profiles: ['psicologos', 'estrategistas'],
    origin: 'norteamericanos',
    role: 'Psicólogo americano (1946–)',
    why: 'Popularizou a ideia de que competência emocional pesa tanto quanto QI.',
    title: 'A outra inteligência',
    excerpt: 'Jornalista científico do New York Times, levou décadas de pesquisa acadêmica ao público geral.',
    text: 'Daniel Goleman nasceu em Stockton, Califórnia, filho de professores universitários. Doutorou-se em psicologia clínica e do desenvolvimento em Harvard e passou uma temporada de estudos na Índia, interessado em meditação e estados de consciência. Trabalhou doze anos como repórter de ciência e comportamento no New York Times.\n\nEm 1995 publicou Inteligência Emocional, sintetizando pesquisas de Peter Salovey, John Mayer e da neurociência das emoções, e argumentando que autoconsciência, autorregulação, empatia e habilidade social predizem desempenho e bem-estar de forma que o QI isolado não prediz. O livro vendeu milhões e o termo entrou no vocabulário corporativo e escolar. A tese foi criticada por psicometristas quanto ao rigor das medidas e ao exagero de algumas afirmações — debate que segue aberto. Goleman dedicou-se depois à aprendizagem socioemocional em escolas e à relação entre atenção e liderança.'
  },

  /* ---------------- ESPORTE ---------------- */
  {
    id: 'serena',
    author: 'Serena Williams',
    cat: 'empoderamento',
    profiles: ['atletas'],
    origin: 'norteamericanos',
    role: 'Tenista americana (1981–)',
    why: 'Ganhou vinte e três títulos de Grand Slam, um deles grávida.',
    title: 'As quadras de Compton',
    excerpt: 'Aprendeu tênis num bairro violento de Los Angeles com um pai que estudou o esporte em fitas de vídeo.',
    text: 'Serena Jameka Williams nasceu em Michigan e cresceu em Compton, na Califórnia. O pai, Richard Williams, decidiu antes de ela nascer que teria filhas tenistas e aprendeu o esporte sozinho, com livros e fitas de vídeo, treinando as meninas em quadras públicas deterioradas de um bairro dominado pela violência.\n\nProfissional aos catorze anos, conquistou vinte e três títulos de simples de Grand Slam na Era Aberta — o Aberto da Austrália de 2017 foi vencido nas primeiras semanas de gravidez, algo que ela só revelou depois. O parto teve complicações graves com embolia pulmonar, episódio que ela usou publicamente para chamar atenção à mortalidade materna entre mulheres negras nos Estados Unidos. Enfrentou ao longo da carreira comentários racistas e sexistas sobre corpo e comportamento, e não se calou sobre eles. Encerrou a carreira competitiva em 2022 e passou a atuar como investidora em empresas fundadas por mulheres e por pessoas negras.'
  },

  {
    id: 'jesseowens',
    author: 'Jesse Owens',
    cat: 'dificeis',
    profiles: ['atletas', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Atleta americano (1913–1980)',
    why: 'Ganhou quatro medalhas de ouro na Berlim de Hitler e voltou para um país segregado.',
    title: 'Berlim, 1936',
    excerpt: 'Neto de escravizados, humilhou a teoria racial nazista e teve que usar o elevador de serviço em casa.',
    text: 'James Cleveland Owens nasceu no Alabama, filho de meeiros e neto de pessoas escravizadas. A família migrou para Ohio quando ele era criança. O apelido Jesse veio de um professor que entendeu errado a pronúncia de suas iniciais, J.C. Trabalhava antes e depois da escola; um treinador passou a treiná-lo de manhã para que pudesse manter os empregos.\n\nEm 1935, num único encontro universitário, quebrou três recordes mundiais e igualou um quarto em cerca de quarenta e cinco minutos, com a coluna lesionada. Nos Jogos de Berlim, em 1936, concebidos como vitrine da superioridade racial nazista, ganhou quatro medalhas de ouro — cem metros, duzentos metros, salto em distância e revezamento. De volta aos Estados Unidos, não recebeu convite da Casa Branca e teve de usar o elevador de serviço para entrar em sua própria festa de homenagem em Nova York. Passou anos com dificuldades financeiras, chegando a correr contra cavalos em exibições. Morreu aos 66 anos.'
  },

  {
    id: 'jordan',
    author: 'Michael Jordan',
    cat: 'motivacao',
    profiles: ['atletas', 'empresarios'],
    origin: 'norteamericanos',
    role: 'Basquetebolista americano (1963–)',
    why: 'Foi cortado do time da escola e virou o jogador mais influente da história do esporte.',
    title: 'O corte que não esqueceu',
    excerpt: 'Aos quinze anos não entrou no time principal do colégio. Guardou a lista e treinou por causa dela.',
    text: 'Michael Jeffrey Jordan nasceu no Brooklyn e cresceu na Carolina do Norte, filho de um supervisor de fábrica e de uma bancária. No segundo ano do ensino médio não entrou no time principal do colégio, indo para o time reserva. Contou depois que, sempre que pensava em desistir de um treino, se lembrava da lista com os nomes selecionados sem o seu.\n\nJogou na Universidade da Carolina do Norte, onde acertou a cesta decisiva do título nacional como calouro. Foi a terceira escolha do draft de 1984. Ganhou seis títulos da NBA com o Chicago Bulls, cinco prêmios de jogador mais valioso e dois ouros olímpicos. Em 1993 interrompeu a carreira após o assassinato do pai e passou uma temporada jogando beisebol na segunda divisão, antes de voltar e ganhar mais três títulos seguidos. Sua linha de tênis mudou a economia do esporte. Foi criticado por evitar posicionamentos políticos durante a carreira, tema que ele próprio revisitou depois.'
  },

  /* ---------------- DITADORES (contexto histórico) ---------------- */
  {
    id: 'vargas',
    author: 'Getúlio Vargas',
    cat: 'politica',
    profiles: ['politicos', 'ditadores'],
    origin: 'brasileiros',
    role: 'Presidente brasileiro (1882–1954)',
    why: 'Governou quinze anos seguidos, criou a CLT e implantou uma ditadura com censura e tortura.',
    title: 'O trabalhismo e a censura',
    excerpt: 'Deu direitos trabalhistas com uma mão e fechou o Congresso com a outra.',
    text: 'Getúlio Dornelles Vargas nasceu em São Borja, Rio Grande do Sul, numa família de estancieiros e políticos. Foi deputado, ministro da Fazenda e presidente do estado gaúcho. Derrotado na eleição presidencial de 1930, chegou ao poder pela Revolução do mesmo ano e nele permaneceu quinze anos ininterruptos.\n\nSeu período consolidou a legislação trabalhista, o salário mínimo, a Justiça do Trabalho, a Petrobras e a industrialização por substituição de importações. Simultaneamente, o Estado Novo, implantado por golpe em 1937 com apoio militar, fechou o Congresso, cassou partidos, censurou a imprensa pelo DIP, prendeu e torturou opositores e deportou Olga Benário grávida para a Alemanha nazista. Deposto em 1945, voltou eleito em 1950. Cercado por uma crise política aguda e por escândalos envolvendo sua guarda pessoal, tirou a própria vida no Palácio do Catete em agosto de 1954, deixando uma carta-testamento que mudou o rumo da crise.'
  },

  {
    id: 'maozedong',
    author: 'Mao Tsé-Tung',
    cat: 'politica',
    profiles: ['politicos', 'ditadores', 'lideres'],
    origin: 'asiaafrica',
    role: 'Líder chinês (1893–1976)',
    why: 'Unificou a China moderna e conduziu políticas que mataram dezenas de milhões.',
    title: 'A Longa Marcha e o custo',
    excerpt: 'Filho de camponeses, fundou a China comunista e impôs campanhas com consequências catastróficas.',
    text: 'Mao Tsé-Tung nasceu numa família de camponeses relativamente prósperos em Hunan. Trabalhou como assistente de biblioteca em Pequim, onde teve contato com o marxismo, e foi um dos fundadores do Partido Comunista Chinês em 1921. Ao contrário da ortodoxia soviética, apostou no campesinato e não no operariado urbano como base da revolução.\n\nLiderou a Longa Marcha em 1934, retirada de mais de nove mil quilômetros que consolidou sua liderança, e proclamou a República Popular da China em 1949, encerrando um século de humilhações estrangeiras e guerra civil. As políticas seguintes tiveram custo humano imenso: o Grande Salto Adiante, entre 1958 e 1962, provocou uma das maiores fomes da história, com dezenas de milhões de mortos; a Revolução Cultural, a partir de 1966, destruiu patrimônio, perseguiu intelectuais e desorganizou o país por uma década. Sua avaliação histórica na própria China permanece oficialmente dividida entre acertos e erros graves.'
  }
];
