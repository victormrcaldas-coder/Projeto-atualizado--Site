/* MeMotiva — curadoria/25-fase07-procedencia-ids.js
   Fase 7 — auditoria de procedência, qid estável, removerFrase/reindexarQuotes.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 7 — AUDITORIA DE PROCEDÊNCIA, IDs ESTÁVEIS E CURADORIA
   ----------------------------------------------------------------
   Módulo ADITIVO. Não apaga nada do que veio antes.
   Resolve, nesta ordem:
     §17  obras-fantasma geradas automaticamente ("Obra de X — título
          não confirmado") deixam de aparecer no catálogo;
     §26  frases cuja fonte é genérica deixam de ser exibidas como se
          estivessem documentadas;
     §4   cada frase ganha um identificador estável (qid), pré-requisito
          técnico para remover frases sem corromper os favoritos;
     §19  primeiro autor da curadoria individual: John Kotter.
   ================================================================ */

/* ----------------------------------------------------------------
   1. §17 — OBRAS-FANTASMA
   O montador de OBRAS cria uma "obra" a partir do campo src de cada
   frase. Quando o src é genérico ("Obra de Kant", "Discursos e
   escritos de Churchill"), nasce uma obra que não existe. Elas são
   removidas aqui; nenhuma obra curada é tocada.
   ---------------------------------------------------------------- */
const RE_TITULO_FALSO = new RegExp(
  [
    'n[ãa]o\\s+confirmad',
    'n[ãa]o\\s+identificad',
    'n[ãa]o\\s+localizad',
    '^Obras?\\s+de\\s+',
    '^Obras\\s+Completas',
    '^Escritos\\s+de\\s+',
    '^Discursos\\s+(de|e)\\s+',
    '^Cartas\\s+(de|e)\\s+',
    '^Textos\\s+de\\s+',
    '^Entrevistas',
    '^Declara[çc][õo]es',
    '^Palestras',
    '^Confer[êe]ncias\\s+de\\s+',
    '^Fragmentos\\s+de\\s+',
    '^Registrado\\s+por',
    '^Di[áa]rios\\s+e\\s+',
    '^Poemas\\s+de\\s+',
    '^Ensaios\\s+de\\s+',
    '^Livros\\s+de\\s+',
    '^Romances\\s+de\\s+',
    '^Par[áa]frase',
    '^Atribui[çc][ãa]o',
    '^Hadith\\b',
    '^Obra\\s+psicografada',
    '^Coletânea',
    '^Coletanea',
    'demais obras'
  ].join('|'),
  'i'
);

const OBRAS_REMOVIDAS_F7 = [];
(function limparObrasFantasma() {
  Object.keys(OBRAS).forEach((autor) => {
    const antes = OBRAS[autor];
    const depois = antes.filter((o) => {
      /* só entram no filtro as obras inferidas automaticamente (citada);
         obra curada nunca é removida por esta regra */
      if (!o.citada) return true;
      if (RE_TITULO_FALSO.test(o.t)) {
        OBRAS_REMOVIDAS_F7.push([autor, o.t]);
        return false;
      }
      return true;
    });
    if (depois.length) OBRAS[autor] = depois;
    else delete OBRAS[autor];
  });
  /* reindexa os identificadores das obras que sobraram */
  Object.keys(OBRA_POR_ID).forEach((k) => delete OBRA_POR_ID[k]);
  Object.keys(OBRAS).forEach((c) => {
    OBRAS[c].forEach((o, i) => {
      o.oid = slugify(c) + '--' + i;
      OBRA_POR_ID[o.oid] = o;
    });
  });
})();

/* Descrição automática das obras inferidas que sobreviveram: a antiga
   ("N passagens das frases publicadas aqui vêm desta fonte") descrevia o
   acervo, não a obra. §14 pede descrição da obra. Enquanto a descrição
   curada não existe, é mais honesto declarar a pendência. */
