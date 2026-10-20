/* MeMotiva — app/20-relatos-comunidade-perfil-narracao.js
   Relatos (comunidade e pessoais), perfil, cartão expandido, narração e carga da Fase 5 (window.__fase5Boot).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   RENDERIZAÇÃO DOS RELATOS (comunidade e pessoais)
   ================================================================ */
function relatoFundoCSS(p) {
  const f = fundoPorRef(p.fundo);
  if (f) return f.css;
  /* Etapa 8 do redesign: os mesmos ids de cor, com os tons da paleta (tokens --relato-*) */
  const c = STYLE_COLORS.find((x) => x.id === p.color) || STYLE_COLORS[0];
  return `var(--relato-${c.id})`;
}
function relatoTinta(p) {
  const f = fundoPorRef(p.fundo);
  if (f) return f.ink;
  return 'var(--relato-tinta)';
}
/* <img>/<video> de uma mídia guardada; src e filtro passam pelas checagens de nucleo/01 */
function midiaTag(m) {
  const src = urlMidiaSegura(m && m.src);
  if (!src) return '';
  const filtro = filtroSeguro(m.filtro);
  return m.tipo === 'video'
    ? `<video src="${src}" muted loop playsinline autoplay style="filter:${filtro}"></video>`
    : `<img src="${src}" alt="" style="filter:${filtro}">`;
}
function midiaHTML(p, compartilhado) {
  if (p.midiaSessao) {
    const m = p.midiaSessao;
    return `<div class="post-media">${midiaTag(m)}</div><div class="post-media-scrim"></div>`;
  }
  if (p.midia)
    return `<div class="post-media" data-midia="${escapeHtml(p.midia)}" data-shared="${compartilhado ? 1 : 0}"></div><div class="post-media-scrim"></div>`;
  return '';
}
async function hidratarMidias(scope) {
  const alvos = scope.querySelectorAll('[data-midia]:not([data-carregada])');
  for (const el of alvos) {
    el.dataset.carregada = '1';
    const m = await carregarMidia(el.dataset.midia, el.dataset.shared === '1');
    if (!m) continue;
    el.innerHTML = midiaTag(m);
  }
}
function quoteRefHTML(p) {
  if (!p.quote) return '';
  return `<div class="post-quote-ref">
    <p>&ldquo;${escapeHtml(p.quote.text)}&rdquo;</p>
    <span>${escapeHtml(p.quote.author)}</span>
  </div>`;
}

/* ---- cartão da comunidade (substitui a versão anterior) ---- */
function postCardHTML(post) {
  const font = STYLE_FONTS.find((f) => f.id === post.font) || STYLE_FONTS[0];
  const liked = state.currentUser && (post.likes || []).includes(state.currentUser.email);
  const saved = state.favorites.some((f) => f.type === 'post' && f.id === post.id);
  const isMe = state.currentUser && post.authorEmail === state.currentUser.email;
  const isFollowing = state.following.includes(post.authorUsername);
  const temMedia = !!(post.midia || post.midiaSessao);
  return `
  <article class="post-card reveal in-view" data-post-id="${post.id}">
    <div class="post-head">
      <div class="post-avatar" style="background:${colorForName(post.authorUsername)}">${initials(post.authorUsername)}</div>
      <div class="post-meta">
        <div class="post-username">@${escapeHtml(post.authorUsername)}</div>
        <div class="post-time">${timeAgo(post.createdAt)}</div>
      </div>
      ${
        !isMe
          ? `<button class="btn btn-sm ${isFollowing ? 'btn-ghost' : 'btn-outline'} follow-btn" data-follow="${escapeHtml(post.authorUsername)}">${isFollowing ? 'Seguindo' : 'Seguir'}</button>`
          : `<div class="post-own-tools">
             <button data-arq="${post.id}">${post.arq ? 'Desarquivar' : 'Arquivar'}</button>
             <button data-del="${post.id}">Excluir</button>
           </div>`
      }
    </div>
    <div class="post-content ${temMedia ? 'with-media' : ''} ${post.musica ? 'has-music' : ''}" data-style="${escapeHtml(post.color || 'coral')}"
         style="background:${relatoFundoCSS(post)}; background-size:cover; color:${relatoTinta(post)};">
      ${midiaHTML(post, true)}
      ${volumeHTML(post)}
      <div style="position:relative; z-index:2; width:100%;">
        ${quoteRefHTML(post)}
        ${post.text ? `<p class="post-text" style="font-family:${font.family}; color:inherit;">${escapeHtml(post.text)}</p>` : ''}
      </div>
    </div>
    <div class="post-actions">
      <button class="action-btn ${liked ? 'liked' : ''}" data-like="${post.id}">
        <svg viewBox="0 0 24 24" fill="${liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round">${F5_ICONS.coracao}</svg>
        ${(post.likes || []).length || ''}
      </button>
      <button class="action-btn" data-comment-toggle="${post.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">${F5_ICONS.balao}</svg>
        ${(post.comments || []).length || ''}
      </button>
      <button class="action-btn" data-share="${post.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.6 6.8-3.8M8.6 13.4l6.8 3.8"/></svg>
      </button>
      <button class="action-btn ${saved ? 'saved' : ''}" data-save-post="${post.id}">
        <svg viewBox="0 0 24 24" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round">${F5_ICONS.salvar}</svg>
      </button>
      <button class="action-btn report-btn action-spacer" data-report="${post.id}" aria-label="Denunciar" title="Denunciar conteúdo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15V4l1.5-1 2 1.5h9L15 6l3-2v10l-2 1.5h-9L5.5 14 4 15Z"/><path d="M4 15v6"/></svg>
      </button>
    </div>
    <div class="comment-section hidden" id="comments-${post.id}">
      <div class="comment-list">
        ${
          (post.comments || [])
            .map(
              (c) => `<div class="comment">
            <div class="comment-avatar" style="background:${colorForName(c.username)}; display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:800;">${initials(c.username)}</div>
            <div><b>@${escapeHtml(c.username)}</b> <span style="color:var(--text-soft)">${escapeHtml(c.text)}</span></div>
          </div>`
            )
            .join('') || `<p style="font-size:13px;color:var(--text-faint);">Nenhum comentário ainda.</p>`
        }
      </div>
      ${
        state.currentUser
          ? `<div class="comment-input-row">
        <input type="text" class="comment-input" id="commentInput-${post.id}" placeholder="Escreva um comentário…" maxlength="220">
        <button class="btn-icon" data-comment-send="${post.id}" aria-label="Enviar comentário">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 20 18-8L3 4v6l13 2-13 2v6Z"/></svg>
        </button>
      </div>`
          : ''
      }
    </div>
  </article>`;
}

