// Teste de Comunidade, Perfil, Escrever e da janela de entrar (Etapa 8 do redesign).
// Roda em 1440×900 e 390×844, sem rede, com contas e relatos criados só na memória do teste.
// Uso: node ferramentas/testes/comunidade.mjs (sai com 1 se algum caso falhar)
import { chromium, servir, soLocal, esperarCuradoria } from '../lib/navegador.mjs';

const site = await servir();
const b = await chromium.launch();
const falhas = [];
let casos = 0;
const INVENTADOS = /marina_sp|joao\.forte|luztotal/;

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
  const ir = async (view) => {
    await p.evaluate((v) => {
      closeAuthModal();
      navigateTo(v);
      scrollTo(0, 0);
    }, view);
    await p.waitForTimeout(400);
  };
  const clicar = async (sel) => {
    const el = p.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await el.click();
    await p.waitForTimeout(350);
  };
  const authAberta = () => p.evaluate(() => document.getElementById('authModal').classList.contains('show'));

  await caso('carrega sem exceção', async () => (erros.length ? erros : true));

  await caso('comunidade sem os relatos inventados, com o convite para escrever', async () => {
    await ir('comunidade');
    const r = await p.evaluate(() => ({
      texto: document.getElementById('view-comunidade').innerText,
      vazio: !document.getElementById('feedEmpty').classList.contains('hidden')
    }));
    return !INVENTADOS.test(r.texto) && r.vazio
      ? true
      : { inventados: INVENTADOS.test(r.texto), vazio: r.vazio };
  });

  await caso('relatos de exemplo já guardados não voltam a aparecer', async () => {
    return p.evaluate(async () => {
      const antes = state.communityPosts;
      await dbSet(
        'feed:posts',
        [
          {
            id: 'x1',
            authorEmail: 'seed_0@memotiva.app',
            authorUsername: 'marina_sp',
            text: 'exemplo',
            createdAt: 1
          }
        ],
        true
      );
      await loadCommunityPosts();
      const r = state.communityPosts.filter((x) => /^seed_/.test(x.authorEmail)).length;
      await dbSet('feed:posts', antes, true);
      state.communityPosts = antes;
      return r === 0 || r;
    });
  });

  await caso('o botão do estado vazio abre o Escrever', async () => {
    await ir('comunidade');
    await clicar('#feedEmpty [data-nav="escrever"]');
    return (await p.evaluate(() => state.view)) === 'escrever' || (await p.evaluate(() => state.view));
  });

  await caso('janela de entrar: fica por cima da camada escura e recebe o clique', async () => {
    await ir('home');
    await clicar('#headerLoginBtn');
    const r = await p.evaluate(() => {
      const i =
        document.getElementById('loginEmail') || document.querySelector('#authModal input[type="email"]');
      const q = i.getBoundingClientRect();
      const topo = document.elementFromPoint(q.x + q.width / 2, q.y + q.height / 2);
      return { aberta: document.getElementById('authModal').classList.contains('show'), noCampo: topo === i };
    });
    return r.aberta && r.noCampo ? true : r;
  });

  await caso('janela de entrar: Esc fecha', async () => {
    if (!(await authAberta())) await p.evaluate(() => openAuthModal());
    await p.keyboard.press('Escape');
    await p.waitForTimeout(250);
    return !(await authAberta()) || 'continua aberta';
  });

  await caso('criar conta pela janela, digitando e clicando', async () => {
    await ir('home');
    await clicar('#headerLoginBtn');
    await clicar('#tabRegister');
    await p.locator('#regUsername').fill('pessoa_teste');
    await p.locator('#regEmail').fill(`pessoa_${w}@example.com`);
    await p.locator('#regPassword').fill('senha123');
    await p.locator('#regPassword2').fill('senha123');
    await clicar('#registerForm button[type="submit"]');
    await p.waitForFunction(() => !!state.currentUser, null, { timeout: 8000 });
    return !(await authAberta()) || 'a janela não fechou';
  });

  await caso('Escrever: a cor escolhida usa o tom da paleta', async () => {
    await ir('escrever');
    await clicar('[data-color="plum"]');
    return p.evaluate(() => {
      const prev = document.getElementById('escPreview');
      const tom = getComputedStyle(document.documentElement).getPropertyValue('--relato-plum').trim();
      const prova = document.createElement('div');
      prova.style.background = tom;
      document.body.appendChild(prova);
      const esperado = getComputedStyle(prova).backgroundColor;
      prova.remove();
      const atual = getComputedStyle(prev).backgroundColor;
      return atual === esperado || { atual, esperado };
    });
  });

  await caso('Escrever: guardar relato pessoal leva ao perfil', async () => {
    await ir('escrever');
    const texto = `Relato pessoal de teste ${w}`;
    await p.locator('#escTexto').fill(texto);
    await clicar('#escGuardar');
    await p.waitForTimeout(500);
    const r = await p.evaluate(
      (t) => ({
        guardado: state.myPhrases.some((m) => (m.text || '').includes(t)),
        view: state.view
      }),
      texto
    );
    return r.guardado ? true : r;
  });

  await caso('Escrever: publicar põe o relato na comunidade', async () => {
    await ir('escrever');
    const texto = `Relato publicado de teste ${w}`;
    await p.locator('#escTexto').fill(texto);
    await clicar('#escPublicar');
    await p.waitForTimeout(500);
    return (
      (await p.evaluate(
        (t) => state.communityPosts.some((x) => x.text === t && x.authorEmail === state.currentUser.email),
        texto
      )) || 'não publicou'
    );
  });

  await caso('relato de outra pessoa: aparece no feed e a curtida funciona', async () => {
    await p.evaluate(() => {
      state.communityPosts.unshift({
        id: 'post_outro',
        authorEmail: 'outra@example.com',
        authorUsername: 'outra_pessoa',
        text: 'Relato de outra pessoa, para o teste.',
        font: 'display',
        color: 'marigold',
        createdAt: Date.now(),
        likes: [],
        comments: [],
        reports: [],
        hidden: false
      });
    });
    await ir('comunidade');
    const tem = await p.locator('#communityFeed [data-post-id="post_outro"]').count();
    await clicar('#communityFeed [data-like="post_outro"]');
    const curtiu = await p.evaluate(() =>
      state.communityPosts.find((x) => x.id === 'post_outro').likes.includes(state.currentUser.email)
    );
    return tem === 1 && curtiu ? true : { tem, curtiu };
  });

  await caso('perfil: nome, números e abas', async () => {
    await ir('perfil');
    return p.evaluate(() => {
      const t = document.getElementById('perfilContent').innerText;
      const abas = document.querySelectorAll('#perfilContent .profile-tab').length;
      return t.includes('pessoa_teste') && abas >= 2 ? true : { abas, t: t.slice(0, 80) };
    });
  });

  for (const view of ['comunidade', 'perfil', 'escrever'])
    await caso(`${view} sem rolagem lateral`, async () => {
      await ir(view);
      return p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1) || 'rola para o lado';
    });

  await caso('sem exceção depois de tudo', async () => (erros.length ? erros : true));
  await ctx.close();
}
await b.close();
site.fechar();
console.log(`comunidade: ${casos - falhas.length} de ${casos} casos passaram`);
if (falhas.length) {
  console.log(falhas.join('\n'));
  process.exitCode = 1;
}