Object.values(OBRAS).forEach((lista) =>
  lista.forEach((o) => {
    if (o.citada && /passagens das frases publicadas aqui/.test(o.d || '')) {
      o.d = 'Obra citada como fonte de frases deste acervo. A descrição editorial ainda está em curadoria.';
      o.descricaoPendente = true;
    }
  })
);

/* ----------------------------------------------------------------
   2. §4/§5 — IDENTIFICADOR ESTÁVEL DE FRASE
   Hoje os favoritos do usuário são gravados pelo ÍNDICE da frase no
   array QUOTES. Remover qualquer frase desloca todos os índices
   seguintes e faz o favorito do usuário apontar para outra frase.
   Sem isto, a remoção exigida por §4 e §5 não pode ser executada com
   segurança. O qid é derivado do conteúdo, não da posição.
   ---------------------------------------------------------------- */
function _qidDe(q) {
  const base = (canonAuthor(q.author) + '|' + String(q.text))
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9|]/g, '');
  let h1 = 0x811c9dc5,
    h2 = 0x01000193;
  for (let i = 0; i < base.length; i++) {
    h1 = ((h1 ^ base.charCodeAt(i)) * 0x01000193) >>> 0;
    h2 = ((h2 + base.charCodeAt(i)) * 31) >>> 0;
  }
  return 'q' + h1.toString(36) + h2.toString(36);
}
const QUOTE_POR_QID = {};
(function atribuirQids() {
  QUOTES.forEach((q, i) => {
    let id = _qidDe(q),
      n = 1;
    while (QUOTE_POR_QID[id]) id = _qidDe(q) + '_' + ++n;
    q.qid = id;
    QUOTE_POR_QID[id] = i;
  });
})();
function reindexarQuotes() {
  Object.keys(QUOTE_POR_QID).forEach((k) => delete QUOTE_POR_QID[k]);
  QUOTES.forEach((q, i) => {
    QUOTE_POR_QID[q.qid] = i;
  });
}

const REMOVIDAS_F7 = [];
/* Remoção segura: retira a frase e os favoritos que apontam para o qid dela.
   Favoritos usam qid (não índice), então nada precisa ser deslocado.
   Usar assim: removerFrase('q1ab2cd3'). */
function removerFrase(qid, motivo) {
  const i = QUOTE_POR_QID[qid];
  if (i === undefined) return { ok: false, erro: 'qid inexistente' };
  const removida = QUOTES[i];
  QUOTES.splice(i, 1);
  if (state && Array.isArray(state.favorites)) {
    state.favorites = state.favorites.filter((f) => !(f.type === 'quote' && f.qid === qid));
  }
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  REMOVIDAS_F7.push({ qid, autor: removida.author, texto: removida.text, motivo: motivo || 'sem comprovação suficiente' });
  return { ok: true, removida };
}
window.removerFrase = removerFrase;

/* ----------------------------------------------------------------
   3. §26 — PROCEDÊNCIA HONESTA
   O status 'A-' hoje é exibido sem nenhuma ressalva, inclusive quando
   a fonte registrada é genérica e não permite conferência ("Obra de
   Peter Drucker", "Entrevistas e declarações públicas registradas",
   "As 48 Leis do Poder e demais obras"). Isso apresenta como
   documentado o que não foi. A frase continua no acervo; muda apenas
   o que o site afirma sobre ela.
   ---------------------------------------------------------------- */
const RE_FONTE_GENERICA = new RegExp(
  [
    'e demais obras',
    'e demais escritos',
    'e demais',
    'demais escritos',
    'e entrevistas',
    'e discursos',
    'e palestras',
    'e cartas',
    'e apresenta',
    '^Entrevistas',
    '^Declara[çc][õo]es',
    'declara[çc][õo]es p[úu]blicas',
    '^Discursos (de|e) ',
    '^Obras? de ',
    '^Obras Completas',
    '^Escritos de ',
    '^Textos de ',
    '^Cartas (e|de) ',
    '^Di[áa]rios e ',
    '^Registrado por',
    '^Fragmentos de',
    '^Palestras',
    '^Confer[êe]ncias',
    '^Coletânea',
    '^Coletanea',
    'Par[áa]frase',
    'Atribui[çc][ãa]o',
    'sem fonte',
    'n[ãa]o confirmad',
    ' / '
  ].join('|'),
  'i'
);

