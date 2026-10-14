/* MeMotiva — app/19-obra-musica-escrever-editor.js
   Tela da obra, motor de áudio, tela Escrever e editor de foto/vídeo, envio de relatos.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   TELA DA OBRA
   ================================================================ */
let obraAtual = null;
function abrirObra(oid) {
  obraAtual = OBRA_POR_ID[oid] || null;
  if (!obraAtual) {
    toast('Obra não encontrada.');
    return;
  }
  obraVoltarPara = state.view === 'obra' ? obraVoltarPara : state.view;
  navigateTo('obra');
}
let obraVoltarPara = 'autores';

/* ================================================================
   MOTOR DE ÁUDIO DAS TRILHAS
   As trilhas são sintetizadas no próprio navegador (Web Audio API):
   tocam sem rede, sem serviço externo e sem ocupar armazenamento.
   A pessoa também pode anexar uma música do próprio aparelho.
   ================================================================ */
const Musica = {
  ctx: null,
  master: null,
  tocando: null,
  timer: null,
  audioEl: null,
  fim: null,

  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.85;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  },

  /* gerador determinístico: a mesma trilha soa sempre igual */
  _rng(seed) {
    let s = 0;
    for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  },
  _escala(raiz, tipo) {
    const maior = [0, 2, 4, 5, 7, 9, 11],
      menor = [0, 2, 3, 5, 7, 8, 10];
    const g = tipo === 'menor' ? menor : maior;
    const out = [];
    for (let oct = -1; oct <= 2; oct++) g.forEach((n) => out.push(raiz + n + oct * 12));
    return out.sort((a, b) => a - b);
  },
  _hz(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  },

  /* lista de notas [{t, dur, midi, vol, papel}] para a trilha inteira */
  plano(tr) {
    if (tr._plano) return tr._plano;
    const rnd = this._rng(tr.id + tr.nome);
    const esc = this._escala(tr.raiz, tr.esc);
    const bat = 60 / tr.bpm;
    const compasso = bat * 4;
    const notas = [];
    const graus = tr.esc === 'menor' ? [0, 5, 3, 6] : [0, 4, 5, 3];
    let t = 0,
      c = 0;
    while (t < tr.dur) {
      const base = tr.raiz - 12 + graus[c % graus.length];
      /* acorde sustentado */
      [0, 4, 7].forEach((iv, k) => {
        notas.push({
          t,
          dur: compasso * 0.98,
          midi: base + (tr.esc === 'menor' && iv === 4 ? 3 : iv),
          vol: k === 0 ? 0.18 : 0.11,
          papel: 'acorde'
        });
      });
      /* baixo */
      notas.push({ t, dur: compasso * 0.9, midi: base - 12, vol: 0.16, papel: 'baixo' });
      /* melodia */
      const n = 3 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++) {
        const pos = t + (compasso / n) * i + rnd() * 0.08;
        if (pos >= tr.dur) break;
        const alvo = esc.filter((x) => x >= tr.raiz && x <= tr.raiz + 14);
        const midi = alvo[Math.floor(rnd() * alvo.length)] || tr.raiz;
        notas.push({
          t: pos,
          dur: (compasso / n) * (0.7 + rnd() * 0.6),
          midi,
          vol: 0.14 + rnd() * 0.07,
          papel: 'melodia'
        });
      }
      t += compasso;
      c++;
    }
    tr._plano = notas;
    return notas;
  },

  _timbre(papel, timbre) {
    switch (timbre) {
      case 'piano':
        return { tipo: papel === 'melodia' ? 'triangle' : 'sine', corte: 2600, ata: 0.008, dec: 0.9 };
      case 'violao':
        return { tipo: papel === 'melodia' ? 'sawtooth' : 'triangle', corte: 1900, ata: 0.005, dec: 0.7 };
      case 'cordas':
        return { tipo: 'sawtooth', corte: 1500, ata: 0.18, dec: 1.4 };
      case 'pad':
        return { tipo: 'sine', corte: 1100, ata: 0.35, dec: 1.8 };
      case 'lofi':
        return { tipo: papel === 'melodia' ? 'square' : 'triangle', corte: 1300, ata: 0.02, dec: 0.8 };
      default:
        return { tipo: 'triangle', corte: 2100, ata: 0.05, dec: 1.1 };
    }
  },

  tocarTrilha(tr, de = 0, ate = null, onFim) {
    const ctx = this.ensure();
    if (!ctx) {
      toast('Este navegador não permite reproduzir a trilha.');
      return false;
    }
    this.parar();
    ate = ate == null ? Math.min(tr.dur, de + 30) : ate;
    const dur = Math.max(1, ate - de);
    const t0 = ctx.currentTime + 0.06;
    const notas = this.plano(tr).filter((n) => n.t >= de - 0.5 && n.t < ate);
    const vozes = [];
    notas.forEach((n) => {
      const cfg = this._timbre(n.papel, tr.timbre);
      const inicio = t0 + Math.max(0, n.t - de);
      const d = Math.min(n.dur, ate - Math.max(n.t, de));
      if (d <= 0.02) return;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      const f = ctx.createBiquadFilter();
      osc.type = cfg.tipo;
      osc.frequency.value = this._hz(n.midi);
      f.type = 'lowpass';
      f.frequency.value = cfg.corte;
      g.gain.setValueAtTime(0.0001, inicio);
      g.gain.exponentialRampToValueAtTime(Math.max(0.002, n.vol), inicio + cfg.ata);
      g.gain.exponentialRampToValueAtTime(0.0001, inicio + d * (0.6 + cfg.dec * 0.2) + 0.08);
      osc.connect(f);
      f.connect(g);
      g.connect(this.master);
      osc.start(inicio);
      osc.stop(inicio + d + 0.3);
      vozes.push(osc);
    });
    this.tocando = { tipo: 'trilha', id: tr.id, vozes };
    this.fim = onFim || null;
    this.timer = setTimeout(
      () => {
        this.parar();
        if (onFim) onFim();
      },
      dur * 1000 + 250
    );
    return true;
  },

  tocarArquivo(src, de = 0, ate = null, onFim) {
    this.parar();
    const a = new Audio(src);
    a.currentTime = de || 0;
    a.play().catch(() => toast('Não foi possível reproduzir este áudio.'));
    this.audioEl = a;
    this.tocando = { tipo: 'arquivo', id: src };
    this.fim = onFim || null;
    const parar = () => {
      this.parar();
      if (onFim) onFim();
    };
    if (ate) {
      this.timer = setTimeout(parar, Math.max(500, (ate - de) * 1000));
    }
    a.addEventListener('ended', parar, { once: true });
    return true;
  },

  tocarRef(mus, onFim) {
    if (!mus) return false;
    if (mus.tipo === 'trilha') {
      const tr = TRILHAS.find((t) => t.id === mus.id);
      if (!tr) return false;
      return this.tocarTrilha(tr, mus.de || 0, mus.ate || null, onFim);
    }
    if (mus.src) return this.tocarArquivo(mus.src, mus.de || 0, mus.ate || null, onFim);
    toast('Este áudio só fica disponível na sessão em que foi anexado.');
    return false;
  },

  parar() {
    clearTimeout(this.timer);
    this.timer = null;
    if (this.tocando && this.tocando.vozes) {
      this.tocando.vozes.forEach((o) => {
        try {
          o.stop();
        } catch (e) {}
      });
    }
    if (this.audioEl) {
      try {
        this.audioEl.pause();
      } catch (e) {}
      this.audioEl = null;
    }
    this.tocando = null;
  },
  estaTocando(id) {
    return !!(this.tocando && this.tocando.id === id);
  }
};

