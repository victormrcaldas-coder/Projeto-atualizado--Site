/* MeMotiva — app/12-modais-descubra-biografias.js
   Modais, Explorar por atuação, Descubra, Biografias e navegação da Fase 3.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   MODAIS DE EXPANSÃO (§10)
   Trava a rolagem do fundo preservando a posição — sem o pulo para
   o topo que o overflow:hidden puro costuma causar.
   ================================================================ */
let _scrollLockY = 0,
  _openModals = 0;
function lockScroll() {
  if (_openModals++ > 0) return;
  _scrollLockY = window.scrollY;
  document.body.style.top = `-${_scrollLockY}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.classList.add('modal-open');
}
function unlockScroll() {
  if (--_openModals > 0) return;
  _openModals = 0;
  document.body.classList.remove('modal-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, _scrollLockY);
}

function closeQuoteModal() {
  const el = document.getElementById('quoteExpand');
  if (!el.classList.contains('show')) return;
  el.classList.remove('show');
  el.setAttribute('aria-hidden', 'true');
  unlockScroll();
  /* o foco volta para onde estava antes de abrir (Etapa 5 do redesign) */
  const origem = el._origem;
  el._origem = null;
  if (origem && origem.isConnected && origem.offsetParent) origem.focus({ preventScroll: true });
}

/* ---- lightbox só da fotografia, independente do cartão (§10.1) ---- */
function openPhotoModal(author) {
  const el = document.getElementById('photoExpand');
  if (!el.classList.contains('show')) el._origem = document.activeElement;
  const box = document.getElementById('photoExpandBox');
  const col = colorForName(author);
  const bio = bioIdFor(author);
  const st = bio ? STORIES.find((s) => s.id === bio) : null;
  box.innerHTML = `
    <button class="expand-close" id="photoExpandClose" aria-label="Fechar fotografia">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    ${photoImgHTML(author, 'full', 900).replace('style="object-position', 'style="object-fit:contain; object-position')}
    <div class="avatar-fallback" style="display:none; background:${col};">${initials(author)}</div>
    <div class="photo-caption">
      <strong>${escapeHtml(author)}</strong>
      <span>${st && st.role ? escapeHtml(st.role) + ' · ' : ''}Wikimedia Commons</span>
    </div>`;
  el.classList.add('show');
  el.setAttribute('aria-hidden', 'false');
  lockScroll();
  document.getElementById('photoExpandClose').addEventListener('click', closePhotoModal);
  requestAnimationFrame(() => document.getElementById('photoExpandClose').focus());
}
function closePhotoModal() {
  const el = document.getElementById('photoExpand');
  if (!el.classList.contains('show')) return;
  el.classList.remove('show');
  el.setAttribute('aria-hidden', 'true');
  unlockScroll();
  /* o foco volta para onde estava antes de abrir (Etapa 5 do redesign) */
  const origem = el._origem;
  el._origem = null;
  if (origem && origem.isConnected && origem.offsetParent) origem.focus({ preventScroll: true });
}

/* ================================================================
   CARTÃO DE FRASE — agora clicável (mantendo coração e foto)
   ================================================================ */
function quoteCardHTML(q, idx) {
  const isFav = isFavQuote(idx);
  const catName = catById(q.cat)?.name || 'Motivação';
  /* Etapa 5 do redesign: sem rotação nem fita; a obra embaixo da frase; ditado popular sem retrato */
  const ditado = /^ditado/i.test(q.author || '');
  return `
  <article class="quote-card reveal in-view" data-quote-idx="${idx}"
           role="button" tabindex="0" aria-label="Ampliar frase de ${escapeHtml(q.author)}">
    <span class="quote-card-cat">${escapeHtml(catName)}</span>
    <p class="quote-card-text"${q.text.length > 140 ? ' data-comprimento="longa"' : ''}>&ldquo;${escapeHtml(q.text)}&rdquo;</p>
    ${q.src ? `<p class="quote-card-src">${escapeHtml(q.src)}</p>` : ''}
    <div class="quote-card-foot">
      <div class="quote-author">
        ${
          ditado
            ? ''
            : `<div class="avatar-frame" data-open-photo="${escapeHtml(q.author)}" role="button" tabindex="0" aria-label="Ampliar fotografia de ${escapeHtml(q.author)}">
          ${photoImgHTML(q.author, 'card', 200)}
          <div class="avatar-fallback" style="display:none;">${initials(q.author)}</div>
        </div>`
        }
        <span class="author-name" title="${escapeHtml(q.author)}">${escapeHtml(q.author)}</span>
      </div>
      <button class="heart-btn ${isFav ? 'active' : ''}" data-fav-quote="${idx}" aria-label="Salvar frase nos favoritos" aria-pressed="${isFav}">
        <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 21s-7.5-4.7-10.2-9.1C.2 9 1 5.4 4.2 4.1 6.7 3 9.3 4 12 7c2.7-3 5.3-4 7.8-2.9 3.2 1.3 4 4.9 2.4 7.8C19.5 16.3 12 21 12 21Z"/></svg>
      </button>
    </div>
  </article>`;
}

/* ================================================================
   EXPLORAR — filtro por atuação (§9)
   Só aparece com "Todos os temas" ativo; some em qualquer campo.
   ================================================================ */
state.exploreFilter.profile = 'all';

function openProfilePanel() {
  document.getElementById('profilePanel').classList.add('open');
  document.getElementById('profileFilterBtn').setAttribute('aria-expanded', 'true');
}
function closeProfilePanel() {
  const p = document.getElementById('profilePanel');
  if (p) {
    p.classList.remove('open');
    document.getElementById('profileFilterBtn').setAttribute('aria-expanded', 'false');
  }
}
function toggleProfilePanel() {
  const p = document.getElementById('profilePanel');
  p.classList.contains('open') ? closeProfilePanel() : openProfilePanel();
}

/* ================================================================
   DESCUBRA (§1) — cartões que levam à biografia completa
   ================================================================ */
const DISCOVER_BATCH = 12;
let discoverQueue = [],
  discoverFilter = 'all';

function discoverList() {
  return STORIES.filter((s) => discoverFilter === 'all' || (s.profiles || []).includes(discoverFilter));
}
function discoverCardHTML(s) {
  const tags = (s.profiles || [])
    .slice(0, 2)
    .map((p) => profileById(p))
    .filter(Boolean);
  return `
  <article class="discover-card reveal" data-discover="${s.id}" role="button" tabindex="0"
           aria-label="Ver biografia de ${escapeHtml(s.author)}">
    <div class="discover-photo">
      ${photoImgHTML(s.author, 'card', 420)}
      <div class="avatar-fallback" style="display:none; background:${colorForName(s.author)};">${initials(s.author)}</div>
      <h3 class="discover-name">${escapeHtml(s.author)}</h3>
    </div>
    <div class="discover-body">
      ${s.role ? `<span class="discover-role">${escapeHtml(s.role)}</span>` : ''}
      <p class="discover-why">${escapeHtml(s.why || s.excerpt)}</p>
      ${tags.length ? `<div class="discover-tags">${tags.map((t) => `<span class="discover-tag">${escapeHtml(t.name)}</span>`).join('')}</div>` : ''}
      <span class="discover-cta">Ler a história
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>
      </span>
    </div>
  </article>`;
}
function appendDiscoverBatch() {
  const grid = document.getElementById('discoverGrid');
  if (!grid || !discoverQueue.length) return;
  const batch = discoverQueue.splice(0, DISCOVER_BATCH);
  const holder = document.createElement('div');
  const frag = document.createDocumentFragment();
  batch.forEach((s) => {
    holder.innerHTML = discoverCardHTML(s);
    frag.appendChild(holder.firstElementChild);
  });
  grid.appendChild(frag);
  wireDiscoverCards(grid);
  requestAnimationFrame(observeReveals);
}
function wireDiscoverCards(scope) {
  scope.querySelectorAll('[data-discover]:not([data-wired])').forEach((card) => {
    card.dataset.wired = '1';
    const open = () => openBiography(card.dataset.discover);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
}
function renderDiscoverFilters() {
  const row = document.getElementById('discoverFilterRow');
  if (!row) return;
  const avail = PROFILES.filter((p) => STORIES.some((s) => (s.profiles || []).includes(p.id)));
  row.innerHTML = [{ id: 'all', name: 'Todas as pessoas' }, ...avail]
    .map((p) => {
      const n =
        p.id === 'all' ? STORIES.length : STORIES.filter((s) => (s.profiles || []).includes(p.id)).length;
      return `<button class="chip ${discoverFilter === p.id ? 'active' : ''}" data-discover-filter="${p.id}">${escapeHtml(p.name)} <span style="opacity:.55">${n}</span></button>`;
    })
    .join('');
  row.querySelectorAll('[data-discover-filter]').forEach((b) => {
    b.addEventListener('click', () => {
      discoverFilter = b.dataset.discoverFilter;
      renderDiscover();
    });
  });
}
function renderDiscover() {
  const grid = document.getElementById('discoverGrid');
  if (!grid) return;
  renderDiscoverFilters();
  const list = discoverList();
  grid.innerHTML = '';
  discoverQueue = list.slice();
  const cnt = document.getElementById('discoverCount');
  if (cnt) cnt.textContent = list.length === 1 ? '1 pessoa' : `${list.length} pessoas para conhecer`;
  appendDiscoverBatch();
  fillDiscoverWhileVisible();
}
function fillDiscoverWhileVisible() {
  const view = document.getElementById('view-descubra');
  if (!view || view.classList.contains('hidden')) return;
  const sentinel = document.getElementById('discoverSentinel');
  if (!sentinel || !discoverQueue.length) return;
  const r = sentinel.getBoundingClientRect();
  if (r.top < window.innerHeight + 400) {
    appendDiscoverBatch();
    requestAnimationFrame(fillDiscoverWhileVisible);
  }
}

/* ================================================================
   BIOGRAFIAS (§6 e §7) — filtros, contagem e carregamento progressivo
   ================================================================ */
const BIO_BATCH = 6;
let bioQueue = [],
  bioFilter = { profile: 'all', origin: 'all' };

function bioList() {
  return STORIES.filter((s) => {
    if (bioFilter.profile !== 'all' && !(s.profiles || []).includes(bioFilter.profile)) return false;
    if (bioFilter.origin !== 'all' && s.origin !== bioFilter.origin) return false;
    return true;
  });
}

/* mantém a assinatura antiga usada na prévia da Início */
function renderStoriesGrid(containerId, list) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = (list || STORIES).map((s) => storyCardHTML(s)).join('');
  wireStoryCards(el);
  requestAnimationFrame(observeReveals);
}
function appendBioBatch() {
  const grid = document.getElementById('storiesGrid');
  if (!grid || !bioQueue.length) return;
  const batch = bioQueue.splice(0, BIO_BATCH);
  const holder = document.createElement('div');
  const frag = document.createDocumentFragment();
  batch.forEach((s) => {
    holder.innerHTML = storyCardHTML(s);
    frag.appendChild(holder.firstElementChild);
  });
  grid.appendChild(frag);
  wireStoryCards(grid);
  requestAnimationFrame(observeReveals);
}
function fillBioWhileVisible() {
  const view = document.getElementById('view-historias');
  if (!view || view.classList.contains('hidden')) return;
  const sentinel = document.getElementById('bioSentinel');
  if (!sentinel || !bioQueue.length) return;
  const r = sentinel.getBoundingClientRect();
  if (r.top < window.innerHeight + 400) {
    appendBioBatch();
    requestAnimationFrame(fillBioWhileVisible);
  }
}
function renderBioFilters() {
  const pRow = document.getElementById('bioProfileRow');
  const oRow = document.getElementById('bioOriginRow');
  if (!pRow || !oRow) return;
  const availP = PROFILES.filter((p) => STORIES.some((s) => (s.profiles || []).includes(p.id)));
  pRow.innerHTML = [{ id: 'all', name: 'Todas' }, ...availP]
    .map(
      (p) =>
        `<button class="chip ${bioFilter.profile === p.id ? 'active' : ''}" data-bio-profile="${p.id}">${escapeHtml(p.name)}</button>`
    )
    .join('');
  /* origem só existe se houver material suficiente (§6) */
  const availO = ORIGINS.filter((o) => STORIES.filter((s) => s.origin === o.id).length >= 2);
  oRow.parentElement.classList.toggle('hidden', availO.length < 2);
  oRow.innerHTML = [{ id: 'all', name: 'Todas' }, ...availO]
    .map(
      (o) =>
        `<button class="chip ${bioFilter.origin === o.id ? 'active' : ''}" data-bio-origin="${o.id}">${escapeHtml(o.name)}</button>`
    )
    .join('');
  pRow.querySelectorAll('[data-bio-profile]').forEach((b) =>
    b.addEventListener('click', () => {
      bioFilter.profile = b.dataset.bioProfile;
      renderBiographies();
    })
  );
  oRow.querySelectorAll('[data-bio-origin]').forEach((b) =>
    b.addEventListener('click', () => {
      bioFilter.origin = b.dataset.bioOrigin;
      renderBiographies();
    })
  );
  updateFilterArrows();
}
function renderBiographies() {
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;
  renderBioFilters();
  const list = bioList();
  grid.innerHTML = '';
  bioQueue = list.slice();
  const cnt = document.getElementById('bioCount');
  if (cnt) cnt.textContent = list.length === 1 ? '1 biografia' : `${list.length} biografias`;
  const empty = document.getElementById('bioEmpty');
  if (empty) empty.classList.toggle('hidden', list.length > 0);
  appendBioBatch();
  fillBioWhileVisible();
}

/* ---- setas das faixas de filtro no desktop (mesma lógica dos chips) ---- */
function updateFilterArrows() {
  document.querySelectorAll('.filter-bar').forEach((bar) => {
    const row = bar.querySelector('.filter-row');
    const prev = bar.querySelector('[data-farrow="prev"]');
    const next = bar.querySelector('[data-farrow="next"]');
    if (!row || !prev || !next) return;
    const max = row.scrollWidth - row.clientWidth - 2;
    const overflow = max > 0;
    prev.classList.toggle('hidden', !overflow || row.scrollLeft <= 2);
    next.classList.toggle('hidden', !overflow || row.scrollLeft >= max);
  });
}
function wireFilterArrows() {
  document.querySelectorAll('.filter-bar').forEach((bar) => {
    const row = bar.querySelector('.filter-row');
    if (!row || row.dataset.wired) return;
    row.dataset.wired = '1';
    bar.querySelectorAll('[data-farrow]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const step = Math.max(180, Math.round(row.clientWidth * 0.7));
        row.scrollBy({
          left: btn.dataset.farrow === 'next' ? step : -step,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
      });
    });
    row.addEventListener('scroll', () => requestAnimationFrame(updateFilterArrows), { passive: true });
    /* roda do mouse rola a faixa na horizontal, sem sequestrar a página */
    row.addEventListener(
      'wheel',
      (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        const max = row.scrollWidth - row.clientWidth;
        if (max <= 0) return;
        const atStart = row.scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = row.scrollLeft >= max - 1 && e.deltaY > 0;
        if (atStart || atEnd) return;
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      },
      { passive: false }
    );
  });
}

/* ================================================================
   NAVEGAÇÃO — inclui a nova view Descubra
   ================================================================ */

/* ================================================================
   LIGAÇÕES FINAIS
   ================================================================ */
function initFase2() {
  /* filtro por atuação */
  const pfBtn = document.getElementById('profileFilterBtn');
  if (pfBtn)
    pfBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleProfilePanel();
    });
  document.addEventListener('click', (e) => {
    const wrap = document.getElementById('profileFilterWrap');
    if (wrap && !wrap.contains(e.target)) closeProfilePanel();
  });
  const pfClear = document.getElementById('profileClear');
  if (pfClear)
    pfClear.addEventListener('click', () => {
      state.exploreFilter.profile = 'all';
      closeProfilePanel();
      renderProfileFilter();
      renderExploreResults();
    });

  /* fechar modais: X, clique no fundo, Esc */
  ['quoteExpand', 'photoExpand'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        id === 'quoteExpand' ? closeQuoteModal() : closePhotoModal();
      }
    });
  });
  /* Tab não sai da janela aberta: o foco circula dentro dela (Etapa 5 do redesign) */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const aberta = ['photoExpand', 'quoteExpand']
      .map((id) => document.getElementById(id))
      .find((el) => el && el.classList.contains('show'));
    if (!aberta) return;
    const focaveis = [...aberta.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')].filter(
      (x) => x.offsetParent
    );
    if (!focaveis.length) return;
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (!aberta.contains(document.activeElement)) {
      e.preventDefault();
      primeiro.focus();
    } else if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    /* fecha o de cima primeiro: foto sobre frase */
    if (document.getElementById('photoExpand').classList.contains('show')) return closePhotoModal();
    if (document.getElementById('quoteExpand').classList.contains('show')) return closeQuoteModal();
    closeProfilePanel();
  });

  /* rolagem infinita das novas áreas */
  let tick = false;
  const onScroll = () => {
    if (tick) return;
    tick = true;
    requestAnimationFrame(() => {
      tick = false;
      if (state.view === 'descubra') fillDiscoverWhileVisible();
      if (state.view === 'historias') fillBioWhileVisible();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener(
    'resize',
    () => {
      updateFilterArrows();
      onScroll();
    },
    { passive: true }
  );

  wireFilterArrows();
  updateFilterArrows();
}
