/* A gramática do movimento no site (Etapa 9 refeita, Portão B em diante; os tokens ficam em
   01-tokens.css e o CSS em telas/movimento.css).
   - A troca de tela é uma View Transition só quando a pessoa pediu (clique, toque, tecla ou o
     Voltar do navegador): a tela que sai esmaece, a que entra sobe 8 px. Toda troca feita por
     código continua instantânea e síncrona, porque partes do site leem a tela nova na linha seguinte.
   - O retrato que a pessoa tocou vira o retrato da página do autor (como no Brik), e a cor só
     chega quando ele pousa: "a cor chega quando você chega à pessoa". O título da obra vira o
     título da página da obra.
   - Sem o recurso no navegador, a tela nova só esmaece (sem transform: um transform em .view
     quebraria os elementos fixos de dentro das telas). Com movimento reduzido, só esmaece, rápido.
   - Corrige a volta da rolagem ao fechar uma janela: com scroll-behavior: smooth, a página rolava
     do topo até onde estava. */
(function () {
  const raiz = document.documentElement;
  const temVT = typeof document.startViewTransition === 'function';
  const reduz = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));

  // rolar na hora, mesmo com scroll-behavior: smooth no html ('instant' passa por cima do CSS;
  // trocar o scroll-behavior do html recalculava o estilo da página inteira, 80 ms a cada vez)
  function rolarJa(y) {
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  }
  const _destravar = unlockScroll;
  const _rolar = window.scrollTo;
  unlockScroll = function () {
    window.scrollTo = (x, y) =>
      typeof x === 'object' ? _rolar.call(window, { ...x, behavior: 'instant' }) : rolarJa(y);
    try {
      return _destravar.apply(this, arguments);
    } finally {
      window.scrollTo = _rolar;
    }
  };

  // o último elemento que a pessoa tocou: é de onde a transição parte (vale por 600 ms)
  let origem = null;
  let quando = 0;
  const marcar = (e) => {
    if (!(e.target instanceof Element)) return;
    origem = e.target;
    quando = performance.now();
  };
  document.addEventListener('pointerdown', marcar, true);
  document.addEventListener('click', marcar, true);
  document.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && marcar(e), true);
  const tomarOrigem = () => (performance.now() - quando < 600 ? origem : null);

  const naTela = (el) => {
    if (!el || !el.isConnected) return false;
    const r = el.getBoundingClientRect();
    return (
      r.width > 8 && r.height > 8 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth
    );
  };
  // as partes com content-visibility: auto de uma tela que acabou de aparecer medem zero até o
  // próximo quadro: as que estão na tela (ou envolvem o destino) são desenhadas já, para a foto da
  // tela nova não sair com vãos, e soltas no fim da troca
  function desenhar(el, soltos) {
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement)
      if (getComputedStyle(a).contentVisibility === 'auto') {
        a.style.contentVisibility = 'visible';
        soltos.push(a);
      }
    return el;
  }
  function desenharVisiveis(view, soltos) {
    const t = tela(view);
    if (!t) return;
    t.querySelectorAll('.retrato').forEach((r) => {
      const c = r.getBoundingClientRect();
      if (c.right > -40 && c.left < innerWidth + 40 && c.bottom > 0 && c.top < innerHeight) {
        r.style.contentVisibility = 'visible';
        soltos.push(r);
      }
    });
  }

  // os pares "o que a pessoa tocou → o que abre"; o nome da transição vai só nos dois. O retrato
  // viaja de imagem para imagem (sem a moldura de nenhum dos lados, que aparecia de repente)
  const tela = (v) => document.querySelector(`.view[data-view="${v}"]`);
  const fotoDoAutor = () => document.querySelector('#panPhoto img[data-person]:not(.mm-provisoria)');
  const PARES = {
    panorama(o) {
      const nome = panAtual;
      // do filme do Descubra não há elemento que viaja: o filme mostra o rosto num enquadramento
      // diferente do retrato da página, e qualquer passagem entre os dois deformava o rosto. Fica a
      // troca de tela limpa.
      if (o.closest('.filme')) return null;
      const caixa = o.closest(
        '.ao-card, .retrato, .abertura, .quote-card, .expand-quote, .bio-sheet, .story-card, .historia-destaque, .descubra-palco, article, li'
      );
      const img =
        caixa &&
        [...caixa.querySelectorAll('img[data-person]')].find(
          (i) => i.dataset.person === nome && i.naturalWidth && naTela(i)
        );
      if (img) return { nome: 'mm-destaque', fonte: img, destino: fotoDoAutor, retrato: true };
      // sem retrato na origem (o nome no índice, um link de texto): o nome vira o título da página
      const texto = o.closest('[data-indice], [data-autor], .author-name, a, button');
      if (texto && naTela(texto) && texto.textContent.trim() === nome)
        return {
          nome: 'mm-titulo',
          fonte: texto,
          destino: () => document.querySelector('#view-panorama .pan-name')
        };
      return null;
    },
    obra(o) {
      const cartao = o.closest('.obra-card');
      const fonte = cartao && cartao.querySelector('.obra-title');
      if (!naTela(fonte)) return null;
      return { nome: 'mm-titulo', fonte, destino: () => document.querySelector('#view-obra .obra-h1') };
    }
  };

  // no Voltar o caminho se inverte: o retrato grande volta para o cartão de onde veio (e a cor fica
  // com a página da pessoa), o título da obra volta para o cartão da obra
  const VOLTAS = {
    panorama(view, soltos) {
      const nome = panAtual;
      const fonte = document.querySelector('#panPhoto img.mm-provisoria') || fotoDoAutor();
      if (!nome || !naTela(fonte)) return null;
      // o destino é o quadro do cartão (com o recorte dele), não só a imagem de dentro
      const destino = () => {
        const i = [...(tela(view) || document).querySelectorAll('img[data-person]')].find(
          (i) => i.dataset.person === nome && i.naturalWidth && naTela(desenhar(i, soltos))
        );
        return i ? i.closest('.quadro') || i : null;
      };
      return { nome: 'mm-destaque', fonte, destino };
    },
    obra(view) {
      const oid = obraAtual && obraAtual.oid;
      const fonte = document.querySelector('#view-obra .obra-h1');
      if (!oid || !naTela(fonte)) return null;
      const destino = () => {
        const b = (tela(view) || document).querySelector(
          `.obra-card [data-obra="${CSS.escape(String(oid))}"]`
        );
        const t = b && b.closest('.obra-card').querySelector('.obra-title');
        return naTela(t) ? t : null;
      };
      return { nome: 'mm-titulo', fonte, destino };
    }
  };

  // o retrato chega em duotono, com a foto que já estava carregada (a da origem), e a cor revela
  // depois; é a provisória que pousa
  async function prepararRetrato(par, real) {
    const daFonte = par.fonte.tagName === 'IMG' ? par.fonte : par.fonte.querySelector('img');
    if (!daFonte || !daFonte.currentSrc) return null;
    const prov = document.createElement('img');
    prov.className = 'mm-provisoria';
    prov.alt = '';
    prov.setAttribute('aria-hidden', 'true');
    prov.src = daFonte.currentSrc;
    prov.style.objectPosition = real.style.objectPosition;
    real.after(prov);
    // a foto já está no cache: a decodificação é curta e não pode segurar a troca
    await Promise.race([prov.decode ? prov.decode().catch(() => {}) : null, espera(24)]);
    return { prov, real };
  }
  function revelarCor(x) {
    if (!x) return;
    let feito = false;
    const sumir = () => {
      if (feito) return;
      feito = true;
      x.prov
        .animate(
          { opacity: [1, 0] },
          { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
        )
        .finished.catch(() => {})
        .finally(() => x.prov.remove());
    };
    if (x.real.complete && x.real.naturalWidth) sumir();
    else {
      x.real.addEventListener('load', sumir, { once: true });
      setTimeout(sumir, 2500); // a foto grande que não chega não prende a provisória
    }
  }

  // o título que cresce viaja dentro de um span que abraça só as letras (inline-block): as duas pontas
  // ficam com a mesma proporção e o texto não escorrega na vertical. O span sai no fim.
  function envolver(el) {
    if (el.firstElementChild && el.firstElementChild.classList.contains('mm-letras'))
      return el.firstElementChild;
    const s = document.createElement('span');
    s.className = 'mm-letras';
    while (el.firstChild) s.appendChild(el.firstChild);
    el.appendChild(s);
    return s;
  }
  function desenvolver(s) {
    const el = s && s.parentNode;
    if (!el || !s.classList.contains('mm-letras')) return;
    while (s.firstChild) el.insertBefore(s.firstChild, s);
    s.remove();
  }

  let atual = null;
  // cada troca recebe um número: a atualização de uma troca pulada por outra mais nova não roda
  // (o navegador ainda a chama, às vezes depois da nova, e a tela voltaria para a de antes)
  let vez = 0;
  // troca de tela: run() faz a troca de verdade (navigateTo); devolve a transição, se houver
  function trocarTela(run, { gesto = false, dir = 'ir', view } = {}) {
    const minha = ++vez;
    if (!gesto || !temVT || reduz() || document.visibilityState !== 'visible') {
      run();
      if (gesto) {
        const tela = document.querySelector(`.view[data-view="${view}"]`);
        if (tela && tela.animate)
          tela.animate(
            { opacity: [0, 1] },
            { duration: reduz() ? 120 : 360, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
          );
      }
      return null;
    }
    if (atual) atual.skipTransition();
    const o = tomarOrigem();
    const de = typeof state !== 'undefined' && state.view;
    const soltos = [];
    const par =
      dir === 'voltar'
        ? VOLTAS[de] && de !== view
          ? VOLTAS[de](view, soltos)
          : null
        : o && PARES[view]
          ? PARES[view](o)
          : null;
    if (par && par.nome === 'mm-titulo') par.fonte = envolver(par.fonte);
    if (par) par.fonte.style.viewTransitionName = par.nome;
    // onde o retrato começa: a coluna de texto da página nova é recortada pela borda dele (abaixo)
    const r0 = par && par.nome === 'mm-destaque' ? par.fonte.getBoundingClientRect() : null;
    let corte = null;
    // saindo do filme do Descubra, o filme tem a própria saída (cortina, telas/movimento.css)
    // a seção inteira (o filme e a borda dele), para não sobrar uma faixa do roxo esmaecendo
    const filme = !par && o && o.closest('.filme') && (o.closest('#home-descubra') || o.closest('.filme'));
    if (filme) filme.style.viewTransitionName = 'mm-filme';
    // o que foi tocado fica marcado até a animação começar (o :active acaba quando o dedo solta)
    const tocado = o && o.closest('button, a, [role="button"]');
    if (tocado) tocado.classList.add('mm-tocado');
    let nomeDaPessoa = null;
    let destino = null;
    let retrato = null;
    const update = async () => {
      if (par) par.fonte.style.viewTransitionName = '';
      if (minha !== vez) return;
      run();
      desenharVisiveis(view, soltos);
      // a foto da página do autor não pode pousar aos pedaços: saindo do filme, ela chega com a foto
      // do filme (a mesma pessoa, já decodificada), e a versão da página entra na revelação da cor;
      // nos outros casos, espera a decodificação (até 120 ms)
      const foto = view === 'panorama' && !(par && par.retrato) && fotoDoAutor();
      const doFilme = filme && filme.querySelector('.filme-plano.ativo img');
      if (foto && doFilme && doFilme.currentSrc) {
        retrato = await prepararRetrato({ fonte: doFilme }, foto);
        if (retrato) retrato.real.style.visibility = 'hidden';
      } else if (foto && foto.decode) await Promise.race([foto.decode().catch(() => {}), espera(120)]);
      destino = par && par.destino();
      if (!destino) return;
      if (par.retrato) {
        retrato = await prepararRetrato(par, destino);
        if (retrato) {
          destino = retrato.prov;
          // a foto colorida fica escondida enquanto a provisória voa: sem ela, aparecia o retrato
          // duas vezes (o que voa e o que já estava no lugar)
          retrato.real.style.visibility = 'hidden';
        }
      }
      if (par.nome === 'mm-titulo') destino = envolver(destino);
      destino.style.viewTransitionName = par.nome;
      // a coluna do nome e do texto entra por cima do retrato que pousa, um pouco depois dele: o
      // retrato em voo nunca corta o texto
      if (par.nome === 'mm-destaque' && view === 'panorama') {
        nomeDaPessoa = document.querySelector('#view-panorama .pan-id');
        if (nomeDaPessoa) {
          nomeDaPessoa.style.viewTransitionName = 'mm-nome';
          // a coluna aparece à direita da borda do retrato (embaixo dela, no celular), que anda junto
          // com ele: a letra nunca fica sobre a foto nem cortada no ar
          const r1 = destino.getBoundingClientRect();
          const c = nomeDaPessoa.getBoundingClientRect();
          if (r0 && c.left >= r1.right - 2) {
            const a = Math.max(0, r0.right - c.left);
            const b = Math.max(0, r1.right - c.left);
            corte = [`inset(0 0 0 ${a}px)`, `inset(0 0 0 ${b}px)`];
          } else if (r0 && c.top >= r1.bottom - 2) {
            const a = Math.max(0, r0.bottom - c.top);
            const b = Math.max(0, r1.bottom - c.top);
            corte = [`inset(${a}px 0 0 0)`, `inset(${b}px 0 0 0)`];
          }
        }
      }
    };
    // "em troca" é uma marca no JS: um atributo no html recalculava o estilo da página inteira (o CSS
    // usa :active-view-transition, que o navegador já liga)
    window.__emTroca = true;
    // o sentido vai no tipo da transição (:active-view-transition-type no CSS); só o navegador sem
    // tipos recebe o atributo, que custa um recálculo do estilo da página inteira
    let t;
    try {
      t = document.startViewTransition({
        update,
        types: [dir]
      });
    } catch (e) {
      raiz.dataset.vtDir = dir;
      t = document.startViewTransition(update);
    }
    atual = t;
    t.ready.then(
      () => {
        if (tocado) tocado.classList.remove('mm-tocado');
        // o recorte da coluna anda com a borda do retrato: mesma duração e curva do voo dele
        if (corte)
          raiz.animate(
            { clipPath: corte },
            {
              duration: 340,
              easing: 'cubic-bezier(0.2, 0, 0, 1)',
              fill: 'both',
              pseudoElement: '::view-transition-new(mm-nome)'
            }
          );
      },
      () => {}
    );
    // um erro de verdade na troca continua aparecendo, como antes da transição
    t.updateCallbackDone.catch((e) =>
      setTimeout(() => {
        throw e;
      })
    );
    t.finished
      .catch(() => {})
      .finally(() => {
        if (par) par.fonte.style.viewTransitionName = '';
        if (filme) filme.style.viewTransitionName = '';
        if (tocado) tocado.classList.remove('mm-tocado');
        if (nomeDaPessoa) nomeDaPessoa.style.viewTransitionName = '';
        soltos.forEach((a) => (a.style.contentVisibility = ''));
        if (destino) destino.style.viewTransitionName = '';
        if (par && par.nome === 'mm-titulo') {
          desenvolver(par.fonte);
          desenvolver(destino);
        }
        if (retrato) retrato.real.style.visibility = '';
        revelarCor(retrato);
        if (atual === t) {
          atual = null;
          window.__emTroca = false;
          if (raiz.dataset.vtDir) delete raiz.dataset.vtDir;
          // o cabeçalho, que esperou a troca, confere a altura da página de novo
          dispatchEvent(new Event('scroll'));
        }
      });
    return t;
  }

  // durante a troca o Chromium entrega o clique ao html (a camada da transição fica por cima, mesmo
  // com pointer-events: none): o clique pula a animação e chega ao que está embaixo do dedo, na hora
  document.addEventListener(
    'click',
    (e) => {
      if (!atual || e.target !== raiz) return;
      const { clientX: x, clientY: y } = e;
      const t = atual;
      t.skipTransition();
      t.finished
        .catch(() => {})
        .finally(() => {
          // o ponto pode cair num ícone (svg, sem click()): vale o botão ou link em volta
          const el = document.elementFromPoint(x, y);
          const alvo = el && el.closest('a, button, input, label, summary, [data-nav], [role="button"]');
          if (alvo) alvo.click();
          else if (el && el !== raiz && el !== document.body)
            el.dispatchEvent(
              new MouseEvent('click', { bubbles: true, cancelable: true, clientX: x, clientY: y })
            );
        });
    },
    true
  );

  window.Movimento = { reduz, rolarJa, trocarTela };
})();
