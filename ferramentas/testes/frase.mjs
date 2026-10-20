// Teste do Explorar e da frase ampliada (Etapa 5 do redesign): busca, temas, filtros, frase sorteada,
// cartão, janela da frase (Esc, foco, Tab, links) e janela da fotografia.
// Roda em 1440×900 e 390×844, sem rede. Uso: node ferramentas/testes/frase.mjs (sai com 1 se falhar)
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
  // abre o Explorar limpo: todos os temas, sem busca, sem filtro e sem janela aberta
  const noExplorar = async () => {
    await p.keyboard.press('Escape');
    await p.evaluate(() => {
      if (typeof fecharBiografia === 'function') fecharBiografia();
      closePhotoModal();
      closeQuoteModal();
      closeProfilePanel();
      Object.assign(state.exploreFilter, { cat: 'all', q: '', profile: 'all' });
      navigateTo('explorar');
      scrollTo(0, 0);
    });
    await p.waitForTimeout(250);
  };
  const buscar = async (texto) => {
    await p.fill('#authorSearch', texto);
    await p.waitForTimeout(450);
  };
  const contagem = () => p.locator('#resultsCount').textContent();
  const primeiroCartao = () => p.locator('#exploreGrid .quote-card').first();

  await caso('carrega sem exceção', async () => (erros.length ? erros : true));

  await caso('cartão: sem rotação nem fita, com a obra e sem travessão no nome', async () => {
    await noExplorar();
    return p.evaluate(() => {
      const c = [...document.querySelectorAll('#exploreGrid .quote-card')].find((x) =>
        x.querySelector('.quote-card-src')
      );
      if (!c) return 'nenhum cartão com a obra';
      const r = {
        transform: getComputedStyle(c).transform,
        fita: !!c.querySelector('.quote-card-tape'),
        nome: c.querySelector('.author-name').textContent,
        letra: getComputedStyle(c.querySelector('.author-name')).fontFamily
      };
      return r.transform === 'none' && !r.fita && !r.nome.startsWith('—') && !/caveat/i.test(r.letra)
        ? true
        : r;
    });
  });

  await caso('contagem com ponto de milhar', async () => {
    await noExplorar();
    const t = await contagem();
    return /^\d{1,3}(\.\d{3})+ frases$/.test(t.trim()) || t;
  });

  await caso('busca por autor mostra só as frases dele, com o número de resultados', async () => {
    await noExplorar();
    await buscar('Clarice');
    const r = await p.evaluate(() => ({
      texto: document.getElementById('resultsCount').textContent,
      autores: [
        ...new Set([...document.querySelectorAll('#exploreGrid .author-name')].map((x) => x.textContent))
      ]
    }));
    return r.texto.includes('“Clarice”') && r.autores.length === 1 && r.autores[0] === 'Clarice Lispector'
      ? true
      : r;
  });

  await caso('busca tolera erro de digitação', async () => {
    await noExplorar();
    await buscar('Clarisse Lispector');
    return (await p.locator('#exploreGrid .quote-card').count()) > 0 || (await contagem());
  });

  await caso('busca sem resultado mostra o estado vazio, e limpar volta tudo', async () => {
    await noExplorar();
    await buscar('qxzwvk');
    const vazio = await p.locator('#exploreEmpty').isVisible();
    await p.locator('#clearSearch').click();
    await p.waitForTimeout(400);
    const n = await p.locator('#exploreGrid .quote-card').count();
    return vazio && n > 0 ? true : { vazio, n };
  });

  await caso('tema filtra os cartões', async () => {
    await noExplorar();
    const chip = p.locator('#categoryChips .chip:not(.active)').first();
    await chip.scrollIntoViewIfNeeded();
    await chip.click();
    await p.waitForTimeout(400);
    // uma frase pode pertencer a mais de um tema; o cartão mostra o principal
    const r = await p.evaluate(() => {
      const cat = state.exploreFilter.cat;
      const idx = [...document.querySelectorAll('#exploreGrid .quote-card')].map((x) => +x.dataset.quoteIdx);
      return { cat, n: idx.length, fora: idx.filter((i) => !quoteMatchesCat(QUOTES[i], cat)).length };
    });
    return r.cat !== 'all' && r.n > 0 && r.fora === 0 ? true : r;
  });

  await caso('filtro de atuação abre, escolhe e reduz a lista', async () => {
    await noExplorar();
    const antes = await contagem();
    await p.locator('#profileFilterBtn').click();
    await p.waitForTimeout(250);
    const aberto = await p.locator('#profilePanel').evaluate((x) => x.classList.contains('open'));
    await p.locator('#profileOptions [data-profile]:not([data-profile="all"])').first().click();
    await p.waitForTimeout(400);
    const depois = await contagem();
    const r = { aberto, antes, depois, perfil: await p.evaluate(() => state.exploreFilter.profile) };
    await p.evaluate(() => {
      state.exploreFilter.profile = 'all';
      renderProfileFilter();
      renderExploreResults();
    });
    return aberto &&
      r.perfil !== 'all' &&
      parseInt(depois.replace(/\D/g, '')) < parseInt(antes.replace(/\D/g, ''))
      ? true
      : r;
  });

  await caso('"Frase aleatória" mostra uma frase sorteada, e o X a fecha', async () => {
    await noExplorar();
    await p.locator('#randomFieldBtn').click();
    await p.waitForTimeout(300);
    const tem = await p.locator('#randomSlot .quote-card').count();
    await p.locator('#randomSlotClose').click();
    await p.waitForTimeout(200);
    const escondida = await p.locator('#randomSlot').evaluate((x) => x.classList.contains('hidden'));
    return tem === 1 && escondida ? true : { tem, escondida };
  });

  await caso('clicar no cartão abre a frase certa', async () => {
    await noExplorar();
    const texto = await primeiroCartao().locator('.quote-card-text').textContent();
    await primeiroCartao().locator('.quote-card-text').click();
    await p.waitForTimeout(400);
    const r = await p.evaluate(() => ({
      aberta: document.getElementById('quoteExpand').classList.contains('show'),
      texto: document.querySelector('#quoteExpandBox .expand-text')?.textContent
    }));
    return r.aberta && r.texto === texto ? true : { ...r, esperado: texto };
  });

  await caso('Esc fecha a frase e o foco volta ao cartão', async () => {
    await noExplorar();
    await primeiroCartao().focus();
    await p.keyboard.press('Enter');
    await p.waitForTimeout(400);
    const aberta = await p.evaluate(() => document.getElementById('quoteExpand').classList.contains('show'));
    await p.keyboard.press('Escape');
    await p.waitForTimeout(200);
    const r = await p.evaluate(() => ({
      fechada: !document.getElementById('quoteExpand').classList.contains('show'),
      foco: document.activeElement?.classList.contains('quote-card')
    }));
    return aberta && r.fechada && r.foco ? true : { aberta, ...r };
  });

  await caso('Tab não sai da janela da frase', async () => {
    await noExplorar();
    await p.evaluate(() => openQuoteModal(QUOTES.findIndex((q) => q.author === 'Blaise Pascal')));
    await p.waitForTimeout(300);
    for (let i = 0; i < 12; i++) await p.keyboard.press('Tab');
    const dentro = await p.evaluate(() =>
      document.getElementById('quoteExpand').contains(document.activeElement)
    );
    return dentro || 'o foco saiu da janela';
  });

  await caso('janela da frase: nome, papel e etiqueta Obra · Original', async () => {
    await noExplorar();
    await p.evaluate(() => openQuoteModal(QUOTES.findIndex((q) => q.author === 'Blaise Pascal' && q.orig)));
    await p.waitForTimeout(300);
    return p.evaluate(() => {
      const box = document.getElementById('quoteExpandBox');
      const r = {
        nome: box.querySelector('.expand-author')?.textContent,
        papel: !!box.querySelector('.expand-papel')?.textContent,
        rotulos: [...box.querySelectorAll('.quote-label dt')].map((x) => x.textContent)
      };
      return r.nome === 'Blaise Pascal' &&
        r.papel &&
        r.rotulos.includes('Obra') &&
        r.rotulos.includes('Original')
        ? true
        : r;
    });
  });

  await caso('"Conhecer" na janela abre a página da pessoa', async () => {
    await noExplorar();
    await p.evaluate(() => openQuoteModal(QUOTES.findIndex((q) => q.author === 'Blaise Pascal')));
    await p.waitForTimeout(300);
    await p.locator('#expKnow').click();
    await p.waitForTimeout(400);
    const r = await p.evaluate(() => ({ view: state.view, autor: panAtual }));
    return r.view === 'panorama' && r.autor === 'Blaise Pascal' ? true : r;
  });

  await caso('"Ler a história" na janela abre a história da pessoa', async () => {
    await noExplorar();
    await p.evaluate(() => openQuoteModal(QUOTES.findIndex((q) => q.author === 'Blaise Pascal')));
    await p.waitForTimeout(300);
    await p.locator('#expSaiba').click();
    await p.waitForTimeout(500);
    const r = await p.evaluate(() => ({
      aberta: document.getElementById('bioExpand')?.classList.contains('show'),
      nome: document.querySelector('#bioSheet .bio-nome')?.textContent
    }));
    return r.aberta && r.nome === 'Blaise Pascal' ? true : r;
  });

  await caso('ditado popular abre sem retrato e sem "Conhecer"', async () => {
    await noExplorar();
    await p.evaluate(() => openQuoteModal(QUOTES.findIndex((q) => /^ditado/i.test(q.author))));
    await p.waitForTimeout(300);
    return p.evaluate(() => {
      const box = document.getElementById('quoteExpandBox');
      const r = { retrato: !!box.querySelector('.expand-avatar'), conhecer: !!box.querySelector('#expKnow') };
      return !r.retrato && !r.conhecer ? true : r;
    });
  });

  await caso('a foto do cartão abre a fotografia, e Esc a fecha', async () => {
    await noExplorar();
    const foto = p.locator('#exploreGrid .quote-card [data-open-photo]').first();
    await foto.scrollIntoViewIfNeeded();
    const nome = await foto.getAttribute('data-open-photo');
    await foto.click();
    await p.waitForTimeout(400);
    const aberta = await p.evaluate(() => document.getElementById('photoExpand').classList.contains('show'));
    const frase = await p.evaluate(() => document.getElementById('quoteExpand').classList.contains('show'));
    await p.keyboard.press('Escape');
    await p.waitForTimeout(200);
    const fechada = await p.evaluate(
      () => !document.getElementById('photoExpand').classList.contains('show')
    );
    return aberta && !frase && fechada ? true : { nome, aberta, frase, fechada };
  });

  await caso('Explorar sem rolagem lateral', async () => {
    await noExplorar();
    return p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1) || 'rola para o lado';
  });

  await caso('sem exceção depois de tudo', async () => (erros.length ? erros : true));
  await ctx.close();
}
await b.close();
site.fechar();
console.log(`frase: ${casos - falhas.length} de ${casos} casos passaram`);
if (falhas.length) {
  console.log(falhas.join('\n'));
  process.exitCode = 1;
}
