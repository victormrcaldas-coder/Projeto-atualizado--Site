import { b, site, abrir, congelar, OUT } from './base.mjs';
const w = +process.argv[2] || 390,
  h = w < 768 ? 844 : 900,
  tema = process.argv[3] || 'light';
const tag = `${w}-${tema}`;
const { p, erros } = await abrir({ w, h, tema });
const T = [0, 40, 80, 120, 160, 200, 260, 340];
// 1) galeria rolada de lado
await p.evaluate(() =>
  document.querySelector('#galeria').scrollIntoView({ block: 'center', behavior: 'instant' })
);
await p.waitForTimeout(400);
await p.evaluate(() => document.querySelector('#galeria').scrollTo({ left: 2400, behavior: 'instant' }));
await p.waitForTimeout(1500);
const alvo = await p.evaluate(() => {
  const bs = [...document.querySelectorAll('#galeria .retrato button')].filter((x) => {
    const r = x.getBoundingClientRect();
    return r.left >= 0 && r.right <= innerWidth && x.querySelector('img[data-person]')?.naturalWidth;
  });
  return { n: bs[0]?.dataset.autor, sl: document.querySelector('#galeria').scrollLeft };
});
console.log('alvo lateral', alvo);
let c = await p.locator(`#galeria .retrato button[data-autor="${alvo.n}"]`).boundingBox();
await p.mouse.click(c.x + c.width / 2, c.y + 60);
await p.waitForTimeout(1500);
let info = await congelar(p, `${tag}-c-volta-lateral`, [0, 120, 260], () => p.evaluate(() => history.back()));
console.log(
  info.filter((x) => /destaque\) -ua-view-transition-group/.test(x)).length
    ? 'retrato volta: sim'
    : 'retrato volta: NAO'
);
console.log(
  'depois',
  await p.evaluate(() => ({
    sl: document.querySelector('#galeria').scrollLeft,
    foco: document.activeElement.outerHTML.slice(0, 80),
    focoNaTela: (() => {
      const r = document.activeElement.getBoundingClientRect();
      return [Math.round(r.left), Math.round(r.top)];
    })()
  }))
);
// 2) índice de Autores & Obras -> autor
await p.evaluate(() => navigateTo('autores'));
await p.waitForTimeout(1200);
await p.evaluate(() => {
  const b = [...document.querySelectorAll('[data-indice]')].find((x) => /Clarice/.test(x.textContent));
  b.scrollIntoView({ block: 'center', behavior: 'instant' });
});
await p.waitForTimeout(800);
c = await p.locator('[data-indice]', { hasText: 'Clarice Lispector' }).first().boundingBox();
info = await congelar(p, `${tag}-d-indice`, T, () => p.mouse.click(c.x + c.width / 2, c.y + c.height / 2));
console.log(info.join('\n'));
console.log(
  'log',
  JSON.stringify(await p.evaluate(() => window.__log.slice(-1).map((l) => l.ready - l.tap)))
);
// 3) obra
await p.evaluate(() => {
  const o = document.querySelector('#view-panorama .obra-card .obra-title');
  o && o.scrollIntoView({ block: 'center', behavior: 'instant' });
});
await p.waitForTimeout(800);
const oc = await p.evaluate(() => {
  const o = document.querySelector('#view-panorama .obra-card');
  if (!o) return null;
  const t = o.querySelector('.obra-title');
  const r = t.getBoundingClientRect();
  const bt = o.querySelector('[data-obra]');
  const rb = bt && bt.getBoundingClientRect();
  return {
    t: t.textContent,
    b: bt && bt.outerHTML.slice(0, 120),
    x: rb ? rb.x + rb.width / 2 : r.x + 10,
    y: rb ? rb.y + rb.height / 2 : r.y + 10
  };
});
console.log('obra', oc);
if (oc) {
  info = await congelar(p, `${tag}-e-obra`, T, () => p.mouse.click(oc.x, oc.y));
  console.log(info.join('\n'));
  info = await congelar(p, `${tag}-f-obra-volta`, T, () => p.evaluate(() => history.back()));
  console.log(info.join('\n'));
}
console.log('erros', erros);
await b.close();
site.fechar();
