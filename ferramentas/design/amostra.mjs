// Amostra de conteúdo REAL para os protótipos do redesign (design/prototipos/).
// Abre o site, espera a cadeia de fases e copia, por qid, os dados exatos de cada frase escolhida:
// texto, fonte, original, categoria, status, autor, papel e foto curada (arquivo e enquadramento).
// Depois lê na API do Commons o autor e a licença de cada foto, para o crédito.
// Nada é digitado à mão: se uma frase mudar no acervo, basta rodar de novo.
//
// Uso: node ferramentas/design/amostra.mjs   -> design/prototipos/amostra.js
import fs from 'fs';
import path from 'path';
import { chromium, servir, soLocal, esperarCuradoria, RAIZ } from '../lib/navegador.mjs';

// Por que cada frase está aqui (todas do acervo atual):
// (Em 14/10/2026, as fotos curadas de Guimarães Rosa e Clarice Lispector apontam para arquivos
// que não existem no Commons: no site elas caem nas iniciais. Aqui servem de exemplo sem foto.)
const QIDS = [
  'f24aiu8x', // Machado de Assis · dedicatória de Memórias Póstumas (abertura da direção A), foto em domínio público
  'f283ibiw7kr', // Frida Kahlo · original em espanhol (abertura da direção B), foto em domínio público
  'q1gsfz1k16xaa3h', // Liev Tolstói · original em russo (abertura da direção C), foto de Prokudin-Gorskii
  'ql0t0xvhg9dsn', // Blaise Pascal · original em francês, com "õ" (frase ampliada)
  'q1v8oi7oe6cqdv', // Aristóteles · original em grego politônico
  'qmavfjkqarqzo', // Machado de Assis · muito curta
  'qmgk9qk9rw7ez', // Virginia Woolf · original em inglês, foto grande
  'f341010dah84', // Fernando Pessoa · autor de língua portuguesa
  'f241fhtl3', // Paulo Freire · com ç e ã; foto curada pequena (171 px)
  'f28asxuhfb', // Guimarães Rosa · frase longa (153 caracteres), sem foto válida
  'f28tdbfmcs', // Clarice Lispector · curta, sem foto válida
  'f2652b1y5', // José Saramago · sem foto curada
  'q4nnaf81ajlbj5' // Ditado Popular · status X, sem autor nem fonte
];
const UA =
  'MeMotiva-redesign/1.0 (prototipos; https://github.com/victormrcaldas-coder/Projeto-atualizado--Site)';
const SAIDA = path.join(RAIZ, 'design', 'prototipos', 'amostra.js');

const site = await servir();
const b = await chromium.launch();
const p = await b.newPage();
await soLocal(p);
await p.goto(site.url);
await esperarCuradoria(p, 3000);
const dados = await p.evaluate((qids) => {
  const frases = [];
  const autores = {};
  const faltando = [];
  for (const qid of qids) {
    const i = QUOTE_POR_QID[qid];
    const q = i === undefined ? null : QUOTES[i];
    if (!q) {
      faltando.push(qid);
      continue;
    }
    const cat = catById(q.cat);
    frases.push({
      qid: q.qid,
      texto: q.text,
      autor: q.author,
      fonte: q.src || '',
      original: q.orig || '',
      categoria: cat ? cat.name : q.cat,
      status: q.st,
      obra: q.obra || '',
      notaAutoria: q.notaAutoria || ''
    });
    if (!autores[q.author]) {
      const info = photoInfo(q.author);
      const arquivo = info && info.f && !PHOTO_BLOCKLIST.has(info.f) ? info.f : '';
      autores[q.author] = {
        papel: (typeof papelDe === 'function' ? papelDe(q.author) : PAPEIS[q.author]) || '',
        foto: arquivo
          ? {
              arquivo,
              enquadramento: info.card || 'center 22%',
              enquadramentoLargo: info.wide || 'center 28%'
            }
          : null
      };
    }
  }
  return { frases, autores, faltando };
}, QIDS);
await b.close();
site.fechar();
if (dados.faltando.length) throw new Error('qid não encontrado no acervo: ' + dados.faltando.join(', '));

