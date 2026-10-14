// Baixa as fontes do sistema de design (todas SIL OFL) para assets/fonts/ e gera assets/css/00-fontes.css.
//
// Uso (atrás do proxy da nuvem):  NODE_USE_ENV_PROXY=1 node ferramentas/design/baixar-fontes.mjs
//
// - Lê o CSS do Google Fonts e guarda os .woff2 variáveis de cada subconjunto (o OFL permite reduzir).
// - Só os subconjuntos que o acervo usa: latim, latim estendido, grego (com o politônico) e cirílico.
// - Guarda o OFL.txt de cada família, tirado do repositório google/fonts, e um LEIA-ME com a origem.
// - Os @font-face de fallback (size-adjust etc.) vêm de ferramentas/design/metricas-fallback.py,
//   que lê os arquivos baixados; este script só os inclui se o JSON existir.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const FONTES = path.join(RAIZ, 'assets/fonts');
const CSS = path.join(RAIZ, 'assets/css/00-fontes.css');
const METRICAS = path.join(FONTES, 'metricas-fallback.json');
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const FAMILIAS = [
  {
    nome: 'Noto Serif Display',
    pasta: 'noto-serif-display',
    ofl: 'ofl/notoserifdisplay/OFL.txt',
    consulta: 'Noto+Serif+Display:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900',
    papel: 'todas as frases (itálico, um estilo só), nomes de autor e títulos',
    subconjuntos: ['latin', 'latin-ext', 'greek', 'greek-ext', 'cyrillic', 'cyrillic-ext']
  },
  {
    nome: 'Hanken Grotesk',
    pasta: 'hanken-grotesk',
    ofl: 'ofl/hankengrotesk/OFL.txt',
    consulta: 'Hanken+Grotesk:ital,wght@0,100..900;1,100..900',
    papel: 'interface: navegação, rótulos, botões e metadados',
    subconjuntos: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext']
  },
  {
    nome: 'Literata',
    pasta: 'literata',
    ofl: 'ofl/literata/OFL.txt',
    consulta: 'Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900',
    papel: 'leitura longa: biografias, histórias e descrições de obras',
    subconjuntos: ['latin', 'latin-ext', 'greek', 'greek-ext', 'cyrillic', 'cyrillic-ext']
  },
  {
    nome: 'Caveat',
    pasta: 'caveat',
    ofl: 'ofl/caveat/OFL.txt',
    consulta: 'Caveat:wght@400..700',
    papel: 'só a opção "Manuscrita" do Escrever',
    subconjuntos: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext']
  }
];

async function pedir(url, tipo = 'text') {
  for (let tentativa = 1; ; tentativa++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (r.ok) return tipo === 'text' ? r.text() : Buffer.from(await r.arrayBuffer());
    if (tentativa >= 4 || (r.status < 500 && r.status !== 429)) throw new Error(`${r.status} em ${url}`);
    await new Promise((ok) => setTimeout(ok, 1500 * tentativa));
  }
}

// O CSS do Google vem em blocos "/* subconjunto */ @font-face { ... }".
function blocos(css) {
  const re = /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]*)\}/g;
  const out = [];
  for (let m; (m = re.exec(css)); ) {
    const corpo = m[2];
    const campo = (nome) => (corpo.match(new RegExp(`${nome}:\\s*([^;]+);`)) || [])[1]?.trim();
    out.push({
      subconjunto: m[1],
      estilo: campo('font-style'),
      peso: campo('font-weight'),
      url: (corpo.match(/url\(([^)]+)\)/) || [])[1],
      faixa: campo('unicode-range')
    });
  }
  return out;
}

const faces = [];
const leia = [
  '# Fontes do MeMotiva',
  '',
  'Todas sob a **SIL Open Font License 1.1** (arquivo `OFL.txt` em cada pasta). Decisão 7 em `design/DECISOES.md`.',
  '',
  'Geradas por `ferramentas/design/baixar-fontes.mjs` a partir do Google Fonts. Os arquivos são os `.woff2`',
  'variáveis por subconjunto de caracteres, como o Google os serve; o navegador baixa só o subconjunto que a página usa.',
  '',
  '| Família | Papel | Versão no Google Fonts | Arquivos |',
  '|---|---|---|---|'
];
fs.mkdirSync(FONTES, { recursive: true });

for (const fam of FAMILIAS) {
  const css = await pedir(`https://fonts.googleapis.com/css2?family=${fam.consulta}&display=swap`);
  const pasta = path.join(FONTES, fam.pasta);
  fs.rmSync(pasta, { recursive: true, force: true });
  fs.mkdirSync(pasta, { recursive: true });
  let versao = '';
  let n = 0;
  for (const b of blocos(css)) {
    if (!fam.subconjuntos.includes(b.subconjunto)) continue;
    versao = (b.url.match(/\/s\/[^/]+\/(v\d+)\//) || [])[1] || versao;
    const arquivo = `${fam.pasta}-${b.estilo === 'italic' ? 'italico' : 'normal'}-${b.subconjunto}.woff2`;
    fs.writeFileSync(path.join(pasta, arquivo), await pedir(b.url, 'bin'));
    faces.push({ ...b, familia: fam.nome, caminho: `../fonts/${fam.pasta}/${arquivo}` });
    n++;
  }
  fs.writeFileSync(
    path.join(pasta, 'OFL.txt'),
    await pedir(`https://raw.githubusercontent.com/google/fonts/main/${fam.ofl}`)
  );
  leia.push(`| ${fam.nome} | ${fam.papel} | ${versao} | ${n} |`);
  console.log(`${fam.nome}: ${n} arquivos (${versao})`);
}
leia.push('', `Baixadas em ${new Date().toISOString().slice(0, 10)}.`, '');
fs.writeFileSync(path.join(FONTES, 'LEIA-ME.md'), leia.join('\n'));

// ---------- 00-fontes.css ----------
const linhas = [
  '/* ============================================================',
  '   FONTES DO MEMOTIVA (todas SIL OFL; arquivos em assets/fonts/)',
  '   Gerado por ferramentas/design/baixar-fontes.mjs. Não editar à mão.',
  '   ============================================================ */',
  ''
];
for (const f of faces) {
  linhas.push(
    `/* ${f.familia} · ${f.estilo} · ${f.subconjunto} */`,
    '@font-face {',
    `  font-family: '${f.familia}';`,
    `  font-style: ${f.estilo};`,
    `  font-weight: ${f.peso};`,
    '  font-display: swap;',
    `  src: url('${f.caminho}') format('woff2');`,
    `  unicode-range: ${f.faixa};`,
    '}'
  );
}
if (fs.existsSync(METRICAS)) {
  // Fontes de sistema ajustadas às métricas das nossas: a troca no carregamento não move o texto.
  linhas.push('', '/* ---- fallbacks com as mesmas métricas (sem salto de layout) ---- */');
  for (const m of JSON.parse(fs.readFileSync(METRICAS, 'utf8'))) {
    linhas.push(
      '@font-face {',
      `  font-family: '${m.nome}';`,
      `  src: ${m.locais.map((l) => `local('${l}')`).join(', ')};`,
      `  size-adjust: ${m.sizeAdjust};`,
      `  ascent-override: ${m.ascent};`,
      `  descent-override: ${m.descent};`,
      `  line-gap-override: ${m.lineGap};`,
      '}'
    );
  }
}
fs.writeFileSync(CSS, linhas.join('\n') + '\n');
console.log(`${faces.length} @font-face em ${path.relative(RAIZ, CSS)}`);
