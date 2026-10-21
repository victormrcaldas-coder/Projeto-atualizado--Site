// Infra comum das ferramentas: localiza o Playwright, a raiz do repositório,
// a pasta de trabalho local e sobe um servidor estático para o site.
import { createRequire } from 'module';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
// Pasta para saídas de teste, exportações e decisões em andamento (fica fora do git: ver .gitignore).
export const TRABALHO = process.env.MEMOTIVA_TRABALHO || path.join(RAIZ, '.trabalho');

// Playwright: 1) PLAYWRIGHT_DIR; 2) node_modules do repositório; 3) /opt/node-tools (Claude Code na nuvem).
const bases = [
  process.env.PLAYWRIGHT_DIR,
  path.join(RAIZ, 'node_modules'),
  '/opt/node-tools/node_modules'
].filter(Boolean);
let pw = null;
for (const b of bases) {
  try {
    pw = createRequire(path.join(b, 'x.js'))('playwright');
    break;
  } catch (e) {}
}
if (!pw)
  throw new Error('Playwright não encontrado. Rode "npm i -D playwright" na raiz ou defina PLAYWRIGHT_DIR.');
export const chromium = pw.chromium;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

/** Sobe um servidor estático para `raiz` numa porta livre. Devolve { url, fechar }. */
export async function servir(raiz = RAIZ) {
  raiz = path.resolve(raiz);
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p === '/') p = '/index.html';
    const f = path.join(raiz, p);
    if (!f.startsWith(raiz) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) {
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

/** Bloqueia toda rede externa (fontes, Wikipédia): os testes rodam só com o próprio site. */
export async function soLocal(page) {
  await page.route('**/*', (r) =>
    r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort()
  );
}

/** Espera o acervo carregar e a cadeia de fases terminar (QUOTES estável por alguns segundos). */
export async function esperarCuradoria(page, ms = 5000) {
  await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 1000, null, {
    timeout: 120000
  });
  await page.waitForFunction(
    (ms) => {
      const n = QUOTES.length;
      window.__estavel = window.__estavel || { n: -1, t: Date.now() };
      if (window.__estavel.n !== n) {
        window.__estavel = { n, t: Date.now() };
        return false;
      }
      return Date.now() - window.__estavel.t > ms;
    },
    ms,
    { timeout: 120000, polling: 500 }
  );
}
