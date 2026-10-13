/* MeMotiva — curadoria/27-fases09-19-fila.js
   Fases 9–19 — continuação da fila de curadoria por autor (panoramas, obras, frases).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 9 — CONTINUAÇÃO DA FILA DE CURADORIA
   Autores que possuíam apenas biografia de Histórias e passam agora
   a ter panorama próprio, mais profundo e não duplicado (§7, §10).
   ================================================================ */
const PANORAMAS_F9 = {
  'Carl Gustav Jung': {
    papel: 'Psiquiatra e psicanalista suíço (1875–1961)',
    resumo: 'Rompeu com Freud e fundou a psicologia analítica, com o inconsciente coletivo, os arquétipos e o processo de individuação.',
    bio: [
      'Carl Gustav Jung nasceu em Kesswil, na Suíça, em 26 de julho de 1875, filho de um pastor protestante em crise de fé e de uma mãe com episódios psíquicos graves. Formou-se em medicina na Basileia e escolheu a psiquiatria, então uma especialidade marginal, ao ler um manual que definia as psicoses como doenças da personalidade. Trabalhou no hospital Burghölzli, em Zurique, sob Eugen Bleuler, onde desenvolveu o teste de associação de palavras e a noção de complexo — conjuntos de representações carregadas de afeto que operam autonomamente.',
      'A correspondência com Freud começou em 1906 e a amizade durou seis anos intensos, com Jung visto como herdeiro do movimento psicanalítico. A ruptura veio em 1913, por divergência sobre a natureza da libido, que Jung recusava reduzir ao sexual. Seguiu-se um período de crise pessoal profunda, em que registrou visões e diálogos internos nos cadernos que se tornariam o Livro Vermelho, publicado apenas em 2009.',
      'Dessa travessia saiu sua obra própria. Jung propôs que abaixo do inconsciente pessoal existe um inconsciente coletivo, camada herdada e comum à espécie, estruturada por arquétipos — padrões formais como a sombra, a anima e o animus, a persona e o si-mesmo. A individuação é o processo pelo qual a pessoa integra esses conteúdos e se torna quem é. Estudou alquimia, mitologia comparada, gnosticismo e religiões orientais como repositórios simbólicos desse material, e formulou a sincronicidade, a coincidência significativa sem relação causal.',
      'Sua tipologia psicológica, com a distinção entre introversão e extroversão e as quatro funções, influenciou instrumentos de avaliação amplamente usados. Sua conduta durante os anos 1930, à frente de uma associação psicoterapêutica internacional sob influência alemã, e alguns escritos do período são objeto de crítica e debate historiográfico. Morreu em Küsnacht em 6 de junho de 1961.'
    ],
    contexto:
      'Jung trabalha no momento em que a psiquiatria europeia deixava de tratar a loucura apenas como lesão orgânica e começava a buscar sentido no delírio. Sua obra é a mais ambiciosa tentativa de reconectar a psicologia clínica à história das religiões, dos mitos e da arte, e é justamente essa amplitude que explica sua influência fora da clínica e a resistência que encontrou dentro dela.',
    contribuicoes: [
      'Fundou a psicologia analítica.',
      'Formulou os conceitos de inconsciente coletivo e de arquétipo.',
      'Descreveu o processo de individuação como eixo do desenvolvimento psíquico adulto.',
      'Criou o teste de associação de palavras e a teoria dos complexos.',
      'Estabeleceu a tipologia psicológica com introversão, extroversão e as quatro funções.',
      'Formulou o conceito de sincronicidade.'
    ],
    cronologia: [
      [1875, 'Nasce em Kesswil, em 26 de julho.'],
      [1900, 'Ingressa no hospital Burghölzli, em Zurique.'],
      [1906, 'Inicia a correspondência com Freud.'],
      [1913, 'Rompe com Freud e entra em crise pessoal prolongada.'],
      [1921, 'Publica Tipos Psicológicos.'],
      [1944, 'Assume cátedra em Basileia.'],
      [1961, 'Morre em Küsnacht.'],
      [2009, 'O Livro Vermelho é publicado.']
    ],
    nota: 'A atuação de Jung à frente da Sociedade Médica Geral de Psicoterapia nos anos 1930 e alguns textos do período são objeto de crítica e debate historiográfico.'
  },

  'Arthur Schopenhauer': {
    papel: 'Filósofo alemão (1788–1860)',
    resumo: 'Sustentou que o mundo é a manifestação de uma Vontade cega e insaciável, e que a arte e a compaixão são as únicas saídas.',
    bio: [
      'Arthur Schopenhauer nasceu em Danzigue, hoje Gdansk, em 22 de fevereiro de 1788, filho de um comerciante rico e de uma escritora de sucesso. O pai morreu quando ele tinha dezessete anos, provavelmente por suicídio, deixando-lhe uma herança que garantiu independência financeira pelo resto da vida. A relação com a mãe, que frequentava o círculo de Goethe em Weimar, foi conflituosa até a ruptura definitiva.',
      'O Mundo como Vontade e Representação saiu em 1818, quando ele tinha trinta anos, e foi praticamente ignorado. A tese central parte de Kant: o mundo que conhecemos é representação, organizado pelas formas do nosso entendimento. Mas Schopenhauer acrescenta que temos acesso privilegiado à coisa em si por dentro, através do próprio corpo, e o que encontramos ali é Vontade — um impulso cego, sem finalidade, que atravessa toda a natureza e se manifesta em cada pedra, planta e pessoa.',
      'A consequência é pessimista e rigorosa: o querer é falta, a satisfação é momentânea e o resultado é oscilação entre dor e tédio. As saídas possíveis são a contemplação estética, que suspende temporariamente o querer — com a música em posição privilegiada, por ser expressão direta da Vontade —, a compaixão, que reconhece no outro a mesma essência, e a negação ascética do querer, inspirada no budismo e nos Upanixades, que ele foi um dos primeiros filósofos europeus a levar a sério.',
      'Passou décadas em obscuridade em Frankfurt, com hostilidade declarada a Hegel, então dominante nas universidades. O reconhecimento chegou apenas nos últimos anos de vida, com Parerga e Paralipomena (1851). Morreu em Frankfurt em 21 de setembro de 1860. Sua influência sobre Nietzsche, Wagner, Freud, Thomas Mann e Borges é direta e declarada.'
    ],
    contexto: 'Schopenhauer escreve contra o idealismo alemão de sua época, que via na história o desdobramento racional do espírito. Sua recusa do otimismo histórico e a incorporação de fontes indianas fizeram dele o primeiro grande filósofo europeu a colocar o sofrimento no centro do sistema, e explicam por que só foi lido quando a confiança do século XIX no progresso começou a se abalar.',
    contribuicoes: [
      'Escreveu O Mundo como Vontade e Representação (1818).',
      'Formulou a metafísica da Vontade como impulso cego que atravessa toda a natureza.',
      'Atribuiu à arte, e especialmente à música, a função de suspender temporariamente o querer.',
      'Fundou uma ética baseada na compaixão como reconhecimento da identidade entre os seres.',
      'Foi um dos primeiros filósofos europeus a incorporar seriamente o pensamento indiano e budista.'
    ],
    cronologia: [
      [1788, 'Nasce em Danzigue, em 22 de fevereiro.'],
      [1813, 'Doutora-se com A Quádrupla Raiz do Princípio de Razão Suficiente.'],
      [1818, 'Publica O Mundo como Vontade e Representação.'],
      [1820, 'Leciona em Berlim, em concorrência frustrada com Hegel.'],
      [1851, 'Publica Parerga e Paralipomena, que lhe traz reconhecimento.'],
      [1860, 'Morre em Frankfurt.']
    ]
  },

  'Friedrich Nietzsche': {
    papel: 'Filósofo e filólogo alemão (1844–1900)',
    resumo: 'Diagnosticou a morte de Deus como acontecimento cultural e propôs a transvaloração de todos os valores.',
    bio: [
      'Friedrich Wilhelm Nietzsche nasceu em Röcken, na Prússia, em 15 de outubro de 1844, filho de um pastor luterano que morreu quando ele tinha quatro anos. Foi um prodígio da filologia clássica: obteve cátedra na Universidade da Basileia aos 24 anos, antes de concluir o doutorado. A amizade com Richard Wagner e o entusiasmo por Schopenhauer marcaram sua primeira fase, e ambos terminariam em ruptura.',
      'O Nascimento da Tragédia (1872) propôs a leitura da cultura grega pela tensão entre o apolíneo, princípio de forma e medida, e o dionisíaco, princípio de embriaguez e dissolução — e foi rejeitado pelos filólogos. Problemas graves de saúde o levaram a abandonar a cátedra em 1879. Passou a década seguinte viajando entre pensões modestas na Suíça, na Itália e no sul da França, escrevendo em cadernos e publicando por conta própria com quase nenhum leitor.',
      'Foi nesse período que produziu sua obra decisiva. A Gaia Ciência (1882) traz o anúncio da morte de Deus, entendida não como tese ateísta, mas como diagnóstico: os fundamentos que sustentavam os valores europeus deixaram de ser críveis, e ainda não sabemos o que fazer com isso. Assim Falou Zaratustra apresenta o além-do-homem e o eterno retorno. Genealogia da Moral investiga a origem histórica dos valores morais e distingue a moral aristocrática da moral do ressentimento.',
      'Em janeiro de 1889, em Turim, sofreu um colapso mental do qual nunca se recuperou, passando os onze anos finais sob cuidados da mãe e depois da irmã Elisabeth. Ela editou seus manuscritos com liberdade e aproximou seu nome do nacionalismo e do antissemitismo alemão — orientações que Nietzsche havia atacado explicitamente em vida. A restauração filológica dos textos é obra do século XX. Morreu em Weimar em 25 de agosto de 1900.'
    ],
    contexto: 'Nietzsche escreve na Europa em que a ciência havia dissolvido as certezas religiosas sem substituí-las por outro fundamento. Sua obra é a tentativa mais radical de encarar as consequências disso sem recorrer a consolos. A distorção póstuma de seus textos pela irmã e a apropriação nazista atrasaram por décadas a leitura séria de sua filosofia.',
    contribuicoes: [
      'Formulou o diagnóstico da morte de Deus e do niilismo europeu.',
      'Criou o método genealógico de investigação histórica dos valores morais.',
      'Propôs a distinção entre moral dos senhores e moral do ressentimento.',
      'Formulou os conceitos de vontade de potência, além-do-homem e eterno retorno.',
      'Escreveu O Nascimento da Tragédia, Assim Falou Zaratustra, Além do Bem e do Mal e Genealogia da Moral.'
    ],
    cronologia: [
      [1844, 'Nasce em Röcken, em 15 de outubro.'],
      [1869, 'Assume cátedra na Basileia aos 24 anos.'],
      [1872, 'Publica O Nascimento da Tragédia.'],
      [1879, 'Abandona a cátedra por problemas de saúde.'],
      [1882, 'Publica A Gaia Ciência.'],
      [1885, 'Conclui Assim Falou Zaratustra.'],
      [1889, 'Sofre o colapso em Turim.'],
      [1900, 'Morre em Weimar.']
    ],
    nota: 'A compilação póstuma A Vontade de Potência foi organizada pela irmã Elisabeth a partir de fragmentos, sem autorização do autor, e não deve ser tratada como obra concluída de Nietzsche.'
  },

  'Immanuel Kant': {
    papel: 'Filósofo alemão (1724–1804)',
    resumo: 'Reformulou a filosofia ao mostrar que a mente não copia o mundo, mas o organiza, e fundou a ética no dever e na autonomia.',
    bio: [
      'Immanuel Kant nasceu em Königsberg, na Prússia Oriental, em 22 de abril de 1724, numa família pietista de artesãos. Viveu praticamente toda a vida na mesma cidade, com rotina tão regular que se tornou anedota local. Foi preceptor particular antes de obter cátedra na universidade aos 46 anos, e publicou sua obra decisiva já perto dos sessenta.',
      'A Crítica da Razão Pura (1781) executa o que ele chamou de revolução copernicana na filosofia. Em vez de perguntar como o conhecimento se ajusta aos objetos, pergunta como os objetos se ajustam às condições do nosso conhecer. Espaço e tempo não são propriedades das coisas, e sim formas da sensibilidade; causalidade e substância são categorias do entendimento. Conhecemos o fenômeno, nunca a coisa em si. Com isso Kant responde simultaneamente ao ceticismo de Hume e ao dogmatismo racionalista.',
      'Na Fundamentação da Metafísica dos Costumes (1785) e na Crítica da Razão Prática (1788), funda a moral não em consequências nem em desejos, mas na forma da lei que uma vontade racional dá a si mesma. O imperativo categórico exige agir apenas segundo a máxima que se possa querer como lei universal, e tratar a humanidade sempre também como fim, jamais apenas como meio. A Crítica do Juízo (1790) trata do belo, do sublime e da finalidade na natureza.',
      'Escreveu ainda Resposta à Pergunta: O Que é o Esclarecimento? (1784), que define a maioridade intelectual como a coragem de servir-se do próprio entendimento, e À Paz Perpétua (1795), esboço de uma federação de repúblicas que influenciaria o direito internacional moderno. Morreu em Königsberg em 12 de fevereiro de 1804.'
    ],
    contexto: 'Kant escreve no auge do Iluminismo, entre a física de Newton, que parecia estabelecer verdade necessária sobre a natureza, e o ceticismo de Hume, que negava fundamento à causalidade. Sua solução salva a ciência e limita a metafísica, e é o ponto a partir do qual praticamente toda a filosofia posterior precisa se posicionar.',
    contribuicoes: [
      'Escreveu a Crítica da Razão Pura, a Crítica da Razão Prática e a Crítica do Juízo.',
      'Formulou a revolução copernicana na teoria do conhecimento.',
      'Estabeleceu a distinção entre fenômeno e coisa em si.',
      'Formulou o imperativo categórico e a ética da autonomia.',
      'Definiu o Esclarecimento como saída da menoridade intelectual.',
      'Esboçou em À Paz Perpétua as bases do direito internacional e das federações de estados livres.'
    ],
    cronologia: [
      [1724, 'Nasce em Königsberg, em 22 de abril.'],
      [1770, 'Obtém a cátedra de lógica e metafísica.'],
      [1781, 'Publica a Crítica da Razão Pura.'],
      [1784, 'Publica o ensaio sobre o Esclarecimento.'],
      [1785, 'Publica a Fundamentação da Metafísica dos Costumes.'],
      [1790, 'Publica a Crítica do Juízo.'],
      [1795, 'Publica À Paz Perpétua.'],
      [1804, 'Morre em Königsberg.']
    ]
  },

  'Søren Kierkegaard': {
    papel: 'Filósofo e teólogo dinamarquês (1813–1855)',
    resumo: 'Colocou a existência concreta do indivíduo no centro da filosofia e é considerado o pai do existencialismo.',
    bio: [
      'Søren Aabye Kierkegaard nasceu em Copenhague em 5 de maio de 1813, o mais novo de sete filhos de um comerciante rico e profundamente melancólico, convencido de estar sob maldição divina. Cinco dos irmãos morreram antes de Søren completar 21 anos. Estudou teologia e filosofia, e o rompimento do noivado com Regine Olsen, em 1841, tornou-se uma ferida e um motivo recorrente de sua obra.',
      'Publicou grande parte dos livros sob pseudônimos — Johannes de Silentio, Victor Eremita, Johannes Climacus, Anti-Climacus — cada um encarnando uma posição existencial diferente. Não era artifício decorativo: a forma correspondia à tese de que a verdade que importa não pode ser transmitida como resultado, apenas apropriada subjetivamente por quem a vive.',
      'Em Ou-Ou (1843) contrapõe o estágio estético, da busca imediata do prazer, ao ético, do compromisso e do dever. Em Temor e Tremor, do mesmo ano, examina o sacrifício de Isaac para mostrar que a fé exige uma suspensão do ético que a razão não pode justificar. O Conceito de Angústia (1844) analisa a angústia como a vertigem da liberdade diante da possibilidade. O Desespero Humano descreve o desespero como doença que consiste em não querer ser quem se é.',
      'Nos últimos anos travou uma polêmica pública violenta contra a Igreja dinamarquesa oficial, acusando-a de ter transformado o cristianismo em conveniência social. Morreu em Copenhague em 11 de novembro de 1855, aos 42 anos, tendo gasto quase toda a herança paterna na publicação da própria obra. Foi lido por poucos em vida e tornou-se central para Heidegger, Sartre, Camus, Buber e a teologia do século XX.'
    ],
    contexto: 'Kierkegaard escreve contra o sistema hegeliano, que subordinava o indivíduo ao desenvolvimento do espírito universal. Sua reação — insistir que existir é sempre existir singularmente, com decisão, angústia e risco — inaugura a linhagem existencial que dominaria a filosofia europeia um século depois.',
    contribuicoes: ['Fundou a linhagem de pensamento que originaria o existencialismo.', 'Formulou os três estágios da existência: estético, ético e religioso.', 'Analisou a angústia como vertigem da liberdade em O Conceito de Angústia.', 'Desenvolveu o método da comunicação indireta por meio de pseudônimos.', 'Formulou o salto de fé como decisão que a razão não pode fundamentar.'],
    cronologia: [
      [1813, 'Nasce em Copenhague, em 5 de maio.'],
      [1841, 'Rompe o noivado com Regine Olsen.'],
      [1843, 'Publica Ou-Ou e Temor e Tremor.'],
      [1844, 'Publica O Conceito de Angústia.'],
      [1849, 'Publica O Desespero Humano.'],
      [1855, 'Morre em Copenhague, aos 42 anos.']
    ]
  },

  'Albert Camus': {
    papel: 'Escritor e filósofo francês nascido na Argélia (1913–1960)',
    resumo: 'Formulou a filosofia do absurdo e da revolta, e recebeu o Nobel de Literatura aos 44 anos.',
    bio: [
      'Albert Camus nasceu em Mondovi, na Argélia francesa, em 7 de novembro de 1913. O pai morreu na Batalha do Marne quando ele tinha menos de um ano, e a mãe, faxineira analfabeta e parcialmente surda, criou os filhos em extrema pobreza em Argel. Um professor primário, Louis Germain, insistiu para que continuasse os estudos — Camus lhe dedicaria o discurso do Nobel. A tuberculose contraída aos dezessete anos encerrou sua carreira no futebol e o acompanharia pela vida.',
      'Trabalhou como jornalista em Argel, denunciando as condições de vida da população muçulmana, e depois em Paris. Durante a ocupação alemã, integrou a Resistência e dirigiu o jornal clandestino Combat. Em 1942 publicou simultaneamente O Estrangeiro e O Mito de Sísifo, que formam com a peça Calígula o que chamou de ciclo do absurdo.',
      'O absurdo, para Camus, não está no mundo nem no homem, mas no confronto entre a exigência humana de sentido e o silêncio do universo. A resposta não é o suicídio nem o salto religioso, mas a revolta lúcida: viver sem apelação, esgotando o presente. Sísico, condenado a rolar eternamente a pedra, deve ser imaginado feliz porque a consciência de seu destino é sua vitória sobre ele.',
      'O ciclo seguinte, da revolta, inclui A Peste (1947) e O Homem Revoltado (1951). Este último, ao criticar a justificação da violência política pelo fim histórico, provocou a ruptura pública com Jean-Paul Sartre. Sua posição sobre a guerra da Argélia, recusando tanto o colonialismo quanto o terrorismo, isolou-o dos dois lados. Recebeu o Nobel de Literatura em 1957 e morreu em um acidente de carro em 4 de janeiro de 1960, aos 46 anos, com um manuscrito inacabado na bagagem, publicado depois como O Primeiro Homem.'
    ],
    contexto: 'Camus escreve durante e depois da ocupação nazista e no início da Guerra Fria, quando a intelectualidade francesa se dividia entre engajamentos totais. Sua insistência em recusar a violência como instrumento político, mesmo quando justificada por causas que ele apoiava, é a razão de seu isolamento na época e de sua revalorização posterior.',
    contribuicoes: ['Formulou a filosofia do absurdo em O Mito de Sísifo (1942).', 'Escreveu O Estrangeiro (1942) e A Peste (1947), obras centrais da literatura do século XX.', 'Desenvolveu em O Homem Revoltado (1951) a crítica à justificação da violência pelo fim histórico.', 'Dirigiu o jornal Combat durante a Resistência francesa.', 'Recebeu o Prêmio Nobel de Literatura em 1957.'],
    cronologia: [
      [1913, 'Nasce em Mondovi, Argélia, em 7 de novembro.'],
      [1942, 'Publica O Estrangeiro e O Mito de Sísifo.'],
      [1943, 'Passa a dirigir o jornal clandestino Combat.'],
      [1947, 'Publica A Peste.'],
      [1951, 'Publica O Homem Revoltado e rompe com Sartre.'],
      [1957, 'Recebe o Nobel de Literatura.'],
      [1960, 'Morre em acidente de carro, em 4 de janeiro.']
    ]
  },

  'Hannah Arendt': {
    papel: 'Filósofa política alemã naturalizada norte-americana (1906–1975)',
    resumo: 'Analisou as origens do totalitarismo e formulou a banalidade do mal ao cobrir o julgamento de Eichmann.',
    bio: [
      'Hannah Arendt nasceu em Linden, na Alemanha, em 14 de outubro de 1906, em família judaica assimilada. Estudou filosofia em Marburgo com Martin Heidegger, com quem teve uma relação que se tornaria fonte de controvérsia duradoura, e doutorou-se em Heidelberg sob Karl Jaspers. Com a ascensão nazista, foi presa brevemente pela Gestapo em 1933 e fugiu para Paris, onde trabalhou com organizações de auxílio a refugiados judeus. Internada em 1940 no campo de Gurs, escapou e chegou aos Estados Unidos em 1941.',
      'As Origens do Totalitarismo (1951) analisa o nazismo e o stalinismo como um fenômeno político inédito, distinto da tirania clássica. Arendt argumenta que o totalitarismo se apoia no antissemitismo e no imperialismo, destrói a esfera pública, produz massas atomizadas e tem como objetivo não o controle da ação, mas a eliminação da espontaneidade humana.',
      'A Condição Humana (1958) distingue três atividades: o labor, ligado à sobrevivência biológica; o trabalho, que produz o mundo artificial e durável; e a ação, o único âmbito em que aparecemos como seres singulares diante dos outros, e que constitui a política. Arendt sustenta que a modernidade inverteu essa hierarquia e reduziu a política à administração de necessidades.',
      'Cobriu para a revista The New Yorker o julgamento de Adolf Eichmann em Jerusalém, em 1961. Eichmann em Jerusalém (1963) descreve o funcionário nazista não como monstro ideológico, mas como burocrata incapaz de pensar a partir do ponto de vista de outra pessoa — a expressão banalidade do mal, que gerou uma das polêmicas intelectuais mais duras do século e foi amplamente mal interpretada. Lecionou em várias universidades americanas e morreu em Nova York em 4 de dezembro de 1975, deixando inacabada A Vida do Espírito.'
    ],
    contexto: 'Arendt pensa a partir da experiência direta do refugiado apátrida e da destruição da política pelo terror. Sua obra recusa tanto as explicações economicistas quanto as psicológicas do totalitarismo e insiste em categorias propriamente políticas — pluralidade, aparecimento público, natalidade — que reintroduziu na filosofia contemporânea.',
    contribuicoes: ['Escreveu As Origens do Totalitarismo (1951).', 'Formulou em A Condição Humana a distinção entre labor, trabalho e ação.', 'Cunhou a expressão banalidade do mal ao analisar o julgamento de Eichmann.', 'Analisou a condição dos apátridas e a fragilidade dos direitos humanos sem cidadania.', 'Escreveu Sobre a Revolução (1963), comparando as revoluções americana e francesa.'],
    cronologia: [
      [1906, 'Nasce em Linden, em 14 de outubro.'],
      [1933, 'É presa pela Gestapo e foge da Alemanha.'],
      [1941, 'Chega aos Estados Unidos.'],
      [1951, 'Publica As Origens do Totalitarismo.'],
      [1958, 'Publica A Condição Humana.'],
      [1961, 'Cobre o julgamento de Eichmann em Jerusalém.'],
      [1963, 'Publica Eichmann em Jerusalém e Sobre a Revolução.'],
      [1975, 'Morre em Nova York.']
    ]
  },

  'Bertrand Russell': {
    papel: 'Filósofo, matemático e ativista britânico (1872–1970)',
    resumo: 'Refundou a lógica matemática, popularizou a filosofia e foi preso duas vezes por suas posições pacifistas.',
    bio: [
      'Bertrand Arthur William Russell nasceu em Trellech, no País de Gales, em 18 de maio de 1872, numa das famílias aristocráticas mais influentes da Grã-Bretanha; o avô fora primeiro-ministro. Órfão aos quatro anos, foi criado pela avó em ambiente austero e educado em casa. Estudou matemática e filosofia em Cambridge.',
      'Com Alfred North Whitehead escreveu os três volumes do Principia Mathematica (1910-1913), tentativa monumental de derivar toda a matemática de princípios lógicos. O projeto foi abalado pelo paradoxo que o próprio Russell havia descoberto na teoria dos conjuntos e depois pelos teoremas de incompletude de Gödel, mas transformou a lógica e é uma das bases da filosofia analítica e da ciência da computação.',
      'Foi professor de Ludwig Wittgenstein e um dos fundadores do atomismo lógico. Sua Teoria das Descrições, apresentada em 1905, tornou-se modelo de análise filosófica pela linguagem. Escreveu também para o grande público: História da Filosofia Ocidental (1945) e Os Problemas da Filosofia continuam entre as introduções mais lidas da área.',
      'Sua vida pública foi tão intensa quanto a acadêmica. Perdeu o cargo em Cambridge e foi preso por seis meses em 1918 por oposição à Primeira Guerra. Voltou a ser preso, aos 89 anos, por participar de protestos contra armas nucleares. Redigiu com Einstein, em 1955, o manifesto que alertava a humanidade sobre o risco nuclear. Recebeu o Nobel de Literatura em 1950 por seus escritos humanistas. Morreu no País de Gales em 2 de fevereiro de 1970, aos 97 anos.'
    ],
    contexto: 'Russell atravessou de ponta a ponta a transformação da filosofia no século XX, da lógica formal ao debate público sobre a bomba atômica. Sua trajetória é a de alguém que aplicou o mesmo ceticismo rigoroso à matemática, à religião, à moral sexual e à política, o que lhe custou empregos e liberdade em mais de uma ocasião.',
    contribuicoes: [
      'Escreveu com Whitehead o Principia Mathematica, marco da lógica moderna.',
      'Descobriu o paradoxo que leva seu nome na teoria dos conjuntos.',
      'Formulou a Teoria das Descrições, modelo da análise filosófica pela linguagem.',
      'Escreveu História da Filosofia Ocidental (1945).',
      'Redigiu com Einstein o Manifesto Russell-Einstein contra as armas nucleares.',
      'Recebeu o Prêmio Nobel de Literatura em 1950.'
    ],
    cronologia: [
      [1872, 'Nasce em Trellech, em 18 de maio.'],
      [1901, 'Descobre o paradoxo da teoria dos conjuntos.'],
      [1905, 'Publica Sobre a Denotação, com a Teoria das Descrições.'],
      [1910, 'Publica o primeiro volume do Principia Mathematica.'],
      [1918, 'É preso por oposição à Primeira Guerra.'],
      [1945, 'Publica História da Filosofia Ocidental.'],
      [1950, 'Recebe o Nobel de Literatura.'],
      [1955, 'Assina com Einstein o manifesto contra armas nucleares.'],
      [1970, 'Morre no País de Gales.']
    ]
  },

  'Jean-Jacques Rousseau': {
    papel: 'Filósofo genebrino (1712–1778)',
    resumo: 'Escreveu que o homem nasce livre e em toda parte está acorrentado, e teve os livros queimados por isso.',
    bio: [
      'Jean-Jacques Rousseau nasceu em Genebra em 28 de junho de 1712. A mãe morreu no parto e o pai o abandonou aos dez anos. Foi aprendiz de gravador, fugiu da cidade aos dezesseis e passou anos como criado, secretário, copista de partituras e professor de música, com formação inteiramente autodidata.',
      'Projetou-se em 1750 com o Discurso sobre as Ciências e as Artes, resposta premiada a um concurso, em que sustentou que o progresso das artes e das ciências havia corrompido os costumes em vez de aperfeiçoá-los. O Discurso sobre a Origem da Desigualdade (1755) foi adiante: o homem no estado de natureza não era mau nem bom no sentido moral, e foi a instituição da propriedade privada que introduziu a desigualdade, a dominação e a guerra.',
      'Em 1762 publicou suas duas obras decisivas. O Contrato Social propõe que a legitimidade política só pode nascer de um pacto em que cada um se submete à vontade geral e permanece, por isso, livre; o povo é soberano e a soberania é inalienável. Emílio, ou Da Educação, propõe uma pedagogia que respeita as etapas do desenvolvimento da criança em vez de tratá-la como adulto em miniatura. Ambos foram condenados e queimados em Paris e em Genebra, e Rousseau passou anos foragido.',
      'Escreveu ainda o romance Júlia ou a Nova Heloísa, enorme sucesso de público, e as Confissões, autobiografia de franqueza inédita que inaugura um gênero. Sua vida pessoal contrasta duramente com sua obra pedagógica: entregou os cinco filhos a um orfanato. Morreu em Ermenonville em 2 de julho de 1778. Suas ideias atravessam a Revolução Francesa, o Romantismo e a pedagogia moderna.'
    ],
    contexto: 'Rousseau é o dissidente dentro do Iluminismo: partilha a crítica ao absolutismo e à Igreja, mas recusa a fé no progresso técnico e na razão calculadora que unia Voltaire, Diderot e os enciclopedistas. Essa posição isolada explica seus conflitos com os contemporâneos e a amplitude de sua influência posterior, que vai da democracia radical ao Romantismo.',
    contribuicoes: [
      'Escreveu O Contrato Social (1762), formulando a soberania popular e a vontade geral.',
      'Escreveu Emílio (1762), fundador da pedagogia moderna centrada na criança.',
      'Formulou no Discurso sobre a Desigualdade a crítica à propriedade como origem da dominação.',
      'Inaugurou com as Confissões a autobiografia moderna.',
      'Influenciou diretamente a Revolução Francesa e o Romantismo.'
    ],
    cronologia: [
      [1712, 'Nasce em Genebra, em 28 de junho.'],
      [1750, 'Publica o Discurso sobre as Ciências e as Artes.'],
      [1755, 'Publica o Discurso sobre a Origem da Desigualdade.'],
      [1761, 'Publica Júlia ou a Nova Heloísa.'],
      [1762, 'Publica O Contrato Social e Emílio; ambos são condenados e queimados.'],
      [1778, 'Morre em Ermenonville.'],
      [1782, 'As Confissões são publicadas postumamente.']
    ]
  },

  'Erich Fromm': {
    papel: 'Psicanalista e filósofo social alemão-americano (1900–1980)',
    resumo: 'Uniu psicanálise e teoria social para explicar por que pessoas comuns abrem mão da liberdade.',
    bio: [
      'Erich Seligmann Fromm nasceu em Frankfurt em 23 de março de 1900, filho único de uma família judaica ortodoxa. Doutorou-se em sociologia em Heidelberg e formou-se em psicanálise em Berlim. Integrou o Instituto de Pesquisa Social de Frankfurt, onde participou de estudos empíricos pioneiros sobre a personalidade autoritária entre trabalhadores alemães antes da ascensão nazista. Emigrou para os Estados Unidos em 1934.',
      'O Medo à Liberdade (1941) é sua obra decisiva. Fromm pergunta por que sociedades modernas, tendo conquistado liberdade em relação a laços tradicionais, produziram movimentos que a entregaram voluntariamente. A resposta: a liberdade negativa, sem vínculos que deem sentido, gera isolamento e insegurança, e as pessoas buscam alívio em mecanismos de fuga — autoritarismo, destrutividade e conformismo automático.',
      'A Arte de Amar (1956) sustenta que o amor não é um sentimento que acontece, mas uma prática que exige disciplina, concentração, paciência e conhecimento, e que envolve cuidado, responsabilidade, respeito e conhecimento do outro. O livro vendeu milhões de exemplares e permanece seu texto mais lido.',
      'Em Ter ou Ser (1976) contrapõe dois modos de existência: o da posse, que define a pessoa pelo que acumula, e o do ser, que a define pelo que vivencia e realiza. Fromm rompeu com aspectos centrais da teoria freudiana ao recusar a primazia dos instintos sobre os fatores sociais, e desenvolveu o conceito de caráter social. Foi ativo no movimento pela paz e no socialismo humanista. Morreu em Muralto, na Suíça, em 18 de março de 1980.'
    ],
    contexto: 'Fromm escreve com a experiência direta da ascensão do nazismo na Alemanha e da sociedade de consumo americana. Sua originalidade está em recusar tanto a explicação puramente psicológica quanto a puramente econômica, tratando o caráter individual como formado pela estrutura social em que se desenvolve.',
    contribuicoes: [
      'Escreveu O Medo à Liberdade (1941), sobre os mecanismos de fuga da liberdade.',
      'Escreveu A Arte de Amar (1956), que trata o amor como prática e não como sentimento passivo.',
      'Escreveu Ter ou Ser (1976), sobre os dois modos fundamentais de existência.',
      'Formulou o conceito de caráter social como mediação entre estrutura econômica e personalidade.',
      'Participou dos estudos pioneiros do Instituto de Frankfurt sobre personalidade autoritária.'
    ],
    cronologia: [
      [1900, 'Nasce em Frankfurt, em 23 de março.'],
      [1930, 'Integra o Instituto de Pesquisa Social de Frankfurt.'],
      [1934, 'Emigra para os Estados Unidos.'],
      [1941, 'Publica O Medo à Liberdade.'],
      [1956, 'Publica A Arte de Amar.'],
      [1976, 'Publica Ter ou Ser.'],
      [1980, 'Morre em Muralto, Suíça.']
    ]
  },

  'Paulo Freire': {
    papel: 'Educador e filósofo brasileiro (1921–1997)',
    resumo: 'Criou um método de alfabetização que parte da realidade do aluno e transformou a educação em questão política.',
    bio: [
      'Paulo Reglus Neves Freire nasceu no Recife em 19 de setembro de 1921. A crise de 1929 empobreceu a família, e a experiência da fome na infância foi, segundo ele, o que o levou à educação popular. Formou-se em direito, mas nunca exerceu; trabalhou no SESI de Pernambuco, onde teve contato prolongado com trabalhadores e suas famílias.',
      'Em 1963, em Angicos, no Rio Grande do Norte, aplicou seu método com um grupo de trabalhadores rurais. O procedimento partia de palavras geradoras extraídas do vocabulário e da vida concreta dos alunos — tijolo, salário, enxada — que serviam simultaneamente para o aprendizado das sílabas e para a discussão da condição em que viviam. A experiência ganhou repercussão nacional.',
      'Preso por setenta dias após o golpe de 1964 e acusado de subversão, exilou-se. Passou pela Bolívia e pelo Chile, trabalhou com a UNESCO e com o Conselho Mundial de Igrejas em Genebra, e atuou em processos de alfabetização em países africanos recém-independentes. Foi no exílio que escreveu Pedagogia do Oprimido (1968), hoje uma das obras de educação mais citadas do mundo.',
      'A tese central opõe a educação bancária, em que o professor deposita conteúdos num aluno tratado como recipiente vazio, à educação problematizadora, em que educador e educando aprendem juntos mediados pelo mundo. Voltou ao Brasil em 1980 com a Lei da Anistia, foi secretário de Educação de São Paulo entre 1989 e 1991 e publicou Pedagogia da Autonomia em 1996. Morreu em São Paulo em 2 de maio de 1997. É patrono da educação brasileira.'
    ],
    contexto: 'Freire formula seu método no Nordeste brasileiro dos anos 1950 e 1960, onde o analfabetismo excluía milhões do direito de voto e a estrutura agrária permanecia intocada. Tratar a alfabetização como leitura do mundo, e não apenas da palavra, era por isso um ato político — e foi lido como tal pelo regime militar.',
    contribuicoes: [
      'Criou o método Paulo Freire de alfabetização de adultos, aplicado pela primeira vez em Angicos em 1963.',
      'Escreveu Pedagogia do Oprimido (1968), uma das obras de educação mais citadas do mundo.',
      'Formulou a crítica à educação bancária e a proposta da educação problematizadora.',
      'Escreveu Pedagogia da Autonomia (1996).',
      'Atuou em programas de alfabetização em países africanos recém-independentes.',
      'É patrono da educação brasileira.'
    ],
    cronologia: [
      [1921, 'Nasce no Recife, em 19 de setembro.'],
      [1963, 'Aplica seu método em Angicos, no Rio Grande do Norte.'],
      [1964, 'É preso por setenta dias e exilado após o golpe militar.'],
      [1968, 'Escreve Pedagogia do Oprimido no exílio.'],
      [1980, 'Retorna ao Brasil com a Lei da Anistia.'],
      [1989, 'Assume a Secretaria de Educação de São Paulo.'],
      [1996, 'Publica Pedagogia da Autonomia.'],
      [1997, 'Morre em São Paulo.']
    ]
  },

  'Fernando Pessoa': {
    papel: 'Poeta e escritor português (1888–1935)',
    resumo: 'Inventou dezenas de outros poetas dentro de si, cada um com biografia, estilo e filosofia próprios.',
    bio: [
      'Fernando António Nogueira Pessoa nasceu em Lisboa em 13 de junho de 1888. Perdeu o pai aos cinco anos e mudou-se com a mãe para Durban, na África do Sul, onde o padrasto era cônsul. Foi educado em inglês e escreveu nessa língua durante toda a vida. Voltou a Lisboa aos dezessete anos e nunca mais saiu, sustentando-se como tradutor de correspondência comercial.',
      'A partir de 1914 desenvolveu o que chamou de heteronímia, distinta do simples pseudônimo. Alberto Caeiro é o mestre, o poeta do olhar direto que recusa o pensamento; Ricardo Reis é o médico monárquico, classicista, que escreve odes horacianas sobre a aceitação do destino; Álvaro de Campos é o engenheiro naval futurista, exaltado e depois desiludido. Cada um tem data de nascimento, formação, aparência e uma obra estilisticamente incompatível com a dos outros.',
      'Publicou pouco em vida: participou das revistas Orpheu e Presença, e o único livro de poesia em português que viu impresso foi Mensagem (1934), sobre a história mítica de Portugal. Deixou uma arca com cerca de vinte e cinco mil documentos, cuja edição continua em curso quase um século depois.',
      'O Livro do Desassossego, atribuído ao semi-heterônimo Bernardo Soares, ajudante de guarda-livros na Baixa lisboeta, foi montado a partir de centenas de fragmentos avulsos e publicado apenas em 1982. Não há uma ordem definitiva, e cada edição é uma proposta de leitura. Morreu em Lisboa em 30 de novembro de 1935, aos 47 anos, de cirrose hepática.'
    ],
    contexto: 'Pessoa escreve num Portugal periférico e em crise, distante dos centros da vanguarda europeia, e responde a isso construindo dentro de si uma literatura inteira com correntes divergentes. A heteronímia não é jogo literário, e sim uma forma de investigar a fragmentação do sujeito moderno — questão que atravessa toda a arte do século XX.',
    contribuicoes: [
      'Criou a heteronímia, com dezenas de autores fictícios dotados de obra, biografia e estilo próprios.',
      'Escreveu, através de Caeiro, Reis e Campos, três das obras poéticas mais importantes da língua portuguesa.',
      'Escreveu O Livro do Desassossego, publicado postumamente.',
      'Publicou Mensagem (1934), único livro de poesia em português editado em vida.',
      'Participou da revista Orpheu, marco do modernismo português.'
    ],
    cronologia: [
      [1888, 'Nasce em Lisboa, em 13 de junho.'],
      [1896, 'Muda-se para Durban, na África do Sul.'],
      [1905, 'Retorna definitivamente a Lisboa.'],
      [1914, 'Cria os heterônimos Caeiro, Reis e Campos.'],
      [1915, 'Participa da revista Orpheu.'],
      [1934, 'Publica Mensagem.'],
      [1935, 'Morre em Lisboa, aos 47 anos.'],
      [1982, 'O Livro do Desassossego é publicado.']
    ]
  },

  'Martin Luther King Jr.': {
    papel: 'Pastor e líder dos direitos civis norte-americano (1929–1968)',
    resumo: 'Liderou a luta contra a segregação racial nos Estados Unidos pela não violência e foi assassinado aos 39 anos.',
    bio: [
      'Michael King Jr. nasceu em Atlanta, Geórgia, em 15 de janeiro de 1929, filho e neto de pastores batistas; o pai mudou o nome de ambos para Martin Luther após uma viagem à Alemanha. Entrou na faculdade aos quinze anos, formou-se em sociologia no Morehouse College e doutorou-se em teologia sistemática na Universidade de Boston. Estudou Gandhi e o conceito de resistência não violenta, que se tornaria o eixo de sua atuação.',
      'Assumiu uma igreja em Montgomery, no Alabama, e em 1955, aos 26 anos, foi escolhido para liderar o boicote aos ônibus da cidade após a prisão de Rosa Parks. O boicote durou 381 dias e terminou com a segregação nos transportes declarada inconstitucional. King fundou em 1957 a Southern Christian Leadership Conference.',
      'Conduziu campanhas em Albany, Birmingham e Selma. Preso em Birmingham em 1963, escreveu nas margens de um jornal a Carta da Cadeia de Birmingham, resposta a clérigos brancos que o acusavam de impaciência e um dos documentos centrais do movimento. Em agosto do mesmo ano, na Marcha sobre Washington, proferiu diante de mais de duzentas mil pessoas o discurso Eu Tenho um Sonho. Recebeu o Nobel da Paz em 1964, aos 35 anos, o mais jovem laureado até então.',
      'Nos últimos anos ampliou a pauta: opôs-se publicamente à Guerra do Vietnã em 1967, o que lhe custou apoios importantes, e organizava a Campanha dos Pobres, voltada à desigualdade econômica. Foi assassinado em Memphis em 4 de abril de 1968, onde apoiava uma greve de garis. Sua atuação foi alvo de vigilância e de tentativas de desmoralização por parte do FBI, hoje documentadas.'
    ],
    contexto: 'King atuou no Sul dos Estados Unidos sob segregação legal, num período em que a Guerra Fria tornava a discriminação racial americana um constrangimento internacional. Sua escolha estratégica pela não violência não era apenas moral: expunha diante das câmeras a violência do sistema e forçava a intervenção federal.',
    contribuicoes: [
      'Liderou o boicote aos ônibus de Montgomery, que derrubou a segregação nos transportes.',
      'Fundou e presidiu a Southern Christian Leadership Conference.',
      'Escreveu a Carta da Cadeia de Birmingham (1963).',
      'Proferiu o discurso Eu Tenho um Sonho na Marcha sobre Washington.',
      'Sua mobilização foi decisiva para a Lei dos Direitos Civis de 1964 e a Lei do Direito ao Voto de 1965.',
      'Recebeu o Prêmio Nobel da Paz em 1964.'
    ],
    cronologia: [
      [1929, 'Nasce em Atlanta, em 15 de janeiro.'],
      [1955, 'Lidera o boicote aos ônibus de Montgomery.'],
      [1957, 'Funda a Southern Christian Leadership Conference.'],
      [1963, 'Escreve a Carta da Cadeia de Birmingham e discursa na Marcha sobre Washington.'],
      [1964, 'Recebe o Nobel da Paz.'],
      [1965, 'Lidera as marchas de Selma a Montgomery.'],
      [1967, 'Discursa contra a Guerra do Vietnã.'],
      [1968, 'É assassinado em Memphis, em 4 de abril.']
    ]
  },

  'Maya Angelou': {
    papel: 'Escritora e ativista norte-americana (1928–2014)',
    resumo: 'Transformou uma infância de violência e silêncio em uma das obras autobiográficas mais lidas do século XX.',
    bio: [
      'Marguerite Annie Johnson nasceu em St. Louis, Missouri, em 4 de abril de 1928. Foi criada em Stamps, no Arkansas, pela avó paterna, numa cidade sob segregação estrita. Aos sete anos foi estuprada por um namorado da mãe; após o depoimento que levou à condenação e à morte violenta do agressor, deixou de falar por quase cinco anos, convencida de que sua voz havia matado. Foi uma professora, Bertha Flowers, que a reaproximou da linguagem através da leitura em voz alta.',
      'Teve uma juventude de trabalhos variados: foi a primeira mulher negra condutora de bonde em São Francisco, mãe aos dezessete anos, cozinheira, dançarina e cantora de calipso. Viveu no Egito e em Gana, trabalhou como jornalista e editora e conviveu com Malcolm X e Martin Luther King Jr., participando ativamente do movimento pelos direitos civis.',
      'Eu Sei Por Que o Pássaro Canta na Gaiola, publicado em 1969, foi o primeiro de sete volumes autobiográficos e tornou-se um dos livros mais lidos e também mais censurados das escolas americanas, por tratar abertamente de estupro e racismo. Escreveu também poesia, ensaios, roteiros e peças, e foi indicada ao Pulitzer pela coletânea de poemas Just Give Me a Cool Drink of Water \u2018fore I Diiie.',
      'Em 1993 recitou o poema On the Pulse of Morning na posse de Bill Clinton, tornando-se a primeira poeta a ler numa cerimônia presidencial desde Robert Frost. Recebeu a Medalha Presidencial da Liberdade em 2011 e lecionou por décadas na Wake Forest University. Morreu em Winston-Salem em 28 de maio de 2014.'
    ],
    contexto: 'Angelou escreve no momento em que a autobiografia de autoria negra deixava de ser apenas testemunho e passava a ser reconhecida como literatura. Sua obra fez essa transição de forma explícita: usa técnicas de ficção — diálogo, construção de cena, arco narrativo — mantendo o compromisso com o fato vivido.',
    contribuicoes: [
      'Escreveu Eu Sei Por Que o Pássaro Canta na Gaiola (1969) e mais seis volumes autobiográficos.',
      'Elevou a autobiografia negra americana à condição de forma literária plena.',
      'Recitou On the Pulse of Morning na posse presidencial de 1993.',
      'Atuou no movimento pelos direitos civis ao lado de Malcolm X e Martin Luther King Jr.',
      'Recebeu a Medalha Presidencial da Liberdade em 2011.'
    ],
    cronologia: [
      [1928, 'Nasce em St. Louis, em 4 de abril.'],
      [1969, 'Publica Eu Sei Por Que o Pássaro Canta na Gaiola.'],
      [1971, 'Publica a coletânea de poemas indicada ao Pulitzer.'],
      [1981, 'Assume cátedra vitalícia na Wake Forest University.'],
      [1993, 'Recita na posse de Bill Clinton.'],
      [2011, 'Recebe a Medalha Presidencial da Liberdade.'],
      [2014, 'Morre em Winston-Salem.']
    ]
  },

  'Steve Jobs': {
    papel: 'Empresário norte-americano (1955–2011)',
    resumo: 'Cofundou a Apple, foi expulso da própria empresa, voltou e a transformou na mais valiosa do mundo.',
    bio: [
      'Steven Paul Jobs nasceu em São Francisco em 24 de fevereiro de 1955 e foi adotado por Paul e Clara Jobs. Abandonou o Reed College após um semestre, mas continuou assistindo informalmente a aulas, entre elas um curso de caligrafia que citaria décadas depois como origem da atenção da Apple à tipografia. Viajou pela Índia e manteve interesse duradouro pelo zen-budismo.',
      'Fundou a Apple em 1976 com Steve Wozniak, que projetava as máquinas enquanto Jobs cuidava da visão do produto e da comercialização. O Apple II foi um dos primeiros computadores pessoais de sucesso em massa. Após visitar o centro de pesquisa da Xerox em Palo Alto, incorporou ao Macintosh, lançado em 1984, a interface gráfica e o mouse — decisão que definiu como computadores seriam usados dali em diante.',
      'Foi afastado da Apple em 1985 após conflitos internos. Fundou a NeXT e comprou a divisão de computação gráfica da Lucasfilm, que se tornaria a Pixar, produtora de Toy Story, o primeiro longa inteiramente em computação gráfica. A Apple comprou a NeXT em 1996, e Jobs voltou no ano seguinte a uma empresa quase falida.',
      'A segunda passagem produziu o iMac, o iPod, a loja iTunes, o iPhone e o iPad, além das lojas físicas da marca. O iPhone, apresentado em 2007, reorganizou simultaneamente as indústrias de telefonia, música, fotografia e software. Diagnosticado com um tumor neuroendócrino no pâncreas em 2003, morreu em Palo Alto em 5 de outubro de 2011, aos 56 anos.'
    ],
    contexto:
      'Jobs atua nas duas grandes transições da computação: da máquina institucional ao computador pessoal, e do computador pessoal ao dispositivo móvel. Seu método — integração vertical de hardware, software e serviços, com controle rígido da experiência — era contrário ao consenso da indústria e é a razão tanto do sucesso quanto das críticas de que sua liderança era autoritária e difícil.',
    contribuicoes: [
      'Cofundou a Apple e lançou o Apple II, um dos primeiros computadores pessoais de sucesso.',
      'Levou a interface gráfica e o mouse ao mercado de massa com o Macintosh.',
      'Conduziu a Pixar, que produziu o primeiro longa-metragem inteiramente em computação gráfica.',
      'Lançou o iPod e a loja iTunes, reorganizando a indústria da música.',
      'Apresentou o iPhone em 2007, redefinindo o telefone celular e a computação móvel.'
    ],
    cronologia: [
      [1955, 'Nasce em São Francisco, em 24 de fevereiro.'],
      [1976, 'Funda a Apple com Steve Wozniak.'],
      [1984, 'Lança o Macintosh.'],
      [1985, 'É afastado da Apple e funda a NeXT.'],
      [1986, 'Compra a divisão que se tornaria a Pixar.'],
      [1997, 'Retorna ao comando da Apple.'],
      [2001, 'Lança o iPod.'],
      [2007, 'Apresenta o iPhone.'],
      [2011, 'Morre em Palo Alto.']
    ]
  },

  'Nelson Mandela': {
    papel: 'Advogado e político sul-africano, presidente da África do Sul (1918–2013)',
    resumo: 'Passou 27 anos preso e saiu para negociar o fim do apartheid sem guerra civil.',
    bio: [
      'Nelson Rolihlahla Mandela nasceu em Mvezo, no Transkei, em 18 de julho de 1918, em família da realeza thembu. Estudou direito e abriu em Joanesburgo, com Oliver Tambo, o primeiro escritório de advocacia formado por negros na África do Sul. Ingressou no Congresso Nacional Africano e ajudou a fundar sua Liga da Juventude.',
      'Após o massacre de Sharpeville em 1960 e a proibição do CNA, participou da criação do braço armado da organização, defendendo a sabotagem a instalações do Estado. Foi preso em 1962 e condenado à prisão perpétua no Julgamento de Rivonia, em 1964, após um discurso em que declarou estar preparado para morrer pelo ideal de uma sociedade livre e democrática.',
      'Passou dezoito dos vinte e sete anos de prisão na ilha de Robben, quebrando pedras numa pedreira de cal que lhe danificou a vista. Recusou repetidas ofertas de liberdade condicionada à renúncia à luta armada. Sua figura tornou-se o centro de uma campanha internacional de sanções e isolamento do regime.',
      'Libertado em 11 de fevereiro de 1990, negociou com o presidente F. W. de Klerk a transição — processo que os dois conduziram sob risco constante de colapso e de guerra civil, e que lhes rendeu o Nobel da Paz de 1993. Foi eleito presidente em 1994, nas primeiras eleições multirraciais do país, e instituiu a Comissão da Verdade e Reconciliação, que priorizou o esclarecimento dos crimes do apartheid sobre a punição. Não disputou a reeleição e deixou o cargo em 1999. Morreu em Joanesburgo em 5 de dezembro de 2013.'
    ],
    contexto: 'Mandela conduziu uma transição que praticamente todos os analistas previam terminar em guerra civil. A escolha pela negociação e pela reconciliação, mantendo a estrutura institucional do país, é o que distingue o caso sul-africano de outras descolonizações violentas — e também a origem da crítica de que a desigualdade econômica do apartheid permaneceu em grande parte intocada.',
    contribuicoes: ['Liderou a resistência ao apartheid dentro e fora da prisão por mais de meio século.', 'Negociou com F. W. de Klerk a transição pacífica para a democracia multirracial.', 'Foi o primeiro presidente negro da África do Sul, eleito em 1994.', 'Instituiu a Comissão da Verdade e Reconciliação.', 'Recebeu o Prêmio Nobel da Paz em 1993.'],
    cronologia: [
      [1918, 'Nasce em Mvezo, em 18 de julho.'],
      [1944, 'Ajuda a fundar a Liga da Juventude do CNA.'],
      [1964, 'É condenado à prisão perpétua no Julgamento de Rivonia.'],
      [1990, 'É libertado após 27 anos de prisão.'],
      [1993, 'Recebe o Nobel da Paz com F. W. de Klerk.'],
      [1994, 'É eleito presidente da África do Sul.'],
      [1999, 'Deixa a presidência sem disputar a reeleição.'],
      [2013, 'Morre em Joanesburgo.']
    ]
  },

  'Warren Buffett': {
    papel: 'Investidor e empresário norte-americano (1930–)',
    resumo: 'Construiu uma das maiores fortunas do mundo com paciência, juros compostos e recusa em investir no que não entende.',
    bio: [
      'Warren Edward Buffett nasceu em Omaha, Nebraska, em 30 de agosto de 1930, filho de um corretor de valores que se tornou deputado. Comprou sua primeira ação aos onze anos e declarou imposto de renda aos treze, deduzindo a bicicleta usada na entrega de jornais. Foi rejeitado por Harvard e estudou em Columbia especificamente para aprender com Benjamin Graham, autor de O Investidor Inteligente.',
      'De Graham herdou o investimento em valor: comprar empresas por menos do que valem, com margem de segurança, tratando a ação como participação num negócio e não como papel a ser negociado. Charlie Munger, seu sócio por décadas, o convenceu a evoluir dessa busca por barganhas para a compra de empresas excelentes a preços razoáveis.',
      'Assumiu o controle da Berkshire Hathaway em 1965, então uma fábrica têxtil em decadência, e a converteu em holding de investimentos. Comprou participações duradouras em seguradoras, ferrovias, energia e marcas de consumo, usando o fluxo de prêmios das seguradoras como capital de investimento. As cartas anuais que escreve aos acionistas desde os anos 1970 são leitura corrente em escolas de negócios pela clareza com que explicam decisões e erros.',
      'Vive na mesma casa em Omaha desde 1958 e é conhecido pela recusa em investir em setores que não compreende, posição que o manteve fora da bolha das empresas de internet no fim dos anos 1990. Criou com Bill Gates o Giving Pledge e comprometeu-se a doar a quase totalidade da fortuna.'
    ],
    contexto: 'Buffett construiu sua reputação num período em que o mercado financeiro se voltava cada vez mais para operações rápidas e modelos matemáticos complexos. Sua insistência em prazos longos, negócios compreensíveis e leitura de balanços é deliberadamente contrária a esse movimento, e sua permanência no topo por décadas é o principal argumento empírico a favor dela.',
    contribuicoes: ['Transformou a Berkshire Hathaway de fábrica têxtil em uma das maiores holdings do mundo.', 'Consolidou e popularizou o investimento em valor herdado de Benjamin Graham.', 'Suas cartas anuais aos acionistas tornaram-se referência em finanças e governança corporativa.', 'Criou com Bill Gates o Giving Pledge, compromisso público de doação de patrimônio.'],
    cronologia: [
      [1930, 'Nasce em Omaha, em 30 de agosto.'],
      [1951, 'Conclui o mestrado em Columbia sob Benjamin Graham.'],
      [1956, 'Cria a sociedade de investimentos que antecede a Berkshire.'],
      [1965, 'Assume o controle da Berkshire Hathaway.'],
      [1978, 'Charlie Munger torna-se vice-presidente da Berkshire.'],
      [2006, 'Anuncia a doação da maior parte da fortuna.'],
      [2010, 'Cria o Giving Pledge com Bill Gates.']
    ]
  },

  'Dale Carnegie': {
    papel: 'Escritor e conferencista norte-americano (1888–1955)',
    resumo: 'Escreveu o manual de relações humanas mais vendido da história a partir de cursos noturnos para vendedores.',
    bio: [
      'Dale Breckenridge Carnagey nasceu numa fazenda em Maryville, Missouri, em 24 de novembro de 1888, em condições de grande pobreza. Estudou no State Teachers College de Warrensburg, onde participou de competições de oratória — a única atividade em que podia competir sem dinheiro. Foi vendedor de cursos por correspondência, de banha e de caminhões antes de tentar ser ator em Nova York.',
      'Em 1912 começou a dar aulas noturnas de oratória numa filial da ACM em Nova York, remunerado por comissão. As turmas cresceram rapidamente, e ele percebeu que os alunos não buscavam apenas técnica de fala: queriam saber como lidar com pessoas. Mudou o sobrenome para Carnegie, aproximando-o do industrial Andrew Carnegie, e passou a compilar material a partir das próprias aulas.',
      'Como Fazer Amigos e Influenciar Pessoas saiu em 1936, no rescaldo da Grande Depressão, e vendeu milhões de exemplares em poucos anos. Os princípios são práticos e repetíveis: interessar-se sinceramente pelas pessoas, lembrar nomes, ouvir mais do que falar, evitar críticas diretas, deixar que o outro sinta que a ideia é dele. Como Evitar Preocupações e Começar a Viver saiu em 1948.',
      'A crítica recorrente é que o método pode se converter em manipulação instrumental das relações. Carnegie sustentava o contrário, insistindo que o interesse pelo outro precisa ser autêntico para funcionar. Morreu em Forest Hills, Nova York, em 1º de novembro de 1955. Os cursos que criou continuam sendo oferecidos no mundo inteiro.'
    ],
    contexto: 'Carnegie escreve nos Estados Unidos em que a economia se deslocava da produção para os serviços e a venda, e em que milhões de pessoas precisavam se apresentar, negociar e persuadir para trabalhar. Seu livro responde a essa necessidade concreta e inaugura a literatura de habilidades interpessoais.',
    contribuicoes: ['Escreveu Como Fazer Amigos e Influenciar Pessoas (1936), um dos livros de não ficção mais vendidos da história.', 'Escreveu Como Evitar Preocupações e Começar a Viver (1948).', 'Criou o método de treinamento em oratória e relações humanas que leva seu nome, ainda em funcionamento.', 'Estabeleceu o formato do manual prático de habilidades interpessoais.'],
    cronologia: [
      [1888, 'Nasce em Maryville, Missouri, em 24 de novembro.'],
      [1912, 'Começa a dar aulas de oratória em Nova York.'],
      [1936, 'Publica Como Fazer Amigos e Influenciar Pessoas.'],
      [1948, 'Publica Como Evitar Preocupações e Começar a Viver.'],
      [1955, 'Morre em Forest Hills, Nova York.']
    ]
  },

  'Benjamin Graham': {
    papel: 'Economista e investidor britânico-americano (1894–1976)',
    resumo: 'Criou o investimento em valor e a noção de margem de segurança, e foi professor de Warren Buffett.',
    bio: [
      'Benjamin Grossbaum nasceu em Londres em 8 de maio de 1894 e mudou-se com a família para Nova York ainda criança. O pai morreu quando ele tinha nove anos e a família empobreceu rapidamente. Formou-se em Columbia com destaque e recebeu convites para lecionar em três departamentos diferentes; escolheu Wall Street.',
      'Perdeu quase tudo no crash de 1929 e na depressão que se seguiu. A experiência moldou sua obra: em vez de tentar prever o mercado, construiu um método para não depender dele. Com David Dodd publicou Security Analysis em 1934, primeiro tratado sistemático de análise de investimentos baseada em demonstrações financeiras.',
      'O Investidor Inteligente, de 1949, levou o método ao investidor comum. Seus três pilares são a distinção entre investimento e especulação, a margem de segurança — comprar significativamente abaixo do valor intrínseco estimado, para que o erro de avaliação não seja fatal — e a alegoria do Senhor Mercado, um sócio maníaco-depressivo que oferece diariamente preços absurdos para cima ou para baixo, e cujo humor o investidor deve aproveitar, jamais imitar.',
      'Lecionou em Columbia por décadas. Warren Buffett, seu aluno e depois funcionário, chamaria O Investidor Inteligente de melhor livro sobre investimentos já escrito. Morreu em Aix-en-Provence, na França, em 21 de setembro de 1976.'
    ],
    contexto: 'Graham escreve depois do colapso de 1929, quando o mercado americano havia destruído a confiança de uma geração inteira. Sua contribuição foi transformar o investimento de aposta em disciplina analítica, com critérios verificáveis a partir de documentos públicos — mudança que fundou a profissão de analista financeiro.',
    contribuicoes: ['Fundou o investimento em valor como disciplina analítica.', 'Escreveu com David Dodd Security Analysis (1934).', 'Escreveu O Investidor Inteligente (1949).', 'Formulou os conceitos de margem de segurança, valor intrínseco e Senhor Mercado.', 'Foi professor e mentor de Warren Buffett e de outros investidores de destaque.'],
    cronologia: [
      [1894, 'Nasce em Londres, em 8 de maio.'],
      [1928, 'Começa a lecionar em Columbia.'],
      [1929, 'Sofre perdas severas no crash da bolsa.'],
      [1934, 'Publica Security Analysis, com David Dodd.'],
      [1949, 'Publica O Investidor Inteligente.'],
      [1976, 'Morre em Aix-en-Provence.']
    ]
  },

  Cícero: {
    papel: 'Orador, advogado e filósofo romano (106 a.C.–43 a.C.)',
    resumo: 'O maior orador de Roma, salvou a república de uma conspiração e foi morto por ela na guerra civil seguinte.',
    bio: [
      'Marco Túlio Cícero nasceu em Arpino, a sudeste de Roma, em 3 de janeiro de 106 a.C., em família da ordem equestre sem tradição no Senado. Sem ancestrais consulares, construiu a carreira exclusivamente pelo talento como advogado, tornando-se o que os romanos chamavam de homem novo. Estudou retórica e filosofia em Roma, na Grécia e em Rodes.',
      'Projetou-se ao acusar Verres, governador corrupto da Sicília, em 70 a.C., e foi eleito cônsul em 63 a.C. Nesse ano descobriu e desmontou a conspiração de Catilina, proferindo as Catilinárias, entre os discursos mais célebres da Antiguidade. A execução sumária dos conspiradores sem julgamento, decidida sob sua responsabilidade, resultaria em seu exílio anos depois.',
      'Marginalizado politicamente durante a ascensão de César, dedicou-se à filosofia. Escreveu em latim obras que traduziam e reformulavam o pensamento grego para o público romano — Sobre a República, Sobre as Leis, Sobre os Deveres, Sobre a Amizade, Sobre a Velhice, Tusculanas — e nesse processo criou boa parte do vocabulário filosófico latino que a Europa usaria por dois mil anos.',
      'Após o assassinato de César, atacou Marco Antônio numa série de discursos conhecidos como Filípicas. Quando Antônio, Otávio e Lépido formaram o segundo triunvirato, Cícero entrou na lista de proscrição. Foi morto em dezembro de 43 a.C.; a cabeça e as mãos foram expostas no Fórum. Sua prosa tornou-se o modelo do latim clássico, e a redescoberta de suas cartas por Petrarca é um dos marcos iniciais do Renascimento.'
    ],
    contexto: 'Cícero viveu o colapso da república romana e tentou, sem êxito, salvá-la por meios institucionais num momento em que o poder já pertencia a generais com exércitos próprios. Sua obra filosófica, escrita nos intervalos forçados da vida pública, foi o principal canal pelo qual o pensamento grego chegou à Europa medieval e renascentista.',
    contribuicoes: [
      'Foi o maior orador de Roma; suas Catilinárias e Filípicas são modelos clássicos da oratória.',
      'Criou boa parte do vocabulário filosófico latino ao verter conceitos gregos.',
      'Escreveu Sobre os Deveres, Sobre a Amizade, Sobre a Velhice e Sobre a República.',
      'Sua prosa fixou o padrão do latim clássico por dois milênios.',
      'A redescoberta de suas cartas por Petrarca é um marco inicial do humanismo renascentista.'
    ],
    cronologia: [
      ['106 a.C.', 'Nasce em Arpino, em 3 de janeiro.'],
      ['70 a.C.', 'Acusa Verres e projeta-se como advogado.'],
      ['63 a.C.', 'É cônsul e desmonta a conspiração de Catilina.'],
      ['58 a.C.', 'É exilado pela execução sumária dos catilinários.'],
      ['44 a.C.', 'Escreve Sobre os Deveres e inicia as Filípicas.'],
      ['43 a.C.', 'É assassinado durante as proscrições do segundo triunvirato.']
    ]
  }
};

/* aplicação dos panoramas da Fase 9 */
(function aplicarF9() {
  Object.entries(PANORAMAS_F9).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const anterior = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = {
      resumo: p.resumo,
      bio: p.bio,
      contexto: p.contexto,
      contribuicoes: p.contribuicoes || anterior.contribuicoes || [],
      cronologia: p.cronologia || anterior.cronologia || [],
      nota: p.nota || null
    };
    if (p.papel && typeof PAPEIS === 'object' && !PAPEIS[c]) PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
})();

/* ----------------------------------------------------------------
   LIMPEZA DE ÍNDICE
   Depois da remoção das atribuições insustentáveis, alguns nomes
   ficaram sem frase, sem obra e sem biografia. Um nome sozinho não
   é um autor: sai do Explorar em vez de abrir uma página vazia.
   ---------------------------------------------------------------- */
const AUTORES_ESVAZIADOS = [];
(function limparIndice() {
  [...AUTOR_INDEX.keys()].forEach((a) => {
    const info = AUTOR_INDEX.get(a);
    const temFrase = info.frases.length > 0;
    const temObra = (OBRAS[a] || []).length > 0;
    const temBio = !!info.story || !!PERFIS_PROFUNDOS[a];
    if (!temFrase && !temObra && !temBio) {
      AUTOR_INDEX.delete(a);
      AUTORES_ESVAZIADOS.push(a);
    }
  });
})();

/* ----------------------------------------------------------------
   RELATÓRIO FINAL DA EXECUÇÃO
   ---------------------------------------------------------------- */
function CURADORIA_RELATORIO() {
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+/i;
  let loc = 0,
    gen = 0,
    obra = 0,
    sem = 0;
  QUOTES.forEach((q) => {
    const s = q.src || '';
    if (!s) sem++;
    else if (q.fonteGenerica || fonteEhGenerica(s)) gen++;
    else if (LOC.test(s)) loc++;
    else obra++;
  });
  const pessoas = [...AUTOR_INDEX.keys()];
  const r = {
    'Frases no acervo': QUOTES.length,
    'Frases removidas nesta execução': REMOVIDAS_F7.length,
    '— paráfrases declaradas': RELATORIO_FASE8.removidasParafrase,
    '— atribuições populares sem fonte': RELATORIO_FASE8.removidasPopular,
    '— duplicatas': RELATORIO_FASE8.removidasDuplicata,
    'Autorias corrigidas': RELATORIO_FASE8.autoriaCorrigida,
    'Fonte localizada': loc,
    'Só nome da obra': obra,
    'Fonte genérica': gen,
    'Sem fonte (inclui ditados)': sem,
    'Pessoas no Explorar': pessoas.length,
    'Panoramas curados': pessoas.filter((a) => PERFIS_PROFUNDOS[a]).length,
    'Sem panorama': pessoas.filter((a) => !PERFIS_PROFUNDOS[a] && !AUTOR_INDEX.get(a).story).length,
    'Obras catalogadas': Object.values(OBRAS).reduce((s, l) => s + l.length, 0),
    'Obras com descrição nova': RELATORIO_FASE8.descricoes,
    'Nomes retirados por ficarem vazios': AUTORES_ESVAZIADOS.length
  };
  console.table(r);
  return r;
}
window.CURADORIA_RELATORIO = CURADORIA_RELATORIO;
window.AUTORES_ESVAZIADOS = AUTORES_ESVAZIADOS;

(function bootF9() {
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
      /* reaplica a limpeza de índice após a reconstrução */
      [...AUTOR_INDEX.keys()].forEach((a) => {
        const info = AUTOR_INDEX.get(a);
        if (!info.frases.length && !(OBRAS[a] || []).length && !info.story && !PERFIS_PROFUNDOS[a]) AUTOR_INDEX.delete(a);
      });
      if (state && state.view === 'autores' && typeof renderAutoresObras === 'function') renderAutoresObras();
      if (state && state.view === 'panorama' && typeof renderPanorama === 'function') renderPanorama();
      console.info('MeMotiva · Fase 9: ' + RELATORIO_FASE8.panoramas + ' panoramas no total, ' + AUTORES_ESVAZIADOS.length + ' nomes vazios retirados do Explorar.');
    } catch (e) {
      console.error('Fase 9:', e);
    }
  };
})();

/* a fila é recalculada depois de todos os passes, para que o
   checkpoint reflita o estado real do acervo (§17) */
function RECALCULAR_FILA() {
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+/i;
  CURADORIA_FILA.length = 0;
  AUTOR_INDEX.forEach((info, nome) => {
    const qs = info.frases.map((i) => QUOTES[i]).filter(Boolean);
    let gen = 0,
      loc = 0,
      pend = 0;
    qs.forEach((q) => {
      if (q.fonteGenerica || fonteEhGenerica(q.src)) gen++;
      else if (LOC.test(q.src || '')) loc++;
      if (q.st === 'R') pend++;
    });
    const temPan = !!PERFIS_PROFUNDOS[nome];
    CURADORIA_FILA.push({ nome, frases: qs.length, verificaveis: loc, genericas: gen, pendentes: pend, obras: (OBRAS[nome] || []).length, panorama: temPan ? 'curado' : info.story ? 'historia' : 'ausente', concluido: temPan, prioridade: (temPan ? 0 : info.story ? 10 : 20) + Math.min(qs.length, 20) + (gen + pend) * 0.5 });
  });
  CURADORIA_FILA.sort((a, b) => b.prioridade - a.prioridade);
  CURADORIA_FILA.forEach((l, i) => (l.ordem = i + 1));
  return CURADORIA_FILA.length;
}
window.RECALCULAR_FILA = RECALCULAR_FILA;
RECALCULAR_FILA();

/* ================================================================
   FASE 10 — CONTINUAÇÃO DA FILA (autores 140 em diante)
   ================================================================ */
const PANORAMAS_F10 = {
  Aristóteles: {
    papel: 'Filósofo grego (384 a.C.–322 a.C.)',
    resumo: 'Organizou praticamente todo o conhecimento disponível em seu tempo e criou as bases da lógica, da biologia e da ética ocidentais.',
    bio: [
      'Aristóteles nasceu em Estagira, na Calcídica, em 384 a.C. O pai era médico da corte macedônia, o que explica em parte seu interesse duradouro por anatomia e observação empírica. Aos dezessete anos foi para Atenas e permaneceu vinte anos na Academia de Platão, primeiro como aluno, depois como pesquisador.',
      'Deixou Atenas após a morte de Platão e passou anos em Assos e em Lesbos, onde realizou observações sistemáticas de animais marinhos que permaneceriam sem equivalente por quase dois mil anos. Em 343 a.C. foi chamado por Filipe II da Macedônia para educar seu filho, o futuro Alexandre Magno. Voltou a Atenas em 335 a.C. e fundou o Liceu, cuja escola ficou conhecida como peripatética.',
      'Sua ruptura com Platão é o eixo de sua filosofia. Onde o mestre situava a realidade num mundo separado de Formas, Aristóteles a situa nas coisas concretas, compostas de matéria e forma. Investigou a mudança pelas quatro causas — material, formal, eficiente e final — e fundou a lógica formal com a teoria do silogismo, que permaneceu praticamente inalterada até o século XIX.',
      'Na Ética a Nicômaco propõe que o fim da vida humana é a eudaimonia, o florescimento, alcançado pelo exercício habitual da virtude, entendida como meio-termo entre dois excessos. Na Política define o ser humano como animal que vive em cidade e analisa comparativamente constituições reais. Escreveu ainda sobre física, metafísica, retórica, poética, meteorologia, alma e mais de quinhentas espécies animais. Morreu em Cálcis em 322 a.C. Seus textos, transmitidos pelos comentadores árabes — sobretudo Avicena e Averróis — reentraram na Europa no século XIII e estruturaram a filosofia escolástica.'
    ],
    contexto: 'Aristóteles trabalha no momento em que a cidade-Estado grega perdia autonomia para a Macedônia. Sua obra é a primeira tentativa sistemática de dividir o saber em disciplinas com métodos próprios, e essa arquitetura — física, biologia, lógica, ética, política, poética — organizou o ensino ocidental por quase dois milênios.',
    contribuicoes: [
      'Fundou a lógica formal com a teoria do silogismo, dominante até o século XIX.',
      'Criou a biologia como campo de observação sistemática, descrevendo centenas de espécies.',
      'Formulou a teoria das quatro causas e a distinção entre potência e ato.',
      'Escreveu a Ética a Nicômaco, com a doutrina da virtude como meio-termo e da eudaimonia.',
      'Escreveu a Política, primeiro estudo comparado de constituições.',
      'Escreveu a Poética, base da teoria literária ocidental, e a Retórica.'
    ],
    cronologia: [
      ['384 a.C.', 'Nasce em Estagira.'],
      ['367 a.C.', 'Ingressa na Academia de Platão, em Atenas.'],
      ['347 a.C.', 'Deixa Atenas após a morte de Platão.'],
      ['343 a.C.', 'Torna-se preceptor de Alexandre Magno.'],
      ['335 a.C.', 'Funda o Liceu, em Atenas.'],
      ['322 a.C.', 'Morre em Cálcis.']
    ],
    nota: 'A frase sobre excelência como hábito, popularmente atribuída a Aristóteles, é uma síntese escrita por Will Durant em A História da Filosofia (1926).'
  },

  Sêneca: {
    papel: 'Filósofo, dramaturgo e político romano (c. 4 a.C.–65 d.C.)',
    resumo: 'Escreveu sobre serenidade e desprezo pela riqueza enquanto era um dos homens mais ricos e poderosos de Roma.',
    bio: [
      'Lúcio Aneu Sêneca nasceu em Córdoba, na Hispânia, por volta de 4 a.C., filho de Sêneca, o Velho, professor de retórica. Foi levado ainda criança a Roma e teve saúde frágil a vida inteira, com crises respiratórias que descreveu em detalhe nas cartas. Passou anos no Egito recuperando-se e voltou a Roma para fazer carreira no Senado.',
      'Em 41 d.C. foi exilado na Córsega sob acusação de adultério com uma irmã de Calígula, acusação que provavelmente era pretexto político. Passou oito anos na ilha. Agripina o trouxe de volta em 49 para ser preceptor de seu filho Nero, então adolescente. Quando Nero assumiu o poder em 54, Sêneca tornou-se seu principal conselheiro ao lado do prefeito pretoriano Burro, e os primeiros cinco anos do reinado foram considerados pelos antigos um período de bom governo.',
      'A contradição de sua vida é o centro do debate sobre ele desde a Antiguidade. Escreveu contra o luxo enquanto acumulava uma das maiores fortunas do Império, e defendeu a clemência a serviço de um imperador que mandou matar a própria mãe. Tácito registra suas tentativas de se afastar da corte e de devolver seus bens, recusadas por Nero.',
      'Retirou-se por volta de 62 e escreveu nesse período suas obras mais lidas, entre elas as Cartas a Lucílio. Em 65, acusado de participar da conspiração de Pisão, recebeu ordem de suicídio. Tácito descreve uma morte demorada e difícil, com Sêneca ditando aos secretários até o fim. Escreveu também nove tragédias que influenciaram diretamente o teatro elisabetano e Shakespeare.'
    ],
    contexto: 'Sêneca escreve no Império sob os julgo-claudianos, quando a filosofia deixara de ser especulação escolar e passara a funcionar como técnica de sobrevivência psicológica sob poder arbitrário. Sua obra é prática e endereçada — cartas, consolações, tratados dirigidos a alguém — e é essa forma direta que explica sua permanência.',
    contribuicoes: [
      'Escreveu as Cartas a Lucílio, um dos textos mais lidos da tradição estoica.',
      'Escreveu Sobre a Brevidade da Vida, Sobre a Ira, Sobre a Tranquilidade da Alma e Sobre os Benefícios.',
      'Adaptou o estoicismo grego à língua e à experiência romanas, tornando-o filosofia prática.',
      'Escreveu nove tragédias que influenciaram diretamente o teatro renascentista inglês.',
      'Formulou em Sobre a Clemência uma teoria do bom governante dirigida ao imperador.'
    ],
    cronologia: [
      ['c. 4 a.C.', 'Nasce em Córdoba, na Hispânia.'],
      [41, 'É exilado na Córsega.'],
      [49, 'Retorna a Roma como preceptor de Nero.'],
      [54, 'Torna-se conselheiro do imperador.'],
      [62, 'Afasta-se da corte e dedica-se à escrita.'],
      [65, 'Recebe ordem de suicídio após a conspiração de Pisão.']
    ],
    nota: 'A distância entre a doutrina de Sêneca e sua vida como homem riquíssimo e conselheiro de Nero é objeto de debate desde a Antiguidade e integra a leitura de sua obra.'
  },

  'Marco Aurélio': {
    papel: 'Imperador romano e filósofo estoico (121–180)',
    resumo: 'Governou o maior império do mundo e escreveu, só para si mesmo, o livro mais íntimo da filosofia antiga.',
    bio: [
      'Marco Aurélio Antonino nasceu em Roma em 26 de abril de 121, em família senatorial de origem hispânica. Perdeu o pai cedo e foi criado pelo avô. O imperador Adriano notou-o ainda menino e providenciou sua adoção pelo futuro imperador Antonino Pio, colocando-o na linha de sucessão desde a adolescência. Teve formação filosófica esmerada e recebeu de Júnio Rústico uma cópia das preleções de Epicteto, que se tornaria sua referência.',
      'Assumiu o poder em 161 e insistiu em governar em conjunto com o irmão adotivo Lúcio Vero, primeira co-regência da história imperial. O reinado foi quase inteiramente ocupado por crises: guerras contra os partas no oriente, guerras marcomanas ao longo do Danúbio, uma revolta na Síria e a peste antonina, epidemia que matou milhões e chegou a Roma trazida pelas legiões.',
      'As Meditações foram escritas em grego, em acampamentos militares, ao longo dos anos finais. Não eram destinadas à publicação: são anotações de um homem lembrando a si mesmo o que já sabia — que o julgamento sobre as coisas está sob seu controle e os fatos não, que a irritação com os outros é inútil porque também eles agem por ignorância, que a fama póstuma não tem valor porque quem a concede também morre.',
      'Perseguiu cristãos durante seu governo, fato que a tradição posterior frequentemente omite. Escolheu como sucessor o filho Cômodo, decisão que rompeu a sequência de imperadores adotivos e é apontada como início da decadência do período. Morreu em 17 de março de 180, provavelmente em Vindobona, atual Viena, durante a campanha no Danúbio.'
    ],
    contexto: 'Marco Aurélio é a única figura da história a reunir o poder absoluto e a prática filosófica documentada em primeira pessoa. As Meditações não foram escritas para ensinar ninguém, e é justamente a ausência de destinatário que lhes dá a franqueza rara e explica por que o texto atravessou dezoito séculos.',
    contribuicoes: ['Escreveu as Meditações, um dos textos filosóficos mais lidos de todos os tempos.', 'Governou o Império Romano por dezenove anos durante guerras contínuas e uma epidemia devastadora.', 'Aplicou a doutrina estoica de Epicteto à prática do poder, deixando registro em primeira pessoa.', 'Ampliou proteções jurídicas a escravos, viúvas e menores durante seu governo.'],
    cronologia: [
      [121, 'Nasce em Roma, em 26 de abril.'],
      [138, 'É adotado por Antonino Pio, entrando na linha de sucessão.'],
      [161, 'Assume o trono, em co-regência com Lúcio Vero.'],
      [165, 'Início da peste antonina.'],
      [166, 'Início das guerras marcomanas.'],
      [180, 'Morre durante a campanha no Danúbio.']
    ],
    nota: 'Perseguições a cristãos ocorreram durante seu governo, fato registrado nas fontes antigas.'
  },

  Epicteto: {
    papel: 'Filósofo estoico grego (c. 50–c. 135)',
    resumo: 'Nasceu escravizado e formulou a distinção mais influente do estoicismo: o que depende de nós e o que não depende.',
    bio: [
      'Epicteto nasceu por volta do ano 50 em Hierápolis, na Frígia, atual Turquia. O nome que conhecemos significa simplesmente adquirido, o que sugere que não temos registro de seu nome próprio. Foi escravizado em Roma, propriedade de Epafrodito, um liberto que servia na corte de Nero. Tornou-se coxo — fontes antigas divergem se por maus-tratos ou por doença.',
      'Ainda na condição de escravizado, obteve autorização para estudar com o filósofo estoico Musônio Rufo. Foi libertado, provavelmente após a morte de Nero, e passou a ensinar em Roma. Quando o imperador Domiciano expulsou os filósofos da Itália, por volta de 93, mudou-se para Nicópolis, no noroeste da Grécia, onde fundou uma escola que atraiu alunos de todo o Império.',
      'Não escreveu nada. O que sobreviveu foi anotado por seu aluno Flávio Arriano, que preservou as Diatribes e compilou o Manual, resumo breve dos princípios essenciais. A abertura do Manual contém sua tese central: algumas coisas dependem de nós — juízo, impulso, desejo, aversão — e outras não — o corpo, a reputação, os cargos. A confusão entre as duas categorias é a origem de todo sofrimento.',
      'Viveu com extrema simplicidade e recusou-se a fazer da filosofia carreira ou espetáculo. Insistia que a filosofia não é sobre discursar bem, e sim sobre agir de acordo com o que se afirma. Morreu por volta de 135. Marco Aurélio, imperador, tinha suas preleções como leitura de cabeceira.'
    ],
    contexto: 'Epicteto pertence ao estoicismo romano tardio, que abandonou quase por completo a física e a lógica das origens gregas para se concentrar na ética prática. Sua condição de ex-escravizado dá peso concreto à doutrina: quem não controlava nem o próprio corpo tinha razões particulares para localizar a liberdade no juízo.',
    contribuicoes: ['Formulou a distinção entre o que depende de nós e o que não depende, princípio central do estoicismo.', 'Suas preleções, registradas por Arriano, formam as Diatribes e o Manual (Encheirídion).', 'Deslocou o estoicismo definitivamente para a ética prática e o exercício cotidiano.', 'Influenciou diretamente Marco Aurélio e, muito depois, a terapia cognitivo-comportamental.'],
    cronologia: [
      ['c. 50', 'Nasce em Hierápolis, na Frígia.'],
      ['c. 68', 'É libertado da escravidão em Roma.'],
      ['c. 93', 'Deixa a Itália com a expulsão dos filósofos por Domiciano.'],
      ['c. 100', 'Funda sua escola em Nicópolis; Arriano registra as preleções.'],
      ['c. 135', 'Morre em Nicópolis.']
    ],
    nota: 'Epicteto não escreveu nenhuma obra. Todo o texto conhecido foi registrado por seu aluno Arriano.'
  },

  Epicuro: {
    papel: 'Filósofo grego (341 a.C.–270 a.C.)',
    resumo: 'Defendeu que o prazer é ausência de dor e perturbação, e teve a doutrina caluniada por dois mil anos.',
    bio: [
      'Epicuro nasceu na ilha de Samos em 341 a.C., filho de colonos atenienses; o pai era professor primário, profissão de pouco prestígio. Estudou com discípulos de Demócrito e de Platão, rompeu com ambas as tradições e formulou doutrina própria. Por volta de 306 a.C. comprou uma casa com jardim nos arredores de Atenas e ali instalou sua escola, conhecida simplesmente como o Jardim.',
      'Ao contrário da Academia e do Liceu, o Jardim aceitava mulheres e pessoas escravizadas como membros plenos. Isso escandalizou a Atenas da época e alimentou boatos sobre orgias que perseguiriam sua reputação por dois milênios — daí o uso corrente da palavra epicurista como sinônimo de hedonismo desregrado, que é o oposto exato do que ele ensinava.',
      'Sua física é atomista: tudo é feito de átomos e vazio, inclusive a alma, que se dissolve com a morte. Daí decorre a ética. O medo dos deuses é infundado, porque os deuses não se ocupam dos humanos; o medo da morte é irracional, porque onde estamos a morte não está, e quando a morte chega já não estamos. Os prazeres devem ser classificados: os naturais e necessários bastam, os demais trazem mais perturbação do que satisfação. A amizade é, para ele, o maior bem que a sabedoria oferece para a felicidade de uma vida inteira.',
      'Escreveu cerca de trezentas obras, das quais sobreviveram três cartas e coletâneas de máximas, além de fragmentos recuperados dos papiros carbonizados de Herculano. Viveu de pão, água e ocasionalmente queijo. Morreu aos setenta anos, após dias de dores agudas causadas por cálculos renais; na carta escrita no último dia, afirmava viver um dia feliz porque a lembrança das conversas com os amigos compensava o sofrimento do corpo.'
    ],
    contexto: 'Epicuro funda sua escola no período helenístico, quando a política ateniense já não pertencia aos atenienses. Como o estoicismo, sua doutrina responde à perda de controle sobre o mundo público deslocando a questão para a vida privada — mas, ao contrário dos estoicos, recomenda o afastamento da política em vez do dever cívico.',
    contribuicoes: [
      'Fundou o Jardim, escola que admitia mulheres e pessoas escravizadas como membros plenos.',
      'Formulou uma ética do prazer entendido como ausência de dor no corpo e de perturbação na alma.',
      'Desenvolveu a física atomista de Demócrito e dela derivou consequências éticas.',
      'Formulou o argumento clássico contra o medo da morte.',
      'Atribuiu à amizade o lugar central entre os bens da vida.'
    ],
    cronologia: [
      ['341 a.C.', 'Nasce em Samos.'],
      ['306 a.C.', 'Funda o Jardim, em Atenas.'],
      ['270 a.C.', 'Morre em Atenas, aos setenta anos.']
    ]
  },

  'Michel de Montaigne': {
    papel: 'Escritor e filósofo francês (1533–1592)',
    resumo: 'Inventou o ensaio como forma literária ao decidir escrever sobre o único assunto que dizia conhecer: ele mesmo.',
    bio: [
      'Michel Eyquem de Montaigne nasceu no castelo da família, perto de Bordeaux, em 28 de fevereiro de 1533. O pai submeteu-o a uma educação experimental: foi entregue a camponeses nos primeiros anos e depois criado por um preceptor alemão que lhe falava exclusivamente em latim, de modo que aprendeu essa língua antes do francês. Formou-se em direito e trabalhou no parlamento de Bordeaux.',
      'A amizade com Étienne de La Boétie, iniciada em 1558 e interrompida pela morte dele cinco anos depois, foi o acontecimento afetivo decisivo de sua vida e o tema de seu ensaio mais célebre sobre a amizade. Em 1571, aos 38 anos, retirou-se para a torre de sua propriedade, onde reuniu cerca de mil livros e começou a escrever.',
      'Os Ensaios, publicados a partir de 1580 e ampliados até a morte, criaram um gênero. Montaigne escreve sobre canibais, cavalos, tristeza, mentira, educação, o costume, os cheiros, a doença, sempre voltando a si mesmo como objeto de estudo — não por vaidade, mas porque considerava ser o único material que podia examinar de perto. A pergunta que governa o livro é o que sei eu.',
      'Foi prefeito de Bordeaux por dois mandatos e mediador entre católicos e protestantes durante as guerras religiosas francesas, mantendo interlocução com os dois lados num período de massacres. Sua defesa da suspensão do juízo, da tolerância e da desconfiança diante das próprias certezas nasce diretamente dessa experiência. Morreu em 13 de setembro de 1592. Influenciou Shakespeare, Pascal, Rousseau, Emerson e Nietzsche.'
    ],
    contexto: 'Montaigne escreve durante as guerras de religião na França, quando vizinhos se matavam por diferenças doutrinárias. Seu ceticismo não é jogo intelectual: é a resposta de quem viu a certeza absoluta produzir massacres, e por isso decidiu investigar a instabilidade do próprio juízo antes de julgar o dos outros.',
    contribuicoes: [
      'Criou o ensaio como forma literária.',
      'Escreveu Os Ensaios, uma das obras fundadoras da prosa moderna europeia.',
      'Formulou um ceticismo prático baseado na suspensão do juízo e na desconfiança das próprias certezas.',
      'Escreveu Dos Canibais, crítica pioneira ao etnocentrismo europeu diante dos povos americanos.',
      'Atuou como mediador entre católicos e protestantes nas guerras religiosas francesas.'
    ],
    cronologia: [
      [1533, 'Nasce perto de Bordeaux, em 28 de fevereiro.'],
      [1563, 'Morre Étienne de La Boétie.'],
      [1571, 'Retira-se para a torre e começa a escrever.'],
      [1580, 'Publica os dois primeiros livros dos Ensaios.'],
      [1581, 'É eleito prefeito de Bordeaux.'],
      [1588, 'Publica a edição ampliada com o terceiro livro.'],
      [1592, 'Morre em sua propriedade.']
    ]
  },

  'William Shakespeare': {
    papel: 'Dramaturgo e poeta inglês (1564–1616)',
    resumo: 'Escreveu as peças mais encenadas da história e ampliou o próprio idioma inglês ao fazê-lo.',
    bio: [
      'William Shakespeare foi batizado em Stratford-upon-Avon em 26 de abril de 1564, filho de um luveiro que chegou a ocupar cargos municipais e depois enfrentou dificuldades financeiras. Frequentou provavelmente a escola de gramática local, com forte ênfase em latim e retórica, e não passou pela universidade. Casou-se aos dezoito anos com Anne Hathaway e teve três filhos; o único homem, Hamnet, morreu aos onze anos.',
      'Aparece em Londres por volta de 1592, já como ator e autor, alvo de um ataque em texto de um dramaturgo rival. Tornou-se sócio da companhia Lord Chamberlain\u2019s Men, depois King\u2019s Men sob patrocínio de Jaime I, e coproprietário do teatro Globe. Essa condição de sócio, e não de dramaturgo assalariado, explica a prosperidade que lhe permitiu comprar a segunda maior casa de Stratford.',
      'Escreveu cerca de trinta e oito peças, distribuídas entre comédias, dramas históricos e tragédias, além de 154 sonetos e poemas narrativos. A primeira fase traz as comédias e os dramas históricos ingleses; o período central produziu Hamlet, Otelo, Rei Lear e Macbeth; a fase final, os romances tardios como A Tempestade. Não publicou suas peças de forma organizada: elas foram reunidas em 1623, sete anos após sua morte, no volume conhecido como Primeiro Fólio, sem o qual cerca de metade delas teria se perdido.',
      'Sua contribuição à língua inglesa é material: centenas de palavras e expressões têm nele seu primeiro registro escrito conhecido. Retirou-se para Stratford por volta de 1613 e morreu em 23 de abril de 1616.'
    ],
    contexto: 'Shakespeare escreve no teatro comercial londrino da era elisabetana e jacobina, um mercado competitivo em que companhias disputavam público de todas as classes no mesmo espaço. Escrevia para agradar simultaneamente à corte e à plateia em pé, e essa dupla exigência ajuda a explicar a mistura de sofisticação verbal e apelo direto que caracteriza sua obra.',
    contribuicoes: [
      'Escreveu cerca de trinta e oito peças, entre elas Hamlet, Macbeth, Rei Lear, Otelo e Romeu e Julieta.',
      'Escreveu 154 sonetos, um dos ciclos poéticos mais influentes em língua inglesa.',
      'Ampliou o vocabulário e a fraseologia do inglês de forma documentada.',
      'Foi sócio da companhia King\u2019s Men e coproprietário do teatro Globe.',
      'Suas peças são as mais encenadas e traduzidas da história do teatro.'
    ],
    cronologia: [
      [1564, 'É batizado em Stratford-upon-Avon, em 26 de abril.'],
      [1592, 'Já atua como dramaturgo em Londres.'],
      [1599, 'Inauguração do teatro Globe, do qual é sócio.'],
      [1603, 'A companhia passa a chamar-se King\u2019s Men sob Jaime I.'],
      [1613, 'Retira-se para Stratford.'],
      [1616, 'Morre em 23 de abril.'],
      [1623, 'O Primeiro Fólio reúne suas peças.']
    ]
  },

  'Jane Austen': {
    papel: 'Escritora britânica (1775–1817)',
    resumo: 'Escreveu seis romances sobre casamento e dinheiro que fundaram o romance moderno de análise social.',
    bio: [
      'Jane Austen nasceu em Steventon, Hampshire, em 16 de dezembro de 1775, sétima de oito filhos de um pároco anglicano. Foi educada sobretudo em casa, com acesso livre à biblioteca do pai — condição incomum para uma menina da época. Começou a escrever ainda adolescente, produzindo paródias dos romances sentimentais em voga.',
      'Nunca se casou. Aceitou uma proposta de casamento vantajosa em 1802 e retirou o consentimento na manhã seguinte. Viveu com a mãe e a irmã Cassandra em condições financeiras modestas após a morte do pai, mudando-se entre Bath, Southampton e finalmente Chawton, onde escreveu ou revisou toda a obra publicada.',
      'Os romances saíram anonimamente, atribuídos apenas a uma dama: Razão e Sensibilidade (1811), Orgulho e Preconceito (1813), Mansfield Park (1814) e Emma (1815). A Abadia de Northanger e Persuasão foram publicados postumamente, em 1817. Sua identidade só se tornou pública depois da morte.',
      'A inovação técnica é decisiva: Austen desenvolveu o discurso indireto livre, em que a narração absorve a voz e a perspectiva da personagem sem aspas nem verbo declarativo, permitindo ironia e intimidade simultâneas. O tema aparente é o casamento; o assunto real é a posição econômica das mulheres numa sociedade em que a propriedade passava por linha masculina e casar bem era a única forma de segurança. Morreu em Winchester em 18 de julho de 1817, aos 41 anos, de causa nunca estabelecida.'
    ],
    contexto: 'Austen escreve durante as guerras napoleônicas, que quase não aparecem em seus livros — omissão frequentemente criticada e que ela própria justificava dizendo escrever sobre o que conhecia. Seu campo é a pequena nobreza rural inglesa, e é precisamente a estreiteza deliberada do recorte que permite a densidade de sua análise social.',
    contribuicoes: ['Escreveu Orgulho e Preconceito, Emma, Persuasão, Razão e Sensibilidade, Mansfield Park e A Abadia de Northanger.', 'Desenvolveu o discurso indireto livre, técnica central do romance moderno.', 'Fundou o romance de costumes centrado na análise econômica e social do casamento.', 'Suas obras permanecem entre as mais adaptadas da literatura em língua inglesa.'],
    cronologia: [
      [1775, 'Nasce em Steventon, em 16 de dezembro.'],
      [1811, 'Publica Razão e Sensibilidade, anonimamente.'],
      [1813, 'Publica Orgulho e Preconceito.'],
      [1814, 'Publica Mansfield Park.'],
      [1815, 'Publica Emma.'],
      [1817, 'Morre em Winchester, aos 41 anos.'],
      [1818, 'Persuasão e A Abadia de Northanger saem postumamente.']
    ]
  },

  Confúcio: {
    papel: 'Filósofo e educador chinês (551 a.C.–479 a.C.)',
    resumo: 'Formulou uma ética baseada na reciprocidade e no cultivo pessoal que estruturou a China por dois mil anos.',
    bio: [
      'Kong Qiu, conhecido no Ocidente como Confúcio, nasceu no estado de Lu, atual província de Shandong, em 551 a.C. O pai morreu quando ele era criança e a família viveu em condições modestas apesar da ascendência aristocrática. Ocupou pequenos cargos administrativos e dedicou-se ao estudo dos ritos, da música e dos textos antigos.',
      'Buscou por anos um governante que aplicasse suas ideias. Chegou a ocupar posição de responsabilidade em Lu, mas afastou-se e passou cerca de treze anos viajando entre estados, oferecendo conselhos que quase nunca foram seguidos. Voltou a Lu no fim da vida e dedicou-se ao ensino, reunindo em torno de si um grupo de discípulos.',
      'Sua contribuição decisiva foi tratar a nobreza como qualidade moral conquistada, e não como condição de nascimento. O homem exemplar — junzi — é definido pelo cultivo da benevolência (ren), pela observância dos ritos (li), pela retidão e pela sinceridade. A formulação da reciprocidade que atravessa sua obra, não impor a outrem o que não se deseja para si, aparece nos Analectos como resposta à pergunta sobre uma palavra que sirva de regra por toda a vida.',
      'Não escreveu tratados. Os Analectos são uma compilação de suas conversas, organizada por discípulos e por discípulos de discípulos ao longo de gerações. Morreu em 479 a.C., convencido de ter fracassado. Séculos depois, o confucionismo tornou-se doutrina oficial do Estado chinês, base do sistema imperial de exames e do pensamento no Leste Asiático até a era moderna.'
    ],
    contexto: 'Confúcio viveu no fim da dinastia Zhou, período de desintegração da ordem política e de guerra constante entre estados. Sua proposta era restaurar a estabilidade não pela força nem pela lei penal, mas pela formação moral dos governantes e pela recuperação dos ritos — resposta oposta à dos legistas, que defendiam controle rígido e punição.',
    contribuicoes: ['Formulou uma ética centrada na benevolência, na reciprocidade e no cultivo pessoal.', 'Redefiniu a nobreza como qualidade moral conquistada, e não herdada.', 'Seus ensinamentos, reunidos nos Analectos, estruturaram o pensamento e o Estado chineses por dois milênios.', 'Estabeleceu a educação como via de ascensão, princípio que originaria o sistema imperial de exames.'],
    cronologia: [
      ['551 a.C.', 'Nasce no estado de Lu.'],
      ['c. 501 a.C.', 'Ocupa cargo de responsabilidade em Lu.'],
      ['c. 497 a.C.', 'Inicia mais de uma década de viagens entre estados.'],
      ['c. 484 a.C.', 'Retorna a Lu e dedica-se ao ensino.'],
      ['479 a.C.', 'Morre em Lu.']
    ],
    nota: 'Confúcio não deixou obra escrita. Os Analectos foram compilados por discípulos ao longo de gerações.'
  },

  'Viktor Frankl': {
    papel: 'Neurologista e psiquiatra austríaco (1905–1997)',
    resumo: 'Sobreviveu a quatro campos de concentração e formulou uma psicoterapia centrada na busca de sentido.',
    bio: [
      'Viktor Emil Frankl nasceu em Viena em 26 de março de 1905, em família judaica. Interessou-se cedo por psicologia, correspondeu-se com Freud ainda adolescente e depois aproximou-se de Alfred Adler, rompendo com ambas as escolas para desenvolver linha própria. Formou-se em medicina e trabalhou com prevenção do suicídio entre estudantes, com resultados notáveis.',
      'Em 1942 foi deportado com a esposa, os pais e o irmão. Passou por Theresienstadt, Auschwitz, Kaufering e Türkheim. Perdeu a mulher, grávida, os pais e o irmão; apenas a irmã, que emigrara, sobreviveu. Um manuscrito que carregava consigo foi destruído na chegada a Auschwitz, e ele o reconstruiu mentalmente durante o cativeiro.',
      'Em nove dias, em 1946, escreveu o livro publicado em português como Em Busca de Sentido. A primeira parte descreve a experiência do campo do ponto de vista de um psiquiatra; a segunda expõe a logoterapia. A tese central é que a motivação humana fundamental não é o prazer nem o poder, mas a busca de sentido, e que esse sentido pode ser encontrado em três vias: no que se realiza, no que se ama e experimenta, e na atitude assumida diante de um sofrimento inevitável.',
      'Frankl fez questão de recusar a leitura de que sobreviver dependia de força interior, insistindo que os melhores não voltaram. Dirigiu o departamento de neurologia de um hospital vienense por vinte e cinco anos, publicou dezenas de livros e lecionou no mundo inteiro. Morreu em Viena em 2 de setembro de 1997.'
    ],
    contexto: 'Frankl formula a logoterapia como terceira via vienense, depois da psicanálise de Freud e da psicologia individual de Adler. Sua originalidade está em deslocar o eixo da terapia do passado e do impulso para a orientação em direção a um sentido futuro, e sua autoridade sobre o tema vem de tê-la testado nas condições mais extremas possíveis.',
    contribuicoes: ['Criou a logoterapia, terceira escola vienense de psicoterapia.', 'Escreveu Em Busca de Sentido, traduzido para dezenas de idiomas.', 'Formulou as três vias de descoberta de sentido: a obra, o encontro e a atitude diante do sofrimento inevitável.', 'Introduziu técnicas como a intenção paradoxal no tratamento de fobias e ansiedade.'],
    cronologia: [
      [1905, 'Nasce em Viena, em 26 de março.'],
      [1942, 'É deportado com a família.'],
      [1944, 'É levado a Auschwitz e depois a campos subsidiários de Dachau.'],
      [1945, 'É libertado; descobre a morte da esposa, dos pais e do irmão.'],
      [1946, 'Escreve Em Busca de Sentido.'],
      [1997, 'Morre em Viena.']
    ]
  },

  'Machado de Assis': {
    papel: 'Escritor brasileiro (1839–1908)',
    resumo: 'Maior escritor da literatura brasileira, transformou o romance nacional com ironia, digressão e um narrador em que não se pode confiar.',
    bio: [
      'Joaquim Maria Machado de Assis nasceu no Morro do Livramento, no Rio de Janeiro, em 21 de junho de 1839, filho de um pintor de paredes mulato e de uma lavadeira açoriana. Perdeu a mãe cedo, teve escolaridade formal mínima e aprendeu francês com a mulher de uma padaria, além de inglês e alemão por conta própria. Era epilético e gago.',
      'Começou como tipógrafo e revisor, passou a colaborar em jornais e ingressou no funcionalismo público, onde fez carreira estável até a aposentadoria. Casou-se com a portuguesa Carolina Augusta Xavier de Novais, com quem viveu trinta e cinco anos; a morte dela em 1904 inspirou o soneto A Carolina.',
      'Sua obra divide-se em duas fases. A primeira, romântica, inclui Ressurreição, A Mão e a Luva e Iaiá Garcia. A virada ocorre em 1881, com Memórias Póstumas de Brás Cubas, narrado por um defunto autor que escreve com a pena da galhofa e a tinta da melancolia. A partir dali vêm Quincas Borba, Dom Casmurro, Esaú e Jacó e Memorial de Aires, além de contos como O Alienista, A Cartomante e Missa do Galo.',
      'Sua inovação é estrutural: capítulos brevíssimos, digressões que interrompem a ação, apóstrofes ao leitor e, sobretudo, narradores não confiáveis. Em Dom Casmurro, todo o relato do adultério vem de um marido ciumento, e o leitor não tem acesso independente aos fatos — recurso que antecipa procedimentos do romance do século XX. Fundou a Academia Brasileira de Letras em 1897 e a presidiu até a morte, em 29 de setembro de 1908.'
    ],
    contexto:
      'Machado escreve no Rio de Janeiro do Segundo Reinado e da Primeira República, numa sociedade escravista e depois recém-abolicionista, marcada pelo favor e pela dependência pessoal. Sua ironia não é ornamento: é o instrumento com que desmonta a autoimagem da elite carioca, e sua condição de homem negro e pobre que chegou ao topo do sistema literário dá densidade particular a essa observação.',
    contribuicoes: ['Escreveu Memórias Póstumas de Brás Cubas (1881), marco inicial do realismo brasileiro.', 'Escreveu Dom Casmurro, Quincas Borba, Esaú e Jacó e Memorial de Aires.', 'Criou no Brasil o narrador não confiável e a estrutura digressiva do romance moderno.', 'Escreveu contos como O Alienista, A Cartomante e Pai contra Mãe.', 'Fundou e presidiu a Academia Brasileira de Letras.'],
    cronologia: [
      [1839, 'Nasce no Rio de Janeiro, em 21 de junho.'],
      [1869, 'Casa-se com Carolina Augusta Xavier de Novais.'],
      [1881, 'Publica Memórias Póstumas de Brás Cubas.'],
      [1891, 'Publica Quincas Borba.'],
      [1897, 'Funda a Academia Brasileira de Letras.'],
      [1899, 'Publica Dom Casmurro.'],
      [1908, 'Morre no Rio de Janeiro.']
    ]
  },

  'Simone de Beauvoir': {
    papel: 'Filósofa e escritora francesa (1908–1986)',
    resumo: 'Escreveu O Segundo Sexo, o tratado que fundou o feminismo filosófico do século XX.',
    bio: [
      'Simone Lucie Ernestine Marie Bertrand de Beauvoir nasceu em Paris em 9 de janeiro de 1908, em família burguesa católica empobrecida após a Primeira Guerra. Estudou filosofia na Sorbonne e prestou em 1929 a agregação, concurso extremamente seletivo, obtendo o segundo lugar atrás de Jean-Paul Sartre — com quem manteria uma relação de cinquenta e um anos, sem casamento e sem exclusividade.',
      'Lecionou filosofia em liceus até 1943 e passou depois a viver da escrita. Publicou romances — A Convidada, O Sangue dos Outros, Os Mandarins, este último premiado com o Goncourt em 1954 — e ensaios filosóficos, entre eles Para uma Moral da Ambiguidade, que desenvolve a ética que faltava ao existencialismo sartriano.',
      'O Segundo Sexo saiu em 1949, em dois volumes, e provocou escândalo imediato: foi atacado pela imprensa, pela Igreja e por intelectuais de esquerda e de direita. A tese que abre o segundo volume — não se nasce mulher, torna-se mulher — desloca o feminino do dado biológico para a construção social e histórica, e sustenta que a mulher foi definida ao longo da história como o Outro em relação a um homem tomado como norma. É o ponto de partida da teoria feminista contemporânea.',
      'Escreveu ainda quatro volumes de memórias, entre eles Memórias de uma Moça Bem-Comportada, e A Velhice (1970), estudo sobre a marginalização dos idosos. Militou pelo direito ao aborto, assinando em 1971 o manifesto das 343. Morreu em Paris em 14 de abril de 1986 e foi enterrada ao lado de Sartre.'
    ],
    contexto: 'Beauvoir escreve na França do pós-guerra, onde as mulheres haviam acabado de conquistar o voto, em 1944, e onde o Código Civil ainda restringia a autonomia da mulher casada. O Segundo Sexo aparece antes de qualquer movimento organizado de segunda onda e é a base intelectual sobre a qual ele viria a se construir.',
    contribuicoes: [
      'Escreveu O Segundo Sexo (1949), obra fundadora da teoria feminista contemporânea.',
      'Formulou a distinção entre o dado biológico e a construção social do feminino.',
      'Desenvolveu em Para uma Moral da Ambiguidade a ética do existencialismo.',
      'Escreveu Os Mandarins, vencedor do Prêmio Goncourt em 1954.',
      'Escreveu A Velhice (1970), estudo pioneiro sobre a condição dos idosos.',
      'Militou publicamente pela legalização do aborto na França.'
    ],
    cronologia: [
      [1908, 'Nasce em Paris, em 9 de janeiro.'],
      [1929, 'Obtém a agregação em filosofia e conhece Sartre.'],
      [1943, 'Publica A Convidada.'],
      [1949, 'Publica O Segundo Sexo.'],
      [1954, 'Recebe o Prêmio Goncourt por Os Mandarins.'],
      [1970, 'Publica A Velhice.'],
      [1971, 'Assina o manifesto das 343 pelo direito ao aborto.'],
      [1986, 'Morre em Paris.']
    ]
  },

  'Charlie Munger': {
    papel: 'Investidor e advogado norte-americano (1924–2023)',
    resumo: 'Sócio de Warren Buffett por seis décadas, defendeu o pensamento por modelos mentais múltiplos e a inversão dos problemas.',
    bio: [
      'Charles Thomas Munger nasceu em Omaha, Nebraska, em 1º de janeiro de 1924. Trabalhou ainda adolescente na mercearia do avô de Warren Buffett, sem que os dois se conhecessem. Serviu na força aérea durante a Segunda Guerra, estudou matemática e meteorologia e foi admitido na Faculdade de Direito de Harvard sem ter concluído a graduação. Formou-se com distinção e advogou em Los Angeles.',
      'Perdeu um filho de nove anos para a leucemia em 1955 e divorciou-se no mesmo período, episódios que descreveu como formadores. Perdeu também a visão de um olho após uma cirurgia malsucedida. Conheceu Buffett em 1959, num jantar em Omaha, e a conversa deu início a uma parceria de mais de sessenta anos.',
      'Munger foi quem convenceu Buffett a abandonar a busca estrita por ações muito baratas, herdada de Benjamin Graham, e a pagar preços razoáveis por empresas excelentes com vantagem competitiva durável. Essa mudança está na origem das aquisições que definiram a Berkshire Hathaway, da qual foi vice-presidente a partir de 1978.',
      'Defendia o que chamava de treliça de modelos mentais: dominar as ideias centrais de várias disciplinas — psicologia, física, biologia, matemática, economia — e usá-las combinadas, em vez de forçar todos os problemas num único método. Sua palestra sobre os vieses do julgamento humano e o método da inversão, que consiste em perguntar como garantir o fracasso para descobrir o que evitar, tornaram-se referências. Morreu em Santa Barbara em 28 de novembro de 2023, poucas semanas antes de completar cem anos.'
    ],
    contexto: 'Munger operou num setor financeiro cada vez mais especializado e quantitativo, defendendo o oposto: generalismo disciplinado e leitura ampla fora da própria área. Sua franqueza pública e a recusa em suavizar julgamentos fizeram dele figura conhecida muito além do universo dos investidores.',
    contribuicoes: [
      'Foi vice-presidente da Berkshire Hathaway e sócio de Warren Buffett por mais de seis décadas.',
      'Deslocou a estratégia da Berkshire da compra de ações baratas para a compra de empresas de qualidade duradoura.',
      'Formulou a proposta da treliça de modelos mentais multidisciplinares.',
      'Sistematizou em palestra célebre as tendências de julgamento errôneo do ser humano.',
      'Popularizou o método da inversão na tomada de decisão.'
    ],
    cronologia: [
      [1924, 'Nasce em Omaha, em 1º de janeiro.'],
      [1948, 'Forma-se em direito por Harvard.'],
      [1959, 'Conhece Warren Buffett.'],
      [1978, 'Torna-se vice-presidente da Berkshire Hathaway.'],
      [1995, 'Profere a palestra sobre a psicologia do julgamento errôneo.'],
      [2023, 'Morre em Santa Barbara.']
    ]
  },

  'Ralph Waldo Emerson': {
    papel: 'Ensaísta e poeta norte-americano (1803–1882)',
    resumo: 'Fundou o transcendentalismo e escreveu a declaração de independência intelectual dos Estados Unidos.',
    bio: [
      'Ralph Waldo Emerson nasceu em Boston em 25 de maio de 1803, filho de um pastor unitarista que morreu quando ele tinha oito anos, deixando a família em dificuldade. Formou-se em Harvard e tornou-se pastor unitarista. Em 1831 perdeu a primeira esposa, Ellen, aos dezenove anos, de tuberculose. No ano seguinte renunciou ao púlpito por não conseguir mais administrar a comunhão com convicção, e viajou pela Europa, onde conheceu Coleridge, Wordsworth e Thomas Carlyle.',
      'De volta aos Estados Unidos, publicou em 1836 o ensaio Natureza, texto fundador do transcendentalismo. O movimento sustentava que a verdade não se alcança por autoridade externa, revelação institucional ou tradição, mas pela intuição direta e pela relação com a natureza, na qual se manifesta uma alma comum a todos os seres.',
      'O discurso O Estudioso Americano, proferido em Harvard em 1837, foi chamado por Oliver Wendell Holmes de declaração de independência intelectual dos Estados Unidos: Emerson convocava seus contemporâneos a parar de imitar a Europa. O Discurso na Escola de Teologia, no ano seguinte, criticou tão duramente o cristianismo institucional que ele ficou quase três décadas sem ser convidado de volta a Harvard.',
      'Os ensaios Autoconfiança, Compensação, Círculos e O Poeta reuniram sua obra central. Sustentou-se por décadas como conferencista itinerante, apresentando-se em centenas de cidades. Foi mentor de Henry David Thoreau e influência declarada de Walt Whitman e Nietzsche. Posicionou-se publicamente contra a escravidão a partir dos anos 1840. Morreu em Concord, Massachusetts, em 27 de abril de 1882.'
    ],
    contexto: 'Emerson escreve nos Estados Unidos recém-independentes culturalmente dependentes da Europa, e numa Nova Inglaterra em que o calvinismo perdia terreno para o unitarismo. Sua insistência na autoconfiança e na experiência individual direta responde às duas coisas ao mesmo tempo, e é uma das raízes do individualismo americano.',
    contribuicoes: [
      'Fundou o transcendentalismo com o ensaio Natureza (1836).',
      'Proferiu O Estudioso Americano, manifesto de independência cultural dos Estados Unidos.',
      'Escreveu Autoconfiança, um dos ensaios mais influentes da língua inglesa.',
      'Foi mentor de Henry David Thoreau e influência direta sobre Walt Whitman.',
      'Consolidou a conferência pública como forma de circulação intelectual nos Estados Unidos.'
    ],
    cronologia: [
      [1803, 'Nasce em Boston, em 25 de maio.'],
      [1832, 'Renuncia ao ministério unitarista.'],
      [1836, 'Publica Natureza.'],
      [1837, 'Profere O Estudioso Americano em Harvard.'],
      [1841, 'Publica a primeira série de Ensaios, com Autoconfiança.'],
      [1882, 'Morre em Concord, Massachusetts.']
    ]
  },

  'Winston Churchill': {
    papel: 'Político e escritor britânico, primeiro-ministro do Reino Unido (1874–1965)',
    resumo: 'Conduziu o Reino Unido pela Segunda Guerra Mundial e ganhou o Nobel de Literatura pelos livros que escreveu sobre ela.',
    bio: [
      'Winston Leonard Spencer Churchill nasceu no palácio de Blenheim em 30 de novembro de 1874, filho de um político aristocrata e de uma americana rica. Aluno medíocre, seguiu carreira militar e serviu na Índia, no Sudão e na África do Sul, onde foi capturado na Guerra dos Bôeres e escapou, episódio que lhe rendeu fama nacional. Sustentou-se desde jovem como correspondente e autor.',
      'Entrou no Parlamento em 1900 e ocupou quase todos os grandes cargos ao longo de meio século, trocando de partido duas vezes. Como Primeiro Lorde do Almirantado, foi responsabilizado pelo desastre de Galípoli em 1915 e demitido. Como chanceler do Erário nos anos 1920, o retorno à paridade-ouro que promoveu é apontado como fator de agravamento do desemprego. Passou os anos 1930 isolado politicamente, alertando contra o rearmamento alemão quando a política oficial era o apaziguamento.',
      'Tornou-se primeiro-ministro em maio de 1940, dias antes do colapso da França, e assumiu um país que ficaria praticamente sozinho contra a Alemanha por mais de um ano. Seus discursos no Parlamento e pelo rádio durante a Batalha da Grã-Bretanha são apontados como fator material de sustentação da moral nacional. Articulou a aliança com Roosevelt e depois com Stálin.',
      'Perdeu a eleição de 1945 antes mesmo do fim da guerra no Pacífico, voltou ao cargo entre 1951 e 1955 e recebeu o Nobel de Literatura em 1953 pela obra histórica e biográfica, sobretudo os seis volumes sobre a Segunda Guerra. Suas posições sobre o Império Britânico e sua responsabilidade em episódios como a fome em Bengala de 1943 são objeto de crítica histórica documentada. Morreu em Londres em 24 de janeiro de 1965.'
    ],
    contexto: 'Churchill atravessou da cavalaria vitoriana à bomba atômica. Sua figura é hoje disputada entre a memória do líder que recusou negociar com Hitler em 1940, quando parte do gabinete considerava fazê-lo, e o registro de suas posições imperialistas e de decisões com consequências graves em colônias britânicas.',
    contribuicoes: [
      'Liderou o Reino Unido durante a Segunda Guerra Mundial.',
      'Recusou a negociação com a Alemanha nazista em 1940, decisão que alterou o curso do conflito.',
      'Articulou a aliança militar com os Estados Unidos e a União Soviética.',
      'Escreveu A Segunda Guerra Mundial, em seis volumes, e História dos Povos de Língua Inglesa.',
      'Recebeu o Prêmio Nobel de Literatura em 1953.',
      'Proferiu em 1946 o discurso da Cortina de Ferro, que nomeou a divisão da Europa.'
    ],
    cronologia: [
      [1874, 'Nasce no palácio de Blenheim, em 30 de novembro.'],
      [1900, 'Elege-se para o Parlamento.'],
      [1915, 'É demitido do Almirantado após o desastre de Galípoli.'],
      [1940, 'Torna-se primeiro-ministro em maio.'],
      [1945, 'Perde a eleição geral.'],
      [1946, 'Profere o discurso da Cortina de Ferro.'],
      [1951, 'Volta ao cargo de primeiro-ministro.'],
      [1953, 'Recebe o Nobel de Literatura.'],
      [1965, 'Morre em Londres.']
    ],
    nota: 'As posições de Churchill sobre o Império Britânico e sua responsabilidade em episódios coloniais, entre eles a fome de Bengala de 1943, são objeto de crítica histórica documentada.'
  },

  'Rui Barbosa': {
    papel: 'Jurista, político e escritor brasileiro (1849–1923)',
    resumo: 'Redigiu boa parte da primeira Constituição republicana, defendeu o habeas corpus como garantia ampla e projetou o Brasil na diplomacia mundial.',
    bio: [
      'Rui Barbosa de Oliveira nasceu em Salvador, na Bahia, em 5 de novembro de 1849, filho de um médico e político. Formou-se em direito em São Paulo e no Recife e destacou-se cedo como jornalista e orador. Foi militante abolicionista e defensor da liberdade religiosa e do ensino leigo ainda no Império.',
      'Com a proclamação da República, tornou-se ministro da Fazenda do governo provisório e vice-chefe do governo. Sua política monetária expansionista ficou associada ao episódio inflacionário conhecido como Encilhamento, objeto de controvérsia até hoje. Foi o principal redator do texto que resultou na Constituição de 1891.',
      'Como advogado e senador, tornou-se o grande defensor das garantias individuais na Primeira República. Formulou a chamada doutrina brasileira do habeas corpus, sustentando que o instituto protegia não apenas a liberdade de locomoção, mas todo direito líquido e certo cuja fruição dependesse dela — construção que antecede o mandado de segurança. Enfrentou o estado de sítio e a repressão política com atuação judicial constante.',
      'Na Segunda Conferência da Paz, em Haia, em 1907, defendeu a igualdade jurídica entre os Estados soberanos contra a proposta de representação proporcional ao poderio militar, atuação que lhe rendeu projeção internacional. Foi candidato à presidência em 1910, na Campanha Civilista contra o marechal Hermes da Fonseca, e novamente em 1919. Morreu em Petrópolis em 1º de março de 1923. Sua casa e biblioteca deram origem à Fundação Casa de Rui Barbosa.'
    ],
    contexto: 'Rui Barbosa atua na transição do Império para a República e nas décadas em que a jovem república alternava eleições fraudadas, estados de sítio e intervenções militares. Sua obra é a tentativa mais consistente do período de submeter o poder ao direito, e a distância entre seus textos e a prática política da época explica sua reputação de eloquência isolada.',
    contribuicoes: [
      'Foi o principal redator da Constituição brasileira de 1891.',
      'Formulou a doutrina brasileira do habeas corpus, ampliando o alcance das garantias individuais.',
      'Atuou como abolicionista e defensor do ensino leigo e da liberdade religiosa.',
      'Defendeu na Conferência de Haia de 1907 a igualdade jurídica entre Estados soberanos.',
      'Foi ministro da Fazenda do governo provisório republicano.'
    ],
    cronologia: [
      [1849, 'Nasce em Salvador, em 5 de novembro.'],
      [1889, 'Torna-se ministro da Fazenda do governo provisório.'],
      [1891, 'É promulgada a Constituição que ajudou a redigir.'],
      [1907, 'Destaca-se na Segunda Conferência da Paz, em Haia.'],
      [1910, 'Disputa a presidência na Campanha Civilista.'],
      [1923, 'Morre em Petrópolis.']
    ]
  },

  'Dalai Lama': {
    papel: 'Líder espiritual tibetano (1935–)',
    resumo: 'Décimo quarto Dalai Lama, vive exilado desde 1959 e defende a autonomia tibetana pela não violência.',
    bio: [
      'Lhamo Thondup nasceu em 6 de julho de 1935 numa família de camponeses na aldeia de Taktser, na região tibetana de Amdo. Aos dois anos foi identificado por uma delegação de monges como a reencarnação do décimo terceiro Dalai Lama, segundo os procedimentos tradicionais de busca. Foi levado a Lhasa e entronizado, recebendo o nome de Tenzin Gyatso e uma formação monástica rigorosa.',
      'Assumiu autoridade política plena em 1950, aos quinze anos, no momento em que tropas da República Popular da China entravam no Tibete. Passou a década seguinte tentando negociar com Pequim, inclusive em encontros diretos com Mao Tsé-Tung. Após a revolta de Lhasa em março de 1959 e sua repressão, fugiu a pé pelo Himalaia e obteve asilo na Índia.',
      'Estabeleceu em Dharamsala a administração central tibetana no exílio, criou escolas e instituições para preservar a língua, a medicina e as tradições monásticas, e promoveu a democratização do governo exilado, renunciando em 2011 a toda função política em favor de um líder eleito. Sua proposta para o Tibete é a chamada via do meio: autonomia real dentro da China, e não independência.',
      'Recebeu o Nobel da Paz em 1989 pela defesa consistente de soluções não violentas. Tornou-se uma das figuras religiosas mais conhecidas do mundo, com forte atuação no diálogo entre budismo e ciência, especialmente em neurociência e estudos sobre meditação e compaixão, e no diálogo inter-religioso.'
    ],
    contexto: 'O Dalai Lama ocupa uma posição sem paralelo: chefe de uma tradição religiosa e, por décadas, de um governo sem território. Sua insistência na não violência diante de uma disputa territorial com uma grande potência define tanto seu reconhecimento internacional quanto os limites práticos de sua causa.',
    contribuicoes: [
      'Lidera a escola gelug do budismo tibetano como décimo quarto Dalai Lama.',
      'Estruturou no exílio as instituições de preservação da cultura, da língua e da medicina tibetanas.',
      'Democratizou o governo tibetano no exílio e renunciou às funções políticas em 2011.',
      'Recebeu o Prêmio Nobel da Paz em 1989.',
      'Promoveu o diálogo entre budismo e ciência, sobretudo com a neurociência contemporânea.'
    ],
    cronologia: [
      [1935, 'Nasce em Taktser, no Tibete, em 6 de julho.'],
      [1950, 'Assume a autoridade política plena.'],
      [1959, 'Foge para a Índia após a revolta de Lhasa.'],
      [1989, 'Recebe o Nobel da Paz.'],
      [2011, 'Renuncia às funções políticas do governo tibetano no exílio.']
    ]
  },

  'Lao Tsé': {
    papel: 'Pensador chinês, atribuído autor do Tao Te Ching (séc. VI–IV a.C.)',
    resumo: 'Figura de historicidade incerta a quem se atribui o texto fundador do taoismo.',
    bio: [
      'Lao Tsé, cujo nome significa mestre velho, é figura de historicidade contestada. A biografia tradicional vem do historiador Sima Qian, que escreveu no século I a.C. e já registrava versões divergentes: apresenta-o como arquivista da corte Zhou, contemporâneo e interlocutor de Confúcio. Segundo o relato, teria deixado o país desiludido com a decadência do reino e, ao chegar ao posto de fronteira, o guarda lhe pediu que registrasse por escrito seu ensinamento antes de partir. Dessa exigência teria nascido o Tao Te Ching.',
      'Estudiosos contemporâneos divergem quanto à existência de um autor único. A análise linguística e os manuscritos encontrados em Mawangdui e em Guodian sugerem que o texto se formou por acumulação, ao longo de séculos, a partir de material de diferentes procedências, tendo alcançado forma estável entre os séculos IV e III a.C.',
      'O Tao Te Ching tem cerca de oitenta e um capítulos breves, em linguagem paradoxal e densa. O Tao é o princípio inominável que precede e sustenta tudo; o texto abre afirmando que o Tao que pode ser dito não é o Tao permanente. Seu conceito prático central é o wu wei, a ação sem forçar, que não significa passividade e sim agir em acordo com a natureza das coisas, como a água que vence o duro por ser mole.',
      'É um dos textos mais traduzidos do mundo, atrás apenas da Bíblia em número de versões. Fundou o taoismo filosófico, influenciou o budismo chan e o zen, a medicina tradicional chinesa, as artes marciais e a pintura de paisagem no Leste Asiático.'
    ],
    contexto: 'O Tao Te Ching se forma no período dos Estados Combatentes, de guerra endêmica entre reinos chineses. Enquanto os confucianos propunham restaurar a ordem pelos ritos e os legistas pela lei rígida, o taoismo propõe o oposto: reduzir a intervenção, desconfiar do artifício e imitar os processos espontâneos da natureza.',
    contribuicoes: ['É atribuído a ele o Tao Te Ching, texto fundador do taoismo.', 'Formulou o princípio do wu wei, a ação sem forçar.', 'Influenciou o budismo chan e o zen, a medicina chinesa e as artes marciais.', 'O Tao Te Ching é um dos textos mais traduzidos da história.'],
    cronologia: [
      ['séc. VI a.C.', 'Data tradicional atribuída à sua vida, segundo Sima Qian.'],
      ['séc. IV–III a.C.', 'O Tao Te Ching alcança forma estável, segundo a pesquisa contemporânea.'],
      ['1973', 'Manuscritos de Mawangdui são descobertos, alterando a compreensão do texto.'],
      ['1993', 'Manuscritos de Guodian, em tiras de bambu, recuam a datação de parte do material.']
    ],
    nota: 'A existência de Lao Tsé como pessoa histórica única é contestada. A pesquisa atual entende o Tao Te Ching como texto de formação coletiva e acumulativa.'
  }
};

/* ----------------------------------------------------------------
   OBRAS DA FASE 10 — inclusões e descrições no padrão do §12
   ---------------------------------------------------------------- */
const OBRAS_F10 = {
  Aristóteles: [
    [
      'Ética a Nicômaco',
      'livro',
      'séc. IV a.C.',
      'Investiga o que é uma vida boa e conclui que o fim último da ação humana é a eudaimonia, o florescimento, alcançado pelo exercício habitual da virtude. Aristóteles define cada virtude como um meio-termo entre dois excessos — a coragem entre a covardia e a temeridade — e sustenta que ela se adquire pela prática, não pelo estudo. Escrita para uso no Liceu e provavelmente organizada a partir de notas de aula, é a obra fundadora da ética das virtudes e a mais lida da filosofia moral antiga.'
    ],
    [
      'Política',
      'livro',
      'séc. IV a.C.',
      'Estuda a organização das cidades a partir da comparação de constituições reais recolhidas por Aristóteles e seus alunos. Define o ser humano como animal que só se realiza na vida em comunidade política, examina as formas de governo e suas degenerações e analisa as causas das revoluções. É o primeiro estudo comparado de instituições políticas e permanece leitura básica da teoria do Estado.'
    ],
    [
      'Metafísica',
      'livro',
      'séc. IV a.C.',
      'Reúne os tratados sobre aquilo que Aristóteles chamou de filosofia primeira: o estudo do ser enquanto ser, da substância, da causa e do princípio. Contém a teoria das quatro causas, a distinção entre potência e ato e a discussão sobre o primeiro motor. O título vem da posição dos livros na ordenação antiga das obras, depois da Física, e não do próprio autor.'
    ],
    ['Órganon', 'livro', 'séc. IV a.C.', 'Conjunto dos tratados de lógica, entre eles as Categorias e os Analíticos. Formula a teoria do silogismo e as regras da inferência válida, criando a lógica como disciplina autônoma. Permaneceu praticamente sem alteração até o século XIX, quando Frege e Russell reformularam o campo.'],
    ['Poética', 'livro', 'séc. IV a.C.', 'Analisa a tragédia grega como forma, definindo enredo, caráter, reconhecimento, reviravolta e o efeito de catarse sobre o espectador. É o primeiro tratado sistemático de teoria literária do Ocidente e estruturou a discussão sobre drama e narrativa até o teatro moderno.'],
    ['Retórica', 'livro', 'séc. IV a.C.', 'Trata da arte de persuadir a partir de três meios: o caráter de quem fala, a disposição emocional do ouvinte e o argumento em si. Diferentemente dos manuais sofistas, Aristóteles a examina como técnica neutra passível de estudo racional, e sua análise das emoções é uma das primeiras psicologias sistemáticas conhecidas.'],
    ['História dos Animais', 'livro', 'séc. IV a.C.', 'Reúne observações diretas sobre centenas de espécies, com descrições de anatomia, reprodução e comportamento colhidas sobretudo durante a estadia do autor em Lesbos. É a obra que funda a zoologia como investigação empírica, e várias de suas descrições de organismos marinhos só foram confirmadas no século XIX.']
  ],
  'Marco Aurélio': [
    [
      'Meditações',
      'livro',
      'c. 170-180',
      'Anotações escritas em grego, em acampamentos militares durante as guerras no Danúbio, sem qualquer intenção de publicação. O imperador escreve para si mesmo, lembrando-se de que o juízo sobre os acontecimentos está sob seu controle e os acontecimentos não, de que a irritação com os outros é inútil, de que a fama póstuma não tem valor. É o único registro em primeira pessoa de alguém que exerceu poder absoluto e praticou filosofia ao mesmo tempo, e é essa ausência de destinatário que lhe dá a franqueza que atravessou dezoito séculos.'
    ]
  ],
  'Michel de Montaigne': [
    [
      'Ensaios',
      'livro',
      1580,
      'Três livros de textos de extensão variável sobre canibais, cavalos, mentira, tristeza, educação, doença e sobretudo sobre o próprio autor, tomado como o único objeto que ele podia examinar de perto. Escritos na torre de sua propriedade durante as guerras de religião francesas, criaram um gênero literário e uma forma de pensar: a suspensão do juízo, a desconfiança das próprias certezas e a pergunta que governa o livro — o que sei eu. Influenciaram Shakespeare, Pascal, Rousseau, Emerson e Nietzsche.'
    ]
  ],
  Confúcio: [
    [
      'Analectos',
      'livro',
      'séc. V–III a.C.',
      'Compilação das conversas de Confúcio com discípulos e governantes, organizada por gerações sucessivas de seguidores. Não é tratado, e sim sequência de diálogos curtos sobre conduta, governo, ritos e aprendizado. Formula a ética da benevolência e da reciprocidade e redefine a nobreza como qualidade moral conquistada. Tornou-se o texto central do sistema imperial de exames e estruturou o pensamento no Leste Asiático por dois milênios.'
    ]
  ],
  'Lao Tsé': [
    [
      'Tao Te Ching',
      'livro',
      'séc. IV–III a.C.',
      'Cerca de oitenta e um capítulos breves, em linguagem paradoxal, sobre o Tao — o princípio inominável que precede e sustenta tudo — e sobre o wu wei, a ação que não força. Formado por acumulação ao longo de séculos e atribuído pela tradição a Lao Tsé, aparece no período dos Estados Combatentes como resposta oposta à dos confucianos e legistas: reduzir a intervenção em vez de ampliá-la. É um dos textos mais traduzidos do mundo e fundou o taoismo filosófico.'
    ]
  ],
  'Viktor Frankl': [
    [
      'Em Busca de Sentido',
      'livro',
      1946,
      'Escrito em nove dias após a libertação, divide-se em duas partes: o relato da experiência nos campos de concentração feito por um psiquiatra que observava a si mesmo e aos outros, e a exposição da logoterapia. A tese central é que a motivação humana fundamental não é o prazer nem o poder, mas a busca de sentido, e que ele pode ser encontrado no que se realiza, no que se ama e na atitude assumida diante de um sofrimento inevitável. Frankl recusa explicitamente a leitura de que a sobrevivência dependia de força interior. Foi traduzido para dezenas de idiomas.'
    ]
  ],
  'Machado de Assis': [
    [
      'Memórias Póstumas de Brás Cubas',
      'livro',
      1881,
      'Narrado por um defunto que escreve suas memórias depois de morto, com a pena da galhofa e a tinta da melancolia, é o livro que rompe com o romantismo brasileiro. Capítulos brevíssimos, digressões, apóstrofes ao leitor e uma ironia corrosiva desmontam a autoimagem da elite carioca do Segundo Reinado. É o marco inicial do realismo no Brasil e uma das obras formalmente mais inventivas do século XIX em qualquer língua.'
    ],
    [
      'Dom Casmurro',
      'livro',
      1899,
      'Bento Santiago narra, já velho, a história de seu amor por Capitu e da suspeita de traição que destruiu sua vida. A construção é o ponto decisivo: todo o relato vem de um marido ciumento, e o leitor não tem acesso independente aos fatos. O romance transformou uma questão de enredo numa questão de confiança na narração, e a discussão sobre a culpa de Capitu atravessa mais de um século de crítica literária brasileira.'
    ],
    [
      'Quincas Borba',
      'livro',
      1891,
      'Acompanha Rubião, professor provinciano que herda a fortuna de um filósofo louco junto com a obrigação de cuidar de seu cachorro, e que é lentamente destruído pelo casal que o cerca. A doutrina do Humanitismo, criada pelo personagem-título, serve de paródia às filosofias otimistas e evolucionistas em voga, e a ruína de Rubião expõe a lógica de favor e dependência da sociedade brasileira do período.'
    ],
    ['Contos', 'livro', 1882, 'Reúne peças como O Alienista, sobre um médico que interna a cidade inteira em nome da ciência, A Cartomante, Missa do Galo e Pai contra Mãe, que trata diretamente da escravidão. Machado é considerado por muitos críticos o maior contista da língua portuguesa, e nesses textos a economia de meios torna a ironia ainda mais cortante do que nos romances.']
  ],
  'Jane Austen': [
    [
      'Orgulho e Preconceito',
      'livro',
      1813,
      'Elizabeth Bennet e o senhor Darcy medem-se por mal-entendidos, orgulho de classe e julgamentos precipitados numa Inglaterra rural em que casar bem era, para uma mulher sem herança, a única forma de segurança econômica. Sob a comédia de costumes há uma análise precisa da posição das mulheres numa sociedade em que a propriedade passava por linha masculina. É o romance mais lido e mais adaptado da autora.'
    ],
    [
      'Emma',
      'livro',
      1815,
      'Emma Woodhouse, rica e convencida de sua perspicácia, arranja casamentos alheios e erra em todos. Austen escreveu que criara uma heroína de quem ninguém gostaria além dela mesma, e construiu o livro inteiro em discurso indireto livre, de modo que o leitor compartilha os enganos da personagem antes de perceber a ironia da narradora. É considerado seu romance tecnicamente mais perfeito.'
    ],
    [
      'Persuasão',
      'livro',
      1817,
      'Anne Elliot rompeu um noivado oito anos antes, persuadida por uma amiga da família, e reencontra o ex-noivo agora enriquecido pela Marinha. Escrito no fim da vida da autora e publicado postumamente, é o mais melancólico de seus livros e o que mais claramente registra o deslocamento social da aristocracia rural diante de uma nova classe formada pelo mérito profissional.'
    ],
    ['Razão e Sensibilidade', 'livro', 1811, 'As irmãs Dashwood, uma contida e outra impulsiva, enfrentam o empobrecimento súbito e o mercado matrimonial após a morte do pai. Primeiro romance publicado por Austen, anonimamente, contrapõe duas formas de lidar com o afeto e a perda sem eleger nenhuma delas como plenamente correta.']
  ],
  'Simone de Beauvoir': [
    [
      'O Segundo Sexo',
      'livro',
      1949,
      'Em dois volumes, examina a condição feminina a partir da biologia, da psicanálise, do materialismo histórico, dos mitos e da experiência vivida, e conclui que a mulher foi construída ao longo da história como o Outro em relação a um homem tomado como norma. A frase que abre o segundo volume — não se nasce mulher, torna-se mulher — desloca o feminino do dado natural para a construção social. Provocou escândalo imediato ao ser publicado e é o ponto de partida da teoria feminista contemporânea.'
    ],
    ['Os Mandarins', 'livro', 1954, 'Romance sobre um grupo de intelectuais franceses no imediato pós-guerra, divididos entre o engajamento político e a vida privada, num momento em que a esquerda europeia precisava se posicionar diante da União Soviética. Rendeu à autora o Prêmio Goncourt e é leitura corrente sobre o ambiente intelectual parisiense da época.'],
    ['Memórias de uma Moça Bem-Comportada', 'livro', 1958, 'Primeiro dos quatro volumes autobiográficos, narra a infância e a juventude numa família burguesa católica, a perda da fé, a descoberta da filosofia e o rompimento com o destino previsto para uma moça de sua classe. É o registro de como se constrói uma vida intelectual contra as expectativas do meio.'],
    ['A Velhice', 'livro', 1970, 'Estudo extenso sobre a condição dos idosos, combinando biologia, história, etnologia e literatura para mostrar como a velhice é tratada como assunto vergonhoso e como os velhos são empurrados para fora da vida social. Aplica ao envelhecimento o mesmo método de O Segundo Sexo e permanece uma das análises mais completas do tema.']
  ],
  'Ralph Waldo Emerson': [
    [
      'Natureza',
      'ensaio',
      1836,
      'Ensaio que funda o transcendentalismo norte-americano. Sustenta que a verdade não se alcança por autoridade externa ou tradição, mas pela intuição direta e pela relação com a natureza, na qual se manifesta uma alma comum a todos os seres. Escrito quando os Estados Unidos ainda dependiam culturalmente da Europa, propõe uma relação original com o mundo em vez da repetição do que já foi pensado.'
    ],
    ['Autoconfiança', 'ensaio', 1841, 'Defende que cada pessoa deve confiar no próprio juízo em vez de seguir a opinião coletiva, e que a coerência forçada com o que se disse no passado é uma tirania sobre o presente. É um dos ensaios mais citados da língua inglesa e uma das raízes do individualismo americano, com influência declarada sobre Nietzsche.'],
    ['O Estudioso Americano', 'ensaio', 1837, 'Discurso proferido em Harvard, chamado por Oliver Wendell Holmes de declaração de independência intelectual dos Estados Unidos. Emerson convoca seus contemporâneos a parar de imitar a Europa e a construir pensamento a partir da experiência e da paisagem próprias.']
  ],
  'Winston Churchill': [
    [
      'A Segunda Guerra Mundial',
      'memoria',
      1953,
      'Seis volumes escritos pelo próprio protagonista, combinando narrativa histórica, memória pessoal e reprodução de documentos, telegramas e memorandos aos quais Churchill teve acesso privilegiado como primeiro-ministro. É fonte histórica de primeira ordem e, simultaneamente, uma versão parcial dos acontecimentos, ponto reconhecido pela historiografia. Foi determinante para o Prêmio Nobel de Literatura de 1953.'
    ],
    ['História dos Povos de Língua Inglesa', 'livro', 1958, 'Quatro volumes que percorrem a história da Britânia romana até o início do século XX, escritos em prosa narrativa de forte apelo literário. A obra reflete abertamente a visão imperial do autor sobre o papel britânico no mundo, e é lida hoje tanto como narrativa histórica quanto como documento sobre essa visão.'],
    ['Meus Primeiros Anos', 'memoria', 1930, 'Autobiografia da infância, dos anos escolares malsucedidos e da carreira militar na Índia, no Sudão e na Guerra dos Bôeres, incluindo a captura e a fuga que lhe deram fama nacional aos vinte e cinco anos. É o livro em que sua prosa aparece de forma mais leve e pessoal.']
  ],
  'Charlie Munger': [
    [
      'Poor Charlie\u2019s Almanack',
      'livro',
      2005,
      'Reúne discursos, palestras e ensaios de Munger, entre eles A Psicologia do Julgamento Errôneo, que cataloga vinte e cinco tendências humanas de decisão equivocada. Organiza sua proposta central: dominar as ideias fundamentais de várias disciplinas e usá-las combinadas, em vez de forçar todos os problemas num método único. Circulou por anos quase informalmente entre investidores antes de se tornar leitura corrente sobre tomada de decisão.'
    ]
  ],
  'Rui Barbosa': [
    [
      'Oração aos Moços',
      'discurso',
      1921,
      'Discurso escrito para os formandos da Faculdade de Direito do Largo de São Francisco e lido em seu nome, já com Rui Barbosa doente. Trata da igualdade como tratamento desigual dos desiguais na medida da desigualdade, da função social do advogado e da relação entre justiça e demora processual. Tornou-se texto de referência na formação jurídica brasileira.'
    ],
    ['Cartas de Inglaterra', 'livro', 1896, 'Reúne artigos escritos durante o exílio londrino, em que Rui Barbosa comenta a política britânica e brasileira e discute liberdade de imprensa, garantias individuais e o funcionamento das instituições. É o registro de como sua doutrina constitucional se formou em contato direto com o modelo inglês.']
  ],
  'Dalai Lama': [
    ['Liberdade no Exílio', 'memoria', 1990, 'Autobiografia que narra a identificação como reencarnação aos dois anos, a formação monástica em Lhasa, as negociações com Pequim e com Mao Tsé-Tung, a revolta de 1959 e a fuga a pé pelo Himalaia. É a principal fonte em primeira pessoa sobre a questão tibetana e sobre a construção da administração no exílio em Dharamsala.'],
    ['Uma Ética para o Novo Milênio', 'livro', 1999, 'Propõe uma ética secular, fundada na compaixão e na constatação de que todos buscam felicidade e evitam sofrimento, sem exigir adesão a nenhuma religião. Escrito para leitores de qualquer crença ou de nenhuma, é a formulação mais direta de sua posição sobre a relação entre ética e religião.'],
    ['A Arte da Felicidade', 'livro', 1998, 'Construído a partir de conversas com o psiquiatra Howard Cutler, combina a perspectiva budista sobre treinamento da mente com a linguagem da psicologia ocidental. Trata de raiva, ansiedade, relacionamentos e sofrimento em registro prático, e foi o livro que levou seu pensamento ao grande público fora da Ásia.']
  ]
};

/* segunda passagem de limpeza de obras-fantasma, agora sobre títulos
   que nomeiam uma fonte ou um conjunto, e não uma obra (§17) */
const RE_FALSO_2 = /^(Di[óo]genes La[ée]rcio|Registrado|Discurso na |Discursos de \d|Livros e discursos|.* e reuni[õo]es d|.* e discursos d|.* e demais|.*Segunda S[ée]rie e )/i;
(function limparObrasFantasma2() {
  Object.keys(OBRAS).forEach((a) => {
    const filtradas = OBRAS[a].filter((o) => {
      if (RE_FALSO_2.test(o.t)) {
        OBRAS_REMOVIDAS_F7.push([a, o.t]);
        return false;
      }
      return true;
    });
    if (filtradas.length) OBRAS[a] = filtradas;
    else delete OBRAS[a];
  });
})();

(function aplicarF10() {
  Object.entries(PANORAMAS_F10).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = {
      resumo: p.resumo,
      bio: p.bio,
      contexto: p.contexto,
      contribuicoes: p.contribuicoes || ant.contribuicoes || [],
      cronologia: p.cronologia || ant.cronologia || [],
      nota: p.nota || null
    };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F10).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF10() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      const feitos = CURADORIA_FILA.filter((l) => l.concluido).length;
      console.info('MeMotiva · Fase 10: curadoria em ' + feitos + '/' + CURADORIA_FILA.length + ' autores.');
    } catch (e) {
      console.error('Fase 10:', e);
    }
  };
})();

/* ================================================================
   FASE 11 — CONTINUAÇÃO DA FILA (autores 158 em diante)
   ================================================================ */
const PANORAMAS_F11 = {
  Buda: {
    papel: 'Fundador do budismo (c. 563 a.C.–c. 483 a.C.)',
    resumo: 'Príncipe que abandonou o palácio para investigar a origem do sofrimento e formulou um caminho para o seu fim.',
    bio: [
      'Sidarta Gautama nasceu em Lumbini, no atual Nepal, por volta do século VI a.C., filho de um chefe do clã Sákia. As datas variam conforme a tradição e não há consenso acadêmico. Segundo o relato transmitido, cresceu num ambiente de conforto deliberadamente protegido do contato com a doença, a velhice e a morte.',
      'A ruptura teria ocorrido em quatro encontros fora do palácio: um velho, um doente, um cadáver e um asceta. Aos vinte e nove anos deixou a família e passou seis anos em práticas ascéticas extremas, chegando à beira da inanição, até concluir que a mortificação do corpo não levava à compreensão. Adotou então o caminho do meio, entre a indulgência e a autopunição.',
      'O despertar ocorreu, segundo a tradição, sob uma figueira em Bodh Gaya. A formulação que dele resultou são as Quatro Nobres Verdades: existe sofrimento; ele tem origem no apego e na sede; pode cessar; e há um caminho de oito ramos que conduz a essa cessação — visão, intenção, fala, ação, modo de vida, esforço, atenção e concentração corretos. Duas teses distinguem sua doutrina das demais tradições indianas da época: a impermanência de tudo o que existe e a ausência de um eu substancial e permanente.',
      'Ensinou por cerca de quarenta e cinco anos no vale do Ganges, organizando uma comunidade monástica que admitia pessoas de todas as castas e, após resistência inicial, também mulheres. Morreu em Kushinagar por volta dos oitenta anos. Nada escreveu: os ensinamentos foram transmitidos oralmente por gerações antes de serem fixados no Cânone Páli, cerca de quatro séculos depois.'
    ],
    contexto: 'O budismo surge na Índia do período em que a autoridade dos Vedas e do sistema de castas era questionada por diversos movimentos ascéticos. A recusa de Sidarta em fundamentar a doutrina em revelação, autoridade sacerdotal ou especulação metafísica, propondo em vez disso a verificação pela própria experiência, é o que a distingue no cenário religioso de sua época.',
    contribuicoes: ['Formulou as Quatro Nobres Verdades e o Nobre Caminho Óctuplo.', 'Estabeleceu as doutrinas da impermanência e da ausência de um eu substancial.', 'Fundou uma comunidade monástica aberta a todas as castas.', 'Deu origem a uma das grandes tradições religiosas e filosóficas do mundo.'],
    cronologia: [
      ['c. 563 a.C.', 'Nasce em Lumbini, no atual Nepal.'],
      ['c. 534 a.C.', 'Deixa o palácio e inicia a vida ascética.'],
      ['c. 528 a.C.', 'Alcança o despertar em Bodh Gaya e inicia o ensino.'],
      ['c. 483 a.C.', 'Morre em Kushinagar.'],
      ['séc. I a.C.', 'Os ensinamentos são fixados por escrito no Cânone Páli.']
    ],
    nota: 'As datas de vida do Buda variam conforme a tradição e não há consenso acadêmico. Ele nada escreveu: os textos foram fixados séculos depois da morte.'
  },

  'Kahlil Gibran': {
    papel: 'Poeta e artista libanês-americano (1883–1931)',
    resumo: 'Escreveu O Profeta, um dos livros de poesia mais vendidos da história, em inglês e no exílio.',
    bio: [
      'Gibran Khalil Gibran nasceu em Bcharre, no norte do atual Líbano, então província otomana, em 6 de janeiro de 1883, numa família cristã maronita pobre. O pai foi preso por desfalque e a família perdeu tudo. A mãe emigrou com os filhos para Boston em 1895, onde trabalhou como costureira e vendedora ambulante.',
      'Foi matriculado numa escola para imigrantes, onde um funcionário registrou errado seu nome, fixando a grafia que usaria pela vida. Seu talento para desenho chamou a atenção de um fotógrafo e editor de vanguarda que o apresentou ao meio artístico de Boston. Voltou a Beirute para estudar árabe e depois estudou arte em Paris, onde teve contato com a escultura de Rodin.',
      'Entre 1902 e 1903 perdeu para a tuberculose e o câncer uma irmã, o meio-irmão e a mãe. Publicou primeiro em árabe — textos que renovaram a prosa literária da língua e o tornaram figura central do movimento literário da diáspora — e depois passou a escrever em inglês.',
      'O Profeta saiu em 1923: vinte e seis ensaios poéticos em que um profeta prestes a partir de uma cidade responde a perguntas sobre amor, casamento, filhos, trabalho, alegria e morte. Foi recebido com frieza pela crítica e adotado com entusiasmo por gerações de leitores, atravessando o século em vendas contínuas e sendo traduzido para mais de cem idiomas. Gibran morreu em Nova York em 10 de abril de 1931, aos 48 anos, de cirrose e tuberculose.'
    ],
    contexto: 'Gibran escreve entre duas línguas e duas culturas, num momento em que a diáspora árabe nas Américas produzia uma literatura própria. O Profeta encontrou público justamente por não pertencer a nenhuma tradição religiosa específica, oferecendo um registro espiritual que dispensava filiação — o que explica seu alcance duradouro e também a resistência da crítica literária.',
    contribuicoes: ['Escreveu O Profeta (1923), um dos livros de poesia mais vendidos e traduzidos da história.', 'Renovou a prosa literária árabe moderna com sua obra em língua árabe.', 'Foi figura central do movimento literário da diáspora árabe nas Américas.', 'Deixou obra plástica considerável, com centenas de desenhos e pinturas.'],
    cronologia: [
      [1883, 'Nasce em Bcharre, no atual Líbano, em 6 de janeiro.'],
      [1895, 'Emigra com a família para Boston.'],
      [1908, 'Estuda arte em Paris.'],
      [1918, 'Publica O Louco, primeiro livro em inglês.'],
      [1923, 'Publica O Profeta.'],
      [1931, 'Morre em Nova York.']
    ]
  },

  'Victor Hugo': {
    papel: 'Escritor e político francês (1802–1885)',
    resumo: 'Maior nome do romantismo francês, escreveu Os Miseráveis no exílio e teve funeral com dois milhões de pessoas.',
    bio: [
      'Victor-Marie Hugo nasceu em Besançon em 26 de fevereiro de 1802, filho de um general napoleônico e de uma mãe monarquista. Publicou o primeiro livro de poemas aos vinte anos. O prefácio de sua peça Cromwell, em 1827, e a batalha em torno da estreia de Hernani, em 1830, quando partidários e adversários brigaram literalmente na plateia, marcaram a vitória do romantismo sobre as regras clássicas no teatro francês.',
      'O Corcunda de Notre-Dame, de 1831, além de romance histórico, foi campanha bem-sucedida pela preservação da arquitetura gótica, então em ruínas e ameaçada de demolição em toda a França. Em 1843 perdeu a filha Léopoldine, afogada aos dezenove anos, poucos meses após o casamento — perda que atravessa boa parte de sua poesia posterior.',
      'Eleito deputado, aproximou-se progressivamente das causas republicanas e sociais. Após o golpe de Luís Bonaparte em 1851, exilou-se por dezenove anos, primeiro na Bélgica e depois nas ilhas de Jersey e Guernsey. Recusou a anistia oferecida, declarando que voltaria quando a liberdade voltasse. Foi no exílio que escreveu Os Miseráveis, publicado em 1862.',
      'O romance acompanha Jean Valjean, condenado a dezenove anos de trabalhos forçados por roubar um pão, e constrói a partir dele um retrato da miséria, da lei penal e da revolta popular na França do século XIX. Hugo militou contra a pena de morte, pela educação gratuita e pelos direitos das crianças. Voltou a Paris em 1870, foi senador e morreu em 22 de maio de 1885; o funeral reuniu cerca de dois milhões de pessoas e ele foi sepultado no Panteão.'
    ],
    contexto: 'Hugo atravessou a Restauração, duas monarquias, dois impérios e três repúblicas, e mudou de posição política ao longo da vida, de monarquista a republicano convicto. Sua obra é inseparável dessa trajetória: a literatura, para ele, era instrumento de intervenção pública, e sua estatura permitiu-lhe exercer influência política mesmo exilado.',
    contribuicoes: [
      'Escreveu Os Miseráveis (1862) e O Corcunda de Notre-Dame (1831).',
      'Liderou a vitória do romantismo sobre o classicismo no teatro francês.',
      'Sua campanha literária foi decisiva para a preservação da arquitetura gótica na França.',
      'Militou contra a pena de morte e pela educação pública gratuita.',
      'Deixou vasta obra poética, entre ela As Contemplações e A Lenda dos Séculos.'
    ],
    cronologia: [
      [1802, 'Nasce em Besançon, em 26 de fevereiro.'],
      [1830, 'Estreia Hernani, marco da vitória romântica.'],
      [1831, 'Publica O Corcunda de Notre-Dame.'],
      [1843, 'Morte da filha Léopoldine.'],
      [1851, 'Exila-se após o golpe de Luís Bonaparte.'],
      [1862, 'Publica Os Miseráveis.'],
      [1870, 'Retorna a Paris.'],
      [1885, 'Morre em Paris; é sepultado no Panteão.']
    ]
  },

  'Oscar Wilde': {
    papel: 'Escritor irlandês (1854–1900)',
    resumo: 'O autor mais espirituoso de sua época foi condenado a trabalhos forçados por sua homossexualidade e morreu arruinado aos 46 anos.',
    bio: [
      'Oscar Fingal O\u2019Flahertie Wills Wilde nasceu em Dublin em 16 de outubro de 1854, filho de um cirurgião renomado e de uma poeta nacionalista irlandesa. Estudou no Trinity College e em Oxford, onde se destacou nos clássicos e absorveu a doutrina do esteticismo, segundo a qual a arte não deve servir a fins morais ou utilitários.',
      'Tornou-se celebridade em Londres antes de ter obra publicada relevante, pela conversa, pelo modo de vestir e pela capacidade de produzir frases que circulavam sozinhas. Fez uma turnê de conferências pelos Estados Unidos em 1882. Casou-se com Constance Lloyd e teve dois filhos.',
      'O Retrato de Dorian Gray, seu único romance, saiu em 1890 e foi atacado como imoral. Entre 1892 e 1895 escreveu as comédias que o consagraram — O Leque de Lady Windermere, Uma Mulher Sem Importância, Um Marido Ideal e A Importância de Ser Prudente —, peças em que a crítica à hipocrisia social vem embrulhada em diálogo brilhante.',
      'No auge do sucesso, processou o marquês de Queensberry, pai de seu amante Alfred Douglas, por difamação. O processo se voltou contra ele: foi julgado e condenado em 1895 a dois anos de trabalhos forçados por atos de grave indecência. Na prisão de Reading escreveu a longa carta De Profundis. Saiu falido, com a obra retirada de cartaz e o nome apagado dos cartazes, e exilou-se na França sob pseudônimo. Publicou A Balada do Cárcere de Reading e morreu em Paris em 30 de novembro de 1900. Recebeu perdão póstumo do Reino Unido em 2017, junto a milhares de outros condenados pela mesma lei.'
    ],
    contexto: 'Wilde é ao mesmo tempo o produto mais brilhante da sociedade vitoriana e sua vítima mais célebre. Sua condenação, num julgamento amplamente coberto pela imprensa, mostrou o limite exato da tolerância daquela sociedade e transformou sua biografia em episódio central da história dos direitos civis.',
    contribuicoes: [
      'Escreveu A Importância de Ser Prudente, considerada uma das melhores comédias em língua inglesa.',
      'Escreveu O Retrato de Dorian Gray, único romance e obra central do esteticismo.',
      'Escreveu De Profundis, longa carta redigida na prisão.',
      'Escreveu contos como O Príncipe Feliz e O Gigante Egoísta.',
      'Sua condenação em 1895 tornou-se marco na história da perseguição legal à homossexualidade.'
    ],
    cronologia: [
      [1854, 'Nasce em Dublin, em 16 de outubro.'],
      [1882, 'Faz turnê de conferências pelos Estados Unidos.'],
      [1890, 'Publica O Retrato de Dorian Gray.'],
      [1895, 'Estreia A Importância de Ser Prudente e é condenado a dois anos de trabalhos forçados.'],
      [1897, 'Sai da prisão e exila-se na França.'],
      [1900, 'Morre em Paris.'],
      [2017, 'Recebe perdão póstumo do Reino Unido.']
    ]
  },

  'Virginia Woolf': {
    papel: 'Escritora britânica (1882–1941)',
    resumo: 'Reinventou o romance com o fluxo de consciência e escreveu o ensaio fundador da crítica literária feminista.',
    bio: [
      'Adeline Virginia Stephen nasceu em Londres em 25 de janeiro de 1882, filha de Leslie Stephen, crítico e editor. Não frequentou universidade — os irmãos homens foram a Cambridge, ela estudou em casa, com acesso à vasta biblioteca do pai. Sofreu abuso sexual por parte de meios-irmãos, e as mortes da mãe, da meia-irmã, do pai e do irmão em sucessão desencadearam crises psíquicas graves que retornariam pela vida inteira.',
      'Com o marido Leonard Woolf fundou em 1917 a editora Hogarth Press, que publicou sua obra e também T. S. Eliot, Katherine Mansfield e a primeira tradução inglesa de Freud. Integrou o Grupo de Bloomsbury, círculo de escritores, economistas e artistas que rompia com as convenções vitorianas em estética, política e vida privada.',
      'A partir de Mrs Dalloway (1925) desenvolveu sua técnica característica: a narrativa abandona o enredo externo e acompanha o movimento da consciência, com o tempo interior expandindo-se e contraindo-se independentemente do relógio. Ao Farol (1927) e As Ondas (1931) levaram o procedimento adiante. Orlando (1928), escrito para Vita Sackville-West, atravessa três séculos com um protagonista que muda de sexo.',
      'Um Teto Todo Seu, de 1929, nasceu de conferências em faculdades femininas de Cambridge. Argumenta que para escrever ficção uma mulher precisa de dinheiro e de um quarto próprio, e demonstra com a hipótese da irmã imaginária de Shakespeare que o talento sem condições materiais não produz obra. É o texto fundador da crítica literária feminista. Woolf tirou a própria vida em 28 de março de 1941, no rio Ouse, deixando uma carta ao marido.'
    ],
    contexto: 'Woolf escreve no modernismo inglês do entreguerras, quando as certezas narrativas do romance vitoriano já não davam conta da experiência fragmentada da vida moderna. Sua contribuição foi tornar o interior da consciência — e não o acontecimento — o próprio material do romance, ao mesmo tempo em que analisava as condições materiais que historicamente impediram mulheres de escrever.',
    contribuicoes: ['Escreveu Mrs Dalloway, Ao Farol, Orlando e As Ondas.', 'Desenvolveu o fluxo de consciência como forma central do romance modernista.', 'Escreveu Um Teto Todo Seu (1929), texto fundador da crítica literária feminista.', 'Fundou com Leonard Woolf a Hogarth Press.', 'Integrou o Grupo de Bloomsbury, um dos círculos intelectuais mais influentes do século XX.'],
    cronologia: [
      [1882, 'Nasce em Londres, em 25 de janeiro.'],
      [1917, 'Funda a Hogarth Press com Leonard Woolf.'],
      [1925, 'Publica Mrs Dalloway.'],
      [1927, 'Publica Ao Farol.'],
      [1928, 'Publica Orlando.'],
      [1929, 'Publica Um Teto Todo Seu.'],
      [1931, 'Publica As Ondas.'],
      [1941, 'Morre em Rodmell, em 28 de março.']
    ],
    nota: 'Woolf conviveu por toda a vida com transtorno mental grave e tirou a própria vida em 1941.'
  },

  'Helen Keller': {
    papel: 'Escritora e ativista norte-americana (1880–1968)',
    resumo: 'Surda e cega desde os dezenove meses, formou-se em universidade e tornou-se uma das ativistas mais influentes de seu tempo.',
    bio: [
      'Helen Adams Keller nasceu em Tuscumbia, Alabama, em 27 de junho de 1880. Aos dezenove meses uma doença febril — provavelmente meningite ou escarlatina — deixou-a surda e cega. Passou os anos seguintes isolada da linguagem, comunicando-se por gestos rudimentares improvisados com a família.',
      'Em 1887, quando tinha sete anos, chegou a professora Anne Sullivan, ela própria com visão parcial e formada no Instituto Perkins. O momento decisivo ocorreu junto a uma bomba d\u2019água: Sullivan soletrava a palavra water na mão de Helen enquanto a água corria sobre a outra, e a criança compreendeu de repente que os movimentos correspondiam a coisas. Aprendeu centenas de palavras em poucos dias. Sullivan permaneceu ao seu lado por quase cinquenta anos.',
      'Keller aprendeu braille em várias línguas, aprendeu a falar sentindo com os dedos as vibrações da garganta e da boca de quem falava, e formou-se com louvor no Radcliffe College em 1904, tornando-se a primeira pessoa surdocega a obter um diploma universitário. Publicou A História da Minha Vida ainda estudante.',
      'Sua atuação pública foi muito além da questão da deficiência, embora seja o aspecto mais lembrado. Foi socialista declarada, membro do Partido Socialista e do sindicato Trabalhadores Industriais do Mundo, sufragista, pacifista durante a Primeira Guerra e defensora do controle de natalidade. Cofundou a União Americana pelas Liberdades Civis em 1920 e trabalhou por décadas na Fundação Americana para Cegos. Recebeu a Medalha Presidencial da Liberdade em 1964 e morreu em Connecticut em 1º de junho de 1968.'
    ],
    contexto: 'Keller viveu num período em que pessoas surdocegas eram rotineiramente institucionalizadas e consideradas ineducáveis. Sua trajetória alterou de forma concreta o que se acreditava possível, e sua militância política — frequentemente omitida das versões inspiracionais de sua biografia — mostra que ela recusava ser reduzida a símbolo de superação individual.',
    contribuicoes: [
      'Foi a primeira pessoa surdocega a obter um diploma universitário nos Estados Unidos.',
      'Escreveu A História da Minha Vida (1903), traduzida para dezenas de idiomas.',
      'Trabalhou por décadas na Fundação Americana para Cegos, ampliando serviços e legislação.',
      'Cofundou a União Americana pelas Liberdades Civis.',
      'Militou pelo sufrágio feminino, pelo pacifismo e pelos direitos trabalhistas.',
      'Recebeu a Medalha Presidencial da Liberdade em 1964.'
    ],
    cronologia: [
      [1880, 'Nasce em Tuscumbia, Alabama, em 27 de junho.'],
      [1882, 'Perde a visão e a audição por doença febril.'],
      [1887, 'Anne Sullivan torna-se sua professora.'],
      [1904, 'Forma-se no Radcliffe College.'],
      [1920, 'Cofunda a União Americana pelas Liberdades Civis.'],
      [1964, 'Recebe a Medalha Presidencial da Liberdade.'],
      [1968, 'Morre em Connecticut.']
    ]
  },

  'Eleanor Roosevelt': {
    papel: 'Diplomata e ativista norte-americana (1884–1962)',
    resumo: 'Redefiniu o papel de primeira-dama e presidiu a comissão que redigiu a Declaração Universal dos Direitos Humanos.',
    bio: [
      'Anna Eleanor Roosevelt nasceu em Nova York em 11 de outubro de 1884, em família rica e infeliz. Ficou órfã antes dos dez anos e foi criada pela avó. Estudou na Inglaterra sob a direção de uma educadora que a marcou profundamente. Casou-se em 1905 com o primo em quinto grau Franklin Delano Roosevelt; o tio Theodore Roosevelt, então presidente, conduziu-a ao altar.',
      'Descobriu em 1918 a relação de Franklin com a secretária Lucy Mercer. O casamento continuou, mas transformou-se numa parceria política sem intimidade conjugal. Quando Franklin ficou paralisado em 1921, Eleanor tornou-se sua presença pública, viajando, discursando e mantendo viva sua carreira.',
      'Como primeira-dama, entre 1933 e 1945, rompeu com todo o precedente do cargo. Deu entrevistas coletivas abertas apenas a jornalistas mulheres, forçando os jornais a contratá-las. Escreveu a coluna diária My Day por vinte e seis anos. Percorreu minas de carvão, favelas e campos de trabalho e relatava a Franklin o que via. Em 1939 renunciou às Filhas da Revolução Americana quando a organização impediu a cantora negra Marian Anderson de se apresentar num auditório, e ajudou a organizar o concerto alternativo no Lincoln Memorial, diante de setenta e cinco mil pessoas.',
      'Após a morte do marido, foi nomeada por Truman delegada dos Estados Unidos nas Nações Unidas e presidiu a Comissão de Direitos Humanos que redigiu a Declaração Universal, adotada em 10 de dezembro de 1948 — trabalho de negociação entre blocos ideológicos opostos que ela conduziu pessoalmente. Morreu em Nova York em 7 de novembro de 1962.'
    ],
    contexto: 'Eleanor Roosevelt atuou num período em que a esposa de um presidente devia ser invisível. Ao transformar o posto em plataforma política própria, e depois ao presidir a redação do documento de direitos humanos mais influente da história, tornou-se uma das figuras públicas mais poderosas do século sem jamais ter sido eleita para nada.',
    contribuicoes: [
      'Presidiu a comissão da ONU que redigiu a Declaração Universal dos Direitos Humanos (1948).',
      'Redefiniu o papel público da primeira-dama nos Estados Unidos.',
      'Escreveu por vinte e seis anos a coluna diária My Day.',
      'Militou pelos direitos civis, tendo rompido publicamente com organizações segregacionistas.',
      'Defendeu os direitos das mulheres e dos trabalhadores durante e após o New Deal.'
    ],
    cronologia: [
      [1884, 'Nasce em Nova York, em 11 de outubro.'],
      [1905, 'Casa-se com Franklin Delano Roosevelt.'],
      [1933, 'Torna-se primeira-dama e inicia as coletivas para jornalistas mulheres.'],
      [1939, 'Rompe com as Filhas da Revolução Americana pelo caso Marian Anderson.'],
      [1945, 'É nomeada delegada dos Estados Unidos na ONU.'],
      [1948, 'A Declaração Universal dos Direitos Humanos é adotada.'],
      [1962, 'Morre em Nova York.']
    ]
  },

  'Malala Yousafzai': {
    papel: 'Ativista paquistanesa pela educação (1997–)',
    resumo: 'Baleada na cabeça aos quinze anos por defender o direito das meninas à escola, tornou-se a mais jovem laureada com o Nobel da Paz.',
    bio: [
      'Malala Yousafzai nasceu em Mingora, no vale do Swat, no noroeste do Paquistão, em 12 de julho de 1997. O pai, Ziauddin, era professor e dirigia uma escola que aceitava meninas — decisão incomum na região e determinante em sua formação.',
      'Quando o Talibã tomou o controle do vale em 2007 e proibiu a educação feminina, Malala, então com onze anos, passou a escrever um diário anônimo para o serviço em urdu da BBC, descrevendo o medo, o fechamento das escolas e a vida sob a proibição. Sua identidade veio a público, e ela passou a dar entrevistas e a receber prêmios nacionais, tornando-se alvo declarado.',
      'Em 9 de outubro de 2012, um homem armado subiu no ônibus escolar, perguntou por ela e disparou. A bala atingiu o lado esquerdo da cabeça e alojou-se no ombro. Foi operada no Paquistão e transferida para Birmingham, na Inglaterra, onde passou por múltiplas cirurgias, incluindo reconstrução craniana e implante coclear. A família permaneceu no Reino Unido.',
      'No aniversário de dezesseis anos, discursou na sede das Nações Unidas. Recebeu o Nobel da Paz em 2014, aos dezessete, dividido com o ativista indiano Kailash Satyarthi — a mais jovem laureada da história do prêmio. Fundou o Fundo Malala, formou-se em filosofia, política e economia em Oxford em 2020 e continua atuando pelo acesso de meninas à educação em vários países.'
    ],
    contexto: 'Malala tornou-se símbolo internacional num momento em que a proibição da educação feminina por grupos armados voltava à agenda mundial. Sua figura é celebrada globalmente e recebeu também críticas dentro do próprio Paquistão, onde parte da opinião pública a acusou de instrumentalização ocidental — controvérsia que ela própria já abordou publicamente.',
    contribuicoes: ['Denunciou publicamente a proibição da educação feminina no vale do Swat ainda criança.', 'Tornou-se a mais jovem pessoa a receber o Prêmio Nobel da Paz, em 2014.', 'Fundou o Fundo Malala, dedicado ao acesso de meninas à educação.', 'Escreveu Eu Sou Malala (2013), traduzido para dezenas de idiomas.', 'Sua data de nascimento foi instituída pela ONU como Dia de Malala.'],
    cronologia: [
      [1997, 'Nasce em Mingora, no vale do Swat, em 12 de julho.'],
      [2009, 'Escreve o diário anônimo para a BBC em urdu.'],
      [2012, 'É baleada no ônibus escolar em 9 de outubro.'],
      [2013, 'Discursa na ONU e publica Eu Sou Malala.'],
      [2014, 'Recebe o Prêmio Nobel da Paz.'],
      [2020, 'Forma-se em Oxford.']
    ]
  },

  'bell hooks': {
    papel: 'Escritora e teórica feminista norte-americana (1952–2021)',
    resumo: 'Mostrou que raça, classe e gênero não podem ser analisados separadamente, e escreveu em linguagem acessível por opção política.',
    bio: [
      'Gloria Jean Watkins nasceu em Hopkinsville, Kentucky, em 25 de setembro de 1952, numa família da classe trabalhadora negra do Sul segregado. Adotou o pseudônimo bell hooks em homenagem à bisavó materna e insistia na grafia em minúsculas para deslocar a atenção do autor para as ideias. Estudou em Stanford, Wisconsin e doutorou-se na Universidade da Califórnia em Santa Cruz.',
      'Começou a escrever E Eu Não Sou Uma Mulher aos dezenove anos; o livro saiu em 1981 e tornou-se um marco. A tese é que o feminismo dominante, formulado por mulheres brancas de classe média, e o movimento negro, conduzido sobretudo por homens, deixavam de fora justamente a experiência das mulheres negras, cuja opressão não é a soma de duas coisas separadas, mas uma condição própria.',
      'Definiu o feminismo como o movimento para acabar com o sexismo, a exploração sexista e a opressão — formulação que desloca o foco das mulheres como grupo para o sistema a ser desmontado, e que abre espaço para pensar como o patriarcado também prejudica os homens, tema que desenvolveu em O Desejo de Mudar.',
      'Escreveu mais de trinta livros, sobre amor, pedagogia, cinema, arte e cultura de massa, incluindo Ensinando a Transgredir, em diálogo com Paulo Freire. Fez da clareza uma decisão política: recusava a linguagem hermética da academia por entender que o conhecimento precisa circular fora dela. Lecionou em Yale, Oberlin e no Berea College, no Kentucky, onde criou o instituto que leva seu nome. Morreu em Berea em 15 de dezembro de 2021.'
    ],
    contexto: 'hooks escreve no momento em que o feminismo da segunda onda era confrontado por mulheres negras, latinas e da classe trabalhadora que não se reconheciam em suas categorias. Sua obra é uma das principais formulações desse confronto e antecede, com outras autoras, o vocabulário que se tornaria conhecido como interseccionalidade.',
    contribuicoes: [
      'Escreveu E Eu Não Sou Uma Mulher (1981), marco da crítica ao feminismo branco de classe média.',
      'Formulou a análise conjunta de raça, classe e gênero como sistemas indissociáveis.',
      'Definiu o feminismo como movimento para acabar com o sexismo e a opressão sexista.',
      'Escreveu Ensinando a Transgredir, sobre pedagogia engajada, em diálogo com Paulo Freire.',
      'Adotou deliberadamente a linguagem acessível como posição política contra o fechamento acadêmico.'
    ],
    cronologia: [
      [1952, 'Nasce em Hopkinsville, Kentucky, em 25 de setembro.'],
      [1981, 'Publica E Eu Não Sou Uma Mulher.'],
      [1984, 'Publica Teoria Feminista: Da Margem ao Centro.'],
      [1994, 'Publica Ensinando a Transgredir.'],
      [2000, 'Publica Tudo Sobre o Amor.'],
      [2021, 'Morre em Berea, Kentucky.']
    ]
  },

  'Richard Branson': {
    papel: 'Empresário britânico (1950–)',
    resumo: 'Criou um conglomerado de centenas de empresas sob uma única marca, do disco à companhia aérea e ao turismo espacial.',
    bio: [
      'Richard Charles Nicholas Branson nasceu em Blackheath, Londres, em 18 de julho de 1950. Tem dislexia e teve desempenho escolar ruim; abandonou a escola aos dezesseis anos para lançar uma revista voltada a estudantes. O diretor da escola teria previsto que ele acabaria na cadeia ou milionário.',
      'Da revista veio a venda de discos por correspondência, depois uma loja e, em 1972, um estúdio de gravação. A Virgin Records lançou Tubular Bells, de Mike Oldfield, em 1973 — um álbum instrumental que nenhuma gravadora quisera e que se tornou enorme sucesso. A gravadora depois contratou os Sex Pistols, quando ninguém mais os aceitava, e mais tarde artistas de grande porte.',
      'Em 1984 fundou a Virgin Atlantic, entrando num setor de capital intensivo e margens estreitas, e travou uma longa disputa com a British Airways que terminou em processo judicial vencido por difamação. Vendeu a Virgin Records em 1992 para financiar a companhia aérea, decisão que descreveu como dolorosa.',
      'A marca Virgin passou a licenciar-se para setores muito diversos — trens, telefonia, academias, serviços financeiros — e nem todos deram certo; a Virgin Cola e a Virgin Brides estão entre os fracassos que ele mesmo cita. Fundou a Virgin Galactic, voltada ao turismo suborbital, e voou em 2021 em um de seus veículos. Bateu recordes em travessias de balão e barco e é conhecido por uma cultura empresarial que coloca funcionários antes de clientes.'
    ],
    contexto: 'Branson construiu algo raro: uma marca que atravessa setores sem relação técnica entre si, sustentada pela figura pública do fundador. Esse modelo, que depende da personalidade como ativo, é ao mesmo tempo sua maior vantagem e a razão da irregularidade dos resultados entre as diferentes empresas do grupo.',
    contribuicoes: [
      'Fundou a Virgin Records, que lançou Mike Oldfield e os Sex Pistols.',
      'Criou a Virgin Atlantic e quebrou o domínio estabelecido no mercado aéreo britânico.',
      'Construiu a Virgin como marca licenciada em dezenas de setores distintos.',
      'Fundou a Virgin Galactic, uma das primeiras empresas de voo suborbital comercial.',
      'Popularizou a ideia de que o cuidado com os funcionários precede o cuidado com os clientes.'
    ],
    cronologia: [
      [1950, 'Nasce em Londres, em 18 de julho.'],
      [1970, 'Inicia a venda de discos por correspondência.'],
      [1973, 'Lança Tubular Bells pela Virgin Records.'],
      [1984, 'Funda a Virgin Atlantic.'],
      [1992, 'Vende a Virgin Records para financiar a companhia aérea.'],
      [2004, 'Funda a Virgin Galactic.'],
      [2021, 'Voa em veículo suborbital da própria empresa.']
    ]
  },

  'Tom Peters': {
    papel: 'Escritor e consultor de gestão norte-americano (1942–)',
    resumo: 'Escreveu Em Busca da Excelência e criou o mercado moderno de literatura de gestão.',
    bio: [
      'Thomas J. Peters nasceu em Baltimore em 7 de novembro de 1942. Formou-se em engenharia civil em Cornell, serviu na Marinha durante a Guerra do Vietnã e doutorou-se em administração em Stanford. Trabalhou na Casa Branca e depois na consultoria McKinsey.',
      'Em Busca da Excelência, escrito com Robert Waterman e publicado em 1982, partiu de uma pesquisa da McKinsey sobre empresas americanas de desempenho superior. O livro identificou oito atributos comuns, entre eles a preferência pela ação, a proximidade com o cliente, a autonomia e o empreendedorismo interno, e a manutenção de valores centrais mesmo em estruturas grandes.',
      'O contexto explica o impacto. Publicado no momento em que a indústria americana perdia terreno para os japoneses e o discurso corrente pregava mais planejamento e mais análise, o livro afirmava o contrário: as empresas bem-sucedidas agiam, experimentavam e cuidavam das pessoas. Vendeu milhões de exemplares e é frequentemente apontado como o livro que criou o mercado moderno de literatura de negócios.',
      'Peters passou a escrever e a palestrar em ritmo intenso, com títulos como Prosperando no Caos e A Busca do Uau!, defendendo a organização enxuta, a marca pessoal e a inovação permanente. Reconheceu depois que várias das empresas citadas em Em Busca da Excelência entraram em declínio nos anos seguintes, e a metodologia da pesquisa original foi objeto de críticas.'
    ],
    contexto: 'Peters escreve na virada em que a gestão americana deixou de ser assunto técnico restrito a executivos e virou produto cultural de massa, com best-sellers, palestras pagas e gurus. Ele é simultaneamente o autor que abriu esse mercado e um crítico posterior de seus excessos.',
    contribuicoes: ['Escreveu com Robert Waterman Em Busca da Excelência (1982).', 'Criou o mercado moderno de livros e palestras de gestão.', 'Contribuiu para o modelo dos sete S da McKinsey.', 'Deslocou a discussão de gestão da estrutura e do planejamento para as pessoas e a ação.'],
    cronologia: [
      [1942, 'Nasce em Baltimore, em 7 de novembro.'],
      [1974, 'Doutora-se em administração em Stanford.'],
      [1982, 'Publica Em Busca da Excelência.'],
      [1987, 'Publica Prosperando no Caos.'],
      [1994, 'Publica A Busca do Uau!']
    ]
  },

  'George Eliot': {
    papel: 'Escritora britânica (1819–1880)',
    resumo: 'Adotou nome masculino para ser levada a sério e escreveu Middlemarch, apontado por muitos como o maior romance em língua inglesa.',
    bio: [
      'Mary Ann Evans nasceu em Nuneaton, Warwickshire, em 22 de novembro de 1819, filha de um administrador de propriedades rurais. Recebeu educação incomum para uma menina de sua classe, com acesso à biblioteca da casa que o pai administrava. Aos vinte e poucos anos abandonou a fé evangélica após leituras de crítica bíblica, o que provocou ruptura com o pai.',
      'Traduziu do alemão obras de crítica religiosa e tornou-se editora de fato da revista Westminster Review, em Londres — posição de enorme influência intelectual que exercia sem poder assinar. Viveu por mais de vinte anos com George Henry Lewes, que era casado e não podia se divorciar, o que lhe custou o isolamento social.',
      'Adotou o pseudônimo masculino George Eliot em 1857 para escapar da recepção condescendente reservada às romancistas mulheres e para evitar que sua vida pessoal contaminasse a leitura dos livros. Publicou Adam Bede, O Moinho à Beira do Rio, Silas Marner e Middlemarch, este último entre 1871 e 1872.',
      'Middlemarch acompanha várias famílias de uma cidade provinciana inglesa às vésperas da reforma eleitoral de 1832, entrelaçando ambição intelectual, casamento, medicina, política local e dinheiro. Sua profundidade psicológica e a recusa em oferecer heróis ou vilões fizeram Virginia Woolf descrevê-lo como um dos poucos romances ingleses escritos para adultos. Eliot morreu em Londres em 22 de dezembro de 1880.'
    ],
    contexto: 'Eliot escreve na Inglaterra vitoriana em que romances de autoria feminina eram esperados como entretenimento sentimental. Sua obra é deliberadamente o contrário: densa, filosófica, interessada em consequências morais de escolhas pequenas, e formada pela leitura de Feuerbach, Spinoza e da ciência de seu tempo.',
    contribuicoes: [
      'Escreveu Middlemarch, considerado por muitos críticos o maior romance da literatura inglesa.',
      'Escreveu Adam Bede, O Moinho à Beira do Rio, Silas Marner e Daniel Deronda.',
      'Levou ao romance inglês uma profundidade psicológica e filosófica sem precedente.',
      'Traduziu obras decisivas da crítica religiosa alemã para o inglês.',
      'Editou de fato a Westminster Review, uma das revistas intelectuais mais influentes do período.'
    ],
    cronologia: [
      [1819, 'Nasce em Nuneaton, em 22 de novembro.'],
      [1851, 'Torna-se editora de fato da Westminster Review.'],
      [1857, 'Adota o pseudônimo George Eliot.'],
      [1859, 'Publica Adam Bede.'],
      [1871, 'Inicia a publicação de Middlemarch.'],
      [1880, 'Morre em Londres.']
    ]
  },

  'Elbert Hubbard': {
    papel: 'Escritor e editor norte-americano (1856–1915)',
    resumo: 'Fundou uma comunidade de artesãos, escreveu o panfleto mais distribuído de seu tempo e morreu no naufrágio do Lusitânia.',
    bio: [
      'Elbert Green Hubbard nasceu em Bloomington, Illinois, em 19 de junho de 1856. Foi vendedor de sabão de grande sucesso antes de vender sua participação no negócio e viajar à Inglaterra, onde conheceu o movimento Arts and Crafts de William Morris.',
      'De volta aos Estados Unidos, fundou em 1895 os Roycrofters, em East Aurora, Nova York: uma comunidade de artesãos e uma editora dedicada a livros feitos à mão, encadernação artesanal, móveis e trabalho em couro e metal. O empreendimento tornou-se um dos centros do Arts and Crafts americano.',
      'Uma Mensagem a Garcia, publicada em 1899 na revista que editava, é seu texto mais conhecido. O ensaio breve narra a história de um oficial encarregado de entregar uma mensagem a um líder rebelde cubano e que a executa sem fazer perguntas, e transforma o episódio num elogio à iniciativa e à execução sem supervisão. Foi distribuído em milhões de exemplares por empresas, exércitos e governos, e é lido hoje também como peça sobre obediência acrítica.',
      'Hubbard escreveu ainda a série Pequenas Viagens às Casas dos Grandes, com perfis biográficos populares. Morreu em 7 de maio de 1915, junto com a esposa Alice, no torpedeamento do transatlântico Lusitânia por um submarino alemão.'
    ],
    contexto: 'Hubbard atua no encontro entre o artesanato romântico do movimento Arts and Crafts e a cultura empresarial americana da virada do século. Essa combinação improvável — oficinas manuais financiadas por um talento excepcional para marketing — explica tanto seu sucesso quanto a ambiguidade de sua obra.',
    contribuicoes: ['Fundou os Roycrofters, comunidade central do movimento Arts and Crafts nos Estados Unidos.', 'Escreveu Uma Mensagem a Garcia (1899), um dos textos mais distribuídos de sua época.', 'Escreveu a série Pequenas Viagens às Casas dos Grandes.', 'Foi editor e impressor de livros artesanais de referência no período.'],
    cronologia: [
      [1856, 'Nasce em Bloomington, Illinois, em 19 de junho.'],
      [1894, 'Conhece o movimento Arts and Crafts na Inglaterra.'],
      [1895, 'Funda os Roycrofters em East Aurora, Nova York.'],
      [1899, 'Publica Uma Mensagem a Garcia.'],
      [1915, 'Morre no naufrágio do Lusitânia, em 7 de maio.']
    ]
  },

  'Roger Fisher e William Ury': {
    papel: 'Especialistas norte-americanos em negociação',
    resumo: 'Formularam em Como Chegar ao Sim o método de negociação baseada em princípios, hoje padrão mundial.',
    bio: [
      'Roger Fisher (1922-2012) foi professor da Faculdade de Direito de Harvard. Serviu na Segunda Guerra Mundial como observador meteorológico e perdeu vários amigos no conflito, experiência que descreveu como origem de seu interesse por resolução de conflitos. Atuou como consultor em disputas internacionais, entre elas as negociações de Camp David e a crise dos reféns no Irã.',
      'William Ury (1953-) é antropólogo formado em Yale e doutor por Harvard. Cofundou com Fisher o Harvard Negotiation Project em 1979 e atuou como mediador em conflitos armados, greves e disputas territoriais em vários continentes, além de ter assessorado a criação de centros de redução de risco nuclear entre Estados Unidos e União Soviética.',
      'Como Chegar ao Sim, publicado em 1981 com Bruce Patton, propõe substituir a barganha posicional — em que cada lado defende uma posição e concede a contragosto — pela negociação baseada em princípios. O método tem quatro elementos: separar as pessoas do problema, concentrar-se nos interesses e não nas posições, gerar opções de benefício mútuo antes de decidir e insistir em critérios objetivos.',
      'O livro introduziu também o conceito de melhor alternativa a um acordo negociado, que define o poder de barganha real de cada parte pelo que ela pode fazer caso não haja acordo. Ury desenvolveu depois Supere o Não, sobre negociação com adversários difíceis, e O Poder do Não Positivo. O método é ensinado em escolas de direito, negócios e diplomacia no mundo inteiro.'
    ],
    contexto: 'A obra nasce no ambiente da Guerra Fria e das negociações internacionais de alto risco, e responde a uma constatação prática: negociações conduzidas como disputa de posições produzem acordos ruins, demorados e que desgastam a relação entre as partes. A proposta foi transferir para a mesa comum os métodos desenvolvidos na diplomacia.',
    contribuicoes: ['Escreveram Como Chegar ao Sim (1981), o livro de negociação mais influente já publicado.', 'Formularam o método da negociação baseada em princípios, com seus quatro elementos.', 'Criaram o conceito de melhor alternativa a um acordo negociado.', 'Fundaram o Harvard Negotiation Project.', 'Atuaram como mediadores em conflitos internacionais, trabalhistas e territoriais.'],
    cronologia: [
      [1979, 'Fundam o Harvard Negotiation Project.'],
      [1981, 'Publicam Como Chegar ao Sim.'],
      [1991, 'Ury publica Supere o Não.'],
      [2007, 'Ury publica O Poder do Não Positivo.'],
      [2012, 'Morre Roger Fisher.']
    ]
  },

  'James Kouzes e Barry Posner': {
    papel: 'Pesquisadores norte-americanos de liderança',
    resumo: 'Formularam as cinco práticas da liderança exemplar a partir de décadas de pesquisa empírica sobre o que líderes realmente fazem.',
    bio: [
      'James Kouzes e Barry Posner iniciaram no começo dos anos 1980 uma pesquisa que se tornaria uma das mais longas do campo da liderança. Em vez de partir de teorias sobre traços de personalidade, pediram a milhares de pessoas que descrevessem sua melhor experiência pessoal de liderança e analisaram os padrões recorrentes nas respostas.',
      'Kouzes é executivo e formador, tendo dirigido o centro de liderança executiva da Universidade Santa Clara. Posner é professor de liderança na mesma universidade, onde foi decano da escola de negócios por doze anos. A parceria atravessa mais de quatro décadas.',
      'O Desafio da Liderança, publicado em 1987 e sucessivamente revisado com dados novos, apresenta as cinco práticas que emergiram da pesquisa: modelar o caminho, inspirar uma visão compartilhada, desafiar o processo, capacitar os outros a agir e encorajar o coração. O instrumento de avaliação derivado do modelo é aplicado em organizações no mundo inteiro.',
      'A tese que sustenta a obra é que a liderança não é um traço reservado a poucos, e sim um conjunto observável de comportamentos que pode ser aprendido e praticado por qualquer pessoa em qualquer posição. Escreveram também A Credibilidade, sobre a confiança como base da relação entre líder e liderados.'
    ],
    contexto: 'A dupla publica no momento em que a literatura de liderança oscilava entre o carisma inato e os modelos situacionais. A contribuição foi metodológica: em vez de teorizar, coletaram e classificaram relatos em larga escala e derivaram deles um modelo verificável e reaplicável, atualizado por décadas de dados sucessivos.',
    contribuicoes: ['Escreveram O Desafio da Liderança (1987), com sucessivas edições revisadas.', 'Formularam as cinco práticas da liderança exemplar a partir de pesquisa empírica de larga escala.', 'Criaram o Inventário de Práticas de Liderança, instrumento de avaliação aplicado internacionalmente.', 'Escreveram A Credibilidade, sobre a confiança como fundamento da liderança.'],
    cronologia: [
      [1983, 'Iniciam a pesquisa sobre melhores experiências pessoais de liderança.'],
      [1987, 'Publicam O Desafio da Liderança.'],
      [1993, 'Publicam A Credibilidade.'],
      [2003, 'Publicam Encorajando o Coração.']
    ]
  }
};

const OBRAS_F11 = {
  'Victor Hugo': [
    [
      'Os Miseráveis',
      'livro',
      1862,
      'Acompanha Jean Valjean, condenado a dezenove anos de trabalhos forçados por roubar um pão, e sua perseguição pelo inspetor Javert ao longo de décadas da França do século XIX. Escrito ao longo do exílio de Hugo, o romance intercala a narrativa com ensaios sobre a batalha de Waterloo, os esgotos de Paris, a linguagem das ruas e a insurreição de 1832, construindo um retrato total da miséria e da lei penal. É um dos romances mais adaptados da história.'
    ],
    [
      'O Corcunda de Notre-Dame',
      'livro',
      1831,
      'Ambientado na Paris de 1482, entrelaça o destino de Quasimodo, Esmeralda e do arquidiácono Frollo em torno da catedral, que funciona como personagem central. Além de romance histórico, foi uma campanha deliberada pela preservação da arquitetura gótica, então em ruínas e ameaçada de demolição na França, e teve efeito prático: contribuiu diretamente para o restauro de Notre-Dame no século XIX.'
    ],
    ['As Contemplações', 'poesia', 1856, 'Reunião de poemas dividida em duas partes, antes e depois da morte da filha Léopoldine, afogada aos dezenove anos. A obra atravessa a infância, o amor, a perda e a interrogação sobre a morte, e é considerada o ponto mais alto da poesia lírica de Hugo.']
  ],
  'Oscar Wilde': [
    [
      'A Importância de Ser Prudente',
      'peca',
      1895,
      'Comédia sobre dois homens que inventam identidades falsas para escapar das obrigações sociais e se enredam nas próprias mentiras. Sob o diálogo veloz e os aforismos, a peça desmonta o casamento, a respeitabilidade e a hipocrisia vitorianas. Estreou semanas antes do julgamento que arruinaria o autor e é considerada uma das melhores comédias em língua inglesa.'
    ],
    [
      'O Retrato de Dorian Gray',
      'livro',
      1890,
      'Um jovem de beleza excepcional permanece intacto enquanto seu retrato envelhece e registra cada um de seus crimes. Único romance de Wilde e obra central do esteticismo, foi atacado como imoral na publicação e trechos foram usados contra o autor em seu julgamento. Trata da separação entre aparência e caráter e do preço de uma vida organizada apenas em torno do prazer.'
    ],
    ['De Profundis', 'carta', 1897, 'Longa carta escrita na prisão de Reading e dirigida a Alfred Douglas, em que Wilde revê a relação que o levou à ruína, examina o próprio orgulho e reflete sobre sofrimento, arte e perdão. É o texto mais direto e menos irônico que escreveu, e foi publicado postumamente em versão inicialmente censurada.']
  ],
  'Virginia Woolf': [
    [
      'Mrs Dalloway',
      'livro',
      1925,
      'Um único dia de junho em Londres, acompanhando Clarissa Dalloway enquanto prepara uma festa e Septimus Smith, veterano da Primeira Guerra em colapso psíquico, cujas trajetórias nunca se cruzam diretamente. O romance abandona o enredo externo e segue o movimento da consciência, com o tempo interior expandindo-se independentemente do relógio. É o livro em que Woolf fixa sua técnica.'
    ],
    ['Ao Farol', 'livro', 1927, 'Dividido em três partes, acompanha a família Ramsay numa casa de veraneio, o intervalo de dez anos em que a casa se deteriora e mortes ocorrem em poucas linhas entre parênteses, e o retorno final. A estrutura torna a passagem do tempo o próprio assunto do livro, e a figura da senhora Ramsay é inspirada na mãe da autora.'],
    [
      'Um Teto Todo Seu',
      'ensaio',
      1929,
      'Nascido de conferências em faculdades femininas de Cambridge, argumenta que para escrever ficção uma mulher precisa de dinheiro e de um quarto próprio. A hipótese da irmã imaginária de Shakespeare, igualmente talentosa e impedida de desenvolver o talento, demonstra que a ausência histórica de escritoras não é falta de capacidade, mas de condição material. É o texto fundador da crítica literária feminista.'
    ],
    ['Orlando', 'livro', 1928, 'Um nobre inglês atravessa mais de três séculos sem envelhecer e, no meio do percurso, acorda mulher. Escrito para Vita Sackville-West e descrito por seu filho como a mais longa carta de amor da literatura, usa a fantasia para examinar como o gênero determina o que uma mesma pessoa pode ou não fazer em cada época.']
  ],
  'Helen Keller': [
    [
      'A História da Minha Vida',
      'memoria',
      1903,
      'Autobiografia escrita quando a autora ainda era estudante do Radcliffe College. Narra a doença que a deixou surda e cega aos dezenove meses, os anos sem linguagem, a chegada de Anne Sullivan e o momento junto à bomba d\u2019água em que compreendeu que os sinais soletrados em sua mão correspondiam a coisas. É um dos relatos mais lidos sobre a aquisição da linguagem e sobre a experiência da surdocegueira.'
    ]
  ],
  'Malala Yousafzai': [
    ['Eu Sou Malala', 'memoria', 2013, 'Relato em primeira pessoa da infância no vale do Swat, da chegada do Talibã, da proibição da educação feminina, do diário anônimo escrito para a BBC aos onze anos e do atentado sofrido no ônibus escolar. Escrito com a jornalista Christina Lamb, combina a narrativa pessoal com a história política recente do Paquistão e foi traduzido para dezenas de idiomas.']
  ],
  'bell hooks': [
    [
      'E Eu Não Sou Uma Mulher',
      'livro',
      1981,
      'Examina o efeito combinado do racismo e do sexismo sobre as mulheres negras nos Estados Unidos, da escravidão ao feminismo dos anos 1970. hooks argumenta que o movimento feminista, conduzido por mulheres brancas de classe média, e o movimento negro, conduzido sobretudo por homens, deixavam de fora justamente essa experiência. O título vem do discurso atribuído a Sojourner Truth, e o livro é um marco da crítica ao feminismo hegemônico.'
    ],
    ['Ensinando a Transgredir', 'livro', 1994, 'Propõe uma pedagogia engajada em que a sala de aula é lugar de liberdade e não de reprodução da autoridade. Em diálogo explícito com Paulo Freire, hooks trata do corpo, do prazer e da experiência pessoal como elementos legítimos do processo de ensino, e discute como raça, classe e gênero atravessam a relação entre professor e estudante.'],
    ['Tudo Sobre o Amor', 'livro', 2000, 'Trata o amor não como sentimento, mas como prática que envolve cuidado, compromisso, confiança e responsabilidade, e argumenta que a cultura ocidental confunde amor com posse e controle. Escrito em linguagem deliberadamente acessível, é o livro que levou o pensamento da autora a um público muito além da academia.']
  ],
  'George Eliot': [
    [
      'Middlemarch',
      'livro',
      1872,
      'Acompanha várias famílias de uma cidade provinciana inglesa às vésperas da reforma eleitoral de 1832, entrelaçando o casamento equivocado de Dorothea Brooke, a ambição frustrada do jovem médico Lydgate, a política local e as dívidas que corroem reputações. A recusa em oferecer heróis ou vilões e a profundidade com que examina as consequências de escolhas pequenas levaram Virginia Woolf a descrevê-lo como um dos poucos romances ingleses escritos para adultos.'
    ],
    ['O Moinho à Beira do Rio', 'livro', 1860, 'Narra a infância e a juventude de Maggie Tulliver, menina inteligente e impulsiva numa família e numa comunidade que não têm lugar para o que ela é. O livro tem forte carga autobiográfica e trata da tensão entre desejo individual e obrigação familiar num ambiente provinciano.'],
    ['Silas Marner', 'livro', 1861, 'Um tecelão isolado e avarento, expulso injustamente de sua comunidade, tem o ouro roubado e encontra em seu lugar uma criança abandonada. A fábula de redenção é também um retrato preciso da transição da vida rural inglesa diante da industrialização.']
  ],
  'Elbert Hubbard': [
    [
      'Uma Mensagem a Garcia',
      'ensaio',
      1899,
      'Ensaio breve que narra a história de um oficial americano encarregado de entregar uma mensagem a um líder rebelde cubano e que cumpre a missão sem fazer perguntas. Hubbard transforma o episódio num elogio à iniciativa e à execução sem supervisão, e o texto foi distribuído em milhões de exemplares por empresas, exércitos e governos. É lido hoje também como peça sobre obediência acrítica, o que torna sua história de recepção parte de seu interesse.'
    ]
  ],
  'Roger Fisher e William Ury': [
    [
      'Como Chegar ao Sim',
      'livro',
      1981,
      'Propõe substituir a barganha posicional, em que cada lado defende uma posição e concede a contragosto, pela negociação baseada em princípios, com quatro elementos: separar as pessoas do problema, concentrar-se em interesses e não em posições, gerar opções de benefício mútuo antes de decidir e insistir em critérios objetivos. Introduz também a melhor alternativa a um acordo negociado como medida real do poder de barganha. Nasceu do Harvard Negotiation Project e é o livro de negociação mais influente já publicado.'
    ],
    ['Supere o Não', 'livro', 1991, 'Continuação escrita por William Ury, voltada às situações em que o outro lado não quer negociar, ataca ou recusa qualquer proposta. Apresenta uma sequência de cinco passos para transformar confronto em cooperação, entre eles o recuo deliberado para não reagir no impulso e a construção de uma ponte que permita ao adversário aceitar sem perder a face.']
  ],
  'James Kouzes e Barry Posner': [
    [
      'O Desafio da Liderança',
      'livro',
      1987,
      'Resultado de uma pesquisa em que milhares de pessoas descreveram sua melhor experiência pessoal de liderança, o livro extrai desses relatos cinco práticas recorrentes: modelar o caminho, inspirar uma visão compartilhada, desafiar o processo, capacitar os outros a agir e encorajar o coração. A tese central é que liderança não é traço reservado a poucos, mas conjunto observável de comportamentos que pode ser aprendido. Recebe edições revisadas com dados novos há mais de três décadas.'
    ]
  ],
  'Tom Peters': [
    [
      'Em Busca da Excelência',
      'livro',
      1982,
      'Escrito com Robert Waterman a partir de pesquisa da McKinsey sobre empresas americanas de desempenho superior, identifica oito atributos comuns, entre eles a preferência pela ação, a proximidade com o cliente e a autonomia interna. Publicado quando a indústria americana perdia terreno para a japonesa e o discurso corrente pregava mais planejamento, afirmou o contrário: as empresas bem-sucedidas agiam e cuidavam das pessoas. Vendeu milhões de exemplares e é apontado como o livro que criou o mercado moderno de literatura de negócios. Parte das empresas citadas entrou em declínio nos anos seguintes, e a metodologia foi depois questionada.'
    ]
  ],
  'Kahlil Gibran': [
    [
      'O Profeta',
      'poesia',
      1923,
      'Vinte e seis ensaios poéticos em que Almustafa, prestes a deixar a cidade onde viveu doze anos, responde às perguntas dos habitantes sobre amor, casamento, filhos, trabalho, dor, alegria, liberdade e morte. Escrito em inglês por um autor libanês radicado nos Estados Unidos, não pertence a nenhuma tradição religiosa específica, e foi essa condição que lhe deu alcance universal. Recebido com frieza pela crítica e com entusiasmo por gerações de leitores, tornou-se um dos livros de poesia mais vendidos e traduzidos da história.'
    ]
  ],
  Buda: []
};

(function aplicarF11() {
  Object.entries(PANORAMAS_F11).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F11).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

/* CHECKPOINT persistido para a próxima execução (§17, §18) */
const CURADORIA_CHECKPOINT = {
  atualizadoEm: '2026-08-29',
  fases: ['F7 procedência e obras-fantasma', 'F8 remoções e panoramas 1', 'F9 panoramas 2', 'F10 panoramas 3 e obras', 'F11 panoramas 4 e obras'],
  get concluidos() {
    return CURADORIA_FILA.filter((l) => l.concluido).length;
  },
  get total() {
    return CURADORIA_FILA.length;
  },
  get proximo() {
    const f = CURADORIA_FILA.filter((l) => !l.concluido);
    return f.length ? f[0].nome : null;
  },
  get proximos10() {
    return CURADORIA_FILA.filter((l) => !l.concluido)
      .slice(0, 10)
      .map((l) => l.nome);
  }
};
window.CURADORIA_CHECKPOINT = CURADORIA_CHECKPOINT;

(function bootF11() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint da curadoria: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 11:', e);
    }
  };
})();

/* ================================================================
   FASE 12 — CONTINUAÇÃO DA FILA (autores 173 em diante)
   ================================================================ */
const PANORAMAS_F12 = {
  Osho: {
    papel: 'Místico e orador indiano (1931–1990)',
    resumo: 'Reuniu meditação, psicologia ocidental e crítica à religião organizada, e construiu um movimento que terminou em escândalo criminal.',
    bio: [
      'Chandra Mohan Jain nasceu em Kuchwada, na Índia central, em 11 de dezembro de 1931, numa família jainista. Formou-se em filosofia e lecionou por nove anos na Universidade de Jabalpur antes de abandonar a carreira acadêmica para dedicar-se a conferências itinerantes. Adotou sucessivamente os nomes Acharya Rajneesh, Bhagwan Shree Rajneesh e, no fim da vida, Osho.',
      'Sua exposição misturava tradições muito distintas: budismo zen, tantra, sufismo, taoismo, além de Nietzsche, Gurdjieff e psicoterapia ocidental. Criticava frontalmente a religião organizada, o casamento convencional, o nacionalismo e o ascetismo, defendendo que a repressão dos desejos produz mais patologia do que liberdade. Desenvolveu técnicas de meditação ativa, entre elas a Meditação Dinâmica, que combina respiração acelerada, catarse física e silêncio.',
      'Fundou um ashram em Pune em 1974, que atraiu milhares de ocidentais. Em 1981 mudou-se para os Estados Unidos, onde seus seguidores construíram a comuna de Rajneeshpuram, no Oregon. O empreendimento entrou em conflito aberto com a população local e terminou em escândalo criminal: em 1984, membros da direção da comuna contaminaram deliberadamente saladas em restaurantes da região com salmonela, num ataque que adoeceu mais de setecentas pessoas — o maior atentado bioterrorista já registrado em solo norte-americano.',
      'Osho foi preso em 1985 por violações da lei de imigração, aceitou um acordo judicial e foi deportado. Sua secretária Ma Anand Sheela foi condenada pelos crimes da comuna; a extensão da responsabilidade pessoal de Osho permanece disputada. Voltou a Pune, onde morreu em 19 de janeiro de 1990. Deixou centenas de livros, todos transcrições de falas, e um movimento que segue ativo e igualmente controverso.'
    ],
    contexto: 'Osho aparece no encontro entre a contracultura ocidental dos anos 1970, que buscava alternativas espirituais fora do cristianismo, e a tradição indiana de mestres carismáticos. Sua figura é hoje inseparável de dois registros: a difusão ampla de técnicas de meditação no Ocidente e os crimes cometidos por sua organização no Oregon.',
    contribuicoes: ['Desenvolveu técnicas de meditação ativa, entre elas a Meditação Dinâmica.', 'Difundiu no Ocidente uma leitura sincrética de tradições orientais combinada a psicologia contemporânea.', 'Deixou centenas de títulos publicados, todos transcritos de falas públicas.', 'Fundou os centros de Pune, que seguem em atividade.'],
    cronologia: [
      [1931, 'Nasce em Kuchwada, na Índia, em 11 de dezembro.'],
      [1966, 'Deixa a carreira universitária para dedicar-se a conferências.'],
      [1974, 'Funda o ashram de Pune.'],
      [1981, 'Muda-se para o Oregon, onde é erguida a comuna de Rajneeshpuram.'],
      [1984, 'Membros da direção da comuna cometem o ataque com salmonela no condado de Wasco.'],
      [1985, 'É preso, aceita acordo judicial e é deportado dos Estados Unidos.'],
      [1990, 'Morre em Pune.']
    ],
    nota: 'A comuna de Rajneeshpuram foi responsável, em 1984, pelo maior atentado bioterrorista registrado nos Estados Unidos. A extensão da responsabilidade pessoal de Osho permanece objeto de disputa.'
  },

  'Augusto Cury': {
    papel: 'Psiquiatra e escritor brasileiro (1958–)',
    resumo: 'Um dos autores brasileiros mais vendidos, criou a Teoria da Inteligência Multifocal e escreve na fronteira entre psiquiatria e autoajuda.',
    bio: [
      'Augusto Jorge Cury nasceu em Colina, no interior de São Paulo, em 2 de outubro de 1958. Formou-se em medicina e especializou-se em psiquiatria. Passou anos atendendo em consultório e, paralelamente, desenvolvendo um modelo teórico próprio sobre o funcionamento da mente.',
      'A Teoria da Inteligência Multifocal, que começou a formular nos anos 1990, propõe que o pensamento não é construído apenas pela lógica, e sim por múltiplos focos simultâneos — memória, emoção, autoconsciência, gestão da ansiedade. Dela derivam conceitos que repete em toda a obra, como o gerenciamento da emoção e a chamada Síndrome do Pensamento Acelerado, quadro que descreve como excesso de estímulos e produção mental incessante, associado ao ambiente digital.',
      'O reconhecimento comercial veio com a série Análise da Inteligência de Cristo e com os livros de aplicação prática, entre eles Pais Brilhantes, Professores Fascinantes, dirigido a educadores e famílias, e O Vendedor de Sonhos, romance que se tornou filme. Publicou também O Futuro da Humanidade e ficção histórica.',
      'É um dos autores brasileiros de maior tiragem, com obras traduzidas para dezenas de idiomas. Sua produção é lida sobretudo fora do meio acadêmico, e seus conceitos, embora amplamente difundidos em escolas e empresas, não integram a nosologia psiquiátrica oficial nem contam com validação em literatura científica revisada por pares — ponto sobre o qual há crítica dentro da área.'
    ],
    contexto: 'Cury escreve num Brasil em que a demanda por linguagem psicológica acessível cresceu muito mais rápido do que o acesso a tratamento. Sua obra ocupa exatamente esse espaço, entre o consultório e o livro de grande circulação, e é essa posição intermediária que explica tanto seu alcance quanto a reserva de parte da comunidade científica.',
    contribuicoes: ['Formulou a Teoria da Inteligência Multifocal.', 'Difundiu no Brasil o conceito de Síndrome do Pensamento Acelerado.', 'Escreveu Pais Brilhantes, Professores Fascinantes e a série Análise da Inteligência de Cristo.', 'Escreveu O Vendedor de Sonhos, adaptado para o cinema.', 'É um dos autores brasileiros com maior tiragem e número de traduções.'],
    cronologia: [
      [1958, 'Nasce em Colina, São Paulo, em 2 de outubro.'],
      [1999, 'Publica o primeiro volume de Análise da Inteligência de Cristo.'],
      [2003, 'Publica Pais Brilhantes, Professores Fascinantes.'],
      [2008, 'Publica O Vendedor de Sonhos.'],
      [2016, 'O Vendedor de Sonhos é adaptado para o cinema.']
    ],
    nota: 'Os conceitos formulados por Cury, entre eles a Síndrome do Pensamento Acelerado, não integram manuais diagnósticos oficiais nem contam com validação em literatura científica revisada por pares.'
  },

  'Mark Zuckerberg': {
    papel: 'Empresário norte-americano (1984–)',
    resumo: 'Criou no dormitório da faculdade a rede social que reorganizou a comunicação de bilhões de pessoas — e o debate público sobre seus custos.',
    bio: [
      'Mark Elliot Zuckerberg nasceu em White Plains, Nova York, em 14 de maio de 1984, filho de um dentista e de uma psiquiatra. Programava desde a adolescência; criou um sistema de mensagens para o consultório do pai e um programa de recomendação musical que despertou interesse da Microsoft e da AOL antes de ele entrar na faculdade.',
      'Fundou o Facebook em fevereiro de 2004, no dormitório de Harvard, com Eduardo Saverin, Dustin Moskovitz e Chris Hughes. O serviço, inicialmente restrito a universidades, expandiu-se rapidamente. Abandonou o curso no segundo ano e mudou-se para a Califórnia. Enfrentou processos de outros estudantes de Harvard que alegavam autoria da ideia, encerrados em acordo, e do próprio Saverin.',
      'A empresa comprou o Instagram em 2012 e o WhatsApp em 2014, aquisições que consolidaram seu domínio sobre a comunicação digital e que passaram a ser questionadas por autoridades antitruste. Em 2021 renomeou a companhia como Meta, apostando em realidade virtual e aumentada.',
      'A trajetória é indissociável das controvérsias: o caso Cambridge Analytica em 2018, que revelou o uso indevido de dados de dezenas de milhões de usuários; os depoimentos ao Congresso norte-americano e a parlamentos de outros países; as denúncias internas sobre o efeito das plataformas na saúde mental de adolescentes e na circulação de desinformação. Com a esposa Priscilla Chan criou em 2015 a Chan Zuckerberg Initiative, voltada a saúde, ciência e educação.'
    ],
    contexto: 'Zuckerberg construiu a maior infraestrutura de comunicação privada da história num período em que a regulação não acompanhava a velocidade da tecnologia. Sua figura pública passou, em pouco mais de uma década, de símbolo do empreendedorismo jovem a alvo central do debate sobre poder das plataformas, privacidade e responsabilidade sobre o conteúdo.',
    contribuicoes: ['Fundou o Facebook, que se tornou a maior rede social do mundo.', 'Conduziu as aquisições do Instagram e do WhatsApp.', 'Reorientou a empresa para realidade virtual e aumentada com a criação da Meta.', 'Criou com Priscilla Chan a Chan Zuckerberg Initiative.'],
    cronologia: [
      [1984, 'Nasce em White Plains, Nova York, em 14 de maio.'],
      [2004, 'Funda o Facebook em Harvard.'],
      [2012, 'A empresa abre capital e adquire o Instagram.'],
      [2014, 'Adquire o WhatsApp.'],
      [2018, 'Depõe no Congresso dos Estados Unidos após o caso Cambridge Analytica.'],
      [2021, 'Renomeia a companhia como Meta.']
    ]
  },

  'Ayn Rand': {
    papel: 'Escritora e filósofa russo-americana (1905–1982)',
    resumo: 'Criou o objetivismo, filosofia que defende o egoísmo racional e o capitalismo laissez-faire como sistema moral.',
    bio: [
      'Alissa Zinovievna Rosenbaum nasceu em São Petersburgo em 2 de fevereiro de 1905, em família judaica de classe média. A farmácia do pai foi confiscada pelos bolcheviques na Revolução de 1917, e a família passou por privação severa. Estudou história e filosofia na universidade e obteve visto para visitar parentes nos Estados Unidos em 1926, de onde nunca voltou.',
      'Trabalhou em Hollywood como figurante e roteirista e adotou o nome Ayn Rand. Publicou romances de recepção inicial modesta até A Nascente, de 1943, sobre um arquiteto que se recusa a comprometer sua obra às exigências alheias e prefere destruí-la a vê-la adulterada. O livro tornou-se sucesso duradouro e foi adaptado para o cinema.',
      'A Revolta de Atlas, de 1957, é sua obra central e mais extensa. Imagina um mundo em que os criadores, produtores e industriais desaparecem em greve, deixando a sociedade parasitária entregue ao próprio colapso. Contém, em um extenso discurso de um dos personagens, a exposição completa de sua filosofia.',
      'O objetivismo, como ela o chamou, sustenta que a realidade existe independentemente da consciência, que a razão é o único instrumento de conhecimento, que o interesse próprio racional é virtude moral e que o capitalismo laissez-faire é o único sistema compatível com esses princípios. Foi rejeitada pela filosofia acadêmica e teve enorme influência política e cultural, sobretudo no libertarianismo americano; Alan Greenspan integrou seu círculo. Morreu em Nova York em 6 de março de 1982.'
    ],
    contexto: 'Rand escreve a partir da experiência direta do confisco bolchevique e no auge do consenso do New Deal e do keynesianismo, contra os quais dirige toda a sua obra. Essa origem explica a intransigência de suas posições: para ela não havia meio-termo entre coletivismo e individualismo, e é justamente essa recusa da nuance que divide radicalmente seus leitores.',
    contribuicoes: ['Escreveu A Revolta de Atlas (1957) e A Nascente (1943).', 'Formulou o objetivismo, com sua ética do interesse próprio racional.', 'Tornou-se referência intelectual central do libertarianismo norte-americano.', 'Escreveu A Virtude do Egoísmo e Capitalismo: O Ideal Desconhecido.'],
    cronologia: [
      [1905, 'Nasce em São Petersburgo, em 2 de fevereiro.'],
      [1926, 'Emigra para os Estados Unidos.'],
      [1943, 'Publica A Nascente.'],
      [1957, 'Publica A Revolta de Atlas.'],
      [1964, 'Publica A Virtude do Egoísmo.'],
      [1982, 'Morre em Nova York.']
    ]
  },

  'Karl Jaspers': {
    papel: 'Psiquiatra e filósofo alemão (1883–1969)',
    resumo: 'Trouxe rigor metodológico à psiquiatria e formulou uma filosofia da existência centrada nas situações-limite.',
    bio: [
      'Karl Theodor Jaspers nasceu em Oldenburg, na Alemanha, em 23 de fevereiro de 1883. Conviveu desde jovem com uma doença pulmonar crônica que limitou drasticamente sua atividade física e determinou seu ritmo de trabalho pela vida inteira. Formou-se em medicina e especializou-se em psiquiatria.',
      'Psicopatologia Geral, de 1913, escrito aos trinta anos, transformou a disciplina. Jaspers separou a explicação causal, herdada das ciências naturais, da compreensão do sentido vivido pelo paciente, e defendeu que a psiquiatria precisava das duas. Introduziu o método fenomenológico na clínica: descrever com precisão a experiência subjetiva antes de classificá-la. O livro segue em uso como referência.',
      'Migrou para a filosofia e tornou-se, com Heidegger, uma das figuras centrais do pensamento existencial alemão. Formulou a noção de situações-limite — morte, sofrimento, culpa, luta — momentos em que as explicações habituais falham e a pessoa é confrontada com a própria existência. Distinguiu o Umgreifende, o abrangente que nunca se converte inteiramente em objeto de conhecimento.',
      'Casado com Gertrud Mayer, judia, recusou-se a se divorciar e foi afastado da cátedra pelo regime nazista em 1937 e proibido de publicar. O casal preparava-se para o suicídio quando a cidade de Heidelberg foi tomada pelos aliados. Publicou em 1946 A Questão da Culpa Alemã, distinguindo culpa criminal, política, moral e metafísica — texto decisivo no debate alemão do pós-guerra. Foi mentor de Hannah Arendt, com quem manteve longa correspondência. Morreu na Basileia em 26 de fevereiro de 1969.'
    ],
    contexto: 'Jaspers atravessa duas grandes rupturas: a da psiquiatria, que ele ajudou a fundar como disciplina metodologicamente consciente, e a da Alemanha, onde foi uma das poucas vozes acadêmicas a permanecer no país sem aderir ao regime e a encarar publicamente, depois da guerra, a questão da responsabilidade coletiva.',
    contribuicoes: [
      'Escreveu Psicopatologia Geral (1913), obra fundadora da psiquiatria metodologicamente rigorosa.',
      'Introduziu a distinção entre explicar e compreender na clínica psiquiátrica.',
      'Formulou a filosofia da existência com o conceito de situações-limite.',
      'Escreveu A Questão da Culpa Alemã (1946), distinguindo quatro formas de responsabilidade.',
      'Formulou a tese do Período Axial, sobre a emergência simultânea de tradições filosóficas em várias civilizações.'
    ],
    cronologia: [
      [1883, 'Nasce em Oldenburg, em 23 de fevereiro.'],
      [1913, 'Publica Psicopatologia Geral.'],
      [1937, 'É afastado da cátedra pelo regime nazista.'],
      [1946, 'Publica A Questão da Culpa Alemã.'],
      [1949, 'Publica Origem e Meta da História, com a tese do Período Axial.'],
      [1969, 'Morre na Basileia.']
    ]
  },

  'Salvador Dalí': {
    papel: 'Pintor espanhol (1904–1989)',
    resumo: 'Levou o surrealismo à precisão técnica dos mestres antigos e transformou a própria persona em obra.',
    bio: [
      'Salvador Domingo Felipe Jacinto Dalí i Domènech nasceu em Figueres, na Catalunha, em 11 de maio de 1904. Recebeu o nome de um irmão morto nove meses antes de seu nascimento, e os pais chegaram a dizer-lhe que era sua reencarnação — episódio que ele citaria a vida inteira. Estudou na Academia de San Fernando, em Madri, onde conviveu com Federico García Lorca e Luis Buñuel, e foi expulso antes de concluir o curso.',
      'Aproximou-se do grupo surrealista em Paris em 1929, mesmo ano em que colaborou com Buñuel no filme Um Cão Andaluz. Desenvolveu o que chamou de método paranoico-crítico: induzir estados de associação delirante controlada para gerar imagens duplas e ambíguas, mantendo a execução com o rigor técnico dos pintores renascentistas e barrocos que admirava.',
      'A Persistência da Memória, de 1931, com os relógios moles, tornou-se uma das imagens mais reconhecíveis do século XX. No mesmo período conheceu Gala, então casada com o poeta Paul Éluard, que se tornaria sua companheira, modelo e administradora por quase cinquenta anos.',
      'Foi expulso do grupo surrealista em 1934, sob acusação de comercialismo e de ambiguidade política diante do fascismo — André Breton criou com as letras de seu nome o anagrama Avida Dollars. Passou os anos de guerra nos Estados Unidos, trabalhou com Walt Disney e Alfred Hitchcock e voltou à Espanha franquista. A fase final, que chamou de misticismo nuclear, combinou temas religiosos e física atômica. Morreu em Figueres em 23 de janeiro de 1989.'
    ],
    contexto: 'Dalí surge no momento em que a psicanálise oferecia às vanguardas uma justificativa teórica para explorar o inconsciente. Sua originalidade foi rejeitar o automatismo e a fatura solta de boa parte do surrealismo, pintando o irracional com técnica acadêmica impecável — e depois transformar a própria excentricidade pública em parte inseparável da obra.',
    contribuicoes: ['Pintou A Persistência da Memória (1931), uma das imagens mais reconhecidas da arte moderna.', 'Formulou o método paranoico-crítico.', 'Colaborou com Luis Buñuel em Um Cão Andaluz e com Hitchcock e Disney no cinema.', 'Criou o Teatro-Museu Dalí em Figueres, projetado por ele próprio.', 'Produziu obra extensa em pintura, escultura, joalheria, cenografia e ilustração.'],
    cronologia: [
      [1904, 'Nasce em Figueres, em 11 de maio.'],
      [1929, 'Colabora em Um Cão Andaluz e aproxima-se dos surrealistas; conhece Gala.'],
      [1931, 'Pinta A Persistência da Memória.'],
      [1934, 'É expulso do grupo surrealista.'],
      [1940, 'Muda-se para os Estados Unidos por oito anos.'],
      [1974, 'Inaugura o Teatro-Museu Dalí em Figueres.'],
      [1989, 'Morre em Figueres.']
    ]
  },

  'Ulysses Guimarães': {
    papel: 'Advogado e político brasileiro (1916–1992)',
    resumo: 'Presidiu a Assembleia Constituinte de 1988 e foi a voz mais reconhecível da campanha pela redemocratização.',
    bio: [
      'Ulysses Silveira Guimarães nasceu em Rio Claro, São Paulo, em 6 de outubro de 1916. Formou-se em direito na Universidade de São Paulo, onde presidiu o centro acadêmico. Elegeu-se deputado federal em 1950 pelo PSD e foi reeleito por décadas, chegando a ministro da Indústria e Comércio no breve governo parlamentarista de João Goulart.',
      'Com o golpe de 1964 e a imposição do bipartidarismo, integrou o MDB, partido de oposição consentida, e o presidiu por longos períodos. Em 1973 lançou-se como anticandidato à presidência, numa eleição indireta cujo resultado já estava definido, para usar a campanha como denúncia pública do regime — percorreu o país com Barbosa Lima Sobrinho falando sobre arbítrio e censura.',
      'Foi um dos condutores da campanha das Diretas Já, em 1984, que levou milhões às ruas pedindo eleição direta para presidente. A emenda foi derrotada no Congresso, mas a mobilização alterou o desfecho da transição. Presidiu a Câmara dos Deputados e, entre 1987 e 1988, a Assembleia Nacional Constituinte.',
      'Na promulgação da Constituição, em 5 de outubro de 1988, proferiu o discurso em que a chamou de Constituição Cidadã, expressão que se fixou. Disputou a presidência em 1989 sem sucesso. Morreu em 12 de outubro de 1992, na queda de um helicóptero no litoral de São Paulo; seu corpo nunca foi encontrado.'
    ],
    contexto: 'Ulysses atravessou a ditadura militar como figura central da oposição legal, posição que exigia operar dentro de regras impostas pelo regime sem legitimá-lo. Sua importância histórica está menos em qualquer obra escrita do que na condução institucional da transição: foi ele quem presidiu a assembleia que redigiu a Constituição vigente.',
    contribuicoes: ['Presidiu a Assembleia Nacional Constituinte de 1987-1988.', 'Foi um dos principais condutores da campanha das Diretas Já.', 'Lançou-se anticandidato em 1973 para denunciar a farsa das eleições indiretas.', 'Presidiu por longos períodos o MDB e depois o PMDB, e a Câmara dos Deputados.', 'Cunhou a expressão Constituição Cidadã no discurso de promulgação de 1988.'],
    cronologia: [
      [1916, 'Nasce em Rio Claro, São Paulo, em 6 de outubro.'],
      [1950, 'Elege-se deputado federal.'],
      [1973, 'Lança-se anticandidato à presidência.'],
      [1984, 'Participa da campanha das Diretas Já.'],
      [1987, 'Preside a Assembleia Nacional Constituinte.'],
      [1988, 'Promulga a Constituição e a chama de Constituição Cidadã.'],
      [1992, 'Morre em acidente de helicóptero.']
    ]
  },

  Pitágoras: {
    papel: 'Filósofo e matemático grego (c. 570 a.C.–c. 495 a.C.)',
    resumo: 'Fundou uma comunidade em que matemática, música e religião eram a mesma investigação.',
    bio: [
      'Pitágoras nasceu na ilha de Samos por volta de 570 a.C. As fontes sobre sua vida são tardias e fortemente lendárias — nada foi escrito por ele, e os relatos mais detalhados datam de séculos depois. Segundo a tradição, viajou ao Egito e à Babilônia antes de emigrar para Crotona, no sul da Itália, por volta de 530 a.C., fugindo da tirania de Polícrates.',
      'Em Crotona fundou uma comunidade que era simultaneamente escola filosófica, ordem religiosa e força política. Os membros seguiam regras estritas de conduta, dieta e silêncio, praticavam exame de consciência diário e admitiam mulheres. Acreditavam na transmigração das almas e no parentesco entre todos os seres vivos.',
      'A descoberta central atribuída ao grupo é que as relações musicais consonantes correspondem a razões numéricas simples entre comprimentos de corda. Dessa constatação nasceu a tese que atravessa toda a escola: o número é o princípio das coisas, e a estrutura do cosmos é matemática e harmônica. É a origem remota da ideia, hoje corrente na física, de que a natureza é descrita por relações matemáticas.',
      'O teorema que leva seu nome já era conhecido na Babilônia e no Egito séculos antes; a contribuição pitagórica teria sido a demonstração, não o resultado. Atribui-se à escola também a descoberta perturbadora das grandezas incomensuráveis. A comunidade foi atacada e dispersa por revolta política em Crotona, e Pitágoras teria morrido em Metaponto por volta de 495 a.C.'
    ],
    contexto: 'Pitágoras pertence ao momento em que o pensamento grego começava a substituir explicações míticas por princípios ordenadores. Sua originalidade foi não separar o que hoje tratamos como campos distintos: para os pitagóricos, purificação da alma, teoria musical e matemática eram uma só investigação sobre a ordem do mundo.',
    contribuicoes: ['Fundou a escola pitagórica, comunidade filosófica, religiosa e política em Crotona.', 'Estabeleceu a relação entre intervalos musicais consonantes e razões numéricas simples.', 'Formulou a tese de que a estrutura do cosmos é numérica e harmônica.', 'A demonstração do teorema que leva seu nome é atribuída à sua escola.', 'Admitiu mulheres como membros plenos da comunidade.'],
    cronologia: [
      ['c. 570 a.C.', 'Nasce na ilha de Samos.'],
      ['c. 530 a.C.', 'Emigra para Crotona e funda sua comunidade.'],
      ['c. 495 a.C.', 'Morre em Metaponto, após a dispersão da escola.']
    ],
    nota: 'Pitágoras nada escreveu, e as fontes sobre sua vida são tardias e amplamente lendárias. As descobertas atribuídas a ele pertencem provavelmente à escola como coletivo.'
  },

  'Publílio Siro': {
    papel: 'Escritor latino de máximas (séc. I a.C.)',
    resumo: 'Chegou a Roma escravizado e tornou-se o autor de sentenças mais copiado da Antiguidade latina.',
    bio: [
      'Publílio Siro nasceu na Síria, provavelmente no início do século I a.C. Foi levado a Roma como pessoa escravizada e, segundo o relato antigo, chamou a atenção de seu senhor pela inteligência e pelo talento verbal, o que lhe rendeu educação e depois a alforria — o cognome Siro registra sua origem.',
      'Tornou-se autor e ator de mimos, gênero teatral popular romano, de tom cômico e improvisado, muito distante da tragédia culta. Percorreu a Itália com sua companhia e, segundo Macróbio, venceu em Roma uma competição diante de Júlio César contra o mimógrafo Décimo Labério, então o nome mais consagrado do gênero.',
      'Nenhuma de suas peças sobreviveu. O que restou são as Sentenças: versos isolados de uma única linha, extraídos de seus mimos, que já na Antiguidade foram compilados em coletânea escolar por seu valor moral e mnemônico. A ordem é alfabética e artificial, resultado da compilação e não do autor.',
      'A coletânea foi usada como material de ensino de latim por séculos, o que garantiu sua transmissão. Sêneca cita-o com admiração. Erasmo de Roterdã organizou uma edição no Renascimento, e várias das sentenças entraram no repertório proverbial das línguas europeias. Como a coletânea foi crescendo por acréscimo ao longo dos séculos, parte do material que circula sob seu nome é de autoria incerta.'
    ],
    contexto: 'Publílio pertence à cultura do mimo romano, forma popular e efêmera de que quase nada se preservou. É uma ironia da transmissão que dele tenham sobrevivido justamente as frases isoladas, arrancadas do contexto teatral e transformadas em manual escolar de moral — exatamente o oposto do gênero em que trabalhava.',
    contribuicoes: ['Escreveu as Sentenças, a mais influente coletânea de máximas em latim.', 'Foi autor e ator de mimos, gênero popular do teatro romano.', 'Sua obra serviu por séculos como material escolar de latim, o que assegurou sua transmissão.', 'Várias de suas sentenças passaram ao repertório proverbial das línguas europeias.'],
    cronologia: [
      ['séc. I a.C.', 'Nasce na Síria e é levado a Roma como pessoa escravizada.'],
      ['c. 46 a.C.', 'Vence, segundo Macróbio, competição de mimos diante de Júlio César.'],
      ['Antiguidade tardia', 'As Sentenças são compiladas em coletânea escolar.']
    ],
    nota: 'As Sentenças foram compiladas depois de sua morte e receberam acréscimos ao longo dos séculos. Parte do material atribuído a Publílio Siro é de autoria incerta.'
  },

  'Charles de Gaulle': {
    papel: 'General e estadista francês (1890–1970)',
    resumo: 'Recusou a rendição de 1940 de Londres, liderou a França Livre e fundou a Quinta República.',
    bio: [
      'Charles André Joseph Marie de Gaulle nasceu em Lille em 22 de novembro de 1890, em família católica e patriótica. Formou-se em Saint-Cyr, combateu na Primeira Guerra Mundial, foi ferido três vezes e capturado em Verdun, passando trinta e dois meses como prisioneiro após cinco tentativas de fuga. Entre as guerras, defendeu em livros a criação de divisões blindadas profissionais, tese ignorada pelo alto comando francês e adotada pelos alemães.',
      'Com a invasão de 1940 e a decisão do governo francês de pedir armistício, De Gaulle recusou-se a aceitar a derrota. Voou para Londres e, em 18 de junho, transmitiu pela BBC o apelo para que a resistência continuasse, afirmando que a França perdera uma batalha mas não a guerra. Foi condenado à morte à revelia pelo regime de Vichy. Construiu a partir do nada a autoridade da França Livre, em atrito constante com Roosevelt e Churchill, e assegurou à França um lugar entre os vencedores.',
      'Chefiou o governo provisório após a Libertação e renunciou em 1946, em desacordo com a constituição da Quarta República. Voltou ao poder em 1958, durante a crise da guerra da Argélia, e fez aprovar uma nova constituição com poderes presidenciais fortes, fundando a Quinta República, ainda vigente.',
      'Concedeu a independência à Argélia em 1962, decisão que lhe custou tentativas de assassinato por parte da extrema-direita militar. Dotou a França de armamento nuclear próprio, retirou o país do comando militar integrado da OTAN, vetou duas vezes a entrada britânica na Comunidade Europeia e reconheceu a China comunista. Foi abalado pela revolta de maio de 1968 e renunciou em 1969, após perder um referendo. Morreu em Colombey-les-Deux-Églises em 9 de novembro de 1970.'
    ],
    contexto: 'De Gaulle definiu sua ação por uma ideia fixa: a França só existe se for independente. Isso explica decisões aparentemente contraditórias — resistir aos alemães em 1940 e aos americanos em 1966, descolonizar a Argélia e construir a bomba atômica. Sua figura permanece a referência incontornável da política francesa contemporânea.',
    contribuicoes: ['Liderou a França Livre a partir do apelo de 18 de junho de 1940.', 'Assegurou à França um lugar entre as potências vencedoras da Segunda Guerra.', 'Fundou a Quinta República francesa, com a Constituição de 1958.', 'Conduziu a independência da Argélia em 1962.', 'Dotou a França de força nuclear autônoma e retirou o país do comando integrado da OTAN.'],
    cronologia: [
      [1890, 'Nasce em Lille, em 22 de novembro.'],
      [1916, 'É capturado em Verdun.'],
      [1940, 'Faz o apelo de 18 de junho pela BBC, de Londres.'],
      [1944, 'Chefia o governo provisório após a Libertação.'],
      [1958, 'Volta ao poder e funda a Quinta República.'],
      [1962, 'Concede a independência à Argélia.'],
      [1969, 'Renuncia após derrota em referendo.'],
      [1970, 'Morre em Colombey-les-Deux-Églises.']
    ]
  },

  'Hans Kelsen': {
    papel: 'Jurista e filósofo do direito austríaco (1881–1973)',
    resumo: 'Formulou a Teoria Pura do Direito e criou o modelo de tribunal constitucional adotado no mundo inteiro.',
    bio: [
      'Hans Kelsen nasceu em Praga em 11 de outubro de 1881, em família judaica, e cresceu em Viena. Formou-se em direito e tornou-se professor na universidade da cidade, no ambiente intelectual extraordinariamente fértil da Viena do início do século XX.',
      'Foi o principal redator da Constituição austríaca de 1920, que criou o primeiro tribunal constitucional concentrado da história — uma corte separada, com competência exclusiva para anular leis inconstitucionais. O modelo kelseniano foi adotado depois pela Alemanha, Itália, Espanha, Portugal, pelos países latino-americanos e por boa parte do mundo. Kelsen integrou o próprio tribunal por uma década.',
      'A Teoria Pura do Direito, publicada em 1934, propõe depurar a ciência jurídica de tudo o que não seja direito: moral, política, sociologia, psicologia. Kelsen não nega que essas dimensões existam, mas sustenta que não pertencem à descrição científica do que a norma é. O direito aparece então como uma estrutura escalonada, em que cada norma retira validade da norma superior, até a norma fundamental pressuposta que fecha o sistema.',
      'Perseguido como judeu e como autor de uma constituição republicana, deixou a Áustria, passou por Colônia, Genebra e Praga, e emigrou em 1940 para os Estados Unidos, onde lecionou em Harvard e em Berkeley. Manteve com Carl Schmitt uma polêmica célebre sobre quem deve ser o guardião da Constituição. Morreu em Berkeley em 19 de abril de 1973.'
    ],
    contexto: 'Kelsen escreve na desagregação do Império Austro-Húngaro e na crise das democracias europeias entre guerras. Sua insistência em separar direito de política é frequentemente lida como formalismo frio; ele a defendia como proteção — uma ciência jurídica que se confunde com ideologia fica à disposição de qualquer regime.',
    contribuicoes: [
      'Formulou a Teoria Pura do Direito, obra central do positivismo jurídico do século XX.',
      'Foi o principal redator da Constituição austríaca de 1920.',
      'Criou o modelo de tribunal constitucional concentrado, adotado no mundo inteiro.',
      'Elaborou a teoria da estrutura escalonada do ordenamento e da norma fundamental.',
      'Manteve com Carl Schmitt o debate clássico sobre o guardião da Constituição.'
    ],
    cronologia: [
      [1881, 'Nasce em Praga, em 11 de outubro.'],
      [1920, 'Redige a Constituição austríaca, que cria o tribunal constitucional.'],
      [1934, 'Publica a Teoria Pura do Direito.'],
      [1940, 'Emigra para os Estados Unidos.'],
      [1945, 'Publica Teoria Geral do Direito e do Estado.'],
      [1973, 'Morre em Berkeley.']
    ]
  },

  'Isaiah Berlin': {
    papel: 'Filósofo político britânico nascido na Letônia (1909–1997)',
    resumo: 'Distinguiu liberdade negativa de liberdade positiva e defendeu que valores últimos podem ser incompatíveis entre si.',
    bio: [
      'Isaiah Berlin nasceu em Riga, então parte do Império Russo, em 6 de junho de 1909, em família judaica. Viveu a Revolução de 1917 em Petrogrado, ainda criança, e testemunhou cenas de violência de rua que citaria como origem de sua aversão duradoura à coerção política. A família emigrou para a Inglaterra em 1921.',
      'Estudou em Oxford, onde se tornou o primeiro judeu eleito membro do All Souls College. Durante a Segunda Guerra trabalhou para o serviço diplomático britânico em Washington e depois em Moscou, onde teve em 1945 um encontro noturno com a poeta Anna Akhmátova que marcou ambos e teve consequências graves para ela sob o stalinismo.',
      'Sua conferência de 1958, Dois Conceitos de Liberdade, é seu texto mais influente. Distingue a liberdade negativa — a ausência de interferência de outros sobre a minha ação — da liberdade positiva, o autodomínio e a autorrealização. Berlin não rejeita a segunda, mas mostra como ela pode ser convertida no argumento de que alguém sabe melhor do que eu qual é o meu verdadeiro eu, e usada para justificar a coerção em nome da própria liberdade do coagido.',
      'Formulou também o pluralismo de valores: liberdade, igualdade, justiça e misericórdia são todos genuínos, e alguns são incompatíveis entre si, de modo que escolher implica perder algo real. Não há harmonia final. Escreveu ainda sobre o pensamento russo, o contra-Iluminismo e Vico e Herder, e o ensaio O Ouriço e a Raposa. Morreu em Oxford em 5 de novembro de 1997.'
    ],
    contexto: 'Berlin escreve em plena Guerra Fria, contra os sistemas que prometiam a realização final da humanidade. Seu pluralismo é a recusa mais elaborada dessa promessa: se não existe solução única que concilie todos os valores, então todo projeto de sociedade perfeita exige sacrificar pessoas reais em nome de uma harmonia que não virá.',
    contribuicoes: [
      'Formulou a distinção entre liberdade negativa e liberdade positiva.',
      'Desenvolveu a tese do pluralismo de valores e da incompatibilidade entre bens genuínos.',
      'Escreveu O Ouriço e a Raposa, ensaio sobre Tolstói e sobre formas de pensamento.',
      'Recuperou para o debate anglófono o pensamento de Vico, Herder e do contra-Iluminismo.',
      'Escreveu estudos de referência sobre os pensadores russos do século XIX.'
    ],
    cronologia: [
      [1909, 'Nasce em Riga, em 6 de junho.'],
      [1921, 'A família emigra para a Inglaterra.'],
      [1945, 'Encontra Anna Akhmátova em Leningrado.'],
      [1953, 'Publica O Ouriço e a Raposa.'],
      [1958, 'Profere Dois Conceitos de Liberdade em Oxford.'],
      [1997, 'Morre em Oxford.']
    ]
  },

  'Amos Tversky': {
    papel: 'Psicólogo cognitivo israelense (1937–1996)',
    resumo: 'Com Daniel Kahneman, demonstrou que o julgamento humano segue atalhos previsíveis e fundou a economia comportamental.',
    bio: [
      'Amos Nathan Tversky nasceu em Haifa, no Mandato Britânico da Palestina, em 16 de março de 1937, filho de uma veterinária e de uma parlamentar. Serviu como paraquedista nas forças israelenses e recebeu a mais alta condecoração militar do país por ter puxado um soldado para fora do alcance de um explosivo prestes a detonar, ferindo-se no ato. Combateu em três guerras.',
      'Doutorou-se em psicologia matemática nos Estados Unidos e voltou a Israel, onde iniciou em 1969 a colaboração com Daniel Kahneman na Universidade Hebraica de Jerusalém. A parceria, descrita por ambos como uma conversa contínua de anos, produziu uma sequência de artigos que reorientou a psicologia do julgamento.',
      'O trabalho de 1974 sobre heurísticas e vieses mostrou que as pessoas não calculam probabilidades: usam atalhos mentais — representatividade, disponibilidade, ancoragem — que funcionam bem na maior parte do tempo e falham de maneiras sistemáticas e previsíveis. A Teoria do Prospecto, de 1979, demonstrou que avaliamos resultados como ganhos e perdas em relação a um ponto de referência, e que perdas pesam mais do que ganhos equivalentes. Foi o golpe decisivo contra o modelo do agente racional na economia.',
      'Tversky lecionou em Stanford a partir de 1978. Morreu de melanoma metastático em Stanford em 2 de junho de 1996, aos 59 anos. Kahneman recebeu o Nobel de Economia em 2002 pelo trabalho conjunto e afirmou publicamente que o prêmio era dos dois; a premiação não é concedida postumamente.'
    ],
    contexto: 'A dupla trabalhou contra o consenso então dominante nas ciências sociais, que tratava o ser humano como maximizador racional de utilidade. Ao demonstrar experimentalmente que os desvios são regulares e mapeáveis, abriram caminho para a economia comportamental e para toda a literatura posterior sobre tomada de decisão.',
    contribuicoes: ['Formulou com Daniel Kahneman o programa de pesquisa sobre heurísticas e vieses.', 'Criou com Kahneman a Teoria do Prospecto, base da economia comportamental.', 'Demonstrou a aversão à perda e o efeito de enquadramento sobre decisões.', 'Desenvolveu a teoria da medição fundamental e o modelo de contraste da similaridade.', 'Recebeu a bolsa MacArthur em 1984.'],
    cronologia: [
      [1937, 'Nasce em Haifa, em 16 de março.'],
      [1969, 'Inicia a colaboração com Daniel Kahneman.'],
      [1974, 'Publicam Julgamento sob Incerteza: Heurísticas e Vieses.'],
      [1979, 'Publicam a Teoria do Prospecto.'],
      [1978, 'Passa a lecionar em Stanford.'],
      [1996, 'Morre em Stanford, aos 59 anos.']
    ]
  },

  'Herbert Simon': {
    papel: 'Cientista social norte-americano (1916–2001)',
    resumo: 'Formulou a racionalidade limitada, ganhou o Nobel de Economia e foi um dos fundadores da inteligência artificial.',
    bio: [
      'Herbert Alexander Simon nasceu em Milwaukee, Wisconsin, em 15 de junho de 1916, filho de um engenheiro alemão imigrante. Formou-se e doutorou-se em ciência política na Universidade de Chicago, com pesquisa sobre tomada de decisão em administração pública. Passou a maior parte da carreira na Carnegie Mellon.',
      'Comportamento Administrativo, de 1947, contém sua ideia central. Contra o modelo econômico do agente que conhece todas as alternativas e escolhe a ótima, Simon argumentou que decisores reais têm informação incompleta, capacidade de processamento limitada e tempo escasso. Chamou isso de racionalidade limitada e propôs que as pessoas não maximizam: satisfazem, isto é, param na primeira alternativa que atende a um critério aceitável.',
      'A partir dos anos 1950, com Allen Newell, transferiu essa concepção para máquinas. Criaram o Logic Theorist, em 1956, considerado o primeiro programa de inteligência artificial, capaz de demonstrar teoremas de lógica, e depois o General Problem Solver. Simon esteve na conferência de Dartmouth que batizou o campo.',
      'Recebeu o Prêmio Nobel de Economia em 1978 pela pesquisa sobre o processo decisório nas organizações e a Medalha Turing em 1975, com Newell — combinação sem paralelo. Trabalhou também com psicologia cognitiva, teoria da complexidade e o conceito de economia da atenção, ao observar que a abundância de informação produz escassez de atenção. Morreu em Pittsburgh em 9 de fevereiro de 2001.'
    ],
    contexto: 'Simon é um caso raro de pesquisador que atravessou economia, administração, psicologia, ciência política e computação tratando todas como aspectos de um mesmo problema: como sistemas com recursos limitados tomam decisões. Essa unidade explica por que recebeu as maiores distinções de campos que quase não se falam.',
    contribuicoes: ['Formulou a racionalidade limitada e o conceito de satisfazer em vez de maximizar.', 'Escreveu Comportamento Administrativo (1947).', 'Criou com Allen Newell o Logic Theorist, primeiro programa de inteligência artificial.', 'Recebeu o Nobel de Economia em 1978 e a Medalha Turing em 1975.', 'Formulou a noção de economia da atenção diante da abundância informacional.'],
    cronologia: [
      [1916, 'Nasce em Milwaukee, em 15 de junho.'],
      [1947, 'Publica Comportamento Administrativo.'],
      [1956, 'Apresenta com Newell o Logic Theorist.'],
      [1975, 'Recebe a Medalha Turing.'],
      [1978, 'Recebe o Prêmio Nobel de Economia.'],
      [2001, 'Morre em Pittsburgh.']
    ]
  },

  'Neil Postman': {
    papel: 'Crítico da cultura e educador norte-americano (1931–2003)',
    resumo: 'Argumentou que o entretenimento televisivo, e não a censura, é o que dissolve o discurso público.',
    bio: [
      'Neil Postman nasceu no Brooklyn, Nova York, em 8 de março de 1931. Formou-se em educação e doutorou-se em Columbia. Lecionou na Universidade de Nova York por mais de quarenta anos, onde fundou o programa de ecologia da mídia — campo que estuda os meios de comunicação como ambientes que moldam a percepção, e não como canais neutros.',
      'Divertindo-se até Morrer, de 1985, é sua obra central. Postman contrapõe duas distopias: a de Orwell, em que a informação é proibida, e a de Huxley, em que ela se torna tão abundante e tão prazerosa que ninguém quer mais pensar. Sua tese é que o Ocidente seguiu o segundo caminho. Argumenta que cada meio favorece uma forma de discurso: a palavra impressa exige sequência, argumento e paciência; a televisão exige imagem, brevidade e emoção. Quando política, religião, educação e jornalismo migram para a televisão, não mudam apenas de suporte — passam a obedecer à lógica do entretenimento.',
      'O Desaparecimento da Infância, de 1982, sustenta que a infância é uma invenção histórica ligada à alfabetização, que criou uma fronteira entre quem podia e quem não podia acessar certos conhecimentos, e que a mídia eletrônica dissolve essa fronteira ao tornar tudo visível a todos.',
      'Escreveu ainda Tecnopólio, sobre a rendição da cultura à tecnologia, e O Fim da Educação. Não era tecnófobo por princípio: insistia que toda tecnologia é uma barganha, que dá algo e cobra algo, e que a pergunta a fazer é sempre qual é o preço. Morreu em Flushing, Nova York, em 5 de outubro de 2003.'
    ],
    contexto: 'Postman escreve no auge da televisão como meio dominante, antes da internet. Suas categorias foram formuladas para outro aparelho, mas a estrutura do argumento — cada meio impõe uma forma de pensar, e a política se ajusta a ela — passou a ser aplicada com frequência às redes sociais, o que explica a revalorização recente de sua obra.',
    contribuicoes: ['Escreveu Divertindo-se até Morrer (1985), clássico da crítica da mídia.', 'Fundou o programa de ecologia da mídia na Universidade de Nova York.', 'Escreveu O Desaparecimento da Infância (1982) e Tecnopólio (1992).', 'Formulou a análise das tecnologias como barganhas, com ganhos e custos inseparáveis.'],
    cronologia: [
      [1931, 'Nasce no Brooklyn, em 8 de março.'],
      [1971, 'Funda o programa de ecologia da mídia na NYU.'],
      [1982, 'Publica O Desaparecimento da Infância.'],
      [1985, 'Publica Divertindo-se até Morrer.'],
      [1992, 'Publica Tecnopólio.'],
      [2003, 'Morre em Nova York.']
    ]
  },

  'Yuval Noah Harari': {
    papel: 'Historiador israelense (1976–)',
    resumo: 'Escreveu Sapiens, síntese da história humana que sustenta que a espécie domina o planeta por conseguir cooperar em torno de ficções compartilhadas.',
    bio: [
      'Yuval Noah Harari nasceu em Kiryat Ata, em Israel, em 24 de fevereiro de 1976, em família de origem libanesa e do Leste Europeu. Estudou história na Universidade Hebraica de Jerusalém e doutorou-se em Oxford, com pesquisa sobre memórias militares medievais e sobre a experiência do combate — campo bastante distante daquele em que se tornaria conhecido.',
      'Sapiens saiu em hebraico em 2011 e em inglês em 2014, e tornou-se fenômeno editorial mundial. A tese central é que o Homo sapiens prevaleceu sobre outras espécies humanas não por força ou inteligência individual, mas pela capacidade de cooperar em números muito grandes em torno de realidades imaginadas: deuses, nações, dinheiro, empresas, direitos humanos. Nada disso existe fora da crença compartilhada, e é exatamente por isso que funciona em escala.',
      'Homo Deus, de 2015, projeta a análise para o futuro e argumenta que, resolvidos em larga medida fome, peste e guerra, a humanidade se voltará à busca de imortalidade, felicidade e poder divino, com risco de que o humanismo seja substituído pelo que chama de dataísmo. 21 Lições para o Século 21 trata de temas do presente, e Nexus, de 2024, examina as redes de informação da Idade da Pedra à inteligência artificial.',
      'É professor na Universidade Hebraica, pratica meditação vipassana desde 2000 e credita a ela parte de sua capacidade de trabalho. Sua obra é lida no mundo inteiro e criticada por parte dos historiadores acadêmicos, que apontam simplificações, generalizações e afirmações que a documentação disponível não sustenta com a segurança com que são apresentadas.'
    ],
    contexto: 'Harari escreve num momento de demanda por grandes sínteses capazes de dar sentido a mudanças aceleradas. Sua obra ocupa a posição da história de longuíssima duração destinada ao leitor geral, gênero que a especialização acadêmica havia praticamente abandonado — o que explica simultaneamente seu alcance e a resistência de parte da disciplina.',
    contribuicoes: ['Escreveu Sapiens (2011), um dos livros de não ficção mais vendidos das últimas décadas.', 'Formulou a tese das ficções compartilhadas como base da cooperação humana em larga escala.', 'Escreveu Homo Deus (2015), 21 Lições para o Século 21 (2018) e Nexus (2024).', 'Recolocou em circulação ampla o gênero da história de longuíssima duração para o leitor geral.'],
    cronologia: [
      [1976, 'Nasce em Kiryat Ata, Israel, em 24 de fevereiro.'],
      [2002, 'Doutora-se em história em Oxford.'],
      [2011, 'Publica Sapiens em hebraico.'],
      [2014, 'Sapiens é publicado em inglês e torna-se fenômeno mundial.'],
      [2015, 'Publica Homo Deus.'],
      [2024, 'Publica Nexus.']
    ],
    nota: 'Parte da historiografia acadêmica critica generalizações e simplificações na obra de Harari. Suas teses são amplamente difundidas, mas não representam consenso disciplinar.'
  },

  'Shoshana Zuboff': {
    papel: 'Socióloga e professora norte-americana (1951–)',
    resumo: 'Nomeou e descreveu o capitalismo de vigilância, o modelo econômico que transforma experiência humana em dado comportamental.',
    bio: [
      'Shoshana Zuboff nasceu em 18 de novembro de 1951. Formou-se em filosofia em Chicago e doutorou-se em psicologia social em Harvard, onde se tornou uma das primeiras mulheres a ocupar cátedra plena na escola de negócios.',
      'In the Age of the Smart Machine, de 1988, foi baseado em anos de pesquisa de campo em fábricas e escritórios durante a informatização do trabalho. Zuboff distinguiu automatizar — substituir trabalho humano — de informatizar, a capacidade de a mesma tecnologia gerar uma camada de dados sobre o processo que antes não existia. Foi um dos primeiros estudos empíricos sérios sobre o que a computação faz ao trabalho.',
      'A Era do Capitalismo de Vigilância, de 2019, é sua obra de maior alcance. Argumenta que empresas de tecnologia descobriram, no início dos anos 2000, que os dados excedentes gerados pelo uso de seus serviços podiam ser usados para prever comportamento, e que essas previsões podiam ser vendidas em mercados futuros de comportamento. A matéria-prima é a experiência humana privada, apropriada unilateralmente e sem negociação real.',
      'Sua tese é que isso não é apenas violação de privacidade, e sim uma nova lógica de acumulação, com consequências políticas: quando a previsão se torna produto, o passo seguinte é a intervenção para tornar o comportamento mais previsível. Zuboff sustenta que se trata de um poder sem precedente para o qual ainda não existe vocabulário jurídico adequado. É professora emérita em Harvard.'
    ],
    contexto: 'Zuboff escreve quando o debate público sobre plataformas ainda se organizava em torno de privacidade individual e termos de uso. Sua contribuição foi deslocar a discussão para a estrutura econômica: o problema não é o dado vazado, é o modelo de negócio que depende da extração contínua e da previsão de comportamento.',
    contribuicoes: ['Nomeou e descreveu o capitalismo de vigilância como lógica econômica.', 'Escreveu A Era do Capitalismo de Vigilância (2019).', 'Escreveu In the Age of the Smart Machine (1988), estudo pioneiro sobre informatização do trabalho.', 'Formulou a distinção entre automatizar e informatizar.', 'Foi uma das primeiras mulheres a ocupar cátedra plena na Harvard Business School.'],
    cronologia: [
      [1951, 'Nasce nos Estados Unidos, em 18 de novembro.'],
      [1988, 'Publica In the Age of the Smart Machine.'],
      [2019, 'Publica A Era do Capitalismo de Vigilância.']
    ]
  },

  'Benjamin Constant': {
    papel: 'Escritor e político franco-suíço (1767–1830)',
    resumo: 'Distinguiu a liberdade dos antigos da liberdade dos modernos e fundou o liberalismo político francês.',
    bio: [
      'Henri-Benjamin Constant de Rebecque nasceu em Lausanne, na Suíça, em 25 de outubro de 1767, em família protestante de origem francesa. Teve educação errante e precoce, passando por preceptores e universidades em várias cidades europeias, entre elas Edimburgo. Foi jogador compulsivo e teve vida amorosa tumultuada, sobretudo a relação longa e conflituosa com Madame de Staël.',
      'Chegou a Paris após o Terror e envolveu-se na política do Diretório. Opôs-se à concentração de poder de Napoleão e foi afastado, passando anos no exílio. Voltou durante os Cem Dias e, paradoxalmente, redigiu para Napoleão um ato constitucional liberalizante. Sob a Restauração, foi deputado e uma das principais vozes da oposição liberal.',
      'Sua conferência de 1819, Da Liberdade dos Antigos Comparada à dos Modernos, é seu texto mais influente. Constant argumenta que a liberdade dos antigos era a participação direta e coletiva nas decisões da cidade, acompanhada da submissão completa do indivíduo à comunidade; a dos modernos é o gozo pacífico da independência privada, garantida por limites ao poder. Confundir as duas, sustenta, foi o erro dos revolucionários que quiseram impor a virtude antiga a uma sociedade comercial moderna — e produziu o Terror.',
      'Defendeu a liberdade de imprensa, de religião e de comércio, e a necessidade de contrapesos institucionais ao poder, inclusive ao poder da maioria. Escreveu também o romance Adolphe, análise psicológica de um caso amoroso, considerado um marco da prosa francesa. Morreu em Paris em 8 de dezembro de 1830.'
    ],
    contexto: 'Constant escreve entre a Revolução, o Império e a Restauração, tendo visto os três fracassarem em produzir liberdade estável. Sua obra é a tentativa de explicar por quê, e a distinção que formulou continua sendo o instrumento mais usado para pensar a tensão entre participação democrática e proteção da esfera privada.',
    contribuicoes: ['Formulou a distinção entre a liberdade dos antigos e a liberdade dos modernos.', 'Fundou o liberalismo político francês e a defesa dos limites ao poder da maioria.', 'Escreveu Princípios de Política e os Comentários sobre a obra de Filangieri.', 'Escreveu Adolphe (1816), marco do romance psicológico francês.'],
    cronologia: [
      [1767, 'Nasce em Lausanne, em 25 de outubro.'],
      [1795, 'Chega a Paris e envolve-se na política do Diretório.'],
      [1815, 'Redige o Ato Adicional durante os Cem Dias.'],
      [1816, 'Publica Adolphe.'],
      [1819, 'Profere Da Liberdade dos Antigos Comparada à dos Modernos.'],
      [1830, 'Morre em Paris.']
    ]
  },

  'Ban Ki-moon': {
    papel: 'Diplomata sul-coreano, 8º secretário-geral da ONU (1944–)',
    resumo: 'Conduziu a ONU durante a adoção do Acordo de Paris sobre o clima e dos Objetivos de Desenvolvimento Sustentável.',
    bio: [
      'Ban Ki-moon nasceu em Eumseong, na Coreia do Sul, em 13 de junho de 1944, em família rural pobre. Viveu ainda criança a Guerra da Coreia, quando a família fugiu para as montanhas e a escola foi destruída. Estudou em livros doados por organismos internacionais, experiência que citaria como origem de sua vocação diplomática. Aos dezoito anos venceu um concurso de inglês que lhe rendeu uma viagem aos Estados Unidos e um encontro com John F. Kennedy.',
      'Formou-se em relações internacionais em Seul e fez mestrado em Harvard. Fez carreira de quase quatro décadas no serviço diplomático coreano, com passagens por Nova Délhi, Washington e Viena, e chegou a ministro das Relações Exteriores.',
      'Assumiu como secretário-geral das Nações Unidas em 2007 e cumpriu dois mandatos, até 2016. Fez das mudanças climáticas a prioridade declarada de sua gestão, conduzindo a diplomacia que resultou no Acordo de Paris, adotado em 2015. No mesmo ano foram aprovados os Objetivos de Desenvolvimento Sustentável, agenda global para 2030.',
      'Sua gestão também é avaliada por episódios difíceis: a epidemia de cólera no Haiti, associada a tropas de paz da ONU e que levou anos até um reconhecimento institucional de responsabilidade, e as críticas quanto à atuação da organização na Síria e no Sri Lanka. Seu estilo discreto foi elogiado como capacidade de construir consenso e criticado como excesso de cautela.'
    ],
    contexto: 'Ban dirigiu a ONU num período de crescente paralisia do Conselho de Segurança e de perda de eficácia da organização em conflitos armados. Sua escolha foi deslocar energia para as áreas em que o consenso ainda era possível — clima, desenvolvimento, saúde global —, o que define os resultados e os limites de sua gestão.',
    contribuicoes: ['Foi o oitavo secretário-geral das Nações Unidas, entre 2007 e 2016.', 'Conduziu a diplomacia que resultou no Acordo de Paris sobre o clima, em 2015.', 'Presidiu a adoção dos Objetivos de Desenvolvimento Sustentável.', 'Criou a ONU Mulheres, em 2010.', 'Ampliou a agenda de saúde global da organização, com foco em mortalidade materna e infantil.'],
    cronologia: [
      [1944, 'Nasce em Eumseong, Coreia do Sul, em 13 de junho.'],
      [2004, 'Torna-se ministro das Relações Exteriores da Coreia do Sul.'],
      [2007, 'Assume como secretário-geral das Nações Unidas.'],
      [2010, 'Cria a ONU Mulheres.'],
      [2015, 'Acordo de Paris e Objetivos de Desenvolvimento Sustentável são adotados.'],
      [2016, 'Encerra o segundo mandato.']
    ]
  },

  Quintiliano: {
    papel: 'Professor de retórica romano (c. 35–c. 100)',
    resumo: 'Primeiro professor pago pelo Estado romano, escreveu o tratado que fundou a pedagogia ocidental.',
    bio: [
      'Marco Fábio Quintiliano nasceu em Calagurris, na Hispânia, por volta do ano 35. Foi educado em Roma e voltou à Hispânia antes de retornar definitivamente à capital em 68, na comitiva do futuro imperador Galba. Abriu escola de retórica e tornou-se o professor mais requisitado da cidade.',
      'Sob Vespasiano, tornou-se o primeiro professor a receber salário público do erário imperial — marco na história da educação, por reconhecer o ensino como responsabilidade do Estado. Ensinou por cerca de vinte anos, teve entre os alunos Plínio, o Jovem, e foi encarregado por Domiciano da educação de sobrinhos-netos do imperador.',
      'Perdeu a esposa muito jovem e os dois filhos pequenos, tragédia que registra num dos trechos mais pessoais da literatura latina, no prefácio do sexto livro de sua obra.',
      'A Institutio Oratoria, concluída por volta do ano 95, é um tratado em doze livros que não trata apenas de técnica de fala: acompanha a formação do orador desde a primeira infância. Quintiliano defende que a educação comece cedo e sem violência, critica os castigos corporais, valoriza o jogo como instrumento de aprendizado, defende a escola pública contra o preceptor particular e sustenta que o aprendizado deve respeitar a natureza de cada aluno. Sua definição do orador como o homem bom hábil no falar liga técnica e caráter. A obra foi redescoberta integralmente por Poggio Bracciolini em 1416 e tornou-se base da pedagogia humanista renascentista.'
    ],
    contexto: 'Quintiliano escreve na Roma dos Flávios, quando a oratória havia perdido a função política que tivera na república e se tornara sobretudo exercício escolar e judiciário. Sua resposta foi ampliar o alcance da retórica: se ela já não decide o destino da cidade, que sirva para formar a pessoa inteira desde a infância.',
    contribuicoes: [
      'Escreveu a Institutio Oratoria, tratado em doze livros sobre formação e retórica.',
      'Foi o primeiro professor a receber salário público do Estado romano.',
      'Formulou princípios pedagógicos duradouros: início precoce, recusa do castigo físico, uso do jogo e respeito à natureza do aluno.',
      'Definiu o orador como o homem bom hábil no falar, unindo técnica e caráter.',
      'Sua obra tornou-se base da pedagogia humanista após a redescoberta de 1416.'
    ],
    cronologia: [
      ['c. 35', 'Nasce em Calagurris, na Hispânia.'],
      [68, 'Estabelece-se definitivamente em Roma.'],
      ['c. 72', 'Torna-se o primeiro professor pago pelo erário imperial.'],
      ['c. 95', 'Conclui a Institutio Oratoria.'],
      [1416, 'Poggio Bracciolini redescobre o texto completo em Saint-Gall.']
    ]
  }
};

const OBRAS_F12 = {
  'Ayn Rand': [
    [
      'A Revolta de Atlas',
      'livro',
      1957,
      'Num mundo em declínio, os criadores, industriais e inventores desaparecem um a um, deixando a sociedade que os explorava entregue ao próprio colapso. É a obra mais extensa de Rand e contém, num longo discurso de um dos personagens, a exposição completa do objetivismo: a razão como único instrumento de conhecimento, o interesse próprio racional como virtude e o capitalismo sem intervenção como único sistema moralmente consistente. Rejeitada pela crítica literária e pela filosofia acadêmica, tornou-se referência central do libertarianismo norte-americano.'
    ],
    ['A Nascente', 'livro', 1943, 'Howard Roark, arquiteto de talento excepcional, prefere destruir a própria obra a vê-la adulterada pelas exigências de comitês e clientes. O romance opõe o criador que age por convicção ao homem que vive de aprovação alheia, e foi o primeiro grande sucesso de Rand, com adaptação para o cinema em 1949. É a formulação em ficção de sua ética do individualismo.'],
    ['A Virtude do Egoísmo', 'ensaio', 1964, 'Coletânea de ensaios em que Rand expõe diretamente sua ética, sem a mediação da ficção. Argumenta que o altruísmo, entendido como dever de sacrificar-se pelos outros, é moralmente destrutivo, e que a busca racional do próprio interesse é a base de qualquer convivência produtiva. É o texto mais direto e mais contestado de sua filosofia.']
  ],
  'Hans Kelsen': [
    [
      'Teoria Pura do Direito',
      'livro',
      1934,
      'Propõe depurar a ciência jurídica de tudo o que não seja direito — moral, política, sociologia — não porque essas dimensões não existam, mas porque não pertencem à descrição do que a norma é. Apresenta o ordenamento como estrutura escalonada em que cada norma retira validade da superior, até a norma fundamental pressuposta. Escrita na Europa entre guerras, é a obra central do positivismo jurídico do século XX e continua sendo o ponto de partida obrigatório da teoria do direito.'
    ]
  ],
  'Isaiah Berlin': [
    [
      'Dois Conceitos de Liberdade',
      'ensaio',
      1958,
      'Conferência inaugural em Oxford que distingue a liberdade negativa, ausência de interferência sobre a minha ação, da liberdade positiva, o autodomínio e a autorrealização. Berlin mostra como a segunda pode ser convertida no argumento de que alguém sabe melhor do que eu qual é meu verdadeiro eu, e usada para justificar a coerção em nome da liberdade do próprio coagido. Escrito em plena Guerra Fria, é um dos textos mais influentes da filosofia política do século XX.'
    ],
    [
      'O Ouriço e a Raposa',
      'ensaio',
      1953,
      'Parte de um verso atribuído ao poeta grego Arquíloco — a raposa sabe muitas coisas, o ouriço sabe uma coisa grande — para dividir os pensadores entre os que reduzem tudo a um sistema único e os que perseguem muitos fins sem unificá-los. Aplica a distinção a Tolstói, que Berlin descreve como uma raposa que passou a vida querendo ser ouriço. A tipologia extrapolou a crítica literária e é hoje usada em campos muito distantes.'
    ]
  ],
  'Herbert Simon': [
    [
      'Comportamento Administrativo',
      'livro',
      1947,
      'Contra o modelo do decisor que conhece todas as alternativas e escolhe a ótima, Simon mostra que pessoas e organizações reais operam com informação incompleta, capacidade limitada de processamento e tempo escasso. Formula a racionalidade limitada e a ideia de que decisores não maximizam: satisfazem, parando na primeira alternativa aceitável. Foi a base do trabalho que lhe renderia o Nobel de Economia e influenciou administração, economia, psicologia e inteligência artificial.'
    ]
  ],
  'Neil Postman': [
    [
      'Divertindo-se até Morrer',
      'livro',
      1985,
      'Contrapõe duas distopias: a de Orwell, em que a informação é proibida, e a de Huxley, em que ela é tão abundante e prazerosa que ninguém quer mais pensar — e sustenta que o Ocidente seguiu o segundo caminho. A tese é que cada meio favorece uma forma de discurso, e que quando política, religião, educação e jornalismo migram para a televisão passam a obedecer à lógica do entretenimento. Escrito antes da internet, suas categorias foram amplamente reaplicadas às redes sociais.'
    ],
    ['O Desaparecimento da Infância', 'livro', 1982, 'Argumenta que a infância é uma invenção histórica ligada à alfabetização, que criou uma fronteira entre quem podia e quem não podia acessar certos conhecimentos, e que a mídia eletrônica dissolve essa fronteira ao tornar tudo visível a todos ao mesmo tempo. É um dos primeiros estudos a tratar a infância como categoria cultural e não natural.'],
    ['Tecnopólio', 'livro', 1992, 'Descreve a rendição da cultura à tecnologia, estágio em que a eficiência técnica deixa de ser meio e passa a ser critério último de valor. Postman insiste que toda tecnologia é uma barganha, que dá algo e cobra algo, e que a pergunta a fazer diante de qualquer inovação é qual é o preço e quem o paga.']
  ],
  'Yuval Noah Harari': [
    [
      'Sapiens',
      'livro',
      2011,
      'Percorre a história do Homo sapiens da revolução cognitiva à era moderna e sustenta que a espécie prevaleceu não por força ou inteligência individual, mas pela capacidade de cooperar em números muito grandes em torno de realidades imaginadas — deuses, nações, dinheiro, empresas, direitos. Nenhuma delas existe fora da crença compartilhada, e é por isso que funcionam em escala. Tornou-se um dos livros de não ficção mais vendidos das últimas décadas, e parte da historiografia acadêmica critica suas generalizações.'
    ],
    ['Homo Deus', 'livro', 2015, 'Projeta a análise de Sapiens para o futuro: resolvidos em larga medida fome, peste e guerra, a humanidade se voltaria à busca de imortalidade, felicidade permanente e capacidade de criação. Harari argumenta que o humanismo pode ser substituído pelo dataísmo, a crença de que fluxos de dados e algoritmos conhecem cada pessoa melhor do que ela mesma.'],
    ['21 Lições para o Século 21', 'livro', 2018, 'Deixa passado e futuro de lado para tratar do presente: trabalho e automação, desinformação, imigração, nacionalismo, terrorismo, educação e sentido. É o mais fragmentário de seus livros, organizado como ensaios independentes sobre questões em aberto.']
  ],
  'Shoshana Zuboff': [
    [
      'A Era do Capitalismo de Vigilância',
      'livro',
      2019,
      'Descreve o surgimento, no início dos anos 2000, de um modelo econômico que trata a experiência humana privada como matéria-prima gratuita: os dados excedentes gerados pelo uso de serviços digitais são convertidos em previsões de comportamento e vendidos em mercados futuros. Zuboff argumenta que o problema não é privacidade violada, e sim uma nova lógica de acumulação que, para melhorar as previsões, passa a intervir sobre o próprio comportamento. Deu nome a um debate que já existia sem vocabulário.'
    ]
  ],
  'Benjamin Constant': [
    [
      'Da Liberdade dos Antigos Comparada à dos Modernos',
      'ensaio',
      1819,
      'Conferência que distingue a liberdade antiga, participação direta e coletiva nas decisões da cidade acompanhada da submissão completa do indivíduo, da liberdade moderna, gozo pacífico da independência privada garantida por limites ao poder. Constant sustenta que confundir as duas foi o erro dos revolucionários franceses, que quiseram impor virtude antiga a uma sociedade comercial — e que isso produziu o Terror. É um texto fundador do liberalismo político.'
    ],
    ['Adolphe', 'livro', 1816, 'Romance breve sobre um jovem que conquista uma mulher mais velha por vaidade e descobre não conseguir deixá-la nem amá-la. A análise implacável dos próprios motivos do narrador, e a distância entre o que ele sente e o que declara, fizeram dele um marco do romance psicológico francês.']
  ],
  Quintiliano: [
    [
      'Institutio Oratoria',
      'livro',
      95,
      'Tratado em doze livros que acompanha a formação do orador desde a primeira infância até a maturidade profissional. Muito além da técnica de fala, é um tratado de educação: defende que o aprendizado comece cedo e sem violência, critica os castigos corporais, valoriza o jogo, prefere a escola pública ao preceptor particular e sustenta que o ensino deve respeitar a natureza de cada aluno. Sua definição do orador como o homem bom hábil no falar liga técnica e caráter. Redescoberto integralmente em 1416, tornou-se base da pedagogia humanista renascentista.'
    ]
  ],
  'Salvador Dalí': [
    [
      'A Persistência da Memória',
      'pintura',
      1931,
      'Pequena tela com relógios moles derretendo sobre uma paisagem da costa catalã. Dalí a pintou em poucas horas, segundo seu relato, a partir da imagem de um queijo camembert amolecendo. Tornou-se uma das imagens mais reconhecíveis da arte do século XX e o emblema visual do surrealismo, condensando a suspensão do tempo objetivo característica do sonho, executada com técnica de precisão acadêmica.'
    ],
    ['A Metamorfose de Narciso', 'pintura', 1937, 'Aplica de forma exemplar o método paranoico-crítico: a figura de Narciso curvado sobre a água e a mão de pedra segurando um ovo são a mesma forma lida de dois modos. Dalí levou a tela a Londres para mostrar a Freud, num encontro que descreveu como decisivo, e escreveu um poema homônimo para acompanhá-la.'],
    ['Um Cão Andaluz', 'filme', 1929, 'Curta-metragem feito com Luis Buñuel, construído a partir de dois sonhos relatados pelos autores e da regra de recusar qualquer imagem que admitisse explicação racional. Sua sequência de abertura é uma das mais citadas da história do cinema, e o filme é o marco inaugural do cinema surrealista.']
  ],
  Osho: [],
  'Charles de Gaulle': [
    [
      'Memórias de Guerra',
      'memoria',
      1959,
      'Três volumes em que De Gaulle narra a recusa do armistício de 1940, a construção da França Livre a partir de Londres, os atritos permanentes com Roosevelt e Churchill e a Libertação. Escritos em prosa deliberadamente literária, funcionam simultaneamente como fonte histórica de primeira ordem e como construção da própria imagem, ponto reconhecido pela historiografia.'
    ]
  ],
  'Amos Tversky': [
    [
      'Julgamento sob Incerteza: Heurísticas e Vieses',
      'ensaio',
      1974,
      'Artigo escrito com Daniel Kahneman que demonstra que as pessoas não calculam probabilidades: usam atalhos mentais — representatividade, disponibilidade, ancoragem — que funcionam na maior parte do tempo e falham de maneiras sistemáticas e previsíveis. É um dos artigos mais citados das ciências sociais e o ponto de partida do programa de pesquisa que fundaria a economia comportamental.'
    ],
    [
      'Teoria do Prospecto',
      'ensaio',
      1979,
      'Artigo, também com Kahneman, que substitui a teoria da utilidade esperada por um modelo descritivo do comportamento real: avaliamos resultados como ganhos e perdas em relação a um ponto de referência, e perdas pesam mais do que ganhos equivalentes. Foi o golpe decisivo contra o modelo do agente racional em economia e rendeu a Kahneman o Nobel de 2002, prêmio que ele declarou pertencer aos dois.'
    ]
  ],
  'Mark Zuckerberg': [],
  'Augusto Cury': [
    [
      'Pais Brilhantes, Professores Fascinantes',
      'livro',
      2003,
      'Dirigido a pais e educadores, propõe sete hábitos que, segundo o autor, distinguem adultos capazes de formar crianças emocionalmente saudáveis, entre eles ouvir antes de corrigir e educar a emoção e não apenas o comportamento. Escrito em linguagem direta e ilustrado por casos de consultório, tornou-se um dos livros brasileiros mais vendidos na área de educação e circula amplamente em escolas.'
    ],
    ['O Vendedor de Sonhos', 'livro', 2008, 'Romance em que uma figura misteriosa impede um suicídio e passa a recrutar pessoas socialmente descartadas para um projeto de recuperação do sentido da vida. Serve de veículo ficcional para as teses do autor sobre ansiedade, consumo e vazio existencial, e foi adaptado para o cinema em 2016.'],
    ['Análise da Inteligência de Cristo', 'livro', 1999, 'Série em que Cury examina, do ponto de vista de um psiquiatra, o comportamento e a gestão emocional atribuídos a Jesus nos evangelhos. Foi a obra que projetou o autor comercialmente e estabeleceu o formato que repetiria: aplicação de categorias psicológicas próprias a figuras e situações de amplo reconhecimento.']
  ],
  'Ulysses Guimarães': [],
  Pitágoras: [],
  'Publílio Siro': [
    [
      'Sentenças',
      'livro',
      'séc. I a.C.',
      'Coletânea de versos de uma única linha extraídos dos mimos de Publílio Siro e compilados já na Antiguidade como material escolar, por seu valor moral e mnemônico. A ordem alfabética é artificial, resultado da compilação e não do autor. Foi usada por séculos no ensino de latim, o que garantiu sua transmissão, e várias das sentenças passaram ao repertório proverbial das línguas europeias. Como a coletânea recebeu acréscimos ao longo do tempo, parte do material é de autoria incerta.'
    ]
  ],
  'Karl Jaspers': [
    [
      'Psicopatologia Geral',
      'livro',
      1913,
      'Escrito quando o autor tinha trinta anos, separa a explicação causal, herdada das ciências naturais, da compreensão do sentido vivido pelo paciente, e defende que a psiquiatria precisa das duas. Introduz o método fenomenológico na clínica: descrever com precisão a experiência subjetiva antes de classificá-la. Transformou a psiquiatria numa disciplina metodologicamente consciente e segue em uso como referência mais de um século depois.'
    ],
    ['A Questão da Culpa Alemã', 'livro', 1946, 'Escrito no ano seguinte ao fim da guerra, distingue quatro formas de culpa — criminal, política, moral e metafísica — e recusa tanto a acusação coletiva indiscriminada quanto a negação de qualquer responsabilidade. Foi um dos primeiros textos alemães a encarar publicamente a questão e permanece central no debate sobre responsabilidade coletiva.']
  ],
  'Ban Ki-moon': [],
  'Neil Postman2': []
};

(function aplicarF12() {
  Object.entries(PANORAMAS_F12).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F12).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF12() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 12:', e);
    }
  };
})();

/* ================================================================
   FASE 13 — CONTINUAÇÃO DA FILA (autores 193 em diante)
   ================================================================ */
const PANORAMAS_F13 = {
  'Mahatma Gandhi': {
    papel: 'Advogado e líder político indiano (1869–1948)',
    resumo: 'Conduziu a independência da Índia pela resistência não violenta e influenciou movimentos de direitos civis no mundo inteiro.',
    bio: [
      'Mohandas Karamchand Gandhi nasceu em Porbandar, no oeste da Índia, em 2 de outubro de 1869, em família de casta mercantil; o pai era administrador local. Casou-se aos treze anos, por arranjo familiar, e foi estudar direito em Londres aos dezoito, prometendo à mãe abster-se de carne, álcool e relações fora do casamento.',
      'A formação política ocorreu na África do Sul, onde chegou em 1893 para um caso jurídico e permaneceu vinte e um anos. Foi expulso de um vagão de trem em Pietermaritzburg por se recusar a deixar a primeira classe, episódio que descreveu como decisivo. Organizou a comunidade indiana contra leis discriminatórias e desenvolveu ali o método que chamou de satyagraha — literalmente firmeza na verdade —, distinto da resistência passiva por exigir coragem ativa e recusa em odiar o adversário.',
      'De volta à Índia em 1915, transformou o Congresso Nacional Indiano de organização de elite em movimento de massa. Conduziu a não cooperação de 1920, a Marcha do Sal de 1930 — 386 quilômetros a pé para colher sal do mar e violar o monopólio britânico — e a campanha Quit India de 1942. Foi preso repetidas vezes e passou anos na cadeia. Fez jejuns prolongados como instrumento político, inclusive contra a violência entre hindus e muçulmanos.',
      'A independência veio em 1947, acompanhada da partição entre Índia e Paquistão e de massacres que mataram centenas de milhares e deslocaram milhões — desfecho que ele considerou uma derrota pessoal e a que respondeu com jejuns pela paz. Foi assassinado em Nova Délhi em 30 de janeiro de 1948 por um extremista hindu que o acusava de favorecer os muçulmanos. Suas posições sobre castas em fases anteriores da vida, criticadas por Ambedkar, e declarações racistas de seu período sul-africano são objeto de crítica histórica documentada.'
    ],
    contexto: 'Gandhi enfrentou o maior império da história com um método que dependia de disciplina em massa e de publicidade internacional: fazer a violência do adversário visível diante de manifestantes que não revidam. Influenciou diretamente Martin Luther King Jr., Mandela e movimentos de resistência civil em todos os continentes.',
    contribuicoes: [
      'Desenvolveu o satyagraha, método de resistência não violenta em escala de massa.',
      'Conduziu a Marcha do Sal de 1930 e as campanhas de não cooperação contra o domínio britânico.',
      'Transformou o Congresso Nacional Indiano em movimento popular.',
      'Influenciou diretamente Martin Luther King Jr., Nelson Mandela e movimentos de direitos civis no mundo.',
      'Defendeu a convivência entre hindus e muçulmanos até o fim da vida, ao custo da própria segurança.'
    ],
    cronologia: [
      [1869, 'Nasce em Porbandar, em 2 de outubro.'],
      [1893, 'Chega à África do Sul e é expulso do trem em Pietermaritzburg.'],
      [1915, 'Retorna definitivamente à Índia.'],
      [1930, 'Conduz a Marcha do Sal.'],
      [1942, 'Lança a campanha Quit India.'],
      [1947, 'Independência da Índia, acompanhada da partição.'],
      [1948, 'É assassinado em Nova Délhi, em 30 de janeiro.']
    ],
    nota: 'Posições de Gandhi sobre o sistema de castas, criticadas por B. R. Ambedkar, e declarações racistas de seu período sul-africano são objeto de crítica histórica documentada.'
  },

  'Sun Tzu': {
    papel: 'Estrategista militar chinês (séc. VI–V a.C.)',
    resumo: 'A ele se atribui A Arte da Guerra, tratado que sustenta que a vitória máxima é vencer sem combater.',
    bio: [
      'Sun Wu, conhecido como Sun Tzu — mestre Sun —, teria sido general a serviço do reino de Wu, no sudeste da China, no fim do período das Primaveras e Outonos. A biografia tradicional vem do historiador Sima Qian, que escreveu séculos depois e narra o episódio em que Sun Tzu teria demonstrado seu método treinando as concubinas do rei como soldados.',
      'A historicidade da figura é debatida. Parte dos estudiosos considera que o texto foi composto mais tarde, no período dos Estados Combatentes, e que resultou de acúmulo de tradição militar e não de um autor único. A descoberta em 1972, em Yinqueshan, de manuscritos em tiras de bambu, confirmou a antiguidade do texto e ajudou a fixar sua forma.',
      'A Arte da Guerra tem treze capítulos curtos e trata de cálculo prévio, terreno, espionagem, moral das tropas, logística e engano. Sua tese central inverte a expectativa de um manual militar: a guerra é cara, arriscada e deve ser evitada; a excelência suprema consiste em submeter o inimigo sem combate. Vitórias devem ser rápidas, campanhas longas arruínam Estados, e o bom comandante vence antes da batalha, ao criar as condições que tornam a derrota do adversário inevitável.',
      'O texto foi leitura obrigatória entre estrategistas chineses e japoneses por séculos, chegou à Europa no século XVIII em tradução francesa e, no século XX, passou a circular também em escolas de negócios, direito e esporte, pela generalidade de seus princípios sobre conflito e vantagem competitiva.'
    ],
    contexto: 'A Arte da Guerra pertence a um período de guerra endêmica entre reinos chineses, em que exércitos passavam de aristocráticos a formados por conscritos em massa. Sua ênfase em cálculo, informação e economia de recursos responde a essa transformação: a guerra havia se tornado cara demais para ser conduzida por honra.',
    contribuicoes: ['A ele se atribui A Arte da Guerra, o tratado militar mais influente da história.', 'Formulou o princípio de que a vitória máxima é submeter o inimigo sem combate.', 'Estabeleceu a centralidade da informação, da espionagem e do conhecimento do terreno.', 'Sua obra é aplicada até hoje em estratégia militar, empresarial e esportiva.'],
    cronologia: [
      ['séc. VI a.C.', 'Data tradicional atribuída à sua vida, segundo Sima Qian.'],
      ['séc. V–IV a.C.', 'Período em que o texto provavelmente alcança forma estável.'],
      [1772, 'Primeira tradução europeia, para o francês.'],
      [1972, 'Manuscritos de Yinqueshan são descobertos, confirmando a antiguidade do texto.']
    ],
    nota: 'A existência de Sun Tzu como pessoa histórica é debatida. Parte da pesquisa entende A Arte da Guerra como texto de formação acumulativa.'
  },

  Sócrates: {
    papel: 'Filósofo grego (c. 470 a.C.–399 a.C.)',
    resumo: 'Nada escreveu, mas reorientou a filosofia para a pergunta sobre como se deve viver — e foi condenado à morte por isso.',
    bio: [
      'Sócrates nasceu em Atenas por volta de 470 a.C., filho de um escultor e de uma parteira. Serviu como hoplita em três campanhas da Guerra do Peloponeso e foi elogiado pela coragem. Viveu com extrema simplicidade, casou-se com Xantipa e recusou-se sempre a cobrar por ensinar, ao contrário dos sofistas de sua época.',
      'Nada escreveu. Tudo o que se sabe vem de terceiros — sobretudo dos diálogos de Platão, das memórias de Xenofonte e de uma comédia de Aristófanes que o satiriza. Como esses relatos divergem entre si, distinguir o Sócrates histórico do personagem literário é um problema clássico da história da filosofia.',
      'Sua contribuição foi deslocar a filosofia da investigação sobre a natureza para a pergunta sobre como se deve viver. Praticava a elenchos, o exame por perguntas sucessivas que levava o interlocutor a descobrir a incoerência das próprias convicções. Comparava-se a uma parteira, que não gera ideias mas ajuda a dar à luz o que já está no outro, e a um moscardo incômodo que impede a cidade de cochilar. Sustentava que a única sabedoria que possuía era saber que nada sabia.',
      'Foi julgado em 399 a.C. por corromper a juventude e não reconhecer os deuses da cidade, numa Atenas humilhada pela derrota na guerra e desconfiada de figuras associadas aos que haviam colaborado com a tirania. Condenado por margem estreita, recusou propor o exílio e recusou também fugir quando amigos organizaram a fuga, argumentando que quem se beneficiou das leis não pode desrespeitá-las quando elas o desfavorecem. Bebeu a cicuta cercado de discípulos.'
    ],
    contexto: 'Sócrates atua na Atenas do fim do século V a.C., derrotada por Esparta, empobrecida e politicamente instável. Seu julgamento é inseparável desse clima: o hábito de expor publicamente a ignorância de cidadãos influentes e a proximidade com figuras comprometidas com a tirania dos Trinta tornaram-no alvo conveniente.',
    contribuicoes: [
      'Deslocou a filosofia grega da cosmologia para a ética e a pergunta sobre a vida boa.',
      'Criou o método de exame por perguntas, base do diálogo filosófico.',
      'Formulou a tese de que a consciência da própria ignorância é o início do saber.',
      'Sua morte tornou-se o episódio fundador da relação entre filosofia e poder político.',
      'Foi mestre de Platão e, por essa via, de toda a tradição filosófica ocidental.'
    ],
    cronologia: [
      ['c. 470 a.C.', 'Nasce em Atenas.'],
      ['432–422 a.C.', 'Serve como hoplita em campanhas da Guerra do Peloponeso.'],
      ['399 a.C.', 'É julgado, condenado e executado com cicuta.']
    ],
    nota: 'Sócrates nada escreveu. O que se conhece vem de Platão, Xenofonte e Aristófanes, cujos relatos divergem entre si.'
  },

  'Clarice Lispector': {
    papel: 'Escritora brasileira nascida na Ucrânia (1920–1977)',
    resumo: 'Escreveu uma prosa que abandona o enredo em favor do instante de percepção, e reinventou o romance brasileiro.',
    bio: [
      'Chaya Pinkhasovna Lispector nasceu em Chechelnyk, na Ucrânia, em 10 de dezembro de 1920, durante a fuga da família dos pogroms que se seguiram à Primeira Guerra. A mãe fora violentada e contraíra sífilis; a família emigrou para o Brasil quando Clarice tinha pouco mais de um ano, estabelecendo-se primeiro no Recife e depois no Rio de Janeiro. A mãe morreu quando ela tinha nove anos.',
      'Formou-se em direito e trabalhou como jornalista. Publicou Perto do Coração Selvagem aos vinte e três anos, em 1943, e o livro causou impacto imediato: o crítico Antonio Candido observou que era a primeira vez que a ficção brasileira alcançava aquele tipo de densidade interior. Recebeu o prêmio Graça Aranha.',
      'Casou-se com um diplomata e passou quinze anos fora do Brasil, entre Nápoles, Berna e Washington, período de isolamento em que escreveu boa parte de sua obra. Separou-se e voltou ao Rio em 1959, sustentando os dois filhos com colaborações em jornais, entrevistas e traduções. Em 1966 adormeceu com um cigarro aceso e sofreu queimaduras graves na mão direita.',
      'Sua prosa não se organiza por enredo, e sim pelo instante em que a percepção comum se rompe. A Paixão Segundo G.H. (1964) constrói um romance inteiro a partir do encontro de uma mulher com uma barata num quarto de empregada. A Hora da Estrela (1977), publicado semanas antes de sua morte, narra a vida de Macabéa, datilógrafa nordestina pobre no Rio, através de um narrador masculino que se interroga sobre o direito de contá-la. Morreu no Rio em 9 de dezembro de 1977, véspera de seu aniversário de 57 anos.'
    ],
    contexto:
      'Clarice escreve num Brasil cuja literatura vinha do romance social dos anos 1930, centrado na seca, na terra e na denúncia. Sua obra desloca o eixo para dentro, sem abandonar a questão social — A Hora da Estrela é justamente sobre a impossibilidade de contar a vida de uma pobre a partir de fora. Essa combinação a torna uma das autoras mais estudadas e traduzidas da língua portuguesa.',
    contribuicoes: [
      'Escreveu Perto do Coração Selvagem, A Paixão Segundo G.H., Água Viva e A Hora da Estrela.',
      'Introduziu no romance brasileiro a narrativa organizada pelo instante de percepção e não pelo enredo.',
      'Escreveu contos reunidos em Laços de Família e Felicidade Clandestina.',
      'Escreveu literatura infantil, entre ela O Mistério do Coelho Pensante.',
      'É uma das autoras brasileiras mais traduzidas e estudadas no exterior.'
    ],
    cronologia: [
      [1920, 'Nasce em Chechelnyk, na Ucrânia, em 10 de dezembro.'],
      [1922, 'A família emigra para o Brasil.'],
      [1943, 'Publica Perto do Coração Selvagem.'],
      [1944, 'Deixa o Brasil como esposa de diplomata.'],
      [1959, 'Retorna definitivamente ao Rio de Janeiro.'],
      [1964, 'Publica A Paixão Segundo G.H.'],
      [1977, 'Publica A Hora da Estrela e morre no Rio de Janeiro.']
    ]
  },

  Voltaire: {
    papel: 'Escritor e filósofo francês (1694–1778)',
    resumo: 'A voz mais afiada do Iluminismo francês, usou a ironia como arma contra a intolerância religiosa e o arbítrio judicial.',
    bio: [
      'François-Marie Arouet nasceu em Paris em 21 de novembro de 1694, filho de um tabelião. Adotou o pseudônimo Voltaire aos vinte e quatro anos. Foi preso na Bastilha por versos satíricos contra o regente e, anos depois, espancado por capangas de um nobre que ofendera — episódio que expôs a impunidade da aristocracia e o levou ao exílio na Inglaterra.',
      'Os três anos ingleses foram decisivos. Voltou impressionado com a monarquia constitucional, a tolerância religiosa relativa, a liberdade de imprensa e a ciência de Newton. As Cartas Filosóficas, de 1734, comparam a Inglaterra à França em desfavor desta e foram queimadas por ordem judicial. Passou anos em Cirey com a marquesa Émilie du Châtelet, matemática e física que traduziu os Principia de Newton e com quem estudou ciência.',
      'Cândido, de 1759, é seu texto mais lido. O conto satiriza o otimismo filosófico segundo o qual vivemos no melhor dos mundos possíveis, submetendo o protagonista a uma sucessão de catástrofes — entre elas o terremoto de Lisboa de 1755, que abalou a fé europeia na providência. A conclusão, de que é preciso cultivar o próprio jardim, é uma recusa da especulação em favor da ação concreta.',
      'Instalado em Ferney, na fronteira suíça, tornou-se figura de projeção europeia e dedicou os últimos vinte anos à defesa de vítimas de injustiça judicial. O caso Jean Calas, protestante executado por um crime que não cometeu, mobilizou-o por três anos até obter a reabilitação póstuma. Escreveu o Tratado sobre a Tolerância e o Dicionário Filosófico. Morreu em Paris em 30 de maio de 1778, pouco depois de retornar em triunfo à cidade.'
    ],
    contexto:
      'Voltaire escreve na França do absolutismo e da Igreja como poder de Estado, com censura prévia, prisão arbitrária e execuções por blasfêmia. Sua estratégia foi o riso: fazer o leitor rir de uma instituição é mais eficaz do que argumentar contra ela, e mais difícil de censurar. A frase sobre defender até a morte o direito de o adversário falar não é dele, mas de sua biógrafa Evelyn Beatrice Hall, que a criou como síntese de sua atitude.',
    contribuicoes: [
      'Escreveu Cândido (1759), um dos contos filosóficos mais lidos da literatura.',
      'Escreveu o Tratado sobre a Tolerância (1763), a partir do caso Jean Calas.',
      'Escreveu as Cartas Filosóficas, que introduziram na França o pensamento inglês e Newton.',
      'Atuou diretamente na reabilitação de vítimas de erro judiciário.',
      'Foi figura central da difusão do Iluminismo em toda a Europa.'
    ],
    cronologia: [
      [1694, 'Nasce em Paris, em 21 de novembro.'],
      [1717, 'É preso na Bastilha.'],
      [1726, 'Exila-se na Inglaterra por três anos.'],
      [1734, 'Publica as Cartas Filosóficas, condenadas à fogueira.'],
      [1759, 'Publica Cândido.'],
      [1763, 'Publica o Tratado sobre a Tolerância.'],
      [1778, 'Morre em Paris.']
    ],
    nota: 'A frase sobre defender até a morte o direito de alguém dizer o que pensa foi escrita por sua biógrafa Evelyn Beatrice Hall em 1906, como síntese da atitude de Voltaire. Não aparece em nenhuma obra dele.'
  },

  'Liev Tolstói': {
    papel: 'Escritor russo (1828–1910)',
    resumo: 'Escreveu dois dos maiores romances da história e depois renunciou à literatura em favor de um cristianismo radical.',
    bio: [
      'Liev Nikoláievitch Tolstói nasceu em Iásnaia Poliana, propriedade da família a duzentos quilômetros de Moscou, em 9 de setembro de 1828. Ficou órfão cedo e foi criado por parentes. Abandonou a universidade sem concluir o curso, levou uma juventude de jogo e dívidas e alistou-se no exército, servindo no Cáucaso e no cerco de Sebastopol durante a Guerra da Crimeia — experiência que o marcou e sobre a qual escreveu seus primeiros textos reconhecidos.',
      'Guerra e Paz, publicado entre 1865 e 1869, acompanha cinco famílias aristocráticas russas durante as invasões napoleônicas, entrelaçando centenas de personagens com ensaios sobre a natureza da história. Sua tese é que grandes homens não movem os acontecimentos: são movidos por eles. Anna Kariénina, de 1877, narra o adultério e a destruição de uma mulher da alta sociedade em paralelo à busca de sentido de um proprietário rural, personagem em grande parte autobiográfico.',
      'A crise que se seguiu está registrada em Uma Confissão. Aos cinquenta anos, no auge da fama e da fortuna, Tolstói deparou-se com a pergunta sobre o sentido da vida diante da morte e não encontrou resposta na ciência nem na Igreja. Formulou um cristianismo próprio, centrado no Sermão da Montanha, na não resistência ao mal pela violência, na recusa do Estado, da propriedade e da guerra. Foi excomungado pela Igreja Ortodoxa em 1901.',
      'Passou a vestir roupa de camponês, trabalhar no campo e tentar abrir mão de seus bens, o que gerou conflito permanente com a esposa Sófia. Sua doutrina influenciou diretamente Gandhi, com quem se correspondeu. Aos 82 anos fugiu de casa numa noite de inverno e morreu poucos dias depois na estação ferroviária de Astápovo, em 20 de novembro de 1910, cercado pela imprensa mundial.'
    ],
    contexto: 'Tolstói escreve na Rússia do fim da servidão, de aristocracia rural em decadência e de repressão política. Sua obra registra essa sociedade em detalhe e depois a julga: a virada religiosa não é ruptura com os romances, e sim a radicalização de uma inquietação moral que já os atravessava.',
    contribuicoes: [
      'Escreveu Guerra e Paz (1869) e Anna Kariénina (1877).',
      'Formulou em Guerra e Paz uma teoria da história que nega o papel determinante dos grandes homens.',
      'Escreveu A Morte de Ivan Ilitch e Uma Confissão.',
      'Desenvolveu a doutrina da não resistência ao mal pela violência, que influenciou diretamente Gandhi.',
      'Fundou uma escola para filhos de camponeses em sua propriedade, com pedagogia experimental.'
    ],
    cronologia: [
      [1828, 'Nasce em Iásnaia Poliana, em 9 de setembro.'],
      [1855, 'Serve no cerco de Sebastopol.'],
      [1869, 'Conclui Guerra e Paz.'],
      [1877, 'Conclui Anna Kariénina.'],
      [1882, 'Escreve Uma Confissão, registro de sua crise espiritual.'],
      [1901, 'É excomungado pela Igreja Ortodoxa Russa.'],
      [1910, 'Foge de casa e morre na estação de Astápovo.']
    ]
  },

  'Daniel Kahneman': {
    papel: 'Psicólogo israelense-americano (1934–2024)',
    resumo: 'Ganhou o Nobel de Economia sem nunca ter feito um curso de economia, por mostrar como as pessoas realmente decidem.',
    bio: [
      'Daniel Kahneman nasceu em Tel Aviv em 5 de março de 1934, durante uma visita da mãe à família, e cresceu em Paris. Viveu a ocupação nazista escondido; o pai morreu em 1944 por falta de tratamento. A família emigrou para a Palestina em 1948. Kahneman contava que sua vocação nasceu de observar, ainda criança, a complexidade do comportamento humano numa situação em que ele determinava a sobrevivência.',
      'Formou-se em psicologia na Universidade Hebraica e doutorou-se em Berkeley. Prestou serviço militar avaliando candidatos a oficial, experiência em que percebeu que avaliadores mantinham confiança alta em julgamentos que os resultados desmentiam — fenômeno que chamaria depois de ilusão de validade.',
      'Em 1969 iniciou com Amos Tversky a colaboração que definiria a carreira de ambos. Os trabalhos sobre heurísticas e vieses, de 1974, e a Teoria do Prospecto, de 1979, demonstraram que as pessoas não avaliam probabilidades nem maximizam utilidade: usam atalhos previsíveis, julgam ganhos e perdas em relação a um ponto de referência e sentem perdas com mais intensidade do que ganhos equivalentes.',
      'Recebeu o Nobel de Economia em 2002 e afirmou publicamente que o prêmio pertencia igualmente a Tversky, morto em 1996. Rápido e Devagar, de 2011, apresentou ao grande público a distinção entre um Sistema 1 rápido, automático e intuitivo, e um Sistema 2 lento, deliberado e custoso. Escreveu depois Ruído, sobre a variabilidade indesejada em julgamentos profissionais. Reconheceu publicamente que parte dos estudos de priming que citara não resistiu a replicação. Morreu em 27 de março de 2024, aos 90 anos.'
    ],
    contexto: 'Kahneman e Tversky trabalharam contra o consenso que tratava o ser humano como maximizador racional. Ao demonstrar que os desvios são regulares e mapeáveis, fundaram a economia comportamental e alteraram a forma como políticas públicas, medicina, direito e finanças pensam a tomada de decisão.',
    contribuicoes: ['Formulou com Amos Tversky o programa de pesquisa sobre heurísticas e vieses.', 'Criou com Tversky a Teoria do Prospecto, fundamento da economia comportamental.', 'Recebeu o Prêmio Nobel de Economia em 2002.', 'Escreveu Rápido e Devagar (2011), com a distinção entre Sistema 1 e Sistema 2.', 'Escreveu Ruído (2021), sobre variabilidade indesejada em julgamentos profissionais.'],
    cronologia: [
      [1934, 'Nasce em Tel Aviv, em 5 de março.'],
      [1969, 'Inicia a colaboração com Amos Tversky.'],
      [1974, 'Publicam Julgamento sob Incerteza.'],
      [1979, 'Publicam a Teoria do Prospecto.'],
      [2002, 'Recebe o Prêmio Nobel de Economia.'],
      [2011, 'Publica Rápido e Devagar.'],
      [2024, 'Morre aos 90 anos.']
    ]
  },

  'John Locke': {
    papel: 'Filósofo inglês (1632–1704)',
    resumo: 'Fundou o empirismo moderno e formulou os direitos naturais e o direito de resistência que inspirariam duas revoluções.',
    bio: [
      'John Locke nasceu em Wrington, no sudoeste da Inglaterra, em 29 de agosto de 1632, filho de um advogado que lutou pelo Parlamento na Guerra Civil Inglesa. Estudou em Oxford, formou-se em medicina e interessou-se por ciência experimental, tornando-se membro da Royal Society e amigo de Robert Boyle e Isaac Newton.',
      'Tornou-se médico e conselheiro do conde de Shaftesbury, líder da oposição parlamentar. A associação o envolveu na política mais perigosa de seu tempo: com a repressão que se seguiu a conspirações contra o rei, exilou-se na Holanda em 1683 e só voltou em 1689, após a Revolução Gloriosa. Foi ali que preparou suas obras principais.',
      'O Ensaio sobre o Entendimento Humano, de 1689, é o texto fundador do empirismo moderno. Locke nega a existência de ideias inatas e sustenta que a mente começa como folha em branco, preenchida por sensação e reflexão. Todo conhecimento tem origem na experiência, e nossos limites cognitivos devem tornar-nos modestos e tolerantes com quem discorda.',
      'Os Dois Tratados sobre o Governo Civil, do mesmo ano, fundam a teoria liberal do Estado. Locke sustenta que os homens têm no estado de natureza direitos à vida, à liberdade e à propriedade, que o governo existe apenas por consentimento e para proteger esses direitos, e que quando os viola sistematicamente o povo tem direito de resistir e substituí-lo. A Carta sobre a Tolerância defende a separação entre Igreja e Estado. Sua influência sobre a Declaração de Independência americana é direta. Morreu em Essex em 28 de outubro de 1704. Foi investidor e administrador colonial ligado ao comércio escravista, contradição documentada com sua doutrina de direitos naturais.'
    ],
    contexto: 'Locke escreve durante e depois de meio século de guerra civil, execução de um rei, restauração e nova deposição na Inglaterra. Sua obra é a tentativa de fundamentar um governo legítimo que não dependa de direito divino, e a Revolução Gloriosa de 1688 forneceu o modelo prático que ele justificou teoricamente.',
    contribuicoes: [
      'Escreveu o Ensaio sobre o Entendimento Humano, obra fundadora do empirismo moderno.',
      'Escreveu os Dois Tratados sobre o Governo Civil, base da teoria liberal do Estado.',
      'Formulou a doutrina dos direitos naturais à vida, à liberdade e à propriedade.',
      'Formulou o direito de resistência contra governos que violem o pacto.',
      'Defendeu a tolerância religiosa e a separação entre Igreja e Estado.'
    ],
    cronologia: [
      [1632, 'Nasce em Wrington, em 29 de agosto.'],
      [1667, 'Torna-se médico e conselheiro do conde de Shaftesbury.'],
      [1683, 'Exila-se na Holanda.'],
      [1689, 'Publica o Ensaio, os Dois Tratados e a Carta sobre a Tolerância.'],
      [1704, 'Morre em Essex.']
    ],
    nota: 'Locke teve investimentos e funções administrativas ligadas ao comércio escravista, fato documentado e em tensão com sua doutrina de direitos naturais.'
  },

  'Henry Ford': {
    papel: 'Industrial norte-americano (1863–1947)',
    resumo: 'Levou o automóvel ao alcance do trabalhador comum com a linha de montagem móvel — e deixou também um legado antissemita documentado.',
    bio: [
      'Henry Ford nasceu numa fazenda em Greenfield Township, Michigan, em 30 de julho de 1863. Detestava o trabalho agrícola e tinha talento mecânico precoce; consertava relógios da vizinhança na adolescência. Trabalhou como maquinista e depois como engenheiro-chefe na Edison Illuminating Company, em Detroit, onde construiu seu primeiro veículo nas horas vagas.',
      'Fundou a Ford Motor Company em 1903, após dois empreendimentos fracassados. O Modelo T, lançado em 1908, foi concebido como carro simples, resistente e barato o suficiente para o trabalhador comum. Em 1913, Ford instalou a primeira linha de montagem móvel em Highland Park, reduzindo o tempo de fabricação de um chassi de mais de doze horas para cerca de uma hora e meia. O preço do Modelo T caiu ano após ano, e mais de quinze milhões foram vendidos.',
      'Em 1914 dobrou o salário diário para cinco dólares e reduziu a jornada. A medida foi decisão econômica antes de filantrópica: a rotatividade na linha de montagem era insustentável, e trabalhadores mais bem pagos podiam comprar o produto que fabricavam. A empresa mantinha, no entanto, um departamento que fiscalizava a vida privada dos funcionários, e Ford combateu duramente a sindicalização.',
      'Comprou em 1918 o jornal Dearborn Independent e publicou por anos uma série de artigos antissemitas, depois reunidos em volume e traduzidos na Alemanha, onde foram elogiados por Hitler. Recebeu em 1938 a mais alta condecoração alemã concedida a estrangeiros. Ford emitiu uma retratação pública em 1927, cuja sinceridade é contestada por historiadores. Morreu em Dearborn em 7 de abril de 1947.'
    ],
    contexto: 'Ford é o nome associado à produção em massa e ao consumo em massa como sistema integrado, arranjo que passou a ser chamado de fordismo e definiu a economia industrial do século XX. Sua biografia é inseparável de duas coisas simultâneas: a transformação material da vida de milhões de pessoas e uma campanha antissemita de alcance internacional.',
    contribuicoes: ['Introduziu a linha de montagem móvel na produção automobilística, em 1913.', 'Lançou o Modelo T, primeiro automóvel acessível à classe trabalhadora.', 'Instituiu em 1914 o salário de cinco dólares por dia e a redução de jornada.', 'Estabeleceu o modelo de produção e consumo em massa que ficou conhecido como fordismo.'],
    cronologia: [
      [1863, 'Nasce em Michigan, em 30 de julho.'],
      [1903, 'Funda a Ford Motor Company.'],
      [1908, 'Lança o Modelo T.'],
      [1913, 'Instala a linha de montagem móvel em Highland Park.'],
      [1914, 'Institui o salário de cinco dólares por dia.'],
      [1920, 'Inicia a publicação da série antissemita no Dearborn Independent.'],
      [1947, 'Morre em Dearborn.']
    ],
    nota: 'Ford publicou e financiou material antissemita de circulação internacional e foi condecorado pela Alemanha nazista em 1938. É parte incontornável de seu registro histórico.'
  },

  'Peter Lynch': {
    papel: 'Gestor de investimentos norte-americano (1944–)',
    resumo: 'Obteve na gestão do fundo Magellan um dos melhores desempenhos de longo prazo já registrados e defendeu que o investidor comum tem vantagens sobre Wall Street.',
    bio: [
      'Peter Lynch nasceu em Newton, Massachusetts, em 19 de janeiro de 1944. O pai morreu quando ele tinha dez anos, e a família passou por dificuldades. Trabalhou como caddie num clube de golfe frequentado por executivos e ouvia as conversas sobre ações enquanto carregava tacos — segundo seu relato, foi ali que sua curiosidade pelo mercado começou.',
      'Formou-se em Boston College com uma bolsa financiada por um sócio da Fidelity que conhecera no clube, fez MBA em Wharton e serviu no exército. Entrou na Fidelity como analista em 1966 e assumiu em 1977 o fundo Magellan, então pequeno e pouco conhecido.',
      'Geriu o fundo por treze anos, até 1990, com retorno anual médio em torno de vinte e nove por cento, resultado que praticamente dobrava o índice de referência no período. O patrimônio sob gestão passou de cerca de dezoito milhões para mais de catorze bilhões de dólares.',
      'Seu método era intensamente empírico: visitava centenas de empresas por ano, conversava com gerentes e clientes, e defendia que o investidor comum tem uma vantagem sobre os profissionais — reconhece antes deles os produtos e serviços que estão dando certo no próprio cotidiano. Formulou a orientação de investir no que se conhece e a advertência contra comprar sem entender o negócio. Aposentou-se aos quarenta e seis anos para dedicar-se à família e à filantropia, e escreveu O Jeito Peter Lynch de Investir e Batendo a Wall Street.'
    ],
    contexto: 'Lynch atuou no período em que a gestão ativa de fundos vivia seu auge de prestígio, antes da consolidação dos fundos de índice. Seu desempenho é frequentemente citado dos dois lados do debate: como prova de que é possível superar o mercado e como exemplo raro o bastante para reforçar o argumento contrário.',
    contribuicoes: ['Geriu o fundo Magellan entre 1977 e 1990 com um dos melhores desempenhos de longo prazo registrados.', 'Formulou o princípio de investir no que se conhece pela experiência cotidiana.', 'Escreveu O Jeito Peter Lynch de Investir e Batendo a Wall Street.', 'Popularizou a análise fundamentalista aplicada por investidores individuais.'],
    cronologia: [
      [1944, 'Nasce em Newton, Massachusetts, em 19 de janeiro.'],
      [1966, 'Entra na Fidelity como analista.'],
      [1977, 'Assume a gestão do fundo Magellan.'],
      [1989, 'Publica O Jeito Peter Lynch de Investir.'],
      [1990, 'Aposenta-se da gestão do fundo.']
    ]
  },

  'Gustave Flaubert': {
    papel: 'Escritor francês (1821–1880)',
    resumo: 'Levou a busca pela frase exata ao extremo e escreveu Madame Bovary, marco do realismo literário.',
    bio: [
      'Gustave Flaubert nasceu em Rouen, na Normandia, em 12 de dezembro de 1821, filho do cirurgião-chefe do hospital da cidade; cresceu num apartamento anexo à enfermaria. Estudou direito em Paris sem vocação e, aos vinte e dois anos, teve a primeira de uma série de crises que hoje se supõe epilépticas, o que encerrou qualquer carreira convencional e o devolveu à casa da família em Croisset, onde viveria escrevendo.',
      'Trabalhava com lentidão extrema, revisando cada frase em voz alta para testar o ritmo — prática que chamava de prova do gueuloir. Madame Bovary levou quase cinco anos. Publicado em folhetim em 1856, o romance narra a vida de Emma Bovary, esposa de um médico de província que busca nos adultérios e no consumo a intensidade que os romances românticos lhe prometeram.',
      'O livro foi processado por ofensa à moral pública em 1857. Flaubert foi absolvido, e o escândalo garantiu enorme circulação. A inovação técnica é decisiva: a narração se instala dentro da personagem sem que o autor emita juízo, e o estilo indireto livre atinge nele sua forma mais consequente. Flaubert insistia que o autor devia estar na obra como Deus no universo — presente em toda parte e visível em lugar nenhum.',
      'Escreveu ainda Salammbô, A Educação Sentimental, Três Contos e o inacabado Bouvard e Pécuchet. Foi mentor de Guy de Maupassant e correspondente prolífico; suas cartas são consideradas parte essencial da obra. Morreu em Croisset em 8 de maio de 1880.'
    ],
    contexto: 'Flaubert é a articulação entre o romantismo, que ele conheceu e do qual desconfiava, e o realismo, que ajudou a fundar sem nunca aceitar o rótulo. Sua obsessão pela precisão formal transformou o romance de gênero popular em objeto de trabalho artístico deliberado, e definiu a figura moderna do escritor como artesão da linguagem.',
    contribuicoes: ['Escreveu Madame Bovary (1857), marco do realismo no romance europeu.', 'Levou o estilo indireto livre à sua forma mais consequente.', 'Formulou o princípio da impessoalidade do narrador.', 'Escreveu A Educação Sentimental, Salammbô e Três Contos.', 'Sua correspondência é considerada uma das mais importantes da literatura francesa.'],
    cronologia: [
      [1821, 'Nasce em Rouen, em 12 de dezembro.'],
      [1844, 'Sofre a primeira crise que encerra sua carreira jurídica.'],
      [1856, 'Publica Madame Bovary em folhetim.'],
      [1857, 'É processado e absolvido por ofensa à moral pública.'],
      [1869, 'Publica A Educação Sentimental.'],
      [1877, 'Publica Três Contos.'],
      [1880, 'Morre em Croisset.']
    ]
  },

  Esopo: {
    papel: 'Fabulista grego (séc. VI a.C.)',
    resumo: 'Figura semilendária a quem se atribui o corpus de fábulas que fundou a tradição do gênero no Ocidente.',
    bio: [
      'As informações sobre Esopo são escassas e em grande parte lendárias. Heródoto, no século V a.C., refere-se a ele como pessoa escravizada em Samos, contemporânea do rei Amásis do Egito, morta pelos habitantes de Delfos. Tradições posteriores acrescentaram detalhes contraditórios sobre sua origem — Trácia, Frígia, Etiópia — e sobre uma aparência física disforme.',
      'Provavelmente não escreveu nada. As fábulas circulavam oralmente e foram atribuídas coletivamente a seu nome, num processo comum na Antiguidade, em que um corpus anônimo ganha um autor emblemático. As primeiras coletâneas escritas datam de séculos depois: Demétrio de Faleros compilou uma no século IV a.C., hoje perdida, e as versões que chegaram até nós vêm sobretudo de Fedro, em latim, e Babrio, em grego, ambos da era imperial romana.',
      'A fábula esópica é breve, protagonizada por animais que agem segundo caracteres humanos fixos — a raposa astuta, o lobo violento, a formiga previdente — e termina com uma lição moral explícita. A brevidade e a clareza tornaram o gênero instrumento de ensino desde a Antiguidade, e é isso que garantiu sua sobrevivência.',
      'A Raposa e as Uvas, A Lebre e a Tartaruga, A Cigarra e a Formiga, O Menino que Gritava Lobo e O Lobo em Pele de Cordeiro entraram no repertório proverbial de praticamente todas as línguas europeias. La Fontaine, no século XVII, reescreveu boa parte do corpus em verso francês e é por essa via que muitas das fábulas circulam hoje.'
    ],
    contexto: 'A fábula pertence a uma tradição de sabedoria popular que a Grécia compartilha com o Oriente Próximo e a Índia — há paralelos evidentes com o Panchatantra. Sua função social é reconhecível: dizer verdades incômodas sobre poder e comportamento de forma indireta, colocando-as na boca de animais, recurso especialmente útil para quem não pode falar diretamente.',
    contribuicoes: ['A ele se atribui o corpus de fábulas que fundou o gênero na tradição ocidental.', 'Fixou a fábula breve protagonizada por animais com moral explícita.', 'Suas narrativas entraram no repertório proverbial de praticamente todas as línguas europeias.', 'Serviu de base para La Fontaine, Fedro, Babrio e para a literatura infantil moderna.'],
    cronologia: [
      ['séc. VI a.C.', 'Período tradicionalmente atribuído à sua vida.'],
      ['séc. V a.C.', 'Heródoto o menciona como pessoa escravizada em Samos.'],
      ['séc. IV a.C.', 'Demétrio de Faleros compila a primeira coletânea conhecida, hoje perdida.'],
      ['séc. I d.C.', 'Fedro e Babrio fixam versões que chegaram até nós.']
    ],
    nota: 'Esopo é figura semilendária e provavelmente não escreveu nada. As fábulas resultam de tradição oral coletiva atribuída a seu nome.'
  },

  Hipócrates: {
    papel: 'Médico grego (c. 460 a.C.–c. 370 a.C.)',
    resumo: 'Separou a medicina da religião e da magia, e é lembrado pelo juramento que leva seu nome.',
    bio: [
      'Hipócrates nasceu na ilha de Cós, no mar Egeu, por volta de 460 a.C., em família de médicos. As informações biográficas seguras são poucas; Platão o menciona duas vezes como médico de reputação estabelecida, o que confirma sua existência histórica e sua fama já em vida.',
      'Seu nome está associado ao Corpus Hippocraticum, conjunto de cerca de sessenta tratados reunidos na biblioteca de Alexandria. A pesquisa moderna estabeleceu que a coleção é obra de vários autores, escrita ao longo de mais de um século, com estilos e doutrinas por vezes incompatíveis entre si. Determinar o que Hipócrates efetivamente escreveu é considerado impossível.',
      'A ruptura que o corpus representa, no entanto, é clara. O tratado sobre a doença sagrada — a epilepsia — afirma que ela não é mais divina nem mais sagrada do que qualquer outra enfermidade, e que tem causa natural como todas as demais. Essa recusa da explicação sobrenatural funda a medicina como investigação racional. Os tratados insistem na observação atenta do paciente, no registro da evolução dos sintomas e no prognóstico, e na atenção a dieta, ambiente, ar e água.',
      'O Juramento, o texto mais conhecido do corpus, estabelece obrigações éticas do médico: agir em benefício do doente, abster-se de causar dano, guardar segredo sobre o que vê e ouve. Sua autoria e datação são incertas, e várias de suas cláusulas originais não correspondem à prática médica contemporânea — as versões usadas hoje em formaturas são adaptações modernas. Hipócrates morreu em Lárissa por volta de 370 a.C.'
    ],
    contexto: 'Hipócrates atua no mesmo momento em que a filosofia grega buscava princípios naturais para explicar o mundo. A medicina hipocrática é o correspondente clínico desse movimento: retirar a doença do domínio dos deuses e devolvê-la ao domínio da observação, mesmo quando as explicações propostas — como a teoria dos humores — estavam erradas.',
    contribuicoes: ['Está associado ao Corpus Hippocraticum, que separa a medicina da explicação religiosa.', 'Estabeleceu a observação clínica sistemática e o prognóstico como métodos médicos.', 'Formulou a atenção ao ambiente, à dieta e ao modo de vida na causação das doenças.', 'Dá nome ao Juramento, base histórica da ética médica ocidental.'],
    cronologia: [
      ['c. 460 a.C.', 'Nasce na ilha de Cós.'],
      ['séc. V–IV a.C.', 'Período de composição dos tratados reunidos no Corpus Hippocraticum.'],
      ['c. 370 a.C.', 'Morre em Lárissa.']
    ],
    nota: 'O Corpus Hippocraticum é obra de vários autores ao longo de mais de um século. Não é possível determinar o que Hipócrates escreveu pessoalmente, e a autoria do Juramento é incerta.'
  },

  'Albert Schweitzer': {
    papel: 'Médico, teólogo e músico alsaciano (1875–1965)',
    resumo: 'Abandonou três carreiras brilhantes na Europa para fundar um hospital na África Equatorial, e formulou a ética do respeito pela vida.',
    bio: [
      'Albert Schweitzer nasceu em Kaysersberg, na Alsácia, em 14 de janeiro de 1875, filho de um pastor luterano. Aos trinta anos era, simultaneamente, teólogo reconhecido, organista de renome europeu e autoridade em Bach — sua biografia do compositor e seu trabalho sobre construção de órgãos são referências até hoje. Em teologia, A Busca do Jesus Histórico (1906) reorientou os estudos bíblicos ao argumentar que o Jesus histórico era uma figura escatológica do século I, e não o moralista moderno que a pesquisa liberal havia projetado.',
      'Em 1905 anunciou que estudaria medicina para trabalhar na África, decisão que espantou amigos e colegas. Formou-se em 1913 e partiu com a esposa Helene, enfermeira, para Lambaréné, na atual República Gabonesa. Instalou o hospital num galinheiro adaptado e o financiou com concertos de órgão e conferências na Europa.',
      'Como alsacianos de nacionalidade alemã em território francês, o casal foi internado como inimigo durante a Primeira Guerra. De volta a Lambaréné, Schweitzer reconstruiu e ampliou o hospital, que chegou a centenas de leitos e a uma vila para pacientes de hanseníase.',
      'Formulou a ética do respeito pela vida, princípio segundo o qual sou vida que quer viver em meio a vida que quer viver, e que o bem consiste em preservar e promover a vida em todas as suas formas. Recebeu o Nobel da Paz de 1952 e usou os últimos anos para alertar contra os testes nucleares. Morreu em Lambaréné em 4 de setembro de 1965. Sua gestão do hospital, com estrutura sanitária rudimentar e uma relação paternalista com os pacientes africanos, foi criticada ainda em vida e continua sendo objeto de debate.'
    ],
    contexto: 'Schweitzer é figura de leitura dividida: exemplo extremo de renúncia pessoal a serviço de outros e, ao mesmo tempo, produto do paternalismo colonial europeu, que ele expressava explicitamente. Sua ética do respeito pela vida, no entanto, antecede e influencia a filosofia ambiental e a bioética contemporâneas.',
    contribuicoes: ['Fundou e dirigiu por cinco décadas o hospital de Lambaréné, na África Equatorial.', 'Formulou a ética do respeito pela vida.', 'Escreveu A Busca do Jesus Histórico (1906), que reorientou os estudos bíblicos.', 'Foi autoridade internacional em Bach e na construção de órgãos.', 'Recebeu o Prêmio Nobel da Paz em 1952 e militou contra os testes nucleares.'],
    cronologia: [
      [1875, 'Nasce em Kaysersberg, na Alsácia, em 14 de janeiro.'],
      [1906, 'Publica A Busca do Jesus Histórico.'],
      [1913, 'Funda o hospital de Lambaréné.'],
      [1923, 'Publica Filosofia da Civilização, com a ética do respeito pela vida.'],
      [1952, 'Recebe o Prêmio Nobel da Paz.'],
      [1965, 'Morre em Lambaréné.']
    ],
    nota: 'A gestão do hospital de Lambaréné e a relação paternalista de Schweitzer com os pacientes africanos foram criticadas ainda em vida e permanecem objeto de debate histórico.'
  },

  'T. S. Eliot': {
    papel: 'Poeta e crítico anglo-americano (1888–1965)',
    resumo: 'Escreveu A Terra Devastada, o poema que definiu a sensibilidade do modernismo em língua inglesa.',
    bio: [
      'Thomas Stearns Eliot nasceu em St. Louis, Missouri, em 26 de setembro de 1888, em família de origem puritana da Nova Inglaterra. Estudou em Harvard, na Sorbonne e em Oxford, e fixou-se em Londres em 1914, onde conheceu Ezra Pound, que reconheceu imediatamente seu talento e passou a promovê-lo.',
      'Trabalhou como professor e depois como funcionário do Lloyds Bank por oito anos, escrevendo à noite. Casou-se em 1915 com Vivienne Haigh-Wood, num casamento infeliz e marcado pela doença mental dela, que terminaria internada; a experiência atravessa boa parte de sua obra.',
      'A Canção de Amor de J. Alfred Prufrock, publicada em 1915, já rompia com a dicção poética herdada. A Terra Devastada, de 1922, é o marco. Poema de pouco mais de quatrocentos versos, feito de fragmentos, vozes, línguas e citações justapostas sem transição, retrata a Europa espiritualmente arrasada após a Primeira Guerra. Pound cortou drasticamente o manuscrito original, e Eliot lhe dedicou o poema chamando-o de o melhor artífice.',
      'Naturalizou-se britânico e converteu-se ao anglicanismo em 1927. A obra tardia é religiosa e mais serena: Quarta-Feira de Cinzas e sobretudo os Quatro Quartetos, concluídos durante a Segunda Guerra. Foi editor influente na Faber and Faber, publicando boa parte da poesia inglesa do século. Recebeu o Nobel de Literatura em 1948. Escreveu também peças e o livro de versos sobre gatos que originaria o musical Cats. Passagens antissemitas em textos das décadas de 1920 e 1930 são objeto de crítica documentada. Morreu em Londres em 4 de janeiro de 1965.'
    ],
    contexto: 'Eliot escreve na Europa do pós-guerra, quando a confiança do século XIX no progresso havia se desfeito nas trincheiras. Sua resposta formal — fragmentação, colagem, ausência de narrador unificador — é a que melhor traduz essa ruptura, e sua influência sobre a poesia em língua inglesa foi por décadas quase inescapável.',
    contribuicoes: [
      'Escreveu A Terra Devastada (1922), poema central do modernismo em língua inglesa.',
      'Escreveu Quatro Quartetos, considerado por muitos sua obra máxima.',
      'Formulou como crítico conceitos duradouros, entre eles o correlato objetivo e a tradição como sistema vivo.',
      'Foi editor na Faber and Faber, com papel decisivo na poesia inglesa do século XX.',
      'Recebeu o Prêmio Nobel de Literatura em 1948.'
    ],
    cronologia: [
      [1888, 'Nasce em St. Louis, em 26 de setembro.'],
      [1915, 'Publica Prufrock e fixa-se em Londres.'],
      [1922, 'Publica A Terra Devastada.'],
      [1927, 'Naturaliza-se britânico e converte-se ao anglicanismo.'],
      [1943, 'Publica os Quatro Quartetos reunidos.'],
      [1948, 'Recebe o Nobel de Literatura.'],
      [1965, 'Morre em Londres.']
    ],
    nota: 'Passagens antissemitas em textos de Eliot das décadas de 1920 e 1930 são objeto de crítica documentada.'
  },

  'Anaïs Nin': {
    papel: 'Escritora franco-cubana-americana (1903–1977)',
    resumo: 'Escreveu um diário de dezenas de volumes que se tornou obra literária e documento de uma vida deliberadamente sem convenção.',
    bio: [
      'Angela Anaïs Juana Antolina Rosa Edelmira Nin y Culmell nasceu em Neuilly-sur-Seine, na França, em 21 de fevereiro de 1903, filha do compositor cubano Joaquín Nin e da cantora Rosa Culmell. O pai abandonou a família quando ela tinha onze anos, e foi como carta a ele — nunca enviada — que começou o diário que manteria por mais de sessenta anos.',
      'A família emigrou para Nova York. Nin voltou a Paris na juventude e conviveu no ambiente literário dos anos 1930 com Henry Miller e June Miller, Antonin Artaud e Lawrence Durrell. Estudou psicanálise com Otto Rank e chegou a atender pacientes. Financiou a publicação de obras de Miller e imprimiu ela própria seus primeiros livros numa prensa manual.',
      'Publicou romances, contos e ensaios, mas foi o Diário, cujo primeiro volume saiu em 1966, que lhe trouxe reconhecimento. A obra combina autoanálise, retrato de época e construção deliberada de si — Nin editava e reescrevia as entradas, e as versões expurgadas publicadas em vida omitiam o casamento e as relações que as edições póstumas, sem cortes, revelariam.',
      'Escreveu também Delta de Vênus e Pequenos Pássaros, coletâneas eróticas produzidas nos anos 1940 por encomenda de um colecionador anônimo, e publicadas apenas após sua morte. Tornou-se referência para o movimento feminista dos anos 1970 pela reivindicação da experiência subjetiva feminina como matéria literária legítima. Morreu em Los Angeles em 14 de janeiro de 1977.'
    ],
    contexto: 'Nin escreve numa época em que o diário era considerado gênero menor e a escrita erótica de autoria feminina praticamente não existia como literatura publicável. Sua obra reivindicou os dois territórios, e sua recepção continua dividida entre quem a lê como pioneira da subjetividade feminina e quem aponta o narcisismo e a manipulação do próprio material.',
    contribuicoes: ['Escreveu o Diário, publicado em múltiplos volumes a partir de 1966.', 'Elevou o diário íntimo à condição de obra literária.', 'Escreveu Delta de Vênus e Pequenos Pássaros, marcos da literatura erótica de autoria feminina.', 'Tornou-se referência para o feminismo dos anos 1970 pela reivindicação da subjetividade como matéria literária.'],
    cronologia: [
      [1903, 'Nasce em Neuilly-sur-Seine, em 21 de fevereiro.'],
      [1914, 'Começa o diário como carta ao pai ausente.'],
      [1932, 'Publica um estudo sobre D. H. Lawrence e conhece Henry Miller.'],
      [1966, 'Publica o primeiro volume do Diário.'],
      [1977, 'Morre em Los Angeles.'],
      [1977, 'Delta de Vênus é publicado postumamente.']
    ]
  },

  'Jean de La Fontaine': {
    papel: 'Poeta francês (1621–1695)',
    resumo: 'Reescreveu em verso as fábulas antigas e criou uma das obras mais lidas da língua francesa.',
    bio: [
      'Jean de La Fontaine nasceu em Château-Thierry, na Champanhe, em 8 de julho de 1621, filho de um administrador de águas e florestas, cargo que herdaria sem nunca exercer com empenho. Estudou direito, tentou brevemente a vida religiosa e passou a viver de proteção de mecenas — condição que marcou toda a sua carreira.',
      'Seu primeiro protetor foi Nicolas Fouquet, superintendente de finanças de Luís XIV. Quando Fouquet caiu em desgraça e foi preso em 1661, La Fontaine escreveu em sua defesa, gesto arriscado que lhe custou a hostilidade duradoura do rei. Passou a depender de outras protetoras, entre elas a duquesa de Bouillon e Madame de La Sablière, em cuja casa viveu vinte anos.',
      'As Fábulas começaram a sair em 1668 e foram publicadas em doze livros até 1694. La Fontaine retomou o material de Esopo, Fedro e também de fontes indianas e persas, e o transformou em poesia: verso livre em metros variados, ritmo ágil, diálogo vivo e um narrador irônico que raramente entrega a moral de forma simples.',
      'A dedicatória ao delfim apresenta as fábulas como leitura infantil, mas a obra funciona em dois níveis. Sob os animais estão a corte de Luís XIV, a arbitrariedade do poder, a hipocrisia dos poderosos e a resignação dos fracos — crítica que a forma da fábula tornava dizível. Escreveu também os Contos, de tom licencioso, que lhe renderam censura. Entrou na Academia Francesa em 1684, com resistência do rei. Morreu em Paris em 13 de abril de 1695.'
    ],
    contexto: 'La Fontaine escreve na corte de Luís XIV, sob um poder absoluto que não admitia crítica direta. A fábula oferecia exatamente o que ele precisava: uma forma antiga, respeitável e aparentemente inofensiva, capaz de dizer sobre leões e lobos aquilo que não se podia dizer sobre reis e ministros.',
    contribuicoes: ['Escreveu as Fábulas, em doze livros, uma das obras mais lidas da literatura francesa.', 'Transformou a fábula esópica em poesia de alta elaboração formal.', 'Incorporou ao repertório europeu fontes indianas e persas além das greco-latinas.', 'Suas versões fixaram a forma pela qual muitas fábulas circulam até hoje.'],
    cronologia: [
      [1621, 'Nasce em Château-Thierry, em 8 de julho.'],
      [1661, 'Escreve em defesa de Fouquet, preso por ordem do rei.'],
      [1668, 'Publica os seis primeiros livros das Fábulas.'],
      [1684, 'É eleito para a Academia Francesa.'],
      [1694, 'Publica o último livro das Fábulas.'],
      [1695, 'Morre em Paris.']
    ]
  },

  Horácio: {
    papel: 'Poeta romano (65 a.C.–8 a.C.)',
    resumo: 'Fixou na poesia latina a fórmula do aproveitar o dia e escreveu a arte poética que orientou a literatura europeia por séculos.',
    bio: [
      'Quinto Horácio Flaco nasceu em Venúsia, no sul da Itália, em 8 de dezembro de 65 a.C. O pai era um liberto — pessoa que fora escravizada e obtivera a alforria — e trabalhava como cobrador de leilões. Investiu tudo na educação do filho, levando-o a Roma para estudar com os melhores mestres e depois a Atenas, para filosofia. Horácio menciona essa origem com orgueil e sem disfarce ao longo da obra.',
      'Em Atenas, aderiu ao exército de Brutus após o assassinato de César e combateu em Filipos, em 42 a.C., do lado derrotado. Voltou a Roma com os bens confiscados e trabalhou como escriturário do tesouro. Foi apresentado por Virgílio a Mecenas, conselheiro de Augusto e patrono de artistas, que se tornou seu protetor e lhe deu uma propriedade rural na Sabina — a segurança material que permitiu sua obra.',
      'Escreveu Sátiras, Epodos, Odes, Epístolas e a Arte Poética. As Odes são sua obra maior: adaptou ao latim os metros líricos gregos com precisão técnica extraordinária e tratou de amizade, moderação, passagem do tempo e morte. Dele vêm duas expressões que atravessaram dois mil anos — carpe diem, colhe o dia, e aurea mediocritas, o meio-termo dourado —, ambas frequentemente citadas em sentido mais raso do que o original, que é estoico e melancólico, não hedonista.',
      'A Arte Poética, epístola dirigida à família dos Pisões, formula preceitos sobre unidade, decoro, verossimilhança e a função de instruir deleitando. Foi o manual normativo da literatura europeia do Renascimento ao século XVIII. Horácio morreu em Roma em 27 de novembro de 8 a.C., poucos meses depois de Mecenas, e foi sepultado ao lado dele.'
    ],
    contexto: 'Horácio escreve na passagem da república ao principado, tendo lutado contra Augusto e depois vivido sob sua proteção indireta. Essa trajetória explica o tom de sua obra: nem exaltação do poder nem oposição, mas o elogio da vida moderada, do campo e da amizade como o que resta ao indivíduo quando a política deixa de lhe pertencer.',
    contribuicoes: ['Escreveu as Odes, obra máxima da lírica latina.', 'Escreveu a Arte Poética, manual normativo da literatura europeia por séculos.', 'Adaptou ao latim os metros líricos gregos com precisão sem precedente.', 'Cunhou as fórmulas carpe diem e aurea mediocritas.', 'Escreveu as Sátiras e as Epístolas, modelos do gênero em latim.'],
    cronologia: [
      ['65 a.C.', 'Nasce em Venúsia, em 8 de dezembro.'],
      ['42 a.C.', 'Combate em Filipos ao lado de Brutus.'],
      ['38 a.C.', 'É apresentado a Mecenas por Virgílio.'],
      ['23 a.C.', 'Publica os três primeiros livros das Odes.'],
      ['c. 19 a.C.', 'Escreve a Arte Poética.'],
      ['8 a.C.', 'Morre em Roma.']
    ],
    nota: 'A expressão carpe diem, na ode I.11, tem sentido estoico de aproveitar o presente diante da incerteza do futuro, e não o sentido hedonista com que costuma circular.'
  },

  'George Washington Carver': {
    papel: 'Agrônomo e inventor norte-americano (c. 1864–1943)',
    resumo: 'Nasceu escravizado e tornou-se o cientista que reconstruiu a agricultura do Sul dos Estados Unidos.',
    bio: [
      'George Washington Carver nasceu escravizado numa fazenda no Missouri, provavelmente por volta de 1864 — a data exata é desconhecida. Ainda bebê, foi sequestrado com a mãe por saqueadores; ele foi recuperado, ela nunca mais foi encontrada. Foi criado pelo casal proprietário da fazenda após a abolição, e aprendeu a ler com a esposa.',
      'Sua escolaridade foi uma sucessão de obstáculos: percorreu centenas de quilômetros em busca de escolas que aceitassem alunos negros. Foi aceito por correspondência numa faculdade do Kansas e teve a matrícula recusada ao se apresentar pessoalmente. Formou-se enfim no Iowa State, onde se tornou o primeiro estudante negro e depois o primeiro professor negro da instituição, com mestrado em botânica e micologia.',
      'Em 1896 aceitou o convite de Booker T. Washington para dirigir o departamento de agricultura do Instituto Tuskegee, no Alabama, onde permaneceu quarenta e sete anos. Enfrentou o problema central da região: décadas de monocultura de algodão haviam esgotado o solo. Carver ensinou rotação de culturas com amendoim, batata-doce e soja, leguminosas que fixam nitrogênio e recuperam a terra.',
      'Como o mercado para o amendoim era pequeno, desenvolveu centenas de aplicações para os novos cultivos — alimentos, tinturas, cosméticos, materiais. Criou vagões-escola que percorriam o campo levando demonstração prática a agricultores pobres, brancos e negros, e publicou boletins de linguagem simples. Recusou repetidas ofertas comerciais e patenteou pouquíssimo, sustentando que o conhecimento agrícola devia ser gratuito. Morreu em Tuskegee em 5 de janeiro de 1943. A crença popular de que inventou a pasta de amendoim é falsa: ela já existia antes de seu trabalho.'
    ],
    contexto: 'Carver atuou no Sul da segregação legal, num contexto em que agricultores negros arrendatários viviam presos ao ciclo da dívida e do algodão. Sua opção por levar ciência aplicada diretamente a esses agricultores, em vez de perseguir carreira acadêmica ou lucro industrial, define sua importância histórica.',
    contribuicoes: [
      'Introduziu a rotação de culturas com leguminosas para recuperar solos esgotados pelo algodão no Sul dos Estados Unidos.',
      'Desenvolveu centenas de aplicações industriais e alimentares para amendoim, batata-doce e soja.',
      'Criou vagões-escola de extensão agrícola para levar conhecimento a agricultores pobres.',
      'Foi o primeiro estudante e o primeiro professor negro do Iowa State College.',
      'Dirigiu por quarenta e sete anos o departamento de agricultura do Instituto Tuskegee.'
    ],
    cronologia: [
      ['c. 1864', 'Nasce escravizado numa fazenda no Missouri.'],
      [1894, 'Forma-se no Iowa State College.'],
      [1896, 'Assume o departamento de agricultura do Instituto Tuskegee.'],
      [1906, 'Cria o vagão-escola de extensão agrícola.'],
      [1921, 'Depõe no Congresso dos Estados Unidos sobre a cultura do amendoim.'],
      [1943, 'Morre em Tuskegee.']
    ],
    nota: 'A atribuição da invenção da pasta de amendoim a Carver é falsa: o produto já existia antes de seu trabalho.'
  }
};

const OBRAS_F13 = {
  'Sun Tzu': [
    [
      'A Arte da Guerra',
      'livro',
      'séc. V a.C.',
      'Treze capítulos breves sobre cálculo prévio, terreno, espionagem, moral das tropas, logística e engano. Inverte a expectativa de um manual militar: a guerra é cara e arriscada, campanhas longas arruínam Estados, e a excelência suprema consiste em submeter o inimigo sem combate. Composto no período de guerra endêmica entre reinos chineses, foi leitura obrigatória de estrategistas por dois milênios e, desde o século XX, circula também em escolas de negócios e direito pela generalidade de seus princípios sobre conflito e vantagem.'
    ]
  ],
  'Mahatma Gandhi': [
    [
      'Uma Autobiografia: Minha Vida e Minhas Experiências com a Verdade',
      'memoria',
      1929,
      'Escrita em capítulos curtos para um semanário, cobre a infância na Índia, os anos de formação em Londres e sobretudo a experiência sul-africana em que o satyagraha nasceu. Gandhi trata a própria vida como sequência de experimentos morais e registra fracassos e vergonhas com franqueza incomum. É a principal fonte em primeira pessoa sobre a formação de seu método.'
    ],
    [
      'Hind Swaraj',
      'livro',
      1909,
      'Escrito em nove dias, a bordo de um navio, em forma de diálogo entre um leitor impaciente e um editor. Gandhi recusa a ideia de que a independência indiana consista em substituir administradores britânicos por indianos mantendo a mesma civilização industrial, e propõe uma crítica radical à modernidade ocidental. É o texto programático mais controverso de sua obra.'
    ]
  ],
  Sócrates: [],
  'Clarice Lispector': [
    [
      'A Hora da Estrela',
      'livro',
      1977,
      'Narra a vida de Macabéa, datilógrafa nordestina pobre no Rio de Janeiro, através de Rodrigo S.M., narrador masculino que se interroga o tempo todo sobre o direito de contar a história de alguém que não pode contá-la. Publicado semanas antes da morte da autora, é o livro em que a densidade interior de sua obra encontra diretamente a questão social brasileira, e o mais lido de sua produção.'
    ],
    [
      'A Paixão Segundo G.H.',
      'livro',
      1964,
      'Uma escultora entra no quarto vazio da empregada, esmaga uma barata na porta do armário e, diante daquilo, atravessa uma desorganização completa de si mesma. Romance construído inteiro sobre um episódio mínimo, é a expressão mais radical da prosa de Clarice: o enredo desaparece e resta o instante em que a percepção comum se rompe. É considerado por muitos críticos seu livro mais importante.'
    ],
    ['Perto do Coração Selvagem', 'livro', 1943, 'Primeiro romance, escrito aos vinte e três anos, acompanha Joana da infância ao casamento sem obedecer à cronologia nem à causalidade do romance tradicional. Sua publicação causou impacto imediato na crítica brasileira, que reconheceu ali um tipo de densidade interior inédito na ficção nacional. Recebeu o prêmio Graça Aranha.'],
    ['Laços de Família', 'livro', 1960, 'Reúne treze contos em que mulheres de vida aparentemente comum atravessam um instante de percepção que desloca tudo — a visão de um cego mascando chiclete, uma galinha que foge antes do almoço, uma festa de aniversário. É a obra que consolidou Clarice como uma das maiores contistas da língua portuguesa.']
  ],
  Voltaire: [
    [
      'Cândido',
      'livro',
      1759,
      'Conto filosófico em que um jovem educado na doutrina de que vivemos no melhor dos mundos possíveis é lançado numa sucessão de catástrofes — guerra, Inquisição, escravidão e o terremoto de Lisboa de 1755. A sátira ao otimismo filosófico termina numa recusa da especulação em favor da ação concreta: é preciso cultivar o próprio jardim. É o texto mais lido de Voltaire e um dos contos mais influentes da literatura.'
    ],
    [
      'Tratado sobre a Tolerância',
      'ensaio',
      1763,
      'Escrito a partir do caso de Jean Calas, protestante torturado e executado em Toulouse por um crime que não cometeu, cuja reabilitação póstuma Voltaire conseguiu após três anos de campanha. O livro argumenta contra o fanatismo religioso e a favor da liberdade de consciência, combinando indignação, ironia e argumentação jurídica. Voltou a circular amplamente sempre que a intolerância religiosa retorna ao debate público.'
    ],
    ['Cartas Filosóficas', 'livro', 1734, 'Relato do exílio inglês em que Voltaire compara a Inglaterra à França em desfavor desta: monarquia constitucional, tolerância religiosa relativa, prestígio dos comerciantes e dos cientistas. Introduziu Newton e Locke ao público francês e foi condenado à fogueira por decisão judicial, o que ampliou sua circulação.']
  ],
  'Liev Tolstói': [
    [
      'Guerra e Paz',
      'livro',
      1869,
      'Acompanha cinco famílias da aristocracia russa durante as invasões napoleônicas, entrelaçando centenas de personagens com ensaios sobre a natureza da história. A tese que atravessa a obra é que grandes homens não movem os acontecimentos: são movidos por eles, e a história resulta da soma incalculável de ações individuais. É um dos romances mais ambiciosos já escritos e o esforço mais completo de reunir ficção e filosofia da história.'
    ],
    [
      'Anna Kariénina',
      'livro',
      1877,
      'Narra o adultério e a destruição de uma mulher da alta sociedade russa em paralelo à busca de sentido de Liévin, proprietário rural em grande parte autobiográfico. Tolstói recusa tanto a condenação moralista quanto a absolvição romântica, e constrói uma análise implacável do casamento, da hipocrisia social e da diferença entre o que se pune numa mulher e num homem.'
    ],
    ['A Morte de Ivan Ilitch', 'livro', 1886, 'Um magistrado bem-sucedido adoece e, ao longo de meses, percebe que a vida correta e respeitável que levou foi inteiramente vazia. Novela curta escrita após a crise espiritual do autor, é considerada uma das análises literárias mais precisas já feitas sobre a consciência da morte.'],
    ['Uma Confissão', 'memoria', 1882, 'Registro da crise que atingiu Tolstói aos cinquenta anos, no auge da fama e da fortuna, quando a pergunta sobre o sentido da vida diante da morte deixou de ter resposta na ciência ou na Igreja. É o documento que explica a virada religiosa que reorientaria o resto de sua vida e obra.']
  ],
  'Daniel Kahneman': [
    [
      'Rápido e Devagar',
      'livro',
      2011,
      'Apresenta ao grande público quatro décadas de pesquisa sobre julgamento e decisão, organizadas em torno da distinção entre um Sistema 1 rápido, automático e intuitivo, e um Sistema 2 lento, deliberado e custoso. Percorre heurísticas, vieses, aversão à perda, excesso de confiança e a diferença entre o eu que experimenta e o eu que lembra. Tornou-se um dos livros de ciência mais vendidos do século.'
    ],
    ['Ruído', 'livro', 2021, 'Escrito com Olivier Sibony e Cass Sunstein, trata de um problema distinto do viés: a variabilidade indesejada em julgamentos que deveriam ser idênticos. Juízes que dão penas diferentes para casos iguais, médicos que divergem no mesmo exame, seguradoras com cotações discrepantes. Propõe métodos de higiene decisória para reduzir essa dispersão.']
  ],
  'John Locke': [
    [
      'Dois Tratados sobre o Governo Civil',
      'livro',
      1689,
      'Refuta no primeiro tratado a defesa do direito divino dos reis e constrói no segundo a teoria que fundaria o liberalismo político: os homens têm no estado de natureza direitos à vida, à liberdade e à propriedade; o governo existe por consentimento e apenas para protegê-los; quando os viola sistematicamente, o povo tem direito de resistir e substituí-lo. Sua influência sobre a Declaração de Independência americana é direta.'
    ],
    [
      'Ensaio sobre o Entendimento Humano',
      'livro',
      1689,
      'Nega a existência de ideias inatas e sustenta que a mente começa como folha em branco, preenchida por sensação e reflexão. Todo conhecimento deriva da experiência, e os limites do nosso entendimento devem produzir modéstia intelectual e tolerância diante de quem discorda. É o texto fundador do empirismo moderno e a base sobre a qual Berkeley e Hume construiriam.'
    ],
    ['Carta sobre a Tolerância', 'ensaio', 1689, 'Defende que o Estado não tem competência para determinar a salvação das almas e que a fé imposta pela força não é fé. Escrito no exílio holandês, após décadas de guerra religiosa europeia, é um dos textos fundadores da separação entre Igreja e Estado.']
  ],
  'Henry Ford': [
    [
      'Minha Vida e Minha Obra',
      'memoria',
      1922,
      'Autobiografia em que Ford expõe sua filosofia industrial: o serviço antes do lucro, o preço baixo como forma de ampliar mercado, a padronização e a desconfiança em relação a financistas e especialistas. É documento essencial sobre o fordismo contado por seu autor, e também uma versão parcial, que minimiza conflitos trabalhistas e o papel de colaboradores no desenvolvimento da linha de montagem.'
    ]
  ],
  'Peter Lynch': [
    [
      'O Jeito Peter Lynch de Investir',
      'livro',
      1989,
      'Expõe o método que rendeu ao fundo Magellan treze anos de desempenho excepcional: investir em negócios compreensíveis, aproveitar o que se observa no próprio cotidiano antes que Wall Street perceba, ler os balanços e classificar empresas por tipo de crescimento. Argumenta que o investidor individual tem vantagens reais sobre o profissional, e é uma das portas de entrada mais lidas da análise fundamentalista.'
    ],
    ['Batendo a Wall Street', 'livro', 1993, 'Continuação em que Lynch detalha o processo de seleção de ações do fundo, setor por setor, com exemplos concretos de acertos e erros. É mais técnico que o anterior e mostra o raciocínio por trás de decisões específicas, incluindo as que deram errado.']
  ],
  'Gustave Flaubert': [
    [
      'Madame Bovary',
      'livro',
      1857,
      'Emma Bovary, casada com um médico de província medíocre, busca em adultérios, dívidas e objetos a intensidade que os romances românticos lhe prometeram, e se destrói no processo. A narração se instala dentro da personagem sem emitir juízo, levando o estilo indireto livre à sua forma mais consequente. Processado por ofensa à moral pública e absolvido, o livro fundou o realismo no romance europeu e redefiniu o que se espera da prosa de ficção.'
    ],
    ['A Educação Sentimental', 'livro', 1869, 'Acompanha Frédéric Moreau da juventude à meia-idade, atravessando a Revolução de 1848, sem que nenhuma de suas ambições amorosas ou políticas se realize. Flaubert constrói deliberadamente um romance sobre o fracasso e a inércia, e o resultado é uma das análises mais duras já escritas sobre uma geração.'],
    ['Três Contos', 'livro', 1877, 'Reúne Um Coração Simples, A Lenda de São Julião Hospitaleiro e Herodias, escritos em registros e épocas radicalmente distintos. O primeiro, sobre a vida inteira de uma criada, é frequentemente apontado como a demonstração mais perfeita do que Flaubert entendia por prosa.']
  ],
  Esopo: [
    [
      'Fábulas',
      'livro',
      'séc. VI a.C.',
      'Corpus de narrativas breves protagonizadas por animais com caracteres humanos fixos — a raposa astuta, o lobo violento, a formiga previdente — encerradas por uma lição moral explícita. Transmitido oralmente e atribuído coletivamente a Esopo, foi compilado por escrito séculos depois por Fedro, em latim, e Babrio, em grego. A brevidade e a clareza fizeram do gênero instrumento de ensino desde a Antiguidade, e narrativas como A Raposa e as Uvas e A Lebre e a Tartaruga entraram no repertório proverbial de praticamente todas as línguas europeias.'
    ]
  ],
  'Jean de La Fontaine': [
    [
      'Fábulas',
      'poesia',
      1668,
      'Doze livros publicados ao longo de vinte e seis anos, que retomam Esopo, Fedro e fontes indianas e persas e as transformam em poesia: verso livre em metros variados, diálogo vivo e um narrador irônico que raramente entrega a moral de forma simples. Sob os animais estão a corte de Luís XIV, a arbitrariedade do poder e a resignação dos fracos — crítica que só a forma da fábula tornava dizível sob o absolutismo. É uma das obras mais lidas da língua francesa.'
    ]
  ],
  Hipócrates: [
    [
      'Corpus Hippocraticum',
      'livro',
      'séc. V–IV a.C.',
      'Conjunto de cerca de sessenta tratados médicos reunidos na biblioteca de Alexandria sob o nome de Hipócrates, hoje reconhecidos como obra de vários autores ao longo de mais de um século. Sua ruptura é clara: o tratado sobre a epilepsia afirma que ela não é mais divina do que qualquer outra doença e tem causa natural, fundando a medicina como investigação racional. Os textos insistem na observação atenta do paciente, no registro da evolução dos sintomas e na atenção ao ambiente, à dieta e ao modo de vida.'
    ]
  ],
  'Albert Schweitzer': [
    ['Filosofia da Civilização', 'livro', 1923, 'Diagnostica o declínio ético da civilização europeia após a Primeira Guerra e propõe como fundamento a ética do respeito pela vida: sou vida que quer viver em meio a vida que quer viver, e o bem consiste em preservar e promover a vida em todas as suas formas. O princípio antecede e influencia a filosofia ambiental e a bioética contemporâneas.'],
    ['A Busca do Jesus Histórico', 'livro', 1906, 'Revisa um século de pesquisa bíblica liberal e conclui que ela havia projetado no Jesus histórico um moralista moderno à sua própria imagem. Schweitzer argumenta que a figura documentada é escatológica e estranha à sensibilidade contemporânea. O livro reorientou os estudos do Novo Testamento e continua sendo referência.'],
    ['Johann Sebastian Bach', 'livro', 1908, 'Estudo em que Schweitzer, ele próprio organista de renome, analisa Bach como compositor essencialmente descritivo, cuja música traduz o texto em figuras sonoras recorrentes. Influenciou decisivamente a interpretação e a construção de órgãos no século XX.']
  ],
  'T. S. Eliot': [
    [
      'A Terra Devastada',
      'poesia',
      1922,
      'Pouco mais de quatrocentos versos feitos de fragmentos, vozes, línguas e citações justapostas sem transição, retratando uma Europa espiritualmente arrasada após a Primeira Guerra. Ezra Pound cortou drasticamente o manuscrito original, e Eliot lhe dedicou o poema chamando-o de o melhor artífice. É o marco do modernismo em língua inglesa e um dos poemas mais estudados do século.'
    ],
    ['Quatro Quartetos', 'poesia', 1943, 'Quatro poemas longos escritos entre 1936 e 1942, o último deles durante os bombardeios de Londres, que meditam sobre tempo, memória, linguagem e fé a partir de quatro lugares concretos. É a obra da maturidade de Eliot, mais serena que A Terra Devastada, e considerada por muitos críticos seu ponto mais alto.'],
    ['A Canção de Amor de J. Alfred Prufrock', 'poesia', 1915, 'Monólogo interior de um homem paralisado pela consciência de si, incapaz de fazer a pergunta que pretende fazer. Publicado quando Eliot tinha vinte e seis anos, já rompia com a dicção poética herdada do século XIX e anunciava a linguagem do modernismo.']
  ],
  'Anaïs Nin': [
    [
      'Diário de Anaïs Nin',
      'memoria',
      1966,
      'Primeiro volume publicado do diário que a autora manteve por mais de sessenta anos, iniciado aos onze como carta ao pai ausente. Combina autoanálise, retrato do meio literário parisiense dos anos 1930 e construção deliberada de si: Nin editava e reescrevia as entradas, e as versões publicadas em vida omitiam relações que as edições póstumas revelariam. Elevou o diário íntimo à condição de obra literária.'
    ],
    ['Delta de Vênus', 'livro', 1977, 'Coletânea de contos eróticos escritos nos anos 1940 por encomenda de um colecionador anônimo que pagava por página e pedia menos poesia e mais sexo. Publicados apenas após a morte da autora, tornaram-se marco da literatura erótica de autoria feminina, escrita numa época em que o gênero praticamente não existia como literatura publicável.']
  ],
  Horácio: [
    ['Odes', 'poesia', '23 a.C.', 'Quatro livros de poemas líricos que adaptam ao latim os metros gregos com precisão técnica sem precedente, tratando de amizade, moderação, passagem do tempo e morte. Delas vêm as fórmulas carpe diem e aurea mediocritas, ambas em sentido mais estoico e melancólico do que o uso corrente sugere. São consideradas a obra máxima da lírica latina.'],
    ['Arte Poética', 'ensaio', '19 a.C.', 'Epístola em verso dirigida à família dos Pisões, que formula preceitos sobre unidade da obra, decoro, verossimilhança e a função de instruir deleitando. Foi o manual normativo da literatura europeia do Renascimento ao século XVIII, e sua influência sobre a teoria do drama clássico francês é direta.'],
    ['Sátiras', 'poesia', '30 a.C.', 'Dois livros de poemas em hexâmetro sobre ambição, avareza, mesquinharia e a vida em Roma, escritos em tom conversacional e sem a agressividade da sátira posterior. Horácio inclui a si mesmo entre os alvos, e é essa autoironia que distingue o gênero em suas mãos.']
  ],
  'George Washington Carver': [],
  'Brian Chesky': [],
  'Oliver Goldsmith': [
    ['O Vigário de Wakefield', 'livro', 1766, 'Narra a ruína progressiva de um pastor rural e de sua família, contada pelo próprio vigário com um otimismo que a realidade desmente a cada capítulo. A distância entre o que o narrador vê e o que o leitor entende é o motor do livro, que foi um dos romances mais populares da Europa por mais de um século e influenciou Goethe e Dickens.'],
    ['Ela Se Abaixa para Vencer', 'peca', 1773, 'Comédia de equívocos em que um jovem tímido diante de mulheres de sua classe e desinibido com criadas é levado a confundir a casa de sua pretendente com uma estalagem. Escrita em reação à comédia sentimental então dominante, é uma das peças inglesas do século XVIII mais encenadas até hoje.']
  ],
  'Millôr Fernandes': [],
  'Benjamin Disraeli': [],
  'Hillary Clinton': []
};

(function aplicarF13() {
  Object.entries(PANORAMAS_F13).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F13).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF13() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 13:', e);
    }
  };
})();

/* ================================================================
   FASE 14 — CONTINUAÇÃO DA FILA
   ================================================================ */
const PANORAMAS_F14 = {
  'Oliver Goldsmith': {
    papel: 'Escritor irlandês (1728–1774)',
    resumo: 'Escreveu com igual sucesso romance, poema e comédia, e viveu perseguido por dívidas até morrer aos 45 anos.',
    bio: [
      'Oliver Goldsmith nasceu provavelmente em Ballymahon, na Irlanda, em 1728, filho de um clérigo anglicano pobre. Teve varíola na infância, que lhe deixou marcas permanentes no rosto. Estudou no Trinity College de Dublin como sizar — estudante que pagava os estudos servindo aos colegas mais ricos —, tentou medicina em Edimburgo e em Leiden e vagou pela Europa a pé, sustentando-se, segundo o próprio relato, tocando flauta.',
      'Chegou a Londres em 1756 sem dinheiro e trabalhou como assistente de boticário, professor e revisor até se firmar como escritor por encomenda. Tornou-se amigo próximo de Samuel Johnson e membro do círculo literário mais influente da Inglaterra, ao lado de Edmund Burke e Joshua Reynolds. Johnson salvou-o da prisão por dívidas vendendo o manuscrito de seu romance.',
      'O Vigário de Wakefield, de 1766, narra a ruína progressiva de um pastor rural contada por ele mesmo com um otimismo que a realidade desmente a cada capítulo. Foi um dos romances mais populares da Europa por mais de um século e influenciou Goethe e Dickens. O poema A Aldeia Abandonada, de 1770, lamenta o despovoamento do campo inglês pelos cercamentos de terras.',
      'Ela Se Abaixa para Vencer, de 1773, foi escrita em reação à comédia sentimental então dominante e continua sendo uma das peças inglesas do século XVIII mais encenadas. Goldsmith era jogador compulsivo e gastava tudo o que ganhava; morreu em Londres em 4 de abril de 1774, aos 45 anos, endividado. Johnson escreveu seu epitáfio.'
    ],
    contexto: 'Goldsmith pertence à Londres em que a literatura deixava de depender de mecenas e passava a depender do mercado editorial. Escreveu por dinheiro em quase todos os gêneros disponíveis, e é raro que alguém nessa condição tenha produzido, em três formas distintas, obras que sobreviveram.',
    contribuicoes: ['Escreveu O Vigário de Wakefield (1766), um dos romances mais populares do século XVIII europeu.', 'Escreveu a comédia Ela Se Abaixa para Vencer (1773), ainda hoje encenada.', 'Escreveu A Aldeia Abandonada (1770), poema sobre o despovoamento rural inglês.', 'Integrou o círculo literário de Samuel Johnson, Burke e Reynolds.'],
    cronologia: [
      [1728, 'Nasce na Irlanda.'],
      [1756, 'Estabelece-se em Londres.'],
      [1766, 'Publica O Vigário de Wakefield.'],
      [1770, 'Publica A Aldeia Abandonada.'],
      [1773, 'Estreia Ela Se Abaixa para Vencer.'],
      [1774, 'Morre em Londres, aos 45 anos.']
    ]
  },

  'Millôr Fernandes': {
    papel: 'Escritor, humorista e desenhista brasileiro (1923–2012)',
    resumo: 'Fez do humor um instrumento de crítica e criou uma das frases mais afiadas da língua portuguesa.',
    bio: [
      'Milton Viola Fernandes nasceu no Rio de Janeiro em 16 de agosto de 1923. O pai morreu antes de seu nascimento e a mãe quando ele tinha três anos; foi criado por parentes. Entrou aos catorze anos como contínuo na revista O Cruzeiro, então a maior publicação do país, e ali permaneceu por três décadas, passando de office-boy a um de seus nomes principais.',
      'Assinou por anos a seção Pif-Paf e criou um estilo próprio em que texto e desenho eram indissociáveis. Durante a ditadura militar, integrou o semanário O Pasquim e enfrentou a censura com uma solução que virou marca: quando um texto era cortado, publicava no lugar receitas de bolo, provocação que se tornou símbolo da resistência da imprensa alternativa.',
      'Escreveu para teatro — Um Elefante no Caos, Liberdade, Liberdade, esta com Flávio Rangel, montada em 1965 como protesto direto contra o regime —, traduziu Shakespeare, Molière, Brecht e Pirandello, e manteve colunas em veículos como Veja, Jornal do Brasil e IstoÉ por décadas.',
      'Sua marca é o aforismo: frases curtíssimas que operam por inversão lógica, trocadilho ou desmontagem de lugar-comum. Assinou também com o pseudônimo Vão Gogo. Recusava rótulos e prêmios e trabalhou praticamente até o fim. Morreu no Rio de Janeiro em 27 de março de 2012.'
    ],
    contexto: 'Millôr atravessou a censura do Estado Novo e a da ditadura militar exercendo o humor como forma legítima de crítica política, num país em que dizer diretamente custava caro. Sua economia verbal extrema é, em parte, produto dessa restrição: a frase curta escapa mais facilmente do que o artigo.',
    contribuicoes: [
      'Criou uma obra em que texto e desenho de humor são indissociáveis.',
      'Integrou O Pasquim e enfrentou a censura da ditadura militar com soluções que se tornaram emblemáticas.',
      'Escreveu para o teatro, entre outras, Liberdade, Liberdade, com Flávio Rangel.',
      'Traduziu Shakespeare, Molière, Brecht e Pirandello para o português.',
      'Fixou o aforismo como forma literária no jornalismo brasileiro.'
    ],
    cronologia: [
      [1923, 'Nasce no Rio de Janeiro, em 16 de agosto.'],
      [1938, 'Entra na revista O Cruzeiro.'],
      [1965, 'Estreia Liberdade, Liberdade, com Flávio Rangel.'],
      [1969, 'Integra a fundação de O Pasquim.'],
      [2012, 'Morre no Rio de Janeiro.']
    ]
  },

  'Benjamin Disraeli': {
    papel: 'Político e escritor britânico (1804–1881)',
    resumo: 'Único primeiro-ministro britânico de origem judaica, fundou o conservadorismo social e ampliou o direito de voto.',
    bio: [
      'Benjamin Disraeli nasceu em Londres em 21 de dezembro de 1804, em família judaica sefardita. O pai rompeu com a sinagoga e batizou os filhos na Igreja Anglicana quando Benjamin tinha doze anos — decisão sem a qual sua carreira parlamentar teria sido legalmente impossível, já que judeus só puderam ocupar assento nos Comuns a partir de 1858.',
      'Não estudou em universidade. Trabalhou num escritório de advocacia, perdeu dinheiro em especulação com ações sul-americanas e passou anos endividado. Estreou na literatura com romances de sociedade e, mais tarde, escreveu Sybil, ou As Duas Nações, que descreve ricos e pobres na Inglaterra industrial como dois povos que não se conhecem, sem contato e sem simpatia. A imagem tornou-se central no debate social britânico.',
      'Elegeu-se deputado em 1837, após cinco tentativas, e projetou-se ao liderar a revolta conservadora contra Robert Peel na questão das Leis dos Cereais. Foi chanceler do Erário e tornou-se primeiro-ministro em 1868, brevemente, e de 1874 a 1880.',
      'Conduziu a Reforma Eleitoral de 1867, que praticamente dobrou o eleitorado ao estender o voto a boa parte dos trabalhadores urbanos — manobra que os liberais não esperavam de um conservador. Seu segundo governo aprovou legislação de saúde pública, habitação operária e direitos sindicais, base do que se chamaria de democracia tory. Comprou para a Inglaterra a participação egípcia no Canal de Suez e fez a rainha Vitória imperatriz da Índia. Sua rivalidade com Gladstone dominou a política britânica por duas décadas. Morreu em Londres em 19 de abril de 1881.'
    ],
    contexto: 'Disraeli reinventou o Partido Conservador num país em rápida industrialização, ao perceber antes dos adversários que a ampliação do voto era inevitável e que os trabalhadores urbanos não votariam necessariamente com os liberais. Sua fórmula — reforma social conduzida pela direita para preservar a ordem — atravessou o século XX.',
    contribuicoes: [
      'Foi primeiro-ministro do Reino Unido em 1868 e entre 1874 e 1880.',
      'Conduziu a Reforma Eleitoral de 1867, que dobrou o eleitorado britânico.',
      'Aprovou legislação pioneira de saúde pública, habitação operária e direitos sindicais.',
      'Escreveu Sybil, ou As Duas Nações, com a imagem das duas Inglaterras que não se conhecem.',
      'Adquiriu para o Reino Unido a participação egípcia no Canal de Suez.'
    ],
    cronologia: [
      [1804, 'Nasce em Londres, em 21 de dezembro.'],
      [1837, 'Elege-se deputado após cinco tentativas.'],
      [1845, 'Publica Sybil, ou As Duas Nações.'],
      [1867, 'Conduz a Reforma Eleitoral.'],
      [1874, 'Assume o segundo mandato como primeiro-ministro.'],
      [1881, 'Morre em Londres.']
    ]
  },

  'Arthur Ashe': {
    papel: 'Tenista e ativista norte-americano (1943–1993)',
    resumo: 'Primeiro homem negro a vencer Wimbledon, transformou a doença que o mataria em campanha pública contra o preconceito.',
    bio: [
      'Arthur Robert Ashe Jr. nasceu em Richmond, Virgínia, em 10 de julho de 1943, no Sul segregado. A mãe morreu quando ele tinha seis anos. Aprendeu tênis em quadras públicas reservadas a negros e foi impedido de disputar torneios juvenis por causa da cor da pele. Foi treinado por Robert Walter Johnson, médico que formava jovens tenistas negros e lhes ensinava também a suportar hostilidade sem reagir.',
      'Foi o primeiro negro convocado para a equipe americana da Copa Davis, em 1963. Venceu o US Open em 1968, o Aberto da Austrália em 1970 e Wimbledon em 1975, derrotando Jimmy Connors numa final em que trocou a potência pela variação tática — vitória considerada uma das maiores reviravoltas da história do torneio. Permanece o único homem negro a vencer os três títulos.',
      'Fora das quadras, teve o visto negado pela África do Sul do apartheid em 1969 e fez campanha internacional pela exclusão do país do circuito. Fundou programas de tênis para crianças de periferia, presidiu associações de jogadores e escreveu A Hard Road to Glory, história em três volumes do atleta negro nos Estados Unidos.',
      'Sofreu infartos em 1979 e 1983 e contraiu HIV em uma transfusão durante cirurgia cardíaca. Manteve o diagnóstico privado até 1992, quando um jornal se preparava para publicá-lo e ele decidiu anunciar em coletiva. Passou o último ano criando uma fundação de combate à aids e falando publicamente sobre a doença. Morreu em Nova York em 6 de fevereiro de 1993, aos 49 anos.'
    ],
    contexto: 'Ashe atuou num esporte de clubes privados e brancos, num país em segregação legal durante boa parte de sua vida. Sua escolha por uma postura pública contida e articulada — e não pelo confronto — foi criticada por parte do movimento negro na época e é hoje lida como estratégia deliberada de quem tinha acesso a espaços fechados a quase todos.',
    contribuicoes: [
      'Foi o primeiro homem negro a vencer o US Open, o Aberto da Austrália e Wimbledon.',
      'Fez campanha internacional pelo isolamento esportivo da África do Sul do apartheid.',
      'Escreveu A Hard Road to Glory, história do atleta negro nos Estados Unidos.',
      'Criou programas de tênis e educação para crianças de periferia.',
      'Tornou pública sua condição de portador de HIV e dedicou o último ano à campanha contra o estigma.'
    ],
    cronologia: [
      [1943, 'Nasce em Richmond, Virgínia, em 10 de julho.'],
      [1963, 'É o primeiro negro convocado para a Copa Davis dos Estados Unidos.'],
      [1968, 'Vence o US Open.'],
      [1975, 'Vence Wimbledon.'],
      [1988, 'Publica A Hard Road to Glory.'],
      [1992, 'Anuncia publicamente ser portador de HIV.'],
      [1993, 'Morre em Nova York.']
    ]
  },

  'Hubert H. Humphrey': {
    papel: 'Político norte-americano, vice-presidente dos Estados Unidos (1911–1978)',
    resumo: 'Levou os direitos civis para dentro do Partido Democrata em 1948 e pagou o preço político por isso a vida inteira.',
    bio: [
      'Hubert Horatio Humphrey Jr. nasceu em Wallace, Dakota do Sul, em 27 de maio de 1911, filho de um farmacêutico. Abandonou a faculdade durante a Depressão para ajudar na farmácia da família e formou-se anos depois em ciência política. Foi eleito prefeito de Minneapolis em 1945 e criou na cidade uma das primeiras comissões municipais de direitos civis do país.',
      'O momento decisivo foi a convenção democrata de 1948, quando fez o discurso em que pediu ao partido que saísse da sombra dos direitos dos estados para a luz brilhante dos direitos humanos. A plataforma de direitos civis foi aprovada, delegações sulistas abandonaram a convenção e lançaram candidatura própria, e o Partido Democrata iniciou o realinhamento que o afastaria definitivamente do Sul segregacionista.',
      'Elegeu-se senador por Minnesota e foi o principal articulador da Lei dos Direitos Civis de 1964, conduzindo a estratégia que quebrou a obstrução sulista mais longa da história do Senado. Foi também autor da legislação que criou o Corpo da Paz e defensor pioneiro do controle de armas nucleares.',
      'Tornou-se vice-presidente de Lyndon Johnson em 1965. A lealdade ao presidente na condução da Guerra do Vietnã, que ele questionava em privado, custou-lhe apoio da própria base. Disputou a presidência em 1968, no ano do assassinato de King e de Robert Kennedy e da convenção violenta de Chicago, e perdeu por margem estreita para Richard Nixon. Voltou ao Senado e morreu em Waverly, Minnesota, em 13 de janeiro de 1978.'
    ],
    contexto: 'Humphrey é a figura em que se vê o custo pessoal de uma reorientação partidária: foi decisivo para transformar o Partido Democrata no partido dos direitos civis e teve a candidatura presidencial destruída por uma guerra que herdou e não sustentava. Sua legislação sobreviveu à sua carreira eleitoral.',
    contribuicoes: ['Fez em 1948 o discurso que levou a plataforma de direitos civis ao Partido Democrata.', 'Foi o principal articulador da Lei dos Direitos Civis de 1964 no Senado.', 'Autor da legislação que criou o Corpo da Paz.', 'Defendeu pioneiramente o controle de armas nucleares e o programa de merenda escolar.', 'Foi o 38º vice-presidente dos Estados Unidos.'],
    cronologia: [
      [1911, 'Nasce em Wallace, Dakota do Sul, em 27 de maio.'],
      [1945, 'Elege-se prefeito de Minneapolis.'],
      [1948, 'Faz o discurso pelos direitos civis na convenção democrata.'],
      [1964, 'Articula a aprovação da Lei dos Direitos Civis.'],
      [1965, 'Torna-se vice-presidente.'],
      [1968, 'Perde a eleição presidencial para Nixon.'],
      [1978, 'Morre em Minnesota.']
    ]
  },

  'William Arthur Lewis': {
    papel: 'Economista santa-lucense (1915–1991)',
    resumo: 'Primeiro negro a receber o Nobel de Economia, criou a teoria do desenvolvimento com oferta ilimitada de trabalho.',
    bio: [
      'William Arthur Lewis nasceu em Castries, na ilha de Santa Lúcia, então colônia britânica no Caribe, em 23 de janeiro de 1915. O pai, professor, morreu quando ele tinha sete anos. Ganhou uma bolsa para estudar na Inglaterra e escolheu a London School of Economics porque o serviço público colonial e a engenharia estavam fechados a candidatos negros — decisão que ele descreveu como consequência direta do racismo institucional.',
      'Formou-se com distinção e doutorou-se em economia industrial. Tornou-se, em 1948, o primeiro professor negro da Universidade de Manchester e, depois, o primeiro a ocupar cátedra plena numa universidade britânica.',
      'Seu artigo de 1954 sobre desenvolvimento econômico com oferta ilimitada de mão de obra é a base de seu prêmio. Lewis descreve economias com dois setores: um de subsistência, com produtividade marginal muito baixa e excedente de trabalhadores, e um moderno e capitalista, capaz de absorver essa mão de obra a salário quase constante e reinvestir o lucro. O crescimento ocorre por essa transferência até o ponto de virada em que o excedente se esgota. O modelo passou a orientar o debate sobre industrialização em países pobres.',
      'Foi conselheiro econômico de Gana, de Trinidad e Tobago e das Nações Unidas, e reitor fundador da Universidade das Índias Ocidentais. Recebeu o Nobel de Economia em 1979, dividido com Theodore Schultz, tornando-se o primeiro negro a receber o prêmio em área que não a da Paz. Morreu em Bridgetown, Barbados, em 15 de junho de 1991.'
    ],
    contexto: 'Lewis escreve na descolonização, quando dezenas de países recém-independentes precisavam de um modelo que explicasse como sair da pobreza estrutural. Sua teoria foi formulada a partir de dentro dessa experiência, e não como aplicação de modelos concebidos para economias já industrializadas.',
    contribuicoes: [
      'Formulou o modelo de desenvolvimento com oferta ilimitada de mão de obra, ou modelo de dois setores.',
      'Recebeu o Prêmio Nobel de Economia em 1979.',
      'Foi o primeiro professor negro a ocupar cátedra plena numa universidade britânica.',
      'Foi reitor fundador da Universidade das Índias Ocidentais.',
      'Assessorou governos africanos e caribenhos na formulação de políticas de desenvolvimento.'
    ],
    cronologia: [
      [1915, 'Nasce em Castries, Santa Lúcia, em 23 de janeiro.'],
      [1948, 'Torna-se professor na Universidade de Manchester.'],
      [1954, 'Publica o artigo sobre desenvolvimento com oferta ilimitada de trabalho.'],
      [1955, 'Publica A Teoria do Crescimento Econômico.'],
      [1979, 'Recebe o Prêmio Nobel de Economia.'],
      [1991, 'Morre em Barbados.']
    ]
  },

  'Leo Buscaglia': {
    papel: 'Professor e escritor norte-americano (1924–1998)',
    resumo: 'Criou um curso universitário sobre amor após o suicídio de uma aluna e tornou-se um dos autores mais vendidos dos anos 1980.',
    bio: [
      'Felice Leonardo Buscaglia nasceu em Los Angeles em 31 de março de 1924, filho de imigrantes italianos. Passou parte da infância na Itália e voltou aos Estados Unidos sem falar inglês, sendo inicialmente classificado como aluno com dificuldade de aprendizagem. Serviu na Marinha durante a Segunda Guerra e formou-se em língua inglesa e em educação especial.',
      'Lecionava na Universidade do Sul da Califórnia quando uma de suas alunas tirou a própria vida. O episódio o levou a concluir que a universidade formava profissionais competentes e pessoas incapazes de lidar com afeto, perda e sentido. Criou então uma disciplina sem créditos e sem notas que chamou de Love 1A, aberta a qualquer estudante, dedicada a discutir amor, relações e vida emocional.',
      'O curso lotou por anos e chamou atenção da imprensa. Buscaglia publicou Amor, em 1972, e depois Vivendo, Amando e Aprendendo, Ninguém É uma Ilha e A Vida É Bela. Chegou a ter cinco títulos simultaneamente na lista dos mais vendidos do New York Times, feito raro.',
      'Suas palestras, transmitidas por décadas pela televisão pública americana, tornaram-se enormemente populares pelo estilo direto e emocional. A crítica acadêmica o considerava sentimental e pouco rigoroso; ele respondia que a universidade havia expulsado a emoção do currículo e que o preço disso aparecia nos consultórios e nas estatísticas. Morreu em Nevada em 12 de junho de 1998.'
    ],
    contexto: 'Buscaglia atua no momento em que os Estados Unidos passavam a discutir publicamente saúde emocional, e a universidade ainda tratava o tema como estranho ao ensino. Sua contribuição foi menos teórica do que institucional: colocar afeto e vínculo dentro de uma sala de aula universitária, com todas as objeções que isso provocou.',
    contribuicoes: ['Criou o curso Love 1A na Universidade do Sul da Califórnia, sem créditos nem notas.', 'Escreveu Amor, Vivendo, Amando e Aprendendo e outros títulos de grande circulação.', 'Chegou a ter cinco livros simultaneamente na lista de mais vendidos do New York Times.', 'Popularizou nos Estados Unidos a discussão pública sobre vínculo afetivo e vida emocional.'],
    cronologia: [
      [1924, 'Nasce em Los Angeles, em 31 de março.'],
      ['c. 1969', 'Cria o curso Love 1A após o suicídio de uma aluna.'],
      [1972, 'Publica Amor.'],
      [1982, 'Publica Vivendo, Amando e Aprendendo.'],
      [1998, 'Morre em Nevada.']
    ]
  },

  'Guy Kawasaki': {
    papel: 'Empresário e escritor norte-americano (1954–)',
    resumo: 'Popularizou a função de evangelista de produto na Apple e escreveu manuais de referência para fundadores de empresas.',
    bio: [
      'Guy Takeo Kawasaki nasceu em Honolulu, no Havaí, em 30 de agosto de 1954, em família nipo-americana; o pai foi bombeiro, corretor e senador estadual. Formou-se em psicologia em Stanford e fez MBA na UCLA. Trabalhou brevemente com joias antes de entrar na Apple em 1983.',
      'Sua função no lançamento do Macintosh foi convencer desenvolvedores externos a escrever software para uma plataforma nova e sem base instalada. O cargo recebeu o nome de evangelista de software — a ideia de que um produto precisa de gente que acredite nele e o defenda publicamente antes que ele tenha mercado. Kawasaki popularizou o termo, que passou a ser adotado em toda a indústria de tecnologia.',
      'Saiu, fundou empresas, voltou à Apple nos anos 1990 e depois se dedicou a investimento em estágio inicial e a escrever. A Arte do Começo, de 2004, tornou-se um dos manuais mais usados por fundadores, com orientações práticas sobre produto, equipe, captação e apresentação a investidores.',
      'Formulou a regra 10-20-30 para apresentações de negócios: dez slides, vinte minutos, fonte de no mínimo trinta pontos — proposta a partir da observação de que a maioria das apresentações falha por excesso de informação e não por falta. Escreveu ainda Encantamento e atuou como conselheiro em empresas de tecnologia e design.'
    ],
    contexto: 'Kawasaki é uma figura da transição em que o marketing de tecnologia deixou de ser especificação técnica e passou a ser construção de comunidade em torno de um produto. Sua obra escrita traduz para fundadores sem experiência prévia o que se aprendia informalmente circulando no Vale do Silício.',
    contribuicoes: ['Popularizou a função de evangelista de produto durante o lançamento do Macintosh.', 'Escreveu A Arte do Começo, manual de referência para fundadores de empresas.', 'Formulou a regra 10-20-30 para apresentações de negócios.', 'Atuou como investidor em estágio inicial e conselheiro de empresas de tecnologia.'],
    cronologia: [
      [1954, 'Nasce em Honolulu, em 30 de agosto.'],
      [1983, 'Entra na Apple como evangelista de software do Macintosh.'],
      [2004, 'Publica A Arte do Começo.'],
      [2011, 'Publica Encantamento.']
    ]
  },

  'Scott Belsky': {
    papel: 'Empresário e escritor norte-americano (1980–)',
    resumo: 'Fundou a Behance e escreveu sobre o que separa a ideia criativa da sua execução.',
    bio: [
      'Scott Belsky nasceu em 1980. Formou-se em Cornell e fez MBA em Harvard. Trabalhou no departamento de gestão de talentos da Goldman Sachs, experiência que o levou a uma constatação central: a diferença entre profissionais criativos que realizam e os que não realizam quase nunca está na qualidade das ideias, e quase sempre nos sistemas de organização e acompanhamento.',
      'Fundou em 2006 a Behance, plataforma que permitia a designers, ilustradores e fotógrafos publicar portfólios e ser encontrados por contratantes — resolvendo, para a área criativa, um problema de visibilidade que o mercado não atendia. A empresa foi comprada pela Adobe em 2012, e Belsky passou a ocupar posições executivas na companhia, incluindo a de diretor de produto.',
      'Fazendo Ideias Acontecerem, de 2010, sistematiza o argumento. Belsky propõe organizar todo projeto criativo em passos de ação, referências e itens de acompanhamento, e defende que a energia criativa precisa ser combinada com o que chama de forças comunitárias e capacidade de liderança. A tese central é que ideias não valem nada isoladas — a execução é o diferencial escasso.',
      'O Meio Confuso, de 2018, trata da fase intermediária dos projetos, entre o entusiasmo do começo e a celebração do fim, período em que a maioria dos empreendimentos fracassa e sobre o qual quase não se escreve. Atua também como investidor em estágio inicial.'
    ],
    contexto: 'Belsky escreve para um público que crescia rápido: profissionais criativos independentes, sem estrutura de empresa e sem formação em gestão. Sua contribuição foi levar a esse público métodos de produtividade e organização que circulavam no mundo corporativo, adaptando-os à natureza não linear do trabalho criativo.',
    contribuicoes: ['Fundou a Behance, plataforma de portfólios para profissionais criativos, adquirida pela Adobe.', 'Escreveu Fazendo Ideias Acontecerem (2010), sobre execução de projetos criativos.', 'Escreveu O Meio Confuso (2018), sobre a fase intermediária dos empreendimentos.', 'Atua como investidor em estágio inicial e executivo de produto.'],
    cronologia: [
      [1980, 'Nasce nos Estados Unidos.'],
      [2006, 'Funda a Behance.'],
      [2010, 'Publica Fazendo Ideias Acontecerem.'],
      [2012, 'A Behance é adquirida pela Adobe.'],
      [2018, 'Publica O Meio Confuso.']
    ]
  },

  'André Kostolany': {
    papel: 'Investidor e escritor húngaro-francês (1906–1999)',
    resumo: 'Atravessou setenta anos de bolsa e escreveu sobre psicologia do mercado com o humor de quem já tinha quebrado duas vezes.',
    bio: [
      'André Kostolany nasceu em Budapeste em 9 de fevereiro de 1906, em família judaica abastada. Estudou filosofia e história da arte e foi enviado a Paris aos dezoito anos por um amigo do pai, para aprender o ofício de corretor. Começou como arbitragista na bolsa parisiense em 1924.',
      'Ganhou dinheiro apostando na queda dos mercados durante a crise de 1929, experiência que descreveu com desconforto por ter lucrado com a ruína alheia. Fugiu da ocupação nazista para os Estados Unidos, onde passou a guerra, e voltou à Europa depois. Perdeu praticamente tudo mais de uma vez ao longo da carreira e reconstruiu.',
      'A partir dos anos 1960 tornou-se, sobretudo na Alemanha, uma figura pública de enorme popularidade, com colunas, livros e seminários. Escreveu que a bolsa é regida a curto prazo pela psicologia e a longo prazo pelos fatos econômicos, e que o investidor precisa de dinheiro, ideias, paciência e sorte — sendo a paciência o mais raro.',
      'Sua imagem mais conhecida é a do homem que passeia com um cachorro: o dono caminha em linha reta, o cachorro corre à frente e atrás, mas sempre volta. A economia é o dono; a bolsa é o cachorro. Distinguia investidores obstinados, que resistem às oscilações, de hesitantes, que compram no topo e vendem no fundo. Publicou mais de dez livros e escreveu até os noventa e dois anos. Morreu em Paris em 14 de setembro de 1999.'
    ],
    contexto: 'Kostolany é um dos poucos autores de finanças cuja autoridade vem da duração: operou nos anos 1920, na Depressão, no pós-guerra, no choque do petróleo e na globalização. Sua ênfase na psicologia coletiva, em vez de modelos matemáticos, tornou-o especialmente lido em períodos de euforia e pânico.',
    contribuicoes: ['Escreveu mais de dez livros sobre bolsa e psicologia do investidor.', 'Formulou a imagem do passeio com o cachorro para explicar a relação entre economia e mercado.', 'Distinguiu investidores obstinados de hesitantes como chave do comportamento de mercado.', 'Tornou-se, na Alemanha, o divulgador mais popular do mercado de capitais no século XX.'],
    cronologia: [
      [1906, 'Nasce em Budapeste, em 9 de fevereiro.'],
      [1924, 'Começa a trabalhar na bolsa de Paris.'],
      [1929, 'Lucra apostando na queda durante o crash.'],
      [1940, 'Foge para os Estados Unidos.'],
      [1960, 'Torna-se figura pública e autor na Alemanha.'],
      [1999, 'Morre em Paris, aos 93 anos.']
    ]
  },

  'Brian Chesky': {
    papel: 'Empresário norte-americano (1981–)',
    resumo: 'Vendeu caixas de cereal para financiar a empresa que transformou o quarto vago de estranhos num mercado global.',
    bio: [
      'Brian Joseph Chesky nasceu em Niskayuna, Nova York, em 29 de agosto de 1981, filho de dois assistentes sociais. Formou-se em design industrial na Rhode Island School of Design, onde conheceu Joe Gebbia, e trabalhou brevemente como designer antes de se mudar para São Francisco sem emprego definido.',
      'Em 2007, sem dinheiro para o aluguel e com uma conferência de design lotando os hotéis da cidade, ele e Gebbia colocaram três colchões infláveis na sala e criaram um site oferecendo cama e café da manhã. Foi a origem do nome. Nathan Blecharczyk juntou-se como terceiro fundador.',
      'A empresa quase morreu várias vezes. Para financiá-la durante a eleição presidencial de 2008, os fundadores criaram caixas de cereal temáticas e as venderam por preços elevados a colecionadores, arrecadando dezenas de milhares de dólares. Foram rejeitados por praticamente todos os investidores que procuraram, sob o argumento de que ninguém dormiria na casa de um estranho. A virada veio quando passaram a fotografar profissionalmente os imóveis anunciados.',
      'O Airbnb tornou-se uma das maiores plataformas de hospedagem do mundo e passou a enfrentar regulação em dezenas de cidades por seu efeito sobre o mercado imobiliário e o custo da moradia. Chesky conduziu a empresa pelo colapso de demanda durante a pandemia, quando a receita caiu drasticamente e um quarto do quadro foi demitido, e pela abertura de capital em dezembro de 2020.'
    ],
    contexto: 'O Airbnb pertence à primeira geração de plataformas que transformaram bens ociosos em mercado, arranjo que ficou conhecido como economia compartilhada. Seu efeito sobre a oferta de moradia em cidades turísticas tornou a empresa um dos casos mais discutidos sobre os limites desse modelo.',
    contribuicoes: ['Cofundou o Airbnb, uma das maiores plataformas de hospedagem do mundo.', 'Conduziu a empresa pela crise de demanda da pandemia e pela abertura de capital em 2020.', 'Levou a formação em design para dentro da concepção de produto e de experiência de plataforma.'],
    cronologia: [
      [1981, 'Nasce em Niskayuna, Nova York, em 29 de agosto.'],
      [2007, 'Aluga colchões infláveis na própria sala durante uma conferência em São Francisco.'],
      [2008, 'Funda oficialmente o Airbnb com Gebbia e Blecharczyk.'],
      [2020, 'Conduz a empresa pela crise da pandemia e pela abertura de capital.']
    ]
  },

  'Ann Landers': {
    papel: 'Colunista de aconselhamento norte-americana (1918–2002)',
    resumo: 'Assinou por quase meio século a coluna de conselhos mais lida dos Estados Unidos.',
    bio: [
      'Ann Landers era o nome de assinatura de uma coluna de aconselhamento do Chicago Sun-Times, criada em 1943. Esther Pauline Friedman Lederer assumiu o pseudônimo em 1955 e o manteve até sua morte, tornando-se a pessoa definitivamente identificada com ele.',
      'Esther nasceu em Sioux City, Iowa, em 4 de julho de 1918, filha de imigrantes judeus russos, e era irmã gêmea de Pauline Friedman Phillips, que assinaria a coluna concorrente Dear Abby. As duas passaram décadas em rivalidade pública, com longos períodos sem se falar.',
      'Assumiu a coluna sem experiência jornalística, após vencer um concurso do jornal. Seu método era pouco comum para o gênero: consultava especialistas — médicos, advogados, psiquiatras, membros do clero — antes de responder, e mudava publicamente de posição quando as evidências mudavam. Passou a defender abertamente educação sexual, tratamento de dependência química, doação de órgãos e direitos civis, em décadas em que esses temas eram evitados na imprensa familiar.',
      'A coluna chegou a ser publicada em mais de mil jornais, com dezenas de milhões de leitores diários, e recebia milhares de cartas por semana. Sua franqueza em respostas curtas transformou várias delas em frases de circulação autônoma. Morreu em Chicago em 22 de junho de 2002.'
    ],
    contexto: 'A coluna de aconselhamento ocupava, na imprensa americana do século XX, o espaço em que assuntos privados podiam ser discutidos publicamente — casamento, sexo, dependência, doença mental. Ann Landers usou esse espaço para introduzir no debate familiar temas que o jornalismo formal não tocava.',
    contribuicoes: ['Assinou por quase cinquenta anos a coluna de aconselhamento mais lida dos Estados Unidos.', 'Introduziu na imprensa familiar americana temas como educação sexual, dependência química e doação de órgãos.', 'Estabeleceu a prática de consultar especialistas antes de responder às cartas.'],
    cronologia: [
      [1918, 'Esther Pauline Friedman nasce em Sioux City, Iowa, em 4 de julho.'],
      [1955, 'Assume a coluna Ann Landers no Chicago Sun-Times.'],
      [2002, 'Morre em Chicago.']
    ],
    nota: 'Ann Landers é um pseudônimo de coluna, criado em 1943 e assumido por Esther Pauline Friedman Lederer a partir de 1955.'
  },

  'Christopher McCandless': {
    papel: 'Viajante norte-americano (1968–1992)',
    resumo: 'Doou suas economias e caminhou sozinho para o Alasca, onde morreu aos 24 anos; sua história tornou-se livro e filme.',
    bio: [
      'Christopher Johnson McCandless nasceu em El Segundo, Califórnia, em 12 de fevereiro de 1968, e cresceu na Virgínia, em família de classe média alta. Formou-se com notas altas em história e antropologia na Universidade Emory em 1990. Leitor de Tolstói, Thoreau e Jack London, tinha relação tensa com os pais, agravada pela descoberta de que o pai mantivera duas famílias simultaneamente por anos.',
      'Logo após a formatura, doou os cerca de vinte e quatro mil dólares de sua poupança a uma organização de combate à fome, abandonou o carro, queimou o dinheiro que carregava e cortou contato com a família. Passou dois anos viajando pelo oeste americano sob o nome de Alexander Supertramp, trabalhando esporadicamente e vivendo com o mínimo.',
      'Em abril de 1992 entrou sozinho no interior do Alasca, próximo ao Parque Nacional Denali, com pouco equipamento e alimento, e instalou-se num ônibus abandonado que servia de abrigo a caçadores. Manteve um diário. Tentou sair em julho, mas o rio que atravessara congelado no inverno havia se tornado intransponível com o degelo.',
      'Seu corpo foi encontrado em setembro por caçadores. Tinha 24 anos e pesava cerca de trinta quilos. A causa da morte é atribuída à inanição, possivelmente agravada por intoxicação alimentar — as hipóteses específicas foram revisadas várias vezes e permanecem debatidas. Jon Krakauer reconstruiu a história em Na Natureza Selvagem, de 1996, adaptado ao cinema por Sean Penn em 2007. A recepção é dividida entre quem vê recusa radical do conforto e quem vê despreparo fatal.'
    ],
    contexto: 'A história de McCandless tornou-se objeto de discussão pública justamente por não admitir leitura única: ela toca ao mesmo tempo na tradição americana do retiro na natureza, que vem de Thoreau, e no risco concreto de confundir essa tradição com a ausência de preparo. O ônibus onde morreu foi retirado do local em 2020, após anos de resgates de visitantes que tentavam alcançá-lo.',
    contribuicoes: ['Sua história, reconstruída por Jon Krakauer em Na Natureza Selvagem (1996), tornou-se um dos livros de não ficção mais lidos sobre isolamento e vida na natureza.', 'O caso alimenta desde os anos 1990 o debate sobre a tradição do retiro na natureza na cultura americana.'],
    cronologia: [
      [1968, 'Nasce em El Segundo, Califórnia, em 12 de fevereiro.'],
      [1990, 'Forma-se na Universidade Emory, doa suas economias e parte.'],
      [1992, 'Entra sozinho no interior do Alasca em abril e morre em agosto.'],
      [1996, 'Jon Krakauer publica Na Natureza Selvagem.'],
      [2007, 'Sean Penn dirige a adaptação cinematográfica.'],
      [2020, 'O ônibus é retirado do local por razões de segurança.']
    ],
    nota: 'A causa exata da morte de McCandless foi objeto de várias hipóteses revisadas ao longo dos anos e permanece debatida.'
  }
};

const OBRAS_F14 = {
  'Benjamin Disraeli': [
    [
      'Sybil, ou As Duas Nações',
      'livro',
      1845,
      'Romance ambientado na Inglaterra industrial que descreve ricos e pobres como duas nações sem contato, sem simpatia e ignorantes dos hábitos e pensamentos uma da outra. Escrito por um deputado conservador em plena agitação cartista, o livro introduziu no debate britânico uma imagem que atravessaria o século e forneceu a base do conservadorismo social que Disraeli praticaria como primeiro-ministro.'
    ]
  ],
  'Millôr Fernandes': [
    ['Liberdade, Liberdade', 'peca', 1965, 'Colagem cênica escrita com Flávio Rangel a partir de textos de autores de todas as épocas sobre liberdade e tirania, montada um ano após o golpe militar. Sem enredo convencional, a peça encadeia trechos que, ditos naquele momento, adquiriam sentido direto de protesto. Foi um dos episódios mais marcantes da resistência cultural ao regime.'],
    ['Trinta Anos de Mim Mesmo', 'livro', 1968, 'Reúne textos, aforismos e desenhos produzidos ao longo de três décadas de trabalho em revistas e jornais. Mostra o traço distintivo de Millôr: texto e desenho concebidos juntos, e a frase curta como forma de crítica política onde o artigo direto não passaria pela censura.']
  ],
  'Leo Buscaglia': [
    [
      'Amor',
      'livro',
      1972,
      'Nasceu das aulas do curso sem créditos que Buscaglia criou na Universidade do Sul da Califórnia após o suicídio de uma aluna. Trata do amor como capacidade que se aprende e se pratica, e não como sentimento que simplesmente acontece, e argumenta que a universidade formava profissionais competentes e pessoas despreparadas para lidar com afeto e perda. Foi criticado por sentimentalismo e lido por milhões.'
    ]
  ],
  'Guy Kawasaki': [
    [
      'A Arte do Começo',
      'livro',
      2004,
      'Manual prático para quem está fundando algo, escrito por quem participou do lançamento do Macintosh e depois investiu em empresas iniciantes. Cobre definição de produto, formação de equipe, captação de recursos, apresentação a investidores e construção de comunidade em torno da marca. Contém a regra 10-20-30 para apresentações e tornou-se leitura corrente entre fundadores sem experiência prévia.'
    ]
  ],
  'Scott Belsky': [
    [
      'Fazendo Ideias Acontecerem',
      'livro',
      2010,
      'Parte da constatação de que a diferença entre profissionais criativos que realizam e os que não realizam raramente está na qualidade das ideias, e quase sempre nos sistemas de organização e acompanhamento. Propõe organizar projetos em passos de ação, referências e itens de acompanhamento, e trata das forças comunitárias e da liderança necessárias para levar algo até o fim.'
    ],
    ['O Meio Confuso', 'livro', 2018, 'Trata da fase intermediária dos projetos, entre o entusiasmo do começo e a celebração do fim, período em que a maioria dos empreendimentos fracassa e sobre o qual quase não se escreve. Reúne observações práticas sobre suportar a queda de energia, ajustar rota sem abandonar o rumo e lidar com equipes em desgaste.']
  ],
  'Oliver Goldsmith2': [],
  'Arthur Ashe': [
    ['Days of Grace', 'memoria', 1993, 'Memórias escritas no último ano de vida, após o anúncio público de sua condição de portador de HIV. Ashe trata da carreira, do racismo que enfrentou desde as quadras públicas de Richmond, do ativismo contra o apartheid e da doença, e endereça um longo trecho à filha pequena. Foi concluído semanas antes de sua morte.'],
    ['A Hard Road to Glory', 'livro', 1988, 'História em três volumes do atleta negro nos Estados Unidos, resultado de anos de pesquisa que Ashe empreendeu ao descobrir que esse registro simplesmente não existia de forma organizada. Documenta atletas apagados dos anais esportivos e as barreiras institucionais que enfrentaram.']
  ],
  'André Kostolany': [
    [
      'A Arte de Pensar o Dinheiro',
      'livro',
      1999,
      'Último livro de Kostolany, escrito aos noventa e dois anos, reúne setenta e cinco anos de observação dos mercados. Sustenta que a bolsa é regida a curto prazo pela psicologia coletiva e a longo prazo pelos fatos econômicos, e apresenta a imagem do passeio com o cachorro para explicar a relação entre economia e cotações. É escrito em tom de conversa, com episódios das crises que atravessou.'
    ]
  ],
  'William Arthur Lewis': [
    [
      'A Teoria do Crescimento Econômico',
      'livro',
      1955,
      'Trata das causas do crescimento a partir de uma perspectiva histórica e comparativa ampla, cobrindo instituições, poupança, conhecimento técnico, população e governo. Escrito na descolonização, quando dezenas de países recém-independentes precisavam de um quadro que explicasse como sair da pobreza estrutural, foi por décadas o manual de referência do campo do desenvolvimento econômico.'
    ],
    [
      'Desenvolvimento Econômico com Oferta Ilimitada de Mão de Obra',
      'ensaio',
      1954,
      'Artigo que descreve economias com dois setores: um de subsistência, com excedente de trabalhadores e produtividade marginal muito baixa, e um moderno e capitalista, capaz de absorver essa mão de obra a salário quase constante e reinvestir o lucro. O crescimento ocorre por essa transferência até o ponto de virada em que o excedente se esgota. É a base do Nobel concedido ao autor em 1979.'
    ]
  ]
};

(function aplicarF14() {
  Object.entries(PANORAMAS_F14).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F14).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF14() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 14:', e);
    }
  };
})();

/* ================================================================
   FASE 15 — CONTINUAÇÃO DA FILA (autores 225 em diante)
   ================================================================ */
const PANORAMAS_F15 = {
  Augusto: {
    papel: 'Primeiro imperador romano (63 a.C.–14 d.C.)',
    resumo: 'Herdeiro de César aos dezoito anos, encerrou um século de guerras civis e fundou o principado mantendo as formas da república.',
    bio: [
      'Caio Otávio Turino nasceu em Roma em 23 de setembro de 63 a.C., numa família da ordem equestre com ligação indireta a Júlio César, de quem era sobrinho-neto. Tinha dezoito anos e estava na Ilíria quando soube do assassinato de César e da própria adoção póstuma como filho e herdeiro. Voltou a Roma contra o conselho de todos e reivindicou a herança política do nome.',
      'Formou com Marco Antônio e Lépido o segundo triunvirato, que promoveu proscrições sangrentas — entre as vítimas, Cícero. Derrotou os assassinos de César em Filipos, marginalizou Lépido e voltou-se contra Antônio, aliado a Cleópatra no Egito. A vitória naval em Ácio, em 31 a.C., encerrou as guerras civis que dilaceravam Roma havia quase um século.',
      'A partir de 27 a.C. construiu um regime sem precedente. Devolveu formalmente os poderes ao Senado e recebeu de volta, sob outros nomes, autoridade sobre as províncias e os exércitos. Recusou os títulos de rei e ditador e chamou a si mesmo de princeps, o primeiro entre os cidadãos. Manteve as magistraturas, o Senado e as assembleias, esvaziando-os de poder real. O nome Augusto — o venerável — foi concedido pelo Senado naquele ano.',
      'Governou por mais de quarenta anos. Reorganizou a administração provincial, criou um corpo de bombeiros e uma polícia urbana, reformou o exército e as finanças, promoveu obras públicas em escala e patrocinou, por meio de Mecenas, Virgílio, Horácio e Tito Lívio. Inaugurou a Pax Romana, período de estabilidade que duraria dois séculos. Foi também autoritário em matéria moral e exilou a própria filha Júlia. Morreu em Nola em 19 de agosto de 14 d.C.'
    ],
    contexto: 'Augusto resolveu um problema que Júlio César não resolvera: como concentrar poder sem provocar a reação que matou seu tio-avô. A resposta foi manter intactas as formas republicanas enquanto esvaziava seu conteúdo — arranjo que os historiadores chamam de principado e que definiu o Império Romano por três séculos.',
    contribuicoes: [
      'Encerrou as guerras civis romanas com a vitória em Ácio, em 31 a.C.',
      'Fundou o principado, regime que manteve as formas republicanas sob poder pessoal.',
      'Inaugurou a Pax Romana, dois séculos de estabilidade no Mediterrâneo.',
      'Reorganizou a administração provincial, o exército e as finanças do Estado romano.',
      'Patrocinou, por meio de Mecenas, a geração de Virgílio, Horácio e Tito Lívio.'
    ],
    cronologia: [
      ['63 a.C.', 'Nasce em Roma, em 23 de setembro.'],
      ['44 a.C.', 'Torna-se herdeiro de César após seu assassinato.'],
      ['31 a.C.', 'Vence Antônio e Cleópatra em Ácio.'],
      ['27 a.C.', 'Recebe do Senado o título de Augusto e funda o principado.'],
      ['9 d.C.', 'Derrota de Varo na floresta de Teutoburgo interrompe a expansão germânica.'],
      ['14 d.C.', 'Morre em Nola, em 19 de agosto.']
    ]
  },

  'Stanley Milgram': {
    papel: 'Psicólogo social norte-americano (1933–1984)',
    resumo: 'Demonstrou experimentalmente que pessoas comuns aplicam choques potencialmente letais quando uma autoridade manda.',
    bio: [
      'Stanley Milgram nasceu no Bronx, Nova York, em 15 de agosto de 1933, filho de imigrantes judeus da Europa Central. A destruição das comunidades judaicas europeias durante sua infância e adolescência é o pano de fundo declarado de sua pesquisa. Doutorou-se em Harvard sob orientação de Gordon Allport e trabalhou como assistente de Solomon Asch.',
      'Iniciou em 1961, em Yale, os experimentos que o tornariam conhecido, poucos meses após o início do julgamento de Adolf Eichmann em Jerusalém. Voluntários recrutados por anúncio eram instruídos a aplicar choques elétricos crescentes a outra pessoa sempre que ela errasse numa tarefa de memória. Não havia choque algum: o suposto aprendiz era um ator, e as reações de dor eram encenadas.',
      'A pergunta era até onde as pessoas iriam. Psiquiatras consultados previram que quase ninguém chegaria ao fim. Cerca de dois terços dos participantes aplicaram a voltagem máxima, muitos deles em evidente sofrimento, protestando e pedindo para parar, mas continuando diante da insistência calma do pesquisador. Milgram concluiu que a obediência não depende de crueldade individual, e sim da situação e da transferência de responsabilidade para a autoridade.',
      'A pesquisa gerou debate ético duradouro sobre o engano e o estresse impostos aos voluntários, e contribuiu para o endurecimento das regras de pesquisa com seres humanos. Estudos posteriores questionaram partes da metodologia e do relato dos resultados. Milgram conduziu também o experimento do mundo pequeno, origem da ideia dos seis graus de separação. Morreu em Nova York em 20 de dezembro de 1984, aos 51 anos.'
    ],
    contexto: 'Milgram trabalha na mesma pergunta que atravessou sua geração de pesquisadores judeus americanos: como pessoas comuns participaram do extermínio. Seus resultados dialogam diretamente com a formulação de Hannah Arendt sobre a banalidade do mal, e ambos deslocaram a explicação do caráter individual para a estrutura da situação.',
    contribuicoes: [
      'Realizou os experimentos de obediência à autoridade, entre os mais citados e discutidos da psicologia.',
      'Demonstrou o peso da situação e da delegação de responsabilidade sobre o comportamento moral.',
      'Conduziu o experimento do mundo pequeno, origem da ideia dos seis graus de separação.',
      'Sua pesquisa contribuiu para a criação de normas éticas em estudos com seres humanos.'
    ],
    cronologia: [
      [1933, 'Nasce no Bronx, Nova York, em 15 de agosto.'],
      [1961, 'Inicia os experimentos de obediência em Yale.'],
      [1967, 'Publica o estudo do mundo pequeno.'],
      [1974, 'Publica Obediência à Autoridade.'],
      [1984, 'Morre em Nova York, aos 51 anos.']
    ],
    nota: 'Os experimentos geraram debate ético duradouro, e estudos posteriores questionaram partes da metodologia e do relato dos resultados.'
  },

  'B. R. Ambedkar': {
    papel: 'Jurista e reformador social indiano (1891–1956)',
    resumo: 'Nasceu na casta dos intocáveis, redigiu a Constituição da Índia e converteu-se ao budismo com centenas de milhares de seguidores.',
    bio: [
      'Bhimrao Ramji Ambedkar nasceu em Mhow, na Índia central, em 14 de abril de 1891, na comunidade mahar, classificada como intocável. Na escola, era obrigado a sentar-se separado no chão e não podia beber da mesma fonte que os colegas. Foi um dos primeiros dalits a concluir o ensino superior no país.',
      'Estudou com bolsas na Universidade de Columbia, em Nova York, onde foi aluno de John Dewey, e na London School of Economics, obtendo doutorados nas duas instituições e qualificando-se como advogado. Voltou à Índia com uma formação acadêmica superior à de quase todos os líderes nacionalistas e, ainda assim, teve dificuldade em alugar moradia por causa da casta.',
      'Organizou os dalits politicamente e travou embate público com Gandhi. Divergiam frontalmente: Gandhi queria reformar o hinduísmo por dentro e tratava a intocabilidade como distorção; Ambedkar sustentava que ela era estrutural ao sistema de castas e que nenhuma reforma interna a eliminaria. O conflito culminou no Pacto de Poona, em 1932, quando Gandhi entrou em greve de fome contra eleitorados separados para os dalits.',
      'Foi o primeiro ministro da Justiça da Índia independente e presidiu o comitê de redação da Constituição, promulgada em 1950, que aboliu a intocabilidade, instituiu direitos fundamentais e criou o sistema de reservas para castas e tribos historicamente excluídas. Renunciou ao governo em 1951 por divergências sobre o código de direitos das mulheres hindus. Em outubro de 1956, poucas semanas antes de morrer, converteu-se ao budismo numa cerimônia com centenas de milhares de dalits em Nagpur, iniciando um movimento que continua. Morreu em Délhi em 6 de dezembro de 1956.'
    ],
    contexto: 'Ambedkar é a maior voz da crítica ao sistema de castas feita de dentro dele. Sua importância no debate indiano cresceu continuamente desde a morte, e ele é hoje uma das figuras mais reverenciadas do país — reconhecimento que não teve em vida, quando foi tratado como divisionista por boa parte do movimento nacionalista.',
    contribuicoes: [
      'Presidiu o comitê de redação da Constituição da Índia, promulgada em 1950.',
      'Foi o primeiro ministro da Justiça da Índia independente.',
      'Formulou a crítica sistemática ao sistema de castas em A Aniquilação das Castas.',
      'Instituiu o sistema constitucional de reservas para castas e tribos historicamente excluídas.',
      'Fundou o movimento budista dalit com a conversão coletiva de Nagpur, em 1956.'
    ],
    cronologia: [
      [1891, 'Nasce em Mhow, em 14 de abril.'],
      [1916, 'Conclui estudos na Universidade de Columbia.'],
      [1932, 'Assina o Pacto de Poona após a greve de fome de Gandhi.'],
      [1936, 'Publica A Aniquilação das Castas.'],
      [1947, 'Torna-se ministro da Justiça e preside o comitê de redação constitucional.'],
      [1950, 'A Constituição da Índia é promulgada.'],
      [1956, 'Converte-se ao budismo em Nagpur e morre em Délhi.']
    ]
  },

  'Dwight D. Eisenhower': {
    papel: 'General e político norte-americano, 34º presidente dos Estados Unidos (1890–1969)',
    resumo: 'Comandou o desembarque na Normandia e, ao deixar a presidência, alertou o país contra o complexo industrial-militar.',
    bio: [
      'Dwight David Eisenhower nasceu em Denison, Texas, em 14 de outubro de 1890, e cresceu em Abilene, Kansas, numa família pobre de tradição pacifista. Entrou em West Point sobretudo pela gratuidade do ensino. Não combateu na Primeira Guerra, o que o frustrou profundamente, e passou os anos entre guerras em funções de estado-maior, servindo sob MacArthur nas Filipinas.',
      'A ascensão foi rápida após Pearl Harbor. Marshall o promoveu sobre centenas de oficiais mais antigos, e ele comandou as operações no Norte da África, na Sicília e na Itália antes de ser designado comandante supremo das Forças Expedicionárias Aliadas. Conduziu o desembarque na Normandia em 6 de junho de 1944, decisão que tomou sob previsão meteorológica incerta, tendo redigido de antemão uma nota assumindo a responsabilidade caso a operação fracassasse.',
      'Eleito presidente em 1952, encerrou a Guerra da Coreia, resistiu a pressões por intervenções militares diretas em várias crises e manteve os gastos federais sob controle. Assinou a legislação que criou o sistema interestadual de rodovias, a maior obra pública da história americana, e enviou tropas federais a Little Rock em 1957 para garantir a dessegregação escolar decidida pela Suprema Corte. Seu governo também autorizou operações encobertas da CIA que derrubaram governos no Irã e na Guatemala.',
      'No discurso de despedida, em janeiro de 1961, alertou que a conjunção de uma indústria de armamentos permanente e de um establishment militar imenso era nova na experiência americana e que o país precisava se precaver contra a influência injustificada do que chamou de complexo industrial-militar — advertência feita por um general de cinco estrelas e que se tornou uma das mais citadas da história política dos Estados Unidos. Morreu em Washington em 28 de março de 1969.'
    ],
    contexto: 'Eisenhower é uma figura de contenção num período de escalada: presidiu o auge da Guerra Fria evitando o confronto direto que muitos em seu entorno defendiam, ao mesmo tempo em que autorizava intervenções encobertas cujas consequências duraram décadas. Sua advertência final é lida hoje como a autocrítica mais lúcida do sistema que ele próprio ajudou a construir.',
    contribuicoes: [
      'Comandou como general supremo o desembarque na Normandia e a campanha aliada na Europa Ocidental.',
      'Foi o 34º presidente dos Estados Unidos, entre 1953 e 1961.',
      'Encerrou a Guerra da Coreia em 1953.',
      'Criou o sistema interestadual de rodovias, maior obra pública da história americana.',
      'Enviou tropas federais para garantir a dessegregação escolar em Little Rock, em 1957.',
      'Alertou no discurso de despedida contra o complexo industrial-militar.'
    ],
    cronologia: [
      [1890, 'Nasce em Denison, Texas, em 14 de outubro.'],
      [1943, 'É nomeado comandante supremo das Forças Expedicionárias Aliadas.'],
      [1944, 'Conduz o desembarque na Normandia, em 6 de junho.'],
      [1953, 'Assume a presidência e encerra a Guerra da Coreia.'],
      [1956, 'Assina a lei do sistema interestadual de rodovias.'],
      [1957, 'Envia tropas federais a Little Rock.'],
      [1961, 'Faz o discurso de despedida sobre o complexo industrial-militar.'],
      [1969, 'Morre em Washington.']
    ]
  },

  'Dom Pedro II': {
    papel: 'Imperador do Brasil (1825–1891)',
    resumo: 'Governou o Brasil por quase meio século, assinou a abolição por meio da filha e morreu no exílio sem resistir à República.',
    bio: [
      'Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga nasceu no Rio de Janeiro em 2 de dezembro de 1825. Perdeu a mãe, a imperatriz Leopoldina, com um ano, e o pai abdicou e voltou a Portugal quando ele tinha cinco. Foi criado por tutores num regime de estudo extremamente rigoroso, isolado de outras crianças.',
      'Foi declarado maior aos catorze anos, em 1840, pelo Golpe da Maioridade, manobra política para encerrar o período regencial marcado por revoltas provinciais. Governou até 1889, o reinado mais longo da história do país.',
      'Seu período consolidou a unidade territorial do Brasil e produziu estabilidade institucional incomum na América Latina, com alternância regular entre liberais e conservadores no gabinete — sistema que dependia do Poder Moderador exercido por ele. Financiou a instalação de escolas, observatórios, o Colégio Pedro II e o Instituto Histórico e Geográfico, foi um dos primeiros a apoiar Alexander Graham Bell e correspondeu-se com cientistas e escritores europeus. Conduziu o país na Guerra do Paraguai, o conflito mais longo e sangrento da América do Sul.',
      'A escravidão é o ponto central de seu julgamento histórico. Era pessoalmente contrário a ela e trabalhou por uma extinção lenta e indenizada — Lei do Ventre Livre em 1871, Lei dos Sexagenários em 1885 —, mas o processo levou décadas. A Lei Áurea foi assinada em 13 de maio de 1888 pela princesa Isabel, na condição de regente, com ele em tratamento na Europa. O golpe militar de 15 de novembro de 1889 o depôs; ele recusou qualquer resistência armada e embarcou para a Europa dois dias depois. Morreu num hotel em Paris em 5 de dezembro de 1891.'
    ],
    contexto:
      'Pedro II presidiu a passagem do Brasil de colônia recém-emancipada a Estado nacional consolidado, mantendo a unidade de um território que poderia ter se fragmentado como a América espanhola. Fez isso sobre uma economia escravista que sustentava a elite que o apoiava, e foi essa contradição — junto ao descontentamento militar e à ruptura com os proprietários após a abolição — que derrubou o regime.',
    contribuicoes: ['Governou o Brasil por 49 anos, consolidando a unidade territorial do país.', 'Manteve estabilidade institucional com alternância regular de gabinetes.', 'Sancionou a Lei do Ventre Livre (1871) e a Lei dos Sexagenários (1885).', 'Financiou instituições de ensino, ciência e cultura, entre elas o Colégio Pedro II.', 'Conduziu o país durante a Guerra do Paraguai.'],
    cronologia: [
      [1825, 'Nasce no Rio de Janeiro, em 2 de dezembro.'],
      [1840, 'É declarado maior pelo Golpe da Maioridade.'],
      [1864, 'Início da Guerra do Paraguai.'],
      [1871, 'Sanciona a Lei do Ventre Livre.'],
      [1888, 'A princesa Isabel assina a Lei Áurea, na regência.'],
      [1889, 'É deposto pelo golpe republicano e parte para o exílio.'],
      [1891, 'Morre em Paris.']
    ]
  },

  'Georg Simmel': {
    papel: 'Sociólogo e filósofo alemão (1858–1918)',
    resumo: 'Fundou a sociologia das formas de interação e escreveu a análise clássica sobre a vida mental na grande cidade.',
    bio: [
      'Georg Simmel nasceu em Berlim em 1º de março de 1858, o mais novo de sete filhos de um comerciante judeu convertido ao cristianismo. Ficou órfão de pai aos dezesseis anos e foi criado sob tutela, com uma herança que lhe garantiu independência financeira — necessária, já que sua carreira universitária foi obstruída por décadas.',
      'Lecionou por quinze anos em Berlim como Privatdozent, sem salário fixo, remunerado apenas pelas taxas dos alunos. Suas aulas eram acontecimentos culturais, com plateias que incluíam artistas, jornalistas e estrangeiros. Ainda assim, foi rejeitado repetidas vezes para cátedra, por antissemitismo declarado em pareceres e pela desconfiança acadêmica diante de um pensador que escrevia sobre moda, dinheiro, aventura, coquetismo e a alça de uma xícara. Só obteve cátedra em 1914, em Estrasburgo, quatro anos antes de morrer.',
      'Sua proposta metodológica é distinta da de Durkheim e Weber. Simmel argumentou que o objeto da sociologia não são grandes instituições, e sim as formas de interação — conflito, troca, subordinação, segredo, sociabilidade — que se repetem em conteúdos sociais completamente diferentes. Analisou figuras sociais como o estrangeiro, o pobre e o avarento como posições estruturais, não como tipos psicológicos.',
      'Filosofia do Dinheiro, de 1900, examina como a economia monetária transforma a vida mental: ao tornar tudo comparável em quantidade, o dinheiro produz liberdade individual e, ao mesmo tempo, indiferença e cálculo. As Grandes Cidades e a Vida do Espírito, de 1903, descreve a atitude blasé do morador urbano como defesa psíquica contra o excesso de estímulos. Morreu em Estrasburgo em 26 de setembro de 1918.'
    ],
    contexto: 'Simmel escreve na Berlim que se tornou metrópole industrial em poucas décadas. Sua sociologia nasce dessa experiência concreta e antecipa temas centrais do século XX — o indivíduo diante da multidão, a saturação de estímulos, a mediação de tudo pelo dinheiro. Foi lido por Lukács, Bloch, Benjamin e pela Escola de Chicago.',
    contribuicoes: ['Fundou a sociologia das formas de interação social.', 'Escreveu Filosofia do Dinheiro (1900).', 'Escreveu As Grandes Cidades e a Vida do Espírito (1903), texto clássico da sociologia urbana.', 'Analisou figuras sociais como o estrangeiro e o pobre como posições estruturais.', 'Influenciou diretamente Lukács, Walter Benjamin e a Escola de Chicago.'],
    cronologia: [
      [1858, 'Nasce em Berlim, em 1º de março.'],
      [1885, 'Torna-se Privatdozent na Universidade de Berlim.'],
      [1900, 'Publica Filosofia do Dinheiro.'],
      [1903, 'Publica As Grandes Cidades e a Vida do Espírito.'],
      [1908, 'Publica Sociologia.'],
      [1914, 'Obtém cátedra em Estrasburgo.'],
      [1918, 'Morre em Estrasburgo.']
    ]
  },

  'Mihaly Csikszentmihalyi': {
    papel: 'Psicólogo húngaro-americano (1934–2021)',
    resumo: 'Descreveu o estado de fluxo, a absorção completa numa atividade, e ajudou a fundar a psicologia positiva.',
    bio: [
      'Mihály Csíkszentmihályi nasceu em Fiume, então parte da Itália e hoje Rijeka, na Croácia, em 29 de setembro de 1934, filho de um diplomata húngaro. A Segunda Guerra desfez a família: dois irmãos morreram ou desapareceram, e o pai perdeu o posto após a tomada comunista da Hungria, passando a administrar um restaurante em Roma.',
      'Aos dezesseis anos, numa Suíça onde esperava por notícias da família, assistiu por acaso a uma conferência de Carl Jung sobre os discos voadores como fenômeno psicológico coletivo do pós-guerra. O episódio o levou à psicologia. Emigrou para os Estados Unidos aos vinte e dois anos, quase sem dinheiro e sem falar bem inglês, e formou-se na Universidade de Chicago.',
      'Sua pesquisa partiu da observação de artistas que pintavam por horas em absorção total e perdiam o interesse pelo quadro assim que ele ficava pronto — ou seja, não trabalhavam pela recompensa. Desenvolveu o método de amostragem de experiência, com participantes carregando dispositivos que os interrompiam em momentos aleatórios do dia para registrar o que faziam e como se sentiam.',
      'Do material emergiu o conceito de fluxo: o estado em que a pessoa está tão envolvida numa atividade que perde a noção do tempo e de si mesma. Ocorre quando o desafio da tarefa corresponde ao nível de habilidade — desafio demais gera ansiedade, de menos gera tédio — e quando há metas claras e retorno imediato. Publicou Fluxo em 1990. Com Martin Seligman, fundou o movimento da psicologia positiva, voltado ao estudo do que faz a vida valer a pena e não apenas da patologia. Morreu na Califórnia em 20 de outubro de 2021.'
    ],
    contexto: 'Csikszentmihalyi formula sua pesquisa numa psicologia que havia se organizado quase inteiramente em torno do transtorno e do sofrimento. Sua pergunta era a oposta: em que momentos as pessoas relatam estar plenamente vivas? A resposta, ancorada em dados de milhares de participantes, deu base empírica a um campo que antes era só especulação.',
    contribuicoes: ['Formulou o conceito de fluxo e as condições em que ele ocorre.', 'Desenvolveu o método de amostragem de experiência para pesquisa em tempo real.', 'Cofundou com Martin Seligman o movimento da psicologia positiva.', 'Escreveu Fluxo (1990) e Criatividade.', 'Aplicou a teoria do fluxo à educação, ao trabalho, ao esporte e ao design.'],
    cronologia: [
      [1934, 'Nasce em Fiume, em 29 de setembro.'],
      [1956, 'Emigra para os Estados Unidos.'],
      [1975, 'Publica os primeiros estudos sobre fluxo.'],
      [1990, 'Publica Fluxo.'],
      [2000, 'Publica com Seligman o artigo fundador da psicologia positiva.'],
      [2021, 'Morre na Califórnia.']
    ]
  },

  'Andy Grove': {
    papel: 'Engenheiro e executivo húngaro-americano (1936–2016)',
    resumo: 'Sobreviveu ao Holocausto e à invasão soviética, e transformou a Intel na maior fabricante de microprocessadores do mundo.',
    bio: [
      'András István Gróf nasceu em Budapeste em 2 de setembro de 1936, em família judaica. Perdeu parte da audição por escarlatina na infância. Durante a ocupação nazista, ele e a mãe sobreviveram escondidos com identidades falsas; o pai foi levado a trabalhos forçados e a família só se reuniu após a guerra. Em 1956, aos vinte anos, atravessou a fronteira a pé durante a repressão soviética à revolução húngara e chegou aos Estados Unidos como refugiado.',
      'Formou-se em engenharia química no City College de Nova York, aprendendo inglês simultaneamente, e doutorou-se em Berkeley. Entrou na Fairchild Semiconductor e, em 1968, foi o terceiro funcionário da Intel, fundada por Robert Noyce e Gordon Moore.',
      'Presidiu a empresa a partir de 1987. Sua decisão mais consequente foi abandonar o mercado de memórias, que originara a Intel mas estava sendo dominado por fabricantes japoneses, e concentrar tudo em microprocessadores. Descreveu o processo perguntando a si mesmo o que faria um novo presidente contratado de fora — e concluindo que a resposta era exatamente aquilo que ele hesitava em fazer.',
      'Formulou o conceito de ponto de inflexão estratégico, o momento em que os fundamentos de um negócio mudam e a empresa precisa se reinventar ou desaparecer. Seu livro Só os Paranoicos Sobrevivem, de 1996, trata desse tema. Também sistematizou em Administração de Alta Performance o método de objetivos e resultados-chave, depois adotado no Google e em boa parte da indústria de tecnologia. Enfrentou publicamente um câncer de próstata, escrevendo sobre o próprio tratamento, e financiou pesquisa sobre Parkinson, doença que tinha. Morreu na Califórnia em 21 de março de 2016.'
    ],
    contexto: 'Grove conduziu a Intel na transição em que o microprocessador deixou de ser componente e passou a ser o coração da computação pessoal. Sua obra escrita é incomum entre executivos por descrever com franqueza os momentos de indecisão e erro, e não apenas os acertos.',
    contribuicoes: [
      'Conduziu a Intel à liderança mundial em microprocessadores.',
      'Tomou a decisão de abandonar o mercado de memórias em favor dos processadores.',
      'Formulou o conceito de ponto de inflexão estratégico.',
      'Sistematizou o método de objetivos e resultados-chave, adotado depois em toda a indústria de tecnologia.',
      'Escreveu Administração de Alta Performance e Só os Paranoicos Sobrevivem.'
    ],
    cronologia: [
      [1936, 'Nasce em Budapeste, em 2 de setembro.'],
      [1956, 'Foge da Hungria após a invasão soviética.'],
      [1968, 'Entra na Intel como terceiro funcionário.'],
      [1985, 'Conduz a saída do mercado de memórias.'],
      [1987, 'Torna-se presidente executivo da Intel.'],
      [1996, 'Publica Só os Paranoicos Sobrevivem.'],
      [2016, 'Morre na Califórnia.']
    ]
  },

  'Harry Markowitz': {
    papel: 'Economista norte-americano (1927–2023)',
    resumo: 'Provou matematicamente por que não se deve pôr tudo num único investimento, e ganhou o Nobel por isso.',
    bio: [
      'Harry Max Markowitz nasceu em Chicago em 24 de agosto de 1927, filho único de donos de uma pequena mercearia. Interessou-se por filosofia e depois por economia na Universidade de Chicago, onde estudou sob Milton Friedman, Jacob Marschak e Tjalling Koopmans.',
      'A ideia central veio enquanto procurava tema de tese e conversava, na sala de espera de um professor, com um corretor que sugeriu aplicar matemática ao mercado de ações. Lendo sobre avaliação de investimentos, Markowitz notou que a teoria existente tratava apenas do retorno esperado — e que, se isso bastasse, o investidor racional deveria colocar tudo numa única ação, a de maior retorno esperado, o que ninguém fazia.',
      'O artigo Seleção de Carteiras, publicado em 1952 com catorze páginas, resolveu o problema introduzindo o risco como variável e medindo-o pela variância. Markowitz mostrou que o risco de uma carteira não é a média dos riscos individuais: depende da correlação entre os ativos. Combinar ativos que não se movem juntos reduz o risco total sem reduzir proporcionalmente o retorno esperado. Daí decorre a fronteira eficiente, o conjunto de carteiras que oferecem o maior retorno para cada nível de risco.',
      'A banca de doutorado quase rejeitou a tese sob o argumento de que não era economia. O trabalho fundou a teoria moderna de carteiras e é a base de praticamente toda a gestão profissional de investimentos. Recebeu o Nobel de Economia em 1990, com Merton Miller e William Sharpe. Trabalhou também com programação de computadores e simulação, criando a linguagem SIMSCRIPT. Morreu em San Diego em 22 de junho de 2023, aos 95 anos.'
    ],
    contexto: 'Antes de Markowitz, a seleção de investimentos era matéria de julgamento e experiência, sem tratamento formal do risco. Ao transformar diversificação de intuição em resultado matemático, ele criou o vocabulário — risco, correlação, fronteira eficiente — que a indústria financeira usa desde então.',
    contribuicoes: ['Criou a teoria moderna de carteiras, no artigo Seleção de Carteiras (1952).', 'Introduziu a medida formal do risco e o papel da correlação entre ativos.', 'Formulou o conceito de fronteira eficiente.', 'Recebeu o Prêmio Nobel de Economia em 1990.', 'Criou a linguagem de simulação SIMSCRIPT.'],
    cronologia: [
      [1927, 'Nasce em Chicago, em 24 de agosto.'],
      [1952, 'Publica Seleção de Carteiras.'],
      [1959, 'Publica o livro que desenvolve a teoria de carteiras.'],
      [1990, 'Recebe o Prêmio Nobel de Economia.'],
      [2023, 'Morre em San Diego, aos 95 anos.']
    ]
  },

  'John Templeton': {
    papel: 'Investidor e filantropo americano-britânico (1912–2008)',
    resumo: 'Comprou ações a menos de um dólar no início da Segunda Guerra, foi pioneiro do investimento global e criou um prêmio maior que o Nobel.',
    bio: [
      'John Marks Templeton nasceu em Winchester, Tennessee, em 29 de novembro de 1912. Formou-se em Yale — trabalhando e jogando pôquer para se sustentar depois que o pai não pôde mais pagar a mensalidade — e estudou direito em Oxford como bolsista Rhodes.',
      'Em 1939, com a Europa entrando em guerra e o pessimismo dominando o mercado, tomou emprestados dez mil dólares e comprou cem ações de cada empresa negociada abaixo de um dólar na bolsa de Nova York, incluindo dezenas em concordata. Quatro anos depois, quase todas haviam se valorizado. O episódio fixou seu método: comprar no ponto de máximo pessimismo, quando os preços refletem medo e não fundamentos.',
      'Foi pioneiro do investimento internacional numa época em que investidores americanos raramente olhavam para fora. Investiu no Japão nos anos 1960, quando o mercado japonês era considerado exótico e barato demais para ser levado a sério, com resultados excepcionais. Seu fundo Templeton Growth teve retorno anual médio próximo de quinze por cento ao longo de quase quatro décadas.',
      'Renunciou à cidadania americana e naturalizou-se britânico, estabelecendo-se nas Bahamas. Vendeu seus fundos em 1992 e dedicou-se à filantropia. Criou em 1972 o Prêmio Templeton, para trabalhos que ampliem a compreensão das dimensões espirituais da vida, deliberadamente dotado com valor superior ao do Nobel — decisão que ele justificava dizendo que a espiritualidade não deveria valer menos que a ciência. Morreu em Nassau em 8 de julho de 2008.'
    ],
    contexto: 'Templeton é o caso mais citado de investimento contrário à corrente: sua tese central é que o preço mais baixo ocorre exatamente quando o pessimismo é máximo, e que o investidor precisa comprar quando isso é psicologicamente mais difícil. A longevidade de seu desempenho é o que sustenta a reputação do método.',
    contribuicoes: ['Foi pioneiro do investimento internacional diversificado entre países.', 'Formulou o princípio de comprar no ponto de máximo pessimismo.', 'Geriu o fundo Templeton Growth com desempenho excepcional por quase quatro décadas.', 'Criou o Prêmio Templeton, dotado com valor superior ao do Nobel.', 'Estabeleceu a Fundação John Templeton, dedicada a ciência, religião e propósito.'],
    cronologia: [
      [1912, 'Nasce em Winchester, Tennessee, em 29 de novembro.'],
      [1939, 'Compra ações abaixo de um dólar no início da guerra.'],
      [1954, 'Cria o fundo Templeton Growth.'],
      [1972, 'Institui o Prêmio Templeton.'],
      [1992, 'Vende seus fundos e dedica-se à filantropia.'],
      [2008, 'Morre em Nassau, nas Bahamas.']
    ]
  },

  'Al Ries e Jack Trout': {
    papel: 'Estrategistas de marketing norte-americanos',
    resumo: 'Criaram o conceito de posicionamento e mudaram a forma como marcas são construídas.',
    bio: [
      'Al Ries (1926-2022) nasceu em Nova York, formou-se em Indiana e trabalhou em publicidade na General Electric antes de abrir a própria agência em 1963. Jack Trout (1935-2017), também nova-iorquino, trabalhou em publicidade na General Electric e entrou na agência de Ries em 1967. A parceria duraria mais de vinte e cinco anos.',
      'Em 1972 publicaram na revista Advertising Age uma série de artigos com o título A Era do Posicionamento. A tese rompia com a prática dominante, que se concentrava no produto e na mensagem. Ries e Trout argumentaram que a batalha não é travada no mercado nem no produto, e sim na mente do consumidor, já saturada de mensagens — e que o objetivo da comunicação não é criar algo novo, mas ocupar e reordenar o que já existe ali.',
      'Posicionamento: A Batalha por Sua Mente, de 1981, desenvolveu o argumento. Suas recomendações práticas incluem ser o primeiro numa categoria, ou criar uma categoria nova em que se possa ser primeiro; assumir a posição real que se ocupa em vez de negá-la; e evitar a extensão indiscriminada da marca, que segundo eles dilui aquilo que a marca significa.',
      'As 22 Consagradas Leis do Marketing, de 1993, condensou o pensamento dos dois em princípios curtos. Ries seguiu depois escrevendo com a filha Laura, e Trout continuou a defender a especialização e a diferenciação como condições de sobrevivência num mercado saturado. O vocabulário que criaram — posicionamento, categoria, mente do consumidor — tornou-se padrão em marketing.'
    ],
    contexto: 'A dupla escreve no momento em que a publicidade americana passou de escassez a excesso de mensagens. Seu deslocamento — do produto para a percepção — corresponde a essa mudança e é a origem conceitual do branding moderno.',
    contribuicoes: ['Criaram o conceito de posicionamento em marketing, em 1972.', 'Escreveram Posicionamento: A Batalha por Sua Mente (1981).', 'Escreveram As 22 Consagradas Leis do Marketing (1993).', 'Formularam a crítica à extensão indiscriminada de marca.', 'Deslocaram o foco da comunicação do produto para a percepção do consumidor.'],
    cronologia: [
      [1967, 'Trout entra na agência de Al Ries.'],
      [1972, 'Publicam a série A Era do Posicionamento na Advertising Age.'],
      [1981, 'Publicam Posicionamento: A Batalha por Sua Mente.'],
      [1993, 'Publicam As 22 Consagradas Leis do Marketing.'],
      [2017, 'Morre Jack Trout.'],
      [2022, 'Morre Al Ries.']
    ]
  },

  'Sheryl Sandberg': {
    papel: 'Executiva e escritora norte-americana (1969–)',
    resumo: 'Construiu o modelo de negócios do Facebook e escreveu Faça Acontecer, livro que reabriu o debate sobre mulheres e liderança.',
    bio: [
      'Sheryl Kara Sandberg nasceu em Washington em 28 de agosto de 1969 e cresceu em Miami. Formou-se em economia em Harvard, onde foi aluna de Larry Summers, e trabalhou com ele no Banco Mundial e depois no Departamento do Tesouro, onde foi chefe de gabinete.',
      'Mudou-se para o Vale do Silício em 2001 e entrou no Google, então com poucas centenas de funcionários, para construir a operação de vendas de anúncios. A área que estruturou tornou-se a principal fonte de receita da empresa. Em 2008 foi contratada por Mark Zuckerberg como diretora de operações do Facebook, com a tarefa explícita de transformar uma rede social em negócio.',
      'Construiu o sistema de publicidade segmentada que sustentaria a empresa e a conduziu de prejuízo a lucro e à abertura de capital. Permaneceu no cargo catorze anos, período que inclui também o caso Cambridge Analytica e as investigações sobre desinformação e efeitos das plataformas, pelos quais foi cobrada publicamente. Deixou a função em 2022.',
      'Faça Acontecer, de 2013, argumenta que barreiras internas — hesitação em se candidatar, em negociar salário, em ocupar espaço — somam-se às externas para manter mulheres fora das posições de liderança. O livro vendeu milhões de exemplares e gerou debate intenso, com críticas de que responsabiliza individualmente as mulheres por um problema estrutural e fala de uma posição de privilégio. Após a morte súbita do marido, Dave Goldberg, em 2015, escreveu Plano B, sobre luto e resiliência, com o psicólogo Adam Grant.'
    ],
    contexto: 'Sandberg tornou-se a executiva mais visível do Vale do Silício num período em que a sub-representação de mulheres na tecnologia entrava no debate público. Sua figura é inseparável das duas coisas: o impulso que deu a essa discussão e a responsabilidade sobre o modelo de negócios de publicidade segmentada que se tornou o centro da crítica às plataformas.',
    contribuicoes: ['Estruturou a operação de vendas de anúncios do Google.', 'Construiu como diretora de operações o modelo de negócios do Facebook.', 'Escreveu Faça Acontecer (2013), que reabriu o debate público sobre mulheres e liderança.', 'Criou a organização LeanIn.Org, com círculos de apoio profissional para mulheres.', 'Escreveu Plano B (2017), com Adam Grant, sobre luto e resiliência.'],
    cronologia: [
      [1969, 'Nasce em Washington, em 28 de agosto.'],
      [2001, 'Entra no Google para construir a operação de anúncios.'],
      [2008, 'Torna-se diretora de operações do Facebook.'],
      [2013, 'Publica Faça Acontecer.'],
      [2017, 'Publica Plano B.'],
      [2022, 'Deixa o cargo na Meta.']
    ]
  },

  'Michelle Bachelet': {
    papel: 'Médica e política chilena (1951–)',
    resumo: 'Torturada pela ditadura de Pinochet, tornou-se a primeira presidenta do Chile e depois alta-comissária da ONU para direitos humanos.',
    bio: [
      'Verónica Michelle Bachelet Jeria nasceu em Santiago em 29 de setembro de 1951, filha de um general da Força Aérea. Após o golpe de 1973, o pai foi preso por permanecer leal ao governo constitucional de Salvador Allende e morreu na prisão em consequência das torturas sofridas. Em 1975, Michelle e a mãe foram detidas e levadas a Villa Grimaldi, centro clandestino de tortura, e depois exiladas — passaram pela Austrália e pela Alemanha Oriental.',
      'Voltou ao Chile em 1979 e concluiu medicina, especializando-se em pediatria e epidemiologia. Trabalhou com filhos de desaparecidos políticos. Após a redemocratização, estudou estratégia militar e ocupou cargos no Ministério da Saúde.',
      'Foi ministra da Saúde e, em 2002, ministra da Defesa — a primeira mulher a ocupar o cargo na América Latina, e num país cujas Forças Armadas haviam torturado sua família. Elegeu-se presidenta em 2006, tornando-se a primeira mulher a chefiar o Estado chileno, e cumpriu segundo mandato entre 2014 e 2018.',
      'Seus governos criaram uma reforma previdenciária com pilar solidário, ampliaram a rede de creches públicas, instituíram cobertura universal para um conjunto de doenças e, no segundo mandato, promoveram reforma educacional, reforma tributária, despenalização parcial do aborto e a lei de união civil. Entre os mandatos, foi a primeira diretora-executiva da ONU Mulheres. Em 2018 assumiu como alta-comissária das Nações Unidas para os Direitos Humanos, cargo em que permaneceu até 2022 e no qual seu relatório sobre Xinjiang gerou controvérsia internacional.'
    ],
    contexto: 'Bachelet representa a geração que sofreu a repressão e depois governou o país que a produziu, sem romper a ordem institucional herdada. Essa continuidade — governar sob a Constituição escrita pela ditadura enquanto se amplia a proteção social — define tanto seus resultados quanto as críticas que recebeu dos dois lados.',
    contribuicoes: ['Foi a primeira mulher a presidir o Chile, em dois mandatos.', 'Foi a primeira mulher ministra da Defesa da América Latina.', 'Criou o pilar solidário da previdência chilena e ampliou a rede pública de creches.', 'Foi a primeira diretora-executiva da ONU Mulheres.', 'Foi alta-comissária das Nações Unidas para os Direitos Humanos entre 2018 e 2022.'],
    cronologia: [
      [1951, 'Nasce em Santiago, em 29 de setembro.'],
      [1974, 'O pai morre na prisão após torturas.'],
      [1975, 'É detida em Villa Grimaldi e depois exilada.'],
      [2002, 'Torna-se ministra da Defesa.'],
      [2006, 'Assume a presidência do Chile.'],
      [2010, 'Torna-se diretora-executiva da ONU Mulheres.'],
      [2014, 'Inicia o segundo mandato presidencial.'],
      [2018, 'Assume como alta-comissária da ONU para Direitos Humanos.']
    ]
  },

  'Louisa May Alcott': {
    papel: 'Escritora norte-americana (1832–1888)',
    resumo: 'Escreveu Mulherzinhas por encomenda editorial, para sustentar a família, e criou um clássico da literatura.',
    bio: [
      'Louisa May Alcott nasceu em Germantown, Pensilvânia, em 29 de novembro de 1832, segunda de quatro filhas. O pai, Amos Bronson Alcott, era filósofo transcendentalista e educador de ideias avançadas e absoluta incapacidade de sustentar a família — chegou a levar todos a viver numa comunidade utópica vegetariana que fracassou em poucos meses e quase os matou de fome.',
      'Cresceu em Concord, Massachusetts, cercada por Emerson, Thoreau e Hawthorne, que foram vizinhos e mestres informais. Trabalhou desde a adolescência como costureira, lavadeira, professora e empregada doméstica para ajudar em casa. Foi enfermeira voluntária na Guerra Civil e contraiu febre tifoide; o tratamento com calomelano, à base de mercúrio, deixou sequelas pelo resto da vida.',
      'Publicou por anos contos sensacionalistas sob pseudônimo — histórias de vingança, drogas e mulheres perigosas —, que rendiam mais do que a literatura séria e que só foram atribuídas a ela no século XX. Um editor pediu-lhe então um livro para meninas. Alcott, que não gostava de meninas nem conhecia muitas além das irmãs, escreveu Mulherzinhas em poucas semanas, em 1868.',
      'O livro, baseado na própria família, foi um sucesso imediato e resolveu definitivamente as dívidas dos Alcott. Jo March, a irmã escritora e insubmissa, tornou-se uma das personagens mais influentes da literatura de língua inglesa e foi citada por gerações de escritoras como a primeira mulher em quem se reconheceram. Alcott recusou casar Jo com o vizinho Laurie, apesar da pressão de leitores, e nunca se casou. Foi sufragista e abolicionista. Morreu em Boston em 6 de março de 1888, dois dias após a morte do pai.'
    ],
    contexto: 'Alcott escreve numa Nova Inglaterra em que a literatura para meninas era estritamente moralizante e a carreira literária feminina, marginal. Mulherzinhas rompe com a fórmula ao apresentar uma protagonista que quer escrever, ganhar dinheiro e recusar o casamento como destino — e o faz dentro de um livro que o mercado encomendou como leitura doméstica edificante.',
    contribuicoes: ['Escreveu Mulherzinhas (1868), um dos clássicos mais lidos da literatura em língua inglesa.', 'Criou Jo March, referência declarada para gerações de escritoras.', 'Escreveu Homenzinhos e Os Rapazes de Jo, continuações da saga.', 'Publicou sob pseudônimo uma obra sensacionalista redescoberta no século XX.', 'Militou pelo sufrágio feminino e pelo abolicionismo.'],
    cronologia: [
      [1832, 'Nasce em Germantown, Pensilvânia, em 29 de novembro.'],
      [1862, 'Serve como enfermeira na Guerra Civil e contrai febre tifoide.'],
      [1863, 'Publica Esboços de Hospital.'],
      [1868, 'Publica Mulherzinhas.'],
      [1871, 'Publica Homenzinhos.'],
      [1888, 'Morre em Boston.']
    ]
  },

  'James M. Barrie': {
    papel: 'Escritor e dramaturgo escocês (1860–1937)',
    resumo: 'Criou Peter Pan e doou os direitos da obra a um hospital infantil.',
    bio: [
      'James Matthew Barrie nasceu em Kirriemuir, na Escócia, em 9 de maio de 1860, nono de dez filhos de um tecelão. Quando tinha seis anos, o irmão mais velho David, favorito da mãe, morreu num acidente de patinação na véspera de completar catorze. A mãe, inconsolável, encontrava algum alívio na ideia de que David nunca envelheceria — e Barrie passou a infância tentando substituí-lo, inclusive vestindo suas roupas. A ligação entre esse episódio e o menino que se recusa a crescer é apontada por praticamente todos os seus biógrafos.',
      'Formou-se em Edimburgo, trabalhou como jornalista e mudou-se para Londres, onde se firmou como romancista e depois como um dos dramaturgos mais bem pagos de seu tempo. Casou-se com a atriz Mary Ansell, num casamento que terminou em divórcio.',
      'Em 1897 conheceu num parque de Londres os irmãos Llewelyn Davies e tornou-se próximo da família. Quando os pais morreram, assumiu informalmente a tutela dos meninos. Foi para eles, e a partir das brincadeiras com eles, que Peter Pan foi inventado. A peça estreou em 1904 e o romance saiu em 1911.',
      'Em 1929 Barrie doou todos os direitos de Peter Pan ao Great Ormond Street Hospital, hospital infantil de Londres, com a condição de que os valores nunca fossem divulgados. Uma lei britânica de 1988 concedeu ao hospital o direito perpétuo de receber royalties da obra no Reino Unido, mesmo após a expiração normal do prazo. Barrie morreu em Londres em 19 de junho de 1937.'
    ],
    contexto: 'Peter Pan aparece na Inglaterra eduardiana, quando a infância se consolidava como território cultural próprio e a literatura infantil vivia seu período mais fértil. A obra de Barrie destoa por não ser tranquilizadora: o menino que não cresce esquece as pessoas, não pode ser amado e permanece sozinho — leitura que a maioria das adaptações suaviza.',
    contribuicoes: ['Criou Peter Pan, uma das personagens mais reconhecidas da literatura.', 'Escreveu a peça Peter Pan (1904) e o romance Peter Pan e Wendy (1911).', 'Doou os direitos integrais da obra ao Great Ormond Street Hospital, em 1929.', 'Foi um dos dramaturgos mais encenados da Inglaterra eduardiana, com peças como O Admirável Crichton.'],
    cronologia: [
      [1860, 'Nasce em Kirriemuir, Escócia, em 9 de maio.'],
      [1867, 'Morre seu irmão David, episódio decisivo em sua obra.'],
      [1897, 'Conhece a família Llewelyn Davies.'],
      [1904, 'Estreia a peça Peter Pan.'],
      [1911, 'Publica o romance Peter Pan e Wendy.'],
      [1929, 'Doa os direitos ao Great Ormond Street Hospital.'],
      [1937, 'Morre em Londres.']
    ]
  },

  Plutarco: {
    papel: 'Historiador e biógrafo grego (c. 46–c. 120)',
    resumo: 'Escreveu as Vidas Paralelas, obra que forneceu à Europa suas ideias sobre caráter, virtude e grandeza.',
    bio: [
      'Plutarco nasceu em Queroneia, na Beócia, por volta do ano 46, em família próspera. Estudou em Atenas, viajou ao Egito e a Roma, onde deu conferências e fez amizades influentes, e retornou para viver em sua cidade natal, que descreveu como pequena demais mas à qual permaneceu ligado. Foi magistrado local e, por cerca de trinta anos, sacerdote do oráculo de Delfos.',
      'As Vidas Paralelas, sua obra maior, reúne biografias de gregos e romanos organizadas aos pares, com uma comparação ao fim de cada dupla — Alexandre com César, Demóstenes com Cícero, Sólon com Publícola. O propósito não é histórico no sentido moderno: Plutarco afirma explicitamente que não escreve história, mas vidas, e que um gesto pequeno ou uma frase revelam mais do caráter de alguém do que batalhas com milhares de mortos.',
      'Escreveu também as Moralia, coletânea de dezenas de tratados sobre temas tão diversos quanto a educação das crianças, a conversa à mesa, a tranquilidade da alma, a superstição, o consumo de carne, o silêncio do oráculo e o comportamento dos animais.',
      'Sua influência sobre a Europa moderna é difícil de exagerar. Montaigne o cita constantemente; Shakespeare baseou Júlio César, Antônio e Cleópatra e Coriolano diretamente na tradução inglesa das Vidas; Rousseau, Emerson e os revolucionários franceses e americanos formaram nele suas noções de virtude cívica. Morreu em Delfos ou Queroneia por volta de 120.'
    ],
    contexto: 'Plutarco escreve sob o Império Romano, como grego culto num mundo dominado por Roma. As Vidas Paralelas são também um gesto político discreto: ao emparelhar sistematicamente gregos e romanos, afirma a equivalência entre as duas tradições num momento em que uma delas governava a outra.',
    contribuicoes: [
      'Escreveu as Vidas Paralelas, biografias emparelhadas de gregos e romanos.',
      'Escreveu as Moralia, com dezenas de tratados sobre ética, educação e vida cotidiana.',
      'Fundou a biografia moral como gênero, centrada no caráter e não nos feitos.',
      'Forneceu a Shakespeare o material direto de várias de suas peças romanas.',
      'Influenciou Montaigne, Rousseau, Emerson e o vocabulário de virtude cívica das revoluções modernas.'
    ],
    cronologia: [
      ['c. 46', 'Nasce em Queroneia, na Beócia.'],
      ['c. 90', 'Torna-se sacerdote em Delfos.'],
      ['séc. II', 'Escreve as Vidas Paralelas e as Moralia.'],
      ['c. 120', 'Morre na Grécia.']
    ]
  },

  Sófocles: {
    papel: 'Dramaturgo grego (c. 496 a.C.–406 a.C.)',
    resumo: 'Escreveu Antígona e Édipo Rei, e levou a tragédia grega à sua forma mais acabada.',
    bio: [
      'Sófocles nasceu em Colono, nos arredores de Atenas, por volta de 496 a.C., em família abastada. Venceu seu primeiro concurso dramático aos vinte e oito anos, derrotando Ésquilo, então o poeta consagrado. Ao longo da vida participou de cerca de trinta concursos e venceu a maioria, sem nunca ficar em último lugar.',
      'Viveu praticamente todo o século V ateniense: a vitória sobre os persas, a era de Péricles, a construção do Partenon, a peste e a longa Guerra do Peloponeso. Ocupou cargos públicos — foi tesoureiro da liga, general ao lado de Péricles e, já velho, membro do conselho extraordinário criado após o desastre da expedição à Sicília.',
      'Escreveu mais de cento e vinte peças, das quais sobreviveram sete completas: Ájax, Antígona, As Traquínias, Édipo Rei, Electra, Filoctetes e Édipo em Colono. Suas inovações técnicas foram decisivas: introduziu o terceiro ator, o que permitiu conflitos dramáticos mais complexos, ampliou o coro e reduziu seu peso na ação, e abandonou a trilogia ligada em favor de peças independentes.',
      'Antígona põe em choque a lei da cidade e o dever para com os mortos, no confronto entre uma mulher que enterra o irmão e o rei que o proíbe — texto que atravessou a história política do Ocidente como formulação do conflito entre lei positiva e consciência. Édipo Rei, que Aristóteles tomou como modelo de tragédia na Poética, constrói uma investigação em que o detetive descobre ser o criminoso. Sófocles morreu em Atenas em 406 a.C., pouco antes da derrota final da cidade.'
    ],
    contexto: 'Sófocles escreve no auge e no declínio da Atenas democrática, e suas peças tratam repetidamente do que acontece quando indivíduo e cidade colidem. A ausência de vilões é sua marca: os conflitos ocorrem entre posições que têm, cada uma, razões legítimas — e é dessa simetria que vem a força trágica.',
    contribuicoes: [
      'Escreveu Antígona, Édipo Rei, Electra, Ájax, Filoctetes e Édipo em Colono.',
      'Introduziu o terceiro ator na tragédia, ampliando as possibilidades dramáticas.',
      'Abandonou a trilogia ligada em favor de peças independentes.',
      'Édipo Rei foi tomado por Aristóteles como modelo de tragédia na Poética.',
      'Antígona tornou-se referência permanente do conflito entre lei positiva e consciência individual.'
    ],
    cronologia: [
      ['c. 496 a.C.', 'Nasce em Colono, perto de Atenas.'],
      ['468 a.C.', 'Vence seu primeiro concurso dramático, derrotando Ésquilo.'],
      ['c. 441 a.C.', 'Encena Antígona.'],
      ['c. 429 a.C.', 'Encena Édipo Rei.'],
      ['406 a.C.', 'Morre em Atenas.'],
      ['401 a.C.', 'Édipo em Colono é encenada postumamente.']
    ]
  },

  'P. T. Barnum': {
    papel: 'Empresário do entretenimento norte-americano (1810–1891)',
    resumo: 'Inventou o espetáculo de massa moderno e a publicidade que o sustenta, com métodos que incluíam a fraude declarada.',
    bio: [
      'Phineas Taylor Barnum nasceu em Bethel, Connecticut, em 5 de julho de 1810. Foi lojista, editor de jornal — chegou a ser preso por difamação — e vendedor antes de entrar no ramo do espetáculo em 1835, exibindo uma mulher negra idosa e escravizada que ele anunciava como tendo cento e sessenta anos e ter sido babá de George Washington. A autópsia mostrou que ela tinha cerca de metade dessa idade. O episódio é o mais indefensável de sua carreira.',
      'Em 1841 comprou o Museu Americano em Nova York e o transformou na maior atração da cidade, misturando exposições legítimas de história natural com curiosidades fabricadas, entre elas a chamada sereia de Fiji, um torso de macaco costurado a uma cauda de peixe. Barnum não escondia a fraude: fazia dela parte do espetáculo, convidando o público a decidir por si mesmo, e escreveu um livro expondo os truques que usava.',
      'Trouxe aos Estados Unidos a cantora sueca Jenny Lind numa turnê de enorme sucesso, com uma campanha publicitária inédita em escala que criou público antes que qualquer nota fosse cantada. Foi também deputado estadual em Connecticut e prefeito de Bridgeport, defendeu a abolição da escravidão após ter enriquecido explorando pessoas escravizadas, e combateu a prostituição e o alcoolismo.',
      'Aos sessenta anos entrou no ramo do circo, criando o espetáculo itinerante que se fundiria ao de James Bailey e depois ao dos irmãos Ringling. Sua contribuição real não foi o conteúdo, e sim o método: o anúncio como espetáculo, a controvérsia como divulgação e a promessa exagerada como convite. Morreu em Bridgeport em 7 de abril de 1891. A frase sobre um trouxa nascer a cada minuto, universalmente atribuída a ele, não tem registro em nenhum texto ou depoimento seu.'
    ],
    contexto: 'Barnum atua na formação da cultura de massa americana, quando lazer comercial urbano surgia como indústria. Sua figura é a origem de um dilema que atravessa o entretenimento até hoje: a fronteira entre encantar e enganar, e a descoberta de que o público às vezes prefere participar do truque a ser protegido dele.',
    contribuicoes: [
      'Criou o Museu Americano de Nova York, maior atração popular da cidade no século XIX.',
      'Inventou métodos de publicidade em massa que fundaram a promoção moderna de espetáculos.',
      'Organizou a turnê americana de Jenny Lind, marco da divulgação cultural em escala.',
      'Criou o circo itinerante que originaria o Ringling Bros. and Barnum & Bailey.',
      'Foi deputado estadual e prefeito de Bridgeport, Connecticut.'
    ],
    cronologia: [
      [1810, 'Nasce em Bethel, Connecticut, em 5 de julho.'],
      [1841, 'Compra o Museu Americano em Nova York.'],
      [1850, 'Organiza a turnê americana de Jenny Lind.'],
      [1865, 'O Museu Americano é destruído por incêndio.'],
      [1871, 'Cria seu espetáculo circense itinerante.'],
      [1891, 'Morre em Bridgeport.']
    ],
    nota: 'Barnum iniciou a carreira explorando a exibição de uma mulher negra escravizada sob alegações falsas sobre sua idade. A frase sobre um trouxa nascer a cada minuto não tem registro documental em sua obra ou depoimentos.'
  },

  'Jaron Lanier': {
    papel: 'Cientista da computação e músico norte-americano (1960–)',
    resumo: 'Pioneiro da realidade virtual, tornou-se um dos críticos mais consistentes das redes sociais que ajudou a antecipar.',
    bio: [
      'Jaron Zepel Lanier nasceu em Nova York em 3 de maio de 1960, filho de imigrantes judeus. A mãe morreu num acidente de carro quando ele tinha nove anos, e ele passou a infância no Novo México, numa casa que ele próprio ajudou a projetar em forma de domos geodésicos e cuja construção levou sete anos. Entrou na universidade aos treze anos.',
      'Nos anos 1980 fundou a VPL Research, primeira empresa a vender equipamentos de realidade virtual, e popularizou o próprio termo virtual reality. Desenvolveu luvas de dados e visores décadas antes de a tecnologia se tornar viável comercialmente. É também músico e mantém uma coleção extensa de instrumentos raros de várias culturas.',
      'Sua crítica pública começou com o ensaio Maoísmo Digital, de 2006, contra a ideia de que a inteligência coletiva anônima da internet seria superior ao autor individual. Você Não É Um Aplicativo, de 2010, desenvolveu o argumento: as arquiteturas de software não são neutras, e sistemas que reduzem pessoas a perfis padronizados produzem gente que se comporta como perfil.',
      'Em Dez Argumentos para Você Deletar Agora Suas Redes Sociais, de 2018, sustenta que o problema não é a conexão em si, mas o modelo de negócio: plataformas gratuitas financiadas por anunciantes precisam modificar comportamento para funcionar, e a modificação mais barata de obter é a negativa, porque medo e indignação prendem atenção com mais eficiência. Defende modelos pagos e remuneração pelos dados que cada pessoa gera. Trabalha na Microsoft Research.'
    ],
    contexto: 'Lanier fala de dentro: ajudou a construir o vocabulário e a tecnologia do mundo digital antes de se tornar seu crítico. Essa posição — nem tecnófobo nem otimista — dá a sua crítica um caráter técnico e propositivo, centrado em arquitetura de sistemas e modelos econômicos, e não em pânico moral.',
    contribuicoes: [
      'Foi pioneiro da realidade virtual e popularizou o termo.',
      'Fundou a VPL Research, primeira empresa comercial de equipamentos de realidade virtual.',
      'Escreveu Você Não É Um Aplicativo (2010) e Dez Argumentos para Você Deletar Agora Suas Redes Sociais (2018).',
      'Formulou a crítica ao modelo de negócios de publicidade como causa da manipulação comportamental.',
      'Propôs modelos de remuneração individual pelos dados gerados por cada pessoa.'
    ],
    cronologia: [
      [1960, 'Nasce em Nova York, em 3 de maio.'],
      [1984, 'Funda a VPL Research.'],
      [2006, 'Publica o ensaio Maoísmo Digital.'],
      [2010, 'Publica Você Não É Um Aplicativo.'],
      [2013, 'Publica Quem Controla o Futuro?'],
      [2018, 'Publica Dez Argumentos para Você Deletar Agora Suas Redes Sociais.']
    ]
  },

  'George Lakoff': {
    papel: 'Linguista cognitivo norte-americano (1941–)',
    resumo: 'Mostrou que a metáfora não é ornamento de linguagem, mas a estrutura pela qual pensamos.',
    bio: [
      'George Philip Lakoff nasceu em Bayonne, Nova Jersey, em 24 de maio de 1941. Estudou matemática e literatura no MIT, onde teve aulas com Noam Chomsky, e doutorou-se em linguística em Indiana. Começou como discípulo da gramática gerativa e rompeu com ela nos anos 1970, num debate conhecido como as guerras linguísticas.',
      'A divergência era de fundo. Chomsky sustentava que a sintaxe é um sistema autônomo, independente do significado e da experiência corporal. Lakoff passou a defender o oposto: a linguagem é inseparável da cognição, e a cognição está ancorada no corpo e na experiência física do mundo.',
      'Metáforas da Vida Cotidiana, escrito com Mark Johnson em 1980, é a formulação decisiva. O livro mostra que expressões como perder tempo, construir um argumento, sentir-se para baixo ou uma relação que não vai a lugar nenhum não são figuras de estilo: são evidência de que conceitos abstratos são estruturados por metáforas sistemáticas ancoradas na experiência física — tempo é dinheiro, discussão é guerra, felicidade é para cima. Escolher uma metáfora é escolher o que se pode pensar sobre um assunto.',
      'Aplicou a teoria à política em Não Pense em um Elefante, argumentando que o debate público é disputa de enquadramento e não de fatos, e que negar um enquadramento o reforça. Formulou a hipótese de que progressistas e conservadores operam com modelos metafóricos distintos de família aplicados à nação. É professor emérito em Berkeley.'
    ],
    contexto: 'Lakoff aparece na virada em que as ciências cognitivas deixaram de tratar a mente como processador simbólico abstrato e passaram a considerá-la ancorada no corpo. Sua contribuição é a evidência linguística dessa tese, e a extensão dela à comunicação política tornou seu vocabulário corrente muito além da linguística.',
    contribuicoes: ['Formulou com Mark Johnson a teoria da metáfora conceitual.', 'Escreveu Metáforas da Vida Cotidiana (1980).', 'Desenvolveu a linguística cognitiva como alternativa à gramática gerativa.', 'Aplicou a teoria do enquadramento à comunicação política em Não Pense em um Elefante.', 'Escreveu Mulheres, Fogo e Coisas Perigosas, sobre categorização e cognição.'],
    cronologia: [
      [1941, 'Nasce em Bayonne, Nova Jersey, em 24 de maio.'],
      [1980, 'Publica Metáforas da Vida Cotidiana, com Mark Johnson.'],
      [1987, 'Publica Mulheres, Fogo e Coisas Perigosas.'],
      [1999, 'Publica Filosofia na Carne, com Johnson.'],
      [2004, 'Publica Não Pense em um Elefante.']
    ]
  }
};

const OBRAS_F15 = {
  Augusto: [
    [
      'Res Gestae Divi Augusti',
      'documento',
      14,
      'Relato em primeira pessoa dos feitos de Augusto, redigido por ele para ser inscrito em bronze diante de seu mausoléu e reproduzido em províncias de todo o Império. Enumera cargos, honrarias, obras públicas, distribuições de dinheiro e conquistas militares, e apresenta o principado como restauração da república e não como concentração de poder. É simultaneamente documento histórico de primeira ordem e peça de propaganda, e a cópia mais completa sobreviveu num templo em Ancara.'
    ]
  ],
  'Stanley Milgram': [
    [
      'Obediência à Autoridade',
      'livro',
      1974,
      'Apresenta os experimentos conduzidos em Yale a partir de 1961, em que voluntários eram instruídos a aplicar choques elétricos crescentes a outra pessoa — na verdade um ator. Cerca de dois terços chegaram à voltagem máxima, muitos em evidente sofrimento e protestando, mas continuando diante da insistência calma do pesquisador. Milgram conclui que a obediência não depende de crueldade individual, e sim da situação e da transferência de responsabilidade para a autoridade. É um dos livros mais citados e mais debatidos da psicologia.'
    ]
  ],
  'B. R. Ambedkar': [
    [
      'A Aniquilação das Castas',
      'livro',
      1936,
      'Discurso escrito para uma conferência que acabou cancelada porque os organizadores consideraram seu conteúdo inaceitável; Ambedkar publicou-o por conta própria. Sustenta que a intocabilidade não é uma distorção do hinduísmo, e sim consequência estrutural do sistema de castas, e que nenhuma reforma interna poderá eliminá-la. Gandhi respondeu publicamente, e a réplica de Ambedkar integra as edições posteriores. É o texto central da crítica indiana às castas.'
    ],
    [
      'Constituição da Índia',
      'documento',
      1950,
      'Texto redigido pelo comitê que Ambedkar presidiu, promulgado em 26 de janeiro de 1950. Aboliu a intocabilidade, instituiu direitos fundamentais, sufrágio universal desde o primeiro dia e um sistema de reservas para castas e tribos historicamente excluídas. É a constituição escrita mais extensa do mundo e o documento fundador da maior democracia do planeta.'
    ]
  ],
  'Georg Simmel': [
    [
      'Filosofia do Dinheiro',
      'livro',
      1900,
      'Examina como a economia monetária transforma a vida mental e as relações sociais. Ao tornar tudo comparável em quantidade, o dinheiro produz simultaneamente liberdade individual — porque desfaz vínculos pessoais de dependência — e indiferença, cálculo e distanciamento. É uma das primeiras análises da modernidade escritas a partir de um objeto aparentemente banal, e influenciou Lukács, Bloch e Walter Benjamin.'
    ],
    [
      'As Grandes Cidades e a Vida do Espírito',
      'ensaio',
      1903,
      'Descreve a atitude blasé do morador da metrópole como defesa psíquica contra a saturação de estímulos: diante do excesso, o indivíduo aprende a não reagir. Escrito na Berlim que se tornara metrópole industrial em poucas décadas, é o texto fundador da sociologia urbana e antecipa boa parte do debate contemporâneo sobre atenção e sobrecarga informacional.'
    ],
    [
      'Sociologia',
      'livro',
      1908,
      'Formula a proposta metodológica de Simmel: o objeto da sociologia não são as grandes instituições, e sim as formas de interação — conflito, troca, subordinação, segredo, sociabilidade — que se repetem em conteúdos sociais completamente diferentes. Contém as análises de figuras sociais como o estrangeiro e o pobre, tratadas como posições estruturais e não como tipos psicológicos.'
    ]
  ],
  'Mihaly Csikszentmihalyi': [
    [
      'Fluxo',
      'livro',
      1990,
      'Apresenta décadas de pesquisa sobre o estado em que a pessoa fica tão envolvida numa atividade que perde a noção do tempo e de si mesma. Csikszentmihalyi mostra que o fluxo ocorre quando o desafio da tarefa corresponde ao nível de habilidade — desafio demais gera ansiedade, de menos gera tédio — e quando há metas claras e retorno imediato. Baseado no método de amostragem de experiência, com milhares de participantes, deu base empírica ao estudo do que faz a vida valer a pena.'
    ]
  ],
  'Andy Grove': [
    [
      'Só os Paranoicos Sobrevivem',
      'livro',
      1996,
      'Formula o conceito de ponto de inflexão estratégico: o momento em que os fundamentos de um negócio mudam e a empresa precisa se reinventar ou desaparecer. Grove narra com franqueza incomum a própria hesitação diante da decisão de abandonar o mercado de memórias, que originara a Intel, em favor dos microprocessadores. É leitura corrente em estratégia justamente por descrever a indecisão e não apenas o acerto.'
    ],
    ['Administração de Alta Performance', 'livro', 1983, 'Manual prático de gestão escrito por um engenheiro, centrado na produtividade do trabalho gerencial: reuniões, delegação, avaliação de desempenho e alavancagem das decisões. É neste livro que Grove sistematiza o método de objetivos e resultados-chave, depois adotado no Google e em boa parte da indústria de tecnologia.']
  ],
  'Harry Markowitz': [
    [
      'Seleção de Carteiras',
      'ensaio',
      1952,
      'Artigo de catorze páginas que fundou a teoria moderna de carteiras. Markowitz observou que a teoria existente tratava apenas do retorno esperado — e que, se isso bastasse, o investidor racional colocaria tudo numa única ação. Introduziu o risco como variável, medido pela variância, e mostrou que o risco de uma carteira depende da correlação entre os ativos, não da média dos riscos individuais. Daí decorre a fronteira eficiente e praticamente toda a gestão profissional de investimentos posterior.'
    ]
  ],
  'Al Ries e Jack Trout': [
    [
      'Posicionamento: A Batalha por Sua Mente',
      'livro',
      1981,
      'Sustenta que a disputa entre marcas não se trava no mercado nem no produto, e sim na mente do consumidor, já saturada de mensagens, e que o objetivo da comunicação não é criar algo novo, mas ocupar e reordenar o que já está ali. Recomenda ser o primeiro numa categoria ou criar uma categoria nova, assumir a posição real que se ocupa e evitar a extensão indiscriminada da marca. Fundou o vocabulário do branding moderno.'
    ],
    ['As 22 Consagradas Leis do Marketing', 'livro', 1993, 'Condensa o pensamento da dupla em princípios curtos e deliberadamente categóricos, entre eles a lei da liderança, a lei da categoria e a lei do foco. O formato taxativo é ao mesmo tempo a razão de sua enorme circulação e o alvo das críticas de quem aponta que os exemplos escolhidos confirmam as regras por seleção.']
  ],
  'Sheryl Sandberg': [
    [
      'Faça Acontecer',
      'livro',
      2013,
      'Argumenta que barreiras internas — hesitação em se candidatar a uma promoção, em negociar salário, em ocupar espaço numa reunião — somam-se às externas para manter mulheres fora das posições de liderança. Escrito pela executiva mais visível do Vale do Silício, vendeu milhões de exemplares e reabriu o debate público sobre mulheres e trabalho, recebendo também a crítica de que responsabiliza individualmente as mulheres por um problema estrutural e fala de uma posição de privilégio.'
    ],
    ['Plano B', 'livro', 2017, 'Escrito com o psicólogo Adam Grant após a morte súbita do marido da autora, trata de luto, resiliência e reconstrução. Combina relato pessoal com pesquisa sobre como pessoas atravessam perdas, e discute o que dizer e o que não dizer a quem está sofrendo — tema sobre o qual, segundo a autora, quase todos erram por medo de errar.']
  ],
  'Louisa May Alcott': [
    [
      'Mulherzinhas',
      'livro',
      1868,
      'Acompanha as quatro irmãs March durante a Guerra Civil americana, com o pai ausente no front e a família em dificuldade financeira. Escrito por encomenda editorial em poucas semanas e baseado na própria família da autora, rompeu com a literatura moralizante então destinada a meninas ao apresentar em Jo March uma protagonista que quer escrever, ganhar dinheiro e recusa o casamento como destino. Jo tornou-se referência declarada para gerações de escritoras.'
    ],
    ['Homenzinhos', 'livro', 1871, 'Continuação em que Jo e o marido dirigem uma escola em que crianças de origens muito diferentes são educadas com liberdade e responsabilidade. Reflete diretamente as ideias pedagógicas do pai da autora, transformadas aqui em algo que efetivamente funciona — o que a realidade da família Alcott nunca permitiu.']
  ],
  'James M. Barrie': [
    ['Peter Pan', 'peca', 1904, 'Peça sobre o menino que se recusa a crescer e leva os irmãos Darling à Terra do Nunca. Nasceu das brincadeiras de Barrie com os irmãos Llewelyn Davies e é menos tranquilizadora do que suas adaptações sugerem: Peter esquece as pessoas, não pode ser amado e permanece sozinho. Barrie doou os direitos integrais da obra ao Great Ormond Street Hospital em 1929.'],
    ['Peter Pan e Wendy', 'livro', 1911, 'Versão em romance da peça, com a narração irônica e melancólica que a forma teatral não permitia. É o texto que fixou a história em sua forma mais completa e contém as passagens em que a ambiguidade da personagem aparece com mais clareza.']
  ],
  Plutarco: [
    [
      'Vidas Paralelas',
      'livro',
      'séc. II',
      'Biografias de gregos e romanos organizadas aos pares, com uma comparação ao fim de cada dupla — Alexandre com César, Demóstenes com Cícero. Plutarco afirma explicitamente que não escreve história, mas vidas, e que um gesto pequeno ou uma frase revelam mais do caráter de alguém do que batalhas com milhares de mortos. Forneceu a Shakespeare o material direto de suas peças romanas e formou as noções de virtude cívica de Montaigne, Rousseau e dos revolucionários modernos.'
    ],
    ['Moralia', 'livro', 'séc. II', 'Coletânea de dezenas de tratados sobre temas tão variados quanto a educação das crianças, a tranquilidade da alma, a superstição, a conversa à mesa, o consumo de carne e a inteligência dos animais. É a face menos conhecida de Plutarco e a que mais revela sua curiosidade: filosofia prática escrita para leitores comuns, e não para escolas.']
  ],
  Sófocles: [
    [
      'Antígona',
      'peca',
      'c. 441 a.C.',
      'Antígona enterra o irmão morto contra a proibição expressa do rei Creonte e é condenada à morte por isso. A peça põe em choque a lei da cidade e o dever para com os mortos sem oferecer vilão: as duas posições têm razões legítimas, e é dessa simetria que vem sua força. Atravessou a história política do Ocidente como formulação do conflito entre lei positiva e consciência individual.'
    ],
    ['Édipo Rei', 'peca', 'c. 429 a.C.', 'Édipo investiga a origem da peste que assola Tebas e descobre, passo a passo, ser ele próprio o criminoso que procura. Aristóteles a tomou como modelo de tragédia na Poética, pela construção da reviravolta e do reconhecimento. A estrutura — uma investigação em que o detetive é o culpado — permanece um dos achados formais mais imitados da literatura.'],
    ['Édipo em Colono', 'peca', '401 a.C.', 'Escrita nos últimos anos de vida de Sófocles e encenada postumamente, acompanha Édipo cego e velho chegando ao bosque de Colono, a aldeia natal do próprio autor, para morrer. É a mais serena de suas peças e trata da reconciliação possível depois de um destino inteiramente cumprido.']
  ],
  'Jaron Lanier': [
    ['Você Não É Um Aplicativo', 'livro', 2010, 'Argumenta que as arquiteturas de software não são neutras: sistemas que reduzem pessoas a perfis padronizados acabam produzindo gente que se comporta como perfil. Escrito por um dos pioneiros da realidade virtual, é uma crítica técnica ao desenho das plataformas e à ideia de que a inteligência coletiva anônima seria superior à autoria individual.'],
    [
      'Dez Argumentos para Você Deletar Agora Suas Redes Sociais',
      'livro',
      2018,
      'Sustenta que o problema não é a conexão em si, mas o modelo de negócio: plataformas gratuitas financiadas por anunciantes precisam modificar comportamento para funcionar, e a modificação mais barata de obter é a negativa, porque medo e indignação prendem atenção com mais eficiência que o resto. Defende modelos pagos e remuneração pelos dados que cada pessoa gera.'
    ]
  ],
  'George Lakoff': [
    [
      'Metáforas da Vida Cotidiana',
      'livro',
      1980,
      'Escrito com Mark Johnson, mostra que expressões como perder tempo, construir um argumento ou sentir-se para baixo não são figuras de estilo: são evidência de que conceitos abstratos são estruturados por metáforas sistemáticas ancoradas na experiência física do corpo. Escolher uma metáfora é escolher o que se pode pensar sobre um assunto. É a obra fundadora da linguística cognitiva.'
    ],
    ['Não Pense em um Elefante', 'livro', 2004, 'Aplica a teoria da metáfora à comunicação política, sustentando que o debate público é disputa de enquadramento e não de fatos, e que negar um enquadramento o reforça — dizer que não se deve pensar num elefante faz pensar num elefante. Propõe que progressistas e conservadores operam com modelos metafóricos distintos de família aplicados à nação.']
  ],
  'Dwight D. Eisenhower': [
    [
      'Cruzada na Europa',
      'memoria',
      1948,
      'Relato da campanha aliada na Europa escrito pelo comandante supremo três anos após o fim da guerra. Cobre o Norte da África, a Sicília, o planejamento e a execução do desembarque na Normandia e o avanço até a rendição alemã, com atenção incomum às tensões entre os comandos aliados. É fonte histórica de primeira ordem, escrita por quem tomou as decisões.'
    ]
  ],
  'John Templeton': [],
  'Dom Pedro II': [],
  'Michelle Bachelet': [],
  'P. T. Barnum': [
    ['As Fraudes do Mundo', 'livro', 1865, 'Livro em que Barnum expõe deliberadamente os truques, embustes e falsificações em circulação — inclusive alguns que ele próprio usara. Escrito no auge de sua carreira como empresário de espetáculos, é a expressão mais clara de seu método: transformar a revelação da fraude em parte do entretenimento e convidar o público a decidir por si mesmo.']
  ]
};

(function aplicarF15() {
  Object.entries(PANORAMAS_F15).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F15).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF15() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 15:', e);
    }
  };
})();

/* ================================================================
   FASE 16 — CONTINUAÇÃO DA FILA (autores 245 em diante)
   ================================================================ */

/* correção de grafia duplicada detectada na fila */
(function reconciliarF16() {
  QUOTES.forEach((q) => {
    if (canonAuthor(q.author) === 'Ben Zoma (Pirkei Avot)') {
      q.author = 'Ben Zoma';
      RELATORIO_FASE8.autoriaCorrigida++;
    }
  });
  reindexarQuotes();
})();

const PANORAMAS_F16 = {
  'Charles Dickens': {
    papel: 'Escritor britânico (1812–1870)',
    resumo: 'Transformou a pobreza da própria infância em romances que mudaram a percepção pública sobre a Inglaterra industrial.',
    bio: [
      'Charles John Huffam Dickens nasceu em Portsmouth em 7 de fevereiro de 1812, segundo de oito filhos de um funcionário público perdulário. Quando tinha doze anos, o pai foi preso por dívidas e a família inteira foi encarcerada com ele, como permitia a lei. Charles foi retirado da escola e mandado trabalhar numa fábrica de graxa de sapatos, colando rótulos por dez horas diárias. A humilhação desse período ele manteve em segredo por décadas, revelando-a apenas ao biógrafo, e ela atravessa toda a sua obra.',
      'Trabalhou como escrevente de advogado e depois como repórter parlamentar, o que lhe deu conhecimento direto do funcionamento das instituições que satirizaria. Publicou Os Papéis Póstumos do Clube Pickwick em folhetim, em 1836, e o sucesso foi imediato e imenso. O formato o acompanharia sempre: escrevia em capítulos mensais, com o público reagindo enquanto a história corria, e ajustava enredos conforme a recepção.',
      'Oliver Twist expôs os asilos de pobres e o trabalho infantil. Tempos Difíceis atacou o utilitarismo e as condições fabris. A Casa Soturna satirizou a lentidão do sistema judiciário inglês em processos que consumiam gerações. David Copperfield, seu preferido, é o mais autobiográfico. Um Conto de Natal, de 1843, escrito em seis semanas para pagar dívidas, teve efeito cultural desproporcional e reconfigurou a celebração do Natal no mundo anglófono.',
      'Foi também empresário de si mesmo: editou revistas, organizou turnês de leituras públicas nas quais interpretava as próprias personagens diante de plateias enormes, e essas apresentações extenuantes contribuíram para arruinar sua saúde. Separou-se da esposa Catherine após vinte e dois anos de casamento e dez filhos, em circunstâncias que lhe custaram reputação. Morreu em Kent em 9 de junho de 1870, com O Mistério de Edwin Drood inacabado.'
    ],
    contexto: 'Dickens escreve na Inglaterra vitoriana em plena industrialização, com crianças trabalhando em minas e fábricas e uma lei dos pobres deliberadamente punitiva. Seus romances não apenas retrataram esse mundo: influenciaram legislação e opinião pública de forma documentada, e é raro que um romancista tenha tido efeito social tão direto.',
    contribuicoes: [
      'Escreveu Oliver Twist, David Copperfield, Grandes Esperanças, A Casa Soturna e Um Conto de Natal.',
      'Sua obra teve efeito documentado sobre a percepção pública e a legislação social britânica.',
      'Dominou o romance em folhetim, com enredos ajustados à reação do público.',
      'Reconfigurou culturalmente a celebração do Natal no mundo anglófono.',
      'Criou algumas das personagens mais reconhecidas da literatura, entre elas Scrooge, Fagin e Pip.'
    ],
    cronologia: [
      [1812, 'Nasce em Portsmouth, em 7 de fevereiro.'],
      [1824, 'O pai é preso por dívidas; Charles trabalha numa fábrica de graxa.'],
      [1836, 'Publica Os Papéis Póstumos do Clube Pickwick.'],
      [1838, 'Publica Oliver Twist.'],
      [1843, 'Publica Um Conto de Natal.'],
      [1850, 'Publica David Copperfield.'],
      [1861, 'Publica Grandes Esperanças.'],
      [1870, 'Morre em Kent.']
    ]
  },

  'Mark Twain': {
    papel: 'Escritor norte-americano (1835–1910)',
    resumo: 'Escreveu o romance que Hemingway apontou como origem de toda a literatura americana moderna.',
    bio: [
      'Samuel Langhorne Clemens nasceu em Florida, Missouri, em 30 de novembro de 1835, e cresceu em Hannibal, às margens do Mississippi — a cidade que reapareceria como St. Petersburg em seus romances. O pai morreu quando ele tinha onze anos, e ele deixou a escola para trabalhar como aprendiz de tipógrafo.',
      'Realizou o sonho de infância e tornou-se piloto de barco a vapor no Mississippi, profissão que exercia quando a Guerra Civil interrompeu a navegação. O pseudônimo Mark Twain vem da linguagem dos rios: a marca de duas braças, profundidade mínima segura para navegação. Serviu brevemente numa milícia confederada, desertou, e seguiu para o Oeste, onde tentou a mineração e acabou no jornalismo.',
      'Projetou-se com contos humorísticos e com livros de viagem, entre eles Os Inocentes no Exterior. As Aventuras de Tom Sawyer saiu em 1876. As Aventuras de Huckleberry Finn, de 1884, é sua obra decisiva: narrada inteiramente na voz de um menino pobre e semianalfabeto, em dialeto, acompanha sua fuga rio abaixo com Jim, homem escravizado em busca da liberdade. O ponto alto é o momento em que Huck decide ajudar Jim convencido de que irá para o inferno por isso — a consciência formada pela sociedade escravista contra o impulso moral concreto.',
      'O livro é continuamente contestado em escolas americanas pelo uso reiterado de linguagem racista, e continuamente defendido por ser justamente uma obra antirracista escrita de dentro da linguagem de sua época. Twain tornou-se figura pública de enorme popularidade, perdeu fortunas em investimentos fracassados e passou os últimos anos amargurado pela morte da esposa e de duas filhas, escrevendo textos cada vez mais sombrios e antimperialistas. Morreu em Redding, Connecticut, em 21 de abril de 1910.'
    ],
    contexto: 'Twain foi o primeiro grande escritor americano a usar a fala vernácula do próprio país como língua literária, em vez de imitar o inglês britânico culto. Essa decisão é o que Hemingway tinha em mente ao dizer que toda a literatura americana moderna vem de um livro chamado Huckleberry Finn.',
    contribuicoes: ['Escreveu As Aventuras de Huckleberry Finn (1884) e As Aventuras de Tom Sawyer (1876).', 'Estabeleceu a fala vernácula americana como língua literária legítima.', 'Escreveu Vida no Mississippi e Um Ianque na Corte do Rei Artur.', 'Foi figura pública influente na crítica ao imperialismo americano no fim da vida.'],
    cronologia: [
      [1835, 'Nasce em Florida, Missouri, em 30 de novembro.'],
      [1857, 'Torna-se piloto de barco a vapor no Mississippi.'],
      [1865, 'Publica o conto que o projeta nacionalmente.'],
      [1876, 'Publica As Aventuras de Tom Sawyer.'],
      [1884, 'Publica As Aventuras de Huckleberry Finn.'],
      [1910, 'Morre em Redding, Connecticut.']
    ],
    nota: 'Huckleberry Finn é objeto de contestação recorrente em escolas americanas pelo uso reiterado de linguagem racista, e de defesa igualmente recorrente por ser uma obra antirracista escrita na linguagem de sua época.'
  },

  'Abraham Lincoln': {
    papel: 'Advogado e político norte-americano, 16º presidente dos Estados Unidos (1809–1865)',
    resumo: 'Conduziu os Estados Unidos pela Guerra Civil, aboliu a escravidão e foi assassinado cinco dias após a rendição confederada.',
    bio: [
      'Abraham Lincoln nasceu numa cabana de troncos no condado de Hardin, Kentucky, em 12 de fevereiro de 1809, em família de agricultores pobres. Teve menos de um ano de escolaridade formal somando todos os períodos; leu tudo o que conseguiu emprestado e formou-se advogado estudando sozinho. Trabalhou como lenhador, balseiro, lojista e agrimensor.',
      'Foi deputado estadual em Illinois e cumpriu um mandato na Câmara federal. Projetou-se nacionalmente em 1858, nos debates com Stephen Douglas durante a disputa pelo Senado, em que sustentou que uma casa dividida contra si mesma não pode permanecer de pé e que o país não podia continuar metade escravo e metade livre. Perdeu a eleição e ganhou o país.',
      'Eleito presidente em 1860 sem um único voto nos estados do Sul profundo, viu sete estados se separarem antes mesmo de sua posse. A guerra durou quatro anos e matou mais americanos do que todos os outros conflitos do país somados. Lincoln suspendeu o habeas corpus, ampliou poderes presidenciais e trocou de generais repetidas vezes até encontrar Grant.',
      'A Proclamação de Emancipação, de 1863, declarou livres as pessoas escravizadas nos estados em rebelião, medida ao mesmo tempo moral e estratégica. O Discurso de Gettysburg, de dois minutos e cerca de duzentas e setenta palavras, redefiniu a guerra como prova de que um governo do povo, pelo povo e para o povo pode sobreviver. Articulou a aprovação da Décima Terceira Emenda, que aboliu definitivamente a escravidão. Foi assassinado por John Wilkes Booth no Teatro Ford em 14 de abril de 1865, cinco dias após a rendição de Lee.'
    ],
    contexto: 'Lincoln enfrentou a única ameaça existencial que os Estados Unidos já sofreram a partir de dentro. Suas posições sobre igualdade racial evoluíram ao longo da vida e não correspondem inteiramente ao que hoje se lhe atribui — ponto documentado nas fontes e essencial para entender a história real da abolição americana.',
    contribuicoes: ['Preservou a União durante a Guerra Civil Americana.', 'Emitiu a Proclamação de Emancipação em 1863.', 'Articulou a aprovação da Décima Terceira Emenda, que aboliu a escravidão.', 'Proferiu o Discurso de Gettysburg, um dos textos políticos mais citados da história.', 'Assinou a lei que criou o sistema de universidades públicas de concessão de terras.'],
    cronologia: [
      [1809, 'Nasce no Kentucky, em 12 de fevereiro.'],
      [1858, 'Debates com Stephen Douglas o projetam nacionalmente.'],
      [1860, 'É eleito presidente; estados do Sul iniciam a secessão.'],
      [1863, 'Emite a Proclamação de Emancipação e profere o Discurso de Gettysburg.'],
      [1865, 'A Décima Terceira Emenda é aprovada; é assassinado em 14 de abril.']
    ]
  },

  'Cora Coralina': {
    papel: 'Poeta e doceira brasileira (1889–1985)',
    resumo: 'Publicou o primeiro livro aos 76 anos e tornou-se uma das vozes mais queridas da poesia brasileira.',
    bio: [
      'Ana Lins dos Guimarães Peixoto Bretas nasceu em Goiás Velho em 20 de agosto de 1889, na casa da Ponte da Lapa, à margem do rio Vermelho. O pai, desembargador, morreu poucos meses após seu nascimento. Estudou apenas três anos, no chamado grupo escolar, e nunca frequentou o ensino formal além disso.',
      'Publicou os primeiros poemas em jornais locais aos catorze anos e adotou cedo o pseudônimo Cora Coralina. Em 1911 saiu de casa com um advogado casado, Cantídio Tolentino Bretas, escândalo que a afastou da família por décadas. Viveram em São Paulo, onde ela criou os filhos e trabalhou em ofícios diversos após a morte do marido: vendeu livros, foi dona de pensão, criou porcos, plantou.',
      'Voltou a Goiás Velho em 1956, aos 66 anos, para a casa em que nascera, e passou a viver da venda de doces caseiros que ela mesma fazia e comercializava. Continuou escrevendo o tempo todo, em cadernos, sem publicar.',
      'Poemas dos Becos de Goiás e Estórias Mais, seu primeiro livro, saiu em 1965, quando tinha 76 anos. Carlos Drummond de Andrade escreveu-lhe uma carta pública elogiando os versos, e o reconhecimento nacional veio a partir daí. Sua poesia trata da vida das mulheres do interior, das lavadeiras, das becas de pedra, da infância, da velhice e do trabalho, em linguagem direta e sem ornamento. Publicou mais quatro livros e morreu em Goiânia em 10 de abril de 1985, aos 95 anos. A casa onde viveu é hoje museu.'
    ],
    contexto: 'Cora Coralina escreve de uma posição improvável em todos os sentidos: mulher, do interior de Goiás, sem escolaridade, publicando pela primeira vez na velhice. Sua obra registra um Brasil profundo e feminino que a literatura urbana da época praticamente não representava, e é essa combinação de matéria e voz que explica sua permanência.',
    contribuicoes: ['Publicou Poemas dos Becos de Goiás e Estórias Mais (1965), aos 76 anos.', 'Registrou em poesia a vida das mulheres do interior goiano, tema então ausente da literatura brasileira.', 'Escreveu Vintém de Cobre, O Tesouro da Casa Velha e Meu Livro de Cordel.', 'Tornou-se uma das poetas brasileiras mais lidas e citadas.'],
    cronologia: [
      [1889, 'Nasce em Goiás Velho, em 20 de agosto.'],
      [1911, 'Deixa Goiás e vai viver em São Paulo.'],
      [1956, 'Retorna à casa onde nasceu, em Goiás Velho.'],
      [1965, 'Publica seu primeiro livro, aos 76 anos.'],
      [1976, 'Publica Meu Livro de Cordel.'],
      [1985, 'Morre em Goiânia, aos 95 anos.']
    ]
  },

  'Ernest Hemingway': {
    papel: 'Escritor norte-americano (1899–1961)',
    resumo: 'Criou uma prosa despojada que mudou o inglês literário, e recebeu o Nobel por O Velho e o Mar.',
    bio: [
      'Ernest Miller Hemingway nasceu em Oak Park, Illinois, em 21 de julho de 1899. Trabalhou como repórter no Kansas City Star logo após o ensino médio, e foi ali que absorveu o manual de estilo que orientaria sua escrita: frases curtas, parágrafos curtos, vigor no lugar de adjetivos. Voluntariou-se como motorista de ambulância na Primeira Guerra e foi gravemente ferido por fogo de morteiro na Itália aos dezoito anos.',
      'Mudou-se para Paris nos anos 1920 como correspondente e integrou o círculo de expatriados americanos que Gertrude Stein chamou de geração perdida — expressão que ele popularizou. Conviveu com Stein, Ezra Pound, James Joyce e Scott Fitzgerald. O Sol Também Se Levanta, de 1926, e Adeus às Armas, de 1929, o consagraram.',
      'Formulou a chamada teoria do iceberg: o escritor pode omitir aquilo que sabe, e a omissão fortalece o texto, desde que a omissão seja por conhecimento e não por ignorância. O leitor sente o peso do que não está escrito. Essa economia deliberada influenciou praticamente toda a prosa em língua inglesa do século XX.',
      'Cobriu a Guerra Civil Espanhola, que originou Por Quem os Sinos Dobram, e a Segunda Guerra Mundial. Viveu em Cuba por duas décadas. O Velho e o Mar, de 1952, rendeu-lhe o Pulitzer e pesou decisivamente no Nobel de 1954. Sobreviveu a dois acidentes aéreos em dias consecutivos na África, com lesões graves e permanentes. Sofria de depressão profunda, alcoolismo e provavelmente das consequências de múltiplos traumatismos cranianos. Tirou a própria vida em Ketchum, Idaho, em 2 de julho de 1961. O pai, um irmão e uma irmã também morreram por suicídio.'
    ],
    contexto: 'Hemingway escreve depois de uma guerra que destruiu a confiança na retórica solene do século XIX. Sua prosa despojada é resposta direta a isso: se as palavras grandiosas mentiram, resta nomear as coisas concretas. É a mesma reação que, em outro registro, aparece na poesia de Eliot e Pound.',
    contribuicoes: ['Escreveu O Sol Também Se Levanta, Adeus às Armas, Por Quem os Sinos Dobram e O Velho e o Mar.', 'Criou a teoria do iceberg, com a omissão deliberada como recurso de força narrativa.', 'Reformulou a prosa em língua inglesa pela economia extrema de meios.', 'Recebeu o Prêmio Pulitzer em 1953 e o Nobel de Literatura em 1954.'],
    cronologia: [
      [1899, 'Nasce em Oak Park, Illinois, em 21 de julho.'],
      [1918, 'É ferido na Itália como motorista de ambulância.'],
      [1926, 'Publica O Sol Também Se Levanta.'],
      [1929, 'Publica Adeus às Armas.'],
      [1940, 'Publica Por Quem os Sinos Dobram.'],
      [1952, 'Publica O Velho e o Mar.'],
      [1954, 'Recebe o Nobel de Literatura.'],
      [1961, 'Morre em Ketchum, Idaho.']
    ],
    nota: 'Hemingway conviveu com depressão grave e alcoolismo e tirou a própria vida em 1961.'
  },

  'Lev Vygotsky': {
    papel: 'Psicólogo soviético (1896–1934)',
    resumo: 'Mostrou que o desenvolvimento cognitivo é social antes de ser individual, e morreu aos 37 anos com a obra inacabada.',
    bio: [
      'Lev Semiónovitch Vygotsky nasceu em Orsha, no Império Russo, hoje Bielorrússia, em 17 de novembro de 1896, em família judaica de classe média. Entrou na Universidade de Moscou por um sistema de cotas que sorteava as poucas vagas destinadas a judeus. Estudou direito por exigência prática e, simultaneamente, filosofia, literatura e história numa universidade popular não oficial.',
      'Trabalhou como professor em Gomel e escreveu sobre arte antes de se voltar à psicologia. Sua apresentação num congresso em 1924 impressionou de tal forma que foi imediatamente convidado a integrar o Instituto de Psicologia de Moscou. Teve pouco mais de dez anos de vida produtiva, marcados por tuberculose recorrente.',
      'Sua tese central inverte a ordem então assumida. Para Vygotsky, as funções mentais superiores aparecem primeiro entre pessoas, no plano social, e só depois se interiorizam no indivíduo. A criança aprende a falar com outros antes de usar a fala para pensar. O instrumento decisivo é a linguagem, que medeia a relação com o mundo do mesmo modo que a ferramenta medeia o trabalho.',
      'Formulou a zona de desenvolvimento proximal: a distância entre o que a criança faz sozinha e o que consegue fazer com orientação de alguém mais capaz. É nessa faixa que o ensino é produtivo, e não naquilo que a criança já domina. O conceito reorientou a pedagogia mundial. Morreu de tuberculose em Moscou em 11 de junho de 1934, aos 37 anos. Sua obra foi proibida na União Soviética por duas décadas e só chegou ao Ocidente nos anos 1960, com traduções fragmentárias.'
    ],
    contexto: 'Vygotsky trabalhou nos primeiros anos soviéticos, quando havia espaço para construir uma psicologia nova e a expectativa de que ela fundamentasse a educação de massa. A brevidade da vida e a censura posterior fizeram com que sua influência real só se fizesse sentir trinta anos depois de sua morte, e em outro continente.',
    contribuicoes: ['Formulou a teoria histórico-cultural do desenvolvimento das funções mentais superiores.', 'Criou o conceito de zona de desenvolvimento proximal, base da pedagogia contemporânea.', 'Demonstrou a mediação da linguagem na formação do pensamento.', 'Escreveu Pensamento e Linguagem e A Formação Social da Mente.', 'Fundou uma tradição de pesquisa continuada por Luria e Leontiev.'],
    cronologia: [
      [1896, 'Nasce em Orsha, em 17 de novembro.'],
      [1924, 'Ingressa no Instituto de Psicologia de Moscou.'],
      [1934, 'Morre de tuberculose em Moscou, aos 37 anos; Pensamento e Linguagem é publicado.'],
      [1936, 'Sua obra é proibida na União Soviética.'],
      [1962, 'Primeira tradução para o inglês chega ao Ocidente.']
    ]
  },

  'Reid Hoffman': {
    papel: 'Empresário e investidor norte-americano (1967–)',
    resumo: 'Fundou o LinkedIn e formulou a ideia de que toda carreira deve ser tratada como uma startup permanente.',
    bio: [
      'Reid Garrett Hoffman nasceu em Palo Alto, Califórnia, em 5 de agosto de 1967. Formou-se em ciência cognitiva em Stanford e fez mestrado em filosofia em Oxford como bolsista Marshall, com a intenção inicial de seguir carreira acadêmica. Desistiu ao concluir que teria mais influência sobre o mundo construindo produtos do que escrevendo artigos lidos por poucas dezenas de pessoas.',
      'Trabalhou na Apple e na Fujitsu, fundou uma rede social que fracassou e entrou no PayPal, onde foi diretor de operações e integrou o grupo de fundadores que ficaria conhecido como máfia do PayPal. Após a venda ao eBay, fundou o LinkedIn em 2002, na sala de sua casa.',
      'A tese do LinkedIn era que a identidade profissional merecia uma rede própria, distinta da social. A empresa cresceu lentamente por anos antes de deslanchar e foi vendida à Microsoft em 2016 por mais de vinte e seis bilhões de dólares. Hoffman tornou-se sócio da firma de capital de risco Greylock e investidor inicial em Facebook, Airbnb e Zynga, entre outras.',
      'Escreveu com Ben Casnocha O Startup de Você, cuja proposta é tratar a própria carreira como um empreendimento em fase inicial: em beta permanente, adaptável, com rede de relações como ativo principal e disposição para riscos calculados. Em Blitzscaling tratou do crescimento acelerado que prioriza velocidade sobre eficiência. Integra o conselho de organizações de pesquisa em inteligência artificial e escreveu sobre o tema.'
    ],
    contexto: 'Hoffman escreve num mercado de trabalho em que o emprego estável de longa duração deixou de ser a norma. Sua proposta é a adaptação explícita do vocabulário do empreendedorismo à trajetória individual — leitura que tem enorme circulação e que também é criticada por transferir ao trabalhador riscos que antes eram da empresa.',
    contribuicoes: ['Fundou o LinkedIn, maior rede profissional do mundo.', 'Foi diretor de operações do PayPal e integrou seu grupo fundador.', 'Escreveu O Startup de Você e Blitzscaling.', 'Investiu em estágio inicial em Facebook, Airbnb e outras empresas de grande escala.'],
    cronologia: [
      [1967, 'Nasce em Palo Alto, em 5 de agosto.'],
      [2000, 'Torna-se diretor de operações do PayPal.'],
      [2002, 'Funda o LinkedIn.'],
      [2012, 'Publica O Startup de Você.'],
      [2016, 'O LinkedIn é vendido à Microsoft.'],
      [2018, 'Publica Blitzscaling.']
    ]
  },

  'Robert Kiyosaki': {
    papel: 'Escritor e empresário norte-americano (1947–)',
    resumo: 'Escreveu Pai Rico, Pai Pobre, um dos livros de finanças pessoais mais vendidos e mais contestados da história.',
    bio: [
      'Robert Toru Kiyosaki nasceu em Hilo, no Havaí, em 8 de abril de 1947, em família nipo-americana; o pai era funcionário do sistema educacional estadual. Formou-se na Academia da Marinha Mercante, serviu como oficial de fuzileiros navais na Guerra do Vietnã como piloto de helicóptero e trabalhou depois na Xerox como vendedor.',
      'Empreendeu em vários ramos, com resultados irregulares que incluem falências, e passou a dar seminários de investimento antes de escrever. Pai Rico, Pai Pobre saiu em 1997, publicado inicialmente por conta própria, e vendeu dezenas de milhões de exemplares.',
      'A estrutura do livro contrapõe duas figuras: o pai biológico, instruído, empregado e financeiramente apertado, e o pai de um amigo, com pouca escolaridade formal e rico. A tese central distingue ativo, que põe dinheiro no bolso, de passivo, que tira — e sustenta que a maioria das pessoas compra passivos acreditando comprar ativos. Argumenta que a escola prepara para o emprego e não para a independência financeira, e defende educação financeira, investimento em imóveis e criação de negócios.',
      'A obra é objeto de crítica substancial. Jornalistas e pesquisadores questionaram a existência real do pai rico e a veracidade de episódios narrados; especialistas em finanças apontam recomendações de alto risco, defesa do endividamento alavancado e ausência de dados verificáveis. Kiyosaki responde que o livro é sobre mentalidade e não sobre instruções específicas. A discussão sobre seu valor permanece aberta.'
    ],
    contexto: 'Pai Rico, Pai Pobre apareceu num momento em que a educação financeira estava ausente do currículo escolar e a classe média americana se endividava. Seu alcance é inegável e sua função como porta de entrada no assunto é reconhecida até por críticos; a controvérsia recai sobre a exatidão das histórias e a prudência das recomendações.',
    contribuicoes: ['Escreveu Pai Rico, Pai Pobre (1997), um dos livros de finanças pessoais mais vendidos da história.', 'Popularizou a distinção prática entre ativo e passivo para o leitor comum.', 'Criou o Quadrante do Fluxo de Caixa, que classifica formas de obter renda.', 'Levou a discussão sobre educação financeira ao grande público.'],
    cronologia: [
      [1947, 'Nasce em Hilo, Havaí, em 8 de abril.'],
      [1997, 'Publica Pai Rico, Pai Pobre por conta própria.'],
      [2000, 'O livro alcança as listas internacionais de mais vendidos.'],
      [2011, 'Uma de suas empresas entra com pedido de recuperação judicial.']
    ],
    nota: 'A existência do pai rico e a veracidade de episódios do livro foram questionadas por investigações jornalísticas. Parte das recomendações financeiras é considerada de alto risco por especialistas.'
  },

  'Brian Tracy': {
    papel: 'Escritor e palestrante canadense-americano (1944–)',
    resumo: 'Sistematizou em dezenas de livros métodos de produtividade, vendas e definição de metas.',
    bio: [
      'Brian Tracy nasceu em Charlottetown, na Ilha do Príncipe Eduardo, Canadá, em 5 de janeiro de 1944, em família de poucos recursos. Abandonou o ensino médio e trabalhou como lavador de pratos, operário e trabalhador rural. Viajou por vários continentes, atravessando parte da África por terra, antes de encontrar seu ofício nas vendas.',
      'Depois de um período fracassando como vendedor de porta em porta, começou a estudar sistematicamente o que os vendedores bem-sucedidos faziam de diferente e aplicou o que aprendeu. Passou a treinar equipes e tornou-se executivo de uma empresa de desenvolvimento, chegando a diretor de operações antes de abrir a própria consultoria em 1981.',
      'Escreveu mais de oitenta livros, traduzidos para dezenas de idiomas. Os mais conhecidos são Engula Aquele Sapo, sobre executar primeiro a tarefa mais difícil do dia, Metas, sobre definição e desdobramento de objetivos, e Psicologia de Vendas. Sua abordagem é deliberadamente prática: listas, sequências e exercícios em vez de teoria.',
      'Suas ideias organizam-se em torno de poucos princípios repetidos — clareza sobre o que se quer, escrita das metas, priorização, disciplina de execução e aprendizado contínuo. A crítica recorrente é que o material é derivativo e pouco fundamentado em pesquisa; sua defesa é que o valor está na sistematização e na repetição, não na originalidade.'
    ],
    contexto: 'Tracy pertence à linhagem do desenvolvimento pessoal norte-americano que vem de Napoleon Hill e Dale Carnegie e se profissionalizou como circuito de palestras a partir dos anos 1960. Sua contribuição está menos em ideias novas do que na organização do material em formatos aplicáveis e replicáveis.',
    contribuicoes: ['Escreveu mais de oitenta livros sobre produtividade, vendas e definição de metas.', 'Popularizou o método de executar primeiro a tarefa mais difícil do dia, em Engula Aquele Sapo.', 'Sistematizou processos de venda consultiva em treinamentos aplicados internacionalmente.', 'Construiu um dos maiores programas de treinamento corporativo em vendas do mundo.'],
    cronologia: [
      [1944, 'Nasce em Charlottetown, Canadá, em 5 de janeiro.'],
      [1981, 'Funda sua própria empresa de treinamento e consultoria.'],
      [1993, 'Publica Máxima Eficácia.'],
      [2001, 'Publica Engula Aquele Sapo.']
    ]
  },

  'Melody Beattie': {
    papel: 'Escritora norte-americana (1948–2025)',
    resumo: 'Levou o conceito de codependência ao grande público a partir da própria experiência com dependência química.',
    bio: [
      'Melody Lynn Beattie nasceu em St. Paul, Minnesota, em 26 de maio de 1948. A infância foi marcada por abuso e abandono. Desenvolveu dependência de álcool e drogas na adolescência, envolveu-se com crimes ligados ao vício e chegou a ser condenada. Entrou em recuperação em 1973, aos vinte e cinco anos.',
      'Casou-se com um homem alcoólatra e trabalhou como conselheira em tratamento de dependência química. Foi nesse período que se deparou com um padrão para o qual quase não havia linguagem: pessoas ao redor do dependente que organizavam a própria vida inteira em função dele, assumindo responsabilidades que não lhes cabiam, controlando, encobrindo e adoecendo no processo.',
      'Codependência Nunca Mais saiu em 1986 e vendeu milhões de exemplares. O livro define codependência como o padrão de deixar que o comportamento de outra pessoa nos afete a ponto de nos tornarmos obcecados em controlá-lo, e propõe o desprendimento — cuidar sem assumir o que não é seu — como caminho. Foi o texto que tirou o termo dos círculos terapêuticos e o levou à conversa comum.',
      'Escreveu depois O Livro da Linguagem do Desapego e outros títulos de meditações diárias. Sua vida seguiu marcada por perdas: o filho de doze anos morreu num acidente de esqui em 1991, e ela escreveu sobre o luto em O Fim da Dor. O conceito de codependência é debatido em psicologia clínica por sua imprecisão diagnóstica, sem que isso tenha reduzido seu alcance popular. Beattie morreu em 2025.'
    ],
    contexto: 'Beattie escreve no auge do movimento de grupos de doze passos nos Estados Unidos, quando a família do dependente começava a ser reconhecida como parte do quadro. Sua contribuição foi dar nome e narrativa a uma experiência comum que não tinha vocabulário, o que explica a identificação imediata de milhões de leitores.',
    contribuicoes: ['Escreveu Codependência Nunca Mais (1986), que levou o conceito ao grande público.', 'Formulou em linguagem acessível a prática do desprendimento em relações de dependência.', 'Escreveu O Livro da Linguagem do Desapego e outros títulos de meditações diárias.', 'Escreveu sobre luto em O Fim da Dor, após a morte do filho.'],
    cronologia: [
      [1948, 'Nasce em St. Paul, Minnesota, em 26 de maio.'],
      [1973, 'Entra em recuperação da dependência química.'],
      [1986, 'Publica Codependência Nunca Mais.'],
      [1990, 'Publica O Livro da Linguagem do Desapego.'],
      [1991, 'Perde o filho num acidente e escreve sobre o luto.']
    ],
    nota: 'A codependência não é uma categoria diagnóstica formal, e sua imprecisão é objeto de debate na psicologia clínica.'
  },

  'Miguel Reale': {
    papel: 'Jurista e filósofo brasileiro (1910–2006)',
    resumo: 'Formulou a teoria tridimensional do direito e coordenou a redação do Código Civil brasileiro de 2002.',
    bio: [
      'Miguel Reale nasceu em São Bento do Sapucaí, São Paulo, em 6 de novembro de 1910, filho de um médico italiano. Formou-se na Faculdade de Direito do Largo de São Francisco em 1934 e ali lecionaria por décadas, chegando a reitor da Universidade de São Paulo em dois períodos.',
      'Na juventude integrou a Ação Integralista Brasileira, movimento de extrema-direita dos anos 1930, tendo sido um de seus principais teóricos e secretário nacional de doutrina — episódio que ele reavaliou depois e que permanece parte incontornável de sua biografia.',
      'Sua contribuição teórica central é a teoria tridimensional do direito, formulada a partir dos anos 1940. Reale sustenta que o direito não é apenas norma, como queria o positivismo de Kelsen, nem apenas fato social, nem apenas valor: é a implicação recíproca dos três. Fato, valor e norma não são dimensões separadas que se somam, e sim elementos que se exigem mutuamente em toda experiência jurídica. A formulação tornou-se dominante no ensino jurídico brasileiro.',
      'Coordenou a comissão que elaborou o anteprojeto do Código Civil, trabalho iniciado em 1969 e concluído em lei apenas em 2002, após mais de trinta anos de tramitação. O código substituiu o de 1916 e organizou-se em torno de três princípios que Reale defendia: socialidade, eticidade e operabilidade. Escreveu também obras de filosofia, entre elas Filosofia do Direito e Experiência e Cultura. Morreu em São Paulo em 14 de abril de 2006.'
    ],
    contexto: 'Reale atravessou quase todo o século XX jurídico brasileiro, do Estado Novo à redemocratização. Sua teoria responde ao impasse entre o positivismo que reduzia o direito à norma e o jusnaturalismo que o reduzia ao valor, propondo uma síntese que ganhou lugar central no pensamento jurídico em língua portuguesa.',
    contribuicoes: [
      'Formulou a teoria tridimensional do direito, com a implicação recíproca entre fato, valor e norma.',
      'Coordenou a comissão elaboradora do Código Civil brasileiro de 2002.',
      'Escreveu Filosofia do Direito e Lições Preliminares de Direito, manuais de referência no ensino jurídico.',
      'Foi reitor da Universidade de São Paulo em dois períodos.',
      'Fundou o Instituto Brasileiro de Filosofia e a Revista Brasileira de Filosofia.'
    ],
    cronologia: [
      [1910, 'Nasce em São Bento do Sapucaí, em 6 de novembro.'],
      [1934, 'Forma-se na Faculdade de Direito do Largo de São Francisco.'],
      [1953, 'Publica Filosofia do Direito.'],
      [1969, 'Assume a coordenação do anteprojeto do Código Civil.'],
      [2002, 'O Código Civil é promulgado.'],
      [2006, 'Morre em São Paulo.']
    ],
    nota: 'Reale foi um dos principais teóricos da Ação Integralista Brasileira nos anos 1930, movimento de extrema-direita, fato que integra o registro histórico de sua trajetória.'
  },

  'Hillary Clinton': {
    papel: 'Advogada e política norte-americana (1947–)',
    resumo: 'Primeira mulher indicada à presidência dos Estados Unidos por um grande partido, foi primeira-dama, senadora e secretária de Estado.',
    bio: [
      'Hillary Diane Rodham nasceu em Chicago em 26 de outubro de 1947, em família republicana de classe média. Formou-se no Wellesley College, onde foi a primeira aluna a discursar na formatura, e em direito em Yale, onde conheceu Bill Clinton. Trabalhou no Fundo de Defesa das Crianças e integrou a equipe jurídica do processo de impeachment de Richard Nixon.',
      'Mudou-se para o Arkansas, onde advogou e foi primeira-dama estadual por doze anos, com atuação em reforma educacional. Como primeira-dama dos Estados Unidos, entre 1993 e 2001, chefiou a força-tarefa de reforma do sistema de saúde, cuja proposta foi derrotada no Congresso, e ajudou a criar o programa de seguro-saúde infantil. Seu discurso em Pequim, em 1995, afirmando que direitos das mulheres são direitos humanos, tornou-se referência internacional.',
      'Elegeu-se senadora por Nova York em 2000, tornando-se a primeira ex-primeira-dama a ocupar cargo eletivo federal, e foi reeleita. Votou a favor da autorização para a guerra no Iraque, posição que depois classificou como erro e que lhe custou apoio na disputa primária de 2008 contra Barack Obama.',
      'Foi secretária de Estado entre 2009 e 2013, período que inclui a intervenção na Líbia e o ataque ao complexo americano em Bengasi, objeto de longas investigações no Congresso. Em 2016 tornou-se a primeira mulher indicada à presidência por um grande partido americano; venceu no voto popular por quase três milhões de votos e perdeu no colégio eleitoral. A investigação sobre seu uso de servidor de e-mail privado enquanto secretária marcou a campanha.'
    ],
    contexto: 'Clinton é uma das figuras mais duradouras e mais polarizadoras da política americana recente, com meio século de vida pública. Sua trajetória atravessa a transformação do papel das mulheres na política dos Estados Unidos, e sua derrota em 2016 é um dos episódios mais analisados da história eleitoral do país.',
    contribuicoes: ['Foi a primeira mulher indicada à presidência dos Estados Unidos por um grande partido.', 'Foi senadora por Nova York e secretária de Estado entre 2009 e 2013.', 'Ajudou a criar o programa federal de seguro-saúde infantil.', 'Proferiu em Pequim, em 1995, o discurso que firmou os direitos das mulheres como direitos humanos.', 'Escreveu Vivendo a História e O Que Aconteceu.'],
    cronologia: [
      [1947, 'Nasce em Chicago, em 26 de outubro.'],
      [1993, 'Torna-se primeira-dama dos Estados Unidos.'],
      [1995, 'Discursa na Conferência Mundial sobre a Mulher em Pequim.'],
      [2001, 'Assume como senadora por Nova York.'],
      [2009, 'Torna-se secretária de Estado.'],
      [2016, 'É indicada à presidência e perde no colégio eleitoral.']
    ]
  }
};

const OBRAS_F16 = {
  'Charles Dickens': [
    [
      'Oliver Twist',
      'livro',
      1838,
      'Acompanha um órfão que foge de um asilo de pobres para Londres e cai numa quadrilha de crianças batedoras de carteira. Publicado em folhetim logo após a reforma da Lei dos Pobres, que tornara a assistência deliberadamente humilhante, o romance expôs ao público leitor as condições dos asilos e do trabalho infantil. Teve efeito documentado sobre a opinião pública e sobre a discussão legislativa da época.'
    ],
    [
      'Um Conto de Natal',
      'livro',
      1843,
      'Escrito em seis semanas para saldar dívidas, narra a noite em que o avarento Ebenezer Scrooge é visitado por três espíritos que lhe mostram seu passado, presente e futuro. A novela teve efeito cultural desproporcional ao seu tamanho: reconfigurou a celebração do Natal no mundo anglófono, deslocando-a para o registro da generosidade doméstica e da responsabilidade com os pobres.'
    ],
    ['David Copperfield', 'livro', 1850, 'Romance de formação narrado em primeira pessoa, o mais autobiográfico de Dickens e seu preferido. Acompanha o protagonista da infância maltratada e do trabalho numa fábrica — episódio decalcado da própria experiência do autor — até a maturidade como escritor. Criou algumas das personagens mais lembradas de sua obra, entre elas Micawber e Uriah Heep.'],
    ['Grandes Esperanças', 'livro', 1861, 'Pip, órfão criado por uma irmã brutal, recebe de um benfeitor anônimo os recursos para tornar-se um cavalheiro em Londres, e descobre tarde demais a origem do dinheiro. É o romance em que Dickens examina com mais dureza a ascensão social, a vergonha da origem e o que ela custa a quem a persegue.'],
    ['A Casa Soturna', 'livro', 1853, 'Constrói-se em torno de um processo judicial que se arrasta por gerações e consome as fortunas das partes até não sobrar nada para herdar. A sátira ao Tribunal da Chancelaria é a mais devastadora crítica literária já feita à lentidão judicial, e o romance alterna dois narradores, recurso incomum e tecnicamente ousado para a época.']
  ],
  'Mark Twain': [
    [
      'As Aventuras de Huckleberry Finn',
      'livro',
      1884,
      'Narrado inteiramente na voz de um menino pobre e semianalfabeto, em dialeto, acompanha sua fuga rio Mississippi abaixo com Jim, homem escravizado em busca da liberdade. O ponto alto é o momento em que Huck decide ajudar Jim convencido de que irá para o inferno por isso — a consciência formada pela sociedade escravista derrotada pelo vínculo concreto. Foi o primeiro grande romance americano escrito na fala vernácula do próprio país, e Hemingway apontou nele a origem de toda a literatura americana moderna.'
    ],
    ['As Aventuras de Tom Sawyer', 'livro', 1876, 'Retrata a infância numa cidade ribeirinha do Missouri antes da Guerra Civil, com a caiação da cerca, o cemitério à noite e a caverna. Escrito como livro para adultos sobre a infância, e não como livro infantil, fixou uma imagem da meninice americana que atravessou o século.'],
    ['Vida no Mississippi', 'memoria', 1883, 'Reúne as memórias de Twain como aprendiz e piloto de barco a vapor com um relato de viagem feito duas décadas depois, quando a ferrovia já havia esvaziado o rio. A distância entre as duas partes é o que dá ao livro sua força: o mesmo lugar visto pelo jovem que o dominava e pelo homem que o perdeu.']
  ],
  'Abraham Lincoln': [
    [
      'Discurso de Gettysburg',
      'discurso',
      1863,
      'Duzentas e setenta palavras proferidas em pouco mais de dois minutos na inauguração de um cemitério militar, quatro meses após a batalha mais sangrenta da Guerra Civil. Lincoln não menciona escravidão, Sul ou generais: redefine a guerra como prova de que um governo do povo, pelo povo e para o povo pode sobreviver, e ancora a nação na Declaração de Independência e não na Constituição. É um dos textos políticos mais citados da história.'
    ],
    [
      'Proclamação de Emancipação',
      'documento',
      1863,
      'Ordem executiva que declarou livres as pessoas escravizadas nos estados em rebelião contra a União. Medida simultaneamente moral e estratégica — não alcançava os estados escravistas leais e dependia do avanço militar para se efetivar —, mudou o sentido da guerra e abriu caminho para a Décima Terceira Emenda, que aboliria a escravidão em todo o país.'
    ],
    [
      'Segundo Discurso de Posse',
      'discurso',
      1865,
      'Proferido cinco semanas antes de seu assassinato, com a guerra praticamente vencida. Lincoln recusa o tom de triunfo, atribui a escravidão à responsabilidade de todo o país e não apenas do Sul, e encerra convocando a reconstrução sem malícia para com ninguém e com caridade para com todos. É considerado por muitos historiadores seu texto mais profundo.'
    ]
  ],
  'Cora Coralina': [
    [
      'Poemas dos Becos de Goiás e Estórias Mais',
      'poesia',
      1965,
      'Primeiro livro da autora, publicado quando ela tinha 76 anos e vivia da venda de doces caseiros em Goiás Velho. Reúne poemas sobre as becas de pedra, as lavadeiras, as mulheres do interior, a infância e a velhice, em linguagem direta e sem ornamento. Registrou um Brasil profundo e feminino que a literatura urbana da época praticamente não representava, e recebeu elogio público de Carlos Drummond de Andrade.'
    ],
    ['Vintém de Cobre', 'poesia', 1983, 'Subtitulado meias confissões de Aninha, reúne poemas de tom mais autobiográfico sobre pobreza, trabalho, dignidade e a passagem do tempo. É a obra em que a voz da autora aparece com mais clareza como testemunho de uma vida inteira de trabalho.'],
    ['Meu Livro de Cordel', 'poesia', 1976, 'Reúne poemas narrativos na tradição popular, sobre amores, tragédias e histórias da cidade de Goiás. Aproxima a poesia da autora da oralidade e do repertório que ela ouvira desde a infância.']
  ],
  'Ernest Hemingway': [
    [
      'O Velho e o Mar',
      'livro',
      1952,
      'Um pescador cubano idoso, há oitenta e quatro dias sem pegar nada, fisga sozinho um marlim gigantesco e trava com ele uma luta de dias, apenas para vê-lo devorado por tubarões na volta. Escrito em poucas semanas após um período de fracasso crítico, é a aplicação mais pura da teoria do iceberg: quase nada é explicado e tudo pesa. Rendeu o Pulitzer e pesou decisivamente no Nobel de 1954.'
    ],
    ['Adeus às Armas', 'livro', 1929, 'Um motorista de ambulância americano na frente italiana da Primeira Guerra apaixona-se por uma enfermeira inglesa e deserta durante a retirada de Caporetto. Baseado na experiência do próprio Hemingway, o romance recusa qualquer heroísmo e trata palavras como glória e sacrifício como obscenidades diante dos números de mortos.'],
    ['Por Quem os Sinos Dobram', 'livro', 1940, 'Três dias na vida de um dinamitador americano encarregado de destruir uma ponte durante a Guerra Civil Espanhola, que Hemingway cobriu como correspondente. É seu romance mais extenso e o que trata com mais complexidade da violência praticada pelos dois lados de uma guerra civil.'],
    ['O Sol Também Se Levanta', 'livro', 1926, 'Acompanha um grupo de expatriados americanos e britânicos entre Paris e Pamplona, todos marcados pela Primeira Guerra. Fixou a imagem da geração perdida e estabeleceu a prosa despojada que se tornaria a marca do autor e influenciaria toda a literatura em língua inglesa.']
  ],
  'Lev Vygotsky': [
    [
      'Pensamento e Linguagem',
      'livro',
      1934,
      'Publicado no ano da morte do autor e proibido pouco depois na União Soviética, sustenta que pensamento e fala têm raízes distintas e se cruzam por volta dos dois anos, quando a fala se torna intelectual e o pensamento verbal. Analisa a fala egocêntrica infantil não como imaturidade, mas como etapa de interiorização da linguagem, contra a interpretação de Piaget. É a obra central da teoria histórico-cultural.'
    ],
    [
      'A Formação Social da Mente',
      'livro',
      1978,
      'Coletânea organizada postumamente no Ocidente a partir de textos dispersos de Vygotsky. Reúne a formulação da zona de desenvolvimento proximal — a distância entre o que a criança faz sozinha e o que consegue com orientação — e a tese de que as funções mentais superiores aparecem primeiro no plano social e só depois se interiorizam. Reorientou a pedagogia mundial a partir dos anos 1970.'
    ]
  ],
  'Reid Hoffman': [
    [
      'O Startup de Você',
      'livro',
      2012,
      'Propõe tratar a própria carreira como um empreendimento em fase inicial: em beta permanente, adaptável, com a rede de relações como ativo principal e disposição para riscos calculados e reversíveis. Escrito com Ben Casnocha num momento em que o emprego estável de longa duração deixava de ser a norma, teve grande circulação e recebe a crítica de transferir ao trabalhador riscos que antes eram da empresa.'
    ],
    ['Blitzscaling', 'livro', 2018, 'Trata do crescimento acelerado que prioriza velocidade sobre eficiência, estratégia que Hoffman viu operar no PayPal, no LinkedIn e nas empresas em que investiu. Descreve quando essa aposta faz sentido e quando destrói o negócio, e é deliberadamente franco sobre o caos organizacional que ela produz.']
  ],
  'Robert Kiyosaki': [
    [
      'Pai Rico, Pai Pobre',
      'livro',
      1997,
      'Contrapõe duas figuras — o pai biológico, instruído, empregado e financeiramente apertado, e o pai de um amigo, com pouca escolaridade e rico — para sustentar que a escola prepara para o emprego e não para a independência financeira. Sua distinção central é entre ativo, que põe dinheiro no bolso, e passivo, que tira. Publicado inicialmente por conta própria, vendeu dezenas de milhões de exemplares e é ao mesmo tempo uma das portas de entrada mais usadas na educação financeira e um dos livros mais contestados do gênero, por episódios cuja veracidade foi questionada e por recomendações consideradas de alto risco.'
    ]
  ],
  'Brian Tracy': [
    [
      'Engula Aquele Sapo',
      'livro',
      2001,
      'Parte de uma imagem atribuída a Mark Twain — se você tiver de engolir um sapo, faça isso logo pela manhã — para propor que a tarefa mais difícil e mais importante do dia seja executada primeiro, antes de qualquer outra. Reúne vinte e um métodos práticos de priorização e combate à procrastinação, em formato de listas e exercícios. É o mais lido dos mais de oitenta livros do autor.'
    ],
    ['Metas', 'livro', 2003, 'Sistematiza um método de definição e desdobramento de objetivos, da clareza sobre o que se quer até a escrita, o prazo, a lista de obstáculos e o plano diário. A ênfase está na repetição disciplinada de um processo simples, e não em ideias novas — abordagem que explica tanto seu alcance quanto a crítica de que o material é derivativo.']
  ],
  'Melody Beattie': [
    [
      'Codependência Nunca Mais',
      'livro',
      1986,
      'Define codependência como o padrão de deixar que o comportamento de outra pessoa nos afete a ponto de nos tornarmos obcecados em controlá-lo, e descreve como quem convive com um dependente passa a organizar a própria vida em função dele, adoecendo no processo. Escrito por quem passou pelos dois lados da experiência, propõe o desprendimento — cuidar sem assumir o que não é seu. Vendeu milhões de exemplares e tirou o termo dos círculos terapêuticos, ainda que a categoria não seja um diagnóstico formal.'
    ]
  ],
  'Miguel Reale': [
    [
      'Filosofia do Direito',
      'livro',
      1953,
      'Expõe de forma sistemática a teoria tridimensional do direito: fato, valor e norma não são dimensões separadas que se somam, e sim elementos que se exigem mutuamente em toda experiência jurídica. A formulação responde ao impasse entre o positivismo que reduzia o direito à norma e o jusnaturalismo que o reduzia ao valor, e tornou-se dominante no ensino jurídico brasileiro.'
    ],
    ['Lições Preliminares de Direito', 'livro', 1973, 'Manual introdutório que apresenta os conceitos fundamentais da disciplina — norma, fonte, validade, interpretação, ramos do direito — em linguagem acessível a quem está começando. É um dos livros mais adotados nos primeiros períodos das faculdades de direito no Brasil há mais de cinquenta anos.'],
    [
      'Código Civil brasileiro',
      'documento',
      2002,
      'Anteprojeto elaborado pela comissão que Reale coordenou a partir de 1969 e convertido em lei apenas em 2002, após mais de três décadas de tramitação. Substituiu o código de 1916 e organiza-se em torno de três princípios que Reale defendia: socialidade, que submete o interesse individual à função social; eticidade, que valoriza a boa-fé; e operabilidade, que busca soluções aplicáveis na prática.'
    ]
  ],
  'Hillary Clinton': [
    ['Vivendo a História', 'memoria', 2003, 'Memórias que cobrem a infância em Illinois, a formação em Wellesley e Yale, os anos no Arkansas e os oito anos na Casa Branca, incluindo a reforma da saúde derrotada no Congresso e o processo de impeachment do marido. É o registro em primeira pessoa de uma transformação no papel público da primeira-dama americana.'],
    ['O Que Aconteceu', 'memoria', 2017, 'Análise da derrota eleitoral de 2016 escrita pela própria candidata, tratando de misoginia na cobertura da campanha, interferência estrangeira, a investigação sobre os e-mails e os próprios erros estratégicos que reconhece. É documento incomum: raramente um candidato derrotado a esse nível escreve uma reconstrução detalhada do processo.']
  ]
};

(function aplicarF16() {
  Object.entries(PANORAMAS_F16).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F16).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF16() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 16:', e);
    }
  };
})();

/* ================================================================
   FASE 17 — CONTINUAÇÃO DA FILA (autores 257 em diante)
   ================================================================ */
(function reconciliarF17() {
  if (typeof AUTHOR_ALIASES === 'object' && AUTHOR_ALIASES) AUTHOR_ALIASES['Ben Zoma (Pirkei Avot)'] = 'Ben Zoma';
  QUOTES.forEach((q) => {
    if (/^Ben Zoma/.test(q.author || '')) q.author = 'Ben Zoma';
  });
  reindexarQuotes();
})();

const PANORAMAS_F17 = {
  'Luís de Camões': {
    papel: 'Poeta português (c. 1524–1580)',
    resumo: 'Escreveu Os Lusíadas, a epopeia da língua portuguesa, e morreu na miséria em Lisboa.',
    bio: [
      'Luís Vaz de Camões nasceu por volta de 1524, provavelmente em Lisboa, em família de pequena nobreza empobrecida. Sua biografia é cheia de lacunas e de episódios transmitidos por tradição sem documentação. Frequentou o ambiente da corte, foi preso após uma briga de rua em que feriu um funcionário do paço e obteve perdão com a condição de servir no ultramar.',
      'Partiu para a Índia em 1553 e passou dezessete anos no Oriente — Goa, Malaca, Macau, Moçambique — em serviço militar e administrativo, sempre em dificuldade financeira e mais de uma vez preso por dívidas. Segundo a tradição, salvou o manuscrito de Os Lusíadas a nado durante um naufrágio na foz do rio Mekong, perdendo tudo o mais. Perdeu um olho em combate no Norte da África, provavelmente em Ceuta.',
      'Voltou a Lisboa em 1570 e publicou Os Lusíadas em 1572, com pensão real modesta que mal o sustentava. O poema, em dez cantos e oitava rima, narra a viagem de Vasco da Gama à Índia entrelaçando história portuguesa, mitologia clássica e reflexão sobre o custo humano da expansão marítima — o episódio do Velho do Restelo, que condena a empresa das navegações, é a voz dissonante dentro da própria epopeia.',
      'Escreveu também uma extensa obra lírica, sonetos e redondilhas que só foram reunidos postumamente e que muitos críticos consideram tão importante quanto a epopeia. Morreu em Lisboa em 10 de junho de 1580, em pobreza, poucos meses antes de Portugal perder a independência para a Espanha. A data de sua morte é hoje o Dia de Portugal.'
    ],
    contexto: 'Camões escreve no auge e no início do declínio do império português. Os Lusíadas celebra a expansão e simultaneamente registra sua dúvida sobre ela, e é essa ambiguidade — impossível numa propaganda — que sustenta a obra como literatura.',
    contribuicoes: ['Escreveu Os Lusíadas (1572), a epopeia fundadora da literatura em língua portuguesa.', 'Deixou uma obra lírica extensa, com sonetos entre os mais celebrados da língua.', 'Fixou padrões do português literário que atravessaram séculos.', 'A data de sua morte tornou-se o Dia de Portugal, de Camões e das Comunidades Portuguesas.'],
    cronologia: [
      ['c. 1524', 'Nasce, provavelmente em Lisboa.'],
      [1553, 'Parte para a Índia.'],
      [1570, 'Retorna a Lisboa após dezessete anos no Oriente.'],
      [1572, 'Publica Os Lusíadas.'],
      [1580, 'Morre em Lisboa, em 10 de junho.']
    ]
  },

  'Antoine de Saint-Exupéry': {
    papel: 'Escritor e aviador francês (1900–1944)',
    resumo: 'Piloto dos primeiros correios aéreos, escreveu O Pequeno Príncipe e desapareceu num voo de reconhecimento.',
    bio: [
      'Antoine Marie Jean-Baptiste Roger de Saint-Exupéry nasceu em Lyon em 29 de junho de 1900, em família aristocrática. O pai morreu quando ele tinha quatro anos. Reprovou no exame para a escola naval, estudou brevemente arquitetura e aprendeu a voar durante o serviço militar, em 1921.',
      'Entrou na Aéropostale, empresa pioneira do correio aéreo, e voou rotas sobre o deserto do Saara e depois sobre os Andes, na Argentina, em aviões frágeis e sem instrumentos confiáveis. Foi chefe de escala em Cabo Juby, no Saara espanhol, onde negociava a libertação de pilotos capturados. Dessa experiência saíram Correio Sul, Voo Noturno — que ganhou o prêmio Femina em 1931 — e Terra dos Homens.',
      'Em 1935 caiu no deserto da Líbia numa tentativa de recorde e sobreviveu quatro dias com o mecânico, sem água, resgatado por um beduíno. O episódio está na origem do encontro no deserto de O Pequeno Príncipe, escrito e ilustrado por ele em Nova York, onde vivia exilado, e publicado em 1943.',
      'O livro, aparentemente infantil, trata de perda, responsabilidade, vínculo e da incapacidade adulta de ver o essencial. Tornou-se um dos livros mais traduzidos do mundo. Saint-Exupéry insistiu em voltar ao serviço militar apesar da idade e de sequelas de acidentes, e desapareceu em 31 de julho de 1944 num voo de reconhecimento sobre o Mediterrâneo. Destroços de seu avião foram localizados perto de Marselha em 2000.'
    ],
    contexto: 'Saint-Exupéry pertence à geração que fez da aviação um ofício de risco extremo e de camaradagem, antes que ela se tornasse indústria. Sua obra transforma essa experiência concreta em reflexão moral, e é essa origem prática que a distingue da literatura de ideias de seu tempo.',
    contribuicoes: ['Escreveu O Pequeno Príncipe (1943), um dos livros mais traduzidos e vendidos do mundo.', 'Escreveu Voo Noturno, Terra dos Homens e Piloto de Guerra.', 'Foi pioneiro das rotas de correio aéreo sobre o Saara e os Andes.', 'Recebeu o prêmio Femina em 1931 e o National Book Award americano em 1940.'],
    cronologia: [
      [1900, 'Nasce em Lyon, em 29 de junho.'],
      [1926, 'Entra na Aéropostale.'],
      [1931, 'Publica Voo Noturno.'],
      [1935, 'Cai no deserto da Líbia e sobrevive quatro dias.'],
      [1939, 'Publica Terra dos Homens.'],
      [1943, 'Publica O Pequeno Príncipe.'],
      [1944, 'Desaparece em voo sobre o Mediterrâneo, em 31 de julho.']
    ]
  },

  'John F. Kennedy': {
    papel: 'Político norte-americano, 35º presidente dos Estados Unidos (1917–1963)',
    resumo: 'Conduziu a crise dos mísseis de Cuba sem guerra nuclear e foi assassinado no terceiro ano de mandato.',
    bio: [
      'John Fitzgerald Kennedy nasceu em Brookline, Massachusetts, em 29 de maio de 1917, segundo de nove filhos de uma família rica e politicamente ambiciosa. Teve saúde frágil a vida inteira, com problemas de coluna e doença de Addison, tratados com medicação constante e mantidos em segredo. Formou-se em Harvard e serviu na Marinha na Segunda Guerra; após o afundamento de sua lancha torpedeira no Pacífico, nadou por horas rebocando um tripulante ferido.',
      'Elegeu-se deputado, depois senador por Massachusetts, e venceu a presidência em 1960 na eleição mais apertada do século, após os primeiros debates televisionados da história americana. Aos 43 anos, foi o presidente mais jovem eleito e o primeiro católico.',
      'Seu governo começou com o desastre da invasão da Baía dos Porcos, em Cuba, cuja responsabilidade assumiu publicamente. Em outubro de 1962, a descoberta de mísseis soviéticos na ilha levou o mundo ao ponto mais próximo de uma guerra nuclear; Kennedy recusou o bombardeio defendido por parte do comando militar e optou por um bloqueio naval combinado a negociação secreta, que incluiu a retirada de mísseis americanos na Turquia. A crise terminou em treze dias.',
      'Criou o Corpo da Paz, lançou o programa que levaria o homem à Lua, assinou o tratado de proibição parcial de testes nucleares e enviou ao Congresso o projeto que se tornaria a Lei dos Direitos Civis de 1964, aprovada após sua morte. Foi assassinado em Dallas em 22 de novembro de 1963. Sua vida privada, incluindo relações extraconjugais e o estado real de sua saúde, só se tornou pública décadas depois.'
    ],
    contexto: 'Kennedy governou no auge da Guerra Fria e no início da mobilização pelos direitos civis. A brevidade do mandato e a violência de sua morte produziram uma imagem pública que a historiografia posterior revisou em vários pontos, sem reduzir a importância das decisões de outubro de 1962.',
    contribuicoes: ['Conduziu a crise dos mísseis de Cuba sem escalada para conflito nuclear.', 'Lançou o programa espacial que levaria o homem à Lua em 1969.', 'Criou o Corpo da Paz.', 'Assinou o Tratado de Proibição Parcial de Testes Nucleares, em 1963.', 'Enviou ao Congresso o projeto que originaria a Lei dos Direitos Civis de 1964.'],
    cronologia: [
      [1917, 'Nasce em Brookline, Massachusetts, em 29 de maio.'],
      [1943, 'Sobrevive ao afundamento de sua lancha no Pacífico.'],
      [1960, 'Vence a eleição presidencial após os primeiros debates televisionados.'],
      [1961, 'Invasão da Baía dos Porcos e criação do Corpo da Paz.'],
      [1962, 'Conduz a crise dos mísseis de Cuba.'],
      [1963, 'É assassinado em Dallas, em 22 de novembro.']
    ]
  },

  'Marcel Proust': {
    papel: 'Escritor francês (1871–1922)',
    resumo: 'Passou catorze anos escrevendo Em Busca do Tempo Perdido, um dos romances mais extensos e influentes da literatura.',
    bio: [
      'Valentin Louis Georges Eugène Marcel Proust nasceu em Auteuil, Paris, em 10 de julho de 1871, filho de um médico eminente e de uma mãe judia culta a quem foi extremamente ligado. Teve a primeira crise de asma aos nove anos, e a doença determinou sua vida: crises frequentes, isolamento e, nos últimos anos, uma existência quase inteiramente noturna num quarto forrado de cortiça para abafar o ruído.',
      'Frequentou por anos os salões da alta sociedade parisiense, sendo visto sobretudo como diletante mundano. Publicou ensaios, traduziu Ruskin e escreveu um romance que abandonou. A morte da mãe em 1905 foi devastadora e antecedeu a reclusão em que a obra seria escrita.',
      'Em Busca do Tempo Perdido tem sete volumes e cerca de um milhão e meio de palavras. O primeiro, No Caminho de Swann, foi recusado por editores — inclusive por André Gide, que depois classificou a recusa como o maior erro de sua vida — e publicado por conta do autor em 1913. O segundo volume recebeu o Prêmio Goncourt em 1919.',
      'A obra parte de uma sensação involuntária — o gosto de um bolinho molhado no chá — que devolve ao narrador um mundo inteiro esquecido, e desenvolve a partir daí uma investigação sobre memória, tempo, amor, ciúme, arte e a mecânica da vida social. Proust reescreveu e ampliou os volumes finais até a morte, em 18 de novembro de 1922; os três últimos saíram postumamente.'
    ],
    contexto: 'Proust escreve na passagem do século XIX ao XX, quando a aristocracia francesa perdia função e a burguesia ocupava seu lugar. Sua obra registra essa transição com precisão sociológica e, ao mesmo tempo, desloca o romance do enredo para a consciência, procedimento que definiria a ficção moderna junto com Joyce e Woolf.',
    contribuicoes: ['Escreveu Em Busca do Tempo Perdido, em sete volumes.', 'Formulou literariamente a memória involuntária como acesso ao tempo vivido.', 'Transformou o romance ao deslocar seu centro do enredo para a consciência e a percepção.', 'Recebeu o Prêmio Goncourt em 1919.'],
    cronologia: [
      [1871, 'Nasce em Paris, em 10 de julho.'],
      [1905, 'Morre sua mãe; inicia o período de reclusão.'],
      [1913, 'Publica No Caminho de Swann, por conta própria.'],
      [1919, 'Recebe o Prêmio Goncourt.'],
      [1922, 'Morre em Paris, em 18 de novembro.'],
      [1927, 'O último volume é publicado postumamente.']
    ]
  },

  'Padre Antônio Vieira': {
    papel: 'Jesuíta, orador e diplomata português (1608–1697)',
    resumo: 'O maior prosador da língua portuguesa no século XVII, pregou contra a escravidão indígena e foi condenado pela Inquisição.',
    bio: [
      'António Vieira nasceu em Lisboa em 6 de fevereiro de 1608 e foi levado à Bahia aos seis anos. Entrou na Companhia de Jesus aos quinze, contra a vontade da família. Aprendeu tupi e kimbundu e formou-se num Brasil colonial em que o trabalho indígena e africano sustentava toda a economia.',
      'Tornou-se o pregador mais célebre de sua época. O Sermão de Santo Antônio aos Peixes, pregado em São Luís em 1654, é uma alegoria em que Vieira, proibido de acusar diretamente os colonos, dirige-se aos peixes para denunciar a exploração dos índios — os grandes que comem os pequenos. O Sermão da Sexagésima é um tratado sobre a arte de pregar disfarçado de sermão.',
      'Foi diplomata de dom João IV em Haia, Paris, Roma e Londres, negociando o reconhecimento da independência portuguesa após a restauração de 1640 e defendendo a permanência dos cristãos-novos em Portugal como forma de manter capital no reino. Missionou por anos no Maranhão e no Pará, enfrentando a hostilidade dos colonos, que chegaram a expulsar os jesuítas.',
      'Sua posição sobre a escravidão é complexa e é objeto de debate: combateu com energia a escravização dos indígenas e não fez o mesmo em relação aos africanos, tendo justificado a escravidão africana em alguns sermões. Foi processado pela Inquisição por suas ideias milenaristas expostas em História do Futuro e na defesa dos cristãos-novos, condenado em 1667 e proibido de pregar, sentença depois revogada em Roma. Morreu na Bahia em 18 de julho de 1697.'
    ],
    contexto: 'Vieira atua no império português do século XVII, entre a restauração da independência e a economia colonial escravista. Sua obra é o ponto mais alto da prosa barroca em português e um documento incontornável — inclusive em suas contradições — sobre como a colonização foi justificada e contestada por dentro.',
    contribuicoes: ['Escreveu os Sermões, ponto mais alto da prosa barroca em língua portuguesa.', 'Denunciou a escravização e a exploração dos povos indígenas no Brasil colonial.', 'Atuou como diplomata na consolidação da independência portuguesa após 1640.', 'Escreveu História do Futuro e a Clavis Prophetarum, obras milenaristas.'],
    cronologia: [
      [1608, 'Nasce em Lisboa, em 6 de fevereiro.'],
      [1614, 'Chega à Bahia.'],
      [1654, 'Prega o Sermão de Santo Antônio aos Peixes, em São Luís.'],
      [1662, 'É expulso do Maranhão com os demais jesuítas.'],
      [1667, 'É condenado pela Inquisição e proibido de pregar.'],
      [1697, 'Morre na Bahia.']
    ],
    nota: 'Vieira combateu a escravização indígena, mas justificou a escravidão africana em parte de seus sermões. A contradição é objeto de debate historiográfico.'
  },

  'Max Planck': {
    papel: 'Físico alemão (1858–1947)',
    resumo: 'Descobriu que a energia é emitida em pacotes discretos e, sem pretender, fundou a física quântica.',
    bio: [
      'Max Karl Ernst Ludwig Planck nasceu em Kiel em 23 de abril de 1858, em família de acadêmicos e juristas. Foi aconselhado por um professor a não seguir física, sob o argumento de que quase tudo já estava descoberto e restavam apenas detalhes. Doutorou-se em termodinâmica e tornou-se professor em Berlim.',
      'Em 1900, tentando resolver o problema da radiação do corpo negro — a discrepância entre a teoria clássica e os dados experimentais —, Planck encontrou uma fórmula que só funcionava se a energia fosse emitida e absorvida em pacotes discretos, múltiplos de uma constante mínima. Ele próprio considerou o recurso um artifício matemático desconfortável e passou anos tentando reconciliá-lo com a física clássica. Einstein mostrou em 1905 que os pacotes eram reais.',
      'Recebeu o Nobel de Física em 1918. Foi figura central da ciência alemã e defendeu Einstein publicamente quando a física relativista passou a ser atacada por antissemitas. Permaneceu na Alemanha sob o nazismo, tentando preservar as instituições científicas por dentro — postura criticada por uns como colaboração passiva e defendida por outros como única forma de salvar o que restava.',
      'Sua vida pessoal foi devastada: a primeira esposa e quatro dos cinco filhos morreram antes dele. O filho Erwin foi executado em 1945 por envolvimento no atentado contra Hitler. Sua casa em Berlim foi destruída num bombardeio. Morreu em Göttingen em 4 de outubro de 1947. A principal sociedade científica alemã leva seu nome.'
    ],
    contexto: 'Planck é o caso mais nítido de um cientista conservador que abre uma revolução contra a própria vontade. Sua constatação de 1900 desmontou a física clássica que ele defendia, e é dela que decorrem a mecânica quântica e boa parte da tecnologia do século XX.',
    contribuicoes: ['Formulou em 1900 a lei da radiação do corpo negro e introduziu o quantum de ação.', 'Estabeleceu a constante que leva seu nome, uma das constantes fundamentais da física.', 'Recebeu o Prêmio Nobel de Física em 1918.', 'Defendeu publicamente Einstein e a física relativista contra ataques ideológicos.'],
    cronologia: [
      [1858, 'Nasce em Kiel, em 23 de abril.'],
      [1900, 'Apresenta a lei da radiação e introduz o quantum.'],
      [1918, 'Recebe o Prêmio Nobel de Física.'],
      [1945, 'O filho Erwin é executado pelo regime nazista.'],
      [1947, 'Morre em Göttingen.']
    ]
  },

  'Gloria Steinem': {
    papel: 'Jornalista e ativista feminista norte-americana (1934–)',
    resumo: 'Infiltrou-se como coelhinha da Playboy para denunciar as condições de trabalho e tornou-se uma das vozes centrais do feminismo americano.',
    bio: [
      'Gloria Marie Steinem nasceu em Toledo, Ohio, em 25 de março de 1934. Passou a infância viajando em trailer com o pai, vendedor ambulante, e depois cuidando sozinha da mãe, que sofria de transtorno mental grave e recebia tratamento precário — experiência que ela apontaria como origem de sua percepção sobre como mulheres eram tratadas pelo sistema de saúde.',
      'Formou-se no Smith College e trabalhou como jornalista freelance em Nova York, num mercado que reservava às mulheres pautas de moda e culinária. Em 1963 aceitou emprego disfarçada como coelhinha no Playboy Club para reportagem, e o texto resultante expôs salários enganosos, exigências físicas e assédio. A matéria a tornou conhecida e, por anos, dificultou que a levassem a sério como repórter política.',
      'Passou a cobrir política e a militar. Em 1971 cofundou a revista Ms., primeira publicação feminista de grande circulação nos Estados Unidos, e ajudou a criar o National Women\u2019s Political Caucus. Fez campanha pela Emenda de Direitos Iguais, pelo direito ao aborto e por legislação contra assédio.',
      'Escreveu Revolução Interior, Ações Ultrajantes e Rebeldias Cotidianas e Minha Vida na Estrada. Permaneceu ativa por mais de meio século e é frequentemente apontada como a figura pública mais reconhecível da segunda onda feminista americana, tendo também recebido críticas de feministas negras e da classe trabalhadora quanto ao alcance da pauta que representava.'
    ],
    contexto: 'Steinem construiu sua atuação no cruzamento entre jornalismo e militância, num momento em que a imprensa americana não tratava direitos das mulheres como assunto sério. A criação da revista Ms. foi a resposta institucional a isso: um veículo que não precisava pedir licença para pautar o tema.',
    contribuicoes: [
      'Cofundou a revista Ms., primeira publicação feminista de grande circulação nos Estados Unidos.',
      'Escreveu a reportagem infiltrada sobre o Playboy Club, marco do jornalismo investigativo sobre condições de trabalho femininas.',
      'Cofundou o National Women\u2019s Political Caucus e a Ms. Foundation for Women.',
      'Escreveu Revolução Interior e Minha Vida na Estrada.',
      'Recebeu a Medalha Presidencial da Liberdade em 2013.'
    ],
    cronologia: [
      [1934, 'Nasce em Toledo, Ohio, em 25 de março.'],
      [1963, 'Publica a reportagem infiltrada sobre o Playboy Club.'],
      [1971, 'Cofunda a revista Ms. e o National Women\u2019s Political Caucus.'],
      [1992, 'Publica Revolução Interior.'],
      [2013, 'Recebe a Medalha Presidencial da Liberdade.'],
      [2015, 'Publica Minha Vida na Estrada.']
    ]
  },

  'Djamila Ribeiro': {
    papel: 'Filósofa e escritora brasileira (1980–)',
    resumo: 'Levou o conceito de lugar de fala ao debate público brasileiro e é uma das principais vozes do feminismo negro no país.',
    bio: [
      'Djamila Taís Ribeiro dos Santos nasceu em Santos, São Paulo, em 1º de agosto de 1980. O pai era portuário, militante do movimento negro e comunista, e a formação política começou em casa. Perdeu a mãe aos dezenove anos e o pai pouco depois, e trabalhou como recepcionista e vendedora antes de entrar na universidade aos vinte e seis.',
      'Formou-se em filosofia na Universidade Federal de São Paulo e fez mestrado em filosofia política, com pesquisa sobre Simone de Beauvoir e a teoria do ponto de vista feminista. Foi secretária-adjunta de Direitos Humanos e Cidadania de São Paulo entre 2016 e 2017.',
      'O Que É Lugar de Fala?, de 2017, é seu texto mais conhecido. Ribeiro esclarece que o conceito, derivado da teoria feminista do ponto de vista, não significa que só se pode falar da própria experiência nem proíbe ninguém de opinar: trata de reconhecer que a posição social de quem fala condiciona o que consegue ver, e que vozes historicamente silenciadas foram sistematicamente excluídas dos lugares de produção de conhecimento. A formulação circulou muito além do meio acadêmico e foi frequentemente distorcida no debate público.',
      'Coordena a coleção Feminismos Plurais, que publica autoras negras brasileiras em formato acessível, e escreveu Quem Tem Medo do Feminismo Negro? e Pequeno Manual Antirracista, que recebeu o Prêmio Jabuti em 2020. Recebeu o Prêmio Príncipe Claus, dos Países Baixos, em 2019.'
    ],
    contexto: 'Ribeiro escreve num Brasil em que o debate racial ganhou centralidade pública a partir dos anos 2010, com as políticas de cotas e a ampliação do acesso de pessoas negras à universidade. Sua contribuição é sobretudo de tradução: levar conceitos da teoria feminista e decolonial a uma linguagem que circula fora da academia.',
    contribuicoes: ['Escreveu O Que É Lugar de Fala? (2017), que introduziu o conceito no debate público brasileiro.', 'Escreveu Pequeno Manual Antirracista, vencedor do Prêmio Jabuti em 2020.', 'Coordena a coleção Feminismos Plurais, dedicada a autoras negras brasileiras.', 'Foi secretária-adjunta de Direitos Humanos e Cidadania de São Paulo.', 'Recebeu o Prêmio Príncipe Claus em 2019.'],
    cronologia: [
      [1980, 'Nasce em Santos, em 1º de agosto.'],
      [2016, 'Torna-se secretária-adjunta de Direitos Humanos de São Paulo.'],
      [2017, 'Publica O Que É Lugar de Fala?'],
      [2019, 'Publica Pequeno Manual Antirracista e recebe o Prêmio Príncipe Claus.'],
      [2020, 'Recebe o Prêmio Jabuti.']
    ]
  },

  'Papa Francisco': {
    papel: 'Líder religioso argentino, 266º papa (1936–2025)',
    resumo: 'Primeiro papa latino-americano e primeiro jesuíta, deslocou o foco da Igreja para pobreza, migração e meio ambiente.',
    bio: [
      'Jorge Mario Bergoglio nasceu em Buenos Aires em 17 de dezembro de 1936, filho de imigrantes italianos; o pai era ferroviário. Formou-se técnico em química e trabalhou num laboratório antes de entrar no seminário. Perdeu parte de um pulmão aos vinte e um anos por infecção grave. Ingressou na Companhia de Jesus em 1958 e foi ordenado em 1969.',
      'Foi provincial dos jesuítas argentinos durante a ditadura militar, período sobre o qual pesaram acusações de omissão em relação a dois padres sequestrados — versão contestada por depoimentos posteriores, inclusive de um dos envolvidos, e por documentos que mostram sua atuação para proteger perseguidos. Tornou-se arcebispo de Buenos Aires em 1998 e cardeal em 2001, conhecido por viver em apartamento simples e usar transporte público.',
      'Eleito papa em março de 2013, após a renúncia de Bento XVI, escolheu o nome Francisco em referência ao santo de Assis. Recusou o apartamento pontifício, adotou linguagem direta e colocou pobreza, migração e desigualdade no centro do discurso. Sua pergunta sobre quem é ele para julgar uma pessoa homossexual que busca a Deus marcou uma mudança de tom, ainda que não de doutrina.',
      'A encíclica Laudato Si\u2019, de 2015, tratou da crise ambiental como questão moral e social e teve repercussão muito além da Igreja. Fratelli Tutti, de 2020, abordou fraternidade e amizade social. Reformou a administração do Vaticano, endureceu normas contra abuso sexual no clero — depois de críticas por lentidão inicial — e enfrentou resistência de setores conservadores. Morreu em 2025.'
    ],
    contexto: 'Francisco assumiu num momento de crise institucional profunda da Igreja Católica, entre escândalos de abuso, disputas internas na Cúria e perda de fiéis. Sua escolha de prioridades reorientou o discurso público da instituição sem alterar a maior parte de sua doutrina, o que explica a insatisfação simultânea de progressistas e conservadores.',
    contribuicoes: [
      'Foi o primeiro papa latino-americano e o primeiro jesuíta.',
      'Escreveu a encíclica Laudato Si\u2019 (2015), sobre crise ambiental e justiça social.',
      'Escreveu Fratelli Tutti (2020), sobre fraternidade e amizade social.',
      'Reformou a estrutura administrativa e financeira do Vaticano.',
      'Endureceu as normas da Igreja sobre denúncia e responsabilização em casos de abuso sexual.'
    ],
    cronologia: [
      [1936, 'Nasce em Buenos Aires, em 17 de dezembro.'],
      [1969, 'É ordenado sacerdote.'],
      [1998, 'Torna-se arcebispo de Buenos Aires.'],
      [2013, 'É eleito papa, em março.'],
      [2015, 'Publica Laudato Si\u2019.'],
      [2020, 'Publica Fratelli Tutti.'],
      [2025, 'Morre.']
    ]
  },

  'Gertrude Stein': {
    papel: 'Escritora norte-americana (1874–1946)',
    resumo: 'Reuniu em seu apartamento em Paris a vanguarda do século XX e escreveu uma prosa deliberadamente antinarrativa.',
    bio: [
      'Gertrude Stein nasceu em Allegheny, Pensilvânia, em 3 de fevereiro de 1874, em família judaica abastada. Estudou psicologia no Radcliffe College com William James, que a marcou profundamente, e cursou medicina em Johns Hopkins sem concluir. Mudou-se para Paris em 1903 com o irmão Leo.',
      'O apartamento da rua de Fleurus tornou-se o centro da vanguarda europeia. Stein e o irmão compraram Cézanne, Matisse e Picasso quando esses artistas eram desconhecidos e baratos; o retrato que Picasso fez dela exigiu dezenas de sessões e é hoje um marco na transição dele para o cubismo. Pelo salão passaram Hemingway, Fitzgerald, Joyce, Pound e Braque. Foi ela quem cunhou, numa conversa com Hemingway, a expressão geração perdida.',
      'Sua escrita procurou fazer com as palavras o que os cubistas faziam com a forma: repetição, ritmo, desmontagem da sintaxe e recusa da narrativa convencional. Tender Buttons, de 1914, descreve objetos comuns em prosa que rompe qualquer expectativa de descrição. O verso sobre a rosa que é uma rosa é uma rosa é sua frase mais conhecida, escrita para devolver à palavra sua força depois de séculos de uso poético gasto.',
      'Viveu por quase quatro décadas com Alice B. Toklas. A Autobiografia de Alice B. Toklas, de 1933 — escrita por Stein na voz da companheira —, foi seu único sucesso comercial e tornou-a celebridade. Permaneceu na França ocupada durante a guerra, situação incomum para uma judia e cujas circunstâncias, envolvendo a proteção de um colaboracionista conhecido, permanecem objeto de debate. Morreu em Neuilly-sur-Seine em 27 de julho de 1946.'
    ],
    contexto: 'Stein é ao mesmo tempo autora experimental de recepção difícil e figura organizadora da vanguarda parisiense. Sua influência sobre a prosa do século XX foi exercida menos pelos próprios livros do que pelo efeito direto sobre escritores que a frequentaram, Hemingway acima de todos.',
    contribuicoes: ['Reuniu em seu salão parisiense a vanguarda literária e artística do início do século XX.', 'Foi colecionadora pioneira de Cézanne, Matisse e Picasso.', 'Escreveu Tender Buttons e A Autobiografia de Alice B. Toklas.', 'Cunhou a expressão geração perdida.', 'Influenciou diretamente a prosa de Hemingway e Sherwood Anderson.'],
    cronologia: [
      [1874, 'Nasce em Allegheny, Pensilvânia, em 3 de fevereiro.'],
      [1903, 'Muda-se para Paris.'],
      [1906, 'Picasso conclui seu retrato.'],
      [1914, 'Publica Tender Buttons.'],
      [1933, 'Publica A Autobiografia de Alice B. Toklas.'],
      [1946, 'Morre em Neuilly-sur-Seine.']
    ]
  },

  'Alexandre Dumas': {
    papel: 'Escritor francês (1802–1870)',
    resumo: 'Escreveu Os Três Mosqueteiros e O Conde de Monte Cristo, e produziu em escala industrial com uma oficina de colaboradores.',
    bio: [
      'Alexandre Dumas nasceu em Villers-Cotterêts em 24 de julho de 1802. O pai, Thomas-Alexandre Dumas, foi general de Napoleão e filho de um marquês francês com uma mulher negra escravizada em Saint-Domingue — o que fazia de Dumas neto de uma pessoa escravizada, condição que lhe rendeu ataques racistas ao longo da vida. O pai caiu em desgraça e morreu quando ele tinha três anos, deixando a família pobre.',
      'Chegou a Paris quase sem instrução formal, obteve emprego de copista graças à boa caligrafia e ao nome do pai, e projetou-se primeiro no teatro romântico. A partir de 1838 voltou-se ao romance de folhetim, formato que a imprensa de massa francesa acabara de inventar.',
      'Os Três Mosqueteiros e O Conde de Monte Cristo saíram ambos em 1844, em jornais diferentes, simultaneamente. Dumas trabalhava com uma equipe de colaboradores — Auguste Maquet foi o principal — que pesquisava e esboçava enredos que ele reescrevia. A prática era conhecida e gerou processos e polêmica, sem que a autoria da voz e do ritmo, que são o que distingue os livros, seja contestada.',
      'Ganhou e perdeu fortunas, construiu um castelo que teve de vender, exilou-se por dívidas, apoiou Garibaldi na unificação italiana e escreveu, entre romances, peças, memórias e um dicionário de culinária, uma obra de dimensões enormes. Morreu em Puys em 5 de dezembro de 1870. Foi transferido para o Panteão em 2002.'
    ],
    contexto: 'Dumas é o autor que melhor encarna a passagem da literatura para a lógica industrial: escrita em folhetim, produção em equipe, público de massa e pagamento por linha. Seus livros permanecem entre os mais adaptados da história, e sua ascendência africana, por muito tempo minimizada, voltou ao centro da leitura de sua obra.',
    contribuicoes: ['Escreveu Os Três Mosqueteiros e O Conde de Monte Cristo, ambos em 1844.', 'Consolidou o romance de folhetim histórico como forma popular de massa.', 'Escreveu A Rainha Margot, Vinte Anos Depois e O Visconde de Bragelonne.', 'Foi transferido para o Panteão de Paris em 2002.'],
    cronologia: [
      [1802, 'Nasce em Villers-Cotterêts, em 24 de julho.'],
      [1829, 'Estreia a peça Henrique III e Sua Corte.'],
      [1844, 'Publica Os Três Mosqueteiros e O Conde de Monte Cristo.'],
      [1860, 'Acompanha Garibaldi na campanha da Sicília.'],
      [1870, 'Morre em Puys.'],
      [2002, 'É transferido para o Panteão.']
    ]
  },

  'Agatha Christie': {
    papel: 'Escritora britânica (1890–1976)',
    resumo: 'A romancista mais vendida da história, criou Hercule Poirot e Miss Marple e desapareceu por onze dias em 1926.',
    bio: [
      'Agatha Mary Clarissa Miller nasceu em Torquay, Inglaterra, em 15 de setembro de 1890. Foi educada em casa e aprendeu a ler sozinha aos quatro anos. Durante a Primeira Guerra trabalhou como voluntária num hospital e depois numa farmácia — experiência decisiva, já que o conhecimento de venenos que adquiriu ali aparece com precisão técnica em dezenas de seus livros.',
      'Publicou O Misterioso Caso de Styles em 1920, apresentando Hercule Poirot, detetive belga refugiado, obsessivo e vaidoso. Miss Marple, a senhora idosa de aldeia que resolve crimes por analogia com fofocas de vizinhança, estreou em 1930.',
      'Em dezembro de 1926, após a morte da mãe e a revelação de que o marido queria o divórcio, desapareceu por onze dias. O carro foi encontrado abandonado, mais de mil policiais participaram das buscas e Arthur Conan Doyle chegou a consultar um médium. Foi localizada num hotel em Harrogate, registrada com o sobrenome da amante do marido. Nunca explicou o episódio publicamente.',
      'Casou-se depois com o arqueólogo Max Mallowan e passou temporadas em escavações no Oriente Médio, cenário de vários romances. Escreveu sessenta e seis romances policiais, contos e a peça A Ratoeira, em cartaz em Londres desde 1952. O Assassinato de Roger Ackroyd e O Caso dos Dez Negrinhos — republicado como E Não Sobrou Nenhum — são apontados como suas construções mais engenhosas. Morreu em Wallingford em 12 de janeiro de 1976.'
    ],
    contexto: 'Christie fixou as regras do romance policial de enigma: o crime como problema lógico, as pistas todas dadas ao leitor e a solução no fim. Sua obra é o padrão contra o qual o gênero foi construído e depois subvertido, e ela é a autora de ficção mais vendida de todos os tempos.',
    contribuicoes: ['Escreveu sessenta e seis romances policiais e criou Hercule Poirot e Miss Marple.', 'É a autora de ficção mais vendida da história.', 'Escreveu A Ratoeira, peça em cartaz ininterrupto em Londres desde 1952.', 'Consolidou as regras do romance policial de enigma.'],
    cronologia: [
      [1890, 'Nasce em Torquay, em 15 de setembro.'],
      [1920, 'Publica O Misterioso Caso de Styles.'],
      [1926, 'Publica O Assassinato de Roger Ackroyd e desaparece por onze dias.'],
      [1930, 'Apresenta Miss Marple.'],
      [1939, 'Publica E Não Sobrou Nenhum.'],
      [1952, 'Estreia A Ratoeira.'],
      [1976, 'Morre em Wallingford.']
    ]
  },

  'Érico Veríssimo': {
    papel: 'Escritor brasileiro (1905–1975)',
    resumo: 'Narrou dois séculos de história do Rio Grande do Sul em O Tempo e o Vento.',
    bio: [
      'Érico Lopes Veríssimo nasceu em Cruz Alta, Rio Grande do Sul, em 17 de dezembro de 1905. A família empobreceu e os pais se separaram; ele abandonou o internato e trabalhou como balconista, caixeiro e sócio de uma farmácia que faliu. Aprendeu inglês sozinho e passou a traduzir.',
      'Mudou-se para Porto Alegre em 1930 e entrou na Editora Globo, onde foi tradutor, redator e depois diretor editorial, com papel decisivo na formação do catálogo que introduziu no Brasil autores como Huxley, Steinbeck e Virginia Woolf. Publicou Clarissa em 1933 e firmou-se com Olhai os Lírios do Campo, de 1938.',
      'O Tempo e o Vento, sua obra maior, foi escrita entre 1949 e 1961 em três partes — O Continente, O Retrato e O Arquipélago —, somando sete volumes. Acompanha as famílias Terra e Cambará ao longo de dois séculos, das missões jesuíticas à ditadura do Estado Novo, com Ana Terra e o capitão Rodrigo entre as personagens mais conhecidas da literatura brasileira.',
      'Viveu nos Estados Unidos como professor e como diretor do departamento cultural da União Panamericana em Washington. Escreveu Incidente em Antares, de 1971, sátira em que mortos insepultos voltam para acusar os vivos, publicada em plena ditadura militar e lida como crítica direta ao regime. Morreu em Porto Alegre em 28 de novembro de 1975.'
    ],
    contexto: 'Veríssimo escreve o romance histórico brasileiro em escala que quase não tem paralelo no país. Sua obra formou a imagem literária do Rio Grande do Sul e, ao mesmo tempo, recusou o regionalismo pitoresco: o que interessa nela é como violência, poder e propriedade atravessam gerações.',
    contribuicoes: ['Escreveu O Tempo e o Vento, em sete volumes, um dos maiores ciclos romanescos da literatura brasileira.', 'Escreveu Olhai os Lírios do Campo e Incidente em Antares.', 'Foi diretor editorial da Editora Globo e responsável por introduzir no Brasil grandes autores estrangeiros.', 'Dirigiu o departamento cultural da União Panamericana em Washington.'],
    cronologia: [
      [1905, 'Nasce em Cruz Alta, em 17 de dezembro.'],
      [1930, 'Entra na Editora Globo, em Porto Alegre.'],
      [1938, 'Publica Olhai os Lírios do Campo.'],
      [1949, 'Publica O Continente, primeira parte de O Tempo e o Vento.'],
      [1971, 'Publica Incidente em Antares.'],
      [1975, 'Morre em Porto Alegre.']
    ]
  },

  'Adélia Prado': {
    papel: 'Poeta e escritora brasileira (1935–)',
    resumo: 'Publicou aos quarenta anos e trouxe para a poesia brasileira o cotidiano doméstico e o corpo feminino como matéria sagrada.',
    bio: [
      'Adélia Luzia Prado Freitas nasceu em Divinópolis, Minas Gerais, em 13 de dezembro de 1935, filha de um ferroviário. A mãe morreu no parto do quinto filho quando Adélia tinha catorze anos. Formou-se em filosofia, foi professora primária durante vinte e quatro anos e casou-se, criando cinco filhos em Divinópolis, onde permaneceu a vida inteira.',
      'Enviou seus poemas a Affonso Romano de Sant\u2019Anna, que os levou a Carlos Drummond de Andrade. Drummond escreveu em sua coluna que São Francisco de Assis estava dando notícias por meio de uma poeta mineira, e Bagagem saiu em 1976, quando Adélia tinha quarenta anos.',
      'Sua poesia recusa a separação entre o sagrado e o doméstico. Fogão, roupa lavada, desejo, corpo, cozinha, Deus e morte aparecem no mesmo plano, numa voz de mulher do interior que não pede licença para tratar de teologia. A afirmação de que Deus se interessa por panelas e por vísceras é o eixo de sua obra.',
      'Publicou O Coração Disparado, que recebeu o Prêmio Jabuti, Terra de Santa Cruz, Bagagem, O Pelicano e a prosa de O Homem da Mão Seca e Solte os Cachorros. Recebeu o Prêmio Camões em 2024, tornando-se a sexta brasileira a recebê-lo. Nunca deixou Divinópolis.'
    ],
    contexto: 'Adélia surge num momento em que a poesia brasileira era dominada por vanguardas urbanas e formalistas. Sua entrada, com uma voz religiosa, interiorana e feminina tratando de corpo e desejo sem constrangimento, não tinha lugar previsto — e é isso que a torna inconfundível.',
    contribuicoes: ['Publicou Bagagem (1976), com apresentação decisiva de Carlos Drummond de Andrade.', 'Trouxe à poesia brasileira o cotidiano doméstico e o corpo feminino como matéria de reflexão religiosa.', 'Escreveu O Coração Disparado, vencedor do Prêmio Jabuti.', 'Recebeu o Prêmio Camões em 2024.'],
    cronologia: [
      [1935, 'Nasce em Divinópolis, Minas Gerais, em 13 de dezembro.'],
      [1976, 'Publica Bagagem, aos quarenta anos.'],
      [1978, 'Publica O Coração Disparado.'],
      [1994, 'Publica O Pelicano.'],
      [2024, 'Recebe o Prêmio Camões.']
    ]
  },

  'Caio Fernando Abreu': {
    papel: 'Escritor brasileiro (1948–1996)',
    resumo: 'Escreveu sobre solidão urbana, desejo e a aids numa prosa que marcou uma geração.',
    bio: [
      'Caio Fernando Loureiro de Abreu nasceu em Santiago, Rio Grande do Sul, em 12 de setembro de 1948. Mudou-se para Porto Alegre aos dezessete anos, abandonou os cursos de letras e artes cênicas e passou a viver de jornalismo, trabalhando em revistas como Veja, Nova e Manchete.',
      'Durante a ditadura militar, foi perseguido por sua atuação e por textos considerados subversivos, chegou a se esconder na casa de Hilda Hilst, em Campinas, e exilou-se por dois anos na Europa, onde trabalhou em ofícios diversos em Londres, Estocolmo e Amsterdã.',
      'Sua obra é feita sobretudo de contos. Morangos Mofados, de 1982, é o livro que o consagrou: histórias de personagens urbanos isolados, atravessados por afeto, drogas, música e pela sensação de um projeto de geração que não se realizou. Os Dragões Não Conhecem o Paraíso, de 1988, recebeu o Prêmio Jabuti.',
      'Descobriu-se soropositivo em 1994, em Paris, e escreveu sobre isso publicamente nas crônicas que assinava em O Estado de S. Paulo, reunidas depois em Cartas do Coração Sem Porto. Voltou a Porto Alegre, foi cuidar do jardim na casa dos pais e continuou escrevendo. Morreu em 25 de fevereiro de 1996, aos 47 anos.'
    ],
    contexto: 'Caio escreve na passagem da ditadura à redemocratização e na chegada da epidemia de aids ao Brasil. Sua obra registra a solidão de uma geração urbana que perdeu tanto o projeto político quanto a segurança afetiva, e o fez tratando abertamente do desejo homossexual numa literatura brasileira que quase não o mencionava.',
    contribuicoes: ['Escreveu Morangos Mofados (1982), marco da literatura brasileira contemporânea.', 'Escreveu Os Dragões Não Conhecem o Paraíso, vencedor do Prêmio Jabuti.', 'Tratou abertamente do desejo homossexual e da epidemia de aids na literatura brasileira.', 'Deixou uma obra extensa de crônicas e cartas, reunidas postumamente.'],
    cronologia: [
      [1948, 'Nasce em Santiago, Rio Grande do Sul, em 12 de setembro.'],
      [1973, 'Exila-se na Europa por dois anos.'],
      [1982, 'Publica Morangos Mofados.'],
      [1988, 'Publica Os Dragões Não Conhecem o Paraíso.'],
      [1994, 'Descobre-se soropositivo e escreve sobre isso publicamente.'],
      [1996, 'Morre em Porto Alegre, aos 47 anos.']
    ]
  },

  'Vladimir Maiakóvski': {
    papel: 'Poeta russo (1893–1930)',
    resumo: 'Poeta maior do futurismo russo, aderiu à revolução e tirou a própria vida aos 36 anos.',
    bio: [
      'Vladímir Vladímirovitch Maiakóvski nasceu em Bagdati, na Geórgia, em 19 de julho de 1893. O pai, guarda florestal, morreu de septicemia após espetar o dedo num alfinete — episódio que deixou no filho um horror duradouro a alfinetes e agulhas. A família mudou-se para Moscou na pobreza. Aos quinze anos entrou no partido bolchevique e foi preso três vezes; escreveu seus primeiros poemas na solitária.',
      'Aderiu ao futurismo e assinou em 1912 o manifesto Bofetada no Gosto Público, que propunha atirar Púchkin e Tolstói do navio da modernidade. Recitava em praças, vestia-se para escandalizar e escrevia em versos escalonados, com ritmo de discurso público e vocabulário de rua. A Nuvem de Calças, de 1915, é o poema que o consagrou.',
      'Abraçou a Revolução de 1917 com entusiasmo total e passou a produzir cartazes, palavras de ordem e poemas de propaganda para a agência telegráfica soviética, além de peça teatral e roteiros. Escreveu simultaneamente uma poesia amorosa intensa, dirigida sobretudo a Lília Brik, com quem manteve uma relação longa e pública.',
      'O desencanto veio com a burocratização do regime, que satirizou nas peças O Percevejo e Os Banhos. Passou a ser atacado pela crítica oficial, teve viagens negadas e viu uma exposição sobre sua obra ser ignorada pelas autoridades. Tirou a própria vida em Moscou em 14 de abril de 1930, deixando um bilhete em verso. Cinco anos depois, Stálin declarou-o o maior poeta da era soviética, o que Pasternak comentou ter sido sua segunda morte.'
    ],
    contexto: 'Maiakóvski é o caso extremo do artista de vanguarda que se põe a serviço de uma revolução e é depois esmagado por ela. Sua obra reúne, sem resolver, o poeta lírico ferido e o propagandista de megafone, e é dessa tensão que vem sua força.',
    contribuicoes: [
      'Foi a principal voz do futurismo russo.',
      'Escreveu A Nuvem de Calças, Sobre Isto e Bem, poemas centrais da poesia moderna russa.',
      'Criou uma poesia de declamação pública, com verso escalonado e linguagem de rua.',
      'Escreveu as peças satíricas O Percevejo e Os Banhos.',
      'Influenciou a poesia concreta e a vanguarda brasileira por meio das traduções de Haroldo e Augusto de Campos.'
    ],
    cronologia: [
      [1893, 'Nasce em Bagdati, Geórgia, em 19 de julho.'],
      [1912, 'Assina o manifesto futurista Bofetada no Gosto Público.'],
      [1915, 'Publica A Nuvem de Calças.'],
      [1917, 'Adere à Revolução de Outubro.'],
      [1929, 'Estreia O Percevejo.'],
      [1930, 'Morre em Moscou, em 14 de abril.']
    ],
    nota: 'Maiakóvski tirou a própria vida em 1930, em contexto de crescente hostilidade oficial à sua obra.'
  },

  'Groucho Marx': {
    papel: 'Comediante e ator norte-americano (1890–1977)',
    resumo: 'Criou com os Irmãos Marx uma comédia de anarquia verbal que influenciou todo o humor do século XX.',
    bio: [
      'Julius Henry Marx nasceu em Nova York em 2 de outubro de 1890, em família judaica de imigrantes alemães e alsacianos. Foi empurrado ao palco pela mãe, Minnie, que gerenciava os filhos como grupo de vaudeville. Abandonou a escola aos doze anos e cantou em companhias itinerantes, sendo abandonado sem pagamento mais de uma vez.',
      'Os irmãos passaram do canto à comédia quase por acidente, ao improvisar diante de uma plateia hostil, e construíram personagens fixos: Groucho, com o bigode pintado, os óculos e o charuto, falando sem parar; Chico, com sotaque italiano fingido; Harpo, mudo e caótico. Estrearam na Broadway e depois no cinema.',
      'Filmes como Uma Noite na Ópera, Sopa de Pato e Os Caçadores de Elefantes fizeram da anarquia verbal e física sua marca. O humor de Groucho é feito de trocadilhos, insultos elegantes, non sequiturs e desmontagem instantânea de qualquer solenidade — o alvo preferido é sempre a autoridade e a hipocrisia social.',
      'Após o fim do grupo no cinema, apresentou por onze anos o programa You Bet Your Life, no rádio e na televisão, em que o jogo era pretexto para improvisar com os participantes. Recebeu um Oscar honorário em 1974. Morreu em Los Angeles em 19 de agosto de 1977. Inúmeras frases circulam atribuídas a ele sem registro verificável, o que é em parte consequência de seu próprio estilo improvisado.'
    ],
    contexto: 'Os Irmãos Marx fizeram do caos verbal uma forma de crítica social em plena Depressão, com filmes que sistematicamente ridicularizavam ricos, diplomatas, professores e generais. O efeito sobre a comédia posterior — de Woody Allen ao humor televisivo — é reconhecido e direto.',
    contribuicoes: ['Criou com os irmãos uma comédia baseada em anarquia verbal e desmontagem da autoridade.', 'Estrelou Uma Noite na Ópera, Sopa de Pato e Os Caçadores de Elefantes.', 'Apresentou por onze anos o programa You Bet Your Life.', 'Recebeu um Oscar honorário em 1974.'],
    cronologia: [
      [1890, 'Nasce em Nova York, em 2 de outubro.'],
      [1924, 'Os Irmãos Marx estreiam na Broadway.'],
      [1933, 'Lançamento de Sopa de Pato.'],
      [1935, 'Lançamento de Uma Noite na Ópera.'],
      [1947, 'Estreia You Bet Your Life.'],
      [1977, 'Morre em Los Angeles.']
    ],
    nota: 'Muitas frases atribuídas a Groucho Marx não têm registro verificável em seus filmes, programas ou escritos.'
  },

  'Nelson Rodrigues': {
    papel: 'Dramaturgo, jornalista e escritor brasileiro (1912–1980)',
    resumo: 'Revolucionou o teatro brasileiro ao levar ao palco o desejo, a hipocrisia e a violência da vida familiar.',
    bio: [
      'Nelson Falcão Rodrigues nasceu no Recife em 23 de agosto de 1912 e mudou-se para o Rio de Janeiro aos quatro anos. O pai era jornalista e dono de jornal. Começou a trabalhar como repórter policial aos treze anos, cobrindo crimes passionais — matéria que atravessaria toda a sua obra. Em 1929, um irmão foi assassinado na redação do jornal da família por uma mulher citada numa reportagem. Nelson contraiu tuberculose e passou anos em sanatórios; outro irmão morreu da doença.',
      'Vestido de Noiva, encenada em 1943 sob direção de Zbigniew Ziembinski, é apontada como o marco inicial do teatro moderno brasileiro: três planos simultâneos — realidade, memória e alucinação — e uma linguagem que rompia com o teatro de costumes então vigente.',
      'Suas peças seguintes escandalizaram. Álbum de Família, Anjo Negro e Senhora dos Afogados foram proibidas pela censura por anos. Nelson tratava de incesto, adultério, racismo e desejo reprimido dentro da família de classe média carioca, e chamava suas peças de desagradáveis sem nenhum constrangimento.',
      'Como cronista, criou personagens e expressões que entraram na língua — a grama do vizinho, o óbvio ululante, a pátria de chuteiras. Foi um dos maiores cronistas esportivos do país. Politicamente, apoiou o regime militar, posição que gerou ruptura com boa parte do meio intelectual e que é parte incontornável de sua biografia; um de seus filhos foi preso e torturado pela ditadura. Morreu no Rio em 21 de dezembro de 1980.'
    ],
    contexto: 'Nelson trouxe ao palco brasileiro aquilo que a sociedade não admitia em público, num país onde o teatro era sobretudo comédia de costumes. Sua obra é hoje a mais encenada da dramaturgia nacional, e sua adesão ao regime militar continua sendo discutida junto com ela.',
    contribuicoes: ['Escreveu Vestido de Noiva (1943), marco do teatro moderno brasileiro.', 'Escreveu Álbum de Família, Anjo Negro, A Falecida, Toda Nudez Será Castigada e Bonitinha, mas Ordinária.', 'Criou uma tradição de crônica esportiva e de costumes com enorme influência na imprensa brasileira.', 'Cunhou expressões que entraram na língua corrente.'],
    cronologia: [
      [1912, 'Nasce no Recife, em 23 de agosto.'],
      [1929, 'Um irmão é assassinado na redação do jornal da família.'],
      [1943, 'Estreia Vestido de Noiva.'],
      [1946, 'Álbum de Família é proibida pela censura.'],
      [1965, 'Publica O Casamento.'],
      [1980, 'Morre no Rio de Janeiro.']
    ],
    nota: 'Nelson Rodrigues apoiou publicamente o regime militar brasileiro, posição que integra o registro de sua biografia.'
  },

  'José Saramago': {
    papel: 'Escritor português (1922–2010)',
    resumo: 'Único autor de língua portuguesa a receber o Nobel de Literatura, criou um estilo sem pontuação convencional e romances de premissa alegórica.',
    bio: [
      'José de Sousa Saramago nasceu em Azinhaga, no Ribatejo, em 16 de novembro de 1922, em família de camponeses sem terra. O sobrenome veio de um apelido da família registrado por engano pelo funcionário do cartório. Mudou-se para Lisboa ainda criança e abandonou o liceu por falta de dinheiro, formando-se serralheiro mecânico. Trabalhou em oficina, na administração pública e como tradutor e editor.',
      'Publicou o primeiro romance aos 25 anos e passou duas décadas sem publicar ficção. O reconhecimento só veio aos sessenta anos, com Memorial do Convento, de 1982, sobre a construção do convento de Mafra, uma máquina voadora e o amor entre um soldado maneta e uma mulher com poderes de visão.',
      'Seu estilo é imediatamente reconhecível: parágrafos longos, ausência de travessões e de pontos de interrogação, diálogos incorporados ao fluxo do texto por vírgulas e maiúsculas, e um narrador que interrompe para comentar. A premissa de seus romances costuma ser uma pergunta simples levada às últimas consequências: e se todos ficassem cegos, e se ninguém morresse, e se a península ibérica se soltasse da Europa.',
      'O Evangelho Segundo Jesus Cristo, de 1991, foi vetado pelo governo português numa indicação a prêmio europeu, e Saramago mudou-se em protesto para Lanzarote, nas Canárias, onde viveu até a morte. Ensaio sobre a Cegueira, de 1995, é sua obra mais lida. Recebeu o Nobel de Literatura em 1998, o único em língua portuguesa. Foi militante comunista a vida inteira. Morreu em Lanzarote em 18 de junho de 2010.'
    ],
    contexto: 'Saramago escreve em Portugal antes e depois da Revolução dos Cravos, e sua obra combina a memória do campesinato pobre de sua origem com a alegoria política. Sua chegada tardia ao reconhecimento e a radicalidade formal de seu estilo fazem dele um caso raro na literatura contemporânea.',
    contribuicoes: [
      'Recebeu o Prêmio Nobel de Literatura em 1998, único autor de língua portuguesa a obtê-lo.',
      'Escreveu Memorial do Convento, Ensaio sobre a Cegueira, O Evangelho Segundo Jesus Cristo e As Intermitências da Morte.',
      'Criou um estilo narrativo próprio, com pontuação e organização textual singulares.',
      'Sua obra alegórica tornou-se referência internacional na discussão sobre poder, cegueira coletiva e responsabilidade.'
    ],
    cronologia: [
      [1922, 'Nasce em Azinhaga, em 16 de novembro.'],
      [1982, 'Publica Memorial do Convento.'],
      [1991, 'Publica O Evangelho Segundo Jesus Cristo.'],
      [1993, 'Muda-se para Lanzarote após o veto do governo português.'],
      [1995, 'Publica Ensaio sobre a Cegueira.'],
      [1998, 'Recebe o Prêmio Nobel de Literatura.'],
      [2010, 'Morre em Lanzarote.']
    ]
  },

  'Hermann Hesse': {
    papel: 'Escritor alemão naturalizado suíço (1877–1962)',
    resumo: 'Escreveu Sidarta, O Lobo da Estepe e O Jogo das Contas de Vidro, e recebeu o Nobel em 1946.',
    bio: [
      'Hermann Karl Hesse nasceu em Calw, na Alemanha, em 2 de julho de 1877, em família de missionários protestantes com forte ligação com a Índia — o avô materno fora indólogo. Fugiu do seminário aos catorze anos, passou por instituição para jovens problemáticos e tentou o suicídio, episódios que marcariam sua obra. Formou-se aprendiz de livreiro e leu por conta própria.',
      'Projetou-se com Peter Camenzind, em 1904. Uma crise pessoal grave o levou à psicanálise com um discípulo de Jung, e depois ao próprio Jung, experiência que reorientou sua escrita para o conflito entre os polos opostos que habitam a mesma pessoa. Demian, de 1919, publicado sob pseudônimo, foi o primeiro fruto dessa virada.',
      'Opôs-se publicamente ao nacionalismo alemão durante a Primeira Guerra e foi atacado como traidor pela imprensa de seu país; naturalizou-se suíço. Sidarta, de 1922, resultou de uma viagem à Índia e de anos de estudo de textos orientais, e narra a busca de um jovem contemporâneo do Buda que recusa seguir qualquer mestre. O Lobo da Estepe, de 1927, trata da cisão entre o homem civilizado e o instinto.',
      'O Jogo das Contas de Vidro, de 1943, é sua obra final e mais ambiciosa, e pesou decisivamente no Nobel de Literatura de 1946. Seus livros foram censurados na Alemanha nazista. A partir dos anos 1960 tornou-se leitura central da contracultura americana e europeia, fenômeno que ele não viveu para ver em plenitude. Morreu em Montagnola, na Suíça, em 9 de agosto de 1962.'
    ],
    contexto: 'Hesse escreve para leitores que atravessam a crise entre o que a sociedade exige e o que a própria natureza pede. Essa matéria explica tanto sua popularidade entre jovens em todas as décadas quanto a desconfiança de parte da crítica literária, que o considerou por vezes excessivamente pedagógico.',
    contribuicoes: ['Escreveu Sidarta, Demian, O Lobo da Estepe e O Jogo das Contas de Vidro.', 'Recebeu o Prêmio Nobel de Literatura em 1946.', 'Introduziu na literatura europeia uma leitura séria das tradições espirituais indianas.', 'Tornou-se uma das leituras centrais da contracultura a partir dos anos 1960.'],
    cronologia: [
      [1877, 'Nasce em Calw, em 2 de julho.'],
      [1904, 'Publica Peter Camenzind.'],
      [1919, 'Publica Demian.'],
      [1922, 'Publica Sidarta.'],
      [1927, 'Publica O Lobo da Estepe.'],
      [1943, 'Publica O Jogo das Contas de Vidro.'],
      [1946, 'Recebe o Nobel de Literatura.'],
      [1962, 'Morre em Montagnola.']
    ]
  },

  'Rabindranath Tagore': {
    papel: 'Poeta e polímata indiano (1861–1941)',
    resumo: 'Primeiro não europeu a receber o Nobel de Literatura, escreveu os hinos nacionais da Índia e de Bangladesh.',
    bio: [
      'Rabindranath Tagore nasceu em Calcutá em 7 de maio de 1861, o mais novo de treze filhos de uma família bengali proeminente, ligada ao movimento de reforma religiosa Brahmo Samaj. Detestou a escola formal e foi educado sobretudo em casa. Escreveu poemas desde a infância e foi enviado a Londres para estudar direito, curso que abandonou.',
      'Passou anos administrando as propriedades rurais da família em Bengala Oriental, em contato direto com camponeses pobres, experiência que reorientou sua obra e seu pensamento social. Escreveu poesia, contos, romances, ensaios, peças e mais de dois mil canções, que formam um gênero próprio na cultura bengali.',
      'Gitanjali, coletânea de poemas devocionais que ele próprio traduziu para o inglês, foi publicada em Londres em 1912 com apresentação de W. B. Yeats e rendeu-lhe o Nobel de Literatura em 1913 — o primeiro concedido a um não europeu. Recebeu o título de cavaleiro britânico e renunciou a ele em 1919, em protesto contra o massacre de Amritsar, em que tropas britânicas abriram fogo sobre uma multidão desarmada.',
      'Fundou em Santiniketan uma escola experimental que se tornou a Universidade Visva-Bharati, baseada em aulas ao ar livre e integração entre tradições indianas e ocidentais. Divergiu de Gandhi em pontos importantes, criticando o nacionalismo como força perigosa e a rejeição gandhiana à ciência e à indústria ocidentais. Escreveu os poemas que se tornaram os hinos nacionais da Índia e de Bangladesh. Morreu em Calcutá em 7 de agosto de 1941.'
    ],
    contexto: 'Tagore atua na Índia colonial durante a ascensão do movimento nacionalista, e ocupa uma posição incômoda: contra o domínio britânico e igualmente contra o nacionalismo como ideologia. Sua defesa de uma cultura universal, sem renúncia à própria tradição, é o eixo de sua obra e a razão de seu alcance internacional.',
    contribuicoes: [
      'Recebeu o Prêmio Nobel de Literatura em 1913, o primeiro concedido a um autor não europeu.',
      'Escreveu os poemas que se tornaram os hinos nacionais da Índia e de Bangladesh.',
      'Compôs mais de dois mil canções, que formam um gênero musical próprio em Bengala.',
      'Fundou a escola de Santiniketan e a Universidade Visva-Bharati.',
      'Renunciou ao título de cavaleiro britânico em protesto contra o massacre de Amritsar.'
    ],
    cronologia: [
      [1861, 'Nasce em Calcutá, em 7 de maio.'],
      [1901, 'Funda a escola de Santiniketan.'],
      [1912, 'Publica Gitanjali em inglês, em Londres.'],
      [1913, 'Recebe o Prêmio Nobel de Literatura.'],
      [1919, 'Renuncia ao título de cavaleiro após o massacre de Amritsar.'],
      [1941, 'Morre em Calcutá.']
    ]
  }
};

Object.assign(PANORAMAS_F17, {
  'Ben Zoma': {
    papel: 'Sábio judeu do período tanaítico (séc. II)',
    resumo: 'Autor de uma das passagens mais citadas do Pirkei Avot, sobre quem é sábio, forte, rico e honrado.',
    bio: [
      'Shimon ben Zoma foi um tanaíta, sábio da geração que compilou a Mishná, ativo na Judeia no início do século II. Era discípulo de Rabi Yehoshua ben Chananya e contemporâneo de Rabi Akiva. Morreu jovem e nunca recebeu o título de rabino, sendo sempre citado apenas pelo nome — sinal, segundo a tradição, de que faleceu antes da ordenação formal.',
      'É lembrado sobretudo pela passagem do Pirkei Avot, o tratado ético da Mishná, em que define quatro qualidades por meio de perguntas: quem é sábio, aquele que aprende de toda pessoa; quem é forte, aquele que domina o próprio impulso; quem é rico, aquele que se alegra com o que tem; quem é honrado, aquele que honra os outros. Cada resposta é sustentada por um versículo bíblico.',
      'Ben Zoma aparece também numa narrativa talmúdica célebre sobre quatro sábios que entraram no pardes, termo que designa o estudo dos aspectos mais profundos e perigosos da tradição mística. Segundo o relato, um morreu, um enlouqueceu, um se tornou herege e apenas Rabi Akiva saiu em paz. Ben Zoma é o que perdeu a razão.',
      'Sua obra não sobreviveu como texto próprio. O que se conhece dele são ditos preservados na Mishná, no Talmude e em coletâneas de midrash, sempre por transmissão de terceiros.'
    ],
    contexto: 'Ben Zoma pertence ao período em que o judaísmo se reorganizou após a destruição do Segundo Templo, deslocando o centro da vida religiosa do culto sacrificial para o estudo e a ética. O Pirkei Avot é o documento maior desse deslocamento, e suas máximas foram transmitidas por quase dois milênios como matéria de estudo semanal.',
    contribuicoes: ['É autor da passagem do Pirkei Avot sobre sabedoria, força, riqueza e honra.', 'Seus ditos integram a Mishná e o corpus da literatura rabínica clássica.', 'Figura na narrativa talmúdica dos quatro que entraram no pardes.'],
    cronologia: [
      ['séc. II', 'Ativo na Judeia, como discípulo de Rabi Yehoshua ben Chananya.'],
      ['c. 200', 'Seus ditos são compilados na Mishná.']
    ],
    nota: 'Ben Zoma não deixou obra escrita própria. Seus ditos foram preservados por transmissão na Mishná e no Talmude.'
  },

  'Rabi Tarfon': {
    papel: 'Sábio judeu do período tanaítico (séc. I–II)',
    resumo: 'Autor da máxima sobre não caber a você concluir a obra, nem ser livre para dela se eximir.',
    bio: [
      'Rabi Tarfon foi um tanaíta ativo na Judeia entre o fim do século I e o início do século II, no período que se seguiu à destruição do Segundo Templo. Segundo a tradição, era de família sacerdotal e chegou a servir no Templo antes de sua destruição, em 70. Viveu em Lod e foi um dos sábios do centro de estudos de Yavne.',
      'É conhecido pelo temperamento generoso e pela riqueza — as fontes registram episódios em que socorreu pessoas em necessidade com grandes somas — e por divergências frequentes com Rabi Akiva, com quem debatia questões legais em pé de igualdade.',
      'Sua máxima mais citada aparece no Pirkei Avot: o dia é curto, a tarefa é grande, os trabalhadores são preguiçosos, a recompensa é abundante e o dono da casa é insistente. Segue-se a formulação que atravessou os séculos: não cabe a você concluir a obra, mas tampouco você é livre para dela se afastar.',
      'A passagem tornou-se referência muito além do contexto religioso, citada como princípio de responsabilidade em causas cujo resultado ninguém verá — do ativismo social à ciência. Seus ditos foram preservados na Mishná, no Talmude e nas coletâneas midráshicas.'
    ],
    contexto: 'Rabi Tarfon pertence à geração que precisou reconstruir a vida religiosa judaica sem o Templo. A máxima sobre a obra inacabada corresponde exatamente a essa situação: um trabalho coletivo cujo fim nenhuma geração verá e do qual nenhuma pode se afastar.',
    contribuicoes: ['É autor da máxima do Pirkei Avot sobre a obrigação de trabalhar numa obra que não se poderá concluir.', 'Seus ditos e decisões legais integram a Mishná e o Talmude.', 'Foi um dos sábios do centro de estudos de Yavne, decisivo na reorganização do judaísmo após 70.'],
    cronologia: [
      ['séc. I', 'Nasce na Judeia; segundo a tradição, serve no Templo antes de 70.'],
      ['séc. II', 'Atua entre os sábios de Yavne e de Lod.'],
      ['c. 200', 'Seus ditos são compilados na Mishná.']
    ],
    nota: 'Rabi Tarfon não deixou obra escrita própria. Seus ditos foram preservados por transmissão na literatura rabínica.'
  },

  'Marguerite Yourcenar': {
    papel: 'Escritora belga-francesa naturalizada americana (1903–1987)',
    resumo: 'Primeira mulher eleita para a Academia Francesa, escreveu as memórias imaginárias do imperador Adriano.',
    bio: [
      'Marguerite Antoinette Jeanne Marie Ghislaine Cleenewerck de Crayencour nasceu em Bruxelas em 8 de junho de 1903. A mãe morreu dias após o parto, de febre puerperal. Foi criada pelo pai, homem culto e aventureiro que a educou em casa, ensinou-lhe latim e grego e viajou com ela pela Europa. Yourcenar é um anagrama quase perfeito de Crayencour, escolhido por ambos.',
      'Publicou os primeiros livros nos anos 1920 e 1930 com pouca repercussão. Em 1939, às vésperas da guerra, mudou-se para os Estados Unidos a convite de Grace Frick, tradutora americana que seria sua companheira por quatro décadas. Instalaram-se na ilha de Mount Desert, no Maine, e Yourcenar lecionou francês e literatura comparada.',
      'Memórias de Adriano, publicado em 1951, é sua obra maior. Escrito como uma longa carta do imperador romano moribundo ao jovem Marco Aurélio, reconstrói uma consciência do século II com erudição extrema e sem anacronismo psicológico. Yourcenar carregou e abandonou o projeto por quase trinta anos antes de conseguir escrevê-lo, e o caderno de notas publicado com o livro descreve esse processo.',
      'A Obra em Negro, de 1968, acompanha um médico e alquimista no século XVI e recebeu o Prêmio Femina. Em 1980 tornou-se a primeira mulher eleita para a Academia Francesa, em seus três séculos e meio de existência, com resistência declarada de parte dos membros. Traduziu Cavafy, Virginia Woolf e espirituais negros americanos. Morreu no Maine em 17 de dezembro de 1987.'
    ],
    contexto: 'Yourcenar escreve romance histórico numa época em que o gênero era considerado menor. Sua resposta foi a erudição absoluta: reconstruir uma mentalidade a partir das fontes, em vez de projetar sobre o passado a psicologia contemporânea. É esse rigor que a coloca fora do gênero como ele era praticado.',
    contribuicoes: ['Escreveu Memórias de Adriano (1951), um dos grandes romances históricos do século XX.', 'Escreveu A Obra em Negro, vencedor do Prêmio Femina em 1968.', 'Foi a primeira mulher eleita para a Academia Francesa, em 1980.', 'Traduziu Cavafy, Virginia Woolf e a poesia dos espirituais negros americanos.'],
    cronologia: [
      [1903, 'Nasce em Bruxelas, em 8 de junho.'],
      [1939, 'Muda-se para os Estados Unidos.'],
      [1951, 'Publica Memórias de Adriano.'],
      [1968, 'Publica A Obra em Negro.'],
      [1980, 'É eleita para a Academia Francesa.'],
      [1987, 'Morre no Maine.']
    ]
  },

  'Robert Louis Stevenson': {
    papel: 'Escritor escocês (1850–1894)',
    resumo: 'Escreveu A Ilha do Tesouro e O Médico e o Monstro, e morreu aos 44 anos numa ilha do Pacífico.',
    bio: [
      'Robert Louis Balfour Stevenson nasceu em Edimburgo em 13 de novembro de 1850, filho de um engenheiro de faróis. Teve saúde frágil desde a infância, com problemas respiratórios crônicos que o mantiveram acamado por longos períodos e que determinaram sua vida adulta de viagens em busca de climas favoráveis. Estudou engenharia por imposição do pai, mudou para direito e nunca advogou.',
      'Publicou relatos de viagem e ensaios antes da ficção. Conheceu na França a americana Fanny Osbourne, casada e mais velha, seguiu-a até a Califórnia numa travessia que quase o matou e casou-se com ela em 1880.',
      'A Ilha do Tesouro nasceu de um mapa que desenhou para entreter o enteado num dia de chuva, e foi publicada em 1883. Fixou praticamente todo o imaginário moderno de piratas — o mapa com o X, a ilha, o baú, o pirata com uma perna de pau e um papagaio no ombro. O Estranho Caso do Dr. Jekyll e Mr. Hyde, de 1886, foi escrito em poucos dias a partir de um pesadelo e tornou-se, quase imediatamente, uma metáfora corrente para a duplicidade humana.',
      'Em 1888 partiu com a família num veleiro pelo Pacífico e fixou-se em Samoa, onde os habitantes o chamavam de Tusitala, o contador de histórias. Envolveu-se politicamente na defesa dos samoanos contra as potências coloniais. Morreu subitamente, provavelmente de hemorragia cerebral, em 3 de dezembro de 1894, aos 44 anos, deixando inacabado Weir of Hermiston, que muitos consideram sua melhor obra.'
    ],
    contexto: 'Stevenson foi tratado por décadas como autor de literatura juvenil e recolocado no século XX entre os grandes prosadores de língua inglesa. Jekyll e Hyde, em particular, é hoje lido como análise da hipocrisia vitoriana: não a luta entre bem e mal, mas o custo de uma sociedade que exige respeitabilidade absoluta na superfície.',
    contribuicoes: ['Escreveu A Ilha do Tesouro (1883), que fixou o imaginário moderno da pirataria.', 'Escreveu O Estranho Caso do Dr. Jekyll e Mr. Hyde (1886).', 'Escreveu Raptado e a inacabada Weir of Hermiston.', 'Deixou uma obra extensa de ensaios e relatos de viagem.'],
    cronologia: [
      [1850, 'Nasce em Edimburgo, em 13 de novembro.'],
      [1880, 'Casa-se com Fanny Osbourne, na Califórnia.'],
      [1883, 'Publica A Ilha do Tesouro.'],
      [1886, 'Publica O Médico e o Monstro.'],
      [1890, 'Fixa-se em Samoa.'],
      [1894, 'Morre em Samoa, aos 44 anos.']
    ]
  },

  'W. Somerset Maugham': {
    papel: 'Escritor britânico (1874–1965)',
    resumo: 'Médico formado que se tornou o autor mais bem pago de sua época, e agente do serviço secreto britânico.',
    bio: [
      'William Somerset Maugham nasceu em Paris em 25 de janeiro de 1874, na embaixada britânica, onde o pai era advogado — nascimento em solo diplomático arranjado para que fosse legalmente britânico. Ficou órfão de mãe aos oito anos e de pai aos dez, e foi enviado à Inglaterra para viver com um tio pastor. A mudança de língua e o luto produziram uma gagueira que o acompanhou pela vida.',
      'Formou-se médico em Londres, e o trabalho obstétrico nos bairros pobres de Lambeth deu material para seu primeiro romance. Abandonou a medicina após o sucesso inicial e firmou-se primeiro como dramaturgo, chegando a ter quatro peças em cartaz simultaneamente no West End.',
      'Serviu na Primeira Guerra como motorista de ambulância e depois como agente do serviço de inteligência britânico, com missões na Suíça e na Rússia às vésperas da Revolução. A experiência originou Ashenden, coletânea que influenciou a literatura de espionagem posterior, incluindo Ian Fleming e John le Carré.',
      'Servidão Humana, de 1915, é seu romance mais ambicioso, largamente autobiográfico. O Fio da Navalha, de 1944, acompanha um veterano em busca de sentido na Índia. Viajou muito pelo Sudeste Asiático e pelo Pacífico e escreveu contos ambientados nas colônias que estão entre os melhores da língua. Foi bissexual em época de criminalização e manteve discrição sobre a vida privada. Morreu em Nice em 16 de dezembro de 1965.'
    ],
    contexto: 'Maugham foi extraordinariamente popular e sistematicamente subestimado pela crítica, que o considerava competente demais e ambicioso de menos — julgamento que ele próprio antecipou ao se descrever como estando na primeira fila dos escritores de segunda categoria. A revalorização de sua obra ocorreu sobretudo pelos contos.',
    contribuicoes: ['Escreveu Servidão Humana (1915) e O Fio da Navalha (1944).', 'Escreveu contos ambientados no Sudeste Asiático que estão entre os melhores da língua inglesa.', 'Criou com Ashenden um dos modelos da literatura moderna de espionagem.', 'Foi um dos dramaturgos mais encenados do teatro britânico do início do século XX.'],
    cronologia: [
      [1874, 'Nasce em Paris, em 25 de janeiro.'],
      [1897, 'Publica Liza of Lambeth e abandona a medicina.'],
      [1915, 'Publica Servidão Humana; atua na inteligência britânica.'],
      [1928, 'Instala-se na Riviera Francesa.'],
      [1944, 'Publica O Fio da Navalha.'],
      [1965, 'Morre em Nice.']
    ]
  },

  'John Galbraith': {
    papel: 'Economista canadense-americano (1908–2006)',
    resumo: 'Escreveu A Sociedade Afluente e cunhou a expressão sabedoria convencional para criticar o consenso econômico.',
    bio: [
      'John Kenneth Galbraith nasceu em Iona Station, Ontário, em 15 de outubro de 1908, numa comunidade rural de descendentes escoceses. Formou-se em economia agrícola e doutorou-se em Berkeley. Media pouco mais de dois metros, altura que fazia parte de sua presença pública tanto quanto a ironia.',
      'Durante a Segunda Guerra dirigiu o escritório americano de controle de preços, com poder efetivo sobre a economia de guerra. Foi editor da revista Fortune, dirigiu a pesquisa sobre os efeitos dos bombardeios estratégicos na Alemanha — cuja conclusão, de que eles haviam sido muito menos eficazes do que se afirmava, desagradou aos militares — e lecionou em Harvard por décadas. Foi embaixador na Índia sob Kennedy e conselheiro de vários presidentes democratas.',
      'A Sociedade Afluente, de 1958, é sua obra mais conhecida. Argumenta que a economia americana havia resolvido o problema da produção mas continuava raciocinando como se vivesse na escassez, produzindo abundância privada ao lado de miséria pública — escolas, hospitais e transportes precários enquanto a publicidade criava necessidades de consumo que não existiam antes.',
      'Cunhou a expressão sabedoria convencional para designar as ideias aceitas por conveniência e familiaridade, e não por evidência. Em O Novo Estado Industrial sustentou que as grandes corporações não obedecem ao mercado: moldam a demanda por meio da publicidade e do planejamento. Escreveu mais de cinquenta livros em prosa deliberadamente clara, o que lhe custou o desprezo de parte da profissão. Morreu em Cambridge em 29 de abril de 2006.'
    ],
    contexto: 'Galbraith escreveu contra o consenso de sua própria disciplina, que se matematizava aceleradamente. Sua insistência em escrever para o público geral e em tratar a economia como assunto político, e não técnico, explica tanto sua enorme influência pública quanto sua marginalização acadêmica.',
    contribuicoes: ['Escreveu A Sociedade Afluente (1958) e O Novo Estado Industrial (1967).', 'Cunhou a expressão sabedoria convencional.', 'Formulou a crítica ao contraste entre abundância privada e pobreza pública.', 'Escreveu A Crise Econômica de 1929, referência sobre o crash da bolsa.', 'Foi embaixador dos Estados Unidos na Índia e conselheiro presidencial.'],
    cronologia: [
      [1908, 'Nasce em Ontário, em 15 de outubro.'],
      [1941, 'Assume o escritório de controle de preços dos Estados Unidos.'],
      [1955, 'Publica A Crise Econômica de 1929.'],
      [1958, 'Publica A Sociedade Afluente.'],
      [1961, 'Torna-se embaixador na Índia.'],
      [1967, 'Publica O Novo Estado Industrial.'],
      [2006, 'Morre em Cambridge, Massachusetts.']
    ]
  },

  'Ambrose Bierce': {
    papel: 'Escritor e jornalista norte-americano (1842–c. 1914)',
    resumo: 'Escreveu O Dicionário do Diabo e desapareceu no México sem deixar rastro.',
    bio: [
      'Ambrose Gwinnett Bierce nasceu em Meigs County, Ohio, em 24 de junho de 1842, décimo de treze filhos de uma família pobre e religiosa cujos nomes todos começavam com a letra A. Alistou-se aos dezoito anos no exército da União e combateu em batalhas das mais sangrentas da Guerra Civil, entre elas Shiloh e Chickamauga, sofrendo um grave ferimento na cabeça em Kennesaw Mountain.',
      'A guerra é a matéria de seus melhores contos. Um Acontecimento na Ponte de Owl Creek, sobre os instantes finais de um homem prestes a ser enforcado, é um dos contos mais antologiados da literatura americana pela manipulação do tempo narrativo. Chickamauga acompanha uma criança surda que atravessa um campo de batalha sem compreender o que vê.',
      'Trabalhou como jornalista em São Francisco, onde ficou conhecido pela ferocidade — era chamado de Bitter Bierce — e escreveu para os jornais de William Randolph Hearst. O Dicionário do Diabo, publicado em partes desde 1881 e reunido em 1911, define palavras comuns em versões cínicas e implacáveis, desmontando a hipocrisia que o vocabulário corrente encobre.',
      'A vida pessoal foi de perdas sucessivas: um filho morreu num duelo, outro de alcoolismo, o casamento terminou. Em 1913, aos 71 anos, foi ao México acompanhar a revolução de Pancho Villa. A última carta conhecida é de dezembro daquele ano, de Chihuahua. Nunca mais se soube dele, e seu desaparecimento permanece sem explicação.'
    ],
    contexto: 'Bierce escreve sobre a Guerra Civil sem nenhuma nobreza, décadas antes de a literatura americana estar preparada para isso. Sua ficção sobre o combate antecipa o realismo desencantado que só se tornaria comum depois da Primeira Guerra Mundial.',
    contribuicoes: ['Escreveu O Dicionário do Diabo, clássico da sátira em língua inglesa.', 'Escreveu Um Acontecimento na Ponte de Owl Creek e outros contos centrais da literatura americana.', 'Foi pioneiro do tratamento realista e desencantado da guerra na ficção.', 'Foi um dos jornalistas mais influentes e temidos da imprensa da Califórnia.'],
    cronologia: [
      [1842, 'Nasce em Ohio, em 24 de junho.'],
      [1861, 'Alista-se no exército da União.'],
      [1890, 'Publica Um Acontecimento na Ponte de Owl Creek.'],
      [1911, 'Publica O Dicionário do Diabo em volume.'],
      [1913, 'Parte para o México e desaparece.']
    ],
    nota: 'O destino de Bierce é desconhecido. Sua última carta é de dezembro de 1913, e a data de morte é presumida.'
  },

  'Pierre-Joseph Proudhon': {
    papel: 'Filósofo político francês (1809–1865)',
    resumo: 'Primeiro a se declarar anarquista, escreveu que a propriedade é um roubo e defendeu o mutualismo.',
    bio: [
      'Pierre-Joseph Proudhon nasceu em Besançon em 15 de janeiro de 1809, filho de um tanoeiro e cervejeiro pobre. Trabalhou como pastor de rebanho na infância e como tipógrafo na juventude, ofício que lhe deu contato direto com textos e uma formação essencialmente autodidata. Obteve uma bolsa da Academia de Besançon para estudar.',
      'O Que é a Propriedade?, de 1840, abre com a pergunta do título e responde com a frase que o tornaria célebre: a propriedade é um roubo. A formulação é mais precisa do que parece — Proudhon distingue a posse, o uso efetivo de terra e ferramentas por quem trabalha, que ele defende, da propriedade que rende sem trabalho, por aluguel, juro ou renda, que ele condena. Foi também no mesmo livro que se declarou anarquista, dando ao termo um sentido positivo pela primeira vez.',
      'Propôs o mutualismo: uma sociedade de produtores associados que trocam com base no tempo de trabalho, com bancos de crédito gratuito e federação de comunas no lugar do Estado centralizado. Chegou a fundar um banco do povo, que durou poucos meses.',
      'Foi eleito deputado após a revolução de 1848 e preso por três anos por artigos contra Luís Bonaparte. Manteve polêmica dura com Marx, que respondeu à sua Filosofia da Miséria com A Miséria da Filosofia — ruptura que separaria por décadas as tradições anarquista e marxista. Suas posições sobre mulheres eram abertamente misóginas e foram criticadas já em vida, inclusive por contemporâneas. Morreu em Passy em 19 de janeiro de 1865.'
    ],
    contexto: 'Proudhon é o primeiro teórico do anarquismo e a principal influência sobre o movimento operário francês antes de Marx. Sua defesa de associações de produtores e crédito mútuo permanece referência para o cooperativismo e a economia solidária.',
    contribuicoes: ['Foi o primeiro pensador a se declarar anarquista, dando ao termo sentido positivo.', 'Escreveu O Que é a Propriedade? (1840) e Filosofia da Miséria.', 'Formulou o mutualismo, com associações de produtores e crédito gratuito.', 'Influenciou decisivamente o movimento operário francês e a tradição cooperativista.'],
    cronologia: [
      [1809, 'Nasce em Besançon, em 15 de janeiro.'],
      [1840, 'Publica O Que é a Propriedade?'],
      [1846, 'Publica Filosofia da Miséria.'],
      [1848, 'É eleito deputado após a revolução.'],
      [1849, 'É preso por três anos.'],
      [1865, 'Morre em Passy.']
    ],
    nota: 'Proudhon defendeu posições abertamente misóginas em vários escritos, criticadas já por seus contemporâneos.'
  },

  'Herbert Spencer': {
    papel: 'Filósofo e sociólogo britânico (1820–1903)',
    resumo: 'Cunhou a expressão sobrevivência do mais apto e aplicou a evolução à sociedade, com consequências duradouras e problemáticas.',
    bio: [
      'Herbert Spencer nasceu em Derby em 27 de abril de 1820, filho de um professor dissidente e individualista. Foi educado em casa, sem instrução formal regular, e trabalhou como engenheiro ferroviário antes de se voltar ao jornalismo e à filosofia. Foi editor da revista The Economist.',
      'Publicou em 1857, dois anos antes de A Origem das Espécies, um ensaio propondo que a evolução — a passagem do homogêneo ao heterogêneo — era uma lei universal aplicável ao cosmos, à biologia, à mente e à sociedade. Foi ele, e não Darwin, quem cunhou a expressão sobrevivência do mais apto, em 1864, depois de ler Darwin; o próprio Darwin a adotou em edições posteriores.',
      'Sua obra é um sistema enorme — o Sistema de Filosofia Sintética, em dez volumes — que abrange biologia, psicologia, sociologia e ética. Fundou a sociologia como disciplina em língua inglesa junto com Comte, e introduziu a analogia entre sociedade e organismo, com órgãos e funções diferenciadas.',
      'Foi um dos autores mais lidos e influentes do século XIX, com vendas superiores às de qualquer filósofo de seu tempo. Suas ideias, no entanto, foram usadas para justificar o laissez-faire extremo, a recusa de assistência aos pobres e, posteriormente, o darwinismo social e o eugenismo. Spencer opunha-se pessoalmente ao imperialismo e à guerra, mas a apropriação de sua obra por essas correntes é parte incontornável de seu legado. Sua influência despencou após a morte, em Brighton, em 8 de dezembro de 1903.'
    ],
    contexto: 'Spencer é o caso mais nítido de um pensador cuja reputação inverteu-se completamente. Dominante em seu tempo, tornou-se depois sobretudo objeto de crítica, por ter fornecido o vocabulário com que a desigualdade social passou a ser apresentada como resultado natural.',
    contribuicoes: ['Cunhou a expressão sobrevivência do mais apto, adotada depois pelo próprio Darwin.', 'Fundou a sociologia como disciplina em língua inglesa, com a analogia organicista.', 'Escreveu o Sistema de Filosofia Sintética, em dez volumes.', 'Foi um dos autores mais lidos e influentes do século XIX.'],
    cronologia: [
      [1820, 'Nasce em Derby, em 27 de abril.'],
      [1857, 'Publica o ensaio sobre o progresso como lei universal.'],
      [1864, 'Cunha a expressão sobrevivência do mais apto.'],
      [1873, 'Publica Estudo da Sociologia.'],
      [1903, 'Morre em Brighton.']
    ],
    nota: 'A obra de Spencer foi amplamente usada para justificar o darwinismo social e o eugenismo, correntes às quais ele não aderiu pessoalmente mas para as quais forneceu vocabulário.'
  },

  'John Ruskin': {
    papel: 'Crítico de arte e pensador social britânico (1819–1900)',
    resumo: 'Defendeu o trabalho artesanal contra a indústria e influenciou de William Morris a Gandhi.',
    bio: [
      'John Ruskin nasceu em Londres em 8 de fevereiro de 1819, filho único de um próspero comerciante de xerez. Teve educação rigidamente religiosa e viajou desde a infância pela Europa com os pais, desenhando arquitetura e paisagens. Estudou em Oxford e tornou-se o crítico de arte mais influente da era vitoriana.',
      'Projetou-se defendendo o pintor Turner em Pintores Modernos e depois a arquitetura gótica em As Sete Lâmpadas da Arquitetura e As Pedras de Veneza. Seu argumento central em arquitetura vai além da estética: o gótico é superior porque suas irregularidades revelam a mão do artesão que pensava enquanto trabalhava, ao passo que a produção industrial exige do operário a repetição de um movimento sem participação da inteligência.',
      'Dessa constatação Ruskin passou à crítica social. Em Até Este Último, de 1860, atacou a economia política de sua época por tratar o trabalhador como fator de produção e não como pessoa, e afirmou que não há riqueza senão vida. O livro foi recebido com hostilidade quase unânime.',
      'Fundou a Guilda de São Jorge, financiou museus e bibliotecas para trabalhadores, defendeu ensino público, salário mínimo e aposentadoria décadas antes de qualquer um deles existir. Influenciou o movimento Arts and Crafts de William Morris, o Partido Trabalhista britânico — cujos primeiros parlamentares apontaram sua obra como formadora — e Gandhi, que traduziu Até Este Último para o guzerate e disse que o livro mudou sua vida. Sofreu crises mentais graves nas décadas finais. Morreu em Brantwood em 20 de janeiro de 1900.'
    ],
    contexto: 'Ruskin escreve no auge da industrialização britânica e formula a crítica mais consistente de seu tempo ao custo humano dela. Sua originalidade está em derivar economia e política de uma análise sobre arte e trabalho, e não o contrário.',
    contribuicoes: [
      'Escreveu Pintores Modernos, As Sete Lâmpadas da Arquitetura e As Pedras de Veneza.',
      'Escreveu Até Este Último (1860), crítica moral à economia política vitoriana.',
      'Influenciou o movimento Arts and Crafts, o trabalhismo britânico e Gandhi.',
      'Defendeu ensino público, salário mínimo e aposentadoria antes de sua existência.',
      'Fundou a Guilda de São Jorge e financiou instituições culturais para trabalhadores.'
    ],
    cronologia: [
      [1819, 'Nasce em Londres, em 8 de fevereiro.'],
      [1843, 'Publica o primeiro volume de Pintores Modernos.'],
      [1851, 'Publica As Pedras de Veneza.'],
      [1860, 'Publica Até Este Último.'],
      [1871, 'Funda a Guilda de São Jorge.'],
      [1900, 'Morre em Brantwood.']
    ]
  },

  'Robert Frost': {
    papel: 'Poeta norte-americano (1874–1963)',
    resumo: 'Escreveu sobre a Nova Inglaterra rural em linguagem simples que esconde ambiguidade profunda, e ganhou quatro prêmios Pulitzer.',
    bio: [
      'Robert Lee Frost nasceu em São Francisco em 26 de março de 1874. O pai, jornalista, morreu de tuberculose quando ele tinha onze anos, deixando a família sem recursos; a mãe levou os filhos para a Nova Inglaterra. Abandonou Dartmouth e depois Harvard sem se formar. Trabalhou como professor, sapateiro e agricultor numa fazenda em New Hampshire dada pelo avô, período de fracasso agrícola em que escreveu boa parte de sua poesia inicial.',
      'Sem conseguir publicar nos Estados Unidos, vendeu a fazenda e mudou-se com a família para a Inglaterra em 1912. Ali publicou seus dois primeiros livros e foi reconhecido por Ezra Pound e Edward Thomas. Voltou em 1915 já como poeta estabelecido.',
      'Sua poesia usa a fala coloquial da Nova Inglaterra rural e formas métricas tradicionais, combinação incomum num período de vanguarda experimental. A aparência de simplicidade é enganosa: A Estrada Não Trilhada, seu poema mais citado, costuma ser lido como elogio à escolha original, quando o texto explicita que os dois caminhos estavam igualmente gastos e que a diferença será uma construção retrospectiva do narrador.',
      'Perdeu quatro dos seis filhos ainda em vida, e a esposa Elinor morreu em 1938. Recebeu quatro prêmios Pulitzer, número sem paralelo em poesia, e recitou na posse de John F. Kennedy em 1961, aos 86 anos, de memória, porque o sol ofuscava a página. Morreu em Boston em 29 de janeiro de 1963.'
    ],
    contexto: 'Frost tornou-se figura pública associada a uma imagem de sabedoria rural benigna que sua poesia não sustenta. Os textos são frequentemente sombrios, tratando de isolamento, morte e da indiferença da natureza, e a distância entre a persona pública e a obra é um dos temas centrais de sua fortuna crítica.',
    contribuicoes: ['Escreveu A Estrada Não Trilhada, Parando na Mata numa Noite de Neve e Reparando o Muro.', 'Recebeu quatro prêmios Pulitzer de poesia.', 'Uniu a fala coloquial americana às formas métricas tradicionais.', 'Recitou na posse presidencial de John F. Kennedy, em 1961.'],
    cronologia: [
      [1874, 'Nasce em São Francisco, em 26 de março.'],
      [1912, 'Muda-se para a Inglaterra.'],
      [1914, 'Publica North of Boston.'],
      [1924, 'Recebe o primeiro de quatro prêmios Pulitzer.'],
      [1961, 'Recita na posse de John F. Kennedy.'],
      [1963, 'Morre em Boston.']
    ]
  },

  'Alfred Tennyson': {
    papel: 'Poeta britânico (1809–1892)',
    resumo: 'Poeta laureado por mais de quatro décadas, foi a voz oficial da era vitoriana.',
    bio: [
      'Alfred Tennyson nasceu em Somersby, Lincolnshire, em 6 de agosto de 1809, o quarto de doze filhos de um clérigo alcoólatra e amargurado, deserdado pelo próprio pai. A família era marcada por epilepsia, dependência química e crises mentais, e Tennyson temeu a vida inteira herdar o que chamava de sangue negro dos Tennyson.',
      'Estudou em Cambridge, onde formou com Arthur Hallam uma amizade intensa. A morte súbita de Hallam aos 22 anos, em 1833, foi o acontecimento decisivo de sua vida. Tennyson passou dezessete anos escrevendo In Memoriam A.H.H., longo poema em cento e trinta e três seções sobre luto, dúvida religiosa e a tentativa de reconciliar a fé com a ciência emergente — de onde vem a imagem da natureza vermelha em dentes e garras, escrita antes de Darwin.',
      'A publicação de In Memoriam em 1850 coincidiu com sua nomeação como poeta laureado, sucedendo Wordsworth, cargo que ocuparia por quarenta e dois anos. Casou-se no mesmo ano, após catorze anos de noivado adiado por falta de dinheiro.',
      'Escreveu A Carga da Brigada Ligeira, sobre o ataque suicida de cavaleiros britânicos na Crimeia, e Idílios do Rei, ciclo sobre o rei Artur que ocupou décadas de sua vida. Ulisses, escrito logo após a morte de Hallam, termina com o verso sobre lutar, buscar, encontrar e não ceder, uma das linhas mais citadas da língua inglesa. Recebeu o título de barão, o primeiro concedido a um autor por sua obra. Morreu em Aldworth em 6 de outubro de 1892.'
    ],
    contexto: 'Tennyson foi o poeta que a era vitoriana escolheu para se representar, e sua obra atravessa exatamente as tensões daquele período: fé abalada pela geologia e pela biologia, orgulho imperial e melancolia. É essa dupla condição — voz oficial e homem em dúvida permanente — que sustenta seus melhores poemas.',
    contribuicoes: ['Escreveu In Memoriam A.H.H., um dos maiores poemas de luto da língua inglesa.', 'Escreveu Ulisses, A Carga da Brigada Ligeira e A Dama de Shalott.', 'Escreveu Idílios do Rei, ciclo que recuperou a matéria arturiana para a literatura moderna.', 'Foi poeta laureado do Reino Unido por quarenta e dois anos.'],
    cronologia: [
      [1809, 'Nasce em Somersby, em 6 de agosto.'],
      [1833, 'Morre Arthur Hallam.'],
      [1842, 'Publica a coletânea que inclui Ulisses.'],
      [1850, 'Publica In Memoriam e é nomeado poeta laureado.'],
      [1854, 'Escreve A Carga da Brigada Ligeira.'],
      [1892, 'Morre em Aldworth.']
    ]
  },

  Stendhal: {
    papel: 'Escritor francês (1783–1842)',
    resumo: 'Escreveu O Vermelho e o Negro e A Cartuxa de Parma, e previu que só seria lido um século depois.',
    bio: [
      'Marie-Henri Beyle nasceu em Grenoble em 23 de janeiro de 1783. A mãe morreu quando ele tinha sete anos, e ele detestou o pai e a educação clerical que recebeu — ódio que transferiu para a província, a religião e a hipocrisia burguesa em toda a sua obra. Adotou dezenas de pseudônimos ao longo da vida; Stendhal vem do nome de uma cidade alemã.',
      'Serviu no exército napoleônico, participou da campanha da Itália e da retirada de Moscou em 1812, uma das mais catastróficas da história militar. A Itália tornou-se sua pátria escolhida; viveu longos períodos em Milão e em Roma, e foi cônsul francês em Civitavecchia.',
      'Escreveu ensaios sobre música, pintura e sobre o amor — De l\u2019Amour, de 1822, contém a teoria da cristalização, o processo pelo qual a imaginação recobre a pessoa amada de qualidades que ela não tem. Também dá nome à síndrome de Stendhal, o mal-estar diante do excesso de beleza artística, a partir do relato de sua visita a Florença.',
      'O Vermelho e o Negro, de 1830, acompanha Julien Sorel, filho de carpinteiro de ambição desmedida numa França pós-napoleônica em que a ascensão social pelo mérito militar havia se fechado. A Cartuxa de Parma, escrito em cinquenta e dois dias em 1839, foi elogiado por Balzac num longo artigo. Stendhal vendeu pouquíssimo em vida e escreveu que estaria sendo lido por volta de 1880 e compreendido em 1935. Morreu de um derrame numa rua de Paris em 23 de março de 1842.'
    ],
    contexto: 'Stendhal escreve entre o romantismo e o realismo, e sua análise implacável da ambição e da hipocrisia social antecipa o romance psicológico moderno. A frieza da narração e a atenção aos cálculos interiores das personagens é o que Nietzsche admirava nele e o que explica a previsão, correta, de reconhecimento póstumo.',
    contribuicoes: ['Escreveu O Vermelho e o Negro (1830) e A Cartuxa de Parma (1839).', 'Formulou em De l\u2019Amour a teoria da cristalização amorosa.', 'Antecipou o romance psicológico moderno pela análise dos cálculos interiores das personagens.', 'Dá nome à síndrome de Stendhal, descrita a partir de seu próprio relato em Florença.'],
    cronologia: [
      [1783, 'Nasce em Grenoble, em 23 de janeiro.'],
      [1812, 'Participa da campanha da Rússia e da retirada de Moscou.'],
      [1822, 'Publica De l\u2019Amour.'],
      [1830, 'Publica O Vermelho e o Negro.'],
      [1839, 'Publica A Cartuxa de Parma.'],
      [1842, 'Morre em Paris.']
    ]
  },

  'George Sand': {
    papel: 'Escritora francesa (1804–1876)',
    resumo: 'Adotou nome masculino, vestia-se de homem para circular livremente e foi uma das autoras mais lidas do século XIX.',
    bio: [
      'Amantine Aurore Lucile Dupin nasceu em Paris em 1º de julho de 1804. O pai, oficial do exército, morreu quando ela tinha quatro anos; a mãe era filha de um vendedor de pássaros e a avó paterna, aristocrata, disputou sua criação. Foi criada na propriedade de Nohant, no interior, com liberdade incomum para uma menina, e educada num convento em Paris.',
      'Casou-se aos dezoito anos e deixou o marido aos vinte e sete, levando os filhos e recusando o arranjo que a lei francesa impunha às mulheres casadas, que não podiam administrar o próprio dinheiro. Foi a Paris viver de escrita, adotou o pseudônimo masculino George Sand e obteve autorização para vestir roupas masculinas — que eram mais baratas, mais resistentes e, sobretudo, permitiam-lhe entrar em espaços fechados às mulheres.',
      'Publicou mais de setenta romances, além de peças, contos e uma autobiografia extensa. Indiana, de 1832, trata do casamento como forma de sujeição legal. Os romances rurais — A Pequena Fadette, O Charco do Diabo — retratam o campesinato francês com atenção incomum. Seus textos políticos defenderam os direitos das mulheres e a causa dos trabalhadores, e ela teve papel ativo na revolução de 1848.',
      'Sua vida privada foi objeto de escândalo permanente: relacionou-se com Alfred de Musset e viveu dez anos com Frédéric Chopin, cuidando dele durante boa parte da doença que o mataria. Manteve correspondência e amizade com Flaubert, Balzac, Delacroix e Liszt. Morreu em Nohant em 8 de junho de 1876; Victor Hugo escreveu que ela era uma ideia e tinha um lugar próprio em nossa época.'
    ],
    contexto: 'Sand escreve numa França em que a mulher casada era juridicamente incapaz e a autoria feminina, tolerada apenas em registros menores. Sua estratégia — nome de homem, roupa de homem, independência financeira pelo próprio trabalho — foi tão significativa quanto a obra, e o escândalo que produziu é inseparável de sua importância histórica.',
    contribuicoes: [
      'Escreveu mais de setenta romances, entre eles Indiana, Consuelo e A Pequena Fadette.',
      'Tratou o casamento como instituição de sujeição legal das mulheres, em Indiana.',
      'Foi uma das primeiras mulheres a viver inteiramente da própria escrita na França.',
      'Escreveu História da Minha Vida, autobiografia extensa e influente.',
      'Teve atuação política ativa durante a revolução de 1848.'
    ],
    cronologia: [
      [1804, 'Nasce em Paris, em 1º de julho.'],
      [1831, 'Deixa o marido e vai viver em Paris da escrita.'],
      [1832, 'Publica Indiana, sob o pseudônimo George Sand.'],
      [1838, 'Inicia a convivência com Frédéric Chopin.'],
      [1848, 'Participa ativamente da revolução.'],
      [1876, 'Morre em Nohant.']
    ]
  },

  'Louis Armstrong': {
    papel: 'Trompetista e cantor norte-americano (1901–1971)',
    resumo: 'Transformou o jazz de música coletiva em arte do solista e é uma das figuras mais influentes da música do século XX.',
    bio: [
      'Louis Daniel Armstrong nasceu em Nova Orleans em 4 de agosto de 1901, num bairro tão pobre e violento que era chamado de Battlefield. O pai abandonou a família, e ele foi criado pela mãe e pela avó, trabalhando desde criança para uma família de imigrantes judeus lituanos que o ajudou a comprar seu primeiro instrumento. Aos onze anos, foi enviado a um reformatório após disparar uma arma na rua no Ano Novo — e foi lá que recebeu instrução musical formal na banda da instituição.',
      'Aprendeu com o cornetista Joe King Oliver, que o chamou para Chicago em 1922. Com os grupos Hot Five e Hot Seven, entre 1925 e 1928, gravou as sessões que redefiniram o jazz. Antes dele, a música era essencialmente coletiva e improvisada em conjunto; Armstrong estabeleceu o solo como centro, com fraseado, swing e liberdade rítmica que se tornaram a linguagem padrão de todos os instrumentistas seguintes.',
      'Como cantor, popularizou o scat — improvisação com sílabas sem sentido — e criou um estilo vocal de fraseado tão livre quanto o do trompete, que influenciou Billie Holiday, Frank Sinatra e praticamente todos os intérpretes populares posteriores.',
      'Tornou-se uma das figuras mais reconhecíveis do mundo, com sucessos como Hello, Dolly! e What a Wonderful World, e viajou como embaixador cultural americano. Foi criticado por parte do movimento negro por sua persona sorridente em palco, acusação à qual respondeu concretamente em 1957, ao cancelar publicamente uma turnê oficial e criticar o presidente Eisenhower pela omissão diante da crise de dessegregação em Little Rock — posição que lhe custou contratos. Morreu em Nova York em 6 de julho de 1971.'
    ],
    contexto: 'Armstrong é o ponto de virada do jazz e, por extensão, de toda a música popular do século XX. Sua trajetória atravessa a segregação americana de ponta a ponta, e a tensão entre a figura pública amável e a posição que assumiu em 1957 é parte central de como sua biografia é hoje lida.',
    contribuicoes: [
      'Estabeleceu o solo improvisado como centro do jazz, nas gravações dos Hot Five e Hot Seven.',
      'Criou um fraseado rítmico que se tornou a base do swing e da linguagem jazzística.',
      'Popularizou o canto scat e influenciou toda a interpretação vocal popular posterior.',
      'Gravou What a Wonderful World e Hello, Dolly!, entre centenas de outras gravações.',
      'Criticou publicamente o governo americano pela omissão na crise de Little Rock, em 1957.'
    ],
    cronologia: [
      [1901, 'Nasce em Nova Orleans, em 4 de agosto.'],
      [1922, 'Muda-se para Chicago a convite de King Oliver.'],
      [1925, 'Inicia as gravações com os Hot Five.'],
      [1957, 'Critica publicamente Eisenhower pela crise de Little Rock.'],
      [1964, 'Hello, Dolly! chega ao topo das paradas.'],
      [1971, 'Morre em Nova York.']
    ]
  },

  'Alain de Botton': {
    papel: 'Escritor e filósofo suíço-britânico (1969–)',
    resumo: 'Aplica filosofia a problemas cotidianos e fundou a Escola da Vida.',
    bio: [
      'Alain de Botton nasceu em Zurique em 20 de dezembro de 1969, em família judaica sefardita originária da Espanha e depois do Egito; o pai era financista. Foi educado na Suíça e depois em internato na Inglaterra, e formou-se em história em Cambridge. Fala várias línguas e adotou o inglês como língua de escrita.',
      'Publicou o primeiro romance aos 23 anos e projetou-se com Como Proust Pode Mudar Sua Vida, de 1997, que usa Em Busca do Tempo Perdido como manual prático para questões como sofrimento, amizade e leitura. As Consolações da Filosofia, de 2000, faz o mesmo com seis filósofos, aplicando Sócrates à impopularidade, Epicuro ao dinheiro, Sêneca à frustração, Montaigne à inadequação.',
      'Escreveu depois sobre ansiedade de status, arquitetura, trabalho, viagem, religião e notícias, sempre com o mesmo método: pegar um tema que a filosofia acadêmica considera menor ou já resolvido e tratá-lo com seriedade a partir da experiência comum do leitor.',
      'Fundou em Londres, em 2008, a Escola da Vida, instituição que oferece aulas e materiais sobre relacionamentos, autoconhecimento, trabalho e emoções, com filiais em várias cidades e enorme alcance em vídeo. Sua obra é criticada por parte da academia como divulgação simplificadora, crítica que ele responde afirmando que a filosofia se tornou irrelevante justamente por recusar as perguntas que as pessoas de fato se fazem.'
    ],
    contexto: 'De Botton ocupa deliberadamente um espaço que a filosofia profissional abandonou: a orientação prática para a vida comum, que era função central da filosofia antiga. Sua popularidade e a resistência acadêmica que enfrenta decorrem da mesma escolha.',
    contribuicoes: ['Escreveu As Consolações da Filosofia e Como Proust Pode Mudar Sua Vida.', 'Escreveu Desejo de Status, A Arquitetura da Felicidade e Os Prazeres e Desprazeres do Trabalho.', 'Fundou a Escola da Vida, com sedes em várias cidades e grande alcance educacional.', 'Recolocou em circulação ampla a filosofia como orientação prática para a vida cotidiana.'],
    cronologia: [
      [1969, 'Nasce em Zurique, em 20 de dezembro.'],
      [1997, 'Publica Como Proust Pode Mudar Sua Vida.'],
      [2000, 'Publica As Consolações da Filosofia.'],
      [2004, 'Publica Desejo de Status.'],
      [2008, 'Funda a Escola da Vida, em Londres.']
    ]
  },

  'Audrey Hepburn': {
    papel: 'Atriz britânica e ativista humanitária (1929–1993)',
    resumo: 'Sobreviveu à ocupação nazista, tornou-se ícone do cinema e dedicou os últimos anos ao Unicef.',
    bio: [
      'Audrey Kathleen Ruston nasceu em Bruxelas em 4 de maio de 1929, filha de uma baronesa neerlandesa e de um empresário britânico que abandonou a família e tinha ligações com o fascismo. Estava na Holanda quando a Alemanha invadiu o país, e passou a ocupação em Arnhem. Durante o Inverno da Fome de 1944-1945, alimentou-se de bulbos de tulipa e farinha de grama; sofreu desnutrição grave, anemia e edema, com consequências permanentes para a saúde. Dançou em apresentações clandestinas para arrecadar fundos para a resistência.',
      'Estudou balé em Amsterdã e Londres, e foi informada de que a desnutrição da guerra a impediria de chegar a bailarina principal. Passou ao teatro e ao cinema. A escritora Colette a viu por acaso num set em Monte Carlo e a escolheu pessoalmente para o papel principal da adaptação de Gigi na Broadway.',
      'A Princesa e o Plebeu, em 1953, rendeu-lhe o Oscar de melhor atriz na estreia como protagonista em Hollywood. Seguiram-se Sabrina, Bonequinha de Luxo, Charada, Minha Bela Dama e Um Clarão nas Trevas. Sua parceria com o estilista Hubert de Givenchy definiu uma estética que continua sendo referência.',
      'A partir de 1988 dedicou-se quase integralmente ao Unicef como embaixadora da boa vontade, com missões na Etiópia, no Sudão, na Somália, na Turquia, no Vietnã e na Bangladesh, em zonas de fome e conflito. Falava da própria experiência de criança faminta socorrida por organizações internacionais após a guerra. Recebeu a Medalha Presidencial da Liberdade. Morreu em Tolochenaz, na Suíça, em 20 de janeiro de 1993, de câncer.'
    ],
    contexto: 'Hepburn é lembrada sobretudo como ícone estético, e a fama frequentemente encobre as duas coisas que ela própria considerava centrais: a infância sob ocupação e fome, e os cinco anos finais de trabalho humanitário em campo, que não eram figurativos.',
    contribuicoes: ['Recebeu o Oscar de melhor atriz por A Princesa e o Plebeu (1953).', 'Estrelou Bonequinha de Luxo, Sabrina, Charada e Minha Bela Dama.', 'Atuou como embaixadora da boa vontade do Unicef em zonas de fome e conflito.', 'Recebeu a Medalha Presidencial da Liberdade e o prêmio humanitário Jean Hersholt.'],
    cronologia: [
      [1929, 'Nasce em Bruxelas, em 4 de maio.'],
      [1944, 'Atravessa o Inverno da Fome na Holanda ocupada.'],
      [1953, 'Estrela A Princesa e o Plebeu e ganha o Oscar.'],
      [1961, 'Estrela Bonequinha de Luxo.'],
      [1988, 'Torna-se embaixadora da boa vontade do Unicef.'],
      [1993, 'Morre na Suíça.']
    ]
  }
});

const OBRAS_F17 = {
  'Luís de Camões': [
    [
      'Os Lusíadas',
      'poesia',
      1572,
      'Epopeia em dez cantos e oitava rima que narra a viagem de Vasco da Gama à Índia, entrelaçando história portuguesa, mitologia clássica e a máquina dos deuses do Olimpo. Escrita por um autor que passou dezessete anos no Oriente e voltou pobre, celebra a expansão marítima e simultaneamente registra sua dúvida sobre ela — o episódio do Velho do Restelo condena a empresa das navegações em plena epopeia que a exalta. É a obra fundadora da literatura em língua portuguesa.'
    ],
    [
      'Rimas',
      'poesia',
      1595,
      'Reunião póstuma da obra lírica de Camões: sonetos, canções, éclogas e redondilhas dispersos em manuscritos e cópias. Muitos críticos consideram esses poemas — sobre amor, mudança, desengano e exílio — tão importantes quanto a epopeia, e vários sonetos estão entre os mais celebrados da língua portuguesa. A atribuição de parte das peças permanece objeto de estudo filológico.'
    ]
  ],
  'Antoine de Saint-Exupéry': [
    [
      'O Pequeno Príncipe',
      'livro',
      1943,
      'Um piloto caído no deserto encontra um menino vindo de outro planeta, que lhe conta sobre sua rosa e sobre os adultos absurdos que conheceu pelo caminho. Escrito e ilustrado em Nova York durante o exílio do autor, e nascido em parte de sua própria queda no deserto da Líbia em 1935, é aparentemente infantil e trata de perda, responsabilidade, vínculo e da incapacidade adulta de ver o essencial. É um dos livros mais traduzidos do mundo.'
    ],
    ['Voo Noturno', 'livro', 1931, 'Narra uma noite nas rotas de correio aéreo sobre a América do Sul, do ponto de vista dos pilotos em voo e do chefe de operações em terra que decide sobre suas vidas. Baseado na experiência direta do autor na Aéropostale, trata do dever, do risco assumido e do valor de uma missão que custa vidas. Recebeu o prêmio Femina.'],
    ['Terra dos Homens', 'livro', 1939, 'Reúne episódios da vida de piloto — o deserto, os Andes, a queda na Líbia, o resgate por um beduíno — e deles extrai reflexão sobre solidariedade, trabalho e o que dá sentido a uma vida. Recebeu o National Book Award nos Estados Unidos e o Grande Prêmio do Romance da Academia Francesa.']
  ],
  'John F. Kennedy': [
    ['Perfis de Coragem', 'livro', 1956, 'Reúne oito perfis de senadores americanos que tomaram posições impopulares por convicção, ao custo da própria carreira. Recebeu o Prêmio Pulitzer de biografia em 1957. A extensão da participação do assessor Ted Sorensen na redação foi objeto de controvérsia por décadas e depois reconhecida.'],
    ['Discurso de Posse', 'discurso', 1961, 'Proferido em janeiro de 1961, no auge da Guerra Fria, é um dos discursos presidenciais mais citados da história americana. Convoca uma geração ao serviço público, propõe a negociação sem medo com os adversários e contém a formulação sobre não perguntar o que o país pode fazer por você. Foi escrito com Ted Sorensen.']
  ],
  'Marcel Proust': [
    [
      'Em Busca do Tempo Perdido',
      'livro',
      1913,
      'Sete volumes e cerca de um milhão e meio de palavras, iniciados quando uma sensação involuntária — o gosto de um bolinho molhado no chá — devolve ao narrador um mundo inteiro esquecido. A partir daí, a obra investiga memória, tempo, amor, ciúme, arte e a mecânica da vida social na França da passagem do século. O primeiro volume foi recusado por editores e publicado por conta do autor; o segundo recebeu o Prêmio Goncourt. Deslocou o centro do romance do enredo para a consciência.'
    ]
  ],
  'Padre Antônio Vieira': [
    [
      'Sermão de Santo Antônio aos Peixes',
      'discurso',
      1654,
      'Pregado em São Luís antes de o autor embarcar para Portugal, é uma alegoria em que Vieira, impedido de acusar diretamente os colonos, dirige-se aos peixes para denunciar a exploração dos indígenas — louvando as virtudes de alguns e repreendendo os grandes que devoram os pequenos. É o ponto mais alto da oratória em língua portuguesa e um documento de denúncia da colonização feito por dentro dela.'
    ],
    ['Sermão da Sexagésima', 'discurso', 1655, 'Pregado na Capela Real de Lisboa, é um tratado sobre a arte de pregar disfarçado de sermão: Vieira ataca o estilo rebuscado dos pregadores de sua época, defende clareza e eficácia e pergunta por que tanta pregação produz tão pouca conversão. É leitura obrigatória sobre retórica em português.'],
    ['História do Futuro', 'livro', 1718, 'Obra milenarista em que Vieira defende a vinda de um Quinto Império, de matriz portuguesa e cristã, que unificaria o mundo. As ideias expostas nela e em textos correlatos motivaram seu processo pela Inquisição. Foi publicada postumamente e permanece incompleta.']
  ],
  'Alexandre Dumas': [
    [
      'Os Três Mosqueteiros',
      'livro',
      1844,
      'O jovem gascão d\u2019Artagnan chega a Paris para entrar na guarda do rei e alia-se a Athos, Porthos e Aramis contra as intrigas do cardeal Richelieu e de Milady. Publicado em folhetim, é o modelo do romance de capa e espada e um dos livros mais adaptados da história. Foi escrito com pesquisa e esboços de Auguste Maquet, colaborador cuja participação gerou processos judiciais.'
    ],
    [
      'O Conde de Monte Cristo',
      'livro',
      1844,
      'Edmond Dantès é preso injustamente na véspera do casamento, passa catorze anos no castelo de If, escapa, encontra um tesouro e volta transformado para executar uma vingança meticulosa contra os quatro homens que o destruíram. Publicado no mesmo ano de Os Três Mosqueteiros, é uma das construções narrativas mais eficazes já escritas e o romance de vingança por excelência.'
    ]
  ],
  'Agatha Christie': [
    [
      'E Não Sobrou Nenhum',
      'livro',
      1939,
      'Dez desconhecidos são atraídos a uma ilha isolada e morrem um a um, na ordem de uma canção infantil, sem que haja mais ninguém no local. É considerado o ponto máximo do romance de enigma pela construção do problema aparentemente impossível, e é o livro policial mais vendido de todos os tempos. Circulou originalmente sob título hoje abandonado por seu conteúdo racista.'
    ],
    ['O Assassinato de Roger Ackroyd', 'livro', 1926, 'Hercule Poirot investiga a morte de um industrial numa aldeia inglesa. A solução rompeu de tal forma com as convenções do gênero que gerou acusações de trapaça e um debate público sobre as regras do romance policial — debate que a própria obra acabou por vencer, ao demonstrar que todas as pistas estavam dadas.'],
    ['Assassinato no Expresso do Oriente', 'livro', 1934, 'Um passageiro é encontrado morto num trem bloqueado pela neve nos Bálcãs, com doze facadas e uma dúzia de suspeitos possíveis. Inspirado num crime real de repercussão internacional, é o mais adaptado dos romances da autora e um dos poucos em que a solução coloca o próprio detetive diante de um dilema moral.']
  ],
  'José Saramago': [
    [
      'Ensaio sobre a Cegueira',
      'livro',
      1995,
      'Uma epidemia de cegueira branca se espalha por uma cidade sem nome, e os primeiros contaminados são internados num manicômio desativado sob guarda armada. A partir dessa premissa, o livro observa o que resta da organização social quando as condições mínimas desaparecem. É a obra mais lida de Saramago e uma das alegorias políticas mais duras da literatura contemporânea.'
    ],
    ['Memorial do Convento', 'livro', 1982, 'Entrelaça a construção do convento de Mafra, erguida à custa de milhares de trabalhadores forçados, a máquina voadora do padre Bartolomeu de Gusmão e o amor entre Baltasar, soldado maneta, e Blimunda, que enxerga o interior das pessoas. Foi o livro que trouxe reconhecimento ao autor, aos sessenta anos, e fixou seu estilo característico.'],
    ['O Evangelho Segundo Jesus Cristo', 'livro', 1991, 'Reconta a vida de Jesus a partir de uma perspectiva humana, com um Deus que exige o sacrifício e um filho que resiste a ele. A obra foi vetada pelo governo português numa indicação a prêmio literário europeu, episódio que levou Saramago a mudar-se para Lanzarote em protesto.'],
    ['As Intermitências da Morte', 'livro', 2005, 'Num país sem nome, as pessoas simplesmente param de morrer a partir de 1º de janeiro, e o que parecia bênção desorganiza hospitais, seguradoras, funerárias, a Igreja e o Estado. É uma das premissas mais características do autor: uma pergunta simples levada às últimas consequências.']
  ],
  'Hermann Hesse': [
    [
      'Sidarta',
      'livro',
      1922,
      'Um jovem brâmane contemporâneo do Buda recusa seguir qualquer mestre, inclusive o próprio Buda, e busca a compreensão pela experiência direta — pelo ascetismo, pelo prazer, pelo comércio e finalmente pelo rio. Resultado de uma viagem à Índia e de anos de estudo de textos orientais, é o livro que introduziu para muitos leitores ocidentais uma leitura séria das tradições espirituais indianas.'
    ],
    ['O Lobo da Estepe', 'livro', 1927, 'Harry Haller, homem de meia-idade que se sente dividido entre o intelectual civilizado e o lobo instintivo, encontra um teatro mágico onde essa cisão é desmontada. Escrito durante uma crise pessoal grave do autor, é seu livro mais perturbador e o que mais influenciou a contracultura a partir dos anos 1960.'],
    ['Demian', 'livro', 1919, 'Publicado sob pseudônimo logo após a Primeira Guerra, acompanha um adolescente que descobre, com a ajuda de um colega enigmático, que precisa romper com o mundo seguro em que foi criado. É o primeiro fruto da experiência do autor com a psicanálise e fala diretamente a uma geração que saíra da guerra sem referências.'],
    ['O Jogo das Contas de Vidro', 'livro', 1943, 'Ambientado numa província intelectual futura dedicada a um jogo que sintetiza música, matemática e todas as disciplinas, acompanha a trajetória de seu mestre supremo até a decisão de abandoná-la. Obra final e mais ambiciosa do autor, escrita durante o nazismo, pesou decisivamente no Nobel de 1946.']
  ],
  'Rabindranath Tagore': [
    ['Gitanjali', 'poesia', 1912, 'Coletânea de poemas devocionais que Tagore traduziu ele próprio do bengali para o inglês, publicada em Londres com apresentação de W. B. Yeats. Os poemas tratam da relação entre o humano e o divino em linguagem despojada de dogma, e renderam ao autor o Nobel de Literatura em 1913 — o primeiro concedido a um não europeu.'],
    ['O Lar e o Mundo', 'livro', 1916, 'Ambientado durante o movimento de boicote a produtos britânicos em Bengala, acompanha um proprietário liberal, sua esposa e um militante nacionalista carismático. É o romance em que Tagore expõe com mais clareza sua desconfiança em relação ao nacionalismo, tema que o separou de Gandhi.']
  ],
  'Robert Louis Stevenson': [
    [
      'A Ilha do Tesouro',
      'livro',
      1883,
      'Jim Hawkins encontra o mapa de um tesouro e embarca numa expedição em que a tripulação é dominada por piratas liderados por Long John Silver. Nasceu de um mapa que o autor desenhou para entreter o enteado num dia de chuva e fixou praticamente todo o imaginário moderno da pirataria. Silver, personagem ambíguo que não é herói nem vilão, é sua criação mais celebrada.'
    ],
    [
      'O Médico e o Monstro',
      'livro',
      1886,
      'Um médico respeitável descobre uma substância que separa em duas pessoas distintas os lados de sua própria natureza. Escrito em poucos dias a partir de um pesadelo, tornou-se quase imediatamente uma metáfora corrente. É hoje lido menos como luta entre bem e mal e mais como análise do custo de uma sociedade que exige respeitabilidade absoluta na superfície.'
    ]
  ],
  'John Galbraith': [
    [
      'A Sociedade Afluente',
      'livro',
      1958,
      'Argumenta que a economia americana havia resolvido o problema da produção mas continuava raciocinando como se vivesse na escassez, produzindo abundância privada ao lado de miséria pública — escolas, hospitais e transportes precários enquanto a publicidade criava necessidades que não existiam antes. Introduziu a expressão sabedoria convencional e é uma das obras de economia mais lidas do século XX.'
    ],
    ['O Novo Estado Industrial', 'livro', 1967, 'Sustenta que as grandes corporações não obedecem ao mercado: moldam a demanda por meio da publicidade e do planejamento de longo prazo, e são dirigidas não por acionistas mas por uma tecnoestrutura de especialistas. É a formulação mais completa da crítica de Galbraith à teoria econômica convencional.'],
    ['A Crise Econômica de 1929', 'livro', 1955, 'Reconstrói a especulação, o pânico e o colapso da bolsa de Nova York em prosa clara e irônica, com atenção às formas recorrentes de euforia financeira. Voltou às listas de mais vendidos a cada nova crise desde então, o que o próprio autor comentava com humor.']
  ],
  'Ambrose Bierce': [
    ['O Dicionário do Diabo', 'livro', 1911, 'Define palavras comuns em versões cínicas e implacáveis, desmontando a hipocrisia que o vocabulário corrente encobre — paz como período de trapaça entre dois períodos de luta, ano como período de trezentos e sessenta e cinco decepções. Publicado em partes na imprensa desde 1881 e reunido em volume em 1911, é um clássico da sátira em língua inglesa.'],
    ['Um Acontecimento na Ponte de Owl Creek', 'conto', 1890, 'Conta os instantes finais de um homem prestes a ser enforcado durante a Guerra Civil americana, manipulando o tempo narrativo de forma que só se revela no último parágrafo. É um dos contos mais antologiados da literatura americana e um marco técnico na construção do ponto de vista.']
  ],
  'Pierre-Joseph Proudhon': [
    [
      'O Que é a Propriedade?',
      'livro',
      1840,
      'Abre com a pergunta do título e responde que a propriedade é um roubo — formulação mais precisa do que parece, já que Proudhon distingue a posse, o uso efetivo de terra e ferramentas por quem trabalha, que ele defende, da propriedade que rende sem trabalho, por aluguel, juro ou renda, que ele condena. É neste livro que ele se declara anarquista, dando ao termo sentido positivo pela primeira vez.'
    ]
  ],
  'John Ruskin': [
    [
      'Até Este Último',
      'livro',
      1860,
      'Quatro ensaios que atacam a economia política vitoriana por tratar o trabalhador como fator de produção e não como pessoa, e afirmam que não há riqueza senão vida. Recebido com hostilidade quase unânime na publicação, tornou-se uma das obras mais influentes do pensamento social britânico. Gandhi traduziu-o para o guzerate e afirmou que o livro mudou sua vida.'
    ],
    [
      'As Pedras de Veneza',
      'livro',
      1851,
      'Estudo da arquitetura veneziana em três volumes cujo capítulo central, Sobre a Natureza do Gótico, vai muito além da estética: Ruskin sustenta que as irregularidades do gótico revelam a mão do artesão que pensava enquanto trabalhava, ao contrário da produção industrial, que exige a repetição de um movimento sem inteligência. Foi o texto fundador do movimento Arts and Crafts.'
    ]
  ],
  'Herbert Spencer': [
    ['Princípios de Sociologia', 'livro', 1876, 'Aplica à sociedade a analogia com o organismo vivo, com órgãos e funções que se diferenciam à medida que o corpo social se torna mais complexo. Fundou a sociologia como disciplina em língua inglesa e introduziu a distinção entre sociedades militares e industriais. A obra foi amplamente usada, depois, para justificar o darwinismo social.']
  ],
  'Marguerite Yourcenar': [
    [
      'Memórias de Adriano',
      'livro',
      1951,
      'Longa carta do imperador romano moribundo ao jovem Marco Aurélio, em que ele revê o próprio governo, os amores, as guerras e a morte de Antínoo. Yourcenar carregou e abandonou o projeto por quase trinta anos antes de conseguir escrevê-lo, e o resultado reconstrói uma consciência do século II com erudição extrema e sem anacronismo psicológico. É um dos grandes romances históricos do século XX.'
    ],
    ['A Obra em Negro', 'livro', 1968, 'Acompanha Zenão, médico, alquimista e filósofo, num século XVI de guerras religiosas e perseguição intelectual. Vencedor do Prêmio Femina, é o retrato de uma inteligência livre num tempo que não a tolera, e o contraponto renascentista às Memórias de Adriano.']
  ],
  'Erving Goffman2': [],
  'Groucho Marx': [],
  'Nelson Rodrigues': [
    ['Vestido de Noiva', 'peca', 1943, 'Uma mulher atropelada agoniza numa mesa de cirurgia, e a peça se desenrola em três planos simultâneos — realidade, memória e alucinação — que se interrompem e se contradizem. A montagem de Zbigniew Ziembinski, no mesmo ano, é apontada como o marco inicial do teatro moderno brasileiro, tanto pelo texto quanto pela linguagem cênica que exigiu.'],
    ['Álbum de Família', 'peca', 1946, 'Retrata uma família de classe média atravessada por incesto, hipocrisia religiosa e violência, com um coro que comenta a ação como numa tragédia grega. Foi proibida pela censura por mais de vinte anos e é a mais radical das peças que o autor chamava de desagradáveis.'],
    ['A Vida Como Ela É...', 'livro', 1951, 'Coluna diária publicada em jornal por anos, com histórias curtas de traição, ciúme, crime e desejo na classe média carioca. Escrita no ritmo do jornalismo e alimentada pela experiência de repórter policial do autor, tornou-se um dos registros mais duradouros do imaginário urbano brasileiro.']
  ],
  'Gertrude Stein': [
    ['A Autobiografia de Alice B. Toklas', 'memoria', 1933, 'Stein escreve as memórias na voz da companheira, narrando de fora a própria vida e o salão parisiense por onde passaram Picasso, Matisse, Hemingway e Fitzgerald. O artifício produz um retrato irônico da autora feito por ela mesma, e foi seu único sucesso comercial, transformando-a em celebridade.'],
    ['Tender Buttons', 'poesia', 1914, 'Descreve objetos, alimentos e cômodos em prosa que rompe qualquer expectativa de descrição, com repetição, ritmo e desmontagem da sintaxe. É a tentativa mais radical de Stein de fazer com as palavras o que os cubistas faziam com a forma, e permanece um dos textos experimentais mais discutidos do modernismo.']
  ],
  'Robert Frost': [['North of Boston', 'poesia', 1914, 'Segundo livro do autor, publicado na Inglaterra, reúne poemas narrativos sobre a vida rural da Nova Inglaterra em linguagem coloquial e forma métrica tradicional. Contém Reparando o Muro e A Morte do Empregado, e foi o volume que estabeleceu sua reputação e permitiu seu retorno aos Estados Unidos como poeta reconhecido.']],
  'Alfred Tennyson': [
    [
      'In Memoriam A.H.H.',
      'poesia',
      1850,
      'Cento e trinta e três seções escritas ao longo de dezessete anos após a morte súbita de Arthur Hallam, amigo do autor, aos vinte e dois anos. Trata de luto, dúvida religiosa e da tentativa de reconciliar a fé com a ciência emergente — dele vem a imagem da natureza vermelha em dentes e garras, escrita antes de Darwin. Sua publicação coincidiu com a nomeação de Tennyson como poeta laureado.'
    ]
  ],
  Stendhal: [
    [
      'O Vermelho e o Negro',
      'livro',
      1830,
      'Julien Sorel, filho de carpinteiro com ambição desmedida, tenta ascender numa França pós-napoleônica em que os caminhos abertos pelo mérito militar haviam se fechado, restando a Igreja e o cálculo social. A análise fria dos motivos interiores do protagonista antecipa o romance psicológico moderno, e a obra é uma das mais duras radiografias da hipocrisia da Restauração.'
    ],
    ['A Cartuxa de Parma', 'livro', 1839, 'Escrito em cinquenta e dois dias, acompanha Fabrício del Dongo da batalha de Waterloo — vista de baixo, em confusão total, num dos trechos mais influentes da literatura de guerra — às intrigas de uma pequena corte italiana. Balzac dedicou-lhe um longo artigo elogioso, raro reconhecimento em vida para o autor.']
  ],
  'George Sand': [
    ['Indiana', 'livro', 1832, 'Primeiro romance assinado com o pseudônimo, trata do casamento como forma de sujeição legal: uma jovem casada com um homem muito mais velho busca escapar de uma situação que a lei francesa tornava praticamente irreversível. Foi lido imediatamente como manifesto e estabeleceu a autora como voz pública.'],
    ['A Pequena Fadette', 'livro', 1849, 'Ambientado no campo francês, acompanha uma menina pobre e marginalizada pela comunidade que se revela mais capaz e mais generosa do que qualquer um esperava. Faz parte dos romances rurais em que Sand retrata o campesinato com atenção incomum para a literatura de seu tempo.']
  ],
  'Alain de Botton': [
    ['As Consolações da Filosofia', 'livro', 2000, 'Aplica seis filósofos a seis dificuldades comuns: Sócrates à impopularidade, Epicuro ao dinheiro, Sêneca à frustração, Montaigne à inadequação, Schopenhauer ao coração partido e Nietzsche à dificuldade. Recupera a função original da filosofia antiga como orientação prática, e é o livro que consolidou o método do autor.'],
    ['Desejo de Status', 'livro', 2004, 'Investiga por que a preocupação com a posição social se tornou tão aguda nas sociedades modernas e propõe que a resposta está na promessa de igualdade de oportunidades: quando todos supostamente podem subir, o fracasso deixa de ser destino e passa a ser culpa. Percorre filosofia, arte, política e religião em busca de contrapesos.']
  ],
  'Louis Armstrong': [
    [
      'Gravações dos Hot Five e Hot Seven',
      'musica',
      1925,
      'Série de gravações feitas em Chicago entre 1925 e 1928 que redefiniram o jazz. Antes delas, a música era essencialmente coletiva e improvisada em conjunto; Armstrong estabeleceu o solo como centro, com fraseado, swing e liberdade rítmica que se tornariam a linguagem padrão de todos os instrumentistas seguintes. West End Blues, de 1928, é apontada como a gravação isolada mais influente da história do jazz.'
    ]
  ],
  'Vladimir Maiakóvski': [['A Nuvem de Calças', 'poesia', 1915, 'Poema em quatro partes, escrito aos vinte e dois anos, que se declara contra o amor convencional, a arte estabelecida, a sociedade e Deus. A violência das imagens e o verso escalonado, feito para declamação em praça pública, fizeram dele o texto que consagrou o autor e um marco do futurismo russo.']],
  'Adélia Prado': [
    ['Bagagem', 'poesia', 1976, 'Primeiro livro da autora, publicado aos quarenta anos com apresentação decisiva de Carlos Drummond de Andrade. Recusa a separação entre o sagrado e o doméstico: fogão, roupa lavada, desejo, corpo, cozinha, Deus e morte aparecem no mesmo plano, numa voz de mulher do interior que não pede licença para tratar de teologia.'],
    ['O Coração Disparado', 'poesia', 1978, 'Segundo livro, vencedor do Prêmio Jabuti, aprofunda a matéria do primeiro com poemas sobre desejo, maternidade, envelhecimento e fé. É o volume em que a voz da autora aparece mais segura e mais livre.']
  ],
  'Caio Fernando Abreu': [
    ['Morangos Mofados', 'livro', 1982, 'Reúne contos sobre personagens urbanos isolados, atravessados por afeto, drogas, música e pela sensação de um projeto de geração que não se realizou. Publicado no fim da ditadura, é o livro que consagrou o autor e um dos marcos da literatura brasileira contemporânea.'],
    ['Os Dragões Não Conhecem o Paraíso', 'livro', 1988, 'Treze contos que o autor pedia que fossem lidos como romance, ligados por temas de busca, perda e desejo. Recebeu o Prêmio Jabuti e é considerado por muitos críticos seu livro mais bem construído.']
  ],
  'Érico Veríssimo': [
    [
      'O Tempo e o Vento',
      'livro',
      1949,
      'Ciclo em três partes e sete volumes que acompanha as famílias Terra e Cambará ao longo de dois séculos, das missões jesuíticas à ditadura do Estado Novo. Ana Terra e o capitão Rodrigo estão entre as personagens mais conhecidas da literatura brasileira. Recusa o regionalismo pitoresco: o que interessa na obra é como violência, poder e propriedade atravessam gerações.'
    ],
    ['Incidente em Antares', 'livro', 1971, 'Numa greve de coveiros, sete mortos ficam insepultos e voltam à praça da cidade para acusar publicamente os vivos de tudo o que sabem sobre eles. Publicado em plena ditadura militar, foi lido imediatamente como crítica ao regime e à hipocrisia das elites locais.'],
    ['Olhai os Lírios do Campo', 'livro', 1938, 'Um médico de origem pobre ascende socialmente por casamento e carreira, e a morte de uma antiga companheira o obriga a rever o preço do que construiu. Foi o romance que firmou o autor junto ao grande público brasileiro.']
  ]
};

(function aplicarF17() {
  Object.entries(PANORAMAS_F17).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F17).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF17() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 17:', e);
    }
  };
})();

/* ================================================================
   FASE 18 — CONTINUAÇÃO DA FILA (autores 295 em diante)
   ================================================================ */
(function reconciliarF18() {
  QUOTES.forEach((q) => {
    if (/Pirkei Avot/i.test(q.author || '')) q.author = 'Ben Zoma';
  });
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
})();

const PANORAMAS_F18 = {
  'Jorge Luis Borges': {
    papel: 'Escritor argentino (1899–1986)',
    resumo: 'Reinventou o conto com labirintos, bibliotecas infinitas e livros que não existem, e nunca recebeu o Nobel.',
    bio: [
      'Jorge Francisco Isidoro Luis Borges Acevedo nasceu em Buenos Aires em 24 de agosto de 1899. Cresceu bilíngue, com uma avó inglesa, e leu o Quixote pela primeira vez em inglês. O pai, advogado e professor com aspirações literárias, tinha uma doença ocular hereditária que o cegou — e que Borges herdaria.',
      'A família passou a Primeira Guerra na Suíça e depois na Espanha, onde ele participou do movimento ultraísta. De volta a Buenos Aires em 1921, publicou poesia e ensaios. Trabalhou numa biblioteca municipal de bairro por nove anos, período que descreveu como humilhante, entre colegas que não liam.',
      'A virada veio nos anos 1940, com Ficções e O Aleph. Seus contos são breves, densos e construídos como problemas: a biblioteca que contém todos os livros possíveis, o homem que não consegue esquecer nada, o jardim de caminhos que se bifurcam, a resenha de um livro inexistente. Borges preferia fingir que um livro já existia a escrevê-lo — método que ele mesmo explicou como forma de evitar centenas de páginas desnecessárias.',
      'Perdeu quase completamente a visão por volta dos cinquenta e cinco anos, no mesmo período em que foi nomeado diretor da Biblioteca Nacional argentina — coincidência que registrou num poema sobre a ironia de Deus lhe dar ao mesmo tempo os livros e a noite. Passou a ditar e a compor de memória. Declarações de apoio às ditaduras militares argentina e chilena, das quais depois se retratou, são apontadas como um dos motivos pelos quais nunca recebeu o Nobel. Morreu em Genebra em 14 de junho de 1986.'
    ],
    contexto: 'Borges escreve na periferia do mundo literário e faz dessa posição um método: sem tradição nacional que o obrigasse, tomou toda a literatura mundial como material disponível. Seus procedimentos — a ficção que se apresenta como erudição, o texto sobre textos — anteciparam boa parte da literatura pós-moderna.',
    contribuicoes: ['Escreveu Ficções (1944) e O Aleph (1949), dois dos livros de contos mais influentes do século XX.', 'Criou uma forma de conto construída como problema lógico ou metafísico.', 'Inventou o procedimento da resenha de livros inexistentes.', 'Dirigiu a Biblioteca Nacional da Argentina.', 'Influenciou decisivamente a literatura pós-moderna e a teoria literária contemporânea.'],
    cronologia: [
      [1899, 'Nasce em Buenos Aires, em 24 de agosto.'],
      [1921, 'Retorna à Argentina após anos na Europa.'],
      [1944, 'Publica Ficções.'],
      [1949, 'Publica O Aleph.'],
      [1955, 'Torna-se diretor da Biblioteca Nacional, já quase cego.'],
      [1961, 'Recebe o Prêmio Formentor, que o projeta internacionalmente.'],
      [1986, 'Morre em Genebra.']
    ],
    nota: 'Borges fez declarações de apoio às ditaduras militares argentina e chilena, das quais depois se retratou publicamente.'
  },

  'Aldous Huxley': {
    papel: 'Escritor britânico (1894–1963)',
    resumo: 'Escreveu Admirável Mundo Novo, distopia em que o controle se exerce pelo prazer e não pelo medo.',
    bio: [
      'Aldous Leonard Huxley nasceu em Godalming, Inglaterra, em 26 de julho de 1894, numa das famílias intelectuais mais notáveis do país: era neto do biólogo Thomas Henry Huxley, o defensor de Darwin. A mãe morreu quando ele tinha catorze anos. Aos dezesseis, uma inflamação ocular grave deixou-o praticamente cego por três anos, o que impediu sua carreira em medicina e o serviço militar na Primeira Guerra. Recuperou visão parcial e leu com lupa pelo resto da vida.',
      'Formou-se em literatura inglesa em Oxford e projetou-se nos anos 1920 com romances satíricos sobre a intelectualidade britânica, entre eles Contraponto. Mudou-se para a Califórnia em 1937.',
      'Admirável Mundo Novo, de 1932, imagina uma sociedade estável em que as pessoas são produzidas em incubadoras, condicionadas desde o embrião para sua casta e mantidas satisfeitas por consumo, sexo sem vínculo e uma droga chamada soma. A tese que o distingue de Orwell é explícita: não é preciso proibir os livros se ninguém quiser lê-los, e o controle mais eficaz é o que as pessoas desejam. Em Regresso ao Admirável Mundo Novo, de 1958, ele avaliou quanto do previsto já havia ocorrido, e concluiu que fora mais rápido do que imaginara.',
      'A partir dos anos 1950 experimentou mescalina e LSD sob acompanhamento e escreveu As Portas da Percepção, texto que se tornaria central para a contracultura e cujo título deu nome à banda The Doors. Escreveu também A Filosofia Perene, sobre o núcleo comum das tradições místicas, e A Ilha, utopia que é o contraponto de sua distopia. Morreu em Los Angeles em 22 de novembro de 1963, no mesmo dia do assassinato de Kennedy e da morte de C. S. Lewis.'
    ],
    contexto: 'Huxley escreve entre a produção em massa fordista, que ele satiriza diretamente, e a ascensão dos regimes totalitários. Sua distopia envelheceu de forma incomum: enquanto Orwell descreveu o Estado policial, Huxley descreveu o entretenimento e o consumo como formas de controle, leitura que se tornou mais discutida com o tempo.',
    contribuicoes: ['Escreveu Admirável Mundo Novo (1932), uma das distopias mais influentes da literatura.', 'Escreveu Regresso ao Admirável Mundo Novo, avaliação crítica das próprias previsões.', 'Escreveu As Portas da Percepção, texto central para a contracultura dos anos 1960.', 'Escreveu A Filosofia Perene, sobre o núcleo comum das tradições místicas.'],
    cronologia: [
      [1894, 'Nasce em Godalming, em 26 de julho.'],
      [1911, 'Perde quase toda a visão por inflamação ocular.'],
      [1928, 'Publica Contraponto.'],
      [1932, 'Publica Admirável Mundo Novo.'],
      [1937, 'Muda-se para a Califórnia.'],
      [1954, 'Publica As Portas da Percepção.'],
      [1963, 'Morre em Los Angeles, em 22 de novembro.']
    ]
  },

  'William Butler Yeats': {
    papel: 'Poeta irlandês (1865–1939)',
    resumo: 'Figura central do renascimento literário irlandês, recebeu o Nobel e escreveu alguns dos poemas mais citados do século XX.',
    bio: [
      'William Butler Yeats nasceu em Sandymount, Dublin, em 13 de junho de 1865, filho de um pintor. Passou a infância entre Dublin, Londres e o condado de Sligo, cuja paisagem e folclore atravessam toda a sua obra. Estudou arte antes de se voltar à poesia.',
      'Envolveu-se profundamente com o ocultismo, integrando a Ordem Hermética da Aurora Dourada, e com o nacionalismo cultural irlandês. Apaixonou-se por Maud Gonne, atriz e revolucionária que recusou seus pedidos de casamento ao longo de décadas e que é a figura por trás de boa parte de sua poesia amorosa.',
      'Fundou com Lady Gregory o Abbey Theatre, em Dublin, primeiro teatro nacional irlandês, e escreveu peças baseadas na mitologia céltica. Sua poesia inicial é romântica e crepuscular; a partir dos cinquenta anos endureceu radicalmente, tornando-se seca, concreta e política — transformação rara na história da poesia, que fez dele um dos poucos autores cuja obra tardia supera a inicial.',
      'Páscoa de 1916 responde ao levante irlandês reprimido pelos britânicos com a fórmula sobre uma beleza terrível que nasce. A Segunda Vinda, escrita em 1919 após a guerra e a pandemia, contém as imagens do falcão que não ouve o falcoeiro e do centro que não se sustenta, entre as mais citadas da língua inglesa. Recebeu o Nobel de Literatura em 1923 e foi senador do Estado Livre Irlandês. Morreu em Roquebrune, na França, em 28 de janeiro de 1939.'
    ],
    contexto: 'Yeats atua na formação do Estado irlandês, e sua obra é inseparável desse processo — mas nunca se reduziu a ele. Sua desconfiança em relação à violência revolucionária e à mediocridade da nova classe dirigente aparece nos mesmos poemas em que celebra os que morreram pela causa.',
    contribuicoes: ['Recebeu o Prêmio Nobel de Literatura em 1923.', 'Fundou com Lady Gregory o Abbey Theatre, primeiro teatro nacional da Irlanda.', 'Escreveu A Segunda Vinda, Páscoa de 1916 e Navegando para Bizâncio.', 'Foi figura central do renascimento literário irlandês.', 'Transformou radicalmente o próprio estilo na maturidade, caso raro na história da poesia.'],
    cronologia: [
      [1865, 'Nasce em Dublin, em 13 de junho.'],
      [1889, 'Conhece Maud Gonne.'],
      [1904, 'Funda o Abbey Theatre.'],
      [1919, 'Escreve A Segunda Vinda.'],
      [1923, 'Recebe o Nobel de Literatura.'],
      [1939, 'Morre em Roquebrune, França.']
    ]
  },

  'Alice Walker': {
    papel: 'Escritora e ativista norte-americana (1944–)',
    resumo: 'Primeira mulher negra a receber o Pulitzer de ficção, por A Cor Púrpura, e criadora do termo womanism.',
    bio: [
      'Alice Malsenior Walker nasceu em Eatonton, Geórgia, em 9 de fevereiro de 1944, a mais nova de oito filhos de meeiros. Aos oito anos, um tiro de espingarda de brinquedo disparado por um irmão cegou-a de um olho e deixou tecido cicatricial visível; os pais não tinham carro para levá-la ao médico a tempo. O isolamento que se seguiu, segundo ela, foi o que a fez observadora e leitora.',
      'Estudou no Spelman College e no Sarah Lawrence, participou do movimento pelos direitos civis registrando eleitores no Mississippi e casou-se com um advogado judeu de direitos civis — o primeiro casamento inter-racial legalmente reconhecido naquele estado, o que lhes rendeu ameaças constantes.',
      'Foi decisiva na recuperação da obra de Zora Neale Hurston, escritora negra do renascimento do Harlem então esquecida e enterrada em cova sem identificação. Walker localizou o túmulo, pagou uma lápide e publicou um ensaio que devolveu Hurston ao cânone.',
      'A Cor Púrpura, de 1982, é escrito como cartas de Celie, mulher negra pobre do Sul rural que sofre abuso do padrasto e do marido e encontra afeto e autonomia. Rendeu o Pulitzer e o National Book Award, foi adaptado por Spielberg e por musical da Broadway, e é continuamente contestado em escolas americanas. Walker cunhou o termo womanism para nomear um feminismo negro distinto do movimento hegemônico. Publicações posteriores em que endossou autores acusados de antissemitismo geraram controvérsia significativa.'
    ],
    contexto: 'Walker escreve a partir da experiência das mulheres negras pobres do Sul rural, camada praticamente ausente da literatura americana até então. A criação do termo womanism responde diretamente à percepção de que o feminismo dominante não dava conta dessa experiência.',
    contribuicoes: ['Escreveu A Cor Púrpura (1982), vencedor do Pulitzer e do National Book Award.', 'Foi a primeira mulher negra a receber o Pulitzer de ficção.', 'Cunhou o termo womanism para nomear o feminismo negro.', 'Recuperou a obra de Zora Neale Hurston do esquecimento.', 'Escreveu ensaios reunidos em Em Busca dos Jardins de Nossas Mães.'],
    cronologia: [
      [1944, 'Nasce em Eatonton, Geórgia, em 9 de fevereiro.'],
      [1975, 'Publica o ensaio que recupera Zora Neale Hurston.'],
      [1982, 'Publica A Cor Púrpura.'],
      [1983, 'Recebe o Prêmio Pulitzer e cunha o termo womanism.'],
      [1985, 'A Cor Púrpura é adaptado ao cinema por Steven Spielberg.']
    ],
    nota: 'Endossos públicos de Walker a autores acusados de antissemitismo geraram controvérsia significativa.'
  },

  'Harriet Beecher Stowe': {
    papel: 'Escritora norte-americana (1811–1896)',
    resumo: 'Escreveu A Cabana do Pai Tomás, romance abolicionista que se tornou o mais vendido do século XIX depois da Bíblia.',
    bio: [
      'Harriet Elisabeth Beecher nasceu em Litchfield, Connecticut, em 14 de junho de 1811, filha de um pregador calvinista influente, numa família em que praticamente todos os irmãos se tornaram ministros ou ativistas. Estudou numa escola feminina dirigida pela irmã, com currículo então reservado a homens, e lecionou nela.',
      'Mudou-se para Cincinnati, cidade na fronteira entre um estado livre e um escravista, e ali conheceu pessoas fugidas da escravidão e ouviu seus relatos diretamente. Casou-se com um professor de teologia, teve sete filhos e perdeu um deles, de dezoito meses, numa epidemia de cólera — perda que ela apontou como origem de sua compreensão do que sentia uma mãe escravizada ao ter os filhos vendidos.',
      'A Lei do Escravo Fugitivo, de 1850, que obrigava cidadãos de estados livres a colaborar na captura de fugitivos, foi o gatilho. A Cabana do Pai Tomás saiu em folhetim em 1851 e em livro em 1852, vendendo trezentos mil exemplares no primeiro ano nos Estados Unidos e mais de um milhão na Grã-Bretanha. Foi traduzido em dezenas de línguas e adaptado incessantemente ao teatro.',
      'O romance teve efeito político mensurável, ampliando o apoio ao abolicionismo no Norte e provocando uma onda de romances de resposta no Sul. Sua recepção posterior é mais complexa: as adaptações teatrais deformaram as personagens em estereótipos raciais, e o próprio nome do protagonista tornou-se termo pejorativo, num processo que James Baldwin criticou duramente em ensaio célebre. Stowe morreu em Hartford em 1º de julho de 1896.'
    ],
    contexto: 'A Cabana do Pai Tomás é o caso mais citado de romance com efeito político direto. A anedota segundo a qual Lincoln a teria chamado de a pequena mulher que começou esta grande guerra não tem documentação contemporânea e é considerada apócrifa por historiadores.',
    contribuicoes: ['Escreveu A Cabana do Pai Tomás (1852), o romance mais vendido do século XIX.', 'Ampliou de forma mensurável o apoio popular ao abolicionismo nos Estados Unidos.', 'Publicou A Chave para a Cabana do Pai Tomás, com a documentação factual que sustentava o romance.', 'Escreveu mais de trinta livros e foi uma das autoras mais lidas de sua época.'],
    cronologia: [
      [1811, 'Nasce em Litchfield, Connecticut, em 14 de junho.'],
      [1850, 'A Lei do Escravo Fugitivo é aprovada.'],
      [1851, 'A Cabana do Pai Tomás começa a sair em folhetim.'],
      [1852, 'O romance é publicado em livro.'],
      [1853, 'Publica A Chave para a Cabana do Pai Tomás.'],
      [1896, 'Morre em Hartford.']
    ],
    nota: 'A frase atribuída a Lincoln sobre a pequena mulher que começou a guerra não tem documentação contemporânea e é considerada apócrifa.'
  },

  'Madame de Staël': {
    papel: 'Escritora e pensadora franco-suíça (1766–1817)',
    resumo: 'Introduziu o romantismo alemão na França, criou a crítica literária comparada e foi exilada por Napoleão.',
    bio: [
      'Anne Louise Germaine Necker nasceu em Paris em 22 de abril de 1766, filha de Jacques Necker, ministro das Finanças de Luís XVI. Cresceu no salão da mãe, entre enciclopedistas, participando das conversas desde a infância. Casou-se aos vinte anos com o embaixador sueco barão de Staël-Holstein, num arranjo político.',
      'Seu próprio salão tornou-se um dos centros da vida intelectual e política de Paris. Apoiou a Revolução em sua fase constitucional, salvou vidas durante o Terror organizando fugas, e depois tornou-se crítica declarada de Napoleão. Ele a considerou perigosa o bastante para exilá-la de Paris por quase uma década, e mandou destruir a edição inteira de um de seus livros.',
      'Da Alemanha, publicado em 1810 e imediatamente proibido na França, apresentava aos franceses a filosofia e a literatura alemãs — Goethe, Schiller, Kant — e opunha a literatura do norte, romântica e cristã, à do sul, clássica e pagã. Foi um dos textos fundadores do romantismo francês e da literatura comparada.',
      'Da Literatura Considerada em Suas Relações com as Instituições Sociais, de 1800, propôs que a literatura não pode ser julgada por regras universais, e sim compreendida em relação ao clima, à religião e às instituições da sociedade que a produziu — tese que fundou a crítica histórica. Escreveu também os romances Delphine e Corinne, sobre mulheres de talento excepcional esmagadas pelas convenções. Manteve relação longa com Benjamin Constant. Morreu em Paris em 14 de julho de 1817.'
    ],
    contexto: 'Staël atravessa o Antigo Regime, a Revolução, o Terror, o Império e a Restauração, sempre como voz independente e sempre incômoda para o poder. Sua importância é dupla: como pensadora que fundou a crítica literária moderna e como figura que demonstrou, na prática, que uma mulher podia ser adversária política de Napoleão.',
    contribuicoes: ['Escreveu Da Alemanha (1810), que introduziu o romantismo alemão na França.', 'Fundou a crítica literária comparada e histórica com Da Literatura (1800).', 'Escreveu os romances Delphine e Corinne.', 'Manteve um dos salões intelectuais mais influentes da Europa.', 'Foi opositora declarada de Napoleão e exilada por ele.'],
    cronologia: [
      [1766, 'Nasce em Paris, em 22 de abril.'],
      [1800, 'Publica Da Literatura Considerada em Suas Relações com as Instituições Sociais.'],
      [1802, 'Publica Delphine.'],
      [1807, 'Publica Corinne.'],
      [1810, 'Da Alemanha é impresso e destruído por ordem de Napoleão.'],
      [1817, 'Morre em Paris.']
    ]
  },

  'Woodrow Wilson': {
    papel: 'Acadêmico e político norte-americano, 28º presidente dos Estados Unidos (1856–1924)',
    resumo: 'Levou os Estados Unidos à Primeira Guerra, idealizou a Liga das Nações e aprofundou a segregação no governo federal.',
    bio: [
      'Thomas Woodrow Wilson nasceu em Staunton, Virgínia, em 28 de dezembro de 1856, filho de um pastor presbiteriano. Passou a infância na Geórgia durante a Guerra Civil e a Reconstrução. Teve dificuldade de leitura na infância, provavelmente dislexia. Doutorou-se em ciência política em Johns Hopkins e tornou-se presidente da Universidade de Princeton, único presidente americano com doutorado.',
      'Elegeu-se governador de Nova Jersey e depois presidente em 1912. Seu primeiro mandato aprovou reformas relevantes: criou o Sistema de Reserva Federal, a Comissão Federal de Comércio, o imposto de renda progressivo e legislação antitruste e trabalhista.',
      'Reeleito em 1916 com a promessa de manter o país fora da guerra, levou os Estados Unidos ao conflito em abril de 1917 após a retomada da guerra submarina irrestrita pela Alemanha. Formulou os Quatorze Pontos, base declarada da paz, incluindo autodeterminação dos povos, diplomacia aberta e uma associação geral de nações. Recebeu o Nobel da Paz em 1919.',
      'A Liga das Nações, sua principal proposta, foi rejeitada pelo Senado americano, e os Estados Unidos nunca aderiram. Wilson sofreu um derrame grave em 1919 durante a campanha pela ratificação e passou o restante do mandato incapacitado, com a esposa filtrando o acesso ao gabinete. Seu governo reintroduziu a segregação racial em repartições federais que estavam integradas desde a Reconstrução, demitindo e rebaixando funcionários negros — fato documentado que pesa de forma decisiva em sua avaliação histórica. Morreu em Washington em 3 de fevereiro de 1924.'
    ],
    contexto: 'Wilson formulou o vocabulário do internacionalismo liberal — autodeterminação, segurança coletiva, organização internacional — que estruturaria o século XX, inclusive a ONU. O mesmo governo aprofundou a segregação institucional nos Estados Unidos, contradição que domina a reavaliação recente de sua figura.',
    contribuicoes: ['Criou o Sistema de Reserva Federal e a Comissão Federal de Comércio.', 'Formulou os Quatorze Pontos e o princípio da autodeterminação dos povos.', 'Idealizou a Liga das Nações, precursora da ONU.', 'Recebeu o Prêmio Nobel da Paz em 1919.'],
    cronologia: [
      [1856, 'Nasce em Staunton, Virgínia, em 28 de dezembro.'],
      [1902, 'Torna-se presidente da Universidade de Princeton.'],
      [1913, 'Assume a presidência e cria o Sistema de Reserva Federal.'],
      [1917, 'Leva os Estados Unidos à Primeira Guerra Mundial.'],
      [1918, 'Apresenta os Quatorze Pontos.'],
      [1919, 'Recebe o Nobel da Paz e sofre um derrame grave.'],
      [1924, 'Morre em Washington.']
    ],
    nota: 'O governo Wilson reintroduziu a segregação racial em repartições federais integradas desde a Reconstrução, fato documentado que integra sua avaliação histórica.'
  },

  'Dag Hammarskjöld': {
    papel: 'Diplomata sueco, 2º secretário-geral da ONU (1905–1961)',
    resumo: 'Definiu o cargo de secretário-geral como o conhecemos e morreu num acidente aéreo nunca inteiramente esclarecido.',
    bio: [
      'Dag Hjalmar Agne Carl Hammarskjöld nasceu em Jönköping, Suécia, em 29 de julho de 1905, filho de um primeiro-ministro sueco. Formou-se em direito e economia, doutorou-se e fez carreira no Banco Central e no Ministério das Finanças, tornando-se depois ministro sem pasta e vice-ministro das Relações Exteriores.',
      'Foi eleito secretário-geral das Nações Unidas em 1953, num período em que o cargo era visto como essencialmente administrativo. Hammarskjöld o transformou. Criou a diplomacia preventiva, negociou pessoalmente a libertação de pilotos americanos detidos na China, mediou a crise de Suez em 1956 e concebeu, com Lester Pearson, as forças de manutenção da paz — os capacetes azuis —, instrumento que a Carta da ONU não previa.',
      'Sua atuação na crise do Congo, após a independência em 1960, colocou-o em conflito com as grandes potências: com a União Soviética, que exigiu sua renúncia e propôs substituir o cargo por uma direção tripartite, e com interesses ocidentais ligados à mineração em Katanga.',
      'Morreu na noite de 17 para 18 de setembro de 1961, quando seu avião caiu perto de Ndola, na atual Zâmbia, a caminho de uma negociação de cessar-fogo. As causas do acidente nunca foram estabelecidas de forma conclusiva; investigações posteriores da própria ONU mantiveram o caso aberto, apontando informação retida por Estados-membros. Recebeu o Nobel da Paz postumamente em 1961. Seu diário espiritual foi publicado depois como Marcos no Caminho.'
    ],
    contexto: 'Hammarskjöld exerceu o cargo no auge da Guerra Fria e da descolonização africana, quando a ONU precisava provar que podia agir sem ser instrumento de nenhum dos blocos. Sua definição de independência do secretariado — servir à organização e não aos Estados — permanece a referência do cargo.',
    contribuicoes: ['Concebeu com Lester Pearson as forças de manutenção da paz da ONU.', 'Formulou a doutrina da diplomacia preventiva e da independência do secretariado.', 'Mediou a crise de Suez em 1956.', 'Recebeu o Prêmio Nobel da Paz, postumamente, em 1961.', 'Escreveu o diário espiritual publicado como Marcos no Caminho.'],
    cronologia: [
      [1905, 'Nasce em Jönköping, em 29 de julho.'],
      [1953, 'É eleito secretário-geral das Nações Unidas.'],
      [1956, 'Media a crise de Suez e cria a primeira força de paz.'],
      [1960, 'Conduz a atuação da ONU na crise do Congo.'],
      [1961, 'Morre em acidente aéreo perto de Ndola, em setembro.']
    ],
    nota: 'As causas do acidente que matou Hammarskjöld nunca foram conclusivamente estabelecidas, e investigações da ONU mantêm o caso aberto.'
  },

  'Alex Haley': {
    papel: 'Escritor norte-americano (1921–1992)',
    resumo: 'Escreveu a autobiografia de Malcolm X e Raízes, que levou a história da escravidão à televisão de massa.',
    bio: [
      'Alexander Murray Palmer Haley nasceu em Ithaca, Nova York, em 11 de agosto de 1921, e cresceu em Henning, Tennessee, ouvindo da avó e das tias histórias da família transmitidas oralmente por gerações, que remontavam a um africano chamado Kinté. Serviu vinte anos na Guarda Costeira, onde começou a escrever para passar o tempo em alto-mar e acabou criando um posto de jornalista dentro da corporação.',
      'Após a aposentadoria militar, tornou-se entrevistador da revista Playboy, onde inaugurou o formato de entrevista longa da publicação. Entrevistou Miles Davis, Martin Luther King Jr. e, em 1963, Malcolm X.',
      'Dessa entrevista nasceu a colaboração de dois anos que resultou na Autobiografia de Malcolm X, publicada em 1965, poucos meses após o assassinato do biografado. O livro é considerado um dos mais importantes do século XX americano e vendeu milhões de exemplares.',
      'Raízes, de 1976, reconstrói sete gerações da família de Haley a partir de Kunta Kinte, sequestrado em Gâmbia no século XVIII. Vendeu milhões de exemplares, recebeu um Pulitzer especial e foi adaptado numa minissérie de televisão que bateu recordes de audiência e reintroduziu a escravidão no debate público americano. A obra sofreu questionamentos sérios: pesquisadores contestaram a exatidão da genealogia e da documentação, e Haley fez um acordo judicial reconhecendo que trechos haviam sido tomados de outro romance. Morreu em Seattle em 10 de fevereiro de 1992.'
    ],
    contexto: 'Raízes teve efeito cultural desproporcional: levou milhões de americanos a discutir a escravidão em horário nobre e desencadeou um movimento popular de pesquisa genealógica entre famílias negras. Esse efeito histórico permanece, ainda que a exatidão factual do livro tenha sido reduzida pelas contestações.',
    contribuicoes: ['Escreveu a Autobiografia de Malcolm X (1965), com o próprio Malcolm X.', 'Escreveu Raízes (1976), que recebeu um Pulitzer especial.', 'A adaptação televisiva de Raízes bateu recordes de audiência e reintroduziu a escravidão no debate público americano.', 'Inaugurou o formato da entrevista longa na revista Playboy.'],
    cronologia: [
      [1921, 'Nasce em Ithaca, Nova York, em 11 de agosto.'],
      [1963, 'Entrevista Malcolm X pela primeira vez.'],
      [1965, 'Publica a Autobiografia de Malcolm X.'],
      [1976, 'Publica Raízes.'],
      [1977, 'A minissérie Raízes é exibida com audiência recorde.'],
      [1992, 'Morre em Seattle.']
    ],
    nota: 'A exatidão genealógica e documental de Raízes foi contestada por pesquisadores, e Haley fez acordo judicial reconhecendo trechos tomados de outro romance.'
  },

  'Lord Byron': {
    papel: 'Poeta britânico (1788–1824)',
    resumo: 'Ícone do romantismo europeu, criou o herói byroniano e morreu aos 36 anos na guerra de independência grega.',
    bio: [
      'George Gordon Byron nasceu em Londres em 22 de janeiro de 1788, com uma deformidade no pé que o fez mancar pela vida inteira e que foi fonte permanente de humilhação para ele. O pai, apelidado de Jack Louco, dilapidou a fortuna da família e morreu quando o filho tinha três anos. Aos dez anos, Byron herdou inesperadamente o título de barão e uma abadia arruinada.',
      'Publicou os dois primeiros cantos de A Peregrinação de Childe Harold em 1812, aos vinte e quatro anos, e tornou-se célebre da noite para o dia — ele próprio observou que acordara famoso. Criou nesse poema o herói byroniano: o homem orgulhoso, melancólico, sedutor, marcado por uma culpa secreta e em desacordo com o mundo, figura que dominaria a literatura europeia por décadas.',
      'Sua vida privada produziu escândalo permanente. Um casamento desfeito em um ano, rumores insistentes de relação incestuosa com a meia-irmã Augusta e relações homossexuais numa Inglaterra que as punia com morte tornaram sua permanência no país insustentável. Deixou a Inglaterra em 1816 e nunca mais voltou. Passou o verão em Genebra com os Shelley, na reunião em que Mary Shelley concebeu Frankenstein, e estabeleceu-se depois na Itália.',
      'Escreveu ali Dom Juan, longo poema satírico e inacabado que é considerado sua obra maior, muito distante do tom romântico que o tornara famoso. Envolveu-se com a causa da independência grega, financiou uma frota com recursos próprios e foi a Mesolongi organizar tropas. Morreu de febre em 19 de abril de 1824, aos trinta e seis anos, sem ter combatido. É herói nacional na Grécia até hoje.'
    ],
    contexto: 'Byron foi a primeira celebridade literária moderna, no sentido pleno: fama de massa, escândalo permanente, imagem pública construída e consumida como produto. O herói byroniano atravessou o romantismo europeu e sobrevive em praticamente toda a ficção popular posterior.',
    contribuicoes: ['Escreveu A Peregrinação de Childe Harold e criou o herói byroniano.', 'Escreveu Dom Juan, considerado sua obra maior.', 'Influenciou decisivamente o romantismo europeu, de Púchkin a Espronceda.', 'Financiou e organizou apoio militar à independência grega, tornando-se herói nacional no país.'],
    cronologia: [
      [1788, 'Nasce em Londres, em 22 de janeiro.'],
      [1812, 'Publica Childe Harold e torna-se célebre.'],
      [1816, 'Deixa a Inglaterra definitivamente; verão em Genebra com os Shelley.'],
      [1819, 'Inicia a publicação de Dom Juan.'],
      [1823, 'Parte para a Grécia em apoio à independência.'],
      [1824, 'Morre em Mesolongi, em 19 de abril.']
    ]
  },

  'Alexander Pope': {
    papel: 'Poeta britânico (1688–1744)',
    resumo: 'Mestre do dístico heroico, é o segundo autor mais citado da língua inglesa depois de Shakespeare.',
    bio: [
      'Alexander Pope nasceu em Londres em 21 de maio de 1688, filho de comerciantes católicos. Sua religião o excluía legalmente da universidade, de cargos públicos e da propriedade em Londres — foi educado em casa e por conta própria. Aos doze anos contraiu tuberculose óssea, que deformou sua coluna, interrompeu seu crescimento em pouco mais de um metro e trinta e lhe causou dores por toda a vida.',
      'Publicou o Ensaio sobre a Crítica aos vinte e três anos, em dísticos heroicos de precisão extraordinária. Dele vêm formulações que entraram na língua corrente, como a de que errar é humano e perdoar é divino, e a advertência de que um pouco de saber é coisa perigosa.',
      'O Rapto da Madeixa, de 1712, transforma uma disputa real entre famílias por causa de um cacho de cabelo cortado sem permissão numa epopeia em miniatura, com deuses, batalhas e catástrofes. É a mais perfeita sátira heroicômica da língua inglesa.',
      'Traduziu a Ilíada e a Odisseia em versos que lhe renderam independência financeira — foi o primeiro autor inglês a viver do próprio trabalho literário sem mecenas. A Dunciada, sua sátira final, ataca com ferocidade a mediocridade literária e a estupidez que ele via avançar sobre a cultura. Fez inimigos permanentes e respondeu a todos com o verso. Morreu em Twickenham em 30 de maio de 1744.'
    ],
    contexto: 'Pope é o ponto mais alto do neoclassicismo inglês, num século que valorizava ordem, medida e clareza. Sua deficiência física e sua exclusão legal como católico explicam parte da ferocidade satírica: escrevia de uma posição sem qualquer proteção institucional.',
    contribuicoes: [
      'Escreveu o Ensaio sobre a Crítica e o Ensaio sobre o Homem.',
      'Escreveu O Rapto da Madeixa, a maior sátira heroicômica da língua inglesa.',
      'Traduziu a Ilíada e a Odisseia, tornando-se o primeiro autor inglês a viver do próprio trabalho literário.',
      'É o segundo autor mais citado em inglês, atrás apenas de Shakespeare.',
      'Levou o dístico heroico ao seu ponto máximo de precisão.'
    ],
    cronologia: [
      [1688, 'Nasce em Londres, em 21 de maio.'],
      [1711, 'Publica o Ensaio sobre a Crítica.'],
      [1712, 'Publica O Rapto da Madeixa.'],
      [1715, 'Inicia a tradução da Ilíada.'],
      [1733, 'Publica o Ensaio sobre o Homem.'],
      [1744, 'Morre em Twickenham.']
    ]
  },

  'Tales de Mileto': {
    papel: 'Filósofo e matemático grego (c. 624 a.C.–c. 546 a.C.)',
    resumo: 'Primeiro a explicar a natureza sem recorrer aos deuses, é considerado o iniciador da filosofia ocidental.',
    bio: [
      'Tales nasceu em Mileto, cidade grega da costa da Ásia Menor, por volta de 624 a.C. Mileto era o porto mais próspero do mundo grego, em contato comercial com o Egito e a Babilônia, o que explica o acesso que Tales teve a conhecimentos matemáticos e astronômicos daquelas civilizações. Nada escreveu, ou nada sobreviveu; tudo o que se sabe vem de Aristóteles, Heródoto e Diógenes Laércio, séculos depois.',
      'Sua importância não está na resposta que deu, e sim na pergunta. Ao propor que tudo se origina da água, Tales buscou um princípio único e material para explicar a diversidade da natureza — e, ao fazê-lo, dispensou os deuses como causa. É essa mudança de método, e não a tese, que faz dele o primeiro filósofo.',
      'Atribui-se a ele a previsão de um eclipse solar, provavelmente o de 585 a.C., que teria interrompido uma batalha entre lídios e medos. Em geometria, é creditado com a demonstração de proposições que os egípcios usavam empiricamente, entre elas o teorema que leva seu nome, e com o cálculo da altura das pirâmides pela sombra.',
      'As anedotas transmitidas sobre ele são contraditórias e reveladoras. Platão conta que caiu num poço enquanto observava os astros e foi ridicularizado por uma serva trácia — a primeira piada sobre a inutilidade dos filósofos. Aristóteles conta o oposto: cansado das zombarias, Tales previu uma boa safra de azeitonas, alugou antecipadamente todas as prensas da região e enriqueceu, para demonstrar que filósofos poderiam ficar ricos se quisessem.'
    ],
    contexto: 'Tales inaugura a escola de Mileto, junto com Anaximandro e Anaxímenes, no momento em que o pensamento grego começa a substituir a explicação mítica pela investigação da natureza. É o ponto de partida convencional da filosofia e da ciência ocidentais.',
    contribuicoes: ['Foi o primeiro a propor uma explicação natural e não mítica para a origem das coisas.', 'É considerado o iniciador da filosofia e da ciência ocidentais.', 'A ele se atribui a demonstração do teorema que leva seu nome, na geometria.', 'Teria previsto um eclipse solar, provavelmente o de 585 a.C.', 'Fundou a escola de Mileto, primeira tradição filosófica grega.'],
    cronologia: [
      ['c. 624 a.C.', 'Nasce em Mileto.'],
      ['585 a.C.', 'Data do eclipse cuja previsão lhe é atribuída.'],
      ['c. 546 a.C.', 'Morre em Mileto.']
    ],
    nota: 'Tales não deixou nenhum escrito. Tudo o que se conhece dele vem de autores posteriores, e várias atribuições são consideradas lendárias.'
  },

  Protágoras: {
    papel: 'Filósofo grego (c. 490 a.C.–c. 420 a.C.)',
    resumo: 'O mais célebre dos sofistas, afirmou que o homem é a medida de todas as coisas.',
    bio: [
      'Protágoras nasceu em Abdera, na Trácia, por volta de 490 a.C. Foi o primeiro a se apresentar como sofista — professor profissional de retórica, argumentação e virtude cívica — e a cobrar honorários altos por seu ensino, prática que escandalizava e que Sócrates recusava. Viajou pelo mundo grego dando aulas e ganhou fortuna considerável.',
      'Sua fama era tal que Péricles o encarregou de redigir as leis da colônia de Túrios, no sul da Itália, fundada por Atenas em 444 a.C. — uma das poucas ocasiões em que um filósofo grego escreveu efetivamente a legislação de uma cidade.',
      'Sua tese mais conhecida abre uma obra perdida: o homem é a medida de todas as coisas, das que são enquanto são e das que não são enquanto não são. A formulação é lida como relativismo — não há verdade independente de quem percebe, e o vento é frio para quem sente frio e quente para quem sente calor. Platão dedicou-lhe dois diálogos, um deles inteiramente voltado a refutá-la.',
      'Sustentou também que, sobre os deuses, não é possível saber se existem ou não existem, dada a obscuridade do assunto e a brevidade da vida humana. Segundo a tradição, essa afirmação lhe custou a expulsão de Atenas e a queima pública de seus livros, embora a historicidade do episódio seja contestada. Morreu por volta de 420 a.C., possivelmente num naufrágio.'
    ],
    contexto: 'Protágoras representa a virada do pensamento grego da natureza para o humano, contemporânea da democracia ateniense — que exigia cidadãos capazes de argumentar em público. A hostilidade de Platão aos sofistas moldou a imagem depreciativa do termo, e a reabilitação de Protágoras como pensador sério é obra recente.',
    contribuicoes: ['Foi o primeiro a exercer profissionalmente o ensino de retórica e argumentação como sofista.', 'Formulou a tese de que o homem é a medida de todas as coisas.', 'Redigiu as leis da colônia ateniense de Túrios, a pedido de Péricles.', 'Formulou uma posição agnóstica pioneira sobre a existência dos deuses.'],
    cronologia: [
      ['c. 490 a.C.', 'Nasce em Abdera, na Trácia.'],
      ['444 a.C.', 'Redige as leis da colônia de Túrios.'],
      ['c. 420 a.C.', 'Morre, possivelmente num naufrágio.']
    ],
    nota: 'As obras de Protágoras se perderam. O que se conhece vem de fragmentos e de relatos de autores posteriores, muitos deles hostis, sobretudo Platão.'
  },

  'Pierre Abélard': {
    papel: 'Filósofo e teólogo francês (1079–1142)',
    resumo: 'Um dos maiores lógicos da Idade Média, foi castrado por causa de seu amor por Heloísa e condenado duas vezes por heresia.',
    bio: [
      'Pierre Abélard nasceu em Le Pallet, na Bretanha, em 1079, filho de um cavaleiro. Renunciou à herança e à carreira militar para estudar. Percorreu escolas desafiando os próprios mestres em disputa pública e derrotando-os, prática que lhe deu enorme fama e inimigos duradouros. Tornou-se o professor mais procurado de Paris.',
      'Foi contratado como preceptor de Heloísa, sobrinha de um cônego, jovem de erudição excepcional. A relação entre os dois resultou num filho e num casamento secreto. O tio dela, sentindo-se traído, mandou homens castrarem Abélard durante a noite. Ambos entraram para a vida religiosa; a correspondência que trocaram depois, em que Heloísa argumenta com uma franqueza intelectual notável, é um dos documentos mais extraordinários da Idade Média.',
      'Filosoficamente, Abélard reformulou a lógica e o problema dos universais, propondo que os gêneros não existem como coisas nem são meras palavras, e sim significações mentais fundadas em semelhanças reais. Sim e Não reúne cento e cinquenta e oito questões teológicas com citações de autoridades que se contradizem, sem oferecer solução — o método que ensinava a duvidar para investigar e que fundou a escolástica.',
      'Em ética, sustentou que o pecado está na intenção, e não no ato — tese revolucionária para a época. Foi condenado por heresia em 1121 e novamente em 1141, por iniciativa de Bernardo de Claraval. Morreu em 21 de abril de 1142 a caminho de Roma para apelar. Escreveu a autobiografia História das Minhas Calamidades. Está sepultado com Heloísa no cemitério do Père-Lachaise.'
    ],
    contexto: 'Abélard atua no renascimento intelectual do século XII, quando as escolas urbanas substituíam os mosteiros como centros de estudo e a lógica aristotélica voltava a circular. Seu método de confronto sistemático de autoridades é a base da escolástica que Tomás de Aquino levaria à forma final.',
    contribuicoes: [
      'Reformulou o problema dos universais na lógica medieval.',
      'Escreveu Sim e Não, obra que fundou o método escolástico de confronto de autoridades.',
      'Formulou a ética da intenção, deslocando o pecado do ato para a vontade.',
      'Escreveu História das Minhas Calamidades, uma das primeiras autobiografias medievais.',
      'Sua correspondência com Heloísa é um dos documentos mais notáveis da Idade Média.'
    ],
    cronologia: [
      [1079, 'Nasce em Le Pallet, na Bretanha.'],
      ['c. 1115', 'Torna-se preceptor de Heloísa.'],
      [1121, 'É condenado por heresia pela primeira vez.'],
      ['c. 1130', 'Escreve História das Minhas Calamidades.'],
      [1141, 'É condenado novamente, por iniciativa de Bernardo de Claraval.'],
      [1142, 'Morre a caminho de Roma.']
    ]
  },

  'Aristóteles Onassis': {
    papel: 'Armador grego (1906–1975)',
    resumo: 'Construiu a maior frota mercante privada do mundo e tornou-se símbolo da riqueza do pós-guerra.',
    bio: [
      'Aristóteles Sócrates Onassis nasceu em Esmirna, na Anatólia então otomana, em 20 de janeiro de 1906, em família grega próspera de comerciantes de tabaco. Em 1922, com a captura da cidade pelo exército turco e o incêndio que a destruiu, a família perdeu tudo; parentes morreram e o pai foi preso. Onassis, aos dezesseis anos, conseguiu escapar e emigrou para a Argentina com pouquíssimo dinheiro.',
      'Trabalhou como operador de telefonia em Buenos Aires e começou a importar tabaco oriental. Aos vinte e cinco anos já era milionário. Em 1932, com a Depressão desvalorizando navios a preço de sucata, comprou seis cargueiros canadenses por uma fração do valor — aposta que fundou sua frota.',
      'Foi pioneiro dos superpetroleiros, encomendando navios de porte muito superior ao padrão da época e antecipando o crescimento da demanda mundial por petróleo no pós-guerra. Registrou embarcações sob bandeiras de conveniência, prática que ajudou a difundir e que continua a moldar o transporte marítimo. Chegou a ser processado nos Estados Unidos por irregularidades na aquisição de navios excedentes de guerra e fez acordo.',
      'Sua vida pessoal foi objeto de atenção mundial: a relação longa com a soprano Maria Callas e o casamento com Jacqueline Kennedy, viúva do presidente americano, em 1968. Comprou a ilha de Skorpios e controlou por anos a Olympic Airways. O filho Alexandre morreu num acidente aéreo em 1973, golpe do qual não se recuperou. Morreu em Neuilly-sur-Seine em 15 de março de 1975.'
    ],
    contexto: 'Onassis é o caso arquetípico do refugiado que constrói um império a partir do zero no século XX. Sua trajetória coincide com a explosão do transporte marítimo de petróleo no pós-guerra, e sua figura pública tornou-se sinônimo de riqueza no imaginário popular.',
    contribuicoes: ['Construiu uma das maiores frotas mercantes privadas do mundo.', 'Foi pioneiro na construção de superpetroleiros, antecipando a demanda mundial por petróleo.', 'Difundiu o registro de embarcações sob bandeiras de conveniência.', 'Controlou por anos a companhia aérea nacional grega.'],
    cronologia: [
      [1906, 'Nasce em Esmirna, em 20 de janeiro.'],
      [1922, 'Foge da destruição de Esmirna e emigra para a Argentina.'],
      [1932, 'Compra seis cargueiros a preço de sucata durante a Depressão.'],
      [1957, 'Assume o controle da Olympic Airways.'],
      [1968, 'Casa-se com Jacqueline Kennedy.'],
      [1975, 'Morre em Neuilly-sur-Seine.']
    ]
  },

  'Estée Lauder': {
    papel: 'Empresária norte-americana (1908–2004)',
    resumo: 'Construiu do zero um império de cosméticos vendendo amostras grátis quando ninguém fazia isso.',
    bio: [
      'Josephine Esther Mentzer nasceu no Queens, Nova York, em 1º de julho de 1908, filha de imigrantes judeus húngaros e eslovacos; o pai tinha uma loja de ferragens. Aprendeu a fazer cremes com um tio químico que veio da Europa e começou vendendo os produtos dele em salões de beleza, aplicando pessoalmente nas clientes enquanto elas estavam sob o secador.',
      'Fundou a empresa com o marido Joseph Lauder em 1946, com quatro produtos. A entrada no mercado veio da persistência: conseguiu espaço na Saks Fifth Avenue depois de repetidas recusas e vendeu todo o estoque em dois dias.',
      'Sua contribuição decisiva foi de método. Sem dinheiro para publicidade, criou a prática de dar amostras grátis e brindes com a compra, então considerada desperdício pelo setor. A estratégia funcionou porque o produto era bom o bastante para que a amostra gerasse retorno, e tornou-se padrão em toda a indústria de cosméticos. Insistia em treinar pessoalmente as vendedoras e em tocar o rosto das clientes ao demonstrar o produto.',
      'Lançou Youth Dew em 1953, um óleo de banho perfumado vendido como cosmético e não como perfume caro, o que permitiu às mulheres comprá-lo para si mesmas em vez de esperar que fosse presenteado — mudança de posicionamento que multiplicou a receita. A empresa cresceu para dezenas de marcas e mercado global. Foi a única mulher na lista das vinte pessoas mais influentes dos negócios do século XX publicada pela revista Time. Morreu em Nova York em 24 de abril de 2004.'
    ],
    contexto: 'Estée Lauder construiu sua empresa num setor em que as decisões de compra eram femininas e a gestão inteiramente masculina. Suas inovações de venda direta e amostragem partiram exatamente do conhecimento da cliente que os concorrentes não tinham.',
    contribuicoes: ['Fundou a Estée Lauder Companies, uma das maiores empresas de cosméticos do mundo.', 'Criou a prática de amostras grátis e brindes com a compra, hoje padrão da indústria.', 'Reposicionou a fragrância como produto de autocompra feminina, com Youth Dew.', 'Foi a única mulher na lista da revista Time dos gênios dos negócios do século XX.'],
    cronologia: [
      [1908, 'Nasce no Queens, Nova York, em 1º de julho.'],
      [1946, 'Funda a empresa com o marido, com quatro produtos.'],
      [1948, 'Obtém espaço na Saks Fifth Avenue.'],
      [1953, 'Lança Youth Dew.'],
      [1960, 'Inicia a expansão internacional.'],
      [2004, 'Morre em Nova York.']
    ]
  },

  'Émile-Auguste Chartier': {
    papel: 'Filósofo e professor francês (1868–1951)',
    resumo: 'Assinando como Alain, escreveu milhares de textos curtos de filosofia para jornais e formou gerações de pensadores franceses.',
    bio: [
      'Émile-Auguste Chartier nasceu em Mortagne-au-Perche, na Normandia, em 3 de março de 1868, filho de um veterinário. Formou-se na École Normale Supérieure e dedicou a vida ao ensino secundário, recusando a carreira universitária — decisão deliberada, por considerar a sala de aula do liceu o lugar próprio da filosofia. Lecionou no Liceu Henri-IV, em Paris, e teve entre seus alunos Simone Weil, Raymond Aron, Georges Canguilhem e André Maurois.',
      'Adotou o pseudônimo Alain e criou uma forma própria: os propos, textos de cerca de duas páginas escritos de uma só vez, sem rascunho nem revisão, publicados quase diariamente em jornais. Escreveu milhares deles ao longo de décadas, sobre praticamente tudo — bocejo, chuva, cavalos, Descartes, tédio, política, felicidade.',
      'Alistou-se voluntariamente aos quarenta e seis anos na Primeira Guerra, recusando qualquer posto de oficial e servindo como soldado raso na artilharia, por não querer dar ordens numa guerra que considerava absurda. A experiência produziu Mars ou a Guerra Julgada e reforçou seu pacifismo radical.',
      'Suas ideias centrais: a felicidade é resultado de vontade e ação, não de circunstância; o pessimismo vem do humor e o otimismo da vontade; e é preciso desconfiar de todos os poderes, inclusive dos eleitos. Sobre Felicidade, reunindo propos sobre o tema, é seu livro mais conhecido. Morreu em Le Vésinet em 2 de junho de 1951.'
    ],
    contexto: 'Alain é uma figura sem paralelo: um filósofo de enorme influência que não escreveu tratados e não quis cátedra. Sua obra existe em fragmentos escritos para jornal e seu efeito maior foi exercido diretamente sobre alunos que se tornariam alguns dos principais pensadores franceses do século XX.',
    contribuicoes: ['Criou a forma dos propos, textos filosóficos curtos escritos diariamente para a imprensa.', 'Escreveu Sobre Felicidade e Mars ou a Guerra Julgada.', 'Formou como professor de liceu Simone Weil, Raymond Aron e Georges Canguilhem.', 'Formulou uma filosofia prática da vontade contra o determinismo do humor.'],
    cronologia: [
      [1868, 'Nasce em Mortagne-au-Perche, em 3 de março.'],
      [1906, 'Começa a publicar os propos na imprensa.'],
      [1914, 'Alista-se voluntariamente como soldado raso.'],
      [1925, 'Publica Sobre Felicidade.'],
      [1951, 'Morre em Le Vésinet.']
    ]
  },

  'Paul Tillich': {
    papel: 'Teólogo e filósofo alemão-americano (1886–1965)',
    resumo: 'Definiu a fé como a preocupação última e foi o primeiro professor não judeu demitido pelo regime nazista.',
    bio: [
      'Paul Johannes Tillich nasceu em Starzeddel, então Prússia e hoje Polônia, em 20 de agosto de 1886, filho de um pastor luterano conservador. Doutorou-se em filosofia e teologia e serviu como capelão do exército alemão na Primeira Guerra Mundial, durante quatro anos no front. A experiência das trincheiras destruiu sua fé herdada e provocou colapsos nervosos; foi ali, entre feridos e mortos, que sua teologia passou a partir da angústia e não da certeza.',
      'Lecionou em várias universidades alemãs e envolveu-se com o socialismo religioso. Em 1933 publicou um livro contra o nacional-socialismo e foi suspenso — o primeiro professor não judeu demitido pelo novo regime. Emigrou para os Estados Unidos a convite de Reinhold Niebuhr, aprendeu inglês e lecionou em Nova York, Harvard e Chicago.',
      'Sua contribuição central é o método da correlação: a filosofia formula as perguntas que a existência humana produz, e a teologia oferece respostas a partir da revelação. Redefiniu a fé não como crença em proposições, mas como preocupação última — aquilo que reivindica de alguém uma lealdade incondicional, seja Deus ou não. Nessa definição, o ateu também tem uma fé, e ídolos modernos como nação e sucesso funcionam como divindades.',
      'A Coragem de Ser, de 1952, trata da angústia diante da morte, do vazio e da culpa, e propõe que a coragem consiste em afirmar a própria existência apesar delas. Foi o livro que o tornou conhecido além dos círculos teológicos, num pós-guerra que buscava exatamente esse vocabulário. A Teologia Sistemática, em três volumes, é sua obra maior. Morreu em Chicago em 22 de outubro de 1965.'
    ],
    contexto: 'Tillich escreve para uma cultura que havia perdido a linguagem religiosa tradicional sem perder as perguntas que ela respondia. Seu vocabulário — preocupação última, coragem de ser, fundamento do ser — foi construído justamente para falar a quem não aceitaria a formulação doutrinária, e é isso que explica seu alcance fora da igreja.',
    contribuicoes: ['Formulou o método da correlação entre filosofia e teologia.', 'Redefiniu a fé como preocupação última, formulação de grande alcance fora da teologia.', 'Escreveu A Coragem de Ser (1952) e a Teologia Sistemática, em três volumes.', 'Foi o primeiro professor não judeu demitido pelo regime nazista, em 1933.'],
    cronologia: [
      [1886, 'Nasce em Starzeddel, em 20 de agosto.'],
      [1914, 'Serve como capelão no front da Primeira Guerra.'],
      [1933, 'É demitido pelo regime nazista e emigra para os Estados Unidos.'],
      [1951, 'Publica o primeiro volume da Teologia Sistemática.'],
      [1952, 'Publica A Coragem de Ser.'],
      [1965, 'Morre em Chicago.']
    ]
  },

  'Karl Menninger': {
    papel: 'Psiquiatra norte-americano (1893–1990)',
    resumo: 'Modernizou o tratamento psiquiátrico nos Estados Unidos e defendeu que doença mental é questão de grau, não de categoria.',
    bio: [
      'Karl Augustus Menninger nasceu em Topeka, Kansas, em 22 de julho de 1893. Formou-se em medicina em Harvard e voltou ao Kansas para fundar, em 1919, com o pai e depois o irmão, uma clínica psiquiátrica familiar num estado do interior — o que era, na época, contraintuitivo, já que a psiquiatria séria se concentrava nas grandes cidades e na Europa.',
      'A Clínica Menninger tornou-se uma das instituições psiquiátricas mais respeitadas do mundo. Sua inovação foi o ambiente terapêutico total: tratar não apenas o paciente em sessões, mas organizar toda a instituição — equipe, rotina, espaço físico — como parte do tratamento, em oposição ao modelo asilar de contenção então dominante.',
      'Após a Segunda Guerra, dirigiu o maior programa de formação em psiquiatria da história americana, num hospital de veteranos em Topeka, que formou boa parte de uma geração inteira de psiquiatras num momento em que o país tinha milhares de veteranos com trauma de guerra e quase nenhum especialista.',
      'Escreveu O Homem Contra Si Mesmo, sobre autodestruição, e A Vitalidade da Vida Humana. Sustentava que a doença mental não é uma categoria separada da saúde, e sim uma questão de grau na capacidade de lidar com o estresse. Em Que Aconteceu com o Pecado?, de 1973, argumentou que a linguagem terapêutica havia eliminado o vocabulário da responsabilidade moral. Militou pela reforma do sistema prisional e pelos direitos dos povos indígenas americanos. Morreu em Topeka em 18 de julho de 1990.'
    ],
    contexto: 'Menninger atua na transformação da psiquiatria americana, que passou do asilo custodial ao tratamento ativo entre as décadas de 1920 e 1950. Sua clínica e seu programa de formação foram instrumentos concretos dessa mudança, muito além da influência de seus livros.',
    contribuicoes: ['Cofundou a Clínica Menninger, referência internacional em psiquiatria.', 'Desenvolveu o conceito de ambiente terapêutico total no tratamento hospitalar.', 'Dirigiu o maior programa de formação de psiquiatras da história dos Estados Unidos.', 'Escreveu O Homem Contra Si Mesmo, sobre comportamento autodestrutivo.', 'Militou pela reforma do sistema prisional americano.'],
    cronologia: [
      [1893, 'Nasce em Topeka, Kansas, em 22 de julho.'],
      [1919, 'Funda com o pai a clínica que levaria o nome da família.'],
      [1938, 'Publica O Homem Contra Si Mesmo.'],
      [1946, 'Dirige o programa de formação psiquiátrica em Topeka.'],
      [1973, 'Publica Que Aconteceu com o Pecado?'],
      [1990, 'Morre em Topeka.']
    ]
  },

  'Leandro Karnal': {
    papel: 'Historiador e escritor brasileiro (1963–)',
    resumo: 'Um dos divulgadores de história e filosofia mais conhecidos do Brasil, com forte presença em palestras e televisão.',
    bio: [
      'Leandro Karnal nasceu em São Leopoldo, Rio Grande do Sul, em 1º de junho de 1963, em família de origem italiana. Formou-se em história na Universidade do Vale do Rio dos Sinos e doutorou-se pela Universidade de São Paulo, com pesquisa sobre a catequese e o teatro jesuítico no México e no Brasil coloniais.',
      'Foi professor da Universidade Estadual de Campinas por mais de duas décadas, com trabalho acadêmico sobre história da América, religião e ensino de história. Deixou a universidade em 2019.',
      'Tornou-se figura pública por meio de palestras, programas de televisão e vídeos, tratando de história, filosofia, ética e comportamento em linguagem acessível e com forte uso de referências literárias. Suas apresentações reúnem plateias grandes e circulam amplamente em vídeo.',
      'Publicou Verdades e Mentiras, Todos Contra Todos, O Dilema do Porco-Espinho — sobre a dificuldade humana de conviver, a partir da imagem de Schopenhauer — e Pecar e Perdoar, além de obras acadêmicas e didáticas sobre ensino de história. Como toda figura de divulgação, sua produção é lida sobretudo fora do meio acadêmico, e a tensão entre alcance popular e profundidade é discutida em relação a ela.'
    ],
    contexto: 'Karnal pertence à geração de acadêmicos brasileiros que passou a ocupar espaço na comunicação de massa a partir dos anos 2010, num país em que a demanda por reflexão histórica e filosófica cresceu junto com a polarização do debate público.',
    contribuicoes: ['Tornou-se um dos principais divulgadores de história e filosofia no Brasil.', 'Escreveu O Dilema do Porco-Espinho, Verdades e Mentiras e Pecar e Perdoar.', 'Produziu obra acadêmica sobre história da América colonial e ensino de história.', 'Foi professor da Universidade Estadual de Campinas por mais de vinte anos.'],
    cronologia: [
      [1963, 'Nasce em São Leopoldo, Rio Grande do Sul, em 1º de junho.'],
      [1996, 'Doutora-se em história pela Universidade de São Paulo.'],
      [2017, 'Publica O Dilema do Porco-Espinho.'],
      [2019, 'Deixa a Universidade Estadual de Campinas.']
    ]
  },

  'Roberto Shinyashiki': {
    papel: 'Médico psiquiatra e escritor brasileiro (1954–)',
    resumo: 'Um dos autores brasileiros de desenvolvimento pessoal mais vendidos, com Sem Medo de Vencer e A Carícia Essencial.',
    bio: [
      'Roberto Tadeu Shinyashiki nasceu em São Paulo em 5 de setembro de 1954, em família de origem japonesa. Formou-se em medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo e especializou-se em psiquiatria, com formação também em administração de empresas.',
      'Começou a atuar com dinâmica de grupo e desenvolvimento de equipes nos anos 1980, campo então incipiente no Brasil, e passou a dar palestras corporativas. Tornou-se um dos primeiros palestrantes brasileiros a construir carreira nesse formato em escala nacional.',
      'A Carícia Essencial, de 1985, trata de afeto, vínculo e da necessidade humana de contato, e vendeu centenas de milhares de exemplares. Sem Medo de Vencer, de 1988, dirigido a quem enfrenta obstáculos profissionais e pessoais, foi um dos livros brasileiros mais vendidos de sua década.',
      'Publicou dezenas de títulos e manteve atuação como consultor de empresas e palestrante. Sua obra pertence ao gênero de desenvolvimento pessoal e é lida sobretudo fora do meio clínico e acadêmico; a distância entre esse gênero e a literatura científica em psiquiatria é objeto de discussão recorrente, no Brasil como em qualquer lugar.'
    ],
    contexto: 'Shinyashiki ocupa no Brasil o espaço que Napoleon Hill e Dale Carnegie ocuparam nos Estados Unidos: a tradução de temas psicológicos para linguagem prática, num país em que o acesso a atendimento em saúde mental sempre foi restrito e a demanda por orientação, ampla.',
    contribuicoes: ['Escreveu A Carícia Essencial e Sem Medo de Vencer, entre os livros brasileiros mais vendidos de sua época.', 'Foi um dos primeiros a construir carreira nacional como palestrante corporativo no Brasil.', 'Introduziu no país práticas de dinâmica de grupo aplicadas ao desenvolvimento de equipes.'],
    cronologia: [
      [1954, 'Nasce em São Paulo, em 5 de setembro.'],
      [1985, 'Publica A Carícia Essencial.'],
      [1988, 'Publica Sem Medo de Vencer.'],
      [1997, 'Publica Você, a Alma do Negócio.']
    ]
  }
};

Object.assign(PANORAMAS_F18, {
  'Martha Medeiros': {
    papel: 'Escritora e cronista brasileira (1961–)',
    resumo: 'Cronista de grande alcance no Brasil, é frequentemente confundida com a autora de um poema que não escreveu.',
    bio: [
      'Martha Medeiros nasceu em Porto Alegre em 20 de agosto de 1961. Formou-se em publicidade e trabalhou como redatora de agência por anos antes de se voltar à literatura. Publicou o primeiro livro de poemas em 1985.',
      'Tornou-se cronista de jornal e construiu uma obra extensa em torno de temas do cotidiano afetivo: relacionamentos, separações, envelhecimento, amizade, a vida urbana de classe média. Escreve em primeira pessoa, em textos curtos, e mantém colunas em veículos de grande circulação há décadas.',
      'Publicou romances, entre eles Divã, adaptado para o teatro e para o cinema, e Doidas e Santas, além de dezenas de coletâneas de crônicas. É uma das autoras brasileiras mais vendidas de seu gênero.',
      'Seu nome está associado a um caso notório de má atribuição. O poema A Morte Devagar, ou Morre Lentamente, circula há décadas atribuído a Pablo Neruda, sobretudo em redes sociais. O texto é dela, publicado como crônica em 2000 sob o título A Morte Devagar. A Fundação Pablo Neruda desmentiu publicamente a autoria do poeta chileno, e Martha Medeiros já esclareceu o caso diversas vezes — sem que a atribuição errada deixasse de circular.'
    ],
    contexto: 'Medeiros pertence à tradição brasileira da crônica de jornal, que vem de Rubem Braga e Nelson Rodrigues e que ocupa um lugar entre a literatura e a conversa. Seu caso de má atribuição é um dos exemplos mais didáticos de como a internet fabrica autoria sem qualquer verificação.',
    contribuicoes: ['Escreveu Divã, adaptado para teatro e cinema.', 'Construiu uma obra extensa de crônica sobre a vida afetiva contemporânea.', 'É uma das autoras brasileiras mais vendidas em seu gênero.', 'É a autora real de A Morte Devagar, texto amplamente atribuído por engano a Pablo Neruda.'],
    cronologia: [
      [1961, 'Nasce em Porto Alegre, em 20 de agosto.'],
      [1985, 'Publica seu primeiro livro de poemas.'],
      [2000, 'Publica a crônica A Morte Devagar.'],
      [2002, 'Publica Divã.']
    ],
    nota: 'O poema Morre Lentamente, amplamente atribuído a Pablo Neruda, é de autoria de Martha Medeiros. A Fundação Pablo Neruda já desmentiu publicamente a atribuição ao poeta chileno.'
  },

  'Oliver Wendell Holmes': {
    papel: 'Médico, escritor e poeta norte-americano (1809–1894)',
    resumo: 'Demonstrou que médicos transmitiam a febre puerperal e foi um dos escritores mais populares da Nova Inglaterra.',
    bio: [
      'Oliver Wendell Holmes nasceu em Cambridge, Massachusetts, em 29 de agosto de 1809, filho de um pastor. Estudou direito por um ano, desistiu e formou-se em medicina, com parte da formação em Paris, então o centro mundial da medicina clínica. Lecionou anatomia em Harvard por trinta e cinco anos e foi decano da faculdade de medicina.',
      'Em 1843, publicou um ensaio sobre o contágio da febre puerperal, demonstrando a partir de evidência estatística que a doença que matava mulheres após o parto era transmitida pelas mãos e instrumentos dos próprios médicos, e que a solução era lavar as mãos e trocar de roupa entre atendimentos. A tese foi ridicularizada por obstetras eminentes. Holmes a defendeu publicamente, e ela antecede em quatro anos o trabalho independente de Semmelweis em Viena e em décadas a aceitação da teoria dos germes.',
      'Como escritor, foi uma das figuras centrais da vida literária de Boston. Cunhou o apelido brâmanes de Boston para a elite intelectual da cidade, batizou a revista The Atlantic Monthly e escreveu para ela a série O Autocrata da Mesa do Café da Manhã, textos em forma de conversa de pensão que misturam humor, ciência e filosofia. Também cunhou a expressão anestesia, a pedido do dentista que fizera a primeira demonstração pública do éter.',
      'O poema Old Ironsides, escrito aos vinte e um anos, gerou comoção pública e salvou da demolição a fragata USS Constitution, que ainda existe. Seu filho homônimo tornou-se um dos mais influentes juízes da Suprema Corte americana. Morreu em Cambridge em 7 de outubro de 1894.'
    ],
    contexto: 'Holmes é um caso raro de figura simultaneamente central na medicina e na literatura de seu país. Sua defesa da lavagem das mãos, décadas antes de haver explicação teórica para ela, é um dos episódios exemplares de como a evidência estatística pode preceder e enfrentar o consenso profissional.',
    contribuicoes: ['Demonstrou em 1843 que a febre puerperal era transmitida pelos próprios médicos.', 'Cunhou a palavra anestesia e a expressão brâmanes de Boston.', 'Escreveu a série O Autocrata da Mesa do Café da Manhã.', 'Batizou a revista The Atlantic Monthly.', 'Seu poema Old Ironsides salvou da demolição a fragata USS Constitution.'],
    cronologia: [
      [1809, 'Nasce em Cambridge, Massachusetts, em 29 de agosto.'],
      [1830, 'Escreve Old Ironsides.'],
      [1843, 'Publica o ensaio sobre o contágio da febre puerperal.'],
      [1847, 'Torna-se professor e decano em Harvard.'],
      [1858, 'Publica O Autocrata da Mesa do Café da Manhã.'],
      [1894, 'Morre em Cambridge.']
    ]
  },

  'Ernest Renan': {
    papel: 'Historiador e filólogo francês (1823–1892)',
    resumo: 'Escreveu uma Vida de Jesus que causou escândalo e formulou a definição de nação como plebiscito diário.',
    bio: [
      'Joseph Ernest Renan nasceu em Tréguier, na Bretanha, em 27 de fevereiro de 1823, filho de um pescador que morreu quando ele tinha cinco anos. Foi educado em seminários católicos e destinava-se ao sacerdócio, mas o estudo de filologia hebraica e da crítica bíblica alemã destruiu sua fé nas Escrituras como texto revelado. Deixou o seminário em 1845, ruptura que descreveu como a mais dolorosa de sua vida.',
      'Tornou-se um dos maiores orientalistas de seu tempo, com trabalho sobre línguas semíticas, e conduziu missão arqueológica na Fenícia. Foi nomeado professor no Collège de France e suspenso quatro dias após a aula inaugural, em que chamou Jesus de homem incomparável — sem lhe atribuir divindade.',
      'Vida de Jesus, de 1863, trata os evangelhos como fontes históricas a serem analisadas como quaisquer outras, e apresenta Jesus como figura humana extraordinária num contexto galileu concreto. O escândalo foi imenso: o livro foi condenado pela Igreja, atacado em centenas de panfletos e vendeu centenas de milhares de exemplares.',
      'Em 1882 proferiu na Sorbonne a conferência O Que é uma Nação?, que continua sendo referência obrigatória. Renan recusa que a nação se defina por raça, língua, religião ou geografia, e propõe que ela repousa sobre um passado de sacrifícios compartilhados e sobre a vontade presente de continuar juntos — o que resumiu na fórmula do plebiscito de todos os dias. Seus escritos sobre raça e sobre povos semitas contêm formulações hoje reconhecidas como racistas e são objeto de crítica documentada. Morreu em Paris em 2 de outubro de 1892.'
    ],
    contexto: 'Renan escreve na França em que a crítica histórica alemã chegava aos estudos religiosos e o Estado se laicizava. Sua definição de nação foi formulada em resposta direta ao argumento alemão de que a Alsácia era alemã por língua e etnia, e continua a ser o principal contraponto às concepções étnicas de nacionalidade.',
    contribuicoes: ['Escreveu Vida de Jesus (1863), obra de enorme repercussão na crítica histórica religiosa.', 'Formulou em O Que é uma Nação? (1882) a definição cívica de nação como plebiscito diário.', 'Foi um dos principais filólogos e orientalistas do século XIX.', 'Escreveu a História das Origens do Cristianismo, em sete volumes.'],
    cronologia: [
      [1823, 'Nasce em Tréguier, em 27 de fevereiro.'],
      [1845, 'Abandona o seminário.'],
      [1862, 'É suspenso do Collège de France após a aula inaugural.'],
      [1863, 'Publica Vida de Jesus.'],
      [1882, 'Profere O Que é uma Nação? na Sorbonne.'],
      [1892, 'Morre em Paris.']
    ],
    nota: 'Escritos de Renan sobre raça e sobre povos semitas contêm formulações hoje reconhecidas como racistas e são objeto de crítica documentada.'
  },

  'Joseph Joubert': {
    papel: 'Moralista francês (1754–1824)',
    resumo: 'Escreveu por quarenta anos cadernos de pensamentos que nunca publicou, e que se tornaram um clássico póstumo.',
    bio: [
      'Joseph Joubert nasceu em Montignac, no Périgord, em 7 de maio de 1754, filho de um cirurgião. Estudou com padres, ensinou brevemente e foi a Paris, onde conviveu com Diderot e d\u2019Alembert. Era de saúde extremamente frágil e passava boa parte do tempo recolhido.',
      'Apoiou a Revolução em sua fase inicial e ocupou por dois anos um cargo local de juiz de paz, retirando-se depois da vida pública. Casou-se e viveu entre Villeneuve-sur-Yonne e Paris. Napoleão nomeou-o inspetor-geral da universidade.',
      'Manteve por mais de quarenta anos cadernos em que anotava pensamentos, observações e formulações breves sobre literatura, moral, religião, linguagem e amizade. Escrevia e reescrevia cada frase até chegar à forma mais concisa possível, e recusou publicá-las em vida — considerava que ainda não estavam prontas. Dizia-se incapaz de escrever um livro e capaz apenas de escrever frases.',
      'Foi amigo íntimo de Chateaubriand, que organizou e publicou em 1838, catorze anos após sua morte, uma primeira seleção dos cadernos. As edições posteriores, mais completas, tornaram Joubert um dos moralistas franceses mais admirados por escritores — Matthew Arnold escreveu que ele era o La Rochefoucauld do lado luminoso da natureza humana. Morreu em Paris em 4 de maio de 1824.'
    ],
    contexto: 'Joubert pertence à tradição francesa do moralista de forma breve, que vem de Montaigne, La Rochefoucauld e Pascal. Sua particularidade é o desinteresse absoluto pela publicação, o que dá aos cadernos uma liberdade que os textos escritos para leitores raramente têm.',
    contribuicoes: ['Deixou cadernos de pensamentos escritos ao longo de quarenta anos, publicados postumamente.', 'Sua obra tornou-se um clássico da tradição moralista francesa.', 'Foi admirado por Chateaubriand, Sainte-Beuve e Matthew Arnold como escritor de máximas.'],
    cronologia: [
      [1754, 'Nasce em Montignac, em 7 de maio.'],
      ['c. 1780', 'Inicia os cadernos de pensamentos.'],
      [1809, 'É nomeado inspetor-geral da universidade.'],
      [1824, 'Morre em Paris.'],
      [1838, 'Chateaubriand publica a primeira seleção dos Pensamentos.']
    ]
  },

  'Santo Isidoro de Sevilha': {
    papel: 'Bispo e erudito hispano-romano (c. 560–636)',
    resumo: 'Compilou nas Etimologias todo o saber disponível em seu tempo, salvando fragmentos da Antiguidade para a Idade Média.',
    bio: [
      'Isidoro nasceu em Cartagena por volta de 560, em família hispano-romana que fugiu para Sevilha. Foi educado pelo irmão mais velho Leandro, bispo de Sevilha, num regime de rigor extremo. Três de seus irmãos também se tornaram santos, caso sem paralelo.',
      'Sucedeu Leandro como bispo de Sevilha por volta de 600 e permaneceu no cargo por mais de três décadas. Atuou na consolidação da conversão dos visigodos do arianismo ao catolicismo e presidiu concílios que estabeleceram a organização eclesiástica e educacional da Hispânia, incluindo a determinação de que cada diocese mantivesse uma escola.',
      'As Etimologias, ou Origens, é sua obra maior e uma das mais copiadas da Idade Média — sobreviveram mais de mil manuscritos. Em vinte livros, Isidoro reúne o que conseguiu recolher sobre gramática, retórica, medicina, direito, cronologia, teologia, zoologia, agricultura, guerra, navios, edifícios e alimentos, organizando o conhecimento pela origem das palavras. Muito do que preservou de autores antigos hoje perdidos existe apenas em suas citações.',
      'A obra tem erros e credulidades evidentes, resultado de compilar fontes sem meios de verificá-las. Sua importância não está no rigor, e sim na função: numa Europa que perdia o acesso à cultura clássica, as Etimologias funcionaram por séculos como a enciclopédia disponível. Morreu em Sevilha em 4 de abril de 636. Foi proclamado doutor da Igreja e é padroeiro da internet e dos usuários de computador.'
    ],
    contexto: 'Isidoro escreve na Hispânia visigótica, entre o colapso do Império Romano do Ocidente e a formação da Europa medieval. Seu trabalho é de salvamento: recolher e transmitir o que ainda podia ser recolhido, num momento em que bibliotecas desapareciam e o latim clássico se perdia.',
    contribuicoes: ['Escreveu as Etimologias, principal enciclopédia da Idade Média europeia.', 'Preservou fragmentos de autores antigos cujas obras se perderam.', 'Presidiu concílios que organizaram a Igreja e a educação na Hispânia visigótica.', 'Determinou a criação de escolas em cada diocese.', 'Foi proclamado doutor da Igreja e é padroeiro da internet.'],
    cronologia: [
      ['c. 560', 'Nasce em Cartagena.'],
      ['c. 600', 'Torna-se bispo de Sevilha.'],
      [633, 'Preside o Quarto Concílio de Toledo.'],
      ['c. 630', 'Conclui as Etimologias.'],
      [636, 'Morre em Sevilha, em 4 de abril.']
    ]
  },

  'François Mauriac': {
    papel: 'Escritor francês (1885–1970)',
    resumo: 'Nobel de Literatura, escreveu romances sobre a burguesia católica provinciana e denunciou a tortura na Argélia.',
    bio: [
      'François Charles Mauriac nasceu em Bordeaux em 11 de outubro de 1885, em família burguesa e católica de proprietários de vinhedos. O pai morreu quando ele tinha vinte meses; foi criado pela mãe num ambiente de devoção rígida que se tornaria o material central de sua obra. Estudou letras e mudou-se para Paris.',
      'Seus romances se passam quase sempre no sudoeste francês, entre famílias católicas provincianas asfixiadas por dinheiro, herança, hipocrisia e desejo reprimido. Thérèse Desqueyroux, de 1927, acompanha uma mulher que tenta envenenar o marido e é protegida pela família não por afeto, mas para evitar o escândalo. O Nó de Víboras, de 1932, é a confissão de um velho avarento que odeia os herdeiros que esperam sua morte.',
      'A tensão da obra é explícita: Mauriac era católico praticante e escrevia sobre o pecado com uma atenção que a Igreja considerava complacente. Foi acusado dos dois lados, de moralismo e de imoralidade.',
      'Politicamente, foi das poucas vozes católicas francesas a denunciar o apoio ao franquismo durante a Guerra Civil Espanhola. Integrou a resistência intelectual durante a ocupação, escrevendo clandestinamente. Recebeu o Nobel de Literatura em 1952. Nos anos seguintes, usou sua coluna semanal para denunciar a tortura praticada por forças francesas na guerra da Argélia e defender a independência do país e do Marrocos, posições que lhe custaram ameaças. Morreu em Paris em 1º de setembro de 1970.'
    ],
    contexto: 'Mauriac ocupa uma posição incomum: romancista católico numa literatura francesa majoritariamente laica ou anticlerical, e crítico do catolicismo conservador de dentro dele. Sua atuação pública contra a tortura na Argélia, num momento em que o silêncio era a regra, é parte central de sua importância.',
    contribuicoes: ['Escreveu Thérèse Desqueyroux (1927) e O Nó de Víboras (1932).', 'Recebeu o Prêmio Nobel de Literatura em 1952.', 'Denunciou publicamente a tortura praticada por forças francesas na guerra da Argélia.', 'Participou da resistência intelectual durante a ocupação alemã da França.'],
    cronologia: [
      [1885, 'Nasce em Bordeaux, em 11 de outubro.'],
      [1927, 'Publica Thérèse Desqueyroux.'],
      [1932, 'Publica O Nó de Víboras.'],
      [1933, 'É eleito para a Academia Francesa.'],
      [1952, 'Recebe o Nobel de Literatura.'],
      [1970, 'Morre em Paris.']
    ]
  },

  'Théophile Gautier': {
    papel: 'Escritor e crítico francês (1811–1872)',
    resumo: 'Defendeu a arte pela arte e foi a ponte entre o romantismo e o parnasianismo.',
    bio: [
      'Pierre Jules Théophile Gautier nasceu em Tarbes, no sul da França, em 30 de agosto de 1811. Estudou pintura antes de se voltar à literatura, formação que explica a atenção visual que caracteriza sua escrita. Foi colega de Gérard de Nerval no liceu.',
      'Tornou-se célebre aos dezenove anos na estreia de Hernani, de Victor Hugo, em 1830, quando compareceu com um colete vermelho vivo para provocar os defensores do teatro clássico — a batalha entre românticos e clássicos naquela noite entrou para a história literária, e o colete de Gautier virou seu emblema.',
      'O prefácio de Mademoiselle de Maupin, de 1835, é seu texto teórico decisivo. Gautier ataca a exigência de que a arte sirva à moral, à política ou à utilidade, e afirma que nada é verdadeiramente belo senão o que não serve para nada. É a formulação fundadora da arte pela arte, que atravessaria o parnasianismo, o esteticismo inglês de Wilde e boa parte do modernismo.',
      'Sustentou-se a vida inteira como jornalista e crítico de arte, teatro e dança, escrevendo por décadas em ritmo industrial — situação que ele lamentava, por considerar que o jornalismo consumia o tempo da poesia. Esmaltes e Camafeus, de 1852, aplica seu ideal de perfeição formal e foi tomado como modelo pelos parnasianos. Baudelaire dedicou-lhe As Flores do Mal, chamando-o de mago impecável das letras francesas. Morreu em Neuilly-sur-Seine em 23 de outubro de 1872.'
    ],
    contexto: 'Gautier é a articulação entre duas épocas: começa como romântico militante e formula o princípio que fundaria a reação ao romantismo. Sua defesa da autonomia da arte foi a resposta a um século que exigia dela função social, e permanece um dos polos permanentes do debate estético.',
    contribuicoes: ['Formulou no prefácio de Mademoiselle de Maupin (1835) o princípio da arte pela arte.', 'Escreveu Esmaltes e Camafeus, modelo formal para os parnasianos.', 'Foi um dos críticos de arte, teatro e dança mais influentes da França do século XIX.', 'Baudelaire dedicou-lhe As Flores do Mal.'],
    cronologia: [
      [1811, 'Nasce em Tarbes, em 30 de agosto.'],
      [1830, 'Participa da batalha de Hernani com o célebre colete vermelho.'],
      [1835, 'Publica Mademoiselle de Maupin, com o prefácio sobre a arte pela arte.'],
      [1852, 'Publica Esmaltes e Camafeus.'],
      [1857, 'Baudelaire lhe dedica As Flores do Mal.'],
      [1872, 'Morre em Neuilly-sur-Seine.']
    ]
  },

  'Samuel Butler': {
    papel: 'Escritor britânico (1835–1902)',
    resumo: 'Escreveu a sátira Erewhon e um romance póstumo que atacou a família vitoriana com ferocidade inédita.',
    bio: [
      'Samuel Butler nasceu em Langar, Nottinghamshire, em 4 de dezembro de 1835, filho e neto de clérigos — o avô fora bispo. Formou-se em Cambridge e destinava-se à ordenação, mas rompeu com a fé e com o pai, que o considerou um fracasso. Emigrou para a Nova Zelândia em 1859 e criou ovelhas por cinco anos, dobrando o capital que levara.',
      'Voltou à Inglaterra com renda suficiente para viver e dedicou-se a escrever, pintar e polemizar. Erewhon, de 1872 — anagrama de nowhere —, descreve um país imaginário em que a doença é crime e o crime é doença, as máquinas foram destruídas por temor de que evoluíssem por seleção natural e se tornassem dominantes, e as universidades ensinam deliberadamente o inútil. O capítulo sobre as máquinas é apontado como uma das primeiras formulações da ideia de inteligência mecânica evolutiva.',
      'Envolveu-se em polêmica longa e amarga com o darwinismo. Não negava a evolução, mas rejeitava que a seleção natural bastasse para explicá-la, defendendo uma forma de memória hereditária. Acusou Darwin publicamente de má-fé, e o episódio o isolou do meio científico.',
      'O Caminho de Toda Carne, escrito ao longo de décadas e publicado postumamente em 1903, acompanha quatro gerações de uma família de clérigos e é uma demolição da educação religiosa, da autoridade paterna e da hipocrisia vitoriana. Butler proibiu sua publicação em vida para não ferir pessoas vivas. George Bernard Shaw o considerava um dos maiores escritores ingleses do século XIX. Morreu em Londres em 18 de junho de 1902.'
    ],
    contexto: 'Butler ataca a era vitoriana de dentro de suas próprias instituições, com a autoridade de quem foi criado nelas. Sua sátira antecipa temas que só se tornariam centrais no século XX, da crítica à família burguesa à possibilidade de máquinas evoluírem.',
    contribuicoes: ['Escreveu Erewhon (1872), sátira utópica com uma das primeiras formulações sobre evolução das máquinas.', 'Escreveu O Caminho de Toda Carne, publicado postumamente e considerado marco da crítica à família vitoriana.', 'Traduziu a Ilíada e a Odisseia em prosa.', 'Formulou objeções influentes à suficiência da seleção natural como mecanismo evolutivo.'],
    cronologia: [
      [1835, 'Nasce em Langar, em 4 de dezembro.'],
      [1859, 'Emigra para a Nova Zelândia.'],
      [1872, 'Publica Erewhon.'],
      [1903, 'O Caminho de Toda Carne é publicado postumamente.'],
      [1902, 'Morre em Londres.']
    ]
  },

  'Napoleão III': {
    papel: 'Político francês, presidente e depois imperador (1808–1873)',
    resumo: 'Primeiro presidente eleito da França, deu um golpe para se tornar imperador e reconstruiu Paris.',
    bio: [
      'Charles Louis Napoléon Bonaparte nasceu em Paris em 20 de abril de 1808, sobrinho de Napoleão Bonaparte. Cresceu no exílio após a queda do Império, na Suíça e na Alemanha, e envolveu-se com movimentos revolucionários italianos. Tentou dois golpes contra a monarquia francesa, em 1836 e 1840, ambos fracassados e quase ridículos; foi condenado à prisão perpétua e fugiu do forte de Ham disfarçado de pedreiro, após seis anos.',
      'Com a revolução de 1848 e a instituição do sufrágio universal masculino, foi eleito presidente da República com ampla maioria — o primeiro presidente eleito da história francesa. Impedido pela Constituição de disputar a reeleição, deu um golpe de Estado em 2 de dezembro de 1851, dissolveu a Assembleia e proclamou-se imperador um ano depois.',
      'Seu governo transformou materialmente a França. Encarregou o barão Haussmann da reconstrução de Paris, com a abertura dos bulevares, redes de esgoto e água, parques e a demolição de bairros medievais inteiros — obra que definiu a cidade como ela é hoje e que também expulsou a população pobre do centro. Expandiu a ferrovia, o crédito bancário e o comércio livre, e reformou a legislação trabalhista, legalizando greves.',
      'Em política externa, acumulou aventuras custosas: a guerra da Crimeia, a intervenção na Itália, a desastrosa tentativa de instalar um império no México e finalmente a guerra franco-prussiana de 1870, provocada por Bismarck, em que foi capturado na batalha de Sedan. O Império caiu imediatamente. Morreu no exílio em Chislehurst, Inglaterra, em 9 de janeiro de 1873. Marx escreveu sobre seu golpe uma das análises políticas mais citadas do século XIX.'
    ],
    contexto: 'Napoleão III é o caso clássico do governante que combina modernização material acelerada com supressão das liberdades políticas. Sua trajetória — eleito por sufrágio universal, tornou-se autocrata pelo voto e pelo golpe — foi objeto de análise permanente na teoria política, sobretudo por Marx em O Dezoito de Brumário.',
    contribuicoes: ['Foi o primeiro presidente eleito da França e depois seu último monarca.', 'Encarregou Haussmann da reconstrução de Paris, que definiu a forma atual da cidade.', 'Promoveu a expansão ferroviária, bancária e comercial da França.', 'Legalizou o direito de greve em 1864.'],
    cronologia: [
      [1808, 'Nasce em Paris, em 20 de abril.'],
      [1846, 'Foge da prisão de Ham disfarçado de pedreiro.'],
      [1848, 'É eleito presidente da República.'],
      [1851, 'Dá o golpe de Estado em 2 de dezembro.'],
      [1853, 'Inicia a reconstrução de Paris sob Haussmann.'],
      [1870, 'É capturado em Sedan; o Império cai.'],
      [1873, 'Morre no exílio, na Inglaterra.']
    ]
  },

  'Robert Ingersoll': {
    papel: 'Advogado e orador norte-americano (1833–1899)',
    resumo: 'Foi o orador mais popular dos Estados Unidos no século XIX defendendo o agnosticismo em praça pública.',
    bio: [
      'Robert Green Ingersoll nasceu em Dresden, Nova York, em 11 de agosto de 1833, filho de um pastor abolicionista cujas posições o faziam ser expulso de congregações — infância que Ingersoll citaria como origem tanto de seu antidogmatismo quanto de sua coragem pública. Formou-se advogado por conta própria e comandou um regimento de cavalaria na Guerra Civil, sendo capturado pelos confederados.',
      'Foi procurador-geral do Illinois e advogado de enorme sucesso. Sua carreira política, no entanto, foi impossível: recusou-se a esconder suas posições sobre religião, e nenhum partido podia sustentar um candidato declaradamente agnóstico. Era chamado de o Grande Agnóstico.',
      'Tornou-se o palestrante mais bem pago e mais popular do país numa época sem rádio nem cinema, quando conferências eram a principal forma de entretenimento intelectual de massa. Falava por três horas seguidas, sem notas, em teatros lotados de pessoas que pagavam ingresso para ouvi-lo criticar a Bíblia, defender a razão, a ciência e a separação entre Igreja e Estado.',
      'Defendeu também o sufrágio feminino, o controle de natalidade, a abolição, o divórcio e o tratamento humano de criminosos e doentes mentais. Foi um dos primeiros a divulgar a obra de Walt Whitman e discursou em seu funeral. Sustentava que a felicidade é o único bem, que o tempo de ser feliz é agora e o lugar é aqui. Morreu em Dobbs Ferry em 21 de julho de 1899.'
    ],
    contexto: 'Ingersoll operou num período de intenso fervor religioso americano, e sua popularidade demonstra que havia público considerável para o ceticismo mesmo então. Sua figura foi amplamente esquecida no século XX e recuperada em décadas recentes pelo debate sobre laicidade.',
    contribuicoes: ['Foi o principal orador público do agnosticismo nos Estados Unidos no século XIX.', 'Defendeu a separação entre Igreja e Estado, o sufrágio feminino e o controle de natalidade.', 'Foi um dos primeiros divulgadores da obra de Walt Whitman.', 'Suas conferências reuniam plateias pagantes em todo o país, sem rádio nem imprensa de massa.'],
    cronologia: [
      [1833, 'Nasce em Dresden, Nova York, em 11 de agosto.'],
      [1862, 'Comanda um regimento de cavalaria na Guerra Civil.'],
      [1867, 'Torna-se procurador-geral do Illinois.'],
      [1876, 'Profere o discurso que o projeta nacionalmente na convenção republicana.'],
      [1899, 'Morre em Dobbs Ferry.']
    ]
  },

  'Henry Ward Beecher': {
    papel: 'Pastor e abolicionista norte-americano (1813–1887)',
    resumo: 'O pregador mais influente dos Estados Unidos no século XIX, comprou liberdade de escravizados no púlpito.',
    bio: [
      'Henry Ward Beecher nasceu em Litchfield, Connecticut, em 24 de junho de 1813, filho do pregador calvinista Lyman Beecher e irmão de Harriet Beecher Stowe. Gaguejava na infância e teve desempenho escolar fraco. Formou-se em teologia e assumiu em 1847 a Igreja de Plymouth, no Brooklyn, onde permaneceu quarenta anos.',
      'Rompeu com o calvinismo severo do pai e pregou um cristianismo centrado no amor de Deus e não no medo do inferno, com linguagem coloquial, humor e referências à vida cotidiana. Sua igreja lotava com milhares de pessoas, e barcas de Manhattan ao Brooklyn ficaram conhecidas como as balsas de Beecher.',
      'Foi militante abolicionista com métodos de forte impacto público: realizou no púlpito leilões simulados em que a congregação levantava dinheiro para comprar a liberdade de pessoas escravizadas trazidas à igreja, e enviou rifles a abolicionistas no Kansas em caixotes rotulados como Bíblias — as armas ficaram conhecidas como Bíblias de Beecher. Defendeu também o sufrágio feminino, a imigração e a teoria da evolução.',
      'Em 1875 foi processado por adultério pelo marido de uma paroquiana, num julgamento civil que dominou a imprensa americana por meses e terminou sem veredito conclusivo. O escândalo foi um dos maiores do século e marcou permanentemente sua reputação. Morreu no Brooklyn em 8 de março de 1887.'
    ],
    contexto: 'Beecher representa a transformação do protestantismo americano no século XIX, do calvinismo do pecado e da danação para uma religiosidade de amor, otimismo e engajamento social. Sua enorme celebridade e o escândalo que a acompanhou fazem dele também um dos primeiros casos de figura pública consumida pela imprensa de massa.',
    contribuicoes: ['Foi o pregador mais influente dos Estados Unidos no século XIX.', 'Militou pelo abolicionismo, comprando publicamente a liberdade de pessoas escravizadas.', 'Enviou armas a abolicionistas no Kansas, nos caixotes que ficaram conhecidos como Bíblias de Beecher.', 'Defendeu o sufrágio feminino e a aceitação da teoria da evolução pelas igrejas.'],
    cronologia: [
      [1813, 'Nasce em Litchfield, Connecticut, em 24 de junho.'],
      [1847, 'Assume a Igreja de Plymouth, no Brooklyn.'],
      [1856, 'Envia rifles a abolicionistas no Kansas.'],
      [1875, 'É processado por adultério em julgamento de repercussão nacional.'],
      [1887, 'Morre no Brooklyn.']
    ]
  },

  'Malcolm Forbes': {
    papel: 'Editor e empresário norte-americano (1919–1990)',
    resumo: 'Dirigiu a revista Forbes e construiu uma persona pública de ostentação deliberada.',
    bio: [
      'Malcolm Stevenson Forbes nasceu em Nova York em 19 de agosto de 1919, filho de B. C. Forbes, jornalista escocês que fundara a revista Forbes em 1917. Formou-se em Princeton e serviu na Segunda Guerra Mundial como sargento de metralhadora, sendo gravemente ferido na Europa e condecorado.',
      'Tentou a política, elegeu-se senador estadual em Nova Jersey e perdeu a disputa pelo governo do estado em 1957, encerrando ali a carreira eleitoral. Assumiu o comando da revista em 1964, após a morte do irmão mais velho.',
      'Sob sua direção, a Forbes cresceu e consolidou seu formato mais conhecido: as listas. A lista dos quatrocentos americanos mais ricos, criada em 1982, transformou a fortuna pessoal em ranking público e é hoje um instrumento padrão de referência sobre riqueza no mundo inteiro.',
      'Construiu uma persona pública de ostentação assumida: iate, castelo na França, coleções de motocicletas Harley-Davidson, de ovos Fabergé e de soldadinhos de chumbo, balonismo — bateu recordes de travessia — e festas de proporções célebres, entre elas o aniversário de setenta anos no Marrocos, com centenas de convidados transportados em aviões fretados. Cunhou a frase sobre quem morre com mais brinquedos vencer, que ele mesmo usava como divisa irônica. Morreu em Far Hills, Nova Jersey, em 24 de fevereiro de 1990.'
    ],
    contexto: 'Forbes fez da própria ostentação uma extensão editorial da revista que dirigia, num período em que a imprensa de negócios americana passava a tratar o empresário como celebridade. A lista dos mais ricos é sua criação mais duradoura e mudou a forma como a riqueza é discutida publicamente.',
    contribuicoes: ['Dirigiu a revista Forbes por mais de duas décadas, ampliando seu alcance.', 'Criou em 1982 a lista dos quatrocentos americanos mais ricos.', 'Consolidou o formato de ranking como instrumento editorial na imprensa de negócios.', 'Bateu recordes de travessia em balão.'],
    cronologia: [
      [1919, 'Nasce em Nova York, em 19 de agosto.'],
      [1944, 'É ferido em combate na Europa e condecorado.'],
      [1957, 'Perde a disputa pelo governo de Nova Jersey.'],
      [1964, 'Assume o comando da revista Forbes.'],
      [1982, 'Cria a lista dos quatrocentos mais ricos.'],
      [1990, 'Morre em Far Hills, Nova Jersey.']
    ]
  },

  'Coelho Neto': {
    papel: 'Escritor e político brasileiro (1864–1934)',
    resumo: 'Um dos autores mais lidos do Brasil na virada do século XX, foi depois duramente atacado pelos modernistas.',
    bio: [
      'Henrique Maximiano Coelho Neto nasceu em Caxias, no Maranhão, em 21 de fevereiro de 1864, filho de pai português e mãe indígena. Mudou-se para o Rio de Janeiro na infância. Estudou medicina e direito sem concluir nenhum dos cursos, e envolveu-se com a campanha abolicionista ao lado de José do Patrocínio e com o movimento republicano.',
      'Foi jornalista, professor de literatura e história do teatro, deputado federal por dois estados e diretor da Escola Dramática. Presidiu a Academia Brasileira de Letras, da qual foi um dos fundadores, e chegou a ser aclamado Príncipe dos Prosadores Brasileiros numa votação promovida por revista em 1928.',
      'Escreveu mais de cem livros — romances, contos, crônicas, peças, obras infantis — em prosa de vocabulário extremamente rico e construção ornamental, característica da estética que dominava a literatura brasileira antes de 1922. A Conquista, Turbilhão, Rei Negro e Sertão estão entre seus títulos mais conhecidos; Rei Negro é uma das primeiras tentativas brasileiras de romance centrado na experiência de pessoas escravizadas.',
      'Foi o alvo preferencial dos modernistas de 1922, que o tomaram como símbolo do estilo rebuscado e artificial que pretendiam derrubar. O ataque foi tão eficaz que sua obra praticamente desapareceu do cânone escolar. A crítica recente tem revisto essa condenação em bloco, sem que sua leitura tenha voltado a ser corrente. Morreu no Rio de Janeiro em 28 de novembro de 1934.'
    ],
    contexto: 'Coelho Neto é o caso mais nítido de um autor cuja reputação foi destruída por uma mudança de estética. Extremamente popular e influente em vida, tornou-se o contraexemplo pelo qual o modernismo brasileiro se definiu, e sua obra é hoje mais citada como referência histórica do que lida.',
    contribuicoes: ['Escreveu mais de cem livros entre romances, contos, crônicas e peças.', 'Foi um dos fundadores da Academia Brasileira de Letras e seu presidente.', 'Escreveu Rei Negro, uma das primeiras tentativas brasileiras de romance centrado em personagens escravizados.', 'Participou da campanha abolicionista e do movimento republicano.'],
    cronologia: [
      [1864, 'Nasce em Caxias, Maranhão, em 21 de fevereiro.'],
      [1897, 'Participa da fundação da Academia Brasileira de Letras.'],
      [1899, 'Publica A Capital Federal.'],
      [1914, 'Publica Rei Negro.'],
      [1928, 'É aclamado Príncipe dos Prosadores Brasileiros.'],
      [1934, 'Morre no Rio de Janeiro.']
    ]
  },

  'James Dean': {
    papel: 'Ator norte-americano (1931–1955)',
    resumo: 'Fez três filmes e morreu aos 24 anos, tornando-se o símbolo permanente da inquietação juvenil.',
    bio: [
      'James Byron Dean nasceu em Marion, Indiana, em 8 de fevereiro de 1931. A mãe morreu de câncer quando ele tinha nove anos, e o pai o enviou para ser criado por tios numa fazenda no interior do estado. A perda e o abandono são citados por praticamente todos os seus biógrafos como matéria da intensidade que ele levava à tela.',
      'Mudou-se para a Califórnia, abandonou o curso de direito para estudar teatro e foi a Nova York, onde entrou no Actors Studio de Lee Strasberg — reduto do método que exigia do intérprete o uso da própria experiência emocional. Trabalhou em televisão e teatro antes do cinema.',
      'Fez apenas três longas-metragens como protagonista. Vidas Amargas, dirigido por Elia Kazan em 1955, lhe rendeu indicação póstuma ao Oscar. Juventude Transviada, do mesmo ano, deu forma a uma figura então nova: o adolescente de classe média em conflito, sem causa articulada, num país que acabara de inventar a adolescência como categoria social e comercial. Assim Caminha a Humanidade, de 1956, foi concluído após sua morte.',
      'Morreu em 30 de setembro de 1955, aos vinte e quatro anos, na colisão de seu Porsche numa estrada da Califórnia, quando ia disputar uma corrida. Recebeu duas indicações póstumas ao Oscar, caso único na história. Sua imagem tornou-se um dos ícones visuais mais reproduzidos do século XX, muito além de qualquer relação com os filmes.'
    ],
    contexto: 'Dean apareceu exatamente no momento em que o mercado americano descobriu o adolescente como público e como identidade. Sua morte precoce fixou a imagem antes que ela pudesse envelhecer, e é por isso que ele permanece o símbolo de uma condição — a inquietação juvenil — mais do que um ator lembrado por seu trabalho.',
    contribuicoes: ['Protagonizou Vidas Amargas, Juventude Transviada e Assim Caminha a Humanidade.', 'Recebeu duas indicações póstumas ao Oscar de melhor ator, caso único na história.', 'Deu forma cinematográfica à figura do adolescente em conflito, então recém-surgida como categoria social.'],
    cronologia: [
      [1931, 'Nasce em Marion, Indiana, em 8 de fevereiro.'],
      [1940, 'Perde a mãe e é enviado para ser criado por tios.'],
      [1952, 'Entra no Actors Studio, em Nova York.'],
      [1955, 'Estreiam Vidas Amargas e Juventude Transviada; morre em 30 de setembro.'],
      [1956, 'Assim Caminha a Humanidade é lançado postumamente.']
    ]
  },

  'Lady Gaga': {
    papel: 'Cantora, compositora e atriz norte-americana (1986–)',
    resumo: 'Transformou a apresentação pop em performance conceitual e tornou-se uma das artistas mais premiadas de sua geração.',
    bio: [
      'Stefani Joanne Angelina Germanotta nasceu em Nova York em 28 de março de 1986, em família ítalo-americana. Começou a tocar piano aos quatro anos, estudou em escola católica no Upper East Side e entrou aos dezessete na escola de artes da Universidade de Nova York, que abandonou para tentar carreira musical. Tocou em bares do Lower East Side e trabalhou como compositora para outros artistas.',
      'The Fame, de 2008, e o EP The Fame Monster projetaram-na mundialmente com Just Dance, Poker Face e Bad Romance. Sua marca inicial foi o excesso deliberado na apresentação visual, com figurinos que geravam discussão pública — o vestido feito de carne crua no prêmio da MTV em 2010 foi apresentado por ela como protesto contra a exclusão de pessoas LGBT das forças armadas americanas.',
      'Tornou-se uma das vozes públicas mais consistentes na defesa dos direitos LGBT, com atuação direta na campanha pela revogação da política que proibia militares assumidamente homossexuais. Revelou publicamente ter sido estuprada aos dezenove anos, e passou a falar sobre transtorno de estresse pós-traumático e sobre fibromialgia, doença crônica que a obrigou a cancelar turnês.',
      'Diversificou radicalmente: gravou um álbum de standards de jazz com Tony Bennett, então com quase noventa anos, e ganhou Grammy por ele. Protagonizou Nasce uma Estrela, com indicação ao Oscar de melhor atriz, e recebeu a estatueta de melhor canção original por Shallow. Criou com a mãe a Born This Way Foundation, voltada à saúde mental de jovens.'
    ],
    contexto: 'Lady Gaga surgiu num momento em que a música pop se tornava indissociável da imagem e das redes sociais, e usou isso deliberadamente: o figurino como declaração, a persona como obra. Sua trajetória posterior — jazz, cinema, ativismo em saúde mental — desmontou a própria persona inicial e é parte do que a distingue.',
    contribuicoes: [
      'Gravou The Fame, Born This Way, Joanne e Chromatica, entre outros álbuns.',
      'Recebeu o Oscar de melhor canção original por Shallow, de Nasce uma Estrela.',
      'Gravou com Tony Bennett álbuns de standards de jazz premiados com Grammy.',
      'Atuou publicamente na campanha pelos direitos de militares LGBT nos Estados Unidos.',
      'Criou a Born This Way Foundation, dedicada à saúde mental de jovens.'
    ],
    cronologia: [
      [1986, 'Nasce em Nova York, em 28 de março.'],
      [2008, 'Lança The Fame.'],
      [2011, 'Lança Born This Way e cria a fundação de mesmo nome.'],
      [2014, 'Grava Cheek to Cheek com Tony Bennett.'],
      [2018, 'Protagoniza Nasce uma Estrela.'],
      [2019, 'Recebe o Oscar por Shallow.']
    ]
  },

  'Clóvis de Barros Filho': {
    papel: 'Filósofo e professor brasileiro (1966–)',
    resumo: 'Divulgador de ética e filosofia com forte presença em palestras corporativas e vídeos no Brasil.',
    bio: [
      'Clóvis de Barros Filho nasceu em São Paulo em 1966. Formou-se em direito e em jornalismo pela Universidade de São Paulo, doutorou-se em ciências da comunicação e fez pós-doutorado em sociologia na França, na Universidade de Paris V, com pesquisa influenciada por Pierre Bourdieu.',
      'Foi professor da Escola de Comunicações e Artes da Universidade de São Paulo por mais de duas décadas, com trabalho acadêmico sobre ética, comunicação e sociologia da mídia. Deixou a instituição em 2016.',
      'Tornou-se figura pública por meio de palestras corporativas, cursos livres e vídeos que circulam amplamente, tratando de ética, felicidade, virtude e tomada de decisão a partir de autores clássicos — sobretudo Aristóteles, os estoicos, Espinosa e Bourdieu — em linguagem acessível.',
      'Publicou Ética e Vida Feliz, A Vida Que Vale a Pena Ser Vivida, Felicidade ou Morte e outros títulos, além de obras acadêmicas sobre ética na comunicação. Como ocorre com divulgadores em geral, sua produção é lida sobretudo fora do meio acadêmico, e a tensão entre alcance e profundidade é discutida em relação a ela.'
    ],
    contexto: 'Barros Filho integra a geração de acadêmicos brasileiros que migrou para a comunicação de massa e para o mercado de palestras a partir dos anos 2010, num período em que empresas e público geral passaram a demandar conteúdo sobre ética e propósito.',
    contribuicoes: ['Tornou-se um dos principais divulgadores de filosofia e ética no Brasil.', 'Escreveu Ética e Vida Feliz e A Vida Que Vale a Pena Ser Vivida.', 'Produziu obra acadêmica sobre ética na comunicação e sociologia da mídia.', 'Foi professor da Escola de Comunicações e Artes da Universidade de São Paulo.'],
    cronologia: [
      [1966, 'Nasce em São Paulo.'],
      [1996, 'Doutora-se em ciências da comunicação pela USP.'],
      [2007, 'Publica Ética e Vida Feliz.'],
      [2016, 'Deixa a Universidade de São Paulo.']
    ]
  },

  'Viviane Mosé': {
    papel: 'Filósofa, poeta e psicóloga brasileira (1964–)',
    resumo: 'Especialista em Nietzsche, atua na divulgação filosófica e na formulação de políticas públicas de educação e saúde mental.',
    bio: [
      'Viviane Mosé nasceu em Vitória, Espírito Santo, em 1964. Formou-se em psicologia e doutorou-se em filosofia pela Universidade Federal do Rio de Janeiro, com pesquisa sobre Nietzsche — autor que permanece o centro de sua obra.',
      'Trabalhou como psicóloga em serviços públicos de saúde mental e participou da formulação de políticas nessa área e em educação, atuando junto a secretarias e ministérios. Sua atuação combina a filosofia acadêmica com aplicação institucional concreta, o que a distingue de boa parte dos divulgadores.',
      'Nietzsche e a Grande Política da Linguagem, de 2005, é sua obra acadêmica principal, sobre a crítica nietzschiana à linguagem e à gramática como estruturas que condicionam o pensamento. Publicou também O Homem que Sabe, sobre educação e trabalho, e A Escola e os Desafios Contemporâneos.',
      'Escreve poesia — Toda Palavra e Pensamento é Céu — e teve presença regular em televisão, em programas de divulgação cultural, além de palestras e vídeos de amplo alcance. Sua atuação atravessa filosofia, poesia, clínica e política pública sem se fixar em nenhum desses campos exclusivamente.'
    ],
    contexto: 'Mosé ocupa uma posição incomum: pesquisadora de Nietzsche com atuação prática em políticas públicas de saúde mental e educação. Isso a coloca entre a divulgação filosófica e a intervenção institucional, campos que raramente se comunicam no Brasil.',
    contribuicoes: ['Escreveu Nietzsche e a Grande Política da Linguagem, obra de referência sobre o autor no Brasil.', 'Participou da formulação de políticas públicas de educação e saúde mental.', 'Escreveu O Homem que Sabe e A Escola e os Desafios Contemporâneos.', 'Publicou obra poética, entre ela Toda Palavra e Pensamento é Céu.'],
    cronologia: [
      [1964, 'Nasce em Vitória, Espírito Santo.'],
      [2005, 'Publica Nietzsche e a Grande Política da Linguagem.'],
      [2011, 'Publica O Homem que Sabe.'],
      [2013, 'Publica A Escola e os Desafios Contemporâneos.']
    ]
  },

  'Haemin Sunim': {
    papel: 'Monge budista sul-coreano (1973–)',
    resumo: 'Escreveu sobre lentidão e atenção a partir de mensagens curtas em redes sociais, com milhões de leitores.',
    bio: [
      'Haemin Sunim nasceu em Busan, na Coreia do Sul, em 1973. Foi para os Estados Unidos estudar cinema em Berkeley e mudou de rumo, formando-se em estudos religiosos, com mestrado em Harvard e doutorado em Princeton. Foi ordenado monge na tradição zen coreana, com formação monástica na Coreia.',
      'Lecionou religiões comparadas numa universidade americana por vários anos, situação incomum de monge budista atuando como professor no Ocidente.',
      'Começou a escrever mensagens curtas em coreano nas redes sociais, sobre atenção, ansiedade, relacionamentos e a pressão do desempenho, e acumulou mais de um milhão de seguidores. Dessas mensagens nasceu As Coisas Que Você Só Vê Quando Desacelera, publicado em 2012 na Coreia, que vendeu milhões de exemplares no país e foi traduzido para dezenas de idiomas.',
      'Publicou depois Amor pelas Coisas Imperfeitas, sobre autocompaixão, perdão e a aceitação das próprias falhas. Fundou em Seul a Escola da Cura Interior, dedicada a orientação psicológica e espiritual para pessoas em sofrimento, e mantém atividade de ensino e escrita voltada a um público leigo e majoritariamente jovem.'
    ],
    contexto: 'Haemin Sunim escreve para a Coreia do Sul de altíssima pressão por desempenho acadêmico e profissional, com uma das taxas de suicídio mais altas do mundo desenvolvido. Seu alcance internacional posterior mostra que o problema que ele endereça — exaustão e comparação permanente — não é local.',
    contribuicoes: ['Escreveu As Coisas Que Você Só Vê Quando Desacelera, traduzido para dezenas de idiomas.', 'Escreveu Amor pelas Coisas Imperfeitas, sobre autocompaixão e aceitação.', 'Fundou em Seul a Escola da Cura Interior.', 'Levou o ensino budista a um público leigo e jovem por meio de redes sociais.'],
    cronologia: [
      [1973, 'Nasce em Busan, Coreia do Sul.'],
      ['c. 2000', 'É ordenado monge na tradição zen coreana.'],
      [2012, 'Publica As Coisas Que Você Só Vê Quando Desacelera.'],
      [2016, 'Publica Amor pelas Coisas Imperfeitas.']
    ]
  },

  'David Aaker': {
    papel: 'Professor e consultor norte-americano de marketing (1938–)',
    resumo: 'Formulou o conceito de brand equity e transformou a marca em ativo mensurável.',
    bio: [
      'David Allen Aaker nasceu em Fargo, Dakota do Norte, em 1938. Formou-se no MIT e doutorou-se em estatística em Stanford. Passou a maior parte da carreira na Haas School of Business, da Universidade da Califórnia em Berkeley, onde é professor emérito.',
      'Sua contribuição central veio em Managing Brand Equity, de 1991. Até então, a marca era tratada como elemento de comunicação, e o valor de uma empresa era medido por ativos tangíveis. Aaker propôs que a marca é um ativo com valor mensurável, composto por reconhecimento, qualidade percebida, associações e lealdade do consumidor — e que esse valor pode ser construído, medido e destruído por decisões de gestão.',
      'Building Strong Brands, de 1996, desenvolveu o modelo de identidade de marca, distinguindo o que a marca é do que ela comunica e propondo instrumentos práticos para geri-la ao longo do tempo. Brand Leadership, escrito com Erich Joachimsthaler, tratou de arquitetura de marcas em empresas com portfólios complexos.',
      'Escreveu mais de vinte livros e centenas de artigos. Sua obra é a base do vocabulário corrente de gestão de marcas — identidade, arquitetura, extensão, posicionamento — usado hoje por praticamente todas as grandes empresas.'
    ],
    contexto: 'Aaker escreve num período em que fusões e aquisições começaram a evidenciar que empresas eram compradas por valores muito superiores a seus ativos físicos. Seu trabalho deu nome e método ao que explicava essa diferença, e por isso transformou a marca de assunto de publicidade em assunto de conselho de administração.',
    contribuicoes: ['Formulou o conceito de brand equity, tornando a marca um ativo mensurável.', 'Escreveu Managing Brand Equity (1991) e Building Strong Brands (1996).', 'Desenvolveu o modelo de identidade de marca e o conceito de arquitetura de marcas.', 'Escreveu mais de vinte livros que formam a base do vocabulário corrente de gestão de marcas.'],
    cronologia: [
      [1938, 'Nasce em Fargo, Dakota do Norte.'],
      [1991, 'Publica Managing Brand Equity.'],
      [1996, 'Publica Building Strong Brands.'],
      [2000, 'Publica Brand Leadership.']
    ]
  },

  'Howard Stevenson': {
    papel: 'Professor norte-americano de empreendedorismo (1941–)',
    resumo: 'Definiu empreendedorismo como a busca de oportunidade além dos recursos controlados, definição hoje padrão.',
    bio: [
      'Howard H. Stevenson nasceu em 1941 e formou-se em matemática na Universidade Stanford, com MBA e doutorado em Harvard. Trabalhou em gestão imobiliária e como executivo antes de retornar à Harvard Business School, onde lecionou por mais de quatro décadas.',
      'Foi o principal responsável por transformar o empreendedorismo em disciplina acadêmica legítima em Harvard, num período em que a escola formava sobretudo executivos para grandes corporações e o empreendedorismo era visto como assunto sem substância teórica.',
      'Sua definição, formulada em 1983, é a contribuição mais duradoura: empreendedorismo é a busca de oportunidade além dos recursos atualmente controlados. A formulação é deliberadamente ampla — não fala de startups, tecnologia nem tamanho de empresa — e desloca o foco do perfil psicológico do empreendedor para um comportamento que pode ocorrer em qualquer organização.',
      'Dessa definição decorre a distinção que ele desenvolveu entre a mentalidade empreendedora, orientada pela oportunidade, e a administrativa, orientada pelos recursos disponíveis. Escreveu Do Lunch or Be Lunch e coescreveu Just Enough, sobre a definição pessoal de sucesso além do desempenho profissional. Ocupou vários cargos de direção acadêmica em Harvard.'
    ],
    contexto: 'Stevenson escreve quando o empreendedorismo ainda era estudado, quando era estudado, como traço de personalidade. Sua definição comportamental permitiu que o campo se tornasse ensinável e pesquisável, e é por isso que ela permanece a formulação padrão em escolas de negócios no mundo inteiro.',
    contribuicoes: ['Formulou a definição de empreendedorismo como busca de oportunidade além dos recursos controlados.', 'Estabeleceu o empreendedorismo como disciplina acadêmica na Harvard Business School.', 'Desenvolveu a distinção entre mentalidade empreendedora e administrativa.', 'Coescreveu Just Enough, sobre a definição pessoal de sucesso.'],
    cronologia: [
      [1941, 'Nasce nos Estados Unidos.'],
      [1983, 'Formula a definição de empreendedorismo que se tornaria padrão.'],
      [1999, 'Publica Do Lunch or Be Lunch.'],
      [2004, 'Publica Just Enough, com Laura Nash.']
    ]
  },

  'Henry Chesbrough': {
    papel: 'Professor e pesquisador norte-americano (1956–)',
    resumo: 'Criou o conceito de inovação aberta, mostrando que boas ideias precisam vir e sair de fora da empresa.',
    bio: [
      'Henry William Chesbrough nasceu em 1956. Formou-se em economia em Yale, fez MBA em Stanford e doutorou-se em administração em Berkeley. Trabalhou por uma década na indústria de tecnologia, incluindo posição executiva numa empresa de discos rígidos, antes de seguir carreira acadêmica.',
      'Lecionou em Harvard e depois na Haas School of Business, em Berkeley, onde dirige o centro dedicado ao tema que criou.',
      'Open Innovation, de 2003, formulou o argumento. O modelo tradicional de pesquisa e desenvolvimento pressupunha que a empresa deveria gerar internamente todas as suas ideias, protegê-las e explorá-las sozinha — modelo que funcionou nos grandes laboratórios corporativos do século XX. Chesbrough mostrou que ele havia deixado de funcionar: o conhecimento se distribuiu, profissionais qualificados circulam entre empresas, e capital de risco permite que qualquer ideia engavetada seja explorada por outro.',
      'A inovação aberta propõe o fluxo nos dois sentidos: importar deliberadamente ideias e tecnologias externas e licenciar ou desmembrar as internas que a empresa não vai usar. Chesbrough documentou casos em que tecnologias desenvolvidas e arquivadas por grandes empresas geraram bilhões nas mãos de terceiros. Escreveu depois Open Business Models e Open Services Innovation, estendendo o conceito a modelos de negócio e serviços.'
    ],
    contexto: 'Chesbrough escreve quando os grandes laboratórios corporativos centralizados perdiam eficácia diante de ecossistemas distribuídos de startups e capital de risco. Seu conceito nomeou uma mudança que já estava em curso e forneceu a ela um vocabulário que empresas e governos passaram a adotar.',
    contribuicoes: ['Criou o conceito de inovação aberta, em 2003.', 'Escreveu Open Innovation, Open Business Models e Open Services Innovation.', 'Documentou o custo das tecnologias desenvolvidas e não exploradas por grandes empresas.', 'Dirige o centro de inovação aberta da Universidade da Califórnia em Berkeley.'],
    cronologia: [
      [1956, 'Nasce nos Estados Unidos.'],
      [2003, 'Publica Open Innovation.'],
      [2006, 'Publica Open Business Models.'],
      [2011, 'Publica Open Services Innovation.']
    ]
  },

  'Thomas J. Stanley': {
    papel: 'Pesquisador norte-americano (1944–2015)',
    resumo: 'Descobriu pesquisando milionários americanos que a maioria vive de forma discreta e abaixo do que poderia.',
    bio: [
      'Thomas J. Stanley nasceu em 1944 e doutorou-se em administração pela Universidade da Geórgia. Lecionou marketing em várias universidades americanas e passou décadas fazendo o que quase ninguém fazia de forma sistemática: pesquisar empiricamente pessoas ricas nos Estados Unidos, com questionários, entrevistas em profundidade e grupos focais.',
      'O que encontrou contrariava a expectativa. A maioria dos milionários americanos não morava em bairros de luxo, não dirigia carros importados novos, não frequentava restaurantes caros e não herdara dinheiro. Eram donos de pequenas empresas em setores comuns — empreiteiras, distribuidoras, serviços de limpeza —, viviam abaixo de sua renda e acumulavam por décadas.',
      'O Milionário Mora ao Lado, escrito com William Danko e publicado em 1996, apresentou esses resultados ao grande público e vendeu milhões de exemplares. O livro distingue os acumuladores prodigiosos de riqueza dos acumuladores insuficientes, e mostra que renda alta e patrimônio alto são coisas distintas: muita gente com renda elevada consome tudo o que ganha em sinalização de status.',
      'Publicou depois A Mente Milionária, sobre atitudes e escolhas dos que constroem patrimônio, e Stop Acting Rich. Sua metodologia foi criticada por viés de seleção da amostra e por não considerar suficientemente o efeito de fatores estruturais como educação, herança e mercado imobiliário. Morreu num acidente de trânsito em 2015.'
    ],
    contexto: 'Stanley pesquisa numa cultura em que riqueza e consumo visível são tratados como sinônimos. Sua contribuição foi separar as duas coisas com dados, ainda que as limitações metodológicas de seu trabalho sejam objeto de crítica acadêmica.',
    contribuicoes: ['Escreveu O Milionário Mora ao Lado (1996), com William Danko.', 'Documentou empiricamente os hábitos de consumo e acumulação dos ricos americanos.', 'Estabeleceu a distinção entre renda alta e patrimônio acumulado.', 'Escreveu A Mente Milionária e Stop Acting Rich.'],
    cronologia: [
      [1944, 'Nasce nos Estados Unidos.'],
      [1996, 'Publica O Milionário Mora ao Lado.'],
      [2000, 'Publica A Mente Milionária.'],
      [2015, 'Morre em acidente de trânsito.']
    ],
    nota: 'A metodologia de Stanley é criticada por viés de seleção da amostra e por subestimar fatores estruturais como herança e acesso à educação.'
  }
});

const OBRAS_F18 = {
  'Jorge Luis Borges': [
    [
      'Ficções',
      'livro',
      1944,
      'Reúne contos construídos como problemas metafísicos: a biblioteca que contém todos os livros possíveis, o homem incapaz de esquecer qualquer coisa, o jardim de caminhos que se bifurcam onde todos os futuros ocorrem, a resenha de um livro que não existe. Borges preferia fingir que uma obra já existia a escrevê-la, método que ele explicava como forma de evitar centenas de páginas desnecessárias. É um dos livros de contos mais influentes do século XX.'
    ],
    ['O Aleph', 'livro', 1949, 'O conto que dá título ao volume descreve um ponto no porão de uma casa em Buenos Aires onde todos os pontos do universo são visíveis simultaneamente, e o problema literário de narrar em sucessão o que é simultâneo. Reúne também Emma Zunz, A Casa de Astérion e A Escrita do Deus, entre os textos mais lidos do autor.'],
    ['O Fazedor', 'livro', 1960, 'Volume breve que mistura contos curtíssimos, poemas e fragmentos em prosa, escrito quando Borges já havia perdido praticamente a visão. Contém Borges e Eu, sobre a distância entre a pessoa e o autor público de mesmo nome, e o Poema dos Dons, sobre a ironia de receber ao mesmo tempo a Biblioteca Nacional e a cegueira.']
  ],
  'Aldous Huxley': [
    [
      'Admirável Mundo Novo',
      'livro',
      1932,
      'Imagina uma sociedade estável em que pessoas são produzidas em incubadoras, condicionadas desde o embrião para sua casta e mantidas satisfeitas por consumo, sexo sem vínculo e uma droga chamada soma. Sua tese distingue-a de outras distopias: não é preciso proibir os livros se ninguém quiser lê-los, e o controle mais eficaz é aquele que as pessoas desejam. Escrita em plena era da produção em massa, tornou-se mais discutida com o tempo.'
    ],
    ['As Portas da Percepção', 'ensaio', 1954, 'Relato da experiência do autor com mescalina sob acompanhamento, e reflexão sobre a hipótese de que o cérebro funcione como uma válvula redutora que filtra a percepção para permitir a sobrevivência. Tornou-se texto central da contracultura dos anos 1960 e deu nome à banda The Doors.']
  ],
  'Harriet Beecher Stowe': [
    [
      'A Cabana do Pai Tomás',
      'livro',
      1852,
      'Acompanha Tom, homem escravizado de bondade profunda, vendido sucessivamente até cair nas mãos de um proprietário brutal, e paralelamente a fuga de Eliza com o filho pequeno através do rio congelado. Escrito em resposta à Lei do Escravo Fugitivo de 1850, vendeu trezentos mil exemplares no primeiro ano e mais de um milhão na Grã-Bretanha, ampliando de forma mensurável o apoio ao abolicionismo. Sua recepção posterior é complexa: as adaptações teatrais deformaram as personagens em estereótipos raciais que James Baldwin criticou duramente.'
    ]
  ],
  'Madame de Staël': [
    ['Da Alemanha', 'livro', 1810, 'Apresenta aos franceses a filosofia e a literatura alemãs — Goethe, Schiller, Kant — e opõe a literatura do norte, romântica e cristã, à do sul, clássica e pagã. A edição inteira foi destruída por ordem de Napoleão, e o livro só circulou depois, em Londres. É um dos textos fundadores do romantismo francês e da literatura comparada.'],
    ['Corinne', 'livro', 1807, 'Acompanha uma poeta genial e independente na Itália e sua paixão por um lorde escocês incapaz de aceitar uma mulher de talento público. É o romance em que Staël expõe com mais clareza o preço social pago por mulheres excepcionais, e teve influência duradoura sobre escritoras do século XIX.']
  ],
  'Alex Haley': [
    [
      'Autobiografia de Malcolm X',
      'memoria',
      1965,
      'Resultado de dois anos de entrevistas, narra em primeira pessoa a trajetória de Malcolm Little da infância marcada pela violência racista à criminalidade, à conversão na Nação do Islã, ao rompimento com ela e à viagem a Meca que transformou suas posições. Publicado poucos meses após o assassinato do biografado, é considerado um dos livros mais importantes do século XX americano.'
    ],
    [
      'Raízes',
      'livro',
      1976,
      'Reconstrói sete gerações da família do autor a partir de Kunta Kinte, sequestrado em Gâmbia no século XVIII e levado à Virgínia. Recebeu um Pulitzer especial e sua adaptação televisiva bateu recordes de audiência, reintroduzindo a escravidão no debate público americano e desencadeando um movimento de pesquisa genealógica entre famílias negras. A exatidão da documentação foi depois contestada por pesquisadores.'
    ]
  ],
  'Lord Byron': [
    ['Dom Juan', 'poesia', 1819, 'Longo poema satírico e inacabado, em dezesseis cantos, que inverte a lenda: aqui Dom Juan é mais seduzido do que sedutor, e o poema serve de pretexto para digressões ferozes sobre política, hipocrisia inglesa, guerra e literatura. Muito distante do tom romântico que tornara Byron famoso, é considerado por muitos críticos sua obra maior.'],
    ['A Peregrinação de Childe Harold', 'poesia', 1812, 'Narra as viagens de um jovem desiludido pela Europa mediterrânea, e foi o poema que tornou Byron célebre da noite para o dia. Criou o herói byroniano — orgulhoso, melancólico, marcado por uma culpa secreta e em desacordo com o mundo —, figura que dominaria a literatura europeia por décadas.']
  ],
  'Alexander Pope': [
    ['Ensaio sobre a Crítica', 'poesia', 1711, 'Escrito aos vinte e três anos, expõe em dísticos heroicos os princípios do julgamento literário: a necessidade de conhecer os próprios limites, o perigo do saber superficial e a importância de julgar a obra como um todo. Dele vêm formulações que entraram na língua corrente, como a de que errar é humano e perdoar é divino.'],
    ['O Rapto da Madeixa', 'poesia', 1712, 'Transforma uma disputa real entre duas famílias, causada pelo corte não autorizado de um cacho de cabelo, numa epopeia em miniatura com deuses, batalhas e catástrofes cósmicas. É a mais perfeita sátira heroicômica da língua inglesa e uma demonstração de como a forma épica pode ridicularizar a futilidade que descreve.']
  ],
  'Woodrow Wilson': [
    [
      'Os Quatorze Pontos',
      'discurso',
      1918,
      'Discurso ao Congresso americano que estabelece os princípios que Wilson propunha como base da paz após a Primeira Guerra: diplomacia aberta, liberdade dos mares, redução de armamentos, autodeterminação dos povos e uma associação geral de nações. Formulou o vocabulário do internacionalismo liberal que estruturaria o século XX, inclusive a ONU, ainda que os Estados Unidos jamais tenham aderido à Liga das Nações que ele idealizou.'
    ]
  ],
  'Ernest Renan': [
    [
      'O Que é uma Nação?',
      'ensaio',
      1882,
      'Conferência na Sorbonne que recusa definir a nação por raça, língua, religião ou geografia, e propõe que ela repousa sobre um passado de sacrifícios compartilhados e sobre a vontade presente de continuar juntos, resumida na fórmula do plebiscito de todos os dias. Formulada em resposta ao argumento alemão de que a Alsácia seria alemã por etnia, continua sendo o principal contraponto às concepções étnicas de nacionalidade.'
    ],
    ['Vida de Jesus', 'livro', 1863, 'Trata os evangelhos como fontes históricas a serem analisadas como quaisquer outras e apresenta Jesus como figura humana extraordinária num contexto galileu concreto, sem atribuir-lhe divindade. Condenado pela Igreja e atacado em centenas de panfletos, vendeu centenas de milhares de exemplares e é um marco da crítica histórica aplicada aos textos religiosos.']
  ],
  'Samuel Butler': [
    ['Erewhon', 'livro', 1872, 'Descreve um país imaginário em que a doença é crime e o crime é doença, as máquinas foram destruídas por temor de que evoluíssem por seleção natural e se tornassem dominantes, e as universidades ensinam deliberadamente o inútil. O capítulo sobre as máquinas é apontado como uma das primeiras formulações da ideia de inteligência mecânica evolutiva.'],
    ['O Caminho de Toda Carne', 'livro', 1903, 'Acompanha quatro gerações de uma família de clérigos ingleses e demole a educação religiosa, a autoridade paterna e a hipocrisia vitoriana. Butler escreveu-o ao longo de décadas e proibiu sua publicação em vida para não ferir pessoas vivas. Shaw o considerava uma das maiores obras da prosa inglesa do século XIX.']
  ],
  'William Butler Yeats': [
    [
      'A Segunda Vinda',
      'poesia',
      1919,
      'Escrito após a Primeira Guerra, a revolução irlandesa e a pandemia de gripe, contém as imagens do falcão que já não ouve o falcoeiro e do centro que não se sustenta, além do verso sobre os melhores carecerem de convicção enquanto os piores transbordam de intensidade apaixonada. É um dos poemas mais citados da língua inglesa, invocado a cada crise política desde então.'
    ],
    ['A Torre', 'poesia', 1928, 'Volume da maturidade que reúne Navegando para Bizâncio e Entre Escolares, escrito quando Yeats tinha mais de sessenta anos. Marca a transformação radical de seu estilo, do romantismo crepuscular da juventude para uma poesia seca, concreta e política — caso raro na história literária de obra tardia que supera a inicial.']
  ],
  'Alice Walker': [
    [
      'A Cor Púrpura',
      'livro',
      1982,
      'Escrito como cartas de Celie, mulher negra pobre do Sul rural americano que sofre abuso do padrasto e do marido e encontra, através de outras mulheres, afeto e autonomia. Recebeu o Pulitzer e o National Book Award, tornando Walker a primeira mulher negra a ganhar o Pulitzer de ficção. Foi adaptado por Steven Spielberg e por musical da Broadway, e é continuamente contestado em escolas americanas.'
    ],
    ['Em Busca dos Jardins de Nossas Mães', 'ensaio', 1983, 'Coletânea de ensaios em que Walker cunha o termo womanism e discute a criatividade de mulheres negras cujas condições materiais nunca permitiram que ela se expressasse em arte reconhecida. Contém também o ensaio que recuperou Zora Neale Hurston do esquecimento.']
  ],
  'Dag Hammarskjöld': [
    [
      'Marcos no Caminho',
      'memoria',
      1963,
      'Diário espiritual mantido em segredo ao longo da vida e encontrado após sua morte, com instrução para publicação. Não trata de política nem da ONU: são anotações breves, aforismos e poemas sobre solidão, dever, dúvida e fé, escritos pelo homem que ocupava o cargo diplomático mais exposto do mundo. É um documento sem paralelo sobre a vida interior de um servidor público.'
    ]
  ],
  'Estée Lauder': [
    [
      'Estée: Uma História de Sucesso',
      'memoria',
      1985,
      'Autobiografia em que a fundadora narra a trajetória da venda de cremes em salões de beleza do Queens à construção de uma empresa global de cosméticos. Descreve as decisões que definiram o setor, entre elas a criação da amostra grátis e do brinde com a compra, e o método de treinar pessoalmente as vendedoras. É documento de primeira mão sobre a formação da indústria moderna de beleza.'
    ]
  ],
  'Théophile Gautier': [
    ['Mademoiselle de Maupin', 'livro', 1835, 'O romance é hoje menos lido que seu prefácio, em que Gautier ataca a exigência de que a arte sirva à moral, à política ou à utilidade e afirma que nada é verdadeiramente belo senão o que não serve para nada. É a formulação fundadora da arte pela arte, que atravessaria o parnasianismo, o esteticismo de Wilde e boa parte do modernismo.'],
    ['Esmaltes e Camafeus', 'poesia', 1852, 'Coletânea de poemas breves construídos com a precisão de objetos trabalhados, em que a forma é deliberadamente o assunto. Foi tomada como modelo pelos parnasianos e é a aplicação prática do ideal estético que Gautier formulara dezessete anos antes.']
  ],
  'Santo Isidoro de Sevilha': [
    [
      'Etimologias',
      'livro',
      630,
      'Enciclopédia em vinte livros que reúne o que Isidoro conseguiu recolher sobre gramática, retórica, medicina, direito, cronologia, teologia, zoologia, agricultura, guerra, navios, edifícios e alimentos, organizando o conhecimento pela origem das palavras. Numa Europa que perdia o acesso à cultura clássica, funcionou por séculos como a enciclopédia disponível — sobreviveram mais de mil manuscritos —, e muito do que preservou de autores antigos existe hoje apenas em suas citações.'
    ]
  ],
  'François Mauriac': [
    ['Thérèse Desqueyroux', 'livro', 1927, 'Uma mulher tenta envenenar o marido e é protegida pela família não por afeto, mas para evitar o escândalo. O romance acompanha sua tentativa de compreender os próprios motivos numa sociedade provinciana católica em que nada pode ser dito. É a obra mais conhecida do autor e uma das grandes personagens femininas da literatura francesa.'],
    ['O Nó de Víboras', 'livro', 1932, 'Confissão escrita de um velho advogado avarento que odeia os herdeiros que esperam sua morte e planeja deserdá-los. A voz do narrador, corrosiva e lúcida sobre a própria maldade, é o que sustenta o livro, considerado por muitos o melhor romance de Mauriac.']
  ],
  'Napoleão III': [],
  'Robert Ingersoll': [],
  'Henry Ward Beecher': [],
  'Coelho Neto': [
    ['Rei Negro', 'livro', 1914, 'Romance centrado em Macambira, homem escravizado de origem africana, e em sua trajetória no Brasil da escravidão. É uma das primeiras tentativas da literatura brasileira de construir um protagonista negro com densidade e passado próprios, ainda que atravessada pelas concepções raciais de sua época — o que a torna documento duplo, literário e histórico.'],
    ['A Conquista', 'livro', 1899, 'Retrata o meio boêmio e literário do Rio de Janeiro na virada para a República, com personagens inspirados em figuras reais da geração do autor, entre elas Olavo Bilac e Aluísio Azevedo. É a obra em que Coelho Neto registra o próprio ambiente de formação.']
  ],
  'Paul Tillich': [
    [
      'A Coragem de Ser',
      'livro',
      1952,
      'Trata da angústia em três formas — diante da morte, do vazio e da culpa — e propõe que a coragem consiste em afirmar a própria existência apesar delas. Escrito por um teólogo que perdeu a fé herdada nas trincheiras da Primeira Guerra, redefine a fé como preocupação última e não como crença em proposições, formulação que alcançou leitores muito além da igreja.'
    ]
  ],
  'Joseph Joubert': [
    [
      'Pensamentos',
      'livro',
      1838,
      'Reunião póstuma dos cadernos que Joubert manteve por mais de quarenta anos, escrevendo e reescrevendo cada frase até a forma mais concisa possível e recusando publicá-las em vida. Tratam de literatura, moral, religião, linguagem e amizade. Chateaubriand organizou a primeira seleção, e Matthew Arnold descreveu o autor como o La Rochefoucauld do lado luminoso da natureza humana.'
    ]
  ],
  'Oliver Wendell Holmes': [
    ['O Autocrata da Mesa do Café da Manhã', 'livro', 1858, 'Série publicada na revista The Atlantic Monthly em forma de conversa numa pensão de Boston, misturando humor, ciência, medicina e filosofia. O formato permitia a Holmes tratar de qualquer assunto com leveza e erudição simultâneas, e foi um dos textos mais populares da literatura americana do século XIX.'],
    [
      'A Contagiosidade da Febre Puerperal',
      'ensaio',
      1843,
      'Ensaio médico que demonstra, a partir de evidência estatística e de relatos de casos, que a febre que matava mulheres após o parto era transmitida pelas mãos e instrumentos dos próprios médicos, e que a solução era lavar as mãos e trocar de roupa entre atendimentos. Foi ridicularizado por obstetras eminentes e antecede em quatro anos o trabalho independente de Semmelweis.'
    ]
  ],
  'David Aaker': [
    [
      'Managing Brand Equity',
      'livro',
      1991,
      'Propõe que a marca é um ativo com valor mensurável, composto por reconhecimento, qualidade percebida, associações e lealdade do consumidor, e que esse valor pode ser construído, medido e destruído por decisões de gestão. Escrito quando fusões evidenciavam que empresas eram compradas por valores muito acima de seus ativos físicos, transformou a marca de assunto de publicidade em assunto de conselho de administração.'
    ],
    ['Building Strong Brands', 'livro', 1996, 'Desenvolve o modelo de identidade de marca, distinguindo o que a marca é do que ela comunica, e oferece instrumentos práticos para geri-la ao longo do tempo. É a obra que fixou o vocabulário corrente de gestão de marcas usado hoje por praticamente todas as grandes empresas.']
  ],
  'Henry Chesbrough': [
    [
      'Open Innovation',
      'livro',
      2003,
      'Mostra que o modelo de pesquisa e desenvolvimento fechado, em que a empresa gera internamente todas as ideias e as explora sozinha, deixou de funcionar num mundo de conhecimento distribuído, profissionais que circulam e capital de risco abundante. Propõe o fluxo nos dois sentidos: importar ideias externas e licenciar as internas que a empresa não vai usar. Documenta casos de tecnologias arquivadas por grandes empresas que geraram bilhões nas mãos de terceiros.'
    ]
  ],
  'Thomas J. Stanley': [
    [
      'O Milionário Mora ao Lado',
      'livro',
      1996,
      'Resultado de décadas de pesquisa empírica com pessoas ricas nos Estados Unidos, mostra que a maioria dos milionários americanos não mora em bairros de luxo, não herdou dinheiro e é dona de pequenas empresas em setores comuns. Distingue acumuladores prodigiosos de acumuladores insuficientes de riqueza e separa renda alta de patrimônio acumulado. Vendeu milhões de exemplares e recebe críticas metodológicas por viés de seleção da amostra.'
    ]
  ],
  'Howard Stevenson': [],
  'Martha Medeiros': [['Divã', 'livro', 2002, 'Mercedes, mulher de quarenta anos em análise, revê o casamento, a maternidade, o desejo e a insatisfação em monólogos dirigidos à terapeuta que nunca responde. Foi adaptado para o teatro, com longa carreira em cartaz, e para o cinema, e é o título mais conhecido da autora.']],
  'Leandro Karnal': [['O Dilema do Porco-Espinho', 'livro', 2017, 'Parte da imagem de Schopenhauer sobre porcos-espinhos que precisam se aproximar para não morrer de frio e se afastar para não se ferir, e a usa para tratar da dificuldade humana de conviver. Percorre solidão, inveja, amizade e vida em comum a partir de referências filosóficas e literárias em linguagem acessível.']],
  'Roberto Shinyashiki': [
    ['A Carícia Essencial', 'livro', 1985, 'Trata do afeto, do vínculo e da necessidade humana de contato físico e emocional, a partir da experiência clínica do autor como psiquiatra e de sua atuação com dinâmica de grupo. Foi um dos livros brasileiros mais vendidos de sua década e inaugurou a carreira do autor no gênero de desenvolvimento pessoal.'],
    ['Sem Medo de Vencer', 'livro', 1988, 'Dirigido a quem enfrenta obstáculos profissionais e pessoais, propõe que o medo do fracasso é frequentemente mais limitante do que os obstáculos concretos. Foi um dos maiores sucessos editoriais brasileiros do período e consolidou o formato de livro de motivação no país.']
  ],
  'Haemin Sunim': [
    [
      'As Coisas Que Você Só Vê Quando Desacelera',
      'livro',
      2012,
      'Nasceu de mensagens curtas que o autor, monge budista, publicava em redes sociais sobre atenção, ansiedade, relacionamentos e pressão por desempenho. Escrito para uma Coreia do Sul de exigência extrema e alta taxa de suicídio, vendeu milhões de exemplares no país e foi traduzido para dezenas de idiomas, o que indica que o problema que endereça não é local.'
    ]
  ],
  'Viviane Mosé': [['Nietzsche e a Grande Política da Linguagem', 'livro', 2005, 'Estuda a crítica nietzschiana à linguagem e à gramática como estruturas que condicionam o que é possível pensar, e a proposta de uma política da linguagem como campo de disputa. É a obra acadêmica principal da autora e uma referência sobre Nietzsche no Brasil.']],
  'Clóvis de Barros Filho': [['Ética e Vida Feliz', 'livro', 2007, 'Discute o que constitui uma vida boa a partir de autores clássicos — Aristóteles, os estoicos, Espinosa — em linguagem dirigida ao leitor não especializado. É o livro que estabeleceu o autor junto ao público geral e o formato que ele repetiria em títulos seguintes.']],
  'James Dean': [],
  'Lady Gaga': [],
  'Émile-Auguste Chartier': [['Sobre Felicidade', 'livro', 1925, 'Reúne noventa e três propos, textos curtos escritos de uma só vez para jornal, sobre humor, tédio, ansiedade, imaginação e ação. A tese que os atravessa é que o pessimismo vem do humor e o otimismo da vontade, e que a felicidade é resultado de decisão e prática, não de circunstância. É o livro mais lido do autor.']],
  'Malcolm Forbes': []
};

(function aplicarF18() {
  Object.entries(PANORAMAS_F18).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F18).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF18() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 18:', e);
    }
  };
})();

/* ================================================================
   FASE 19 — CONTINUAÇÃO DA FILA (autores 338 em diante)
   ================================================================ */
const PANORAMAS_F19 = {
  'Gottfried Wilhelm Leibniz': {
    papel: 'Filósofo e matemático alemão (1646–1716)',
    resumo: 'Criou o cálculo independentemente de Newton, inventou o sistema binário e propôs que vivemos no melhor dos mundos possíveis.',
    bio: [
      'Gottfried Wilhelm Leibniz nasceu em Leipzig em 1º de julho de 1646, filho de um professor de filosofia moral que morreu quando ele tinha seis anos, deixando-lhe uma biblioteca que o menino leu inteira. Aprendeu latim sozinho aos oito anos e grego pouco depois. Doutorou-se em direito aos vinte, e a universidade recusou-lhe o grau alegando idade insuficiente.',
      'Nunca ocupou cátedra. Trabalhou a vida inteira como diplomata, jurista, engenheiro de minas e bibliotecário a serviço de príncipes alemães, sobretudo na corte de Hanôver, onde passou quarenta anos e foi encarregado de escrever a história da casa ducal — tarefa que nunca concluiu. Escrevia em latim, francês e alemão, correspondeu-se com mais de mil pessoas e produziu dezenas de milhares de páginas, a maior parte inédita em vida.',
      'Desenvolveu o cálculo infinitesimal por volta de 1675, de forma independente de Newton, e publicou primeiro. A disputa de prioridade que se seguiu, alimentada pela Royal Society sob presidência de Newton, envenenou o resto de sua vida e isolou a matemática britânica por um século — a notação de Leibniz, com o sinal de integral e o dx, é a que se usa até hoje, por ser superior à de Newton.',
      'Construiu uma máquina de calcular capaz de multiplicar e dividir, descreveu o sistema binário em 1703 e sonhou com uma linguagem formal universal que permitisse resolver disputas por cálculo. Em filosofia, propôs as mônadas, substâncias simples sem partes, e a harmonia preestabelecida. Sua Teodiceia, de 1710, argumenta que Deus, podendo criar infinitos mundos, escolheu o melhor possível — tese que Voltaire satirizaria em Cândido. Morreu em Hanôver em 14 de novembro de 1716, praticamente esquecido; apenas seu secretário compareceu ao funeral.'
    ],
    contexto: 'Leibniz é provavelmente o último pensador a dominar simultaneamente matemática, física, lógica, direito, teologia, história, linguística e diplomacia em nível de contribuição original. Sua obra permaneceu dispersa em manuscritos por séculos, e a edição crítica completa ainda não foi concluída.',
    contribuicoes: [
      'Desenvolveu o cálculo infinitesimal independentemente de Newton, com a notação usada até hoje.',
      'Descreveu o sistema binário, base de toda a computação moderna.',
      'Construiu uma máquina de calcular capaz de multiplicar e dividir.',
      'Formulou a metafísica das mônadas e o princípio de razão suficiente.',
      'Escreveu a Teodiceia, com a tese do melhor dos mundos possíveis.',
      'Antecipou a lógica formal e a ideia de uma linguagem universal de cálculo.'
    ],
    cronologia: [
      [1646, 'Nasce em Leipzig, em 1º de julho.'],
      [1675, 'Desenvolve o cálculo infinitesimal.'],
      [1676, 'Entra a serviço da corte de Hanôver.'],
      [1684, 'Publica seu método do cálculo.'],
      [1703, 'Descreve o sistema binário.'],
      [1710, 'Publica a Teodiceia.'],
      [1716, 'Morre em Hanôver.']
    ]
  },

  'Stephen Covey': {
    papel: 'Escritor e consultor norte-americano (1932–2012)',
    resumo: 'Escreveu Os 7 Hábitos das Pessoas Altamente Eficazes, um dos livros de gestão pessoal mais vendidos da história.',
    bio: [
      'Stephen Richards Covey nasceu em Salt Lake City, Utah, em 24 de outubro de 1932, em família mórmon. Serviu como missionário na Inglaterra, formou-se em administração na Universidade de Utah, fez MBA em Harvard e doutorou-se em educação religiosa pela Universidade Brigham Young, onde lecionou por duas décadas.',
      'Sua tese de doutorado analisou a literatura americana de sucesso publicada desde 1776. A conclusão organizou toda a sua obra posterior: os textos dos primeiros cento e cinquenta anos tratavam de caráter — integridade, coragem, justiça, humildade — enquanto os das décadas recentes tratavam de personalidade, técnicas de imagem e atalhos de influência. Covey chamou isso de ética do caráter contra ética da personalidade e sustentou que a segunda não funciona sem a primeira.',
      'Os 7 Hábitos das Pessoas Altamente Eficazes saiu em 1989. Organiza-se em três etapas: da dependência para a independência, com os hábitos de ser proativo, começar com o objetivo em mente e primeiro o mais importante; da independência para a interdependência, com pensar ganha-ganha, procurar primeiro compreender e depois ser compreendido, e criar sinergia; e finalmente afinar o instrumento, a renovação contínua.',
      'O livro vendeu dezenas de milhões de exemplares e foi traduzido para dezenas de idiomas. Covey formulou também a matriz de urgência e importância, difundida em Primeiro o Mais Importante, e escreveu O Oitavo Hábito. Fundou empresas de treinamento que se fundiram na FranklinCovey. Morreu em Idaho em 16 de julho de 2012, em consequência de um acidente de bicicleta.'
    ],
    contexto: 'Covey escreve no auge da literatura de negócios americana e faz nela um movimento contrário: em vez de técnicas, princípios; em vez de imagem, caráter. Essa recusa deliberada dos atalhos é o que distingue sua obra num gênero saturado deles, e explica sua permanência três décadas depois.',
    contribuicoes: ['Escreveu Os 7 Hábitos das Pessoas Altamente Eficazes (1989).', 'Formulou a distinção entre ética do caráter e ética da personalidade.', 'Difundiu a matriz de urgência e importância na gestão do tempo.', 'Popularizou os conceitos de círculo de influência e de pensamento ganha-ganha.', 'Fundou empresas de treinamento com alcance corporativo global.'],
    cronologia: [
      [1932, 'Nasce em Salt Lake City, em 24 de outubro.'],
      [1976, 'Conclui a tese sobre a literatura americana de sucesso.'],
      [1989, 'Publica Os 7 Hábitos das Pessoas Altamente Eficazes.'],
      [1994, 'Publica Primeiro o Mais Importante.'],
      [2004, 'Publica O Oitavo Hábito.'],
      [2012, 'Morre em Idaho.']
    ]
  },

  'David Ogilvy': {
    papel: 'Publicitário britânico (1911–1999)',
    resumo: 'Chamado de pai da publicidade moderna, defendeu que o anúncio deve informar e vender, não entreter.',
    bio: [
      'David Mackenzie Ogilvy nasceu em West Horsley, Inglaterra, em 23 de junho de 1911. Foi expulso de Oxford sem se formar. Trabalhou como cozinheiro num hotel em Paris, vendeu fogões de porta em porta na Escócia — experiência que ele considerava sua verdadeira formação — e escreveu para os vendedores um manual que a revista Fortune classificaria décadas depois como o melhor manual de vendas já escrito.',
      'Trabalhou no instituto de pesquisa de opinião de George Gallup nos Estados Unidos, onde absorveu a disciplina da medição, e serviu na inteligência britânica durante a Segunda Guerra. Tentou por um tempo a vida de agricultor numa comunidade amish na Pensilvânia.',
      'Fundou sua agência em Nova York em 1948, aos trinta e sete anos, sem nenhum cliente e com pouquíssimo capital. Construiu campanhas que se tornaram estudos de caso: o homem de tapa-olho das camisas Hathaway, o anúncio do Rolls-Royce cujo título afirmava que a setenta quilômetros por hora o ruído mais alto vinha do relógio elétrico, e as campanhas da Dove e da Schweppes.',
      'Sua doutrina, exposta em Confissões de um Publicitário, opõe-se ao anúncio que busca prêmios ou entretenimento: o texto deve ser longo se houver o que dizer, deve apresentar fatos, deve respeitar a inteligência do consumidor — sua formulação de que o consumidor não é um idiota, é sua esposa, tornou-se célebre — e deve ser testado. Aposentou-se num castelo na França. Morreu em Touffou em 21 de julho de 1999.'
    ],
    contexto: 'Ogilvy uniu duas tradições que a publicidade tratava como opostas: a pesquisa quantitativa de Gallup e a redação criativa. Sua insistência em fatos, testes e respeito ao leitor tornou-se a corrente dominante da publicidade americana, e sua obra escrita ainda é leitura de formação no setor.',
    contribuicoes: [
      'Fundou a Ogilvy & Mather, uma das maiores agências de publicidade do mundo.',
      'Escreveu Confissões de um Publicitário e Ogilvy on Advertising.',
      'Criou campanhas que se tornaram estudos de caso, entre elas Hathaway e Rolls-Royce.',
      'Introduziu na criação publicitária o rigor da pesquisa quantitativa de opinião.',
      'Formulou a defesa do texto longo e informativo contra a publicidade de puro entretenimento.'
    ],
    cronologia: [
      [1911, 'Nasce em West Horsley, em 23 de junho.'],
      [1938, 'Muda-se para os Estados Unidos e trabalha com George Gallup.'],
      [1948, 'Funda sua agência em Nova York.'],
      [1958, 'Cria o anúncio do Rolls-Royce.'],
      [1963, 'Publica Confissões de um Publicitário.'],
      [1983, 'Publica Ogilvy on Advertising.'],
      [1999, 'Morre na França.']
    ]
  },

  'Brené Brown': {
    papel: 'Pesquisadora e escritora norte-americana (1965–)',
    resumo: 'Pesquisou vergonha e vulnerabilidade por décadas e transformou o assunto em conversa pública global.',
    bio: [
      'Casandra Brené Brown nasceu em San Antonio, Texas, em 18 de novembro de 1965. Formou-se em serviço social e doutorou-se pela Universidade de Houston, onde é pesquisadora. Passou os primeiros anos de pesquisa estudando conexão humana e percebeu que, sempre que perguntava às pessoas sobre relações, elas acabavam falando de desconexão, medo de não pertencer e vergonha.',
      'Passou seis anos coletando e codificando milhares de relatos, em pesquisa qualitativa baseada em teoria fundamentada. Encontrou uma divisão nítida: pessoas com forte senso de merecimento e pertencimento e pessoas que lutavam permanentemente por isso. A diferença não estava em circunstância, sorte ou realizações, mas na disposição de aceitar a vulnerabilidade — ser visto sem garantia de resultado.',
      'Sua palestra em Houston, em 2010, sobre o poder da vulnerabilidade, tornou-se uma das mais assistidas de todos os tempos naquele formato, com dezenas de milhões de visualizações. Brown descreve o resultado como um colapso pessoal, já que sua pesquisa exigia dela exatamente o que ela evitava.',
      'Escreveu A Coragem de Ser Imperfeito, A Coragem de Ser Vulnerável, Mais Forte do Que Nunca e Dare to Lead, sobre liderança. Distingue com precisão vergonha, que é a crença de que se é ruim, de culpa, que é a avaliação de ter feito algo ruim — a primeira paralisa, a segunda pode corrigir. Sua obra circula amplamente em ambientes corporativos, e a crítica recorrente é que a aplicação empresarial esvazia o conteúdo clínico da pesquisa.'
    ],
    contexto: 'Brown trouxe para a conversa pública um assunto que a psicologia tratava sobretudo em contexto clínico. Sua contribuição foi mostrar, com pesquisa qualitativa extensa, que vergonha e vulnerabilidade não são temas de terapia individual, e sim variáveis que operam em famílias, escolas e organizações inteiras.',
    contribuicoes: [
      'Pesquisou por décadas vergonha, vulnerabilidade e pertencimento com metodologia qualitativa.',
      'Escreveu A Coragem de Ser Imperfeito e A Coragem de Ser Vulnerável.',
      'Sua palestra sobre vulnerabilidade é uma das mais assistidas do formato.',
      'Estabeleceu a distinção prática entre vergonha e culpa.',
      'Aplicou a pesquisa sobre vulnerabilidade à liderança organizacional, em Dare to Lead.'
    ],
    cronologia: [
      [1965, 'Nasce em San Antonio, Texas, em 18 de novembro.'],
      [2010, 'Profere a palestra sobre o poder da vulnerabilidade.'],
      [2010, 'Publica A Coragem de Ser Imperfeito.'],
      [2012, 'Publica A Coragem de Ser Vulnerável.'],
      [2018, 'Publica Dare to Lead.']
    ]
  },

  'John Lennon': {
    papel: 'Músico e compositor britânico (1940–1980)',
    resumo: 'Cofundador dos Beatles, tornou-se figura política e foi assassinado aos quarenta anos em Nova York.',
    bio: [
      'John Winston Lennon nasceu em Liverpool em 9 de outubro de 1940, durante a guerra. O pai, marinheiro mercante, desapareceu da vida familiar, e a mãe entregou sua criação à irmã, tia Mimi. A mãe, Julia, que lhe ensinou banjo e reaproximou-se dele na adolescência, foi atropelada e morta quando ele tinha dezessete anos — perda que atravessa sua obra e que ele compartilhava com Paul McCartney, também órfão de mãe adolescente.',
      'Formou a banda em que McCartney e depois George Harrison entraram, e que se tornaria os Beatles. Entre 1962 e 1970, o grupo transformou a música popular em escala sem precedente. A parceria de composição com McCartney — que assinava todas as músicas conjuntamente, independentemente de quem escrevesse — produziu algumas das canções mais conhecidas do mundo.',
      'A partir de 1966, com Revolver e depois Sgt. Pepper, os Beatles abandonaram os shows e reinventaram o disco como forma artística. Lennon compôs Strawberry Fields Forever, A Day in the Life, Come Together e I Am the Walrus. Sua declaração de 1966 sobre a banda ser mais popular que Jesus provocou boicotes e queima de discos nos Estados Unidos.',
      'Com Yoko Ono, transformou a própria vida em manifesto pacifista — os protestos na cama durante a lua de mel, Give Peace a Chance, Imagine. O governo Nixon tentou deportá-lo por sua atuação contra a Guerra do Vietnã, e ele passou anos em disputa judicial. Afastou-se da música por cinco anos para criar o filho Sean e voltou em 1980 com Double Fantasy. Foi assassinado a tiros na entrada de seu prédio em Nova York em 8 de dezembro de 1980.'
    ],
    contexto: 'Lennon é a figura em que a música popular assumiu função política explícita em escala de massa. Sua trajetória — de banda de dancing de Liverpool a alvo de vigilância do FBI — mede a transformação do papel cultural do músico popular ao longo dos anos 1960.',
    contribuicoes: ['Cofundou os Beatles e formou com Paul McCartney uma das parcerias de composição mais influentes da história.', 'Compôs Strawberry Fields Forever, A Day in the Life, Come Together e Imagine.', 'Contribuiu para transformar o álbum em forma artística autônoma, com Revolver e Sgt. Pepper.', 'Usou a própria celebridade como plataforma pacifista durante a Guerra do Vietnã.'],
    cronologia: [
      [1940, 'Nasce em Liverpool, em 9 de outubro.'],
      [1957, 'Forma a banda que originaria os Beatles.'],
      [1962, 'Os Beatles gravam seu primeiro single.'],
      [1969, 'Casa-se com Yoko Ono e grava Give Peace a Chance.'],
      [1971, 'Lança Imagine.'],
      [1980, 'Lança Double Fantasy e é assassinado em Nova York, em 8 de dezembro.']
    ]
  },

  'Sophie Scholl': {
    papel: 'Estudante e resistente alemã (1921–1943)',
    resumo: 'Distribuiu panfletos contra Hitler numa universidade e foi executada aos vinte e um anos.',
    bio: [
      'Sophia Magdalena Scholl nasceu em Forchtenberg, Alemanha, em 9 de maio de 1921, filha de um prefeito de posições liberais e crítico do nazismo. Como quase todos os jovens de sua geração, entrou nas organizações juvenis do regime, com entusiasmo inicial, e afastou-se progressivamente à medida que percebeu o que elas eram. O pai foi preso por criticar Hitler em conversa privada, denunciado por uma funcionária.',
      'Trabalhou como professora de jardim de infância e cumpriu serviço nacional obrigatório antes de entrar, em 1942, na Universidade de Munique, para estudar biologia e filosofia. Ali reencontrou o irmão Hans, estudante de medicina que servira como enfermeiro no front oriental e voltara com relatos diretos sobre o extermínio de judeus e sobre a realidade da guerra.',
      'Hans e um grupo de estudantes haviam criado a Rosa Branca, que redigia, imprimia e distribuía panfletos convocando os alemães à resistência passiva e denunciando os crimes do regime. Sophie juntou-se ao grupo. Os panfletos eram enviados pelo correio e deixados em cabines telefônicas e universidades, com o pedido de que fossem copiados e repassados.',
      'Em 18 de fevereiro de 1943, Sophie e Hans levaram o sexto panfleto ao saguão da universidade. Ao sair, ela empurrou uma pilha restante do parapeito superior, e as folhas caíram sobre o átrio. Foram vistos pelo zelador e entregues à Gestapo. O julgamento ocorreu quatro dias depois, presidido por Roland Freisler, e a execução na guilhotina no mesmo dia, 22 de fevereiro. Sophie tinha vinte e um anos. O sexto panfleto foi contrabandeado para fora da Alemanha e milhões de cópias foram lançadas sobre o país por aviões aliados.'
    ],
    contexto: 'A Rosa Branca é a resistência civil não violenta mais conhecida dentro da Alemanha nazista, feita por estudantes sem estrutura, sem armas e sem apoio externo. Sophie Scholl tornou-se, no pós-guerra, uma das figuras morais centrais da memória alemã, justamente por não ter tido nenhum poder além da recusa.',
    contribuicoes: ['Integrou a Rosa Branca, grupo de resistência estudantil contra o regime nazista.', 'Participou da redação e distribuição dos panfletos que denunciaram publicamente os crimes do regime.', 'O sexto panfleto do grupo foi reproduzido pelos Aliados e lançado sobre a Alemanha.', 'Tornou-se uma das figuras centrais da memória da resistência alemã.'],
    cronologia: [
      [1921, 'Nasce em Forchtenberg, em 9 de maio.'],
      [1942, 'Ingressa na Universidade de Munique e integra a Rosa Branca.'],
      [1943, 'É presa em 18 de fevereiro e executada em 22 de fevereiro.']
    ],
    nota: 'Sophie Scholl foi julgada e executada em quatro dias, aos vinte e um anos, por distribuir panfletos.'
  },

  Eurípides: {
    papel: 'Dramaturgo grego (c. 480 a.C.–406 a.C.)',
    resumo: 'O mais moderno dos trágicos gregos, deu voz a mulheres, escravizados e estrangeiros e questionou os deuses.',
    bio: [
      'Eurípides nasceu em Salamina por volta de 480 a.C. As informações sobre sua vida são escassas e em grande parte lendárias, muitas delas provenientes das comédias de Aristófanes, que o satirizava sem piedade. Sabe-se que possuía uma biblioteca considerável, coisa rara na época, e que era ligado ao círculo dos sofistas e de Anaxágoras.',
      'Escreveu cerca de noventa peças e venceu apenas quatro ou cinco concursos dramáticos em vida — muito menos que Ésquilo e Sófocles. Foi, no entanto, o mais copiado e o mais lido depois da morte: sobreviveram dezoito ou dezenove de suas tragédias, contra sete de cada um dos outros dois, o que indica sua popularidade nas escolas e bibliotecas antigas.',
      'Sua diferença é de conteúdo e de tom. Onde Sófocles apresenta heróis, Eurípides apresenta pessoas — reis em farrapos, mulheres em fúria, escravizados que dizem verdades. Medeia, de 431 a.C., dá a uma mulher estrangeira e abandonada um discurso sobre a condição feminina que não tem paralelo na literatura antiga. As Troianas, encenada logo após Atenas massacrar a população de Melos, mostra a guerra inteiramente do ponto de vista das mulheres derrotadas.',
      'Questionou abertamente a justiça dos deuses e a lógica dos mitos, o que lhe rendeu acusações de impiedade. Deixou Atenas nos últimos anos e morreu na Macedônia em 406 a.C. Aristóteles o chamou de o mais trágico dos poetas, e sua influência sobre o teatro posterior — da comédia nova a Racine e ao drama moderno — é maior que a dos outros dois trágicos.'
    ],
    contexto: 'Eurípides escreve durante a Guerra do Peloponeso, enquanto Atenas cometia atrocidades que a cidade preferia não discutir. Suas peças colocam no palco justamente os que a guerra destrói e a cidade ignora, e é essa recusa da consolação heroica que o torna, entre os três trágicos, o mais próximo da sensibilidade moderna.',
    contribuicoes: [
      'Escreveu Medeia, As Troianas, As Bacantes, Hipólito e Ifigênia em Áulide.',
      'Deu protagonismo trágico a mulheres, estrangeiros e pessoas escravizadas.',
      'Questionou abertamente a justiça dos deuses e a coerência dos mitos.',
      'Suas peças sobreviveram em número muito maior que as dos outros trágicos gregos.',
      'Influenciou a comédia nova, o teatro romano, Racine e o drama moderno.'
    ],
    cronologia: [
      ['c. 480 a.C.', 'Nasce em Salamina.'],
      ['455 a.C.', 'Estreia em concurso dramático.'],
      ['431 a.C.', 'Encena Medeia.'],
      ['415 a.C.', 'Encena As Troianas, após o massacre de Melos.'],
      ['406 a.C.', 'Morre na Macedônia.'],
      ['405 a.C.', 'As Bacantes é encenada postumamente e vence o concurso.']
    ]
  },

  'Nathaniel Hawthorne': {
    papel: 'Escritor norte-americano (1804–1864)',
    resumo: 'Escreveu A Letra Escarlate e examinou a herança puritana da Nova Inglaterra com culpa e ambiguidade.',
    bio: [
      'Nathaniel Hathorne nasceu em Salem, Massachusetts, em 4 de julho de 1804. Acrescentou o w ao sobrenome na juventude, provavelmente para se distanciar de um antepassado que havia sido juiz nos julgamentos das bruxas de Salem, em 1692, e nunca demonstrara arrependimento. Essa herança de culpa puritana é a matéria central de sua obra. O pai, capitão de navio, morreu de febre amarela quando ele tinha quatro anos.',
      'Formou-se no Bowdoin College, onde foi colega de Longfellow e do futuro presidente Franklin Pierce. Passou doze anos recluso na casa da mãe, escrevendo e queimando a maior parte do que escrevia. Publicou seu primeiro romance por conta própria e depois recolheu e destruiu os exemplares.',
      'Trabalhou como funcionário da alfândega em Boston e em Salem e viveu brevemente na comunidade utópica de Brook Farm, experiência que o desiludiu e que rendeu um romance. Casou-se com Sophia Peabody e foi vizinho e amigo de Emerson, Thoreau e sobretudo de Herman Melville, que lhe dedicou Moby Dick.',
      'A Letra Escarlate, de 1850, acompanha Hester Prynne, condenada a usar a letra A bordada no vestido por adultério numa Boston puritana do século XVII, e o pastor que não confessa ser o pai da criança. O romance recusa a moral simples: a mulher marcada torna-se a figura mais íntegra, e a culpa oculta destrói mais do que a punição pública. Escreveu também A Casa das Sete Torres e contos como O Jovem Goodman Brown. Morreu em Plymouth, New Hampshire, em 19 de maio de 1864.'
    ],
    contexto: 'Hawthorne escreve numa Nova Inglaterra que celebrava seus fundadores puritanos como heróis da liberdade religiosa. Sua obra faz o oposto: examina o custo psicológico e moral daquele rigor, o peso da culpa herdada e a diferença entre o pecado cometido e o pecado escondido.',
    contribuicoes: ['Escreveu A Letra Escarlate (1850), um dos romances fundadores da literatura americana.', 'Escreveu A Casa das Sete Torres e contos como O Jovem Goodman Brown.', 'Examinou criticamente a herança puritana da Nova Inglaterra.', 'Foi figura central do romantismo sombrio americano, ao lado de Poe e Melville.'],
    cronologia: [
      [1804, 'Nasce em Salem, Massachusetts, em 4 de julho.'],
      [1841, 'Vive brevemente na comunidade utópica de Brook Farm.'],
      [1850, 'Publica A Letra Escarlate.'],
      [1851, 'Publica A Casa das Sete Torres; Melville lhe dedica Moby Dick.'],
      [1864, 'Morre em New Hampshire.']
    ]
  },

  'Henri Matisse': {
    papel: 'Pintor francês (1869–1954)',
    resumo: 'Liderou o fauvismo, libertou a cor da representação e criou nos últimos anos os recortes que reinventaram sua obra.',
    bio: [
      'Henri Émile Benoît Matisse nasceu em Le Cateau-Cambrésis, no norte da França, em 31 de dezembro de 1869, filho de um comerciante de grãos. Estudava direito e trabalhava como escriturário quando, aos vinte anos, uma apendicite o manteve meses acamado. A mãe lhe deu uma caixa de tintas para passar o tempo, e ele descreveu a experiência como a descoberta de uma espécie de paraíso. Abandonou o direito contra a vontade do pai.',
      'Estudou em Paris e passou por fases sucessivas antes de romper com a cor descritiva. Em 1905, no Salão de Outono, ele e um grupo de pintores expuseram telas de cores violentas e não naturalistas que levaram um crítico a chamá-los de feras — fauves. O rótulo pegou, e o fauvismo tornou-se o primeiro movimento de vanguarda do século XX.',
      'Sua obra explora por décadas a cor pura como estrutura, e não como preenchimento: A Dança, A Alegria de Viver, os interiores com janelas abertas, os odaliscas. Manteve com Picasso uma rivalidade e uma amizade longas, que ambos reconheciam como fundamentais — Picasso disse que, com a morte de Matisse, ele lhe deixara suas cores em herança.',
      'Em 1941, um câncer intestinal e uma cirurgia grave deixaram-no incapaz de ficar em pé diante do cavalete. Passou a trabalhar da cama e da cadeira de rodas com tesoura e papel pintado por assistentes, criando os recortes — gouaches découpées — que ele descreveu como desenhar com a tesoura. A série Jazz e as grandes composições finais são consideradas por muitos críticos o ponto mais alto de sua obra. Projetou também a Capela do Rosário em Vence. Morreu em Nice em 3 de novembro de 1954.'
    ],
    contexto: 'Matisse e Picasso são os dois eixos da arte do século XX, e representam caminhos opostos: onde Picasso desmonta a forma, Matisse liberta a cor. A reinvenção total de sua linguagem aos setenta anos, forçada pela doença, é um dos episódios mais notáveis da história da arte moderna.',
    contribuicoes: ['Liderou o fauvismo, primeiro movimento de vanguarda do século XX.', 'Libertou a cor da função descritiva, tornando-a estrutura da composição.', 'Pintou A Dança, A Alegria de Viver e a série de interiores com janelas.', 'Criou nos últimos anos os recortes em papel, reinventando a própria linguagem.', 'Projetou integralmente a Capela do Rosário em Vence.'],
    cronologia: [
      [1869, 'Nasce em Le Cateau-Cambrésis, em 31 de dezembro.'],
      [1890, 'Descobre a pintura durante convalescença.'],
      [1905, 'Expõe no Salão de Outono; nasce o fauvismo.'],
      [1910, 'Pinta A Dança.'],
      [1941, 'Cirurgia grave o obriga a trabalhar da cama.'],
      [1947, 'Publica Jazz, com os recortes em papel.'],
      [1951, 'Conclui a Capela do Rosário em Vence.'],
      [1954, 'Morre em Nice.']
    ]
  },

  'Douglas MacArthur': {
    papel: 'General norte-americano (1880–1964)',
    resumo: 'Comandou no Pacífico, ocupou o Japão e foi demitido por Truman por insubordinação na Coreia.',
    bio: [
      'Douglas MacArthur nasceu em Little Rock, Arkansas, em 26 de janeiro de 1880, filho de um general condecorado. Formou-se em West Point com a maior média registrada em vinte e cinco anos. Combateu na Primeira Guerra Mundial, foi condecorado várias vezes e tornou-se o mais jovem superintendente de West Point e depois chefe do Estado-Maior do Exército.',
      'Comandou a repressão à marcha dos veteranos em Washington, em 1932, com uso de cavalaria e tanques contra ex-combatentes que pediam pagamento de bônus — episódio que lhe custou reputação e que ele conduziu excedendo as ordens recebidas.',
      'Comandava as forças nas Filipinas quando os japoneses invadiram, em 1941. Foi retirado por ordem presidencial e prometeu publicamente voltar, o que fez em 1944. Conduziu a campanha do Pacífico por salto de ilhas e recebeu a rendição japonesa a bordo do encouraçado Missouri em setembro de 1945.',
      'Como comandante supremo da ocupação do Japão, entre 1945 e 1951, supervisionou a redação da constituição pacifista japonesa, a reforma agrária, a legalização de sindicatos, o sufrágio feminino e o desmonte dos conglomerados industriais — transformação que a historiografia reconhece como decisiva e conduzida com autoridade quase absoluta. Comandou as forças da ONU na Guerra da Coreia, executou o desembarque bem-sucedido em Inchon e depois avançou até a fronteira chinesa, provocando a entrada da China no conflito. Ao defender publicamente o uso de armas nucleares e criticar a política do governo, foi demitido por Truman em abril de 1951. Morreu em Washington em 5 de abril de 1964.'
    ],
    contexto: 'MacArthur é o caso mais grave de conflito entre comando militar e autoridade civil na história americana. Sua demissão por Truman, extremamente impopular na época, é hoje citada como afirmação decisiva do princípio de subordinação militar ao poder civil.',
    contribuicoes: ['Comandou as forças aliadas no Pacífico Sudoeste durante a Segunda Guerra Mundial.', 'Supervisionou a ocupação e a reconstrução institucional do Japão entre 1945 e 1951.', 'Conduziu o desembarque em Inchon, na Guerra da Coreia.', 'Sua demissão por Truman consolidou o princípio da subordinação militar à autoridade civil.'],
    cronologia: [
      [1880, 'Nasce em Little Rock, Arkansas, em 26 de janeiro.'],
      [1932, 'Comanda a repressão à marcha dos veteranos em Washington.'],
      [1942, 'Deixa as Filipinas por ordem presidencial.'],
      [1945, 'Recebe a rendição japonesa e assume a ocupação do Japão.'],
      [1950, 'Conduz o desembarque em Inchon.'],
      [1951, 'É demitido por Truman.'],
      [1964, 'Morre em Washington.']
    ]
  },

  'Reinhold Niebuhr': {
    papel: 'Teólogo norte-americano (1892–1971)',
    resumo: 'Formulou o realismo cristão e é o autor da oração da serenidade.',
    bio: [
      'Karl Paul Reinhold Niebuhr nasceu em Wright City, Missouri, em 21 de junho de 1892, filho de um pastor imigrante alemão. Formou-se em teologia em Yale e assumiu uma paróquia em Detroit, onde permaneceu treze anos. Foi essa experiência que o transformou: ao pastorear operários das fábricas de automóveis de Henry Ford, viu de perto as condições de trabalho na linha de montagem e abandonou o otimismo liberal com que se formara.',
      'Tornou-se professor no Union Theological Seminary, em Nova York, por mais de três décadas. Moral Man and Immoral Society, de 1932, formula sua tese central: indivíduos podem agir com altruísmo e sacrifício, mas grupos — nações, classes, corporações — são movidos por interesse coletivo e não respondem a apelos morais da mesma forma. Daí decorre que a justiça social depende de equilíbrio de poder, e não apenas de conversão moral.',
      'Chamou essa posição de realismo cristão. Aplicou-a contra o pacifismo absoluto no confronto com o nazismo, que ele foi dos primeiros teólogos americanos a considerar inegociável, e depois contra o triunfalismo americano na Guerra Fria, alertando que uma nação convencida da própria virtude é perigosa para si mesma.',
      'É o autor da oração que pede serenidade para aceitar o que não pode ser mudado, coragem para mudar o que pode e sabedoria para distinguir uma coisa da outra. Escrita provavelmente no início dos anos 1940, foi adotada pelos Alcoólicos Anônimos e por incontáveis grupos de recuperação, quase sempre sem atribuição. Sua influência sobre o pensamento político americano é ampla e atravessa espectros. Morreu em Stockbridge, Massachusetts, em 1º de junho de 1971.'
    ],
    contexto: 'Niebuhr escreve contra o otimismo do protestantismo liberal americano, que acreditava no progresso moral contínuo. A Depressão, o nazismo e depois a bomba atômica confirmaram seu diagnóstico, e é por isso que sua obra foi lida com atenção por gerações de formuladores de política externa.',
    contribuicoes: ['Formulou o realismo cristão e a distinção entre moralidade individual e comportamento de grupos.', 'Escreveu Moral Man and Immoral Society e A Natureza e o Destino do Homem.', 'É o autor da oração da serenidade, adotada mundialmente por grupos de recuperação.', 'Influenciou de forma ampla o pensamento político e a formulação de política externa americana.'],
    cronologia: [
      [1892, 'Nasce em Wright City, Missouri, em 21 de junho.'],
      [1915, 'Assume paróquia em Detroit.'],
      [1928, 'Torna-se professor no Union Theological Seminary.'],
      [1932, 'Publica Moral Man and Immoral Society.'],
      ['c. 1943', 'Escreve a oração da serenidade.'],
      [1971, 'Morre em Stockbridge, Massachusetts.']
    ]
  },

  'Lee Iacocca': {
    papel: 'Executivo automobilístico norte-americano (1924–2019)',
    resumo: 'Criou o Ford Mustang, foi demitido pela Ford e salvou a Chrysler da falência.',
    bio: [
      'Lido Anthony Iacocca nasceu em Allentown, Pensilvânia, em 15 de outubro de 1924, filho de imigrantes italianos que tinham uma lanchonete e uma locadora de automóveis. Teve febre reumática na adolescência, o que o impediu de servir na Segunda Guerra. Formou-se em engenharia e entrou na Ford em 1946 como trainee, migrando rapidamente da engenharia para vendas.',
      'Projetou-se com uma campanha regional de financiamento que aumentou drasticamente as vendas e foi adotada nacionalmente. Tornou-se responsável pela divisão Ford e liderou o desenvolvimento do Mustang, lançado em 1964 — um carro esportivo acessível dirigido ao público jovem do pós-guerra, que vendeu quatrocentas mil unidades no primeiro ano e criou uma categoria inteira.',
      'Chegou à presidência da Ford em 1970 e foi demitido em 1978 por Henry Ford II, num rompimento pessoal que se tornou célebre. Assumiu poucos meses depois a Chrysler, que estava à beira da falência.',
      'Conduziu a recuperação combinando corte drástico de custos, reduzindo o próprio salário a um dólar por ano, negociação com sindicatos e um empréstimo garantido pelo governo americano de um bilhão e meio de dólares — obtido após intensa campanha pública e no Congresso, e quitado sete anos antes do prazo. Lançou a minivan Caravan, que criou outra categoria de mercado. Tornou-se figura pública de enorme popularidade, apareceu nos próprios comerciais e presidiu a restauração da Estátua da Liberdade. Sua autobiografia, de 1984, foi o livro de não ficção mais vendido do ano. Morreu em Bel Air em 2 de julho de 2019.'
    ],
    contexto: 'Iacocca tornou-se, nos anos 1980, o executivo mais reconhecível dos Estados Unidos, num momento em que a indústria americana perdia terreno para a japonesa e o país buscava histórias de recuperação. O empréstimo à Chrysler foi o precedente citado em todos os debates posteriores sobre socorro governamental a empresas.',
    contribuicoes: [
      'Liderou o desenvolvimento do Ford Mustang, lançado em 1964.',
      'Conduziu a recuperação da Chrysler da beira da falência, quitando o empréstimo federal antes do prazo.',
      'Lançou a minivan, que criou uma nova categoria no mercado automobilístico.',
      'Presidiu a campanha de restauração da Estátua da Liberdade.',
      'Escreveu uma autobiografia que foi o livro de não ficção mais vendido de 1984.'
    ],
    cronologia: [
      [1924, 'Nasce em Allentown, Pensilvânia, em 15 de outubro.'],
      [1946, 'Entra na Ford como trainee.'],
      [1964, 'Lança o Ford Mustang.'],
      [1978, 'É demitido da Ford e assume a Chrysler.'],
      [1979, 'Obtém o empréstimo garantido pelo governo americano.'],
      [1984, 'Publica sua autobiografia.'],
      [2019, 'Morre em Bel Air, Califórnia.']
    ]
  },

  'Phil Jackson': {
    papel: 'Treinador de basquete norte-americano (1945–)',
    resumo: 'Conquistou onze títulos da NBA como técnico aplicando meditação e filosofia zen a equipes de estrelas.',
    bio: [
      'Philip Douglas Jackson nasceu em Deer Lodge, Montana, em 17 de setembro de 1945, filho de dois pastores pentecostais. Cresceu num ambiente religioso rígido, sem cinema, dança nem televisão. Jogou basquete na Universidade de Dakota do Norte e foi campeão da NBA como jogador pelo New York Knicks, em 1970 e 1973, num papel defensivo e sem destaque estatístico.',
      'Como jogador, aproximou-se do zen-budismo, da psicologia humanista e da espiritualidade dos povos indígenas americanos, temas que se tornariam parte de seu método. Treinou por anos em ligas menores antes de chegar ao Chicago Bulls como auxiliar e assumir o comando em 1989.',
      'Adotou o ataque triangular concebido por Tex Winter, sistema que exige leitura coletiva e distribui as decisões entre os cinco jogadores — escolha contraintuitiva num time com Michael Jordan, e justamente por isso decisiva: obrigou a equipe a não depender apenas dele. Conquistou seis títulos com os Bulls, em duas sequências de três.',
      'Assumiu o Los Angeles Lakers em 1999 e ganhou mais cinco títulos, com Shaquille O\u2019Neal e Kobe Bryant, administrando um conflito entre os dois que quase inviabilizou o time. Seu método incluía meditação em grupo, silêncio em treinos, distribuição de livros escolhidos individualmente para cada jogador e uso de rituais. Os onze títulos como técnico são o recorde da liga. Escreveu Cestas Sagradas e Onze Anéis.'
    ],
    contexto: 'Jackson trabalhou com alguns dos maiores talentos individuais da história do basquete e construiu seu método em torno de subordiná-los ao coletivo. Sua importância está menos nas ideias espirituais que trouxe do que no resultado concreto: fazer sistemas funcionarem com egos que, em tese, não caberiam no mesmo time.',
    contribuicoes: ['Conquistou onze títulos da NBA como técnico, recorde da liga.', 'Implantou o ataque triangular como sistema coletivo em equipes de grandes estrelas.', 'Introduziu meditação, atenção plena e práticas de foco no treinamento esportivo profissional.', 'Escreveu Cestas Sagradas e Onze Anéis.'],
    cronologia: [
      [1945, 'Nasce em Deer Lodge, Montana, em 17 de setembro.'],
      [1970, 'Conquista o título da NBA como jogador do New York Knicks.'],
      [1989, 'Assume o comando do Chicago Bulls.'],
      [1991, 'Conquista o primeiro de seis títulos com os Bulls.'],
      [1999, 'Assume o Los Angeles Lakers.'],
      [2010, 'Conquista seu décimo primeiro título como técnico.']
    ]
  },

  'Robert K. Greenleaf': {
    papel: 'Executivo e escritor norte-americano (1904–1990)',
    resumo: 'Formulou a liderança servidora, propondo que o líder legítimo é aquele que serve primeiro.',
    bio: [
      'Robert Kiefner Greenleaf nasceu em Terre Haute, Indiana, em 14 de julho de 1904. Formou-se em matemática e trabalhou trinta e oito anos na AT&T, então a maior empresa do mundo, chegando a diretor de pesquisa em gestão. Sua função era estudar como a organização funcionava por dentro, e ele passou décadas observando o que distinguia os executivos em quem as pessoas confiavam dos que apenas ocupavam cargos.',
      'Aposentou-se em 1964 e dedicou os anos seguintes a consultoria e escrita, atuando junto a universidades, fundações e organizações religiosas.',
      'O ensaio O Servidor como Líder, publicado em 1970, contém sua formulação. Greenleaf conta que a ideia lhe veio da leitura de Viagem ao Oriente, de Hermann Hesse, em que um grupo de viajantes é acompanhado por um servo chamado Leo, que cuida de tudo e mantém o grupo unido; quando Leo desaparece, o grupo se desfaz — e descobre-se depois que ele era o líder da ordem que patrocinava a viagem.',
      'Sua tese inverte a ordem habitual: o líder servidor começa pelo desejo natural de servir, e a escolha de liderar vem depois, como consequência. O teste que propôs é concreto: as pessoas servidas crescem, tornam-se mais saudáveis, mais sábias, mais livres, mais propensas a se tornarem elas próprias servidoras? E qual o efeito sobre os menos favorecidos da sociedade? Fundou o centro que leva seu nome. Morreu em Indiana em 29 de setembro de 1990.'
    ],
    contexto: 'Greenleaf escreve no fim dos anos 1960, num momento de contestação generalizada à autoridade institucional nos Estados Unidos. Sua proposta responde diretamente a isso: não abolir a liderança, mas fundá-la em legitimidade construída pelo serviço, e não pela posição.',
    contribuicoes: ['Formulou o conceito de liderança servidora, no ensaio O Servidor como Líder (1970).', 'Propôs um teste concreto de legitimidade baseado no crescimento das pessoas lideradas.', 'Fundou o centro de pesquisa dedicado ao tema, que segue ativo.', 'Sua obra tornou-se referência em gestão, educação e organizações do terceiro setor.'],
    cronologia: [
      [1904, 'Nasce em Terre Haute, Indiana, em 14 de julho.'],
      [1926, 'Entra na AT&T.'],
      [1964, 'Aposenta-se e funda seu centro de pesquisa em ética aplicada.'],
      [1970, 'Publica O Servidor como Líder.'],
      [1977, 'Publica Servant Leadership.'],
      [1990, 'Morre em Indiana.']
    ]
  },

  'Max De Pree': {
    papel: 'Empresário e escritor norte-americano (1924–2017)',
    resumo: 'Dirigiu a Herman Miller e escreveu que a primeira responsabilidade do líder é definir a realidade.',
    bio: [
      'Max Owen De Pree nasceu em Zeeland, Michigan, em 27 de outubro de 1924, filho do fundador da Herman Miller, fabricante de móveis. Serviu na Segunda Guerra Mundial e formou-se em economia antes de entrar na empresa da família.',
      'Assumiu a presidência em 1980. Sob sua direção, a Herman Miller consolidou-se como uma das empresas mais admiradas dos Estados Unidos, tanto pelo design — foi a fabricante das cadeiras de Charles e Ray Eames e do sistema de estações de trabalho que criou o escritório moderno — quanto pela gestão de pessoas.',
      'A empresa praticava, muito antes de virar tendência, participação nos lucros para todos os funcionários, propriedade acionária ampla, teto salarial que limitava a remuneração do executivo principal a um múltiplo do salário médio, e um sistema em que qualquer funcionário tinha um interlocutor formal para levar problemas acima de seu chefe direto.',
      'Liderança é uma Arte, publicado em 1987, nasceu dessa experiência. De Pree sustenta que a primeira responsabilidade do líder é definir a realidade e a última é dizer obrigado, e que entre as duas ele é servidor e devedor. Defende a noção de organização como pacto e não como contrato, e a obrigação de dar a cada pessoa o direito de contribuir com o que tem de melhor. Escreveu depois Liderança Jazz e Leading Without Power. Morreu em Holland, Michigan, em 8 de agosto de 2017.'
    ],
    contexto: 'De Pree escreveu a partir de uma empresa real que praticava o que ele defendia, o que distingue seu livro da literatura de gestão baseada em consultoria. A Herman Miller aparecia rotineiramente nas listas de empresas mais admiradas dos Estados Unidos durante sua gestão.',
    contribuicoes: ['Dirigiu a Herman Miller, referência em design industrial e em gestão de pessoas.', 'Escreveu Liderança é uma Arte (1987) e Liderança Jazz.', 'Implantou participação nos lucros, propriedade acionária ampla e teto salarial executivo.', 'Formulou a concepção da organização como pacto, e não como contrato.'],
    cronologia: [
      [1924, 'Nasce em Zeeland, Michigan, em 27 de outubro.'],
      [1980, 'Assume a presidência da Herman Miller.'],
      [1987, 'Publica Liderança é uma Arte.'],
      [1992, 'Publica Liderança Jazz.'],
      [2017, 'Morre em Holland, Michigan.']
    ]
  },

  'Nora Ephron': {
    papel: 'Escritora, roteirista e diretora norte-americana (1941–2012)',
    resumo: 'Reinventou a comédia romântica americana e escreveu ensaios de precisão cômica implacável.',
    bio: [
      'Nora Ephron nasceu em Nova York em 19 de maio de 1941, filha de dois roteiristas de Hollywood que transformavam episódios da vida familiar em material de trabalho — a peça Take Her, She\u2019s Mine foi baseada em cartas que ela escreveu da faculdade. A mãe lhe dizia que tudo é matéria de escrita, lição que Ephron seguiu literalmente.',
      'Começou como jornalista no New York Post e depois na revista Esquire, onde escreveu ensaios sobre temas que a imprensa séria considerava menores — seios, comida, feminismo, celebridade — com uma voz que misturava autoironia e observação social afiada.',
      'Quando seu casamento com o repórter Carl Bernstein terminou, durante uma gravidez, ela transformou o episódio no romance Heartburn, depois adaptado ao cinema. Passou ao roteiro e recebeu três indicações ao Oscar, por Silkwood, Harry e Sally e Sintonia de Amor.',
      'Harry e Sally, de 1989, redefiniu a comédia romântica ao construir o filme sobre conversa e não sobre obstáculos externos. Ephron passou à direção com Sintonia de Amor e Mensagem para Você, e mais tarde Julie e Julia. Seus livros de ensaios, entre eles Não Me Lembro de Nada e Estou Louca Para Comer Você, tratam de envelhecimento, memória e perda com humor deliberadamente seco. Manteve em segredo a leucemia de que sofria, revelada apenas na morte, em Nova York, em 26 de junho de 2012.'
    ],
    contexto: 'Ephron trouxe para o cinema mainstream uma voz feminina que era engraçada sem ser autodepreciativa, e para o ensaio um registro que tratava a vida cotidiana com a mesma seriedade formal reservada a assuntos elevados. Ambos os movimentos abriram caminho para uma geração de escritoras e roteiristas.',
    contribuicoes: ['Escreveu o roteiro de Harry e Sally, que redefiniu a comédia romântica americana.', 'Recebeu três indicações ao Oscar de melhor roteiro.', 'Dirigiu Sintonia de Amor, Mensagem para Você e Julie e Julia.', 'Escreveu Heartburn e coletâneas de ensaios sobre envelhecimento, memória e vida cotidiana.'],
    cronologia: [
      [1941, 'Nasce em Nova York, em 19 de maio.'],
      [1983, 'Publica Heartburn e é indicada ao Oscar por Silkwood.'],
      [1989, 'Escreve Harry e Sally.'],
      [1993, 'Dirige Sintonia de Amor.'],
      [2009, 'Dirige Julie e Julia.'],
      [2012, 'Morre em Nova York.']
    ]
  },

  'Laurel Thatcher Ulrich': {
    papel: 'Historiadora norte-americana (1938–)',
    resumo: 'Ganhou o Pulitzer estudando o diário de uma parteira e escreveu a frase sobre mulheres bem-comportadas raramente fazerem história.',
    bio: [
      'Laurel Thatcher Ulrich nasceu em Sugar City, Idaho, em 11 de julho de 1938, em família mórmon. Casou-se cedo, teve cinco filhos e completou o doutorado já na meia-idade, na Universidade de New Hampshire. Tornou-se professora em Harvard, onde ocupou cátedra e dirigiu programas de estudos.',
      'Sua frase mais conhecida nasceu num artigo acadêmico de 1976 sobre mulheres puritanas — a observação de que mulheres bem-comportadas raramente fazem história era literal: as mulheres piedosas e obedientes dos sermões funerários da Nova Inglaterra não deixavam registro justamente porque nada nelas exigia explicação. A frase escapou do artigo, virou adesivo, camiseta e caneca, e passou a ser usada com o sentido oposto ao que ela pretendia. Ulrich escreveu depois um livro inteiro sobre esse mal-entendido.',
      'A História de uma Parteira, de 1990, é sua obra maior. Parte do diário de Martha Ballard, parteira do Maine que registrou entre 1785 e 1812 quase todos os dias de vinte e sete anos — partos, doenças, tecelagem, dívidas, tempo. Historiadores anteriores haviam descartado o documento como trivial e repetitivo. Ulrich mostrou que era o oposto: um registro sistemático da economia doméstica, da medicina rural e da vida das mulheres que nenhuma outra fonte preserva.',
      'O livro recebeu o Pulitzer de história em 1991 e o Bancroft, e tornou-se um modelo do que a história das mulheres pode extrair de fontes consideradas sem importância. Escreveu também sobre têxteis como documento histórico e sobre a poligamia mórmon do século XIX.'
    ],
    contexto: 'Ulrich pertence à geração que transformou a história das mulheres em disciplina, e sua contribuição específica foi metodológica: mostrar que a ausência de mulheres nos registros históricos não é falta de material, e sim resultado do que gerações de historiadores decidiram considerar digno de leitura.',
    contribuicoes: ['Escreveu A História de uma Parteira, vencedor do Pulitzer de história em 1991.', 'Demonstrou o valor histórico de fontes domésticas descartadas como triviais.', 'É a autora da frase sobre mulheres bem-comportadas raramente fazerem história.', 'Escreveu sobre têxteis e objetos domésticos como documentos históricos.'],
    cronologia: [
      [1938, 'Nasce em Sugar City, Idaho, em 11 de julho.'],
      [1976, 'Escreve o artigo de onde vem sua frase mais conhecida.'],
      [1990, 'Publica A História de uma Parteira.'],
      [1991, 'Recebe o Prêmio Pulitzer de história.'],
      [2007, 'Publica o livro sobre a história da própria frase.']
    ],
    nota: 'A frase sobre mulheres bem-comportadas raramente fazerem história é de Ulrich, e não de Marilyn Monroe ou Eleanor Roosevelt, a quem é frequentemente atribuída. Seu sentido original era descritivo, não um chamado à rebeldia.'
  },

  'Sholom Aleichem': {
    papel: 'Escritor iídiche russo-americano (1859–1916)',
    resumo: 'Criou Tevye, o leiteiro, e fez do iídiche uma língua literária moderna.',
    bio: [
      'Solomon Naumovich Rabinovich nasceu em Pereiaslav, na atual Ucrânia, em 2 de março de 1859. Adotou como pseudônimo a saudação iídiche que significa a paz esteja convosco. Perdeu a mãe de cólera aos treze anos e teve uma madrasta cujo repertório de insultos ele compilou em ordem alfabética — sua primeira obra.',
      'Trabalhou como professor particular, casou-se com uma aluna de família rica e herdou uma fortuna que perdeu especulando na bolsa de Kiev. Passou a viver da escrita, e usou parte dos recursos, enquanto os teve, para financiar outros autores em iídiche.',
      'Escrevia numa língua que a intelectualidade judaica desprezava. O hebraico era a língua sagrada e o russo a da cultura; o iídiche era o jargão, a fala doméstica das massas pobres do Leste Europeu. Sholom Aleichem, com Mendele e Peretz, transformou-o em língua literária plena, com romances, contos e peças.',
      'Suas histórias sobre Tevye, o leiteiro — homem pobre que conversa com Deus e vê as filhas romperem uma a uma com a tradição — foram escritas ao longo de vinte anos e originaram, décadas depois, o musical Um Violinista no Telhado. Fugiu dos pogroms de Kiev em 1905 e emigrou para Nova York. Morreu ali em 13 de maio de 1916, e seu funeral reuniu uma das maiores multidões da história da cidade. O testamento pedia que a família lesse uma de suas histórias em voz alta a cada aniversário de sua morte, e que rissem.'
    ],
    contexto: 'Sholom Aleichem escreve sobre um mundo — as aldeias judaicas do Leste Europeu — que seria destruído poucas décadas depois pelos pogroms e pelo Holocausto. Sua obra é, por isso, o principal registro literário dessa vida, e o humor com que a retratou é inseparável da precariedade que descrevia.',
    contribuicoes: ['Criou Tevye, o leiteiro, e as histórias que originaram Um Violinista no Telhado.', 'Foi decisivo na transformação do iídiche em língua literária moderna.', 'Escreveu Menachem-Mendl, Motl e dezenas de contos que registram a vida judaica do Leste Europeu.', 'Financiou a publicação de outros autores em iídiche.'],
    cronologia: [
      [1859, 'Nasce em Pereiaslav, em 2 de março.'],
      [1883, 'Publica seus primeiros textos em iídiche.'],
      [1894, 'Escreve as primeiras histórias de Tevye.'],
      [1905, 'Foge dos pogroms de Kiev.'],
      [1914, 'Estabelece-se definitivamente em Nova York.'],
      [1916, 'Morre em Nova York.']
    ]
  },

  'Christine Lagarde': {
    papel: 'Advogada e economista francesa (1956–)',
    resumo: 'Primeira mulher a dirigir o FMI e a presidir o Banco Central Europeu.',
    bio: [
      'Christine Madeleine Odette Lallouette nasceu em Paris em 1º de janeiro de 1956. Foi integrante da equipe francesa de nado sincronizado na adolescência, com medalha em campeonato nacional. Perdeu o pai aos dezessete anos. Estudou nos Estados Unidos com bolsa e formou-se em direito, tendo sido recusada duas vezes pela Escola Nacional de Administração francesa.',
      'Entrou no escritório de advocacia americano Baker McKenzie em 1981 e tornou-se, em 1999, a primeira mulher a presidir a firma globalmente, cargo que ocupou por seis anos.',
      'Voltou à França para a política, foi ministra do Comércio e depois ministra das Finanças entre 2007 e 2011 — a primeira mulher a ocupar a pasta num país do G7. Conduziu a resposta francesa à crise financeira de 2008.',
      'Assumiu a direção do Fundo Monetário Internacional em 2011, tornando-se a primeira mulher no cargo, e conduziu a instituição durante a crise da dívida europeia, com os programas para Grécia, Portugal e Irlanda — período em que o próprio FMI reconheceu ter subestimado o efeito recessivo da austeridade imposta. Em 2019 tornou-se a primeira mulher a presidir o Banco Central Europeu, cargo em que enfrentou a pandemia e o choque inflacionário posterior. Foi condenada em 2016 por negligência num caso de arbitragem de sua época como ministra, sem pena aplicada e sem registro criminal.'
    ],
    contexto: 'Lagarde ocupou sucessivamente três posições em que nenhuma mulher havia estado antes, em instituições cujas decisões afetam economias inteiras. Sua trajetória é frequentemente citada tanto como marco de representação quanto no debate sobre os efeitos sociais das políticas de austeridade que ajudou a conduzir.',
    contribuicoes: ['Foi a primeira mulher a dirigir o Fundo Monetário Internacional.', 'Foi a primeira mulher a presidir o Banco Central Europeu.', 'Foi a primeira mulher ministra das Finanças de um país do G7.', 'Foi a primeira mulher a presidir globalmente o escritório Baker McKenzie.', 'Conduziu a resposta institucional à crise da dívida da zona do euro.'],
    cronologia: [
      [1956, 'Nasce em Paris, em 1º de janeiro.'],
      [1999, 'Torna-se presidente global do escritório Baker McKenzie.'],
      [2007, 'Assume o Ministério das Finanças da França.'],
      [2011, 'Torna-se diretora-gerente do FMI.'],
      [2019, 'Assume a presidência do Banco Central Europeu.']
    ],
    nota: 'Lagarde foi condenada em 2016 por negligência em caso relativo a sua atuação como ministra, sem aplicação de pena e sem registro criminal.'
  },

  'São Jerônimo': {
    papel: 'Tradutor e teólogo cristão (c. 347–420)',
    resumo: 'Traduziu a Bíblia para o latim a partir do hebraico e do grego, produzindo a versão usada por mil anos no Ocidente.',
    bio: [
      'Eusébio Sofrônio Jerônimo nasceu em Estridão, na fronteira da Dalmácia, por volta de 347. Estudou gramática e retórica em Roma com os melhores mestres e adquiriu um domínio do latim clássico que seria decisivo. Levou uma juventude mundana da qual escreveria com remorso, e converteu-se plenamente já adulto.',
      'Passou anos como eremita no deserto da Síria, período em que aprendeu hebraico com um judeu convertido — decisão incomum e essencial, já que quase nenhum cristão daquele tempo sabia a língua. Serviu depois como secretário do papa Dâmaso I, em Roma, que o encarregou de revisar as traduções latinas dos evangelhos, então múltiplas, divergentes e feitas por copistas de latim precário.',
      'Sua escolha foi mais radical que a tarefa recebida: em vez de corrigir as versões latinas a partir do grego, traduziu o Antigo Testamento diretamente do hebraico, contra a opinião de Agostinho e de boa parte da Igreja, que considerava a tradução grega dos Setenta inspirada por Deus. Jerônimo argumentou que era preciso ir à verdade hebraica.',
      'Instalou-se em Belém em 386, com apoio financeiro da nobre romana Paula, e trabalhou ali por mais de trinta anos. O resultado ficou conhecido como Vulgata — a versão comum — e tornou-se o texto bíblico oficial do cristianismo ocidental por mais de mil anos, moldando o vocabulário teológico do latim e, por extensão, das línguas europeias. Era polemista feroz e fez inimigos duradouros. Morreu em Belém em 420 e é padroeiro dos tradutores.'
    ],
    contexto: 'Jerônimo trabalha no momento em que o cristianismo se torna religião oficial do Império e precisa de textos estáveis. Sua decisão de recorrer ao original hebraico, contra o consenso de sua época, é um marco na história da tradução e antecipa em mil anos o princípio filológico que os humanistas renascentistas adotariam.',
    contribuicoes: ['Traduziu a Bíblia para o latim a partir do hebraico e do grego, produzindo a Vulgata.', 'Estabeleceu o princípio de recorrer aos textos originais contra as traduções intermediárias.', 'Escreveu comentários bíblicos, cartas e obras de história eclesiástica.', 'É padroeiro dos tradutores e doutor da Igreja.'],
    cronologia: [
      ['c. 347', 'Nasce em Estridão, na Dalmácia.'],
      ['c. 375', 'Vive como eremita no deserto da Síria e aprende hebraico.'],
      [382, 'Torna-se secretário do papa Dâmaso I em Roma.'],
      [386, 'Instala-se em Belém.'],
      [405, 'Conclui a tradução do Antigo Testamento a partir do hebraico.'],
      [420, 'Morre em Belém.']
    ]
  },

  Cleantes: {
    papel: 'Filósofo estoico grego (c. 330 a.C.–c. 230 a.C.)',
    resumo: 'Foi lutador e carregador de água antes de suceder Zenão à frente da escola estoica.',
    bio: [
      'Cleantes nasceu em Assos, na Ásia Menor, por volta de 330 a.C. Segundo a tradição, foi pugilista e chegou a Atenas com pouquíssimo dinheiro. Sustentou-se durante os anos de estudo carregando água e moendo grãos à noite, para poder assistir às aulas de dia — a ponto de ser convocado a explicar aos magistrados atenienses de onde vinha seu sustento, já que não era visto trabalhando em nenhum ofício reconhecido.',
      'Era considerado lento por seus colegas, que o apelidavam de asno. Ele aceitava o apelido, dizendo que apenas um asno seria capaz de carregar o peso dos ensinamentos de Zenão. Estudou por quase vinte anos e sucedeu Zenão de Cítio na direção da escola estoica por volta de 262 a.C., permanecendo à frente dela por mais de trinta anos.',
      'Sua contribuição foi menos de originalidade do que de consolidação: manteve e transmitiu a doutrina estoica num período em que ela poderia ter se dispersado, e a preparou para Crisipo, seu sucessor, que a sistematizaria por completo. Deu ênfase particular à física e à teologia estoicas, com uma concepção do cosmos governado por uma razão divina imanente.',
      'O Hino a Zeus é sua obra mais conhecida e o texto mais longo do estoicismo primitivo que sobreviveu completo. É uma oração filosófica que trata a divindade como razão universal e pede a capacidade de seguir voluntariamente o destino — formulação que reaparece em Epicteto e em Sêneca. Morreu por volta de 230 a.C., segundo a tradição por inanição voluntária, após ter parado de comer por prescrição médica e ter decidido não recomeçar.'
    ],
    contexto: 'Cleantes é a ponte entre a fundação do estoicismo por Zenão e sua sistematização por Crisipo. Sua trajetória — de lutador pobre a diretor de escola filosófica — corresponde ao próprio princípio estoico de que a virtude não depende de origem, riqueza nem talento natural.',
    contribuicoes: ['Sucedeu Zenão de Cítio na direção da escola estoica, por mais de trinta anos.', 'Escreveu o Hino a Zeus, texto mais longo do estoicismo primitivo preservado íntegro.', 'Desenvolveu a física e a teologia estoicas, com a concepção do cosmos regido por razão imanente.', 'Preservou e transmitiu a doutrina até a sistematização feita por Crisipo.'],
    cronologia: [
      ['c. 330 a.C.', 'Nasce em Assos, na Ásia Menor.'],
      ['c. 280 a.C.', 'Torna-se discípulo de Zenão em Atenas.'],
      ['c. 262 a.C.', 'Assume a direção da escola estoica.'],
      ['c. 230 a.C.', 'Morre em Atenas.']
    ],
    nota: 'Das obras de Cleantes sobreviveu praticamente apenas o Hino a Zeus. O restante é conhecido por fragmentos e relatos posteriores.'
  }
};

Object.assign(PANORAMAS_F19, {
  'Michael J. Fox': {
    papel: 'Ator canadense-americano (1961–)',
    resumo: 'Anunciou aos trinta e sete anos que tinha Parkinson e criou a maior fundação privada de pesquisa sobre a doença.',
    bio: [
      'Michael Andrew Fox nasceu em Edmonton, Canadá, em 9 de junho de 1961, numa família que se mudava constantemente por causa da carreira militar do pai. Abandonou o ensino médio aos dezoito para tentar a carreira em Los Angeles, onde passou um período em dificuldade financeira extrema, vendendo móveis para comer.',
      'Projetou-se na série Family Ties, em que interpretava um adolescente conservador em família de ex-hippies, e depois com De Volta para o Futuro, em 1985, que o tornou uma das maiores estrelas do cinema mundial. Chegou a filmar a trilogia enquanto gravava a série, dormindo poucas horas por noite durante meses.',
      'Recebeu o diagnóstico de doença de Parkinson de início precoce em 1991, aos trinta anos. Escondeu-o por sete anos, período em que continuou trabalhando e passou por cirurgia, além de enfrentar alcoolismo — que ele descreve como tentativa de não encarar o diagnóstico. Tornou o quadro público em 1998.',
      'Criou em 2000 a Fundação Michael J. Fox, que se tornou a maior financiadora privada de pesquisa sobre Parkinson no mundo, com investimento de bilhões de dólares e um modelo de financiamento voltado a resultados e não a instituições. Depôs no Congresso americano em defesa da pesquisa com células-tronco, o que o colocou no centro de disputa política. Continuou atuando enquanto pôde, com papéis que incorporavam a própria condição, e escreveu quatro livros de memórias. Recebeu o Oscar humanitário Jean Hersholt em 2022.'
    ],
    contexto: 'Fox transformou a própria doença de assunto privado em plataforma de pesquisa organizada, num momento em que o Parkinson recebia atenção pública mínima. Sua fundação mudou concretamente a forma como a pesquisa sobre a doença é financiada, e não apenas o volume de recursos.',
    contribuicoes: ['Criou a Fundação Michael J. Fox, maior financiadora privada de pesquisa sobre Parkinson no mundo.', 'Depôs no Congresso americano em defesa do financiamento à pesquisa com células-tronco.', 'Protagonizou De Volta para o Futuro e a série Family Ties.', 'Escreveu quatro livros de memórias sobre a convivência com a doença.', 'Recebeu o Oscar humanitário Jean Hersholt em 2022.'],
    cronologia: [
      [1961, 'Nasce em Edmonton, Canadá, em 9 de junho.'],
      [1982, 'Estreia em Family Ties.'],
      [1985, 'Protagoniza De Volta para o Futuro.'],
      [1991, 'Recebe o diagnóstico de Parkinson.'],
      [1998, 'Torna o diagnóstico público.'],
      [2000, 'Cria sua fundação de pesquisa.'],
      [2022, 'Recebe o Oscar humanitário.']
    ]
  },

  'Norman Schwarzkopf': {
    papel: 'General norte-americano (1934–2012)',
    resumo: 'Comandou as forças da coalizão na Guerra do Golfo e tornou-se figura pública pelas coletivas diárias do conflito.',
    bio: [
      'H. Norman Schwarzkopf Jr. nasceu em Trenton, Nova Jersey, em 22 de agosto de 1934. O pai era oficial e chefiou a polícia estadual, tendo conduzido a investigação do sequestro do filho de Charles Lindbergh. Passou parte da adolescência no Irã, onde o pai treinava a polícia local, e estudou também na Suíça e na Alemanha.',
      'Formou-se em West Point e serviu dois períodos no Vietnã, sendo ferido duas vezes e condecorado por bravura — entre outras ações, entrou num campo minado para resgatar soldados feridos. A experiência no Vietnã marcou profundamente sua concepção de guerra: rejeitava o envio de tropas sem objetivo claro, sem força suficiente e sem apoio público.',
      'Comandou a Operação Tempestade no Deserto, em 1991, à frente de uma coalizão de dezenas de países que expulsou as forças iraquianas do Kuwait. A campanha terrestre durou cem horas, após semanas de bombardeio aéreo, e sua manobra de contorno pelo oeste — que a imprensa chamou de gancho de esquerda — surpreendeu completamente o dispositivo defensivo iraquiano.',
      'Tornou-se figura pública pelas coletivas de imprensa diárias, transmitidas ao vivo, com mapas e vídeos, num conflito que foi o primeiro coberto pela televisão em tempo real. Ganhou o apelido de Urso Tempestuoso por seu temperamento. Aposentou-se logo após a guerra, recusou repetidos convites para disputar cargos políticos e dedicou-se a causas ligadas a veteranos e a crianças com câncer. Morreu em Tampa em 27 de dezembro de 2012.'
    ],
    contexto: 'Schwarzkopf comandou a primeira grande operação americana após o Vietnã, e a doutrina aplicada — objetivo definido, força esmagadora, coalizão ampla, saída rápida — foi construída deliberadamente contra a experiência anterior. A decisão de não avançar sobre Bagdá, cumprindo o mandato da ONU, permanece objeto de debate.',
    contribuicoes: ['Comandou as forças da coalizão internacional na Guerra do Golfo, em 1991.', 'Aplicou a doutrina de objetivo definido, força esmagadora e coalizão ampla.', 'Suas coletivas diárias marcaram o primeiro conflito coberto pela televisão em tempo real.', 'Dedicou-se, após a aposentadoria, a causas ligadas a veteranos e a crianças com câncer.'],
    cronologia: [
      [1934, 'Nasce em Trenton, Nova Jersey, em 22 de agosto.'],
      [1965, 'Serve o primeiro período no Vietnã.'],
      [1988, 'Assume o Comando Central americano.'],
      [1991, 'Comanda a Operação Tempestade no Deserto.'],
      [1992, 'Aposenta-se e publica sua autobiografia.'],
      [2012, 'Morre em Tampa, Flórida.']
    ]
  },

  'Rosalynn Carter': {
    papel: 'Ativista norte-americana, primeira-dama dos Estados Unidos (1927–2023)',
    resumo: 'Transformou a saúde mental e o cuidado de cuidadores em causa pública nos Estados Unidos.',
    bio: [
      'Eleanor Rosalynn Smith nasceu em Plains, Geórgia, em 18 de agosto de 1927. O pai morreu de leucemia quando ela tinha treze anos, e ela assumiu boa parte do cuidado dos irmãos mais novos e do trabalho de costura da mãe. Casou-se com Jimmy Carter em 1946, aos dezoito anos.',
      'Quando o marido assumiu a fazenda de amendoim da família, ela administrava a contabilidade do negócio, e participou ativamente de todas as campanhas eleitorais dele. Como primeira-dama da Geórgia, envolveu-se com a reforma do sistema estadual de saúde mental.',
      'Como primeira-dama dos Estados Unidos, entre 1977 e 1981, rompeu com o protocolo: assistia às reuniões de gabinete, representou o presidente em missões diplomáticas na América Latina e presidiu a comissão presidencial de saúde mental, cujo trabalho resultou na Lei de Sistemas de Saúde Mental de 1980 — legislação que foi em grande parte revogada no governo seguinte. Depôs no Senado, algo então inédito para uma primeira-dama.',
      'Após a Casa Branca, cofundou com o marido o Centro Carter, atuando em observação eleitoral, mediação de conflitos e saúde pública, com papel decisivo na erradicação de doenças tropicais negligenciadas. Criou um instituto dedicado especificamente aos cuidadores — pessoas que cuidam de familiares doentes ou idosos —, campo que praticamente não existia como categoria de política pública, e escreveu sobre o tema. Trabalhou por décadas em mutirões de construção de casas populares. Morreu em Plains em 19 de novembro de 2023.'
    ],
    contexto: 'Rosalynn Carter atuou num período em que doença mental era assunto de vergonha familiar nos Estados Unidos, e dedicou mais de cinquenta anos a torná-la assunto de política pública. Sua atenção aos cuidadores — pessoas invisíveis para o sistema de saúde — antecedeu em décadas o reconhecimento do tema.',
    contribuicoes: ['Presidiu a comissão presidencial de saúde mental, que originou a lei de 1980.', 'Cofundou o Centro Carter, com atuação em observação eleitoral e saúde pública global.', 'Criou um instituto dedicado ao apoio a cuidadores familiares.', 'Foi a primeira primeira-dama a depor perante o Senado americano.', 'Recebeu a Medalha Presidencial da Liberdade em 1999.'],
    cronologia: [
      [1927, 'Nasce em Plains, Geórgia, em 18 de agosto.'],
      [1946, 'Casa-se com Jimmy Carter.'],
      [1977, 'Torna-se primeira-dama dos Estados Unidos.'],
      [1980, 'É aprovada a Lei de Sistemas de Saúde Mental.'],
      [1982, 'Cofunda o Centro Carter.'],
      [2023, 'Morre em Plains.']
    ]
  },

  'Robert M. Hutchins': {
    papel: 'Educador norte-americano (1899–1977)',
    resumo: 'Tornou-se reitor da Universidade de Chicago aos trinta anos e defendeu um currículo baseado nos grandes livros.',
    bio: [
      'Robert Maynard Hutchins nasceu em Brooklyn, Nova York, em 17 de janeiro de 1899, filho de um pastor presbiteriano. Serviu como maqueiro na Primeira Guerra Mundial, formou-se em Yale e tornou-se decano da faculdade de direito da universidade aos vinte e oito anos.',
      'Aos trinta, foi nomeado presidente da Universidade de Chicago, cargo que ocupou por duas décadas. Sua gestão foi das mais controversas da história universitária americana. Aboliu o futebol americano da universidade em 1939, argumentando que o espetáculo esportivo era incompatível com uma instituição dedicada ao pensamento — decisão que gerou revolta entre ex-alunos e que ele nunca reconsiderou.',
      'Reformulou o currículo de graduação em torno dos grandes livros do Ocidente, com ênfase em leitura direta das fontes e discussão em seminário, em oposição ao modelo de especialização precoce e de disciplinas eletivas fragmentadas. Sustentava que a universidade deve formar a capacidade de pensar, e não treinar para um emprego, e que a educação é o que sobra depois que se esquece o que foi aprendido.',
      'Organizou com Mortimer Adler a coleção Great Books of the Western World, em cinquenta e quatro volumes. Sua gestão também abrigou o experimento nuclear que produziu a primeira reação em cadeia controlada, em 1942. Defendeu a liberdade acadêmica contra investigações anticomunistas e presidiu depois fundações dedicadas à educação e às instituições democráticas. Morreu em Santa Barbara em 14 de maio de 1977.'
    ],
    contexto: 'Hutchins formulou a defesa mais consistente da educação liberal geral contra a especialização utilitária, num período em que a universidade americana caminhava aceleradamente na direção oposta. Sua posição foi derrotada na prática e continua a ser o principal ponto de referência de todo debate sobre currículo universitário.',
    contribuicoes: [
      'Presidiu a Universidade de Chicago por duas décadas, a partir dos trinta anos.',
      'Reformulou o currículo de graduação em torno dos grandes livros e da discussão em seminário.',
      'Organizou com Mortimer Adler a coleção Great Books of the Western World.',
      'Aboliu o futebol americano da universidade em nome da vocação intelectual da instituição.',
      'Defendeu a liberdade acadêmica durante as investigações anticomunistas.'
    ],
    cronologia: [
      [1899, 'Nasce em Brooklyn, em 17 de janeiro.'],
      [1929, 'Torna-se presidente da Universidade de Chicago, aos trinta anos.'],
      [1936, 'Publica The Higher Learning in America.'],
      [1939, 'Abole o futebol americano na universidade.'],
      [1952, 'Publica a coleção Great Books of the Western World.'],
      [1977, 'Morre em Santa Barbara.']
    ]
  },

  'Jacques Maritain': {
    papel: 'Filósofo francês (1882–1973)',
    resumo: 'Renovou o tomismo no século XX e participou da redação da Declaração Universal dos Direitos Humanos.',
    bio: [
      'Jacques Maritain nasceu em Paris em 18 de novembro de 1882, em família protestante liberal. Estudou na Sorbonne e conheceu Raïssa Oumançoff, estudante judia russa com quem se casaria. Ambos, angustiados com o cientificismo que dominava a universidade, chegaram a fazer um pacto de suicídio caso não encontrassem sentido para a existência em um ano.',
      'Foram salvos, segundo o próprio relato, pelas aulas de Henri Bergson e depois pelo encontro com o escritor Léon Bloy, que os conduziu ao catolicismo. Converteram-se em 1906. Maritain descobriu Tomás de Aquino em 1910 e dedicou-lhe o resto da vida, não como comentarista mas como pensador que aplicava a metafísica tomista a problemas contemporâneos.',
      'Rompeu publicamente com a Ação Francesa, movimento católico de extrema-direita, quando ela foi condenada pelo Vaticano em 1926, e tornou-se um dos principais adversários católicos do fascismo e do antissemitismo. Passou a Segunda Guerra nos Estados Unidos, lecionando em Princeton e Columbia e falando pelo rádio à França ocupada.',
      'Humanismo Integral, de 1936, formula sua concepção de uma sociedade pluralista fundada na dignidade da pessoa, distinta tanto do liberalismo individualista quanto do coletivismo. Foi embaixador da França no Vaticano e chefiou a delegação francesa na Unesco, participando dos trabalhos que resultaram na Declaração Universal dos Direitos Humanos de 1948 — onde defendeu que povos de convicções filosóficas opostas podiam concordar sobre direitos práticos ainda que discordassem sobre seus fundamentos. Influenciou diretamente o Concílio Vaticano II e a democracia cristã. Morreu em Toulouse em 28 de abril de 1973.'
    ],
    contexto: 'Maritain demonstrou que o pensamento católico podia fundamentar a democracia e os direitos humanos, contra a tradição que o associava ao antiliberalismo. Sua influência sobre a Declaração de 1948 e sobre o Concílio Vaticano II fez dessa demonstração um fato histórico, e não apenas uma tese.',
    contribuicoes: [
      'Renovou o tomismo aplicando-o a problemas políticos e estéticos contemporâneos.',
      'Escreveu Humanismo Integral (1936), sobre uma sociedade pluralista fundada na pessoa.',
      'Participou dos trabalhos preparatórios da Declaração Universal dos Direitos Humanos.',
      'Foi adversário público do fascismo e do antissemitismo dentro do catolicismo.',
      'Influenciou o Concílio Vaticano II e os partidos democrata-cristãos europeus.'
    ],
    cronologia: [
      [1882, 'Nasce em Paris, em 18 de novembro.'],
      [1906, 'Converte-se ao catolicismo com Raïssa.'],
      [1926, 'Rompe publicamente com a Ação Francesa.'],
      [1936, 'Publica Humanismo Integral.'],
      [1945, 'Torna-se embaixador da França no Vaticano.'],
      [1948, 'Participa dos trabalhos da Declaração Universal dos Direitos Humanos.'],
      [1973, 'Morre em Toulouse.']
    ]
  },

  'Abul Kalam Azad': {
    papel: 'Erudito islâmico e político indiano (1888–1958)',
    resumo: 'Opôs-se à partição da Índia e foi o primeiro ministro da Educação do país independente.',
    bio: [
      'Abul Kalam Ghulam Muhiyuddin Ahmed nasceu em Meca em 11 de novembro de 1888, filho de um erudito islâmico indiano e de uma árabe. A família voltou a Calcutá quando ele tinha dez anos. Recebeu educação islâmica tradicional em casa, aprendeu árabe, persa e urdu e estudou por conta própria filosofia, história e ciências, além de inglês, contra a vontade do pai. Adotou o nome Azad, que significa livre.',
      'Começou a escrever aos onze anos e aos vinte já editava publicações. Fundou em 1912 o semanário Al-Hilal, que rompia com o quietismo político da liderança muçulmana indiana da época e convocava os muçulmanos a se unirem aos hindus contra o domínio britânico. A publicação foi proibida, e Azad foi preso e internado por anos.',
      'Tornou-se o mais jovem presidente do Congresso Nacional Indiano, aos trinta e cinco, e voltou a presidi-lo entre 1940 e 1946 — período decisivo, em que conduziu as negociações com os britânicos e enfrentou a ascensão da Liga Muçulmana de Jinnah.',
      'Foi o principal opositor muçulmano à partição. Argumentava que o islã indiano não precisava de um Estado separado, que a divisão não resolveria a questão comunitária e que deixaria milhões de muçulmanos como minoria vulnerável na Índia — previsão que ele registrou por escrito e que a violência de 1947 confirmou em parte. Perdeu essa disputa. Foi ministro da Educação de 1947 a 1958, criando o sistema de institutos de tecnologia, a comissão de bolsas universitárias e as academias nacionais de letras e artes. Morreu em Délhi em 22 de fevereiro de 1958. Seu aniversário é o Dia Nacional da Educação na Índia.'
    ],
    contexto: 'Azad representa a posição derrotada na formação da Índia contemporânea: a de que muçulmanos e hindus poderiam constituir uma nação única. Sua importância cresceu com o tempo justamente porque a história posterior tornou seus argumentos objeto de discussão permanente nos dois países.',
    contribuicoes: [
      'Foi o principal opositor muçulmano à partição da Índia.',
      'Presidiu o Congresso Nacional Indiano no período decisivo das negociações de independência.',
      'Foi o primeiro ministro da Educação da Índia independente, por onze anos.',
      'Criou o sistema de institutos de tecnologia e as academias nacionais de letras e artes.',
      'Fundou o semanário Al-Hilal e escreveu comentário influente sobre o Corão.'
    ],
    cronologia: [
      [1888, 'Nasce em Meca, em 11 de novembro.'],
      [1912, 'Funda o semanário Al-Hilal.'],
      [1923, 'Torna-se o mais jovem presidente do Congresso Nacional Indiano.'],
      [1940, 'Reassume a presidência do Congresso.'],
      [1947, 'Torna-se ministro da Educação da Índia independente.'],
      [1958, 'Morre em Délhi.']
    ]
  },

  'Nicolas Hayek': {
    papel: 'Empresário libanês-suíço (1928–2010)',
    resumo: 'Salvou a indústria relojoeira suíça da extinção criando o Swatch.',
    bio: [
      'Nicolas George Hayek nasceu em Beirute em 19 de fevereiro de 1928, filho de um dentista americano de origem libanesa e de uma libanesa. Estudou matemática, física e química na Universidade de Lyon e mudou-se para a Suíça, onde se casou e fundou uma consultoria de engenharia industrial em 1963.',
      'No início dos anos 1980, a indústria relojoeira suíça estava em colapso. A chegada dos relógios eletrônicos de quartzo japoneses e de baixo custo havia reduzido a participação suíça no mercado mundial de mais de quarenta por cento para menos de dez, e o emprego no setor caíra em dois terços. Os bancos credores contrataram Hayek para avaliar a liquidação de dois grandes grupos falidos.',
      'Ele recomendou o oposto: fundi-los e atacar diretamente o segmento popular, que os suíços haviam abandonado por considerá-lo indigno de sua tradição. Convenceu os bancos e investiu o próprio dinheiro, tornando-se o maior acionista do grupo resultante.',
      'O Swatch, lançado em 1983, tinha cinquenta e uma peças em vez das noventa e uma habituais, caixa plástica selada e produção altamente automatizada — e era vendido não como instrumento de precisão, mas como acessório de moda, com coleções sazonais e edições de artistas. Vendeu centenas de milhões de unidades. O lucro do segmento popular financiou a recuperação das marcas de luxo do grupo, entre elas Omega, Longines e Breguet. Hayek dirigiu o conjunto até a morte, em Biel, em 28 de junho de 2010.'
    ],
    contexto: 'O caso Swatch tornou-se estudo de caso obrigatório em escolas de negócios por contrariar duas intuições: que uma indústria de alto custo não pode competir em preço, e que uma marca tradicional se desvaloriza ao entrar no segmento popular. Hayek demonstrou o contrário nos dois pontos.',
    contribuicoes: ['Salvou a indústria relojoeira suíça do colapso diante da concorrência japonesa.', 'Criou o Swatch, que vendeu centenas de milhões de unidades.', 'Conduziu a fusão que originou o maior grupo relojoeiro do mundo.', 'Recuperou marcas tradicionais como Omega, Longines e Breguet.', 'Participou do desenvolvimento inicial do conceito que originaria o automóvel Smart.'],
    cronologia: [
      [1928, 'Nasce em Beirute, em 19 de fevereiro.'],
      [1963, 'Funda sua consultoria de engenharia industrial na Suíça.'],
      [1983, 'Lança o Swatch.'],
      [1985, 'Torna-se acionista majoritário do grupo relojoeiro.'],
      [2010, 'Morre em Biel, Suíça.']
    ]
  },

  'Luiz Gasparetto': {
    papel: 'Psicólogo e médium brasileiro (1949–2018)',
    resumo: 'Ficou conhecido por pintar no escuro atribuindo as obras a pintores mortos, e depois dedicou-se a palestras sobre autoconhecimento.',
    bio: [
      'Luiz Antonio Gasparetto nasceu em São Paulo em 11 de agosto de 1949, filho de Zibia Gasparetto, escritora espírita de grande circulação no Brasil. Formou-se em psicologia pela Pontifícia Universidade Católica de São Paulo e atuou clinicamente.',
      'Tornou-se figura nacional nos anos 1970 e 1980 por demonstrações em que pintava rapidamente, no escuro ou sob luz vermelha, às vezes com as duas mãos simultaneamente e de cabeça para baixo, atribuindo as obras a pintores mortos como Renoir, Van Gogh, Toulouse-Lautrec e Portinari. As apresentações eram exibidas em programas de televisão de grande audiência e produziram enorme repercussão.',
      'A atribuição das obras é objeto de contestação. Não há verificação independente que sustente a autoria dos pintores citados, e a habilidade demonstrada é explicável por treinamento e por técnicas de execução rápida — a discussão pertence ao campo da crença religiosa, e não ao da constatação factual.',
      'Nas décadas seguintes, deslocou o foco para palestras, programas de rádio e televisão e livros sobre autoconhecimento, autoestima, prosperidade e relações, combinando vocabulário espírita com psicologia popular. Publicou dezenas de títulos, entre eles Reflexões e Faça Dar Certo. Manteve grande público até o fim. Morreu em São Paulo em 25 de outubro de 2018.'
    ],
    contexto: 'Gasparetto atuou na interseção entre espiritismo, psicologia popular e televisão de massa, campo de forte presença cultural no Brasil. Sua trajetória é inseparável do papel que a mídia teve na difusão de práticas mediúnicas no país a partir dos anos 1970.',
    contribuicoes: ['Tornou-se a figura mais conhecida da pintura mediúnica no Brasil.', 'Escreveu dezenas de livros sobre autoconhecimento, autoestima e relações.', 'Manteve por décadas programas de rádio e televisão de grande audiência.'],
    cronologia: [
      [1949, 'Nasce em São Paulo, em 11 de agosto.'],
      [1978, 'Ganha projeção nacional com demonstrações de pintura em televisão.'],
      [1990, 'Amplia a atuação em palestras e livros de autoconhecimento.'],
      [2018, 'Morre em São Paulo.']
    ],
    nota: 'A atribuição das pinturas a artistas falecidos não tem verificação independente e pertence ao campo da crença religiosa, não ao da constatação factual.'
  },

  'Magalhães Pinto': {
    papel: 'Banqueiro e político brasileiro (1909–1996)',
    resumo: 'Governador de Minas Gerais, foi peça central na articulação civil do golpe de 1964.',
    bio: [
      'José de Magalhães Pinto nasceu em Santo Antônio do Monte, Minas Gerais, em 28 de junho de 1909. Formou-se em direito e construiu carreira no setor financeiro, fundando o Banco Nacional de Minas Gerais, que se tornaria um dos maiores bancos privados do país.',
      'Foi deputado federal pela União Democrática Nacional, partido de oposição a Getúlio Vargas, e chegou a presidir a legenda. Elegeu-se governador de Minas Gerais em 1960.',
      'Sua atuação em 1964 foi decisiva. Magalhães Pinto articulou o apoio civil e empresarial à deposição de João Goulart, lançou o manifesto que serviu de justificativa pública ao movimento e autorizou a saída das tropas mineiras comandadas pelo general Mourão Filho, que iniciaram a marcha sobre o Rio de Janeiro. A adesão de Minas foi um dos fatores que tornaram a operação viável.',
      'Foi ministro das Relações Exteriores entre 1967 e 1969, no governo Costa e Silva, período em que foi editado o Ato Institucional número 5. Distanciou-se progressivamente do regime, tentou sem sucesso lançar-se candidato a presidente em 1972 e passou à oposição, integrando o MDB e depois participando da campanha pelas eleições diretas. Elegeu-se senador. Morreu no Rio de Janeiro em 6 de junho de 1996.'
    ],
    contexto: 'Magalhães Pinto pertence ao grupo de políticos civis liberais que participaram ativamente da derrubada de um governo eleito em 1964 e depois se afastaram do regime militar que ajudaram a instalar. Essa trajetória — apoio inicial, ruptura posterior — é comum a boa parte da elite política brasileira do período e é parte central de sua avaliação histórica.',
    contribuicoes: ['Fundou o Banco Nacional de Minas Gerais, um dos maiores bancos privados do país.', 'Foi governador de Minas Gerais e ministro das Relações Exteriores.', 'Presidiu a União Democrática Nacional.', 'Elegeu-se senador e participou da campanha pelas eleições diretas nos anos 1980.'],
    cronologia: [
      [1909, 'Nasce em Santo Antônio do Monte, Minas Gerais, em 28 de junho.'],
      [1944, 'Funda o Banco Nacional.'],
      [1960, 'Elege-se governador de Minas Gerais.'],
      [1964, 'Articula o apoio civil ao golpe militar.'],
      [1967, 'Torna-se ministro das Relações Exteriores.'],
      [1996, 'Morre no Rio de Janeiro.']
    ],
    nota: 'Magalhães Pinto teve papel articulador central no golpe militar de 1964, fato documentado que integra sua trajetória política.'
  },

  'Walter Winchell': {
    papel: 'Jornalista norte-americano (1897–1972)',
    resumo: 'Inventou a coluna de fofocas moderna e chegou a ser lido ou ouvido por dois terços dos americanos adultos.',
    bio: [
      'Walter Winchell nasceu em Nova York em 7 de abril de 1897, em família judaica pobre. Abandonou a escola na sexta série e trabalhou no vaudeville como dançarino e cantor desde os treze anos. Começou a escrever notas sobre o meio artístico em murais de bastidores, e daí passou ao jornal.',
      'Criou nos anos 1920 uma coluna que misturava notícias de celebridades, casamentos, divórcios, negócios e política, escrita numa gíria própria que ele inventava e que entrou no vocabulário americano. Foi o primeiro a tratar a vida privada de figuras públicas como pauta jornalística sistemática — invenção que originou toda a imprensa de celebridades posterior.',
      'Seu programa de rádio dominical, iniciado em 1932, era transmitido em ritmo acelerado, com efeito sonoro de telégrafo ao fundo, e abria com a saudação ao senhor e à senhora América e a todos os navios no mar. No auge, estima-se que sua coluna e seu programa alcançassem dois terços da população adulta do país.',
      'Usou esse poder de forma agressiva. Foi dos primeiros nos Estados Unidos a atacar Hitler e o antissemitismo, ainda nos anos 1930, quando o isolacionismo era dominante — e apoiou depois o senador Joseph McCarthy, destruindo reputações de pessoas acusadas de comunismo. Após a queda de McCarthy e a ascensão da televisão, perdeu público rapidamente. Morreu em Los Angeles em 20 de fevereiro de 1972, praticamente esquecido; apenas sua filha compareceu ao funeral.'
    ],
    contexto: 'Winchell é o inventor de uma forma de poder que não existia antes: a do jornalista capaz de fabricar e destruir reputações em escala nacional, sem cargo nem instituição por trás. Sua trajetória, do combate ao nazismo à colaboração com o macartismo, é o caso mais estudado dos riscos desse poder.',
    contribuicoes: ['Criou a coluna de fofocas moderna e o jornalismo sistemático sobre celebridades.', 'Introduziu no vocabulário americano dezenas de gírias que ele próprio inventou.', 'Foi um dos primeiros jornalistas americanos a atacar publicamente Hitler e o antissemitismo.', 'Seu programa de rádio alcançou audiência sem precedente para um comentarista.'],
    cronologia: [
      [1897, 'Nasce em Nova York, em 7 de abril.'],
      [1924, 'Começa a escrever a coluna que o tornaria conhecido.'],
      [1932, 'Estreia seu programa de rádio dominical.'],
      [1951, 'Apoia publicamente o senador Joseph McCarthy.'],
      [1972, 'Morre em Los Angeles.']
    ],
    nota: 'Winchell apoiou ativamente o macartismo e usou sua coluna para destruir reputações de pessoas acusadas de comunismo.'
  },

  'Charles Kuralt': {
    papel: 'Jornalista norte-americano (1934–1997)',
    resumo: 'Percorreu os Estados Unidos em uma van por vinte e cinco anos contando histórias de pessoas comuns.',
    bio: [
      'Charles Bishop Kuralt nasceu em Wilmington, Carolina do Norte, em 10 de setembro de 1934, filho de um assistente social. Venceu aos catorze anos um concurso nacional de redação, prêmio que incluiu conhecer o então presidente Truman. Formou-se em jornalismo e trabalhou em jornal antes de entrar na rede de televisão CBS em 1957, aos vinte e três anos.',
      'Tornou-se o mais jovem correspondente da emissora e cobriu a Guerra do Vietnã, a América Latina e conflitos internacionais. Cansado da rotina de notícias urgentes, propôs em 1967 um projeto que a direção considerou improvável: percorrer o país numa van, sem pauta definida, procurando histórias de pessoas comuns em lugares pequenos.',
      'A série On the Road durou vinte e cinco anos, e Kuralt gastou seis vans. As reportagens não tratavam de política nem de crime: um homem que colecionava bolas de barbante, uma professora aposentada, um ferreiro, uma estrada de terra no outono. Seu texto era curto, preciso e sem sentimentalismo, e a série tornou-se uma das mais premiadas da televisão americana, com múltiplos Emmys e prêmios Peabody.',
      'Apresentou também o programa Sunday Morning, que estabeleceu um ritmo deliberadamente lento na televisão dominical e permanece no ar. Aposentou-se em 1994. Morreu em Nova York em 4 de julho de 1997. Após sua morte, veio a público que ele mantivera por quase trinta anos uma segunda família em Montana, desconhecida de sua esposa, o que gerou disputa judicial sobre a herança.'
    ],
    contexto: 'Kuralt criou um contraponto deliberado ao jornalismo de televisão baseado em urgência e conflito, demonstrando que existia audiência nacional para reportagem lenta sobre pessoas sem importância pública. Seu formato influenciou gerações de repórteres.',
    contribuicoes: ['Criou a série On the Road, que percorreu os Estados Unidos por vinte e cinco anos.', 'Estabeleceu na televisão americana o formato da reportagem de ritmo lento sobre pessoas comuns.', 'Apresentou o programa Sunday Morning, ainda no ar décadas depois.', 'Recebeu múltiplos prêmios Emmy e Peabody.'],
    cronologia: [
      [1934, 'Nasce em Wilmington, Carolina do Norte, em 10 de setembro.'],
      [1957, 'Entra na rede CBS.'],
      [1967, 'Inicia a série On the Road.'],
      [1979, 'Estreia como apresentador do Sunday Morning.'],
      [1994, 'Aposenta-se.'],
      [1997, 'Morre em Nova York.']
    ]
  },

  'George Burns': {
    papel: 'Comediante e ator norte-americano (1896–1996)',
    resumo: 'Atravessou o vaudeville, o rádio, o cinema e a televisão, e ganhou seu primeiro Oscar aos oitenta anos.',
    bio: [
      'Nathan Birnbaum nasceu em Nova York em 20 de janeiro de 1896, nono de doze filhos de imigrantes judeus. O pai morreu na epidemia de gripe de 1903, e ele começou a trabalhar aos sete anos. Entrou no vaudeville ainda menino, trocando de nome e de número artístico a cada fracasso — e foram muitos.',
      'Em 1923 conheceu Gracie Allen, e a dupla trocou de papéis quase por acidente: ele havia escrito as piadas para si e as respostas diretas para ela, mas a plateia ria das respostas dela. Burns passou o resto da carreira como o parceiro que alimenta as piadas alheias, decisão profissional que ele considerava a mais inteligente que tomou.',
      'Burns e Allen tiveram enorme sucesso no rádio a partir de 1932 e depois na televisão, num programa em que Burns rompia a quarta parede e comentava a ação diretamente com o público — recurso incomum e décadas à frente de seu tempo. Casaram-se em 1926 e trabalharam juntos até a aposentadoria dela, em 1958. Gracie morreu em 1964, e ele visitou seu túmulo mensalmente pelo resto da vida.',
      'Passou anos sem grande projeção até que Walter Matthau o indicou para Sunshine Boys, em 1975. Ganhou o Oscar de melhor ator coadjuvante aos oitenta anos, tornando-se então o mais velho a recebê-lo, e a carreira reacendeu — protagonizou a série de filmes Oh, God! e trabalhou até os noventa e poucos. Fumava charutos diariamente desde os catorze anos. Morreu em Beverly Hills em 9 de março de 1996, quarenta e nove dias após completar cem anos.'
    ],
    contexto: 'Burns atravessou todas as tecnologias do entretenimento popular do século XX, do palco de vaudeville sem microfone à televisão em cores. Sua longevidade profissional é praticamente sem paralelo, e o segundo auge de sua carreira ocorreu quando ele tinha idade em que quase ninguém trabalha.',
    contribuicoes: [
      'Formou com Gracie Allen uma das duplas cômicas mais influentes do rádio e da televisão americanos.',
      'Introduziu na televisão o recurso de dirigir-se diretamente ao público, décadas antes de sua popularização.',
      'Ganhou o Oscar de melhor ator coadjuvante aos oitenta anos, por Sunshine Boys.',
      'Trabalhou profissionalmente por mais de oitenta anos, do vaudeville aos noventa e poucos.'
    ],
    cronologia: [
      [1896, 'Nasce em Nova York, em 20 de janeiro.'],
      [1923, 'Forma dupla com Gracie Allen.'],
      [1932, 'Estreia no rádio o programa da dupla.'],
      [1950, 'Estreia na televisão.'],
      [1975, 'Ganha o Oscar por Sunshine Boys.'],
      [1996, 'Morre em Beverly Hills, aos cem anos.']
    ]
  },

  'Robert Collier': {
    papel: 'Escritor norte-americano (1885–1950)',
    resumo: 'Foi um dos maiores redatores de venda por correspondência de seu tempo e escreveu sobre o poder da mente.',
    bio: [
      'Robert Collier nasceu em St. Louis, Missouri, em 19 de abril de 1885, sobrinho de Peter Fenelon Collier, fundador da editora e da revista Collier\u2019s. Estudou para o sacerdócio e desistiu, trabalhou em engenharia de minas na Virgínia Ocidental por oito anos e entrou depois na editora do tio.',
      'Tornou-se um dos redatores de venda por correspondência mais eficazes da história americana. Sua abordagem, exposta em The Robert Collier Letter Book, de 1931, rompia com o anúncio agressivo então corrente: defendia que a carta de venda deve entrar na conversa que já está acontecendo na cabeça do leitor, falar de seus interesses antes dos do vendedor e construir confiança antes de pedir a compra. O livro continua sendo leitura básica de redação publicitária quase um século depois.',
      'Paralelamente, escreveu sobre o que chamava de poder criativo da mente. O Segredo das Eras, de 1926, em sete volumes, sustenta que o pensamento dirigido, a visualização e a fé influenciam os resultados materiais da vida — tese que pertence à tradição do Novo Pensamento americano, corrente do fim do século XIX que também influenciou Napoleon Hill e a literatura de autoajuda posterior.',
      'Essa vertente de sua obra não tem sustentação científica e é objeto de crítica pelas mesmas razões que a chamada lei da atração: não há evidência de que pensamento produza efeito direto sobre circunstâncias externas. Sua contribuição verificável está no campo da redação persuasiva. Morreu em 1950.'
    ],
    contexto: 'Collier reúne, na mesma obra, uma contribuição técnica concreta — a redação de vendas baseada em empatia com o leitor — e uma vertente metafísica sem base empírica. Essa combinação é característica da literatura americana de sucesso da primeira metade do século XX.',
    contribuicoes: ['Escreveu The Robert Collier Letter Book, referência duradoura em redação de vendas.', 'Formulou o princípio de entrar na conversa que já ocorre na mente do leitor.', 'Escreveu O Segredo das Eras, obra da tradição do Novo Pensamento americano.'],
    cronologia: [
      [1885, 'Nasce em St. Louis, Missouri, em 19 de abril.'],
      [1926, 'Publica O Segredo das Eras.'],
      [1931, 'Publica The Robert Collier Letter Book.'],
      [1950, 'Morre nos Estados Unidos.']
    ],
    nota: 'A vertente metafísica da obra de Collier, sobre o poder da mente em produzir circunstâncias, não tem sustentação científica.'
  },

  'Ring Lardner': {
    papel: 'Escritor e cronista esportivo norte-americano (1885–1933)',
    resumo: 'Levou a fala coloquial americana ao conto e influenciou Hemingway e Fitzgerald.',
    bio: [
      'Ringgold Wilmer Lardner nasceu em Niles, Michigan, em 6 de março de 1885, numa família próspera. Nasceu com uma deformidade no pé que exigiu aparelhos ortopédicos na infância. Tentou engenharia sem sucesso e entrou no jornalismo por acaso, cobrindo esportes num jornal local.',
      'Tornou-se um dos cronistas esportivos mais lidos do país, com coluna sindicalizada em centenas de jornais. Cobria beisebol convivendo diretamente com os jogadores, e absorveu a fala deles — a gíria, a sintaxe torta, a vaidade e a burrice ditas em primeira pessoa sem que o falante percebesse.',
      'You Know Me Al, de 1916, é feito de cartas de um arremessador de beisebol semianalfabeto e convencido, que se revela ao leitor a cada frase sem jamais se dar conta. Virginia Woolf escreveu que Lardner era o melhor prosador americano de seu tempo. Contos como Haircut e The Golden Honeymoon aplicam o mesmo procedimento: um narrador que se condena pela própria voz.',
      'Foi vizinho e amigo de Scott Fitzgerald, que o incentivou a publicar em livro e o usou parcialmente como modelo para uma personagem de O Grande Gatsby. Hemingway assinava paródias de Lardner ainda na escola. Sofria de alcoolismo grave e tuberculose. Morreu em East Hampton em 25 de setembro de 1933, aos quarenta e oito anos.'
    ],
    contexto: 'Lardner é uma das pontes entre o jornalismo esportivo e a literatura americana moderna. Seu uso da voz coloquial como instrumento de ironia — deixar o narrador se expor sem intervenção do autor — antecede e informa a prosa de Hemingway e de boa parte do conto americano posterior.',
    contribuicoes: ['Escreveu You Know Me Al e contos como Haircut, marcos do uso da voz coloquial na ficção americana.', 'Foi um dos cronistas esportivos mais lidos dos Estados Unidos.', 'Influenciou diretamente Hemingway, Fitzgerald e o conto americano do século XX.', 'Desenvolveu a técnica do narrador que se expõe involuntariamente pela própria fala.'],
    cronologia: [
      [1885, 'Nasce em Niles, Michigan, em 6 de março.'],
      [1913, 'Assume coluna esportiva sindicalizada no Chicago Tribune.'],
      [1916, 'Publica You Know Me Al.'],
      [1924, 'Publica How to Write Short Stories.'],
      [1933, 'Morre em East Hampton, aos 48 anos.']
    ]
  },

  'Elizabeth Stone': {
    papel: 'Escritora e professora norte-americana (1946–)',
    resumo: 'Professora de literatura e jornalismo, é autora de uma frase sobre maternidade amplamente citada sem atribuição.',
    bio: [
      'Elizabeth Stone nasceu em 1946 e é professora de inglês, literatura e jornalismo na Universidade Fordham, em Nova York, onde leciona há décadas. Doutorou-se em literatura e dedica-se sobretudo ao estudo da narrativa e do papel das histórias na construção da identidade.',
      'Seu livro Black Sheep and Kissing Cousins, de 1988, estuda as histórias que as famílias contam sobre si mesmas — o parente que fugiu, o antepassado heroico, o escândalo nunca mencionado — e mostra como esses relatos, mais do que os fatos, formam a identidade de quem cresce ouvindo-os.',
      'É desse livro que vem a frase sobre a decisão de ter um filho ser a decisão de aceitar para sempre que o coração passe a andar fora do próprio corpo. A formulação circula amplamente em cartões, redes sociais e discursos, quase sempre sem atribuição ou creditada a autores diversos.',
      'Escreveu também A Boy I Once Knew, sobre a experiência de receber os diários de um antigo aluno que a nomeou como destinatária de seus papéis ao morrer de aids, e publicou ensaios e reportagens em veículos americanos de grande circulação.'
    ],
    contexto: 'O caso de Stone é exemplar de como uma formulação precisa se descola da autora quando circula em massa. A frase é citada em milhões de contextos, e a maioria de quem a repete nunca soube que ela pertence a um livro acadêmico sobre narrativa familiar.',
    contribuicoes: ['Escreveu Black Sheep and Kissing Cousins, sobre o papel das histórias familiares na formação da identidade.', 'É a autora da formulação sobre ter um filho e o coração andar fora do corpo.', 'Escreveu A Boy I Once Knew.', 'Leciona literatura e jornalismo na Universidade Fordham.'],
    cronologia: [
      [1946, 'Nasce nos Estados Unidos.'],
      [1988, 'Publica Black Sheep and Kissing Cousins.'],
      [2002, 'Publica A Boy I Once Knew.']
    ],
    nota: 'A frase sobre o coração andar fora do corpo é de Elizabeth Stone, de Black Sheep and Kissing Cousins (1988), e circula quase sempre sem atribuição ou creditada a outros autores.'
  },

  'Donald McGannon': {
    papel: 'Executivo de radiodifusão norte-americano (1920–1984)',
    resumo: 'Dirigiu um grupo de emissoras nos Estados Unidos e defendeu a responsabilidade pública da televisão.',
    bio: [
      'Donald Henry McGannon nasceu em Nova York em 9 de setembro de 1920. Formou-se em direito na Universidade Fordham e serviu no exército durante a Segunda Guerra Mundial. Entrou na radiodifusão em 1952 e assumiu no ano seguinte a presidência do grupo Westinghouse Broadcasting, conhecido como Group W, cargo que ocupou por quase três décadas.',
      'Sua atuação foi marcada por uma concepção incomum no setor: a de que a licença de radiodifusão é uma concessão pública e que a emissora tem obrigações que não se reduzem à audiência. Recusou-se a exibir determinados programas de rede quando os considerou de baixa qualidade, decisão que lhe custou receita e atrito com as grandes redes.',
      'Foi o principal responsável por uma mudança regulatória de efeito duradouro: sua campanha junto à comissão federal de comunicações resultou na regra que limitava o tempo de programação de rede em horário nobre, obrigando as emissoras locais a produzir ou adquirir conteúdo próprio — norma que abriu espaço para a produção independente na televisão americana.',
      'Criou programas de debate público e de acesso comunitário, e foi um dos primeiros executivos do setor a promover deliberadamente a contratação de profissionais negros em funções de destaque, incluindo apresentadores, numa indústria em que isso era raro. Presidiu associações do setor e recebeu prêmios pela defesa da radiodifusão de interesse público. Morreu em 1984.'
    ],
    contexto: 'McGannon atuou no período em que a televisão americana se consolidava como negócio de massa dominado por três redes. Sua defesa da autonomia das emissoras locais e da responsabilidade pública da concessão foi posição minoritária e teve efeito regulatório concreto.',
    contribuicoes: [
      'Presidiu por quase três décadas o grupo de radiodifusão Westinghouse.',
      'Sua campanha resultou na regra que limitou o tempo de programação de rede em horário nobre.',
      'Recusou exibir programas de rede que considerava de baixa qualidade.',
      'Promoveu a contratação de profissionais negros em funções de destaque na televisão.',
      'Criou programas de debate público e acesso comunitário.'
    ],
    cronologia: [
      [1920, 'Nasce em Nova York, em 9 de setembro.'],
      [1955, 'Assume a presidência do grupo Westinghouse Broadcasting.'],
      [1970, 'Entra em vigor a regra sobre acesso em horário nobre, que ele defendeu.'],
      [1981, 'Deixa a presidência do grupo.'],
      [1984, 'Morre nos Estados Unidos.']
    ]
  }
});

const OBRAS_F19 = {
  'Gottfried Wilhelm Leibniz': [
    [
      'Teodiceia',
      'livro',
      1710,
      'Único livro de filosofia que Leibniz publicou em vida, responde ao problema do mal: se Deus é bom e onipotente, por que existe sofrimento? Sua resposta é que Deus, podendo criar infinitos mundos possíveis, escolheu aquele que maximiza o bem no conjunto, ainda que contenha males particulares. A tese do melhor dos mundos possíveis foi satirizada por Voltaire em Cândido, leitura que dominou sua recepção popular.'
    ],
    ['Monadologia', 'livro', 1714, 'Texto breve, de noventa parágrafos, que expõe a metafísica das mônadas: substâncias simples, sem partes e sem janelas, que não interagem entre si mas espelham cada uma o universo inteiro, coordenadas por uma harmonia preestabelecida por Deus. É a exposição mais concentrada do sistema filosófico de Leibniz.'],
    ['Novos Ensaios sobre o Entendimento Humano', 'livro', 1765, 'Resposta ponto a ponto ao Ensaio de John Locke, escrita em forma de diálogo. Leibniz recusa a tese da mente como folha em branco e sustenta que nada está no intelecto que não tenha estado antes nos sentidos, exceto o próprio intelecto. Guardou o manuscrito ao saber da morte de Locke e ele só foi publicado meio século depois.']
  ],
  'Stephen Covey': [
    [
      'Os 7 Hábitos das Pessoas Altamente Eficazes',
      'livro',
      1989,
      'Organiza-se em três etapas — da dependência à independência, desta à interdependência, e a renovação contínua — com hábitos que vão de ser proativo e começar com o objetivo em mente a procurar primeiro compreender e criar sinergia. Sua base é a tese, extraída da tese de doutorado do autor, de que a literatura americana de sucesso trocou o caráter pela personalidade e que técnicas de imagem não funcionam sem princípios por baixo. Vendeu dezenas de milhões de exemplares.'
    ],
    ['Primeiro o Mais Importante', 'livro', 1994, 'Desenvolve a matriz de urgência e importância e sustenta que a maior parte das pessoas vive no quadrante do urgente, reagindo, e sacrifica o quadrante do importante e não urgente — planejamento, relações, prevenção, formação — que é justamente onde se produz resultado duradouro.']
  ],
  'David Ogilvy': [
    [
      'Confissões de um Publicitário',
      'livro',
      1963,
      'Manual escrito por quem vendeu fogões de porta em porta antes de fundar uma agência, expõe como conquistar clientes, escrever textos que vendem e dirigir uma empresa criativa. Defende o anúncio informativo e o texto longo contra a publicidade de puro entretenimento, e a submissão da criação ao teste de resultado. Continua sendo leitura de formação no setor sessenta anos depois.'
    ],
    ['Ogilvy on Advertising', 'livro', 1983, 'Versão ilustrada e ampliada de sua doutrina, com centenas de exemplos de anúncios comentados, incluindo os próprios. Reúne as regras práticas que o autor derivou de pesquisa quantitativa — sobre títulos, imagens, extensão de texto e uso de depoimentos — e mantém a insistência de que o consumidor não é um idiota.']
  ],
  'Brené Brown': [
    [
      'A Coragem de Ser Imperfeito',
      'livro',
      2010,
      'Resultado de anos de pesquisa qualitativa com milhares de relatos, distingue as pessoas com forte senso de merecimento e pertencimento das que lutam permanentemente por ele. A diferença encontrada não estava em circunstância ou realizações, e sim na disposição de aceitar a vulnerabilidade — ser visto sem garantia de resultado. Estabelece também a distinção prática entre vergonha, que paralisa, e culpa, que pode corrigir.'
    ],
    ['A Coragem de Ser Vulnerável', 'livro', 2012, 'Desenvolve o argumento da palestra que se tornou uma das mais assistidas do formato: a vulnerabilidade não é fraqueza, e sim a condição de qualquer criação, vínculo ou risco. Trata do custo da armadura emocional e das estratégias com que as pessoas evitam ser vistas.']
  ],
  'John Lennon': [
    ['Imagine', 'musica', 1971, 'Canção de estrutura simples ao piano que convida a imaginar um mundo sem países, sem posses e sem religião. Escrita no auge da Guerra do Vietnã e da atuação pacifista de Lennon com Yoko Ono, tornou-se um dos hinos seculares mais executados do mundo. Sua simplicidade deliberada é o que garantiu o alcance, e também o que a torna alvo de crítica recorrente.']
  ],
  Eurípides: [
    [
      'Medeia',
      'peca',
      '431 a.C.',
      'Abandonada pelo marido em terra estrangeira, Medeia mata os próprios filhos para destruí-lo. A peça dá a uma mulher estrangeira um discurso sobre a condição feminina que não tem paralelo na literatura antiga, e recusa transformá-la em monstro simples: sua vingança é apresentada como consequência lógica de uma situação sem saída. Ficou em último lugar no concurso do ano em que foi encenada.'
    ],
    ['As Bacantes', 'peca', '405 a.C.', 'Encenada postumamente, narra a chegada de Dioniso a Tebas e a destruição do rei Penteu, que se recusa a reconhecer o deus. É a peça em que Eurípides trata com mais ambiguidade a força do irracional: nem a razão de Penteu nem a fúria divina saem defendidas, e a violência final não tem consolo.'],
    ['As Troianas', 'peca', '415 a.C.', 'Encenada logo após Atenas ter massacrado a população da ilha de Melos, mostra o rescaldo da queda de Troia inteiramente do ponto de vista das mulheres derrotadas, à espera de serem distribuídas como escravas. Não há batalha nem herói: apenas espera, luto e a morte de uma criança. É uma das denúncias mais duras da guerra já escritas.']
  ],
  'Nathaniel Hawthorne': [
    [
      'A Letra Escarlate',
      'livro',
      1850,
      'Hester Prynne é condenada a usar a letra A bordada no vestido por adultério, numa Boston puritana do século XVII, e recusa-se a nomear o pai da filha — o pastor da comunidade, que não confessa. O romance recusa a moral simples: a mulher marcada torna-se a figura mais íntegra, e a culpa oculta destrói mais que a punição pública. É um dos romances fundadores da literatura americana.'
    ],
    ['A Casa das Sete Torres', 'livro', 1851, 'Uma família vive sob o peso de uma maldição lançada por um homem executado como bruxo, cuja terra o antepassado dos atuais moradores tomou. Hawthorne, cujo próprio antepassado foi juiz nos julgamentos de Salem, trata da culpa herdada e do que uma geração deve pelos atos das anteriores.']
  ],
  'Henri Matisse': [
    ['A Dança', 'pintura', 1910, 'Cinco figuras nuas de mãos dadas girando sobre fundo azul e verde, reduzidas a três cores e a contornos sem modelagem. Encomendada pelo colecionador russo Sergei Shchukin, escandalizou por sua simplificação radical. É a obra em que a cor deixa de descrever e passa a estruturar integralmente o quadro.'],
    [
      'Jazz',
      'livro',
      1947,
      'Álbum de vinte estampas produzidas com recortes de papel pintado, criado quando Matisse, após cirurgia grave, já não podia ficar em pé diante do cavalete. Ele descrevia o método como desenhar com a tesoura. As composições, entre elas Ícaro, são consideradas por muitos críticos o ponto mais alto de sua obra e a prova de uma reinvenção completa de linguagem aos setenta anos.'
    ],
    ['Capela do Rosário de Vence', 'projeto', 1951, 'Matisse projetou integralmente a capela — arquitetura, vitrais, murais em cerâmica, paramentos e mobiliário — como agradecimento a uma enfermeira que cuidara dele e depois se tornara freira. Considerava-a sua obra-prima. A luz filtrada pelos vitrais é o elemento estruturante do espaço inteiro.']
  ],
  'Reinhold Niebuhr': [
    [
      'Moral Man and Immoral Society',
      'livro',
      1932,
      'Sustenta que indivíduos podem agir com altruísmo e sacrifício, mas que grupos — nações, classes, corporações — são movidos por interesse coletivo e não respondem a apelos morais da mesma forma. Daí decorre que a justiça social depende de equilíbrio de poder, e não apenas de conversão moral. Escrito no fundo da Depressão por um pastor que havia acompanhado operários das linhas de montagem de Detroit, é a formulação central do realismo cristão.'
    ],
    ['A Natureza e o Destino do Homem', 'livro', 1943, 'Obra em dois volumes, resultado de conferências na Escócia, que constrói uma antropologia teológica a partir da tensão entre a liberdade humana e sua finitude. Niebuhr localiza aí a origem do orgulho e do pecado, e recusa tanto o otimismo liberal quanto o pessimismo que paralisa a ação política.']
  ],
  'Lee Iacocca': [
    [
      'Iacocca: Uma Autobiografia',
      'memoria',
      1984,
      'Narra a trajetória do filho de imigrantes italianos que criou o Ford Mustang, foi demitido por Henry Ford II num rompimento pessoal célebre e assumiu a Chrysler à beira da falência, obtendo do Congresso americano um empréstimo garantido de um bilhão e meio de dólares e quitando-o sete anos antes do prazo. Foi o livro de não ficção mais vendido de 1984 e permanece um dos relatos empresariais em primeira pessoa mais lidos.'
    ]
  ],
  'Phil Jackson': [
    ['Cestas Sagradas', 'livro', 1995, 'Relato da construção dos títulos do Chicago Bulls, combinando basquete, zen-budismo e psicologia de equipe. Jackson explica por que impôs a um time com Michael Jordan um sistema que distribui as decisões entre os cinco jogadores, e como usou meditação, silêncio e leitura para administrar egos que não caberiam no mesmo elenco.'],
    ['Onze Anéis', 'memoria', 2013, 'Balanço dos onze títulos conquistados como técnico, com os Bulls e os Lakers. Trata da administração do conflito entre Shaquille O\u2019Neal e Kobe Bryant e do que o autor aprendeu sobre liderança de pessoas cujo talento individual é maior que o do próprio treinador.']
  ],
  'Max De Pree': [
    [
      'Liderança é uma Arte',
      'livro',
      1987,
      'Escrito pelo presidente de uma empresa que praticava o que o livro defende, sustenta que a primeira responsabilidade do líder é definir a realidade e a última é dizer obrigado, e que entre as duas ele é servidor e devedor. Propõe a organização como pacto, e não como contrato, e a obrigação de garantir a cada pessoa o direito de contribuir com o que tem de melhor.'
    ]
  ],
  'Robert K. Greenleaf': [
    [
      'O Servidor como Líder',
      'ensaio',
      1970,
      'Ensaio inspirado em Viagem ao Oriente, de Hermann Hesse, em que um servo que cuida de tudo se revela depois ser o líder da ordem. Greenleaf inverte a ordem habitual: o líder servidor começa pelo desejo de servir, e a escolha de liderar vem depois. Propõe um teste concreto de legitimidade — as pessoas servidas crescem, tornam-se mais livres e mais propensas a servir? — e fundou uma corrente inteira na teoria da liderança.'
    ]
  ],
  'Nora Ephron': [
    ['Heartburn', 'livro', 1983, 'Romance sobre uma escritora culinária grávida que descobre a traição do marido, decalcado do fim do casamento da autora com o repórter Carl Bernstein. Combina receitas, humor e raiva num registro que Ephron descrevia como a aplicação literal da lição materna de que tudo é matéria de escrita. Foi adaptado ao cinema com Meryl Streep e Jack Nicholson.'],
    ['Harry e Sally', 'roteiro', 1989, 'Roteiro que acompanha dois amigos ao longo de doze anos discutindo se homens e mulheres podem ser apenas amigos. Construído sobre conversa e não sobre obstáculos externos, redefiniu a comédia romântica americana e é apontado como o modelo do gênero por três décadas.'],
    ['Não Me Lembro de Nada', 'livro', 2010, 'Coletânea de ensaios sobre envelhecimento, memória, perda e as coisas que se deixa de conseguir fazer, escrita com humor deliberadamente seco. Foi publicada dois anos antes da morte da autora, que mantinha em segredo a leucemia de que sofria.']
  ],
  'Laurel Thatcher Ulrich': [
    [
      'A História de uma Parteira',
      'livro',
      1990,
      'Parte do diário de Martha Ballard, parteira do Maine que registrou entre 1785 e 1812 quase todos os dias de vinte e sete anos — partos, doenças, tecelagem, dívidas, tempo. Historiadores anteriores haviam descartado o documento como trivial; Ulrich mostrou que era um registro sistemático da economia doméstica, da medicina rural e da vida das mulheres que nenhuma outra fonte preserva. Recebeu o Pulitzer de história em 1991.'
    ]
  ],
  'Sholom Aleichem': [
    [
      'Tevye, o Leiteiro',
      'livro',
      1894,
      'Série de monólogos escritos ao longo de vinte anos em que um leiteiro pobre da Ucrânia conversa com Deus enquanto vê as filhas romperem uma a uma com a tradição — casando por amor, com um revolucionário, com um não judeu. Registra em humor e resignação o mundo das aldeias judaicas do Leste Europeu que seria destruído décadas depois, e originou o musical Um Violinista no Telhado.'
    ]
  ],
  'São Jerônimo': [
    [
      'Vulgata',
      'documento',
      405,
      'Tradução da Bíblia para o latim feita a partir do hebraico e do grego, contra a opinião de Agostinho e de boa parte da Igreja, que considerava inspirada a tradução grega dos Setenta. Jerônimo argumentou que era preciso ir à verdade hebraica. O resultado tornou-se o texto bíblico oficial do cristianismo ocidental por mais de mil anos e moldou o vocabulário teológico do latim e, por extensão, das línguas europeias.'
    ]
  ],
  Cleantes: [
    [
      'Hino a Zeus',
      'poesia',
      'séc. III a.C.',
      'Oração filosófica em verso, o texto mais longo do estoicismo primitivo que sobreviveu completo. Trata a divindade como razão universal que atravessa e ordena o cosmos, e pede a capacidade de seguir voluntariamente o destino em vez de ser arrastado por ele — formulação que reaparece em Epicteto e em Sêneca e que resume a atitude estoica diante do que não depende de nós.'
    ]
  ],
  'Jacques Maritain': [
    ['Humanismo Integral', 'livro', 1936, 'Propõe uma sociedade pluralista fundada na dignidade da pessoa, distinta tanto do liberalismo individualista quanto do coletivismo, e sustenta que o cristianismo pode fundamentar a democracia sem impor a fé como lei. Escrito na Europa dos regimes totalitários, influenciou diretamente os partidos democrata-cristãos do pós-guerra e o Concílio Vaticano II.']
  ],
  'Douglas MacArthur': [
    ['Discurso de Despedida em West Point', 'discurso', 1962, 'Proferido aos oitenta e dois anos, sem notas, ao receber a maior condecoração da academia militar. Constrói-se em torno das três palavras do lema da instituição — dever, honra, pátria — e encerra com a imagem do velho soldado que não morre, apenas desaparece. É um dos discursos militares mais conhecidos da língua inglesa.']
  ],
  'Abul Kalam Azad': [['India Wins Freedom', 'memoria', 1959, 'Relato em primeira pessoa das negociações que levaram à independência e à partição da Índia, escrito por quem presidia o Congresso Nacional Indiano no período decisivo e se opôs à divisão até o fim. Publicado postumamente, com trinta páginas seladas por trinta anos a pedido do autor, é uma das fontes mais discutidas sobre 1947.']],
  'Christine Lagarde': [],
  'Sophie Scholl': [
    [
      'Panfletos da Rosa Branca',
      'documento',
      1943,
      'Seis textos redigidos e distribuídos clandestinamente por estudantes da Universidade de Munique entre 1942 e 1943, convocando os alemães à resistência passiva e denunciando os crimes do regime, inclusive o extermínio de judeus, sobre o qual traziam informação direta. O sexto panfleto, cuja distribuição levou à prisão e execução de Sophie e Hans Scholl, foi contrabandeado para fora da Alemanha e milhões de cópias foram lançadas sobre o país por aviões aliados.'
    ]
  ],
  'Rosalynn Carter': [],
  'Michael J. Fox': [['Lucky Man', 'memoria', 2002, 'Memórias em que o autor narra o diagnóstico de Parkinson aos trinta anos, os sete anos em que o manteve em segredo, o alcoolismo do período e a decisão de tornar a doença pública. O título é literal: Fox sustenta que a doença lhe deu uma vida que ele não teria tido, e o livro é o documento que antecede a criação de sua fundação de pesquisa.']],
  'Robert M. Hutchins': [
    [
      'The Higher Learning in America',
      'livro',
      1936,
      'Ataca a universidade americana por ter substituído a formação intelectual pela especialização utilitária, pelo entretenimento esportivo e por um currículo eletivo sem coerência. Propõe em seu lugar uma educação geral baseada na leitura direta dos grandes livros e na discussão. É a defesa mais consistente da educação liberal contra o modelo profissionalizante, e continua sendo referência de todo debate sobre currículo universitário.'
    ]
  ],
  'Norman Schwarzkopf': [
    [
      'It Doesn\u2019t Take a Hero',
      'memoria',
      1992,
      'Autobiografia publicada logo após a Guerra do Golfo, cobre a infância no Irã, os dois períodos no Vietnã e o planejamento e execução da Operação Tempestade no Deserto. É franca sobre os erros do Vietnã e sobre a doutrina que ele construiu deliberadamente contra aquela experiência: objetivo definido, força esmagadora, coalizão ampla e saída rápida.'
    ]
  ],
  'Nicolas Hayek': [],
  'Walter Winchell': [],
  'Charles Kuralt': [
    [
      'On the Road with Charles Kuralt',
      'livro',
      1985,
      'Reúne reportagens da série que percorreu os Estados Unidos por vinte e cinco anos em busca de histórias de pessoas comuns em lugares pequenos — um colecionador de bolas de barbante, uma professora aposentada, um ferreiro. O texto é curto, preciso e sem sentimentalismo, e o livro é o registro escrito de um formato televisivo que influenciou gerações de repórteres.'
    ]
  ],
  'George Burns': [],
  'Robert Collier': [
    [
      'The Robert Collier Letter Book',
      'livro',
      1931,
      'Manual de redação de vendas por correspondência escrito por um dos redatores mais eficazes de sua época. Rompe com o anúncio agressivo então corrente e defende que a carta deve entrar na conversa que já está acontecendo na cabeça do leitor, falar de seus interesses antes dos do vendedor e construir confiança antes de pedir a compra. Continua sendo leitura básica de redação publicitária quase um século depois.'
    ]
  ],
  'Ring Lardner': [
    [
      'You Know Me Al',
      'livro',
      1916,
      'Feito de cartas de um arremessador de beisebol semianalfabeto e convencido, que se revela ao leitor a cada frase sem jamais perceber. Lardner absorveu a fala dos jogadores convivendo com eles como cronista esportivo, e criou com ela uma técnica que influenciaria diretamente Hemingway e o conto americano: o narrador que se condena pela própria voz. Virginia Woolf o considerou o melhor prosador americano de seu tempo.'
    ]
  ],
  'Elizabeth Stone': [
    [
      'Black Sheep and Kissing Cousins',
      'livro',
      1988,
      'Estuda as histórias que as famílias contam sobre si mesmas — o parente que fugiu, o antepassado heroico, o escândalo nunca mencionado — e mostra como esses relatos, mais do que os fatos, formam a identidade de quem cresce ouvindo-os. É deste livro que vem a formulação sobre ter um filho e aceitar que o coração passe a andar fora do próprio corpo, hoje citada em massa sem atribuição.'
    ]
  ],
  'Donald McGannon': [],
  'Luiz Gasparetto': [],
  'Magalhães Pinto': []
};

(function aplicarF19() {
  Object.entries(PANORAMAS_F19).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  Object.entries(OBRAS_F19).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 16) === _normDup(o.t).slice(0, 16));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
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
  RECALCULAR_FILA();
})();

(function bootF19() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 19:', e);
    }
  };
})();
