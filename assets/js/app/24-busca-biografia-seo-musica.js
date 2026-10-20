/* MeMotiva — app/24-busca-biografia-seo-musica.js
   Fase 6 — busca inteligente, biografia em tela cheia, páginas de obra/pessoa, SEO e música.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 6 — BUSCA INTELIGENTE, CURADORIA, BIOGRAFIAS EXPANDIDAS,
   PÁGINA DA OBRA, FILTROS DE PRODUÇÃO E TRILHAS SONORAS
   ----------------------------------------------------------------
   Módulo aditivo: nada anterior é apagado. As funções que precisam
   mudar são redefinidas aqui, como nas fases 2 a 5.
   ================================================================ */

/* ================================================================
   1. BUSCA INTELIGENTE — usada por TODOS os campos de busca do site
   ----------------------------------------------------------------
   Tolera maiúsculas, acentos, letras trocadas, letras faltando,
   letras a mais e inversões. "EDUCASAO" acha "Educação";
   "FERNANDO PESOA" acha "Fernando Pessoa"; "GRASILIO RAMOS" acha
   "Graciliano Ramos".
   ================================================================ */
const _memoNorm = new Map(),
  _memoFone = new Map();
function bNorm(s) {
  const chave = String(s == null ? '' : s);
  const cache = _memoNorm.get(chave);
  if (cache !== undefined) return cache;
  const v = _bNormCalc(chave);
  if (_memoNorm.size < 40000) _memoNorm.set(chave, v);
  return v;
}
function _bNormCalc(s) {
  return String(s == null ? '' : s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
/* forma fonética simplificada do português: aproxima grafias que
   soam igual (ss/ç/s, z/s, k/qu/c, ph/f, x/ch, lh, nh, w/v, y/i) */
function bFone(s) {
  const chave = String(s == null ? '' : s);
  const cache = _memoFone.get(chave);
  if (cache !== undefined) return cache;
  const v = _bFoneCalc(chave);
  if (_memoFone.size < 40000) _memoFone.set(chave, v);
  return v;
}
function _bFoneCalc(s) {
  let t = bNorm(s);
  t = t.replace(/ph/g, 'f').replace(/lh/g, 'l').replace(/nh/g, 'n');
  t = t.replace(/ch/g, 'x').replace(/sh/g, 'x');
  t = t.replace(/qu/g, 'k').replace(/[qc]/g, 'k').replace(/k+/g, 'k');
  t = t.replace(/ss/g, 's').replace(/[çz]/g, 's');
  t = t.replace(/w/g, 'v').replace(/y/g, 'i');
  t = t.replace(/h/g, '');
  t = t.replace(/(.)\1+/g, '$1');
  return t;
}
/* distância de Damerau-Levenshtein com corte antecipado */
function bDist(a, b, teto) {
  if (a === b) return 0;
  const la = a.length,
    lb = b.length;
  if (Math.abs(la - lb) > teto) return teto + 1;
  if (!la) return lb;
  if (!lb) return la;
  let ant2 = null,
    ant = new Array(lb + 1),
    atual = new Array(lb + 1);
  for (let j = 0; j <= lb; j++) ant[j] = j;
  for (let i = 1; i <= la; i++) {
    atual[0] = i;
    let melhor = atual[0];
    for (let j = 1; j <= lb; j++) {
      const custo = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(atual[j - 1] + 1, ant[j] + 1, ant[j - 1] + custo);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, ant2[j - 2] + 1);
      atual[j] = v;
      if (v < melhor) melhor = v;
    }
    if (melhor > teto) return teto + 1;
    ant2 = ant;
    ant = atual;
    atual = new Array(lb + 1);
  }
  return ant[lb];
}
function bTeto(n) {
  if (n <= 3) return 0;
  if (n <= 5) return 1;
  if (n <= 8) return 2;
  if (n <= 12) return 3;
  return 4;
}
/* pontuação de uma palavra da consulta contra uma palavra do alvo */
function bPontuaPalavra(alvoPal, termo) {
  if (alvoPal === termo) return 100;
  if (alvoPal.startsWith(termo)) return 92 - Math.min(10, alvoPal.length - termo.length);
  if (termo.length >= 4 && alvoPal.includes(termo)) return 74;
  const fa = bFone(alvoPal),
    ft = bFone(termo);
  if (fa === ft) return 88;
  if (ft.length >= 3 && fa.startsWith(ft)) return 80;
  const teto = bTeto(termo.length);
  if (teto > 0) {
    const d = bDist(alvoPal, termo, teto);
    if (d <= teto) return 72 - d * 9;
    const df = bDist(fa, ft, teto);
    if (df <= teto) return 66 - df * 9;
    /* erro no meio de uma palavra longa: compara só o começo */
    if (termo.length >= 6 && alvoPal.length >= 6) {
      const dp = bDist(alvoPal.slice(0, termo.length), termo, teto);
      if (dp <= teto) return 60 - dp * 8;
    }
  }
  return 0;
}
/* pontua a consulta inteira contra um texto alvo.
   `inicial` liga a regra de inicial: com 1 ou 2 letras, só entra
   quem realmente começa com elas. */
function bPontua(alvo, consulta, opc) {
  opc = opc || {};
  const alvoN = bNorm(alvo);
  const cN = bNorm(consulta);
  if (!cN) return opc.vazioZero ? 0 : 1;
  if (!alvoN) return 0;

  /* --- regra da inicial --- */
  if (cN.length <= 2 && !cN.includes(' ')) {
    const palavras = alvoN.split(' ');
    if (alvoN.startsWith(cN)) return 100;
    if (palavras.some((p) => p.startsWith(cN))) return 84;
    return 0; /* nada de resultados espalhados */
  }

  if (alvoN === cN) return 130;
  if (alvoN.startsWith(cN)) return 118;
  if (alvoN.includes(cN)) return 104;

  const alvoPal = alvoN.split(' ').filter(Boolean);
  const termos = cN.split(' ').filter(Boolean);
  let soma = 0;
  for (const t of termos) {
    let melhor = 0;
    for (const p of alvoPal) {
      const v = bPontuaPalavra(p, t);
      if (v > melhor) melhor = v;
      if (melhor === 100) break;
    }
    if (!melhor) return 0; /* toda palavra da busca precisa casar */
    soma += melhor;
  }
  const media = soma / termos.length;
  return Math.round(media * (termos.length > 1 ? 1.05 : 1));
}
/* mantém o nome antigo funcionando, agora com tolerância a erro */

/* ================================================================
   2. CURADORIA — procedência limpa e honesta
   ----------------------------------------------------------------
   7.1 do prompt: o usuário nunca deve ler "seção não confirmada".
   Quando não há seção confirmada, aparece só a obra.
   ================================================================ */
const RE_NAO_CONFIRMADO = /\s*[—–-]\s*[^—–-]*n[ãa]o\s+confirmad[oa]s?\s*$/i;
function limparProcedencia(src) {
  if (!src) return '';
  let s = String(src);
  s = s.replace(RE_NAO_CONFIRMADO, '');
  s = s.replace(
    /\s*,\s*(se[çc][ãa]o|sess[ãa]o|cap[íi]tulo|volume|t[íi]tulo|refer[êe]ncia|passagem|numera[çc][ãa]o|quest[ãa]o|proposi[çc][ãa]o|coletânea|coletanea|obra)\s+n[ãa]o\s+confirmad[oa]s?\s*$/i,
    ''
  );
  s = s.replace(/\s*\(\s*[^)]*n[ãa]o\s+confirmad[oa]s?\s*\)\s*$/i, '');
  s = s
    .replace(/\s*[—–-]\s*$/, '')
    .replace(/\s*,\s*$/, '')
    .trim();
  return s;
}
/* aplica a limpeza no banco inteiro, guardando o original para auditoria */
let _limpezaProc = 0;
QUOTES.forEach((q) => {
  if (!q.src) return;
  const novo = limparProcedencia(q.src);
  if (novo !== q.src) {
    q.srcBruto = q.src;
    q.src = novo;
    _limpezaProc++;
  }
});

/* ---- procedência exibida na expansão ---- */
function procedenciaHTML(q) {
  const rot = STATUS_ROTULO[q.st] || STATUS_ROTULO.R;
  let out = '';
  if (q.src) out += `<span class="expand-src">${escapeHtml(q.src)}</span>`;
  if (rot.texto) out += `<span class="expand-src ${rot.classe}">${escapeHtml(rot.texto)}</span>`;
  if (q.autorAnterior)
    out += `<span class="expand-src src-alerta">Circula como frase de ${escapeHtml(q.autorAnterior)}.</span>`;
  if (q.vn > 1)
    out += `<span class="expand-src src-nota">${q.vn} traduções desta mesma passagem no acervo.</span>`;
  return out;
}

/* ================================================================
   3. BIOGRAFIA EM TELA CHEIA
   ----------------------------------------------------------------
   O cartão de biografia passa a abrir como as frases do Explorar:
   ocupando a tela, com o texto distribuído em colunas para leitura
   confortável no desktop e em coluna única no celular.
   ================================================================ */
