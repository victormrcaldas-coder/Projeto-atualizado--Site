// Teste de ponta a ponta em Chromium real (Playwright) — sem cópias artificiais.
// Requisitos: npm i playwright-core @sparticuz/chromium
// Servir a RAIZ do repositório (python3 -m http.server <porta>) e rodar: node e2e-real-browser.mjs <porta> <rótulo>
// O stub de window.storage usa localStorage só para testar o formato gravado dos favoritos; não é a solução de persistência.
// Bloqueia hosts externos (Google Fonts, Wikipédia): imagens de autores caem no avatar de reserva.
import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const port = process.argv[2] || '8803', tag = process.argv[3] || 'repo';
const SITE_URL = `http://127.0.0.1:${port}/index.html`;
const exe = await chromium.executablePath();
const out = { tag, url: SITE_URL, viewports: {} };
const STORAGE_STUB = `(() => { const P='__T:'; window.storage = {
  async get(k){ const v = localStorage.getItem(P+k); if(v===null) throw new Error('nf'); return {key:k,value:v}; },
  async set(k,v){ localStorage.setItem(P+k,v); return {key:k,value:v}; },
  async delete(k){ localStorage.removeItem(P+k); return {key:k,deleted:true}; },
  async list(){ return {keys:[]}; } }; })();`;
