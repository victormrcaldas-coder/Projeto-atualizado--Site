/* MeMotiva — app/14-fotos-procedencia-variantes.js
   Busca de fotos (Wikipédia/Commons), exibição da procedência e agrupamento de variantes.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   LIGAÇÕES DA FASE 3
   ================================================================ */

/* ================================================================
   FASE 4 — FOTOGRAFIAS
   O ambiente onde eu trabalho não alcança a API da Wikipédia, mas o
   navegador do usuário alcança. Em vez de depender só de nomes de
   arquivo que eu não consigo validar daqui, o site agora resolve a
   foto em tempo de execução quando a curadoria falha.

   Cadeia: arquivo curado → asset local → API da Wikipédia (pt→en)
           → iniciais coloridas.
   O resultado fica em cache (memória + armazenamento) para não
   repetir a consulta.
   ================================================================ */

/* Arquivos que EXISTEM mas não são retrato da pessoa. O de Drummond
   é a foto de um poema pintado num muro em Leiden, catalogado no
   Commons como "Wall poems in Leiden" — por isso aparecia poesia no
   lugar do rosto. */
const PHOTO_BLOCKLIST = new Set([
  'Carlos Drummond de Andrade - Papel.jpg',
  'Carlos Drummond de Andrade, Itabira.jpg',
  'Memorial Drummond.JPG'
]);

/* Títulos na Wikipédia quando diferem do nome exibido no site. */
const WIKI_TITLES = {
  'Profeta Muhammad': 'Maomé',
  'Apóstolo Paulo': 'Paulo de Tarso',
  'Jesus Cristo': 'Jesus',
  Buda: 'Gautama Buda',
  'Lao Tsé': 'Lao Zi',
  Sêneca: 'Sêneca',
  Cícero: 'Cícero',
  'Marco Aurélio': 'Marco Aurélio',
  Epicteto: 'Epicteto',
  'Sun Tzu': 'Sun Tzu',
  'Dalai Lama': 'Tenzin Gyatso',
  'Madre Teresa de Calcutá': 'Madre Teresa de Calcutá',
  Rumi: 'Rumi',
  Krishna: 'Krishna',
  Hipátia: 'Hipátia',
  'Guimarães Rosa': 'João Guimarães Rosa',
  'Santos Dumont': 'Alberto Santos Dumont',
  Pelé: 'Pelé',
  'bell hooks': 'bell hooks',
  'Zumbi dos Palmares': 'Zumbi',
  'Graciliano Ramos': 'Graciliano Ramos',
  'Chico Xavier': 'Chico Xavier',
  Aleijadinho: 'Aleijadinho',
  'Tarsila do Amaral': 'Tarsila do Amaral',
  'Charles Chaplin': 'Charlie Chaplin',
  'Liev Tolstói': 'Liev Tolstói',
  'Martin Luther King Jr.': 'Martin Luther King Jr.',
  'Carl Gustav Jung': 'Carl Gustav Jung',
  'Ada Lovelace': 'Ada Lovelace',
  'Chien-Shiung Wu': 'Chien-Shiung Wu',
  'Rosa Luxemburgo': 'Rosa Luxemburgo',
  'Simón Bolívar': 'Simón Bolívar',
  'Nise da Silveira': 'Nise da Silveira',
  'Ailton Krenak': 'Ailton Krenak',
  'Marielle Franco': 'Marielle Franco',
  'Mao Tsé-Tung': 'Mao Tsé-Tung',
  'Getúlio Vargas': 'Getúlio Vargas',
  'Rui Barbosa': 'Rui Barbosa',
  'Francisco de Assis': 'Francisco de Assis',
  'Santo Agostinho': 'Agostinho de Hipona',
  'Martinho Lutero': 'Martinho Lutero',
  'Thich Nhat Hanh': 'Thich Nhat Hanh',
  'Wangari Maathai': 'Wangari Maathai',
  'Desmond Tutu': 'Desmond Tutu',
  'Kofi Annan': 'Kofi Annan',
  'Amartya Sen': 'Amartya Sen',
  'Jack Ma': 'Jack Ma'
};
function wikiTitle(name) {
  return WIKI_TITLES[canonAuthor(name)] || canonAuthor(name);
}