let bioAberta = null;
function bioOverlay() {
  let ov = document.getElementById('bioExpand');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'bio-overlay';
    ov.id = 'bioExpand';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.innerHTML = `<div class="bio-sheet" id="bioSheet"></div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', (e) => {
      if (e.target === ov) fecharBiografia();
    });
  }
  return ov;
}
function abrirBiografiaExpandida(id) {
  const s = STORIES.find((x) => x.id === id);
  if (!s) {
    toast('Biografia não encontrada.');
    return;
  }
  bioAberta = id;
  const ov = bioOverlay();
  const box = document.getElementById('bioSheet');
  const cat = catById(s.cat);
  const tags = (s.profiles || []).map((p) => profileById(p)).filter(Boolean);
  const i = autorInfo(s.author);
  const paragrafos = String(s.text).split(/\n\n+/).filter(Boolean);
  const idAudio = 'bioexp_' + s.id;

  box.innerHTML = `
    <button class="expand-close bio-close" id="bioClose" aria-label="Fechar biografia">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <div class="bio-scroll">
      <header class="bio-hero">
        <div class="bio-foto" id="bioFoto" role="button" tabindex="0" aria-label="Ampliar fotografia">
          ${photoImgHTML(s.author, 'card', 560)}
          <div class="avatar-fallback" style="display:none; background:${colorForName(s.author)};">${initials(s.author)}</div>
        </div>
        <div class="bio-hero-id">
          ${cat ? `<span class="bio-eyebrow">${escapeHtml(cat.name)}</span>` : ''}
          <h2 class="bio-titulo">${escapeHtml(s.title)}</h2>
          <p class="bio-nome">${escapeHtml(s.author)}</p>
          ${s.role ? `<p class="bio-papel">${escapeHtml(s.role)}</p>` : ''}
          ${tags.length ? `<div class="pan-tags">${tags.map((t) => `<span class="discover-tag">${escapeHtml(t.name)}</span>`).join('')}</div>` : ''}
          <p class="bio-resumo">${escapeHtml(s.excerpt)}</p>
          <div class="bio-hero-acoes">
            <button class="ao-btn primary" id="bioMais">${f5svg('livro', 15)} Mais informações</button>
            ${i.frases.length ? `<button class="ao-btn" id="bioFrases">Ver ${i.frases.length} ${i.frases.length === 1 ? 'frase' : 'frases'}</button>` : ''}
          </div>
        </div>
      </header>

      <div class="pan-audio bio-audio">
        <button class="play-btn" data-story-play="${idAudio}" aria-label="Reproduzir narração">${playIconSVG()}</button>
        <select class="voice-select" data-voice-for="${idAudio}">
          <option value="female">Voz feminina</option>
          <option value="male">Voz masculina</option>
        </select>
        <span class="audio-status" data-status-for="${idAudio}">Toque para ouvir</span>
      </div>

      <div class="bio-corpo">
        ${paragrafos.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
      </div>

      <div class="bio-rodape">
        <p>Quer ir mais fundo nessa pessoa — obras, contribuições, cronologia e todas as frases?</p>
        <button class="ao-btn primary" id="bioMais2">${f5svg('seta', 15)} Mais informações em Autores &amp; Obras</button>
      </div>
    </div>`;

  ov.classList.add('show');
  lockScroll();
  document.getElementById('bioClose').addEventListener('click', fecharBiografia);
  const irPan = () => {
    fecharBiografia();
    abrirPanorama(s.author);
  };
  document.getElementById('bioMais').addEventListener('click', irPan);
  document.getElementById('bioMais2').addEventListener('click', irPan);
  const bf = document.getElementById('bioFrases');
  if (bf)
    bf.addEventListener('click', () => {
      fecharBiografia();
      abrirPanorama(s.author, 'frases');
    });
  const foto = document.getElementById('bioFoto');
  const go = () => openPhotoModal(s.author);
  foto.addEventListener('click', go);
  foto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go();
    }
  });
  const play = box.querySelector('[data-story-play]');
  if (play)
    play.addEventListener('click', () => {
      toggleStoryAudio(
        idAudio,
        `${s.title}. ${s.text}`,
        play,
        box.querySelector('[data-status-for]'),
        box.querySelector('[data-voice-for]')
      );
    });
  requestAnimationFrame(() => document.getElementById('bioClose').focus());
}
function fecharBiografia() {
  const ov = document.getElementById('bioExpand');
  if (ov) ov.classList.remove('show');
  bioAberta = null;
  unlockScroll();
  try {
    if (_narracao && _narracao.id && String(_narracao.id).startsWith('bioexp_')) {
      _narracao.cancelada = true;
      speechSynthesis.cancel();
    }
  } catch (e) {}
}
/* "Ler biografia completa" passa a abrir a tela cheia */
function wireStoryCards(scope) {
  scope.querySelectorAll('[data-story-toggle]:not([data-wired])').forEach((btn) => {
    btn.dataset.wired = '1';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.story-card');
      abrirBiografiaExpandida(card.dataset.storyId || btn.dataset.storyToggle);
    });
    btn.textContent = 'Ler biografia completa ↗';
  });
  scope.querySelectorAll('[data-story-play]:not([data-wired])').forEach((btn) => {
    btn.dataset.wired = '1';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.storyPlay;
      const card = btn.closest('.story-card');
      const statusEl = card.querySelector('[data-status-for]');
      const voiceSel = card.querySelector('[data-voice-for]');
      const story = STORIES.find((s) => s.id === id);
      if (story) toggleStoryAudio(id, `${story.title}. ${story.text}`, btn, statusEl, voiceSel);
    });
  });
  scope.querySelectorAll('.story-cover[data-open-photo]:not([data-wired])').forEach((el) => {
    el.dataset.wired = '1';
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
  /* o cartão inteiro abre a biografia */
  scope.querySelectorAll('.story-card:not([data-wiredcard])').forEach((card) => {
    card.dataset.wiredcard = '1';
    card.addEventListener('click', (e) => {
      if (e.target.closest('button, select, a')) return;
      abrirBiografiaExpandida(card.dataset.storyId);
    });
  });
}
/* o cartão não precisa mais guardar o texto inteiro escondido */
function storyCardHTML(s) {
  const cat = catById(s.cat);
  const tags = (s.profiles || [])
    .map((p) => profileById(p))
    .filter(Boolean)
    .slice(0, 3);
  return `
  <article class="story-card reveal" data-story-id="${s.id}" tabindex="0" role="button"
           aria-label="Abrir biografia de ${escapeHtml(s.author)}">
    ${storyCoverHTML(s)}
    <div class="story-body">
      <span class="story-cat">${cat ? cat.name : ''}</span>
      <h3 class="story-title">${escapeHtml(s.title)}</h3>
      <p class="story-author-line">${escapeHtml(s.author)}${s.role ? ' · ' + escapeHtml(s.role) : ''}</p>
      ${tags.length ? `<div class="story-profiles">${tags.map((t) => `<span class="discover-tag">${escapeHtml(t.name)}</span>`).join('')}</div>` : ''}
      <p class="story-excerpt">${escapeHtml(s.excerpt)}</p>
      <button class="story-toggle" data-story-toggle="${s.id}">Ler biografia completa ↗</button>
      <div class="story-audio">
        <button class="play-btn" data-story-play="${s.id}" aria-label="Reproduzir narração">${playIconSVG()}</button>
        <select class="voice-select" data-voice-for="${s.id}">
          <option value="female">Voz feminina</option>
          <option value="male">Voz masculina</option>
        </select>
        <span class="audio-status" data-status-for="${s.id}">Toque para ouvir</span>
      </div>
    </div>
  </article>`;
}
/* "Saiba mais" volta a existir e abre a biografia certa, já expandida */
function openBiography(id) {
  abrirBiografiaExpandida(id);
}

/* ================================================================
   4. CATEGORIAS DE PRODUÇÃO
   Um autor só recebe o filtro que ele realmente tem. Fernando Pessoa
   não ganha "Projetos"; Einstein não ganha "Poemas".
   ================================================================ */
const CAT_PRODUCAO = [
  { id: 'livros', nome: 'Livros', tipos: ['livro', 'romance', 'conto', 'manual', 'prosa'] },
  { id: 'poesia', nome: 'Poesia', tipos: ['poesia'] },
  { id: 'ensaios', nome: 'Ensaios', tipos: ['ensaio', 'cronica'] },
  { id: 'tratados', nome: 'Tratados e filosofia', tipos: ['tratado', 'filosofia', 'dialogo', 'aforismo'] },
  { id: 'teatro', nome: 'Teatro', tipos: ['teatro'] },
  { id: 'cartas', nome: 'Cartas, diários e memórias', tipos: ['carta', 'diario', 'memoria'] },
  { id: 'discursos', nome: 'Discursos', tipos: ['discurso'] },
  { id: 'sagrados', nome: 'Textos sagrados', tipos: ['sagrado'] },
  { id: 'pesquisas', nome: 'Pesquisas e artigos', tipos: ['ciencia', 'artigo'] },
  { id: 'invencoes', nome: 'Invenções', tipos: ['invento'] },
  { id: 'feitos', nome: 'Feitos e realizações', tipos: ['feito'] },
  { id: 'artes', nome: 'Artes visuais', tipos: ['pintura', 'desenho', 'escultura'] },
  { id: 'musica', nome: 'Música', tipos: ['musica'] },
  { id: 'cinema', nome: 'Cinema', tipos: ['filme'] },
  { id: 'biografias', nome: 'Biografias', tipos: ['biografia'] },
  { id: 'traducoes', nome: 'Traduções', tipos: ['tradução'] }
];
const _TIPO2CAT = (() => {
  const m = {};
  CAT_PRODUCAO.forEach((c) => c.tipos.forEach((t) => (m[t] = c.id)));
  return m;
})();
function catProducao(tipo) {
  return _TIPO2CAT[tipo] || 'livros';
}
function catsDoAutor(nome) {
  const lista = obrasDe(nome);
  const conta = {};
  lista.forEach((o) => {
    const c = catProducao(o.tipo);
    conta[c] = (conta[c] || 0) + 1;
  });
  /* só entram categorias que realmente têm conteúdo */
  return CAT_PRODUCAO.filter((c) => conta[c.id] > 0).map((c) => ({ ...c, n: conta[c.id] }));
}

/* ================================================================
   5. BUSCA DE AUTORES E OBRAS — agora com tolerância a erro,
   respeito à inicial e filtro de campo correto
   ================================================================ */

/* Reconhecimento de campo de atuação.
   A versão anterior aceitava qualquer prefixo comum: "FERNANDO
   PESSOA" casava com o campo Religião só porque "fe" é um apelido
   dele. Agora exige que a palavra inteira se pareça com o nome do
   campo, tolerando erro de digitação — "EDUCASAO" acha Educação,
   "psicolojia" acha Psicologia, e nomes de pessoas não caem em
   campo nenhum. */
function camposDaBusca(q) {
  const bruto = bNorm(q);
  if (bruto.length < 4) return []; /* inicial não é campo */
  const termos = bruto.split(' ').filter((t) => t.length >= 4);
  if (!termos.length) return [];
  const out = [];
  Object.entries(CAMPO_ALIAS).forEach(([id, palavras]) => {
    const p = profileById(id);
    const alvos = [p ? p.name : '', ...palavras].map(bNorm).filter((a) => a.length >= 5);
    const casa = alvos.some((a) => bPontua(a, bruto) >= 92 || termos.some((t) => bPontuaPalavra(a, t) >= 62));
    if (casa) out.push(id);
  });
  return [...new Set(out)];
}
function buscarAutores(q, limite) {
  limite = limite || 400;
  const consulta = String(q || '').trim();
  const campos = camposDaBusca(consulta);
  const res = [];
  AUTOR_INDEX.forEach((v, c) => {
    let score = 0;
    if (consulta) {
      score = bPontua(c, consulta);
      if (!score && bNorm(consulta).length >= 3) {
        /* o nome não bate: tenta papel e obras, com peso menor.
           Com uma ou duas letras isso não vale: a busca por inicial
           precisa devolver só quem começa com aquela letra. */
        const pp = bPontua(papelDe(c), consulta);
        if (pp >= 100) score = 34;
        if (!score) {
          const obras = obrasDe(c);
          for (const o of obras) {
            const po = bPontua(o.t, consulta);
            if (po >= 100) {
              score = 44;
              break;
            }
          }
        }
      }
    }
    /* campo de atuação: só entra quem PERTENCE ao campo.
       Ter uma frase sobre o assunto não coloca a pessoa no campo. */
    const perfis = authorProfiles(c);
    const doCampo = campos.length && perfis.some((p) => campos.includes(p));
    if (campos.length) {
      if (!doCampo && score < 100) return; /* nome exato ainda passa */
      if (doCampo) score = Math.max(score, 96);
    }
    if (!consulta && !campos.length) score = 1;
    if (score <= 0) return;
    if (v.story) score += 12;
    if (obrasDe(c).length) score += 7;
    score += Math.min(10, v.frases.length / 8);
    res.push({ nome: c, score });
  });
  res.sort((a, b) => b.score - a.score || a.nome.localeCompare(b.nome, 'pt'));
  return res.slice(0, limite).map((r) => r.nome);
}

function buscarObras(q, opc) {
  opc = opc || {};
  const consulta = String(q || '').trim();
  const campos = camposDaBusca(consulta);
  const res = [];
  Object.entries(OBRAS).forEach(([autor, lista]) => {
    const perfis = authorProfiles(autor);
    const doCampo = campos.length && perfis.some((p) => campos.includes(p));
    const pAutor = consulta ? bPontua(autor, consulta) : 0;
    lista.forEach((o) => {
      let score = 0;
      if (consulta) {
        score = bPontua(o.t, consulta);
        if (pAutor >= 100) score = Math.max(score, 96);
        if (!score && o.d && bNorm(o.d).includes(bNorm(consulta)) && consulta.length > 4) score = 30;
      }
      if (campos.length) {
        if (!doCampo && score < 100) return;
        if (doCampo) score = Math.max(score, 90);
      }
      if (!consulta && !campos.length) score = 1;
      if (score <= 0) return;
      if (!o.citada) score += 10;
      if (o.tipo === 'feito') score -= 3;
      res.push({ o, score });
    });
  });
  res.sort((a, b) => b.score - a.score || a.o.t.localeCompare(b.o.t, 'pt'));
  if (opc.todos) return res.slice(0, 600).map((r) => r.o);
  /* na navegação por campo, mistura autores para a tela não virar
     a estante de uma pessoa só — mas nada é descartado: existe o
     botão "mostrar todas" */
  const porAutor = {},
    fora = [];
  res.forEach((r) => {
    const k = r.o.autor;
    porAutor[k] = (porAutor[k] || 0) + 1;
    if (porAutor[k] <= 6) fora.push(r.o);
  });
  return { lista: fora.slice(0, 240), total: res.length };
}

/* ================================================================
   6. SUGESTÕES AO FIM DE UM FILTRO (4.3)
   ================================================================ */
function sugestoesDeCampo(camposAtuais, modo) {
  const atuais = new Set(camposAtuais || []);
  if (modo === 'obras') {
    const cats = [
      ['Literatura', 'literatura'],
      ['Filosofia', 'filosofos'],
      ['Ciência', 'cientistas'],
      ['Poesia', 'literatura'],
      ['Negócios', 'empresarios'],
      ['Psicologia', 'psicologos'],
      ['Política', 'politicos'],
      ['Arte', 'artistas'],
      ['Religião', 'religiosos'],
      ['Educação', 'educadores']
    ];
    return cats
      .filter(([, id]) => !atuais.has(id))
      .slice(0, 6)
      .map((x) => x[0]);
  }
  const nomes = PROFILES.filter((p) => !atuais.has(p.id))
    .filter((p) => {
      let n = 0;
      AUTOR_INDEX.forEach((v, c) => {
        if (authorProfiles(c).includes(p.id)) n++;
      });
      return n >= 4;
    })
    .map((p) => p.name);
  /* embaralha de forma estável por dia, para não repetir sempre os mesmos */
  const dia = Math.floor(Date.now() / 86400000);
  return nomes
    .slice(0, 12)
    .sort((a, b) => ((a.length * 7 + dia) % 13) - ((b.length * 7 + dia) % 13))
    .slice(0, 6);
}
function fimDoFiltroHTML(campos, modo) {
  const sug = sugestoesDeCampo(campos, modo);
  if (!sug.length) return '';
  return `
  <div class="fim-filtro">
    <p>Você chegou ao fim nesse filtro. Deseja explorar:</p>
    <div class="fim-chips">
      ${sug.map((s) => `<button class="ao-tab" data-campo="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join('')}
    </div>
  </div>`;
}

/* ================================================================
   7. RESULTADOS DE AUTORES & OBRAS — sem limite artificial
   ================================================================ */
let aoMostrarTodas = false;
function aoRenderResultados() {
  const box = document.getElementById('aoResults');
  if (!box) return;
  const q = aoState.q.trim();
  const ehAutor = aoState.modo === 'autor';
  const mostrarObras = !ehAutor && aoState.vis === 'obras';
  const campos = camposDaBusca(q);

  if (!q) {
    box.innerHTML = ehAutor
      ? `<p class="ao-hint">Digite o nome de quem você quer conhecer. Exemplo: <b>Fernando Pessoa</b>. A busca entende maiúsculas, acentos e pequenos erros de digitação.</p>${aoSugestoes()}`
      : `<p class="ao-hint">Digite um campo (<b>Literatura</b>, <b>Filosofia</b>, <b>Ciência</b>, <b>Negócios</b>…) ou o nome de uma obra.</p>${aoSugestoesCampo()}`;
    aoWire(box);
    return;
  }

  if (mostrarObras) {
    const r = buscarObras(q, { todos: aoMostrarTodas });
    const lista = Array.isArray(r) ? r : r.lista;
    const total = Array.isArray(r) ? r.length : r.total;
    box.innerHTML = lista.length
      ? `<p class="f5-count">${lista.length === 1 ? '1 obra' : lista.length + ' obras'}${total > lista.length ? ` de ${total} encontradas` : ' encontradas'}</p>
         <div class="ao-list">${lista.map(aoCardObra).join('')}</div>
         ${total > lista.length ? `<div class="ao-maisbox"><button class="ao-btn" id="aoMaisObras">Mostrar todas as ${total} obras</button></div>` : ''}
         ${fimDoFiltroHTML(campos, 'obras')}`
      : `<div class="empty-state"><h3>Nenhuma obra com esse termo</h3><p>Tente outro campo ou procure pelo nome do autor.</p></div>${fimDoFiltroHTML(campos, 'obras')}`;
  } else {
    const lista = buscarAutores(q);
    box.innerHTML = lista.length
      ? `<p class="f5-count">${lista.length === 1 ? '1 pessoa encontrada' : lista.length + ' pessoas encontradas'}</p>
         <div class="ao-list">${lista.map(aoCardAutor).join('')}</div>
         ${fimDoFiltroHTML(campos, 'autores')}`
      : `<div class="empty-state"><h3>Nenhuma pessoa com esse termo</h3><p>Tente outro nome ou procure por um campo de atuação.</p></div>${fimDoFiltroHTML(campos, 'autores')}`;
  }
  aoWire(box);
  const mais = document.getElementById('aoMaisObras');
  if (mais)
    mais.addEventListener('click', () => {
      aoMostrarTodas = true;
      aoRenderResultados();
    });
}

/* ================================================================
   8. BIBLIOTECA DO AUTOR — com filtros por tipo de produção
   ================================================================ */
let panCatObra = 'all';
let panTodasFrases = false;
function bibliotecaAutorHTML(nome) {
  const lista = obrasDe(nome);
  if (!lista.length) {
    const f = feitosDe(nome);
    return `<p class="pan-empty">Obras: nenhum resultado relevante.${f.length ? ' Esta pessoa é lembrada sobretudo pelos feitos listados acima.' : ' O legado desta pessoa está registrado na trajetória e nas frases do acervo.'}</p>`;
  }
  const cats = catsDoAutor(nome);
  const filtradas = panCatObra === 'all' ? lista : lista.filter((o) => catProducao(o.tipo) === panCatObra);
  const filtros =
    cats.length > 1
      ? `<div class="obra-filtros" id="obraFiltros">
         <button class="ao-tab ${panCatObra === 'all' ? 'on' : ''}" data-catobra="all">Todas <span class="pc">${lista.length}</span></button>
         ${cats.map((c) => `<button class="ao-tab ${panCatObra === c.id ? 'on' : ''}" data-catobra="${c.id}">${escapeHtml(c.nome)} <span class="pc">${c.n}</span></button>`).join('')}
       </div>`
      : '';
  return filtros + `<div class="ao-list">${filtradas.map(aoCardObra).join('')}</div>`;
}

/* ================================================================
   9. PANORAMA DO AUTOR — mais fundo, sem limites artificiais
   ================================================================ */
function renderPanorama() {
  const root = document.getElementById('panRoot');
  if (!root) return;
  if (!panAtual) {
    root.innerHTML = `<div class="empty-state"><h3>Escolha uma pessoa</h3><p>Use Autores &amp; Obras para procurar alguém.</p></div>`;
    return;
  }
  const i = autorInfo(panAtual);
  const p = perfilProfundo(panAtual);
  const s = i.story;
  const idAudio = 'pan_' + slugify(i.nome);
  const textoBio = textoPanorama(i, p);
  const textoAudio = textoBio ? `${i.nome}. ${textoBio.replace(/<[^>]+>/g, ' ')}` : null;

  const nFrases = i.frases.length;
  const frasesMostradas = panTodasFrases ? i.frases : i.frases.slice(0, 12);
  const frasesHTML = nFrases
    ? `<div class="quote-grid">${frasesMostradas.map((idx) => quoteCardHTML(QUOTES[idx], idx)).join('')}</div>
       ${nFrases > 12 ? `<div class="ao-maisbox"><button class="ao-btn" id="panMaisFrases">${panTodasFrases ? 'Mostrar menos' : `Ver todas as ${nFrases} frases`}</button></div>` : ''}`
    : `<p class="pan-empty">Ainda não há frases desta pessoa no acervo.</p>`;

  root.innerHTML = `
    <div class="ao-bar">
      <button class="ao-back" id="panBack">${f5svg('voltar', 15)} Voltar</button>
    </div>

    <div class="pan-hero">
      <div class="pan-photo" id="panPhoto" role="button" tabindex="0" aria-label="Ampliar fotografia">
        ${photoImgHTML(i.nome, 'card', 520)}
        <div class="avatar-fallback" style="display:none; background:${colorForName(i.nome)};">${initials(i.nome)}</div>
      </div>
      <div class="pan-id">
        <h2 class="pan-name">${escapeHtml(i.nome)}</h2>
        <p class="pan-role">${escapeHtml(i.papelLimpo)}</p>
        ${p && p.resumo ? `<p class="pan-resumo">${escapeHtml(p.resumo)}</p>` : s ? `<p class="pan-resumo">${escapeHtml(s.excerpt)}</p>` : ''}
        <div class="pan-dates">
          ${i.nasc ? `<div class="pan-date"><b>Nascimento</b><span>${escapeHtml(i.nasc)}</span></div>` : ''}
          ${i.morte ? `<div class="pan-date"><b>Morte</b><span>${escapeHtml(i.morte)}</span></div>` : ''}
          ${nFrases ? `<div class="pan-date"><b>Frases no acervo</b><span>${nFrases}</span></div>` : ''}
          ${i.obras.length ? `<div class="pan-date"><b>Obras catalogadas</b><span>${i.obras.length}</span></div>` : ''}
        </div>
        ${i.perfis.length ? `<div class="pan-tags">${i.perfis.map((x) => `<span class="discover-tag">${escapeHtml(x.name)}</span>`).join('')}</div>` : ''}
      </div>
    </div>

    <div class="pan-jump">
      <button data-jump="bio">Trajetória e biografia</button>
      ${(p && p.contribuicoes && p.contribuicoes.length) || i.feitos.length ? `<button data-jump="feitos">Contribuições</button>` : ''}
      ${p && p.cronologia && p.cronologia.length ? `<button data-jump="crono">Cronologia</button>` : ''}
      <button data-jump="frases">Ver frases</button>
      <button data-jump="obras">Ver obras</button>
    </div>

    <section class="pan-sec" id="pan-bio">
      <h3>Trajetória e biografia</h3>
      ${
        textoAudio
          ? `
      <div class="pan-audio">
        <button class="play-btn" data-story-play="${idAudio}" aria-label="Reproduzir narração">${playIconSVG()}</button>
        <select class="voice-select" data-voice-for="${idAudio}">
          <option value="female">Voz feminina</option>
          <option value="male">Voz masculina</option>
        </select>
        <span class="audio-status" data-status-for="${idAudio}">Toque para ouvir</span>
      </div>`
          : ''
      }
      <div class="pan-bio">${textoBio || '<p class="pan-empty">Biografia em curadoria.</p>'}</div>
      ${s ? `<div class="ao-maisbox"><button class="ao-btn" id="panVerHistoria">Ver em Histórias</button></div>` : ''}
    </section>

    ${
      p && p.contexto
        ? `
    <section class="pan-sec" id="pan-contexto">
      <h3>Contexto histórico</h3>
      <div class="pan-bio"><p>${escapeHtml(p.contexto)}</p></div>
    </section>`
        : ''
    }

    ${
      (p && p.contribuicoes && p.contribuicoes.length) || i.feitos.length
        ? `
    <section class="pan-sec" id="pan-feitos">
      <h3>Principais contribuições</h3>
      <ul class="pan-feitos">${[...((p && p.contribuicoes) || []), ...i.feitos].map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
    </section>`
        : ''
    }

    ${
      p && p.cronologia && p.cronologia.length
        ? `
    <section class="pan-sec" id="pan-crono">
      <h3>Cronologia</h3>
      <ol class="pan-crono">${p.cronologia.map(([ano, txt]) => `<li><b>${escapeHtml(String(ano))}</b><span>${escapeHtml(txt)}</span></li>`).join('')}</ol>
    </section>`
        : ''
    }

    <section class="pan-sec" id="pan-frases">
      <h3>Frases</h3>
      ${frasesHTML}
    </section>

    <section class="pan-sec" id="pan-obras">
      <h3>Obras e produção</h3>
      ${bibliotecaAutorHTML(i.nome)}
    </section>`;

  document.getElementById('panBack').addEventListener('click', () => navigateTo(panVoltarPara || 'autores'));
  root.querySelectorAll('[data-jump]').forEach((b) =>
    b.addEventListener('click', () => {
      const el = document.getElementById('pan-' + b.dataset.jump);
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    })
  );
  const foto = document.getElementById('panPhoto');
  if (foto) {
    const go = () => openPhotoModal(i.nome);
    foto.addEventListener('click', go);
    foto.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go();
      }
    });
  }
  const btn = root.querySelector('[data-story-play]');
  if (btn && textoAudio) {
    btn.addEventListener('click', () =>
      toggleStoryAudio(
        idAudio,
        textoAudio,
        btn,
        root.querySelector('[data-status-for]'),
        root.querySelector('[data-voice-for]')
      )
    );
  }
  const vh = document.getElementById('panVerHistoria');
  if (vh && s) vh.addEventListener('click', () => abrirBiografiaExpandida(s.id));
  const mf = document.getElementById('panMaisFrases');
  if (mf)
    mf.addEventListener('click', () => {
      panTodasFrases = !panTodasFrases;
      renderPanorama();
      const el = document.getElementById('pan-frases');
      if (el) el.scrollIntoView({ block: 'start' });
    });
  root.querySelectorAll('[data-catobra]').forEach((b) =>
    b.addEventListener('click', () => {
      panCatObra = b.dataset.catobra;
      renderPanorama();
      const el = document.getElementById('pan-obras');
      if (el) el.scrollIntoView({ block: 'start' });
    })
  );
  aoWire(root);
  attachQuoteCardEvents(root);
  seoPessoa(i);
  requestAnimationFrame(observeReveals);
}
function abrirPanorama(nome, ancora) {
  panAtual = canonAuthor(nome);
  panCatObra = 'all';
  panTodasFrases = false;
  navigateTo('panorama');
  if (ancora) {
    setTimeout(() => {
      const el = document.getElementById('pan-' + ancora);
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }, 260);
  }
}

/* biografia aprofundada do panorama */
function perfilProfundo(nome) {
  return PERFIS_PROFUNDOS[canonAuthor(nome)] || null;
}
function textoPanorama(i, p) {
  if (p && p.bio && p.bio.length) return p.bio.map((t) => `<p>${escapeHtml(t)}</p>`).join('');
  if (i.story)
    return String(i.story.text)
      .split(/\n\n+/)
      .map((t) => `<p>${escapeHtml(t)}</p>`)
      .join('');
  const partes = [];
  partes.push(`${i.nome} — ${i.papelLimpo}.`);
  if (i.nasc) partes.push(i.morte ? `Viveu entre ${i.nasc} e ${i.morte}.` : `Nasceu em ${i.nasc}.`);
  if (i.obras.length)
    partes.push(
      `Tem ${i.obras.length} ${i.obras.length === 1 ? 'obra catalogada' : 'obras catalogadas'} no MeMotiva.`
    );
  if (i.frases.length)
    partes.push(`Está no acervo com ${i.frases.length} ${i.frases.length === 1 ? 'frase' : 'frases'}.`);
  partes.push(
    'A biografia completa desta pessoa ainda está em curadoria — o site prefere dizer isso a inventar um texto.'
  );
  return `<p>${escapeHtml(partes.join(' '))}</p>`;
}

/* ================================================================
   10. PÁGINA ÚNICA DA OBRA
   A obra é o eixo: do que fala, quando foi escrita, em que momento
   da vida do autor, em que contexto e por que continua importando.
   ================================================================ */
function chaveObra(o) {
  return canonAuthor(o.autor) + '||' + o.t;
}
function paginaDaObra(o) {
  const curada = OBRA_PAGINA[chaveObra(o)] || null;
  const i = autorInfo(o.autor);
  const t = tipoObra(o.tipo);
  const secoes = [];

  secoes.push({ id: 'sobre', titulo: 'Do que trata', texto: (curada && curada.sobre) || o.d });

  const ctx = (curada && curada.contexto) || contextoAutomatico(o, i);
  if (ctx) secoes.push({ id: 'contexto', titulo: 'Quando e em que contexto foi feita', texto: ctx });

  const mom = curada && curada.momento;
  if (mom) secoes.push({ id: 'momento', titulo: 'O momento do autor', texto: mom });

  const imp = (curada && curada.importancia) || importanciaAutomatica(o, i, t);
  if (imp) secoes.push({ id: 'importancia', titulo: 'Por que continua importando', texto: imp });

  if (curada && curada.curiosidade)
    secoes.push({ id: 'curiosidade', titulo: 'Vale saber', texto: curada.curiosidade });

  return secoes;
}
function seculoDe(ano) {
  const n = Number(String(ano).replace(/[^\d-]/g, ''));
  if (!n || isNaN(n)) return null;
  return Math.ceil(n / 100);
}
const PANO_SECULO = {
  16: 'o século XVI, de expansão marítima, Reforma e reorganização do saber europeu',
  17: 'o século XVII, da revolução científica e das guerras religiosas',
  18: 'o século XVIII, do Iluminismo e das revoluções americana e francesa',
  19: 'o século XIX, da industrialização, do romantismo e da formação dos Estados nacionais',
  20: 'o século XX, das duas guerras mundiais, da descolonização e da cultura de massa',
  21: 'o século XXI, da internet, da globalização e da crise climática'
};
function contextoAutomatico(o, i) {
  const partes = [];
  if (o.ano) {
    const s = seculoDe(o.ano);
    partes.push(
      typeof o.ano === 'number'
        ? `Veio a público em ${o.ano}${s && PANO_SECULO[s] ? `, em ${PANO_SECULO[s]}` : ''}.`
        : `Data de ${o.ano}.`
    );
    const nasc = Number(String(i.nasc || '').replace(/[^\d]/g, ''));
    if (typeof o.ano === 'number' && nasc && o.ano > nasc) {
      const idade = o.ano - nasc;
      if (idade > 8 && idade < 100) partes.push(`${i.nome} tinha por volta de ${idade} anos.`);
    }
  }
  if (i.nasc && i.morte)
    partes.push(`O autor viveu entre ${i.nasc} e ${i.morte}, e a obra pertence a essa trajetória.`);
  else if (i.nasc) partes.push(`O autor nasceu em ${i.nasc}.`);
  return partes.join(' ') || '';
}
function importanciaAutomatica(o, i, t) {
  const partes = [];
  if (o.citada)
    partes.push(
      `É uma das fontes mais presentes no acervo do MeMotiva: ${o.citada} ${o.citada === 1 ? 'passagem publicada aqui vem' : 'passagens publicadas aqui vêm'} desta obra.`
    );
  partes.push(
    `Está catalogada como ${t.nome.toLowerCase()} e é uma das entradas de referência para quem quer entender ${i.nome}.`
  );
  if (i.perfis.length)
    partes.push(`Costuma interessar a quem lê ${i.perfis.map((p) => p.name.toLowerCase()).join(', ')}.`);
  return partes.join(' ');
}

function renderObra() {
  const root = document.getElementById('obraRoot');
  if (!root) return;
  if (!obraAtual) {
    root.innerHTML = `<div class="empty-state"><h3>Escolha uma obra</h3><p>Use Autores &amp; Obras para procurar.</p></div>`;
    return;
  }
  const o = obraAtual;
  const t = tipoObra(o.tipo);
  const i = autorInfo(o.autor);
  const secoes = paginaDaObra(o);
  const irmas = obrasDe(o.autor)
    .filter((x) => x.oid !== o.oid)
    .slice(0, 6);
  const citacoes = i.frases
    .filter((idx) => {
      const q = QUOTES[idx];
      /* q.obra liga a frase à obra pelo título exato do catálogo quando a fonte usa
         outra forma do título ("Carta aos acionistas…" × "Cartas aos Acionistas…") */
      if (q.obra) return q.obra === o.t;
      return q.src && bNorm(q.src).startsWith(bNorm(o.t).slice(0, 12));
    })
    .slice(0, 8);

  root.innerHTML = `
    <div class="ao-bar"><button class="ao-back" id="obraBack">${f5svg('voltar', 15)} Voltar</button></div>

    <article class="obra-pagina">
      <header class="obra-cabeca">
        <div class="obra-selo" style="background:${t.cor};">${f5svg(t.ico, 32)}</div>
        <div>
          <span class="obra-meta">${escapeHtml(t.nome)}${o.ano ? ' · ' + escapeHtml(String(o.ano)) : ''}</span>
          <h1 class="obra-h1">${escapeHtml(o.t)}</h1>
          <p class="obra-sub">${escapeHtml(o.autor)} — ${escapeHtml(i.papelLimpo)}</p>
        </div>
      </header>

      <p class="obra-lead">${escapeHtml((OBRA_PAGINA[chaveObra(o)] && OBRA_PAGINA[chaveObra(o)].sobre) || o.d)}</p>

      ${secoes
        .filter((s) => s.id !== 'sobre')
        .map(
          (s) => `
        <section class="obra-sec">
          <h2>${escapeHtml(s.titulo)}</h2>
          <p>${escapeHtml(s.texto)}</p>
        </section>`
        )
        .join('')}

      ${
        citacoes.length
          ? `
      <section class="obra-sec">
        <h2>Passagens desta obra no acervo</h2>
        <div class="quote-grid">${citacoes.map((idx) => quoteCardHTML(QUOTES[idx], idx)).join('')}</div>
      </section>`
          : ''
      }

      <div class="obra-acoes">
        <button class="ao-btn primary" id="obraAutor">${f5svg('pessoa', 15)} Conhecer o autor</button>
        <button class="ao-btn" id="obraComprar">${f5svg('carrinho', 15)} Comprar</button>
      </div>

      ${
        irmas.length
          ? `
      <section class="obra-sec">
        <h2>Outras obras de ${escapeHtml(o.autor)}</h2>
        <div class="ao-list">${irmas.map(aoCardObra).join('')}</div>
      </section>`
          : ''
      }
    </article>`;

  document
    .getElementById('obraBack')
    .addEventListener('click', () => navigateTo(obraVoltarPara || 'autores'));
  document.getElementById('obraAutor').addEventListener('click', () => abrirPanorama(o.autor));
  document.getElementById('obraComprar').addEventListener('click', () => acionarComprar(o.autor, o.t));
  aoWire(root);
  attachQuoteCardEvents(root);
  seoObra(o, i, t, secoes);
  requestAnimationFrame(observeReveals);
}

/* ================================================================
   11. SEO — título, descrição, canônico e dados estruturados
   ================================================================ */
function _meta(nome, valor, prop) {
  const sel = prop ? `meta[property="${nome}"]` : `meta[name="${nome}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(prop ? 'property' : 'name', nome);
    document.head.appendChild(el);
  }
  el.setAttribute('content', valor);
}
function _jsonld(obj) {
  let el = document.getElementById('memotivaLD');
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'memotivaLD';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(obj);
}
function _canonico(hash) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = location.origin + location.pathname + (hash || '');
}
const SEO_PADRAO = {
  titulo: 'MeMotiva — Frases, histórias e motivação para cada dia',
  desc: 'Frases motivacionais, histórias inspiradoras e uma comunidade para guardar e compartilhar o que te move.'
};
function seoPadrao() {
  document.title = SEO_PADRAO.titulo;
  _meta('description', SEO_PADRAO.desc);
  _meta('og:title', SEO_PADRAO.titulo, true);
  _meta('og:description', SEO_PADRAO.desc, true);
  _canonico('');
  _jsonld({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MeMotiva',
    description: SEO_PADRAO.desc
  });
}
function seoObra(o, i, t, secoes) {
  const titulo = `${o.t} — ${o.autor} | MeMotiva`;
  const sobre = (secoes.find((s) => s.id === 'sobre') || {}).texto || o.d;
  const desc = String(sobre).replace(/\s+/g, ' ').slice(0, 300);
  document.title = titulo;
  _meta('description', desc);
  _meta(
    'keywords',
    [o.t, o.autor, t.nome, 'resumo', 'sobre a obra', 'contexto histórico', 'do que fala'].join(', ')
  );
  _meta('og:title', titulo, true);
  _meta('og:description', desc, true);
  _meta('og:type', 'article', true);
  _canonico('#obra-' + slugify(o.autor + '-' + o.t));
  const tipoLD = [
    'livro',
    'romance',
    'conto',
    'poesia',
    'ensaio',
    'tratado',
    'manual',
    'sagrado',
    'prosa',
    'aforismo',
    'memoria',
    'biografia'
  ].includes(o.tipo)
    ? 'Book'
    : 'CreativeWork';
  _jsonld({
    '@context': 'https://schema.org',
    '@type': tipoLD,
    name: o.t,
    author: { '@type': 'Person', name: o.autor, description: i.papelLimpo },
    datePublished: typeof o.ano === 'number' ? String(o.ano) : undefined,
    genre: t.nome,
    description: desc,
    inLanguage: 'pt-BR',
    isPartOf: { '@type': 'WebSite', name: 'MeMotiva' }
  });
}
function seoPessoa(i) {
  const titulo = `${i.nome} — biografia, frases e obras | MeMotiva`;
  const p = perfilProfundo(i.nome);
  const desc = ((p && p.resumo) || (i.story && i.story.excerpt) || i.papel)
    .replace(/\s+/g, ' ')
    .slice(0, 300);
  document.title = titulo;
  _meta('description', desc);
  _meta('keywords', [i.nome, 'biografia', 'frases', 'obras', i.papelLimpo].join(', '));
  _meta('og:title', titulo, true);
  _meta('og:description', desc, true);
  _canonico('#autor-' + slugify(i.nome));
  _jsonld({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: i.nome,
    description: desc,
    jobTitle: i.papelLimpo,
    birthDate: i.nasc || undefined,
    deathDate: i.morte || undefined
  });
}

/* ================================================================
   12. TRILHAS SONORAS E INTEGRAÇÃO COM PLATAFORMAS DE MÚSICA
   ----------------------------------------------------------------
   Ponto único de configuração. Quando o projeto tiver as chaves das
   plataformas, basta preencher aqui — nenhuma outra parte do código
   precisa mudar.

     MEMOTIVA_MUSICA.spotify.clientId = 'sua-client-id';
     MEMOTIVA_MUSICA.deezer.proxy     = 'https://seu-proxy/deezer';

   O Apple Music/iTunes funciona sem cadastro: a API pública de busca
   devolve capa e prévia de 30 segundos, que é exatamente o trecho
   que se usa num relato.
   ================================================================ */
window.MEMOTIVA_MUSICA = window.MEMOTIVA_MUSICA || {
  pais: 'BR',
  spotify: { clientId: null, redirect: location.origin + location.pathname, escopo: 'user-read-email' },
  deezer: { proxy: null },
  apple: { ativo: true }
};

const PLATAFORMAS = [
  {
    id: 'trilhas',
    nome: 'Trilhas MeMotiva',
    cor: '#C2540A',
    login: false,
    nota: 'Trilhas instrumentais que tocam sem internet e sem conta.'
  },
  {
    id: 'apple',
    nome: 'Apple Music',
    cor: '#FA243C',
    login: false,
    nota: 'Catálogo público da Apple, com prévia de 30 segundos.'
  },
  {
    id: 'deezer',
    nome: 'Deezer',
    cor: '#A238FF',
    login: true,
    nota: 'Precisa de um endereço de acesso configurado no projeto.'
  },
  {
    id: 'spotify',
    nome: 'Spotify',
    cor: '#1DB954',
    login: true,
    nota: 'Precisa da chave do aplicativo Spotify configurada no projeto.'
  }
];

/* ---------------- reprodução de prévia em streaming ---------------- */
Musica.tocarStream = function (url, de, ate, onFim) {
  this.parar();
  const a = new Audio();
  a.crossOrigin = 'anonymous';
  a.src = url;
  a.preload = 'auto';
  const iniciar = () => {
    try {
      a.currentTime = de || 0;
    } catch (e) {}
    a.play().catch(() => toast('Não foi possível tocar a prévia agora.'));
  };
  a.addEventListener('loadedmetadata', iniciar, { once: true });
  if (a.readyState >= 1) iniciar();
  this.audioEl = a;
  this.tocando = { tipo: 'stream', id: url };
  const parar = () => {
    this.parar();
    if (onFim) onFim();
  };
  if (ate) this.timer = setTimeout(parar, Math.max(600, (ate - (de || 0)) * 1000));
  a.addEventListener('ended', parar, { once: true });
  a.addEventListener(
    'error',
    () => {
      toast('A prévia desta música não pôde ser carregada.');
      parar();
    },
    { once: true }
  );
  return true;
};
Musica.tocarRef = function (mus, onFim) {
  if (!mus) return false;
  if (mus.tipo === 'trilha') {
    const tr = TRILHAS.find((t) => t.id === mus.id);
    if (!tr) return false;
    return this.tocarTrilha(tr, mus.de || 0, mus.ate || null, onFim);
  }
  if (mus.tipo === 'stream') {
    if (!mus.preview) {
      toast('Esta música não tem prévia liberada para tocar aqui.');
      return false;
    }
    const ok = this.tocarStream(mus.preview, mus.de || 0, mus.ate || null, onFim);
    if (ok && this.tocando) this.tocando.id = mus.id;
    return ok;
  }
  if (mus.src) {
    const ok = this.tocarArquivo(mus.src, mus.de || 0, mus.ate || null, onFim);
    if (ok && this.tocando) this.tocando.id = mus.id || mus.src;
    return ok;
  }
  toast('Este áudio só fica disponível na sessão em que foi anexado.');
  return false;
};
Musica.idRef = function (mus) {
  if (!mus) return null;
  if (mus.tipo === 'trilha') return mus.id;
  if (mus.tipo === 'stream') return mus.preview || mus.id;
  return mus.src || mus.id;
};

/* ---------------- buscas por plataforma ---------------- */
async function buscarApple(termo, sinal) {
  const cfg = window.MEMOTIVA_MUSICA;
  const url =
    'https://itunes.apple.com/search?media=music&entity=song&limit=25' +
    '&country=' +
    encodeURIComponent(cfg.pais || 'BR') +
    '&term=' +
    encodeURIComponent(termo);
  const r = await fetch(url, { signal: sinal });
  if (!r.ok) throw new Error('resposta ' + r.status);
  const j = await r.json();
  return (j.results || [])
    .filter((x) => x.previewUrl)
    .map((x) => ({
      id: 'ap_' + x.trackId,
      plataforma: 'apple',
      nome: x.trackName,
      artista: x.artistName,
      album: x.collectionName || '',
      capa: (x.artworkUrl100 || '').replace('100x100', '200x200'),
      preview: x.previewUrl,
      dur: 30,
      total: x.trackTimeMillis ? Math.round(x.trackTimeMillis / 1000) : null
    }));
}
async function buscarDeezer(termo, sinal) {
  const cfg = window.MEMOTIVA_MUSICA.deezer;
  if (!cfg.proxy) throw new Error('sem-config');
  const url = cfg.proxy.replace(/\/$/, '') + '/search?q=' + encodeURIComponent(termo);
  const r = await fetch(url, { signal: sinal });
  if (!r.ok) throw new Error('resposta ' + r.status);
  const j = await r.json();
  return (j.data || [])
    .filter((x) => x.preview)
    .map((x) => ({
      id: 'dz_' + x.id,
      plataforma: 'deezer',
      nome: x.title,
      artista: x.artist ? x.artist.name : '',
      album: x.album ? x.album.title : '',
      capa: x.album ? x.album.cover_medium || x.album.cover : '',
      preview: x.preview,
      dur: 30,
      total: x.duration || null
    }));
}
async function buscarSpotify(termo, sinal) {
  const tok = await spotifyToken();
  if (!tok) throw new Error('sem-login');
  const url =
    'https://api.spotify.com/v1/search?type=track&limit=25&market=' +
    (window.MEMOTIVA_MUSICA.pais || 'BR') +
    '&q=' +
    encodeURIComponent(termo);
  const r = await fetch(url, { signal: sinal, headers: { Authorization: 'Bearer ' + tok } });
  if (r.status === 401) {
    sessionStorage.removeItem('mm_sp_token');
    throw new Error('sem-login');
  }
  if (!r.ok) throw new Error('resposta ' + r.status);
  const j = await r.json();
  return ((j.tracks && j.tracks.items) || [])
    .map((x) => ({
      id: 'sp_' + x.id,
      plataforma: 'spotify',
      nome: x.name,
      artista: (x.artists || []).map((a) => a.name).join(', '),
      album: x.album ? x.album.name : '',
      capa:
        x.album && x.album.images && x.album.images.length
          ? x.album.images[x.album.images.length - 1].url
          : '',
      preview: x.preview_url,
      dur: 30,
      total: x.duration_ms ? Math.round(x.duration_ms / 1000) : null,
      externo: x.external_urls ? x.external_urls.spotify : null
    }))
    .filter((x) => x.preview || x.externo);
}

/* ---- Spotify: autorização PKCE, só se houver chave configurada ---- */
function _b64url(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
async function spotifyEntrar() {
  const cfg = window.MEMOTIVA_MUSICA.spotify;
  if (!cfg.clientId) {
    toast('Configure a chave do Spotify no projeto para ativar essa integração.', 4200);
    return false;
  }
  const verifier = _b64url(crypto.getRandomValues(new Uint8Array(48)));
  sessionStorage.setItem('mm_sp_verifier', verifier);
  /* state aleatório: a volta do Spotify só é aceita se trouxer o mesmo valor (proteção contra CSRF no login) */
  const estado = _b64url(crypto.getRandomValues(new Uint8Array(16)));
  sessionStorage.setItem('mm_sp_state', estado);
  const challenge = _b64url(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier)));
  const url =
    'https://accounts.spotify.com/authorize?response_type=code' +
    '&client_id=' +
    encodeURIComponent(cfg.clientId) +
    '&scope=' +
    encodeURIComponent(cfg.escopo || '') +
    '&state=' +
    estado +
    '&code_challenge_method=S256&code_challenge=' +
    challenge +
    '&redirect_uri=' +
    encodeURIComponent(cfg.redirect);
  location.href = url;
  return true;
}
async function spotifyToken() {
  const guardado = sessionStorage.getItem('mm_sp_token');
  const exp = Number(sessionStorage.getItem('mm_sp_exp') || 0);
  if (guardado && Date.now() < exp) return guardado;
  const cfg = window.MEMOTIVA_MUSICA.spotify;
  const code = new URLSearchParams(location.search).get('code');
  const verifier = sessionStorage.getItem('mm_sp_verifier');
  const estado = new URLSearchParams(location.search).get('state');
  if (!code || !verifier || !cfg.clientId) return null;
  if (!estado || estado !== sessionStorage.getItem('mm_sp_state')) return null;
  sessionStorage.removeItem('mm_sp_state');
  try {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: cfg.redirect,
      client_id: cfg.clientId,
      code_verifier: verifier
    });
    const r = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
    const j = await r.json();
    if (!j.access_token) return null;
    sessionStorage.setItem('mm_sp_token', j.access_token);
    sessionStorage.setItem('mm_sp_exp', String(Date.now() + (j.expires_in || 3600) * 1000 - 60000));
    history.replaceState({}, '', location.pathname);
    return j.access_token;
  } catch (e) {
    return null;
  }
}

function buscarTrilhas(termo) {
  const q = String(termo || '').trim();
  const lista = TRILHAS.filter(
    (t) => !q || bPontua(t.nome, q) >= 60 || bPontua(t.genero, q) >= 70 || bPontua(t.humor, q) >= 70
  );
  return lista.map((t) => ({
    id: t.id,
    plataforma: 'trilhas',
    nome: t.nome,
    artista: 'Trilhas MeMotiva',
    album: t.genero + ' · ' + t.humor,
    capa: null,
    preview: null,
    dur: t.dur,
    total: t.dur,
    trilha: t
  }));
}

/* ================================================================
   13. BUSCA DE MÚSICA — experiência de story: pesquisar, escolher,
   recortar o trecho e definir o tempo de exibição
   ================================================================ */
const musState = {
  plataforma: 'trilhas',
  termo: '',
  resultados: [],
  carregando: false,
  erro: null,
  sel: null,
  de: 0,
  dur: 15,
  tocando: false
};
let _musAbort = null,
  _musDebounce = null;

function musOverlay() {
  let ov = document.getElementById('musOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'mus-overlay';
    ov.id = 'musOverlay';
    ov.innerHTML = `
      <div class="mus-sheet">
        <div class="mus-topo">
          <button class="btn-icon" id="musFechar" aria-label="Fechar">${f5svg('fechar', 20)}</button>
          <div class="mus-campo">
            ${f5svg('busca', 18)}
            <input type="text" id="musInput" autocomplete="off" spellcheck="false"
                   placeholder="Pesquisar música, artista ou clima" aria-label="Pesquisar música">
            <button class="mus-limpar f5-hidden" id="musLimpar" aria-label="Limpar">${f5svg('fechar', 14)}</button>
          </div>
        </div>
        <div class="mus-plats" id="musPlats"></div>
        <div class="mus-corpo" id="musCorpo"></div>
        <div class="mus-editor f5-hidden" id="musEditor"></div>
      </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', (e) => {
      if (e.target === ov) fecharBuscaMusica();
    });
    document.getElementById('musFechar').addEventListener('click', fecharBuscaMusica);

    /* A barra é criada UMA vez e nunca é redesenhada enquanto se
       digita. Era isso que fazia "ob" virar "bo": o campo era
       reconstruído a cada tecla e o cursor voltava para o início. */
    const inp = document.getElementById('musInput');
    inp.addEventListener('input', () => {
      musState.termo = inp.value;
      document.getElementById('musLimpar').classList.toggle('f5-hidden', !inp.value);
      clearTimeout(_musDebounce);
      _musDebounce = setTimeout(rodarBuscaMusica, 320);
    });
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        clearTimeout(_musDebounce);
        rodarBuscaMusica();
      }
    });
    document.getElementById('musLimpar').addEventListener('click', () => {
      inp.value = '';
      musState.termo = '';
      document.getElementById('musLimpar').classList.add('f5-hidden');
      inp.focus();
      rodarBuscaMusica();
    });
  }
  return ov;
}
function abrirBuscaMusica() {
  const ov = musOverlay();
  ov.classList.add('show');
  lockScroll();
  musState.sel = null;
  document.getElementById('musEditor').classList.add('f5-hidden');
  renderPlataformas();
  const inp = document.getElementById('musInput');
  inp.value = musState.termo || '';
  document.getElementById('musLimpar').classList.toggle('f5-hidden', !inp.value);
  rodarBuscaMusica();
  setTimeout(() => inp.focus(), 120);
}
function fecharBuscaMusica() {
  const ov = document.getElementById('musOverlay');
  if (ov) ov.classList.remove('show');
  Musica.parar();
  unlockScroll();
  if (escState.painel === 'musica') {
    escState.painel = null;
    renderEscrever();
  }
}
function renderPlataformas() {
  const box = document.getElementById('musPlats');
  box.innerHTML = PLATAFORMAS.map(
    (p) => `
    <button class="mus-plat ${musState.plataforma === p.id ? 'on' : ''}" data-plat="${p.id}"
            style="--pc:${p.cor}">${escapeHtml(p.nome)}</button>`
  ).join('');
  box.querySelectorAll('[data-plat]').forEach((b) =>
    b.addEventListener('click', () => {
      musState.plataforma = b.dataset.plat;
      renderPlataformas();
      rodarBuscaMusica();
    })
  );
}
async function rodarBuscaMusica() {
  const corpo = document.getElementById('musCorpo');
  if (!corpo) return;
  const plat = PLATAFORMAS.find((p) => p.id === musState.plataforma);
  const termo = musState.termo.trim();

  if (musState.plataforma === 'trilhas') {
    musState.resultados = buscarTrilhas(termo);
    musState.erro = null;
    return renderResultadosMusica();
  }
  if (!termo) {
    corpo.innerHTML = `<p class="mus-aviso">${escapeHtml(plat.nota)}<br>Escreva o nome de uma música ou de um artista para buscar.</p>`;
    return;
  }
  if (_musAbort) _musAbort.abort();
  _musAbort = new AbortController();
  musState.carregando = true;
  musState.erro = null;
  corpo.innerHTML = `<div class="mus-carregando"><span class="eq"><span></span><span></span><span></span></span> Procurando em ${escapeHtml(plat.nome)}…</div>`;
  try {
    let r = [];
    if (musState.plataforma === 'apple') r = await buscarApple(termo, _musAbort.signal);
    if (musState.plataforma === 'deezer') r = await buscarDeezer(termo, _musAbort.signal);
    if (musState.plataforma === 'spotify') r = await buscarSpotify(termo, _musAbort.signal);
    musState.resultados = r;
    musState.carregando = false;
    renderResultadosMusica();
  } catch (e) {
    if (e.name === 'AbortError') return;
    musState.carregando = false;
    musState.resultados = [];
    musState.erro = String(e.message || e);
    renderErroMusica(plat);
  }
}
function renderErroMusica(plat) {
  const corpo = document.getElementById('musCorpo');
  const semConfig = musState.erro === 'sem-config' || musState.erro === 'sem-login';
  corpo.innerHTML = `
    <div class="mus-erro">
      <h4>${semConfig ? escapeHtml(plat.nome) + ' ainda não está conectado' : 'Não deu para buscar agora'}</h4>
      <p>${
        semConfig
          ? escapeHtml(plat.nota) + ' Enquanto isso, as Trilhas MeMotiva funcionam sempre.'
          : 'A conexão falhou. Verifique a internet ou use as Trilhas MeMotiva, que tocam sem rede.'
      }</p>
      <div class="mus-erro-acoes">
        ${musState.plataforma === 'spotify' ? `<button class="ao-btn primary" id="musEntrar">Conectar o Spotify</button>` : ''}
        <button class="ao-btn" id="musTrilhas">Usar Trilhas MeMotiva</button>
      </div>
    </div>`;
  const ent = document.getElementById('musEntrar');
  if (ent) ent.addEventListener('click', spotifyEntrar);
  document.getElementById('musTrilhas').addEventListener('click', () => {
    musState.plataforma = 'trilhas';
    renderPlataformas();
    rodarBuscaMusica();
  });
}
function renderResultadosMusica() {
  const corpo = document.getElementById('musCorpo');
  const lista = musState.resultados;
  if (!lista.length) {
    corpo.innerHTML = `<p class="mus-aviso">Nada encontrado para essa busca. Tente outro nome.</p>`;
    return;
  }
  corpo.innerHTML = `
    ${musState.plataforma === 'trilhas' ? `<p class="mus-secao">Trilhas sonoras MeMotiva</p>` : ''}
    <div class="mus-resultados">
      ${lista
        .map(
          (m) => `
        <button class="mus-linha" data-mus="${escapeHtml(m.id)}">
          <span class="mus-capa" style="${urlCssSegura(m.capa) ? `background-image:url('${urlCssSegura(m.capa)}')` : ''}">
            ${m.capa ? '' : f5svg('nota', 18)}
          </span>
          <span class="mus-info">
            <b>${escapeHtml(m.nome)}</b>
            <small>${escapeHtml(m.artista)}${m.album ? ' · ' + escapeHtml(m.album) : ''}</small>
          </span>
          <span class="mus-seta">${f5svg('seta', 15)}</span>
        </button>`
        )
        .join('')}
    </div>`;
  corpo.querySelectorAll('[data-mus]').forEach((b) =>
    b.addEventListener('click', () => {
      const m = lista.find((x) => String(x.id) === b.dataset.mus);
      if (m) abrirEditorTrecho(m);
    })
  );
}