/* ================================================================
   ESTADO DO COMPOSITOR "ESCREVER"
   ================================================================ */
const escState = {
  texto: '',
  fonte: 'hand',
  cor: 'paper',
  fundo: null /* {cat, i, nome, css, ink} */,
  media: null /* {tipo:'imagem'|'video', src, filtro, legenda, persistir} */,
  musica: null /* {tipo:'trilha'|'arquivo', id, nome, de, ate, src, persistir} */,
  quote: null /* {text, author, idx} */,
  painel: null /* 'galeria' | 'musica' | null */,
  catFundo: 'paisagens',
  buscaMus: ''
};

function fundoPorRef(ref) {
  if (!ref) return null;
  const cat = FUNDOS.find((c) => c.id === ref.cat);
  if (!cat || !cat.itens[ref.i]) return null;
  const [nome, css, ink] = cat.itens[ref.i];
  return { cat: ref.cat, i: ref.i, nome, css, ink };
}
function escFundoCSS() {
  if (escState.fundo) return escState.fundo.css;
  const c = STYLE_COLORS.find((x) => x.id === escState.cor) || STYLE_COLORS[0];
  return state.theme === 'dark' && c.dark ? c.dark : c.bg;
}
function escTinta() {
  if (escState.fundo) return escState.fundo.ink;
  if (escState.cor === 'paper') return 'var(--paper-text)';
  return state.theme === 'dark' ? '#F3ECE3' : '#1B1817';
}

/* ================================================================
   TELA "ESCREVER"
   ================================================================ */