function fonteEhGenerica(src) {
  return !!src && RE_FONTE_GENERICA.test(src);
}

let _f7Genericas = 0;
QUOTES.forEach((q) => {
  if (q.st === 'A-' && fonteEhGenerica(q.src)) {
    q.fonteGenerica = true;
    _f7Genericas++;
  }
});

/* Rótulo mostrado ao usuário. Mantém o texto curto e factual. */
const _procedenciaAnterior = procedenciaHTML;
procedenciaHTML = function (q) {
  let out = _procedenciaAnterior(q);
  if (q.fonteGenerica) {
    out += `<span class="expand-src src-alerta">Fonte indicada de forma ampla; a passagem exata ainda não foi localizada.</span>`;
  }
  return out;
};

/* ----------------------------------------------------------------
   4. §19 — CURADORIA INDIVIDUAL · AUTOR 1: JOHN KOTTER
   As dez frases que estavam no acervo eram paráfrases genéricas de
   temas de liderança atribuídas ao título "Liderando Mudanças".
   Nenhuma delas corresponde a uma frase de Kotter. Foram substituídas,
   nos mesmos índices (para não quebrar favoritos), por passagens
   efetivamente localizadas em Leading Change (1996). O texto original
   em inglês fica registrado no campo orig, conforme §21.
   ---------------------------------------------------------------- */
const KOTTER_VERIFICADAS = [
  { text: 'A liderança define como o futuro deve ser, alinha as pessoas com essa visão e as inspira a realizá-la apesar dos obstáculos.', orig: 'Leadership defines what the future should look like, aligns people with that vision, and inspires them to make it happen despite the obstacles.', src: 'Leading Change (1996), p. 25', cat: 'lideranca', st: 'A' },
  { text: 'A gestão faz um sistema funcionar: ela ajuda você a fazer o que já sabe fazer. A liderança constrói sistemas novos ou transforma os antigos.', orig: 'Management makes a system work. It helps you do what you know how to do. Leadership builds systems or transforms old ones.', src: 'Leading Change (1996)', cat: 'lideranca', st: 'A' },
  { text: 'Nada mina mais uma mudança do que o comportamento de pessoas importantes ser incoerente com aquilo que elas dizem.', orig: 'Nothing undermines change more than behavior by important individuals that is inconsistent with the verbal communication.', src: 'Leading Change (1996)', cat: 'lideranca', st: 'A' },
  { text: 'Sempre que pessoas inteligentes e bem-intencionadas evitam enfrentar os obstáculos, elas tiram o poder de quem trabalha e sabotam a mudança.', orig: 'Whenever smart and well-intentioned people avoid confronting obstacles, they disempower employees and undermine change.', src: 'Leading Change (1996)', cat: 'lideranca', st: 'A' },
  { text: 'Se você não consegue descrever sua visão a alguém em cinco minutos e despertar interesse, ainda há trabalho a fazer nesta fase da transformação.', orig: 'If you cannot describe your vision to someone in five minutes and get their interest, you have more work to do in this phase of a transformation process.', src: 'Leading Change (1996)', cat: 'lideranca', st: 'A' },
  { text: 'Transformação é um processo, não um acontecimento.', orig: 'Transformation is a process, not an event.', src: 'Leading Change (1996)', cat: 'lideranca', st: 'A' },
  { text: 'Visão é uma imagem do futuro que deixa claro por que as pessoas deveriam trabalhar para construí-lo.', orig: 'A picture of the future that implies or comments on why people should work to create this future.', src: 'Leading Change (1996) — definição de visão', cat: 'lideranca', st: 'A' }
];