/* ---------------- escolher trecho e tempo de exibição ---------------- */
const DURACOES = [5, 10, 15, 30];
function abrirEditorTrecho(m) {
  Musica.parar();
  musState.sel = m;
  musState.de = 0;
  musState.dur = Math.min(15, m.dur || 30);
  renderEditorTrecho();
}
function renderEditorTrecho() {
  const ed = document.getElementById('musEditor');
  const m = musState.sel;
  if (!m) {
    ed.classList.add('f5-hidden');
    return;
  }
  const total = Math.max(5, m.dur || 30);
  const maxDe = Math.max(0, total - musState.dur);
  const barras = 44;
  const semente = bNorm(m.nome + m.artista);
  const alturas = [];
  for (let i = 0; i < barras; i++) {
    const c = semente.charCodeAt(i % Math.max(1, semente.length)) || 65;
    alturas.push(28 + ((c * (i + 7)) % 62));
  }
  const iniPct = (musState.de / total) * 100;
  const larPct = (musState.dur / total) * 100;

  ed.classList.remove('f5-hidden');
  ed.innerHTML = `
    <div class="mus-ed-topo">
      <button class="btn-icon" id="musVoltar" aria-label="Voltar aos resultados">${f5svg('voltar', 18)}</button>
      <span class="mus-capa grande" style="${urlCssSegura(m.capa) ? `background-image:url('${urlCssSegura(m.capa)}')` : ''}">${m.capa ? '' : f5svg('nota', 22)}</span>
      <span class="mus-info">
        <b>${escapeHtml(m.nome)}</b>
        <small>${escapeHtml(m.artista)}</small>
      </span>
      <button class="mus-play grande" id="musTocar" aria-label="Ouvir o trecho">${f5svg(musState.tocando ? 'pausa' : 'play', 16, 'currentColor', 0)}</button>
    </div>

    <p class="f5-label" style="margin-top:14px;">Escolha o trecho</p>
    <div class="mus-onda" id="musOnda">
      <div class="mus-barras">${alturas.map((h) => `<i style="height:${h}%"></i>`).join('')}</div>
      <div class="mus-janela" id="musJanela" style="left:${iniPct}%; width:${larPct}%;">
        <span class="mus-alca"></span>
      </div>
    </div>
    <div class="mus-tempos">
      <span>${fmtSeg(musState.de)}</span>
      <span>trecho de ${musState.dur}s</span>
      <span>${fmtSeg(Math.min(total, musState.de + musState.dur))}</span>
    </div>

    <p class="f5-label" style="margin-top:12px;">Tempo de exibição</p>
    <div class="mus-duracoes">
      ${DURACOES.filter((d) => d <= total)
        .map(
          (d) => `<button class="med-chip ${musState.dur === d ? 'on' : ''}" data-dur="${d}">${d}s</button>`
        )
        .join('')}
    </div>

    <div class="mus-ed-acoes">
      <button class="btn btn-coral btn-lg" id="musConcluir">Usar no relato</button>
    </div>
    ${m.plataforma !== 'trilhas' && !m.preview ? `<p class="mus-aviso pequeno">Esta faixa não tem prévia liberada; o trecho fica registrado no relato, mas sem áudio.</p>` : ''}
    ${m.plataforma !== 'trilhas' ? `<p class="mus-aviso pequeno">Prévia de 30 segundos fornecida por ${escapeHtml((PLATAFORMAS.find((p) => p.id === m.plataforma) || {}).nome || '')}.</p>` : ''}`;

  document.getElementById('musVoltar').addEventListener('click', () => {
    Musica.parar();
    musState.sel = null;
    musState.tocando = false;
    ed.classList.add('f5-hidden');
  });
  document.getElementById('musTocar').addEventListener('click', () => {
    if (musState.tocando) {
      Musica.parar();
      musState.tocando = false;
      return renderEditorTrecho();
    }
    const ref = refDaSelecao();
    const ok = Musica.tocarRef(ref, () => {
      musState.tocando = false;
      renderEditorTrecho();
    });
    musState.tocando = !!ok;
    renderEditorTrecho();
  });
  ed.querySelectorAll('[data-dur]').forEach((b) =>
    b.addEventListener('click', () => {
      musState.dur = Number(b.dataset.dur);
      musState.de = Math.min(musState.de, Math.max(0, total - musState.dur));
      renderEditorTrecho();
    })
  );
  document.getElementById('musConcluir').addEventListener('click', () => {
    escState.musica = refDaSelecao();
    escState.painel = null;
    Musica.parar();
    musState.tocando = false;
    const ov = document.getElementById('musOverlay');
    if (ov) ov.classList.remove('show');
    unlockScroll();
    renderEscrever();
    toast('Música adicionada ao relato');
  });

  /* arrastar a janela do trecho */
  const onda = document.getElementById('musOnda');
  const jan = document.getElementById('musJanela');
  let arrastando = false,
    x0 = 0,
    de0 = 0;
  const larg = () => onda.getBoundingClientRect().width || 1;
  const mover = (x) => {
    const delta = ((x - x0) / larg()) * total;
    musState.de = Math.max(0, Math.min(maxDe, de0 + delta));
    jan.style.left = (musState.de / total) * 100 + '%';
    const t = ed.querySelector('.mus-tempos');
    if (t) t.children[0].textContent = fmtSeg(musState.de);
    if (t) t.children[2].textContent = fmtSeg(Math.min(total, musState.de + musState.dur));
  };
  jan.addEventListener('pointerdown', (e) => {
    arrastando = true;
    x0 = e.clientX;
    de0 = musState.de;
    try {
      jan.setPointerCapture(e.pointerId);
    } catch (err) {}
  });
  jan.addEventListener('pointermove', (e) => {
    if (arrastando) mover(e.clientX);
  });
  const fim = () => {
    arrastando = false;
  };
  jan.addEventListener('pointerup', fim);
  jan.addEventListener('pointercancel', fim);
  onda.addEventListener('click', (e) => {
    if (e.target.closest('.mus-janela')) return;
    const r = onda.getBoundingClientRect();
    const pos = ((e.clientX - r.left) / r.width) * total;
    musState.de = Math.max(0, Math.min(maxDe, pos - musState.dur / 2));
    renderEditorTrecho();
  });
}
function refDaSelecao() {
  const m = musState.sel;
  if (!m) return null;
  return {
    tipo: m.plataforma === 'trilhas' ? 'trilha' : 'stream',
    id: m.id,
    plataforma: m.plataforma,
    nome: m.nome,
    artista: m.artista,
    capa: m.capa || null,
    preview: m.preview || null,
    externo: m.externo || null,
    dur: m.dur || 30,
    de: Math.round(musState.de),
    ate: Math.round(musState.de + musState.dur),
    persistir: true
  };
}
/* o ícone de nota musical abre direto a busca, como num story */
function renderPainelMusica() {
  const box = document.getElementById('escPainel');
  if (box) box.innerHTML = '';
  abrirBuscaMusica();
}

