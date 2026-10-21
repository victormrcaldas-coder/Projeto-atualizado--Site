import { b, site, abrir, congelar, OUT } from './base.mjs';
// link direto, escuro e claro, 390 e 1440
for (const [w, h, tema, hash] of [
  [390, 844, 'dark', '#autor-adam-smith'],
  [1440, 900, 'light', '#autor-adam-smith'],
  [1440, 900, 'dark', '#obra-clarice-lispector-a-hora-da-estrela']
]) {
  const { p, ctx } = await abrir({ w, h, tema, hash, espera: false });
  const t0 = Date.now();
  const marcas = [];
  for (let i = 0; i < 40; i++) {
    const st = await p
      .evaluate(() => ({
        pend: document.documentElement.getAttribute('data-rota-pendente'),
        view: typeof state !== 'undefined' ? state.view : null,
        theme: document.documentElement.dataset.theme
      }))
      .catch(() => null);
    marcas.push([Date.now() - t0, JSON.stringify(st)]);
    if (i % 3 === 0)
      await p.screenshot({ path: `${OUT}/link-${w}-${tema}-${String(i).padStart(2, '0')}.png` });
    if (st && !st.pend && st.view && st.view !== 'home' && i > 3) break;
    await p.waitForTimeout(150);
  }
  console.log(
    w,
    tema,
    hash,
    marcas
      .filter((m, i) => i % 3 === 0 || i === marcas.length - 1)
      .map((m) => m.join(' '))
      .join('\n  ')
  );
  await p.waitForTimeout(800);
  await p.screenshot({ path: `${OUT}/link-${w}-${tema}-final.png` });
  console.log('foco', await p.evaluate(() => document.activeElement.outerHTML.slice(0, 80)));
  await ctx.close();
}
// movimento reduzido
{
  const { p, ctx } = await abrir({ w: 1440, h: 900, tema: 'light', reduz: true });
  await p.evaluate(() =>
    document.querySelector('#galeria').scrollIntoView({ block: 'center', behavior: 'instant' })
  );
  await p.waitForTimeout(800);
  const c = await p.locator('#galeria .retrato button').nth(1).boundingBox();
  await p.evaluate(() => {
    window.__anims = [];
    const o = Element.prototype.animate;
    Element.prototype.animate = function (k, t) {
      window.__anims.push(JSON.stringify(k).slice(0, 60) + ' ' + JSON.stringify(t));
      return o.apply(this, arguments);
    };
  });
  await p.mouse.click(c.x + c.width / 2, c.y + 60);
  await p.waitForTimeout(50);
  console.log(
    'reduz',
    await p.evaluate(() => ({
      vt: window.__log.length,
      anims: window.__anims,
      css: document
        .getAnimations()
        .map((a) => a.animationName || a.transitionProperty || 'js')
        .slice(0, 10)
    }))
  );
  await p.waitForTimeout(600);
  await p.evaluate(() => history.back());
  await p.waitForTimeout(50);
  console.log(
    'reduz volta',
    await p.evaluate(() => ({ vt: window.__log.length, anims: window.__anims.slice(-2) }))
  );
  await ctx.close();
}
await b.close();
site.fechar();