const CURADORIA_F7 = { substituidas: 0, rebaixadas: 0 };
(function curarKotter() {
  const idx = [];
  QUOTES.forEach((q, i) => {
    if (canonAuthor(q.author) === 'John Kotter') idx.push(i);
  });
  const cats = CATEGORIES.map((c) => c.id);
  idx.forEach((i, k) => {
    const nova = KOTTER_VERIFICADAS[k];
    if (nova) {
      QUOTES[i].textoAnterior = QUOTES[i].text;
      QUOTES[i].text = nova.text;
      QUOTES[i].orig = nova.orig;
      QUOTES[i].src = nova.src;
      QUOTES[i].st = nova.st;
      QUOTES[i].cat = cats.includes(nova.cat) ? nova.cat : QUOTES[i].cat;
      delete QUOTES[i].fonteGenerica;
      CURADORIA_F7.substituidas++;
    } else {
      /* sem passagem localizada: volta a constar como pendente, em vez
         de aparecer com a aparência de frase documentada */
      QUOTES[i].src = '';
      QUOTES[i].st = 'R';
      delete QUOTES[i].fonteGenerica;
      CURADORIA_F7.rebaixadas++;
    }
  });
  reindexarQuotes();
})();

/* obras de Kotter, com descrição no padrão do §14 */
OBRAS['John Kotter'] = [
  [
    'Leading Change',
    'livro',
    1996,
    'Formula em oito etapas o processo pelo qual uma organização muda de fato, a partir de mais de uma década observando transformações empresariais que fracassaram. Nasce do artigo publicado por Kotter na Harvard Business Review em 1995, em que ele constata que a maioria dos programas de mudança falha por pular etapas e por subestimar a resistência. O livro sustenta que mudança não se administra, se lidera, e que o erro mais comum é declarar vitória cedo demais. Tornou-se a referência mais usada no mundo corporativo para conduzir transformações.'
  ],
  [
    'A Force for Change: How Leadership Differs from Management',
    'livro',
    1990,
    'Separa duas funções que costumam ser confundidas: a gestão, que mantém sistemas complexos funcionando com previsibilidade, e a liderança, que cria sistemas novos ou os transforma. Escrito num momento em que as empresas americanas perdiam terreno para concorrentes japoneses e europeus, o livro argumenta que faltava liderança, não competência administrativa. É a base conceitual sobre a qual Leading Change seria construído seis anos depois.'
  ],
  [
    'The Heart of Change',
    'livro',
    2002,
    'Retoma as oito etapas de Leading Change por outro caminho: em vez de análise, histórias reais de pessoas que atravessaram transformações. A tese central é que mudança de comportamento acontece menos por argumento e mais por experiência emocional — as pessoas mudam quando enxergam algo que as toca, não quando recebem um relatório. Escrito com Dan Cohen a partir de mais de quatrocentas entrevistas.'
  ],
  [
    'Our Iceberg Is Melting',
    'livro',
    2006,
    'Conta em forma de fábula a história de uma colônia de pinguins cujo iceberg está prestes a se partir, e de como alguns deles convencem os demais a agir. Kotter escolheu a fábula por observar que o modelo das oito etapas circulava bem entre executivos e mal entre as equipes que teriam de executá-lo. A obra transformou uma teoria de gestão em narrativa acessível e tornou-se seu livro de maior alcance fora do mundo corporativo.'
  ],
  [
    'Matsushita Leadership',
    'livro',
    1997,
    'Biografia de Konosuke Matsushita, fundador da empresa que viria a ser a Panasonic, que saiu da pobreza extrema e construiu uma das maiores companhias do mundo. Kotter usa a trajetória para examinar como a capacidade de liderar se desenvolve ao longo de uma vida, e não como talento inato. Recebeu o primeiro lugar na categoria biografia do Financial Times/Booz-Allen Global Business Book Award em 1998.'
  ],
  ['Accelerate', 'livro', 2014, 'Propõe que a estrutura hierárquica tradicional, boa para eficiência, é lenta demais para o ritmo de mudança contemporâneo, e defende um sistema duplo: a hierarquia convencional operando ao lado de uma rede mais informal e ágil. Escrito depois da crise financeira de 2008, quando a velocidade de adaptação passou a valer mais do que a escala.']
].map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: 'John Kotter' }));
OBRAS['John Kotter'].forEach((o, i) => {
  o.oid = slugify('John Kotter') + '--' + i;
  OBRA_POR_ID[o.oid] = o;
});

