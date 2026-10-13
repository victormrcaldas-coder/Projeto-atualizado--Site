/* MeMotiva — app/10-historias-comunidade-perfil-login.js
   Histórias com narração, compositor, comunidade, minhas frases, favoritos, perfil, autenticação local, menu e tema.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   HISTÓRIAS — cartões com narração por voz sob demanda
   Usa a Web Speech API nativa do navegador (speechSynthesis).
   A narração é gerada em tempo real a cada clique no botão de
   reprodução — não há áudio pré-gravado.
   ================================================================ */
function loadVoices() {
  return new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();
    if (voices.length) {
      resolve(voices);
      return;
    }
    speechSynthesis.onvoiceschanged = () => resolve(speechSynthesis.getVoices());
    setTimeout(() => resolve(speechSynthesis.getVoices()), 1200);
  });
}

let currentAudio = { id: null, utterance: null };

function playIconSVG() {
  return `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M8 5v14l11-7L8 5Z"/></svg>`;
}

/* ================================================================
   COMPOSITOR (usado na Comunidade e em Minhas Frases)
   Permite alternar fonte, cor e "papel de fundo" da publicação.
   ================================================================ */

/* ---------------- publicar na comunidade ---------------- */
async function saveCommunityPosts() {
  /* a mídia que só vive nesta sessão (midiaSessao) não vai para o feed compartilhado */
  const posts = state.communityPosts.map((p) =>
    p.midiaSessao ? Object.assign({}, p, { midiaSessao: null }) : p
  );
  await dbSet('feed:posts', posts, true);
}
/* O feed compartilhado pode ser gravado por qualquer visitante: cada post lido dele
   é refeito só com campos esperados, nos tipos esperados. Posts sem id válido saem. */
function sanearPost(p) {
  if (!p || typeof p !== 'object' || !idSeguro(p.id)) return null;
  const txt = (v, n) => (typeof v === 'string' ? v.slice(0, n) : '');
  const num = (v) => (Number.isFinite(v) ? v : 0);
  const strs = (a) => (Array.isArray(a) ? a.filter((x) => typeof x === 'string') : []);
  const m = p.musica && typeof p.musica === 'object' ? p.musica : null;
  return {
    id: p.id,
    text: txt(p.text, 4000),
    font: txt(p.font, 40),
    color: txt(p.color, 40),
    fundo: p.fundo && typeof p.fundo === 'object' ? { cat: txt(p.fundo.cat, 40), i: num(p.fundo.i) } : null,
    midia: /^midia:[A-Za-z0-9_-]{1,80}$/.test(p.midia) ? p.midia : null,
    midiaSessao: null,
    musica: m
      ? {
          tipo: txt(m.tipo, 20),
          id: txt(String(m.id == null ? '' : m.id), 120),
          nome: txt(m.nome, 200),
          artista: txt(m.artista, 200),
          capa: urlMidiaSegura(m.capa) ? m.capa : '',
          de: num(m.de),
          ate: num(m.ate),
          dur: num(m.dur),
          src: urlMidiaSegura(m.src) ? m.src : null
        }
      : null,
    quote:
      p.quote && typeof p.quote === 'object'
        ? { text: txt(p.quote.text, 2000), author: txt(p.quote.author, 200), idx: num(p.quote.idx) }
        : null,
    createdAt: num(p.createdAt),
    authorEmail: txt(p.authorEmail, 200),
    authorUsername: txt(p.authorUsername, 40),
    likes: strs(p.likes),
    comments: (Array.isArray(p.comments) ? p.comments : [])
      .filter((c) => c && typeof c === 'object' && idSeguro(c.id))
      .map((c) => ({
        id: c.id,
        username: txt(c.username, 40),
        text: txt(c.text, 1000),
        createdAt: num(c.createdAt)
      })),
    reports: strs(p.reports),
    hidden: p.hidden === true,
    arq: p.arq === true,
    del: p.del === true
  };
}
async function loadCommunityPosts() {
  const posts = await dbGet('feed:posts', true);
  state.communityPosts = Array.isArray(posts) ? posts.map(sanearPost).filter(Boolean) : [];
  if (!posts) {
    await seedCommunityIfNeeded();
  }
}
async function seedCommunityIfNeeded() {
  const seeded = await dbGet('seeded:v1', true);
  if (seeded) return;
  const seedPosts = [
    {
      text: 'Hoje escolhi recomeçar. Não porque foi fácil ontem, mas porque ainda acredito no que estou construindo.',
      authorUsername: 'marina_sp',
      color: 'jade',
      font: 'body'
    },
    {
      text: 'Aprendi que pedir ajuda não é fraqueza — é a coragem de admitir que ninguém chega a lugar nenhum sozinho.',
      authorUsername: 'joao.forte',
      color: 'sky',
      font: 'display'
    },
    {
      text: 'Gratidão de hoje: acordar, respirar fundo e lembrar que já superei 100% dos meus dias difíceis até agora.',
      authorUsername: 'luztotal',
      color: 'marigold',
      font: 'hand'
    }
  ];
  const now = Date.now();
  state.communityPosts = seedPosts.map((p, i) => ({
    id: uid('post'),
    authorEmail: 'seed_' + i + '@memotiva.app',
    authorUsername: p.authorUsername,
    text: p.text,
    font: p.font,
    color: p.color,
    createdAt: now - (i + 1) * 3600 * 1000 * 7,
    likes: [],
    comments: [],
    reports: [],
    hidden: false
  }));
  await saveCommunityPosts();
  await dbSet('seeded:v1', true, true);
}

