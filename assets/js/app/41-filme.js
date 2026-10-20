/* A assinatura "os retratos" e o filme vivo do Descubra (Portão A da Etapa 9 refeita,
   escolhidos pelo proprietário). Põe na página o filtro de duotono que telas/assinatura.css
   usa e monta o filme na seção Descubra da home (o CSS fica em telas/filme.css). */
(function () {
  const raiz = document.documentElement;

  // duotono dos retratos (café nas sombras nos dois temas, linho nas luzes; no escuro, um linho mais baixo)
  const duotono = (id, [r0, g0, b0], [r1, g1, b1]) => {
    const linha = (a, b) => {
      const d = (b - a) / 255;
      return `${(d * 0.2126).toFixed(4)} ${(d * 0.7152).toFixed(4)} ${(d * 0.0722).toFixed(4)} 0 ${(a / 255).toFixed(4)}`;
    };
    return `<filter id="${id}" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="${linha(r0, r1)} ${linha(g0, g1)} ${linha(b0, b1)} 0 0 0 1 0"/></filter>`;
  };
  document.body.insertAdjacentHTML(
    'beforeend',
    `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">${duotono('mm-duotono', [43, 24, 17], [250, 243, 225])}${duotono('mm-duotono-escuro', [43, 24, 17], [237, 227, 204])}</svg>`
  );

  /* ===================================================================
     O FILME VIVO: retratos de várias pessoas, um por vez,
     no mesmo duotono café e linho dos retratos, com uma câmera lenta (só em
     foto grande o bastante para não borrar). A frase de cada pessoa é escrita
     palavra por palavra; depois vêm o nome e a obra. Só dados reais: quem tem
     história, foto curada que carrega e frase com a fonte conferida, dita pela
     própria pessoa. O filme entra no lugar do Descubra de antes só quando a foto
     da primeira pessoa está pronta: se nenhuma foto vier (sem rede, Commons fora
     do ar), o Descubra de antes fica. A próxima foto carrega durante a leitura. Pausa com o
     mouse em cima, com o foco dentro, fora da tela, com a aba escondida e no
     botão. Com movimento reduzido, nada se move nem troca sozinho.
     =================================================================== */
  const filme = (function () {
    const LEITURA = 5000; // o tempo do Descubra pedido pelo proprietário, contado depois que a frase termina
    const PALAVRA = 40; // intervalo entre uma palavra e a seguinte (o --mov-cascata)
    const FUSAO = 1400; // a fusão das fotos (o --mov-filme, a exceção ao teto de 450 ms)
    // notas de fonte que atribuem a frase a outra pessoa ficam de fora (vão para a curadoria)
    const NOTA_DE_OUTRA_PESSOA = /credit|atribu|segundo |apud|citad|popular/i;
    const reduzido = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    let el = null;
    let pessoas = [];
    let atual = 0;
    let relogio = null;
    let pausas = new Set();
    let passo = 0; // cada troca de pessoa tem o seu número: uma foto que chega atrasada não age na troca seguinte
    let falhas = 0;
    let observador = null;
    // o filme só monta com o acervo final: a cadeia de fases de curadoria (app/99) ainda muda os dados
    // depois da carga; a home faz o mesmo (app/40)
    let curadoriaPronta = false;
    const cadeia = window.__fase5Boot;
    window.__fase5Boot = function () {
      if (typeof cadeia === 'function') cadeia.apply(this, arguments);
      curadoriaPronta = true;
    };

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
        const frases = (a ? a.frases.map((i) => QUOTES[i]) : []).filter(
          (q) =>
            q &&
            q.st === 'A' &&
            q.text.length <= 110 && // até 110 caracteres: a frase cabe em quatro linhas na sala
            (q.src || '').length <= 70 && // a fonte cabe em duas linhas: a altura do filme não muda
            !NOTA_DE_OUTRA_PESSOA.test(q.src || '')
        );
        if (!frases.length) continue;
        // a de fonte mais curta primeiro: a nota longa da fonte não cabe no filme (continua na frase ampliada)
        frases.sort((x, y) => (x.src || '').length - (y.src || '').length);
        lista.push({ nome, historia: s.id, q: frases[0] });
      }
      return doDia(lista);
    }
    // a aspa de fechamento vai junto da última palavra: nunca fica sozinha antes da frase ser escrita
    const palavras = (t) => {
      // palavra de uma letra não fica sozinha no fim da linha ("quanto o / riso"): vai junto da seguinte
      const ws = t.split(/\s+/).reduce((acc, w) => {
        const ant = acc[acc.length - 1];
        if (ant && ant.length === 1 && /\p{L}/u.test(ant)) acc[acc.length - 1] = ant + '\u00a0' + w;
        else acc.push(w);
        return acc;
      }, []);
      return ws
        .map(
          (w, i) =>
            `<span class="filme-palavra" style="--i:${i}"><span>${esc(w)}${i === ws.length - 1 ? '”' : ''}</span></span>`
        )
        .join(' ');
    };
    const fotoHTML = (nome) =>
      photoImgHTML(nome, innerWidth < 768 ? 'card' : 'wide', innerWidth < 768 ? 900 : 1400).replace(
        'loading="lazy"',
        'loading="eager"'
      );
    // a foto da pessoa, já carregada e decodificada; null se não veio ou é pequena demais para a sala
    function carregar(x) {
      return new Promise((pronto) => {
        const f = document.createElement('figure');
        f.className = 'filme-plano';
        f.innerHTML = fotoHTML(x.nome);
        const img = f.querySelector('img');
        // na sala larga do computador a foto vertical é muito cortada em altura: o enquadramento sobe
        // em relação ao do cartão, para a cabeça não sair pelo alto (Gandhi, Buffett)
        if (innerWidth >= 768) {
          const y = parseFloat(((photoInfo(x.nome) || {}).card || 'center 22%').split(' ')[1]) || 22;
          img.style.objectPosition = `center ${Math.max(0, y - 10)}%`;
        }
        el.querySelector('.filme-planos').appendChild(f); // invisível até a troca (opacidade 0)
        let feito = false;
        const fim = (boa) => {
          if (feito) return;
          feito = true;
          if (!boa) f.remove();
          pronto(boa ? f : null);
        };
        const ver = () => {
          if (img.naturalWidth < 640) return fim(false);
          (img.decode ? img.decode() : Promise.resolve()).then(
            () => fim(true),
            () => fim(true)
          );
        };
        if (img.complete && img.naturalWidth) ver();
        img.addEventListener('load', ver);
        // a foto que falha passa pelas reservas do site (cópia local, Wikipédia); se nenhuma vier, segue
        img.addEventListener('error', () => setTimeout(() => !img.naturalWidth && fim(false), 1200));
        setTimeout(() => (img.naturalWidth >= 640 ? ver() : fim(false)), 6000);
      });
    }
    function escrever(animar) {
      const x = pessoas[atual];
      const q = x.q;
      const papel = typeof papelDe === 'function' ? papelDe(x.nome) : '';
      const texto = el.querySelector('.filme-texto');
      texto.classList.remove('entrou', 'saindo');
      texto.innerHTML = `
        <blockquote class="filme-frase"><p data-tamanho="${q.text.length > 80 ? 'longa' : q.text.length > 50 ? 'media' : 'curta'}"><span class="filme-linhas"><span class="filme-aspa" aria-hidden="true">“</span>${palavras(q.text)}</span></p></blockquote>
        <p class="filme-nome nome-condensado">${esc(x.nome)}</p>
        <p class="filme-papel">${esc(papel)}${q.src ? `<span class="filme-obra">${esc(q.src)}${q.st === 'A' ? ' <span class="filme-conferida">· fonte conferida</span>' : ''}</span>` : ''}</p>
        <div class="filme-acoes">
          <button class="btn btn-primary" type="button" data-historia="${esc(x.historia)}">Ler a história</button>
          <button class="btn-text" type="button" data-autor="${esc(x.nome)}">Conhecer ${esc(x.nome)}</button>
        </div>`;
      const n = q.text.split(/\s+/).length;
      texto.style.setProperty('--escrita', n * PALAVRA + 'ms');
      if (!animar || reduzido()) return 0;
      void texto.offsetWidth; // recomeça as animações
      texto.classList.add('entrou');
      return n * PALAVRA + 900; // quando a frase, o nome e a obra terminaram de entrar
    }
    function parar() {
      if (relogio) clearTimeout(relogio.id);
      relogio = null;
    }
    async function mostrar(i, direcao, manual) {
      if (!el || !pessoas.length) return;
      parar(); // troca manual: o relógio da pessoa anterior não pode disparar de novo
      const meu = ++passo;
      let k = i;
      let f = null;
      while (pessoas.length) {
        k = ((k % pessoas.length) + pessoas.length) % pessoas.length;
        f = await carregar(pessoas[k]);
        if (meu !== passo || !el) {
          if (f) f.remove();
          return;
        }
        if (f) break;
        pessoas.splice(k, 1); // sem foto que sirva: sai do filme desta visita
        if (direcao < 0) k--;
        // antes de entrar, quatro fotos seguidas sem chegar querem dizer sem rede: fica o Descubra de antes
        if (!el.isConnected && ++falhas >= 4) return;
      }
      if (!f) return;
      atual = k;
      const palco = el.querySelector('.filme-planos');
      const texto = el.querySelector('.filme-texto');
      const primeira = !texto.childElementCount;
      if (primeira) entrar();
      // a câmera só anda em foto pelo menos 25% maior do que a sala, para não borrar
      if (f.querySelector('img').naturalWidth >= 1.25 * f.getBoundingClientRect().width)
        f.classList.add('camera');
      // a troca passa pelo roxo da sala: a foto anterior sai e a nova entra logo depois (sem dupla exposição)
      const antigos = [...palco.children].filter((x) => x !== f && x.classList.contains('ativo'));
      antigos.forEach((x) => x.classList.remove('ativo'));
      requestAnimationFrame(() => f.classList.add('ativo'));
      setTimeout(() => antigos.forEach((x) => x.remove()), FUSAO + 100);
      // o leitor de tela anuncia só a troca pedida pela pessoa, não a automática
      texto.setAttribute('aria-live', manual ? 'polite' : 'off');
      if (primeira) {
        escrever(false);
        agendar(0);
      } else {
        // o texto anterior sai rápido e o novo começa a 40% da fusão: não há sala vazia entre as pessoas
        texto.classList.add('saindo');
        setTimeout(() => meu === passo && el && agendar(escrever(true)), reduzido() ? 0 : FUSAO * 0.4);
      }
      // a foto da próxima pessoa já começa a carregar durante a leitura
      const prox = pessoas[(atual + 1) % pessoas.length];
      const src = prox && fotoHTML(prox.nome).match(/src="([^"]+)"/);
      if (src) new Image().src = src[1].replace(/&amp;/g, '&');
    }
    function agendar(escrita) {
      parar();
      const tempo = el.querySelector('.filme-tempo');
      tempo.replaceChildren(document.createElement('i'));
      tempo.style.setProperty('--atraso', escrita + 'ms');
      tempo.style.setProperty('--leitura', LEITURA + 'ms');
      if (reduzido()) return;
      relogio = { fim: performance.now() + escrita + LEITURA, resta: escrita + LEITURA };
      continuar();
    }
    function continuar() {
      if (!relogio || pausas.size || reduzido()) return;
      clearTimeout(relogio.id);
      relogio.fim = performance.now() + relogio.resta;
      relogio.id = setTimeout(() => mostrar(atual + 1, 1, false), relogio.resta);
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
    // a aba escondida pausa o filme que estiver montado (um listener só, para todas as montagens)
    document.addEventListener('visibilitychange', () => el && pausar('aba', document.hidden));

    // o filme entra no lugar do Descubra de antes, com o rótulo da seção
    function entrar() {
      const secao = document.getElementById('home-descubra');
      secao.querySelector('.descubra-palco').before(el);
      secao.setAttribute('aria-labelledby', 't-filme');
      raiz.setAttribute('data-filme', 'descubra');
      requestAnimationFrame(() => el.classList.add('pronto'));
      observador = new IntersectionObserver(([r]) => pausar('fora', !r.isIntersecting), { threshold: 0.3 });
      observador.observe(el);
    }
    function montar() {
      if (!document.querySelector('#home-descubra .descubra-palco')) return;
      el = document.createElement('div');
      el.className = 'filme';
      el.innerHTML = `
        <div class="filme-planos" aria-hidden="true"></div>
        <div class="filme-veu" aria-hidden="true"></div>
        <div class="wrap filme-grade">
          <h2 class="filme-rotulo" id="t-filme">Descubra</h2>
          <div class="filme-texto" aria-live="off"></div>
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
      el.querySelector('.filme-pausa').addEventListener('click', () => pausar('botao', !pausas.has('botao')));
      el.querySelector('.filme-voltar').addEventListener('click', () => mostrar(atual - 1, -1, true));
      el.querySelector('.filme-proxima').addEventListener('click', () => mostrar(atual + 1, 1, true));
      el.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && pausar('mouse', true));
      el.addEventListener('pointerleave', (e) => e.pointerType === 'mouse' && pausar('mouse', false));
      el.addEventListener('focusin', () => pausar('foco', true));
      el.addEventListener('focusout', (e) => !el.contains(e.relatedTarget) && pausar('foco', false));
      // os botões "Ler a história" e "Conhecer" usam a delegação da home (data-historia, data-autor)
      pausar('aba', document.hidden);
      preparar();
    }
    // espera o acervo final
    function preparar() {
      const semDados =
        !curadoriaPronta ||
        typeof QUOTES === 'undefined' ||
        QUOTES.length < 1000 ||
        typeof STORIES === 'undefined';
      if (semDados) {
        setTimeout(preparar, 300);
        return;
      }
      pessoas = listar();
      atual = 0;
      mostrar(0, 1, false);
    }
    return { montar };
  })();
  filme.montar();
})();