/* ---------------- música dentro dos cartões ---------------- */
function volumeHTML(p) {
  if (!p.musica) return '';
  const m = p.musica;
  const capa = urlCssSegura(m.capa);
  return `<button class="post-vol" data-vol="${escapeHtml(p.id)}" aria-label="Ativar som do relato" title="Tocar a música deste relato">${f5svg('mudo', 18)}</button>
    <span class="post-music-name">
      ${capa ? `<i class="pmn-capa" style="background-image:url('${capa}')"></i>` : f5svg('nota', 12)}
      ${escapeHtml(m.nome)}${m.artista ? ' · ' + escapeHtml(m.artista) : ''}
    </span>`;
}

/* ================================================================
   14. AJUSTES DE LIGAÇÃO — som nos cartões e busca do Explorar
   ================================================================ */
const _apeAnterior = attachPostEvents;
function attachPostEventsF6(container) {
  /* assume o botão de som antes da versão anterior, para corrigir o
     reconhecimento da faixa em prévias de streaming */
  container.querySelectorAll('[data-vol]:not([data-wired])').forEach((b) => {
    b.dataset.wired = '1';
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = b.dataset.vol;
      const p = state.communityPosts.find((x) => x.id === id) || state.myPhrases.find((x) => x.id === id);
      if (!p || !p.musica) return;
      const ref = Musica.idRef(p.musica);
      if (Musica.tocando && Musica.tocando.id === ref) {
        Musica.parar();
        marcarVolume(b, false);
        return;
      }
      document.querySelectorAll('.post-vol.on').forEach((x) => marcarVolume(x, false));
      const ok = Musica.tocarRef(p.musica, () => marcarVolume(b, false));
      if (ok) marcarVolume(b, true);
    });
  });
  _apeAnterior(container);
}
attachPostEvents = attachPostEventsF6;