/* ---------------- ações do feed ---------------- */
async function toggleLikePost(postId) {
  const post = state.communityPosts.find((p) => p.id === postId);
  if (!post) return;
  const email = state.currentUser.email;
  const i = post.likes.indexOf(email);
  if (i > -1) post.likes.splice(i, 1);
  else post.likes.push(email);
  await saveCommunityPosts();
  renderCommunityView();
}
async function addComment(postId, text) {
  if (!text.trim()) return;
  if (containsBadWords(text)) {
    toast('Comentário bloqueado: linguagem imprópria.', 3600);
    return;
  }
  const post = state.communityPosts.find((p) => p.id === postId);
  if (!post) return;
  post.comments.push({
    id: uid('c'),
    username: state.currentUser.username,
    text: text.trim(),
    createdAt: Date.now()
  });
  await saveCommunityPosts();
  renderCommunityView();
}
async function toggleFollow(username) {
  const i = state.following.indexOf(username);
  if (i > -1) {
    state.following.splice(i, 1);
    toast('Deixou de seguir @' + username);
  } else {
    state.following.push(username);
    toast('Agora você segue @' + username);
  }
  await dbSet('following:' + state.currentUser.email, state.following, false);
  renderCommunityView();
}
async function reportPost(postId) {
  const post = state.communityPosts.find((p) => p.id === postId);
  if (!post) return;
  const email = state.currentUser.email;
  if (post.reports.includes(email)) {
    toast('Você já denunciou esta publicação.');
    return;
  }
  post.reports.push(email);
  if (post.reports.length >= 3) post.hidden = true;
  await saveCommunityPosts();
  toast('Denúncia enviada. Obrigado por ajudar a manter a comunidade segura.');
  renderCommunityView();
}
async function sharePost(post) {
  const shareText = `"${post.text}" — via MeMotiva`;
  if (navigator.share) {
    try {
      await navigator.share({ text: shareText });
      return;
    } catch (e) {
      /* usuário cancelou */ return;
    }
  }
  try {
    await navigator.clipboard.writeText(shareText);
    toast('Texto copiado para compartilhar');
  } catch (e) {
    toast('Não foi possível copiar automaticamente.');
  }
}
async function togglePostFavorite(postId) {
  const pos = state.favorites.findIndex((f) => f.type === 'post' && f.id === postId);
  if (pos > -1) {
    state.favorites.splice(pos, 1);
    toast('Removida dos favoritos');
  } else {
    state.favorites.push({ type: 'post', id: postId });
    toast('Salva nos favoritos');
  }
  await saveFavorites();
  renderCommunityView();
}

/* ---------------- render do post ---------------- */

