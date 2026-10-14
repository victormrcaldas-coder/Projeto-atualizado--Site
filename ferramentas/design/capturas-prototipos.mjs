// Prints dos protótipos de direção visual (design/prototipos/) para os portões do redesign.
// Para cada página × largura × tema salva: a abertura (primeira dobra), os cartões de frase,
// a frase ampliada aberta (início e fim da janela), a paleta e a tipografia. Mede a rolagem horizontal.
// A rede externa fica liberada: fontes do Google Fonts e fotos do Wikimedia Commons.
//
// Uso: node ferramentas/design/capturas-prototipos.mjs [--etapa 01-direcao]
//        [--paginas a-marginalia,b-florada,c-galeria] [--larguras 390,1440] [--temas claro,escuro]
//        [--abrir <qid da frase ampliada>]
//   -> .trabalho/design/<etapa>/prototipos/<página>-<largura>-<tema>-<parte>.jpg e relatorio.json
import fs from 'fs';
import path from 'path';
import { chromium, servir, TRABALHO } from '../lib/navegador.mjs';

const arg = (n, padrao) => {
  const i = process.argv.indexOf(n);
  return i > -1 ? process.argv[i + 1] : padrao;
};
const lista = (s) =>
  s
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
const etapa = arg('--etapa', '01-direcao');
const paginas = lista(arg('--paginas', 'a-marginalia,b-florada,c-galeria'));
const larguras = lista(arg('--larguras', '390,1440')).map(Number);
const temas = lista(arg('--temas', 'claro,escuro'));
const abrir = arg('--abrir', 'ql0t0xvhg9dsn'); // Blaise Pascal: foto, fonte e original em francês
const DIR = path.join(TRABALHO, 'design', etapa, 'prototipos');
fs.mkdirSync(DIR, { recursive: true });

const site = await servir();
const base = site.url.replace(/\/index\.html$/, '');
const navegador = await chromium.launch({ headless: true });
const relatorio = { etapa, quando: new Date().toISOString(), capturas: [], erros: [] };
const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);

// Contraste de cada texto visível contra o fundo real (primeiro ancestral com cor de fundo sólida).
// Letra grande (24 px, ou 18,66 px em negrito) precisa de 3 : 1; o resto, de 4,5 : 1 (WCAG AA).
// Não enxerga texto sobre foto ou sobre forma desenhada por elemento irmão: esses casos são conferidos à mão.
function auditarContraste() {
  const cor = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const [r, g, b, a = 1] = m[1]
      .split(/[ ,/]+/)
      .filter(Boolean)
      .map(Number);
    return { r, g, b, a };
  };
  const lum = ({ r, g, b }) =>
    [r, g, b]
      .map((c) => c / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
      .reduce((s, c, i) => s + c * [0.2126, 0.7152, 0.0722][i], 0);
  const mistura = (cima, baixo) => ({
    r: cima.r * cima.a + baixo.r * (1 - cima.a),
    g: cima.g * cima.a + baixo.g * (1 - cima.a),
    b: cima.b * cima.a + baixo.b * (1 - cima.a),
    a: 1
  });
  function fundo(el) {
    const camadas = [];
    for (let e = el; e; e = e.parentElement) {
      const c = cor(getComputedStyle(e).backgroundColor);
      if (c && c.a > 0) {
        camadas.push(c);
        if (c.a >= 1) break;
      }
    }
    let base = { r: 255, g: 255, b: 255, a: 1 };
    for (const c of camadas.reverse()) base = mistura(c, base);
    return base;
  }
  const falhas = [];
  const andar = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const vistos = new Set();
  while (andar.nextNode()) {
    const no = andar.currentNode;
    const el = no.parentElement;
    if (!no.textContent.trim() || !el || vistos.has(el)) continue;
    vistos.add(el);
    // .amostra-par é a amostra da tabela de contraste: mostra de propósito pares que só servem para letra grande
    if (el.closest('.proto-barra,.proto-nota,.amostra-par,[aria-hidden="true"],[hidden]')) continue;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (cs.visibility === 'hidden' || r.width === 0 || r.height === 0 || Number(cs.opacity) === 0) continue;
    const texto = cor(cs.color);
    const atras = fundo(el);
    const t = mistura(texto, atras);
    const [x, y] = [lum(t), lum(atras)].sort((m, n) => n - m);
    const razao = (x + 0.05) / (y + 0.05);
    const px = parseFloat(cs.fontSize);
    const grande = px >= 24 || (px >= 18.66 && Number(cs.fontWeight) >= 700);
    if (razao < (grande ? 3 : 4.5))
      falhas.push(
        `${razao.toFixed(2)} ${grande ? 'grande' : 'normal'} «${no.textContent.trim().slice(0, 40)}» (${el.className || el.tagName})`
      );
  }
  return falhas;
}

