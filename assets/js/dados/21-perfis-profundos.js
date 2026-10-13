/* MeMotiva — dados/21-perfis-profundos.js
   Panoramas biográficos (PERFIS_PROFUNDOS) e biografias curtas das Histórias.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 6 — CURADORIA APROFUNDADA DE AUTORES
   ----------------------------------------------------------------
   Pessoas que estavam no acervo só com nome, foto e contagem de
   frases passam a ter:
     · uma biografia detalhada em Autores & Obras (bio, contexto,
       contribuições, cronologia);
     · uma biografia curta e estratégica em Histórias, que leva o
       leitor para o conteúdo aprofundado.
   ================================================================ */
const PERFIS_PROFUNDOS = {
  'John Stuart Mill': {
    titulo: 'O menino criado para pensar',
    cat: 'reflexao',
    perfis: ['filosofos', 'politicos'],
    origem: 'europeus',
    resumo: 'Foi educado num experimento pedagógico radical, teve um colapso aos vinte anos e escreveu a defesa mais influente da liberdade individual.',
    curta: 'Aprendeu grego aos três anos num plano de educação desenhado pelo pai para produzir um gênio utilitarista. Aos vinte, desabou. Da recuperação nasceram "Sobre a Liberdade" e a defesa da igualdade civil das mulheres décadas antes de isso ser aceitável.',
    bio: [
      'James Mill educou o filho em casa segundo um plano rigoroso, concebido junto com Jeremy Bentham para formar o herdeiro intelectual do utilitarismo. John Stuart aprendeu grego aos três anos, latim aos oito, e aos doze já lia lógica e economia política. Nunca frequentou escola nem teve amigos da própria idade.',
      'Aos vinte anos veio o colapso. Ele conta na "Autobiografia" que se perguntou se a realização de todos os seus objetivos o faria feliz, e a resposta interior foi um "não" claro. Saiu da depressão lendo Wordsworth e descobrindo que sentimento e cultivo estético não eram supérfluos ao cálculo racional — uma correção que reorganizou toda a sua filosofia posterior.',
      'Trabalhou trinta e cinco anos na Companhia das Índias Orientais, o que lhe deu independência financeira e uma relação ambígua com o império que criticaria em parte. Casou-se com Harriet Taylor depois de vinte anos de amizade intelectual e sete de viuvez dela; Mill sempre afirmou que ela foi coautora de fato de suas obras principais, incluindo "Sobre a Liberdade".',
      'Eleito para o Parlamento em 1865, propôs a substituição da palavra "homem" por "pessoa" na reforma eleitoral — a primeira tentativa formal de dar voto às mulheres no Reino Unido. Perdeu, e perdeu também a reeleição. Morreu em Avignon, ao lado do túmulo de Harriet.'
    ],
    contexto: 'Escreveu no auge do império britânico e da industrialização, num momento em que a democracia de massa começava a assustar as elites liberais. Sua preocupação central não era o poder do Estado, mas a "tirania da opinião majoritária" sobre quem pensa diferente.',
    contribuicoes: [
      'Formulou o princípio do dano: a única razão legítima para limitar a liberdade de alguém é impedir prejuízo a outra pessoa.',
      'Defendeu a liberdade de expressão mesmo para a opinião falsa, porque a verdade que nunca é contestada vira dogma morto.',
      'Publicou "A Sujeição das Mulheres" em 1869, quando o voto feminino ainda era assunto de escárnio.',
      'Reformulou o utilitarismo distinguindo qualidade de prazeres, contra a versão puramente quantitativa de Bentham.'
    ],
    cronologia: [
      [1806, 'Nasce em Londres.'],
      [1809, 'Começa a aprender grego, aos três anos.'],
      [1826, 'Colapso nervoso que reorienta seu pensamento.'],
      [1851, 'Casa-se com Harriet Taylor.'],
      [1859, 'Publica "Sobre a Liberdade".'],
      [1865, 'Eleito deputado; propõe o voto feminino.'],
      [1873, 'Morre em Avignon.']
    ]
  },

  'Francis Bacon': {
    titulo: 'O método antes da ciência',
    cat: 'reflexao',
    perfis: ['filosofos', 'cientistas'],
    origem: 'europeus',
    resumo: 'Chanceler da Inglaterra, caiu por corrupção e deixou o programa intelectual que fundou o método científico moderno.',
    curta: 'Chegou ao topo do Estado inglês e caiu acusado de suborno. Nos anos seguintes escreveu o que realmente importava: o método indutivo e a crítica aos vícios da mente humana que atrapalham qualquer investigação honesta.',
    bio: [
      'Filho de um alto funcionário da corte de Elizabeth I, Bacon entrou em Cambridge aos doze anos e saiu insatisfeito: achava que a filosofia aristotélica ensinada ali produzia disputas verbais e nenhuma descoberta. Essa irritação virou o projeto de toda a sua vida.',
      'Fez carreira jurídica e política longa e ambiciosa, chegando a Lorde Chanceler sob Jaime I. Em 1621 foi acusado de aceitar presentes de litigantes, confessou, pagou multa e perdeu todos os cargos. Passou os cinco anos seguintes escrevendo.',
      'Sua tese é simples e foi revolucionária: o conhecimento não avança pela dedução a partir de princípios aceitos, mas pela coleta paciente de observações e experimentos, comparando casos até isolar as causas. Antes disso, listou os "ídolos" — vícios da tribo, da caverna, do mercado e do teatro — que distorcem o que enxergamos.',
      'Morreu de pneumonia depois de sair no frio para testar se a neve conservaria a carne de uma galinha. É uma morte quase caricata para alguém que passou a vida defendendo o experimento contra a especulação.'
    ],
    contexto: 'A Inglaterra de Elizabeth I e Jaime I vivia expansão comercial e efervescência intelectual, mas a universidade ainda ensinava ciência natural como comentário de Aristóteles. Bacon escreveu contra esse método, e a Royal Society, fundada décadas depois de sua morte, o adotou como patrono.',
    contribuicoes: ['Sistematizou o método indutivo e a ideia de experimento controlado.', 'Descreveu os quatro "ídolos" da mente, um dos primeiros mapas dos vieses cognitivos.', 'Defendeu que o conhecimento existe para melhorar a vida material das pessoas, não para exibir erudição.', 'Seus "Ensaios" fixaram um modelo de prosa curta e prática em inglês.'],
    cronologia: [
      [1561, 'Nasce em Londres.'],
      [1573, 'Entra em Cambridge aos doze anos.'],
      [1597, 'Primeira edição dos "Ensaios".'],
      [1618, 'Torna-se Lorde Chanceler.'],
      [1620, 'Publica o "Novum Organum".'],
      [1621, 'Cai acusado de corrupção.'],
      [1626, 'Morre após um experimento com neve.']
    ]
  },

  'William James': {
    titulo: 'A psicologia como ciência da experiência',
    cat: 'reflexao',
    perfis: ['filosofos', 'psicologos'],
    origem: 'norteamericanos',
    resumo: 'Fundou o primeiro laboratório de psicologia dos Estados Unidos e transformou a dúvida sobre o próprio valor numa filosofia da ação.',
    curta: 'Passou a juventude doente, deprimido e sem rumo, até ler um filósofo francês e decidir que acreditar no livre-arbítrio seria seu primeiro ato livre. Virou o pai da psicologia americana e do pragmatismo.',
    bio: [
      'Filho de um teólogo excêntrico e irmão do romancista Henry James, William cresceu entre a Europa e os Estados Unidos, mudando de escola e de vocação sem parar: quis ser pintor, virou químico, formou-se em medicina e nunca clinicou.',
      'Entre os vinte e os trinta anos enfrentou depressão profunda e pensamentos de suicídio. A virada, registrada no diário em 1870, veio ao ler Charles Renouvier: decidiu que seu primeiro ato de vontade livre seria acreditar na vontade livre. A partir dali, a relação entre crença e ação seria o centro de tudo o que escreveu.',
      'Em Harvard, montou em 1875 o que é considerado o primeiro laboratório de psicologia experimental dos Estados Unidos e passou doze anos escrevendo "Princípios de Psicologia", obra que definiu conceitos ainda usados, como o fluxo de consciência e o papel do hábito.',
      'Depois migrou para a filosofia. Formulou o pragmatismo: uma ideia vale pelo que ela produz na experiência concreta, não pela sua elegância abstrata. Em "As Variedades da Experiência Religiosa" tratou a fé como fenômeno psicológico digno de estudo sério, sem crença nem deboche.'
    ],
    contexto: 'Os Estados Unidos do fim do século XIX viviam industrialização acelerada e um choque entre religião e darwinismo. James procurou um caminho que não exigisse escolher entre ciência e sentido, e isso explica boa parte de sua popularidade duradoura.',
    contribuicoes: ['Criou o primeiro laboratório de psicologia experimental dos Estados Unidos.', 'Cunhou a expressão "fluxo de consciência", que atravessou a psicologia e a literatura.', 'Fundou, com Peirce e Dewey, a tradição filosófica pragmatista.', 'Mostrou que o hábito é o mecanismo que decide quase tudo no comportamento cotidiano.'],
    cronologia: [
      [1842, 'Nasce em Nova York.'],
      [1869, 'Forma-se em medicina, sem exercer.'],
      [1870, 'Decisão registrada no diário sobre o livre-arbítrio.'],
      [1875, 'Monta o laboratório de psicologia em Harvard.'],
      [1890, 'Publica "Princípios de Psicologia".'],
      [1902, 'Publica "As Variedades da Experiência Religiosa".'],
      [1910, 'Morre em New Hampshire.']
    ]
  },

  'Henry David Thoreau': {
    titulo: 'Dois anos numa cabana',
    cat: 'reflexao',
    perfis: ['filosofos', 'literatura', 'ativistas'],
    origem: 'norteamericanos',
    resumo: 'Foi viver sozinho na beira de um lago para descobrir do que a vida realmente precisa — e escreveu o texto que inspirou Gandhi e Martin Luther King.',
    curta: 'Construiu uma cabana às margens do lago Walden e morou lá dois anos para testar quanto uma vida precisa de fato. Preso por não pagar imposto a um Estado escravista, escreveu sobre desobediência civil um ensaio que atravessaria o século seguinte.',
    bio: [
      'Nascido em Concord, Massachusetts, filho de um fabricante de lápis, Thoreau formou-se em Harvard e recusou a carreira que se esperava dele. Deu aula, largou o emprego por não querer aplicar castigos físicos, trabalhou na fábrica da família e virou discípulo e amigo de Ralph Waldo Emerson.',
      'Em 1845 construiu uma cabana em terreno de Emerson, na margem do lago Walden, e viveu ali dois anos, dois meses e dois dias. Não foi um isolamento romântico: recebia visitas, ia à cidade, jantava com a família. O ponto era outro — reduzir a vida ao essencial para descobrir do que ela precisa mesmo.',
      'Em 1846 foi preso por uma noite por se recusar a pagar um imposto que financiava um Estado que mantinha a escravidão e travava a guerra contra o México. Do episódio nasceu "Desobediência Civil", ensaio que Gandhi leu na África do Sul e Martin Luther King citou como leitura formadora.',
      'Passou os últimos anos como agrimensor e naturalista meticuloso, registrando datas de floração e níveis do lago com uma precisão que hoje é usada por pesquisadores do clima. Morreu de tuberculose aos 44 anos.'
    ],
    contexto: 'Os Estados Unidos dos anos 1840 e 1850 se expandiam para o oeste, discutiam a escravidão e viviam a primeira industrialização. O transcendentalismo, do qual Thoreau fazia parte, respondia a isso com individualismo moral e reverência pela natureza.',
    contribuicoes: ['Escreveu "Walden", um dos livros fundadores do pensamento ambiental moderno.', 'Formulou em "Desobediência Civil" a base teórica da resistência não violenta.', 'Deixou registros naturalistas tão detalhados que hoje servem de linha de base para estudos climáticos.', 'Militou pelo abolicionismo e defendeu publicamente John Brown quando quase ninguém o fazia.'],
    cronologia: [
      [1817, 'Nasce em Concord.'],
      [1837, 'Forma-se em Harvard.'],
      [1845, 'Muda-se para a cabana em Walden.'],
      [1846, 'É preso por não pagar imposto.'],
      [1849, 'Publica "Desobediência Civil".'],
      [1854, 'Publica "Walden".'],
      [1862, 'Morre de tuberculose.']
    ]
  },

  'Mary Wollstonecraft': {
    titulo: 'A primeira a escrever isso',
    cat: 'empoderamento',
    perfis: ['filosofos', 'ativistas', 'educadores'],
    origem: 'europeus',
    resumo: 'Escreveu em 1792 a defesa da educação igual para mulheres, num tempo em que a ideia era tratada como piada.',
    curta: 'Fugiu de casa aos dezenove para escapar de um pai violento, abriu escola, virou tradutora e escreveu, em seis semanas, o livro que fundaria o feminismo moderno. Morreu no parto da filha que seria a autora de "Frankenstein".',
    bio: [
      'Cresceu numa casa em que o pai bebia e batia na mãe; conta-se que dormia no chão diante da porta do quarto para tentar protegê-la. Saiu de casa cedo e passou pelas poucas ocupações permitidas a uma mulher pobre e instruída da época: dama de companhia, professora e governanta.',
      'Em Londres, o editor Joseph Johnson a contratou como tradutora e resenhista, e ela entrou no círculo radical que discutia a Revolução Francesa. Quando Edmund Burke atacou a revolução, Wollstonecraft respondeu em semanas com "Reivindicação dos Direitos do Homem". Dois anos depois veio a "Reivindicação dos Direitos da Mulher".',
      'O argumento central é menos sobre voto do que sobre razão: se as mulheres parecem frívolas, é porque foram educadas para agradar e não para pensar. Dê-lhes a mesma educação, dizia, e a diferença desaparece. Foi ridicularizada por décadas, inclusive por causa de sua vida pessoal.',
      'Viveu na França durante o Terror, teve uma filha fora do casamento, tentou o suicídio duas vezes após um abandono, e por fim casou-se com o filósofo William Godwin. Morreu de infecção puerperal onze dias depois de dar à luz Mary — a futura Mary Shelley.'
    ],
    contexto: 'A Revolução Francesa proclamava direitos universais do homem enquanto excluía metade da humanidade. Wollstonecraft escreveu exatamente nessa brecha, e foi por isso que seu livro incomodou tanto tanto conservadores quanto revolucionários.',
    contribuicoes: [
      'Publicou a primeira grande defesa filosófica da educação igualitária para mulheres em inglês.',
      'Ligou a submissão feminina à educação recebida, e não à natureza — argumento que estruturou o feminismo posterior.',
      'Escreveu sobre casamento, trabalho e maternidade com uma franqueza rara para 1792.',
      'Foi resenhista e tradutora profissional numa época em que quase nenhuma mulher vivia de escrever.'
    ],
    cronologia: [
      [1759, 'Nasce em Londres.'],
      [1784, 'Abre uma escola em Newington Green.'],
      [1790, 'Publica "Reivindicação dos Direitos do Homem".'],
      [1792, 'Publica "Reivindicação dos Direitos da Mulher".'],
      [1793, 'Vai para a França durante a Revolução.'],
      [1797, 'Morre onze dias após o parto de Mary Shelley.']
    ]
  },

  'Blaise Pascal': {
    titulo: 'O prodígio que apostou',
    cat: 'fe',
    perfis: ['filosofos', 'cientistas'],
    origem: 'europeus',
    resumo: 'Inventou a calculadora mecânica aos dezenove anos, fundou o cálculo de probabilidades e passou os últimos anos escrevendo sobre a miséria e a grandeza humanas.',
    curta: 'Aos dezenove construiu uma máquina de calcular para ajudar o pai. Depois fundou a teoria das probabilidades trocando cartas com Fermat. Uma noite de 1654 mudou tudo: virou-se para a fé e deixou fragmentos que estão entre os mais citados da língua francesa.',
    bio: [
      'O pai o educou em casa e tentou adiar o contato com a matemática. Não funcionou: Pascal reconstruiu sozinho boa parte da geometria de Euclides ainda menino e aos dezesseis escreveu um tratado sobre cônicas que impressionou Descartes.',
      'Aos dezenove inventou a Pascaline, calculadora mecânica feita para aliviar o trabalho do pai, coletor de impostos. Depois demonstrou experimentalmente a existência do vácuo e da pressão atmosférica, contrariando o consenso aristotélico, e trocou com Pierre de Fermat as cartas que fundaram o cálculo de probabilidades.',
      'Na noite de 23 de novembro de 1654 viveu uma experiência religiosa intensa, que anotou num pergaminho costurado no forro do casaco e carregado até morrer. Aproximou-se do jansenismo de Port-Royal e escreveu as "Cartas Provinciais", polêmica brilhante contra a moral jesuítica.',
      'Passou os últimos anos reunindo notas para uma apologia do cristianismo que nunca terminou. Os fragmentos foram publicados como "Pensamentos" e contêm a aposta, a distinção entre espírito de geometria e espírito de finesse e a frase sobre as razões do coração. Morreu aos 39 anos, com saúde arruinada.'
    ],
    contexto: 'A França do século XVII vivia a revolução científica e uma disputa religiosa feroz entre jansenistas e jesuítas. Pascal foi um dos poucos que estavam de corpo inteiro nos dois campos: a matemática de ponta e a teologia militante.',
    contribuicoes: ['Inventou uma das primeiras calculadoras mecânicas da história.', 'Fundou, com Fermat, o cálculo de probabilidades.', 'Demonstrou experimentalmente a pressão atmosférica; a unidade de pressão leva seu nome.', 'Criou em Paris a primeira linha de transporte público urbano, em 1662.'],
    cronologia: [
      [1623, 'Nasce em Clermont-Ferrand.'],
      [1642, 'Começa a construir a Pascaline.'],
      [1654, 'Cartas com Fermat e a "noite de fogo".'],
      [1656, 'Publica as "Cartas Provinciais".'],
      [1662, 'Cria as carruagens de cinco sous; morre em Paris.'],
      [1670, 'Publicação póstuma dos "Pensamentos".']
    ]
  },

  'David Hume': {
    titulo: 'A dúvida levada a sério',
    cat: 'reflexao',
    perfis: ['filosofos'],
    origem: 'europeus',
    resumo: 'Escreveu aos 26 anos o livro que ninguém leu e que hoje é considerado o maior tratado filosófico em inglês.',
    curta: 'Publicou aos 26 um tratado que, nas palavras dele, "nasceu morto da prensa". Foi recusado por duas universidades por causa de suas ideias sobre religião. Hoje é lido como o filósofo que forçou toda a filosofia moderna a se reorganizar.',
    bio: [
      'Nascido em Edimburgo, entrou na universidade aos doze anos e abandonou o direito por não suportá-lo. Passou anos na França escrevendo o "Tratado da Natureza Humana", publicado aos 26 e ignorado quase completamente.',
      'Seu ponto é devastador: não temos como provar que o futuro se parecerá com o passado, e o que chamamos de causa e efeito é apenas hábito mental reforçado pela repetição. Kant diria mais tarde que foi essa observação que o despertou do "sono dogmático".',
      'Foi recusado em duas cátedras universitárias por suspeita de ateísmo. Ganhou a vida como bibliotecário, secretário e diplomata, e ficou famoso em vida não pela filosofia, mas pela monumental "História da Inglaterra", que foi best-seller por décadas.',
      'Morreu com uma serenidade que impressionou os contemporâneos: recusou-se a se converter no leito de morte e conversou sobre o assunto com bom humor. Adam Smith, seu amigo, foi criticado por elogiar publicamente a maneira como Hume encarou a morte.'
    ],
    contexto: 'O Iluminismo escocês reuniu numa cidade pequena um conjunto improvável de pensadores — Hume, Adam Smith, Adam Ferguson — que reformularam economia, moral e história a partir da observação empírica do comportamento humano.',
    contribuicoes: ['Formulou o problema da indução, que ainda organiza a filosofia da ciência.', 'Mostrou que não se deriva um "deve" de um "é", separação que estrutura a ética moderna.', 'Analisou o eu como um feixe de percepções, sem substância fixa por trás.', 'Escreveu uma história da Inglaterra que foi referência popular por mais de um século.'],
    cronologia: [
      [1711, 'Nasce em Edimburgo.'],
      [1739, 'Publica o "Tratado da Natureza Humana".'],
      [1748, 'Publica a "Investigação sobre o Entendimento Humano".'],
      [1754, 'Começa a "História da Inglaterra".'],
      [1763, 'Vai a Paris como secretário de embaixada.'],
      [1776, 'Morre em Edimburgo.']
    ]
  },

  'Thomas Hobbes': {
    titulo: 'O medo como fundamento do Estado',
    cat: 'reflexao',
    perfis: ['filosofos', 'politicos'],
    origem: 'europeus',
    resumo: 'Viveu uma guerra civil de perto e concluiu que qualquer governo é melhor do que a guerra de todos contra todos.',
    curta: 'Nasceu prematuro no ano em que a Armada espanhola ameaçou a Inglaterra e dizia que sua mãe deu à luz gêmeos: ele e o medo. Escreveu o "Leviatã" no exílio, durante a guerra civil, e ninguém gostou — nem os realistas, nem os parlamentares.',
    bio: [
      'Filho de um vigário que abandonou a família, Hobbes foi criado por um tio e estudou em Oxford, que achou entediante. Trabalhou a vida quase toda como tutor e secretário da família Cavendish, o que lhe deu acesso a bibliotecas, viagens pela Europa e encontros com Galileu e Descartes.',
      'A geometria o fascinou tarde, aos quarenta anos, ao abrir por acaso um Euclides. Passou a querer aplicar à política o mesmo tipo de dedução rigorosa: partir de definições claras sobre o comportamento humano e derivar dali as regras da vida em comum.',
      'A guerra civil inglesa o fez fugir para Paris, onde escreveu o "Leviatã", publicado em 1651. A tese: sem um poder comum capaz de impor a lei, a vida humana é solitária, pobre, sórdida, brutal e curta; por isso as pessoas trocam parte da liberdade por segurança num contrato.',
      'O livro foi atacado pelos realistas, por não fundar o poder no direito divino, e pelos parlamentares, por defender o absolutismo. Hobbes voltou à Inglaterra, foi acusado de ateísmo e proibido de publicar sobre política. Morreu aos 91 anos, traduzindo Homero.'
    ],
    contexto: 'A Inglaterra dos anos 1640 viu um rei decapitado, o Parlamento em armas e o país partido. Hobbes escreveu com esse cenário diante dos olhos, e é por isso que a ordem, e não a liberdade, é o valor que organiza seu sistema.',
    contribuicoes: ['Formulou a teoria do contrato social que organiza o pensamento político moderno.', 'Descreveu o estado de natureza como hipótese lógica, não como fato histórico.', 'Fundou a ideia de soberania como poder indivisível e reconhecido.', 'Traduziu Tucídides e Homero para o inglês.'],
    cronologia: [
      [1588, 'Nasce em Westport.'],
      [1608, 'Torna-se tutor da família Cavendish.'],
      [1640, 'Foge para Paris com a guerra civil.'],
      [1651, 'Publica o "Leviatã".'],
      [1666, 'O Parlamento investiga o livro por ateísmo.'],
      [1679, 'Morre aos 91 anos.']
    ]
  },

  Montesquieu: {
    titulo: 'Vinte anos para escrever um livro',
    cat: 'reflexao',
    perfis: ['filosofos', 'politicos'],
    origem: 'europeus',
    resumo: 'Passou duas décadas comparando constituições reais e chegou à separação de poderes que quase todo país adota hoje.',
    curta: 'Estreou anonimamente com uma sátira sobre a França vista por dois persas. Depois passou vinte anos viajando e lendo para escrever "O Espírito das Leis", o livro que deu forma à separação entre Executivo, Legislativo e Judiciário.',
    bio: [
      'Charles-Louis de Secondat herdou o título de barão de Montesquieu e um cargo no Parlamento de Bordeaux, que vendeu para se dedicar ao estudo. Antes disso, já havia publicado anonimamente as "Cartas Persas", sucesso imediato que satirizava a corte, a igreja e os costumes franceses pelos olhos de dois viajantes estrangeiros.',
      'Viajou pela Áustria, Hungria, Itália, Alemanha, Holanda e passou dezoito meses na Inglaterra, estudando de perto o funcionamento do Parlamento britânico. Voltou convencido de que a liberdade política depende menos das intenções dos governantes do que do desenho institucional.',
      'Publicou "O Espírito das Leis" em 1748, depois de quase vinte anos de trabalho. A obra compara regimes, climas, religiões e economias para explicar por que leis funcionam em um lugar e falham em outro, e propõe que o poder só é contido por outro poder.',
      'O livro foi para o Índice de livros proibidos da Igreja e influenciou diretamente a Constituição dos Estados Unidos e a Revolução Francesa. Montesquieu morreu quase cego, sete anos depois de publicá-lo.'
    ],
    contexto: 'A França absolutista não tinha contrapesos ao poder real. Montesquieu escreveu num momento em que a Inglaterra oferecia um contraexemplo vivo, e foi essa comparação empírica que deu força ao seu argumento.',
    contribuicoes: ['Formulou a separação e o equilíbrio entre os três poderes.', 'Introduziu a análise comparada de regimes com base em geografia, economia e costumes.', 'Distinguiu tipos de governo pelos princípios que os sustentam: virtude, honra e medo.', 'Criticou a escravidão com ironia devastadora num capítulo célebre.'],
    cronologia: [
      [1689, 'Nasce perto de Bordeaux.'],
      [1721, 'Publica as "Cartas Persas" anonimamente.'],
      [1728, 'Inicia a viagem de estudos pela Europa.'],
      [1729, 'Passa dezoito meses na Inglaterra.'],
      [1748, 'Publica "O Espírito das Leis".'],
      [1751, 'A obra entra no Índice da Igreja.'],
      [1755, 'Morre em Paris.']
    ]
  },

  'René Descartes': {
    titulo: 'Começar do zero',
    cat: 'reflexao',
    perfis: ['filosofos', 'cientistas'],
    origem: 'europeus',
    resumo: 'Decidiu duvidar de tudo o que era possível duvidar, para descobrir o que restava de pé.',
    curta: 'Serviu como soldado, teve três sonhos numa noite de inverno e decidiu refundar o conhecimento a partir do que resistisse à dúvida mais radical. Do que restou nasceu a filosofia moderna — e a geometria analítica.',
    bio: [
      'Educado num colégio jesuíta, Descartes saiu de lá com boa formação e má impressão: sentia que havia acumulado disputas em vez de certezas. Formou-se em direito, alistou-se como voluntário em exércitos europeus e usou o tempo livre para pensar.',
      'Numa noite de novembro de 1619, alojado num quarto aquecido, teve três sonhos que interpretou como um chamado a fundar uma ciência unificada. A partir dali dedicou-se a criar um método: dividir cada problema em partes, ordená-las da mais simples à mais complexa e não aceitar nada que não fosse evidente.',
      'Aplicando isso à dúvida, chegou ao ponto que não podia ser negado: se duvido, penso; se penso, existo. Sobre essa base tentou reconstruir o conhecimento do mundo e de Deus, com resultados que os filósofos discutem até hoje.',
      'Publicou também trabalhos decisivos em óptica, meteorologia e matemática — o plano cartesiano é dele. Morreu na Suécia aos 53 anos, depois de aceitar dar aulas às cinco da manhã para a rainha Cristina, num inverno que sua saúde não suportou.'
    ],
    contexto: 'A condenação de Galileu em 1633 assustou Descartes a ponto de ele suspender a publicação de um tratado já pronto. Toda a sua obra posterior foi escrita com o cuidado de quem sabia que a Inquisição estava lendo.',
    contribuicoes: ['Criou a geometria analítica, unindo álgebra e geometria.', 'Formulou o método da dúvida e o "penso, logo existo".', 'Estabeleceu a distinção entre mente e corpo que organizou séculos de debate.', 'Deu contribuições fundamentais à óptica, incluindo a lei da refração.'],
    cronologia: [
      [1596, 'Nasce em La Haye, França.'],
      [1619, 'Os três sonhos que orientam sua obra.'],
      [1633, 'Suspende a publicação de "O Mundo" após a condenação de Galileu.'],
      [1637, 'Publica o "Discurso do Método".'],
      [1641, 'Publica as "Meditações Metafísicas".'],
      [1650, 'Morre em Estocolmo.']
    ]
  },

  Heráclito: {
    titulo: 'O filósofo obscuro',
    cat: 'reflexao',
    perfis: ['filosofos'],
    origem: 'antiguidade',
    resumo: 'Escreveu em enigmas sobre um mundo em fluxo permanente e sobreviveu apenas em cerca de cem fragmentos.',
    curta: 'Chamavam-no de "o obscuro" por escrever propositalmente em enigmas. Sobrou cerca de uma centena de fragmentos, e ainda assim eles bastaram para atravessar 2.500 anos de filosofia.',
    bio: [
      'Heráclito nasceu em Éfeso, cidade grega da Ásia Menor, em família aristocrática. Recusou o cargo hereditário que lhe cabia e, segundo a tradição, retirou-se do convívio da cidade por desprezo à multidão e aos seus juízos.',
      'Escreveu uma obra única, hoje perdida, da qual restaram fragmentos citados por autores posteriores. O estilo é deliberadamente denso, feito de aforismos que se contradizem na superfície e forçam o leitor a procurar a unidade por baixo.',
      'A ideia central é o fluxo: tudo muda o tempo todo, e a estabilidade é aparência. O rio em que se entra nunca é o mesmo rio, porque as águas correram. Mas o fluxo tem uma medida, um logos, que dá ordem à mudança.',
      'A segunda ideia é a unidade dos opostos: guerra e paz, dia e noite, doença e saúde não são forças rivais, mas faces de um mesmo processo. Essa intuição atravessa Platão, os estoicos, Hegel e Nietzsche.'
    ],
    contexto: 'No século VI a.C., as cidades gregas da Jônia eram o centro comercial e intelectual do Mediterrâneo, e ali nasceu a tentativa de explicar a natureza sem recorrer aos mitos. Heráclito pertence a essa primeira geração.',
    contribuicoes: ['Formulou a ideia de que a realidade é processo, não substância.', 'Introduziu o conceito de logos como razão que ordena a mudança.', 'Propôs a unidade e a tensão entre opostos como motor do mundo.', 'Influenciou diretamente o estoicismo e, séculos depois, a dialética moderna.'],
    cronologia: [
      ['c. 540 a.C.', 'Nasce em Éfeso.'],
      ['c. 500 a.C.', 'Escreve sua obra única, hoje perdida.'],
      ['c. 480 a.C.', 'Morte, cercada de relatos lendários.']
    ]
  },

  'Tomás de Aquino': {
    titulo: 'Fé e razão na mesma mesa',
    cat: 'fe',
    perfis: ['filosofos', 'religiosos'],
    origem: 'europeus',
    resumo: 'A família o sequestrou por um ano para impedi-lo de virar frade. Ele virou o teólogo mais influente do cristianismo ocidental.',
    curta: 'Os irmãos o prenderam num castelo por um ano para tirá-lo da vida religiosa. Não funcionou. Escreveu a maior síntese entre a filosofia de Aristóteles e a teologia cristã — e no fim da vida disse que tudo aquilo lhe parecia palha.',
    bio: [
      'Nascido numa família nobre do sul da Itália, foi enviado ainda menino ao mosteiro de Monte Cassino, onde a família imaginava vê-lo abade. Quando decidiu entrar na ordem dominicana, mendicante e sem prestígio, os irmãos o sequestraram e o mantiveram preso cerca de um ano. Ele não cedeu.',
      'Estudou em Paris e Colônia com Alberto Magno. Era grande, silencioso e chamado de "boi mudo" pelos colegas; Alberto teria respondido que o mugido daquele boi seria ouvido no mundo inteiro.',
      'Sua tarefa histórica foi enorme: Aristóteles chegava à Europa via traduções árabes e parecia incompatível com a fé cristã. Tomás mostrou que razão e revelação não se contradizem, e organizou a "Suma Teológica" como um imenso debate, com objeções, respostas e réplicas.',
      'Em dezembro de 1273, durante uma missa, teve uma experiência que o fez parar de escrever. Disse ao secretário que tudo o que havia produzido lhe parecia palha comparado ao que vira. Morreu três meses depois, aos 49 anos, deixando a obra inacabada.'
    ],
    contexto: 'O século XIII viu nascer as universidades europeias e a redescoberta de Aristóteles pelo Ocidente. A pergunta da época era se a filosofia grega poderia conviver com a fé cristã, e a resposta de Tomás organizou o pensamento católico por setecentos anos.',
    contribuicoes: ['Realizou a síntese entre aristotelismo e teologia cristã.', 'Formulou as cinco vias, argumentos racionais para a existência de Deus.', 'Desenvolveu a doutrina da lei natural, base de boa parte do direito ocidental.', 'Estruturou um método de exposição por perguntas, objeções e respostas.'],
    cronologia: [
      [1225, 'Nasce em Roccasecca, Itália.'],
      [1244, 'É sequestrado pela família por um ano.'],
      [1252, 'Vai ensinar em Paris.'],
      [1265, 'Começa a "Suma Teológica".'],
      [1273, 'Para de escrever após uma experiência mística.'],
      [1274, 'Morre a caminho do Concílio de Lyon.']
    ]
  },

  'Karl Marx': {
    titulo: 'A vida inteira na biblioteca',
    cat: 'reflexao',
    perfis: ['filosofos', 'economistas'],
    origem: 'europeus',
    resumo: 'Expulso de três países, viveu na pobreza em Londres e escreveu a crítica da economia capitalista que segue sendo discutida em toda parte.',
    curta: 'Foi expulso da Alemanha, da França e da Bélgica. Viveu em Londres com ajuda do amigo Engels, perdeu três filhos pequenos e passou décadas na sala de leitura do Museu Britânico escrevendo "O Capital".',
    bio: [
      'Nasceu em Trier, na Prússia, em família judia convertida ao protestantismo. Estudou direito e depois filosofia, doutorou-se sobre Epicuro e Demócrito e não conseguiu carreira acadêmica por causa de suas posições políticas. Virou jornalista, e o jornal foi fechado pela censura.',
      'Em Paris conheceu Friedrich Engels, filho de industrial, que se tornaria seu colaborador e sustento financeiro por décadas. Juntos escreveram o "Manifesto Comunista", encomendado por uma liga de trabalhadores e publicado semanas antes das revoluções de 1848.',
      'Expulso sucessivamente da França e da Bélgica, instalou-se em Londres em 1849 e ali ficou até morrer. A família viveu em pobreza severa; três dos seis filhos morreram na infância. Marx escrevia artigos para jornais americanos para pagar contas e passava os dias na biblioteca do Museu Britânico.',
      'O primeiro volume de "O Capital" saiu em 1867 e teve recepção modesta. Os outros dois foram organizados e publicados por Engels após sua morte. No enterro, em Highgate, havia cerca de onze pessoas.'
    ],
    contexto: 'A Europa dos anos 1840 a 1870 vivia a industrialização em sua fase mais brutal: jornadas de catorze horas, trabalho infantil e cidades operárias sem saneamento. Marx escreveu a partir dos relatórios oficiais britânicos sobre essas condições.',
    contribuicoes: ['Analisou a mercadoria, o valor e a acumulação em "O Capital".', 'Formulou a concepção materialista da história.', 'Escreveu, com Engels, o "Manifesto Comunista", um dos textos mais difundidos da história.', 'Foi um dos fundadores da Associação Internacional dos Trabalhadores.'],
    cronologia: [
      [1818, 'Nasce em Trier.'],
      [1844, 'Conhece Engels em Paris.'],
      [1848, 'Publica o "Manifesto Comunista".'],
      [1849, 'Exila-se em Londres.'],
      [1864, 'Participa da fundação da Primeira Internacional.'],
      [1867, 'Publica o primeiro volume de "O Capital".'],
      [1883, 'Morre em Londres.']
    ]
  },

  'Alexis de Tocqueville': {
    titulo: 'Um aristocrata na democracia',
    cat: 'reflexao',
    perfis: ['filosofos', 'politicos'],
    origem: 'europeus',
    resumo: 'Foi aos Estados Unidos estudar prisões e voltou com o retrato mais duradouro da democracia moderna.',
    curta: 'Aristocrata cuja família quase inteira foi guilhotinada, viajou aos Estados Unidos com uma missão oficial sobre prisões e escreveu outra coisa: uma análise da igualdade e dos seus riscos que continua sendo citada em todo debate sobre democracia.',
    bio: [
      'Nasceu numa família nobre normanda: os pais foram presos durante o Terror e escaparam da guilhotina por poucos dias. Essa origem explica a posição peculiar de Tocqueville — um aristocrata que aceitou a igualdade como destino inevitável e quis entender o que ela traria junto.',
      'Em 1831, com o amigo Gustave de Beaumont, obteve do governo francês a missão de estudar o sistema penitenciário americano. Passaram nove meses viajando, entrevistando pessoas de todas as condições, do presidente a fazendeiros e detentos.',
      'O relatório sobre prisões saiu, mas o que ficou foi "A Democracia na América", publicado em dois volumes. Ali ele descreve como a igualdade de condições molda costumes, religião, imprensa e família, e alerta para dois riscos: a tirania da maioria e um despotismo brando que trata cidadãos como crianças em troca de conforto.',
      'Escreveu também sobre a Revolução Francesa, foi deputado e ministro das Relações Exteriores por poucos meses. Retirou-se da política após o golpe de Luís Napoleão e morreu de tuberculose aos 53 anos.'
    ],
    contexto: 'A França oscilava entre monarquia, império e república, e ninguém sabia ainda como uma sociedade sem hierarquia hereditária poderia funcionar. Os Estados Unidos eram o único laboratório em escala, e Tocqueville foi vê-lo com os próprios olhos.',
    contribuicoes: ['Descreveu a associação civil voluntária como base da democracia funcional.', 'Formulou o conceito de tirania da maioria.', 'Antecipou o "despotismo brando" das sociedades administradas.', 'Analisou a Revolução Francesa como continuidade, e não ruptura, da centralização do Antigo Regime.'],
    cronologia: [
      [1805, 'Nasce em Paris.'],
      [1831, 'Viaja aos Estados Unidos.'],
      [1835, 'Publica o primeiro volume de "A Democracia na América".'],
      [1840, 'Publica o segundo volume.'],
      [1849, 'Torna-se ministro das Relações Exteriores.'],
      [1856, 'Publica "O Antigo Regime e a Revolução".'],
      [1859, 'Morre em Cannes.']
    ]
  },

  'Nicolau Maquiavel': {
    titulo: 'Escrito no exílio',
    cat: 'negocios',
    perfis: ['filosofos', 'politicos', 'estrategistas'],
    origem: 'europeus',
    resumo: 'Foi torturado, exilado e escreveu num sítio o manual de poder mais lido e mais mal interpretado da história.',
    curta: 'Serviu quinze anos à república de Florença, caiu com ela, foi torturado e desterrado. Num sítio pobre, escreveu "O Príncipe" tentando voltar ao serviço público. Nunca voltou — e virou adjetivo.',
    bio: [
      'Maquiavel foi secretário da segunda chancelaria da República de Florença por quinze anos, com funções diplomáticas e militares. Negociou com o rei da França, com o imperador e com César Bórgia, e essa observação direta do poder em ação é a matéria-prima de tudo o que escreveu.',
      'Quando os Médici retomaram Florença em 1512, ele foi demitido, acusado de conspiração, preso e submetido ao suplício da corda. Solto, retirou-se para um sítio em San Casciano, onde cuidava de negócios miúdos de dia e, à noite, vestia roupas de corte para "conversar" com os antigos em seus livros.',
      '"O Príncipe" nasceu ali, em 1513, e foi dedicado a Lourenço de Médici na esperança de reconquistar um cargo. O livro descreve como o poder é conquistado e mantido de fato, sem julgar se deveria ser assim — é essa recusa em moralizar que chocou e ainda choca.',
      'Nos "Discursos sobre Tito Lívio", muito menos lido, Maquiavel defende a república, o conflito social como fonte de liberdade e a participação popular. Quem lê apenas "O Príncipe" fica com metade do autor. Morreu em 1527, sem nunca ter voltado ao cargo que queria.'
    ],
    contexto: 'A Itália do início do século XVI era um mosaico de cidades-estado disputadas por França, Espanha e o papado. Maquiavel escrevia com um objetivo prático e urgente: entender por que Florença perdia sempre, e o que seria preciso para não perder.',
    contribuicoes: ['Separou a análise política da moral religiosa, fundando o realismo político.', 'Descreveu a relação entre virtù e fortuna na ação humana.', 'Defendeu, nos "Discursos", milícias cidadãs e o valor do conflito interno numa república.', 'Escreveu também a comédia "A Mandrágora", uma das melhores do Renascimento italiano.'],
    cronologia: [
      [1469, 'Nasce em Florença.'],
      [1498, 'Assume a segunda chancelaria da República.'],
      [1512, 'Cai com a volta dos Médici.'],
      [1513, 'É torturado e escreve "O Príncipe".'],
      [1517, 'Termina os "Discursos sobre Tito Lívio".'],
      [1527, 'Morre em Florença.'],
      [1532, '"O Príncipe" é publicado, cinco anos após sua morte.']
    ]
  },

  'Adam Smith': {
    titulo: 'O professor de moral que virou pai da economia',
    cat: 'financas',
    perfis: ['economistas', 'filosofos'],
    origem: 'europeus',
    resumo: 'Escreveu primeiro sobre empatia e só depois sobre mercados — e considerava o primeiro livro o mais importante.',
    curta: 'Era professor de filosofia moral, e seu primeiro livro é sobre a capacidade humana de se colocar no lugar do outro. O segundo, "A Riqueza das Nações", fundou a economia moderna. Ele achava que o primeiro era melhor.',
    bio: [
      'Filho póstumo de um funcionário aduaneiro escocês, Smith entrou na universidade de Glasgow aos catorze anos e depois passou seis anos em Oxford, que detestou. Voltou à Escócia e virou professor de lógica e depois de filosofia moral em Glasgow, onde suas aulas atraíam alunos de vários países.',
      'Publicou em 1759 a "Teoria dos Sentimentos Morais", cujo ponto de partida é a simpatia: a capacidade de imaginar o que o outro sente e de julgar a própria conduta pelos olhos de um espectador imparcial. O livro o tornou célebre e lhe rendeu um posto de tutor de um jovem duque, com salário vitalício.',
      'A viagem pela França como tutor o pôs em contato com os fisiocratas e com Voltaire. De volta à Escócia, passou dez anos escrevendo "A Riqueza das Nações", publicado em 1776, o mesmo ano da independência americana.',
      'O livro analisa a divisão do trabalho, a formação dos preços, o papel do comércio e os limites da intervenção estatal. É frequentemente citado como manifesto do mercado livre, mas Smith também escreveu contra o conluio entre comerciantes, a favor da educação pública e sobre o embrutecimento causado pelo trabalho repetitivo.'
    ],
    contexto: 'A Escócia do século XVIII passava de país agrário e pobre a centro comercial e intelectual. Smith escreveu quando o mercantilismo — a ideia de que riqueza é acumular ouro — ainda era a política oficial da maioria dos Estados europeus.',
    contribuicoes: ['Analisou a divisão do trabalho como origem do aumento de produtividade.', 'Descreveu a coordenação espontânea dos interesses individuais, resumida na metáfora da mão invisível.', 'Fundou a economia política como campo de estudo autônomo.', 'Defendeu educação pública para compensar os efeitos do trabalho fabril.'],
    cronologia: [
      [1723, 'Nasce em Kirkcaldy, Escócia.'],
      [1751, 'Torna-se professor em Glasgow.'],
      [1759, 'Publica a "Teoria dos Sentimentos Morais".'],
      [1764, 'Viaja pela França como tutor.'],
      [1776, 'Publica "A Riqueza das Nações".'],
      [1778, 'Torna-se comissário de alfândega.'],
      [1790, 'Morre em Edimburgo.']
    ]
  },

  'Jean-Paul Sartre': {
    titulo: 'Condenado a ser livre',
    cat: 'reflexao',
    perfis: ['filosofos', 'literatura'],
    origem: 'europeus',
    resumo: 'Recusou o Prêmio Nobel, escreveu o tratado central do existencialismo e insistiu que somos responsáveis por tudo o que fazemos.',
    curta: 'Foi prisioneiro de guerra, participou da Resistência e escreveu que estamos condenados a ser livres — sem desculpa, sem natureza fixa, sem álibi. Em 1964 recusou o Nobel de Literatura, dizendo que um escritor não deve se deixar transformar em instituição.',
    bio: [
      'Órfão de pai aos quinze meses, criado pelo avô numa casa cheia de livros, Sartre entrou na École Normale Supérieure, onde conheceu Simone de Beauvoir. A relação entre os dois, aberta e declarada, durou cinquenta e um anos e foi tão discutida quanto a obra.',
      'Capturado pelos alemães em 1940, passou nove meses num campo de prisioneiros. Ali leu Heidegger e escreveu para os companheiros. Libertado, participou da Resistência intelectual e, em 1943, publicou "O Ser e o Nada", o tratado que estruturou o existencialismo francês.',
      'A tese: no ser humano a existência precede a essência. Não há natureza dada que determine o que somos; nos fazemos pelas escolhas, e por isso somos inteiramente responsáveis por elas. A tentativa de fugir dessa responsabilidade é o que ele chama de má-fé.',
      'No pós-guerra virou figura pública central: fundou a revista "Les Temps Modernes", apoiou a independência da Argélia sob ameaça de atentados, aproximou-se e depois rompeu com o comunismo soviético. Recusou o Nobel em 1964. Cerca de cinquenta mil pessoas acompanharam seu enterro em Paris.'
    ],
    contexto: 'A França ocupada e depois libertada precisava lidar com colaboração, resistência e culpa. O existencialismo, com sua insistência na escolha e na responsabilidade individual, respondia exatamente às perguntas que aquela geração não conseguia evitar.',
    contribuicoes: ['Escreveu "O Ser e o Nada", obra central da filosofia existencialista.', 'Formulou os conceitos de má-fé, liberdade situada e engajamento.', 'Fundou "Les Temps Modernes", uma das revistas intelectuais mais influentes do século.', 'Recusou o Nobel de Literatura de 1964 por coerência com sua ideia de escritor.'],
    cronologia: [
      [1905, 'Nasce em Paris.'],
      [1929, 'Conhece Simone de Beauvoir.'],
      [1938, 'Publica "A Náusea".'],
      [1940, 'É capturado pelos alemães.'],
      [1943, 'Publica "O Ser e o Nada".'],
      [1945, 'Funda "Les Temps Modernes".'],
      [1964, 'Recusa o Prêmio Nobel.'],
      [1980, 'Morre em Paris.']
    ]
  },

  'Simone Weil': {
    titulo: 'A filósofa que foi para a fábrica',
    cat: 'fe',
    perfis: ['filosofos', 'ativistas', 'religiosos'],
    origem: 'europeus',
    resumo: 'Largou a cátedra para trabalhar em linha de montagem e entender por dentro o que a fadiga faz com uma pessoa.',
    curta: 'Professora de filosofia brilhante, pediu licença para trabalhar como operária em fábricas de automóveis. Depois lutou na Espanha, aproximou-se do cristianismo sem se batizar e morreu aos 34 anos, tendo reduzido a própria alimentação à ração da França ocupada.',
    bio: [
      'Nascida numa família judia agnóstica e culta de Paris, Simone Weil foi aluna de Alain e passou entre as primeiras colocadas na agregação de filosofia, à frente de Simone de Beauvoir. Deu aulas em liceus de província e se envolveu com sindicatos e greves desde o começo.',
      'Em 1934 pediu licença para trabalhar como operária não qualificada na Alsthom e na Renault. Anotou tudo num diário de fábrica. A conclusão a marcou para sempre: a fadiga extrema não gera revolta, gera submissão; ela apaga o pensamento e a própria noção de dignidade.',
      'Foi voluntária na Guerra Civil Espanhola, onde se queimou gravemente num acidente. A partir de 1937 teve experiências místicas que a aproximaram do cristianismo, mas recusou o batismo por não querer se separar dos que estavam fora da Igreja.',
      'Fugiu com a família para os Estados Unidos e voltou a Londres para servir à França Livre. Adoeceu de tuberculose e recusou comer mais do que a ração dos compatriotas ocupados. Morreu aos 34 anos. Quase toda a sua obra foi publicada depois, a partir de cadernos.'
    ],
    contexto: 'Os anos 1930 e 1940 puseram a Europa entre fascismo, stalinismo e guerra. Weil recusou os três campos e insistiu numa política baseada em obrigações e atenção ao sofrimento concreto, o que a deixou sem partido e sem igreja.',
    contribuicoes: ['Escreveu sobre a atenção como forma mais alta de generosidade.', 'Analisou o trabalho industrial a partir da própria experiência na linha de montagem.', 'Formulou a ideia de "desenraizamento" como doença das sociedades modernas.', 'Propôs pensar deveres antes de direitos na reconstrução do pós-guerra.'],
    cronologia: [
      [1909, 'Nasce em Paris.'],
      [1931, 'Começa a lecionar filosofia.'],
      [1934, 'Trabalha como operária em fábricas.'],
      [1936, 'Vai à Guerra Civil Espanhola.'],
      [1938, 'Vive a experiência mística em Solesmes.'],
      [1942, 'Vai aos Estados Unidos e volta a Londres.'],
      [1943, 'Morre na Inglaterra, aos 34 anos.']
    ]
  },

  'Baltasar Gracián': {
    titulo: 'Trezentas regras para sobreviver à corte',
    cat: 'reflexao',
    perfis: ['filosofos', 'literatura'],
    origem: 'europeus',
    resumo: 'Jesuíta que publicou sem autorização da ordem e foi punido por isso, deixou um manual de prudência que Schopenhauer traduziu e carregava consigo.',
    curta: 'Jesuíta espanhol que publicou seus livros sob pseudônimo, contrariando a ordem, e acabou vigiado e afastado. Deixou trezentos aforismos sobre como agir no mundo sem se corromper nem ser devorado por ele.',
    bio: [
      'Gracián entrou na Companhia de Jesus aos dezoito anos e passou a vida entre cátedras, confessionários e capelanias militares. Foi capelão do exército espanhol durante a revolta da Catalunha, onde ganhou fama por animar as tropas.',
      'Publicou quase toda a obra sob o pseudônimo de Lorenzo Gracián, nome de um irmão, sem a licença exigida pela ordem. Os superiores sabiam e toleraram por um tempo, até que a publicação do "Criticón" levou a repreensão pública, retirada da cátedra e vigilância.',
      'A "Arte da Prudência" reúne trezentos aforismos comentados sobre reputação, tempo certo de agir, escolha de aliados, uso da palavra e defesa contra a inveja. Não é cinismo: é a descrição realista de uma corte perigosa, escrita por quem tinha compromisso moral.',
      'Schopenhauer traduziu o livro para o alemão e o considerava insuperável; Nietzsche disse que a Europa nunca produziu nada mais fino em matéria de sutileza moral. Gracián morreu em 1658, punido pela própria ordem.'
    ],
    contexto: 'A Espanha do século XVII declinava como potência enquanto florescia culturalmente. Gracián escreve no Barroco, num ambiente de aparências, favores e quedas súbitas, e o seu tema é exatamente como se conduzir nesse mundo.',
    contribuicoes: ['Criou um dos manuais de prudência prática mais lidos da história.', 'Levou o conceptismo barroco ao extremo, condensando ideias em frases mínimas.', 'Escreveu "O Criticón", alegoria em três partes sobre a educação e o desencanto.', 'Influenciou diretamente Schopenhauer, Nietzsche e a tradição moralista europeia.'],
    cronologia: [
      [1601, 'Nasce em Belmonte de Gracián, Aragão.'],
      [1619, 'Entra na Companhia de Jesus.'],
      [1637, 'Publica "El Héroe" sob pseudônimo.'],
      [1647, 'Publica a "Arte da Prudência".'],
      [1651, 'Começa a publicar "O Criticón".'],
      [1658, 'Morre em Tarazona, sob vigilância da ordem.']
    ]
  },

  'Samuel Johnson': {
    titulo: 'Um dicionário feito por um homem só',
    cat: 'reflexao',
    perfis: ['literatura'],
    origem: 'europeus',
    resumo: 'Levou nove anos para escrever sozinho o dicionário que organizou a língua inglesa — e virou o autor mais citado depois de Shakespeare.',
    curta: 'Pobre, doente e com tiques que assustavam quem o via pela primeira vez, escreveu em nove anos, com seis assistentes, o dicionário que a Academia Francesa levara quarenta anos e quarenta acadêmicos para fazer.',
    bio: [
      'Filho de um livreiro falido de Lichfield, Johnson teve infância doente — escrófula, visão e audição comprometidas de um lado, tiques involuntários que hoje se supõe serem síndrome de Tourette. Entrou em Oxford e teve de sair depois de treze meses por falta de dinheiro.',
      'Casou-se com uma viúva vinte anos mais velha, tentou abrir uma escola que fracassou e foi para Londres viver de escrita, na época uma das profissões mais precárias que existiam. Escreveu ensaios, biografias, relatos parlamentares reconstruídos de memória e poesia.',
      'Em 1746 aceitou compilar um dicionário da língua inglesa. Levou nove anos, definiu mais de quarenta mil palavras e ilustrou cada uma com citações de autores reais — método que criou o padrão da lexicografia moderna e antecipou o Oxford English Dictionary.',
      'Sua conversa, mais até que seus livros, o tornou lendário: James Boswell registrou anos de diálogos na biografia que é considerada a melhor da língua inglesa. Johnson recebia em casa pessoas sem teto, sustentava agregados e nunca teve dinheiro sobrando.'
    ],
    contexto: 'O inglês do século XVIII não tinha ortografia estável nem obra de referência. Padronizar a língua era projeto nacional em vários países europeus, e a Inglaterra confiou o seu, sem financiamento público, a um autor endividado.',
    contribuicoes: ['Compilou "A Dictionary of the English Language", padrão por mais de um século.', 'Criou o método de definir palavras com citações de uso real.', 'Escreveu "Vidas dos Poetas", marco da crítica literária em inglês.', 'É, depois de Shakespeare, o autor mais citado em inglês.'],
    cronologia: [
      [1709, 'Nasce em Lichfield.'],
      [1737, 'Vai para Londres viver de escrita.'],
      [1746, 'Aceita o contrato do dicionário.'],
      [1755, 'Publica o dicionário.'],
      [1763, 'Conhece James Boswell.'],
      [1779, 'Publica "Vidas dos Poetas".'],
      [1784, 'Morre em Londres.']
    ]
  },

  Krishna: {
    titulo: 'O diálogo antes da batalha',
    cat: 'fe',
    perfis: ['religiosos'],
    origem: 'asiaticos',
    resumo: 'Figura central do Bhagavad Gita, em que o dever, a ação e o desapego do resultado são discutidos às vésperas de uma guerra.',
    curta: 'No Bhagavad Gita, o guerreiro Arjuna larga o arco diante da batalha e Krishna responde com setecentos versos sobre dever, ação e desapego do resultado — o texto espiritual mais lido da Índia.',
    bio: [
      'Krishna é uma das figuras centrais do hinduísmo, cultuado como avatar de Vishnu. Sua presença atravessa o Mahabharata, os Puranas e a devoção popular indiana, aparecendo ora como criança travessa, ora como pastor, ora como conselheiro real.',
      'O texto que o tornou conhecido no mundo inteiro é o Bhagavad Gita, um trecho de setecentos versos inserido no sexto livro do Mahabharata. A cena é precisa: dois exércitos formados, e o guerreiro Arjuna se recusa a lutar ao reconhecer parentes e mestres do outro lado.',
      'A resposta de Krishna organiza o pensamento indiano sobre a ação: cumprir o próprio dever sem se prender ao fruto, agir sem ser movido pelo cálculo do ganho, reconhecer o que é permanente por trás do que muda. O texto apresenta três caminhos — o da ação, o do conhecimento e o da devoção.',
      'A leitura do Gita foi decisiva para Gandhi, que o chamava de dicionário espiritual e o lia diariamente. Chegou ao Ocidente pela tradução de Charles Wilkins, em 1785, e influenciou Emerson, Thoreau e boa parte do transcendentalismo americano.'
    ],
    contexto: 'O Bhagavad Gita foi composto entre os séculos II a.C. e II d.C., num período de reorganização religiosa na Índia em que as tradições védicas sacrificiais conviviam com o budismo e o jainismo. Ele oferece uma síntese que manteve o hinduísmo vivo e acessível.',
    contribuicoes: ['O Bhagavad Gita é o texto espiritual mais lido e comentado da tradição indiana.', 'Formulou a ideia de ação desapegada do resultado, central para a ética hindu.', 'Apresentou os caminhos da ação, do conhecimento e da devoção como vias legítimas.', 'Influenciou Gandhi, o transcendentalismo americano e a espiritualidade ocidental do século XX.'],
    cronologia: [
      ['séc. II a.C.', 'Período provável de composição do Bhagavad Gita.'],
      ['séc. VIII', 'Comentário de Shankara consolida sua autoridade filosófica.'],
      [1785, 'Primeira tradução para o inglês, por Charles Wilkins.'],
      [1909, 'Gandhi passa a lê-lo diariamente.']
    ]
  },

  'Jesus Cristo': {
    titulo: 'Três anos que reorganizaram o Ocidente',
    cat: 'fe',
    perfis: ['religiosos'],
    origem: 'antiguidade',
    resumo: 'Pregou por cerca de três anos na Galileia e na Judeia, foi executado como agitador e tornou-se o centro da religião mais difundida do mundo.',
    curta: 'Carpinteiro da Galileia que pregou por cerca de três anos, reuniu discípulos entre pescadores e cobradores de impostos, foi executado como agitador político e tornou-se a figura central da religião com mais seguidores no mundo.',
    bio: [
      'As fontes principais sobre Jesus são os quatro Evangelhos, escritos entre cerca de 65 e 100 d.C., além de menções breves em Tácito, Flávio Josefo e Suetônio. Historiadores em geral concordam sobre dois pontos factuais: ele foi batizado por João Batista e foi crucificado sob Pôncio Pilatos.',
      'Sua pregação se concentrou na Galileia, região rural e pobre, e usava parábolas — histórias curtas do cotidiano agrícola e doméstico. O núcleo ético aparece no Sermão da Montanha: as bem-aventuranças, o amor aos inimigos, a crítica à religiosidade de fachada.',
      'Ele reunia à mesa gente que a religião oficial mantinha à distância: cobradores de impostos, prostitutas, doentes, samaritanos. Essa prática, mais do que qualquer doutrina, é o que os textos apresentam como escândalo aos olhos das autoridades de seu tempo.',
      'Foi preso em Jerusalém durante a Páscoa, julgado e crucificado, pena romana reservada a escravos e sediciosos. A convicção dos discípulos de que ele havia ressuscitado deu origem a um movimento que, em três séculos, passaria de seita perseguida a religião do império.'
    ],
    contexto: 'A Judeia do século I era província romana ocupada, com tensão constante entre autoridades imperiais, elite sacerdotal e grupos messiânicos. Qualquer figura popular que atraísse multidões era vista como risco político, e isso explica o tipo de execução que sofreu.',
    contribuicoes: ['O Sermão da Montanha é um dos textos éticos mais influentes já escritos.', 'As parábolas criaram uma forma de ensino por narrativa curta que atravessou dois milênios.', 'A regra de tratar o outro como se quer ser tratado ganhou aqui sua formulação mais difundida.', 'A prática de acolher os excluídos moldou instituições de caridade, hospitais e escolas no Ocidente.'],
    cronologia: [
      ['c. 4 a.C.', 'Nascimento, segundo a datação mais aceita.'],
      ['c. 28 d.C.', 'Batismo por João Batista e início da pregação.'],
      ['c. 30–33 d.C.', 'Crucificação em Jerusalém.'],
      ['c. 50 d.C.', 'Primeiras cartas de Paulo, os textos cristãos mais antigos.'],
      ['c. 70 d.C.', 'Redação do Evangelho de Marcos.']
    ]
  },

  'Apóstolo Paulo': {
    titulo: 'O perseguidor que mudou de lado',
    cat: 'fe',
    perfis: ['religiosos'],
    origem: 'antiguidade',
    resumo: 'Perseguia cristãos, mudou de posição a caminho de Damasco e escreveu as cartas mais antigas do Novo Testamento.',
    curta: 'Fariseu formado, participava da perseguição aos primeiros cristãos até uma experiência na estrada de Damasco. Depois percorreu o Mediterrâneo fundando comunidades e escreveu as cartas que estruturaram a teologia cristã.',
    bio: [
      'Saulo de Tarso era judeu da diáspora, cidadão romano, formado na tradição farisaica e fabricante de tendas de ofício. Participava ativamente da repressão ao movimento cristão nascente, incluindo a aprovação do apedrejamento de Estêvão.',
      'A caminho de Damasco viveu a experiência que reorientou sua vida. Passou a pregar exatamente aquilo que combatia, e enfrentou desconfiança dos dois lados: dos judeus, por traição; dos cristãos, por seu histórico.',
      'Sua decisão mais consequente foi teológica e prática: sustentar que os não judeus poderiam entrar na comunidade cristã sem adotar a circuncisão e a lei mosaica. Sem essa decisão, discutida no chamado concílio de Jerusalém, o cristianismo teria permanecido uma corrente interna ao judaísmo.',
      'Fez três grandes viagens missionárias pela Ásia Menor e pela Grécia, foi preso várias vezes, naufragou e escreveu cartas a comunidades específicas resolvendo conflitos concretos. Sete dessas cartas são consideradas autênticas por consenso acadêmico e são os textos cristãos mais antigos que existem. Foi executado em Roma, provavelmente sob Nero.'
    ],
    contexto: 'O Império Romano do século I tinha estradas, língua franca e circulação intensa de pessoas — condições que Paulo aproveitou como poucos. As comunidades que ele fundou eram urbanas, mistas e cheias de conflitos práticos, e é a esses conflitos que as cartas respondem.',
    contribuicoes: ['Escreveu as cartas mais antigas do Novo Testamento, anteriores aos Evangelhos.', 'Sustentou a abertura do cristianismo aos não judeus, decisiva para sua expansão.', 'Formulou os conceitos de graça, fé e justificação que estruturam a teologia cristã.', 'O capítulo 13 da Primeira Carta aos Coríntios é um dos textos sobre o amor mais lidos do mundo.'],
    cronologia: [
      ['c. 5 d.C.', 'Nasce em Tarso, na Cilícia.'],
      ['c. 34 d.C.', 'Experiência na estrada de Damasco.'],
      ['c. 49 d.C.', 'Concílio de Jerusalém.'],
      ['c. 50 d.C.', 'Escreve a Primeira Carta aos Tessalonicenses.'],
      ['c. 57 d.C.', 'Escreve a Carta aos Romanos.'],
      ['c. 64 d.C.', 'Executado em Roma.']
    ]
  },

  Hillel: {
    titulo: 'A Torá enquanto se está de pé',
    cat: 'fe',
    perfis: ['religiosos', 'educadores'],
    origem: 'antiguidade',
    resumo: 'Sábio judeu que resumiu toda a lei numa única frase e fundou a escola cujas decisões prevaleceram no judaísmo rabínico.',
    curta: 'Chegou pobre a Jerusalém e virou o sábio mais influente do seu tempo. Quando um estrangeiro pediu que resumisse a Torá enquanto se equilibrava num pé só, respondeu com uma frase — e disse que o resto era comentário.',
    bio: [
      'Hillel veio da Babilônia para Jerusalém já adulto, sem recursos. A tradição conta que trabalhava como lenhador e pagava metade do salário para entrar na casa de estudo, e que numa noite de inverno, sem dinheiro, subiu ao telhado para ouvir pela claraboia e foi encontrado coberto de neve.',
      'Tornou-se a maior autoridade rabínica de sua geração, e sua escola — a Casa de Hillel — disputava interpretações com a Casa de Shammai, mais rigorosa. Na quase totalidade dos casos, a tradição posterior adotou as posições de Hillel, por serem mais flexíveis e voltadas à realidade das pessoas.',
      'A ele se atribui a formulação negativa da regra de ouro, dada a um pagão que pedia um resumo da lei: não faça ao próximo o que é odioso para você. E também as três perguntas encadeadas sobre responsabilidade pessoal, solidariedade e urgência que abrem os Pirkei Avot.',
      'Criou ainda o prosbul, mecanismo jurídico que permitia manter o crédito funcionando apesar do perdão de dívidas do ano sabático — um exemplo de como ajustava a lei para não prejudicar justamente os pobres que ela pretendia proteger.'
    ],
    contexto: 'A Judeia sob domínio romano vivia disputas entre correntes religiosas e pressão política crescente. O trabalho de interpretação de Hillel e de sua escola preparou o judaísmo para sobreviver à destruição do Templo, em 70 d.C., deslocando o centro do culto para o estudo.',
    contribuicoes: ['Fundou a Casa de Hillel, cuja jurisprudência prevaleceu no judaísmo rabínico.', 'Formulou a versão mais citada da regra de ouro no judaísmo.', 'Criou o prosbul, ajuste jurídico que preservou o crédito aos mais pobres.', 'Estabeleceu regras de interpretação de textos ainda usadas no estudo talmúdico.'],
    cronologia: [
      ['c. 110 a.C.', 'Nasce na Babilônia.'],
      ['c. 30 a.C.', 'Torna-se autoridade em Jerusalém.'],
      ['séc. I', 'Consolida-se a disputa entre as casas de Hillel e Shammai.'],
      ['c. 10 d.C.', 'Morte, segundo a tradição.']
    ]
  },

  'Madre Teresa de Calcutá': {
    titulo: 'Trinta e oito anos de escuridão',
    cat: 'fe',
    perfis: ['religiosos', 'ativistas'],
    origem: 'europeus',
    resumo: 'Fundou uma congregação que chegou a mais de cem países e viveu quase quatro décadas sem sentir a presença de Deus, como revelaram suas cartas.',
    curta: 'Deixou o convento onde dava aula para viver nas ruas de Calcutá e cuidar de quem morria sem ninguém. Ganhou o Nobel da Paz. Suas cartas, publicadas depois da morte, revelaram décadas de silêncio interior que ela nunca tornou público.',
    bio: [
      'Anjezë Gonxhe Bojaxhiu nasceu em Skopje, hoje Macedônia do Norte, em família albanesa católica. Aos dezoito entrou para as Irmãs de Loreto, foi enviada à Índia e passou quase vinte anos ensinando em um colégio para meninas de classe média em Calcutá.',
      'Em 1946, numa viagem de trem, teve o que descreveu como um chamado a servir os mais pobres vivendo entre eles. Levou dois anos para obter autorização, saiu do convento com poucas rupias e começou a trabalhar em favelas, aprendendo enfermagem básica.',
      'Fundou em 1950 as Missionárias da Caridade. Abriu casas para moribundos, leprosários e orfanatos; a congregação chegou a mais de setecentas casas em mais de cem países. Recebeu o Nobel da Paz em 1979 e pediu que o dinheiro do banquete fosse usado com os pobres.',
      'Após sua morte, a publicação de cartas a diretores espirituais revelou que, de 1949 até quase o fim da vida, ela viveu sem qualquer sensação da presença de Deus. Continuou o trabalho mesmo assim, e essa contradição passou a ser parte central de como sua figura é discutida.'
    ],
    contexto: 'A Índia recém-independente enfrentava a partilha, ondas de refugiados e miséria urbana extrema em Calcutá. Foi nesse cenário que a congregação nasceu, e é por isso que o foco não era curar, mas garantir que ninguém morresse sozinho.',
    contribuicoes: ['Fundou as Missionárias da Caridade, presentes em mais de cem países.', 'Criou casas para moribundos, leprosários e orfanatos em larga escala.', 'Recebeu o Nobel da Paz em 1979 e recusou o banquete de honra.', 'Deixou uma correspondência que se tornou documento raro sobre dúvida e perseverança.'],
    cronologia: [
      [1910, 'Nasce em Skopje.'],
      [1929, 'Chega à Índia.'],
      [1946, 'O chamado durante a viagem de trem.'],
      [1950, 'Funda as Missionárias da Caridade.'],
      [1979, 'Recebe o Nobel da Paz.'],
      [1997, 'Morre em Calcutá.'],
      [2016, 'É canonizada.']
    ]
  }
};