/* ---- eventos do feed (acrescenta som, arquivar e excluir) ----
   Guarda a versão anterior e a estende. Aqui não pode existir uma
   segunda declaração `function attachPostEvents`: como declarações
   de função sobem para o topo do escopo, a referência guardada
   apontaria para ela mesma e entraria em recursão infinita. */
const _attachPostEventsBase = attachPostEvents;
function attachPostEventsF5(container) {
  _attachPostEventsBase(container);
  container.querySelectorAll('[data-vol]:not([data-wired])').forEach((b) => {
    b.dataset.wired = '1';
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = b.dataset.vol;
      const p = state.communityPosts.find((x) => x.id === id) || state.myPhrases.find((x) => x.id === id);
      if (!p || !p.musica) return;
      if (Musica.estaTocando(p.musica.tipo === 'trilha' ? p.musica.id : p.musica.src)) {
        Musica.parar();
        marcarVolume(b, false);
        return;
      }
      document.querySelectorAll('.post-vol.on').forEach((x) => marcarVolume(x, false));
      const ok = Musica.tocarRef(p.musica, () => marcarVolume(b, false));
      if (ok) marcarVolume(b, true);
    });
  });
  container.querySelectorAll('[data-arq]:not([data-wired])').forEach((b) => {
    b.dataset.wired = '1';
    b.addEventListener('click', () => arquivarRelato(b.dataset.arq));
  });
  container.querySelectorAll('[data-del]:not([data-wired])').forEach((b) => {
    b.dataset.wired = '1';
    b.addEventListener('click', () => excluirRelato(b.dataset.del));
  });
  hidratarMidias(container);
}
attachPostEvents = attachPostEventsF5;

function marcarVolume(btn, ligado) {
  btn.classList.toggle('on', ligado);
  btn.innerHTML = f5svg(ligado ? 'som' : 'mudo', 18);
  btn.setAttribute('aria-label', ligado ? 'Desligar som do relato' : 'Ativar som do relato');
}

/* ---- arquivar / excluir / restaurar ---- */
async function arquivarRelato(id) {
  const p = state.communityPosts.find((x) => x.id === id);
  if (p) {
    p.arq = !p.arq;
    await saveCommunityPosts();
    toast(p.arq ? 'Relato arquivado' : 'Relato desarquivado');
  } else {
    const m = state.myPhrases.find((x) => x.id === id);
    if (!m) return;
    m.arq = !m.arq;
    await saveMyPhrases();
    toast(m.arq ? 'Relato arquivado' : 'Relato desarquivado');
  }
  atualizarTelas();
}
async function excluirRelato(id) {
  const p = state.communityPosts.find((x) => x.id === id);
  if (p) {
    p.del = true;
    p.arq = false;
    await saveCommunityPosts();
  } else {
    const m = state.myPhrases.find((x) => x.id === id);
    if (!m) return;
    m.del = true;
    m.arq = false;
    await saveMyPhrases();
  }
  toast('Movido para Apagados. Você pode restaurar no seu perfil.', 3400);
  atualizarTelas();
}
async function restaurarRelato(id) {
  const p = state.communityPosts.find((x) => x.id === id);
  if (p) {
    p.del = false;
    p.arq = false;
    await saveCommunityPosts();
  } else {
    const m = state.myPhrases.find((x) => x.id === id);
    if (!m) return;
    m.del = false;
    m.arq = false;
    await saveMyPhrases();
  }
  toast('Relato restaurado');
  atualizarTelas();
}
async function esvaziarLixeira() {
  const meu = state.currentUser ? state.currentUser.email : null;
  if (!meu) return;
  state.communityPosts = state.communityPosts.filter((p) => !(p.del && p.authorEmail === meu));
  state.myPhrases = state.myPhrases.filter((m) => !m.del);
  await saveCommunityPosts();
  await saveMyPhrases();
  toast('Lixeira esvaziada');
  atualizarTelas();
}
function atualizarTelas() {
  if (state.view === 'comunidade') renderCommunityView();
  if (state.view === 'perfil') renderPerfil();
  if (state.view === 'home') renderCommunityPreview();
  if (sheetAberta) renderSheet(sheetAberta);
}

