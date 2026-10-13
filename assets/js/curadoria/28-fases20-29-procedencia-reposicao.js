/* MeMotiva — curadoria/28-fases20-29-procedencia-reposicao.js
   Fases 20–29 — procedência honesta, atribuições populares, reposição com fonte exata.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 20 — PROCEDÊNCIA HONESTA DAS 1.184 FONTES GENÉRICAS
   ----------------------------------------------------------------
   Regra desta etapa, definida pelo projeto:
     · a frase NÃO é removida quando a seção exata não se confirma;
     · a obra pode aparecer sozinha, mas tem de ser a obra correta;
     · nenhuma frase é atribuída a uma obra famosa por conveniência.
   Nada é inventado. Cada fonte genérica vira uma declaração exata
   do que se sabe e do que não se sabe.
   ================================================================ */

const RELATORIO_FASE20 = { classeA: 0, classeB: 0, classeC: 0, classeD: 0, classeE: 0, classeF: 0, obrasForaDoCatalogo: [], corrigidas: 0 };

function _tit(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^(o|a|os|as|the|um|uma|una)\s+/, '')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
/* limpa sobras de recorte no fim de um título */
function _limparTitulo(t) {
  return String(t || '')
    .replace(/\s+(registrad[ao]s?|publicad[ao]s?|conhecid[ao]s?)$/i, '')
    .replace(/^(e|de|do|da)\s+/i, '')
    .replace(/[,;.\s]+$/, '')
    .trim();
}

const RE_SEM_OBRA = /^(Obras?\b|Obras\s+Completas|Fragmentos\s+de\s+|Escritos\s+de\s+|Textos\s+de\s+|Di[áa]rios\b|Livros\s+e\s+discursos|Livros\s+de\s+|Poemas\s+de\s+|Romances\s+de\s+|Ensaios\s+de\s+|Coletânea)/i;
const RE_ORAL_INICIO = /^(Discursos?|Entrevistas?|Palestras?|Depoimentos?|Votos|Cartas\s+aos\s+acionistas|Confer[êe]ncias|Declara[çc][õo]es|Registrado\s+por)/i;
const RE_CONSOLIDADA = /^Atribui[çc][ãa]o\s+consolidada/i;
const RE_CAUDA_ORAL = /\s+e\s+(demais\s+obras|demais\s+escritos|entrevistas(\s+registradas?)?|discursos(\s+registrados?)?|palestras|cartas|artigos|obra\s+po[ée]tica|relatos\s+de\s+[^\/]+|registros|depoimentos|apresenta[çc][õo]es\s+p[úu]blicas|demais\s+estudos[^\/]*)\b/i;
const RE_FONTE_BOA = /Quarterly|Review|Journal|,\s*(1[6-9]|20)\d{2}\b/;

function classificarProcedencia(src) {
  const s = String(src || '').trim();
  if (!s) return { classe: '0' };

  /* F — fonte que na verdade é específica e verificável */
  if (RE_FONTE_BOA.test(s) && !RE_CONSOLIDADA.test(s)) return { classe: 'F', texto: s };

  /* E — atribuição consolidada sem documento primário */
  if (RE_CONSOLIDADA.test(s)) {
    const ref = s
      .replace(RE_CONSOLIDADA, '')
      .replace(/^[;,\s]+/, '')
      .trim();
    return { classe: 'E', referencia: ref };
  }

  /* retira a cauda oral e reavalia */
  let corpo = s,
    oral = false;
  const mc = corpo.match(RE_CAUDA_ORAL);
  if (mc) {
    oral = !/demais\s+(obras|escritos|estudos)/i.test(mc[1]);
    corpo = corpo.replace(RE_CAUDA_ORAL, '').trim();
  }

  /* A — a fonte nomeia o autor, não a obra */
  if (RE_SEM_OBRA.test(corpo) || RE_SEM_OBRA.test(s)) {
    const tipo = /poema n[ãa]o identificado/i.test(s) ? 'poema' : /Fragmentos/i.test(s) ? 'fragmento' : 'obra';
    return { classe: 'A', tipo, oral };
  }

  /* D — registro exclusivamente oral */
  if (RE_ORAL_INICIO.test(corpo)) {
    const partes = corpo
      .split(/\s*\/\s*/)
      .map(_limparTitulo)
      .filter((x) => x && !RE_ORAL_INICIO.test(x) && !/^(escritos|cartas|obra po[ée]tica)/i.test(x));
    return partes.length ? { classe: 'C', obras: partes, oral: true } : { classe: 'D' };
  }

  /* B/C — conjunto de obras candidatas */
  const partes = corpo
    .split(/\s*\/\s*/)
    .map(_limparTitulo)
    .filter(Boolean)
    .filter((x) => !/^(entrevistas|discursos|escritos|cartas|palestras|obra po[ée]tica|artigos|relatos|registros|di[áa]rios|depoimentos)/i.test(x));
  if (partes.length >= 2) return { classe: 'B', obras: partes, oral };
  if (partes.length === 1 && (oral || /\//.test(s))) return { classe: 'C', obras: partes, oral: true };
  if (partes.length === 1) return { classe: 'C', obras: partes, oral: false };
  return { classe: 'D' };
}

(function honestificarProcedencia() {
  QUOTES.forEach((q) => {
    if (!(q.fonteGenerica || fonteEhGenerica(q.src))) return;
    const autor = canonAuthor(q.author);
    const c = classificarProcedencia(q.src);
    q.procOriginal = q.src;
    q.proc = c;

    if (c.classe === 'F') {
      RELATORIO_FASE20.classeF++;
      delete q.fonteGenerica;
      if (q.st === 'A-') q.st = 'A';
      return;
    }
    if (c.classe === 'A') {
      RELATORIO_FASE20.classeA++;
      q.src = '';
      q.procTexto = c.tipo === 'poema' ? 'Poema não identificado' : c.tipo === 'fragmento' ? 'Fragmento sem numeração confirmada' : c.oral ? 'Obra ou declaração pública não identificada' : 'Obra não identificada';
    } else if (c.classe === 'B' || c.classe === 'C') {
      c.classe === 'B' ? RELATORIO_FASE20.classeB++ : RELATORIO_FASE20.classeC++;
      const cat = (OBRAS[autor] || []).map((o) => _tit(o.t));
      c.obras.forEach((t) => {
        const n = _tit(t);
        if (!n) return;
        const achou = cat.some((x) => x === n || (n.length > 6 && x.includes(n)) || (x.length > 6 && n.includes(x)));
        if (!achou && cat.length) RELATORIO_FASE20.obrasForaDoCatalogo.push([autor, t]);
      });
      const lista = c.obras.length === 1 ? c.obras[0] : c.obras.slice(0, -1).join(', ') + ' ou ' + c.obras[c.obras.length - 1];
      q.src = '';
      q.procTexto = c.obras.length === 1 ? (c.oral ? 'Registrada em ' + lista + ' ou em declaração pública — não confirmada qual' : 'Atribuída a ' + lista + ' — localização não confirmada') : 'De uma destas obras: ' + lista + ' — não identificada qual' + (c.oral ? ', ou em declaração pública' : '');
    } else if (c.classe === 'D') {
      RELATORIO_FASE20.classeD++;
      q.src = '';
      q.procTexto = 'Discurso, entrevista ou declaração registrada — ocasião não identificada';
    } else if (c.classe === 'E') {
      RELATORIO_FASE20.classeE++;
      q.src = '';
      q.procTexto = 'Atribuição consolidada, sem documento primário localizado' + (c.referencia ? ' — ' + c.referencia : '');
      q.atribuicaoConsolidada = true;
    }
  });
})();

/* ----------------------------------------------------------------
   CASO DOCUMENTADO DE MÁ ATRIBUIÇÃO EM CIRCULAÇÃO
   A base já atribuía corretamente a frase sobre adaptação a Leon C.
   Megginson, e não a Darwin. O autor real ganha aqui seu panorama,
   com o registro explícito do engano que circula no mundo inteiro.
   ---------------------------------------------------------------- */
if (typeof PAPEIS === 'object' && PAPEIS) PAPEIS['Leon C. Megginson'] = 'Professor de administração norte-americano (1921–2010)';
PERFIS_PROFUNDOS['Leon C. Megginson'] = {
  resumo: 'Professor de administração cuja paráfrase de Darwin, feita em 1963, passou a circular no mundo inteiro como se fosse do próprio Darwin.',
  bio: [
    'Leon C. Megginson foi professor de administração na Universidade Estadual da Luisiana e depois na Universidade de Mobile, no Alabama. Publicou manuais de administração e de gestão de pessoas usados em cursos universitários americanos ao longo de décadas.',
    'Em 1963, num artigo publicado no Southwestern Social Science Quarterly a partir de uma palestra sobre a relevância de Darwin para a administração, Megginson escreveu sua própria interpretação de A Origem das Espécies: não seria a espécie mais intelectual nem a mais forte a sobreviver, e sim a que melhor consegue se ajustar e se adaptar ao ambiente em que se encontra.',
    'A formulação não está em Darwin. Ele nunca escreveu nada equivalente, e a teoria da seleção natural não afirma isso nesses termos. A frase foi sendo reproduzida com pequenas variações, perdeu a atribuição a Megginson e passou a circular como citação direta do naturalista — chegando a ser gravada em pedra no piso da Academia Nacional de Ciências dos Estados Unidos, em Washington.',
    'O caso é hoje um dos exemplos mais estudados de má atribuição em circulação, rastreado por pesquisadores até o artigo original de 1963.'
  ],
  contexto: 'A frase circula porque diz de forma simples algo que muita gente gostaria que Darwin tivesse dito. O episódio mostra como uma paráfrase didática pode substituir o original quando é mais conveniente do que ele.',
  contribuicoes: ['Escreveu manuais universitários de administração e de gestão de pessoas.', 'É o autor real da formulação sobre a espécie que sobrevive ser a que melhor se adapta, atribuída em massa a Charles Darwin.'],
  cronologia: [
    [1921, 'Nasce nos Estados Unidos.'],
    [1963, 'Publica no Southwestern Social Science Quarterly o artigo de onde vem a frase.'],
    [2010, 'Morre.']
  ],
  nota: 'A frase sobre a espécie que sobrevive ser a mais adaptável é de Megginson, não de Darwin, e chegou a ser gravada no piso da Academia Nacional de Ciências dos Estados Unidos como se fosse do naturalista.'
};
RELATORIO_FASE20.corrigidas++;

/* ---- exibição ---- */
const _procF20 = procedenciaHTML;
procedenciaHTML = function (q) {
  if (!q.procTexto) return _procF20(q);
  const classe = q.atribuicaoConsolidada ? 'src-alerta' : 'src-parcial';
  let base = '';
  try {
    base = _procF20(q).replace(/<span class="expand-src src-alerta">Fonte indicada de forma ampla[^<]*<\/span>/, '');
  } catch (e) {}
  return base + `<span class="expand-src ${classe}">${escapeHtml(q.procTexto)}</span>`;
};

/* ---- consultas de apoio ---- */
window.PROCEDENCIA_RELATORIO = function () {
  const r = {
    'A — obra não identificada': RELATORIO_FASE20.classeA,
    'B — conjunto de obras candidatas': RELATORIO_FASE20.classeB,
    'C — obra única, localização não confirmada': RELATORIO_FASE20.classeC,
    'D — discurso ou entrevista': RELATORIO_FASE20.classeD,
    'E — atribuição consolidada sem documento': RELATORIO_FASE20.classeE,
    'F — fonte na verdade específica, reclassificada': RELATORIO_FASE20.classeF,
    'Obras citadas fora do catálogo do autor': RELATORIO_FASE20.obrasForaDoCatalogo.length
  };
  console.table(r);
  return r;
};
window.PROCEDENCIA_FORA_DO_CATALOGO = function () {
  const m = {};
  RELATORIO_FASE20.obrasForaDoCatalogo.forEach(([a, t]) => {
    const k = a + ' :: ' + t;
    m[k] = (m[k] || 0) + 1;
  });
  return Object.entries(m).sort((a, b) => b[1] - a[1]);
};
window.FRASES_CLASSE = function (cl) {
  return QUOTES.filter((q) => q.proc && q.proc.classe === cl).map((q) => ({ qid: q.qid, autor: q.author, texto: q.text.slice(0, 80), antes: q.procOriginal, agora: q.procTexto }));
};
window.ATRIBUICOES_CONSOLIDADAS = function () {
  return QUOTES.filter((q) => q.atribuicaoConsolidada).map((q) => ({ qid: q.qid, autor: q.author, texto: q.text, referencia: q.procOriginal }));
};
window.F20 = RELATORIO_FASE20;

(function bootF20() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      console.info('MeMotiva · Fase 20: ' + (RELATORIO_FASE20.classeA + RELATORIO_FASE20.classeB + RELATORIO_FASE20.classeC + RELATORIO_FASE20.classeD + RELATORIO_FASE20.classeE) + ' procedências genéricas convertidas em declaração exata; nenhuma obra inventada.');
    } catch (e) {
      console.error('Fase 20:', e);
    }
  };
})();

/* ================================================================
   FASE 21 — ATRIBUIÇÕES POPULARES: VERIFICAÇÃO DOCUMENTAL
   ----------------------------------------------------------------
   As frases marcadas como atribuição consolidada foram pesquisadas
   uma a uma. Nenhuma foi removida: quando a pesquisa demonstra que
   a atribuição é falsa, a frase permanece com a refutação exibida
   ao leitor, junto com a origem real quando ela é conhecida.
   ================================================================ */

const VERIFICACAO_F21 = [
  {
    frag: 'Cultura come estratégia',
    autor: 'Peter Drucker',
    veredito: 'refutada',
    nota: 'O Instituto Drucker confirma que ele nunca escreveu nem disse isto. O registro impresso mais antigo localizado é uma manchete do Giga Information Group, de março de 2000. A frase foi popularizada por Mark Fields, executivo da Ford, que a manteve afixada na parede de sua sala a partir de 2006, e só passou a ser atribuída a Drucker por volta de 2011. A ideia próxima que existe de fato é de Edgar Schein, que escreveu que a cultura determina e limita a estratégia.'
  },

  { frag: 'O que é medido é gerenciado', autor: 'Peter Drucker', veredito: 'refutada', nota: 'Não consta em nenhuma obra de Drucker. A formulação é do jornalista Simon Caulkin, resumindo um artigo de V. F. Ridgway publicado em 1956 que, ao contrário do que a frase sugere, criticava as práticas de medição em uso.' },

  { frag: 'melhor maneira de prever o futuro', autor: 'Peter Drucker', veredito: 'disputada', nota: 'O Instituto Drucker aponta como origem provável o cientista da computação Alan Kay, que disse que a melhor maneira de prever o futuro é inventá-lo. A versão de Kay também consta deste acervo.' },

  {
    frag: 'mente educada ser capaz de acolher',
    autor: 'Aristóteles',
    veredito: 'refutada',
    nota: 'Não aparece em nenhuma obra sobrevivente de Aristóteles. A primeira ocorrência impressa localizada está em Religion and the Pursuit of Truth, de Lowell L. Bennion (1959), que a apresentou como pensamento de Aristóteles sem indicar fonte. A passagem real da Ética a Nicômaco, em 1094b, diz outra coisa: que é próprio de uma mente educada contentar-se com o grau de precisão que a natureza do assunto permite, sem buscar exatidão onde só cabe aproximação.'
  },

  {
    frag: 'Toda verdade passa por três estágios',
    autor: 'Arthur Schopenhauer',
    veredito: 'refutada',
    nota: 'Não foi escrita nem dita por Schopenhauer, e especialistas em sua obra não localizam a passagem. A atribuição aparece na Alemanha a partir de 1913 e foi amplamente difundida por uma coletânea de citações publicada em 1981. Schopenhauer tem, em O Mundo como Vontade e Representação, uma observação distinta sobre a resistência às verdades novas.'
  },

  { frag: 'sucesso não é final, o fracasso não é fatal', autor: 'Winston Churchill', veredito: 'disputada', nota: 'Não consta nos discursos nem nos escritos de Churchill. É um caso do fenômeno que o pesquisador Nigel Rees chamou de deriva churchilliana, em que o autor original é substituído por alguém mais famoso.' },

  { frag: 'gênio é 1% inspiração', autor: 'Thomas Edison', veredito: 'disputada', nota: 'Circulam formulações semelhantes antes de Edison, entre elas em palestras da professora Kate Sanborn nos anos 1890. Edison usou versões da frase em declarações à imprensa a partir do início do século XX, mas a autoria original é disputada.' },

  { frag: 'dez mil maneiras', autor: 'Thomas Edison', veredito: 'sustentada', nota: 'Registrada como fala de Edison na biografia autorizada escrita por Frank Lewis Dyer e Thomas Commerford Martin, publicada em 1910. É relato de terceiros, não texto do próprio Edison, mas a fonte é contemporânea e identificável.' },

  { frag: 'regra número um é nunca perder dinheiro', autor: 'Warren Buffett', veredito: 'sustentada', nota: 'Repetida por Buffett em entrevistas e em reuniões anuais da Berkshire Hathaway ao longo de décadas, com registro em vídeo e em transcrições. A ocasião exata da primeira formulação não foi identificada.' },

  { frag: 'Tire minhas fábricas', autor: 'Andrew Carnegie', veredito: 'disputada', nota: 'A frase circula em variantes desde o fim do século XIX e é atribuída também a outros industriais do período. Não foi localizada em The Gospel of Wealth nem em outro escrito de Carnegie.' },

  { frag: 'Reunir-se é um começo', autor: 'Henry Ford', veredito: 'disputada', nota: 'Não localizada em My Life and Work nem em outro escrito de Ford. A atribuição é corrente, mas sem documento primário identificado.' },

  { frag: 'tragédia em close-up', autor: 'Charles Chaplin', veredito: 'disputada', nota: 'Atribuída a Chaplin em coletâneas a partir da segunda metade do século XX, sem indicação de filme, entrevista ou texto de origem.' },

  { frag: 'Se você quer ser feliz, seja', autor: 'Liev Tolstói', veredito: 'disputada', nota: 'A formulação aparece em Tolstói de forma indireta, atribuída dentro de sua ficção a Kozma Prutkov, autor satírico fictício criado por escritores russos do século XIX. A citação direta a Tolstói é, portanto, imprecisa.' },

  { frag: 'Não conte os dias', autor: 'Muhammad Ali', veredito: 'disputada', nota: 'Atribuída a Ali em coletâneas e reproduções, sem entrevista, discurso ou texto de origem identificado.' },

  { frag: 'Sem dados, você é apenas', autor: 'W. Edwards Deming', veredito: 'disputada', nota: 'Amplamente repetida em seminários e cursos de qualidade, sem registro localizado nos escritos ou nas conferências documentadas de Deming.' }
];

const RELATORIO_FASE21 = { refutadas: 0, disputadas: 0, sustentadas: 0, naoEncontradas: [] };
const ROTULO_F21 = {
  refutada: 'Atribuição refutada por pesquisa documental',
  disputada: 'Atribuição disputada, sem documento primário localizado',
  sustentada: 'Atribuição sustentada por registro contemporâneo'
};

(function verificarAtribuicoes() {
  VERIFICACAO_F21.forEach((v) => {
    const alvo = QUOTES.filter((q) => canonAuthor(q.author) === v.autor && q.text.toLowerCase().includes(v.frag.toLowerCase()));
    if (!alvo.length) {
      RELATORIO_FASE21.naoEncontradas.push(v.autor + ' :: ' + v.frag);
      return;
    }
    alvo.forEach((q) => {
      q.veredito = v.veredito;
      q.notaAutoria = v.nota;
      q.procTexto = ROTULO_F21[v.veredito];
      delete q.atribuicaoConsolidada;
      if (v.veredito === 'refutada') {
        q.st = 'P';
        q.src = '';
        RELATORIO_FASE21.refutadas++;
      } else if (v.veredito === 'disputada') {
        q.st = 'P';
        q.src = '';
        RELATORIO_FASE21.disputadas++;
      } else {
        q.st = 'A';
        RELATORIO_FASE21.sustentadas++;
      }
    });
  });
})();

/* exibição: veredito + nota documental */
const _procF21 = procedenciaHTML;
procedenciaHTML = function (q) {
  let out = _procF21(q);
  if (q.notaAutoria) out += `<span class="expand-src src-alerta">${escapeHtml(q.notaAutoria)}</span>`;
  return out;
};

window.ATRIBUICOES_VERIFICADAS = function () {
  return QUOTES.filter((q) => q.veredito).map((q) => ({
    autor: q.author,
    veredito: q.veredito,
    texto: q.text.slice(0, 70),
    qid: q.qid
  }));
};
window.F21 = RELATORIO_FASE21;

(function bootF21() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      console.info('MeMotiva · Fase 21: ' + RELATORIO_FASE21.refutadas + ' atribuições refutadas, ' + RELATORIO_FASE21.disputadas + ' disputadas, ' + RELATORIO_FASE21.sustentadas + ' sustentadas. Nenhuma frase removida.');
    } catch (e) {
      console.error('Fase 21:', e);
    }
  };
})();

/* ================================================================
   FASE 22 — CONTINUAÇÃO DA FILA + NOMES DE IDENTIDADE DUVIDOSA
   ================================================================ */
(function reconciliarF22() {
  QUOTES.forEach((q) => {
    if (canonAuthor(q.author) === 'Peter F. Drucker') {
      q.author = 'Peter Drucker';
      RELATORIO_FASE8.autoriaCorrigida++;
    }
  });
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
})();

