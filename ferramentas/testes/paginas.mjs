// Abre, uma a uma, todas as páginas de obra e todas as páginas de autor (panorama)
// e acusa exceções, páginas vazias ou texto "undefined"/"null"/"NaN".
// Uso: node ferramentas/testes/paginas.mjs
import { chromium, servir, soLocal } from '../lib/navegador.mjs';
const site = await servir();
const b = await chromium.launch({ headless: true });
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
const errosPagina = [];
p.on('pageerror', (e) => errosPagina.push(String(e)));
await soLocal(p);
await p.goto(site.url);
await p.waitForTimeout(8000);
const r = await p.evaluate(async () => {
  const out = { obras: 0, obrasVazias: [], autores: 0, autoresVazios: [], erros: [] };
  for (const oid of Object.keys(OBRA_POR_ID)) {
    try {
      abrirObra(oid);
      renderObra();
      const t = document.getElementById('obraRoot').innerText;
      if (!t || t.length < 80) out.obrasVazias.push(oid);
      if (/undefined|\bnull\b|NaN/.test(t)) out.erros.push(oid + ': texto com undefined/null');
      out.obras++;
    } catch (e) {
      out.erros.push(oid + ': ' + e.message);
    }
  }
  for (const n of [...AUTOR_INDEX.keys()]) {
    try {
      abrirPanorama(n);
      await new Promise((r) => setTimeout(r, 20));
      const el =
        document.getElementById('panoramaRoot') || document.querySelector('.view.active') || document.body;
      const t = el.innerText;
      if (t.length < 100) out.autoresVazios.push(n);
      if (/undefined|\bnull\b|NaN/.test(t)) out.erros.push(n + ': texto com undefined/null');
      out.autores++;
    } catch (e) {
      out.erros.push(n + ': ' + e.message);
    }
  }
  return out;
});
r.excecoes = errosPagina.slice(0, 10);
console.log(JSON.stringify(r, null, 1));
await b.close();
site.fechar();
process.exitCode =
  r.erros.length || r.obrasVazias.length || r.autoresVazios.length || errosPagina.length ? 1 : 0;
