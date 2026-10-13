import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const port = process.argv[2] || '8801';
const tag = process.argv[3] || 'branch';
const exe = await chromium.executablePath();
const out = { tag, viewports: {} };
const vps = { mobile: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }, desktop: { width: 1440, height: 900 } };
for (const [name, vp] of Object.entries(vps)) {
  const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
  const ctx = await b.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, deviceScaleFactor: vp.deviceScaleFactor || 1 });
  const page = await ctx.newPage();
  const consoleErrors = [], pageErrors = [], warns = [], blocked = new Set(), logs = [];
  page.on('console', m => { const t = m.text(); if (m.type() === 'error') consoleErrors.push(t.slice(0, 220)); else if (m.type() === 'warning') warns.push(t.slice(0, 220)); else if (/Fase 99|Fase 100/.test(t)) logs.push(t.slice(0,160)); });
  page.on('pageerror', e => pageErrors.push(String(e.message).slice(0, 220)));
  await page.route('**/*', r => { const u = r.request().url(); if (u.startsWith('http://127.0.0.1')) return r.continue(); blocked.add(new URL(u).host); return r.abort(); });
  const r = { checks: {} };
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000 && /^\d/.test(document.getElementById('statQuotes').textContent), null, { timeout: 60000 });
  await page.waitForFunction(() => { const n = QUOTES.length; window.__lastN = window.__lastN || {n:-1,t:Date.now()}; if (window.__lastN.n !== n) { window.__lastN = {n, t: Date.now()}; return false; } return Date.now() - window.__lastN.t > 4000; }, null, { timeout: 90000, polling: 500 });
  r.data = await page.evaluate(() => {
    const s = new Set(); let dup = 0; QUOTES.forEach(q => { if (s.has(q.qid)) dup++; s.add(q.qid); });
    let inc = 0; QUOTES.forEach((q, i) => { if (QUOTE_POR_QID[q.qid] !== i) inc++; });
    const has = (a, pre) => QUOTES.some(q => q.author === a && q.text.indexOf(pre) === 0);
    return {
      frases: QUOTES.length, autores: AUTOR_INDEX.size, lacunas: LACUNAS().length, pendentes: MEMOTIVA_PENDENTES().length,
      qidDup: dup, qidInconsist: inc, qidIdxLen: Object.keys(QUOTE_POR_QID).length,
      homeFrases: document.getElementById('statQuotes').textContent, homeAutores: document.getElementById('statAuthors').textContent, homeCats: document.getElementById('statCats').textContent,
      plutarcoVaso: has('Plutarco', 'A mente não é um vaso'), sdMaquina: has('Santos Dumont', 'Não é a máquina'),
      novas: ['Andrew Carnegie|O problema da nossa era', 'Nikola Tesla|O desenvolvimento progressivo', 'Santos Dumont|Sem pretender', 'Santos Dumont|Sempre segui', 'Lima Barreto|A pátria que quisera', 'Benjamin Disraeli|A juventude de uma nação', 'Martinho Lutero|O verdadeiro tesouro'].map(x => { const [a, p] = x.split('|'); return [x, has(a, p)]; }),
      bloqueadaCesar: typeof CURADORIA_BLOQUEADA === 'function' && CURADORIA_BLOQUEADA('Pensei que minha mulher não devia nem sequer estar sob suspeita.'),
      favoritosNoBoot: state.favorites.length,
    };
  });
  if (name === 'desktop') { const csv = await page.evaluate(() => CURADORIA_EXPORT_CSV(false)); fs.mkdirSync('/tmp/t/csv_real', { recursive: true }); for (const [k, v] of Object.entries(csv)) fs.writeFileSync('/tmp/t/csv_real/' + k, v); r.csvArquivos = Object.keys(csv); }
  // navegar para Explorar
  await page.evaluate(() => navigateTo('explorar'));
  await page.waitForSelector('#exploreGrid .quote-card, #exploreGrid [data-fav-quote]', { timeout: 20000 }).catch(() => {});
  r.checks.exploreCards = await page.locator('#exploreGrid .quote-card').count();
  async function buscar(t) {
    await page.fill('#authorSearch', t); await page.waitForTimeout(1200);
    return await page.evaluate(() => ({ count: document.getElementById('resultsCount')?.textContent?.trim(), cards: [...document.querySelectorAll('#exploreGrid .quote-card')].slice(0, 12).map(c => c.innerText.replace(/\s+/g, ' ').slice(0, 110)) }));
  }
  r.checks.buscaCarnegie = await buscar('Carnegie');
  r.checks.buscaSD = await buscar('Santos Dumont');
  r.checks.buscaPlutarco = await buscar('Plutarco');
  r.checks.buscaLutero = await buscar('Lutero');
  r.checks.buscaMaquina = await buscar('máquina que voa');
  // favoritos: exige login -> cadastra usuário de teste pela UI
  await buscar('Lutero');
  const favBtn = page.locator('#exploreGrid [data-fav-quote]').first();
  const idx = await favBtn.getAttribute('data-fav-quote');
  await favBtn.click({ force: true }); await page.waitForTimeout(600);
  r.checks.favoritoSemLogin = await page.evaluate(() => ({ modalAberto: !document.getElementById('authModal').classList.contains('hidden') && getComputedStyle(document.getElementById('authModal')).display !== 'none', logado: !!state.currentUser }));
  await page.evaluate(() => { const t = document.getElementById('switchToRegister'); if (t) t.click(); });
  await page.fill('#regUsername', 'tester_' + name); await page.fill('#regEmail', `tester_${name}@example.com`);
  await page.fill('#regPassword', 'senha123'); await page.fill('#regPassword2', 'senha123');
  await page.evaluate(() => document.getElementById('registerForm').requestSubmit());
  await page.waitForTimeout(2500);
  r.checks.logado = await page.evaluate(() => !!state.currentUser);
  await page.evaluate(() => { document.getElementById('closeAuthModal')?.click(); });
  await buscar('Lutero');
  const fb = page.locator('#exploreGrid [data-fav-quote]').first();
  const idx2 = await fb.getAttribute('data-fav-quote');
  await fb.click({ force: true }); await page.waitForTimeout(800);
  r.checks.favorito = await page.evaluate((idx) => ({ idx, ativoNoEstado: state.favorites.some(f => f.type === 'quote' && f.id === +idx), qidDoIdx: QUOTES[+idx]?.qid, texto: QUOTES[+idx]?.text.slice(0, 60), aria: document.querySelector(`#exploreGrid [data-fav-quote="${idx}"]`)?.getAttribute('aria-pressed') }), idx2);
  // favorita também uma das frases novas (Carnegie) e confere que continua apontando para a mesma frase
  await buscar('Carnegie'); 
  const cIdx = await page.evaluate(() => QUOTES.findIndex(q => q.author === 'Andrew Carnegie' && q.text.indexOf('O problema da nossa era') === 0));
  await page.evaluate((i) => toggleFavoriteQuote(i), cIdx); await page.waitForTimeout(800);
  r.checks.favoritoNova = await page.evaluate(async (i) => { const f = await dbGet('favorites:' + state.currentUser.email, false); return { persistido: !!f && f.some(x => x.id === i), textoNoIdx: QUOTES[i].text.slice(0, 40) }; }, cIdx);
  await page.evaluate((i) => toggleFavoriteQuote(i), cIdx); await page.evaluate((i) => toggleFavoriteQuote(i), +idx2); await page.waitForTimeout(500);
  r.checks.favoritoDesfeito = await page.evaluate((i) => !state.favorites.some(f => f.type === 'quote' && f.id === i), +idx2);
  // localizar por qid: todas as 7 novas e uma amostra de 200 aleatórias
  r.checks.localizacaoQid = await page.evaluate(() => { let ruim = 0; const amostra = QUOTES.filter((_, i) => i % 15 === 0); amostra.forEach(q => { if (QUOTES[QUOTE_POR_QID[q.qid]] !== q) ruim++; }); return { amostra: amostra.length, ruim }; });
  // sobreposição / overflow horizontal
  await page.fill('#authorSearch', ''); await page.waitForTimeout(500);
  for (const v of ['home', 'explorar']) {
    await page.evaluate((v) => navigateTo(v), v); await page.waitForTimeout(1500);
    r.checks['overflowX_' + v] = await page.evaluate(() => ({ scrollW: document.documentElement.scrollWidth, innerW: window.innerWidth, over: document.documentElement.scrollWidth > window.innerWidth + 1 }));
    await page.screenshot({ path: `/tmp/t/shot_${tag}_${name}_${v}.png`, fullPage: false });
  }
  const uniq = {}; consoleErrors.forEach(e => uniq[e] = (uniq[e]||0)+1); r.consoleErrorsUnicos = uniq; r.consoleErrors = []; r.pageErrors = pageErrors; r.warns = warns.slice(0, 6); r.logs = logs; r.blockedHosts = [...blocked];
  out.viewports[name] = r;
  await b.close().catch(()=>{});
}
fs.writeFileSync(`/tmp/t/e2e_${tag}.json`, JSON.stringify(out, null, 1));

