/* As fotos e os filmes do acervo (Etapa 9 refeita, Portão C; os dados vêm das Fases 130 e 131, em
   curadoria/40 e 41, e o CSS fica em telas/midias.css).
   - Quem não tem retrato livre que sirva fica com a placa do nome, sem buscar a Wikipédia (que devolvia
     o mesmo arquivo quebrado ou outro pior). A foto pequena demais vale só nos tamanhos pequenos: no
     retrato grande, a placa, em vez de uma foto ampliada e borrada.
   - A página do autor dá o crédito da foto ("Foto: autor · licença", com o link do Commons) e, para
     quem tem filme de arquivo, o filme toca dentro da moldura do retrato: sem som, em duotono, só
     enquanto está na tela, com botão de pausa e o crédito do filme. Com movimento reduzido ou economia
     de dados, fica a foto e o botão de tocar. */
(function () {
  const reduz = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const economia = () => !!(navigator.connection && navigator.connection.saveData);
  const dados = (n) => (typeof PHOTOS !== 'undefined' && PHOTOS[canonAuthor(n)]) || null;
  const comPlaca = (n, largura) => {
    const p = dados(n);
    return !!p && (!!p.semFoto || (!!p.pequena && largura >= 500));
  };
  // "Luís de Camões" → "LC"; "Rumi" → "R"
  const iniciais = (n) => {
    const p = String(n)
      .split(/\s+/)
      .filter((x) => x && !/^(de|da|do|das|dos|e|von|van|der|di|du|la|le)$/i.test(x));
    return (p.length > 1 ? p[0][0] + p[p.length - 1][0] : (p[0] || '?')[0]).toUpperCase();
  };
  const licenca = (l) =>
    /^(public domain|pd\b|domínio público)/i.test(l || '') ? 'domínio público' : l || '';

  // ---------- a placa no lugar da foto ----------
  const _foto = photoImgHTML;
  photoImgHTML = function (name, ctx, width) {
    if (!comPlaca(name, width || 0)) return _foto.apply(this, arguments);
    // a imagem vazia falha na hora e mostra a placa que cada molde já tem ao lado
    return `<img src="${NO_IMG}" data-person="${escapeHtml(canonAuthor(name))}" data-sem-foto="1"
      alt="${escapeHtml(name)}" onerror="window.__photoFail(this)">`;
  };
  const _falha = window.__photoFail;
  window.__photoFail = function (img) {
    if (img.dataset.semFoto) return showInitials(img);
    return _falha.apply(this, arguments);
  };

  // ---------- a foto que chega: esmaece e assenta de 1,02 para 1 em 300 ms ----------
  // só a que ainda não tinha carregado quando entrou na página (a do cache aparece direto); a animação
  // é dada no load, então nenhuma foto fica escondida se um evento se perder
  new MutationObserver((mudancas) => {
    for (const m of mudancas)
      for (const n of m.addedNodes)
        if (n.nodeType === 1)
          (n.matches('img[data-person]') ? [n] : n.querySelectorAll('img[data-person]')).forEach(
            (i) => !i.complete && (i.dataset.chega = '1')
          );
  }).observe(document.body, { childList: true, subtree: true });
  document.addEventListener(
    'load',
    (e) => {
      const i = e.target;
      if (!(i instanceof HTMLImageElement) || !i.dataset.chega) return;
      delete i.dataset.chega;
      if (!reduz() && i.offsetParent !== null)
        i.animate(
          [
            { opacity: 0, transform: 'scale(1.02)' },
            { opacity: 1, transform: 'none' }
          ],
          { duration: 300, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
        );
    },
    true
  );

  // ---------- crédito e filme na página do autor ----------
  const _render = renderPanorama;
  renderPanorama = function () {
    const r = _render.apply(this, arguments);
    try {
      decorar(panAtual);
    } catch (e) {
      // um erro aqui não pode deixar a página do autor sem desenhar
      setTimeout(() => {
        throw e;
      });
    }
    return r;
  };

  function decorar(nome) {
    const fig = document.querySelector('#view-panorama .pan-retrato');
    if (!fig || !nome) return;
    const legenda = fig.querySelector('figcaption');
    const c = window.FOTO_CREDITOS && FOTO_CREDITOS[nome];
    if (comPlaca(nome, 900)) {
      // a placa grande mostra as iniciais (o nome já está no título ao lado) e diz por que não há foto
      const placa = fig.querySelector('#panPhoto .avatar-fallback');
      if (placa) {
        placa.classList.add('placa-iniciais');
        placa.innerHTML = `<span aria-hidden="true">${escapeHtml(iniciais(nome))}</span>`;
      }
      if (legenda) legenda.textContent = 'Sem retrato de licença livre';
    } else if (legenda && c) {
      const link = urlMidiaSegura(c.pagina);
      const autor = escapeHtml(c.autor || 'autor desconhecido');
      legenda.innerHTML = `Foto: ${link ? `<a href="${link}" target="_blank" rel="noopener">${autor}</a>` : autor} · ${escapeHtml(licenca(c.licenca))}`;
    }
    const f = window.FILMES_DE_ARQUIVO && FILMES_DE_ARQUIVO[nome];
    if (f && !comPlaca(nome, 900)) filme(nome, f, fig);
  }

  // um observador só para os filmes: toca quando metade do quadro está na tela
  const visiveis = new IntersectionObserver(
    (entradas) => entradas.forEach((e) => e.target.__filme && e.target.__filme(e.isIntersecting)),
    { threshold: 0.5 }
  );

  function filme(nome, f, fig) {
    const quadro = fig.querySelector('#panPhoto');
    if (!quadro) return;
    const v = document.createElement('video');
    v.className = 'pan-filme';
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = 'none';
    v.setAttribute('aria-hidden', 'true');
    v.poster = f.poster;
    // H.264 para Safari e Chrome; VP9 para os navegadores sem os codecs proprietários
    for (const [src, tipo] of [
      [f.mp4, 'video/mp4'],
      [f.webm, 'video/webm']
    ])
      if (src) {
        const s = document.createElement('source');
        s.src = src;
        s.type = tipo;
        v.appendChild(s);
      }
    quadro.appendChild(v);

    const linha = document.createElement('div');
    linha.className = 'pan-filme-linha';
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'pan-filme-botao';
    const link = urlMidiaSegura(f.pagina);
    const quando = f.ano ? `Filme de ${f.ano}` : 'Filme de arquivo';
    const texto = `${escapeHtml(quando)} · ${escapeHtml(licenca(f.licenca))} · ${link ? `<a href="${link}" target="_blank" rel="noopener">Wikimedia Commons</a>` : 'Wikimedia Commons'}`;
    linha.innerHTML = `<span class="pan-filme-credito">${texto}</span>`;
    linha.prepend(botao);
    fig.appendChild(linha);

    // quem pausou fica pausado; sem movimento (ou com economia de dados) o filme só toca se a pessoa pedir
    let escolha = reduz() || economia() ? 'parado' : null;
    let naTela = false;
    const marcar = () => {
      const tocando = !v.paused;
      botao.setAttribute('aria-label', tocando ? `Pausar o filme de ${nome}` : `Tocar o filme de ${nome}`);
      botao.dataset.estado = tocando ? 'tocando' : 'parado';
    };
    const tocar = () => {
      const p = v.play();
      if (p) p.catch(() => {}); // sem permissão para tocar: fica a foto
    };
    const decidir = () => {
      if (naTela && escolha !== 'parado' && !document.hidden) tocar();
      else v.pause();
    };
    v.addEventListener('playing', () => {
      v.classList.add('tocando');
      marcar();
    });
    v.addEventListener('pause', marcar);
    botao.addEventListener('click', () => {
      escolha = v.paused ? 'tocar' : 'parado';
      if (escolha === 'tocar') tocar();
      else v.pause();
    });
    quadro.__filme = (sim) => {
      naTela = sim;
      decidir();
    };
    quadro.__decidir = decidir;
    marcar();
    // o filme entra depois que o retrato pousou e a cor chegou (app/42)
    setTimeout(() => quadro.isConnected && visiveis.observe(quadro), 1200);
  }
  // a aba escondida pausa; ao voltar, cada filme decide de novo
  document.addEventListener('visibilitychange', () =>
    document.querySelectorAll('#panPhoto').forEach((q) => q.__decidir && q.__decidir())
  );
})();
