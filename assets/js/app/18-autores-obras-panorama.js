/* MeMotiva — app/18-autores-obras-panorama.js
   Índice de obras e autores (OBRAS, OBRA_POR_ID, AUTOR_INDEX), telas Autores & Obras e Panorama do autor.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 5 — AUTORES & OBRAS · ESCREVER · COMUNIDADE · PERFIL
   ----------------------------------------------------------------
   Módulo aditivo: nada do que já existia é removido. As funções
   antigas continuam definidas; as que precisam mudar são
   redefinidas aqui embaixo, como já acontecia nas fases 2, 3 e 4.
   ================================================================ */

/* ---------------- ícones ---------------- */
const F5_ICONS = {
  pessoa: '<circle cx="12" cy="8" r="3.6"/><path d="M5.5 20c.6-3.6 3-5.6 6.5-5.6s5.9 2 6.5 5.6"/>',
  livro:
    '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  busca: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  voltar: '<path d="m14.5 5-7 7 7 7"/>',
  coracao:
    '<path d="M12 21s-7.5-4.7-10.2-9.1C.2 9 1 5.4 4.2 4.1 6.7 3 9.3 4 12 7c2.7-3 5.3-4 7.8-2.9 3.2 1.3 4 4.9 2.4 7.8C19.5 16.3 12 21 12 21Z"/>',
  balao:
    '<path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 9 9 0 0 1-3.4-.7L3 21l1.8-5.4a8.4 8.4 0 0 1-.8-3.6A8.4 8.4 0 0 1 12.9 3a8.5 8.5 0 0 1 8.1 8.5Z"/>',
  galeria:
    '<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17 5-5 4 4 3-2.5 4 3.5"/>',
  mais: '<path d="M12 5v14M5 12h14"/>',
  nota: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.6"/><circle cx="17.5" cy="16" r="2.6"/>',
  lapis: '<path d="M4 20h4l10-10a2.6 2.6 0 0 0-3.7-3.7L4.3 16.3 4 20Z"/>',
  carrinho:
    '<circle cx="9" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/><path d="M3 4h2.2l2.3 11.2A1.6 1.6 0 0 0 9.1 16.5h8.4a1.6 1.6 0 0 0 1.6-1.3L21 8H6"/>',
  play: '<path d="M8 5v14l11-7L8 5Z"/>',
  pausa: '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>',
  mudo: '<path d="M11 5 6.5 9H3v6h3.5L11 19V5Z"/><path d="m16 9 5 6M21 9l-5 6"/>',
  som: '<path d="M11 5 6.5 9H3v6h3.5L11 19V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12"/>',
  arquivar:
    '<rect x="3" y="4" width="18" height="4" rx="1.2"/><path d="M5 8v10.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V8"/><path d="M10 12h4"/>',
  lixo: '<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-13"/>',
  restaurar: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  pessoas:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.5-3.2 2.6-5 6-5s5.5 1.8 6 5"/><path d="M16 5.4A3.2 3.2 0 0 1 16 11M17.5 14.4c2.3.5 3.7 2.1 4.1 4.6"/>',
  publicado: '<path d="M4 6h16M4 12h16M4 18h10"/><circle cx="19" cy="18" r="2.4"/>',
  fechar: '<path d="M6 6l12 12M18 6L6 18"/>',
  seta: '<path d="m9 5 7 7-7 7"/>',
  salvar: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/>',
  cortar: '<path d="M6 3v13a2 2 0 0 0 2 2h10"/><path d="M3 6h13a2 2 0 0 1 2 2v10"/>',
  texto: '<path d="M5 6h14M12 6v13"/>'
};
function f5svg(name, size = 20, fill = 'none', sw = 2) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${fill}" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${F5_ICONS[name] || ''}</svg>`;
}

