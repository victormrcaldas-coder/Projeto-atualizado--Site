// Garante que a divisão em vários arquivos não mudou o comportamento.
// Num único script, toda "function nome(){}" vale desde o início (hoisting); em vários
// scripts, só depois que o arquivo dela carrega. Este verificador acusa:
//  - código executado NA CARGA (topo do arquivo ou corpo de IIFE) que usa uma função
//    declarada num arquivo POSTERIOR;
//  - a mesma função declarada em mais de um lugar (só a última valeria num script único).
// Uso: node ferramentas/codigo/analise-carga.mjs   (sai com código 1 se achar problema)
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { RAIZ } from '../lib/navegador.mjs';
import { scriptsDoSite } from './scripts.mjs';
const require = createRequire(path.join('/opt/node-tools/node_modules', 'x.js'));
let acorn;
try {
  acorn = createRequire(path.join(RAIZ, 'node_modules', 'x.js'))('acorn');
} catch (e) {
  acorn = require('acorn');
}

const arquivos = scriptsDoSite();
const decl = {}; // nome -> [{arq, linha, ordem}]
const asts = arquivos.map((f, ordem) => {
  const ast = acorn.parse(fs.readFileSync(path.join(RAIZ, f), 'utf8'), {
    ecmaVersion: 'latest',
    sourceType: 'script',
    locations: true
  });
  ast.body.forEach((n) => {
    if (n.type === 'FunctionDeclaration')
      (decl[n.id.name] ||= []).push({ arq: f, linha: n.loc.start.line, ordem });
  });
  return { f, ordem, ast };
});
const problemas = [];
for (const [nome, l] of Object.entries(decl))
  if (l.length > 1)
    problemas.push(
      `função ${nome} declarada ${l.length} vezes: ` + l.map((x) => x.arq + ':' + x.linha).join(', ')
    );
function percorrer(n, cb) {
  if (!n || typeof n.type !== 'string') return;
  const ehFuncao =
    n.type === 'FunctionExpression' ||
    n.type === 'ArrowFunctionExpression' ||
    n.type === 'FunctionDeclaration';
  if (ehFuncao && !n.__iife) return; // corpo de função comum só roda depois, não na carga
  cb(n);
  if (n.type === 'CallExpression' && /FunctionExpression|ArrowFunctionExpression/.test(n.callee.type))
    n.callee.__iife = true;
  for (const k of Object.keys(n)) {
    if (k === 'loc') continue;
    const v = n[k];
    if (Array.isArray(v)) v.forEach((x) => x && typeof x.type === 'string' && percorrer(x, cb));
    else if (v && typeof v.type === 'string') percorrer(v, cb);
  }
}
for (const { f, ordem, ast } of asts)
  ast.body.forEach((st) => {
    if (st.type === 'FunctionDeclaration') return;
    percorrer(st, (n) => {
      if (n.type !== 'Identifier' || !decl[n.name]) return;
      const ultima = decl[n.name][decl[n.name].length - 1];
      if (ultima.ordem > ordem)
        problemas.push(
          `${f}:${n.loc.start.line} usa ${n.name} na carga, mas ela é declarada depois (${ultima.arq})`
        );
    });
  });
console.log(arquivos.length + ' arquivos analisados.');
console.log(problemas.length ? problemas.join('\n') : 'Nenhum problema de ordem de carga.');
process.exitCode = problemas.length ? 1 : 0;