function renderEscrever() {
  const root = document.getElementById('escRoot');
  if (!root) return;
  const fonte = STYLE_FONTS.find((f) => f.id === escState.fonte) || STYLE_FONTS[0];
  const temMedia = !!escState.media;

  root.innerHTML = `
  <div class="esc-wrap">
    <div class="esc-card">
      <div class="composer-head" style="margin-bottom:12px;">
        ${
          state.currentUser
            ? `<div class="composer-avatar" style="background:${colorForName(state.currentUser.username)}; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:13px;">${initials(state.currentUser.username)}</div><b>${escapeHtml(state.currentUser.username)}</b>`
            : `<span style="color:var(--text-faint); font-size:14px;">Entre para guardar ou publicar o que escrever</span>`
        }
      </div>

      <div class="esc-preview ${temMedia ? 'has-media' : ''}" id="escPreview"
           style="background:${escFundoCSS()}; color:${escTinta()};">
        ${
          temMedia
            ? `
          <div class="esc-media-layer">
            ${
              escState.media.tipo === 'video'
                ? `<video src="${escState.media.src}" autoplay muted loop playsinline style="filter:${escState.media.filtro || 'none'}"></video>`
                : `<img src="${escState.media.src}" alt="" style="filter:${escState.media.filtro || 'none'}">`
            }
          </div>
          <div class="esc-media-scrim"></div>`
            : ''
        }
        <div class="esc-preview-inner" ${temMedia ? 'style="color:#fff; text-shadow:0 2px 12px rgba(0,0,0,.5);"' : ''}>
          ${
            escState.quote
              ? `
          <div class="esc-quote-ref">
            <button class="esc-qr-del" id="escQrDel" aria-label="Remover frase anexada">${f5svg('fechar', 14)}</button>
            <p>&ldquo;${escapeHtml(escState.quote.text)}&rdquo;</p>
            <span>— ${escapeHtml(escState.quote.author)}</span>
          </div>`
              : ''
          }
          <textarea id="escTexto" maxlength="900" style="font-family:${fonte.family};"
            placeholder="${escState.quote ? 'Escreva o que essa frase te trouxe…' : 'O que você está vivendo hoje? Escreva um relato, uma frase, um lembrete…'}">${escapeHtml(escState.texto)}</textarea>
        </div>
      </div>

      <div class="esc-toolbar">
        <span class="esc-tool-label">Estilo do cartão</span>
        <div class="font-row" id="escFontes">
          ${STYLE_FONTS.map((f) => `<button class="font-opt ${escState.fonte === f.id ? 'active' : ''}" data-font="${f.id}" style="font-family:${f.family}">${f.label}</button>`).join('')}
        </div>
      </div>
      <div class="esc-toolbar">
        <div class="bg-row" id="escCores">
          ${STYLE_COLORS.map((c) => `<button class="bg-opt ${!escState.fundo && escState.cor === c.id ? 'active' : ''}" data-color="${c.id}" style="background:${c.bg}" aria-label="Estilo ${c.id}"></button>`).join('')}
        </div>
        <button class="esc-tool ${escState.painel === 'galeria' ? 'on' : ''}" id="escGaleria" title="Galeria de fundos" aria-label="Galeria de fundos">${f5svg('galeria', 20)}</button>
        <button class="esc-tool" id="escMais" title="Adicionar foto ou vídeo" aria-label="Adicionar foto ou vídeo">${f5svg('mais', 20)}</button>
        <button class="esc-tool ${escState.painel === 'musica' ? 'on' : ''}" id="escMusica" title="Adicionar música" aria-label="Adicionar música">${f5svg('nota', 20)}</button>
        ${temMedia ? `<button class="esc-tool" id="escEditarMedia" title="Editar mídia" aria-label="Editar mídia">${f5svg('lapis', 20)}</button>` : ''}
        ${temMedia ? `<button class="esc-tool" id="escRemoverMedia" title="Remover mídia" aria-label="Remover mídia">${f5svg('lixo', 20)}</button>` : ''}
      </div>

      <div id="escPainel"></div>

      ${
        escState.musica
          ? `
      <div class="esc-panel" style="display:flex;align-items:center;gap:10px;">
        <span class="mus-play" id="escMusPrev">${f5svg('play', 14, 'currentColor', 0)}</span>
        <div class="mus-meta">
          <b>${escapeHtml(escState.musica.nome)}</b>
          <small>trecho de ${fmtSeg(escState.musica.de)} a ${fmtSeg(escState.musica.ate)}${escState.musica.persistir === false ? ' · disponível nesta sessão' : ''}</small>
        </div>
        <button class="esc-tool" id="escMusDel" aria-label="Remover música">${f5svg('lixo', 18)}</button>
      </div>`
          : ''
      }

      <div class="esc-actions">
        <button class="btn btn-coral btn-lg" id="escPublicar">Publicar na comunidade</button>
        <button class="btn btn-outline btn-lg" id="escGuardar">Guardar relato pessoal</button>
      </div>
      <p class="esc-note">Filtro de linguagem ativo · publicações passam por moderação. O relato pessoal é privado: só você vê.</p>
    </div>
  </div>
  <input type="file" id="escFile" accept="image/*,video/*" style="display:none">
  <input type="file" id="escAudioFile" accept="audio/*" style="display:none">`;

  wireEscrever();
}

function fmtSeg(s) {
  s = Math.max(0, Math.round(s || 0));
  const m = Math.floor(s / 60),
    r = s % 60;
  return m + ':' + String(r).padStart(2, '0');
}

function wireEscrever() {
  const root = document.getElementById('escRoot');
  const ta = document.getElementById('escTexto');
  if (ta) {
    ta.addEventListener('input', () => {
      escState.texto = ta.value;
    });
    ta.style.height = 'auto';
  }
  root.querySelectorAll('#escFontes .font-opt').forEach((b) =>
    b.addEventListener('click', () => {
      escState.fonte = b.dataset.font;
      renderEscrever();
    })
  );
  root.querySelectorAll('#escCores .bg-opt').forEach((b) =>
    b.addEventListener('click', () => {
      escState.cor = b.dataset.color;
      escState.fundo = null;
      renderEscrever();
    })
  );

  const qrDel = document.getElementById('escQrDel');
  if (qrDel)
    qrDel.addEventListener('click', () => {
      escState.quote = null;
      renderEscrever();
    });

  document.getElementById('escGaleria').addEventListener('click', () => {
    escState.painel = escState.painel === 'galeria' ? null : 'galeria';
    renderEscrever();
  });
  document.getElementById('escMusica').addEventListener('click', () => {
    escState.painel = escState.painel === 'musica' ? null : 'musica';
    renderEscrever();
  });
  document.getElementById('escMais').addEventListener('click', () => {
    document.getElementById('escFile').click();
  });
  document.getElementById('escFile').addEventListener('change', (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) abrirEditorMidia(f);
    e.target.value = '';
  });
  const edt = document.getElementById('escEditarMedia');
  if (edt)
    edt.addEventListener('click', () => {
      if (escState.media) abrirEditorMidia(null, escState.media);
    });
  const rem = document.getElementById('escRemoverMedia');
  if (rem)
    rem.addEventListener('click', () => {
      escState.media = null;
      renderEscrever();
    });

  const mp = document.getElementById('escMusPrev');
  if (mp)
    mp.addEventListener('click', () => {
      if (Musica.estaTocando(escState.musica.id)) {
        Musica.parar();
        mp.innerHTML = f5svg('play', 14, 'currentColor', 0);
        return;
      }
      mp.innerHTML = f5svg('pausa', 14, 'currentColor', 0);
      Musica.tocarRef(escState.musica, () => {
        mp.innerHTML = f5svg('play', 14, 'currentColor', 0);
      });
    });
  const md = document.getElementById('escMusDel');
  if (md)
    md.addEventListener('click', () => {
      Musica.parar();
      escState.musica = null;
      renderEscrever();
    });

  if (escState.painel === 'galeria') renderPainelGaleria();
  if (escState.painel === 'musica') renderPainelMusica();

  document.getElementById('escPublicar').addEventListener('click', () => {
    requireAuth(() => enviarRelato('comunidade'), 'Crie sua conta para publicar na comunidade.');
  });
  document.getElementById('escGuardar').addEventListener('click', () => {
    requireAuth(() => enviarRelato('pessoal'), 'Crie sua conta para guardar relatos pessoais.');
  });
}