/* ================================================================
   COMUNIDADE — só os relatos das outras pessoas
   O que era escrito aqui foi migrado para o cabeçalho "Escrever".
   ================================================================ */
state.feedUser = null;
function postsVisiveis() {
  return state.communityPosts.filter((p) => !p.hidden && !p.del && !p.arq);
}
function meusPosts() {
  if (!state.currentUser) return [];
  return state.communityPosts.filter((p) => p.authorEmail === state.currentUser.email && !p.del && !p.arq);
}
function renderCommunityView() {
  const slot = document.getElementById('composerSlot');
  if (slot) {
    slot.innerHTML = `
      <div class="com-cta">
        ${f5svg('lapis', 22)}
        <p>Este espaço mostra os relatos das outras pessoas. Para escrever o seu, vá em <b>Escrever</b>.</p>
        <button class="btn btn-coral btn-sm" id="comIrEscrever">Escrever um relato</button>
      </div>`;
    const b = document.getElementById('comIrEscrever');
    if (b) b.addEventListener('click', () => navigateTo('escrever'));
  }

  /* filtros */
  const chips = document.getElementById('feedFilterChips');
  if (chips && !chips.dataset.f5) {
    chips.dataset.f5 = '1';
    chips.innerHTML = `
      <button class="chip ${state.feedFilter === 'recentes' ? 'active' : ''}" data-feed-filter="recentes">Recentes</button>
      <button class="chip ${state.feedFilter === 'seguindo' ? 'active' : ''}" data-feed-filter="seguindo">Seguindo</button>`;
    chips.querySelectorAll('.chip').forEach((c) =>
      c.addEventListener('click', () => {
        state.feedFilter = c.dataset.feedFilter;
        state.feedUser = null;
        chips.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', x === c));
        if (state.feedFilter === 'seguindo')
          requireAuth(renderCommunityView, 'Crie sua conta para ver quem você segue.');
        else renderCommunityView();
      })
    );
  }

  let posts = postsVisiveis();
  /* a comunidade mostra os relatos das outras pessoas */
  if (state.currentUser) posts = posts.filter((p) => p.authorEmail !== state.currentUser.email);
  if (state.feedUser) posts = posts.filter((p) => p.authorUsername === state.feedUser);
  else if (state.feedFilter === 'seguindo')
    posts = posts.filter((p) => state.following.includes(p.authorUsername));

  const feedEl = document.getElementById('communityFeed');
  const emptyEl = document.getElementById('feedEmpty');
  if (!feedEl) return;

  const cabecalhoUsuario = state.feedUser
    ? `<div class="com-cta" style="border-style:solid;">
         ${f5svg('pessoa', 20)}
         <p>Mostrando os relatos de <b>@${escapeHtml(state.feedUser)}</b>.</p>
         <button class="btn btn-outline btn-sm" id="comLimparUser">Ver todos</button>
       </div>`
    : '';

  if (posts.length === 0) {
    feedEl.innerHTML = cabecalhoUsuario;
    if (emptyEl) emptyEl.classList.remove('hidden');
  } else {
    if (emptyEl) emptyEl.classList.add('hidden');
    feedEl.innerHTML = cabecalhoUsuario + posts.map(postCardHTML).join('');
    attachPostEvents(feedEl);
  }
  const lu = document.getElementById('comLimparUser');
  if (lu)
    lu.addEventListener('click', () => {
      state.feedUser = null;
      renderCommunityView();
    });

  montarDock();
}

function renderCommunityPreview() {
  const el = document.getElementById('communityPreview');
  if (!el) return;
  const posts = postsVisiveis().slice(0, 2);
  el.innerHTML = posts.map(postCardHTML).join('');
  attachPostEvents(el);
}

/* ---- barra fixa: Publicados e Seguindo (sempre na tela) ---- */
function montarDock() {
  const view = document.getElementById('view-comunidade');
  if (!view) return;
  const wrap = view.querySelector('.wrap');
  let dock = document.getElementById('comDock');
  if (!dock) {
    dock = document.createElement('div');
    dock.className = 'com-dock';
    dock.id = 'comDock';
    wrap.appendChild(dock);
  }
  const nPub = meusPosts().length;
  const nSeg = state.following.length;
  dock.innerHTML = `
    <button data-sheet="publicados">${f5svg('publicado', 17)} Publicados ${nPub ? `<span class="badge">${nPub}</span>` : ''}</button>
    <button data-sheet="seguindo">${f5svg('pessoas', 17)} Seguindo ${nSeg ? `<span class="badge">${nSeg}</span>` : ''}</button>`;
  dock
    .querySelectorAll('[data-sheet]')
    .forEach((b) => b.addEventListener('click', () => abrirSheet(b.dataset.sheet)));
}