/* ---------- créditos das fotos (API do Commons) ---------- */
const limpa = (h) =>
  String(h || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
const arquivos = [...new Set(Object.values(dados.autores).flatMap((a) => (a.foto ? [a.foto.arquivo] : [])))];
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
// O Commons limita pedidos seguidos (429): espera o tempo pedido e tenta de novo, até 6 vezes.
async function pedir(url) {
  for (let tentativa = 1; tentativa <= 6; tentativa++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA, 'Api-User-Agent': UA } });
    if (r.ok) return r.json();
    if (r.status !== 429 && r.status < 500) throw new Error('Commons respondeu ' + r.status);
    const depois = Number(r.headers.get('retry-after')) || 2 ** tentativa;
    await espera(Math.min(depois, 60) * 1000);
  }
  throw new Error('Commons não respondeu depois de 6 tentativas');
}
const fotos = {};
for (let i = 0; i < arquivos.length; i += 5) {
  const parte = arquivos.slice(i, i + 5);
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo' +
    '&iiprop=extmetadata%7Csize&titles=' +
    encodeURIComponent(parte.map((f) => 'File:' + f).join('|'));
  const j = await pedir(url);
  await espera(1000);
  const normal = Object.fromEntries((j.query.normalized || []).map((n) => [n.to, n.from]));
  for (const pg of Object.values(j.query.pages)) {
    const original = (normal[pg.title] || pg.title).replace(/^File:/, '');
    const info = (pg.imageinfo || [])[0] || {};
    const m = info.extmetadata || {};
    if ('missing' in pg) {
      fotos[original] = { existe: false };
      continue;
    }
    fotos[original] = {
      existe: true,
      largura: info.width || null,
      altura: info.height || null,
      autor: limpa(m.Artist && m.Artist.value) || 'Autor não informado no Commons',
      licenca: limpa(m.LicenseShortName && m.LicenseShortName.value) || 'Licença não informada',
      pagina:
        'https://commons.wikimedia.org/wiki/' + encodeURIComponent('File:' + original).replace(/%20/g, '_')
    };
  }
}
for (const f of arquivos) if (!fotos[f]) throw new Error('Commons não devolveu dados para ' + f);
// Foto curada cujo arquivo não existe no Commons: no site ela cai nas iniciais, então aqui o autor fica sem foto.
for (const a of Object.values(dados.autores)) {
  if (a.foto && fotos[a.foto.arquivo].existe === false) {
    a.fotoQuebrada = a.foto.arquivo;
    a.foto = null;
  }
}
for (const [f, v] of Object.entries(fotos)) if (v.existe === false) delete fotos[f];

const cabecalho = `/* MeMotiva · amostra de conteúdo real para os protótipos do redesign.
   GERADO por ferramentas/design/amostra.mjs em ${new Date().toISOString().slice(0, 10)}. Não edite à mão:
   rode o script de novo. Frases, fontes, originais, papéis e fotos vêm do estado final do site;
   autor e licença das fotos vêm da API do Wikimedia Commons. */\n`;
const corpo = {
  geradoEm: new Date().toISOString().slice(0, 10),
  commons: 'https://commons.wikimedia.org/wiki/Special:FilePath/',
  frases: dados.frases,
  autores: dados.autores,
  fotos
};
fs.mkdirSync(path.dirname(SAIDA), { recursive: true });
fs.writeFileSync(SAIDA, cabecalho + 'window.AMOSTRA = ' + JSON.stringify(corpo, null, 2) + ';\n');
console.log(
  `${dados.frases.length} frases, ${Object.keys(dados.autores).length} autores, ${arquivos.length} fotos -> ${path.relative(RAIZ, SAIDA)}`
);
