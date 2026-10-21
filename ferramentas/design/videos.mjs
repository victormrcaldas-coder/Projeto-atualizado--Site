// Grava os vídeos dos portões do redesign: abre o site real, segue um roteiro e salva em mp4.
// Os roteiros ficam em ferramentas/design/roteiros/<nome>.mjs e exportam `default async (passo) => {…}`.
// Uso: node ferramentas/design/videos.mjs <roteiro> [--larguras 390,1440] [--tema claro|escuro] [--consulta "?portao"]
//      [--reduzido]   (grava com movimento reduzido)
//      [--pagina design/movimento.html]   (grava outra página do repositório no lugar do site)
//      [--folha]   (para cada marca do roteiro, uma folha de quadros a cada 50 ms, para o Crítico. A marca
//                  acende um quadradinho de cor no canto da tela, e a folha começa no quadro em que ele aparece:
//                  o vídeo do Playwright atrasa em relação ao relógio, e só assim a folha pega a troca inteira)
// Saída: .trabalho/design/videos/<roteiro>-<largura>-<tema>[-reduzido].mp4
//        e, com --folha, .trabalho/design/videos/folhas/<roteiro>-<largura>-<tema>-<n>-<marca>.jpg
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
const folha = args.includes('--folha');
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
  const comeco = Date.now();
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

  const marcas = [];
  const CORES = ['#ff00ff', '#00ffff'];
  const marca = async (nome) => {
    if (!folha) return;
    const cor = CORES[marcas.length % 2];
    marcas.push({ nome, cor, agora: Date.now() });
    await p.evaluate((c) => {
      let m = document.getElementById('__marca');
      if (!m) {
        m = document.createElement('div');
        m.id = '__marca';
        m.style.cssText =
          'position:fixed;left:0;bottom:0;width:12px;height:12px;z-index:2147483647;pointer-events:none';
        document.documentElement.appendChild(m);
      }
      m.style.background = c;
    }, cor);
  };
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
  // o ponteiro vai até o elemento e clica no ponto, como uma pessoa. Os métodos do Playwright rolam
  // a página "até o elemento" antes, e com o cabeçalho preso (sticky) isso rolava a página inteira
  const sobre = async (seletor, passos = 18) => {
    const el = p.locator(seletor).first();
    let b = await el.boundingBox();
    const vp = p.viewportSize();
    if (!b || b.y < 0 || b.y + b.height > vp.height || b.x < 0 || b.x + b.width > vp.width) {
      await el.evaluate((e) => e.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' }));
      await pausa(150);
      b = await el.boundingBox();
    }
    await mover(b.x + b.width / 2, b.y + b.height / 2, passos);
    return { el, x: b.x + b.width / 2, y: b.y + b.height / 2 };
  };
  // com nomeDaMarca, a marca da folha acende logo antes do clique
  const clicar = async (seletor, texto, nomeDaMarca) => {
    if (texto) await legenda(texto);
    const { x, y } = await sobre(seletor);
    await pausa(350);
    if (nomeDaMarca) await marca(nomeDaMarca);
    if (movel) await p.touchscreen.tap(x, y);
    else {
      // como um clique de verdade: 90 ms entre apertar e soltar
      await p.mouse.down();
      await p.waitForTimeout(90);
      await p.mouse.up();
    }
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
  // o vídeo começa quando o roteiro começa: a carga da página fica de fora
  const inicio = (Date.now() - comeco) / 1000;

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
    marca,
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
    '-ss',
    Math.max(0, inicio - 0.2).toFixed(2),
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
  // folhas de quadros: 16 quadros a cada 50 ms a partir do quadro em que a marca acende
  if (folha && marcas.length) {
    const dir = path.join(SAIDA, 'folhas');
    fs.mkdirSync(dir, { recursive: true });
    // a cor do canto em cada quadro (25 por segundo), lida de uma vez
    const canto = execFileSync(
      'ffmpeg',
      [
        '-loglevel',
        'error',
        '-i',
        mp4,
        '-vf',
        'crop=6:6:2:ih-8,scale=1:1',
        '-f',
        'rawvideo',
        '-pix_fmt',
        'rgb24',
        '-'
      ],
      { maxBuffer: 64 * 1024 * 1024 }
    );
    const quadros = canto.length / 3;
    const perto = (i, hex) => {
      const [r, g, b] = [1, 3, 5].map((k) => parseInt(hex.slice(k, k + 2), 16));
      return (
        Math.abs(canto[i * 3] - r) + Math.abs(canto[i * 3 + 1] - g) + Math.abs(canto[i * 3 + 2] - b) < 90
      );
    };
    let desde = 0;
    marcas.forEach((m, i) => {
      // o primeiro quadro, depois da marca anterior, em que o canto tem a cor desta marca
      let q = desde;
      while (q < quadros && !perto(q, m.cor)) q++;
      if (q >= quadros) return console.warn(`marca não achada no vídeo: ${m.nome}`);
      desde = q + 1;
      const slug = m.nome
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();
      const colunas = largura < 768 ? 8 : 4;
      execFileSync('ffmpeg', [
        '-y',
        '-loglevel',
        'error',
        '-ss',
        (q / 25).toFixed(2),
        '-i',
        mp4,
        '-frames:v',
        '1',
        '-vf',
        `fps=20,scale=${largura < 768 ? 260 : 480}:-2,tile=${colunas}x${16 / colunas}:padding=4:color=white`,
        path.join(dir, `${nome}-${String(i + 1).padStart(2, '0')}-${slug}.jpg`)
      ]);
    });
  }
  console.log(`${mp4}${erros.length ? '  (erros na página: ' + erros.join(' | ') + ')' : ''}`);
}
await navegador.close();
site.fechar();