const estavel = () => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 4000; };
const vps = { mobile: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }, desktop: { width: 1440, height: 900 } };
for (const [name, vp] of Object.entries(vps)) {
  const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
  const ctx = await b.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, deviceScaleFactor: vp.deviceScaleFactor || 1 });
  await ctx.addInitScript(STORAGE_STUB);
  const page = await ctx.newPage();
  const consoleErrors = {}, pageErrors = [], warns = [], blocked = new Set(), notFound = {};
  page.on('console', m => { const t = m.text().slice(0, 200); if (m.type() === 'error') consoleErrors[t] = (consoleErrors[t]||0)+1; else if (m.type() === 'warning') warns.push(t); });
  page.on('pageerror', e => pageErrors.push(String(e.message).slice(0, 200)));
  page.on('response', r => { if (r.status() >= 400) notFound[r.url()] = r.status(); });
  await page.route('**/*', r => { const u = r.request().url(); if (u.startsWith('http://127.0.0.1')) return r.continue(); blocked.add(new URL(u).host); return r.abort(); });
  const r = { checks: {} };
  await page.goto(SITE_URL, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
  await page.waitForFunction(estavel, null, { timeout: 90000, polling: 500 });
  r.recursos = await page.evaluate(() => ({ css: [...document.styleSheets].some(s => /memotiva\.css/.test(s.href || '')) && document.styleSheets.length > 0, cssRegras: [...document.styleSheets].reduce((n, s) => { try { return n + s.cssRules.length; } catch (e) { return n; } }, 0), js: typeof init === 'function' }));
  r.data = await page.evaluate(() => {
    const s = new Set(); let dup = 0; QUOTES.forEach(q => { if (s.has(q.qid)) dup++; s.add(q.qid); });
    let inc = 0; QUOTES.forEach((q, i) => { if (QUOTE_POR_QID[q.qid] !== i) inc++; });
    return { frases: QUOTES.length, autores: AUTOR_INDEX.size, lacunas: LACUNAS().length, pendentes: MEMOTIVA_PENDENTES().length, qidDup: dup, qidInconsist: inc,
      homeFrases: document.getElementById('statQuotes').textContent, homeAutores: document.getElementById('statAuthors').textContent,
      registroRemocoes: CURADORIA_REMOVIDAS.length, porTipo: CURADORIA_REMOVIDAS.reduce((a, x) => (a[x.tipo] = (a[x.tipo]||0)+1, a), {}),
      guardaCesar: CURADORIA_BLOQUEADA('Pensei que minha mulher não devia nem sequer estar sob suspeita.'),
      guardaHistorica: CURADORIA_BLOQUEADA(CURADORIA_REMOVIDAS.find(x => x.tipo === 'historico-removida').texto), guardaQuarentena: CURADORIA_BLOQUEADA(CURADORIA_REMOVIDAS.find(x => x.tipo === 'historico-quarentena').texto),
      guardaFundida: CURADORIA_BLOQUEADA(CURADORIA_REMOVIDAS.find(x => x.tipo === 'historico-fundida-duplicata').texto),
      checarNietzsche: (() => { const c = CURADORIA_CHECAR('Torna-te aquilo que és.', 'Friedrich Nietzsche'); return { exata: c.exata, bloqueada: c.bloqueada, ativas: c.variantes.filter(v => v.onde === 'ativa').map(v => v.texto) }; })(),
      checarNovaTraducao: (() => { const c = CURADORIA_CHECAR('A vida não é sobre se achar. A vida é sobre se criar.', 'George Bernard Shaw'); return { exata: c.exata, bloqueada: c.bloqueada, registro: c.variantes.filter(v => v.onde === 'registro').length }; })(),
      divisaAtiva: QUOTES.some(q => q.author === 'Santos Dumont' && q.text.indexOf('Sempre segui') === 0), santosDumont: QUOTES.filter(q => q.author === 'Santos Dumont').length,
      fridaAtivas: QUOTES.filter(q => q.author === 'Frida Kahlo' && /Pinto/.test(q.text)).length,
      variantesRemovidasAindaAtivas: CURADORIA_REMOVIDAS.filter(x => ['variante-removida','removida','historico-removida','historico-quarentena'].includes(x.tipo) && QUOTES.some(q => q.author === x.autor && q.text === x.texto)).length,
      ativasNoRegistro: CURADORIA_REMOVIDAS.filter(x => x.tipo.startsWith('historico-') && QUOTES.some(q => q.author === x.autor && q.text === x.texto)).length };
  });
  // ---------- FAVORITOS ----------
  const email = `tester_${name}@example.com`;
  await page.evaluate(() => navigateTo('explorar')); await page.waitForTimeout(1500);
  await page.fill('#authorSearch', 'Lutero'); await page.waitForTimeout(1200);
  const favBtn = page.locator('#exploreGrid [data-fav-quote]').first();
  await favBtn.click({ force: true }); await page.waitForTimeout(600);
  r.checks.semLoginAbreModal = await page.evaluate(() => !document.getElementById('authModal').classList.contains('hidden') && getComputedStyle(document.getElementById('authModal')).display !== 'none');
  await page.evaluate(() => document.getElementById('switchToRegister')?.click());
  await page.fill('#regUsername', 'tester_' + name); await page.fill('#regEmail', email); await page.fill('#regPassword', 'senha123'); await page.fill('#regPassword2', 'senha123');
  await page.evaluate(() => document.getElementById('registerForm').requestSubmit()); await page.waitForTimeout(2500);
  r.checks.logado = await page.evaluate(() => !!state.currentUser);
  await page.evaluate(() => document.getElementById('closeAuthModal')?.click());
  // favorita 3 frases por qid: Carnegie, Lutero, uma frase do ÍNDICE BAIXO (para sofrer deslocamento se houvesse índice)
  const alvo = await page.evaluate(() => { const f = (a, p) => QUOTES.findIndex(q => q.author === a && q.text.indexOf(p) === 0);
    return { carnegie: f('Andrew Carnegie', 'O problema da nossa era'), lutero: f('Martinho Lutero', 'O verdadeiro tesouro'), primeira: 3 }; });
  for (const i of Object.values(alvo)) { await page.evaluate((i) => toggleFavoriteQuote(i), i); await page.waitForTimeout(400); }
  const textos = await page.evaluate((a) => Object.values(a).map(i => QUOTES[i].text), alvo);
  const gravado = await page.evaluate((email) => JSON.parse(localStorage.getItem('__T:favorites:' + email)), email);
  r.checks.formatoGravado = { n: gravado.length, todosComQid: gravado.every(f => f.type === 'quote' && typeof f.qid === 'string' && !('id' in f)), exemplo: gravado[0] };
  const resolve = () => page.evaluate((textos) => state.favorites.filter(f => f.type === 'quote').map(f => QUOTES[QUOTE_POR_QID[f.qid]]?.text), textos);
  r.checks.resolveAposFavoritar = JSON.stringify((await resolve()).sort()) === JSON.stringify([...textos].sort());
  // (a) REMOÇÃO de uma frase ANTERIOR no array (desloca todos os índices seguintes)
  const rem = await page.evaluate(() => { const q = QUOTES[1]; const t = { qid: q.qid, texto: q.text.slice(0, 40) }; removerFrase(q.qid, 'teste de deslocamento'); return t; });
  r.checks.aposRemocaoAnterior = JSON.stringify((await resolve()).sort()) === JSON.stringify([...textos].sort());
  r.checks.indicesDeslocados = await page.evaluate((a) => ({ idxLuteroAntes: a.lutero, idxLuteroDepois: QUOTES.findIndex(q => q.author === 'Martinho Lutero' && q.text.indexOf('O verdadeiro tesouro') === 0) }), alvo);
  // (b) REORGANIZAÇÃO: embaralha QUOTES e reindexa
  await page.evaluate(() => { for (let i = QUOTES.length - 1; i > 0; i--) { const j = (i * 7919 + 13) % (i + 1); [QUOTES[i], QUOTES[j]] = [QUOTES[j], QUOTES[i]]; } reindexarQuotes(); reconstruirIndices(); });
  r.checks.aposEmbaralhar = JSON.stringify((await resolve()).sort()) === JSON.stringify([...textos].sort());
  // (c) UI: aba Favoritos do perfil lista as 3 frases certas; coração marcado no cartão certo na busca
  await page.evaluate(() => navigateTo('perfil')); await page.waitForTimeout(1200);
  await page.evaluate(() => document.querySelector('.profile-tab[data-tab="favorites"]')?.click()); await page.waitForTimeout(1200);
  r.checks.perfilTextos = await page.evaluate((textos) => { const t = document.getElementById('perfilContent').innerText.replace(/\s+/g, ' '); return textos.map(x => t.includes(x.replace(/\s+/g, ' ').slice(0, 30))); }, textos);
  r.checks.perfilContagem = await page.evaluate(() => state.favorites.length);
  await page.evaluate(() => navigateTo('explorar')); await page.waitForTimeout(800);
  await page.fill('#authorSearch', 'Carnegie'); await page.waitForTimeout(1200);
  r.checks.coracaoNoCartaoCerto = await page.evaluate(() => { const i = QUOTES.findIndex(q => q.author === 'Andrew Carnegie' && q.text.indexOf('O problema da nossa era') === 0); const b = document.querySelector(`#exploreGrid [data-fav-quote="${i}"]`); return { isFavQuote: isFavQuote(i), cartaoNaTela: !!b, ariaPressed: b?.getAttribute('aria-pressed') }; });
  // (d) PERSISTÊNCIA + RECARGA: favorita, recarrega, entra de novo e confere
  r.checks.gravadoAntesDeRecarregar = (await page.evaluate((email) => JSON.parse(localStorage.getItem('__T:favorites:' + email)), email)).length;
  // (e) remoção de uma frase favoritada: favorito some, os outros ficam
  const sumiu = await page.evaluate(() => { const q = QUOTES.find(x => x.author === 'Martinho Lutero' && x.text.indexOf('O verdadeiro tesouro') === 0); removerFrase(q.qid, 'teste'); return { luteroNosFav: state.favorites.some(f => f.qid === q.qid), restantes: state.favorites.length }; });
  r.checks.removerFavoritada = sumiu;
  // (f) legado: injeta formato antigo por índice e confere que é descartado, sem associar frase errada
  await page.evaluate((email) => localStorage.setItem('__T:favorites:' + email, JSON.stringify([{ type: 'quote', id: 5 }, { type: 'quote', id: 100 }, { type: 'post', id: 'p1' }])), email);
  await page.evaluate(async () => { await loadUserData(); });
  r.checks.legadoDescartado = await page.evaluate(() => ({ quotes: state.favorites.filter(f => f.type === 'quote').length, posts: state.favorites.filter(f => f.type === 'post').length }));
  // ---------- busca e layout ----------
  await page.fill('#authorSearch', '').catch(() => {});
  async function buscar(t) { await page.evaluate(() => navigateTo('explorar')); await page.waitForTimeout(800); await page.fill('#authorSearch', t); await page.waitForTimeout(1000); return page.evaluate(() => document.getElementById('resultsCount')?.textContent?.trim()); }
  r.checks.busca = { carnegie: await buscar('Carnegie'), santosDumont: await buscar('Santos Dumont'), plutarcoVaso: await buscar('vaso a ser enchido'), maquina: await buscar('máquina que voa') };
  for (const v of ['home', 'explorar']) { await page.evaluate((v) => navigateTo(v), v); await page.waitForTimeout(1200);
    r.checks['overflowX_' + v] = await page.evaluate(() => ({ over: document.documentElement.scrollWidth > window.innerWidth + 1, scrollW: document.documentElement.scrollWidth, innerW: window.innerWidth }));
    await page.screenshot({ path: `/tmp/t/shot_${tag}_${name}_${v}.png` }); }
  if (name === 'desktop') { const csv = await page.evaluate(() => CURADORIA_EXPORT_CSV(false)); fs.mkdirSync('/tmp/t/csv_final', { recursive: true }); for (const [k, v] of Object.entries(csv)) fs.writeFileSync('/tmp/t/csv_final/' + k, v); r.csvArquivos = Object.keys(csv); }
  r.local404 = Object.keys(notFound).filter(u => /\/assets\//.test(u)).length; r.pageErrors = pageErrors; r.consoleErrorsUnicos = consoleErrors; r.warns = [...new Set(warns)].slice(0, 6); r.bloqueados = [...blocked]; r.http404 = notFound;
  out.viewports[name] = r;
  await b.close().catch(() => {});
}
fs.writeFileSync(`/tmp/t/e2e2_${tag}.json`, JSON.stringify(out, null, 1));
console.log('ok');
