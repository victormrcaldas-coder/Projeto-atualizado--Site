// Teste dos botões da home (Etapa 4 do redesign): cada um tem de levar à tela certa do site,
// com o conteúdo certo. Roda em 1440×900 e 390×844, sem rede (as fotos caem na placa com o nome).
// Uso: node ferramentas/testes/home.mjs   (sai com código 1 se algum caso falhar)
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
  const visao = () => p.evaluate(() => state.view);
  // volta à home, fecha o que estiver aberto e clica num seletor da home
  const naHome = async () => {
    await p.keyboard.press('Escape');
    await p.evaluate(() => {
      if (typeof fecharBiografia === 'function') fecharBiografia();
      closeQuoteModal();
      closePhotoModal();
      navigateTo('home');
    });
    await p.waitForTimeout(150);
  };
  const clicar = async (sel) => {
    await naHome();
    const el = p.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await el.click();
    await p.waitForTimeout(400);
  };

  await caso('carrega sem exceção', async () => (erros.length ? erros : true));
  await caso('números exatos, sem "+"', async () =>
    p.evaluate(() => {
      const t = document.getElementById('t-explorar').textContent;
      return !t.includes('+') && t.includes(QUOTES.length.toLocaleString('pt-BR')) ? true : t;
    })
  );

  // C. explorar
  await caso('tema do índice abre o Explorar filtrado', async () => {
    const id = await p.locator('#indiceTemas [data-home-tema]').first().getAttribute('data-home-tema');
    await clicar('#indiceTemas [data-home-tema]');
    const r = await p.evaluate(() => ({
      view: state.view,
      cat: state.exploreFilter.cat,
      cartoes: document.querySelectorAll('#view-explorar .quote-card').length
    }));
    return r.view === 'explorar' && r.cat === id && r.cartoes > 0 ? true : r;
  });
  await caso('"Explorar as frases" abre o Explorar com todas', async () => {
    await clicar('#home-explorar .btn-primary');
    const r = await p.evaluate(() => ({
      view: state.view,
      cat: state.exploreFilter.cat,
      cartoes: document.querySelectorAll('#view-explorar .quote-card').length
    }));
    return r.view === 'explorar' && r.cat === 'all' && r.cartoes > 0 ? true : r;
  });

  // A. abertura
  await caso('"Abrir a frase" amplia a frase de hoje', async () => {
    await clicar('#faixa [data-abrir-frase]');
    return p.evaluate(() => document.getElementById('quoteExpand').classList.contains('show'));
  });
  await caso('nome na abertura abre a página do autor', async () => {
    const nome = await p.locator('#abertura [data-autor]').getAttribute('data-autor');
    await clicar('#abertura [data-autor]');
    const r = await p.evaluate(() => ({ view: state.view, autor: panAtual }));
    return r.view === 'panorama' && r.autor === nome ? true : r;
  });
  await caso('foto da abertura amplia', async () => {
    await clicar('#abertura [data-foto]');
    return p.evaluate(() => document.getElementById('photoExpand').classList.contains('show'));
  });

  // B. acaso
  await caso('"Outra frase" troca a frase', async () => {
    await naHome();
    const antes = await p.locator('#acasoFrase blockquote').textContent();
    await p.locator('#outraFrase').click();
    const depois = await p.locator('#acasoFrase blockquote').textContent();
    return antes !== depois ? true : 'igual';
  });

  // E. descubra
  await caso('Descubra: "Ler a história" abre a história da pessoa', async () => {
    await naHome();
    const nome = await p.locator('#descubraSlide [data-autor]').getAttribute('data-autor');
    await clicar('#descubraSlide [data-historia]');
    const r = await p.evaluate(() => ({
      aberta: document.getElementById('bioExpand')?.classList.contains('show'),
      nome: document.querySelector('#bioSheet .bio-nome')?.textContent
    }));
    return r.aberta && r.nome === nome ? true : { ...r, esperado: nome };
  });
  await caso('Descubra: "Conhecer" abre a página da pessoa', async () => {
    await naHome();
    const nome = await p.locator('#descubraSlide [data-autor]').getAttribute('data-autor');
    await clicar('#descubraSlide [data-autor]');
    const r = await p.evaluate(() => ({ view: state.view, autor: panAtual }));
    return r.view === 'panorama' && r.autor === nome ? true : r;
  });
  await caso('Descubra: "Próxima pessoa" troca a página', async () => {
    await naHome();
    const antes = await p.locator('.descubra-nome').textContent();
    await p.locator('#descubraProxima').scrollIntoViewIfNeeded();
    await p.locator('#descubraProxima').click();
    await p.waitForTimeout(900);
    const depois = await p.locator('.descubra-nome').textContent();
    return antes !== depois ? true : 'igual';
  });
  await caso('Descubra troca sozinho na tela e para fora dela', async () => {
    await naHome();
    // o foco que ficou no botão clicado antes pausa a troca (de propósito): tira o foco
    await p.evaluate(() => {
      document.activeElement && document.activeElement.blur();
      document.getElementById('home-descubra').style.setProperty('--descubra-tempo', '0.6s');
    });
    await p.locator('#home-descubra').scrollIntoViewIfNeeded();
    await p.mouse.move(2, 2);
    // um toque de antes (no celular) pausa por 5 s
    if (movel) await p.waitForTimeout(5200);
    const antes = await p.locator('.descubra-nome').textContent();
    // espera a troca (até 8 s, para não depender da velocidade da máquina)
    await p
      .waitForFunction((n) => document.querySelector('.descubra-nome')?.textContent !== n, antes, {
        timeout: 8000
      })
      .catch(() => {});
    const depois = await p.locator('.descubra-nome').textContent();
    await p.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
    // uma troca que já tinha começado termina; depois disso, fora da tela, não troca mais
    await p.waitForTimeout(1500);
    const fora = await p.locator('.descubra-nome').textContent();
    await p.waitForTimeout(2500);
    const continua = await p.locator('.descubra-nome').textContent();
    await p.evaluate(() => document.getElementById('home-descubra').style.removeProperty('--descubra-tempo'));
    return antes !== depois && fora === continua ? true : { antes, depois, fora, continua };
  });

  // D. autores
  await caso('galeria tem todas as pessoas com história', async () =>
    p.evaluate(() => {
      const n = new Set(STORIES.map((s) => canonAuthor(s.author))).size;
      const g = document.querySelectorAll('#galeria .retrato').length;
      return n === g ? true : { galeria: g, comHistoria: n };
    })
  );
  await caso('retrato da galeria abre a página do autor', async () => {
    const nome = await p.locator('#galeria [data-autor]').nth(1).getAttribute('data-autor');
    await naHome();
    await p.locator('#galeria [data-autor]').nth(1).scrollIntoViewIfNeeded();
    await p.locator('#galeria [data-autor]').nth(1).click();
    await p.waitForTimeout(400);
    const r = await p.evaluate(() => ({ view: state.view, autor: panAtual }));
    return r.view === 'panorama' && r.autor === nome ? true : r;
  });
  await caso('seta da galeria avança', async () => {
    await naHome();
    await p.locator('[data-galeria="1"]').scrollIntoViewIfNeeded();
    await p.locator('[data-galeria="1"]').click();
    await p.waitForTimeout(900);
    return p.evaluate(() => document.getElementById('galeria').scrollLeft > 0);
  });
  await caso('"Pesquisar em Autores & Obras" abre a tela', async () => {
    await clicar('#home-autores .secao-cabeca [data-nav]');
    return (await visao()) === 'autores' || (await visao());
  });

  // H. comunidade
  for (const [sel, view] of [
    ['#home-comunidade .btn-primary', 'escrever'],
    ['#home-comunidade .convite-chamada .btn-text', 'comunidade'],
    ['#conviteLado [data-ir]', null]
  ])
    await caso(`comunidade: ${sel}`, async () => {
      const alvo =
        view ||
        (await p
          .locator(sel)
          .first()
          .getAttribute(sel.includes('data-ir') ? 'data-ir' : 'data-nav'));
      await clicar(sel);
      return (await visao()) === alvo || { esperado: alvo, veio: await visao() };
    });
  await caso('comunidade não repete a frase de hoje nem mostra relatos inventados', async () =>
    p.evaluate(() => {
      const t = document.getElementById('home-comunidade').textContent;
      const hoje = document.querySelector('#abertura .quote-hero-text').textContent.slice(2, 30);
      return !t.includes(hoje) && !/marina_sp|joao\.forte|luztotal/.test(t) ? true : 'repete ou inventado';
    })
  );

  // F. histórias
  await caso('"Ler a história" do destaque abre essa história', async () => {
    await naHome();
    const id = await p.locator('#historiaDestaque [data-historia]').getAttribute('data-historia');
    await clicar('#historiaDestaque [data-historia]');
    const r = await p.evaluate(
      (id) => ({
        aberta: document.getElementById('bioExpand')?.classList.contains('show'),
        titulo: document.querySelector('#bioSheet .bio-titulo')?.textContent,
        esperado: STORIES.find((s) => s.id === id).title
      }),
      id
    );
    return r.aberta && r.titulo === r.esperado ? true : r;
  });
  await caso('"Ouvir" abre a história e liga a narração', async () => {
    await clicar('#historiaDestaque [data-ouvir]');
    const r = await p.evaluate(() => ({
      aberta: document.getElementById('bioExpand')?.classList.contains('show'),
      tocando: !!document.querySelector('#bioSheet .play-btn.playing'),
      semVoz: !('speechSynthesis' in window)
    }));
    return r.aberta && (r.tocando || r.semVoz) ? true : r;
  });
  await caso('cartão de história abre essa história', async () => {
    await naHome();
    const id = await p.locator('#historiasMais [data-historia]').first().getAttribute('data-historia');
    await clicar('#historiasMais [data-historia]');
    const r = await p.evaluate(
      (id) => ({
        titulo: document.querySelector('#bioSheet .bio-titulo')?.textContent,
        esperado: STORIES.find((s) => s.id === id).title
      }),
      id
    );
    return r.titulo === r.esperado ? true : r;
  });
  await caso('"Ver as histórias" abre a tela Histórias', async () => {
    await clicar('#todasHistorias');
    return (await visao()) === 'historias' || (await visao());
  });

  // I. encerramento: o mapa leva a cada tela
  for (const view of ['explorar', 'autores', 'descubra', 'historias', 'comunidade', 'escrever'])
    await caso(`mapa → ${view}`, async () => {
      await clicar(`.mapa [data-nav="${view}"]`);
      return (await visao()) === view || (await visao());
    });

  // cabeçalho e barra inferior: cada item é uma tela própria, e a home some
  const navs = movel
    ? ['explorar', 'autores', 'escrever']
    : ['explorar', 'descubra', 'historias', 'comunidade', 'perfil'];
  for (const view of navs)
    await caso(`navegação → ${view} é tela própria`, async () => {
      await naHome();
      await p.evaluate(() => scrollTo(0, 0));
      const sel = movel ? `.bottom-nav [data-nav="${view}"]` : `.main-nav [data-nav="${view}"]`;
      await p.locator(sel).first().click();
      await p.waitForTimeout(300);
      const r = await p.evaluate(() => ({
        view: state.view,
        homeEscondida: document.getElementById('view-home').classList.contains('hidden')
      }));
      return r.view === view && r.homeEscondida ? true : r;
    });

  await caso('sem exceção depois de tudo', async () => (erros.length ? erros : true));
  await ctx.close();
}
await b.close();
site.fechar();
console.log(`home: ${casos - falhas.length} de ${casos} casos passaram`);
if (falhas.length) {
  console.log(falhas.join('\n'));
  process.exitCode = 1;
}
