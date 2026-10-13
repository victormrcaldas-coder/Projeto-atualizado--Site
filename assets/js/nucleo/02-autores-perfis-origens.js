/* MeMotiva — nucleo/02-autores-perfis-origens.js
   Normalização de nomes de autor (aliases), perfis de atuação, origens e metadados das biografias.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ---------------- BANCO DE FRASES ----------------
   Curadoria com frases verificadas e atribuídas corretamente a
   partir de fontes públicas — sem citações inventadas. Onde uma
   citação amplamente divulgada é de autoria incerta/contestada,
   preferimos deixar de fora a atribuí-la ao autor errado. */
/* ================================================================
   FASE 2 — NORMALIZAÇÃO DE AUTORES
   Mesmas pessoas gravadas com grafias diferentes fragmentavam o
   banco (Tolstói em 4 grafias, Gibran em 2, MLK em 3...). O mapa
   abaixo consolida sem alterar nenhuma frase nem sua autoria real.
   ================================================================ */
const AUTHOR_ALIASES = {
  'Léon Tolstói': 'Liev Tolstói',
  'Leon Tolstói': 'Liev Tolstói',
  'Lev Tolstói': 'Liev Tolstói',
  'Khalil Gibran': 'Kahlil Gibran',
  'Carl Jung': 'Carl Gustav Jung',
  'Martin Luther King Jr': 'Martin Luther King Jr.',
  'Martin Luther King': 'Martin Luther King Jr.',
  'Ruy Barbosa': 'Rui Barbosa',
  'Antoine de Saint- Exupéry': 'Antoine de Saint-Exupéry',
  'Jean- Jacques Rousseau': 'Jean-Jacques Rousseau',
  'Mario Quintana': 'Mário Quintana',
  'Bell Hooks': 'bell hooks',
  'J. K. Rowling': 'J.K. Rowling',
  'Krishna (Bhagavad Gita)': 'Krishna',
  'Karl Marx e Friedrich Engels': 'Karl Marx',
  'Thomas Aquinas': 'Tomás de Aquino',
  Paulo: 'Apóstolo Paulo',
  'Ann Landers': 'Ann Landers'
};
function canonAuthor(name) {
  return AUTHOR_ALIASES[name] || name;
}

/* ================================================================
   PERFIS / ATUAÇÃO DOS AUTORES
   Usado por dois lugares: o filtro de atuação dentro do Explorar
   (§9) e as categorias da área de Biografias (§6). Uma taxonomia
   só, para não multiplicar rótulos que dizem a mesma coisa.
   ================================================================ */
const PROFILES = [
  { id: 'filosofos', name: 'Filósofos', color: '#8B9467' },
  { id: 'literatura', name: 'Literatura', color: '#A569BD' },
  { id: 'cientistas', name: 'Cientistas', color: '#4A90E2' },
  { id: 'educadores', name: 'Educadores', color: '#2ECC71' },
  { id: 'empresarios', name: 'Empresários', color: '#D35400' },
  { id: 'investidores', name: 'Investidores', color: '#1ABC9C' },
  { id: 'economistas', name: 'Economistas', color: '#5B7B9A' },
  { id: 'estrategistas', name: 'Estrategistas', color: '#E28D5C' },
  { id: 'politicos', name: 'Políticos', color: '#A93226' },
  { id: 'lideres', name: 'Líderes', color: '#00A8E8' },
  { id: 'ativistas', name: 'Ativistas', color: '#E6399B' },
  { id: 'religiosos', name: 'Religiosos', color: '#F1C40F' },
  { id: 'psicologos', name: 'Psicologia', color: '#9B59B6' },
  { id: 'artistas', name: 'Artistas', color: '#FF6B35' },
  { id: 'atletas', name: 'Esporte', color: '#F39C12' },
  { id: 'ditadores', name: 'Ditadores', color: '#7F8C8D' }
];
function profileById(id) {
  return PROFILES.find((p) => p.id === id);
}

/* Origem / cultura — filtro secundário das biografias (§6). */
const ORIGINS = [
  { id: 'brasileiros', name: 'Brasileiros' },
  { id: 'latinos', name: 'Latino-americanos' },
  { id: 'europeus', name: 'Europeus' },
  { id: 'norteamericanos', name: 'Norte-americanos' },
  { id: 'africanos', name: 'Africanos' },
  { id: 'asiaticos', name: 'Asiáticos' },
  { id: 'antiguidade', name: 'Mundo antigo' }
];