/* ---- cache ---- */
const _photoCache = new Map();
const _photoPending = new Map();
(async function loadPhotoCache() {
  try {
    const raw = await dbGet('photoCache');
    if (raw) JSON.parse(raw).forEach(([k, v]) => _photoCache.set(k, v));
  } catch (e) {
    /* sem armazenamento: só cache de memória */
  }
})();
let _saveTimer = null;
function persistPhotoCache() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    try {
      dbSet('photoCache', JSON.stringify([..._photoCache].slice(-400)));
    } catch (e) {}
  }, 1500);
}

/* ---- consulta à Wikipédia (pt → en) ---- */
async function fetchWikiPhoto(name) {
  const title = wikiTitle(name);
  for (const lang of ['pt', 'en']) {
    try {
      const url =
        `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&origin=*` +
        `&prop=pageimages&piprop=thumbnail|name&pithumbsize=640&redirects=1` +
        `&titles=${encodeURIComponent(title)}`;
      const r = await fetch(url, { mode: 'cors' });
      if (!r.ok) continue;
      const data = await r.json();
      const pages = data?.query?.pages || {};
      for (const id in pages) {
        const p = pages[id];
        const file = p.pageimage || '';
        if (!p.thumbnail?.source) continue;
        if (PHOTO_BLOCKLIST.has(file.replace(/_/g, ' '))) continue; // muro, estátua, placa
        if (/\.(svg|ogg|webm)$/i.test(file)) continue; // brasão, assinatura, áudio
        return p.thumbnail.source;
      }
    } catch (e) {
      /* tenta o próximo idioma */
    }
  }
  return null;
}
function resolvePhoto(name) {
  const key = canonAuthor(name);
  if (_photoCache.has(key)) return Promise.resolve(_photoCache.get(key));
  if (_photoPending.has(key)) return _photoPending.get(key);
  const p = fetchWikiPhoto(key).then((url) => {
    _photoCache.set(key, url || '');
    _photoPending.delete(key);
    persistPhotoCache();
    return url || '';
  });
  _photoPending.set(key, p);
  return p;
}

/* ---- nova cadeia de fallback das <img> ---- */
window.__photoFail = function (img) {
  const next = img.dataset.next;
  if (next) {
    img.dataset.next = '';
    img.src = next;
    return;
  }
  if (img.dataset.wikiTried !== '1') {
    img.dataset.wikiTried = '1';
    const nome = img.dataset.person || img.getAttribute('alt') || '';
    if (nome) {
      resolvePhoto(nome)
        .then((url) => {
          if (url) {
            img.src = url;
            img.dataset.resolved = '1';
          } else showInitials(img);
        })
        .catch(() => showInitials(img));
      return;
    }
  }
  showInitials(img);
};
function showInitials(img) {
  img.style.display = 'none';
  const fb = img.parentElement && img.parentElement.querySelector('.avatar-fallback, .story-cover-fallback');
  if (fb) fb.style.display = 'flex';
  const blur = img.parentElement && img.parentElement.querySelector('.story-cover-blur');
  if (blur) blur.style.display = 'none';
}

/* Pessoas sem entrada curada começam direto pela Wikipédia, em vez
   de piscar um 404 antes. */
function photoImgHTML(name, ctx, width) {
  const p = photoInfo(name);
  const slug = slugify(canonAuthor(name));
  const local = localAuthorPhoto(slug);
  let file = p ? (ctx === 'wide' && p.fw ? p.fw : p.f) : null;
  if (file && PHOTO_BLOCKLIST.has(file)) file = null;
  const cached = _photoCache.get(canonAuthor(name));
  const src = file ? commonsURL(file, width) : cached || local || NO_IMG;
  const next = file ? local : '';
  const pos = p ? (ctx === 'wide' ? p.wide || 'center 28%' : p.card || 'center 22%') : 'center 22%';
  return `<img src="${src}" data-next="${next}" data-person="${escapeHtml(canonAuthor(name))}"
    alt="${escapeHtml(name)}" loading="lazy" decoding="async"
    style="object-position:${pos};" onerror="window.__photoFail(this)">`;
}

