import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
const exe = await chromium.executablePath();
const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
const page = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const warns=[], logs=[];
page.on('console', m => { const t = m.text(); if (/Fase 104|Fase 103|Fase 100/.test(t)) (m.type()==='warning'?warns:logs).push(t.slice(0,300)); });
await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
await page.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'load' });
await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
await page.waitForFunction(() => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 5000; }, null, { timeout: 90000, polling: 500 });
const d = await page.evaluate(() => ({ frases: QUOTES.length, home: document.getElementById('statQuotes').textContent, lacunas: LACUNAS().length, novas: QUOTES.filter(q => q.qid.startsWith('f104')).map(q => [q.author, q.text.slice(0,40), q.cat]), qidDup: (() => { const s = new Set(); let n = 0; QUOTES.forEach(q => { if (s.has(q.qid)) n++; s.add(q.qid); }); return n; })(), incons: QUOTES.filter((q,i)=>QUOTE_POR_QID[q.qid]!==i).length, pend: MEMOTIVA_PENDENTES().length,
  auditoria: (() => { try { const a = AUDITORIA(); return JSON.stringify(a).slice(0,500); } catch(e) { return 'ERR '+e.message; } })() }));
console.log(JSON.stringify({ d, warns, logs }, null, 1));
await b.close();
