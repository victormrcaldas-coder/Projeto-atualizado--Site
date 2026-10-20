// Teste de Autores & Obras, da página do autor e da página da obra (Etapa 6 do redesign).
// Inclui a regra dos 3 cliques do proprietário: do menu ao autor em até 3 cliques.
// Roda em 1440×900 e 390×844, sem rede. Uso: node ferramentas/testes/autores.mjs (sai com 1 se falhar)
import { chromium, servir, soLocal, esperarCuradoria } from '../lib/navegador.mjs';

const site = await servir();
const b = await chromium.launch();
const falhas = [];
let casos = 0;

for (const [w, h] of [
  [1440, 900],
  [390, 844]
]) {
  const movel = w < 768;
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: movel, hasTouch: movel });
  const p = await ctx.newPage();
  const erros = [];
  p.on('pageerror', (e) => erros.push(String(e)));
  await soLocal(p);
  await p.goto(site.url);
  await esperarCuradoria(p, 3000);

  const caso = async (nome, fn) => {
    casos++;
    try {
      const r = await fn();
      if (r !== true) falhas.push(`${w}px · ${nome}: ${JSON.stringify(r)}`);
    } catch (e) {
      falhas.push(`${w}px · ${nome}: ${e.message.split('\n')[0]}`);
    }
  };
  const fecharTudo = async () => {
    await p.keyboard.press('Escape');
    await p.evaluate(() => {
      if (typeof fecharBiografia === 'function') fecharBiografia();
      closePhotoModal();
      closeQuoteModal();
    });
  };
  // Autores & Obras limpo: sem busca, aba Pessoas
  const noAcervo = async () => {
    await fecharTudo();
    await p.evaluate(() => {
      aoState.q = '';
      aoState.vis = 'autores';
      navigateTo('home');
      scrollTo(0, 0);
    });
    const nav = movel ? '.bottom-nav [data-nav="autores"]' : '.main-nav [data-nav="autores"]';
    await p.locator(nav).first().click();
    await p.waitForTimeout(400);
  };
  const buscar = async (texto) => {
    await p.fill('#aoInput', texto);
    await p.waitForTimeout(500);
  };
  const clicar = async (loc) => {
    await loc.scrollIntoViewIfNeeded();
    await loc.click();
    await p.waitForTimeout(400);
  };
  const tela = () =>
    p.evaluate(() => ({ view: state.view, autor: panAtual, obra: obraAtual && obraAtual.t }));

  await caso('carrega sem exceção', async () => (erros.length ? erros : true));

  await caso('Autores & Obras abre direto na busca, sem a escolha prévia', async () => {
    await noAcervo();
    const r = await p.evaluate(() => ({
      view: state.view,
      campo: !!document.getElementById('aoInput')?.offsetParent,
      escolha: !!document.querySelector('#aoRoot .ao-big')
    }));
    return r.view === 'autores' && r.campo && !r.escolha ? true : r;
  });

  await caso('3 cliques: menu → nome no índice de A a Z → página da pessoa', async () => {
    await noAcervo(); // clique 1
    const nome = 'Machado de Assis';
    await clicar(p.locator('[data-letra="M"]')); // clique 2 (a letra; dá para ir direto ao nome rolando)
    await clicar(p.locator(`[data-indice="${nome}"]`)); // clique 3
    const r = await tela();
    return r.view === 'panorama' && r.autor === nome ? true : r;
  });

  await caso('o índice tem todas as pessoas do acervo', async () => {
    await noAcervo();
    return p.evaluate(() => {
      const n = document.querySelectorAll('#aoRoot [data-indice]').length;
      return n === AUTOR_INDEX.size || { n, total: AUTOR_INDEX.size };
    });
  });

  await caso('busca por nome → "Conhecer" abre a pessoa', async () => {
    await noAcervo();
    await buscar('Fernando Pessoa');
    await clicar(p.locator('#aoResults [data-pan="Fernando Pessoa"]').first());
    const r = await tela();
    return r.view === 'panorama' && r.autor === 'Fernando Pessoa' ? true : r;
  });

  await caso('busca com erro de digitação ainda acha a pessoa', async () => {
    await noAcervo();
    await buscar('Clarisse Lispector');
    return (
      (await p.locator('#aoResults [data-pan="Clarice Lispector"]').count()) > 0 ||
      'não achou Clarice Lispector'
    );
  });

  await caso('campo + aba Obras → "Conhecer a obra" abre a obra', async () => {
    await noAcervo();
    await clicar(p.locator('#aoResults [data-campo="Literatura"]'));
    await clicar(p.locator('[data-vis="obras"]'));
    await p.waitForTimeout(300);
    const titulo = await p.locator('#aoResults .obra-card .obra-title').first().textContent();
    await clicar(p.locator('#aoResults .obra-card [data-obra]').first());
    const r = await tela();
    return r.view === 'obra' && r.obra === titulo ? true : { ...r, esperado: titulo };
  });

  await caso('página do autor: retrato, nome, papel e dados', async () => {
    await fecharTudo();
    await p.evaluate(() => abrirPanorama('Victor Hugo'));
    await p.waitForTimeout(300);
    return p.evaluate(() => {
      const r = {
        nome: document.querySelector('#panRoot .pan-name')?.textContent,
        papel: !!document.querySelector('#panRoot .pan-role')?.textContent,
        dados: [...document.querySelectorAll('#panRoot .pan-date dt')].map((x) => x.textContent),
        retrato: !!document.getElementById('panPhoto')
      };
      return r.nome === 'Victor Hugo' && r.papel && r.dados.includes('Nascimento') && r.retrato ? true : r;
    });
  });

  await caso('página do autor: "Ler a história" abre a história dele', async () => {
    await fecharTudo();
    await p.evaluate(() => abrirPanorama('Victor Hugo'));
    await p.waitForTimeout(300);
    await clicar(p.locator('#panVerHistoria'));
    const r = await p.evaluate(() => ({
      aberta: document.getElementById('bioExpand')?.classList.contains('show'),
      nome: document.querySelector('#bioSheet .bio-nome')?.textContent
    }));
    return r.aberta && r.nome === 'Victor Hugo' ? true : r;
  });

  await caso('página do autor: o retrato abre a fotografia', async () => {
    await fecharTudo();
    await p.evaluate(() => abrirPanorama('Victor Hugo'));
    await p.waitForTimeout(300);
    await clicar(p.locator('#panPhoto'));
    return (
      (await p.evaluate(() => document.getElementById('photoExpand').classList.contains('show'))) ||
      'a fotografia não abriu'
    );
  });

  await caso('página do autor: "Ver obras" leva à seção de obras', async () => {
    await fecharTudo();
    await p.evaluate(() => {
      abrirPanorama('Victor Hugo');
      scrollTo(0, 0);
    });
    await p.waitForTimeout(300);
    await clicar(p.locator('#panRoot [data-jump="obras"]'));
    await p.waitForTimeout(700);
    const topo = await p.evaluate(() => document.getElementById('pan-obras').getBoundingClientRect().top);
    return (topo >= 0 && topo < 300) || { topo };
  });

  await caso('página do autor: filtro de obras por tipo', async () => {
    await fecharTudo();
    await p.evaluate(() => abrirPanorama('Victor Hugo'));
    await p.waitForTimeout(300);
    const todas = await p.locator('#pan-obras .obra-card').count();
    await clicar(p.locator('#pan-obras [data-catobra]:not([data-catobra="all"])').first());
    const filtradas = await p.locator('#pan-obras .obra-card').count();
    return (filtradas > 0 && filtradas < todas) || { todas, filtradas };
  });

  await caso('autor sem foto: placa com o nome, sem quebrar', async () => {
    await fecharTudo();
    await p.evaluate(() => abrirPanorama('Carlos Drummond de Andrade'));
    await p.waitForTimeout(1200);
    return p.evaluate(() => {
      const nome = document.querySelector('#panRoot .pan-name')?.textContent;
      const placa = document.querySelector('#panPhoto .avatar-fallback');
      return nome === 'Carlos Drummond de Andrade' && placa && placa.textContent.includes('Drummond')
        ? true
        : { nome, placa: placa && placa.textContent };
    });
  });

  await caso('página da obra: o nome do autor e "Conhecer" abrem o autor', async () => {
    await fecharTudo();
    const oid = await p.evaluate(() =>
      Object.keys(OBRA_POR_ID).find((k) => OBRA_POR_ID[k].t === 'Os Miseráveis')
    );
    await p.evaluate((o) => abrirObra(o), oid);
    await p.waitForTimeout(300);
    const passagens = await p.locator('#obraRoot .quote-card').count();
    await clicar(p.locator('#obraRoot .obra-autor-link'));
    const r1 = await tela();
    await p.evaluate((o) => abrirObra(o), oid);
    await p.waitForTimeout(300);
    await clicar(p.locator('#obraAutor'));
    const r2 = await tela();
    return passagens > 0 && r1.autor === 'Victor Hugo' && r2.view === 'panorama' && r2.autor === 'Victor Hugo'
      ? true
      : { passagens, r1, r2 };
  });

  await caso('"Voltar" na obra volta para onde se estava', async () => {
    await noAcervo();
    await clicar(p.locator('[data-vis="obras"]'));
    await buscar('Os Miseráveis');
    await clicar(p.locator('#aoResults .obra-card [data-obra]').first());
    await clicar(p.locator('#obraBack'));
    return (await tela()).view === 'autores' || (await tela());
  });

  for (const [nome, js] of [
    ['autores', () => navigateTo('autores')],
    ['panorama', () => abrirPanorama('Victor Hugo')],
    ['obra', () => abrirObra(Object.keys(OBRA_POR_ID)[0])]
  ])
    await caso(`${nome} sem rolagem lateral`, async () => {
      await fecharTudo();
      await p.evaluate(js);
      await p.waitForTimeout(300);
      return p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1) || 'rola para o lado';
    });

  await caso('sem exceção depois de tudo', async () => (erros.length ? erros : true));
  await ctx.close();
}
await b.close();
site.fechar();
console.log(`autores: ${casos - falhas.length} de ${casos} casos passaram`);
if (falhas.length) {
  console.log(falhas.join('\n'));
  process.exitCode = 1;
}
