/* MeMotiva — dados/08-historias-e-estilos.js
   Histórias-base (STORIES), filtro de palavras e estilos do compositor.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ---------------- HISTÓRIAS (biografias originais) ---------------- */
const STORIES = [
  {
    id: 'frida',
    author: 'Frida Kahlo',
    cat: 'autorreconhecimento',
    title: 'A dor transformada em cor',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frida%20Kahlo,%20by%20Guillermo%20Kahlo%20(cropped).jpg',
    excerpt: 'Como um acidente que mudou tudo se tornou o início de uma das obras mais autênticas da arte moderna.',
    text: `Frida Kahlo nasceu em 1907 em Coyoacán, no México, filha de um fotógrafo alemão e de uma mãe mexicana. Aos seis anos, contraiu poliomielite, o que deixou sua perna direita mais fina e curta — uma diferença que colegas de escola não deixavam esquecer, e que a fez, desde cedo, aprender a habitar um corpo que a sociedade insistia em julgar.

Aos dezoito anos, um acidente mudaria sua vida para sempre: o ônibus em que viajava colidiu com um bonde, e um corrimão de metal atravessou seu corpo, fraturando a coluna, a pélvis e várias costelas. Os médicos duvidaram que ela sobreviveria. Sobreviveu — mas passaria o resto da vida entre camas, coletes ortopédicos e mais de trinta cirurgias.

Foi durante a longa recuperação, imóvel na cama, que Frida começou a pintar: a família instalou um espelho no teto e um cavalete especial, e ela se tornou, segundo suas próprias palavras, "o tema que melhor conhecia". Anos depois, casou-se com o muralista Diego Rivera, vinte anos mais velho — uma relação intensa e tumultuada, marcada por traições de ambos os lados, um divórcio e um nova casamento entre os dois. Foi também nessa época que se tornou ativa no Partido Comunista Mexicano e chegou a hospedar o revolucionário russo Leon Trotsky, então exilado, em sua casa de infância, a hoje famosa Casa Azul.

Frida transformou décadas de dor física e emocional em uma linguagem visual só sua: autorretratos carregados de símbolos da cultura mexicana, cores vibrantes e uma sobrancelha unida que ela se recusava a depilar — um pequeno gesto de resistência à ideia de que mulheres precisam se encaixar em um padrão de beleza. "Eu não pinto sonhos ou pesadelos, pinto a minha própria realidade", dizia.

Reconhecida ainda em vida — foi a primeira artista mexicana a ter uma obra adquirida pelo Louvre —, Frida morreu em 1954, poucos dias depois de participar de sua última exposição, levada até lá em uma cama. Em seu diário, a última frase que escreveu foi: "Espero alegre a saída — e espero nunca voltar." Hoje, é lembrada não apenas pela beleza de sua obra, mas pela coragem de encarar de frente aquilo que a machucava e recusar-se a se esconder por causa disso.`
  },

  {
    id: 'cora',
    author: 'Cora Coralina',
    cat: 'gratidao',
    title: 'A voz que só o tempo revelou',
    excerpt: 'Ela publicou seu primeiro livro aos 76 anos — e se tornou uma das maiores poetas do Brasil.',
    text: `Ana Lins dos Guimarães Peixoto Bretas nasceu em 1889 na cidade de Goiás, à beira do Rio Vermelho, na casa que décadas depois se tornaria museu em sua homenagem. Escrevia desde adolescente, mas sua juventude foi marcada por um escândalo: apaixonou-se por um advogado já casado, Cantídio Tolentino de Figueiredo Bretas, e fugiu com ele para São Paulo — um gesto de coragem e transgressão em uma cidade pequena e conservadora do início do século 20.

Instalou-se em Jaboticabal, no interior paulista, onde viveu a maior parte da vida adulta longe dos círculos literários, sustentando a casa como doceira: suas compotas e doces caseiros pagavam as contas enquanto ela criava os filhos e, nas horas vagas, continuava a escrever — sem pressa de publicar, sem certeza de que um dia o faria.

Ficou viúva em 1934. Só em 1956, já com quase setenta anos, retornou à cidade de Goiás, onde havia nascido. Matriculou-se em um curso de datilografia com um único propósito: organizar, enfim, os poemas acumulados ao longo de uma vida inteira. Seu primeiro livro, "Poemas dos Becos de Goiás e Estórias Mais", só saiu em 1965, quando Cora já tinha 76 anos.

A partir daí, sua poesia simples e profunda — sobre o cotidiano do interior, a força silenciosa das mulheres pobres e a dignidade nas coisas pequenas — conquistou o país. Carlos Drummond de Andrade, um dos maiores poetas brasileiros, chegaria a declarar publicamente sua admiração por ela e pela forma como vivia "em estado de graça com a poesia". Aos 94 anos, Cora recebeu o título de Doutora Honoris Causa pela Universidade Federal de Goiás — reconhecimento tardio para quem escrevia desde os quinze.

"Nasci em tempos rudes. Aceitei contradições, lutas e pedras como lições de vida e delas me sirvo. Aprendi a viver", escreveu, resumindo uma existência inteira de recomeços. Cora Coralina morreu em 1985, aos 95 anos, deixando um legado que prova que não existe idade certa para florescer — e que a gratidão pelas pequenas coisas pode ser, ela mesma, uma forma de sabedoria.`
  },

  {
    id: 'malala',
    author: 'Malala Yousafzai',
    cat: 'educacao',
    title: 'A caneta mais poderosa que a arma',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Malala%20Yousafzai%202015.jpg',
    excerpt: 'Baleada por defender o direito das meninas à escola, tornou-se a pessoa mais jovem a vencer o Nobel da Paz.',
    text: `Malala Yousafzai nasceu em 1997 no Vale do Swat, no Paquistão, filha de Ziauddin Yousafzai, um educador que administrava uma escola local e que, desde sempre, tratou a filha como igual aos irmãos — algo incomum na região. Quando o Talibã tomou o controle do Vale do Swat e proibiu meninas de frequentar a escola, Malala, ainda com onze anos, começou a escrever um blog anônimo para a BBC relatando o dia a dia sob o regime — e, aos poucos, tornou-se um rosto público da resistência.

A notoriedade teve um preço. Em 9 de outubro de 2012, aos quinze anos, um atirador do Talibã subiu no ônibus escolar em que Malala voltava para casa, perguntou "quem é a Malala?" e atirou à queima-roupa. A bala atravessou sua cabeça e pescoço. Ela foi levada, ainda em estado crítico, para um hospital militar e, dias depois, transferida para o Queen Elizabeth Hospital, em Birmingham, no Reino Unido, onde passou por múltiplas cirurgias e uma longa recuperação — e para onde toda a família se mudou.

Em vez de se calar, Malala ampliou sua voz. Em 2013, discursou na sede da ONU em Nova York, no que ficou conhecido como seu "primeiro discurso" após o atentado. Ao lado do pai, fundou o Malala Fund, organização dedicada a garantir educação secundária gratuita e de qualidade para meninas ao redor do mundo, incluindo apoio a projetos em países como o Brasil. Em 2014, aos dezessete anos, tornou-se a pessoa mais jovem da história a receber o Prêmio Nobel da Paz, dividido com o ativista indiano Kailash Satyarthi.

"Uma criança, um professor, um livro e uma caneta podem mudar o mundo", disse em seu discurso na ONU — frase que resume tanto sua trajetória quanto sua causa. Formada em Filosofia, Política e Economia pela Universidade de Oxford, casou-se em 2021 e segue sendo uma das vozes mais respeitadas do mundo em defesa da educação como direito universal, provando que uma tentativa de silenciá-la teve o efeito exatamente oposto.`
  },

  {
    id: 'senna',
    author: 'Ayrton Senna',
    cat: 'motivacao',
    title: 'O piloto que corria atrás de si mesmo',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ayrton%20Senna%20(close%203x4%20cropped).jpg',
    excerpt: 'Três vezes campeão mundial, Senna transformou disciplina e fé em um dos maiores legados do esporte brasileiro.',
    text: `Ayrton Senna da Silva nasceu em São Paulo em 1960, filho de um empresário que lhe construiu, ainda aos quatro anos, um pequeno kart movido a motor de cortador de grama. Aos treze, já competia oficialmente — e logo ficou claro que aquele garoto enxergava a pista de um jeito diferente dos demais.

Chegou à Fórmula 1 em 1984, pela pequena equipe Toleman, e em poucos anos se tornou um dos pilotos mais admirados e temidos do grid. Ao lado do francês Alain Prost — seu companheiro de equipe na McLaren e, depois, maior rival —, protagonizou uma das rivalidades mais intensas da história do esporte, incluindo duas colisões decisivas em Suzuka que definiram campeonatos. Ao todo, conquistou três títulos mundiais: 1988, 1990 e 1991.

Mais do que as vitórias, Senna ficou conhecido por sua busca incansável por melhorar — não apenas para vencer os outros, mas para superar seus próprios limites, muitas vezes arriscando mais do que qualquer outro piloto em busca da volta perfeita. "No que diz respeito ao empenho, ao compromisso, à dedicação, não existe meio-termo: ou você faz uma coisa bem-feita, ou não faz", costumava dizer. Era também um homem de fé profunda, e reservado sobre um outro lado de sua vida: destinava, de forma discreta e sem publicidade, parcelas significativas de sua fortuna a projetos sociais no Brasil — algo que só veio à tona amplamente após sua morte.

Em 1º de maio de 1994, durante o Grande Prêmio de San Marino, na Itália, Senna sofreu um acidente fatal na curva de Tamburello, em Ímola. Tinha 34 anos. Seu velório reuniu cerca de 240 mil pessoas nas ruas de São Paulo — um retrato do quanto sua determinação e humanidade tocaram o Brasil muito além das pistas de corrida. Meses depois, sua irmã Viviane fundou o Instituto Ayrton Senna, usando parte de seu legado para financiar projetos educacionais que, décadas depois, já impactaram dezenas de milhões de crianças brasileiras — a vitória mais duradoura de uma vida dedicada a ultrapassar limites.`
  },

  {
    id: 'oprah',
    author: 'Oprah Winfrey',
    cat: 'dificeis',
    title: 'Da pobreza no Mississippi à própria rede de TV',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oprah%20Winfrey%202019.jpg',
    excerpt: 'Uma infância marcada por dificuldades não impediu que se tornasse uma das comunicadoras mais influentes do mundo.',
    text: `Oprah Winfrey nasceu em 1954 em uma área rural do Mississippi, Estados Unidos, e passou boa parte da infância sendo criada pela avó, em condições de extrema pobreza — chegou a usar vestidos feitos de sacos de batata. Viveu ainda a adolescência marcada por abusos que só relataria publicamente décadas depois, e engravidou aos catorze anos, perdendo o bebê pouco depois do nascimento. Foi então morar com o pai, em Nashville, que impôs disciplina rígida e insistiu na educação como prioridade — uma virada decisiva em sua trajetória.

Encontrou na comunicação um caminho: ainda adolescente, começou a trabalhar em uma rádio local, e aos dezenove anos já era coapresentadora de telejornal, tornando-se uma das primeiras mulheres negras a ocupar esse posto na emissora. Em 1984, mudou-se para Chicago para assumir um programa matinal de baixa audiência, "AM Chicago" — que, sob seu comando, tornou-se líder de audiência em poucos meses e, em 1986, foi rebatizado "The Oprah Winfrey Show".

O programa se tornaria o talk show mais assistido da televisão americana por 25 anos consecutivos, abordando com empatia temas como abuso, saúde mental e superação — muitas vezes a partir de suas próprias experiências. Construiu um império de mídia que incluiu a produtora Harpo Productions e, mais tarde, a rede OWN, tornando-se a primeira mulher negra bilionária da história dos Estados Unidos. Também atuou no cinema, sendo indicada ao Oscar por "A Cor Púrpura", e fundou uma academia de liderança para meninas na África do Sul.

Ao longo da carreira, tornou-se conhecida por incentivar as pessoas a transformar suas próprias feridas em sabedoria, repetindo que a biografia de ninguém precisa ser seu destino. Sua trajetória — da escassez material e do silêncio imposto à liderança global e à própria voz — é hoje referência mundial para discussões sobre superação, representatividade e o poder de contar histórias.`
  },

  {
    id: 'freire',
    author: 'Paulo Freire',
    cat: 'educacao',
    title: 'O educador que ensinou o Brasil a ler o mundo',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Paulo%20Freire%201977%20close-up%20(cropped).jpg',
    excerpt: 'Criador de um método revolucionário de alfabetização, tornou-se o Patrono da Educação Brasileira.',
    text: `Paulo Freire nasceu em Recife, em 1921, em uma família de classe média que empobreceu com a crise econômica de 1929. Viveu na pele os efeitos da fome nesse período — chegou a ter dificuldades de aprendizagem na escola por causa da subnutrição —, uma experiência que marcaria para sempre sua convicção de que educação e desigualdade social são questões inseparáveis.

Formado em Direito, mas nunca chegou a exercer a advocacia: dedicou-se por completo à alfabetização de adultos. Em 1963, ficou nacionalmente conhecido após uma experiência em Angicos, no Rio Grande do Norte, onde alfabetizou 300 trabalhadores da cana-de-açúcar em apenas 45 dias, usando um método próprio baseado no diálogo e em palavras da realidade de cada aluno — e não na repetição mecânica de sílabas soltas.

Após o golpe militar de 1964, Freire foi preso por 70 dias, acusado de subversão, e em seguida exilado. Passou por Bolívia e Chile, trabalhou com a UNESCO e o Conselho Mundial de Igrejas em Genebra, e só pôde retornar ao Brasil em 1980, com a Lei da Anistia. Foi durante esse longo exílio que escreveu sua obra mais influente, "Pedagogia do Oprimido" (1968), hoje uma das obras de educação mais citadas do mundo. De volta ao país, chegou a ocupar o cargo de Secretário de Educação de São Paulo, entre 1989 e 1991, na gestão da prefeita Luiza Erundina.

Para Freire, educar era um ato de amor e também de coragem — e uma prática que deveria libertar, nunca domesticar: "Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção", escreveu em "Pedagogia da Autonomia". Reconhecido internacionalmente, com mais de 40 títulos honorários ao redor do mundo, Paulo Freire morreu em 1997. Em 2012, foi declarado Patrono da Educação Brasileira — um título que confirma oficialmente o que gerações de professores já sabiam.`
  },

  {
    id: 'mandela',
    author: 'Nelson Mandela',
    cat: 'dificeis',
    title: '27 anos de prisão e nenhum dia de ódio',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nelson%20Mandela.jpg',
    excerpt: 'Preso por lutar contra o apartheid, saiu da cadeia aos 71 anos para se tornar o primeiro presidente negro da África do Sul — pregando reconciliação, não vingança.',
    text: `Nelson Rolihlahla Mandela nasceu em 1918 na região do Transkei, na África do Sul, filho de um chefe do povo Thembu. Formou-se em Direito e, em 1943, filiou-se ao Congresso Nacional Africano (CNA), tornando-se uma das principais vozes contra o apartheid, o regime que segregava a população negra do país.

Em 1964, após ser acusado de sabotagem e conspiração contra o governo, foi condenado à prisão perpétua no julgamento de Rivonia. Passaria os 27 anos seguintes preso, a maior parte deles na ilha-presídio de Robben Island, submetido a trabalhos forçados e isolado da família. Mesmo assim, recusou repetidas propostas de liberdade condicional que exigiam abandonar a luta contra a segregação racial.

Solto em 1990, aos 71 anos, Mandela surpreendeu o mundo ao liderar as negociações para o fim do apartheid ao lado do então presidente F. W. de Klerk — com quem dividiria o Prêmio Nobel da Paz em 1993. Em 1994, tornou-se o primeiro presidente negro da África do Sul, eleito na primeira votação verdadeiramente democrática do país.

Em vez de perseguir vingança, Mandela criou a Comissão da Verdade e Reconciliação, dedicada a investigar os crimes do apartheid sem alimentar um novo ciclo de ódio. Sua autobiografia, "Longa Caminhada Até a Liberdade", tornou-se um dos maiores relatos de resistência e perdão já escritos. Mandela morreu em 2013, aos 95 anos, deixando um legado que redefiniu o que significa liderar através da reconciliação.`
  },

  {
    id: 'frankl',
    author: 'Viktor Frankl',
    cat: 'fe',
    title: 'O sentido encontrado dentro do horror',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Viktor%20Frankl2.jpg',
    excerpt: 'Sobrevivente de quatro campos de concentração nazistas, transformou a própria dor em uma das teorias mais influentes sobre o propósito de viver.',
    text: `Viktor Frankl nasceu em Viena, em 1905, e desde jovem se interessou por psiquiatria, chegando a trocar cartas com Sigmund Freud ainda na adolescência. Formou-se em medicina e dedicou-se ao estudo da mente humana, especialmente à questão que atravessaria toda a sua obra: o que dá sentido à vida de uma pessoa?

Em 1942, aos 37 anos, Frankl foi deportado com a família para campos de concentração nazistas. Passou por quatro deles, incluindo Auschwitz, e perdeu a esposa, os pais e o irmão no Holocausto. Foi justamente nesse cenário de extremo sofrimento que desenvolveu sua ideia central: mesmo privado de tudo, um ser humano mantém a liberdade de escolher a própria atitude diante das circunstâncias.

Após ser libertado em 1945, Frankl escreveu em poucos dias o livro "Em Busca de Sentido", relatando sua experiência nos campos e apresentando a logoterapia — a psicoterapia que criou, baseada na busca por um propósito como motor central da existência humana. A obra já teve mais de 40 edições apenas no Brasil e é considerada uma das mais influentes do século XX.

Frankl retomou a vida profissional como diretor do Hospital Policlínico de Viena e continuou escrevendo e dando palestras pelo mundo até sua morte, em 1997. Seu legado permanece atual: a convicção de que mesmo o sofrimento mais profundo pode ganhar sentido quando encontramos por que — e para quem — continuar.`
  },

  {
    id: 'michelle',
    author: 'Michelle Obama',
    cat: 'empoderamento',
    title: 'Da zona sul de Chicago à Casa Branca',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Michelle%20Obama%20official%20portrait%20headshot.jpg',
    excerpt: 'Criada em uma família de classe trabalhadora, tornou-se advogada, Primeira-Dama dos Estados Unidos e uma das vozes mais influentes sobre educação e empoderamento feminino no mundo.',
    text: `Michelle Robinson nasceu em 1964 na zona sul de Chicago, filha de um operário e de uma dona de casa. Cresceu em um apartamento pequeno dividido com os avós, em uma família que, apesar dos recursos limitados, valorizava profundamente a educação.

Michelle se destacou nos estudos desde cedo e foi aceita na Universidade de Princeton, uma das mais concorridas dos Estados Unidos, onde por vezes sentiu o peso de ser uma das poucas alunas negras em um ambiente majoritariamente branco e privilegiado. Formou-se também em Direito por Harvard e voltou a Chicago para trabalhar em um escritório de advocacia — onde conheceria um jovem estagiário chamado Barack Obama.

Ao longo da carreira, Michelle equilibrou a advocacia com cargos de gestão em hospitais e organizações sem fins lucrativos, sempre focada em conectar comunidades a oportunidades reais. Quando o marido se tornou o 44º presidente dos Estados Unidos, em 2008, ela assumiu o papel de Primeira-Dama e transformou a posição em plataforma: lançou iniciativas voltadas à educação de meninas ao redor do mundo e ao combate à obesidade infantil, sempre reforçando que a origem de alguém não precisa definir seus limites.

Em 2018, publicou a autobiografia "Minha História", que vendeu mais de 10 milhões de cópias e inspirou um documentário na Netflix. Michelle Obama segue sendo uma das defensoras mais ouvidas da ideia de que investir na educação de meninas e mulheres transforma sociedades inteiras.`
  },

  {
    id: 'trajano',
    author: 'Luiza Trajano',
    cat: 'negocios',
    title: 'Da vendedora de balcão à presidente de um império do varejo',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Luiza%20Helena%20Trajano.jpg',
    excerpt: 'Começou a trabalhar aos 12 anos na loja da família e se tornou uma das mulheres mais influentes dos negócios no Brasil, transformando uma pequena loja de presentes na gigante Magazine Luiza.',
    text: `Luiza Helena Trajano nasceu em 1951, em Franca, no interior de São Paulo. Aos 12 anos, durante as férias escolares, começou a ajudar na "Cristaleira", uma pequena loja de presentes fundada pelos tios. O que era só um jeito de ganhar seu próprio dinheiro se tornaria o início de uma carreira: "tive minha primeira poupança, e a partir daí nasceu uma vendedora", contaria depois.

Formada em Direito, Luiza assumiu a presidência da empresa da família — já rebatizada Magazine Luiza — em 1991. Modernizou o negócio à frente de seu tempo, criando as "Lojas Virtuais", que permitiam ao cliente comprar pelo computador produtos que não estavam na loja física, além da tradicional "Liquidação Fantástica", que até hoje é marca registrada da rede.

Sob sua liderança, o Magazine Luiza cresceu de uma rede regional para uma das maiores varejistas do Brasil, com mais de mil lojas físicas e um forte braço digital, tornando-se referência em gestão estudada até por Harvard. Luiza também se tornou uma das vozes mais respeitadas sobre liderança empática: acredita que um bom líder aprende a extrair o melhor de cada pessoa, em vez de apenas cobrar resultados.

Reconhecida pela Forbes como uma das mulheres mais poderosas do mundo dos negócios, Luiza Trajano fundou ainda o Grupo Mulheres do Brasil, reunindo dezenas de empresárias em torno do empreendedorismo feminino, e implementou na sua empresa um dos primeiros programas de trainee exclusivos para pessoas negras do país. Aos 12 anos vendendo no balcão, dificilmente imaginaria que se tornaria símbolo de que desafios, como ela mesma diz, são sempre oportunidades disfarçadas.`
  },

  {
    id: 'buffett',
    author: 'Warren Buffett',
    cat: 'financas',
    title: 'O menino que comprou as primeiras ações aos 11 anos',
    photo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Warren%20Buffett%20in%202010.jpg',
    excerpt: 'De entregador de jornais em Omaha ao investidor mais admiado do mundo, construiu sua fortuna com paciência, não com pressa.',
    text: `Warren Edward Buffett nasceu em 30 de agosto de 1930, em Omaha, Nebraska, filho de um corretor de ações que também foi congressista. Aos sete anos, pegou emprestado na biblioteca da cidade um livro chamado "Mil Maneiras de Ganhar Mil Dólares" — e nunca mais parou de pensar em dinheiro, não por ganância, mas por fascínio genuíno pelo funcionamento dos negócios.

Quando criança, vendia chicletes, refrigerantes e revistas de porta em porta, e trabalhava na mercearia do avô. Aos 11 anos, comprou suas primeiras ações — três papéis da Cities Service Preferred — e aprendeu, da forma mais dura, uma lição que guiaria toda a sua carreira: vendeu cedo demais, por um pequeno lucro, pouco antes de a ação disparar muito mais. Décadas depois, ainda citava esse episódio como uma das lições mais importantes da sua vida: paciência vale mais que pressa.

Aos 13 anos, já declarava imposto de renda. Aos 15, comprava máquinas de pinball com um amigo para distribuir em barbearias de Omaha, revendendo o pequeno negócio por 1.200 dólares pouco depois. Estudou administração na Universidade de Nebraska e, mais tarde, economia na Universidade de Columbia, onde teve como professor Benjamin Graham, o criador do conceito de "value investing" — comprar empresas sólidas por um preço justo e ter paciência para deixar o tempo trabalhar a favor do investidor.

Em 1956, fundou a Buffett Partnership, e em 1965 assumiu o controle da Berkshire Hathaway, então uma simples fábrica têxtil em dificuldades. Transformou a empresa em um dos maiores conglomerados do mundo, com participações em nomes como Coca-Cola, Apple e American Express, tornando-se conhecido como o "Oráculo de Omaha" — sempre morando na mesma casa simples que comprou em 1958.

Em 2010, ao lado de Bill Gates, criou o Giving Pledge, comprometendo-se a doar 99% de sua fortuna a causas filantrópicas. Em 2025, aos 94 anos, passou o cargo de CEO da Berkshire Hathaway a Greg Abel, permanecendo como presidente do conselho — encerrando seis décadas à frente da empresa, mas não o hábito de repetir, a cada entrevista, que sucesso no longo prazo se constrói com disciplina, não com atalhos.`
  },

  {
    id: 'marco_aurelio',
    author: 'Marco Aurélio',
    cat: 'filosofos',
    title: 'O imperador que escrevia para si mesmo',
    excerpt: 'No comando do maior império do mundo antigo, encontrava tempo à noite, em meio a guerras e epidemias, para lembrar a si mesmo como ser uma pessoa melhor.',
    text: `Marco Aurélio nasceu em Roma no ano 121, e foi criado para o poder desde cedo: adotado como herdeiro pelo imperador Antonino Pio, tornou-se imperador romano em 161, governando até sua morte em 180 — um dos chamados "cinco bons imperadores" de Roma.

Seu reinado esteve longe de ser tranquilo. Enfrentou guerras constantes nas fronteiras do império contra tribos germânicas, uma devastadora praga (a peste antonina, que matou milhões), enchentes e revoltas internas. Ainda assim, Marco Aurélio era, antes de tudo, um estudante devoto da filosofia estoica — a escola de pensamento que ensinava a distinguir entre o que está e o que não está sob nosso controle, e a manter a serenidade diante de ambos.

Durante campanhas militares nas fronteiras do império, à noite, Marco Aurélio escrevia anotações pessoais em grego — reflexões, lembretes, pequenos exercícios de autodisciplina que nunca foram pensados para publicação. Esses cadernos íntimos sobreviveram e se tornaram o livro "Meditações", hoje um dos textos de filosofia mais lidos do mundo, mais de 1.800 anos depois de escrito.

O que torna "Meditações" tão marcante é justamente o contraste: o homem mais poderoso do mundo conhecido escrevendo, sozinho, sobre humildade, sobre a brevidade da vida, sobre a importância de agir com virtude mesmo quando ninguém está observando. Ele lembrava a si mesmo, repetidamente, que o poder e a riqueza são passageiros, e que o único bem verdadeiro está no caráter de cada pessoa.

Marco Aurélio morreu em 180, provavelmente de peste, durante mais uma campanha militar na fronteira. Seu legado, porém, não foi o território que conquistou, mas as páginas que escreveu para ninguém além de si mesmo — e que hoje pertencem a qualquer pessoa disposta a lê-las.`
  },

  {
    id: 'maya',
    author: 'Maya Angelou',
    cat: 'empoderamento',
    title: 'A menina que ficou muda por cinco anos e depois deu voz a um país',
    excerpt: 'Abusada na infância, silenciou-se por anos — até encontrar na poesia a força para se tornar uma das vozes mais respeitadas dos Estados Unidos.',
    text: `Marguerite Annie Johnson nasceu em 1928 em St. Louis, Missouri, e passou boa parte da infância entre os pais separados e a avó, no Arkansas segregado do sul dos Estados Unidos. Aos sete anos, foi abusada sexualmente pelo namorado da mãe. Depois de revelar o crime e ver o homem preso — e assassinado dias depois, provavelmente por parentes da família —, a menina, sentindo-se culpada pela morte dele, parou de falar. Ficou praticamente muda por quase cinco anos.

Foi uma amiga da família, Bertha Flowers, quem a ajudou a encontrar o caminho de volta às palavras, apresentando-lhe grandes autores e incentivando-a a ler em voz alta. Maya recuperou a fala — e, com ela, descobriu uma paixão vitalícia pela literatura e pela poesia.

Ao longo da vida, foi dançarina, cantora, a primeira condutora de bonde negra de São Francisco, mãe adolescente, e mais tarde uma voz ativa do movimento pelos direitos civis, chegando a trabalhar ao lado de Martin Luther King Jr. e Malcolm X. Em 1969, publicou "Eu Sei Por Que o Pássaro Canta na Gaiola", autobiografia que relatava abertamente o abuso que sofrera — um livro revolucionário para a época, que se tornou leitura obrigatória em escolas americanas e também alvo de tentativas de proibição, justamente por sua franqueza.

Em 1993, Maya Angelou recitou seu poema "On the Pulse of Morning" na posse do presidente Bill Clinton, tornando-se a primeira poeta negra a fazer isso desde 1961. "Você pode encontrar muitas derrotas, mas não deve ser derrotado", costumava dizer — resumindo uma vida inteira dedicada a transformar silêncio em voz, e dor em sabedoria compartilhada. Morreu em 2014, aos 86 anos, autora de mais de trinta livros.`
  },

  {
    id: 'beauvoir',
    author: 'Simone de Beauvoir',
    cat: 'autorreconhecimento',
    title: 'A filósofa que reescreveu o que significa "ser mulher"',
    excerpt: 'Uma das mentes mais brilhantes de sua geração, desafiou a filosofia e a sociedade a repensarem completamente o papel da mulher.',
    text: `Simone de Beauvoir nasceu em Paris, em 1908, em uma família burguesa e católica que via com desconfiança sua inteligência precoce e seu desejo de estudar. Ainda assim, formou-se em filosofia e, em 1929, tornou-se uma das pessoas mais jovens da história a passar no rigoroso exame de agrégation, ficando em segundo lugar — atrás apenas de Jean-Paul Sartre, com quem manteria uma parceria intelectual e amorosa não convencional por 51 anos, sem nunca se casarem ou morarem juntos permanentemente.

Beauvoir lecionou filosofia, escreveu romances e ensaios, e em 1949 publicou sua obra mais influente: "O Segundo Sexo", um estudo extenso sobre a condição histórica e social das mulheres. Nele, cunhou a frase que se tornaria um dos pilares do pensamento feminista moderno: "Não se nasce mulher: torna-se mulher" — a ideia de que grande parte do que a sociedade considera "natureza feminina" é, na verdade, construção cultural. O livro foi imediatamente condenado pelo Vaticano e colocado no Index de livros proibidos pela Igreja Católica, o que só ampliou sua repercussão.

Em 1954, ganhou o Prêmio Goncourt, um dos mais importantes da literatura francesa, pelo romance "Os Mandarins". Ao longo da vida, permaneceu engajada em causas feministas, ajudando a fundar publicações e assinando manifestos por direitos das mulheres na França, em um período em que isso exigia coragem real.

Simone de Beauvoir morreu em 1986, aos 78 anos, e está sepultada ao lado de Sartre no cemitério de Montparnasse, em Paris. Sua obra continua sendo referência obrigatória para entender como identidade e papel social se constroem — e como é possível, como ela mesma fez, questionar tudo o que parece "natural".`
  },

  {
    id: 'jobs',
    author: 'Steve Jobs',
    cat: 'negocios',
    title: 'Demitido da própria empresa, voltou para reinventá-la',
    excerpt: 'Cofundador da Apple ainda jovem, foi expulso da própria criação — e retornou mais de uma década depois para transformá-la na empresa mais valiosa do mundo.',
    text: `Steven Paul Jobs nasceu em 1955 em São Francisco e foi dado para adoção ainda bebê. Entrou na faculdade de Reed College, mas abandonou o curso formal após seis meses — continuando, porém, a frequentar informalmente aulas que lhe interessavam, como uma de caligrafia, que anos depois inspiraria a atenção da Apple à tipografia em seus produtos.

Em 1976, aos 21 anos, fundou a Apple ao lado de Steve Wozniak, literalmente na garagem da casa de seus pais, montando computadores pessoais em um mercado que praticamente não existia ainda. A empresa cresceu rapidamente, mas em 1985, após disputas internas de poder, Jobs foi afastado da própria companhia que ajudara a criar.

Em vez de desistir, fundou a NeXT, uma nova empresa de computadores, e comprou uma pequena divisão de efeitos visuais da Lucasfilm que se tornaria a Pixar — responsável, anos depois, por "Toy Story", o primeiro longa de animação totalmente digital da história.

Em 1997, a Apple, então à beira da falência, comprou a NeXT — e Jobs voltou à empresa que o havia demitido, assumindo o comando pouco depois. Na década seguinte, liderou o lançamento do iMac, do iPod, do iPhone e do iPad, produtos que redefiniram indústrias inteiras e transformaram a Apple na empresa mais valiosa do mundo.

Em 2003, foi diagnosticado com um câncer no pâncreas. Mesmo doente, seguiu trabalhando e, em 2005, fez um dos discursos de formatura mais citados da história, na Universidade Stanford, no qual disse: "Seu tempo é limitado; não o desperdice vivendo a vida de outra pessoa." Morreu em 2011, aos 56 anos, deixando um legado que prova que ser afastado do próprio projeto não precisa ser o fim — pode ser, como em seu caso, o início do capítulo mais importante.`
  },

  {
    id: 'rosaparks',
    author: 'Rosa Parks',
    cat: 'politica',
    title: 'A costureira que, sentada, colocou um país de pé',
    excerpt: 'Ao se recusar a ceder seu lugar no ônibus, desencadeou um boicote de mais de um ano que mudou o rumo dos direitos civis nos Estados Unidos.',
    text: `Rosa Louise McCauley Parks nasceu em 1913 no Alabama, Estados Unidos, em uma época e região onde leis de segregação racial obrigavam pessoas negras a ceder lugares a passageiros brancos em transportes públicos. Costureira e ativista havia anos na seção local da NAACP (Associação Nacional para o Progresso das Pessoas de Cor), Rosa já vinha estudando de perto casos de resistência à segregação.

Em primeiro de dezembro de 1955, voltando do trabalho em Montgomery, recusou-se a ceder seu assento a um passageiro branco quando o motorista exigiu. Foi presa por isso. A prisão gerou revolta imediata na comunidade negra da cidade, que organizou, em poucos dias, um boicote aos ônibus municipais — coordenado por um jovem pastor até então pouco conhecido chamado Martin Luther King Jr.

O boicote durou 381 dias, quase todos os dias enfrentando o inverno e o calor a pé ou em carona organizada, até que a Suprema Corte dos Estados Unidos declarou inconstitucional a segregação nos ônibus. O episódio se tornou um marco fundador do movimento pelos direitos civis americano, catapultando King à liderança nacional e mostrando ao país o poder da resistência organizada e pacífica.

Rosa Parks pagou um preço alto por seu gesto: perdeu o emprego, recebeu ameaças de morte e precisou se mudar para Detroit. Ainda assim, seguiu ativa no movimento pelos direitos civis pelo resto da vida, recebendo, décadas depois, a Medalha Presidencial da Liberdade (1996) e a Medalha de Ouro do Congresso (1999), as duas maiores honrarias civis dos Estados Unidos. Morreu em 2005, aos 92 anos, e seu corpo foi velado sob a cúpula do Capitólio em Washington — a primeira mulher da história a receber essa honra.`
  },

  {
    id: 'annefrank',
    author: 'Anne Frank',
    cat: 'dificeis',
    title: 'A voz de uma menina que sobreviveu ao esconderijo através de um diário',
    excerpt: 'Escondida durante a ocupação nazista, registrou em um diário pensamentos que, décadas depois, ainda ensinam sobre esperança em meio ao horror.',
    text: `Annelies Marie Frank nasceu em Frankfurt, Alemanha, em 1929, em uma família judia que se mudou para Amsterdã, na Holanda, em 1934, fugindo da perseguição nazista já crescente. Quando a Alemanha ocupou a Holanda durante a Segunda Guerra Mundial e as perseguições aos judeus se intensificaram, a família Frank passou a viver escondida, em julho de 1942, em um esconderijo secreto atrás da empresa do pai — um espaço que ficaria conhecido como "Anexo Secreto".

Foi ali, entre os treze e os quinze anos de idade, que Anne escreveu, quase diariamente, em um caderno que ganhara de presente de aniversário pouco antes de se esconder. Registrava o cotidiano apertado da vida escondida junto a outras sete pessoas, seus medos, suas brigas e reconciliações familiares, seus sonhos de se tornar escritora — e reflexões sobre a natureza humana notavelmente maduras para sua idade.

Em agosto de 1944, o esconderijo foi descoberto, provavelmente após uma denúncia nunca totalmente esclarecida. A família foi deportada para campos de concentração. Anne e sua irmã Margot morreram de tifo no campo de Bergen-Belsen em 1945, apenas semanas antes de o campo ser libertado pelas tropas aliadas — Anne tinha 15 anos.

Seu pai, Otto Frank, o único sobrevivente da família, encontrou o diário preservado por uma das pessoas que os ajudara a se esconder e decidiu publicá-lo, atendendo a um desejo que a própria Anne expressara. "O Diário de Anne Frank" tornou-se um dos livros mais lidos do século XX, traduzido para mais de 70 idiomas, e transformou uma história pessoal de perseguição em um testemunho universal contra o ódio — prova de que mesmo a voz mais jovem, registrada em segredo, pode atravessar gerações.`
  },

  {
    id: 'beethoven',
    author: 'Ludwig van Beethoven',
    cat: 'autorreconhecimento',
    title: 'O compositor que criou sua obra mais famosa já surdo',
    excerpt: 'Perdeu progressivamente a audição no auge da carreira, mas recusou-se a abandonar a composição — e criou algumas de suas maiores obras já completamente surdo.',
    text: `Ludwig van Beethoven nasceu em Bonn, na atual Alemanha, em 1770, filho de um músico da corte que o submeteu a treinamento musical rigoroso e, muitas vezes, abusivo desde muito cedo, na esperança de criar um novo prodígio como Mozart. Ainda assim, Beethoven desenvolveu um talento genuíno e se mudou para Viena aos 21 anos, onde rapidamente se tornou um dos compositores e pianistas mais respeitados da cidade.

Por volta dos 26 anos, começou a notar um zumbido constante nos ouvidos e perda progressiva da audição — uma condição que os médicos da época não souberam tratar nem explicar com precisão. Para um compositor e pianista virtuoso, o diagnóstico era devastador. Em 1802, chegou a escrever uma carta aos irmãos, hoje conhecida como "Testamento de Heiligenstadt", revelando pensamentos de desespero profundo e até de suicídio diante da perspectiva de viver sem poder ouvir sua própria música.

Beethoven, no entanto, não abandonou a composição. Pelo contrário: nas duas décadas seguintes, já com a audição cada vez mais comprometida, compôs algumas de suas obras mais ambiciosas e duradouras, incluindo a Quinta e a Nona Sinfonias. Esta última, que inclui o famoso "Hino à Alegria", foi composta quando Beethoven já estava completamente surdo — ele a regeu pessoalmente em sua estreia, em 1824, e só percebeu que a plateia aplaudia de pé quando alguém o virou para que visse a ovação, já que não conseguia ouvi-la.

Beethoven morreu em 1827, aos 56 anos, reconhecido como um dos maiores compositores de todos os tempos. Sua trajetória — criar sua obra mais celebrada justamente depois de perder o sentido que, para qualquer músico, pareceria indispensável — segue sendo um dos exemplos mais citados de como a determinação pode superar até mesmo a mais cruel das limitações.`
  },

  {
    id: 'helenkeller',
    author: 'Helen Keller',
    cat: 'dificeis',
    title: 'Surdocega desde bebê, tornou-se uma das intelectuais mais influentes do século 20',
    excerpt: 'Perdeu a visão e a audição antes de completar dois anos — e, ainda assim, aprendeu a se comunicar, formou-se na universidade e se tornou escritora e ativista mundialmente respeitada.',
    text: `Helen Keller nasceu em 1880 no Alabama, Estados Unidos. Aos dezenove meses de idade, uma doença — hoje presume-se que tenha sido escarlatina ou meningite — deixou-a completamente surda e cega. Sem conseguir ver, ouvir ou, consequentemente, aprender a falar de forma convencional, Helen cresceu isolada, comunicando-se por gestos rudimentares e frequentemente tomada por crises de frustração diante da própria incapacidade de se expressar.

Tudo mudou em 1887, quando a família contratou Anne Sullivan, uma jovem professora com deficiência visual parcial, para trabalhar com a menina, então com sete anos. Sullivan desenvolveu um método de soletrar palavras na palma da mão de Helen. A virada aconteceu em uma manhã célebre, quando Sullivan bombeava água de um poço sobre uma das mãos de Helen enquanto soletrava "água" na outra — e Helen, subitamente, compreendeu que aquele gesto tinha um nome, e que tudo ao seu redor também tinha.

A partir daquele momento, Helen aprendeu a ler em braile, a escrever e, com enorme esforço, até a falar. Formou-se em 1904 no Radcliffe College, tornando-se a primeira pessoa surdocega a obter um diploma universitário nos Estados Unidos. Tornou-se escritora, publicando mais de doze livros, e uma ativista incansável pelos direitos de pessoas com deficiência, pelo sufrágio feminino e por causas trabalhistas, viajando o mundo e se correspondendo com líderes políticos e intelectuais de sua época.

"O caráter não pode ser desenvolvido na tranquilidade e facilidade. Somente através da experiência de provação e sofrimento a alma pode ser fortalecida", escreveu. Helen Keller morreu em 1968, aos 87 anos, depois de décadas dedicadas a provar, com a própria vida, que limitações físicas não precisam limitar o alcance de uma mente.`
  },

  {
    id: 'gandhi',
    author: 'Mahatma Gandhi',
    cat: 'fe',
    title: 'A resistência sem violência que libertou um país',
    excerpt: 'Advogado formado na Inglaterra, desenvolveu na África do Sul e aplicou na Índia um método de resistência pacífica que se tornaria referência mundial.',
    text: `Mohandas Karamchand Gandhi nasceu em 1869 em Porbandar, na Índia, então colônia britânica. Formou-se em Direito em Londres e, em 1893, mudou-se para a África do Sul para trabalhar como advogado, onde viveria por 21 anos e sofreria, na pele, a discriminação racial imposta aos indianos pelo regime colonial britânico — incluindo o episódio em que foi expulso à força de um vagão de trem de primeira classe, apesar de ter passagem válida, por ser indiano.

Foi na África do Sul que Gandhi desenvolveu e testou pela primeira vez o conceito de satyagraha, muitas vezes traduzido como "resistência pacífica" ou "força da verdade": a ideia de resistir à injustiça sem recorrer à violência, através de desobediência civil, greves e protestos organizados, mesmo sob repressão.

Ao retornar à Índia em 1915, Gandhi aplicou esse método na luta pela independência do país frente ao domínio britânico, liderando campanhas como a Marcha do Sal, em 1930 — uma caminhada de 24 dias e cerca de 390 quilômetros até o mar, para produzir sal ilegalmente e desafiar o monopólio britânico sobre o produto, em um dos atos de desobediência civil mais simbólicos do século 20.

A Índia conquistou a independência em 1947, em grande parte graças ao movimento que Gandhi ajudou a liderar por décadas — embora ele mesmo lamentasse profundamente a violenta partição entre Índia e Paquistão que acompanhou o processo. Em janeiro de 1948, poucos meses após a independência, Gandhi foi assassinado a tiros por um extremista hindu que discordava de sua postura conciliadora com os muçulmanos. Seu método de resistência não violenta influenciaria diretamente líderes posteriores como Martin Luther King Jr. e Nelson Mandela, provando que é possível confrontar impérios sem empunhar uma única arma.`
  },

  {
    id: 'confucio',
    author: 'Confúcio',
    cat: 'filosofos',
    title: 'O professor sem cargo que moldou o pensamento de toda uma civilização',
    excerpt: 'Viveu como um funcionário público de sucesso modesto e um mestre itinerante — mas suas ideias sobre ética e governo guiaram a China por mais de dois mil anos.',
    text: `Confúcio, cujo nome original era Kong Qiu, nasceu por volta de 551 a.C. no estado de Lu, na China, em uma família que havia perdido posição social e recursos após a morte do pai, ainda quando ele era criança. Cresceu em condições modestas e dedicou-se aos estudos e aos rituais tradicionais chineses, tornando-se, com o tempo, um estudioso respeitado.

Ao longo da vida, Confúcio ocupou alguns cargos públicos administrativos, mas sua ambição maior — influenciar governantes a adotarem um governo baseado em virtude, ética e no exemplo pessoal do líder — nunca se realizou plenamente em vida. Passou anos viajando entre diferentes estados chineses, oferecendo conselhos a governantes que raramente os seguiam à risca, e reunindo, ao longo do caminho, um grupo crescente de discípulos.

Foi como professor, mais do que como estadista, que Confúcio encontrou seu verdadeiro impacto. Ensinava que qualquer pessoa, independentemente de nascimento ou riqueza, poderia se aperfeiçoar moralmente através do estudo e da prática — uma ideia notavelmente democrática para sua época. Seus ensinamentos, registrados por discípulos após sua morte no livro "Analectos", abordavam temas como o respeito aos mais velhos, a importância da educação, a integridade pessoal e o bom governo.

Confúcio morreu por volta de 479 a.C., considerando, segundo relatos posteriores, que sua vida havia sido um fracasso político. A história discordaria profundamente dele: nos séculos seguintes, o confucionismo se tornaria a base filosófica e ética oficial da China por mais de dois milênios, influenciando não apenas a política chinesa, mas também a cultura de Coreia, Japão e Vietnã — um professor sem cargo relevante que, ainda assim, moldou a civilização de bilhões de pessoas depois dele.`
  },

  {
    id: 'hawking',
    author: 'Stephen Hawking',
    cat: 'dificeis',
    title: 'Diagnosticado com poucos anos de vida, viveu mais cinco décadas revolucionando a física',
    excerpt: 'Aos 21 anos, recebeu um diagnóstico que lhe dava dois anos de vida. Viveu mais 55, tornando-se um dos físicos mais influentes da história mesmo sem conseguir mover o corpo ou falar sem auxílio.',
    text: `Stephen Hawking nasceu em Oxford, na Inglaterra, em 1942, e demonstrou desde jovem grande talento para matemática e física, ingressando na Universidade de Cambridge para seu doutorado. Aos 21 anos, ainda estudante, começou a notar sintomas estranhos — perda de coordenação, quedas frequentes — que o levaram a um diagnóstico devastador: esclerose lateral amiotrófica (ELA), doença degenerativa que ataca os neurônios motores. Os médicos da época lhe deram cerca de dois anos de vida.

Hawking viveria, na verdade, mais 55 anos. A doença progrediu lentamente, tirando-lhe gradualmente o controle sobre o próprio corpo até deixá-lo quase totalmente paralisado, e uma traqueostomia de emergência em 1985 tirou-lhe também a capacidade de falar. A partir de então, comunicava-se através de um sintetizador de voz controlado por pequenos movimentos musculares — inicialmente da mão, depois, conforme a doença avançava, apenas de um músculo da bochecha.

Foi justamente durante essas décadas, confinado a uma cadeira de rodas e comunicando-se palavra por palavra através de um computador, que Hawking produziu suas contribuições mais importantes à física teórica, especialmente sobre buracos negros e a origem do universo. Seu livro de divulgação científica "Uma Breve História do Tempo" (1988) vendeu mais de dez milhões de cópias, tornando conceitos complexos de cosmologia acessíveis ao público geral e tornando-o uma das figuras científicas mais reconhecidas do mundo.

Hawking recusava-se a permitir que a doença definisse sua identidade ou limitasse suas ambições: continuou lecionando, publicando e viajando — inclusive experimentando gravidade zero em um voo especial aos 65 anos — até sua morte em 2018, aos 76 anos. Sua trajetória permanece como um dos exemplos mais citados de como a mente pode continuar expandindo fronteiras mesmo quando o corpo impõe os limites mais severos.`
  },

  {
    id: 'rowling',
    author: 'J.K. Rowling',
    cat: 'motivacao',
    title: 'Rejeitada por doze editoras, criou uma das maiores histórias já contadas',
    excerpt: 'Mãe solo, desempregada e vivendo de auxílio governamental, escreveu o primeiro livro de Harry Potter em cafés — e foi recusada repetidas vezes antes de mudar a literatura infantojuvenil para sempre.',
    text: `Joanne Rowling nasceu em 1965 na Inglaterra e teve a ideia central da saga Harry Potter em 1990, durante um atraso de trem entre Manchester e Londres — mas levaria anos até que a história ganhasse forma. No período em que escrevia, enfrentava uma sequência de dificuldades pessoais: o fim de um casamento breve e conturbado, o nascimento da filha, e um período vivendo com o mínimo de auxílio governamental disponível no Reino Unido, o que ela mesma descreveria depois como "tão pobre quanto é legalmente possível ser" sem estar em situação de rua.

Escrevia grande parte do primeiro livro, "Harry Potter e a Pedra Filosofal", em cafés de Edimburgo, muitas vezes enquanto a filha pequena dormia ao lado no carrinho de bebê, já que o apartamento onde morava não tinha aquecimento suficiente. Quando finalmente terminou o manuscrito, o enviou a diversas agências literárias e editoras — sendo rejeitada por doze delas antes que a Bloomsbury, uma pequena editora britânica, decidisse publicá-lo, em 1997, com uma tiragem inicial de apenas 500 exemplares.

O livro se tornou um fenômeno mundial quase da noite para o dia. A saga completa, com sete volumes, venderia mais de 500 milhões de cópias ao redor do mundo, seria traduzida para mais de 80 idiomas e geraria uma das franquias de cinema mais lucrativas da história, transformando Rowling, que poucos anos antes dependia de auxílio social, em uma das autoras mais bem-sucedidas financeiramente do mundo.

Rowling costuma falar abertamente sobre como aqueles anos difíceis moldaram a própria história que escreveu — o tema da perseverança diante da perda e da adversidade permeia toda a saga. Sua trajetória segue sendo citada como um dos exemplos mais conhecidos de como a persistência diante de rejeições consecutivas pode, eventualmente, dar certo de formas que ninguém — nem doze editoras — conseguiu prever.`
  },

  {
    id: 'mlk',
    author: 'Martin Luther King Jr.',
    cat: 'politica',
    title: 'O pastor que sonhou em voz alta com um país mais justo',
    excerpt: 'Liderou o movimento pelos direitos civis nos Estados Unidos com discursos e resistência pacífica, sabendo que sua luta poderia lhe custar a vida — como de fato custou.',
    text: `Martin Luther King Jr. nasceu em 1929 em Atlanta, Geórgia, filho e neto de pastores batistas, em um país onde leis de segregação racial separavam pessoas negras e brancas em praticamente todos os espaços públicos do sul dos Estados Unidos. Formou-se em teologia e tornou-se pastor ainda jovem, mas seria através do ativismo, não do púlpito, que deixaria sua marca mais duradoura.

Em 1955, aos 26 anos, foi escolhido para liderar o boicote aos ônibus de Montgomery, desencadeado pela prisão de Rosa Parks — sua primeira grande atuação pública, que durou 381 dias e terminou com a proibição judicial da segregação nos ônibus da cidade. A partir daí, King se tornou a principal voz do movimento pelos direitos civis americano, defendendo consistentemente a resistência não violenta como método de luta, inspirado diretamente pelas ideias de Gandhi.

Ao longo da década seguinte, liderou marchas, foi preso mais de vinte vezes, sofreu ameaças constantes e teve sua casa bombardeada — mas manteve o compromisso com a não violência mesmo diante da violência que recebia. Em agosto de 1963, discursou para mais de 250 mil pessoas em Washington, proferindo seu famoso discurso "Eu Tenho um Sonho", um dos mais estudados e citados da história americana. Em 1964, tornou-se, aos 35 anos, a pessoa mais jovem a receber o Prêmio Nobel da Paz até então.

Em 4 de abril de 1968, King foi assassinado a tiros em Memphis, Tennessee, aos 39 anos, enquanto apoiava uma greve de trabalhadores sanitários. Sua morte gerou ondas de protestos e luto por todo o país. Décadas depois, seus discursos e sua defesa incansável da justiça através de meios pacíficos seguem sendo referência global para movimentos de direitos civis — prova de que palavras ditas com convicção e coragem podem, mesmo à custa de tudo, mudar o rumo de uma nação.`
  },

  {
    id: 'curie',
    author: 'Marie Curie',
    cat: 'educacao',
    title: 'A única pessoa a vencer dois Prêmios Nobel em ciências diferentes',
    excerpt: 'Impedida de estudar na própria terra natal por ser mulher, mudou-se sozinha para Paris — e se tornou a maior cientista de sua geração, vencendo o Nobel duas vezes.',
    text: `Maria Salomea Skłodowska nasceu em Varsóvia, na Polônia, em 1867, então sob domínio do Império Russo, que proibia mulheres de frequentar universidades formalmente. Determinada a estudar ciências, participou de uma espécie de "universidade clandestina" organizada secretamente por poloneses, e trabalhou anos como governanta para juntar dinheiro e, finalmente, se mudar para Paris em 1891, onde poderia estudar livremente na Sorbonne.

Vivendo com recursos extremamente limitados — chegou a desmaiar de fome durante os estudos —, formou-se em física e matemática com notas excepcionais. Foi em Paris que conheceu Pierre Curie, físico com quem se casaria e formaria uma parceria científica extraordinária, dedicando-se juntos ao estudo da radioatividade, termo que a própria Marie cunhou.

Em 1898, o casal descobriu dois novos elementos químicos: o polônio, batizado em homenagem à terra natal de Marie, e o rádio. Em 1903, Marie Curie tornou-se a primeira mulher a receber um Prêmio Nobel, dividindo o de Física com Pierre e com Henri Becquerel. Após a morte trágica de Pierre, atropelado por uma carruagem em 1906, Marie assumiu sua cátedra na Sorbonne, tornando-se a primeira mulher a lecionar na instituição em toda a sua história. Em 1911, recebeu um segundo Nobel, desta vez em Química — até hoje, é a única pessoa da história a vencer o prêmio em duas ciências diferentes.

Durante a Primeira Guerra Mundial, desenvolveu unidades móveis de raio-x para atender soldados feridos no front, salvando incontáveis vidas. Marie Curie morreu em 1934, de anemia aplástica, provavelmente causada pela exposição prolongada à radiação com a qual trabalhou — sem os equipamentos de proteção que hoje sabemos serem necessários. Seus cadernos de pesquisa, ainda radioativos quase um século depois, precisam ser manuseados com proteção especial até hoje — um lembrete físico do quanto sua dedicação à ciência exigiu, literalmente, seu próprio corpo.`
  },

  {
    id: 'suassuna',
    author: 'Ariano Suassuna',
    cat: 'filosofos',
    title: 'O escritor que transformou a cultura popular nordestina em arte erudita',
    excerpt: 'Dramaturgo, romancista e um dos grandes pensadores brasileiros, dedicou a vida a provar que a cultura popular do sertão merecia o mesmo respeito que a alta literatura europeia.',
    text: `Ariano Vilar Suassuna nasceu em 1927 em João Pessoa, Paraíba, e teve a infância marcada por uma tragédia: aos dois anos de idade, perdeu o pai, então governador do estado, assassinado em uma emboscada política. Cresceu no interior de Pernambuco, imerso na cultura popular nordestina — a literatura de cordel, o teatro de mamulengos, as festas religiosas e as tradições orais do sertão — que se tornariam a matéria-prima de toda a sua obra futura.

Formou-se em Direito no Recife, mas dedicou a vida à literatura e ao teatro. Em 1955, escreveu sua obra mais célebre, "Auto da Compadecida", uma peça que mistura humor popular, crítica social e elementos religiosos e folclóricos nordestinos, tornando-se um dos textos mais encenados e adaptados do teatro brasileiro, incluindo adaptações para cinema e televisão que se tornaram parte do imaginário cultural do país.

Suassuna foi também o criador do conceito de "Movimento Armorial", nos anos 1970, um esforço deliberado para valorizar e legitimizar a arte popular nordestina — cordel, xilogravura, música de rabeca — como manifestações artísticas eruditas, tão dignas de estudo e apreciação quanto qualquer tradição europeia. Para ele, a verdadeira identidade cultural brasileira nascia justamente do encontro entre as tradições ibérica, indígena e africana que formaram o sertão.

Professor universitário por décadas na Universidade Federal de Pernambuco, tornou-se também uma figura pública querida por seu jeito espontâneo e suas falas afiadas em entrevistas, quase sempre defendendo a cultura popular contra o que considerava um preconceito das elites culturais do eixo Rio-São Paulo. Morreu em 2014, aos 87 anos, deixando uma obra que continua provando que a sabedoria e a beleza não têm endereço fixo — podem nascer tanto em Paris quanto no sertão da Paraíba.`
  },

  {
    id: 'chicoxavier',
    author: 'Chico Xavier',
    cat: 'fe',
    title: 'O médium que dedicou a vida inteira a nunca cobrar pelo próprio trabalho',
    excerpt: 'Autor de mais de 400 livros ao longo de décadas, doou integralmente os direitos autorais de sua obra para instituições de caridade, vivendo com extrema simplicidade até o fim da vida.',
    text: `Francisco Cândido Xavier nasceu em 1910 em Pedro Leopoldo, Minas Gerais, e teve uma infância marcada pela pobreza e pela perda precoce da mãe, ainda criança, sendo criado depois por uma madrasta e, mais tarde, por parentes. Trabalhou desde jovem em empregos simples — chegou a trabalhar em uma fábrica de tecidos — enquanto desenvolvia o que viria a se tornar sua atividade central pelo resto da vida: a produção de textos que atribuía à psicografia, prática associada ao espiritismo em que o médium escreveria mensagens supostamente ditadas por espíritos desencarnados.

Ao longo de mais de seis décadas de atividade pública, Chico Xavier psicografou mais de 400 livros, em diferentes gêneros — poesia, romance, mensagens espirituais —, sendo "Nosso Lar", de 1943, um dos mais conhecidos e posteriormente adaptado para o cinema. Independentemente da interpretação que cada pessoa faça sobre a origem de sua obra, o fato é que ela se tornou um fenômeno editorial: alguns de seus livros venderam milhões de exemplares no Brasil.

Um dos aspectos mais marcantes de sua trajetória foi sua relação com o dinheiro: Chico Xavier nunca cobrou pelas sessões de psicografia e destinou integralmente os direitos autorais de todos os seus livros a instituições beneficentes, vivendo, ele mesmo, com extrema simplicidade em Uberaba, Minas Gerais, onde também mantinha atividades de assistência social a famílias pobres da região.

Chico Xavier morreu em 2002, aos 92 anos, sendo considerado por adeptos do espiritismo um dos maiores médiuns da história e, mesmo por muitos que discordam dessa interpretação, uma figura de generosidade pessoal difícil de contestar. "Gostaria de dizer para você que viva como quem sabe que vai morrer um dia, e ame como quem nunca se decepcionou", escreveu — uma frase que resume o espírito de simplicidade e doação que marcou toda a sua vida pública.`
  },

  {
    id: 'chanel',
    author: 'Coco Chanel',
    cat: 'empoderamento',
    title: 'Do orfanato à criação de um dos maiores impérios da moda mundial',
    excerpt: 'Criada em um orfanato onde aprendeu a costurar, revolucionou a moda feminina ao libertar as mulheres de espartilhos e criar peças pensadas para o conforto e a liberdade de movimento.',
    text: `Gabrielle Bonheur Chanel nasceu em 1883 na França, em condições humildes. Após a morte da mãe, quando tinha doze anos, seu pai a deixou, junto às irmãs, em um orfanato administrado por freiras em Aubazine, onde permaneceria até os dezoito anos. Foi ali, aprendendo costura com as freiras, que desenvolveu as habilidades técnicas que usaria mais tarde — embora sua vida futura seguisse um caminho bem distante da religiosidade do orfanato.

O apelido "Coco" surgiu de sua breve carreira como cantora em cafés-concerto, ainda jovem. Com o apoio financeiro de alguns relacionamentos, abriu sua primeira loja de chapéus em Paris em 1910, expandindo depois para roupas. Sua grande virada veio ao rejeitar os espartilhos e silhuetas extremamente restritivas que dominavam a moda feminina da época, propondo, em vez disso, roupas mais simples, confortáveis e práticas — incluindo a popularização de calças para mulheres e o icônico "vestidinho preto", que se tornaria um dos itens mais duradouros da moda ocidental.

Em 1921, lançou o perfume Chanel Nº 5, que se tornaria um dos mais vendidos e reconhecidos do mundo, e ao longo das décadas seguintes construiu um império de moda que incluía roupas, joias e acessórios, tornando-se uma das mulheres mais ricas e influentes de sua geração em uma indústria historicamente dominada por homens em posições de poder.

Coco Chanel morreu em 1971, aos 87 anos, ainda trabalhando ativamente na casa que fundara. "Uma mulher deve ser duas coisas: quem e o que ela quiser", dizia — uma filosofia que ela mesma viveu, transformando uma infância de perdas e um orfanato de freiras no início de um dos nomes mais reconhecidos da moda mundial até hoje.`
  },

  {
    id: 'earhart',
    author: 'Amelia Earhart',
    cat: 'motivacao',
    title: 'A primeira mulher a cruzar o Atlântico sozinha em um avião',
    excerpt: 'Em uma época em que a aviação era dominada por homens, quebrou recordes atrás de recordes — até desaparecer em uma tentativa de voar ao redor do mundo.',
    text: `Amelia Earhart nasceu em 1897 no Kansas, Estados Unidos, e teve o primeiro contato com um avião aos 23 anos, em uma exibição aérea — experiência que descreveria depois como o momento em que soube que precisava aprender a voar. Começou as aulas pouco depois, trabalhando em diversos empregos para pagar as lições, em uma época em que pilotar avião era considerado, quase exclusivamente, atividade masculina.

Em 1928, tornou-se a primeira mulher a cruzar o Oceano Atlântico de avião, ainda que como passageira, o que já lhe rendeu fama internacional. Não satisfeita, dedicou-se a repetir o feito pilotando ela mesma a aeronave — o que conseguiu em 1932, tornando-se a primeira mulher a cruzar o Atlântico sozinha em um voo, replicando o percurso que Charles Lindbergh havia feito cinco anos antes. O feito a transformou em uma celebridade mundial e em símbolo do movimento pela igualdade de gênero, sendo também uma defensora ativa da causa em discursos e escritos.

Ao longo da década seguinte, Earhart quebrou uma sequência de recordes de aviação, sempre buscando o próximo desafio. Em 1937, aos 39 anos, embarcou em uma tentativa ambiciosa: circundar o globo de avião pela linha do equador, o trajeto mais longo já tentado. Durante uma das etapas finais, sobre o Oceano Pacífico, seu avião perdeu contato com a base e desapareceu, sem que destroços conclusivos jamais fossem encontrados até hoje, apesar de inúmeras buscas e expedições ao longo das décadas seguintes.

O desaparecimento de Amelia Earhart permanece um dos maiores mistérios da aviação. Seu legado, porém, é claro: abriu caminho para gerações de mulheres pilotos e se tornou, para além da aviação, um símbolo duradouro de que "a questão não é quem vai me deixar; é quem vai me impedir" — uma atitude que ela viveu literalmente até o último voo.`
  },

  {
    id: 'ali',
    author: 'Muhammad Ali',
    cat: 'motivacao',
    title: 'Perdeu o título por recusar a guerra — e voltou mais forte',
    excerpt: 'Tricampeão mundial dos pesos-pesados, teve o título retirado e a carreira suspensa por três anos ao recusar servir no Vietnã. Voltou e reconquistou tudo.',
    text: `Cassius Marcellus Clay Jr. nasceu em 1942 em Louisville, Kentucky, Estados Unidos, e começou a boxear aos doze anos, depois que sua bicicleta foi roubada e um policial local, ao ouvi-lo jurar vingança, sugeriu que ele aprendesse a lutar primeiro. Rapidamente se destacou no boxe amador, conquistando a medalha de ouro nos pesos-meio-pesados nas Olimpíadas de Roma, em 1960, aos dezoito anos.

Tornou-se profissional e, em 1964, aos 22 anos, venceu Sonny Liston em uma vitória surpreendente para se tornar campeão mundial dos pesos-pesados. Pouco depois, anunciou sua conversão ao Islã e a mudança de nome para Muhammad Ali, decisão controversa na época que muitos veículos de imprensa americanos inicialmente se recusaram a respeitar.

Em 1967, no auge da Guerra do Vietnã, Ali recusou-se a se alistar no exército americano, alegando objeção de consciência baseada em suas convicções religiosas e afirmando publicamente não ter motivos para lutar contra um povo que não o havia agredido. A recusa lhe custou caro: foi imediatamente despojado do título mundial, teve a licença de boxeador cassada em vários estados americanos e ficou impedido de lutar profissionalmente por quase quatro anos, no que deveria ter sido o auge de sua carreira, além de enfrentar um processo criminal que só seria revertido pela Suprema Corte em 1971.

Ali retornou aos ringues em 1970 e, ao longo da década seguinte, reconquistaria o título mundial por duas vezes, incluindo a lendária luta "Rumble in the Jungle" contra George Foreman, no Zaire, em 1974. Tornou-se o primeiro lutador da história a ser campeão mundial dos pesos-pesados três vezes. Diagnosticado com Parkinson na década de 1980, permaneceu como uma das figuras públicas mais amadas dos Estados Unidos até sua morte, em 2016, aos 74 anos. "Não conte os dias; faça os dias contarem", dizia — resumindo uma vida que recusou vencer a qualquer custo, inclusive o custo da própria carreira.`
  }
];

