/* MeMotiva — nucleo/01-utilitarios-e-categorias.js
   Utilitários (armazenamento local, escape, slug, toast, hash), categorias e cores.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ============================================================
   MEMOTIVA — NÚCLEO
   Funções utilitárias usadas por todos os outros arquivos.
   ============================================================ */

/* ---------------- STORAGE LAYER ----------------
   ATENÇÃO (para quem for hospedar o site): fora do ambiente de artifacts
   do Claude.ai, window.storage não existe e tudo (contas, favoritos,
   relatos da comunidade) fica só em memória — some ao recarregar a
   página. Para produção, trocar dbGet/dbSet por um back-end real.

   Usa window.storage (armazenamento persistente do artifact) como
   "banco de dados" deste protótipo. Se não estiver disponível
   (ex: fora do ambiente Claude.ai), cai para memória local, então
   o site nunca quebra — só perde a persistência entre sessões. */
const memoryFallback = {};
const hasRealStorage = () => typeof window.storage !== 'undefined' && window.storage !== null;

async function dbGet(key, shared = false) {
  try {
    if (hasRealStorage()) {
      const r = await window.storage.get(key, shared);
      return r ? JSON.parse(r.value) : null;
    }
    const k = (shared ? 'S:' : 'P:') + key;
    return memoryFallback.hasOwnProperty(k) ? JSON.parse(memoryFallback[k]) : null;
  } catch (e) {
    return null;
  }
}
async function dbSet(key, value, shared = false) {
  try {
    const payload = JSON.stringify(value);
    if (hasRealStorage()) {
      await window.storage.set(key, payload, shared);
    } else {
      memoryFallback[(shared ? 'S:' : 'P:') + key] = payload;
    }
    return true;
  } catch (e) {
    console.error('storage set failed', e);
    return false;
  }
}

