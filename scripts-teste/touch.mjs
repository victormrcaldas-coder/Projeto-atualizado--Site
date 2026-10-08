import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
const exe = await chromium.executablePath();
const out = {};
for (const [name, vp, touch] of [['mobile', {width:390,height:844}, true], ['desktop', {width:1440,height:900}, false]]) {
  const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
  const ctx = await b.newContext({ viewport: vp, isMobile: touch, hasTouch: touch, deviceScaleFactor: touch ? 2 : 1 });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(String(e.message).slice(0,120)));
  await p.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
  await p.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await p.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 90000 });
  await p.waitForTimeout(7000);
  const r = {};
  const modalAberto = () => p.evaluate(() => document.getElementById('authModal').classList.contains('show'));
  const act = async (loc) => touch ? loc.tap() : loc.click();
  // navegação pela barra visível
  for (const v of ['explorar','descubra','historias','perfil','home']) {
    const loc = p.locator((touch ? ".bn-item" : ".nav-link") + `[data-nav="${v}"]`).first();
    const n = await p.locator((touch ? ".bn-item" : ".nav-link") + `[data-nav="${v}"]`).count();
    if (n) { await act(loc); await p.waitForTimeout(700); r['nav_'+v] = await p.evaluate(() => state.view); } else r['nav_'+v] = 'sem botão visível';
  }
  await p.evaluate(() => navigateTo('explorar')); await p.waitForTimeout(1200);
  const fav = p.locator('#exploreGrid [data-fav-quote]').first(); await fav.scrollIntoViewIfNeeded(); await act(fav); await p.waitForTimeout(500);
  r.favSemLoginAbreModal = await modalAberto();
  await act(p.locator('#closeAuthModal')); await p.waitForTimeout(400); r.modalFechaPeloBotao = !(await modalAberto());
  await act(fav); await p.waitForTimeout(400); r.reabre = await modalAberto();
  await p.evaluate(() => document.getElementById('scrim')?.click()); await p.waitForTimeout(400); r.fechaPeloScrim = !(await modalAberto());
  await p.keyboard.press('Escape'); r.erros = errs;
  out[name] = r; await b.close().catch(()=>{});
}
console.log(JSON.stringify(out, null, 1));
