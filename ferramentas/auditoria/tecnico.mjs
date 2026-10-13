// Diagnóstico técnico no Chromium real: tempo de carga, layout shift, erros de console e de rede,
// crescimento de listeners ao navegar e sondas de XSS pelo armazenamento compartilhado.
//
// As sondas simulam o que qualquer visitante pode fazer com window.storage compartilhado
// (gravar JSON arbitrário em feed:posts ou midia:*) e conferem se algum script injetado roda.
// Uso: node ferramentas/auditoria/tecnico.mjs [rótulo]  -> .trabalho/auditoria/tecnico_<rótulo>.json
import fs from 'fs';
import path from 'path';
import { chromium, servir, TRABALHO } from '../lib/navegador.mjs';

const tag = process.argv[2] || 'atual';
const site = await servir();
const SAIDA = path.join(TRABALHO, 'auditoria');
fs.mkdirSync(SAIDA, { recursive: true });

const XSS = `<img src=x onerror="window.__xss=(window.__xss||0)+1">`;
const ATAQUE = `"><img src=x onerror="window.__xss=(window.__xss||0)+1">`;
const POST_MALICIOSO = {
  id: 'post_' + ATAQUE,
  text: XSS,
  font: 'body',
  color: 'jade" onmouseover="window.__xss=1',
  fundo: null,
  midia: 'midia:ataque',
  midiaSessao: { tipo: 'imagem', src: ATAQUE, filtro: ATAQUE },
  musica: { tipo: 'apple', id: '1', nome: XSS, artista: XSS, capa: "x');background:url('y" },
  quote: { text: XSS, author: XSS },
  createdAt: Date.now(),
  authorEmail: 'a@b.c',
  authorUsername: XSS,
  likes: [],
  comments: [{ id: 'c_' + ATAQUE, username: XSS, text: XSS, createdAt: Date.now() }],
  reports: [],
  hidden: false,
  arq: false,
  del: false
};
// Mesmo conteúdo com ids válidos: o post deve aparecer, mas sem executar nada.
const POST_ID_VALIDO = {
  ...POST_MALICIOSO,
  id: 'post_valido',
  comments: [{ ...POST_MALICIOSO.comments[0], id: 'c_valido' }]
};
const MIDIA_MALICIOSA = { tipo: 'imagem', src: ATAQUE, filtro: ATAQUE };

// Armazenamento em memória com a mesma interface de window.storage (pessoal e compartilhado).
const STUB = `(() => {
  const S = { 'S:feed:posts': ${JSON.stringify(JSON.stringify([POST_MALICIOSO, POST_ID_VALIDO]))},
              'S:seeded:v1': 'true',
              'S:midia:ataque': ${JSON.stringify(JSON.stringify(MIDIA_MALICIOSA))} };
  window.storage = {
    async get(k, sh){ const v = S[(sh?'S:':'P:')+k]; if(v===undefined) throw new Error('nf'); return {key:k,value:v}; },
    async set(k, v, sh){ S[(sh?'S:':'P:')+k] = v; return {key:k,value:v}; },
    async delete(k, sh){ delete S[(sh?'S:':'P:')+k]; return {key:k,deleted:true}; },
    async list(){ return {keys:[]}; } };
  // listeners ativos: em window/document, e em elementos que ainda estão na página
  // (elementos descartados por um novo render não contam: o navegador os recolhe).
  const ativos = { window: 0, document: 0 }, emElementos = [];
  window.__listeners = () => ({ ...ativos, elementosNaPagina: emElementos.filter((r) => { const e = r.deref(); return e && e.isConnected; }).length });
  const add = EventTarget.prototype.addEventListener, rem = EventTarget.prototype.removeEventListener;
  EventTarget.prototype.addEventListener = function(){
    if (this === window) ativos.window++; else if (this === document) ativos.document++;
    else if (this instanceof Element) emElementos.push(new WeakRef(this));
    return add.apply(this, arguments); };
  EventTarget.prototype.removeEventListener = function(){
    if (this === window) ativos.window--; else if (this === document) ativos.document--;
    return rem.apply(this, arguments); };
  // layout shift acumulado
  window.__cls = 0;
  try { new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; })
        .observe({ type: 'layout-shift', buffered: true }); } catch (e) {}
})();`;

