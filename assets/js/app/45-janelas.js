/* As janelas do site (Etapa 9 refeita, Portão C; o CSS fica em telas/janelas.css).
   Um controle só para todas: frase ampliada, foto ampliada, história, entrar, "Mais", Publicados e
   Seguindo, editor de mídia, busca de música e os dois filtros (atuação e tradição). Ele observa a
   classe que cada uma já usa para abrir (.show ou .open), em vez de embrulhar as funções: várias
   estão ligadas por addEventListener com a referência original, e um embrulho não as alcançaria.
   Enquanto uma janela modal está aberta:
   - a página fica travada uma vez só (o contador antigo se perdia com aberturas repetidas e
     destravava a página com uma janela ainda aberta);
   - o resto da página fica inert: o foco e o leitor de tela não saem da janela;
   - Esc fecha só a de cima; clicar no fundo também fecha;
   - o foco entra nela e, ao fechar, volta para o que a abriu;
   - ela tem uma entrada no histórico (app/43): o Voltar do navegador e o gesto de voltar do celular
     fecham a janela em vez de trocar de tela.
   Os dois filtros são janelas leves (não modais): só Esc, clique fora e foco. */
(function () {
  const JANELAS = [
    { id: 'quoteExpand', classe: 'show', modal: true, fechar: () => closeQuoteModal() },
    { id: 'photoExpand', classe: 'show', modal: true, fechar: () => closePhotoModal() },
    { id: 'bioExpand', classe: 'show', modal: true, fechar: () => fecharBiografia() },
    { id: 'authModal', classe: 'show', modal: true, fechar: () => closeAuthModal() },
    { id: 'mobileMenu', classe: 'open', modal: true, fechar: () => closeMobileMenu(), semFundo: true },
    { id: 'sheetOverlay', classe: 'show', modal: true, fechar: () => fecharSheet() },
    { id: 'medOverlay', classe: 'show', modal: true, fechar: () => fecharEditor() },
    { id: 'musOverlay', classe: 'show', modal: true, fechar: () => fecharBuscaMusica() },
    { id: 'profilePanel', classe: 'open', modal: false, fechar: () => closeProfilePanel() },
    { id: 'traditionPanel', classe: 'open', modal: false, fechar: () => closeTraditionPanel() }
  ];
  const POR_ID = new Map(JANELAS.map((j) => [j.id, j]));
  // o que nunca fica inert: o aviso, o anúncio de tela e o fundo escuro do menu
  const LIVRES = ['toast', 'avisoTela', 'scrim'];
  const pilha = []; // as abertas, a de cima por último: { j, el, origem }
  const modais = () => pilha.filter((x) => x.j.modal);
  const aberta = (el, j) => el.classList.contains(j.classe);

  // ---------- a trava da página ----------
  const _travar = lockScroll;
  const _soltar = unlockScroll;
  let travada = false;
  // as funções antigas continuam sendo chamadas pelas janelas, mas quem decide agora é a pilha
  lockScroll = function () {};
  unlockScroll = function () {};
  function sincronizarTrava() {
    const precisa = modais().length > 0;
    if (precisa && !travada) {
      _travar();
      travada = true;
    } else if (!precisa && travada) {
      _soltar();
      travada = false;
    }
  }

  // ---------- inert: tudo fora da janela de cima ----------
  let inertes = [];
  function sincronizarInert() {
    inertes.forEach((el) => (el.inert = false));
    inertes = [];
    const topo = modais().at(-1);
    if (!topo) return;
    // em cada nível, do body até a janela, os irmãos do caminho ficam inert
    for (let el = topo.el; el && el !== document.body; el = el.parentElement)
      for (const irmao of el.parentElement ? el.parentElement.children : [])
        if (
          irmao !== el &&
          !irmao.inert &&
          !LIVRES.includes(irmao.id) &&
          !/^(SCRIPT|STYLE|svg)$/i.test(irmao.tagName)
        ) {
          irmao.inert = true;
          inertes.push(irmao);
        }
  }

  // ---------- foco ----------
  const FOCAVEL =
    '[autofocus], input:not([type="hidden"]), textarea, select, button, a[href], [tabindex]:not([tabindex="-1"])';
  function focarDentro(el) {
    requestAnimationFrame(() => {
      if (!el.isConnected || el.contains(document.activeElement)) return;
      const alvo = [...el.querySelectorAll(FOCAVEL)].find((x) => x.offsetParent !== null && !x.disabled);
      if (alvo) alvo.focus({ preventScroll: true });
      else {
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      }
    });
  }
  function devolverFoco(x) {
    const a = document.activeElement;
    if (a && a !== document.body && !x.el.contains(a)) return; // o foco já foi para outro lugar
    const o = x.origem;
    if (o && o.isConnected && o.offsetParent !== null) o.focus({ preventScroll: true });
  }

  // ---------- abrir e fechar (vistos pela classe) ----------
  let porVoltar = false; // fechando pelo Voltar do navegador: a entrada já saiu
  function abriu(j, el) {
    if (pilha.some((x) => x.el === el)) return;
    const origem = document.activeElement !== document.body ? document.activeElement : null;
    pilha.push({ j, el, origem });
    if (j.modal) {
      sincronizarTrava();
      sincronizarInert();
      if (window.Rota) Rota.abrirJanela(j.id);
    }
    focarDentro(el);
  }
  function fechou(j, el) {
    const i = pilha.findIndex((x) => x.el === el);
    if (i < 0) return;
    const [x] = pilha.splice(i, 1);
    if (j.modal) {
      sincronizarTrava();
      sincronizarInert();
      // a entrada sai depois do clique inteiro: se ele também trocou de tela, a troca reaproveita a
      // entrada (app/43) e não há o que tirar
      if (!porVoltar && window.Rota) queueMicrotask(() => Rota.fecharJanela(j.id));
    }
    devolverFoco(x);
  }
  function conferir(j, el) {
    if (aberta(el, j)) abriu(j, el);
    else fechou(j, el);
  }

  const vigiadas = new WeakSet();
  const observador = new MutationObserver((mudancas) => {
    for (const m of mudancas) {
      const j = POR_ID.get(m.target.id);
      if (j) conferir(j, m.target);
    }
  });
  function vigiar(el) {
    const j = el && POR_ID.get(el.id);
    if (!j || vigiadas.has(el)) return;
    vigiadas.add(el);
    observador.observe(el, { attributes: true, attributeFilter: ['class'] });
    if (!j.semFundo && j.modal)
      // clicar no fundo (fora da caixa) fecha
      el.addEventListener('click', (e) => e.target === el && aberta(el, j) && j.fechar());
    conferir(j, el);
  }
  JANELAS.forEach((j) => vigiar(document.getElementById(j.id)));
  // as janelas criadas depois (história, Publicados, editor, música) entram no body quando abrem
  new MutationObserver((mudancas) =>
    mudancas.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && vigiar(n)))
  ).observe(document.body, { childList: true });

  // ---------- Esc: só a de cima ----------
  addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Escape' || !pilha.length) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      pilha.at(-1).j.fechar();
    },
    true
  );

  window.Janelas = {
    aberta: () => modais().length > 0,
    // o Voltar do navegador (app/43): fecha a de cima sem mexer de novo no histórico
    fecharDoTopo() {
      const topo = modais().at(-1);
      if (!topo) return;
      porVoltar = true;
      try {
        topo.j.fechar();
        // a classe sai na hora, mas o observador só roda depois: o fechamento é tratado já
        if (!aberta(topo.el, topo.j)) fechou(topo.j, topo.el);
      } finally {
        porVoltar = false;
      }
    }
  };
})();
