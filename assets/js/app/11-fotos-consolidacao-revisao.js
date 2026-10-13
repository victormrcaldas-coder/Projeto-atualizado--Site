/* MeMotiva — app/11-fotos-consolidacao-revisao.js
   Fotos de autores (Commons), consolidação do banco (aliases, índices) e aplicação da revisão documental.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 2 — CURADORIA FOTOGRÁFICA (§8)
   Uma única fonte por pessoa (Wikimedia Commons, licença livre),
   com enquadramento independente para cada formato:
     card → moldura vertical do cartão de frase (~3:4 / 9:16)
     wide → capa horizontal da biografia (menor e deitada)
   Quando a mesma imagem não serve nos dois lugares, "fw" define um
   arquivo diferente só para o formato largo.
   ================================================================ */
const COMMONS = 'https://commons.wikimedia.org/wiki/Special:FilePath/';
function commonsURL(file, width) {
  if (!file) return '';
  if (/^https?:/.test(file)) return file;
  return COMMONS + encodeURIComponent(file).replace(/%20/g, '%20') + (width ? '?width=' + width : '');
}

/* f = arquivo · card/wide = object-position · fw = arquivo alternativo p/ formato largo */
const PHOTOS = {
  'Frida Kahlo': {
    f: 'Frida Kahlo, by Guillermo Kahlo (cropped).jpg',
    card: 'center 22%',
    wide: 'center 30%'
  },
  'Nelson Mandela': { f: 'Nelson Mandela.jpg', card: 'center 25%', wide: 'center 32%' },
  'Malala Yousafzai': { f: 'Malala Yousafzai 2015.jpg', card: 'center 20%', wide: 'center 28%' },
  'Ayrton Senna': { f: 'Ayrton Senna (close 3x4 cropped).jpg', card: 'center 22%', wide: 'center 30%' },
  'Oprah Winfrey': { f: 'Oprah Winfrey 2019.jpg', card: 'center 18%', wide: 'center 26%' },
  'Viktor Frankl': { f: 'Viktor Frankl2.jpg', card: 'center 24%', wide: 'center 30%' },
  'Paulo Freire': { f: 'Paulo Freire 1977 close-up (cropped).jpg', card: 'center 25%', wide: 'center 32%' },
  'Michelle Obama': {
    f: 'Michelle Obama official portrait headshot.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Warren Buffett': { f: 'Warren Buffett in 2010.jpg', card: 'center 20%', wide: 'center 26%' },
  'Luiza Trajano': { f: 'Luiza Helena Trajano.jpg', card: 'center 22%', wide: 'center 28%' },
  'Carl Gustav Jung': { f: 'CGJung.jpg', card: 'center 22%', wide: 'center 26%' },
  'Machado de Assis': { f: 'Machado de Assis 1904.jpg', card: 'center 24%', wide: 'center 28%' },
  'Fernando Pessoa': { f: 'Fernando Pessoa.jpg', card: 'center 20%', wide: 'center 26%' },
  'Bill Gates': { f: 'Bill gates portrait.jpg', card: 'center 20%', wide: 'center 26%' },
  'Carlos Drummond de Andrade': {
    f: 'Carlos Drummond de Andrade - Papel.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Cora Coralina': { f: 'Cora Coralina 1984.jpg', card: 'center 25%', wide: 'center 30%' },
  'Simone de Beauvoir': { f: 'Simone de Beauvoir2.png', card: 'center 22%', wide: 'center 28%' },
  'Steve Jobs': { f: 'Steve Jobs Headshot 2010-CROP2.jpg', card: 'center 20%', wide: 'center 26%' },
  'Rosa Parks': { f: 'Rosaparks.jpg', card: 'center 24%', wide: 'center 30%' },
  'Anne Frank': { f: 'Anne Frank passport photo, May 1942.jpg', card: 'center 22%', wide: 'center 26%' },
  'Ludwig van Beethoven': { f: 'Beethoven.jpg', card: 'center 24%', wide: 'center 30%' },
  'Helen Keller': { f: 'Helen KellerA.jpg', card: 'center 22%', wide: 'center 28%' },
  'Mahatma Gandhi': { f: 'Mahatma-Gandhi, studio, 1931.jpg', card: 'center 26%', wide: 'center 32%' },
  Confúcio: { f: 'Confucius Tang Dynasty.jpg', card: 'center 20%', wide: 'center 26%' },
  'Stephen Hawking': { f: 'Stephen Hawking.StarChild.jpg', card: 'center 24%', wide: 'center 30%' },
  'J.K. Rowling': { f: 'J. K. Rowling 2010.jpg', card: 'center 20%', wide: 'center 26%' },
  'Martin Luther King Jr.': { f: 'Martin Luther King, Jr..jpg', card: 'center 22%', wide: 'center 28%' },
  'Marie Curie': { f: 'Marie Curie c1920.jpg', card: 'center 24%', wide: 'center 30%' },
  'Ariano Suassuna': { f: 'Ariano Suassuna (cropped).jpg', card: 'center 22%', wide: 'center 28%' },
  'Chico Xavier': { f: 'Chico Xavier em 1972.jpg', card: 'center 24%', wide: 'center 30%' },
  'Coco Chanel': { f: 'Coco Chanel, 1920.jpg', card: 'center 22%', wide: 'center 28%' },
  'Amelia Earhart': {
    f: 'Amelia Earhart standing under nose of her Lockheed Model 10-E Electra, small.jpg',
    card: 'center 18%',
    wide: 'center 24%'
  },
  'Muhammad Ali': { f: 'Muhammad Ali NYWTS.jpg', card: 'center 22%', wide: 'center 28%' },
  'Maya Angelou': {
    f: 'Angelou at Clinton inauguration (cropped 2).jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Marco Aurélio': { f: 'Marcus Aurelius Glyptothek Munich 337.jpg', card: 'center 25%', wide: 'center 30%' },
  /* ---- novas biografias ---- */
  Aristóteles: { f: 'Aristotle Altemps Inv8575.jpg', card: 'center 25%', wide: 'center 30%' },
  Sêneca: { f: 'Seneca-berlinantikensammlung-1.jpg', card: 'center 28%', wide: 'center 32%' },
  Buda: { f: 'Buddha in Sarnath Museum (Dhammajak Mutra).jpg', card: 'center 22%', wide: 'center 26%' },
  'Lao Tsé': { f: 'Laozi.jpg', card: 'center 25%', wide: 'center 30%' },
  Epicteto: { f: 'Epictetus.jpg', card: 'center 25%', wide: 'center 30%' },
  Cícero: { f: 'M-T-Cicero.jpg', card: 'center 25%', wide: 'center 30%' },
  'William Shakespeare': { f: 'Shakespeare.jpg', card: 'center 22%', wide: 'center 26%' },
  'Kahlil Gibran': { f: 'Kahlil Gibran 1913.jpg', card: 'center 22%', wide: 'center 28%' },
  'Michel de Montaigne': { f: 'Michel de Montaigne 1.jpg', card: 'center 24%', wide: 'center 28%' },
  'Ralph Waldo Emerson': {
    f: 'Ralph Waldo Emerson ca1857 retouched.jpg',
    card: 'center 24%',
    wide: 'center 28%'
  },
  'Peter Drucker': { f: 'Drucker5789.jpg', card: 'center 22%', wide: 'center 28%' },
  'Friedrich Nietzsche': { f: 'Nietzsche187a.jpg', card: 'center 24%', wide: 'center 28%' },
  'Jane Austen': {
    f: 'Jane Austen, from A Memoir of Jane Austen (1870).jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  Platão: { f: 'Plato Silanion Musei Capitolini MC1377.jpg', card: 'center 25%', wide: 'center 30%' },
  Sócrates: { f: 'Socrates Louvre.jpg', card: 'center 25%', wide: 'center 30%' },
  'Clarice Lispector': { f: 'Clarice Lispector.tif', card: 'center 22%', wide: 'center 28%' },
  'Graciliano Ramos': { f: 'Graciliano Ramos, 1930s.jpg', card: 'center 24%', wide: 'center 28%' },
  'Charlie Munger': { f: 'Charlie Munger 2010.jpg', card: 'center 20%', wide: 'center 26%' },
  'Dale Carnegie': { f: 'Dale Carnegie.jpg', card: 'center 22%', wide: 'center 28%' },
  /* ---- autores recorrentes sem biografia (cartões de frase) ---- */
  'Albert Einstein': {
    f: 'Einstein 1921 by F Schmutzer - restoration.jpg',
    card: 'center 20%',
    wide: 'center 26%'
  },
  'Friedrich Nietzsche ': { f: 'Nietzsche187a.jpg', card: 'center 24%', wide: 'center 28%' },
  'Virginia Woolf': {
    f: 'George Charles Beresford - Virginia Woolf in 1902 - Restoration.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Oscar Wilde': { f: 'Oscar Wilde portrait.jpg', card: 'center 22%', wide: 'center 26%' },
  'Victor Hugo': {
    f: 'Victor Hugo by Étienne Carjat 1876 - full.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Charles Dickens': { f: 'Dickens Gurney head.jpg', card: 'center 22%', wide: 'center 28%' },
  'Mark Twain': { f: 'Mark Twain by AF Bradley.jpg', card: 'center 20%', wide: 'center 26%' },
  'Winston Churchill': {
    f: 'Sir Winston Churchill - 19086236948.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Abraham Lincoln': {
    f: 'Abraham Lincoln O-77 matte collodion print.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Eleanor Roosevelt': { f: 'Eleanor Roosevelt portrait 1933.jpg', card: 'center 22%', wide: 'center 28%' },
  'Sigmund Freud': {
    f: 'Sigmund Freud, by Max Halberstadt (cropped).jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Immanuel Kant': { f: 'Kant gemaelde 3.jpg', card: 'center 24%', wide: 'center 28%' },
  'Jean-Jacques Rousseau': {
    f: 'Jean-Jacques Rousseau (painted portrait).jpg',
    card: 'center 24%',
    wide: 'center 28%'
  },
  Voltaire: {
    f: 'Atelier de Nicolas de Largillière, portrait de Voltaire, détail (musée Carnavalet) -002.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Albert Camus': {
    f: 'Albert Camus, gagnant de prix Nobel, portrait en buste, posé au bureau, faisant face à gauche, cigarette de tabagisme.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Nelson Mandela ': { f: 'Nelson Mandela.jpg', card: 'center 25%', wide: 'center 32%' },
  'Elon Musk': { f: 'Elon Musk Royal Society (crop2).jpg', card: 'center 20%', wide: 'center 26%' },
  'Jeff Bezos': {
    f: 'Jeff Bezos at Amazon Spheres Grand Opening in Seattle - 2018 (39074799225) (cropped).jpg',
    card: 'center 20%',
    wide: 'center 26%'
  },
  'Henry Ford': { f: 'Henry ford 1919.jpg', card: 'center 22%', wide: 'center 28%' },
  'John D. Rockefeller': { f: 'John D. Rockefeller 1885.jpg', card: 'center 22%', wide: 'center 28%' },
  'Benjamin Franklin': {
    f: 'Joseph Siffred Duplessis - Benjamin Franklin - Google Art Project.jpg',
    card: 'center 24%',
    wide: 'center 28%'
  },
  'Simone Weil': { f: 'Simone Weil 1921.jpg', card: 'center 22%', wide: 'center 28%' },
  'Hannah Arendt': { f: 'Hannah Arendt 1975 (cropped).jpg', card: 'center 22%', wide: 'center 28%' },
  'Vincent van Gogh': {
    f: 'Vincent van Gogh - Self-Portrait - Google Art Project (454045).jpg',
    card: 'center 25%',
    wide: 'center 30%'
  },
  'Charles Chaplin': { f: 'Charlie Chaplin portrait.jpg', card: 'center 22%', wide: 'center 28%' },
  'Madre Teresa de Calcutá': { f: 'MotherTeresa 090.jpg', card: 'center 22%', wide: 'center 28%' },
  'Dalai Lama': { f: 'Tenzin Gyatso - 14th Dalai Lama (2012).jpg', card: 'center 20%', wide: 'center 26%' },
  'Clarice Lispector ': { f: 'Clarice Lispector.tif', card: 'center 22%', wide: 'center 28%' },
  'Angela Davis': { f: 'Angela Davis 1974 (cropped).jpg', card: 'center 20%', wide: 'center 26%' },
  'Chimamanda Ngozi Adichie': {
    f: 'Chimamanda Ngozi Adichie (cropped).jpg',
    card: 'center 20%',
    wide: 'center 26%'
  },
  'Malcolm X': { f: 'Malcolm X NYWTS 2a.jpg', card: 'center 22%', wide: 'center 28%' },
  'Mary Wollstonecraft': {
    f: 'Mary Wollstonecraft by John Opie (c. 1797).jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Adam Smith': { f: 'Adam Smith The Muir portrait.jpg', card: 'center 24%', wide: 'center 28%' },
  'Karl Marx': { f: 'Karl Marx 001.jpg', card: 'center 24%', wide: 'center 28%' },
  'Bertrand Russell': { f: 'Honourable Bertrand Russell.jpg', card: 'center 22%', wide: 'center 28%' },
  'Jean-Paul Sartre': { f: 'Jean Paul Sartre 1965.jpg', card: 'center 22%', wide: 'center 28%' },
  'Thomas Edison': { f: 'Thomas Edison2.jpg', card: 'center 22%', wide: 'center 28%' },
  'Carl Sagan': { f: 'Carl Sagan Planetary Society.JPG', card: 'center 20%', wide: 'center 26%' },
  'Nicolau Maquiavel': {
    f: 'Portrait of Niccolò Machiavelli by Santi di Tito.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Sun Tzu': { f: 'Enchoen27n3200.jpg', card: 'center 22%', wide: 'center 28%' },
  'Napoleão Bonaparte': { f: 'Napoleon in His Study.jpg', card: 'center 18%', wide: 'center 22%' },
  'Rui Barbosa': { f: 'Ruy Barbosa 1913.jpg', card: 'center 22%', wide: 'center 28%' },
  'Florbela Espanca': { f: 'Florbela Espanca.jpg', card: 'center 22%', wide: 'center 28%' },
  'Luís de Camões': {
    f: 'Retrato de Luís de Camões (c. 1577) - Fernão Gomes.png',
    card: 'center 24%',
    wide: 'center 28%'
  },
  'Liev Tolstói': { f: 'L.N.Tolstoy Prokudin-Gorsky.jpg', card: 'center 24%', wide: 'center 28%' },
  Epicuro: { f: 'Epicurus Louvre.jpg', card: 'center 25%', wide: 'center 30%' },
  'Arthur Schopenhauer': {
    f: 'Arthur Schopenhauer by J Schäfer, 1859b.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Søren Kierkegaard': { f: 'Kierkegaard.jpg', card: 'center 22%', wide: 'center 28%' },
  'Henry David Thoreau': {
    f: 'Benjamin D. Maxham - Henry David Thoreau - Restored.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Francis Bacon': { f: 'Somer Francis Bacon.jpg', card: 'center 22%', wide: 'center 26%' },
  'John Stuart Mill': {
    f: 'John Stuart Mill by London Stereoscopic Company, c1870.jpg',
    card: 'center 22%',
    wide: 'center 28%'
  },
  'Blaise Pascal': { f: 'Blaise Pascal Versailles.JPG', card: 'center 24%', wide: 'center 28%' },
  'Erich Fromm': { f: 'Erich Fromm 1974.jpg', card: 'center 22%', wide: 'center 28%' },
  'William James': { f: 'William James b1842c.jpg', card: 'center 22%', wide: 'center 28%' }
};
/* mantém compatibilidade com o mapa antigo */
Object.keys(AUTHOR_PHOTOS).forEach((n) => {
  if (!PHOTOS[n]) PHOTOS[n] = { f: AUTHOR_PHOTOS[n], card: 'center 22%', wide: 'center 28%' };
});

/* Cadeia de fallback: Commons → assets/authors local → iniciais.
   Um único handler global evita repetir onerror inline em cada img. */
window.__photoFail = function (img) {
  const next = img.dataset.next;
  if (next) {
    img.dataset.next = '';
    img.src = next;
    return;
  }
  img.style.display = 'none';
  const fb = img.parentElement.querySelector('.avatar-fallback, .story-cover-fallback');
  if (fb) fb.style.display = 'flex';
};
function photoInfo(name) {
  return PHOTOS[canonAuthor(name)] || null;
}

/* redefine a moldura do autor usando o novo sistema (mesma aparência) */

/* ================================================================
   CONSOLIDAÇÃO DO BANCO (aliases) + ÍNDICES
   ================================================================ */
QUOTES.forEach((q) => {
  const c = canonAuthor(q.author);
  if (c !== q.author) q.author = c;
});

/* Junta as novas biografias às 30 existentes e aplica os metadados. */
STORIES.forEach((s) => {
  const m = STORY_META[s.id];
  if (m) {
    s.profiles = m.profiles;
    s.origin = m.origin;
    s.role = m.role;
    s.why = m.why;
  } else {
    s.profiles = s.profiles || [];
    s.origin = s.origin || '';
    s.role = s.role || '';
    s.why = s.why || s.excerpt;
  }
  s.author = canonAuthor(s.author);
});
NEW_STORIES.forEach((s) => {
  s.author = canonAuthor(s.author);
  STORIES.push(s);
});

/* --- FASE 3: incorporação das novas frases verificadas ---------------
   Regra do §1: nunca sobrescrever uma atribuição existente. Se o texto
   já está no banco, mantemos o autor que lá está e apenas anexamos a
   fonte quando o autor coincide. Só entram frases realmente inéditas. */
(function mergeNewQuotes() {
  const norm = (t) =>
    t
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  const index = new Map();
  QUOTES.forEach((q) => {
    index.set(norm(q.text), q);
  });
  NEW_QUOTES.forEach((nq) => {
    nq.author = canonAuthor(nq.author);
    const k = norm(nq.text);
    const existing = index.get(k);
    if (existing) {
      if (existing.author === nq.author && !existing.src) existing.src = nq.src; // enriquece a fonte
      return; // nunca duplica
    }
    QUOTES.push(nq);
    index.set(k, nq);
  });
})();

/* ================================================================
   REVISÃO DOCUMENTAL — APLICAÇÃO
   Roda no arranque, sobre o banco já mesclado. Não remove nem
   reescreve o texto de nenhuma frase: apenas anexa fonte (src),
   status (st) e, quando há evidência, corrige a autoria.
   ================================================================ */
const REVISAO = { fontes: 0, corrigidas: 0, paráfrases: 0, sagradas: 0, semFonte: 0, jaTinha: 0 };

(function aplicarRevisaoDocumental() {
  /* 1. Correções de autoria com evidência (§5) --------------------
     Só entram aqui casos em que a formulação foi rastreada até outro
     autor ou em que a ausência de fonte primária está documentada. */
  QUOTES.forEach((q) => {
    const c = CORRECOES.find((c) => c.autorAtual === canonAuthor(q.author) && c.m.test(q.text));
    if (!c) return;
    if (c.autorNovo !== c.autorAtual) {
      q.autorAnterior = q.author;
      q.author = c.autorNovo;
    }
    q.src = c.src;
    q.st = c.st;
    q.nota = c.nota;
    REVISAO.corrigidas++;
  });

  /* 1b. ELEVAÇÃO — passagem localizada tem prioridade sobre qualquer
        fonte genérica já registrada. */
  QUOTES.forEach((q) => {
    if (q.st === 'P' && q.nota) return; // correção de autoria: não mexer
    const a = canonAuthor(q.author);
    const e = ELEVACAO.find((e) => e.a === a && e.m.some((re) => re.test(q.text)));
    if (!e) return;
    const antes = q.st;
    q.src = e.src;
    q.st = e.st;
    if (antes !== 'A' && e.st === 'A') REVISAO.elevadas = (REVISAO.elevadas || 0) + 1;
  });

  /* 2. Mapa de passagens canônicas (§3) --------------------------- */
  QUOTES.forEach((q) => {
    if (q.st) return; // já tratada acima
    if (q.src) {
      q.st = q.st || 'A';
      REVISAO.jaTinha++;
      return;
    }
    const a = canonAuthor(q.author);
    const p = PASSAGES.find((p) => p.a === a && p.m.some((re) => re.test(q.text)));
    if (!p) return;
    q.src = p.src;
    q.st = p.st;
    if (p.st === 'P') REVISAO.paráfrases++;
    else REVISAO.fontes++;
  });

  /* 3. Textos sagrados: declarar a tradução (§9) ------------------ */
  QUOTES.forEach((q) => {
    if (q.st) return;
    const a = canonAuthor(q.author);
    const t = TRADUCOES_SAGRADAS.find((t) => t.re.test(a));
    if (!t) return;
    q.src = a + ' · ' + t.nota;
    q.st = 'B';
    REVISAO.sagradas++;
  });

  /* 3b. SEGUNDA RODADA (§1) — reinvestigação dos casos que ficaram R.
        Corre por autor, do mais concentrado ao menos. Só toca em
        frases que a primeira passada não conseguiu documentar. */
  QUOTES.forEach((q) => {
    const c = CORRECOES_R.find((c) => c.autorAtual === canonAuthor(q.author) && c.m.test(q.text));
    if (!c) return;
    if (q.st && q.st !== 'R') return;
    q.autorAnterior = q.author;
    q.author = c.autorNovo;
    q.src = c.src;
    q.st = c.st;
    q.nota = c.nota;
    REVISAO.corrigidas++;
  });
  QUOTES.forEach((q) => {
    if (q.st) return;
    const a = canonAuthor(q.author);
    const p =
      PASSAGES_R.find((p) => p.a === a && p.m.some((re) => re.test(q.text))) ||
      PASSAGES_R2.find((p) => p.a === a && p.m.some((re) => re.test(q.text)));
    if (!p) return;
    q.src = p.src;
    q.st = p.st;
    if (p.st === 'P') REVISAO.paráfrases++;
    else REVISAO.fontes++;
  });

  /* 4. O que sobrou fica marcado para revisão manual — sem fonte
        inventada e sem remoção (§10, §11). */
  QUOTES.forEach((q) => {
    if (q.st) return;
    if (
      q.cat === 'ditados' ||
      /^(Ditado|Prov[ée]rbio (popular|chin[êe]s|[áa]rabe|africano|japon[êe]s|indiano|russo|alem[ãa]o|italiano|latino|turco|persa|iorub[áa]|zulu)|Sabedoria popular|Autor desconhecido|Autor n[ãa]o)/i.test(
        q.author
      )
    ) {
      q.st = 'X'; // ditados: fora do critério (§12)
      return;
    }
    q.st = 'R'; // revisão manual pendente
    REVISAO.semFonte++;
  });
})();

/* ================================================================
   §17 — PROTEÇÃO CONTRA NOVAS FRASES SEM FONTE
   Toda entrada futura passa por aqui. Sem src, não entra.
   ================================================================ */
function addQuote(q) {
  const erros = [];
  if (!q || typeof q !== 'object') erros.push('objeto inválido');
  else {
    if (!q.text || !q.text.trim()) erros.push('texto ausente');
    if (!q.author || !q.author.trim()) erros.push('autor ausente');
    if (!q.cat || !CATEGORIES.some((c) => c.id === q.cat)) erros.push('categoria inválida ou ausente');
    const isDitado = q.cat === 'ditados';
    if (!isDitado && (!q.src || !q.src.trim()))
      erros.push('fonte (src) obrigatória — só Ditados Populares são dispensados');
    const norm = (t) =>
      t
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    if (q.text && QUOTES.some((x) => norm(x.text) === norm(q.text))) erros.push('frase já existe no banco');
  }
  if (erros.length) {
    console.error('[curadoria] frase recusada:', erros.join(' · '), q);
    return { ok: false, erros };
  }
  q.author = canonAuthor(q.author);
  q.st = q.st || (q.cat === 'ditados' ? 'X' : 'A');
  QUOTES.push(q);
  return { ok: true, index: QUOTES.length - 1 };
}
window.addQuote = addQuote;

/* --- FASE 3: novas biografias + origem Ásia/África ------------------- */
NEW_STORIES_A.concat(NEW_STORIES_B, STORIES_C, STORIES_D).forEach((s) => {
  s.author = canonAuthor(s.author);
  if (!STORIES.some((x) => x.id === s.id || x.author === s.author)) STORIES.push(s);
});
(function mergeOrigins() {
  const M = { asiaticos: 'asiaafrica', africanos: 'asiaafrica' }; // §7: África não pode sumir
  STORIES.forEach((s) => {
    if (M[s.origin]) s.origin = M[s.origin];
  });
})();

/* autor -> id da biografia (para ligar frase → biografia) */
const BIO_BY_AUTHOR = {};
STORIES.forEach((s) => {
  BIO_BY_AUTHOR[s.author] = s.id;
});
function bioIdFor(author) {
  return BIO_BY_AUTHOR[canonAuthor(author)] || null;
}

/* contagem de frases por perfil — decide quais tags têm conteúdo (§9.2) */
const MIN_PROFILE_QUOTES = 12;
const PROFILE_COUNTS = (() => {
  const c = {};
  QUOTES.forEach((q) => {
    authorProfiles(q.author).forEach((p) => {
      c[p] = (c[p] || 0) + 1;
    });
  });
  return c;
})();
const ACTIVE_PROFILES = PROFILES.filter((p) => (PROFILE_COUNTS[p.id] || 0) >= MIN_PROFILE_QUOTES);