function attachPostEvents(container) {
  container
    .querySelectorAll('[data-like]')
    .forEach((b) =>
      b.addEventListener('click', () =>
        requireAuth(() => toggleLikePost(b.dataset.like), 'Crie sua conta para curtir publicações.')
      )
    );
  container
    .querySelectorAll('[data-save-post]')
    .forEach((b) =>
      b.addEventListener('click', () =>
        requireAuth(() => togglePostFavorite(b.dataset.savePost), 'Crie sua conta para salvar nos favoritos.')
      )
    );
  container
    .querySelectorAll('[data-follow]')
    .forEach((b) =>
      b.addEventListener('click', () =>
        requireAuth(() => toggleFollow(b.dataset.follow), 'Crie sua conta para seguir outras pessoas.')
      )
    );
  container
    .querySelectorAll('[data-report]')
    .forEach((b) =>
      b.addEventListener('click', () =>
        requireAuth(() => reportPost(b.dataset.report), 'Crie sua conta para denunciar conteúdo.')
      )
    );
  container.querySelectorAll('[data-share]').forEach((b) =>
    b.addEventListener('click', () => {
      const post = state.communityPosts.find((p) => p.id === b.dataset.share);
      if (post) sharePost(post);
    })
  );
  container.querySelectorAll('[data-comment-toggle]').forEach((b) =>
    b.addEventListener('click', () => {
      requireAuth(() => {
        document.getElementById('comments-' + b.dataset.commentToggle).classList.toggle('hidden');
      }, 'Crie sua conta para comentar.');
    })
  );
  container.querySelectorAll('[data-comment-send]').forEach((b) =>
    b.addEventListener('click', () => {
      const id = b.dataset.commentSend;
      const input = document.getElementById('commentInput-' + id);
      addComment(id, input.value);
      input.value = '';
    })
  );
  container.querySelectorAll('.comment-input').forEach((inp) => {
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const id = inp.id.replace('commentInput-', '');
        addComment(id, inp.value);
        inp.value = '';
      }
    });
  });
}

document.querySelectorAll('#feedFilterChips .chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    state.feedFilter = chip.dataset.feedFilter;
    document
      .querySelectorAll('#feedFilterChips .chip')
      .forEach((c) => c.classList.toggle('active', c === chip));
    if (chip.dataset.feedFilter === 'seguindo' || chip.dataset.feedFilter === 'minhas') {
      requireAuth(renderCommunityView, 'Crie sua conta para ver esta aba.');
    } else renderCommunityView();
  });
});

/* ================================================================
   MINHAS FRASES (privado — não publicado)
   ================================================================ */
async function saveMyPhrases() {
  if (!state.currentUser) return;
  await dbSet('myphrases:' + state.currentUser.email, state.myPhrases, false);
}

/* ================================================================
   FAVORITOS
   ================================================================ */
function favoritesHTML() {
  if (state.favorites.length === 0) {
    return `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.7-10.2-9.1C.2 9 1 5.4 4.2 4.1 6.7 3 9.3 4 12 7c2.7-3 5.3-4 7.8-2.9 3.2 1.3 4 4.9 2.4 7.8C19.5 16.3 12 21 12 21Z"/></svg>
      <h3>Sua lista de favoritos está vazia</h3>
      <p>Toque no coração de qualquer frase ou publicação para guardá-la aqui.</p>
    </div>`;
  }
  const quoteFavs = state.favorites
    .filter((f) => f.type === 'quote')
    .map((f) => {
      const i = QUOTE_POR_QID[f.qid];
      return { q: QUOTES[i], idx: i };
    })
    .filter((x) => x.q);
  const postFavs = state.favorites
    .filter((f) => f.type === 'post')
    .map((f) => state.communityPosts.find((p) => p.id === f.id))
    .filter(Boolean);
  let html = '';
  if (quoteFavs.length) {
    html += `<h3 style="font-family:var(--font-display); font-size:18px; margin:22px 0 14px;">Frases de autores</h3><div class="quote-grid">${quoteFavs.map(({ q, idx }) => quoteCardHTML(q, idx)).join('')}</div>`;
  }
  if (postFavs.length) {
    html += `<h3 style="font-family:var(--font-display); font-size:18px; margin:30px 0 14px;">Publicações da comunidade</h3><div class="feed">${postFavs.map(postCardHTML).join('')}</div>`;
  }
  return html;
}