/* ---------------- painel: galeria de fundos ---------------- */
function renderPainelGaleria() {
  const box = document.getElementById('escPainel');
  const cat = FUNDOS.find((c) => c.id === escState.catFundo) || FUNDOS[0];
  box.innerHTML = `
  <div class="esc-panel">
    <div class="esc-panel-head">
      <b>Galeria de fundos</b>
      <button class="ao-back" id="escFundoLimpar">Sem fundo</button>
    </div>
    <div class="esc-cats">
      ${FUNDOS.map((c) => `<button class="${c.id === cat.id ? 'on' : ''}" data-catfundo="${c.id}">${escapeHtml(c.nome)}</button>`).join('')}
    </div>
    <div class="esc-grid-bg">
      ${cat.itens
        .map(([nome, css], i) => {
          const on = escState.fundo && escState.fundo.cat === cat.id && escState.fundo.i === i;
          return `<button class="esc-bg-opt ${on ? 'on' : ''}" data-fundo="${cat.id}|${i}" style="background:${css}; background-size:cover;" aria-label="${escapeHtml(nome)}"><span>${escapeHtml(nome)}</span></button>`;
        })
        .join('')}
    </div>
  </div>`;
  box.querySelectorAll('[data-catfundo]').forEach((b) =>
    b.addEventListener('click', () => {
      escState.catFundo = b.dataset.catfundo;
      renderPainelGaleria();
    })
  );
  box.querySelectorAll('[data-fundo]').forEach((b) =>
    b.addEventListener('click', () => {
      const [c, i] = b.dataset.fundo.split('|');
      escState.fundo = fundoPorRef({ cat: c, i: Number(i) });
      renderEscrever();
    })
  );
  document.getElementById('escFundoLimpar').addEventListener('click', () => {
    escState.fundo = null;
    renderEscrever();
  });
}

/* ---------------- painel: música ---------------- */

/* ================================================================
   EDITOR DE FOTO E VÍDEO
   Recorte, luz, contraste, saturação, temperatura, desfoque,
   vinheta, texto sobre a mídia com escolha de fonte, tamanho, cor
   e posição. Vídeo ganha ainda corte de início e fim.
   ================================================================ */
const edState = {
  tipo: 'imagem',
  src: null,
  img: null,
  videoEl: null,
  zoom: 1,
  ox: 0,
  oy: 0,
  prop: 'orig',
  brilho: 100,
  contraste: 100,
  satur: 100,
  temp: 0,
  desfoque: 0,
  vinheta: 0,
  texto: '',
  fonte: 'display',
  tamanho: 44,
  cor: '#FFFFFF',
  pos: 'baixo',
  vDe: 0,
  vAte: 0,
  arquivo: null
};
const ED_FONTES = [
  { id: 'display', label: 'Serifada', css: "600 {S}px 'Literata', Georgia, serif" },
  { id: 'body', label: 'Padrão', css: "800 {S}px 'Ysabeau Office', sans-serif" },
  { id: 'hand', label: 'Manuscrita', css: "700 {S}px 'Caveat', cursive" },
  { id: 'mono', label: 'Máquina', css: "700 {S}px ui-monospace, 'Courier New', monospace" }
];
const ED_CORES = ['#FFFFFF', '#1B1817', '#FFD166', '#FF6B35', '#0B8A6E', '#7C3AED', '#E6399B', '#F4E9CE'];

function edFiltroCSS() {
  const t = edState.temp;
  const sep = t > 0 ? `sepia(${Math.min(100, t) / 160})` : '';
  const hue = t < 0 ? `hue-rotate(${t * 0.5}deg)` : '';
  return `brightness(${edState.brilho}%) contrast(${edState.contraste}%) saturate(${edState.satur}%) blur(${edState.desfoque}px) ${sep} ${hue}`.trim();
}

