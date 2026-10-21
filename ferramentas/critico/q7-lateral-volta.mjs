import { b, site, abrir, congelar, OUT } from './base.mjs';
const w = +process.argv[2] || 1440,
  h = w < 768 ? 844 : 900;
const { p } = await abrir({ w, h, tema: 'light' });
await p.evaluate(() =>
  document.querySelector('#galeria').scrollIntoView({ block: 'center', behavior: 'instant' })
);
await p.waitForTimeout(600);
await p.evaluate(() => window.scrollBy({ top: 200, behavior: 'instant' }));
await p.waitForTimeout(500);
console.log(
  await p.evaluate(() => {
    const g = document.querySelector('#galeria');
    return {
      sw: g.scrollWidth,
      cw: g.clientWidth,
      ov: getComputedStyle(g).overflowX,
      snap: getComputedStyle(g).scrollSnapType,
      sb: getComputedStyle(g).scrollBehavior
    };
  })
);
const c = await p.locator('[data-galeria="1"]').boundingBox();
console.log('seta', c);
await p.mouse.click(c.x + c.width / 2, c.y + c.height / 2);
await p.waitForTimeout(1500);
await p.mouse.click(c.x + c.width / 2, c.y + c.height / 2);
await p.waitForTimeout(1500);
console.log('sl', await p.evaluate(() => document.querySelector('#galeria').scrollLeft));
const alvo = await p.evaluate(() => {
  const bs = [...document.querySelectorAll('#galeria .retrato button')].filter((x) => {
    const r = x.getBoundingClientRect();
    return r.left >= 0 && r.right <= innerWidth && x.querySelector('img[data-person]')?.naturalWidth;
  });
  return bs.map((b) => b.dataset.autor);
});
console.log('visiveis', alvo);
const bc = await p.locator(`#galeria .retrato button[data-autor="${alvo[1]}"]`).boundingBox();
await p.mouse.click(bc.x + bc.width / 2, bc.y + 60);
await p.waitForTimeout(1500);
console.log('view', await p.evaluate(() => [state.view, panAtual]));
const i2 = await congelar(p, `${w}-k-lat-volta`, [0, 120, 200, 300], () => p.evaluate(() => history.back()));
console.log(
  'volta: retrato',
  i2.some((x) => /mm-destaque\) -ua-view-transition-group/.test(x))
);
await p.waitForTimeout(800);
console.log(
  'depois',
  await p.evaluate(() => ({
    sl: document.querySelector('#galeria').scrollLeft,
    foco: document.activeElement.outerHTML.slice(0, 70),
    r: (() => {
      const r = document.activeElement.getBoundingClientRect();
      return [Math.round(r.left), Math.round(r.top)];
    })()
  }))
);
await b.close();
site.fechar();