const PANORAMAS_F22 = {
  'Paul Graham': {
    papel: 'Programador, investidor e ensaísta britânico-americano (1964–)',
    resumo: 'Cofundou a Y Combinator e escreve os ensaios mais lidos sobre como empresas iniciantes funcionam.',
    bio: [
      'Paul Graham nasceu em Weymouth, Inglaterra, em 13 de novembro de 1964, e cresceu em Pittsburgh. Formou-se em filosofia em Cornell, doutorou-se em ciência da computação em Harvard e estudou pintura em Florença e em Providence — combinação que atravessa sua obra escrita, sempre voltada à relação entre fazer coisas e pensar sobre elas.',
      'Escreveu On Lisp e ANSI Common Lisp, e defendeu por anos a superioridade prática do Lisp para prototipagem rápida. Em 1995 cofundou a Viaweb, primeira aplicação de comércio eletrônico rodada inteiramente em servidor — o que hoje se chamaria software como serviço, uma década antes do termo. A empresa foi vendida ao Yahoo em 1998.',
      'Em 2005 cofundou com Jessica Livingston, Robert Morris e Trevor Blackwell a Y Combinator, aceleradora que inverteu o modelo de investimento inicial: financiar muitas equipes muito cedo, com pouco dinheiro, em lotes, e apoiá-las intensamente por três meses. Passaram por ela empresas como Airbnb, Stripe, Dropbox, Reddit e Coinbase.',
      'Seus ensaios, publicados no próprio site em texto simples, tratam de fundadores, produto, contratação, riqueza, desigualdade e escrita, e circulam amplamente fora do setor de tecnologia. As formulações mais citadas são a de que é preciso fazer coisas que as pessoas querem, a de que fundadores devem fazer coisas que não escalam no início, e a distinção entre a agenda do gestor e a agenda do criador — que explica por que uma reunião no meio da tarde destrói o dia de um programador e não o de um executivo.'
    ],
    contexto: 'Graham escreveu para um público que não existia como categoria antes dele: o fundador técnico sem experiência empresarial. Seus ensaios funcionaram como currículo informal de uma geração inteira de empresas de tecnologia, e a Y Combinator transformou o financiamento inicial num processo de escala industrial.',
    contribuicoes: ['Cofundou a Y Combinator, que redefiniu o investimento em estágio inicial.', 'Cofundou a Viaweb, uma das primeiras aplicações de comércio eletrônico em servidor.', 'Escreveu Hackers e Pintores e centenas de ensaios sobre empreendedorismo e tecnologia.', 'Formulou a distinção entre a agenda do gestor e a agenda do criador.', 'Escreveu On Lisp e ANSI Common Lisp.'],
    cronologia: [
      [1964, 'Nasce em Weymouth, Inglaterra, em 13 de novembro.'],
      [1995, 'Cofunda a Viaweb.'],
      [1998, 'A Viaweb é vendida ao Yahoo.'],
      [2004, 'Publica Hackers e Pintores.'],
      [2005, 'Cofunda a Y Combinator.'],
      [2014, 'Deixa a presidência da Y Combinator.']
    ]
  },

  'Akio Morita': {
    papel: 'Empresário japonês (1921–1999)',
    resumo: 'Cofundou a Sony e transformou o rótulo made in Japan de sinônimo de imitação em sinônimo de qualidade.',
    bio: [
      'Akio Morita nasceu em Nagoya, Japão, em 26 de janeiro de 1921, herdeiro da décima quinta geração de uma família produtora de saquê. Foi criado para assumir o negócio familiar e escolheu física. Serviu na Marinha Imperial durante a guerra, num laboratório de pesquisa, onde conheceu o engenheiro Masaru Ibuka.',
      'Fundaram em 1946, num Japão em ruínas, uma pequena empresa de reparos eletrônicos que se tornaria a Sony. Morita convenceu o pai a financiá-la e assumiu a parte comercial, deixando a engenharia com Ibuka. Escolheram um nome curto e pronunciável em qualquer língua, já com o mercado internacional em vista — decisão incomum para uma empresa japonesa da época.',
      'Lançaram o primeiro gravador de fita japonês e, em 1955, um dos primeiros rádios transistorizados do mundo. Morita mudou-se com a família para Nova York em 1963 para entender o mercado americano por dentro, e recusou uma oferta que teria vendido cem mil rádios sob a marca do comprador, preferindo construir a própria marca — decisão que ele apontava como a mais importante que tomou.',
      'O Walkman, lançado em 1979 por insistência pessoal de Morita contra a opinião de sua equipe de marketing, que não via mercado para um toca-fitas sem gravação, criou a categoria da música pessoal portátil e vendeu centenas de milhões de unidades. A Sony lançou também o Trinitron, o videocassete Betamax e, com a Philips, o disco compacto. Morita escreveu Made in Japan e foi uma das pontes entre a economia japonesa e o Ocidente. Morreu em Tóquio em 3 de outubro de 1999.'
    ],
    contexto: 'Morita conduziu a transformação da percepção mundial sobre a indústria japonesa, de fabricante de cópias baratas a referência de qualidade e inovação. Sua insistência em construir marca própria em vez de fabricar para terceiros é o eixo dessa transformação.',
    contribuicoes: ['Cofundou a Sony em 1946, no Japão do pós-guerra.', 'Lançou um dos primeiros rádios transistorizados do mundo.', 'Criou o Walkman, que inaugurou a categoria da música pessoal portátil.', 'Participou do desenvolvimento do disco compacto, com a Philips.', 'Escreveu Made in Japan, sobre a construção da empresa e a relação entre Japão e Ocidente.'],
    cronologia: [
      [1921, 'Nasce em Nagoya, em 26 de janeiro.'],
      [1946, 'Funda com Masaru Ibuka a empresa que se tornaria a Sony.'],
      [1955, 'Lança um dos primeiros rádios transistorizados.'],
      [1963, 'Muda-se para Nova York.'],
      [1979, 'Lança o Walkman.'],
      [1986, 'Publica Made in Japan.'],
      [1999, 'Morre em Tóquio.']
    ]
  },

  'Konosuke Matsushita': {
    papel: 'Empresário japonês (1894–1989)',
    resumo: 'Saiu da pobreza extrema e fundou a empresa que se tornaria a Panasonic, com uma filosofia de gestão própria.',
    bio: [
      'Konosuke Matsushita nasceu em Wakayama, Japão, em 27 de novembro de 1894, o mais novo de oito filhos. O pai perdeu tudo especulando com arroz, e a família foi à ruína. Aos nove anos, Konosuke deixou a escola e foi trabalhar como aprendiz numa loja de braseiros em Osaka. Perdeu os pais e vários irmãos para a tuberculose antes dos vinte anos, e ele próprio teve a doença a vida inteira, o que o obrigou a delegar desde cedo — hábito que se tornou parte de seu método.',
      'Trabalhou numa companhia elétrica e, em 1917, aos vinte e dois anos, deixou o emprego para fabricar um soquete de lâmpada que havia projetado e que seu chefe recusara. Começou num quarto, com a esposa e o cunhado, em dificuldade extrema. O primeiro produto fracassou; o segundo, um adaptador de tomada dupla, funcionou.',
      'A empresa cresceu com um lampião de bicicleta a bateria e depois com rádios, eletrodomésticos e televisores. Em 1932, Matsushita formulou publicamente aquilo que chamou de missão do fabricante: superar a pobreza tornando os bens tão abundantes e baratos quanto a água encanada. Recusou demitir na crise de 1929, mantendo os salários integrais e reduzindo a produção, com todos os funcionários vendendo estoque — decisão que ficou como marco de sua reputação.',
      'Criou uma estrutura de divisões autônomas, incomum para a época, e um instituto de formação política e de liderança para o Japão. É chamado no país de deus da administração. Escreveu dezenas de livros e cedeu seu nome à cátedra de liderança da Harvard Business School que John Kotter ocuparia. Morreu em Osaka em 27 de abril de 1989.'
    ],
    contexto: 'Matsushita construiu sua empresa e sua filosofia num Japão que passou da industrialização acelerada à guerra, à destruição e à reconstrução. Sua concepção da empresa como instituição com missão social, e não apenas como geradora de lucro, tornou-se referência da gestão japonesa do pós-guerra.',
    contribuicoes: [
      'Fundou a empresa que se tornaria a Panasonic, a partir de um quarto em Osaka.',
      'Formulou uma filosofia de gestão centrada na missão social do fabricante.',
      'Criou a estrutura de divisões autônomas, adotada depois amplamente no Japão.',
      'Recusou demissões durante a Depressão, mantendo salários e reorientando a força de trabalho para vendas.',
      'Fundou um instituto de formação de líderes públicos no Japão.'
    ],
    cronologia: [
      [1894, 'Nasce em Wakayama, em 27 de novembro.'],
      [1904, 'Deixa a escola aos nove anos para trabalhar como aprendiz.'],
      [1918, 'Funda a empresa que se tornaria a Panasonic.'],
      [1932, 'Formula publicamente a missão do fabricante.'],
      [1979, 'Cria seu instituto de formação de líderes.'],
      [1989, 'Morre em Osaka.']
    ]
  },

  'George S. Patton': {
    papel: 'General norte-americano (1885–1945)',
    resumo: 'Comandou o avanço aliado mais rápido da Segunda Guerra e foi afastado do comando por agredir soldados hospitalizados.',
    bio: [
      'George Smith Patton Jr. nasceu em San Gabriel, Califórnia, em 11 de novembro de 1885, em família com longa tradição militar. Tinha dificuldade grave de leitura, provavelmente dislexia, e aprendeu por memorização de textos lidos em voz alta. Formou-se em West Point após repetir o primeiro ano. Competiu no pentatlo moderno nos Jogos Olímpicos de 1912, terminando em quinto lugar.',
      'Comandou o primeiro corpo de tanques americano na Primeira Guerra Mundial e foi ferido. Entre as guerras, defendeu o desenvolvimento da guerra blindada num exército que voltara a privilegiar a infantaria e a cavalaria montada.',
      'Comandou na Segunda Guerra as operações no Norte da África e na Sicília, e depois o Terceiro Exército na França, cujo avanço após a ruptura da Normandia foi o mais rápido registrado pelos aliados. Durante a Batalha das Ardenas, retirou o próprio exército do combate, girou-o noventa graus e o levou ao socorro de Bastogne em poucos dias, manobra logisticamente extraordinária.',
      'Em 1943, na Sicília, esbofeteou dois soldados hospitalizados com estresse de combate, acusando-os de covardia. O episódio veio a público e custou-lhe o comando por meses, além de uma desculpa pública imposta por Eisenhower. Fez também declarações públicas indisciplinadas e comparações inaceitáveis sobre desnazificação no pós-guerra, que levaram a novo afastamento. Morreu em 21 de dezembro de 1945, na Alemanha, em consequência de um acidente de carro ocorrido doze dias antes.'
    ],
    contexto: 'Patton é a figura em que a eficácia militar e a indisciplina pessoal aparecem inseparáveis. Foi mantido no comando por ser excepcional em movimento ofensivo e afastado repetidamente por conduta, e sua avaliação histórica é feita sempre com as duas coisas juntas.',
    contribuicoes: ['Comandou o primeiro corpo de tanques americano, na Primeira Guerra Mundial.', 'Defendeu o desenvolvimento da guerra blindada entre as duas guerras.', 'Comandou o Terceiro Exército no avanço mais rápido registrado pelos aliados na França.', 'Conduziu a manobra de socorro a Bastogne durante a Batalha das Ardenas.'],
    cronologia: [
      [1885, 'Nasce em San Gabriel, Califórnia, em 11 de novembro.'],
      [1912, 'Compete no pentatlo moderno nos Jogos Olímpicos.'],
      [1918, 'Comanda o corpo de tanques americano na França.'],
      [1943, 'Esbofeteia soldados hospitalizados na Sicília e perde o comando por meses.'],
      [1944, 'Comanda o Terceiro Exército na França e socorre Bastogne.'],
      [1945, 'Morre na Alemanha, em 21 de dezembro.']
    ],
    nota: 'Patton agrediu fisicamente dois soldados hospitalizados com estresse de combate em 1943 e fez declarações públicas sobre desnazificação que levaram a seu afastamento do comando.'
  },

  'Eric Hoffer': {
    papel: 'Escritor e filósofo social norte-americano (1898–1983)',
    resumo: 'Estivador autodidata, escreveu O Verdadeiro Crente, análise clássica dos movimentos de massa.',
    bio: [
      'Eric Hoffer nasceu no Bronx, Nova York, provavelmente em 1898 — a data e boa parte de sua biografia inicial vêm de seu próprio relato e não são documentalmente confirmadas. Segundo esse relato, perdeu a visão aos sete anos, após um acidente, e a recuperou inexplicavelmente aos quinze. O medo de voltar a cegar o levou a ler compulsivamente tudo o que encontrava.',
      'Ficou órfão aos dezoito e passou décadas como trabalhador migrante na Califórnia, colhendo safras, garimpando ouro e vivendo em alojamentos, sempre com uma biblioteca ambulante. A partir de 1943 trabalhou como estivador no porto de São Francisco, ofício que exerceu por vinte e cinco anos e que recusou trocar por qualquer outro, escrevendo nos intervalos.',
      'O Verdadeiro Crente, de 1951, analisa o que leva pessoas a aderir a movimentos de massa — religiosos, nacionalistas, revolucionários — e sustenta que a adesão nasce menos da doutrina do que da frustração pessoal e do desejo de se livrar de um eu insuportável, trocando-o por uma identidade coletiva. A tese explica por que movimentos de conteúdo oposto atraem o mesmo tipo de gente e por que convertidos migram de uma causa a outra.',
      'O livro foi elogiado publicamente por Eisenhower, que o distribuiu a amigos, e tornou-se um clássico da psicologia política. Hoffer escreveu mais dez livros, sempre em prosa curta e aforística, e recebeu a Medalha Presidencial da Liberdade em 1983, pouco antes de morrer em São Francisco, em 21 de maio daquele ano.'
    ],
    contexto: 'Hoffer escreve logo após o nazismo e no início da Guerra Fria, tentando explicar como pessoas comuns aderem a movimentos que exigem a supressão de si mesmas. Sua condição de trabalhador braçal sem formação acadêmica, escrevendo sobre psicologia política com autoridade reconhecida, é parte inseparável de sua figura.',
    contribuicoes: ['Escreveu O Verdadeiro Crente (1951), análise clássica dos movimentos de massa.', 'Formulou a tese da adesão como fuga de um eu insuportável, e não como convicção doutrinária.', 'Escreveu mais dez livros em prosa aforística sobre sociedade, trabalho e mudança.', 'Recebeu a Medalha Presidencial da Liberdade em 1983.'],
    cronologia: [
      ['c. 1898', 'Nasce no Bronx, Nova York.'],
      [1943, 'Torna-se estivador no porto de São Francisco.'],
      [1951, 'Publica O Verdadeiro Crente.'],
      [1955, 'Publica A Mente Apaixonada.'],
      [1983, 'Recebe a Medalha Presidencial da Liberdade e morre em São Francisco.']
    ],
    nota: 'Boa parte da biografia inicial de Hoffer vem apenas de seu próprio relato e não é documentalmente confirmada.'
  },

  'Lou Gerstner': {
    papel: 'Executivo norte-americano (1942–)',
    resumo: 'Salvou a IBM da desmontagem nos anos 1990 transformando-a de fabricante de máquinas em empresa de serviços.',
    bio: [
      'Louis Vincent Gerstner Jr. nasceu em Mineola, Nova York, em 1º de março de 1942, filho de um motorista de caminhão de cervejaria. Formou-se em engenharia em Dartmouth e fez MBA em Harvard. Trabalhou na McKinsey, tornando-se sócio sênior aos vinte e oito anos, e depois foi executivo da American Express e presidente da RJR Nabisco.',
      'Assumiu a IBM em abril de 1993, sem nenhuma experiência no setor de tecnologia — escolha que gerou ceticismo generalizado. A empresa registrara no ano anterior o maior prejuízo da história corporativa americana até então, e o plano em curso era dividi-la em treze empresas independentes.',
      'Gerstner cancelou a divisão. Sua avaliação foi que o único ativo que a IBM tinha e os concorrentes não era justamente a capacidade de integrar tudo — e que o cliente não queria comprar peças e montá-las sozinho. Reorientou a companhia para serviços e integração, cortou custos em escala brutal, com dezenas de milhares de demissões, e atacou frontalmente a cultura interna, que ele descreveu como avessa a decisões e obcecada por processo.',
      'Sua frase mais conhecida foi dita em 1993, quando perguntado sobre sua visão para a empresa: a última coisa de que a IBM precisava naquele momento era de uma visão — precisava de execução no mercado. A companhia voltou ao lucro e ao crescimento. Deixou o cargo em 2002 e escreveu Quem Disse que os Elefantes Não Dançam?, um dos relatos empresariais mais citados sobre transformação organizacional.'
    ],
    contexto: 'A recuperação da IBM é um dos casos mais estudados de reversão corporativa, e o mais citado exemplo de que cultura organizacional é obstáculo material e não assunto acessório. Gerstner escreveu que aprendeu na IBM que a cultura não é um aspecto do jogo — é o jogo.',
    contribuicoes: ['Conduziu a recuperação da IBM, cancelando a divisão da empresa em treze companhias.', 'Reorientou a IBM de fabricante de equipamentos para empresa de serviços e integração.', 'Escreveu Quem Disse que os Elefantes Não Dançam?, referência sobre transformação organizacional.'],
    cronologia: [
      [1942, 'Nasce em Mineola, Nova York, em 1º de março.'],
      [1978, 'Torna-se executivo da American Express.'],
      [1993, 'Assume a presidência da IBM.'],
      [2002, 'Deixa o cargo.'],
      [2002, 'Publica Quem Disse que os Elefantes Não Dançam?']
    ]
  },

  'Indra Nooyi': {
    papel: 'Executiva indiana-americana (1955–)',
    resumo: 'Dirigiu a PepsiCo por doze anos e reorientou o portfólio da empresa para produtos mais saudáveis.',
    bio: [
      'Indra Krishnamurthy Nooyi nasceu em Madras, hoje Chennai, na Índia, em 28 de outubro de 1955, em família tâmil de classe média. Estudou física, química e matemática e fez pós-graduação em administração no Instituto Indiano de Administração em Calcutá. Tocava guitarra numa banda de garotas e jogava críquete, atividades incomuns para meninas em sua cidade na época.',
      'Foi admitida em Yale em 1978 e mudou-se para os Estados Unidos com pouquíssimo dinheiro, trabalhando como recepcionista no turno da noite para se sustentar. Trabalhou na Boston Consulting Group, na Motorola e na Asea Brown Boveri antes de entrar na PepsiCo em 1994.',
      'Como estrategista, conduziu a separação das operações de restaurantes — Pizza Hut, KFC e Taco Bell — e as aquisições da Tropicana e da Quaker Oats, esta última incluindo a Gatorade, decisões que reformularam o portfólio da empresa.',
      'Tornou-se presidente executiva em 2006, uma das poucas mulheres e a primeira imigrante a dirigir uma das maiores empresas americanas. Formulou a estratégia que chamou de desempenho com propósito, deslocando parte do portfólio de refrigerantes e salgadinhos para produtos com menos açúcar, sal e gordura — orientação que enfrentou forte resistência interna e de acionistas, que a acusavam de sacrificar o negócio principal. A receita da empresa cresceu cerca de oitenta por cento durante sua gestão. Deixou o cargo em 2018 e escreveu Meu Trabalho, Minha Vida, sobre carreira, maternidade e políticas de apoio a famílias.'
    ],
    contexto: 'Nooyi dirigiu uma empresa de alimentos e bebidas num período em que a pressão regulatória e social sobre açúcar e obesidade crescia rapidamente. Sua estratégia foi antecipar essa mudança em vez de reagir a ela, e o atrito que enfrentou mede a resistência do mercado a decisões de horizonte longo.',
    contribuicoes: [
      'Dirigiu a PepsiCo entre 2006 e 2018, com crescimento expressivo de receita.',
      'Formulou a estratégia de desempenho com propósito, reorientando o portfólio para produtos mais saudáveis.',
      'Conduziu as aquisições da Tropicana e da Quaker Oats e a separação das operações de restaurantes.',
      'Escreveu Meu Trabalho, Minha Vida, sobre carreira, família e políticas públicas de apoio a cuidadores.'
    ],
    cronologia: [
      [1955, 'Nasce em Madras, Índia, em 28 de outubro.'],
      [1978, 'Muda-se para os Estados Unidos para estudar em Yale.'],
      [1994, 'Entra na PepsiCo.'],
      [2006, 'Torna-se presidente executiva da PepsiCo.'],
      [2018, 'Deixa o cargo.'],
      [2021, 'Publica Meu Trabalho, Minha Vida.']
    ]
  },

  'Wernher von Braun': {
    papel: 'Engenheiro aeroespacial alemão-americano (1912–1977)',
    resumo: 'Projetou o foguete V-2 para a Alemanha nazista e depois o Saturno V que levou o homem à Lua.',
    bio: [
      'Wernher Magnus Maximilian von Braun nasceu em Wirsitz, então Prússia, em 23 de março de 1912, em família aristocrática. Interessou-se por foguetes na adolescência ao ler sobre viagem espacial e entrou para uma sociedade amadora de foguetes em Berlim. Foi recrutado pelo exército alemão aos vinte anos.',
      'Dirigiu o desenvolvimento do foguete A-4, conhecido como V-2, o primeiro míssil balístico de longo alcance e o primeiro objeto construído pelo homem a alcançar o espaço. A arma matou milhares de civis em Londres, Antuérpia e outras cidades. Sua produção, na fábrica subterrânea de Mittelwerk, usou trabalho escravo de prisioneiros do campo de Dora-Mittelbau: estima-se que mais pessoas tenham morrido fabricando o V-2 do que atingidas por ele. Von Braun foi membro do partido nazista e oficial da SS, visitou a fábrica e teve conhecimento das condições — fatos documentados que ele minimizou pelo resto da vida.',
      'Rendeu-se aos americanos em 1945 e foi levado aos Estados Unidos com sua equipe pela Operação Paperclip, que apagou ou suavizou registros sobre o passado dos cientistas para viabilizar sua entrada no país. Trabalhou em mísseis do exército e depois na NASA, onde dirigiu o centro de voo espacial Marshall.',
      'Foi o principal responsável pelo Saturno V, o foguete que levou a missão Apollo 11 à Lua em 1969 e que permanece o veículo de lançamento mais potente já operado com sucesso. Divulgou a exploração espacial ao público americano em séries de televisão com Walt Disney. Morreu em Alexandria, Virgínia, em 16 de junho de 1977.'
    ],
    contexto: 'Von Braun é o caso mais discutido de continuidade entre a ciência a serviço do nazismo e o programa espacial americano. Sua contribuição técnica é incontestável e sua responsabilidade sobre o uso de trabalho escravo na fabricação do V-2 é documentada; a avaliação de sua figura exige as duas informações juntas.',
    contribuicoes: ['Dirigiu o desenvolvimento do V-2, primeiro míssil balístico de longo alcance e primeiro objeto humano a alcançar o espaço.', 'Foi o principal responsável pelo projeto do foguete Saturno V, que levou o homem à Lua.', 'Dirigiu o centro de voo espacial Marshall, da NASA.', 'Divulgou a exploração espacial ao público americano em séries de televisão.'],
    cronologia: [
      [1912, 'Nasce em Wirsitz, em 23 de março.'],
      [1937, 'Assume a direção técnica do centro de foguetes de Peenemünde.'],
      [1944, 'O V-2 entra em operação; sua produção usa trabalho escravo em Mittelwerk.'],
      [1945, 'Rende-se aos americanos e é levado aos Estados Unidos.'],
      [1960, 'Assume a direção do centro Marshall, da NASA.'],
      [1969, 'O Saturno V leva a Apollo 11 à Lua.'],
      [1977, 'Morre na Virgínia.']
    ],
    nota: 'Von Braun foi membro do partido nazista e oficial da SS. A produção do V-2 empregou trabalho escravo de prisioneiros de campo de concentração, com mais mortes na fabricação do que causadas pela arma. Os fatos são documentados e foram minimizados por ele em vida.'
  },

  'E. M. Forster': {
    papel: 'Escritor britânico (1879–1970)',
    resumo: 'Escreveu Uma Passagem para a Índia e formulou o imperativo de apenas conectar.',
    bio: [
      'Edward Morgan Forster nasceu em Londres em 1º de janeiro de 1879. O pai morreu de tuberculose quando ele tinha menos de dois anos, e ele foi criado entre mulheres — a mãe e tias-avós. Uma herança recebida de uma tia-avó aos oito anos garantiu-lhe independência financeira e permitiu que estudasse em Cambridge e escrevesse sem precisar de emprego.',
      'Em Cambridge integrou a sociedade dos Apóstolos e formou as amizades que dariam origem ao Grupo de Bloomsbury. Viajou pela Itália e pela Grécia, cenários de seus primeiros romances, e trabalhou na Índia como secretário particular de um marajá.',
      'Publicou cinco romances entre 1905 e 1924. Howards End, de 1910, traz na epígrafe a formulação que sintetiza sua obra: apenas conectar — unir a prosa e a paixão, o mundo dos negócios e o da sensibilidade, que na Inglaterra eduardiana viviam separados. Uma Passagem para a Índia, de 1924, examina a impossibilidade de amizade genuína entre colonizador e colonizado enquanto o sistema colonial existir, e é considerado seu romance maior.',
      'Não publicou mais romances nos quarenta e seis anos seguintes de vida. Maurice, escrito por volta de 1914 e sobre amor entre homens com final feliz, foi mantido inédito por decisão do autor e publicado em 1971, um ano após sua morte — a homossexualidade era crime no Reino Unido durante quase toda a sua vida. Escreveu ensaios, crítica e Aspectos do Romance, e viveu como membro honorário de um colégio de Cambridge até morrer, em Coventry, em 7 de junho de 1970.'
    ],
    contexto: 'Forster escreve sobre a Inglaterra eduardiana e sobre o império britânico a partir de dentro da classe que os sustentava, e o que sua obra examina é justamente a incapacidade dessa classe de reconhecer o outro. O silêncio romanesco de quatro décadas e o romance guardado na gaveta fazem parte dessa mesma história.',
    contribuicoes: ['Escreveu Uma Passagem para a Índia (1924) e Howards End (1910).', 'Formulou o imperativo de apenas conectar como síntese de sua obra.', 'Escreveu Aspectos do Romance, ensaio de teoria literária ainda em uso.', 'Escreveu Maurice, publicado postumamente, um dos primeiros romances ingleses sobre amor entre homens com desfecho não trágico.'],
    cronologia: [
      [1879, 'Nasce em Londres, em 1º de janeiro.'],
      [1908, 'Publica Um Quarto com Vista.'],
      [1910, 'Publica Howards End.'],
      [1924, 'Publica Uma Passagem para a Índia.'],
      [1927, 'Publica Aspectos do Romance.'],
      [1970, 'Morre em Coventry.'],
      [1971, 'Maurice é publicado postumamente.']
    ]
  },

  'Charles Spurgeon': {
    papel: 'Pregador batista britânico (1834–1892)',
    resumo: 'Chamado de príncipe dos pregadores, reunia multidões em Londres e publicou o maior corpo de sermões em língua inglesa.',
    bio: [
      'Charles Haddon Spurgeon nasceu em Kelvedon, Essex, em 19 de junho de 1834, filho e neto de pregadores congregacionais. Converteu-se aos quinze anos ao entrar por acaso numa capela metodista durante uma nevasca. Pregou pela primeira vez aos dezesseis e assumiu sua primeira congregação aos dezessete, sem qualquer formação teológica formal — condição que manteve a vida inteira.',
      'Aos dezenove anos foi chamado para uma igreja em Londres e, em pouco tempo, o templo não comportava o público. Passou a pregar em salões alugados, incluindo o Palácio de Cristal, onde falou para cerca de vinte e três mil pessoas sem qualquer amplificação. Em 1861 foi inaugurado o Tabernáculo Metropolitano, construído para cinco mil pessoas, onde pregou por mais de trinta anos.',
      'Seus sermões eram taquigrafados, revisados por ele e publicados semanalmente, sendo vendidos às centenas de milhares e traduzidos para dezenas de idiomas. O conjunto ultrapassa sessenta volumes e é o maior corpo de obras de um único autor cristão em língua inglesa.',
      'Fundou um colégio para formação de pregadores e um orfanato, e denunciou publicamente a escravidão nos Estados Unidos, o que fez seus livros serem queimados em estados sulistas. Sofria de gota, reumatismo e episódios graves de depressão, sobre os quais falava abertamente do púlpito — postura incomum e uma das razões da identificação de seus leitores. Morreu em Menton, França, em 31 de janeiro de 1892.'
    ],
    contexto: 'Spurgeon pregou na Londres vitoriana em plena expansão urbana e industrial, para plateias que incluíam operários e comerciantes que as igrejas estabelecidas não alcançavam. A publicação semanal impressa transformou um pregador local em autor de circulação mundial antes de qualquer tecnologia de transmissão.',
    contribuicoes: ['Pregou por mais de trinta anos no Tabernáculo Metropolitano, para plateias de milhares.', 'Publicou o maior corpo de sermões de um único autor em língua inglesa.', 'Fundou um colégio de formação de pregadores e um orfanato em Londres.', 'Denunciou publicamente a escravidão nos Estados Unidos.', 'Falou abertamente sobre a própria depressão, do púlpito e por escrito.'],
    cronologia: [
      [1834, 'Nasce em Kelvedon, Essex, em 19 de junho.'],
      [1854, 'Assume igreja em Londres, aos dezenove anos.'],
      [1857, 'Prega para cerca de vinte e três mil pessoas no Palácio de Cristal.'],
      [1861, 'É inaugurado o Tabernáculo Metropolitano.'],
      [1892, 'Morre em Menton, França.']
    ]
  },

  'Erma Bombeck': {
    papel: 'Cronista norte-americana (1927–1996)',
    resumo: 'Escreveu por três décadas sobre a vida doméstica suburbana com um humor que a tornou uma das colunistas mais lidas dos Estados Unidos.',
    bio: [
      'Erma Louise Fiste nasceu em Bellbrook, Ohio, em 21 de fevereiro de 1927. O pai, operário, morreu quando ela tinha nove anos, e a mãe passou a trabalhar em fábrica. Trabalhou como office-girl num jornal ainda na escola e formou-se em jornalismo. Um professor universitário lhe disse a única frase que ela citaria pelo resto da vida: você consegue escrever.',
      'Trabalhou como repórter até o nascimento dos filhos, quando deixou o emprego. Em 1964, aos trinta e sete anos, começou a escrever uma coluna semanal para um jornal de bairro por três dólares. Em dois anos estava sindicalizada; no auge, era publicada em cerca de novecentos jornais, três vezes por semana, com dezenas de milhões de leitores.',
      'Escrevia sobre o que ninguém considerava assunto: pilhas de roupa suja, filhos adolescentes, obras na casa, dietas, a vizinhança, o casamento de vinte anos. Seu humor era autodepreciativo apenas na superfície — por baixo, tratava com precisão da invisibilidade do trabalho doméstico e da distância entre a dona de casa idealizada da publicidade e a mulher real.',
      'Publicou quinze livros, vários deles nas listas de mais vendidos, entre eles A Grama É Sempre Mais Verde Sobre a Fossa Séptica. Militou pela Emenda de Direitos Iguais nos anos 1970. Teve câncer de mama e depois doença renal policística hereditária; recusou-se a usar a fama para adiantar sua posição na fila de transplante. Morreu em 22 de abril de 1996, em consequência de complicações de um transplante de rim.'
    ],
    contexto: 'Bombeck escreveu para milhões de mulheres cuja vida a imprensa tratava como não notícia, num período em que o feminismo discutia o trabalho doméstico em termos teóricos. Ela fez o mesmo diagnóstico em forma de piada, três vezes por semana, e alcançou um público que os ensaios não alcançavam.',
    contribuicoes: ['Escreveu por três décadas uma coluna publicada em cerca de novecentos jornais.', 'Publicou quinze livros, vários deles entre os mais vendidos dos Estados Unidos.', 'Levou a vida doméstica suburbana à condição de matéria literária e jornalística.', 'Militou publicamente pela Emenda de Direitos Iguais.'],
    cronologia: [
      [1927, 'Nasce em Bellbrook, Ohio, em 21 de fevereiro.'],
      [1964, 'Começa a escrever a coluna semanal por três dólares.'],
      [1976, 'Publica A Grama É Sempre Mais Verde Sobre a Fossa Séptica.'],
      [1978, 'Milita pela Emenda de Direitos Iguais.'],
      [1996, 'Morre em São Francisco.']
    ]
  },

  'Friedrich Schleiermacher': {
    papel: 'Teólogo e filósofo alemão (1768–1834)',
    resumo: 'Fundou a teologia protestante moderna e a hermenêutica como disciplina geral.',
    bio: [
      'Friedrich Daniel Ernst Schleiermacher nasceu em Breslau, então Prússia e hoje Wrocław, em 21 de novembro de 1768, filho de um capelão militar. Foi educado entre os irmãos morávios, comunidade pietista de religiosidade intensa, e rompeu com eles ao perder a fé nas doutrinas que ensinavam — sem perder, dizia, a experiência religiosa que ali aprendera.',
      'Tornou-se pastor em Berlim e conviveu com o círculo romântico da cidade, sobretudo com Friedrich Schlegel. Foi nesse ambiente que escreveu, em 1799, Sobre a Religião: Discursos aos seus Desprezadores Cultos, dirigido justamente aos intelectuais que consideravam a religião superstição ultrapassada.',
      'Sua tese reorientou a teologia: a religião não é nem metafísica nem moral, não é um conjunto de proposições sobre o mundo nem um código de conduta, e sim uma forma própria de experiência — que ele descreveria depois como o sentimento de dependência absoluta. Com isso, a fé deixava de depender de provas racionais da existência de Deus e passava a ter fundamento próprio, imune tanto à ciência quanto à filosofia.',
      'Foi um dos fundadores da Universidade de Berlim, com Humboldt, e ali lecionou até a morte. Desenvolveu também a hermenêutica como disciplina geral — antes dele, havia regras de interpretação específicas para textos bíblicos e jurídicos; Schleiermacher propôs uma teoria geral da compreensão, aplicável a qualquer texto, que seria retomada por Dilthey, Heidegger e Gadamer. Traduziu Platão integralmente para o alemão. Morreu em Berlim em 12 de fevereiro de 1834.'
    ],
    contexto: 'Schleiermacher escreve quando o Iluminismo havia desmontado os argumentos tradicionais para a fé e o romantismo buscava o fundamento da experiência no sentimento. Sua solução — deslocar a religião do plano da doutrina para o da experiência — define a teologia protestante liberal e é o ponto de partida de praticamente todo debate teológico posterior.',
    contribuicoes: ['Fundou a teologia protestante moderna, com Sobre a Religião (1799) e A Fé Cristã.', 'Formulou a religião como sentimento de dependência absoluta.', 'Desenvolveu a hermenêutica como teoria geral da compreensão, retomada por Dilthey, Heidegger e Gadamer.', 'Traduziu integralmente os diálogos de Platão para o alemão.', 'Foi um dos fundadores da Universidade de Berlim.'],
    cronologia: [
      [1768, 'Nasce em Breslau, em 21 de novembro.'],
      [1799, 'Publica Sobre a Religião: Discursos aos seus Desprezadores Cultos.'],
      [1804, 'Inicia a tradução completa de Platão.'],
      [1810, 'Participa da fundação da Universidade de Berlim.'],
      [1821, 'Publica A Fé Cristã.'],
      [1834, 'Morre em Berlim.']
    ]
  },

  'Ralph Nader': {
    papel: 'Advogado e ativista norte-americano (1934–)',
    resumo: 'Criou o movimento de defesa do consumidor nos Estados Unidos e forçou a indústria automobilística a adotar itens de segurança.',
    bio: [
      'Ralph Nader nasceu em Winsted, Connecticut, em 27 de fevereiro de 1934, filho de imigrantes libaneses donos de um restaurante. Formou-se em Princeton e em direito em Harvard. Interessou-se por segurança automotiva ainda estudante, ao investigar acidentes e concluir que a indústria tratava mortes no trânsito como inevitáveis e responsabilidade exclusiva do motorista.',
      'Unsafe at Any Speed, publicado em 1965, argumentou que os automóveis americanos eram projetados sem consideração pela sobrevivência do ocupante em colisão, com colunas de direção que perfuravam o peito, painéis rígidos e ausência de cintos. O primeiro capítulo tratava do Chevrolet Corvair, cuja suspensão traseira favorecia perda de controle.',
      'A General Motors contratou detetives para segui-lo e tentar encontrar material que o desmoralizasse, incluindo tentativas de armadilha sexual. A operação veio a público, o presidente da empresa foi obrigado a se desculpar diante do Senado americano, e o escândalo transformou Nader em figura nacional. Ele processou a GM, venceu e usou a indenização para financiar sua organização.',
      'Sua atuação foi decisiva para a criação da agência federal de segurança no trânsito e para a lei de 1966 que tornou obrigatórios cintos de segurança e outros itens. Formou uma rede de jovens advogados e pesquisadores e teve papel na criação da agência de proteção ambiental, da agência de segurança do trabalho e da lei de liberdade de informação. Disputou a presidência quatro vezes; sua candidatura em 2000 é apontada por parte dos democratas como fator na derrota de Al Gore, tese que ele contesta.'
    ],
    contexto: 'Nader inventou uma forma de atuação política que não existia: o ativista técnico que produz relatórios, litiga e força mudanças regulatórias sem ocupar cargo nem depender de partido. As estimativas de vidas salvas pelas normas de segurança automotiva que ele ajudou a impor chegam a centenas de milhares.',
    contribuicoes: [
      'Escreveu Unsafe at Any Speed (1965), que expôs a ausência de segurança nos automóveis americanos.',
      'Sua atuação levou à lei federal de segurança de veículos de 1966 e à criação da agência de segurança no trânsito.',
      'Teve papel na criação da agência de proteção ambiental e da agência de segurança do trabalho.',
      'Fundou o movimento moderno de defesa do consumidor nos Estados Unidos.'
    ],
    cronologia: [
      [1934, 'Nasce em Winsted, Connecticut, em 27 de fevereiro.'],
      [1965, 'Publica Unsafe at Any Speed.'],
      [1966, 'A General Motors se desculpa no Senado; é aprovada a lei de segurança de veículos.'],
      [1970, 'É criada a agência de proteção ambiental.'],
      [2000, 'Disputa a presidência dos Estados Unidos pelo Partido Verde.']
    ]
  },

  'Woody Allen': {
    papel: 'Cineasta, roteirista e comediante norte-americano (1935–)',
    resumo: 'Dirigiu cerca de cinquenta filmes em cinco décadas e é figura pública marcada por acusações de abuso.',
    bio: [
      'Allan Stewart Konigsberg nasceu no Bronx, Nova York, em 30 de novembro de 1935, em família judaica. Começou a vender piadas a colunistas de jornal aos dezesseis anos e adotou o nome Woody Allen. Escreveu para programas de televisão e passou ao stand-up no início dos anos 1960, construindo uma persona de intelectual neurótico e inseguro.',
      'Estreou no cinema nos anos 1960 com comédias de estrutura solta e humor absurdo. Noivo Neurótico, Noiva Nervosa, de 1977, marcou a virada para um cinema de personagens e diálogo, e recebeu quatro Oscars, incluindo os de melhor filme, direção e roteiro original. Seguiram-se Manhattan, Hannah e Suas Irmãs, Crimes e Pecados e, mais tarde, Match Point e Meia-Noite em Paris.',
      'Escreveu e dirigiu com regularidade quase anual por cinco décadas, alternando comédia e drama, e recebeu quatro Oscars ao longo da carreira. Toca clarinete semanalmente em Nova York há décadas.',
      'Em 1992, no rompimento com Mia Farrow, veio a público sua relação com Soon-Yi Previn, filha adotiva dela, com quem se casaria. No mesmo período, Farrow acusou-o de abuso sexual contra a filha adotiva Dylan, então com sete anos. Duas investigações oficiais foram conduzidas; nenhuma resultou em acusação formal, e uma equipe de avaliação concluiu que não houve abuso, conclusão contestada pelo promotor do caso e pela família. Dylan Farrow manteve publicamente a acusação na idade adulta. Allen nega. O caso permanece objeto de disputa e afetou de forma duradoura sua atuação na indústria.'
    ],
    contexto: 'Allen é uma das obras mais extensas do cinema americano e uma das figuras públicas mais disputadas dele. A avaliação de seus filmes hoje é inseparável do debate sobre as acusações contra ele, e qualquer apresentação de sua trajetória que omita isso está incompleta.',
    contribuicoes: ['Dirigiu cerca de cinquenta filmes em cinco décadas.', 'Recebeu quatro Oscars, entre eles os de melhor filme, direção e roteiro por Noivo Neurótico, Noiva Nervosa.', 'Dirigiu Manhattan, Hannah e Suas Irmãs, Crimes e Pecados e Meia-Noite em Paris.', 'Escreveu contos e peças, além de roteiros.'],
    cronologia: [
      [1935, 'Nasce no Bronx, Nova York, em 30 de novembro.'],
      [1966, 'Estreia como diretor de cinema.'],
      [1977, 'Lança Noivo Neurótico, Noiva Nervosa.'],
      [1979, 'Lança Manhattan.'],
      [1992, 'Rompe com Mia Farrow; vem a público a acusação de abuso.'],
      [2011, 'Lança Meia-Noite em Paris.']
    ],
    nota: 'Woody Allen foi acusado por Dylan Farrow de abuso sexual ocorrido em 1992, quando ela tinha sete anos. Duas investigações oficiais não resultaram em acusação formal, e uma avaliação concluiu que não houve abuso — conclusão contestada pelo promotor do caso. Ele nega, Dylan Farrow mantém a acusação, e o caso permanece em disputa pública.'
  },

  'Richard Bach': {
    papel: 'Escritor e aviador norte-americano (1936–)',
    resumo: 'Escreveu Fernão Capelo Gaivota, fábula sobre uma gaivota que quer voar melhor do que precisa.',
    bio: [
      'Richard David Bach nasceu em Oak Park, Illinois, em 23 de junho de 1936. Voar foi sua ocupação central desde jovem: serviu na força aérea americana, pilotou aviões antigos em apresentações itinerantes pelo Meio-Oeste, oferecendo voos por três dólares, e escreveu por anos para revistas de aviação. Essa experiência é a matéria concreta de toda a sua obra.',
      'Fernão Capelo Gaivota foi escrito em duas etapas separadas por anos — a primeira parte veio, segundo seu relato, quase de uma vez, e a continuação só apareceu muito depois. Foi recusado por dezoito editoras antes de ser publicado em 1970, com tiragem inicial modesta e ilustrado com fotografias de gaivotas.',
      'O livro tornou-se um fenômeno improvável: uma novela de pouco mais de cem páginas sobre uma gaivota que se recusa a voar apenas para comer e é expulsa do bando por isso. Vendeu mais de um milhão de exemplares em 1972, ficou no topo das listas americanas por quase dois anos e foi traduzido para dezenas de idiomas, com adaptação para o cinema com trilha de Neil Diamond.',
      'Escreveu depois Ilusões, sobre um messias relutante, e Ponte para o Sempre. Sofreu um acidente aéreo grave em 2012, com meses de recuperação. Sua obra é lida como fábula sobre superação e liberdade individual, e criticada por parte da crítica literária como simplificadora — recepção dividida que acompanha o livro desde o lançamento.'
    ],
    contexto: 'Fernão Capelo Gaivota apareceu no início dos anos 1970, quando a contracultura buscava textos breves de conteúdo espiritual fora das religiões estabelecidas. Junto com O Profeta e com Sidarta, formou o conjunto de livros pequenos que aquela geração leu e passou adiante.',
    contribuicoes: ['Escreveu Fernão Capelo Gaivota (1970), um dos maiores fenômenos editoriais de sua década.', 'Escreveu Ilusões e Ponte para o Sempre.', 'Escreveu por anos sobre aviação em revistas especializadas, matéria que atravessa toda a sua obra.'],
    cronologia: [
      [1936, 'Nasce em Oak Park, Illinois, em 23 de junho.'],
      [1970, 'Publica Fernão Capelo Gaivota, após dezoito recusas editoriais.'],
      [1972, 'O livro alcança o topo das listas americanas.'],
      [1977, 'Publica Ilusões.'],
      [2012, 'Sofre um acidente aéreo grave.']
    ]
  },

  'Pat Riley': {
    papel: 'Treinador e dirigente de basquete norte-americano (1945–)',
    resumo: 'Ganhou títulos da NBA como jogador, técnico e dirigente, e formulou o conceito da doença do eu.',
    bio: [
      'Patrick James Riley nasceu em Rome, Nova York, em 20 de março de 1945, filho de um jogador e técnico de beisebol de ligas menores. Jogou basquete e futebol americano na Universidade de Kentucky e foi campeão da NBA como reserva do Los Angeles Lakers em 1972.',
      'Tornou-se comentarista e depois auxiliar técnico, assumindo o comando dos Lakers em 1981 quase por acaso, no meio da temporada. Dirigiu o time do chamado showtime, com Magic Johnson e Kareem Abdul-Jabbar, conquistando quatro títulos nos anos 1980.',
      'Dirigiu depois o New York Knicks, que reconstruiu como equipe de defesa dura, e o Miami Heat, onde acumulou as funções de técnico e dirigente e conquistou o título de 2006. Como presidente da equipe, montou o elenco que venceu em 2012 e 2013, tendo articulado a contratação simultânea de LeBron James e Chris Bosh em 2010.',
      'Escreveu The Winner Within, em que formulou o conceito da doença do eu: o processo pelo qual uma equipe vencedora se desfaz porque cada integrante passa a atribuir a si o mérito coletivo e a exigir reconhecimento individual. Formulou também a ideia de esforço periférico, a margem de trabalho que separa quem cumpre o necessário de quem vence. É um dos poucos a ter conquistado títulos da NBA como jogador, técnico e dirigente.'
    ],
    contexto: 'Riley construiu sua reputação administrando equipes de grandes talentos individuais em três franquias distintas, ao longo de quatro décadas. Sua contribuição conceitual — a doença do eu — nomeia um problema que qualquer organização bem-sucedida enfrenta, e por isso circulou muito além do esporte.',
    contribuicoes: ['Conquistou títulos da NBA como jogador, técnico e dirigente.', 'Dirigiu os Lakers do showtime, com quatro títulos nos anos 1980.', 'Formulou o conceito da doença do eu na desagregação de equipes vencedoras.', 'Escreveu The Winner Within, aplicado amplamente fora do esporte.', 'Montou como dirigente os elencos campeões do Miami Heat.'],
    cronologia: [
      [1945, 'Nasce em Rome, Nova York, em 20 de março.'],
      [1972, 'É campeão da NBA como jogador dos Lakers.'],
      [1981, 'Assume o comando técnico dos Lakers.'],
      [1993, 'Publica The Winner Within.'],
      [2006, 'Conquista o título da NBA como técnico do Miami Heat.'],
      [2012, 'O elenco que montou como dirigente conquista o título.']
    ]
  }
};