/* ---------------- tipos de obra ---------------- */
const TIPO_OBRA = {
  livro: { nome: 'Livro', cor: '#C2540A', ico: 'livro' },
  romance: { nome: 'Romance', cor: '#A93226', ico: 'livro' },
  conto: { nome: 'Contos', cor: '#B7472A', ico: 'livro' },
  poesia: { nome: 'Poesia', cor: '#7C3AED', ico: 'texto' },
  ensaio: { nome: 'Ensaio', cor: '#0B8A6E', ico: 'lapis' },
  tratado: { nome: 'Tratado', cor: '#5B7B9A', ico: 'livro' },
  filosofia: { nome: 'Filosofia', cor: '#8B9467', ico: 'livro' },
  manual: { nome: 'Livro prático', cor: '#D35400', ico: 'livro' },
  aforismo: { nome: 'Aforismos', cor: '#9B59B6', ico: 'texto' },
  carta: { nome: 'Cartas', cor: '#B5651D', ico: 'texto' },
  diario: { nome: 'Diário', cor: '#8E44AD', ico: 'lapis' },
  memoria: { nome: 'Memórias', cor: '#795548', ico: 'livro' },
  biografia: { nome: 'Biografia', cor: '#607D8B', ico: 'pessoa' },
  discurso: { nome: 'Discurso', cor: '#00A8E8', ico: 'balao' },
  teatro: { nome: 'Teatro', cor: '#E6399B', ico: 'balao' },
  dialogo: { nome: 'Diálogo', cor: '#3F7D8C', ico: 'balao' },
  sagrado: { nome: 'Texto sagrado', cor: '#F1C40F', ico: 'livro' },
  ciencia: { nome: 'Ciência', cor: '#4A90E2', ico: 'busca' },
  artigo: { nome: 'Artigo', cor: '#2980B9', ico: 'texto' },
  invento: { nome: 'Invenção', cor: '#16A085', ico: 'mais' },
  feito: { nome: 'Realização', cor: '#E67E22', ico: 'seta' },
  pintura: { nome: 'Pintura', cor: '#FF6B35', ico: 'galeria' },
  desenho: { nome: 'Desenho', cor: '#E28D5C', ico: 'lapis' },
  escultura: { nome: 'Escultura', cor: '#7F8C8D', ico: 'pessoa' },
  musica: { nome: 'Música', cor: '#9C27B0', ico: 'nota' },
  filme: { nome: 'Cinema', cor: '#C0392B', ico: 'galeria' },
  cronica: { nome: 'Crônicas', cor: '#0E9594', ico: 'lapis' },
  tradução: { nome: 'Tradução', cor: '#6D8B74', ico: 'livro' },
  prosa: { nome: 'Prosa', cor: '#8D6E63', ico: 'livro' },
  /* Tipos presentes no catálogo que não tinham rótulo (caíam em 'Livro' por engano:
     43 obras — Platão, peças de teatro, declarações registradas, projetos, roteiro). */
  peca: { nome: 'Peça teatral', cor: '#E6399B', ico: 'balao' },
  diálogo: { nome: 'Diálogo', cor: '#3F7D8C', ico: 'balao' },
  documento: { nome: 'Documento', cor: '#607D8B', ico: 'texto' },
  projeto: { nome: 'Projeto', cor: '#16A085', ico: 'mais' },
  roteiro: { nome: 'Roteiro', cor: '#E6399B', ico: 'balao' }
};
function tipoObra(t) {
  return TIPO_OBRA[t] || TIPO_OBRA.livro;
}

/* ================================================================
   ÍNDICE DE AUTORES
   Une três fontes já existentes no site — biografias, frases e
   perfis — e acrescenta obras e feitos.
   ================================================================ */
/* OBRAS[autorCanônico] = [{ t: título, tipo, ano, d: descrição, autor, oid }]
   OBRA_POR_ID[oid] = obra. O oid é slug(autor) + '--' + posição na lista
   (algumas fases criam oids próprios, ex.: '--s1', '--r0'). Remover uma obra
   NÃO renumera as demais (Fase 124 apaga direto de OBRAS/OBRA_POR_ID), então
   os endereços das outras obras não mudam. As páginas longas das obras ficam
   em OBRA_PAGINA['Autor||Título'] (dados/22). */