/* ---- painéis deslizantes ---- */
let sheetAberta = null;
function abrirSheet(qual) {
  sheetAberta = qual;
  let ov = document.getElementById('sheetOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'sheet-overlay';
    ov.id = 'sheetOverlay';
    ov.innerHTML = `<div class="sheet" id="sheetBox"></div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', (e) => {
      if (e.target === ov) fecharSheet();
    });
  }
  ov.classList.add('show');
  lockScroll();
  renderSheet(qual);
}
function fecharSheet() {
  const ov = document.getElementById('sheetOverlay');
  if (ov) ov.classList.remove('show');
  sheetAberta = null;
  unlockScroll();
  montarDock();
}
function renderSheet(qual) {
  const box = document.getElementById('sheetBox');
  if (!box) return;
  const titulo = qual === 'publicados' ? 'Publicados' : 'Seguindo';
  let corpo = '';

  if (!state.currentUser) {
    corpo = `<div class="empty-state">
      <h3>Entre para ver esta área</h3>
      <p>${qual === 'publicados' ? 'Crie uma conta gratuita para publicar e acompanhar seus relatos.' : 'Crie uma conta gratuita para seguir outras pessoas.'}</p>
      <button class="btn btn-coral" style="margin-top:16px;" id="sheetLogin">Entrar ou criar conta</button>
    </div>`;
  } else if (qual === 'publicados') {
    const meus = meusPosts();
    corpo = meus.length
      ? `<div class="feed">${meus.map(postCardHTML).join('')}</div>`
      : `<div class="empty-state">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${F5_ICONS.publicado}</svg>
           <h3>Você ainda não tem relatos publicados</h3>
           <p>Escreva o primeiro no campo Escrever e publique na comunidade.</p>
           <button class="btn btn-coral" style="margin-top:16px;" id="sheetEscrever">Escrever agora</button>
         </div>`;
  } else {
    corpo = state.following.length
      ? state.following
          .map(
            (u) => `
        <div class="follow-row">
          <div class="follow-av" style="background:${colorForName(u)}">${initials(u)}</div>
          <div class="follow-meta">
            <b>@${escapeHtml(u)}</b>
            <button data-verrelatos="${escapeHtml(u)}">ver relatos</button>
          </div>
          <button class="btn btn-outline btn-sm" data-unfollow="${escapeHtml(u)}">Deixar de seguir</button>
        </div>`
          )
          .join('')
      : `<div class="empty-state">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${F5_ICONS.pessoas}</svg>
           <h3>Você ainda não segue ninguém</h3>
           <p>Toque em Seguir no cartão de alguém para acompanhar os relatos dessa pessoa.</p>
         </div>`;
  }

  box.innerHTML = `
    <div class="sheet-grab"></div>
    <div class="sheet-head">
      <h3>${titulo}</h3>
      <button class="btn-icon" id="sheetClose" aria-label="Fechar">${f5svg('fechar', 20)}</button>
    </div>
    ${corpo}`;

  document.getElementById('sheetClose').addEventListener('click', fecharSheet);
  const lg = document.getElementById('sheetLogin');
  if (lg)
    lg.addEventListener('click', () => {
      fecharSheet();
      openAuthModal();
    });
  const esc = document.getElementById('sheetEscrever');
  if (esc)
    esc.addEventListener('click', () => {
      fecharSheet();
      navigateTo('escrever');
    });
  box.querySelectorAll('[data-unfollow]').forEach((b) =>
    b.addEventListener('click', async () => {
      await toggleFollow(b.dataset.unfollow);
      renderSheet('seguindo');
    })
  );
  box.querySelectorAll('[data-verrelatos]').forEach((b) =>
    b.addEventListener('click', () => {
      state.feedUser = b.dataset.verrelatos;
      state.feedFilter = 'recentes';
      fecharSheet();
      renderCommunityView();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    })
  );
  attachPostEvents(box);
}

/* ================================================================
   PERFIL — relatos, favoritos, arquivados e apagados
   ================================================================ */
function relatoPessoalHTML(p) {
  const font = STYLE_FONTS.find((f) => f.id === p.font) || STYLE_FONTS[0];
  const temMedia = !!(p.midia || p.midiaSessao);
  return `
  <article class="post-card reveal in-view" data-post-id="${p.id}">
    <div class="post-head">
      <div class="post-avatar" style="background:${colorForName(state.currentUser ? state.currentUser.username : 'eu')}">${initials(state.currentUser ? state.currentUser.username : 'eu')}</div>
      <div class="post-meta">
        <div class="post-username">Relato pessoal</div>
        <div class="post-time">${timeAgo(p.createdAt)}</div>
      </div>
      <div class="post-own-tools">
        <button data-arq="${p.id}">${p.arq ? 'Desarquivar' : 'Arquivar'}</button>
        <button data-del="${p.id}">Excluir</button>
      </div>
    </div>
    <div class="post-content ${temMedia ? 'with-media' : ''} ${p.musica ? 'has-music' : ''}"
         style="background:${relatoFundoCSS(p)}; background-size:cover; color:${relatoTinta(p)};">
      ${midiaHTML(p, false)}
      ${volumeHTML(p)}
      <div style="position:relative; z-index:2; width:100%;">
        ${quoteRefHTML(p)}
        ${p.text ? `<p class="post-text" style="font-family:${font.family}; color:inherit;">${escapeHtml(p.text)}</p>` : ''}
      </div>
    </div>
  </article>`;
}
function listaArquivados() {
  const meu = state.currentUser ? state.currentUser.email : null;
  const a = state.communityPosts.filter((p) => p.arq && !p.del && p.authorEmail === meu);
  const b = state.myPhrases.filter((m) => m.arq && !m.del);
  return { posts: a, relatos: b };
}
function listaApagados() {
  const meu = state.currentUser ? state.currentUser.email : null;
  const a = state.communityPosts.filter((p) => p.del && p.authorEmail === meu);
  const b = state.myPhrases.filter((m) => m.del);
  return { posts: a, relatos: b };
}

profileTab = 'overview'; /* já declarada acima no arquivo; aqui só volta ao padrão */
function renderPerfil() {
  const el = document.getElementById('perfilContent');
  if (!el) return;
  if (!state.currentUser) {
    el.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
      <h3>Você ainda não entrou</h3>
      <p>Crie uma conta gratuita para salvar favoritos, guardar relatos pessoais e participar da comunidade.</p>
      <button class="btn btn-coral" style="margin-top:18px;" id="perfilLoginBtn">Entrar ou criar conta</button>
    </div>`;
    document.getElementById('perfilLoginBtn').addEventListener('click', () => openAuthModal());
    return;
  }
  const u = state.currentUser;
  const arq = listaArquivados(),
    lix = listaApagados();
  const nArq = arq.posts.length + arq.relatos.length;
  const nLix = lix.posts.length + lix.relatos.length;

  el.innerHTML = `
    <div class="profile-head">
      <div class="profile-avatar" style="background:${colorForName(u.username)}">${initials(u.username)}</div>
      <div>
        <h2 style="font-family:var(--font-display); font-size:24px;">${escapeHtml(u.username)}</h2>
        <p style="color:var(--text-soft); font-size:14px;">${escapeHtml(u.email)}</p>
        <div class="profile-stats">
          <span><b>${meusPosts().length}</b> <span style="color:var(--text-faint);font-size:12.5px;">publicações</span></span>
          <span><b>${state.favorites.length}</b> <span style="color:var(--text-faint);font-size:12.5px;">favoritos</span></span>
          <span><b>${state.following.length}</b> <span style="color:var(--text-faint);font-size:12.5px;">seguindo</span></span>
        </div>
      </div>
      <button class="btn btn-outline btn-sm" id="logoutBtn" style="margin-left:auto;">Sair</button>
    </div>
    <div class="profile-tabs">
      <button class="profile-tab ${profileTab === 'overview' ? 'active' : ''}" data-tab="overview">Meus relatos</button>
      <button class="profile-tab ${profileTab === 'favorites' ? 'active' : ''}" data-tab="favorites">Favoritos</button>
      <button class="profile-tab ${profileTab === 'arquivados' ? 'active' : ''}" data-tab="arquivados">Arquivados${nArq ? ` (${nArq})` : ''}</button>
      <button class="profile-tab ${profileTab === 'apagados' ? 'active' : ''}" data-tab="apagados">Apagados${nLix ? ` (${nLix})` : ''}</button>
    </div>
    <div id="profileTabContent"></div>`;

  document.getElementById('logoutBtn').addEventListener('click', logout);
  el.querySelectorAll('.profile-tab').forEach((t) =>
    t.addEventListener('click', () => {
      profileTab = t.dataset.tab;
      renderPerfil();
    })
  );
  const box = document.getElementById('profileTabContent');

  if (profileTab === 'favorites') {
    box.innerHTML = favoritesHTML();
    box
      .querySelectorAll('[data-fav-quote]')
      .forEach((btn) =>
        btn.addEventListener('click', () =>
          toggleFavoriteQuote(Number(btn.dataset.favQuote)).then(renderPerfil)
        )
      );
    attachPostEvents(box);
    attachQuoteCardEvents(box);
    return;
  }

  if (profileTab === 'arquivados') {
    const total = arq.posts.length + arq.relatos.length;
    box.innerHTML = total
      ? `<p class="f5-count">${total} ${total === 1 ? 'relato arquivado' : 'relatos arquivados'}</p>
         <div class="feed">${arq.posts.map(postCardHTML).join('')}${arq.relatos.map(relatoPessoalHTML).join('')}</div>`
      : `<div class="empty-state">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${F5_ICONS.arquivar}</svg>
           <h3>Nada arquivado</h3>
           <p>Ao arquivar um relato, ele sai do feed e fica guardado aqui.</p>
         </div>`;
    attachPostEvents(box);
    return;
  }

  if (profileTab === 'apagados') {
    const total = lix.posts.length + lix.relatos.length;
    box.innerHTML = `
      ${
        total
          ? `<div class="trash-bar">
        <button class="btn btn-outline btn-sm" id="lixRestaurarTudo">${f5svg('restaurar', 15)} Restaurar tudo</button>
        <button class="btn btn-outline btn-sm" id="lixEsvaziar">${f5svg('lixo', 15)} Esvaziar a lixeira</button>
      </div>`
          : ''
      }
      ${
        total
          ? `<div class="feed">${[...lix.posts, ...lix.relatos]
              .map(
                (p) => `
            <div>
              ${p.authorUsername ? postCardHTML(p) : relatoPessoalHTML(p)}
              <div class="trash-bar" style="margin-top:-8px;">
                <button class="btn btn-coral btn-sm" data-restaurar="${p.id}">${f5svg('restaurar', 15)} Restaurar</button>
              </div>
            </div>`
              )
              .join('')}</div>`
          : `<div class="empty-state">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${F5_ICONS.lixo}</svg>
             <h3>A lixeira está vazia</h3>
             <p>Relatos excluídos ficam aqui até você restaurar ou esvaziar.</p>
           </div>`
      }`;
    const rt = document.getElementById('lixRestaurarTudo');
    if (rt)
      rt.addEventListener('click', async () => {
        for (const p of [...lix.posts, ...lix.relatos]) {
          p.del = false;
        }
        await saveCommunityPosts();
        await saveMyPhrases();
        toast('Relatos restaurados');
        renderPerfil();
      });
    const ev = document.getElementById('lixEsvaziar');
    if (ev) ev.addEventListener('click', esvaziarLixeira);
    box
      .querySelectorAll('[data-restaurar]')
      .forEach((b) => b.addEventListener('click', () => restaurarRelato(b.dataset.restaurar)));
    attachPostEvents(box);
    return;
  }

  /* aba padrão: relatos pessoais */
  const meus = state.myPhrases.filter((m) => !m.del && !m.arq);
  box.innerHTML = `
    <div class="com-cta" style="margin-top:18px;">
      ${f5svg('lapis', 22)}
      <p>Seus relatos pessoais são privados. Só você vê o que está aqui.</p>
      <button class="btn btn-coral btn-sm" id="perfilEscrever">Escrever relato</button>
    </div>
    ${
      meus.length
        ? `<div class="feed">${meus.map(relatoPessoalHTML).join('')}</div>`
        : `<p style="color:var(--text-faint);">Nenhum relato pessoal guardado ainda.</p>`
    }`;
  document.getElementById('perfilEscrever').addEventListener('click', () => navigateTo('escrever'));
  attachPostEvents(box);
}

