// Teste do Descubra, de Histórias e da história aberta (Etapa 7 do redesign): filtros, cartões,
// narração, links para o autor, Esc, foco, Tab e movimento reduzido.
// Roda em 1440×900 e 390×844, sem rede. Uso: node ferramentas/testes/historias.mjs (sai com 1 se falhar)
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
  const ctx = await b.newContext({
    viewport: { width: w, height: h },
    isMobile: movel,
    hasTouch: movel,
    reducedMotion: movel ? 'reduce' : 'no-preference'
  });
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
      fecharBiografia();
      closePhotoModal();
      closeQuoteModal();
    });
  };
  const ir = async (view) => {
    await fecharTudo();
    await p.evaluate((v) => {
      if (v === 'descubra') discoverFilter = 'all';
      if (v === 'historias') bioFilter = { profile: 'all', origin: 'all' };
      navigateTo(v);
      scrollTo(0, 0);
    }, view);
    await p.waitForTimeout(400);
  };
  const clicar = async (loc) => {
    await loc.scrollIntoViewIfNeeded();
    await loc.click();
    await p.waitForTimeout(400);
  };
  const bio = () =>
    p.evaluate(() => ({
      aberta: document.getElementById('bioExpand')?.classList.contains('show'),
      nome: document.querySelector('#bioSheet .bio-nome')?.textContent,
      titulo: document.querySelector('#bioSheet .bio-titulo')?.textContent
    }));

  await caso('carrega sem exceção', async () => (erros.length ? erros : true));

  await caso('Descubra: o cartão abre a história da pessoa', async () => {
    await ir('descubra');
    const card = p.locator('#discoverGrid .discover-card').first();
    const nome = await card.locator('.discover-name').textContent();
    await clicar(card);
    const r = await bio();
    return r.aberta && r.nome === nome ? true : { ...r, esperado: nome };
  });

  await caso('Descubra: o filtro reduz e o número acompanha', async () => {
    await ir('descubra');
    const antes = await p.locator('#discoverCount').textContent();
    await clicar(
      p.locator('#discoverFilterRow [data-discover-filter]:not([data-discover-filter="all"])').first()
    );
    const depois = await p.locator('#discoverCount').textContent();
    const n = (t) => parseInt(t.replace(/\D/g, ''), 10);
    return n(depois) > 0 && n(depois) < n(antes) ? true : { antes, depois };
  });

  await caso('Descubra: os cartões aparecem (também com movimento reduzido)', async () => {
    await ir('descubra');
    return p.evaluate(() => {
      const c = document.querySelector('#discoverGrid .discover-card');
      return c && getComputedStyle(c).opacity !== '0' ? true : 'cartão invisível';
    });
  });

  await caso('Histórias: "Ler a história" abre a história do cartão', async () => {
    await ir('historias');
    const card = p.locator('#storiesGrid .story-card').first();
    const titulo = await card.locator('.story-title').textContent();
    await clicar(card.locator('.story-toggle'));
    const r = await bio();
    return r.aberta && r.titulo === titulo ? true : { ...r, esperado: titulo };
  });

  await caso('Histórias: filtros de atuação e de origem reduzem a lista', async () => {
    await ir('historias');
    const n = () => p.locator('#storiesGrid .story-card').count();
    const conta = async () =>
      parseInt((await p.locator('#view-historias .bio-count').textContent()).replace(/\D/g, ''), 10);
    const total = await conta();
    await clicar(p.locator('#bioProfileRow [data-bio-profile]:not([data-bio-profile="all"])').first());
    const atuacao = await conta();
    await p.evaluate(() => {
      bioFilter = { profile: 'all', origin: 'all' };
      renderBiographies();
    });
    await p.waitForTimeout(300);
    await clicar(p.locator('#bioOriginRow [data-bio-origin]:not([data-bio-origin="all"])').first());
    const origem = await conta();
    return atuacao < total && origem < total && (await n()) > 0 ? true : { total, atuacao, origem };
  });

  await caso('Histórias: a narração do cartão liga (ou não há voz no navegador)', async () => {
    await ir('historias');
    await clicar(p.locator('#storiesGrid .story-card .play-btn').first());
    const r = await p.evaluate(() => ({
      tocando: !!document.querySelector('#storiesGrid .play-btn.playing'),
      semVoz: !('speechSynthesis' in window)
    }));
    await p.evaluate(() => {
      try {
        speechSynthesis.cancel();
      } catch (e) {}
    });
    return r.tocando || r.semVoz ? true : r;
  });

  await caso('Histórias: capas sem degradê colorido', async () => {
    await ir('historias');
    return p.evaluate(() => {
      const c = document.querySelector('#storiesGrid .story-cover');
      const bg = getComputedStyle(c).backgroundImage;
      return bg === 'none' || bg;
    });
  });

  await caso('história aberta: "Conhecer" e "Ver frases" abrem a pessoa', async () => {
    const id = await p.evaluate(() => STORIES.find((s) => s.author === 'Vincent van Gogh').id);
    await fecharTudo();
    await p.evaluate((i) => openBiography(i), id);
    await p.waitForTimeout(300);
    await clicar(p.locator('#bioMais'));
    const r1 = await p.evaluate(() => ({
      view: state.view,
      autor: panAtual,
      aberta: document.getElementById('bioExpand').classList.contains('show')
    }));
    await p.evaluate((i) => openBiography(i), id);
    await p.waitForTimeout(300);
    const frases = p.locator('#bioFrases');
    let r2 = { semBotao: true };
    if (await frases.count()) {
      await clicar(frases);
      r2 = await p.evaluate(() => ({ view: state.view, autor: panAtual }));
    }
    return r1.view === 'panorama' &&
      r1.autor === 'Vincent van Gogh' &&
      !r1.aberta &&
      (r2.semBotao || r2.autor === 'Vincent van Gogh')
      ? true
      : { r1, r2 };
  });

  await caso('história aberta: Esc fecha e o foco volta ao cartão', async () => {
    await ir('historias');
    const card = p.locator('#storiesGrid .story-card').first();
    await card.focus();
    await p.keyboard.press('Enter');
    await p.waitForTimeout(400);
    const aberta = (await bio()).aberta;
    await p.keyboard.press('Escape');
    await p.waitForTimeout(250);
    const r = await p.evaluate(() => ({
      fechada: !document.getElementById('bioExpand').classList.contains('show'),
      foco: document.activeElement?.classList.contains('story-card')
    }));
    return aberta && r.fechada && r.foco ? true : { aberta, ...r };
  });

  await caso('história aberta: Esc com a foto por cima fecha só a foto', async () => {
    await fecharTudo();
    await p.evaluate(() => openBiography(STORIES.find((s) => s.author === 'Vincent van Gogh').id));
    await p.waitForTimeout(300);
    await clicar(p.locator('#bioFoto'));
    await p.keyboard.press('Escape');
    await p.waitForTimeout(250);
    const r = await p.evaluate(() => ({
      foto: document.getElementById('photoExpand').classList.contains('show'),
      historia: document.getElementById('bioExpand').classList.contains('show')
    }));
    return !r.foto && r.historia ? true : r;
  });

  await caso('história aberta: Tab não sai dela', async () => {
    await fecharTudo();
    await p.evaluate(() => openBiography(STORIES.find((s) => s.author === 'Vincent van Gogh').id));
    await p.waitForTimeout(300);
    for (let i = 0; i < 14; i++) await p.keyboard.press('Tab');
    return (
      (await p.evaluate(() => document.getElementById('bioExpand').contains(document.activeElement))) ||
      'o foco saiu da história'
    );
  });

  await caso('história aberta: texto numa coluna só', async () => {
    await fecharTudo();
    await p.evaluate(() => openBiography(STORIES.find((s) => s.author === 'Vincent van Gogh').id));
    await p.waitForTimeout(300);
    return p.evaluate(() => {
      const cs = getComputedStyle(document.querySelector('#bioSheet .bio-corpo'));
      return (cs.columnCount === 'auto' || cs.columnCount === '1') && cs.columnWidth === 'auto'
        ? true
        : { n: cs.columnCount, w: cs.columnWidth };
    });
  });

  await caso('fechar e abrir histórias não deixa a página travada', async () => {
    await fecharTudo();
    await p.evaluate(() => {
      const ids = STORIES.slice(0, 3).map((s) => s.id);
      ids.forEach((i) => openBiography(i));
      fecharBiografia();
    });
    await p.waitForTimeout(200);
    return (
      (await p.evaluate(() => getComputedStyle(document.body).position !== 'fixed')) || 'rolagem travada'
    );
  });

  for (const view of ['descubra', 'historias'])
    await caso(`${view} sem rolagem lateral`, async () => {
      await ir(view);
      return p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1) || 'rola para o lado';
    });

  await caso('sem exceção depois de tudo', async () => (erros.length ? erros : true));
  await ctx.close();
}
await b.close();
site.fechar();
console.log(`historias: ${casos - falhas.length} de ${casos} casos passaram`);
if (falhas.length) {
  console.log(falhas.join('\n'));
  process.exitCode = 1;
}
