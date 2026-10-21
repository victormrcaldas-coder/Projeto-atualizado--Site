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

  // a altura de volta vai por âncora: o elemento no alto da tela e a distância dele até o topo. Só o
  // scrollY não basta: as listas crescem aos poucos e partes da página medem diferente na volta
  const ATRIBUTOS = ['data-qid', 'data-indice', 'data-obra', 'data-autor', 'data-person', 'data-nav'];
  function seletorDe(el) {
    if (!el) return null;
    if (el.id) return '#' + CSS.escape(el.id);
    for (const a of ATRIBUTOS) if (el.hasAttribute(a)) return `[${a}="${CSS.escape(el.getAttribute(a))}"]`;
    return null;
  }
  const PROCURA = '[id], [' + ATRIBUTOS.join('], [') + ']';
  function ancoraDe(view) {
    const tela = document.querySelector(`.view[data-view="${view}"]`);
    if (!tela || document.body.classList.contains('modal-open')) return null;
    const cab = document.querySelector('.site-header');
    const topo = (cab ? cab.getBoundingClientRect().bottom : 0) + 16;
    // o item pequeno (um nome, um cartão) vale mais que a caixa grande em volta dele: a caixa pode
    // mudar de altura acima do ponto
    let reserva = null;
    for (const dy of [0, 48, 120, 240])
      for (const fx of [0.5, 0.25, 0.75]) {
        let el = document.elementFromPoint(innerWidth * fx, topo + dy);
        while (el && tela.contains(el) && el !== tela) {
          const sel = el.matches(PROCURA) ? seletorDe(el) : null;
          if (sel && tela.querySelector(sel) === el) {
            const a = { sel, off: Math.round(el.getBoundingClientRect().top) };
            if (!sel.startsWith('#') && el.getBoundingClientRect().height < innerHeight / 2) return a;
            reserva = reserva || a;
            break;
          }
          el = el.parentElement;
        }
      }
    return reserva;
  }
  function irParaAncora(view, a) {
    const tela = document.querySelector(`.view[data-view="${view}"]`);
    const el = a && tela && tela.querySelector(a.sel);
    if (!el) return false;
    // um grupo não desenhado (content-visibility) não sabe onde ficam os filhos: é desenhado antes
    for (let p = el.parentElement; p && p !== tela; p = p.parentElement)
      if (getComputedStyle(p).contentVisibility === 'auto') p.style.contentVisibility = 'visible';
    Movimento.rolarJa(scrollY + el.getBoundingClientRect().top - a.off);
    // o que está acima pode ainda mudar de altura no quadro seguinte (listas que se completam):
    // confere de novo quando a tela pousa, se a pessoa não rolou nesse meio tempo
    const y0 = scrollY;
    setTimeout(() => {
      const d = el.isConnected ? el.getBoundingClientRect().top - a.off : 0;
      if (Math.abs(d) > 2 && Math.abs(scrollY - y0) < 2) Movimento.rolarJa(scrollY + d);
    }, 520);
    return true;
  }
  // o que a pessoa tocou para sair da tela: no Voltar, o foco volta para ele
  function focoDe(ev) {
    const t = ev && ev.target instanceof Element ? ev.target : null;
    const el = t && t.closest('a, button, [tabindex]');
    return el && !el.closest('.site-header, .bottom-nav, #mobileMenu') ? seletorDe(el) : null;
  }

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
  // com a tela rolada, o foco vai para o primeiro item focável que está à vista (nunca um contêiner
  // nem o título lá no alto, fora da tela)
  const naTela = (el) => {
    const r = el.getBoundingClientRect();
    const cab = document.querySelector('.site-header');
    return r.height > 0 && r.top >= (cab ? cab.getBoundingClientRect().bottom : 0) && r.bottom <= innerHeight;
  };
  function focarVisivel(view) {
    const tela = document.querySelector(`.view[data-view="${view}"]`);
    const el =
      tela &&
      [
        ...tela.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ].find((x) => x.offsetParent !== null && !x.disabled && naTela(x));
    if (el) el.focus({ preventScroll: true });
    else focar(view);
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
  const alturas = new Map(); // idx da entrada → { y, ancora } mais recentes
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
      else if (atual.janela) {
        // a troca veio de dentro de uma janela ("Conhecer" na história): a entrada da janela vira a da
        // tela nova, e o Voltar dela vai para a tela de baixo, sem reabrir a janela
        navegou = true;
        idxAtual = atual.idx || 0;
        history.replaceState({ ...novo, idx: idxAtual }, '', urlDe(novo));
      } else if (mesma(atual, novo)) mudou = false;
      else {
        // a âncora tirada quando a rolagem parou ainda vale se a página não se mexeu: sem ler o layout
        // de novo no meio do toque (cada leitura ali custava um recálculo de estilo)
        const lembrada = alturas.get(atual.idx || 0);
        const y = Math.round(yAtual());
        const ancora =
          lembrada && lembrada.ancora && lembrada.y === y ? lembrada.ancora : ancoraDe(atual.view);
        history.replaceState({ ...atual, y, ancora, foco: focoDe(ev) }, '');
        alturas.set(atual.idx || 0, { y, ancora });
        idxAtual = (atual.idx || 0) + 1;
        navegou = true;
        // as entradas que estavam à frente deixam de existir
        for (const k of [...alturas.keys()]) if (k >= idxAtual) alturas.delete(k);
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
      if (rest && !irParaAncora(view, rest.ancora) && rest.y) recuperarAltura(rest.y);
      marcarMenu(view);
    };
    const t = Movimento.trocarTela(run, { gesto, dir: rest ? rest.dir : 'ir', view });
    if (!gesto) return;
    // no Voltar, o foco volta para o que a pessoa tinha tocado; senão, vai para o título da tela
    // sem o que foi tocado (saiu pelo menu, por exemplo), o foco vai para o item da âncora, que está
    // na tela, e não para o título lá no alto da página rolada
    const volta = () => {
      const tela = document.querySelector(`.view[data-view="${view}"]`);
      // o mesmo nome pode aparecer mais de uma vez (cartão e índice): vale o que está à vista; a
      // altura ainda pode ser acertada no quadro seguinte, então serve também o que está na tela nova
      const todos =
        rest && rest.dir === 'voltar' && rest.foco && tela
          ? [...tela.querySelectorAll(rest.foco)].filter((x) => x.offsetParent !== null)
          : [];
      const el = todos.find(naTela) || todos[0];
      if (el) el.focus({ preventScroll: true });
      else if (rest && scrollY > 0) focarVisivel(view);
      else focar(view);
    };
    if (t) t.updateCallbackDone.then(volta, () => {});
    else volta();
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

  // ---------- as janelas no histórico (app/45 avisa quando abre e fecha) ----------
  // cada janela modal ganha uma entrada no mesmo endereço; o Voltar fecha a janela de cima
  let ignorarPop = 0;
  window.Rota = {
    abrirJanela(id) {
      const st =
        history.state && history.state.mm ? history.state : { ...estadoDe(state.view), idx: idxAtual };
      if (!st.janela) history.replaceState({ ...st, y: yAtual(), ancora: ancoraDe(st.view) }, '');
      idxAtual = (st.idx || 0) + 1;
      history.pushState({ ...st, janela: id, idx: idxAtual }, '');
    },
    // fechada pelo X, pelo Esc ou pelo fundo: a entrada dela sai (a não ser que uma troca de tela já
    // a tenha reaproveitado)
    fecharJanela(id) {
      if (history.state && history.state.mm && history.state.janela === id) {
        ignorarPop++;
        history.back();
      }
    }
  };
  addEventListener('popstate', (e) => {
    if (ignorarPop) {
      ignorarPop--;
      if (e.state && e.state.mm) idxAtual = e.state.idx;
      return;
    }
    // Voltar com uma janela aberta: fecha a de cima e fica na mesma tela
    if (window.Janelas && Janelas.aberta() && !(e.state && e.state.mm && e.state.idx > idxAtual)) {
      if (e.state && e.state.mm) idxAtual = e.state.idx;
      Janelas.fecharDoTopo();
      return;
    }
    const nosso = e.state && e.state.mm;
    const s = nosso ? e.state : estadoDoHash(location.hash) || { view: 'home' };
    const dir = nosso && e.state.idx < idxAtual ? 'voltar' : 'ir';
    idxAtual = nosso ? e.state.idx : idxAtual + 1;
    const lembrada = nosso && alturas.get(e.state.idx);
    refazer(s, {
      dir,
      y: lembrada ? lembrada.y : nosso && e.state.y != null ? e.state.y : 0,
      // a âncora gravada só vale se a altura lembrada é a mesma de quando ela foi tirada
      ancora:
        lembrada && !lembrada.ancora && lembrada.y !== e.state.y
          ? null
          : nosso
            ? (lembrada && lembrada.ancora) || e.state.ancora
            : null,
      foco: nosso ? e.state.foco : null
    });
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
  // depois que a tela apareceu sem o link (o acervo demorou), qualquer uso conta: rolar, tocar, teclar
  let usou = false;
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((t) =>
    addEventListener(t, () => window.__rotaDesistiu && (usou = true), { capture: true, passive: true })
  );
  const soltar = () => {
    raiz.removeAttribute('data-rota-pendente');
    window.__rotaPronta = true;
  };
  // o script do <head> já escondeu a tela na primeira pintura; aqui só a garantia de 4 s
  if (!window.__rotaDesistiu && (pendente || raiz.hasAttribute('data-rota-pendente'))) {
    if (!raiz.hasAttribute('data-rota-pendente')) raiz.setAttribute('data-rota-pendente', 'tela');
    setTimeout(soltar, 12000);
  }
  function rotearInicial() {
    const s = history.state;
    // a pessoa já navegou enquanto o acervo carregava: fica onde está
    if (!navegou) {
      const alvo = s && s.mm && s.view !== 'home' ? s : estadoDoHash(location.hash);
      if (alvo && window.__rotaDesistiu && usou) {
        // a pessoa já está usando a home: não é arrancada dela; o endereço volta a ser o da home
        history.replaceState({ ...estadoDe('home'), idx: idxAtual }, '', urlDe(estadoDe('home')));
      } else if (alvo) {
        // se a tela já apareceu (o acervo demorou), a troca para o link é animada, como um toque
        refazer(alvo, {
          dir: 'ir',
          y: alvo.y != null ? alvo.y : 0,
          ancora: alvo.ancora,
          sem: !window.__rotaDesistiu
        });
        const agora = { mm: 1, autor: null, obra: null, janelas: [], ...alvo };
        history.replaceState({ ...agora, idx: idxAtual }, '', urlDe(agora));
      } else if (/^#(autor|obra)-/.test(location.hash))
        // endereço de autor ou obra que não existe (ou com caracteres que não são de um nome): fica a
        // home, com o endereço limpo
        history.replaceState({ ...estadoDe('home'), idx: idxAtual }, '', urlDe(estadoDe('home')));
    }
    soltar();
  }
  // a altura vai sendo guardada na entrada atual quando a rolagem para: assim o Avançar também
  // volta para onde a pessoa estava (no popstate a entrada de antes já não pode ser escrita)
  let guardar = 0;
  let lendo = false;
  addEventListener(
    'scroll',
    () => {
      // a altura de cada entrada fica também na memória, lida uma vez por quadro: o Avançar e o
      // Voltar usam a de agora, mesmo que a rolagem tenha parado há pouco
      if (!lendo) {
        lendo = true;
        requestAnimationFrame(() => {
          lendo = false;
          const st = history.state;
          if (
            st &&
            st.mm &&
            !restaurando &&
            !window.__emTroca &&
            !document.body.classList.contains('modal-open')
          )
            alturas.set(st.idx || 0, { y: Math.round(scrollY), ancora: null });
        });
      }
      clearTimeout(guardar);
      guardar = setTimeout(() => {
        const st = history.state;
        if (!st || !st.mm || restaurando || window.__emTroca) return;
        if (document.body.classList.contains('modal-open')) return;
        const a = ancoraDe(st.view);
        alturas.set(st.idx || 0, { y: Math.round(yAtual()), ancora: a });
        history.replaceState({ ...st, y: yAtual(), ancora: a }, '');
      }, 220);
    },
    { passive: true }
  );
  // ao sair ou recarregar, a altura da tela fica guardada na entrada
  addEventListener('pagehide', () => {
    if (history.state && history.state.mm)
      history.replaceState({ ...history.state, y: yAtual(), ancora: ancoraDe(history.state.view) }, '');
  });
  const cadeia = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof cadeia === 'function') cadeia.apply(this, arguments);
    setTimeout(rotearInicial, 0);
  };
})();
