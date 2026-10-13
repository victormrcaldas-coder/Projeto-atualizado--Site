/* MeMotiva — dados/16-obras-feitos-papeis.js
   Catálogo-base de obras (OBRAS_CURADAS), feitos e papéis (descrição curta das pessoas).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 5 — DADOS: OBRAS, FEITOS E PAPÉIS
   ----------------------------------------------------------------
   Formato compacto: [título, tipo, ano, descrição].
   `ano` pode ser número, string ("séc. VI a.C.") ou null.
   ================================================================ */

const OBRAS_CURADAS = {
  /* ---------------- FILOSOFIA ANTIGA E CLÁSSICA ---------------- */
  Aristóteles: [
    ['Ética a Nicômaco', 'tratado', 'séc. IV a.C.', 'O tratado que fundou a ética ocidental como investigação prática: o que é uma vida boa, como se formam as virtudes e por que a felicidade é atividade, não sensação.'],
    ['Política', 'tratado', 'séc. IV a.C.', 'Estudo comparado de constituições reais em que Aristóteles define o ser humano como animal político e discute qual regime melhor resiste à corrupção.'],
    ['Retórica', 'tratado', 'séc. IV a.C.', 'Primeiro manual sistemático de persuasão: ethos, pathos e logos nasceram aqui e continuam sendo a base de qualquer curso de comunicação.'],
    ['Metafísica', 'tratado', 'séc. IV a.C.', 'As perguntas sobre ser, causa e substância que organizaram a filosofia por dois mil anos — o livro que deu nome à própria disciplina.'],
    ['Poética', 'tratado', 'séc. IV a.C.', 'Análise da tragédia grega que criou os conceitos de enredo, catarse e personagem ainda usados por roteiristas e dramaturgos.']
  ],
  Platão: [
    ['A República', 'diálogo', 'séc. IV a.C.', 'O diálogo sobre justiça que contém a alegoria da caverna e o projeto de cidade ideal — provavelmente o livro de filosofia mais lido do mundo.'],
    ['O Banquete', 'diálogo', 'séc. IV a.C.', 'Sete discursos sobre o amor numa festa em Atenas, do desejo físico à ascensão ao belo em si. Origem da expressão "amor platônico".'],
    ['Apologia de Sócrates', 'diálogo', 'séc. IV a.C.', 'A defesa de Sócrates diante do tribunal que o condenou à morte, e a formulação mais famosa da vida examinada.'],
    ['Fédon', 'diálogo', 'séc. IV a.C.', 'As últimas horas de Sócrates e o argumento sobre a imortalidade da alma, escrito com a serenidade de quem conversa até o fim.']
  ],
  Sócrates: [['Diálogos socráticos (registrados por Platão e Xenofonte)', 'diálogo', 'séc. IV a.C.', 'Sócrates não escreveu. Tudo que se conhece do seu método vem dos registros de discípulos — sobretudo os diálogos de juventude de Platão.']],
  Sêneca: [
    ['Cartas a Lucílio', 'carta', 'séc. I', '124 cartas de orientação prática sobre tempo, medo, amizade e morte. É o estoicismo em forma de conversa, e envelheceu quase nada.'],
    ['Sobre a Brevidade da Vida', 'ensaio', 'séc. I', 'A vida não é curta: nós é que a desperdiçamos. Um dos textos mais diretos já escritos sobre o uso do tempo.'],
    ['Sobre a Ira', 'tratado', 'séc. I', 'Três livros dissecando a raiva: como nasce, o que ela custa e como interrompê-la antes que ela decida por você.'],
    ['Sobre a Tranquilidade da Alma', 'ensaio', 'séc. I', 'Diagnóstico da inquietação crônica e um método para atravessá-la sem fugir do mundo.']
  ],
  'Marco Aurélio': [['Meditações', 'diario', 'séc. II', 'Anotações que o imperador escreveu para si mesmo, sem intenção de publicar. Por isso são tão francas: é um homem poderoso tentando não se corromper.']],
  Epicteto: [
    ['Enquirídio', 'manual', 'séc. II', 'Manual de bolso do estoicismo, montado por um aluno. Cabe no bolso e cobre quase tudo: o que depende de você e o que não depende.'],
    ['Diatribes', 'tratado', 'séc. II', 'Aulas transcritas de um ex-escravizado que virou o professor de filosofia mais respeitado de Roma.']
  ],
  Epicuro: [
    ['Carta a Meneceu', 'carta', 'séc. IV a.C.', 'A carta em que Epicuro explica que o prazer que ele defende é ausência de dor e de medo — não excesso.'],
    ['Sentenças Vaticanas', 'aforismo', 'séc. IV a.C.', 'Coleção de máximas curtas sobre amizade, desejo e morte, redescoberta num manuscrito do Vaticano no século XIX.'],
    ['Máximas Principais', 'aforismo', 'séc. IV a.C.', 'Quarenta sentenças que resumem toda a doutrina — pensadas para serem memorizadas e usadas no dia a dia.']
  ],
  Cícero: [
    ['Sobre os Deveres (De Officiis)', 'tratado', '44 a.C.', 'Carta longa ao filho sobre como agir bem quando o honesto e o conveniente parecem se separar. Foi manual de ética por dezoito séculos.'],
    ['Sobre a Amizade (Laelius)', 'ensaio', '44 a.C.', 'O tratado clássico sobre amizade verdadeira: rara, exigente e impossível entre pessoas desonestas.'],
    ['Sobre a Velhice (Cato Maior)', 'ensaio', '44 a.C.', 'Defesa serena da velhice contra os quatro medos habituais, escrita por alguém que sabia estar perto do fim.'],
    ['Catilinárias', 'discurso', '63 a.C.', 'Os quatro discursos que desmontaram uma conspiração em pleno Senado — modelo de oratória política até hoje.']
  ],
  Heráclito: [['Fragmentos', 'aforismo', 'séc. V a.C.', 'Cerca de cem frases sobreviventes, obscuras e cortantes, sobre o fluxo, o conflito e a unidade dos opostos.']],
  'Zenão de Cítio': [['Fragmentos e testemunhos', 'tratado', 'séc. III a.C.', 'Fundador do estoicismo. Sua obra se perdeu; o que restou chegou por citações de autores posteriores.']],
  'Baltasar Gracián': [
    ['A Arte da Prudência', 'aforismo', 1647, 'Trezentos aforismos sobre como agir no mundo real sem perder a integridade. Schopenhauer o traduziu e o carregava consigo.'],
    ['O Criticón', 'romance', 1651, 'Alegoria em três partes sobre a educação de um homem que nunca viveu em sociedade — sátira e filosofia no mesmo texto.']
  ],
  'Publílio Siro': [['Sentenças', 'aforismo', 'séc. I a.C.', 'Máximas extraídas de peças de mimo, usadas por séculos como material escolar de retórica e moral.']],

  /* ---------------- FILOSOFIA MODERNA E CONTEMPORÂNEA ---------------- */
  'Michel de Montaigne': [['Ensaios', 'ensaio', 1580, 'Inventou o gênero do ensaio ao escrever sobre si mesmo com honestidade desconcertante — mais de cem capítulos sobre medo, amizade, hábito, morte e dúvida.']],
  'Immanuel Kant': [
    ['Crítica da Razão Pura', 'tratado', 1781, 'A investigação sobre os limites do que podemos conhecer que dividiu a filosofia em antes e depois.'],
    ['Fundamentação da Metafísica dos Costumes', 'tratado', 1785, 'Onde nasce o imperativo categórico: aja apenas segundo a máxima que você poderia querer como lei universal.'],
    ['Crítica da Razão Prática', 'tratado', 1788, 'A moral como exigência da própria razão, e não como cálculo de consequências.'],
    ['Resposta à Pergunta: O Que é o Esclarecimento?', 'ensaio', 1784, 'Texto de poucas páginas com a frase que definiu a modernidade: ouse saber, saia da menoridade autoimposta.']
  ],
  'Friedrich Nietzsche': [
    ['Assim Falou Zaratustra', 'filosofia', 1885, 'Poema filosófico sobre o além-do-homem, o eterno retorno e a morte de Deus. Nietzsche o considerava seu livro mais importante.'],
    ['Além do Bem e do Mal', 'filosofia', 1886, 'Ataque frontal à moral herdada e aos filósofos que a disfarçam de razão. Um dos livros mais citados do século XX.'],
    ['Genealogia da Moral', 'filosofia', 1887, 'Investigação sobre de onde vêm as ideias de culpa, dever e má consciência — e a quem elas serviram.'],
    ['Crepúsculo dos Ídolos', 'filosofia', 1888, 'Livro curto e demolidor escrito em semanas: "filosofar a marteladas" contra as ideias que já estavam ocas.'],
    ['A Gaia Ciência', 'filosofia', 1882, 'Aforismos sobre alegria, conhecimento e coragem; contém a primeira formulação do eterno retorno.']
  ],
  'Arthur Schopenhauer': [
    ['O Mundo como Vontade e Representação', 'tratado', 1818, 'A obra da vida: o mundo como impulso cego que se manifesta em tudo, e a arte como breve suspensão do sofrimento.'],
    ['Aforismos para a Sabedoria de Vida', 'ensaio', 1851, 'A parte mais lida e mais prática de sua obra: como viver com o que se tem, sem depender da opinião alheia.'],
    ['A Arte de Ter Razão', 'ensaio', 1831, 'Trinta e oito estratagemas de discussão descritos sem moralismo — manual involuntário de má-fé argumentativa.']
  ],
  'Søren Kierkegaard': [
    ['Temor e Tremor', 'filosofia', 1843, 'Meditação sobre Abraão e o salto da fé: o momento em que a ética não basta e a decisão é radicalmente individual.'],
    ['O Desespero Humano (A Doença Mortal)', 'filosofia', 1849, 'Anatomia do desespero como recusa de ser quem se é. Antecipou boa parte da psicologia existencial.'],
    ['Ou Isto ou Aquilo', 'filosofia', 1843, 'Confronto entre o modo estético e o modo ético de viver, montado como se fossem papéis achados numa escrivaninha.']
  ],
  'Albert Camus': [
    ['O Estrangeiro', 'romance', 1942, 'Meursault não chora no enterro da mãe e é julgado por isso. Um dos romances mais lidos do século XX.'],
    ['O Mito de Sísifo', 'ensaio', 1942, 'O ensaio sobre o absurdo que começa perguntando se vale a pena viver — e termina imaginando Sísifo feliz.'],
    ['A Peste', 'romance', 1947, 'Uma cidade em quarentena como retrato da ocupação e de qualquer catástrofe coletiva. Voltou às listas de mais vendidos em 2020.'],
    ['O Homem Revoltado', 'ensaio', 1951, 'Ensaio sobre revolta e limite que custou a Camus a amizade de Sartre e boa parte da esquerda francesa.']
  ],
  'Jean-Paul Sartre': [
    ['O Ser e o Nada', 'tratado', 1943, 'A grande obra do existencialismo francês: liberdade, má-fé e a consciência como falta.'],
    ['O Existencialismo é um Humanismo', 'ensaio', 1946, 'Conferência curta que popularizou a fórmula "a existência precede a essência".'],
    ['A Náusea', 'romance', 1938, 'Diário de um homem que descobre a contingência bruta das coisas — o existencialismo antes do tratado.']
  ],
  'Simone de Beauvoir': [
    ['O Segundo Sexo', 'ensaio', 1949, 'A frase "não se nasce mulher, torna-se" abre a análise que reorganizou o pensamento feminista do século XX.'],
    ['A Cerimônia do Adeus', 'memoria', 1981, 'Relato dos últimos dez anos de Sartre, escrito sem embelezamento — um dos textos mais duros sobre o envelhecer.'],
    ['Memórias de uma Moça Bem-Comportada', 'memoria', 1958, 'Primeiro volume da autobiografia: a formação de uma jovem burguesa que decide não seguir o roteiro.']
  ],
  'Hannah Arendt': [
    ['Origens do Totalitarismo', 'ensaio', 1951, 'Como antissemitismo, imperialismo e isolamento social se combinaram para produzir uma forma inédita de dominação.'],
    ['Eichmann em Jerusalém', 'ensaio', 1963, 'A reportagem do julgamento em que Arendt formulou a "banalidade do mal" — e foi atacada por isso durante décadas.'],
    ['A Condição Humana', 'ensaio', 1958, 'Distinção entre labor, trabalho e ação, e a defesa da vida pública como espaço onde alguém aparece como alguém.']
  ],
  'Bertrand Russell': [
    ['A Conquista da Felicidade', 'ensaio', 1930, 'Livro prático e antissolene sobre o que produz infelicidade evitável — inveja, tédio, competição, medo da opinião.'],
    ['História da Filosofia Ocidental', 'ensaio', 1945, 'Panorama de dois mil e quinhentos anos escrito com opinião e humor; foi decisivo para o Nobel de Literatura de 1950.'],
    ['Os Problemas da Filosofia', 'ensaio', 1912, 'Introdução curta e clássica: o que sabemos, como sabemos e por que a dúvida é útil.'],
    ['Principia Mathematica (com Whitehead)', 'tratado', 1910, 'Tentativa monumental de derivar toda a matemática da lógica. Mudou o rumo da lógica moderna.']
  ],
  'John Stuart Mill': [
    ['Sobre a Liberdade', 'ensaio', 1859, 'A defesa clássica da liberdade individual e do princípio do dano — texto fundador do liberalismo político.'],
    ['A Sujeição das Mulheres', 'ensaio', 1869, 'Argumento pela igualdade civil das mulheres escrito quando isso ainda era posição minoritária no Parlamento britânico.'],
    ['Utilitarismo', 'ensaio', 1863, 'Reformulação da doutrina da maior felicidade, distinguindo prazeres superiores de inferiores.']
  ],
  'Francis Bacon': [
    ['Novum Organum', 'tratado', 1620, 'O método indutivo e a crítica dos "ídolos" da mente: o programa que fundou a ciência experimental moderna.'],
    ['Ensaios', 'ensaio', 1597, 'Textos curtos sobre estudo, amizade, verdade e ambição — prosa inglesa em estado de máxima economia.']
  ],
  'Baruch Spinoza': [
    ['Ética', 'tratado', 1677, 'Demonstrada à maneira dos geômetras: Deus, natureza, afetos e liberdade num único sistema. Publicada só após sua morte.'],
    ['Tratado Teológico-Político', 'tratado', 1670, 'Defesa pioneira da liberdade de pensamento e da leitura histórica das escrituras. Foi proibido quase em toda parte.']
  ],
  'René Descartes': [
    ['Discurso do Método', 'ensaio', 1637, 'Autobiografia intelectual e método em quatro regras. É onde aparece o "penso, logo existo".'],
    ['Meditações Metafísicas', 'tratado', 1641, 'Seis meditações que levam a dúvida ao extremo para reconstruir o conhecimento a partir do que resiste.']
  ],
  'Blaise Pascal': [
    ['Pensamentos', 'aforismo', 1670, 'Notas para uma apologia nunca concluída. Contém o argumento da aposta e algumas das frases mais citadas sobre o coração e a razão.'],
    ['Cartas Provinciais', 'carta', 1657, 'Polêmica brilhante e irônica contra a casuística jesuítica; considerada um marco da prosa francesa.']
  ],
  'John Locke': [
    ['Segundo Tratado sobre o Governo Civil', 'tratado', 1689, 'Consentimento, propriedade e direito de resistência: a base teórica das revoluções liberais.'],
    ['Ensaio sobre o Entendimento Humano', 'tratado', 1689, 'A mente como folha em branco preenchida pela experiência — a fundação do empirismo moderno.'],
    ['Carta sobre a Tolerância', 'carta', 1689, 'Argumento pela separação entre Estado e igreja escrito no exílio.']
  ],
  'David Hume': [
    ['Tratado da Natureza Humana', 'tratado', 1739, 'A obra que Hume achou que havia "nascido morta" e que hoje é vista como um dos maiores livros de filosofia em inglês.'],
    ['Investigação sobre o Entendimento Humano', 'tratado', 1748, 'Versão mais legível do Tratado, com o famoso problema da indução e a crítica à causalidade.']
  ],
  'Jean-Jacques Rousseau': [
    ['O Contrato Social', 'tratado', 1762, '"O homem nasce livre e por toda parte está acorrentado." O livro que deu vocabulário à Revolução Francesa.'],
    ['Emílio, ou Da Educação', 'tratado', 1762, 'Romance pedagógico que inventou a ideia moderna de infância e de educação conforme a natureza.'],
    ['Confissões', 'memoria', 1782, 'Autobiografia que prometia contar tudo, inclusive o vergonhoso — inaugurou a escrita íntima moderna.']
  ],
  Voltaire: [
    ['Cândido', 'romance', 1759, 'Sátira feroz ao otimismo filosófico, atravessando catástrofes reais. Termina no célebre "é preciso cultivar nosso jardim".'],
    ['Tratado sobre a Tolerância', 'ensaio', 1763, 'Escrito a partir de um erro judiciário real, tornou-se o texto de referência sobre liberdade de consciência.'],
    ['Dicionário Filosófico', 'ensaio', 1764, 'Verbetes curtos e provocadores publicados anonimamente para escapar da censura.']
  ],
  'Thomas Hobbes': [['Leviatã', 'tratado', 1651, 'Do estado de natureza ao contrato: a defesa do poder soberano como única alternativa à guerra de todos contra todos.']],
  Montesquieu: [
    ['O Espírito das Leis', 'tratado', 1748, 'Comparação de regimes e formulação da separação de poderes que estruturou as constituições modernas.'],
    ['Cartas Persas', 'romance', 1721, 'Sátira à sociedade francesa vista pelos olhos de dois viajantes persas — crítica social disfarçada de correspondência.']
  ],
  'Michel Foucault': [
    ['Vigiar e Punir', 'ensaio', 1975, 'Do suplício público à prisão: como a punição virou disciplina e a disciplina virou forma de produzir sujeitos.'],
    ['História da Loucura', 'ensaio', 1961, 'A separação entre razão e desrazão como acontecimento histórico, não como descoberta médica.'],
    ['História da Sexualidade', 'ensaio', 1976, 'Contra a hipótese repressiva: o Ocidente não calou o sexo, produziu discurso sem parar sobre ele.']
  ],
  'Karl Marx': [
    ['O Capital', 'tratado', 1867, 'Análise da mercadoria, do valor e da acumulação que se tornou referência obrigatória — inclusive para quem discorda.'],
    ['Manifesto Comunista (com Engels)', 'ensaio', 1848, 'Panfleto de poucas páginas com um dos inícios mais reconhecíveis da história editorial.']
  ],
  'Alexis de Tocqueville': [['A Democracia na América', 'ensaio', 1835, 'Relato de viagem que virou o estudo clássico sobre igualdade, associação e os riscos de despotismo brando.']],
  'Adam Smith': [
    ['A Riqueza das Nações', 'tratado', 1776, 'Divisão do trabalho, mercado e a metáfora da mão invisível — o livro que fundou a economia como campo.'],
    ['Teoria dos Sentimentos Morais', 'tratado', 1759, 'A obra que Smith considerava a principal: simpatia e espectador imparcial como base da moral.']
  ],
  'Noam Chomsky': [
    ['Estruturas Sintáticas', 'tratado', 1957, 'O livro que reorganizou a linguística ao propor uma gramática gerativa comum a todas as línguas.'],
    ['Manufaturando Consenso (com Edward Herman)', 'ensaio', 1988, 'Modelo de propaganda para explicar como a imprensa livre pode, ainda assim, estreitar o debate.']
  ],
  'Yuval Noah Harari': [
    ['Sapiens', 'ensaio', 2011, 'História da humanidade a partir da capacidade de acreditar coletivamente em ficções — dinheiro, nações, empresas.'],
    ['Homo Deus', 'ensaio', 2015, 'Continuação especulativa sobre o que a humanidade pode buscar depois de reduzir fome, peste e guerra.']
  ],
  'Simone Weil': [
    ['A Gravidade e a Graça', 'ensaio', 1947, 'Cadernos organizados após sua morte: atenção, desapego e sofrimento tratados com rigor incomum.'],
    ['O Enraizamento', 'ensaio', 1949, 'Escrito no exílio durante a guerra, sobre a necessidade humana de raízes e deveres antes de direitos.']
  ],
  'Ailton Krenak': [
    ['Ideias para Adiar o Fim do Mundo', 'ensaio', 2019, 'Três conferências que se tornaram um dos ensaios brasileiros mais lidos da década, sobre humanidade, natureza e sonho.'],
    ['A Vida Não é Útil', 'ensaio', 2020, 'Textos e falas reunidos contra a lógica que só reconhece valor no que produz.']
  ],
  'Rubem Alves': [
    ['O Retorno e Terno', 'cronica', 1992, 'Crônicas curtas sobre infância, escuta e delicadeza que fizeram do teólogo um dos cronistas mais lidos do país.'],
    ['A Alegria de Ensinar', 'ensaio', 1994, 'Livro pequeno e insistente sobre o professor como alguém que provoca fome de saber, não como quem despeja conteúdo.']
  ],
  'Santo Agostinho': [
    ['Confissões', 'memoria', 397, 'A primeira autobiografia interior do Ocidente: memória, desejo, tempo e conversão contados em primeira pessoa.'],
    ['A Cidade de Deus', 'tratado', 426, 'Resposta ao saque de Roma e à acusação de que o cristianismo havia enfraquecido o império.']
  ],
  'Tomás de Aquino': [['Suma Teológica', 'tratado', 1273, 'Síntese monumental entre fé cristã e filosofia aristotélica, organizada em perguntas, objeções e respostas.']],
  Confúcio: [['Analectos', 'aforismo', 'séc. V a.C.', 'Conversas e sentenças reunidas por discípulos. Base da ética, da educação e da administração pública em boa parte da Ásia.']],
  'Lao Tsé': [['Tao Te Ching', 'sagrado', 'séc. VI a.C.', 'Oitenta e um capítulos breves sobre o caminho, a água, o vazio e o governo que não força. Um dos livros mais traduzidos do mundo.']],
  'Sun Tzu': [['A Arte da Guerra', 'tratado', 'séc. V a.C.', 'Treze capítulos sobre vencer sem lutar. Saiu do campo militar e virou leitura obrigatória em negócios e negociação.']],
  'Carl von Clausewitz': [['Da Guerra', 'tratado', 1832, 'Tratado inacabado que definiu a guerra como continuação da política por outros meios e introduziu a ideia de fricção.']],
  'Nicolau Maquiavel': [
    ['O Príncipe', 'tratado', 1532, 'Manual de poder escrito com realismo brutal, sem apelo a como as coisas deveriam ser.'],
    ['Discursos sobre a Primeira Década de Tito Lívio', 'tratado', 1531, 'A obra republicana de Maquiavel, muito menos lida e bem mais favorável à liberdade política do que O Príncipe.']
  ],
  Hipátia: [['Comentários matemáticos (perdidos)', 'ciencia', 'séc. IV', 'Editou e comentou Diofanto, Apolônio e Ptolomeu. Nenhum texto seu sobreviveu; o que se sabe vem de cartas de alunos.']],

  /* ---------------- LITERATURA ---------------- */
  'William Shakespeare': [
    ['Hamlet', 'teatro', 1601, 'O príncipe que hesita, e a peça que transformou a dúvida interior em matéria de teatro.'],
    ['Macbeth', 'teatro', 1606, 'Ambição, profecia e culpa numa tragédia curta e implacável.'],
    ['Romeu e Julieta', 'teatro', 1595, 'A tragédia amorosa mais encenada do mundo, e o modelo de quase toda história de amor impossível desde então.'],
    ['Rei Lear', 'teatro', 1606, 'Um rei divide o reino pelas razões erradas; considerada por muitos a maior tragédia já escrita.'],
    ['Sonetos', 'poesia', 1609, 'Cento e cinquenta e quatro poemas sobre tempo, desejo e permanência — inclusive o soneto 18.'],
    ['A Tempestade', 'teatro', 1611, 'Ilha, magia e perdão na última peça que Shakespeare escreveu sozinho.']
  ],
  'Fernando Pessoa': [
    ['Mensagem', 'poesia', 1934, 'Único livro em português que Pessoa publicou em vida: 44 poemas que releem a história portuguesa como mito.'],
    ['Livro do Desassossego', 'prosa', 1982, 'Diário fragmentário do semi-heterônimo Bernardo Soares, montado a partir de centenas de papéis avulsos guardados num baú.'],
    ['Poesias de Álvaro de Campos', 'poesia', 1944, 'O heterônimo do excesso e da fadiga moderna, autor de "Tabacaria" e da "Ode Triunfal".'],
    ['O Guardador de Rebanhos (Alberto Caeiro)', 'poesia', 1925, 'O heterônimo que recusa a metafísica e insiste em ver as coisas como elas são.'],
    ['Odes de Ricardo Reis', 'poesia', 1946, 'Horácio em português: o heterônimo estoico que aceita o limite e cultiva a serenidade.']
  ],
  'Machado de Assis': [
    ['Memórias Póstumas de Brás Cubas', 'romance', 1881, 'Narrado por um defunto que escreve depois de morto. Nada parecido existia em língua portuguesa até então.'],
    ['Dom Casmurro', 'romance', 1899, 'Capitu traiu ou não? A pergunta continua sem resposta porque o livro é sobre o ciúme de quem narra.'],
    ['Quincas Borba', 'romance', 1891, 'Humanitismo, loucura e herança numa das sátiras mais afiadas da literatura brasileira.'],
    ['Contos (A Cartomante, Missa do Galo, O Alienista)', 'conto', 1882, 'Machado é tão grande no conto quanto no romance; "O Alienista" antecipou debates inteiros sobre normalidade.']
  ],
  'Graciliano Ramos': [
    ['Vidas Secas', 'romance', 1938, 'Fabiano, Sinhá Vitória, dois meninos e a cachorra Baleia atravessando a seca. Prosa reduzida ao osso.'],
    ['São Bernardo', 'romance', 1934, 'Um fazendeiro narra como destruiu tudo o que amava — inclusive a própria capacidade de amar.'],
    ['Memórias do Cárcere', 'memoria', 1953, 'Relato dos dez meses de prisão sem acusação durante o Estado Novo. Publicado após sua morte.'],
    ['Angústia', 'romance', 1936, 'Romance escrito em estado de crise, sobre humilhação, ressentimento e crime.']
  ],
  'Clarice Lispector': [
    ['A Hora da Estrela', 'romance', 1977, 'Macabéa, datilógrafa nordestina no Rio, e um narrador que não sabe como contá-la. Último livro publicado em vida.'],
    ['A Paixão segundo G.H.', 'romance', 1964, 'Uma mulher, um quarto de empregada e uma barata: um dos romances mais radicais já escritos em português.'],
    ['Laços de Família', 'conto', 1960, 'Treze contos sobre epifanias domésticas, entre eles "Amor" e "Feliz Aniversário".'],
    ['Água Viva', 'prosa', 1973, 'Escrita sem enredo, feita de instantes — o livro que mais se aproxima de música na obra dela.']
  ],
  'Guimarães Rosa': [
    ['Grande Sertão: Veredas', 'romance', 1956, 'Monólogo de mais de seiscentas páginas sem capítulos, narrado por Riobaldo, sobre travessia, pacto e amor por Diadorim.'],
    ['Sagarana', 'conto', 1946, 'Estreia em livro: nove histórias que já traziam a linguagem inventada e a paisagem mineira.'],
    ['Primeiras Estórias', 'conto', 1962, 'Vinte e um contos curtos, entre eles "A Terceira Margem do Rio".']
  ],
  'Carlos Drummond de Andrade': [
    ['Alguma Poesia', 'poesia', 1930, 'Estreia com "No meio do caminho tinha uma pedra", verso que provocou escândalo e virou marco modernista.'],
    ['A Rosa do Povo', 'poesia', 1945, 'A poesia social de Drummond em plena guerra: "E agora, José?" e "Nosso tempo".'],
    ['Claro Enigma', 'poesia', 1951, 'Virada para a forma clássica e para a meditação sobre tempo, memória e perda.'],
    ['Sentimento do Mundo', 'poesia', 1940, 'O eu que descobre o coletivo; alguns dos poemas mais citados do autor.']
  ],
  'Cora Coralina': [
    ['Poemas dos Becos de Goiás e Estórias Mais', 'poesia', 1965, 'Primeiro livro, publicado aos 76 anos. A vida do interior, as mulheres pobres e a dignidade das coisas pequenas.'],
    ['Vintém de Cobre', 'poesia', 1983, 'Meias confissões em verso e prosa, escritas na velhice com humor e ferocidade.'],
    ['Estórias da Casa Velha da Ponte', 'conto', 1985, 'Memórias da infância goiana transformadas em narrativa.']
  ],
  'Cecília Meireles': [
    ['Romanceiro da Inconfidência', 'poesia', 1953, 'Oitenta e cinco romances em verso sobre a Inconfidência Mineira; um dos grandes projetos poéticos brasileiros.'],
    ['Viagem', 'poesia', 1939, 'Livro que consolidou sua voz: musicalidade, transitoriedade e uma melancolia sem autopiedade.'],
    ['Ou Isto ou Aquilo', 'poesia', 1964, 'Poesia infantil que nunca infantiliza — leitura obrigatória em escolas há décadas.']
  ],
  'Manuel Bandeira': [
    ['Libertinagem', 'poesia', 1930, '"Vou-me embora pra Pasárgada", "Evocação do Recife": o modernismo em tom de conversa.'],
    ['Estrela da Manhã', 'poesia', 1936, 'Livro de maturidade, entre o coloquial e o litúrgico.'],
    ['Itinerário de Pasárgada', 'memoria', 1954, 'Autobiografia literária que explica de onde veio cada poema.']
  ],
  'Mário Quintana': [
    ['A Rua dos Cataventos', 'poesia', 1940, 'Estreia em sonetos, com a leveza e a ironia que o tornariam popular.'],
    ['Caderno H', 'poesia', 1973, 'Fragmentos, aforismos e poemas curtos — o Quintana mais citado nas redes.'],
    ['Nova Antologia Poética', 'poesia', 1981, 'Reunião preparada pelo próprio autor; a melhor porta de entrada para sua obra.']
  ],
  'Vinicius de Moraes': [
    ['Antologia Poética', 'poesia', 1954, 'Reúne o "Soneto de Fidelidade" e boa parte da poesia amorosa que o tornou popular.'],
    ['Orfeu da Conceição', 'teatro', 1956, 'Peça que transpôs o mito de Orfeu para o morro carioca e originou o filme premiado em Cannes.'],
    ['Livro de Sonetos', 'poesia', 1957, 'A forma fixa usada com naturalidade de fala — talvez o seu conjunto mais coeso.']
  ],
  'Jorge Amado': [
    ['Capitães da Areia', 'romance', 1937, 'Meninos de rua em Salvador; livro queimado em praça pública em 1937 e traduzido em dezenas de línguas.'],
    ['Gabriela, Cravo e Canela', 'romance', 1958, 'Ilhéus, cacau e uma personagem que virou símbolo de liberdade afetiva.'],
    ['Dona Flor e Seus Dois Maridos', 'romance', 1966, 'Comédia sensual sobre desejo e respeitabilidade, adaptada para cinema e televisão.']
  ],
  'Lima Barreto': [
    ['Triste Fim de Policarpo Quaresma', 'romance', 1915, 'Sátira ao nacionalismo ingênuo e ao Brasil republicano, escrita por quem via a exclusão de dentro.'],
    ['Recordações do Escrivão Isaías Caminha', 'romance', 1909, 'Romance de estreia sobre racismo, imprensa e humilhação cotidiana no Rio.'],
    ['Diário do Hospício', 'memoria', 1953, 'Anotações feitas durante internações; publicado décadas após sua morte.']
  ],
  'Ariano Suassuna': [
    ['Auto da Compadecida', 'teatro', 1955, 'Comédia do sertão com julgamento no céu; virou minissérie e filme de enorme alcance popular.'],
    ['A Pedra do Reino', 'romance', 1971, 'Romance-folhetim que funde cordel, cavalaria e barroco nordestino.'],
    ['O Santo e a Porca', 'teatro', 1957, 'Releitura de Plauto no sertão, sobre avareza e devoção.']
  ],
  'Luís de Camões': [
    ['Os Lusíadas', 'poesia', 1572, 'A epopeia da expansão portuguesa em dez cantos; fundou a língua literária moderna em português.'],
    ['Sonetos', 'poesia', 1595, '"Amor é fogo que arde sem se ver" está aqui. Publicados só depois de sua morte na miséria.']
  ],
  'Florbela Espanca': [
    ['Livro de Mágoas', 'poesia', 1919, 'Estreia marcada por dor, solidão e uma franqueza rara para uma mulher publicando em 1919.'],
    ['Charneca em Flor', 'poesia', 1931, 'Publicado no ano de sua morte; o auge do seu soneto e do seu erotismo lírico.'],
    ['Livro de Sóror Saudade', 'poesia', 1923, 'A voz que faz da saudade um estado quase religioso.']
  ],
  'Emily Dickinson': [['Poemas completos', 'poesia', 1890, 'Quase mil e oitocentos poemas escritos em segredo e publicados após sua morte, com pontuação e travessões que a editoria demorou a respeitar.']],
  'Jane Austen': [
    ['Orgulho e Preconceito', 'romance', 1813, 'Elizabeth Bennet e Darcy: comédia social afiada sobre dinheiro, orgulho e mudança de opinião.'],
    ['Razão e Sensibilidade', 'romance', 1811, 'Duas irmãs, dois temperamentos e a economia real do casamento na Inglaterra da Regência.'],
    ['Emma', 'romance', 1815, 'Uma protagonista que Austen previu que ninguém além dela gostaria — e que virou modelo de comédia romântica.'],
    ['Persuasão', 'romance', 1817, 'Publicado após sua morte; o mais melancólico e o mais adulto de seus romances.']
  ],
  'Charles Dickens': [
    ['Grandes Esperanças', 'romance', 1861, 'Pip, uma benfeitora misteriosa e a descoberta de que ascender socialmente cobra caro.'],
    ['Oliver Twist', 'romance', 1838, 'Orfanatos, trabalho infantil e criminalidade em Londres; ajudou a mudar a lei dos pobres.'],
    ['Um Conto de Natal', 'romance', 1843, 'Scrooge e os três espíritos: a novela que praticamente reinventou o Natal moderno.'],
    ['David Copperfield', 'romance', 1850, 'O mais autobiográfico de seus romances e o preferido do próprio autor.']
  ],
  'Victor Hugo': [
    ['Os Miseráveis', 'romance', 1862, 'Jean Valjean, Javert e a França do século XIX: quase mil e quinhentas páginas sobre justiça e misericórdia.'],
    ['O Corcunda de Notre-Dame', 'romance', 1831, 'Escrito em parte para salvar a catedral do abandono — e conseguiu.'],
    ['Contemplações', 'poesia', 1856, 'Poesia do luto pela filha morta afogada; um dos grandes livros de dor do romantismo.']
  ],
  'Liev Tolstói': [
    ['Guerra e Paz', 'romance', 1869, 'Cinco famílias, a invasão napoleônica e uma teoria da história embutida no romance.'],
    ['Anna Kariênina', 'romance', 1877, 'Começa com uma das frases de abertura mais citadas da literatura e não alivia até o fim.'],
    ['A Morte de Ivan Ilitch', 'romance', 1886, 'Novela curta sobre um homem comum diante da própria morte; leitura frequente em cursos de medicina.'],
    ['Confissão', 'memoria', 1882, 'Relato da crise espiritual que o levou a abandonar a vida que tinha construído.']
  ],
  'Fiódor Dostoiévski': [
    ['Crime e Castigo', 'romance', 1866, 'Raskólnikov mata e depois precisa conviver consigo mesmo. O romance psicológico moderno começa aqui.'],
    ['Os Irmãos Karamázov', 'romance', 1880, 'Fé, dúvida e parricídio; contém "O Grande Inquisidor", um dos capítulos mais discutidos da literatura.'],
    ['O Idiota', 'romance', 1869, 'O que acontece com um homem verdadeiramente bom numa sociedade que não sabe o que fazer com ele.'],
    ['Memórias do Subsolo', 'romance', 1864, 'Monólogo de um homem ressentido que antecipou boa parte do existencialismo.']
  ],
  'Oscar Wilde': [
    ['O Retrato de Dorian Gray', 'romance', 1890, 'Beleza, corrupção e um retrato que envelhece no lugar do dono.'],
    ['A Importância de Ser Prudente', 'teatro', 1895, 'A comédia de costumes mais perfeita em língua inglesa, estreada semanas antes de sua prisão.'],
    ['De Profundis', 'carta', 1905, 'Longa carta escrita na prisão, entre acerto de contas e reconstrução interior.'],
    ['A Balada do Cárcere de Reading', 'poesia', 1898, 'Último texto publicado em vida, sobre uma execução que ele testemunhou de longe.']
  ],
  'Virginia Woolf': [
    ['Mrs. Dalloway', 'romance', 1925, 'Um dia em Londres, contado por dentro de várias consciências ao mesmo tempo.'],
    ['Um Teto Todo Seu', 'ensaio', 1929, 'Dinheiro e espaço próprio como condições materiais para escrever — o ensaio feminista mais citado do século.'],
    ['Rumo ao Farol', 'romance', 1927, 'Tempo, luto e vida familiar numa das construções mais delicadas do modernismo.'],
    ['Orlando', 'romance', 1928, 'Biografia fantástica de alguém que atravessa séculos e muda de gênero; escrita como carta de amor a Vita Sackville-West.']
  ],
  'Mark Twain': [
    ['As Aventuras de Huckleberry Finn', 'romance', 1884, 'Um menino pobre ajuda um homem escravizado a fugir e conclui que prefere ir para o inferno a entregá-lo.'],
    ['As Aventuras de Tom Sawyer', 'romance', 1876, 'A infância às margens do Mississippi que fixou uma imagem inteira dos Estados Unidos.'],
    ['Um Ianque na Corte do Rei Artur', 'romance', 1889, 'Sátira sobre tecnologia, poder e progresso disfarçada de comédia de viagem no tempo.']
  ],
  'Antoine de Saint-Exupéry': [
    ['O Pequeno Príncipe', 'romance', 1943, 'Um dos livros mais traduzidos do mundo. Escrito por um piloto que sabia o que era cair no deserto.'],
    ['Terra dos Homens', 'memoria', 1939, 'Relatos de voo e de resgate que explicam de onde saiu a fábula do príncipe.'],
    ['Voo Noturno', 'romance', 1931, 'Romance curto sobre dever e solidão nas primeiras linhas aéreas postais.']
  ],
  'Kahlil Gibran': [
    ['O Profeta', 'poesia', 1923, 'Vinte e seis ensaios poéticos sobre casamento, filhos, trabalho e dor. Nunca saiu de catálogo em cem anos.'],
    ['Areia e Espuma', 'aforismo', 1926, 'Aforismos curtos na mesma chave do Profeta, escritos originalmente em inglês.'],
    ['O Louco', 'poesia', 1918, 'Primeiro livro em inglês; parábolas curtas e amargas sobre máscaras sociais.']
  ],
  Rumi: [
    ['Masnavi', 'poesia', 'séc. XIII', 'Vinte e cinco mil versos de histórias e ensinamentos místicos, chamados de "o Alcorão em persa".'],
    ['Divã de Shams de Tabriz', 'poesia', 'séc. XIII', 'Poesia de arrebatamento escrita após o encontro com o mestre que mudou sua vida.']
  ],
  'Rainer Maria Rilke': [
    ['Cartas a um Jovem Poeta', 'carta', 1929, 'Dez cartas a um estudante desconhecido que se tornaram o conselho mais reproduzido sobre vocação e solidão.'],
    ['Elegias de Duíno', 'poesia', 1923, 'Dez elegias escritas ao longo de dez anos sobre anjos, morte e a insuficiência do humano.'],
    ['Sonetos a Orfeu', 'poesia', 1922, 'Cinquenta e cinco sonetos escritos em poucas semanas, num surto de escrita quase sem paralelo.']
  ],
  'Johann Wolfgang von Goethe': [
    ['Fausto', 'teatro', 1808, 'O pacto com Mefistófeles em duas partes; obra de uma vida inteira.'],
    ['Os Sofrimentos do Jovem Werther', 'romance', 1774, 'Romance epistolar que tornou Goethe célebre aos 25 anos e provocou uma onda de imitação em toda a Europa.'],
    ['Máximas e Reflexões', 'aforismo', 1833, 'Aforismos sobre arte, natureza e conduta, reunidos após sua morte.']
  ],
  'Miguel de Cervantes': [
    ['Dom Quixote', 'romance', 1605, 'O primeiro romance moderno: um leitor enlouquecido pelos livros e o mundo que insiste em não ser cavalheiresco.'],
    ['Novelas Exemplares', 'conto', 1613, 'Doze narrativas curtas que provam que Cervantes seria grande mesmo sem o Quixote.']
  ],
  'George Orwell': [
    ['1984', 'romance', 1949, 'Vigilância, reescrita do passado e neolíngua. Deu vocabulário permanente à crítica do autoritarismo.'],
    ['A Revolução dos Bichos', 'romance', 1945, 'Fábula curta sobre como uma revolução se transforma naquilo que combatia.'],
    ['Homenagem à Catalunha', 'memoria', 1938, 'Relato em primeira pessoa da Guerra Civil Espanhola, incluindo a perseguição interna à esquerda.'],
    ['A Política e a Língua Inglesa', 'ensaio', 1946, 'Ensaio curto sobre como a linguagem vaga encobre a política ruim; leitura obrigatória em jornalismo.']
  ],
  'C. S. Lewis': [
    ['As Crônicas de Nárnia', 'romance', 1950, 'Sete livros infantis que continuam vendendo milhões por ano em todo o mundo.'],
    ['Cristianismo Puro e Simples', 'ensaio', 1952, 'Palestras de rádio da guerra transformadas em livro; a apologética mais lida do século XX.'],
    ['A Anatomia de uma Dor', 'memoria', 1961, 'Diário do luto pela mulher, publicado inicialmente sob pseudônimo.']
  ],
  'J. R. R. Tolkien': [
    ['O Senhor dos Anéis', 'romance', 1954, 'Doze anos de escrita e uma língua inventada antes da história; refundou a fantasia moderna.'],
    ['O Hobbit', 'romance', 1937, 'Começou como história contada aos filhos e virou a porta de entrada da Terra-média.'],
    ['O Silmarillion', 'romance', 1977, 'Mitologia completa publicada por seu filho após sua morte.']
  ],
  'J.K. Rowling': [
    ['Harry Potter e a Pedra Filosofal', 'romance', 1997, 'Recusado por doze editoras. Abriu a série mais vendida da história da literatura infantojuvenil.'],
    ['Harry Potter e o Prisioneiro de Azkaban', 'romance', 1999, 'Terceiro volume, apontado com frequência como o ponto em que a série amadurece.'],
    ['Morte Súbita', 'romance', 2012, 'Primeiro romance adulto, sobre política local e desigualdade numa cidade pequena inglesa.']
  ],
  'Maya Angelou': [
    ['Eu Sei Por Que o Pássaro Canta na Gaiola', 'memoria', 1969, 'Primeiro dos sete volumes autobiográficos; sobre infância, racismo, violência e o retorno da voz.'],
    ['E Ainda Assim Eu Me Levanto', 'poesia', 1978, 'O poema-título é um dos mais recitados em língua inglesa.'],
    ['Carta à Minha Filha', 'ensaio', 2008, 'Ensaios curtos endereçados às mulheres que ela nunca teve como filhas.']
  ],
  'Anne Frank': [['O Diário de Anne Frank', 'diario', 1947, 'Escrito no anexo secreto entre 1942 e 1944 e publicado pelo pai, único sobrevivente da família.']],
  'Helen Keller': [
    ['A História da Minha Vida', 'memoria', 1903, 'Autobiografia escrita aos 22 anos, ainda na faculdade; explica como linguagem e mundo chegaram a ela pela mão.'],
    ['A Porta Aberta', 'ensaio', 1957, 'Textos curtos sobre coragem, alegria e limitação, reunidos no fim da vida.']
  ],
  'Chimamanda Ngozi Adichie': [
    ['Americanah', 'romance', 2013, 'Migração, cabelo, raça e volta para casa; talvez o romance mais discutido da década sobre identidade.'],
    ['Meio Sol Amarelo', 'romance', 2006, 'A guerra de Biafra vista por três personagens; venceu o Orange Prize.'],
    ['Sejamos Todos Feministas', 'ensaio', 2014, 'Palestra transformada em livro curto e distribuída a todos os estudantes de 16 anos da Suécia.']
  ],
  'bell hooks': [
    ['Tudo sobre o Amor', 'ensaio', 2000, 'Amor como prática e ética, não como sentimento — o livro que a tornou popular fora da academia.'],
    ['Ensinando a Transgredir', 'ensaio', 1994, 'Educação como prática da liberdade, dialogando com Paulo Freire.'],
    ['Não Sou Eu Uma Mulher?', 'ensaio', 1981, 'Estudo pioneiro sobre a interseção entre racismo e sexismo na história dos Estados Unidos.']
  ],
  'Audre Lorde': [
    ['Irmã Outsider', 'ensaio', 1984, 'Ensaios e discursos que fundaram boa parte do vocabulário sobre diferença, raiva e silêncio.'],
    ['Diários do Câncer', 'memoria', 1980, 'Relato do adoecimento e da mastectomia, recusando o tom de superação obrigatória.']
  ],
  'Mary Wollstonecraft': [['Reivindicação dos Direitos da Mulher', 'ensaio', 1792, 'Argumento pela educação igual das mulheres publicado em plena Revolução Francesa.']],
  'Betty Friedan': [['A Mística Feminina', 'ensaio', 1963, 'Nomeou "o problema sem nome" das donas de casa americanas e ajudou a iniciar a segunda onda feminista.']],
  'Angela Davis': [
    ['Mulheres, Raça e Classe', 'ensaio', 1981, 'Releitura do feminismo americano a partir da escravidão e do trabalho; base do pensamento interseccional.'],
    ['Estarão as Prisões Obsoletas?', 'ensaio', 2003, 'Argumento abolicionista sobre o encarceramento em massa nos Estados Unidos.']
  ],
  'Nísia Floresta': [['Direitos das Mulheres e Injustiça dos Homens', 'ensaio', 1832, 'Primeiro texto feminista publicado no Brasil, inspirado em Wollstonecraft.']],
  'Simón Bolívar': [
    ['Carta da Jamaica', 'carta', 1815, 'Diagnóstico e projeto para a América hispânica escrito no exílio, depois de uma derrota.'],
    ['Discurso de Angostura', 'discurso', 1819, 'Proposta de constituição e de república que moldou boa parte do pensamento político latino-americano.']
  ],
  'José Martí': [
    ['Nossa América', 'ensaio', 1891, 'Ensaio fundador do pensamento latino-americano sobre identidade e autonomia.'],
    ['Versos Sencillos', 'poesia', 1891, 'De onde saiu a letra de "Guantanamera".']
  ]
};