/* ---------------- FILTRO DE PALAVRÕES ----------------
   Lista moderada de termos ofensivos comuns em português, usada
   para bloquear publicações antes mesmo de irem ao ar. Pode ser
   ampliada conforme a necessidade da moderação. */
const BAD_WORDS = [
  'arrombad',
  'babaca',
  'bosta',
  'buceta',
  'burra',
  'burro',
  'caralho',
  'cacete',
  'corno',
  'cuzao',
  'cuzão',
  'desgraca',
  'desgraça',
  'diabo',
  'estupro',
  'filho da puta',
  'filha da puta',
  'foda',
  'fodase',
  'fode',
  'fdp',
  'gonorreia',
  'idiota',
  'imbecil',
  'lixo humano',
  'maldito',
  'merda',
  'otaria',
  'otario',
  'otária',
  'otário',
  'piranha',
  'porra',
  'puta',
  'punheta',
  'retardado',
  'retardada',
  'vadia',
  'vagabunda',
  'vagabundo',
  'viado',
  'vsf',
  'xoxota'
];
function normalizeForFilter(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');
}
function containsBadWords(text) {
  const norm = ' ' + normalizeForFilter(text) + ' ';
  return BAD_WORDS.some((w) => norm.includes(' ' + normalizeForFilter(w)) || norm.includes(normalizeForFilter(w) + ' '));
}