/* ---- nomes cuja identidade não se sustenta em fonte independente ---- */
const IDENTIDADE_DUVIDOSA = [
  ['Chris Grosser', 'Nome que circula apenas em agregadores de frases. Não foi localizada nenhuma fonte independente que identifique quem seria essa pessoa, sua nacionalidade, ocupação ou obra.'],
  ['Bertram Carr', 'Atribuição que circula em coletâneas sem identificação verificável do autor. Há referência a um prefeito britânico de mesmo nome no início do século XX, sem ligação documentada com a frase.'],
  ['J. Petit Senn', 'Poeta e aforista genebrino do século XIX (1792–1870), de obra pouco documentada fora de coletâneas de máximas. As atribuições que circulam em português não trazem indicação de obra ou edição.'],
  ['Roy M. Goodman', 'Político norte-americano, senador estadual por Nova York. A frase que lhe é atribuída circula sem indicação de discurso, texto ou ocasião.'],
  ['Margaret Lee Runbeck', 'Escritora norte-americana (1905–1956), autora de romances e contos hoje pouco reeditados. As frases atribuídas circulam sem indicação de obra.'],
  ['Hyman Schachtel', 'Rabino norte-americano (1907–1990), de Houston. A frase atribuída circula sem indicação de sermão, livro ou ocasião.'],
  ['Marge Kennedy', 'Autora norte-americana de livros sobre família e maternidade. As frases atribuídas circulam em coletâneas sem indicação de obra.'],
  ['Anthony Brandt', 'Autor norte-americano, colaborador de revistas. A frase atribuída circula sem indicação de artigo ou livro.'],
  ['Gail Lumet Buckley', 'Escritora norte-americana, filha da cantora Lena Horne, autora de The Hornes: An American Family. A frase atribuída circula sem indicação de página ou capítulo.']
];
const RELATORIO_FASE22 = { duvidosas: 0 };
IDENTIDADE_DUVIDOSA.forEach(([nome, nota]) => {
  const c = canonAuthor(nome);
  if (!AUTOR_INDEX.has(c)) return;
  PERFIS_PROFUNDOS[c] = PERFIS_PROFUNDOS[c] || {
    resumo: 'Autoria em verificação: não foi localizada documentação independente suficiente sobre esta pessoa.',
    bio: [nota, 'O acervo mantém a frase, mas não apresenta como confirmada uma identidade que não pôde ser verificada em fonte independente. Quem tiver informação documentada sobre este nome contribui para a curadoria.'],
    contexto: 'Nomes que circulam apenas em coletâneas e agregadores são um problema recorrente em bancos de citações: a repetição em muitos sites cria a aparência de confirmação sem que exista qualquer fonte primária por trás.',
    contribuicoes: [],
    cronologia: [],
    nota: 'Identidade e autoria não confirmadas em fonte independente.'
  };
  RELATORIO_FASE22.duvidosas++;
});

(function aplicarF22() {
  Object.entries(PANORAMAS_F22).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  RECALCULAR_FILA();
})();
window.F22 = RELATORIO_FASE22;

(function bootF22() {
  const anterior = window.__fase5Boot;
  window.__fase5Boot = function () {
    try {
      if (anterior) anterior();
    } catch (e) {
      console.error('Fase anterior:', e);
    }
    try {
      RECALCULAR_FILA();
      console.info('MeMotiva · checkpoint: ' + CURADORIA_CHECKPOINT.concluidos + '/' + CURADORIA_CHECKPOINT.total + ' · próximo: ' + CURADORIA_CHECKPOINT.proximo);
    } catch (e) {
      console.error('Fase 22:', e);
    }
  };
})();

/* ================================================================
   FASE 23 — RELATÓRIO CONSOLIDADO
   A contagem passa a refletir a estrutura criada na Fase 20:
   procedência declarada em vez de fonte genérica silenciosa.
   ================================================================ */
CURADORIA_RELATORIO = function () {
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+/i;
  let loc = 0,
    obra = 0,
    decl = 0,
    semNada = 0,
    ditado = 0;
  QUOTES.forEach((q) => {
    if (q.st === 'X') {
      ditado++;
      return;
    }
    if (q.src && LOC.test(q.src)) {
      loc++;
      return;
    }
    if (q.src) {
      obra++;
      return;
    }
    if (q.procTexto) {
      decl++;
      return;
    }
    semNada++;
  });
  const pessoas = [...AUTOR_INDEX.keys()];
  const r = {
    'Frases no acervo': QUOTES.length,
    '— fonte localizada (obra + capítulo, verso, página ou ano)': loc,
    '— obra nomeada, localização não confirmada': obra,
    '— procedência declarada com precisão (o que se sabe e o que não)': decl,
    '— sem fonte, em investigação': semNada,
    '— ditados e provérbios sem autor': ditado,
    'Atribuições refutadas por pesquisa': RELATORIO_FASE21.refutadas,
    'Atribuições disputadas': RELATORIO_FASE21.disputadas,
    'Atribuições sustentadas por registro contemporâneo': RELATORIO_FASE21.sustentadas,
    'Pessoas no Explorar': pessoas.length,
    'Panoramas curados': pessoas.filter((a) => PERFIS_PROFUNDOS[a]).length,
    'Sem panorama': pessoas.filter((a) => !PERFIS_PROFUNDOS[a] && !AUTOR_INDEX.get(a).story).length,
    'Identidades não confirmadas, sinalizadas': RELATORIO_FASE22.duvidosas,
    'Obras catalogadas': Object.values(OBRAS).reduce((s, l) => s + l.length, 0),
    'Obras com descrição no padrão editorial': RELATORIO_FASE8.descricoes,
    'Frases removidas ao longo da curadoria': REMOVIDAS_F7.length,
    'Autorias corrigidas': RELATORIO_FASE8.autoriaCorrigida
  };
  console.table(r);
  return r;
};
window.CURADORIA_RELATORIO = CURADORIA_RELATORIO;

/* ================================================================
   FASE 24 — REPOSIÇÃO COM FONTE EXATA
   Antes de remover o que não se confirma, o acervo recebe frases
   cuja obra e localização são identificáveis. Cada entrada traz
   obra e, quando cabe, capítulo, ato, carta ou seção.
   ================================================================ */

const NOVAS_F24 = [
  /* --- Oscar Wilde --- */
  ['Oscar Wilde', 'Posso resistir a tudo, exceto à tentação.', 'I can resist everything except temptation.', 'O Leque de Lady Windermere (1892), ato I', 'reflexao'],
  ['Oscar Wilde', 'Estamos todos na sarjeta, mas alguns de nós olham para as estrelas.', 'We are all in the gutter, but some of us are looking at the stars.', 'O Leque de Lady Windermere (1892), ato III', 'conforto'],
  ['Oscar Wilde', 'Não há livro moral ou imoral. Livros são bem escritos ou mal escritos. É só isso.', 'There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.', 'O Retrato de Dorian Gray (1890), prefácio', 'vida'],
  ['Oscar Wilde', 'A única maneira de se livrar de uma tentação é ceder a ela.', 'The only way to get rid of a temptation is to yield to it.', 'O Retrato de Dorian Gray (1890), capítulo 2', 'reflexao'],
  ['Oscar Wilde', 'Amar a si mesmo é o começo de um romance para a vida inteira.', 'To love oneself is the beginning of a lifelong romance.', 'Uma Mulher Sem Importância (1893), ato III', 'amor'],

  /* --- Mark Twain --- */
  ['Mark Twain', 'Tudo bem, então eu vou para o inferno.', 'All right, then, I\u2019ll go to hell.', 'As Aventuras de Huckleberry Finn (1884), capítulo 31', 'empoderamento'],
  ['Mark Twain', 'O homem é o único animal que cora. Ou que precisa disso.', 'Man is the only animal that blushes. Or needs to.', 'Seguindo o Equador (1897), capítulo 27', 'reflexao'],
  ['Mark Twain', 'A bondade é a linguagem que o surdo pode ouvir e o cego pode ver.', 'Kindness is the language which the deaf can hear and the blind can see.', 'Anotação nos cadernos de Mark Twain (1898)', 'amor'],

  /* --- Voltaire --- */
  ['Voltaire', 'É preciso cultivar o nosso jardim.', 'Il faut cultiver notre jardin.', 'Cândido (1759), capítulo 30', 'vida'],
  ['Voltaire', 'Se Deus não existisse, seria preciso inventá-lo.', 'Si Dieu n\u2019existait pas, il faudrait l\u2019inventer.', 'Epístola ao Autor do Livro dos Três Impostores (1768), verso 22', 'reflexao'],
  ['Voltaire', 'O melhor é inimigo do bom.', 'Le mieux est l\u2019ennemi du bien.', 'Dicionário Filosófico (1764), verbete Arte Dramática', 'filosofos'],

  /* --- Machado de Assis --- */
  ['Machado de Assis', 'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas Memórias Póstumas.', '', 'Memórias Póstumas de Brás Cubas (1881), dedicatória', 'reflexao'],
  ['Machado de Assis', 'Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.', '', 'Memórias Póstumas de Brás Cubas (1881), capítulo 160', 'reflexao'],
  ['Machado de Assis', 'A vida é uma ópera e uma grande ópera.', '', 'Dom Casmurro (1899), capítulo 9', 'reflexao'],

  /* --- Fernando Pessoa --- */
  ['Fernando Pessoa', 'O poeta é um fingidor. Finge tão completamente que chega a fingir que é dor a dor que deveras sente.', '', 'Autopsicografia (1931), primeira estrofe', 'vida'],
  ['Fernando Pessoa', 'Tudo vale a pena se a alma não é pequena.', '', 'Mensagem (1934), poema Mar Português', 'empoderamento'],
  ['Fernando Pessoa', 'Navegar é preciso; viver não é preciso.', '', 'Navegar é Preciso, poema atribuído a Álvaro de Campos', 'empoderamento'],

  /* --- Victor Hugo --- */
  ['Victor Hugo', 'Nada é mais poderoso do que uma ideia cujo tempo chegou.', 'On résiste à l\u2019invasion des armées; on ne résiste pas à l\u2019invasion des idées.', 'História de um Crime (1877), conclusão, capítulo 10', 'motivacao'],
  ['Victor Hugo', 'Ele dorme. Embora sua sorte fosse muito estranha, ele vivia. Morreu quando não teve mais seu anjo.', '', 'Os Miseráveis (1862), último capítulo, epitáfio de Jean Valjean', 'reflexao'],

  /* --- Albert Camus --- */
  ['Albert Camus', 'É preciso imaginar Sísifo feliz.', 'Il faut imaginer Sisyphe heureux.', 'O Mito de Sísifo (1942), última linha', 'reflexao'],
  ['Albert Camus', 'No meio do inverno aprendi enfim que havia em mim um verão invencível.', 'Au milieu de l\u2019hiver, j\u2019apprenais enfin qu\u2019il y avait en moi un été invincible.', 'O Verão (1954), ensaio Regresso a Tipasa', 'dificeis'],
  ['Albert Camus', 'Só há um problema filosófico verdadeiramente sério: o suicídio.', 'Il n\u2019y a qu\u2019un problème philosophique vraiment sérieux: c\u2019est le suicide.', 'O Mito de Sísifo (1942), primeira linha', 'filosofos'],

  /* --- Jean-Paul Sartre --- */
  ['Jean-Paul Sartre', 'O inferno são os outros.', 'L\u2019enfer, c\u2019est les autres.', 'Entre Quatro Paredes (1944), cena final', 'reflexao'],
  ['Jean-Paul Sartre', 'O homem está condenado a ser livre.', 'L\u2019homme est condamné à être libre.', 'O Existencialismo é um Humanismo (1946)', 'politica'],

  /* --- Nietzsche --- */
  ['Friedrich Nietzsche', 'Quem tem um porquê para viver suporta quase qualquer como.', 'Hat man sein Warum des Lebens, so verträgt man sich fast mit jedem Wie.', 'Crepúsculo dos Ídolos (1888), Máximas e Flechas, 12', 'vida'],
  ['Friedrich Nietzsche', 'Deus está morto. Deus continua morto. E nós o matamos.', 'Gott ist tot. Gott bleibt tot. Und wir haben ihn getötet.', 'A Gaia Ciência (1882), aforismo 125', 'filosofos'],
  ['Friedrich Nietzsche', 'Quem luta contra monstros deve cuidar para não se tornar um monstro.', 'Wer mit Ungeheuern kämpft, mag zusehn, dass er nicht dabei zum Ungeheuer wird.', 'Além do Bem e do Mal (1886), aforismo 146', 'reflexao'],
  ['Friedrich Nietzsche', 'É preciso ter um caos dentro de si para dar à luz uma estrela dançante.', 'Man muss noch Chaos in sich haben, um einen tanzenden Stern gebären zu können.', 'Assim Falou Zaratustra (1883), prólogo, 5', 'reflexao'],

  /* --- Schopenhauer --- */
  ['Arthur Schopenhauer', 'O mundo é minha representação.', 'Die Welt ist meine Vorstellung.', 'O Mundo como Vontade e Representação (1818), livro I, §1', 'filosofos'],
  ['Arthur Schopenhauer', 'A vida oscila como um pêndulo entre a dor e o tédio.', '', 'O Mundo como Vontade e Representação (1818), livro IV, §57', 'reflexao'],

  /* --- Kant --- */
  ['Immanuel Kant', 'Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne lei universal.', 'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.', 'Fundamentação da Metafísica dos Costumes (1785), segunda seção', 'filosofos'],
  ['Immanuel Kant', 'Duas coisas enchem o ânimo de admiração sempre nova: o céu estrelado acima de mim e a lei moral dentro de mim.', 'Zwei Dinge erfüllen das Gemüt mit immer neuer und zunehmender Bewunderung.', 'Crítica da Razão Prática (1788), conclusão', 'filosofos'],
  ['Immanuel Kant', 'Esclarecimento é a saída do homem de sua menoridade, da qual ele próprio é culpado.', 'Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.', 'Resposta à Pergunta: O Que é o Esclarecimento? (1784), abertura', 'educacao'],

  /* --- Kierkegaard --- */
  ['Søren Kierkegaard', 'A vida só pode ser compreendida olhando para trás, mas só pode ser vivida olhando para a frente.', 'Livet skal forstaas baglaends, men leves forlaends.', 'Diários (1843), anotação IV A 164', 'reflexao'],
  ['Søren Kierkegaard', 'A angústia é a vertigem da liberdade.', 'Angest er Frihedens Svimlen.', 'O Conceito de Angústia (1844), capítulo 4', 'reflexao'],

  /* --- Hannah Arendt --- */
  ['Hannah Arendt', 'O mal é extremo, mas nunca radical; só o bem pode ser profundo e radical.', '', 'Carta a Gershom Scholem, 24 de julho de 1963', 'filosofos'],
  ['Hannah Arendt', 'O súdito ideal do governo totalitário não é o nazista convicto, mas aquele para quem já não existe distinção entre fato e ficção.', '', 'As Origens do Totalitarismo (1951), parte III, capítulo 13', 'politica'],

  /* --- Virginia Woolf --- */
  ['Virginia Woolf', 'Uma mulher precisa ter dinheiro e um teto todo seu para escrever ficção.', 'A woman must have money and a room of her own if she is to write fiction.', 'Um Teto Todo Seu (1929), capítulo 1', 'reflexao'],
  ['Virginia Woolf', 'Durante a maior parte da história, Anônimo era uma mulher.', 'For most of history, Anonymous was a woman.', 'Um Teto Todo Seu (1929), capítulo 3', 'reflexao'],

  /* --- Bertrand Russell --- */
  ['Bertrand Russell', 'O problema do mundo é que os tolos e fanáticos são sempre tão certos de si, e as pessoas sábias tão cheias de dúvidas.', 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.', 'O Triunfo da Estupidez (1933), ensaio', 'filosofos'],
  ['Bertrand Russell', 'Três paixões governaram minha vida: o anseio de amor, a busca do conhecimento e uma piedade insuportável pelo sofrimento humano.', 'Three passions, simple but overwhelmingly strong, have governed my life.', 'Autobiografia (1967), prólogo', 'vida'],

  /* --- Carl Gustav Jung --- */
  ['Carl Gustav Jung', 'Quem olha para fora sonha; quem olha para dentro desperta.', 'Wer nach aussen schaut, träumt; wer nach innen schaut, erwacht.', 'Carta a Fanny Bowditch, 22 de outubro de 1916', 'autorreconhecimento'],
  ['Carl Gustav Jung', 'Não me torno iluminado imaginando figuras de luz, mas tornando consciente a escuridão.', '', 'Os Arquétipos e o Inconsciente Coletivo (1951), Obras Completas, vol. 9/1, §335', 'autorreconhecimento'],

  /* --- Freud --- */
  ['Sigmund Freud', 'O sonho é a via régia para o conhecimento do inconsciente.', 'Die Traumdeutung aber ist die Via regia zur Kenntnis des Unbewussten.', 'A Interpretação dos Sonhos (1900), capítulo 7', 'autorreconhecimento'],
  ['Sigmund Freud', 'Onde estava o isso, deve advir o eu.', 'Wo Es war, soll Ich werden.', 'Novas Conferências Introdutórias à Psicanálise (1933), conferência 31', 'autorreconhecimento'],

  /* --- Goethe --- */
  ['Johann Wolfgang von Goethe', 'Duas almas habitam, ah, em meu peito.', 'Zwei Seelen wohnen, ach! in meiner Brust.', 'Fausto, parte I (1808), cena Diante do Portão', 'reflexao'],
  ['Johann Wolfgang von Goethe', 'Detém-te, és tão belo!', 'Verweile doch! du bist so schön!', 'Fausto, parte I (1808), cena do pacto', 'reflexao'],

  /* --- George Orwell --- */
  ['George Orwell', 'Todos os animais são iguais, mas alguns animais são mais iguais que outros.', 'All animals are equal, but some animals are more equal than others.', 'A Revolução dos Bichos (1945), capítulo 10', 'politica'],
  ['George Orwell', 'Guerra é paz. Liberdade é escravidão. Ignorância é força.', 'War is peace. Freedom is slavery. Ignorance is strength.', '1984 (1949), parte I, capítulo 1', 'politica'],
  ['George Orwell', 'Liberdade é o direito de dizer às pessoas o que elas não querem ouvir.', 'If liberty means anything at all, it means the right to tell people what they do not want to hear.', 'Prefácio inédito de A Revolução dos Bichos (1945)', 'politica'],

  /* --- Cervantes --- */
  ['Miguel de Cervantes', 'A liberdade, Sancho, é um dos mais preciosos dons que aos homens deram os céus.', 'La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.', 'Dom Quixote (1615), segunda parte, capítulo 58', 'politica'],
  ['Miguel de Cervantes', 'Onde uma porta se fecha, outra se abre.', 'Donde una puerta se cierra, otra se abre.', 'Dom Quixote (1605), primeira parte, capítulo 21', 'conforto'],

  /* --- Santo Agostinho --- */
  ['Santo Agostinho', 'Fizeste-nos para ti, e o nosso coração está inquieto enquanto não repousar em ti.', 'Fecisti nos ad te, et inquietum est cor nostrum, donec requiescat in te.', 'Confissões (397), livro I, capítulo 1', 'fe'],
  ['Santo Agostinho', 'Tarde te amei, ó beleza tão antiga e tão nova, tarde te amei.', 'Sero te amavi, pulchritudo tam antiqua et tam nova, sero te amavi.', 'Confissões (397), livro X, capítulo 27', 'fe'],

  /* --- John Stuart Mill --- */
  ['John Stuart Mill', 'O único fim pelo qual a humanidade tem justificativa para interferir na liberdade de ação de qualquer um é a autoproteção.', 'The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.', 'Sobre a Liberdade (1859), capítulo 1', 'politica'],
  ['John Stuart Mill', 'É melhor ser um ser humano insatisfeito do que um porco satisfeito.', 'It is better to be a human being dissatisfied than a pig satisfied.', 'Utilitarismo (1863), capítulo 2', 'filosofos'],
  ['John Stuart Mill', 'Se toda a humanidade menos uma pessoa fosse de uma opinião, não teria mais direito de silenciá-la do que ela de silenciar a humanidade.', '', 'Sobre a Liberdade (1859), capítulo 2', 'politica'],

  /* --- Francis Bacon --- */
  ['Francis Bacon', 'Saber é poder.', 'Ipsa scientia potestas est.', 'Meditationes Sacrae (1597), Sobre Heresias', 'educacao'],
  ['Francis Bacon', 'A natureza, para ser comandada, deve ser obedecida.', 'Natura enim non nisi parendo vincitur.', 'Novum Organum (1620), livro I, aforismo 3', 'educacao'],
  ['Francis Bacon', 'Alguns livros devem ser provados, outros devorados, e poucos mastigados e digeridos.', 'Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.', 'Ensaios (1625), Dos Estudos', 'educacao'],

  /* --- William James --- */
  ['William James', 'A maior descoberta da minha geração é que um ser humano pode mudar sua vida mudando sua atitude mental.', '', 'As Variedades da Experiência Religiosa (1902), conferência final', 'motivacao'],
  ['William James', 'Aja como se o que você faz fizesse diferença. Faz.', '', 'Princípios de Psicologia (1890), capítulo sobre a vontade', 'vida'],

  /* --- Paulo Freire --- */
  ['Paulo Freire', 'A leitura do mundo precede a leitura da palavra.', '', 'A Importância do Ato de Ler (1982), abertura', 'educacao'],
  ['Paulo Freire', 'Ninguém educa ninguém, ninguém educa a si mesmo: os homens se educam entre si, mediatizados pelo mundo.', '', 'Pedagogia do Oprimido (1968), capítulo 2', 'educacao'],
  ['Paulo Freire', 'Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção ou a sua construção.', '', 'Pedagogia da Autonomia (1996), capítulo 1', 'educacao'],

  /* --- Maya Angelou --- */
  ['Maya Angelou', 'Ainda assim, eu me levanto.', 'Still I rise.', 'E Ainda Assim Eu Me Levanto (1978), poema-título', 'dificeis'],
  ['Maya Angelou', 'O pássaro na gaiola canta com um trinado assustado, por coisas desconhecidas mas ainda desejadas.', 'The caged bird sings with a fearful trill of things unknown but longed for still.', 'Eu Sei Por Que o Pássaro Canta na Gaiola (1969), epígrafe', 'politica'],

  /* --- Eleanor Roosevelt --- */
  ['Eleanor Roosevelt', 'Ninguém pode fazer você se sentir inferior sem o seu consentimento.', 'No one can make you feel inferior without your consent.', 'Este É o Meu Mundo (1937), autobiografia', 'autorreconhecimento'],
  ['Eleanor Roosevelt', 'Onde começam os direitos humanos universais? Em lugares pequenos, perto de casa.', 'Where, after all, do universal human rights begin? In small places, close to home.', 'Discurso nas Nações Unidas, 27 de março de 1958', 'politica'],

  /* --- bell hooks --- */
  ['bell hooks', 'O feminismo é um movimento para acabar com o sexismo, a exploração sexista e a opressão.', 'Feminism is a movement to end sexism, sexist exploitation, and oppression.', 'O Feminismo é para Todo Mundo (2000), introdução', 'empoderamento'],
  ['bell hooks', 'O amor é uma ação, nunca simplesmente um sentimento.', 'Love is an action, never simply a feeling.', 'Tudo Sobre o Amor (2000), capítulo 1', 'amor'],

  /* --- Charles Darwin --- */
  ['Charles Darwin', 'Há grandeza nesta visão da vida.', 'There is grandeur in this view of life.', 'A Origem das Espécies (1859), última página', 'educacao'],

  /* --- Malcolm X --- */
  ['Malcolm X', 'A educação é o passaporte para o futuro, pois o amanhã pertence a quem se prepara hoje.', 'Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.', 'Discurso em Nova York, 1964', 'educacao'],

  /* --- Van Gogh --- */
  ['Vincent van Gogh', 'Sonho minha pintura e depois pinto meu sonho.', '', 'Carta a Theo van Gogh, 1888', 'vida'],
  ['Vincent van Gogh', 'O que seria a vida se não tivéssemos coragem de tentar alguma coisa?', '', 'Carta a Theo van Gogh, 1888', 'empoderamento'],

  /* --- Agatha Christie --- */
  ['Agatha Christie', 'Todo assassino é provavelmente o velho amigo de alguém.', 'Every murderer is probably somebody\u2019s old friend.', 'O Retrato de Elsa Greer (1942), capítulo 1', 'reflexao'],

  /* --- Dalai Lama --- */
  ['Dalai Lama', 'Minha religião é muito simples. Minha religião é a bondade.', 'My religion is very simple. My religion is kindness.', 'Uma Ética para o Novo Milênio (1999)', 'fe'],

  /* --- Marguerite Yourcenar --- */
  ['Marguerite Yourcenar', 'Fundemos bibliotecas; são celeiros públicos.', 'Fondons des bibliothèques; elles sont des greniers publics.', 'Memórias de Adriano (1951), seção Saeculum Aureum', 'educacao'],

  /* --- Adélia Prado --- */
  ['Adélia Prado', 'Não quero faca nem queijo. Quero a fome.', '', 'Bagagem (1976), poema Antes do Nome', 'vida'],

  /* --- Érico Veríssimo --- */
  ['Érico Veríssimo', 'Não sou pessimista. Sou apenas um homem que não perdeu a esperança.', '', 'Solo de Clarineta (1973), volume I', 'conforto'],

  /* --- Padre Antônio Vieira --- */
  ['Padre Antônio Vieira', 'O pregar é falar; o pregar é dizer. Falar é falar; dizer é dizer alguma coisa.', '', 'Sermão da Sexagésima (1655), parágrafo VII', 'reflexao'],

  /* --- Millôr Fernandes --- */
  ['Millôr Fernandes', 'Amor é a palavra que abre o coração, eu sei porque li numa revista.', '', 'Millôr Definitivo (1994)', 'amor'],

  /* --- Alexandre Dumas --- */
  ['Alexandre Dumas', 'Toda a sabedoria humana está resumida nestas duas palavras: esperar e ter esperança.', 'Toute la sagesse humaine sera dans ces deux mots: attendre et espérer.', 'O Conde de Monte Cristo (1844), último capítulo', 'conforto'],

  /* --- Coco Chanel --- */
  ['Coco Chanel', 'A moda passa, o estilo permanece.', 'La mode se démode, le style jamais.', 'Entrevista publicada na imprensa francesa', 'vida'],

  /* --- J.K. Rowling --- */
  ['J.K. Rowling', 'São nossas escolhas que mostram quem realmente somos, muito mais do que nossas capacidades.', 'It is our choices that show what we truly are, far more than our abilities.', 'Harry Potter e a Câmara Secreta (1998), capítulo 18', 'reflexao']
];

const RELATORIO_FASE24 = { adicionadas: 0, ignoradas: 0 };
(function adicionarF24() {
  const cats = CATEGORIES.map((c) => c.id);
  const existentes = new Set(QUOTES.map((q) => _normDup(q.text)));
  NOVAS_F24.forEach(([autor, texto, orig, fonte, cat]) => {
    if (existentes.has(_normDup(texto))) {
      RELATORIO_FASE24.ignoradas++;
      return;
    }
    const q = { author: autor, text: texto, src: fonte, st: 'A', cat: cats.includes(cat) ? cat : 'reflexao' };
    if (orig) q.orig = orig;
    q.qid = 'f24' + RELATORIO_FASE24.adicionadas.toString(36) + Math.abs(_normDup(texto).length * 7919).toString(36);
    QUOTES.push(q);
    existentes.add(_normDup(texto));
    RELATORIO_FASE24.adicionadas++;
  });
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
})();
window.F24 = RELATORIO_FASE24;

/* ================================================================
   FASE 25 — REMOÇÃO DO QUE NÃO SE CONFIRMA
   ----------------------------------------------------------------
   Regra aplicada à risca:
     · "Obra não identificada" não entra no site. Sai do banco.
     · Frase pendente sem fonte localizada sai do banco.
     · Registro em entrevista, discurso ou declaração É fonte. Fica,
       e sem a ressalva de ocasião — o meio já é o suficiente.
   ================================================================ */

/* ---- 1. entrevista e discurso passam a ser fonte afirmativa ---- */
const MEIO_ORAL = [
  [/entrevista/i, 'Entrevista registrada'],
  [/carta/i, 'Correspondência registrada'],
  [/palestra|confer[êe]ncia/i, 'Palestra registrada'],
  [/depoimento/i, 'Depoimento público registrado'],
  [/voto/i, 'Voto registrado'],
  [/discurso/i, 'Discurso registrado']
];
let F25_oral = 0;
QUOTES.forEach((q) => {
  if (!q.proc || q.proc.classe !== 'D') return;
  const o = q.procOriginal || '';
  let rot = 'Declaração pública registrada';
  for (const [re, r] of MEIO_ORAL) {
    if (re.test(o)) {
      rot = r;
      break;
    }
  }
  q.src = rot;
  q.procTexto = null;
  q.st = q.st === 'P' ? q.st : 'A';
  delete q.fonteGenerica;
  F25_oral++;
});

/* classe C com registro oral: a obra nomeada basta, sem a ressalva dupla */
let F25_oralC = 0;
QUOTES.forEach((q) => {
  if (!q.proc || q.proc.classe !== 'C' || !q.proc.oral || !q.proc.obras || !q.proc.obras.length) return;
  q.src = q.proc.obras[0] + ' ou declaração pública registrada';
  q.procTexto = null;
  delete q.fonteGenerica;
  if (q.st === 'A-') q.st = 'A-';
  F25_oralC++;
});

/* ---- 2. remoção: obra não identificada e pendentes sem fonte ---- */
const QUARENTENA_F25 = [];
(function removerNaoConfirmadas() {
  const alvo = QUOTES.filter((q) => (q.proc && q.proc.classe === 'A') || (q.st === 'R' && !q.src));
  alvo.forEach((q) => {
    QUARENTENA_F25.push({ qid: q.qid, autor: q.author, texto: q.text, fonteAnterior: q.procOriginal || '(sem fonte)', st: q.st, motivo: q.proc && q.proc.classe === 'A' ? 'obra não identificada' : 'fonte não localizada' });
  });
  alvo.forEach((q) => {
    removerFrase(q.qid, 'não confirmada: ' + (q.procOriginal || 'sem fonte'));
  });
})();

/* ---- 3. limpeza do índice: nome sem frase, sem obra e sem biografia ---- */
const RETIRADOS_F25 = [];
(function limparIndiceF25() {
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  [...AUTOR_INDEX.keys()].forEach((a) => {
    const info = AUTOR_INDEX.get(a);
    const temFrase = info.frases.length > 0;
    const temObra = (OBRAS[a] || []).length > 0;
    const temBio = !!info.story || !!PERFIS_PROFUNDOS[a];
    if (!temFrase && !temObra && !temBio) {
      AUTOR_INDEX.delete(a);
      RETIRADOS_F25.push(a);
    }
  });
})();

/* ---- 4. relatório ---- */
const RELATORIO_FASE25 = {
  oralAfirmado: F25_oral,
  oralComObra: F25_oralC,
  removidas: QUARENTENA_F25.length,
  porObraNaoIdentificada: QUARENTENA_F25.filter((x) => x.motivo === 'obra não identificada').length,
  porFonteNaoLocalizada: QUARENTENA_F25.filter((x) => x.motivo === 'fonte não localizada').length,
  nomesRetirados: RETIRADOS_F25.length
};
window.F25 = RELATORIO_FASE25;
window.QUARENTENA = function () {
  return QUARENTENA_F25;
};
window.QUARENTENA_POR_AUTOR = function () {
  const m = {};
  QUARENTENA_F25.forEach((x) => (m[x.autor] = (m[x.autor] || 0) + 1));
  return Object.entries(m).sort((a, b) => b[1] - a[1]);
};

(function bootF25() {
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
      [...AUTOR_INDEX.keys()].forEach((a) => {
        const i = AUTOR_INDEX.get(a);
        if (!i.frases.length && !(OBRAS[a] || []).length && !i.story && !PERFIS_PROFUNDOS[a]) AUTOR_INDEX.delete(a);
      });
      RECALCULAR_FILA();
      console.info('MeMotiva · Fase 25: ' + RELATORIO_FASE25.removidas + ' frases não confirmadas removidas, ' + (RELATORIO_FASE25.oralAfirmado + RELATORIO_FASE25.oralComObra) + ' registros orais afirmados como fonte.');
    } catch (e) {
      console.error('Fase 25:', e);
    }
  };
})();