const out = { tag, viewports: {} };
for (const [nome, vp] of Object.entries({
  mobile: { width: 390, height: 844 },
  desktop: { width: 1440, height: 900 }
})) {
  const b = await chromium.launch({ headless: true });
  const ctx = await b.newContext({ viewport: vp });
  await ctx.addInitScript(STUB);
  const page = await ctx.newPage();
  const r = {
    consoleErros: {},
    excecoes: [],
    falhasDeRede: {},
    externosBloqueados: new Set(),
    bytes: { js: 0, css: 0, html: 0 }
  };
  page.on('console', (m) => {
    if (m.type() === 'error')
      r.consoleErros[m.text().slice(0, 160)] = (r.consoleErros[m.text().slice(0, 160)] || 0) + 1;
  });
  page.on('pageerror', (e) => r.excecoes.push(String(e.message).slice(0, 200)));
  page.on('response', async (res) => {
    if (res.status() >= 400) r.falhasDeRede[res.url()] = res.status();
    const u = res.url();
    if (u.startsWith('http://127.0.0.1')) {
      const n =
        Number(res.headers()['content-length'] || 0) ||
        (await res.body().catch(() => Buffer.alloc(0))).length;
      if (u.endsWith('.js')) r.bytes.js += n;
      else if (u.endsWith('.css')) r.bytes.css += n;
      else if (u.endsWith('.html')) r.bytes.html += n;
    }
  });
  await page.route('**/*', (rt) => {
    const u = rt.request().url();
    if (u.startsWith('http://127.0.0.1')) return rt.continue();
    r.externosBloqueados.add(new URL(u).host);
    return rt.abort();
  });
  const t0 = Date.now();
  await page.goto(site.url, { waitUntil: 'load' });
  r.msLoad = Date.now() - t0;
  await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, {
    timeout: 60000
  });
  r.msAcervo = Date.now() - t0;
  r.clsCarga = await page.evaluate(() => Math.round(window.__cls * 1000) / 1000);
  r.navegacao = await page.evaluate(() => {
    const n = performance.getEntriesByType('navigation')[0];
    return n
      ? { domContentLoaded: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd) }
      : null;
  });

  // Navega pelas telas três vezes e mede listeners ativos em window/document a cada volta.
  const telas = ['home', 'explorar', 'descubra', 'historias', 'comunidade', 'perfil'];
  r.listenersPorVolta = [];
  for (let v = 0; v < 3; v++) {
    for (const t of telas) {
      await page.evaluate((t) => navigateTo(t), t);
      await page.waitForTimeout(400);
    }
    r.listenersPorVolta.push(await page.evaluate(() => window.__listeners()));
  }
  // Abre a comunidade (onde o post malicioso é renderizado) e passa o mouse no cartão.
  await page.evaluate(() => navigateTo('comunidade'));
  await page.waitForTimeout(1500);
  await page.hover('.post-card').catch(() => {});
  // Digita o termo malicioso em todo campo de texto visível de cada tela (busca, filtros, comentários).
  r.camposTestados = 0;
  for (const t of telas) {
    await page.evaluate((t) => navigateTo(t), t);
    await page.waitForTimeout(500);
    const campos = await page.$$(
      'input[type="text"]:visible, input[type="search"]:visible, input:not([type]):visible, textarea:visible'
    );
    for (const c of campos) {
      await c.fill(XSS).catch(() => {});
      await c.press('Enter').catch(() => {});
      r.camposTestados++;
    }
    await page.waitForTimeout(800);
  }
  r.xssExecutado = await page.evaluate(() => window.__xss || 0);
  r.postRenderizado = await page.evaluate(() => document.querySelectorAll('.post-card').length);
  r.clsTotal = await page.evaluate(() => Math.round(window.__cls * 1000) / 1000);
  r.externosBloqueados = [...r.externosBloqueados];
  out.viewports[nome] = r;
  await b.close();
}
site.fechar();
const arq = path.join(SAIDA, `tecnico_${tag}.json`);
fs.writeFileSync(arq, JSON.stringify(out, null, 1));
for (const [n, r] of Object.entries(out.viewports))
  console.log(
    n,
    `load ${r.msLoad}ms · acervo ${r.msAcervo}ms · JS ${(r.bytes.js / 1e6).toFixed(2)}MB · CLS carga ${r.clsCarga} total ${r.clsTotal}`,
    `· exceções ${r.excecoes.length} · erros console ${Object.keys(r.consoleErros).length}`,
    `· XSS executado ${r.xssExecutado} (${r.camposTestados} campos) · posts ${r.postRenderizado}`,
    '· listeners',
    JSON.stringify(r.listenersPorVolta)
  );
console.log('->', arq);