function abrirEditorMidia(file, existente) {
  let ov = document.getElementById('medOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'med-overlay';
    ov.id = 'medOverlay';
    document.body.appendChild(ov);
  }
  const prep = (tipo, src) => {
    Object.assign(edState, {
      tipo,
      src,
      zoom: 1,
      ox: 0,
      oy: 0,
      prop: 'orig',
      brilho: 100,
      contraste: 100,
      satur: 100,
      temp: 0,
      desfoque: 0,
      vinheta: 0,
      texto: '',
      fonte: 'display',
      tamanho: 44,
      cor: '#FFFFFF',
      pos: 'baixo',
      vDe: 0,
      vAte: 0,
      arquivo: file || null
    });
    if (existente && existente.ed) Object.assign(edState, existente.ed, { tipo, src, arquivo: null });
    edState.img = null;
    ov.classList.add('show');
    lockScroll();
    /* os controles aparecem na hora; a imagem entra no quadro assim
       que terminar de carregar, para a tela nunca ficar vazia */
    renderEditor();
    if (tipo === 'imagem') {
      const img = new Image();
      img.onload = () => {
        edState.img = img;
        desenharEditor();
      };
      img.onerror = () => toast('Não foi possível abrir esta imagem.');
      img.src = src;
    }
  };

  if (existente) {
    prep(existente.tipo, existente.src);
    return;
  }
  const tipo = file.type.startsWith('video') ? 'video' : 'imagem';
  if (file.size > 12 * 1024 * 1024 && tipo === 'imagem') {
    toast('Imagem muito grande. Escolha outra até 12 MB.');
    return;
  }
  const url = URL.createObjectURL(file);
  if (tipo === 'imagem') {
    const fr = new FileReader();
    fr.onload = () => prep('imagem', fr.result);
    fr.onerror = () => prep('imagem', url);
    fr.readAsDataURL(file);
  } else {
    prep('video', url);
  }
}
function fecharEditor() {
  const ov = document.getElementById('medOverlay');
  if (ov) ov.classList.remove('show');
  unlockScroll();
}

function renderEditor() {
  const ov = document.getElementById('medOverlay');
  if (!ov) return;
  const ehVideo = edState.tipo === 'video';
  ov.innerHTML = `
  <div class="med-box">
    <div>
      <div class="med-stage" id="medStage">
        ${
          ehVideo
            ? `<video id="medVideo" src="${edState.src}" controls playsinline style="filter:${edFiltroCSS()}"></video>`
            : `<canvas id="medCanvas"></canvas>`
        }
      </div>
      <p class="med-tip" style="margin-top:8px;">${
        ehVideo
          ? 'Arraste os cortes para escolher o trecho. Os ajustes de luz, cor e texto são aplicados na exibição do relato.'
          : 'Arraste a imagem para reposicionar e use o zoom para recortar.'
      }</p>
    </div>

    <div class="med-side">
      <div class="med-title">${ehVideo ? 'Editar vídeo' : 'Editar foto'}</div>

      ${
        ehVideo
          ? `
      <div class="med-group">
        <b>${f5svg('cortar', 13)} Corte do vídeo</b>
        <div class="med-row"><label>Início</label><input type="range" id="edVDe" min="0" max="100" value="0"><output id="outVDe">0:00</output></div>
        <div class="med-row"><label>Fim</label><input type="range" id="edVAte" min="0" max="100" value="100"><output id="outVAte">—</output></div>
      </div>`
          : `
      <div class="med-group">
        <b>${f5svg('cortar', 13)} Recorte</b>
        <div class="med-chips" style="margin-bottom:9px;">
          ${[
            ['orig', 'Original'],
            ['1:1', 'Quadrado'],
            ['4:5', 'Retrato'],
            ['16:9', 'Paisagem'],
            ['9:16', 'Story']
          ]
            .map(
              ([k, l]) =>
                `<button class="med-chip ${edState.prop === k ? 'on' : ''}" data-prop="${k}">${l}</button>`
            )
            .join('')}
        </div>
        <div class="med-row"><label>Zoom</label><input type="range" id="edZoom" min="100" max="320" value="${Math.round(edState.zoom * 100)}"><output>${Math.round(edState.zoom * 100)}%</output></div>
        <button class="med-chip" id="edCentrar">Centralizar</button>
      </div>`
      }

      <div class="med-group">
        <b>Luz e cor</b>
        <div class="med-row"><label>Brilho</label><input type="range" id="edBrilho" min="40" max="180" value="${edState.brilho}"><output>${edState.brilho}</output></div>
        <div class="med-row"><label>Contraste</label><input type="range" id="edContraste" min="40" max="200" value="${edState.contraste}"><output>${edState.contraste}</output></div>
        <div class="med-row"><label>Saturação</label><input type="range" id="edSatur" min="0" max="220" value="${edState.satur}"><output>${edState.satur}</output></div>
        <div class="med-row"><label>Temperatura</label><input type="range" id="edTemp" min="-60" max="100" value="${edState.temp}"><output>${edState.temp}</output></div>
        <div class="med-row"><label>Desfoque</label><input type="range" id="edDesfoque" min="0" max="12" value="${edState.desfoque}"><output>${edState.desfoque}</output></div>
        <div class="med-row"><label>Vinheta</label><input type="range" id="edVinheta" min="0" max="100" value="${edState.vinheta}"><output>${edState.vinheta}</output></div>
      </div>

      <div class="med-group">
        <b>${f5svg('texto', 13)} Escrever sobre a mídia</b>
        <input type="text" class="med-input" id="edTexto" maxlength="140" placeholder="Escreva algo sobre a imagem…" value="${escapeHtml(edState.texto)}">
        <div class="med-chips" style="margin:9px 0;">
          ${ED_FONTES.map((f) => `<button class="med-chip ${edState.fonte === f.id ? 'on' : ''}" data-edfonte="${f.id}">${f.label}</button>`).join('')}
        </div>
        <div class="med-row"><label>Tamanho</label><input type="range" id="edTam" min="18" max="96" value="${edState.tamanho}"><output>${edState.tamanho}</output></div>
        <div class="med-colors" style="margin-bottom:9px;">
          ${ED_CORES.map((c) => `<button class="med-color ${edState.cor === c ? 'on' : ''}" data-edcor="${c}" style="background:${c}" aria-label="Cor ${c}"></button>`).join('')}
        </div>
        <div class="med-chips">
          ${[
            ['topo', 'Topo'],
            ['centro', 'Centro'],
            ['baixo', 'Base']
          ]
            .map(
              ([k, l]) =>
                `<button class="med-chip ${edState.pos === k ? 'on' : ''}" data-edpos="${k}">${l}</button>`
            )
            .join('')}
        </div>
      </div>

      <div class="med-foot">
        <button class="btn btn-coral" id="edAplicar">Aplicar ao relato</button>
        <button class="btn btn-outline" id="edCancelar">Cancelar</button>
      </div>
      <p class="med-tip">Nada é enviado para fora do seu aparelho: a edição acontece no próprio navegador.</p>
    </div>
  </div>`;

  wireEditor();
  if (!ehVideo) desenharEditor();
}