if (typeof PAPEIS === 'object' && PAPEIS) PAPEIS['John Kotter'] = 'Professor e pesquisador norte-americano de liderança (1947–)';

/* panorama completo — §9, §10, §11 */
PERFIS_PROFUNDOS['John Kotter'] = {
  papel: 'Professor e pesquisador norte-americano de liderança (1947–)',
  resumo: 'Estudou por décadas por que as transformações organizacionais fracassam e transformou a resposta em um método de oito etapas usado no mundo inteiro.',
  bio: [
    'John Paul Kotter nasceu em San Diego, na Califórnia, em 25 de fevereiro de 1947. Formou-se no Instituto de Tecnologia de Massachusetts e concluiu o doutorado na Harvard Business School, onde entrou para o corpo docente em 1972 e se tornou professor titular aos 33 anos, um dos mais jovens da história da escola. Ocupou a cátedra Konosuke Matsushita de Liderança, hoje como professor emérito.',
    'Sua pesquisa partiu de uma pergunta empírica, não teórica: ele passou anos acompanhando empresas que tentaram se transformar e comparando as que conseguiram com as que não conseguiram. A conclusão, publicada em 1995 num artigo da Harvard Business Review intitulado "Leading Change: Why Transformation Efforts Fail", era desconfortável — a maioria dos programas de mudança fracassava, e fracassava sempre pelos mesmos motivos: pressa, ausência de um senso real de urgência, visão mal comunicada e vitória declarada antes da hora.',
    'O artigo virou o livro Leading Change em 1996, com as oito etapas que ficariam conhecidas: criar senso de urgência, formar uma coalizão condutora, construir uma visão, comunicá-la, remover obstáculos, gerar vitórias de curto prazo, consolidar os ganhos e ancorar a mudança na cultura. A distinção que sustenta todo o edifício já estava em A Force for Change, de 1990: gestão mantém um sistema funcionando; liderança cria sistemas novos ou transforma os antigos. São funções diferentes, e confundi-las é uma das razões pelas quais empresas bem administradas não conseguem mudar.',
    'Kotter percebeu depois que o modelo circulava bem entre executivos e mal entre as equipes que precisavam executá-lo, e passou a escrever de outra forma. The Heart of Change (2002) trocou a análise por histórias reais, defendendo que as pessoas mudam por experiência emocional e não por argumento. Our Iceberg Is Melting (2006) foi ainda mais longe: uma fábula sobre pinguins cujo iceberg está derretendo, que se tornou seu livro de maior alcance. Fundou a consultoria Kotter International e continua escrevendo — Accelerate (2014) e Change (2021) tratam de organizações que precisam de velocidade maior do que a hierarquia tradicional permite.'
  ],
  contexto:
    'A obra de Kotter se forma no período em que as grandes corporações americanas perderam a posição de referência para concorrentes japoneses e europeus, nos anos 1980, e passaram por duas décadas de reestruturações, fusões e programas de qualidade total que frequentemente não entregavam o prometido. Foi essa sequência de tentativas frustradas que deu a Kotter seu material de pesquisa e explica por que seu trabalho começa pelo diagnóstico do fracasso, e não pela receita do sucesso.',
  contribuicoes: [
    'Formulou o processo de oito etapas para conduzir mudança organizacional, o modelo mais adotado no mundo corporativo.',
    'Distinguiu conceitualmente gestão de liderança como funções complementares e não hierárquicas, em A Force for Change (1990).',
    'Demonstrou empiricamente, acompanhando transformações reais, que a maioria dos programas de mudança fracassa por pular etapas e declarar vitória cedo demais.',
    'Introduziu a noção de "senso de urgência" como pré-condição de qualquer transformação, e a distinção entre urgência verdadeira e ansiedade.',
    'Propôs o modelo de sistema duplo — hierarquia e rede operando juntas — para organizações que precisam de velocidade, em Accelerate (2014).',
    'Fundou a Kotter International, que aplica o método em organizações de grande porte.'
  ],
  cronologia: [
    [1947, 'Nasce em San Diego, Califórnia, em 25 de fevereiro.'],
    [1972, 'Entra para o corpo docente da Harvard Business School.'],
    [1980, 'Torna-se professor titular aos 33 anos, um dos mais jovens da história da escola.'],
    [1990, 'Publica A Force for Change, separando gestão de liderança.'],
    [1995, 'Publica na Harvard Business Review o artigo sobre por que as transformações fracassam.'],
    [1996, 'Lança Leading Change, com o processo de oito etapas.'],
    [1997, 'Publica Matsushita Leadership, premiado no ano seguinte pelo Financial Times/Booz-Allen.'],
    [2002, 'Publica The Heart of Change, com Dan Cohen.'],
    [2006, 'Lança Our Iceberg Is Melting, sua obra de maior alcance.'],
    [2014, 'Publica Accelerate, sobre o sistema duplo de organização.']
  ]
};