/* ================================================================
   PERFIL (visão geral · favoritos · minhas frases)
   ================================================================ */
let profileTab = 'overview';

/* ================================================================
   AUTENTICAÇÃO
   Protótipo funcional: cadastro/login validam contra registros
   guardados no armazenamento do artifact, com a senha convertida
   em hash (SHA-256) antes de ser salva — nunca em texto puro.
   Isto NÃO substitui um backend de produção com verificação de
   e-mail, limite de tentativas etc., mas já não guarda senha crua.
   ================================================================ */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function openAuthModal(message) {
  document.getElementById('authModalSub').textContent =
    message || 'Entre para curtir, comentar e guardar suas frases.';
  document.getElementById('authModal').classList.add('show');
  document.getElementById('scrim').classList.add('show');
}
function closeAuthModal() {
  document.getElementById('authModal').classList.remove('show');
  document.getElementById('scrim').classList.remove('show');
  document.getElementById('loginError').textContent = '';
  document.getElementById('registerError').textContent = '';
  state.pendingAction = null;
}
function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLogin').classList.toggle('active', isLogin);
  document.getElementById('tabRegister').classList.toggle('active', !isLogin);
  document.getElementById('loginForm').classList.toggle('hidden', !isLogin);
  document.getElementById('registerForm').classList.toggle('hidden', isLogin);
  document.getElementById('authModalTitle').textContent = isLogin
    ? 'Bem-vinda(o) de volta'
    : 'Criar sua conta gratuita';
  document.getElementById('authSwitchLine').innerHTML = isLogin
    ? `Ainda não tem conta? <button id="switchToRegister">Criar conta</button>`
    : `Já tem conta? <button id="switchToLogin">Entrar</button>`;
  wireAuthSwitchLine();
}
function wireAuthSwitchLine() {
  const r = document.getElementById('switchToRegister');
  const l = document.getElementById('switchToLogin');
  if (r) r.addEventListener('click', () => switchAuthTab('register'));
  if (l) l.addEventListener('click', () => switchAuthTab('login'));
}
document.getElementById('tabLogin').addEventListener('click', () => switchAuthTab('login'));
document.getElementById('tabRegister').addEventListener('click', () => switchAuthTab('register'));
wireAuthSwitchLine();
document.getElementById('closeAuthModal').addEventListener('click', closeAuthModal);

function requireAuth(callback, message) {
  if (state.currentUser) {
    callback();
    return;
  }
  state.pendingAction = callback;
  openAuthModal(message);
}

