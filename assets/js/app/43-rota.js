/* O roteamento do site (Etapa 9 refeita, Portão B): o botão Voltar do navegador e o gesto de
   voltar do celular voltam de tela, na mesma altura em que a pessoa estava; o endereço mostra a
   tela (#explorar, #autor-machado-de-assis, #obra-…), e um link direto abre a tela certa.
   É o embrulho mais externo de navigateTo (os de app/24 e app/40 ficam por dentro). Também:
   o foco vai para o título da tela nova, o menu marca a tela com aria-current, o "Mais" fica
   marcado quando a tela está dentro dele, e os [data-nav] criados depois da carga funcionam.
   O endereço só serve para procurar o autor ou a obra num mapa: nunca vai para a página. */
(function () {
  const raiz = document.documentElement;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const TELAS = ['home', 'explorar', 'descubra', 'historias', 'comunidade', 'perfil', 'autores', 'escrever'];
  const NOMES = {
    home: 'Início',
    explorar: 'Explorar',
    descubra: 'Descubra',
    historias: 'Histórias',
    comunidade: 'Comunidade',
    perfil: 'Perfil',
    autores: 'Autores & Obras',
    escrever: 'Escrever'
  };
  // a página do autor e a da obra ficam dentro de Autores & Obras no menu
  const GRUPO = { panorama: 'autores', obra: 'autores' };
  const NO_MAIS = ['descubra', 'historias', 'comunidade', 'perfil'];

  const estadoDe = (view) => ({
    mm: 1,
    view,
    autor: view === 'panorama' ? panAtual : null,
    obra:
      view === 'obra' && obraAtual ? { oid: obraAtual.oid, autor: obraAtual.autor, t: obraAtual.t } : null,
    janelas: []
  });
  const mesma = (a, b) =>
    a.view === b.view && a.autor === b.autor && (a.obra && a.obra.oid) === (b.obra && b.obra.oid);
  const urlDe = (s) =>
    s.view === 'panorama' && s.autor
      ? '#autor-' + slugify(s.autor)
      : s.view === 'obra' && s.obra
        ? '#obra-' + slugify(s.obra.autor + '-' + s.obra.t)
        : s.view === 'home' || !TELAS.includes(s.view)
          ? location.pathname + location.search
          : '#' + s.view;
  // com uma janela aberta, a página está presa (lockScroll) e scrollY vale 0
  const yAtual = () => (document.body.classList.contains('modal-open') ? _scrollLockY : scrollY);

  function estadoDoHash(h) {
    const m = /^#(autor|obra)-([a-z0-9-]{1,160})$/.exec(h || '');
    if (m && m[1] === 'autor') {
      for (const nome of AUTOR_INDEX.keys())
        if (slugify(nome) === m[2]) return { view: 'panorama', autor: nome };
      return null;
    }
    if (m) {
      for (const o of Object.values(OBRA_POR_ID))
        if (o && slugify(o.autor + '-' + o.t) === m[2])
          return { view: 'obra', obra: { oid: o.oid, autor: o.autor, t: o.t } };
      return null;
    }
    const v = (h || '').slice(1);
    return v !== 'home' && TELAS.includes(v) ? { view: v } : null;
  }

  // ---------- foco, anúncio e menu ----------
  const aviso = document.createElement('div');
  aviso.className = 'visually-hidden';
  aviso.id = 'avisoTela';
  aviso.setAttribute('role', 'status');
  aviso.setAttribute('aria-live', 'polite');
  document.body.appendChild(aviso);
  function nomeDa(view) {
    if (view === 'panorama') return panAtual || '';
    if (view === 'obra') return (obraAtual && obraAtual.t) || '';
    return NOMES[view] || '';
  }
  function focar(view) {
    const tela = document.querySelector(`.view[data-view="${view}"]`);
    const ativo = document.activeElement;
    // quem está escrevendo (busca, texto) não perde o foco
    if (!tela || (ativo && ativo.matches('input, textarea, select, [contenteditable="true"]'))) return;
    const titulo = tela.querySelector('h1, .section-title, h2');
    if (titulo) {
      if (!titulo.hasAttribute('tabindex')) titulo.setAttribute('tabindex', '-1');
      titulo.focus({ preventScroll: true });
    }
    if (document.activeElement !== titulo) {
      aviso.textContent = '';
      requestAnimationFrame(() => (aviso.textContent = nomeDa(view)));
    }
  }
  function marcarMenu(view) {
    const v = GRUPO[view] || view;
    document
      .querySelectorAll('.site-header [data-nav], #mobileMenu [data-nav], .bottom-nav [data-nav]')
      .forEach((el) => {
        const sim = el.dataset.nav === v;
        el.classList.toggle('active', sim);
        sim ? el.setAttribute('aria-current', 'page') : el.removeAttribute('aria-current');
      });
    const mais = document.getElementById('bnMais');
    if (mais) mais.classList.toggle('active', NO_MAIS.includes(v));
  }

  // ---------- o embrulho de navigateTo ----------
  const _nav = navigateTo;
  let iniciado = false;
  let navegou = false;
  // na recarga, o navegador devolve o estado da entrada: o índice continua de onde estava
  let idxAtual = history.state && history.state.mm ? history.state.idx || 0 : 0;
  let restaurando = null; // { dir, y, sem } enquanto o Voltar ou o link direto refaz uma tela
  let ultimo = { ev: null, view: null };
  navigateTo = function (view) {
    const ev = window.event;
    // o mesmo clique chegando duas vezes (botões ligados em app/09 e de novo em app/18) troca uma vez só
    if (ev && ev === ultimo.ev && view === ultimo.view) return;
    ultimo = { ev, view };
    const novo = estadoDe(view);
    const atual = history.state && history.state.mm ? history.state : null;
    let mudou = true;
    if (!iniciado) {
      // a primeira tela (a home, no init): a entrada da recarga continua valendo até o acervo ficar pronto
      iniciado = true;
      if (!atual) history.replaceState({ ...novo, idx: 0 }, '', location.href);
      mudou = false;
    } else if (!restaurando) {
      if (!atual) history.replaceState({ ...novo, idx: idxAtual }, '', urlDe(novo));
      else if (mesma(atual, novo)) mudou = false;
      else {
        history.replaceState({ ...atual, y: yAtual() }, '');
        idxAtual = (atual.idx || 0) + 1;
        navegou = true;
        history.pushState({ ...novo, idx: idxAtual }, '', urlDe(novo));
      }
    }
    const rest = restaurando;
    const gesto =
      mudou &&
      (rest
        ? !rest.sem
        : !!(ev && ev.isTrusted && /^(click|keydown|keyup|pointerup|touchend)$/.test(ev.type)));
    const run = () => {
      _nav(view);
      Movimento.rolarJa(rest && rest.y != null ? rest.y : 0);
      if (rest && rest.y) recuperarAltura(rest.y);
      marcarMenu(view);
    };
    const t = Movimento.trocarTela(run, { gesto, dir: rest ? rest.dir : 'ir', view });
    if (!gesto) return;
    if (t)
      t.updateCallbackDone.then(
        () => focar(view),
        () => {}
      );
    else focar(view);
  };

  // a lista longa (rolagem infinita) cresce aos poucos: insiste até chegar à altura de antes
  function recuperarAltura(y) {
    let n = 0;
    let ultimoY = -1;
    let parado = 0;
    const passo = () => {
      if (Math.abs(scrollY - y) < 2 || ++n > 40) return;
      Movimento.rolarJa(y);
      dispatchEvent(new Event('scroll'));
      parado = scrollY === ultimoY ? parado + 1 : 0;
      ultimoY = scrollY;
      if (parado > 4) return;
      requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }

  function abrir(s) {
    if (s.view === 'panorama' && s.autor) abrirPanorama(s.autor);
    else if (s.view === 'obra' && s.obra && OBRA_POR_ID[s.obra.oid]) abrirObra(s.obra.oid);
    else navigateTo(TELAS.includes(s.view) ? s.view : 'home');
  }
  function refazer(s, rest) {
    restaurando = rest;
    try {
      abrir(s);
    } finally {
      restaurando = null;
    }
  }

  addEventListener('popstate', (e) => {
    const nosso = e.state && e.state.mm;
    const s = nosso ? e.state : estadoDoHash(location.hash) || { view: 'home' };
    const dir = nosso && e.state.idx < idxAtual ? 'voltar' : 'ir';
    idxAtual = nosso ? e.state.idx : idxAtual + 1;
    refazer(s, { dir, y: nosso && e.state.y != null ? e.state.y : 0 });
    // um endereço digitado à mão vira uma entrada nossa (a troca pode terminar no quadro seguinte:
    // vale o destino, não a tela de agora)
    if (!nosso) {
      const alvo = { mm: 1, autor: null, obra: null, janelas: [], ...s };
      history.replaceState({ ...alvo, idx: idxAtual }, '', urlDe(alvo));
    }
  });

  // "Voltar" da página do autor e da obra: volta de verdade no histórico, quando há para onde
  document.addEventListener(
    'click',
    (e) => {
      const b = e.target instanceof Element && e.target.closest('#panBack, #obraBack');
      if (!b || !(history.state && history.state.mm && history.state.idx > 0)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      history.back();
    },
    true
  );
  // [data-nav] criado depois da carga (os da carga já têm o clique; o repetido é ignorado acima)
  document.addEventListener('click', (e) => {
    const el = e.target instanceof Element && e.target.closest('[data-nav]');
    if (el && el.dataset.nav) navigateTo(el.dataset.nav);
  });

  // ---------- link direto e recarga: a tela certa depois do acervo pronto ----------
  const pendente =
    estadoDoHashSemDados(location.hash) ||
    !!(history.state && history.state.mm && history.state.view !== 'home');
  function estadoDoHashSemDados(h) {
    return /^#(autor|obra)-[a-z0-9-]{1,160}$/.test(h || '') || TELAS.includes((h || '').slice(1));
  }
  const soltar = () => {
    raiz.removeAttribute('data-rota-pendente');
    window.__rotaPronta = true;
  };
  if (pendente) {
    raiz.setAttribute('data-rota-pendente', '');
    setTimeout(soltar, 4000);
  }
  function rotearInicial() {
    const s = history.state;
    // a pessoa já navegou enquanto o acervo carregava: fica onde está
    if (!navegou) {
      const alvo = s && s.mm && s.view !== 'home' ? s : estadoDoHash(location.hash);
      if (alvo) {
        refazer(alvo, { dir: 'ir', y: alvo.y != null ? alvo.y : 0, sem: true });
        const agora = { mm: 1, autor: null, obra: null, janelas: [], ...alvo };
        history.replaceState({ ...agora, idx: idxAtual }, '', urlDe(agora));
      } else if (/^#(autor|obra)-/.test(location.hash))
        // endereço de autor ou obra que não existe (ou com caracteres que não são de um nome): fica a
        // home, com o endereço limpo
        history.replaceState({ ...estadoDe('home'), idx: idxAtual }, '', urlDe(estadoDe('home')));
    }
    soltar();
  }
  // ao sair ou recarregar, a altura da tela fica guardada na entrada
  addEventListener('pagehide', () => {
    if (history.state && history.state.mm) history.replaceState({ ...history.state, y: yAtual() }, '');
  });
  const cadeia = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof cadeia === 'function') cadeia.apply(this, arguments);
    setTimeout(rotearInicial, 0);
  };
})();