/* ---------------- UTILITIES ---------------- */
function uid(prefix = 'id') {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]
  );
}
function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
function initials(name) {
  return name
    .split(' ')
    .filter((w) => w.length > 1 || w === name.split(' ')[0])
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}
const AVATAR_PALETTE = [
  '#C2540A',
  '#0B8A6E',
  '#FFB627',
  '#7C3AED',
  '#2563EB',
  '#DB2777',
  '#059669',
  '#EA580C'
];
function colorForName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = name.charCodeAt(i) + ((h << 5) - h);
  }
  return AVATAR_PALETTE[Math.abs(h) % AVATAR_PALETTE.length];
}
function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'agora mesmo';
  const m = Math.floor(s / 60);
  if (m < 60) return `há ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `há ${h}h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `há ${d}d`;
  const w = Math.floor(d / 7);
  if (w < 5) return `há ${w}sem`;
  return new Date(ts).toLocaleDateString('pt-BR');
}
function toast(msg, ms = 2600) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._tm);
  toast._tm = setTimeout(() => t.classList.remove('show'), ms);
}
async function sha256(text) {
  const enc = new TextEncoder().encode('memotiva_v1_' + text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/* ---------------- CATEGORIAS ----------------
   Cada categoria tem uma cor sólida única (sem repetição entre
   categorias vizinhas) e um ícone em linha (SVG, sem emoji),
   sempre desenhado em branco sobre o fundo colorido. */
const CATEGORIES = [
  {
    id: 'familia',
    name: 'Família',
    desc: 'Os laços que sustentam e acolhem',
    color: '#E28D5C',
    icon: '<path d="M4 12 12 4l8 8"/><path d="M6 10.5V20h12v-9.5"/><path d="M10 20v-6h4v6"/>'
  },
  {
    id: 'educacao',
    name: 'Educação',
    desc: 'O poder de aprender e ensinar',
    color: '#4A90E2',
    icon: '<path d="M12 6.2c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5Z"/><path d="M12 6.2v13"/>'
  },
  {
    id: 'negocios',
    name: 'Negócios',
    desc: 'Visão, risco e liderança',
    color: '#5B7B9A',
    icon: '<rect x="3" y="8" width="18" height="11" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
  },
  {
    id: 'empoderamento',
    name: 'Empoderamento Feminino',
    desc: 'Vozes que abriram caminho',
    color: '#E6399B',
    icon: '<circle cx="12" cy="9" r="5.5"/><path d="M12 14.5V21M8.5 18h7"/>'
  },
  {
    id: 'vida',
    name: 'Vida',
    desc: 'Sobre viver com intenção',
    color: '#2ECC71',
    icon: '<path d="M12 21V11"/><path d="M12 11C12 6.5 8.5 4 4 4c0 4.5 3 8 8 7Z"/><path d="M12 14c0-3.5 2.5-5.5 6-5.5 0 3.5-2 6-6 5.5Z"/>'
  },
  {
    id: 'dificeis',
    name: 'Momentos Difíceis',
    desc: 'Força para atravessar a tempestade',
    color: '#95A5A6',
    icon: '<path d="M7 15.5a4 4 0 0 1 .8-7.9 5.5 5.5 0 0 1 10.6 1.7A3.5 3.5 0 0 1 17.5 15.5H7Z"/><path d="M9 19l-1 2.5M13 19l-1 2.5M17 19l-1 2.5"/>'
  },
  {
    id: 'gratidao',
    name: 'Gratidão',
    desc: 'O valor do que já temos',
    color: '#F39C12',
    icon: '<path d="M12 17s-5-3.2-6.8-6.2C3.8 8.7 4.5 6 7 5.2 8.8 4.6 10.6 5.4 12 7c1.4-1.6 3.2-2.4 5-1.8 2.5.8 3.2 3.5 1.8 5.6C17 13.8 12 17 12 17Z"/><path d="M12 2v1.7M19.5 5.2l-1.2 1.2M4.5 5.2l1.2 1.2"/>'
  },
  {
    id: 'autorreconhecimento',
    name: 'Identidade e Autoconhecimento',
    desc: 'Descobrir quem você é e aceitar o que encontrar',
    color: '#9B59B6',
    icon: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5 5-2Z"/>'
  },
  {
    id: 'fe',
    name: 'Religiosidade',
    desc: 'Fé, espiritualidade e propósito',
    color: '#F1C40F',
    icon: '<rect x="10.5" y="10" width="3" height="10" rx="1"/><path d="M12 2c1.6 2.2 2.5 3.6 2.5 5.2a2.5 2.5 0 1 1-5 0C9.5 5.6 10.4 4.2 12 2Z"/><path d="M8 20h8"/>'
  },
  {
    id: 'conforto',
    name: 'Conforto',
    desc: 'Um colo em forma de palavra',
    color: '#73C6B6',
    icon: '<path d="M4 12a8 8 0 0 1 16 0Z"/><path d="M12 12v7.5a1.8 1.8 0 0 1-3.5 0"/><path d="M12 4V2.3"/>'
  },
  {
    id: 'motivacao',
    name: 'Motivação',
    desc: 'Coragem para dar o próximo passo',
    color: '#FF6B35',
    icon: '<path d="M12 2.3c2.2 3.5 4.5 5.8 4.5 9.3a4.5 4.5 0 1 1-9 0c0-2.6.9-4.6 1.8-5.9.3 1.8 1.4 2.2 1.4.8-.2-1.8.2-3 1.3-4.2Z"/>'
  },
  {
    id: 'financas',
    name: 'Finanças',
    desc: 'Sabedoria sobre dinheiro e valor',
    color: '#1ABC9C',
    symbol: '$'
  },
  {
    id: 'amor',
    name: 'Amor',
    desc: 'O sentimento que move tudo',
    color: '#E74C3C',
    icon: '<path d="M12 21s-7.5-4.7-10.2-9.1C.2 9 1 5.4 4.2 4.1 6.7 3 9.3 4 12 7c2.7-3 5.3-4 7.8-2.9 3.2 1.3 4 4.9 2.4 7.8C19.5 16.3 12 21 12 21Z"/>'
  },
  {
    id: 'reflexao',
    name: 'Reflexão',
    desc: 'Pausas para pensar com mais clareza',
    color: '#F4D03F',
    icon: '<path d="M9 18h6M10 21.5h4"/><path d="M12 2a6.5 6.5 0 0 0-3.8 11.8c.6.5 1 1.2 1 2.2h5.6c0-1 .4-1.7 1-2.2A6.5 6.5 0 0 0 12 2Z"/>'
  },
  {
    id: 'amizade',
    name: 'Amizade',
    desc: 'Laços escolhidos para a vida toda',
    color: '#FF8C42',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'
  },
  {
    id: 'felicidade',
    name: 'Felicidade',
    desc: 'O que realmente significa estar bem',
    color: '#FFD166',
    icon: '<circle cx="12" cy="12" r="4.2"/><path d="M12 3.5v2.3M12 18.2v2.3M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3.5 12h2.3M18.2 12h2.3M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/>'
  },
  {
    id: 'filosofos',
    name: 'Filosofia e Sabedoria',
    desc: 'Grandes pensadores, grandes perguntas',
    color: '#8B9467',
    icon: '<path d="M4 21h16M6 21V9M18 21V9M4 9h16L12 4 4 9Z"/>'
  },
  {
    id: 'manipulacao',
    name: 'Influência e Persuasão',
    desc: 'Reconhecer e compreender os jogos de poder',
    color: '#D4AC0D',
    icon: '<path d="M5 4h14M7 4v2.5l3 4M17 4v2.5l-3 4M10 10.5h4v3a2 2 0 0 1-4 0v-3Z"/><path d="M8 20h8l-1.5-4h-5L8 20Z"/>'
  },
  {
    id: 'politica',
    name: 'Política',
    desc: 'Poder, cidadania e o bem comum',
    color: '#A93226',
    icon: '<rect x="4" y="9" width="16" height="12" rx="1"/><path d="m4 9 3-5h10l3 5"/><path d="M12 13v4M9.2 15h5.6"/>'
  },
  {
    id: 'ditados',
    name: 'Ditados Populares',
    desc: 'A sabedoria que passa de geração em geração',
    color: '#A569BD',
    icon: '<path d="M4 4h16v11.5H8.5L4 19V4Z"/><path d="M7.5 8.5h9M7.5 11.5h5.5"/>'
  },
  {
    id: 'lideranca',
    name: 'Liderança',
    desc: 'Inspirar e conduzir pelo exemplo',
    color: '#00A8E8',
    icon: '<circle cx="12" cy="7" r="3.2"/><path d="M5 20c.5-4 3-6 7-6s6.5 2 7 6"/><path d="M4 10.5 2.5 9M20 10.5 21.5 9"/>'
  },
  {
    id: 'empreendedorismo',
    name: 'Empreendedorismo e Marketing',
    desc: 'Construir, arriscar e conquistar mercado',
    color: '#D35400',
    icon: '<path d="M3 21h18"/><path d="M5 21V10l5-4 5 4v11"/><path d="M14 21v-7l4-3 3 3v7"/>'
  }
];
function catById(id) {
  return CATEGORIES.find((c) => c.id === id);
}
// Regra de correspondência: frase comum = só sua categoria única.
// Ditado popular = sua categoria própria (ditados) OU qualquer tema relacionado listado em themes.
function quoteMatchesCat(q, catId) {
  if (catId === 'all') return true;
  if (q.cat === 'ditados') return catId === 'ditados' || (q.themes && q.themes.includes(catId));
  return q.cat === catId;
}
function quoteCatLabel(q) {
  // Para o rótulo exibido no cartão: ditados sempre mostram "Ditados Populares".
  return catById(q.cat)?.name || '';
}
function catColor(id) {
  const c = catById(id);
  return c ? c.color : 'var(--text-faint)';
}
/* Tinta do cartão: escolhida pelo contraste real (WCAG) contra a cor de fundo
   do tema, para que cores claras (amarelos, verdes) não fiquem com texto branco
   ilegível. As cores de fundo não mudam — só a cor do texto/ícone. */
const CAT_INK_DARK = '#0E0C0B';
function relLum(hex) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return (
    0.2126 * f(parseInt(hex.slice(1, 3), 16)) +
    0.7152 * f(parseInt(hex.slice(3, 5), 16)) +
    0.0722 * f(parseInt(hex.slice(5, 7), 16))
  );
}
function contrast(a, b) {
  const la = relLum(a),
    lb = relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
function catIconHTML(cat, size = 26, ink) {
  const c = ink || 'currentColor';
  if (cat.symbol) {
    return `<span style="font-family:var(--font-display); font-size:${size}px; font-weight:700; color:${c}; line-height:1;">${cat.symbol}</span>`;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${cat.icon}</svg>`;
}