/* ---- Explorar: busca com tolerância a erro de digitação ---- */
function getFilteredQuotes() {
  const { cat, q, profile, tradition, agrupar, somenteFonte } = state.exploreFilter;
  const consulta = String(q || '').trim();
  const useProfile = cat === 'all' && profile && profile !== 'all';
  const useTrad = cat === 'fe' && tradition && tradition !== 'all';
  const bruto = bNorm(consulta);
  const curta = bruto.length > 0 && bruto.length <= 2 && !bruto.includes(' ');

  return QUOTES.map((quote, idx) => ({ quote, idx })).filter(({ quote }) => {
    if (!quoteMatchesCat(quote, cat)) return false;
    if (useProfile && !authorProfiles(quote.author).includes(profile)) return false;
    if (useTrad && authorTradition(quote.author) !== tradition) return false;
    if (agrupar && quote.vdup && !consulta) return false;
    if (somenteFonte && !['A', 'A-', 'B'].includes(quote.st)) return false;
    if (!consulta) return true;

    /* com 1 ou 2 letras, respeita a inicial: nada de resultados espalhados */
    if (curta) return bPontua(quote.author, consulta) > 0;

    const texto = bNorm(quote.text);
    if (texto.includes(bruto)) return true; /* trecho literal */
    if (bPontua(quote.author, consulta) >= 60) return true; /* autor, com erro tolerado */
    if (quote.src && bPontua(quote.src, consulta) >= 90) return true;
    /* palavra a palavra dentro do texto da frase, tolerando erro */
    const termos = bruto.split(/\s+/).filter(Boolean);
    const palavras = texto.split(/\s+/);
    return termos.every((t) =>
      t.length < 4 ? palavras.some((p) => p.startsWith(t)) : palavras.some((p) => bPontuaPalavra(p, t) >= 66)
    );
  });
}

