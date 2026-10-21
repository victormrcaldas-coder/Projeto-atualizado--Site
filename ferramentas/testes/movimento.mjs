// Teste do movimento entre as telas (Etapa 9 refeita, Portão B; o código fica em app/42 e app/43).
// Confere o Voltar e o Avançar do navegador (tela e altura), o link direto, o endereço malicioso,
// o foco no título, o aria-current do menu, a View Transition (uma por clique, nenhuma por código,
// sem nome sobrando, cliques seguidos), o navegador sem o recurso, o movimento reduzido, a aba
// escondida, a estabilidade depois de muitas trocas e o cabeçalho compacto. Roda em 1440×900 e
// 390×844, sem rede. Uso: node ferramentas/testes/movimento.mjs   (sai com 1 se algum caso falhar)
import { chromium, servir, soLocal, esperarCuradoria } from '../lib/navegador.mjs';

const site = await servir();
const b = await chromium.launch();
const falhas = [];
let casos = 0;

// conta as View Transitions e os listeners de window e document desde a carga
const ESPIAO = () => {
  window.__vt = 0;
  const vt = document.startViewTransition;
  if (vt)
    document.startViewTransition = function () {
      window.__vt++;
      return vt.apply(this, arguments);
    };
  window.__ouvintes = 0;
  for (const alvo of [window, document]) {
    const add = alvo.addEventListener;
    const rem = alvo.removeEventListener;
    alvo.addEventListener = function () {
      window.__ouvintes++;
      return add.apply(this, arguments);
    };
    alvo.removeEventListener = function () {
      window.__ouvintes--;
      return rem.apply(this, arguments);
    };
  }
};

async function abrir({ w, h, opcoes = {}, antes, hash = '' }) {
  const movel = w < 768;
  const ctx = await b.newContext({
    viewport: { width: w, height: h },
    isMobile: movel,
    hasTouch: movel,
    ...opcoes
  });
  const p = await ctx.newPage();
  const erros = [];
  p.on('pageerror', (e) => erros.push(String(e)));
  if (antes) await p.addInitScript(antes);
  await p.addInitScript(ESPIAO);
  await soLocal(p);
  await p.goto(site.url + hash);
  await esperarCuradoria(p, 3000);
  await p.waitForFunction(() => window.__rotaPronta === true, null, { timeout: 10000 });
  return { ctx, p, erros, movel };
}

