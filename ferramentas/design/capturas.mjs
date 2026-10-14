// Prints das telas do site para os portões do redesign e para a revisão visual.
// Para cada largura × tema × tela salva a primeira dobra e a página inteira (com altura limitada),
// mede a rolagem horizontal e monta uma folha de contato (HTML + uma imagem por largura e tema).
// A rede externa NÃO é bloqueada, para as fontes aparecerem como o leitor vê. Se o ambiente
// bloquear Wikimedia/Wikipédia, as fotos caem no avatar de iniciais (o relatório registra os hosts).
//
// Uso: node ferramentas/design/capturas.mjs [--etapa 00-diagnostico] [--larguras 390,1440]
//                                            [--temas claro,escuro] [--telas home,explorar,…]
//   -> .trabalho/design/<etapa>/<largura>-<tema>-<tela>-dobra.jpg e -inteira.jpg,
//      relatorio.json, folha.html e folha-<largura>-<tema>.png
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { chromium, servir, esperarCuradoria, TRABALHO } from '../lib/navegador.mjs';

const arg = (n, padrao) => {
  const i = process.argv.indexOf(n);
  return i > -1 ? process.argv[i + 1] : padrao;
};
const lista = (s) =>
  s
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);

// Cada tela: como abrir e, se for sobreposição (modal), só a primeira dobra faz sentido.
// `abrir` roda no navegador e recebe as escolhas feitas em `escolher()`.
const TELAS = {
  home: { abrir: () => navigateTo('home') },
  explorar: { abrir: () => navigateTo('explorar') },
  descubra: { abrir: () => navigateTo('descubra') },
  historias: { abrir: () => navigateTo('historias') },
  comunidade: { abrir: () => navigateTo('comunidade') },
  perfil: { abrir: () => navigateTo('perfil') },
  autores: { abrir: () => navigateTo('autores') },
  'panorama-com-foto': { abrir: (e) => abrirPanorama(e.autorComFoto) },
  'panorama-sem-foto': { abrir: (e) => abrirPanorama(e.autorSemFoto) },
  obra: { abrir: (e) => abrirObra(e.obra) },
  escrever: { abrir: () => navigateTo('escrever') },
  'modal-frase': {
    sobreposicao: true,
    abrir: (e) => {
      navigateTo('explorar');
      openQuoteModal(e.frase);
    },
    fechar: () => closeQuoteModal()
  },
  'modal-foto': {
    sobreposicao: true,
    abrir: (e) => openPhotoModal(e.autorComFoto),
    fechar: () => closePhotoModal()
  },
  'modal-entrar': {
    sobreposicao: true,
    abrir: () => openAuthModal(),
    fechar: () => closeAuthModal()
  },
  // com sessão aberta (usuário de teste criado só na memória desta captura)
  'perfil-logado': { logado: true, abrir: () => navigateTo('perfil') },
  'escrever-logado': { logado: true, abrir: () => navigateTo('escrever') }
};

const etapa = arg('--etapa', 'atual');
const larguras = lista(arg('--larguras', '390,1440')).map(Number);
const temas = lista(arg('--temas', 'claro,escuro'));
const telas = lista(arg('--telas', Object.keys(TELAS).join(',')));
const desconhecidas = telas.filter((t) => !TELAS[t]);
if (desconhecidas.length) throw new Error('Telas desconhecidas: ' + desconhecidas.join(', '));
const TEMA = { claro: 'light', escuro: 'dark' };
const ALTURA = (w) => (w < 768 ? 844 : 900);
const MAX_INTEIRA = (w) => (w < 768 ? 7000 : 5000); // altura máxima do print de página inteira (px CSS)

const DIR = path.join(TRABALHO, 'design', etapa);
fs.mkdirSync(DIR, { recursive: true });

