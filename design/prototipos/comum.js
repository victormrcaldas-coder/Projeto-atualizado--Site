/* MeMotiva · base comum dos protótipos de direção visual (Etapa 1 do redesign).
   Fora do site: nada aqui é carregado por index.html. Lê os dados reais de amostra.js
   e cuida do que é igual nas três direções: tema, frase ampliada, foto ampliada,
   foco do teclado, tabela de contraste e chegada suave da abertura.
   Cada página de direção define window.DIRECAO com os seus modelos (cartaoHTML, modalHTML)
   e chama Proto.iniciar(). */
(function () {
  'use strict';
  const A = window.AMOSTRA;
  const FRASES = Object.fromEntries(A.frases.map((f) => [f.qid, f]));
  const params = new URLSearchParams(location.search);
  const raiz = document.documentElement;

  /* ---------- texto ---------- */
  const esc = (s) =>
    String(s == null ? '' : s).replace(
      /[&<>"']/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  // Aspas tipográficas; a de abertura fica numa caixa própria para "pendurar" na margem.
  const comAspas = (texto) =>
    `<span class="aspa-abre" aria-hidden="true">“</span>${esc(texto)}<span aria-hidden="true">”</span>`;
  // Tamanho da frase conforme o comprimento (mesma ideia de quoteFontSize, em app/13), com a escala de cada direção.
  function tamanhoFrase(texto, escala) {
    const n = texto.length;
    const faixas = escala || [
      [45, 'clamp(1.9rem, 1.2rem + 3vw, 3.4rem)'],
      [80, 'clamp(1.7rem, 1.1rem + 2.4vw, 2.9rem)'],
      [120, 'clamp(1.5rem, 1rem + 1.9vw, 2.4rem)'],
      [Infinity, 'clamp(1.35rem, 0.95rem + 1.5vw, 2rem)']
    ];
    return faixas.find(([max]) => n < max)[1];
  }
  // Escrita do original, só para o atributo lang (ajuda o navegador a escolher a fonte certa).
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

  /* ---------- autores e fotos ---------- */
  const slug = (s) =>
    s
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  function autor(nome) {
    const a = A.autores[nome] || { papel: '', foto: null };
    const foto = a.foto ? { ...a.foto, ...(A.fotos[a.foto.arquivo] || {}) } : null;
    return { nome, papel: a.papel, foto, fotoQuebrada: a.fotoQuebrada || '' };
  }
  // Foto grande só quando o arquivo aguenta: abaixo de 900 px de largura, o layout usa a versão tipográfica.
  const fotoGrande = (a) => !!(a.foto && a.foto.largura >= 900);
  function fotoUrl(a, largura) {
    if (!a.foto) return '';
    if (window.FOTOS_LOCAIS) return 'fotos/' + slug(a.nome) + '.jpg';
    return A.commons + encodeURIComponent(a.foto.arquivo) + '?width=' + largura;
  }
  function fotoSrcset(a, larguras) {
    if (!a.foto || window.FOTOS_LOCAIS) return '';
    return larguras
      .filter((w) => !a.foto.largura || w <= a.foto.largura)
      .map((w) => `${fotoUrl(a, w)} ${w}w`)
      .join(', ');
  }
  // Crédito curto para legenda. O texto completo do Commons fica a um clique (link "Ver no Commons").
  function credito(a) {
    if (!a.foto) return '';
    let quem = (a.foto.autor || '')
      .replace(/\[[^\]]*\]/g, '')
      .replace(/\s+/g, ' ')
      .replace(/[\s.]+$/, '')
      .trim();
    if (/^unknown\b/i.test(quem) || /não informado/.test(quem)) quem = 'autor desconhecido';
    const licenca = /public domain/i.test(a.foto.licenca) ? 'domínio público' : a.foto.licenca;
    return `Foto: ${quem} · ${licenca} · Wikimedia Commons`;
  }
  // <img> pronta: dimensões declaradas (sem salto de layout), enquadramento curado e srcset.
  function imagem(
    a,
    {
      largura = 800,
      larguras = [480, 800, 1200],
      tamanhos = '50vw',
      classe = '',
      largo = false,
      prioridade = false
    } = {}
  ) {
    if (!a.foto) return '';
    const pos = largo ? a.foto.enquadramentoLargo : a.foto.enquadramento;
    const w = a.foto.largura || 3;
    const h = a.foto.altura || 4;
    const srcset = fotoSrcset(a, larguras);
    return `<img class="${classe}" src="${fotoUrl(a, largura)}" ${srcset ? `srcset="${srcset}" sizes="${tamanhos}"` : ''}
      width="${w}" height="${h}" alt="Fotografia de ${esc(a.nome)}" style="object-position:${pos}"
      ${prioridade ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  }

  /* ---------- tema ---------- */
  function aplicarTema(modo, gravar) {
    raiz.setAttribute('data-theme', modo);
    document.querySelectorAll('[data-alternar-tema]').forEach((b) => {
      b.setAttribute('aria-pressed', String(modo === 'dark'));
      b.setAttribute('aria-label', modo === 'dark' ? 'Usar o tema claro' : 'Usar o tema escuro');
    });
    if (gravar) {
      try {
        localStorage.setItem('proto-tema', modo);
      } catch (e) {}
    }
    document.dispatchEvent(new CustomEvent('proto:tema'));
  }
  function temaInicial() {
    const p = params.get('tema');
    if (p === 'escuro' || p === 'dark') return 'dark';
    if (p === 'claro' || p === 'light') return 'light';
    try {
      const s = localStorage.getItem('proto-tema');
      if (s) return s;
    } catch (e) {}
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /* ---------- janelas (frase ampliada e foto ampliada) ---------- */
  const pilha = []; // janelas abertas, a última por cima: Esc fecha uma de cada vez
  function focaveis(el) {
    return [
      ...el.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ].filter((x) => x.offsetParent !== null || x === document.activeElement);
  }
  function abrirJanela(el, gatilho) {
    el.hidden = false;
    raiz.classList.add('com-janela');
    pilha.push({ el, gatilho: gatilho || document.activeElement });
    requestAnimationFrame(() => {
      el.classList.add('aberta');
      const fechar = el.querySelector('[data-fechar]');
      (fechar || focaveis(el)[0] || el).focus();
    });
  }
  function fecharJanela() {
    const topo = pilha.pop();
    if (!topo) return;
    topo.el.classList.remove('aberta');
    topo.el.hidden = true;
    if (!pilha.length) raiz.classList.remove('com-janela');
    if (topo.gatilho && document.contains(topo.gatilho)) topo.gatilho.focus();
  }
  document.addEventListener('keydown', (e) => {
    if (!pilha.length) return;
    const { el } = pilha[pilha.length - 1];
    if (e.key === 'Escape') {
      e.preventDefault();
      fecharJanela();
    } else if (e.key === 'Tab') {
      // mantém o foco dentro da janela
      const f = focaveis(el);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) {
        e.preventDefault();
        f[f.length - 1].focus();
      } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
        e.preventDefault();
        f[0].focus();
      }
    }
  });

  function abrirFrase(qid, gatilho) {
    const f = FRASES[qid];
    if (!f) return;
    const el = document.getElementById('frase-ampliada');
    el.querySelector('[data-corpo]').innerHTML = window.DIRECAO.modalHTML(f, autor(f.autor));
    el.setAttribute('aria-label', 'Frase de ' + f.autor);
    abrirJanela(el, gatilho);
  }
  function ampliarFoto(nome, gatilho) {
    const a = autor(nome);
    if (!a.foto) return;
    const el = document.getElementById('foto-ampliada');
    el.querySelector('[data-corpo]').innerHTML = `
      <figure class="foto-grande">
        ${imagem(a, { largura: 1600, larguras: [800, 1200, 1600], tamanhos: '90vw' }).replace('loading="lazy"', '')}
        <figcaption><strong>${esc(a.nome)}</strong> <span>${esc(credito(a))}</span>
          ${a.foto.pagina ? ` · <a href="${esc(a.foto.pagina)}" target="_blank" rel="noopener">Ver no Commons</a>` : ''}</figcaption>
      </figure>`;
    el.setAttribute('aria-label', 'Fotografia de ' + a.nome);
    abrirJanela(el, gatilho);
  }

  /* ---------- cartões ---------- */
  function montarCartoes(el, qids) {
    el.innerHTML = qids.map((q) => window.DIRECAO.cartaoHTML(FRASES[q], autor(FRASES[q].autor))).join('');
  }
  document.addEventListener('click', (e) => {
    const alvo = e.target.closest(
      '[data-abrir],[data-salvar],[data-ampliar-foto],[data-fechar],[data-alternar-tema]'
    );
    if (!alvo) {
      // clique no fundo escurecido fecha a janela de cima
      if (pilha.length && e.target === pilha[pilha.length - 1].el) fecharJanela();
      return;
    }
    if (alvo.hasAttribute('data-alternar-tema')) {
      aplicarTema(raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    } else if (alvo.hasAttribute('data-fechar')) {
      fecharJanela();
    } else if (alvo.hasAttribute('data-salvar')) {
      // só demonstração: no site, salvar continua exigindo entrar na conta
      const salvo = alvo.getAttribute('aria-pressed') !== 'true';
      alvo.setAttribute('aria-pressed', String(salvo));
      const rotulo = alvo.querySelector('[data-rotulo]');
      if (rotulo) rotulo.textContent = salvo ? 'Salva' : 'Salvar';
    } else if (alvo.hasAttribute('data-ampliar-foto')) {
      ampliarFoto(alvo.getAttribute('data-ampliar-foto'), alvo);
    } else if (alvo.hasAttribute('data-abrir')) {
      abrirFrase(alvo.getAttribute('data-abrir'), alvo);
    }
  });

  /* ---------- contraste (WCAG 2.x), medido nos tokens do tema atual ---------- */
  function rgb(cor) {
    const c = document.createElement('canvas').getContext('2d');
    c.fillStyle = cor;
    const h = c.fillStyle; // normaliza para #rrggbb
    return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  }
  const lum = (cor) =>
    rgb(cor)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
      .reduce((s, c, i) => s + c * [0.2126, 0.7152, 0.0722][i], 0);
  function contraste(a, b) {
    const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
    return (x + 0.05) / (y + 0.05);
  }
  const token = (nome) => getComputedStyle(raiz).getPropertyValue(nome).trim();
  function montarContraste(el, pares) {
    const desenhar = () => {
      el.innerHTML = pares
        .map(([texto, fundo, uso]) => {
          const r = contraste(token(texto), token(fundo));
          const nota = r >= 4.5 ? 'AA' : r >= 3 ? 'Só texto grande' : 'Não usar em texto';
          return `<tr><td><span class="amostra-par" style="color:var(${texto});background:var(${fundo})">Aa</span></td>
            <td><code>${texto}</code> sobre <code>${fundo}</code><br><span class="uso">${esc(uso)}</span></td>
            <td class="num">${r.toFixed(1).replace('.', ',')} : 1</td><td>${nota}</td></tr>`;
        })
        .join('');
    };
    desenhar();
    document.addEventListener('proto:tema', desenhar);
  }

  /* ---------- início ---------- */
  function iniciar() {
    if (params.has('limpo')) raiz.classList.add('limpo');
    aplicarTema(temaInicial(), false);
    document
      .querySelectorAll('[data-cartoes]')
      .forEach((el) => montarCartoes(el, el.dataset.cartoes.split(',')));
    document.querySelectorAll('[data-hoje]').forEach((el) => {
      el.textContent = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
    });
    // A abertura aparece inteira; só a frase "chega" (o site real espera o acervo carregar).
    const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(() => raiz.classList.add('chegou'), reduz ? 0 : 450);
    if (params.get('abrir')) abrirFrase(params.get('abrir'));
  }

  window.Proto = {
    A,
    FRASES,
    esc,
    comAspas,
    tamanhoFrase,
    linguaDoOriginal,
    autor,
    fotoGrande,
    fotoUrl,
    imagem,
    credito,
    abrirFrase,
    ampliarFoto,
    montarContraste,
    iniciar
  };
})();
