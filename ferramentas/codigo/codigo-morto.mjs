// Lista declarações de topo que ninguém usa (nem no JS, nem em index.html, nem em strings/templates).
// Uso: node ferramentas/codigo/codigo-morto.mjs
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { RAIZ } from '../lib/navegador.mjs';
import { scriptsDoSite } from './scripts.mjs';
const require = createRequire(
  fs.existsSync(path.join(RAIZ, 'node_modules/acorn'))
    ? path.join(RAIZ, 'x.js')
    : '/opt/node-tools/node_modules/x.js'
);
const acorn = require('acorn');
const walk = require('acorn-walk');
const root = RAIZ;
const ordem = scriptsDoSite().map((s) => s.replace(/^assets\/js\//, ''));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const decl = {};
const refs = {};
const strings = [];
for (const f of ordem) {
  const src = fs.readFileSync(path.join(root, 'assets/js', f), 'utf8');
  const ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'script', locations: true });
  ast.body.forEach((n) => {
    if (n.type === 'FunctionDeclaration')
      decl[n.id.name] = { f, l: n.loc.start.line, t: 'function', len: n.loc.end.line - n.loc.start.line + 1 };
    if (n.type === 'VariableDeclaration')
      n.declarations.forEach((d) => {
        if (d.id.type === 'Identifier')
          decl[d.id.name] = { f, l: n.loc.start.line, t: n.kind, len: n.loc.end.line - n.loc.start.line + 1 };
      });
  });
  walk.full(ast, (n) => {
    if (n.type === 'Identifier') refs[n.name] = (refs[n.name] || 0) + 1;
    if (n.type === 'Literal' && typeof n.value === 'string' && n.value.length < 60) strings.push(n.value);
    if (n.type === 'TemplateElement') strings.push(n.value.raw);
  });
}
const strAll = strings.join(' ') + ' ' + html;
const mortos = Object.entries(decl).filter(
  ([k, v]) => (refs[k] || 0) <= 1 && !new RegExp('\\b' + k + '\\b').test(strAll)
);
mortos.sort((a, b) => b[1].len - a[1].len);
console.log(mortos.length);
mortos.forEach(([k, v]) => console.log(v.t, k, v.f, 'l.' + v.l, v.len + ' linhas'));