/* ---------------- ESTILOS DE PERSONALIZAÇÃO ---------------- */
const STYLE_COLORS = [
  { id: 'coral', bg: 'linear-gradient(135deg,#FFDCD6,#FFF4E8)', dark: 'linear-gradient(135deg,#3A211E,#2A1E14)' },
  { id: 'jade', bg: 'linear-gradient(135deg,#D6F5EA,#F0FFF8)', dark: 'linear-gradient(135deg,#0F2E27,#122A22)' },
  { id: 'marigold', bg: 'linear-gradient(135deg,#FFEFC2,#FFF8E6)', dark: 'linear-gradient(135deg,#332A11,#2B2415)' },
  { id: 'plum', bg: 'linear-gradient(135deg,#EBDCFF,#F6EFFF)', dark: 'linear-gradient(135deg,#241A38,#1F1830)' },
  { id: 'sky', bg: 'linear-gradient(135deg,#D6E8FF,#EFF6FF)', dark: 'linear-gradient(135deg,#141F30,#141A26)' },
  { id: 'paper', bg: 'linear-gradient(155deg,var(--paper-1),var(--paper-2))', dark: '' }
];
const STYLE_FONTS = [
  { id: 'body', label: 'Padrão', family: 'var(--font-body)' },
  { id: 'display', label: 'Serifada', family: 'var(--font-display)' },
  { id: 'hand', label: 'Manuscrita', family: 'var(--font-hand)' }
];