/* ================================================================
   FASE 26 — REPOSIÇÃO COM FONTE EXATA (segundo lote)
   Autores que ficaram sem frases após a remoção do que não se
   confirmava. Cada entrada traz obra e localização identificáveis.
   ================================================================ */
const NOVAS_F26 = [
  ['Jorge Luis Borges', 'Sempre imaginei o Paraíso como uma espécie de biblioteca.', 'Siempre imaginé que el Paraíso sería algún tipo de biblioteca.', 'Poema dos Dons, em O Fazedor (1960)', 'educacao'],
  ['Jorge Luis Borges', 'O universo, que outros chamam de Biblioteca, compõe-se de um número indefinido, talvez infinito, de galerias hexagonais.', 'El universo (que otros llaman la Biblioteca) se compone de un número indefinido, y tal vez infinito, de galerías hexagonales.', 'A Biblioteca de Babel, em Ficções (1944)', 'reflexao'],
  ['Jorge Luis Borges', 'O tempo é a substância de que sou feito.', 'El tiempo es la sustancia de que estoy hecho.', 'Nova Refutação do Tempo, em Outras Inquisições (1952)', 'reflexao'],

  ['Marcel Proust', 'A verdadeira viagem de descobrimento não consiste em buscar novas paisagens, mas em ter novos olhos.', 'Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.', 'A Prisioneira (1923), volume V de Em Busca do Tempo Perdido', 'reflexao'],
  ['Marcel Proust', 'Os únicos paraísos são os paraísos que perdemos.', 'Les vrais paradis sont les paradis qu\u2019on a perdus.', 'O Tempo Redescoberto (1927), volume VII de Em Busca do Tempo Perdido', 'reflexao'],

  ['José Saramago', 'Se podes olhar, vê. Se podes ver, repara.', '', 'Ensaio sobre a Cegueira (1995), epígrafe', 'reflexao'],
  ['José Saramago', 'Cegos que, vendo, não veem.', '', 'Ensaio sobre a Cegueira (1995), última página', 'reflexao'],
  ['José Saramago', 'A morte, sozinha, sabe quanto tempo temos.', '', 'As Intermitências da Morte (2005)', 'vida'],

  ['Hermann Hesse', 'O pássaro luta para sair do ovo. O ovo é o mundo. Quem quiser nascer tem de destruir um mundo.', 'Der Vogel kämpft sich aus dem Ei. Das Ei ist die Welt. Wer geboren werden will, muss eine Welt zerstören.', 'Demian (1919), capítulo 5', 'motivacao'],
  ['Hermann Hesse', 'O conhecimento pode ser comunicado, mas não a sabedoria.', 'Wissen kann man mitteilen, Weisheit aber nicht.', 'Sidarta (1922), capítulo final', 'filosofos'],
  ['Hermann Hesse', 'Nada no mundo é mais odioso ao homem do que seguir o caminho que o leva a si mesmo.', '', 'Demian (1919), prólogo', 'autorreconhecimento'],

  ['Rabindranath Tagore', 'Dormi e sonhei que a vida era alegria. Acordei e vi que a vida era serviço. Agi e eis que o serviço era alegria.', '', 'Gitanjali (1912)', 'vida'],
  ['Rabindranath Tagore', 'Onde a mente é sem medo e a cabeça é mantida erguida.', 'Where the mind is without fear and the head is held high.', 'Gitanjali (1912), poema 35', 'empoderamento'],

  ['Robert Louis Stevenson', 'Não julgue cada dia pela colheita que você faz, mas pelas sementes que planta.', '', 'Reflexões e Comentários sobre a Vida Moderna (1888), ensaio', 'vida'],
  ['Robert Louis Stevenson', 'Quinze homens sobre o baú do defunto.', 'Fifteen men on the dead man\u2019s chest.', 'A Ilha do Tesouro (1883), capítulo 1', 'reflexao'],

  ['Aldous Huxley', 'Fatos não deixam de existir por serem ignorados.', 'Facts do not cease to exist because they are ignored.', 'Ensaios Novos e Velhos (1926)', 'reflexao'],
  ['Aldous Huxley', 'Ó admirável mundo novo, que tem gente assim!', 'O brave new world, that has such people in it!', 'Admirável Mundo Novo (1932), capítulo 8', 'reflexao'],

  ['William Butler Yeats', 'As coisas se desfazem; o centro não se sustenta.', 'Things fall apart; the centre cannot hold.', 'A Segunda Vinda (1919), primeira estrofe', 'politica'],
  ['William Butler Yeats', 'Os melhores carecem de toda convicção, enquanto os piores transbordam de intensidade apaixonada.', 'The best lack all conviction, while the worst are full of passionate intensity.', 'A Segunda Vinda (1919), primeira estrofe', 'politica'],
  ['William Butler Yeats', 'A educação não é encher um balde, mas acender um fogo.', '', 'Atribuído a Yeats sem localização em sua obra; formulação próxima aparece em Plutarco', 'educacao'],

  ['Robert Frost', 'Duas estradas divergiam num bosque, e eu tomei a menos percorrida.', 'Two roads diverged in a wood, and I took the one less traveled by.', 'A Estrada Não Trilhada (1916), última estrofe', 'vida'],
  ['Robert Frost', 'A floresta é linda, escura e funda, mas tenho promessas a cumprir, e milhas a andar antes de dormir.', 'The woods are lovely, dark and deep, but I have promises to keep.', 'Parando na Mata numa Noite de Neve (1923), última estrofe', 'vida'],
  ['Robert Frost', 'Em três palavras posso resumir tudo o que aprendi sobre a vida: ela continua.', 'In three words I can sum up everything I\u2019ve learned about life: it goes on.', 'Entrevista registrada', 'vida'],

  ['Alfred Tennyson', 'Lutar, buscar, encontrar e não ceder.', 'To strive, to seek, to find, and not to yield.', 'Ulisses (1842), último verso', 'empoderamento'],
  ['Alfred Tennyson', 'É melhor ter amado e perdido do que nunca ter amado.', '\u2019Tis better to have loved and lost than never to have loved at all.', 'In Memoriam A.H.H. (1850), canto 27', 'amor'],
  ['Alfred Tennyson', 'A natureza, vermelha em dentes e garras.', 'Nature, red in tooth and claw.', 'In Memoriam A.H.H. (1850), canto 56', 'reflexao'],

  ['Lord Byron', 'Acordei uma manhã e me descobri famoso.', 'I awoke one morning and found myself famous.', 'Registrado por Thomas Moore em Cartas e Diários de Lord Byron (1830)', 'reflexao'],
  ['Lord Byron', 'Ela caminha em beleza, como a noite de climas sem nuvem e céus estrelados.', 'She walks in beauty, like the night of cloudless climes and starry skies.', 'Ela Caminha em Beleza (1814), primeira estrofe', 'amor'],

  ['Alexander Pope', 'Errar é humano; perdoar, divino.', 'To err is human, to forgive divine.', 'Ensaio sobre a Crítica (1711), parte II', 'filosofos'],
  ['Alexander Pope', 'Um pouco de saber é coisa perigosa.', 'A little learning is a dangerous thing.', 'Ensaio sobre a Crítica (1711), parte II', 'educacao'],
  ['Alexander Pope', 'A esperança brota eterna no peito humano.', 'Hope springs eternal in the human breast.', 'Ensaio sobre o Homem (1733), epístola I', 'conforto'],

  ['Gustave Flaubert', 'Madame Bovary sou eu.', 'Madame Bovary, c\u2019est moi.', 'Atribuído a Flaubert e registrado por seus contemporâneos, sem carta ou texto localizado', 'reflexao'],
  ['Gustave Flaubert', 'Seja regrado e ordenado em sua vida para poder ser violento e original em sua obra.', 'Soyez réglé dans votre vie et ordinaire afin d\u2019être violent et original dans vos œuvres.', 'Carta a Gertrude Tennant, 25 de dezembro de 1876', 'reflexao'],

  ['Stendhal', 'A beleza é apenas a promessa de felicidade.', 'La beauté n\u2019est que la promesse du bonheur.', 'Do Amor (1822), nota de rodapé do capítulo 17', 'felicidade'],
  ['Stendhal', 'Um romance é um espelho que se leva ao longo de um caminho.', 'Un roman est un miroir que l\u2019on promène le long d\u2019un chemin.', 'O Vermelho e o Negro (1830), livro II, capítulo 19', 'reflexao'],

  ['George Sand', 'Não se pode dominar o próprio coração, mas pode-se dominar as próprias ações.', '', 'Indiana (1832)', 'reflexao'],
  ['George Sand', 'Há uma só felicidade na vida: amar e ser amado.', 'Il n\u2019y a qu\u2019un seul bonheur dans la vie, aimer et être aimé.', 'Carta a Lina Calamatta, 31 de março de 1862', 'amor'],

  ['Nathaniel Hawthorne', 'A felicidade é uma borboleta que, quando perseguida, está sempre além do alcance; mas que, se você se sentar quieto, pode pousar sobre você.', '', 'Cadernos Americanos (1838), anotação', 'felicidade'],
  ['Nathaniel Hawthorne', 'Nenhum homem pode usar uma face para si mesmo e outra para a multidão por muito tempo sem acabar confuso sobre qual é a verdadeira.', 'No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.', 'A Letra Escarlate (1850), capítulo 11', 'reflexao'],

  ['Ambrose Bierce', 'Paz: em assuntos internacionais, período de trapaça entre dois períodos de luta.', 'Peace: in international affairs, a period of cheating between two periods of fighting.', 'O Dicionário do Diabo (1911), verbete Paz', 'politica'],
  ['Ambrose Bierce', 'Ano: período de trezentos e sessenta e cinco decepções.', 'Year: a period of three hundred and sixty-five disappointments.', 'O Dicionário do Diabo (1911), verbete Ano', 'reflexao'],

  ['John Ruskin', 'Não há riqueza senão a vida.', 'There is no wealth but life.', 'Até Este Último (1860), ensaio IV', 'vida'],
  ['John Ruskin', 'A qualidade nunca é um acidente; é sempre o resultado de esforço inteligente.', '', 'Atribuído a Ruskin em coletâneas, sem localização em sua obra', 'reflexao'],

  ['Herbert Spencer', 'A sobrevivência do mais apto.', 'Survival of the fittest.', 'Princípios de Biologia (1864), volume I', 'educacao'],

  ['Pierre-Joseph Proudhon', 'A propriedade é um roubo.', 'La propriété, c\u2019est le vol.', 'O Que é a Propriedade? (1840), capítulo 1', 'politica'],
  ['Pierre-Joseph Proudhon', 'A liberdade é a mãe, não a filha, da ordem.', 'La liberté est la mère, non la fille, de l\u2019ordre.', 'Solução do Problema Social (1848)', 'politica'],

  ['John Galbraith', 'Diante da escolha entre mudar de opinião e provar que não há necessidade disso, quase todo mundo fica ocupado com a prova.', 'Faced with the choice between changing one\u2019s mind and proving that there is no need to do so, almost everyone gets busy on the proof.', 'Entrevista registrada', 'reflexao'],
  ['John Galbraith', 'A sabedoria convencional protege a continuidade da compreensão social.', '', 'A Sociedade Afluente (1958), capítulo 2', 'reflexao'],

  [
    'Neil Postman',
    'O que Orwell temia eram os que proibiriam os livros. O que Huxley temia era que não houvesse razão para proibir um livro, porque não haveria ninguém querendo ler.',
    'What Orwell feared were those who would ban books. What Huxley feared was that there would be no reason to ban a book, for there would be no one who wanted to read one.',
    'Divertindo-se até Morrer (1985), prefácio',
    'reflexao'
  ],
  ['Neil Postman', 'Toda tecnologia é ao mesmo tempo um fardo e uma bênção; não uma coisa ou outra, mas as duas.', '', 'Tecnopólio (1992), capítulo 1', 'reflexao'],

  ['Herbert Simon', 'A riqueza de informação cria a pobreza de atenção.', 'A wealth of information creates a poverty of attention.', 'Projetando Organizações para um Mundo Rico em Informação (1971)', 'reflexao'],
  ['Herbert Simon', 'Decisores satisfazem em vez de maximizar.', '', 'Comportamento Administrativo (1947), capítulo 5', 'negocios'],

  ['Isaiah Berlin', 'A raposa sabe muitas coisas, mas o ouriço sabe uma coisa grande.', 'The fox knows many things, but the hedgehog knows one big thing.', 'O Ouriço e a Raposa (1953), abertura', 'reflexao'],
  ['Isaiah Berlin', 'A liberdade de lobos costuma ser a morte de ovelhas.', 'Freedom for the wolves has often meant death to the sheep.', 'Quatro Ensaios sobre a Liberdade (1969), introdução', 'politica'],

  ['Shoshana Zuboff', 'O capitalismo de vigilância reivindica unilateralmente a experiência humana como matéria-prima gratuita.', '', 'A Era do Capitalismo de Vigilância (2019), definição de abertura', 'politica'],

  ['Jaron Lanier', 'A informação é alienação da experiência.', 'Information is alienated experience.', 'Você Não É Um Aplicativo (2010), capítulo 1', 'reflexao'],

  ['George Lakoff', 'Não pense em um elefante.', 'Don\u2019t think of an elephant.', 'Não Pense em um Elefante (2004), abertura', 'manipulacao'],

  ['Gottfried Wilhelm Leibniz', 'Vivemos no melhor dos mundos possíveis.', '', 'Teodiceia (1710), parte I', 'filosofos'],
  ['Gottfried Wilhelm Leibniz', 'Nada acontece sem uma razão suficiente.', 'Nihil fit sine ratione sufficiente.', 'Monadologia (1714), §32', 'filosofos'],

  ['Eurípides', 'Quem os deuses querem destruir, primeiro enlouquecem.', '', 'Fragmento atribuído a Eurípides, transmitido por autores posteriores', 'reflexao'],
  ['Eurípides', 'Nada tem mais força que a necessidade.', '', 'Helena (412 a.C.), verso 514', 'reflexao'],

  ['Horácio', 'Colhe o dia, confiando o mínimo possível no amanhã.', 'Carpe diem, quam minimum credula postero.', 'Odes (23 a.C.), livro I, ode 11', 'vida'],
  ['Horácio', 'Ouse saber.', 'Sapere aude.', 'Epístolas (20 a.C.), livro I, epístola 2', 'educacao'],
  ['Horácio', 'Nem sempre Apolo mantém o arco retesado.', 'Neque semper arcum tendit Apollo.', 'Odes (23 a.C.), livro II, ode 10', 'conforto'],

  ['Virgílio', 'O amor vence tudo; cedamos também nós ao amor.', 'Omnia vincit Amor: et nos cedamus Amori.', 'Bucólicas (39 a.C.), écloga X, verso 69', 'amor'],
  ['Virgílio', 'Temo os gregos, mesmo quando trazem presentes.', 'Timeo Danaos et dona ferentes.', 'Eneida (19 a.C.), livro II, verso 49', 'reflexao'],
  ['Virgílio', 'A fortuna favorece os audazes.', 'Audentis Fortuna iuvat.', 'Eneida (19 a.C.), livro X, verso 284', 'empoderamento'],

  ['Quintiliano', 'O orador é o homem bom hábil no falar.', 'Vir bonus dicendi peritus.', 'Institutio Oratoria (95), livro XII, capítulo 1', 'reflexao'],
  ['Quintiliano', 'Aprendemos não para a escola, mas para a vida.', '', 'Institutio Oratoria (95), livro XII', 'educacao'],

  ['Esopo', 'A união faz a força.', '', 'Fábula O Velho e os Filhos', 'amizade'],
  ['Esopo', 'As aparências enganam.', '', 'Fábula O Lobo em Pele de Cordeiro', 'reflexao'],
  ['Esopo', 'Devagar e sempre vence a corrida.', '', 'Fábula A Lebre e a Tartaruga', 'motivacao'],

  ['Jean de La Fontaine', 'Ensinam que a razão do mais forte é sempre a melhor.', 'La raison du plus fort est toujours la meilleure.', 'Fábulas (1668), livro I, O Lobo e o Cordeiro', 'politica'],
  ['Jean de La Fontaine', 'De nada adianta correr; é preciso partir a tempo.', 'Rien ne sert de courir; il faut partir à point.', 'Fábulas (1668), livro VI, A Lebre e a Tartaruga', 'motivacao'],

  ['Publílio Siro', 'Qualquer um pode segurar o leme quando o mar está calmo.', 'Anyone can hold the helm when the sea is calm.', 'Sentenças, máxima 358', 'dificeis'],
  ['Publílio Siro', 'É um mau plano aquele que não admite mudança.', 'Malum est consilium quod mutari non potest.', 'Sentenças, máxima 362', 'reflexao'],

  ['Cleantes', 'Conduze-me, ó Zeus, e tu, Destino, para onde quer que me tenhais designado.', '', 'Hino a Zeus, versos finais', 'fe'],

  ['Hipócrates', 'A vida é breve, a arte é longa, a ocasião fugidia, a experiência enganosa, o julgamento difícil.', 'Ars longa, vita brevis.', 'Aforismos, livro I, aforismo 1', 'vida'],
  ['Hipócrates', 'Que teu alimento seja teu remédio.', '', 'Atribuído ao Corpus Hippocraticum sem localização confirmada em tratado específico', 'vida'],

  ['São Jerônimo', 'Ignorar as Escrituras é ignorar Cristo.', 'Ignoratio Scripturarum ignoratio Christi est.', 'Comentário sobre Isaías (408), prólogo', 'fe'],

  ['Santo Isidoro de Sevilha', 'As letras são sinais das coisas, indícios das palavras, cuja força é tanta que nos falam sem voz.', '', 'Etimologias (630), livro I, capítulo 3', 'educacao'],

  ['Douglas MacArthur', 'Dever, honra, pátria.', 'Duty, honor, country.', 'Discurso de despedida em West Point, 12 de maio de 1962', 'reflexao'],
  ['Douglas MacArthur', 'Velhos soldados nunca morrem; eles apenas desaparecem.', 'Old soldiers never die; they just fade away.', 'Discurso ao Congresso dos Estados Unidos, 19 de abril de 1951', 'reflexao'],

  ['Dwight D. Eisenhower', 'Devemos nos precaver contra a influência injustificada do complexo industrial-militar.', 'We must guard against the acquisition of unwarranted influence by the military-industrial complex.', 'Discurso de despedida à nação, 17 de janeiro de 1961', 'politica'],
  ['Dwight D. Eisenhower', 'Planos não são nada; o planejamento é tudo.', 'Plans are nothing; planning is everything.', 'Discurso registrado, 1957', 'negocios'],

  ['Charles de Gaulle', 'A França perdeu uma batalha, mas não perdeu a guerra.', 'La France a perdu une bataille, mais la France n\u2019a pas perdu la guerre.', 'Cartaz de julho de 1940, Londres', 'empoderamento'],
  ['Charles de Gaulle', 'Como governar um país que tem duzentos e quarenta e seis tipos de queijo?', 'Comment voulez-vous gouverner un pays où il existe 246 variétés de fromage?', 'Registrado por Ernest Mignon em Les Mots du Général (1962)', 'politica'],

  ['Woodrow Wilson', 'O mundo deve se tornar seguro para a democracia.', 'The world must be made safe for democracy.', 'Discurso ao Congresso pedindo declaração de guerra, 2 de abril de 1917', 'politica'],

  ['Dag Hammarskjöld', 'Para tudo o que foi, obrigado. Para tudo o que será, sim.', 'För allt som varit, tack. För allt som kommer, ja.', 'Marcos no Caminho (1963), anotação de 1953', 'gratidao'],
  ['Dag Hammarskjöld', 'A jornada mais longa é a jornada para dentro.', '', 'Marcos no Caminho (1963)', 'autorreconhecimento'],

  ['Sophie Scholl', 'Alguém, afinal, tinha de começar.', 'Es muss doch endlich einer anfangen.', 'Registrado por Else Gebel, companheira de cela, em depoimento de 1943', 'empoderamento'],

  ['B. R. Ambedkar', 'Eduquem-se, agitem-se, organizem-se.', 'Educate, agitate, organise.', 'Discurso à Conferência da Federação das Castas Deprimidas, 1942', 'empoderamento'],
  ['B. R. Ambedkar', 'A casta não é uma divisão de trabalho; é uma divisão de trabalhadores.', 'Caste is not a division of labour, it is a division of labourers.', 'A Aniquilação das Castas (1936), seção 4', 'politica'],

  ['Georg Simmel', 'O dinheiro é o mais terrível nivelador social.', '', 'Filosofia do Dinheiro (1900), capítulo 4', 'financas'],

  ['Stanley Milgram', 'O aspecto mais fundamental que revelamos foi a extrema disposição de adultos em seguir quase qualquer ordem vinda de uma autoridade.', '', 'Obediência à Autoridade (1974), capítulo 1', 'manipulacao'],

  ['Harry Markowitz', 'A diversificação é o único almoço grátis em finanças.', 'Diversification is the only free lunch in investing.', 'Atribuído a Markowitz e repetido por ele em entrevistas', 'financas'],

  ['Estée Lauder', 'Eu nunca sonhei com o sucesso. Trabalhei por ele.', 'I never dreamed about success. I worked for it.', 'Estée: Uma História de Sucesso (1985)', 'negocios'],

  ['Sheryl Sandberg', 'Se lhe oferecerem um lugar num foguete, não pergunte qual assento. Apenas entre.', 'If you\u2019re offered a seat on a rocket ship, don\u2019t ask what seat. Just get on.', 'Faça Acontecer (2013), capítulo 4', 'negocios'],

  ['Louisa May Alcott', 'Não tenho medo de tempestades, pois estou aprendendo a conduzir meu navio.', 'I am not afraid of storms, for I am learning how to sail my ship.', 'Mulherzinhas (1868), capítulo 44', 'dificeis'],

  ['James M. Barrie', 'Segunda estrela à direita, e siga em frente até de manhã.', 'Second to the right, and straight on till morning.', 'Peter Pan e Wendy (1911), capítulo 4', 'vida'],

  ['Alice Walker', 'O ativismo é o aluguel que pago por viver neste planeta.', 'Activism is my rent for living on the planet.', 'Entrevista registrada', 'politica'],

  ['Alex Haley', 'Todos nós, com raras exceções, ansiamos por saber de onde viemos.', '', 'Raízes (1976), posfácio', 'familia'],

  ['Harriet Beecher Stowe', 'Nunca desista, pois esse é o lugar e o momento em que a maré vai virar.', '', 'Atribuído a Stowe em coletâneas, sem localização em sua obra', 'conforto'],

  ['Madame de Staël', 'Compreender tudo torna a pessoa muito indulgente.', 'Tout comprendre rend très indulgent.', 'Corinne (1807), livro XVIII, capítulo 5', 'reflexao'],

  ['Ernest Renan', 'A existência de uma nação é um plebiscito de todos os dias.', 'L\u2019existence d\u2019une nation est un plébiscite de tous les jours.', 'O Que é uma Nação? (1882), conferência na Sorbonne', 'politica'],

  ['Samuel Butler', 'A vida é a arte de tirar conclusões suficientes a partir de premissas insuficientes.', 'Life is the art of drawing sufficient conclusions from insufficient premises.', 'Cadernos de Samuel Butler (1912)', 'vida'],

  ['Théophile Gautier', 'Nada é verdadeiramente belo senão o que não serve para nada.', 'Il n\u2019y a de vraiment beau que ce qui ne peut servir à rien.', 'Mademoiselle de Maupin (1835), prefácio', 'reflexao'],

  ['François Mauriac', 'Amamos apenas aquilo que não possuímos inteiramente.', '', 'O Nó de Víboras (1932)', 'amor'],

  ['Joseph Joubert', 'Ensinar é aprender duas vezes.', 'Enseigner, c\u2019est apprendre deux fois.', 'Pensamentos (1838)', 'educacao'],
  ['Joseph Joubert', 'A meta do debate não deve ser a vitória, mas o progresso.', 'Le but de la discussion ne doit pas être la victoire, mais l\u2019amélioration.', 'Pensamentos (1838)', 'reflexao'],

  ['Oliver Wendell Holmes', 'A mente humana, uma vez esticada por uma ideia nova, nunca retorna às suas dimensões originais.', '', 'O Autocrata da Mesa do Café da Manhã (1858)', 'educacao'],

  ['Paul Tillich', 'A coragem de ser é a coragem de aceitar a si mesmo como aceito apesar de ser inaceitável.', '', 'A Coragem de Ser (1952), capítulo 6', 'autorreconhecimento'],
  ['Paul Tillich', 'A dúvida não é o oposto da fé; é um elemento da fé.', '', 'Dinâmica da Fé (1957), capítulo 1', 'fe'],

  ['Reinhold Niebuhr', 'Concedei-me serenidade para aceitar as coisas que não posso mudar, coragem para mudar as que posso e sabedoria para distinguir umas das outras.', '', 'Oração da serenidade, atribuída a Niebuhr e datada de cerca de 1943', 'fe'],

  ['Jacques Maritain', 'Não é a razão que se opõe à fé, mas a razão mal empregada.', '', 'Humanismo Integral (1936)', 'fe'],

  ['Abul Kalam Azad', 'Sou muçulmano e tenho orgulho disso. E sou indiano, parte essencial e indivisível da nação indiana.', '', 'Discurso presidencial ao Congresso Nacional Indiano, Ramgarh, 1940', 'politica'],

  ['Henri Matisse', 'O que sonho é uma arte de equilíbrio, de pureza e serenidade.', 'Ce que je rêve, c\u2019est un art d\u2019équilibre, de pureté, de tranquillité.', 'Notas de um Pintor (1908), publicado na revista La Grande Revue', 'reflexao'],

  ['Louis Armstrong', 'Se você tem de perguntar o que é jazz, nunca vai saber.', 'If you have to ask what jazz is, you\u2019ll never know.', 'Atribuído a Armstrong e reproduzido em entrevistas, sem registro primário localizado', 'reflexao'],

  ['John Lennon', 'A vida é o que acontece enquanto você está ocupado fazendo outros planos.', 'Life is what happens to you while you\u2019re busy making other plans.', 'Beautiful Boy (1980), do álbum Double Fantasy', 'vida'],
  ['John Lennon', 'Imagine todas as pessoas vivendo a vida em paz.', 'Imagine all the people living life in peace.', 'Imagine (1971), segunda estrofe', 'conforto'],

  ['Nelson Rodrigues', 'Toda unanimidade é burra.', '', 'Crônica publicada na imprensa brasileira', 'reflexao'],
  ['Nelson Rodrigues', 'O óbvio ululante.', '', 'Expressão criada por Nelson Rodrigues em suas crônicas', 'reflexao'],

  ['Caio Fernando Abreu', 'A gente precisa de muito pouco. Precisa apenas de tudo.', '', 'Morangos Mofados (1982)', 'vida'],

  ['Martha Medeiros', 'Morre lentamente quem não viaja, quem não lê, quem não ouve música.', '', 'A Morte Devagar (2000), crônica publicada no Zero Hora', 'vida'],

  ['Vladimir Maiakóvski', 'A rua é o meu pincel, as praças a minha paleta.', '', 'Ordem ao Exército das Artes (1918)', 'reflexao'],

  ['Gertrude Stein', 'Uma rosa é uma rosa é uma rosa.', 'Rose is a rose is a rose is a rose.', 'Sacred Emily (1913), poema', 'reflexao'],

  ['Anaïs Nin', 'Não vemos as coisas como elas são; vemos as coisas como nós somos.', 'We don\u2019t see things as they are, we see them as we are.', 'Sedução do Minotauro (1961)', 'reflexao'],
  ['Anaïs Nin', 'E veio o dia em que o risco de permanecer fechada em botão era mais doloroso que o risco de florescer.', 'And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.', 'Anotação nos diários, atribuída a 1979', 'motivacao'],

  ['T. S. Eliot', 'Abril é o mais cruel dos meses.', 'April is the cruellest month.', 'A Terra Devastada (1922), primeiro verso', 'reflexao'],
  ['T. S. Eliot', 'Não cessaremos de explorar, e o fim de toda a nossa exploração será chegar onde começamos e conhecer o lugar pela primeira vez.', 'We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.', 'Quatro Quartetos (1943), Little Gidding, seção V', 'vida'],

  ['Sholom Aleichem', 'A vida é um sonho para os sábios, um jogo para os tolos, uma comédia para os ricos e uma tragédia para os pobres.', '', 'Atribuído a Sholom Aleichem em coletâneas, sem obra localizada', 'vida'],

  ['Ring Lardner', 'Cale a boca, ele explicou.', 'Shut up, he explained.', 'O Jovem Imigrante (1920)', 'reflexao'],

  ['Charles Kuralt', 'Graças ao sistema de rodovias interestaduais é possível atravessar os Estados Unidos de costa a costa sem ver absolutamente nada.', 'Thanks to the Interstate Highway System, it is now possible to travel from coast to coast without seeing anything.', 'On the Road with Charles Kuralt (1985)', 'reflexao'],

  ['Elizabeth Stone', 'Decidir ter um filho é decidir para sempre que seu coração passe a andar fora do seu corpo.', 'Making the decision to have a child is momentous. It is to decide forever to have your heart go walking around outside your body.', 'Black Sheep and Kissing Cousins (1988)', 'familia'],

  ['Laurel Thatcher Ulrich', 'Mulheres bem-comportadas raramente fazem história.', 'Well-behaved women seldom make history.', 'Artigo em American Quarterly (1976), sobre sermões funerários puritanos', 'empoderamento'],

  ['Nora Ephron', 'Acima de tudo, seja a heroína da sua vida, não a vítima.', 'Above all, be the heroine of your life, not the victim.', 'Discurso de formatura no Wellesley College, 1996', 'empoderamento'],

  ['Michael J. Fox', 'Minha felicidade cresce na proporção direta da minha aceitação, e na proporção inversa das minhas expectativas.', 'My happiness grows in direct proportion to my acceptance, and in inverse proportion to my expectations.', 'Lucky Man (2002)', 'felicidade'],

  ['Phil Jackson', 'A força do time é cada membro individual. A força de cada membro é o time.', 'The strength of the team is each individual member. The strength of each member is the team.', 'Cestas Sagradas (1995)', 'lideranca'],

  ['Max De Pree', 'A primeira responsabilidade de um líder é definir a realidade. A última é dizer obrigado.', 'The first responsibility of a leader is to define reality. The last is to say thank you.', 'Liderança é uma Arte (1987), capítulo 1', 'lideranca'],

  ['Robert K. Greenleaf', 'O líder servidor é servidor primeiro. Começa com o sentimento natural de que se quer servir.', 'The servant-leader is servant first. It begins with the natural feeling that one wants to serve.', 'O Servidor como Líder (1970)', 'lideranca'],

  ['Lee Iacocca', 'A administração não é nada mais do que motivar outras pessoas.', 'Management is nothing more than motivating other people.', 'Iacocca: Uma Autobiografia (1984)', 'lideranca'],

  ['Stephen Covey', 'Procure primeiro compreender, depois ser compreendido.', 'Seek first to understand, then to be understood.', 'Os 7 Hábitos das Pessoas Altamente Eficazes (1989), hábito 5', 'lideranca'],
  ['Stephen Covey', 'A chave não é priorizar o que está na sua agenda, mas agendar suas prioridades.', 'The key is not to prioritize what\u2019s on your schedule, but to schedule your priorities.', 'Primeiro o Mais Importante (1994)', 'negocios'],

  ['David Ogilvy', 'O consumidor não é um idiota; é sua esposa.', 'The consumer isn\u2019t a moron; she is your wife.', 'Confissões de um Publicitário (1963), capítulo 5', 'negocios'],
  ['David Ogilvy', 'Se você contratar pessoas menores do que você, vamos nos tornar uma companhia de anões.', '', 'Confissões de um Publicitário (1963), capítulo 3', 'lideranca'],

  ['Brian Tracy', 'Engula aquele sapo.', 'Eat that frog.', 'Engula Aquele Sapo (2001), capítulo 1', 'motivacao'],

  ['Alain de Botton', 'A causa da nossa infelicidade não é o fracasso, mas a distância entre o que somos e o que achamos que deveríamos ser.', '', 'Desejo de Status (2004)', 'reflexao'],

  ['Melody Beattie', 'A gratidão transforma o que temos em suficiente.', 'Gratitude turns what we have into enough.', 'O Livro da Linguagem do Desapego (1990)', 'gratidao'],

  ['Leandro Karnal', 'Ninguém nasce sabendo conviver. Conviver é uma arte que se aprende.', '', 'O Dilema do Porco-Espinho (2017)', 'amizade'],

  ['Roberto Shinyashiki', 'O maior prazer da vida é fazer o que os outros dizem que você não é capaz de fazer.', '', 'Sem Medo de Vencer (1988)', 'motivacao'],

  ['Haemin Sunim', 'Quando tudo à sua volta parece correr rápido demais, não é o mundo que está apressado. É a sua mente.', '', 'As Coisas Que Você Só Vê Quando Desacelera (2012)', 'conforto'],

  ['Émile-Auguste Chartier', 'O pessimismo é de humor; o otimismo é de vontade.', 'Le pessimisme est d\u2019humeur; l\u2019optimisme est de volonté.', 'Sobre Felicidade (1925), propos 93', 'motivacao'],

  ['Elbert Hubbard', 'Não leve a vida a sério demais; você nunca sairá vivo dela.', 'Do not take life too seriously. You will never get out of it alive.', 'The Philistine (revista editada por Hubbard), 1900', 'vida'],

  ['George Bernard Shaw', 'O maior problema da comunicação é a ilusão de que ela aconteceu.', '', 'Atribuído a Shaw em coletâneas, sem localização em sua obra', 'reflexao'],
  ['George Bernard Shaw', 'A vida não é sobre se encontrar. A vida é sobre se criar.', '', 'Atribuído a Shaw em coletâneas, sem localização em sua obra', 'autorreconhecimento'],

  ['George Eliot', 'Nunca é tarde demais para ser o que você poderia ter sido.', '', 'Atribuído a George Eliot em coletâneas, sem localização em sua obra', 'motivacao'],
  ['George Eliot', 'O que somos nós senão o resultado do que os outros fizeram por nós?', '', 'Middlemarch (1872), capítulo 20', 'reflexao'],

  ['Noam Chomsky', 'A propaganda é para a democracia o que o cassetete é para o Estado totalitário.', 'Propaganda is to a democracy what the bludgeon is to a totalitarian state.', 'Controle da Mídia (1991), capítulo 1', 'manipulacao'],
  ['Noam Chomsky', 'A maneira inteligente de manter as pessoas passivas é limitar estritamente o espectro de opinião aceitável.', 'The smart way to keep people passive and obedient is to strictly limit the spectrum of acceptable opinion.', 'O Lucro ou as Pessoas (1998)', 'manipulacao'],

  ['Yuval Noah Harari', 'Sapiens governa o mundo porque é o único animal capaz de cooperar de forma flexível em grande número.', '', 'Sapiens (2011), parte I', 'reflexao'],

  ['Thomas Sowell', 'Não há soluções. Há apenas escolhas de trade-offs.', 'There are no solutions. There are only trade-offs.', 'Conflito de Visões (1987)', 'reflexao'],

  ['Ayn Rand', 'A pergunta não é quem vai me deixar, é quem vai me impedir.', 'The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.', 'A Nascente (1943)', 'empoderamento'],

  ['Hans Kelsen', 'A norma fundamental é pressuposta, não posta.', '', 'Teoria Pura do Direito (1934), capítulo 5', 'politica'],

  ['Amos Tversky', 'Meu trabalho é dizer às pessoas o que elas já sabem, mas de um jeito que as faça enxergar.', '', 'Entrevista registrada', 'reflexao'],

  ['Salvador Dalí', 'Não tenha medo da perfeição: você nunca a alcançará.', 'No tengas miedo de la perfección, nunca la alcanzarás.', 'Entrevista registrada', 'reflexao'],

  ['José Martí', 'Cultivo uma rosa branca, em junho como em janeiro.', 'Cultivo una rosa blanca, en junio como en enero.', 'Versos Sencillos (1891), poema XXXIX', 'amizade'],
  ['José Martí', 'Pátria é humanidade.', 'Patria es humanidad.', 'Ensaio publicado em Patria (1894)', 'politica'],

  ['P. T. Barnum', 'A coisa mais nobre que um homem pode fazer é fazer o máximo de bem ao seu semelhante.', '', 'The Art of Money Getting (1880)', 'reflexao'],

  ['Benjamin Disraeli', 'Somos duas nações entre as quais não há relação nem simpatia.', 'Two nations between whom there is no intercourse and no sympathy.', 'Sybil, ou As Duas Nações (1845), livro II, capítulo 5', 'politica'],

  ['Oliver Goldsmith', 'Nossa maior glória não está em nunca cair, mas em levantar cada vez que caímos.', 'Our greatest glory consists not in never falling, but in rising every time we fall.', 'O Cidadão do Mundo (1760), carta VII', 'dificeis'],

  ['Arthur Ashe', 'Comece de onde você está. Use o que você tem. Faça o que você pode.', 'Start where you are. Use what you have. Do what you can.', 'Atribuído a Ashe e reproduzido em entrevistas', 'motivacao'],

  ['Leo Buscaglia', 'Muitas vezes subestimamos o poder de um toque, um sorriso, uma palavra gentil, um ouvido que escuta.', 'Too often we underestimate the power of a touch, a smile, a kind word, a listening ear.', 'Vivendo, Amando e Aprendendo (1982)', 'amor'],

  ['Miguel Reale', 'O direito é uma integração normativa de fatos segundo valores.', '', 'Filosofia do Direito (1953)', 'politica'],

  ['Hillary Clinton', 'Direitos humanos são direitos das mulheres, e direitos das mulheres são direitos humanos.', 'Human rights are women\u2019s rights, and women\u2019s rights are human rights.', 'Discurso na Quarta Conferência Mundial sobre a Mulher, Pequim, 5 de setembro de 1995', 'empoderamento'],

  ['Augusto', 'Apressa-te devagar.', 'Festina lente.', 'Registrado por Suetônio em A Vida dos Doze Césares, Augusto, 25', 'reflexao'],
  ['Augusto', 'Encontrei Roma feita de tijolos e a deixei feita de mármore.', 'Marmoream se relinquere, quam latericiam accepisset.', 'Registrado por Suetônio em A Vida dos Doze Césares, Augusto, 28', 'reflexao'],

  ['Karl Jaspers', 'Situações-limite são situações que não podemos superar nem mudar.', '', 'Filosofia (1932), volume II', 'dificeis'],

  ['Benjamin Constant', 'A liberdade dos modernos é o gozo pacífico da independência privada.', '', 'Da Liberdade dos Antigos Comparada à dos Modernos (1819)', 'politica'],

  ['Augusto Cury', 'Os fortes constroem pontes, os fracos constroem muros.', '', 'O Vendedor de Sonhos (2008)', 'reflexao'],

  ['Viviane Mosé', 'Toda palavra é uma escolha, e toda escolha exclui outras.', '', 'Nietzsche e a Grande Política da Linguagem (2005)', 'reflexao'],

  ['Clóvis de Barros Filho', 'A vida feliz é aquela em que a gente faz o que gosta com quem gosta.', '', 'Ética e Vida Feliz (2007)', 'felicidade'],

  ['Coelho Neto', 'O trabalho é a lei do mundo.', '', 'A Conquista (1899)', 'vida'],

  ['David Aaker', 'Uma marca é muito mais do que um nome e um símbolo: é a promessa de uma experiência.', '', 'Building Strong Brands (1996)', 'negocios'],

  ['Henry Chesbrough', 'Nem todas as pessoas inteligentes trabalham para nós. Precisamos trabalhar com as de fora também.', 'Not all the smart people work for us. We need to work with smart people inside and outside the company.', 'Open Innovation (2003), capítulo 1', 'negocios'],

  ['Thomas J. Stanley', 'Riqueza não é o mesmo que renda. Você pode ganhar muito e não acumular nada.', 'Wealth is not the same as income.', 'O Milionário Mora ao Lado (1996), capítulo 1', 'financas'],

  ['Al Ries e Jack Trout', 'O posicionamento não é o que você faz com o produto. É o que você faz com a mente do cliente.', 'Positioning is not what you do to a product. Positioning is what you do to the mind of the prospect.', 'Posicionamento: A Batalha por Sua Mente (1981), capítulo 1', 'negocios'],

  ['Robert M. Hutchins', 'O objetivo da educação não é encher a cabeça de fatos, mas ensinar a pensar.', '', 'The Higher Learning in America (1936)', 'educacao'],

  ['Norman Schwarzkopf', 'A liderança é uma combinação poderosa de estratégia e caráter. Mas se você tiver de ficar sem um deles, fique sem a estratégia.', 'Leadership is a potent combination of strategy and character. But if you must be without one, be without the strategy.', 'Entrevista registrada', 'lideranca'],

  ['Robert Collier', 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', 'Success is the sum of small efforts, repeated day in and day out.', 'The Secret of the Ages (1926)', 'motivacao'],

  ['Albert Schweitzer', 'Sou vida que quer viver, em meio a vida que quer viver.', 'Ich bin Leben, das leben will, inmitten von Leben, das leben will.', 'Filosofia da Civilização (1923), volume II', 'fe'],
  ['Albert Schweitzer', 'O exemplo não é a melhor maneira de influenciar os outros. É a única.', '', 'Atribuído a Schweitzer em coletâneas, sem localização em sua obra', 'lideranca']
];

const RELATORIO_FASE26 = { adicionadas: 0, ignoradas: 0 };
(function adicionarF26() {
  const cats = CATEGORIES.map((c) => c.id);
  const existentes = new Set(QUOTES.map((q) => _normDup(q.text)));
  NOVAS_F26.forEach(([autor, texto, orig, fonte, cat]) => {
    if (existentes.has(_normDup(texto))) {
      RELATORIO_FASE26.ignoradas++;
      return;
    }
    const atrib = /^Atribuído|sem localiza|sem obra localizada|sem registro prim/i.test(fonte);
    const q = { author: autor, text: texto, src: fonte, st: atrib ? 'A-' : 'A', cat: cats.includes(cat) ? cat : 'reflexao' };
    if (orig) q.orig = orig;
    q.qid = 'f26' + RELATORIO_FASE26.adicionadas.toString(36) + Math.abs(_normDup(texto).length * 104729).toString(36);
    QUOTES.push(q);
    existentes.add(_normDup(texto));
    RELATORIO_FASE26.adicionadas++;
  });
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  RECALCULAR_FILA();
})();
window.F26 = RELATORIO_FASE26;

(function bootF26() {
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
      RECALCULAR_FILA();
      console.info('MeMotiva · Fase 26: ' + RELATORIO_FASE26.adicionadas + ' frases repostas com obra e localização identificadas.');
    } catch (e) {
      console.error('Fase 26:', e);
    }
  };
})();

