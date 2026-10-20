/* MeMotiva — app/40-home.js
   A home nova (Etapa 4 do redesign): monta as seções de #view-home com o acervo real e liga cada
   botão à tela que já existe no site (Explorar por tema, frase ampliada, Panorama do autor, história
   aberta, narração, Escrever, Comunidade). Não guarda estado próprio fora deste arquivo: tudo fica
   dentro da função abaixo, para não criar nomes globais novos.
   Roda na carga (as seções aparecem logo) e de novo no fim da cadeia de fases, quando os dados
   terminam de mudar. Os elementos antigos da home (contadores, gerador) ficam em .home-legado.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md): depois da curadoria, antes do 99. */
(function () {
  'use strict';
  const raiz = document.getElementById('view-home');
  if (!raiz || !document.getElementById('abertura')) return;
  const $ = (id) => document.getElementById(id);
  // só troca o conteúdo quando ele mudou: a home se monta de novo no fim da cadeia de fases, e
  // refazer o que já está igual faria as fotos piscarem
  const por = (el, html) => {
    if (el._html === html) return false;
    el.innerHTML = html;
    el._html = html;
    return true;
  };
  const reduz = () => prefersReducedMotion();
  const num = (n) => Number(n).toLocaleString('pt-BR');
  const plural = (n, um, varios) => `${num(n)} ${n === 1 ? um : varios}`;

  /* ---------- texto: a tipografia da linha muda só na exibição, nunca o acervo ---------- */
  // palavra de uma letra e número não ficam sozinhos no fim da linha
  const amarrar = (html) =>
    String(html)
      .replace(/(?<=^|[\s(“"])(\p{L})\s(?=\S)/gu, '$1 ')
      .replace(/(\d)\s(?=\p{L})/gu, '$1 ')
      .replace(/(\p{L})\s(?=\d)/gu, '$1 ');
  const texto = (s) => amarrar(escapeHtml(s));
  // datas entre parênteses não se partem no traço
  const papel = (s) => texto(s).replace(/\((c\.\s)?\d[^()]*\)/g, '<span class="sem-quebra">$&</span>');
  const comAspas = (t) =>
    `<span class="aspa-abre" aria-hidden="true">“</span>${texto(t)}<span aria-hidden="true">”</span>`;
  // nome com hífen não se parte nele ("Saint- / Exupéry")
  const semPartirHifen = (nome) => escapeHtml(nome).replace(/\S+-\S+/g, '<span class="sem-quebra">$&</span>');
  const comprimento = (t) => (t.length > 140 ? ' data-comprimento="longa"' : '');
  const conferida = (q) => (q.st === 'A' ? '<span class="conferida">fonte conferida</span>' : '');
  const ehDitado = (q) => /^ditado/i.test(q.author || '');
  function linguaDoOriginal(t) {
    if (/[ἀ-῿]/.test(t)) return 'grc';
    if (/[Ͱ-Ͽ]/.test(t)) return 'el';
    if (/[Ѐ-ӿ]/.test(t)) return 'ru';
    if (/[֐-׿]/.test(t)) return 'he';
    if (/[؀-ۿ]/.test(t)) return 'ar';
    if (/[ऀ-ॿ]/.test(t)) return 'sa';
    if (/[一-鿿]/.test(t)) return 'zh';
    return '';
  }

  /* ---------- escolhas do dia: estáveis mesmo quando a lista muda um pouco ---------- */
  const DIA = Math.floor(Date.now() / 86400000);
  // cada item recebe uma nota pelo próprio id e pelo dia; a lista ordenada por nota muda todo dia,
  // mas tirar ou pôr outro item não muda a ordem dos demais
  function nota(chave) {
    let h = 2166136261;
    const s = chave + '|' + DIA;
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    return h >>> 0;
  }
  const doDia = (lista, chave) => [...lista].sort((a, b) => nota(chave(a)) - nota(chave(b)));

  /* ---------- pessoas e fotos ---------- */
  // quem tem foto curada; sai da lista quem teve a foto recusada nesta visita (arquivo inexistente
  // no Commons e nada encontrado depois, ver design/PENDENCIAS-CODIGO.md)
  const semFoto = new Set();
  const temFoto = (nome) => {
    const p = photoInfo(nome);
    return !!(p && p.f && !PHOTO_BLOCKLIST.has(p.f)) && !semFoto.has(canonAuthor(nome));
  };
  // a foto do site (Commons, depois a cópia local, depois a Wikipédia); se nada vier, o nome numa placa
  const quadro = (nome, largura, ctx = 'card') =>
    `${photoImgHTML(nome, ctx, largura)}<span class="avatar-fallback" style="display:none" aria-hidden="true">${escapeHtml(nome)}</span>`;
  const qidDe = (q) => q && q.qid;
  const frase = (qid) => {
    const i = QUOTE_POR_QID[qid];
    return i === undefined ? null : QUOTES[i];
  };
  const verificadasDe = (nome) => {
    const a = AUTOR_INDEX.get(canonAuthor(nome));
    return a ? a.frases.map((i) => QUOTES[i]).filter((q) => q && q.st === 'A') : [];
  };
  const autoresComHistoria = () => [...new Set(STORIES.map((s) => canonAuthor(s.author)))];
  const historiaDe = (nome) => STORIES.find((s) => canonAuthor(s.author) === canonAuthor(nome)) || null;

  /* ================= A. abertura: a frase de hoje ================= */
  // uma frase com a fonte conferida, curta o bastante para a abertura, de quem tem foto e história
  let hojeQid = null;
  let limiteAbertura = 0;
  function escolherHoje() {
    const comHistoria = new Set(autoresComHistoria());
    const candidatas = QUOTES.filter(
      (q) =>
        q.st === 'A' &&
        q.src &&
        q.text.length <= 160 &&
        comHistoria.has(canonAuthor(q.author)) &&
        temFoto(q.author)
    );
    return qidDe(doDia(candidatas, (q) => q.qid)[0]);
  }
  function montarAbertura() {
    if (!frase(hojeQid)) hojeQid = escolherHoje();
    const q = frase(hojeQid);
    if (!q) return;
    const nome = canonAuthor(q.author);
    const lingua = q.orig ? linguaDoOriginal(q.orig) : '';
    const data = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
    por(
      $('abertura'),
      `
      <figure class="prancha">
        <div class="prancha-foto quadro" role="button" tabindex="0" data-foto="${escapeHtml(nome)}" aria-label="Ampliar a fotografia de ${escapeHtml(nome)}">${quadro(nome, 900).replace('loading="lazy"', 'loading="eager" fetchpriority="high"')}</div>
        <figcaption>Imagem: Wikimedia Commons</figcaption>
      </figure>
      <div class="parede">
        <p class="eyebrow rotulo">Frase de hoje · <time>${escapeHtml(data)}</time></p>
        <h1 class="nome-autor nome-condensado"><button type="button" class="link-autor" data-autor="${escapeHtml(nome)}">${escapeHtml(nome)}</button></h1>
        <p class="quote-hero-text"${comprimento(q.text)}>${comAspas(q.text)}</p>
        <dl class="quote-label">
          <dt>Obra</dt><dd><span class="obra">${texto(q.src)}</span>${conferida(q)}</dd>
          <dt>Autor</dt><dd>${papel(papelDe(nome))}</dd>
          ${q.orig ? `<dt>Original</dt><dd><p class="quote-original"${lingua ? ` lang="${lingua}"` : ''}>${escapeHtml(q.orig)}</p></dd>` : ''}
        </dl>
      </div>`
    );
    por(
      $('faixa'),
      `<b>Fonte</b><span class="obra">${texto(q.src)}</span>${conferida(q)}<button class="btn-text" type="button" data-abrir-frase="${escapeHtml(q.qid)}">Abrir a frase</button>`
    );
    // a abertura só aparece com a foto: quem tem o arquivo quebrado no Commons aparecia e logo dava
    // lugar a outra pessoa (a troca vem do observador das fotos, mais abaixo). Até lá fica o quadro.
    const img = $('abertura').querySelector('.prancha-foto img');
    const revelar = () => {
      clearTimeout(limiteAbertura);
      $('capa').classList.remove('esperando-foto');
      $('abertura').removeAttribute('aria-busy');
    };
    if (!img || (img.complete && img.naturalWidth)) revelar();
    else {
      $('capa').classList.add('esperando-foto');
      img.addEventListener('load', revelar, { once: true });
      clearTimeout(limiteAbertura);
      limiteAbertura = setTimeout(revelar, 5000); // sem rede nenhuma foto vem: a placa com o nome aparece
    }
  }

  /* ================= C. explorar: os números e os temas ================= */
  function montarExplorar() {
    const obras = Object.keys(OBRA_POR_ID).length;
    const verificadas = QUOTES.filter((q) => q.st === 'A').length;
    por(
      $('t-explorar'),
      `<b>${num(QUOTES.length)}</b> frases de <b>${num(AUTOR_INDEX.size)}</b> autores, em <b>${num(CATEGORIES.length)}</b> temas.`
    );
    por(
      $('acervoNota'),
      texto(`${num(verificadas)} com a fonte conferida e ${num(obras)} obras catalogadas.`)
    );
    const temas = CATEGORIES.map((c) => ({
      id: c.id,
      nome: c.name,
      n: QUOTES.filter((q) => quoteMatchesCat(q, c.id)).length
    })).sort((x, y) => x.nome.localeCompare(y.nome, 'pt-BR'));
    const indice = $('indiceTemas');
    // duas colunas de leitura, de cima para baixo, com as linhas alinhadas entre as colunas
    indice.style.setProperty('--linhas', Math.ceil(temas.length / 2));
    por(
      indice,
      temas
        .map(
          (
            t
          ) => `<li><button type="button" data-home-tema="${escapeHtml(t.id)}"><span class="tema-nome">${escapeHtml(t.nome)}</span>
          <span class="tema-n">${num(t.n)}<span class="sr-only"> ${t.n === 1 ? 'frase' : 'frases'}</span></span></button></li>`
        )
        .join('')
    );
  }

  /* ================= B. uma frase ao acaso ================= */
  let acasoQid = null;
  function sortearAcaso() {
    // curta o bastante para o tamanho de cartaz (até três ou quatro linhas)
    const pool = QUOTES.filter((q) => q.st === 'A' && q.text.length <= 110 && q.qid !== acasoQid);
    const q = pool[Math.floor(Math.random() * pool.length)];
    acasoQid = qidDe(q);
  }
  function montarAcaso() {
    if (!frase(acasoQid)) sortearAcaso();
    const q = frase(acasoQid);
    if (!q) return;
    const nome = canonAuthor(q.author);
    const quem = ehDitado(q)
      ? '<span class="nome-condensado">Ditado popular</span>'
      : `<button type="button" class="link-autor nome-condensado" data-autor="${escapeHtml(nome)}">${escapeHtml(nome)}</button>`;
    por(
      $('acasoFrase'),
      `
      <blockquote><p class="quote-poster-text"${comprimento(q.text)}>${comAspas(q.text)}</p></blockquote>
      <figcaption class="acaso-autor">
        ${quem}
        ${q.src ? `<cite>${texto(q.src)}</cite>` : ''}${conferida(q)}
        <button class="btn-text" type="button" data-abrir-frase="${escapeHtml(q.qid)}">Ampliar a frase</button>
      </figcaption>`
    );
  }

  /* ================= E. descubra: uma pessoa por vez ================= */
  // Só entra quem tem história (o "Ler a história" abre a dela), foto e resumo do perfil.
  // A ordem muda a cada dia; a página troca sozinha (a cada 5 s) enquanto a seção está na tela,
  // e o "Voltar" devolve a pessoa anterior.
  const ICONE = {
    pausa:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="5" width="3.6" height="14" rx="0.6"/><rect x="13.9" y="5" width="3.6" height="14" rx="0.6"/></svg>',
    tocar:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.2v13.6a.6.6 0 0 0 .9.5l10.6-6.8a.6.6 0 0 0 0-1L8.9 4.7a.6.6 0 0 0-.9.5Z"/></svg>',
    ouvir:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5v5h3.5L12 19V5L7.5 9.5H4Z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.6 6a8.6 8.6 0 0 1 0 12"/></svg>',
    seta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  let pessoas = [];
  let atual = 0;
  function listarPessoas() {
    const lista = autoresComHistoria().filter((n) => {
      const p = PERFIS_PROFUNDOS[n];
      return p && p.resumo && temFoto(n);
    });
    return doDia(lista, (n) => n);
  }
  function fraseDaPessoa(nome) {
    const curtas = verificadasDe(nome).filter((q) => q.text.length <= 170);
    return doDia(curtas, (q) => q.qid)[0] || null;
  }
  function montarDescubra() {
    const nome = pessoas[atual];
    if (!nome) return;
    const s = historiaDe(nome);
    const q = fraseDaPessoa(nome);
    const mudou = por(
      $('descubraSlide'),
      `
      <h2 class="eyebrow rotulo" id="t-descubra">Descubra</h2>
      <h3 class="descubra-nome nome-condensado">${escapeHtml(nome)}</h3>
      <p class="descubra-papel">${papel(papelDe(nome))}</p>
      <p class="descubra-resumo">${texto(PERFIS_PROFUNDOS[nome].resumo)}</p>
      ${
        q
          ? `<figure class="descubra-frase"><blockquote><p class="quote-text"${comprimento(q.text)}>${comAspas(q.text)}</p></blockquote>
              <figcaption>${q.src ? `<cite>${texto(q.src)}</cite>` : ''}${conferida(q)}</figcaption></figure>`
          : `<p class="descubra-historia"><span class="eyebrow">História</span> ${texto(s.title)}</p>`
      }
      <div class="secao-acoes">
        <button class="btn btn-primary" type="button" data-historia="${escapeHtml(s.id)}">Ler a história</button>
        <button class="btn-text" type="button" data-autor="${escapeHtml(nome)}">Conhecer ${escapeHtml(nome)}</button>
      </div>`
    );
    por(
      $('descubraRetrato'),
      `
      <div class="quadro" role="button" tabindex="0" data-foto="${escapeHtml(nome)}" aria-label="Ampliar a fotografia de ${escapeHtml(nome)}">${quadro(nome, 900)}</div>
      <figcaption>Imagem: Wikimedia Commons</figcaption>`
    );
    // o traço do tempo recomeça a cada pessoa
    if (mudou) $('descubraTempo').replaceChildren(document.createElement('i'));
  }
  function trocarPessoa(passo, manual) {
    if (!pessoas.length) return;
    const palco = $('descubraPalco');
    $('descubraSlide').setAttribute('aria-live', manual ? 'polite' : 'off');
    const trocar = () => {
      atual = (atual + passo + pessoas.length) % pessoas.length;
      montarDescubra();
      palco.classList.remove('saindo');
    };
    if (reduz()) return trocar();
    // a página apaga no roxo e a próxima pessoa aparece no lugar
    palco.classList.add('saindo');
    setTimeout(trocar, 480);
  }
  // Pausa com o mouse em cima, com o foco dentro, ao selecionar texto, durante o toque, fora da tela
  // (ou com outra tela do site aberta) e pelo botão, que deixa parado até a pessoa retomar.
  const motivos = new Set();
  let parado = null;
  function pausa(motivo, ligar) {
    const secao = $('home-descubra');
    if (ligar) motivos.add(motivo);
    else motivos.delete(motivo);
    secao.toggleAttribute('data-pausa', motivos.size > 0 || reduz());
    if (parado === motivos.has('pessoa')) return;
    parado = motivos.has('pessoa');
    const b = $('descubraPausa');
    b.innerHTML = parado ? ICONE.tocar : ICONE.pausa;
    b.setAttribute('aria-label', parado ? 'Retomar a troca automática' : 'Pausar a troca automática');
  }
  function ligarDescubra() {
    const secao = $('home-descubra');
    $('descubraTempo').addEventListener('animationend', () => trocarPessoa(1, false));
    $('descubraProxima').addEventListener('click', () => trocarPessoa(1, true));
    // para quem não acabou de ler: volta à pessoa anterior
    $('descubraAnterior').addEventListener('click', () => trocarPessoa(-1, true));
    $('descubraPausa').addEventListener('click', () => pausa('pessoa', !motivos.has('pessoa')));
    // mouse em cima só conta em aparelho com cursor (no celular, o toque cuida disso)
    const cursor = matchMedia('(hover: hover)').matches;
    secao.addEventListener(
      'pointerenter',
      (e) => cursor && e.pointerType === 'mouse' && pausa('mouse', true)
    );
    secao.addEventListener(
      'pointerleave',
      (e) => cursor && e.pointerType === 'mouse' && pausa('mouse', false)
    );
    secao.addEventListener('focusin', () => pausa('foco', true));
    secao.addEventListener('focusout', (e) => !secao.contains(e.relatedTarget) && pausa('foco', false));
    // no toque (inclusive ao rolar a página por cima), pausa enquanto a pessoa mexe e volta depois
    let toque;
    secao.addEventListener(
      'touchstart',
      () => {
        clearTimeout(toque);
        pausa('toque', true);
      },
      { passive: true }
    );
    secao.addEventListener('touchend', () => {
      clearTimeout(toque);
      toque = setTimeout(() => pausa('toque', false), 5000);
    });
    document.addEventListener('selectionchange', () => {
      const sel = document.getSelection();
      pausa('leitura', !!(sel && !sel.isCollapsed && secao.contains(sel.anchorNode)));
    });
    // fora da tela (ou com outra tela do site aberta) não troca
    new IntersectionObserver(([e]) => pausa('fora', !e.isIntersecting), { threshold: 0.35 }).observe(secao);
    pausa('fora', true);
    if (reduz()) $('descubraPausa').hidden = true;
  }

  /* ================= D. autores: todas as pessoas com história ================= */
  let galeria = [];
  function montarGaleria() {
    // primeiro quem tem retrato, em ordem alfabética; depois quem ainda não tem
    const col = (a, b) => a.localeCompare(b, 'pt-BR');
    const nomes = autoresComHistoria();
    galeria = [...nomes.filter(temFoto).sort(col), ...nomes.filter((n) => !temFoto(n)).sort(col)];
    por(
      $('galeria'),
      galeria
        .map((nome) => {
          const i = autorInfo(nome);
          return `<li class="retrato"><button type="button" data-autor="${escapeHtml(nome)}">
          <span class="quadro">${quadro(nome, 528)}</span>
          <span class="legenda">
            <span class="nome-condensado">${escapeHtml(nome)}</span>
            <span>${papel(i.papel)}</span>
            <span class="contagem">${plural(i.frases.length, 'frase', 'frases')} · ${plural(i.obras.length, 'obra', 'obras')}</span>
          </span></button></li>`;
        })
        .join('')
    );
    posicaoGaleria();
  }
  const trilho = () => $('galeria');
  const passo = () => {
    const t = trilho();
    const r = t.querySelector('.retrato');
    return r ? r.offsetWidth + parseFloat(getComputedStyle(t).columnGap || 0) : 280;
  };
  let anuncio;
  // o traço mostra a parte da fila que está à vista; o texto diz quais retratos
  function posicaoGaleria() {
    const t = trilho();
    if (!t.clientWidth) return;
    const [antes, depois] = raiz.querySelectorAll('[data-galeria]');
    const max = t.scrollWidth - t.clientWidth;
    antes.disabled = t.scrollLeft <= 2;
    depois.disabled = t.scrollLeft >= max - 2;
    const tamanho = Math.min(100, (t.clientWidth / t.scrollWidth) * 100);
    const inicio = max > 0 ? (t.scrollLeft / max) * (100 - tamanho) : 0;
    const barra = $('galeriaProgresso');
    barra.style.setProperty('--tamanho', tamanho + '%');
    barra.style.setProperty('--inicio', inicio + '%');
    const p = passo();
    const inteiros = Math.max(
      1,
      Math.floor((t.clientWidth - parseFloat(getComputedStyle(t).paddingLeft) + 8) / p)
    );
    // no fim da fila, os últimos retratos é que estão inteiros à vista
    const noFim = t.scrollLeft >= max - 2;
    const primeiro = noFim ? Math.max(1, galeria.length - inteiros + 1) : Math.round(t.scrollLeft / p) + 1;
    const ultimo = Math.min(galeria.length, primeiro + inteiros - 1);
    clearTimeout(anuncio);
    anuncio = setTimeout(() => {
      $('galeriaPosicao').textContent =
        primeiro === ultimo
          ? `${num(primeiro)} de ${num(galeria.length)}`
          : `${num(primeiro)}–${num(ultimo)} de ${num(galeria.length)}`;
    }, 120);
  }
  // enquanto a pessoa não mexe na fila, a home pode reordená-la (retratos sem foto vão para o fim)
  let galeriaMexida = false;
  function ligarGaleria() {
    const t = trilho();
    const mexeu = () => (galeriaMexida = true);
    ['pointerdown', 'wheel', 'keydown', 'touchstart'].forEach((ev) =>
      t.addEventListener(ev, mexeu, { passive: true })
    );
    raiz.querySelectorAll('[data-galeria]').forEach((b) => b.addEventListener('click', mexeu));
    const andar = (n) => t.scrollBy({ left: n, behavior: reduz() ? 'auto' : 'smooth' });
    // as setas andam o que está à vista, sem pular retrato
    raiz.querySelectorAll('[data-galeria]').forEach((b) =>
      b.addEventListener('click', () => {
        const p = passo();
        const visiveis = Math.max(
          1,
          Math.floor((t.clientWidth - parseFloat(getComputedStyle(t).paddingLeft)) / p)
        );
        andar(p * visiveis * Number(b.dataset.galeria));
      })
    );
    // teclado na fila: setas andam um retrato, Home e End vão às pontas
    t.addEventListener('keydown', (e) => {
      const p = passo();
      const mapa = { ArrowRight: p, ArrowLeft: -p, Home: -t.scrollWidth, End: t.scrollWidth };
      if (!(e.key in mapa) || e.target !== t) return;
      e.preventDefault();
      andar(mapa[e.key]);
    });
    t.addEventListener('scroll', () => requestAnimationFrame(posicaoGaleria), { passive: true });
    addEventListener('resize', posicaoGaleria);
    // arrastar com o mouse (no toque, a rolagem do próprio navegador já arrasta)
    let arraste = null;
    t.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      arraste = { x: e.clientX, inicio: t.scrollLeft, moveu: false };
    });
    addEventListener('pointermove', (e) => {
      if (!arraste) return;
      const dx = e.clientX - arraste.x;
      if (Math.abs(dx) > 5) arraste.moveu = true;
      if (arraste.moveu) {
        t.classList.add('arrastando');
        t.scrollLeft = arraste.inicio - dx;
      }
    });
    addEventListener('pointerup', () => {
      if (!arraste) return;
      const moveu = arraste.moveu;
      arraste = null;
      if (!moveu) return;
      // solta e deixa o encaixe levar ao retrato mais próximo
      const alvo = Math.round(t.scrollLeft / passo()) * passo();
      t.classList.remove('arrastando');
      t.scrollTo({ left: alvo, behavior: reduz() ? 'auto' : 'smooth' });
      // depois de arrastar, o clique que vem junto não abre o autor
      t.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        { capture: true, once: true }
      );
    });
  }

  /* ================= H. comunidade ================= */
  // relatos de verdade, quando houver; os três exemplos antigos (seedCommunityIfNeeded) não contam
  const ehExemplo = (p) => /^seed_\d+@memotiva\.app$/.test(p.authorEmail || '');
  function montarComunidade() {
    const relatos = postsVisiveis()
      .filter((p) => !ehExemplo(p) && p.text)
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
      .slice(0, 3);
    const item = (dest, titulo, sub, extra = '') =>
      `<li><button class="convite-item${extra}" type="button" data-ir="${dest}"><b>${titulo}</b><span>${sub}</span>${ICONE.seta}</button></li>`;
    const curto = (t) => (t.length > 120 ? t.slice(0, 118).replace(/\s+\S*$/, '') + '…' : t);
    por(
      $('conviteLado'),
      relatos.length
        ? `<p class="eyebrow">Relatos recentes</p><ul class="convite-lista">${relatos
            .map((p) =>
              item(
                'comunidade',
                `“${texto(curto(p.text))}”`,
                `${escapeHtml(p.authorUsername || 'Alguém da comunidade')} · Ler na comunidade`,
                ' convite-relato'
              )
            )
            .join('')}</ul>`
        : `<p class="eyebrow">O que dá para fazer aqui</p><ul class="convite-lista">
          ${item('escrever', 'Escrever sobre uma frase', 'Escolha o fundo, a letra e uma trilha para acompanhar o que você escreveu.')}
          ${item('comunidade', 'Ler e comentar os relatos', 'Curta, comente e guarde o que as outras pessoas escreveram.')}
          ${item('perfil', 'Guardar no seu perfil', 'Suas frases favoritas e os seus relatos, num lugar só.')}
        </ul>`
    );
  }

  /* ================= F. histórias ================= */
  function montarHistorias() {
    const lista = doDia(
      STORIES.filter((s) => temFoto(s.author)),
      (s) => s.id
    ).slice(0, 4);
    const [d, ...mais] = lista;
    $('todasHistorias').textContent = `Ver as ${num(STORIES.length)} histórias`;
    if (!d) return;
    const nome = canonAuthor(d.author);
    const tema = catById(d.cat);
    por(
      $('historiaDestaque'),
      `
      <article class="historia-destaque">
        <div class="quadro" role="button" tabindex="0" data-foto="${escapeHtml(nome)}" aria-label="Ampliar a fotografia de ${escapeHtml(nome)}">${quadro(nome, 800)}</div>
        <div class="historia-texto">
          ${tema ? `<p class="eyebrow">${escapeHtml(tema.name)}</p>` : ''}
          <h3 class="historia-titulo">${texto(d.title)}</h3>
          <p class="historia-nome nome-condensado"${nome.length > 16 ? ' data-comprimento="longo"' : ''}>${semPartirHifen(nome)}</p>
          <p class="historia-resumo">${texto(d.excerpt)}</p>
          <div class="secao-acoes">
            <button class="btn btn-primary" type="button" data-historia="${escapeHtml(d.id)}">Ler a história</button>
            <button class="btn-text" type="button" data-ouvir="${escapeHtml(d.id)}" aria-label="Ouvir a história de ${escapeHtml(nome)}">${ICONE.ouvir} Ouvir</button>
          </div>
          <p class="historia-credito">Imagem: Wikimedia Commons</p>
        </div>
      </article>`
    );
    por(
      $('historiasMais'),
      mais
        .map((s) => {
          const n = canonAuthor(s.author);
          const t = catById(s.cat);
          return `<li><button class="historia-cartao" type="button" data-historia="${escapeHtml(s.id)}">
          <span class="quadro">${quadro(n, 600, 'wide')}</span>
          <span class="historia-cartao-texto">
            ${t ? `<span class="eyebrow">${escapeHtml(t.name)}</span>` : ''}
            <span class="historia-cartao-titulo">${texto(s.title)}</span>
            <span class="nome-condensado">${escapeHtml(n)}</span>
          </span></button></li>`;
        })
        .join('')
    );
  }

  /* ================= I. encerramento ================= */
  function montarEncerramento() {
    const q = frase('f2475ln3'); // Voltaire, Cândido, capítulo 30
    const fig = $('encerramentoFrase');
    fig.hidden = !q;
    if (!q) return;
    const nome = canonAuthor(q.author);
    por(
      fig,
      `
      <blockquote><p class="quote-poster-text">${comAspas(q.text)}</p></blockquote>
      <figcaption>
        <button type="button" class="link-autor nome-condensado" data-autor="${escapeHtml(nome)}">${escapeHtml(nome)}</button>
        ${q.src ? `<cite>${texto(q.src)}</cite>` : ''}${conferida(q)}
      </figcaption>`
    );
  }

  /* ================= os botões da home levam às telas do site ================= */
  function abrirFrase(qid) {
    const i = QUOTE_POR_QID[qid];
    if (i !== undefined) openQuoteModal(i);
  }
  function ouvir(id) {
    openBiography(id);
    // a narração é a da própria história aberta (mesmo botão, mesma voz)
    const play = document.querySelector('#bioSheet [data-story-play]');
    if (play) play.click();
  }
  raiz.addEventListener('click', (e) => {
    const el = e.target.closest(
      '[data-home-tema],[data-abrir-frase],[data-autor],[data-historia],[data-ouvir],[data-foto],[data-ir]'
    );
    if (!el || !raiz.contains(el)) return;
    const d = el.dataset;
    if (d.homeTema) {
      state.exploreFilter.cat = d.homeTema;
      state.exploreFilter.q = '';
      navigateTo('explorar');
    } else if (d.abrirFrase) abrirFrase(d.abrirFrase);
    else if (d.autor) abrirPanorama(d.autor);
    else if (d.historia) openBiography(d.historia);
    else if (d.ouvir) ouvir(d.ouvir);
    else if (d.foto) openPhotoModal(d.foto);
    else if (d.ir) navigateTo(d.ir);
  });
  // a foto que amplia também responde ao teclado
  raiz.addEventListener('keydown', (e) => {
    const el = e.target.closest('[role="button"][data-foto]');
    if (!el || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    openPhotoModal(el.dataset.foto);
  });
  // Foto que não veio (o site já tentou o Commons, a cópia local e a Wikipédia e mostrou a placa):
  // nos lugares de destaque, a home troca de pessoa em vez de abrir a página com uma placa.
  // Sem rede nenhuma foto vem: depois de seis trocas numa seção, fica a placa com o nome.
  const trocas = {};
  const podeTrocar = (secao) => (trocas[secao] = (trocas[secao] || 0) + 1) <= 6;
  new MutationObserver((mudancas) => {
    for (const m of mudancas) {
      const img = m.target;
      if (img.tagName !== 'IMG' || img.style.display !== 'none') continue;
      // na galeria, retrato sem foto no começo da fila vai para o fim, enquanto ninguém mexeu nela
      const card = img.closest('#galeria .retrato');
      if (card) {
        if (!galeriaMexida) {
          trilho().append(card);
          // o encaixe da rolagem seguiria o retrato até o fim da fila: a fila volta ao começo
          trilho().scrollTo({ left: 0, behavior: 'instant' });
        }
        continue;
      }
      const nome = img.dataset.person;
      if (!nome || semFoto.has(nome)) continue;
      const secao = img.closest('#abertura, #descubraRetrato, #historiaDestaque, #historiasMais');
      if (!secao || !podeTrocar(secao.id)) continue;
      semFoto.add(nome);
      if (img.closest('#abertura')) {
        hojeQid = null;
        montarAbertura();
      } else if (img.closest('#descubraRetrato')) {
        pessoas = pessoas.filter((n) => n !== nome);
        atual = pessoas.length ? atual % pessoas.length : 0;
        montarDescubra();
      } else if (img.closest('#historiaDestaque, #historiasMais')) montarHistorias();
    }
  }).observe(raiz, { subtree: true, attributes: true, attributeFilter: ['style'] });
  $('outraFrase').addEventListener('click', () => {
    sortearAcaso();
    montarAcaso();
  });

  /* ================= montagem ================= */
  function montarTudo() {
    montarAbertura();
    montarExplorar();
    montarAcaso();
    const antes = pessoas[atual];
    pessoas = listarPessoas();
    atual = Math.max(0, pessoas.indexOf(antes));
    montarDescubra();
    montarGaleria();
    montarComunidade();
    montarHistorias();
    montarEncerramento();
  }
  montarTudo();
  ligarDescubra();
  ligarGaleria();

  // No fim da cadeia de fases os dados terminam de mudar: monta de novo com o acervo final.
  const cadeia = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof cadeia === 'function') cadeia.apply(this, arguments);
    montarTudo();
  };
  // As fases que ainda escrevem os contadores antigos (com "+") avisam que os números mudaram.
  const legado = $('statQuotes');
  if (legado) new MutationObserver(() => montarExplorar()).observe(legado, { childList: true });
  // Os relatos chegam do armazenamento depois da carga, e mudam quando alguém publica.
  const _renderComunidade = renderCommunityPreview;
  renderCommunityPreview = function () {
    _renderComunidade();
    montarComunidade();
  };
  // A galeria só sabe o tamanho dos retratos quando a home está na tela.
  const _navegar = navigateTo;
  navigateTo = function (view) {
    _navegar(view);
    if (view === 'home') requestAnimationFrame(posicaoGaleria);
  };
})();