for (const [w, h] of [
  [1440, 900],
  [390, 844]
]) {
  const { ctx, p, erros, movel } = await abrir({ w, h });
  const menu = movel ? '.bottom-nav' : '.site-header';
  const caso = async (nome, fn) => {
    casos++;
    try {
      const r = await fn();
      if (r !== true) falhas.push(`${w}px · ${nome}: ${JSON.stringify(r)}`);
    } catch (e) {
      falhas.push(`${w}px · ${nome}: ${e.message.split('\n')[0]}`);
    }
  };
  // um clique de verdade, sem o Playwright rolar a página antes
  const tocar = async (sel, espera = 700) => {
    const el = p.locator(sel).first();
    let caixa = await el.boundingBox();
    if (!caixa || caixa.y < 0 || caixa.y + caixa.height > h) {
      await el.evaluate((e) => e.scrollIntoView({ block: 'center', behavior: 'instant' }));
      caixa = await el.boundingBox();
    }
    await p.mouse.click(caixa.x + caixa.width / 2, caixa.y + caixa.height / 2);
    await p.waitForTimeout(espera);
  };
  const agora = () =>
    p.evaluate(() => ({
      view: state.view,
      hash: location.hash,
      y: Math.round(scrollY),
      autor: typeof panAtual !== 'undefined' ? panAtual : null,
      n: history.length
    }));
  const rolar = (y) => p.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);

  await caso('carrega sem exceção, na home e sem hash', async () => {
    const a = await agora();
    return !erros.length && a.view === 'home' && a.hash === '' ? true : { erros, a };
  });

  // ---------- histórico ----------
  await caso('o menu troca a tela e escreve #explorar', async () => {
    await tocar(`${menu} [data-nav="explorar"]`);
    const a = await agora();
    return a.view === 'explorar' && a.hash === '#explorar' ? true : a;
  });
  await caso('o foco vai para o título da tela nova', async () =>
    p.evaluate(() => {
      const f = document.activeElement;
      return f && f.closest('#view-explorar') && /^(H1|H2)$|section-title/.test(f.tagName + ' ' + f.className)
        ? true
        : f && f.outerHTML.slice(0, 120);
    })
  );
  await caso('um aria-current por menu, na tela certa', async () =>
    p.evaluate(() => {
      const r = [];
      for (const m of ['.site-header', '.bottom-nav']) {
        const c = [...document.querySelectorAll(`${m} [aria-current="page"]`)];
        if (c.length > 1 || (c[0] && c[0].dataset.nav !== 'explorar'))
          r.push({ m, c: c.map((e) => e.dataset.nav) });
      }
      return r.length ? r : true;
    })
  );
  await caso('Voltar e Avançar: a tela e a altura de antes', async () => {
    await rolar(1500);
    await p.waitForTimeout(250);
    const antes = await agora();
    await tocar(`${menu} [data-nav="autores"]`);
    const nos = await agora();
    await p.goBack();
    await p.waitForTimeout(900);
    const volta = await agora();
    await p.goForward();
    await p.waitForTimeout(900);
    const vai = await agora();
    return nos.view === 'autores' &&
      volta.view === 'explorar' &&
      Math.abs(volta.y - antes.y) <= 40 &&
      vai.view === 'autores' &&
      vai.y < 40
      ? true
      : { antes, nos, volta, vai };
  });
  await caso(
    'índice → autor (#autor-…) → obra (#obra-…); o Voltar da obra não cresce o histórico',
    async () => {
      await tocar('#aoRoot [data-indice="Clarice Lispector"]');
      const autor = await agora();
      await tocar('#pan-obras .obra-card [data-obra]');
      const obra = await agora();
      await tocar('#obraBack');
      const volta = await agora();
      return autor.view === 'panorama' &&
        autor.hash === '#autor-clarice-lispector' &&
        obra.view === 'obra' &&
        obra.hash.startsWith('#obra-clarice-lispector-') &&
        volta.view === 'panorama' &&
        volta.n === obra.n
        ? true
        : { autor, obra, volta };
    }
  );
  await caso('Avançar também volta à altura em que a pessoa estava', async () => {
    await p.evaluate(() => navigateTo('autores'));
    await p.waitForTimeout(400);
    await rolar(1200);
    await p.waitForTimeout(500);
    await tocar(`${menu} [data-nav="explorar"]`);
    await p.goBack();
    await p.waitForTimeout(900);
    await p.goForward();
    await p.waitForTimeout(900);
    await p.goBack();
    await p.waitForTimeout(900);
    const r = await agora();
    return r.view === 'autores' && Math.abs(r.y - 1200) <= 40 ? true : r;
  });
  await caso('Voltar ao índice: o nome tocado no mesmo lugar e com o foco', async () => {
    await p.evaluate(() => navigateTo('autores'));
    await p.waitForTimeout(400);
    const sel = '#aoRoot [data-indice="Clarice Lispector"]';
    await p.locator(sel).evaluate((e) => e.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await p.waitForTimeout(500);
    const antes = await p.locator(sel).evaluate((e) => Math.round(e.getBoundingClientRect().top));
    await tocar(sel);
    await p.goBack();
    await p.waitForTimeout(1000);
    const r = await p.locator(sel).evaluate((e) => ({
      top: Math.round(e.getBoundingClientRect().top),
      foco: document.activeElement === e
    }));
    await p.goForward();
    await p.waitForTimeout(900);
    return Math.abs(r.top - antes) <= 2 && r.foco ? true : { antes, ...r };
  });
  await caso('o Voltar do navegador refaz a página do autor e a home', async () => {
    await tocar(`${menu} [data-nav="home"]`);
    await p.goBack();
    await p.waitForTimeout(900);
    const a = await agora();
    return a.view === 'panorama' && a.autor === 'Clarice Lispector' ? true : a;
  });
  if (movel)
    await caso('"Mais" fica marcado no Descubra', async () => {
      await p.evaluate(() => navigateTo('home'));
      await tocar('#bnMais', 400);
      await tocar('#mobileMenu [data-nav="descubra"]');
      return p.evaluate(() => document.getElementById('bnMais').classList.contains('active') || 'sem marca');
    });

  // ---------- a View Transition ----------
  await caso('uma transição por clique, nenhuma por código', async () => {
    await p.evaluate(() => navigateTo('home'));
    await p.waitForTimeout(100);
    const v0 = await p.evaluate(() => window.__vt);
    await p.evaluate(() => {
      navigateTo('explorar');
      navigateTo('historias');
      navigateTo('home');
    });
    const v1 = await p.evaluate(() => window.__vt);
    await tocar(`${menu} [data-nav="explorar"]`);
    const v2 = await p.evaluate(() => window.__vt);
    return v1 === v0 && v2 === v1 + 1 ? true : { v0, v1, v2 };
  });
  await caso('nenhum nome de transição sobrando, nenhum atributo preso', async () => {
    await p.waitForTimeout(600);
    return p.evaluate(() => {
      const fixos = ['root', 'mm-cab', 'mm-barra', 'mm-aviso', 'none', ''];
      const sobra = [...document.querySelectorAll('*')]
        .filter((e) => !fixos.includes(getComputedStyle(e).viewTransitionName))
        .map((e) => e.tagName + '#' + e.id + '.' + e.className);
      const raiz = document.documentElement;
      return !sobra.length && !raiz.hasAttribute('data-transicao') && !window.__emTroca && !raiz.dataset.vtDir
        ? true
        : { sobra };
    });
  });
  await caso('três cliques em 50 ms: termina na última tela, sem travar', async () => {
    const sel = (v) => `${menu} [data-nav="${v}"]`;
    const pontos = [];
    for (const v of ['autores', 'home', 'explorar']) {
      const c = await p.locator(sel(v)).first().boundingBox();
      pontos.push(c);
    }
    for (const c of pontos) {
      await p.mouse.click(c.x + c.width / 2, c.y + c.height / 2);
      await p.waitForTimeout(25);
    }
    await p.waitForTimeout(1000);
    const r = await p.evaluate(() => ({
      view: state.view,
      preso: document.documentElement.hasAttribute('data-transicao') || !!window.__emTroca,
      hash: location.hash
    }));
    return r.view === 'explorar' && !r.preso && r.hash === '#explorar' ? true : r;
  });
  await caso('com a aba escondida, sem transição', async () => {
    const v0 = await p.evaluate(() => {
      Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
      return window.__vt;
    });
    await tocar(`${menu} [data-nav="autores"]`, 300);
    const r = await p.evaluate(() => {
      delete document.visibilityState;
      return { vt: window.__vt, view: state.view };
    });
    return r.vt === v0 && r.view === 'autores' ? true : { v0, ...r };
  });

  // ---------- estabilidade ----------
  await caso('os listeners não crescem com as trocas (10 e 50)', async () => {
    const telas = ['explorar', 'autores', 'home', 'historias', 'descubra'];
    const ir = async (n) => {
      for (let i = 0; i < n; i++) {
        const v = telas[i % telas.length];
        const el = p.locator(`${menu} [data-nav="${v}"]`).first();
        if (await el.isVisible()) {
          const c = await el.boundingBox();
          await p.mouse.click(c.x + c.width / 2, c.y + c.height / 2);
        } else await p.evaluate((v) => navigateTo(v), v);
        await p.waitForTimeout(60);
      }
      await p.waitForTimeout(800);
      return p.evaluate(() => window.__ouvintes);
    };
    const a = await ir(10);
    const c = await ir(50);
    return a === c ? true : { depoisDe10: a, depoisDe60: c };
  });
  // ---------- janelas (Portão C, app/45) ----------
  const janela = () =>
    p.evaluate(() => ({
      frase: document.getElementById('quoteExpand').classList.contains('show'),
      historia: !!document.querySelector('#bioExpand.show'),
      inert: document.querySelectorAll('[inert]').length,
      entrada: !!(history.state && history.state.janela),
      n: history.length,
      view: state.view
    }));
  const abrirFrase = async () => {
    await p.evaluate(() => navigateTo('explorar'));
    await rolar(0);
    await p.waitForTimeout(300);
    const idx = await p.evaluate(() => history.state && history.state.idx);
    await tocar('#exploreGrid .quote-card .quote-card-text', 700);
    return idx;
  };
  await caso('a frase ampliada entra no histórico e deixa o resto inert', async () => {
    // o Chromium guarda no máximo 50 entradas: a prova é o estado novo (pushState com a janela), não
    // o tamanho do histórico
    const idx0 = await abrirFrase();
    const j = await janela();
    const idx = await p.evaluate(() => history.state && history.state.idx);
    return j.frase && j.inert > 0 && j.entrada && idx === idx0 + 1 ? true : { idx0, idx, ...j };
  });
  await caso('o Voltar do navegador fecha só a janela e fica na tela', async () => {
    await p.goBack();
    await p.waitForTimeout(500);
    const j = await janela();
    return !j.frase && !j.inert && !j.entrada && j.view === 'explorar' ? true : j;
  });
  await caso('Esc fecha e tira a entrada da janela', async () => {
    await abrirFrase();
    const n = await p.evaluate(() => history.length);
    await p.keyboard.press('Escape');
    await p.waitForTimeout(500);
    const j = await janela();
    // a entrada de cima fica para o Avançar (o navegador não apaga), mas o estado atual é o da tela
    return !j.frase && !j.inert && !j.entrada && j.n === n ? true : { n, ...j };
  });
  await caso('o X fecha e devolve o foco ao cartão', async () => {
    await abrirFrase();
    await p.evaluate(() => closeQuoteModal());
    await p.waitForTimeout(500);
    const r = await p.evaluate(() => ({
      foco: !!document.activeElement.closest('.quote-card'),
      entrada: !!(history.state && history.state.janela)
    }));
    return r.foco && !r.entrada ? true : r;
  });
  await caso('"Conhecer" dentro da história e depois Voltar não reabre a janela', async () => {
    await p.evaluate(() => navigateTo('historias'));
    await rolar(0);
    await p.waitForTimeout(400);
    await tocar('#storiesGrid .story-card', 800);
    const aberta = (await janela()).historia;
    await tocar('#bioExpand.show #bioMais', 900);
    const nos = await janela();
    await p.goBack();
    await p.waitForTimeout(700);
    const j = await janela();
    return aberta &&
      nos.view === 'panorama' &&
      !nos.historia &&
      j.view === 'historias' &&
      !j.historia &&
      !j.inert
      ? true
      : { aberta, nos, j };
  });
  if (movel) {
    // arrasto de verdade (eventos de toque do Chrome), devagar para não contar como gesto rápido
    const arrastar = async (fracao) => {
      const cdp = await ctx.newCDPSession(p);
      const caixa = await p.locator('#quoteExpandBox').boundingBox();
      const x = caixa.x + caixa.width / 2;
      const y0 = caixa.y + 16;
      const dy = caixa.height * fracao;
      const toque = (type, y) =>
        cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
      await toque('touchStart', y0);
      for (let i = 1; i <= 12; i++) {
        await toque('touchMove', y0 + (dy * i) / 12);
        await p.waitForTimeout(40);
      }
      await toque('touchEnd', y0 + dy);
      await p.waitForTimeout(700);
      await cdp.detach();
      return janela();
    };
    await caso('a folha arrastada 10% volta para o lugar', async () => {
      await abrirFrase();
      const j = await arrastar(0.1);
      const resto = await p.evaluate(
        () => getComputedStyle(document.getElementById('quoteExpandBox')).transform
      );
      return j.frase && (resto === 'none' || /matrix\(1, 0, 0, 1, 0, 0\)/.test(resto))
        ? true
        : { ...j, resto };
    });
    await caso('a folha arrastada 40% fecha', async () => {
      const j = await arrastar(0.4);
      return !j.frase && !j.inert && !j.entrada ? true : j;
    });
  }
  await caso('nada inert nem página presa depois das trocas', async () =>
    p.evaluate(() => {
      const inert = document.querySelectorAll('[inert]').length;
      const preso =
        document.body.classList.contains('modal-open') || document.body.style.position === 'fixed';
      return !inert && !preso ? true : { inert, preso };
    })
  );
  if (!movel)
    await caso('o cabeçalho compacto tem a mesma altura (a página não pula)', async () => {
      await p.evaluate(() => navigateTo('home'));
      await rolar(0);
      await p.waitForTimeout(500);
      const solto = await p.evaluate(() => document.querySelector('.site-header').offsetHeight);
      await rolar(900);
      await p.waitForTimeout(600);
      const r = await p.evaluate(() => ({
        compacto: document.querySelector('.site-header').classList.contains('compact'),
        h: document.querySelector('.site-header').offsetHeight
      }));
      return r.compacto && r.h === solto ? true : { solto, ...r };
    });
  await caso('0 exceções na sessão', async () => (erros.length ? erros : true));
  await ctx.close();

  // ---------- link direto ----------
  const direto = async (nome, hash, fn) => {
    const s = await abrir({ w, h, hash });
    casos++;
    try {
      const r = await fn(s.p);
      if (r !== true) falhas.push(`${w}px · ${nome}: ${JSON.stringify(r)}`);
      if (s.erros.length) falhas.push(`${w}px · ${nome}: exceções ${JSON.stringify(s.erros)}`);
    } catch (e) {
      falhas.push(`${w}px · ${nome}: ${e.message.split('\n')[0]}`);
    }
    await s.ctx.close();
  };
  await direto(
    'link direto #autor-machado-de-assis, e a recarga mantém',
    '#autor-machado-de-assis',
    async (p) => {
      const a = await p.evaluate(() => ({ view: state.view, autor: panAtual }));
      await p.reload();
      await esperarCuradoria(p, 3000);
      await p.waitForFunction(() => window.__rotaPronta === true, null, { timeout: 10000 });
      const r = await p.evaluate(() => ({ view: state.view, autor: panAtual, hash: location.hash }));
      return a.view === 'panorama' &&
        a.autor === 'Machado de Assis' &&
        r.view === 'panorama' &&
        r.autor === a.autor
        ? true
        : { a, r };
    }
  );
  await direto('link direto #explorar', '#explorar', async (p) =>
    p.evaluate(() => state.view === 'explorar' || state.view)
  );
  await direto('link direto de obra', '#obra-clarice-lispector-a-hora-da-estrela', async (p) =>
    p.evaluate(
      () => (state.view === 'obra' && obraAtual && obraAtual.autor === 'Clarice Lispector') || state.view
    )
  );
  await direto(
    'endereço malicioso: home, endereço limpo, nada criado',
    '#autor-<img src=x onerror="window.__xss=1">',
    async (p) =>
      p.evaluate(() => {
        const r = {
          view: state.view,
          hash: location.hash,
          xss: !!window.__xss,
          img: document.querySelectorAll('img[src="x"]').length
        };
        return r.view === 'home' && !r.xss && !r.img ? true : r;
      })
  );
  await direto('autor que não existe: home, endereço limpo', '#autor-ninguem-com-esse-nome', async (p) =>
    p.evaluate(
      () => (state.view === 'home' && location.hash === '') || { view: state.view, hash: location.hash }
    )
  );

  // ---------- sem o recurso e com movimento reduzido ----------
  const semRecurso = async (nome, opcoes, antes) => {
    const s = await abrir({ w, h, opcoes, antes });
    casos++;
    try {
      const c = await s.p.locator(`${menu} [data-nav="explorar"]`).first().boundingBox();
      await s.p.mouse.click(c.x + c.width / 2, c.y + c.height / 2);
      // a animação de esmaecer é lida logo depois do clique
      const r = await s.p.evaluate(() => {
        const tela = document.getElementById('view-explorar');
        const anim = tela.getAnimations().map((a) => Object.keys(a.effect.getKeyframes()[0] || {}));
        return {
          view: state.view,
          hash: location.hash,
          vt: window.__vt,
          anim,
          foco: !!document.activeElement.closest('#view-explorar')
        };
      });
      const soOpacidade = r.anim.every((k) => !k.includes('transform'));
      if (!(r.view === 'explorar' && r.hash === '#explorar' && !r.vt && soOpacidade && r.foco))
        falhas.push(`${w}px · ${nome}: ${JSON.stringify(r)}`);
      await s.p.goBack();
      await s.p.waitForTimeout(500);
      const v = await s.p.evaluate(() => state.view);
      if (v !== 'home') falhas.push(`${w}px · ${nome}: o Voltar foi para ${v}`);
      if (s.erros.length) falhas.push(`${w}px · ${nome}: exceções ${JSON.stringify(s.erros)}`);
    } catch (e) {
      falhas.push(`${w}px · ${nome}: ${e.message.split('\n')[0]}`);
    }
    await s.ctx.close();
  };
  await semRecurso('navegador sem View Transition: histórico, foco e esmaecer', {}, () => {
    delete Document.prototype.startViewTransition;
  });
  await semRecurso('movimento reduzido: sem transição, só esmaece', { reducedMotion: 'reduce' });
}

await b.close();
await site.fechar();
console.log(`movimento: ${casos - falhas.length} de ${casos} casos passaram`);
if (falhas.length) {
  console.log(falhas.join('\n'));
  process.exitCode = 1;
}