/* ================================================================
   CARTÃO DE FRASE EXPANDIDO
   Ganha coração, ícone de comentário e "CONHECER AUTOR" logo abaixo
   da foto e do nome — direto para o panorama, sem tela intermediária.
   ================================================================ */

/* ================================================================
   NARRAÇÃO — vozes mais naturais e mais fáceis de entender
   ----------------------------------------------------------------
   Três problemas explicavam o som robótico e truncado:
   1. a escolha da voz pegava a primeira disponível, muitas vezes a
      pior do sistema (eSpeak) e às vezes em português europeu;
   2. o texto ia inteiro num único enunciado, e o Chrome corta a
      fala por volta de 15 segundos;
   3. abreviações, aspas e travessões eram lidos letra por letra.
   Agora a voz é escolhida por qualidade, o texto é preparado e
   dividido em frases, e há um cão de guarda contra o corte.
   ================================================================ */
const VOZ_BOA = [
  'natural',
  'neural',
  'online',
  'premium',
  'enhanced',
  'wavenet',
  'google',
  'microsoft',
  'siri',
  'eloquence'
];
const VOZ_FEM = [
  'female',
  'feminin',
  'mulher',
  'maria',
  'luciana',
  'francisca',
  'fernanda',
  'joana',
  'ines',
  'inês',
  'catarina',
  'camila',
  'vitoria',
  'vitória',
  'helena',
  'isabela',
  'leila',
  'samantha',
  'zira',
  'heloisa',
  'heloísa',
  'yara',
  'ana'
];
const VOZ_MASC = [
  'male',
  'masculin',
  'homem',
  'daniel',
  'ricardo',
  'felipe',
  'diego',
  'marcos',
  'antonio',
  'antônio',
  'joaquim',
  'thiago',
  'cristiano',
  'duarte',
  'paulo',
  'julio',
  'júlio',
  'helio',
  'hélio',
  'david',
  'fabio',
  'fábio'
];

