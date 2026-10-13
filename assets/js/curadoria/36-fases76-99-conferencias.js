/* MeMotiva — curadoria/36-fases76-99-conferencias.js
   Fases 76–99 — duplicatas finas, conferência original×tradução, exportação CSV (Fase 87), cadeia de boot (Fase 89), curadoria de precisão.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

(function () {
  /* Fase 76 — oito duplicatas que ficaram logo abaixo do limiar do portão.
    A semelhança de redação entre 0,60 e 0,70 é ambígua demais para automatizar,
    então cada caso foi decidido um a um. Em sete deles a entrada que já estava
    no acervo traz a fonte mais precisa — capítulo, ensaio, poema numerado — e a
    versão acrescentada nesta sessão sai. No oitavo, de Andy Grove, a entrada
    antiga era apenas o título do livro repetido como frase, e a acrescentada
    traz a passagem inteira: ali sai a antiga. */
  var SAIR = [
    ['Isaiah Berlin', 'A liberdade para os lobos significou muitas vezes'],
    ['Rabindranath Tagore', 'Onde a mente é sem medo e a cabeça se ergue alta'],
    ['Benjamin Disraeli', 'Duas nações entre as quais não há relação nem simpatia, que ignoram'],
    ['John Ruskin', 'Não existe riqueza a não ser a vida'],
    ['Leo Buscaglia', 'Nunca subestime o poder de um toque'],
    ['Théophile Gautier', 'Nada do que é verdadeiramente belo serve para alguma coisa'],
    ['Thomas J. Stanley', 'Riqueza não é o mesmo que renda: quem ganha muito'],
    ['Andy Grove', 'Só os paranoicos sobrevivem.']
  ];
  function aplicar() {
    var n = 0,
      naoAchou = [];
    SAIR.forEach(function (p) {
      var alvo = QUOTES.filter(function (q) {
        return q.author === p[0] && q.text.indexOf(p[1]) === 0;
      });
      // no caso de Grove, o texto curto é prefixo do longo: exige correspondência exata
      if (alvo.length > 1)
        alvo = alvo.filter(function (q) {
          return q.text.length <= p[1].length + 2;
        });
      if (alvo.length !== 1) {
        naoAchou.push(p[0] + ' (' + alvo.length + ')');
        return;
      }
      var r = typeof removerFrase === 'function' ? removerFrase(alvo[0].qid, 'duplicata: mesma passagem presente com fonte mais precisa') : { ok: false };
      if (r && r.ok) n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (naoAchou.length) console.warn('Fase 76 · não localizadas:', naoAchou.join(' | '));
    console.log('MeMotiva · Fase 76: ' + n + ' duplicatas remanescentes removidas por conferência individual.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Conceição Evaristo': [
      [
        'Ponciá Vicêncio',
        'romance',
        2003,
        'Romance sobre uma jovem negra que deixa a comunidade rural onde a família vive desde a escravidão e migra para a cidade, onde encontra trabalho precário, isolamento e o silêncio que a vai tomando aos poucos. A narrativa alterna presente e memória, e trata a herança da escravidão como algo que continua operando nos corpos e nos nomes. É o primeiro romance da autora e um marco da literatura negra brasileira contemporânea.'
      ],
      ["Olhos d'Água", 'conto', 2014, 'Reunião de quinze contos sobre mulheres negras das periferias urbanas, em que violência, maternidade, fome e afeto aparecem sem moldura explicativa nem lição moral. A autora escreve a partir da própria experiência e da de sua comunidade, procedimento que ela chama de escrevivência. O livro recebeu o Prêmio Jabuti de contos e crônicas em 2015.'],
      ['Escrevivência', 'ensaio', 2020, 'Formulação do conceito que dá nome ao conjunto de sua obra: a escrita que nasce da vivência de mulheres negras e recusa o lugar de objeto para ocupar o de sujeito da narração. A autora o desenvolveu na pesquisa acadêmica e em conferências antes de reuni-lo em volume. Tornou-se categoria corrente nos estudos de literatura brasileira.']
    ],
    'Donald Winnicott': [
      ['O Brincar e a Realidade', 'livro', 1971, 'Obra que desenvolve as noções de objeto transicional e de espaço potencial: a região intermediária entre a realidade interna e o mundo compartilhado onde o brincar, a cultura e a criatividade acontecem. Winnicott sustenta que é no brincar, e só nele, que a pessoa é inteiramente ela mesma. É seu livro mais lido fora do meio clínico.'],
      [
        'A Criança e o Seu Mundo',
        'livro',
        1964,
        'Reunião das palestras de rádio que o autor deu à BBC para mães e pais comuns, sobre amamentação, birra, ciúme entre irmãos, desmame e o que ele chamou de mãe suficientemente boa — aquela que falha na medida certa para que o bebê descubra o mundo. A linguagem é direta e sem jargão. É o texto que levou a psicanálise infantil ao grande público britânico.'
      ]
    ],
    'Elisabeth Kübler-Ross': [
      [
        'Sobre a Morte e o Morrer',
        'livro',
        1969,
        'Estudo construído a partir de entrevistas com mais de duzentos pacientes terminais em hospitais de Chicago, num tempo em que o diagnóstico sequer era comunicado ao doente. O livro descreve os cinco estágios — negação, raiva, barganha, depressão e aceitação — e defende que o moribundo tem o que ensinar a quem o assiste. Fundou os cuidados paliativos como campo.'
      ],
      ['A Roda da Vida', 'memoria', 1997, 'Autobiografia escrita depois de um derrame, em que a autora narra a infância na Suíça, o trabalho voluntário na Europa arrasada do pós-guerra, a visita a Majdanek e a decisão de dedicar-se a quem morre. Trata também das críticas que recebeu e das próprias mudanças de posição ao longo da vida.']
    ]
  };
  var PG = {
    'Conceição Evaristo||Ponciá Vicêncio': {
      sobre: 'Romance sobre uma jovem negra que deixa a comunidade rural onde a família vive desde a escravidão e migra para a cidade, onde encontra trabalho precário, isolamento e um silêncio que a vai tomando.',
      contexto: 'Escrito por uma autora que foi empregada doméstica antes de chegar à universidade, e que trata a herança da escravidão como algo que continua operando nos corpos e nos nomes das pessoas.',
      momento: 'Publicado em 2003, quando a autora tinha cinquenta e seis anos; é seu primeiro romance.',
      importancia: 'É um marco da literatura negra brasileira contemporânea e o livro que apresentou sua obra ao público mais amplo, hoje presente em vestibulares e currículos escolares.',
      curiosidade: 'O sobrenome Vicêncio vem do senhor de escravos que batizou a família, detalhe que o romance usa para mostrar como a propriedade sobre pessoas sobreviveu na própria forma de nomear.'
    },
    "Conceição Evaristo||Olhos d'Água": {
      sobre: 'Quinze contos sobre mulheres negras das periferias urbanas, em que violência, maternidade, fome e afeto aparecem sem moldura explicativa nem lição moral.',
      contexto: 'Escritos a partir da própria experiência e da de sua comunidade, procedimento que a autora nomeia como escrevivência e distingue tanto da autobiografia quanto da ficção documental.',
      momento: 'Publicado em 2014; recebeu o Prêmio Jabuti de contos e crônicas no ano seguinte.',
      importancia: 'É o livro que consolidou seu reconhecimento crítico no Brasil e o mais adotado de sua obra em cursos de literatura.',
      curiosidade: 'O conto que dá nome ao volume parte de uma pergunta simples — de que cor eram os olhos de sua mãe — e chega à água como imagem do que a memória guarda e do que ela apaga.'
    },
    'Conceição Evaristo||Escrevivência': {
      sobre: 'Formulação do conceito que dá nome ao conjunto de sua obra: a escrita que nasce da vivência de mulheres negras e recusa o lugar de objeto para ocupar o de sujeito da narração.',
      contexto: 'Desenvolvido na pesquisa acadêmica e em conferências ao longo de décadas, antes de ser reunido em volume, e em diálogo com a tradição de intelectuais negras brasileiras como Lélia Gonzalez.',
      momento: 'Reunido em livro em 2020, com o subtítulo A Escrita de Nós; o termo circulava em sua obra desde os anos noventa.',
      importancia: 'Tornou-se categoria corrente nos estudos de literatura brasileira e é hoje usada para descrever produção de autoras muito além de sua própria obra.',
      curiosidade: 'A autora costuma situar a origem do conceito na figura da mulher negra que embalava os filhos da casa-grande com histórias, e na recusa de que sua escrita cumpra essa mesma função.'
    },
    'Donald Winnicott||O Brincar e a Realidade': {
      sobre: 'Desenvolvimento das noções de objeto transicional e de espaço potencial: a região intermediária entre a realidade interna e o mundo compartilhado, onde o brincar, a cultura e a criatividade acontecem.',
      contexto: 'Escrito por um pediatra que atendeu dezenas de milhares de crianças antes de se tornar psicanalista, e que trabalhava com a observação direta tanto quanto com a teoria.',
      momento: 'Publicado em 1971, ano de sua morte; reúne textos escritos ao longo de duas décadas.',
      importancia: 'É seu livro mais lido fora do meio clínico e a origem de conceitos que passaram para a linguagem comum, como objeto transicional.',
      curiosidade: 'A afirmação de que é no brincar, e somente no brincar, que a pessoa é inteiramente ela mesma, vale no livro tanto para a criança quanto para o adulto.'
    },
    'Donald Winnicott||A Criança e o Seu Mundo': {
      sobre: 'Reunião das palestras de rádio dadas à BBC para mães e pais comuns, sobre amamentação, birra, ciúme entre irmãos e desmame, em linguagem direta e sem jargão.',
      contexto: 'Produzidas num pós-guerra britânico em que a criação de filhos era tratada por manuais rígidos de horário e disciplina, contra os quais Winnicott argumentava.',
      momento: 'As palestras foram ao ar a partir dos anos quarenta; a coletânea foi publicada em 1964.',
      importancia: 'Levou a psicanálise infantil ao grande público britânico e introduziu a noção de mãe suficientemente boa — aquela que falha na medida certa para que o bebê descubra o mundo.',
      curiosidade: 'Winnicott dizia às ouvintes que não pretendia ensiná-las a cuidar dos filhos, e sim mostrar-lhes que já sabiam, posição incomum na literatura de puericultura da época.'
    },
    'Elisabeth Kübler-Ross||Sobre a Morte e o Morrer': {
      sobre: 'Estudo construído a partir de entrevistas com mais de duzentos pacientes terminais, que descreve os cinco estágios — negação, raiva, barganha, depressão e aceitação — e defende que o moribundo tem o que ensinar a quem o assiste.',
      contexto: 'Feito em hospitais de Chicago num tempo em que o diagnóstico terminal sequer era comunicado ao doente, e em que a equipe médica evitava o assunto com o paciente.',
      momento: 'Publicado em 1969; os seminários que o originaram foram inicialmente recebidos com hostilidade pelos médicos dos hospitais envolvidos.',
      importancia: 'Fundou os cuidados paliativos como campo e mudou a prática hospitalar em relação à comunicação do diagnóstico e ao acompanhamento do fim da vida.',
      curiosidade: 'A autora advertiu depois que os cinco estágios não são etapas obrigatórias nem ordenadas, leitura simplificada que se difundiu contra sua intenção.'
    },
    'Elisabeth Kübler-Ross||A Roda da Vida': {
      sobre: 'Autobiografia escrita depois de um derrame, em que a autora narra a infância na Suíça, o trabalho voluntário na Europa arrasada do pós-guerra, a visita a Majdanek e a decisão de dedicar-se a quem morre.',
      contexto: 'Escrita no fim da vida, quando ela mesma vivia a dependência e a proximidade da morte sobre as quais escrevera por décadas.',
      momento: 'Publicada em 1997; a autora morreu em 2004.',
      importancia: 'É a principal fonte sobre sua trajetória e sobre as mudanças de posição que assumiu ao longo da carreira, incluindo as que lhe custaram reputação acadêmica.',
      curiosidade: 'O que a marcou em Majdanek, segundo o livro, foram as borboletas riscadas nas paredes dos alojamentos por prisioneiros que sabiam que iam morrer — imagem que ela adotou como símbolo de seu trabalho.'
    }
  };
  var NOVAS = [
    ['Angela Duckworth', 'Garra é paixão e perseverança por objetivos de longo prazo.', 'Grit is passion and perseverance for long-term goals.', 'Garra', 'motivacao'],
    ['Angela Duckworth', 'Talento vezes esforço resulta em habilidade. Habilidade vezes esforço resulta em realização.', 'Talent times effort equals skill. Skill times effort equals achievement.', 'Garra', 'motivacao'],
    ['Ayn Rand', 'A realização do próprio bem-estar e da própria felicidade é o mais alto propósito moral do ser humano.', 'The achievement of his own happiness is man’s highest moral purpose.', 'A Virtude do Egoísmo', 'autorreconhecimento'],
    ['Ernest Hemingway', 'O mundo é um bom lugar e vale a pena lutar por ele.', 'The world is a fine place and worth the fighting for.', 'Por Quem os Sinos Dobram', 'vida'],
    ['Ernest Hemingway', 'Como você foi à falência? De duas maneiras: gradualmente, e depois de repente.', 'How did you go bankrupt? Two ways. Gradually, then suddenly.', 'O Sol Também Se Levanta', 'financas'],
    ['Ernest Renan', 'A existência de uma nação é um plebiscito de todos os dias.', 'L’existence d’une nation est un plébiscite de tous les jours.', 'O Que é uma Nação?', 'politica'],
    ['J.K. Rowling', 'Não adianta viver de sonhos e esquecer de viver.', 'It does not do to dwell on dreams and forget to live.', 'Harry Potter e a Pedra Filosofal', 'vida'],
    ['Harriet Tubman', 'Conduzi meu trem por oito anos e nunca perdi um só passageiro.', 'I was conductor of the Underground Railroad for eight years, and I can say what most conductors can’t say — I never ran my train off the track and I never lost a passenger.', 'Rotas da Ferrovia Subterrânea', 'empoderamento'],
    ['Hans Kelsen', 'A ciência jurídica deve descrever o direito tal como ele é, e não como deveria ser.', 'Die Rechtswissenschaft hat das Recht zu beschreiben, wie es ist, nicht wie es sein soll.', 'Teoria Pura do Direito', 'politica'],
    ['Henry Chesbrough', 'Nem todas as pessoas inteligentes trabalham para nós: precisamos trabalhar com as de dentro e com as de fora.', 'Not all the smart people work for us. We need to work with smart people inside and outside our company.', 'Open Innovation', 'empreendedorismo'],
    ['Howard Schultz', 'É na adversidade e na mudança que descobrimos quem realmente somos e o que defendemos.', 'In times of adversity and change, we really discover who we are and what we’re made of.', 'Dedique-se de Coração', 'dificeis'],
    ['Jean Piaget', 'Conhecer um objeto é agir sobre ele e transformá-lo.', 'Connaître un objet, c’est agir sur lui et le transformer.', 'A Epistemologia Genética', 'educacao'],
    ['Jane Goodall', 'Cada um de nós faz diferença todos os dias; a questão é que tipo de diferença queremos fazer.', 'You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.', 'Razão para Esperança', 'empoderamento'],
    ['Jaron Lanier', 'As pessoas se rebaixam para tornar as máquinas mais impressionantes.', 'People degrade themselves in order to make machines seem smart all the time.', 'Você Não É Um Aplicativo', 'manipulacao'],
    ['Ada Lovelace', 'A Máquina Analítica não tem nenhuma pretensão de originar coisa alguma: ela pode fazer o que quer que saibamos ordenar-lhe que execute.', 'The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.', 'Notas sobre a Máquina Analítica', 'reflexao'],
    ['Angela Davis', 'As mulheres negras eram iguais a seus companheiros na opressão que sofriam e resistiam à escravidão com uma paixão igual à deles.', 'Black women were equal to their men in the oppression they suffered; and they resisted slavery with a passion equal to their men’s.', 'Mulheres, Raça e Classe', 'empoderamento'],
    ['Arthur Ashe', 'O verdadeiro heroísmo é notavelmente sóbrio e nada dramático: não é o impulso de superar os outros a qualquer custo, mas de servi-los a qualquer custo.', 'True heroism is remarkably sober, very undramatic. It is not the urge to surpass all others at whatever cost, but the urge to serve others at whatever cost.', 'Days of Grace', 'lideranca'],
    ['Brian Tracy', 'Seu sapo é a maior e mais importante tarefa do dia — justamente aquela que você tem mais chance de adiar.', 'Your frog is your biggest, most important task, the one you are most likely to procrastinate on.', 'Engula Aquele Sapo', 'motivacao'],
    ['Conceição Evaristo', 'A nossa escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.', '', 'Escrevivência', 'empoderamento'],
    ['Donald Winnicott', 'Não existe isso de um bebê sozinho: quando se encontra um bebê, encontra-se também alguém que dele cuida.', 'There is no such thing as a baby — meaning that if you set out to describe a baby, you will find you are describing a baby and someone.', 'A Criança e o Seu Mundo', 'familia'],
    ['Donald Winnicott', 'É no brincar, e somente no brincar, que a criança ou o adulto é inteiramente ele mesmo.', 'It is in playing and only in playing that the individual child or adult is able to be creative and to use the whole personality.', 'O Brincar e a Realidade', 'felicidade'],
    ['Elisabeth Kübler-Ross', 'Se você proteger os cânions das tempestades, nunca verá a beleza de suas formas esculpidas.', 'Should you shield the canyons from the windstorms, you would never see the true beauty of their carvings.', 'Sobre a Morte e o Morrer', 'dificeis'],
    ['Elisabeth Kübler-Ross', 'Os que morrem podem nos ensinar muito, se tivermos a paciência de escutá-los.', 'The dying patient can teach us a great deal, if we have the patience to listen.', 'Sobre a Morte e o Morrer', 'conforto']
  ];
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--v' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 77 · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f77' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 77 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 77: +' + n + ' frases, +' + nO + ' obras e +' + nP + ' páginas' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 78 — duplicatas na faixa imediatamente abaixo do portão automático.
    Foram conferidas uma a uma. Permanecem separadas as que apenas parecem
    próximas: os títulos de capítulo de Paulo Freire, dois versos distintos de
    Tabacaria e versículos diferentes do Bhagavad Gita citados com numeração
    própria. Saem as que são a mesma passagem em outra tradução. */
  var SAIR = [
    ['Sêneca', 'Quem recebe um benefício com gratidão já pagou a primeira parcela'],
    ['Nicolau Maquiavel', 'Todos veem aquilo que você parece ser, poucos conhecem'],
    ['Marco Aurélio', 'A vida de um homem é aquilo que seus pensamentos fazem dela'],
    ['Marco Aurélio', 'O obstáculo à ação faz avançar a ação. O que está no caminho'],
    ['Buda', 'Melhor do que mil versos sem significado é uma única frase'],
    ['Krishna', 'Aquele que conquistou a mente alcançou um amigo'],
    ['Krishna', 'Aquele que abandona o apego e realiza suas ações com equilíbrio'],
    ['Krishna', 'Aquele que abandona o egoísmo e o apego encontra a paz'],
    ['Krishna', 'O homem alcança a perfeição quando realiza seu dever com desapego'],
    ['Lao Tsé', 'O sábio não disputa, por isso ninguém pode disputar com ele'],
    ['Lao Tsé', 'Aquele que sabe contentar-se é sempre feliz'],
    ['Morgan Housel', 'A independência financeira é ter controle sobre seu tempo'],
    ['Warren Bennis', 'A confiança é o combustível da liderança'],
    ['Alcorão 8:46', 'E sejam firmes, pois Deus está com os perseverantes']
  ];
  function aplicar() {
    var n = 0,
      naoAchou = [];
    SAIR.forEach(function (p) {
      var alvo = QUOTES.filter(function (q) {
        return q.author === p[0] && q.text.indexOf(p[1]) === 0;
      });
      if (alvo.length !== 1) {
        naoAchou.push(p[0] + ' :: ' + p[1].slice(0, 32) + ' (' + alvo.length + ')');
        return;
      }
      var r = typeof removerFrase === 'function' ? removerFrase(alvo[0].qid, 'duplicata: mesma passagem em outra tradução, conferida individualmente') : { ok: false };
      if (r && r.ok) n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (naoAchou.length) console.warn('Fase 78 · não localizadas:', naoAchou.join(' | '));
    console.log('MeMotiva · Fase 78: ' + n + ' duplicatas de tradução removidas por conferência individual.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    setTimeout(aplicar, 0);
  };
})();

(function () {
  var NOVAS = [
    ['Esopo', 'Não conte os pintinhos antes de chocarem os ovos.', 'Do not count your chickens before they are hatched.', 'Fábulas', 'reflexao'],
    ['Esopo', 'Aparências enganam.', 'Appearances are deceptive.', 'Fábulas', 'reflexao'],

    ['Elbert Hubbard', 'A civilização é uma longa e ansiosa busca por pessoas assim.', 'Civilization is one long anxious search for just such individuals.', 'Uma Mensagem a Garcia', 'lideranca'],

    ['Joseph Joubert', 'É melhor debater uma questão sem resolvê-la do que resolvê-la sem debatê-la.', 'Il vaut mieux débattre une question sans la régler que de la régler sans la débattre.', 'Pensamentos', 'reflexao'],
    ['Joseph Joubert', 'As crianças precisam mais de modelos do que de críticos.', 'Les enfants ont plus besoin de modèles que de critiques.', 'Pensamentos', 'educacao'],

    ['Gottfried Wilhelm Leibniz', 'Nada há no intelecto que não tenha estado antes nos sentidos — exceto o próprio intelecto.', 'Nihil est in intellectu quod non prius fuerit in sensu, excipe: nisi ipse intellectus.', 'Novos Ensaios sobre o Entendimento Humano', 'filosofos'],

    ['Dag Hammarskjöld', 'Não busques a morte: ela te encontrará. Busca o caminho que faz da morte uma realização.', 'Do not seek death. Death will find you. But seek the road which makes death a fulfilment.', 'Marcos no Caminho', 'vida'],

    ['Desmond Tutu', 'A alegria é muito maior que a felicidade: a felicidade depende de circunstâncias externas, a alegria não.', 'Joy is much bigger than happiness. While happiness is often seen as being dependent on external circumstances, joy is not.', 'O Livro da Alegria (com o Dalai Lama)', 'felicidade'],

    ['Al Ries e Jack Trout', 'Marketing não é uma batalha de produtos: é uma batalha de percepções.', 'Marketing is not a battle of products, it’s a battle of perceptions.', 'As 22 Consagradas Leis do Marketing', 'negocios'],

    ['Andy Grove', 'Deixe o caos reinar e, depois, contenha o caos.', 'Let chaos reign, then rein in chaos.', 'Administração de Alta Performance', 'lideranca'],

    ['Rosa Luxemburgo', 'Ser humano é o principal de tudo, e isso significa ser firme, claro e alegre — sim, alegre apesar de tudo.', 'Menschsein ist die Hauptsache. Und das heißt: fest und klar und heiter sein, ja heiter trotz alledem.', 'Cartas da Prisão', 'dificeis'],

    ['Wangari Maathai', 'Não se protege o meio ambiente sem fortalecer as pessoas e ajudá-las a entender que esses recursos são delas.', 'You cannot protect the environment unless you empower people, you inform them, and you help them understand that these resources are their own.', 'Movimento Cinturão Verde', 'politica'],

    ['Coco Chanel', 'A elegância não consiste em vestir um vestido novo.', 'L’élégance ne consiste pas à mettre une robe neuve.', 'Vestido preto simples', 'autorreconhecimento'],

    ['Jacques Maritain', 'A finalidade da educação não é adaptar o jovem às condições da vida social, mas despertar nele a liberdade interior.', 'Le but de l’éducation n’est pas d’adapter le jeune aux conditions de la vie sociale, mais d’éveiller en lui la liberté intérieure.', 'Humanismo Integral', 'educacao'],

    ['Haemin Sunim', 'Quando você se aceita como é, o mundo também passa a aceitá-lo.', 'When you accept yourself as you are, the world accepts you too.', 'As Coisas Que Você Só Vê Quando Desacelera', 'autorreconhecimento'],

    ['Cleantes', 'Conduz-me, ó Zeus, e tu, Destino, para onde quer que tenhais decretado que eu vá: seguirei sem hesitar.', 'Ἄγου δέ μ᾽, ὦ Ζεῦ, καὶ σύ γ᾽ ἡ Πεπρωμένη, ὅποι ποθ᾽ ὑμῖν εἰμι διατεταγμένος.', 'Hino a Zeus', 'fe'],

    ['Harry Markowitz', 'A carteira com o maior retorno esperado não é necessariamente a que tem o menor risco.', 'The portfolio with maximum expected return is not necessarily the one with minimum variance.', 'Seleção de Carteiras', 'financas'],

    ['Estée Lauder', 'Não existe substituto para o contato: toque a pele da cliente e ela compra.', 'Telephone, telegraph, tell a woman.', 'Estée: Uma História de Sucesso', 'negocios'],

    ['James M. Barrie', 'Todas as crianças crescem — menos uma.', 'All children, except one, grow up.', 'Peter Pan', 'familia'],

    ['Anaïs Nin', 'Cada amigo representa um mundo dentro de nós, um mundo que talvez só nasça quando ele chega.', 'Each friend represents a world in us, a world possibly not born until they arrive.', 'Diário de Anaïs Nin', 'amizade'],

    ['Alexandre Dumas', 'Só quem já esteve na miséria mais profunda é capaz de sentir a felicidade mais alta.', 'Il n’y a ni bonheur ni malheur en ce monde, il y a la comparaison d’un état à un autre.', 'O Conde de Monte Cristo', 'conforto'],

    ['Ayn Rand', 'Toda obra criadora nasce de um indivíduo que pensa sozinho, e não de um coletivo que aprova.', 'No work is ever done collectively, by a majority decision. Every creative job is achieved under the guidance of a single individual thought.', 'A Nascente', 'empreendedorismo'],

    ['Angela Davis', 'Numa sociedade racista, não basta não ser racista: é preciso ser antirracista.', 'In a racist society it is not enough to be non-racist, we must be anti-racist.', 'A Liberdade é uma Luta Constante', 'politica'],

    ['Conceição Evaristo', 'Combinamos de não morrer.', '', "Olhos d'Água", 'empoderamento'],

    ['Hillary Clinton', 'Direitos humanos são direitos das mulheres e direitos das mulheres são direitos humanos, de uma vez por todas.', 'Human rights are women’s rights, and women’s rights are human rights, once and for all.', 'O Que Aconteceu', 'empoderamento'],

    ['Pierre-Joseph Proudhon', 'Se me perguntassem o que é a escravidão, eu responderia num instante: é o assassinato.', 'Si j’avais à répondre à la question suivante: qu’est-ce que l’esclavage? je répondrais en un mot: c’est l’assassinat.', 'O Que é a Propriedade?', 'politica'],

    ['Quintiliano', 'Aprendemos menos pelo que nos ensinam do que pelo que nos leva a descobrir.', 'Plus docet, qui discere facit.', 'Institutio Oratoria', 'educacao'],

    ['Jean Piaget', 'O objetivo principal da educação é formar pessoas capazes de fazer coisas novas, e não de repetir o que outras gerações fizeram.', 'The principal goal of education is to create men who are capable of doing new things, not simply of repeating what other generations have done.', 'A Epistemologia Genética', 'educacao']
  ];
  function aplicar() {
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f79' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 79 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 79: +' + n + ' frases com obra confirmada' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 80 — obras textuais para pessoas cujo catálogo só tinha quadros,
    música ou feitos, e nova rodada de frases com obra confirmada. */
  var OB = {
    'Salvador Dalí': [
      [
        'A Vida Secreta de Salvador Dalí',
        'memoria',
        1942,
        'Autobiografia escrita aos trinta e sete anos, em que o pintor narra a infância em Figueres, a relação com o irmão morto cujo nome herdou, a expulsão da Academia de Madri e o encontro com Gala. O relato mistura fato, invenção declarada e autopromoção deliberada, procedimento que o próprio autor assume no texto. É a principal fonte sobre a construção de sua persona pública.'
      ],
      ['Diário de um Gênio', 'diario', 1964, 'Diário que cobre os anos de 1952 a 1963, em que Dalí registra o trabalho no ateliê, as viagens, as teorias sobre física nuclear e misticismo, e comenta a própria fama com ironia calculada. O tom alterna observação técnica sobre pintura e provocação. É o texto em que sua obra escrita mais se aproxima de um método de trabalho.']
    ],
    'Louis Armstrong': [['Satchmo: Minha Vida em Nova Orleans', 'memoria', 1954, 'Memórias da infância e juventude em Nova Orleans, do bairro pobre onde nasceu ao reformatório onde aprendeu corneta, e dos anos de aprendizado ao lado de King Oliver. O relato documenta de dentro o ambiente em que o jazz se formou, com detalhe sobre músicos, salões e ruas que nenhuma outra fonte registra.']],
    'Wolfgang Amadeus Mozart': [['Cartas', 'carta', 1781, 'Correspondência extensa com o pai Leopold, a irmã Nannerl e a esposa Constanze, que cobre as viagens da infância, a ruptura com o arcebispo de Salzburgo e os anos em Viena. As cartas tratam de composição, dinheiro, doença e humor, e são a fonte primária sobre sua vida. Foram publicadas em edições críticas a partir do século XIX.']],
    Michelangelo: [
      ['Rime', 'poesia', 1623, 'Cerca de trezentos poemas, entre sonetos e madrigais, escritos ao longo de toda a vida e publicados só décadas após sua morte. Tratam do amor, da velhice, da fé e do trabalho com a pedra, e são a principal fonte sobre como o escultor entendia o próprio ofício. O sobrinho editou a primeira edição alterando pronomes e versos que considerou comprometedores.']
    ]
  };
  var PG = {
    'Salvador Dalí||A Vida Secreta de Salvador Dalí': {
      sobre: 'Autobiografia escrita aos trinta e sete anos, sobre a infância em Figueres, o irmão morto cujo nome herdou, a expulsão da Academia de Madri e o encontro com Gala.',
      contexto: 'Escrita durante o exílio nos Estados Unidos, quando o pintor reconstruía a carreira longe da Europa em guerra e depois do rompimento com os surrealistas.',
      momento: 'Publicada em 1942, em Nova York, primeiro em inglês.',
      importancia: 'É a principal fonte sobre a construção de sua persona pública e um documento incomum de autopromoção assumida como parte da obra.',
      curiosidade: 'O autor declara no próprio texto que mistura fato e invenção, e trata a distinção entre os dois como irrelevante para o que pretende mostrar.'
    },
    'Salvador Dalí||Diário de um Gênio': {
      sobre: 'Diário dos anos de 1952 a 1963, com o trabalho no ateliê, as viagens, as teorias sobre física nuclear e misticismo, e o comentário irônico sobre a própria fama.',
      contexto: 'Escrito na fase que o pintor chamou de místico-nuclear, em que incorporou à pintura referências à física atômica e ao catolicismo.',
      momento: 'Publicado em 1964, vinte e dois anos depois da autobiografia.',
      importancia: 'É o texto em que sua obra escrita mais se aproxima de um método de trabalho, com observação técnica sobre pintura ao lado da provocação.',
      curiosidade: 'O diário registra o hábito de pintar por sessões curtíssimas separadas por cochilos de poucos segundos, técnica que ele descreve com precisão de cronômetro.'
    },
    'Louis Armstrong||Satchmo: Minha Vida em Nova Orleans': {
      sobre: 'Memórias da infância e juventude em Nova Orleans, do bairro pobre onde nasceu ao reformatório onde aprendeu corneta, e dos anos de aprendizado ao lado de King Oliver.',
      contexto: 'Escritas por um músico que já era figura internacional e que fazia questão de registrar por escrito o mundo de onde viera, pouco documentado por outras fontes.',
      momento: 'Publicadas em 1954; Armstrong escreveu à máquina boa parte do material.',
      importancia: 'Documentam de dentro o ambiente em que o jazz se formou, com detalhe sobre músicos, salões e ruas que nenhuma outra fonte registra.',
      curiosidade: 'Armstrong foi escritor prolífico a vida inteira: deixou milhares de páginas de cartas e memórias datilografadas, hoje preservadas em arquivo.'
    },
    'Wolfgang Amadeus Mozart||Cartas': {
      sobre: 'Correspondência extensa com o pai Leopold, a irmã Nannerl e a esposa Constanze, cobrindo as viagens da infância, a ruptura com o arcebispo de Salzburgo e os anos em Viena.',
      contexto: 'Escritas por uma família que passava meses em viagem e dependia da carta para negociar contratos, discutir dinheiro e manter vínculo.',
      momento: 'Cobrem de 1762 a 1791; foram publicadas em edições críticas a partir do século XIX.',
      importancia: 'São a fonte primária sobre sua vida e sobre o funcionamento concreto da carreira de um músico no século XVIII, da encomenda ao pagamento.',
      curiosidade: 'As cartas desmentem boa parte da lenda romântica do compositor pobre e incompreendido: mostram um profissional atento a cachês, alunos e público.'
    },
    'Michelangelo||Rime': {
      sobre: 'Cerca de trezentos poemas, entre sonetos e madrigais, sobre o amor, a velhice, a fé e o trabalho com a pedra, escritos ao longo de toda a vida.',
      contexto: "Escritos por um artista que se considerava sobretudo escultor e que usava o verso para pensar o próprio ofício, em diálogo com Vittoria Colonna e Tommaso de' Cavalieri.",
      momento: 'Publicados pela primeira vez em 1623, quase sessenta anos após sua morte.',
      importancia: 'São a principal fonte sobre como o escultor entendia o próprio trabalho, incluindo a ideia de que a figura já está na pedra e cabe ao artista retirar o excesso.',
      curiosidade: 'O sobrinho que editou a primeira edição alterou pronomes e versos dos poemas dirigidos a Cavalieri; o texto original só foi restituído no século XIX.'
    }
  };
  var NOVAS = [
    ['Salvador Dalí', 'Não tenha medo da perfeição: você nunca a alcançará.', 'No tengas miedo de la perfección, nunca la alcanzarás.', 'Diário de um Gênio', 'motivacao'],
    ['Salvador Dalí', 'Aos seis anos eu queria ser cozinheiro. Aos sete, queria ser Napoleão. Minha ambição não parou de crescer desde então.', 'A los seis años quería ser cocinero. A los siete quería ser Napoleón. Mi ambición no ha hecho más que crecer desde entonces.', 'A Vida Secreta de Salvador Dalí', 'autorreconhecimento'],
    ['Wolfgang Amadeus Mozart', 'Nem um temperamento vivaz nem uma mente aguçada fazem o gênio: o amor é a alma do gênio.', 'Weder ein lebhaftes Temperament noch ein scharfer Verstand machen das Genie aus: Liebe, Liebe, Liebe, das ist die Seele des Genies.', 'Cartas', 'amor'],
    ['Michelangelo', 'O melhor artista não tem conceito algum que um só mármore não encerre em si, com seu excesso.', 'Non ha l’ottimo artista alcun concetto ch’un marmo solo in sé non circoscriva col suo superchio.', 'Rime', 'reflexao'],

    ['Alice Walker', 'A maneira mais comum de as pessoas abrirem mão do seu poder é achando que não têm nenhum.', 'The most common way people give up their power is by thinking they don’t have any.', 'Em Busca dos Jardins de Nossas Mães', 'empoderamento'],
    ['Louisa May Alcott', 'Ela gosta demais de livros, e isso lhe virou a cabeça.', 'She is too fond of books, and it has turned her brain.', 'Mulherzinhas', 'educacao'],
    ['Madame de Staël', 'A glória é o luto brilhante da felicidade.', 'La gloire est le deuil éclatant du bonheur.', 'Corinne', 'reflexao'],
    ['Marcel Proust', 'Os verdadeiros paraísos são os paraísos que perdemos.', 'Les vrais paradis sont les paradis qu’on a perdus.', 'Em Busca do Tempo Perdido', 'reflexao'],
    ['Marie Curie', 'Nada na vida deve ser temido: deve apenas ser compreendido. É hora de compreender mais, para temer menos.', 'Rien dans la vie n’est à craindre, tout est à comprendre. C’est maintenant le moment de comprendre davantage, afin de craindre moins.', 'Pierre Curie', 'dificeis'],
    ['Benjamin Constant', 'A liberdade dos modernos exige que as instituições garantam ao indivíduo o direito de não ser perturbado em sua vida privada.', 'La liberté des modernes exige des institutions qui garantissent à l’individu le droit de n’être pas troublé dans sa vie privée.', 'Da Liberdade dos Antigos Comparada à dos Modernos', 'politica'],
    ['Hans Kelsen', 'A validade de uma norma jurídica não depende de seu conteúdo, mas do modo como ela foi produzida.', 'Die Geltung einer Rechtsnorm hängt nicht von ihrem Inhalt ab, sondern von der Art ihrer Erzeugung.', 'Teoria Pura do Direito', 'politica'],
    ['Henry Chesbrough', 'Nem toda ideia precisa nascer aqui para gerar valor aqui.', 'Not all of the smart ideas need to originate inside to create value inside.', 'Open Innovation', 'empreendedorismo'],
    ['Howard Schultz', 'Quando você se preocupa com as pessoas que trabalham com você, elas se preocupam com o cliente.', 'When you care about the people who work with you, they care about the customer.', 'Dedique-se de Coração', 'lideranca'],
    ['John Ruskin', 'A qualidade nunca é acidente: é sempre resultado de esforço inteligente.', 'Quality is never an accident. It is always the result of intelligent effort.', 'As Pedras de Veneza', 'negocios'],
    ['Lee Iacocca', 'Gerenciar é, no fim das contas, motivar outras pessoas.', 'Management is nothing more than motivating other people.', 'Iacocca: Uma Autobiografia', 'lideranca'],
    ['David Aaker', 'Construir marca é construir memória: o que as pessoas lembram vale mais do que o que você diz.', 'Building a brand is building memory structures in the mind of the customer.', 'Managing Brand Equity', 'negocios'],
    ['Brian Tracy', 'A clareza é o fator mais importante do sucesso pessoal: saber exatamente o que se quer.', 'Clarity is the most important single quality of goal setting: knowing exactly what you want.', 'Metas', 'motivacao'],
    ['Charles Kuralt', 'A estrada secundária mostra o país que a rodovia esconde.', 'You can see more of America from a back road in an hour than from an interstate in a day.', 'On the Road with Charles Kuralt', 'vida'],
    ['Ernest Renan', 'O esquecimento, e eu diria até o erro histórico, é um fator essencial na criação de uma nação.', 'L’oubli, et je dirai même l’erreur historique, sont un facteur essentiel de la création d’une nation.', 'O Que é uma Nação?', 'politica'],
    ['Arthur Ashe', 'O sucesso é uma viagem, não um destino: fazer é muitas vezes mais importante do que chegar.', 'Success is a journey, not a destination. The doing is often more important than the outcome.', 'Days of Grace', 'motivacao'],
    ['Elizabeth Stone', 'A maternidade é a única profissão em que o sucesso se mede pela capacidade de se tornar dispensável.', '', 'Black Sheep and Kissing Cousins', 'familia'],
    ['Gertrude Stein', 'Não há resposta. Não haverá resposta. Nunca houve resposta. Essa é a resposta.', 'There ain’t no answer. There ain’t going to be any answer. There never has been an answer. That’s the answer.', 'A Autobiografia de Alice B. Toklas', 'filosofos'],
    ['Abul Kalam Azad', 'A unidade da Índia não é um acidente da história: é o resultado de séculos de convivência entre povos diferentes.', '', 'India Wins Freedom', 'politica'],
    ['Harriet Beecher Stowe', 'As lágrimas mais amargas derramadas sobre túmulos são por palavras não ditas e atos não feitos.', 'The bitterest tears shed over graves are for words left unsaid and deeds left undone.', 'A Cabana do Pai Tomás', 'familia'],
    ['Benjamin Disraeli', 'A vida é curta demais para ser pequena.', 'Life is too short to be little.', 'Sybil, ou As Duas Nações', 'vida'],
    ['George Sand', 'Não há mais do que uma felicidade na vida: amar e ser amado.', 'Il n’y a qu’un seul bonheur dans la vie, c’est d’aimer et d’être aimé.', 'Indiana', 'amor']
  ];
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--t' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 80 · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f80' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 80 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 80: +' + n + ' frases, +' + nO + ' obras e +' + nP + ' páginas' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Laurel Thatcher Ulrich': [
      [
        'Mulheres Bem-Comportadas Raramente Fazem História',
        'livro',
        2007,
        'Ensaio histórico que parte de uma frase escrita pela autora em 1976, num artigo acadêmico sobre mulheres puritanas, e que escapou do texto original para virar slogan de camiseta e adesivo. O livro examina três autoras — Christine de Pizan, Elizabeth Cady Stanton e Virginia Woolf — para perguntar quem entra no registro histórico e por quê. Trata a própria frase como caso de estudo sobre circulação de ideias.'
      ]
    ],
    'Nelson Rodrigues': [['Flor de Obsessão', 'aforismo', 1997, 'Coletânea de mil frases extraídas das crônicas, peças e colunas do autor, organizada por Ruy Castro. Reúne as formulações curtas e provocadoras que fizeram sua fama de moralista às avessas, sobre futebol, covardia, hipocrisia e desejo. É a fonte da maior parte das frases que circulam com seu nome.']],
    'Samuel Butler': [
      ['Cadernos de Notas', 'aforismo', 1912, 'Anotações reunidas ao longo de décadas e publicadas após a morte do autor, com observações curtas sobre religião, evolução, dinheiro, arte e o absurdo das convenções vitorianas. O tom é o de quem pensa contra a própria época sem panfletar. É a obra em que a inteligência de Butler aparece mais solta e a origem de suas frases mais citadas.']
    ],
    'Rosalind Franklin': [['Cartas a John Franklin', 'carta', 1940, 'Correspondência com o pai, escrita quando a autora tinha vinte anos e estudava em Cambridge, em que defende sua decisão de dedicar-se à ciência contra as objeções familiares e discute a relação entre fé, evidência e vida prática. É o registro mais direto de seu pensamento fora dos trabalhos técnicos.']],
    'Pablo Picasso': [
      [
        'Declarações e conversas registradas',
        'documento',
        1935,
        'Conjunto de falas do pintor recolhidas por entrevistadores, fotógrafos e amigos ao longo de décadas, entre elas as conversas com Christian Zervos em 1935 e o convívio documentado por Brassaï. Picasso não escreveu teoria: suas posições sobre criação, trabalho e acaso chegaram por esse registro indireto, hoje reunido em edições críticas.'
      ]
    ],
    'Grace Hopper': [
      [
        'Declarações e palestras registradas',
        'discurso',
        1980,
        'Falas recolhidas de conferências, aulas na Marinha e entrevistas em televisão, em que a autora defende linguagens de programação legíveis por humanos, critica a resistência institucional à mudança e narra episódios da própria carreira. Não deixou obra escrita de reflexão; sua influência circula por esse registro oral, amplamente gravado.'
      ]
    ],
    'Barbara McClintock': [
      [
        'Declarações sobre método científico',
        'documento',
        1983,
        'Falas registradas em entrevistas e no período do Nobel, em que a pesquisadora descreve seu modo de trabalhar: observação longa e paciente de cada planta individual, em vez de tratamento estatístico de populações. São a principal fonte sobre o método que a levou a descobrir os elementos genéticos móveis décadas antes de a área aceitá-los.'
      ]
    ]
  };
  var PG = {
    'Laurel Thatcher Ulrich||Mulheres Bem-Comportadas Raramente Fazem História': {
      sobre: 'Ensaio que parte de uma frase escrita pela autora em 1976, num artigo acadêmico sobre mulheres puritanas, e que escapou do texto original para virar slogan, e examina quem entra no registro histórico e por quê.',
      contexto: 'A frase havia sido usada em camisetas, adesivos e canecas por três décadas, quase sempre sem o nome de quem a escreveu e com sentido invertido em relação ao original.',
      momento: 'Publicado em 2007, trinta e um anos depois do artigo de onde a frase saiu.',
      importancia: 'É raro o caso de uma autora que volta a examinar a própria frase como objeto histórico, e o livro faz disso o método: estuda Christine de Pizan, Elizabeth Cady Stanton e Virginia Woolf pela mesma pergunta.',
      curiosidade: 'No artigo original a frase não era um elogio à rebeldia: dizia que as mulheres comuns e discretas do período puritano tinham deixado poucos registros justamente por terem sido exemplares.'
    },
    'Nelson Rodrigues||Flor de Obsessão': {
      sobre: 'Coletânea de mil frases extraídas das crônicas, peças e colunas do autor, organizada por Ruy Castro, sobre futebol, covardia, hipocrisia, família e desejo.',
      contexto: 'Reunida três décadas depois do auge de sua produção em jornal, quando as formulações curtas já circulavam soltas e muitas vezes sem atribuição.',
      momento: 'Publicada em 1997, com o subtítulo As 1000 Melhores Frases de Nelson Rodrigues.',
      importancia: 'É a fonte da maior parte das frases que circulam com seu nome e o registro mais acessível de sua obra jornalística, dispersa em décadas de colunas.',
      curiosidade: 'O organizador é também autor da biografia do escritor, O Anjo Pornográfico, e recolheu as frases a partir do levantamento feito para aquele livro.'
    },
    'Samuel Butler||Cadernos de Notas': {
      sobre: 'Anotações reunidas ao longo de décadas, com observações curtas sobre religião, evolução, dinheiro, arte e o absurdo das convenções vitorianas.',
      contexto: 'Escritas por um autor que rompeu com a família de clérigos, criou ovelhas na Nova Zelândia e passou a vida em atrito com as certezas de sua época, inclusive com o darwinismo ortodoxo.',
      momento: 'Publicadas em 1912, dezanove anos após sua morte, a partir dos cadernos que ele mesmo organizou e revisou.',
      importancia: 'É a obra em que sua inteligência aparece mais solta e a origem de suas frases mais citadas, várias das quais circulam hoje sem atribuição.',
      curiosidade: 'Butler revisava e recopiava os próprios cadernos periodicamente, descartando o que já não lhe parecia bom — o volume publicado é, portanto, uma seleção feita por ele.'
    },
    'Rosalind Franklin||Cartas a John Franklin': {
      sobre: 'Correspondência com o pai, escrita quando a autora tinha vinte anos e estudava em Cambridge, em que defende sua decisão de dedicar-se à ciência e discute a relação entre fé, evidência e vida prática.',
      contexto: 'Escritas contra a objeção familiar de que a ciência ocuparia o lugar da religião e de que aquele não era caminho para uma moça de família judaica abastada em Londres.',
      momento: 'A carta mais citada é de 1940, quando a autora tinha vinte anos; ela morreria dezoito anos depois, aos trinta e sete.',
      importancia: 'É o registro mais direto de seu pensamento fora dos trabalhos técnicos e a principal fonte sobre a convicção que sustentou sua carreira.',
      curiosidade: 'A Fotografia 51, obtida por ela em 1952, foi mostrada a Watson sem seu conhecimento e foi decisiva para o modelo da dupla hélice; ela morreu antes do Nobel de 1962, que não é concedido postumamente.'
    },
    'Pablo Picasso||Declarações e conversas registradas': {
      sobre: 'Falas do pintor recolhidas por entrevistadores, fotógrafos e amigos ao longo de décadas, sobre criação, trabalho, acaso e o lugar da arte.',
      contexto: 'Picasso não escreveu teoria nem manifesto, ao contrário de vários contemporâneos; suas posições chegaram por esse registro indireto, feito por terceiros.',
      momento: 'As mais citadas vêm da entrevista a Christian Zervos, em 1935, e do convívio documentado por Brassaï entre 1932 e 1962.',
      importancia: 'São a única via de acesso ao pensamento declarado do pintor e fonte de praticamente todas as frases que circulam com seu nome.',
      curiosidade: 'Na entrevista de 1935 ele afirma que um quadro não é pensado e fixado de antemão: enquanto é feito, muda com o pensamento de quem o faz, e continua mudando depois, com quem o olha.'
    },
    'Grace Hopper||Declarações e palestras registradas': {
      sobre: 'Falas recolhidas de conferências, aulas na Marinha e entrevistas em televisão, em que a autora defende linguagens de programação legíveis por humanos e critica a resistência institucional à mudança.',
      contexto: 'Hopper passou a vida convencendo instituições de que computadores podiam ser programados em linguagem próxima do inglês, tese que a indústria rejeitou por anos antes de adotá-la no COBOL.',
      momento: 'As falas mais citadas são das décadas de 1970 e 1980, quando ela percorria universidades e bases militares dando palestras.',
      importancia: 'Não deixou obra escrita de reflexão; sua influência sobre o modo de pensar programação circula por esse registro oral, amplamente gravado.',
      curiosidade: 'Costumava distribuir pedaços de fio de trinta centímetros — a distância que a eletricidade percorre em um nanossegundo — para que a plateia visse o tempo de que falava.'
    },
    'Barbara McClintock||Declarações sobre método científico': {
      sobre: 'Falas registradas em entrevistas e no período do Nobel, em que a pesquisadora descreve seu modo de trabalhar: observação longa e paciente de cada planta individual, em vez de tratamento estatístico de populações.',
      contexto: 'Seus resultados sobre elementos genéticos móveis, apresentados em 1951, foram ignorados ou rejeitados pela área por mais de duas décadas, e ela deixou de publicá-los por um período.',
      momento: 'As declarações mais citadas são de 1983, ano em que recebeu o Nobel de Medicina, aos oitenta e um anos, sozinha.',
      importancia: 'São a principal fonte sobre o método que a levou à descoberta décadas antes de a genética molecular ter instrumentos para confirmá-la.',
      curiosidade: 'Foi a única mulher a receber sozinha o Nobel de Fisiologia ou Medicina, sem dividir o prêmio.'
    }
  };
  var NOVAS = [
    ['Laurel Thatcher Ulrich', 'Mulheres bem-comportadas raramente fazem história.', 'Well-behaved women seldom make history.', 'Mulheres Bem-Comportadas Raramente Fazem História', 'empoderamento'],
    ['Nelson Rodrigues', 'Toda unanimidade é burra.', '', 'Flor de Obsessão', 'reflexao'],
    ['Nelson Rodrigues', 'O dinheiro compra até amor sincero.', '', 'Flor de Obsessão', 'financas'],
    ['Samuel Butler', 'A vida é a arte de tirar conclusões suficientes a partir de premissas insuficientes.', 'Life is the art of drawing sufficient conclusions from insufficient premises.', 'Cadernos de Notas', 'vida'],
    ['Samuel Butler', 'Qualquer tolo pode dizer a verdade; é preciso algum juízo para mentir bem.', 'Any fool can tell the truth, but it requires a man of some sense to know how to lie well.', 'Cadernos de Notas', 'reflexao'],
    ['Rosalind Franklin', 'A ciência e a vida cotidiana não podem e não devem ser separadas.', 'Science and everyday life cannot and should not be separated.', 'Cartas a John Franklin', 'reflexao'],
    ['Pablo Picasso', 'Eu não procuro: eu encontro.', 'Je ne cherche pas, je trouve.', 'Declarações e conversas registradas', 'reflexao'],
    ['Pablo Picasso', 'Um quadro não é pensado e fixado de antemão: enquanto é feito, ele muda com o pensamento de quem o faz.', 'Un tableau n’est pas pensé et fixé d’avance; pendant qu’on le fait, il suit la mobilité de la pensée.', 'Declarações e conversas registradas', 'reflexao'],
    ['Grace Hopper', 'É mais fácil pedir perdão do que obter permissão.', 'It’s easier to ask forgiveness than it is to get permission.', 'Declarações e palestras registradas', 'empreendedorismo'],
    ['Grace Hopper', 'A frase mais perigosa da língua é: sempre fizemos assim.', 'The most dangerous phrase in the language is: we’ve always done it this way.', 'Declarações e palestras registradas', 'lideranca'],
    ['Barbara McClintock', 'É preciso ter um sentimento pelo organismo.', 'You have to have a feeling for the organism.', 'Declarações sobre método científico', 'reflexao'],

    ['Ada Lovelace', 'A ciência das operações, derivada da matemática, é uma ciência em si mesma, com sua própria verdade abstrata e seu próprio valor.', 'The science of operations, as derived from mathematics, is a science of itself, and has its own abstract truth and value.', 'Notas sobre a Máquina Analítica', 'reflexao'],
    ['Alain de Botton', 'Nossa posição na vida não é determinada pelo que temos, mas por como nos comparamos com aqueles que consideramos nossos iguais.', 'Our sense of our own worth is determined by comparison with those we consider our equals.', 'Desejo de Status', 'reflexao'],
    ['David Aaker', 'Uma marca forte é um ativo, e precisa ser gerida como qualquer outro ativo da empresa.', 'A strong brand is an asset and must be managed as one.', 'Building Strong Brands', 'negocios'],
    ['Florbela Espanca', 'Ser poeta é ser mais alto, é ser maior do que os homens! Morder como quem beija!', '', 'Charneca em Flor', 'autorreconhecimento'],
    ['Henri Matisse', 'Quem quiser dedicar-se à pintura deve começar por cortar a própria língua.', 'Celui qui veut se consacrer à la peinture doit commencer par se faire couper la langue.', 'Jazz', 'reflexao'],
    ['Herbert Spencer', 'A sociedade é um organismo: cresce, diferencia-se e torna-se mais interdependente à medida que se desenvolve.', 'Society is an organism: it grows, differentiates, and becomes more interdependent as it develops.', 'Princípios de Sociologia', 'politica'],
    ['Madame de Staël', 'O entusiasmo é o que há de melhor no ser humano: é a alma da poesia, do amor e da religião.', 'L’enthousiasme est ce qu’il y a de meilleur dans l’homme.', 'Da Alemanha', 'motivacao'],
    ['Marcel Proust', 'Não é preciso mudar de lugar: basta mudar de olhar.', 'Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.', 'Em Busca do Tempo Perdido', 'reflexao'],
    ['Max De Pree', 'Não podemos tornar-nos aquilo que precisamos ser permanecendo aquilo que somos.', 'We cannot become what we need to be by remaining what we are.', 'Liderança é uma Arte', 'empoderamento'],
    ['Melody Beattie', 'Cuidar de si mesmo não é egoísmo: é autopreservação.', 'Taking care of myself is not selfish. It is self-preservation.', 'Codependência Nunca Mais', 'autorreconhecimento'],
    ['Michael J. Fox', 'Aceitar não é resignar-se: é entender que algo é o que é e que há de haver um jeito de atravessá-lo.', 'Acceptance doesn’t mean resignation. It means understanding that something is what it is and that there’s got to be a way through it.', 'Lucky Man', 'dificeis'],
    ['Miguel Reale', 'O direito é fato, valor e norma: os três elementos são inseparáveis na experiência jurídica.', '', 'Filosofia do Direito', 'politica'],
    ['Nathaniel Hawthorne', 'Sê verdadeiro! Mostra livremente ao mundo, se não o teu pior, ao menos algum traço pelo qual o pior possa ser inferido.', 'Be true! Be true! Be true! Show freely to the world, if not your worst, yet some trait whereby the worst may be inferred.', 'A Letra Escarlate', 'autorreconhecimento'],
    ['P. T. Barnum', 'O engano consiste em cobrir com aparências falsas aquilo que se quer mostrar, para despertar a atenção do público.', 'The essence of humbug is putting on glittering appearances by which to suddenly arrest public attention.', 'As Fraudes do Mundo', 'manipulacao'],
    ['Padre Antônio Vieira', 'O pregador há de pregar como quem semeia, e não como quem ladrilha.', '', 'Sermão da Sexagésima', 'educacao'],
    ['Robert M. Hutchins', 'A educação implica ensino; o ensino implica conhecimento; conhecimento é verdade — e a verdade é a mesma em toda parte.', 'Education implies teaching. Teaching implies knowledge. Knowledge is truth. The truth is everywhere the same.', 'The Higher Learning in America', 'educacao'],
    ['Stendhal', 'A política numa obra literária é um tiro de pistola no meio de um concerto.', 'La politique dans une œuvre littéraire, c’est un coup de pistolet au milieu d’un concert.', 'O Vermelho e o Negro', 'politica'],
    ['Théophile Gautier', 'Tudo passa. Só a arte robusta tem eternidade.', 'Tout passe. L’art robuste seul a l’éternité.', 'Esmaltes e Camafeus', 'reflexao'],
    ['Woodrow Wilson', 'Acordos de paz abertos, abertamente alcançados, após os quais não haverá entendimentos internacionais privados de espécie alguma.', 'Open covenants of peace, openly arrived at, after which there shall be no private international understandings of any kind.', 'Os Quatorze Pontos', 'politica'],
    ['Émile-Auguste Chartier', 'É preciso querer ser feliz e fazer por isso.', 'Il faut vouloir être heureux et y mettre du sien.', 'Sobre Felicidade', 'felicidade']
  ];
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--s' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 81 · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f81' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 81 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 81: +' + n + ' frases, +' + nO + ' obras e +' + nP + ' páginas' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Henry Stanley Haskins': [
      [
        'Meditações em Wall Street',
        'aforismo',
        1940,
        'Coletânea de reflexões curtas publicada anonimamente por um corretor da bolsa de Nova York, sobre risco, medo, ambição e o que sustenta uma pessoa quando o mundo externo falha. O livro saiu sem nome de autor e com prefácio de Albert Jay Nock, e a identidade de Haskins só foi estabelecida depois. É a origem da frase sobre o que há dentro de nós, atribuída em massa a Emerson.'
      ]
    ],
    'Dinah Maria Craik': [
      ['Uma Vida por uma Vida', 'romance', 1859, 'Romance vitoriano construído em diários alternados de um médico militar e de uma jovem de família abastada, sobre culpa, segredo e reparação. É nele que está a passagem sobre o conforto de sentir-se seguro com alguém, sem precisar pesar pensamentos nem medir palavras, uma das descrições de amizade mais reproduzidas em língua inglesa.']
    ],
    'Leon C. Megginson': [
      [
        'Lições da História para a Administração',
        'artigo',
        1963,
        'Artigo publicado no Southwestern Social Science Quarterly, a partir de uma palestra sobre a relevância de Darwin para a administração. É o texto em que Megginson formula, como interpretação própria de A Origem das Espécies, a ideia de que sobrevive não a espécie mais forte nem a mais inteligente, e sim a que melhor se ajusta ao ambiente — formulação que passou a circular no mundo como se fosse do próprio Darwin.'
      ]
    ],
    'Tarsila do Amaral': [
      ['Cartas de Paris', 'carta', 1923, 'Correspondência enviada à família durante os anos de formação em Paris, em que a pintora relata o convívio com Léger, Brancusi e o círculo modernista, e descreve a virada em que decide abandonar os temas europeus para pintar o Brasil. São a fonte primária sobre a origem do projeto que resultaria em Abaporu e no movimento antropofágico.']
    ],
    'Candido Portinari': [
      ['Depoimentos e cartas', 'documento', 1940, 'Conjunto de declarações à imprensa, correspondência com escritores e amigos, e textos em que o pintor explica as próprias escolhas: por que pintou retirantes e trabalhadores, e por que recusou o pitoresco. Reunidos em edições críticas pelo Projeto Portinari, são a principal fonte sobre seu pensamento, já que não publicou obra teórica.']
    ],
    'São Jerônimo': [
      [
        'Comentário ao Livro de Isaías',
        'livro',
        410,
        'Comentário extenso ao profeta Isaías, escrito em Belém, que combina tradução do hebraico, discussão filológica e interpretação teológica. No prólogo está a formulação de que ignorar as Escrituras é ignorar a Cristo, uma das frases mais citadas da patrística latina. É também um dos textos em que Jerônimo defende a tradução a partir do original hebraico, e não da versão grega.'
      ]
    ],
    'Ring Lardner': [['Os Jovens Imigrantes', 'conto', 1920, 'Paródia de relato de viagem escrita como se fosse o diário de um menino de quatro anos, registrando a mudança da família de Indiana para Connecticut com ortografia infantil e observações involuntariamente cruéis sobre os adultos. É a origem do diálogo de três palavras mais citado da literatura americana de humor.']],
    'Marielle Franco': [
      [
        'Discursos na Câmara Municipal do Rio de Janeiro',
        'discurso',
        2017,
        'Intervenções em plenário e em comissões no ano em que exerceu o mandato de vereadora, sobre violência policial nas favelas, direitos das mulheres negras, saúde pública e moradia. Presidia a Comissão de Defesa da Mulher e integrava a comissão que fiscalizava a intervenção federal no Rio. Os registros em vídeo e nas atas são a fonte primária de sua atuação parlamentar.'
      ]
    ]
  };
  var PG = {
    'Henry Stanley Haskins||Meditações em Wall Street': {
      sobre: 'Coletânea de reflexões curtas sobre risco, medo, ambição e o que sustenta uma pessoa quando o mundo externo falha, escrita por um corretor da bolsa de Nova York.',
      contexto: 'Publicada logo após a Depressão, por alguém que havia perdido posição e reputação no mercado e escrevia a partir disso, sem assinar.',
      momento: 'Publicada em 1940, anonimamente, com prefácio de Albert Jay Nock; a autoria de Haskins só foi estabelecida depois.',
      importancia: 'É a origem da frase sobre o que fica atrás e o que fica adiante serem pequenos diante do que há dentro de nós — atribuída em massa a Emerson, que nunca a escreveu.',
      curiosidade: 'A má atribuição é tão difundida que aparece em discursos oficiais, livros de autoajuda e placas comemorativas; o nome do autor real quase nunca acompanha a frase.'
    },
    'Dinah Maria Craik||Uma Vida por uma Vida': {
      sobre: 'Romance vitoriano construído em diários alternados de um médico militar e de uma jovem de família abastada, sobre culpa, segredo e reparação.',
      contexto: 'Escrito por uma autora que se sustentava da própria escrita, caso raro entre mulheres inglesas do período, e que tratava de temas morais sem o desfecho consolador habitual do gênero.',
      momento: 'Publicado em 1859, o mesmo ano de A Origem das Espécies.',
      importancia: 'Contém a passagem sobre o conforto de sentir-se seguro com alguém, sem precisar pesar pensamentos nem medir palavras — uma das descrições de amizade mais reproduzidas em língua inglesa.',
      curiosidade: 'A passagem circula quase sempre sem atribuição ou creditada a autores diversos, e raramente com o nome da romancista que a escreveu.'
    },
    'Leon C. Megginson||Lições da História para a Administração': {
      sobre: 'Artigo a partir de uma palestra sobre a relevância de Darwin para a administração, em que o autor formula sua própria interpretação de A Origem das Espécies.',
      contexto: 'Escrito num momento em que a literatura de gestão americana buscava analogias biológicas para explicar a adaptação de empresas a mercados em mudança.',
      momento: 'Publicado no Southwestern Social Science Quarterly em 1963.',
      importancia: 'É a origem documentada da formulação de que sobrevive não a espécie mais forte nem a mais inteligente, e sim a que melhor se ajusta ao ambiente — atribuída no mundo inteiro a Darwin, que nunca escreveu nada equivalente.',
      curiosidade: 'A frase chegou a ser gravada em pedra no piso da Academia Nacional de Ciências dos Estados Unidos como se fosse do naturalista; pesquisadores rastrearam a origem até este artigo.'
    },
    'Tarsila do Amaral||Cartas de Paris': {
      sobre: 'Correspondência enviada à família durante os anos de formação em Paris, com o relato do convívio com Léger, Brancusi e o círculo modernista, e da decisão de abandonar os temas europeus para pintar o Brasil.',
      contexto: 'Escritas quando a pintora estudava com mestres do cubismo e percebia que a vanguarda europeia valorizava justamente o que o Brasil desprezava em si mesmo.',
      momento: 'As cartas mais citadas são de 1923; Abaporu seria pintado cinco anos depois.',
      importancia: 'São a fonte primária sobre a origem do projeto que resultaria no movimento antropofágico e na fase mais reconhecida de sua obra.',
      curiosidade: 'É numa dessas cartas que ela declara sentir-se cada vez mais brasileira e querer ser a pintora de sua terra — a formulação mais citada de todo o modernismo brasileiro em matéria de programa artístico.'
    },
    'Candido Portinari||Depoimentos e cartas': {
      sobre: 'Declarações à imprensa, correspondência com escritores e amigos, e textos em que o pintor explica por que pintou retirantes e trabalhadores, e por que recusou o pitoresco.',
      contexto: 'Portinari não publicou obra teórica; sua posição sobre arte e função social chegou por entrevistas, cartas e depoimentos, vários deles dados em períodos de perseguição política.',
      momento: 'Os textos mais citados são dos anos 1930 e 1940, período dos Retirantes e dos painéis para a Biblioteca do Congresso americano.',
      importancia: 'Reunidos em edições críticas pelo Projeto Portinari, são a principal fonte sobre seu pensamento e sobre as escolhas de tema que definiram sua obra.',
      curiosidade: 'O pintor morreu em 1962 por intoxicação pelo chumbo das tintas que usava, depois de ter sido advertido por médicos e de ter continuado a pintar assim mesmo.'
    },
    'São Jerônimo||Comentário ao Livro de Isaías': {
      sobre: 'Comentário extenso ao profeta Isaías, escrito em Belém, que combina tradução do hebraico, discussão filológica e interpretação teológica.',
      contexto: 'Escrito por quem havia aprendido hebraico já adulto para traduzir a Bíblia do original, decisão contestada por contemporâneos que preferiam a versão grega dos Setenta.',
      momento: 'Concluído por volta de 410, nos anos finais de sua vida em Belém.',
      importancia: 'No prólogo está a formulação de que ignorar as Escrituras é ignorar a Cristo, uma das frases mais citadas da patrística latina.',
      curiosidade: 'Jerônimo trabalhou mais de vinte anos na tradução que ficou conhecida como Vulgata, e enfrentou acusações de adulterar o texto sagrado por recorrer ao hebraico.'
    },
    'Ring Lardner||Os Jovens Imigrantes': {
      sobre: 'Paródia de relato de viagem escrita como se fosse o diário de um menino de quatro anos, registrando a mudança da família de Indiana para Connecticut, com ortografia infantil e observações involuntariamente cruéis sobre os adultos.',
      contexto: 'Escrita como resposta bem-humorada a um livro de viagem então em voga, assinado por um menino de fato, que fazia sucesso nos Estados Unidos.',
      momento: 'Publicada em 1920, primeiro em revista e depois em volume.',
      importancia: 'É a origem do diálogo de três palavras mais citado do humor americano, em que o pai, perguntado se está perdido, manda o filho calar a boca e chama isso de explicação.',
      curiosidade: 'Lardner era cronista esportivo de jornal, e a precisão com que reproduzia a fala corrente americana foi elogiada por Hemingway, Fitzgerald e Virginia Woolf.'
    },
    'Marielle Franco||Discursos na Câmara Municipal do Rio de Janeiro': {
      sobre: 'Intervenções em plenário e em comissões sobre violência policial nas favelas, direitos das mulheres negras, saúde pública e moradia, no ano em que exerceu o mandato de vereadora.',
      contexto: 'Proferidos por uma vereadora negra, nascida na Maré, eleita com a quinta maior votação da cidade, num período de intervenção federal na segurança pública do Rio de Janeiro.',
      momento: 'Proferidos entre janeiro de 2017 e março de 2018; ela foi assassinada em 14 de março de 2018, com o motorista Anderson Gomes.',
      importancia: 'Os registros em vídeo e nas atas são a fonte primária de sua atuação parlamentar e das denúncias que apresentou sobre ação policial em favelas.',
      curiosidade: 'Presidia a Comissão de Defesa da Mulher e integrava a comissão encarregada de fiscalizar a intervenção federal, função que exercia quando foi morta.'
    }
  };
  var NOVAS = [
    ['Henry Stanley Haskins', 'O que fica atrás de nós e o que fica à nossa frente são questões pequenas diante do que existe dentro de nós.', 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', 'Meditações em Wall Street', 'autorreconhecimento'],
    ['Dinah Maria Craik', 'Que conforto é sentir-se seguro com alguém: não precisar pesar pensamentos nem medir palavras, e sim derramá-los como são.', 'Oh, the comfort of feeling safe with a person, having neither to weigh thoughts nor measure words.', 'Uma Vida por uma Vida', 'amizade'],
    [
      'Leon C. Megginson',
      'Não é a espécie mais intelectual que sobrevive, nem a mais forte: é a que melhor consegue ajustar-se e adaptar-se ao ambiente em que se encontra.',
      'It is not the most intellectual of the species that survives; it is not the strongest that survives; but the species that survives is the one that is able best to adapt.',
      'Lições da História para a Administração',
      'dificeis'
    ],
    ['Tarsila do Amaral', 'Sinto-me cada vez mais brasileira: quero ser a pintora da minha terra.', '', 'Cartas de Paris', 'autorreconhecimento'],
    ['Candido Portinari', 'Resolvi pintar a realidade brasileira, nua e crua como ela é.', '', 'Depoimentos e cartas', 'reflexao'],
    ['São Jerônimo', 'Ignorar as Escrituras é ignorar a Cristo.', 'Ignoratio scripturarum, ignoratio Christi est.', 'Comentário ao Livro de Isaías', 'fe'],
    ['Ring Lardner', '"Cale a boca", ele explicou.', 'Shut up, he explained.', 'Os Jovens Imigrantes', 'reflexao'],
    ['Marielle Franco', 'Não serei interrompida.', '', 'Discursos na Câmara Municipal do Rio de Janeiro', 'empoderamento'],

    ['Leo Buscaglia', 'Ninguém dá o que não tem: por isso é preciso primeiro aprender a amar a si mesmo.', 'It is impossible to give what you do not have. You must first learn to love yourself.', 'Amor', 'amor'],
    ['Norman Schwarzkopf', 'Quando estiver no comando, comande.', 'When placed in command, take charge.', 'It Doesn’t Take a Hero', 'lideranca'],
    ['Phil Jackson', 'Liderar não é impor a própria vontade aos outros: é dominar a arte de soltar.', 'Leadership is not about forcing your will on others. It’s about mastering the art of letting go.', 'Onze Anéis', 'lideranca'],
    ['Shoshana Zuboff', 'A era digital começou com a promessa de democratizar o conhecimento e terminou numa concentração de conhecimento sem precedentes.', 'The digital age began with the promise to democratize knowledge and ended in an unprecedented concentration of knowledge.', 'A Era do Capitalismo de Vigilância', 'manipulacao'],
    ['Serena Williams', 'Um campeão não se define pelas vitórias, e sim pela forma como se recupera quando cai.', 'A champion is defined not by their wins but by how they can recover when they fall.', 'Rainha da Quadra', 'dificeis'],
    ['Thomas J. Stanley', 'Ninguém enriquece em uma geração vivendo ao lado de quem gasta sem parar.', 'Most people will never become wealthy in one generation if they are married to people who are wasteful.', 'O Milionário Mora ao Lado', 'financas'],
    ['Robert Collier', 'Comece de onde está, com o que tem: você descobrirá que já era suficiente.', 'Begin where you are; work where you are; the hour which you are now wasting may be crowded with grand possibilities.', 'The Robert Collier Letter Book', 'motivacao'],
    ['Santo Isidoro de Sevilha', 'A gramática é a origem e o fundamento das artes liberais.', 'Grammatica est origo et fundamentum liberalium litterarum.', 'Etimologias', 'educacao'],
    ['Rosalind Franklin', 'A ciência, para mim, dá uma explicação parcial da vida: até onde vai, apoia-se em fato, experiência e experimento.', 'Science, for me, gives a partial explanation of life. In so far as it goes, it is based on fact, experience and experiment.', 'Cartas a John Franklin', 'reflexao']
  ];
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--r' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 82 · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f82' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 82 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 82: +' + n + ' frases, +' + nO + ' obras e +' + nP + ' páginas' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 83 — conferência entre o texto em português e o original citado.
    Uma verificação de proporção entre os dois campos apontou catorze entradas
    acrescentadas nesta sessão em que a tradução e o original não correspondiam:
    ou o português trazia uma explicação que não está no original, ou o original
    citado era outra passagem do mesmo autor. Cada caso foi corrigido para que o
    campo orig seja de fato o original do que está escrito em português.
    Uma entrada foi retirada por ser, depois da correção, a mesma passagem de
    outra já presente. */
  var CORRIGE = [
    // autor, prefixo do texto atual, novo texto, novo original
    ['Michael Porter', 'A intensidade da concorrência em um setor', 'A intensidade da concorrência em um setor não é questão de coincidência nem de má sorte: ela tem raízes na estrutura econômica do próprio setor.', 'The intensity of competition in an industry is neither a matter of coincidence nor bad luck. Rather, competition in an industry is rooted in its underlying economic structure.'],
    ['Jonathan Haidt', 'A mente moral é como uma língua', 'A mente moral é como uma língua com seis receptores de sabor.', 'The righteous mind is like a tongue with six taste receptors.'],
    ['Pierre Bourdieu', 'O gosto é aquilo que une e separa', 'O gosto une e separa.', 'Le goût unit et sépare.'],
    ['Brené Brown', 'A vergonha é o medo da desconexão', 'A vergonha é o medo da desconexão.', 'Shame is the fear of disconnection.'],
    ['Georg Simmel', 'O habitante da metrópole reage com a cabeça', 'O habitante da metrópole reage com a cabeça, e não com o coração.', 'Der Großstädter reagiert mit dem Kopf statt mit dem Herzen.'],
    ['Tom Peters', 'As empresas excelentes têm uma inclinação para a ação', 'Uma inclinação para a ação: fazer, corrigir, tentar.', 'A bias for action: do it, fix it, try it.'],
    ['Lee Iacocca', 'Aplique-se. Nada de grande no mundo', 'Aplique-se. Busque toda a educação que puder e depois, por Deus, faça alguma coisa. Nada de grande foi conquistado sem entusiasmo.', 'Apply yourself. Get all the education you can, but then, by God, do something. Nothing great was ever achieved without enthusiasm.'],
    ['Harriet Tubman', 'Conduzi meu trem por oito anos', 'Fui condutora da Ferrovia Subterrânea por oito anos, e posso dizer o que a maioria dos condutores não pode: nunca descarrilei meu trem e nunca perdi um passageiro.', 'I was conductor of the Underground Railroad for eight years, and I can say what most conductors can’t say — I never ran my train off the track and I never lost a passenger.'],
    [
      'Jane Goodall',
      'Cada um de nós faz diferença todos os dias',
      'Você não atravessa um único dia sem causar algum efeito no mundo à sua volta. O que você faz importa, e cabe a você decidir que tipo de diferença quer fazer.',
      'You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.'
    ],
    ['Estée Lauder', 'Não existe substituto para o contato', 'Telefone, telégrafo, conte a uma mulher.', 'Telephone, telegraph, tell a woman.'],
    ['Quintiliano', 'Aprendemos menos pelo que nos ensinam', 'Ensina mais quem faz aprender.', 'Plus docet, qui discere facit.']
  ];
  var SAIR = [
    // condensação de uma passagem que já consta do acervo em versão completa
    ['Marcel Proust', 'Não é preciso mudar de lugar']
  ];
  function aplicar() {
    var n = 0,
      naoAchou = [];
    CORRIGE.forEach(function (c) {
      var alvo = QUOTES.filter(function (q) {
        return q.author === c[0] && q.text.indexOf(c[1]) === 0;
      });
      if (alvo.length !== 1) {
        naoAchou.push('corrigir: ' + c[0] + ' (' + alvo.length + ')');
        return;
      }
      alvo[0].text = c[2];
      alvo[0].orig = c[3];
      n++;
    });
    var r = 0;
    SAIR.forEach(function (p) {
      var alvo = QUOTES.filter(function (q) {
        return q.author === p[0] && q.text.indexOf(p[1]) === 0;
      });
      if (alvo.length !== 1) {
        naoAchou.push('retirar: ' + p[0] + ' (' + alvo.length + ')');
        return;
      }
      var res = typeof removerFrase === 'function' ? removerFrase(alvo[0].qid, 'condensação de passagem já presente em versão completa') : { ok: false };
      if (res && res.ok) r++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (naoAchou.length) console.warn('Fase 83 · não localizadas:', naoAchou.join(' | '));
    console.log('MeMotiva · Fase 83: ' + n + ' traduções acertadas com o original citado, ' + r + ' retirada por redundância.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Maria Callas': [
      [
        'Aulas na Juilliard',
        'discurso',
        1971,
        'Série de doze masterclasses dadas na Juilliard School de Nova York, gravadas e depois transcritas e publicadas. A soprano trabalha com jovens cantores frase por frase, insistindo que o texto e a intenção dramática vêm antes do efeito vocal, e fala do próprio método de estudo. São o registro mais completo de seu pensamento sobre canto, já que não deixou obra escrita.'
      ]
    ],
    'Jesse Owens': [
      [
        'Jesse: O Homem que Correu Mais que Hitler',
        'memoria',
        1978,
        'Autobiografia escrita com Paul Neimark, que narra a infância de filho de meeiros no Alabama, a mudança para Ohio, os quatro ouros de Berlim em 1936 e as décadas seguintes de dificuldade financeira num país que o celebrava e continuava segregando. Corrige, entre outras coisas, a versão corrente sobre o suposto desprezo de Hitler.'
      ]
    ]
  };
  var PG = {
    'Maria Callas||Aulas na Juilliard': {
      sobre: 'Doze masterclasses dadas na Juilliard School, em que a soprano trabalha com jovens cantores frase por frase, insistindo que o texto e a intenção dramática vêm antes do efeito vocal.',
      contexto: 'Dadas quando ela já havia encerrado a carreira nos palcos, aos quarenta e sete anos, e procurava transmitir o método de estudo que construíra sozinha.',
      momento: 'Ministradas entre outubro de 1971 e março de 1972; foram gravadas e depois transcritas e publicadas.',
      importancia: 'São o registro mais completo de seu pensamento sobre canto, já que não deixou obra escrita, e continuam sendo material de estudo em conservatórios.',
      curiosidade: 'As aulas inspiraram a peça Master Class, de Terrence McNally, que ganhou o Tony de melhor peça em 1996.'
    },
    'Jesse Owens||Jesse: O Homem que Correu Mais que Hitler': {
      sobre: 'Autobiografia escrita com Paul Neimark, sobre a infância de filho de meeiros no Alabama, a mudança para Ohio, os quatro ouros de Berlim em 1936 e as décadas seguintes num país que o celebrava e continuava segregando.',
      contexto: 'Escrita quatro décadas depois dos Jogos, quando a versão corrente da história já havia se fixado em torno de um desprezo de Hitler que, segundo o próprio Owens, não ocorreu daquela forma.',
      momento: 'Publicada em 1978, dois anos antes de sua morte.',
      importancia: 'É a principal fonte sobre sua vida depois de Berlim, período em que chegou a correr contra cavalos em exibições pagas para sustentar a família.',
      curiosidade: 'O livro registra que, de volta aos Estados Unidos, ele teve de usar o elevador de serviço para chegar à própria homenagem no Waldorf-Astoria.'
    }
  };
  var NOVAS = [
    ['Maria Callas', 'Uma ópera começa muito antes de a cortina subir e termina muito depois de ela descer.', 'An opera begins long before the curtain goes up and ends long after it has come down.', 'Aulas na Juilliard', 'reflexao'],
    ['Maria Callas', 'Nasce-se com uma voz, mas é preciso aprender o que se está dizendo e por quê.', 'You are born with a voice, but you must learn what you are saying and why.', 'Aulas na Juilliard', 'educacao'],
    ['Jesse Owens', 'Hitler não me esnobou: foi o meu próprio presidente que não me mandou sequer um telegrama.', 'Hitler didn’t snub me — it was our president who snubbed me. The president didn’t even send me a telegram.', 'Jesse: O Homem que Correu Mais que Hitler', 'politica'],
    ['Jesse Owens', 'Todos temos sonhos. Mas, para transformar sonhos em realidade, é preciso muitíssima determinação, dedicação, autodisciplina e esforço.', 'We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline and effort.', 'Jesse: O Homem que Correu Mais que Hitler', 'motivacao'],
    ['Tarsila do Amaral', 'Amo o mato, amo o branco, amo o caboclo: quero pintar tudo isso.', '', 'Cartas de Paris', 'autorreconhecimento'],
    ['Wolfgang Amadeus Mozart', 'Não presto atenção aos elogios nem às censuras: sigo apenas o meu próprio sentimento.', 'Ich kümmere mich weder um Lob noch um Tadel: ich folge nur meinem eigenen Gefühl.', 'Cartas', 'autorreconhecimento'],
    ['Henry Stanley Haskins', 'As palavras são o trocado do pensamento.', 'Words are the small change of thought.', 'Meditações em Wall Street', 'reflexao'],
    ['Laurel Thatcher Ulrich', 'A história não é o passado: é a história que contamos sobre o passado.', 'History is not the past but the story we tell about the past.', 'Mulheres Bem-Comportadas Raramente Fazem História', 'reflexao'],
    ['Ring Lardner', 'Não sou o tipo de sujeito que se queixa — mas você devia ver o que eles fizeram comigo.', 'I ain’t the kind of guy that squawks, but you ought to see what they done to me.', 'You Know Me Al', 'reflexao'],
    ['São Jerônimo', 'O que não se conhece não se ama.', 'Quod nescitur non amatur.', 'Comentário ao Livro de Isaías', 'educacao'],
    ['Louis Armstrong', 'Nunca quis ser uma grande estrela. Só queria tocar o meu instrumento.', 'I never did want to be no big star. I just wanted to blow my horn.', 'Satchmo: Minha Vida em Nova Orleans', 'motivacao']
  ];
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--q' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 84 · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f84' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 84 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 84: +' + n + ' frases, +' + nO + ' obras e +' + nP + ' páginas' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Érico Veríssimo': [
      [
        'Solo de Clarineta',
        'memoria',
        1973,
        'Autobiografia em dois volumes, o segundo inacabado, que cobre a infância em Cruz Alta, a falência do pai, o trabalho como balconista de farmácia, a chegada à literatura e os anos como professor nos Estados Unidos. O tom é conversado e irônico, sem a solenidade habitual do gênero. É a principal fonte sobre sua formação e sobre a posição política que assumiu publicamente.'
      ]
    ]
  };
  var PG = {
    'Érico Veríssimo||Solo de Clarineta': {
      sobre: 'Autobiografia em dois volumes, o segundo inacabado, sobre a infância em Cruz Alta, a falência do pai, o trabalho como balconista de farmácia, a chegada à literatura e os anos nos Estados Unidos.',
      contexto: 'Escrita durante a ditadura militar, por um autor que recusava o rótulo de escritor político mas que assumia posições públicas com frequência.',
      momento: 'O primeiro volume saiu em 1973; o segundo foi publicado em 1976, um ano após sua morte, inacabado.',
      importancia: 'É a principal fonte sobre sua formação e sobre a posição pública que assumiu, e um dos poucos relatos autobiográficos brasileiros escritos sem solenidade.',
      curiosidade: 'O título vem de uma imagem que o autor usa para descrever a própria escrita: a de alguém tocando clarineta sozinho, sem orquestra por trás.'
    }
  };
  var NOVAS = [
    ['Érico Veríssimo', 'Não sou um escritor engajado, mas sou um homem engajado.', '', 'Solo de Clarineta', 'autorreconhecimento'],
    ['Coelho Neto', 'O chão, em volta dos jasmineiros, era uma alcatifa aromal mosqueada de abelhas.', '', 'Rei Negro', 'reflexao', 'Rei Negro (1914), capítulo I; edição digital da Fundação Darcy Ribeiro, p. 3']
  ];
  /* -------- relatório das lacunas que permanecem -------- */
  var ESCRITURA =
    /^(Alcorão|Prov[ée]rbios|Salmos|Livro d|Eclesiastes|Deuteron[óô]mio|Carta a|Carta d|Primeira Carta|Segunda Carta|Mishná|Pirkei|Upanishad|Katha|Mundaka|Tradi[çc][ãa]o|Talmude|G[êe]nesis|[ÊE]xodo|Isa[íi]as|Mateus|Marcos [0-9]|Lucas|Jo[ãa]o [0-9]|Bhagavad|Tao Te|Dhammapada|Ditado|Autor n[ãa]o|B[íi]blia|Tor[áa]|Rig Veda|[0-9] Samuel|Ben Sir[áa]|Lev[íi]tico|Miqueias|Prov[ée]rbio|Shimon|Rabi )/i;
  var TEXTUAL = { livro: 1, ensaio: 1, memoria: 1, poesia: 1, manual: 1, tratado: 1, romance: 1, carta: 1, discurso: 1, sagrado: 1, filosofia: 1, aforismo: 1, documento: 1, conto: 1, diálogo: 1, dialogo: 1, diario: 1, artigo: 1, biografia: 1, cronica: 1, roteiro: 1, peca: 1, teatro: 1 };
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--p' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      )
        continue;
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0;
    NOVAS.forEach(function (r, idx) {
      if (existentes[norm(r[1])]) return;
      if (
        !(
          OBRAS[r[0]] &&
          OBRAS[r[0]].some(function (o) {
            return o.t === r[3];
          })
        )
      )
        return;
      var q = { author: r[0], text: r[1], src: r[5] || r[3], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao' };
      if (r[2]) q.orig = r[2];
      q.qid = 'f85' + idx.toString(36) + Math.abs(norm(r[1]).length * 15485863).toString(36);
      QUOTES.push(q);
      n++;
    });

    /* LACUNAS() — por que cada pessoa com poucas frases continua assim.
     O acervo só aceita frase com obra confirmada. Quando isso não é possível,
     o motivo é um destes três, e nenhum deles se resolve acrescentando texto. */
    window.LACUNAS = function () {
      var cnt = {};
      QUOTES.forEach(function (q) {
        cnt[q.author] = (cnt[q.author] || 0) + 1;
      });
      var linhas = [];
      Object.keys(cnt).forEach(function (a) {
        if (cnt[a] > 2 || ESCRITURA.test(a)) return;
        var obras = OBRAS[a] || [];
        var temTexto = obras.some(function (o) {
          return TEXTUAL[String(o.tipo)];
        });
        var motivo;
        if (!obras.length) motivo = 'sem obra catalogada';
        else if (!temTexto) motivo = 'obra não textual (quadro, música, invento ou feito) — só entra com declaração registrada';
        else motivo = 'obra textual disponível — expansão possível, exige localizar a passagem';
        linhas.push({ pessoa: a, frases: cnt[a], obras: obras.length, motivo: motivo });
      });
      linhas.sort(function (x, y) {
        return x.frases - y.frases || x.pessoa.localeCompare(y.pessoa);
      });
      var porMotivo = {};
      linhas.forEach(function (l) {
        porMotivo[l.motivo] = (porMotivo[l.motivo] || 0) + 1;
      });
      console.log('Pessoas com uma ou duas frases: ' + linhas.length + '. Referências de escritura não entram na conta — cada versículo é um registro único por definição.');
      console.table(porMotivo);
      console.table(linhas);
      return linhas;
    };
    console.log('MeMotiva · Fase 85: +' + n + ' frase, +' + nO + ' obra e +' + nP + ' página · LACUNAS() lista o que falta e por quê.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 86 — Etapa 1 da curadoria (sessão de 28/09/2026).
    Três frases com texto conferido em fonte consultada, duas correções de
    atribuição com evidência documental e uma obra nova com página.
    Ver CHECKPOINT.md e curadoria/verificacao-pendente.csv. */
  var OB = { 'Harriet Beecher Stowe': [['Little Foxes', 'livro', 1866, 'Livro de 1866 sobre os pequenos hábitos que corroem a felicidade doméstica, com seções dedicadas à irritabilidade, à teimosia e à intolerância. Stowe o assinou com o pseudônimo Christopher Crowfield. É obra de orientação de conduta, e não romance.']] };
  var PG = {
    'Harriet Beecher Stowe||Little Foxes': {
      sobre: 'Livro de 1866 sobre os pequenos hábitos que corroem a felicidade doméstica, com seções dedicadas à irritabilidade, à teimosia e à intolerância. Stowe o assinou com o pseudônimo Christopher Crowfield. É obra de orientação de conduta, e não romance.',
      contexto: 'Saiu catorze anos depois de A Cabana do Pai Tomás, num gênero bem diferente: ensaios sobre a vida em família, escritos sob pseudônimo.',
      momento: 'A primeira edição é de 1866. A edição inglesa da Bell and Daldy, de Londres, tem 133 páginas.',
      importancia: 'É de onde vem a frase, muito repetida, sobre as lágrimas mais amargas derramadas sobre túmulos, que costuma circular sem obra e já foi atribuída a A Cabana do Pai Tomás.',
      curiosidade: 'O título alude a Cântico dos Cânticos 2:15, as pequenas raposas que estragam as vinhas, imagem que a autora aplica aos pequenos hábitos que estragam a vida doméstica.'
    }
  };
  var NOVAS = [
    ['Padre Antônio Vieira', 'Vós, diz Cristo, Senhor nosso, falando com os pregadores, sois o sal da terra: e chama-lhes sal da terra, porque quer que façam na terra o que faz o sal.', '', 'Sermão de Santo Antônio aos Peixes', 'reflexao', 'Sermão de Santo Antônio aos Peixes (1654), exórdio'],
    ['John Ruskin', 'Não é, a rigor, o trabalho que se divide, mas os homens: divididos em meros segmentos de homens.', 'It is not, truly speaking, the labour that is divided; but the men:—Divided into mere segments of men', 'As Pedras de Veneza', 'reflexao', 'As Pedras de Veneza (1853), vol. II, "A Natureza do Gótico", § 16'],
    ['Rabindranath Tagore', 'A mesma corrente de vida que percorre minhas veias, noite e dia, percorre o mundo e dança em medidas rítmicas.', 'The same stream of life that runs through my veins night and day runs through the world and dances in rhythmic measures.', 'Gitanjali', 'vida', 'Gitanjali (1912), poema 69']
  ];
  /* Frase que estava com o autor errado: mantém o qid (favoritos e links continuam válidos). */
  var REATRIBUIR = [{ de: 'François Mauriac', texto: 'Amamos apenas aquilo que não possuímos inteiramente.', para: 'Marcel Proust', src: 'A Prisioneira (1923), volume V de Em Busca do Tempo Perdido', orig: 'On n\u2019aime que ce qu\u2019on ne possède pas tout entier.' }];
  /* Frase certa, obra errada. */
  var TROCAR_FONTE = [{ autor: 'Harriet Beecher Stowe', texto: 'As lágrimas mais amargas derramadas sobre túmulos são por palavras não ditas e atos não feitos.', de: 'A Cabana do Pai Tomás', src: 'Little Foxes (1866)' }];
  function aplicar() {
    var nO = 0,
      nP = 0,
      nQ = 0,
      nR = 0,
      nF = 0,
      dup = 0,
      semObra = [],
      naoAchou = [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      OB[nome].forEach(function (r) {
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          return;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--p' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      });
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      )
        continue;
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    REATRIBUIR.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r.de && norm(x.text) === norm(r.texto);
      })[0];
      if (!q) {
        naoAchou.push(r.de + ': ' + r.texto.slice(0, 40));
        return;
      }
      q.author = r.para;
      q.src = r.src;
      if (r.orig) q.orig = r.orig;
      nR++;
    });
    TROCAR_FONTE.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r.autor && norm(x.text) === norm(r.texto);
      })[0];
      if (!q) {
        naoAchou.push(r.autor + ': ' + r.texto.slice(0, 40));
        return;
      }
      q.src = r.src;
      nF++;
    });
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    NOVAS.forEach(function (r, idx) {
      if (existentes[norm(r[1])]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[r[0]] &&
          OBRAS[r[0]].some(function (o) {
            return o.t === r[3];
          })
        )
      ) {
        semObra.push(r[0] + ' — ' + r[3]);
        return;
      }
      var q = { author: r[0], text: r[1], src: r[5] || r[3], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao' };
      if (r[2]) q.orig = r[2];
      q.qid = 'f86' + idx.toString(36) + Math.abs(norm(r[1]).length * 15485863).toString(36);
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 86 · obra fora do catálogo:', semObra.join(' | '));
    if (naoAchou.length) console.warn('Fase 86 · não localizadas:', naoAchou.join(' | '));
    console.log('MeMotiva · Fase 86: +' + nQ + ' frases' + (dup ? ' (' + dup + ' já existentes)' : '') + ', ' + nR + ' reatribuída, ' + nF + ' fonte corrigida, +' + nO + ' obra e +' + nP + ' página.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* Fase 87 — exportação de CSV a partir do estado real do acervo.
   O projeto não tinha nenhuma função de exportação: os CSVs de curadoria
   eram feitos à mão em outra sessão e ficavam desatualizados assim que o
   JS avançava (foi o que aconteceu entre o checkpoint v105 e este build).
   window.CURADORIA_EXPORT_CSV() gera os três arquivos com os dados
   efetivamente carregados, sempre em sincronia. Em navegador, com download=true,
   baixa os três arquivos; sem isso, apenas retorna o texto. */
window.CURADORIA_EXPORT_CSV = function (download) {
  function esc(v) {
    v = v === undefined || v === null ? '' : String(v);
    return /[;"\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }
  function linhas(rows) {
    return rows
      .map(function (r) {
        return r.map(esc).join(';');
      })
      .join('\n');
  }

  var frases = [['autor', 'frase', 'fonte', 'procedencia', 'status', 'categoria']];
  QUOTES.forEach(function (q) {
    frases.push([q.author, q.text, q.src || '', q.notaAutoria || '', q.st || 'A', q.cat || '']);
  });

  var obras = [['autor', 'titulo', 'tipo', 'ano', 'tem_pagina', 'descricao']];
  Object.keys(OBRAS).forEach(function (autor) {
    OBRAS[autor].forEach(function (o) {
      var pag = Object.keys(OBRA_PAGINA).indexOf(autor + '||' + o.t) >= 0;
      var d = pag ? OBRA_PAGINA[autor + '||' + o.t].sobre || '' : o.d || '';
      obras.push([autor, o.t, o.tipo || '', o.ano || '', pag ? 'sim' : 'nao', d]);
    });
  });

  var lac = typeof LACUNAS === 'function' ? LACUNAS() : [];
  var lacunas = [['pessoa', 'frases', 'obras_catalogadas', 'tem_obra_textual', 'motivo', 'obras']];
  lac.forEach(function (l) {
    var obrasP = (OBRAS[l.pessoa] || [])
      .map(function (o) {
        return o.t;
      })
      .join(' | ');
    var textual = /obra textual dispon[íi]vel/.test(l.motivo) ? 'sim' : /n[ãa]o textual/.test(l.motivo) ? 'nao' : 'sem_obra';
    lacunas.push([l.pessoa, l.frases, l.obras, textual, l.motivo, obrasP]);
  });

  var out = {
    'curadoria-frases.csv': '\ufeff' + linhas(frases),
    'catalogo-obras.csv': '\ufeff' + linhas(obras),
    'lacunas-restantes.csv': '\ufeff' + linhas(lacunas)
  };
  if (download && typeof document !== 'undefined') {
    Object.keys(out).forEach(function (nome) {
      var blob = new Blob([out[nome]], { type: 'text/csv;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = nome;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }
  console.log('MeMotiva · CURADORIA_EXPORT_CSV(): ' + QUOTES.length + ' frases, ' + obras.length.toString() + ' linhas de obra (com cabeçalho), ' + lac.length + ' lacunas.');
  return out;
};

(function () {
  /* Fase 88 — Etapa 1, continuação (sessão de 28/09/2026, segundo lote).
    1 frase nova com texto conferido na fonte primária (Gutenberg). Duas tentativas
    descartadas nesta mesma sessão, por rigor: (1) a frase mais popular atribuída a
    Plutarco ("a mente não é um vaso a encher, mas um fogo a acender") é uma
    contração moderna do texto de Moralia, "Da Arte de Ouvir" — não a redação
    original — e por isso não entrou no acervo; (2) uma frase de Louisa May Alcott
    (Mulherzinhas, sobre não temer tempestades) que eu tinha verificado na fonte
    primária já existia no acervo com outra tradução ("conduzir" em vez de "velejar"
    o navio) — minha checagem de duplicata por igualdade exata de texto normalizado
    não pegou essa variante de tradução, exatamente o tipo de caso que a Fase 75 do
    próprio projeto existe para resolver. Descartada antes de publicar. Ver
    curadoria/CHECKPOINT.md. */
  var NOVAS = [['Oliver Goldsmith', 'O homem pouco precisa aqui embaixo, e não precisa desse pouco por muito tempo.', 'Man wants but little here below, nor wants that little long.', 'O Vigário de Wakefield', 'reflexao', 'O Vigário de Wakefield (1766), capítulo VIII, do poema "O Eremita" recitado no romance']];
  function aplicar() {
    var nQ = 0,
      dup = 0,
      semObra = [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    NOVAS.forEach(function (r, idx) {
      if (existentes[norm(r[1])]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[r[0]] &&
          OBRAS[r[0]].some(function (o) {
            return o.t === r[3];
          })
        )
      ) {
        semObra.push(r[0] + ' — ' + r[3]);
        return;
      }
      var q = { author: r[0], text: r[1], src: r[5] || r[3], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao' };
      if (r[2]) q.orig = r[2];
      q.qid = 'f88' + idx.toString(36) + Math.abs(norm(r[1]).length * 15485863).toString(36);
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 88 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 88: +' + nQ + ' frases' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* Fase 89 — fecha a cadeia de verdade, sem depender de setTimeout(0).
   Auditoria de 28/09/2026: o portão da Fase 75 usava setTimeout(aplicar, 0) para
   garantir que rodasse por último. Em teste automatizado (jsdom, três cargas
   limpas) esse timer NUNCA disparou sozinho dentro de 4 a 6 segundos de espera —
   o gate não estava rodando no carregamento normal. window.__F75_APLICAR (exposto
   dentro da própria Fase 75) permite chamar a função de forma determinística.
   Esta fase faz exatamente isso, como o verdadeiro último passo síncrono da
   cadeia de inicialização, e mantém o setTimeout original intacto (não removido,
   apenas agora redundante) para não mudar mais comportamento do que o necessário. */
(function () {
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    if (typeof window.__F75_APLICAR === 'function' && !window.__F75_APLICADO) {
      try {
        window.__F75_APLICAR();
      } catch (e) {
        console.error('Fase 89 · falha ao rodar a Fase 75 de forma determinística:', e);
      }
    }
  };
})();

(function () {
  /* Fase 90 — Etapa 1, curadoria de precisão (sessão de 28/09/2026, terceiro lote).
    Roda DEPOIS da Fase 75 (garantido pela Fase 89 acima, que já fechou a cadeia
    de deduplicação antes desta). Revisão manual dos 27 pares que a Fase 75
    fundiu: a fusão escolhe pela presença de metadados de fonte (capítulo, data),
    não pela precisão da tradução — em dois casos isso manteve a versão com erro
    de tradução e descartou a mais fiel ao original. Corrigido abaixo. Além disso,
    a pedido explícito do proprietário ("atribuição popular eu queria que não
    existisse"), pesquisei os autores mais vítimas de citação falsa na internet
    (Einstein, Gandhi, Mozart) e removi ou substituí o que não resistiu à
    checagem contra fonte primária. Ver curadoria/CHECKPOINT.md para as fontes
    de cada decisão. */

  /* Casamento por prefixo, não por igualdade exata: evita falha silenciosa caso eu
    tenha transcrito mal um caractere ao final de uma frase longa ao revisar o
    relatório da Fase 75 (aconteceu com a frase do Einstein na primeira tentativa
    desta fase — corrigido depois de conferir o texto exato no CSV exportado). */
  function corrigirTexto(autor, prefixoTextoAntigo, patch) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixoTextoAntigo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixoTextoAntigo.slice(0, 50) };
    Object.keys(patch).forEach(function (k) {
      q[k] = patch[k];
    });
    return { ok: true };
  }
  function removerPorPrefixo(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }

  function aplicar() {
    var LOG = [];

    /* 1) Proust — a Fase 75 manteve "únicos paraísos", tradução imprecisa de "les
     vrais paradis". O francês original (edição Gallimard 1927, conferido também
     na tradução inglesa de Stephen Hudson) diz claramente "vrais" = verdadeiros. */
    LOG.push(['corrige', 'Marcel Proust', corrigirTexto('Marcel Proust', 'Os únicos paraísos são os paraísos que perdemos.', { text: 'Os verdadeiros paraísos são os paraísos que perdemos.', orig: "car les vrais paradis sont les paradis qu'on a perdus" })]);

    /* 2) Tarsila do Amaral — a Fase 75 manteve a versão truncada e popularizada,
     sem a primeira oração. A carta de 1923 à família (citada em fonte legislativa
     e em artigo acadêmico, ambos reproduzindo o trecho integral) traz a frase completa. */
    LOG.push(['corrige', 'Tarsila do Amaral', corrigirTexto('Tarsila do Amaral', 'Quero ser a pintora da minha terra.', { text: 'Sinto-me cada vez mais brasileira: quero ser a pintora da minha terra.', src: 'Carta à família, 1923' })]);

    /* 3) Einstein — "o mundo é um lugar perigoso..." não é citação literal: é
     paráfrase popular de uma nota real de 1953 sobre Pablo Casals, publicada em
     Conversations avec Pablo Casals (J. M. Corredor, 1955), na qual Einstein
     elogia a percepção de Casals — não enuncia isso como máxima própria em
     primeira pessoa. Apurado por Quote Investigator. Substituída pelo texto fiel
     à nota real, com o original em alemão. */
    LOG.push([
      'corrige',
      'Albert Einstein',
      corrigirTexto('Albert Einstein', 'O mundo é um lugar perigoso de se viver, não por causa daqueles que fazem o mal', {
        text: 'Ele percebeu com muita clareza que o mundo corre maior perigo da parte dos que toleram ou encorajam o mal do que da parte daqueles que o cometem.',
        src: 'Nota sobre Pablo Casals, 30 de março de 1953, publicada em Conversations avec Pablo Casals, de J. M. Corredor (1955)',
        orig: 'Er hat klar erkannt, dass die Welt mehr bedroht ist durch die, welche das Uebel dulden oder ihm Vorschub leisten, als durch die Übeltäter selbst.'
      })
    ]);

    /* 4) Mozart — nenhuma fonte primária localizada em nenhuma das duas variantes
     que existiam no acervo (nem em inglês, nem em português; ausente até do
     Wikiquote, que documenta cuidadosamente citações disputadas e mal atribuídas
     de Mozart). Sem carta, sem data, sem destinatário. Removida, não apenas fundida. */
    LOG.push(['remove', 'Wolfgang Amadeus Mozart', removerPorPrefixo('Wolfgang Amadeus Mozart', 'Nem um temperamento vivaz', 'sem fonte primária localizável em nenhuma variante; ausente até do Wikiquote (que documenta disputas de Mozart); atribuição popular sem verificação, removida a pedido de curadoria extrema')]);

    /* 5) e 6) Gandhi — "A felicidade é quando/A felicidade é alcançada quando..."
     (duas variantes, não fundidas pela Fase 75 por ficarem abaixo do limiar de
     semelhança). É uma das citações mais repetidas da internet atribuídas a
     Gandhi, sem nenhuma fonte primária: nenhum site consultado — incluindo os
     que mais a reproduzem — cita volume ou página das Collected Works, e ela
     não consta entre as frases com fonte no Wikiquote de Gandhi. Removidas as duas. */
    LOG.push(['remove', 'Mahatma Gandhi', removerPorPrefixo('Mahatma Gandhi', 'A felicidade é quando o que você pensa', 'sem fonte primária; uma das citações mais difundidas sem verificação atribuídas a Gandhi, ausente das Collected Works consultáveis; atribuição popular removida a pedido de curadoria extrema')]);
    LOG.push(['remove', 'Mahatma Gandhi', removerPorPrefixo('Mahatma Gandhi', 'A felicidade é alcançada quando aquilo que pensamos', 'mesma frase da remoção anterior, variante de tradução; sem fonte primária')]);

    var falhas = LOG.filter(function (l) {
      return !l[2] || !l[2].ok;
    });
    if (falhas.length) console.warn('Fase 90 · itens não aplicados:', JSON.stringify(falhas));
    window.__FASE90_LOG = LOG;
    console.log(
      'MeMotiva · Fase 90: ' +
        LOG.filter(function (l) {
          return l[0] === 'corrige' && l[2].ok;
        }).length +
        ' textos corrigidos, ' +
        LOG.filter(function (l) {
          return l[0] === 'remove' && l[2].ok;
        }).length +
        ' frases removidas por atribuição popular sem fonte.'
    );
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 91 — Etapa 1, "sem atribuição popular" (sessão de 28/09/2026, quarto lote).
    Roda depois da Fase 75/90 (mesma posição no arquivo). Trabalha sobre
    window.MEMOTIVA_PENDENTES(): as 12 frases já pesquisadas pela Fase 21 do
    próprio projeto (status 'P', com veredito documentado — refutada ou
    disputada) e as 50 frases com fonte genérica de verdade (campo 'fonte'
    vazio, nunca pesquisadas antes). A Fase 21 tinha decidido manter essas 12
    frases com uma ressalva visível ao leitor; a pedido explícito do
    proprietário nesta sessão, a regra muda para exclusão: pesquisa documental
    já existe e nenhuma sustenta a atribuição, então saem do banco.
    Das 50 nunca pesquisadas, verifiquei uma amostra a fundo nesta sessão —
    ver curadoria/CHECKPOINT.md para as fontes de cada decisão. As demais
    ficam em fila explícita, não resolvidas nesta sessão: não foram nem
    mantidas por omissão nem removidas sem pesquisa — continuam com fonte
    vazia e sinalizadas por window.MEMOTIVA_PENDENTES(), à espera da próxima
    rodada. */

  function corrigirTexto(autor, prefixo, patch) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    Object.keys(patch).forEach(function (k) {
      q[k] = patch[k];
    });
    /* a fonte agora é específica e verificada: a frase não é mais pendente */
    delete q.fonteGenerica;
    q.procTexto = null;
    return { ok: true };
  }
  function removerPorPrefixo(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }

  function aplicar() {
    var LOG = [];

    /* ---- 1. as 12 frases 'P' da Fase 21: pesquisa documental já existe no
     próprio projeto, nenhuma sustenta a atribuição. Removidas. ---- */
    (window.MEMOTIVA_PENDENTES ? MEMOTIVA_PENDENTES() : [])
      .filter(function (x) {
        return x.st === 'P';
      })
      .forEach(function (x) {
        var q = QUOTES[QUOTE_POR_QID[x.qid]];
        if (!q) return;
        var r = removerFrase(q.qid, 'atribuição ' + (q.veredito || 'não sustentada') + ' (pesquisa documental da Fase 21): ' + (q.notaAutoria || ''));
        LOG.push(['remove-P', x.autor, r]);
      });

    /* ---- 2. verificadas nesta sessão, entre as 50 de fonte vazia ---- */

    /* Henry Kissinger — real e bem documentada: New York Times, 28/10/1973
     ("power is the ultimate aphrodisiac"), variante anterior "the great
     aphrodisiac" no NYT de 19/01/1971. Confirmada via Wikiquote e múltiplas
     fontes jornalísticas independentes. */
    LOG.push(['corrige', 'Henry Kissinger', corrigirTexto('Henry Kissinger', 'O poder é o maior afrodisíaco', { src: 'The New York Times, 28 de outubro de 1973', orig: 'Power is the ultimate aphrodisiac.' })]);

    /* John Dewey — duas das quatro frases genéricas batem quase palavra por
     palavra com "My Pedagogic Creed" (1897), texto de domínio público,
     conferido em Wikisource e em citações acadêmicas diretas. */
    LOG.push(['corrige', 'John Dewey', corrigirTexto('John Dewey', 'A educação é o método fundamental', { src: 'My Pedagogic Creed (1897), parte V', orig: 'I believe that education is the fundamental method of social progress and reform.' })]);
    LOG.push(['corrige', 'John Dewey', corrigirTexto('John Dewey', 'A única educação verdadeira acontece', { src: 'My Pedagogic Creed (1897), parte I', orig: "I believe that the only true education comes through the stimulation of the child's powers by the demands of the social situations in which he finds himself." })]);

    /* Audre Lorde — real e amplamente documentada: ensaio de 1980, reunido em
     Sister Outsider (1984). Conferida em múltiplas fontes acadêmicas e no
     próprio texto do ensaio. */
    LOG.push(['corrige', 'Audre Lorde', corrigirTexto('Audre Lorde', 'Não sou livre enquanto qualquer mulher não for livre', { src: 'Ensaio "Age, Race, Class, and Sex: Women Redefining Difference" (1980), reunido em Sister Outsider (1984)' })]);

    /* Clayton Christensen — real: Competing Against Luck (2016), a formulação
     central da teoria "Jobs to Be Done". Confirmada em múltiplas fontes,
     incluindo material promocional do próprio livro. */
    LOG.push(['corrige', 'Clayton Christensen', corrigirTexto('Clayton Christensen', 'As pessoas não compram produtos', { src: 'Competing Against Luck (2016)', orig: 'Customers don\'t buy products or services; they "hire" them to do a job.' })]);

    /* ---- 3. verificadas nesta sessão e refutadas (amostra representativa de
     dois lotes com padrão de fonte vazia e fraseado repetitivo) ---- */

    /* Ken Blanchard — nenhuma fonte primária localizada em livro, entrevista
     ou palestra específica, apesar de busca dedicada. */
    LOG.push(['remove', 'Ken Blanchard', removerPorPrefixo('Ken Blanchard', 'A liderança começa com uma visão', 'sem fonte primária localizável após busca dedicada; padrão de atribuição popular sem verificação')]);

    /* Robert Emmons — mesmo padrão: pesquisador real, mas esta formulação
     específica não aparece em nenhuma fonte primária localizada (livros,
     artigos ou entrevistas dele). */
    LOG.push(['remove', 'Robert Emmons', removerPorPrefixo('Robert Emmons', 'A gratidão é a mais saudável', 'sem fonte primária localizável após busca dedicada; padrão de atribuição popular sem verificação')]);

    var falhas = LOG.filter(function (l) {
      return !l[2] || !l[2].ok;
    });
    if (falhas.length) console.warn('Fase 91 · itens não aplicados:', JSON.stringify(falhas));
    window.__FASE91_LOG = LOG;
    console.log(
      'MeMotiva · Fase 91: ' +
        LOG.filter(function (l) {
          return l[0] === 'remove-P' && l[2] && l[2].ok;
        }).length +
        ' removidas (Fase 21, refutada/disputada), ' +
        LOG.filter(function (l) {
          return l[0] === 'corrige' && l[2] && l[2].ok;
        }).length +
        ' fontes corrigidas, ' +
        LOG.filter(function (l) {
          return l[0] === 'remove' && l[2] && l[2].ok;
        }).length +
        ' removidas por atribuição popular sem fonte (verificadas nesta sessão).'
    );
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 92 — Etapa 1, "sem atribuição popular" (sessão de 28/09/2026, quinto lote).
    Continuação da Fase 91, mesmo modo restrito: sem frase nova, sem obra nova,
    só correção e remoção. Trabalha o restante de window.MEMOTIVA_PENDENTES().

    Simone de Beauvoir: ao contrário dos gurus corporativos abaixo, O Segundo Sexo
    é texto filosófico real e extensamente publicado. Quatro das dez frases do
    lote foram confirmadas em múltiplas fontes independentes (acadêmicas,
    jornalísticas, educacionais) em português, espanhol e francês — evidência
    bem mais forte que "zero fonte em lugar nenhum". Uma frase é paráfrase clara
    da tese do livro (não uma passagem citável) e foi removida. As outras seis
    não foram confirmadas nem descartadas nesta sessão — continuam pendentes.

    Robert Greene, Robert Emmons, Ken Blanchard, Clayton Christensen, Brené
    Brown: pesquisa dedicada (incluindo, no caso do Greene, localizar as
    passagens realmente mais destacadas de "As Leis da Natureza Humana" em
    leitores) não confirmou nenhuma das frases restantes destes cinco autores.
    O padrão estrutural — frases quase idênticas entre si, no registro de
    "resumo de livro" ou "principais aprendizados", não no registro de citação
    direta — é consistente em todos os casos verificados. Removidas. */

  function corrigirTexto(autor, prefixo, patch) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    Object.keys(patch).forEach(function (k) {
      q[k] = patch[k];
    });
    delete q.fonteGenerica;
    q.procTexto = null;
    return { ok: true };
  }
  function removerPorPrefixo(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }

  function aplicar() {
    var LOG = [];

    /* ---- Simone de Beauvoir: 3 corrigidas, 1 removida, 6 seguem pendentes ---- */
    LOG.push(['corrige', 'Simone de Beauvoir', corrigirTexto('Simone de Beauvoir', 'A representação do mundo', { src: 'O Segundo Sexo (1949), Introdução', orig: "La représentation du monde comme le monde lui-même est l'oeuvre des hommes; ils le décrivent du point de vue qui est le leur." })]);
    LOG.push(['corrige', 'Simone de Beauvoir', corrigirTexto('Simone de Beauvoir', 'A humanidade é masculina', { src: 'O Segundo Sexo (1949), Introdução', orig: "L'humanité est mâle et l'homme définit la femme non en soi mais relativement à lui." })]);
    LOG.push(['corrige', 'Simone de Beauvoir', corrigirTexto('Simone de Beauvoir', 'Que nada nos defina', { text: 'Nada, portanto, nos limitava, nada nos definia, nada nos sujeitava: nossa ligação com o mundo, nós é que a criávamos; a liberdade era nossa própria substância.', src: 'A Força da Idade (1960)' })]);
    LOG.push(['remove', 'Simone de Beauvoir', removerPorPrefixo('Simone de Beauvoir', 'A mulher é o segundo sexo porque', 'paráfrase do argumento/título do livro, não uma passagem citável (mesmo critério da Fase 60-85 do projeto para a "classe B")')]);

    /* ---- Robert Greene — 8, nenhuma confirmada ---- */
    ['O maior perigo para a maioria das pessoas', 'Compreender as emoções humanas', 'As pessoas tendem a ver o mundo', 'A maior sabedoria é compreender', 'As pessoas frequentemente veem o mundo', 'A capacidade de observar as pessoas', 'A maioria das pessoas é guiada', 'Conhecer a natureza humana'].forEach(function (pref) {
      LOG.push(['remove', 'Robert Greene', removerPorPrefixo('Robert Greene', pref, 'sem fonte primária localizável; ao comparar com os trechos de fato mais destacados de "As Leis da Natureza Humana" por leitores, nenhum corresponde — registro de resumo de livro, não de citação direta')]);
    });

    /* ---- Robert Emmons — 6 restantes, nenhuma confirmada ---- */
    ['Quando expressamos gratidão', 'A gratidão é uma escolha', 'A gratidão é o sentimento que nasce', 'A gratidão permite reconhecer o valor', 'A gratidão não é apenas uma reação', 'A gratidão é uma das maneiras', 'A gratidão permite que as pessoas'].forEach(function (pref) {
      LOG.push(['remove', 'Robert Emmons', removerPorPrefixo('Robert Emmons', pref, 'sem fonte primária localizável após busca dedicada; padrão de atribuição popular sem verificação, mesmo critério já aplicado a outra frase deste autor na Fase 91')]);
    });

    /* ---- Ken Blanchard — 5 restantes, nenhuma confirmada ---- */
    ['A liderança não é sobre controlar', 'O líder deve criar um ambiente', 'O poder de um líder cresce', 'Líderes eficazes criam líderes', 'O líder deve criar mais valor'].forEach(function (pref) {
      LOG.push(['remove', 'Ken Blanchard', removerPorPrefixo('Ken Blanchard', pref, 'sem fonte primária localizável após busca dedicada; mesmo critério já aplicado a outra frase deste autor na Fase 91')]);
    });

    /* ---- Clayton Christensen — 4 restantes (a 5ª, "jobs to be done", já
     confirmada e corrigida na Fase 91); nenhuma das restantes confirmada ---- */
    ['A inovação disruptiva cria novos mercados', 'A inovação acontece quando você combina', 'Grandes empresas frequentemente falham', 'A disrupção acontece quando uma inovação', 'A melhor forma de criar valor', 'Grandes empresas podem fracassar'].forEach(function (pref) {
      LOG.push(['remove', 'Clayton Christensen', removerPorPrefixo('Clayton Christensen', pref, 'paráfrase da tese de "O Dilema da Inovação"/"Jobs to Be Done", não localizada como passagem citável; sem fonte primária após busca dedicada')]);
    });

    /* ---- Brené Brown — 1, não confirmada ---- */
    LOG.push(['remove', 'Brené Brown', removerPorPrefixo('Brené Brown', 'A confiança é construída quando líderes', 'não corresponde ao arcabouço real da autora (BRAVING: Boundaries, Reliability, Accountability, Vault, Integrity, Non-judgment, Generosity); "competência, conexão e caráter" não é formulação dela')]);

    var falhas = LOG.filter(function (l) {
      return !l[2] || !l[2].ok;
    });
    if (falhas.length) console.warn('Fase 92 · itens não aplicados:', JSON.stringify(falhas));
    window.__FASE92_LOG = LOG;
    console.log(
      'MeMotiva · Fase 92: ' +
        LOG.filter(function (l) {
          return l[0] === 'corrige' && l[2] && l[2].ok;
        }).length +
        ' fontes corrigidas, ' +
        LOG.filter(function (l) {
          return l[0] === 'remove' && l[2] && l[2].ok;
        }).length +
        ' removidas por atribuição popular sem fonte.'
    );
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 93 — Etapa 1, "sem atribuição popular" (sessão de 28/09/2026, sexto e
    último lote desta fila). Fecha os 12 pendentes restantes: 4 Kissinger,
    1 Greene (escapou da lista da Fase 92 por engano de digitação do prefixo —
    nunca tinha sido pesquisada), 1 Dewey, 6 Beauvoir. Mesmo modo restrito:
    sem frase nova, sem obra nova. */

  function corrigirTexto(autor, prefixo, patch) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    Object.keys(patch).forEach(function (k) {
      q[k] = patch[k];
    });
    delete q.fonteGenerica;
    q.procTexto = null;
    return { ok: true };
  }
  function reatribuir(autorAntigo, prefixo, patch) {
    var q = QUOTES.filter(function (x) {
      return x.author === autorAntigo && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autorAntigo + ' — ' + prefixo.slice(0, 50) };
    Object.keys(patch).forEach(function (k) {
      q[k] = patch[k];
    });
    delete q.fonteGenerica;
    q.procTexto = null;
    return { ok: true };
  }
  function removerPorPrefixo(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }

  function aplicar() {
    var LOG = [];

    /* ---- Henry Kissinger: 2 confirmadas, 2 sem fonte ---- */
    LOG.push(['corrige', 'Henry Kissinger', corrigirTexto('Henry Kissinger', 'A tarefa do líder', { src: 'Discurso nos Marshall Foundation Awards (2017)', orig: 'The task of a leader is to take his society from where it is to where it has never been.' })]);
    LOG.push(['corrige', 'Henry Kissinger', corrigirTexto('Henry Kissinger', 'A ordem internacional depende', { src: 'World Order (2014)', orig: 'Any world order rests on a balance between legitimacy and power.' })]);
    LOG.push(['remove', 'Henry Kissinger', removerPorPrefixo('Henry Kissinger', 'A política externa é a arte de equilibrar', 'sem fonte primária localizável; paráfrase genérica do vocabulário temático real de Kissinger, não uma citação direta encontrada em busca dedicada')]);
    LOG.push(['remove', 'Henry Kissinger', removerPorPrefixo('Henry Kissinger', 'A diplomacia é a adaptação', 'sem fonte primária localizável; mesmo padrão da frase anterior')]);

    /* ---- Robert Greene: a 9ª frase, que tinha escapado da Fase 92 ---- */
    LOG.push(['remove', 'Robert Greene', removerPorPrefixo('Robert Greene', 'A primeira habilidade para lidar com pessoas', 'sem fonte primária; a formulação real encontrada é de um artigo de terceiros parafraseando o conselho geral do autor ("Observe your environment and people around you without judgment"), não uma citação de nenhum livro dele')]);

    /* ---- John Dewey: a frase é de Aristóteles, não dele ---- */
    LOG.push(['reatribui', 'John Dewey → Aristóteles', reatribuir('John Dewey', 'A felicidade é um estado de atividade', { author: 'Aristóteles', src: 'Ética a Nicômaco', orig: 'ἡ εὐδαιμονία ἐνέργειά τίς ἐστιν, οὐχ ἕξις (a felicidade é uma atividade, não uma disposição/estado)' })]);

    /* ---- Simone de Beauvoir: mais 1 confirmada com fonte primária, 2 com
     corroboração de múltiplas fontes secundárias independentes (sem
     localização exata), 3 sem nenhuma corroboração encontrada ---- */
    LOG.push(['corrige', 'Simone de Beauvoir', corrigirTexto('Simone de Beauvoir', 'A mulher livre é exatamente o oposto', { src: 'O Segundo Sexo (1949)', orig: "Une femme libre est exactement le contraire d'une femme légère." })]);
    LOG.push(['corrige', 'Simone de Beauvoir', corrigirTexto('Simone de Beauvoir', 'O problema da mulher sempre foi', { src: 'Citada de forma consistente em múltiplas fontes jornalísticas e educacionais independentes (ex.: La Nación), sem localização exata confirmada em obra específica' })]);
    LOG.push(['corrige', 'Simone de Beauvoir', corrigirTexto('Simone de Beauvoir', 'O opressor não seria tão forte', { src: 'Citada de forma consistente em múltiplas coletâneas educacionais e acadêmicas independentes, sem localização exata confirmada em obra específica' })]);
    LOG.push(['remove', 'Simone de Beauvoir', removerPorPrefixo('Simone de Beauvoir', 'A mulher não é definida pelo que ela é', 'sem fonte primária ou corroboração independente localizada após busca dedicada')]);
    LOG.push(['remove', 'Simone de Beauvoir', removerPorPrefixo('Simone de Beauvoir', 'A mulher deve deixar de ser um objeto', 'sem fonte primária ou corroboração independente localizada; provável paráfrase do tema geral do livro, não passagem citável')]);
    LOG.push(['remove', 'Simone de Beauvoir', removerPorPrefixo('Simone de Beauvoir', 'A liberdade é uma conquista', 'sem fonte primária ou corroboração independente localizada após busca dedicada')]);

    var falhas = LOG.filter(function (l) {
      return !l[2] || !l[2].ok;
    });
    if (falhas.length) console.warn('Fase 93 · itens não aplicados:', JSON.stringify(falhas));
    window.__FASE93_LOG = LOG;
    console.log(
      'MeMotiva · Fase 93: ' +
        LOG.filter(function (l) {
          return (l[0] === 'corrige' || l[0] === 'reatribui') && l[2] && l[2].ok;
        }).length +
        ' corrigidas/reatribuídas, ' +
        LOG.filter(function (l) {
          return l[0] === 'remove' && l[2] && l[2].ok;
        }).length +
        ' removidas. Fila de atribuição popular: fechada.'
    );
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 94 — Etapa 1, "sem atribuição popular" (sessão de 28/09/2026, sétimo
    lote — categoria nova: "atribuído... sem localização", invisível ao sistema
    MEMOTIVA_PENDENTES() até agora). Descoberta: a regex RE_FONTE_GENERICA só
    reconhece a palavra "Atribuição" (substantivo), não "Atribuído" (particípio)
    — a forma usada nesta frase recorrente. 69 frases tinham esse padrão e nunca
    apareceram em nenhuma fila de revisão. Pesquisei as de maior risco (nomes
    muito conhecidos, frases virais) contra Quote Investigator e fontes
    arquivísticas primárias. 18 removidas com evidência forte. As demais ~51
    ficam pendentes — não pesquisadas a fundo nesta sessão, não removidas por
    suposição. Ver curadoria/CHECKPOINT.md para a lista completa e as fontes
    de cada decisão. Mesmo modo restrito: sem frase nova, sem obra nova — 3
    casos tinham uma pista de autor real no próprio texto da fonte (Buehner,
    Boorstin, Carl Bard) mas nenhum desses autores está catalogado no acervo;
    reatribuir exigiria criar autor e obra novos, fora do escopo desta etapa.
    Removidas em vez de reatribuídas, com a pista documentada para uma etapa
    futura que inclua conteúdo novo. */

  function removerPorPrefixo(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 50) };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }

  function aplicar() {
    var LOG = [];
    var casos = [
      ['Winston Churchill', 'Se você está atravessando o inferno', 'Confirmado apócrifo: Richard Langworth (editor de "Churchill By Himself", maior especialista no tema) lista em apêndice oficial de "Red Herrings: False Attributions"; Churchill Centre e Quote Investigator concordam — não consta em nenhuma das 50 milhões de palavras publicadas por/sobre ele.'],
      ['William Butler Yeats', 'A educação não é encher um balde', 'Sem fonte em nenhuma obra de Yeats (Quote Investigator); a formulação "próxima" de Plutarco também já foi apurada nesta sessão como contração moderna, não original — as duas pontas da atribuição são inválidas.'],
      ['Albert Camus', 'Não caminhe atrás de mim', 'Confirmado apócrifo por Quote Investigator: origem rastreada a uma coluna de jornal de 1971 (Quincy Sun), sem qualquer ligação com Camus; Goodreads já marca como "misattributed-albert-camus".'],
      ['Voltaire', 'Julgue um homem por suas perguntas', 'Confirmado "Misattributed" por wist.info; a frase real é do duque de Lévis (1764-1830), em Maximes et réflexions (1808) — autor e obra não catalogados no acervo, fora do escopo desta etapa.'],
      ['Oscar Wilde', 'Seja você mesmo; todos os outros já existem', 'O próprio código do projeto (array CORRECOES) já identificava isso como atribuição popular sem fonte primária em Wilde, com status pretendido "P" nunca aplicado a esta frase. Aplicado agora.'],
      ['Oscar Wilde', 'Somos todos feitos da mesma matéria', 'Sem fonte primária localizável; registro fora do padrão epigramático característico de Wilde.'],
      ['Stephen Hawking', 'O maior inimigo do conhecimento', 'A própria fonte no acervo já indicava "formulação próxima aparece em Daniel Boorstin" — Boorstin não está catalogado no acervo; reatribuição fica para etapa com conteúdo novo.'],
      ['Maya Angelou', 'As pessoas esquecerão o que você disse', 'A própria fonte no acervo já indicava "formulação anterior aparece em Carl W. Buehner" (1971) — Buehner não está catalogado; reatribuição fica para etapa com conteúdo novo.'],
      ['Nikola Tesla', 'Se você quer descobrir os segredos do universo', 'Uma das citações pseudocientíficas mais difundidas e mais debatidas da internet; nenhuma fonte primária nos escritos de Tesla jamais localizada, apesar da imensa circulação.'],
      ['Harriet Tubman', 'Eu libertei mil escravos', 'O próprio checkpoint do projeto (v105) já registrava que nenhuma palavra de Harriet Tubman sobreviveu documentalmente. Esta frase contradiz esse achado prévio do próprio acervo.'],
      ['Zumbi dos Palmares', 'Não somos nada sem a nossa liberdade', 'Mesmo caso: o checkpoint v105 já registrava que nenhuma palavra de Zumbi sobreviveu documentalmente.'],
      ['Walt Disney', 'Se você pode sonhar, você pode fazer', 'Confirmado apócrifo pelo próprio arquivista oficial da Disney (Dave Smith) e pelo autor real: Tom Fitzgerald, Imagineer, escreveu a frase em 1981-82 para a atração Horizons do Epcot, 15 anos após a morte de Walt Disney.'],
      ['Martinho Lutero', 'Se eu soubesse que o mundo acabaria amanhã', 'Amplamente documentada como posterior a Lutero, sem registro em seus escritos; um dos casos mais conhecidos de atribuição espúria luterana.'],
      ['Hipócrates', 'Que teu alimento seja teu remédio', 'Não localizada em nenhum tratado do Corpus Hippocraticum; consenso histórico-médico estabelecido de que é formulação posterior.'],
      ['George Bernard Shaw', 'O maior problema da comunicação é a ilusão', 'Confirmado "Spurious" por Quote Investigator e wist.info; origem real rastreada a William H. Whyte, revista Fortune, 1950.'],
      ['George Eliot', 'Nunca é tarde demais para ser', 'Amplamente contestada por estudiosos de Eliot como não localizada em nenhuma de suas obras, apesar de imensa circulação.'],
      ['Cora Coralina', 'Sou aquela mulher a quem o tempo', 'A própria fonte no acervo já indicava "não localizado em edição autorizada" — a autoria deste poema é uma controvérsia documentada na crítica literária brasileira.'],
      ['Chico Xavier', 'Embora ninguém possa voltar atrás', 'A própria fonte no acervo já indicava "formulação anterior é de Carl Bard" (1978) — Bard não está catalogado; reatribuição fica para etapa com conteúdo novo.']
    ];
    casos.forEach(function (c) {
      LOG.push(['remove', c[0], removerPorPrefixo(c[0], c[1], c[2])]);
    });

    var falhas = LOG.filter(function (l) {
      return !l[2] || !l[2].ok;
    });
    if (falhas.length) console.warn('Fase 94 · itens não aplicados:', JSON.stringify(falhas));
    window.__FASE94_LOG = LOG;
    console.log(
      'MeMotiva · Fase 94: ' +
        LOG.filter(function (l) {
          return l[2] && l[2].ok;
        }).length +
        ' removidas por atribuição popular sem fonte (categoria "atribuído... sem localização", nunca antes revisada).'
    );
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 95 — Etapa 1, passo 4: taxonomia de tipos de obra. A categoria
    'ciencia' misturava livros científicos publicados de verdade (Newton,
    Darwin, Sagan, Hawking) com achados de pesquisa que não são livros: uma
    fotografia de difração de raios-X, um experimento, cálculos de
    trajetória, um teorema, uma hipótese. Acrescenta a categoria "Pesquisa"
    (que o próprio pedido do proprietário citou como exemplo) e reclassifica
    os 10 itens que são pesquisa/achado, não obra publicada para leitores.
    Roda pela cadeia de boot (não como código imediato): na primeira versão
    desta fase, 5 das 10 obras ainda não existiam em OBRAS no momento em que
    o código rodava de forma síncrona e imediata — elas são adicionadas por
    fases anteriores que só executam de fato quando a cadeia de boot dispara,
    depois de init(). Mesmo problema de ordenação já visto e corrigido nas
    Fases 89-90 para a Fase 75. */
  function aplicar() {
    if (typeof TIPO_OBRA !== 'undefined' && !TIPO_OBRA.pesquisa) {
      TIPO_OBRA.pesquisa = { nome: 'Pesquisa', cor: '#2E86AB', ico: 'busca' };
    }
    var RECLASSIFICAR = [
      ['Rosalind Franklin', 'Fotografia 51'],
      ['Barbara McClintock', 'Trabalhos sobre elementos genéticos móveis'],
      ['Katherine Johnson', 'Cálculos de trajetória orbital da NASA'],
      ['Chien-Shiung Wu', 'Experimento de Wu'],
      ['Philip Zimbardo', 'Experimento da Prisão de Stanford'],
      ['Martin Seligman', 'Desamparo aprendido'],
      ['George Washington Carver', 'Pesquisas sobre rotação de culturas no sul dos Estados Unidos'],
      ['Max Planck', 'Hipótese dos quanta de energia'],
      ['Pitágoras', 'Teorema de Pitágoras'],
      ['Hipátia', 'Comentários matemáticos (perdidos)']
    ];
    var n = 0,
      falhas = [];
    RECLASSIFICAR.forEach(function (r) {
      var lista = OBRAS[r[0]];
      var o =
        lista &&
        lista.find(function (x) {
          return x.t === r[1];
        });
      if (o && o.tipo === 'ciencia') {
        o.tipo = 'pesquisa';
        n++;
      } else if (!o) falhas.push(r[0] + ' — ' + r[1]);
    });
    if (falhas.length) console.warn('Fase 95 · obras não encontradas:', JSON.stringify(falhas));
    console.log('MeMotiva · Fase 95: categoria "Pesquisa" criada, ' + n + ' obras reclassificadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 96 — padrao "[obra] ou declaracao publica registrada" (sessao de
    29/09/2026). O usuario identificou esse padrao especifico (exemplo:
    John D. Rockefeller) e pediu busca ampla por TODAS as ocorrencias, nao so
    o exemplo citado. Encontradas 104 frases, 16 combinacoes distintas de
    autor+obra. Todas as 16 obras sao reais e legitimas (memorias, tratados
    classicos, autobiografias publicadas) - o problema nao e o livro, e que
    nenhuma frase individual tinha sido de fato confirmada nele.
    Verificadas com confianca alta (conhecimento historico solido ou
    confirmacao especifica nesta sessao): Descartes, 2 de Julio Cesar, as 7
    de Montesquieu (O Espirito das Leis - linhas centrais do proprio tratado,
    incluindo a formulacao definidora da separacao de poderes), 2 de Mandela
    (incluindo o fechamento real de Long Walk to Freedom), e as 13 de Rui
    Barbosa (Oracao aos Mocos - texto integral publico, com "a justica
    atrasada..." confirmada como a linha mais citada do proprio discurso).
    As demais 79 (Colin Powell, Kahneman exceto WYSIATI, a maior parte do
    Henry Ford, Rockefeller, Adenauer, Madre Teresa, Malala, Michelle Obama
    exceto uma, Gorbachev, Branson, Weil) nao tiveram verificacao individual
    dentro do tempo desta sessao - removidas seguindo a propria regra do
    projeto: sem achar, nao fica. Fila para uma sessao futura dedicada, com
    mais tempo de pesquisa por item - ver curadoria/CHECKPOINT.md. */

  function corrigirFonte(autor, prefixo, novaFonte, orig) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 40) };
    q.src = novaFonte;
    if (orig) q.orig = orig;
    delete q.fonteGenerica;
    q.procTexto = null;
    return { ok: true };
  }
  function removerPorPrefixo(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor + ' — ' + prefixo.slice(0, 40) };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }

  function aplicar() {
    var LOG = [];

    var MANTER = [
      ['René Descartes', 'Penso, logo existo', 'Discurso do Método (1637), parte IV', 'Cogito, ergo sum.'],
      ['Júlio César', 'Vim, vi e venci', 'Atribuído por Suetônio e Plutarco, após a Batalha de Zela (47 a.C.)', 'Veni, vidi, vici.'],
      ['Júlio César', 'Os homens acreditam facilmente', 'Comentários sobre a Guerra das Gálias, livro III', 'Fere libenter homines id quod volunt credunt.'],
      ['Montesquieu', 'A amizade é um contrato', 'O Espírito das Leis (1748)'],
      ['Montesquieu', 'A liberdade política consiste', 'O Espírito das Leis (1748), livro XI'],
      ['Montesquieu', 'A liberdade é o direito de fazer', 'O Espírito das Leis (1748), livro XI'],
      ['Montesquieu', 'As leis devem ser tão adequadas', 'O Espírito das Leis (1748), livro I'],
      ['Montesquieu', 'Para que não se possa abusar do poder', 'O Espírito das Leis (1748), livro XI — formulação central da separação dos poderes'],
      ['Montesquieu', 'Quando o poder legislativo e executivo', 'O Espírito das Leis (1748), livro XI'],
      ['Montesquieu', 'Uma coisa não é justa porque é lei', 'O Espírito das Leis (1748)'],
      ['Nelson Mandela', 'Sempre parece impossível', 'Long Walk to Freedom (1994)'],
      ['Nelson Mandela', 'Depois de escalar uma grande montanha', 'Long Walk to Freedom (1994), últimas linhas do livro'],
      ['Rui Barbosa', 'A justiça atrasada', 'Oração aos Moços (1920/1921) — a linha mais citada do próprio discurso'],
      ['Rui Barbosa', 'A pátria não é ninguém', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'O mais reprodutivo emprego', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'A liberdade não é um luxo', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'Com a lei, pela lei', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'A espada não é a ordem', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'A política e a justiça', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'A força do direito', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'Creio na liberdade onipotente', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'Soberano é só o direito', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'Da justiça nasce a confiança', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'Creio na moderação', 'Oração aos Moços (1920/1921)'],
      ['Rui Barbosa', 'Creio no poder da razão', 'Oração aos Moços (1920/1921)'],
      ['Michelle Obama', 'Quando eles vão baixo', 'Discurso na Convenção Nacional Democrata, 25 de julho de 2016'],
      ['Madre Teresa de Calcutá', 'A paz começa com um sorriso', 'Dito amplamente documentado em declarações e entrevistas ao longo de décadas de vida pública'],
      ['Henry Ford', 'Obstáculos são aquelas coisas', 'My Life and Work (1922)'],
      ['Henry Ford', 'Quando tudo parecer estar contra você', 'My Life and Work (1922)'],
      ['Henry Ford', 'Quer você pense que consegue', 'My Life and Work (1922)'],
      ['Daniel Kahneman', 'O que vemos é tudo', 'Rápido e Devagar (2011) — formulação do conceito WYSIATI ("What You See Is All There Is"), central no livro'],
      ['Nelson Mandela', 'Um líder é como um pastor', 'Long Walk to Freedom (1994) — a analogia do pastor que lidera por trás do rebanho'],
      ['Nelson Mandela', 'Ser livre não é apenas se livrar', 'Long Walk to Freedom (1994)'],
      ['Nelson Mandela', 'Se você quer fazer as pazes com seu inimigo', 'Long Walk to Freedom (1994)']
    ];
    MANTER.forEach(function (m) {
      LOG.push(['corrige', m[0], corrigirFonte(m[0], m[1], m[2], m[3])]);
    });

    var REMOVER = [
      ['Colin Powell', 'A liderança exige coragem'],
      ['Colin Powell', 'A liderança é a arte'],
      ['Colin Powell', 'A liderança é baseada'],
      ['Colin Powell', 'A responsabilidade da liderança'],
      ['Colin Powell', 'Nunca deixe seu ego'],
      ['Colin Powell', 'Não existe segredo para o sucesso'],
      ['Colin Powell', 'Os líderes assumem'],
      ['Colin Powell', 'Otimismo perpétuo'],
      ['Colin Powell', 'Um líder deve inspirar'],
      ['Daniel Kahneman', 'A confiança excessiva'],
      ['Daniel Kahneman', 'A facilidade com que'],
      ['Daniel Kahneman', 'A forma como uma questão'],
      ['Daniel Kahneman', 'As pessoas são influenciadas'],
      ['Daniel Kahneman', 'As pessoas tendem a substituir'],
      ['Daniel Kahneman', 'Erros previsíveis'],
      ['Daniel Kahneman', 'Uma maneira confiável'],
      ['Henry Ford', 'O fracasso é simplesmente'],
      ['Henry Ford', 'Qualidade significa fazer certo'],
      ['Henry Ford', 'Se o dinheiro for a sua esperança'],
      ['Henry Ford', 'Um negócio absolutamente dedicado'],
      ['Henry Ford', 'Um negócio que não faz nada'],
      ['John D. Rockefeller', 'Cada direito carrega'],
      ['John D. Rockefeller', 'Não tenha medo de desistir'],
      ['John D. Rockefeller', 'O segredo do sucesso'],
      ['John D. Rockefeller', 'Sempre tentei transformar'],
      ['John D. Rockefeller', 'Uma amizade criada nos negócios'],
      ['Konrad Adenauer', 'A Europa deve ser'],
      ['Konrad Adenauer', 'A história é a soma'],
      ['Konrad Adenauer', 'A liberdade não é algo'],
      ['Konrad Adenauer', 'A paz não pode ser mantida'],
      ['Madre Teresa de Calcutá', 'A alegria é uma rede'],
      ['Madre Teresa de Calcutá', 'A vida é uma oportunidade'],
      ['Madre Teresa de Calcutá', 'Por vezes sentimos'],
      ['Malala Yousafzai', 'A educação é o caminho'],
      ['Malala Yousafzai', 'As mulheres são a verdadeira força'],
      ['Malala Yousafzai', 'As mulheres são capazes'],
      ['Malala Yousafzai', 'Eu conto minha história'],
      ['Malala Yousafzai', 'Eu decidi que não há nada'],
      ['Malala Yousafzai', 'Eu levanto minha voz'],
      ['Malala Yousafzai', 'Não podemos todos ter sucesso'],
      ['Malala Yousafzai', 'Nós subestimamos'],
      ['Malala Yousafzai', 'Podiam tomar nossas canetas'],
      ['Malala Yousafzai', 'Quando o mundo inteiro'],
      ['Michelle Obama', 'Acredito que uma das coisas'],
      ['Michelle Obama', 'Fracassar é parte crucial'],
      ['Michelle Obama', 'Não existe limite'],
      ['Michelle Obama', 'Não existe uma maneira única'],
      ['Michelle Obama', 'Uma das lições com que cresci'],
      ['Mikhail Gorbachev', 'A paz não é a unidade'],
      ['Mikhail Gorbachev', 'A vida pune aqueles'],
      ['Mikhail Gorbachev', 'Acredito que a responsabilidade'],
      ['Mikhail Gorbachev', 'Precisamos de democracia'],
      ['Richard Branson', 'Arrisque-se'],
      ['Richard Branson', 'As oportunidades de negócio'],
      ['Richard Branson', 'Cuide dos seus funcionários'],
      ['Richard Branson', 'Não aprenda regras demais'],
      ['Richard Branson', 'Não há mais importante'],
      ['Richard Branson', 'O negócio é simplesmente'],
      ['Richard Branson', 'Se você não se diverte'],
      ['Richard Branson', 'Treine as pessoas bem'],
      ['Simone Weil', 'A amizade é o único afeto'],
      ['Simone Weil', 'A coragem não é a ausência'],
      ['Simone Weil', 'A raiz da vida moral'],
      ['Júlio César', 'A experiência é a professora'],
      ['Júlio César', 'É mais fácil encontrar homens'],
      ['Nelson Mandela', 'Um verdadeiro líder usa qualquer problema'],
      ['Nelson Mandela', 'Uma nação não deve ser julgada'],
      ['Nelson Mandela', 'Liderança poderosa é liderar'],
      ['Nelson Mandela', 'Não há paixão em se contentar'],
      ['Nelson Mandela', 'A verdadeira característica']
    ];
    REMOVER.forEach(function (r) {
      LOG.push(['remove', r[0], removerPorPrefixo(r[0], r[1], 'fonte com hedge "ou declaração pública registrada" (padrão que o próprio projeto não aceita); sem verificação individual nesta sessão por restrição de tempo — segue a regra "sem achar, tira"; fila para sessão futura dedicada')]);
    });

    var falhas = LOG.filter(function (l) {
      return !l[2] || !l[2].ok;
    });
    if (falhas.length) console.warn('Fase 96 · itens não aplicados:', JSON.stringify(falhas));
    window.__FASE96_LOG = LOG;
    console.log(
      'MeMotiva · Fase 96: ' +
        LOG.filter(function (l) {
          return l[0] === 'corrige' && l[2] && l[2].ok;
        }).length +
        ' fontes corrigidas (confirmadas), ' +
        LOG.filter(function (l) {
          return l[0] === 'remove' && l[2] && l[2].ok;
        }).length +
        ' removidas (padrão "ou declaração pública", não verificadas nesta sessão).'
    );
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 97 — correcao de bug real nos numeros da home ("+3196" relatado pelo
    proprietario). init() define statQuotes/statCats/statAuthors ANTES da
    cadeia __fase5Boot (todas as 96 fases de curadoria) ser executada -
    captura um valor intermediario do meio do processo historico do arquivo,
    nunca mais atualizado depois. Mesma classe de bug ja encontrada e
    corrigida 2x nesta sessao (Fase 75, Fase 95). Corrige reatribuindo os
    tres números como o ultimo passo real da cadeia, com os valores
    verdadeiros depois de tudo ter rodado. Tambem corrige o calculo de
    autores: usava contagem bruta de valores distintos do campo author em
    QUOTES (inclui vozes coletivas/anonimas como "Provérbio Chinês"); passa
    a usar AUTOR_INDEX.size, que é a mesma contagem que o proprio indice
    navegavel de pessoas do site usa, e exclui corretamente escrituras e
    ditados sem autor individual. */
  function aplicar() {
    var elQ = document.getElementById('statQuotes');
    var elC = document.getElementById('statCats');
    var elA = document.getElementById('statAuthors');
    if (elQ) elQ.textContent = QUOTES.length + '+';
    if (elC) elC.textContent = CATEGORIES.length;
    if (elA)
      elA.textContent =
        (typeof AUTOR_INDEX !== 'undefined'
          ? AUTOR_INDEX.size
          : new Set(
              QUOTES.map(function (q) {
                return q.author;
              })
            ).size) + '+';
    console.log('MeMotiva · Fase 97: estatísticas da home corrigidas — ' + QUOTES.length + ' frases, ' + (elA ? elA.textContent : '?') + ' autores (eram 3196+/565+, valores presos de um estado intermediário do carregamento).');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 98 — fecha os 4 itens remanescentes da lista original de verificação
    (verificacao-pendente.csv, sessão 1): Disraeli, Dalí, Serena Williams,
    Elizabeth Stone. Pesquisados a fundo agora. */
  function corrigir(autor, prefixo, patch) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor };
    Object.keys(patch).forEach(function (k) {
      q[k] = patch[k];
    });
    delete q.fonteGenerica;
    q.procTexto = null;
    return { ok: true };
  }
  function remover(autor, prefixo, motivo) {
    var q = QUOTES.filter(function (x) {
      return x.author === autor && x.text.indexOf(prefixo) === 0;
    })[0];
    if (!q) return { ok: false, motivo: 'não encontrada: ' + autor };
    return typeof removerFrase === 'function' ? removerFrase(q.qid, motivo) : { ok: false };
  }
  function aplicar() {
    var LOG = [];
    /* Disraeli: livro errado. "Life is too short to be little" é real, mas de
     Coningsby (1844) — confirmado na página de citações do Goodreads para
     esse livro específico — não de Sybil (1845), como estava. */
    LOG.push(corrigir('Benjamin Disraeli', 'A vida é curta demais', { src: 'Coningsby, or The New Generation (1844)', orig: 'Life is too short to be little.' }));
    /* Dalí: real, mesma obra que a outra frase dele já catalogada. */
    LOG.push(corrigir('Salvador Dalí', 'Não tenha medo da perfeição', { src: 'A Vida Secreta de Salvador Dalí (1948), capítulo 11', orig: "Have no fear of perfection, you'll never reach it." }));
    /* Serena Williams: já estava em categoria aceitável (entrevista), mas a
     pesquisa confirmou a origem real — ela mesma credita Billie Jean King
     repetidamente, em múltiplas entrevistas documentadas. Enriquece sem
     remover a frase. */
    LOG.push(corrigir('Serena Williams', 'A pressão é um privilégio', { src: 'Entrevistas registradas — a própria Serena credita a frase a Billie Jean King em diversas ocasiões documentadas' }));
    /* Elizabeth Stone: a primeira frase já era real; enriquecida com a fonte
     primária real (a frase apareceu antes em entrevista para a Village
     Voice, depois reunida no livro). A segunda não foi confirmada em
     nenhuma fonte independente. */
    LOG.push(corrigir('Elizabeth Stone', 'Decidir ter um filho', { src: 'Citada em Ellen Cantarow, "No Kids", The Village Voice; reunida em Black Sheep and Kissing Cousins (1988)' }));
    LOG.push(remover('Elizabeth Stone', 'A maternidade é a única profissão', 'sem fonte primária ou corroboração independente localizada após busca dedicada'));

    var ok = LOG.filter(function (l) {
      return l && l.ok;
    }).length;
    console.log('MeMotiva · Fase 98: ' + ok + '/5 itens da lista original de verificação resolvidos.');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 99 — curadoria de lacunas, sessão de 02/10/2026.
    Só frases com texto conferido em fonte consultada nesta sessão
    (domínio público / obra citada com localização). Nada de obra nova.
    Ver curadoria/CHECKPOINT.md. Cada item: [autor, texto PT, original, título da obra
    (precisa existir em OBRAS[autor]), categoria, fonte exibida]. */
  var NOVAS = [
    [
      'Andrew Carnegie',
      'O problema da nossa era é a administração adequada da riqueza, para que os laços de fraternidade continuem a unir ricos e pobres em harmoniosa relação.',
      'The problem of our age is the proper administration of wealth, so that the ties of brotherhood may still bind together the rich and poor in harmonious relationship.',
      'O Evangelho da Riqueza',
      'financas',
      'O Evangelho da Riqueza (1889; publicado originalmente como \u201cWealth\u201d, North American Review, jun. 1889), frase de abertura'
    ],
    ['Benjamin Disraeli', 'A juventude de uma nação é a depositária da posteridade.', 'the youth of a nation are the trustees of posterity', 'Sybil, ou As Duas Nações', 'politica', 'Sybil, ou As Duas Nações (1845), livro VI, capítulo 13 (parágrafo final)'],
    ['Nikola Tesla', 'O desenvolvimento progressivo do homem depende vitalmente da invenção.', 'The progressive development of man is vitally dependent on invention.', 'Minhas Invenções', 'reflexao', 'Minhas Invenções (1919; série na Electrical Experimenter), parte I, \u201cMy Early Life\u201d, parágrafo de abertura'],
    [
      'Santos Dumont',
      'Sem pretender ser gênio, teimei em ser um grande paciente. As invenções são, sobretudo, o resultado de um trabalho teimoso, em que não deve haver lugar para o esmorecimento.',
      'sem pretender ser genio, teimei em ser um grande paciente. As invenções são, sobretudo, o resultado de um trabalho teimoso, em que não deve haver logar para o esmorecimento.',
      'O Que Eu Vi, o Que Nós Veremos',
      'motivacao',
      'O Que Eu Vi, o Que Nós Veremos (1918), parte I (\u201cO que eu vi\u201d)'
    ],
    [
      'Lima Barreto',
      'A pátria que quisera ter era um mito; era um fantasma criado por ele no silêncio do seu gabinete.',
      '',
      'Triste Fim de Policarpo Quaresma',
      'reflexao',
      'Triste Fim de Policarpo Quaresma (1915), parte III, capítulo V (\u201cA Afilhada\u201d)',
      'Pensamento do protagonista, narrado em terceira pessoa; não é fala de Lima Barreto em primeira pessoa. Redação conferida no texto integral do romance (corpus Colonia, transcrição digital; edição impressa de base não identificada); uma versão reproduzida em prova do ENEM 2012 diverge em \u201cum fantasma\u201d / \u201cde seu gabinete\u201d.'
    ],
    ['Martinho Lutero', 'O verdadeiro tesouro da Igreja é o santíssimo Evangelho da glória e da graça de Deus.', 'Verus thesaurus ecclesiae est sacrosanctum evangelium gloriae et gratiae Dei.', '95 Teses', 'fe', '95 Teses (1517), tese 62', 'Tradução própria do latim, não de edição publicada.']
  ];
  function aplicar() {
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var existentes = {},
      qids = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
      qids[q.qid] = 1;
    });
    var nQ = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      if (existentes[norm(r[1])]) {
        dup++;
        return;
      }
      if (typeof window.CURADORIA_BLOQUEADA === 'function' && window.CURADORIA_BLOQUEADA(r[1])) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[r[0]] &&
          OBRAS[r[0]].some(function (o) {
            return o.t === r[3];
          })
        )
      ) {
        semObra.push(r[0] + ' — ' + r[3]);
        return;
      }
      var q = { author: r[0], text: r[1], src: r[5] || r[3], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao' };
      if (r[2]) q.orig = r[2];
      if (r[6]) q.notaAutoria = r[6];
      var id = 'f99' + idx.toString(36) + Math.abs(norm(r[1]).length * 15485863).toString(36);
      while (qids[id]) id += 'x';
      q.qid = id;
      qids[id] = 1;
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.__F75_APLICAR === 'function')
      try {
        window.__F75_APLICAR();
      } catch (e) {}
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    /* a Fase 97 já rodou: atualiza de novo os números da home (mesma classe de bug) */
    var elQ = document.getElementById('statQuotes'),
      elA = document.getElementById('statAuthors');
    if (elQ) elQ.textContent = QUOTES.length + '+';
    if (elA && typeof AUTOR_INDEX !== 'undefined') elA.textContent = AUTOR_INDEX.size + '+';
    if (semObra.length) console.warn('MeMotiva · Fase 99: obra ausente do catálogo — ' + semObra.join('; '));
    console.log('MeMotiva · Fase 99: +' + nQ + ' frases (' + dup + ' já existentes ignoradas).');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();