function wireEditor() {
  const ov = document.getElementById('medOverlay');
  const liga = (id, campo, transf) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      edState[campo] = transf ? transf(el.value) : Number(el.value);
      const out = el.parentElement.querySelector('output');
      if (out) out.textContent = el.id === 'edZoom' ? Math.round(edState.zoom * 100) + '%' : edState[campo];
      if (edState.tipo === 'imagem') desenharEditor();
      else {
        const v = document.getElementById('medVideo');
        if (v) v.style.filter = edFiltroCSS();
      }
    });
  };
  liga('edZoom', 'zoom', (v) => Number(v) / 100);
  liga('edBrilho', 'brilho');
  liga('edContraste', 'contraste');
  liga('edSatur', 'satur');
  liga('edTemp', 'temp');
  liga('edDesfoque', 'desfoque');
  liga('edVinheta', 'vinheta');
  liga('edTam', 'tamanho');

  ov.querySelectorAll('[data-prop]').forEach((b) =>
    b.addEventListener('click', () => {
      edState.prop = b.dataset.prop;
      ov.querySelectorAll('[data-prop]').forEach((x) => x.classList.toggle('on', x === b));
      desenharEditor();
    })
  );
  ov.querySelectorAll('[data-edfonte]').forEach((b) =>
    b.addEventListener('click', () => {
      edState.fonte = b.dataset.edfonte;
      ov.querySelectorAll('[data-edfonte]').forEach((x) => x.classList.toggle('on', x === b));
      if (edState.tipo === 'imagem') desenharEditor();
    })
  );
  ov.querySelectorAll('[data-edcor]').forEach((b) =>
    b.addEventListener('click', () => {
      edState.cor = b.dataset.edcor;
      ov.querySelectorAll('[data-edcor]').forEach((x) => x.classList.toggle('on', x === b));
      if (edState.tipo === 'imagem') desenharEditor();
    })
  );
  ov.querySelectorAll('[data-edpos]').forEach((b) =>
    b.addEventListener('click', () => {
      edState.pos = b.dataset.edpos;
      ov.querySelectorAll('[data-edpos]').forEach((x) => x.classList.toggle('on', x === b));
      if (edState.tipo === 'imagem') desenharEditor();
    })
  );
  const txt = document.getElementById('edTexto');
  if (txt)
    txt.addEventListener('input', () => {
      edState.texto = txt.value;
      if (edState.tipo === 'imagem') desenharEditor();
    });
  const cen = document.getElementById('edCentrar');
  if (cen)
    cen.addEventListener('click', () => {
      edState.ox = 0;
      edState.oy = 0;
      edState.zoom = 1;
      const z = document.getElementById('edZoom');
      if (z) z.value = 100;
      desenharEditor();
    });

  /* arrastar para reposicionar */
  const cv = document.getElementById('medCanvas');
  if (cv) {
    let arrastando = false,
      px = 0,
      py = 0;
    const start = (x, y) => {
      arrastando = true;
      px = x;
      py = y;
    };
    const move = (x, y) => {
      if (!arrastando) return;
      edState.ox += x - px;
      edState.oy += y - py;
      px = x;
      py = y;
      desenharEditor();
    };
    const end = () => {
      arrastando = false;
    };
    cv.addEventListener('pointerdown', (e) => {
      cv.setPointerCapture(e.pointerId);
      start(e.clientX, e.clientY);
    });
    cv.addEventListener('pointermove', (e) => move(e.clientX, e.clientY));
    cv.addEventListener('pointerup', end);
    cv.addEventListener('pointercancel', end);
  }

  /* corte do vídeo */
  const v = document.getElementById('medVideo');
  if (v) {
    v.addEventListener(
      'loadedmetadata',
      () => {
        const dur = isFinite(v.duration) ? v.duration : 0;
        if (!edState.vAte) edState.vAte = dur;
        const de = document.getElementById('edVDe'),
          ate = document.getElementById('edVAte');
        de.max = Math.floor(dur);
        ate.max = Math.floor(dur);
        de.value = Math.floor(edState.vDe);
        ate.value = Math.floor(edState.vAte);
        document.getElementById('outVDe').textContent = fmtSeg(edState.vDe);
        document.getElementById('outVAte').textContent = fmtSeg(edState.vAte);
      },
      { once: true }
    );
    const de = document.getElementById('edVDe'),
      ate = document.getElementById('edVAte');
    if (de)
      de.addEventListener('input', () => {
        edState.vDe = Math.min(Number(de.value), edState.vAte - 1);
        document.getElementById('outVDe').textContent = fmtSeg(edState.vDe);
        v.currentTime = edState.vDe;
      });
    if (ate)
      ate.addEventListener('input', () => {
        edState.vAte = Math.max(Number(ate.value), edState.vDe + 1);
        document.getElementById('outVAte').textContent = fmtSeg(edState.vAte);
      });
  }

  document.getElementById('edCancelar').addEventListener('click', fecharEditor);
  document.getElementById('edAplicar').addEventListener('click', aplicarEdicao);
  ov.addEventListener('click', (e) => {
    if (e.target === ov) fecharEditor();
  });
}

