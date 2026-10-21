import { b, site, abrir, congelar, OUT } from './base.mjs';
const w = +process.argv[2] || 390,
  h = w < 768 ? 844 : 900,
  tema = process.argv[3] || 'light';
const tag = `${w}-${tema}`;
const { p, erros } = await abrir({ w, h, tema });
const T = [0, 40, 80, 120, 160, 200, 260, 340];
// filme
await p.evaluate(() =>
  document.querySelector('.filme').scrollIntoView({ block: 'start', behavior: 'instant' })
);
await p.waitForTimeout(2500);
await p.evaluate(() => {
  const b = document.querySelector('.filme .filme-acoes [data-autor]');
  const r = b.getBoundingClientRect();
  if (r.bottom > innerHeight - 120)
    window.scrollBy({ top: r.bottom - innerHeight + 200, behavior: 'instant' });
});
await p.waitForTimeout(1500);
await p.screenshot({ path: `${OUT}/${tag}-g-filme-antes.png` });
const c = await p.locator('.filme .filme-acoes [data-autor]').first().boundingBox();
console.log('botao', c, await p.locator('.filme .filme-acoes [data-autor]').first().textContent());
const info = await congelar(p, `${tag}-g-filme`, T, () =>
  p.mouse.click(c.x + c.width / 2, c.y + c.height / 2)
);
console.log(info.join('\n'));
await p.waitForTimeout(1200);
await p.screenshot({ path: `${OUT}/${tag}-g-filme-cor.png` });
console.log(
  'log',
  JSON.stringify(await p.evaluate(() => window.__log.slice(-1).map((l) => l.ready - l.tap)))
);
// volta para o filme
const i2 = await congelar(p, `${tag}-h-filme-volta`, [0, 80, 160, 260], () =>
  p.evaluate(() => history.back())
);
console.log(i2.join('\n'));
console.log(
  'volta',
  await p.evaluate(() => ({
    y: scrollY,
    foco: document.activeElement.outerHTML.slice(0, 100),
    r: document.activeElement.getBoundingClientRect().top
  }))
);
console.log('erros', erros);
await b.close();
site.fechar();
