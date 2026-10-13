import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
const exe = await chromium.executablePath();
const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
await p.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'domcontentloaded', timeout: 120000 });
await p.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 90000 });
await p.waitForTimeout(8000);
const r = await p.evaluate(() => { const keys = Object.keys(TIPO_OBRA); const falt = {}; Object.values(OBRAS).flat().forEach(o => { if (!TIPO_OBRA[o.tipo]) falt[o.tipo] = (falt[o.tipo] || 0) + 1; }); 
  const amostra = Object.values(OBRAS).flat().find(o => !TIPO_OBRA[o.tipo]); let chip = null; try { chip = amostra ? (typeof tipoChip === 'function' ? tipoChip(amostra.tipo) : 'sem tipoChip') : null; } catch (e) { chip = 'EXC ' + e.message; }
  return { chaves: keys.length, faltando: falt, amostra: amostra && [amostra.t, amostra.tipo], chip: String(chip).slice(0, 200) }; });
console.log(JSON.stringify(r));
await b.close();
