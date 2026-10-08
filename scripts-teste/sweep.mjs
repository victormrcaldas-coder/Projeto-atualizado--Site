import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const port = process.argv[2];
const exe = await chromium.executablePath();
const sizes = [[390,844,true],[430,932,true],[768,1024,true],[1024,768,false],[1366,768,false],[1440,900,false],[1920,1080,false]];
const views = ['home','explorar','autores','historias'];
const only = (process.argv[3]||'').split(',').filter(Boolean).map(Number); const out = [];
for (const [idx,[w,h,mobile]] of sizes.entries()) { if (only.length && !only.includes(idx)) continue;
  const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errs = [], bad = new Set();
  page.on('pageerror', e => errs.push(String(e.message).slice(0,120)));
  page.on('response', r => { if (r.status() >= 400) bad.add(new URL(r.url()).pathname); });
  await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
  await page.waitForFunction(() => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 4000; }, null, { timeout: 90000, polling: 500 });
  const r = { size: `${w}x${h}`, views: {} };
  for (const theme of ['light','dark']) {
    await page.evaluate((t) => { document.documentElement.setAttribute('data-theme', t); try { document.body.setAttribute('data-theme', t); } catch(e){} }, theme);
    for (const v of views) {
      try { await page.evaluate((v) => { try { navigateTo(v); } catch(e) {} }, v); await page.waitForTimeout(700);
      for (let i = 0; i < 3; i++) { await page.evaluate(() => window.scrollBy(0, 700)); await page.waitForTimeout(250); }
      const m = await page.evaluate(() => { const de = document.documentElement; const wide = [...document.querySelectorAll('body *')].filter(e => { const rc = e.getBoundingClientRect(); return rc.width > 0 && rc.right > window.innerWidth + 2 && getComputedStyle(e).position !== 'fixed' && !e.closest('[style*="overflow"]') && e.scrollWidth <= e.clientWidth + 1; }).slice(0, 3).map(e => (e.className || e.tagName).toString().slice(0, 40)); return { overX: de.scrollWidth > window.innerWidth + 1, scrollW: de.scrollWidth, innerW: window.innerWidth, cortados: wide }; });
      r.views[`${theme}/${v}`] = m;
      await page.evaluate(() => window.scrollTo(0, 0)); } catch(e) { r.views[`${theme}/${v}`] = { overX:false, cortados:[], erro:String(e.message).slice(0,80) }; }
    }
  }
  r.errs = errs; r.http400 = [...bad].length; r.local404 = [...bad].filter(p => p.startsWith('/assets/')).length;
  out.push(r); await b.close().catch(() => {});
}
fs.writeFileSync('/tmp/t/sweep_'+(process.argv[3]||'all')+'.json', JSON.stringify(out, null, 1));
for (const r of out) { const over = Object.entries(r.views).filter(([k, v]) => v.overX).map(([k]) => k); const cut = Object.entries(r.views).filter(([k, v]) => v.cortados.length).map(([k, v]) => k + ':' + v.cortados.join('|')); console.log(r.size, '| overflow:', over.length ? over : 'nenhum', '| possíveis elementos além da borda:', cut.length ? cut.slice(0,3) : 'nenhum', '| erros de view:', Object.values(r.views).filter(v=>v.erro).length, '| erros JS:', r.errs.length, '| http>=400:', r.http400, '(assets:', r.local404 + ')'); }
