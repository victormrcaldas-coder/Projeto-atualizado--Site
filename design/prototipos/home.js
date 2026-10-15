/* MeMotiva · protótipo da home (Etapa 4a do redesign). Fora do site.
   Monta as seções de home.html com o conteúdo real de amostra.js e cuida do comportamento:
   frase ao acaso, galeria de autores (setas, teclado e arrastar), Descubra (troca lenta com pausa)
   e índice de histórias (uma aberta por vez). Tudo que vem dos dados passa por esc().
   Depende de comum.js (window.Proto) e sistema.js (window.Sistema). */
(function () {
  'use strict';
  const { A, FRASES, esc, amarrar, semQuebrarDatas, comAspas, autor, imagem, credito, linguaDoOriginal } =
    window.Proto;
  const { comprimento, quadro, ehDitado } = window.Sistema;
  const H = A.home;
  const $ = (id) => document.getElementById(id);
  const num = (n) => n.toLocaleString('pt-BR');
  const plural = (n, um, varios) => `${num(n)} ${n === 1 ? um : varios}`;
  const texto = (s) => amarrar(esc(s)); // texto de interface ou do acervo, escapado e sem palavra solta no fim da linha
  const papel = (s) => semQuebrarDatas(texto(s));
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const conferida = (f) => (f.status === 'A' ? '<span class="conferida">fonte conferida</span>' : '');
  const ICONE = {
    pausa:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="5" width="3.6" height="14" rx="0.6"/><rect x="13.9" y="5" width="3.6" height="14" rx="0.6"/></svg>',
    tocar:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.2v13.6a.6.6 0 0 0 .9.5l10.6-6.8a.6.6 0 0 0 0-1L8.9 4.7a.6.6 0 0 0-.9.5Z"/></svg>',
    ouvir:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5v5h3.5L12 19V5L7.5 9.5H4Z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.6 6a8.6 8.6 0 0 1 0 12"/></svg>'
  };

  /* ---------- A. abertura: a frase de hoje ---------- */
  const hoje = FRASES.q1gsfz1k16xaa3h; // Liev Tolstói, Anna Kariênina: foto grande, fonte conferida, original em russo
  const ah = autor(hoje.autor);
  const lingua = linguaDoOriginal(hoje.original);
  $('abertura').innerHTML = `
    <figure class="prancha">
      <div class="prancha-foto" role="button" tabindex="0" data-ampliar-foto="${esc(ah.nome)}" aria-label="Ampliar a fotografia de ${esc(ah.nome)}">${quadro(ah, 900)}</div>
      <figcaption>${esc(credito(ah))}</figcaption>
    </figure>
    <div class="parede">
      <p class="eyebrow rotulo">Frase de hoje · <time data-hoje></time></p>
      <h1 class="nome-autor nome-condensado"><a href="#autores">${esc(ah.nome)}</a></h1>
      <p class="quote-hero-text"${comprimento(hoje.texto)}>${comAspas(hoje.texto)}</p>
      <dl class="quote-label">
        <dt>Obra</dt><dd><span class="obra">${texto(hoje.fonte)}</span>${conferida(hoje)}</dd>
        <dt>Autor</dt><dd>${papel(ah.papel)}</dd>
        ${hoje.original ? `<dt>Original</dt><dd><p class="quote-original"${lingua ? ` lang="${lingua}"` : ''}>${esc(hoje.original)}</p></dd>` : ''}
      </dl>
    </div>`;
  $('faixa').innerHTML = `<b>Fonte</b><span class="obra">${texto(hoje.fonte)}</span>${conferida(hoje)}<button class="btn-text" type="button" data-abrir="${esc(hoje.qid)}">Abrir a frase</button>`;

  /* ---------- C. explorar: os números do acervo e os temas ---------- */
  const c = H.contagens;
  $('t-explorar').innerHTML = `<b>${num(c.frases)}</b> frases de <b>${num(c.autores)}</b> autores, em <b>${num(c.temas)}</b> temas.`;
  $('acervoNota').innerHTML = texto(`${num(c.verificadas)} com a fonte conferida e ${num(c.obras)} obras catalogadas.`);
  const temas = [...H.temas].sort((x, y) => x.nome.localeCompare(y.nome, 'pt-BR'));
  const indice = $('indiceTemas');
  // duas colunas de leitura (de cima para baixo), com as linhas alinhadas entre as colunas
  indice.style.setProperty('--linhas', Math.ceil(temas.length / 2));
  indice.innerHTML = temas
    .map(
      (t) => `<li><a href="#explorar" data-tema="${esc(t.id)}"><span class="tema-nome">${esc(t.nome)}</span>
        <span class="tema-n">${num(t.n)}<span class="sr-only"> ${t.n === 1 ? 'frase' : 'frases'}</span></span></a></li>`
    )
    .join('');

  /* ---------- B. uma frase ao acaso ---------- */
  const ACASO = [
    'f341010dah84', // Fernando Pessoa
    'ql0t0xvhg9dsn', // Blaise Pascal
    'q46feecn4mlr7', // Sêneca
    'f282h8ph4xa', // Anne Frank
    'q1buuxco78ji9v', // Maya Angelou
    'f28335mu5ay', // Marielle Franco
    'f74104v6eed', // Miguel de Cervantes
    'f28asxuhfb', // Guimarães Rosa, frase longa
    'qmavfjkqarqzo', // Machado de Assis
    'f28tdbfmcs', // Clarice Lispector
    'q4nnaf81ajlbj5' // ditado popular, sem autor nem fonte
  ].filter((q) => FRASES[q]);
  let acasoAtual = ACASO[0];
  function mostrarAcaso(qid) {
    const f = FRASES[qid];
    const a = autor(f.autor);
    acasoAtual = qid;
    $('acasoFrase').innerHTML = `
      <blockquote><p class="quote-poster-text"${comprimento(f.texto)}>${comAspas(f.texto)}</p></blockquote>
      <figcaption class="acaso-autor">
        <span class="nome-condensado">${esc(ehDitado(f) ? 'Ditado popular' : a.nome)}</span>
        ${f.fonte ? `<cite>${texto(f.fonte)}</cite>` : ''}${conferida(f)}
        <button class="btn-text" type="button" data-abrir="${esc(f.qid)}">Ampliar a frase</button>
      </figcaption>`;
  }
  mostrarAcaso(acasoAtual);
  $('outraFrase').addEventListener('click', () => {
    const outras = ACASO.filter((q) => q !== acasoAtual);
    mostrarAcaso(outras[Math.floor(Math.random() * outras.length)]);
  });

  /* ---------- E. descubra: um autor por vez ---------- */
  const D = H.descubra;
  const secaoD = $('descubra');
  const slide = $('descubraSlide');
  const retratoD = $('descubraRetrato');
  const progresso = $('descubraProgresso');
  const botaoPausa = $('descubraPausa');
  progresso.innerHTML = D.map(() => '<span><i></i></span>').join('');
  let atual = 0;
  function montarDescubra(n) {
    const d = D[n];
    const a = autor(d.nome);
    const f = d.qid ? FRASES[d.qid] : null;
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'autor');
    slide.setAttribute('aria-label', `${n + 1} de ${D.length}: ${d.nome}`);
    slide.innerHTML = `
      <div class="descubra-cabeca"><h2 class="eyebrow rotulo" id="t-descubra">Descubra</h2><span class="eyebrow">${n + 1} de ${D.length}</span></div>
      <h3 class="descubra-nome nome-condensado">${esc(d.nome)}</h3>
      <p class="descubra-papel">${papel(a.papel)}</p>
      <p class="descubra-resumo">${texto(d.resumo)}</p>
      ${
        f
          ? `<figure class="descubra-frase"><blockquote><p class="quote-text"${comprimento(f.texto)}>${comAspas(f.texto)}</p></blockquote>
              <figcaption><cite>${texto(f.fonte)}</cite>${conferida(f)}</figcaption></figure>`
          : d.historia
            ? `<p class="descubra-historia"><span class="eyebrow">História</span> ${texto(d.historia.titulo)}</p>`
            : ''
      }
      <div class="secao-acoes">
        ${d.historia ? '<a class="btn-text" href="#historias">Ler a história</a>' : ''}
        <a class="btn-text" href="#autores">Conhecer ${esc(d.nome)}</a>
      </div>`;
    retratoD.innerHTML = a.foto
      ? `<div class="quadro">${imagem(a, { largura: 900, larguras: [600, 900], tamanhos: '(min-width: 1024px) 420px, 100vw' })}</div>
         <figcaption>${esc(credito(a))}</figcaption>`
      : `<div class="quadro tipografico"><span class="nome-condensado" aria-hidden="true">${esc(d.nome)}</span></div>`;
    [...progresso.children].forEach((s, i) => {
      s.className = i < n ? 'lido' : i === n ? 'atual' : '';
    });
  }
  function irPara(n, manual) {
    const novo = (n + D.length) % D.length;
    slide.setAttribute('aria-live', manual ? 'polite' : 'off');
    const trocar = () => {
      atual = novo;
      montarDescubra(novo);
      slide.classList.remove('trocando');
      retratoD.classList.remove('trocando');
    };
    if (reduz) return trocar();
    slide.classList.add('trocando');
    retratoD.classList.add('trocando');
    setTimeout(trocar, 220);
  }
  // A troca automática segue o traço de progresso (animação CSS): pausar a animação pausa a troca.
  // Pausa com o mouse em cima, com o foco dentro, ao selecionar texto, fora da tela ou pelo botão.
  // No toque, a pessoa assume o controle: fica pausado até ela tocar em "retomar".
  const motivos = new Set();
  let parado = null;
  function pausa(motivo, ligar) {
    if (ligar) motivos.add(motivo);
    else motivos.delete(motivo);
    secaoD.toggleAttribute('data-pausa', motivos.size > 0);
    // o botão só é redesenhado quando muda de estado: trocar o ícone no meio de um clique perderia o clique
    if (parado === motivos.has('pessoa')) return;
    parado = motivos.has('pessoa');
    botaoPausa.innerHTML = parado ? ICONE.tocar : ICONE.pausa;
    botaoPausa.setAttribute('aria-label', parado ? 'Retomar a troca automática' : 'Pausar a troca automática');
  }
  progresso.addEventListener('animationend', () => irPara(atual + 1, false));
  document
    .querySelectorAll('[data-descubra]')
    .forEach((b) => b.addEventListener('click', () => irPara(atual + Number(b.dataset.descubra), true)));
  botaoPausa.addEventListener('click', () => pausa('pessoa', !motivos.has('pessoa')));
  secaoD.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && pausa('mouse', true));
  secaoD.addEventListener('pointerleave', (e) => e.pointerType === 'mouse' && pausa('mouse', false));
  secaoD.addEventListener('focusin', () => pausa('foco', true));
  secaoD.addEventListener('focusout', (e) => !secaoD.contains(e.relatedTarget) && pausa('foco', false));
  secaoD.addEventListener('touchstart', (e) => !e.target.closest('#descubraPausa') && pausa('pessoa', true), {
    passive: true
  });
  document.addEventListener('selectionchange', () => {
    const s = getSelection();
    pausa('leitura', !!(s && !s.isCollapsed && secaoD.contains(s.anchorNode)));
  });
  new IntersectionObserver(([e]) => pausa('fora', !e.isIntersecting), { threshold: 0.35 }).observe(secaoD);
  montarDescubra(0);
  pausa('fora', true);
  // com movimento reduzido não há troca automática, e o botão de pausa não tem o que pausar
  if (reduz) botaoPausa.hidden = true;

  /* ---------- D. autores: galeria ---------- */
  // ordem pensada para alternar retrato e versão tipográfica; tamanhos em ritmo, não em grade
  const ORDEM = [
    'Machado de Assis',
    'Clarice Lispector',
    'Virginia Woolf',
    'Frida Kahlo',
    'Cora Coralina',
    'Fiódor Dostoiévski',
    'Maya Angelou',
    'Guimarães Rosa',
    'Sêneca',
    'Marie Curie',
    'Carlos Drummond de Andrade',
    'Jane Austen'
  ];
  const TAMANHOS = ['g', 'p', 'm', 'g', 'm', 'p'];
  const galeria = ORDEM.map((n) => H.galeria.find((g) => g.nome === n)).filter(Boolean);
  $('galeria').innerHTML = galeria
    .map((g, i) => {
      const a = autor(g.nome);
      const tam = TAMANHOS[i % TAMANHOS.length];
      const largura = tam === 'g' ? 340 : tam === 'm' ? 272 : 216;
      const retrato = a.foto
        ? `<span class="quadro">${imagem(a, { largura: largura * 2, larguras: [largura, largura * 2], tamanhos: `(min-width: 640px) ${largura}px, 50vw` })}</span>`
        : `<span class="quadro tipografico"><span class="nome-condensado" aria-hidden="true">${esc(g.nome)}</span></span>`;
      return `<li class="retrato tam-${tam}"><a href="#autores">
        <span class="moldura">${retrato}</span>
        <span class="legenda">
          <span class="nome-condensado">${esc(g.nome)}</span>
          <span>${papel(a.papel)}</span>
          <span class="contagem">${plural(g.frases, 'frase', 'frases')} · ${plural(g.obras, 'obra', 'obras')}</span>
        </span></a></li>`;
    })
    .join('');
  $('todosAutores').innerHTML = texto(`Ver os ${num(c.autores)} autores`);
  $('creditosGaleria').innerHTML = galeria
    .map((g) => autor(g.nome))
    .filter((a) => a.foto)
    .map((a) => `<li>${esc(a.nome)}: ${esc(credito(a).replace(/^Imagem: /, ''))}</li>`)
    .join('');
  const trilho = $('galeria');
  const [setaAntes, setaDepois] = document.querySelectorAll('[data-galeria]');
  const setas = () => {
    setaAntes.disabled = trilho.scrollLeft <= 2;
    setaDepois.disabled = trilho.scrollLeft >= trilho.scrollWidth - trilho.clientWidth - 2;
  };
  document.querySelectorAll('[data-galeria]').forEach((b) =>
    b.addEventListener('click', () =>
      trilho.scrollBy({
        left: trilho.clientWidth * 0.8 * Number(b.dataset.galeria),
        behavior: reduz ? 'auto' : 'smooth'
      })
    )
  );
  trilho.addEventListener('scroll', () => requestAnimationFrame(setas), { passive: true });
  addEventListener('resize', setas);
  setas();
  // arrastar com o mouse (no toque, a rolagem do próprio navegador já arrasta)
  let arraste = null;
  trilho.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    arraste = { x: e.clientX, inicio: trilho.scrollLeft, moveu: false };
  });
  addEventListener('pointermove', (e) => {
    if (!arraste) return;
    const dx = e.clientX - arraste.x;
    if (Math.abs(dx) > 5) arraste.moveu = true;
    if (arraste.moveu) {
      trilho.scrollLeft = arraste.inicio - dx;
      trilho.classList.add('arrastando');
    }
  });
  addEventListener('pointerup', () => {
    if (!arraste) return;
    const moveu = arraste.moveu;
    arraste = null;
    trilho.classList.remove('arrastando');
    // depois de arrastar, o clique que vem junto não abre o autor
    if (moveu) trilho.addEventListener('click', (e) => e.preventDefault(), { capture: true, once: true });
  });

  /* ---------- F. histórias: uma aberta por vez ---------- */
  $('todasHistorias').innerHTML = texto(`Ver as ${num(c.historias)} histórias`);
  $('historiasLista').innerHTML = H.historias
    .map((h, i) => {
      const a = autor(h.autor);
      const aberta = i === 0;
      return `<li class="historia">
        <h3><button class="historia-botao" type="button" id="hb-${esc(h.id)}" aria-expanded="${aberta}" aria-controls="h-${esc(h.id)}">
          <span class="historia-miniatura quadro" aria-hidden="true">${a.foto ? imagem(a, { largura: 120, larguras: [60, 120], tamanhos: '60px' }).replace(/alt="[^"]*"/, 'alt=""') : ''}</span>
          <span class="historia-titulo">${texto(h.titulo)}</span>
          <span class="historia-quem nome-condensado">${esc(h.autor)}</span>
        </button></h3>
        <div class="historia-corpo" id="h-${esc(h.id)}" role="region" aria-labelledby="hb-${esc(h.id)}"${aberta ? '' : ' hidden'}>
          <div class="quadro">${a.foto ? imagem(a, { largura: 800, larguras: [420, 800], tamanhos: '(min-width: 768px) 416px, 100vw' }) : ''}</div>
          <div class="historia-texto">
            ${h.tema ? `<p class="eyebrow">${esc(h.tema)}</p>` : ''}
            <p class="historia-nome nome-condensado">${esc(h.autor)}</p>
            <p class="historia-resumo">${texto(h.resumo)}</p>
            <div class="secao-acoes">
              <a class="btn btn-primary" href="#historias">Ler a história</a>
              <button class="btn-text" type="button" aria-label="Ouvir a história de ${esc(h.autor)}">${ICONE.ouvir} Ouvir</button>
            </div>
            ${a.foto ? `<p class="historia-credito">${esc(credito(a))}</p>` : ''}
          </div>
        </div>
      </li>`;
    })
    .join('');
  $('historiasLista').addEventListener('click', (e) => {
    const b = e.target.closest('.historia-botao');
    if (!b) return;
    const abrir = b.getAttribute('aria-expanded') !== 'true';
    $('historiasLista')
      .querySelectorAll('.historia-botao')
      .forEach((x) => {
        x.setAttribute('aria-expanded', 'false');
        $(x.getAttribute('aria-controls')).hidden = true;
      });
    if (abrir) {
      b.setAttribute('aria-expanded', 'true');
      $(b.getAttribute('aria-controls')).hidden = false;
    }
  });

  /* ---------- H. comunidade: o convite parte da frase de hoje ---------- */
  $('conviteFrase').innerHTML = `
    <p class="eyebrow">Frase de hoje</p>
    <blockquote><p class="quote-text"${comprimento(hoje.texto)}>${comAspas(hoje.texto)}</p></blockquote>
    <figcaption><span class="nome-condensado">${esc(ah.nome)}</span></figcaption>
    <a class="btn btn-primary" href="#comunidade">Escrever sobre esta frase</a>`;

  /* ---------- I. encerramento ---------- */
  const fim = FRASES.f2475ln3; // Voltaire, Cândido, capítulo 30
  $('encerramentoFrase').innerHTML = `
    <blockquote><p class="quote-poster-text"${comprimento(fim.texto)}>${comAspas(fim.texto)}</p></blockquote>
    <figcaption class="acaso-autor"><span class="nome-condensado">${esc(fim.autor)}</span><cite>${texto(fim.fonte)}</cite>${conferida(fim)}</figcaption>`;

  /* ---------- teclado: Enter e espaço nos elementos com role="button" ---------- */
  document.addEventListener('keydown', (e) => {
    const alvo =
      e.target.closest && e.target.closest('[role="button"][data-abrir],[role="button"][data-ampliar-foto]');
    if (alvo && (e.key === 'Enter' || e.key === ' ') && e.target === alvo) {
      e.preventDefault();
      alvo.click();
    }
  });
  window.Proto.iniciar();
})();