/* ---------------- CIÊNCIA ---------------- */
Object.assign(OBRAS_CURADAS, {
  'Albert Einstein': [
    ['Sobre a Eletrodinâmica dos Corpos em Movimento', 'artigo', 1905, 'O artigo da relatividade restrita, publicado quando ele era funcionário do escritório de patentes de Berna.'],
    ['A Teoria da Relatividade Especial e Geral', 'ciencia', 1916, 'Explicação escrita pelo próprio Einstein para leigos, ainda hoje reeditada.'],
    ['Como Vejo o Mundo', 'ensaio', 1934, 'Textos sobre ciência, pacifismo, religião e liberdade reunidos fora da física.'],
    ['Por Que a Guerra? (com Freud)', 'carta', 1933, 'Troca de cartas encomendada pela Liga das Nações sobre a possibilidade de conter a violência humana.']
  ],
  'Isaac Newton': [
    ['Princípios Matemáticos da Filosofia Natural', 'ciencia', 1687, 'As leis do movimento e a gravitação universal. Provavelmente o livro científico mais influente já escrito.'],
    ['Óptica', 'ciencia', 1704, 'Experimentos com prismas e a natureza da luz, escritos em inglês e em linguagem acessível.']
  ],
  'Charles Darwin': [
    ['A Origem das Espécies', 'ciencia', 1859, 'Seleção natural apresentada com um cuidado obsessivo de evidências, depois de vinte anos adiando a publicação.'],
    ['A Descendência do Homem', 'ciencia', 1871, 'Aplica a evolução à espécie humana e introduz a seleção sexual.'],
    ['A Viagem do Beagle', 'memoria', 1839, 'Diário de cinco anos de viagem que reuniu as observações que ele levaria décadas para interpretar.']
  ],
  'Galileu Galilei': [
    ['Diálogo sobre os Dois Máximos Sistemas do Mundo', 'ciencia', 1632, 'A defesa do heliocentrismo em forma de conversa que o levou ao julgamento pela Inquisição.'],
    ['O Mensageiro das Estrelas', 'ciencia', 1610, 'Primeiras observações telescópicas: crateras na Lua e luas em Júpiter.']
  ],
  'Marie Curie': [
    ['Tratado de Radioatividade', 'ciencia', 1910, 'Síntese do campo que ela ajudou a criar — e cujo nome ela mesma cunhou.'],
    ['Pierre Curie', 'biografia', 1923, 'Biografia do marido escrita anos após a morte dele, com um relato contido da própria trajetória.']
  ],
  'Stephen Hawking': [
    ['Uma Breve História do Tempo', 'ciencia', 1988, 'Mais de dez milhões de exemplares vendidos; levou buracos negros e Big Bang para a mesa da sala.'],
    ['O Universo numa Casca de Noz', 'ciencia', 2001, 'Continuação ilustrada, com física mais recente e explicações mais visuais.'],
    ['Breves Respostas para Grandes Questões', 'ciencia', 2018, 'Publicado após sua morte, reúne suas posições sobre Deus, inteligência artificial e o futuro da humanidade.']
  ],
  'Carl Sagan': [
    ['Cosmos', 'ciencia', 1980, 'Livro e série que tornaram a ciência popular sem simplificá-la; ainda é o modelo do gênero.'],
    ['O Mundo Assombrado pelos Demônios', 'ciencia', 1995, 'Manual de pensamento crítico contra pseudociência, com o "kit de detecção de mentiras".'],
    ['Pálido Ponto Azul', 'ciencia', 1994, 'Escrito a partir da fotografia da Terra tirada pela Voyager a seis bilhões de quilômetros.'],
    ['Contato', 'romance', 1985, 'Único romance de Sagan, sobre um primeiro contato conduzido com rigor científico.']
  ],
  'Nikola Tesla': [
    ['Minhas Invenções', 'memoria', 1919, 'Autobiografia publicada em revista, entre relato técnico e visão de futuro.'],
    ['Sistema de corrente alternada (patentes)', 'invento', 1888, 'O conjunto de patentes de motor e transmissão em corrente alternada que definiu a rede elétrica moderna.']
  ],
  'Thomas Edison': [
    ['Lâmpada incandescente comercial', 'invento', 1879, 'Não foi o primeiro a criar uma lâmpada, mas o primeiro a torná-la duradoura e vendável.'],
    ['Fonógrafo', 'invento', 1877, 'A primeira máquina capaz de gravar e reproduzir som — a invenção que ele mais estimava.']
  ],
  'Ada Lovelace': [['Notas sobre a Máquina Analítica', 'artigo', 1843, 'As notas da tradutora ficaram três vezes maiores que o texto original e contêm o primeiro algoritmo escrito para uma máquina.']],
  'Alan Turing': [
    ['Sobre Números Computáveis', 'artigo', 1936, 'Define a máquina de Turing e os limites do que pode ser calculado. Fundou a ciência da computação.'],
    ['Máquinas de Computação e Inteligência', 'artigo', 1950, 'O artigo do "jogo da imitação", hoje conhecido como teste de Turing.']
  ],
  'Santos Dumont': [
    ['14-Bis', 'invento', 1906, 'Primeiro voo público homologado de um aparelho mais pesado que o ar, em Paris.'],
    ['Demoiselle', 'invento', 1909, 'Avião leve cujos planos ele publicou em revista, de graça, para qualquer um construir.'],
    ['O Que Eu Vi, o Que Nós Veremos', 'memoria', 1918, 'Memórias e previsões, já marcadas pela decepção com o uso militar da aviação.']
  ],
  'Oswaldo Cruz': [['Campanha sanitária no Rio de Janeiro', 'feito', 1903, 'Erradicou febre amarela e peste bubônica da capital; a vacinação obrigatória provocou a Revolta da Vacina.']],
  'Rosalind Franklin': [['Fotografia 51', 'ciencia', 1952, 'A imagem de difração de raios X que tornou possível deduzir a estrutura em dupla hélice do DNA.']],
  'Barbara McClintock': [['Trabalhos sobre elementos genéticos móveis', 'ciencia', 1950, 'Descobriu os transposons décadas antes de a genética ter como aceitá-los; recebeu o Nobel sozinha em 1983.']],
  'Jane Goodall': [
    ['Uma Janela para a Vida', 'ciencia', 1990, 'Trinta anos observando chimpanzés em Gombe e a descoberta de que eles fabricam ferramentas.'],
    ['Razão para Esperança', 'memoria', 1999, 'Autobiografia espiritual e ambiental escrita já como ativista em tempo integral.']
  ],
  'Katherine Johnson': [['Cálculos de trajetória orbital da NASA', 'ciencia', 1962, 'John Glenn só aceitou voar depois que ela conferiu à mão os números do computador eletrônico.']],
  'Grace Hopper': [
    ['Compilador A-0', 'invento', 1952, 'Primeiro compilador da história, criado quando quase ninguém acreditava que máquinas entenderiam palavras.'],
    ['COBOL', 'invento', 1959, 'Linguagem que ela ajudou a definir e que ainda roda boa parte dos sistemas bancários do mundo.']
  ],
  'Lise Meitner': [['Interpretação da fissão nuclear', 'artigo', 1939, 'Explicou fisicamente a fissão do urânio; o Nobel foi para Otto Hahn, e não para ela.']],
  'Chien-Shiung Wu': [['Experimento de Wu', 'ciencia', 1956, 'Derrubou a conservação da paridade na física de partículas; o Nobel foi para os teóricos.']],
  'Leonardo da Vinci': [
    ['Mona Lisa', 'pintura', 1503, 'Provavelmente a pintura mais visitada do mundo; ele a carregou consigo por anos, retocando.'],
    ['A Última Ceia', 'pintura', 1498, 'Mural em Milão que reorganizou a composição da pintura ocidental — e começou a se deteriorar ainda em vida.'],
    ['Cadernos (Códices)', 'diario', 1519, 'Mais de sete mil páginas em escrita espelhada sobre anatomia, água, voo e máquinas.'],
    ['Homem Vitruviano', 'desenho', 1490, 'Desenho sobre proporção humana que virou símbolo do Renascimento.']
  ],
  Michelangelo: [
    ['Teto da Capela Sistina', 'pintura', 1512, 'Quatro anos deitado num andaime para pintar mais de trezentas figuras.'],
    ['Davi', 'escultura', 1504, 'Cinco metros de mármore que a cidade de Florença adotou como símbolo de si mesma.'],
    ['Pietà', 'escultura', 1499, 'Esculpida aos 24 anos; a única obra que ele assinou.']
  ],
  'Vincent van Gogh': [
    ['A Noite Estrelada', 'pintura', 1889, 'Pintada de memória no hospital psiquiátrico de Saint-Rémy.'],
    ['Os Girassóis', 'pintura', 1888, 'Série feita para decorar o quarto de Gauguin na Casa Amarela em Arles.'],
    ['Cartas a Theo', 'carta', 1914, 'Mais de seiscentas cartas ao irmão; um dos melhores registros já escritos sobre o processo de criar.']
  ],
  'Pablo Picasso': [
    ['Guernica', 'pintura', 1937, 'Resposta ao bombardeio da cidade basca; recusou-se a deixá-la voltar à Espanha enquanto Franco vivesse.'],
    ['As Senhoritas de Avignon', 'pintura', 1907, 'O quadro que rompeu com a perspectiva e abriu caminho para o cubismo.']
  ],
  'Frida Kahlo': [
    ['As Duas Fridas', 'pintura', 1939, 'Autorretrato duplo pintado durante o divórcio de Diego Rivera.'],
    ['A Coluna Partida', 'pintura', 1944, 'Corpo aberto, coluna em ruína e pregos: a dor física transformada em imagem direta.'],
    ['Diário de Frida Kahlo', 'diario', 1995, 'Os últimos dez anos em desenhos e texto, publicados em fac-símile.']
  ],
  'Tarsila do Amaral': [
    ['Abaporu', 'pintura', 1928, 'Quadro que deu origem ao Manifesto Antropofágico e hoje é a tela brasileira mais valiosa.'],
    ['Operários', 'pintura', 1933, 'Cento e cinquenta rostos empilhados; virada social na obra da artista.'],
    ['A Negra', 'pintura', 1923, 'Pintada em Paris; um dos pontos de partida da linguagem modernista brasileira.']
  ],
  'Candido Portinari': [
    ['Guerra e Paz', 'pintura', 1956, 'Dois painéis de dez metros doados à sede da ONU em Nova York.'],
    ['Os Retirantes', 'pintura', 1944, 'A série sobre a seca nordestina que fixou uma imagem do Brasil na pintura.']
  ],
  'Salvador Dalí': [['A Persistência da Memória', 'pintura', 1931, 'Os relógios moles: a imagem surrealista mais reproduzida do século.']],
  'Ludwig van Beethoven': [
    ['Sinfonia nº 9', 'musica', 1824, 'O "Ode à Alegria" no último movimento; hoje é o hino oficial da União Europeia. Ele já estava surdo.'],
    ['Sinfonia nº 5', 'musica', 1808, 'Quatro notas de abertura que talvez sejam as mais reconhecíveis da música ocidental.'],
    ['Sonata ao Luar', 'musica', 1801, 'Sonata nº 14; o apelido veio de um crítico, anos depois da morte do compositor.'],
    ['Testamento de Heiligenstadt', 'carta', 1802, 'Carta aos irmãos, nunca enviada, em que revela a surdez e decide não se matar.']
  ],
  'Wolfgang Amadeus Mozart': [
    ['Réquiem', 'musica', 1791, 'Deixado inacabado na morte e concluído por um aluno; a obra mais mitificada do compositor.'],
    ['As Bodas de Fígaro', 'musica', 1786, 'Ópera baseada numa peça proibida, com criados mais espertos que os nobres.'],
    ['Sinfonia nº 40', 'musica', 1788, 'Escrita num verão de dificuldades financeiras, junto com outras duas sinfonias.']
  ],
  'Maria Callas': [
    ['Norma (Bellini)', 'musica', 1954, 'O papel mais associado a ela; gravações que continuam sendo referência para qualquer soprano.'],
    ['Tosca (Puccini)', 'musica', 1953, 'A gravação com De Sabata é considerada uma das melhores da história da ópera.']
  ],
  'Charles Chaplin': [
    ['Tempos Modernos', 'filme', 1936, 'A linha de montagem como comédia e denúncia; quase mudo em plena era do som.'],
    ['O Grande Ditador', 'filme', 1940, 'Primeiro filme falado de Chaplin e um discurso final que continua sendo citado.'],
    ['Luzes da Cidade', 'filme', 1931, 'A cena final é frequentemente apontada como a melhor da história do cinema.']
  ],
  'Walt Disney': [
    ['Branca de Neve e os Sete Anões', 'filme', 1937, 'Primeiro longa de animação em cores da história; chamavam o projeto de "a loucura de Disney".'],
    ['Disneylândia', 'feito', 1955, 'Parque que criou um formato inteiro de entretenimento e turismo.']
  ],

  /* ---------------- NEGÓCIOS, GESTÃO E INVESTIMENTOS ---------------- */
  'Peter Drucker': [
    ['O Gestor Eficaz', 'manual', 1967, 'Cinco hábitos que se aprendem: onde está seu tempo, o que contribuir, forças, prioridades e decisões.'],
    ['A Prática da Administração', 'manual', 1954, 'O livro que inventou a administração como disciplina e introduziu a gestão por objetivos.'],
    ['Administrando em Tempos de Grande Mudança', 'manual', 1995, 'Sobre o trabalhador do conhecimento e o fim do emprego para a vida inteira.'],
    ['Sociedade Pós-Capitalista', 'ensaio', 1993, 'Previsão de uma economia em que o recurso decisivo é conhecimento, não capital.']
  ],
  'Warren Buffett': [
    ['Cartas aos Acionistas da Berkshire Hathaway', 'carta', 1965, 'Cinquenta e nove anos de cartas anuais; um curso de investimento e de honestidade corporativa escrito em linguagem simples.'],
    ['Os Ensaios de Warren Buffett', 'ensaio', 1997, 'Organização temática das cartas feita por Lawrence Cunningham, com aprovação do autor.']
  ],
  'Benjamin Graham': [
    ['O Investidor Inteligente', 'manual', 1949, 'Buffett chamou de "de longe o melhor livro sobre investimento já escrito". Margem de segurança e Sr. Mercado nascem aqui.'],
    ['Security Analysis', 'manual', 1934, 'Escrito logo após a quebra de 1929; fundou a análise fundamentalista.']
  ],
  'Charlie Munger': [['Almanaque do Charlie Munger', 'ensaio', 2005, 'Discursos e cartas sobre modelos mentais, incentivos e a psicologia do erro humano.']],
  'John Bogle': [
    ['O Pequeno Livro do Investimento de Bom Senso', 'manual', 2007, 'A defesa do fundo de índice de baixo custo, escrita por quem criou o primeiro deles.'],
    ['Bogle on Mutual Funds', 'manual', 1993, 'Explica em detalhe por que taxas corroem retorno mais do que quase qualquer outro fator.']
  ],
  'Peter Lynch': [
    ['O Jeito Peter Lynch de Investir', 'manual', 1989, 'Investir no que você entende, escrito por quem multiplicou o Magellan por vinte e nove vezes.'],
    ['Batendo a Wall Street', 'manual', 1993, 'Estudos de caso reais das escolhas que deram certo e das que não deram.']
  ],
  'Philip Fisher': [['Ações Comuns, Lucros Extraordinários', 'manual', 1958, 'Os quinze pontos para avaliar uma empresa pela qualidade, não só pelo preço.']],
  'Ray Dalio': [
    ['Princípios', 'manual', 2017, 'Regras de vida e de trabalho de quem construiu o maior fundo hedge do mundo apostando em transparência radical.'],
    ['Big Debt Crises', 'ensaio', 2018, 'Modelo histórico de crises de dívida, distribuído gratuitamente em PDF.']
  ],
  'Howard Marks': [
    ['O Mais Importante para o Investidor', 'manual', 2011, 'Pensamento de segundo nível, ciclos e risco; nasceu dos memorandos que ele escreve há décadas.'],
    ['Dominando o Ciclo de Mercado', 'manual', 2018, 'Como reconhecer em que ponto do ciclo estamos, sem tentar prever a data.']
  ],
  'Morgan Housel': [
    ['A Psicologia Financeira', 'ensaio', 2020, 'Dezenove histórias curtas mostrando que comportamento pesa mais que planilha nas finanças pessoais.'],
    ['O Mesmo de Sempre', 'ensaio', 2023, 'Sobre o que não muda no comportamento humano, mesmo quando tudo mais muda.']
  ],
  'George S. Clason': [['O Homem Mais Rico da Babilônia', 'manual', 1926, 'Parábolas babilônicas sobre poupar um décimo do que se ganha; um dos livros de finanças pessoais mais vendidos de sempre.']],
  'Nassim Nicholas Taleb': [
    ['A Lógica do Cisne Negro', 'ensaio', 2007, 'Eventos raros e imprevisíveis que explicam quase tudo o que importa — e que nossos modelos ignoram.'],
    ['Antifrágil', 'ensaio', 2012, 'O que ganha com a desordem, em vez de apenas resistir a ela.'],
    ['Iludido pelo Acaso', 'ensaio', 2001, 'Como confundimos sorte com habilidade nos mercados e na vida.']
  ],
  'Daniel Kahneman': [
    ['Rápido e Devagar', 'ensaio', 2011, 'Sistema 1 e Sistema 2, e décadas de experimentos sobre como decidimos mal com confiança.'],
    ['Ruído (com Sibony e Sunstein)', 'ensaio', 2021, 'Sobre a variabilidade indesejada em julgamentos profissionais — juízes, médicos, seguradoras.']
  ],
  'Philip Kotler': [
    ['Administração de Marketing', 'manual', 1967, 'O livro-texto que formou gerações inteiras de profissionais em todo o mundo.'],
    ['Marketing 4.0', 'manual', 2016, 'Do tradicional ao digital, com foco em jornada do cliente e advocacia de marca.']
  ],
  'Michael Porter': [
    ['Estratégia Competitiva', 'manual', 1980, 'As cinco forças e as estratégias genéricas; base do planejamento estratégico moderno.'],
    ['Vantagem Competitiva', 'manual', 1985, 'Cadeia de valor como ferramenta para descobrir onde uma empresa realmente ganha dinheiro.']
  ],
  'Clayton Christensen': [
    ['O Dilema da Inovação', 'ensaio', 1997, 'Por que empresas bem geridas quebram justamente por ouvirem seus melhores clientes.'],
    ['Como Você Vai Medir Sua Vida?', 'ensaio', 2012, 'Aplica teoria de gestão a decisões pessoais, escrito após um diagnóstico de câncer.']
  ],
  'W. Edwards Deming': [
    ['Saia da Crise', 'manual', 1986, 'Os catorze pontos da qualidade que reconstruíram a indústria japonesa no pós-guerra.'],
    ['A Nova Economia', 'manual', 1993, 'O "saber profundo": sistema, variação, conhecimento e psicologia.']
  ],
  'Jim Collins': [
    ['Empresas Feitas para Vencer', 'manual', 2001, 'Cinco anos de pesquisa para explicar por que algumas empresas boas viram excelentes e outras não.'],
    ['Feitas para Durar', 'manual', 1994, 'Estudo de empresas visionárias e do papel da ideologia central.']
  ],
  'John Kotter': [
    ['Liderando Mudanças', 'manual', 1996, 'Os oito passos de uma transformação organizacional e os erros que a fazem fracassar.'],
    ['Nosso Iceberg Está Derretendo', 'manual', 2006, 'A mesma teoria contada como fábula de pinguins, para uso em treinamentos.']
  ],
  'Stephen R. Covey': [
    ['Os 7 Hábitos das Pessoas Altamente Eficazes', 'manual', 1989, 'Mais de quarenta milhões de exemplares; proatividade, começar com o fim em mente e primeiro o mais importante.'],
    ['O 8º Hábito', 'manual', 2004, 'Da eficácia para a grandeza: encontrar a própria voz e ajudar outros a encontrarem a deles.']
  ],
  'Simon Sinek': [
    ['Comece pelo Porquê', 'manual', 2009, 'O círculo dourado: pessoas não compram o que você faz, compram por que você faz.'],
    ['Líderes se Servem por Último', 'manual', 2014, 'Liderança como responsabilidade de criar segurança, com exemplos militares e corporativos.']
  ],
  'Robert Cialdini': [
    ['As Armas da Persuasão', 'ensaio', 1984, 'Os seis princípios de influência descritos por quem passou três anos infiltrado em equipes de venda.'],
    ['Pré-Suasão', 'ensaio', 2016, 'O que acontece antes da mensagem e por que isso decide o resultado dela.']
  ],
  'Dale Carnegie': [
    ['Como Fazer Amigos e Influenciar Pessoas', 'manual', 1936, 'Um dos livros mais vendidos da história; nasceu de anotações para suas próprias aulas noturnas.'],
    ['Como Evitar Preocupações e Começar a Viver', 'manual', 1948, 'Método prático contra a ansiedade, montado a partir de centenas de entrevistas.']
  ],
  'Napoleon Hill': [['Quem Pensa Enriquece', 'manual', 1937, 'Escrito na Depressão a partir de entrevistas com industriais; fundou o gênero de autoajuda financeira.']],
  'Seth Godin': [
    ['Marketing de Permissão', 'manual', 1999, 'Antecipou o marketing baseado em consentimento em vez de interrupção.'],
    ['A Vaca Roxa', 'manual', 2003, 'Ser notável ou ser invisível: não há terceira opção num mercado saturado.'],
    ['Isso é Marketing', 'manual', 2018, 'Marketing como serviço a um público específico, não como truque de atenção.']
  ],
  'Robert Greene': [
    ['As 48 Leis do Poder', 'manual', 1998, 'Estratégias de poder extraídas da história, apresentadas sem moralismo — e muito discutidas por isso.'],
    ['Maestria', 'manual', 2012, 'Estudo do caminho de aprendizes a mestres, de Da Vinci a cientistas contemporâneos.']
  ],
  'Eric Ries': [['A Startup Enxuta', 'manual', 2011, 'Construir–medir–aprender e produto mínimo viável; virou vocabulário padrão do empreendedorismo.']],
  'Peter Thiel': [['De Zero a Um', 'manual', 2014, 'Notas de um curso em Stanford sobre criar algo novo em vez de copiar o que existe.']],
  'Marshall McLuhan': [['Os Meios de Comunicação como Extensões do Homem', 'ensaio', 1964, '"O meio é a mensagem" e a aldeia global, escritos antes da internet existir.']],
  'Edward Bernays': [['Propaganda', 'ensaio', 1928, 'O sobrinho de Freud explicando, sem constrangimento, como se fabrica consentimento.']],
  'Chris Voss': [['Negocie Como se Sua Vida Dependesse Disso', 'manual', 2016, 'Técnicas de negociação de reféns do FBI aplicadas a salário, contrato e conflito comum.']],
  'Roger Fisher e William Ury': [['Como Chegar ao Sim', 'manual', 1981, 'Negociação baseada em princípios e interesses, não em posições. Base do método de Harvard.']],
  'Jack Welch': [['Paixão por Vencer', 'manual', 2005, 'Gestão de pessoas, avaliação e franqueza organizacional, escritos após vinte anos à frente da GE.']],
  'Andrew Carnegie': [
    ['O Evangelho da Riqueza', 'ensaio', 1889, 'Argumento de que o rico é apenas administrador temporário da fortuna e deve devolvê-la em vida.'],
    ['Autobiografia de Andrew Carnegie', 'memoria', 1920, 'Da fábrica têxtil escocesa às maiores siderúrgicas do mundo, contado por ele mesmo.']
  ],
  'Henry Ford': [['Minha Vida e Minha Obra', 'memoria', 1922, 'A linha de montagem, o dia de cinco dólares e a visão de produção em massa, narrados em primeira pessoa.']],
  'John D. Rockefeller': [['Random Reminiscences of Men and Events', 'memoria', 1909, 'Memórias curtas do homem mais rico da história moderna, escritas para se defender das críticas.']],
  'Sam Walton': [['Sam Walton: Made in America', 'memoria', 1992, 'Autobiografia terminada semanas antes de sua morte; o varejo de custo baixo explicado por dentro.']],
  'Howard Schultz': [['Dedique-se de Coração', 'memoria', 1997, 'A construção da Starbucks e a decisão de dar plano de saúde a funcionários de meio período.']],
  'Richard Branson': [['Perdendo a Virgindade', 'memoria', 1998, 'Do disco por correspondência à companhia aérea, contado com o desleixo calculado da marca.']],
  'Jack Ma': [['Alibaba: A Casa que Jack Ma Construiu', 'biografia', 2016, 'História da empresa e do professor de inglês que foi recusado dezenas de vezes antes de fundá-la.']],
  'Steve Jobs': [
    ['Discurso em Stanford', 'discurso', 2005, 'Três histórias, quinze minutos e uma das falas mais assistidas da internet.'],
    ['Steve Jobs (biografia por Walter Isaacson)', 'biografia', 2011, 'Biografia autorizada com mais de quarenta entrevistas com o próprio Jobs.']
  ],
  'Bill Gates': [
    ['A Estrada do Futuro', 'ensaio', 1995, 'Previsões sobre computação pessoal e redes, algumas certeiras e outras nem tanto.'],
    ['Como Evitar um Desastre Climático', 'ensaio', 2021, 'Plano de descarbonização setor a setor, com números e ordens de grandeza.']
  ],
  'Melinda French Gates': [['O Momento de Voar', 'ensaio', 2019, 'Vinte anos de trabalho em saúde global vistos pela lente de mulheres e contracepção.']],
  'Luiza Trajano': [['Magazine Luiza: a trajetória (relatos e entrevistas)', 'memoria', 2019, 'A construção de uma varejista nacional a partir de uma loja de interior, com foco em gente.']],
  'Abílio Diniz': [
    ['Caminho Sereno', 'memoria', 2013, 'Sequestro, disputas societárias e reconstrução pessoal narrados pelo empresário.'],
    ['Novo Caminho', 'memoria', 2020, 'Sobre reinvenção, saúde e o que ele mudaria se pudesse voltar atrás.']
  ],
  'Elon Musk': [['Elon Musk (biografia por Walter Isaacson)', 'biografia', 2023, 'Dois anos de acompanhamento direto, com acesso a reuniões e conversas internas.']],
  'Jeff Bezos': [
    ['Cartas anuais aos acionistas da Amazon', 'carta', 1997, 'Vinte e quatro cartas em que ele repete "ainda é o Dia 1" e explica decisões de longo prazo.'],
    ['Crie e Divague', 'ensaio', 2020, 'Coletânea de cartas e discursos organizada em livro.']
  ],

  /* ---------------- LIDERANÇA, POLÍTICA E ATIVISMO ---------------- */
  'Nelson Mandela': [
    ['Longo Caminho para a Liberdade', 'memoria', 1994, 'Autobiografia iniciada em segredo na prisão de Robben Island e concluída depois da soltura.'],
    ['Discurso do julgamento de Rivonia', 'discurso', 1964, 'Três horas em que assumiu tudo e disse estar pronto a morrer pelo ideal de uma sociedade democrática.'],
    ['Conversas que Tive Comigo', 'carta', 2010, 'Cartas, agendas e anotações pessoais publicadas com prefácio de Barack Obama.']
  ],
  'Mahatma Gandhi': [
    ['Minha Vida e Minhas Experiências com a Verdade', 'memoria', 1927, 'Autobiografia franca sobre erros, disciplina e a construção da satyagraha.'],
    ['Hind Swaraj', 'ensaio', 1909, 'Escrito num navio em dez dias; a crítica à civilização industrial e o programa da autonomia indiana.']
  ],
  'Martin Luther King Jr.': [
    ['Eu Tenho um Sonho', 'discurso', 1963, 'Discurso em Washington cuja parte mais famosa foi improvisada a partir de um aparte da plateia.'],
    ['Carta da Prisão de Birmingham', 'carta', 1963, 'Resposta a clérigos brancos que pediam paciência; um dos textos centrais sobre desobediência civil.'],
    ['A Força de Amar', 'ensaio', 1963, 'Sermões reunidos sobre amor, poder e não violência.']
  ],
  'Malcolm X': [
    ['Autobiografia de Malcolm X', 'memoria', 1965, 'Escrita com Alex Haley a partir de entrevistas; publicada meses após seu assassinato.'],
    ['O Voto ou a Bala', 'discurso', 1964, 'Discurso decisivo da fase em que rompe com a Nação do Islã.']
  ],
  'Rosa Parks': [['Rosa Parks: Minha História', 'memoria', 1992, 'A recusa no ônibus contada por quem já era ativista havia mais de dez anos.']],
  'Frederick Douglass': [
    ['Narrativa da Vida de Frederick Douglass', 'memoria', 1845, 'Relato de quem escapou da escravidão e aprendeu a ler escondido; vendeu milhares de exemplares.'],
    ['O que é o 4 de Julho para o escravo?', 'discurso', 1852, 'Discurso que expôs a contradição entre a festa da independência e a escravidão.']
  ],
  'Harriet Tubman': [['Rotas da Ferrovia Subterrânea', 'feito', 1850, 'Treze viagens de volta ao sul para tirar cerca de setenta pessoas da escravidão, sem perder ninguém.']],
  'Winston Churchill': [
    ['A Segunda Guerra Mundial', 'ensaio', 1948, 'Seis volumes escritos pelo protagonista; rendeu-lhe o Nobel de Literatura.'],
    ['Discursos de 1940', 'discurso', 1940, '"Sangue, esforço, lágrimas e suor" e "lutaremos nas praias" em série, no pior momento da guerra.'],
    ['História dos Povos de Língua Inglesa', 'ensaio', 1956, 'Quatro volumes escritos ao longo de décadas, entre um cargo público e outro.']
  ],
  'Abraham Lincoln': [
    ['Discurso de Gettysburg', 'discurso', 1863, 'Duzentas e setenta e duas palavras em dois minutos; redefiniu o significado da guerra civil.'],
    ['Proclamação de Emancipação', 'discurso', 1863, 'Ordem executiva que declarou livres as pessoas escravizadas nos estados confederados.'],
    ['Segundo Discurso de Posse', 'discurso', 1865, '"Sem malícia para com ninguém": o pedido de reconstrução sem vingança, semanas antes de ser assassinado.']
  ],
  'John F. Kennedy': [
    ['Perfis de Coragem', 'biografia', 1956, 'Oito senadores que contrariaram a própria base; ganhou o Pulitzer.'],
    ['Discurso de posse', 'discurso', 1961, '"Não pergunte o que seu país pode fazer por você."']
  ],
  'Eleanor Roosevelt': [
    ['Declaração Universal dos Direitos Humanos', 'feito', 1948, 'Presidiu a comissão que redigiu o documento e conduziu a negociação entre blocos rivais.'],
    ['Você Aprende Vivendo', 'ensaio', 1960, 'Conselhos práticos sobre medo, maturidade e uso do tempo.']
  ],
  'Michelle Obama': [
    ['Minha História', 'memoria', 2018, 'Um dos livros de memórias mais vendidos da história; do South Side de Chicago à Casa Branca.'],
    ['A Luz que Há em Nós', 'ensaio', 2022, 'Ferramentas pessoais para períodos de incerteza, escritas depois da pandemia.']
  ],
  'Václav Havel': [
    ['O Poder dos Sem-Poder', 'ensaio', 1978, 'Ensaio clandestino sobre viver na verdade dentro de um regime que exige a mentira.'],
    ['Cartas a Olga', 'carta', 1983, 'Cartas escritas da prisão à esposa; filosofia e vida doméstica no mesmo parágrafo.']
  ],
  'Kofi Annan': [['Intervenções: Uma Vida na Guerra e na Paz', 'memoria', 2012, 'Ruanda, Srebrenica, Iraque e as escolhas impossíveis da ONU vistas de dentro.']],
  'Desmond Tutu': [
    ['Não Há Futuro sem Perdão', 'ensaio', 1999, 'Relato da Comissão da Verdade e Reconciliação que ele presidiu na África do Sul.'],
    ['O Livro da Alegria (com o Dalai Lama)', 'ensaio', 2016, 'Cinco dias de conversa entre dois líderes religiosos sobre alegria em meio ao sofrimento.']
  ],
  'Malala Yousafzai': [
    ['Eu Sou Malala', 'memoria', 2013, 'A vida no vale do Swat, o atentado e o retorno à escola, escrito aos 16 anos.'],
    ['Discurso na ONU', 'discurso', 2013, 'Primeira fala pública após o atentado, no dia em que completou 16 anos.']
  ],
  'Wangari Maathai': [
    ['Movimento Cinturão Verde', 'feito', 1977, 'Mais de cinquenta milhões de árvores plantadas por mulheres quenianas; rendeu o Nobel da Paz.'],
    ['Unbowed', 'memoria', 2006, 'Autobiografia sobre ecologia, democracia e a violência sofrida por contrariar o governo.']
  ],
  'Marielle Franco': [['UPP: a redução da favela a três letras', 'ensaio', 2014, 'Dissertação de mestrado sobre segurança pública e política nas favelas cariocas.']],
  'Zumbi dos Palmares': [['Quilombo dos Palmares', 'feito', 1694, 'Liderou por quase quinze anos o maior quilombo das Américas, com dezenas de milhares de habitantes.']],
  'Rosa Luxemburgo': [
    ['Reforma ou Revolução', 'ensaio', 1899, 'Polêmica que a projetou como teórica marxista aos 28 anos.'],
    ['Cartas da Prisão', 'carta', 1920, 'Cartas escritas na cadeia sobre política, botânica e pássaros no pátio.']
  ],
  'Rui Barbosa': [
    ['Oração aos Moços', 'discurso', 1921, 'Discurso escrito para formandos de Direito que virou leitura clássica sobre justiça e trabalho.'],
    ['Cartas de Inglaterra', 'ensaio', 1896, 'Crônicas e crítica política escritas no exílio.']
  ],
  'Getúlio Vargas': [['Carta-testamento', 'carta', 1954, 'Documento deixado na madrugada de sua morte; um dos textos políticos mais citados do país.']],
  'Mao Tsé-Tung': [
    ['O Livro Vermelho', 'aforismo', 1964, 'Citações compiladas para distribuição em massa; um dos livros mais impressos do século XX.'],
    ['Sobre a Guerra Prolongada', 'ensaio', 1938, 'Teoria da guerra popular que orientou décadas de movimentos guerrilheiros.']
  ],
  'Napoleão Bonaparte': [
    ['Código Civil francês', 'feito', 1804, 'Reforma jurídica que serviu de base a códigos civis em dezenas de países, inclusive no Brasil.'],
    ['Memorial de Santa Helena', 'memoria', 1823, 'Conversas ditadas no exílio, que construíram boa parte da própria lenda.']
  ],
  'Júlio César': [['Comentários sobre a Guerra das Gálias', 'memoria', 'séc. I a.C.', 'Relato militar escrito em terceira pessoa, com prosa tão limpa que virou livro escolar de latim.']],
  'Colin Powell': [
    ['Minha Jornada Americana', 'memoria', 1995, 'Do Bronx ao comando do Estado-Maior Conjunto dos Estados Unidos.'],
    ['Meu Caminho Deu Certo', 'manual', 2012, 'As treze regras que ele mantinha sob o vidro da mesa.']
  ],
  'Amartya Sen': [
    ['Desenvolvimento como Liberdade', 'ensaio', 1999, 'Redefine desenvolvimento como ampliação de liberdades reais, não como aumento de renda.'],
    ['A Ideia de Justiça', 'ensaio', 2009, 'Crítica às teorias que buscam a instituição perfeita em vez de reduzir injustiças concretas.']
  ],
  'John Maynard Keynes': [
    ['Teoria Geral do Emprego, do Juro e da Moeda', 'tratado', 1936, 'O livro que criou a macroeconomia moderna e mudou o papel do Estado na economia.'],
    ['As Consequências Econômicas da Paz', 'ensaio', 1919, 'Previu, com precisão desconfortável, o desastre que as reparações impostas à Alemanha produziriam.']
  ],
  'Milton Friedman': [
    ['Capitalismo e Liberdade', 'ensaio', 1962, 'Defesa do mercado como condição da liberdade política; um dos livros mais influentes do liberalismo do século XX.'],
    ['Livre para Escolher', 'ensaio', 1980, 'Versão popular, acompanhada de série de televisão de grande audiência.']
  ],
  'Friedrich Hayek': [['O Caminho da Servidão', 'ensaio', 1944, 'Argumento de que o planejamento central conduz à perda de liberdade; escrito durante a guerra.']],
  'Max Weber': [
    ['A Ética Protestante e o Espírito do Capitalismo', 'ensaio', 1905, 'Relação entre ascetismo religioso e acumulação racional; um dos textos fundadores da sociologia.'],
    ['Ciência e Política: Duas Vocações', 'discurso', 1919, 'Duas conferências sobre o que significa levar a sério cada uma dessas profissões.']
  ],

  /* ---------------- PSICOLOGIA E EDUCAÇÃO ---------------- */
  'Carl Gustav Jung': [
    ['O Livro Vermelho', 'diario', 2009, 'Dezesseis anos de visões e desenhos guardados pela família por décadas antes da publicação.'],
    ['Memórias, Sonhos, Reflexões', 'memoria', 1962, 'Autobiografia ditada nos últimos anos; a melhor porta de entrada para sua obra.'],
    ['O Homem e seus Símbolos', 'ensaio', 1964, 'Escrito para o leitor comum, a pedido de um editor, no último ano de vida.'],
    ['Tipos Psicológicos', 'tratado', 1921, 'Introversão, extroversão e as funções psíquicas que originaram testes usados até hoje.']
  ],
  'Sigmund Freud': [
    ['A Interpretação dos Sonhos', 'tratado', 1900, 'Vendeu poucas centenas de exemplares nos primeiros anos; hoje é marco da psicanálise.'],
    ['O Mal-Estar na Civilização', 'ensaio', 1930, 'Sobre o preço psíquico da vida em sociedade; escrito entre duas guerras.'],
    ['Três Ensaios sobre a Teoria da Sexualidade', 'tratado', 1905, 'Provocou escândalo e mudou a discussão médica sobre desejo e infância.']
  ],
  'Viktor Frankl': [
    ['Em Busca de Sentido', 'memoria', 1946, 'Escrito em nove dias após a libertação; relato dos campos e apresentação da logoterapia.'],
    ['A Vontade de Sentido', 'ensaio', 1969, 'Fundamentos teóricos da logoterapia, para quem quer ir além do primeiro livro.']
  ],
  'Carl Rogers': [
    ['Tornar-se Pessoa', 'ensaio', 1961, 'A abordagem centrada na pessoa contada com casos clínicos e franqueza incomum.'],
    ['Um Jeito de Ser', 'ensaio', 1980, 'Reflexões finais sobre escuta, empatia e presença.']
  ],
  'Erich Fromm': [
    ['A Arte de Amar', 'ensaio', 1956, 'Amar como prática que se aprende, e não como sorte que acontece.'],
    ['O Medo à Liberdade', 'ensaio', 1941, 'Por que pessoas trocam liberdade por segurança — escrito enquanto o fascismo avançava.'],
    ['Ter ou Ser?', 'ensaio', 1976, 'Dois modos de existir e a crítica ao consumo como identidade.']
  ],
  'Daniel Goleman': [
    ['Inteligência Emocional', 'ensaio', 1995, 'Popularizou a ideia de que autoconsciência e empatia pesam tanto quanto QI.'],
    ['Foco', 'ensaio', 2013, 'Atenção como músculo e recurso escasso na economia da distração.']
  ],
  'Martin Seligman': [
    ['Felicidade Autêntica', 'ensaio', 2002, 'Livro que consolidou a psicologia positiva como campo de pesquisa.'],
    ['Aprenda a Ser Otimista', 'ensaio', 1990, 'Estilo explicativo e desamparo aprendido, com testes práticos.']
  ],
  'Philip Zimbardo': [['O Efeito Lúcifer', 'ensaio', 2007, 'O experimento da prisão de Stanford contado pelo pesquisador, com autocrítica sobre o próprio papel.']],
  'Marshall Rosenberg': [['Comunicação Não Violenta', 'manual', 1999, 'Observação, sentimento, necessidade e pedido: método usado em mediação de conflitos no mundo todo.']],
  'Edith Eger': [
    ['A Bailarina de Auschwitz', 'memoria', 2017, 'Sobrevivente que virou psicóloga, escrevendo sobre trauma aos 90 anos.'],
    ['O Presente', 'manual', 2020, 'Doze prisões mentais comuns e como sair de cada uma.']
  ],
  'Nise da Silveira': [
    ['Imagens do Inconsciente', 'ensaio', 1981, 'Trabalho com arte e psiquiatria que rompeu com eletrochoque e lobotomia no Brasil.'],
    ['Museu de Imagens do Inconsciente', 'feito', 1952, 'Acervo com mais de trezentas mil obras produzidas por pacientes psiquiátricos.']
  ],
  'Paulo Freire': [
    ['Pedagogia do Oprimido', 'ensaio', 1968, 'Um dos livros de ciências humanas mais citados do mundo; escrito no exílio.'],
    ['Pedagogia da Autonomia', 'ensaio', 1996, 'Saberes necessários à prática educativa, escrito no fim da vida e amplamente usado em formação de professores.'],
    ['Educação como Prática da Liberdade', 'ensaio', 1967, 'Onde apresenta o método que alfabetizou trezentos trabalhadores em quarenta horas.']
  ],
  'John Dewey': [
    ['Democracia e Educação', 'ensaio', 1916, 'Educação como condição da vida democrática, não como preparação para ela.'],
    ['Experiência e Educação', 'ensaio', 1938, 'Correção e síntese de suas próprias ideias, escrita para responder a exageros dos seguidores.']
  ],
  'Maria Montessori': [
    ['O Método Montessori', 'manual', 1909, 'Sistematização do trabalho na Casa dei Bambini, hoje aplicado em milhares de escolas.'],
    ['A Mente Absorvente da Criança', 'ensaio', 1949, 'Sobre os primeiros seis anos de vida e a capacidade infantil de absorver o ambiente.']
  ],
  'Jean Piaget': [
    ['A Epistemologia Genética', 'tratado', 1970, 'Como o conhecimento se constrói em estágios; base da psicologia do desenvolvimento.'],
    ['O Nascimento da Inteligência na Criança', 'tratado', 1936, 'Observações minuciosas dos próprios filhos que fundaram sua teoria.']
  ],
  'John Wooden': [['Wooden on Leadership', 'manual', 2005, 'A pirâmide do sucesso do treinador que ganhou dez títulos universitários em doze anos.']],
  'Muhammad Ali': [
    ['O Maior: Minha Própria História', 'memoria', 1975, 'Autobiografia escrita com Richard Durham, no auge da carreira.'],
    ['Recusa ao alistamento', 'feito', 1967, 'Perdeu título, licença e três anos e meio de carreira por objeção de consciência.']
  ],
  Pelé: [['Pelé: A Autobiografia', 'memoria', 2006, 'Mil e duzentos e oitenta e um gols e três Copas contados por ele mesmo.']],
  'Ayrton Senna': [['Instituto Ayrton Senna', 'feito', 1994, 'Criado pela família com base em projeto que ele preparava; já atendeu milhões de crianças brasileiras.']],
  'Michael Jordan': [['Eu Não Posso Aceitar Não Tentar', 'memoria', 1994, 'Livro curto sobre disciplina, fracasso e repetição.']],
  'Serena Williams': [['Rainha da Quadra', 'memoria', 2009, 'Autobiografia sobre Compton, racismo no circuito e vinte e três títulos de Grand Slam.']],
  'Jesse Owens': [['Quatro ouros em Berlim 1936', 'feito', 1936, 'Venceu quatro provas nos Jogos que Hitler pretendia usar como vitrine racial.']],

  /* ---------------- RELIGIÃO E ESPIRITUALIDADE ---------------- */
  Buda: [
    ['Dhammapada', 'sagrado', 'séc. III a.C.', 'Quatrocentos e vinte e três versos que resumem o ensinamento; o texto budista mais lido fora da Ásia.'],
    ['Sermão de Benares', 'sagrado', 'séc. V a.C.', 'Primeiro discurso após o despertar: as quatro nobres verdades e o caminho do meio.']
  ],
  'Jesus Cristo': [
    ['Sermão da Montanha', 'sagrado', 'séc. I', 'As bem-aventuranças e o núcleo ético dos Evangelhos, em Mateus 5–7.'],
    ['Parábolas', 'sagrado', 'séc. I', 'O bom samaritano, o filho pródigo, o semeador: ensino por histórias curtas de uso cotidiano.']
  ],
  Krishna: [['Bhagavad Gita', 'sagrado', 'séc. II a.C.', 'Setecentos versos de diálogo antes de uma batalha, sobre dever, ação e desapego do fruto.']],
  'Profeta Muhammad': [
    ['Hadices', 'sagrado', 'séc. VII', 'Coletâneas de ditos e atos transmitidos por companheiros, base da jurisprudência islâmica.'],
    ['Sermão da Despedida', 'discurso', 632, 'Último sermão público, com princípios sobre igualdade, dívida e tratamento das mulheres.']
  ],
  'Dalai Lama': [
    ['A Arte da Felicidade', 'ensaio', 1998, 'Conversas com o psiquiatra Howard Cutler traduzindo o budismo em prática cotidiana.'],
    ['Uma Ética para o Novo Milênio', 'ensaio', 1999, 'Proposta de ética secular, válida também para quem não tem religião.'],
    ['Liberdade no Exílio', 'memoria', 1990, 'Autobiografia sobre a infância no Tibete, a fuga em 1959 e a vida em Dharamsala.']
  ],
  'Thich Nhat Hanh': [
    ['O Milagre da Atenção Plena', 'manual', 1975, 'Escrito originalmente como carta a monges no Vietnã em guerra; popularizou o mindfulness no Ocidente.'],
    ['A Paz é Cada Passo', 'manual', 1991, 'Práticas curtas de atenção para o dia comum.']
  ],
  'Francisco de Assis': [
    ['Cântico das Criaturas', 'poesia', 1224, 'Um dos primeiros textos literários em italiano; louva sol, água, vento e a "irmã morte".'],
    ['Regra dos Frades Menores', 'tratado', 1223, 'Regra de vida em pobreza radical, aprovada após anos de resistência da Cúria.']
  ],
  'Martinho Lutero': [
    ['95 Teses', 'ensaio', 1517, 'Objeções acadêmicas à venda de indulgências que abriram a Reforma.'],
    ['Tradução da Bíblia para o alemão', 'tradução', 1534, 'Feita em parte escondido no castelo de Wartburg; ajudou a formar o alemão moderno.']
  ],
  'Madre Teresa de Calcutá': [
    ['Missionárias da Caridade', 'feito', 1950, 'Congregação que chegou a mais de cem países cuidando de moribundos e desamparados.'],
    ['Venha, Seja Minha Luz', 'carta', 2007, 'Cartas privadas publicadas após sua morte, revelando décadas de escuridão espiritual.']
  ],
  'Chico Xavier': [
    ['Nosso Lar', 'romance', 1944, 'Psicografado, é o livro espírita mais vendido do Brasil; virou filme de grande público.'],
    ['Parnaso de Além-Túmulo', 'poesia', 1932, 'Primeiro livro, com poemas atribuídos a autores já falecidos; provocou intensa polêmica literária.'],
    ['Doação integral dos direitos autorais', 'feito', 1932, 'Mais de quatrocentos livros publicados sem que ele ficasse com um centavo dos direitos.']
  ],
  'Apóstolo Paulo': [
    ['Carta aos Romanos', 'sagrado', 'séc. I', 'A mais sistemática das cartas paulinas; base de boa parte da teologia cristã posterior.'],
    ['Primeira Carta aos Coríntios', 'sagrado', 'séc. I', 'Contém o capítulo 13, sobre o amor, lido em quase todo casamento cristão.']
  ],
  Hillel: [['Ensinos no Pirkei Avot', 'sagrado', 'séc. I a.C.', '"Se não for eu por mim, quem será?" e a regra de ouro em versão negativa.']],
  'Rui Barbosa ': []
});