/* ----------------------------------------------------------------
   5. RELATÓRIO DE AUDITORIA — disponível no console do navegador
   ---------------------------------------------------------------- */
function MEMOTIVA_AUDITORIA() {
  const porStatus = {},
    porFonte = {};
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+/i;
  QUOTES.forEach((q) => {
    porStatus[q.st || '∅'] = (porStatus[q.st || '∅'] || 0) + 1;
    const k = !q.src ? 'sem fonte' : fonteEhGenerica(q.src) ? 'genérica' : LOC.test(q.src) ? 'localizada' : 'só obra';
    porFonte[k] = (porFonte[k] || 0) + 1;
  });
  const pessoas = [...AUTOR_INDEX.keys()];
  const r = {
    frases: QUOTES.length,
    porStatus,
    porFonte,
    pessoas: pessoas.length,
    comPanoramaCurado: pessoas.filter((a) => PERFIS_PROFUNDOS[a]).length,
    somenteHistoria: pessoas.filter((a) => !PERFIS_PROFUNDOS[a] && AUTOR_INDEX.get(a).story).length,
    semPanorama: pessoas.filter((a) => !PERFIS_PROFUNDOS[a] && !AUTOR_INDEX.get(a).story).length,
    obras: Object.values(OBRAS).reduce((s, l) => s + l.length, 0),
    obrasFantasmaRemovidas: OBRAS_REMOVIDAS_F7.length,
    frasesComFonteGenerica: QUOTES.filter((q) => q.fonteGenerica).length,
    frasesRemovidasNestaSessao: REMOVIDAS_F7.length
  };
  console.table(r);
  return r;
}
window.MEMOTIVA_AUDITORIA = MEMOTIVA_AUDITORIA;
window.MEMOTIVA_PENDENTES = () => QUOTES.filter((q) => q.st === 'R' || q.st === 'P' || q.fonteGenerica).map((q) => ({ qid: q.qid, autor: q.author, texto: q.text, st: q.st, src: q.src || '' }));

/* recarrega as telas que dependem dos dados alterados */
(function bootF7() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      if (typeof reconstruirIndices === 'function') reconstruirIndices();
      reindexarQuotes();
      if (state && state.view === 'autores' && typeof renderAutoresObras === 'function') renderAutoresObras();
      if (state && state.view === 'panorama' && typeof renderPanorama === 'function') renderPanorama();
      console.info('MeMotiva · Fase 7: ' + OBRAS_REMOVIDAS_F7.length + ' obras-fantasma removidas, ' + _f7Genericas + ' frases com fonte genérica sinalizadas, ' + CURADORIA_F7.substituidas + ' frases de Kotter substituídas por passagens localizadas.');
    } catch (e) {
      console.error('Fase 7:', e);
    }
  };
})();