/* Mapa autor -> perfis. Escrito por grupo (muito mais legível de
   auditar do que 300 linhas soltas) e invertido em seguida. */
const _PROFILE_GROUPS = {
  filosofos: [
    'Aristóteles',
    'Sêneca',
    'Lao Tsé',
    'Marco Aurélio',
    'Epicteto',
    'Cícero',
    'Epicuro',
    'Platão',
    'Sócrates',
    'Confúcio',
    'Friedrich Nietzsche',
    'Arthur Schopenhauer',
    'Michel de Montaigne',
    'Immanuel Kant',
    'Søren Kierkegaard',
    'Albert Camus',
    'Jean-Paul Sartre',
    'Bertrand Russell',
    'Hannah Arendt',
    'David Hume',
    'John Locke',
    'Jean-Jacques Rousseau',
    'Voltaire',
    'Blaise Pascal',
    'Baruch Spinoza',
    'Thomas Hobbes',
    'Montesquieu',
    'Francis Bacon',
    'John Stuart Mill',
    'Ralph Waldo Emerson',
    'Henry David Thoreau',
    'William James',
    'Heráclito',
    'René Descartes',
    'Zenão de Cítio',
    'Michel Foucault',
    'José Ortega y Gasset',
    'Karl Jaspers',
    'Simone Weil',
    'Simone de Beauvoir',
    'Pitágoras',
    'Tales de Mileto',
    'Tomás de Aquino',
    'Santo Agostinho',
    'Baltasar Gracián',
    'Publílio Siro',
    'Isaiah Berlin',
    'Norberto Bobbio',
    'Edmund Burke',
    'Karl Marx',
    'Alexis de Tocqueville',
    'Noam Chomsky',
    'Jonathan Haidt',
    'Yuval Noah Harari',
    'Guy Debord',
    'Ayn Rand',
    'Miguel Reale',
    'Hans Kelsen',
    'Benjamin Constant',
    'Rubem Alves',
    'Ailton Krenak',
    'Byung-Chul Han',
    'Peter Singer',
    'Hipátia'
  ],
  literatura: [
    'William Shakespeare',
    'Kahlil Gibran',
    'Fernando Pessoa',
    'Jane Austen',
    'Victor Hugo',
    'Oscar Wilde',
    'Machado de Assis',
    'Charles Dickens',
    'Virginia Woolf',
    'Mark Twain',
    'Antoine de Saint-Exupéry',
    'Luís de Camões',
    'Clarice Lispector',
    'Rainer Maria Rilke',
    'Samuel Johnson',
    'C. S. Lewis',
    'Carlos Drummond de Andrade',
    'Cora Coralina',
    'Florbela Espanca',
    'Liev Tolstói',
    'Mário Quintana',
    'J. R. R. Tolkien',
    'George Orwell',
    'Johann Wolfgang von Goethe',
    'Honoré de Balzac',
    'François de La Rochefoucauld',
    'George Eliot',
    'George Bernard Shaw',
    'Miguel de Cervantes',
    'Gustave Flaubert',
    'Horácio',
    'Virgílio',
    'Anaïs Nin',
    'T. S. Eliot',
    'Nathaniel Hawthorne',
    'Louisa May Alcott',
    'James M. Barrie',
    'Jean de La Fontaine',
    'Esopo',
    'Oliver Goldsmith',
    'Millôr Fernandes',
    'Ariano Suassuna',
    'Graciliano Ramos',
    'J.K. Rowling',
    'Maya Angelou',
    'Anne Frank',
    'Richard Bach',
    'Elbert Hubbard',
    'Rumi',
    'Quintiliano',
    'Emily Dickinson',
    'Guimarães Rosa',
    'Cecília Meireles',
    'Jorge Amado',
    'Lima Barreto',
    'Manuel Bandeira',
    'Vinicius de Moraes',
    'Hilda Hilst',
    'Conceição Evaristo'
  ],
  cientistas: [
    'Albert Einstein',
    'Marie Curie',
    'Stephen Hawking',
    'Carl Sagan',
    'Thomas Edison',
    'Hipócrates',
    'Charles Darwin',
    'Isaac Newton',
    'Galileu Galilei',
    'Nikola Tesla',
    'George Washington Carver',
    'Rosalind Franklin',
    'Santos Dumont',
    'Oswaldo Cruz',
    'Barbara McClintock',
    'Katherine Johnson',
    'Alan Turing',
    'Ada Lovelace',
    'Jane Goodall'
  ],
  educadores: [
    'Paulo Freire',
    'John Dewey',
    'Jean Piaget',
    'Malala Yousafzai',
    'Maria Montessori',
    'Lev Vygotsky',
    'Anísio Teixeira',
    'Darcy Ribeiro',
    'Nísia Floresta',
    'Booker T. Washington',
    'Neil Postman',
    'John Wooden',
    'Sir Ken Robinson',
    'Bell Hooks',
    'bell hooks'
  ],
  empresarios: [
    'Jeff Bezos',
    'Steve Jobs',
    'Bill Gates',
    'Henry Ford',
    'Richard Branson',
    'Elon Musk',
    'Sam Walton',
    'John D. Rockefeller',
    'Luiza Trajano',
    'Jack Welch',
    'Andrew Carnegie',
    'Walt Disney',
    'Ray Kroc',
    'Jack Ma',
    'Mark Zuckerberg',
    'Larry Page',
    'Howard Schultz',
    'Reed Hastings',
    'Brian Chesky',
    'Peter Thiel',
    'Andy Grove',
    'Reid Hoffman',
    'Melinda French Gates',
    'Sheryl Sandberg',
    'Oprah Winfrey',
    'Coco Chanel',
    'P. T. Barnum',
    'Abílio Diniz',
    'Sebastián Piñera'
  ],
  investidores: [
    'Warren Buffett',
    'Charlie Munger',
    'Benjamin Graham',
    'John Bogle',
    'Peter Lynch',
    'Philip Fisher',
    'Ray Dalio',
    'Howard Marks',
    'Morgan Housel',
    'Nassim Nicholas Taleb',
    'George S. Clason',
    'Robert Kiyosaki',
    'John Templeton',
    'André Kostolany',
    'Harry Markowitz',
    'Thomas J. Stanley',
    'Luiz Barsi',
    'Seth Klarman'
  ],
  economistas: [
    'Adam Smith',
    'John Maynard Keynes',
    'Milton Friedman',
    'Friedrich Hayek',
    'Amartya Sen',
    'Daniel Kahneman',
    'Amos Tversky',
    'Thomas Sowell',
    'Dan Ariely',
    'Herbert Simon',
    'Max Weber',
    'Joseph Schumpeter',
    'Esther Duflo',
    'Elinor Ostrom'
  ],
  estrategistas: [
    'Peter Drucker',
    'Philip Kotler',
    'Michael Porter',
    'W. Edwards Deming',
    'Clayton Christensen',
    'Seth Godin',
    'Jim Collins',
    'John Kotter',
    'Stephen R. Covey',
    'Simon Sinek',
    'Robert Cialdini',
    'Dale Carnegie',
    'Napoleon Hill',
    'Robert Greene',
    'Theodore Levitt',
    'Eric Ries',
    'Guy Kawasaki',
    'Al Ries e Jack Trout',
    'David Aaker',
    'Tom Peters',
    'Scott Belsky',
    'Chris Voss',
    'Roger Fisher e William Ury',
    'Howard Stevenson',
    'Henry Chesbrough',
    'Marshall McLuhan',
    'Edward Bernays',
    'Walter Lippmann',
    'Gustave Le Bon',
    'Brian Tracy',
    'Jim Rohn',
    'Mary Parker Follett',
    'Ken Blanchard',
    'Warren Bennis',
    'John C. Maxwell',
    'James Kouzes e Barry Posner',
    'Donald McGannon',
    'Shoshana Zuboff',
    'Tristan Harris',
    'Jaron Lanier',
    'George Lakoff',
    'Sun Tzu',
    'Carl von Clausewitz'
  ],
  politicos: [
    'Winston Churchill',
    'Abraham Lincoln',
    'John F. Kennedy',
    'Theodore Roosevelt',
    'Franklin D. Roosevelt',
    'Ronald Reagan',
    'Thomas Jefferson',
    'George Washington',
    'Benjamin Franklin',
    'Nicolau Maquiavel',
    'Eleanor Roosevelt',
    'Margaret Thatcher',
    'Charles de Gaulle',
    'Konrad Adenauer',
    'Henry Kissinger',
    'Mikhail Gorbachev',
    'Dwight D. Eisenhower',
    'Benjamin Disraeli',
    'Rui Barbosa',
    'Ulysses Guimarães',
    'Getúlio Vargas',
    'Juscelino Kubitschek',
    'Dom Pedro II',
    'Václav Havel',
    'Hillary Clinton',
    'Michelle Bachelet',
    'Michelle Obama',
    'Barack Obama',
    'Kofi Annan',
    'Ban Ki-moon',
    'Ruth Bader Ginsburg',
    'Hubert H. Humphrey',
    'B. R. Ambedkar',
    'Simón Bolívar',
    'José Martí',
    'Golda Meir',
    'Angela Merkel',
    'Jacinda Ardern',
    'Sérgio Buarque de Holanda'
  ],
  lideres: [
    'Nelson Mandela',
    'Mahatma Gandhi',
    'Martin Luther King Jr.',
    'Colin Powell',
    'Napoleão Bonaparte',
    'Júlio César',
    'Augusto',
    'Bernard Montgomery',
    'Norman Schwarzkopf',
    'Ernest Shackleton',
    'Amelia Earhart',
    'Ayrton Senna',
    'Winston Churchill',
    'Alexandre, o Grande',
    'Zumbi dos Palmares',
    'Joana d\u2019Arc'
  ],
  ativistas: [
    'Rosa Parks',
    'Angela Davis',
    'Malcolm X',
    'Mary Wollstonecraft',
    'Betty Friedan',
    'Susan B. Anthony',
    'Audre Lorde',
    'Rosa Luxemburgo',
    'Chimamanda Ngozi Adichie',
    'Gerda Lerner',
    'Helen Keller',
    'Che Guevara',
    'Emmeline Pankhurst',
    'Sojourner Truth',
    'Frederick Douglass',
    'Harriet Tubman',
    'Dandara dos Palmares',
    'Marielle Franco',
    'Wangari Maathai',
    'Greta Thunberg',
    'Nísia Floresta',
    'Simone de Beauvoir',
    'Malala Yousafzai',
    'bell hooks',
    'Maya Angelou',
    'Angela Davis'
  ],
  religiosos: [
    'Buda',
    'Jesus Cristo',
    'Krishna',
    'Dalai Lama',
    'Madre Teresa de Calcutá',
    'Apóstolo Paulo',
    'Profeta Muhammad',
    'Hillel',
    'Chico Xavier',
    'Santo Agostinho',
    'Tomás de Aquino',
    'Francisco de Assis',
    'Papa Francisco',
    'Martinho Lutero',
    'Thomas Merton',
    'Desmond Tutu',
    'Thich Nhat Hanh',
    'Osho',
    'Rumi',
    'Ben Zoma',
    'Rabi Tarfon',
    'Meister Eckhart',
    'Teresa d\u2019Ávila'
  ],
  psicologos: [
    'Carl Gustav Jung',
    'Sigmund Freud',
    'Viktor Frankl',
    'Carl Rogers',
    'Erich Fromm',
    'Daniel Goleman',
    'Abraham Maslow',
    'Martin Seligman',
    'Philip Zimbardo',
    'Stanley Milgram',
    'Solomon Asch',
    'Albert Bandura',
    'Erving Goffman',
    'Robert Emmons',
    'Marshall Rosenberg',
    'Edith Eger',
    'Augusto Cury',
    'Melody Beattie',
    'Leo Buscaglia',
    'Pierre Bourdieu',
    'Georg Simmel',
    'Brené Brown',
    'Carol Dweck',
    'Nise da Silveira'
  ],
  artistas: [
    'Frida Kahlo',
    'Ludwig van Beethoven',
    'Vincent van Gogh',
    'Salvador Dalí',
    'Charles Chaplin',
    'Pablo Picasso',
    'Leonardo da Vinci',
    'Michelangelo',
    'Wolfgang Amadeus Mozart',
    'Tarsila do Amaral',
    'Candido Portinari',
    'Aleijadinho',
    'Auguste Rodin',
    'Georgia O\u2019Keeffe',
    'Maria Callas',
    'Pixinguinha',
    'Cartola'
  ],
  atletas: [
    'Muhammad Ali',
    'Ayrton Senna',
    'Serena Williams',
    'Arthur Ashe',
    'Pelé',
    'Michael Jordan',
    'Nadia Comăneci',
    'Jesse Owens',
    'Aída dos Santos'
  ],
  ditadores: ['Mao Tsé-Tung', 'Getúlio Vargas', 'Napoleão Bonaparte', 'Júlio César']
};

