// Exporta o estado real do acervo (rodando no Chromium) para os CSVs editoriais e JSONs de apoio.
// Gera: curadoria-frases.csv, catalogo-obras.csv, lacunas-restantes.csv, notas-internas.csv,
// remocoes-curadoria.csv (via CURADORIA_EXPORT_CSV, Fase 87) + quotes.json, obras.json, lacunas.json.
//
// Uso: node ferramentas/exportar/exportar-csv.mjs [pasta_saida] [largura altura]
//      (padrão: .trabalho/exportacao). Depois de conferir, copie os CSVs para curadoria/.
import fs from 'fs';
import path from 'path';
import { chromium, servir, TRABALHO } from '../lib/navegador.mjs';
const out = path.resolve(process.argv[2] || path.join(TRABALHO, 'exportacao'));
fs.mkdirSync(out, { recursive: true });
const W = +(process.argv[3] || 1440),
  H = +(process.argv[4] || 900);
const site = await servir();
const b = await chromium.launch({ headless: true });
const page = await (await b.newContext({ viewport: { width: W, height: H } })).newPage();
const errs = [],
  net = [],
  logs = [];
page.on('pageerror', (e) => errs.push(String(e).slice(0, 300)));
page.on('console', (m) => {
  const t = m.text();
  if (/MeMotiva · Fase|warn/i.test(t) || m.type() === 'warning' || m.type() === 'error')
    logs.push(m.type() + ': ' + t.slice(0, 400));
});
page.on('response', (r) => {
  if (r.status() >= 400) net.push(r.status() + ' ' + r.url());
});
await page.route('**/*', (r) =>
  r.request().url().startsWith('http://127.0.0.1') ? r.continue() : r.abort()
);
await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 2000, null, {
  timeout: 120000
});
await page.waitForFunction(
  () => {
    const n = QUOTES.length;
    window.__l = window.__l || { n: -1, t: Date.now() };
    if (window.__l.n !== n) {
      window.__l = { n, t: Date.now() };
      return false;
    }
    return Date.now() - window.__l.t > 6000;
  },
  null,
  { timeout: 120000, polling: 500 }
);
const info = await page.evaluate(() => {
  const st = {};
  QUOTES.forEach((q) => {
    const s = q.st || 'A';
    st[s] = (st[s] || 0) + 1;
  });
  const qids = QUOTES.map((q) => q.qid);
  const dupQ = qids.length - new Set(qids).size;
  let obras = 0;
  Object.keys(OBRAS).forEach((a) => (obras += OBRAS[a].length));
  return {
    frases: QUOTES.length,
    home: (document.getElementById('statQuotes') || {}).textContent,
    autores: AUTOR_INDEX.size,
    obras,
    lacunas: LACUNAS().length,
    registros: CURADORIA_REMOVIDAS.length,
    comOrig: QUOTES.filter((q) => q.orig).length,
    status: st,
    qidDup: dupQ,
    semQid: QUOTES.filter((q) => !q.qid).length,
    pend: typeof MEMOTIVA_PENDENTES === 'function' ? MEMOTIVA_PENDENTES().length : null,
    notaPublica: QUOTES.filter((q) => q.notaAutoria).length,
    notaInterna: QUOTES.filter((q) => q.notaInterna).length
  };
});
const csv = await page.evaluate(() => CURADORIA_EXPORT_CSV(false));
const dump = await page.evaluate(() => ({
  quotes: QUOTES.map((q) => Object.assign({}, q)),
  lacunas: LACUNAS(),
  obras: OBRAS
}));
fs.mkdirSync(out, { recursive: true });
for (const [k, v] of Object.entries(csv)) fs.writeFileSync(path.join(out, k), v);
fs.writeFileSync(path.join(out, 'quotes.json'), JSON.stringify(dump.quotes));
fs.writeFileSync(path.join(out, 'lacunas.json'), JSON.stringify(dump.lacunas));
fs.writeFileSync(path.join(out, 'obras.json'), JSON.stringify(dump.obras));
console.log(
  JSON.stringify(
    { info, errs, net, logs: logs.filter((l) => /warn|error|não/i.test(l)).slice(0, 40), nlogs: logs.length },
    null,
    1
  )
);
await b.close();
site.fechar();