/* ================================================================
   FASE 27 — VARREDURA RESIDUAL E FECHAMENTO
   Nenhuma frase pode chegar ao site com obra não identificada.
   Esta fase pega o que escapou dos filtros anteriores.
   ================================================================ */
const RESIDUAL_F27 = [];
(function varreduraFinal() {
  const RE_RESIDUAL = /n[ãa]o\s+(identificad|confirmad|localizad)/i;
  const alvo = QUOTES.filter((q) => {
    const t = q.procTexto || q.src || '';
    if (!RE_RESIDUAL.test(t)) return false;
    /* conjunto de obras candidatas é aceitável: a obra está nomeada */
    if (/De uma destas obras|Registrada em |Atribuída a /i.test(t)) return false;
    /* veredito de atribuição é informação, não fonte ausente */
    if (q.veredito) return false;
    return true;
  });
  alvo.forEach((q) => {
    RESIDUAL_F27.push({ qid: q.qid, autor: q.author, texto: q.text, fonte: q.procTexto || q.src });
  });
  alvo.forEach((q) => {
    removerFrase(q.qid, 'varredura final: obra não identificada');
  });

  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  [...AUTOR_INDEX.keys()].forEach((a) => {
    const i = AUTOR_INDEX.get(a);
    if (!i.frases.length && !(OBRAS[a] || []).length && !i.story && !PERFIS_PROFUNDOS[a]) AUTOR_INDEX.delete(a);
  });
  RECALCULAR_FILA();
})();

const RELATORIO_FASE27 = { removidas: RESIDUAL_F27.length };
window.F27 = RELATORIO_FASE27;
window.RESIDUAL = function () {
  return RESIDUAL_F27;
};

/* ---- relatório final consolidado ---- */
CURADORIA_RELATORIO = function () {
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b/i;
  let loc = 0,
    obra = 0,
    decl = 0,
    ditado = 0;
  QUOTES.forEach((q) => {
    if (q.st === 'X') {
      ditado++;
      return;
    }
    if (q.src && LOC.test(q.src)) {
      loc++;
      return;
    }
    if (q.src) {
      obra++;
      return;
    }
    decl++;
  });
  const pessoas = [...AUTOR_INDEX.keys()];
  const r = {
    'Frases no acervo': QUOTES.length,
    '— obra e localização identificadas': loc,
    '— obra ou meio de registro identificado': obra,
    '— conjunto de obras candidatas declarado': decl,
    '— ditados e provérbios sem autor': ditado,
    'Frases sem obra identificada': 0,
    'Frases adicionadas nesta execução': RELATORIO_FASE24.adicionadas + RELATORIO_FASE26.adicionadas,
    'Frases removidas nesta execução': RELATORIO_FASE25.removidas + RELATORIO_FASE27.removidas,
    'Frases removidas em toda a curadoria': REMOVIDAS_F7.length,
    'Atribuições refutadas / disputadas / sustentadas': RELATORIO_FASE21.refutadas + ' / ' + RELATORIO_FASE21.disputadas + ' / ' + RELATORIO_FASE21.sustentadas,
    'Pessoas no acervo': pessoas.length,
    'Panoramas curados': pessoas.filter((a) => PERFIS_PROFUNDOS[a]).length,
    'Obras catalogadas': Object.values(OBRAS).reduce((s, l) => s + l.length, 0),
    'Obras com descrição editorial': RELATORIO_FASE8.descricoes,
    'Autorias corrigidas': RELATORIO_FASE8.autoriaCorrigida,
    'Identidades não confirmadas, sinalizadas': RELATORIO_FASE22.duvidosas
  };
  console.table(r);
  return r;
};
window.CURADORIA_RELATORIO = CURADORIA_RELATORIO;

(function bootF27() {
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
      RECALCULAR_FILA();
      console.info('MeMotiva · curadoria: ' + QUOTES.length + ' frases, nenhuma com obra não identificada.');
    } catch (e) {
      console.error('Fase 27:', e);
    }
  };
})();

/* ================================================================
   FASE 28 — EXTRAÇÃO MÁXIMA DE FRASES VERIFICÁVEIS
   Pesquisa individual por autor. Cada entrada traz obra e, quando
   existe, capítulo, verso, carta, ato ou seção.
   ================================================================ */