function _pontuaVoz(v, genero) {
  const n = (v.name || '').toLowerCase();
  const lang = (v.lang || '').toLowerCase();
  let p = 0;
  if (lang.startsWith('pt-br') || lang === 'pt_br') p += 60;
  else if (lang.startsWith('pt')) p += 34;
  else return -1; /* fora do português, descarta */
  VOZ_BOA.forEach((h) => {
    if (n.includes(h)) p += 16;
  });
  if (v.localService === false) p += 10; /* vozes de rede costumam ser melhores */
  if (/espeak|festival|pico|robot|compact/.test(n)) p -= 45;
  const listaG = genero === 'female' ? VOZ_FEM : VOZ_MASC;
  const listaO = genero === 'female' ? VOZ_MASC : VOZ_FEM;
  if (listaG.some((h) => n.includes(h))) p += 40;
  if (listaO.some((h) => n.includes(h))) p -= 30;
  if (v.default) p += 4;
  return p;
}
function pickVoice(voices, genderPref) {
  if (!voices || !voices.length) return null;
  const pontuadas = voices.map((v) => ({ v, p: _pontuaVoz(v, genderPref) })).filter((x) => x.p >= 0);
  if (pontuadas.length) {
    pontuadas.sort((a, b) => b.p - a.p);
    return pontuadas[0].v;
  }
  /* nenhum português instalado: usa o melhor disponível, sem descartar tudo */
  const alt = voices
    .map((v) => {
      const n = (v.name || '').toLowerCase();
      let p = 0;
      VOZ_BOA.forEach((h) => {
        if (n.includes(h)) p += 12;
      });
      if (/espeak|pico|compact/.test(n)) p -= 25;
      if ((genderPref === 'female' ? VOZ_FEM : VOZ_MASC).some((h) => n.includes(h))) p += 25;
      return { v, p };
    })
    .sort((a, b) => b.p - a.p);
  return alt[0].v;
}

