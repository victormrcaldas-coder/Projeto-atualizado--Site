/* MeMotiva — app/09-estado-navegacao-cartoes-explorar.js
   Estado da aplicação, tema, navegação, cartão de frase, home (hero, frase do dia, gerador), categorias e Explorar.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   ESTADO DA APLICAÇÃO
   ================================================================ */
const state = {
  theme: 'light',
  view: 'home',
  currentUser: null, // {email, username}
  favorites: [], // [{type:'quote'|'post', id}]
  myPhrases: [], // [{id,text,font,color,createdAt}]
  following: [], // [usernames]
  communityPosts: [], // carregado do storage compartilhado
  exploreFilter: { cat: 'all', q: '' },
  feedFilter: 'recentes',
  composerStyle: { font: 'body', color: 'coral' },
  myPhraseStyle: { font: 'hand', color: 'paper' },
  pendingAction: null, // função a rodar após login bem-sucedido
  lastRandomIdx: -1,
  lastFieldRandomIdx: -1 // último sorteio dentro de um campo (Explorar)
};

/* ================================================================
   TEMA (CLARO / ESCURO)
   ================================================================ */
async function initTheme() {
  let saved = await dbGet('theme');
  if (!saved) {
    saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(saved, false);
}
function applyTheme(mode, persist = true) {
  state.theme = mode;
  document.documentElement.setAttribute('data-theme', mode);
  document.body.setAttribute('data-theme', mode);
  document.getElementById('themeIconSun').classList.toggle('hidden', mode === 'dark');
  document.getElementById('themeIconMoon').classList.toggle('hidden', mode !== 'dark');
  if (persist) dbSet('theme', mode);
}
function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

/* ================================================================
   NAVEGAÇÃO ENTRE VIEWS
   ================================================================ */

document.querySelectorAll('[data-nav]').forEach((el) => {
  el.addEventListener('click', () => navigateTo(el.dataset.nav));
});

/* ================================================================
   AVATAR / FOTO DO AUTOR (com fallback de iniciais)
   1) Se houver uma foto real verificada (Wikimedia Commons) no
      lookup AUTHOR_PHOTOS, usa ela.
   2) Senão, tenta assets/authors/{slug}.jpg — pasta local onde
      você pode colocar suas próprias fotos licenciadas.
   3) Se nada carregar, cai no avatar de iniciais colorido.
   ================================================================ */
/* Arquivos locais de foto. Só tente carregar assets/authors|stories/{slug}.jpg
   se o slug estiver listado aqui (manter em sincronia com as pastas); caso
   contrário o <img> começa direto pela Wikipédia/iniciais, sem pedir um
   arquivo que não existe (isso gerava dezenas de 404 por tela). */
const LOCAL_AUTHOR_PHOTOS = new Set([]);
const NO_IMG = 'data:,';
function localAuthorPhoto(slug) {
  return LOCAL_AUTHOR_PHOTOS.has(slug) ? 'assets/authors/' + slug + '.jpg' : '';
}
const AUTHOR_PHOTOS = {
  'Frida Kahlo':
    'https://commons.wikimedia.org/wiki/Special:FilePath/Frida%20Kahlo,%20by%20Guillermo%20Kahlo%20(cropped).jpg',
  'Nelson Mandela': 'https://commons.wikimedia.org/wiki/Special:FilePath/Nelson%20Mandela.jpg',
  'Malala Yousafzai': 'https://commons.wikimedia.org/wiki/Special:FilePath/Malala%20Yousafzai%202015.jpg',
  'Ayrton Senna':
    'https://commons.wikimedia.org/wiki/Special:FilePath/Ayrton%20Senna%20(close%203x4%20cropped).jpg',
  'Oprah Winfrey': 'https://commons.wikimedia.org/wiki/Special:FilePath/Oprah%20Winfrey%202019.jpg',
  'Viktor Frankl': 'https://commons.wikimedia.org/wiki/Special:FilePath/Viktor%20Frankl2.jpg',
  'Paulo Freire':
    'https://commons.wikimedia.org/wiki/Special:FilePath/Paulo%20Freire%201977%20close-up%20(cropped).jpg',
  'Michelle Obama':
    'https://commons.wikimedia.org/wiki/Special:FilePath/Michelle%20Obama%20official%20portrait%20headshot.jpg',
  'Warren Buffett': 'https://commons.wikimedia.org/wiki/Special:FilePath/Warren%20Buffett%20in%202010.jpg',
  'Luiza Trajano': 'https://commons.wikimedia.org/wiki/Special:FilePath/Luiza%20Helena%20Trajano.jpg',
  'Carl Jung': 'https://commons.wikimedia.org/wiki/Special:FilePath/CGJung.jpg',
  'Machado de Assis': 'https://commons.wikimedia.org/wiki/Special:FilePath/Machado%20de%20Assis%201904.jpg',
  'Fernando Pessoa': 'https://commons.wikimedia.org/wiki/Special:FilePath/Fernando%20Pessoa.jpg',
  'Bill Gates': 'https://commons.wikimedia.org/wiki/Special:FilePath/Bill%20gates%20portrait.jpg',
  'Carlos Drummond de Andrade':
    'https://commons.wikimedia.org/wiki/Special:FilePath/Carlos%20Drummond%20de%20Andrade%20-%20Papel.jpg'
};

/* ================================================================
   CARTÃO DE FRASE (papel envelhecido) — elemento-assinatura
   ================================================================ */
/* Favoritos de frases são guardados pelo qid estável da frase (não pelo índice
   em QUOTES, que muda a cada remoção/dedup/reordenação). Formato:
   {type:'quote', qid:'...'}. Favoritos de posts continuam {type:'post', id}. */
function favQuoteQid(idx) {
  const q = QUOTES[idx];
  return q ? q.qid : null;
}
function isFavQuote(idx) {
  const k = favQuoteQid(idx);
  return k != null && state.favorites.some((f) => f.type === 'quote' && f.qid === k);
}
/* Normaliza favoritos lidos do armazenamento. Entradas antigas gravadas por
   índice ({type:'quote', id:<número>}, sem qid) são DESCARTADAS: o índice
   gravado referia-se a uma ordem de QUOTES que já não existe e associá-lo à
   frase atual poderia apontar para a frase errada. Qids que já não existem
   no acervo (frase removida) também saem. */
function normalizarFavoritos(lista) {
  const out = [];
  let legado = 0,
    orfao = 0;
  (Array.isArray(lista) ? lista : []).forEach((f) => {
    if (!f || typeof f !== 'object') return;
    if (f.type === 'quote') {
      if (typeof f.qid !== 'string') {
        legado++;
        return;
      }
      if (QUOTE_POR_QID[f.qid] === undefined) {
        orfao++;
        return;
      }
      if (!out.some((x) => x.type === 'quote' && x.qid === f.qid)) out.push({ type: 'quote', qid: f.qid });
    } else out.push(f);
  });
  if (legado || orfao)
    console.warn(
      'MeMotiva · favoritos: ' +
        legado +
        ' entrada(s) antigas por índice e ' +
        orfao +
        ' de frase removida descartadas.'
    );
  return out;
}

async function toggleFavoriteQuote(idx) {
  const qid = favQuoteQid(idx);
  if (qid == null) return;
  const pos = state.favorites.findIndex((f) => f.type === 'quote' && f.qid === qid);
  if (pos > -1) {
    state.favorites.splice(pos, 1);
    toast('Removida dos favoritos');
  } else {
    state.favorites.push({ type: 'quote', qid });
    toast('Salva nos favoritos');
  }
  await saveFavorites();
  document.querySelectorAll(`[data-fav-quote="${idx}"]`).forEach((btn) => {
    const active = isFavQuote(idx);
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
    btn.querySelector('svg').setAttribute('fill', active ? 'currentColor' : 'none');
  });
}
async function saveFavorites() {
  if (!state.currentUser) return;
  await dbSet('favorites:' + state.currentUser.email, state.favorites, false);
}

/* ================================================================
   HERO — pilha de cartões flutuantes
   ================================================================ */
function renderHeroStack() {
  const el = document.getElementById('heroCardStack');
  const picks = [QUOTES[2], QUOTES[9], QUOTES[21]].filter(Boolean);
  el.innerHTML = picks
    .map(
      (q) => `
    <div class="float-card">
      <div class="quote-card" style="padding:20px 18px 16px;">
        <span class="quote-card-tape"></span>
        <p class="quote-card-text" style="font-size:15.5px; min-height:auto;">&ldquo;${escapeHtml(q.text.length > 90 ? q.text.slice(0, 88) + '…' : q.text)}&rdquo;</p>
        <div class="quote-card-foot" style="margin-top:12px;">
          <span class="author-name" style="font-size:16px;">— ${escapeHtml(q.author)}</span>
        </div>
      </div>
    </div>`
    )
    .join('');
}

/* ================================================================
   FRASE DO DIA
   ================================================================ */
function renderQuoteOfDay() {
  const dayIdx = Math.floor(Date.now() / 86400000) % QUOTES.length;
  const q = QUOTES[dayIdx];
  const el = document.getElementById('quoteOfDaySlot');
  el.innerHTML = `
    <div class="eyebrow">frase do dia</div>
    <div style="max-width:420px;">${quoteCardHTML(q, dayIdx)}</div>`;
  attachQuoteCardEvents(el);
}

/* ================================================================
   GERADOR DE FRASES ALEATÓRIAS
   ================================================================ */
function generateRandomQuote() {
  let idx;
  do {
    idx = Math.floor(Math.random() * QUOTES.length);
  } while (idx === state.lastRandomIdx && QUOTES.length > 1);
  state.lastRandomIdx = idx;
  const q = QUOTES[idx];
  const p = document.getElementById('generatorQuote');
  p.classList.remove('spin');
  void p.offsetWidth;
  p.classList.add('spin');
  p.innerHTML = `&ldquo;${escapeHtml(q.text)}&rdquo;<small>— ${escapeHtml(q.author)}</small>`;
}
document.getElementById('generateBtn').addEventListener('click', generateRandomQuote);

/* ================================================================
   CATEGORIAS — grid
   ================================================================ */

/* ================================================================
   EXPLORAR — busca (autor, palavra, trecho ou frase) + filtro por categoria + grid
   ================================================================ */

/* ---- carrossel dos campos: setas (desktop) + arraste lateral (celular) ---- */
function chipRowEl() {
  return document.getElementById('categoryChips');
}
function updateChipArrows() {
  const row = chipRowEl();
  const prev = document.getElementById('chipPrev');
  const next = document.getElementById('chipNext');
  if (!row || !prev || !next) return;
  const max = row.scrollWidth - row.clientWidth - 2;
  prev.disabled = row.scrollLeft <= 2;
  next.disabled = row.scrollLeft >= max;
}
function scrollChips(dir) {
  const row = chipRowEl();
  if (!row) return;
  const step = Math.max(180, Math.round(row.clientWidth * 0.7));
  row.scrollBy({ left: dir * step, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
function centerActiveChip(instant = false) {
  const row = chipRowEl();
  if (!row) return;
  const active = row.querySelector('.chip.active');
  if (!active) return;
  const target = active.offsetLeft - row.clientWidth / 2 + active.offsetWidth / 2;
  const left = Math.max(0, Math.min(target, row.scrollWidth - row.clientWidth));
  if (instant || prefersReducedMotion()) row.scrollLeft = left;
  else row.scrollTo({ left, behavior: 'smooth' });
}
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
document.getElementById('chipPrev').addEventListener('click', () => scrollChips(-1));
document.getElementById('chipNext').addEventListener('click', () => scrollChips(1));
document.getElementById('categoryChips').addEventListener('scroll', updateChipArrows, { passive: true });
window.addEventListener('resize', updateChipArrows);

/* ---- frase aleatória do campo selecionado ---- */
function clearRandomSlot() {
  const slot = document.getElementById('randomSlot');
  if (!slot) return;
  slot.innerHTML = '';
  slot.classList.add('hidden');
}
function drawRandomFromField() {
  const pool = getFilteredQuotes(); // já respeita o campo selecionado
  const slot = document.getElementById('randomSlot');
  if (pool.length === 0) {
    clearRandomSlot();
    toast('Nenhuma frase para sortear aqui');
    return;
  }
  let pick = pool[0];
  if (pool.length > 1) {
    do {
      pick = pool[Math.floor(Math.random() * pool.length)];
    } while (pick.idx === state.lastFieldRandomIdx);
  }
  state.lastFieldRandomIdx = pick.idx;
  const catName =
    state.exploreFilter.cat === 'all' ? 'todos os temas' : catById(state.exploreFilter.cat)?.name || '';
  slot.innerHTML = `
    <div class="random-slot-head">
      <span class="random-slot-label">Frase sorteada · ${escapeHtml(catName)}</span>
      <button class="random-slot-close" id="randomSlotClose" type="button" aria-label="Fechar frase sorteada">✕</button>
    </div>
    <div class="random-slot-card">${quoteCardHTML(pick.quote, pick.idx)}</div>`;
  slot.classList.remove('hidden');
  attachQuoteCardEvents(slot);
  document.getElementById('randomSlotClose').addEventListener('click', clearRandomSlot);
}
document.getElementById('randomFieldBtn').addEventListener('click', drawRandomFromField);

/* Entrega dos cartões em lotes conforme a rolagem.
   Mesmos cartões, mesma ordem e mesmo HTML de antes — só não montamos
   milhares de nós de uma vez, o que travaria o celular. A contagem
   exibida continua sendo a do total de resultados. */
// Lotes menores no celular (menos trabalho por quadro), maiores no desktop.
function exploreBatchSize() {
  const w = window.innerWidth || 1024;
  return w < 600 ? 18 : w < 1000 ? 30 : 48;
}
let exploreQueue = [];
let exploreFilling = false;

/* Ao trocar de tema, a lista encurta e o usuário pode ficar "pendurado"
   num trecho vazio da página. Reancoramos a rolagem no topo dos resultados. */
function keepResultsInView() {
  const bar = document.querySelector('#view-explorar .results-bar');
  if (!bar) return;
  const top = bar.getBoundingClientRect().top + window.scrollY - 96;
  if (window.scrollY > top) {
    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(0, top), behavior: suave ? 'smooth' : 'auto' });
  }
}

function appendExploreBatch() {
  const grid = document.getElementById('exploreGrid');
  if (!grid || !exploreQueue.length) return;
  const batch = exploreQueue.splice(0, exploreBatchSize());
  const holder = document.createElement('div');
  holder.innerHTML = batch.map(({ quote, idx }) => quoteCardHTML(quote, idx)).join('');
  // uma única inserção no DOM por lote (evita recalcular layout cartão a cartão)
  const frag = document.createDocumentFragment();
  const novos = [];
  while (holder.firstElementChild) {
    const card = holder.firstElementChild;
    novos.push(card);
    frag.appendChild(card);
  }
  grid.appendChild(frag);
  novos.forEach(attachQuoteCardEvents);
}
// Enche enquanto o fim da lista estiver perto da tela; para quando sai de vista.
function fillExploreWhileVisible() {
  if (exploreFilling || !exploreQueue.length) return;
  const view = document.getElementById('view-explorar');
  if (!view || view.classList.contains('hidden')) return;
  const sentinel = document.getElementById('exploreSentinel');
  if (!sentinel) return;
  const r = sentinel.getBoundingClientRect();
  if (!r.height && !r.top && !r.bottom) return; // sem layout (view oculta)
  if (r.top > window.innerHeight + 900) return; // ainda longe do fim
  exploreFilling = true;
  appendExploreBatch();
  requestAnimationFrame(() => {
    exploreFilling = false;
    fillExploreWhileVisible();
  });
}
let exploreTick = false;
function onExploreScroll() {
  if (exploreTick) return;
  exploreTick = true;
  requestAnimationFrame(() => {
    exploreTick = false;
    fillExploreWhileVisible();
  });
}
window.addEventListener('scroll', onExploreScroll, { passive: true });
window.addEventListener('resize', onExploreScroll, { passive: true });
window.addEventListener('orientationchange', onExploreScroll, { passive: true });

function renderExploreResults() {
  const results = getFilteredQuotes();
  const grid = document.getElementById('exploreGrid');
  const empty = document.getElementById('exploreEmpty');
  const count = document.getElementById('resultsCount');
  const { q } = state.exploreFilter;
  count.textContent = q.trim()
    ? `${results.length} resultado${results.length === 1 ? '' : 's'} para "${q.trim()}"`
    : `${results.length} frase${results.length === 1 ? '' : 's'}`;
  grid.innerHTML = '';
  exploreQueue = results;
  if (results.length === 0) {
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    appendExploreBatch();
    requestAnimationFrame(fillExploreWhileVisible);
  }
}

let searchDebounce;
document.getElementById('authorSearch').addEventListener('input', (e) => {
  state.exploreFilter.q = e.target.value;
  document.getElementById('clearSearch').classList.toggle('hidden', !e.target.value);
  clearRandomSlot();
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(renderExploreResults, 150);
});
document.getElementById('clearSearch').addEventListener('click', () => {
  state.exploreFilter.q = '';
  document.getElementById('authorSearch').value = '';
  document.getElementById('clearSearch').classList.add('hidden');
  clearRandomSlot();
  renderExploreResults();
});
