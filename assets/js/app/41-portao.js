/* Portão A da Etapa 9 (refeita): o seletor das assinaturas e da home mais calma.
   Lê ?assinatura=aspas|ficha|retratos e ?home=calma do endereço e põe em <html>
   (o CSS fica em telas/portao-a.css). Com ?portao no endereço, mostra uma barra
   para trocar ao vivo. Sai depois da escolha do proprietário. */
(function () {
  const OPCOES = {
    assinatura: [
      ['', 'Como está'],
      ['aspas', 'As aspas'],
      ['ficha', 'A ficha'],
      ['retratos', 'Os retratos']
    ],
    home: [
      ['', 'Como está'],
      ['calma', 'Mais calma']
    ],
    filme: [
      ['', 'Sem filme'],
      ['descubra', 'No Descubra'],
      ['abertura', 'Na abertura']
    ]
  };
  const ROTULO = { assinatura: 'Assinatura', home: 'Home', filme: 'Filme' };
  const raiz = document.documentElement;

  /* ===================================================================
     O FILME VIVO (opção do Portão A): retratos de várias pessoas, um por vez,
     com um movimento lento de câmera; a frase de cada uma é escrita por cima,
     palavra por palavra, e depois vêm o nome e a obra. Só dados reais: quem tem
     história, foto curada e frase com a fonte conferida. Pausa com o mouse em
     cima, com o foco dentro, fora da tela e no botão; com movimento reduzido,
     não troca sozinho e nada se move.
     =================================================================== */
  const filme = (function () {
    const LEITURA = 5000; // o tempo do Descubra pedido pelo proprietário, contado depois que a frase termina
    const PALAVRA = 55; // intervalo entre uma palavra e a seguinte
    const reduzido = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    let el = null;
    let pessoas = [];
    let atual = 0;
    let relogio = null;
    let pausas = new Set();
    let onde = '';

    const esc = (t) => escapeHtml(String(t == null ? '' : t));
    const doDia = (lista) => {
      const dia = new Date().toISOString().slice(0, 10);
      const nota = (t) => {
        let h = 2166136261;
        for (const c of dia + t) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
        return h >>> 0;
      };
      return [...lista].sort((a, b) => nota(a.nome) - nota(b.nome));
    };
    function listar() {
      const vistos = new Set();
      const lista = [];
      for (const s of STORIES) {
        const nome = canonAuthor(s.author);
        if (vistos.has(nome)) continue;
        vistos.add(nome);
        const p = photoInfo(nome);
        if (!p || !p.f || PHOTO_BLOCKLIST.has(p.f)) continue;
        const a = AUTOR_INDEX.get(nome);
        const frases = a
          ? a.frases.map((i) => QUOTES[i]).filter((q) => q && q.st === 'A' && q.text.length <= 150)
          : [];
        if (!frases.length) continue;
        // a de fonte mais curta primeiro: a nota longa da fonte não cabe no filme (continua na frase ampliada)
        frases.sort((x, y) => (x.src || '').length - (y.src || '').length);
        lista.push({ nome, historia: s.id, q: frases[0] });
      }
      return doDia(lista);
    }
    const palavras = (t) =>
      t
        .split(/\s+/)
        .map((w, i) => `<span class="filme-palavra" style="--i:${i}"><span>${esc(w)}</span></span>`)
        .join(' ');
    function plano(i) {
      const x = pessoas[i];
      const largura = innerWidth < 768 ? 900 : 1400;
      // a foto entra já pedida (eager): o próximo plano carrega enquanto o atual está na tela
      const img = photoImgHTML(x.nome, innerWidth < 768 ? 'card' : 'wide', largura).replace(
        'loading="lazy"',
        'loading="eager"'
      );
      const f = document.createElement('figure');
      f.className = 'filme-plano';
      f.style.setProperty('--dx', (i % 2 ? -1 : 1) * 1.6 + '%');
      f.innerHTML = img;
      return f;
    }
    function escrever() {
      const x = pessoas[atual];
      const q = x.q;
      const papel = typeof papelDe === 'function' ? papelDe(x.nome) : '';
      const texto = el.querySelector('.filme-texto');
      texto.classList.remove('entrou', 'saindo');
      texto.innerHTML = `
        <p class="filme-rotulo">${x.hoje ? 'Frase de hoje' : 'Descubra'}</p>
        <blockquote class="filme-frase" cite=""><p><span class="filme-aspa" aria-hidden="true">“</span>${palavras(q.text)}<span aria-hidden="true">”</span></p></blockquote>
        <p class="filme-nome nome-condensado">${esc(x.nome)}</p>
        <p class="filme-papel">${esc(papel)}${q.src ? `<span class="filme-obra">${esc(q.src)}</span>` : ''}</p>
        <div class="filme-acoes">
          <button class="btn btn-primary" type="button" data-historia="${esc(x.historia)}">Ler a história</button>
          <button class="btn-text" type="button" data-autor="${esc(x.nome)}">Conhecer ${esc(x.nome)}</button>
        </div>`;
      const n = q.text.split(/\s+/).length;
      texto.style.setProperty('--escrita', n * PALAVRA + 'ms');
      void texto.offsetWidth; // recomeça as animações
      texto.classList.add('entrou');
      return n * PALAVRA + 900; // quando a frase, o nome e a obra terminaram de entrar
    }
    function mostrar(i, direcao) {
      if (!pessoas.length) return;
      atual = (i + pessoas.length) % pessoas.length;
      const palco = el.querySelector('.filme-planos');
      const novo = plano(atual);
      const img = novo.querySelector('img');
      palco.appendChild(novo);
      const entrar = () => {
        // foto pequena demais para a tela inteira, ou que não veio: passa para a próxima pessoa
        if (!img.naturalWidth || img.naturalWidth < 640 || getComputedStyle(img).display === 'none') {
          novo.remove();
          pessoas.splice(atual, 1);
          return mostrar(direcao < 0 ? atual - 1 : atual, direcao);
        }
        requestAnimationFrame(() => novo.classList.add('ativo'));
        const antigos = [...palco.children].filter((x) => x !== novo);
        setTimeout(() => antigos.forEach((x) => x.remove()), 1600);
        // o texto da pessoa anterior sai antes (mais rápido do que o novo entra)
        const texto = el.querySelector('.filme-texto');
        texto.classList.add('saindo');
        setTimeout(() => agendar(escrever()), reduzido() || !texto.childElementCount ? 0 : 260);
      };
      if (img.complete && img.naturalWidth) entrar();
      else {
        img.addEventListener('load', entrar, { once: true });
        const t = setTimeout(entrar, 6000);
        img.addEventListener('load', () => clearTimeout(t), { once: true });
      }
    }
    function agendar(escrita) {
      clearTimeout(relogio);
      const tempo = el.querySelector('.filme-tempo');
      tempo.replaceChildren(document.createElement('i'));
      tempo.style.setProperty('--atraso', escrita + 'ms');
      if (reduzido()) return;
      relogio = { fim: performance.now() + escrita + LEITURA, resta: escrita + LEITURA };
      continuar();
    }
    function continuar() {
      if (!relogio || pausas.size || reduzido()) return;
      clearTimeout(relogio.id);
      relogio.fim = performance.now() + relogio.resta;
      relogio.id = setTimeout(() => mostrar(atual + 1, 1), relogio.resta);
    }
    function pausar(motivo, sim) {
      sim ? pausas.add(motivo) : pausas.delete(motivo);
      if (!el) return;
      el.toggleAttribute('data-pausa', pausas.size > 0);
      if (pausas.size && relogio && relogio.id) {
        clearTimeout(relogio.id);
        relogio.id = null;
        relogio.resta = Math.max(0, relogio.fim - performance.now());
      } else if (!pausas.size) continuar();
      const b = el.querySelector('.filme-pausa');
      b.setAttribute('aria-pressed', String(pausas.has('botao')));
      b.setAttribute('aria-label', pausas.has('botao') ? 'Continuar o filme' : 'Pausar o filme');
    }
    function montar(v) {
      onde = v;
      if (el) {
        clearTimeout(relogio && relogio.id);
        el.remove();
        el = null;
      }
      document.querySelectorAll('[data-filme-escondido]').forEach((x) => {
        x.hidden = false;
        x.removeAttribute('data-filme-escondido');
      });
      if (!v) return;
      if (typeof QUOTES === 'undefined' || QUOTES.length < 1000 || typeof STORIES === 'undefined') {
        setTimeout(() => montar(v), 400);
        return;
      }
      pessoas = listar();
      atual = 0;
      if (v === 'abertura') {
        // a frase de hoje abre o filme: espera a abertura da home ficar pronta e usa a mesma frase
        const botao = document.querySelector('#faixa [data-abrir-frase]');
        if (!botao) {
          setTimeout(() => montar(v), 400);
          return;
        }
        const q = QUOTES.find((x) => x.qid === botao.dataset.abrirFrase);
        const nome = q && canonAuthor(q.author);
        const k = pessoas.findIndex((x) => x.nome === nome);
        if (k >= 0) {
          const x = pessoas.splice(k, 1)[0];
          pessoas.unshift({ ...x, q, hoje: true });
        }
      }
      pausas = new Set();
      el = document.createElement('section');
      el.className = 'filme faixa-roxa';
      el.setAttribute('aria-label', 'Vozes do acervo');
      el.innerHTML = `
        <div class="filme-planos" aria-hidden="true"></div>
        <div class="filme-veu" aria-hidden="true"></div>
        <div class="wrap filme-grade">
          <div class="filme-texto"></div>
          <div class="filme-controles">
            <button class="btn-icon filme-pausa" type="button" aria-pressed="false" aria-label="Pausar o filme">
              <svg class="ic-pausa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
              <svg class="ic-tocar" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
            </button>
            <button class="btn-text filme-voltar" type="button">Voltar</button>
            <button class="btn-text filme-proxima" type="button">Próxima pessoa</button>
            <span class="filme-tempo" aria-hidden="true"><i></i></span>
          </div>
        </div>`;
      const alvo =
        v === 'abertura'
          ? document.getElementById('capa')
          : document.querySelector('#home-descubra .descubra-palco');
      alvo.hidden = true;
      alvo.setAttribute('data-filme-escondido', '');
      if (v === 'abertura') alvo.before(el);
      else {
        alvo.before(el);
        el.classList.remove('faixa-roxa'); // a sala roxa já é a seção do Descubra
      }
      el.querySelector('.filme-pausa').addEventListener('click', () => pausar('botao', !pausas.has('botao')));
      el.querySelector('.filme-voltar').addEventListener('click', () => mostrar(atual - 1, -1));
      el.querySelector('.filme-proxima').addEventListener('click', () => mostrar(atual + 1, 1));
      el.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && pausar('mouse', true));
      el.addEventListener('pointerleave', (e) => e.pointerType === 'mouse' && pausar('mouse', false));
      el.addEventListener('focusin', () => pausar('foco', true));
      el.addEventListener('focusout', (e) => !el.contains(e.relatedTarget) && pausar('foco', false));
      // os botões do texto usam a delegação da home (data-historia, data-autor) quando o filme está dentro dela
      el.addEventListener('click', (e) => {
        const h = e.target.closest('[data-historia]');
        const a = e.target.closest('[data-autor]');
        if (h && !el.closest('#view-home')) openBiography(h.dataset.historia);
        if (a && !el.closest('#view-home')) abrirPanorama(a.dataset.autor);
      });
      new IntersectionObserver(([r]) => el && pausar('fora', !r.isIntersecting), { threshold: 0.3 }).observe(
        el
      );
      document.addEventListener('visibilitychange', () => el && pausar('aba', document.hidden));
      mostrar(0, 1);
    }
    return { montar };
  })();
  const params = new URLSearchParams(location.search);
  const valido = (k, v) => OPCOES[k].some(([id]) => id === v);
  const aplicar = (k, v) => {
    v ? raiz.setAttribute('data-' + k, v) : raiz.removeAttribute('data-' + k);
    if (k === 'filme') filme.montar(v);
  };
  for (const k of Object.keys(OPCOES)) if (valido(k, params.get(k) || '')) aplicar(k, params.get(k) || '');
  if (!params.has('portao')) return;

  const barra = document.createElement('div');
  barra.className = 'portao-barra';
  barra.setAttribute('role', 'region');
  barra.setAttribute('aria-label', 'Opções do Portão A');
  // só textos fixos deste arquivo entram aqui
  barra.innerHTML =
    Object.keys(OPCOES)
      .map(
        (k) =>
          `<div class="portao-grupo"><span>${ROTULO[k]}</span>${OPCOES[k]
            .map(
              ([id, nome]) =>
                `<button type="button" data-portao="${k}" data-valor="${id}" aria-pressed="${(raiz.getAttribute('data-' + k) || '') === id}">${nome}</button>`
            )
            .join('')}</div>`
      )
      .join('') + '<button type="button" class="portao-recolher" aria-expanded="true">Esconder</button>';
  // no celular a barra começa recolhida, para não cobrir a tela
  if (innerWidth < 768) {
    barra.classList.add('recolhida');
    barra.querySelector('.portao-recolher').textContent = 'Opções do portão';
    barra.querySelector('.portao-recolher').setAttribute('aria-expanded', 'false');
  }
  barra.addEventListener('click', (e) => {
    const r = e.target.closest('.portao-recolher');
    if (r) {
      const fechada = barra.classList.toggle('recolhida');
      r.textContent = fechada ? 'Opções do portão' : 'Esconder';
      r.setAttribute('aria-expanded', String(!fechada));
      return;
    }
    const b = e.target.closest('[data-portao]');
    if (!b) return;
    const k = b.dataset.portao;
    aplicar(k, b.dataset.valor);
    barra
      .querySelectorAll(`[data-portao="${k}"]`)
      .forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const p = new URLSearchParams(location.search);
    b.dataset.valor ? p.set(k, b.dataset.valor) : p.delete(k);
    history.replaceState(history.state, '', '?' + p.toString() + location.hash);
  });
  document.body.appendChild(barra);
})();
