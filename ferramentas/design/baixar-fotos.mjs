// Baixa para .trabalho/design/fotos/ as fotos curadas dos autores de design/prototipos/amostra.js.
// Os prints e o Artifact usam fotos locais: o navegador automático e a página publicada não carregam
// o Wikimedia. Só baixa o que ainda não está no cache (nem na pasta antiga do Portão 1).
// Respeita o limite de pedidos do Commons: um pedido por vez, com pausa, e espera quando vem 429.
//
// Uso: NODE_USE_ENV_PROXY=1 node ferramentas/design/baixar-fotos.mjs [largura=1000]
import fs from 'fs';
import path from 'path';
import { RAIZ, TRABALHO } from '../lib/navegador.mjs';

const LARGURA = Number(process.argv[2]) || 1000;
const UA =
  'MeMotiva-redesign/1.0 (prototipos; https://github.com/victormrcaldas-coder/Projeto-atualizado--Site)';
const CACHE = path.join(TRABALHO, 'design', 'fotos');
const ANTIGA = path.join(TRABALHO, 'design', '01-direcao', 'pagina', 'fotos');

const texto = fs.readFileSync(path.join(RAIZ, 'design', 'prototipos', 'amostra.js'), 'utf-8');
const A = JSON.parse(texto.slice(texto.indexOf('{'), texto.lastIndexOf('}') + 1));
// mesmo slug de comum.js e de pagina-autocontida.py
const slug = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

fs.mkdirSync(CACHE, { recursive: true });
const feitos = [];
const falhas = [];
for (const [nome, a] of Object.entries(A.autores)) {
  if (!a.foto) continue;
  const base = slug(nome);
  if (
    ['.jpg', '.png'].some(
      (x) => fs.existsSync(path.join(CACHE, base + x)) || fs.existsSync(path.join(ANTIGA, base + x))
    )
  )
    continue;
  const info = A.fotos[a.foto.arquivo] || {};
  const w = Math.min(LARGURA, info.largura || LARGURA);
  const url = A.commons + encodeURIComponent(a.foto.arquivo) + '?width=' + w;
  let ok = false;
  for (let tentativa = 1; tentativa <= 6 && !ok; tentativa++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (r.ok) {
      const tipo = r.headers.get('content-type') || '';
      const ext = tipo.includes('png') ? '.png' : '.jpg';
      fs.writeFileSync(path.join(CACHE, base + ext), Buffer.from(await r.arrayBuffer()));
      feitos.push(base + ext);
      ok = true;
    } else if (r.status === 429 || r.status >= 500) {
      await espera(Math.min(Number(r.headers.get('retry-after')) || 2 ** tentativa, 60) * 1000);
    } else {
      falhas.push(`${nome}: ${r.status}`);
      break;
    }
  }
  if (!ok && !falhas.some((f) => f.startsWith(nome))) falhas.push(`${nome}: sem resposta`);
  await espera(1500);
}
console.log(`${feitos.length} fotos baixadas para ${path.relative(RAIZ, CACHE)}`);
if (falhas.length) console.log('Não baixadas (ficam com iniciais):\n  ' + falhas.join('\n  '));