/* Inversão: nome -> [perfis]. Um autor pode ter mais de um perfil. */
const AUTHOR_PROFILES = (() => {
  const m = {};
  Object.entries(_PROFILE_GROUPS).forEach(([tag, names]) => {
    names.forEach((n) => {
      const c = canonAuthor(n);
      if (!m[c]) m[c] = [];
      if (!m[c].includes(tag)) m[c].push(tag);
    });
  });
  return m;
})();

/* Textos sagrados / tradições / anônimos: agrupados fora dos perfis
   de pessoa, para não aparecerem como se fossem indivíduos. */
const SCRIPTURE_RE =
  /^(Alcorão|Provérbios|Salmos|Livro d|Eclesiastes|Deuteronômio|Carta a|Carta d|Mishná|Pirkei Avot|Upanishads?|Mundaka|Tradição|Talmude|Gênesis|Êxodo|Isaías|Mateus|Marcos|Lucas|João|Bhagavad|Tao Te|Dhammapada|Ditado|Autor não)/i;
function authorProfiles(name) {
  const c = canonAuthor(name);
  if (SCRIPTURE_RE.test(c)) return [];
  return AUTHOR_PROFILES[c] || [];
}

/* ================================================================
   FASE 2 — METADADOS DAS 30 BIOGRAFIAS EXISTENTES
   Nada do texto original é alterado. Só acrescentamos as chaves que
   o Descubra e os filtros precisam: perfis, origem, papel e o
   "porquê" curto que aparece no cartão.
   ================================================================ */
