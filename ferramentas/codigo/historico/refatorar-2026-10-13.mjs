// REGISTRO HISTÓRICO: script usado em 13/10/2026 para dividir o antigo assets/js/memotiva.js
// (arquivo único) nos módulos atuais. Não precisa ser rodado de novo; fica como documentação.
// Refatoração mecânica e verificável de assets/js/memotiva.js:
// (1) remove cópias anteriores de funções declaradas mais de uma vez (num único script só a última vale);
// (2) renomeia os objetos de relatório F8, F20… para RELATORIO_FASE8…;
// (3) divide o arquivo em módulos por seção, mantendo a ordem de carga.
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const require = createRequire('/opt/node-tools/node_modules/');
const acorn = require('acorn');
const walk = require('acorn-walk');
const [, , entrada, saidaDir, planoArq] = process.argv;
let src = fs.readFileSync(entrada, 'utf8');
const parse = (s) =>
  acorn.parse(s, { ecmaVersion: 'latest', sourceType: 'script', locations: true, ranges: true });

// ---------- (1) funções duplicadas ----------
let ast = parse(src);
const decls = {};
ast.body.forEach((n) => {
  if (n.type === 'FunctionDeclaration') (decls[n.id.name] ||= []).push(n);
});
const remover = [];
for (const [nome, lista] of Object.entries(decls))
  if (lista.length > 1) lista.slice(0, -1).forEach((n) => remover.push({ nome, a: n.start, b: n.end }));
// inclui comentário imediatamente anterior (sem linha em branco entre) se não for cabeçalho de seção
remover.forEach((r) => {
  const antes = src.slice(0, r.a);
  const m = antes.match(/(\/\*(?:(?!\*\/)[\s\S])*\*\/|(?:[ \t]*\/\/[^\n]*\n)+)[ \t]*\n?[ \t]*$/);
  if (m && !/={4,}|-{6,}/.test(m[1]) && m[1].length < 600) r.a = r.a - m[0].length;
});
remover.sort((x, y) => y.a - x.a);
const removidas = {};
for (const r of remover) {
  let b = r.b;
  while (src[b] === '\n' && src[b + 1] === '\n') b++; // engole linhas em branco excedentes
  src = src.slice(0, r.a) + src.slice(b);
  removidas[r.nome] = (removidas[r.nome] || 0) + 1;
}

// ---------- (2) renomear F\d+ ----------
ast = parse(src);
const alvo = /^F\d+$/;
const tops = new Set(
  ast.body
    .filter((n) => n.type === 'VariableDeclaration')
    .flatMap((n) => n.declarations.map((d) => d.id.name))
    .filter((n) => alvo.test(n))
);
const edits = [];
walk.fullAncestor(ast, (node, anc) => {
  if (node.type !== 'Identifier' || !tops.has(node.name)) return;
  const p = anc[anc.length - 2];
  if (p && p.type === 'MemberExpression' && p.property === node && !p.computed) return;
  if (p && (p.type === 'Property' || p.type === 'MethodDefinition') && p.key === node && !p.computed) {
    if (p.shorthand)
      edits.push({ a: node.start, b: node.end, txt: node.name + ': RELATORIO_FASE' + node.name.slice(1) });
    return;
  }
  edits.push({ a: node.start, b: node.end, txt: 'RELATORIO_FASE' + node.name.slice(1) });
});
edits
  .sort((x, y) => y.a - x.a)
  .forEach((e) => {
    src = src.slice(0, e.a) + e.txt + src.slice(e.b);
  });

// ---------- (3) dividir ----------
ast = parse(src);
const linhas = src.split('\n');
const plano = JSON.parse(fs.readFileSync(planoArq, 'utf8')); // [{arquivo, inicioMarcador}] na ordem
// cada marcador: texto exato de uma linha de cabeçalho; o corte vai para depois do fim do comando de topo anterior
const posLinha = [];
{
  let p = 0;
  for (const l of linhas) {
    posLinha.push(p);
    p += l.length + 1;
  }
}
function corte(marcador) {
  const achados = linhas.map((l, i) => (l.trim() === marcador.trim() ? i : -1)).filter((i) => i >= 0);
  if (achados.length !== 1)
    throw new Error('marcador deve ocorrer exatamente uma vez (' + achados.length + '): ' + marcador);
  const idx = achados[0];
  const pos = posLinha[idx];
  // comando de topo que contém ou que começa depois do marcador
  let prevFim = 0;
  for (const st of ast.body) {
    if (st.end <= pos) prevFim = st.end;
    else break;
  }
  // começa na linha seguinte ao fim do comando anterior
  let p = prevFim;
  while (p < src.length && src[p] !== '\n') p++;
  return p + 1;
}
const cortes = plano.map((f, i) => (i === 0 ? 0 : corte(f.marcador)));
for (let i = 1; i < cortes.length; i++)
  if (cortes[i] <= cortes[i - 1]) throw new Error('ordem de cortes inválida em ' + plano[i].arquivo);
const ordem = [];
plano.forEach((f, i) => {
  const trecho = src.slice(cortes[i], i + 1 < cortes.length ? cortes[i + 1] : src.length);
  const dest = path.join(saidaDir, f.arquivo);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const cab = `/* MeMotiva — ${f.arquivo}\n   ${f.descricao}\n   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */\n\n`;
  fs.writeFileSync(dest, cab + trecho.replace(/^\n+/, '').replace(/\n*$/, '\n'));
  ordem.push(f.arquivo);
});
fs.writeFileSync(path.join(saidaDir, 'ordem.json'), JSON.stringify(ordem, null, 1));
console.log(
  JSON.stringify(
    {
      funcoesRemovidas: removidas,
      totalRemovidas: remover.length,
      renomeadas: [...tops],
      edicoesRenome: edits.length,
      arquivos: ordem.length
    },
    null,
    1
  )
);