for (const pagina of paginas) {
  for (const w of larguras) {
    const movel = w < 768;
    const ctx = await navegador.newContext({
      viewport: { width: w, height: movel ? 844 : 900 },
      isMobile: movel,
      hasTouch: movel,
      deviceScaleFactor: movel ? 2 : 1
    });
    for (const tema of temas) {
      const page = await ctx.newPage();
      page.on('pageerror', (e) =>
        relatorio.erros.push(`${pagina} ${w} ${tema}: ${String(e.message).slice(0, 160)}`)
      );
      const nome = (parte) => path.join(DIR, `${pagina}-${w}-${tema}-${parte}.jpg`);
      await page.goto(`${base}/design/prototipos/${pagina}.html?limpo=1&tema=${tema}`, { waitUntil: 'load' });
      await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(900); // a frase da abertura "chega" em 450 ms
      const r = { pagina, largura: w, tema, overflow: {} };
      r.overflow.abertura = await overflow(page);
      r.contraste = await page.evaluate(auditarContraste);
      await page.screenshot({ path: nome('abertura'), type: 'jpeg', quality: 80 });
      for (const secao of ['cartoes', 'paleta', 'tipografia']) {
        const el = page.locator('#' + secao);
        if ((await el.count()) === 0) continue;
        await el.scrollIntoViewIfNeeded();
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await el.screenshot({ path: nome(secao), type: 'jpeg', quality: 74, scale: 'css' });
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.evaluate((q) => Proto.abrirFrase(q), abrir);
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await page.waitForTimeout(700);
      r.overflow.modal = await overflow(page);
      r.contrasteModal = await page.evaluate(auditarContraste);
      r.focoNoFechar = await page.evaluate(() => !!document.activeElement?.closest('[data-fechar]'));
      await page.screenshot({ path: nome('modal'), type: 'jpeg', quality: 80 });
      // fim da janela (no celular a frase ampliada rola por dentro)
      await page.evaluate(() => {
        const j = document.querySelector('#frase-ampliada [data-corpo]');
        const rolavel = j && j.scrollHeight > j.clientHeight ? j : document.querySelector('#frase-ampliada');
        rolavel.scrollTop = rolavel.scrollHeight;
      });
      await page.waitForTimeout(300);
      await page.screenshot({ path: nome('modal-fim'), type: 'jpeg', quality: 80 });
      // Esc fecha e devolve o foco
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
      r.escFecha = await page.evaluate(() => document.getElementById('frase-ampliada').hidden);
      relatorio.capturas.push(r);
      process.stdout.write('.');
      await page.close();
    }
    await ctx.close();
  }
}
await navegador.close();
site.fechar();
fs.writeFileSync(path.join(DIR, 'relatorio.json'), JSON.stringify(relatorio, null, 1));
const problemas = relatorio.capturas.filter(
  (c) => c.overflow.abertura || c.overflow.modal || !c.escFecha || !c.focoNoFechar
);
console.log(`\n${relatorio.capturas.length} combinações em ${path.relative(process.cwd(), DIR)}`);
console.log(
  'problemas (rolagem lateral, Esc ou foco): ' +
    (problemas.map((c) => `${c.pagina} ${c.largura} ${c.tema}`).join(', ') || 'nenhum')
);
console.log('exceções: ' + (relatorio.erros.join(' | ') || 'nenhuma'));
const contraste = [
  ...new Set(
    relatorio.capturas.flatMap((c) =>
      [...c.contraste, ...c.contrasteModal].map((f) => `${c.pagina} ${c.tema}: ${f}`)
    )
  )
];
console.log(
  'contraste abaixo do AA (' +
    contraste.length +
    '):' +
    (contraste.length ? '\n  ' + contraste.join('\n  ') : ' nenhum')
);
