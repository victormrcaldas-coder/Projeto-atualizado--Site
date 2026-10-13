// Extrai do site carregado (estado final) os dados para conferência editorial.
// Uso: node ferramentas/exportar/dados-do-site.mjs obras|biografias|logs [arquivo_saida]
//   obras       -> { obras: OBRAS, paginas: OBRA_PAGINA }
//   biografias  -> { stories, perfis: PERFIS_PROFUNDOS, autores: [{nome, papel, nasc, morte, feitos, nfrases, nobras, story, role}] }
//   logs        -> mensagens do console (as fases registram o que aplicaram: "MeMotiva · Fase N: …")
import fs from 'fs';
import path from 'path';
import { chromium, servir, soLocal, TRABALHO } from '../lib/navegador.mjs';
const tipo = process.argv[2];
if (!['obras', 'biografias', 'logs'].includes(tipo)) {
  console.error('Uso: dados-do-site.mjs obras|biografias|logs [saida]');
  process.exit(2);
}
const saida = path.resolve(process.argv[3] || path.join(TRABALHO, 'exportacao', tipo + '.json'));
fs.mkdirSync(path.dirname(saida), { recursive: true });
const site = await servir();
const b = await chromium.launch();
const pg = await b.newPage();
const logs = [];
pg.on('console', (m) => {
  if (!/ERR_FAILED/.test(m.text())) logs.push(m.type() + ': ' + m.text());
});
pg.on('pageerror', (e) => logs.push('pageerror: ' + e));
await soLocal(pg);
await pg.goto(site.url);
await pg.waitForTimeout(15000);
let d;
if (tipo === 'obras')
  d = await pg.evaluate(() => ({
    obras: OBRAS,
    paginas: typeof OBRA_PAGINA !== 'undefined' ? OBRA_PAGINA : null
  }));
if (tipo === 'biografias')
  d = await pg.evaluate(() => {
    const autores = [...AUTOR_INDEX.keys()].map((n) => {
      const i = autorInfo(n);
      return {
        nome: n,
        papel: i.papel,
        nasc: i.nasc,
        morte: i.morte,
        feitos: i.feitos,
        nfrases: i.frases.length,
        nobras: (i.obras || []).length,
        story: i.story ? i.story.id : null,
        role: i.story ? i.story.role || null : null
      };
    });
    return {
      stories: STORIES.map((s) => ({
        id: s.id,
        author: s.author,
        title: s.title,
        role: s.role || null,
        excerpt: s.excerpt,
        text: s.text
      })),
      perfis: PERFIS_PROFUNDOS,
      autores
    };
  });
if (tipo === 'logs') d = logs;
fs.writeFileSync(saida, JSON.stringify(d, null, tipo === 'logs' ? 1 : 0));
console.log('gravado', saida);
await b.close();
site.fechar();
