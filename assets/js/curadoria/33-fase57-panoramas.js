/* MeMotiva — curadoria/33-fase57-panoramas.js
   Fase 57 — panoramas (lotes 1–6).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ===== FASE 57a — panoramas (lote 1) ===== */
(function () {
  var P = {
    'Albert Einstein': {
      resumo: 'Reformulou a física em cinco artigos publicados num único ano, enquanto trabalhava como examinador de patentes.',
      bio: [
        'Albert Einstein nasceu em Ulm, na Alemanha, em 14 de março de 1879. Foi aluno indisciplinado com professores autoritários e brilhante em matemática e física. Formou-se no Politécnico de Zurique em 1900 e não conseguiu posição acadêmica: passou dois anos em empregos precários até entrar, em 1902, no escritório de patentes de Berna como examinador de terceira classe.',
        'Em 1905, aos 26 anos e fora de qualquer universidade, publicou quatro artigos que mudaram a física: sobre o efeito fotoelétrico, o movimento browniano, a relatividade restrita e a equivalência entre massa e energia. O ano ficou conhecido como annus mirabilis. Em 1915 completou a relatividade geral, que reescreveu a gravidade como curvatura do espaço-tempo.',
        'A confirmação da teoria veio em 1919, com a observação do eclipse solar em Sobral, no Ceará, e na ilha de Príncipe, que mediu o desvio da luz das estrelas pelo Sol. Einstein tornou-se a primeira celebridade científica global. Recebeu o Nobel de Física em 1921 — pelo efeito fotoelétrico, e não pela relatividade.',
        'Judeu e pacifista declarado, deixou a Alemanha em 1933 quando Hitler chegou ao poder e instalou-se em Princeton. Em 1939 assinou a carta a Roosevelt que alertava para a possibilidade de uma bomba atômica alemã, decisão que lamentaria. Passou as décadas finais buscando sem sucesso uma teoria unificada e resistindo à interpretação probabilística da mecânica quântica. Morreu em Princeton em 18 de abril de 1955.'
      ],
      contexto:
        'Einstein trabalhou num momento em que a física clássica parecia concluída e restavam apenas algumas anomalias a resolver. Foram justamente essas anomalias que ele levou a sério, e delas saiu uma física nova. Sua figura pública — o cientista que fala de paz, de educação e de responsabilidade — é tão determinante quanto sua obra técnica, e é dela que vem a enorme quantidade de frases que lhe são atribuídas sem documento.',
      contribuicoes: [
        'Formulou a relatividade restrita (1905) e a relatividade geral (1915).',
        'Explicou o efeito fotoelétrico, base da física quântica, trabalho que lhe rendeu o Nobel.',
        'Demonstrou, pelo movimento browniano, a existência real de átomos e moléculas.',
        'Estabeleceu a equivalência entre massa e energia.',
        'Assinou com Bertrand Russell, em 1955, o manifesto contra as armas nucleares.'
      ],
      cronologia: [
        [1879, 'Nasce em Ulm, na Alemanha, em 14 de março.'],
        [1902, 'Entra no escritório de patentes de Berna.'],
        [1905, 'Publica os quatro artigos do annus mirabilis.'],
        [1915, 'Conclui a relatividade geral.'],
        [1919, 'O eclipse observado em Sobral confirma a teoria.'],
        [1921, 'Recebe o Nobel de Física.'],
        [1933, 'Deixa a Alemanha e instala-se em Princeton.'],
        [1939, 'Assina a carta a Roosevelt sobre a bomba atômica.'],
        [1955, 'Morre em Princeton, em 18 de abril.']
      ],
      nota: null
    },
    Platão: {
      resumo: 'Fundou a primeira escola filosófica permanente do Ocidente e escreveu diálogos que continuam sendo o ponto de partida da filosofia.',
      bio: [
        'Platão nasceu em Atenas por volta de 428 a.C., em família aristocrática ligada à política da cidade. Pretendia seguir carreira pública, mas afastou-se depois da violência do governo dos Trinta Tiranos e, sobretudo, depois da condenação e execução de Sócrates, em 399 a.C., que ele considerou a prova de que a cidade não sabia reconhecer o homem justo.',
        'Viajou pelo Egito, pela Itália e pela Sicília, onde tentou influenciar os tiranos de Siracusa em três ocasiões, sempre sem sucesso — numa delas foi vendido como escravo e resgatado por amigos. Por volta de 387 a.C. fundou a Academia, em Atenas, que funcionaria por mais de novecentos anos.',
        'Escreveu cerca de trinta diálogos, quase todos com Sócrates como personagem principal. Neles desenvolveu a teoria das formas, a alegoria da caverna, a divisão tripartite da alma, a crítica à democracia ateniense e o projeto de cidade governada por filósofos. Diferente de quase todos os filósofos posteriores, nunca escreveu em nome próprio: suas posições aparecem sempre pela boca de personagens.',
        'Aristóteles foi seu aluno por vinte anos na Academia e viria a discordar dele em pontos centrais. Platão morreu em Atenas por volta de 348 a.C. Sua obra sobreviveu praticamente completa, caso raríssimo na Antiguidade, e atravessou o neoplatonismo, a patrística cristã e o Renascimento.'
      ],
      contexto:
        'Platão escreve numa Atenas derrotada na guerra contra Esparta, com a democracia desacreditada e a memória fresca do julgamento de Sócrates. Boa parte de sua obra é uma tentativa de responder a uma pergunta política concreta: como organizar uma cidade que não mate seus melhores cidadãos. A resposta que ele dá — o governo dos que sabem — foi criticada desde a Antiguidade e continua sendo objeto de disputa.',
      contribuicoes: ['Fundou a Academia, primeira instituição de ensino superior permanente do Ocidente.', 'Escreveu a República, o Banquete, o Fédon, o Górgias e a Apologia de Sócrates.', 'Formulou a teoria das formas e a alegoria da caverna.', 'É a principal fonte sobre Sócrates, que nada escreveu.', 'Estabeleceu o diálogo como forma filosófica.'],
      cronologia: [
        [-428, 'Nasce em Atenas, por volta deste ano.'],
        [-399, 'Sócrates é condenado e executado.'],
        [-387, 'Funda a Academia em Atenas.'],
        [-367, 'Aristóteles ingressa na Academia.'],
        [-348, 'Morre em Atenas, por volta deste ano.']
      ],
      nota: null
    },
    'Carl Sagan': {
      resumo: 'Levou a astronomia a centenas de milhões de pessoas e transformou a divulgação científica em obra de autor.',
      bio: [
        'Carl Sagan nasceu no Brooklyn, em Nova York, em 9 de novembro de 1934, filho de imigrantes judeus do Leste Europeu. Contou que decidiu ser cientista na infância, ao descobrir numa biblioteca pública que as estrelas eram sóis distantes. Doutorou-se em astronomia e astrofísica pela Universidade de Chicago em 1960.',
        'Como pesquisador, trabalhou na estimativa da temperatura de superfície de Vênus, que previu altíssima por efeito estufa descontrolado — confirmado pelas sondas. Participou das missões Mariner, Viking, Voyager e Galileo, e foi professor em Cornell por quase três décadas.',
        "Em 1980 apresentou a série de televisão 'Cosmos', vista por centenas de milhões de pessoas em mais de sessenta países, acompanhada do livro homônimo. Escreveu ainda 'O Mundo Assombrado pelos Demônios', defesa do pensamento cético, e o romance 'Contato', adaptado ao cinema.",
        'Foi crítico público da corrida nuclear e um dos autores do estudo sobre o inverno nuclear, em 1983. Defendeu a busca por vida extraterrestre como programa científico sério e idealizou as placas da Pioneer e o disco de ouro da Voyager. Morreu em Seattle em 20 de dezembro de 1996, aos 62 anos.'
      ],
      contexto:
        'Sagan atuou num período em que a comunidade científica tratava a divulgação como atividade menor — e chegou a ter sua entrada na Academia Nacional de Ciências barrada em parte por isso. A popularidade que conquistou mudou esse julgamento: hoje a comunicação pública da ciência é reconhecida como função legítima do pesquisador, e boa parte dos divulgadores atuais se apresenta como herdeira de seu trabalho.',
      contribuicoes: [
        "Apresentou e coescreveu 'Cosmos', a série de divulgação científica mais assistida da história.",
        'Previu o efeito estufa descontrolado de Vênus, depois confirmado por sondas.',
        'Idealizou as placas da Pioneer e o disco de ouro da Voyager, mensagens humanas enviadas ao espaço.',
        'Coautor do estudo que formulou a hipótese do inverno nuclear.',
        "Escreveu 'O Mundo Assombrado pelos Demônios', referência do pensamento cético."
      ],
      cronologia: [
        [1934, 'Nasce no Brooklyn, Nova York, em 9 de novembro.'],
        [1960, 'Doutora-se em astronomia pela Universidade de Chicago.'],
        [1977, 'Lançamento das sondas Voyager com o disco de ouro.'],
        [1980, "Estreia a série 'Cosmos'."],
        [1983, 'Publica o estudo sobre o inverno nuclear.'],
        [1985, "Publica o romance 'Contato'."],
        [1995, "Publica 'O Mundo Assombrado pelos Demônios'."],
        [1996, 'Morre em Seattle, em 20 de dezembro.']
      ],
      nota: null
    },
    'Baruch Spinoza': {
      resumo: 'Foi expulso de sua comunidade aos 23 anos, recusou cátedras e escreveu a ética mais rigorosa da filosofia moderna polindo lentes para viver.',
      bio: [
        'Baruch Spinoza nasceu em Amsterdã em 24 de novembro de 1632, em família de judeus sefarditas que fugira da Inquisição portuguesa. Recebeu formação rabínica tradicional e leu também Descartes, a filosofia escolástica e a ciência nova de seu tempo.',
        "Em 1656, aos 23 anos, foi alvo do 'herem' mais severo já emitido pela comunidade judaica de Amsterdã — uma excomunhão com maldição explícita e proibição de qualquer contato. Nunca se converteu a outra religião nem tentou reverter a sentença. Passou a assinar Benedictus e a viver do ofício de polir lentes para microscópios e telescópios.",
        "Publicou em vida apenas dois livros, um deles anônimo: o 'Tratado Teológico-Político', de 1670, que defende a liberdade de pensamento e submete as Escrituras à crítica histórica. Foi proibido e atacado em toda a Europa. Recusou em 1673 a cátedra de filosofia em Heidelberg, para não comprometer sua independência.",
        "Sua obra maior, a 'Ética', foi publicada meses após sua morte. Escrita em ordem geométrica, com definições, axiomas e proposições, identifica Deus à natureza, nega o livre-arbítrio como usualmente entendido e propõe que a liberdade está em compreender as causas que nos determinam. Morreu em Haia em 21 de fevereiro de 1677, aos 44 anos, provavelmente de doença pulmonar agravada pelo pó de vidro."
      ],
      contexto:
        'Spinoza escreveu na República Holandesa, o lugar mais tolerante da Europa do século XVII — e ainda assim seu livro foi banido e sua obra principal só pôde sair depois de sua morte. Por mais de um século, ser chamado de espinosista equivalia a ser acusado de ateísmo. A reabilitação veio no século XIX, com o romantismo alemão, e sua influência hoje atravessa a filosofia, a psicologia e a neurociência.',
      contribuicoes: [
        "Escreveu a 'Ética demonstrada à maneira dos geômetras', publicada postumamente em 1677.",
        "Publicou o 'Tratado Teológico-Político', um dos textos fundadores da crítica bíblica moderna.",
        'Formulou a identificação entre Deus e a natureza que ficaria conhecida como panteísmo espinosista.',
        'Defendeu a liberdade de expressão e a separação entre religião e Estado.',
        'Recusou a cátedra de Heidelberg para preservar a independência de seu pensamento.'
      ],
      cronologia: [
        [1632, 'Nasce em Amsterdã, em 24 de novembro.'],
        [1656, 'É excomungado pela comunidade judaica de Amsterdã.'],
        [1670, "Publica anonimamente o 'Tratado Teológico-Político'."],
        [1673, 'Recusa a cátedra de filosofia em Heidelberg.'],
        [1677, "Morre em Haia, em 21 de fevereiro; a 'Ética' é publicada meses depois."]
      ],
      nota: null
    },
    'Ayrton Senna': {
      resumo: 'Tricampeão mundial de Fórmula 1, tornou-se símbolo nacional brasileiro e morreu em pista aos 34 anos.',
      bio: [
        'Ayrton Senna da Silva nasceu em São Paulo em 21 de março de 1960. Começou no kart aos quatro anos, com um motor de cortador de grama montado pelo pai, e disputou profissionalmente a partir dos treze. Mudou-se para a Inglaterra em 1981 para correr nas categorias de base e venceu praticamente tudo em que competiu.',
        'Estreou na Fórmula 1 em 1984 pela Toleman e chamou atenção logo na sexta corrida, em Mônaco, sob chuva forte. Passou pela Lotus e, em 1988, foi para a McLaren, onde conquistou os títulos de 1988, 1990 e 1991 e travou com Alain Prost uma das rivalidades mais intensas da história do esporte.',
        'Era reconhecido pela velocidade em volta única — somou 65 poles, recorde que durou mais de uma década — e pelo desempenho na chuva. No Brasil, tornou-se figura que ultrapassava o esporte: correr com a bandeira brasileira após as vitórias virou gesto de afirmação coletiva num país em crise econômica.',
        'Morreu em 1º de maio de 1994, em Ímola, na Itália, em acidente na curva Tamburello, durante o Grande Prêmio de San Marino. Seu velório reuniu centenas de milhares de pessoas em São Paulo. A comoção levou a uma revisão profunda dos padrões de segurança da Fórmula 1, e nenhum piloto morreu em corrida na categoria nos vinte anos seguintes.'
      ],
      contexto: 'Senna correu numa Fórmula 1 sem os dispositivos de segurança atuais e num Brasil de hiperinflação e desânimo público. A combinação dos dois fatos explica a dimensão que sua figura alcançou: ele era, para muitos brasileiros, a prova semanal de que era possível ganhar. A fundação criada por sua família após sua morte atende milhões de crianças em programas de educação.',
      contribuicoes: ['Tricampeão mundial de Fórmula 1 em 1988, 1990 e 1991.', 'Conquistou 41 vitórias e 65 pole positions em 161 corridas.', 'Sua morte provocou a maior revisão de segurança da história da categoria.', 'Destinou recursos próprios a projetos sociais, origem do Instituto Ayrton Senna.', 'Tornou-se a principal referência esportiva brasileira do fim do século XX.'],
      cronologia: [
        [1960, 'Nasce em São Paulo, em 21 de março.'],
        [1984, 'Estreia na Fórmula 1 pela Toleman; segundo lugar em Mônaco.'],
        [1988, 'Primeiro título mundial, pela McLaren.'],
        [1990, 'Segundo título mundial.'],
        [1991, 'Terceiro título mundial; vence no Brasil com o carro travado em sexta marcha.'],
        [1994, 'Morre em Ímola, em 1º de maio.']
      ],
      nota: null
    },
    'Guimarães Rosa': {
      resumo: 'Médico e diplomata, reinventou a língua portuguesa escrita a partir da fala do sertão mineiro.',
      bio: [
        'João Guimarães Rosa nasceu em Cordisburgo, Minas Gerais, em 27 de junho de 1908. Formou-se em medicina e clinicou no interior do estado, onde recolheu a fala, os casos e a paisagem que atravessariam toda a sua obra. Estudou idiomas por conta própria a vida inteira e chegou a ter noções de mais de uma dezena deles.',
        'Ingressou na carreira diplomática em 1934. Serviu em Hamburgo durante a Segunda Guerra, onde ajudou judeus a obter vistos para o Brasil, e depois em Bogotá e em Paris. Entre uma missão e outra, escrevia.',
        "Publicou 'Sagarana' em 1946 e, em 1956, dois livros no mesmo ano: 'Corpo de Baile' e 'Grande Sertão: Veredas'. O romance, narrado em fluxo contínuo pelo ex-jagunço Riobaldo a um interlocutor mudo, é considerado a obra máxima da prosa brasileira. Rosa criava palavras, recuperava arcaísmos, importava termos de outras línguas e trabalhava o ritmo da frase como quem compõe música.",
        'Foi eleito para a Academia Brasileira de Letras em 1963, mas adiou a posse por quatro anos, dizendo temer a emoção. Tomou posse em 16 de novembro de 1967 e morreu três dias depois, no Rio de Janeiro, de infarto.'
      ],
      contexto: 'Rosa publica quando o regionalismo brasileiro já havia produzido sua grande safra social nos anos 1930. Sua obra rompe com esse molde: usa o mesmo cenário — o sertão — mas o converte em espaço metafísico, onde as perguntas são sobre o bem, o mal, o pacto e a travessia. A dificuldade da língua que ele inventou é parte do argumento: não se atravessa o sertão sem esforço.',
      contribuicoes: [
        "Escreveu 'Grande Sertão: Veredas', considerado o maior romance da literatura brasileira.",
        "Publicou 'Sagarana', 'Corpo de Baile' e 'Primeiras Estórias'.",
        'Criou uma língua literária própria, com neologismos, arcaísmos e sintaxe de fala sertaneja.',
        'Ajudou judeus a obter vistos para o Brasil enquanto era cônsul em Hamburgo.',
        'Foi eleito para a Academia Brasileira de Letras em 1963.'
      ],
      cronologia: [
        [1908, 'Nasce em Cordisburgo, Minas Gerais, em 27 de junho.'],
        [1934, 'Ingressa na carreira diplomática.'],
        [1938, 'Assume o consulado em Hamburgo.'],
        [1946, "Publica 'Sagarana'."],
        [1956, "Publica 'Corpo de Baile' e 'Grande Sertão: Veredas'."],
        [1962, "Publica 'Primeiras Estórias'."],
        [1967, 'Toma posse na Academia Brasileira de Letras e morre três dias depois.']
      ],
      nota: null
    },
    'Carlos Drummond de Andrade': {
      resumo: 'Do poeta irônico do interior mineiro ao maior nome da poesia brasileira do século XX.',
      bio: [
        'Carlos Drummond de Andrade nasceu em Itabira, Minas Gerais, em 31 de outubro de 1902, filho de fazendeiros. Foi expulso do colégio por insubordinação mental, formou-se em farmácia sem nunca exercer a profissão e tornou-se funcionário público, ofício que manteria por décadas.',
        "Estreou em 1930 com 'Alguma Poesia', livro de tom irônico e coloquial que abre com o poema sobre o anjo torto e o gauche na vida. Mudou-se para o Rio de Janeiro em 1934 e trabalhou como chefe de gabinete do ministro Gustavo Capanema durante o Estado Novo.",
        "Com 'Sentimento do Mundo', de 1940, e 'A Rosa do Povo', de 1945, sua poesia se abre para a guerra, a multidão e a injustiça social. Depois vieram 'Claro Enigma' e a volta à forma clássica, e uma produção contínua de crônicas em jornal que o tornou figura familiar aos brasileiros.",
        'Recusou prêmios e homenagens oficiais ao longo da vida, incluindo convites para a Academia Brasileira de Letras. Morreu no Rio de Janeiro em 17 de agosto de 1987, doze dias depois da morte da filha Maria Julieta.'
      ],
      contexto: 'Drummond atravessa todas as fases do modernismo brasileiro e sobrevive a elas. Sua obra vai do experimentalismo dos anos 1920 à poesia social dos anos 1940 e à meditação existencial da maturidade, sem que nenhuma dessas fases anule a anterior. A voz que ele criou — desconfiada, precisa, sem retórica — tornou-se o padrão de referência da poesia brasileira.',
      contribuicoes: [
        "Publicou 'Alguma Poesia', 'Sentimento do Mundo', 'A Rosa do Povo' e 'Claro Enigma'.",
        'Escreveu crônicas semanais em jornal por mais de quarenta anos.',
        'Apresentou ao país a obra de Adélia Prado, em 1975, em sua coluna no Jornal do Brasil.',
        'Traduziu Balzac, Proust, Choderlos de Laclos e García Lorca.',
        'Recusou sistematicamente honrarias oficiais e a cadeira na Academia Brasileira de Letras.'
      ],
      cronologia: [
        [1902, 'Nasce em Itabira, Minas Gerais, em 31 de outubro.'],
        [1930, "Publica 'Alguma Poesia'."],
        [1934, 'Muda-se para o Rio de Janeiro.'],
        [1940, "Publica 'Sentimento do Mundo'."],
        [1945, "Publica 'A Rosa do Povo'."],
        [1951, "Publica 'Claro Enigma'."],
        [1987, 'Morre no Rio de Janeiro, em 17 de agosto.']
      ],
      nota: null
    },
    'Graciliano Ramos': {
      resumo: 'Prefeito, preso político e escritor da prosa mais seca da literatura brasileira.',
      bio: [
        'Graciliano Ramos nasceu em Quebrangulo, Alagoas, em 27 de outubro de 1892. Trabalhou no comércio da família, foi revisor de jornal no Rio e voltou ao interior alagoano, onde se elegeu prefeito de Palmeira dos Índios em 1927. Seus relatórios de prefeitura, escritos com ironia e concisão incomuns para o gênero, chamaram atenção e o levaram à literatura.',
        "Publicou 'Caetés' em 1933, 'São Bernardo' em 1934 e 'Angústia' em 1936. Neste último ano foi preso sem acusação formal, no contexto da repressão que se seguiu à Intentona Comunista. Passou dez meses encarcerado, entre navios-prisão e a Colônia Correcional da Ilha Grande.",
        "Solto e sem emprego, trabalhou como revisor no Rio de Janeiro. Publicou 'Vidas Secas' em 1938, romance sobre uma família de retirantes construído em capítulos que funcionam também como contos independentes. É seu livro mais lido e traduzido.",
        "Filiou-se ao Partido Comunista em 1945. Escreveu 'Memórias do Cárcere', relato da prisão publicado postumamente em 1953, e 'Infância', sobre a formação num ambiente familiar violento. Morreu no Rio de Janeiro em 20 de março de 1953."
      ],
      contexto: 'Graciliano é o autor do romance de 1930 que levou mais longe a recusa do ornamento. Escreve contra a retórica, contra a piedade fácil e contra a própria ideia de que a literatura deva consolar. Sua prisão sem acusação, num país que se dizia legal, é o fato biográfico que melhor explica a desconfiança permanente de sua obra diante de qualquer autoridade.',
      contribuicoes: [
        "Escreveu 'Vidas Secas', 'São Bernardo', 'Angústia' e 'Memórias do Cárcere'.",
        'Levou ao extremo a prosa despojada no romance brasileiro moderno.',
        "Deixou em 'Memórias do Cárcere' um dos principais relatos sobre a repressão do Estado Novo.",
        'Seus relatórios como prefeito de Palmeira dos Índios são estudados como peça literária.',
        "'Vidas Secas' foi adaptado ao cinema por Nelson Pereira dos Santos, marco do Cinema Novo."
      ],
      cronologia: [
        [1892, 'Nasce em Quebrangulo, Alagoas, em 27 de outubro.'],
        [1927, 'Elege-se prefeito de Palmeira dos Índios.'],
        [1934, "Publica 'São Bernardo'."],
        [1936, 'É preso sem acusação formal; passa dez meses encarcerado.'],
        [1938, "Publica 'Vidas Secas'."],
        [1945, "Publica 'Infância' e filia-se ao Partido Comunista."],
        [1953, "Morre no Rio de Janeiro; 'Memórias do Cárcere' é publicado."]
      ],
      nota: null
    },
    'Vincent van Gogh': {
      resumo: 'Pintou cerca de novecentas telas em dez anos, vendeu pouquíssimo em vida e tornou-se um dos artistas mais reconhecidos do mundo.',
      bio: [
        'Vincent van Gogh nasceu em Zundert, nos Países Baixos, em 30 de março de 1853, filho de pastor protestante. Trabalhou como negociante de arte, professor e, por fim, como pregador leigo numa região mineira da Bélgica, onde viveu em condições de extrema pobreza junto aos trabalhadores e foi afastado pela própria igreja por excesso de zelo.',
        "Decidiu tornar-se pintor aos 27 anos, sem formação formal. Os primeiros trabalhos, em tons escuros, retratam camponeses e tecelões — 'Os Comedores de Batatas', de 1885, é o principal deles. Em 1886 foi para Paris, onde conheceu os impressionistas e sua paleta se transformou radicalmente.",
        "Mudou-se em 1888 para Arles, no sul da França, na fase mais produtiva de sua vida. Ali pintou os girassóis, o quarto e o café noturno, e viveu dois meses com Gauguin que terminaram na crise em que cortou parte da própria orelha. Internou-se voluntariamente no asilo de Saint-Rémy, onde pintou 'A Noite Estrelada'.",
        'Sustentou-se a vida inteira com o dinheiro enviado pelo irmão Theo, com quem trocou centenas de cartas que hoje são documento essencial sobre sua obra e seu estado mental. Morreu em Auvers-sur-Oise em 29 de julho de 1890, aos 37 anos, de ferimento a bala. Theo morreu seis meses depois.'
      ],
      contexto:
        'Van Gogh pintou em dez anos uma obra inteira e morreu antes de qualquer reconhecimento. A fama póstuma veio rápido, impulsionada pela viúva de Theo, que organizou e divulgou as cartas e as telas. Sua trajetória consolidou, para melhor e para pior, o mito do artista incompreendido — leitura que a própria obra desmente: as cartas mostram um pintor extremamente consciente do que estava fazendo tecnicamente.',
      contribuicoes: [
        'Produziu cerca de novecentas pinturas e mais de mil desenhos em dez anos de atividade.',
        "Pintou 'A Noite Estrelada', 'Os Girassóis', 'O Quarto' e dezenas de autorretratos.",
        'Deixou mais de seiscentas cartas ao irmão Theo, documento central da história da arte.',
        'Sua cor e pincelada influenciaram diretamente o expressionismo e o fauvismo.',
        'O Museu Van Gogh, em Amsterdã, reúne a maior coleção de sua obra.'
      ],
      cronologia: [
        [1853, 'Nasce em Zundert, Países Baixos, em 30 de março.'],
        [1880, 'Decide tornar-se pintor, aos 27 anos.'],
        [1885, "Pinta 'Os Comedores de Batatas'."],
        [1886, 'Muda-se para Paris e conhece os impressionistas.'],
        [1888, 'Instala-se em Arles; crise com Gauguin em dezembro.'],
        [1889, "Interna-se em Saint-Rémy e pinta 'A Noite Estrelada'."],
        [1890, 'Morre em Auvers-sur-Oise, em 29 de julho.']
      ],
      nota: null
    },
    'Charles Chaplin': {
      resumo: 'Criou o Vagabundo, o personagem mais reconhecido do cinema, e foi expulso dos Estados Unidos por suas posições políticas.',
      bio: [
        'Charles Spencer Chaplin nasceu em Londres em 16 de abril de 1889. A infância foi de miséria extrema: o pai alcoolista abandonou a família e morreu cedo, a mãe foi internada em hospital psiquiátrico, e ele passou por asilos de indigentes e casas de trabalho para crianças. Entrou no teatro de variedades ainda menino.',
        'Chegou aos Estados Unidos em turnê e passou ao cinema em 1914. O personagem do Vagabundo — chapéu-coco, bengala, sapatos enormes, bigode — apareceu naquele mesmo ano e tornou-se a imagem mais reconhecível do mundo em uma década. Em 1919 fundou a United Artists com Douglas Fairbanks, Mary Pickford e D. W. Griffith, para controlar a própria produção.',
        "Dirigiu, escreveu, produziu, montou e musicou seus filmes. 'O Garoto', 'Em Busca do Ouro', 'Luzes da Cidade' e 'Tempos Modernos' combinam comédia física com crítica social direta à pobreza, à linha de montagem e ao desemprego. Resistiu ao cinema falado por mais de uma década.",
        "Em 1940 lançou 'O Grande Ditador', sátira a Hitler feita quando os Estados Unidos ainda não haviam entrado na guerra. Perseguido no pós-guerra pelo macartismo por suas posições de esquerda, teve o visto de retorno cancelado em 1952 e passou os últimos 25 anos na Suíça. Recebeu um Oscar honorário em 1972, ao voltar brevemente aos Estados Unidos. Morreu em Vevey em 25 de dezembro de 1977."
      ],
      contexto:
        "Chaplin construiu sua obra na transição do cinema mudo para o falado e usou a comédia para tratar de desemprego, fome e autoritarismo num período em que esses temas dominavam a vida real. A expulsão dos Estados Unidos mostra o custo político dessa escolha. O discurso final de 'O Grande Ditador', em que o personagem abandona a máscara cômica para falar diretamente à câmera, é uma das sequências mais citadas da história do cinema.",
      contribuicoes: [
        'Criou o Vagabundo, personagem mais reconhecido da história do cinema.',
        "Dirigiu 'O Garoto', 'Luzes da Cidade', 'Tempos Modernos' e 'O Grande Ditador'.",
        'Cofundou a United Artists em 1919, para dar autonomia produtiva aos artistas.',
        "Compôs a trilha de seus próprios filmes, entre elas a melodia de 'Smile'.",
        'Recebeu Oscar honorário em 1972, com a maior ovação da história da cerimônia.'
      ],
      cronologia: [
        [1889, 'Nasce em Londres, em 16 de abril.'],
        [1914, 'Estreia no cinema e cria o Vagabundo.'],
        [1919, 'Cofunda a United Artists.'],
        [1921, "Lança 'O Garoto'."],
        [1931, "Lança 'Luzes da Cidade'."],
        [1936, "Lança 'Tempos Modernos'."],
        [1940, "Lança 'O Grande Ditador'."],
        [1952, 'Tem o visto de retorno aos Estados Unidos cancelado.'],
        [1977, 'Morre em Vevey, Suíça, em 25 de dezembro.']
      ],
      nota: null
    },
    'Maria Montessori': {
      resumo: 'Uma das primeiras médicas da Itália, criou a pedagogia hoje adotada em milhares de escolas no mundo.',
      bio: [
        'Maria Montessori nasceu em Chiaravalle, na Itália, em 31 de agosto de 1870. Contra a vontade do pai, estudou engenharia e depois medicina, formando-se em 1896 entre as primeiras mulheres médicas do país. Enfrentou hostilidade sistemática: precisava dissecar cadáveres sozinha, à noite, porque não lhe era permitido fazê-lo junto com os colegas homens.',
        'Trabalhou em uma clínica psiquiátrica com crianças consideradas ineducáveis e concluiu que o problema era pedagógico, e não médico. Preparou algumas delas para os exames públicos, que passaram com desempenho igual ou superior ao das crianças ditas normais — resultado que a levou a perguntar o que estava sendo feito de errado com todas as outras.',
        "Em 1907 abriu a primeira Casa dei Bambini num bairro popular de Roma, para filhos de trabalhadores. Ali desenvolveu o método: ambiente preparado na escala da criança, materiais concretos e autocorretivos, liberdade de escolha da atividade e um adulto que observa em vez de dirigir. Publicou 'O Método Montessori' em 1909.",
        'Deixou a Itália em 1934 por oposição ao fascismo, que havia fechado suas escolas. Passou a Segunda Guerra na Índia, onde formou milhares de professores. Foi indicada três vezes ao Nobel da Paz. Morreu em Noordwijk, nos Países Baixos, em 6 de maio de 1952.'
      ],
      contexto: 'Montessori formulou sua pedagogia num momento em que a escola europeia era baseada em imobilidade, memorização e castigo, e em que a educação infantil de crianças pobres praticamente não existia. A decisão de começar por elas, e não por uma escola de elite, é parte central do método: a autonomia que ele propõe foi testada primeiro com quem tinha menos.',
      contribuicoes: ['Criou o método Montessori, adotado hoje em milhares de escolas em todo o mundo.', 'Abriu em 1907 a primeira Casa dei Bambini, em bairro popular de Roma.', 'Introduziu o mobiliário em escala infantil, hoje padrão na educação infantil.', "Publicou 'O Método Montessori' e 'A Mente Absorvente da Criança'.", 'Formou milhares de professores na Índia durante a Segunda Guerra.'],
      cronologia: [
        [1870, 'Nasce em Chiaravalle, Itália, em 31 de agosto.'],
        [1896, 'Forma-se em medicina, entre as primeiras médicas italianas.'],
        [1907, 'Abre a primeira Casa dei Bambini em Roma.'],
        [1909, "Publica 'O Método Montessori'."],
        [1934, 'Deixa a Itália em oposição ao fascismo.'],
        [1939, 'Instala-se na Índia, onde passa a guerra.'],
        [1952, 'Morre em Noordwijk, Países Baixos, em 6 de maio.']
      ],
      nota: null
    },
    'Johann Wolfgang von Goethe': {
      resumo: 'Poeta, romancista, dramaturgo e naturalista, é a figura central da literatura alemã e trabalhou sessenta anos em um único poema dramático.',
      bio: [
        "Johann Wolfgang von Goethe nasceu em Frankfurt em 28 de agosto de 1749, em família abastada, e recebeu educação particular extensa. Formou-se em direito e exerceu brevemente a advocacia, mas a publicação de 'Os Sofrimentos do Jovem Werther', em 1774, o tornou célebre em toda a Europa aos 25 anos.",
        'Em 1775 mudou-se para Weimar a convite do duque Carlos Augusto e ali permaneceu pela vida inteira, acumulando funções de ministro, administrador de minas, diretor de teatro e conselheiro. A viagem à Itália, entre 1786 e 1788, reorientou sua obra do impulso do Sturm und Drang para o classicismo.',
        "Escreveu romances, peças, poesia lírica, autobiografia e tratados científicos. Dedicou-se seriamente à botânica, à anatomia comparada e à óptica: sua 'Teoria das Cores', de 1810, contesta Newton e é hoje estudada mais pela psicologia da percepção do que pela física.",
        "Trabalhou no 'Fausto' por quase sessenta anos. A primeira parte saiu em 1808 e a segunda foi concluída meses antes de sua morte, em Weimar, em 22 de março de 1832. A obra, sobre o homem que aposta a alma pelo conhecimento e pela experiência, é o texto central da literatura alemã."
      ],
      contexto: 'Goethe atravessa a Revolução Francesa, as guerras napoleônicas e o nascimento do romantismo, e recusa se fixar em qualquer desses movimentos. A amplitude de seus interesses — poesia e mineralogia, teatro e anatomia — faz dele o último exemplo plausível do ideal renascentista de homem universal, já no limiar da era das especializações.',
      contribuicoes: [
        "Escreveu 'Fausto', obra central da literatura alemã, em quase sessenta anos de trabalho.",
        "Publicou 'Os Sofrimentos do Jovem Werther', que o tornou célebre aos 25 anos.",
        "Escreveu 'Os Anos de Aprendizado de Wilhelm Meister', matriz do romance de formação.",
        'Formulou a teoria da metamorfose das plantas e descobriu o osso intermaxilar humano.',
        "Publicou a 'Teoria das Cores', em oposição à óptica de Newton."
      ],
      cronologia: [
        [1749, 'Nasce em Frankfurt, em 28 de agosto.'],
        [1774, "Publica 'Os Sofrimentos do Jovem Werther'."],
        [1775, 'Instala-se em Weimar.'],
        [1786, 'Parte para a viagem à Itália.'],
        [1808, "Publica a primeira parte do 'Fausto'."],
        [1810, "Publica a 'Teoria das Cores'."],
        [1832, "Morre em Weimar, em 22 de março; a segunda parte do 'Fausto' é publicada."]
      ],
      nota: null
    },
    Rumi: {
      resumo: 'Místico persa do século XIII, é o poeta mais vendido do mundo de língua inglesa setecentos anos depois de sua morte.',
      bio: [
        'Jalal ad-Din Muhammad Rumi nasceu em 1207 em Balkh, no atual Afeganistão, filho de um teólogo respeitado. A família fugiu do avanço mongol e estabeleceu-se em Konya, na Anatólia — então parte do sultanato de Rum, de onde vem o nome pelo qual ficou conhecido.',
        'Sucedeu o pai como professor de jurisprudência islâmica e vivia como erudito convencional até o encontro, em 1244, com o dervixe errante Shams de Tabriz. A convivência intensa dos dois transformou Rumi: o jurista tornou-se poeta. Quando Shams desapareceu, provavelmente assassinado, a perda tornou-se o motor de sua obra.',
        "Compôs o 'Divan-e Shams-e Tabrizi', dedicado ao amigo desaparecido, e o 'Masnavi', poema de cerca de vinte e cinco mil versos sobre amor divino, separação e retorno, frequentemente chamado de Alcorão em língua persa. Ditava os versos em movimento, muitas vezes girando.",
        'Morreu em Konya em 17 de dezembro de 1273. A ordem sufi Mevlevi, dos dervixes giradores, foi organizada por seu filho a partir de suas práticas. O aniversário de sua morte é celebrado como noite de núpcias, pelo reencontro com o divino.'
      ],
      contexto: 'Rumi escreveu num mundo islâmico atravessado pela devastação mongol, e sua poesia trata de perda e reencontro num sentido tanto pessoal quanto histórico. Sua popularidade atual no Ocidente se apoia em versões livres que costumam remover as referências corânicas e o contexto islâmico — o que torna útil lembrar que o poeta era, antes de tudo, um erudito muçulmano.',
      contribuicoes: [
        "Compôs o 'Masnavi', com cerca de vinte e cinco mil versos, e o 'Divan-e Shams-e Tabrizi'.",
        'Suas práticas deram origem à ordem Mevlevi, dos dervixes giradores.',
        'É o poeta mais vendido dos Estados Unidos, sete séculos após sua morte.',
        'O sema, a dança girante da ordem, é reconhecido pela Unesco como patrimônio imaterial.',
        'Sua obra é referência central da poesia persa e do sufismo.'
      ],
      cronologia: [
        [1207, 'Nasce em Balkh, no atual Afeganistão.'],
        [1228, 'A família estabelece-se em Konya, na Anatólia.'],
        [1244, 'Encontra Shams de Tabriz.'],
        [1248, 'Shams desaparece, provavelmente assassinado.'],
        [1273, 'Morre em Konya, em 17 de dezembro.']
      ],
      nota: null
    },
    'Profeta Muhammad': {
      resumo: 'Comerciante de Meca que fundou o islã e unificou a península arábica em pouco mais de duas décadas.',
      bio: [
        'Muhammad ibn Abdullah nasceu em Meca por volta de 570. Órfão de pai antes de nascer e de mãe aos seis anos, foi criado pelo avô e depois pelo tio Abu Talib. Trabalhou como comerciante e ganhou reputação de honestidade; aos 25 anos casou-se com Khadija, comerciante mais velha e sua empregadora, que seria a primeira a acreditar em sua mensagem.',
        'Por volta de 610, retirado numa caverna do monte Hira, relatou a primeira revelação. Começou a pregar publicamente o monoteísmo numa cidade cuja economia dependia da peregrinação a um santuário politeísta, o que lhe rendeu perseguição crescente. Em 622 migrou com seus seguidores para Medina — a Hégira, que marca o início do calendário islâmico.',
        'Em Medina tornou-se líder político e militar além de religioso, estabelecendo uma comunidade regida por um pacto que incluía tribos judaicas e árabes. Seguiram-se oito anos de conflito com Meca, encerrados com a tomada pacífica da cidade em 630.',
        'Morreu em Medina em 632, tendo unificado a maior parte da península arábica. As revelações que transmitiu foram compiladas no Alcorão; seus ditos e práticas formam a sunna, registrada nos hadices. Em um século, o domínio islâmico iria da Península Ibérica à Ásia Central.'
      ],
      contexto: 'Muhammad atuou numa Arábia fragmentada em tribos rivais, sem estado centralizado, entre os impérios bizantino e persa exauridos por guerras. A rapidez da unificação que conduziu e da expansão posterior é um dos acontecimentos mais determinantes da história mundial. Para os muçulmanos, ele é o último de uma linha de profetas e o modelo de conduta, não um objeto de culto.',
      contribuicoes: ['Transmitiu as revelações compiladas no Alcorão.', 'Fundou o islã, hoje professado por cerca de dois bilhões de pessoas.', 'Estabeleceu em Medina uma comunidade política regida por pacto escrito.', 'Unificou a maior parte da península arábica em pouco mais de duas décadas.', 'Seus ditos e práticas, registrados nos hadices, formam a segunda fonte da lei islâmica.'],
      cronologia: [
        [570, 'Nasce em Meca, por volta deste ano.'],
        [610, 'Relata a primeira revelação no monte Hira.'],
        [622, 'Migra para Medina; início do calendário islâmico.'],
        [630, 'Meca é tomada sem resistência significativa.'],
        [632, 'Morre em Medina.']
      ],
      nota: null
    },
    'Ray Dalio': {
      resumo: 'Fundou o maior fundo de hedge do mundo e publicou abertamente os princípios de decisão que usa para geri-lo.',
      bio: [
        'Raymond Dalio nasceu em Nova York em 8 de agosto de 1949, filho de um músico de jazz. Comprou sua primeira ação aos doze anos, com dinheiro ganho como caddie em um clube de golfe. Formou-se em finanças e fez MBA em Harvard.',
        'Fundou a Bridgewater Associates em 1975, no próprio apartamento. A empresa cresceu até se tornar o maior fundo de hedge do mundo, com mais de cem bilhões de dólares sob gestão, e ficou conhecida por sua abordagem macro global e por estratégias como a carteira de paridade de risco.',
        'Em 1982 fez uma previsão pública catastroficamente errada sobre a economia americana, perdeu quase tudo e precisou demitir todos os funcionários e pedir dinheiro emprestado ao pai. Descreve esse episódio como o mais importante de sua formação: foi dele que nasceu o método de testar sistematicamente as próprias convicções.',
        "Construiu na empresa uma cultura de transparência radical, com reuniões gravadas e avaliação aberta entre colegas — prática admirada e também criticada por sua dureza. Publicou 'Princípios' em 2017, reunindo as regras de vida e de trabalho que formulou, e depois obras sobre ciclos de dívida e ascensão de impérios. Deixou o comando da Bridgewater em 2022."
      ],
      contexto: 'Dalio faz parte de uma geração de gestores que tratou o investimento como problema de engenharia: entender a máquina econômica, identificar relações de causa e efeito e transformá-las em regras testáveis. A decisão incomum de publicar essas regras, inclusive as que tratam de erro e de crítica pessoal, é o que o distingue de seus pares.',
      contribuicoes: [
        'Fundou a Bridgewater Associates, maior fundo de hedge do mundo.',
        'Desenvolveu a estratégia de paridade de risco e a carteira All Weather.',
        "Publicou 'Princípios', com as regras de decisão e a cultura que construiu.",
        'Formulou o modelo do ciclo de dívida de longo prazo, usado para analisar crises.',
        'Assinou o Giving Pledge, comprometendo-se a doar a maior parte da fortuna.'
      ],
      cronologia: [
        [1949, 'Nasce em Nova York, em 8 de agosto.'],
        [1975, 'Funda a Bridgewater Associates em seu apartamento.'],
        [1982, 'Previsão errada quebra a empresa; recomeça do zero.'],
        [1996, 'Lança a estratégia All Weather.'],
        [2017, "Publica 'Princípios'."],
        [2022, 'Deixa o comando da Bridgewater.']
      ],
      nota: null
    },
    'Daniel Goleman': {
      resumo: 'Levou o conceito de inteligência emocional da psicologia acadêmica ao vocabulário corrente do mundo corporativo.',
      bio: [
        'Daniel Goleman nasceu em Stockton, Califórnia, em 7 de março de 1946. Doutorou-se em psicologia clínica e desenvolvimento da personalidade por Harvard, com pesquisa sobre meditação realizada em parte na Índia, e depois passou doze anos escrevendo sobre ciências do comportamento no New York Times.',
        "Em 1995 publicou 'Inteligência Emocional', sistematizando para o público geral pesquisas que vinham sendo feitas havia anos por psicólogos como Peter Salovey e John Mayer, que haviam cunhado o termo em 1990. O livro sustenta que autoconsciência, autorregulação, motivação, empatia e habilidade social pesam tanto quanto o quociente intelectual no desempenho e na vida.",
        'O livro vendeu milhões de exemplares e mudou o vocabulário da gestão de pessoas. Goleman passou a trabalhar a aplicação do conceito ao ambiente de trabalho, publicando sobre liderança emocionalmente inteligente e sobre os estilos de liderança e seu efeito no clima organizacional.',
        'Escreveu também sobre atenção, ecoliteracia e a neurociência das relações, e manteve ao longo da carreira o interesse por meditação e pela conversa entre a psicologia ocidental e as tradições contemplativas, tema de trabalhos escritos com o Dalai Lama e com pesquisadores da área.'
      ],
      contexto:
        'Goleman publicou num momento em que empresas mediam candidatos quase exclusivamente por qualificação técnica e testes cognitivos. O conceito que ele divulgou reorganizou práticas de seleção, avaliação e formação de líderes. Críticos apontam que a evidência empírica sobre a previsão de desempenho é mais fraca do que a popularização sugere — ressalva que o próprio autor passou a incorporar em obras posteriores.',
      contribuicoes: [
        "Publicou 'Inteligência Emocional', um dos livros de psicologia mais vendidos da história.",
        'Levou o conceito ao vocabulário corrente da gestão de pessoas e da educação.',
        'Descreveu seis estilos de liderança e seu efeito sobre o clima organizacional.',
        'Escreveu sobre atenção, foco e os custos cognitivos da distração permanente.',
        'Aproximou a psicologia ocidental das tradições contemplativas em obras com o Dalai Lama.'
      ],
      cronologia: [
        [1946, 'Nasce em Stockton, Califórnia, em 7 de março.'],
        [1974, 'Passa a escrever sobre comportamento na revista Psychology Today.'],
        [1984, 'Torna-se repórter de ciências do comportamento no New York Times.'],
        [1995, "Publica 'Inteligência Emocional'."],
        [1998, "Publica 'Trabalhando com Inteligência Emocional'."],
        [2013, "Publica 'Foco'."]
      ],
      nota: null
    },
    'John D. Rockefeller': {
      resumo: 'Construiu o maior monopólio industrial da história americana e doou em vida a maior parte de uma fortuna sem precedentes.',
      bio: [
        'John Davison Rockefeller nasceu em Richford, Nova York, em 8 de julho de 1839, filho de um vendedor ambulante ausente e de uma mãe batista devota. Começou a trabalhar como auxiliar de escritório aos dezesseis anos e registrava cada centavo recebido e gasto em um caderno que manteve a vida inteira. Doava parte do salário desde o primeiro pagamento.',
        'Entrou no refino de petróleo em 1863, em Cleveland, e fundou a Standard Oil em 1870. Em pouco mais de uma década controlava cerca de noventa por cento da capacidade de refino dos Estados Unidos, por meio de eficiência operacional real, integração vertical e acordos com ferrovias que os concorrentes consideravam predatórios.',
        'A investigação jornalística de Ida Tarbell, publicada a partir de 1902, expôs essas práticas e transformou Rockefeller no símbolo do monopólio abusivo. Em 1911 a Suprema Corte determinou a dissolução da Standard Oil em 34 empresas — várias das quais, como Exxon e Chevron, existem até hoje. A medida multiplicou sua fortuna pessoal.',
        'Dedicou as décadas finais à filantropia organizada, em escala inédita. Financiou a Universidade de Chicago, o instituto de pesquisa médica que se tornaria a Universidade Rockefeller e campanhas de saúde pública em vários países, inclusive no Brasil. Morreu na Flórida em 23 de maio de 1937, aos 97 anos.'
      ],
      contexto: 'Rockefeller é a figura que melhor condensa a contradição da Era Dourada americana: construiu um monopólio que a lei precisou desmontar e, com o mesmo dinheiro, criou a filantropia científica moderna. A Fundação Rockefeller financiou o combate à ancilostomíase e à febre amarela em escala continental e ajudou a estruturar escolas médicas em vários países.',
      contribuicoes: [
        'Fundou a Standard Oil e a transformou no maior monopólio industrial de seu tempo.',
        'Fundou a Universidade de Chicago e o instituto que se tornaria a Universidade Rockefeller.',
        'Criou a Fundação Rockefeller, modelo da filantropia científica moderna.',
        'Financiou campanhas de saúde pública em dezenas de países, incluindo o Brasil.',
        'Doou cerca de metade de sua fortuna ainda em vida.'
      ],
      cronologia: [
        [1839, 'Nasce em Richford, Nova York, em 8 de julho.'],
        [1863, 'Entra no refino de petróleo em Cleveland.'],
        [1870, 'Funda a Standard Oil.'],
        [1902, 'Ida Tarbell inicia a investigação sobre a empresa.'],
        [1911, 'A Suprema Corte determina a dissolução da Standard Oil.'],
        [1913, 'Cria a Fundação Rockefeller.'],
        [1937, 'Morre na Flórida, em 23 de maio.']
      ],
      nota: null
    },
    'Howard Marks': {
      resumo: 'Gestor de dívida em dificuldade, tornou-se conhecido pelos memorandos em que explica ciclos de mercado e risco.',
      bio: [
        'Howard Marks nasceu em Nova York em 23 de abril de 1946. Formou-se em finanças pela Wharton e fez MBA na Universidade de Chicago. Começou a carreira no Citibank, onde viveu de perto o colapso das chamadas Nifty Fifty, ações tidas como seguras a qualquer preço — experiência que o convenceu de que o preço pago importa mais do que a qualidade do ativo.',
        'Passou a gerir títulos de alto risco e dívida em dificuldade, segmentos então desprezados pelo mercado institucional. Em 1995 fundou a Oaktree Capital Management com um grupo de sócios, especializada justamente nesses ativos; a gestora se tornou uma das maiores do mundo no segmento.',
        'Desde 1990 escreve memorandos irregulares a clientes sobre ciclos, risco, psicologia de mercado e erros recorrentes de investidores. Por anos praticamente ninguém respondia, até que Warren Buffett declarou publicamente que os lia assim que chegavam. Os memorandos passaram a ser acompanhados por investidores em todo o mundo.',
        "Publicou 'O Mais Importante para o Investidor' em 2011 e 'Dominando o Ciclo de Mercado' em 2018. Sua posição central é que não se pode prever o futuro, mas se pode saber em que ponto do ciclo se está — e que isso basta para ajustar o nível de risco assumido."
      ],
      contexto: 'Marks escreve contra a pretensão de previsão que domina boa parte do mercado financeiro. Sua ênfase é em pensamento de segundo nível — não basta acertar o que vai acontecer, é preciso acertar algo que o preço ainda não incorporou — e no controle de risco como atividade que só se mostra valiosa quando o ciclo vira.',
      contribuicoes: [
        'Cofundou a Oaktree Capital, uma das maiores gestoras de dívida em dificuldade do mundo.',
        'Escreve desde 1990 os memorandos que se tornaram referência em análise de ciclos.',
        "Publicou 'O Mais Importante para o Investidor' e 'Dominando o Ciclo de Mercado'.",
        'Formulou a distinção entre pensamento de primeiro e de segundo nível no investimento.',
        'Ajudou a consolidar o crédito de alto risco como classe de ativo institucional.'
      ],
      cronologia: [
        [1946, 'Nasce em Nova York, em 23 de abril.'],
        [1978, 'Passa a gerir títulos de alto risco no Citibank.'],
        [1990, 'Escreve o primeiro memorando a clientes.'],
        [1995, 'Cofunda a Oaktree Capital Management.'],
        [2011, "Publica 'O Mais Importante para o Investidor'."],
        [2018, "Publica 'Dominando o Ciclo de Mercado'."]
      ],
      nota: null
    },
    'Kofi Annan': {
      resumo: 'Primeiro secretário-geral da ONU vindo do próprio quadro de funcionários, recebeu o Nobel da Paz em 2001.',
      bio: [
        'Kofi Atta Annan nasceu em Kumasi, em Gana, em 8 de abril de 1938, em família da aristocracia ashanti. Estudou nos Estados Unidos e na Suíça e ingressou no sistema das Nações Unidas em 1962, como funcionário da Organização Mundial da Saúde. Fez toda a carreira dentro da instituição.',
        'Chefiou o Departamento de Operações de Manutenção da Paz nos anos 1990, período dos fracassos de Ruanda e de Srebrenica. Assumiu publicamente parte da responsabilidade por esses episódios, e encomendou depois investigações independentes que apontaram falhas da própria ONU — decisão incomum para um dirigente internacional.',
        'Tornou-se secretário-geral em 1997, o primeiro a sair do quadro de funcionários da casa. Conduziu reformas administrativas, criou o Fundo Global de combate à aids, à tuberculose e à malária, lançou o Pacto Global com o setor privado e impulsionou os Objetivos de Desenvolvimento do Milênio.',
        'Opôs-se publicamente à invasão do Iraque em 2003, declarando-a ilegal à luz da Carta da ONU. Recebeu com a organização o Nobel da Paz em 2001. Depois de deixar o cargo, em 2006, mediou a crise pós-eleitoral no Quênia em 2008 e atuou como enviado especial para a Síria. Morreu na Suíça em 18 de agosto de 2018.'
      ],
      contexto:
        'Annan dirigiu a ONU num período de perda de autoridade da organização, entre os genocídios não impedidos dos anos 1990 e a invasão do Iraque à revelia do Conselho de Segurança. Sua contribuição mais duradoura é doutrinária: a ideia de que a soberania de um Estado não é escudo contra a responsabilidade de proteger sua própria população, princípio adotado formalmente pela ONU em 2005.',
      contribuicoes: ['Foi secretário-geral das Nações Unidas entre 1997 e 2006.', 'Recebeu, com a ONU, o Nobel da Paz em 2001.', 'Impulsionou a doutrina da responsabilidade de proteger, adotada pela ONU em 2005.', 'Criou o Fundo Global de combate à aids, à tuberculose e à malária.', 'Mediou a crise pós-eleitoral do Quênia em 2008, evitando o agravamento do conflito.'],
      cronologia: [
        [1938, 'Nasce em Kumasi, Gana, em 8 de abril.'],
        [1962, 'Ingressa no sistema das Nações Unidas.'],
        [1993, 'Assume o Departamento de Operações de Manutenção da Paz.'],
        [1997, 'Torna-se secretário-geral da ONU.'],
        [2001, 'Recebe o Nobel da Paz.'],
        [2003, 'Declara ilegal a invasão do Iraque.'],
        [2008, 'Media a crise pós-eleitoral no Quênia.'],
        [2018, 'Morre na Suíça, em 18 de agosto.']
      ],
      nota: null
    },
    'Luiza Trajano': {
      resumo: 'Transformou uma loja de interior na maior varejista digital do Brasil e tornou-se a empresária mais influente do país.',
      bio: [
        'Luiza Helena Trajano Inácio Rodrigues nasceu em Franca, São Paulo, em 1951. Começou a trabalhar aos doze anos na loja da tia, a Magazine Luiza, fundada em 1957 em Franca. Passou por praticamente todas as funções da empresa — balcão, caixa, cobrança, gerência — antes de assumir a superintendência em 1991.',
        'Conduziu a expansão da rede de poucas dezenas para mais de mil lojas e, sobretudo, a digitalização precoce: em 1992 criou as lojas virtuais, sem estoque nem produtos expostos, em que vendedores apresentavam o catálogo em terminais. A empresa abriu capital em 2011 e tornou-se uma das maiores plataformas de comércio eletrônico da América Latina.',
        'Construiu uma cultura interna baseada em promoção de funcionários a cargos de liderança e em comunicação direta com toda a base — prática que inclui reuniões abertas e canais permanentes de escuta. A empresa é recorrentemente citada em rankings de ambiente de trabalho no Brasil.',
        'Em 2013 fundou o Grupo Mulheres do Brasil, rede suprapartidária que reúne dezenas de milhares de participantes em torno de causas de educação, saúde e representatividade. Durante a pandemia de covid-19, articulou iniciativas empresariais de compra e distribuição de insumos. Deixou a presidência executiva em 2016 e preside o conselho de administração.'
      ],
      contexto: 'A trajetória de Luiza Trajano contraria o padrão do varejo brasileiro em dois pontos: a digitalização começou muito antes do que no resto do setor, e a empresa cresceu promovendo internamente em vez de importar executivos. Sua atuação pública, sobretudo pelo Grupo Mulheres do Brasil, fez dela uma das vozes empresariais mais ouvidas do país.',
      contribuicoes: [
        'Conduziu o Magazine Luiza de rede regional à maior varejista digital do Brasil.',
        'Criou em 1992 as lojas virtuais, antecipando o comércio eletrônico no varejo brasileiro.',
        'Fundou o Grupo Mulheres do Brasil, com dezenas de milhares de participantes.',
        'Estabeleceu uma cultura de promoção interna que se tornou caso de estudo em gestão.',
        'Articulou iniciativas empresariais de resposta à pandemia de covid-19.'
      ],
      cronologia: [
        [1951, 'Nasce em Franca, São Paulo.'],
        [1963, 'Começa a trabalhar na loja da família, aos doze anos.'],
        [1991, 'Assume a superintendência do Magazine Luiza.'],
        [1992, 'Cria o modelo das lojas virtuais.'],
        [2011, 'A empresa abre capital na bolsa.'],
        [2013, 'Funda o Grupo Mulheres do Brasil.'],
        [2016, 'Deixa a presidência executiva e assume o conselho.']
      ],
      nota: null
    }
  };
  function aplicar() {
    var n = 0,
      ja = [];
    for (var k in P) {
      if (!AUTOR_INDEX.has(k)) {
        ja.push('[fora do acervo] ' + k);
        continue;
      }
      if (PERFIS_PROFUNDOS[k]) {
        ja.push('[já existia] ' + k);
        continue;
      }
      PERFIS_PROFUNDOS[k] = P[k];
      n++;
    }
    if (ja.length) console.warn('Fase 57a · ignorados:', ja.join(' | '));
    console.log('MeMotiva · Fase 57a: +' + n + ' panoramas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 57b — panoramas (lote 2) ===== */
(function () {
  var P = {
    'Sigmund Freud': {
      resumo: 'Criou a psicanálise e mudou de forma irreversível o modo como o Ocidente pensa a mente, o desejo e a infância.',
      bio: [
        'Sigmund Freud nasceu em Freiberg, na Morávia, em 6 de maio de 1856, em família judaica que se mudou para Viena quando ele tinha quatro anos. Formou-se em medicina em 1881 e trabalhou em neurologia e neuropatologia antes de se voltar ao tratamento das neuroses.',
        "A partir do trabalho com Josef Breuer sobre histeria, abandonou a hipnose em favor da associação livre: pedir ao paciente que dissesse tudo o que lhe viesse à cabeça, sem censura. Em 1900 publicou 'A Interpretação dos Sonhos', em que formula o inconsciente como sistema com lógica própria e o sonho como realização disfarçada de desejo. O livro vendeu poucas centenas de exemplares em anos.",
        'Nas décadas seguintes construiu o edifício teórico da psicanálise: a sexualidade infantil, o complexo de Édipo, os mecanismos de defesa, a transferência e, a partir dos anos 1920, a segunda tópica com o id, o ego e o superego. Rompeu com discípulos importantes, entre eles Adler e Jung, em disputas que marcaram a história do movimento.',
        'Sofria de câncer de mandíbula desde 1923 e passou por mais de trinta cirurgias. Após a anexação da Áustria pela Alemanha nazista, em 1938, deixou Viena com ajuda internacional; quatro de suas irmãs morreriam em campos de extermínio. Morreu em Londres em 23 de setembro de 1939.'
      ],
      contexto:
        'Freud trabalhou numa Viena que tratava a sexualidade como assunto impronunciável e a doença mental como degeneração hereditária. Sua proposta — ouvir o paciente e levar a sério o que ele diz sem querer dizer — inverteu a relação médica de seu tempo. A validade científica de suas teorias é contestada há décadas; o vocabulário que ele criou, no entanto, tornou-se parte do modo comum de falar sobre a vida interior.',
      contribuicoes: [
        'Fundou a psicanálise como teoria da mente e como método de tratamento.',
        "Publicou 'A Interpretação dos Sonhos', 'Três Ensaios sobre a Teoria da Sexualidade' e 'O Mal-Estar na Civilização'.",
        'Formulou o inconsciente, a repressão, a transferência e os mecanismos de defesa.',
        'Introduziu a sexualidade infantil como objeto de investigação, contra a resistência médica de seu tempo.',
        'Seu vocabulário atravessou a psicologia, a literatura, a arte e a linguagem corrente.'
      ],
      cronologia: [
        [1856, 'Nasce em Freiberg, Morávia, em 6 de maio.'],
        [1881, 'Forma-se em medicina em Viena.'],
        [1900, "Publica 'A Interpretação dos Sonhos'."],
        [1905, "Publica os 'Três Ensaios sobre a Teoria da Sexualidade'."],
        [1923, "Publica 'O Ego e o Id'; é diagnosticado com câncer."],
        [1930, "Publica 'O Mal-Estar na Civilização'."],
        [1938, 'Deixa Viena após a anexação nazista.'],
        [1939, 'Morre em Londres, em 23 de setembro.']
      ],
      nota: null
    },
    'Leonardo da Vinci': {
      resumo: 'Pintou menos de vinte quadros e deixou milhares de páginas de anotações que anteciparam séculos de engenharia e anatomia.',
      bio: [
        'Leonardo nasceu em Vinci, perto de Florença, em 15 de abril de 1452, filho ilegítimo de um notário e de uma camponesa. Por ser ilegítimo, não pôde seguir a profissão do pai nem receber educação universitária — chamava-se, com ironia, homem sem letras. Entrou aos catorze anos como aprendiz na oficina de Verrocchio, em Florença.',
        "Trabalhou em Milão a serviço de Ludovico Sforza por quase vinte anos, como pintor, cenógrafo, engenheiro militar e projetista. Ali pintou 'A Última Ceia' e trabalhou num monumento equestre gigantesco que nunca foi fundido. Voltou a Florença, passou por Roma e terminou a vida na França, a convite de Francisco I.",
        'Deixou cerca de treze mil páginas de cadernos, escritas em espelho, com estudos de anatomia baseados em dissecações que ele mesmo realizou, projetos de máquinas voadoras, hidráulica, óptica, botânica e geologia. Nunca publicou nada disso: os papéis se dispersaram após sua morte e só foram estudados sistematicamente séculos depois.',
        "Era notório por não terminar o que começava. Deixou encomendas inacabadas, abandonou projetos e carregou a 'Mona Lisa' consigo até a morte, retocando-a por anos. Morreu em Amboise, na França, em 2 de maio de 1519."
      ],
      contexto: 'Leonardo é o exemplo mais citado do ideal renascentista de homem universal, mas seu caso é também o de um conhecimento que não circulou: por não publicar, suas descobertas anatômicas e mecânicas não influenciaram a ciência de seu tempo e tiveram de ser refeitas por outros. A obra pictórica, ao contrário, foi imediatamente decisiva.',
      contribuicoes: [
        "Pintou 'A Última Ceia', a 'Mona Lisa' e 'A Virgem dos Rochedos'.",
        "Desenhou o 'Homem Vitruviano', imagem-símbolo do humanismo renascentista.",
        'Realizou dissecações humanas e produziu estudos anatômicos de precisão inédita.',
        'Desenvolveu o sfumato, técnica de transição tonal sem contornos definidos.',
        'Deixou cerca de treze mil páginas de cadernos com projetos de engenharia e observações científicas.'
      ],
      cronologia: [
        [1452, 'Nasce em Vinci, perto de Florença, em 15 de abril.'],
        [1466, 'Entra como aprendiz na oficina de Verrocchio.'],
        [1482, 'Muda-se para Milão, a serviço de Ludovico Sforza.'],
        [1495, "Começa 'A Última Ceia'."],
        [1503, "Começa a 'Mona Lisa'."],
        [1516, 'Vai para a França a convite de Francisco I.'],
        [1519, 'Morre em Amboise, em 2 de maio.']
      ],
      nota: null
    },
    'Michel Foucault': {
      resumo: 'Investigou como saberes e instituições produzem as categorias pelas quais julgamos as pessoas — loucos, doentes, delinquentes, sujeitos de desejo.',
      bio: [
        'Michel Foucault nasceu em Poitiers, na França, em 15 de outubro de 1926, filho de cirurgião. Formou-se em filosofia e psicologia pela École Normale Supérieure, onde teve entre os professores Louis Althusser. Trabalhou em hospital psiquiátrico e lecionou na Suécia, na Polônia e na Alemanha antes de voltar à França.',
        "Publicou em 1961 a 'História da Loucura', tese de doutorado que reconstitui como a loucura deixou de ser experiência presente na vida comum para se tornar objeto médico, por meio do internamento. Seguiram-se 'O Nascimento da Clínica' e 'As Palavras e as Coisas', que o tornou figura pública na França em 1966.",
        "Foi eleito em 1970 para o Collège de France, onde ocupou uma cátedra criada com nome escolhido por ele: história dos sistemas de pensamento. Em 1975 publicou 'Vigiar e Punir', sobre a passagem do suplício público à disciplina carcerária, com a análise do panóptico que se tornou sua imagem mais citada.",
        "Militou pela reforma das prisões, pelos direitos de imigrantes e de presos, e participou do Grupo de Informação sobre as Prisões. Em 1976 iniciou a 'História da Sexualidade', que mudaria de rumo em seus volumes finais, voltando-se à Antiguidade. Morreu em Paris em 25 de junho de 1984, aos 57 anos, em decorrência da aids."
      ],
      contexto:
        'Foucault deslocou a pergunta filosófica sobre a verdade para uma pergunta histórica: quem tem autoridade para dizê-la, com que procedimentos e com que efeitos sobre os corpos. Sua obra é hoje referência obrigatória em estudos sobre psiquiatria, prisão, sexualidade, biopolítica e governo, e influenciou diretamente a reforma psiquiátrica e a crítica ao encarceramento em vários países, inclusive no Brasil.',
      contribuicoes: [
        "Escreveu 'História da Loucura', 'Vigiar e Punir' e a 'História da Sexualidade'.",
        'Introduziu os conceitos de biopoder, biopolítica e governamentalidade.',
        'Analisou o panóptico como modelo da vigilância moderna.',
        'Militou pela reforma do sistema prisional no Grupo de Informação sobre as Prisões.',
        'Ocupou no Collège de France a cátedra de história dos sistemas de pensamento.'
      ],
      cronologia: [
        [1926, 'Nasce em Poitiers, em 15 de outubro.'],
        [1961, "Publica a 'História da Loucura'."],
        [1966, "Publica 'As Palavras e as Coisas'."],
        [1970, 'É eleito para o Collège de France.'],
        [1971, 'Cofunda o Grupo de Informação sobre as Prisões.'],
        [1975, "Publica 'Vigiar e Punir'."],
        [1976, "Publica o primeiro volume da 'História da Sexualidade'."],
        [1984, 'Morre em Paris, em 25 de junho.']
      ],
      nota: null
    },
    'Santo Agostinho': {
      resumo: 'Escreveu a primeira autobiografia do Ocidente e fixou a estrutura do pensamento cristão por mil anos.',
      bio: [
        'Aurélio Agostinho nasceu em Tagaste, no norte da África romana, em 13 de novembro de 354. A mãe, Mônica, era cristã; o pai, pagão. Estudou retórica em Cartago e tornou-se professor da disciplina, primeiro na África, depois em Roma e em Milão, então capital imperial do Ocidente.',
        'Passou nove anos como adepto do maniqueísmo, depois pelo ceticismo e pelo neoplatonismo. Viveu com uma companheira por catorze anos, com quem teve um filho, Adeodato. A leitura de Paulo e a influência do bispo Ambrósio de Milão levaram à conversão em 386, narrada como o episódio no jardim em que ouve uma voz mandando pegar e ler.',
        "Batizado em 387, voltou à África, foi ordenado padre e tornou-se bispo de Hipona em 396, cargo que ocupou até a morte. Escreveu as 'Confissões' por volta de 397, relendo a própria vida a partir do ponto de chegada, e 'A Cidade de Deus' entre 413 e 426, resposta à acusação de que o cristianismo causara a queda de Roma.",
        'Polemizou com maniqueus, donatistas e pelagianos, e dessas disputas saiu boa parte da doutrina posterior sobre graça, pecado original e livre-arbítrio. Morreu em Hipona em 28 de agosto de 430, enquanto a cidade era sitiada pelos vândalos.'
      ],
      contexto:
        'Agostinho escreve na decomposição do Império Romano do Ocidente, e sua obra é em boa parte uma tentativa de pensar o que resta quando a ordem política que parecia eterna desaba. A distinção entre a cidade terrena e a cidade de Deus organizou a relação entre poder espiritual e temporal por toda a Idade Média, e sua análise do tempo e da memória continua sendo discutida por filósofos.',
      contribuicoes: [
        "Escreveu as 'Confissões', primeira autobiografia do Ocidente no sentido moderno.",
        "Escreveu 'A Cidade de Deus', fundadora da filosofia política cristã.",
        'Formulou as doutrinas de graça e pecado original que estruturaram a teologia ocidental.',
        "Sua análise do tempo, no livro XI das 'Confissões', é referência filosófica até hoje.",
        'Foi a principal influência sobre Lutero e Calvino, mil anos depois.'
      ],
      cronologia: [
        [354, 'Nasce em Tagaste, norte da África romana, em 13 de novembro.'],
        [386, 'Converte-se em Milão.'],
        [396, 'Torna-se bispo de Hipona.'],
        [397, "Escreve as 'Confissões'."],
        [413, "Começa 'A Cidade de Deus'."],
        [430, 'Morre em Hipona, durante o cerco dos vândalos.']
      ],
      nota: null
    },
    'Stephen Hawking': {
      resumo: 'Trabalhou cinquenta anos com esclerose lateral amiotrófica e tornou-se o físico mais conhecido do mundo.',
      bio: [
        'Stephen William Hawking nasceu em Oxford em 8 de janeiro de 1942. Estudou física em Oxford, onde foi aluno brilhante e notoriamente pouco aplicado, e seguiu para Cambridge para o doutorado em cosmologia. Aos 21 anos foi diagnosticado com esclerose lateral amiotrófica, com prognóstico de dois anos de vida.',
        'Nos anos 1960 e 1970 trabalhou com Roger Penrose nos teoremas de singularidade, mostrando que a relatividade geral implica a existência de uma singularidade na origem do universo. Em 1974 apresentou seu resultado mais importante: buracos negros emitem radiação e evaporam, conclusão que combina relatividade e mecânica quântica e ficou conhecida como radiação Hawking.',
        'Ocupou de 1979 a 2009 a cátedra lucasiana de matemática em Cambridge, mesma que fora de Isaac Newton. Perdeu a fala em 1985, após uma traqueostomia, e passou a se comunicar por um sintetizador de voz operado primeiro com a mão e depois com um músculo da bochecha.',
        "Publicou 'Uma Breve História do Tempo' em 1988, que vendeu mais de dez milhões de exemplares e o tornou celebridade mundial. Apareceu em programas de televisão, alertou publicamente sobre riscos da inteligência artificial e das mudanças climáticas, e realizou um voo em gravidade zero em 2007. Morreu em Cambridge em 14 de março de 2018, aos 76 anos."
      ],
      contexto: 'Hawking fez contribuições teóricas de primeira ordem sobre buracos negros e a origem do universo, e nunca recebeu o Nobel porque a radiação que leva seu nome não pôde ser observada experimentalmente. Sua condição física e a persistência de sua produção científica transformaram-no em figura pública de alcance raríssimo para um físico teórico.',
      contribuicoes: [
        'Demonstrou, com Roger Penrose, os teoremas de singularidade da relatividade geral.',
        'Formulou a radiação Hawking, mostrando que buracos negros evaporam.',
        "Publicou 'Uma Breve História do Tempo', um dos livros de ciência mais vendidos da história.",
        'Ocupou por trinta anos a cátedra lucasiana de matemática em Cambridge.',
        'Alertou publicamente sobre riscos existenciais da inteligência artificial e do clima.'
      ],
      cronologia: [
        [1942, 'Nasce em Oxford, em 8 de janeiro.'],
        [1963, 'É diagnosticado com esclerose lateral amiotrófica.'],
        [1970, 'Publica com Penrose os teoremas de singularidade.'],
        [1974, 'Formula a radiação Hawking.'],
        [1979, 'Assume a cátedra lucasiana em Cambridge.'],
        [1985, 'Perde a fala e passa a usar sintetizador de voz.'],
        [1988, "Publica 'Uma Breve História do Tempo'."],
        [2018, 'Morre em Cambridge, em 14 de março.']
      ],
      nota: null
    },
    'Muhammad Ali': {
      resumo: 'Três vezes campeão mundial dos pesos pesados, recusou o alistamento para o Vietnã e perdeu quatro anos de carreira por isso.',
      bio: [
        'Cassius Marcellus Clay Jr. nasceu em Louisville, Kentucky, em 17 de janeiro de 1942. Começou a boxear aos doze anos, depois de ter a bicicleta roubada e dizer a um policial que queria bater em quem a levara. Ganhou o ouro olímpico nos meios-pesados em Roma, em 1960, e tornou-se profissional em seguida.',
        'Em 1964 derrotou Sonny Liston e conquistou o título mundial dos pesos pesados aos 22 anos. Logo depois anunciou sua conversão ao islã e a adoção do nome Muhammad Ali, decisão que boa parte da imprensa americana se recusou a reconhecer por anos.',
        'Em 1967 recusou-se a ser incorporado ao exército para servir no Vietnã, alegando objeção de consciência religiosa. Foi condenado, teve o título cassado e a licença suspensa, e ficou fora dos ringues por quase quatro anos, entre os 25 e os 29. A Suprema Corte anulou a condenação por unanimidade em 1971.',
        'De volta, perdeu para Joe Frazier, venceu-o depois e derrotou George Foreman em Kinshasa, em 1974, na luta conhecida como Rumble in the Jungle, recuperando o título. Reconquistou-o uma terceira vez em 1978. Foi diagnosticado com síndrome de Parkinson em 1984 e passou as décadas seguintes em atividades humanitárias. Acendeu a pira olímpica em Atlanta, em 1996. Morreu no Arizona em 3 de junho de 2016.'
      ],
      contexto: 'Ali foi o primeiro atleta de projeção mundial a usar a própria fama como plataforma política explícita, e pagou por isso o preço mais alto possível: o auge de sua carreira. A reversão da condenação e a transformação posterior de sua imagem — de figura detestada a símbolo nacional — é uma das trajetórias mais estudadas na relação entre esporte e política.',
      contribuicoes: [
        'Conquistou três vezes o título mundial dos pesos pesados.',
        'Ganhou o ouro olímpico em Roma, em 1960.',
        'Recusou o alistamento para o Vietnã por objeção de consciência, com custo de quatro anos de carreira.',
        'Venceu George Foreman em Kinshasa, em 1974, e Joe Frazier em Manila, em 1975.',
        'Atuou em campanhas humanitárias e recebeu a Medalha Presidencial da Liberdade em 2005.'
      ],
      cronologia: [
        [1942, 'Nasce em Louisville, Kentucky, em 17 de janeiro.'],
        [1960, 'Conquista o ouro olímpico em Roma.'],
        [1964, 'Derrota Sonny Liston e adota o nome Muhammad Ali.'],
        [1967, 'Recusa o alistamento; perde o título e a licença.'],
        [1971, 'A Suprema Corte anula sua condenação.'],
        [1974, 'Derrota George Foreman em Kinshasa.'],
        [1984, 'É diagnosticado com síndrome de Parkinson.'],
        [2016, 'Morre no Arizona, em 3 de junho.']
      ],
      nota: null
    },
    'Simón Bolívar': {
      resumo: 'Libertou seis países do domínio espanhol e morreu convencido de que havia arado no mar.',
      bio: [
        'Simón José Antonio de la Santísima Trinidad Bolívar y Palacios nasceu em Caracas em 24 de julho de 1783, em família da aristocracia crioula. Órfão cedo, foi educado por tutores, entre eles Simón Rodríguez, que lhe transmitiu as ideias iluministas. Viveu na Europa, onde, segundo a tradição, jurou em Roma libertar a América espanhola.',
        'Voltou à Venezuela e engajou-se no movimento de independência a partir de 1810. As primeiras repúblicas fracassaram e ele viveu dois exílios. Escreveu no segundo deles, em 1815, a Carta da Jamaica, análise do continente e defesa da união entre as nações americanas.',
        'Entre 1819 e 1824 conduziu a campanha militar que libertou a Nova Granada, a Venezuela, o Equador, o Peru e a Bolívia — esta batizada em sua homenagem. A travessia dos Andes antes da batalha de Boyacá, com tropas mal equipadas por terreno considerado intransponível, é sua operação mais citada.',
        'Criou a Grã-Colômbia, união da Venezuela, Colômbia, Equador e Panamá, e presidiu-a. O projeto desmoronou em disputas regionais e separatismos. Bolívar assumiu poderes ditatoriais numa tentativa de mantê-lo, sofreu um atentado e renunciou em 1830. Morreu em Santa Marta, na Colômbia, em 17 de dezembro de 1830, aos 47 anos, tuberculoso e politicamente derrotado.'
      ],
      contexto: 'Bolívar conduziu uma libertação militar bem-sucedida e um projeto político fracassado, e tinha consciência dos dois resultados. Sua advertência sobre a dificuldade de sustentar repúblicas em sociedades sem experiência de autogoverno atravessou o século XIX latino-americano. Sua figura é reivindicada desde então por correntes políticas de sinais opostos em todo o continente.',
      contribuicoes: ['Conduziu a independência da Venezuela, Colômbia, Equador, Peru e Bolívia.', 'Escreveu a Carta da Jamaica e o Discurso de Angostura.', 'Criou a Grã-Colômbia, primeira tentativa de união política sul-americana.', 'Aboliu a escravidão nos territórios sob seu comando.', 'Convocou em 1826 o Congresso do Panamá, primeira iniciativa de integração continental.'],
      cronologia: [
        [1783, 'Nasce em Caracas, em 24 de julho.'],
        [1810, 'Engaja-se no movimento de independência venezuelano.'],
        [1815, 'Escreve a Carta da Jamaica, no exílio.'],
        [1819, 'Atravessa os Andes e vence em Boyacá; cria a Grã-Colômbia.'],
        [1824, 'A batalha de Ayacucho sela a independência do Peru.'],
        [1825, 'É criada a Bolívia, batizada em sua homenagem.'],
        [1830, 'Renuncia e morre em Santa Marta, em 17 de dezembro.']
      ],
      nota: null
    },
    'Anne Frank': {
      resumo: 'Escreveu, entre os treze e os quinze anos, o registro mais lido da vida sob o nazismo.',
      bio: [
        'Annelies Marie Frank nasceu em Frankfurt em 12 de junho de 1929, em família judaica. Com a ascensão nazista, os Frank emigraram para Amsterdã em 1933, onde o pai, Otto, abriu um negócio de especiarias e pectina. A ocupação alemã dos Países Baixos, em 1940, alcançou a família de novo.',
        'Ganhou um diário de aniversário em junho de 1942, ao completar treze anos. Três semanas depois, quando a irmã mais velha, Margot, recebeu convocação para um campo de trabalho, a família entrou no anexo secreto nos fundos do prédio da empresa, onde viveu escondida com outras quatro pessoas por 25 meses, sustentada por funcionários do pai.',
        'No diário, que ela endereça a uma interlocutora imaginária chamada Kitty, escreve sobre o medo e a fome, mas também sobre conflitos com a mãe, o primeiro namoro, a convivência forçada e a vontade de se tornar escritora. Ao ouvir pelo rádio um apelo do governo no exílio para que se guardassem documentos da ocupação, começou a reescrever o diário para publicação.',
        'O esconderijo foi descoberto em 4 de agosto de 1944, após denúncia nunca esclarecida. Anne foi deportada para Auschwitz e depois para Bergen-Belsen, onde morreu de tifo em fevereiro ou março de 1945, semanas antes da libertação do campo. Das oito pessoas do anexo, só Otto sobreviveu; foi ele quem publicou o diário em 1947.'
      ],
      contexto: 'O diário se tornou a porta de entrada de gerações ao Holocausto justamente porque não descreve campos nem violência direta: descreve uma vida comum sendo estrangulada aos poucos, escrita por alguém que ainda planejava o futuro. Está traduzido em mais de setenta idiomas, e a casa do anexo, em Amsterdã, é hoje um dos museus mais visitados dos Países Baixos.',
      contribuicoes: [
        'Escreveu o diário mais lido do mundo sobre a perseguição nazista.',
        'Deixou um registro em primeira pessoa da vida clandestina sob ocupação.',
        'Sua obra é leitura escolar em dezenas de países e está traduzida em mais de setenta idiomas.',
        'A Casa de Anne Frank, em Amsterdã, tornou-se centro de educação contra a discriminação.',
        'O texto foi incluído no registro Memória do Mundo da Unesco.'
      ],
      cronologia: [
        [1929, 'Nasce em Frankfurt, em 12 de junho.'],
        [1933, 'A família emigra para Amsterdã.'],
        [1942, 'Ganha o diário e entra no anexo secreto em julho.'],
        [1944, 'O esconderijo é descoberto em 4 de agosto.'],
        [1945, 'Morre em Bergen-Belsen, no início do ano.'],
        [1947, 'Otto Frank publica o diário.']
      ],
      nota: null
    },
    'Cecília Meireles': {
      resumo: 'Poeta, educadora e jornalista, escreveu a obra poética mais rigorosa e mais musical do modernismo brasileiro.',
      bio: [
        'Cecília Benevides de Carvalho Meireles nasceu no Rio de Janeiro em 7 de novembro de 1901. Ficou órfã de pai antes de nascer e de mãe aos três anos, e foi criada pela avó açoriana. Formou-se professora primária aos dezoito anos e exerceu o magistério por décadas.',
        'Publicou o primeiro livro aos dezenove anos, mas manteve silêncio editorial por quase duas décadas. Nesse período escreveu sobre educação no Diário de Notícias, defendeu as teses da Escola Nova, assinou o Manifesto dos Pioneiros da Educação Nova em 1932 e fundou no Rio a primeira biblioteca infantil do país.',
        "O marido, o artista português Fernando Correia Dias, suicidou-se em 1935, deixando-a com três filhas. Em 1939 voltou a publicar poesia com 'Viagem', que recebeu o prêmio de poesia da Academia Brasileira de Letras e gerou polêmica entre os modernistas pelo uso de formas fixas.",
        "Em 1953 publicou o 'Romanceiro da Inconfidência', ciclo sobre a Inconfidência Mineira construído a partir de pesquisa documental e escrito na forma do romanceiro ibérico medieval. Escreveu também para crianças — 'Ou Isto ou Aquilo', de 1964, é um marco da poesia infantil brasileira. Morreu no Rio de Janeiro em 9 de novembro de 1964."
      ],
      contexto: 'Cecília ocupa uma posição incomum no modernismo brasileiro: aderiu à liberdade temática do movimento sem abrir mão da forma fixa e da métrica, escolha que a crítica modernista leu na época como recuo e que hoje é reconhecida como projeto próprio. Sua atuação como educadora, pouco lembrada, foi tão consistente quanto a obra poética.',
      contribuicoes: ["Escreveu 'Viagem', 'Romanceiro da Inconfidência' e 'Ou Isto ou Aquilo'.", 'Assinou o Manifesto dos Pioneiros da Educação Nova, em 1932.', 'Fundou no Rio de Janeiro a primeira biblioteca infantil do Brasil.', 'Escreveu por anos sobre educação na imprensa, defendendo a escola pública e laica.', 'É uma das vozes centrais da segunda geração modernista brasileira.'],
      cronologia: [
        [1901, 'Nasce no Rio de Janeiro, em 7 de novembro.'],
        [1919, 'Publica o primeiro livro e forma-se professora.'],
        [1932, 'Assina o Manifesto dos Pioneiros da Educação Nova.'],
        [1939, "Publica 'Viagem'."],
        [1953, "Publica o 'Romanceiro da Inconfidência'."],
        [1964, "Publica 'Ou Isto ou Aquilo' e morre no Rio, em 9 de novembro."]
      ],
      nota: null
    },
    'Manuel Bandeira': {
      resumo: 'Recebeu aos dezoito anos o prognóstico de que morreria logo, e viveu até os 82 escrevendo a poesia mais coloquial do modernismo.',
      bio: [
        'Manuel Carneiro de Sousa Bandeira Filho nasceu no Recife em 19 de abril de 1886. Estudava arquitetura em São Paulo quando, aos dezoito anos, foi diagnosticado com tuberculose e obrigado a abandonar o curso. O prognóstico médico era de poucos meses de vida.',
        'Passou temporadas em estações de repouso, entre elas o sanatório suíço de Clavadel, em 1913, onde conheceu o poeta francês Paul Éluard. A doença definiu sua vida e sua obra: a proximidade da morte é presença constante em seus poemas, tratada sem dramatização e muitas vezes com humor.',
        "Publicou 'A Cinza das Horas' em 1917, ainda em registro parnasiano-simbolista, e foi aderindo ao verso livre. Participou à distância da Semana de Arte Moderna de 1922, em que seu poema 'Os Sapos' foi lido como sátira ao parnasianismo. Com 'Libertinagem', de 1930, consolidou a dicção coloquial que o tornaria referência.",
        'Foi professor de literatura hispano-americana no Colégio Pedro II e na Faculdade Nacional de Filosofia, tradutor e cronista de larga produção. Entrou para a Academia Brasileira de Letras em 1940. Morreu no Rio de Janeiro em 13 de outubro de 1968.'
      ],
      contexto: 'Bandeira é o poeta que mais aproximou a poesia brasileira da fala. Sua obra vai do verso medido da estreia ao poema em prosa e ao humor de bilhete, sem perder a precisão. A tuberculose que deveria tê-lo matado aos dezoito anos é, na sua leitura, o que o fez poeta: escreveu que a doença o desviou de tudo o que pretendia e o deixou com a poesia.',
      contribuicoes: ["Publicou 'Libertinagem', 'Estrela da Manhã' e 'Estrela da Tarde'.", "Escreveu 'Vou-me Embora pra Pasárgada', um dos poemas mais conhecidos da língua.", 'Introduziu na poesia brasileira uma dicção coloquial sem perda de rigor formal.', "Escreveu o 'Itinerário de Pasárgada', memória literária de sua própria obra.", 'Foi eleito para a Academia Brasileira de Letras em 1940.'],
      cronologia: [
        [1886, 'Nasce no Recife, em 19 de abril.'],
        [1904, 'É diagnosticado com tuberculose e abandona a arquitetura.'],
        [1917, "Publica 'A Cinza das Horas'."],
        [1922, "Seu poema 'Os Sapos' é lido na Semana de Arte Moderna."],
        [1930, "Publica 'Libertinagem'."],
        [1940, 'É eleito para a Academia Brasileira de Letras.'],
        [1968, 'Morre no Rio de Janeiro, em 13 de outubro.']
      ],
      nota: null
    },
    'Vinicius de Moraes': {
      resumo: 'Diplomata, poeta e letrista, fez a ponte entre a alta poesia brasileira e a canção popular.',
      bio: [
        'Marcus Vinicius da Cruz de Melo Moraes nasceu no Rio de Janeiro em 19 de outubro de 1913. Formou-se em direito, estudou literatura inglesa em Oxford com bolsa do Conselho Britânico e ingressou na carreira diplomática em 1943, servindo em Los Angeles, Paris e Montevidéu.',
        "A obra poética começa em registro místico e formal, nos anos 1930, e evolui para o erotismo e o coloquial. O 'Soneto de Fidelidade', escrito em Estoril em 1939, e o 'Soneto da Separação' estão entre os poemas mais conhecidos da língua portuguesa.",
        "Em 1956 estreou 'Orfeu da Conceição', peça em verso que transpõe o mito grego para um morro carioca, com música de Tom Jobim e cenário de Oscar Niemeyer. Dessa parceria nasceria a bossa nova: 'Chega de Saudade', gravada por João Gilberto em 1958, e depois 'Garota de Ipanema', a canção brasileira mais tocada no mundo.",
        'Foi afastado da diplomacia em 1969 por ato da ditadura militar. Passou a viver de shows e composições, em parcerias com Baden Powell, Carlos Lyra, Edu Lobo e Toquinho. Casou-se nove vezes e fez disso parte de sua persona pública. Morreu no Rio de Janeiro em 9 de julho de 1980.'
      ],
      contexto: 'Vinicius é a figura que melhor mostra a permeabilidade entre poesia erudita e canção popular no Brasil. Manteve os dois registros sem hierarquizá-los: escrevia sonetos em forma fixa e letras para violão com a mesma seriedade. A bossa nova, que ajudou a fundar, foi o primeiro gênero brasileiro a se tornar referência musical internacional.',
      contribuicoes: ["Escreveu o 'Soneto de Fidelidade' e o 'Soneto da Separação'.", "Criou 'Orfeu da Conceição', origem do filme 'Orfeu Negro', Palma de Ouro em 1959.", 'Cofundou a bossa nova com Tom Jobim e João Gilberto.', "Escreveu a letra de 'Garota de Ipanema', a canção brasileira mais gravada no mundo.", "Publicou 'Antologia Poética' e 'Livro de Sonetos'."],
      cronologia: [
        [1913, 'Nasce no Rio de Janeiro, em 19 de outubro.'],
        [1943, 'Ingressa na carreira diplomática.'],
        [1956, "Estreia 'Orfeu da Conceição', com música de Tom Jobim."],
        [1958, "'Chega de Saudade' é gravada por João Gilberto."],
        [1962, "Compõe 'Garota de Ipanema'."],
        [1969, 'É aposentado compulsoriamente pela ditadura militar.'],
        [1980, 'Morre no Rio de Janeiro, em 9 de julho.']
      ],
      nota: null
    },
    'Mário Quintana': {
      resumo: 'Viveu décadas em quartos de hotel em Porto Alegre e escreveu a poesia brasileira mais citada em poucas linhas.',
      bio: [
        'Mário de Miranda Quintana nasceu em Alegrete, Rio Grande do Sul, em 30 de julho de 1906. Estudou em colégio militar em Porto Alegre, de onde saiu sem concluir o curso, e trabalhou a vida inteira em jornais e editoras como revisor, tradutor e cronista.',
        'Traduziu para o português mais de cento e trinta livros, entre eles obras de Proust, Virginia Woolf, Voltaire e Graham Greene. A tradução era seu sustento; a poesia, publicada com parcimônia, era o que ele levava a sério.',
        "Estreou em livro em 1940, aos 34 anos, com 'A Rua dos Cataventos', coletânea de sonetos. Sua obra se caracteriza pela forma curta, pelo aforismo e por um humor melancólico que trata de tempo, infância, morte e do próprio ofício de escrever.",
        'Viveu por décadas em quartos de hotel, primeiro no Majestic e depois no Royal, em Porto Alegre. Candidatou-se três vezes à Academia Brasileira de Letras e nunca foi eleito, fato sobre o qual escreveu com ironia. Morreu em Porto Alegre em 5 de maio de 1994.'
      ],
      contexto: 'Quintana é provavelmente o poeta brasileiro mais citado fora dos livros — em murais, cartões e redes sociais — e por isso mesmo um dos mais vítimas de atribuição falsa. A forma curta que ele cultivou é fácil de imitar e difícil de rastrear, o que faz de sua obra um caso exemplar da necessidade de verificação em bancos de citações.',
      contribuicoes: [
        "Publicou 'A Rua dos Cataventos', 'Caderno H' e 'Espelho Mágico'.",
        'Traduziu mais de cento e trinta livros, entre eles obras de Proust e Virginia Woolf.',
        'Consolidou o poema curto e o aforismo como forma central da poesia brasileira moderna.',
        'O prédio do antigo Hotel Majestic, onde viveu, é hoje a Casa de Cultura Mario Quintana.',
        'O 30 de julho, data de seu nascimento, é o Dia Nacional do Escritor Gaúcho.'
      ],
      cronologia: [
        [1906, 'Nasce em Alegrete, Rio Grande do Sul, em 30 de julho.'],
        [1940, "Publica 'A Rua dos Cataventos'."],
        [1951, "Publica 'Espelho Mágico'."],
        [1973, "Publica 'Caderno H'."],
        [1980, 'Recebe o Prêmio Machado de Assis da Academia Brasileira de Letras.'],
        [1994, 'Morre em Porto Alegre, em 5 de maio.']
      ],
      nota: null
    },
    'Milton Friedman': {
      resumo: 'Reorganizou a macroeconomia em torno da moeda e tornou-se o principal defensor público do liberalismo econômico no século XX.',
      bio: [
        'Milton Friedman nasceu em Nova York em 31 de julho de 1912, filho de imigrantes judeus húngaros. Formou-se em economia e matemática, trabalhou no governo americano durante a Segunda Guerra e doutorou-se em Columbia. Em 1946 entrou para a Universidade de Chicago, onde lecionou por três décadas e formou o que se tornaria a Escola de Chicago.',
        "Sua obra técnica central é a 'História Monetária dos Estados Unidos', escrita com Anna Schwartz e publicada em 1963, que reinterpreta a Grande Depressão como resultado de erro do banco central, e não de falha inerente do mercado. Formulou a hipótese da renda permanente e a taxa natural de desemprego, prevendo a estagflação anos antes de ela ocorrer.",
        "Recebeu o Nobel de Economia em 1976. Em 1980 lançou com Rose Friedman o livro e a série de televisão 'Livre para Escolher', que levaram seus argumentos a um público de milhões e influenciaram diretamente as políticas econômicas de Reagan e Thatcher.",
        'Defendeu o imposto de renda negativo, os vouchers educacionais, o fim do recrutamento militar obrigatório e a descriminalização das drogas. Foi criticado pelo contato com economistas ligados ao regime de Pinochet no Chile, episódio que ele sempre defendeu como assessoria técnica. Morreu em São Francisco em 16 de novembro de 2006.'
      ],
      contexto: 'Friedman atuou contra o consenso keynesiano que dominou o pós-guerra e viveu para ver suas posições se tornarem ortodoxia em bancos centrais e ministérios de economia em todo o mundo. Poucas figuras da economia do século XX combinaram contribuição técnica reconhecida por adversários com uma atuação pública tão explicitamente ideológica.',
      contribuicoes: ["Escreveu com Anna Schwartz a 'História Monetária dos Estados Unidos'.", 'Formulou a hipótese da renda permanente e a taxa natural de desemprego.', 'Recebeu o Nobel de Economia em 1976.', "Publicou 'Capitalismo e Liberdade' e 'Livre para Escolher'.", 'Defendeu o fim do alistamento militar obrigatório nos Estados Unidos, adotado em 1973.'],
      cronologia: [
        [1912, 'Nasce em Nova York, em 31 de julho.'],
        [1946, 'Entra para a Universidade de Chicago.'],
        [1962, "Publica 'Capitalismo e Liberdade'."],
        [1963, "Publica a 'História Monetária dos Estados Unidos'."],
        [1976, 'Recebe o Nobel de Economia.'],
        [1980, "Lança 'Livre para Escolher', livro e série de televisão."],
        [2006, 'Morre em São Francisco, em 16 de novembro.']
      ],
      nota: null
    },
    'John Dewey': {
      resumo: 'Filósofo pragmatista, fundou a pedagogia progressista e defendeu que democracia e educação são inseparáveis.',
      bio: [
        "John Dewey nasceu em Burlington, Vermont, em 20 de outubro de 1859 — ano de publicação de 'A Origem das Espécies', cuja influência sobre seu pensamento ele reconheceria. Doutorou-se em filosofia e lecionou em Michigan, Chicago e, a partir de 1904, em Columbia, onde permaneceu até se aposentar.",
        'Em Chicago fundou em 1896 uma escola laboratório ligada à universidade, onde testou por oito anos suas ideias sobre aprendizagem pela experiência. A escola tratava o currículo como investigação de problemas reais, e não como transmissão de conteúdo previamente organizado.',
        "Publicou 'Democracia e Educação' em 1916, sua obra central, que sustenta que uma sociedade democrática exige cidadãos capazes de pensar e cooperar, e que isso só se aprende praticando. Em 1938 publicou 'Experiência e Educação', em que critica tanto a escola tradicional quanto os excessos de seus próprios seguidores.",
        'Atuou intensamente na vida pública: defendeu o sufrágio feminino, cofundou a associação americana de professores universitários e presidiu, em 1937, a comissão que investigou no México as acusações feitas contra Trótski nos processos de Moscou, concluindo pela sua inocência. Morreu em Nova York em 1º de junho de 1952.'
      ],
      contexto: 'Dewey formulou sua pedagogia num momento de expansão da escolaridade obrigatória e de grande imigração nos Estados Unidos, quando a escola era discutida como instrumento de integração nacional. Sua influência chegou ao Brasil por Anísio Teixeira, que foi seu aluno em Columbia e trouxe as ideias da Escola Nova para a política educacional brasileira.',
      contribuicoes: ["Publicou 'Democracia e Educação' e 'Experiência e Educação'.", 'Fundou em 1896 a escola laboratório da Universidade de Chicago.', 'É um dos fundadores do pragmatismo, ao lado de Peirce e William James.', 'Cofundou a Associação Americana de Professores Universitários.', 'Presidiu a comissão que investigou as acusações contra Trótski, em 1937.'],
      cronologia: [
        [1859, 'Nasce em Burlington, Vermont, em 20 de outubro.'],
        [1896, 'Funda a escola laboratório em Chicago.'],
        [1904, 'Torna-se professor em Columbia.'],
        [1916, "Publica 'Democracia e Educação'."],
        [1937, 'Preside a comissão sobre os processos de Moscou.'],
        [1938, "Publica 'Experiência e Educação'."],
        [1952, 'Morre em Nova York, em 1º de junho.']
      ],
      nota: null
    },
    'Amartya Sen': {
      resumo: 'Reorientou a economia do desenvolvimento ao medir o progresso pela liberdade real das pessoas, e não pela renda.',
      bio: [
        'Amartya Kumar Sen nasceu em Santiniketan, na Índia britânica, em 3 de novembro de 1933. Aos nove anos presenciou a fome de Bengala de 1943, que matou cerca de três milhões de pessoas — experiência que determinaria sua obra. Estudou em Calcutá e em Cambridge, onde doutorou-se em economia.',
        'Sua pesquisa sobre fomes mostrou que elas raramente decorrem da falta absoluta de alimentos: decorrem do colapso da capacidade de acesso de certos grupos, e são agravadas por sistemas políticos que não respondem à população. Daí sua tese de que não há fome em larga escala em democracias com imprensa livre.',
        'Desenvolveu a abordagem das capacitações, que avalia o desenvolvimento pela ampliação das liberdades reais das pessoas — saúde, educação, participação, segurança — em vez do crescimento da renda. Com Mahbub ul Haq, ajudou a criar o Índice de Desenvolvimento Humano da ONU, lançado em 1990.',
        "Recebeu o Nobel de Economia em 1998, por contribuições à economia do bem-estar e à teoria da escolha social. Lecionou em Delhi, na London School of Economics, em Oxford e em Harvard, e foi reitor do Trinity College em Cambridge. Publicou 'Desenvolvimento como Liberdade' em 1999 e 'A Ideia de Justiça' em 2009."
      ],
      contexto: 'Sen trabalhou contra um consenso que media o progresso de um país quase exclusivamente pelo PIB. A mudança que ele ajudou a produzir é concreta: agências internacionais, governos e pesquisadores hoje avaliam desenvolvimento com indicadores de saúde, educação e liberdade política, e não apenas de renda.',
      contribuicoes: [
        'Recebeu o Nobel de Economia em 1998.',
        'Desenvolveu a abordagem das capacitações, base do Índice de Desenvolvimento Humano.',
        'Demonstrou que fomes decorrem de falhas de acesso e de política, e não só de escassez.',
        "Publicou 'Desenvolvimento como Liberdade' e 'A Ideia de Justiça'.",
        'Contribuiu de forma decisiva para a teoria da escolha social, retomando Condorcet e Arrow.'
      ],
      cronologia: [
        [1933, 'Nasce em Santiniketan, Índia, em 3 de novembro.'],
        [1943, 'Presencia, aos nove anos, a fome de Bengala.'],
        [1981, "Publica 'Poverty and Famines'."],
        [1990, 'Contribui para a criação do Índice de Desenvolvimento Humano da ONU.'],
        [1998, 'Recebe o Nobel de Economia.'],
        [1999, "Publica 'Desenvolvimento como Liberdade'."],
        [2009, "Publica 'A Ideia de Justiça'."]
      ],
      nota: null
    },
    'Getúlio Vargas': {
      resumo: 'Governou o Brasil por quinze anos consecutivos, voltou eleito e saiu do poder com um tiro no peito.',
      bio: [
        'Getúlio Dornelles Vargas nasceu em São Borja, Rio Grande do Sul, em 19 de abril de 1882. Formou-se em direito, foi deputado, ministro da Fazenda e presidente do estado gaúcho. Derrotado na eleição presidencial de 1930, chegou ao poder pela revolução daquele ano, que encerrou a República Velha.',
        'No governo provisório e constitucional criou o Ministério do Trabalho, a Justiça do Trabalho, a carteira de trabalho, o salário mínimo e a legislação que seria consolidada na CLT, em 1943. Instituiu também o voto secreto e o voto feminino, pelo Código Eleitoral de 1932.',
        'Em 1937 deu um golpe e instaurou o Estado Novo, regime autoritário com censura, polícia política, tortura de opositores e partido único proibido. No mesmo período conduziu a industrialização do país, criou a Companhia Siderúrgica Nacional e negociou com os Estados Unidos a participação brasileira na Segunda Guerra.',
        'Deposto em 1945, voltou eleito presidente em 1950 com ampla votação popular. O segundo governo, marcado por nacionalismo econômico — a criação da Petrobras é dele — enfrentou oposição crescente. Após o atentado da rua Tonelero e a pressão militar por sua renúncia, suicidou-se no Palácio do Catete em 24 de agosto de 1954, deixando a carta-testamento.'
      ],
      contexto: 'Vargas é a figura mais determinante da política brasileira do século XX e a mais difícil de classificar: estabeleceu direitos trabalhistas que persistem até hoje e, simultaneamente, dirigiu uma ditadura que prendeu e torturou opositores e entregou a militante judia alemã Olga Benário à Gestapo. A leitura de sua trajetória permanece em disputa aberta na historiografia brasileira.',
      contribuicoes: [
        'Criou o Ministério do Trabalho, a Justiça do Trabalho e a legislação consolidada na CLT.',
        'Instituiu o voto secreto e o voto feminino pelo Código Eleitoral de 1932.',
        'Criou a Companhia Siderúrgica Nacional, a Vale do Rio Doce e a Petrobras.',
        'Conduziu a entrada do Brasil na Segunda Guerra ao lado dos aliados.',
        'Instaurou e dirigiu o Estado Novo, regime autoritário com censura e polícia política.'
      ],
      cronologia: [
        [1882, 'Nasce em São Borja, Rio Grande do Sul, em 19 de abril.'],
        [1930, 'Chega ao poder pela Revolução de 1930.'],
        [1937, 'Dá o golpe do Estado Novo.'],
        [1943, 'Assina a Consolidação das Leis do Trabalho.'],
        [1945, 'É deposto pelos militares.'],
        [1951, 'Assume a presidência eleito pelo voto popular.'],
        [1953, 'Cria a Petrobras.'],
        [1954, 'Suicida-se no Palácio do Catete, em 24 de agosto.']
      ],
      nota: null
    },
    'Mao Tsé-Tung': {
      resumo: 'Conduziu a revolução que fundou a China Popular e políticas que causaram dezenas de milhões de mortes.',
      bio: [
        'Mao Zedong nasceu em Shaoshan, na província de Hunan, em 26 de dezembro de 1893, filho de camponeses relativamente prósperos. Trabalhou como auxiliar de biblioteca na Universidade de Pequim, onde entrou em contato com o marxismo, e participou da fundação do Partido Comunista Chinês, em 1921.',
        'Contra a ortodoxia soviética, que apostava no operariado urbano, defendeu que a revolução chinesa se faria a partir do campesinato. Após a ruptura com o Kuomintang, conduziu a Longa Marcha, entre 1934 e 1935: cerca de nove mil quilômetros a pé, com perdas enormes, que consolidaram sua liderança no partido.',
        'Venceu a guerra civil e proclamou a República Popular da China em 1º de outubro de 1949. Conduziu a reforma agrária e a alfabetização em massa, e elevou substancialmente a expectativa de vida. Em 1958 lançou o Grande Salto Adiante, plano de industrialização acelerada que provocou a maior fome da história: estimativas situam as mortes entre quinze e quarenta e cinco milhões.',
        'Em 1966 lançou a Revolução Cultural, campanha de dez anos que perseguiu professores, artistas, quadros do partido e qualquer suspeita de tradição, destruindo patrimônio e arruinando milhões de vidas. Morreu em Pequim em 9 de setembro de 1976; o país passou por profunda reorientação econômica nos anos seguintes.'
      ],
      contexto: 'Mao unificou um país fragmentado por guerra civil, invasão estrangeira e domínio colonial, e ao mesmo tempo conduziu duas das maiores catástrofes humanas do século XX. Sua obra escrita sobre guerra prolongada e contradição é estudada em academias militares e universidades em todos os continentes, independentemente do julgamento político sobre seu governo.',
      contribuicoes: [
        'Conduziu a revolução que fundou a República Popular da China, em 1949.',
        'Formulou a estratégia de guerra popular prolongada, estudada mundialmente.',
        'Conduziu reforma agrária e campanhas de alfabetização em massa.',
        "Escreveu 'Sobre a Prática', 'Sobre a Contradição' e 'Sobre a Guerra Prolongada'.",
        'É responsável pelo Grande Salto Adiante e pela Revolução Cultural, com dezenas de milhões de mortes.'
      ],
      cronologia: [
        [1893, 'Nasce em Shaoshan, província de Hunan, em 26 de dezembro.'],
        [1921, 'Participa da fundação do Partido Comunista Chinês.'],
        [1934, 'Inicia a Longa Marcha.'],
        [1949, 'Proclama a República Popular da China, em 1º de outubro.'],
        [1958, 'Lança o Grande Salto Adiante.'],
        [1966, 'Inicia a Revolução Cultural.'],
        [1976, 'Morre em Pequim, em 9 de setembro.']
      ],
      nota: null
    },
    'Chico Xavier': {
      resumo: 'Psicografou mais de quatrocentos livros, doou integralmente os direitos autorais e tornou-se a figura mais popular do espiritismo brasileiro.',
      bio: [
        'Francisco Cândido Xavier nasceu em Pedro Leopoldo, Minas Gerais, em 2 de abril de 1910, em família muito pobre. Ficou órfão de mãe aos cinco anos, trabalhou desde criança e concluiu apenas o curso primário. Relatou desde a infância ouvir vozes e ver pessoas já falecidas.',
        "Publicou em 1932, aos 22 anos, o 'Parnaso de Além-Túmulo', coletânea de poemas atribuídos a poetas brasileiros e portugueses mortos. O livro provocou debate imediato entre críticos literários e o tornou conhecido nacionalmente.",
        "Escreveu ao longo da vida mais de quatrocentos livros atribuídos a diversos espíritos, entre eles Emmanuel e André Luiz. 'Nosso Lar', de 1944, descreve uma colônia espiritual organizada e tornou-se um dos livros espíritas mais vendidos do Brasil. Manteve por décadas o emprego de funcionário público e depois viveu de aposentadoria.",
        'Doou integralmente os direitos autorais de toda a obra a instituições de assistência, prática mantida por quase setenta anos. Atendia gratuitamente milhares de pessoas, sobretudo pais enlutados, a quem entregava cartas psicografadas. Mudou-se para Uberaba em 1959 e morreu na cidade em 30 de junho de 2002.'
      ],
      contexto:
        'Chico Xavier é um fenômeno cultural brasileiro antes de ser uma questão doutrinária: sua obra vendeu dezenas de milhões de exemplares, foi adaptada ao cinema com grande público e sua figura pública se apoiou menos no debate religioso do que na consistência entre o que pregava e como vivia. A autenticidade da psicografia é objeto de disputa; a destinação integral dos recursos, não.',
      contribuicoes: [
        'Psicografou mais de quatrocentos livros, com dezenas de milhões de exemplares vendidos.',
        "Publicou 'Nosso Lar' e 'Parnaso de Além-Túmulo'.",
        'Doou integralmente os direitos autorais de toda a obra a obras assistenciais.',
        'Atendeu gratuitamente milhares de pessoas por décadas, sobretudo famílias enlutadas.',
        'Tornou o espiritismo brasileiro um fenômeno editorial e cultural de massa.'
      ],
      cronologia: [
        [1910, 'Nasce em Pedro Leopoldo, Minas Gerais, em 2 de abril.'],
        [1932, "Publica o 'Parnaso de Além-Túmulo'."],
        [1944, "Publica 'Nosso Lar'."],
        [1959, 'Muda-se para Uberaba.'],
        [1981, 'É indicado ao Nobel da Paz por entidades brasileiras.'],
        [2002, 'Morre em Uberaba, em 30 de junho.']
      ],
      nota: null
    },
    'Thich Nhat Hanh': {
      resumo: 'Monge vietnamita exilado por pedir o fim da guerra, levou a atenção plena ao Ocidente e foi indicado ao Nobel por Martin Luther King Jr.',
      bio: [
        'Thich Nhat Hanh nasceu em Huế, no Vietnã central, em 11 de outubro de 1926. Ordenou-se monge aos dezesseis anos. Nos anos 1950 e 1960 trabalhou na renovação do budismo vietnamita, fundando a Escola da Juventude para o Serviço Social, que organizava a reconstrução de aldeias bombardeadas.',
        'Formulou o que chamou de budismo engajado: a prática contemplativa não como retirada do mundo, mas como base da ação social. Durante a guerra, recusou-se a tomar partido por qualquer dos lados e pediu publicamente o fim do conflito.',
        'Em 1966 viajou aos Estados Unidos e à Europa para defender a paz. Encontrou-se com Martin Luther King Jr., que no ano seguinte o indicou ao Nobel da Paz — o comitê decidiu não conceder o prêmio naquele ano. Como consequência da viagem, foi impedido de retornar ao Vietnã e permaneceu exilado por 39 anos.',
        "Instalou-se na França, onde fundou em 1982 a comunidade de Plum Village, que se tornaria o maior centro de prática budista do Ocidente. Escreveu mais de cem livros, entre eles 'A Paz é Cada Passo'. Sofreu um derrame grave em 2014 e voltou ao Vietnã em 2018, morrendo em Huế em 22 de janeiro de 2022."
      ],
      contexto: 'Thich Nhat Hanh é a figura que mais contribuiu para a difusão da atenção plena no Ocidente em linguagem acessível a quem não tem vínculo religioso. A prática hoje adotada em hospitais, escolas e empresas deve muito à sua formulação, que traduz conceitos budistas em instruções concretas sobre respirar, caminhar e lavar a louça.',
      contribuicoes: ['Formulou o budismo engajado, unindo prática contemplativa e ação social.', 'Fundou Plum Village, maior centro de prática budista do Ocidente.', "Escreveu mais de cem livros, entre eles 'A Paz é Cada Passo'.", 'Foi indicado ao Nobel da Paz por Martin Luther King Jr., em 1967.', 'Difundiu no Ocidente a atenção plena aplicada à vida cotidiana.'],
      cronologia: [
        [1926, 'Nasce em Huế, Vietnã, em 11 de outubro.'],
        [1942, 'Ordena-se monge, aos dezesseis anos.'],
        [1966, 'Viaja aos Estados Unidos em defesa da paz e é impedido de retornar.'],
        [1967, 'É indicado ao Nobel da Paz por Martin Luther King Jr.'],
        [1982, 'Funda Plum Village, na França.'],
        [2005, 'Retorna ao Vietnã pela primeira vez em 39 anos.'],
        [2022, 'Morre em Huế, em 22 de janeiro.']
      ],
      nota: null
    },
    'Jack Ma': {
      resumo: 'Professor de inglês reprovado em concursos e recusado em dezenas de empregos, fundou a maior empresa de comércio eletrônico da China.',
      bio: [
        'Ma Yun nasceu em Hangzhou, na China, em 10 de setembro de 1964. Aprendeu inglês na adolescência oferecendo-se como guia gratuito a turistas estrangeiros, prática que manteve por nove anos. Foi reprovado duas vezes no exame nacional de admissão universitária antes de ser aceito, e relatou ter sido recusado em dezenas de processos seletivos de emprego.',
        'Trabalhou como professor de inglês. Em viagem aos Estados Unidos em 1995, teve o primeiro contato com a internet e constatou que não havia praticamente nada sobre a China na rede. Criou então um diretório de empresas chinesas, sua primeira tentativa de negócio.',
        'Em 1999 fundou o Alibaba em seu apartamento em Hangzhou, com dezessete sócios, como plataforma de conexão entre pequenos fabricantes chineses e compradores internacionais. Seguiram-se o Taobao, voltado ao consumidor, e o Alipay, sistema de pagamento que resolveu o problema de confiança entre desconhecidos.',
        'A abertura de capital do Alibaba em Nova York, em 2014, foi a maior oferta pública de ações da história até então. Ma deixou a presidência do conselho em 2019, no aniversário de 55 anos, dizendo querer voltar à educação. Sua exposição pública diminuiu drasticamente após críticas ao sistema regulatório chinês, em 2020.'
      ],
      contexto: 'A trajetória do Alibaba mostra como o comércio eletrônico chinês resolveu problemas que o modelo ocidental não enfrentava: escassez de infraestrutura de crédito, desconfiança entre partes e ausência de cartões. O sistema de custódia de pagamento criado pelo Alipay é a resposta direta a esse contexto e se tornou referência em mercados emergentes.',
      contribuicoes: [
        'Fundou o Alibaba, maior plataforma de comércio eletrônico da China.',
        'Criou o Alipay, que resolveu o problema de confiança em transações entre desconhecidos.',
        'Conduziu a maior oferta pública de ações da história até 2014.',
        'Criou a Fundação Jack Ma, com foco em educação rural e empreendedorismo.',
        'Estabeleceu o Dia dos Solteiros como maior data de vendas do varejo mundial.'
      ],
      cronologia: [
        [1964, 'Nasce em Hangzhou, China, em 10 de setembro.'],
        [1995, 'Tem o primeiro contato com a internet, em viagem aos Estados Unidos.'],
        [1999, 'Funda o Alibaba em seu apartamento, com dezessete sócios.'],
        [2003, 'Lança o Taobao.'],
        [2004, 'Lança o Alipay.'],
        [2014, 'Alibaba abre capital em Nova York.'],
        [2019, 'Deixa a presidência do conselho.']
      ],
      nota: null
    }
  };
  function aplicar() {
    var n = 0,
      ja = [];
    for (var k in P) {
      if (!AUTOR_INDEX.has(k)) {
        ja.push('[fora] ' + k);
        continue;
      }
      if (PERFIS_PROFUNDOS[k]) {
        ja.push('[existe] ' + k);
        continue;
      }
      PERFIS_PROFUNDOS[k] = P[k];
      n++;
    }
    if (ja.length) console.warn('Fase 57b · ignorados:', ja.join(' | '));
    console.log('MeMotiva · Fase 57b: +' + n + ' panoramas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 57c — panoramas (lote 3) ===== */
(function () {
  var P = {
    'Charles Darwin': {
      resumo: 'Passou vinte anos adiando a publicação da teoria que explicaria a origem de todas as espécies, inclusive a nossa.',
      bio: [
        'Charles Robert Darwin nasceu em Shrewsbury, Inglaterra, em 12 de fevereiro de 1809, em família abastada. Abandonou medicina em Edimburgo por não suportar as cirurgias sem anestesia e foi enviado a Cambridge para tornar-se clérigo anglicano, curso que concluiu enquanto colecionava besouros e estudava geologia e botânica com professores que o orientaram informalmente.',
        'Aos 22 anos embarcou no HMS Beagle como naturalista sem remuneração, em viagem que duraria quase cinco anos e daria a volta ao mundo. Na América do Sul e nas Galápagos recolheu fósseis, espécimes e observações que o levaram a duvidar da fixidez das espécies. Publicou o diário da viagem em 1839 e tornou-se naturalista respeitado.',
        'Formulou a teoria da seleção natural por volta de 1838, mas não a publicou. Passou as duas décadas seguintes acumulando evidências e escrevendo sobre cracas, orquídeas e minhocas, ciente da reação que sua tese provocaria. Em 1858 recebeu um manuscrito de Alfred Russel Wallace com a mesma ideia, e os dois trabalhos foram apresentados juntos.',
        "'A Origem das Espécies' saiu em 24 de novembro de 1859 e esgotou no primeiro dia. Em 1871 publicou 'A Descendência do Homem', aplicando a teoria à espécie humana e formulando a seleção sexual. Sofreu de doença crônica não diagnosticada por quase toda a vida adulta. Morreu em Downe em 19 de abril de 1882 e foi sepultado na Abadia de Westminster."
      ],
      contexto: 'Darwin não inventou a ideia de evolução, que circulava havia décadas — inclusive na obra de seu próprio avô. O que ele forneceu foi o mecanismo: a seleção natural, apoiada em uma quantidade de evidência que tornou a tese difícil de recusar. A demora em publicar não foi timidez, e sim cálculo: ele sabia exatamente o que a tese implicava para a posição do ser humano na natureza.',
      contribuicoes: [
        'Formulou a teoria da evolução por seleção natural.',
        "Publicou 'A Origem das Espécies' e 'A Descendência do Homem'.",
        'Introduziu a seleção sexual como segundo mecanismo evolutivo.',
        "Escreveu 'A Expressão das Emoções no Homem e nos Animais', pioneiro no estudo comparado do comportamento.",
        'Seus estudos sobre cracas, orquídeas e minhocas são referência em botânica e ecologia do solo.'
      ],
      cronologia: [
        [1809, 'Nasce em Shrewsbury, Inglaterra, em 12 de fevereiro.'],
        [1831, 'Embarca no HMS Beagle como naturalista.'],
        [1839, "Publica 'A Viagem do Beagle'."],
        [1858, 'Recebe o manuscrito de Wallace com a mesma teoria.'],
        [1859, "Publica 'A Origem das Espécies', em 24 de novembro."],
        [1871, "Publica 'A Descendência do Homem'."],
        [1882, 'Morre em Downe, em 19 de abril.']
      ],
      nota: null
    },
    'Isaac Newton': {
      resumo: 'Formulou as leis do movimento e da gravitação, inventou o cálculo e passou mais tempo estudando alquimia e teologia do que física.',
      bio: [
        'Isaac Newton nasceu em Woolsthorpe, Inglaterra, no Natal de 1642, prematuro e órfão de pai. A mãe casou-se novamente e o deixou com a avó, abandono que marcou sua personalidade retraída e desconfiada. Entrou em Cambridge em 1661 como aluno pobre, pagando os estudos com serviços.',
        'Quando a peste fechou a universidade, entre 1665 e 1667, voltou para casa e produziu, em cerca de dezoito meses, os fundamentos do cálculo, da óptica e da gravitação — período que ele próprio chamou de seus anos de maior invenção. Não publicou quase nada disso por décadas.',
        "Construiu o primeiro telescópio refletor em 1668 e demonstrou que a luz branca é composta de cores. Em 1687, pressionado e financiado por Edmond Halley, publicou os 'Princípios Matemáticos da Filosofia Natural', que estabeleceram as três leis do movimento e a gravitação universal e unificaram a física celeste e a terrestre.",
        'Dedicou mais páginas à alquimia e à cronologia bíblica do que à física, produção que só foi estudada no século XX. Tornou-se diretor da Casa da Moeda, onde perseguiu falsificadores com rigor, e presidiu a Royal Society. Travou com Leibniz uma disputa longa e amarga pela prioridade do cálculo. Morreu em Londres em 31 de março de 1727.'
      ],
      contexto: 'Newton é o divisor de águas da ciência moderna: depois dele, explicar a natureza passou a significar encontrar leis matemáticas de validade universal. Sua física dominou por mais de dois séculos, até que a relatividade e a mecânica quântica mostrassem seus limites — sem, no entanto, torná-la inútil: ainda é ela que leva foguetes ao espaço.',
      contribuicoes: ["Publicou os 'Princípios Matemáticos da Filosofia Natural', em 1687.", 'Formulou as três leis do movimento e a lei da gravitação universal.', 'Desenvolveu o cálculo infinitesimal, independentemente de Leibniz.', 'Demonstrou a composição da luz branca e construiu o primeiro telescópio refletor.', 'Presidiu a Royal Society e dirigiu a Casa da Moeda britânica.'],
      cronologia: [
        [1642, 'Nasce em Woolsthorpe, Inglaterra, no Natal.'],
        [1665, 'A peste fecha Cambridge; começam seus anos de maior invenção.'],
        [1668, 'Constrói o primeiro telescópio refletor.'],
        [1687, "Publica os 'Princípios Matemáticos da Filosofia Natural'."],
        [1696, 'Assume cargo na Casa da Moeda.'],
        [1704, "Publica a 'Óptica'."],
        [1727, 'Morre em Londres, em 31 de março.']
      ],
      nota: null
    },
    'George Orwell': {
      resumo: 'Lutou na Espanha, viveu entre miseráveis por escolha e escreveu os dois livros que definiram o vocabulário político do século XX.',
      bio: [
        "Eric Arthur Blair nasceu em Motihari, na Índia britânica, em 25 de junho de 1903. Estudou em Eton com bolsa e, em vez de seguir para a universidade, serviu cinco anos na polícia imperial na Birmânia — experiência que o converteu em adversário declarado do imperialismo e sobre a qual escreveria em 'Dias na Birmânia'.",
        "Voltou à Europa e viveu deliberadamente na pobreza em Paris e Londres, lavando pratos e dormindo em albergues, para escrever sobre isso. Adotou o pseudônimo George Orwell em 1933, com 'Na Pior em Paris e Londres'. Em 1937 publicou 'O Caminho para Wigan Pier', sobre a vida dos mineiros ingleses.",
        "Foi à Espanha em 1936 para cobrir a guerra civil e acabou se alistando na milícia do POUM. Foi ferido no pescoço por um franco-atirador e, ao voltar a Barcelona, viu seu grupo ser declarado ilegal e perseguido pelos comunistas. Escreveu 'Homenagem à Catalunha', recusado por seu editor habitual por contrariar a linha política dominante à esquerda.",
        "Publicou 'A Revolução dos Bichos' em 1945 e '1984' em 1949, este último escrito em uma ilha escocesa enquanto a tuberculose o consumia. Morreu em Londres em 21 de janeiro de 1950, aos 46 anos, sete meses após a publicação do livro que o tornaria universal."
      ],
      contexto: 'Orwell escreveu contra o totalitarismo sendo ele próprio socialista, e é essa posição que dá peso à sua crítica: não ataca de fora, mas de dentro da tradição que via ser traída. Palavras e expressões saídas de sua obra — Grande Irmão, novilíngua, duplipensar, orwelliano — entraram no vocabulário político de dezenas de idiomas.',
      contribuicoes: ["Escreveu 'A Revolução dos Bichos' e '1984'.", "Publicou 'Homenagem à Catalunha', relato em primeira pessoa da Guerra Civil Espanhola.", "Escreveu 'A Política e a Língua Inglesa', ensaio clássico sobre linguagem e desonestidade.", "Documentou a pobreza britânica em 'O Caminho para Wigan Pier'.", 'Seu nome deu origem ao adjetivo orwelliano, usado em dezenas de idiomas.'],
      cronologia: [
        [1903, 'Nasce em Motihari, Índia britânica, em 25 de junho.'],
        [1922, 'Ingressa na polícia imperial na Birmânia.'],
        [1933, "Publica 'Na Pior em Paris e Londres' sob pseudônimo."],
        [1936, 'Vai à Espanha e alista-se na milícia do POUM.'],
        [1938, "Publica 'Homenagem à Catalunha'."],
        [1945, "Publica 'A Revolução dos Bichos'."],
        [1949, "Publica '1984'."],
        [1950, 'Morre em Londres, em 21 de janeiro.']
      ],
      nota: null
    },
    'Ludwig van Beethoven': {
      resumo: 'Perdeu a audição a partir dos vinte e poucos anos e compôs surdo as obras que encerraram o classicismo e abriram o romantismo.',
      bio: [
        'Ludwig van Beethoven foi batizado em Bonn em 17 de dezembro de 1770. O pai, músico da corte e alcoolista, tentou apresentá-lo como menino prodígio à maneira de Mozart, com treinos violentos. Aos dezessete anos assumiu o sustento da família e aos 22 mudou-se para Viena, onde estudou brevemente com Haydn.',
        'Firmou-se primeiro como pianista de improvisação extraordinária e depois como compositor. Em torno de 1796 começou a perder a audição. Em 1802 escreveu aos irmãos a carta conhecida como Testamento de Heiligenstadt, em que revela a surdez que escondia e explica por que não tirou a própria vida: não suportaria deixar o mundo antes de produzir o que sentia dever produzir.',
        "Seguiu-se a fase heroica, com a Terceira Sinfonia, a Quinta, o Concerto Imperador e a ópera 'Fidelio'. Rompeu com a convenção da música como serviço à aristocracia: vivia de encomendas, assinaturas e vendas, e tratava mecenas de igual para igual.",
        'Na última década estava completamente surdo e compôs a Missa Solemnis, os últimos quartetos de cordas e a Nona Sinfonia, primeira a incluir coro e solistas. Na estreia da Nona, em 1824, precisou ser virado para o público para ver os aplausos que não podia ouvir. Morreu em Viena em 26 de março de 1827; cerca de vinte mil pessoas acompanharam o funeral.'
      ],
      contexto: 'Beethoven está exatamente na fronteira entre dois mundos: começa dentro das formas do classicismo vienense e as expande até rompê-las. É também o primeiro grande compositor a viver como artista independente, e não como funcionário de corte ou de igreja — mudança que alteraria para sempre a posição social do músico.',
      contribuicoes: ['Compôs nove sinfonias, entre elas a Terceira, a Quinta e a Nona.', 'Introduziu coro e solistas na sinfonia, na Nona, de 1824.', 'Compôs os últimos quartetos de cordas, considerados o ponto mais alto da música de câmara.', "Escreveu 32 sonatas para piano, entre elas a 'Ao Luar' e a 'Appassionata'.", "O tema da 'Ode à Alegria' é o hino oficial da União Europeia."],
      cronologia: [
        [1770, 'É batizado em Bonn, em 17 de dezembro.'],
        [1792, 'Muda-se para Viena.'],
        [1802, 'Escreve o Testamento de Heiligenstadt.'],
        [1804, "Conclui a Terceira Sinfonia, 'Eroica'."],
        [1808, 'Estreia a Quinta e a Sexta Sinfonias.'],
        [1824, 'Estreia a Nona Sinfonia.'],
        [1827, 'Morre em Viena, em 26 de março.']
      ],
      nota: null
    },
    'Grace Hopper': {
      resumo: 'Oficial da Marinha americana, criou o primeiro compilador e foi decisiva na linguagem que ainda move os bancos do mundo.',
      bio: [
        'Grace Brewster Murray Hopper nasceu em Nova York em 9 de dezembro de 1906. Doutorou-se em matemática por Yale em 1934, quando pouquíssimas mulheres alcançavam esse grau. Lecionava em Vassar quando os Estados Unidos entraram na Segunda Guerra; alistou-se na reserva feminina da Marinha em 1943, aos 37 anos, acima do limite de idade e do peso mínimo exigido.',
        'Foi designada para o projeto do computador Mark I, em Harvard, onde escreveu o manual de operação da máquina. Em 1947, ao investigar uma falha do Mark II, a equipe encontrou uma mariposa presa em um relé; ela colou o inseto no caderno de registro — episódio que popularizou o termo bug em computação.',
        'Trabalhou na Eckert-Mauchly, responsável pelo UNIVAC, e desenvolveu em 1952 o compilador A-0, primeiro programa capaz de traduzir notação simbólica em código de máquina. Enfrentou ceticismo generalizado: diziam-lhe que computadores não sabiam escrever programas.',
        'Criou a FLOW-MATIC, primeira linguagem baseada em palavras em inglês, que serviu de base direta ao COBOL, especificado em 1959. Permaneceu na Marinha até 1986, aposentando-se aos 79 anos como contra-almirante e oficial mais idoso em serviço ativo. Morreu em Arlington em 1º de janeiro de 1992.'
      ],
      contexto: 'A contribuição de Hopper foi insistir que a programação deveria ser acessível a quem não é matemático. Essa convicção — que a máquina deve se aproximar da linguagem humana, e não o contrário — está na origem de todas as linguagens de alto nível. O COBOL, que ela ajudou a criar, ainda sustenta boa parte das operações bancárias e previdenciárias do mundo.',
      contribuicoes: ['Desenvolveu o compilador A-0, em 1952, antepassado de todos os compiladores.', 'Criou a FLOW-MATIC, base direta da linguagem COBOL.', 'Escreveu o manual de operação do computador Mark I.', 'Popularizou o termo bug em computação, a partir do incidente de 1947.', 'Aposentou-se como contra-almirante, a oficial mais idosa em serviço ativo na Marinha americana.'],
      cronologia: [
        [1906, 'Nasce em Nova York, em 9 de dezembro.'],
        [1934, 'Doutora-se em matemática por Yale.'],
        [1943, 'Alista-se na reserva feminina da Marinha.'],
        [1947, 'O incidente da mariposa populariza o termo bug.'],
        [1952, 'Desenvolve o compilador A-0.'],
        [1959, 'O COBOL é especificado, com base em sua FLOW-MATIC.'],
        [1986, 'Aposenta-se como contra-almirante, aos 79 anos.'],
        [1992, 'Morre em Arlington, em 1º de janeiro.']
      ],
      nota: null
    },
    'Jane Goodall': {
      resumo: 'Foi a Gombe sem formação universitária e derrubou a definição corrente do que separa humanos dos outros animais.',
      bio: [
        'Valerie Jane Morris-Goodall nasceu em Londres em 3 de abril de 1934. Não pôde cursar universidade por falta de recursos; trabalhou como secretária e garçonete para pagar uma viagem ao Quênia, em 1957. Ali procurou o paleoantropólogo Louis Leakey, que a contratou como assistente e depois a enviou à Tanzânia para estudar chimpanzés selvagens.',
        'Chegou a Gombe em julho de 1960, aos 26 anos, acompanhada da mãe — as autoridades britânicas não permitiam que uma mulher jovem ficasse sozinha na mata. Passou meses sem conseguir aproximação até que os animais se habituassem à sua presença.',
        'Em outubro daquele ano observou um chimpanzé descascar um galho e usá-lo para pescar cupins. A descoberta obrigou a revisão da definição de ser humano como o único animal fabricante de ferramentas. Leakey respondeu por telegrama que agora seria preciso redefinir ferramenta, redefinir homem ou aceitar chimpanzés como humanos.',
        'Doutorou-se em Cambridge em 1966 sem ter feito graduação. Documentou também caça cooperativa, guerra entre grupos e laços familiares duradouros. A partir dos anos 1980 deixou o trabalho de campo contínuo para se dedicar à conservação e à educação, fundando o Instituto Jane Goodall e o programa Roots & Shoots. Tornou-se Mensageira da Paz da ONU em 2002.'
      ],
      contexto: 'Goodall foi criticada na academia por dar nomes, e não números, aos animais que observava, e por descrever personalidade e emoção em primatas. Essas mesmas escolhas se tornaram depois práticas correntes na primatologia. Sua trajetória mudou tanto o que se sabe sobre chimpanzés quanto o modo como se considera legítimo estudá-los.',
      contribuicoes: ['Descobriu que chimpanzés fabricam e usam ferramentas, em 1960.', 'Documentou caça cooperativa, conflito intergrupal e laços familiares em chimpanzés.', 'Doutorou-se em Cambridge sem ter cursado graduação.', 'Fundou o Instituto Jane Goodall e o programa educacional Roots & Shoots.', 'É Mensageira da Paz das Nações Unidas desde 2002.'],
      cronologia: [
        [1934, 'Nasce em Londres, em 3 de abril.'],
        [1957, 'Viaja ao Quênia e conhece Louis Leakey.'],
        [1960, 'Chega a Gombe e observa o uso de ferramentas por chimpanzés.'],
        [1966, 'Doutora-se em Cambridge.'],
        [1977, 'Funda o Instituto Jane Goodall.'],
        [1991, 'Cria o programa Roots & Shoots.'],
        [2002, 'Torna-se Mensageira da Paz da ONU.']
      ],
      nota: null
    },
    'Malcolm X': {
      resumo: 'Passou do crime à liderança religiosa, rompeu com a organização que o formou e foi assassinado quando revia suas próprias posições.',
      bio: [
        'Malcolm Little nasceu em Omaha, Nebraska, em 19 de maio de 1925. O pai, pastor e ativista, morreu quando ele tinha seis anos, em circunstâncias que a família atribuiu a supremacistas brancos; a mãe foi internada em hospital psiquiátrico e os filhos, distribuídos entre lares adotivos. Um professor lhe disse que ser advogado não era objetivo realista para um negro.',
        'Envolveu-se com pequenos crimes em Boston e no Harlem e foi preso em 1946, aos vinte anos, com pena de dez anos. Na prisão leu sistematicamente, copiando um dicionário inteiro à mão, e converteu-se à Nação do Islã, adotando o X em lugar do sobrenome herdado da escravidão.',
        'Solto em 1952, tornou-se o principal porta-voz da Nação do Islã e multiplicou sua base. Defendia a autodefesa, a autodeterminação econômica e a separação, em oposição direta à estratégia de integração não violenta do movimento por direitos civis, e tornou-se uma das figuras públicas mais polarizadoras dos Estados Unidos.',
        'Rompeu com a organização em 1964, após conflitos com Elijah Muhammad. A peregrinação a Meca naquele ano, em que conviveu com muçulmanos de todas as origens, reorientou suas posições sobre raça. Fundou a Organização da Unidade Afro-Americana e passou a buscar aproximação internacional. Foi assassinado em Nova York em 21 de fevereiro de 1965, aos 39 anos.'
      ],
      contexto: 'Malcolm X é frequentemente apresentado como o oposto de Martin Luther King Jr., leitura que a trajetória dos dois no último ano de vida de ambos complica: estavam se aproximando. Sua autobiografia, publicada meses após sua morte, tornou-se um dos livros de não ficção mais influentes dos Estados Unidos e leitura fundadora para gerações de leitores negros no mundo inteiro.',
      contribuicoes: [
        'Foi o principal porta-voz da Nação do Islã e multiplicou sua base de seguidores.',
        "Deixou a 'Autobiografia de Malcolm X', escrita com Alex Haley.",
        "Proferiu 'O Voto ou a Bala', um dos discursos mais estudados da retórica política americana.",
        'Fundou a Organização da Unidade Afro-Americana, com agenda internacionalista.',
        'Formulou a defesa da autodeterminação econômica e cultural negra nos Estados Unidos.'
      ],
      cronologia: [
        [1925, 'Nasce em Omaha, Nebraska, em 19 de maio.'],
        [1946, 'É preso e condenado a dez anos.'],
        [1952, 'Sai da prisão e torna-se porta-voz da Nação do Islã.'],
        [1964, 'Rompe com a Nação do Islã e peregrina a Meca.'],
        [1965, 'É assassinado em Nova York, em 21 de fevereiro.'],
        [1965, "A 'Autobiografia de Malcolm X' é publicada."]
      ],
      nota: null
    },
    'Rosa Parks': {
      resumo: 'Militante experiente da NAACP, recusou ceder o assento e desencadeou o boicote que projetou o movimento por direitos civis.',
      bio: [
        'Rosa Louise McCauley nasceu em Tuskegee, Alabama, em 4 de fevereiro de 1913. Cresceu em um estado sob segregação legal, em que a Ku Klux Klan operava abertamente; contou que o avô montava guarda na varanda com uma espingarda. Deixou os estudos para cuidar da avó e da mãe doentes e concluiu o ensino médio anos depois.',
        'Casou-se em 1932 com Raymond Parks, militante que já atuava na defesa dos Nove de Scottsboro. Entrou para a NAACP em 1943 e tornou-se secretária da seção de Montgomery, função que exerceu por mais de uma década — investigava casos de violência sexual contra mulheres negras e de linchamento, trabalho perigoso e pouco lembrado.',
        'Em 1º de dezembro de 1955 recusou-se a ceder o assento no ônibus a um passageiro branco e foi presa. A NAACP e lideranças locais organizaram a partir daí o boicote aos ônibus de Montgomery, que durou 381 dias, projetou o jovem pastor Martin Luther King Jr. e terminou com a decisão da Suprema Corte que declarou inconstitucional a segregação no transporte.',
        'Perdeu o emprego e recebeu ameaças de morte; mudou-se com o marido para Detroit em 1957. Trabalhou por vinte e três anos no gabinete do deputado John Conyers e seguiu atuando em causas de direitos civis. Morreu em Detroit em 24 de outubro de 2005 e foi a primeira mulher a ter o corpo velado na rotunda do Capitólio americano.'
      ],
      contexto:
        'A versão popular apresenta Rosa Parks como uma costureira cansada que agiu por impulso. Ela própria corrigiu essa narrativa: era militante treinada, havia frequentado meses antes a Highlander Folk School, centro de formação em ação direta, e o único cansaço que sentia, escreveu, era o de ceder. A distinção importa porque muda o que o episódio ensina sobre como mudanças acontecem.',
      contribuicoes: [
        'Sua recusa desencadeou o boicote aos ônibus de Montgomery, em 1955.',
        'Foi secretária da seção de Montgomery da NAACP por mais de uma década.',
        'Investigou casos de violência sexual contra mulheres negras no Alabama segregado.',
        "Publicou 'Rosa Parks: Minha História', corrigindo a narrativa popular sobre o episódio.",
        'Foi a primeira mulher velada na rotunda do Capitólio dos Estados Unidos.'
      ],
      cronologia: [
        [1913, 'Nasce em Tuskegee, Alabama, em 4 de fevereiro.'],
        [1943, 'Entra para a NAACP e torna-se secretária da seção local.'],
        [1955, 'Recusa ceder o assento; começa o boicote aos ônibus de Montgomery.'],
        [1956, 'A Suprema Corte declara inconstitucional a segregação nos ônibus.'],
        [1957, 'Muda-se para Detroit.'],
        [1996, 'Recebe a Medalha Presidencial da Liberdade.'],
        [2005, 'Morre em Detroit, em 24 de outubro.']
      ],
      nota: null
    },
    'Andrew Carnegie': {
      resumo: 'Saiu da Escócia sem dinheiro, construiu o maior império siderúrgico do mundo e doou quase tudo em vida.',
      bio: [
        'Andrew Carnegie nasceu em Dunfermline, na Escócia, em 25 de novembro de 1835, filho de um tecelão arruinado pela mecanização dos teares. A família emigrou para a Pensilvânia em 1848. Aos treze anos ele trabalhava doze horas por dia em uma fábrica de tecidos; depois foi mensageiro de telégrafo e telegrafista.',
        'Entrou para a Pennsylvania Railroad, onde subiu rapidamente e aprendeu gestão de operações complexas. Investiu em pontes, petróleo e vagões-leito, e a partir dos anos 1870 concentrou-se no aço, adotando o processo Bessemer e a integração vertical — controlava minas, transporte e usinas.',
        'Vendeu a Carnegie Steel a J. P. Morgan em 1901 por cerca de quatrocentos e oitenta milhões de dólares, tornando-se o homem mais rico do mundo. A operação deu origem à U.S. Steel, primeira empresa a valer um bilhão de dólares.',
        "Havia publicado em 1889 'O Evangelho da Riqueza', em que sustenta que o rico é apenas administrador temporário de sua fortuna e deve distribuí-la em vida. Cumpriu: financiou mais de 2.500 bibliotecas públicas, universidades, salas de concerto e fundações de pesquisa e de paz. Sua trajetória inclui também a greve de Homestead, em 1892, reprimida com violência que deixou mortos. Morreu em Massachusetts em 11 de agosto de 1919."
      ],
      contexto: 'Carnegie condensa a contradição da Era Dourada americana: escreveu o texto fundador da filantropia moderna e presidiu uma das repressões operárias mais violentas da história industrial. A rede de bibliotecas públicas que financiou mudou o acesso ao livro em vários países, e o modelo de doação que propôs influenciou todos os grandes filantropos posteriores.',
      contribuicoes: ['Construiu a Carnegie Steel, maior empresa siderúrgica do mundo em seu tempo.', "Publicou 'O Evangelho da Riqueza', texto fundador da filantropia moderna.", 'Financiou mais de 2.500 bibliotecas públicas em vários países.', 'Criou a Carnegie Mellon University, o Carnegie Hall e fundações de pesquisa e de paz.', 'Doou cerca de noventa por cento de sua fortuna ainda em vida.'],
      cronologia: [
        [1835, 'Nasce em Dunfermline, Escócia, em 25 de novembro.'],
        [1848, 'A família emigra para os Estados Unidos.'],
        [1889, "Publica 'O Evangelho da Riqueza'."],
        [1892, 'Greve de Homestead é reprimida com violência.'],
        [1901, 'Vende a Carnegie Steel a J. P. Morgan.'],
        [1911, 'Cria a Carnegie Corporation of New York.'],
        [1919, 'Morre em Massachusetts, em 11 de agosto.']
      ],
      nota: null
    },
    'Francisco de Assis': {
      resumo: 'Filho de comerciante rico, renunciou a tudo em praça pública e fundou a maior ordem mendicante da Igreja.',
      bio: [
        'Giovanni di Pietro di Bernardone nasceu em Assis por volta de 1181, filho de um próspero mercador de tecidos. Levou juventude festiva e sonhou com glória militar. Participou de uma guerra entre Assis e Perúgia, foi preso por cerca de um ano e voltou doente e transformado.',
        'Após uma série de experiências religiosas, entre elas a ordem que ouviu em uma capela em ruínas para reconstruir a igreja, começou a vender mercadorias do pai para financiar reformas. O pai o processou. Diante do bispo e da cidade, Francisco devolveu tudo o que tinha, inclusive as roupas, e declarou que dali em diante só teria um Pai.',
        'Passou a viver de esmolas, cuidar de leprosos e pregar em língua vulgar a quem quisesse ouvir. Atraiu companheiros e obteve em 1209 aprovação oral do papa Inocêncio III para uma regra baseada na pobreza absoluta. Em 1212 acolheu Clara de Assis, que fundaria o ramo feminino da ordem.',
        "Em 1219, durante a Quinta Cruzada, atravessou as linhas e encontrou-se com o sultão al-Malik al-Kamil no Egito, episódio hoje tomado como marco do diálogo inter-religioso. Recebeu os estigmas em 1224, segundo os relatos da ordem, e compôs no mesmo período o 'Cântico das Criaturas'. Morreu em Assis em 3 de outubro de 1226 e foi canonizado dois anos depois."
      ],
      contexto:
        "Francisco surge numa Igreja rica e numa Europa em que as ordens religiosas acumulavam terras e rendas. Sua proposta de pobreza radical era tão desestabilizadora que foi acolhida institucionalmente em parte para evitar que virasse heresia. A disputa sobre o rigor da pobreza dividiu a ordem por séculos. É patrono dos animais e da ecologia, e inspirou a encíclica 'Laudato Si'', de 2015.",
      contribuicoes: [
        'Fundou a Ordem dos Frades Menores, maior ordem mendicante da Igreja Católica.',
        "Compôs o 'Cântico das Criaturas', um dos primeiros textos literários em língua vulgar italiana.",
        'Encontrou-se com o sultão al-Kamil em 1219, durante a Quinta Cruzada.',
        'Criou, segundo a tradição, o primeiro presépio vivo, em Greccio, em 1223.',
        "É padroeiro dos animais e da ecologia, e inspirou a encíclica 'Laudato Si''."
      ],
      cronologia: [
        [1181, 'Nasce em Assis, por volta deste ano.'],
        [1206, 'Renuncia publicamente aos bens do pai.'],
        [1209, 'Obtém do papa aprovação oral para sua regra.'],
        [1212, 'Clara de Assis funda o ramo feminino da ordem.'],
        [1219, 'Encontra-se com o sultão al-Kamil no Egito.'],
        [1224, "Compõe o 'Cântico das Criaturas'."],
        [1226, 'Morre em Assis, em 3 de outubro.']
      ],
      nota: null
    },
    Pelé: {
      resumo: 'Único tricampeão mundial da história do futebol, tornou-se o esportista mais reconhecido do século XX.',
      bio: [
        'Edson Arantes do Nascimento nasceu em Três Corações, Minas Gerais, em 23 de outubro de 1940, filho de um jogador de futebol. Cresceu em Bauru, em condições de pobreza, e trabalhou como engraxate na infância. Foi levado ao Santos aos quinze anos por Waldemar de Brito, que disse aos dirigentes que estava entregando o maior jogador do mundo.',
        'Estreou no time profissional em 1956 e na seleção brasileira em 1957, aos dezesseis anos. Na Copa de 1958, na Suécia, aos dezessete, marcou seis gols, entre eles dois na final, e o Brasil conquistou seu primeiro título mundial. Venceu ainda as Copas de 1962 e 1970, sendo o único jogador tricampeão mundial.',
        'Pelo Santos, conquistou dois títulos da Copa Libertadores e dois Mundiais Interclubes, além de dezenas de títulos estaduais e nacionais. Marcou seu milésimo gol no Maracanã, em novembro de 1969, e dedicou-o às crianças pobres do Brasil.',
        'Encerrou a carreira no New York Cosmos, entre 1975 e 1977, onde contribuiu decisivamente para popularizar o futebol nos Estados Unidos. Foi ministro do Esporte entre 1995 e 1998, período em que propôs a lei que ficou conhecida por seu nome. Morreu em São Paulo em 29 de dezembro de 2022.'
      ],
      contexto: 'Pelé se projetou num período em que o Brasil buscava afirmação internacional e o futebol televisionado ganhava alcance global. Sua trajetória, de menino pobre do interior a figura conhecida em todos os continentes, tornou-se parte da autoimagem brasileira. A Copa de 1970, transmitida em cores para o mundo, fixou a imagem do time e do jogador no imaginário esportivo.',
      contribuicoes: ['Único tricampeão mundial da história: 1958, 1962 e 1970.', 'Marcou mais de mil gols em carreira, sendo o milésimo no Maracanã, em 1969.', 'Conquistou pelo Santos duas Libertadores e dois Mundiais Interclubes.', 'Contribuiu para a popularização do futebol nos Estados Unidos pelo New York Cosmos.', 'Foi ministro do Esporte do Brasil entre 1995 e 1998.'],
      cronologia: [
        [1940, 'Nasce em Três Corações, Minas Gerais, em 23 de outubro.'],
        [1956, 'Estreia como profissional no Santos.'],
        [1958, 'Campeão mundial na Suécia, aos dezessete anos.'],
        [1962, 'Bicampeão mundial no Chile.'],
        [1969, 'Marca o milésimo gol no Maracanã.'],
        [1970, 'Tricampeão mundial no México.'],
        [1975, 'Transfere-se para o New York Cosmos.'],
        [2022, 'Morre em São Paulo, em 29 de dezembro.']
      ],
      nota: null
    },
    'J.K. Rowling': {
      resumo: 'Escreveu em cafés de Edimburgo, vivendo de auxílio social, a série literária mais vendida da história.',
      bio: [
        'Joanne Rowling nasceu em Yate, na Inglaterra, em 31 de julho de 1965. Formou-se em estudos clássicos e trabalhou na Anistia Internacional e como professora de inglês em Portugal. Contou que a ideia de um menino bruxo lhe ocorreu em 1990, durante um atraso de trem entre Manchester e Londres, e que não tinha caneta para anotá-la.',
        'Nos anos seguintes perdeu a mãe, casou-se, teve uma filha, separou-se e voltou a Edimburgo com a criança pequena e sem emprego, vivendo de auxílio social. Escreveu o primeiro livro nesse período, em cafés da cidade. O manuscrito foi recusado por doze editoras antes de ser aceito pela Bloomsbury, cujo editor decidiu publicá-lo depois que a filha de oito anos leu o primeiro capítulo e pediu o resto.',
        "'Harry Potter e a Pedra Filosofal' saiu em 1997 com tiragem de quinhentos exemplares. A série chegou a sete volumes, vendeu mais de seiscentos milhões de exemplares em dezenas de idiomas e deu origem a oito filmes, sendo apontada como responsável por reverter a queda da leitura entre crianças.",
        "Depois da série, escreveu 'Morte Súbita', romance adulto, e uma série policial sob o pseudônimo Robert Galbraith. É a primeira pessoa a acumular mais de um bilhão de dólares com escrita, e doou parte substancial da fortuna a causas de pesquisa médica e de proteção à infância. Posições públicas que assumiu a partir de 2019 sobre identidade de gênero tornaram-se objeto de controvérsia intensa."
      ],
      contexto: 'O fenômeno Harry Potter alterou o mercado editorial mundial: criou o conceito de lançamento global simultâneo, consolidou a literatura juvenil como segmento de maior peso comercial e mostrou que crianças leem livros longos. A editora pediu que a autora assinasse com iniciais, temendo que meninos não comprassem um livro escrito por mulher.',
      contribuicoes: [
        'Escreveu a série Harry Potter, a mais vendida da história da literatura.',
        "Publicou 'Morte Súbita' e a série policial assinada como Robert Galbraith.",
        'Criou a Lumos, organização dedicada a tirar crianças de instituições de abrigo.',
        'Financiou pesquisa em esclerose múltipla, doença que matou sua mãe.',
        'Sua obra é apontada como fator de recuperação da leitura entre crianças nos anos 2000.'
      ],
      cronologia: [
        [1965, 'Nasce em Yate, Inglaterra, em 31 de julho.'],
        [1990, 'Tem a ideia da série durante um atraso de trem.'],
        [1997, "Publica 'Harry Potter e a Pedra Filosofal'."],
        [2007, 'Publica o sétimo e último volume da série.'],
        [2012, "Publica 'Morte Súbita'."],
        [2013, 'Revela-se autora dos romances assinados como Robert Galbraith.']
      ],
      nota: null
    },
    'Ariano Suassuna': {
      resumo: 'Criou o Movimento Armorial e escreveu a peça brasileira mais encenada do século XX.',
      bio: [
        'Ariano Vilar Suassuna nasceu em João Pessoa, Paraíba, em 16 de junho de 1927. O pai, presidente do estado, foi assassinado em 1930, no contexto da revolução daquele ano — episódio que atravessa toda a sua obra. A família mudou-se para o sertão paraibano e depois para o Recife.',
        'Formou-se em direito, exerceu brevemente a advocacia e voltou-se ao teatro e ao magistério. Encontrou na literatura de cordel, nos folhetos de feira e na cultura popular nordestina a matéria que consideraria legítima base de uma arte erudita brasileira.',
        "Em 1955 estreou o 'Auto da Compadecida', montado a partir de folhetos de cordel na estrutura dos autos medievais ibéricos. A peça tornou-se a mais encenada do teatro brasileiro e, em 1999 e 2000, a minissérie e o filme de Guel Arraes a levaram ao repertório popular do país.",
        "Fundou em 1970 o Movimento Armorial, que propunha uma arte brasileira erudita construída sobre a cultura popular do Nordeste, abrangendo música, artes plásticas, literatura e dança. Publicou em 1971 o 'Romance d'A Pedra do Reino'. Foi professor e secretário de cultura em Pernambuco, e conhecido por suas aulas-espetáculo. Morreu no Recife em 23 de julho de 2014."
      ],
      contexto: 'Suassuna trabalhou contra duas tendências simultâneas: a importação de modelos estrangeiros e o tratamento folclórico da cultura popular como curiosidade. Sua proposta era outra — tomar o cordel e o romanceiro como equivalentes nordestinos do que a epopeia e o teatro clássico foram na Europa, e construir a partir deles obra erudita.',
      contribuicoes: ["Escreveu o 'Auto da Compadecida', peça mais encenada do teatro brasileiro.", 'Fundou o Movimento Armorial, em 1970.', "Publicou o 'Romance d'A Pedra do Reino'.", 'Foi secretário de cultura de Pernambuco e professor da Universidade Federal do estado.', 'Popularizou a cultura do cordel e do romanceiro nordestino como base de arte erudita.'],
      cronologia: [
        [1927, 'Nasce em João Pessoa, Paraíba, em 16 de junho.'],
        [1930, 'O pai é assassinado no contexto da Revolução de 1930.'],
        [1955, "Estreia o 'Auto da Compadecida'."],
        [1970, 'Funda o Movimento Armorial.'],
        [1971, "Publica o 'Romance d'A Pedra do Reino'."],
        [1990, 'É eleito para a Academia Brasileira de Letras.'],
        [2014, 'Morre no Recife, em 23 de julho.']
      ],
      nota: null
    },
    'Florbela Espanca': {
      resumo: 'Escreveu sobre desejo feminino em primeira pessoa na Portugal de 1920 e morreu aos 36 anos, praticamente desconhecida.',
      bio: [
        'Flor Bela de Alma da Conceição nasceu em Vila Viçosa, Portugal, em 8 de dezembro de 1894, filha não reconhecida de um fotógrafo e de uma empregada. Foi criada pelo pai e pela madrasta; a paternidade só seria juridicamente reconhecida em 1949, décadas após sua morte.',
        'Foi uma das primeiras mulheres a frequentar o curso de direito da Universidade de Lisboa, que iniciou em 1917. A morte do irmão Apeles, em acidente aéreo em 1927, foi a perda mais determinante de sua vida e marcou profundamente sua produção final.',
        "Publicou 'Livro de Mágoas' em 1919 e 'Livro de Sóror Saudade' em 1923, ambos em sonetos, tratando de solidão, desejo e insatisfação em primeira pessoa — o que era escandaloso para uma mulher naquele Portugal. Casou-se e separou-se três vezes, o que lhe custou hostilidade social constante.",
        "Morreu em Matosinhos em 8 de dezembro de 1930, no dia em que completava 36 anos, por overdose de barbitúricos. 'Charneca em Flor', sua obra mais plena, saiu poucos meses depois. O reconhecimento veio em décadas seguintes, e hoje é uma das vozes centrais da poesia portuguesa."
      ],
      contexto: 'Florbela escreveu numa sociedade que não admitia que uma mulher falasse publicamente de desejo, e foi tratada em vida como caso pessoal antes de como obra. A reavaliação posterior mudou isso: hoje é lida como uma das primeiras vozes femininas modernas em língua portuguesa a tratar o corpo e o afeto sem pedir licença.',
      contribuicoes: [
        "Publicou 'Livro de Mágoas', 'Livro de Sóror Saudade' e 'Charneca em Flor'.",
        'Introduziu na poesia portuguesa a expressão direta do desejo feminino.',
        'Foi uma das primeiras mulheres a cursar direito na Universidade de Lisboa.',
        'Consolidou o soneto como forma central de sua obra, em contracorrente ao modernismo.',
        'É hoje uma das autoras mais lidas e estudadas da literatura portuguesa.'
      ],
      cronologia: [
        [1894, 'Nasce em Vila Viçosa, Portugal, em 8 de dezembro.'],
        [1917, 'Ingressa no curso de direito em Lisboa.'],
        [1919, "Publica 'Livro de Mágoas'."],
        [1923, "Publica 'Livro de Sóror Saudade'."],
        [1927, 'O irmão Apeles morre em acidente aéreo.'],
        [1930, "Morre em Matosinhos, em 8 de dezembro; 'Charneca em Flor' sai no ano seguinte."]
      ],
      nota: null
    },
    'Václav Havel': {
      resumo: 'Dramaturgo e prisioneiro político, tornou-se presidente da Tchecoslováquia onze anos depois de escrever sobre o poder dos sem-poder.',
      bio: [
        'Václav Havel nasceu em Praga em 5 de outubro de 1936, em família burguesa. Por sua origem de classe, foi impedido pelo regime comunista de cursar o ensino superior em humanidades. Estudou economia de transportes, serviu no exército e entrou no teatro como técnico, chegando a dramaturgo.',
        'Suas peças, do teatro do absurdo, satirizam a burocracia e a linguagem esvaziada do regime. Participou da Primavera de Praga, em 1968, e após a invasão soviética teve as obras proibidas, os passaportes cassados e passou a trabalhar em uma cervejaria.',
        "Foi um dos redatores e primeiros signatários da Carta 77, manifesto que cobrava do governo o cumprimento dos direitos humanos que ele próprio havia assinado nos acordos de Helsinque. Escreveu em 1978 o ensaio 'O Poder dos Sem-Poder', que circulou clandestinamente e se tornou o texto de referência da dissidência do Leste Europeu.",
        'Passou cerca de cinco anos preso em diferentes períodos. Em novembro de 1989, a Revolução de Veludo derrubou o regime sem violência; em dezembro, Havel foi eleito presidente pelo parlamento. Conduziu a transição e, após a separação pacífica entre Tchéquia e Eslováquia, presidiu a República Tcheca até 2003. Morreu em 18 de dezembro de 2011.'
      ],
      contexto: 'A tese central de Havel é que regimes como o que enfrentou não se sustentam pela crença, mas pela adesão simulada de todos — e que a resistência começa quando alguém simplesmente para de repetir a mentira. O exemplo do verdureiro que expõe na vitrine um cartaz em que ninguém acredita é uma das imagens mais citadas da teoria política do século XX.',
      contribuicoes: [
        "Escreveu 'O Poder dos Sem-Poder', texto de referência da dissidência do Leste Europeu.",
        'Foi um dos redatores e signatários fundadores da Carta 77.',
        "Escreveu peças do teatro do absurdo, entre elas 'A Festa no Jardim' e 'Memorando'.",
        'Presidiu a Tchecoslováquia após a Revolução de Veludo e depois a República Tcheca.',
        'Conduziu a separação pacífica entre Tchéquia e Eslováquia, em 1993.'
      ],
      cronologia: [
        [1936, 'Nasce em Praga, em 5 de outubro.'],
        [1968, 'Participa da Primavera de Praga; é proibido após a invasão soviética.'],
        [1977, 'Coassina a Carta 77.'],
        [1978, "Escreve 'O Poder dos Sem-Poder'."],
        [1979, 'É condenado a mais de quatro anos de prisão.'],
        [1989, 'É eleito presidente após a Revolução de Veludo.'],
        [2011, 'Morre em 18 de dezembro.']
      ],
      nota: null
    },
    'Elisabeth Kübler-Ross': {
      resumo: 'Psiquiatra suíça, foi a primeira a ouvir sistematicamente pacientes terminais e criou o campo dos cuidados com o morrer.',
      bio: [
        'Elisabeth Kübler-Ross nasceu em Zurique em 8 de julho de 1926, trigêmea. Contra a vontade do pai, que a queria secretária, trabalhou como voluntária no pós-guerra e visitou o campo de Majdanek, na Polônia, experiência que descreveu como determinante. Formou-se em medicina em 1957 e mudou-se para os Estados Unidos.',
        'Chocou-se com o tratamento dado a pacientes terminais nos hospitais americanos: isolados, não informados do próprio diagnóstico e evitados pela equipe. Começou a conduzir seminários em que estudantes de medicina ouviam pacientes moribundos falarem da própria experiência — prática inédita e inicialmente rejeitada pelos colegas.',
        "Publicou em 1969 'Sobre a Morte e o Morrer', a partir desses seminários. O livro descreve cinco estágios frequentemente observados em quem recebe um diagnóstico terminal: negação, raiva, barganha, depressão e aceitação. A formulação tornou-se uma das mais difundidas da psicologia do século XX.",
        'Dedicou o resto da carreira aos cuidados paliativos, ao luto e ao acompanhamento de crianças doentes e de pacientes com aids, causa que abraçou quando poucos o faziam. Escreveu mais de vinte livros. Sofreu uma série de derrames nos últimos anos de vida e morreu no Arizona em 24 de agosto de 2004.'
      ],
      contexto:
        'Kübler-Ross atuou quando a medicina tratava a morte como fracasso técnico a ser evitado inclusive no assunto. Seu trabalho é a base do movimento de cuidados paliativos e hospice no mundo. Os cinco estágios, frequentemente citados como sequência obrigatória, foram apresentados por ela como descrição de reações possíveis, e não como roteiro — mal-entendido que ela própria tentou corrigir.',
      contribuicoes: ["Publicou 'Sobre a Morte e o Morrer', em 1969.", 'Descreveu os cinco estágios de reação a um diagnóstico terminal.', 'Fundou o campo de estudo e de prática dos cuidados com pacientes terminais.', 'Foi decisiva para o desenvolvimento do movimento hospice e dos cuidados paliativos.', 'Acompanhou pacientes com aids quando a doença ainda era cercada de estigma.'],
      cronologia: [
        [1926, 'Nasce em Zurique, em 8 de julho.'],
        [1957, 'Forma-se em medicina.'],
        [1958, 'Muda-se para os Estados Unidos.'],
        [1969, "Publica 'Sobre a Morte e o Morrer'."],
        [1977, 'Funda o centro Shanti Nilaya, dedicado ao acompanhamento de pacientes terminais.'],
        [2004, 'Morre no Arizona, em 24 de agosto.']
      ],
      nota: null
    },
    'Donald Winnicott': {
      resumo: 'Pediatra e psicanalista, atendeu dezenas de milhares de crianças e reformulou a psicanálise a partir da relação entre bebê e mãe.',
      bio: [
        "Donald Woods Winnicott nasceu em Plymouth, Inglaterra, em 7 de abril de 1896. Formou-se em medicina e especializou-se em pediatria, trabalhando por quarenta anos no Paddington Green Children's Hospital, em Londres, onde atendeu cerca de sessenta mil crianças e suas famílias.",
        'Formou-se também em psicanálise, tendo passado por análise com James Strachey e sido supervisionado por Melanie Klein. Manteve posição própria nas disputas que dividiram a Sociedade Psicanalítica Britânica, integrando o chamado grupo independente.',
        'Sua contribuição central parte da observação direta: não existe um bebê sozinho, existe sempre um bebê e alguém que cuida. Formulou o conceito de mãe suficientemente boa — aquela que falha na medida certa, permitindo que a criança construa autonomia —, os objetos transicionais e a noção de falso self.',
        'Fez cerca de sessenta programas de rádio na BBC dirigidos a mães, em linguagem simples e sem jargão, o que o tornou figura conhecida do público britânico. Trabalhou com crianças evacuadas durante a Segunda Guerra. Morreu em Londres em 25 de janeiro de 1971.'
      ],
      contexto: 'Winnicott deslocou o foco da psicanálise infantil das pulsões internas para o ambiente de cuidado, e com isso aproximou a teoria da prática cotidiana de criar filhos. A ideia de que basta ser suficientemente bom — e não perfeito — teve efeito duradouro sobre a orientação de pais, sobre a pediatria e sobre a formação de profissionais de saúde e de educação infantil.',
      contribuicoes: ['Formulou os conceitos de mãe suficientemente boa, objeto transicional e falso self.', 'Atendeu cerca de sessenta mil crianças e famílias ao longo de quarenta anos.', "Publicou 'O Brincar e a Realidade' e 'A Criança e o Seu Mundo'.", 'Fez dezenas de programas de rádio na BBC dirigidos a mães.', 'Trabalhou com crianças evacuadas de Londres durante a Segunda Guerra.'],
      cronologia: [
        [1896, 'Nasce em Plymouth, Inglaterra, em 7 de abril.'],
        [1923, "Começa a trabalhar no Paddington Green Children's Hospital."],
        [1935, 'Torna-se membro da Sociedade Psicanalítica Britânica.'],
        [1943, 'Inicia as palestras de rádio na BBC.'],
        [1971, "Publica 'O Brincar e a Realidade' e morre em Londres, em 25 de janeiro."]
      ],
      nota: null
    },
    'G. K. Chesterton': {
      resumo: 'Jornalista, romancista e polemista, escreveu milhares de artigos e o padre-detetive mais influente da literatura inglesa.',
      bio: [
        'Gilbert Keith Chesterton nasceu em Londres em 29 de maio de 1874. Estudou arte na Slade School e literatura, sem concluir o curso, e entrou no jornalismo. Escreveu cerca de quatro mil artigos ao longo da vida, além de romances, biografias, poesia e crítica literária.',
        'Ficou conhecido pelo paradoxo como método: invertia a formulação corrente de uma ideia para revelar o que ela escondia. Polemizou publicamente e com cordialidade com George Bernard Shaw e H. G. Wells por décadas, em debates que atraíam plateias.',
        "Publicou 'Ortodoxia' em 1908, relato de sua trajetória intelectual até o cristianismo, e 'O Homem Eterno' em 1925 — este último apontado por C. S. Lewis como decisivo em sua própria conversão. Converteu-se ao catolicismo em 1922.",
        "Criou em 1910 o padre Brown, detetive que resolve crimes pela compreensão do pecado humano, em oposição ao método dedutivo de Sherlock Holmes. Escreveu ainda 'O Homem que Era Quinta-Feira' e biografias de São Francisco e de Tomás de Aquino. Morreu em Beaconsfield em 14 de junho de 1936."
      ],
      contexto: 'Chesterton escreveu contra o que considerava as certezas fáceis de seu tempo, do determinismo científico ao progressismo utópico, e o fez com humor em vez de solenidade. Sua influência sobre autores posteriores, de C. S. Lewis a Borges, vem menos das teses que defendeu do que do procedimento: tornar estranho o que parecia óbvio.',
      contribuicoes: [
        'Criou o padre Brown, um dos detetives mais influentes da literatura policial.',
        "Publicou 'Ortodoxia' e 'O Homem Eterno', obras centrais da apologética cristã moderna.",
        "Escreveu 'O Homem que Era Quinta-Feira', romance admirado por Borges e Kafka.",
        'Publicou cerca de quatro mil artigos de jornal ao longo da carreira.',
        'Escreveu biografias de São Francisco de Assis, Tomás de Aquino e Charles Dickens.'
      ],
      cronologia: [
        [1874, 'Nasce em Londres, em 29 de maio.'],
        [1904, "Publica 'O Napoleão de Notting Hill'."],
        [1908, "Publica 'Ortodoxia' e 'O Homem que Era Quinta-Feira'."],
        [1910, 'Cria o padre Brown.'],
        [1922, 'Converte-se ao catolicismo.'],
        [1925, "Publica 'O Homem Eterno'."],
        [1936, 'Morre em Beaconsfield, em 14 de junho.']
      ],
      nota: null
    },
    'Oprah Winfrey': {
      resumo: 'Saiu da pobreza rural do Mississippi para o programa de entrevistas mais assistido dos Estados Unidos e o controle do próprio império de mídia.',
      bio: [
        'Oprah Gail Winfrey nasceu em Kosciusko, Mississippi, em 29 de janeiro de 1954, filha de mãe adolescente solteira. Passou a infância entre a avó, numa fazenda sem água encanada, e a mãe, em Milwaukee. Sofreu abusos sexuais a partir dos nove anos, o que tornaria público décadas depois. Foi morar com o pai em Nashville na adolescência, virada que ela aponta como decisiva.',
        "Começou no rádio aos dezessete anos e passou à televisão local. Em 1984 assumiu um programa matinal de baixa audiência em Chicago e, em meses, o levou à liderança. O programa foi renomeado 'The Oprah Winfrey Show' e distribuído nacionalmente em 1986, permanecendo no ar por 25 anos como o talk show mais assistido da história americana.",
        'Ao contrário da prática do setor, obteve a propriedade do próprio programa por meio da produtora Harpo, que fundou em 1986 — decisão que explica a escala de sua fortuna. Criou depois uma revista, uma rede de televisão e uma empresa de produção audiovisual.',
        "Seu clube do livro, criado em 1996, transformava títulos em best-sellers imediatos e é apontado como o maior impulso individual à leitura na televisão americana. Financiou uma escola de liderança para meninas na África do Sul e doou centenas de milhões de dólares a causas de educação. Foi indicada ao Oscar pela atuação em 'A Cor Púrpura'."
      ],
      contexto: 'Oprah mudou o formato do programa de entrevistas ao deslocar o eixo do confronto para a confissão e a vulnerabilidade, com efeitos discutidos até hoje — tanto pelo alcance que deu a temas antes silenciados quanto pelo espaço que abriu, em certos episódios, a práticas sem base científica. Foi a primeira mulher negra bilionária dos Estados Unidos.',
      contribuicoes: ['Apresentou por 25 anos o talk show mais assistido da história americana.', 'Fundou a Harpo Productions, obtendo a propriedade do próprio programa.', "Criou o Oprah's Book Club, maior impulso individual à leitura na televisão americana.", 'Fundou a Oprah Winfrey Leadership Academy for Girls, na África do Sul.', 'Recebeu a Medalha Presidencial da Liberdade em 2013.'],
      cronologia: [
        [1954, 'Nasce em Kosciusko, Mississippi, em 29 de janeiro.'],
        [1984, 'Assume um programa matinal em Chicago.'],
        [1986, 'O programa passa a ser distribuído nacionalmente; funda a Harpo Productions.'],
        [1985, "É indicada ao Oscar por 'A Cor Púrpura'."],
        [1996, "Cria o Oprah's Book Club."],
        [2007, 'Inaugura a escola de liderança para meninas na África do Sul.'],
        [2011, 'Encerra o programa após 25 anos.']
      ],
      nota: null
    },
    'Coco Chanel': {
      resumo: 'Criada em orfanato, libertou o corpo feminino do espartilho e criou a marca de moda mais influente do século XX.',
      bio: [
        'Gabrielle Bonheur Chanel nasceu em Saumur, na França, em 19 de agosto de 1883, filha de uma lavadeira e de um vendedor ambulante. Após a morte da mãe, foi deixada aos doze anos em um orfanato de freiras, onde aprendeu a costurar. O apelido Coco vem de sua breve passagem como cantora de cabaré.',
        'Abriu uma chapelaria em Paris em 1910, financiada por um amante, e depois lojas em Deauville e Biarritz. Introduziu o jérsei — tecido até então usado em roupa íntima masculina — na alta-costura, e com ele roupas que dispensavam o espartilho e permitiam movimento.',
        'Criou o tailleur de tweed, o vestido preto simples que a imprensa comparou ao Ford Modelo T pela universalidade, as bolsas com alça de corrente e, em 1921, o perfume Chanel Nº 5, primeiro a usar aldeídos sintéticos e um dos produtos mais vendidos da história.',
        'Fechou os negócios em 1939 e viveu no Hotel Ritz durante a ocupação alemã, mantendo uma relação com um oficial nazista e sendo investigada por colaboração após a guerra — período que manchou sua reputação e a levou a alguns anos na Suíça. Voltou à moda em 1954, aos 71 anos, e recuperou a posição no mercado americano. Morreu em Paris em 10 de janeiro de 1971.'
      ],
      contexto:
        'Chanel traduziu em roupa uma mudança social concreta: mulheres que trabalhavam, dirigiam e se moviam precisavam de peças que permitissem isso. A simplificação radical que propôs — tecidos práticos, linhas retas, ausência de ornamento — é o ponto em que a moda feminina moderna se separa da do século XIX. Sua biografia inclui uma colaboração com o ocupante nazista que ela nunca explicou satisfatoriamente.',
      contribuicoes: ['Introduziu o jérsei na alta-costura, libertando a roupa feminina do espartilho.', 'Criou o tailleur de tweed e o vestido preto simples.', 'Lançou o Chanel Nº 5, em 1921, um dos perfumes mais vendidos da história.', 'Popularizou a bijuteria e o uso de joia falsa junto com a verdadeira.', 'Voltou à ativa aos 71 anos e reconquistou o mercado internacional.'],
      cronologia: [
        [1883, 'Nasce em Saumur, França, em 19 de agosto.'],
        [1895, 'É deixada em um orfanato após a morte da mãe.'],
        [1910, 'Abre uma chapelaria em Paris.'],
        [1921, 'Lança o Chanel Nº 5.'],
        [1926, 'Populariza o vestido preto simples.'],
        [1939, 'Fecha os negócios no início da guerra.'],
        [1954, 'Retorna à moda, aos 71 anos.'],
        [1971, 'Morre em Paris, em 10 de janeiro.']
      ],
      nota: null
    }
  };
  function aplicar() {
    var n = 0,
      ja = [];
    for (var k in P) {
      if (!AUTOR_INDEX.has(k)) {
        ja.push('[fora] ' + k);
        continue;
      }
      if (PERFIS_PROFUNDOS[k]) {
        ja.push('[existe] ' + k);
        continue;
      }
      PERFIS_PROFUNDOS[k] = P[k];
      n++;
    }
    if (ja.length) console.warn('Fase 57c · ignorados:', ja.join(' | '));
    console.log('MeMotiva · Fase 57c: +' + n + ' panoramas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 57d — panoramas (lote 4) ===== */
(function () {
  var P = {
    'Galileu Galilei': {
      resumo: 'Apontou o primeiro telescópio para o céu, encontrou provas contra o geocentrismo e foi condenado a abjurar.',
      bio: [
        'Galileu Galilei nasceu em Pisa em 15 de fevereiro de 1564. Entrou na universidade para estudar medicina por vontade do pai, mudou para matemática e tornou-se professor em Pisa e depois em Pádua. Estudou o movimento dos corpos em queda e o pêndulo, e desenvolveu instrumentos que também vendia para se sustentar.',
        "Em 1609, ao saber da invenção do telescópio na Holanda, construiu o seu e o apontou para o céu. Viu montanhas e crateras na Lua, estrelas invisíveis a olho nu na Via Láctea e quatro satélites girando em torno de Júpiter. Publicou os resultados em 1610, no 'Mensageiro das Estrelas', e tornou-se célebre em toda a Europa em poucos meses.",
        'As luas de Júpiter mostravam que existiam corpos orbitando algo que não a Terra, e as fases de Vênus eram incompatíveis com o modelo de Ptolomeu. Galileu passou a defender publicamente o sistema de Copérnico. Em 1616 a Igreja declarou o heliocentrismo contrário às Escrituras e o advertiu.',
        "Publicou em 1632 o 'Diálogo sobre os Dois Máximos Sistemas do Mundo', em italiano, para leitores comuns. Foi processado pela Inquisição, obrigado a abjurar em 1633 e condenado à prisão domiciliar, em que permaneceu até a morte. Ainda assim escreveu ali sua obra mais sólida em física, os 'Discursos sobre Duas Novas Ciências'. Morreu em Arcetri em 8 de janeiro de 1642."
      ],
      contexto: 'Galileu é a figura que melhor representa a passagem da autoridade dos textos para a autoridade da observação. Sua condenação tornou-se o episódio emblemático do conflito entre ciência e dogma, embora historiadores mostrem um quadro mais complexo, com disputas pessoais, políticas e de método envolvidas. A Igreja reconheceu formalmente o erro do processo em 1992.',
      contribuicoes: [
        'Descobriu as luas de Júpiter, as fases de Vênus e o relevo lunar.',
        "Publicou 'O Mensageiro das Estrelas' e o 'Diálogo sobre os Dois Máximos Sistemas do Mundo'.",
        'Formulou a lei da queda dos corpos e o princípio da inércia.',
        'Estabeleceu o método experimental com medição quantitativa como base da física.',
        'Escreveu em italiano, e não em latim, para alcançar leitores fora da universidade.'
      ],
      cronologia: [
        [1564, 'Nasce em Pisa, em 15 de fevereiro.'],
        [1609, 'Constrói seu telescópio e o aponta para o céu.'],
        [1610, "Publica 'O Mensageiro das Estrelas'."],
        [1616, 'A Igreja declara o heliocentrismo contrário às Escrituras.'],
        [1632, "Publica o 'Diálogo sobre os Dois Máximos Sistemas do Mundo'."],
        [1633, 'É condenado pela Inquisição e obrigado a abjurar.'],
        [1638, "Publica os 'Discursos sobre Duas Novas Ciências'."],
        [1642, 'Morre em Arcetri, em 8 de janeiro.']
      ],
      nota: null
    },
    'Nikola Tesla': {
      resumo: 'Criou o sistema elétrico que ilumina o mundo e morreu sozinho em um quarto de hotel, endividado.',
      bio: [
        'Nikola Tesla nasceu em Smiljan, no atual território da Croácia, em 10 de julho de 1856, filho de um padre ortodoxo sérvio. Estudou engenharia em Graz e em Praga sem concluir os cursos. Relatou ter concebido o motor de corrente alternada ao caminhar em um parque em Budapeste, desenhando o esquema na areia com um graveto.',
        'Emigrou para os Estados Unidos em 1884 e trabalhou brevemente para Thomas Edison, de quem se afastou após uma disputa sobre pagamento. Registrou a partir de 1888 as patentes do sistema polifásico de corrente alternada, compradas por George Westinghouse.',
        'Seguiu-se a guerra das correntes: Edison defendia a corrente contínua e conduziu uma campanha pública contra a alternada, que incluiu demonstrações de eletrocussão de animais. A corrente alternada venceu por razões técnicas — permite transmissão a longas distâncias — e iluminou a Exposição de Chicago em 1893 e a usina das Cataratas do Niágara em 1895.',
        'Abriu mão de royalties sobre as patentes para viabilizar a empresa de Westinghouse, decisão que lhe custou uma fortuna. Trabalhou em transmissão de energia sem fios, no projeto da torre de Wardenclyffe, abandonado por falta de recursos, e em dezenas de outras frentes. Morreu sozinho no Hotel New Yorker em 7 de janeiro de 1943, aos 86 anos, endividado.'
      ],
      contexto:
        'Tesla é hoje uma figura de culto popular, o que produz tanto reconhecimento tardio merecido quanto atribuições fantasiosas. O que é documentado basta: o sistema de corrente alternada que ele patenteou é a base de praticamente toda a rede elétrica existente, e o motor de indução que projetou move boa parte da indústria mundial. A unidade de densidade de fluxo magnético leva seu nome.',
      contribuicoes: [
        'Patenteou o sistema polifásico de corrente alternada, padrão mundial de distribuição elétrica.',
        'Inventou o motor de indução, base da maior parte dos motores industriais.',
        'Desenvolveu a bobina de Tesla e trabalhos pioneiros em rádio e controle remoto.',
        'Contribuiu para a construção da usina hidrelétrica das Cataratas do Niágara.',
        'A unidade de densidade de fluxo magnético do Sistema Internacional leva seu nome.'
      ],
      cronologia: [
        [1856, 'Nasce em Smiljan, atual Croácia, em 10 de julho.'],
        [1884, 'Emigra para os Estados Unidos.'],
        [1888, 'Registra as patentes do sistema de corrente alternada.'],
        [1893, 'A corrente alternada ilumina a Exposição Mundial de Chicago.'],
        [1895, 'Entra em operação a usina das Cataratas do Niágara.'],
        [1901, 'Inicia a construção da torre de Wardenclyffe.'],
        [1943, 'Morre em Nova York, em 7 de janeiro.']
      ],
      nota: null
    },
    'Miguel de Cervantes': {
      resumo: 'Perdeu o uso da mão esquerda em batalha, passou cinco anos cativo em Argel e escreveu o primeiro romance moderno.',
      bio: [
        'Miguel de Cervantes Saavedra nasceu em Alcalá de Henares, Espanha, provavelmente em 29 de setembro de 1547, filho de um cirurgião endividado. A família mudou-se constantemente fugindo de credores. Alistou-se e combateu na batalha de Lepanto, em 1571, onde levou três tiros de arcabuz e perdeu o uso da mão esquerda — passou a ser chamado de o Manco de Lepanto, apelido de que se orgulhava.',
        'Em 1575, quando voltava à Espanha, foi capturado por corsários e levado a Argel, onde passou cinco anos cativo. Tentou fugir quatro vezes e foi resgatado em 1580 mediante pagamento que arruinou a família.',
        'De volta à Espanha, não conseguiu as posições que pleiteava. Trabalhou como requisitador de suprimentos para a Armada Invencível e como cobrador de impostos, funções que o levaram à prisão mais de uma vez por irregularidades de contas. Escreveu teatro e poesia com pouco sucesso.',
        "Publicou a primeira parte de 'Dom Quixote' em 1605, aos 57 anos, e obteve êxito imediato. A segunda parte saiu em 1615, apressada pelo aparecimento de uma continuação apócrifa. Morreu em Madri em 22 de abril de 1616, poucos dias antes de Shakespeare — coincidência que levou a Unesco a instituir o Dia Mundial do Livro em 23 de abril."
      ],
      contexto: "Cervantes escreveu 'Dom Quixote' como paródia dos livros de cavalaria e produziu, sem se propor a isso, o primeiro romance moderno: uma narrativa em que o personagem tem interioridade, muda ao longo do livro e convive com um mundo que não corresponde ao que ele projeta. Praticamente toda a tradição romanesca posterior parte dele, direta ou indiretamente.",
      contribuicoes: [
        "Escreveu 'Dom Quixote de la Mancha', considerado o primeiro romance moderno.",
        "Publicou as 'Novelas Exemplares', fundadoras da novela curta em língua espanhola.",
        'Criou em Dom Quixote e Sancho Pança uma das duplas mais influentes da literatura.',
        'Introduziu no romance o jogo entre autor, narrador e leitor retomado por toda a literatura moderna.',
        'A data de sua morte deu origem ao Dia Mundial do Livro.'
      ],
      cronologia: [
        [1547, 'Nasce em Alcalá de Henares, Espanha.'],
        [1571, 'Combate em Lepanto e perde o uso da mão esquerda.'],
        [1575, 'É capturado por corsários e levado cativo a Argel.'],
        [1580, 'É resgatado após cinco anos de cativeiro.'],
        [1605, "Publica a primeira parte de 'Dom Quixote'."],
        [1613, "Publica as 'Novelas Exemplares'."],
        [1615, "Publica a segunda parte de 'Dom Quixote'."],
        [1616, 'Morre em Madri, em 22 de abril.']
      ],
      nota: null
    },
    'Jorge Amado': {
      resumo: 'O autor brasileiro mais traduzido do mundo, teve livros queimados em praça pública e foi deputado cassado.',
      bio: [
        'Jorge Leal Amado de Faria nasceu em Itabuna, Bahia, em 10 de agosto de 1912, em família de fazendeiros de cacau. Cresceu em Ilhéus, cenário de boa parte de sua obra. Publicou o primeiro romance aos dezenove anos e formou-se em direito no Rio de Janeiro, profissão que nunca exerceu.',
        "A primeira fase de sua obra é de romance social e militante: 'Cacau', 'Suor', 'Jubiabá', 'Capitães da Areia'. Filiou-se ao Partido Comunista e, em 1937, teve livros apreendidos e queimados em praça pública em Salvador por ordem do Estado Novo. Viveu exilado na Argentina, no Uruguai, na França e na Tchecoslováquia.",
        'Elegeu-se deputado federal pelo Partido Comunista em 1945 e foi autor da emenda constitucional que garantiu a liberdade de culto religioso no Brasil. Teve o mandato cassado em 1948, com a ilegalização do partido.',
        "Rompeu com o Partido Comunista em 1955 e iniciou a segunda fase de sua obra, de comédia de costumes baiana: 'Gabriela, Cravo e Canela', 'Dona Flor e Seus Dois Maridos', 'Tenda dos Milagres'. Tornou-se o autor brasileiro mais traduzido, com obras em mais de quarenta e nove idiomas. Morreu em Salvador em 6 de agosto de 2001."
      ],
      contexto:
        'Jorge Amado é o autor que mais fez circular a cultura afro-brasileira e a vida popular baiana dentro e fora do país. Foi criticado por parte da crítica acadêmica por facilidade e por estereotipia, e defendido por outra parte como o escritor que deu protagonismo literário a personagens que a literatura brasileira mantinha à margem. Sua obra é também documento sobre o candomblé e sobre o Brasil mestiço que ele afirmava.',
      contribuicoes: [
        'É o autor brasileiro mais traduzido, com obras em mais de quarenta idiomas.',
        "Escreveu 'Capitães da Areia', 'Gabriela, Cravo e Canela' e 'Dona Flor e Seus Dois Maridos'.",
        'Foi autor da emenda que garantiu a liberdade de culto religioso na Constituição de 1946.',
        'Teve livros queimados em praça pública pelo Estado Novo, em 1937.',
        'Levou a cultura afro-brasileira e o candomblé à literatura de grande circulação.'
      ],
      cronologia: [
        [1912, 'Nasce em Itabuna, Bahia, em 10 de agosto.'],
        [1937, 'Tem livros queimados em praça pública em Salvador.'],
        [1945, 'Elege-se deputado federal pelo Partido Comunista.'],
        [1948, 'Tem o mandato cassado e parte para o exílio.'],
        [1958, "Publica 'Gabriela, Cravo e Canela'."],
        [1961, 'É eleito para a Academia Brasileira de Letras.'],
        [1966, "Publica 'Dona Flor e Seus Dois Maridos'."],
        [2001, 'Morre em Salvador, em 6 de agosto.']
      ],
      nota: null
    },
    'Pablo Picasso': {
      resumo: 'Produziu mais de vinte mil obras, inventou o cubismo e pintou o quadro antiguerra mais conhecido do século.',
      bio: [
        'Pablo Ruiz Picasso nasceu em Málaga, Espanha, em 25 de outubro de 1881, filho de um professor de desenho. Era tecnicamente exímio desde a adolescência; contou que o pai lhe entregou os próprios pincéis ao perceber que o filho já pintava melhor. Estudou em Barcelona e em Madri e mudou-se para Paris em 1904.',
        "Passou pelo período azul, de figuras melancólicas em tons frios, e pelo período rosa, de saltimbancos e circo. Em 1907 pintou 'As Senhoritas de Avignon', com corpos fragmentados em planos angulosos e rostos inspirados em máscaras africanas e ibéricas — obra que chocou até seus amigos e que é apontada como início da arte moderna.",
        'Com Georges Braque desenvolveu o cubismo entre 1908 e 1914, decompondo os objetos em planos vistos simultaneamente de vários ângulos. Introduziu a colagem na pintura. Trabalhou depois em registros muito diversos — neoclássico, surrealista, escultura, cerâmica, gravura — sem se fixar em nenhum.',
        "Em 1937 pintou 'Guernica', painel de quase oito metros sobre o bombardeio da cidade basca pela aviação alemã e italiana a serviço de Franco. Determinou que a obra só voltaria à Espanha quando o país fosse uma democracia; ela chegou a Madri em 1981. Produziu até os últimos dias e morreu em Mougins, na França, em 8 de abril de 1973, aos 91 anos."
      ],
      contexto:
        'Picasso é o artista que melhor representa a ruptura do século XX com a representação herdada do Renascimento. Sua produção, estimada em mais de vinte mil obras entre pinturas, esculturas, gravuras e cerâmicas, é provavelmente a maior de que se tem registro para um único artista. Sua biografia pessoal, marcada por relações abusivas com várias companheiras, é hoje parte incontornável da leitura de sua obra.',
      contribuicoes: ['Criou o cubismo com Georges Braque, entre 1908 e 1914.', "Pintou 'As Senhoritas de Avignon' e 'Guernica'.", 'Introduziu a colagem como técnica na pintura.', 'Produziu mais de vinte mil obras em pintura, escultura, gravura e cerâmica.', 'Sua obra é a mais frequentemente furtada do mundo, segundo registros policiais internacionais.'],
      cronologia: [
        [1881, 'Nasce em Málaga, Espanha, em 25 de outubro.'],
        [1904, 'Instala-se definitivamente em Paris.'],
        [1907, "Pinta 'As Senhoritas de Avignon'."],
        [1912, 'Introduz a colagem na pintura, com Braque.'],
        [1937, "Pinta 'Guernica'."],
        [1973, 'Morre em Mougins, França, em 8 de abril.'],
        [1981, "'Guernica' chega à Espanha democrática."]
      ],
      nota: null
    },
    Michelangelo: {
      resumo: 'Considerava-se escultor, pintou a contragosto o teto da Capela Sistina e produziu três das obras mais reconhecidas do mundo.',
      bio: [
        'Michelangelo di Lodovico Buonarroti Simoni nasceu em Caprese, na Toscana, em 6 de março de 1475. Entrou como aprendiz na oficina de Ghirlandaio aos treze anos e logo passou ao jardim de esculturas de Lourenço de Médici, em Florença, onde conviveu com humanistas e teve acesso à estatuária antiga.',
        "Concluiu a 'Pietà' em 1499, aos 24 anos — única obra que assinou, segundo a tradição, após ouvir a autoria ser atribuída a outro escultor. Em 1504 terminou o 'Davi', esculpido em um bloco de mármore abandonado havia décadas e considerado inutilizável por outros artistas.",
        'Em 1508 o papa Júlio II o encarregou de pintar o teto da Capela Sistina. Michelangelo, que se considerava escultor e não pintor, aceitou a contragosto e trabalhou quatro anos em andaimes, com a cabeça inclinada para trás, cobrindo mais de quinhentos metros quadrados com cenas do Gênesis. Escreveu um poema sobre as dores físicas do trabalho.',
        "Voltou à capela três décadas depois para pintar o 'Juízo Final' na parede do altar. Nos últimos anos dedicou-se sobretudo à arquitetura, assumindo a obra da Basílica de São Pedro e projetando sua cúpula. Escreveu também mais de trezentos sonetos. Morreu em Roma em 18 de fevereiro de 1564, aos 88 anos."
      ],
      contexto: 'Michelangelo trabalhou no auge do mecenato papal e foi o primeiro artista europeu a ter uma biografia publicada ainda em vida — sinal da mudança de estatuto do artista, de artesão a figura de gênio. A escala e a exigência física de suas obras, sobretudo a Sistina, fazem parte de sua lenda, e ele próprio a alimentou em cartas e poemas.',
      contribuicoes: ["Esculpiu a 'Pietà' e o 'Davi'.", "Pintou o teto da Capela Sistina e o 'Juízo Final'.", 'Projetou a cúpula da Basílica de São Pedro, no Vaticano.', 'Escreveu mais de trezentos sonetos e madrigais.', 'Foi o primeiro artista ocidental a ter biografia publicada ainda em vida.'],
      cronologia: [
        [1475, 'Nasce em Caprese, Toscana, em 6 de março.'],
        [1499, "Conclui a 'Pietà'."],
        [1504, "Conclui o 'Davi'."],
        [1508, 'Inicia o teto da Capela Sistina.'],
        [1512, 'Conclui o teto da Sistina.'],
        [1541, "Conclui o 'Juízo Final'."],
        [1546, 'Assume a obra da Basílica de São Pedro.'],
        [1564, 'Morre em Roma, em 18 de fevereiro.']
      ],
      nota: null
    },
    'Wolfgang Amadeus Mozart': {
      resumo: 'Compôs desde os cinco anos, produziu mais de seiscentas obras e morreu aos 35, em dificuldade financeira.',
      bio: [
        'Johannes Chrysostomus Wolfgangus Theophilus Mozart nasceu em Salzburgo em 27 de janeiro de 1756. O pai, Leopold, era músico da corte e autor de um tratado de violino; percebeu cedo o talento do filho e da filha Nannerl e os levou em turnês pelas cortes europeias a partir de 1762, quando Wolfgang tinha seis anos.',
        'Compôs a primeira sinfonia aos oito anos e a primeira ópera aos doze. Passou a adolescência entre viagens e o serviço na corte do arcebispo de Salzburgo, relação que se deteriorou até a ruptura em 1781, quando se mudou para Viena para viver como músico independente — condição rara e arriscada naquele tempo.',
        "Em Viena teve os anos mais produtivos: as óperas 'O Rapto do Serralho', 'As Bodas de Fígaro', 'Don Giovanni' e 'A Flauta Mágica', os concertos para piano, os quartetos dedicados a Haydn e as três últimas sinfonias, escritas em cerca de seis semanas em 1788 sem encomenda conhecida.",
        "Ganhava bem em vários períodos, mas gastava mais do que recebia e enfrentou dificuldades recorrentes. Morreu em Viena em 5 de dezembro de 1791, aos 35 anos, de causa nunca estabelecida com certeza, deixando inacabado o 'Réquiem'. Foi sepultado em vala comum, prática corrente em Viena para quem não pertencia à alta nobreza."
      ],
      contexto: 'Mozart viveu a transição em que o músico deixava de ser criado de corte para tentar viver do próprio público — transição que ele tentou e que o deixou economicamente exposto. Sua produção de mais de seiscentas obras em 35 anos de vida é uma das mais extensas e mais executadas da história da música ocidental.',
      contribuicoes: ['Compôs mais de seiscentas obras, entre óperas, sinfonias, concertos e música de câmara.', "Escreveu 'As Bodas de Fígaro', 'Don Giovanni' e 'A Flauta Mágica'.", 'Compôs 27 concertos para piano, que definiram o gênero.', 'Escreveu as três últimas sinfonias em cerca de seis semanas, em 1788.', "Deixou inacabado o 'Réquiem', concluído por seu aluno Süssmayr."],
      cronologia: [
        [1756, 'Nasce em Salzburgo, em 27 de janeiro.'],
        [1762, 'Inicia as turnês pelas cortes europeias, aos seis anos.'],
        [1781, 'Rompe com o arcebispo de Salzburgo e muda-se para Viena.'],
        [1786, "Estreia 'As Bodas de Fígaro'."],
        [1787, "Estreia 'Don Giovanni' em Praga."],
        [1788, 'Compõe as três últimas sinfonias.'],
        [1791, "Estreia 'A Flauta Mágica' e morre em Viena, em 5 de dezembro."]
      ],
      nota: null
    },
    'Martinho Lutero': {
      resumo: 'Monge agostiniano, dividiu a cristandade ocidental e criou o alemão escrito moderno ao traduzir a Bíblia.',
      bio: [
        'Martin Luther nasceu em Eisleben, na Saxônia, em 10 de novembro de 1483, filho de um minerador. Estudava direito por vontade do pai quando, segundo o relato tradicional, foi surpreendido por uma tempestade e prometeu tornar-se monge se sobrevivesse. Entrou para a ordem agostiniana em 1505 e doutorou-se em teologia.',
        'Como professor em Wittenberg, chegou pelo estudo de Paulo à convicção de que a salvação vem pela fé, e não por obras ou méritos acumuláveis. Em 1517 divulgou as 95 Teses contra a venda de indulgências, escritas em latim para debate acadêmico; a tradução para o alemão e a impressão rápida as tornaram públicas e explosivas.',
        'Recusou-se a se retratar diante da Dieta de Worms, em 1521, e foi excomungado e declarado fora da lei. Protegido pelo príncipe eleitor da Saxônia, escondeu-se no castelo de Wartburg, onde traduziu o Novo Testamento para o alemão em cerca de onze semanas.',
        'Casou-se em 1525 com Katharina von Bora, ex-freira, estabelecendo o modelo do clero protestante casado. Apoiou os príncipes na repressão violenta à revolta dos camponeses, posição que lhe é cobrada até hoje, e escreveu no fim da vida textos de violento antissemitismo, depois instrumentalizados pelo nazismo. Morreu em Eisleben em 18 de fevereiro de 1546.'
      ],
      contexto:
        'A Reforma iniciada por Lutero dividiu a cristandade ocidental e reorganizou a política, a cultura e a economia europeias. Sua tradução da Bíblia padronizou o alemão escrito e é apontada como a base da língua literária alemã. Sua trajetória inclui, no mesmo indivíduo, a defesa da leitura direta das Escrituras por qualquer fiel e textos de ódio que a historiografia protestante contemporânea reconhece e condena.',
      contribuicoes: ['Divulgou as 95 Teses em 1517, marco inicial da Reforma Protestante.', 'Traduziu a Bíblia para o alemão, padronizando a língua escrita.', 'Formulou a doutrina da justificação pela fé e do sacerdócio universal dos fiéis.', 'Estabeleceu o modelo do clero casado ao se unir a Katharina von Bora.', 'Escreveu hinos e catecismos que estruturaram a prática religiosa protestante.'],
      cronologia: [
        [1483, 'Nasce em Eisleben, Saxônia, em 10 de novembro.'],
        [1505, 'Entra para a ordem agostiniana.'],
        [1517, 'Divulga as 95 Teses.'],
        [1521, 'Recusa retratar-se na Dieta de Worms; é excomungado.'],
        [1522, 'Publica a tradução do Novo Testamento para o alemão.'],
        [1525, 'Casa-se com Katharina von Bora.'],
        [1534, 'Conclui a tradução da Bíblia completa.'],
        [1546, 'Morre em Eisleben, em 18 de fevereiro.']
      ],
      nota: null
    },
    'Frederick Douglass': {
      resumo: 'Escapou da escravidão, aprendeu a ler clandestinamente e tornou-se a principal voz abolicionista dos Estados Unidos.',
      bio: [
        'Frederick Augustus Washington Bailey nasceu escravizado em Maryland por volta de fevereiro de 1818. Foi separado da mãe ainda bebê, prática corrente para enfraquecer laços familiares. Aos oito anos foi enviado a Baltimore, onde a esposa do senhor começou a lhe ensinar as letras — até que o marido proibiu, dizendo que a leitura tornaria o escravo inútil. Douglass entendeu ali o caminho e passou a aprender clandestinamente, trocando pão por lições com meninos brancos da rua.',
        'Escapou em 1838, aos vinte anos, viajando disfarçado de marinheiro com documentos emprestados. Adotou o sobrenome Douglass e instalou-se em New Bedford, Massachusetts. Começou a falar em encontros abolicionistas e revelou-se orador de força incomum — tanto que parte do público duvidava que tivesse sido escravizado.',
        "Publicou em 1845 a 'Narrativa da Vida de Frederick Douglass', com nomes e lugares reais, o que o expôs à recaptura e o obrigou a partir para a Grã-Bretanha, onde apoiadores compraram sua alforria. De volta, fundou o jornal abolicionista The North Star.",
        'Proferiu em 1852 o discurso em que pergunta o que o Quatro de Julho significa para o escravizado. Recrutou soldados negros para a União na Guerra Civil, defendeu o sufrágio feminino — esteve na convenção de Seneca Falls em 1848 — e ocupou cargos públicos. Morreu em Washington em 20 de fevereiro de 1895.'
      ],
      contexto: 'Douglass foi a prova viva contra o argumento central dos defensores da escravidão: o de que os escravizados seriam incapazes de vida intelectual autônoma. Sua narrativa é o mais lido dos relatos de escravizados americanos, e sua atuação como editor, orador e diplomata estabeleceu o modelo do intelectual público negro nos Estados Unidos.',
      contribuicoes: [
        "Publicou a 'Narrativa da Vida de Frederick Douglass' e duas autobiografias posteriores.",
        "Proferiu 'O que é o 4 de Julho para o escravo?', um dos discursos mais estudados do país.",
        'Fundou e dirigiu o jornal abolicionista The North Star.',
        'Recrutou soldados negros para o Exército da União durante a Guerra Civil.',
        'Apoiou publicamente o sufrágio feminino desde a convenção de Seneca Falls, em 1848.'
      ],
      cronologia: [
        [1818, 'Nasce escravizado em Maryland, por volta de fevereiro.'],
        [1838, 'Escapa da escravidão disfarçado de marinheiro.'],
        [1845, 'Publica sua narrativa e parte para a Grã-Bretanha.'],
        [1847, 'Funda o jornal The North Star.'],
        [1852, 'Profere o discurso sobre o significado do 4 de Julho.'],
        [1863, 'Recruta soldados negros para a União.'],
        [1895, 'Morre em Washington, em 20 de fevereiro.']
      ],
      nota: null
    },
    'John Maynard Keynes': {
      resumo: 'Refundou a macroeconomia durante a Grande Depressão e desenhou a arquitetura financeira do pós-guerra.',
      bio: [
        'John Maynard Keynes nasceu em Cambridge, Inglaterra, em 5 de junho de 1883, filho de um economista e de uma reformadora social que viria a ser prefeita da cidade. Estudou em Eton e em Cambridge, onde integrou o círculo intelectual que se tornaria o grupo de Bloomsbury, ao lado de Virginia Woolf e Lytton Strachey.',
        "Trabalhou no Tesouro britânico e participou das negociações do Tratado de Versalhes, em 1919. Deixou a delegação em protesto contra as reparações impostas à Alemanha e escreveu 'As Consequências Econômicas da Paz', que previa o desastre político e econômico que se seguiria — previsão amplamente confirmada.",
        "Publicou em 1936 a 'Teoria Geral do Emprego, do Juro e da Moeda', argumentando que uma economia pode permanecer em equilíbrio com desemprego alto porque a demanda agregada é insuficiente, e defendendo a intervenção do Estado para sustentá-la. O livro refundou a macroeconomia e deu base às políticas de pleno emprego do pós-guerra.",
        'Liderou a delegação britânica na conferência de Bretton Woods, em 1944, que criou o Fundo Monetário Internacional e o Banco Mundial. Sua proposta de uma moeda internacional de compensação foi derrotada pela posição americana. Morreu em Sussex em 21 de abril de 1946.'
      ],
      contexto:
        'Keynes escreveu contra a ortodoxia de seus próprios mestres, que sustentava que o mercado retornaria sozinho ao pleno emprego. A Grande Depressão, com uma década de desemprego em massa, era a refutação empírica dessa tese. Suas ideias dominaram a política econômica ocidental até os anos 1970, foram deslocadas pelo monetarismo e voltaram ao centro do debate em toda crise desde então.',
      contribuicoes: [
        "Publicou a 'Teoria Geral do Emprego, do Juro e da Moeda', em 1936.",
        "Escreveu 'As Consequências Econômicas da Paz', crítica ao Tratado de Versalhes.",
        'Liderou a delegação britânica em Bretton Woods, que criou o FMI e o Banco Mundial.',
        'Formulou o conceito de demanda agregada e o multiplicador dos gastos.',
        'Foi decisivo na criação do conselho de artes britânico e no financiamento público da cultura.'
      ],
      cronologia: [
        [1883, 'Nasce em Cambridge, Inglaterra, em 5 de junho.'],
        [1919, 'Deixa a delegação em Versalhes e publica sua crítica ao tratado.'],
        [1930, "Publica o 'Tratado sobre a Moeda'."],
        [1936, "Publica a 'Teoria Geral'."],
        [1944, 'Lidera a delegação britânica em Bretton Woods.'],
        [1946, 'Morre em Sussex, em 21 de abril.']
      ],
      nota: null
    },
    'Santos Dumont': {
      resumo: 'Realizou o primeiro voo homologado de um mais pesado que o ar, recusou patentear seus inventos e morreu perturbado pelo uso militar da aviação.',
      bio: [
        'Alberto Santos Dumont nasceu em Palmira, hoje Santos Dumont, Minas Gerais, em 20 de julho de 1873, filho de um engenheiro cafeicultor. Cresceu em fazenda mecanizada, onde teve contato precoce com máquinas. Mudou-se para Paris aos dezoito anos, após a morte do pai, com renda que lhe permitia dedicar-se inteiramente à aeronáutica.',
        'Construiu balões e depois dirigíveis. Em 1901 ganhou o prêmio Deutsch ao contornar a Torre Eiffel em seu dirigível número 6 e retornar ao ponto de partida no tempo estipulado, feito que o tornou celebridade europeia. Dividiu o valor do prêmio entre seus mecânicos e os pobres de Paris.',
        'Em 23 de outubro de 1906, no campo de Bagatelle, o 14-Bis decolou por meios próprios, voou e pousou diante de comissão oficial. Em 12 de novembro superou duzentos metros, voo homologado pelo Aeroclube da França — o primeiro de um mais pesado que o ar reconhecido oficialmente, sem catapulta, trilhos ou vento externo.',
        'Projetou em seguida o Demoiselle, monoplano leve cujos planos publicou gratuitamente, autorizando qualquer pessoa a construí-lo. Adoeceu de esclerose múltipla e afastou-se da aviação. O uso militar de aeronaves o perturbou profundamente; chegou a apelar à Sociedade das Nações pela proibição. Morreu em Guarujá, São Paulo, em 23 de julho de 1932.'
      ],
      contexto:
        'A disputa sobre a primazia do voo — Santos Dumont ou os irmãos Wright — depende do critério adotado. Os Wright voaram antes, em 1903, mas com catapulta, trilhos e sem testemunho oficial independente por anos. O voo de 1906 foi público, homologado e feito por meios inteiramente próprios. A recusa em patentear, por sua vez, é fato incontroverso e define sua posição diante da própria invenção.',
      contribuicoes: [
        'Realizou com o 14-Bis o primeiro voo homologado de um mais pesado que o ar, em 1906.',
        'Contornou a Torre Eiffel em dirigível em 1901, ganhando o prêmio Deutsch.',
        'Projetou o Demoiselle, primeiro avião de produção em série da história.',
        'Publicou gratuitamente os planos de seus aparelhos, recusando-se a patenteá-los.',
        'Encomendou a Louis Cartier o primeiro relógio de pulso masculino, para usar em voo.'
      ],
      cronologia: [
        [1873, 'Nasce em Palmira, Minas Gerais, em 20 de julho.'],
        [1891, 'Muda-se para Paris.'],
        [1901, 'Contorna a Torre Eiffel e ganha o prêmio Deutsch.'],
        [1906, 'Voa com o 14-Bis em Bagatelle, em 23 de outubro e 12 de novembro.'],
        [1909, 'Publica gratuitamente os planos do Demoiselle.'],
        [1932, 'Morre em Guarujá, São Paulo, em 23 de julho.']
      ],
      nota: null
    },
    'Tarsila do Amaral': {
      resumo: 'Pintou o quadro que deu origem ao Movimento Antropofágico e criou a imagem visual do modernismo brasileiro.',
      bio: [
        'Tarsila do Amaral nasceu em Capivari, São Paulo, em 1º de setembro de 1886, em família de fazendeiros de café. Estudou em Barcelona e depois em Paris, onde teve aulas com André Lhote, Albert Gleizes e Fernand Léger, três dos principais nomes ligados ao cubismo.',
        "Não participou da Semana de Arte Moderna de 1922 porque estava em Paris, mas integrou-se ao Grupo dos Cinco ao voltar, com Anita Malfatti, Mário de Andrade, Oswald de Andrade e Menotti del Picchia. Em 1923 pintou 'A Negra', obra que Léger mostrava a seus alunos como exemplo.",
        "A viagem a Minas Gerais em 1924, com a comitiva modernista e o poeta Blaise Cendrars, foi determinante: a cor das casas coloniais e a paisagem brasileira entraram em sua paleta e deram origem à fase Pau-Brasil. Em 1928 pintou o 'Abaporu' como presente de aniversário a Oswald de Andrade; a reação dele ao quadro levou ao 'Manifesto Antropófago'.",
        "A crise de 1929 arruinou a família. Tarsila viajou à União Soviética em 1931 e passou a uma fase social, com telas como 'Operários' e 'Segunda Classe'. Trabalhou como restauradora e colunista. Morreu em São Paulo em 17 de janeiro de 1973."
      ],
      contexto: 'Tarsila resolveu um problema que o modernismo brasileiro colocava e não sabia responder em imagem: como usar a linguagem das vanguardas europeias sem apenas importá-la. Sua solução — aplicar o vocabulário formal do cubismo a cores, corpos e paisagens brasileiros — deu ao movimento sua identidade visual e é a base de sua permanência.',
      contribuicoes: ["Pintou o 'Abaporu', origem direta do Manifesto Antropófago de 1928.", "Pintou 'A Negra', 'Operários' e 'Antropofagia'.", 'Integrou o Grupo dos Cinco, núcleo do modernismo paulista.', 'Criou a fase Pau-Brasil, com a paleta das casas coloniais mineiras.', 'É a artista brasileira mais reconhecida internacionalmente do século XX.'],
      cronologia: [
        [1886, 'Nasce em Capivari, São Paulo, em 1º de setembro.'],
        [1923, "Pinta 'A Negra', em Paris."],
        [1924, 'Viaja a Minas Gerais com a comitiva modernista; inicia a fase Pau-Brasil.'],
        [1928, "Pinta o 'Abaporu'."],
        [1931, 'Viaja à União Soviética.'],
        [1933, "Pinta 'Operários'."],
        [1973, 'Morre em São Paulo, em 17 de janeiro.']
      ],
      nota: null
    },
    'Candido Portinari': {
      resumo: 'Filho de imigrantes italianos numa fazenda de café, pintou os painéis da ONU e morreu intoxicado pelas próprias tintas.',
      bio: [
        'Candido Torquato Portinari nasceu em Brodowski, São Paulo, em 29 de dezembro de 1903, filho de imigrantes italianos que trabalhavam em fazenda de café. Cresceu entre colonos e trabalhadores rurais, experiência que atravessa toda a sua obra. Foi para o Rio de Janeiro aos quinze anos estudar na Escola Nacional de Belas Artes.',
        "Ganhou em 1928 o prêmio de viagem ao exterior e passou dois anos na Europa. Voltou decidido a pintar o Brasil e as pessoas que conhecera na infância. 'O Mestiço', de 1934, e 'Café', de 1935, premiado nos Estados Unidos, firmaram sua reputação.",
        "Nos anos 1940 produziu suas obras mais duras: 'Os Retirantes', 'Criança Morta' e 'Enterro na Rede', em cinza e ocre, sobre a migração nordestina. Pintou painéis para o Ministério da Educação, para a Biblioteca do Congresso americano e os murais de São Francisco de Assis na Pampulha, em Belo Horizonte, com Oscar Niemeyer.",
        "Entre 1952 e 1956 executou 'Guerra e Paz', dois painéis de mais de dez metros doados pelo Brasil à sede da ONU em Nova York. Foi impedido de entrar nos Estados Unidos para a inauguração por sua filiação ao Partido Comunista. Trabalhou contra recomendação médica: a intoxicação por chumbo das tintas o matou no Rio de Janeiro em 6 de fevereiro de 1962."
      ],
      contexto: 'Portinari fez da pintura brasileira um instrumento de registro social sem abandonar a ambição formal. A dimensão de sua obra pública — painéis em ministérios, igrejas e na ONU — é rara no país. Os murais de São Francisco na Pampulha foram recusados pela Igreja por anos, que considerou as imagens inadequadas, e a capela só foi consagrada em 1959.',
      contribuicoes: ["Pintou 'Os Retirantes', 'Café' e a série sobre a migração nordestina.", "Executou os painéis 'Guerra e Paz', doados pelo Brasil à sede da ONU.", 'Pintou os murais da igreja de São Francisco de Assis, na Pampulha.', 'Produziu painéis para o Ministério da Educação e para a Biblioteca do Congresso americano.', 'Deixou cerca de cinco mil obras catalogadas.'],
      cronologia: [
        [1903, 'Nasce em Brodowski, São Paulo, em 29 de dezembro.'],
        [1928, 'Ganha o prêmio de viagem ao exterior.'],
        [1935, "'Café' é premiado nos Estados Unidos."],
        [1944, "Pinta 'Os Retirantes'."],
        [1945, 'Conclui os murais da Pampulha.'],
        [1956, "Conclui 'Guerra e Paz', para a ONU."],
        [1962, 'Morre no Rio de Janeiro, em 6 de fevereiro.']
      ],
      nota: null
    },
    'Nise da Silveira': {
      resumo: 'Recusou eletrochoque e lobotomia, deu tinta e pincel a pacientes psiquiátricos e transformou a psiquiatria brasileira.',
      bio: [
        'Nise Magalhães da Silveira nasceu em Maceió, Alagoas, em 15 de fevereiro de 1905. Formou-se em medicina em 1926, única mulher em uma turma de 157 estudantes. Foi presa em 1936, durante a repressão do Estado Novo, ao ser denunciada por posse de livros comunistas, e passou mais de um ano encarcerada — na prisão conviveu com Graciliano Ramos e Olga Benário.',
        'Reintegrada ao serviço público em 1944, foi designada ao Hospital Psiquiátrico Pedro II, no Engenho de Dentro, no Rio de Janeiro. Recusou-se a aplicar eletroconvulsoterapia, insulinoterapia e lobotomia, então tratamentos padrão. Como consequência, foi afastada da clínica e enviada a um setor considerado sem importância, a terapia ocupacional.',
        'Ali criou, em 1946, o ateliê de pintura e modelagem. Propunha atividade expressiva e afeto no lugar de procedimentos invasivos, e incluiu gatos no tratamento, o que a academia ridicularizou. Os trabalhos produzidos revelaram-se de enorme força plástica e simbólica.',
        'Fundou em 1952 o Museu de Imagens do Inconsciente, hoje com dezenas de milhares de obras catalogadas. Correspondeu-se com Carl Gustav Jung, que organizou em 1957 uma exposição do acervo em Zurique. Artistas como Arthur Bispo do Rosário, Fernando Diniz e Adelina Gomes foram reconhecidos a partir desse trabalho. Morreu no Rio de Janeiro em 30 de outubro de 1999.'
      ],
      contexto: 'Nise atuou contra o consenso psiquiátrico de seu tempo e pagou por isso com isolamento profissional. Seu trabalho é uma das bases da reforma psiquiátrica e da luta antimanicomial brasileiras, e mudou a relação entre arte e loucura no país: o que era tratado como sintoma passou a ser reconhecido como obra.',
      contribuicoes: [
        'Criou em 1946 o ateliê de pintura e modelagem no Engenho de Dentro.',
        'Fundou o Museu de Imagens do Inconsciente, com dezenas de milhares de obras.',
        'Recusou eletrochoque, insulinoterapia e lobotomia em sua prática clínica.',
        "Publicou 'Imagens do Inconsciente' e introduziu a psicologia junguiana no Brasil.",
        'Reconheceu e divulgou a obra de Arthur Bispo do Rosário e Fernando Diniz.'
      ],
      cronologia: [
        [1905, 'Nasce em Maceió, Alagoas, em 15 de fevereiro.'],
        [1926, 'Forma-se em medicina, única mulher da turma.'],
        [1936, 'É presa durante a repressão do Estado Novo.'],
        [1946, 'Cria o ateliê de pintura no Engenho de Dentro.'],
        [1952, 'Funda o Museu de Imagens do Inconsciente.'],
        [1957, 'Jung organiza exposição do acervo em Zurique.'],
        [1999, 'Morre no Rio de Janeiro, em 30 de outubro.']
      ],
      nota: null
    },
    'Lima Barreto': {
      resumo: 'Negro, pobre e funcionário público, escreveu a crítica mais lúcida da Primeira República e foi ignorado pela crítica de seu tempo.',
      bio: [
        'Afonso Henriques de Lima Barreto nasceu no Rio de Janeiro em 13 de maio de 1881 — sete anos antes da abolição, data que coincidiria com a Lei Áurea. Filho de um tipógrafo e de uma professora, neto de escravizados, teve o estudo financiado por um padrinho, o visconde de Ouro Preto.',
        'Cursou engenharia na Escola Politécnica, mas precisou abandonar o curso quando o pai adoeceu mentalmente e ele passou a sustentar a família. Tornou-se amanuense do Ministério da Guerra, função burocrática que exerceria pelo resto da vida, escrevendo nas horas livres e em jornais.',
        "Publicou 'Recordações do Escrivão Isaías Caminha' em 1909, sobre racismo e imprensa, com personagens reconhecíveis do meio jornalístico carioca — o que lhe rendeu inimizades duradouras. Em 1911 saiu 'Triste Fim de Policarpo Quaresma', sua obra maior, sobre um patriota ingênuo destruído pelo país que quis servir.",
        "Sofria de alcoolismo e foi internado duas vezes no Hospital Nacional de Alienados, experiência registrada no 'Diário do Hospício'. Candidatou-se três vezes à Academia Brasileira de Letras e foi recusado. Morreu no Rio de Janeiro em 1º de novembro de 1922, aos 41 anos, no mesmo ano da Semana de Arte Moderna, que ele não acompanhou."
      ],
      contexto:
        'Lima Barreto foi desprezado em vida pela crítica oficial, que valorizava o estilo ornamental de que ele deliberadamente se afastava, e pelo meio literário, que não o aceitava socialmente. A reavaliação começou nos anos 1950 e se consolidou: hoje é lido como um dos autores mais importantes da Primeira República e o primeiro a tratar o racismo brasileiro como obstáculo objetivo, e não como tema de fundo.',
      contribuicoes: [
        "Escreveu 'Triste Fim de Policarpo Quaresma' e 'Recordações do Escrivão Isaías Caminha'.",
        "Deixou o 'Diário do Hospício', raro testemunho em primeira pessoa sobre o manicômio brasileiro.",
        'Foi pioneiro no tratamento literário direto do racismo no Brasil.',
        'Produziu extensa obra de crônica e sátira sobre a vida carioca da Primeira República.',
        'Foi o autor homenageado da Festa Literária Internacional de Paraty em 2017.'
      ],
      cronologia: [
        [1881, 'Nasce no Rio de Janeiro, em 13 de maio.'],
        [1903, 'Torna-se amanuense do Ministério da Guerra.'],
        [1909, "Publica 'Recordações do Escrivão Isaías Caminha'."],
        [1911, "Publica 'Triste Fim de Policarpo Quaresma' em folhetim."],
        [1919, 'É internado pela segunda vez no Hospital Nacional de Alienados.'],
        [1922, 'Morre no Rio de Janeiro, em 1º de novembro.']
      ],
      nota: null
    },
    'Zumbi dos Palmares': {
      resumo: 'Liderou o maior quilombo das Américas e recusou a paz que não libertava a todos.',
      bio: [
        'Zumbi nasceu por volta de 1655, provavelmente já no Quilombo dos Palmares, na serra da Barriga, atual Alagoas. Segundo relatos coloniais, foi capturado ainda criança e entregue a um padre, que o batizou como Francisco e lhe ensinou latim e português. Aos quinze anos fugiu e retornou a Palmares.',
        'Palmares existia desde o início do século XVII e chegou a reunir dezenas de milhares de pessoas em vários povoados, com agricultura, artesanato, organização política própria e defesa militar. Resistiu a dezenas de expedições portuguesas e holandesas ao longo de quase cem anos.',
        'Em 1678 o governador de Pernambuco propôs a Ganga Zumba, então líder, um acordo de paz que concedia liberdade aos nascidos no quilombo, mas mantinha a devolução dos fugitivos. Zumbi recusou o acordo e assumiu a liderança, sustentando que não haveria paz enquanto houvesse escravizados.',
        'Resistiu por mais dezessete anos. O bandeirante Domingos Jorge Velho foi contratado para destruir o quilombo e tomou a Cerca do Macaco em 1694. Zumbi escapou ferido e foi morto em 20 de novembro de 1695, após ser traído. Sua cabeça foi exposta em praça pública no Recife para desmentir a crença em sua imortalidade.'
      ],
      contexto: 'Palmares foi a maior e mais duradoura experiência de resistência à escravidão nas Américas, e sua existência por quase um século ao lado do sistema colonial é a prova histórica de que a escravidão nunca foi aceita passivamente. A data da morte de Zumbi é o Dia da Consciência Negra, feriado nacional no Brasil desde 2023.',
      contribuicoes: ['Liderou o Quilombo dos Palmares em seus últimos dezessete anos de resistência.', 'Recusou o acordo de paz de 1678 por não libertar todos os escravizados.', 'Palmares foi a maior comunidade de pessoas libertas das Américas.', 'Tornou-se referência central da história e da identidade negra brasileira.', 'A data de sua morte é o Dia da Consciência Negra, feriado nacional.'],
      cronologia: [
        [1655, 'Nasce, por volta deste ano, provavelmente em Palmares.'],
        [1670, 'Foge e retorna ao quilombo, segundo os relatos.'],
        [1678, 'Recusa o acordo de paz e assume a liderança.'],
        [1694, 'A Cerca do Macaco é tomada por Domingos Jorge Velho.'],
        [1695, 'É morto em 20 de novembro.']
      ],
      nota: null
    },
    'Harriet Tubman': {
      resumo: 'Escapou da escravidão e voltou treze vezes ao Sul para conduzir outras pessoas à liberdade.',
      bio: [
        'Araminta Ross nasceu escravizada em Maryland por volta de 1822. Na adolescência, ao se interpor entre um capataz e outro escravizado, recebeu na cabeça um peso de ferro atirado pelo capataz. O traumatismo lhe causou crises de sonolência súbita e dores pelo resto da vida, além de visões que ela interpretava como orientação divina.',
        'Escapou sozinha em 1849, seguindo a pé e à noite até a Pensilvânia. Em vez de permanecer em segurança, voltou ao Sul cerca de treze vezes ao longo de uma década para conduzir familiares e outras pessoas em fuga pela Ferrovia Subterrânea, rede clandestina de rotas e esconderijos.',
        'Após a Lei do Escravo Fugitivo, de 1850, que tornou o Norte inseguro, passou a levar os fugitivos até o Canadá. Carregava uma arma e afirmava nunca ter perdido um passageiro. Sua cabeça foi posta a prêmio por fazendeiros do Sul.',
        'Durante a Guerra Civil serviu ao Exército da União como enfermeira, cozinheira, batedora e espiã. Em 1863 chefiou a incursão do rio Combahee, que libertou mais de setecentas pessoas — tornando-se a primeira mulher a comandar uma operação militar armada na história americana. Lutou depois pelo sufrágio feminino. Morreu em Auburn, Nova York, em 10 de março de 1913.'
      ],
      contexto: 'Tubman é conhecida sobretudo pelas fugas que conduziu, mas sua atuação militar é igualmente documentada e ainda pouco lembrada. Passou anos pleiteando pensão pelo serviço prestado ao exército, que lhe foi concedida apenas parcialmente e tardiamente. Em 2016 foi anunciada sua imagem para a nota de vinte dólares americanos, decisão sucessivamente adiada.',
      contribuicoes: [
        'Conduziu cerca de treze incursões ao Sul, libertando dezenas de pessoas escravizadas.',
        'Operou como uma das principais condutoras da Ferrovia Subterrânea.',
        'Chefiou a incursão do rio Combahee, em 1863, que libertou mais de setecentas pessoas.',
        'Foi a primeira mulher a comandar uma operação militar armada nos Estados Unidos.',
        'Militou pelo sufrágio feminino nas últimas décadas de vida.'
      ],
      cronologia: [
        [1822, 'Nasce escravizada em Maryland, por volta deste ano.'],
        [1849, 'Escapa sozinha para a Pensilvânia.'],
        [1850, 'A Lei do Escravo Fugitivo a obriga a estender as rotas até o Canadá.'],
        [1863, 'Chefia a incursão do rio Combahee.'],
        [1913, 'Morre em Auburn, Nova York, em 10 de março.']
      ],
      nota: null
    },
    'Desmond Tutu': {
      resumo: 'Arcebispo anglicano, liderou a oposição religiosa ao apartheid e presidiu a comissão que apurou seus crimes.',
      bio: [
        'Desmond Mpilo Tutu nasceu em Klerksdorp, África do Sul, em 7 de outubro de 1931. Queria ser médico, mas a família não pôde pagar o curso; tornou-se professor. Abandonou o magistério em 1957 em protesto contra a Lei de Educação Bantu, que impunha ensino deliberadamente inferior à população negra, e ingressou no seminário anglicano.',
        'Ordenado em 1960, estudou teologia em Londres e voltou à África do Sul. Tornou-se em 1978 secretário-geral do Conselho Sul-Africano de Igrejas, posição de onde conduziu a oposição religiosa ao apartheid. Defendeu sanções econômicas internacionais contra o regime e a resistência não violenta, e opôs-se publicamente também aos linchamentos praticados dentro do próprio movimento negro.',
        'Recebeu o Nobel da Paz em 1984 e tornou-se em 1986 o primeiro arcebispo negro da Cidade do Cabo. Foi ele quem cunhou a expressão nação arco-íris para descrever a África do Sul pós-apartheid.',
        'Nelson Mandela o escolheu em 1995 para presidir a Comissão da Verdade e Reconciliação, que ofereceu anistia a quem confessasse integralmente crimes do regime em audiências públicas. Tutu chorou publicamente durante depoimentos. Depois, criticou abertamente os governos que se seguiram, inclusive o de seu próprio partido. Morreu na Cidade do Cabo em 26 de dezembro de 2021.'
      ],
      contexto: 'A Comissão da Verdade e Reconciliação sul-africana tornou-se o modelo mundial de justiça de transição — e também seu principal objeto de crítica, por trocar punição por esclarecimento. Tutu defendia essa escolha com o conceito africano de ubuntu: a pessoa só é pessoa através de outras pessoas, e uma sociedade não se reconstrói destruindo parte de si.',
      contribuicoes: ['Recebeu o Nobel da Paz em 1984 por sua oposição não violenta ao apartheid.', 'Presidiu a Comissão da Verdade e Reconciliação da África do Sul.', 'Foi o primeiro arcebispo negro da Cidade do Cabo.', 'Cunhou a expressão nação arco-íris.', "Escreveu 'Não Há Futuro sem Perdão' e, com o Dalai Lama, 'O Livro da Alegria'."],
      cronologia: [
        [1931, 'Nasce em Klerksdorp, África do Sul, em 7 de outubro.'],
        [1957, 'Deixa o magistério em protesto contra a Lei de Educação Bantu.'],
        [1960, 'É ordenado sacerdote anglicano.'],
        [1984, 'Recebe o Nobel da Paz.'],
        [1986, 'Torna-se arcebispo da Cidade do Cabo.'],
        [1995, 'Preside a Comissão da Verdade e Reconciliação.'],
        [2021, 'Morre na Cidade do Cabo, em 26 de dezembro.']
      ],
      nota: null
    },
    'Wangari Maathai': {
      resumo: 'Bióloga queniana, plantou dezenas de milhões de árvores organizando mulheres rurais e foi a primeira africana a receber o Nobel da Paz.',
      bio: [
        'Wangari Muta Maathai nasceu em Ihithe, no Quênia, em 1º de abril de 1940, em família de agricultores kikuyu. Estudou nos Estados Unidos com bolsa de um programa que levava estudantes africanos ao país, obteve mestrado e voltou ao Quênia, onde se tornou a primeira mulher da África Oriental e Central a obter um doutorado e a primeira a se tornar professora titular no país.',
        'Ao trabalhar com mulheres rurais, constatou que a escassez de lenha, de água e de alimento tinha a mesma raiz: o desmatamento acelerado. Em 1977 criou o Movimento Cinturão Verde, que pagava às mulheres para plantar e cuidar de mudas, unindo conservação ambiental, renda e organização comunitária.',
        'O movimento entrou em conflito direto com o regime de Daniel arap Moi ao se opor à ocupação de áreas públicas por empreendimentos ligados ao governo. Maathai foi presa várias vezes, agredida e ameaçada de morte. Em 1989 impediu a construção de um arranha-céu no Uhuru Park, em Nairóbi, campanha que lhe custou nova prisão.',
        "Elegeu-se deputada em 2002 e foi vice-ministra do Meio Ambiente. Recebeu o Nobel da Paz em 2004, o primeiro concedido por trabalho ambiental. Publicou a autobiografia 'Unbowed' em 2006. Morreu em Nairóbi em 25 de setembro de 2011."
      ],
      contexto: 'Maathai foi a primeira a demonstrar na prática, em larga escala, a ligação entre degradação ambiental, pobreza e autoritarismo. O comitê do Nobel justificou a premiação sustentando que paz, gestão sustentável de recursos e democracia são inseparáveis — formulação que deve diretamente ao trabalho dela.',
      contribuicoes: ['Fundou o Movimento Cinturão Verde, que plantou dezenas de milhões de árvores.', 'Foi a primeira mulher da África Oriental e Central a obter um doutorado.', 'Recebeu o Nobel da Paz em 2004, a primeira africana a ser laureada.', 'Impediu a construção de um arranha-céu no Uhuru Park, em Nairóbi.', "Publicou 'Unbowed' e 'Replenishing the Earth'."],
      cronologia: [
        [1940, 'Nasce em Ihithe, Quênia, em 1º de abril.'],
        [1971, 'Torna-se a primeira mulher da região a obter um doutorado.'],
        [1977, 'Funda o Movimento Cinturão Verde.'],
        [1989, 'Impede a construção no Uhuru Park.'],
        [2002, 'Elege-se deputada.'],
        [2004, 'Recebe o Nobel da Paz.'],
        [2011, 'Morre em Nairóbi, em 25 de setembro.']
      ],
      nota: null
    },
    'Marielle Franco': {
      resumo: 'Socióloga e vereadora da Maré, foi assassinada em 2018 em um crime que mobilizou o país.',
      bio: [
        'Marielle Francisco da Silva nasceu no Rio de Janeiro em 27 de julho de 1979 e cresceu no Complexo da Maré. Foi mãe aos dezenove anos e trabalhou como professora de reforço e em creche comunitária para sustentar a filha. Entrou na universidade por meio de bolsa em curso pré-vestibular comunitário.',
        'A morte de uma amiga por bala perdida em confronto na favela, em 2000, a aproximou do trabalho com direitos humanos. Formou-se em ciências sociais pela PUC-Rio e concluiu mestrado em administração pública pela Universidade Federal Fluminense, com a dissertação sobre as Unidades de Polícia Pacificadora.',
        'Trabalhou na Comissão de Defesa dos Direitos Humanos da Assembleia Legislativa do Rio. Elegeu-se vereadora em 2016 com a quinta maior votação da cidade, mais de quarenta e seis mil votos. No mandato, atuou em pautas de direitos das mulheres, da população negra, LGBT e de moradores de favela, e integrou a comissão que fiscalizava a intervenção federal na segurança pública do estado.',
        'Foi assassinada a tiros em 14 de março de 2018, junto com o motorista Anderson Gomes, quando voltava de um evento no centro do Rio. O crime provocou manifestações no Brasil e no exterior. Os executores foram condenados em 2024, e os acusados de mandar matar foram denunciados no mesmo período.'
      ],
      contexto: 'O assassinato de Marielle Franco tornou-se um marco na discussão brasileira sobre violência política, milícias e segurança pública. Sua trajetória — da Maré à Câmara Municipal — e a repercussão internacional do caso projetaram a pauta de mulheres negras e de moradores de favela na política institucional brasileira de forma sem precedentes.',
      contribuicoes: [
        'Elegeu-se vereadora do Rio de Janeiro com a quinta maior votação da cidade, em 2016.',
        'Escreveu dissertação de mestrado sobre as Unidades de Polícia Pacificadora.',
        'Integrou a comissão de fiscalização da intervenção federal na segurança do Rio.',
        'Atuou por mais de uma década em defesa de direitos humanos no estado.',
        'Seu nome batiza leis, instituto e programas de formação política no Brasil e no exterior.'
      ],
      cronologia: [
        [1979, 'Nasce no Rio de Janeiro, em 27 de julho.'],
        [2002, 'Ingressa em ciências sociais na PUC-Rio.'],
        [2014, 'Defende a dissertação de mestrado sobre as UPPs.'],
        [2016, 'Elege-se vereadora do Rio de Janeiro.'],
        [2018, 'É assassinada em 14 de março, junto com Anderson Gomes.'],
        [2024, 'Os executores do crime são condenados.']
      ],
      nota: null
    }
  };
  function aplicar() {
    var n = 0,
      ja = [];
    for (var k in P) {
      if (!AUTOR_INDEX.has(k)) {
        ja.push('[fora] ' + k);
        continue;
      }
      if (PERFIS_PROFUNDOS[k]) {
        ja.push('[existe] ' + k);
        continue;
      }
      PERFIS_PROFUNDOS[k] = P[k];
      n++;
    }
    if (ja.length) console.warn('Fase 57d · ignorados:', ja.join(' | '));
    console.log('MeMotiva · Fase 57d: +' + n + ' panoramas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 57e — panoramas (lote 5: pessoas) ===== */
(function () {
  var P = {
    'Franz Kafka': {
      resumo: 'Trabalhou a vida inteira em uma seguradora, pediu que queimassem seus manuscritos e deu nome ao pesadelo burocrático moderno.',
      bio: [
        "Franz Kafka nasceu em Praga em 3 de julho de 1883, em família judaica de língua alemã. A relação com o pai, comerciante autoritário, marcou-o profundamente e está no centro da longa 'Carta ao Pai', que escreveu em 1919 e nunca entregou. Formou-se em direito e passou a trabalhar em um instituto de seguros contra acidentes de trabalho.",
        "Era funcionário competente e valorizado, o que o deixava exausto: escrevia à noite, em jornadas curtas e intensas, e reclamava constantemente da falta de tempo. Publicou pouquíssimo em vida — alguns contos e novelas, entre eles 'A Metamorfose', de 1915, e 'Na Colônia Penal'.",
        "Escreveu três romances, todos inacabados: 'O Desaparecido', 'O Processo' e 'O Castelo'. Neles, personagens enfrentam autoridades cujas regras nunca são explicadas e cujo centro é inalcançável — estrutura que deu origem ao adjetivo kafkiano.",
        'Contraiu tuberculose em 1917 e passou os últimos anos entre sanatórios. Pediu ao amigo Max Brod que queimasse todos os seus manuscritos. Brod não cumpriu o pedido e publicou os romances entre 1925 e 1927. Kafka morreu em um sanatório perto de Viena em 3 de junho de 1924, aos 40 anos. Suas três irmãs morreriam em campos de extermínio nazistas.'
      ],
      contexto: 'Kafka escreveu numa Praga sob o Império Austro-Húngaro, cercado da burocracia imperial que conhecia por dentro como funcionário. Sua obra antecipa com precisão inquietante os mecanismos do século XX: a autoridade sem rosto, o processo sem acusação, a culpa sem crime. A decisão de Brod de desobedecer ao pedido do amigo é um dos episódios mais discutidos da história literária.',
      contribuicoes: [
        "Escreveu 'A Metamorfose', 'O Processo' e 'O Castelo'.",
        'Seu nome deu origem ao adjetivo kafkiano, usado em dezenas de idiomas.',
        "Deixou a 'Carta ao Pai', um dos documentos autobiográficos mais estudados da literatura.",
        'Antecipou em ficção os mecanismos da burocracia e do poder impessoal do século XX.',
        'Seus diários e cartas são referência em estudos sobre escrita e trabalho.'
      ],
      cronologia: [
        [1883, 'Nasce em Praga, em 3 de julho.'],
        [1908, 'Começa a trabalhar no instituto de seguros contra acidentes.'],
        [1915, "Publica 'A Metamorfose'."],
        [1917, 'Contrai tuberculose.'],
        [1919, "Escreve a 'Carta ao Pai'."],
        [1924, 'Morre perto de Viena, em 3 de junho.'],
        [1925, "Max Brod publica 'O Processo', contra o pedido do autor."]
      ],
      nota: null
    },
    'Gabriel García Márquez': {
      resumo: 'Jornalista colombiano, escreveu o romance que definiu o realismo mágico e vendeu dezenas de milhões de exemplares.',
      bio: [
        'Gabriel José de la Concordia García Márquez nasceu em Aracataca, na Colômbia, em 6 de março de 1927. Foi criado pelos avós maternos até os oito anos; a avó contava histórias sobrenaturais com absoluta naturalidade, tom que ele diria ter buscado a vida inteira em sua prosa. Aracataca é o modelo de Macondo.',
        'Abandonou o curso de direito e tornou-se jornalista. Trabalhou em Cartagena, Barranquilla e Bogotá, e como correspondente na Europa. Sua reportagem sobre um naufrágio, que revelou contrabando em navio da marinha colombiana, lhe rendeu problemas com o governo.',
        "Escreveu 'Cem Anos de Solidão' em dezoito meses, em Cidade do México, vendendo bens domésticos para se sustentar e dizendo à mulher que ou dava certo ou estavam arruinados. O livro saiu em 1967 e vendeu a primeira edição em uma semana; tornou-se o romance latino-americano mais lido do século.",
        "Publicou depois 'O Outono do Patriarca', 'Crônica de uma Morte Anunciada' e 'O Amor nos Tempos do Cólera'. Recebeu o Nobel de Literatura em 1982. Manteve amizade com Fidel Castro, que lhe custou críticas duradouras, e atuou como mediador informal em negociações de paz na Colômbia. Morreu em Cidade do México em 17 de abril de 2014."
      ],
      contexto: 'García Márquez é a figura central do boom latino-americano, geração que projetou a literatura do continente no mundo. O realismo mágico que ele consolidou não é fantasia: é a narração de acontecimentos extraordinários no mesmo tom com que se narra o cotidiano, procedimento que ele atribuía à forma como sua avó contava histórias.',
      contribuicoes: ["Escreveu 'Cem Anos de Solidão', o romance latino-americano mais lido do século XX.", "Publicou 'O Amor nos Tempos do Cólera' e 'Crônica de uma Morte Anunciada'.", 'Recebeu o Nobel de Literatura em 1982.', 'Consolidou o realismo mágico como forma narrativa de alcance mundial.', 'Fundou a Fundação para o Novo Jornalismo Ibero-Americano, dedicada à formação de repórteres.'],
      cronologia: [
        [1927, 'Nasce em Aracataca, Colômbia, em 6 de março.'],
        [1955, "Publica 'O Enterro do Diabo' e a reportagem sobre o naufrágio."],
        [1967, "Publica 'Cem Anos de Solidão'."],
        [1975, "Publica 'O Outono do Patriarca'."],
        [1981, "Publica 'Crônica de uma Morte Anunciada'."],
        [1982, 'Recebe o Nobel de Literatura.'],
        [1985, "Publica 'O Amor nos Tempos do Cólera'."],
        [2014, 'Morre em Cidade do México, em 17 de abril.']
      ],
      nota: null
    },
    Homero: {
      resumo: 'Nome atribuído aos dois poemas fundadores da literatura ocidental, cuja autoria é discutida há dois mil e quinhentos anos.',
      bio: [
        "Homero é o nome pelo qual a tradição grega designa o autor da 'Ilíada' e da 'Odisseia'. A Antiguidade o situava por volta do século VIII a.C., possivelmente na Jônia, na costa da atual Turquia, e o descrevia como cego e andarilho. Sete cidades disputavam a honra de tê-lo visto nascer.",
        'Não há documentação que permita estabelecer sua existência como indivíduo. A chamada questão homérica, discutida desde a Antiguidade e retomada com força a partir do século XVIII, pergunta se os poemas são obra de um autor, de dois ou de uma longa tradição oral coletiva posteriormente fixada.',
        'A pesquisa de Milman Parry, nos anos 1930, comparou os poemas a cantos orais ainda vivos nos Bálcãs e demonstrou que sua estrutura — epítetos fixos, fórmulas repetidas, versos de encaixe — é característica de composição oral. Isso deslocou a questão: os poemas seriam a fixação escrita de uma tradição de aedos.',
        "Seja qual for a resposta, os dois poemas foram a base da educação grega antiga e o ponto de partida de toda a literatura ocidental. A 'Ilíada' narra alguns dias do décimo ano da guerra de Troia a partir da cólera de Aquiles; a 'Odisseia', os dez anos de retorno de Ulisses a Ítaca."
      ],
      contexto: 'Os poemas homéricos são o texto fundador da tradição literária ocidental: dele derivam o conceito de herói, a estrutura da narrativa de viagem, o tratamento do destino e da mortalidade. Foram decorados, recitados e comentados por séculos antes de serem lidos, e continuam sendo traduzidos e reescritos em todas as gerações.',
      contribuicoes: ["A 'Ilíada' e a 'Odisseia' são os textos fundadores da literatura ocidental.", 'Foram a base da educação grega antiga, decoradas e recitadas por gerações.', 'Estabeleceram a estrutura da epopeia, modelo de Virgílio, Dante, Camões e Milton.', "A 'Odisseia' fixou o modelo da narrativa de viagem e retorno.", 'A questão sobre sua autoria fundou a crítica textual moderna.'],
      cronologia: [
        [-800, 'Data aproximada atribuída pela tradição à composição dos poemas.'],
        [-500, 'Os poemas já são recitados publicamente em Atenas nas Panateneias.'],
        [-250, 'Filólogos de Alexandria estabelecem o texto e a divisão em cantos.'],
        [1930, 'Milman Parry demonstra a origem oral da composição.']
      ],
      nota: 'A existência de Homero como autor individual não é historicamente documentada.'
    },
    'Dante Alighieri': {
      resumo: 'Exilado de Florença sob pena de morte, escreveu em língua vulgar o poema que fundou o italiano literário.',
      bio: [
        'Dante Alighieri nasceu em Florença por volta de maio de 1265, em família da pequena nobreza. Aos nove anos, segundo seu próprio relato, viu Beatriz Portinari pela primeira vez; ela morreria aos 24 anos e se tornaria a figura central de sua obra, transformada em guia celeste.',
        'Participou ativamente da política florentina, dividida entre guelfos e gibelinos e, depois, entre guelfos brancos e negros. Em 1302, com a facção rival no poder, foi condenado ao exílio perpétuo e à morte na fogueira caso retornasse a Florença. Nunca voltou.',
        "Escreveu a 'Divina Comédia' no exílio, entre 1308 e 1321, percorrendo cortes italianas como hóspede. O poema narra em primeira pessoa a travessia do Inferno, do Purgatório e do Paraíso, guiado por Virgílio e depois por Beatriz, e é escrito em terza rima, forma que ele criou.",
        'Escreveu-o em toscano, e não em latim, decisão radical: fez da língua falada instrumento de obra de máxima ambição. Também defendeu essa escolha em tratado próprio. Morreu em Ravena em 14 de setembro de 1321. Florença pediu seus restos de volta séculos depois; Ravena nunca os devolveu.'
      ],
      contexto: "A 'Divina Comédia' fundou o italiano literário — a língua nacional italiana deriva em larga medida do toscano que ele fixou. É também um acerto de contas pessoal e político: Dante distribui pelo Inferno papas, florentinos e adversários com nome e sobrenome, o que faz do poema um documento histórico além de obra literária.",
      contribuicoes: [
        "Escreveu a 'Divina Comédia', obra fundadora da literatura italiana.",
        'Fixou o toscano como base da língua literária e depois nacional italiana.',
        'Criou a terza rima, forma métrica adotada por toda a tradição posterior.',
        "Escreveu a 'Vida Nova' e o tratado 'De Vulgari Eloquentia', em defesa da língua vulgar.",
        'Sua representação do além influenciou a arte ocidental por sete séculos.'
      ],
      cronologia: [
        [1265, 'Nasce em Florença, por volta de maio.'],
        [1290, 'Morre Beatriz Portinari.'],
        [1302, 'É condenado ao exílio perpétuo por Florença.'],
        [1308, "Começa a 'Divina Comédia'."],
        [1321, 'Conclui o poema e morre em Ravena, em 14 de setembro.']
      ],
      nota: null
    },
    'Antoine Lavoisier': {
      resumo: 'Fundou a química moderna, foi guilhotinado aos cinquenta anos e sua perda foi lamentada por toda a ciência europeia.',
      bio: [
        'Antoine-Laurent de Lavoisier nasceu em Paris em 26 de agosto de 1743, em família abastada. Formou-se em direito, mas dedicou-se às ciências. Comprou participação na Ferme Générale, empresa privada que arrecadava impostos para a coroa — decisão que lhe daria recursos para a pesquisa e, mais tarde, a condenação.',
        'Trabalhou com balanças de precisão e estabeleceu o princípio de conservação da massa: nada se perde, tudo se transforma. Demonstrou que a combustão é uma reação com o oxigênio, derrubando a teoria do flogisto que dominava a química havia um século.',
        "Nomeou o oxigênio e o hidrogênio, demonstrou que a água é composta desses dois elementos e publicou em 1789 o 'Tratado Elementar de Química', com a primeira lista moderna de elementos e a nomenclatura sistemática ainda em uso. Contou com a colaboração permanente da esposa, Marie-Anne Paulze Lavoisier, que traduzia, desenhava os experimentos e mantinha os registros.",
        'Atuou também em administração pública e propôs reformas fiscais e agrícolas. Durante o Terror, foi julgado por sua participação na coleta de impostos e guilhotinado em 8 de maio de 1794. O matemático Lagrange comentou no dia seguinte que bastou um instante para cortar aquela cabeça, e que um século talvez não baste para produzir outra igual.'
      ],
      contexto: 'Lavoisier converteu a química de prática qualitativa, herdeira da alquimia, em ciência quantitativa baseada na medição rigorosa. A nomenclatura que ele estabeleceu ainda estrutura a disciplina. Sua execução, em plena Revolução Francesa e por razões alheias à sua obra científica, tornou-se o exemplo mais citado do custo político para a ciência.',
      contribuicoes: ['Formulou a lei de conservação da massa.', 'Demonstrou que a combustão é reação com o oxigênio, derrubando a teoria do flogisto.', 'Nomeou o oxigênio e o hidrogênio e demonstrou a composição da água.', "Publicou o 'Tratado Elementar de Química', com a nomenclatura sistemática ainda em uso.", 'Introduziu a medição quantitativa rigorosa como método central da química.'],
      cronologia: [
        [1743, 'Nasce em Paris, em 26 de agosto.'],
        [1772, 'Inicia os experimentos sobre combustão.'],
        [1783, 'Demonstra a composição da água.'],
        [1789, "Publica o 'Tratado Elementar de Química'."],
        [1794, 'É guilhotinado em Paris, em 8 de maio.']
      ],
      nota: null
    },
    'Rosalind Franklin': {
      resumo: 'Produziu a imagem que revelou a estrutura do DNA e morreu aos 37 anos, antes que o Nobel fosse concedido.',
      bio: [
        'Rosalind Elsie Franklin nasceu em Londres em 25 de julho de 1920, em família judaica abastada. Estudou química física em Cambridge e doutorou-se em 1945, com trabalho sobre a estrutura do carvão que teve aplicação prática imediata. Aperfeiçoou-se em cristalografia de raios X em Paris, onde se tornou especialista de primeira ordem na técnica.',
        "Em 1951 foi contratada pelo King's College de Londres para trabalhar com difração de raios X aplicada ao DNA. As condições eram hostis: havia salas comuns vedadas a mulheres e sua posição em relação a Maurice Wilkins, que se considerava seu superior, nunca foi esclarecida pela instituição.",
        'Produziu em 1952, com o estudante Raymond Gosling, a imagem conhecida como Fotografia 51, de nitidez sem precedentes, que revelava a estrutura helicoidal da molécula. A imagem foi mostrada a James Watson por Wilkins sem o conhecimento de Franklin, e seus dados não publicados chegaram a Watson e Crick por um relatório interno.',
        "O modelo da dupla hélice foi publicado em 1953, com um artigo de Franklin no mesmo número da revista. Ela deixou o King's e passou a trabalhar com a estrutura de vírus, produzindo contribuições importantes. Morreu de câncer de ovário em Londres em 16 de abril de 1958, aos 37 anos. O Nobel foi concedido em 1962 a Watson, Crick e Wilkins."
      ],
      contexto: 'O Nobel não é atribuído postumamente, o que torna inútil discutir se Franklin o teria dividido. A questão real é outra: o uso de seus dados sem consentimento e o reconhecimento tardio de sua contribuição. A descrição depreciativa que Watson fez dela em seu livro de memórias agravou por décadas essa distorção, e ele próprio a corrigiu em um epílogo.',
      contribuicoes: [
        'Produziu a Fotografia 51, imagem decisiva para a determinação da estrutura do DNA.',
        'Estabeleceu parâmetros da molécula que permitiram construir o modelo da dupla hélice.',
        'Realizou trabalho pioneiro sobre a estrutura do carvão e do grafite.',
        'Fez contribuições fundamentais à estrutura do vírus do mosaico do tabaco e do poliovírus.',
        'É hoje referência central nas discussões sobre autoria e reconhecimento na ciência.'
      ],
      cronologia: [
        [1920, 'Nasce em Londres, em 25 de julho.'],
        [1945, 'Doutora-se em Cambridge.'],
        [1951, "Entra para o King's College e inicia o trabalho com DNA."],
        [1952, 'Produz a Fotografia 51.'],
        [1953, 'Publica seu artigo no mesmo número em que sai o modelo de Watson e Crick.'],
        [1958, 'Morre em Londres, em 16 de abril.']
      ],
      nota: null
    },
    'Barbara McClintock': {
      resumo: 'Descobriu que genes se movem no genoma, foi ignorada por trinta anos e recebeu o Nobel sozinha aos 81.',
      bio: [
        'Barbara McClintock nasceu em Hartford, Connecticut, em 16 de junho de 1902. A mãe se opôs a que fizesse faculdade, temendo que isso a tornasse inelegível para o casamento; o pai apoiou. Formou-se em Cornell e doutorou-se em botânica em 1927, especializando-se na citogenética do milho.',
        'Fez contribuições fundamentais já nos anos 1930: identificou os cromossomos do milho, demonstrou a relação entre recombinação genética e troca física de material cromossômico e descreveu o papel dos telômeros e centrômeros. Foi a terceira mulher eleita para a Academia Nacional de Ciências dos Estados Unidos.',
        'Instalou-se em 1941 no laboratório de Cold Spring Harbor, onde trabalharia pelo resto da vida, cultivando e analisando milho geração após geração. Ali observou padrões de pigmentação que só podiam ser explicados se certos elementos genéticos mudassem de posição no genoma, ligando e desligando outros genes.',
        'Apresentou os resultados em 1950 e 1951 e encontrou ceticismo e indiferença: a ideia contrariava a convicção de que os genes ocupam posições fixas. Deixou de publicar sobre o tema por anos. Os transpósons foram confirmados em bactérias nos anos 1960 e 1970, e ela recebeu o Nobel de Medicina sozinha em 1983, aos 81 anos. Morreu em Nova York em 2 de setembro de 1992.'
      ],
      contexto: 'McClintock é o caso mais citado de descoberta correta rejeitada por estar muito à frente do quadro teórico disponível. Ela própria relativizava a narrativa da perseguição, dizendo que os colegas simplesmente não tinham como entender o que ela via. Foi a primeira mulher a receber sozinha o Nobel de Medicina.',
      contribuicoes: ['Descobriu os elementos genéticos móveis, ou transpósons.', 'Demonstrou que a recombinação genética corresponde à troca física de material cromossômico.', 'Produziu o primeiro mapa genético do milho.', 'Descreveu a função de telômeros e centrômeros.', 'Recebeu sozinha o Nobel de Medicina em 1983.'],
      cronologia: [
        [1902, 'Nasce em Hartford, Connecticut, em 16 de junho.'],
        [1927, 'Doutora-se em botânica por Cornell.'],
        [1941, 'Instala-se em Cold Spring Harbor.'],
        [1950, 'Apresenta os resultados sobre elementos genéticos móveis.'],
        [1983, 'Recebe o Nobel de Medicina, aos 81 anos.'],
        [1992, 'Morre em Nova York, em 2 de setembro.']
      ],
      nota: null
    },
    'Lise Meitner': {
      resumo: 'Explicou a fissão nuclear no exílio e foi excluída do Nobel concedido ao colega que fizera o experimento.',
      bio: [
        'Lise Meitner nasceu em Viena em 7 de novembro de 1878, em família judaica. Mulheres não eram admitidas no ensino superior público austríaco; estudou com professores particulares e pôde entrar na universidade quando a regra mudou, doutorando-se em física em 1906, a segunda mulher a consegui-lo em Viena.',
        'Mudou-se para Berlim e começou a colaborar com o químico Otto Hahn, parceria que duraria trinta anos. No início trabalhava em um porão, sem acesso ao prédio principal do instituto, vedado a mulheres. Tornou-se em 1926 a primeira mulher professora titular de física na Alemanha.',
        'Em 1938, com a anexação da Áustria, perdeu a proteção da cidadania austríaca e fugiu para a Suécia com ajuda de colegas, deixando praticamente tudo para trás. Hahn continuou os experimentos em Berlim e escreveu-lhe relatando um resultado que não conseguia explicar: o bombardeio de urânio produzia bário.',
        'Meitner discutiu o problema com o sobrinho Otto Frisch durante uma caminhada na neve e, usando a fórmula da equivalência entre massa e energia, calculou a enorme quantidade liberada. Foram os dois que deram ao fenômeno o nome de fissão. O Nobel de Química de 1944 foi concedido apenas a Hahn. Meitner recusou-se a trabalhar no projeto da bomba atômica. Morreu na Inglaterra em 27 de outubro de 1968.'
      ],
      contexto: 'A exclusão de Meitner é apontada por historiadores da ciência como uma das falhas mais graves da história do Nobel, resultado da combinação de antissemitismo, do isolamento imposto pelo exílio e da separação rígida entre as categorias de química e física. O elemento 109 foi batizado meitnério em sua homenagem, em 1997.',
      contribuicoes: ['Formulou, com Otto Frisch, a interpretação teórica da fissão nuclear.', 'Deu, com Frisch, o nome de fissão ao fenômeno.', 'Descobriu com Otto Hahn o elemento protactínio.', 'Foi a primeira mulher professora titular de física na Alemanha.', 'Recusou participar do desenvolvimento da bomba atômica.'],
      cronologia: [
        [1878, 'Nasce em Viena, em 7 de novembro.'],
        [1906, 'Doutora-se em física, a segunda mulher a consegui-lo em Viena.'],
        [1926, 'Torna-se a primeira professora titular de física da Alemanha.'],
        [1938, 'Foge para a Suécia após a anexação da Áustria.'],
        [1939, 'Publica com Frisch a interpretação da fissão nuclear.'],
        [1968, 'Morre na Inglaterra, em 27 de outubro.'],
        [1997, 'O elemento 109 é batizado meitnério.']
      ],
      nota: null
    },
    'Chien-Shiung Wu': {
      resumo: 'Derrubou experimentalmente uma lei tida como inquestionável da física e foi excluída do Nobel concedido pela teoria que ela provou.',
      bio: [
        'Chien-Shiung Wu nasceu perto de Xangai, na China, em 31 de maio de 1912. O pai havia fundado uma das primeiras escolas para meninas da região, contrariando a norma social. Formou-se em física na Universidade Central Nacional e partiu em 1936 para os Estados Unidos, onde doutorou-se em Berkeley sob orientação de Ernest Lawrence.',
        'Trabalhou no Projeto Manhattan, em Columbia, onde resolveu um problema crítico de enriquecimento de urânio e desenvolveu método de separação por difusão gasosa. Tornou-se a principal especialista mundial em decaimento beta.',
        'Em 1956, os físicos teóricos Tsung-Dao Lee e Chen Ning Yang propuseram que a paridade poderia não se conservar nas interações fracas — hipótese que contrariava um princípio tido como lei inquestionável. Procuraram Wu, que projetou e executou o experimento decisivo.',
        'Resfriou núcleos de cobalto-60 quase ao zero absoluto e mediu a emissão de elétrons, mostrando que a natureza distingue esquerda de direita. O resultado, publicado em 1957, derrubou um dos princípios mais estabelecidos da física. Lee e Yang receberam o Nobel naquele mesmo ano; Wu não foi incluída. Morreu em Nova York em 16 de fevereiro de 1997.'
      ],
      contexto: 'A exclusão de Wu do Nobel de 1957 é uma das omissões mais discutidas da história do prêmio, sobretudo porque o experimento que ela concebeu e executou era a única forma de confirmar a hipótese. Recebeu depois o primeiro prêmio Wolf de Física, em 1978, e foi a primeira mulher a presidir a Sociedade Americana de Física.',
      contribuicoes: ['Projetou e executou o experimento que derrubou a conservação da paridade, em 1956.', 'Trabalhou no Projeto Manhattan, resolvendo problemas de enriquecimento de urânio.', 'Confirmou experimentalmente a teoria da interação fraca de Fermi.', 'Foi a primeira mulher a presidir a Sociedade Americana de Física.', 'Recebeu o primeiro prêmio Wolf de Física, em 1978.'],
      cronologia: [
        [1912, 'Nasce perto de Xangai, China, em 31 de maio.'],
        [1936, 'Parte para os Estados Unidos.'],
        [1940, 'Doutora-se em física em Berkeley.'],
        [1944, 'Integra o Projeto Manhattan.'],
        [1956, 'Realiza o experimento sobre a conservação da paridade.'],
        [1978, 'Recebe o primeiro prêmio Wolf de Física.'],
        [1997, 'Morre em Nova York, em 16 de fevereiro.']
      ],
      nota: null
    },
    Hipátia: {
      resumo: 'Dirigiu a escola neoplatônica de Alexandria e foi assassinada por uma turba, tornando-se símbolo do saber diante do fanatismo.',
      bio: [
        'Hipátia nasceu em Alexandria por volta de 355 ou 370, filha do matemático Téon, último diretor conhecido do Museu de Alexandria. Foi formada pelo pai em matemática, astronomia e filosofia, e superou-o em reputação.',
        'Dirigiu a escola neoplatônica da cidade e lecionou a alunos de diferentes origens e religiões, entre eles cristãos que ocupariam cargos eclesiásticos importantes. Um deles, Sinésio de Cirene, deixou cartas que são a principal fonte direta sobre ela.',
        "Produziu comentários e edições de obras matemáticas e astronômicas clássicas, entre elas a 'Aritmética' de Diofanto, as 'Cônicas' de Apolônio e o 'Almagesto' de Ptolomeu. Nenhuma de suas obras sobreviveu diretamente; parte de seu trabalho editorial ajudou a preservar textos gregos fundamentais. É creditada também com o aperfeiçoamento de instrumentos, entre eles o astrolábio.",
        'Alexandria vivia conflitos violentos entre facções cristãs, judaicas e pagãs, agravados pela disputa entre o prefeito imperial Orestes, de quem Hipátia era próxima, e o bispo Cirilo. Em março de 415 foi arrastada de sua carruagem por uma turba e assassinada com brutalidade extrema.'
      ],
      contexto: 'Hipátia é a primeira matemática de quem se tem registro histórico substancial. Sua morte tornou-se, desde o Iluminismo, símbolo do conflito entre saber e fanatismo — leitura que historiadores contemporâneos matizam, apontando que o assassinato teve motivação sobretudo política, no contexto da disputa entre o bispo e o prefeito.',
      contribuicoes: ['Dirigiu a escola neoplatônica de Alexandria.', 'Produziu comentários e edições de Diofanto, Apolônio e Ptolomeu.', 'Seu trabalho editorial ajudou a preservar textos matemáticos gregos fundamentais.', 'É creditada com aperfeiçoamentos em instrumentos astronômicos, entre eles o astrolábio.', 'É a primeira matemática documentada da história.'],
      cronologia: [
        [360, 'Nasce em Alexandria, por volta deste período.'],
        [400, 'Assume a direção da escola neoplatônica de Alexandria.'],
        [415, 'É assassinada por uma turba, em março.']
      ],
      nota: null
    },
    'Katherine Johnson': {
      resumo: 'Calculou à mão as trajetórias dos primeiros voos espaciais americanos, em uma NASA ainda segregada.',
      bio: [
        'Katherine Coleman Goble Johnson nasceu em White Sulphur Springs, Virgínia Ocidental, em 26 de agosto de 1918. Foi criança prodígio em matemática: começou o ensino médio aos dez anos e formou-se na universidade aos dezoito, com as maiores notas de sua turma. Foi uma das três pessoas negras selecionadas para integrar a pós-graduação da Universidade da Virgínia Ocidental quando esta foi dessegregada.',
        'Entrou em 1953 para o comitê que antecedeu a NASA, no grupo de computadoras — mulheres, em sua maioria negras, que faziam à mão os cálculos de engenharia. Trabalhavam em instalações segregadas, com banheiros e refeitórios separados.',
        'Insistiu em participar das reuniões de engenheiros, das quais mulheres eram excluídas, argumentando que precisava saber o que faziam com seus números. Calculou a trajetória do voo suborbital de Alan Shepard, em 1961, o primeiro americano no espaço.',
        'Antes do voo orbital de John Glenn, em 1962, o astronauta pediu que ela verificasse à mão os números produzidos pelo computador eletrônico, no qual ninguém confiava plenamente. Trabalhou ainda nos cálculos da Apollo 11 e do retorno da Apollo 13. Recebeu a Medalha Presidencial da Liberdade em 2015. Morreu na Virgínia em 24 de fevereiro de 2020, aos 101 anos.'
      ],
      contexto: "A história de Johnson e de suas colegas permaneceu praticamente desconhecida do público até o livro e o filme 'Estrelas Além do Tempo', de 2016, que a tornaram conhecida aos 98 anos. O caso mostra quanto do trabalho técnico que viabilizou o programa espacial americano foi feito por mulheres negras em condições de segregação legal.",
      contribuicoes: ['Calculou a trajetória do primeiro voo suborbital americano tripulado, em 1961.', 'Verificou à mão, a pedido de John Glenn, os cálculos do primeiro voo orbital americano.', 'Trabalhou nos cálculos de trajetória da Apollo 11 e no retorno da Apollo 13.', 'Foi coautora ou autora de 26 trabalhos técnicos da NASA.', 'Recebeu a Medalha Presidencial da Liberdade em 2015.'],
      cronologia: [
        [1918, 'Nasce em White Sulphur Springs, Virgínia Ocidental, em 26 de agosto.'],
        [1937, 'Forma-se na universidade aos dezoito anos.'],
        [1953, 'Entra para o grupo de computadoras do comitê que antecedeu a NASA.'],
        [1961, 'Calcula a trajetória do voo de Alan Shepard.'],
        [1962, 'Verifica os cálculos do voo orbital de John Glenn.'],
        [2015, 'Recebe a Medalha Presidencial da Liberdade.'],
        [2020, 'Morre na Virgínia, em 24 de fevereiro.']
      ],
      nota: null
    },
    'Amelia Earhart': {
      resumo: 'Primeira mulher a cruzar o Atlântico sozinha de avião, desapareceu no Pacífico em 1937.',
      bio: [
        'Amelia Mary Earhart nasceu em Atchison, Kansas, em 24 de julho de 1897. Trabalhou como enfermeira voluntária de feridos de guerra no Canadá e como assistente social antes de voar. Fez seu primeiro voo como passageira em 1920 e disse ter decidido ali que precisaria aprender a pilotar. Comprou o primeiro avião em 1921, com dinheiro de empregos diversos.',
        'Em 1928 tornou-se a primeira mulher a atravessar o Atlântico em um avião, ainda como passageira — condição que ela própria minimizava, dizendo ter sido apenas bagagem. Em 1932 refez a travessia sozinha, partindo da Terra Nova e pousando na Irlanda do Norte, tornando-se a primeira mulher e a segunda pessoa a realizar o feito.',
        'Estabeleceu diversos recordes de altitude, velocidade e distância, e foi a primeira pessoa a voar sozinha do Havaí à Califórnia. Escreveu livros, deu palestras e ajudou a fundar as Noventa e Nove, associação internacional de mulheres pilotos, da qual foi a primeira presidente.',
        'Em 1937 partiu com o navegador Fred Noonan para uma volta ao mundo pela rota equatorial. Haviam completado cerca de dois terços do percurso quando desapareceram sobre o Pacífico, a caminho da ilha Howland, em 2 de julho. As buscas foram as mais caras da história americana até então e não encontraram vestígios conclusivos.'
      ],
      contexto: 'Earhart usou deliberadamente a própria visibilidade para defender que mulheres podiam exercer qualquer profissão, e articulou isso com militância pelo sufrágio e pela igualdade no trabalho. Seu desaparecimento nunca esclarecido alimenta teorias há quase um século, mas o que sustenta sua permanência é o que ela representou enquanto voava.',
      contribuicoes: ['Primeira mulher a cruzar o Atlântico sozinha de avião, em 1932.', 'Primeira pessoa a voar sozinha do Havaí à Califórnia.', 'Cofundou as Noventa e Nove, associação internacional de mulheres pilotos.', 'Estabeleceu diversos recordes de altitude, velocidade e distância.', 'Militou publicamente pela igualdade de oportunidades profissionais para mulheres.'],
      cronologia: [
        [1897, 'Nasce em Atchison, Kansas, em 24 de julho.'],
        [1921, 'Compra seu primeiro avião.'],
        [1928, 'Atravessa o Atlântico como passageira.'],
        [1929, 'Cofunda as Noventa e Nove.'],
        [1932, 'Cruza o Atlântico sozinha.'],
        [1935, 'Voa sozinha do Havaí à Califórnia.'],
        [1937, 'Desaparece sobre o Pacífico, em 2 de julho.']
      ],
      nota: null
    },
    'Oswaldo Cruz': {
      resumo: 'Erradicou a febre amarela do Rio de Janeiro e provocou, no caminho, a Revolta da Vacina.',
      bio: [
        'Oswaldo Gonçalves Cruz nasceu em São Luís do Paraitinga, São Paulo, em 5 de agosto de 1872, filho de médico. Formou-se em medicina aos vinte anos e especializou-se em bacteriologia no Instituto Pasteur, em Paris, então o centro mundial da microbiologia.',
        'Voltou ao Brasil e assumiu em 1903 a Diretoria Geral de Saúde Pública, num Rio de Janeiro com fama internacional de cidade insalubre: navios evitavam o porto e imigrantes recusavam desembarcar por causa das epidemias de febre amarela, peste bubônica e varíola.',
        "Organizou brigadas de mata-mosquitos, desratização e desinfecção de domicílios, com agentes que entravam nas casas — medidas impostas sem esclarecimento público adequado, num contexto de reforma urbana que já demolia cortiços e expulsava a população pobre do centro. A vacinação obrigatória contra a varíola, em 1904, foi a gota d'água e desencadeou a Revolta da Vacina, com dias de conflito nas ruas.",
        'A febre amarela urbana foi erradicada da cidade em poucos anos, e a peste e a varíola controladas. Dirigiu o instituto de Manguinhos, que passou a levar seu nome, e conduziu campanhas sanitárias na Amazônia durante a construção da ferrovia Madeira-Mamoré. Morreu em Petrópolis em 11 de fevereiro de 1917, aos 44 anos.'
      ],
      contexto:
        'Oswaldo Cruz fundou a saúde pública brasileira como política de Estado com base científica, e o fez por métodos autoritários que a própria história da saúde pública estuda como exemplo do que não repetir: a eficácia sanitária foi real, e a revolta popular foi consequência direta da imposição sem diálogo. O instituto que dirigiu, hoje Fiocruz, é um dos principais centros de pesquisa biomédica da América Latina.',
      contribuicoes: ['Erradicou a febre amarela urbana do Rio de Janeiro.', 'Controlou as epidemias de peste bubônica e varíola na capital federal.', 'Dirigiu e consolidou o instituto de Manguinhos, hoje Fiocruz.', 'Conduziu campanhas sanitárias na Amazônia durante a construção da Madeira-Mamoré.', 'Recebeu a medalha de ouro do Congresso Internacional de Higiene de Berlim, em 1907.'],
      cronologia: [
        [1872, 'Nasce em São Luís do Paraitinga, São Paulo, em 5 de agosto.'],
        [1896, 'Especializa-se no Instituto Pasteur, em Paris.'],
        [1903, 'Assume a Diretoria Geral de Saúde Pública.'],
        [1904, 'A vacinação obrigatória desencadeia a Revolta da Vacina.'],
        [1907, 'Recebe a medalha de ouro em Berlim.'],
        [1917, 'Morre em Petrópolis, em 11 de fevereiro.']
      ],
      nota: null
    },
    'Jean Piaget': {
      resumo: 'Estudou como o conhecimento se constrói observando os próprios filhos e refundou a psicologia do desenvolvimento.',
      bio: [
        'Jean William Fritz Piaget nasceu em Neuchâtel, Suíça, em 9 de agosto de 1896. Publicou seu primeiro artigo científico aos dez anos, sobre um pardal albino observado em um parque, e doutorou-se em ciências naturais aos 22, com tese sobre moluscos.',
        'Voltou-se à psicologia e trabalhou em Paris na padronização de testes de inteligência. Interessou-se menos pelas respostas certas das crianças do que pelos erros: percebeu que crianças de idades semelhantes erravam do mesmo modo, o que sugeria estruturas de pensamento próprias a cada fase, e não apenas conhecimento insuficiente.',
        'Construiu boa parte de suas observações acompanhando dia a dia os três filhos, registrando de forma minuciosa como constroem noções de objeto, espaço, causa e número. Formulou os estágios do desenvolvimento cognitivo — sensório-motor, pré-operatório, operatório concreto e operatório formal — e conceitos como assimilação, acomodação e permanência do objeto.',
        'Descrevia-se como epistemólogo, não como psicólogo: para ele, estudar a criança era o método para responder à pergunta filosófica sobre como o conhecimento se forma. Dirigiu o Bureau Internacional de Educação e fundou em Genebra o Centro de Epistemologia Genética. Morreu em Genebra em 16 de setembro de 1980.'
      ],
      contexto:
        'Piaget mudou a pergunta da psicologia infantil: em vez de medir quanto a criança sabe, passou a investigar como ela pensa em cada fase. A tese de que a criança constrói ativamente o conhecimento, e não apenas o recebe, é a base do construtivismo e transformou currículos e formação docente em todo o mundo. Pesquisas posteriores revisaram várias de suas idades-limite, mantendo a estrutura geral.',
      contribuicoes: ['Formulou a teoria dos estágios do desenvolvimento cognitivo.', 'Introduziu os conceitos de assimilação, acomodação e permanência do objeto.', 'Fundou a epistemologia genética como programa de pesquisa.', 'Dirigiu o Bureau Internacional de Educação, ligado à Unesco.', 'É base teórica do construtivismo em educação, adotado em currículos de dezenas de países.'],
      cronologia: [
        [1896, 'Nasce em Neuchâtel, Suíça, em 9 de agosto.'],
        [1918, 'Doutora-se em ciências naturais.'],
        [1936, "Publica 'O Nascimento da Inteligência na Criança'."],
        [1955, 'Funda o Centro de Epistemologia Genética, em Genebra.'],
        [1980, 'Morre em Genebra, em 16 de setembro.']
      ],
      nota: null
    },
    'John Bowlby': {
      resumo: 'Psiquiatra britânico, demonstrou que o vínculo afetivo do bebê é necessidade biológica e mudou o cuidado infantil no mundo.',
      bio: [
        'Edward John Mostyn Bowlby nasceu em Londres em 26 de fevereiro de 1907, em família aristocrática que seguia a prática da época de manter as crianças a cargo de babás, com contato mínimo com os pais. Aos sete anos foi enviado a internato — experiência que ele descreveria depois como formativa de seu interesse.',
        'Formou-se em medicina e psiquiatria e trabalhou em uma escola para crianças desajustadas, onde observou que os casos mais graves eram os de crianças que haviam sofrido separações precoces e prolongadas. Formou-se também em psicanálise, mas afastou-se da ênfase kleiniana nas fantasias internas em favor da observação de acontecimentos reais.',
        'Em 1950 foi encarregado pela Organização Mundial da Saúde de estudar crianças sem lar no pós-guerra. O relatório resultante, de 1951, concluiu que a privação de cuidado materno contínuo produz danos duradouros, e mudou práticas hospitalares e de abrigo em vários países — inclusive a proibição de visitas de pais a filhos internados, então corrente.',
        "Desenvolveu a teoria do apego combinando psicanálise, etologia e biologia evolutiva: o vínculo não seria subproduto da alimentação, mas sistema comportamental próprio, com função de sobrevivência. Publicou a trilogia 'Apego', 'Separação' e 'Perda' entre 1969 e 1980. Morreu na Escócia em 2 de setembro de 1990."
      ],
      contexto:
        'Antes de Bowlby, hospitais e orfanatos separavam rotineiramente crianças de seus pais por considerarem o contato perturbador. Seu trabalho, junto com os filmes de James e Joyce Robertson que documentaram o sofrimento de crianças internadas, mudou essa prática em escala internacional. A teoria do apego é hoje um dos programas de pesquisa mais produtivos da psicologia do desenvolvimento.',
      contribuicoes: [
        'Formulou a teoria do apego, unindo psicanálise, etologia e biologia evolutiva.',
        'Escreveu para a OMS o relatório de 1951 sobre cuidado materno e saúde mental.',
        "Publicou a trilogia 'Apego', 'Separação' e 'Perda'.",
        'Seu trabalho mudou as práticas de visita e internação de crianças em hospitais.',
        'Sua teoria fundamenta políticas de acolhimento e adoção em dezenas de países.'
      ],
      cronologia: [
        [1907, 'Nasce em Londres, em 26 de fevereiro.'],
        [1951, 'Publica o relatório da OMS sobre cuidado materno.'],
        [1958, "Publica 'A Natureza do Vínculo da Criança com a Mãe'."],
        [1969, "Publica 'Apego', primeiro volume da trilogia."],
        [1980, "Conclui a trilogia com 'Perda'."],
        [1990, 'Morre na Escócia, em 2 de setembro.']
      ],
      nota: null
    },
    'Anísio Teixeira': {
      resumo: 'Trouxe a Escola Nova ao Brasil, criou a Capes e defendeu a escola pública gratuita contra a resistência de seu tempo.',
      bio: [
        'Anísio Spínola Teixeira nasceu em Caetité, Bahia, em 12 de julho de 1900. Estudou em colégio jesuíta e formou-se em direito. Assumiu aos 24 anos a Inspetoria Geral do Ensino da Bahia e, para se preparar, viajou aos Estados Unidos, onde fez mestrado em Columbia sob orientação de John Dewey.',
        'Voltou convertido às ideias da educação progressista e tornou-se o principal difusor da Escola Nova no Brasil. Assinou em 1932 o Manifesto dos Pioneiros da Educação Nova, que defendia escola pública, gratuita, laica e obrigatória — programa que lhe rendeu oposição feroz da Igreja Católica e de setores conservadores.',
        'Como diretor de instrução pública no Rio de Janeiro, entre 1931 e 1935, criou a Universidade do Distrito Federal e ampliou enormemente a rede escolar. Foi afastado em 1935, acusado de comunista, e passou anos fora da vida pública, trabalhando com mineração na Bahia.',
        'Voltou em 1946 e criou a Capes, em 1951, e o Inep, além de conceber o Centro Educacional Carneiro Ribeiro, em Salvador, primeira escola-parque de tempo integral do país — modelo que inspiraria Darcy Ribeiro nos Cieps. Participou da criação da Universidade de Brasília. Foi perseguido pela ditadura militar e aposentado compulsoriamente. Morreu no Rio de Janeiro em 11 de março de 1971, em circunstâncias nunca esclarecidas.'
      ],
      contexto: 'Anísio Teixeira é a figura central da defesa da escola pública brasileira no século XX, e sua trajetória mostra o custo dessa defesa: foi afastado em 1935 e novamente após 1964, acusado nas duas vezes de subversão. O modelo de educação integral que concebeu na Bahia dos anos 1950 continua sendo referência para as políticas brasileiras de tempo integral.',
      contribuicoes: ['Assinou o Manifesto dos Pioneiros da Educação Nova, em 1932.', 'Criou a Capes e dirigiu o Inep.', 'Concebeu o Centro Educacional Carneiro Ribeiro, primeira escola-parque do Brasil.', 'Criou a Universidade do Distrito Federal e participou da criação da UnB.', 'Traduziu e difundiu no Brasil a obra de John Dewey.'],
      cronologia: [
        [1900, 'Nasce em Caetité, Bahia, em 12 de julho.'],
        [1929, 'Conclui mestrado em Columbia, sob orientação de Dewey.'],
        [1932, 'Assina o Manifesto dos Pioneiros da Educação Nova.'],
        [1935, 'É afastado da direção de instrução pública do Rio.'],
        [1951, 'Cria a Capes.'],
        [1950, 'Inaugura a escola-parque em Salvador.'],
        [1971, 'Morre no Rio de Janeiro, em 11 de março.']
      ],
      nota: null
    },
    'Darcy Ribeiro': {
      resumo: 'Antropólogo entre povos indígenas, criou universidades e escolas e escreveu a principal interpretação do povo brasileiro.',
      bio: [
        'Darcy Ribeiro nasceu em Montes Claros, Minas Gerais, em 26 de outubro de 1922. Formou-se em ciências sociais em São Paulo e passou dez anos convivendo com povos indígenas no centro-oeste e na Amazônia, trabalho que fundamentou toda a sua obra. Participou da criação do Parque Indígena do Xingu e do Museu do Índio.',
        'Foi colaborador de Anísio Teixeira e assumiu a organização da Universidade de Brasília, criada em 1961 com estrutura inovadora, baseada em institutos centrais e faculdades. Foi ministro da Educação e chefe da Casa Civil no governo João Goulart.',
        "Com o golpe de 1964, exilou-se e passou treze anos fora do país, atuando como assessor de reformas universitárias no Uruguai, na Venezuela, no Chile e no Peru. Escreveu no exílio boa parte de sua obra antropológica, entre ela 'O Processo Civilizatório' e 'As Américas e a Civilização'.",
        "Voltou em 1976. Como vice-governador e depois secretário no Rio de Janeiro, concebeu os Cieps, escolas públicas de tempo integral, com Oscar Niemeyer como arquiteto — projeto que chegou a mais de quinhentas unidades e foi objeto de intensa disputa política. Elegeu-se senador em 1990 e foi autor da Lei de Diretrizes e Bases da Educação. Publicou 'O Povo Brasileiro' em 1995 e morreu no Rio em 17 de fevereiro de 1997."
      ],
      contexto: 'Darcy Ribeiro combinou pesquisa antropológica, criação institucional e atuação política de um modo pouco comum. Sua tese central — a de que o Brasil é uma nova Roma, mestiça e formada pela fusão de matrizes indígena, africana e europeia — é ao mesmo tempo sua contribuição mais influente e a mais criticada, por autores que apontam nela a diluição do conflito racial.',
      contribuicoes: ["Escreveu 'O Povo Brasileiro' e 'O Processo Civilizatório'.", 'Organizou e foi o primeiro reitor da Universidade de Brasília.', 'Participou da criação do Parque Indígena do Xingu e fundou o Museu do Índio.', 'Concebeu os Cieps, escolas públicas de tempo integral no Rio de Janeiro.', 'Foi autor da Lei de Diretrizes e Bases da Educação Nacional, de 1996.'],
      cronologia: [
        [1922, 'Nasce em Montes Claros, Minas Gerais, em 26 de outubro.'],
        [1947, 'Inicia dez anos de trabalho de campo entre povos indígenas.'],
        [1961, 'Organiza a Universidade de Brasília.'],
        [1964, 'Exila-se após o golpe militar.'],
        [1983, 'Inaugura os primeiros Cieps no Rio de Janeiro.'],
        [1990, 'Elege-se senador.'],
        [1995, "Publica 'O Povo Brasileiro'."],
        [1997, 'Morre no Rio de Janeiro, em 17 de fevereiro.']
      ],
      nota: null
    },
    'Meister Eckhart': {
      resumo: 'Dominicano alemão do século XIV, pregou em língua vulgar uma mística do desprendimento e foi processado por heresia.',
      bio: [
        'Eckhart von Hochheim nasceu na Turíngia, na atual Alemanha, por volta de 1260. Entrou para a ordem dominicana ainda jovem e estudou em Colônia e em Paris, onde obteve o título de mestre em teologia — daí o nome pelo qual é conhecido. Ocupou cargos importantes na ordem, incluindo o de provincial da Saxônia.',
        'Escreveu tratados em latim para o meio universitário e, sobretudo, pregou em alemão médio para religiosas e leigos. Essa escolha é parte central de sua obra: traduziu conceitos da teologia escolástica para uma língua que não tinha vocabulário para eles, criando termos que entrariam no alemão filosófico posterior.',
        'Sua pregação gira em torno do desprendimento, do nascimento de Deus na alma e da ideia de um fundo da alma onde a distinção entre criatura e criador se dissolve. Formulações desse tipo, ditas em língua vulgar a um público amplo, chamaram a atenção das autoridades eclesiásticas.',
        'Foi processado por heresia em Colônia em 1326 e apelou ao papa. Defendeu-se afirmando que podia ter errado, mas não ser herege, já que erro implica engano e heresia implica obstinação. Morreu por volta de 1328, antes da sentença. Em 1329 uma bula papal condenou dezessete de suas proposições.'
      ],
      contexto: 'Eckhart influenciou toda a mística alemã posterior, chegou a Lutero pela tradição da Devotio Moderna e foi redescoberto no século XX por filósofos como Heidegger e por interlocutores do diálogo entre cristianismo e budismo, que reconhecem em sua noção de desprendimento paralelos com o pensamento oriental. A ordem dominicana pediu em 1980 a revisão de sua condenação.',
      contribuicoes: [
        'Pregou em língua vulgar alemã, criando vocabulário filosófico e teológico.',
        'Formulou a mística do desprendimento e do nascimento de Deus na alma.',
        'Influenciou a Devotio Moderna, Nicolau de Cusa e a tradição mística alemã.',
        'Foi redescoberto no século XX pela filosofia e pelo diálogo inter-religioso.',
        'Seus sermões alemães são considerados marco da prosa filosófica na língua.'
      ],
      cronologia: [
        [1260, 'Nasce na Turíngia, por volta deste ano.'],
        [1302, 'Obtém o título de mestre em teologia em Paris.'],
        [1326, 'É processado por heresia em Colônia.'],
        [1328, 'Morre, por volta deste ano, antes da sentença.'],
        [1329, 'Uma bula papal condena dezessete de suas proposições.']
      ],
      nota: null
    },
    'Maria Callas': {
      resumo: 'Recuperou o bel canto esquecido e redefiniu o que se espera de uma cantora lírica como intérprete dramática.',
      bio: [
        'Maria Anna Cecilia Sofia Kalogeropoulou nasceu em Nova York em 2 de dezembro de 1923, filha de imigrantes gregos. A mãe a levou de volta à Grécia aos treze anos e a pressionou desde cedo a cantar profissionalmente — relação conflituosa que Callas nunca resolveu. Estudou no Conservatório de Atenas com a soprano espanhola Elvira de Hidalgo, que a orientou ao repertório belcantista.',
        'Estreou na Itália em 1947 e firmou-se nos anos seguintes em papéis que exigiam simultaneamente agilidade de coloratura e peso dramático — combinação que se considerava impossível na época e que levara o repertório do século XIX ao esquecimento.',
        "Cantou nos principais teatros do mundo, com longa associação ao Scala de Milão. Seus papéis emblemáticos foram Norma, Tosca, Violeta, Medeia e Lúcia. A gravação de 'Tosca' de 1953, regida por Victor de Sabata, é apontada como uma das melhores gravações de ópera já realizadas.",
        'Perdeu cerca de trinta quilos no início dos anos 1950, transformação que ampliou seu impacto cênico e, segundo parte dos críticos, afetou o apoio vocal. A relação com Aristóteles Onassis e a exposição na imprensa marcaram a década seguinte. A voz declinou cedo e ela encerrou a carreira nos palcos em 1965. Morreu em Paris em 16 de setembro de 1977, aos 53 anos.'
      ],
      contexto: 'Callas mudou o padrão da ópera ao recusar a separação entre canto e atuação: exigia de si a interpretação dramática que o teatro falado exige, sem sacrificar a técnica. O repertório belcantista de Bellini, Donizetti e Rossini, praticamente abandonado, voltou aos palcos por causa dela e nunca mais saiu.',
      contribuicoes: ['Recuperou para os palcos o repertório belcantista do século XIX.', 'Redefiniu a interpretação operística ao unir exigência vocal e atuação dramática.', "Gravou 'Tosca' em 1953, referência permanente da discografia lírica.", 'Tornou-se referência nos papéis de Norma, Medeia, Violeta e Lúcia.', 'Deu master classes em Juilliard, registradas e estudadas até hoje.'],
      cronologia: [
        [1923, 'Nasce em Nova York, em 2 de dezembro.'],
        [1937, 'Muda-se para a Grécia e estuda no Conservatório de Atenas.'],
        [1947, 'Estreia na Itália, em Verona.'],
        [1953, "Grava 'Tosca' com Victor de Sabata."],
        [1955, "Estreia em 'La Traviata' no Scala, com direção de Visconti."],
        [1965, 'Encerra a carreira nos palcos.'],
        [1977, 'Morre em Paris, em 16 de setembro.']
      ],
      nota: null
    },
    'Serena Williams': {
      resumo: 'Ganhou 23 títulos de Grand Slam em simples e tornou-se a tenista mais dominante da era profissional.',
      bio: [
        'Serena Jameka Williams nasceu em Saginaw, Michigan, em 26 de setembro de 1981, e cresceu em Compton, na Califórnia. O pai, Richard Williams, treinou-a e à irmã Venus em quadras públicas do bairro a partir de um plano que traçou antes mesmo de as filhas nascerem, estudando o esporte por conta própria.',
        'Tornou-se profissional em 1995, aos catorze anos. Venceu seu primeiro Grand Slam no US Open de 1999. Entre 2002 e 2003 conquistou quatro títulos majores consecutivos, feito que ficou conhecido como Serena Slam, repetido entre 2014 e 2015.',
        'Acumulou 23 títulos de Grand Slam em simples, recorde da era profissional, além de catorze em duplas ao lado da irmã Venus e quatro medalhas de ouro olímpicas. Venceu o Aberto da Austrália de 2017 grávida de dois meses.',
        'Enfrentou ao longo da carreira episódios de racismo, entre eles as vaias em Indian Wells em 2001 que levaram as irmãs a boicotar o torneio por catorze anos. Sobreviveu a uma embolia pulmonar em 2011 e a complicações graves no parto, em 2017, experiência que a levou a falar publicamente sobre mortalidade materna de mulheres negras. Encerrou a carreira em 2022.'
      ],
      contexto: 'As irmãs Williams entraram num esporte de elite, historicamente branco e de clube, vindas de quadras públicas de um bairro pobre, e o dominaram por duas décadas. O efeito sobre a composição do tênis mundial e sobre o que se considera possível em termos de potência e longevidade no esporte feminino é difícil de superestimar.',
      contribuicoes: [
        'Conquistou 23 títulos de Grand Slam em simples, recorde da era profissional.',
        'Venceu catorze Grand Slams em duplas ao lado da irmã Venus, sem nenhuma derrota em finais.',
        'Conquistou quatro medalhas de ouro olímpicas.',
        'Venceu o Aberto da Austrália de 2017 no início da gravidez.',
        'Tornou pública a questão da mortalidade materna entre mulheres negras a partir de sua experiência.'
      ],
      cronologia: [
        [1981, 'Nasce em Saginaw, Michigan, em 26 de setembro.'],
        [1995, 'Torna-se profissional, aos catorze anos.'],
        [1999, 'Vence seu primeiro Grand Slam, no US Open.'],
        [2002, 'Inicia a sequência do primeiro Serena Slam.'],
        [2012, 'Conquista o ouro olímpico em simples em Londres.'],
        [2017, 'Vence o Aberto da Austrália grávida.'],
        [2022, 'Encerra a carreira.']
      ],
      nota: null
    },
    'Jesse Owens': {
      resumo: 'Ganhou quatro ouros nos Jogos de Berlim de 1936 e voltou a um país que ainda o obrigava a usar elevadores de serviço.',
      bio: [
        'James Cleveland Owens nasceu em Oakville, Alabama, em 12 de setembro de 1913, filho de meeiros e neto de escravizados. A família migrou para Cleveland quando ele tinha nove anos. O apelido Jesse veio de um professor que entendeu J. C., como ele se apresentava, como Jesse.',
        'Na Universidade de Ohio, em um único dia de 1935, em Ann Arbor, igualou um recorde mundial e quebrou outros três em menos de uma hora — feito considerado o maior de um atleta em uma só tarde. Ainda assim, não podia morar no campus nem comer nos mesmos restaurantes que os colegas brancos.',
        'Nos Jogos de Berlim, em 1936, organizados pelo regime nazista como demonstração de superioridade racial, venceu os 100 metros, os 200 metros, o salto em distância e o revezamento 4x100 metros. No salto, o alemão Luz Long o orientou na classificação e foi o primeiro a cumprimentá-lo, diante das arquibancadas.',
        'De volta aos Estados Unidos, não foi recebido na Casa Branca nem homenageado oficialmente, e precisava usar elevadores de serviço em hotéis onde era festejado. Para sobreviver, correu em exibições contra cavalos e motocicletas. Recebeu a Medalha Presidencial da Liberdade em 1976. Morreu no Arizona em 31 de março de 1980.'
      ],
      contexto: 'O episódio de 1936 é lembrado como refutação pública da tese racial nazista, mas o que se seguiu é parte inseparável da história: o atleta voltou a um país sob segregação legal, que o celebrou sem lhe conceder direitos. Ele próprio observou que não foi Hitler quem não o cumprimentou, mas o presidente de seu próprio país.',
      contribuicoes: ['Conquistou quatro medalhas de ouro nos Jogos de Berlim de 1936.', 'Igualou um recorde mundial e quebrou outros três em menos de uma hora, em 1935.', 'Seu recorde no salto em distância permaneceu por 25 anos.', 'Recebeu a Medalha Presidencial da Liberdade em 1976.', 'Tornou-se símbolo internacional da refutação da doutrina racial nazista.'],
      cronologia: [
        [1913, 'Nasce em Oakville, Alabama, em 12 de setembro.'],
        [1935, 'Quebra três recordes mundiais e iguala outro em uma tarde.'],
        [1936, 'Conquista quatro ouros nos Jogos de Berlim.'],
        [1976, 'Recebe a Medalha Presidencial da Liberdade.'],
        [1980, 'Morre no Arizona, em 31 de março.']
      ],
      nota: null
    }
  };
  function aplicar() {
    var n = 0,
      ja = [];
    for (var k in P) {
      if (!AUTOR_INDEX.has(k)) {
        ja.push('[fora] ' + k);
        continue;
      }
      if (PERFIS_PROFUNDOS[k]) {
        ja.push('[existe] ' + k);
        continue;
      }
      PERFIS_PROFUNDOS[k] = P[k];
      n++;
    }
    if (ja.length) console.warn('Fase 57e · ignorados:', ja.join(' | '));
    console.log('MeMotiva · Fase 57e: +' + n + ' panoramas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 57f — panoramas (lote 6: últimos e fontes sagradas) ===== */
(function () {
  var P = {
    'Walt Disney': {
      resumo: 'Faliu duas vezes, apostou tudo no primeiro longa de animação da história e construiu o maior império de entretenimento do mundo.',
      bio: [
        'Walter Elias Disney nasceu em Chicago em 5 de dezembro de 1901. Passou a infância em uma fazenda no Missouri e em Kansas City, onde entregava jornais de madrugada antes da escola. Serviu como motorista de ambulância da Cruz Vermelha no fim da Primeira Guerra, com dezesseis anos, tendo falsificado a idade.',
        'Abriu um estúdio de animação em Kansas City que faliu em 1923. Mudou-se para Hollywood com pouquíssimo dinheiro e fundou com o irmão Roy o estúdio que levaria seu nome. Perdeu em 1928 os direitos de seu primeiro personagem de sucesso, Oswald, para o distribuidor — episódio que o levou a nunca mais abrir mão de propriedade intelectual. Criou então o Mickey Mouse.',
        "'Steamboat Willie', de 1928, foi um dos primeiros desenhos com som sincronizado. Em 1937 lançou 'Branca de Neve e os Sete Anões', primeiro longa-metragem de animação em cores com som — projeto que a indústria chamava de loucura de Disney e que consumiu recursos muito acima do previsto, com o estúdio hipotecado.",
        "O filme foi a maior bilheteria de seu tempo e financiou a construção do estúdio em Burbank. Seguiram-se 'Pinóquio', 'Fantasia', 'Dumbo' e 'Bambi'. Em 1955 inaugurou a Disneylândia, criando o formato do parque temático moderno. Morreu em Los Angeles em 15 de dezembro de 1966, enquanto planejava o complexo da Flórida."
      ],
      contexto: 'Disney transformou a animação de curta cômica em forma narrativa de longa-metragem e, depois, inventou o parque temático como espaço narrativo. Seu estúdio é também objeto de crítica documentada quanto a relações de trabalho — a greve dos animadores de 1941 foi um marco — e quanto a estereótipos raciais em filmes das primeiras décadas.',
      contribuicoes: [
        "Produziu 'Branca de Neve e os Sete Anões', primeiro longa de animação em cores com som.",
        "Criou o Mickey Mouse e produziu 'Steamboat Willie', pioneiro do som sincronizado.",
        'Inaugurou a Disneylândia em 1955, criando o formato do parque temático moderno.',
        'Desenvolveu a câmera multiplano, que deu profundidade à animação.',
        'Recebeu 22 estatuetas do Oscar, recorde individual até hoje.'
      ],
      cronologia: [
        [1901, 'Nasce em Chicago, em 5 de dezembro.'],
        [1923, 'Funda com o irmão Roy o estúdio em Hollywood.'],
        [1928, "Cria o Mickey Mouse e lança 'Steamboat Willie'."],
        [1937, "Lança 'Branca de Neve e os Sete Anões'."],
        [1941, 'Enfrenta a greve dos animadores do estúdio.'],
        [1955, 'Inaugura a Disneylândia.'],
        [1966, 'Morre em Los Angeles, em 15 de dezembro.']
      ],
      nota: null
    },
    'Michael Jordan': {
      resumo: 'Cortado do time do colégio, tornou-se o jogador de basquete mais influente da história e transformou o atleta em marca global.',
      bio: [
        'Michael Jeffrey Jordan nasceu no Brooklyn, Nova York, em 17 de fevereiro de 1963, e cresceu em Wilmington, Carolina do Norte. Foi cortado do time principal do colégio no segundo ano, episódio que ele citaria a vida inteira como motor de sua obsessão por treino. Jogou na Universidade da Carolina do Norte, onde marcou a cesta decisiva do título nacional de 1982, ainda calouro.',
        'Foi escolhido pelo Chicago Bulls em 1984, na terceira posição do recrutamento. Levou anos até vencer: os Bulls eram eliminados repetidamente pelos Detroit Pistons, que criaram uma tática defensiva específica contra ele. O primeiro título veio em 1991, seguido de 1992 e 1993.',
        'Em 1993, após o assassinato do pai, anunciou a aposentadoria e passou uma temporada jogando beisebol profissional na segunda divisão. Voltou ao basquete em 1995 e conquistou um segundo tricampeonato, em 1996, 1997 e 1998, com o time dirigido por Phil Jackson.',
        'Somou seis títulos da NBA, seis prêmios de melhor jogador das finais, cinco de melhor jogador da temporada regular e dois ouros olímpicos, o segundo com o Dream Team de 1992. O contrato com a Nike, assinado em 1984, deu origem ao Air Jordan e ao modelo de atleta como marca própria. Tornou-se depois proprietário majoritário do Charlotte Hornets.'
      ],
      contexto: 'Jordan coincidiu com a globalização da transmissão esportiva e com a consolidação do marketing esportivo, e ambos os fenômenos se organizaram em torno dele. A linha Air Jordan movimenta bilhões de dólares por ano décadas depois de sua aposentadoria, e o modelo de atleta-marca que ele inaugurou é hoje padrão em todos os esportes.',
      contribuicoes: [
        'Conquistou seis títulos da NBA pelo Chicago Bulls, em duas sequências de três.',
        'Foi eleito seis vezes melhor jogador das finais e cinco vezes da temporada regular.',
        'Conquistou dois ouros olímpicos, incluindo o do Dream Team de 1992.',
        'Deu origem à linha Air Jordan, que criou o modelo do atleta como marca própria.',
        'Tornou-se proprietário majoritário de uma franquia da NBA.'
      ],
      cronologia: [
        [1963, 'Nasce no Brooklyn, Nova York, em 17 de fevereiro.'],
        [1982, 'Marca a cesta do título nacional universitário.'],
        [1984, 'É recrutado pelo Chicago Bulls e assina com a Nike.'],
        [1991, 'Conquista o primeiro título da NBA.'],
        [1993, 'Aposenta-se pela primeira vez após a morte do pai.'],
        [1995, 'Retorna ao basquete.'],
        [1998, 'Conquista o sexto título e encerra a fase nos Bulls.']
      ],
      nota: null
    },
    'Howard Schultz': {
      resumo: 'Cresceu em conjunto habitacional no Brooklyn e transformou uma torrefadora de Seattle em rede global de cafeterias.',
      bio: [
        'Howard Schultz nasceu no Brooklyn, Nova York, em 19 de julho de 1953, em família operária. O pai, motorista de entregas, quebrou o tornozelo em serviço e ficou sem salário e sem plano de saúde — episódio que Schultz aponta como origem de sua decisão, décadas depois, de oferecer cobertura médica inclusive a funcionários de meio período.',
        'Formou-se em comunicação com bolsa de futebol americano, trabalhou em vendas e conheceu a Starbucks em 1981, então uma pequena torrefadora de Seattle que vendia grãos, e não bebida pronta. Entrou na empresa em 1982 como diretor de operações.',
        'Uma viagem a Milão em 1983 foi determinante: percebeu que as cafeterias italianas vendiam encontro e ritual, e não apenas café. Os donos da Starbucks recusaram a ideia. Schultz saiu, abriu sua própria rede e, em 1987, comprou a Starbucks com investidores, aplicando nela o conceito.',
        'Conduziu a expansão de seis lojas para milhares em dezenas de países. Deixou a função executiva em 2000, voltou em 2008 durante a crise — fechando temporariamente todas as lojas americanas para retreinar baristas — e saiu de novo em 2017, retornando brevemente em 2022. Enfrentou nos últimos anos o movimento de sindicalização de funcionários, ao qual se opôs publicamente.'
      ],
      contexto: 'A Starbucks é o caso de estudo mais citado sobre construção de marca por experiência em vez de produto: o que se vende é o ambiente, o nome escrito no copo e a previsibilidade do ritual. A política de benefícios a trabalhadores de meio período foi incomum no varejo americano, e a resistência à sindicalização nos anos recentes é a principal crítica dirigida à empresa hoje.',
      contribuicoes: [
        'Transformou a Starbucks de pequena torrefadora em rede global de cafeterias.',
        'Introduziu no varejo americano cobertura de saúde para funcionários de meio período.',
        'Criou o modelo do terceiro lugar, entre a casa e o trabalho, como conceito de varejo.',
        'Estabeleceu programas de ações para funcionários e de financiamento de estudos.',
        "Publicou 'Dedique-se de Coração' e 'Onward'."
      ],
      cronologia: [
        [1953, 'Nasce no Brooklyn, Nova York, em 19 de julho.'],
        [1982, 'Entra para a Starbucks como diretor de operações.'],
        [1983, 'Viaja a Milão e concebe o modelo de cafeteria.'],
        [1987, 'Compra a Starbucks com investidores.'],
        [1992, 'A empresa abre capital na bolsa.'],
        [2008, 'Retorna como executivo-chefe durante a crise financeira.'],
        [2017, 'Deixa novamente a função executiva.']
      ],
      nota: null
    },
    'Melinda French Gates': {
      resumo: 'Dirigiu a maior fundação filantrópica privada do mundo e reorientou parte de seu foco para a autonomia econômica das mulheres.',
      bio: [
        'Melinda Ann French nasceu em Dallas, Texas, em 15 de agosto de 1964. Estudou em colégio católico feminino, onde uma professora conseguiu os primeiros computadores da escola, e formou-se em ciência da computação e economia pela Universidade Duke, com MBA pela mesma instituição.',
        'Entrou na Microsoft em 1987 como gerente de produto e trabalhou no desenvolvimento de vários programas da empresa, chegando a gerente geral de produtos de informação. Casou-se com Bill Gates em 1994 e deixou a empresa em 1996.',
        'Criou com o marido, em 2000, a fundação que se tornaria a maior organização filantrópica privada do mundo, com foco em saúde global, combate a doenças infecciosas, saneamento e educação. A fundação financiou campanhas de erradicação da poliomielite e de combate à malária, à tuberculose e ao HIV em dezenas de países.',
        "Dentro da fundação, defendeu a ampliação do foco para contracepção, saúde materna e autonomia econômica feminina, temas que sustenta serem a intervenção mais eficaz em desenvolvimento. Criou em 2015 a Pivotal Ventures, dedicada à igualdade de gênero nos Estados Unidos. Publicou 'O Momento de Voar' em 2019. Divorciou-se em 2021 e deixou a copresidência da fundação em 2024."
      ],
      contexto:
        'A fundação que ela dirigiu por duas décadas alterou a escala do financiamento privado em saúde global, a ponto de ser um dos maiores financiadores da Organização Mundial da Saúde — concentração de poder que é objeto de crítica legítima sobre governança e prestação de contas. A ênfase em autonomia feminina como variável central de desenvolvimento é a contribuição mais diretamente atribuível a ela.',
      contribuicoes: ['Copresidiu por duas décadas a maior fundação filantrópica privada do mundo.', 'Direcionou recursos para contracepção, saúde materna e autonomia econômica feminina.', 'Financiou campanhas globais de erradicação da poliomielite e combate à malária.', 'Criou a Pivotal Ventures, dedicada à igualdade de gênero nos Estados Unidos.', "Publicou 'O Momento de Voar', em 2019."],
      cronologia: [
        [1964, 'Nasce em Dallas, Texas, em 15 de agosto.'],
        [1987, 'Entra para a Microsoft como gerente de produto.'],
        [2000, 'Cria com Bill Gates a fundação.'],
        [2015, 'Funda a Pivotal Ventures.'],
        [2019, "Publica 'O Momento de Voar'."],
        [2024, 'Deixa a copresidência da fundação.']
      ],
      nota: null
    },
    'Abílio Diniz': {
      resumo: 'Construiu com o pai a maior rede varejista do Brasil, sobreviveu a um sequestro e perdeu o controle do grupo em disputa societária.',
      bio: [
        'Abílio dos Santos Diniz nasceu em São Paulo em 28 de dezembro de 1936, filho do imigrante português Valentim dos Santos Diniz, dono de uma doceria chamada Pão de Açúcar. Formou-se em administração pela Fundação Getulio Vargas, na primeira turma do curso no país, e entrou no negócio da família em 1959.',
        'Conduziu a transformação da doceria em rede de supermercados e depois em conglomerado com centenas de lojas, hipermercados e lojas de eletrodomésticos. O grupo chegou a ser a maior rede varejista da América Latina, com atuação também no exterior.',
        'Em dezembro de 1989 foi sequestrado por um grupo de militantes estrangeiros e brasileiros e mantido cativo por seis dias em um cubículo. A experiência, que ele narra em suas memórias, mudou sua relação com o tempo e com o trabalho, e deu origem à rotina rigorosa de atividade física e alimentação que passou a defender publicamente.',
        'Em 1999 firmou parceria com o grupo francês Casino, que anos depois assumiria o controle. A disputa societária entre 2011 e 2013 foi uma das mais acompanhadas da história empresarial brasileira e terminou com sua saída. Reinvestiu em outras companhias, entre elas a BRF e a Carrefour Brasil. Morreu em São Paulo em 18 de fevereiro de 2024.'
      ],
      contexto: 'Abílio Diniz é uma das figuras mais conhecidas do empresariado brasileiro e um caso de estudo em dois temas: a profissionalização de empresas familiares e os riscos de acordos societários com sócios estrangeiros. Sua disputa com o Casino é analisada em cursos de direito societário e de governança corporativa no país.',
      contribuicoes: ['Conduziu a transformação do Pão de Açúcar na maior rede varejista da América Latina.', 'Formou-se na primeira turma de administração de empresas do Brasil.', "Publicou 'Caminho Sereno' e 'Novo Caminho'.", 'Tornou-se referência pública em disciplina pessoal e longevidade produtiva.', 'Atuou depois como investidor e conselheiro em grandes companhias brasileiras.'],
      cronologia: [
        [1936, 'Nasce em São Paulo, em 28 de dezembro.'],
        [1959, 'Entra no negócio da família.'],
        [1989, 'É sequestrado e mantido cativo por seis dias.'],
        [1999, 'Firma a parceria com o grupo francês Casino.'],
        [2013, 'Encerra a disputa societária e deixa o grupo.'],
        [2024, 'Morre em São Paulo, em 18 de fevereiro.']
      ],
      nota: null
    },
    'Rosa Luxemburgo': {
      resumo: 'Teórica marxista polonesa e alemã, opôs-se à guerra, criticou o autoritarismo bolchevique e foi assassinada em 1919.',
      bio: [
        'Rosa Luxemburgo nasceu em Zamość, na Polônia então sob domínio russo, em 5 de março de 1871, em família judaica. Teve uma doença no quadril na infância que a deixou com sequela permanente na marcha. Estudou em Zurique, uma das poucas universidades europeias que admitiam mulheres, e doutorou-se em economia em 1897.',
        "Envolveu-se desde jovem na política socialista polonesa e depois alemã. Ganhou projeção em 1899 com 'Reforma ou Revolução', resposta a Eduard Bernstein e sua proposta de revisar o marxismo dentro da social-democracia. Tornou-se uma das principais teóricas do movimento socialista europeu.",
        'Opôs-se frontalmente à Primeira Guerra e ao voto da social-democracia alemã pelos créditos de guerra, em 1914. Passou boa parte do conflito presa. Da prisão escreveu textos políticos e cartas de grande força literária, sobre pássaros, plantas e o pátio onde caminhava.',
        'Criticou a Revolução Russa por sua supressão do pluralismo, sustentando que liberdade é sempre a liberdade de quem pensa diferente. Cofundou a Liga Espartaquista e depois o Partido Comunista da Alemanha. Foi presa durante a revolta espartaquista, espancada e assassinada em Berlim em 15 de janeiro de 1919, com o corpo jogado em um canal.'
      ],
      contexto: 'Luxemburgo é a principal referência da tradição marxista que recusa o autoritarismo, e sua crítica à Revolução Russa foi escrita ainda em 1918, antes que seus efeitos se tornassem evidentes. Foi assassinada por forças paramilitares sob um governo social-democrata — o mesmo partido do qual ela viera —, episódio que marcaria a esquerda alemã por décadas.',
      contribuicoes: ["Escreveu 'Reforma ou Revolução' e 'A Acumulação do Capital'.", 'Opôs-se publicamente à Primeira Guerra, o que lhe custou anos de prisão.', 'Criticou a supressão do pluralismo pela Revolução Russa, em texto de 1918.', 'Cofundou a Liga Espartaquista e o Partido Comunista da Alemanha.', 'Deixou correspondência de grande valor literário, escrita em boa parte na prisão.'],
      cronologia: [
        [1871, 'Nasce em Zamość, Polônia, em 5 de março.'],
        [1897, 'Doutora-se em economia em Zurique.'],
        [1899, "Publica 'Reforma ou Revolução'."],
        [1913, "Publica 'A Acumulação do Capital'."],
        [1916, 'É presa por sua oposição à guerra.'],
        [1918, 'Cofunda a Liga Espartaquista e escreve sobre a Revolução Russa.'],
        [1919, 'É assassinada em Berlim, em 15 de janeiro.']
      ],
      nota: null
    },
    'Ben Sirá': {
      resumo: 'Escriba de Jerusalém do século II a.C., escreveu o mais extenso livro sapiencial judaico conhecido por seu autor.',
      bio: [
        'Jesus ben Sirá foi um escriba e mestre de Jerusalém que viveu por volta do início do século II a.C. Dirigia uma escola na cidade e escreveu, provavelmente entre 195 e 175 a.C., o livro que leva seu nome — também chamado Eclesiástico ou Sabedoria de Ben Sirá.',
        'É um dos poucos livros do período que identifica seu próprio autor. O neto do escritor traduziu a obra do hebraico para o grego no Egito, por volta de 132 a.C., e deixou um prólogo explicando as dificuldades da tradução — documento precioso sobre a prática de verter textos naquela época.',
        'O livro reúne conselhos práticos sobre amizade, educação de filhos, trabalho, uso da palavra, riqueza, medicina, luto e conduta social, e identifica a sabedoria com a observância da Torá. Encerra com o elogio dos antepassados ilustres de Israel.',
        'O texto hebraico original foi dado por perdido por séculos; fragmentos substanciais foram encontrados no fim do século XIX na genizá do Cairo e depois em Massada e Qumran. É considerado deuterocanônico pelas igrejas católica e ortodoxa e apócrifo pelas tradições judaica e protestante.'
      ],
      contexto: 'Ben Sirá escreve num momento de pressão da cultura helenística sobre a tradição judaica, e o livro é em parte uma resposta a isso: afirma que a sabedoria buscada pelos gregos já está presente na Torá. É também uma das principais fontes sobre a vida cotidiana e a ética prática da Judeia antes da revolta dos Macabeus.',
      contribuicoes: [
        'Escreveu o mais extenso livro sapiencial judaico com autoria conhecida.',
        'Seu texto é deuterocanônico nas igrejas católica e ortodoxa.',
        'O prólogo de seu neto é fonte essencial sobre a tradução de textos na Antiguidade.',
        'Identificou a sabedoria universal com a Torá, resposta à pressão cultural helenística.',
        'É fonte central sobre a ética prática e a vida social da Judeia do século II a.C.'
      ],
      cronologia: [
        [-190, 'Escreve o livro em Jerusalém, por volta deste período.'],
        [-132, 'Seu neto traduz a obra para o grego, no Egito.'],
        [1896, 'Fragmentos do original hebraico são encontrados na genizá do Cairo.']
      ],
      nota: null
    },
    'Shimon HaTzadik': {
      resumo: 'Sumo sacerdote de Jerusalém, é uma das figuras mais antigas citadas no Pirkei Avot.',
      bio: [
        'Shimon HaTzadik, Simão, o Justo, foi sumo sacerdote em Jerusalém no período do Segundo Templo. As fontes divergem sobre sua identificação: pode ser Simão I, do início do século III a.C., ou Simão II, do fim do século III a.C. Flávio Josefo e o Talmude oferecem dados que não coincidem plenamente.',
        'A tradição rabínica o apresenta como um dos últimos membros da Grande Assembleia, corpo que teria feito a ponte entre os profetas e os sábios posteriores, e portanto como elo entre a tradição profética e a rabínica.',
        'É uma das primeiras figuras nomeadas no tratado Pirkei Avot, e a máxima que lhe é atribuída afirma que o mundo se apoia sobre três coisas: o estudo da Torá, o serviço divino e a prática da bondade. A sentença é uma das mais citadas de toda a literatura rabínica.',
        'Ben Sirá dedica-lhe um elogio extenso no encerramento de seu livro, descrevendo sua aparição no serviço do Templo — texto que é uma das poucas descrições contemporâneas de um sumo sacerdote em função.'
      ],
      contexto: 'Shimon HaTzadik ocupa na tradição judaica a posição de charneira entre dois períodos: encerra a era da Grande Assembleia e abre a cadeia de transmissão dos sábios que culminaria na Mishná. Sua máxima sobre os três pilares do mundo é usada até hoje como resumo da ética judaica.',
      contribuicoes: [
        'É uma das primeiras figuras nomeadas na cadeia de transmissão do Pirkei Avot.',
        'Formulou a máxima sobre os três pilares que sustentam o mundo.',
        'É apresentado pela tradição como um dos últimos membros da Grande Assembleia.',
        'Recebe extenso elogio no livro de Ben Sirá, raro relato contemporâneo de um sumo sacerdote.',
        'Sua sentença é referência permanente na ética e na liturgia judaicas.'
      ],
      cronologia: [
        [-280, 'Exerce o sumo sacerdócio em Jerusalém, segundo uma das identificações possíveis.'],
        [-200, 'Período da outra identificação possível, com Simão II.']
      ],
      nota: 'As fontes antigas divergem sobre qual dos dois sumos sacerdotes chamados Simão corresponde a esta figura.'
    },
    'Henry Stanley Haskins': {
      resumo: 'Corretor de Wall Street, publicou anonimamente um livro de aforismos cuja frase mais famosa é atribuída a outros há um século.',
      bio: [
        'Henry Stanley Haskins foi um corretor da bolsa de Nova York no início do século XX. Há pouquíssima informação biográfica documentada sobre ele. Envolveu-se em um escândalo financeiro que o afastou do mercado, e é provável que esse seja o motivo pelo qual publicou seu livro sem assinar.',
        "Em 1940 saiu 'Meditations in Wall Street', coletânea de aforismos sobre finanças, caráter, fracasso e vida interior, publicada anonimamente com introdução do historiador Albert Jay Nock. O livro teve circulação restrita.",
        'Dele vem a frase sobre o que está atrás de nós e à nossa frente ser pequeno comparado ao que está dentro de nós — uma das mais reproduzidas da língua inglesa, atribuída rotineiramente a Ralph Waldo Emerson, que morreu quase sessenta anos antes da publicação.',
        'A autoria foi estabelecida por pesquisadores que localizaram o livro e a identidade do autor anônimo. Trata-se de um dos casos mais documentados de atribuição falsa persistente: a correção circula há décadas sem alcançar a citação errada.'
      ],
      contexto: 'O caso de Haskins é exemplar do problema que bancos de citações enfrentam: uma frase boa migra para um nome famoso e a correção quase nunca acompanha. A atribuição a Emerson é tão difundida que aparece em livros impressos, discursos oficiais e materiais escolares, apesar de ser cronologicamente impossível.',
      contribuicoes: ["Publicou anonimamente 'Meditations in Wall Street', em 1940.", 'É o autor verificado da frase habitualmente atribuída a Ralph Waldo Emerson.', 'O caso de sua obra é citado como exemplo clássico de atribuição falsa persistente.'],
      cronologia: [[1940, "Publica anonimamente 'Meditations in Wall Street'."]],
      nota: 'A frase mais conhecida deste autor circula amplamente atribuída a Ralph Waldo Emerson, o que é cronologicamente impossível.'
    },
    'Bíblia Sagrada': {
      resumo: 'Conjunto de livros reunidos ao longo de mais de mil anos, é o texto mais traduzido e mais impresso da história.',
      bio: [
        'A Bíblia não é um livro, mas uma biblioteca: reúne textos escritos ao longo de mais de mil anos, em hebraico, aramaico e grego, por autores de contextos muito distintos, em gêneros que vão da narrativa histórica à poesia, da lei ao oráculo profético e à carta.',
        'O Antigo Testamento, ou Bíblia hebraica, tem seu núcleo formado entre os séculos IX e II a.C. O Novo Testamento foi escrito entre os anos 50 e 110 aproximadamente, sendo as cartas de Paulo os documentos mais antigos.',
        'A definição de quais livros integram o cânone se deu ao longo de séculos e é diferente entre as tradições: a Bíblia hebraica, a católica, a ortodoxa e a protestante não contêm exatamente o mesmo conjunto.',
        'Está traduzida integral ou parcialmente para mais de três mil idiomas, é o livro mais impresso da história e influenciou de forma decisiva o direito, a literatura, a arte e a língua de boa parte do mundo.'
      ],
      contexto: 'Atribuir uma frase genericamente à Bíblia é impreciso: cada livro tem contexto, gênero e propósito próprios, e o sentido de uma passagem depende disso. As frases deste acervo identificadas apenas como bíblicas aguardam localização exata de livro, capítulo e versículo.',
      contribuicoes: ['É o texto mais traduzido e mais impresso da história da humanidade.', 'Reúne textos escritos ao longo de mais de mil anos, em três idiomas.', 'Influenciou de forma decisiva o direito, a literatura e as línguas do Ocidente.', 'Tem cânones distintos nas tradições judaica, católica, ortodoxa e protestante.'],
      cronologia: [],
      nota: 'Esta entrada identifica uma fonte textual, não uma pessoa. A localização exata das passagens permanece em curadoria.'
    },
    Torá: {
      resumo: 'Os cinco primeiros livros da Bíblia hebraica, base da lei e da identidade judaicas.',
      bio: [
        'A Torá é o conjunto dos cinco primeiros livros da Bíblia hebraica: Gênesis, Êxodo, Levítico, Números e Deuteronômio. A palavra significa instrução ou ensinamento, e não lei em sentido estrito, como a tradução grega consagrou.',
        'Narra a criação, os patriarcas, a escravidão no Egito, o êxodo, a revelação no Sinai e a caminhada até as fronteiras de Canaã, e contém o corpo legal que estrutura a vida religiosa, civil e ritual de Israel.',
        'A tradição atribui sua redação a Moisés. A crítica bíblica moderna, a partir do século XIX, propôs que o texto resulta da combinação de fontes distintas, tese discutida e revista desde então em várias formulações.',
        'É lida publicamente nas sinagogas em ciclo anual, a partir de rolos manuscritos em pergaminho segundo regras rigorosas de cópia. Em sentido mais amplo, o termo Torá designa também toda a tradição de ensino judaico, incluindo a lei oral registrada na Mishná e no Talmude.'
      ],
      contexto: 'Referir uma frase genericamente à Torá é impreciso: cada um dos cinco livros tem contexto e propósito distintos. As frases deste acervo assim identificadas aguardam localização exata de livro, capítulo e versículo.',
      contribuicoes: ['Reúne os cinco primeiros livros da Bíblia hebraica.', 'Contém o corpo legal que estrutura a vida religiosa e civil judaica.', 'É lida publicamente em ciclo anual nas sinagogas, a partir de rolos manuscritos.', 'É base compartilhada das três grandes religiões monoteístas.'],
      cronologia: [],
      nota: 'Esta entrada identifica uma fonte textual, não uma pessoa. A localização exata das passagens permanece em curadoria.'
    },
    'Provérbio Chinês': {
      resumo: 'Designação genérica para máximas de origem chinesa, muitas vezes atribuída sem qualquer base documental.',
      bio: [
        "A tradição chinesa produziu um dos maiores conjuntos de literatura sapiencial do mundo, com máximas registradas em obras como os 'Analectos' de Confúcio, o 'Tao Te Ching', o 'Livro das Mutações' e coletâneas de chengyu — expressões de quatro caracteres com origem em episódios históricos ou literários.",
        'A designação genérica provérbio chinês, no entanto, é usada no Ocidente com frequência muito maior do que a documentação justifica. É comum que frases sem origem identificável recebam esse rótulo, que confere autoridade e antiguidade sem exigir fonte.',
        'Vários dos provérbios chineses mais citados em línguas ocidentais não têm correspondente conhecido em chinês. A suposta maldição sobre viver em tempos interessantes, por exemplo, não foi localizada em nenhuma fonte chinesa e aparece pela primeira vez em inglês.',
        'Este acervo mantém frases assim identificadas quando têm circulação documentada, sinalizando que a atribuição a uma origem chinesa específica não pôde ser confirmada.'
      ],
      contexto: 'O rótulo provérbio chinês funciona no Ocidente como selo de sabedoria antiga e é por isso mesmo um dos vetores mais comuns de atribuição infundada. Quando a origem chinesa de uma máxima é documentável, a curadoria identifica a obra; quando não é, mantém a sinalização de que a origem não foi confirmada.',
      contribuicoes: ['Designa um corpo real e extenso de literatura sapiencial chinesa.', 'É também um dos rótulos mais usados em atribuições sem base documental.'],
      cronologia: [],
      nota: 'Designação genérica de origem, não uma pessoa. A atribuição a uma fonte chinesa específica não foi confirmada.'
    },
    'Miqueias 6:8': {
      resumo: 'Versículo do profeta Miqueias que resume a exigência ética dos profetas de Israel.',
      bio: [
        'Miqueias foi um profeta do reino de Judá que atuou no século VIII a.C., contemporâneo de Isaías, em período de pressão assíria e de forte desigualdade social. O livro que leva seu nome alterna oráculos de juízo contra a opressão dos pobres e promessas de restauração.',
        'O versículo 6:8 aparece no encerramento de um trecho construído como processo judicial em que Deus apresenta queixa contra o povo. O texto pergunta o que seria suficiente para agradar a Deus — holocaustos, milhares de carneiros — e responde que o que se pede é praticar a justiça, amar a bondade e caminhar humildemente.',
        'A passagem é considerada uma das formulações mais concisas da ética profética hebraica, que subordina o culto à conduta. O Talmude apresenta esse versículo como a redução de todos os mandamentos a três princípios.',
        'É citado com frequência em contextos de justiça social, em tradições judaicas e cristãs, e aparece em documentos de movimentos religiosos de direitos humanos em vários países.'
      ],
      contexto: 'O profetismo hebraico é a tradição que, na Antiguidade, associou mais explicitamente a religião à conduta social e à defesa dos pobres, em oposição ao ritual dissociado da justiça. Miqueias 6:8 é a formulação mais citada desse princípio.',
      contribuicoes: ['Contém uma das formulações mais concisas da ética profética hebraica.', 'É apresentado no Talmude como a síntese de todos os mandamentos em três princípios.', 'É referência permanente em tradições religiosas de justiça social.'],
      cronologia: [[-730, 'Período aproximado da atuação do profeta Miqueias em Judá.']],
      nota: 'Esta entrada identifica uma passagem bíblica, não uma pessoa.'
    },
    'Levítico 19:18': {
      resumo: 'Versículo que formula o mandamento de amar o próximo como a si mesmo.',
      bio: [
        'Levítico é o terceiro livro da Torá e reúne sobretudo legislação ritual, sacerdotal e de pureza. Os capítulos 17 a 26 formam a seção conhecida como Código de Santidade, que combina prescrições rituais com normas de conduta social.',
        'O versículo 19:18 encerra uma série de mandamentos sobre relações entre vizinhos — não roubar, não mentir, não oprimir o trabalhador, não ser parcial no julgamento, não caluniar — e conclui com a instrução de não guardar rancor e amar o próximo como a si mesmo.',
        'A formulação foi retomada por Jesus nos evangelhos como o segundo maior mandamento, ao lado do amor a Deus, e por Paulo como resumo de toda a lei. Rabi Akiva, no século II, a apresentou como o grande princípio da Torá.',
        'Poucos versículos da literatura antiga tiveram efeito comparável sobre a ética ocidental: a formulação está na base de tradições morais judaicas, cristãs e, por extensão, de concepções seculares de reciprocidade.'
      ],
      contexto: 'O contexto imediato do versículo é notável: a instrução sobre amar o próximo não aparece isolada, mas ao final de uma lista de obrigações concretas sobre salário, justiça e honestidade — o que sugere que o amor de que se trata é prática, e não sentimento.',
      contribuicoes: ['Formula o mandamento de amar o próximo como a si mesmo.', 'Foi apresentado por Rabi Akiva como o grande princípio da Torá.', 'Foi retomado nos evangelhos como o segundo maior mandamento.', 'Está na base de formulações da regra de ouro em tradições religiosas e seculares.'],
      cronologia: [],
      nota: 'Esta entrada identifica uma passagem bíblica, não uma pessoa.'
    },
    '1 Samuel 16:7': {
      resumo: 'Versículo em que se afirma que o homem vê a aparência e Deus vê o coração.',
      bio: [
        'O Primeiro Livro de Samuel narra a transição de Israel do período dos juízes para a monarquia, incluindo a atuação do profeta Samuel, o reinado de Saul e a ascensão de Davi.',
        'O capítulo 16 narra a escolha do sucessor de Saul. Samuel é enviado à casa de Jessé, em Belém, para ungir um de seus filhos. Ao ver Eliabe, o mais velho, de boa aparência, supõe tratar-se do escolhido.',
        'É nesse momento que aparece o versículo 16:7, em que se adverte Samuel a não olhar a aparência nem a altura, porque o homem vê o que está diante dos olhos, mas Deus vê o coração. O escolhido acaba sendo Davi, o filho mais novo, que estava no campo cuidando das ovelhas.',
        'A passagem tornou-se uma das formulações mais citadas sobre o contraste entre aparência e caráter, e circula amplamente fora de contextos religiosos.'
      ],
      contexto: 'A escolha do filho mais novo e menos considerado é um padrão recorrente nas narrativas bíblicas, e o versículo 16:7 é sua formulação explícita. A passagem é usada em pregação, em literatura sobre julgamento e preconceito e em discussões sobre seleção e mérito.',
      contribuicoes: ['Formula o contraste entre a aparência vista pelo homem e o coração visto por Deus.', 'Integra a narrativa da escolha de Davi como rei de Israel.', 'É uma das passagens bíblicas mais citadas sobre julgamento e caráter.'],
      cronologia: [],
      nota: 'Esta entrada identifica uma passagem bíblica, não uma pessoa.'
    },
    'Primeira Carta de Pedro 5:7': {
      resumo: 'Versículo que exorta a lançar sobre Deus toda a ansiedade.',
      bio: [
        'A Primeira Carta de Pedro é dirigida a comunidades cristãs da Ásia Menor que enfrentavam hostilidade social e perseguição. O tema central é como manter a conduta e a esperança em situação de sofrimento e marginalização.',
        'A carta é atribuída ao apóstolo Pedro. Parte dos estudiosos discute essa autoria, apontando a qualidade do grego e o contexto histórico sugerido pelo texto; a própria carta menciona Silvano como quem a escreveu.',
        'O capítulo 5 traz exortações aos líderes das comunidades e aos mais jovens, recomenda humildade e, no versículo 7, instrui a lançar sobre Deus toda a ansiedade, porque ele tem cuidado de cada um.',
        'O versículo é um dos mais citados do Novo Testamento em contextos de aflição, luto e adoecimento, e aparece com frequência em acompanhamento pastoral e em literatura de consolo.'
      ],
      contexto: 'A carta trata de comunidades que sofriam exclusão social concreta, e suas exortações não são abstratas: dirigem-se a pessoas que perdiam vínculos, trabalho e segurança por sua adesão religiosa. É esse contexto que dá peso ao versículo sobre a ansiedade.',
      contribuicoes: ['Formula a exortação a lançar sobre Deus toda a ansiedade.', 'Integra uma das cartas do Novo Testamento dirigidas a comunidades sob perseguição.', 'É uma das passagens mais citadas em contextos de aflição e consolo.'],
      cronologia: [],
      nota: 'Esta entrada identifica uma passagem bíblica, não uma pessoa.'
    },
    'Rig Veda 1.164.46': {
      resumo: 'Verso védico que afirma que a verdade é uma e os sábios a chamam por muitos nomes.',
      bio: [
        'O Rig Veda é a mais antiga das quatro coleções védicas e um dos textos religiosos mais antigos ainda em uso. Reúne mais de mil hinos em sânscrito védico, compostos provavelmente entre 1500 e 1200 a.C. e transmitidos oralmente com precisão notável por mais de um milênio antes de serem fixados por escrito.',
        'O hino 1.164, conhecido como hino dos enigmas, é um dos mais complexos da coleção: apresenta uma série de charadas cosmológicas sobre o sol, o tempo, a fala e a origem do mundo.',
        'O verso 46 afirma que aquilo que é uno os sábios designam de muitos modos, nomeando em seguida diferentes divindades. É a formulação mais antiga conhecida da ideia de que tradições distintas podem apontar para a mesma realidade.',
        'O verso é citado constantemente em contextos de diálogo inter-religioso e de pluralismo, e foi retomado por Gandhi, por Vivekananda e por documentos de encontros religiosos internacionais.'
      ],
      contexto: 'O verso é frequentemente lido como afirmação de tolerância religiosa universal, leitura que indólogos matizam: no contexto do hino, trata-se de uma proposição sobre a unidade da realidade divina dentro da própria tradição védica, e não de um pronunciamento sobre religiões estrangeiras. Sua circulação posterior, no entanto, consolidou o primeiro sentido.',
      contribuicoes: ['Integra o Rig Veda, um dos textos religiosos mais antigos ainda em uso.', 'Contém a formulação mais antiga conhecida sobre a unidade da verdade sob muitos nomes.', 'É referência permanente em diálogo inter-religioso e em discussões sobre pluralismo.'],
      cronologia: [[-1400, 'Período aproximado de composição dos hinos do Rig Veda.']],
      nota: 'Esta entrada identifica uma passagem de texto sagrado, não uma pessoa.'
    },
    'Katha Upanishad 2:3:14': {
      resumo: 'Verso upanishádico sobre o desatar dos desejos do coração como caminho da imortalidade.',
      bio: [
        'A Katha Upanishad é uma das upanishads principais, textos filosóficos que encerram o corpus védico e deslocam o foco do ritual para a investigação sobre a natureza do eu e da realidade. É datada aproximadamente do século V a.C.',
        'O texto é construído como diálogo entre o jovem Nachiketa e Yama, a personificação da morte. Enviado por engano ao reino dos mortos pelo pai irritado, Nachiketa obtém três desejos e usa o terceiro para perguntar o que acontece depois da morte.',
        'Yama tenta dissuadi-lo oferecendo riqueza, longevidade e prazeres; o jovem recusa tudo e insiste na pergunta. A resposta desenvolve a distinção entre o agradável e o bom, a imagem do corpo como carruagem e o ensino sobre o atman, o eu que não nasce nem morre.',
        'O verso 2:3:14 afirma que, quando se desatam todos os desejos alojados no coração, o mortal se torna imortal e alcança o absoluto aqui mesmo. É uma das formulações mais citadas da tradição vedanta.'
      ],
      contexto: 'As upanishads são a base filosófica do vedanta e influenciaram profundamente o pensamento indiano posterior e, no Ocidente, autores como Schopenhauer, Emerson e Thoreau. A Katha é uma das mais lidas por sua forma narrativa e pela clareza com que expõe a distinção entre o que agrada e o que é bom.',
      contribuicoes: ['Integra a Katha Upanishad, um dos textos centrais do vedanta.', 'Formula a distinção entre o agradável e o bom, retomada em toda a filosofia indiana.', 'Contém a imagem do corpo como carruagem, dos sentidos como cavalos e da razão como cocheiro.', 'Influenciou autores ocidentais como Schopenhauer, Emerson e Thoreau.'],
      cronologia: [[-500, 'Período aproximado de composição da Katha Upanishad.']],
      nota: 'Esta entrada identifica uma passagem de texto sagrado, não uma pessoa.'
    }
  };
  function aplicar() {
    var n = 0,
      ja = [];
    for (var k in P) {
      if (!AUTOR_INDEX.has(k)) {
        ja.push('[fora] ' + k);
        continue;
      }
      if (PERFIS_PROFUNDOS[k]) {
        ja.push('[existe] ' + k);
        continue;
      }
      PERFIS_PROFUNDOS[k] = P[k];
      n++;
    }
    if (ja.length) console.warn('Fase 57f · ignorados:', ja.join(' | '));
    console.log('MeMotiva · Fase 57f: +' + n + ' panoramas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();