/* Pré-carrega as fotos de quem tem biografia, assim que o site abre.
   Só consulta quem não tem arquivo curado nem cache. */
/* A Home mostrava 3 cartões, o que deixava um buraco na grade de
   4 colunas. Passa a mostrar 4, variando por dia e priorizando quem
   já tem fotografia curada. */
function pickHomeStories(n) {
  const comFoto = STORIES.filter((s) => {
    const p = PHOTOS[canonAuthor(s.author)];
    return p && p.f;
  });
  const base = comFoto.length >= n ? comFoto : STORIES;
  const dia = Math.floor(Date.now() / 86400000);
  const inicio = base.length ? (dia * n) % base.length : 0;
  const fora = [];
  for (let i = 0; i < n && i < base.length; i++) fora.push(base[(inicio + i) % base.length]);
  return fora;
}

function prefetchStoryPhotos() {
  const pendentes = STORIES.map((s) => canonAuthor(s.author)).filter((n) => {
    const p = PHOTOS[n];
    if (p && p.f && !PHOTO_BLOCKLIST.has(p.f)) return false;
    return !_photoCache.has(n);
  });
  let i = 0;
  (function lote() {
    const parte = pendentes.slice(i, i + 6);
    if (!parte.length) return;
    i += 6;
    Promise.all(parte.map(resolvePhoto)).then(() => setTimeout(lote, 400));
  })();
}

/* ================================================================
   FOTOGRAFIAS CURADAS — lotes C e D
   ================================================================ */