const STORY_META = {
  frida: {
    profiles: ['artistas'],
    origin: 'latinos',
    role: 'Pintora mexicana (1907–1954)',
    why: 'Transformou a dor de um corpo partido em uma das obras mais francas da arte moderna.'
  },
  cora: {
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Poeta e doceira (1889–1985)',
    why: 'Publicou o primeiro livro aos 75 anos e provou que não existe hora certa para começar.'
  },
  malala: {
    profiles: ['ativistas', 'educadores'],
    origin: 'asiaticos',
    role: 'Ativista paquistanesa (1997–)',
    why: 'Levou um tiro por querer estudar e virou a voz mais jovem já premiada com o Nobel da Paz.'
  },
  senna: {
    profiles: ['atletas', 'lideres'],
    origin: 'brasileiros',
    role: 'Piloto brasileiro (1960–1994)',
    why: 'Correu como quem persegue um limite pessoal, não um troféu — e virou símbolo disso.'
  },
  oprah: {
    profiles: ['empresarios'],
    origin: 'norteamericanos',
    role: 'Apresentadora e empresária (1954–)',
    why: 'Saiu da pobreza extrema e construiu um império falando sobre o que quase ninguém falava.'
  },
  freire: {
    profiles: ['educadores', 'filosofos'],
    origin: 'brasileiros',
    role: 'Educador brasileiro (1921–1997)',
    why: 'Mostrou que alfabetizar é um ato político — e é lido no mundo inteiro por isso.'
  },
  mandela: {
    profiles: ['lideres', 'ativistas', 'politicos'],
    origin: 'africanos',
    role: 'Líder sul-africano (1918–2013)',
    why: 'Passou 27 anos preso e saiu escolhendo a reconciliação em vez da vingança.'
  },
  frankl: {
    profiles: ['psicologos'],
    origin: 'europeus',
    role: 'Psiquiatra austríaco (1905–1997)',
    why: 'Sobreviveu a quatro campos de concentração e formulou ali sua teoria sobre o sentido.'
  },
  michelle: {
    profiles: ['politicos', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Advogada e ex-primeira-dama (1964–)',
    why: 'Usou a Casa Branca para falar de educação e saúde sem abrir mão da própria voz.'
  },
  trajano: {
    profiles: ['empresarios'],
    origin: 'brasileiros',
    role: 'Empresária brasileira (1951–)',
    why: 'Levou uma loja de interior a uma das maiores varejistas do país cuidando de gente.'
  },
  buffett: {
    profiles: ['investidores'],
    origin: 'norteamericanos',
    role: 'Investidor americano (1930–)',
    why: 'Ficou entre os mais ricos do mundo aplicando paciência onde todos aplicavam pressa.'
  },
  marco_aurelio: {
    profiles: ['filosofos', 'politicos', 'lideres'],
    origin: 'antiguidade',
    role: 'Imperador romano e estoico (121–180)',
    why: 'Governou o maior império do mundo e escreveu, só para si, como não se corromper.'
  },
  maya: {
    profiles: ['literatura', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Escritora americana (1928–2014)',
    why: 'Ficou muda cinco anos na infância e se tornou uma das vozes mais reconhecíveis do século.'
  },
  beauvoir: {
    profiles: ['filosofos', 'ativistas'],
    origin: 'europeus',
    role: 'Filósofa francesa (1908–1986)',
    why: 'Escreveu o livro que reorganizou o pensamento feminista do século XX.'
  },
  jobs: {
    profiles: ['empresarios'],
    origin: 'norteamericanos',
    role: 'Cofundador da Apple (1955–2011)',
    why: 'Foi demitido da própria empresa, voltou anos depois e a transformou na mais valiosa do mundo.'
  },
  rosaparks: {
    profiles: ['ativistas'],
    origin: 'norteamericanos',
    role: 'Ativista americana (1913–2005)',
    why: 'Um "não" dito sentada num ônibus deu início ao movimento pelos direitos civis.'
  },
  annefrank: {
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Escritora alemã (1929–1945)',
    why: 'Escreveu escondida dos nazistas o diário mais lido do mundo sobre a esperança humana.'
  },
  beethoven: {
    profiles: ['artistas'],
    origin: 'europeus',
    role: 'Compositor alemão (1770–1827)',
    why: 'Ficou surdo e continuou compondo — inclusive a obra que hoje é o hino da Europa.'
  },
  helenkeller: {
    profiles: ['ativistas', 'literatura'],
    origin: 'norteamericanos',
    role: 'Escritora e ativista (1880–1968)',
    why: 'Surda e cega desde bebê, foi a primeira pessoa nessa condição a se formar numa universidade.'
  },
  gandhi: {
    profiles: ['lideres', 'ativistas'],
    origin: 'asiaticos',
    role: 'Líder indiano (1869–1948)',
    why: 'Derrubou um império sem disparar um tiro e criou o método que inspirou o mundo inteiro.'
  },
  confucio: {
    profiles: ['filosofos', 'educadores'],
    origin: 'asiaticos',
    role: 'Pensador chinês (551–479 a.C.)',
    why: 'Fracassou como político e virou o professor que moldou a ética de metade da Ásia.'
  },
  hawking: {
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Físico britânico (1942–2018)',
    why: 'Recebeu dois anos de vida aos 21 e passou mais cinco décadas reescrevendo a cosmologia.'
  },
  rowling: {
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Escritora britânica (1965–)',
    why: 'Escreveu em cafés, dependendo de auxílio do governo, o livro recusado por doze editoras.'
  },
  mlk: {
    profiles: ['lideres', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Pastor e líder americano (1929–1968)',
    why: 'Deu ao movimento negro americano uma linguagem que o país inteiro foi obrigado a ouvir.'
  },
  curie: {
    profiles: ['cientistas'],
    origin: 'europeus',
    role: 'Física e química polonesa (1867–1934)',
    why: 'Única pessoa a ganhar o Nobel em duas ciências diferentes — e ainda enfrentou a exclusão feminina.'
  },
  suassuna: {
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Escritor brasileiro (1927–2014)',
    why: 'Levou a cultura popular do sertão para o teatro erudito sem pedir licença a ninguém.'
  },
  chicoxavier: {
    profiles: ['religiosos'],
    origin: 'brasileiros',
    role: 'Médium brasileiro (1910–2002)',
    why: 'Publicou mais de 400 livros e destinou toda a renda à caridade, sem ficar com nada.'
  },
  chanel: {
    profiles: ['artistas', 'empresarios'],
    origin: 'europeus',
    role: 'Estilista francesa (1883–1971)',
    why: 'Saiu de um orfanato e libertou o corpo feminino do espartilho — e da opinião alheia.'
  },
  earhart: {
    profiles: ['lideres'],
    origin: 'norteamericanos',
    role: 'Aviadora americana (1897–1937)',
    why: 'Foi a primeira mulher a cruzar o Atlântico sozinha, numa época que dizia ser impossível.'
  },
  ali: {
    profiles: ['atletas', 'ativistas'],
    origin: 'norteamericanos',
    role: 'Boxeador americano (1942–2016)',
    why: 'Abriu mão do título e da carreira para não ir a uma guerra em que não acreditava.'
  }
};