/* ================================================================
   FEITOS — para quem é lembrado sobretudo pelo que fez
   ================================================================ */
const FEITOS = {
  'Albert Einstein': ['Publicou em 1905, num único ano, quatro artigos que mudaram a física.', 'Prêmio Nobel de Física de 1921, pelo efeito fotoelétrico — não pela relatividade.', 'Renunciou à cidadania alemã duas vezes; a segunda, ao fugir do nazismo em 1933.', 'Assinou com Russell o manifesto contra armas nucleares, meses antes de morrer.'],
  'Marie Curie': ['Única pessoa premiada com o Nobel em duas ciências distintas: Física e Química.', 'Descobriu o polônio e o rádio, e cunhou o termo "radioatividade".', 'Montou unidades móveis de raio-X na Primeira Guerra e as operou no front.', 'Primeira mulher a lecionar na Sorbonne.'],
  'Rosa Parks': ['Recusou-se a ceder o assento em 1º de dezembro de 1955, em Montgomery.', 'Já era secretária da NAACP local havia mais de dez anos.', 'O boicote que se seguiu durou 381 dias e chegou à Suprema Corte.'],
  'Ayrton Senna': ['Três títulos mundiais de Fórmula 1 (1988, 1990, 1991).', 'Sessenta e cinco pole positions, recorde que durou mais de vinte anos.', 'Doava em silêncio parte relevante de sua renda a projetos para crianças.'],
  Pelé: ['Único jogador tricampeão mundial: 1958, 1962 e 1970.', 'Mais de mil gols em partidas oficiais e amistosas.', 'Foi ministro do Esporte no Brasil e embaixador da ONU para a ecologia.'],
  'Zumbi dos Palmares': ['Liderou Palmares por cerca de quinze anos, resistindo a dezenas de expedições.', 'O quilombo chegou a abrigar dezenas de milhares de pessoas.', 'O 20 de novembro, data de sua morte, é o Dia da Consciência Negra.'],
  'Harriet Tubman': ['Escapou da escravidão em 1849 e voltou treze vezes para tirar outros.', 'Nunca perdeu uma pessoa das cerca de setenta que conduziu.', 'Foi batedora e espiã do Exército da União; comandou o ataque ao rio Combahee.'],
  'Katherine Johnson': ['Calculou trajetórias das missões Mercury e Apollo 11.', 'John Glenn exigiu que ela conferisse à mão os números do computador.', 'Medalha Presidencial da Liberdade em 2015.'],
  'Alan Turing': ['Formalizou a ideia de computação com a máquina de Turing, em 1936.', 'Liderou a quebra do código Enigma em Bletchley Park.', 'Condenado em 1952 por homossexualidade; recebeu perdão real póstumo em 2013.'],
  'Amelia Earhart': ['Primeira mulher a cruzar o Atlântico sozinha de avião, em 1932.', 'Estabeleceu vários recordes de altitude e velocidade.', 'Desapareceu em 1937 tentando dar a volta ao mundo pela linha do Equador.'],
  'Jesse Owens': ['Quatro medalhas de ouro nos Jogos de Berlim, em 1936.', 'Em 1935, quebrou três recordes mundiais e igualou um quarto em 45 minutos.'],
  'Serena Williams': ['Vinte e três títulos de Grand Slam em simples, recorde da era aberta.', 'Quatro ouros olímpicos.', 'Venceu o Aberto da Austrália de 2017 grávida de dois meses.'],
  'Michael Jordan': ['Seis títulos da NBA, todos com o prêmio de melhor jogador das finais.', 'Dez vezes cestinha da temporada.', 'Cortado do time principal do colégio aos quinze anos.'],
  'Grace Hopper': ['Criou o primeiro compilador da história em 1952.', 'Foi central na criação do COBOL.', 'Popularizou o termo "bug" ao registrar uma mariposa presa num relé.'],
  'Oswaldo Cruz': ['Erradicou febre amarela, peste e varíola do Rio de Janeiro no início do século XX.', 'Fundou o instituto que hoje leva seu nome.'],
  'Santos Dumont': ['Primeiro voo público homologado com aparelho mais pesado que o ar, em 1906.', 'Contornou a Torre Eiffel com o dirigível nº 6 em 1901.', 'Recusou patentear seus aviões e publicou os planos do Demoiselle gratuitamente.'],
  'Nikola Tesla': ['Desenvolveu o sistema de corrente alternada que iluminou o mundo.', 'Mais de trezentas patentes em vários países.', 'Iluminou a Exposição Universal de Chicago em 1893.'],
  'Rosalind Franklin': ['Produziu a Fotografia 51, essencial para a descoberta da dupla hélice.', 'Trabalho pioneiro sobre a estrutura de vírus, feito depois do DNA.'],
  'Lise Meitner': ['Explicou fisicamente a fissão nuclear em 1939.', 'Recusou-se a participar do Projeto Manhattan.', 'O elemento 109, meitnério, leva seu nome.'],
  'Chien-Shiung Wu': ['Derrubou experimentalmente a conservação da paridade em 1956.', 'Participou do Projeto Manhattan no enriquecimento de urânio.'],
  'Barbara McClintock': ['Descobriu os transposons nos anos 1940, décadas antes do reconhecimento.', 'Nobel de Medicina de 1983, sem dividir o prêmio com ninguém.'],
  'Marielle Franco': ['Quinta vereadora mais votada do Rio em 2016.', 'Relatora da comissão que acompanhou a intervenção federal no Rio.', 'Assassinada em 14 de março de 2018.'],
  'Wangari Maathai': ['Fundou o Movimento Cinturão Verde em 1977.', 'Mais de cinquenta milhões de árvores plantadas.', 'Primeira africana a receber o Nobel da Paz, em 2004.'],
  'Nise da Silveira': ['Recusou eletrochoque e lobotomia e criou ateliês de pintura em hospital psiquiátrico.', 'Fundou o Museu de Imagens do Inconsciente em 1952.', 'Correspondeu-se com Jung, que se interessou pelo acervo brasileiro.'],
  'Luiza Trajano': ['Transformou uma loja de interior numa das maiores varejistas do país.', 'Criou o Grupo Mulheres do Brasil, com mais de cem mil integrantes.'],
  'Chico Xavier': ['Publicou mais de quatrocentos livros.', 'Doou integralmente os direitos autorais à caridade.', 'Manteve atendimento gratuito por décadas em Uberaba.'],
  'Madre Teresa de Calcutá': ['Fundou as Missionárias da Caridade em 1950.', 'Nobel da Paz em 1979; recusou o banquete e pediu que o dinheiro fosse aos pobres.'],
  'Eleanor Roosevelt': ['Presidiu a comissão que redigiu a Declaração Universal dos Direitos Humanos.', 'Manteve coluna diária de jornal por vinte e sete anos.'],
  'Helen Keller': ['Primeira pessoa surdocega a se formar numa universidade, em 1904.', 'Cofundadora da União Americana pelas Liberdades Civis.'],
  'Malala Yousafzai': ['Mais jovem laureada com o Nobel da Paz, aos 17 anos.', 'Voltou às aulas semanas depois de levar um tiro na cabeça.', 'Formou-se em Oxford em 2020.'],
  'Ada Lovelace': ['Escreveu o que é considerado o primeiro algoritmo para uma máquina.', 'Percebeu que a máquina poderia manipular símbolos, não apenas números.'],
  'Jane Goodall': ['Observou chimpanzés usando ferramentas, derrubando a definição vigente de humano.', 'Fundou o Instituto Jane Goodall e o programa Roots & Shoots.'],
  'Leonardo da Vinci': ['Projetou máquinas voadoras, escafandros e pontes séculos antes de serem viáveis.', 'Dissecou cerca de trinta corpos humanos e produziu desenhos anatômicos precisos.'],
  'Steve Jobs': ['Cofundou a Apple aos 21 anos numa garagem.', 'Foi demitido da própria empresa e voltou onze anos depois.', 'Comprou a divisão que viraria a Pixar por cinco milhões de dólares.'],
  'Coco Chanel': ['Libertou o corpo feminino do espartilho.', 'Criou o Chanel Nº 5, em 1921, ainda hoje entre os perfumes mais vendidos.', 'Popularizou o vestido preto curto e o uso de jérsei na alta-costura.'],
  'Muhammad Ali': ['Três vezes campeão mundial dos pesos pesados.', 'Perdeu três anos e meio de carreira por recusar o alistamento no Vietnã.', 'Acendeu a pira olímpica em Atlanta, em 1996, já com Parkinson.'],
  'Frederick Douglass': ['Fugiu da escravidão aos vinte anos e virou o orador abolicionista mais requisitado do país.', 'Fundou o jornal The North Star.', 'Aconselhou Lincoln durante a Guerra Civil.'],
  'Desmond Tutu': ['Presidiu a Comissão da Verdade e Reconciliação da África do Sul.', 'Nobel da Paz em 1984, em plena vigência do apartheid.'],
  'Kofi Annan': ['Primeiro secretário-geral da ONU vindo dos quadros da própria organização.', 'Nobel da Paz em 2001, junto com as Nações Unidas.'],
  'Václav Havel': ['Passou quase cinco anos preso por atividade dissidente.', 'Foi eleito presidente meses depois da Revolução de Veludo, em 1989.'],
  'Simón Bolívar': ['Participou da independência de seis países sul-americanos.', 'Aboliu a escravidão nos territórios que libertou.'],
  'Melinda French Gates': ['Codirigiu a maior fundação privada de saúde global do mundo.', 'Concentrou investimentos em contracepção, saúde materna e igualdade de gênero.'],
  'Maria Callas': ['Reviveu o repertório do bel canto que estava fora de moda.', 'Recriou a ópera como teatro, não apenas como canto.'],
  'Charles Chaplin': ['Cofundou a United Artists em 1919 para controlar a própria obra.', 'Escreveu, dirigiu, produziu, protagonizou e compôs a trilha de seus filmes.', 'Exilado dos Estados Unidos por doze anos durante o macartismo.'],
  'Walt Disney': ['Vinte e dois Oscars, recorde individual até hoje.', 'Produziu o primeiro longa de animação em cores da história.']
};