/* Escolhe, no estado carregado, o que mostrar nas telas de autor, obra e frase. */
function escolher() {
  const temPerfil = (n) => typeof PERFIS_PROFUNDOS !== 'undefined' && PERFIS_PROFUNDOS[n];
  const frasesDe = (n) => (AUTOR_INDEX.get(n) || { frases: [] }).frases.length;
  const nomes = [...AUTOR_INDEX.keys()];
  const ordenar = (a, b) => frasesDe(b) - frasesDe(a);
  const comFoto = nomes.filter((n) => photoInfo(n) && temPerfil(n)).sort(ordenar);
  const semFoto = nomes.filter((n) => !photoInfo(n) && temPerfil(n)).sort(ordenar);
  const autorComFoto = comFoto.includes('Machado de Assis') ? 'Machado de Assis' : comFoto[0];
  // sem foto: um autor clássico com várias obras (Krishna e Jesus Cristo vêm antes, mas são figuras de tradição)
  const autorSemFoto = ['David Hume', 'Alexis de Tocqueville'].find((n) => semFoto.includes(n)) || semFoto[0];
  const obra = Object.keys(OBRA_POR_ID).find((oid) => {
    const o = OBRA_POR_ID[oid];
    return o.autor === autorComFoto && OBRA_PAGINA[o.autor + '||' + o.t];
  });
  const frase = QUOTES.findIndex(
    (q) => q.author === autorComFoto && q.st === 'A' && q.src && q.text.length > 60 && q.text.length < 220
  );
  return {
    autorComFoto,
    autorSemFoto,
    obra: obra || Object.keys(OBRA_POR_ID)[0],
    frase: frase > -1 ? frase : 0,
    fotosCuradas: Object.keys(PHOTOS).length,
    autores: nomes.length
  };
}

/* Mostra tudo o que a rolagem revelaria, para o print de página inteira sair completo. */
function revelarTudo() {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'));
}

async function entrar(page) {
  await page.evaluate(() => openAuthModal());
  await page.evaluate(() => document.getElementById('switchToRegister')?.click());
  await page.fill('#regUsername', 'leitora_teste');
  await page.fill('#regEmail', 'leitora_teste@example.com');
  await page.fill('#regPassword', 'senha123');
  await page.fill('#regPassword2', 'senha123');
  await page.evaluate(() => document.getElementById('registerForm').requestSubmit());
  await page.waitForFunction(() => !!state.currentUser, null, { timeout: 15000 });
  await page.evaluate(() => closeAuthModal());
}

const site = await servir();
const relatorio = { etapa, quando: new Date().toISOString(), larguras, temas, telas, capturas: [] };
const navegador = await chromium.launch({ headless: true });
let escolhas = null;

for (const w of larguras) {
  const movel = w < 768;
  const ctx = await navegador.newContext({
    viewport: { width: w, height: ALTURA(w) },
    isMobile: movel,
    hasTouch: movel,
    deviceScaleFactor: movel ? 2 : 1,
    reducedMotion: 'reduce' // prints estáveis: sem transições no meio da captura
  });
  const page = await ctx.newPage();
  const erros = [];
  const bloqueados = new Set();
  page.on('pageerror', (e) => erros.push(String(e.message).slice(0, 200)));
  page.on('requestfailed', (r) => {
    const u = r.url();
    if (!u.startsWith('http://127.0.0.1')) bloqueados.add(new URL(u).host);
  });
  await page.goto(site.url, { waitUntil: 'load' });
  await esperarCuradoria(page, 4000);
  await page.evaluate(() => document.fonts.ready);
  escolhas = escolhas || (await page.evaluate(escolher));
  let logado = false;
  // primeiro todas as telas de visitante (nos dois temas), depois as que pedem sessão aberta
  const ordem = [false, true].flatMap((comSessao) =>
    temas.flatMap((tema) => telas.filter((t) => !!TELAS[t].logado === comSessao).map((tela) => [tema, tela]))
  );

  for (const [tema, tela] of ordem) {
    const def = TELAS[tela];
    if (def.logado && !logado) {
      await entrar(page);
      await page.waitForTimeout(3500); // o aviso de boas-vindas some antes do print
      logado = true;
    }
    await page.evaluate((m) => applyTheme(m, false), TEMA[tema]);
    await page.evaluate(`(${def.abrir.toString()})(${JSON.stringify(escolhas)})`);
    await page.waitForTimeout(900);
    await page.evaluate(revelarTudo);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);
    const base = `${w}-${tema}-${tela}`;
    const info = await page.evaluate(() => ({
      tela: document.querySelector('.view:not(.hidden)')?.dataset.view || null,
      temaAplicado: document.documentElement.getAttribute('data-theme'),
      alturaPagina: document.documentElement.scrollHeight,
      overflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
      larguraRolagem: document.documentElement.scrollWidth
    }));
    await page.screenshot({ path: path.join(DIR, base + '-dobra.jpg'), type: 'jpeg', quality: 78 });
    if (!def.sobreposicao) {
      const altura = Math.min(info.alturaPagina, MAX_INTEIRA(w));
      // na página inteira, a barra inferior e o aviso fixos apareceriam no meio da imagem
      await page.evaluate(() => {
        const s = document.createElement('style');
        s.id = 'captura-sem-fixos';
        s.textContent = '.bottom-nav,#toast{visibility:hidden !important}';
        document.head.appendChild(s);
      });
      await page.screenshot({
        path: path.join(DIR, base + '-inteira.jpg'),
        type: 'jpeg',
        quality: 70,
        fullPage: true,
        scale: 'css',
        clip: { x: 0, y: 0, width: w, height: altura }
      });
      await page.evaluate(() => document.getElementById('captura-sem-fixos')?.remove());
      info.cortada = info.alturaPagina > altura;
    }
    if (def.fechar) await page.evaluate(`(${def.fechar.toString()})()`);
    await page.evaluate(() => window.scrollTo(0, 0));
    relatorio.capturas.push({
      largura: w,
      tema,
      nome: tela,
      base,
      sobreposicao: !!def.sobreposicao,
      ...info
    });
    process.stdout.write('.');
  }
  relatorio['erros_' + w] = erros;
  relatorio['hostsBloqueados_' + w] = [...bloqueados];
  await ctx.close();
}
relatorio.escolhas = escolhas;
fs.writeFileSync(path.join(DIR, 'relatorio.json'), JSON.stringify(relatorio, null, 1));