/* prepara o texto: o que estava sendo soletrado agora é falado */
const ABREV = [
  [/\bséc\.\s*/gi, 'século '],
  [/\ba\.C\./gi, 'antes de Cristo'],
  [/\bd\.C\./gi, 'depois de Cristo'],
  [/\bSr\.\s*/g, 'Senhor '],
  [/\bSra\.\s*/g, 'Senhora '],
  [/\bDr\.\s*/g, 'Doutor '],
  [/\bDra\.\s*/g, 'Doutora '],
  [/\bProf\.\s*/g, 'Professor '],
  [/\bpág\.\s*/gi, 'página '],
  [/\bp\.\s*ex\./gi, 'por exemplo'],
  [/\betc\./gi, 'etcétera'],
  [/\bnº\s*/gi, 'número '],
  [/\bJr\./gi, 'Júnior'],
  [/\bSt\./gi, 'Santo']
];
function prepararNarracao(texto) {
  let t = String(texto || '');
  t = t.replace(/[“”„«»"]/g, ' ').replace(/[‘’]/g, "'");
  t = t.replace(/\s*[—–]\s*/g, ', ');
  t = t.replace(/\.{3,}/g, '.');
  ABREV.forEach(([re, sub]) => {
    t = t.replace(re, sub);
  });
  t = t.replace(/\n{2,}/g, '.\n');
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
}
function fatiarNarracao(texto, max = 170) {
  const partes = prepararNarracao(texto)
    .split(/(?<=[.!?:;])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const out = [];
  let atual = '';
  partes.forEach((p) => {
    /* frases muito longas são quebradas nas vírgulas */
    if (p.length > max * 1.7) {
      p.split(/,\s*/).forEach((sub) => {
        if ((atual + ' ' + sub).trim().length > max) {
          if (atual) out.push(atual.trim());
          atual = sub;
        } else atual = (atual ? atual + ', ' : '') + sub;
      });
      return;
    }
    if ((atual + ' ' + p).trim().length > max) {
      if (atual) out.push(atual.trim());
      atual = p;
    } else atual = (atual ? atual + ' ' : '') + p;
  });
  if (atual.trim()) out.push(atual.trim());
  return out;
}

let _narracao = { id: null, partes: [], i: 0, cancelada: false, guarda: null, btn: null, status: null };
function _pararGuarda() {
  if (_narracao.guarda) {
    clearInterval(_narracao.guarda);
    _narracao.guarda = null;
  }
}
async function toggleStoryAudio(storyId, text, btn, statusEl, voiceSel) {
  if (!('speechSynthesis' in window)) {
    toast('Seu navegador não suporta narração por voz.');
    return;
  }

  if (_narracao.id === storyId) {
    _narracao.cancelada = true;
    _pararGuarda();
    speechSynthesis.cancel();
    resetAudioUI(storyId, btn, statusEl);
    return;
  }
  _narracao.cancelada = true;
  _pararGuarda();
  speechSynthesis.cancel();
  document.querySelectorAll('.play-btn.playing').forEach((b) => {
    b.classList.remove('playing');
    b.innerHTML = playIconSVG();
  });

  btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/></svg>`;
  btn.classList.add('playing');
  statusEl.innerHTML = `<span class="eq"><span></span><span></span><span></span></span> Preparando a narração…`;

  const voices = await loadVoices();
  const genero = voiceSel ? voiceSel.value : 'female';
  const voz = pickVoice(voices, genero);
  const partes = fatiarNarracao(text);
  if (!partes.length) {
    resetAudioUI(storyId, btn, statusEl);
    return;
  }

  _narracao = { id: storyId, partes, i: 0, cancelada: false, guarda: null, btn, status: statusEl };
  currentAudio.id = storyId;

  const rotulo = genero === 'female' ? 'feminina' : 'masculina';
  const falar = () => {
    if (_narracao.cancelada || _narracao.id !== storyId) return;
    if (_narracao.i >= _narracao.partes.length) {
      _pararGuarda();
      resetAudioUI(storyId, btn, statusEl);
      return;
    }
    const u = new SpeechSynthesisUtterance(_narracao.partes[_narracao.i]);
    if (voz) u.voice = voz;
    u.lang = (voz && voz.lang) || 'pt-BR';
    /* mais devagar e com altura natural: a leitura fica compreensível */
    u.rate = genero === 'female' ? 0.92 : 0.9;
    u.pitch = genero === 'female' ? 1.04 : 0.92;
    u.volume = 1;
    u.onstart = () => {
      const pct = Math.round((_narracao.i / _narracao.partes.length) * 100);
      statusEl.innerHTML = `<span class="eq"><span></span><span></span><span></span></span> Reproduzindo com voz ${rotulo} · ${pct}%`;
    };
    u.onend = () => {
      _narracao.i++;
      setTimeout(falar, 130);
    };
    u.onerror = () => {
      if (_narracao.cancelada) return;
      _narracao.i++;
      if (_narracao.i < _narracao.partes.length) setTimeout(falar, 160);
      else {
        _pararGuarda();
        resetAudioUI(storyId, btn, statusEl);
      }
    };
    currentAudio.utterance = u;
    speechSynthesis.speak(u);
  };

  /* cão de guarda: o Chrome interrompe a fala por volta de 15s */
  _narracao.guarda = setInterval(() => {
    if (_narracao.cancelada) {
      _pararGuarda();
      return;
    }
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      speechSynthesis.resume();
    }
  }, 9000);

  falar();
}
function resetAudioUI(storyId, btn, statusEl) {
  if (currentAudio.id === storyId) currentAudio.id = null;
  if (_narracao.id === storyId) {
    _narracao.id = null;
    _narracao.cancelada = true;
  }
  _pararGuarda();
  if (btn) {
    btn.classList.remove('playing');
    btn.innerHTML = playIconSVG();
  }
  if (statusEl) statusEl.textContent = 'Toque para ouvir';
}
window.addEventListener('beforeunload', () => {
  try {
    speechSynthesis.cancel();
  } catch (e) {}
});

/* ================================================================
   NAVEGAÇÃO — inclui Autores & Obras, Panorama, Obra e Escrever
   ================================================================ */
function navigateTo(view) {
  const anterior = state.view;
  state.view = view;
  document.querySelectorAll('.view').forEach((el) => {
    el.classList.toggle('hidden', el.dataset.view !== view);
  });
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.classList.toggle('active', el.dataset.nav === view);
  });
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  closeMobileMenu();
  closeProfilePanel();
  if (typeof closeTraditionPanel === 'function') closeTraditionPanel();
  Musica.parar();

  if (
    view === 'panorama' &&
    ['autores', 'explorar', 'descubra', 'historias', 'home', 'comunidade', 'perfil'].includes(anterior)
  ) {
    panVoltarPara = anterior;
  }

  if (view === 'explorar') renderExplore();
  if (view === 'descubra') renderDiscover();
  if (view === 'historias') renderBiographies();
  if (view === 'comunidade') renderCommunityView();
  if (view === 'perfil') renderPerfil();
  if (view === 'autores') renderAutoresObras();
  if (view === 'panorama') renderPanorama();
  if (view === 'obra') renderObra();
  if (view === 'escrever') renderEscrever();

  requestAnimationFrame(() => {
    observeReveals();
    wireFilterArrows();
    updateFilterArrows();
  });
}

/* ================================================================
   LIGAÇÕES E CARGA DA FASE 5
   ================================================================ */
function initFase5() {
  f5InjectViews();

  /* Esc fecha os novos painéis, na ordem certa */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const med = document.getElementById('medOverlay');
    if (med && med.classList.contains('show')) return fecharEditor();
    if (sheetAberta) return fecharSheet();
  });

  /* migração: relatos antigos continuam válidos */
  state.myPhrases.forEach((m) => {
    if (m.arq === undefined) m.arq = false;
    if (m.del === undefined) m.del = false;
  });
  state.communityPosts.forEach((p) => {
    if (p.arq === undefined) p.arq = false;
    if (p.del === undefined) p.del = false;
    if (!p.comments) p.comments = [];
    if (!p.likes) p.likes = [];
    if (!p.reports) p.reports = [];
  });

  renderAutoresObras();
  renderEscrever();
}

/* CADEIA DE FASES (padrão central do projeto)
   window.__fase5Boot é a primeira função da cadeia que roda depois de init().
   Cada fase posterior (arquivos de curadoria/) faz:
       var prev = window.__fase5Boot;
       window.__fase5Boot = function(){ prev(); aplicar(); };
   e assim a cadeia executa as fases na mesma ordem em que os arquivos são
   carregados. Quem dispara a cadeia é app/99-iniciar.js. */
window.__fase5Boot = function () {
  try {
    initFase5();
  } catch (e) {
    console.error('Fase 5:', e);
  }
};