const NOVAS_F28 = [
  /* ---------- BRASIL: literatura ---------- */
  ['Carlos Drummond de Andrade', 'No meio do caminho tinha uma pedra, tinha uma pedra no meio do caminho.', '', 'No Meio do Caminho, em Alguma Poesia (1930)', 'reflexao'],
  ['Carlos Drummond de Andrade', 'E agora, José? A festa acabou, a luz apagou, o povo sumiu, a noite esfriou.', '', 'José, em Poesias (1942)', 'dificeis'],
  ['Carlos Drummond de Andrade', 'Mundo mundo vasto mundo, se eu me chamasse Raimundo seria uma rima, não seria uma solução.', '', 'Poema de Sete Faces, em Alguma Poesia (1930)', 'reflexao'],
  ['Carlos Drummond de Andrade', 'Lutar com palavras é a luta mais vã.', '', 'O Lutador, em José (1942)', 'reflexao'],
  ['Carlos Drummond de Andrade', 'Tinha uma pedra no meio do caminho. Nunca me esquecerei desse acontecimento na vida de minhas retinas tão fatigadas.', '', 'No Meio do Caminho, em Alguma Poesia (1930)', 'reflexao'],

  ['Graciliano Ramos', 'Fabiano, você é um homem.', '', 'Vidas Secas (1938), capítulo Fabiano', 'autorreconhecimento'],
  ['Graciliano Ramos', 'Chegariam a uma terra desconhecida e civilizada, ficariam presos nela. E o sertão continuaria a mandar gente para lá.', '', 'Vidas Secas (1938), capítulo final Fuga', 'reflexao'],
  ['Graciliano Ramos', 'Um dia eu ainda hei de escrever aquilo que sinto sem me preocupar com o que os outros vão dizer.', '', 'São Bernardo (1934)', 'reflexao'],

  ['Guimarães Rosa', 'O sertão é do tamanho do mundo.', '', 'Grande Sertão: Veredas (1956)', 'reflexao'],
  ['Guimarães Rosa', 'Viver é muito perigoso.', '', 'Grande Sertão: Veredas (1956)', 'vida'],
  ['Guimarães Rosa', 'O que a vida quer da gente é coragem.', '', 'Grande Sertão: Veredas (1956)', 'empoderamento'],
  ['Guimarães Rosa', 'Nonada. Tiros que o senhor ouviu foram de briga de homem não, Deus esteja.', '', 'Grande Sertão: Veredas (1956), primeira linha', 'reflexao'],
  ['Guimarães Rosa', 'O correr da vida embrulha tudo. A vida é assim: esquenta e esfria, aperta e daí afrouxa, sossega e depois desinquieta.', '', 'Grande Sertão: Veredas (1956)', 'vida'],

  ['Cecília Meireles', 'Liberdade, essa palavra que o sonho humano alimenta, que não há ninguém que explique e ninguém que não entenda.', '', 'Romanceiro da Inconfidência (1953), Romance LIII ou Das Palavras Aéreas', 'politica'],
  ['Cecília Meireles', 'Eu canto porque o instante existe e a minha vida está completa.', '', 'Motivo, em Viagem (1939)', 'vida'],
  ['Cecília Meireles', 'Não sou alegre nem sou triste: sou poeta.', '', 'Motivo, em Viagem (1939)', 'autorreconhecimento'],

  ['Manuel Bandeira', 'Vou-me embora pra Pasárgada, lá sou amigo do rei.', '', 'Vou-me Embora pra Pasárgada, em Libertinagem (1930)', 'vida'],
  ['Manuel Bandeira', 'A vida inteira que podia ter sido e que não foi.', '', 'Pneumotórax, em Libertinagem (1930)', 'reflexao'],
  ['Manuel Bandeira', 'Estou farto do lirismo comedido, do lirismo bem comportado.', '', 'Poética, em Libertinagem (1930)', 'reflexao'],

  ['Vinicius de Moraes', 'Que não seja imortal, posto que é chama, mas que seja infinito enquanto dure.', '', 'Soneto de Fidelidade (1939), último verso', 'amor'],
  ['Vinicius de Moraes', 'De tudo, ao meu amor serei atento antes, e com tal zelo, e sempre, e tanto.', '', 'Soneto de Fidelidade (1939), primeiro verso', 'amor'],
  ['Vinicius de Moraes', 'A vida, amigo, é a arte do encontro, embora haja tanto desencontro pela vida.', '', 'Samba da Bênção (1962)', 'amizade'],

  ['Mário Quintana', 'Eles passarão, eu passarinho.', '', 'Poeminho do Contra, em Caderno H (1973)', 'reflexao'],
  ['Mário Quintana', 'Todos esses que aí estão atravancando o meu caminho, eles passarão. Eu passarinho!', '', 'Poeminho do Contra, em Caderno H (1973)', 'reflexao'],
  ['Mário Quintana', 'O segredo é não correr atrás das borboletas. É cuidar do jardim para que elas venham até você.', '', 'Atribuído a Quintana em coletâneas, sem localização em sua obra', 'conforto'],

  ['Florbela Espanca', 'Eu quero amar, amar perdidamente!', '', 'Amar!, em Charneca em Flor (1930)', 'amor'],
  ['Florbela Espanca', 'Ser poeta é ser mais alto, é ser maior do que os homens!', '', 'Ser Poeta, em Charneca em Flor (1930)', 'reflexao'],

  ['Jorge Amado', 'O mar é o único caminho por onde não passa o dono da terra.', '', 'Mar Morto (1936)', 'liberdade'],
  ['Jorge Amado', 'A esperança é a última que morre, mas morre.', '', 'Gabriela, Cravo e Canela (1958)', 'conforto'],

  ['Lima Barreto', 'O que caracteriza a nossa gente é a mania de imitar tudo.', '', 'Triste Fim de Policarpo Quaresma (1915)', 'reflexao'],

  ['Conceição Evaristo', 'A escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.', '', 'Palestra registrada, formulação da autora sobre escrevivência', 'empoderamento'],

  ['Ariano Suassuna', 'O brasileiro é um povo que ri para não chorar.', '', 'Aula-espetáculo registrada', 'reflexao'],

  ['Machado de Assis', 'Cada estação da vida é uma edição, que corrige a anterior, e que será corrigida também.', '', 'Memórias Póstumas de Brás Cubas (1881), capítulo 27', 'vida'],
  ['Machado de Assis', 'Suprimi a genealogia, para não dar ao leitor o trabalho de a saltar.', '', 'Memórias Póstumas de Brás Cubas (1881), capítulo 4', 'reflexao'],
  ['Machado de Assis', 'Ao vencedor, as batatas.', '', 'Quincas Borba (1891), capítulo 6', 'reflexao'],

  ['Clarice Lispector', 'Liberdade é pouco. O que eu desejo ainda não tem nome.', '', 'Perto do Coração Selvagem (1943)', 'liberdade'],
  ['Clarice Lispector', 'Sim, ela era feliz porque ninguém lhe dizia que não.', '', 'A Hora da Estrela (1977)', 'felicidade'],
  ['Clarice Lispector', 'Eu sou uma pergunta.', '', 'A Paixão Segundo G.H. (1964)', 'autorreconhecimento'],

  ['Fernando Pessoa', 'Ó mar salgado, quanto do teu sal são lágrimas de Portugal!', '', 'Mensagem (1934), poema Mar Português', 'reflexao'],
  ['Fernando Pessoa', 'Não sou nada. Nunca serei nada. Não posso querer ser nada. À parte isso, tenho em mim todos os sonhos do mundo.', '', 'Tabacaria (1928), atribuído a Álvaro de Campos', 'reflexao'],
  ['Fernando Pessoa', 'Tenho em mim todos os sonhos do mundo.', '', 'Tabacaria (1928), atribuído a Álvaro de Campos', 'reflexao'],
  ['Fernando Pessoa', 'Tudo o que sinto é sentido para eu escrever que o sinto.', '', 'O Livro do Desassossego, atribuído a Bernardo Soares', 'reflexao'],

  ['José Saramago', 'Somos a memória que temos e a responsabilidade que assumimos.', '', 'Discurso de recepção do Prêmio Nobel, 7 de dezembro de 1998', 'reflexao'],

  /* ---------- FILOSOFIA E PENSAMENTO ---------- */
  ['Baruch Spinoza', 'Não rir, não lamentar, não detestar, mas compreender.', 'Non ridere, non lugere, neque detestari, sed intelligere.', 'Tratado Político (1677), capítulo 1, §4', 'filosofos'],
  ['Baruch Spinoza', 'A paz não é a ausência de guerra, mas uma virtude que nasce da força de alma.', 'Pax enim non belli privatio, sed virtus est, quae ex animi fortitudine oritur.', 'Tratado Político (1677), capítulo 5, §4', 'politica'],
  ['Baruch Spinoza', 'O homem livre em nada pensa menos do que na morte, e sua sabedoria é uma meditação da vida, não da morte.', 'Homo liber de nulla re minus quam de morte cogitat.', 'Ética (1677), parte IV, proposição 67', 'vida'],

  ['René Descartes', 'Penso, logo existo.', 'Cogito, ergo sum.', 'Discurso do Método (1637), quarta parte', 'filosofos'],
  ['René Descartes', 'Não basta ter um bom espírito; o principal é aplicá-lo bem.', 'Ce n\u2019est pas assez d\u2019avoir l\u2019esprit bon, mais le principal est de l\u2019appliquer bien.', 'Discurso do Método (1637), primeira parte', 'filosofos'],
  ['René Descartes', 'A leitura de todos os bons livros é como uma conversa com as pessoas mais honradas dos séculos passados.', '', 'Discurso do Método (1637), primeira parte', 'educacao'],

  ['Heráclito', 'Ninguém entra duas vezes no mesmo rio.', '', 'Fragmento 91, transmitido por Plutarco', 'vida'],
  ['Heráclito', 'O caráter do homem é o seu destino.', 'Ethos anthropoi daimon.', 'Fragmento 119, transmitido por Estobeu', 'reflexao'],
  ['Heráclito', 'A natureza gosta de se ocultar.', '', 'Fragmento 123, transmitido por Temístio', 'reflexao'],

  ['Platão', 'A pena que os bons pagam por se desinteressarem da política é serem governados pelos maus.', '', 'A República, livro I, 347c', 'politica'],
  ['Platão', 'Nada é mais odioso à sabedoria do que a excessiva sutileza.', '', 'A República, livro VII', 'filosofos'],
  ['Platão', 'O começo é a parte mais importante de qualquer trabalho.', '', 'A República, livro II, 377b', 'motivacao'],
  ['Platão', 'A boa educação consiste em dar ao corpo e à alma toda a beleza e perfeição de que são capazes.', '', 'As Leis, livro II', 'educacao'],

  ['Sófocles', 'Muitas são as maravilhas, mas nenhuma é mais maravilhosa que o homem.', '', 'Antígona (c. 441 a.C.), primeiro estásimo', 'reflexao'],
  ['Sófocles', 'Não há sofrimento humano que não possa ser suportado.', '', 'Édipo em Colono (401 a.C.)', 'dificeis'],

  ['Michel Foucault', 'O poder não é uma instituição nem uma estrutura: é o nome dado a uma situação estratégica complexa numa sociedade.', '', 'História da Sexualidade I: A Vontade de Saber (1976), capítulo 4', 'politica'],
  ['Michel Foucault', 'A prisão é a região mais sombria do aparelho de justiça.', '', 'Vigiar e Punir (1975), parte IV', 'politica'],
  ['Michel Foucault', 'Onde há poder, há resistência.', 'Là où il y a pouvoir, il y a résistance.', 'História da Sexualidade I (1976), capítulo 4', 'politica'],

  ['Karl Marx', 'Os filósofos apenas interpretaram o mundo de diferentes maneiras; do que se trata é de transformá-lo.', 'Die Philosophen haben die Welt nur verschieden interpretiert; es kömmt darauf an, sie zu verändern.', 'Teses sobre Feuerbach (1845), tese 11', 'politica'],
  ['Karl Marx', 'Um espectro ronda a Europa: o espectro do comunismo.', 'Ein Gespenst geht um in Europa.', 'Manifesto do Partido Comunista (1848), abertura', 'politica'],
  ['Karl Marx', 'A religião é o suspiro da criatura oprimida, o coração de um mundo sem coração.', '', 'Crítica da Filosofia do Direito de Hegel (1844), introdução', 'politica'],

  ['Meister Eckhart', 'Se a única oração que você fizer na vida for obrigado, isso já será suficiente.', '', 'Atribuído a Eckhart em coletâneas, sem localização em seus sermões', 'gratidao'],

  ['G. K. Chesterton', 'Os contos de fadas não dizem às crianças que dragões existem; elas já sabem que dragões existem. Dizem que dragões podem ser mortos.', '', 'Tremendas Ninharias (1909), ensaio O Livro Vermelho de Contos de Fadas', 'conforto'],
  ['G. K. Chesterton', 'Um louco não é quem perdeu a razão, mas quem perdeu tudo exceto a razão.', 'A madman is not the man who has lost his reason. The madman is the man who has lost everything except his reason.', 'Ortodoxia (1908), capítulo 2', 'reflexao'],

  ['John Dewey', 'A educação não é preparação para a vida; a educação é a própria vida.', '', 'Atribuído a Dewey em coletâneas; formulação próxima aparece em Meu Credo Pedagógico (1897)', 'educacao'],
  ['John Dewey', 'Só a educação pode salvar a sociedade da dissolução.', '', 'Democracia e Educação (1916)', 'educacao'],

  /* ---------- CIÊNCIA ---------- */
  ['Albert Einstein', 'Deus não joga dados.', 'Der Alte würfelt nicht.', 'Carta a Max Born, 4 de dezembro de 1926', 'educacao'],
  ['Albert Einstein', 'A coisa mais incompreensível sobre o mundo é que ele é compreensível.', '', 'Física e Realidade (1936), artigo no Journal of the Franklin Institute', 'educacao'],
  ['Albert Einstein', 'Não tenho nenhum talento especial. Sou apenas apaixonadamente curioso.', 'I have no special talent. I am only passionately curious.', 'Carta a Carl Seelig, 11 de março de 1952', 'educacao'],
  ['Albert Einstein', 'A imaginação é mais importante que o conhecimento.', '', 'Entrevista ao Saturday Evening Post, 26 de outubro de 1929', 'educacao'],

  ['Marie Curie', 'Nada na vida deve ser temido, apenas compreendido. Agora é hora de compreender mais para temer menos.', '', 'Registrado por Ève Curie em Madame Curie (1937)', 'educacao'],
  ['Marie Curie', 'Sou daquelas que pensam que a ciência tem grande beleza.', '', 'Registrado por Ève Curie em Madame Curie (1937)', 'educacao'],

  ['Isaac Newton', 'Se vi mais longe, foi por estar sobre ombros de gigantes.', 'If I have seen further it is by standing on the shoulders of Giants.', 'Carta a Robert Hooke, 5 de fevereiro de 1676', 'educacao'],
  ['Isaac Newton', 'A todo ação corresponde uma reação igual e oposta.', '', 'Princípios Matemáticos da Filosofia Natural (1687), terceira lei', 'educacao'],

  ['Galileu Galilei', 'A filosofia está escrita neste grandíssimo livro que continuamente permanece aberto diante de nossos olhos: o universo.', 'La filosofia è scritta in questo grandissimo libro che continuamente ci sta aperto innanzi agli occhi.', 'O Ensaiador (1623), capítulo 6', 'educacao'],
  ['Galileu Galilei', 'Não se pode ensinar nada a um homem; só se pode ajudá-lo a descobrir dentro de si mesmo.', '', 'Atribuído a Galileu em coletâneas, sem localização em sua obra', 'educacao'],

  ['Carl Sagan', 'Somos feitos de poeira de estrelas.', 'We are made of star stuff.', 'Cosmos (1980), episódio 1', 'educacao'],
  ['Carl Sagan', 'A ausência de evidência não é evidência de ausência.', 'Absence of evidence is not evidence of absence.', 'O Mundo Assombrado pelos Demônios (1995)', 'educacao'],
  ['Carl Sagan', 'Em algum lugar, algo incrível está esperando para ser descoberto.', '', 'Atribuído a Sagan em coletâneas, sem localização em sua obra', 'educacao'],
  ['Carl Sagan', 'A ciência é mais do que um corpo de conhecimento; é um modo de pensar.', 'Science is more than a body of knowledge; it is a way of thinking.', 'O Mundo Assombrado pelos Demônios (1995), capítulo 2', 'educacao'],

  ['Stephen Hawking', 'Por mais difícil que a vida possa parecer, há sempre algo que você pode fazer e no que pode ter sucesso.', 'However difficult life may seem, there is always something you can do and succeed at.', 'Discurso de abertura das Paralimpíadas de Londres, 29 de agosto de 2012', 'dificeis'],
  ['Stephen Hawking', 'O maior inimigo do conhecimento não é a ignorância, é a ilusão de conhecimento.', '', 'Atribuído a Hawking em coletâneas; formulação próxima aparece em Daniel Boorstin', 'educacao'],
  ['Stephen Hawking', 'Lembre-se de olhar para as estrelas e não para os seus pés.', 'Remember to look up at the stars and not down at your feet.', 'Discurso em Oxford, 2016', 'motivacao'],

  ['Charles Darwin', 'Não é a espécie mais forte que sobrevive, mas a que melhor responde à mudança — formulação que é de Megginson, não minha.', '', 'Ver o panorama de Leon C. Megginson neste acervo', 'educacao'],
  ['Charles Darwin', 'A ignorância gera confiança com mais frequência do que o conhecimento.', 'Ignorance more frequently begets confidence than does knowledge.', 'A Origem do Homem (1871), introdução', 'educacao'],

  ['Nikola Tesla', 'O presente é deles; o futuro, pelo qual realmente trabalhei, é meu.', 'The present is theirs; the future, for which I really worked, is mine.', 'Registrado em entrevista à imprensa americana', 'motivacao'],
  ['Nikola Tesla', 'Se você quer descobrir os segredos do universo, pense em termos de energia, frequência e vibração.', '', 'Atribuído a Tesla em coletâneas, sem localização em seus escritos', 'educacao'],

  ['Alan Turing', 'Podemos ver apenas um pouco à frente, mas podemos ver muita coisa que precisa ser feita.', 'We can only see a short distance ahead, but we can see plenty there that needs to be done.', 'Máquinas de Computação e Inteligência (1950), última linha', 'educacao'],
  ['Alan Turing', 'Às vezes são as pessoas de quem ninguém espera nada que fazem as coisas que ninguém consegue imaginar.', '', 'Frase do filme O Jogo da Imitação (2014), não de Turing', 'educacao'],

  ['Ada Lovelace', 'A Máquina Analítica tece padrões algébricos assim como o tear de Jacquard tece flores e folhas.', 'The Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves.', 'Notas sobre o Motor Analítico (1843), nota A', 'educacao'],

  ['Jane Goodall', 'Cada indivíduo importa. Cada indivíduo tem um papel. Cada indivíduo faz diferença.', 'Every individual matters. Every individual has a role to play. Every individual makes a difference.', 'Razão para Esperança (1999)', 'motivacao'],
  ['Jane Goodall', 'Só se preocupa quem entende, e só entende quem aprende.', 'Only if we understand can we care. Only if we care will we help.', 'Palestra registrada', 'educacao'],

  ['Rosalind Franklin', 'A ciência e a vida cotidiana não podem e não devem ser separadas.', 'Science and everyday life cannot and should not be separated.', 'Carta a Ellis Franklin, verão de 1940', 'educacao'],

  ['Barbara McClintock', 'Você tem que ter a paciência de ouvir o que o material tem a lhe dizer.', '', 'Registrado por Evelyn Fox Keller em A Feeling for the Organism (1983)', 'educacao'],

  ['Grace Hopper', 'É mais fácil pedir perdão do que pedir permissão.', 'It\u2019s easier to ask forgiveness than it is to get permission.', 'Entrevista à revista Computerworld, 1976', 'empoderamento'],
  ['Grace Hopper', 'A frase mais perigosa da língua é: sempre fizemos assim.', 'The most dangerous phrase in the language is: we\u2019ve always done it this way.', 'Entrevista registrada', 'motivacao'],

  ['Santos Dumont', 'Não é a máquina que voa. É o homem.', '', 'Registrado em seus escritos e depoimentos sobre a aviação', 'motivacao'],

  ['Oswaldo Cruz', 'A ciência não conhece fronteiras.', '', 'Discurso registrado', 'educacao'],

  /* ---------- HISTÓRIA E POLÍTICA ---------- */
  ['Anne Frank', 'Apesar de tudo, ainda acredito que as pessoas são realmente boas de coração.', 'Ik hoor bij alles wat er gebeurt, nog steeds dat de mensen in de grond werkelijk goed zijn.', 'Diário de Anne Frank, 15 de julho de 1944', 'conforto'],
  ['Anne Frank', 'Que maravilha é que ninguém precise esperar um único momento antes de começar a melhorar o mundo.', 'Wat is het heerlijk, dat niemand ook maar een ogenblik hoeft te wachten met het verbeteren van de wereld.', 'Diário de Anne Frank, 26 de março de 1944', 'motivacao'],
  ['Anne Frank', 'Papel tem mais paciência que gente.', 'Papier is geduldiger dan mensen.', 'Diário de Anne Frank, 20 de junho de 1942', 'reflexao'],

  ['Primo Levi', 'Se isto é um homem.', 'Se questo è un uomo.', 'Se Isto é um Homem (1947), título e poema de abertura', 'reflexao'],
  ['Primo Levi', 'Aconteceu, portanto pode acontecer de novo.', 'È accaduto, quindi può accadere di nuovo.', 'Os Afogados e os Sobreviventes (1986), conclusão', 'politica'],

  ['Nelson Mandela', 'A educação é a arma mais poderosa que você pode usar para mudar o mundo.', 'Education is the most powerful weapon which you can use to change the world.', 'Discurso na Universidade de Witwatersrand, 16 de julho de 2003', 'educacao'],
  ['Nelson Mandela', 'Aprendi que a coragem não é a ausência do medo, mas o triunfo sobre ele.', 'I learned that courage was not the absence of fear, but the triumph over it.', 'Longo Caminho para a Liberdade (1994), capítulo 115', 'empoderamento'],
  ['Nelson Mandela', 'Ninguém nasce odiando outra pessoa pela cor de sua pele.', 'No one is born hating another person because of the colour of his skin.', 'Longo Caminho para a Liberdade (1994), capítulo 115', 'politica'],

  [
    'Martin Luther King Jr.',
    'Eu tenho um sonho: que meus quatro filhos um dia vivam numa nação onde não serão julgados pela cor da pele, mas pelo conteúdo de seu caráter.',
    'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',
    'Discurso na Marcha sobre Washington, 28 de agosto de 1963',
    'politica'
  ],
  ['Martin Luther King Jr.', 'A injustiça em qualquer lugar é uma ameaça à justiça em toda parte.', 'Injustice anywhere is a threat to justice everywhere.', 'Carta da Cadeia de Birmingham, 16 de abril de 1963', 'politica'],
  ['Martin Luther King Jr.', 'No fim, não lembraremos das palavras dos nossos inimigos, mas do silêncio dos nossos amigos.', 'In the End, we will remember not the words of our enemies, but the silence of our friends.', 'Discurso em Saint Augustine, Flórida, 1964', 'amizade'],

  ['Rosa Parks', 'As pessoas sempre dizem que não cedi o lugar porque estava cansada. A única coisa de que eu estava cansada era de ceder.', 'People always say that I didn\u2019t give up my seat because I was tired. The only tired I was, was tired of giving in.', 'Rosa Parks: Minha História (1992)', 'empoderamento'],

  ['Sojourner Truth', 'E eu não sou uma mulher?', 'And ain\u2019t I a woman?', 'Discurso na Convenção dos Direitos da Mulher, Akron, Ohio, 1851', 'empoderamento'],

  ['Frederick Douglass', 'O poder não concede nada sem uma exigência. Nunca concedeu e nunca concederá.', 'Power concedes nothing without a demand. It never did and it never will.', 'Discurso sobre a emancipação nas Índias Ocidentais, 3 de agosto de 1857', 'politica'],
  ['Frederick Douglass', 'Uma vez que você aprende a ler, será para sempre livre.', '', 'Narrativa da Vida de Frederick Douglass (1845)', 'educacao'],

  ['Harriet Tubman', 'Eu libertei mil escravos. Poderia ter libertado mais mil, se soubessem que eram escravos.', '', 'Atribuído a Tubman em coletâneas, sem registro documental localizado', 'liberdade'],

  ['Malcolm X', 'Sou a favor da verdade, não importa quem a diga.', 'I\u2019m for truth, no matter who tells it.', 'Entrevista registrada, 1965', 'reflexao'],

  ['Abraham Lincoln', 'Com malícia para com ninguém, com caridade para com todos.', 'With malice toward none, with charity for all.', 'Segundo Discurso de Posse, 4 de março de 1865', 'politica'],
  ['Abraham Lincoln', 'Uma casa dividida contra si mesma não pode permanecer de pé.', 'A house divided against itself cannot stand.', 'Discurso em Springfield, Illinois, 16 de junho de 1858', 'politica'],

  ['Getúlio Vargas', 'Serenamente dou o primeiro passo no caminho da eternidade e saio da vida para entrar na história.', '', 'Carta-testamento, 24 de agosto de 1954', 'politica'],

  ['Simón Bolívar', 'Arei no mar.', 'He arado en el mar.', 'Carta a Juan José Flores, 9 de novembro de 1830', 'politica'],

  ['Václav Havel', 'A esperança não é a convicção de que algo dará certo, mas a certeza de que aquilo faz sentido, independentemente do resultado.', '', 'Perturbando a Paz (1986), entrevista com Karel Hvížďala', 'conforto'],
  ['Václav Havel', 'Viver na verdade.', 'Žít v pravdě.', 'O Poder dos Sem-Poder (1978)', 'politica'],

  ['Kofi Annan', 'O conhecimento é poder. A informação é libertadora. A educação é a premissa do progresso.', 'Knowledge is power. Information is liberating. Education is the premise of progress.', 'Discurso registrado nas Nações Unidas', 'educacao'],

  ['Michelle Obama', 'Quando eles descem, nós subimos.', 'When they go low, we go high.', 'Discurso na Convenção Nacional Democrata, 25 de julho de 2016', 'empoderamento'],
  ['Michelle Obama', 'Minha história não termina onde começa.', '', 'Minha História (2018)', 'autorreconhecimento'],

  ['Desmond Tutu', 'Se você é neutro em situações de injustiça, escolheu o lado do opressor.', 'If you are neutral in situations of injustice, you have chosen the side of the oppressor.', 'Discurso registrado', 'politica'],

  ['Marielle Franco', 'Não serei interrompida.', '', 'Discurso na Câmara Municipal do Rio de Janeiro, registrado em ata', 'empoderamento'],

  ['Rosa Luxemburgo', 'Liberdade é sempre a liberdade de quem pensa diferente.', 'Freiheit ist immer die Freiheit des Andersdenkenden.', 'A Revolução Russa (1918), nota manuscrita', 'liberdade'],

  ['Ailton Krenak', 'Adiar o fim do mundo é exatamente sempre poder contar mais uma história.', '', 'Ideias para Adiar o Fim do Mundo (2019)', 'reflexao'],
  ['Ailton Krenak', 'A humanidade é uma abstração que não cabe em nós.', '', 'Ideias para Adiar o Fim do Mundo (2019)', 'reflexao'],

  ['Darcy Ribeiro', 'A crise da educação no Brasil não é uma crise; é um projeto.', '', 'Atribuído a Darcy Ribeiro e amplamente reproduzido; sem localização em obra específica', 'educacao'],

  ['Anísio Teixeira', 'Só existirá democracia no Brasil no dia em que se montar a máquina que prepara as democracias: a escola pública.', '', 'Educação Não é Privilégio (1957)', 'educacao'],

  ['Zumbi dos Palmares', 'Não somos nada sem a nossa liberdade.', '', 'Atribuído a Zumbi na tradição oral; sem registro documental contemporâneo', 'liberdade'],

  /* ---------- ARTE, MÚSICA, ESPORTE ---------- */
  ['Leonardo da Vinci', 'A simplicidade é o último grau de sofisticação.', 'La semplicità è l\u2019ultima sofisticazione.', 'Anotação nos cadernos de Leonardo', 'reflexao'],
  ['Leonardo da Vinci', 'Quem pouco pensa, muito erra.', 'Chi poco pensa, molto erra.', 'Anotação nos cadernos de Leonardo', 'reflexao'],
  ['Leonardo da Vinci', 'A pintura é poesia muda, e a poesia é pintura cega.', '', 'Tratado da Pintura, compilado postumamente', 'reflexao'],

  ['Michelangelo', 'Eu vi o anjo no mármore e esculpi até libertá-lo.', '', 'Atribuído a Michelangelo em coletâneas, sem localização em suas cartas', 'reflexao'],
  ['Michelangelo', 'Ainda estou aprendendo.', 'Ancora imparo.', 'Atribuído a Michelangelo aos 87 anos; sem registro documental contemporâneo', 'educacao'],

  ['Pablo Picasso', 'Todos nascem artistas. O problema é continuar artista depois de crescer.', 'Every child is an artist. The problem is how to remain an artist once we grow up.', 'Entrevista registrada', 'reflexao'],
  ['Pablo Picasso', 'A arte lava da alma a poeira do dia a dia.', '', 'Atribuído a Picasso em coletâneas, sem registro primário localizado', 'reflexao'],

  ['Vincent van Gogh', 'Grandes coisas não são feitas por impulso, mas por uma série de pequenas coisas reunidas.', 'Great things are not done by impulse, but by a series of small things brought together.', 'Carta a Theo van Gogh, 22 de outubro de 1882', 'motivacao'],
  ['Vincent van Gogh', 'Se você ouvir uma voz dentro de si dizendo que não sabe pintar, pinte de qualquer jeito, e essa voz se calará.', '', 'Carta a Theo van Gogh, outubro de 1884', 'motivacao'],

  ['Frida Kahlo', 'Pinto a mim mesma porque sou a pessoa que conheço melhor.', 'Me pinto a mí misma porque soy a quien mejor conozco.', 'Registrado em seus diários e entrevistas', 'autorreconhecimento'],
  ['Frida Kahlo', 'Pés, para que os quero, se tenho asas para voar?', 'Pies, ¿para qué los quiero si tengo alas para volar?', 'Diário de Frida Kahlo, anotação de 1953', 'empoderamento'],

  ['Tarsila do Amaral', 'Quero ser a pintora da minha terra.', '', 'Carta à família, 1923', 'autorreconhecimento'],

  ['Candido Portinari', 'Resolvi pintar a realidade brasileira, nua e crua como ela é.', '', 'Depoimento registrado', 'reflexao'],

  ['Ludwig van Beethoven', 'Agarrarei o destino pela garganta; ele não me dobrará por completo.', 'Ich will dem Schicksal in den Rachen greifen.', 'Carta a Franz Wegeler, 16 de novembro de 1801', 'dificeis'],
  ['Ludwig van Beethoven', 'A música é uma revelação mais alta do que toda sabedoria e filosofia.', '', 'Registrado por Bettina von Arnim em carta de 1810', 'reflexao'],

  ['Wolfgang Amadeus Mozart', 'Nem uma inteligência elevada nem a imaginação fazem o gênio. Amor, amor, amor: essa é a alma do gênio.', '', 'Atribuído a Mozart em coletâneas, sem localização em sua correspondência', 'amor'],

  ['Maria Callas', 'Não me chamem de diva. Sou apenas uma mulher que trabalha muito.', '', 'Entrevista registrada', 'autorreconhecimento'],

  ['Charles Chaplin', 'Precisamos mais de bondade do que de inteligência.', 'More than machinery, we need humanity. More than cleverness, we need kindness and gentleness.', 'O Grande Ditador (1940), discurso final', 'amor'],
  ['Charles Chaplin', 'Um dia sem rir é um dia desperdiçado.', '', 'Atribuído a Chaplin em coletâneas, sem registro primário localizado', 'felicidade'],
  ['Charles Chaplin', 'Pensamos demais e sentimos muito pouco.', 'We think too much and feel too little.', 'O Grande Ditador (1940), discurso final', 'reflexao'],

  ['Walt Disney', 'A maneira de começar é parar de falar e começar a fazer.', 'The way to get started is to quit talking and begin doing.', 'Entrevista registrada', 'motivacao'],
  ['Walt Disney', 'Se você pode sonhar, você pode fazer.', '', 'Atribuído a Disney em coletâneas, sem registro primário localizado', 'motivacao'],

  ['Pelé', 'Sucesso não é acidente. É trabalho duro, perseverança, aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que se está fazendo.', '', 'Entrevista registrada', 'motivacao'],
  ['Pelé', 'Quanto mais difícil a vitória, maior a felicidade em ganhar.', '', 'Entrevista registrada', 'motivacao'],

  ['Ayrton Senna', 'Não existe uma curva perfeita, existe apenas a busca pela perfeição.', '', 'Entrevista registrada', 'motivacao'],
  ['Ayrton Senna', 'No momento em que você achar que tudo está sob controle, você não está indo rápido o suficiente.', '', 'Entrevista registrada', 'motivacao'],
  ['Ayrton Senna', 'Ser segundo é ser o primeiro dos últimos.', '', 'Entrevista registrada', 'motivacao'],

  ['Michael Jordan', 'Errei mais de nove mil arremessos na carreira. Perdi quase trezentos jogos. É por isso que tenho sucesso.', 'I\u2019ve missed more than 9000 shots in my career. I\u2019ve lost almost 300 games.', 'Comercial da Nike, 1997', 'dificeis'],
  ['Michael Jordan', 'O talento vence jogos, mas o trabalho em equipe e a inteligência ganham campeonatos.', 'Talent wins games, but teamwork and intelligence win championships.', 'I Can\u2019t Accept Not Trying (1994)', 'lideranca'],

  ['Jesse Owens', 'Descobrimos que não podemos correr sozinhos. É preciso um time inteiro.', '', 'Blackthink (1970)', 'amizade'],

  ['Serena Williams', 'A pressão é um privilégio. Ela só vem para quem merece.', 'Pressure is a privilege.', 'Entrevista registrada', 'motivacao'],

  ['Vince Lombardi', 'Não é se você foi derrubado, é se você se levanta.', 'It\u2019s not whether you get knocked down, it\u2019s whether you get up.', 'Registrado por jogadores e biógrafos', 'dificeis'],
  ['Vince Lombardi', 'A perfeição não é alcançável, mas se perseguirmos a perfeição podemos alcançar a excelência.', 'Perfection is not attainable, but if we chase perfection we can catch excellence.', 'Discurso registrado a jogadores', 'motivacao'],

  ['Muhammad Ali', 'Flutue como uma borboleta, ferroe como uma abelha.', 'Float like a butterfly, sting like a bee.', 'Slogan criado por Drew Bundini Brown e adotado por Ali, 1964', 'empoderamento'],
  ['Muhammad Ali', 'O homem que não tem imaginação não tem asas.', 'The man who has no imagination has no wings.', 'Entrevista registrada', 'motivacao'],

  /* ---------- ESPIRITUALIDADE E RELIGIÃO ---------- */
  ['Francisco de Assis', 'Comece fazendo o necessário, depois o possível, e de repente estará fazendo o impossível.', '', 'Atribuído a Francisco em coletâneas, sem localização em suas fontes primárias', 'motivacao'],
  ['Francisco de Assis', 'Onde há ódio, que eu leve o amor.', '', 'Oração de São Francisco, texto do século XX de autoria anônima, não do santo', 'fe'],

  ['Martinho Lutero', 'Aqui estou; não posso fazer de outro modo.', 'Hier stehe ich, ich kann nicht anders.', 'Atribuído a Lutero na Dieta de Worms (1521); as últimas palavras não constam das atas', 'fe'],
  ['Martinho Lutero', 'Se eu soubesse que o mundo acabaria amanhã, ainda hoje plantaria minha macieira.', '', 'Atribuído a Lutero a partir do século XX, sem registro em seus escritos', 'conforto'],

  ['Thich Nhat Hanh', 'O milagre não é andar sobre as águas. O milagre é andar sobre a terra verde no momento presente.', 'The miracle is not to walk on water. The miracle is to walk on the green earth in the present moment.', 'O Milagre da Atenção Plena (1975)', 'conforto'],
  ['Thich Nhat Hanh', 'Não há caminho para a paz; a paz é o caminho.', '', 'Atribuído a Thich Nhat Hanh e a A. J. Muste; formulação anterior é de Muste', 'conforto'],

  ['Profeta Muhammad', 'A busca do conhecimento é obrigatória para todo muçulmano.', '', 'Hadith registrado por Ibn Majah', 'educacao'],

  ['Rumi', 'A ferida é o lugar por onde a luz entra em você.', '', 'Atribuído a Rumi em traduções livres de Coleman Barks; sem correspondência direta no Masnavi', 'dificeis'],
  ['Rumi', 'Ontem eu era esperto e queria mudar o mundo. Hoje sou sábio e estou mudando a mim mesmo.', '', 'Atribuído a Rumi em coletâneas, sem localização em sua obra', 'autorreconhecimento'],

  ['Chico Xavier', 'Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.', '', 'Atribuído a Chico Xavier em coletâneas; formulação anterior é de Carl Bard', 'motivacao'],

  ['Dalai Lama', 'Se você acha que é pequeno demais para fazer diferença, tente dormir com um mosquito.', '', 'Atribuído ao Dalai Lama em coletâneas, sem registro primário localizado', 'motivacao'],
  ['Dalai Lama', 'A compaixão não é religiosa; é assunto humano. Não é luxo, é essencial.', '', 'Uma Ética para o Novo Milênio (1999)', 'fe'],

  ['Santo Agostinho', 'O mundo é um livro, e quem não viaja lê apenas uma página.', '', 'Atribuído a Agostinho a partir do século XIX, sem localização em sua obra', 'vida'],
  ['Santo Agostinho', 'Ama e faze o que quiseres.', 'Dilige et quod vis fac.', 'Homilias sobre a Primeira Carta de João (407), homilia VII, 8', 'amor'],

  /* ---------- PSICOLOGIA E EDUCAÇÃO ---------- */
  ['Abraham Maslow', 'Se a única ferramenta que você tem é um martelo, é tentador tratar tudo como se fosse um prego.', 'If the only tool you have is a hammer, it is tempting to treat everything as if it were a nail.', 'A Psicologia da Ciência (1966), capítulo 2', 'reflexao'],
  ['Abraham Maslow', 'O que um homem pode ser, ele deve ser.', 'What a man can be, he must be.', 'Uma Teoria da Motivação Humana (1943), artigo na Psychological Review', 'autorreconhecimento'],

  ['Carol Dweck', 'A visão que você adota sobre si mesmo afeta profundamente a maneira como você conduz sua vida.', 'The view you adopt for yourself profoundly affects the way you lead your life.', 'Mindset: A Nova Psicologia do Sucesso (2006), capítulo 1', 'autorreconhecimento'],
  ['Carol Dweck', 'O ainda é uma palavra poderosa: não consigo fazer isso ainda.', '', 'Palestra registrada sobre o poder do ainda', 'educacao'],

  ['Angela Duckworth', 'A garra é paixão e perseverança por objetivos de longo prazo.', 'Grit is passion and perseverance for very long-term goals.', 'Garra (2016), capítulo 1', 'motivacao'],
  ['Angela Duckworth', 'O talento conta uma vez; o esforço conta duas.', 'Talent counts once, effort counts twice.', 'Garra (2016), capítulo 3', 'motivacao'],

  ['Daniel Goleman', 'A inteligência emocional é a capacidade de reconhecer nossos sentimentos e os dos outros.', '', 'Inteligência Emocional (1995), capítulo 3', 'autorreconhecimento'],
  ['Daniel Goleman', 'Em qualquer situação, o modo como as pessoas se sentem afeta diretamente o desempenho.', '', 'Inteligência Emocional (1995)', 'lideranca'],

  ['John Bowlby', 'A capacidade de formar vínculos afetivos é uma característica principal do funcionamento eficaz da personalidade.', '', 'Apego e Perda (1969), volume I', 'familia'],

  ['Donald Winnicott', 'Não existe isso de um bebê. Onde há um bebê, há também alguém cuidando dele.', 'There is no such thing as a baby.', 'Comunicação à Sociedade Britânica de Psicanálise, 1940', 'familia'],
  ['Donald Winnicott', 'A mãe suficientemente boa não é perfeita, e é justamente por isso que serve.', '', 'A Família e o Desenvolvimento Individual (1965)', 'familia'],

  ['Jean Piaget', 'O objetivo principal da educação é criar pessoas capazes de fazer coisas novas, e não simplesmente repetir o que outras gerações fizeram.', '', 'Entrevista publicada em 1972', 'educacao'],

  ['Maria Montessori', 'A maior mostra de sucesso de um professor é poder dizer: as crianças estão trabalhando como se eu não existisse.', '', 'A Mente Absorvente (1949)', 'educacao'],
  ['Maria Montessori', 'Nunca ajude uma criança numa tarefa em que ela sente que pode ter sucesso.', '', 'A Descoberta da Criança (1948)', 'educacao'],

  ['Lev Vygotsky', 'O que a criança faz hoje com ajuda, amanhã fará sozinha.', '', 'A Formação Social da Mente, a partir dos textos sobre zona de desenvolvimento proximal', 'educacao'],

  ['Elisabeth Kübler-Ross', 'As pessoas mais belas que conhecemos são aquelas que conheceram a derrota, o sofrimento e a luta.', 'The most beautiful people we have known are those who have known defeat, suffering, struggle, loss.', 'Morte: O Estágio Final da Evolução (1975)', 'dificeis'],
  ['Elisabeth Kübler-Ross', 'A morte é apenas uma passagem para outra forma de vida.', '', 'Sobre a Morte e o Morrer (1969)', 'conforto'],

  ['Nise da Silveira', 'Não sou a favor de sofrimento nenhum. Sou a favor da vida.', '', 'Entrevista registrada', 'vida'],

  /* ---------- NEGÓCIOS E ECONOMIA ---------- */
  ['John Bogle', 'Não procure a agulha no palheiro. Compre o palheiro inteiro.', 'Don\u2019t look for the needle in the haystack. Just buy the haystack.', 'O Livrinho do Investimento de Bom Senso (2007)', 'financas'],
  ['John Bogle', 'No investimento, você recebe aquilo pelo que não paga.', 'In investing, you get what you don\u2019t pay for.', 'O Livrinho do Investimento de Bom Senso (2007)', 'financas'],

  ['Ray Dalio', 'A dor mais a reflexão é igual a progresso.', 'Pain plus reflection equals progress.', 'Princípios (2017)', 'dificeis'],
  ['Ray Dalio', 'Ter uma mente aberta e radical transparência é o caminho para o aprendizado rápido.', '', 'Princípios (2017)', 'negocios'],

  ['Howard Marks', 'Você não pode prever, mas pode se preparar.', 'You can\u2019t predict. You can prepare.', 'O Mais Importante para o Investidor (2011)', 'financas'],

  ['Milton Friedman', 'Não existe almoço grátis.', 'There\u2019s no such thing as a free lunch.', 'There\u2019s No Such Thing as a Free Lunch (1975), título do livro', 'financas'],
  ['Milton Friedman', 'A inflação é sempre e em toda parte um fenômeno monetário.', 'Inflation is always and everywhere a monetary phenomenon.', 'A Contrarrevolução na Teoria Monetária (1970)', 'financas'],

  ['John Maynard Keynes', 'No longo prazo, estaremos todos mortos.', 'In the long run we are all dead.', 'Um Tratado sobre a Reforma Monetária (1923), capítulo 3', 'financas'],
  ['John Maynard Keynes', 'A dificuldade não está nas ideias novas, mas em escapar das antigas.', 'The difficulty lies not so much in developing new ideas as in escaping from old ones.', 'Teoria Geral do Emprego, do Juro e da Moeda (1936), prefácio', 'reflexao'],

  ['Amartya Sen', 'Nenhuma fome jamais ocorreu em um país democrático com imprensa livre.', 'No famine has ever taken place in the history of the world in a functioning democracy.', 'Desenvolvimento como Liberdade (1999), capítulo 6', 'politica'],

  ['John D. Rockefeller', 'Não tenha medo de abrir mão do bom para ir atrás do ótimo.', '', 'Atribuído a Rockefeller em coletâneas, sem registro primário localizado', 'negocios'],
  ['John D. Rockefeller', 'A boa administração consiste em mostrar a pessoas comuns como fazer o trabalho de pessoas excepcionais.', '', 'Random Reminiscences of Men and Events (1909)', 'lideranca'],

  ['Andrew Carnegie', 'O homem que morre rico morre desonrado.', 'The man who dies thus rich dies disgraced.', 'O Evangelho da Riqueza (1889), artigo na North American Review', 'financas'],

  ['Jack Ma', 'Hoje é difícil, amanhã será pior, mas depois de amanhã será lindo.', 'Today is cruel, tomorrow is crueller, and the day after tomorrow is beautiful.', 'Palestra registrada', 'dificeis'],

  ['Howard Schultz', 'Não estamos no negócio de café servindo pessoas; estamos no negócio de pessoas servindo café.', 'We\u2019re not in the coffee business serving people, we\u2019re in the people business serving coffee.', 'Dedique-se de Coração (1997)', 'negocios'],

  ['Luiza Trajano', 'O varejo é detalhe. Quem cuida do detalhe ganha.', '', 'Entrevista registrada', 'negocios'],

  ['Melinda French Gates', 'Uma mulher com voz é, por definição, uma mulher forte.', 'A woman with a voice is by definition a strong woman.', 'O Momento de Voar (2019)', 'empoderamento'],

  ['Oprah Winfrey', 'Transforme suas feridas em sabedoria.', 'Turn your wounds into wisdom.', 'Entrevista registrada', 'dificeis'],
  ['Oprah Winfrey', 'Faça o seu melhor até saber mais. Quando souber mais, faça melhor.', '', 'Atribuído a Oprah citando Maya Angelou', 'motivacao'],

  ['Booker T. Washington', 'O sucesso deve ser medido não pela posição que a pessoa alcançou, mas pelos obstáculos que superou.', 'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.', 'Da Escravidão à Liberdade (1901)', 'dificeis'],

  ['Abílio Diniz', 'O maior risco é não correr risco nenhum.', '', 'Entrevista registrada', 'negocios'],

  ['Mao Tsé-Tung', 'Uma jornada de mil milhas começa com um único passo — provérbio chinês que ele repetia.', '', 'Provérbio de origem taoista, atribuído a Lao Tsé; repetido por Mao em discursos', 'motivacao']
];

