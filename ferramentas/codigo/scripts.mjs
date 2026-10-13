// Lista os scripts do site na ordem em que index.html os carrega.
import fs from 'fs';
import path from 'path';
import { RAIZ } from '../lib/navegador.mjs';
export function scriptsDoSite(raiz = RAIZ) {
  const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
  return [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
}
if (process.argv[1] && process.argv[1].endsWith('scripts.mjs')) console.log(scriptsDoSite().join('\n'));