const OBRAS = {};
const OBRA_POR_ID = {};
(function montarObras() {
  /* 1. obras curadas */
  Object.entries(OBRAS_CURADAS).forEach(([autor, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(autor.trim());
    OBRAS[c] = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
  });
  /* 2. obras citadas nas próprias frases do acervo, quando ainda
        não estiverem na curadoria. Só entram fontes que nomeiam uma
        obra (com título), nunca "atribuído a" ou similares. */
  const conta = {};
  QUOTES.forEach((q) => {
    if (!q.src) return;
    const c = canonAuthor(q.author);
    if (SCRIPTURE_RE.test(c)) return;
    let titulo = String(q.src).split(/[,;(]/)[0].trim();
    titulo = titulo.replace(/\s+/g, ' ').replace(/[.:]$/, '');
    if (titulo.length < 3 || titulo.length > 62) return;
    if (/^(atribu|citad|fonte|sem fonte|tradi|prov[eé]rbio|discurso de|entrevista|carta de)/i.test(titulo))
      return;
    if (titulo.toLowerCase() === c.toLowerCase()) return;
    const k = c + '||' + titulo;
    conta[k] = (conta[k] || 0) + 1;
  });
  Object.entries(conta).forEach(([k, n]) => {
    const [c, titulo] = k.split('||');
    if (!OBRAS[c]) OBRAS[c] = [];
    const jaTem = OBRAS[c].some((o) => o.t.toLowerCase().startsWith(titulo.toLowerCase().slice(0, 14)));
    if (jaTem) return;
    if (n < 2) return; /* só entra se for fonte recorrente */
    OBRAS[c].push({
      t: titulo,
      tipo: 'livro',
      ano: null,
      autor: c,
      citada: n,
      d: `Obra de ${c} citada no acervo do MeMotiva: ${n} passagens das frases publicadas aqui vêm desta fonte.`
    });
  });
  Object.keys(OBRAS).forEach((c) => {
    OBRAS[c].sort((a, b) => (a.citada ? 1 : 0) - (b.citada ? 1 : 0));
    OBRAS[c].forEach((o, i) => {
      o.oid = slugify(c) + '--' + i;
      OBRA_POR_ID[o.oid] = o;
    });
  });
})();

function obrasDe(nome) {
  return OBRAS[canonAuthor(nome)] || [];
}
function feitosDe(nome) {
  return FEITOS[canonAuthor(nome)] || [];
}

/* papel/descrição curta da pessoa */
function papelDe(nome) {
  const c = canonAuthor(nome);
  const s = STORIES.find((x) => canonAuthor(x.author) === c);
  if (s && s.role) return s.role;
  if (PAPEIS[c]) return PAPEIS[c];
  const perfis = authorProfiles(c)
    .map((p) => profileById(p))
    .filter(Boolean);
  if (perfis.length) return perfis.map((p) => p.name).join(' · ');
  if (SCRIPTURE_RE.test(c)) return 'Texto e tradição do acervo';
  return 'Autor do acervo MeMotiva';
}
/* nascimento e morte, quando o papel traz as datas entre parênteses */
function datasDe(nome) {
  const papel = papelDe(nome);
  const m = papel.match(/\(([^)]*)\)\s*$/);
  if (!m) return { nasc: null, morte: null, limpo: papel };
  const dentro = m[1].trim();
  const limpo = papel.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const p = dentro.split(/[–—-]/).map((s) => s.trim());
  if (p.length === 2) return { nasc: p[0] || null, morte: p[1] || null, limpo };
  return { nasc: dentro, morte: null, limpo };
}

/* índice de todas as pessoas pesquisáveis
   AUTOR_INDEX: Map nomeCanônico -> { nome, frases: [índices em QUOTES], story }.
   Reúne quem tem história, frase ou obra (escrituras ficam de fora pelo
   SCRIPTURE_RE). Os índices de frase mudam quando QUOTES muda: depois de
   remover/acrescentar frases chame reindexarQuotes() e reconstruirIndices(). */
const AUTOR_INDEX = (() => {
  const m = new Map();
  const add = (nome) => {
    const c = canonAuthor(nome);
    if (!c || SCRIPTURE_RE.test(c)) return;
    if (!m.has(c)) m.set(c, { nome: c, frases: [], story: null });
  };
  STORIES.forEach((s) => {
    add(s.author);
    const c = canonAuthor(s.author);
    if (m.has(c)) m.get(c).story = s;
  });
  QUOTES.forEach((q, i) => {
    add(q.author);
    const c = canonAuthor(q.author);
    if (m.has(c)) m.get(c).frases.push(i);
  });
  Object.keys(OBRAS).forEach(add);
  return m;
})();
function autorInfo(nome) {
  const c = canonAuthor(nome);
  const base = AUTOR_INDEX.get(c) || { nome: c, frases: [], story: null };
  const d = datasDe(c);
  return {
    nome: c,
    papel: papelDe(c),
    papelLimpo: d.limpo,
    nasc: d.nasc,
    morte: d.morte,
    story: base.story,
    frases: base.frases,
    obras: obrasDe(c),
    feitos: feitosDe(c),
    perfis: authorProfiles(c)
      .map((p) => profileById(p))
      .filter(Boolean)
  };
}

/* ---------------- busca ---------------- */
/* palavras que descrevem um campo de atuação, e não uma pessoa */
const CAMPO_ALIAS = {
  filosofos: [
    'filosofia',
    'filosofo',
    'filosofos',
    'filosofa',
    'pensamento',
    'pensadores',
    'etica',
    'estoicismo',
    'sabedoria'
  ],
  literatura: [
    'literatura',
    'escritor',
    'escritores',
    'escritora',
    'poesia',
    'poeta',
    'poetas',
    'romance',
    'livros',
    'literario',
    'ficcao',
    'contos'
  ],
  cientistas: [
    'ciencia',
    'cientista',
    'cientistas',
    'fisica',
    'quimica',
    'biologia',
    'matematica',
    'astronomia',
    'tecnologia',
    'computacao',
    'medicina'
  ],
  educadores: [
    'educacao',
    'educador',
    'educadores',
    'pedagogia',
    'ensino',
    'professor',
    'professores',
    'escola',
    'aprendizagem'
  ],
  empresarios: [
    'negocios',
    'empresario',
    'empresarios',
    'empreendedorismo',
    'empresa',
    'startup',
    'varejo',
    'gestao de empresas'
  ],
  investidores: [
    'investimento',
    'investimentos',
    'investidor',
    'investidores',
    'financas',
    'bolsa',
    'acoes',
    'dinheiro',
    'mercado financeiro'
  ],
  economistas: ['economia', 'economista', 'economistas', 'macroeconomia', 'politica economica'],
  estrategistas: [
    'estrategia',
    'gestao',
    'administracao',
    'marketing',
    'lideranca corporativa',
    'produtividade',
    'persuasao',
    'negociacao',
    'vendas'
  ],
  politicos: [
    'politica',
    'politico',
    'politicos',
    'governo',
    'estado',
    'democracia',
    'presidente',
    'direito'
  ],
  lideres: ['lideranca', 'lider', 'lideres', 'comando', 'exercito', 'aviacao', 'exploracao'],
  ativistas: [
    'ativismo',
    'ativista',
    'ativistas',
    'direitos humanos',
    'feminismo',
    'direitos civis',
    'luta',
    'movimento'
  ],
  religiosos: [
    'religiao',
    'religiosos',
    'espiritualidade',
    'fe',
    'biblia',
    'budismo',
    'cristianismo',
    'islamismo',
    'hinduismo',
    'misticismo',
    'teologia'
  ],
  psicologos: [
    'psicologia',
    'psicologo',
    'psicologos',
    'psicanalise',
    'terapia',
    'saude mental',
    'emocoes',
    'comportamento'
  ],
  artistas: [
    'arte',
    'artista',
    'artistas',
    'pintura',
    'musica',
    'cinema',
    'escultura',
    'design',
    'moda',
    'fotografia'
  ],
  atletas: [
    'esporte',
    'esportes',
    'atleta',
    'atletas',
    'futebol',
    'automobilismo',
    'boxe',
    'tenis',
    'basquete',
    'olimpiadas'
  ],
  ditadores: ['ditadura', 'ditador', 'ditadores', 'autoritarismo']
};

/* ================================================================
   INJEÇÃO DAS NOVAS TELAS E DOS NOVOS ITENS DE NAVEGAÇÃO
   ================================================================ */
function f5InjectViews() {
  const main = document.getElementById('mainApp');
  if (!main) return;
  /* os destinos que já existiam foram ligados no carregamento do site */
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.dataset.f5wired = '1';
  });

  const html = `
  <!-- ---------- AUTORES & OBRAS ---------- -->
  <section class="view hidden" id="view-autores" data-view="autores">
    <div class="wrap section">
      <div class="section-head">
        <span class="eyebrow">acervo</span>
        <h2 class="section-title">Autores &amp; Obras</h2>
        <p class="section-sub">Procure uma pessoa, um campo de atuação ou uma obra, e siga a partir daí.</p>
      </div>
      <div id="aoRoot"></div>
    </div>
  </section>

  <!-- ---------- PANORAMA DO AUTOR ---------- -->
  <section class="view hidden" id="view-panorama" data-view="panorama">
    <div class="wrap section">
      <div id="panRoot"></div>
    </div>
  </section>

  <!-- ---------- OBRA ---------- -->
  <section class="view hidden" id="view-obra" data-view="obra">
    <div class="wrap section">
      <div id="obraRoot"></div>
    </div>
  </section>

  <!-- ---------- ESCREVER ---------- -->
  <section class="view hidden" id="view-escrever" data-view="escrever">
    <div class="wrap section">
      <div class="section-head">
        <span class="eyebrow">seu espaço</span>
        <h2 class="section-title">Escrever</h2>
        <p class="section-sub">Escreva um relato e escolha o fundo, a imagem e a música. Depois, guarde só para você ou publique na comunidade.</p>
      </div>
      <div id="escRoot"></div>
    </div>
  </section>`;
  main.insertAdjacentHTML('beforeend', html);

  /* --- itens de navegação --- */
  const mainNav = document.querySelector('.main-nav');
  if (mainNav) {
    const com = mainNav.querySelector('[data-nav="comunidade"]');
    const a = document.createElement('button');
    a.className = 'nav-link';
    a.dataset.nav = 'autores';
    a.textContent = 'Autores & Obras';
    const e = document.createElement('button');
    e.className = 'nav-link';
    e.dataset.nav = 'escrever';
    e.textContent = 'Escrever';
    mainNav.insertBefore(a, mainNav.querySelector('[data-nav="descubra"]') || com);
    mainNav.insertBefore(e, com);
  }
  const mob = document.querySelector('#mobileMenu nav');
  if (mob) {
    const com = mob.querySelector('[data-nav="comunidade"]');
    const a = document.createElement('button');
    a.className = 'nav-link';
    a.dataset.nav = 'autores';
    a.textContent = 'Autores & Obras';
    const e = document.createElement('button');
    e.className = 'nav-link';
    e.dataset.nav = 'escrever';
    e.textContent = 'Escrever';
    mob.insertBefore(a, mob.querySelector('[data-nav="descubra"]') || com);
    mob.insertBefore(e, com);
  }
  const bn = document.querySelector('.bottom-nav');
  if (bn) {
    const mk = (nav, label, ico) => {
      const b = document.createElement('button');
      b.className = 'bn-item';
      b.dataset.nav = nav;
      b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${F5_ICONS[ico]}</svg>${label}`;
      return b;
    };
    // Barra de 5 itens (Etapa 3 do redesign): Início, Explorar, Autores, Escrever e "Mais".
    // Autores e Escrever já vêm no index.html; só entram aqui se faltarem. Descubra, Histórias,
    // Comunidade e Perfil ficam no menu lateral, aberto pelo "Mais".
    const mais = document.getElementById('bnMais');
    if (!bn.querySelector('[data-nav="autores"]')) bn.insertBefore(mk('autores', 'Autores', 'livro'), mais);
    if (!bn.querySelector('[data-nav="escrever"]'))
      bn.insertBefore(mk('escrever', 'Escrever', 'lapis'), mais);
  }

  /* liga os novos botões (os antigos já foram ligados no carregamento) */
  document.querySelectorAll('[data-nav]:not([data-f5wired])').forEach((el) => {
    el.dataset.f5wired = '1';
    el.addEventListener('click', () => navigateTo(el.dataset.nav));
  });
}

/* ================================================================
   AUTORES & OBRAS — fluxo de pesquisa
   ================================================================ */
const aoState = { modo: null, q: '', vis: 'autores' };

function aoCardAutor(nome) {
  const i = autorInfo(nome);
  const temObras = i.obras.length > 0;
  /* Etapa 6 do redesign: retrato, nome em serifa condensada e papel; a placa leva o nome */
  return `
  <article class="ao-card">
    <div class="ao-card-top">
      <div class="ao-thumb">
        ${photoImgHTML(i.nome, 'card', 180)}
        <div class="avatar-fallback" style="display:none;">${initials(i.nome)}</div>
      </div>
      <div style="min-width:0;">
        <h3 class="ao-name">${escapeHtml(i.nome)}</h3>
        <p class="ao-role">${escapeHtml(i.papel)}</p>
        ${temObras ? '' : '<p class="ao-none">Sem obras catalogadas</p>'}
      </div>
    </div>
    <div class="ao-actions">
      <button class="ao-btn primary" data-pan="${escapeHtml(i.nome)}">Conhecer ${escapeHtml(i.nome)}</button>
      ${temObras ? `<button class="ao-btn" data-verobras="${escapeHtml(i.nome)}">Ver obras</button>` : ''}
    </div>
  </article>`;
}
function aoCardObra(o) {
  const t = tipoObra(o.tipo);
  /* Etapa 6 do redesign: o tipo e o ano viram rótulo; sem o selo colorido */
  return `
  <article class="obra-card">
    <div class="obra-head">
      <div style="min-width:0;">
        <span class="obra-tipo">${escapeHtml(t.nome)}${o.ano ? ' · ' + escapeHtml(String(o.ano)) : ''}</span>
        <h3 class="obra-title">${escapeHtml(o.t)}</h3>
        <p class="obra-author">${escapeHtml(o.autor)}</p>
      </div>
    </div>
    <p class="obra-desc">${escapeHtml(o.d)}</p>
    <div class="ao-actions">
      <button class="ao-btn primary" data-obra="${o.oid}">Conhecer a obra</button>
      <button class="ao-btn" data-comprar="${o.oid}">${f5svg('carrinho', 15)} Comprar</button>
    </div>
  </article>`;
}

function renderAutoresObras() {
  const root = document.getElementById('aoRoot');
  if (!root) return;
  /* Etapa 6 do redesign: a busca aparece direto (antes havia a escolha "Autor" ou "Obras / Campo",
     um clique a mais). A mesma busca acha pessoas, campos e obras; as abas trocam a lista. */
  aoState.modo = 'obras';
  root.innerHTML = `
    <label class="f5-label" for="aoInput">Pesquisar no acervo</label>
    <div class="f5-search">
      ${f5svg('busca', 19)}
      <input type="text" id="aoInput" autocomplete="off" value="${escapeHtml(aoState.q)}"
        placeholder="Nome, campo de atuação ou obra">
    </div>
    <div class="ao-mode" role="group" aria-label="Mostrar">
      <button class="ao-tab ${aoState.vis === 'autores' ? 'on' : ''}" data-vis="autores" aria-pressed="${aoState.vis === 'autores'}">Pessoas</button>
      <button class="ao-tab ${aoState.vis === 'obras' ? 'on' : ''}" data-vis="obras" aria-pressed="${aoState.vis === 'obras'}">Obras</button>
    </div>
    <div id="aoResults"></div>`;

  const input = document.getElementById('aoInput');
  let tm = null;
  input.addEventListener('input', () => {
    aoState.q = input.value;
    clearTimeout(tm);
    tm = setTimeout(aoRenderResultados, 170);
  });
  root.querySelectorAll('[data-vis]').forEach((b) =>
    b.addEventListener('click', () => {
      aoState.vis = b.dataset.vis;
      renderAutoresObras();
      setTimeout(() => {
        const i = document.getElementById('aoInput');
        if (i) {
          i.focus();
          i.setSelectionRange(i.value.length, i.value.length);
        }
      }, 50);
    })
  );
  /* o índice de A a Z tem 500 nomes: um ouvinte só, na raiz */
  if (!root.dataset.indiceLigado) {
    root.dataset.indiceLigado = '1';
    root.addEventListener('click', (e) => {
      const b = e.target.closest('[data-indice]');
      if (b) abrirPanorama(b.dataset.indice);
      const letra = e.target.closest('[data-letra]');
      if (letra) {
        const alvo = document.getElementById('ao-letra-' + letra.dataset.letra);
        // os grupos fora da tela não são desenhados (telas/movimento.css) e medem uma altura
        // estimada: são desenhados antes do salto, para o salto parar na letra certa
        root.querySelectorAll('.ao-grupo').forEach((g) => (g.style.contentVisibility = 'visible'));
        if (alvo)
          alvo.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
      }
    });
  }
  aoRenderResultados();
}

function aoSugestoes() {
  const nomes = [
    'Fernando Pessoa',
    'Machado de Assis',
    'Clarice Lispector',
    'Marco Aurélio',
    'Marie Curie',
    'Nelson Mandela'
  ];
  return `<div class="ao-list">${nomes
    .filter((n) => AUTOR_INDEX.has(canonAuthor(n)))
    .map(aoCardAutor)
    .join('')}</div>`;
}
function aoSugestoesCampo() {
  const campos = [
    'Literatura',
    'Filosofia',
    'Ciência',
    'Negócios',
    'Psicologia',
    'Arte',
    'Esporte',
    'Religião'
  ];
  return `<div class="ao-mode" style="flex-wrap:wrap;">${campos.map((c) => `<button class="ao-tab" data-campo="${c}">${c}</button>`).join('')}</div>`;
}
function aoWire(scope) {
  scope.querySelectorAll('[data-campo]').forEach((b) =>
    b.addEventListener('click', () => {
      aoState.q = b.dataset.campo;
      const i = document.getElementById('aoInput');
      if (i) i.value = aoState.q;
      aoRenderResultados();
    })
  );
  scope
    .querySelectorAll('[data-pan]')
    .forEach((b) => b.addEventListener('click', () => abrirPanorama(b.dataset.pan)));
  scope
    .querySelectorAll('[data-verobras]')
    .forEach((b) => b.addEventListener('click', () => abrirPanorama(b.dataset.verobras, 'obras')));
  scope
    .querySelectorAll('[data-obra]')
    .forEach((b) => b.addEventListener('click', () => abrirObra(b.dataset.obra)));
  scope.querySelectorAll('[data-comprar]').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const o = OBRA_POR_ID[b.dataset.comprar];
      if (o) acionarComprar(o.autor, o.t);
    })
  );
  /* fotos com fallback */
  scope.querySelectorAll('.ao-thumb img').forEach((img) => {
    img.loading = 'lazy';
  });
}

/* ----------------------------------------------------------------
   BOTÃO "COMPRAR"
   Nesta etapa é só elemento visual e estrutural. Nenhuma loja,
   nenhum link de afiliado, nenhum rastreamento. O ponto de entrada
   abaixo existe justamente para receber a função depois, sem que
   nada da interface precise ser refeito.
   ---------------------------------------------------------------- */
window.MEMOTIVA_COMPRAR = window.MEMOTIVA_COMPRAR || null;
function acionarComprar(autor, titulo) {
  if (typeof window.MEMOTIVA_COMPRAR === 'function') {
    try {
      window.MEMOTIVA_COMPRAR({ autor, titulo });
      return;
    } catch (e) {
      /* segue para o aviso */
    }
  }
  toast('A função do botão Comprar ainda será definida em uma próxima etapa.', 3200);
}

/* ================================================================
   PANORAMA DO AUTOR
   ================================================================ */
let panAtual = null;

let panVoltarPara = 'autores';