/* ---------- folha de contato ---------- */
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
function folhaHTML(filtro, titulo) {
  const itens = relatorio.capturas.filter(filtro);
  return `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>${esc(titulo)}</title>
<style>
  body{margin:0;padding:24px;background:#eeeae2;color:#2b1811;font:14px/1.4 system-ui,sans-serif}
  h1{font-size:18px;margin:0 0 16px}
  .g{display:grid;grid-template-columns:repeat(auto-fill,minmax(${itens[0]?.largura < 768 ? 200 : 360}px,1fr));gap:20px}
  figure{margin:0} img{width:100%;display:block;border:1px solid #0002;background:#fff}
  figcaption{margin-top:6px;font-weight:600} .alerta{color:#a9501a}
</style>
<h1>${esc(titulo)}</h1><div class="g">
${itens
  .map(
    (
      c
    ) => `<figure><a href="${c.base}-${c.sobreposicao ? 'dobra' : 'inteira'}.jpg"><img src="${c.base}-dobra.jpg" alt="${esc(c.nome)}"></a>
<figcaption>${esc(c.nome)}${c.overflowX ? ' <span class="alerta">· rolagem horizontal</span>' : ''}${c.tela && !c.sobreposicao && !c.nome.startsWith(c.tela) ? ' <span class="alerta">· abriu ' + esc(c.tela) + '</span>' : ''}</figcaption></figure>`
  )
  .join('\n')}
</div></html>`;
}
fs.writeFileSync(
  path.join(DIR, 'folha.html'),
  folhaHTML(() => true, `MeMotiva · capturas · ${etapa}`)
);
const pg = await navegador.newPage({ viewport: { width: 1600, height: 900 } });
for (const w of larguras) {
  for (const tema of temas) {
    const nome = `folha-${w}-${tema}`;
    fs.writeFileSync(
      path.join(DIR, nome + '.html'),
      folhaHTML((c) => c.largura === w && c.tema === tema, `MeMotiva · ${w}px · tema ${tema} · ${etapa}`)
    );
    await pg.goto(pathToFileURL(path.join(DIR, nome + '.html')).href, { waitUntil: 'load' });
    await pg.screenshot({ path: path.join(DIR, nome + '.png'), fullPage: true });
  }
}
await navegador.close();
site.fechar();

const comOverflow = relatorio.capturas.filter((c) => c.overflowX).map((c) => c.base);
const errosTodos = larguras.flatMap((w) => relatorio['erros_' + w]);
console.log(`\n${relatorio.capturas.length} capturas em ${path.relative(process.cwd(), DIR)}`);
console.log('rolagem horizontal: ' + (comOverflow.join(', ') || 'nenhuma'));
console.log('exceções: ' + (errosTodos.length ? errosTodos.join(' | ') : 'nenhuma'));
console.log(
  'hosts bloqueados: ' +
    ([...new Set(larguras.flatMap((w) => relatorio['hostsBloqueados_' + w]))].join(', ') || 'nenhum')
);