async function handleLogin(email, password) {
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';
  email = email.trim().toLowerCase();
  const user = await dbGet('user:' + email, true);
  if (!user) {
    errEl.textContent = 'Não encontramos uma conta com este e-mail.';
    return;
  }
  const hash = await sha256(password);
  if (hash !== user.passwordHash) {
    errEl.textContent = 'Senha incorreta. Tente novamente.';
    return;
  }
  await completeLogin({ email, username: user.username });
}
async function handleRegister(username, email, password, password2) {
  const errEl = document.getElementById('registerError');
  errEl.textContent = '';
  username = username.trim();
  email = email.trim().toLowerCase();
  if (username.length < 3) {
    errEl.textContent = 'Escolha um nome de usuário com pelo menos 3 caracteres.';
    return;
  }
  if (!/^[A-Za-z0-9._]{3,24}$/.test(username)) {
    errEl.textContent = 'Use só letras sem acento, números, ponto ou sublinhado (até 24 caracteres).';
    return;
  }
  if (!isValidEmail(email)) {
    errEl.textContent = 'Digite um e-mail válido.';
    return;
  }
  if (password.length < 6) {
    errEl.textContent = 'A senha precisa ter pelo menos 6 caracteres.';
    return;
  }
  if (password !== password2) {
    errEl.textContent = 'As senhas não coincidem.';
    return;
  }
  const existing = await dbGet('user:' + email, true);
  if (existing) {
    errEl.textContent = 'Já existe uma conta com este e-mail. Tente entrar.';
    return;
  }
  const usernameTaken = await dbGet('username:' + username.toLowerCase(), true);
  if (usernameTaken) {
    errEl.textContent = 'Este nome de usuário já está em uso.';
    return;
  }
  const passwordHash = await sha256(password);
  await dbSet('user:' + email, { username, email, passwordHash, createdAt: Date.now() }, true);
  await dbSet('username:' + username.toLowerCase(), email, true);
  toast('Conta criada com sucesso! Bem-vinda(o)');
  await completeLogin({ email, username });
}
async function completeLogin(user) {
  state.currentUser = user;
  await dbSet('session', user, false);
  await loadUserData();
  closeAuthModal();
  renderHeaderAuthArea();
  renderAuthDependentUI();
  toast(`Olá, ${user.username}!`);
  if (state.pendingAction) {
    const fn = state.pendingAction;
    state.pendingAction = null;
    fn();
  }
}
async function logout() {
  state.currentUser = null;
  state.favorites = [];
  state.myPhrases = [];
  state.following = [];
  await dbSet('session', null, false);
  renderHeaderAuthArea();
  renderAuthDependentUI();
  navigateTo('home');
  toast('Você saiu da sua conta.');
}
async function loadUserData() {
  if (!state.currentUser) return;
  const email = state.currentUser.email;
  state.favorites = normalizarFavoritos(await dbGet('favorites:' + email, false));
  state.myPhrases = (await dbGet('myphrases:' + email, false)) || [];
  state.following = (await dbGet('following:' + email, false)) || [];
}
async function loadSession() {
  const session = await dbGet('session', false);
  if (session && session.email) {
    state.currentUser = session;
    await loadUserData();
  }
}
function renderHeaderAuthArea() {
  const el = document.getElementById('headerAuthArea');
  if (state.currentUser) {
    el.innerHTML = `<button class="user-chip" data-nav="perfil">
      <span class="mini-avatar" style="background:${colorForName(state.currentUser.username)}; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:11px; border-radius:50%;">${initials(state.currentUser.username)}</span>
      ${escapeHtml(state.currentUser.username)}
    </button>`;
    el.querySelector('[data-nav]').addEventListener('click', () => navigateTo('perfil'));
  } else {
    el.innerHTML = `<button class="btn btn-coral btn-sm" id="headerLoginBtn">Entrar</button>`;
    document.getElementById('headerLoginBtn').addEventListener('click', () => openAuthModal());
  }
}
function renderAuthDependentUI() {
  // Re-renderiza qualquer parte da tela que dependa de estar logado
  if (state.view === 'comunidade') renderCommunityView();
  if (state.view === 'explorar') renderExploreResults();
  if (state.view === 'perfil') renderPerfil();
  renderQuoteOfDay();
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  handleLogin(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value);
});
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  handleRegister(
    document.getElementById('regUsername').value,
    document.getElementById('regEmail').value,
    document.getElementById('regPassword').value,
    document.getElementById('regPassword2').value
  );
});

/* ================================================================
   MENU MOBILE
   ================================================================ */
function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.getElementById('scrim').classList.add('show');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  if (!document.getElementById('authModal').classList.contains('show')) {
    document.getElementById('scrim').classList.remove('show');
  }
}
document.getElementById('hamburgerBtn').addEventListener('click', openMobileMenu);
document.getElementById('closeMobileMenu').addEventListener('click', closeMobileMenu);
document.getElementById('scrim').addEventListener('click', () => {
  closeMobileMenu();
  closeAuthModal();
});

/* ================================================================
   TEMA — listener do botão
   ================================================================ */
document.getElementById('themeToggle').addEventListener('click', () => {
  toggleTheme();
  renderAuthDependentUI();
  renderCategoryGrid('catGridHome');
  if (state.view === 'explorar') renderExploreResults();
});

/* ================================================================
   REVEAL ON SCROLL (IntersectionObserver)
   ================================================================ */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => revealObserver.observe(el));
}

/* ================================================================
   ESC para fechar modais/menu
   ================================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAuthModal();
    closeMobileMenu();
  }
});