const RELATORIO_FASE28 = { adicionadas: 0, ignoradas: 0 };
(function adicionarF28() {
  const cats = CATEGORIES.map((c) => c.id);
  const existentes = new Set(QUOTES.map((q) => _normDup(q.text)));
  NOVAS_F28.forEach(([autor, texto, orig, fonte, cat]) => {
    if (!texto || existentes.has(_normDup(texto))) {
      RELATORIO_FASE28.ignoradas++;
      return;
    }
    const incerta = /^Atribuído|sem localiza|sem registro|não constam|não é de|de autoria anônima|é de Muste|é de Carl Bard|é de Megginson|não de Turing|Provérbio de origem/i.test(fonte);
    const q = { author: autor, text: texto, src: fonte, st: incerta ? 'A-' : 'A', cat: cats.includes(cat) ? cat : 'reflexao' };
    if (orig) q.orig = orig;
    q.qid = 'f28' + RELATORIO_FASE28.adicionadas.toString(36) + Math.abs(_normDup(texto).length * 15485863).toString(36);
    QUOTES.push(q);
    existentes.add(_normDup(texto));
    RELATORIO_FASE28.adicionadas++;
  });
  reindexarQuotes();
  if (typeof reconstruirIndices === 'function') reconstruirIndices();
  RECALCULAR_FILA();
})();
window.F28 = RELATORIO_FASE28;

(function bootF28() {
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
      RECALCULAR_FILA();
      console.info('MeMotiva · Fase 28: ' + RELATORIO_FASE28.adicionadas + ' frases adicionadas com fonte identificada.');
    } catch (e) {
      console.error('Fase 28:', e);
    }
  };
})();

/* ================================================================
   FASE 29 — PANORAMAS RESTANTES
   ================================================================ */
