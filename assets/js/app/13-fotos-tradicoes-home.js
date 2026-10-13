/* MeMotiva — app/13-fotos-tradicoes-home.js
   Fotos das novas pessoas, origens, tradições religiosas, cartões de tema da home e expansão do cartão.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 3 — FOTOGRAFIAS DAS NOVAS PESSOAS (§11: obrigatórias)
   Enquadramento "card" = moldura vertical · "wide" = capa da
   biografia. Valores mais altos mostram a testa; mais baixos, o
   queixo. Ajustados para que nenhum rosto seja cortado.
   ================================================================ */
Object.assign(PHOTOS, {
  Epicuro: { f: 'Epicurus Louvre.jpg', card: 'center 22%', wide: 'center 26%' },
  'Immanuel Kant': { f: 'Kant gemaelde 3.jpg', card: 'center 24%', wide: 'center 26%' },
  'Arthur Schopenhauer': {
    f: 'Arthur Schopenhauer by J Schäfer, 1859b.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Søren Kierkegaard': { f: 'Kierkegaard.jpg', card: 'center 22%', wide: 'center 26%' },
  'Albert Camus': {
    f: 'Albert Camus, gagnant de prix Nobel, portrait en buste, posé au bureau, faisant face à gauche, cigarette de tabagisme.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Hannah Arendt': { f: 'Hannah Arendt 1975 (cropped).jpg', card: 'center 22%', wide: 'center 26%' },
  'Bertrand Russell': { f: 'Honourable Bertrand Russell.jpg', card: 'center 22%', wide: 'center 26%' },
  'Sun Tzu': { f: 'Enchoen27n3200.jpg', card: 'center 22%', wide: 'center 26%' },
  'Victor Hugo': {
    f: 'Victor Hugo by Étienne Carjat 1876 - full.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Oscar Wilde': { f: 'Oscar Wilde portrait.jpg', card: 'center 20%', wide: 'center 24%' },
  'Virginia Woolf': {
    f: 'George Charles Beresford - Virginia Woolf in 1902 - Restoration.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Liev Tolstói': { f: 'L.N.Tolstoy Prokudin-Gorsky.jpg', card: 'center 24%', wide: 'center 26%' },
  'Charles Dickens': { f: 'Dickens Gurney head.jpg', card: 'center 22%', wide: 'center 26%' },
  'Mark Twain': { f: 'Mark Twain by AF Bradley.jpg', card: 'center 20%', wide: 'center 24%' },
  'Carlos Drummond de Andrade': {
    f: 'Carlos Drummond de Andrade - Papel.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Guimarães Rosa': { f: 'João Guimarães Rosa.jpg', card: 'center 22%', wide: 'center 26%' },
  'Cecília Meireles': { f: 'Cecilia Meireles.jpg', card: 'center 22%', wide: 'center 26%' },
  Rumi: { f: 'Molana.jpg', card: 'center 22%', wide: 'center 26%' },
  'Profeta Muhammad': {
    f: 'Rashid al-Din Hamadani. Jami al-Tawarikh. 1liyas and Muhammad.jpg',
    card: 'center 25%',
    wide: 'center 28%'
  },
  'Dalai Lama': { f: 'Tenzin Gyatso - 14th Dalai Lama (2012).jpg', card: 'center 20%', wide: 'center 24%' },
  'Francisco de Assis': { f: 'San Francesco d\u2019Assisi.jpg', card: 'center 22%', wide: 'center 26%' },
  'Thich Nhat Hanh': { f: 'Thich Nhat Hanh 12 (cropped).jpg', card: 'center 20%', wide: 'center 24%' },
  'Albert Einstein': {
    f: 'Einstein 1921 by F Schmutzer - restoration.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Charles Darwin': { f: 'Charles Darwin seated crop.jpg', card: 'center 22%', wide: 'center 26%' },
  'Carl Sagan': { f: 'Carl Sagan Planetary Society.JPG', card: 'center 20%', wide: 'center 24%' },
  'Santos Dumont': { f: 'Alberto Santos-Dumont 1902.jpg', card: 'center 22%', wide: 'center 26%' },
  'Ada Lovelace': { f: 'Ada Lovelace portrait.jpg', card: 'center 22%', wide: 'center 26%' },
  'Henry Ford': { f: 'Henry ford 1919.jpg', card: 'center 22%', wide: 'center 26%' },
  'John D. Rockefeller': { f: 'John D. Rockefeller 1885.jpg', card: 'center 22%', wide: 'center 26%' },
  'Andrew Carnegie': {
    f: 'Andrew Carnegie, three-quarter length portrait, seated, facing slightly left, 1913.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Jack Ma': { f: 'Jack Ma 2008.jpg', card: 'center 20%', wide: 'center 24%' },
  'Benjamin Graham': { f: 'Benjamin Graham.jpg', card: 'center 22%', wide: 'center 26%' },
  'John Bogle': { f: 'John C Bogle 2012.jpg', card: 'center 20%', wide: 'center 24%' },
  'Ray Dalio': { f: 'Ray Dalio 2019.jpg', card: 'center 20%', wide: 'center 24%' },
  'Winston Churchill': {
    f: 'Sir Winston Churchill - 19086236948.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Abraham Lincoln': {
    f: 'Abraham Lincoln O-77 matte collodion print.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Eleanor Roosevelt': { f: 'Eleanor Roosevelt portrait 1933.jpg', card: 'center 20%', wide: 'center 24%' },
  'Rui Barbosa': { f: 'Ruy Barbosa 1913.jpg', card: 'center 22%', wide: 'center 26%' },
  'Simón Bolívar': { f: 'Simón Bolívar 3.jpg', card: 'center 22%', wide: 'center 26%' },
  'Malcolm X': { f: 'Malcolm X NYWTS 2a.jpg', card: 'center 20%', wide: 'center 24%' },
  'bell hooks': { f: 'Bellhooks.jpg', card: 'center 20%', wide: 'center 24%' },
  'Chimamanda Ngozi Adichie': {
    f: 'Chimamanda Ngozi Adichie (cropped).jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Zumbi dos Palmares': {
    f: 'Zumbi dos Palmares - Antônio Parreiras.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Wangari Maathai': { f: 'Wangari Maathai in Nairobi.jpg', card: 'center 20%', wide: 'center 24%' },
  'Sigmund Freud': {
    f: 'Sigmund Freud, by Max Halberstadt (cropped).jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Erich Fromm': { f: 'Erich Fromm 1974.jpg', card: 'center 20%', wide: 'center 24%' },
  'Daniel Kahneman': { f: 'Daniel KAHNEMAN.jpg', card: 'center 20%', wide: 'center 24%' },
  'Vincent van Gogh': {
    f: 'Vincent van Gogh - Self-Portrait - Google Art Project (454045).jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Charles Chaplin': { f: 'Charlie Chaplin portrait.jpg', card: 'center 20%', wide: 'center 24%' },
  'Tarsila do Amaral': { f: 'Tarsila do Amaral, 1922.jpg', card: 'center 20%', wide: 'center 24%' },
  'Leonardo da Vinci': { f: 'Leonardo self.jpg', card: 'center 22%', wide: 'center 26%' },
  'Maria Montessori': { f: 'Maria Montessori1913.jpg', card: 'center 20%', wide: 'center 24%' },
  'John Dewey': { f: 'John Dewey in 1902.jpg', card: 'center 20%', wide: 'center 24%' },
  Pelé: { f: 'Pelé - Santos FC (cropped).jpg', card: 'center 18%', wide: 'center 22%' }
});

/* ================================================================
   §7 — ORIGEM: Ásia/África numa única categoria
   A África não pode desaparecer atrás de um rótulo asiático.
   ================================================================ */
ORIGINS.length = 0;
ORIGINS.push(
  { id: 'brasileiros', name: 'Brasileiros' },
  { id: 'latinos', name: 'Latino-americanos' },
  { id: 'europeus', name: 'Europeus' },
  { id: 'norteamericanos', name: 'Norte-americanos' },
  { id: 'asiaafrica', name: 'Ásia/África' },
  { id: 'antiguidade', name: 'Mundo antigo' }
);

/* ================================================================
   §6 — RELIGIOSIDADE: subdivisões por tradição
   Regra de curadoria preservada: só entram aqui autores que são
   figuras religiosas ou textos/tradições propriamente religiosos.
   ================================================================ */
const TRADITIONS = [
  { id: 'biblia', name: 'Bíblia e Cristianismo' },
  { id: 'budismo', name: 'Budismo' },
  { id: 'hinduismo', name: 'Hinduísmo' },
  { id: 'islamismo', name: 'Islamismo' },
  { id: 'judaismo', name: 'Judaísmo' },
  { id: 'taoismo', name: 'Taoismo' }
];
function traditionById(id) {
  return TRADITIONS.find((t) => t.id === id);
}

const _TRAD_NAMES = {
  budismo: [
    'Buda',
    'Dalai Lama',
    'Thich Nhat Hanh',
    'Tradição budista',
    'Dhammapada',
    'Bodhidharma',
    'Shantideva',
    'Milarepa'
  ],
  taoismo: ['Lao Tsé', 'Chuang Tzu', 'Tao Te Ching', 'Tradição taoista', 'Zhuangzi'],
  hinduismo: [
    'Krishna',
    'Upanishads',
    'Osho',
    'Bhagavad Gita',
    'Vivekananda',
    'Ramakrishna',
    'Patanjali',
    'Tradição hindu'
  ],
  islamismo: [
    'Profeta Muhammad',
    'Rumi',
    'Alcorão',
    'Tradição islâmica',
    'Hazrat Inayat Khan',
    'Al-Ghazali',
    'Ibn Arabi',
    'Hadith'
  ],
  judaismo: [
    'Hillel',
    'Ben Zoma',
    'Rabi Tarfon',
    'Pirkei Avot',
    'Torá',
    'Mishná',
    'Talmude',
    'Tradição judaica',
    'Tradição rabínica',
    'Shimon HaTzadik',
    'Abraham Joshua Heschel',
    'Ben Sirá',
    'Maimônides',
    'Baal Shem Tov'
  ],
  biblia: [
    'Jesus Cristo',
    'Apóstolo Paulo',
    'Santo Agostinho',
    'Tomás de Aquino',
    'Madre Teresa de Calcutá',
    'Francisco de Assis',
    'Papa Francisco',
    'Padre Antônio Vieira',
    'São Jerônimo',
    'Santo Isidoro de Sevilha',
    'Paul Tillich',
    'Reinhold Niebuhr',
    'Chico Xavier',
    'Bíblia Sagrada',
    'Martinho Lutero',
    'Thomas Merton',
    'Desmond Tutu',
    'Meister Eckhart',
    'Teresa d\u2019Ávila',
    'C. S. Lewis'
  ]
};
/* Prefixos de livros bíblicos e de coletâneas — cobrem as centenas de
   citações no formato "Provérbios 16:32", "Alcorão 2:153" etc. */
const _TRAD_PREFIX = [
  [/^(Alcor[ãa]o|Cor[ãa]o)\b/i, 'islamismo'],
  [/^(Mishn[áa]|Pirkei|Tor[áa]|Talmude|Ben Zoma|Rabi )/i, 'judaismo'],
  [/^(Mundaka|Katha|Rig Veda|Upanishad|Bhagavad|Chandogya|Isha )/i, 'hinduismo'],
  [
    /^(Prov[ée]rbios|Salmos|Livro d|Eclesiastes|Deuteron[ôo]mio|Lev[íi]tico|G[êe]nesis|[ÊE]xodo|Isa[íi]as|Miqueias|Jeremias|Ezequiel|Daniel|Am[óo]s|Naum|Jonas|1 Samuel|2 Samuel|1 Reis|2 Reis|J[óo] |Cantares|Carta a|Carta d|Mateus|Marcos|Lucas|Jo[ãa]o|Atos|Romanos|1 Cor[íi]ntios|2 Cor[íi]ntios|G[áa]latas|Ef[ée]sios|Filipenses|Colossenses|Hebreus|Tiago|1 Pedro|Primeira Carta|Segunda Carta|Apocalipse)/i,
    'biblia'
  ]
];
const TRADITION_MAP = (() => {
  const m = {};
  Object.entries(_TRAD_NAMES).forEach(([t, names]) => {
    names.forEach((n) => {
      m[canonAuthor(n)] = t;
    });
  });
  return m;
})();
function authorTradition(name) {
  const c = canonAuthor(name);
  if (TRADITION_MAP[c]) return TRADITION_MAP[c];
  for (const [re, t] of _TRAD_PREFIX) {
    if (re.test(c)) return t;
  }
  return null;
}
/* Só sobrevivem as tradições com material suficiente (§6). */
const MIN_TRADITION_QUOTES = 8;
const TRADITION_COUNTS = (() => {
  const c = {};
  QUOTES.forEach((q) => {
    if (q.cat !== 'fe') return;
    const t = authorTradition(q.author);
    if (t) c[t] = (c[t] || 0) + 1;
  });
  return c;
})();
const ACTIVE_TRADITIONS = TRADITIONS.filter((t) => (TRADITION_COUNTS[t.id] || 0) >= MIN_TRADITION_QUOTES);

state.exploreFilter.tradition = 'all';

function renderTraditionFilter() {
  const wrap = document.getElementById('traditionFilterWrap');
  if (!wrap) return;
  const isFe = state.exploreFilter.cat === 'fe';
  wrap.classList.toggle('hidden', !isFe);
  if (!isFe) {
    if (state.exploreFilter.tradition !== 'all') state.exploreFilter.tradition = 'all';
    closeTraditionPanel();
    return;
  }
  const btn = document.getElementById('traditionFilterBtn');
  const sel = state.exploreFilter.tradition;
  const cur = sel === 'all' ? null : traditionById(sel);
  btn.classList.toggle('has-value', !!cur);
  btn.querySelector('.pf-label').textContent = cur ? cur.name : 'Escolha';
  const opts = document.getElementById('traditionOptions');
  opts.innerHTML = [{ id: 'all', name: 'Todas as tradições' }, ...ACTIVE_TRADITIONS]
    .map(
      (t) => `
    <button class="profile-opt ${sel === t.id ? 'active' : ''}" data-tradition="${t.id}">
      <span>${escapeHtml(t.name)}</span>
      <span class="pc">${t.id === 'all' ? QUOTES.filter((q) => q.cat === 'fe').length : TRADITION_COUNTS[t.id] || 0}</span>
    </button>`
    )
    .join('');
  opts.querySelectorAll('[data-tradition]').forEach((b) => {
    b.addEventListener('click', () => {
      state.exploreFilter.tradition = b.dataset.tradition;
      closeTraditionPanel();
      renderTraditionFilter();
      renderExploreResults();
    });
  });
}
function openTraditionPanel() {
  document.getElementById('traditionPanel').classList.add('open');
  document.getElementById('traditionFilterBtn').setAttribute('aria-expanded', 'true');
}
function closeTraditionPanel() {
  const p = document.getElementById('traditionPanel');
  if (p) {
    p.classList.remove('open');
    document.getElementById('traditionFilterBtn').setAttribute('aria-expanded', 'false');
  }
}
function toggleTraditionPanel() {
  const p = document.getElementById('traditionPanel');
  p.classList.contains('open') ? closeTraditionPanel() : openTraditionPanel();
}

function renderCategoryChips() {
  const el = document.getElementById('categoryChips');
  const chips = [{ id: 'all', name: 'Todos os temas' }, ...CATEGORIES];
  el.innerHTML = chips
    .map(
      (c) =>
        `<button class="chip ${state.exploreFilter.cat === c.id ? 'active' : ''}" data-chip="${c.id}">${c.name}</button>`
    )
    .join('');
  el.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.exploreFilter.cat = chip.dataset.chip;
      el.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === chip));
      clearRandomSlot();
      centerActiveChip();
      renderProfileFilter();
      renderTraditionFilter();
      renderExploreResults();
      keepResultsInView();
    });
  });
  requestAnimationFrame(() => {
    centerActiveChip(true);
    updateChipArrows();
  });
}
function renderExplore() {
  renderCategoryChips();
  renderProfileFilter();
  renderTraditionFilter();
  document.getElementById('authorSearch').value = state.exploreFilter.q;
  document.getElementById('clearSearch').classList.toggle('hidden', !state.exploreFilter.q);
  clearRandomSlot();
  renderExploreResults();
}

/* ================================================================
   §12 — CARTÕES DE TEMA DA HOME
   Ícone, nome e contagem: brancos no modo escuro, escuros no modo
   claro, iguais nos 22 cartões. Quando a cor do campo não dá
   contraste suficiente para essa tinta, ajustamos apenas a
   luminosidade da própria cor (mesmo matiz), nunca o matiz.
   ================================================================ */
function tileInk() {
  return state.theme === 'dark' ? '#FFFFFF' : CAT_INK_DARK;
}
function tileBackground(hex) {
  const ink = tileInk();
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return hex;
  if (contrast(hex, ink) >= 3.4) return hex;
  const toward = state.theme === 'dark' ? '#000000' : '#FFFFFF';
  for (let mix = 88; mix >= 30; mix -= 6) {
    const c = mixHex(hex, toward, mix);
    if (contrast(c, ink) >= 3.4) return c;
  }
  return mixHex(hex, toward, 30);
}
function mixHex(a, b, pctA) {
  const p = pctA / 100;
  const ca = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const cb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return (
    '#' +
    ca
      .map((v, i) =>
        Math.round(v * p + cb[i] * (1 - p))
          .toString(16)
          .padStart(2, '0')
      )
      .join('')
  );
}
function renderCategoryGrid(containerId, clickable = true) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const ink = tileInk();
  el.innerHTML = CATEGORIES.map((c) => {
    const count = QUOTES.filter((q) => quoteMatchesCat(q, c.id)).length;
    const bg = tileBackground(c.color);
    return `<button class="cat-tile reveal in-view" data-cat="${c.id}" data-ink="${state.theme === 'dark' ? 'light' : 'dark'}" style="background:${bg}; color:${ink};">
      <span class="cat-tile-icon">${catIconHTML(c, 28, ink)}</span>
      <div>
        <div class="cat-tile-name">${c.name}</div>
        <div class="cat-tile-count">${count} frase${count === 1 ? '' : 's'}</div>
      </div>
    </button>`;
  }).join('');
  if (clickable) {
    el.querySelectorAll('.cat-tile').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.exploreFilter.cat = btn.dataset.cat;
        navigateTo('explorar');
      });
    });
  }
}

/* ================================================================
   §10 — CAPA DA BIOGRAFIA SEM ROSTO CORTADO
   Camada de fundo desfocada (preenche a caixa) + a fotografia
   inteira por cima em object-fit:contain. Nada é esticado,
   deformado ou decapitado, qualquer que seja a proporção original.
   ================================================================ */
function storyCoverHTML(s) {
  const base = catColor(s.cat);
  const bg = `linear-gradient(135deg, ${base}, color-mix(in srgb, ${base} 65%, black))`;
  const p = photoInfo(s.author);
  const file = p ? p.fw || p.f : null;
  const url = file ? commonsURL(file, 600) : '';
  return `<div class="story-cover" style="background:${bg};" data-open-photo="${escapeHtml(s.author)}" role="button" tabindex="0" aria-label="Ampliar fotografia de ${escapeHtml(s.author)}">
      ${url ? `<span class="story-cover-blur" style="background-image:url('${url}')" aria-hidden="true"></span>` : ''}
      <img src="${url || localAuthorPhoto(slugify(canonAuthor(s.author))) || NO_IMG}" alt="${escapeHtml(s.author)}" loading="lazy" decoding="async"
           class="story-cover-img" onerror="window.__photoFail(this)">
      <span class="story-cover-fallback" style="display:none;">${initials(s.author)}</span>
    </div>`;
}

/* ================================================================
   §8 — EXPANSÃO REAL DO CARTÃO DE FRASE
   Agora ocupa a tela inteira (não "alguns pixels a mais"), com a
   frase em corpo grande e escalonado pelo comprimento do texto.
   ================================================================ */
/* Degraus calibrados pela distribuição real do banco (a frase mais
   longa tem 200 caracteres), não por faixas teóricas. */
function quoteFontSize(text) {
  const n = text.length;
  if (n < 45) return 'clamp(32px, 8vw, 66px)';
  if (n < 75) return 'clamp(29px, 6.6vw, 56px)';
  if (n < 110) return 'clamp(26px, 5.4vw, 47px)';
  if (n < 150) return 'clamp(23px, 4.4vw, 39px)';
  return 'clamp(21px, 3.6vw, 33px)';
}

/* ================================================================
   CORREÇÃO: o clique no próprio cartão nunca era ligado
   appendExploreBatch chama attachQuoteCardEvents(cartão), e
   querySelectorAll só varre descendentes — o elemento em si ficava
   de fora. Por isso a expansão "não funcionava" na grade.
   ================================================================ */
function scopeAll(root, sel) {
  const out = root.matches && root.matches(sel) ? [root] : [];
  return out.concat(Array.from(root.querySelectorAll(sel)));
}
function attachQuoteCardEvents(container) {
  scopeAll(container, '[data-fav-quote]').forEach((btn) => {
    if (btn.dataset.wiredFav) return;
    btn.dataset.wiredFav = '1';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = Number(btn.dataset.favQuote);
      requireAuth(() => toggleFavoriteQuote(idx), 'Crie sua conta para guardar frases nos favoritos.');
    });
  });
  scopeAll(container, '[data-open-photo]').forEach((el) => {
    if (el.dataset.wiredPhoto) return;
    el.dataset.wiredPhoto = '1';
    const go = (e) => {
      e.stopPropagation();
      openPhotoModal(el.dataset.openPhoto);
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go(e);
      }
    });
  });
  scopeAll(container, '[data-quote-idx]').forEach((card) => {
    if (card.dataset.wiredOpen) return;
    card.dataset.wiredOpen = '1';
    const open = () => openQuoteModal(Number(card.dataset.quoteIdx));
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
}
