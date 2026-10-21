import { b, site, abrir, congelar, OUT } from './base.mjs';
const w = +process.argv[2] || 1440,
  h = w < 768 ? 844 : 900;
const { p, erros } = await abrir({ w, h, tema: 'light' });
await p.evaluate(() =>
  document.querySelector('#galeria').scrollIntoView({ block: 'center', behavior: 'instant' })
);
await p.waitForTimeout(600);
for (let i = 0; i < 3; i++) {
  const c = await p.locator('[data-galeria="1"]').boundingBox();
  await p.mouse.click(c.x + c.width / 2, c.y + c.height / 2);
  await p.waitForTimeout(900);
}
const alvo = await p.evaluate(() => {
  const bs = [...document.querySelectorAll('#galeria .retrato button')].filter((x) => {
    const r = x.getBoundingClientRect();
    return r.left >= 0 && r.right <= innerWidth && x.querySelector('img[data-person]')?.naturalWidth;
  });
  return { n: bs[1]?.dataset.autor, sl: document.querySelector('#galeria').scrollLeft };
});
console.log('alvo', alvo);
const c = await p.locator(`#galeria .retrato button[data-autor="${alvo.n}"]`).boundingBox();
const info = await congelar(p, `${w}-i-lateral`, [0, 120, 200, 260, 340], () =>
  p.mouse.click(c.x + c.width / 2, c.y + 60)
);
console.log(
  'ida: retrato',
  info.some((x) => /mm-destaque\) -ua-view-transition-group/.test(x))
);
console.log(
  'lat',
  JSON.stringify(await p.evaluate(() => window.__log.slice(-1).map((l) => l.ready - l.tap)))
);
await p.waitForTimeout(1200);
const i2 = await congelar(p, `${w}-j-lateral-volta`, [0, 120, 260], () => p.evaluate(() => history.back()));
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
// teclado: Tab até um cartão e Enter
await p.evaluate(() => {
  const b = [...document.querySelectorAll('#galeria .retrato button')].find((x) => {
    const r = x.getBoundingClientRect();
    return r.left >= 0 && r.right <= innerWidth;
  });
  b.focus();
});
await p.keyboard.press('Enter');
await p.waitForTimeout(1200);
console.log(
  'teclado',
  await p.evaluate(() => ({
    v: state.view,
    foco: document.activeElement.outerHTML.slice(0, 70),
    vis: document.activeElement.matches(':focus-visible')
  }))
);
await p.goBack();
await p.waitForTimeout(1200);
console.log(
  'teclado volta',
  await p.evaluate(() => ({
    v: state.view,
    foco: document.activeElement.outerHTML.slice(0, 70),
    vis: document.activeElement.matches(':focus-visible')
  }))
);
await p.goForward();
await p.waitForTimeout(1200);
console.log(
  'avancar',
  await p.evaluate(() => ({ v: state.view, y: scrollY, foco: document.activeElement.outerHTML.slice(0, 70) }))
);
console.log('erros', erros);
await b.close();
site.fechar();