Object.assign(PHOTOS, {
  /* Drummond: sem o muro de Leiden. O retrato vem da Wikipédia. */
  'Carlos Drummond de Andrade': { f: null, card: 'center 20%', wide: 'center 24%' },

  'Rosalind Franklin': { f: 'Rosalind Franklin (1920-1958).jpg', card: 'center 20%', wide: 'center 24%' },
  'Barbara McClintock': { f: 'Barbara McClintock (1902-1992).jpg', card: 'center 20%', wide: 'center 24%' },
  'Grace Hopper': {
    f: 'Commodore Grace M. Hopper, USN (covered).jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Lise Meitner': {
    f: 'Lise Meitner (1878-1968), lecturing at Catholic University, Washington, D.C., 1946.jpg',
    card: 'center 18%',
    wide: 'center 22%'
  },
  'Chien-Shiung Wu': { f: 'Chien-Shiung Wu (1912-1997) in 1963.jpg', card: 'center 20%', wide: 'center 24%' },
  Hipátia: { f: 'Hypatia portrait.png', card: 'center 22%', wide: 'center 26%' },
  'Katherine Johnson': { f: 'Katherine Johnson 1983.jpg', card: 'center 20%', wide: 'center 24%' },
  'Jane Goodall': { f: 'Jane Goodall 2015.jpg', card: 'center 20%', wide: 'center 24%' },
  'Alan Turing': { f: 'Alan Turing Aged 16.jpg', card: 'center 20%', wide: 'center 24%' },
  'Isaac Newton': {
    f: 'Portrait of Sir Isaac Newton, 1689 (brightened).jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Galileu Galilei': {
    f: 'Justus Sustermans - Portrait of Galileo Galilei, 1636.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Nikola Tesla': { f: 'N.Tesla.JPG', card: 'center 20%', wide: 'center 24%' },
  'Oswaldo Cruz': { f: 'Oswaldo Cruz 1900s.jpg', card: 'center 20%', wide: 'center 24%' },
  'Baruch Spinoza': { f: 'Spinoza.jpg', card: 'center 22%', wide: 'center 26%' },
  Voltaire: {
    f: 'Atelier de Nicolas de Largillière, portrait de Voltaire, détail (musée Carnavalet) -002.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Jean-Jacques Rousseau': {
    f: 'Jean-Jacques Rousseau (painted portrait).jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'John Locke': { f: 'JohnLocke.png', card: 'center 20%', wide: 'center 24%' },
  'Michel Foucault': { f: 'Michel Foucault 1974 Brasil.jpg', card: 'center 20%', wide: 'center 24%' },
  'Santo Agostinho': {
    f: 'Sandro Botticelli - St Augustin dans son cabinet de travail.jpg',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Fiódor Dostoiévski': {
    f: 'Vasily Perov - Портрет Ф.М.Достоевского - Google Art Project.jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Miguel de Cervantes': { f: 'Cervantes Jáuregui.jpg', card: 'center 20%', wide: 'center 24%' },
  'Johann Wolfgang von Goethe': { f: 'Goethe (Stieler 1828).jpg', card: 'center 20%', wide: 'center 24%' },
  'Emily Dickinson': {
    f: 'Black-white photograph of Emily Dickinson2.png',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Rainer Maria Rilke': { f: 'Rainer Maria Rilke, 1900.jpg', card: 'center 20%', wide: 'center 24%' },
  'Luís de Camões': {
    f: 'Retrato de Luís de Camões (c. 1577) - Fernão Gomes.png',
    card: 'center 22%',
    wide: 'center 26%'
  },
  'Jorge Amado': { f: 'Jorge Amado (1935).jpg', card: 'center 20%', wide: 'center 24%' },
  'Lima Barreto': { f: 'Lima Barreto 1917.jpg', card: 'center 20%', wide: 'center 24%' },
  'Manuel Bandeira': { f: 'Manuel Bandeira 1950.jpg', card: 'center 20%', wide: 'center 24%' },
  'Vinicius de Moraes': { f: 'Vinicius de Moraes (1970).tif', card: 'center 20%', wide: 'center 24%' },
  'Mário Quintana': { f: 'Mario Quintana.jpg', card: 'center 20%', wide: 'center 24%' },
  'Florbela Espanca': { f: 'Florbela Espanca.jpg', card: 'center 20%', wide: 'center 24%' },
  'George Orwell': { f: 'George Orwell press photo.jpg', card: 'center 20%', wide: 'center 24%' },
  'Antoine de Saint-Exupéry': { f: 'Antoine de Saint-Exupéry.jpg', card: 'center 20%', wide: 'center 24%' },
  'Walt Disney': { f: 'Walt Disney 1946.JPG', card: 'center 20%', wide: 'center 24%' },
  'Richard Branson': {
    f: 'Richard Branson March 2015 (cropped).jpg',
    card: 'center 18%',
    wide: 'center 22%'
  },
  'Howard Schultz': { f: 'Howard Schultz 2011 Shankbone.JPG', card: 'center 18%', wide: 'center 22%' },
  'Melinda French Gates': { f: 'Melinda Gates 2014.jpg', card: 'center 18%', wide: 'center 22%' },
  'Abílio Diniz': { f: 'Abilio Diniz.jpg', card: 'center 20%', wide: 'center 24%' },
  'Peter Lynch': { f: 'Peter Lynch.jpg', card: 'center 20%', wide: 'center 24%' },
  'Howard Marks': { f: 'Howard Marks 2019.jpg', card: 'center 20%', wide: 'center 24%' },
  'John Maynard Keynes': { f: 'John Maynard Keynes.jpg', card: 'center 20%', wide: 'center 24%' },
  'Milton Friedman': { f: 'Portrait of Milton Friedman.jpg', card: 'center 20%', wide: 'center 24%' },
  'Amartya Sen': { f: 'Amartya Sen NIH.jpg', card: 'center 20%', wide: 'center 24%' },
  'John F. Kennedy': {
    f: 'John F. Kennedy, White House color photo portrait.jpg',
    card: 'center 18%',
    wide: 'center 22%'
  },
  'Václav Havel': { f: 'Václav Havel cut out.jpg', card: 'center 20%', wide: 'center 24%' },
  'Kofi Annan': { f: 'Kofi Annan 2012 (cropped).jpg', card: 'center 18%', wide: 'center 22%' },
  'Martinho Lutero': {
    f: 'Lucas Cranach d.Ä. - Martin Luther, 1528 (Veste Coburg).jpg',
    card: 'center 20%',
    wide: 'center 24%'
  },
  'Desmond Tutu': { f: 'Desmond Tutu 2013.jpg', card: 'center 18%', wide: 'center 22%' },
  'Frederick Douglass': { f: 'Frederick Douglass (circa 1879).jpg', card: 'center 20%', wide: 'center 24%' },
  'Harriet Tubman': { f: 'Harriet Tubman c1868-69.jpg', card: 'center 20%', wide: 'center 24%' },
  'Marielle Franco': { f: 'Marielle Franco.jpg', card: 'center 18%', wide: 'center 22%' },
  'Ailton Krenak': { f: 'Ailton Krenak (cropped).jpg', card: 'center 18%', wide: 'center 22%' },
  'Rosa Luxemburgo': { f: 'Rosa Luxemburg.jpg', card: 'center 20%', wide: 'center 24%' },
  'Pablo Picasso': { f: 'Portrait de Picasso, 1908.jpg', card: 'center 20%', wide: 'center 24%' },
  'Wolfgang Amadeus Mozart': { f: 'Wolfgang-amadeus-mozart 1.jpg', card: 'center 20%', wide: 'center 24%' },
  'Candido Portinari': { f: 'Candido Portinari, 1962.tif', card: 'center 20%', wide: 'center 24%' },
  'Maria Callas': { f: 'Maria Callas (La Traviata) 2.jpg', card: 'center 18%', wide: 'center 22%' },
  'Jean Piaget': { f: 'Jean Piaget in Ann Arbor.png', card: 'center 20%', wide: 'center 24%' },
  'Nise da Silveira': { f: 'Nise da Silveira.jpg', card: 'center 20%', wide: 'center 24%' },
  'Daniel Goleman': { f: 'Daniel Goleman.jpg', card: 'center 18%', wide: 'center 22%' },
  'Serena Williams': { f: 'Serena Williams at 2013 US Open.jpg', card: 'center 16%', wide: 'center 20%' },
  'Jesse Owens': { f: 'Jesse Owens 1936.jpg', card: 'center 20%', wide: 'center 24%' },
  'Michael Jordan': { f: 'Michael Jordan in 2014.jpg', card: 'center 18%', wide: 'center 22%' },
  'Getúlio Vargas': { f: 'Getúlio Vargas (1930).jpg', card: 'center 20%', wide: 'center 24%' },
  'Mao Tsé-Tung': { f: 'Mao Zedong portrait.jpg', card: 'center 20%', wide: 'center 24%' }
});

/* ================================================================
   EXIBIÇÃO HONESTA DA PROCEDÊNCIA
   A expansão do cartão passa a mostrar a fonte e, quando a frase é
   paráfrase ou está pendente de revisão, diz isso com todas as
   letras — em vez de apresentar plausibilidade como prova.
   ================================================================ */
const STATUS_ROTULO = {
  A: { texto: '', classe: '' },
  'A-': { texto: '', classe: '' },
  B: { texto: '', classe: '' },
  P: { texto: 'Paráfrase ou atribuição popular — sem fonte primária localizada.', classe: 'src-alerta' },
  R: { texto: 'Atribuição corrente; fonte ainda não localizada.', classe: 'src-alerta' },
  X: { texto: '', classe: '' }
};

/* ================================================================
   AGRUPAMENTO DE VARIANTES — NÃO DESTRUTIVO
   ----------------------------------------------------------------
   O banco acumulou traduções diferentes da mesma passagem como se
   fossem frases distintas (Tao Te Ching 33 aparece 9 vezes, a Ética
   a Nicômaco VIII, 16). Isso enche a grade do Explorar de repetição.

   Em vez de apagar — o que seria irreversível — as variantes são
   agrupadas: uma é eleita representante e as demais ficam ocultas
   na navegação, mas continuam no banco, continuam aparecendo na
   busca e podem ser reveladas com um clique.
   ================================================================ */

/* Duas frases só são variantes uma da outra quando (a) apontam a
   mesma fonte E (b) dizem substancialmente a mesma coisa. A segunda
   condição é o que impede que dois trechos diferentes do mesmo livro
   sejam tratados como repetição. */
const _STOP = new Set([
  'a',
  'o',
  'as',
  'os',
  'de',
  'da',
  'do',
  'das',
  'dos',
  'e',
  'é',
  'que',
  'em',
  'um',
  'uma',
  'no',
  'na',
  'se',
  'por',
  'com',
  'para',
  'ao',
  'à',
  'mais',
  'não',
  'nem',
  'the',
  'of'
]);
function _tokens(t) {
  return new Set(
    t
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9 ]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !_STOP.has(w))
      .map((w) => w.replace(/(mente|ando|endo|indo|ava|ou|es|as|os|a|o|e)$/, ''))
  );
}
function _similar(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  a.forEach((w) => {
    if (b.has(w)) inter++;
  });
  return inter / Math.min(a.size, b.size);
}
function fonteAgrupavel(src) {
  if (!src) return false;
  if (
    /não confirmad|não identificad|não localizad|Atribuição popular|Paráfrase|paráfrase|sem fonte|sem registro|sem localização|demais obras|e entrevistas|e discursos|e palestras|e demais/i.test(
      src
    )
  )
    return false;
  return true;
}

const VARIANTES = { grupos: 0, ocultas: 0 };

(function agruparVariantes() {
  const porFonte = new Map();
  QUOTES.forEach((q, i) => {
    if (!fonteAgrupavel(q.src)) return;
    const k = canonAuthor(q.author) + ' ⟨' + q.src + '⟩';
    if (!porFonte.has(k)) porFonte.set(k, []);
    porFonte.get(k).push(i);
  });

  porFonte.forEach((idxs, chave) => {
    if (idxs.length < 2) return;
    const toks = idxs.map((i) => _tokens(QUOTES[i].text));
    /* componentes conexas por similaridade */
    const pai = idxs.map((_, i) => i);
    const raiz = (x) => {
      while (pai[x] !== x) x = pai[x] = pai[pai[x]];
      return x;
    };
    for (let i = 0; i < idxs.length; i++)
      for (let j = i + 1; j < idxs.length; j++)
        if (_similar(toks[i], toks[j]) >= 0.55) {
          const ri = raiz(i),
            rj = raiz(j);
          if (ri !== rj) pai[rj] = ri;
        }

    const clusters = new Map();
    idxs.forEach((_, i) => {
      const r = raiz(i);
      if (!clusters.has(r)) clusters.set(r, []);
      clusters.get(r).push(idxs[i]);
    });

    clusters.forEach((grupo) => {
      if (grupo.length < 2) return;
      const melhor = grupo.slice().sort((a, b) => {
        const pa = QUOTES[a].st === 'A' ? 0 : 1,
          pb = QUOTES[b].st === 'A' ? 0 : 1;
        if (pa !== pb) return pa - pb;
        return QUOTES[b].text.length - QUOTES[a].text.length;
      })[0];
      VARIANTES.grupos++;
      grupo.forEach((i) => {
        QUOTES[i].vg = chave;
        QUOTES[i].vn = grupo.length;
        if (i !== melhor) {
          QUOTES[i].vdup = true;
          VARIANTES.ocultas++;
        }
      });
    });
  });
})();

/* Preferências de navegação. Ambas ligadas por padrão: a grade fica
   limpa e mostra só frases que o usuário pode conferir. */
state.exploreFilter.agrupar = true; // uma frase por passagem
state.exploreFilter.somenteFonte = false;
/* ---- opções de curadoria dentro do painel de atuação ---- */
function renderCuradoriaOpcoes() {
  const box = document.getElementById('curadoriaOpcoes');
  if (!box) return;
  const f = state.exploreFilter;
  box.innerHTML = `
    <button class="cur-opt ${f.agrupar ? 'on' : ''}" data-cur="agrupar">
      <span class="cur-check">${f.agrupar ? '✓' : ''}</span>
      <span>
        <strong>Uma frase por passagem</strong>
        <small>Oculta ${VARIANTES.ocultas} traduções repetidas da mesma origem. A busca continua encontrando todas.</small>
      </span>
    </button>
    <button class="cur-opt ${f.somenteFonte ? 'on' : ''}" data-cur="somenteFonte">
      <span class="cur-check">${f.somenteFonte ? '✓' : ''}</span>
      <span>
        <strong>Somente frases com fonte</strong>
        <small>Mostra apenas o que tem obra documentada.</small>
      </span>
    </button>`;
  box.querySelectorAll('[data-cur]').forEach((b) => {
    b.addEventListener('click', () => {
      const k = b.dataset.cur;
      state.exploreFilter[k] = !state.exploreFilter[k];
      renderCuradoriaOpcoes();
      renderProfileFilter();
      renderExploreResults();
    });
  });
}

/* o painel de atuação passa a abrigar também as opções de curadoria */
function renderProfileFilter() {
  const wrap = document.getElementById('profileFilterWrap');
  if (!wrap) return;
  const isAll = state.exploreFilter.cat === 'all';
  wrap.classList.toggle('hidden', !isAll);
  if (!isAll) {
    if (state.exploreFilter.profile !== 'all') {
      state.exploreFilter.profile = 'all';
    }
    closeProfilePanel();
    return;
  }
  const btn = document.getElementById('profileFilterBtn');
  const sel = state.exploreFilter.profile;
  const cur = sel === 'all' ? null : profileById(sel);
  const extras = state.exploreFilter.somenteFonte ? 1 : 0;
  btn.classList.toggle('has-value', !!cur || extras > 0);
  btn.querySelector('.pf-label').textContent = cur ? cur.name : 'Filtros';
  const opts = document.getElementById('profileOptions');
  opts.innerHTML = [{ id: 'all', name: 'Todas as atuações', color: 'var(--text-faint)' }, ...ACTIVE_PROFILES]
    .map(
      (p) => `
    <button class="profile-opt ${sel === p.id ? 'active' : ''}" data-profile="${p.id}">
      <span class="pd" style="background:${p.color}"></span>
      <span>${escapeHtml(p.name)}</span>
      <span class="pc">${p.id === 'all' ? QUOTES.length : PROFILE_COUNTS[p.id] || 0}</span>
    </button>`
    )
    .join('');
  opts.querySelectorAll('[data-profile]').forEach((b) => {
    b.addEventListener('click', () => {
      state.exploreFilter.profile = b.dataset.profile;
      closeProfilePanel();
      renderProfileFilter();
      renderExploreResults();
    });
  });
  renderCuradoriaOpcoes();
}

function initFase3() {
  const tBtn = document.getElementById('traditionFilterBtn');
  if (tBtn)
    tBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTraditionPanel();
    });
  document.addEventListener('click', (e) => {
    const wrap = document.getElementById('traditionFilterWrap');
    if (wrap && !wrap.contains(e.target)) closeTraditionPanel();
  });
  const tClear = document.getElementById('traditionClear');
  if (tClear)
    tClear.addEventListener('click', () => {
      state.exploreFilter.tradition = 'all';
      closeTraditionPanel();
      renderTraditionFilter();
      renderExploreResults();
    });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTraditionPanel();
  });
}
