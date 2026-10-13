import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const exe = await chromium.executablePath();
const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
const page = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
await page.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 90000 });
await page.waitForFunction(() => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 5000; }, null, { timeout: 90000, polling: 500 });
const d = await page.evaluate(() => {
  const out = [];
  for (const a of Object.keys(OBRAS)) for (const o of OBRAS[a]) {
    const p = OBRA_PAGINA[a + '||' + o.t];
    out.push({ a, t: o.t, tipo: o.tipo || '', ano: o.ano || '', d: o.d || '', sobre: p ? (p.sobre || '') : '', temPag: !!p, campos: p ? Object.keys(p) : [], frases: QUOTES.filter(q => q.author === a && (q.src || '').indexOf(o.t) === 0).length });
  }
  return out;
});
fs.writeFileSync('/tmp/hist/obras_full.json', JSON.stringify(d));
console.log(d.length, 'obras;', d.filter(x => x.d).length, 'com d;', d.filter(x => x.sobre).length, 'com sobre');
await b.close();
