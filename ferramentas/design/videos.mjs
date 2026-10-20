// Grava os vídeos dos portões do redesign: abre o site real, segue um roteiro e salva em mp4.
// Os roteiros ficam em ferramentas/design/roteiros/<nome>.mjs e exportam `default async (passo) => {…}`.
// Uso: node ferramentas/design/videos.mjs <roteiro> [--larguras 390,1440] [--tema claro|escuro] [--consulta "?portao"]
//      [--reduzido]   (grava com movimento reduzido)
//      [--pagina design/movimento.html]   (grava outra página do repositório no lugar do site)
// Saída: .trabalho/design/videos/<roteiro>-<largura>-<tema>[-reduzido].mp4
// As fotos do Commons vêm do cache em .trabalho/design/fotos-site (as que faltam são baixadas, uma por vez).
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execFileSync } from 'child_process';
import { chromium, servir, TRABALHO } from '../lib/navegador.mjs';

const args = process.argv.slice(2);
const opcao = (n, padrao) => {
  const i = args.indexOf('--' + n);
  return i >= 0 ? args[i + 1] : padrao;
};
const roteiro = args[0];
if (!roteiro || roteiro.startsWith('--')) {
  console.error(
    'Uso: node ferramentas/design/videos.mjs <roteiro> [--larguras 390,1440] [--tema claro|escuro]'
  );
  process.exit(1);
}
const { default: seguir } = await import(`./roteiros/${roteiro}.mjs`);
const larguras = opcao('larguras', '390,1440').split(',').map(Number);
const tema = opcao('tema', 'claro');
const consulta = opcao('consulta', '');
const reduzido = args.includes('--reduzido');
const pagina = opcao('pagina', 'index.html');
const SAIDA = path.join(TRABALHO, 'design/videos');
const CACHE = path.join(TRABALHO, 'design/fotos-site');
fs.mkdirSync(SAIDA, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

// ---------- fotos: cache em disco, um pedido por vez ao Commons ----------
const UA = 'MeMotiva-redesign/1.0 (videos; https://github.com/victormrcaldas-coder/Projeto-atualizado--Site)';
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const porArquivo = new Map(); // mesmo arquivo do Commons noutra largura
for (const j of fs.readdirSync(CACHE).filter((f) => f.endsWith('.json'))) {
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(CACHE, j)));
    const m = meta.url && meta.url.match(/Special:FilePath\/([^?]+)/);
    const arq = path.join(CACHE, j.slice(0, -5));
    if (m && fs.statSync(arq).size) porArquivo.set(m[1], { tipo: meta.tipo, arq });
  } catch (e) {}
}
let fila = Promise.resolve();
async function foto(url) {
  const arq = path.join(CACHE, crypto.createHash('sha1').update(url).digest('hex'));
  if (fs.existsSync(arq + '.json')) {
    const meta = JSON.parse(fs.readFileSync(arq + '.json', 'utf8'));
    return meta.tipo ? { tipo: meta.tipo, corpo: fs.readFileSync(arq) } : null;
  }
  const m = url.match(/Special:FilePath\/([^?]+)/);
  if (m && porArquivo.has(m[1])) {
    const x = porArquivo.get(m[1]);
    return { tipo: x.tipo, corpo: fs.readFileSync(x.arq) };
  }
  const r = await (fila = fila.then(async () => {
    for (let t = 1; t <= 4; t++) {
      try {
        const resp = await fetch(url, { headers: { 'User-Agent': UA } });
        if (resp.ok)
          return { tipo: resp.headers.get('content-type'), corpo: Buffer.from(await resp.arrayBuffer()) };
        if (resp.status !== 429 && resp.status < 500) return { erro: resp.status };
        await espera(Math.min(Number(resp.headers.get('retry-after')) || 2 ** t, 15) * 1000);
      } catch (e) {
        await espera(800 * t);
      }
    }
    return { erro: 'rede' };
  }));
  if (r.erro) {
    if (r.erro === 404) fs.writeFileSync(arq + '.json', '{}');
    return null;
  }
  fs.writeFileSync(arq, r.corpo);
  fs.writeFileSync(arq + '.json', JSON.stringify({ tipo: r.tipo, url }));
  return r;
}

