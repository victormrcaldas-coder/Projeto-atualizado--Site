import { b, site, abrir, tocar, congelar, OUT } from './base.mjs';
const w = +process.argv[2] || 390,
  h = w < 768 ? 844 : 900,
  tema = process.argv[3] || 'light';
const tag = `${w}-${tema}`;
const { p, erros } = await abrir({ w, h, tema });
// galeria: segundo retrato com foto
await p.evaluate(() =>
  document.querySelector('#galeria').scrollIntoView({ block: 'center', behavior: 'instant' })
);
await p.waitForTimeout(800);
const alvo = await p.evaluate(() => {
  const bs = [...document.querySelectorAll('#galeria .retrato button')].filter((x) => {
    const r = x.getBoundingClientRect();
    return r.left >= 0 && r.right <= innerWidth && x.querySelector('img[data-person]')?.naturalWidth;
  });
  return bs[1] ? bs[1].dataset.autor : bs[0]?.dataset.autor;
});
console.log('alvo', alvo, 'y', await p.evaluate(() => scrollY));
const sel = `#galeria .retrato button[data-autor="${alvo}"]`;
const c = await p.locator(sel).boundingBox();
let info = await congelar(p, `${tag}-a-galeria`, [0, 40, 80, 120, 160, 200, 260, 340, 400], () =>
  p.mouse.click(c.x + c.width / 2, c.y + 60)
);
console.log(info.join('\n'));
await p.waitForTimeout(1500);
await p.screenshot({ path: `${OUT}/${tag}-a-cor.png` });
console.log(
  'log',
  JSON.stringify(
    await p.evaluate(() =>
      window.__log.map((l) => ({
        ate_start: l.start - l.tap,
        ate_ready: l.ready - l.tap,
        total: l.fin - l.tap
      }))
    )
  )
);
console.log('foco depois de ir', await p.evaluate(() => document.activeElement.outerHTML.slice(0, 100)));
// voltar
info = await congelar(p, `${tag}-b-volta`, [0, 40, 80, 120, 160, 200, 260, 340, 400], () =>
  p.evaluate(() => history.back())
);
console.log(info.join('\n'));
console.log(
  'log',
  JSON.stringify(
    await p.evaluate(() =>
      window.__log.map((l) => ({ ate_start: l.start - l.tap, ate_ready: l.ready - l.tap }))
    )
  )
);
console.log(
  'volta',
  await p.evaluate(() => ({
    y: scrollY,
    foco: document.activeElement.outerHTML.slice(0, 100),
    sl: document.querySelector('#galeria').scrollLeft
  }))
);
console.log('erros', erros);
await b.close();
site.fechar();