/* ================================================================
   PAPÉIS — descrição curta para quem não tem biografia no acervo
   ================================================================ */
const PAPEIS = {
  Krishna: 'Figura central do Bhagavad Gita (tradição hindu)',
  'Jesus Cristo': 'Figura central do cristianismo (séc. I)',
  'Apóstolo Paulo': 'Apóstolo e autor de cartas do Novo Testamento (séc. I)',
  Hillel: 'Sábio judeu do período do Segundo Templo (séc. I a.C.)',
  'Madre Teresa de Calcutá': 'Religiosa albanesa-indiana (1910–1997)',
  'John C. Maxwell': 'Autor e conferencista de liderança (1947–)',
  'John Stuart Mill': 'Filósofo e economista britânico (1806–1873)',
  'Morgan Housel': 'Escritor e sócio de fundo de investimentos (1983–)',
  'Carl Rogers': 'Psicólogo norte-americano (1902–1987)',
  'William James': 'Filósofo e psicólogo norte-americano (1842–1910)',
  'Warren Bennis': 'Pesquisador de liderança (1925–2014)',
  'Philip Kotler': 'Professor de marketing (1931–)',
  'Benjamin Franklin': 'Inventor, escritor e diplomata (1706–1790)',
  'Mary Wollstonecraft': 'Escritora e filósofa britânica (1759–1797)',
  'Henry David Thoreau': 'Escritor e naturalista norte-americano (1817–1862)',
  'Jeff Bezos': 'Fundador da Amazon (1964–)',
  'Robert Cialdini': 'Psicólogo social e pesquisador da persuasão (1945–)',
  'Nicolau Maquiavel': 'Diplomata e pensador político florentino (1469–1527)',
  'Michael Porter': 'Professor de estratégia competitiva (1947–)',
  'Jean-Paul Sartre': 'Filósofo e escritor francês (1905–1980)',
  'Colin Powell': 'General e secretário de Estado (1937–2021)',
  'Adam Smith': 'Filósofo moral e economista escocês (1723–1790)',
  'Stephen R. Covey': 'Autor e educador norte-americano (1932–2012)',
  'C. S. Lewis': 'Escritor e professor britânico (1898–1963)',
  'Blaise Pascal': 'Matemático, físico e filósofo francês (1623–1662)',
  'Robert Emmons': 'Psicólogo, pesquisador da gratidão (1958–)',
  'John Kotter': 'Professor de liderança e mudança (1947–)',
  'David Hume': 'Filósofo escocês (1711–1776)',
  'Bill Gates': 'Cofundador da Microsoft e filantropo (1955–)',
  'Angela Davis': 'Filósofa e ativista norte-americana (1944–)',
  'Rubem Alves': 'Teólogo, educador e escritor brasileiro (1933–2014)',
  'Robert Greene': 'Escritor norte-americano (1959–)',
  'Philip Fisher': 'Investidor norte-americano (1907–2004)',
  'George S. Clason': 'Escritor e empresário norte-americano (1874–1957)',
  'Napoleão Bonaparte': 'Militar e imperador francês (1769–1821)',
  Montesquieu: 'Pensador político francês (1689–1755)',
  'Max Weber': 'Sociólogo alemão (1864–1920)',
  'Jim Collins': 'Pesquisador de gestão (1958–)',
  'Elon Musk': 'Empresário e engenheiro (1971–)',
  'Clayton Christensen': 'Professor de administração (1952–2020)',
  'Baltasar Gracián': 'Jesuíta e escritor espanhol (1601–1658)',
  'Seth Godin': 'Escritor e empreendedor de marketing (1960–)',
  'Samuel Johnson': 'Escritor e lexicógrafo inglês (1709–1784)',
  'Philip Zimbardo': 'Psicólogo social norte-americano (1933–2024)',
  'Mary Parker Follett': 'Pioneira da teoria da administração (1868–1933)',
  'Marshall McLuhan': 'Teórico da comunicação canadense (1911–1980)',
  'Jack Welch': 'Executivo norte-americano (1935–2020)',
  'Gustave Le Bon': 'Psicólogo social francês (1841–1931)',
  'Audre Lorde': 'Poeta e ativista norte-americana (1934–1992)',
  'Thomas Hobbes': 'Filósofo político inglês (1588–1679)',
  'Thomas Edison': 'Inventor e empresário norte-americano (1847–1931)',
  'Simone Weil': 'Filósofa e mística francesa (1909–1943)',
  'Ruth Bader Ginsburg': 'Juíza da Suprema Corte dos EUA (1933–2020)',
  'Noam Chomsky': 'Linguista e crítico político (1928–)',
  'Napoleon Hill': 'Escritor norte-americano (1883–1970)',
  'Martin Seligman': 'Psicólogo, fundador da psicologia positiva (1942–)',
  'Marshall Rosenberg': 'Psicólogo, criador da Comunicação Não Violenta (1934–2015)',
  'Ken Blanchard': 'Autor e consultor de gestão (1939–)',
  Heráclito: 'Filósofo pré-socrático grego (séc. VI–V a.C.)',
  'Guy Debord': 'Teórico e cineasta francês (1931–1994)',
  'Franklin D. Roosevelt': 'Presidente dos Estados Unidos (1882–1945)',
  'Chris Voss': 'Ex-negociador de reféns do FBI (1957–)',
  'Karl Marx': 'Filósofo e economista alemão (1818–1883)',
  'Alexis de Tocqueville': 'Pensador político francês (1805–1859)',
  'W. Edwards Deming': 'Estatístico e consultor de qualidade (1900–1993)',
  'Theodore Roosevelt': 'Presidente dos Estados Unidos (1858–1919)',
  'Simon Sinek': 'Autor e palestrante britânico-americano (1973–)',
  'Sam Walton': 'Fundador do Walmart (1918–1992)',
  'Nassim Nicholas Taleb': 'Ensaísta e ex-operador de mercado (1960–)',
  'Eric Ries': 'Empreendedor e autor (1978–)',
  'Peter Thiel': 'Investidor e empresário (1967–)',
  'Edward Bernays': 'Pioneiro das relações públicas (1891–1995)',
  'Walter Lippmann': 'Jornalista e teórico político (1889–1974)',
  'Jim Rohn': 'Palestrante e autor norte-americano (1930–2009)',
  'Betty Friedan': 'Escritora e ativista feminista (1921–2006)',
  'Susan B. Anthony': 'Sufragista norte-americana (1820–1906)',
  'Gerda Lerner': 'Historiadora austríaco-americana (1920–2013)',
  'Nísia Floresta': 'Educadora e escritora brasileira (1810–1885)',
  'Thomas Sowell': 'Economista norte-americano (1930–)',
  'Dan Ariely': 'Psicólogo e economista comportamental (1967–)',
  'Friedrich Hayek': 'Economista austríaco (1899–1992)',
  'John Maynard Keynes': 'Economista britânico (1883–1946)',
  'Milton Friedman': 'Economista norte-americano (1912–2006)',
  'Amartya Sen': 'Economista indiano (1933–)',
  'Erving Goffman': 'Sociólogo canadense (1922–1982)',
  'Pierre Bourdieu': 'Sociólogo francês (1930–2002)',
  'Michel Foucault': 'Filósofo francês (1926–1984)',
  'Jonathan Haidt': 'Psicólogo social norte-americano (1963–)',
  'Yuval Noah Harari': 'Historiador israelense (1976–)',
  'Marco Aurélio': 'Imperador romano e filósofo estoico (121–180)',
  'Sun Tzu': 'Estrategista militar chinês (séc. V a.C.)',
  'Carl von Clausewitz': 'Militar e teórico prussiano (1780–1831)',
  'Júlio César': 'General e estadista romano (100–44 a.C.)',
  Voltaire: 'Escritor e filósofo francês (1694–1778)',
  'Johann Wolfgang von Goethe': 'Escritor e pensador alemão (1749–1832)',
  'Honoré de Balzac': 'Romancista francês (1799–1850)',
  'François de La Rochefoucauld': 'Escritor e moralista francês (1613–1680)',
  'George Bernard Shaw': 'Dramaturgo irlandês (1856–1950)',
  'Fiódor Dostoiévski': 'Romancista russo (1821–1881)',
  'Elbert Hubbard': 'Escritor e editor norte-americano (1856–1915)',
  Quintiliano: 'Retórico romano (séc. I)',
  'Publílio Siro': 'Autor de máximas latinas (séc. I a.C.)',
  Virgílio: 'Poeta romano (70–19 a.C.)',
  'Zenão de Cítio': 'Fundador do estoicismo (334–262 a.C.)',
  'Tomás de Aquino': 'Teólogo e filósofo italiano (1225–1274)',
  'Santo Agostinho': 'Bispo e filósofo (354–430)',
  'Ailton Krenak': 'Pensador e liderança indígena brasileira (1953–)',
  'Roger Fisher e William Ury': 'Pesquisadores de negociação (Harvard)',
  'James Kouzes e Barry Posner': 'Pesquisadores de liderança',
  'Vinicius de Moraes': 'Poeta, diplomata e compositor brasileiro (1913–1980)',
  'Mário Quintana': 'Poeta brasileiro (1906–1994)',
  'Larry Page': 'Cofundador do Google (1973–)',
  'Reed Hastings': 'Cofundador da Netflix (1960–)',
  'Ray Kroc': 'Empresário norte-americano, do McDonald\u2019s (1902–1984)',
  'Getúlio Vargas': 'Presidente do Brasil (1882–1954)',
  'Juscelino Kubitschek': 'Presidente do Brasil (1902–1976)',
  'Ulysses Guimarães': 'Político brasileiro (1916–1992)',
  'Mikhail Gorbachev': 'Último líder da União Soviética (1931–2022)',
  'Henry Kissinger': 'Diplomata norte-americano (1923–2023)',
  'Margaret Thatcher': 'Primeira-ministra britânica (1925–2013)',
  'Ronald Reagan': 'Presidente dos Estados Unidos (1911–2004)',
  'Thomas Jefferson': 'Presidente e redator da Declaração de Independência (1743–1826)',
  'George Washington': 'Primeiro presidente dos Estados Unidos (1732–1799)',
  'José Martí': 'Escritor e líder da independência cubana (1853–1895)',
  'José Ortega y Gasset': 'Filósofo espanhol (1883–1955)',
  'Norberto Bobbio': 'Filósofo político italiano (1909–2004)',
  'Edmund Burke': 'Pensador político irlandês (1729–1797)',
  'Salvador Dalí': 'Pintor surrealista espanhol (1904–1989)',
  'Vincent van Gogh': 'Pintor neerlandês (1853–1890)',
  Michelangelo: 'Escultor, pintor e arquiteto italiano (1475–1564)',
  'Malcolm X': 'Ativista norte-americano (1925–1965)',
  'Marielle Franco': 'Vereadora e socióloga brasileira (1979–2018)',
  'Rosa Luxemburgo': 'Teórica e revolucionária polonesa-alemã (1871–1919)',
  'Chimamanda Ngozi Adichie': 'Escritora nigeriana (1977–)',
  'bell hooks': 'Escritora e educadora norte-americana (1952–2021)',
  'Maya Angelou': 'Escritora norte-americana (1928–2014)',
  Alcorão: 'Livro sagrado do Islã',
  Upanishads: 'Textos filosóficos da tradição védica',
  'Ditado Popular': 'Sabedoria de transmissão oral, sem autoria individual'
};
