// As ferramentas do Crítico: servem o site, abrem o Chromium e congelam as View Transitions para
// fotografar quadro a quadro. Escritas pelo próprio Crítico na rodada 3 do Portão B; guardadas aqui
// para as próximas rodadas. Veja ferramentas/critico/LEIA.md.
//   CRITICO_SITE=<pasta>  serve uma cópia exportada de um commit (git archive) em vez do repositório
//   CRITICO_SAIDA=<pasta> onde ficam os quadros (padrão: .trabalho/critico)
import { chromium } from '../lib/navegador.mjs';
import http from 'http';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const RAIZ = path.resolve(process.env.CRITICO_SITE || REPO);
// as fotos do Commons já baixadas pelas ferramentas de design (se a pasta existir); as que faltam vêm da rede
const CACHE = path.join(REPO, '.trabalho/design/fotos-site');
export const OUT = path.resolve(process.env.CRITICO_SAIDA || path.join(REPO, '.trabalho/critico'));
fs.mkdirSync(OUT, { recursive: true });

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.webp': 'image/webp'
};
export async function servir() {
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p === '/') p = '/index.html';
    const f = path.join(RAIZ, p);
    if (!f.startsWith(RAIZ) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) {
      res.writeHead(404);
      res.end();
      return;
    }
    res.writeHead(200, { 'content-type': TIPOS[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  await new Promise((r) => srv.listen(0, '127.0.0.1', r));
  return { url: `http://127.0.0.1:${srv.address().port}/index.html`, fechar: () => srv.close() };
}
const porArquivo = new Map();
for (const j of fs.existsSync(CACHE) ? fs.readdirSync(CACHE).filter((f) => f.endsWith('.json')) : []) {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(CACHE, j)));
    const m = meta.url && meta.url.match(/Special:FilePath\/([^?]+)/);
    const arq = path.join(CACHE, j.slice(0, -5));
    if (m && fs.statSync(arq).size) porArquivo.set(m[1], { tipo: meta.tipo, arq });
  } catch (e) {}
}
function foto(url) {
  const arq = path.join(CACHE, crypto.createHash('sha1').update(url).digest('hex'));
  if (fs.existsSync(arq + '.json')) {
    const meta = JSON.parse(fs.readFileSync(arq + '.json', 'utf8'));
    return meta.tipo && fs.existsSync(arq) ? { tipo: meta.tipo, corpo: fs.readFileSync(arq) } : null;
  }
  const m = url.match(/Special:FilePath\/([^?]+)/);
  if (m && porArquivo.has(m[1])) {
    const x = porArquivo.get(m[1]);
    return { tipo: x.tipo, corpo: fs.readFileSync(x.arq) };
  }
  return null;
}
export const b = await chromium.launch();
export const site = await servir();
export async function abrir({
  w = 390,
  h = 844,
  tema = 'light',
  reduz = false,
  hash = '',
  espera = true
} = {}) {
  const movel = w < 768;
  const ctx = await b.newContext({
    viewport: { width: w, height: h },
    isMobile: movel,
    hasTouch: movel,
    colorScheme: tema,
    reducedMotion: reduz ? 'reduce' : 'no-preference'
  });
  const p = await ctx.newPage();
  const erros = [];
  p.on('pageerror', (e) => erros.push(String(e)));
  const base = site.url.replace(/index\.html$/, '');
  await p.route('**/*', async (rota) => {
    const u = rota.request().url();
    if (u.startsWith(base)) return rota.continue();
    if (/upload\.wikimedia\.org|commons\.wikimedia\.org/.test(u)) {
      const r = foto(u);
      if (r) return rota.fulfill({ status: 200, contentType: r.tipo, body: r.corpo });
      return rota.continue(); // fora do cache: tenta a rede
    }
    return rota.abort();
  });
  await p.addInitScript(() => {
    window.__log = [];
    const vt = document.startViewTransition;
    if (vt)
      document.startViewTransition = function () {
        const t0 = performance.now();
        const t = vt.apply(this, arguments);
        window.__log.push({ start: t0, tap: window.__tap });
        t.ready.then(
          () => (window.__log.at(-1).ready = performance.now()),
          () => (window.__log.at(-1).ready = 'rej')
        );
        t.finished.then(() => (window.__log.at(-1).fin = performance.now()));
        return t;
      };
    addEventListener('pointerdown', () => (window.__tap = performance.now()), true);
  });
  await p.goto(site.url + hash, { waitUntil: espera ? 'load' : 'commit' });
  if (espera) {
    await p.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 1000, null, {
      timeout: 120000
    });
    await p.waitForFunction(() => window.__rotaPronta === true, null, { timeout: 20000 });
    await p.waitForTimeout(2500);
  }
  return { ctx, p, erros };
}
// clica por coordenada no centro do elemento (rola até ele antes, sem animação)
export async function tocar(p, sel, { rolar = true } = {}) {
  const h = p.viewportSize().height;
  const el = p.locator(sel).first();
  let c = await el.boundingBox();
  if (rolar && (!c || c.y < 80 || c.y + c.height > h - 80)) {
    await el.evaluate((e) => e.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await p.waitForTimeout(600);
    c = await el.boundingBox();
  }
  await p.mouse.click(c.x + c.width / 2, c.y + Math.min(c.height / 2, 60));
  return c;
}
// congela a transição assim que começa e fotografa nos tempos dados
export async function congelar(p, nome, tempos, acao) {
  await p.evaluate(() => {
    window.__congelado = false;
    const antes = new Set(document.getAnimations());
    window.__antes = antes;
    const f = () => {
      const as = document
        .getAnimations()
        .filter(
          (a) =>
            !antes.has(a) &&
            a.effect &&
            a.effect.pseudoElement &&
            a.effect.pseudoElement.startsWith('::view-transition')
        );
      if (as.length) {
        as.forEach((a) => a.pause());
        window.__congelado = true;
        return;
      }
      requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  });
  await acao();
  await p
    .waitForFunction(() => window.__congelado, null, { timeout: 5000 })
    .catch(() => console.log('sem VT', nome));
  const info = await p.evaluate(() =>
    document
      .getAnimations()
      .filter((a) => a.effect && a.effect.pseudoElement)
      .map(
        (a) =>
          `${a.effect.pseudoElement} ${a.animationName || 'js'} ${a.effect.getTiming().delay}+${a.effect.getTiming().duration}`
      )
  );
  for (const t of tempos) {
    await p.evaluate(
      (t) =>
        document.getAnimations().forEach((a) => {
          if (
            !window.__antes.has(a) &&
            a.effect &&
            a.effect.pseudoElement &&
            a.effect.pseudoElement.startsWith('::view-transition')
          ) {
            a.pause();
            a.currentTime = t;
          }
        }),
      t
    );
    await p.waitForTimeout(60);
    await p.screenshot({ path: `${OUT}/${nome}-${String(t).padStart(3, '0')}.png` });
  }
  await p.evaluate(() =>
    document.getAnimations().forEach((a) => a.effect && a.effect.pseudoElement && a.finish())
  );
  await p.waitForTimeout(800);
  await p.screenshot({ path: `${OUT}/${nome}-fim.png` });
  return info;
}