function edProporcao() {
  const p = edState.prop;
  if (p === '1:1') return 1;
  if (p === '4:5') return 4 / 5;
  if (p === '16:9') return 16 / 9;
  if (p === '9:16') return 9 / 16;
  return null;
}
function desenharEditor() {
  const cv = document.getElementById('medCanvas');
  if (!cv || !edState.img) return;
  const img = edState.img;
  const razao = edProporcao();
  const LARG = 1080;
  let w = LARG,
    h = razao ? Math.round(LARG / razao) : Math.round((LARG * img.height) / img.width);
  h = Math.min(h, 1620);
  cv.width = w;
  cv.height = h;
  const maxCss = Math.min(560, window.innerWidth - 80);
  cv.style.width = maxCss + 'px';
  cv.style.height = Math.round((maxCss * h) / w) + 'px';

  const ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.filter = edFiltroCSS();
  const escala = Math.max(w / img.width, h / img.height) * edState.zoom;
  const dw = img.width * escala,
    dh = img.height * escala;
  const fator = w / maxCss;
  const dx = (w - dw) / 2 + edState.ox * fator,
    dy = (h - dh) / 2 + edState.oy * fator;
  ctx.drawImage(img, dx, dy, dw, dh);
  ctx.restore();

  /* vinheta */
  if (edState.vinheta > 0) {
    const g = ctx.createRadialGradient(
      w / 2,
      h / 2,
      Math.min(w, h) * 0.25,
      w / 2,
      h / 2,
      Math.max(w, h) * 0.72
    );
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, `rgba(0,0,0,${(edState.vinheta / 100) * 0.85})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }

  /* texto */
  if (edState.texto.trim()) {
    const f = ED_FONTES.find((x) => x.id === edState.fonte) || ED_FONTES[0];
    const tam = edState.tamanho * (w / 1080) * 1.6;
    ctx.font = f.css.replace('{S}', Math.round(tam));
    ctx.textAlign = 'center';
    ctx.fillStyle = edState.cor;
    ctx.shadowColor = 'rgba(0,0,0,.55)';
    ctx.shadowBlur = tam * 0.32;
    ctx.shadowOffsetY = tam * 0.06;
    const linhas = quebrarTexto(ctx, edState.texto.trim(), w * 0.84);
    const alturaLinha = tam * 1.24;
    let y;
    if (edState.pos === 'topo') y = h * 0.14 + alturaLinha;
    else if (edState.pos === 'centro')
      y = h / 2 - ((linhas.length - 1) * alturaLinha) / 2 + alturaLinha * 0.32;
    else y = h * 0.9 - (linhas.length - 1) * alturaLinha;
    linhas.forEach((l, i) => ctx.fillText(l, w / 2, y + i * alturaLinha));
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
  }
}
function quebrarTexto(ctx, texto, max) {
  const palavras = texto.split(/\s+/);
  const linhas = [];
  let atual = '';
  palavras.forEach((p) => {
    const teste = atual ? atual + ' ' + p : p;
    if (ctx.measureText(teste).width > max && atual) {
      linhas.push(atual);
      atual = p;
    } else atual = teste;
  });
  if (atual) linhas.push(atual);
  return linhas.slice(0, 6);
}

function aplicarEdicao() {
  if (edState.tipo === 'imagem') {
    const cv = document.getElementById('medCanvas');
    if (!cv) {
      fecharEditor();
      return;
    }
    let dataURL = cv.toDataURL('image/jpeg', 0.82);
    if (dataURL.length > 1.6 * 1024 * 1024) dataURL = cv.toDataURL('image/jpeg', 0.62);
    escState.media = {
      tipo: 'imagem',
      src: dataURL,
      filtro: 'none',
      persistir: dataURL.length < 2.4 * 1024 * 1024,
      ed: {
        brilho: edState.brilho,
        contraste: edState.contraste,
        satur: edState.satur,
        temp: edState.temp,
        desfoque: edState.desfoque,
        vinheta: edState.vinheta,
        texto: edState.texto,
        fonte: edState.fonte,
        tamanho: edState.tamanho,
        cor: edState.cor,
        pos: edState.pos,
        prop: edState.prop,
        zoom: edState.zoom
      }
    };
  } else {
    const persistivel = edState.arquivo && edState.arquivo.size <= 2.4 * 1024 * 1024;
    const aplica = (src, persistir) => {
      escState.media = {
        tipo: 'video',
        src,
        filtro: edFiltroCSS(),
        persistir,
        vDe: edState.vDe,
        vAte: edState.vAte,
        legenda: edState.texto,
        legFonte: edState.fonte,
        legCor: edState.cor,
        legPos: edState.pos,
        legTam: edState.tamanho,
        ed: {
          brilho: edState.brilho,
          contraste: edState.contraste,
          satur: edState.satur,
          temp: edState.temp,
          desfoque: edState.desfoque,
          vinheta: edState.vinheta,
          texto: edState.texto,
          fonte: edState.fonte,
          tamanho: edState.tamanho,
          cor: edState.cor,
          pos: edState.pos,
          vDe: edState.vDe,
          vAte: edState.vAte
        }
      };
      fecharEditor();
      renderEscrever();
    };
    if (persistivel) {
      const fr = new FileReader();
      fr.onload = () => aplica(fr.result, true);
      fr.onerror = () => aplica(edState.src, false);
      fr.readAsDataURL(edState.arquivo);
      return;
    }
    if (edState.arquivo) toast('Vídeo grande: ele aparece nesta sessão, mas não fica guardado.', 4200);
    aplica(edState.src, false);
    return;
  }
  fecharEditor();
  renderEscrever();
}

/* ================================================================
   ENVIO DO RELATO — publicar na comunidade ou guardar para si
   Mídia e áudio ficam em chaves próprias, para não estourar o
   limite da chave do feed.
   ================================================================ */
const _midiaCache = new Map();
async function guardarMidia(id, media, compartilhado) {
  if (!media || media.persistir === false) return null;
  const chave = (compartilhado ? 'midia:' : 'pmidia:') + id;
  const payload = {
    tipo: media.tipo,
    src: media.src,
    filtro: media.filtro || 'none',
    legenda: media.legenda || '',
    legFonte: media.legFonte,
    legCor: media.legCor,
    legPos: media.legPos,
    vDe: media.vDe || 0,
    vAte: media.vAte || 0
  };
  _midiaCache.set(chave, payload);
  const ok = await dbSet(chave, payload, compartilhado);
  return ok ? chave : null;
}
async function carregarMidia(chave, compartilhado) {
  if (!chave) return null;
  if (_midiaCache.has(chave)) return _midiaCache.get(chave);
  const v = await dbGet(chave, compartilhado);
  if (v) _midiaCache.set(chave, v);
  return v;
}

async function enviarRelato(destino) {
  const texto = (escState.texto || '').trim();
  if (!texto && !escState.media && !escState.quote) {
    toast('Escreva algo, escolha uma mídia ou anexe uma frase antes de salvar.');
    return;
  }
  if (texto && containsBadWords(texto)) {
    toast('Seu texto contém linguagem imprópria e não foi enviado. Por favor, revise.', 4200);
    return;
  }
  const id = uid(destino === 'comunidade' ? 'post' : 'mp');
  const compartilhado = destino === 'comunidade';
  const chaveMidia = escState.media ? await guardarMidia(id, escState.media, compartilhado) : null;

  const musica = escState.musica
    ? {
        tipo: escState.musica.tipo,
        id: escState.musica.id,
        nome: escState.musica.nome,
        de: escState.musica.de,
        ate: escState.musica.ate,
        dur: escState.musica.dur,
        src: escState.musica.persistir && escState.musica.tipo === 'arquivo' ? escState.musica.src : null
      }
    : null;

  const comum = {
    id,
    text: texto,
    font: escState.fonte,
    color: escState.cor,
    fundo: escState.fundo ? { cat: escState.fundo.cat, i: escState.fundo.i } : null,
    midia: chaveMidia,
    midiaSessao: escState.media && !chaveMidia ? escState.media : null,
    musica,
    quote: escState.quote
      ? { text: escState.quote.text, author: escState.quote.author, idx: escState.quote.idx }
      : null,
    createdAt: Date.now()
  };

  if (compartilhado) {
    const post = Object.assign({}, comum, {
      authorEmail: state.currentUser.email,
      authorUsername: state.currentUser.username,
      likes: [],
      comments: [],
      reports: [],
      hidden: false,
      arq: false,
      del: false
    });
    state.communityPosts.unshift(post);
    if (state.communityPosts.length > 240) state.communityPosts.length = 240;
    await saveCommunityPosts();
    toast('Publicado na comunidade');
    limparEscrever();
    navigateTo('comunidade');
  } else {
    state.myPhrases.unshift(Object.assign({}, comum, { arq: false, del: false }));
    await saveMyPhrases();
    toast('Guardado nos seus relatos pessoais');
    limparEscrever();
    navigateTo('perfil');
  }
}
function limparEscrever() {
  Musica.parar();
  escState.texto = '';
  escState.media = null;
  escState.musica = null;
  escState.quote = null;
  escState.fundo = null;
  escState.painel = null;
  renderEscrever();
}

/* atalho: comentar a partir de uma frase expandida */
function comentarFrase(idx) {
  const q = QUOTES[idx];
  if (!q) return;
  escState.quote = { text: q.text, author: q.author, idx };
  escState.painel = null;
  closeQuoteModal();
  navigateTo('escrever');
  setTimeout(() => {
    const t = document.getElementById('escTexto');
    if (t) t.focus();
  }, 320);
}