/* ---- "Saiba mais" volta ao cartão expandido da frase ---- */
function openQuoteModal(idx) {
  const q = QUOTES[idx];
  if (!q) return;
  const el = document.getElementById('quoteExpand');
  const box = document.getElementById('quoteExpandBox');
  if (!el.classList.contains('show')) el._origem = document.activeElement;
  const isFav = isFavQuote(idx);
  const ehPessoa = !SCRIPTURE_RE.test(canonAuthor(q.author));
  const bio = bioIdFor(q.author);
  /* Etapa 5 do redesign: a "sala" da Galeria. Retrato à esquerda (no computador), nome, papel e a
     etiqueta Obra · Original · Imagem; ditado popular fica sem retrato. */
  const ditado = /^ditado/i.test(q.author || '');
  const papel = ehPessoa && !ditado && typeof papelDe === 'function' ? papelDe(q.author) : '';
  const rot = STATUS_ROTULO[q.st] || STATUS_ROTULO.R;
  const conferida = q.st === 'A' ? '<span class="conferida">fonte conferida</span>' : '';
  const notas = [
    rot.texto ? `<span class="expand-src ${rot.classe}">${escapeHtml(rot.texto)}</span>` : '',
    q.autorAnterior
      ? `<span class="expand-src src-alerta">Circula como frase de ${escapeHtml(q.autorAnterior)}.</span>`
      : '',
    q.vn > 1
      ? `<span class="expand-src src-nota">${q.vn} traduções desta mesma passagem no acervo.</span>`
      : ''
  ].join('');
  const etiqueta = [
    q.src ? `<dt>Obra</dt><dd><span class="obra">${escapeHtml(q.src)}</span>${conferida}</dd>` : '',
    q.orig ? `<dt>Original</dt><dd><p class="quote-original">${escapeHtml(q.orig)}</p></dd>` : '',
    !ditado && photoInfo(q.author) ? '<dt>Imagem</dt><dd>Wikimedia Commons</dd>' : ''
  ].join('');

  box.innerHTML = `
    <button class="expand-close" id="quoteExpandClose" aria-label="Fechar frase ampliada">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <div class="expand-inner${ditado ? ' sem-retrato' : ''}">
      <span class="expand-cat">${escapeHtml(quoteCatLabel(q))}</span>
      <p class="expand-text"${q.text.length > 140 ? ' data-comprimento="longa"' : ''}>&ldquo;${escapeHtml(q.text)}&rdquo;</p>
      <div class="expand-foot">
        ${
          ditado
            ? ''
            : `<div class="expand-avatar" data-open-photo="${escapeHtml(q.author)}" role="button" tabindex="0" aria-label="Ampliar fotografia de ${escapeHtml(q.author)}">
          ${photoImgHTML(q.author, 'card', 900)}
          <div class="avatar-fallback" style="display:none;">${initials(q.author)}</div>
        </div>`
        }
        <div class="expand-ident-wrap">
          <div class="expand-ident">
            <span class="expand-author">${escapeHtml(ditado ? 'Ditado popular' : q.author)}</span>
            ${papel ? `<span class="expand-papel">${escapeHtml(papel)}</span>` : ''}
          </div>
          ${etiqueta ? `<dl class="quote-label">${etiqueta}</dl>` : ''}
          ${notas ? `<div class="expand-notas">${notas}</div>` : ''}
          <div class="expand-links">
            ${bio ? `<button class="expand-know" id="expSaiba">Ler a história</button>` : ''}
            ${ehPessoa && !ditado ? `<button class="expand-know alt" id="expKnow">Conhecer ${escapeHtml(canonAuthor(q.author))}</button>` : ''}
          </div>
        </div>
        <div class="expand-acts">
          <button class="expand-act ${isFav ? 'liked' : ''}" id="expFav" aria-pressed="${isFav}" aria-label="Salvar frase nos favoritos" title="Favoritar">
            <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round">${F5_ICONS.coracao}</svg>
          </button>
          <button class="expand-act" id="expComment" aria-label="Escrever a partir desta frase" title="Comentar / escrever">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">${F5_ICONS.balao}</svg>
          </button>
        </div>
      </div>
    </div>`;

  el.classList.add('show');
  el.setAttribute('aria-hidden', 'false');
  lockScroll();
  document.getElementById('quoteExpandClose').addEventListener('click', closeQuoteModal);
  box.querySelectorAll('[data-open-photo]').forEach((b) => {
    const go = (ev) => {
      ev.stopPropagation();
      openPhotoModal(b.dataset.openPhoto);
    };
    b.addEventListener('click', go);
    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go(e);
      }
    });
  });
  /* Saiba mais: abre a biografia daquela pessoa, já expandida */
  const saiba = document.getElementById('expSaiba');
  if (saiba)
    saiba.addEventListener('click', () => {
      closeQuoteModal();
      abrirBiografiaExpandida(bio);
    });
  const know = document.getElementById('expKnow');
  if (know)
    know.addEventListener('click', () => {
      closeQuoteModal();
      abrirPanorama(q.author);
    });
  document.getElementById('expFav').addEventListener('click', (e) => {
    e.stopPropagation();
    requireAuth(async () => {
      await toggleFavoriteQuote(idx);
      const b = document.getElementById('expFav');
      if (!b) return;
      const agora = isFavQuote(idx);
      b.classList.toggle('liked', agora);
      b.setAttribute('aria-pressed', agora);
      b.querySelector('svg').setAttribute('fill', agora ? 'currentColor' : 'none');
    }, 'Crie sua conta para guardar frases nos favoritos.');
  });
  document.getElementById('expComment').addEventListener('click', (e) => {
    e.stopPropagation();
    comentarFrase(idx);
  });
  requestAnimationFrame(() => document.getElementById('quoteExpandClose').focus());
}

