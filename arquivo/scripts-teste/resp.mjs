import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const port = process.argv[2]; const exe = await chromium.executablePath();
const VPS = [[390,844],[430,932],[768,1024],[1024,768],[1366,768],[1440,900],[1920,1080]];
const out = [];
for (const [w,h] of VPS) {
  const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 800, hasTouch: w < 800 });
  const page = await ctx.newPage(); const errs = [], bad = {};
  page.on('pageerror', e => errs.push(String(e.message).slice(0,120)));
  page.on('response', r => { if (r.status() >= 400) bad[r.url()] = r.status(); });
  await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
  await page.waitForFunction(() => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 4000; }, null, { timeout: 90000, polling: 500 });
  const r = { vp: `${w}x${h}`, paginas: {} };
  for (const theme of ['light','dark']) {
    await page.evaluate((t) => applyTheme(t), theme);
    for (const v of ['home','explorar','historias','comunidade']) {
      await page.evaluate((v) => navigateTo(v), v); await page.waitForTimeout(900);
      const m = await page.evaluate(() => { const de = document.documentElement; const els = [...document.querySelectorAll('body *')].filter(e => { const rc = e.getBoundingClientRect(); return rc.width > 0 && rc.right > window.innerWidth + 2 && getComputedStyle(e).position !== 'fixed' && !e.closest('[style*="overflow"]') && getComputedStyle(e).overflowX === 'visible'; }).slice(0, 3).map(e => e.tagName + '.' + String(e.className).slice(0, 30)); return { over: de.scrollWidth > window.innerWidth + 1, scrollW: de.scrollWidth, innerW: window.innerWidth, vazando: els }; });
      r.paginas[`${v}/${theme}`] = m;
    }
  }
  // rolagem do Explorar: desce 6 telas e confere que o scroll avança sem o layout saltar
  await page.evaluate(() => navigateTo('explorar')); await page.waitForTimeout(900);
  r.rolagem = await page.evaluate(async () => { const y0 = window.scrollY; const marcas = []; for (let i = 0; i < 6; i++) { window.scrollBy(0, window.innerHeight * 0.8); await new Promise(r => setTimeout(r, 250)); marcas.push(Math.round(window.scrollY)); } const crescente = marcas.every((v, i) => i === 0 || v >= marcas[i - 1]); return { marcas, crescente, scrollWFinal: document.documentElement.scrollWidth, innerW: window.innerWidth }; });
  if (w === 390 || w === 1440) await page.screenshot({ path: `/tmp/t/resp_${w}_explorar.png` });
  r.erros = errs; r.http400 = Object.keys(bad).length;
  out.push(r); await b.close().catch(() => {});
}
fs.writeFileSync('/tmp/t/resp.json', JSON.stringify(out, null, 1));
for (const r of out) { const ov = Object.entries(r.paginas).filter(([k, v]) => v.over); console.log(r.vp, '| overflow em', ov.length, 'de', Object.keys(r.paginas).length, ov.map(([k, v]) => k + ':' + v.scrollW + '>' + v.innerW + ' ' + (v.vazando||[]).join(',')).join(' ; ') || '-', '| rolagem crescente:', r.rolagem.crescente, '| pageErrors:', r.erros.length, '| http>=400:', r.http400); }