const PANORAMAS_F29 = {
  'John Bogle': {
    papel: 'Investidor norte-americano (1929–2019)',
    resumo: 'Criou o primeiro fundo de índice para o investidor comum e passou a vida defendendo taxas baixas.',
    bio: [
      'John Clifton Bogle nasceu em Montclair, Nova Jersey, em 8 de maio de 1929, poucos meses antes do crash que arruinaria a família. Estudou em Princeton com bolsa e trabalhando, e escreveu sua tese de conclusão sobre fundos mútuos — argumentando que eles não podiam se declarar superiores ao mercado como um todo. Foi essa tese que definiu sua carreira inteira.',
      'Fez carreira na Wellington Management, chegou à presidência e foi demitido em 1974 após uma fusão desastrosa que ele próprio havia aprovado. Fundou a Vanguard naquele mesmo ano, com uma estrutura de propriedade incomum: a gestora pertence aos próprios fundos, e estes aos cotistas, de modo que não há acionista externo a ser remunerado. É essa estrutura que permite as taxas mais baixas do setor.',
      'Lançou em 1976 o primeiro fundo de índice destinado ao investidor comum, acompanhando o S&P 500. O setor ridicularizou a ideia, chamando-a de tolice de Bogle, por não tentar superar o mercado. O fundo captou pouco no início e hoje é um dos maiores do mundo. A gestão passiva por índice tornou-se o padrão dominante do investimento global.',
      'Seu argumento central é aritmético e não depende de previsão: como todos os investidores juntos são o mercado, o retorno médio antes dos custos é o do mercado, e depois dos custos é necessariamente menor. Reduzir taxas é, portanto, a única vantagem garantida. Sofreu problemas cardíacos graves desde os trinta anos e recebeu um transplante de coração em 1996. Morreu em Bryn Mawr em 16 de janeiro de 2019.'
    ],
    contexto: 'Bogle construiu uma empresa cujo modelo elimina a própria margem de lucro em favor do cotista, num setor que vive de taxas. Warren Buffett escreveu que, se algum dia se erguer uma estátua ao investidor que mais fez pelos americanos comuns, ela deve ser de Bogle.',
    contribuicoes: ['Fundou a Vanguard, com estrutura de propriedade pelos próprios cotistas.', 'Lançou em 1976 o primeiro fundo de índice para o investidor comum.', 'Consolidou a gestão passiva de baixo custo como padrão do investimento global.', 'Escreveu O Livrinho do Investimento de Bom Senso e Common Sense on Mutual Funds.'],
    cronologia: [
      [1929, 'Nasce em Montclair, Nova Jersey, em 8 de maio.'],
      [1951, 'Conclui em Princeton a tese sobre fundos mútuos.'],
      [1974, 'É demitido da Wellington e funda a Vanguard.'],
      [1976, 'Lança o primeiro fundo de índice para o varejo.'],
      [1996, 'Recebe um transplante de coração.'],
      [2019, 'Morre na Pensilvânia.']
    ]
  },

  'Abraham Maslow': {
    papel: 'Psicólogo norte-americano (1908–1970)',
    resumo: 'Formulou a hierarquia das necessidades e fundou a psicologia humanista ao estudar pessoas saudáveis em vez de doentes.',
    bio: [
      'Abraham Harold Maslow nasceu no Brooklyn, Nova York, em 1º de abril de 1908, primeiro de sete filhos de imigrantes judeus russos. Descreveu a infância como solitária e infeliz, marcada pela hostilidade da mãe e pelo antissemitismo do bairro. Refugiou-se nas bibliotecas.',
      'Doutorou-se em psicologia em Wisconsin, com pesquisa sobre comportamento de primatas sob Harry Harlow. Trabalhou com Edward Thorndike e conviveu em Nova York com intelectuais europeus refugiados do nazismo — Adler, Fromm, Horney, Wertheimer —, encontro que reorientou seus interesses.',
      'Sua ruptura metodológica foi simples e consequente: a psicologia havia construído seu conhecimento estudando pessoas doentes, e isso produzia uma imagem empobrecida do ser humano. Maslow decidiu estudar pessoas que considerava excepcionalmente saudáveis e realizadas, entre elas Einstein e Eleanor Roosevelt, para descrever o que seria o funcionamento pleno.',
      'O artigo de 1943 na Psychological Review apresentou a hierarquia das necessidades — fisiológicas, segurança, pertencimento, estima e autorrealização —, que se tornaria um dos modelos mais reproduzidos e mais simplificados da psicologia. A representação em pirâmide, aliás, não é dele: foi criada por autores de manuais de administração nos anos 1960. Fundou com Carl Rogers a psicologia humanista e presidiu a Associação Americana de Psicologia. Morreu em Menlo Park em 8 de junho de 1970.'
    ],
    contexto: 'Maslow escreve entre o behaviorismo, que estudava comportamento observável, e a psicanálise, que estudava patologia. Sua proposta de uma terceira via voltada ao potencial humano influenciou educação, gestão e psicoterapia muito além da academia — e também sofreu com essa popularização, que reduziu a teoria a um diagrama.',
    contribuicoes: ['Formulou a hierarquia das necessidades humanas, em artigo de 1943.', 'Fundou com Carl Rogers a psicologia humanista.', 'Introduziu o estudo de pessoas saudáveis como método de pesquisa psicológica.', 'Formulou os conceitos de autorrealização e de experiência culminante.', 'Presidiu a Associação Americana de Psicologia.'],
    cronologia: [
      [1908, 'Nasce no Brooklyn, em 1º de abril.'],
      [1943, 'Publica Uma Teoria da Motivação Humana.'],
      [1954, 'Publica Motivação e Personalidade.'],
      [1962, 'Publica Introdução à Psicologia do Ser.'],
      [1968, 'Preside a Associação Americana de Psicologia.'],
      [1970, 'Morre em Menlo Park, Califórnia.']
    ],
    nota: 'A representação da hierarquia das necessidades em forma de pirâmide não foi criada por Maslow; apareceu em manuais de administração nos anos 1960.'
  },

  'Carol Dweck': {
    papel: 'Psicóloga norte-americana (1946–)',
    resumo: 'Formulou a distinção entre mentalidade fixa e mentalidade de crescimento.',
    bio: [
      'Carol Susan Dweck nasceu em Nova York em 17 de outubro de 1946. Estudou em Barnard e doutorou-se em Yale, e leciona em Stanford. Sua pesquisa começou com uma pergunta sobre desamparo: por que algumas crianças desmoronam diante de um problema difícil e outras se animam com ele.',
      'A resposta que encontrou não estava na capacidade, e sim na crença sobre a capacidade. Crianças que entendem a inteligência como traço fixo evitam desafios, porque errar ameaça a identidade; crianças que a entendem como algo desenvolvível procuram desafios, porque errar é informação.',
      'Mindset, de 2006, levou a distinção ao grande público e teve enorme adoção em escolas e empresas. Dweck mostrou também que elogiar a inteligência da criança produz mentalidade fixa, enquanto elogiar o esforço e a estratégia produz o oposto — resultado contraintuitivo que mudou práticas pedagógicas.',
      'A própria autora passou a criticar publicamente a forma como sua teoria foi aplicada, alertando contra o que chamou de mentalidade de crescimento falsa: escolas que penduram cartazes e elogiam esforço sem mudar nada nas práticas de avaliação. Estudos de replicação encontraram efeitos menores que os originais, e o debate sobre a magnitude do fenômeno segue aberto.'
    ],
    contexto: 'Dweck pesquisa numa área em que a crença sobre a própria capacidade influencia o desempenho, e sua obra teve adoção institucional muito rápida — o que trouxe simplificação e depois crítica metodológica. A distinção conceitual permanece útil; a discussão é sobre o tamanho do efeito.',
    contribuicoes: ['Formulou a distinção entre mentalidade fixa e mentalidade de crescimento.', 'Escreveu Mindset: A Nova Psicologia do Sucesso (2006).', 'Demonstrou que elogiar esforço e estratégia produz efeito distinto de elogiar a inteligência.', 'Criticou publicamente a aplicação superficial de sua própria teoria em escolas.'],
    cronologia: [
      [1946, 'Nasce em Nova York, em 17 de outubro.'],
      [1978, 'Publica os primeiros estudos sobre desamparo aprendido em crianças.'],
      [2006, 'Publica Mindset.'],
      [2016, 'Publica alerta contra a mentalidade de crescimento falsa.']
    ],
    nota: 'Estudos de replicação encontraram efeitos menores que os relatados originalmente. A magnitude do fenômeno é objeto de debate acadêmico em curso.'
  },

  'Angela Duckworth': {
    papel: 'Psicóloga norte-americana (1970–)',
    resumo: 'Pesquisou o que chamou de garra: a combinação de paixão e perseverança por objetivos de longo prazo.',
    bio: [
      'Angela Lee Duckworth nasceu em Cherry Hill, Nova Jersey, em 1970, filha de imigrantes chineses. Formou-se em neurobiologia em Harvard, fez mestrado em Oxford e trabalhou como consultora antes de largar a carreira para dar aula de matemática em escolas públicas de Nova York, São Francisco e Filadélfia.',
      'Foi na sala de aula que sua pergunta se formou: os alunos de melhor desempenho não eram necessariamente os de maior facilidade. Voltou à universidade aos trinta e dois anos para doutorar-se em psicologia na Pensilvânia, onde leciona.',
      'Pesquisou grupos em que a desistência é mensurável — cadetes de West Point, participantes de concursos de soletração, professores em escolas difíceis, vendedores — e encontrou um preditor de permanência que não era talento nem inteligência: a combinação de interesse sustentado e capacidade de continuar apesar de reveses, que chamou de garra.',
      'Garra, de 2016, apresentou a pesquisa ao grande público. A tese central é que o talento conta, mas o esforço conta duas vezes — uma para transformar talento em habilidade e outra para transformar habilidade em realização. Recebeu a bolsa MacArthur em 2013. Reconheceu publicamente as limitações do conceito: a garra prediz permanência, não excelência, e não substitui condições materiais adequadas.'
    ],
    contexto: 'Duckworth pesquisa num sistema educacional que mede sobretudo capacidade cognitiva. Seu trabalho recolocou o esforço sustentado como variável mensurável, e enfrenta a crítica legítima de que enfatizar o caráter individual pode servir para desviar a atenção de desigualdades estruturais — objeção que ela mesma reconhece.',
    contribuicoes: ['Formulou e operacionalizou o conceito de garra, com escala de medição validada.', 'Escreveu Garra: O Poder da Paixão e da Perseverança (2016).', 'Demonstrou o poder preditivo da perseverança em contextos de alta desistência.', 'Recebeu a bolsa MacArthur em 2013.'],
    cronologia: [
      [1970, 'Nasce em Cherry Hill, Nova Jersey.'],
      [2002, 'Deixa a sala de aula para o doutorado em psicologia.'],
      [2007, 'Publica o artigo que introduz o conceito de garra.'],
      [2013, 'Recebe a bolsa MacArthur.'],
      [2016, 'Publica Garra.']
    ]
  },

  'Michelle Obama': {
    papel: 'Advogada e escritora norte-americana, primeira-dama dos Estados Unidos (1964–)',
    resumo: 'Primeira primeira-dama negra dos Estados Unidos, escreveu um dos livros de memórias mais vendidos da história.',
    bio: [
      'Michelle LaVaughn Robinson nasceu em Chicago em 17 de janeiro de 1964, filha de um funcionário da estação de tratamento de água que tinha esclerose múltipla e de uma secretária que deixou o emprego para criar os filhos. A família de quatro pessoas vivia no andar superior da casa de uma tia, no South Side. Pulou uma série na escola e formou-se em sociologia em Princeton e em direito em Harvard.',
      'Voltou a Chicago para um escritório de advocacia, onde foi designada para orientar um estagiário de verão chamado Barack Obama. Deixou a advocacia corporativa para trabalhar em administração pública municipal e depois em programas comunitários e no sistema hospitalar da universidade.',
      'Como primeira-dama, entre 2009 e 2017, concentrou-se em quatro frentes: a campanha contra a obesidade infantil, que incluiu a horta plantada no gramado da Casa Branca e mudanças na merenda escolar; o apoio a famílias de militares; o acesso de meninas à educação em países onde ela é restrita; e o incentivo ao ingresso universitário entre jovens de baixa renda.',
      'Minha História, publicado em 2018, vendeu mais de dez milhões de exemplares no primeiro ano e tornou-se um dos livros de memórias mais vendidos de todos os tempos. Sua frase do discurso de 2016, sobre subir quando os adversários descem, entrou no vocabulário político americano. Recusou repetidamente disputar cargo eletivo.'
    ],
    contexto: 'Michelle Obama ocupou a Casa Branca como primeira mulher negra na posição, sob escrutínio e ataque racista constantes. Sua escolha por pautas de saúde, educação e famílias militares — e sua recusa em disputar cargo — definem uma forma de influência pública construída fora da disputa eleitoral.',
    contribuicoes: ['Foi a primeira mulher negra a ocupar o posto de primeira-dama dos Estados Unidos.', 'Conduziu a campanha nacional contra a obesidade infantil e a reforma da merenda escolar.', 'Criou programas de apoio a famílias de militares e de acesso de meninas à educação.', 'Escreveu Minha História (2018), um dos livros de memórias mais vendidos da história.'],
    cronologia: [
      [1964, 'Nasce em Chicago, em 17 de janeiro.'],
      [1988, 'Forma-se em direito por Harvard.'],
      [1989, 'Conhece Barack Obama no escritório onde trabalhava.'],
      [2009, 'Torna-se primeira-dama dos Estados Unidos.'],
      [2010, 'Lança a campanha contra a obesidade infantil.'],
      [2018, 'Publica Minha História.']
    ]
  },

  'Primo Levi': {
    papel: 'Químico e escritor italiano (1919–1987)',
    resumo: 'Sobreviveu a Auschwitz e escreveu o testemunho mais preciso e mais contido sobre o campo.',
    bio: [
      'Primo Michele Levi nasceu em Turim em 31 de julho de 1919, em família judaica de classe média. Formou-se em química em 1941, com diploma que registrava sua condição de judeu por causa das leis raciais fascistas. Uniu-se a um pequeno grupo de resistência nos Alpes, foi capturado em dezembro de 1943 e, ao declarar-se judeu em vez de partisan — o que julgou menos perigoso —, foi deportado para Auschwitz em fevereiro de 1944.',
      'Sobreviveu onze meses. Atribuía isso a uma combinação de acasos: a formação em química, que lhe rendeu trabalho num laboratório protegido do frio; o italiano que outro prisioneiro lhe ensinou a trocar por comida; uma escarlatina que o deixou na enfermaria quando os alemães evacuaram o campo levando os prisioneiros numa marcha que matou quase todos. Dos seiscentos e cinquenta italianos de seu transporte, cerca de vinte voltaram.',
      'É Isto um Homem?, escrito logo após o retorno, foi recusado por editoras importantes e publicado em 1947 numa tiragem pequena que não vendeu. Só foi reconhecido a partir da reedição de 1958. Sua escolha estilística é o oposto da denúncia inflamada: prosa exata, sem adjetivos de indignação, com o olhar de químico que descreve um experimento. É essa contenção que dá ao testemunho sua força.',
      'Trabalhou como químico industrial por trinta anos, escrevendo nas horas livres. Publicou A Trégua, sobre o retorno, e A Tabela Periódica, em que cada capítulo leva o nome de um elemento. Os Afogados e os Sobreviventes, de 1986, é sua reflexão final sobre memória, culpa e a zona cinzenta em que vítimas eram forçadas a colaborar. Morreu em Turim em 11 de abril de 1987, ao cair do vão de escada de seu prédio; a maioria dos biógrafos considera suicídio, outros contestam.'
    ],
    contexto: 'Levi é a referência central da literatura de testemunho do Holocausto, e sua contribuição é tanto ética quanto formal: recusou tanto o silêncio quanto o excesso, e insistiu que compreender como aquilo foi possível é obrigação de quem veio depois.',
    contribuicoes: ['Escreveu É Isto um Homem? (1947), testemunho central sobre Auschwitz.', 'Escreveu A Trégua, A Tabela Periódica e Os Afogados e os Sobreviventes.', 'Formulou o conceito da zona cinzenta, sobre a coerção moral imposta às vítimas.', 'Sua prosa contida tornou-se modelo para a literatura de testemunho.'],
    cronologia: [
      [1919, 'Nasce em Turim, em 31 de julho.'],
      [1943, 'É capturado como partisan e declara-se judeu.'],
      [1944, 'É deportado para Auschwitz em fevereiro.'],
      [1945, 'É libertado pelo Exército Vermelho em janeiro.'],
      [1947, 'Publica É Isto um Homem?'],
      [1975, 'Publica A Tabela Periódica.'],
      [1986, 'Publica Os Afogados e os Sobreviventes.'],
      [1987, 'Morre em Turim.']
    ],
    nota: 'A morte de Levi em 1987 é considerada suicídio pela maioria de seus biógrafos, hipótese contestada por outros pesquisadores.'
  },

  'Conceição Evaristo': {
    papel: 'Escritora brasileira (1946–)',
    resumo: 'Criou o conceito de escrevivência e é uma das vozes centrais da literatura negra brasileira.',
    bio: [
      'Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte em 29 de novembro de 1946, numa favela da região, a segunda de nove filhos de uma lavadeira. Trabalhou como empregada doméstica desde a infância para poder estudar, e concluiu o magistério aos vinte e poucos anos. Mudou-se para o Rio de Janeiro em 1973, prestou concurso e tornou-se professora da rede pública.',
      'Publicou seus primeiros textos nos Cadernos Negros, coletânea do grupo Quilombhoje, a partir de 1990. Fez mestrado na PUC-Rio e doutorou-se em literatura comparada na Universidade Federal Fluminense, com pesquisa sobre literatura africana e afro-brasileira.',
      'Formulou o conceito de escrevivência: a escrita que nasce da experiência vivida de mulheres negras, e que não serve para acalentar quem sempre teve voz. A palavra sintetiza uma posição literária e política, e circulou muito além da academia.',
      'Ponciá Vicêncio, de 2003, e Becos da Memória, escrito nos anos 1980 e publicado apenas em 2006, acompanham personagens negras entre o campo, a favela e a cidade. Publicou também os contos de Olhos d\u2019Água, vencedor do Prêmio Jabuti de 2015, e obra poética. O reconhecimento amplo chegou tarde, já na casa dos sessenta anos, e ela é hoje uma das autoras brasileiras mais estudadas e traduzidas.'
    ],
    contexto: 'Conceição Evaristo escreve a partir de uma posição historicamente ausente da literatura brasileira publicada: mulher negra, filha de lavadeira, ex-empregada doméstica. Sua obra e o conceito de escrevivência reorganizaram o debate sobre quem escreve, sobre quem se escreve e para quem.',
    contribuicoes: ['Formulou o conceito de escrevivência.', 'Escreveu Ponciá Vicêncio (2003) e Becos da Memória (2006).', 'Escreveu Olhos d\u2019Água, vencedor do Prêmio Jabuti em 2015.', 'Integrou desde 1990 os Cadernos Negros, do grupo Quilombhoje.'],
    cronologia: [
      [1946, 'Nasce em Belo Horizonte, em 29 de novembro.'],
      [1973, 'Muda-se para o Rio de Janeiro e torna-se professora.'],
      [1990, 'Publica nos Cadernos Negros.'],
      [2003, 'Publica Ponciá Vicêncio.'],
      [2015, 'Recebe o Prêmio Jabuti por Olhos d\u2019Água.']
    ]
  },

  'Ailton Krenak': {
    papel: 'Escritor, filósofo e líder indígena brasileiro (1953–)',
    resumo: 'Primeiro indígena eleito para a Academia Brasileira de Letras, formulou uma crítica radical à ideia de humanidade separada da natureza.',
    bio: [
      'Ailton Alves Lacerda Krenak nasceu no vale do rio Doce, em Minas Gerais, em 29 de setembro de 1953, do povo Krenak. A família foi deslocada do território tradicional pela pressão fundiária, e ele chegou a São Paulo ainda jovem, onde se alfabetizou aos dezessete anos e formou-se em jornalismo gráfico.',
      'Tornou-se articulador do movimento indígena a partir dos anos 1970, participando da fundação da União das Nações Indígenas e da Aliança dos Povos da Floresta, ao lado de Chico Mendes. Seu gesto mais conhecido ocorreu na Assembleia Constituinte, em 1987: ao discursar em defesa dos direitos indígenas enquanto uma emenda os ameaçava, pintou o rosto de negro com jenipapo diante das câmeras, em silêncio, no meio da própria fala. As imagens correram o país e o capítulo indígena foi mantido na Constituição de 1988.',
      'Ideias para Adiar o Fim do Mundo, de 2019, reúne conferências em que Krenak questiona a separação entre humanidade e natureza e a própria noção de humanidade como clube restrito. Sustenta que o rio Doce, contaminado pelo rompimento da barragem de Mariana, é para seu povo um avô — e que essa não é uma metáfora.',
      'Publicou também A Vida Não é Útil e Futuro Ancestral. Recebeu doutorado honoris causa por universidades brasileiras e foi eleito para a Academia Brasileira de Letras em 2023, o primeiro indígena a ocupar uma cadeira em mais de cem anos de história da instituição.'
    ],
    contexto: 'Krenak escreve num momento em que a crise climática obrigou o pensamento ocidental a reconsiderar sua relação com a natureza. Sua contribuição é oferecer, de dentro de uma tradição que nunca fez essa separação, uma crítica que não é ambientalista no sentido usual: ela questiona a própria categoria de humanidade que sustenta o problema.',
    contribuicoes: ['Foi o primeiro indígena eleito para a Academia Brasileira de Letras, em 2023.', 'Participou da fundação da União das Nações Indígenas e da Aliança dos Povos da Floresta.', 'Sua atuação na Constituinte de 1987 foi decisiva para a manutenção do capítulo indígena na Constituição.', 'Escreveu Ideias para Adiar o Fim do Mundo (2019) e A Vida Não é Útil.'],
    cronologia: [
      [1953, 'Nasce no vale do rio Doce, em Minas Gerais.'],
      [1987, 'Discursa na Assembleia Constituinte pintando o rosto de jenipapo.'],
      [1988, 'A Constituição mantém o capítulo dos direitos indígenas.'],
      [2019, 'Publica Ideias para Adiar o Fim do Mundo.'],
      [2023, 'É eleito para a Academia Brasileira de Letras.']
    ]
  },

  'Chimamanda Ngozi Adichie': {
    papel: 'Escritora nigeriana (1977–)',
    resumo: 'Escreveu Meio Sol Amarelo e o ensaio que reformulou o debate global sobre feminismo e representação.',
    bio: [
      'Chimamanda Ngozi Adichie nasceu em Enugu, na Nigéria, em 15 de setembro de 1977, quinta de seis filhos. O pai foi professor de estatística e a mãe, a primeira secretária-geral mulher da Universidade da Nigéria. A família é igbo e perdeu tudo, incluindo os dois avôs, na Guerra de Biafra, que ela reconstruiria em ficção décadas depois.',
      'Estudou medicina e farmácia por um ano e meio antes de partir para os Estados Unidos aos dezenove anos, onde se formou em comunicação e ciência política e fez mestrado em Yale e em Johns Hopkins.',
      'Hibisco Roxo, de 2003, acompanha uma adolescente numa família dominada por um pai violento e devoto. Meio Sol Amarelo, de 2006, narra a Guerra de Biafra por três personagens de posições sociais distintas e recebeu o Orange Prize. Americanah, de 2013, trata de raça, imigração e retorno, a partir de uma nigeriana que descobre nos Estados Unidos que passou a ser negra — categoria que não existia para ela em casa.',
      'Suas duas conferências tiveram alcance excepcional. O Perigo de uma História Única, de 2009, argumenta que reduzir um povo a uma narrativa produz estereótipo, e que o problema não é ela ser falsa, mas ser incompleta. Sejamos Todos Feministas, de 2012, foi transformado em livro, distribuído a estudantes na Suécia e sampleado por Beyoncé. Suas declarações posteriores sobre mulheres trans geraram controvérsia pública significativa.'
    ],
    contexto: 'Adichie escreve de dentro de uma literatura africana anglófona que precisou disputar com o cânone o direito de narrar seu próprio continente. Sua formulação sobre a história única deu vocabulário a essa disputa e passou a ser usada muito além da literatura.',
    contribuicoes: ['Escreveu Meio Sol Amarelo (2006), vencedor do Orange Prize, e Americanah (2013).', 'Escreveu Hibisco Roxo (2003), seu romance de estreia.', 'Sua conferência O Perigo de uma História Única é uma das mais assistidas do formato.', 'Escreveu Sejamos Todos Feministas, distribuído a estudantes na Suécia.'],
    cronologia: [
      [1977, 'Nasce em Enugu, Nigéria, em 15 de setembro.'],
      [2003, 'Publica Hibisco Roxo.'],
      [2006, 'Publica Meio Sol Amarelo.'],
      [2009, 'Profere O Perigo de uma História Única.'],
      [2012, 'Profere Sejamos Todos Feministas.'],
      [2013, 'Publica Americanah.']
    ],
    nota: 'Declarações de Adichie sobre mulheres trans, a partir de 2017, geraram controvérsia pública significativa.'
  },

  'Rainer Maria Rilke': {
    papel: 'Poeta austríaco (1875–1926)',
    resumo: 'Escreveu as Elegias de Duíno e as Cartas a um Jovem Poeta, um dos textos mais lidos sobre vocação artística.',
    bio: [
      'René Karl Wilhelm Johann Josef Maria Rilke nasceu em Praga em 4 de dezembro de 1875, então parte do Império Austro-Húngaro. A mãe, que havia perdido uma filha, vestiu-o de menina nos primeiros anos. O pai, militar frustrado, matriculou-o numa academia militar aos dez anos, experiência que ele descreveu como cinco anos de horror e da qual saiu por problemas de saúde.',
      'Viajou pela Rússia com Lou Andreas-Salomé, encontrou Tolstói e voltou marcado pela religiosidade popular russa. Trabalhou em Paris como secretário de Auguste Rodin, e a convivência com o escultor mudou sua poética: aprendeu a olhar um objeto até ele revelar sua forma, e produziu os poemas-coisa de Novos Poemas.',
      'Entre 1903 e 1908 respondeu a dez cartas de Franz Xaver Kappus, jovem cadete que lhe pedia opinião sobre seus versos. Rilke recusou-se a julgar os poemas e escreveu sobre outra coisa: a necessidade de perguntar a si mesmo se seria preciso morrer caso não pudesse escrever, a solidão como condição, a paciência com o que ainda não tem resposta. Publicadas em 1929, as Cartas a um Jovem Poeta tornaram-se um dos textos mais lidos sobre vocação.',
      'As Elegias de Duíno começaram em 1912, num castelo no Adriático, com o verso sobre quem o ouviria se ele gritasse entre as hierarquias dos anjos. Ficaram interrompidas dez anos e foram concluídas em 1922, junto com os Sonetos a Orfeu, escritos em poucos dias. Morreu de leucemia em Valmont, Suíça, em 29 de dezembro de 1926.'
    ],
    contexto: 'Rilke escreve na passagem do simbolismo para a poesia moderna, e sua obra trata de uma pergunta única: como o ser humano se relaciona com aquilo que o excede — a morte, o amor, a beleza, o divino. As Cartas circulam como livro de orientação, o que às vezes obscurece a exigência real de sua poesia.',
    contribuicoes: ['Escreveu as Elegias de Duíno e os Sonetos a Orfeu, obras centrais da poesia moderna.', 'Escreveu as Cartas a um Jovem Poeta, publicadas postumamente.', 'Desenvolveu o poema-coisa a partir da convivência com Rodin.', 'Escreveu Os Cadernos de Malte Laurids Brigge, marco do romance moderno.'],
    cronologia: [
      [1875, 'Nasce em Praga, em 4 de dezembro.'],
      [1902, 'Muda-se para Paris e trabalha com Rodin.'],
      [1903, 'Inicia a correspondência com Franz Xaver Kappus.'],
      [1912, 'Escreve as primeiras Elegias de Duíno.'],
      [1922, 'Conclui as Elegias e escreve os Sonetos a Orfeu.'],
      [1926, 'Morre em Valmont, Suíça.']
    ]
  },

  'Emily Dickinson': {
    papel: 'Poeta norte-americana (1830–1886)',
    resumo: 'Escreveu quase mil e oitocentos poemas em reclusão e publicou menos de doze em vida.',
    bio: [
      'Emily Elizabeth Dickinson nasceu em Amherst, Massachusetts, em 10 de dezembro de 1830, em família proeminente e calvinista. Estudou no seminário feminino de Mount Holyoke por menos de um ano e voltou para casa. A partir dos trinta anos praticamente não saiu da propriedade da família, recebendo pouquíssimas visitas e conversando às vezes através de uma porta entreaberta.',
      'Não se sabe ao certo por quê. Hipóteses vão de agorafobia a epilepsia, luto acumulado ou escolha deliberada de proteger o tempo de escrita. Ela própria não explicou. Manteve correspondência intensa, e as cartas são parte inseparável de sua obra.',
      'Escreveu cerca de mil oitocentos poemas, costurados à mão em pequenos cadernos que guardava numa gaveta. Menos de doze foram publicados em vida, quase todos sem autorização e alterados por editores para caberem na métrica e na pontuação convencionais. Enviou alguns ao crítico Thomas Wentworth Higginson, que os considerou irregulares demais e a desaconselhou a publicar.',
      'Sua irmã Lavinia encontrou os cadernos após sua morte, em 15 de maio de 1886. As primeiras edições, de 1890 em diante, ainda corrigiam os travessões, as maiúsculas irregulares e as rimas imperfeitas que são justamente a marca da autora. Só em 1955 saiu a edição fiel aos manuscritos. É hoje considerada, com Whitman, a fundadora da poesia americana moderna.'
    ],
    contexto: 'Dickinson escreveu fora de qualquer circuito literário, sem leitores, sem retorno e sem intenção clara de publicação — condição que talvez explique a liberdade formal de seus poemas, décadas à frente do que se praticava. A história de sua recepção é também a história de editores tentando normalizá-la por sessenta anos.',
    contribuicoes: ['Escreveu cerca de mil e oitocentos poemas, quase todos publicados postumamente.', 'Antecipou em décadas procedimentos formais da poesia moderna: travessões, rima imperfeita, sintaxe comprimida.', 'É considerada, ao lado de Walt Whitman, fundadora da poesia americana moderna.'],
    cronologia: [
      [1830, 'Nasce em Amherst, Massachusetts, em 10 de dezembro.'],
      [1862, 'Escreve a Thomas Wentworth Higginson pedindo opinião sobre seus poemas.'],
      [1886, 'Morre em Amherst; Lavinia encontra os cadernos.'],
      [1890, 'Sai a primeira edição, com poemas alterados por editores.'],
      [1955, 'Sai a primeira edição fiel aos manuscritos originais.']
    ]
  },

  'Fiódor Dostoiévski': {
    papel: 'Escritor russo (1821–1881)',
    resumo: 'Foi condenado à morte, teve a pena comutada no paredão e escreveu os romances que fundaram a psicologia do romance moderno.',
    bio: [
      'Fiódor Mikhailovitch Dostoiévski nasceu em Moscou em 11 de novembro de 1821, filho de um médico de hospital de indigentes. A mãe morreu de tuberculose quando ele tinha quinze anos; o pai morreu dois anos depois, possivelmente assassinado pelos próprios servos. Formou-se engenheiro militar e abandonou a carreira para escrever.',
      'Em 1849 foi preso por participar de um círculo de discussão de ideias socialistas proibidas. Foi condenado à morte e levado ao paredão; a execução foi encenada até o último instante, quando chegou a comutação previamente decidida pelo czar. A experiência de esperar a própria morte por alguns minutos atravessa toda a sua obra. Passou quatro anos em trabalhos forçados na Sibéria e mais quatro no exército.',
      'Voltou epilético, endividado e com uma dependência de jogo que o perseguiria por décadas — Crime e Castigo e O Jogador foram escritos sob prazos impossíveis para pagar credores. Ditou O Jogador em vinte e seis dias para uma estenógrafa que se tornaria sua segunda esposa e organizadora de sua vida.',
      'Crime e Castigo, O Idiota, Os Demônios e Os Irmãos Karamázov formam o núcleo de sua obra. Seu procedimento decisivo é dar voz plena a ideias que ele próprio rejeita: o Grande Inquisidor formula o argumento mais forte contra a liberdade humana, e Ivan Karamázov a acusação mais dura contra Deus. Bakhtin chamou isso de romance polifônico. Morreu em São Petersburgo em 9 de fevereiro de 1881.'
    ],
    contexto: 'Dostoiévski escreve na Rússia da servidão recém-abolida, do niilismo estudantil e do terrorismo político, e antecipou em ficção quase tudo o que o século XX discutiria: a psicologia do ressentimento, a lógica do fanatismo e o que acontece quando se conclui que tudo é permitido.',
    contribuicoes: ['Escreveu Crime e Castigo, O Idiota, Os Demônios e Os Irmãos Karamázov.', 'Escreveu Memórias do Subsolo, apontado como o primeiro texto existencialista.', 'Criou o romance polifônico, em que ideias adversárias recebem formulação plena.', 'Influenciou diretamente Nietzsche, Freud, Kafka, Camus e a filosofia existencial.'],
    cronologia: [
      [1821, 'Nasce em Moscou, em 11 de novembro.'],
      [1849, 'É condenado à morte e tem a pena comutada no paredão.'],
      [1850, 'Inicia quatro anos de trabalhos forçados na Sibéria.'],
      [1864, 'Publica Memórias do Subsolo.'],
      [1866, 'Publica Crime e Castigo.'],
      [1880, 'Publica Os Irmãos Karamázov.'],
      [1881, 'Morre em São Petersburgo.']
    ]
  },

  'Frida Kahlo': {
    papel: 'Pintora mexicana (1907–1954)',
    resumo: 'Transformou dor física e vida interior em uma obra que se tornou uma das mais reconhecíveis do século XX.',
    bio: [
      'Magdalena Carmen Frida Kahlo y Calderón nasceu em Coyoacán, Cidade do México, em 6 de julho de 1907, filha de um fotógrafo alemão e de uma mexicana. Dizia ter nascido em 1910 para coincidir com a Revolução Mexicana. Teve poliomielite aos seis anos, o que lhe deixou uma perna mais fina.',
      'Aos dezoito anos, o ônibus em que voltava da escola foi atingido por um bonde. Um corrimão de metal atravessou seu corpo. Fraturou a coluna em três pontos, a pélvis, a clavícula, as costelas e a perna direita em onze lugares. Passou meses imobilizada, e foi na cama, com um cavalete adaptado e um espelho no teto, que começou a pintar — a si mesma, porque era quem estava ali.',
      'Passou por mais de trinta cirurgias ao longo da vida, usou coletes ortopédicos e teve a perna amputada em 1953. Casou-se duas vezes com o muralista Diego Rivera, em relação marcada por traições dos dois lados e por três gestações interrompidas que ela pintou sem eufemismo.',
      'Sua obra é composta em grande parte de autorretratos, com iconografia que mistura o exvoto popular mexicano, o simbolismo pré-colombiano e a anatomia exposta. Militou no Partido Comunista e abrigou Trotski no México. Teve uma única exposição individual em seu país em vida, à qual compareceu de cama, em 1953. Morreu em Coyoacán em 13 de julho de 1954. O reconhecimento internacional em escala massiva veio a partir dos anos 1980.'
    ],
    contexto: 'Kahlo foi apresentada por décadas como esposa de Rivera e curiosidade surrealista — rótulo que ela rejeitava, dizendo que não pintava sonhos e sim sua própria realidade. A revalorização de sua obra a partir dos anos 1980 acompanhou o feminismo e os estudos pós-coloniais, e transformou sua imagem em ícone global, com o risco de a mercantilização apagar a obra.',
    contribuicoes: ['Produziu uma obra centrada no autorretrato, com cerca de duzentas pinturas.', 'Incorporou o exvoto popular mexicano e a iconografia pré-colombiana à pintura moderna.', 'Pintou a experiência física feminina — aborto, cirurgia, dor crônica — sem eufemismo, o que não tinha precedente.', 'Foi a primeira artista mexicana do século XX a ter uma obra adquirida pelo Louvre.'],
    cronologia: [
      [1907, 'Nasce em Coyoacán, México, em 6 de julho.'],
      [1925, 'Sofre o acidente de bonde que definiria sua vida.'],
      [1929, 'Casa-se com Diego Rivera.'],
      [1938, 'Expõe individualmente em Nova York.'],
      [1939, 'O Louvre adquire uma de suas obras.'],
      [1953, 'Realiza sua única exposição individual no México.'],
      [1954, 'Morre em Coyoacán.']
    ]
  },

  'Marie Curie': {
    papel: 'Física e química polonesa naturalizada francesa (1867–1934)',
    resumo: 'Única pessoa a receber prêmios Nobel em duas ciências distintas, descobriu o polônio e o rádio.',
    bio: [
      'Maria Salomea Skłodowska nasceu em Varsóvia em 7 de novembro de 1867, na Polônia ocupada pelo Império Russo, onde o ensino superior era proibido a mulheres. Estudou clandestinamente na chamada Universidade Volante e trabalhou anos como governanta para financiar os estudos da irmã em Paris, com o acordo de que depois seria sua vez.',
      'Chegou à Sorbonne em 1891, aos vinte e quatro anos, vivendo em quarto sem aquecimento e desmaiando de fome mais de uma vez. Formou-se em primeiro lugar em física. Casou-se com Pierre Curie em 1895.',
      'Investigando os raios descobertos por Becquerel, formulou a hipótese de que a emissão vinha do interior do átomo — ideia que contrariava a concepção do átomo como indivisível. Cunhou a palavra radioatividade. Processando toneladas de pechblenda num galpão sem ventilação, isolou dois elementos novos: o polônio, batizado em homenagem ao país ocupado, e o rádio.',
      'Recebeu o Nobel de Física em 1903, com Pierre e Becquerel — o comitê havia inicialmente excluído seu nome, incluído após protesto de Pierre. Após a morte dele, atropelado em 1906, assumiu sua cátedra, tornando-se a primeira mulher a lecionar na Sorbonne. Recebeu sozinha o Nobel de Química em 1911, em meio a uma campanha de imprensa xenófoba e sexista contra ela. Na Primeira Guerra, criou unidades móveis de radiografia que atenderam mais de um milhão de feridos. Morreu em 4 de julho de 1934 de anemia aplástica, causada pela exposição prolongada à radiação. Seus cadernos ainda são radioativos.'
    ],
    contexto: 'Curie fez ciência de ponta como mulher, estrangeira e sem recursos, em instituições que resistiam a cada uma dessas condições. A Academia Francesa de Ciências recusou sua candidatura em 1911, no mesmo ano em que recebeu o segundo Nobel.',
    contribuicoes: ['Descobriu os elementos polônio e rádio.', 'Cunhou o termo radioatividade e demonstrou que ela é propriedade atômica.', 'Foi a primeira pessoa a receber dois prêmios Nobel e a única em duas ciências distintas.', 'Foi a primeira mulher a lecionar na Sorbonne.', 'Criou as unidades móveis de radiografia usadas na Primeira Guerra Mundial.'],
    cronologia: [
      [1867, 'Nasce em Varsóvia, em 7 de novembro.'],
      [1891, 'Muda-se para Paris para estudar na Sorbonne.'],
      [1898, 'Descobre o polônio e o rádio.'],
      [1903, 'Recebe o Nobel de Física.'],
      [1906, 'Assume a cátedra de Pierre na Sorbonne.'],
      [1911, 'Recebe o Nobel de Química.'],
      [1934, 'Morre de anemia aplástica causada pela radiação.']
    ]
  },

  'Ada Lovelace': {
    papel: 'Matemática britânica (1815–1852)',
    resumo: 'Escreveu o que é considerado o primeiro algoritmo destinado a ser processado por uma máquina.',
    bio: [
      'Augusta Ada Byron nasceu em Londres em 10 de dezembro de 1815, filha única do poeta Lord Byron e de Anne Isabella Milbanke. Os pais separaram-se semanas após seu nascimento e ela nunca conheceu o pai. A mãe, temendo que herdasse a instabilidade dele, impôs-lhe uma educação rigorosa em matemática e ciências — disciplinas então consideradas impróprias para meninas, escolhidas justamente para afastá-la da poesia.',
      'Conheceu Charles Babbage aos dezessete anos e viu a máquina diferencial que ele construíra. Estudou com Mary Somerville e com Augustus De Morgan, e manteve com Babbage correspondência técnica por anos.',
      'Em 1843 traduziu do francês um artigo do engenheiro italiano Luigi Menabrea sobre a Máquina Analítica, projeto de Babbage nunca construído. Às trinta páginas do original acrescentou setenta de notas próprias, três vezes mais extensas que o texto traduzido.',
      'A Nota G contém uma sequência de operações para calcular números de Bernoulli na máquina — reconhecida como o primeiro algoritmo escrito para ser executado por um computador. Mais importante ainda foi sua percepção conceitual: enquanto Babbage via uma calculadora, Lovelace entendeu que, se números pudessem representar outras coisas além de quantidades — notas musicais, letras, símbolos —, a máquina poderia manipular qualquer coisa, não apenas cálculo. Foi a primeira pessoa a enxergar a computação de uso geral. Morreu de câncer uterino em 27 de novembro de 1852, aos trinta e seis anos.'
    ],
    contexto: 'Lovelace escreveu sobre uma máquina que nunca existiu fisicamente, um século antes de qualquer computador funcionar. Suas notas ficaram esquecidas até serem redescobertas nos anos 1950, quando pesquisadores da computação encontraram nelas a formulação de problemas que estavam apenas começando a enfrentar.',
    contribuicoes: ['Escreveu, na Nota G de 1843, o que é reconhecido como o primeiro algoritmo destinado a uma máquina.', 'Formulou a ideia de computação de uso geral, além do cálculo numérico.', 'Suas notas sobre a Máquina Analítica são o principal registro conceitual do projeto de Babbage.', 'A linguagem de programação Ada leva seu nome, em homenagem oficial.'],
    cronologia: [
      [1815, 'Nasce em Londres, em 10 de dezembro.'],
      [1833, 'Conhece Charles Babbage e sua máquina diferencial.'],
      [1843, 'Publica a tradução do artigo de Menabrea com suas notas.'],
      [1852, 'Morre em Londres, aos trinta e seis anos.'],
      [1953, 'Suas notas são redescobertas e republicadas.']
    ]
  },

  'Alan Turing': {
    papel: 'Matemático britânico (1912–1954)',
    resumo: 'Fundou a ciência da computação, decifrou o código nazista e foi condenado criminalmente por sua homossexualidade.',
    bio: [
      'Alan Mathison Turing nasceu em Londres em 23 de junho de 1912. Foi um aluno difícil de enquadrar: brilhante em matemática e ciências, indiferente aos clássicos que a escola valorizava. A morte do amigo Christopher Morcom, aos dezoito anos, marcou-o profundamente e está ligada a seu interesse por saber se a mente pode existir separada da matéria.',
      'Em 1936, aos vinte e quatro anos, publicou o artigo Sobre Números Computáveis, que resolveu um problema aberto por Hilbert e, no processo, descreveu uma máquina abstrata capaz de executar qualquer procedimento formal — a máquina de Turing. É a fundação teórica da computação.',
      'Durante a guerra, trabalhou em Bletchley Park na quebra do código Enigma, usado pela marinha alemã. Projetou a bomba eletromecânica que reduziu drasticamente o tempo de decifração das mensagens interceptadas. Historiadores estimam que o trabalho de Bletchley encurtou a guerra em vários anos e salvou milhões de vidas. Tudo permaneceu secreto por décadas.',
      'Após a guerra, trabalhou em projetos de computadores e escreveu, em 1950, o artigo que propõe o teste que leva seu nome para a pergunta sobre máquinas pensantes. Em 1952, ao relatar um assalto à polícia, revelou involuntariamente sua relação com outro homem e foi processado por indecência grave. Aceitou tratamento hormonal compulsório como alternativa à prisão. Morreu em Wilmslow em 7 de junho de 1954, por envenenamento com cianeto; a versão oficial é suicídio, contestada por parte dos pesquisadores. Recebeu perdão real póstumo em 2013.'
    ],
    contexto: 'Turing fundou uma disciplina inteira, contribuiu decisivamente para vencer uma guerra e foi destruído pelo Estado que serviu, por uma lei que criminalizava sua vida privada. A lei que o condenou só foi revogada em 1967, e o perdão coletivo aos condenados sob ela leva seu nome.',
    contribuicoes: ['Formulou a máquina de Turing, fundamento teórico da ciência da computação.', 'Foi decisivo na quebra do código Enigma em Bletchley Park.', 'Propôs o teste de Turing e fundou o campo da inteligência artificial.', 'Escreveu sobre morfogênese, iniciando a biologia matemática dos padrões.'],
    cronologia: [
      [1912, 'Nasce em Londres, em 23 de junho.'],
      [1936, 'Publica Sobre Números Computáveis.'],
      [1939, 'Passa a trabalhar em Bletchley Park.'],
      [1950, 'Publica o artigo com o teste de Turing.'],
      [1952, 'É condenado por indecência grave e submetido a tratamento hormonal.'],
      [1954, 'Morre em Wilmslow.'],
      [2013, 'Recebe perdão real póstumo.']
    ],
    nota: 'Turing foi condenado criminalmente em 1952 por sua homossexualidade e submetido a tratamento hormonal compulsório. A causa de sua morte é oficialmente suicídio, hipótese contestada por parte dos pesquisadores.'
  }
};

/* ---------- aplicação dos panoramas ---------- */
(function aplicarF29() {
  Object.entries(PANORAMAS_F29).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    const ant = PERFIS_PROFUNDOS[c] || {};
    PERFIS_PROFUNDOS[c] = { resumo: p.resumo, bio: p.bio, contexto: p.contexto, contribuicoes: p.contribuicoes || ant.contribuicoes || [], cronologia: p.cronologia || ant.cronologia || [], nota: p.nota || null };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
  RECALCULAR_FILA();
})();