/* ================================================================
   15. SUGESTÕES NO FIM DOS FILTROS DE DESCUBRA E HISTÓRIAS
   ================================================================ */
function montarFimDeFiltro(idView, filtroAtual, aoEscolher) {
  const view = document.getElementById(idView);
  if (!view) return;
  const wrap = view.querySelector('.wrap');
  let box = wrap.querySelector('.fim-filtro');
  if (box) box.remove();
  const sug = PROFILES.filter((p) => p.id !== filtroAtual)
    .filter((p) => STORIES.some((s) => (s.profiles || []).includes(p.id)))
    .slice(0, 7);
  if (!sug.length) return;
  box = document.createElement('div');
  box.className = 'fim-filtro';
  box.innerHTML = `<p>Você chegou ao fim nesse filtro. Deseja explorar:</p>
    <div class="fim-chips">${sug.map((p) => `<button class="ao-tab" data-fimf="${p.id}">${escapeHtml(p.name)}</button>`).join('')}</div>`;
  wrap.appendChild(box);
  box
    .querySelectorAll('[data-fimf]')
    .forEach((b) => b.addEventListener('click', () => aoEscolher(b.dataset.fimf)));
}
const _renderDiscoverBase = renderDiscover;
function renderDiscoverF6() {
  _renderDiscoverBase();
  montarFimDeFiltro('view-descubra', discoverFilter, (id) => {
    discoverFilter = id;
    renderDiscoverF6();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
}
renderDiscover = renderDiscoverF6;

const _renderBiosBase = renderBiographies;
function renderBiographiesF6() {
  _renderBiosBase();
  montarFimDeFiltro('view-historias', bioFilter.profile, (id) => {
    bioFilter = { profile: id, origin: 'all' };
    renderBiographiesF6();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
}
renderBiographies = renderBiographiesF6;

/* ================================================================
   16. NAVEGAÇÃO — SEO padrão fora das páginas de obra e de pessoa
   ================================================================ */
const _navegarF5 = navigateTo;
function navigateToF6(view) {
  _navegarF5(view);
  if (view !== 'obra' && view !== 'panorama') seoPadrao();
}
navigateTo = navigateToF6;

/* ================================================================
   17. CARGA DA FASE 6
   ================================================================ */
function initFase6() {
  /* biografias novas entram no acervo de Histórias e Descubra */
  let novas = 0;
  NOVAS_HISTORIAS.forEach((h) => {
    if (STORIES.some((s) => canonAuthor(s.author) === canonAuthor(h.author))) return;
    STORIES.push(h);
    BIO_BY_AUTHOR[canonAuthor(h.author)] = h.id;
    novas++;
  });

  /* frases novas, verificadas, dos autores aprofundados */
  let frasesNovas = 0;
  if (typeof NOVAS_FRASES !== 'undefined') {
    NOVAS_FRASES.forEach((f) => {
      const jaTem = QUOTES.some((q) => bNorm(q.text) === bNorm(f.text));
      if (jaTem) return;
      QUOTES.push({ text: f.text, author: f.author, cat: f.cat, src: f.src, st: f.st || 'A-' });
      frasesNovas++;
    });
  }

  /* curadoria das frases pendentes */
  aplicarCuradoriaFinal();

  /* descrições novas e obras acrescentadas */
  aplicarObrasFase6();

  /* recalcula índices que dependem de QUOTES e STORIES */
  reconstruirIndices();

  seoPadrao();
  if (state.view === 'autores') renderAutoresObras();
  console.info(
    `MeMotiva · Fase 6: +${novas} biografias, +${frasesNovas} frases, ${_limpezaProc} procedências limpas.`
  );
}
function reconstruirIndices() {
  AUTOR_INDEX.clear();
  const add = (nome) => {
    const c = canonAuthor(nome);
    if (!c || SCRIPTURE_RE.test(c)) return;
    if (!AUTOR_INDEX.has(c)) AUTOR_INDEX.set(c, { nome: c, frases: [], story: null });
  };
  STORIES.forEach((s) => {
    add(s.author);
    const c = canonAuthor(s.author);
    if (AUTOR_INDEX.has(c)) AUTOR_INDEX.get(c).story = s;
  });
  QUOTES.forEach((q, i) => {
    add(q.author);
    const c = canonAuthor(q.author);
    if (AUTOR_INDEX.has(c)) AUTOR_INDEX.get(c).frases.push(i);
  });
  Object.keys(OBRAS).forEach(add);
}

const _bootF5 = window.__fase5Boot;
window.__fase5Boot = function () {
  try {
    if (_bootF5) _bootF5();
  } catch (e) {
    console.error('Fase 5:', e);
  }
  try {
    initFase6();
  } catch (e) {
    console.error('Fase 6:', e);
  }
};

/* ================================================================
   CABEÇALHO QUE ENCOLHE AO ROLAR (Etapa 3 do redesign)
   Só troca a classe .compact; o tamanho e a transição ficam no CSS
   (assets/css/telas/navegacao.css), e somem com movimento reduzido.
   ================================================================ */
(function cabecalhoCompacto() {
  const cab = document.querySelector('.site-header');
  if (!cab) return;
  let pendente = false;
  /* Com histerese: encolher tira 16 px do topo da página e a rolagem anda junto; com um limite só
     (24 px), parado perto dele o cabeçalho ficava encolhendo e crescendo sem parar e a página tremia. */
  const atualizar = () => {
    pendente = false;
    const y = window.scrollY;
    if (!cab.classList.contains('compact')) {
      if (y > 64) cab.classList.add('compact');
    } else if (y < 8) cab.classList.remove('compact');
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!pendente) {
        pendente = true;
        requestAnimationFrame(atualizar);
      }
    },
    { passive: true }
  );
  atualizar();
})();