/* ---------------- NEGÓCIOS, GESTÃO E INVESTIMENTOS ---------------- */
Object.assign(PERFIS_PROFUNDOS, {
  'John C. Maxwell': {
    titulo: 'Liderança é influência, e influência se aprende',
    cat: 'motivacao',
    perfis: ['estrategistas', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Pastor que virou o autor de liderança mais vendido do mundo, defendendo que liderar não é cargo, é influência construída.',
    curta: 'Foi pastor por 25 anos antes de escrever sobre liderança. Vendeu mais de 30 milhões de livros defendendo uma tese simples: liderança não vem do cargo, vem da influência, e influência se constrói em níveis.',
    bio: [
      'Maxwell nasceu em Ohio, filho de um pastor, e seguiu o mesmo caminho. Liderou congregações por 25 anos, e foi ali — administrando voluntários, que ninguém pode obrigar a nada — que formou sua ideia central: se as pessoas não são obrigadas a te seguir, você descobre rápido que autoridade formal não serve para muita coisa.',
      'Em 1979 começou a dar treinamentos para outros líderes religiosos. A demanda cresceu, e nos anos 1990 ele deixou o púlpito para se dedicar à formação de líderes em empresas, governos e organizações sociais, criando as empresas INJOY, EQUIP e o John Maxwell Team.',
      'Sua obra mais conhecida, "As 21 Irrefutáveis Leis da Liderança", organiza a prática em princípios testáveis. Outro modelo bastante usado é o dos cinco níveis de liderança: posição, permissão, produção, desenvolvimento de pessoas e pináculo — a ideia de que cada nível é conquistado, não concedido.',
      'É criticado por parte do meio acadêmico pela ausência de pesquisa empírica formal e pela repetição de temas entre livros. Ainda assim, poucos autores tiveram tanto alcance prático em formação de gestores: mais de 30 milhões de exemplares vendidos e programas aplicados em dezenas de países.'
    ],
    contexto: 'A partir dos anos 1990, as empresas passaram a tratar liderança como competência a ser treinada, e não como traço de personalidade. Maxwell ocupou exatamente esse espaço, traduzindo experiência pastoral em linguagem corporativa.',
    contribuicoes: ['Formulou os cinco níveis de liderança, modelo usado em treinamento corporativo no mundo todo.', 'Escreveu "As 21 Irrefutáveis Leis da Liderança", com mais de um milhão de exemplares vendidos.', 'Consolidou a ideia de que liderança é influência, não posição hierárquica.', 'Criou organizações de formação que treinaram líderes em mais de 180 países.'],
    cronologia: [
      [1947, 'Nasce em Garden City, Ohio.'],
      [1969, 'Assume sua primeira congregação.'],
      [1979, 'Começa a treinar outros líderes.'],
      [1993, 'Publica "Desenvolvendo o Líder Dentro de Você".'],
      [1998, 'Publica "As 21 Irrefutáveis Leis da Liderança".'],
      [2011, 'Cria o John Maxwell Team.']
    ]
  },

  'Morgan Housel': {
    titulo: 'Dinheiro é comportamento, não planilha',
    cat: 'financas',
    perfis: ['investidores'],
    origem: 'norteamericanos',
    resumo: 'Mostrou com histórias curtas que a diferença entre quem enriquece e quem quebra costuma ser psicológica, não técnica.',
    curta: 'Escreveu um livro de finanças sem uma única fórmula complicada. "A Psicologia Financeira" vendeu milhões de exemplares defendendo que comportamento — paciência, humildade, margem de erro — pesa mais que conhecimento técnico.',
    bio: [
      'Housel começou a carreira em fundos de private equity e investment banking, e migrou para o jornalismo financeiro no The Motley Fool e no Wall Street Journal. Recebeu duas vezes o prêmio Best in Business da Society of American Business Editors and Writers.',
      'Sua tese se formou observando um padrão incômodo: pessoas com pouquíssima formação financeira acumulando patrimônio ao longo da vida, e profissionais brilhantes quebrando. A diferença raramente estava no que sabiam, e quase sempre em como se comportavam sob incerteza.',
      '"A Psicologia Financeira", publicado em 2020, reúne dezenove histórias curtas sobre sorte e risco, o poder dos juros compostos, o custo de tentar acompanhar os outros e a importância de sobreviver por tempo suficiente. Foi traduzido para mais de cinquenta idiomas.',
      'Em "O Mesmo de Sempre", de 2023, muda o eixo: em vez de tentar prever o que vai mudar, olha para o que nunca muda no comportamento humano — ganância, medo, inveja, a atração por histórias — e argumenta que esse é o terreno mais firme para tomar decisões de longo prazo.'
    ],
    contexto: 'A popularização dos aplicativos de investimento nos anos 2010 levou milhões de pessoas ao mercado sem formação prévia. Housel escreveu para esse público, e seu sucesso mostra que a demanda era menos por técnica e mais por critério.',
    contribuicoes: ['Popularizou a ideia de que finanças pessoais são um problema de comportamento.', 'Escreveu um dos livros de finanças mais vendidos do século, traduzido em mais de cinquenta idiomas.', 'Difundiu os conceitos de margem de erro e de "sobreviver primeiro" no investimento.', 'É sócio do fundo Collaborative Fund, onde escreve regularmente sobre risco e incerteza.'],
    cronologia: [
      [1983, 'Nasce nos Estados Unidos.'],
      [2007, 'Começa a escrever no The Motley Fool.'],
      [2016, 'Torna-se sócio do Collaborative Fund.'],
      [2020, 'Publica "A Psicologia Financeira".'],
      [2023, 'Publica "O Mesmo de Sempre".']
    ]
  },

  'Benjamin Franklin': {
    titulo: 'Aprendiz de tipógrafo, autor de um país',
    cat: 'educacao',
    perfis: ['politicos', 'cientistas', 'empresarios'],
    origem: 'norteamericanos',
    resumo: 'Saiu de casa aos dezessete com pouco dinheiro, virou tipógrafo, cientista, diplomata e um dos redatores da independência americana.',
    curta: 'Décimo quinto de dezessete filhos, teve dois anos de escola formal. Virou tipógrafo, inventor do para-raios, criador da primeira biblioteca pública americana e o diplomata que convenceu a França a apoiar a independência dos Estados Unidos.',
    bio: [
      'Franklin nasceu em Boston e teve apenas dois anos de escola. Foi aprendiz na tipografia do irmão, com quem brigou, e fugiu para a Filadélfia aos dezessete anos. Montou a própria gráfica, publicou o "Pennsylvania Gazette" e o "Almanaque do Pobre Ricardo", que o deixou financeiramente independente aos 42 anos.',
      'Aposentado dos negócios, dedicou-se à ciência e à vida pública. Provou a natureza elétrica dos raios, inventou o para-raios, os óculos bifocais e um fogão mais eficiente — e recusou-se a patentear qualquer um deles, argumentando que quem se beneficia das invenções alheias deve retribuir de graça.',
      'Criou a primeira biblioteca pública por assinatura das colônias, o primeiro corpo de bombeiros voluntários da Filadélfia, um hospital e a instituição que viraria a Universidade da Pensilvânia. Foi diretor dos Correios coloniais e organizou o sistema postal.',
      'Como diplomata, passou anos em Londres e depois em Paris, onde sua fama científica e seu jeito simples cativaram a corte francesa. A aliança que negociou foi decisiva para a vitória americana. É a única pessoa que assinou os quatro documentos fundadores dos Estados Unidos.'
    ],
    contexto: 'As treze colônias do século XVIII estavam entre a lealdade à Coroa e a insatisfação com os impostos. Franklin passou anos tentando conciliação em Londres e só se converteu à independência depois de ser humilhado publicamente diante do Conselho Privado britânico.',
    contribuicoes: ['Demonstrou a natureza elétrica dos raios e inventou o para-raios.', 'Fundou a primeira biblioteca pública por assinatura das colônias americanas.', 'Negociou a aliança com a França que viabilizou a independência dos Estados Unidos.', 'Assinou a Declaração de Independência, o tratado com a França, o de Paris e a Constituição.'],
    cronologia: [
      [1706, 'Nasce em Boston.'],
      [1723, 'Foge para a Filadélfia aos dezessete anos.'],
      [1732, 'Lança o "Almanaque do Pobre Ricardo".'],
      [1752, 'Realiza o experimento com a pipa.'],
      [1776, 'Assina a Declaração de Independência e parte para a França.'],
      [1787, 'Participa da Convenção Constitucional.'],
      [1790, 'Morre na Filadélfia.']
    ]
  },

  'Peter Drucker': {
    titulo: 'Quem inventou a administração como disciplina',
    cat: 'negocios',
    perfis: ['estrategistas'],
    origem: 'europeus',
    resumo: 'Fugiu do nazismo, entrou numa montadora para observá-la por dentro e transformou a gestão numa disciplina séria.',
    curta: 'Austríaco que fugiu da Alemanha nazista, passou dois anos dentro da General Motors observando como uma grande empresa realmente funciona e escreveu os livros que criaram a administração como campo de estudo.',
    bio: [
      'Drucker cresceu em Viena, numa casa que recebia Schumpeter e Freud. Formou-se em direito, trabalhou como jornalista econômico na Alemanha e viu seu primeiro texto ser queimado pelos nazistas. Saiu do país em 1933 e chegou aos Estados Unidos em 1937.',
      'Em 1943, a General Motors o convidou para estudar sua estrutura interna por dois anos. O resultado, "Concept of the Corporation", foi mal recebido pela própria empresa — ele sugeria descentralização e tratar trabalhadores como recurso, não como custo — mas virou leitura obrigatória fora dela, inclusive no Japão.',
      'Em "A Prática da Administração", de 1954, formulou a administração por objetivos e defendeu que o propósito de um negócio é criar um cliente. Foi ele quem cunhou a expressão "trabalhador do conhecimento", em 1959, antevendo a economia que só se consolidaria décadas depois.',
      'Escreveu 39 livros, ensinou por mais de trinta anos na Claremont Graduate University e trabalhou muito com organizações sem fins lucrativos, que considerava tão dependentes de boa gestão quanto qualquer empresa. Morreu aos 95 anos, oito dias antes de completar 96.'
    ],
    contexto: 'Depois da Segunda Guerra, as corporações americanas ficaram grandes demais para serem administradas por intuição. Drucker chegou exatamente nesse momento e ofereceu vocabulário, método e critério a uma prática que ainda não tinha nada disso.',
    contribuicoes: ['Criou a administração por objetivos, base de sistemas de metas usados até hoje.', 'Cunhou o conceito de "trabalhador do conhecimento" em 1959.', 'Definiu que o propósito de um negócio é criar e manter clientes.', 'Foi central na reconstrução industrial japonesa do pós-guerra.'],
    cronologia: [
      [1909, 'Nasce em Viena.'],
      [1933, 'Deixa a Alemanha.'],
      [1943, 'Começa o estudo interno da General Motors.'],
      [1954, 'Publica "A Prática da Administração".'],
      [1959, 'Cunha "trabalhador do conhecimento".'],
      [1971, 'Vai lecionar em Claremont.'],
      [2005, 'Morre na Califórnia.']
    ]
  },

  'Philip Kotler': {
    titulo: 'O livro que ensinou marketing ao mundo',
    cat: 'negocios',
    perfis: ['estrategistas'],
    origem: 'norteamericanos',
    resumo: 'Transformou marketing de técnica de vendas em disciplina acadêmica com método, e escreveu o livro-texto adotado no mundo inteiro.',
    curta: 'Formou-se em economia com dois futuros ganhadores do Nobel e decidiu levar rigor científico ao marketing, que na época era pouco mais do que técnica de vendas. Seu livro-texto virou padrão em universidades de dezenas de países.',
    bio: [
      'Kotler estudou economia com Milton Friedman em Chicago e com Paul Samuelson no MIT, dois futuros ganhadores do Nobel. Entrou na Kellogg School, da Northwestern, em 1962, e ali percebeu que marketing era ensinado sem teoria, sem método e sem dados.',
      'Em 1967 publicou "Administração de Marketing", que reorganizou o campo em torno de análise, planejamento, implementação e controle — e transformou o marketing numa disciplina com estrutura própria. O livro está na décima sexta edição e formou gerações inteiras.',
      'Ampliou o alcance do conceito: defendeu que museus, hospitais, partidos, universidades e causas sociais também precisam entender seus públicos. Daí nasceram o marketing social e o marketing de lugares, que trata cidades e países como marcas.',
      'Nos anos 2000 acompanhou a virada digital com a série Marketing 3.0, 4.0 e 5.0, deslocando o foco do produto para o cliente, depois para o ser humano e por fim para a tecnologia aplicada à experiência. Continuou publicando depois dos noventa anos.'
    ],
    contexto: 'Nos anos 1960, produção em massa e televisão criaram mercados de consumo em escala inédita. Faltava às empresas um modo sistemático de entender demanda, e é essa lacuna que Kotler ocupou.',
    contribuicoes: ['Escreveu o livro-texto de marketing mais adotado no mundo.', 'Transformou o marketing em disciplina acadêmica com método próprio.', 'Criou o marketing social, aplicado a causas e comportamentos.', 'Estendeu o conceito a organizações sem fins lucrativos, cidades e países.'],
    cronologia: [
      [1931, 'Nasce em Chicago.'],
      [1962, 'Entra para a Kellogg School.'],
      [1967, 'Publica "Administração de Marketing".'],
      [1971, 'Formula o conceito de marketing social.'],
      [2010, 'Lança a série Marketing 3.0.'],
      [2021, 'Publica "Marketing 5.0".']
    ]
  },

  'W. Edwards Deming': {
    titulo: 'O americano que o Japão ouviu primeiro',
    cat: 'negocios',
    perfis: ['estrategistas', 'cientistas'],
    origem: 'norteamericanos',
    resumo: 'Foi ignorado nos Estados Unidos e reconstruiu a indústria japonesa com estatística e uma ideia simples: qualidade é responsabilidade da gestão.',
    curta: 'Estatístico que os Estados Unidos ignoraram e que o Japão convidou em 1950. Ensinou que defeito não é culpa do operário, é falha do sistema — e ajudou a transformar "made in Japan" de piada em padrão de excelência.',
    bio: [
      'Deming era físico e estatístico, e trabalhou no Departamento de Agricultura e no Censo americano, onde aplicou controle estatístico de processos com resultados notáveis. Durante a guerra, treinou engenheiros da indústria bélica; encerrado o conflito, as empresas americanas voltaram a produzir sem se preocupar com qualidade, porque tudo vendia.',
      'Em 1950 foi convidado pela União Japonesa de Cientistas e Engenheiros para dar palestras. Falou a executivos, não a técnicos, e disse algo então contraintuitivo: melhorar a qualidade reduz custo, porque elimina retrabalho, desperdício e inspeção. O Japão levou a sério.',
      'Formulou catorze pontos para a transformação da gestão, entre eles abandonar a inspeção em massa, deixar de comprar apenas pelo preço, remover o medo do ambiente de trabalho e acabar com metas numéricas arbitrárias e avaliações de desempenho por ranking.',
      'Só ficou conhecido nos Estados Unidos em 1980, aos 79 anos, após um documentário da NBC. Passou os últimos catorze anos dando seminários de quatro dias, muitas vezes irritado, dizendo a executivos americanos que o problema não eram os trabalhadores.'
    ],
    contexto: 'O Japão do pós-guerra precisava exportar para se reerguer, e sua reputação industrial era péssima. Adotar a estatística de qualidade como política nacional foi uma escolha estratégica, e o prêmio máximo da indústria japonesa leva o nome de Deming desde 1951.',
    contribuicoes: ['Levou o controle estatístico de processos à indústria japonesa do pós-guerra.', 'Formulou os catorze pontos da gestão pela qualidade.', 'Demonstrou que a maior parte dos defeitos vem do sistema, não das pessoas.', 'Criou o conceito de "saber profundo": sistema, variação, conhecimento e psicologia.'],
    cronologia: [
      [1900, 'Nasce em Sioux City, Iowa.'],
      [1928, 'Doutora-se em física em Yale.'],
      [1950, 'Dá as palestras no Japão.'],
      [1951, 'É criado o Prêmio Deming.'],
      [1980, 'O documentário da NBC o torna conhecido nos EUA.'],
      [1986, 'Publica "Saia da Crise".'],
      [1993, 'Morre em Washington.']
    ]
  },

  'Michael Porter': {
    titulo: 'Por que algumas empresas ganham dinheiro e outras não',
    cat: 'negocios',
    perfis: ['estrategistas', 'economistas'],
    origem: 'norteamericanos',
    resumo: 'Levou a análise econômica de setores para dentro da estratégia empresarial e criou as ferramentas mais usadas do campo.',
    curta: 'Engenheiro que virou economista e depois professor de estratégia, criou as cinco forças e a cadeia de valor — dois modelos que praticamente todo curso de administração do mundo ensina.',
    bio: [
      'Porter formou-se em engenharia aeroespacial em Princeton, fez MBA e doutorado em economia industrial em Harvard. A economia estudava setores para entender concorrência do ponto de vista do regulador; ele inverteu a lente e perguntou o que aquilo significava para uma empresa que quer lucrar.',
      'Em 1979 publicou na Harvard Business Review o artigo que apresentou as cinco forças competitivas: rivalidade entre concorrentes, ameaça de entrantes, ameaça de substitutos, poder de barganha de fornecedores e de compradores. O modelo explica por que setores inteiros são lucrativos ou não, independentemente da competência individual.',
      'Em "Vantagem Competitiva", de 1985, apresentou a cadeia de valor: decompor a empresa em atividades para descobrir onde ela cria valor de fato e onde apenas gasta. E insistiu numa distinção que continua sendo ignorada: eficiência operacional não é estratégia; estratégia é escolher o que não fazer.',
      'Levou o mesmo aparato para a competitividade de países e para a saúde pública, defendendo modelos de atendimento organizados por resultado para o paciente. Fundou grupos de pesquisa e consultorias, e é um dos autores mais citados em administração no mundo.'
    ],
    contexto: 'Nos anos 1970 e 1980, empresas americanas perdiam mercado para concorrentes japoneses e europeus e não sabiam explicar por quê. Porter ofereceu um método analítico onde antes havia intuição e cópia de práticas.',
    contribuicoes: ['Criou o modelo das cinco forças competitivas.', 'Formulou a cadeia de valor como ferramenta de diagnóstico.', 'Definiu as estratégias genéricas de custo, diferenciação e foco.', 'Aplicou a análise competitiva a países e a sistemas de saúde.'],
    cronologia: [
      [1947, 'Nasce em Ann Arbor, Michigan.'],
      [1973, 'Doutora-se em economia industrial em Harvard.'],
      [1979, 'Publica o artigo das cinco forças.'],
      [1980, 'Publica "Estratégia Competitiva".'],
      [1985, 'Publica "Vantagem Competitiva".'],
      [1990, 'Publica "A Vantagem Competitiva das Nações".']
    ]
  },

  'Warren Bennis': {
    titulo: 'Gerentes fazem certo; líderes fazem o certo',
    cat: 'negocios',
    perfis: ['estrategistas', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Foi o oficial mais jovem do seu batalhão na Segunda Guerra e passou a vida estudando o que separa liderança de administração.',
    curta: 'Aos dezenove anos era o oficial de infantaria mais jovem do batalhão na Europa. Passou a vida estudando liderança e formulou a distinção que o campo inteiro adotou: o gerente faz as coisas direito, o líder faz a coisa certa.',
    bio: [
      'Bennis serviu na Segunda Guerra e voltou para estudar no Antioch College, onde foi aluno do reitor Douglas McGregor, autor das Teorias X e Y. Doutorou-se em economia e ciências sociais no MIT e começou pesquisando dinâmica de grupos.',
      'Foi também administrador: reitor em Buffalo e presidente da Universidade de Cincinnati. Contou depois que descobriu ali, na prática, que estava ocupado demais com a máquina para liderar de fato — experiência que virou a base de sua distinção entre gerenciar e liderar.',
      'Em "Líderes: Estratégias para Assumir a Verdadeira Liderança", de 1985, apresentou o resultado de entrevistas com noventa líderes e sustentou que liderança não é traço inato, mas conjunto de competências desenvolvidas — sobretudo a capacidade de comunicar um sentido e de gerar confiança.',
      'Escreveu cerca de trinta livros e assessorou quatro presidentes americanos. Insistia num ponto pouco confortável: líderes se formam em episódios difíceis, que ele chamava de provações, e não em cursos.'
    ],
    contexto: 'Nos anos 1980, o discurso corporativo confundia liderança com autoridade hierárquica. Bennis separou os dois conceitos e abriu caminho para tratar liderança como habilidade aprendível, ideia hoje dominante em formação executiva.',
    contribuicoes: ['Formulou a distinção entre gerenciar e liderar.', 'Mostrou que liderança é competência desenvolvida, não traço de nascimento.', 'Descreveu as "provações" como episódios formadores de líderes.', 'Assessorou quatro presidentes dos Estados Unidos e fundou o Leadership Institute na USC.'],
    cronologia: [
      [1925, 'Nasce em Nova York.'],
      [1944, 'Serve na infantaria na Europa.'],
      [1955, 'Doutora-se no MIT.'],
      [1971, 'Torna-se presidente da Universidade de Cincinnati.'],
      [1985, 'Publica "Líderes".'],
      [2014, 'Morre em Santa Mônica.']
    ]
  },

  'Robert Cialdini': {
    titulo: 'Três anos infiltrado para entender o "sim"',
    cat: 'manipulacao',
    perfis: ['psicologos', 'estrategistas'],
    origem: 'norteamericanos',
    resumo: 'Trabalhou disfarçado em equipes de venda e telemarketing para descobrir na prática o que faz as pessoas concordarem.',
    curta: 'Achava que os experimentos de laboratório não explicavam a persuasão real, então se infiltrou por três anos em equipes de venda, arrecadação e telemarketing. Voltou com seis princípios que hoje são a base de qualquer curso de influência.',
    bio: [
      'Cialdini era professor de psicologia social na Universidade Estadual do Arizona quando percebeu um problema: os experimentos controlados capturavam mecanismos isolados, mas quem realmente entendia de persuasão eram os profissionais que viviam disso.',
      'Passou cerca de três anos em treinamentos e empregos disfarçados — venda de carros, seguros, captação de doações, telemarketing —, anotando as técnicas que funcionavam e testando depois em laboratório o que via em campo.',
      'O resultado foi "As Armas da Persuasão", de 1984, que organiza tudo em seis princípios: reciprocidade, compromisso e coerência, aprovação social, afinidade, autoridade e escassez. O livro vendeu milhões de exemplares e é leitura obrigatória em marketing, negociação e políticas públicas.',
      'Em 2016 acrescentou um sétimo princípio, a unidade — o senso de pertencer ao mesmo grupo —, e publicou "Pré-Suasão", sobre como o momento e o contexto anteriores à mensagem determinam boa parte do resultado. Sempre defendeu o uso ético dos princípios, alertando que manipulá-los destrói a confiança que os sustenta.'
    ],
    contexto: 'A psicologia social do pós-guerra havia mostrado o poder da conformidade e da obediência. Cialdini deu o passo seguinte: mapear como esses mecanismos são usados comercialmente todos os dias, e como se defender deles.',
    contribuicoes: ['Sistematizou os seis (depois sete) princípios da influência.', 'Uniu pesquisa de campo e experimento controlado no estudo da persuasão.', 'Influenciou políticas públicas de comunicação em vários países.', 'Defendeu um uso ético da persuasão, alertando contra a manipulação de dados sociais.'],
    cronologia: [
      [1945, 'Nasce em Milwaukee.'],
      ['1970s', 'Faz o trabalho de campo infiltrado.'],
      [1984, 'Publica "As Armas da Persuasão".'],
      [2001, 'Aposenta-se como professor titular.'],
      [2016, 'Publica "Pré-Suasão" e acrescenta o princípio da unidade.']
    ]
  },

  'Stephen R. Covey': {
    titulo: 'Caráter antes de técnica',
    cat: 'motivacao',
    perfis: ['estrategistas', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Analisou dois séculos de livros de sucesso americanos e concluiu que o país havia trocado princípios por truques.',
    curta: 'Para a tese de doutorado, leu duzentos anos de literatura americana de sucesso e viu uma virada: até 1920 falava-se de caráter; depois, só de técnica e imagem. Escreveu "Os 7 Hábitos" para voltar ao primeiro.',
    bio: [
      'Covey formou-se em administração em Harvard e fez doutorado em Brigham Young, onde analisou a literatura americana de autoajuda desde 1776. Encontrou uma ruptura clara: os textos do primeiro século e meio tratavam de integridade, humildade e coragem; os posteriores, de técnicas de influência e projeção de imagem.',
      'Sua proposta foi voltar ao que chamou de ética do caráter, organizada em sete hábitos: ser proativo, começar com o fim em mente, primeiro o mais importante, pensar ganha-ganha, procurar primeiro compreender, criar sinergia e afinar o instrumento.',
      'Publicado em 1989, "Os 7 Hábitos das Pessoas Altamente Eficazes" vendeu mais de quarenta milhões de exemplares em quarenta idiomas. A matriz de urgência e importância, popularizada ali, virou ferramenta padrão de gestão do tempo.',
      'Fundou empresas de treinamento que se uniram na FranklinCovey, presente em mais de cem países. Morreu em 2012, meses após um acidente de bicicleta. Era pai de nove filhos e costumava dizer que o teste real de qualquer princípio de liderança é a própria casa.'
    ],
    contexto: 'Os anos 1980 celebravam desempenho e imagem pessoal no ambiente corporativo. Covey ofereceu um contraponto que soava conservador e que, justamente por isso, encontrou um público enorme e duradouro.',
    contribuicoes: ['Formulou os sete hábitos, um dos modelos de eficácia pessoal mais difundidos do mundo.', 'Popularizou a matriz urgente/importante na gestão do tempo.', 'Distinguiu ética do caráter e ética da personalidade a partir de pesquisa histórica.', 'Criou uma rede global de formação em liderança pessoal e organizacional.'],
    cronologia: [
      [1932, 'Nasce em Salt Lake City.'],
      [1976, 'Doutora-se em Brigham Young.'],
      [1989, 'Publica "Os 7 Hábitos".'],
      [1997, 'Funda a FranklinCovey.'],
      [2004, 'Publica "O 8º Hábito".'],
      [2012, 'Morre em Idaho.']
    ]
  },

  'Jeff Bezos': {
    titulo: 'Ainda é o Dia 1',
    cat: 'negocios',
    perfis: ['empresarios'],
    origem: 'norteamericanos',
    resumo: 'Largou um emprego confortável em Wall Street para vender livros pela internet e construiu uma das maiores empresas do mundo.',
    curta: 'Largou Wall Street em 1994 depois de ler que o uso da internet crescia 2.300% ao ano. Montou uma livraria online na garagem e passou vinte anos repetindo a mesma frase aos acionistas: ainda é o Dia 1.',
    bio: [
      'Bezos nasceu de mãe adolescente e foi criado pelo padrasto cubano, Miguel Bezos. Formou-se em engenharia elétrica e ciência da computação em Princeton e foi trabalhar no fundo D. E. Shaw, onde virou vice-presidente sênior aos trinta anos.',
      'Em 1994, ao ver o dado sobre o crescimento da internet, montou uma lista de vinte produtos vendáveis online e escolheu livros, por serem itens padronizados e de catálogo praticamente infinito. Abriu a Amazon numa garagem em Seattle, com investimento dos pais.',
      'A estratégia foi impopular por anos: reinvestir tudo, aceitar prejuízo e priorizar crescimento e experiência do cliente sobre lucro trimestral. Na bolha da internet, a ação caiu mais de 90%. A empresa sobreviveu e depois criou o Marketplace, o Prime, o Kindle e a AWS, que hoje é a maior operação de computação em nuvem do mundo.',
      'Suas cartas anuais aos acionistas, que sempre reanexavam a de 1997, viraram um dos textos de gestão mais lidos do setor. Deixou o cargo de CEO em 2021 para se dedicar à Blue Origin, ao fundo climático Bezos Earth Fund e a outros projetos.'
    ],
    contexto: 'Em meados dos anos 1990, quase ninguém acreditava que as pessoas dariam número de cartão a um site. A vantagem de Bezos foi menos tecnológica do que temporal: começou cedo e aceitou perder dinheiro por muito mais tempo do que os concorrentes.',
    contribuicoes: ['Fundou a Amazon e criou o modelo de varejo online em escala global.', 'Criou a AWS, que reorganizou a infraestrutura da internet.', 'Popularizou práticas de gestão como o memorando de seis páginas e o "disagree and commit".', 'Fundou a Blue Origin e comprou o Washington Post em 2013.'],
    cronologia: [
      [1964, 'Nasce em Albuquerque.'],
      [1994, 'Funda a Amazon numa garagem.'],
      [1997, 'Abre o capital e escreve a primeira carta aos acionistas.'],
      [2000, 'Funda a Blue Origin.'],
      [2006, 'Lança a AWS.'],
      [2013, 'Compra o Washington Post.'],
      [2021, 'Deixa o cargo de CEO.']
    ]
  },

  'Sam Walton': {
    titulo: 'A picape velha do homem mais rico do país',
    cat: 'negocios',
    perfis: ['empresarios'],
    origem: 'norteamericanos',
    resumo: 'Construiu a maior varejista do mundo a partir de cidades pequenas que os concorrentes consideravam irrelevantes.',
    curta: 'Abriu lojas onde ninguém queria abrir: cidades de menos de dez mil habitantes. Construiu a maior varejista do planeta e continuou dirigindo a mesma picape e cortando o cabelo na barbearia da esquina.',
    bio: [
      'Walton cresceu durante a Depressão numa família de fazendeiros do Missouri e trabalhou desde criança. Serviu no Exército, e ao sair comprou com um empréstimo do sogro uma loja de variedades em Newport, Arkansas. Multiplicou o faturamento e perdeu o ponto por não ter cláusula de renovação no contrato — um erro que nunca esqueceu.',
      'Abriu a primeira loja Walmart em 1962, em Rogers, Arkansas. A aposta era contraintuitiva: em vez de disputar grandes cidades, instalar lojas de desconto em municípios pequenos, que os concorrentes julgavam pouco lucrativos, e ganhar no volume com margens baixas.',
      'Investiu cedo e pesado em logística e tecnologia — centros de distribuição próprios, código de barras, satélite para conectar as lojas — bem antes de isso ser padrão no varejo. Isso permitiu manter preços baixos com estoque enxuto.',
      'Ficou conhecido por visitar lojas sem aviso, conversar com funcionários, que chamava de associados, e copiar boas ideias dos concorrentes sem constrangimento. Escreveu a autobiografia meses antes de morrer de câncer, em 1992.'
    ],
    contexto: 'O varejo americano dos anos 1960 se concentrava em áreas metropolitanas. A interiorização do consumo e a melhoria das estradas criaram uma janela que Walton enxergou antes dos outros.',
    contribuicoes: ['Criou o modelo de varejo de desconto em cidades pequenas.', 'Foi pioneiro em logística própria e uso de tecnologia no varejo.', 'Introduziu práticas de participação e comunicação direta com o time de loja.', 'Construiu a maior rede varejista do mundo em faturamento.'],
    cronologia: [
      [1918, 'Nasce em Kingfisher, Oklahoma.'],
      [1945, 'Compra a primeira loja em Newport.'],
      [1962, 'Abre o primeiro Walmart.'],
      [1970, 'Abre o capital da empresa.'],
      [1983, 'Cria o Sam\u2019s Club.'],
      [1992, 'Publica a autobiografia e morre.']
    ]
  },

  'Jim Collins': {
    titulo: 'Cinco anos para achar onze empresas',
    cat: 'negocios',
    perfis: ['estrategistas'],
    origem: 'norteamericanos',
    resumo: 'Passou anos comparando empresas quase idênticas para descobrir por que umas dão o salto e outras ficam medianas.',
    curta: 'Filtrou 1.435 empresas para achar onze que passaram de boas a excelentes e sustentaram isso por quinze anos. Comparou cada uma com uma rival parecida que não deu o salto — e o que apareceu contrariou quase tudo o que se dizia sobre liderança.',
    bio: [
      'Collins foi professor na Stanford Graduate School of Business e depois montou seu próprio laboratório de pesquisa em Boulder, no Colorado. Seu método é incomum para o gênero: equipes trabalhando anos sobre dados financeiros e documentos, com um grupo de comparação para controlar as conclusões.',
      'Em "Feitas para Durar", escrito com Jerry Porras, comparou empresas visionárias com concorrentes de mesma idade e setor. A conclusão foi que ideologia central e estímulo ao progresso pesavam mais do que produtos ou líderes carismáticos.',
      'Em "Empresas Feitas para Vencer", de 2001, partiu de 1.435 companhias e chegou a onze que passaram de resultados medianos a retornos muito acima do mercado por quinze anos seguidos. Encontrou padrões como a Liderança Nível 5 — executivos de humildade pessoal e vontade profissional feroz —, a regra de escolher as pessoas antes da estratégia e o "conceito do porco-espinho".',
      'Escreveu depois sobre declínio empresarial e sobre empresas que prosperam no caos. Voluntariamente mantém-se fora de conselhos e consultorias de longo prazo para preservar independência de pesquisa.'
    ],
    contexto: 'Os anos 1990 idolatravam CEOs carismáticos e planos de transformação radical. A pesquisa de Collins mostrou o contrário: os saltos vinham de acúmulo disciplinado e de líderes discretos, o que colidia com o discurso dominante.',
    contribuicoes: ['Formulou a Liderança Nível 5, combinação de humildade pessoal e determinação profissional.', 'Criou o "conceito do porco-espinho" para foco estratégico.', 'Introduziu o método de grupo de comparação na pesquisa sobre empresas.', 'Descreveu os cinco estágios do declínio organizacional.'],
    cronologia: [
      [1958, 'Nasce em Boulder, Colorado.'],
      [1994, 'Publica "Feitas para Durar".'],
      [1995, 'Deixa Stanford e monta seu laboratório de pesquisa.'],
      [2001, 'Publica "Empresas Feitas para Vencer".'],
      [2009, 'Publica "Como as Gigantes Caem".'],
      [2011, 'Publica "Vencedoras por Opção".']
    ]
  },

  'Clayton Christensen': {
    titulo: 'Por que empresas boas quebram',
    cat: 'negocios',
    perfis: ['estrategistas', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Explicou o paradoxo de empresas bem geridas que falham justamente por fazerem tudo certo.',
    curta: 'Descobriu que empresas líderes quebram não por incompetência, mas por ouvirem seus melhores clientes e ignorarem tecnologias que começam piores e mais baratas. Chamou isso de inovação disruptiva.',
    bio: [
      'Christensen mediu 2,03 metros, jogou basquete universitário, foi missionário na Coreia do Sul e trabalhou como consultor antes de fundar uma empresa de materiais avançados. Só depois disso, aos quarenta anos, foi fazer doutorado em Harvard.',
      'Sua pesquisa sobre a indústria de discos rígidos revelou um padrão sistemático: as empresas líderes dominavam as melhorias graduais, mas eram derrubadas por produtos inicialmente inferiores, mais baratos e voltados a clientes que elas não consideravam interessantes.',
      'Chamou o fenômeno de inovação disruptiva e publicou em 1997 "O Dilema da Inovação". A conclusão é desconfortável: as práticas de boa gestão — ouvir clientes, investir em margens altas, alocar recursos onde o retorno é maior — são exatamente o que impede a empresa de reagir a tempo.',
      'Enfrentou câncer, infarto e um AVC que o obrigou a reaprender a falar. Nesse período escreveu "Como Você Vai Medir Sua Vida?", aplicando teoria de gestão a decisões pessoais sobre família, integridade e sentido. Morreu em 2020.'
    ],
    contexto: 'A virada digital dos anos 1990 derrubou empresas inteiras sem que ninguém soubesse explicar direito por quê. A teoria de Christensen deu o vocabulário — e é por isso que "disrupção" entrou no vocabulário comum, muitas vezes mal usada.',
    contribuicoes: ['Formulou a teoria da inovação disruptiva.', 'Criou a abordagem dos "trabalhos a serem feitos" para entender demanda.', 'Aplicou a teoria a educação e saúde, além de negócios.', 'Escreveu sobre como usar teoria de gestão para orientar escolhas de vida.'],
    cronologia: [
      [1952, 'Nasce em Salt Lake City.'],
      [1992, 'Doutora-se em Harvard.'],
      [1997, 'Publica "O Dilema da Inovação".'],
      [2003, 'Publica "O Crescimento pela Inovação".'],
      [2012, 'Publica "Como Você Vai Medir Sua Vida?".'],
      [2020, 'Morre em Boston.']
    ]
  },

  'Nassim Nicholas Taleb': {
    titulo: 'O que não se pode prever',
    cat: 'financas',
    perfis: ['investidores', 'filosofos'],
    origem: 'asiaticos',
    resumo: 'Operador de mercado que virou ensaísta para atacar a ilusão de que o mundo pode ser modelado por curvas normais.',
    curta: 'Viveu a guerra civil no Líbano, operou opções por vinte anos e passou a escrever contra a ilusão de previsibilidade. Cunhou "cisne negro" e "antifrágil", e ganhou dinheiro justamente apostando no improvável.',
    bio: [
      'Taleb nasceu em Amioun, no Líbano, em família cristã ortodoxa com tradição política. A guerra civil que começou em 1975 destruiu a estabilidade de sua terra natal e virou, segundo ele, a experiência formadora: um evento que ninguém previu e que reorganizou tudo.',
      'Formou-se em Wharton e doutorou-se em ciências da gestão em Paris. Trabalhou vinte anos como operador de derivativos, especializando-se em estratégias que perdem pouco quase sempre e ganham muito nas raras crises. Lucrou de forma expressiva em 1987 e em 2008.',
      'Em "Iludido pelo Acaso" atacou a confusão entre sorte e habilidade. Em "A Lógica do Cisne Negro", de 2007, publicado às vésperas da crise financeira, argumentou que eventos raros, imprevisíveis e de impacto enorme explicam a maior parte da história — e que nossos modelos os ignoram por construção.',
      'Em "Antifrágil" propôs o conceito que considera sua contribuição central: existem sistemas que não apenas resistem à desordem, mas melhoram com ela, e desenhar sistemas assim é mais sensato do que tentar prever o futuro. É um polemista notório, e sua obra é tão citada quanto contestada.'
    ],
    contexto: 'A crise de 2008 expôs modelos de risco que subestimavam sistematicamente eventos extremos. Taleb vinha dizendo isso havia anos, e a crise transformou um autor de nicho em referência global.',
    contribuicoes: ['Popularizou o conceito de cisne negro para eventos raros de alto impacto.', 'Formulou a ideia de antifragilidade.', 'Criticou o uso de distribuições normais na avaliação de risco financeiro.', 'Difundiu o conceito de "skin in the game": quem decide deve arcar com o risco.'],
    cronologia: [
      [1960, 'Nasce em Amioun, Líbano.'],
      [1975, 'Começa a guerra civil libanesa.'],
      [2001, 'Publica "Iludido pelo Acaso".'],
      [2007, 'Publica "A Lógica do Cisne Negro".'],
      [2012, 'Publica "Antifrágil".'],
      [2018, 'Publica "Arriscando a Própria Pele".']
    ]
  },

  'Philip Fisher': {
    titulo: 'Comprar a empresa, não a ação',
    cat: 'financas',
    perfis: ['investidores'],
    origem: 'norteamericanos',
    resumo: 'Inventou a análise qualitativa de empresas e influenciou diretamente o estilo de Warren Buffett.',
    curta: 'Começou a investir na véspera da quebra de 1929 e criou um método que ninguém usava: conversar com clientes, fornecedores e concorrentes antes de comprar. Buffett diz ser 15% Fisher e 85% Graham.',
    bio: [
      'Fisher largou a pós-graduação em Stanford para trabalhar como analista em um banco de San Francisco. Abriu a própria gestora em 1931, em plena Depressão — segundo ele, exatamente porque ninguém queria falar com um gestor naquele momento, e assim ele tinha a atenção dos clientes.',
      'Seu método ficou conhecido como scuttlebutt: em vez de olhar apenas balanços, sair a campo e conversar com clientes, ex-funcionários, fornecedores e concorrentes da empresa para descobrir o que os números não mostram — qualidade da gestão, capacidade de inovar, relações de trabalho.',
      'Em "Ações Comuns, Lucros Extraordinários", de 1958, listou quinze pontos para avaliar uma empresa, quase todos qualitativos. Foi um dos primeiros livros de investimento a virar best-seller e o primeiro a defender que crescimento sustentado importa mais do que preço barato.',
      'Ficou famoso por manter posições por décadas: comprou Motorola em 1955 e segurou até morrer, mais de quarenta anos depois. Warren Buffett resumiu a influência dizendo que é 85% Benjamin Graham e 15% Philip Fisher.'
    ],
    contexto: 'A análise de investimentos da primeira metade do século XX era dominada por balanços e ativos tangíveis. Fisher inaugurou a atenção ao intangível — pesquisa, gestão, cultura —, que se tornaria central na era da tecnologia.',
    contribuicoes: ['Criou o método scuttlebutt de investigação qualitativa de empresas.', 'Formulou os quinze pontos de avaliação de uma companhia.', 'Deslocou o foco do preço barato para a qualidade e o crescimento duradouro.', 'Influenciou diretamente o estilo de investimento de Warren Buffett.'],
    cronologia: [
      [1907, 'Nasce em San Francisco.'],
      [1928, 'Torna-se analista de valores.'],
      [1931, 'Abre a Fisher & Company.'],
      [1955, 'Compra ações da Motorola, mantidas por mais de 40 anos.'],
      [1958, 'Publica "Ações Comuns, Lucros Extraordinários".'],
      [2004, 'Morre na Califórnia.']
    ]
  },

  'George S. Clason': {
    titulo: 'Parábolas da Babilônia',
    cat: 'financas',
    perfis: ['investidores', 'empresarios'],
    origem: 'norteamericanos',
    resumo: 'Escreveu panfletos de educação financeira para bancos e criou o clássico mais simples e mais duradouro do gênero.',
    curta: 'Distribuiu panfletos gratuitos de educação financeira em bancos e seguradoras, usando parábolas da antiga Babilônia. Reunidos em livro, viraram um dos textos de finanças pessoais mais vendidos de todos os tempos.',
    bio: [
      'Clason nasceu no Missouri, serviu no Exército americano durante a Guerra Hispano-Americana e fundou duas editoras, entre elas a Clason Map Company, que publicou o primeiro atlas rodoviário dos Estados Unidos e do Canadá. A empresa quebrou na Depressão.',
      'A partir de 1926, começou a escrever panfletos curtos sobre poupança e uso do dinheiro, ambientados na Babilônia antiga. Bancos e companhias de seguro os distribuíam gratuitamente aos clientes, e o formato de parábola tornava as ideias fáceis de lembrar.',
      'Reunidos em 1926 sob o título "O Homem Mais Rico da Babilônia", os textos ensinam princípios elementares: guardar ao menos um décimo do que se ganha, fazer o dinheiro trabalhar, evitar investimentos que não se compreende e proteger a poupança de conselhos ruins.',
      'O livro nunca saiu de catálogo em quase um século e continua sendo indicado como primeira leitura em finanças pessoais, justamente por não exigir conhecimento prévio nenhum.'
    ],
    contexto: 'Os anos 1920 americanos foram de crédito fácil, especulação e endividamento crescente, terminando na quebra de 1929. Os panfletos de Clason circularam exatamente nesse período, e a Depressão confirmou a lição na prática.',
    contribuicoes: ['Criou o formato de parábola aplicado à educação financeira.', 'Difundiu a regra de poupar ao menos dez por cento da renda.', 'Escreveu um dos livros de finanças pessoais mais vendidos da história.', 'Publicou o primeiro atlas rodoviário dos Estados Unidos e do Canadá.'],
    cronologia: [
      [1874, 'Nasce no Missouri.'],
      [1898, 'Serve na Guerra Hispano-Americana.'],
      [1926, 'Começa a publicar as parábolas babilônicas.'],
      [1930, 'A editora de mapas quebra na Depressão.'],
      [1957, 'Morre em Napa, Califórnia.']
    ]
  },

  'Jack Welch': {
    titulo: 'Vinte anos no comando da GE',
    cat: 'negocios',
    perfis: ['empresarios', 'estrategistas'],
    origem: 'norteamericanos',
    resumo: 'Multiplicou o valor da General Electric por quarenta e dividiu opiniões pelo custo humano de como fez isso.',
    curta: 'Assumiu a GE aos 45 anos e ficou vinte no comando. O valor de mercado saiu de 12 para cerca de 400 bilhões de dólares. O apelido "Neutron Jack" veio da fama de deixar os prédios de pé e o quadro de pessoal vazio.',
    bio: [
      'Welch nasceu em Massachusetts, filho de um condutor de trem, e era gago na infância. Doutorou-se em engenharia química e entrou na GE em 1960 como engenheiro. Quase pediu demissão no primeiro ano por causa da burocracia, e ficou por causa de um chefe que o convenceu.',
      'Assumiu a presidência em 1981, quando a empresa era um conglomerado gigantesco e lento. Sua regra ficou célebre: cada divisão deveria ser a primeira ou a segunda do seu mercado, ou seria consertada, vendida ou fechada. Cortou cerca de cem mil postos de trabalho nos primeiros anos.',
      'Adotou o Seis Sigma, empurrou a empresa para serviços financeiros e criou um sistema de avaliação que classificava os funcionários e desligava os 10% de pior desempenho todo ano — prática copiada por centenas de empresas e depois abandonada por boa parte delas.',
      'Sua herança é disputada. O valor de mercado da GE cresceu de forma espetacular sob seu comando, mas a dependência criada em relação à divisão financeira ajuda a explicar a crise da empresa depois de 2008. Morreu em 2020, aos 84 anos.'
    ],
    contexto: 'A indústria americana dos anos 1980 perdia terreno para o Japão e enfrentava pressão do mercado acionário por resultado imediato. Welch foi o executivo que mais radicalmente reorganizou uma empresa tradicional segundo essa lógica.',
    contribuicoes: ['Reestruturou a GE em torno da regra de ser primeiro ou segundo em cada mercado.', 'Difundiu o Seis Sigma como programa de qualidade em larga escala.', 'Criou o Crotonville como centro de formação de executivos.', 'Popularizou — e mais tarde viu ser abandonado — o modelo de avaliação por ranking forçado.'],
    cronologia: [
      [1935, 'Nasce em Peabody, Massachusetts.'],
      [1960, 'Entra na GE como engenheiro.'],
      [1981, 'Torna-se presidente da companhia.'],
      [1995, 'Implanta o Seis Sigma.'],
      [2001, 'Aposenta-se.'],
      [2005, 'Publica "Paixão por Vencer".'],
      [2020, 'Morre em Nova York.']
    ]
  },

  'Seth Godin': {
    titulo: 'Ou você é notável, ou é invisível',
    cat: 'negocios',
    perfis: ['estrategistas', 'empresarios'],
    origem: 'norteamericanos',
    resumo: 'Antecipou o marketing baseado em permissão e passou a defender que atenção não se compra, se merece.',
    curta: 'Vendeu sua empresa para o Yahoo, virou vice-presidente de marketing direto e saiu para escrever. Antecipou em anos o fim do marketing de interrupção e mantém um dos blogs diários mais lidos do mundo há mais de vinte anos.',
    bio: [
      'Godin formou-se em ciência da computação e filosofia e fez MBA em Stanford. Trabalhou com produção de livros e software antes de fundar, em 1995, a Yoyodyne, uma das primeiras empresas de marketing online, vendida ao Yahoo em 1998.',
      'Em "Marketing de Permissão", de 1999, formulou a virada: a atenção das pessoas é um bem escasso, e interromper alguém que não pediu nada é cada vez menos eficaz. O caminho é obter permissão, entregar valor e manter o relacionamento.',
      'Em "A Vaca Roxa", de 2003, radicalizou a tese: num mercado saturado, produto mediano com boa propaganda não funciona mais; ou o produto é notável a ponto de gerar conversa, ou é invisível. A ideia influenciou uma geração inteira de empreendedores.',
      'Escreveu mais de vinte livros, criou o altMBA, programa de liderança online, e escreve diariamente em seu blog desde 2002 — textos curtos que se tornaram hábito de leitura para milhões de pessoas. Foi eleito para o Hall da Fama do Marketing Direto.'
    ],
    contexto: 'A internet comercial dos anos 1990 tentou reproduzir a lógica da televisão: comprar atenção com anúncios. Godin percebeu antes da maioria que o meio permitia — e exigia — o contrário.',
    contribuicoes: ['Formulou o marketing de permissão em 1999.', 'Criou o conceito de "vaca roxa" para produtos notáveis.', 'Difundiu a ideia de "tribos" como públicos organizados em torno de uma causa.', 'Mantém um blog diário há mais de duas décadas, referência do gênero.'],
    cronologia: [
      [1960, 'Nasce em Nova York.'],
      [1995, 'Funda a Yoyodyne.'],
      [1998, 'Vende a empresa ao Yahoo.'],
      [1999, 'Publica "Marketing de Permissão".'],
      [2003, 'Publica "A Vaca Roxa".'],
      [2002, 'Começa o blog diário.'],
      [2018, 'Publica "Isso é Marketing".']
    ]
  },

  'Chris Voss': {
    titulo: 'Negociar quando não há como dividir a diferença',
    cat: 'manipulacao',
    perfis: ['estrategistas', 'psicologos'],
    origem: 'norteamericanos',
    resumo: 'Foi o principal negociador internacional de sequestros do FBI e adaptou o método para conversas do dia a dia.',
    curta: 'Foi o negociador-chefe de sequestros internacionais do FBI. Descobriu que a lógica racional falha quando há emoção em jogo, e transformou técnicas de crise em método para negociar salário, contrato e conflito comum.',
    bio: [
      'Voss começou como policial em Kansas City e entrou no FBI, onde trabalhou em contraterrorismo e depois em negociação de crises. Chegou a negociador-chefe internacional de sequestros, atuando em casos nas Filipinas, no Haiti e no Iraque.',
      'A virada em sua abordagem veio da constatação de que os métodos racionais e baseados em interesses, ensinados em Harvard, funcionavam mal quando havia medo, orgulho e vida em risco. A emoção não era ruído a ser eliminado: era o canal principal.',
      'Formulou técnicas como a empatia tática, o espelhamento, a rotulação de emoções e a busca deliberada pelo "não" em vez do "sim" — porque um "não" devolve à outra pessoa a sensação de controle e abre a conversa em vez de fechá-la.',
      'Aposentou-se do FBI, fundou a consultoria Black Swan Group e passou a ensinar em escolas de negócios. "Negocie Como se Sua Vida Dependesse Disso", de 2016, tornou-se um dos livros de negociação mais vendidos da última década.'
    ],
    contexto: 'O método de negociação por princípios, de Harvard, dominava o campo desde 1981. Voss não o descarta, mas mostra seus limites em situações de alta carga emocional — que são a maioria das negociações reais.',
    contribuicoes: ['Trouxe a empatia tática da negociação de crises para o mundo dos negócios.', 'Formulou a técnica das perguntas calibradas iniciadas por "como" e "o quê".', 'Mostrou o valor estratégico do "não" no início de uma negociação.', 'Popularizou o "isso mesmo" como sinal de acordo real, diferente do "tem razão".'],
    cronologia: [
      [1957, 'Nasce em Iowa.'],
      [1983, 'Entra no FBI.'],
      [2003, 'Torna-se negociador-chefe internacional de sequestros.'],
      [2007, 'Aposenta-se e funda o Black Swan Group.'],
      [2016, 'Publica "Negocie Como se Sua Vida Dependesse Disso".']
    ]
  },

  'Simon Sinek': {
    titulo: 'Comece pelo porquê',
    cat: 'motivacao',
    perfis: ['estrategistas'],
    origem: 'norteamericanos',
    resumo: 'Perdeu a paixão pelo próprio trabalho, procurou entender o que move as pessoas e formulou o círculo dourado.',
    curta: 'Estava desanimado com a própria empresa quando começou a investigar por que algumas organizações inspiram e outras não. A palestra que gravou virou uma das mais vistas da história do TED.',
    bio: [
      'Sinek nasceu em Londres, cresceu entre Joanesburgo, Londres e Hong Kong e formou-se em antropologia cultural nos Estados Unidos. Trabalhou em publicidade e abriu a própria consultoria, mas conta que por volta de 2005 havia perdido completamente o entusiasmo pelo que fazia.',
      'A tentativa de recuperar esse entusiasmo virou pesquisa. Ele observou que empresas e líderes que inspiram comunicam na ordem inversa da habitual: começam pelo propósito, passam pelo processo e só então chegam ao produto. Chamou isso de círculo dourado — porquê, como, o quê.',
      'A palestra "Comece pelo Porquê", gravada num TEDx em 2009, acumulou dezenas de milhões de visualizações e está entre as mais assistidas da plataforma. O livro de mesmo nome consolidou a ideia no vocabulário corporativo.',
      'Em "Líderes se Servem por Último" mudou o foco para segurança psicológica, usando exemplos militares: onde as pessoas se sentem protegidas pelo grupo, elas cooperam; onde se sentem ameaçadas internamente, gastam energia se defendendo umas das outras. Depois publicou "O Jogo Infinito", sobre organizações que jogam para continuar, e não para vencer.'
    ],
    contexto: 'A partir dos anos 2000, engajamento no trabalho virou problema mensurável e crônico. Sinek deu uma resposta que empresas conseguiam operacionalizar, o que explica o alcance da ideia.',
    contribuicoes: ['Formulou o círculo dourado: porquê, como, o quê.', 'Popularizou a ideia de propósito como base da comunicação de marcas.', 'Trouxe a noção de segurança psicológica para a discussão de liderança.', 'Difundiu a distinção entre jogos finitos e infinitos aplicada a negócios.'],
    cronologia: [
      [1973, 'Nasce em Wimbledon, Londres.'],
      [2009, 'Grava a palestra "Comece pelo Porquê" e publica o livro.'],
      [2014, 'Publica "Líderes se Servem por Último".'],
      [2016, 'Publica "Juntos é Melhor".'],
      [2019, 'Publica "O Jogo Infinito".']
    ]
  }
});

/* ---------------- PSICOLOGIA, EDUCAÇÃO, ATIVISMO E CIÊNCIA ---------------- */
Object.assign(PERFIS_PROFUNDOS, {
  'Carl Rogers': {
    titulo: 'Ouvir sem julgar',
    cat: 'conforto',
    perfis: ['psicologos', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Inverteu a relação terapêutica: o especialista não é quem interpreta, é quem escuta com aceitação total.',
    curta: 'Cresceu numa família religiosa rígida, quase virou pastor e acabou criando a abordagem que tirou o terapeuta do lugar de autoridade. Sua tese: dadas empatia, autenticidade e aceitação, a pessoa encontra o próprio caminho.',
    bio: [
      'Rogers foi criado numa fazenda de Illinois, numa família protestante estrita que desencorajava vida social. Estudou agricultura, depois história, foi a uma conferência cristã na China e voltou com a fé abalada e o interesse deslocado para as pessoas. Entrou no seminário e saiu para estudar psicologia clínica.',
      'Trabalhou doze anos com crianças vítimas de maus-tratos em Rochester, longe da academia. Foi ali, na prática cotidiana, que percebeu que suas melhores sessões eram aquelas em que ele falava menos e a pessoa conduzia — o oposto do que a formação psicanalítica prescrevia.',
      'Formulou a abordagem centrada na pessoa, sustentada em três condições: consideração positiva incondicional, empatia e congruência do terapeuta. Foi o primeiro a gravar e transcrever sessões inteiras para análise, contra a resistência da época, criando a base da pesquisa empírica em psicoterapia.',
      'Levou a mesma abordagem para a educação e depois para conflitos internacionais, conduzindo grupos de encontro na Irlanda do Norte e na África do Sul. Foi indicado ao Nobel da Paz por esse trabalho, pouco antes de morrer, em 1987.'
    ],
    contexto: 'A psicologia americana dos anos 1940 estava dividida entre psicanálise e behaviorismo, ambos tratando a pessoa como objeto a ser decifrado ou condicionado. A psicologia humanista, da qual Rogers foi fundador, abriu um terceiro caminho.',
    contribuicoes: ['Criou a abordagem centrada na pessoa, base da terapia humanista.', 'Foi pioneiro em gravar sessões para pesquisa empírica em psicoterapia.', 'Formulou as condições necessárias e suficientes da mudança terapêutica.', 'Aplicou o método a educação e à mediação de conflitos internacionais.'],
    cronologia: [
      [1902, 'Nasce em Oak Park, Illinois.'],
      [1928, 'Começa a trabalhar com crianças em Rochester.'],
      [1942, 'Publica "Psicoterapia Aconselhamento".'],
      [1951, 'Publica "Terapia Centrada no Cliente".'],
      [1961, 'Publica "Tornar-se Pessoa".'],
      [1987, 'Morre na Califórnia.']
    ]
  },

  'Martin Seligman': {
    titulo: 'Do desamparo à psicologia positiva',
    cat: 'felicidade',
    perfis: ['psicologos'],
    origem: 'norteamericanos',
    resumo: 'Descobriu o desamparo aprendido em laboratório e depois inverteu a própria pergunta: e o que faz alguém florescer?',
    curta: 'Ficou conhecido por descrever o desamparo aprendido — a desistência que vem depois de repetidas experiências sem controle. Décadas depois, como presidente da associação americana de psicologia, propôs estudar o oposto: o que faz a vida valer a pena.',
    bio: [
      'Nos anos 1960, jovem pesquisador na Universidade da Pensilvânia, Seligman observou em experimentos que animais expostos a situações incontroláveis paravam de tentar escapar mesmo quando a saída se tornava possível. Chamou o fenômeno de desamparo aprendido, e ele virou um dos modelos mais usados para entender a depressão.',
      'A pesquisa seguinte foi sobre o inverso: por que algumas pessoas não desistem. Encontrou o estilo explicativo — a maneira como alguém explica a si mesmo o que deu errado — como fator decisivo, e mostrou que ele pode ser modificado com treino.',
      'Eleito presidente da American Psychological Association em 1998, propôs uma reorientação: a psicologia havia passado cinquenta anos estudando doença e quase nada estudando o que sustenta uma vida boa. Nascia ali a psicologia positiva como programa de pesquisa.',
      'Formulou o modelo PERMA — emoção positiva, engajamento, relacionamentos, sentido e realização — e desenvolveu com Christopher Peterson uma classificação de forças de caráter usada em pesquisa no mundo todo. Programas baseados em seu trabalho foram aplicados em escolas e no Exército americano, com resultados debatidos.'
    ],
    contexto: 'Depois da Segunda Guerra, o financiamento da psicologia americana concentrou-se em tratar transtornos. Seligman argumentou que isso produziu conhecimento sólido sobre sofrimento e quase nenhum sobre o que sustenta bem-estar.',
    contribuicoes: ['Descreveu o desamparo aprendido e sua relação com a depressão.', 'Formulou a teoria do estilo explicativo e do otimismo aprendido.', 'Fundou a psicologia positiva como campo de pesquisa organizado.', 'Criou o modelo PERMA e a classificação de forças de caráter.'],
    cronologia: [
      [1942, 'Nasce em Albany, Nova York.'],
      [1967, 'Descreve o desamparo aprendido.'],
      [1990, 'Publica "Aprenda a Ser Otimista".'],
      [1998, 'Preside a APA e propõe a psicologia positiva.'],
      [2002, 'Publica "Felicidade Autêntica".'],
      [2011, 'Publica "Florescer", com o modelo PERMA.']
    ]
  },

  'Philip Zimbardo': {
    titulo: 'O experimento que ele mesmo não conseguiu parar',
    cat: 'reflexao',
    perfis: ['psicologos'],
    origem: 'norteamericanos',
    resumo: 'Conduziu o mais famoso experimento sobre poder e obediência e passou décadas explicando o que ele revelou — inclusive sobre si mesmo.',
    curta: 'Em 1971 montou uma prisão simulada no porão de Stanford. Estudantes sorteados como guardas humilharam colegas em poucos dias, e o próprio Zimbardo, atuando como diretor, só interrompeu quando alguém de fora apontou o que estava acontecendo.',
    bio: [
      'Zimbardo cresceu no Bronx, em família pobre de imigrantes italianos, e foi colega de escola de Stanley Milgram — os dois viriam a fazer os dois experimentos mais discutidos da psicologia social.',
      'Em agosto de 1971 conduziu o Experimento da Prisão de Stanford: vinte e quatro estudantes saudáveis, sorteados entre guardas e prisioneiros, num porão adaptado. Previsto para duas semanas, foi interrompido no sexto dia, após guardas passarem a humilhar sistematicamente os colegas e vários prisioneiros entrarem em sofrimento agudo.',
      'O próprio Zimbardo assumiu que se envolveu demais no papel de diretor da prisão e perdeu a distância crítica; quem o alertou foi Christina Maslach, pesquisadora convidada que depois se tornaria sua esposa. O estudo é hoje intensamente criticado quanto ao método, e ele mesmo passou a discuti-lo como lição sobre o próprio pesquisador.',
      'Depois das fotos de Abu Ghraib, em 2004, atuou como testemunha da defesa de um dos guardas e escreveu "O Efeito Lúcifer", argumentando que situações e sistemas explicam mais do que "maçãs podres". Criou em seguida o Heroic Imagination Project, para treinar pessoas comuns a agir em vez de assistir.'
    ],
    contexto: 'A psicologia social do pós-guerra tentava entender como pessoas comuns participaram de atrocidades. Milgram estudou obediência à autoridade; Zimbardo, o poder dos papéis e do ambiente institucional.',
    contribuicoes: ['Conduziu o Experimento da Prisão de Stanford, referência no debate sobre poder e papéis sociais.', 'Formulou a análise situacional do mal em "O Efeito Lúcifer".', 'Estudou timidez, percepção do tempo e efeitos da desindividuação.', 'Criou um programa de treino de "heroísmo cotidiano" para incentivar a intervenção de testemunhas.'],
    cronologia: [
      [1933, 'Nasce em Nova York.'],
      [1971, 'Conduz o Experimento da Prisão de Stanford.'],
      [1972, 'Publica os primeiros resultados.'],
      [2004, 'Atua no caso Abu Ghraib.'],
      [2007, 'Publica "O Efeito Lúcifer".'],
      [2024, 'Morre em San Francisco.']
    ]
  },

  'Marshall Rosenberg': {
    titulo: 'Falar sem acusar',
    cat: 'familia',
    perfis: ['psicologos', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Criou um método de comunicação usado em escolas, prisões e zonas de guerra, baseado em observar sem julgar.',
    curta: 'Cresceu num bairro de Detroit marcado por violência racial e passou a vida perguntando o que faz uma pessoa machucar a outra com palavras. Criou a Comunicação Não Violenta, usada hoje em escolas, presídios e mediações internacionais.',
    bio: [
      'Rosenberg tinha nove anos quando sua família se mudou para Detroit, pouco antes dos distúrbios raciais de 1943, que deixaram dezenas de mortos. A experiência de violência aberta e de discriminação por ser judeu marcou a pergunta que orientaria toda a sua vida profissional.',
      'Doutorou-se em psicologia clínica sob orientação de Carl Rogers e trabalhou como mediador em processos de dessegregação escolar nos Estados Unidos, nos anos 1960. Foi ali que começou a testar um modo estruturado de conversa que reduzisse a escalada.',
      'O método que formulou tem quatro passos: observar sem avaliar, identificar o sentimento envolvido, reconhecer a necessidade por trás dele e formular um pedido concreto e negociável. A ideia central é que julgamentos e exigências disfarçam necessidades que, ditas com clareza, tendem a encontrar acolhida.',
      'Fundou em 1984 o Center for Nonviolent Communication e passou décadas trabalhando em Ruanda, Sérvia, Israel, Palestina e Sri Lanka, além de escolas e sistemas prisionais. Morreu em 2015; o método é hoje ensinado em mais de sessenta países.'
    ],
    contexto: 'Os anos 1960 americanos combinaram luta por direitos civis e conflito racial aberto. Rosenberg trabalhou dentro dessas tensões e desenhou a CNV como ferramenta prática de mediação, não como filosofia abstrata.',
    contribuicoes: ['Criou a Comunicação Não Violenta e seus quatro passos.', 'Aplicou o método em mediação de conflitos armados e em sistemas prisionais.', 'Fundou o Center for Nonviolent Communication, presente em dezenas de países.', 'Distinguiu pedidos de exigências como chave para reduzir a escalada em conflitos.'],
    cronologia: [
      [1934, 'Nasce em Canton, Ohio.'],
      [1943, 'Muda-se para Detroit durante os distúrbios raciais.'],
      [1961, 'Doutora-se em psicologia clínica.'],
      ['1960s', 'Trabalha na dessegregação de escolas.'],
      [1984, 'Funda o Center for Nonviolent Communication.'],
      [1999, 'Publica "Comunicação Não Violenta".'],
      [2015, 'Morre no Novo México.']
    ]
  },

  'Robert Emmons': {
    titulo: 'A gratidão levada ao laboratório',
    cat: 'gratidao',
    perfis: ['psicologos'],
    origem: 'norteamericanos',
    resumo: 'Transformou a gratidão, antes tema exclusivo da religião e da filosofia, em objeto de pesquisa experimental.',
    curta: 'Fez o que ninguém tinha feito: medir gratidão. Seus experimentos com diários semanais mostraram efeitos consistentes em bem-estar, sono e disposição — e fundaram um campo inteiro de pesquisa.',
    bio: [
      'Emmons é professor de psicologia na Universidade da Califórnia em Davis e começou a carreira estudando metas pessoais e motivação. A gratidão entrou como tema quando ele percebeu que praticamente não havia pesquisa empírica sobre algo que todas as tradições morais consideravam central.',
      'Com Michael McCullough, conduziu no início dos anos 2000 os estudos que se tornaram referência: participantes divididos entre registrar semanalmente coisas pelas quais eram gratos, aborrecimentos ou eventos neutros. O grupo da gratidão relatou mais bem-estar, mais otimismo e até mais exercício físico.',
      'Fundou e editou o Journal of Positive Psychology e conduziu, com financiamento da Fundação John Templeton, um dos maiores programas de pesquisa sobre o tema, envolvendo dezenas de estudos em contextos clínicos e escolares.',
      'Seu trabalho define gratidão em duas etapas: reconhecer que algo bom aconteceu e reconhecer que a fonte disso está, ao menos em parte, fora de si. É essa segunda parte, argumenta, que produz o efeito — e que a torna diferente de simples pensamento positivo.'
    ],
    contexto: 'Com a psicologia positiva ganhando força nos anos 2000, temas antes tratados como morais passaram a ser investigados experimentalmente. A gratidão foi um dos casos mais bem documentados dessa virada.',
    contribuicoes: ['Conduziu os primeiros experimentos controlados sobre efeitos da gratidão.', 'Popularizou o diário de gratidão como intervenção testada.', 'Fundou o Journal of Positive Psychology.', 'Definiu a gratidão como reconhecimento de um bem recebido de fonte externa.'],
    cronologia: [
      [1958, 'Nasce nos Estados Unidos.'],
      [1986, 'Doutora-se em psicologia da personalidade.'],
      [2003, 'Publica com McCullough os estudos sobre diários de gratidão.'],
      [2007, 'Publica "Obrigado! Como a Gratidão Pode Fazer Você Feliz".'],
      [2013, 'Publica "Gratitude Works!".']
    ]
  },

  'Angela Davis': {
    titulo: 'Da lista de mais procurados à cátedra',
    cat: 'empoderamento',
    perfis: ['ativistas', 'filosofos', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Foi presa, esteve entre os mais procurados do FBI, foi absolvida e tornou-se uma das teóricas centrais do feminismo negro.',
    curta: 'Cresceu num bairro de Birmingham apelidado de "Dynamite Hill" pelos atentados racistas. Foi demitida por ser comunista, entrou na lista dos dez mais procurados do FBI, foi absolvida e virou uma das teóricas mais influentes sobre raça, classe e gênero.',
    bio: [
      'Davis cresceu em Birmingham, Alabama, num bairro tão atingido por atentados a bomba contra famílias negras que ficou conhecido como Dynamite Hill. Estudou em Brandeis, depois na Alemanha com Theodor Adorno, e voltou aos Estados Unidos para se envolver com o movimento negro.',
      'Contratada pela UCLA em 1969, foi demitida por ordem do conselho de regentes, presidido por Ronald Reagan, por ser membro do Partido Comunista. Ganhou na Justiça e voltou, mas foi afastada de novo pouco depois.',
      'Em 1970, armas registradas em seu nome foram usadas numa tentativa de fuga armada de um tribunal na Califórnia, que terminou com quatro mortos. Davis não estava presente. Foi acusada, entrou na lista dos dez mais procurados do FBI, ficou dois meses foragida e dezesseis meses presa. Uma campanha internacional pediu sua libertação, e o júri a absolveu de todas as acusações em 1972.',
      'Voltou à docência e escreveu "Mulheres, Raça e Classe", que releu a história do feminismo americano a partir da escravidão e do trabalho, tornando-se referência fundadora do pensamento interseccional. Desde então dedica-se sobretudo à crítica do encarceramento em massa e ao abolicionismo penal.'
    ],
    contexto: 'Os Estados Unidos do fim dos anos 1960 combinavam movimento por direitos civis, Guerra do Vietnã, Panteras Negras e vigilância política intensa do FBI. O caso Davis condensou todas essas tensões num único julgamento acompanhado no mundo inteiro.',
    contribuicoes: ['Escreveu "Mulheres, Raça e Classe", texto fundador do feminismo negro.', 'Formulou a crítica ao complexo industrial-prisional e ao encarceramento em massa.', 'Ajudou a fundar a organização abolicionista Critical Resistance.', 'Foi professora em Santa Cruz e uma das intelectuais públicas mais influentes de sua geração.'],
    cronologia: [
      [1944, 'Nasce em Birmingham, Alabama.'],
      [1965, 'Estuda na Alemanha com Adorno.'],
      [1969, 'É demitida da UCLA por ser comunista.'],
      [1970, 'Entra na lista dos dez mais procurados do FBI.'],
      [1972, 'É absolvida de todas as acusações.'],
      [1981, 'Publica "Mulheres, Raça e Classe".'],
      [2003, 'Publica "Estarão as Prisões Obsoletas?".']
    ]
  },

  'Audre Lorde': {
    titulo: 'Poeta, negra, lésbica, mãe, guerreira',
    cat: 'empoderamento',
    perfis: ['ativistas', 'literatura'],
    origem: 'norteamericanos',
    resumo: 'Recusou-se a separar as partes de si mesma e escreveu sobre diferença, raiva e silêncio de um jeito que ninguém tinha escrito antes.',
    curta: 'Era míope a ponto de ser considerada legalmente cega e só falou aos quatro anos. Definiu-se como "negra, lésbica, mãe, guerreira, poeta" e recusou qualquer movimento que pedisse para deixar uma dessas partes do lado de fora.',
    bio: [
      'Filha de imigrantes caribenhos, Lorde nasceu em Nova York e teve infância difícil: quase cega, começou a falar tarde e se comunicava recitando poemas. Escreveu seu primeiro poema no ensino médio; a revista da escola recusou, e a revista Seventeen publicou.',
      'Formou-se em biblioteconomia, trabalhou como bibliotecária e casou-se, tendo dois filhos, antes de assumir publicamente sua orientação sexual. Em 1968 foi para uma universidade historicamente negra no Mississippi, e a experiência a converteu definitivamente ao trabalho de escritora e ativista.',
      'Sua obra insiste num ponto que incomodou o feminismo branco da época: a diferença não é obstáculo a ser superado, é fonte de força, desde que reconhecida em vez de apagada. O ensaio em que afirma que as ferramentas do senhor não desmontam a casa do senhor tornou-se um dos textos mais citados do pensamento crítico contemporâneo.',
      'Diagnosticada com câncer de mama em 1978, escreveu "Diários do Câncer", recusando o silêncio e a estética da superação em torno da doença. Morreu de câncer de fígado em 1992, em Santa Cruz, nas Ilhas Virgens, aos 58 anos.'
    ],
    contexto: 'O feminismo americano dos anos 1970 falava frequentemente de "mulheres" no singular, tomando como padrão a mulher branca de classe média. Lorde foi uma das vozes que forçou o movimento a lidar com raça, classe e sexualidade ao mesmo tempo.',
    contribuicoes: ['Escreveu "Irmã Outsider", coletânea central do pensamento feminista negro.', 'Formulou a crítica ao apagamento da diferença dentro dos movimentos sociais.', 'Escreveu sobre doença e corpo sem recorrer ao discurso de superação.', 'Cofundou a Kitchen Table: Women of Color Press, editora de autoras não brancas.'],
    cronologia: [
      [1934, 'Nasce em Nova York.'],
      [1968, 'Publica "The First Cities" e vai ensinar no Mississippi.'],
      [1978, 'É diagnosticada com câncer de mama.'],
      [1980, 'Publica "Diários do Câncer".'],
      [1984, 'Publica "Irmã Outsider".'],
      [1991, 'Torna-se poeta laureada de Nova York.'],
      [1992, 'Morre nas Ilhas Virgens.']
    ]
  },

  'Nísia Floresta': {
    titulo: 'A primeira feminista brasileira',
    cat: 'educacao',
    perfis: ['educadores', 'ativistas', 'literatura'],
    origem: 'brasileiros',
    resumo: 'Publicou em 1832 o primeiro texto feminista do Brasil e fundou uma escola para meninas que escandalizou o Rio de Janeiro.',
    curta: 'Publicou aos 22 anos o primeiro texto feminista brasileiro e abriu no Rio um colégio onde meninas estudavam latim, ciências e educação física — o que rendeu ataques da imprensa da época.',
    bio: [
      'Dionísia Gonçalves Pinto nasceu no Rio Grande do Norte, filha de um advogado português assassinado durante um conflito local. Casou-se muito jovem, separou-se, e adotou o nome Nísia Floresta Brasileira Augusta reunindo referências à terra natal, ao país e ao imperador.',
      'Em 1832 publicou em Recife "Direitos das Mulheres e Injustiça dos Homens", apresentado como tradução livre de Mary Wollstonecraft. Estudos posteriores mostraram que o texto dialoga com outra obra inglesa e contém muito de autoria própria, adaptada à realidade brasileira.',
      'Em 1838 fundou no Rio de Janeiro o Colégio Augusto, onde meninas aprendiam línguas, matemática, geografia, ciências e educação física — currículo então reservado aos meninos. Jornais atacaram a escola justamente por isso, e ela respondeu publicamente.',
      'Viveu longos períodos na Europa, conviveu com Auguste Comte, publicou em francês e italiano e escreveu contra a escravidão e a favor dos povos indígenas em textos como "A Lágrima de um Caeté". Morreu na França em 1885, três anos antes da Abolição.'
    ],
    contexto: 'O Brasil imperial mantinha a escravidão e reservava às mulheres uma instrução doméstica mínima. Escrever sobre direitos femininos em 1832 e abrir uma escola com currículo científico em 1838 eram atos abertamente provocadores.',
    contribuicoes: ['Publicou o primeiro texto de defesa dos direitos das mulheres no Brasil.', 'Fundou o Colégio Augusto, com currículo equivalente ao masculino.', 'Escreveu contra a escravidão e em defesa dos povos indígenas.', 'Publicou em francês e italiano, circulando no meio intelectual europeu.'],
    cronologia: [
      [1810, 'Nasce em Papari, Rio Grande do Norte.'],
      [1832, 'Publica "Direitos das Mulheres e Injustiça dos Homens".'],
      [1838, 'Funda o Colégio Augusto no Rio de Janeiro.'],
      [1849, 'Vai para a Europa.'],
      [1853, 'Publica "Opúsculo Humanitário".'],
      [1885, 'Morre em Rouen, França.']
    ]
  },

  'Ruth Bader Ginsburg': {
    titulo: 'Ganhou os casos um por um',
    cat: 'empoderamento',
    perfis: ['politicos', 'ativistas'],
    origem: 'norteamericanos',
    resumo: 'Construiu a jurisprudência da igualdade de gênero nos Estados Unidos caso a caso, antes de chegar à Suprema Corte.',
    curta: 'Entrou em Harvard entre nove mulheres numa turma de mais de quinhentos homens, cuidou do marido com câncer enquanto cursava o direito por dois e não conseguiu emprego em escritório nenhum. Depois mudou a lei americana sobre igualdade de gênero, um processo de cada vez.',
    bio: [
      'Ginsburg cresceu no Brooklyn; a mãe, que valorizava profundamente sua educação, morreu de câncer no dia anterior à sua formatura no ensino médio. Entrou na faculdade de direito de Harvard como uma das nove mulheres numa turma de mais de quinhentos alunos, e o reitor perguntou às nove por que ocupavam vagas de homens.',
      'Durante o curso, o marido teve câncer testicular; ela assistia às aulas dele, datilografava seus trabalhos e cuidava da filha pequena, além do próprio curso. Transferiu-se para Columbia, formou-se em primeiro lugar e mesmo assim nenhum grande escritório de Nova York a contratou.',
      'Virou professora e, nos anos 1970, dirigiu o Projeto de Direitos das Mulheres da ACLU. Sua estratégia foi cirúrgica: escolher casos pequenos, muitas vezes com homens prejudicados por leis que presumiam papéis de gênero, para construir precedente aos poucos. Argumentou seis casos na Suprema Corte e venceu cinco.',
      'Nomeada juíza da Suprema Corte em 1993, tornou-se conhecida por votos vencidos contundentes, sobretudo em direitos de voto e igualdade salarial. Nos últimos anos virou figura de cultura popular como "Notorious RBG". Morreu em 2020, aos 87 anos.'
    ],
    contexto: 'Nos anos 1960 e 1970, dezenas de leis americanas tratavam homens e mulheres de forma diferente em benefícios, herança, crédito e trabalho. A estratégia de Ginsburg foi mostrar à Corte, com casos concretos, que essas distinções prejudicavam os dois lados.',
    contribuicoes: ['Dirigiu o Projeto de Direitos das Mulheres da ACLU e venceu cinco de seis casos na Suprema Corte.', 'Construiu a jurisprudência americana de igualdade de gênero por precedentes graduais.', 'Escreveu a decisão que abriu o Instituto Militar da Virgínia às mulheres.', 'Seu voto vencido no caso Ledbetter levou o Congresso a aprovar uma lei de igualdade salarial.'],
    cronologia: [
      [1933, 'Nasce no Brooklyn.'],
      [1959, 'Forma-se em primeiro lugar em Columbia.'],
      [1972, 'Funda o Projeto de Direitos das Mulheres da ACLU.'],
      [1980, 'Torna-se juíza federal de recursos.'],
      [1993, 'É nomeada para a Suprema Corte.'],
      [2007, 'Voto vencido no caso Ledbetter.'],
      [2020, 'Morre em Washington.']
    ]
  },

  'Thomas Edison': {
    titulo: 'Mil e noventa e três patentes',
    cat: 'motivacao',
    perfis: ['cientistas', 'empresarios'],
    origem: 'norteamericanos',
    resumo: 'Não inventou a lâmpada, mas criou o primeiro laboratório industrial de pesquisa e o sistema que levou a luz elétrica às casas.',
    curta: 'Teve três meses de escola formal, ficou quase surdo na infância e registrou 1.093 patentes. Sua maior invenção talvez não tenha sido um objeto: foi o laboratório industrial de pesquisa, onde inventar virou processo organizado.',
    bio: [
      'Edison frequentou a escola por poucos meses; o professor o considerou incapaz de aprender e a mãe passou a educá-lo em casa. Perdeu boa parte da audição ainda menino e dizia depois que isso o ajudava a se concentrar. Aos doze anos vendia jornais e doces em trens, e montou um laboratório no vagão de bagagem.',
      'Trabalhou como telegrafista e sua primeira leva de invenções veio dali. Em 1876 montou em Menlo Park o que é considerado o primeiro laboratório industrial de pesquisa do mundo: uma equipe paga para inventar de forma sistemática, com metas e cronograma. Esse modelo é a base de todo departamento de P&D moderno.',
      'A lâmpada incandescente já existia quando ele chegou; o que faltava era um filamento durável e, principalmente, um sistema completo — geradores, fios, medidores, interruptores — que tornasse a eletricidade viável comercialmente. Foi isso que ele resolveu, e em 1882 inaugurou a primeira central elétrica de Manhattan.',
      'Também criou o fonógrafo, que ele considerava sua invenção favorita, e desenvolveu equipamentos decisivos para o cinema. Perdeu a "guerra das correntes" para a corrente alternada de Tesla e Westinghouse, episódio em que fez campanha pública agressiva contra o sistema rival.'
    ],
    contexto: 'Os Estados Unidos do fim do século XIX viviam industrialização acelerada, e a eletricidade era a fronteira tecnológica em disputa. Vencer não dependia só de inventar melhor, mas de construir a infraestrutura e o modelo de negócio ao redor.',
    contribuicoes: ['Criou o primeiro laboratório industrial de pesquisa do mundo, em Menlo Park.', 'Desenvolveu o primeiro sistema completo de distribuição de energia elétrica.', 'Inventou o fonógrafo, primeira máquina capaz de gravar e reproduzir som.', 'Registrou 1.093 patentes nos Estados Unidos.'],
    cronologia: [
      [1847, 'Nasce em Milan, Ohio.'],
      [1869, 'Registra sua primeira patente.'],
      [1876, 'Monta o laboratório de Menlo Park.'],
      [1877, 'Inventa o fonógrafo.'],
      [1879, 'Apresenta a lâmpada incandescente durável.'],
      [1882, 'Inaugura a central elétrica de Pearl Street.'],
      [1931, 'Morre em Nova Jersey.']
    ]
  },

  'John Wooden': {
    titulo: 'A pirâmide antes dos títulos',
    cat: 'motivacao',
    perfis: ['atletas', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Ganhou dez campeonatos universitários em doze anos e definia sucesso sem falar em vitória.',
    curta: 'Treinador de basquete que ganhou dez títulos nacionais em doze anos, incluindo sete seguidos. Nunca falava de vencer com os jogadores: sua definição de sucesso era a paz de saber que se fez o melhor possível.',
    bio: [
      'Wooden cresceu numa fazenda em Indiana durante a Depressão, e a família perdeu a propriedade. O pai lhe deu, na formatura do ensino fundamental, um cartão com sete regras de conduta que ele carregou na carteira pela vida inteira.',
      'Foi um dos maiores jogadores universitários de sua geração e depois professor de inglês e treinador. Passou anos montando o que chamou de Pirâmide do Sucesso: quinze blocos, de laboriosidade e entusiasmo na base até serenidade e fé no topo, sem nenhuma menção a placar.',
      'Assumiu a UCLA em 1948 e levou dezesseis anos até o primeiro título nacional. Depois disso, venceu dez campeonatos em doze anos, incluindo sete consecutivos, e chegou a uma sequência de 88 vitórias seguidas — números nunca igualados no basquete universitário masculino.',
      'Era conhecido por detalhes que pareciam excêntricos: no primeiro treino de cada temporada, ensinava os jogadores a calçar os tênis e as meias corretamente, para evitar bolhas. Dizia que grandes resultados são feitos de pequenos cuidados repetidos.'
    ],
    contexto: 'O esporte universitário americano dos anos 1960 e 1970 se profissionalizava rapidamente, com pressão crescente por resultado. Wooden manteve um discurso deliberadamente centrado em formação e conduta, e venceu mais do que qualquer um.',
    contribuicoes: ['Criou a Pirâmide do Sucesso, usada em formação esportiva e corporativa.', 'Ganhou dez títulos nacionais em doze anos, sete deles consecutivos.', 'Definiu sucesso como a satisfação de ter feito o próprio melhor, sem referência ao adversário.', 'Foi o primeiro eleito para o Hall da Fama do basquete como jogador e como treinador.'],
    cronologia: [
      [1910, 'Nasce em Hall, Indiana.'],
      [1948, 'Assume o comando da UCLA.'],
      [1964, 'Conquista o primeiro título nacional.'],
      [1967, 'Começa a sequência de sete títulos seguidos.'],
      [1975, 'Aposenta-se após o décimo título.'],
      [2010, 'Morre aos 99 anos.']
    ]
  },

  'Colin Powell': {
    titulo: 'Do Bronx ao comando',
    cat: 'motivacao',
    perfis: ['lideres', 'politicos'],
    origem: 'norteamericanos',
    resumo: 'Filho de imigrantes jamaicanos, chegou ao posto militar mais alto do país e depois viveu o episódio que marcaria sua biografia.',
    curta: 'Filho de imigrantes jamaicanos, entrou no Exército pelo curso universitário e chegou a chefe do Estado-Maior Conjunto. Em 2003 defendeu na ONU a existência de armas que não existiam, e passou o resto da vida chamando aquilo de mancha permanente.',
    bio: [
      'Powell nasceu no Harlem e cresceu no Bronx, filho de imigrantes jamaicanos. Estudou geologia no City College de Nova York, onde entrou para o programa de formação de oficiais e descobriu, segundo ele, a primeira coisa em que era realmente bom.',
      'Serviu duas vezes no Vietnã, foi ferido duas vezes e subiu na hierarquia militar. Foi conselheiro de segurança nacional de Reagan e, em 1989, tornou-se o mais jovem chefe do Estado-Maior Conjunto e o primeiro negro no cargo. Conduziu a Guerra do Golfo sob a doutrina que leva seu nome: usar força esmagadora, com objetivo claro e estratégia de saída definida.',
      'Como secretário de Estado, em fevereiro de 2003, apresentou ao Conselho de Segurança da ONU o caso das armas de destruição em massa iraquianas. As informações eram falsas. Ele passou a chamar o episódio de mancha que ficaria para sempre em seu registro.',
      'Nos últimos anos escreveu sobre liderança, divulgou as treze regras que mantinha sob o vidro da mesa e apoiou publicamente candidatos de outro partido, rompendo com a própria filiação. Morreu em 2021 de complicações da covid-19, tendo mieloma múltiplo.'
    ],
    contexto: 'A carreira de Powell atravessa Vietnã, Guerra Fria, Guerra do Golfo e a resposta americana ao 11 de setembro. Sua trajetória e sua queda de reputação são inseparáveis desse arco.',
    contribuicoes: ['Formulou a Doutrina Powell sobre uso da força militar.', 'Foi o primeiro negro a chefiar o Estado-Maior Conjunto e a ocupar a Secretaria de Estado.', 'Escreveu sobre liderança prática, incluindo suas treze regras de conduta.', 'Reconheceu publicamente o erro do discurso de 2003 na ONU.'],
    cronologia: [
      [1937, 'Nasce no Harlem, Nova York.'],
      [1962, 'Primeira missão no Vietnã.'],
      [1987, 'Torna-se conselheiro de segurança nacional.'],
      [1989, 'Assume o Estado-Maior Conjunto.'],
      [2001, 'Torna-se secretário de Estado.'],
      [2003, 'Discurso na ONU sobre o Iraque.'],
      [2021, 'Morre na Virgínia.']
    ]
  },

  'C. S. Lewis': {
    titulo: 'Do ateísmo a Nárnia',
    cat: 'fe',
    perfis: ['literatura', 'filosofos', 'religiosos'],
    origem: 'europeus',
    resumo: 'Professor de literatura medieval, ateu convicto, converteu-se aos 33 anos e escreveu sete livros infantis que nunca pararam de vender.',
    curta: 'Perdeu a mãe aos nove anos e a fé pouco depois. Lutou na Primeira Guerra, virou professor em Oxford, converteu-se ao cristianismo aos 33 numa conversa com Tolkien e escreveu Nárnia — sete livros que já venderam mais de cem milhões de exemplares.',
    bio: [
      'Nascido em Belfast, Lewis perdeu a mãe para o câncer aos nove anos e foi enviado a internatos ingleses que detestou. Tornou-se ateu na adolescência, argumentando que um mundo tão cruel não podia ter um criador bom. Aos dezenove foi para as trincheiras da França e foi ferido em combate.',
      'Estudou e depois lecionou em Oxford por quase trinta anos, especializando-se em literatura medieval e renascentista. Fez parte dos Inklings, grupo informal que se reunia num pub para ler em voz alta trabalhos em andamento, e do qual J.R.R. Tolkien era o membro mais próximo.',
      'A conversão veio aos 33 anos, depois de uma longa caminhada noturna com Tolkien e Hugo Dyson discutindo mito e verdade. A partir dali escreveu apologética cristã de enorme alcance popular, incluindo as palestras de rádio da BBC durante a guerra que virariam "Cristianismo Puro e Simples".',
      'Começou "As Crônicas de Nárnia" em 1949, a partir de uma imagem que carregava desde os dezesseis anos: um fauno com guarda-chuva na neve. Casou-se tarde com a escritora americana Joy Davidman, que morreu de câncer quatro anos depois; o luto produziu "A Anatomia de uma Dor", publicado inicialmente sob pseudônimo. Morreu em 22 de novembro de 1963, mesmo dia do assassinato de Kennedy.'
    ],
    contexto: 'A Inglaterra da Segunda Guerra buscava sentido em meio aos bombardeios, e as palestras de rádio de Lewis alcançaram milhões. Sua obra atravessa esse período de reconstrução moral e espiritual do país.',
    contribuicoes: ['Escreveu "As Crônicas de Nárnia", com mais de cem milhões de exemplares vendidos.', 'Produziu a apologética cristã mais lida do século XX.', 'Fez contribuições acadêmicas duradouras sobre literatura medieval.', 'Escreveu um dos relatos mais honestos sobre luto na língua inglesa.'],
    cronologia: [
      [1898, 'Nasce em Belfast.'],
      [1917, 'Serve na Primeira Guerra e é ferido.'],
      [1931, 'Converte-se ao cristianismo.'],
      [1942, 'Publica "Cartas de um Diabo a seu Aprendiz".'],
      [1950, 'Publica "O Leão, a Feiticeira e o Guarda-Roupa".'],
      [1961, 'Publica "A Anatomia de uma Dor".'],
      [1963, 'Morre em Oxford.']
    ]
  },

  'Edith Eger': {
    titulo: 'Dançou para sobreviver',
    cat: 'dificeis',
    perfis: ['psicologos'],
    origem: 'europeus',
    resumo: 'Sobreviveu a Auschwitz aos dezesseis anos e virou psicóloga clínica, escrevendo o primeiro livro aos noventa.',
    curta: 'Aos dezesseis anos foi obrigada a dançar para Josef Mengele. Sobreviveu a Auschwitz, emigrou para os Estados Unidos, virou psicóloga e publicou seu primeiro livro aos noventa anos, tratando trauma sem exigir superação.',
    bio: [
      'Edith Eger era ginasta e bailarina na Hungria quando, em 1944, a família foi deportada para Auschwitz. Os pais foram mortos no dia da chegada. Na primeira noite, Mengele mandou que ela dançasse para ele; ela dançou de olhos fechados, imaginando estar no palco da ópera de Budapeste. Ele lhe deu um pedaço de pão, que ela dividiu com outras prisioneiras.',
      'Sobreviveu a marchas da morte e foi encontrada quase morta entre cadáveres em Gunskirchen, por um soldado americano que notou a mão dela se mexendo. Tinha as costas fraturadas e pesava pouco mais de trinta quilos.',
      'Emigrou para os Estados Unidos, trabalhou em fábrica, criou os filhos e só depois dos quarenta anos entrou na universidade. Doutorou-se em psicologia clínica e passou a atender sobretudo pessoas com estresse pós-traumático, incluindo veteranos de guerra.',
      'Publicou "A Bailarina de Auschwitz" em 2017, aos noventa anos. Sua tese central é dura e generosa ao mesmo tempo: sofrimento não se compara nem se hierarquiza, e a prisão mais difícil de deixar é a que construímos na própria cabeça.'
    ],
    contexto: 'A literatura de sobreviventes do Holocausto ganhou espaço a partir dos anos 1980, quando muitos finalmente conseguiram falar. Eger levou ainda mais tempo, e chegou com a autoridade adicional de quem passou décadas tratando trauma clinicamente.',
    contribuicoes: ['Trabalhou décadas com pacientes de estresse pós-traumático, incluindo veteranos.', 'Escreveu "A Bailarina de Auschwitz", traduzido para dezenas de idiomas.', 'Formulou a ideia de que vitimização é circunstância e vitimismo é escolha.', 'Recusou a hierarquização do sofrimento no atendimento clínico.'],
    cronologia: [
      [1927, 'Nasce em Košice, então Tchecoslováquia.'],
      [1944, 'É deportada para Auschwitz.'],
      [1945, 'É encontrada viva em Gunskirchen.'],
      [1949, 'Emigra para os Estados Unidos.'],
      [1978, 'Doutora-se em psicologia clínica.'],
      [2017, 'Publica "A Bailarina de Auschwitz".'],
      [2020, 'Publica "O Presente".']
    ]
  },

  'Rubem Alves': {
    titulo: 'Teólogo, educador, contador de histórias',
    cat: 'educacao',
    perfis: ['educadores', 'filosofos', 'literatura'],
    origem: 'brasileiros',
    resumo: 'Perseguido pela própria igreja e pela ditadura, virou o cronista mais delicado da educação brasileira.',
    curta: 'Foi expulso da igreja presbiteriana por suspeita de subversão, exilou-se, virou psicanalista e escreveu crônicas sobre infância, escuta e delicadeza que se tornaram leitura obrigatória para professores no Brasil inteiro.',
    bio: [
      'Rubem Alves nasceu em Boa Esperança, Minas Gerais, e formou-se pastor presbiteriano. Nos anos 1960 foi acusado de comunista pela ala conservadora da própria igreja, num processo que coincidiu com o golpe militar. Perdeu o pastorado e precisou deixar o país.',
      'Fez doutorado nos Estados Unidos, no Princeton Theological Seminary, com uma tese que virou livro e que é apontada como um dos primeiros textos da Teologia da Libertação. Voltou ao Brasil e passou a lecionar na Unicamp, onde ficou até se aposentar.',
      'Aos poucos deslocou-se da teologia para a educação e para a crônica. Formou-se psicanalista e escreveu centenas de textos curtos em jornais, sobre escola, infância, corpo, comida, escuta e morte, com uma prosa deliberadamente simples.',
      'Sua ideia mais citada em educação é a distinção entre a escola como caixa de ferramentas e a escola como lugar de despertar o desejo de aprender. Escreveu que o professor não é quem enche a criança de respostas, mas quem provoca fome de perguntas. Morreu em Campinas, em 2014.'
    ],
    contexto: 'O Brasil da ditadura militar reprimiu pensadores dentro e fora das igrejas. A trajetória de Rubem Alves, saindo da teologia militante para a crônica cotidiana, atravessa esse período e a redemocratização.',
    contribuicoes: ['Escreveu um dos textos fundadores da Teologia da Libertação.', 'Tornou-se um dos autores mais lidos em formação de professores no Brasil.', 'Criou uma prosa de crônica curta sobre educação, infância e sensibilidade.', 'Publicou também literatura infantil, entre ela "A História do Pássaro Que Vivia no Ar".'],
    cronologia: [
      [1933, 'Nasce em Boa Esperança, Minas Gerais.'],
      [1968, 'É processado pela igreja presbiteriana e deixa o país.'],
      [1968, 'Doutora-se em Princeton.'],
      [1974, 'Torna-se professor na Unicamp.'],
      [1994, 'Publica "A Alegria de Ensinar".'],
      [2014, 'Morre em Campinas.']
    ]
  },

  'Marshall McLuhan': {
    titulo: 'O meio é a mensagem',
    cat: 'reflexao',
    perfis: ['estrategistas', 'educadores'],
    origem: 'norteamericanos',
    resumo: 'Professor de literatura que descreveu a aldeia global e os efeitos dos meios de comunicação décadas antes da internet.',
    curta: 'Era professor de literatura inglesa e virou o teórico mais citado sobre mídia do século XX. Falou em aldeia global em 1962, quando a televisão ainda era novidade e a internet não existia.',
    bio: [
      'Canadense de Edmonton, McLuhan começou estudando engenharia, migrou para literatura inglesa e doutorou-se em Cambridge com uma tese sobre retórica. Converteu-se ao catolicismo e lecionou boa parte da vida na Universidade de Toronto.',
      'Sua virada veio ao analisar anúncios publicitários como objetos culturais, em "A Noiva Mecânica", de 1951. A partir dali passou a estudar não o conteúdo das mensagens, mas o efeito das tecnologias de comunicação sobre a percepção e a organização social.',
      'Em "A Galáxia de Gutenberg", de 1962, argumentou que a imprensa criou o pensamento linear, individual e privado, e cunhou a expressão aldeia global para descrever o que os meios eletrônicos estavam fazendo em sentido contrário: reconectando o mundo em escala tribal.',
      'Em "Os Meios de Comunicação como Extensões do Homem", de 1964, formulou a frase mais citada de sua obra: o meio é a mensagem. O ponto é que a mudança real não vem do que a televisão transmite, e sim do fato de haver televisão. Foi celebridade nos anos 1960, caiu em descrédito acadêmico nos anos 1970 e voltou com força total com a internet.'
    ],
    contexto: 'Os anos 1960 viram a televisão se tornar o meio dominante e mudar campanhas eleitorais, guerras e infância. McLuhan foi quem propôs olhar para a tecnologia em si, e não para o programa que passava nela.',
    contribuicoes: ['Formulou a tese de que o meio é a mensagem.', 'Cunhou a expressão aldeia global em 1962.', 'Distinguiu meios quentes e frios pelo grau de participação que exigem.', 'Fundou os estudos de mídia como campo próprio, na chamada Escola de Toronto.'],
    cronologia: [
      [1911, 'Nasce em Edmonton, Canadá.'],
      [1943, 'Doutora-se em Cambridge.'],
      [1951, 'Publica "A Noiva Mecânica".'],
      [1962, 'Publica "A Galáxia de Gutenberg".'],
      [1964, 'Publica "Os Meios de Comunicação como Extensões do Homem".'],
      [1980, 'Morre em Toronto.']
    ]
  },

  'Gustave Le Bon': {
    titulo: 'O primeiro a estudar multidões',
    cat: 'manipulacao',
    perfis: ['psicologos', 'estrategistas'],
    origem: 'europeus',
    resumo: 'Escreveu em 1895 o livro sobre psicologia das massas que influenciaria tanto a publicidade quanto os regimes autoritários.',
    curta: 'Médico de formação, escreveu em 1895 o primeiro estudo sistemático sobre como as pessoas mudam de comportamento dentro de uma multidão. O livro influenciou a publicidade moderna — e também ditadores que o leram com atenção.',
    bio: [
      'Le Bon formou-se em medicina em Paris e trabalhou como médico militar durante a guerra franco-prussiana, observando de perto o comportamento de tropas sob pânico. Viajou pela Europa, Ásia e norte da África e escreveu sobre antropologia, arqueologia e física.',
      'Em 1895 publicou "Psicologia das Multidões", em que sustenta que o indivíduo dentro de uma massa perde consciência crítica, ganha sensação de poder anônimo e passa a agir por sugestão e contágio emocional, guiado por imagens e afirmações repetidas em vez de argumentos.',
      'O livro teve efeito imediato e duradouro: foi leitura de Freud, que dialogou com ele em "Psicologia das Massas e Análise do Eu", e de Edward Bernays, fundador das relações públicas. Também foi lido por líderes autoritários do século XX, o que torna sua herança inseparável de um debate ético.',
      'Suas explicações sobre raça e sobre mulheres refletem preconceitos correntes de sua época e são hoje rejeitadas. O que permanece é a descrição do mecanismo: a diferença entre o comportamento de uma pessoa sozinha e da mesma pessoa em meio a uma multidão.'
    ],
    contexto: 'A França do fim do século XIX vinha de revoltas, da Comuna de Paris e de greves de massa, e a elite estava assustada com o poder das multidões urbanas. Le Bon escreveu de dentro desse medo, o que explica tanto sua argúcia quanto seus vieses.',
    contribuicoes: ['Fundou o estudo sistemático da psicologia das multidões.', 'Descreveu contágio emocional, anonimato e sugestionabilidade em grupos.', 'Influenciou Freud, a publicidade moderna e a teoria da propaganda.', 'Antecipou análises hoje aplicadas a comportamento em redes sociais.'],
    cronologia: [
      [1841, 'Nasce em Nogent-le-Rotrou, França.'],
      [1866, 'Doutora-se em medicina.'],
      [1870, 'Serve como médico militar na guerra franco-prussiana.'],
      [1895, 'Publica "Psicologia das Multidões".'],
      [1931, 'Morre em Marnes-la-Coquette.']
    ]
  },

  'Napoleão Bonaparte': {
    titulo: 'Do posto de tenente ao trono',
    cat: 'motivacao',
    perfis: ['lideres', 'politicos'],
    origem: 'europeus',
    resumo: 'Chegou ao poder pela artilharia, refez o mapa da Europa e deixou um código civil que sobrevive em dezenas de países.',
    curta: 'Corso de família modesta, entrou na escola militar como bolsista, aproveitou o caos da Revolução e virou imperador aos 34 anos. Perdeu tudo na Rússia e em Waterloo, mas o código civil que mandou escrever ainda organiza o direito de dezenas de países.',
    bio: [
      'Nascido na Córsega poucos meses depois de a ilha ser anexada pela França, Napoleão foi bolsista em escolas militares francesas, onde era ridicularizado pelo sotaque. Formou-se oficial de artilharia aos dezesseis anos.',
      'A Revolução abriu espaço para talentos jovens: destacou-se no cerco de Toulon aos 24 anos e depois na campanha da Itália. Em 1799 deu um golpe de Estado e assumiu como primeiro-cônsul; em 1804 coroou-se imperador, tomando a coroa das mãos do papa.',
      'Reorganizou a França por dentro: criou o Código Civil, o Banco da França, o sistema de liceus, a administração por prefeitos e o baccalauréat. Essas instituições sobreviveram a todos os regimes seguintes e foram exportadas pela Europa e pela América Latina.',
      'Militarmente, dominou o continente até a desastrosa invasão da Rússia em 1812, quando perdeu a maior parte de um exército de mais de meio milhão de homens. Abdicou, foi exilado em Elba, voltou por cem dias, perdeu em Waterloo e morreu preso em Santa Helena, em 1821.'
    ],
    contexto: 'A Revolução Francesa destruiu o Antigo Regime e deixou um vácuo de autoridade. Napoleão consolidou parte das conquistas revolucionárias — igualdade civil, fim dos privilégios de nascimento — enquanto restaurava um poder pessoal absoluto.',
    contribuicoes: ['Promulgou o Código Civil de 1804, base de códigos em dezenas de países, inclusive o Brasil.', 'Criou instituições francesas duradouras: Banco da França, liceus, prefeituras.', 'Reformou o sistema educacional e administrativo europeu por onde passou.', 'A campanha do Egito produziu a descoberta da Pedra de Roseta e fundou a egiptologia.'],
    cronologia: [
      [1769, 'Nasce em Ajácio, Córsega.'],
      [1793, 'Destaca-se no cerco de Toulon.'],
      [1799, 'Dá o golpe do 18 Brumário.'],
      [1804, 'Coroa-se imperador e promulga o Código Civil.'],
      [1812, 'Fracassa na invasão da Rússia.'],
      [1815, 'É derrotado em Waterloo.'],
      [1821, 'Morre em Santa Helena.']
    ]
  },

  'Theodore Roosevelt': {
    titulo: 'O homem na arena',
    cat: 'motivacao',
    perfis: ['politicos', 'lideres'],
    origem: 'norteamericanos',
    resumo: 'Criança asmática que se construiu no exercício físico, virou o presidente mais jovem da história americana e o primeiro conservacionista no cargo.',
    curta: 'Foi uma criança asmática e frágil que se reconstruiu no exercício. Perdeu mãe e esposa no mesmo dia, foi para o oeste criar gado, voltou à política e virou o presidente mais jovem dos Estados Unidos.',
    bio: [
      'Roosevelt teve asma severa na infância e foi educado em casa. O pai lhe disse que precisaria construir um corpo à altura da própria cabeça, e ele levou a sério: boxe, remo, ginástica e caminhadas viraram disciplina diária pelo resto da vida.',
      'Em 14 de fevereiro de 1884, a mãe e a esposa morreram no mesmo dia, na mesma casa. Ele escreveu um X no diário e a frase de que a luz havia saído de sua vida, largou a política e passou dois anos criando gado em Dakota do Norte.',
      'Voltou, foi chefe de polícia de Nova York, subsecretário da Marinha, organizou um regimento de cavalaria na Guerra Hispano-Americana e virou governador. Escolhido vice-presidente, assumiu a presidência em 1901, aos 42 anos, após o assassinato de McKinley.',
      'Como presidente, enfrentou monopólios, mediou greves, criou leis de inspeção de alimentos e medicamentos e protegeu cerca de 93 milhões de hectares de terras públicas, criando parques e florestas nacionais. Ganhou o Nobel da Paz por mediar a guerra russo-japonesa. Em 1912, em campanha, levou um tiro no peito e discursou por mais de uma hora antes de ir ao hospital.'
    ],
    contexto: 'Os Estados Unidos do início do século XX viviam concentração industrial extrema, escândalos alimentares e devastação ambiental. Roosevelt inaugurou a ideia de presidência ativa, que intervém na economia em nome do interesse público.',
    contribuicoes: ['Protegeu cerca de 93 milhões de hectares e criou o Serviço Florestal americano.', 'Enfrentou monopólios com aplicação vigorosa da lei antitruste.', 'Criou a fiscalização federal de alimentos e medicamentos.', 'Recebeu o Nobel da Paz de 1906 por mediar o fim da guerra russo-japonesa.'],
    cronologia: [
      [1858, 'Nasce em Nova York.'],
      [1884, 'Perde mãe e esposa no mesmo dia.'],
      [1898, 'Comanda os Rough Riders em Cuba.'],
      [1901, 'Torna-se presidente aos 42 anos.'],
      [1906, 'Recebe o Nobel da Paz.'],
      [1910, 'Faz o discurso do "homem na arena", em Paris.'],
      [1919, 'Morre em Oyster Bay.']
    ]
  }
});

/* ================================================================
   BIOGRAFIAS CURTAS PARA "HISTÓRIAS"
   Geradas a partir da curadoria acima: versão rápida e estratégica,
   que termina apontando para o conteúdo aprofundado.
   ================================================================ */
const NOVAS_HISTORIAS = Object.entries(PERFIS_PROFUNDOS).map(([nome, p]) => ({
  id: 'p6_' + slugify(nome),
  author: nome,
  cat: p.cat,
  profiles: p.perfis,
  origin: p.origem,
  role: (PAPEIS[nome] || papelDe(nome) || '').replace(/^.*?—\s*/, ''),
  title: p.titulo,
  excerpt: p.resumo,
  why: p.resumo,
  text: p.curta + '\n\nEsta é a versão curta. Em Autores & Obras há o panorama completo: trajetória detalhada, contexto histórico, principais contribuições, cronologia, todas as frases do acervo e a biblioteca de obras desta pessoa.'
}));
