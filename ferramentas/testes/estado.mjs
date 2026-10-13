// Captura o ESTADO FINAL do site no Chromium (depois de todas as fases) e, opcionalmente,
// compara com uma captura anterior. É a rede de segurança de qualquer refatoração:
// se o estado for idêntico, o que o leitor vê não mudou.
//
// Uso:
//   node ferramentas/testes/estado.mjs                          -> grava .trabalho/estado/atual.json
//   node ferramentas/testes/estado.mjs --salvar base            -> grava .trabalho/estado/base.json
//   node ferramentas/testes/estado.mjs --comparar base          -> captura e compara com base.json
//   (opcional) --raiz <pasta>  para capturar outra cópia do site
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { chromium, servir, soLocal, RAIZ, TRABALHO } from '../lib/navegador.mjs';

const arg = (n) => {
  const i = process.argv.indexOf(n);
  return i > -1 ? process.argv[i + 1] : null;
};
const raiz = arg('--raiz') || RAIZ;
const dir = path.join(TRABALHO, 'estado');
fs.mkdirSync(dir, { recursive: true });

const site = await servir(raiz);
const b = await chromium.launch();
const pg = await b.newPage();
const erros = [];
const logs = [];
pg.on('pageerror', (e) => erros.push(String(e)));
pg.on('console', (m) => {
  if (!/ERR_FAILED/.test(m.text())) logs.push(m.type() + ': ' + m.text());
});
await soLocal(pg);
await pg.goto(site.url);
await pg.waitForTimeout(15000); // a cadeia de fases e os setTimeout das Fases 75/78 terminam antes disso
const d = await pg.evaluate(() => {
  const limpa = (k, v) =>
    typeof v === 'function'
      ? '[fn]'
      : v instanceof RegExp
        ? String(v)
        : v instanceof Map
          ? [...v.entries()]
          : v instanceof Set
            ? [...v]
            : v;
  const pega = (n) => {
    try {
      return JSON.parse(JSON.stringify(eval(n), limpa));
    } catch (e) {
      return '[erro: ' + e.message + ']';
    }
  };
  const r = {};
  [
    'QUOTES',
    'OBRAS',
    'OBRA_PAGINA',
    'PERFIS_PROFUNDOS',
    'STORIES',
    'PAPEIS',
    'FEITOS',
    'CATEGORIES',
    'window.CURADORIA_REMOVIDAS'
  ].forEach((n) => (r[n] = pega(n)));
  r.AUTOR_INDEX = [...AUTOR_INDEX.entries()].map(([k, v]) => [
    k,
    v.frases.length,
    v.story ? v.story.id : null
  ]);
  try {
    r.LACUNAS = JSON.parse(JSON.stringify(LACUNAS()));
  } catch (e) {
    r.LACUNAS = 'n/d';
  }
  r.statQuotes = (document.getElementById('statQuotes') || {}).textContent;
  r.globais = Object.keys(window)
    .filter((k) => /^[A-Z_0-9]+$|^F\d|^FASE|^CURADORIA/.test(k))
    .sort();
  r.funcoes = Object.keys(window)
    .filter((k) => {
      try {
        return typeof window[k] === 'function';
      } catch (e) {
        return false;
      }
    })
    .sort();
  return r;
});
d.erros = erros;
d.logs = logs;
await b.close();
site.fechar();

const nome = arg('--salvar') || 'atual';
fs.writeFileSync(path.join(dir, nome + '.json'), JSON.stringify(d));
const resumo = {};
for (const k of Object.keys(d))
  resumo[k] = crypto.createHash('sha1').update(JSON.stringify(d[k])).digest('hex').slice(0, 10);
console.log(
  JSON.stringify(
    { frases: d.QUOTES.length, erros: erros.length, gravado: path.join(dir, nome + '.json'), hashes: resumo },
    null,
    1
  )
);

const comp = arg('--comparar');
if (comp) {
  const base = JSON.parse(fs.readFileSync(path.join(dir, comp + '.json'), 'utf8'));
  const dif = Object.keys(base).filter((k) => JSON.stringify(base[k]) !== JSON.stringify(d[k]));
  console.log(dif.length ? 'DIFERENÇAS em: ' + dif.join(', ') : 'IDÊNTICO a ' + comp + '.json');
  process.exitCode = dif.length ? 1 : 0;
}
