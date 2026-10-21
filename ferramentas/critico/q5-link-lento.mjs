import { b, site, abrir, OUT } from './base.mjs';
for (const [w, h, tema, hash] of [
  [390, 844, 'dark', '#autor-adam-smith'],
  [1440, 900, 'light', '#autor-adam-smith'],
  [1440, 900, 'dark', '#obra-clarice-lispector-a-hora-da-estrela'],
  [390, 844, 'light', '#explorar']
]) {
  const { p, ctx } = await abrir({ w, h, tema, hash, espera: false });
  const cdp = await ctx.newCDPSession(p);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  const t0 = Date.now();
  const marcas = [];
  for (let i = 0; i < 60; i++) {
    const st = await p
      .evaluate(() => ({
        pend: document.documentElement.getAttribute('data-rota-pendente'),
        view: typeof state !== 'undefined' ? state.view : null,
        theme: document.documentElement.dataset.theme,
        bodyTheme: document.body && document.body.dataset.theme,
        bg: document.body ? getComputedStyle(document.body).backgroundColor : null
      }))
      .catch((e) => String(e).slice(0, 40));
    marcas.push([Date.now() - t0, JSON.stringify(st)]);
    await p.screenshot({ path: `${OUT}/lk-${w}-${tema}-${String(i).padStart(2, '0')}.png` }).catch(() => {});
    if (st && st.view && st.view !== 'home' && !st.pend && i > 2) {
      await p.waitForTimeout(250);
      await p.screenshot({ path: `${OUT}/lk-${w}-${tema}-${String(i + 1).padStart(2, '0')}.png` });
      break;
    }
  }
  console.log(w, tema, hash, '\n  ' + marcas.map((m) => m.join(' ')).join('\n  '));
  await ctx.close();
}
await b.close();
site.fechar();
