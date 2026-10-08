import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const exe = await chromium.executablePath();
const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
const page = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const warns=[], logs=[];
page.on('console', m => { const t = m.text(); if (/Fase 10[0-5]/.test(t)) (m.type()==='warning'?warns:logs).push(t.slice(0,400)); });
await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
await page.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'load' });
await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
await page.waitForFunction(() => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 5000; }, null, { timeout: 90000, polling: 500 });
const d = await page.evaluate(() => {
  const fraca = QUOTES.filter(q => /Atribu[ií]d|coletânea|sem localiza/i.test(q.src || ''));
  const mods = ['Júlio César|Vim, vi','Aristóteles|A amizade é uma alma','Fernando Pessoa|Tenho em mim','Will Durant|A civilização','Reinhold Niebuhr|Deus, concede','Fiódor Dostoiévski|Não há virtude','Frida Kahlo|Pensavam'].map(x => { const [a,p]=x.split('|'); const q = QUOTES.find(q => q.author===a && q.text.indexOf(p)===0); return q ? {a, t:q.text.slice(0,48), st:q.st, src:q.src.slice(0,60), orig:!!q.orig, qid:q.qid} : {a, falta:p}; });
  return { frases: QUOTES.length, home: document.getElementById('statQuotes').textContent, autores: AUTOR_INDEX.size, lacunas: LACUNAS().length, pend: MEMOTIVA_PENDENTES().length, fracasRestantes: fraca.length, fracasLista: fraca.map(q => q.author+' | '+q.text.slice(0,40)), registro: CURADORIA_REMOVIDAS.length, mods,
   qidDup: (() => { const s = new Set(); let n = 0; QUOTES.forEach(q => { if (s.has(q.qid)) n++; s.add(q.qid); }); return n; })(), incons: QUOTES.filter((q,i)=>QUOTE_POR_QID[q.qid]!==i).length,
   variantesNovas: ['Fiódor Dostoiévski|Não há virtude','Reinhold Niebuhr|Deus, concede','Frida Kahlo|Pensavam'].map(x => { const [a,p]=x.split('|'); const q = QUOTES.find(q => q.author===a && q.text.indexOf(p)===0); const c = CURADORIA_CHECAR(q.text, a); return [a, c.variantes.filter(v => v.onde==='ativa' && v.qid!==q.qid).map(v => [v.score, v.texto.slice(0,50)])]; }),
   auditoria: (() => { try { return JSON.stringify(AUDITORIA()).slice(0,400); } catch(e) { return 'ERR '+e.message; } })() };
});
console.log(JSON.stringify({ d, warns, logs }, null, 1));
await b.close();