// ---------- gravação ----------
const site = await servir();
const navegador = await chromium.launch();
for (const largura of larguras) {
  const movel = largura < 768;
  const altura = movel ? 844 : 900;
  const pasta = fs.mkdtempSync(path.join(SAIDA, '.bruto-'));
  const ctx = await navegador.newContext({
    viewport: { width: largura, height: altura },
    isMobile: movel,
    hasTouch: movel,
    colorScheme: tema === 'escuro' ? 'dark' : 'light',
    reducedMotion: reduzido ? 'reduce' : 'no-preference',
    recordVideo: { dir: pasta, size: { width: largura, height: altura } }
  });
  const p = await ctx.newPage();
  const erros = [];
  p.on('pageerror', (e) => erros.push(String(e)));
  const base = site.url.replace(/index\.html$/, '');
  await p.route('**/*', async (rota) => {
    const u = rota.request().url();
    if (u.startsWith(base)) return rota.continue();
    if (/upload\.wikimedia\.org|commons\.wikimedia\.org\/wiki\/Special:FilePath/.test(u)) {
      const r = await foto(u);
      if (r) return rota.fulfill({ status: 200, contentType: r.tipo, body: r.corpo });
    }
    return rota.abort();
  });
  await p.addInitScript(
    (t) => {
      try {
        localStorage.setItem('memotiva:theme', JSON.stringify(t));
      } catch (e) {}
    },
    tema === 'escuro' ? 'dark' : 'light'
  );
  await p.goto(site.url.replace(/index\.html$/, pagina) + consulta);
  if (pagina === 'index.html')
    await p.waitForFunction(() => typeof QUOTES !== 'undefined' && QUOTES.length > 1000, null, {
      timeout: 120000
    });
  await p.waitForTimeout(2500);

  // ajudantes do roteiro
  const pausa = (ms) => p.waitForTimeout(ms);
  // legenda em cima da tela, para quem assiste saber o que está acontecendo
  const legenda = (t) =>
    p.evaluate((t) => {
      let el = document.getElementById('__legenda');
      if (!el) {
        el = document.createElement('div');
        el.id = '__legenda';
        el.style.cssText =
          'position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:99999;background:#111;color:#fff;font:600 14px/1.3 system-ui;padding:8px 14px;border-radius:8px;max-width:92vw;text-align:center;pointer-events:none';
        document.body.appendChild(el);
      }
      el.textContent = t;
      el.style.display = t ? '' : 'none';
    }, t);
  // o vídeo não mostra o ponteiro do sistema: um ponto desenhado segue o mouse (no celular, o dedo)
  await p.evaluate(() => {
    const c = document.createElement('div');
    c.id = '__ponteiro';
    c.style.cssText =
      'position:fixed;left:0;top:0;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:rgba(20,20,20,.35);border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.4);z-index:99998;pointer-events:none;transition:transform .12s';
    document.body.appendChild(c);
    addEventListener('pointermove', (e) => (c.style.translate = `${e.clientX}px ${e.clientY}px`), true);
    addEventListener('pointerdown', () => (c.style.transform = 'scale(.7)'), true);
    addEventListener('pointerup', () => (c.style.transform = ''), true);
  });
  let mouse = { x: largura / 2, y: altura / 2 };
  const mover = async (x, y, passos = 18) => {
    await p.mouse.move(x, y, { steps: passos });
    mouse = { x, y };
  };
  const sobre = async (seletor, passos = 18) => {
    const el = p.locator(seletor).first();
    await el.scrollIntoViewIfNeeded();
    const b = await el.boundingBox();
    await mover(b.x + b.width / 2, b.y + b.height / 2, passos);
    return el;
  };
  const clicar = async (seletor, texto) => {
    if (texto) await legenda(texto);
    const el = await sobre(seletor);
    await pausa(350);
    if (movel) await el.tap();
    else await el.click();
  };
  const rolar = async (ate, ms = 1600) => {
    await p.evaluate(
      ([ate, ms]) =>
        new Promise((ok) => {
          const de = scrollY;
          const alvo =
            typeof ate === 'number'
              ? ate
              : document.querySelector(ate).getBoundingClientRect().top + scrollY - 80;
          const t0 = performance.now();
          const passo = (t) => {
            const k = Math.min(1, (t - t0) / ms);
            scrollTo(0, de + (alvo - de) * (1 - Math.pow(1 - k, 3)));
            k < 1 ? requestAnimationFrame(passo) : ok();
          };
          requestAnimationFrame(passo);
        }),
      [ate, ms]
    );
  };
  await seguir({
    p,
    largura,
    altura,
    movel,
    tema,
    pausa,
    legenda,
    mover,
    sobre,
    clicar,
    rolar,
    js: (f, a) => p.evaluate(f, a)
  });
  await pausa(600);
  const bruto = await p.video().path();
  await ctx.close();
  const nome = `${roteiro}-${largura}-${tema}${reduzido ? '-reduzido' : ''}`;
  const mp4 = path.join(SAIDA, nome + '.mp4');
  execFileSync('ffmpeg', [
    '-y',
    '-loglevel',
    'error',
    '-i',
    bruto,
    '-c:v',
    'libx264',
    '-crf',
    '23',
    '-preset',
    'veryfast',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    mp4
  ]);
  fs.rmSync(pasta, { recursive: true, force: true });
  console.log(`${mp4}${erros.length ? '  (erros na página: ' + erros.join(' | ') + ')' : ''}`);
}
await navegador.close();
site.fechar();
