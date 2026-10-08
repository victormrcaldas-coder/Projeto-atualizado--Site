import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const exe = await chromium.executablePath();
const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage(); const errs = [];
page.on('pageerror', e => errs.push(String(e.message).slice(0,160)));
await page.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
await page.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
await page.waitForFunction(() => { const n = QUOTES.length; window.__l = window.__l || {n:-1,t:Date.now()}; if (window.__l.n !== n) { window.__l = {n,t:Date.now()}; return false; } return Date.now() - window.__l.t > 5000; }, null, { timeout: 90000, polling: 500 });
// 1) todos os panoramas (biografias) e todas as páginas de obra: renderiza e checa conteúdo
const res = await page.evaluate(async () => {
  const falhas = { panorama: [], obra: [] }; let nP = 0, nO = 0;
  const container = () => document.getElementById('view-' + state.view) || document.querySelector('main') || document.body;
  for (const nome of AUTOR_INDEX.keys()) {
    try { abrirPanorama(nome); await new Promise(r => setTimeout(r, 0)); const el = document.getElementById('panoramaContent') || document.querySelector('[id^="panorama"]') || document.body; const txt = (el.innerText || '').trim(); nP++; if (txt.length < 80 || /undefined|NaN|\[object/.test(txt)) falhas.panorama.push([nome, txt.slice(0, 60)]); }
    catch (e) { falhas.panorama.push([nome, 'EXC ' + e.message.slice(0, 80)]); }
  }
  const oids = Object.keys(OBRA_POR_ID);
  for (const oid of oids) {
    try { abrirObra(oid); await new Promise(r => setTimeout(r, 0)); const el = document.getElementById('obraContent') || document.querySelector('[id^="obra"]') || document.body; const txt = (el.innerText || '').trim(); nO++; if (txt.length < 80 || /undefined|NaN|\[object/.test(txt)) falhas.obra.push([oid, (obraAtual && obraAtual.t) || '', txt.slice(0, 60)]); }
    catch (e) { falhas.obra.push([oid, 'EXC ' + e.message.slice(0, 80)]); }
  }
  return { nP, nO, falhasPanorama: falhas.panorama.length, falhasObra: falhas.obra.length, amostraP: falhas.panorama.slice(0, 6), amostraO: falhas.obra.slice(0, 6) };
});
console.log(JSON.stringify(res));
// 2) modais: login e cadastro abrem e fecham; compartilhar frase
const modais = await page.evaluate(async () => {
  const out = {}; await new Promise(r => setTimeout(r, 300));
  navigateTo('explorar'); await new Promise(r => setTimeout(r, 800));
  const vis = id => { const e = document.getElementById(id); return !!e && !e.classList.contains('hidden') && getComputedStyle(e).display !== 'none'; };
  const btn = document.querySelector('#exploreGrid [data-fav-quote]'); if (btn) btn.click(); await new Promise(r => setTimeout(r, 400));
  out.authAbreSemLogin = vis('authModal');
  document.getElementById('closeAuthModal')?.click(); await new Promise(r => setTimeout(r, 300)); out.authFecha = !vis('authModal');
  return out;
});
console.log(JSON.stringify(modais));
// 3) toque real (emulação) em cartão e favorito
const ctx2 = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
const p2 = await ctx2.newPage(); const e2 = [];
p2.on('pageerror', e => e2.push(String(e.message).slice(0,120)));
await p2.route('**/*', r => r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort());
await p2.goto(`http://127.0.0.1:${process.argv[2]}/index.html`, { waitUntil: 'domcontentloaded', timeout: 120000 });
await p2.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, { timeout: 60000 });
await p2.waitForTimeout(6000);
await p2.evaluate(() => navigateTo('explorar')); await p2.waitForTimeout(1200);
const fav = p2.locator('#exploreGrid [data-fav-quote]').first();
await fav.scrollIntoViewIfNeeded(); await fav.tap(); await p2.waitForTimeout(600);
const modalTouch = await p2.evaluate(() => { const e = document.getElementById('authModal'); return !!e && !e.classList.contains('hidden') && getComputedStyle(e).display !== 'none'; });
await p2.evaluate(() => document.getElementById('closeAuthModal')?.click());
await p2.locator('.nav-btn[data-view="historias"], [data-view="historias"]').first().tap().catch(()=>{}); await p2.waitForTimeout(800);
const viewAposToque = await p2.evaluate(() => state.view);
console.log(JSON.stringify({ toqueAbreModalLogin: modalTouch, viewAposTocarHistorias: viewAposToque, erros: e2 }));
console.log('pageErrors desktop:', JSON.stringify(errs.slice(0,3)));
await b.close();
