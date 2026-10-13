/* MeMotiva — curadoria/37-fases100-118-registro-lacunas.js
   Fases 100–118 — registro permanente de remoções, histórico, lacunas, auditorias de atribuição e versículos.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

(function () {
  /* Fase 100 — registro permanente de remoções e decisões "não inserir"
    (sessão de 02/10/2026, auditoria do PR #2). Até aqui o histórico de
    remoções vivia só em prosa no CHECKPOINT; nada impedia reinserção
    inadvertida. Este registro é lido por CURADORIA_BLOQUEADA(texto), que
    toda fase futura de inclusão deve consultar antes de adicionar uma
    frase, e é exportado em remocoes-curadoria.csv pelo
    CURADORIA_EXPORT_CSV. A guarda compara texto normalizado (não pega
    variantes de tradução): o registro semântico continua no CHECKPOINT.
    Cada item: tipo 'removida' (estava no acervo) ou 'nao-inserir'. */
  var REG = [
    {
      data: '2026-10-02',
      lote: 'PR #2 — auditoria editorial',
      origem: 'decisão desta sessão',
      tipo: 'removida',
      autor: 'Plutarco',
      prefixo: 'A mente não é um vaso',
      texto: 'A mente não é um vaso a ser enchido, mas uma lenha a ser acesa.',
      motivo: 'Decisão editorial do proprietário: contração moderna; o texto de "Sobre o Ouvir" (Moralia) é outro e não sustenta a redação (apuração do Quote Investigator citada em sessão anterior). Não reinserir sem nova comprovação documental e revisão explícita.',
      fontes: 'CHECKPOINT (2º lote, 28/09/2026); decisão do proprietário em 02/10/2026'
    },
    {
      data: '2026-10-02',
      lote: 'PR #2 — auditoria editorial',
      origem: 'decisão desta sessão',
      tipo: 'removida',
      autor: 'Santos Dumont',
      prefixo: 'Não é a máquina que voa',
      texto: 'Não é a máquina que voa. É o homem.',
      motivo:
        'Não comprovada após investigação: ausente da parte I de "O que eu vi, o que nós veremos" (1918, parte I lida na Wikisource, cuja transcrição é "revista" mas não toda validada), da seleção de textos da ABL e da seção "Verificadas" do Wikiquote PT; buscas em português, francês e inglês só devolveram coletâneas sem fonte. Não lidos: parte II do livro de 1918, "Dans l\'air" (1904) e "My Airships". Fonte antiga no acervo era genérica ("escritos e depoimentos").',
      fontes: 'pt.wikisource.org O_que_eu_vi/Parte_I; academia.org.br textos-escolhidos; pt.wikiquote.org Santos_Dumont; buscas web 02/10/2026'
    },
    {
      data: '2026-10-02',
      lote: 'PR #2 — auditoria editorial',
      origem: 'decisão do proprietário',
      tipo: 'nao-inserir',
      autor: 'Júlio César',
      prefixo: '',
      texto: 'Pensei que minha mulher não devia nem sequer estar sob suspeita.',
      motivo: 'Decisão editorial do proprietário: palavras de César relatadas por Plutarco (Vida de César, 10; trad. Perrin). Não criar registro, nem para César nem para Plutarco, sem nova decisão.',
      fontes: 'Plutarco, Vida de César, cap. 10 (confirmada em 02/10/2026); decisão do proprietário'
    }
  ];
  var norm = memoTexto(function (s) {
    return String(s)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  });
  /* Registro permanente de tudo o que saiu (ou foi recusado) do acervo.
     Cada entrada: data, lote, autor, texto, tipo (removida, variante-removida,
     substituida, nao-inserir, historico-*…), motivo, fontes. É exportado em
     curadoria/remocoes-curadoria.csv. CURADORIA_BLOQUEADA(texto) impede que um
     texto removido volte por engano numa fase futura. */
  window.CURADORIA_REMOVIDAS = REG;
  window.CURADORIA_BLOQUEADA = function (texto) {
    var n = norm(texto);
    return REG.some(function (r) {
      return ['removida', 'nao-inserir', 'removida-antes-do-merge', 'variante-removida', 'historico-removida', 'historico-quarentena'].indexOf(r.tipo) > -1 && norm(r.texto) === n;
    });
  };
  var csvCell = function (v) {
    v = String(v == null ? '' : v);
    return /[;"\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  };
  function remocoesCSV() {
    var cab = ['data_commit', 'lote', 'commit_base', 'commit_remocao', 'autor', 'frase', 'tipo', 'motivo', 'fontes_consultadas', 'qid_no_commit_base', 'fonte_anterior', 'status_anterior', 'categoria_anterior', 'contraparte_remanescente', 'similaridade_contraparte', 'origem_do_registro'];
    var campos = ['data', 'lote', 'commit_base', 'commit_remocao', 'autor', 'texto', 'tipo', 'motivo', 'fontes', 'qid', 'fonte_anterior', 'status_anterior', 'categoria_anterior', 'contraparte', 'similaridade', 'origem'];
    return (
      '\ufeff' +
      cab.join(';') +
      '\n' +
      REG.map(function (r) {
        return campos
          .map(function (c) {
            return csvCell(r[c]);
          })
          .join(';');
      }).join('\n') +
      '\n'
    );
  }
  window.CURADORIA_REMOVIDAS_CSV = remocoesCSV;
  var exportOrig = window.CURADORIA_EXPORT_CSV;
  if (typeof exportOrig === 'function') {
    window.CURADORIA_EXPORT_CSV = function (download) {
      var r = exportOrig.apply(this, arguments) || {};
      r['remocoes-curadoria.csv'] = remocoesCSV();
      if (download && typeof Blob !== 'undefined') {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([r['remocoes-curadoria.csv']], { type: 'text/csv;charset=utf-8' }));
        a.download = 'remocoes-curadoria.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      return r;
    };
  }
  function atualizarContadores() {
    var elQ = document.getElementById('statQuotes'),
      elA = document.getElementById('statAuthors');
    if (elQ) elQ.textContent = QUOTES.length + '+';
    if (elA && typeof AUTOR_INDEX !== 'undefined') elA.textContent = AUTOR_INDEX.size + '+';
  }
  window.CURADORIA_ATUALIZAR_CONTADORES = atualizarContadores;
  function aplicar() {
    var feitas = 0,
      naoAchadas = [];
    REG.forEach(function (r) {
      if (r.tipo !== 'removida' || !r.prefixo) return;
      var q = QUOTES.filter(function (x) {
        return x.author === r.autor && x.text.indexOf(r.prefixo) === 0;
      })[0];
      if (!q) {
        naoAchadas.push(r.autor + ' — ' + r.prefixo);
        return;
      }
      var res = typeof removerFrase === 'function' ? removerFrase(q.qid, r.motivo) : { ok: false };
      if (res && res.ok) feitas++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    atualizarContadores();
    /* Em navegador real, fases anteriores (Fase 75 e Fase 78) removem
     duplicatas via setTimeout(…,0), DEPOIS desta cadeia síncrona: a home
     mostrava 3016+ com 3002 frases ativas. Os contadores são recalculados
     até o acervo ficar estável (3 s sem mudança, no máximo 20 s). */
    var ultimo = -1,
      estavel = 0,
      n = 0;
    var iv = setInterval(function () {
      atualizarContadores();
      if (QUOTES.length === ultimo) estavel++;
      else {
        estavel = 0;
        ultimo = QUOTES.length;
      }
      if (++n > 40 || estavel >= 6) clearInterval(iv);
    }, 500);
    if (naoAchadas.length) console.warn('MeMotiva · Fase 100: remoção não aplicada (registro não encontrado): ' + naoAchadas.join('; '));
    console.log('MeMotiva · Fase 100: ' + feitas + ' frases removidas; ' + REG.length + ' itens no registro de remoções.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 101 — histórico estruturado das remoções anteriores a esta auditoria
    (recuperação parcial; sessão de 03/10/2026). Fonte dos dados: diffs de
    curadoria/curadoria-frases.csv entre commits sucessivos (texto, autor,
    fonte e status exatos), o CHECKPOINT (motivos) e a execução do
    memotiva.js de cada commit-base (qid real da frase naquele commit).
    O que NÃO está aqui: remoções anteriores a 28/09/2026 (Fases 7-85 e o
    checkpoint v105 não estão neste repositório) e a ordem exata de cada
    fase dentro de um lote. Os tipos 'historico-*' NÃO disparam remoção; só
    'historico-removida' alimenta CURADORIA_BLOQUEADA. Variantes de tradução
    continuam fora da detecção (limitação conhecida, tratar na Etapa 2). */
  var H = {
    lotes: [
      '3º lote (Fase 75 real + fim da atribuição popular)',
      '4º lote (atribuição popular, modo restrito)',
      '5º lote (fim da fila de atribuição popular)',
      '6º lote (fila de atribuição popular zerada)',
      '7º lote (atribuição fraca invisível ao regex "Atribuído")',
      'Fase 78 (dedup de traduções) — visível só no navegador real',
      'Fase 96 (padrão "[obra] ou declaração pública registrada")',
      'Fecha os 11 itens (verificação)'
    ],
    mots: [
      'A pesquisa que já existia no código do projeto concluía pela atribuição espúria; nunca tinha sido aplicada. (CHECKPOINT, 7º lote, tabela das 18).',
      'Apêndice "Red Herrings" do maior especialista em citações de Churchill (frase "atravessando o inferno") não a atribui a ele. (CHECKPOINT, 7º lote, tabela das 18).',
      'Atribuição espúria conhecida ("macieira"); sem fonte em obra de Lutero. (CHECKPOINT, 7º lote, tabela das 18).',
      'Autoria é controvérsia documentada na crítica literária brasileira. (CHECKPOINT, 7º lote, tabela das 18).',
      'Citação pseudocientífica sem fonte primária. (CHECKPOINT, 7º lote, tabela das 18).',
      'Classificada "Spurious"; origem real: William H. Whyte, revista Fortune, 1950. (CHECKPOINT, 7º lote, tabela das 18).',
      'Confirmado pelo arquivista oficial da Disney: escrita em 1981-82, 15 anos após sua morte. (CHECKPOINT, 7º lote, tabela das 18).',
      'Contestada por estudiosos, não localizada em sua obra. (CHECKPOINT, 7º lote, tabela das 18).',
      'Contradiz achado do checkpoint v105: nenhuma palavra dela sobreviveu à verificação. (CHECKPOINT, 7º lote, tabela das 18).',
      'Duplicata de tradução detectada pela Fase 75 executada de verdade pela primeira vez; a outra versão permanece no acervo (CHECKPOINT, 3º lote, itens 1-2).',
      'Duplicata de tradução detectada pela Fase 75 executada de verdade pela primeira vez; a outra versão permanece no acervo (CHECKPOINT, 3º lote, itens 1-2). A Fase 75 havia mantido a redação errada ("únicos" em vez de "vrais"); removida esta, ficou a correta.',
      'Duplicata de tradução detectada pela Fase 75 executada de verdade pela primeira vez; a outra versão permanece no acervo (CHECKPOINT, 3º lote, itens 1-2). Esta era o fragmento truncado; a versão completa da carta de 1923 permanece.',
      'Duplicata de tradução detectada pela Fase 75 executada de verdade pela primeira vez; a outra versão permanece no acervo (CHECKPOINT, 3º lote, itens 1-2). [similaridade textual com a contraparte baixa (0.59): confirmar manualmente]',
      'Duplicata de tradução removida pela Fase 78 do código (anterior a esta curadoria); só aparece na exportação em navegador real porque o jsdom não executa o timer da fase (CHECKPOINT, Auditoria do PR #2, achado A).',
      'Duplicata de tradução removida pela Fase 78 do código (anterior a esta curadoria); só aparece na exportação em navegador real porque o jsdom não executa o timer da fase (CHECKPOINT, Auditoria do PR #2, achado A). [similaridade textual com a contraparte baixa (0.53): confirmar manualmente]',
      'Duplicata de tradução removida pela Fase 78 do código (anterior a esta curadoria); só aparece na exportação em navegador real porque o jsdom não executa o timer da fase (CHECKPOINT, Auditoria do PR #2, achado A). [similaridade textual com a contraparte baixa (0.55): confirmar manualmente]',
      'Forma popular contraída no subjuntivo; restaurado o texto completo original de A Força da Idade (1960) (CHECKPOINT, 5º lote).',
      'Frase sem fonte primária em nenhum dos volumes citáveis das Collected Works nem no Wikiquote; duas variantes de tradução removidas (CHECKPOINT, 3º lote, item 3).',
      'Mesmo caso de Harriet Tubman (checkpoint v105). (CHECKPOINT, 7º lote, tabela das 18).',
      'Misatribuição: a frase é de Aristóteles, Ética a Nicômaco; reatribuída (nova entrada sob Aristóteles) (CHECKPOINT, 6º lote).',
      'Nenhuma fonte encontrada apesar de coerência com o vocabulário do autor (CHECKPOINT, 6º lote).',
      'Não consta em nenhum tratado do Corpus Hippocraticum. (CHECKPOINT, 7º lote, tabela das 18).',
      'Não era citação literal: paráfrase popular de nota real de 1953 sobre Pablo Casals; trocada pelo texto fiel à nota (CHECKPOINT, 3º lote, item 3).',
      'Origem real é uma coluna de jornal de 1971, sem ligação com Camus. (CHECKPOINT, 7º lote, tabela das 18).',
      'Origem real: duque de Lévis, 1808 (autor não catalogado no acervo na ocasião). (CHECKPOINT, 7º lote, tabela das 18).',
      'Padrão "[obra] ou declaração pública registrada": sem verificação individual dentro do tempo da sessão, removida pela regra do projeto "sem achar, não fica"; fila para sessão futura (CHECKPOINT, sessão 29/09/2026 e comentário da Fase 96).',
      'Paráfrase do argumento/título de O Segundo Sexo, não passagem citável (CHECKPOINT, 5º lote).',
      'Pesquisa dedicada não localizou a frase em obra do autor; parece resumo jornalístico, não citação (CHECKPOINT, 4º lote).',
      'Pesquisa dedicada não localizou a frase em obra, entrevista ou palestra do autor; padrão de resumo/“principais aprendizados” de livro, não de citação direta (CHECKPOINT, 5º lote).',
      'Pesquisa dedicada não localizou a frase em obra, entrevista ou palestra do autor; padrão de resumo/“principais aprendizados” de livro, não de citação direta (CHECKPOINT, 5º lote). (frase que escapara da lista de remoção da Fase 92 por prefixo; CHECKPOINT, 6º lote).',
      'Pista já no acervo: é de Carl Bard, 1978 (não catalogado); removida em vez de reatribuída. (CHECKPOINT, 7º lote, tabela das 18).',
      'Pista já no acervo: é de Carl W. Buehner, 1971 (não catalogado); removida em vez de reatribuída. (CHECKPOINT, 7º lote, tabela das 18).',
      'Pista já no acervo: é de Daniel Boorstin (não catalogado); removida em vez de reatribuída por proibição de autor novo na etapa. (CHECKPOINT, 7º lote, tabela das 18).',
      'Segunda frase sem confirmação em busca dedicada (mensagem do commit 183c1e7 e CHECKPOINT "Fecha os 11 itens").',
      'Sem fonte primária em nenhuma variante e ausente do Wikiquote; duas variantes de tradução da mesma frase, ambas removidas (uma delas já estava entre as duplicatas fundidas pela Fase 75). (CHECKPOINT, 3º lote, item 3).',
      'Sem fonte; a versão "próxima" de Plutarco também já era contração moderna. (CHECKPOINT, 7º lote, tabela das 18).',
      'Sem nenhuma corroboração encontrada em pesquisa dedicada (CHECKPOINT, 6º lote).',
      'Veredito da Fase 21 do projeto: disputada; a política antiga mantinha com ressalva, a nova regra remove.',
      'Veredito da Fase 21 do projeto: refutada.'
    ],
    fts: ['CHECKPOINT: "Auditoria do PR #2", achado A', 'CHECKPOINT: "quarto lote"', 'CHECKPOINT: "quinto lote"', 'CHECKPOINT: "sessão 29/09/2026 — novo padrão de fonte fraca"; comentário da Fase 96 em memotiva.js', 'CHECKPOINT: "sexto lote"', 'CHECKPOINT: "sétimo lote", tabela das 18', 'CHECKPOINT: "terceiro lote"', 'mensagem do commit 183c1e7 e CHECKPOINT: "Fecha os 11 itens"'],
    rows: [
      [
        'Albert Einstein',
        'O mundo é um lugar perigoso de se viver, não por causa daqueles que fazem o mal, mas por causa daqueles que observam e deixam o mal acontecer.',
        2,
        0,
        '2d04b2e',
        '0ebade6',
        '2026-09-29',
        'qh14g3428p0tf',
        22,
        6,
        'Entrevista registrada',
        'A',
        'manipulacao',
        'Ele percebeu com muita clareza que o mundo corre maior perigo da parte dos que toleram ou encorajam o mal do que da parte daqueles que o cometem.',
        0.43
      ],
      ['Mahatma Gandhi', 'A felicidade é quando o que você pensa, o que você diz e o que você faz estão em harmonia.', 0, 0, '2d04b2e', '0ebade6', '2026-09-29', 'qz1mfe01ruef5d', 17, 6, 'Autobiografia e Collected Works of Mahatma Gandhi', 'A-', 'felicidade', '', ''],
      ['Mahatma Gandhi', 'A felicidade é alcançada quando aquilo que pensamos, dizemos e fazemos está em harmonia.', 0, 0, '2d04b2e', '0ebade6', '2026-09-29', 'q193e2ig1awhiwk', 17, 6, 'Autobiografia e Collected Works of Mahatma Gandhi', 'A-', 'felicidade', '', ''],
      ['Rosa Parks', 'Aprendi ao longo dos anos que, quando a decisão está tomada, o medo diminui.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'q16ivioo1mqnn5a', 9, 6, 'Rosa Parks: My Story', 'A', 'dificeis', 'Aprendi ao longo dos anos que, quando a pessoa já tomou sua decisão, isso diminui o medo.', 0.72],
      ['Meister Eckhart', 'Se a única oração que você fizer em toda a sua vida for "obrigado", isso será suficiente.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'q1kv4wnk1ncvlu2', 9, 6, 'Sermões Alemães', 'A', 'gratidao', 'Se a única oração que você fizer em toda a vida for obrigado, já será suficiente.', 0.93],
      ['Abraham Maslow', 'O que um homem pode ser, ele deve ser.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'q1a8slk1etaxcy', 9, 6, 'Motivation and Personality', 'A', 'autorreconhecimento', 'O que um homem pode ser, ele precisa ser.', 0.85],
      ['Marcel Proust', 'Os únicos paraísos são os paraísos que perdemos.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f2642xi1j', 10, 6, 'O Tempo Redescoberto (1927), volume VII de Em Busca do Tempo Perdido', 'A', 'reflexao', 'Os verdadeiros paraísos são os paraísos que perdemos.', 0.87],
      ['John Ruskin', 'A qualidade nunca é um acidente; é sempre o resultado de esforço inteligente.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f26164ocpf', 9, 6, 'Atribuído a Ruskin em coletâneas, sem localização em sua obra', 'A-', 'reflexao', 'A qualidade nunca é acidente: é sempre resultado de esforço inteligente.', 0.98],
      ['Cleantes', 'Conduze-me, ó Zeus, e tu, Destino, para onde quer que me tenhais designado.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f26224d4nq', 9, 6, 'Hino a Zeus, versos finais', 'A', 'fe', 'Conduz-me, ó Zeus, e tu, Destino, para onde quer que tenhais decretado que eu vá: seguirei sem hesitar.', 0.74],
      ['São Jerônimo', 'Ignorar as Escrituras é ignorar Cristo.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f26252dara', 9, 6, 'Comentário sobre Isaías (408), prólogo', 'A', 'fe', 'Ignorar as Escrituras é ignorar a Cristo.', 0.99],
      [
        'Norman Schwarzkopf',
        'A liderança é uma combinação poderosa de estratégia e caráter. Mas se você tiver de ficar sem um deles, fique sem a estratégia.',
        1,
        0,
        '2d04b2e',
        '0ebade6',
        '2026-09-29',
        'f26547qcd8',
        9,
        6,
        'Entrevista registrada',
        'A',
        'lideranca',
        'A liderança é uma combinação poderosa de estratégia e caráter. Mas, se você tiver de ficar sem um dos dois, fique sem a estratégia.',
        0.96
      ],
      [
        'Conceição Evaristo',
        'A escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.',
        1,
        0,
        '2d04b2e',
        '0ebade6',
        '2026-09-29',
        'f28pvi1n3x',
        9,
        6,
        'Palestra registrada, formulação da autora sobre escrevivência',
        'A',
        'empoderamento',
        'A nossa escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.',
        0.98
      ],
      ['Tarsila do Amaral', 'Quero ser a pintora da minha terra.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f283j8ph4xa', 11, 6, 'Carta à família, 1923', 'A', 'autorreconhecimento', 'Sinto-me cada vez mais brasileira: quero ser a pintora da minha terra.', 0.67],
      ['Wolfgang Amadeus Mozart', 'Nem uma inteligência elevada nem a imaginação fazem o gênio. Amor, amor, amor: essa é a alma do gênio.', 0, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f283noubtxj', 34, 6, 'Atribuído a Mozart em coletâneas, sem localização em sua correspondência', 'A-', 'amor', '', ''],
      ['Pelé', 'Sucesso não é acidente. É trabalho duro, perseverança, aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que se está fazendo.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f283uwixazd', 9, 6, 'Entrevista registrada', 'A', 'motivacao', 'O sucesso não é acidente: é trabalho duro, perseverança, estudo, sacrifício e, acima de tudo, amor pelo que se está fazendo.', 0.94],
      ['Booker T. Washington', 'O sucesso deve ser medido não pela posição alcançada na vida, mas pelos obstáculos superados no caminho.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f743m0wra2', 9, 6, 'Da Escravidão à Liberdade', 'A', 'dificeis', 'O sucesso deve ser medido não pela posição que a pessoa alcançou, mas pelos obstáculos que superou.', 0.78],
      [
        'Max Planck',
        'Uma nova verdade científica não triunfa convencendo seus adversários: ela triunfa porque eles morrem e uma nova geração cresce familiarizada com ela.',
        1,
        0,
        '2d04b2e',
        '0ebade6',
        '2026-09-29',
        'f748w9pe0i',
        9,
        6,
        'Autobiografia Científica',
        'A',
        'reflexao',
        'Uma verdade nova não triunfa convencendo seus opositores, mas porque eles morrem e uma nova geração cresce familiarizada com ela.',
        0.83
      ],
      [
        'Reinhold Niebuhr',
        'Concedei-me a serenidade para aceitar o que não posso mudar, coragem para mudar o que posso, e sabedoria para distinguir uma coisa da outra.',
        1,
        0,
        '2d04b2e',
        '0ebade6',
        '2026-09-29',
        'f74nsxuhfb',
        9,
        6,
        'Oração da Serenidade',
        'A',
        'conforto',
        'Concedei-me serenidade para aceitar as coisas que não posso mudar, coragem para mudar as que posso e sabedoria para distinguir umas das outras.',
        0.93
      ],
      ['Santo Isidoro de Sevilha', 'As letras são sinais das coisas e têm tanta força que nos dizem, sem voz, o que os ausentes disseram.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f74qk8dci1', 12, 6, 'Etimologias', 'A', 'educacao', 'As letras são sinais das coisas, indícios das palavras, cuja força é tanta que nos falam sem voz.', 0.59],
      ['Thomas Sowell', 'Não há soluções: há apenas escolhas entre custos.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f74sa8smqg', 9, 6, 'Conflito de Visões', 'A', 'politica', 'Não há soluções. Há apenas escolhas de trade-offs.', 0.85],
      ['Angela Duckworth', 'Garra é paixão e perseverança por objetivos de longo prazo.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f770cjrvg7', 9, 6, 'Garra', 'A', 'motivacao', 'A garra é paixão e perseverança por objetivos de longo prazo.', 0.99],
      ['Henry Chesbrough', 'Nem todas as pessoas inteligentes trabalham para nós: precisamos trabalhar com as de dentro e com as de fora.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f779mski6n', 9, 6, 'Open Innovation', 'A', 'empreendedorismo', 'Nem todas as pessoas inteligentes trabalham para nós. Precisamos trabalhar com as de fora também.', 0.88],
      ['Donald Winnicott', 'Não existe isso de um bebê sozinho: quando se encontra um bebê, encontra-se também alguém que dele cuida.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f77jligxcc', 9, 6, 'A Criança e o Seu Mundo', 'A', 'familia', 'Não existe isso de um bebê. Onde há um bebê, há também alguém cuidando dele.', 0.7],
      ['Hillary Clinton', 'Direitos humanos são direitos das mulheres e direitos das mulheres são direitos humanos, de uma vez por todas.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f79onb0c4d', 9, 6, 'O Que Aconteceu', 'A', 'empoderamento', 'Direitos humanos são direitos das mulheres, e direitos das mulheres são direitos humanos.', 0.9],
      [
        'Jean Piaget',
        'O objetivo principal da educação é formar pessoas capazes de fazer coisas novas, e não de repetir o que outras gerações fizeram.',
        1,
        0,
        '2d04b2e',
        '0ebade6',
        '2026-09-29',
        'f79rqw35of',
        9,
        6,
        'A Epistemologia Genética',
        'A',
        'educacao',
        'O objetivo principal da educação é criar pessoas capazes de fazer coisas novas, e não simplesmente repetir o que outras gerações fizeram.',
        0.92
      ],
      ['Wolfgang Amadeus Mozart', 'Nem um temperamento vivaz nem uma mente aguçada fazem o gênio: o amor é a alma do gênio.', 0, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f802ho66tf', 34, 6, 'Cartas', 'A', 'amor', '', ''],
      ['Marie Curie', 'Nada na vida deve ser temido: deve apenas ser compreendido. É hora de compreender mais, para temer menos.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f808ligxcc', 9, 6, 'Pierre Curie', 'A', 'dificeis', 'Na vida, nada deve ser temido, tudo deve ser compreendido.', 0.62],
      ['George Sand', 'Não há mais do que uma felicidade na vida: amar e ser amado.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f80pbs44jm', 9, 6, 'Indiana', 'A', 'amor', 'Há uma só felicidade na vida: amar e ser amado.', 0.83],
      ['Grace Hopper', 'É mais fácil pedir perdão do que obter permissão.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f818a8smqg', 9, 6, 'Declarações e palestras registradas', 'A', 'empreendedorismo', 'É mais fácil pedir perdão do que pedir permissão.', 0.93],
      ['Florbela Espanca', 'Ser poeta é ser mais alto, é ser maior do que os homens! Morder como quem beija!', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f81efmev2j', 9, 6, 'Charneca em Flor', 'A', 'autorreconhecimento', 'Ser poeta é ser mais alto, é ser maior do que os homens!', 0.82],
      ['Henry Stanley Haskins', 'O que fica atrás de nós e o que fica à nossa frente são questões pequenas diante do que existe dentro de nós.', 1, 0, '2d04b2e', '0ebade6', '2026-09-29', 'f820m0wra2', 9, 6, 'Meditações em Wall Street', 'A', 'autorreconhecimento', 'O que está atrás de nós e o que está diante de nós são pequenas coisas comparadas ao que está dentro de nós.', 0.65],
      ['W. Edwards Deming', 'Sem dados, você é apenas mais uma pessoa com uma opinião.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q1c3s1uc1grg57h', 37, 1, '', 'P', 'negocios', '', ''],
      ['Muhammad Ali', 'Não conte os dias; faça os dias contarem.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q11ff9x21e6pnls', 37, 1, '', 'P', 'motivacao', '', ''],
      ['Ken Blanchard', 'A liderança começa com uma visão e termina com resultados.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q1krdp49h96ew0', 27, 1, '', 'A-', 'lideranca', '', ''],
      ['Winston Churchill', 'O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q1x6frfc18tfpwk', 37, 1, 'Discurso registrado', 'P', 'lideranca', '', ''],
      ['Thomas Edison', 'O gênio é 1% inspiração e 99% transpiração.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'qz4f1o4w5250r', 37, 1, 'Entrevista registrada', 'P', 'motivacao', '', ''],
      ['Robert Emmons', 'A gratidão é a mais saudável de todas as emoções humanas.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q1wmym0l149mg9f', 27, 1, '', 'A-', 'gratidao', '', ''],
      ['Peter Drucker', 'Cultura come estratégia no café da manhã.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'qprl80sw9ei5s', 38, 1, '', 'P', 'negocios', '', ''],
      ['Peter Drucker', 'O que é medido é gerenciado.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'qmtot8s16qjczy', 38, 1, '', 'P', 'negocios', '', ''],
      ['Andrew Carnegie', 'Tire minhas fábricas, mas deixe meu pessoal, e logo teremos fábricas melhores.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q15dw8o81roy314', 37, 1, '', 'P', 'negocios', '', ''],
      ['Henry Ford', 'Reunir-se é um começo, permanecer juntos é um progresso, trabalhar juntos é um sucesso.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q1jv6ivcj0x23k', 37, 1, '', 'P', 'negocios', '', ''],
      ['Aristóteles', 'É sinal de uma mente educada ser capaz de acolher um pensamento sem aceitá-lo.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q15ktfg8d03t3x', 38, 1, '', 'P', 'filosofos', '', ''],
      ['Arthur Schopenhauer', 'Toda verdade passa por três estágios: primeiro é ridicularizada, depois é violentamente combatida, por fim é aceita como evidente.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'qr9qnxng0bixa', 38, 1, '', 'P', 'filosofos', '', ''],
      ['Charles Chaplin', 'A vida é uma tragédia em close-up e uma comédia em plano geral.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q103f5h8sg6ho', 37, 1, '', 'P', 'felicidade', '', ''],
      ['Liev Tolstói', 'Se você quer ser feliz, seja.', 0, 1, '0ebade6', '7cb1303', '2026-09-29', 'q1fpaj367g0lbk', 37, 1, '', 'P', 'vida', '', ''],
      [
        'Simone de Beauvoir',
        'Que nada nos defina, que nada nos sujeite. Que a liberdade seja a nossa própria substância, já que viver é ser livre.',
        2,
        2,
        '7cb1303',
        'b9daa7e',
        '2026-09-29',
        'q1xasnci1y9duzz',
        16,
        2,
        '',
        'A-',
        'empoderamento',
        'Nada, portanto, nos limitava, nada nos definia, nada nos sujeitava: nossa ligação com o mundo, nós é que a criávamos; a liberdade era nossa própria substância.',
        0.59
      ],
      ['Robert Emmons', 'Quando expressamos gratidão, reconhecemos que nossas vidas estão ligadas às dos outros.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1gou3ei1z2nl8', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Brené Brown', 'A confiança é construída quando líderes demonstram competência, conexão e caráter.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1f9nbz1acahbv', 28, 2, '', 'A-', 'lideranca', '', ''],
      ['Clayton Christensen', 'A inovação disruptiva cria novos mercados e transforma setores existentes.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1ql2rql166uc1g', 28, 2, '', 'A-', 'empreendedorismo', '', ''],
      ['Robert Emmons', 'A gratidão é uma escolha que muda a forma como vemos a vida.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q450ptwzguazi', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Ken Blanchard', 'A liderança não é sobre controlar pessoas, mas sobre capacitá-las.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qpfm1p03lkbmq', 28, 2, '', 'A-', 'lideranca', '', ''],
      ['Ken Blanchard', 'O líder deve criar um ambiente onde as pessoas possam crescer e assumir responsabilidades.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q30lxyc11jjmna', 28, 2, '', 'A-', 'lideranca', '', ''],
      ['Ken Blanchard', 'O poder de um líder cresce quando ele ajuda outros a desenvolverem seu próprio poder.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1al4ejqhf5424', 28, 2, '', 'A-', 'lideranca', '', ''],
      ['Ken Blanchard', 'Líderes eficazes criam líderes em todos os níveis.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q108wijwlt7oon', 28, 2, '', 'A-', 'lideranca', '', ''],
      ['Ken Blanchard', 'O líder deve criar mais valor nas pessoas do que encontra nelas.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1wiyabgwfobe9', 28, 2, '', 'A-', 'lideranca', '', ''],
      ['Simone de Beauvoir', 'A mulher é o segundo sexo porque a sociedade a coloca nessa posição, não por causa de uma natureza feminina fixa.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1y8crjs1mfwljx', 26, 2, '', 'A-', 'empoderamento', '', ''],
      ['Robert Emmons', 'A gratidão é o sentimento que nasce quando percebemos que a vida nos oferece mais do que merecemos.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1mqif40mn4yoj', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Robert Emmons', 'A gratidão permite reconhecer o valor das coisas boas da vida.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qkz4hwev0nnz', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Robert Emmons', 'A gratidão não é apenas uma reação ao bem recebido; é uma forma de enxergar o mundo.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q15uefjw16jff6k', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Robert Emmons', 'A gratidão é uma das maneiras mais eficazes de fortalecer o bem-estar psicológico.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1xaljowqfj7ux', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Robert Emmons', 'A gratidão permite que as pessoas reconheçam o valor das experiências positivas.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q11x18ac6hjufb', 28, 2, '', 'A-', 'gratidao', '', ''],
      ['Clayton Christensen', 'A inovação acontece quando você combina conhecimentos existentes de novas maneiras.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qn6tbhh1bh8kn3', 28, 2, '', 'A-', 'empreendedorismo', '', ''],
      ['Clayton Christensen', 'Grandes empresas frequentemente falham porque fazem muito bem aquilo que deixou de importar.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1r9y5ba1tf2bec', 28, 2, '', 'A-', 'empreendedorismo', '', ''],
      ['Clayton Christensen', 'A disrupção acontece quando uma inovação cria uma nova maneira de atender necessidades.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qreffjgzd6rj3', 28, 2, '', 'A-', 'empreendedorismo', '', ''],
      ['Clayton Christensen', 'A melhor forma de criar valor é resolver problemas importantes.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qhw6pih1yrs3uo', 28, 2, '', 'A-', 'empreendedorismo', '', ''],
      ['Clayton Christensen', 'Grandes empresas podem fracassar quando deixam de ouvir as necessidades emergentes dos clientes.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1xx8lts1ufcr0t', 28, 2, '', 'A-', 'empreendedorismo', '', ''],
      ['Robert Greene', 'O maior perigo para a maioria das pessoas é a crença de que sabem mais do que realmente sabem.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1ke6n9b180exhs', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'Compreender as emoções humanas é essencial para compreender o comportamento das pessoas.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q6614m0nuv7ie', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'As pessoas tendem a ver o mundo através de seus próprios interesses e experiências.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1nn9kng2s5yap', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'A maior sabedoria é compreender as motivações e interesses das pessoas.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1n9t5st5il1ih', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'As pessoas frequentemente veem o mundo não como ele é, mas como seus desejos e emoções determinam.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1udh27w53vs6n', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'A capacidade de observar as pessoas sem julgá-las imediatamente é uma habilidade essencial.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'q1efz3zwfih2dz', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'A maioria das pessoas é guiada mais pelas emoções do que pela razão.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qfx93rhukc6l5', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'Conhecer a natureza humana é compreender padrões recorrentes de comportamento.', 0, 2, '7cb1303', 'b9daa7e', '2026-09-29', 'qukjelyetb503', 28, 2, '', 'A-', 'manipulacao', '', ''],
      ['Robert Greene', 'A primeira habilidade para lidar com pessoas é observar sem julgamentos precipitados.', 0, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'q2v39p418y98pr', 29, 4, '', 'A-', 'manipulacao', '', ''],
      ['Simone de Beauvoir', 'A mulher não é definida pelo que ela é, mas pelo que ela faz.', 0, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'q7rc08ibib6mm', 36, 4, '', 'A-', 'empoderamento', '', ''],
      ['Simone de Beauvoir', 'A mulher deve deixar de ser um objeto e tornar-se um sujeito de sua própria história.', 0, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'q1k20vx82l9nr', 36, 4, '', 'A-', 'empoderamento', '', ''],
      ['Simone de Beauvoir', 'A liberdade é uma conquista, não uma dádiva.', 0, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'qcy1ui5cggkki', 36, 4, '', 'A-', 'empoderamento', '', ''],
      ['John Dewey', 'A felicidade é um estado de atividade, não de repouso.', 3, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'q1djbjj811pn79g', 19, 4, '', 'A-', 'felicidade', 'A felicidade é um estado de atividade, não de repouso.', 1.0],
      ['Henry Kissinger', 'A política externa é a arte de equilibrar interesses nacionais.', 0, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'ql8q1l8lgvwko', 20, 4, '', 'A-', 'politica', '', ''],
      ['Henry Kissinger', 'A diplomacia é a adaptação de interesses nacionais às realidades do mundo.', 0, 3, 'b9daa7e', 'e0f3f78', '2026-09-30', 'q47o8pk10wunsv', 20, 4, '', 'A-', 'politica', '', ''],
      ['Winston Churchill', 'Se você está atravessando o inferno, continue andando.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'q32r9v41546xv6', 1, 5, 'Atribuído em discursos de guerra, 1940', 'A', 'dificeis', '', ''],
      ['William Butler Yeats', 'A educação não é encher um balde, mas acender um fogo.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f26j38q38', 35, 5, 'Atribuído a Yeats sem localização em sua obra; formulação próxima aparece em Plutarco', 'A-', 'educacao', '', ''],
      ['Hipócrates', 'Que teu alimento seja teu remédio.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f2624222pl', 21, 5, 'Atribuído ao Corpus Hippocraticum sem localização confirmada em tratado específico', 'A-', 'vida', '', ''],
      ['George Bernard Shaw', 'O maior problema da comunicação é a ilusão de que ela aconteceu.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f26463xezr', 5, 5, 'Atribuído a Shaw em coletâneas, sem localização em sua obra', 'A-', 'reflexao', '', ''],
      ['George Eliot', 'Nunca é tarde demais para ser o que você poderia ter sido.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f26483jy4x', 7, 5, 'Atribuído a George Eliot em coletâneas, sem localização em sua obra', 'A-', 'motivacao', '', ''],
      ['Stephen Hawking', 'O maior inimigo do conhecimento não é a ignorância, é a ilusão de conhecimento.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f281zjpxikb', 32, 5, 'Atribuído a Hawking em coletâneas; formulação próxima aparece em Daniel Boorstin', 'A-', 'educacao', '', ''],
      ['Nikola Tesla', 'Se você quer descobrir os segredos do universo, pense em termos de energia, frequência e vibração.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f2824obvzzt', 4, 5, 'Atribuído a Tesla em coletâneas, sem localização em seus escritos', 'A-', 'educacao', '', ''],
      ['Harriet Tubman', 'Eu libertei mil escravos. Poderia ter libertado mais mil, se soubessem que eram escravos.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f282rm0wra2', 8, 5, 'Atribuído a Tubman em coletâneas, sem registro documental localizado', 'A-', 'reflexao', '', ''],
      ['Zumbi dos Palmares', 'Não somos nada sem a nossa liberdade.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f283897wyv0', 18, 5, 'Atribuído a Zumbi na tradição oral; sem registro documental contemporâneo', 'A-', 'reflexao', '', ''],
      ['Walt Disney', 'Se você pode sonhar, você pode fazer.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f283t8yp1w5', 6, 5, 'Atribuído a Disney em coletâneas, sem registro primário localizado', 'A-', 'motivacao', '', ''],
      ['Martinho Lutero', 'Se eu soubesse que o mundo acabaria amanhã, ainda hoje plantaria minha macieira.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f2849jz5fj6', 2, 5, 'Atribuído a Lutero a partir do século XX, sem registro em seus escritos', 'A-', 'conforto', '', ''],
      ['Chico Xavier', 'Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f284dreizm5', 30, 5, 'Atribuído a Chico Xavier em coletâneas; formulação anterior é de Carl Bard', 'A-', 'motivacao', '', ''],
      ['Oscar Wilde', 'Seja você mesmo; todos os outros já existem.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f31mmji8i6', 0, 5, 'Atribuído a Wilde em coletâneas, sem localização em sua obra', 'A-', 'autorreconhecimento', '', ''],
      ['Voltaire', 'Julgue um homem por suas perguntas, e não por suas respostas.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f31qvnz1nt', 24, 5, 'Atribuído a Voltaire em coletâneas, sem localização em sua obra', 'A-', 'reflexao', '', ''],
      ['Maya Angelou', 'As pessoas esquecerão o que você disse, esquecerão o que você fez, mas nunca esquecerão como você as fez sentir.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f3442i3gyhn', 31, 5, 'Atribuído a Maya Angelou em coletâneas; formulação anterior aparece em Carl W. Buehner', 'A-', 'amor', '', ''],
      ['Albert Camus', 'Não caminhe atrás de mim, talvez eu não saiba liderar. Não caminhe à minha frente, talvez eu não queira seguir.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f34d2gfyhcd', 23, 5, 'Atribuído a Camus em coletâneas, sem localização em sua obra', 'A-', 'amizade', '', ''],
      ['Oscar Wilde', 'Somos todos feitos da mesma matéria, mas nem todos temos o mesmo destino.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f34111mopwpd', 0, 5, 'Atribuído a Wilde em coletâneas, sem localização em sua obra', 'A-', 'reflexao', '', ''],
      ['Cora Coralina', 'Sou aquela mulher a quem o tempo muito ensinou.', 0, 4, 'e0f3f78', '9f81582', '2026-09-30', 'f3414120syde', 3, 5, 'Poema Assim Eu Vejo a Vida, atribuído a Cora Coralina e não localizado em edição autorizada', 'A-', 'autorreconhecimento', '', ''],
      ['John D. Rockefeller', 'Sempre tentei transformar todo desastre em uma oportunidade.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q6y8vwc1kv8aw8', 25, 3, 'Random Reminiscences of Men and Events ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['John D. Rockefeller', 'Cada direito carrega uma responsabilidade; toda oportunidade, uma obrigação; toda posse, um dever.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1stvjl8pbghzi', 25, 3, 'Random Reminiscences of Men and Events ou declaração pública registrada', 'A-', 'financas', '', ''],
      ['Malala Yousafzai', 'Nós subestimamos o nosso poder — e essa é a primeira coisa que precisamos combater.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1iyzp4qplcdtq', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Malala Yousafzai', 'Podiam tomar nossas canetas e nossos livros, mas não podiam impedir nossas mentes de pensar.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1sf804211pl164', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'dificeis', '', ''],
      ['Michelle Obama', 'Uma das lições com que cresci foi a de permanecer sempre verdadeira comigo mesma e nunca deixar que as palavras de alguém me afastem dos meus objetivos.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qvtpo66im9fbv', 25, 3, 'Minha História ou declaração pública registrada', 'A-', 'autorreconhecimento', '', ''],
      ['Michelle Obama', 'Fracassar é parte crucial do sucesso. Toda vez que você fracassa e se recupera, exercita a perseverança que é a chave da vida.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q2q9w802bbhsf', 25, 3, 'Minha História ou declaração pública registrada', 'A-', 'dificeis', '', ''],
      ['John D. Rockefeller', 'Uma amizade criada nos negócios é melhor do que negócios criados na amizade.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1ijm7g4tym54d', 25, 3, 'Random Reminiscences of Men and Events ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['Henry Ford', 'Se o dinheiro for a sua esperança de independência, você nunca a terá. A única segurança verdadeira é uma reserva de sabedoria, experiência e competência.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qangia8ce8vr5', 25, 3, 'My Life and Work ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['Malala Yousafzai', 'Eu decidi que não há nada de errado em se considerar feminista. Feminismo é uma outra palavra para igualdade.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qidvrinod6txh', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Michelle Obama', 'Não existe limite para o que nós, como mulheres, podemos realizar.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qnx13w01jjpsr4', 25, 3, 'Minha História ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Madre Teresa de Calcutá', 'Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar. Mas o mar seria menor se lhe faltasse uma gota.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qlk0xq4zbs7pm', 25, 3, 'A Simple Path ou declaração pública registrada', 'A-', 'fe', '', ''],
      ['Malala Yousafzai', 'Eu levanto minha voz — não para que eu possa gritar, mas para que aquelas sem voz possam ser ouvidas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q132hues1cosdbx', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Simone Weil', 'A amizade é o único afeto que escolhemos livremente.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q7yg5mcp6kw0u', 25, 3, 'A Gravidade e a Graça ou declaração pública registrada', 'A-', 'amizade', '', ''],
      ['Colin Powell', 'Otimismo perpétuo é um multiplicador de forças.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1oyh1302jfbgz', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Colin Powell', 'Os líderes assumem responsabilidade; eles não colocam culpa nos outros.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qohc1i4hyfgjj', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Richard Branson', 'Treine as pessoas bem o suficiente para que elas possam sair, trate-as bem o suficiente para que elas queiram ficar.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1tvo0e2slqgbd', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Nelson Mandela', 'Um verdadeiro líder usa qualquer problema, por mais grave que seja, como oportunidade para melhorar.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1x0qcfi1gm5cka', 25, 3, 'Longo Caminho para a Liberdade ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Nelson Mandela', 'Uma nação não deve ser julgada pela forma como trata seus cidadãos mais elevados, mas seus cidadãos mais baixos.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1qstusdoidz7a', 25, 3, 'Longo Caminho para a Liberdade ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Daniel Kahneman', 'Uma maneira confiável de fazer as pessoas acreditarem em falsidades é a repetição frequente.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q14s7jmr1nfrfut', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['John D. Rockefeller', 'Não tenha medo de desistir do bom para perseguir o ótimo.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qncymdj1mjyhdp', 25, 3, 'Random Reminiscences of Men and Events ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['John D. Rockefeller', 'O segredo do sucesso é fazer as coisas comuns de maneira extraordinariamente bem.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qcgzpkw1y3yebw', 25, 3, 'Random Reminiscences of Men and Events ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['Henry Ford', 'O fracasso é simplesmente a oportunidade de recomeçar, desta vez de forma mais inteligente.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q3iqdvsy6vi31', 25, 3, 'My Life and Work ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['Madre Teresa de Calcutá', 'A alegria é uma rede de amor pela qual você pode capturar almas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q9wb0k11k5uz0', 25, 3, 'A Simple Path ou declaração pública registrada', 'A-', 'fe', '', ''],
      ['Colin Powell', 'Nunca deixe seu ego ficar tão ligado à sua posição que, quando sua posição cair, seu ego caia junto.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qb8qjwfmn2w95', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Richard Branson', 'Se você não se diverte fazendo algo, provavelmente não deveria fazê-lo.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qrka0l4j4g4hq', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Konrad Adenauer', 'A liberdade não é algo que o homem recebe de presente; é algo que deve defender constantemente.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1yzczq035ei65', 25, 3, 'Memórias de Konrad Adenauer ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Daniel Kahneman', 'As pessoas tendem a substituir perguntas difíceis por perguntas mais fáceis.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1t8xnskx2gdr1', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['Henry Ford', 'Qualidade significa fazer certo quando ninguém está olhando.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qifhjds1bokrx7', 25, 3, 'My Life and Work ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['Henry Ford', 'Um negócio absolutamente dedicado ao serviço terá apenas uma preocupação com os lucros: eles serão surpreendentemente grandes.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1h95ciw8y6tsg', 25, 3, 'My Life and Work ou declaração pública registrada', 'A-', 'negocios', '', ''],
      ['Colin Powell', 'Não existe segredo para o sucesso. É resultado de preparação, trabalho duro e aprendizado com o fracasso.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qsqibfg1wzr6n8', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Richard Branson', 'Não há mais importante habilidade de liderança do que saber ouvir.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q18wq1ooh5epm8', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Nelson Mandela', 'Liderança poderosa é liderar a partir do fundo, não do topo.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q12e7jms2g3nth', 25, 3, 'Longo Caminho para a Liberdade ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Nelson Mandela', 'Não há paixão em se contentar com pouco; em aceitar uma vida menor do que aquela que você é capaz de viver.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qsg6o3q19zl7mj', 25, 3, 'Longo Caminho para a Liberdade ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Colin Powell', 'A liderança é baseada em confiança, respeito e exemplo.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qk8wg6d1v97xbn', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Colin Powell', 'A liderança é a arte de conseguir mais do que a ciência da gestão considera possível.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q16iae5ozkela3', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Colin Powell', 'A responsabilidade da liderança é resolver problemas e criar oportunidades para as pessoas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1o10k5ckpsbva', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Colin Powell', 'Um líder deve inspirar confiança e criar um ambiente onde as pessoas possam ter sucesso.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q9xccxm1hiqt23', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Colin Powell', 'A liderança exige coragem para tomar decisões impopulares quando elas são necessárias.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qw1zhi41gwkvw7', 25, 3, 'My American Journey ou declaração pública registrada', 'A-', 'lideranca', '', ''],
      ['Malala Yousafzai', 'As mulheres são a verdadeira força da mudança.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q13sswo83gg5zr', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Malala Yousafzai', 'A educação é o caminho para a liberdade das mulheres.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1kbmbmx1afwop7', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Malala Yousafzai', 'Quando o mundo inteiro está em silêncio, até uma voz se torna poderosa.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qe5950nbux486', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Michelle Obama', 'Acredito que uma das coisas mais importantes que uma mulher pode fazer é elevar outras mulheres.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1w7by8zndfsnr', 25, 3, 'Minha História ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Malala Yousafzai', 'As mulheres são capazes de realizar qualquer coisa quando têm acesso à educação e às oportunidades.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qjbs98kgntfcd', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Malala Yousafzai', 'Eu conto minha história não porque ela seja única, mas porque muitas mulheres têm histórias semelhantes.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qjfj8jd1d98sdc', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Malala Yousafzai', 'Não podemos todos ter sucesso quando metade de nós é mantida para trás.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q13ucacknc5sam', 25, 3, 'Eu Sou Malala ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Michelle Obama', 'Não existe uma maneira única de ser uma mulher forte.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1ukopts6n0yh5', 25, 3, 'Minha História ou declaração pública registrada', 'A-', 'empoderamento', '', ''],
      ['Simone Weil', 'A coragem não é a ausência de medo, mas a capacidade de agir apesar dele.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1dinw2k197a1k6', 25, 3, 'A Gravidade e a Graça ou declaração pública registrada', 'A-', 'filosofos', '', ''],
      ['Simone Weil', 'A raiz da vida moral está na atenção ao outro.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qpax4ekzdvtri', 25, 3, 'A Gravidade e a Graça ou declaração pública registrada', 'A-', 'filosofos', '', ''],
      ['Júlio César', 'A experiência é a professora de todas as coisas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1rybzw81kumojk', 25, 3, 'Comentários de Júlio César ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Júlio César', 'É mais fácil encontrar homens dispostos a morrer do que encontrar aqueles dispostos a suportar a dor com paciência.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qvcoih41u35m5f', 25, 3, 'Comentários de Júlio César ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Nelson Mandela', 'A verdadeira característica de uma sociedade livre é que ela pode ser criticada livremente.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qejnct81u9dq7a', 25, 3, 'Longo Caminho para a Liberdade ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Konrad Adenauer', 'A história é a soma das coisas que poderiam ter sido evitadas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q897ecopuzgm', 25, 3, 'Memórias de Konrad Adenauer ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Konrad Adenauer', 'A paz não pode ser mantida pela força, mas pela compreensão.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1b3dnd81ic66f3', 25, 3, 'Memórias de Konrad Adenauer ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Konrad Adenauer', 'A Europa deve ser construída sobre a reconciliação e a cooperação.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qoa3gf8rv6rhk', 25, 3, 'Memórias de Konrad Adenauer ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Mikhail Gorbachev', 'A paz não é a unidade na semelhança, mas a unidade na diversidade.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q12y1tmo1f3o0eo', 25, 3, 'Perestroika ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Mikhail Gorbachev', 'Precisamos de democracia como precisamos de ar para respirar.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qn4wl881c8exiy', 25, 3, 'Perestroika ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Mikhail Gorbachev', 'A vida pune aqueles que chegam tarde demais.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q182nwbk1v575dz', 25, 3, 'Perestroika ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Mikhail Gorbachev', 'Acredito que a responsabilidade de cada geração é construir um mundo melhor.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qrg4ii8q4ykc3', 25, 3, 'Perestroika ou declaração pública registrada', 'A-', 'politica', '', ''],
      ['Madre Teresa de Calcutá', 'A vida é uma oportunidade, agarre-a.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qwvo6ssknncpw', 25, 3, 'A Simple Path ou declaração pública registrada', 'A-', 'fe', '', ''],
      ['Henry Ford', 'Um negócio que não faz nada além de dinheiro é um negócio pobre.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q18qkpvke5obib', 25, 3, 'My Life and Work ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Richard Branson', 'Cuide dos seus funcionários e eles cuidarão dos seus clientes.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1v4zab41fjfscs', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Richard Branson', 'As oportunidades de negócio são como ônibus: sempre há outro chegando.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1874hdnkht1h', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Richard Branson', 'Não aprenda regras demais. Aprenda princípios.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1dzi6yc1uc4v2y', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Richard Branson', 'O negócio é simplesmente uma ideia para melhorar a vida das pessoas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qwg5nog1hkec55', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Richard Branson', 'Arrisque-se. É melhor tentar e falhar do que nunca saber o que poderia ter acontecido.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qv294kkwu08mc', 25, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', '', ''],
      ['Daniel Kahneman', 'A forma como uma questão é apresentada influencia a resposta das pessoas.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1c8rukgu6d3xb', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['Daniel Kahneman', 'As pessoas são influenciadas por atalhos mentais que nem sempre percebem.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1tj0c1zqn32vi', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['Daniel Kahneman', 'A confiança excessiva é uma das principais fontes de erro humano.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q1wbgul1mjlilp', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['Daniel Kahneman', 'A facilidade com que uma informação vem à mente influencia sua avaliação.', 0, 6, '9f81582', '376355e', '2026-10-01', 'q4vmalkqq1na6', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['Daniel Kahneman', 'Erros previsíveis revelam padrões no modo como pensamos.', 0, 6, '9f81582', '376355e', '2026-10-01', 'qxu5xupgqw1h3', 25, 3, 'Rápido e Devagar ou declaração pública registrada', 'A-', 'manipulacao', '', ''],
      ['Elizabeth Stone', 'A maternidade é a única profissão em que o sucesso se mede pela capacidade de se tornar dispensável.', 0, 7, '376355e', '183c1e7', '2026-10-02', 'f80kl013em', 33, 7, 'Black Sheep and Kissing Cousins', 'A', 'familia', '', ''],
      ['Morgan Housel', 'A independência financeira é ter controle sobre seu tempo.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q10cnvhw8i2ljk', 13, 0, 'A Psicologia Financeira', 'A-', 'financas', 'A independência financeira é a capacidade de fazer aquilo que você quer com seu tempo.', 0.62],
      ['Warren Bennis', 'A confiança é o combustível da liderança.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1gndn7g4opozj', 13, 0, 'On Becoming a Leader', 'A-', 'lideranca', 'A confiança é o elemento básico de toda liderança.', 0.69],
      ['Marco Aurélio', 'A vida de um homem é aquilo que seus pensamentos fazem dela.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q17xa7tcjsfd6d', 13, 0, 'Meditações, Livro IV', 'A', 'vida', 'A nossa vida é aquilo que os nossos pensamentos fazem dela.', 0.77],
      ['Nicolau Maquiavel', 'Todos veem aquilo que você parece ser, poucos conhecem aquilo que você realmente é.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'qbqh2qk1tjp13u', 14, 0, 'O Príncipe', 'A-', 'politica', 'Os homens julgam mais pelos olhos do que pelas mãos: todos veem o que você parece, poucos sentem o que você é.', 0.53],
      ['Buda', 'Melhor do que mil versos sem significado é uma única frase que traz paz ao ouvinte.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1netma48t22zb', 13, 0, 'Dhammapada, 100–101', 'A', 'fe', 'Melhor do que mil palavras sem sentido é uma palavra que traz paz ao ouvinte.', 0.78],
      ['Krishna', 'O homem alcança a perfeição quando realiza seu dever com desapego.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'qhnm308ux728', 13, 0, 'Bhagavad Gita, 18.45–46', 'A', 'fe', 'O homem alcança a perfeição quando encontra alegria em cumprir seu próprio dever.', 0.68],
      ['Krishna', 'Aquele que conquistou a mente alcançou um amigo; aquele que não a conquistou possui um inimigo.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q920s9sgwp2bu', 13, 0, 'Bhagavad Gita, 6.6', 'A', 'fe', 'Aquele que controla a mente encontra um amigo; aquele que não controla encontra um inimigo.', 0.75],
      ['Krishna', 'Aquele que abandona o egoísmo e o apego encontra a paz.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1gnnmbefdrreh', 13, 0, 'Bhagavad Gita', 'A-', 'fe', 'Aquele que abandona o apego aos frutos da ação alcança a paz.', 0.65],
      ['Lao Tsé', 'Aquele que sabe contentar-se é sempre feliz.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1w0k8615r2de1', 13, 0, 'Tao Te Ching, 33 e 46', 'A', 'fe', 'Quem sabe contentar-se é rico.', 0.7],
      ['Lao Tsé', 'O sábio não disputa, por isso ninguém pode disputar com ele.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'qws2to317qn80f', 13, 0, 'Tao Te Ching, 22 e 66', 'A', 'fe', 'O sábio não luta contra ninguém e, por isso, ninguém pode lutar contra ele.', 0.73],
      ['Alcorão 8:46', 'E sejam firmes, pois Deus está com os perseverantes.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1605ykk8ku69k', 13, 0, 'Alcorão 8:46 · Alcorão — tradução de Samir El Hayek (edição brasileira de referência)', 'B', 'fe', 'Sede pacientes, pois Deus está com os pacientes.', 0.72],
      ['Krishna', 'Aquele que abandona o apego e realiza suas ações com equilíbrio alcança a paz.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1li7o20fr1xsj', 13, 0, 'Bhagavad Gita', 'A-', 'fe', 'Aquele que abandona o apego aos frutos da ação alcança a paz.', 0.69],
      ['Marco Aurélio', 'O obstáculo à ação faz avançar a ação. O que está no caminho torna-se o caminho.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'qzdk0d01a8m1lj', 15, 0, 'Meditações, Livro V', 'A', 'dificeis', 'A pedra que obstrui o caminho torna-se o caminho.', 0.55],
      ['Sêneca', 'Quem recebe um benefício com gratidão já pagou a primeira parcela.', 1, 5, '6b63032', 'fb579b1', '2026-10-02', 'q1ct568415pzqvx', 13, 0, 'Sobre os Benefícios, II', 'A', 'gratidao', 'Quem acolhe um benefício com gratidão, paga a primeira prestação da sua dívida.', 0.73]
    ]
  };
  var TIPOS = ['historico-removida', 'historico-fundida-duplicata', 'historico-substituida', 'historico-reatribuida'];
  H.rows.forEach(function (r) {
    window.CURADORIA_REMOVIDAS.push({
      data: r[6],
      lote: H.lotes[r[3]],
      commit_base: r[4],
      commit_remocao: r[5],
      autor: r[0],
      texto: r[1],
      tipo: TIPOS[r[2]],
      motivo: H.mots[r[8]],
      fontes: H.fts[r[9]],
      qid: r[7],
      fonte_anterior: r[10],
      status_anterior: r[11],
      categoria_anterior: r[12],
      contraparte: r[13],
      similaridade: r[14],
      origem: 'recuperado de diff de curadoria-frases.csv entre os commits + CHECKPOINT; qid lido da execução do memotiva.js do commit base'
    });
  });
})();

(function () {
  /* Fase 102 — histórico estruturado das remoções ANTERIORES a 28/09/2026
    (sessão de 03/10/2026). Fontes: (1) QUARENTENA() do build antigo de
    3.196 frases (arquivo histórico fornecido pelo proprietário), com qid,
    status, fonte e motivo do próprio build; (2) diff entre as QUOTES desse
    build e o curadoria-frases.csv do build v105 (3.132 frases); (3) diff
    v105 -> primeira exportação do repositório. A classificação do diff por
    similaridade (removida / fundida / a confirmar) é INFERIDA e está
    marcada assim no motivo; datas de remoção anteriores a 28/09 não são
    recuperáveis. Itens 'historico-quarentena-restaurada' não alimentam a
    guarda. Ver curadoria/CHECKPOINT.md. */
  var H = {
    L: ['Pré-28/09 — diff build antigo (3.196) → v105 (3.132)', 'Pré-28/09 — quarentena do build antigo (3.196 frases)', 'Pré-28/09 — v105 → primeira exportação do repositório'],
    M: [
      'Estava na quarentena do build antigo e hoje existe frase ativa equivalente (similaridade ≥ 0,80); não é remoção vigente e NÃO alimenta a guarda.',
      'Estava na quarentena do build antigo e hoje existe frase ativa idêntica; não é remoção vigente e NÃO alimenta a guarda.',
      'Quarentena do build antigo: fonte não localizada. Fonte registrada na época: genérica (coluna fonte_anterior). O CHECKPOINT do build antigo informa 995 itens na quarentena (42 resgatados, 953 mantidos fora); o momento exato da remoção não é recuperável.',
      'Quarentena do build antigo: obra não identificada. Fonte registrada na época: genérica (coluna fonte_anterior). O CHECKPOINT do build antigo informa 995 itens na quarentena (42 resgatados, 953 mantidos fora); o momento exato da remoção não é recuperável.',
      'Reatribuição documentada no CHECKPOINT (1ª sessão): a frase não é de François Mauriac, é de Marcel Proust (A Prisioneira); mantida sob Proust.',
      '[classificação inferida; CONFIRMAR MANUALMENTE] Similaridade 0,50–0,69 com frase do mesmo autor no v105: pode ser a mesma passagem em outra tradução ou uma passagem distinta removida.',
      '[classificação inferida] Há no v105 frase equivalente do mesmo autor (similaridade ≥ 0,70): duplicata de tradução removida pelas Fases 70–75 ou texto reescrito (Fase 83). Contraparte remanescente registrada.',
      '[classificação inferida] Sem frase equivalente (similaridade < 0,50) no v105. Compatível com as 146 removidas da "classe B" (reformulações do argumento, não passagens citáveis) do CHECKPOINT v105, mas o motivo individual não é recuperável.'
    ],
    F: ['CHECKPOINT, seção Fase 86; diff v105 → 8d1d990', 'QUARENTENA() do build antigo; CHECKPOINT do build antigo, seção 1', 'QUARENTENA() do build antigo; acervo atual', 'diff entre QUOTES do build antigo e curadoria-frases.csv do v105; CHECKPOINT v105 (Fases 62 e 70–75)'],
    B: ['build antigo (3.196 frases)', 'v105 (CSV de 3.132 frases)'],
    R: ['', '8d1d990', 'v105 (CSV de 3.132 frases)'],
    O: ['diff do CSV v105 com a primeira exportação do repositório', 'extraído de QUARENTENA() do build antigo, cruzado com o CSV atual', 'extraído executando o build antigo (1791039168227_memotiva__3_.html) e lendo QUARENTENA(); qid e motivo são os do próprio build', 'recuperado do build antigo (qid, fonte, status, categoria exatos) e do CSV v105; classificação por similaridade, inferida'],
    rows: [
      ['Frida Kahlo', 'Pés, para que os quero se tenho asas para voar?', 1, 1, 0, 0, 'q12tdi731s3czib', 1, 2, 1, '(sem fonte)', 'R', '', 'Pés, para que os quero se tenho asas para voar?', 1.0],
      ['Frida Kahlo', 'Pinto autorretratos porque estou só, com frequência, e porque sou o tema que melhor conheço.', 0, 1, 0, 0, 'qqd0hs1nm2ezu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Frida Kahlo', 'Eu não pinto sonhos ou pesadelos, pinto a minha própria realidade.', 1, 1, 0, 0, 'q1xljt301nhq3a0', 0, 2, 1, '(sem fonte)', 'R', '', 'Eu não pinto sonhos nem pesadelos. Pinto a minha própria realidade.', 0.95],
      ['Cora Coralina', 'O que vale na vida não é o ponto de partida, e sim a caminhada. Caminhando e semeando, no fim terás o que colher.', 0, 1, 0, 0, 'q1r3st7612np49n', 3, 1, 2, 'Obra de Cora Coralina — poema não identificado', 'A-', '', '', ''],
      ['Cora Coralina', 'Nasci em tempos rudes. Aceitei contradições, lutas e pedras como lições de vida e delas me sirvo. Aprendi a viver.', 0, 1, 0, 0, 'q1ibnol6nisnm', 3, 1, 2, 'Obra de Cora Coralina — poema não identificado', 'A-', '', '', ''],
      ['Cora Coralina', 'A verdadeira coragem é ir atrás de seu sonho mesmo quando todos dizem que ele é impossível.', 0, 1, 0, 0, 'q1po4f6w1unnfez', 3, 1, 2, 'Obra de Cora Coralina — poema não identificado', 'A-', '', '', ''],
      ['Cora Coralina', 'Embora não possamos acrescentar dias à sua vida, podemos acrescentar vida aos seus dias.', 0, 1, 0, 0, 'qov844w7i5xl4', 3, 1, 2, 'Obra de Cora Coralina — poema não identificado', 'A-', '', '', ''],
      ['Maya Angelou', 'Você não pode controlar todos os fatos que acontecem em sua vida, mas pode decidir não ser diminuída por eles.', 0, 1, 0, 0, 'q4krqod112proz', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Maya Angelou', 'Tente ser um arco-íris na nuvem de alguém.', 1, 1, 0, 0, 'q173ceag13hk76a', 1, 2, 1, 'Obra e entrevistas de Maya Angelou', 'A-', '', 'Tente ser um arco-íris na nuvem de alguém.', 1.0],
      ['Elizabeth Stone', 'Decidir ter um filho é decidir, para sempre, que seu coração andará fora do seu corpo.', 1, 1, 0, 0, 'q8ya08x18onxvu', 0, 2, 1, '(sem fonte)', 'R', '', 'Decidir ter um filho é decidir para sempre que seu coração passe a andar fora do seu corpo.', 0.95],
      ['Agatha Christie', 'Não há nada mais fascinante neste mundo do que ter um filho que é seu e, ao mesmo tempo, um completo estranho.', 1, 1, 0, 0, 'q1at2k841uma85z', 0, 2, 1, '(sem fonte)', 'R', '', 'Não há nada mais fascinante do que ter um filho que é seu e, ao mesmo tempo, um estranho.', 0.88],
      ['Rubem Alves', 'Os educadores, antes de serem especialistas em ferramentas do saber, deveriam ser especialistas em amor: intérpretes de sonhos.', 0, 1, 0, 0, 'q19qxx7saen2rg', 3, 1, 2, 'Obra de Rubem Alves', 'A-', '', '', ''],
      ['Rubem Alves', 'Educar não é ensinar as respostas. Educar é ensinar a pensar.', 0, 1, 0, 0, 'qg3shk01y0i35d', 3, 1, 2, 'Obra de Rubem Alves', 'A-', '', '', ''],
      ['Rubem Alves', 'Nós não vemos o que vemos. Nós vemos o que somos.', 0, 1, 0, 0, 'qcqc4yw1oh5k0y', 3, 1, 2, 'Obra de Rubem Alves', 'A-', '', '', ''],
      ['Machado de Assis', 'A arte de viver consiste em tirar o maior bem do maior mal.', 0, 1, 0, 0, 'qjpcimo1fe9c5m', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Machado de Assis', 'A primeira glória é a reparação dos erros.', 0, 1, 0, 0, 'q3minucmnfwe7', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Dalai Lama', 'Amor, compaixão e preocupação pelos outros são verdadeiras fontes de felicidade.', 0, 1, 0, 0, 'q6g12unt4z3p4', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Dalai Lama', 'Descobri que o mais alto grau de paz interior decorre da prática do amor e da compaixão.', 0, 1, 0, 0, 'q83gavs17ueynt', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Fernando Pessoa', 'Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar.', 0, 1, 0, 0, 'q1tyxsvk89dxyu', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Mário Quintana', 'Tão bom morrer de amor! E continuar vivendo...', 0, 1, 0, 0, 'qpjwbwfb03fw', 3, 1, 2, 'Obra de Mário Quintana — poema não identificado', 'A-', '', '', ''],
      ['Vinicius de Moraes', 'Amai, porque nada melhor para a saúde que um amor correspondido.', 0, 1, 0, 0, 'qzb954gk4uvli', 3, 1, 2, 'Obra de Vinicius de Moraes — poema não identificado', 'A-', '', '', ''],
      ['Santo Agostinho', 'A medida do amor é amar sem medida.', 0, 1, 0, 0, 'q6uy2g01gbxv9o', 3, 1, 2, 'Obra de Agostinho', 'A-', '', '', ''],
      ['Mário Quintana', 'A amizade é um amor que nunca morre.', 0, 1, 0, 0, 'qz3twx4g5etjh', 3, 1, 2, 'Obra de Mário Quintana — poema não identificado', 'A-', '', '', ''],
      ['Carlos Drummond de Andrade', 'A amizade é um meio de nos isolarmos da humanidade cultivando algumas pessoas.', 0, 1, 0, 0, 'qlgvxpg1ab9c6a', 3, 1, 2, 'Obra de Drummond — poema não identificado', 'A-', '', '', ''],
      ['Oscar Wilde', 'A melhor maneira de começar uma amizade é com uma boa gargalhada. De terminar com ela, também.', 0, 1, 0, 0, 'qwucu7rpc3ggh', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Machado de Assis', 'Não é amigo aquele que alardeia a amizade: é traficante; a amizade sente-se, não se diz.', 0, 1, 0, 0, 'q115jv1c3h0zkx', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['George Eliot', 'A amizade é o conforto indescritível de nos sentirmos seguros com uma pessoa, sem ser preciso pesar o que se pensa nem medir o que se diz.', 0, 1, 0, 0, 'q44t18umqpvty', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Immanuel Kant', 'A amizade é semelhante a um bom café; uma vez frio, não se aquece sem perder bastante do primeiro sabor.', 0, 1, 0, 0, 'qsxopk846tj6w', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Carlos Drummond de Andrade', 'Como as plantas, a amizade não deve ser muito nem pouco regada.', 0, 1, 0, 0, 'qdd1au4198epnq', 3, 1, 2, 'Obra de Drummond — poema não identificado', 'A-', '', '', ''],
      ['Marguerite Yourcenar', 'A amizade é, acima de tudo, certeza – é isso que a distingue do amor.', 1, 1, 0, 0, 'q1xcfp927p00w4', 0, 2, 1, '(sem fonte)', 'R', '', 'A amizade é, antes de tudo, certeza — e é isso que a distingue do amor.', 0.91],
      ['Roberto Shinyashiki', 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.', 0, 1, 0, 0, 'q19i7ssg4fz7q9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Max Planck', 'Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão.', 1, 1, 0, 0, 'q19k22jcg16xzp', 0, 2, 1, '(sem fonte)', 'R', '', 'Para o crente, Deus está no princípio; para o cientista, no fim de toda reflexão.', 0.88],
      ['Albert Camus', 'Antes, a questão era se a vida precisava ter algum significado para ser vivida. Agora, ficou evidente que ela será vivida melhor se não tiver significado predefinido.', 0, 1, 0, 0, 'q18lp8p01prg85e', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Machado de Assis', 'O medo é um preconceito dos nervos. E um preconceito desfaz-se; basta a simples reflexão.', 0, 1, 0, 0, 'q1pvidhs1v7ik7l', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Sigmund Freud', 'Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.', 0, 1, 0, 0, 'q16xj6ws1ff6joy', 3, 1, 2, 'Obra de Freud', 'A-', '', '', ''],
      ['Carlos Drummond de Andrade', 'Ser feliz sem motivo é a mais autêntica forma de felicidade.', 0, 1, 0, 0, 'q59kzp8138jx04', 3, 1, 2, 'Obra de Drummond — poema não identificado', 'A-', '', '', ''],
      ['Liev Tolstói', 'A alegria de fazer o bem é a única felicidade verdadeira.', 0, 1, 0, 0, 'q121ucrw1pdchdi', 3, 1, 2, 'Obra de Tolstói', 'A-', '', '', ''],
      ['Érico Veríssimo', 'Felicidade é a certeza de que a nossa vida não está se passando inutilmente.', 0, 1, 0, 0, 'q1e9r4pku381tp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'A nossa felicidade depende mais do que temos nas nossas cabeças, do que nos nossos bolsos.', 0, 1, 0, 0, 'qssm8lk1cpahje', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Adélia Prado', 'Não tenho tempo pra mais nada, ser feliz me consome muito.', 0, 1, 0, 0, 'q1sumeg0up06tl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Martha Medeiros', 'Faça o que for necessário para ser feliz. Mas não se esqueça que a felicidade é um sentimento simples.', 0, 1, 0, 0, 'q15fupmwfgyqp8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Caio Fernando Abreu', 'A vida é curta, viva. O amor é raro, aproveite. A raiva é passageira, deixe ir. O medo é terrível, enfrente.', 0, 1, 0, 0, 'q1xkdsak1othmdu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Millôr Fernandes', 'Viver é desenhar sem borracha.', 0, 1, 0, 0, 'q14u19ts4xel1q', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Santo Isidoro de Sevilha', 'Aprenda como se você fosse viver para sempre. Viva como se você fosse morrer amanhã.', 0, 1, 0, 0, 'q15qc0qk1eplvty', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oscar Wilde', 'Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.', 0, 1, 0, 0, 'qysphggi11kfw', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Sigmund Freud', 'Somos feitos de carne, mas temos de viver como se fôssemos de ferro.', 0, 1, 0, 0, 'q1fj8iho1puqthz', 3, 1, 2, 'Obra de Freud', 'A-', '', '', ''],
      ['James Dean', 'Sonhe como se fosse viver para sempre, viva como se fosse morrer amanhã.', 0, 1, 0, 0, 'qu1bj371yrrc2d', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dalai Lama', 'Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã.', 0, 1, 0, 0, 'q1iuznsb28mbhb', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Mário Quintana', 'A arte de viver é simplesmente a arte de conviver — mesmo consigo mesmo.', 0, 1, 0, 0, 'q1ja99ugki23p1', 3, 1, 2, 'Obra de Mário Quintana — poema não identificado', 'A-', '', '', ''],
      ['Victor Hugo', 'Vós, que sofreis, porque amais, amai ainda mais. Morrer de amor é viver dele.', 0, 1, 0, 0, 'qy4zxx87pj9xv', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'É difícil viver com as pessoas porque calar é muito difícil.', 0, 1, 0, 0, 'qjslswc1xg0lac', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Immanuel Kant', 'O homem não é nada além daquilo que a educação faz dele.', 0, 1, 0, 0, 'qlzpdds1w2o987', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Carlos Drummond de Andrade', 'A educação para o sofrimento evitaria senti-lo tão fundo.', 0, 1, 0, 0, 'q4qkopr1o65gx3', 3, 1, 2, 'Obra de Drummond — poema não identificado', 'A-', '', '', ''],
      ['Coelho Neto', 'É na educação dos filhos que se revelam as virtudes dos pais.', 0, 1, 0, 0, 'qz61edkp19c4d', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Padre Antônio Vieira', 'A boa educação é moeda de ouro; em toda a parte tem valor.', 0, 1, 0, 0, 'q10kgdzk13zhbx1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['J. Petit Senn', 'Os filhos tornam-se para os pais, segundo a educação que recebem, uma recompensa ou um castigo.', 0, 1, 0, 0, 'q76v7g0bkppj1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['William Arthur Lewis', 'Educação nunca foi despesa. Sempre foi investimento com retorno garantido.', 0, 1, 0, 0, 'q1xs9e4o1izx77g', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Alexandre Dumas', 'Nos negócios não existem amigos, apenas clientes.', 0, 1, 0, 0, 'qsyimk1s700u6', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Aristóteles Onassis', 'Nos negócios, o segredo é saber algo que mais ninguém sabe.', 0, 1, 0, 0, 'q3mj8rciq0kzx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Luiz Gasparetto', 'A verdadeira família é aquela unida pelo espírito, e não pelo sangue.', 0, 1, 0, 0, 'qeadtyahun50e', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Liev Tolstói', 'A verdadeira felicidade está na própria casa, entre as alegrias da família.', 0, 1, 0, 0, 'q1hy5s5w1ei6n32', 3, 1, 2, 'Obra de Tolstói', 'A-', '', '', ''],
      ['Machado de Assis', 'A gratidão de quem recebe um benefício é sempre menor que o prazer daquele de quem o faz.', 0, 1, 0, 0, 'q4yb05s1sz3a3r', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Osho', 'Quando seu coração está pleno de gratidão, qualquer porta aparentemente fechada pode ser uma abertura para uma bênção maior.', 0, 1, 0, 0, 'qr1exuq9c2f5z', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Esopo', 'A gratidão é a virtude das almas nobres.', 0, 1, 0, 0, 'qrfbdvs10z7cd9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Samuel Johnson', 'A gratidão é um fruto de grande cultura; não se encontra entre gente vulgar.', 0, 1, 0, 0, 'q1kxopuw1skh24a', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['Gustave Flaubert', 'Aos incapazes de gratidão nunca faltam pretextos para não a ter.', 0, 1, 0, 0, 'q1285jq81lbl0tg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Vincent van Gogh', 'Andei por esta terra durante trinta anos e, por gratidão, quero deixar alguma lembrança.', 0, 1, 0, 0, 'qkspmw41g74tgf', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ailton Krenak', 'A mentira e a manipulação colocam a vida das pessoas íntegras em risco.', 0, 1, 0, 0, 'q1b5swrl1vprmx3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Gertrude Stein', 'A única coisa que torna possível a identidade é a ausência de mudança.', 0, 1, 0, 0, 'qvmzey8pdkaaz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Augusto Cury', 'A individualidade deve existir, pois ela é o alicerce da identidade da personalidade.', 0, 1, 0, 0, 'q1c2chu0e8lv4q', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Marcel Proust', 'O que reúne e atrai as pessoas não é a semelhança de opiniões, mas a identidade de espírito.', 0, 1, 0, 0, 'q9hjo14r3fc5w', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Clarice Lispector', 'Não quero a beleza, quero a identidade.', 0, 1, 0, 0, 'q79hip8x19n0l', 3, 1, 2, 'Obra de Clarice Lispector', 'A-', '', '', ''],
      ['Osho', 'Cada relacionamento é um espelho; ele revela sua identidade a você.', 0, 1, 0, 0, 'q2kh7ag1h0a95g', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Lady Gaga', 'Não importa quem você é, de onde você veio, o coração é sua identidade.', 0, 1, 0, 0, 'q4bxehf18d364q', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Émile-Auguste Chartier', 'O pessimismo é humor; o otimismo é vontade.', 1, 1, 0, 0, 'qvovm3sfy2mxt', 0, 2, 1, '(sem fonte)', 'R', '', 'O pessimismo é de humor; o otimismo é de vontade.', 0.94],
      ['Bertram Carr', 'O pessimista vê dificuldade em cada oportunidade; o otimista vê oportunidade em cada dificuldade.', 0, 1, 0, 0, 'q1jk6zsc1tpk47u', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Voltaire', 'A esperança é um alimento da nossa alma.', 0, 1, 0, 0, 'q1boobawr4mvsy', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Ariano Suassuna', 'O otimista é um tolo. O pessimista, um chato. Bom mesmo é ser um realista esperançoso.', 1, 1, 0, 0, 'q1wbyjiv18zsgdl', 0, 2, 1, 'Obra e palestras de Ariano Suassuna', 'A-', '', 'O otimista é um tolo, o pessimista é um chato. Bom mesmo é ser um realista esperançoso.', 0.99],
      ['Vladimir Maiakóvski', 'Amar não é aceitar tudo. Aliás: onde tudo é aceito, desconfio que há falta de amor.', 0, 1, 0, 0, 'q17dvhn8hhfye9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Augusto Cury', 'A aceitação passiva das ideias é pior do que a crítica tola dirigida a elas.', 0, 1, 0, 0, 'qrkir08pbm6tz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Leandro Karnal', 'A não aceitação das diferenças torna o mundo um lugar horrível.', 0, 1, 0, 0, 'q1s9hc2wraqxvc', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Clarice Lispector', 'E, se você me achar esquisita, respeite também. Até eu fui obrigada a me respeitar.', 0, 1, 0, 0, 'qem05psnt8l0', 3, 1, 2, 'Obra de Clarice Lispector', 'A-', '', '', ''],
      ['Serena Williams', 'O sucesso de cada mulher deveria servir de inspiração para outra. Deveríamos levantar umas às outras.', 0, 1, 0, 0, 'q1beiv8p12bouf8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Gloria Steinem', 'Os homens deveriam pensar duas vezes antes de fazerem da viuvez o único caminho das mulheres para o poder.', 0, 1, 0, 0, 'qkwu79kppknga', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Virginia Woolf', 'Pela maior parte da História, "anônimo" foi uma mulher.', 1, 1, 0, 0, 'qpi5q7my52iua', 0, 2, 1, 'Obra de Virginia Woolf', 'A-', '', 'Durante a maior parte da história, Anônimo era uma mulher.', 0.84],
      ['Rosa Luxemburgo', 'A liberdade das mulheres é o sinal da liberdade social.', 0, 1, 0, 0, 'q64t4myv1f7af', 3, 1, 2, 'Obra e cartas de Rosa Luxemburgo', 'A-', '', '', ''],
      ['bell hooks', 'Honrar a nós mesmas, amar nossos corpos, é uma fase avançada na construção de uma autoestima saudável.', 0, 1, 0, 0, 'qc85epg8m6ksi', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['Estée Lauder', 'Nunca sonhei com sucesso, trabalhei para isso.', 1, 1, 0, 0, 'q12bljylwv9mkv', 0, 2, 1, '(sem fonte)', 'R', '', 'Eu nunca sonhei com o sucesso. Trabalhei por ele.', 0.83],
      ['Djamila Ribeiro', 'Minha luta diária é para ser reconhecida como sujeito, impor minha existência numa sociedade que insiste em negá-la.', 0, 1, 0, 0, 'qrctcoc1j4fc9s', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Carl Gustav Jung', 'Tudo o que nos irrita nos outros pode nos levar a uma melhor compreensão de nós mesmos.', 1, 1, 0, 0, 'qm5m8fh9bjop8', 0, 2, 1, 'Obras Completas de C. G. Jung', 'A-', '', 'Tudo o que nos irrita nos outros pode nos levar a um entendimento de nós mesmos.', 0.84],
      ['Carl Gustav Jung', 'O encontro de duas personalidades é como a mistura de duas substâncias químicas: se houver reação, ambas se transformam.', 1, 1, 0, 0, 'q6jdurw1u17fwz', 0, 2, 1, 'Obras Completas de C. G. Jung', 'A-', '', 'O encontro de duas personalidades é como o contato entre duas substâncias químicas: se há alguma reação, ambas se transformam.', 0.88],
      ['Carl Gustav Jung', 'Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.', 1, 1, 0, 0, 'q1vmjm8k1i9t404', 1, 2, 1, 'Obras Completas de C. G. Jung', 'A-', '', 'Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.', 1.0],
      ['Carl Gustav Jung', 'O sofrimento precisa ser superado, e o único meio de superá-lo é suportando-o.', 0, 1, 0, 0, 'q105nccw1qu1ukh', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A totalidade não é a perfeição, mas sim o ser completo.', 0, 1, 0, 0, 'qzr86c0xs1xn7', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Só aquilo que somos realmente tem o poder de nos curar.', 0, 1, 0, 0, 'q1blf1l61dhhj2c', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Uns sapatos que ficam bem numa pessoa são pequenos para uma outra; não existe uma receita para a vida que sirva para todos.', 0, 1, 0, 0, 'q1wumziw1dh4q28', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Aquilo que na vida tem sentido, mesmo sendo qualquer coisa de mínimo, prima sobre algo de grande, porém isento de sentido.', 0, 1, 0, 0, 'q1lt3t5w1e7juuu', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Augusto Cury', 'Todos querem o perfume das flores, mas poucos sujam as suas mãos para cultivá-las.', 0, 1, 0, 0, 'q11fqncwrimxd0', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Cora Coralina', 'Não lamente o que podia ter e se perdeu por caminhos errados e nunca mais voltou.', 0, 1, 0, 0, 'q104y5i0hu19pd', 3, 1, 2, 'Obra de Cora Coralina — poema não identificado', 'A-', '', '', ''],
      ['Clóvis de Barros Filho', 'É da natureza da felicidade apresentar-se como inapreensível.', 0, 1, 0, 0, 'q1cob27ot7t97u', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Viviane Mosé', 'Tudo que nasce tende a morrer para que a vida continue. É porque sabemos que vamos morrer que temos urgência de viver.', 0, 1, 0, 0, 'q1qnkjdm1nb8lpu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Haemin Sunim', 'As pessoas mais perigosas são aquelas que têm paixão, mas não têm sabedoria.', 0, 1, 0, 0, 'qdlawou88tonn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oliver Wendell Holmes', 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.', 0, 1, 0, 0, 'qn3yh8wcne1kc', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Søren Kierkegaard', 'A vida só pode ser compreendida olhando-se para trás, mas só pode ser vivida olhando-se para a frente.', 1, 1, 0, 0, 'qz1mw601umi6uz', 0, 2, 1, '(sem fonte)', 'R', '', 'A vida só pode ser compreendida olhando para trás, mas só pode ser vivida olhando para a frente.', 0.97],
      ['Victor Hugo', 'Há pensamentos que são orações. Há momentos nos quais, seja qual for a posição do corpo, a alma está de joelhos.', 0, 1, 0, 0, 'q1kf3ow01f3q5mp', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'O importante não é aquilo que fazem de nós, mas o que nós mesmos fazemos do que os outros fizeram de nós.', 0, 1, 0, 0, 'q1oqxic4109xzik', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Virginia Woolf', 'A vida é como um sonho; é o acordar que nos mata.', 0, 1, 0, 0, 'qhacf4n6oqvje', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['Mário Quintana', 'Não faças da tua vida um rascunho. Poderás não ter tempo de passá-la a limpo.', 0, 1, 0, 0, 'q1m0gxow17bh3cg', 3, 1, 2, 'Obra de Mário Quintana — poema não identificado', 'A-', '', '', ''],
      ['Sigmund Freud', 'Nós poderíamos ser muito melhores se não quiséssemos ser tão bons.', 0, 1, 0, 0, 'q3abuywdztwr3', 3, 1, 2, 'Obra de Freud', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Onde o amor impera, não há desejo de poder; e onde o poder predomina, há falta de amor. Um é a sombra do outro.', 0, 1, 0, 0, 'q1cdhewc1r7nsah', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Mário Quintana', 'O livro traz a vantagem de a gente poder estar só e ao mesmo tempo acompanhado.', 0, 1, 0, 0, 'qzo97191ffgr60', 3, 1, 2, 'Obra de Mário Quintana — poema não identificado', 'A-', '', '', ''],
      ['Millôr Fernandes', 'O dinheiro não só fala, como faz muita gente calar a boca.', 0, 1, 0, 0, 'q12pi3g016inena', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'Dinheiro é como água do mar: quanto mais você toma, maior é sua sede. O mesmo se aplica à fama.', 0, 1, 0, 0, 'q1gj38xc1fad0nr', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Machado de Assis', 'O dinheiro não traz felicidade — para quem não sabe o que fazer com ele.', 0, 1, 0, 0, 'qzgior1bk9df2', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Francis Bacon', 'O dinheiro é um bom criado, mas um mau senhor.', 0, 1, 0, 0, 'q12gefqilzrr1f', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Papa Francisco', 'O dinheiro tem que servir, não governar.', 0, 1, 0, 0, 'q9wxvhc1yzvc6g', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['W. Somerset Maugham', 'O dinheiro assemelha-se a um sexto sentido sem o qual não podemos fazer o uso completo dos outros cinco.', 0, 1, 0, 0, 'qzajyzw1fwoggf', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Carlos Drummond de Andrade', 'O cofre do banco contém apenas dinheiro; frusta-se quem pensar que lá encontrará riqueza.', 0, 1, 0, 0, 'qxa2zbd1jqgzyd', 3, 1, 2, 'Obra de Drummond — poema não identificado', 'A-', '', '', ''],
      ['Mark Twain', 'Se um amigo te pede dinheiro, pensa bem qual dos dois preferes perder: o dinheiro ou o amigo?', 0, 1, 0, 0, 'q1kye0awj61zab', 3, 1, 2, 'Obra de Mark Twain', 'A-', '', '', ''],
      ['Liev Tolstói', 'O dinheiro representa uma nova forma de escravidão impessoal, em lugar da antiga escravidão pessoal.', 0, 1, 0, 0, 'qkj8iloweijbq', 3, 1, 2, 'Obra de Tolstói', 'A-', '', '', ''],
      ['Gustave Flaubert', 'O que o dinheiro faz por nós não compensa o que fazemos por ele.', 0, 1, 0, 0, 'q1h1871017hy044', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Groucho Marx', 'Há tantas coisas na vida mais importantes que o dinheiro. Mas custam tanto.', 0, 1, 0, 0, 'q1sfxqpw18iaswx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Karl Marx', 'O dinheiro é a essência alienada do trabalho e da existência do homem; a essência domina-o, e ele adora-a.', 0, 1, 0, 0, 'q8fczme26ey0e', 3, 1, 2, 'Obra de Marx', 'A-', '', '', ''],
      ['Pierre-Joseph Proudhon', 'A política é a ciência da liberdade.', 0, 1, 0, 0, 'qes5gag20jop5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ambrose Bierce', 'A política é a condução dos negócios públicos para proveito dos particulares.', 0, 1, 0, 0, 'q1379gpo1b9j9cv', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Galbraith', 'Nada é tão admirável em política quanto uma memória curta.', 0, 1, 0, 0, 'q1nu6pj419wsitl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Robert Louis Stevenson', 'A política é talvez a única profissão para a qual se pensa que não é preciso nenhuma preparação.', 0, 1, 0, 0, 'q1vaxg3c1usspqw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hubert H. Humphrey', 'Errar é humano. Culpar outra pessoa é política.', 0, 1, 0, 0, 'q1fxlp4w1imzgvn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nelson Rodrigues', 'Muitas vezes é a falta de caráter que decide uma partida. Não se faz literatura, política e futebol com bons sentimentos.', 0, 1, 0, 0, 'qled0n417fp8gv', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Magalhães Pinto', 'Política é como nuvem. Você olha e ela está de um jeito. Olha de novo e ela já mudou.', 0, 1, 0, 0, 'q1izdfcb1y3oggj', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ernest Renan', 'Para a política o homem é um meio; para a moral é um fim. A revolução do futuro será o triunfo da moral sobre a política.', 0, 1, 0, 0, 'q1003koghr0uuu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Joseph Joubert', 'Em política, sempre é preciso deixar um osso para a oposição roer.', 0, 1, 0, 0, 'qbdlihk1c28gyr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Napoleão III', 'Em política é preciso curar os males e nunca vingá-los.', 0, 1, 0, 0, 'qgsys8o1hbqnb8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Alex Haley', 'Em toda maneira concebível, a família é um elo com o nosso passado e uma ponte para o nosso futuro.', 0, 1, 0, 0, 'qzlbwro1fa693d', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Robert Frost', 'O lar é o lugar onde, quando você precisa ir, eles têm que recebê-lo.', 0, 1, 0, 0, 'q1nftmfspcue2a', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Charles Kuralt', 'O amor da família e a admiração dos amigos são muito mais importantes do que riqueza e privilégios.', 0, 1, 0, 0, 'qdxzevw1l78cxr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Will Durant', 'A família é o núcleo da civilização.', 0, 1, 0, 0, 'q191anwk1p67y1c', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ring Lardner', 'A família da qual você vem não é tão importante quanto a família que você vai formar.', 0, 1, 0, 0, 'q1i6s2o813l4x0b', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Gail Lumet Buckley', 'Os rostos da família são espelhos mágicos. Ao olhar para aqueles que nos pertencem, vemos o passado, o presente e o futuro.', 0, 1, 0, 0, 'qox2ysc1gpt0kn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Malcolm X', 'A educação é o nosso passaporte para o futuro, pois o amanhã pertence às pessoas que se preparam hoje.', 1, 1, 0, 0, 'q9p1egw1wncih3', 0, 2, 1, '(sem fonte)', 'R', '', 'A educação é o passaporte para o futuro, pois o amanhã pertence a quem se prepara hoje.', 0.9],
      ['Paulo Freire', 'Além de um ato de conhecimento, a educação é também um ato político.', 0, 1, 0, 0, 'qsend81o6sg26', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Alfred Tennyson', 'O conhecimento virá, mas a sabedoria permanecerá.', 0, 1, 0, 0, 'qhx5mgl1ysxvgl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['George Washington Carver', 'A educação é a chave que abre a porta de ouro da liberdade.', 0, 1, 0, 0, 'qquusz0jq128z', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Malcolm Forbes', 'O propósito da educação é substituir uma mente vazia por uma mente aberta.', 0, 1, 0, 0, 'q1b3vt8z159jzxn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Paulo Freire', 'Não existe docência sem discência.', 0, 1, 0, 0, 'q1tu7sts16g032x', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'Respeitar a autonomia e a dignidade de cada um é um imperativo ético, e não um favor que podemos ou não conceder uns aos outros.', 0, 1, 0, 0, 'q1ishu1o1aggwg9', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Herbert Spencer', 'O grande objetivo da educação não é o conhecimento, mas a ação.', 0, 1, 0, 0, 'q1dtqsiosdmapn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hermann Hesse', 'O amor não é uma coisa que se possa pedir a alguém; é algo que nasce e cresce livremente.', 0, 1, 0, 0, 'q1bh56l01cjvbl4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Stendhal', 'O amor é uma flor delicada, mas é preciso ter coragem para ir colhê-la à beira de um precipício.', 0, 1, 0, 0, 'q1rx3buk12or2yv', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Leo Buscaglia', 'O amor verdadeiro não é encontrado; é construído.', 0, 1, 0, 0, 'q4n3lo9ap8aro', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Audrey Hepburn', 'A melhor coisa para se segurar na vida é um ao outro.', 0, 1, 0, 0, 'qdsj2rgjyhocc', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Søren Kierkegaard', 'A felicidade do amor é amar.', 0, 1, 0, 0, 'qhdnohqr5zjfg', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Alain de Botton', 'O amor é uma tentativa de trocar um pedaço de sonho por uma realidade.', 0, 1, 0, 0, 'q95w38swvww5e', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['François Mauriac', 'Amar alguém é ver um milagre invisível aos outros.', 0, 1, 0, 0, 'qw763a412c5xpn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Théophile Gautier', 'Amar é admirar com o coração. Admirar é amar com o cérebro.', 0, 1, 0, 0, 'q1hvg4w8r4prkg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Rabindranath Tagore', 'O amor procura não possuir, mas libertar.', 0, 1, 0, 0, 'q1oya5g21p7kk5i', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Virgílio', 'O amor conquista todas as coisas.', 0, 1, 0, 0, 'q1n2tb8c1ia34x4', 3, 1, 2, 'Obra de Virgílio', 'A-', '', '', ''],
      ['Miguel de Cervantes', 'Quem ama nunca está sozinho.', 0, 1, 0, 0, 'q11sosvg4njheh', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oscar Wilde', 'Conserva o amor no teu coração. Uma vida sem ele é como um jardim sem sol quando as flores estão mortas.', 0, 1, 0, 0, 'q6emadtg6m9rk', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['George Sand', 'Há apenas uma felicidade nesta vida: amar e ser amado.', 1, 1, 0, 0, 'q1wauh3w16q9enr', 0, 2, 1, '(sem fonte)', 'R', '', 'Há uma só felicidade na vida: amar e ser amado.', 0.86],
      ['Paul Tillich', 'O primeiro dever do amor é escutar.', 0, 1, 0, 0, 'qodhai4fc4ujm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mark Zuckerberg', 'O maior risco é não correr nenhum risco.', 0, 1, 0, 0, 'q17vteyo14i6us6', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Ruskin', 'A qualidade nunca é um acidente; ela é sempre o resultado de um esforço inteligente.', 1, 1, 0, 0, 'q1vpnclw10xa40z', 0, 2, 1, '(sem fonte)', 'R', '', 'A qualidade nunca é acidente: é sempre resultado de esforço inteligente.', 0.94],
      ['Albert Camus', 'A única maneira de lidar com um mundo sem liberdade é tornar-se tão absolutamente livre que sua própria existência seja um ato de rebelião.', 0, 1, 0, 0, 'q10tf5w12t16ws', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Leo Buscaglia', 'A vida é uma oportunidade para aprender, amar e crescer.', 0, 1, 0, 0, 'qeclmvo1kvcm3r', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hipócrates', 'A vida é curta, a arte é longa, a oportunidade é fugidia, a experiência enganosa e o julgamento difícil.', 1, 1, 0, 0, 'qwy3rfsheq40y', 0, 2, 1, '(sem fonte)', 'R', '', 'A vida é breve, a arte é longa, a ocasião fugidia, a experiência enganosa, o julgamento difícil.', 0.84],
      ['Benjamin Disraeli', 'A vida é muito breve para ser pequena.', 0, 1, 0, 0, 'q7x7iksl5gskr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Horácio', 'A dificuldade é o que desperta o gênio; a prosperidade apenas o revela.', 0, 1, 0, 0, 'q1sdbn8gxn2atg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Samuel Butler', 'A vida é a arte de tirar conclusões suficientes de premissas insuficientes.', 1, 1, 0, 0, 'q1675des1hy7vnp', 0, 2, 1, '(sem fonte)', 'R', '', 'A vida é a arte de tirar conclusões suficientes a partir de premissas insuficientes.', 0.95],
      ['Louis Armstrong', 'A vida é um espelho: se você sorri para ela, ela sorri de volta para você.', 0, 1, 0, 0, 'q1sdmxpwco8tof', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Anaïs Nin', 'A vida é um processo de tornar-se, uma combinação de estados que temos de atravessar.', 0, 1, 0, 0, 'q1f9cv2snl1qr4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['José Saramago', 'A vida é uma constante despedida e uma constante chegada.', 0, 1, 0, 0, 'q14tq1usk0kf60', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['William Butler Yeats', 'A vida é uma longa preparação para algo que nunca acontece.', 0, 1, 0, 0, 'qd9x0zglmj7lt', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Eleanor Roosevelt', 'Ninguém pode fazer você se sentir inferior sem o seu consentimento.', 0, 1, 0, 0, 'qvaeivtpgqav0', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Amelia Earhart', 'As mulheres devem tentar fazer as mesmas coisas que os homens tentaram fazer. Quando falham, seu fracasso deve ser apenas um desafio para outras.', 0, 1, 0, 0, 'q1hrp0zo1tjrxzb', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Alice Walker', 'A maneira mais comum de as pessoas desistirem de seu poder é pensando que não têm nenhum.', 1, 1, 0, 0, 'qjf36ucapezjr', 0, 2, 1, '(sem fonte)', 'R', '', 'A maneira mais comum de as pessoas abrirem mão do seu poder é achando que não têm nenhum.', 0.85],
      ['Laurel Thatcher Ulrich', 'As mulheres que se comportam bem raramente fazem história.', 1, 1, 0, 0, 'q1e1thzc1weq241', 0, 2, 1, '(sem fonte)', 'R', '', 'Mulheres bem-comportadas raramente fazem história.', 0.84],
      ['Coco Chanel', 'A beleza começa no momento em que você decide ser você mesma.', 0, 1, 0, 0, 'q1melhlo1bxk13q', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nora Ephron', 'Acima de tudo, seja a heroína da sua vida, não a vítima.', 1, 1, 0, 0, 'q104xmn6dixlkk', 1, 2, 1, '(sem fonte)', 'R', '', 'Acima de tudo, seja a heroína da sua vida, não a vítima.', 1.0],
      ['Harriet Beecher Stowe', 'As mulheres são as verdadeiras arquitetas da sociedade.', 0, 1, 0, 0, 'qes86c1x1j5sp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hillary Clinton', 'Os direitos das mulheres são direitos humanos.', 0, 1, 0, 0, 'qvbyvmi1aiclr2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Madame de Staël', 'A mente não tem sexo.', 0, 1, 0, 0, 'q1psne0452x75x', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oliver Goldsmith', 'A amizade é um comércio desinteressado entre iguais.', 0, 1, 0, 0, 'q11u9ly11l59w52', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Woodrow Wilson', 'A amizade é o único cimento que manterá o mundo unido.', 0, 1, 0, 0, 'qdt0cuwufv08x', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Charles Darwin', 'A amizade é uma das maiores fontes de felicidade humana.', 0, 1, 0, 0, 'qhcqndwwy4daw', 3, 1, 2, 'Obra de Darwin', 'A-', '', '', ''],
      ['Edna Buchanan', 'Amigos são a família que escolhemos.', 0, 1, 0, 0, 'qoddeqwptfepd', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dag Hammarskjöld', 'A amizade não precisa de palavras; é a solidão sem a angústia da solidão.', 0, 1, 0, 0, 'qg2jpeon5pog7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['C. S. Lewis', 'A amizade começa quando duas pessoas descobrem que têm algo em comum.', 0, 1, 0, 0, 'q1llalq8i7ncwt', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Walter Winchell', 'Um verdadeiro amigo é aquele que entra quando o resto do mundo sai.', 0, 1, 0, 0, 'qlct5zi1xwcb3c', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jean de La Fontaine', 'A amizade é a sombra da tarde, que cresce até o pôr do sol da vida.', 0, 1, 0, 0, 'q1uwb9jgumw8lm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Elbert Hubbard', 'O amigo é aquele que sabe tudo sobre você e ainda assim gosta de você.', 0, 1, 0, 0, 'qjzlo5p14bdles', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ayn Rand', 'A felicidade é o estado de consciência que procede da realização dos valores.', 0, 1, 0, 0, 'ql57mo0nfftg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Margaret Lee Runbeck', 'A felicidade não é uma estação onde você chega, mas uma maneira de viajar.', 0, 1, 0, 0, 'qbbcljgyh03rn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mark Twain', 'A felicidade é uma condição imaginária que os vivos atribuem aos mortos.', 0, 1, 0, 0, 'q1lqcwd0jon5da', 3, 1, 2, 'Obra de Mark Twain', 'A-', '', '', ''],
      ['Albert Schweitzer', 'A felicidade é o único bem que cresce quando é compartilhado.', 0, 1, 0, 0, 'q1ql4ttkla29lq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hyman Schachtel', 'A felicidade não é ter o que você quer, mas querer o que você tem.', 0, 1, 0, 0, 'qh5d89k184j7u6', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Stuart Mill', 'Aprendi a procurar a felicidade limitando meus desejos, em vez de tentar satisfazê-los.', 0, 1, 0, 0, 'q594xs4yj7mqo', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Robert Ingersoll', 'A felicidade não é uma recompensa; é uma consequência.', 0, 1, 0, 0, 'qbugmw4vscafe', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Roy M. Goodman', 'A felicidade é uma maneira de viajar, não um destino.', 0, 1, 0, 0, 'q1l1v6gk1yb4tfd', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Bertrand Russell', 'O segredo da felicidade é este: deixar que seus interesses sejam tão amplos quanto possível e deixar que suas reações às coisas e pessoas sejam tão amigáveis quanto possível.', 0, 1, 0, 0, 'qs5j9lgvk385n', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Christopher McCandless', 'A alegria da vida vem dos encontros com novas experiências.', 0, 1, 0, 0, 'q13dpgb9gc4g01', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['René Descartes', 'Dividir cada dificuldade em tantas partes quanto for possível é o melhor método para resolvê-la.', 0, 1, 0, 0, 'qye3g8b1nqxhf1', 3, 1, 2, 'Obra de Descartes', 'A-', '', '', ''],
      ['Pierre Abélard', 'A dúvida é o início, não o fim da sabedoria.', 0, 1, 0, 0, 'q17memggr9m4gc', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jorge Luis Borges', 'A dúvida é um dos nomes da inteligência.', 0, 1, 0, 0, 'q1qcvvsc1wou599', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Tales de Mileto', 'Não há nada mais difícil para um homem do que conhecer a si mesmo.', 0, 1, 0, 0, 'qy9l9jw1xmbper', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Heráclito', 'O caráter de um homem é o seu destino.', 1, 1, 0, 0, 'q1bz1cnophdnln', 0, 2, 1, 'Fragmentos de Heráclito', 'A-', '', 'O caráter do homem é o seu destino.', 0.93],
      ['Immanuel Kant', 'Ouse saber.', 0, 1, 0, 0, 'q8ufmdsn5dnms', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Hannah Arendt', 'A essência dos direitos humanos é o direito de ter direitos.', 0, 1, 0, 0, 'q13n4b3s1e3ou4w', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Hannah Arendt', 'O perdão é a chave para a ação e para a liberdade.', 0, 1, 0, 0, 'q1kjcbjcemmm99', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'A vida começa no outro lado do desespero.', 0, 1, 0, 0, 'q1c2z9uweaxbu4', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Albert Camus', 'O absurdo nasce do confronto entre a busca humana por sentido e o silêncio do universo.', 0, 1, 0, 0, 'qa6etjgby2s24', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Karl Jaspers', 'A filosofia significa estar a caminho; as perguntas são mais importantes que as respostas.', 0, 1, 0, 0, 'qdxqqosdt6jz9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Alexander Pope', 'A verdadeira generosidade consiste em dar e esquecer, receber e lembrar.', 0, 1, 0, 0, 'q4aja9w1vkw55y', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Henry Ward Beecher', 'A gratidão é o começo da cortesia, da amizade e de todas as boas relações humanas.', 0, 1, 0, 0, 'qqidbuc1gkgbsd', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mihaly Csikszentmihalyi', 'Agradecer é reconhecer que a vida é feita também pela contribuição dos outros.', 0, 1, 0, 0, 'q1wrs4841pvsk9d', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maya Angelou', 'Você pode encontrar muitas derrotas, mas não deve ser derrotado.', 1, 1, 0, 0, 'q5e8ww8zqu1xd', 0, 2, 1, 'Obra e entrevistas de Maya Angelou', 'A-', '', 'Você pode enfrentar muitas derrotas, mas não pode ser derrotado.', 0.91],
      ['Arthur Ashe', 'Comece onde você está. Use o que você tem. Faça o que você pode.', 1, 1, 0, 0, 'q1ewv6a019pipqw', 0, 2, 1, '(sem fonte)', 'R', '', 'Comece de onde você está. Use o que você tem. Faça o que você pode.', 0.98],
      ['Vincent van Gogh', 'Grandes coisas são feitas por uma série de pequenas coisas reunidas.', 1, 1, 0, 0, 'qov3fb41itg1et', 0, 2, 1, '(sem fonte)', 'R', '', 'Grandes coisas não são feitas por impulso, mas por uma série de pequenas coisas reunidas.', 0.88],
      ['Anaïs Nin', 'A vida encolhe ou se expande proporcionalmente à coragem de cada um.', 0, 1, 0, 0, 'q1w7hr281ner0ou', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['George Eliot', 'Não há desespero tão absoluto quanto aquele que vem nos primeiros momentos de nossa primeira grande tristeza.', 0, 1, 0, 0, 'q10l1li411p7fx0', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['C. S. Lewis', 'As dificuldades muitas vezes preparam pessoas comuns para destinos extraordinários.', 0, 1, 0, 0, 'q7hzq4ojeci2a', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Lord Byron', 'A adversidade é o primeiro caminho para a verdade.', 0, 1, 0, 0, 'qc86s6s1ndept9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['T. S. Eliot', 'Apenas aqueles que arriscam ir longe demais podem descobrir até onde podem ir.', 0, 1, 0, 0, 'qs2lo203slxd5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Aldous Huxley', 'A experiência não é o que acontece com você; é o que você faz com o que acontece com você.', 0, 1, 0, 0, 'qnve02ffs9ew9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['J.K. Rowling', 'A felicidade pode ser encontrada mesmo nos momentos mais sombrios, se alguém se lembrar de acender a luz.', 1, 1, 0, 0, 'q1ug0co812szx08', 0, 2, 1, '(sem fonte)', 'R', '', 'A felicidade pode ser encontrada mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.', 0.86],
      ['Victor Hugo', 'Mesmo a noite mais escura terminará e o sol nascerá.', 0, 1, 0, 0, 'q70wtegj1qh5x', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Victor Hugo', 'Aqueles que sofrem têm o direito de serem consolados.', 0, 1, 0, 0, 'q1xqo42w1fa43jn', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Karl Menninger', 'O amor cura as pessoas — tanto aquelas que o dão quanto aquelas que o recebem.', 0, 1, 0, 0, 'q6v8e5fcnlqcm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mark Twain', 'A bondade é uma linguagem que os surdos podem ouvir e os cegos podem ver.', 1, 1, 0, 0, 'qrxw4vsftqndl', 0, 2, 1, 'Obra de Mark Twain', 'A-', '', 'A bondade é a linguagem que o surdo pode ouvir e o cego pode ver.', 0.93],
      ['Clarice Lispector', 'A vida em si é um milagre.', 0, 1, 0, 0, 'q75nkzp1jvh5vq', 3, 1, 2, 'Obra de Clarice Lispector', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'O privilégio de uma vida é tornar-se quem você realmente é.', 0, 1, 0, 0, 'q1254zjyy8svw', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Não existe crescimento da consciência sem dor.', 0, 1, 0, 0, 'q1ea44821vbteo9', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A aceitação de si mesmo é a essência de todo problema moral e de toda uma visão de vida.', 0, 1, 0, 0, 'q17xbv2z1n9majf', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Eu não sou o que aconteceu comigo, eu sou o que escolho me tornar.', 0, 1, 0, 0, 'q1lohmnckqrlmn', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A vida realmente começa aos quarenta. Até então, você está apenas fazendo pesquisa.', 0, 1, 0, 0, 'q16fk2q41eugnly', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['George Bernard Shaw', 'A vida não é sobre encontrar a si mesmo. A vida é sobre criar a si mesmo.', 0, 1, 0, 0, 'q1ocqk8k7ihhq', 3, 1, 2, 'Obra de George Bernard Shaw', 'A-', '', '', ''],
      ['Sigmund Freud', 'A interpretação dos sonhos é o caminho real para o conhecimento das atividades inconscientes da mente.', 0, 1, 0, 0, 'q1336pdw1mh8lm5', 3, 1, 2, 'Obra de Freud', 'A-', '', '', ''],
      ['Protágoras', 'O homem é a medida de todas as coisas.', 0, 1, 0, 0, 'q1vh8udcslhodq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Salvador Dalí', 'A criatividade requer coragem.', 0, 1, 0, 0, 'q1n826901280go7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Henri Matisse', 'O essencial é encontrar uma maneira de expressar aquilo que somos.', 0, 1, 0, 0, 'q1q8zojkvzqjmf', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'Um líder é alguém que conhece o caminho, segue o caminho e mostra o caminho.', 1, 1, 0, 0, 'q1vk7rv812v8p1f', 0, 2, 1, 'Obra de John C. Maxwell', 'A-', '', 'Um líder é alguém que conhece o caminho, percorre o caminho e mostra o caminho.', 0.93],
      ['Donald McGannon', 'A liderança não é uma questão de posição, mas de ação.', 0, 1, 0, 0, 'qn5p5wk1n6r7zn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dwight D. Eisenhower', 'A liderança é a arte de conseguir que alguém faça algo que você quer porque essa pessoa quer fazê-lo.', 0, 1, 0, 0, 'q4xlnw9hms7ph', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Stephen Covey', 'A liderança é uma escolha, não uma posição.', 0, 1, 0, 0, 'qwd0igsbivvgk', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Phil Jackson', 'A força de uma equipe é cada membro individualmente. A força de cada membro é a equipe.', 0, 1, 0, 0, 'q1y6i6w81r0qn2x', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'A liderança não é sobre títulos, cargos ou posições. É sobre uma pessoa influenciando outra.', 0, 1, 0, 0, 'q172ytlo8f3t8h', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Albert Schweitzer', 'O exemplo não é a principal coisa na influência sobre os outros; é a única coisa.', 0, 1, 0, 0, 'q1y5pwrgtbkxs', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Max De Pree', 'A primeira responsabilidade de um líder é definir a realidade. A última é agradecer.', 1, 1, 0, 0, 'q1zddrk1anpif8', 0, 2, 1, '(sem fonte)', 'R', '', 'A primeira responsabilidade de um líder é definir a realidade. A última é dizer obrigado.', 0.89],
      ['Douglas MacArthur', 'O líder verdadeiro possui a confiança para estar sozinho, a coragem para tomar decisões difíceis e a compaixão para ouvir as necessidades dos outros.', 0, 1, 0, 0, 'qm6s8hhqe4pwk', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'A inovação é o instrumento específico do empreendedor, o ato que confere recursos com uma nova capacidade de criar riqueza.', 0, 1, 0, 0, 'q1yw0ovv1krutfn', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Thiel', 'A competição é para perdedores.', 0, 1, 0, 0, 'q1pc0yv81qtymzw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Al Ries e Jack Trout', 'O marketing não é uma batalha de produtos; é uma batalha de percepções.', 1, 1, 0, 0, 'q1ra3kyg1fhroal', 0, 2, 1, '(sem fonte)', 'R', '', 'Marketing não é uma batalha de produtos: é uma batalha de percepções.', 0.99],
      ['Seth Godin', 'Se você não é diferente, você é invisível.', 0, 1, 0, 0, 'q1q25fik1ku6yaf', 3, 1, 2, 'Obra de Seth Godin', 'A-', '', '', ''],
      ['Howard Schultz', 'O sucesso de uma marca depende da conexão emocional que ela cria com seus clientes.', 0, 1, 0, 0, 'qkrfcn9f167x5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['David Ogilvy', 'O que você diz em publicidade é mais importante do que como você diz.', 0, 1, 0, 0, 'qwm1tci19jcww9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Templeton', 'As quatro palavras mais perigosas nos investimentos são: desta vez é diferente.', 0, 1, 0, 0, 'qmfgvkr1hmixwf', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Maynard Keynes', 'O mercado pode permanecer irracional por mais tempo do que você consegue permanecer solvente.', 0, 1, 0, 0, 'q1kyg9tojicuov', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Locke', 'O fim do governo é o bem dos homens.', 0, 1, 0, 0, 'q1e83ad4i5sfeg', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['John Locke', 'Todos os homens são naturalmente livres e iguais.', 0, 1, 0, 0, 'q163utpk64y49e', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['Dom Pedro II', 'Não conheço missão maior e mais nobre que a de dirigir a educação da juventude.', 0, 1, 0, 0, 'q1fj3et01322ql', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ulysses Guimarães', 'A Constituição quer mudar o homem em cidadão, o cidadão em povo e o povo em Brasil.', 0, 1, 0, 0, 'q15uqbxs18jiojs', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['José Martí', 'A liberdade custa muito caro, e é preciso decidir-se a pagar seu preço ou viver sem ela.', 0, 1, 0, 0, 'q1bm29mg1k7p8gx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hannah Arendt', 'O sentido da política é a liberdade.', 0, 1, 0, 0, 'qy6kq6n1fqcrt6', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Václav Havel', 'A verdade e o amor devem prevalecer sobre a mentira e o ódio.', 0, 1, 0, 0, 'qb240s01cchboo', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Stuart Mill', 'A única liberdade que merece esse nome é a de buscar nosso próprio bem à nossa própria maneira.', 1, 1, 0, 0, 'q1axrfys6tf1k6', 0, 2, 1, 'Obra de John Stuart Mill', 'A-', '', 'A única liberdade que merece o nome é a de buscar o nosso próprio bem à nossa própria maneira.', 0.96],
      ['Karl Marx', 'O livre desenvolvimento de cada um é condição para o livre desenvolvimento de todos.', 0, 1, 0, 0, 'q1r8etkg1pck7qe', 3, 1, 2, 'Obra de Marx', 'A-', '', '', ''],
      ['George Orwell', 'Quem controla o passado controla o futuro; quem controla o presente controla o passado.', 0, 1, 0, 0, 'qlbxrzopkvfok', 3, 1, 2, 'Obra de George Orwell', 'A-', '', '', ''],
      ['George Orwell', 'A linguagem política é criada para fazer mentiras parecerem verdadeiras e crimes respeitáveis.', 0, 1, 0, 0, 'qtva28fb9qny', 3, 1, 2, 'Obra de George Orwell', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A verdade raramente prevalece em uma disputa porque os homens não procuram a verdade, mas a vitória.', 0, 1, 0, 0, 'q17nvuqglvzi1y', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Stanley Milgram', 'Pessoas comuns podem realizar atos extraordinários quando colocadas em uma estrutura de autoridade.', 0, 1, 0, 0, 'qplrzvk71aclf', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Michel Foucault', 'Onde há poder, há resistência.', 1, 1, 0, 0, 'q13olg081f1yx12', 1, 2, 1, 'Obra de Foucault', 'A-', '', 'Onde há poder, há resistência.', 1.0],
      ['George Burns', 'A felicidade é ter uma família grande, amorosa, dedicada e unida em outra cidade.', 0, 1, 0, 0, 'qzanuwr1lpci4o', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Reinhold Niebuhr', 'A vida familiar é íntima demais para ser preservada apenas pelo espírito da justiça; ela é sustentada por um espírito de amor que vai além da justiça.', 0, 1, 0, 0, 'qvh4vj01mp29xu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Lee Iacocca', 'A única instituição que conheço que realmente funciona é a família.', 0, 1, 0, 0, 'q1f1lpts3x6uu7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Immanuel Kant', 'A educação é o processo pelo qual o homem se torna homem.', 0, 1, 0, 0, 'qva8l4014dz7gp', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['B. R. Ambedkar', 'A cultura da mente deve ser o objetivo maior da existência humana.', 0, 1, 0, 0, 'q18k703w1mcz5s', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['B. R. Ambedkar', 'Eduquem, organizem e agitem.', 0, 1, 0, 0, 'q1fq79kr1dqlrr6', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Abul Kalam Azad', 'A educação ministrada com o coração pode revolucionar a sociedade.', 0, 1, 0, 0, 'q1kpac481gpqhqk', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Robert M. Hutchins', 'O objetivo da educação é preparar os jovens para educarem a si mesmos durante toda a vida.', 0, 1, 0, 0, 'q1f22pdw1q14293', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['James Beattie', 'O objetivo da educação deve ser ensinar-nos como pensar, e não o que pensar.', 0, 1, 0, 0, 'q1mtban61nysal', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Locke', 'A educação começa o cavalheiro, mas a leitura, a boa companhia e a reflexão devem completá-lo.', 0, 1, 0, 0, 'qycg9rl1cr12f7', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['Ernest Dimnet', 'As crianças precisam ser educadas, mas também precisam ser deixadas para educar a si mesmas.', 0, 1, 0, 0, 'qjsdl9w1o9xf9c', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Paulo Freire', 'A educação funciona como instrumento para facilitar a integração das novas gerações na lógica do sistema atual, ou torna-se prática da liberdade.', 0, 1, 0, 0, 'q1b2dpksp8okl2', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'Lavar as mãos diante do conflito entre os poderosos e os despossuídos significa ficar ao lado dos poderosos, não ser neutro.', 0, 1, 0, 0, 'q17srjlo1lhej5k', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'O homem, como um ser histórico, inserido num permanente movimento de procura, faz e refaz constantemente o seu saber.', 0, 1, 0, 0, 'qgccok81pmejsu', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'Só, na verdade, quem pensa certo, mesmo que às vezes pense errado, é quem pode ensinar a pensar certo.', 0, 1, 0, 0, 'q690ryx129woe8', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'Falar a palavra verdadeira é transformar o mundo.', 0, 1, 0, 0, 'q1ziuz4q7wpri', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'O diálogo exige uma intensa fé nos seres humanos, fé no seu poder de fazer e refazer, de criar e recriar.', 0, 1, 0, 0, 'q13wpx3q19c9dlj', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'Ninguém pode ser autenticamente humano enquanto impede os outros de também o serem.', 0, 1, 0, 0, 'q1h3wuns1p82uxq', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Victor Hugo', 'A vida sem amor é como uma flor sem perfume.', 0, 1, 0, 0, 'ql2nhj411i4x8s', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Fiódor Dostoiévski', 'O amor é uma força mais formidável que qualquer outra.', 0, 1, 0, 0, 'qozmsm5rk9u3g', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Gottfried Wilhelm Leibniz', 'Amar é encontrar na felicidade de outrem a própria felicidade.', 0, 1, 0, 0, 'q1x9h10s1lxlr16', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Johann Wolfgang von Goethe', 'O amor não domina; ele cultiva.', 0, 1, 0, 0, 'q9ijcbzmawz7t', 3, 1, 2, 'Obra de Goethe', 'A-', '', '', ''],
      ['Jean-Pierre Claris de Florian', 'O prazer do amor dura apenas um instante; a dor do amor dura a vida inteira.', 0, 1, 0, 0, 'qod44kk126cyuy', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Liev Tolstói', 'Amar é viver a vida dos que amamos.', 0, 1, 0, 0, 'q1g8jy951fuupal', 3, 1, 2, 'Obra de Tolstói', 'A-', '', '', ''],
      ['Voltaire', 'O amor é uma tela fornecida pela natureza e bordada pela imaginação.', 0, 1, 0, 0, 'qt7l86wa64kwn', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Peter Drucker', 'O empreendedor sempre procura a mudança, responde a ela e a explora como uma oportunidade.', 0, 1, 0, 0, 'q1tgp1kw13v0o1j', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Seth Godin', 'As pessoas não compram bens e serviços. Elas compram relações, histórias e magia.', 0, 1, 0, 0, 'q1gzy53ke89toq', 3, 1, 2, 'Obra de Seth Godin', 'A-', '', '', ''],
      ['Miguel de Cervantes', 'A vida de cada homem é um conto escrito por ele mesmo.', 0, 1, 0, 0, 'q1oc1ri8z8d31k', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Fernando Pessoa', 'Para viajar basta existir.', 0, 1, 0, 0, 'qub010o16k1a0v', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Albert Camus', 'A vida é o conjunto de todas as suas escolhas.', 0, 1, 0, 0, 'qtf910grmlicj', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'A existência precede a essência.', 1, 1, 0, 0, 'q1cjblhc1ydz6c8', 1, 2, 1, 'Obra de Sartre', 'A-', '', 'A existência precede a essência.', 1.0],
      ['Sholom Aleichem', 'A vida é um sonho para os sábios, um jogo para os tolos, uma comédia para os ricos e uma tragédia para os pobres.', 1, 1, 0, 0, 'qpn1bsw1i029yg', 1, 2, 1, '(sem fonte)', 'R', '', 'A vida é um sonho para os sábios, um jogo para os tolos, uma comédia para os ricos e uma tragédia para os pobres.', 1.0],
      ['Maya Angelou', 'A vida é feita de momentos, não de coisas.', 0, 1, 0, 0, 'q1hhj2shvd32rp', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Osho', 'A vida é um mistério a ser vivido, não um problema a ser resolvido.', 0, 1, 0, 0, 'qe3dkt8wiwre2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Lennon', 'A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos.', 1, 1, 0, 0, 'q1mk5cp1bmpabg', 0, 2, 1, '(sem fonte)', 'R', '', 'A vida é o que acontece enquanto você está ocupado fazendo outros planos.', 0.96],
      ['Sophie Scholl', 'Defenda aquilo em que você acredita, mesmo que isso signifique ficar sozinha.', 0, 1, 0, 0, 'qqzft481wf4948', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Angela Davis', 'Quando uma mulher negra se movimenta, toda a estrutura da sociedade se movimenta com ela.', 0, 1, 0, 0, 'qeky0s31168asq', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['Angela Davis', 'Não há caminho para a liberdade; a liberdade é o caminho.', 0, 1, 0, 0, 'q6tqkekr1y88p', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['bell hooks', 'O feminismo não é apenas sobre mulheres; é sobre permitir que todas as pessoas tenham vidas mais plenas.', 0, 1, 0, 0, 'q17r8zi073hssu', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['Virginia Woolf', 'A mulher deve ter dinheiro e um quarto só seu se quiser escrever ficção.', 0, 1, 0, 0, 'q724mv51nafro1', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['Rosa Luxemburgo', 'A liberdade é sempre e exclusivamente liberdade para aquele que pensa diferente.', 0, 1, 0, 0, 'qxgbii4a9a4v3', 3, 1, 2, 'Obra e cartas de Rosa Luxemburgo', 'A-', '', '', ''],
      ['Sheryl Sandberg', 'As mulheres precisam de oportunidades, não de privilégios.', 0, 1, 0, 0, 'qq4e8c4shhpxx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Michelle Bachelet', 'A igualdade de gênero é uma condição essencial para o desenvolvimento humano.', 0, 1, 0, 0, 'q104nm1k1p1j0po', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Christine Lagarde', 'Quando as mulheres participam plenamente da economia, todos se beneficiam.', 0, 1, 0, 0, 'q1q68dlkes9rns', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Serena Williams', 'O sucesso de cada mulher deve inspirar outra a ser mais corajosa.', 0, 1, 0, 0, 'q10ly4ic1sb6z78', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['C. S. Lewis', 'A amizade começa quando uma pessoa diz à outra: "O quê? Você também? Eu pensei que era o único!"', 0, 1, 0, 0, 'q11feqvshj9pt3', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Pitágoras', 'A amizade é uma igualdade harmoniosa.', 0, 1, 0, 0, 'q7cup01ntxs38', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['São Jerônimo', 'A amizade que pode cessar nunca foi verdadeira.', 0, 1, 0, 0, 'q1d9axyt1520q41', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Eurípides', 'A amizade é a única coisa que dá valor à vida.', 0, 1, 0, 0, 'q1tacywv13v2r6x', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Elbert Hubbard', 'A amizade é a única coisa que cresce quanto mais se compartilha.', 0, 1, 0, 0, 'q38no401g6iim8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nathaniel Hawthorne', 'A felicidade é uma borboleta que, quando perseguida, está sempre além do seu alcance, mas que pode pousar sobre você se você se sentar tranquilamente.', 0, 1, 0, 0, 'qouco8w10n9991', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['William James', 'A ação nem sempre traz felicidade, mas não há felicidade sem ação.', 0, 1, 0, 0, 'qhgagb0wye9a5', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A felicidade é encontrada quando o homem se reconcilia consigo mesmo.', 0, 1, 0, 0, 'q2bejihyjnf0t', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Johann Wolfgang von Goethe', 'O homem que não encontra satisfação em si mesmo nunca a encontrará em nenhum outro lugar.', 0, 1, 0, 0, 'qt0vq5qr7vo1w', 3, 1, 2, 'Obra de Goethe', 'A-', '', '', ''],
      ['Cleantes', 'O destino conduz aquele que consente e arrasta aquele que resiste.', 0, 1, 0, 0, 'qcqingb1k8ayvp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['René Descartes', 'Não basta ter uma boa mente; o importante é usá-la bem.', 0, 1, 0, 0, 'qkoqr7s1qoa52g', 3, 1, 2, 'Obra de Descartes', 'A-', '', '', ''],
      ['Immanuel Kant', 'A menoridade é a incapacidade de servir-se do próprio entendimento sem a direção de outro.', 0, 1, 0, 0, 'q1y41u04ty25ov', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Immanuel Kant', 'Age apenas segundo uma máxima que possas querer que se torne uma lei universal.', 1, 1, 0, 0, 'qmjhnbshax40y', 0, 2, 1, 'Obra de Kant', 'A-', '', 'Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne lei universal.', 0.81],
      ['Søren Kierkegaard', 'A ansiedade é a vertigem da liberdade.', 1, 1, 0, 0, 'q1xmxlbf1vamgl8', 0, 2, 1, 'Diários e obra de Kierkegaard', 'A-', '', 'A angústia é a vertigem da liberdade.', 0.89],
      ['Søren Kierkegaard', 'A maior coisa que um homem pode fazer é escolher a si mesmo.', 0, 1, 0, 0, 'q1igxews15lq4gi', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'A pureza do coração é querer uma única coisa.', 0, 1, 0, 0, 'q1iag1y81fs7px', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Heráclito', 'A natureza ama esconder-se.', 0, 1, 0, 0, 'qgkypsg1e570j5', 3, 1, 2, 'Fragmentos de Heráclito', 'A-', '', '', ''],
      ['Bertrand Russell', 'A sabedoria é saber o que fazer com o conhecimento.', 0, 1, 0, 0, 'qxdt0wg1qaal1i', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Bertrand Russell', 'O homem que busca a verdade deve libertar-se de seus preconceitos.', 0, 1, 0, 0, 'q1f6vp1cmkxd8d', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Voltaire', 'Julga um homem pelas suas perguntas, não pelas suas respostas.', 0, 1, 0, 0, 'qcy5blpnr98wz', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Karl Jaspers', 'A comunicação é o caminho para a verdade entre os seres humanos.', 0, 1, 0, 0, 'q1sezby43i1ig2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jean-Paul Sartre', 'Somos aquilo que fazemos com o que fizeram de nós.', 0, 1, 0, 0, 'q1gxngi08asiza', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Albert Camus', 'O homem é a única criatura que se recusa a ser o que é.', 0, 1, 0, 0, 'q1gszgj4elc6ok', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Albert Camus', 'A verdadeira generosidade para com o futuro consiste em dar tudo ao presente.', 0, 1, 0, 0, 'qmr7ysohxcw4o', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Publílio Siro', 'A ingratidão é mais forte que qualquer argumento.', 0, 1, 0, 0, 'qua90mcc1fy27', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Georg Simmel', 'A gratidão é a memória moral da humanidade.', 0, 1, 0, 0, 'q18zawgo4mjco0', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jacques Maritain', 'A gratidão é a mais requintada forma de educação.', 0, 1, 0, 0, 'qryzdjw1693uxr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mark Twain', 'A coragem é resistência ao medo, domínio do medo, não ausência do medo.', 0, 1, 0, 0, 'qt5fc7glvz39g', 3, 1, 2, 'Obra de Mark Twain', 'A-', '', '', ''],
      ['Mark Twain', 'O segredo de progredir é começar.', 0, 1, 0, 0, 'q1pmauua8feswd', 3, 1, 2, 'Obra de Mark Twain', 'A-', '', '', ''],
      ['Robert Collier', 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', 1, 1, 0, 0, 'q16x56wu1jadglg', 1, 2, 1, '(sem fonte)', 'R', '', 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', 1.0],
      ['Arthur Ashe', 'O sucesso é uma jornada, não um destino. O fazer é muitas vezes mais importante que o resultado.', 1, 1, 0, 0, 'qtpgwf91ooan', 0, 2, 1, '(sem fonte)', 'R', '', 'O sucesso é uma viagem, não um destino: fazer é muitas vezes mais importante do que chegar.', 0.81],
      ['Guy Kawasaki', 'A inovação acontece quando pessoas criativas encontram problemas reais para resolver.', 0, 1, 0, 0, 'qmwlb40os2rnv', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ann Landers', 'A oportunidade frequentemente vem disfarçada de trabalho duro.', 0, 1, 0, 0, 'q1ift4wv1ed3gqg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Virgílio', 'A sorte favorece os corajosos.', 0, 1, 0, 0, 'qxm6w4uh5dlm', 3, 1, 2, 'Obra de Virgílio', 'A-', '', '', ''],
      ['William James', 'A maior arma contra o estresse é nossa capacidade de escolher um pensamento em vez de outro.', 1, 1, 0, 0, 'q17bgvo4bgwwd1', 0, 2, 1, 'Obra de William James', 'A-', '', 'A maior arma contra o estresse é a nossa capacidade de escolher um pensamento em vez de outro.', 0.99],
      ['Victor Hugo', 'A esperança é a palavra que Deus escreveu na testa de cada homem.', 0, 1, 0, 0, 'qnb9cf8yukt7n', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Victor Hugo', 'A alma tem ilusões como o pássaro tem asas; é isso que a sustenta.', 0, 1, 0, 0, 'qkejnps9es7mr', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Dalai Lama', 'A paz vem de dentro de cada pessoa quando ela encontra harmonia consigo mesma.', 0, 1, 0, 0, 'qfndqzr1jzrsj7', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Clarice Lispector', 'Eu escrevo como se fosse salvar a vida de alguém. Provavelmente a minha própria vida.', 0, 1, 0, 0, 'qqcchf01bnju3b', 3, 1, 2, 'Obra de Clarice Lispector', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A sua visão se tornará clara somente quando você olhar para dentro do seu coração.', 0, 1, 0, 0, 'q8d3mx853jc0z', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A curiosa tarefa da psicologia é tornar-nos familiarizados com as coisas que mais evitamos.', 0, 1, 0, 0, 'q17ejj1k15zq96', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A individualização é o processo pelo qual uma pessoa se torna um ser único e indivisível.', 0, 1, 0, 0, 'q1hvnih0ifoqjm', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A vida não vivida é uma doença da qual se pode morrer.', 0, 1, 0, 0, 'qw4u59sceljb4', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'O que você nega o submete; o que você aceita o transforma.', 0, 1, 0, 0, 'q1okrjf1k6ye1v', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'Somos nossas escolhas.', 0, 1, 0, 0, 'q111wrgw4ruvl8', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'Ousaria eu ser eu mesmo?', 0, 1, 0, 0, 'q139uc7kte1u2', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Rosalynn Carter', 'Um líder leva as pessoas onde elas querem ir. Um grande líder leva as pessoas onde elas precisam estar.', 0, 1, 0, 0, 'qhk5k8gc8t0qy', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Robert K. Greenleaf', 'Aquele que quer liderar deve primeiro aprender a servir.', 0, 1, 0, 0, 'q1n5dvag89hhnj', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Norman Schwarzkopf', 'A liderança é uma combinação poderosa de estratégia e caráter. Mas se você tiver que ficar sem um deles, fique sem estratégia.', 1, 1, 0, 0, 'qi5mwtw191zdtk', 0, 2, 1, '(sem fonte)', 'R', '', 'A liderança é uma combinação poderosa de estratégia e caráter. Mas, se você tiver de ficar sem um dos dois, fique sem a estratégia.', 0.94],
      ['Andrew Carnegie', 'Nenhum homem será um grande líder se quiser fazer tudo sozinho ou receber todo o crédito.', 0, 1, 0, 0, 'q334r501u75xgl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'O maior perigo em tempos de turbulência não é a turbulência; é agir com a lógica de ontem.', 0, 1, 0, 0, 'q1drn2dgixkhcs', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Andy Grove', 'As empresas precisam estar dispostas a destruir seus próprios produtos antes que seus concorrentes o façam.', 0, 1, 0, 0, 'q28nows1q9pab4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nicolas Hayek', 'Empreendedores são simplesmente aqueles que entendem que há pouca diferença entre obstáculos e oportunidades e são capazes de transformar ambos em vantagem.', 0, 1, 0, 0, 'qy6l0qypki2ig', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Chris Grosser', 'Oportunidades não acontecem. Você as cria.', 0, 1, 0, 0, 'qf1m1v410zrn7z', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Brian Chesky', 'As melhores empresas resolvem problemas reais de pessoas reais.', 0, 1, 0, 0, 'q8dwsz41tbhcko', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['David Aaker', 'Uma marca é a soma das experiências que as pessoas têm com uma empresa.', 0, 1, 0, 0, 'q10zs1ncw3oe52', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Howard Stevenson', 'O empreendedorismo é a busca de oportunidades além dos recursos atualmente controlados.', 0, 1, 0, 0, 'qmk961s22d0t7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Harry Markowitz', 'A diversificação é a única coisa próxima de um almoço grátis nos investimentos.', 0, 1, 0, 0, 'qx7l4vg1yj1ur5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Thomas J. Stanley', 'A riqueza é o que você acumula, não aquilo que você gasta.', 0, 1, 0, 0, 'qrgstxo101wj9g', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Locke', 'Onde não há lei, não há liberdade.', 0, 1, 0, 0, 'qvrc8ozhqwl74', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['Cícero', 'A liberdade consiste em obedecer às leis que nós mesmos estabelecemos.', 0, 1, 0, 0, 'q1nt3qthcrt6ni', 3, 1, 2, 'Obra de Cícero', 'A-', '', '', ''],
      ['Isaiah Berlin', 'A liberdade de escolha é uma característica essencial da dignidade humana.', 0, 1, 0, 0, 'q8td3fwimq4xm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'É preciso distinguir entre ter razão e parecer ter razão.', 0, 1, 0, 0, 'q1ympzk41rdzlyr', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Amos Tversky', 'Erros sistemáticos são previsíveis, não aleatórios.', 0, 1, 0, 0, 'qj573h08q77dp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Noam Chomsky', 'A propaganda é para uma democracia aquilo que a violência é para um Estado totalitário.', 1, 1, 0, 0, 'q1j6jx9oh0l25q', 0, 2, 1, 'Obra de Noam Chomsky', 'A-', '', 'A propaganda é para a democracia o que o cassetete é para o Estado totalitário.', 0.81],
      ['Michael J. Fox', 'A família não é uma coisa importante. É tudo.', 0, 1, 0, 0, 'q1k4fm4kvfiwiu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Desmond Tutu', 'Você não escolhe sua família. Ela é o presente de Deus para você, assim como você é para eles.', 0, 1, 0, 0, 'q1opqhw8slcuys', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Brad Henry', 'Uma criança educada apenas na escola é uma criança não educada.', 0, 1, 0, 0, 'q1jnfio8ng9mxz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jane Howard', 'Chame-a de clã, chame-a de rede, chame-a de tribo, chame-a de família: seja lá o que você chamar, seja lá quem você for, você precisa de uma.', 0, 1, 0, 0, 'q195trjm19uw8ww', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Erma Bombeck', 'Quando seus filhos são pequenos, você é uma boa mãe se eles sobrevivem. Quando são adolescentes, você é uma boa mãe se eles não a matam de preocupação.', 0, 1, 0, 0, 'qkayp5ksbemg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dodie Smith', 'A família é uma unidade composta não apenas de crianças, mas de homens, mulheres e, ocasionalmente, avós.', 0, 1, 0, 0, 'q13saev8u94q43', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Marge Kennedy', 'Não precisamos de outro herói. Precisamos de mais pais e mães dispostos a serem heróis para seus próprios filhos.', 0, 1, 0, 0, 'q11njm68hpvpud', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Barbara Bush', 'Seu trabalho é amar seus filhos, não controlar suas escolhas.', 0, 1, 0, 0, 'q1yi821cllgsxd', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Anthony Brandt', 'Uma criança precisa se sentir amada mais do que qualquer outra coisa no mundo.', 0, 1, 0, 0, 'q1xrj6lcc5jjgv', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Friedrich Schleiermacher', 'A casa é onde a alma descansa.', 0, 1, 0, 0, 'q14bsj0omamlgy', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Sydney J. Harris', 'Os pais que sabem ouvir são os melhores professores.', 0, 1, 0, 0, 'qx3jca012adc4u', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Reid Hoffman', 'Nenhum plano de negócios sobrevive ao primeiro contato com os clientes.', 0, 1, 0, 0, 'qm3dpdcyaigpr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Paul Graham', 'A maioria das grandes ideias de startups parece, à primeira vista, uma má ideia.', 0, 1, 0, 0, 'q1j241pv1aurata', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Marc Benioff', 'A inovação nunca vem de cima para baixo; vem de qualquer lugar da organização.', 0, 1, 0, 0, 'q162cytsi32rs8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Indra Nooyi', 'Liderar com propósito é liderar com o coração e com a mente.', 0, 1, 0, 0, 'q3qk3i4evd7co', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Naval Ravikant', 'Junte-se especificidade a persistência, e a sorte encontrará você.', 0, 1, 0, 0, 'q1vttib419xt3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Werner von Braun', 'A pesquisa é aquilo que faço quando não sei o que estou fazendo.', 0, 1, 0, 0, 'qpmvg9g5b0kgx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ailton Krenak', 'Adiar o fim do mundo é resistir à ilusão de que o discurso sempre vence a verdade.', 0, 1, 0, 0, 'q1d9gfj0ymvhzq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dalai Lama', 'A felicidade nem sempre vem daquilo que você faz diretamente. É frequentemente resultado daquilo que você deixa de fazer.', 0, 1, 0, 0, 'q14zw992b2c9ov', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Anne Frank', 'Que privilégio maravilhoso é poder escrever, porque, de outro modo, eu ficaria completamente sufocada.', 0, 1, 0, 0, 'q6ulyobrcja1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Charles Spurgeon', 'A alegria compartilhada é uma alegria dobrada.', 0, 1, 0, 0, 'q10ys17o5vgoj7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Konosuke Matsushita', 'Antes de fazer um produto, fazemos pessoas.', 0, 1, 0, 0, 'qicfxs0p9ce6b', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Akio Morita', 'Nunca temos medo de errar. Erros são a fonte de nossa criatividade.', 0, 1, 0, 0, 'q1tkakaop9xa9r', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Richard Bach', 'O vínculo que une sua verdadeira família não é de sangue, mas de respeito e alegria pela vida uns dos outros. Raramente os membros de uma mesma família crescem sob o mesmo teto.', 0, 1, 0, 0, 'qrfgvjw5vdszt', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Paulo Freire', 'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.', 1, 1, 0, 0, 'q1hov5wgxx4q54', 1, 2, 1, 'Obra de Paulo Freire', 'A-', '', 'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.', 1.0],
      ['Paulo Freire', 'Estudar não é consumir ideias, mas criá-las e recriá-las.', 0, 1, 0, 0, 'q1kchlqo1sz587q', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'A educação faz sentido porque mulheres e homens aprendem que é aprendendo que podem fazer e refazer a si mesmos.', 0, 1, 0, 0, 'q1kbdf584footz', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Pitágoras', 'Eduquem as crianças, para que não seja necessário punir os adultos.', 0, 1, 0, 0, 'q1kvrrqc1c8u4ut', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jean Piaget', 'O objetivo principal da educação nas escolas deve ser criar homens e mulheres capazes de fazer coisas novas.', 0, 1, 0, 0, 'q60gce813vawbi', 3, 1, 2, 'Obra de Jean Piaget', 'A-', '', '', ''],
      ['Immanuel Kant', 'É no problema da educação que assenta o grande segredo do aperfeiçoamento da humanidade.', 0, 1, 0, 0, 'q14910eb7x6ls0', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Carlos Drummond de Andrade', 'A educação visa melhorar a natureza do homem, o que nem sempre é aceito pelo interessado.', 0, 1, 0, 0, 'q1lwndvk1m23kzx', 3, 1, 2, 'Obra de Drummond — poema não identificado', 'A-', '', '', ''],
      ['Immanuel Kant', 'O ser humano é aquilo que a educação faz dele.', 0, 1, 0, 0, 'q1e5osb01o6g3cg', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Paulo Freire', 'Todos nós sabemos alguma coisa. Todos nós ignoramos alguma coisa. Por isso, aprendemos sempre.', 0, 1, 0, 0, 'q1huc5xl19kbhml', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'Ninguém ignora tudo. Ninguém sabe tudo.', 0, 1, 0, 0, 'q1241ssgd175y6', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['William Arthur Lewis', 'A educação nunca foi despesa. Sempre foi investimento com retorno garantido.', 0, 1, 0, 0, 'qrlzk18cdg2cs', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jean Piaget', 'O verdadeiro objetivo da educação é formar homens e mulheres capazes de fazer coisas novas, e não simplesmente repetir o que outras gerações fizeram.', 1, 1, 0, 0, 'q19f8a8ck4kww1', 0, 2, 1, 'Obra de Jean Piaget', 'A-', '', 'O objetivo principal da educação é criar pessoas capazes de fazer coisas novas, e não simplesmente repetir o que outras gerações fizeram.', 0.82],
      ['Paulo Freire', 'A educação é um ato de amor, por isso, um ato de coragem. Não pode temer o debate.', 0, 1, 0, 0, 'qsovtpv1ev5jlz', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Paulo Freire', 'A leitura da palavra é sempre precedida pela leitura do mundo.', 0, 1, 0, 0, 'q1hj5lhc104c2ia', 3, 1, 2, 'Obra de Paulo Freire', 'A-', '', '', ''],
      ['Francis Bacon', 'Os estudos servem para o deleite, para o ornamento e para a capacidade.', 0, 1, 0, 0, 'qbrro8sa6o4kh', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'Leia, não para contradizer e refutar, nem para acreditar e tomar por garantido, mas para pesar e considerar.', 0, 1, 0, 0, 'q1nrlo2o16ndtay', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'Alguns livros são para ser provados, outros engolidos e alguns poucos mastigados e digeridos.', 1, 1, 0, 0, 'qow1l3o1oxdycx', 0, 2, 1, 'Obra de Francis Bacon', 'A-', '', 'Alguns livros devem ser provados, outros devorados, e poucos mastigados e digeridos.', 0.82],
      ['Francis Bacon', 'Histórias tornam os homens sábios; poetas, espirituosos; matemática, sutis.', 0, 1, 0, 0, 'q6xdnr8pusr5', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'As habilidades naturais são como plantas naturais, que precisam ser podadas pelo estudo.', 0, 1, 0, 0, 'qesk9w8en82q3', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'A natureza das habilidades é aperfeiçoada pelo estudo e pela experiência.', 0, 1, 0, 0, 'q5pwjf81jgdawi', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['John Stuart Mill', 'O objetivo da educação não é apenas acumular fatos, mas formar capacidade de julgamento.', 0, 1, 0, 0, 'q1vcw52w7x6yn2', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Mário Quintana', 'Amar é mudar a alma de casa.', 0, 1, 0, 0, 'q1qxozmwreltsk', 3, 1, 2, 'Obra de Mário Quintana — poema não identificado', 'A-', '', '', ''],
      ['Dalai Lama', 'O amor é a ausência de julgamento.', 0, 1, 0, 0, 'q1t11o9cyjb9tx', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Victor Hugo', 'A vida é uma flor da qual o amor é o mel.', 0, 1, 0, 0, 'q12owk3881ssgt', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'Há sempre alguma loucura no amor. Mas há sempre alguma razão na loucura.', 0, 1, 0, 0, 'q1rv4ugced55br', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Santo Agostinho', 'O amor é a beleza da alma.', 0, 1, 0, 0, 'qewc2g3fpbfwb', 3, 1, 2, 'Obra de Agostinho', 'A-', '', '', ''],
      ['Joyce Brothers', 'A melhor prova de amor é a confiança.', 0, 1, 0, 0, 'q1tz1gt0kfsqe4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Friedrich Nietzsche', 'Amamos a vida não porque estamos acostumados a viver, mas porque estamos acostumados a amar.', 0, 1, 0, 0, 'qio94p6vmahnl', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['E. M. Forster', 'Sei por experiência que os poetas têm razão: o amor é eterno.', 0, 1, 0, 0, 'ql8obt46llrvb', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Woody Allen', 'Amar é sofrer. Para evitar o sofrimento, não se deve amar. Mas então sofre-se por não amar.', 0, 1, 0, 0, 'qoc64da9wz3ju', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Luís de Camões', 'Amar é queimar-se com uma chama invisível.', 0, 1, 0, 0, 'qqlybh07sef58', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['Oscar Wilde', 'Quem, sendo amado, é pobre?', 0, 1, 0, 0, 'q1loxa048e60au', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Ann Landers', 'O amor é uma amizade que pegou fogo.', 0, 1, 0, 0, 'quv60y41iznm74', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Virgílio', 'Amor vence tudo; cedamos também ao amor.', 1, 1, 0, 0, 'q1xdfgqoj4cb7r', 0, 2, 1, 'Obra de Virgílio', 'A-', '', 'O amor vence tudo; cedamos também nós ao amor.', 0.94],
      ['Florbela Espanca', 'Amar só por amar: aqui... além... mais este e aquele, o outro e toda a gente...', 0, 1, 0, 0, 'q190fpxnua5f1r', 3, 1, 2, 'Obra de Florbela Espanca — poema não identificado', 'A-', '', '', ''],
      ['Florbela Espanca', 'Quem disser que se pode amar alguém durante a vida inteira é porque mente!', 0, 1, 0, 0, 'qgy9xqgijjj82', 3, 1, 2, 'Obra de Florbela Espanca — poema não identificado', 'A-', '', '', ''],
      ['Machado de Assis', 'A vida é o amor, é a paz, é a doce ilusão e a esperança vivaz.', 0, 1, 0, 0, 'q9o5fd81ko1m6n', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Machado de Assis', 'Quem escapa a um perigo ama a vida com outra intensidade.', 0, 1, 0, 0, 'q1xmchgc13co6w', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Fernando Pessoa', 'O nosso amor era o perfume do amor.', 0, 1, 0, 0, 'q1hxffoy1ry21cw', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Luís de Camões', 'É um contentamento descontente.', 0, 1, 0, 0, 'qoba28k1o3v2rf', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['Luís de Camões', 'É dor que desatina sem doer.', 0, 1, 0, 0, 'q1ar61mwem471y', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['Luís de Camões', 'É querer estar preso por vontade.', 0, 1, 0, 0, 'q1mnf46g18xhfsi', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['Luís de Camões', 'É nunca contentar-se de contente.', 0, 1, 0, 0, 'qwgsald661t7o', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['Luís de Camões', 'É cuidar que se ganha em se perder.', 0, 1, 0, 0, 'q16h53zv1622rgi', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['Luís de Camões', 'É querer mais que bem querer.', 0, 1, 0, 0, 'q7qa43k1g7yb6t', 3, 1, 2, 'Obra de Camões — poema não identificado', 'A-', '', '', ''],
      ['John Templeton', 'O investidor bem-sucedido é aquele que mantém disciplina quando todos estão perdendo a cabeça.', 0, 1, 0, 0, 'q9qj24g1fv01dl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Maynard Keynes', 'Quando os fatos mudam, eu mudo de opinião. E o senhor?', 0, 1, 0, 0, 'q4tiu8c26klua', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Maynard Keynes', 'A dificuldade não está em novas ideias, mas em escapar das antigas.', 1, 1, 0, 0, 'q12jtwsw14y6em4', 0, 2, 1, '(sem fonte)', 'R', '', 'A dificuldade não está nas ideias novas, mas em escapar das antigas.', 0.92],
      ['Thomas Sowell', 'A economia é uma ciência de pensar em termos de alternativas.', 0, 1, 0, 0, 'qtu87o81pipxgc', 3, 1, 2, 'Obra de Thomas Sowell', 'A-', '', '', ''],
      ['Thomas Sowell', 'Não existem soluções fáceis para problemas complexos.', 0, 1, 0, 0, 'q1tdn6ypyurunn', 3, 1, 2, 'Obra de Thomas Sowell', 'A-', '', '', ''],
      ['Thomas Sowell', 'A primeira lição da economia é a escassez: nunca existe o suficiente para satisfazer todos aqueles que querem tudo.', 0, 1, 0, 0, 'qvgv5mkua7tsc', 3, 1, 2, 'Obra de Thomas Sowell', 'A-', '', '', ''],
      ['Thomas Sowell', 'A segunda lição da economia é compreender os custos das escolhas.', 0, 1, 0, 0, 'qdmwam0j69yyf', 3, 1, 2, 'Obra de Thomas Sowell', 'A-', '', '', ''],
      ['Thomas J. Stanley', 'A maioria das pessoas não entende que a riqueza é construída lentamente através de disciplina e tempo.', 0, 1, 0, 0, 'q175m6kcf8dnbp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['P. T. Barnum', 'O dinheiro é um servo excelente, mas um péssimo senhor.', 0, 1, 0, 0, 'qobr6xc1l6xtxw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['P. T. Barnum', 'A riqueza consiste muito mais no uso inteligente do dinheiro do que na quantidade possuída.', 0, 1, 0, 0, 'q1iv7pis1lgosfm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Harry Markowitz', 'A carteira ideal depende da relação entre risco e retorno que cada investidor aceita assumir.', 0, 1, 0, 0, 'q27p74gpg5mnh', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oscar Wilde', 'Um cínico é um homem que sabe o preço de tudo e o valor de nada.', 0, 1, 0, 0, 'q78dlc82e36re', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Mark Zuckerberg', 'Mover-se rápido e quebrar coisas.', 0, 1, 0, 0, 'qeaubh81krcei7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'Lucro é consequência de um trabalho bem feito.', 0, 1, 0, 0, 'qkvu6zlv6f4ms', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'Os planos são apenas boas intenções, a menos que se transformem imediatamente em trabalho árduo.', 0, 1, 0, 0, 'qk4hrox1hukawp', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Seth Godin', 'Não encontre clientes para os seus produtos; encontre produtos para os seus clientes.', 1, 1, 0, 0, 'q1ec102o16f7dzc', 0, 2, 1, 'Obra de Seth Godin', 'A-', '', 'Não encontre clientes para seus produtos; encontre produtos para seus clientes.', 0.97],
      ['Peter Drucker', 'O cliente raramente compra aquilo que a empresa acredita estar vendendo.', 0, 1, 0, 0, 'q1xlpkv81in30kc', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Seth Godin', 'Se você tentar agradar todo mundo, não agradará ninguém.', 0, 1, 0, 0, 'q141pp4ofkjudi', 3, 1, 2, 'Obra de Seth Godin', 'A-', '', '', ''],
      ['Peter Drucker', 'A administração deve transformar o conhecimento em ação e responsabilidade.', 0, 1, 0, 0, 'qp5vlnnt9az8v', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'Antes de liderar os outros, aprenda a liderar a si mesmo.', 0, 1, 0, 0, 'q2htju8mke49z', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'A única definição de líder é alguém que possui seguidores.', 0, 1, 0, 0, 'qbre7lc1xq2h95', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['John C. Maxwell', 'A excelência de um líder é medida pela capacidade de transformar problemas em oportunidades.', 0, 1, 0, 0, 'q1lgbbvkisi9ww', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Ralph Nader', 'A responsabilidade da liderança é criar mais líderes, não mais seguidores.', 0, 1, 0, 0, 'q1iey3hsl7qwc0', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Eric Hoffer', 'Um líder deve ser prático e realista, mas deve falar a linguagem do visionário e do idealista.', 0, 1, 0, 0, 'q14i0wfk6gmop', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'O segredo da liderança é simples: faça aquilo em que você acredita e inspire aqueles ao seu redor.', 0, 1, 0, 0, 'q1ikf8p44rc902', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Andrew Carnegie', 'A equipe é a base de qualquer grande conquista.', 0, 1, 0, 0, 'qduojq0179my46', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Sheryl Sandberg', 'A capacidade de aprender é a qualidade mais importante que um líder pode ter.', 0, 1, 0, 0, 'q11mib94p1vkr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'Líderes devem estar próximos o suficiente para se relacionar com os outros, mas longe o suficiente para motivá-los.', 0, 1, 0, 0, 'q52bl2t1il8g9l', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O caráter é o fundamento sobre o qual toda liderança é construída.', 0, 1, 0, 0, 'qxkkm2czaeh0k', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Brian Tracy', 'A liderança é a capacidade de fazer com que as pessoas comuns alcancem resultados extraordinários.', 0, 1, 0, 0, 'q1u92f7hcmp95h', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'A verdadeira liderança surge quando você está mais preocupado com o sucesso dos outros do que com o seu próprio.', 0, 1, 0, 0, 'q12dz450oonf3t', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O líder deve ser capaz de inspirar as pessoas a fazer coisas que elas não imaginavam ser capazes de fazer.', 0, 1, 0, 0, 'qegw5re17vtwl7', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Peter Drucker', 'Líderes eficazes fazem as perguntas certas antes de tomar decisões.', 0, 1, 0, 0, 'q6682y9i2ouwt', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Lou Gerstner', 'A cultura de uma organização é simplesmente o comportamento dos líderes.', 0, 1, 0, 0, 'q1phcdtc1cocg64', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Tom Peters', 'Líderes não criam seguidores; eles criam mais líderes.', 0, 1, 0, 0, 'q1tw92d313kndnp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Andy Stanley', 'O líder que não ouve acabará cercado por pessoas que não têm nada a dizer.', 0, 1, 0, 0, 'qft2xls113m4ip', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Pat Riley', 'A excelência é o resultado gradual de sempre tentar fazer melhor.', 0, 1, 0, 0, 'q14bf2m0xznvvy', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['George S. Patton', 'Um bom plano executado hoje é melhor que um plano perfeito executado amanhã.', 0, 1, 0, 0, 'q1ra1k6512wg1mw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Brian Tracy', 'A liderança é a capacidade de obter realizações extraordinárias de pessoas comuns.', 0, 1, 0, 0, 'q3p32ys15yt2aw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'O líder deve ser suficientemente próximo para se relacionar com os outros, mas distante o suficiente para motivá-los.', 0, 1, 0, 0, 'q7rpab01rjk58s', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A verdadeira liderança consiste em dar aos outros a liberdade de fazer o melhor trabalho possível.', 0, 1, 0, 0, 'q13ipr5kbgda16', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Peter Drucker', 'Um líder eficaz não é alguém que faz tudo; é alguém que sabe fazer com que os outros façam bem.', 0, 1, 0, 0, 'q17qz826o3ip7n', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'A liderança é uma responsabilidade, não um privilégio.', 0, 1, 0, 0, 'q14os7estmltle', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['John C. Maxwell', 'A maior capacidade de um líder é reconhecer talentos nos outros.', 0, 1, 0, 0, 'q1vkoyg51w85tcz', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'Líderes excelentes fazem perguntas melhores porque sabem que boas respostas começam com boas perguntas.', 0, 1, 0, 0, 'q22xzkkf29142', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Peter Drucker', 'O líder que não delega limita o crescimento da própria equipe.', 0, 1, 0, 0, 'q11yl041i8nvzt', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['John C. Maxwell', 'A liderança é a arte de dar às pessoas uma plataforma para fazerem coisas extraordinárias.', 0, 1, 0, 0, 'q1504wpw1jiikp7', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Tom Peters', 'O verdadeiro líder não cria seguidores; cria pessoas capazes de liderar.', 0, 1, 0, 0, 'q1wtc4iy1ra19u7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'Grandes líderes olham para o futuro, mas cuidam das pessoas no presente.', 0, 1, 0, 0, 'q11peskz1f2l6tl', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'Você não lidera apontando o caminho; você lidera caminhando junto.', 0, 1, 0, 0, 'qg8t3ko11f58uf', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Mark Twain', 'Faça sempre o que é certo; isso agradará algumas pessoas e surpreenderá as demais.', 0, 1, 0, 0, 'qa7hh4ka88kgn', 3, 1, 2, 'Obra de Mark Twain', 'A-', '', '', ''],
      ['John C. Maxwell', 'A liderança não consiste em estar à frente dos outros, mas em ajudar os outros a avançarem.', 0, 1, 0, 0, 'q1dh1se711kwwjy', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A pessoa que pensa que lidera e não tem seguidores está apenas dando um passeio.', 0, 1, 0, 0, 'q77l4nws87pax', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O líder deve saber ouvir antes de falar.', 0, 1, 0, 0, 'q1pqyamm1pyyi36', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A liderança é a capacidade de influenciar pessoas para alcançar um propósito.', 0, 1, 0, 0, 'q1i2a8g0s82upb', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O verdadeiro teste de liderança é como você se comporta em momentos de crise.', 0, 1, 0, 0, 'q1jddtgg14wsaja', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'Líderes eficazes sabem que suas palavras têm poder e usam esse poder com responsabilidade.', 0, 1, 0, 0, 'qbzmjyk1mlow8l', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A maior contribuição de um líder é desenvolver outros líderes.', 0, 1, 0, 0, 'q167g4jkdlcqf', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Peter Drucker', 'A liderança não é uma questão de autoridade, mas de responsabilidade.', 0, 1, 0, 0, 'q1dqb1igkl9m2b', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'O líder eficaz pergunta: o que precisa ser feito?', 0, 1, 0, 0, 'q170cl91odc3oe', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'O líder eficaz pergunta: o que é certo para a organização?', 0, 1, 0, 0, 'q1exfkc4sopt5b', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['John C. Maxwell', 'A coragem de um líder não está em não ter medo, mas em agir apesar dele.', 0, 1, 0, 0, 'q1m4k8icjpucfq', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'Um líder que produz outros líderes multiplica seu impacto.', 0, 1, 0, 0, 'q1q0fr4c14ujv5w', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'As pessoas seguem líderes que demonstram integridade.', 0, 1, 0, 0, 'qm5iv2w16oqwt4', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O caráter de um líder determina o limite da organização.', 0, 1, 0, 0, 'q7vhdcg1sozoom', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Peter Northouse', 'A liderança é o processo pelo qual uma pessoa influencia outras para alcançar um objetivo comum.', 0, 1, 0, 0, 'q1xq4pw8ocul1n', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John C. Maxwell', 'A liderança não é sobre ter poder sobre pessoas, mas sobre dar poder às pessoas.', 0, 1, 0, 0, 'q1l3lx9o1vvy6e6', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'Um líder deve estar disposto a assumir a culpa e compartilhar o crédito.', 0, 1, 0, 0, 'q1wcdsf8xlvty6', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A capacidade de liderar é determinada pela capacidade de influenciar.', 0, 1, 0, 0, 'qk2robk1le530g', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A liderança começa quando alguém aceita responsabilidade pelo resultado.', 0, 1, 0, 0, 'q16ectucr8ap65', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O maior teste de liderança é como você trata as pessoas que não podem fazer nada por você.', 0, 1, 0, 0, 'q1cuhaa717c3nl7', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'Faça aquilo que você sente em seu coração estar certo, pois será criticado de qualquer maneira.', 0, 1, 0, 0, 'q1l712az1y63heo', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['John C. Maxwell', 'A liderança não é sobre títulos, posições ou fluxos de poder; é sobre uma vida que influencia outra.', 0, 1, 0, 0, 'q1eotl5k9cpo1l', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'O verdadeiro líder não cria medo, cria confiança.', 0, 1, 0, 0, 'q188scuccknsdk', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'A confiança é construída lentamente e perdida rapidamente.', 0, 1, 0, 0, 'qvulgj0ih79lq', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['John C. Maxwell', 'Um líder deve saber quando liderar, quando ouvir e quando aprender.', 0, 1, 0, 0, 'q390cc1xwxq60', 3, 1, 2, 'Obra de John C. Maxwell', 'A-', '', '', ''],
      ['C. S. Lewis', 'A humildade é a base de toda liderança verdadeira.', 0, 1, 0, 0, 'q1s6t6yw1p10l41', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Liev Tolstói', 'Não existe grandeza onde não existe simplicidade, bondade e verdade.', 1, 1, 0, 0, 'qci26qkqk6obu', 0, 2, 1, 'Obra de Tolstói', 'A-', '', 'Não existe grandeza onde não há simplicidade, bondade e verdade.', 0.93],
      ['Liev Tolstói', 'Todos pensam em mudar o mundo, mas ninguém pensa em mudar a si mesmo.', 0, 1, 0, 0, 'q2bzg5g1dcqpeb', 3, 1, 2, 'Obra de Tolstói', 'A-', '', '', ''],
      ['Peter Drucker', 'A liderança começa pela liderança de si mesmo.', 0, 1, 0, 0, 'qnj5dnk14fqkz4', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'O líder eficaz sabe que a primeira tarefa é entender a realidade.', 0, 1, 0, 0, 'q1iiu4j4wgqgj', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['John Kotter', 'Líderes eficazes criam uma visão do futuro e mobilizam pessoas para alcançá-la.', 0, 1, 0, 0, 'q1jdd76411fby1z', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Kotter', 'A liderança é uma atividade, não uma posição.', 0, 1, 0, 0, 'q1b9ufj4ub6u2r', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Helmuth von Moltke', 'Nenhum plano sobrevive ao contato com a realidade sem adaptação.', 0, 1, 0, 0, 'q7bnbxg9mk5nh', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dwight D. Eisenhower', 'O líder deve conhecer seus homens e conquistar sua confiança.', 0, 1, 0, 0, 'q15t8x8g16ozpho', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Donald McGannon', 'A liderança não é uma posição ou um título; é uma ação e um exemplo.', 0, 1, 0, 0, 'qcli8ewm5n2pi', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['James M. Kouzes e Barry Z. Posner', 'A liderança é uma relação entre aqueles que aspiram a liderar e aqueles que escolhem seguir.', 0, 1, 0, 0, 'q1otd4341pg6ey1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oprah Winfrey', 'A maior aventura que você pode tomar é viver a vida dos seus sonhos.', 0, 1, 0, 0, 'qb3qpokjgv2e5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Heráclito', 'A vida é uma criança brincando aos pés de uma cadeira.', 0, 1, 0, 0, 'q1xw9zjg1ezalq2', 3, 1, 2, 'Fragmentos de Heráclito', 'A-', '', '', ''],
      ['Johann Wolfgang von Goethe', 'A vida pertence aos vivos, e aquele que vive deve estar preparado para mudanças.', 0, 1, 0, 0, 'qqwu1kw1w1yuly', 3, 1, 2, 'Obra de Goethe', 'A-', '', '', ''],
      ['Johann Wolfgang von Goethe', 'A vida é a infância da nossa imortalidade.', 0, 1, 0, 0, 'q1tt6lu4m19g11', 3, 1, 2, 'Obra de Goethe', 'A-', '', '', ''],
      ['Albert Camus', 'A vida é a soma de todas as nossas escolhas.', 0, 1, 0, 0, 'qe3tj7le1yfai', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Henri Bergson', 'A vida é uma chama que sempre tende a se apagar, mas que devemos manter acesa.', 0, 1, 0, 0, 'q2al6w0gdx8tl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maya Angelou', 'Minha missão na vida não é apenas sobreviver, mas prosperar; e fazer isso com alguma paixão, alguma compaixão, algum humor e algum estilo.', 0, 1, 0, 0, 'qw9dmhl3kd9j0', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Maya Angelou', 'A vida não é medida pelo número de respirações que damos, mas pelos momentos que nos tiram a respiração.', 0, 1, 0, 0, 'q5dj09955hz2c', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Walter Bagehot', 'O maior prazer da vida é fazer aquilo que as pessoas dizem que você não pode fazer.', 0, 1, 0, 0, 'q1lz8o4i1lg41ys', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ken Hudgins', 'O sentido da vida é dar sentido à vida.', 0, 1, 0, 0, 'q1f01mnp5l0md8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Abraham Joshua Heschel', 'A vida é um presente, e não uma obrigação.', 0, 1, 0, 0, 'q4t98ao14lxwl4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jean-Paul Sartre', 'A vida é feita de escolhas.', 0, 1, 0, 0, 'q1ox1ql81qohkmo', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['James M. Barrie', 'A vida é uma longa lição de humildade.', 0, 1, 0, 0, 'q10u9vwsmg713t', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Josh Billings', 'A vida não consiste em ter boas cartas na mão, mas em jogar bem as que se tem.', 0, 1, 0, 0, 'qoma39wbj1ue1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'A vida é um presente, e a morte é o preço que pagamos por recebê-la.', 0, 1, 0, 0, 'q1kvprnc6cogdd', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Lillian Dickson', 'A vida é como uma moeda: pode gastá-la como quiser, mas só pode gastá-la uma vez.', 0, 1, 0, 0, 'qpb32gl16lop92', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Søren Kierkegaard', 'A vida não é um problema a ser resolvido, mas uma realidade a ser experimentada.', 0, 1, 0, 0, 'q1qmjds7y4j49k', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Elbert Hubbard', 'O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.', 0, 1, 0, 0, 'q4tmut8wy5w49', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Vance Cheney', 'A alma não tem arco-íris se os olhos não têm lágrimas.', 0, 1, 0, 0, 'q175sb38z2g2ok', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Victor Hugo', 'A vida é uma flor cuja raiz é a esperança.', 0, 1, 0, 0, 'q1tuqjmk1z0mgvq', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Grandma Moses', 'A vida é o que fazemos dela. Sempre foi, sempre será.', 0, 1, 0, 0, 'qp80xzw1p5rmx6', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Federico Fellini', 'A vida é uma combinação de magia e massa.', 0, 1, 0, 0, 'qp3e3e71q7zzm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Vladimir Nabokov', 'A vida é uma grande surpresa. Não vejo por que a morte não seria uma surpresa ainda maior.', 0, 1, 0, 0, 'q1n64dbkfrkr9l', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Johann Wolfgang von Goethe', 'A vida é uma escola onde aprendemos aquilo que precisamos saber.', 0, 1, 0, 0, 'q3atf3m1009c7i', 3, 1, 2, 'Obra de Goethe', 'A-', '', '', ''],
      ['Winnie the Pooh / A. A. Milne', 'A vida é uma aventura: aproveite a viagem.', 0, 1, 0, 0, 'qtzh0jo1dh9hr1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Vivian Greene', 'A vida não é sobre esperar que a tempestade passe, mas sobre aprender a dançar na chuva.', 0, 1, 0, 0, 'q18boo0o11195eo', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nicholas Sparks', 'A vida é feita de escolhas. Algumas são fáceis, outras são difíceis, mas são elas que definem quem somos.', 0, 1, 0, 0, 'qpithqp16ol7lq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hipócrates', 'A vida é breve, mas a arte é longa.', 0, 1, 0, 0, 'qcjaf0cciglxn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Plutarco', 'A vida é uma chama que deve ser acesa, não um vaso que deve ser preenchido.', 0, 1, 0, 0, 'q5m6kusilfp6r', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Benjamin Disraeli', 'A vida é uma sucessão de oportunidades; o segredo é saber reconhecê-las.', 0, 1, 0, 0, 'qaiclqt73becp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Florbela Espanca', 'Há uma primavera em cada vida.', 0, 1, 0, 0, 'qe5rouojhyp3b', 3, 1, 2, 'Obra de Florbela Espanca — poema não identificado', 'A-', '', '', ''],
      ['Florbela Espanca', 'A gente esquece sempre o bem dum dia.', 0, 1, 0, 0, 'q1x035qi1w2dqhx', 3, 1, 2, 'Obra de Florbela Espanca — poema não identificado', 'A-', '', '', ''],
      ['Fernando Pessoa', 'A minha vida, tragédia caída sob a pateada dos anjos e de que só o primeiro ato se representou.', 0, 1, 0, 0, 'qb3lu6s3qt7bx', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Fernando Pessoa', 'A nossa vida era toda a vida.', 0, 1, 0, 0, 'q1p6s9lbdpolhz', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Oscar Wilde', 'Toda pessoa tem um passado, e todo pecador tem um futuro.', 0, 1, 0, 0, 'q1ioo1bh73pmj6', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'As mulheres têm que aprender a jogar o jogo como os homens fazem.', 0, 1, 0, 0, 'q1qyqmp4uq14t8', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Melinda French Gates', 'Uma mulher com uma voz é, por definição, uma mulher forte.', 1, 1, 0, 0, 'q1r54wjk1od8oaa', 0, 2, 1, '(sem fonte)', 'R', '', 'Uma mulher com voz é, por definição, uma mulher forte.', 0.97],
      ['Ayn Rand', 'A pergunta não é quem vai me deixar; é quem vai me impedir.', 1, 1, 0, 0, 'q172vq8kb3gikw', 1, 2, 1, '(sem fonte)', 'R', '', 'A pergunta não é quem vai me deixar; é quem vai me impedir.', 1.0],
      ['Gina Carey', 'Uma mulher forte olha um desafio nos olhos e dá uma piscadela.', 0, 1, 0, 0, 'qbae5vs1xyjcof', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Friedrich Engels', 'A emancipação da mulher só será possível quando ela puder participar da produção social em grande escala.', 0, 1, 0, 0, 'q15zahis1u6bp0p', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ibn Khaldun', 'As mulheres são responsáveis por metade da sociedade e mães da outra metade.', 0, 1, 0, 0, 'q1bm7p9g16nn9i7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ban Ki-moon', 'Fortaleçam as mulheres e fortaleçam o mundo.', 0, 1, 0, 0, 'qc19m6o1mjdi11', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Eleanor Roosevelt', 'O futuro depende das mulheres.', 0, 1, 0, 0, 'q1s3gep05aqmmi', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Rosa Luxemburgo', 'Não há pensamento revolucionário sem uma mulher revolucionária.', 0, 1, 0, 0, 'q10b8ej4tnmjr6', 3, 1, 2, 'Obra e cartas de Rosa Luxemburgo', 'A-', '', '', ''],
      ['Angela Davis', 'O feminismo é a ideia radical de que mulheres são pessoas.', 0, 1, 0, 0, 'qj688ax12wznb4', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['bell hooks', 'O amor feminista é a força que desafia todas as formas de dominação.', 0, 1, 0, 0, 'qu2nmcbz1ct8', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['Coco Chanel', 'Uma mulher deve ser duas coisas: quem e o que ela quiser.', 0, 1, 0, 0, 'qeuyc3c1wahhtj', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maya Angelou', 'Eu sou uma mulher fenomenal.', 0, 1, 0, 0, 'q1nox684xt98u', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Rita Mae Brown', 'Eu sou minha própria heroína.', 0, 1, 0, 0, 'q1flqwm818v1li5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Eleanor Roosevelt', 'Uma mulher é como um saquinho de chá: você nunca sabe quão forte ela é até colocá-la em água quente.', 0, 1, 0, 0, 'ql8m1a4motzxy', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Ayn Rand', 'A questão não é quem vai me permitir; é quem vai me impedir.', 1, 1, 0, 0, 'qm2fhts31fe3d', 0, 2, 1, '(sem fonte)', 'R', '', 'A pergunta não é quem vai me deixar, é quem vai me impedir.', 0.81],
      ['bell hooks', 'O feminismo é para todos.', 0, 1, 0, 0, 'q12obk5iruf9m4', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['Louisa May Alcott', 'Eu não tenho medo das tempestades, pois estou aprendendo a navegar meu barco.', 1, 1, 0, 0, 'q1t0b24gz3wl78', 0, 2, 1, '(sem fonte)', 'R', '', 'Não tenho medo de tempestades, pois estou aprendendo a conduzir meu navio.', 0.82],
      ['Virginia Woolf', 'As mulheres precisam ter coragem para desafiar aquilo que esperam delas.', 0, 1, 0, 0, 'q1j7shpgwu3pj2', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['Coco Chanel', 'O ato mais corajoso ainda é pensar por si mesma. Em voz alta.', 0, 1, 0, 0, 'q5083i01huwyx3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maya Angelou', 'Quando uma mulher decide defender a si mesma, ela defende todas as mulheres.', 0, 1, 0, 0, 'q1oguzl819v7rsc', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Marge Piercy', 'Uma mulher forte é uma mulher determinada a fazer algo que os outros estão determinados a não fazer.', 0, 1, 0, 0, 'q1i7n4xky67sur', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maya Angelou', 'A coragem é a mais importante de todas as virtudes, porque sem coragem você não pode praticar nenhuma outra virtude consistentemente.', 0, 1, 0, 0, 'qf13pjw2tvly2', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Virginia Woolf', 'A mulher precisa de momentos de solidão e reflexão para encontrar sua própria voz.', 0, 1, 0, 0, 'qx3yse81sa1ild', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['Beyoncé', 'Não há força mais poderosa do que uma mulher determinada a se levantar.', 0, 1, 0, 0, 'q6teu3cc7qe31', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oscar Wilde', 'As mulheres são feitas para serem amadas, não para serem compreendidas.', 0, 1, 0, 0, 'qxsr9784lpsdj', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Reese Witherspoon', 'Não conheço nenhuma mulher viva que não seja corajosa.', 0, 1, 0, 0, 'q1l87vco1s5dgaz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maria Lacerda de Moura', 'A revolução será feminista ou não será.', 0, 1, 0, 0, 'q3g3iig1j480rx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Alexandra Kollontai', 'As mulheres não serão emancipadas até que o trabalho doméstico seja reconhecido como trabalho social.', 0, 1, 0, 0, 'qnzqsv4mk5rd5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['bell hooks', 'Uma mulher é a plena expressão de sua própria humanidade.', 0, 1, 0, 0, 'q1q37e3047d935', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['bell hooks', 'O feminismo é um movimento para acabar com o sexismo, a exploração sexista e a opressão.', 0, 1, 0, 0, 'qp5x3xdfwz2ub', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['Melinda French Gates', 'Não existe limite para o que podemos alcançar quando as mulheres têm acesso às mesmas oportunidades.', 0, 1, 0, 0, 'q1j5o9vo2dp3sb', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ban Ki-moon', 'Investir nas mulheres é investir no futuro.', 0, 1, 0, 0, 'q4ydptszz8045', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Angela Davis', 'Não há luta pela libertação das mulheres sem uma luta contra todas as formas de opressão.', 0, 1, 0, 0, 'qhu03kvnszxv', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['Angela Davis', 'As mulheres negras precisam ser ouvidas porque suas experiências revelam as estruturas de poder que afetam todas as pessoas.', 0, 1, 0, 0, 'qqyjwjcssc8pb', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['bell hooks', 'A solidariedade política entre mulheres é essencial para a luta feminista.', 0, 1, 0, 0, 'qu7tjb1kjms0m', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['bell hooks', 'A educação é o ponto de partida para a transformação das mulheres.', 0, 1, 0, 0, 'q113c1do1geuauy', 3, 1, 2, 'Obra de bell hooks', 'A-', '', '', ''],
      ['Virginia Woolf', 'Por muitos séculos, as mulheres serviram como espelhos possuindo o poder mágico e delicioso de refletir a figura do homem em tamanho maior que o natural.', 0, 1, 0, 0, 'qncw4aw17st44m', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['Virginia Woolf', 'Não existe barreira, fechadura ou obstáculo que você possa impor à liberdade da minha mente.', 0, 1, 0, 0, 'qsblwo1cjyx0t', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['Hillary Clinton', 'A igualdade de gênero é uma questão de direitos humanos.', 0, 1, 0, 0, 'q1fhiyhh1mzwlj4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Carol Hanisch', 'O pessoal é político.', 0, 1, 0, 0, 'qonnxpc1s11434', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Rosa Luxemburgo', 'Quem não se movimenta não percebe as correntes que o prendem.', 0, 1, 0, 0, 'q1jnqmw1tmmphe', 3, 1, 2, 'Obra e cartas de Rosa Luxemburgo', 'A-', '', '', ''],
      ['Ban Ki-moon', 'A igualdade para as mulheres significa progresso para todos.', 0, 1, 0, 0, 'q1fq96pk8xx8yb', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Angela Davis', 'A liberdade é uma batalha constante.', 0, 1, 0, 0, 'qmzib641837kbj', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['Angela Davis', 'Não podemos mudar o mundo se não mudarmos a nós mesmas.', 0, 1, 0, 0, 'q1pbs548cejdap', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['Angela Davis', 'A educação e a liberdade estão inseparavelmente ligadas.', 0, 1, 0, 0, 'q5pr6o81tdpu0q', 3, 1, 2, 'Obra e discursos de Angela Davis', 'A-', '', '', ''],
      ['Mary Pickford', 'O passado não pode ser mudado, mas o futuro ainda está em nossas mãos.', 0, 1, 0, 0, 'q66wjnxm4au90', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Michelle Bachelet', 'As mulheres são a força motriz por trás de muitas das maiores mudanças sociais.', 0, 1, 0, 0, 'q1wh716w1fa7isp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Virginia Woolf', 'Como mulher, não tenho pátria. Como mulher, minha pátria é o mundo inteiro.', 0, 1, 0, 0, 'q1dja63x1mhuwgf', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['John Stuart Mill', 'A desigualdade legal entre os sexos é um obstáculo ao progresso.', 0, 1, 0, 0, 'q8btabs16pvndo', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'O princípio que regula as relações sociais entre os dois sexos é um princípio de força, não de justiça.', 0, 1, 0, 0, 'qyfc5f31k18z2k', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'O princípio que regula as relações sociais entre os dois sexos deve ser substituído pelo princípio da igualdade perfeita.', 0, 1, 0, 0, 'qz04nfd1lxaqr9', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Louisa May Alcott', 'Eu não tenho medo das tempestades, pois estou aprendendo a conduzir meu navio.', 1, 1, 0, 0, 'q1i0lyho1xvflfc', 0, 2, 1, '(sem fonte)', 'R', '', 'Não tenho medo de tempestades, pois estou aprendendo a conduzir meu navio.', 0.96],
      ['John Stuart Mill', 'O princípio que regula as relações sociais existentes entre os dois sexos é errado em si mesmo.', 0, 1, 0, 0, 'qt0dnng3v1ssn', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A inferioridade social das mulheres é o único caso de inferioridade que se perpetuou sob a forma de lei.', 0, 1, 0, 0, 'q19veq24h4co22', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A igualdade não precisa de provas: a desigualdade é que precisaria delas.', 0, 1, 0, 0, 'q1c33j4l10inpn6', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Francis Bacon', 'A amizade duplica as alegrias e divide as tristezas.', 0, 1, 0, 0, 'qqmn9rg1gu6ti7', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'A amizade é uma planta que deve ser regada com cuidado.', 0, 1, 0, 0, 'qqsuwdk118y7f', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['C. S. Lewis', 'A amizade é desnecessária, como a filosofia, como a arte... Ela não tem valor de sobrevivência; antes, é uma daquelas coisas que dão valor à sobrevivência.', 0, 1, 0, 0, 'q1uis8pw5t3f7w', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Hubert H. Humphrey', 'O maior presente da vida é a amizade, e eu a recebi.', 0, 1, 0, 0, 'q18zllsa1j2zsz8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Cícero', 'A amizade é a única coisa no mundo cuja utilidade todos concordam.', 0, 1, 0, 0, 'qx09s0ceeker2', 3, 1, 2, 'Obra de Cícero', 'A-', '', '', ''],
      ['Jeremy Taylor', 'O amor é a amizade em chamas.', 0, 1, 0, 0, 'q1gsgz9412k03rs', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Voltaire', 'A amizade é a confiança estabelecida entre almas.', 0, 1, 0, 0, 'q1ufmly019hb6nn', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Voltaire', 'A amizade é o casamento da alma.', 0, 1, 0, 0, 'q1okvpnc1v52neo', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['William James', 'A amizade é uma das fontes mais importantes de felicidade.', 0, 1, 0, 0, 'q1nc5tac1say93e', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['Francis Bacon', 'A amizade é o remédio para a solidão e para as dores da vida.', 0, 1, 0, 0, 'ql8yjzo1wyctd8', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Voltaire', 'A amizade é um comércio nobre em que as almas trocam seus melhores sentimentos.', 0, 1, 0, 0, 'q1utghy41gx49to', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Voltaire', 'A amizade é uma afeição desinteressada, fundada na estima e na confiança.', 0, 1, 0, 0, 'q11buojwuiv6ut', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Epicuro', 'A amizade é o mais elevado dos prazeres humanos.', 0, 1, 0, 0, 'qhv0ut01qns1tt', 3, 1, 2, 'Fragmentos de Epicuro', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'A amizade é um amor que se baseia na admiração e no respeito.', 0, 1, 0, 0, 'qok96tpaf4jq5', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Elbert Hubbard', 'O amigo é uma pessoa que nos conhece profundamente e ainda assim nos aceita.', 0, 1, 0, 0, 'qbvmex08n8nii', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oliver Goldsmith', 'A amizade é um dos melhores remédios contra as dores da existência.', 0, 1, 0, 0, 'qp0ejvg1sa2eq3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['La Rochefoucauld', 'A amizade é o mais belo dos sentimentos porque nasce sem interesse.', 0, 1, 0, 0, 'q1r0tjhp48co0', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Montaigne', 'A amizade é a única coisa que pode unir pessoas diferentes sem eliminar suas diferenças.', 0, 1, 0, 0, 'qwm5g4cjkd5dq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Francis Bacon', 'A amizade é um abrigo contra a solidão.', 0, 1, 0, 0, 'q1ouw22k1uxwir2', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Samuel Johnson', 'A amizade é uma das grandes alegrias que a vida oferece.', 0, 1, 0, 0, 'q87vm2015it66', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['William James', 'A amizade é uma das maiores fontes de felicidade e uma das melhores proteções contra o sofrimento.', 0, 1, 0, 0, 'q1itsvmd13f657r', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['Machado de Assis', 'A falta de afeição é que traz a injustiça.', 0, 1, 0, 0, 'qebqhfo17aj4o6', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Aeschylus', 'A felicidade é uma escolha que requer esforço às vezes.', 0, 1, 0, 0, 'q1or88g1c09r7p', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dostoiévski', 'A maior felicidade é saber a fonte da infelicidade.', 0, 1, 0, 0, 'q19xt8ns2ztgg7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['William James', 'A felicidade é uma questão de escolha, não de circunstância.', 0, 1, 0, 0, 'ql990581w9j3kf', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['John Stuart Mill', 'A felicidade é um dos frutos da liberdade interior.', 0, 1, 0, 0, 'q1dx8qyu8ndc5b', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['George Bernard Shaw', 'A felicidade é uma forma de coragem.', 0, 1, 0, 0, 'q1gdlyko1sy6azy', 3, 1, 2, 'Obra de George Bernard Shaw', 'A-', '', '', ''],
      ['Immanuel Kant', 'O homem é feliz quando encontra harmonia entre seus desejos e sua razão.', 0, 1, 0, 0, 'q1l7gg81e2qybo', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Immanuel Kant', 'A felicidade não é um ideal da razão, mas da imaginação.', 0, 1, 0, 0, 'qm1j334z3vlxd', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['William James', 'A felicidade é uma obra da vontade.', 0, 1, 0, 0, 'qy05a981qzmyc3', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'O maior uso da vida é gastá-la em algo que sobreviva a ela.', 0, 1, 0, 0, 'q11bjceon02jcp', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['John Stuart Mill', 'A felicidade é um exercício de liberdade e responsabilidade.', 0, 1, 0, 0, 'qo3dypc1xx42u5', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Bertrand Russell', 'A felicidade não é algo que se alcança diretamente; ela é o resultado de uma vida bem vivida.', 0, 1, 0, 0, 'q78i6zo1o1jpzu', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Richard Wagner', 'A alegria não está nas coisas; está em nós.', 0, 1, 0, 0, 'q1c7kou9hhdtma', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'A felicidade depende mais da disposição interior do que das circunstâncias exteriores.', 0, 1, 0, 0, 'q118vqli1xiblc7', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Estoicos', 'A felicidade é encontrada quando a mente está livre das paixões desordenadas.', 0, 1, 0, 0, 'q3qks1g14cdo7k', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Plotino', 'A alma se torna aquilo que contempla.', 0, 1, 0, 0, 'q1t5mbs81azatjr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'A felicidade não está em ter o que se quer, mas em querer aquilo que se tem.', 0, 1, 0, 0, 'qlzuzc1bs6t7h', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Albert Camus', 'A felicidade é a harmonia entre o homem e a vida que ele leva.', 0, 1, 0, 0, 'q1dbeulpi00tyq', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Lucius Annaeus Seneca', 'A verdadeira felicidade é desfrutar do presente sem depender do futuro.', 0, 1, 0, 0, 'q1eo8rskphc9ry', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oscar Wilde', 'Com liberdade, livros, flores e a lua, quem não poderia ser feliz?', 0, 1, 0, 0, 'q1gkz3lk1ivjr4j', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Inscrição do Templo de Apolo em Delfos', 'Conhece-te a ti mesmo.', 0, 1, 0, 0, 'q1b9pnqg1jbjo44', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Pitágoras', 'A filosofia é o amor à sabedoria.', 0, 1, 0, 0, 'q11dl988xej3po', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Friedrich Nietzsche', 'Aquele que possui um motivo para viver suporta quase qualquer dificuldade.', 0, 1, 0, 0, 'q2vqr0k12say8o', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'A maturidade do homem consiste em reencontrar a seriedade que tinha quando brincava na infância.', 0, 1, 0, 0, 'qnserxs1ii4tfh', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'Aquele que não sabe obedecer a si mesmo será comandado pelos outros.', 0, 1, 0, 0, 'qxup62w1sqhly8', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['René Descartes', 'A dúvida é uma das maiores virtudes do pensamento.', 0, 1, 0, 0, 'qzy8adx1ctw0xi', 3, 1, 2, 'Obra de Descartes', 'A-', '', '', ''],
      ['René Descartes', 'A leitura de todos os bons livros é como uma conversa com os melhores homens dos séculos passados.', 1, 1, 0, 0, 'q1t09ph8x3dovc', 0, 2, 1, 'Obra de Descartes', 'A-', '', 'A leitura de todos os bons livros é como uma conversa com as pessoas mais honradas dos séculos passados.', 0.87],
      ['Immanuel Kant', 'O céu estrelado sobre mim e a lei moral dentro de mim.', 0, 1, 0, 0, 'quf1qnoc9x3v', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Immanuel Kant', 'A razão humana tem o destino singular de se ver atormentada por questões que não pode rejeitar, mas também não pode responder.', 0, 1, 0, 0, 'q1yfsui81qqvadz', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Immanuel Kant', 'A experiência sem teoria é cega, mas a teoria sem experiência é vazia.', 0, 1, 0, 0, 'q6edvwc8g7z1b', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Immanuel Kant', 'O homem é aquilo que a educação faz dele.', 0, 1, 0, 0, 'qn46m8zopx5c4', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'Ousar é perder o equilíbrio momentaneamente; não ousar é perder a si mesmo.', 0, 1, 0, 0, 'qc2emhk698bsn', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'A vida é uma série de escolhas, e cada escolha define quem somos.', 0, 1, 0, 0, 'q162w4gc1nnr8ve', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'O maior perigo de todos, perder a si mesmo, pode acontecer silenciosamente no mundo, como se nada tivesse acontecido.', 0, 1, 0, 0, 'q1mrhm001vd8jnj', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'A pessoa que não se arrisca nada faz, nada tem, nada é.', 0, 1, 0, 0, 'qobf1ts13f7vyx', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'A angústia é a possibilidade da liberdade.', 0, 1, 0, 0, 'qkzbtwc162tobp', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'Aquele que tem medo de errar nunca aprenderá a agir.', 0, 1, 0, 0, 'q1n8zmwya6e96w', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Bertrand Russell', 'O maior desafio para qualquer pensador é declarar o problema de modo que permita uma solução.', 0, 1, 0, 0, 'q1wuvq5o14vep9j', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Bertrand Russell', 'A ciência pode estabelecer limites ao conhecimento, mas não deve limitar a imaginação.', 0, 1, 0, 0, 'qxevqfk1ufcpl', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A vida é uma coisa tão rara que não há tempo para desperdiçá-la.', 0, 1, 0, 0, 'qfnplrjdj5a7u', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A felicidade pertence àqueles que bastam a si mesmos.', 0, 1, 0, 0, 'qd43w4cukc0cj', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A maior sabedoria consiste em tornar o presente a nossa principal preocupação.', 0, 1, 0, 0, 'q1oltkz19mwfoh', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A solidão é o destino de todos os grandes espíritos.', 0, 1, 0, 0, 'q1o3izg413etf0w', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'O homem pode fazer o que quer, mas não pode querer o que quer.', 0, 1, 0, 0, 'q3nl1ogw8f654', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A riqueza se parece com a água do mar: quanto mais bebemos, mais sede temos.', 0, 1, 0, 0, 'q1fqm068kmmonz', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A compaixão é a base da moralidade.', 0, 1, 0, 0, 'qs4vfy8bhc9bq', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A vida oscila, como um pêndulo, entre a dor e o tédio.', 0, 1, 0, 0, 'q1yf78do1jqa66w', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['John Locke', 'A razão é a única coisa que distingue os homens dos animais.', 0, 1, 0, 0, 'qnjr5r8ug4zps', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['John Locke', 'As ideias derivam da experiência.', 0, 1, 0, 0, 'q1kylutv7335sn', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['Francis Bacon', 'A verdade surge mais facilmente do erro do que da confusão.', 0, 1, 0, 0, 'qhy2o8h8sye56', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'O homem que não tem uma opinião própria é como uma folha ao vento.', 0, 1, 0, 0, 'qgefmhds90ffh', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'A dúvida é a origem da sabedoria.', 0, 1, 0, 0, 'qhf3d4e1uq0k1i', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Voltaire', 'A razão é a luz da alma.', 0, 1, 0, 0, 'qp1ebyg1powl2y', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Voltaire', 'A dúvida é uma condição desconfortável, mas a certeza é uma condição ridícula.', 0, 1, 0, 0, 'qe6987jj4esd', 3, 1, 2, 'Obra de Voltaire', 'A-', '', '', ''],
      ['Bertrand Russell', 'O valor da filosofia deve ser procurado em sua própria incerteza.', 0, 1, 0, 0, 'q1kqsxlk1ej512n', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Bertrand Russell', 'O homem que não tem filosofia alguma está preso aos preconceitos de seu tempo.', 0, 1, 0, 0, 'q14401i81wjmlum', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Bertrand Russell', 'A filosofia é uma tentativa de responder questões últimas usando a razão, não a autoridade.', 0, 1, 0, 0, 'quylzbb6jfed4', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Bertrand Russell', 'O medo é a principal fonte de superstição e uma das principais fontes de crueldade.', 0, 1, 0, 0, 'q1hdl3u410sz4hb', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['Bertrand Russell', 'A vida humana pode ser feliz quando seus interesses são amplos e suas preocupações não se concentram apenas no eu.', 0, 1, 0, 0, 'q1k4m0tghy3cgd', 3, 1, 2, 'Obra de Bertrand Russell', 'A-', '', '', ''],
      ['George Washington Carver', 'A educação é a chave para abrir a porta dourada da liberdade.', 0, 1, 0, 0, 'q1gsr0zf7f57yk', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Allan Bloom', 'A educação é o movimento de uma escuridão para a luz.', 0, 1, 0, 0, 'qjg1o341sxbre7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Rosa Luxemburgo', 'A liberdade é sempre a liberdade de pensar diferente.', 1, 1, 0, 0, 'q1j5h9pkih1f25', 0, 2, 1, 'Obra e cartas de Rosa Luxemburgo', 'A-', '', 'Liberdade é sempre a liberdade de quem pensa diferente.', 0.93],
      ['Hannah Arendt', 'O pensamento é a atividade pela qual dialogamos silenciosamente conosco mesmos.', 0, 1, 0, 0, 'qui438g102aszj', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Hannah Arendt', 'Não nascemos iguais; tornamo-nos iguais como membros de um grupo por força da nossa decisão de nos garantirmos direitos reciprocamente.', 0, 1, 0, 0, 'qp6v92c17rdb6w', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Hannah Arendt', 'A humanidade não se torna mais humana pelo progresso técnico, mas pela capacidade de pensar.', 0, 1, 0, 0, 'qi200g10se3fv', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'A liberdade é o que você faz com aquilo que fizeram de você.', 0, 1, 0, 0, 'qjxr02kxzczk5', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'O inferno são os outros.', 0, 1, 0, 0, 'q1k93k9x10kupu7', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'A angústia é a consciência da liberdade.', 0, 1, 0, 0, 'qii5rq7dy9deb', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Albert Camus', 'A felicidade e o absurdo são dois filhos da mesma terra.', 0, 1, 0, 0, 'q15alg5o1riud0k', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Albert Camus', 'A liberdade nada mais é do que a oportunidade de ser melhor.', 0, 1, 0, 0, 'q132lu6ojzq6a7', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Karl Jaspers', 'O pensamento é a atividade mais elevada da alma.', 0, 1, 0, 0, 'q1jo23qi1mwojf9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Immanuel Kant', 'Sapere aude! Tenha coragem de fazer uso do seu próprio entendimento.', 0, 1, 0, 0, 'q1e2cu60qe7pwv', 3, 1, 2, 'Obra de Kant', 'A-', '', '', ''],
      ['Francis Bacon', 'Os homens astutos desprezam os estudos; os simples admiram-nos; e os sábios usam-nos.', 0, 1, 0, 0, 'q7a8w1g1celp47', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'A prosperidade é a bênção do Antigo Testamento; a adversidade é a bênção do Novo.', 0, 1, 0, 0, 'q1saai41ttjhzw', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'Se um homem começa com certezas, terminará em dúvidas; mas, se começar com dúvidas, terminará em certezas.', 0, 1, 0, 0, 'qs2e17ckxgzxr', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['John Stuart Mill', 'O homem que não conhece senão seu próprio lado do argumento não conhece o argumento.', 0, 1, 0, 0, 'qy7jtq8hbd5un', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Francis Bacon', 'A experiência aperfeiçoa o estudo.', 0, 1, 0, 0, 'qgc5utk14f8kog', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'Não devemos confundir a soma dos fatos com a posse da sabedoria.', 0, 1, 0, 0, 'qjs4qtsoh0b0a', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'A verdade é uma luz que brilha de dentro para fora.', 0, 1, 0, 0, 'qemp2f4y9lmw3', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'A esperança é um bom pequeno-almoço, mas um jantar ruim.', 0, 1, 0, 0, 'q1bqpc7s5hpjpa', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['John Stuart Mill', 'Quem conhece apenas seu próprio lado da questão conhece pouco dela.', 1, 1, 0, 0, 'qyeiuys1128alq', 0, 2, 1, 'Obra de John Stuart Mill', 'A-', '', 'Quem só conhece o próprio lado da questão conhece pouco dela.', 0.89],
      ['Oscar Wilde', 'Experiência é simplesmente o nome que damos aos nossos erros.', 1, 1, 0, 0, 'q7aj6xc76g3tu', 0, 2, 1, 'Obra de Oscar Wilde', 'A-', '', 'A experiência é o nome que damos aos nossos erros.', 0.86],
      ['Oscar Wilde', 'A única maneira de se livrar de uma tentação é ceder a ela.', 0, 1, 0, 0, 'qwa1s1dpfbnr', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Oscar Wilde', 'Sempre perdoe seus inimigos; nada os incomoda tanto.', 0, 1, 0, 0, 'qx9mr5t11sgek', 3, 1, 2, 'Obra de Oscar Wilde', 'A-', '', '', ''],
      ['Boécio', 'Considera fugidios os destinos dos homens; considera transitória a felicidade, como um sonho.', 0, 1, 0, 0, 'qdvmdkw1j3qhu7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Friedrich Nietzsche', 'Aquele que possui um grande motivo suporta grandes dificuldades.', 0, 1, 0, 0, 'qd8q6wx1n46jpr', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'Não há fatos eternos, assim como não há verdades absolutas.', 0, 1, 0, 0, 'q1ib48jc17tc5ug', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'Faça uma coisa todos os dias que te assuste.', 0, 1, 0, 0, 'q17oyvv41oy6xg7', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'Você ganha força, coragem e confiança por cada experiência em que realmente encara o medo.', 0, 1, 0, 0, 'q1sztnqo13ykrsx', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Tommy Lasorda', 'A diferença entre o possível e o impossível está na determinação de uma pessoa.', 0, 1, 0, 0, 'qvvnfvs1ivvyo9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Matt Biondi', 'A persistência pode transformar um fracasso em uma conquista extraordinária.', 0, 1, 0, 0, 'qauw3b31e8x6ub', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Joan Baez', 'A ação é o antídoto para o desespero.', 0, 1, 0, 0, 'qf9igvg56g8df', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Samuel Johnson', 'Não é a força, mas a constância dos bons resultados que conduz os homens ao sucesso.', 0, 1, 0, 0, 'qaft4vc1gk5tc', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'Você deve fazer as coisas que pensa que não pode fazer.', 0, 1, 0, 0, 'q4c6hf212y1a', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'A felicidade não é um objetivo, é um subproduto.', 0, 1, 0, 0, 'q1cadads4kfd9i', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Lewis Carroll', 'A única forma de alcançar o impossível é acreditar que é possível.', 0, 1, 0, 0, 'q2rrtvlzysdcn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Friedrich Nietzsche', 'O futuro influencia o presente tanto quanto o passado.', 0, 1, 0, 0, 'q51o7iw4mwde3', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['William James', 'A vontade é uma força poderosa quando guiada por um propósito.', 0, 1, 0, 0, 'q13fnqjh1qomlkh', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'A ação parece seguir o sentimento, mas na realidade ação e sentimento caminham juntos.', 0, 1, 0, 0, 'q17xzei014mam3u', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['James Matthew Barrie', 'A vida de cada homem é um diário no qual ele pretende escrever uma história e escreve outra.', 0, 1, 0, 0, 'q15ryfcwztodh9', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Horácio', 'A adversidade desperta talentos que, em circunstâncias favoráveis, teriam permanecido adormecidos.', 0, 1, 0, 0, 'q1wixd2l17b56pj', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Harold Wilson', 'Aquele que rejeita a mudança é o arquiteto da decadência.', 0, 1, 0, 0, 'qnec4vu44r3db', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Heráclito', 'A única constante da vida é a mudança.', 0, 1, 0, 0, 'qkebgcs138r7i4', 3, 1, 2, 'Fragmentos de Heráclito', 'A-', '', '', ''],
      ['William James', 'A maior descoberta da minha geração é que um ser humano pode alterar sua vida alterando sua atitude mental.', 1, 1, 0, 0, 'q384qlkmcrr7x', 0, 2, 1, 'Obra de William James', 'A-', '', 'A maior descoberta da minha geração é que um ser humano pode mudar sua vida mudando sua atitude mental.', 0.91],
      ['William James', 'A ação pode não trazer felicidade, mas não há felicidade sem ação.', 0, 1, 0, 0, 'qtictah1io0r0o', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'Se você pode mudar sua mente, pode mudar sua vida.', 0, 1, 0, 0, 'q7ld4wnuza9lw', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'Acredite que a vida vale a pena ser vivida, e sua crença ajudará a criar esse fato.', 0, 1, 0, 0, 'qjrll5k1q9850f', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'O hábito é o grande volante da sociedade, o mais importante agente conservador.', 0, 1, 0, 0, 'q1olefb41x203i8', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['Ann Landers', 'A oportunidade muitas vezes é perdida porque está vestida de trabalho árduo.', 0, 1, 0, 0, 'q1iy8lm91i11yha', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Maya Angelou', 'Você não pode usar a criatividade. Quanto mais você usa, mais você tem.', 0, 1, 0, 0, 'qr303cww9xfnj', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Maya Angelou', 'Nada funcionará a menos que você faça.', 0, 1, 0, 0, 'q1kh4j7oatdv26', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Oliver Goldsmith', 'Nossa maior glória não é nunca cair, mas levantar toda vez que caímos.', 1, 1, 0, 0, 'q1jh6365v92lc', 0, 2, 1, '(sem fonte)', 'R', '', 'Nossa maior glória não está em nunca cair, mas em levantar cada vez que caímos.', 0.91],
      ['Peter Drucker', 'O conhecimento tem que ser melhorado, desafiado e aumentado constantemente, ou ele desaparece.', 0, 1, 0, 0, 'qwx8rlz49wslu', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Oliver Wendell Holmes Sr', 'A mente que se abre para uma nova ideia nunca retorna ao seu tamanho original.', 0, 1, 0, 0, 'q1fh96bkpkgk9m', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hazrat Inayat Khan', 'O homem que tem confiança em si mesmo conquista a confiança dos outros.', 0, 1, 0, 0, 'qz35kf82kwsiq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Sófocles', 'O sucesso depende do esforço.', 0, 1, 0, 0, 'qm4evwcwol65q', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Samuel Johnson', 'Grandes obras são realizadas não pela força, mas pela perseverança.', 0, 1, 0, 0, 'q10r9qr01ent7s', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['Samuel Johnson', 'As grandes realizações são alcançadas não pela força, mas pela perseverança.', 0, 1, 0, 0, 'q183h8ve129k2ga', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['James M. Barrie', 'O segredo da felicidade não está em fazer aquilo que se gosta, mas em gostar daquilo que se faz.', 0, 1, 0, 0, 'q7pxj56ca421x', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Virgílio', 'Eles conseguem porque pensam que conseguem.', 0, 1, 0, 0, 'qgfw941bdqtos', 3, 1, 2, 'Obra de Virgílio', 'A-', '', '', ''],
      ['Virgílio', 'A perseverança é uma virtude que vence muitas dificuldades.', 0, 1, 0, 0, 'q12olwlox7pmn1', 3, 1, 2, 'Obra de Virgílio', 'A-', '', '', ''],
      ['Peter Drucker', 'A melhor forma de aprender é fazendo.', 0, 1, 0, 0, 'qywgq2se4p760', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'Não podemos prever o futuro, mas podemos criá-lo.', 0, 1, 0, 0, 'q1ke10s88o7aak', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Francis Bacon', 'A esperança é um bom café da manhã, mas é um mau jantar.', 0, 1, 0, 0, 'q15pzngk1oawwx8', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'Quem não aplica novos remédios deve esperar novos males.', 0, 1, 0, 0, 'q1e4ljbsr3sxp2', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'Faça as coisas que você acha que não consegue fazer.', 0, 1, 0, 0, 'q6vgwqwmq6qs4', 3, 1, 2, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', '', ''],
      ['Eleanor Roosevelt', 'O futuro pertence àqueles que acreditam na beleza de seus sonhos.', 1, 1, 0, 0, 'q15sx1wcxla264', 1, 2, 1, 'Escritos e discursos de Eleanor Roosevelt', 'A-', '', 'O futuro pertence àqueles que acreditam na beleza de seus sonhos.', 1.0],
      ['Jean de La Fontaine', 'A tristeza voa nas asas do tempo.', 0, 1, 0, 0, 'qfg5y6c5facqy', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Albert Camus', 'O absurdo não está no homem nem no mundo, mas na sua presença conjunta.', 0, 1, 0, 0, 'q1ibvwa41nb62kn', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'Aquele que aprende a suportar o sofrimento aprende também a vencer a si mesmo.', 0, 1, 0, 0, 'qnj3xw1wz1zo3', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['C. S. Lewis', 'As experiências difíceis são frequentemente o caminho pelo qual adquirimos sabedoria.', 0, 1, 0, 0, 'q1wrcsz0x7e8vr', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'Não há fatos, apenas interpretações.', 0, 1, 0, 0, 'q13yhyi41gk03li', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'É preciso ter caos dentro de si para dar à luz uma estrela dançante.', 1, 1, 0, 0, 'qj38s2g1gnk6xm', 0, 2, 1, 'Obra de Nietzsche', 'A-', '', 'É preciso ter um caos dentro de si para dar à luz uma estrela dançante.', 0.98],
      ['Carl Gustav Jung', 'A vida é um processo de se tornar aquilo que somos.', 0, 1, 0, 0, 'qp9jjuw4hjzhr', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A sombra é uma parte da personalidade que permanece desconhecida para o indivíduo.', 0, 1, 0, 0, 'q8mdjwkgrah9j', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['T. S. Eliot', 'Somente aqueles que se arriscam a ir longe demais podem descobrir o quão longe podem ir.', 0, 1, 0, 0, 'q1ogoyde1sn03r5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Albert Camus', 'O conhecimento chega através da experiência.', 0, 1, 0, 0, 'q1y1e5ob1amtu81', 3, 1, 2, 'Obra de Albert Camus', 'A-', '', '', ''],
      ['C. S. Lewis', 'As dificuldades costumam preparar pessoas comuns para destinos extraordinários.', 0, 1, 0, 0, 'q1k0cmmwjhl284', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['C. S. Lewis', 'As provações são frequentemente instrumentos pelos quais adquirimos conhecimento e força.', 0, 1, 0, 0, 'q102anaz13qed4x', 3, 1, 2, 'Obra de C. S. Lewis', 'A-', '', '', ''],
      ['Maya Angelou', 'A felicidade é uma decisão consciente, não algo que acontece por acaso.', 0, 1, 0, 0, 'q1658pfg9bd3bi', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Maya Angelou', 'A história, apesar de sua dor, não pode ser deixada sem ser vivida; se enfrentada com coragem, não precisa ser revivida.', 0, 1, 0, 0, 'q1yf5tho3kn4b1', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Oprah Winfrey', 'A adversidade apresenta oportunidades para descobrir forças que não sabíamos possuir.', 0, 1, 0, 0, 'qjr3ak89z0ooo', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Oprah Winfrey', 'Transforme suas feridas em sabedoria.', 1, 1, 0, 0, 'q1fnsttzibbz5u', 1, 2, 1, '(sem fonte)', 'R', '', 'Transforme suas feridas em sabedoria.', 1.0],
      ['Søren Kierkegaard', 'Aquele que aprendeu a ficar ansioso da maneira correta aprendeu a coisa mais importante.', 0, 1, 0, 0, 'q1uq91d4f1ggs2', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['William James', 'As dificuldades são apenas degraus para a sabedoria.', 0, 1, 0, 0, 'q12ldupjlktezs', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'A vida exige de nós coragem, porque cada dia apresenta novos desafios.', 0, 1, 0, 0, 'q8e5ykd3975cp', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['Orison Swett Marden', 'A persistência, a paciência e o esforço são as forças que moldam grandes realizações.', 0, 1, 0, 0, 'q1oolugs17ewxlp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Francis Bacon', 'A vingança é uma espécie de justiça selvagem.', 0, 1, 0, 0, 'q1rjnuhzkf8bp8', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Francis Bacon', 'Aquele que estuda a vingança mantém suas próprias feridas verdes.', 0, 1, 0, 0, 'qxqd3jy1gwiwwn', 3, 1, 2, 'Obra de Francis Bacon', 'A-', '', '', ''],
      ['Florbela Espanca', 'É van o amor, o ódio, ou o desdém; inútil o desejo e o sentimento.', 0, 1, 0, 0, 'qgiupehdqa236', 3, 1, 2, 'Obra de Florbela Espanca — poema não identificado', 'A-', '', '', ''],
      ['Machado de Assis', 'É triste quando a vida, erma, como esta, passa.', 0, 1, 0, 0, 'q1b9b7s81hdlwi1', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Fernando Pessoa', 'Ainda não consegui não sofrer com a minha solidão.', 0, 1, 0, 0, 'q1xswvw4baff6e', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Virginia Woolf', 'Você não pode encontrar paz evitando a vida.', 0, 1, 0, 0, 'qa10izoh5xroo', 3, 1, 2, 'Obra de Virginia Woolf', 'A-', '', '', ''],
      ['George Bernard Shaw', 'O homem razoável adapta-se ao mundo; o homem irracional persiste em tentar adaptar o mundo a si mesmo. Portanto, todo progresso depende do homem irracional.', 0, 1, 0, 0, 'q1l4wahdg1z7lw', 3, 1, 2, 'Obra de George Bernard Shaw', 'A-', '', '', ''],
      ['Sigmund Freud', 'Aquele que não conhece o passado não compreende o presente.', 0, 1, 0, 0, 'qd3d1p8oosarw', 3, 1, 2, 'Obra de Freud', 'A-', '', '', ''],
      ['Sigmund Freud', 'Onde estava o id, deve estar o ego.', 0, 1, 0, 0, 'qnrmgo1dr2wq1', 3, 1, 2, 'Obra de Freud', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A pessoa torna-se verdadeiramente ela mesma quando aceita seus conflitos interiores.', 0, 1, 0, 0, 'q17r0e88skggq4', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A sombra é a parte da personalidade que representa aspectos desconhecidos ou rejeitados de nós mesmos.', 0, 1, 0, 0, 'qxvpgvoriga9w', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'A tarefa do homem é tornar-se consciente do conteúdo que pressiona para emergir do inconsciente.', 0, 1, 0, 0, 'qt1hkrwik7ay9', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Não é possível despertar a consciência sem dor.', 0, 1, 0, 0, 'q1avg00m7ici7f', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Carl Gustav Jung', 'Ser normal é a meta ideal dos malsucedidos.', 0, 1, 0, 0, 'qw2wpny5pceb1', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Maya Angelou', 'Sucesso é gostar de si mesmo, gostar do que você faz e gostar de como você faz.', 0, 1, 0, 0, 'qnh4k161nf0qku', 3, 1, 2, 'Obra e entrevistas de Maya Angelou', 'A-', '', '', ''],
      ['Jean-Paul Sartre', 'A liberdade é aquilo que fazemos com o que fizeram de nós.', 0, 1, 0, 0, 'q1t5ti5519w4uuv', 3, 1, 2, 'Obra de Sartre', 'A-', '', '', ''],
      ['Søren Kierkegaard', 'Aquele que ousa perder um instante de sua vida não descobriu o valor da vida.', 0, 1, 0, 0, 'q3o7hbk2nivhd', 3, 1, 2, 'Diários e obra de Kierkegaard', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'O indivíduo sempre teve que lutar para não ser dominado pela tribo. Se você tentar, muitas vezes estará sozinho.', 0, 1, 0, 0, 'qekxshs1nfk96h', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'Aquele que não tem dois terços do seu dia para si mesmo é um escravo.', 0, 1, 0, 0, 'q1nytybwazyi3a', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'A vida é uma tarefa que deve ser realizada.', 0, 1, 0, 0, 'qkz4fmw1q79urq', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'A maturidade do homem consiste em recuperar a seriedade que tinha quando criança ao brincar.', 0, 1, 0, 0, 'q8bb7wu1wkahjv', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'Não há ninguém mais inferior do que aquele que não sabe suportar a si mesmo.', 0, 1, 0, 0, 'qg8aj54g50205', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Friedrich Nietzsche', 'O homem é o único ser que deve criar a si mesmo.', 0, 1, 0, 0, 'q1450a201kujcw9', 3, 1, 2, 'Obra de Nietzsche', 'A-', '', '', ''],
      ['Salvador Dalí', 'Não tenha medo da perfeição; você nunca vai alcançá-la.', 1, 1, 0, 0, 'q1pqyni3152aymn', 0, 2, 1, '(sem fonte)', 'R', '', 'Não tenha medo da perfeição: você nunca a alcançará.', 0.95],
      ['Salvador Dalí', 'A única coisa que eu não posso mudar é a minha natureza.', 0, 1, 0, 0, 'qp1x5gsnu0o6q', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Charles Du Bos', 'A coisa mais importante é ser capaz, a qualquer momento, de sacrificar aquilo que somos pelo que poderíamos nos tornar.', 0, 1, 0, 0, 'qglyjym1hm3la8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Carl Gustav Jung', 'A pessoa que não aceita sua própria sombra nunca será completa.', 0, 1, 0, 0, 'qwuyazoho1n04', 3, 1, 2, 'Obras Completas de C. G. Jung', 'A-', '', '', ''],
      ['Florbela Espanca', 'Que me saiba perder... pra me encontrar.', 0, 1, 0, 0, 'q7kuuld1bldk7x', 3, 1, 2, 'Obra de Florbela Espanca — poema não identificado', 'A-', '', '', ''],
      ['John Stuart Mill', 'É possível que uma pessoa seja melhor ser humano embora seja pior em certas qualidades sociais.', 0, 1, 0, 0, 'qabtdyghhx8wd', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A humanidade ganha mais permitindo que cada um viva como lhe parece bom do que compelindo cada um a viver como parece bom aos outros.', 0, 1, 0, 0, 'qndjrcc1uvxfmm', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A espontaneidade individual quase não é reconhecida pelo modo comum de pensar.', 0, 1, 0, 0, 'qmamt341u584yi', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Hannah Arendt', 'O poder corresponde à habilidade humana não apenas de agir, mas de agir em conjunto.', 0, 1, 0, 0, 'q7j3yr41j57kkh', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['John Locke', 'Sempre que os governantes tentam destruir a propriedade do povo ou reduzi-lo à escravidão, colocam-se em estado de guerra contra o povo.', 0, 1, 0, 0, 'q1i0vmnw1avgb4w', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['Augusto', 'Encontrei Roma como uma cidade de tijolos e deixei-a como uma cidade de mármore.', 0, 1, 0, 0, 'q1lj2o8g120dja8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Augusto', 'Apressa-te lentamente.', 0, 1, 0, 0, 'q1awwntx15g9n0o', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Augusto', 'Recebi uma Roma de tijolos e deixo uma Roma de mármore.', 0, 1, 0, 0, 'q1w0c318zyaxm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Dom Pedro II', 'Se não fosse imperador, gostaria de ser professor.', 0, 1, 0, 0, 'qe6qg7u1nqojsm', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Karl Marx', 'O poder político é o poder organizado de uma classe para oprimir outra.', 0, 1, 0, 0, 'qwpjydt18x0agp', 3, 1, 2, 'Obra de Marx', 'A-', '', '', ''],
      ['Karl Marx', 'Os filósofos apenas interpretaram o mundo de diferentes maneiras; o que importa é transformá-lo.', 1, 1, 0, 0, 'q1q09ydk19do6ig', 0, 2, 1, 'Obra de Marx', 'A-', '', 'Os filósofos apenas interpretaram o mundo de diferentes maneiras; do que se trata é de transformá-lo.', 0.93],
      ['Karl Marx', 'O Estado é uma forma pela qual os indivíduos de uma classe dominante fazem valer seus interesses comuns.', 0, 1, 0, 0, 'q1eoa7iwoot9jl', 3, 1, 2, 'Obra de Marx', 'A-', '', '', ''],
      ['Hannah Arendt', 'A política baseia-se no fato da pluralidade dos homens.', 0, 1, 0, 0, 'qnva4b41bs3zjx', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Hannah Arendt', 'O terror totalitário procura destruir a capacidade humana de agir.', 0, 1, 0, 0, 'qorvj36kjdq64', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Charles de Gaulle', 'A França não pode ser a França sem grandeza.', 0, 1, 0, 0, 'q1jrq0nl8k7uij', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Charles de Gaulle', 'Nada de grande no mundo foi realizado sem paixão.', 0, 1, 0, 0, 'qwuwltg1kkkzog', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nikita Khrushchev', 'Quer você goste ou não, a história está do nosso lado. Nós vamos enterrá-los.', 0, 1, 0, 0, 'qzjo5sm162w4s5', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ulysses Guimarães', 'A Constituição certamente não é perfeita. Se fosse perfeita, seria uma ditadura e não uma Constituição.', 0, 1, 0, 0, 'qzijxwo1dbyoe4', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Ulysses Guimarães', 'Temos ódio à ditadura. Ódio e nojo.', 0, 1, 0, 0, 'qvoja281rkuzdn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['José Martí', 'Pátria é humanidade.', 1, 1, 0, 0, 'q16rs1tc15d2edx', 1, 2, 1, '(sem fonte)', 'R', '', 'Pátria é humanidade.', 1.0],
      ['José Martí', 'Os direitos devem ser conquistados pelo exercício constante da liberdade.', 0, 1, 0, 0, 'q1kki9b81cz0d0p', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Charles de Gaulle', 'A autoridade não existe sem responsabilidade.', 0, 1, 0, 0, 'q1p7cavv1u4xskl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Stuart Mill', 'O valor de um Estado, no longo prazo, é o valor dos indivíduos que o compõem.', 0, 1, 0, 0, 'qyhb7n814yfyz9', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A participação política é uma das formas mais importantes de educação do cidadão.', 0, 1, 0, 0, 'qdcn3404dtnpb', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'Uma pessoa com uma crença possui a mesma força que cem pessoas apenas com interesses.', 0, 1, 0, 0, 'qke9low1vf5r2b', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['Hans Kelsen', 'O Estado é uma ordem jurídica.', 0, 1, 0, 0, 'q1fvufr01tt2dxg', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hans Kelsen', 'A democracia é uma forma de governo na qual a vontade coletiva é determinada por aqueles submetidos à ordem social.', 0, 1, 0, 0, 'q1meedzg1dlottd', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Hans Kelsen', 'A essência da democracia é a participação dos cidadãos na criação da ordem jurídica.', 0, 1, 0, 0, 'qleqmjf1qjdx56', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Miguel Reale', 'O direito é uma integração normativa de fatos segundo valores.', 1, 1, 0, 0, 'q1ov2m69p47gln', 1, 2, 1, '(sem fonte)', 'R', '', 'O direito é uma integração normativa de fatos segundo valores.', 1.0],
      ['Miguel Reale', 'O Estado não é apenas uma organização de poder, mas uma ordem de convivência humana.', 0, 1, 0, 0, 'qpvvk9gar72tk', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Benjamin Constant', 'A liberdade dos modernos consiste no gozo pacífico da independência privada.', 1, 1, 0, 0, 'q1uoq518t1fopw', 0, 2, 1, '(sem fonte)', 'R', '', 'A liberdade dos modernos é o gozo pacífico da independência privada.', 0.93],
      ['Benjamin Constant', 'A liberdade política é a garantia necessária para a liberdade individual.', 0, 1, 0, 0, 'q1ebnzygs13v22', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Benjamin Constant', 'O poder sem limites é sempre um perigo para a liberdade.', 0, 1, 0, 0, 'qv1y69g53zmhw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Isaiah Berlin', 'A liberdade negativa é a ausência de interferência.', 0, 1, 0, 0, 'q1p8g2ys1sw5m1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Isaiah Berlin', 'O pluralismo é mais humano porque reconhece que existem valores incompatíveis entre si.', 0, 1, 0, 0, 'q1n7f9l0fjuy3d', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Václav Havel', 'O poder dos sem poder nasce quando as pessoas deixam de viver na mentira.', 0, 1, 0, 0, 'qonjoct1naw1du', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nações Unidas', 'Todos os seres humanos nascem livres e iguais em dignidade e direitos.', 0, 1, 0, 0, 'q1wcyj541xwc46w', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Stuart Mill', 'Aquele que conhece apenas seu próprio lado do caso conhece pouco dele.', 0, 1, 0, 0, 'q1mysbc71fmp5iq', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      [
        'John Stuart Mill',
        'Se toda a humanidade, menos uma pessoa, tivesse uma opinião, a humanidade não teria mais direito de silenciar essa pessoa do que ela de silenciar a humanidade.',
        1,
        1,
        0,
        0,
        'qhyuiekbf1owf',
        0,
        2,
        1,
        'Obra de John Stuart Mill',
        'A-',
        '',
        'Se toda a humanidade menos uma pessoa fosse de uma opinião, não teria mais direito de silenciá-la do que ela de silenciar a humanidade.',
        0.87
      ],
      ['John Stuart Mill', 'A utilidade é a fonte última de todas as exigências morais.', 0, 1, 0, 0, 'q1py14ng13zkkuc', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'O gênio só pode respirar livremente numa atmosfera de liberdade.', 0, 1, 0, 0, 'q13crpu8vclum9', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A originalidade é uma coisa valiosa porque preserva a diversidade humana.', 0, 1, 0, 0, 'q1a7da1015h7aix', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'O único propósito para o qual o poder pode ser legitimamente exercido sobre qualquer membro de uma comunidade civilizada, contra sua vontade, é para evitar dano a outros.', 0, 1, 0, 0, 'q3hqvc01ykgons', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A única liberdade digna desse nome é perseguir nosso próprio bem à nossa própria maneira.', 0, 1, 0, 0, 'q1r6nk8c1bqjdpn', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['John Stuart Mill', 'A sociedade é capaz de executar seus próprios mandatos, e executa-os de maneira tirânica.', 0, 1, 0, 0, 'q1x8wuw01xvwz5j', 3, 1, 2, 'Obra de John Stuart Mill', 'A-', '', '', ''],
      ['William James', 'A gratidão é uma das maneiras mais simples de encontrar felicidade.', 0, 1, 0, 0, 'qclpgjo1wod7b2', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'A atitude de gratidão é uma das principais marcas de uma mente madura.', 0, 1, 0, 0, 'qddutsw134bprd', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['William James', 'O modo mais seguro de melhorar a qualidade da vida é praticar a gratidão.', 0, 1, 0, 0, 'qr2il141ausgw7', 3, 1, 2, 'Obra de William James', 'A-', '', '', ''],
      ['Melody Beattie', 'A gratidão transforma aquilo que temos em suficiente.', 1, 1, 0, 0, 'q1h5s7r414ovrxr', 0, 2, 1, '(sem fonte)', 'R', '', 'A gratidão transforma o que temos em suficiente.', 0.94],
      ['Marco Túlio Cícero', 'Devemos ser gratos não apenas pelos benefícios, mas também pelas oportunidades de fazer o bem.', 0, 1, 0, 0, 'qnxwwly10z67bj', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Esopo', 'A gratidão é um sinal de uma alma nobre.', 0, 1, 0, 0, 'q1redgrkpfkaj2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Cícero', 'Não há dever mais indispensável do que o de agradecer.', 0, 1, 0, 0, 'qazqxqg838gtm', 3, 1, 2, 'Obra de Cícero', 'A-', '', '', ''],
      ['Publílio Siro', 'A alma ingrata é como uma terra que não produz frutos.', 0, 1, 0, 0, 'q9exd9k3q9s1u', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Publílio Siro', 'Aquele que esquece um benefício recebido perde a capacidade de reconhecer o bem.', 0, 1, 0, 0, 'qgeomnijalna8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['John Locke', 'A gratidão é uma obrigação que nasce do reconhecimento da bondade alheia.', 0, 1, 0, 0, 'q11sgi2f1r829k4', 3, 1, 2, 'Obra de John Locke', 'A-', '', '', ''],
      ['Jean-Baptiste Massieu', 'O reconhecimento é a memória do coração.', 0, 1, 0, 0, 'q172qg408ja1ol', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'A pessoa que não valoriza o que possui dificilmente encontrará satisfação no que deseja.', 0, 1, 0, 0, 'q1hkdmfop1v3zg', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A maior riqueza consiste em reconhecer o valor daquilo que já temos.', 0, 1, 0, 0, 'q19egcwsik0i7i', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Cícero', 'A gratidão preserva a amizade e fortalece os vínculos entre as pessoas.', 0, 1, 0, 0, 'q1l1483kaaz3xj', 3, 1, 2, 'Obra de Cícero', 'A-', '', '', ''],
      ['Melody Beattie', 'A gratidão é uma lembrança do passado, uma paz no presente e uma visão positiva do futuro.', 0, 1, 0, 0, 'q1ymh28g40w5cy', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Samuel Johnson', 'A gratidão é uma qualidade semelhante à honestidade: ambas revelam o caráter de uma pessoa.', 0, 1, 0, 0, 'q1atxv5g1jqt06y', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['Samuel Johnson', 'A gratidão é uma fruta de grande cultivo; você não a encontra em pessoas vulgares.', 0, 1, 0, 0, 'q1tbdc69okscz6', 3, 1, 2, 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', 'A-', '', '', ''],
      ['Sêneca', 'Um benefício é perdido quando aquele que o recebe não sabe reconhecê-lo.', 0, 1, 0, 0, 'ql77kaw9wwxpp', 3, 1, 2, 'Obra de Sêneca', 'A-', '', '', ''],
      ['Georg Simmel', 'A gratidão é uma memória moral que preserva os vínculos humanos.', 0, 1, 0, 0, 'q516uz1yq86by', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['J.K. Rowling', 'São nossas escolhas que mostram o que realmente somos, muito mais do que nossas habilidades.', 1, 1, 0, 0, 'q1dpzlu41qtd7dd', 0, 2, 1, '(sem fonte)', 'R', '', 'São nossas escolhas que mostram quem realmente somos, muito mais do que nossas capacidades.', 0.93],
      ['Victor Hugo', 'A dor é tão necessária quanto a alegria para a compreensão completa da vida.', 0, 1, 0, 0, 'q1msuhz31dhrcyx', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['Victor Hugo', 'A fé é uma necessidade para o coração humano.', 0, 1, 0, 0, 'q1n2k16c9o7yre', 3, 1, 2, 'Obra de Victor Hugo', 'A-', '', '', ''],
      ['George Eliot', 'Não há nada que faça você se sentir mais humano do que a capacidade de amar alguém.', 0, 1, 0, 0, 'q150eowe13bmwfz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Christopher McCandless', 'A felicidade é real quando compartilhada.', 0, 1, 0, 0, 'q1wwz6lo1hg2b8g', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mark Twain', 'A melhor maneira de se animar é tentar animar outra pessoa.', 0, 1, 0, 0, 'q1a6kb9g1cta7im', 3, 1, 2, 'Obra de Mark Twain', 'A-', '', '', ''],
      ['Mark Twain', 'A gentileza é a linguagem que o surdo pode ouvir e o cego pode ver.', 1, 1, 0, 0, 'q1ozeyqaabtg9j', 0, 2, 1, 'Obra de Mark Twain', 'A-', '', 'A bondade é a linguagem que o surdo pode ouvir e o cego pode ver.', 0.86],
      ['Fernando Pessoa', 'O que importa é que você viva a vida e não apenas a deixe passar.', 0, 1, 0, 0, 'q4ejmpm352e02', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Fernando Pessoa', 'Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido.', 0, 1, 0, 0, 'q1k6ftv11rhfc80', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Fernando Pessoa', 'A vida é uma viagem experimental, feita involuntariamente.', 0, 1, 0, 0, 'qfe70p01c91kcd', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Clarice Lispector', 'Liberdade é pouco. O que eu desejo ainda não tem nome.', 1, 1, 0, 0, 'q4ckwvj19qu1m2', 1, 2, 1, 'Obra de Clarice Lispector', 'A-', '', 'Liberdade é pouco. O que eu desejo ainda não tem nome.', 1.0],
      ['Clarice Lispector', 'Renda-se, como eu me rendi. Mergulhe no que você não conhece.', 0, 1, 0, 0, 'qcjq8081plsjgi', 3, 1, 2, 'Obra de Clarice Lispector', 'A-', '', '', ''],
      ['Clarice Lispector', 'Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual defeito sustenta nosso edifício inteiro.', 0, 1, 0, 0, 'q1wng2ro1k06nwl', 3, 1, 2, 'Obra de Clarice Lispector', 'A-', '', '', ''],
      ['Liev Tolstói', 'A bondade é uma força maior do que a força física.', 0, 1, 0, 0, 'q5wpbb81tv2umj', 3, 1, 2, 'Obra de Tolstói', 'A-', '', '', ''],
      ['Machado de Assis', 'A esperança vivaz e as ilusões floridas atravessam cantando as longas avenidas que levam do presente ao secreto porvir.', 0, 1, 0, 0, 'qrs2gru1uc6vbe', 3, 1, 2, 'Obra de Machado de Assis', 'A-', '', '', ''],
      ['Fernando Pessoa', 'O meu silêncio acolhe como uma música indecisa, o meu sossego afaga como o torpor de uma brisa.', 0, 1, 0, 0, 'q13w4xt4ynyfwf', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Fernando Pessoa', 'O sonho não consola, porque a vida dói mais quando se acorda.', 0, 1, 0, 0, 'q1s40gsj15qujkx', 3, 1, 2, 'Obra de Fernando Pessoa — poema não identificado', 'A-', '', '', ''],
      ['Tradição islâmica', 'A melhor caridade é aquela feita com sinceridade.', 0, 1, 0, 0, 'qmlm927t6d8jb', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Santo Agostinho', 'A vida é um livro e aqueles que não viajam leem apenas uma página.', 0, 1, 0, 0, 'q1jmfov81d7um2y', 3, 1, 2, 'Obra de Agostinho', 'A-', '', '', ''],
      ['Dalai Lama', 'A vida é uma oportunidade única, use-a bem.', 0, 1, 0, 0, 'q1cyqy8g13eh5sk', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Dalai Lama', 'A amizade é uma das coisas mais valiosas que podemos cultivar.', 0, 1, 0, 0, 'q12533ls1c6i6n', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Santo Agostinho', 'A felicidade não está em possuir o que se deseja, mas em desejar o que se possui.', 0, 1, 0, 0, 'q1bu8spw145oki5', 3, 1, 2, 'Obra de Agostinho', 'A-', '', '', ''],
      ['Santo Agostinho', 'A felicidade do homem depende daquilo que ele ama.', 0, 1, 0, 0, 'q19jmzf72sm7n4', 3, 1, 2, 'Obra de Agostinho', 'A-', '', '', ''],
      ['Dalai Lama', 'A felicidade é uma flor que nasce quando cultivamos a mente e o coração.', 0, 1, 0, 0, 'qd3cfmh5a1b6b', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Dalai Lama', 'Se você quer que outros sejam felizes, pratique compaixão. Se você quer ser feliz, pratique compaixão.', 0, 1, 0, 0, 'q1ol5j6g1vikowi', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Dalai Lama', 'Se você tem medo da dor ou do sofrimento, deve examinar se há algo que possa fazer a respeito. Se houver, não há necessidade de preocupação; se não houver, também não há necessidade.', 0, 1, 0, 0, 'q1vdeoqc15idpyt', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Dalai Lama', 'A compaixão é a base de toda a felicidade.', 0, 1, 0, 0, 'ql1xhuv1z0jwyk', 3, 1, 2, 'Livros e discursos do 14º Dalai Lama', 'A-', '', '', ''],
      ['Peter Drucker', 'O objetivo de uma empresa é criar um cliente.', 0, 1, 0, 0, 'qq8gp9szga3ap', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Senge', 'A única vantagem competitiva sustentável é a capacidade de aprender mais rápido que os concorrentes.', 0, 1, 0, 0, 'qluozoc1p3b76k', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Michael Dell', 'A oportunidade está onde os outros veem apenas problemas.', 0, 1, 0, 0, 'qp38yi016no2gl', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Tom Peters', 'Empresas excelentes não acreditam em excelência; elas acreditam em melhoria constante.', 0, 1, 0, 0, 'q10fwgns12a53a2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'A inovação é a capacidade de ver a mudança como uma oportunidade, não como uma ameaça.', 0, 1, 0, 0, 'q1uymdor1m7qxb1', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'A única coisa que sabemos sobre o futuro é que ele será diferente.', 0, 1, 0, 0, 'q19j0eao31z73u', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'O empreendedorismo não é ciência nem arte; é uma prática.', 0, 1, 0, 0, 'qndj7kw17fhn2d', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'A produtividade do trabalho não é responsabilidade do trabalhador, mas do gestor.', 0, 1, 0, 0, 'q14cvxagygzb2f', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'Não se pode gerenciar o que não se pode medir.', 0, 1, 0, 0, 'q76bt4g1k3jmbm', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Guy Kawasaki', 'Empresas precisam criar produtos que as pessoas amem, não apenas produtos que funcionem.', 0, 1, 0, 0, 'qxrtz9k14wz9xx', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Linus Pauling', 'A melhor forma de ter uma boa ideia é ter muitas ideias.', 0, 1, 0, 0, 'q1biycrk1s5z6lq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Mark Zuckerberg', 'O maior sucesso vem de fazer algo que você realmente acredita.', 0, 1, 0, 0, 'qoegmdk9h4xno', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Marc Andreessen', 'A maior parte das empresas falha porque faz algo que ninguém realmente quer.', 0, 1, 0, 0, 'q14dkiwn1l9v', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Doc Searls e David Weinberger', 'Mercados são conversas.', 0, 1, 0, 0, 'qpxcoes6uj2dp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Thiel', 'A inovação vem da capacidade de enxergar aquilo que outros não veem.', 0, 1, 0, 0, 'qt3de9c1dzn0xu', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Thiel', 'Uma startup que não consegue dominar um mercado pequeno dificilmente dominará um mercado grande.', 0, 1, 0, 0, 'q40tc3b1ds9ilz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Al Ries e Jack Trout', 'O líder de mercado não vence por acaso; ele ocupa uma posição clara na mente dos consumidores.', 0, 1, 0, 0, 'q1avwxwg1nivar2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'O objetivo do marketing é tornar a venda desnecessária.', 0, 1, 0, 0, 'qfa7e6s6g9t45', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'A inovação exige abandonar sistematicamente o que já não funciona.', 0, 1, 0, 0, 'qbvakd71riitv6', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Peter Drucker', 'Empreendedores de sucesso sempre procuram mudanças, respondem a elas e as exploram como oportunidades.', 0, 1, 0, 0, 'qjv1eng1cg2byb', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Alan Kay', 'A melhor maneira de prever o futuro é inventá-lo.', 0, 1, 0, 0, 'q1iduz901i03o8j', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Nolan Bushnell', 'A inovação é a capacidade de transformar ideias em resultados.', 0, 1, 0, 0, 'qqopkui140kkyp', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Howard Schultz', 'Grandes empresas são construídas sobre grandes produtos e grandes experiências.', 0, 1, 0, 0, 'q1to2edo1xeifw1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Howard Schultz', 'Não estamos no negócio de café servindo pessoas; estamos no negócio de pessoas servindo café.', 1, 1, 0, 0, 'q1x4126o1etmxp1', 1, 2, 1, '(sem fonte)', 'R', '', 'Não estamos no negócio de café servindo pessoas; estamos no negócio de pessoas servindo café.', 1.0],
      ['Larry Page e Sergey Brin', 'A missão do Google é organizar as informações do mundo e torná-las universalmente acessíveis e úteis.', 0, 1, 0, 0, 'q1fxphtsiqsk53', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Brian Chesky', 'Uma empresa precisa criar algo que as pessoas valorizem, não apenas algo que venda.', 0, 1, 0, 0, 'q1d00aygss0jc7', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Brian Chesky', 'A simplicidade é uma das maiores forças de um produto.', 0, 1, 0, 0, 'q1at0dexpicsyh', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'A inovação exige conhecimento, criatividade e disciplina.', 0, 1, 0, 0, 'q3h977mvchla6', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['Seth Godin', 'Empresas memoráveis são construídas em torno de uma história que as pessoas querem contar.', 0, 1, 0, 0, 'q1bcycg811f5u22', 3, 1, 2, 'Obra de Seth Godin', 'A-', '', '', ''],
      ['Henry Chesbrough', 'A inovação aberta permite que ideias venham de dentro e de fora da organização.', 0, 1, 0, 0, 'q1x9xeket5nd86', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Henry Chesbrough', 'Nenhuma empresa pode depender apenas de seu conhecimento interno para inovar.', 0, 1, 0, 0, 'qlm9gug1jdjeh', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['David Aaker', 'Marcas fortes criam diferenciação em mercados competitivos.', 0, 1, 0, 0, 'qhmf4no1csmkuk', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Howard Stevenson', 'O empreendedorismo é a exploração de oportunidades independentemente dos recursos disponíveis.', 0, 1, 0, 0, 'q1asrs8k15wyw8z', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Peter Drucker', 'A inovação requer abandonar o passado para criar o futuro.', 0, 1, 0, 0, 'qpsloh0w20r8f', 3, 1, 2, 'Obra de Peter Drucker', 'A-', '', '', ''],
      ['John Kotter', 'Empresas vencedoras são aquelas que conseguem se adaptar continuamente.', 0, 1, 0, 0, 'q1dd7a4cbp4zxe', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Clayton Christensen', 'As pessoas não simplesmente compram ou escolhem produtos e serviços; elas os “contratam” para progredir em suas vidas.', 0, 1, 0, 0, 'q12407okhblc3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['George Orwell', 'A liberdade é a liberdade de dizer que dois mais dois são quatro.', 0, 1, 0, 0, 'qiqae5k10w7n3t', 3, 1, 2, 'Obra de George Orwell', 'A-', '', '', ''],
      ['George Orwell', 'Se pensamento corrompe a linguagem, a linguagem também pode corromper o pensamento.', 0, 1, 0, 0, 'q1b56yzc1y35q72', 3, 1, 2, 'Obra de George Orwell', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'O homem acredita facilmente no que deseja acreditar.', 0, 1, 0, 0, 'quihe8a1ubj5ef', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A vaidade é um elemento fundamental nas disputas humanas.', 0, 1, 0, 0, 'q1uuidnsr1q61q', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Amos Tversky', 'As pessoas não são naturalmente boas em raciocínio probabilístico.', 0, 1, 0, 0, 'q4yzrss12fl1xn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Amos Tversky', 'O modo como um problema é apresentado influencia a decisão.', 0, 1, 0, 0, 'qaa2dtc1ag7jmd', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Stanley Milgram', 'A força da autoridade é uma das influências mais poderosas sobre o comportamento humano.', 0, 1, 0, 0, 'qfs4bbb1xr4rg2', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Michel Foucault', 'O poder não é algo que se possui; é algo que se exerce.', 0, 1, 0, 0, 'q1f4ng3c182i2i8', 3, 1, 2, 'Obra de Foucault', 'A-', '', '', ''],
      ['Michel Foucault', 'O conhecimento e o poder estão diretamente relacionados.', 0, 1, 0, 0, 'q1rp5vc01c0oot', 3, 1, 2, 'Obra de Foucault', 'A-', '', '', ''],
      ['Michel Foucault', 'O indivíduo é produzido por relações de poder e saber.', 0, 1, 0, 0, 'qdjjltabprlm7', 3, 1, 2, 'Obra de Foucault', 'A-', '', '', ''],
      ['Noam Chomsky', 'A mídia desempenha um papel importante na formação das percepções públicas.', 0, 1, 0, 0, 'q7dwcsx1rn3hvx', 3, 1, 2, 'Obra de Noam Chomsky', 'A-', '', '', ''],
      ['Noam Chomsky', 'A manipulação da opinião pública é um dos problemas centrais das sociedades modernas.', 0, 1, 0, 0, 'qbf2xep1cza4yz', 3, 1, 2, 'Obra de Noam Chomsky', 'A-', '', '', ''],
      ['Hannah Arendt', 'O súdito ideal do governo totalitário não é o nazista convicto nem o comunista convicto, mas a pessoa para quem a distinção entre fato e ficção deixou de existir.', 0, 1, 0, 0, 'q24c18sw73wd1', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Hannah Arendt', 'A propaganda é um instrumento do totalitarismo, mas o terror é sua essência.', 0, 1, 0, 0, 'qrtkjsghx9j8u', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Hannah Arendt', 'A sociedade de massas prepara as pessoas para a dominação totalitária.', 0, 1, 0, 0, 'qj8z43k1h4yp6p', 3, 1, 2, 'Obra de Hannah Arendt', 'A-', '', '', ''],
      ['Quintiliano', 'O orador perfeito é um homem bom que sabe falar.', 0, 1, 0, 0, 'qfdpvtc1folbz3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Quintiliano', 'A palavra deve estar unida ao caráter daquele que fala.', 0, 1, 0, 0, 'q12a97njqjqep8', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Quintiliano', 'A eloquência não deve servir apenas para vencer, mas para servir à verdade.', 0, 1, 0, 0, 'q1kg0m1j1pbmaoz', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Arthur Schopenhauer', 'A dialética erística é a arte de parecer ter razão, independentemente de se ter razão.', 0, 1, 0, 0, 'qu1z94c1dfwrgn', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'A maioria das pessoas preocupa-se mais com a vitória do que com a verdade.', 0, 1, 0, 0, 'q801diwmqb5s3', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'Uma refutação aparente muitas vezes causa mais impressão do que uma demonstração verdadeira.', 0, 1, 0, 0, 'q2f0hg81o8ub6j', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['Arthur Schopenhauer', 'O orgulho humano frequentemente impede que alguém reconheça seus erros.', 0, 1, 0, 0, 'q1v6bbd0ct85lg', 3, 1, 2, 'Obra de Schopenhauer', 'A-', '', '', ''],
      ['George Lakoff', 'Mudar a linguagem pode mudar a forma como as pessoas compreendem um problema.', 0, 1, 0, 0, 'qeofv5059pl7u', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['George Lakoff', 'Os fatos não falam por si mesmos; eles são interpretados dentro de estruturas cognitivas.', 0, 1, 0, 0, 'q156z5j81iwv4lc', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Noam Chomsky', 'A linguagem é um instrumento fundamental para organizar o pensamento humano.', 0, 1, 0, 0, 'q1dm61mkmeya2q', 3, 1, 2, 'Obra de Noam Chomsky', 'A-', '', '', ''],
      ['Noam Chomsky', 'A forma como uma questão é apresentada influencia a maneira como ela é compreendida.', 0, 1, 0, 0, 'qg056a74xzgri', 3, 1, 2, 'Obra de Noam Chomsky', 'A-', '', '', ''],
      ['Noam Chomsky', 'O controle da informação é uma das formas de controle social.', 0, 1, 0, 0, 'q130s8tc127y2if', 3, 1, 2, 'Obra de Noam Chomsky', 'A-', '', '', ''],
      ['George Orwell', 'A clareza da linguagem é uma defesa contra a manipulação.', 0, 1, 0, 0, 'qyf0vucqh92li', 3, 1, 2, 'Obra de George Orwell', 'A-', '', '', ''],
      ['Shoshana Zuboff', 'O futuro será definido por quem controla a informação e os meios de transformação dos dados em conhecimento.', 0, 1, 0, 0, 'qabgnl8ju1u6u', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Shoshana Zuboff', 'A concentração de poder sobre dados cria novas formas de desigualdade.', 0, 1, 0, 0, 'qy39hgz1dhe4vb', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Shoshana Zuboff', 'A tecnologia pode ser usada tanto para ampliar a liberdade quanto para restringi-la.', 0, 1, 0, 0, 'qtelt9v1e2amhr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jaron Lanier', 'As redes sociais são projetadas para prender nossa atenção e influenciar nosso comportamento.', 0, 1, 0, 0, 'qo8zv611delscw', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Jaron Lanier', 'A tecnologia deve servir às pessoas, não transformar pessoas em recursos para sistemas.', 0, 1, 0, 0, 'qdi1gvo1wwejet', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Herbert Simon', 'Em um mundo rico em informação, a riqueza de informação significa escassez de atenção.', 0, 1, 0, 0, 'q136hk4o1i6nbe6', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Herbert Simon', 'A atenção se torna o principal recurso limitante quando a informação é abundante.', 0, 1, 0, 0, 'q166av9c1ld1lr3', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Herbert Simon', 'O excesso de informação cria uma pobreza de atenção.', 1, 1, 0, 0, 'q1a5q89817gy0bj', 0, 2, 1, '(sem fonte)', 'R', '', 'A riqueza de informação cria a pobreza de atenção.', 0.81],
      ['Neil Postman', 'Nós estamos em perigo de transformar a informação em uma forma de entretenimento.', 0, 1, 0, 0, 'q1i868uclwlol1', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Neil Postman', 'Uma cultura pode perder sua capacidade de pensar criticamente quando tudo se transforma em espetáculo.', 0, 1, 0, 0, 'q4ybek85q1ukq', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Neil Postman', 'A tecnologia nunca é apenas uma ferramenta; ela muda a forma como vivemos.', 0, 1, 0, 0, 'q1dzu5my1k219tn', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Yuval Noah Harari', 'A capacidade de manipular informações sempre foi uma fonte de poder.', 0, 1, 0, 0, 'q8c8xtsg7ymr', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Yuval Noah Harari', 'Os dados podem se tornar o recurso mais importante do século XXI.', 0, 1, 0, 0, 'q1qxn5lr1ijbe81', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Yuval Noah Harari', 'A diferença entre humanos e máquinas pode depender da capacidade de interpretar informações.', 0, 1, 0, 0, 'qop0h3wq7nnci', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['Robert B. Cialdini', 'Consideramos um comportamento mais correto em determinada situação na medida em que vemos outras pessoas realizando-o.', 0, 1, 0, 0, 'q1q1kmqt3yyeoa', 2, 1, 2, '(sem fonte)', 'R', '', '', ''],
      ['José Martí', 'Ser culto é o único modo de ser livre.', 0, 1, 0, 0, 'q1yauwg01sao88m', 3, 1, 2, 'Obras Completas', 'A', '', '', ''],
      ['Henry David Thoreau', 'A solidão acrescenta beleza à vida. Ela coloca um brilho especial nos pores do sol e faz o ar da noite ter um cheiro melhor.', 2, 0, 0, 2, 'q135b0nm189up29', 7, 3, 3, '', 'A-', 'conforto', '', 0.32],
      ['Warren Buffett', 'São necessários vinte anos para construir uma reputação e apenas cinco minutos para destruí-la.', 3, 0, 0, 2, 'q1uwjkpnzublqu', 6, 3, 3, 'Cartas aos acionistas da Berkshire Hathaway', 'A-', 'negocios', 'Leva vinte anos para construir uma reputação e cinco minutos para arruiná-la.', 0.79],
      ['Jean-Jacques Rousseau', 'Não é a aparência, mas a essência, que constitui o homem.', 4, 0, 0, 2, 'qjr56cwm7uy3p', 5, 3, 3, '', 'A-', 'autorreconhecimento', 'Renunciar à liberdade é renunciar à condição de homem.', 0.54],
      ['Meister Eckhart', 'Se a única oração que você fizer em toda a sua vida for "obrigado", isso será suficiente.', 3, 0, 0, 2, 'q1kv4wnk1ncvlu2', 6, 3, 3, 'Sermões Alemães', 'A', 'gratidao', 'Se a única oração que você fizer em toda a vida for obrigado, já será suficiente.', 0.93],
      ['Henry David Thoreau', 'Os homens hão de aprender que a política não é a moral e que se ocupa apenas do que é oportuno.', 2, 0, 0, 2, 'q5yuic0c3h8ow', 7, 3, 3, '', 'A-', 'politica', '', 0.35],
      ['Krishna', 'O homem alcança a perfeição quando realiza seu dever com desapego.', 4, 0, 0, 2, 'qhnm308ux728', 5, 3, 3, 'Bhagavad Gita, 18.45–46', 'A', 'fe', 'O homem alcança a perfeição quando encontra alegria em cumprir seu próprio dever.', 0.68],
      ['Benjamin Graham', 'A verdadeira chave para o sucesso financeiro é uma margem adequada de segurança.', 2, 0, 0, 2, 'q7vf1l0fu6y5p', 7, 3, 3, '', 'A-', 'financas', '', 0.34],
      ['Henry David Thoreau', 'A maioria dos homens vive em silencioso desespero.', 3, 0, 0, 2, 'q3vpzu712ah88', 6, 3, 3, 'Walden', 'A', 'reflexao', 'A massa dos homens leva vidas de silencioso desespero.', 0.8],
      ['Krishna', 'O verdadeiro yogue vê todos os seres com igualdade e vê a si mesmo em todos eles.', 4, 0, 0, 2, 'qef76081kyy3ft', 5, 3, 3, 'Bhagavad Gita, 6.29', 'A', 'fe', 'Aquele que vê todos os seres com igualdade possui verdadeira sabedoria.', 0.6],
      ['Jean-Jacques Rousseau', 'A gratidão é uma dívida que devemos reconhecer, mas que não deve ser cobrada.', 2, 0, 0, 2, 'q116sm83154sjlz', 7, 3, 3, '', 'A-', 'gratidao', '', 0.39],
      ['Anísio Teixeira', 'Só existirá democracia no Brasil no dia em que se montar no país a máquina que prepara as democracias: a escola pública.', 3, 0, 0, 2, 'qqmfqqbxx2spn', 6, 3, 3, 'Educação Não é Privilégio', 'A', 'educacao', 'Só existirá democracia no Brasil no dia em que se montar a máquina que prepara as democracias: a escola pública.', 0.97],
      ['Sojourner Truth', 'E não sou eu uma mulher?', 3, 0, 0, 2, 'q2il5yg14fvayf', 6, 3, 3, 'Discurso na Convenção dos Direitos da Mulher, Akron, 1851', 'A', 'empoderamento', 'E eu não sou uma mulher?', 0.89],
      ['Jean-Jacques Rousseau', 'A paciência é amarga, mas seu fruto é doce.', 2, 0, 0, 2, 'q1o3x5n7187ksta', 7, 3, 3, '', 'A-', 'filosofos', '', 0.33],
      ['Nassim Nicholas Taleb', 'O acaso é uma parte fundamental da vida e dos mercados.', 2, 0, 0, 2, 'q1gy2yp01gbz3ka', 7, 3, 3, '', 'A-', 'financas', '', 0.41],
      ['Adam Smith', 'A gratidão é uma virtude que não apenas reconhece um benefício, mas também fortalece o vínculo entre as pessoas.', 2, 0, 0, 2, 'q6vhizo1otkgfa', 7, 3, 3, '', 'A-', 'gratidao', '', 0.33],
      [
        'Epicuro',
        'Não estrague o que você tem desejando o que não tem; lembre-se de que aquilo que você possui agora estava entre as coisas que você só esperava no passado.',
        3,
        0,
        0,
        2,
        'qzssi2s1tvb9ea',
        6,
        3,
        3,
        'Sentenças Vaticanas',
        'A',
        'vida',
        'Não estrague aquilo que você tem desejando aquilo que não tem; lembre-se de que aquilo que você possui agora já foi um dia algo que você desejou.',
        0.78
      ],
      ['Helen Keller', 'A vida é uma sucessão de lições que devem ser vividas para serem compreendidas.', 2, 0, 0, 2, 'qo3y81d19c33tt', 7, 3, 3, '', 'A-', 'vida', '', 0.35],
      ['Stephen Hawking', 'Por mais difícil que a vida pareça, sempre há algo que você pode fazer e no que pode ter sucesso.', 3, 0, 0, 2, 'qu9oqzx1y1u87t', 6, 3, 3, 'Discurso de aniversário de 70 anos, 2012', 'A', 'vida', 'Por mais difícil que a vida possa parecer, há sempre algo que você pode fazer e no que pode ter sucesso.', 0.94],
      ['Philip Zimbardo', 'O comportamento humano não pode ser compreendido ignorando as forças situacionais.', 2, 0, 0, 2, 'qm3ovb0mm58zw', 7, 3, 3, 'O Efeito Lúcifer e estudos publicados', 'A-', 'manipulacao', '', 0.39],
      ['Simon Sinek', 'Grandes líderes são aqueles que sabem que o sucesso depende da equipe, não apenas deles mesmos.', 2, 0, 0, 2, 'q12r7ojd1nnu4va', 7, 3, 3, '', 'A-', 'lideranca', '', 0.48],
      ['Dale Carnegie', 'Acredite que você terá sucesso, e você terá.', 2, 0, 0, 2, 'q1dmhh9gfwyfnf', 7, 3, 3, '', 'A-', 'motivacao', '', 0.43],
      ['Viktor Frankl', "Aqueles que têm um 'porquê' para viver podem suportar quase qualquer 'como'.", 3, 0, 0, 2, 'q5tuaagxuwxll', 6, 3, 3, 'Em Busca de Sentido', 'A-', 'motivacao', 'Aqueles que têm uma razão para viver podem suportar quase qualquer dificuldade.', 0.82],
      ['Viktor Frankl', 'Entre estímulo e resposta há um espaço. Nesse espaço está o poder de escolher nossa resposta.', 3, 0, 0, 2, 'f312b1cu9ifd', 6, 3, 3, 'Formulação difundida a partir de Frankl por Stephen Covey; não localizada em Em Busca de Sentido', 'A-', 'empoderamento', 'Entre o estímulo e a resposta existe um espaço; nesse espaço está nosso poder de escolher a resposta.', 0.89],
      ['Gerda Lerner', 'A história das mulheres precisa ser escrita porque foi apagada da história geral.', 4, 0, 0, 2, 'q1th9lj0pu0tzp', 5, 3, 3, 'A Criação do Patriarcado', 'A-', 'empoderamento', 'A história das mulheres precisa ser escrita novamente, porque foi escrita pelos homens e a partir da perspectiva masculina.', 0.64],
      ['Krishna', 'O homem é feito pela fé que possui; aquilo que é sua fé, assim ele é.', 3, 0, 0, 2, 'q7v71pc17ra2oq', 6, 3, 3, 'Bhagavad Gita, 17.3', 'A', 'fe', 'O ser humano é feito pela sua fé; aquilo que é sua fé, assim ele se torna.', 0.74],
      ['Sêneca', 'A vida é como uma peça de teatro: não importa quanto tempo dura, mas como é representada.', 3, 0, 0, 2, 'q1vru1q819gii5z', 6, 3, 3, 'Cartas a Lucílio', 'A-', 'vida', 'A vida é uma peça de teatro: não importa quanto tenha durado, mas sim como foi representada.', 0.87],
      ['Hillel', 'Não desprezes ninguém e não consideres nada impossível, pois não há pessoa que não tenha sua hora.', 3, 0, 0, 2, 'qrnd3151q7b1j3', 6, 3, 3, 'Hillel · Tradição rabínica — Pirkei Avot e Talmude, tradução a partir do hebraico', 'B', 'fe', 'Não desprezes nenhuma pessoa e não rejeites nenhuma coisa, pois não há pessoa que não tenha sua hora.', 0.73],
      ['Warren Bennis', 'A confiança é o combustível da liderança.', 4, 0, 0, 2, 'q1gndn7g4opozj', 5, 3, 3, 'On Becoming a Leader', 'A-', 'lideranca', 'A confiança é o elemento básico de toda liderança.', 0.69],
      ['Peter Drucker', 'A eficiência consiste em fazer bem as coisas. A eficácia consiste em fazer as coisas certas.', 3, 0, 0, 2, 'q1emtnvk18i8lh8', 6, 3, 3, 'The Effective Executive', 'A', 'negocios', 'Eficiência é fazer as coisas direito; eficácia é fazer as coisas certas.', 0.78],
      ['Esopo', 'Devagar e sempre vence a corrida.', 3, 0, 0, 2, 'f261x1ztwg', 6, 3, 3, 'Fábula A Lebre e a Tartaruga', 'A', 'motivacao', 'Devagar e sempre se vence a corrida.', 0.96],
      ['Mary Wollstonecraft', 'As mulheres não devem ser formadas como criaturas de luxo, mas como seres racionais.', 2, 0, 0, 2, 'qucuoab4m22dv', 7, 3, 3, 'Reivindicação dos Direitos da Mulher', 'A-', 'empoderamento', '', 0.5],
      ['Lao Tsé', 'Aquele que sabe não fala; aquele que fala não sabe.', 3, 0, 0, 2, 'q9kavyc1jlbxh1', 6, 3, 3, 'Tao Te Ching, 56', 'A', 'fe', 'Aquele que sabe não precisa provar; aquele que precisa provar não sabe.', 0.73],
      ['Erich Fromm', 'A necessidade de ser normal é uma das maiores fontes de sofrimento.', 2, 0, 0, 2, 'q1gya0741tngg9e', 7, 3, 3, '', 'A-', 'autorreconhecimento', '', 0.4],
      ['Marco Aurélio', 'Não desperdice o que resta da vida em pensamentos sobre os outros.', 4, 0, 0, 2, 'q1hlui0k1pj5xp0', 5, 3, 3, 'Meditações, III, 4', 'A', 'conforto', 'Não desperdice o resto da sua vida imaginando o que os outros estão fazendo.', 0.67],
      ['Jean-Jacques Rousseau', 'É sobretudo na solidão que se sente a vantagem de viver com alguém que saiba pensar.', 2, 0, 0, 2, 'q1njp6f4ytrvef', 7, 3, 3, '', 'A-', 'vida', '', 0.33],
      ['Sêneca', 'Quem recebe um benefício com gratidão já pagou a primeira parcela.', 3, 0, 0, 2, 'q1ct568415pzqvx', 6, 3, 3, 'Sobre os Benefícios, II', 'A', 'gratidao', 'Quem acolhe um benefício com gratidão, paga a primeira prestação da sua dívida.', 0.73],
      ['Robert Emmons', 'A gratidão é uma emoção que nasce quando reconhecemos que recebemos algo valioso de outra pessoa.', 4, 0, 0, 2, 'q1nihaek6okial', 5, 3, 3, '', 'A-', 'gratidao', 'A gratidão é o sentimento que nasce quando percebemos que a vida nos oferece mais do que merecemos.', 0.54],
      ['Rumi', 'O que você procura está procurando você.', 2, 0, 0, 2, 'q68suv8pleor2', 7, 3, 3, '', 'A-', 'fe', '', 0.33],
      ['Nassim Nicholas Taleb', 'O problema é que aprendemos mais com nossos fracassos do que com nossos sucessos, mas tentamos evitar o fracasso a todo custo.', 2, 0, 0, 2, 'q1cmaxc11hmmo4u', 7, 3, 3, '', 'A-', 'financas', '', 0.26],
      ['Helen Keller', 'O caráter não pode ser desenvolvido na tranquilidade e facilidade. Somente através da experiência de provação e sofrimento a alma pode ser fortalecida.', 2, 0, 0, 2, 'q1z3vo1hx2fki', 7, 3, 3, '', 'A-', 'motivacao', '', 0.32],
      ['Lao Tsé', 'O sábio não acumula tesouros para si; quanto mais ajuda os outros, mais completo se torna.', 4, 0, 0, 2, 'q30qnr35o0x2m', 5, 3, 3, 'Tao Te Ching, 81', 'A', 'fe', 'O sábio não acumula. Quanto mais ele ajuda os outros, mais ele possui; quanto mais ele dá aos outros, mais rico se torna.', 0.67],
      ['Erich Fromm', 'A principal tarefa do ser humano na vida é dar nascimento a si mesmo.', 4, 0, 0, 2, 'q16gv04o1rcal5m', 5, 3, 3, '', 'A-', 'autorreconhecimento', 'A tarefa principal do homem na vida é dar à luz a si mesmo.', 0.66],
      ['Nassim Nicholas Taleb', 'Não é o risco que mata você; é a exposição ao risco sem entender suas consequências.', 2, 0, 0, 2, 'qd4elso10tljz2', 7, 3, 3, '', 'A-', 'financas', '', 0.47],
      ['Buda', 'Aquele que compreende a impermanência não se apega ao que muda.', 4, 0, 0, 2, 'q75fqr485eqkv', 5, 3, 3, 'Cânone páli — doutrina das três características (Anicca, Dukkha, Anatta)', 'A-', 'fe', 'Aquele que compreende a impermanência compreende a natureza da existência.', 0.67],
      ['Edward Bernays', 'A opinião pública pode ser organizada por aqueles que compreendem os mecanismos da comunicação.', 2, 0, 0, 2, 'q181hna81yvsb2n', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.36],
      ['Amartya Sen', 'Uma sociedade não pode se desenvolver plenamente se metade de sua população é deixada para trás.', 2, 0, 0, 2, 'qco1mfw3hcl5v', 7, 3, 3, '', 'A-', 'empoderamento', '', 0.4],
      ['Jane Austen', 'A amizade é certamente o melhor bálsamo para as dores da decepção amorosa.', 3, 0, 0, 2, 'q80ckzo1b052bb', 6, 3, 3, 'Romance de Jane Austen', 'A-', 'amizade', 'A amizade é certamente o melhor bálsamo para as dores do amor decepcionado.', 0.88],
      ['Epicteto', 'Não peça que os acontecimentos sejam como você deseja; deseje que sejam como são, e sua vida correrá serena.', 4, 0, 0, 2, 'qfz5fvcguad0j', 5, 3, 3, 'Enquirídio, VIII', 'A', 'dificeis', 'Não procure que as coisas aconteçam como você deseja; deseje que elas aconteçam como acontecem, e você terá uma vida tranquila.', 0.66],
      ['Jim Collins', 'As grandes empresas não se tornam grandes por fazerem muitas coisas; tornam-se grandes por fazerem algumas coisas excepcionalmente bem.', 2, 0, 0, 2, 'q1eessxk1k2xru0', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.34],
      ['Buda', 'Assim como uma rocha não é movida pelo vento, o sábio não é abalado pela aprovação ou censura.', 3, 0, 0, 2, 'q1gaminvpj2zvu', 6, 3, 3, 'Dhammapada, 81', 'A', 'fe', 'Assim como uma rocha sólida não é movida pelo vento, os sábios não são abalados pela censura ou pelo elogio.', 0.78],
      ['Jim Collins', 'A humildade é a base de uma liderança duradoura.', 2, 0, 0, 2, 'qt1ge581rzzbty', 7, 3, 3, '', 'A-', 'lideranca', '', 0.32],
      ['Henry David Thoreau', 'A vida feliz é impossível sem uma certa medida de simplicidade.', 2, 0, 0, 2, 'qvlaog41qeo7ew', 7, 3, 3, '', 'A-', 'felicidade', '', 0.31],
      ['Donald Winnicott', 'Não existe isso de um bebê sozinho: onde há um bebê, há alguém cuidando dele.', 3, 0, 0, 2, 'q15ow490kr9s6x', 6, 3, 3, 'The Child, the Family and the Outside World', 'A', 'familia', 'Não existe isso de um bebê. Onde há um bebê, há também alguém cuidando dele.', 0.89],
      ['Jack Welch', 'A única coisa que importa é fazer as pessoas acreditarem que podem alcançar algo maior.', 2, 0, 0, 2, 'q1n6it2dar6cy2', 7, 3, 3, '', 'A-', 'lideranca', '', 0.29],
      ['Vincent van Gogh', 'Que seria da vida se não tivéssemos coragem de tentar alguma coisa?', 3, 0, 0, 2, 'f311hzf832u', 6, 3, 3, 'Carta a Theo van Gogh, 1888', 'A', 'reflexao', 'O que seria a vida se não tivéssemos coragem de tentar alguma coisa?', 0.98],
      ['Zenão de Cítio', 'A felicidade está em viver de acordo com a natureza.', 3, 0, 0, 2, 'qkewsw0q6iqi0', 6, 3, 3, 'Fragmentos recolhidos por Diógenes Laércio', 'A-', 'felicidade', 'O objetivo da vida é viver de acordo com a natureza.', 0.72],
      ['Simone de Beauvoir', 'Que nada nos defina, que nada nos sujeite. Que a liberdade seja a nossa própria substância.', 3, 0, 0, 2, 'f31t1b8as3s', 6, 3, 3, 'Atribuído a Beauvoir em coletâneas, sem localização em sua obra', 'A-', 'reflexao', 'Que nada nos defina, que nada nos sujeite. Que a liberdade seja a nossa própria substância, já que viver é ser livre.', 0.88],
      ['Marco Aurélio', 'O impedimento à ação avança a ação. O que fica no caminho torna-se o caminho.', 4, 0, 0, 2, 'q1m8rnxgpeep2l', 5, 3, 3, 'Meditações, V, 20', 'A', 'filosofos', 'A pedra que obstrui o caminho torna-se o caminho.', 0.63],
      ['Jean-Jacques Rousseau', 'A natureza fez o homem feliz e bom, mas a sociedade o deprava e o torna miserável.', 2, 0, 0, 2, 'q1im8ymw132cjfn', 7, 3, 3, '', 'A-', 'filosofos', '', 0.35],
      ['Michael Porter', 'A melhor maneira de competir é encontrar uma posição única no mercado.', 2, 0, 0, 2, 'qbpot0mu02ftx', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.36],
      ['Buda', 'A mente treinada traz felicidade.', 3, 0, 0, 2, 'qec5mf8nmnziq', 6, 3, 3, 'Dhammapada, 35', 'A', 'fe', 'A mente disciplinada traz felicidade.', 0.83],
      ['Aristóteles', 'A felicidade é uma atividade da alma conforme a excelência.', 4, 0, 0, 2, 'q1r8vym8wnbpyv', 5, 3, 3, 'Ética a Nicômaco, I', 'A', 'felicidade', 'A felicidade é uma atividade da alma de acordo com a virtude perfeita.', 0.66],
      ['Krishna', 'A mente é amiga daqueles que a conquistaram, mas é inimiga daqueles que não a controlam.', 2, 0, 0, 2, 'q1x0y9hwu6ka75', 7, 3, 3, 'Bhagavad Gita, 6.6', 'A', 'fe', '', 0.44],
      ['William Shakespeare', 'A vida é um conto contado por um idiota, cheio de som e fúria, sem significado algum.', 3, 0, 0, 2, 'q1crln81llw52x', 6, 3, 3, 'Macbeth', 'A', 'vida', 'A vida é apenas uma história contada por um idiota, cheia de som e fúria, sem significado.', 0.82],
      ['Jim Collins', 'Grandes líderes enfrentam a realidade e não fogem dela.', 2, 0, 0, 2, 'qutbpactdeoki', 7, 3, 3, '', 'A-', 'lideranca', '', 0.45],
      ['Napoleão Bonaparte', 'Um líder é um vendedor de esperança.', 3, 0, 0, 2, 'q1kbamn81e1gq1r', 6, 3, 3, 'Correspondência e ditos registrados por contemporâneos', 'A-', 'politica', 'Um líder é um negociante de esperança.', 0.8],
      ['Philip Zimbardo', 'A situação exerce uma influência maior sobre o comportamento do que muitas pessoas imaginam.', 4, 0, 0, 2, 'q1ojiqck1wihcws', 5, 3, 3, 'O Efeito Lúcifer e estudos publicados', 'A-', 'manipulacao', 'A situação pode exercer uma influência mais poderosa sobre o comportamento humano do que geralmente reconhecemos.', 0.69],
      ['Benjamin Graham', 'O maior inimigo do investidor é a emoção.', 4, 0, 0, 2, 'q13lgzg8vv6t4u', 5, 3, 3, '', 'A-', 'financas', 'O principal problema do investidor — e seu pior inimigo — é ele mesmo.', 0.51],
      ['Antoine de Saint-Exupéry', 'A tristeza é uma das vibrações que provam que estamos vivos.', 2, 0, 0, 2, 'qhxa0t91gtqxhs', 7, 3, 3, '', 'A-', 'conforto', '', 0.35],
      ['Mário Quintana', 'Todos esses que aí estão atravancando meu caminho, eles passarão. Eu passarinho.', 3, 0, 0, 2, 'q1ngmy7gc5zo48', 6, 3, 3, 'Poeminho do Contra', 'A', 'reflexao', 'Todos esses que aí estão atravancando o meu caminho, eles passarão. Eu passarinho!', 0.99],
      ['Mihaly Csikszentmihalyi', 'Os melhores momentos ocorrem quando o corpo ou a mente atingem seu limite num esforço voluntário.', 3, 0, 0, 2, 'q1pnd6601xiv9im', 6, 3, 3, 'Flow', 'A', 'felicidade', 'Os melhores momentos ocorrem quando o corpo ou a mente são levados ao limite num esforço voluntário.', 0.9],
      ['Paulo Freire', 'Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.', 3, 0, 0, 2, 'q1329ens1shjnvo', 6, 3, 3, 'Pedagogia da Autonomia', 'A', 'educacao', 'Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção ou a sua construção.', 0.96],
      ['Martin Luther King Jr.', 'Tenho um sonho: que meus quatro filhos vivam num país onde sejam julgados pelo conteúdo do seu caráter.', 3, 0, 0, 2, 'q1ffs59cvgvl46', 6, 3, 3, 'Discurso em Washington, 28/08/1963', 'A', 'politica', 'Eu tenho um sonho: que meus quatro filhos um dia vivam numa nação onde não serão julgados pela cor da pele, mas pelo conteúdo de seu caráter.', 0.8],
      ['Peter Drucker', 'Gestão é fazer as coisas direito; liderança é fazer as coisas certas.', 3, 0, 0, 2, 'q1qk7pt5fi9jhl', 6, 3, 3, 'The Effective Executive', 'A', 'lideranca', 'Eficiência é fazer as coisas direito; eficácia é fazer as coisas certas.', 0.82],
      ['Marco Aurélio', 'O que não é bom para a colmeia não é bom para a abelha.', 4, 0, 0, 2, 'q1sm7nhffijgnj', 5, 3, 3, 'Meditações, VI, 54', 'A', 'politica', 'O que não é bom para a comunidade também não é bom para o indivíduo.', 0.68],
      ['Júlio César', 'A sorte está lançada.', 2, 0, 0, 2, 'qa9qc2w43pcrl', 7, 3, 3, '', 'A', 'politica', '', 0.29],
      ['Steve Jobs', 'As pessoas que são loucas o suficiente para pensar que podem mudar o mundo são as que fazem isso.', 3, 0, 0, 2, 'q1ttcnf4fl9kjm', 6, 3, 3, 'Entrevista registrada', 'A', 'empreendedorismo', 'As pessoas que são loucas o suficiente para achar que podem mudar o mundo são as que realmente mudam.', 0.85],
      ['Epicteto', 'Primeiro diga a si mesmo o que você seria; depois faça o que precisa fazer.', 3, 0, 0, 2, 'qk10xia19gopsl', 6, 3, 3, 'Diatribes, III, 23', 'A', 'motivacao', 'Primeiro diga a si mesmo o que você gostaria de ser; depois faça o que deve fazer.', 0.83],
      ['Richard Branson', 'Uma empresa deve ser uma força para melhorar a vida das pessoas.', 4, 0, 0, 2, 'qkf95ggxh9zlq', 5, 3, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', 'O negócio é simplesmente uma ideia para melhorar a vida das pessoas.', 0.61],
      ['Adam Smith', 'A gratidão é o sentimento que acompanha o reconhecimento de uma boa ação.', 2, 0, 0, 2, 'q1ua01ss1tcdg6g', 7, 3, 3, '', 'A-', 'gratidao', '', 0.35],
      ['Jack Ma', 'Nunca desista. Hoje é difícil, amanhã será pior, mas depois de amanhã haverá sol.', 3, 0, 0, 2, 'qxewzlw10uuv15', 6, 3, 3, 'Entrevista registrada', 'A', 'empreendedorismo', 'Hoje é difícil, amanhã será pior, mas depois de amanhã será lindo.', 0.81],
      ['Daniel Goleman', 'A autoconsciência é a base da inteligência emocional.', 2, 0, 0, 2, 'q1lcxqucl8np0r', 7, 3, 3, 'Inteligência Emocional', 'A-', 'manipulacao', '', 0.49],
      ['Marco Aurélio', 'A perda não é nada além de uma mudança, e a mudança é o deleite da natureza.', 3, 0, 0, 2, 'qerfdqc18vs448', 6, 3, 3, 'Meditações, IX, 35', 'A', 'filosofos', 'A perda nada mais é do que uma mudança, e a mudança é a natureza da existência.', 0.72],
      ['Alcorão 39:53', 'E não se desesperem da misericórdia de Deus.', 3, 0, 0, 2, 'qjaylhw1x3nvq6', 6, 3, 3, 'Alcorão 39:53 · Alcorão — tradução de Samir El Hayek (edição brasileira de referência)', 'B', 'fe', 'Não percam a esperança da misericórdia de Deus.', 0.77],
      ['Chimamanda Ngozi Adichie', 'Você não pode esquecer quem você é, porque o mundo constantemente tentará lembrá-la de quem ele quer que você seja.', 2, 0, 0, 2, 'qf8dp871jpqc46', 7, 3, 3, '', 'A-', 'empoderamento', '', 0.43],
      ['Thomas Edison', 'A oportunidade é perdida pela maioria das pessoas porque está vestida de macacão e parece trabalho.', 4, 0, 0, 2, 'q1xvibtc1irt9ej', 5, 3, 3, 'Entrevista registrada', 'A', 'negocios', 'A maioria das pessoas perde oportunidades porque elas estão vestidas com roupas de trabalho e parecem trabalho.', 0.54],
      ['Angela Duckworth', 'Garra é paixão e perseverança por objetivos de longo prazo.', 3, 0, 0, 2, 'q305i86xcxnjq', 6, 3, 3, 'Garra: O Poder da Paixão e da Perseverança', 'A', 'motivacao', 'A garra é paixão e perseverança por objetivos de longo prazo.', 0.99],
      ['Richard Branson', 'Negócios são como ônibus: sempre haverá outra oportunidade.', 4, 0, 0, 2, 'q98r8xs1joqxxr', 5, 3, 3, 'Perdendo a Virgindade ou declaração pública registrada', 'A-', 'empreendedorismo', 'As oportunidades de negócio são como ônibus: sempre há outro chegando.', 0.63],
      ['Charlie Munger', 'A capacidade de esperar é uma das maiores vantagens competitivas nos investimentos.', 4, 0, 0, 2, 'q1c3rots1k7y0x5', 5, 3, 3, 'Poor Charlie’s Almanack e reuniões da Berkshire', 'A-', 'financas', 'O hábito de aprender continuamente é uma das maiores vantagens competitivas que uma pessoa pode ter.', 0.59],
      ['Warren Buffett', 'Leva 20 anos para construir uma reputação e cinco minutos para arruiná-la. Se você pensar nisso, fará as coisas de forma diferente.', 4, 0, 0, 2, 'qll5a58153jwyo', 5, 3, 3, 'Cartas aos acionistas da Berkshire Hathaway', 'A-', 'negocios', 'Leva vinte anos para construir uma reputação e cinco minutos para arruiná-la.', 0.69],
      ['Benjamin Graham', 'O investidor deve estar preparado para enfrentar períodos de queda sem abandonar sua estratégia.', 2, 0, 0, 2, 'q19uusqr1dm86bw', 7, 3, 3, '', 'A-', 'financas', '', 0.42],
      ['Warren Buffett', 'A regra número um é nunca perder dinheiro. A regra número dois é nunca esquecer a regra número um.', 3, 0, 0, 2, 'qih0xvnbvjkx2', 6, 3, 3, '', 'A', 'financas', 'Regra número um: nunca perca dinheiro. Regra número dois: nunca esqueça a regra número um.', 0.92],
      ['Krishna', 'A mente pode ser amiga daquele que a conquistou, mas inimiga daquele que falhou em dominá-la.', 2, 0, 0, 2, 'q1j4m86s5u9b0i', 7, 3, 3, 'Bhagavad Gita, 6.6', 'A', 'fe', '', 0.48],
      ['Krishna', 'O verdadeiro conhecimento é ver a mesma realidade em todos os seres.', 4, 0, 0, 2, 'qa84414jq6n3', 5, 3, 3, 'Bhagavad Gita, 13.28', 'A', 'fe', 'A verdadeira sabedoria é perceber a unidade de todos os seres.', 0.62],
      ['Ailton Krenak', 'Adiar o fim do mundo é sempre exercer a capacidade de contar mais uma história.', 3, 0, 0, 2, 'q13ramdo1slcrqr', 6, 3, 3, 'Ideias para Adiar o Fim do Mundo', 'A', 'reflexao', 'Adiar o fim do mundo é exatamente sempre poder contar mais uma história.', 0.75],
      ['Sêneca', 'Aquele que dá deve esquecer; aquele que recebe deve lembrar.', 2, 0, 0, 2, 'q1y09fumhoi8i9', 7, 3, 3, 'Sobre os Benefícios, I–II', 'A', 'gratidao', '', 0.46],
      ['Buda', 'A mente precede todas as coisas; a mente é sua essência e elas são feitas pela mente.', 3, 0, 0, 2, 'qw2ua43mlrkcj', 6, 3, 3, 'Dhammapada, 1–2', 'A', 'fe', 'A mente é a precursora de todas as coisas. A mente é o principal; tudo é criado pela mente.', 0.7],
      ['José Ortega y Gasset', 'A vida é uma série de colisões com o futuro; não é uma soma do que fomos, mas do que desejamos ser.', 2, 0, 0, 2, 'q5kcde8vpxn2o', 7, 3, 3, '', 'A-', 'vida', '', 0.29],
      ['Michael Porter', 'A vantagem competitiva surge das atividades que uma empresa realiza de forma diferente dos seus concorrentes.', 4, 0, 0, 2, 'q1a2gvjw1m9qygd', 5, 3, 3, '', 'A-', 'empreendedorismo', 'A vantagem competitiva nasce do valor que uma empresa consegue criar para seus compradores e que excede o custo de criá-lo.', 0.54],
      ['Jean-Jacques Rousseau', 'A única instituição que ainda tem o poder de formar pessoas é a educação.', 2, 0, 0, 2, 'q1nmlkntdg5iht', 7, 3, 3, '', 'A-', 'filosofos', '', 0.4],
      ['William Shakespeare', 'Alguns nascem grandes, alguns alcançam a grandeza e alguns têm a grandeza lançada sobre si.', 3, 0, 0, 2, 'qr6mwcc1s9ytad', 6, 3, 3, 'Noite de Reis, II, 5', 'A', 'lideranca', 'Alguns são feitos grandes, alguns alcançam a grandeza e alguns têm a grandeza imposta sobre eles.', 0.83],
      ['Virginia Woolf', 'Uma mulher precisa de dinheiro e de um quarto só seu para escrever ficção.', 3, 0, 0, 2, 'q7daexlaukw0', 6, 3, 3, 'Um Teto Todo Seu', 'A', 'reflexao', 'Uma mulher precisa ter dinheiro e um teto todo seu para escrever ficção.', 0.87],
      ['Nelson Mandela', 'Ninguém nasce odiando outra pessoa pela cor de sua pele, por sua origem ou por sua religião.', 3, 0, 0, 2, 'q12dnusk1ugcxr6', 6, 3, 3, 'Longo Caminho para a Liberdade ou declaração pública registrada', 'A-', 'politica', 'Ninguém nasce odiando outra pessoa pela cor de sua pele.', 0.77],
      ['Fernando Pessoa', 'Tudo vale a pena se a alma não é pequena.', 3, 0, 0, 2, 'q1giqwqs15j8ono', 6, 3, 3, 'Mensagem, "Mar Português"', 'A', 'vida', 'Tudo vale a pena quando a alma não é pequena.', 0.88],
      ['Helen Keller', 'O otimismo é a fé que leva à realização. Nada pode ser feito sem esperança e confiança.', 4, 0, 0, 2, 'q1so3y34syh1zl', 5, 3, 3, '', 'A-', 'motivacao', 'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.', 0.63],
      ['J. R. R. Tolkien', 'É inútil encontrar vingança contra o passado, pois o passado não pode ser mudado.', 2, 0, 0, 2, 'q1pc6q4wwxfa0m', 7, 3, 3, '', 'A-', 'dificeis', '', 0.36],
      ['Viktor Frankl', 'A última das liberdades humanas é escolher a atitude diante das circunstâncias.', 3, 0, 0, 2, 'qhrjb3s1yk0bgl', 6, 3, 3, 'Em Busca de Sentido', 'A-', 'manipulacao', 'A última das liberdades humanas é escolher a atitude diante de qualquer circunstância.', 0.93],
      ['Rumi', 'A beleza que você vê em mim é um reflexo de você.', 2, 0, 0, 2, 'q1ty66l013h0n4c', 7, 3, 3, '', 'A-', 'fe', '', 0.32],
      ['Norman Schwarzkopf', 'A liderança é uma combinação poderosa de estratégia e caráter. Mas se você tiver de ficar sem um deles, fique sem a estratégia.', 3, 0, 0, 2, 'f26547qcd8', 6, 3, 3, 'Entrevista registrada', 'A', 'lideranca', 'A liderança é uma combinação poderosa de estratégia e caráter. Mas, se você tiver de ficar sem um dos dois, fique sem a estratégia.', 0.96],
      ['Sêneca', 'Não é que tenhamos pouco tempo, mas desperdiçamos muito dele.', 3, 0, 0, 2, 'qmbmnns1wg8uj6', 6, 3, 3, 'Sobre a Brevidade da Vida, I', 'A', 'filosofos', 'Não é que temos pouco tempo, é que perdemos muito dele.', 0.84],
      ['Epicuro', 'Não é possível viver feliz sem viver com sabedoria, honestidade e justiça.', 3, 0, 0, 2, 'q13tblisfavqy2', 6, 3, 3, 'Máximas Principais (Kyriai Doxai)', 'A', 'felicidade', 'A vida feliz é impossível sem a sabedoria, a honestidade e a justiça.', 0.71],
      ['Guy Kawasaki', 'Ideias são fáceis; a implementação é difícil.', 3, 0, 0, 2, 'qfre3c4cdl1e8', 6, 3, 3, 'A Arte do Começo', 'A', 'empreendedorismo', 'As ideias são fáceis. A implementação é difícil.', 0.97],
      ['Epicteto', 'Se você quer melhorar, aceite aquilo que não pode controlar e concentre-se no que depende de você.', 2, 0, 0, 2, 'q61j2ds1o4tyog', 7, 3, 3, '', 'A-', 'conforto', '', 0.44],
      ['Martin Seligman', 'As pessoas gratas experimentam mais emoções positivas e constroem relações mais fortes.', 2, 0, 0, 2, 'q1tb2xdb2zrma0', 7, 3, 3, '', 'A-', 'gratidao', '', 0.46],
      ['Dale Carnegie', 'Desenvolva o sucesso a partir dos fracassos. O desânimo e o fracasso são dois dos mais seguros degraus para o sucesso.', 2, 0, 0, 2, 'q416nsk164l11e', 7, 3, 3, '', 'A-', 'motivacao', '', 0.37],
      ['Sêneca', 'O tempo que temos não é curto; o problema é que perdemos muito dele.', 3, 0, 0, 2, 'q14fg9bghrqtpn', 6, 3, 3, 'Sobre a Brevidade da Vida, I–III', 'A', 'vida', 'Não é que temos pouco tempo, é que perdemos muito dele.', 0.75],
      [
        'Conceição Evaristo',
        'A escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.',
        3,
        0,
        0,
        2,
        'f28pvi1n3x',
        6,
        3,
        3,
        'Palestra registrada, formulação da autora sobre escrevivência',
        'A',
        'empoderamento',
        'A nossa escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.',
        0.98
      ],
      ['Aristóteles', 'As raízes da educação são amargas, mas o fruto é doce.', 4, 0, 0, 2, 'q1t5h2cvgt1zuf', 5, 3, 3, 'Atribuído por Diógenes Laércio, Vidas dos Filósofos', 'A', 'educacao', 'A educação tem raízes amargas, mas os seus frutos são doces.', 0.67],
      ['William Shakespeare', 'A brevidade é a alma do engenho.', 3, 0, 0, 2, 'q659epk13v8j5p', 6, 3, 3, 'Hamlet', 'A', 'filosofos', 'A brevidade é a alma do espírito.', 0.78],
      ['Lev Vygotsky', 'O que a criança faz hoje com ajuda, amanhã fará sozinha.', 3, 0, 0, 2, 'qn0yrlw1nmkrfj', 6, 3, 3, 'Pensamento e Linguagem', 'A', 'educacao', 'O que a criança consegue fazer hoje com ajuda, amanhã conseguirá fazer sozinha.', 0.79],
      ['Rosa Parks', 'Aprendi ao longo dos anos que, quando a decisão está tomada, o medo diminui.', 3, 0, 0, 2, 'q16ivioo1mqnn5a', 6, 3, 3, 'Rosa Parks: My Story', 'A', 'dificeis', 'Aprendi ao longo dos anos que, quando a pessoa já tomou sua decisão, isso diminui o medo.', 0.72],
      ['Sêneca', 'Enquanto se adia, a vida passa.', 3, 0, 0, 2, 'q3o42y41qnmv6f', 6, 3, 3, 'Cartas a Lucílio, I', 'A', 'reflexao', 'Enquanto você adiar, a vida passa.', 0.9],
      ['Ernest Hemingway', 'O homem não foi feito para a derrota. Um homem pode ser destruído, mas não derrotado.', 3, 0, 0, 2, 'qcg0ls81mcw8ep', 6, 3, 3, 'O Velho e o Mar', 'A', 'dificeis', 'O homem pode ser destruído, mas não derrotado.', 0.71],
      ['William Shakespeare', 'O mundo inteiro é um palco, e todos os homens e mulheres são apenas atores.', 3, 0, 0, 2, 'q7n2qioyd379p', 6, 3, 3, 'Como Gostais (As You Like It)', 'A', 'vida', 'O mundo inteiro é um palco, e todos os homens e mulheres, meros atores.', 0.91],
      ['Milton Friedman', 'A inflação é uma forma de imposto sem legislação.', 2, 0, 0, 2, 'q17sju8t3i5ls', 7, 3, 3, '', 'A-', 'financas', '', 0.37],
      ['Abraham Lincoln', 'Uma casa dividida contra si mesma não pode permanecer.', 3, 0, 0, 2, 'q1mwc2d3wqfszd', 6, 3, 3, 'Correspondência registrada', 'A', 'politica', 'Uma casa dividida contra si mesma não pode permanecer de pé.', 0.96],
      ['Benjamin Graham', 'A volatilidade está longe de ser sinônimo de risco.', 2, 0, 0, 2, 'qxa4nrk1ayrd3w', 7, 3, 3, '', 'A-', 'financas', '', 0.44],
      ['Epicteto', 'Não são as coisas que perturbam os homens, mas as opiniões que eles têm sobre as coisas.', 3, 0, 0, 2, 'f31161a5nmk2', 6, 3, 3, 'Manual (Encheirídion), capítulo 5', 'A', 'reflexao', 'Não são as coisas que perturbam os homens, mas os julgamentos que eles fazem sobre as coisas.', 0.86],
      ['Kahlil Gibran', 'Quando o amor vos chamar, segui-o, embora seus caminhos sejam árduos e íngremes.', 3, 0, 0, 2, 'q1oavf34bspv1c', 6, 3, 3, 'O Profeta, "Do Amor"', 'A', 'amor', 'Quando o amor chamar, segue-o, ainda que seus caminhos sejam difíceis e íngremes.', 0.79],
      ['Henry David Thoreau', 'Não há remédio para o amor, senão amar mais.', 2, 0, 0, 2, 'q1pkroagc6amdo', 7, 3, 3, '', 'A-', 'amor', '', 0.42],
      ['Peter Drucker', 'A melhor maneira de prever o futuro é criá-lo.', 4, 0, 0, 2, 'qscs28mucbg8', 5, 3, 3, '', 'P', 'motivacao', 'A melhor maneira de prever o futuro é criá-lo — atribuição disputada, origem provável em Alan Kay.', 0.63],
      ['Antoine de Saint-Exupéry', 'O verdadeiro amor nunca se desgasta. Quanto mais se dá, mais se tem.', 2, 0, 0, 2, 'q1kyxhag11gpbhk', 7, 3, 3, '', 'A-', 'amor', '', 0.36],
      ['Dale Carnegie', 'O agradecimento sincero é uma das forças mais poderosas nas relações humanas.', 4, 0, 0, 2, 'qmdjutd1j4bmmf', 5, 3, 3, '', 'A-', 'gratidao', 'O desejo de ser importante é uma das maiores necessidades humanas.', 0.53],
      ['John C. Maxwell', 'Um líder é aquele que conhece o caminho, percorre o caminho e mostra o caminho.', 3, 0, 0, 2, 'q1vwwn2c1fmsiko', 6, 3, 3, 'As 21 Irrefutáveis Leis da Liderança', 'A', 'lideranca', 'Um líder é alguém que conhece o caminho, percorre o caminho e mostra o caminho.', 0.95],
      ['Helen Keller', 'O melhor e mais belo das coisas no mundo não pode ser visto nem tocado, mas é sentido no coração.', 2, 0, 0, 2, 'q1yydygg1qrwv33', 7, 3, 3, '', 'A-', 'dificeis', '', 0.4],
      ['Michael Porter', 'Uma empresa deve saber onde competir e como vencer.', 2, 0, 0, 2, 'q19zvp261raf4tc', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.36],
      ['Erich Fromm', 'A amizade é a mais difícil das relações, porque exige entrega sem posse.', 2, 0, 0, 2, 'qi8qqmog8zpha', 7, 3, 3, '', 'A-', 'amizade', '', 0.36],
      ['Krishna', 'Aquele que abandona o ego e age pelo bem de todos alcança a paz.', 3, 0, 0, 2, 'q1p39efk1pyobjw', 6, 3, 3, 'Bhagavad Gita', 'A-', 'fe', 'Aquele que abandona o apego aos frutos da ação alcança a paz.', 0.77],
      ['Jim Collins', 'Bom é inimigo do ótimo.', 3, 0, 0, 2, 'qbxjhyc1m3zr71', 6, 3, 3, 'Empresas Feitas para Vencer', 'A', 'negocios', 'O bom é inimigo do ótimo.', 0.97],
      ['Martin Seligman', 'A prática da gratidão muda a forma como percebemos nossas experiências.', 2, 0, 0, 2, 'q1vbmfbkxals8', 7, 3, 3, '', 'A-', 'gratidao', '', 0.34],
      ['Michel de Montaigne', 'Prefiro uma cabeça bem-feita a uma cabeça muito cheia.', 2, 0, 0, 2, 'q9fz8wm1wt0hz', 7, 3, 3, 'Ensaios, Livro I, XXVI', 'A', 'educacao', '', 0.42],
      ['Simon Sinek', 'As pessoas não compram o que você faz; elas compram o porquê você faz.', 3, 0, 0, 2, 'q423p7s86881b', 6, 3, 3, 'Comece pelo Porquê', 'A', 'lideranca', 'As pessoas não compram o que você faz; elas compram por que você faz.', 0.99],
      ['Benjamin Graham', 'A diferença entre investimento e especulação é a quantidade de análise feita antes da decisão.', 2, 0, 0, 2, 'qyxuw081m5f7uj', 7, 3, 3, '', 'A-', 'financas', '', 0.46],
      ['Theodore Levitt', 'A miopia em marketing consiste em definir o negócio pela perspectiva do produto, e não pela necessidade do cliente.', 2, 0, 0, 2, 'qhpi1181jp3f8z', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.24],
      ['Krishna', 'Aquele que abandona o apego e realiza suas ações com equilíbrio alcança a paz.', 4, 0, 0, 2, 'q1li7o20fr1xsj', 5, 3, 3, 'Bhagavad Gita', 'A-', 'fe', 'Aquele que abandona o apego aos frutos da ação alcança a paz.', 0.69],
      ['Simon Sinek', 'A liderança não é sobre o líder; é sobre as pessoas que ele lidera.', 2, 0, 0, 2, 'qml09dg1bzfmn4', 7, 3, 3, '', 'A-', 'lideranca', '', 0.42],
      ['Epicuro', 'Não arruínes o que tens desejando o que não tens; lembra-te de que aquilo que possuis agora já foi um dia algo que desejaste.', 3, 0, 0, 2, 'qce0kpoaonmd5', 6, 3, 3, 'Sentenças Vaticanas, 35', 'A', 'felicidade', 'Não estrague aquilo que você tem desejando aquilo que não tem; lembre-se de que aquilo que você possui agora já foi um dia algo que você desejou.', 0.77],
      ['Warren Buffett', 'O mercado é uma máquina que transfere dinheiro do impaciente para o paciente.', 3, 0, 0, 2, 'qqn8oq3tpb063', 6, 3, 3, 'Cartas aos acionistas da Berkshire Hathaway', 'A-', 'financas', 'O mercado de ações é um mecanismo para transferir dinheiro dos impacientes para os pacientes.', 0.79],
      ['Jack Welch', 'Mude antes que você seja obrigado a mudar.', 2, 0, 0, 2, 'ql9webo15ziv8n', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.26],
      ['Viktor Frankl', 'Tudo pode ser tirado de um homem, exceto a última das liberdades humanas: escolher a própria atitude.', 4, 0, 0, 2, 'q1yc78uk15tab4w', 5, 3, 3, 'Em Busca de Sentido', 'A', 'dificeis', 'A última das liberdades humanas é escolher a atitude diante de qualquer circunstância.', 0.55],
      ['Jesus Cristo', 'Bem-aventurados os puros de coração, porque verão a Deus.', 4, 0, 0, 2, 'qtrfo1f1xel1kc', 5, 3, 3, 'Mateus 5 (Sermão da Montanha) · Almeida Revista e Atualizada', 'A', 'fe', 'Bem-aventurados os que têm fome e sede de justiça, porque serão fartos.', 0.68],
      ['Nicolau Maquiavel', 'Todos veem aquilo que você parece ser, poucos conhecem aquilo que você realmente é.', 4, 0, 0, 2, 'qbqh2qk1tjp13u', 5, 3, 3, 'O Príncipe', 'A-', 'politica', 'Os homens julgam mais pelos olhos do que pelas mãos: todos veem o que você parece, poucos sentem o que você é.', 0.53],
      ['Kahlil Gibran', 'Sois os arcos dos quais vossos filhos são lançados como flechas vivas.', 4, 0, 0, 2, 'q2v5o7s1dwdxnd', 5, 3, 3, 'O Profeta, "Dos Filhos"', 'A', 'familia', 'Vocês são os arcos dos quais seus filhos, como flechas vivas, são enviados.', 0.69],
      ['Baruch Spinoza', 'A vida feliz é uma vida de acordo com a razão.', 2, 0, 0, 2, 'qzf4q051qa8c5', 7, 3, 3, '', 'A-', 'felicidade', '', 0.48],
      ['Henry David Thoreau', 'Não há amizade mais verdadeira do que aquela que nasce de interesses comuns.', 2, 0, 0, 2, 'qm586iwn9tq4r', 7, 3, 3, '', 'A-', 'amizade', '', 0.37],
      ['Henry David Thoreau', 'Não é o que você olha que importa, é o que você vê.', 2, 0, 0, 2, 'q1imfknc4gtd61', 7, 3, 3, '', 'A-', 'vida', '', 0.34],
      ['Martin Seligman', 'Reconhecer o bem que existe em nossa vida é uma das bases de uma vida plena.', 2, 0, 0, 2, 'qe5y455qj1xuq', 7, 3, 3, '', 'A-', 'gratidao', '', 0.31],
      ['Viktor Frankl', 'A liberdade humana é a capacidade de escolher a atitude que tomaremos diante de qualquer circunstância.', 3, 0, 0, 2, 'qb2swoe1i7o8', 6, 3, 3, 'Em Busca de Sentido', 'A-', 'autorreconhecimento', 'A última das liberdades humanas é escolher a atitude diante de qualquer circunstância.', 0.78],
      ['Sêneca', 'Sofremos mais na imaginação do que na realidade.', 3, 0, 0, 2, 'f3115p844dh', 6, 3, 3, 'Cartas a Lucílio, carta 13', 'A', 'dificeis', 'Sofremos mais frequentemente na imaginação do que na realidade.', 0.85],
      ['Audre Lorde', 'Eu não sou livre enquanto alguma mulher for prisioneira, mesmo que suas correntes sejam diferentes das minhas.', 4, 0, 0, 2, 'qbtz45wyb1xsi', 5, 3, 3, '', 'A-', 'empoderamento', 'Não sou livre enquanto qualquer mulher não for livre, mesmo quando as algemas dela forem muito diferentes das minhas.', 0.69],
      ['Simon Sinek', 'Trabalhe para ser útil, não apenas bem-sucedido.', 2, 0, 0, 2, 'q1dptsil15msmdw', 7, 3, 3, '', 'A-', 'negocios', '', 0.28],
      ['Conceição Evaristo', 'A nossa escrevivência não pode ser lida como histórias para ninar os da casa-grande.', 3, 0, 0, 2, 'qy844fg5org8u', 6, 3, 3, 'Becos da Memória', 'A', 'familia', 'A nossa escrevivência não pode ser lida como história para ninar os da casa-grande, e sim para incomodá-los em seus sonos injustos.', 0.78],
      ['Jonathan Haidt', 'O julgamento moral é influenciado por intuições, emoções e contexto social.', 2, 0, 0, 2, 'q99armc645ig5', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.43],
      ['Jeff Bezos', 'Se você não quiser ser criticado, não tente nada novo.', 3, 0, 0, 2, 'q1kvf6itm4sv3f', 6, 3, 3, 'Entrevista registrada', 'A', 'negocios', 'Se você nunca quer ser criticado, por nada faça nada novo.', 0.76],
      ['Dale Carnegie', 'A maior habilidade de um líder é reconhecer o potencial dos outros.', 2, 0, 0, 2, 'qyqy0f91yfnqa9', 7, 3, 3, '', 'A-', 'lideranca', '', 0.38],
      ['Helen Keller', 'As coisas mais belas do mundo não podem ser vistas ou tocadas; elas são sentidas com o coração.', 2, 0, 0, 2, 'q1k28mnsp4lpzq', 7, 3, 3, '', 'A-', 'conforto', '', 0.41],
      ['Michael Porter', 'Uma empresa sem estratégia é apenas um conjunto de atividades.', 2, 0, 0, 2, 'q1wbyibskjktkg', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.45],
      ['Erich Fromm', 'A felicidade é uma realização, não uma posse.', 2, 0, 0, 2, 'q1x9fqt41ftvie6', 7, 3, 3, '', 'A-', 'felicidade', '', 0.44],
      ['Erich Fromm', 'O homem moderno ainda deseja escapar da liberdade porque ela traz responsabilidade.', 2, 0, 0, 2, 'q1ai0r1g13pkdc5', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.36],
      ['J.K. Rowling', 'São as nossas escolhas, Harry, que mostram o que realmente somos.', 4, 0, 0, 2, 'f311ox9xrze', 5, 3, 3, 'Harry Potter e a Câmara Secreta (1998), capítulo 18', 'A', 'reflexao', 'São nossas escolhas que mostram quem realmente somos, muito mais do que nossas capacidades.', 0.69],
      ['Epicteto', 'Primeiro diga a si mesmo quem você quer ser; depois, faça o que tiver de fazer.', 3, 0, 0, 2, 'q1uhs94kom6bdc', 6, 3, 3, 'Diatribes, III, 23', 'A', 'filosofos', 'Primeiro diga a si mesmo o que você gostaria de ser; depois faça o que deve fazer.', 0.83],
      ['Albert Bandura', 'As pessoas não são apenas produtos do ambiente; elas também influenciam e moldam seus ambientes.', 2, 0, 0, 2, 'q1yo590g15rnjr8', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.38],
      ['Milton Friedman', 'A história mostra que a inflação sempre possui consequências econômicas importantes.', 2, 0, 0, 2, 'q16e1kp0mni7fc', 7, 3, 3, '', 'A-', 'financas', '', 0.42],
      ['Peter Drucker', 'O gerenciamento é fazer as coisas corretamente; liderança é fazer as coisas certas.', 3, 0, 0, 2, 'qpso9wk1hrayrz', 6, 3, 3, 'The Effective Executive', 'A', 'lideranca', 'Eficiência é fazer as coisas direito; eficácia é fazer as coisas certas.', 0.72],
      ['Friedrich Nietzsche', 'Aquele que combate monstros deve cuidar para não se tornar um deles.', 3, 0, 0, 2, 'q1u5qc3o1qzqfgr', 6, 3, 3, 'Além do Bem e do Mal, 146', 'A', 'filosofos', 'Quem luta contra monstros deve cuidar para não se tornar um monstro.', 0.79],
      ['Sócrates', 'A vida sem reflexão não merece ser vivida.', 3, 0, 0, 2, 'q1hzqqygtaclb3', 6, 3, 3, 'Declaração pública registrada', 'A', 'vida', 'Uma vida não examinada não merece ser vivida.', 0.73],
      ['Erich Fromm', 'A necessidade de pertencer pode levar indivíduos a abandonar sua própria autonomia.', 2, 0, 0, 2, 'q62x6to9gq4w3', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.31],
      ['Lao Tsé', 'Aquele que sabe contentar-se é sempre feliz.', 3, 0, 0, 2, 'q1w0k8615r2de1', 6, 3, 3, 'Tao Te Ching, 33 e 46', 'A', 'fe', 'Quem sabe contentar-se é rico.', 0.7],
      ['Andy Grove', 'Só os paranoicos sobrevivem.', 2, 0, 0, 2, 'q8gqmkfdvxbhz', 7, 3, 3, 'Só os Paranoicos Sobrevivem', 'A', 'empreendedorismo', '', 0.49],
      ['Lao Tsé', 'O sábio não acumula para si; quanto mais oferece aos outros, mais possui.', 4, 0, 0, 2, 'qgcqykr1e7s7mr', 5, 3, 3, 'Tao Te Ching, 81', 'A', 'fe', 'O sábio não acumula. Quanto mais ele ajuda os outros, mais ele possui; quanto mais ele dá aos outros, mais rico se torna.', 0.62],
      ['Hillel', 'O que é odioso para ti, não faças ao teu próximo.', 2, 0, 0, 2, 'q19sehx1tlflhc', 7, 3, 3, 'Hillel · Tradição rabínica — Pirkei Avot e Talmude, tradução a partir do hebraico', 'B', 'fe', '', 0.47],
      ['Albert Camus', 'No fundo do inverno, aprendi por fim que havia em mim um verão invencível.', 3, 0, 0, 2, 'f34c1nih5a0', 6, 3, 3, 'O Verão (1954), ensaio Regresso a Tipasa', 'A', 'dificeis', 'No meio do inverno aprendi enfim que havia em mim um verão invencível.', 0.9],
      ['Vinicius de Moraes', 'A vida é a arte do encontro, embora haja tanto desencontro pela vida.', 3, 0, 0, 2, 'f311szyjnup', 6, 3, 3, 'Samba da Bênção (1962)', 'A', 'amizade', 'A vida, amigo, é a arte do encontro, embora haja tanto desencontro pela vida.', 0.96],
      ['Epicteto', 'Não busque que tudo aconteça como você quer; queira que tudo aconteça como acontece, e sua vida será tranquila.', 4, 0, 0, 2, 'q143e0cg1ckiey4', 5, 3, 3, 'Enquirídio, VIII', 'A', 'conforto', 'Não procure que as coisas aconteçam como você deseja; deseje que elas aconteçam como acontecem, e você terá uma vida tranquila.', 0.68],
      [
        'Thomas Hobbes',
        'Sem um poder comum capaz de manter todos em respeito, os homens vivem em uma condição de guerra de todos contra todos.',
        4,
        0,
        0,
        2,
        'q1aihmsa42e1iw',
        5,
        3,
        3,
        'Leviatã',
        'A',
        'politica',
        'Durante o tempo em que os homens vivem sem um poder comum capaz de os manter a todos em respeito, eles se encontram naquela condição a que se chama guerra: uma guerra de todos contra todos.',
        0.66
      ],
      ['Platão', 'O começo é a parte mais importante do trabalho.', 3, 0, 0, 2, 'qyck9241nmwii', 6, 3, 3, 'A República, II', 'A', 'filosofos', 'O começo é a parte mais importante de qualquer trabalho.', 0.88],
      ['Benjamin Graham', 'O principal problema do investidor — e até seu pior inimigo — provavelmente é ele mesmo.', 3, 0, 0, 2, 'q1hbe7rs1kgwdu0', 6, 3, 3, 'O Investidor Inteligente', 'A', 'financas', 'O principal problema do investidor — e seu pior inimigo — é ele mesmo.', 0.87],
      ['David Hume', 'A gratidão e a generosidade são virtudes que aproximam os seres humanos.', 2, 0, 0, 2, 'qnjum4062k5yd', 7, 3, 3, '', 'A-', 'gratidao', '', 0.38],
      ['Milton Friedman', 'A liberdade econômica é uma condição necessária para a liberdade individual.', 3, 0, 0, 2, 'qr44yp8ygyzo9', 6, 3, 3, '', 'A-', 'financas', 'A liberdade econômica é um requisito essencial para a liberdade política.', 0.71],
      ['Marco Aurélio', 'O obstáculo à ação faz avançar a ação. O que está no caminho torna-se o caminho.', 4, 0, 0, 2, 'qzdk0d01a8m1lj', 5, 3, 3, 'Meditações, Livro V', 'A', 'dificeis', 'A pedra que obstrui o caminho torna-se o caminho.', 0.55],
      ['Baruch Spinoza', 'A paz interior é o maior dos bens.', 2, 0, 0, 2, 'qrodyu419wuvey', 7, 3, 3, '', 'A-', 'filosofos', '', 0.35],
      ['Jonathan Haidt', 'A razão muitas vezes funciona como uma justificativa para aquilo que já acreditamos.', 2, 0, 0, 2, 'q9u80p015cmprh', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.33],
      ['Carlos Drummond de Andrade', 'Tinha uma pedra no meio do caminho, no meio do caminho tinha uma pedra.', 4, 0, 0, 2, 'q1fgje8086ym2r', 5, 3, 3, 'No Meio do Caminho', 'A', 'reflexao', 'Tinha uma pedra no meio do caminho. Nunca me esquecerei desse acontecimento na vida de minhas retinas tão fatigadas.', 0.61],
      ['Krishna', 'Aquele que conquistou a mente alcançou um amigo; aquele que não a conquistou possui um inimigo.', 3, 0, 0, 2, 'q920s9sgwp2bu', 6, 3, 3, 'Bhagavad Gita, 6.6', 'A', 'fe', 'Aquele que controla a mente encontra um amigo; aquele que não controla encontra um inimigo.', 0.75],
      ['Søren Kierkegaard', 'A vida só pode ser compreendida olhando para trás, mas deve ser vivida olhando para frente.', 3, 0, 0, 2, 'qnmag181jom1dt', 6, 3, 3, 'Diários, 1843', 'A', 'reflexao', 'A vida só pode ser compreendida olhando para trás, mas só pode ser vivida olhando para a frente.', 0.95],
      ['Wolfgang Amadeus Mozart', 'Nem uma inteligência elevada nem a imaginação fazem o gênio. Amor, amor, amor: essa é a alma do gênio.', 4, 0, 0, 2, 'f283noubtxj', 5, 3, 3, 'Atribuído a Mozart em coletâneas, sem localização em sua correspondência', 'A-', 'amor', 'Nem um temperamento vivaz nem uma mente aguçada fazem o gênio: o amor é a alma do gênio.', 0.57],
      [
        'Winston Churchill',
        'A política é quase tão excitante quanto a guerra e quase tão perigosa. Na guerra você só pode ser morto uma vez, na política muitas vezes.',
        3,
        0,
        0,
        2,
        'q84nys8cd6u5u',
        6,
        3,
        3,
        'Discurso registrado',
        'A',
        'politica',
        'A política é quase tão excitante como a guerra e não menos perigosa. Na guerra a pessoa só pode ser morta uma vez, mas na política diversas vezes.',
        0.81
      ],
      ['Michel de Montaigne', 'Minha vida foi cheia de terríveis desgraças, a maioria das quais jamais aconteceu.', 3, 0, 0, 2, 'qr8phpjz5e2sk', 6, 3, 3, 'Ensaios', 'A', 'reflexao', 'Minha vida foi cheia de terríveis infortúnios, a maioria dos quais nunca aconteceu.', 0.8],
      ['Meister Eckhart', 'Se a única oração que você fizer na vida for obrigado, isso já será suficiente.', 3, 0, 0, 2, 'f281ijpxikb', 6, 3, 3, 'Atribuído a Eckhart em coletâneas, sem localização em seus sermões', 'A-', 'gratidao', 'Se a única oração que você fizer em toda a vida for obrigado, já será suficiente.', 0.91],
      ['Krishna', 'Aquele que permanece igual diante da alegria e da tristeza é um sábio.', 3, 0, 0, 2, 'q9u5dhc1sckvj1', 6, 3, 3, 'Bhagavad Gita', 'A-', 'fe', 'Aquele que permanece igual diante do prazer e da dor é considerado sábio.', 0.77],
      ['Friedrich Nietzsche', 'Quem luta com monstros deve cuidar para não se tornar um monstro.', 3, 0, 0, 2, 'q108g8vott2dnc', 6, 3, 3, 'Além do Bem e do Mal, 146', 'A', 'filosofos', 'Quem luta contra monstros deve cuidar para não se tornar um monstro.', 0.95],
      ['Henry David Thoreau', 'A vida não é esperar que a tempestade passe, mas aprender a viver sob a chuva.', 2, 0, 0, 2, 'q1wsgock1jq8wig', 7, 3, 3, '', 'A-', 'vida', '', 0.33],
      ['Charles Dickens', 'Era a época da luz; era a época da escuridão.', 3, 0, 0, 2, 'qaepdegiukt5u', 6, 3, 3, 'Romance de Charles Dickens', 'A-', 'dificeis', 'Era a época da crença, era a época da incredulidade.', 0.72],
      ['Kahlil Gibran', 'Eles são filhos e filhas da ânsia da Vida por si mesma.', 4, 0, 0, 2, 'q1l7lzv816xhfdy', 5, 3, 3, 'O Profeta, "Dos Filhos"', 'A', 'familia', 'Vossos filhos não são vossos filhos. São filhos e filhas da vida ansiando por si mesma.', 0.64],
      ['William Shakespeare', 'O amor não é amor se muda quando encontra mudança.', 3, 0, 0, 2, 'q1hftxy056zezw', 6, 3, 3, 'Soneto 116', 'A', 'amor', 'O amor não é amor se muda quando encontra mudanças.', 0.99],
      ['Baruch Spinoza', 'A liberdade é compreender a necessidade.', 4, 0, 0, 2, 'qtd3elf1yp1jnr', 5, 3, 3, '', 'A-', 'filosofos', 'Não rir, não lamentar, não detestar, mas compreender.', 0.5],
      ['John Wooden', 'A melhor forma de liderar é pelo exemplo, não pela imposição.', 3, 0, 0, 2, 'qlv9ma01d1sgua', 6, 3, 3, 'Wooden on Leadership', 'A-', 'lideranca', 'A melhor maneira de liderar é pelo exemplo, não pela autoridade.', 0.77],
      ['David Hume', 'A gratidão é um sentimento agradável porque nasce da consciência de ter recebido um benefício.', 2, 0, 0, 2, 'q1ubca45125maoz', 7, 3, 3, '', 'A-', 'gratidao', '', 0.34],
      ['São Jerônimo', 'Ignorar as Escrituras é ignorar Cristo.', 3, 0, 0, 2, 'f26252dara', 6, 3, 3, 'Comentário sobre Isaías (408), prólogo', 'A', 'fe', 'Ignorar as Escrituras é ignorar a Cristo.', 0.99],
      ['Ruth Bader Ginsburg', 'Lute pelas coisas que você se importa, mas faça isso de uma maneira que leve outras pessoas a se juntarem a você.', 3, 0, 0, 2, 'q12idrqo1o4hf93', 6, 3, 3, 'Entrevista registrada', 'A', 'empoderamento', 'Lute pelas coisas que lhe são caras, mas faça isso de um jeito que leve os outros a se juntarem a você.', 0.79],
      ['Michael Porter', 'Não existe estratégia sem escolha.', 4, 0, 0, 2, 'qa55ixc1seps9t', 5, 3, 3, '', 'A-', 'empreendedorismo', 'A essência da estratégia é escolher o que não fazer.', 0.56],
      ['Erich Fromm', 'A felicidade é a aceitação corajosa da vida.', 2, 0, 0, 2, 'q1fc80rnfzy61j', 7, 3, 3, '', 'A-', 'autorreconhecimento', '', 0.34],
      ['Albert Bandura', 'A maior parte do comportamento humano é aprendida pela observação através de modelos.', 3, 0, 0, 2, 'qsbp980q7ly7m', 6, 3, 3, '', 'A-', 'manipulacao', 'Felizmente, a maior parte do comportamento humano é aprendida pela observação, por meio da modelação.', 0.81],
      ['Epicteto', 'Não são as coisas que inquietam os homens, mas suas opiniões sobre elas.', 4, 0, 0, 2, 'q1e0msfs14mexo', 5, 3, 3, 'Enquirídio, V', 'A', 'motivacao', 'Não são as coisas que perturbam os homens, mas os julgamentos que eles fazem sobre as coisas.', 0.66],
      ['Epicteto', 'Não busque que os acontecimentos aconteçam como você quer, mas queira que aconteçam como acontecem.', 4, 0, 0, 2, 'q1819cm4lrws6o', 5, 3, 3, 'Enquirídio, VIII', 'A', 'filosofos', 'Não procure que as coisas aconteçam como você deseja; deseje que elas aconteçam como acontecem, e você terá uma vida tranquila.', 0.6],
      ['Buda', 'O ódio nunca termina pelo ódio; o ódio termina apenas pelo amor.', 4, 0, 0, 2, 'q6uwded333sw0', 5, 3, 3, 'Dhammapada, 5', 'A', 'fe', 'O ódio nunca cessa pelo ódio; o ódio cessa pelo amor. Esta é uma lei eterna.', 0.64],
      ['Adam Smith', 'A gratidão é uma das emoções que mais contribuem para a harmonia da sociedade.', 2, 0, 0, 2, 'q16yppwk1wpu21z', 7, 3, 3, '', 'A-', 'gratidao', '', 0.31],
      ['Erich Fromm', 'O amor é a única resposta e a única esperança.', 4, 0, 0, 2, 'q1pfetm85fxm9i', 5, 3, 3, '', 'A-', 'amor', 'O amor é a única resposta sã e satisfatória para o problema da existência humana.', 0.57],
      ['Henry David Thoreau', 'Muitos sabem ganhar dinheiro, mas poucos sabem gastá-lo.', 2, 0, 0, 2, 'q522ypg1ckryy2', 7, 3, 3, '', 'A-', 'financas', '', 0.43],
      ['Winston Churchill', 'A democracia é a pior forma de governo, exceto todas as outras que já foram experimentadas.', 3, 0, 0, 2, 'qm281k1nlygew', 6, 3, 3, 'Discurso registrado', 'A', 'politica', 'A democracia é a pior forma de governo, com exceção de todas as outras já tentadas.', 0.83],
      ['Simon Sinek', 'Clientes nunca amarão uma empresa até que os funcionários a amem primeiro.', 2, 0, 0, 2, 'q1ycoslo19wn4m7', 7, 3, 3, '', 'A-', 'negocios', '', 0.38],
      ['Antoine de Saint-Exupéry', 'Aqueles que passam por nós não vão sós. Deixam um pouco de si, levam um pouco de nós.', 2, 0, 0, 2, 'qu77qly1yeng7w', 7, 3, 3, '', 'A-', 'conforto', '', 0.24],
      ['Carl Sagan', 'Somos feitos de poeira das estrelas.', 3, 0, 0, 2, 'q10pq9d9148dxeo', 6, 3, 3, 'Cosmos', 'A', 'vida', 'Somos feitos de poeira de estrelas.', 0.95],
      ['Max Weber', 'Há três tipos puros de dominação legítima: racional, tradicional e carismática.', 2, 0, 0, 2, 'qipxvj41vnuzi0', 7, 3, 3, '', 'A-', 'politica', '', 0.37],
      ['Epicteto', 'Não busques que os acontecimentos aconteçam como queres; deseja-os como acontecem, e tua vida será serena.', 4, 0, 0, 2, 'qgo50qj17lpzha', 5, 3, 3, 'Enquirídio, VIII', 'A', 'motivacao', 'Não procure que as coisas aconteçam como você deseja; deseje que elas aconteçam como acontecem, e você terá uma vida tranquila.', 0.61],
      ['Cleantes', 'Conduze-me, ó Zeus, e tu, Destino, para onde quer que me tenhais designado.', 3, 0, 0, 2, 'f26224d4nq', 6, 3, 3, 'Hino a Zeus, versos finais', 'A', 'fe', 'Conduz-me, ó Zeus, e tu, Destino, para onde quer que tenhais decretado que eu vá: seguirei sem hesitar.', 0.74],
      ['Antoine de Saint-Exupéry', 'O amor é a única coisa que cresce quando se reparte.', 2, 0, 0, 2, 'q1l4vst31l8su2z', 7, 3, 3, '', 'A-', 'amor', '', 0.4],
      ['Warren Buffett', 'A melhor coisa que pode acontecer a um investidor é comprar uma excelente empresa a um preço justo.', 2, 0, 0, 2, 'qssmc4tze2n8z', 7, 3, 3, 'Cartas aos acionistas da Berkshire Hathaway', 'A-', 'financas', '', 0.47],
      ['Nassim Nicholas Taleb', 'Não se deve medir a inteligência pela capacidade de prever, mas pela capacidade de lidar com a incerteza.', 2, 0, 0, 2, 'q6su9k4bk24dn', 7, 3, 3, '', 'A-', 'financas', '', 0.35],
      ['Thomas Hobbes', 'A autoridade do soberano é necessária para evitar o caos.', 2, 0, 0, 2, 'qhhceboe1lmey', 7, 3, 3, '', 'A-', 'politica', '', 0.38],
      ['David Hume', 'A gratidão é uma das paixões mais suaves e agradáveis da natureza humana.', 2, 0, 0, 2, 'q4l8o8s43uvr', 7, 3, 3, '', 'A-', 'gratidao', '', 0.46],
      ['Martin Seligman', 'A gratidão é uma força que amplia a felicidade e fortalece os relacionamentos.', 2, 0, 0, 2, 'q1tvs3qkue39d3', 7, 3, 3, '', 'A-', 'gratidao', '', 0.42],
      ['Dale Carnegie', 'A gratidão é uma das formas mais simples de transformar relações humanas.', 2, 0, 0, 2, 'q1trj86sdaqzh9', 7, 3, 3, '', 'A-', 'gratidao', '', 0.45],
      ['Mário Quintana', 'Eles passarão, eu passarinho.', 4, 0, 0, 2, 'f28h6wxq59', 5, 3, 3, 'Poeminho do Contra, em Caderno H (1973)', 'A', 'reflexao', 'Todos esses que aí estão atravancando o meu caminho, eles passarão. Eu passarinho!', 0.53],
      ['Martin Seligman', 'A gratidão é uma das chaves para uma vida mais plena.', 2, 0, 0, 2, 'q1if9fq413zgr87', 7, 3, 3, '', 'A-', 'gratidao', '', 0.29],
      ['Marshall McLuhan', 'Primeiro moldamos nossas ferramentas, depois elas nos moldam.', 4, 0, 0, 2, 'q6o7vnjmysaxk', 5, 3, 3, 'Os Meios de Comunicação como Extensões do Homem', 'A-', 'manipulacao', 'Formamos nossas ferramentas e depois nossas ferramentas nos formam.', 0.69],
      ['Pelé', 'Sucesso não é acidente. É trabalho duro, perseverança, aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que se está fazendo.', 3, 0, 0, 2, 'f283uwixazd', 6, 3, 3, 'Entrevista registrada', 'A', 'motivacao', 'O sucesso não é acidente: é trabalho duro, perseverança, estudo, sacrifício e, acima de tudo, amor pelo que se está fazendo.', 0.94],
      ['José Ortega y Gasset', 'O homem não é uma coisa pronta, mas um ser em constante construção.', 2, 0, 0, 2, 'q1350yys19d0qkp', 7, 3, 3, '', 'A-', 'filosofos', '', 0.41],
      ['Philip Fisher', 'O mercado está sempre cheio de pessoas que sabem o preço, mas poucas sabem o valor.', 3, 0, 0, 2, 'q17oja3y1lpjr3i', 6, 3, 3, 'Ações Comuns, Lucros Extraordinários', 'A-', 'financas', 'O mercado de ações está cheio de pessoas que sabem o preço de tudo e o valor de nada.', 0.73],
      ['Abraham Maslow', 'O que um homem pode ser, ele deve ser.', 3, 0, 0, 2, 'q1a8slk1etaxcy', 6, 3, 3, 'Motivation and Personality', 'A', 'autorreconhecimento', 'O que um homem pode ser, ele precisa ser.', 0.85],
      ['Amartya Sen', 'A fome não é causada apenas pela falta de alimentos, mas também pela falta de direitos e oportunidades.', 2, 0, 0, 2, 'qhn446wuafaqn', 7, 3, 3, '', 'A-', 'politica', '', 0.3],
      ['Jonathan Haidt', 'As pessoas frequentemente justificam racionalmente decisões que foram tomadas intuitivamente.', 2, 0, 0, 2, 'qsfhlv0a8v1mz', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.28],
      ['Lao Tsé', 'Quem sabe que possui o suficiente é verdadeiramente rico.', 4, 0, 0, 2, 'q10s3da2xufv1u', 5, 3, 3, 'Tao Te Ching, 33 e 46', 'A', 'fe', 'Quem sabe que o suficiente é suficiente sempre terá o suficiente.', 0.61],
      ['Epicteto', 'O que impede o homem de agir não são as coisas, mas os julgamentos que ele faz sobre elas.', 4, 0, 0, 2, 'qx00s41xuzcla', 5, 3, 3, 'Enquirídio, V', 'A', 'dificeis', 'Não são as coisas que perturbam os homens, mas os julgamentos que eles fazem sobre as coisas.', 0.63],
      ['Michael Porter', 'A vantagem competitiva não vem de ser melhor em tudo, mas de escolher onde ser diferente.', 2, 0, 0, 2, 'q1nyuvvwg0tebi', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.47],
      ['Aristóteles', 'Há três meios de persuasão: caráter do orador, emoção do público e argumento.', 4, 0, 0, 2, 'q116z5bl1vqgldy', 5, 3, 3, 'Retórica, I, 2', 'A', 'manipulacao', 'A persuasão é obtida através do caráter do orador, das emoções dos ouvintes e da demonstração do argumento.', 0.56],
      ['Edward Bernays', 'A opinião pública é o resultado de forças organizadas que influenciam a forma como as pessoas interpretam os acontecimentos.', 2, 0, 0, 2, 'q14kgcjs1u1hyuo', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.3],
      ['Viktor Frankl', 'Tudo pode ser tirado de uma pessoa, exceto uma coisa: a liberdade de escolher sua atitude diante de qualquer circunstância da vida.', 4, 0, 0, 2, 'qr40xs44cd6ii', 5, 3, 3, 'Em Busca de Sentido', 'A-', 'dificeis', 'A última das liberdades humanas é escolher a atitude diante de qualquer circunstância.', 0.69],
      ['Kahlil Gibran', 'Amai-vos, mas não façais do amor um vínculo.', 3, 0, 0, 2, 'qhclgnwbqvewl', 6, 3, 3, 'O Profeta, "Do Casamento"', 'A', 'familia', 'Amai-vos um ao outro, mas não façais do amor um grilhão.', 0.78],
      ['Marco Aurélio', 'Não ajas como se fosses viver dez mil anos.', 4, 0, 0, 2, 'q2hrd9c1nbgh54', 5, 3, 3, 'Meditações, IV, 17', 'A', 'motivacao', 'Não aja como se você tivesse dez mil anos para viver.', 0.68],
      ['Adam Smith', 'A gratidão é uma das emoções mais nobres porque reconhece que não vivemos sozinhos.', 2, 0, 0, 2, 'q1tuujspb2etqc', 7, 3, 3, '', 'A-', 'gratidao', '', 0.32],
      ['Buda', 'Se um homem fala ou age com uma mente pura, a felicidade o segue como uma sombra que nunca o abandona.', 4, 0, 0, 2, 'q6gsel11hp277g', 5, 3, 3, 'Dhammapada, 1–2', 'A', 'fe', 'Se um homem fala ou age com uma mente impura, o sofrimento o segue como a roda segue o pé do animal que puxa a carroça.', 0.65],
      ['Michael Porter', 'A inovação é um dos principais motores da competição.', 2, 0, 0, 2, 'qgvq9esf17g5y', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.35],
      ['J. R. R. Tolkien', 'As raízes profundas nunca duvidam que a primavera chegará.', 2, 0, 0, 2, 'qvcbp6o3joobq', 7, 3, 3, '', 'A-', 'dificeis', '', 0.27],
      ['Friedrich Hayek', 'A liberdade econômica é uma condição indispensável para a liberdade política.', 2, 0, 0, 2, 'qtbbrx81xoqbm5', 7, 3, 3, '', 'A-', 'politica', '', 0.39],
      ['Albert Camus', 'No meio do inverno, descobri enfim que havia em mim um verão invencível.', 3, 0, 0, 2, 'q1f02na81ra899e', 6, 3, 3, 'O Verão', 'A', 'reflexao', 'No meio do inverno aprendi enfim que havia em mim um verão invencível.', 0.9],
      ['Dale Carnegie', 'Desenvolva o hábito de agradecer pelo que há de bom em sua vida.', 2, 0, 0, 2, 'q16of7msnciert', 7, 3, 3, '', 'A-', 'gratidao', '', 0.36],
      ['Rumi', 'Ontem eu era inteligente e queria mudar o mundo; hoje sou sábio e quero mudar a mim mesmo.', 3, 0, 0, 2, 'q1vwfk2o9q0jpo', 6, 3, 3, '', 'A-', 'fe', 'Ontem eu era esperto e queria mudar o mundo. Hoje sou sábio e estou mudando a mim mesmo.', 0.8],
      ['Friedrich Nietzsche', 'Quem tem um porquê para viver pode suportar quase qualquer como.', 3, 0, 0, 2, 'q1u7cfrs143md23', 6, 3, 3, 'Crepúsculo dos Ídolos, Máximas e Flechas, 12', 'A', 'vida', 'Quem tem um porquê para viver suporta quase qualquer como.', 0.95],
      ['Marco Aurélio', 'Não viva como se tivesse dez mil anos pela frente.', 3, 0, 0, 2, 'q13ncyr0hhqmnn', 6, 3, 3, 'Meditações, Livro IV', 'A', 'vida', 'Não aja como se você tivesse dez mil anos para viver.', 0.73],
      ['Pierre Bourdieu', 'A violência simbólica é uma forma de imposição de significados reconhecidos como legítimos.', 2, 0, 0, 2, 'q1wap40910kgbwk', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.41],
      ['Nicolau Maquiavel', 'Os homens julgam mais pelos olhos do que pelas mãos, pois todos podem ver, mas poucos podem sentir.', 3, 0, 0, 2, 'q8rd5x41mxr0hm', 6, 3, 3, 'O Príncipe, XVIII', 'A', 'manipulacao', 'Os homens julgam mais pelos olhos do que pelas mãos: todos veem o que você parece, poucos sentem o que você é.', 0.75],
      ['Jack Welch', 'A única vantagem de uma empresa é sua capacidade de aprender e se adaptar mais rapidamente que os concorrentes.', 2, 0, 0, 2, 'q1w1r26p1le2qb7', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.29],
      ['Stephen R. Covey', 'A liderança deve ser baseada em princípios, não em personalidade.', 3, 0, 0, 2, 'qpqtes1v4ians', 6, 3, 3, 'Os 7 Hábitos das Pessoas Altamente Eficazes', 'A-', 'lideranca', 'A liderança baseada em princípios começa com a liderança de si mesmo.', 0.7],
      ['Alcorão 8:46', 'E sejam firmes, pois Deus está com os perseverantes.', 3, 0, 0, 2, 'q1605ykk8ku69k', 6, 3, 3, 'Alcorão 8:46 · Alcorão — tradução de Samir El Hayek (edição brasileira de referência)', 'B', 'fe', 'Sede pacientes, pois Deus está com os pacientes.', 0.72],
      ['Albert Bandura', 'A crença na própria capacidade de agir influencia profundamente aquilo que as pessoas fazem.', 2, 0, 0, 2, 'q7p9s8spr4nz', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.37],
      ['Robert Kiyosaki', 'Os ricos compram ativos. Os pobres e a classe média compram passivos que pensam ser ativos.', 3, 0, 0, 2, 'qhl0mao1wd08fs', 6, 3, 3, 'Pai Rico, Pai Pobre', 'A-', 'financas', 'Os ricos compram ativos. Os pobres compram passivos achando que são ativos.', 0.79],
      ['Sun Tzu', 'Conheça o inimigo e conheça a si mesmo; combata cem batalhas sem nunca correr perigo.', 4, 0, 0, 2, 'q1ywv5ggg8kwcp', 5, 3, 3, 'A Arte da Guerra', 'A-', 'manipulacao', 'Conheça o inimigo e conheça a si mesmo, e você não precisará temer o resultado de cem batalhas.', 0.65],
      ['Marie Curie', 'Nada na vida deve ser temido, apenas compreendido. Agora é hora de compreender mais para temer menos.', 4, 0, 0, 2, 'q631jp8wuc4t8', 5, 3, 3, 'Citada por Ève Curie em Madame Curie', 'A', 'empoderamento', 'Na vida, nada deve ser temido, tudo deve ser compreendido.', 0.55],
      ['Michel de Montaigne', 'É melhor ter uma cabeça bem feita do que uma cabeça bem cheia.', 2, 0, 0, 2, 'q46lqo12zh6b8', 7, 3, 3, 'Ensaios, I, 26 ("Da Educação das Crianças")', 'A', 'educacao', '', 0.42],
      ['Krishna', 'Aquele que vê o mesmo Senhor presente em todos os seres realmente vê.', 4, 0, 0, 2, 'qs3i234epbtgs', 5, 3, 3, 'Bhagavad Gita, 13.28', 'A', 'fe', 'Aquele que vê a unidade em todas as coisas vê verdadeiramente.', 0.58],
      ['Erving Goffman', 'A interação cotidiana envolve controle de informações sobre nós mesmos.', 2, 0, 0, 2, 'q1fxgjsg1rgdbhq', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.3],
      ['Karl Marx', 'A história de todas as sociedades até hoje existentes é a história das lutas de classes.', 3, 0, 0, 2, 'qav232o1kloyto', 6, 3, 3, '', 'A', 'politica', 'A história de todas as sociedades até hoje existentes é a história da luta de classes.', 0.99],
      ['Warren Buffett', 'Invista em negócios que você entende.', 3, 0, 0, 2, 'q1fq3pd8wqgb3s', 6, 3, 3, 'Cartas aos acionistas da Berkshire Hathaway', 'A-', 'financas', 'Nunca invista em um negócio que você não consegue entender.', 0.75],
      ['Francis Bacon', 'A leitura torna o homem completo; a conversação torna-o ágil; e a escrita torna-o preciso.', 3, 0, 0, 2, 'q1vry24wzhv1up', 6, 3, 3, 'Ensaios (1625)', 'A', 'filosofos', 'A leitura torna o homem completo; a conversa, ágil; a escrita, exato.', 0.81],
      ['Nassim Nicholas Taleb', 'A história se repete porque a natureza humana não muda.', 2, 0, 0, 2, 'qvxi3j0j93f26', 7, 3, 3, '', 'A-', 'financas', '', 0.32],
      ['Lao Tsé', 'Quem conhece os outros é inteligente; quem conhece a si mesmo é sábio.', 3, 0, 0, 2, 'q14qq60cvn9f13', 6, 3, 3, 'Tao Te Ching, 33', 'A', 'fe', 'Conhecer os outros é inteligência; conhecer a si mesmo é verdadeira sabedoria.', 0.74],
      ['Erich Fromm', 'A tarefa do homem é criar a si mesmo e tornar-se aquilo que ele é capaz de ser.', 4, 0, 0, 2, 'q1c2i9ln7fd6cq', 5, 3, 3, '', 'A-', 'autorreconhecimento', 'A tarefa mais importante da vida humana é dar à luz a si mesmo, tornar-se aquilo que se é potencialmente.', 0.62],
      ['David Hume', 'A gratidão é uma virtude imediatamente agradável àquele que a pratica e útil aos outros.', 2, 0, 0, 2, 'q1o08v9kpo0pg2', 7, 3, 3, '', 'A-', 'gratidao', '', 0.29],
      ['Lao Tsé', 'Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado.', 4, 0, 0, 2, 'q1erdzm014h5gxp', 5, 3, 3, 'Tao Te Ching, 33', 'A', 'fe', 'Aquele que conquista os outros é forte; aquele que conquista a si mesmo é poderoso.', 0.69],
      ['Philip Fisher', 'O investidor deve procurar empresas com grande potencial de crescimento.', 4, 0, 0, 2, 'qkr7oql15dbqqo', 5, 3, 3, 'Ações Comuns, Lucros Extraordinários', 'A-', 'financas', 'O investidor deve comprar empresas, não ações.', 0.62],
      ['Jesus Cristo', 'Aquele que quiser ser o primeiro, seja o servo de todos.', 3, 0, 0, 2, 'q1ch5uw11ijio69', 6, 3, 3, 'Marcos 9:35 · Almeida Revista e Atualizada', 'A', 'fe', 'Se alguém quer ser o primeiro, será o último e servo de todos.', 0.72],
      ['Erich Fromm', 'O perigo do passado era que os homens se tornassem escravos. O perigo do futuro é que se tornem robôs.', 2, 0, 0, 2, 'q8a8ts4eak7mg', 7, 3, 3, '', 'A-', 'autorreconhecimento', '', 0.3],
      ['Gerda Lerner', 'A história das mulheres é a história da humanidade.', 4, 0, 0, 2, 'q1nzsuxsk13woz', 5, 3, 3, 'A Criação do Patriarcado', 'A-', 'empoderamento', 'A história das mulheres é a história de uma luta por reconhecimento, direitos e participação.', 0.64],
      ['Marco Aurélio', 'A vida de um homem é aquilo que seus pensamentos fazem dela.', 3, 0, 0, 2, 'q17xa7tcjsfd6d', 6, 3, 3, 'Meditações, Livro IV', 'A', 'vida', 'A nossa vida é aquilo que os nossos pensamentos fazem dela.', 0.77],
      ['Krishna', 'A paz vem para aquele que abandona todos os desejos e vive sem apego.', 3, 0, 0, 2, 'q5f2hne4bkevx', 6, 3, 3, 'Bhagavad Gita, 2.70–71', 'A', 'fe', 'A paz pertence àquele que abandonou todos os desejos e não vive preso ao ego.', 0.79],
      ['Elisabeth Kübler-Ross', 'As pessoas mais belas são aquelas que conheceram a derrota, o sofrimento e a luta, e encontraram um jeito de sair do fundo.', 3, 0, 0, 2, 'q16y9pxo1s899su', 6, 3, 3, 'Death: The Final Stage of Growth', 'A', 'conforto', 'As pessoas mais belas que conhecemos são aquelas que conheceram a derrota, o sofrimento e a luta.', 0.75],
      ['Ralph Waldo Emerson', 'Insista em si mesmo; nunca imite.', 3, 0, 0, 2, 'q1j6eddo4jqx5d', 6, 3, 3, 'Ensaios: Primeira Série, "Autoconfiança"', 'A', 'autorreconhecimento', 'Insiste em ti mesmo; nunca imites.', 0.91],
      ['Helen Keller', 'A fé é uma força que pode transformar o mundo.', 2, 0, 0, 2, 'q1e6sn41djw16d', 7, 3, 3, '', 'A-', 'dificeis', '', 0.43],
      ['Thomas Hobbes', 'A finalidade do Estado é garantir a segurança dos indivíduos.', 2, 0, 0, 2, 'q24n3b02lnbbm', 7, 3, 3, '', 'A-', 'politica', '', 0.33],
      ['Dale Carnegie', 'A maior habilidade na liderança é desenvolver uma extraordinária capacidade de ouvir.', 2, 0, 0, 2, 'qsrpmy0gu9uo4', 7, 3, 3, '', 'A-', 'lideranca', '', 0.44],
      ['Michael Porter', 'Empresas bem-sucedidas criam uma proposta de valor única.', 2, 0, 0, 2, 'q17ec5y4a670f1', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.36],
      ['Rumi', 'A ferida é o lugar por onde a luz entra em você.', 2, 0, 0, 2, 'q1k6zxuw8l4i91', 7, 3, 3, '', 'A-', 'fe', '', 0.3],
      ['Krishna', 'Aquele que abandona o egoísmo e o apego encontra a paz.', 4, 0, 0, 2, 'q1gnnmbefdrreh', 5, 3, 3, 'Bhagavad Gita', 'A-', 'fe', 'Aquele que abandona o apego aos frutos da ação alcança a paz.', 0.65],
      ['William Shakespeare', 'As adversidades têm usos doces.', 4, 0, 0, 2, 'qo0l1jkuvuohz', 5, 3, 3, 'Como Gostais, II, 1', 'A', 'motivacao', 'As doçuras da adversidade são doces de descobrir.', 0.6],
      ['Sêneca', 'Enquanto adiamos, a vida passa.', 3, 0, 0, 2, 'q1e8cqur180cfl4', 6, 3, 3, 'Cartas a Lucílio, I', 'A', 'vida', 'Enquanto você adiar, a vida passa.', 0.85],
      ['Florbela Espanca', 'Eu quero amar, amar perdidamente! Amar só por amar: aqui, além.', 3, 0, 0, 2, 'qw2qtgsznydqd', 6, 3, 3, 'Amar!', 'A', 'amor', 'Eu quero amar, amar perdidamente!', 0.72],
      ['David Hume', 'A gratidão é uma das mais nobres disposições do espírito humano.', 2, 0, 0, 2, 'qin21381yeirlg', 7, 3, 3, '', 'A-', 'gratidao', '', 0.49],
      ['Carl Rogers', 'O curioso paradoxo é que, quando me aceito como sou, então posso mudar.', 3, 0, 0, 2, 'qgah274lv71w', 6, 3, 3, 'Tornar-se Pessoa', 'A-', 'autorreconhecimento', 'A curiosa contradição é que, quando me aceito como sou, então posso mudar.', 0.89],
      ['Adam Smith', 'A amizade é uma das formas mais elevadas de simpatia humana.', 2, 0, 0, 2, 'qapgrkjhxnr7x', 7, 3, 3, '', 'A-', 'amizade', '', 0.26],
      ['Amartya Sen', 'A democracia tem valor por si mesma, mas também por seus efeitos na proteção das pessoas.', 2, 0, 0, 2, 'qausr6olkpx5g', 7, 3, 3, '', 'A-', 'politica', '', 0.32],
      ['Thomas Hobbes', 'A gratidão é uma obrigação moral para aquele que recebeu um benefício.', 2, 0, 0, 2, 'q1aq6e7p1gduvyd', 7, 3, 3, '', 'A-', 'gratidao', '', 0.31],
      ['Sócrates', 'A vida não examinada não vale a pena ser vivida.', 3, 0, 0, 2, 'q6kxcik80x0qa', 6, 3, 3, 'Platão, Apologia de Sócrates', 'A', 'vida', 'Uma vida não examinada não merece ser vivida.', 0.83],
      ['Carl Sagan', 'Em algum lugar, algo incrível está esperando para ser descoberto.', 3, 0, 0, 2, 'f281wg4up09', 6, 3, 3, 'Atribuído a Sagan em coletâneas, sem localização em sua obra', 'A-', 'educacao', 'Em algum lugar, algo incrível está esperando para ser conhecido.', 0.9],
      ['Norberto Bobbio', 'O problema da democracia não é apenas quem governa, mas como governa.', 2, 0, 0, 2, 'q1qk1pz883aysn', 7, 3, 3, '', 'A-', 'politica', '', 0.42],
      ['Sun Tzu', 'Aquele que conhece o inimigo e conhece a si mesmo não ficará em perigo em cem batalhas.', 3, 0, 0, 2, 'qeroirc12vkdn', 6, 3, 3, 'A Arte da Guerra', 'A-', 'lideranca', 'Conheça o inimigo e conheça a si mesmo, e você não precisará temer o resultado de cem batalhas.', 0.73],
      ['Epicuro', 'Não estrague o que você tem desejando o que não tem; lembre-se de que o que você tem hoje já esteve entre as coisas que você só esperava.', 4, 0, 0, 2, 'qm6f5jf1ywu6fa', 5, 3, 3, 'Fragmentos Vaticanos, 35', 'A', 'gratidao', 'Não estrague aquilo que você tem desejando aquilo que não tem; lembre-se de que aquilo que você possui agora já foi um dia algo que você desejou.', 0.7],
      ['Dale Carnegie', 'Um líder eficaz inspira confiança porque suas ações correspondem às suas palavras.', 2, 0, 0, 2, 'q1a1zzkdrqfif3', 7, 3, 3, '', 'A-', 'lideranca', '', 0.37],
      ['Mahatma Gandhi', 'O amor é a força mais humilde, mas a mais poderosa que o mundo conhece.', 3, 0, 0, 2, 'q1l4jgrs1irr6d7', 6, 3, 3, 'Autobiografia e Collected Works of Mahatma Gandhi', 'A-', 'amor', 'O amor é a força mais humilde, mas a mais poderosa de que dispõe o ser humano.', 0.8],
      ['Jean Piaget', 'O objetivo principal da educação é criar pessoas capazes de fazer coisas novas, e não repetir o que outras gerações fizeram.', 3, 0, 0, 2, 'qxpb95o1lhz0o0', 6, 3, 3, 'Para Onde Vai a Educação?', 'A', 'educacao', 'O objetivo principal da educação é criar pessoas capazes de fazer coisas novas, e não simplesmente repetir o que outras gerações fizeram.', 0.94],
      ['Jack Welch', 'Aqueles que lideram devem estar dispostos a enfrentar a realidade, por mais difícil que seja.', 2, 0, 0, 2, 'q16s81do17p5qs5', 7, 3, 3, '', 'A-', 'lideranca', '', 0.39],
      ['Adam Smith', 'A ingratidão é uma das maiores violações da justiça e da humanidade.', 2, 0, 0, 2, 'qtucufsknu7hf', 7, 3, 3, '', 'A-', 'gratidao', '', 0.28],
      ['Dale Carnegie', 'A única maneira de vencer uma discussão é evitando-a.', 3, 0, 0, 2, 'q16l454c14d0usi', 6, 3, 3, 'Como Fazer Amigos e Influenciar Pessoas', 'A', 'manipulacao', 'A única maneira de obter o melhor de uma discussão é evitá-la.', 0.78],
      ['John D. Rockefeller', 'Não tenha medo de abrir mão do bom para ir atrás do ótimo.', 3, 0, 0, 2, 'f2856elj773', 6, 3, 3, 'Atribuído a Rockefeller em coletâneas, sem registro primário localizado', 'A-', 'negocios', 'Não tenha medo de desistir do bom para perseguir o ótimo.', 0.73],
      ['Charlie Munger', 'Você não precisa ser brilhante; apenas precisa evitar erros estúpidos.', 4, 0, 0, 2, 'qgrj99w1qvrdxd', 5, 3, 3, 'Poor Charlie’s Almanack e reuniões da Berkshire', 'A-', 'financas', 'Você não precisa ser um gênio para investir bem; precisa evitar grandes erros.', 0.63],
      ['Epicuro', 'A vida feliz é impossível sem uma vida sábia, honesta e justa.', 3, 0, 0, 2, 'q115r4bkmv677t', 6, 3, 3, 'Máximas Principais, V', 'A', 'felicidade', 'A vida feliz é impossível sem a sabedoria, a honestidade e a justiça.', 0.83],
      ['Cícero', 'Tal amizade aumenta a prosperidade e alivia o peso da adversidade, dividindo-o e partilhando-o.', 4, 0, 0, 2, 'qoe9swxzkc83', 5, 3, 3, 'Sobre a Amizade (Laelius), VI', 'A', 'amizade', 'A amizade torna a prosperidade mais brilhante e alivia a adversidade compartilhando seus pesos.', 0.69],
      ['Morgan Housel', 'A independência financeira é ter controle sobre seu tempo.', 4, 0, 0, 2, 'q10cnvhw8i2ljk', 5, 3, 3, 'A Psicologia Financeira', 'A-', 'financas', 'A independência financeira é a capacidade de fazer aquilo que você quer com seu tempo.', 0.62],
      ['Henry David Thoreau', 'A riqueza é a capacidade de experimentar plenamente a vida.', 2, 0, 0, 2, 'q1n8vmq41vdmdl7', 7, 3, 3, '', 'A-', 'conforto', '', 0.38],
      ['Carl Sagan', 'Diante da imensidão do universo, somos pequenos, mas temos a capacidade de compreender.', 2, 0, 0, 2, 'qmlj7jro76e2p', 7, 3, 3, '', 'A-', 'motivacao', '', 0.34],
      ['Jim Collins', 'A disciplina é fazer o que precisa ser feito, mesmo quando não se quer fazer.', 2, 0, 0, 2, 'qs2oc0ifzk2mj', 7, 3, 3, '', 'A-', 'lideranca', '', 0.37],
      ['Benjamin Graham', 'A essência da gestão de investimentos é a gestão dos riscos, não a gestão dos retornos.', 2, 0, 0, 2, 'qrw4tt1eya85k', 7, 3, 3, '', 'A-', 'financas', '', 0.44],
      ['Ray Dalio', 'A dor + reflexão = progresso.', 3, 0, 0, 2, 'q14j52c01e3kyqq', 6, 3, 3, 'Princípios', 'A-', 'financas', 'A dor mais a reflexão é igual a progresso.', 0.78],
      ['Buda', 'Melhor do que mil versos sem significado é uma única frase que traz paz ao ouvinte.', 3, 0, 0, 2, 'q1netma48t22zb', 6, 3, 3, 'Dhammapada, 100–101', 'A', 'fe', 'Melhor do que mil palavras sem sentido é uma palavra que traz paz ao ouvinte.', 0.78],
      ['Marco Aurélio', 'O universo é mudança; a vida é opinião.', 3, 0, 0, 2, 'qg5dr7x1ub4npx', 6, 3, 3, 'Meditações, IV, 3', 'A', 'motivacao', 'O universo é transformação: a vida é opinião.', 0.82],
      ['Marco Aurélio', 'O obstáculo à ação promove a ação. O que fica no caminho torna-se o caminho.', 4, 0, 0, 2, 'qd0nbvdnfv5j0', 5, 3, 3, 'Meditações, V, 20', 'A', 'dificeis', 'A pedra que obstrui o caminho torna-se o caminho.', 0.59],
      ['José Ortega y Gasset', 'A vida nos é dada, mas não nos é dada pronta.', 2, 0, 0, 2, 'q1j4xi2vtohu8m', 7, 3, 3, '', 'A-', 'filosofos', '', 0.34],
      ['Maria Montessori', 'A verdadeira educação é aquela que vai ao encontro da criança para realizar a sua libertação.', 2, 0, 0, 2, 'q1pavxd8187udzu', 7, 3, 3, '', 'A-', 'educacao', '', 0.38],
      ['Galileu Galilei', 'Não se pode ensinar nada a um homem; só se pode ajudá-lo a descobrir dentro de si mesmo.', 3, 0, 0, 2, 'f281um0wra2', 6, 3, 3, 'Atribuído a Galileu em coletâneas, sem localização em sua obra', 'A-', 'educacao', 'Não se pode ensinar nada a um homem; só se pode ajudá-lo a descobrir por si mesmo.', 0.93],
      ['Bertrand Russell', 'O problema do mundo é que os tolos e fanáticos são sempre tão certos de si, e os sábios, tão cheios de dúvidas.', 3, 0, 0, 2, 'qp0qmchvu7ky', 6, 3, 3, 'The Triumph of Stupidity', 'A', 'filosofos', 'O problema do mundo é que os tolos e fanáticos são sempre tão certos de si, e as pessoas sábias tão cheias de dúvidas.', 0.94],
      ['David Hume', 'A sabedoria consiste em propor perguntas adequadas e buscar respostas honestas.', 2, 0, 0, 2, 'q1qyyub86ak007', 7, 3, 3, '', 'A-', 'filosofos', '', 0.46],
      ['Max Weber', 'A política é a luta pela distribuição de poder.', 4, 0, 0, 2, 'q30korc11k4r1d', 5, 3, 3, '', 'A-', 'politica', 'Quem faz política aspira ao poder.', 0.55],
      ['Dale Carnegie', 'A habilidade de lidar com pessoas é uma mercadoria tão comprável quanto açúcar ou café.', 2, 0, 0, 2, 'qumyri81g0hkjl', 7, 3, 3, '', 'A-', 'lideranca', '', 0.46],
      ['Reid Hoffman', 'Se você não tem vergonha da primeira versão do seu produto, lançou tarde demais.', 3, 0, 0, 2, 'f312m15v30d6', 6, 3, 3, 'Formulação difundida por Hoffman em palestras e entrevistas', 'A-', 'empreendedorismo', 'Se você não tem vergonha da primeira versão do seu produto, você lançou tarde demais.', 0.97],
      ['Maria Montessori', 'A maior das conquistas do professor é poder dizer: as crianças estão trabalhando como se eu não existisse.', 3, 0, 0, 2, 'q1as68k90vs6z', 6, 3, 3, 'A Mente Absorvente', 'A', 'educacao', 'A maior mostra de sucesso de um professor é poder dizer: as crianças estão trabalhando como se eu não existisse.', 0.88],
      ['Simon Sinek', 'A liderança é uma escolha diária de servir um propósito maior do que o próprio ego.', 2, 0, 0, 2, 'q5las50k27rak', 7, 3, 3, '', 'A-', 'lideranca', '', 0.34],
      ['Eclesiastes 7:8', 'Melhor é o fim de uma coisa do que o seu começo; melhor é o paciente do que o arrogante.', 3, 0, 0, 2, 'q1vfk2xw1oqivxj', 6, 3, 3, 'Eclesiastes 7:8 · Bíblia — Almeida Revista e Atualizada', 'B', 'fe', 'Melhor é o fim das coisas do que o seu princípio; melhor é o paciente do que o arrogante.', 0.88],
      ['Audre Lorde', 'Eu não sou livre enquanto qualquer mulher for cativa, mesmo que as correntes dela sejam diferentes das minhas.', 3, 0, 0, 2, 'qs630t81y2yeiw', 6, 3, 3, '', 'A-', 'empoderamento', 'Não sou livre enquanto qualquer mulher não for livre, mesmo quando as algemas dela forem muito diferentes das minhas.', 0.79],
      ['Benjamin Graham', 'O objetivo de investir não é apenas ganhar dinheiro, mas proteger e aumentar seu poder de compra ao longo do tempo.', 2, 0, 0, 2, 'qlesmh11btymab', 7, 3, 3, '', 'A-', 'financas', '', 0.4],
      ['Epicteto', 'Não procure que tudo aconteça como você deseja; deseje que tudo aconteça como acontece, e sua vida será tranquila.', 3, 0, 0, 2, 'q1kk0ays14mx52p', 6, 3, 3, 'Enquirídio, VIII', 'A', 'filosofos', 'Não procure que as coisas aconteçam como você deseja; deseje que elas aconteçam como acontecem, e você terá uma vida tranquila.', 0.82],
      ['Friedrich Hayek', 'O perigo do planejamento central é que ele concentra poder nas mãos de poucos.', 2, 0, 0, 2, 'q1d8e87oxhbntz', 7, 3, 3, '', 'A-', 'politica', '', 0.31],
      ['Kahlil Gibran', 'Quanto mais fundo a tristeza adentra em seu ser, mais alegria poderá conter.', 3, 0, 0, 2, 'q1vb865w1r8nrzv', 6, 3, 3, 'O Profeta, "Da Alegria e da Tristeza"', 'A', 'conforto', 'Quanto mais profundamente a tristeza escava em seu ser, mais alegria você pode conter.', 0.81],
      ['Kahlil Gibran', 'Não digas “encontrei a verdade”; diz “encontrei uma verdade”.', 3, 0, 0, 2, 'q1dp2sog1vfe4y', 6, 3, 3, 'O Profeta, "Do Autoconhecimento"', 'A', 'filosofos', 'Não diga: “Encontrei a verdade”; diga: “Encontrei uma verdade”.', 0.96],
      ['Erich Fromm', 'A conformidade automática é uma forma de adaptação em que o indivíduo deixa de pensar por si mesmo.', 2, 0, 0, 2, 'qpfeua9182jpz', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.34],
      ['Erich Fromm', 'A amizade é uma das formas mais elevadas de amor humano.', 2, 0, 0, 2, 'q13en6qo1nfvo98', 7, 3, 3, '', 'A-', 'amizade', '', 0.38],
      ['Kahlil Gibran', 'Quanto mais profunda a tristeza escava em seu ser, mais alegria você poderá conter.', 3, 0, 0, 2, 'q8d7yzw16pm1', 6, 3, 3, 'O Profeta, "Da Alegria e da Tristeza"', 'A', 'dificeis', 'Quanto mais profundamente a tristeza escava em seu ser, mais alegria você pode conter.', 0.95],
      ['Dale Carnegie', 'A inação gera dúvida e medo. A ação gera confiança e coragem.', 2, 0, 0, 2, 'qd9oulb1lh7hx6', 7, 3, 3, '', 'A-', 'motivacao', '', 0.31],
      ['Adam Smith', 'Sentimos gratidão quando percebemos que recebemos algo valioso por meio da bondade de outra pessoa.', 2, 0, 0, 2, 'q1lm86o4xybopr', 7, 3, 3, '', 'A-', 'gratidao', '', 0.28],
      ['Erving Goffman', 'As pessoas administram impressões para influenciar a maneira como são percebidas.', 2, 0, 0, 2, 'q1hzk63w1ljx0c', 7, 3, 3, '', 'A-', 'manipulacao', '', 0.35],
      ['Jack Welch', 'Antes de ser um líder, o sucesso consiste em crescer a si mesmo. Quando você se torna líder, o sucesso consiste em fazer os outros crescerem.', 3, 0, 0, 2, 'q14qbtzk1ah013y', 6, 3, 3, '', 'A-', 'lideranca', 'Antes de ser líder, crescer significa crescer você mesmo. Quando você se torna líder, crescer passa a significar fazer os outros crescerem.', 0.71],
      ['Friedrich Nietzsche', 'Aquele que luta com monstros deve tomar cuidado para não se tornar um deles.', 3, 0, 0, 2, 'qv7p9ak1ke8exf', 6, 3, 3, 'Além do Bem e do Mal, 146', 'A', 'dificeis', 'Quem luta contra monstros deve cuidar para não se tornar um monstro.', 0.75],
      ['Lao Tsé', 'Aquele que conhece o Tao não fala; aquele que fala não conhece.', 4, 0, 0, 2, 'q13k014wgftkao', 5, 3, 3, 'Tao Te Ching, 56', 'A', 'fe', 'Quem conhece o Tao não fala muito; quem fala muito talvez não conheça o Tao.', 0.67],
      ['Heráclito', 'Ninguém entra duas vezes no mesmo rio.', 3, 0, 0, 2, 'f28139h4vtv', 6, 3, 3, 'Fragmento 91, transmitido por Plutarco', 'A', 'vida', 'Ninguém se banha duas vezes no mesmo rio.', 0.91],
      ['Theodore Levitt', 'As pessoas não compram produtos; elas compram soluções para seus problemas.', 2, 0, 0, 2, 'q17rqcq4rdth04', 7, 3, 3, '', 'A-', 'empreendedorismo', '', 0.41],
      ['Lao Tsé', 'O sábio não disputa, por isso ninguém pode disputar com ele.', 3, 0, 0, 2, 'qws2to317qn80f', 6, 3, 3, 'Tao Te Ching, 22 e 66', 'A', 'fe', 'O sábio não luta contra ninguém e, por isso, ninguém pode lutar contra ele.', 0.73],
      ['Adam Smith', 'A natureza humana possui uma tendência a admirar e agradecer aqueles que fazem o bem.', 2, 0, 0, 2, 'q8ujj941luqtts', 7, 3, 3, '', 'A-', 'gratidao', '', 0.33],
      ['Erich Fromm', 'A liberdade é a condição fundamental para o crescimento humano.', 2, 0, 0, 2, 'q1jtim8k14670ak', 7, 3, 3, '', 'A-', 'autorreconhecimento', '', 0.48],
      ['Margaret Thatcher', 'Não existe dinheiro público; existe apenas dinheiro que o governo arrecada das pessoas.', 4, 0, 0, 2, 'q10tg3651mzjbz2', 5, 3, 3, 'Discurso registrado', 'A', 'politica', 'Não acredito que exista algo chamado dinheiro público; existe apenas dinheiro dos contribuintes.', 0.61],
      ['John Ruskin', 'A qualidade nunca é um acidente; é sempre o resultado de esforço inteligente.', 3, 0, 0, 2, 'f26164ocpf', 6, 3, 3, 'Atribuído a Ruskin em coletâneas, sem localização em sua obra', 'A-', 'reflexao', 'A qualidade nunca é acidente: é sempre resultado de esforço inteligente.', 0.98],
      ['Jean-Jacques Rousseau', 'A gratidão é uma dívida que deve ser paga, mas ninguém tem o direito de exigir.', 2, 0, 0, 2, 'qx2y79s1rn9ipr', 7, 3, 3, '', 'A-', 'gratidao', '', 0.4],
      ['Antoine de Saint-Exupéry', 'Amor não é se olhar nos olhos; é olhar na mesma direção.', 3, 0, 0, 2, 'q18ewqnd1662ssw', 6, 3, 3, '', 'A-', 'amor', 'Amar não é olhar um para o outro; é olhar juntos na mesma direção.', 0.74],
      ['Lao Tsé', 'Aquele que se conhece é sábio; aquele que domina a si mesmo é poderoso.', 4, 0, 0, 2, 'q15ie1ao1ontwjv', 5, 3, 3, 'Tao Te Ching, 33', 'A', 'fe', 'Aquele que conquista os outros é forte; aquele que conquista a si mesmo é poderoso.', 0.7],
      ['Mary Wollstonecraft', 'Fortalecei a mente feminina ampliando seu conhecimento, e haverá um fim para a obediência cega.', 3, 0, 0, 2, 'q17sxoxs1xnin5o', 6, 3, 3, 'Reivindicação dos Direitos da Mulher', 'A-', 'empoderamento', 'Fortalecei a mente feminina pelo alargamento de seus conhecimentos, e haverá um fim para a obediência cega.', 0.88],
      ['Aristóteles', 'A felicidade é o bem supremo da vida humana.', 3, 0, 0, 2, 'qx5j32clc9a4x', 6, 3, 3, 'Ética a Nicômaco, I', 'A', 'felicidade', 'A felicidade é o bem supremo e o fim último da ação.', 0.72],
      ['John Stuart Mill', 'É melhor ser um ser humano insatisfeito do que um porco satisfeito; melhor Sócrates insatisfeito do que um tolo satisfeito.', 3, 0, 0, 2, 'qa4rint16er5ex', 6, 3, 3, 'Utilitarismo', 'A', 'educacao', 'É melhor ser um ser humano insatisfeito do que um porco satisfeito.', 0.7],
      ['François Mauriac', 'Amamos apenas aquilo que não possuímos inteiramente.', 5, 2, 1, 1, 'f262x36ha3', 4, 0, 0, 'O Nó de Víboras (1932)', 'A', 'amor', 'Marcel Proust: Amamos apenas aquilo que não possuímos inteiramente.', 1.0]
    ]
  };
  var TIPOS = ['historico-quarentena', 'historico-quarentena-restaurada', 'historico-removida', 'historico-fundida-duplicata', 'historico-removida-ou-fundida', 'historico-reatribuida'];
  H.rows.forEach(function (r) {
    window.CURADORIA_REMOVIDAS.push({ data: '', lote: H.L[r[3]], commit_base: H.B[r[4]], commit_remocao: H.R[r[5]], autor: r[0], texto: r[1], tipo: TIPOS[r[2]], motivo: H.M[r[7]], fontes: H.F[r[8]], qid: r[6], fonte_anterior: r[10], status_anterior: r[11], categoria_anterior: r[12], contraparte: r[13], similaridade: r[14], origem: H.O[r[9]] });
  });
})();

(function () {
  /* Fase 103 — variantes de tradução e remoções da auditoria de 03/10/2026.
    (1) 18 variantes de tradução da mesma passagem removidas, com a frase
    mantida e a localização registradas; (2) 6 frases removidas por falta de
    fonte, por serem variantes de passagens já removidas e com fonte ativa
    genérica; (3) Santos Dumont, "divisa", removida antes do merge.
    Nenhuma remoção foi automática por semelhança: cada par foi lido. Ver
    curadoria/CHECKPOINT.md. Também define CURADORIA_CHECAR(texto, autor,
    orig) — para usar ANTES de incluir qualquer frase — e
    CURADORIA_VARIANTES_ATIVAS(limiar), que lista pares do mesmo autor com
    texto parecido para revisão manual. A comparação é por bigramas de
    caracteres (Dice); só sinaliza, não decide. Entre traduções de uma
    mesma passagem, vale a conferência humana. */
  var D = [
    [
      'William Shakespeare',
      'O que passou é prólogo.',
      'variante-removida',
      'O passado é prólogo.',
      'A Tempestade, II, 1',
      'A Tempestade, II, 1',
      'A',
      'filosofos',
      'Mesma passagem que a frase mantida, em outra tradução (A Tempestade, II, 1): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (A Tempestade, II, 1), não reconsultada'
    ],
    [
      'Krishna',
      'Você tem direito à ação, mas não aos frutos dela.',
      'variante-removida',
      'Você tem direito ao trabalho, mas nunca aos frutos do trabalho.',
      'Bhagavad Gita, 2.47',
      'Bhagavad Gita, 2.47',
      'A',
      'fe',
      'Mesma passagem que a frase mantida, em outra tradução (Bhagavad Gita, 2.47): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Bhagavad Gita, 2.47), não reconsultada'
    ],
    [
      'Friedrich Nietzsche',
      'Torna-te aquilo que és.',
      'variante-removida',
      'Torna-te quem tu és.',
      'A Gaia Ciência, 270',
      'A Gaia Ciência, 270',
      'A',
      'autorreconhecimento',
      'Mesma passagem que a frase mantida, em outra tradução (A Gaia Ciência, 270): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (A Gaia Ciência, 270), não reconsultada'
    ],
    [
      'Lao Tsé',
      'Quem domina os outros tem força; quem domina a si mesmo tem poder.',
      'variante-removida',
      'Aquele que conquista os outros é forte; aquele que conquista a si mesmo é poderoso.',
      'Tao Te Ching, 33',
      'Tao Te Ching, 33',
      'A',
      'fe',
      'Mesma passagem que a frase mantida, em outra tradução (Tao Te Ching, 33): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Tao Te Ching, 33), não reconsultada'
    ],
    [
      'Lao Tsé',
      'Quem controla os outros pode ser forte; quem controla a si mesmo é verdadeiramente poderoso.',
      'variante-removida',
      'Aquele que conquista os outros é forte; aquele que conquista a si mesmo é poderoso.',
      'Tao Te Ching, 33',
      'Tao Te Ching, 33',
      'A',
      'fe',
      'Mesma passagem que a frase mantida, em outra tradução (Tao Te Ching, 33): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Tao Te Ching, 33), não reconsultada'
    ],
    [
      'Sêneca',
      'A vida não é curta; nós a tornamos curta.',
      'variante-removida',
      'Não recebemos uma vida curta, mas a fazemos curta.',
      'Sobre a Brevidade da Vida, 1',
      'Sobre a Brevidade da Vida, I',
      'A',
      'filosofos',
      'Mesma passagem que a frase mantida, em outra tradução (Sobre a Brevidade da Vida, 1): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Sobre a Brevidade da Vida, 1), não reconsultada'
    ],
    [
      'Jane Austen',
      'Não há desfrute como o de ler!',
      'variante-removida',
      'Não há prazer comparável ao de ler.',
      'fonte genérica nos dois registros ("Romance de Jane Austen")',
      'Romance de Jane Austen',
      'A-',
      'amor',
      'Mesma passagem que a frase mantida, em outra tradução (fonte genérica nos dois registros ("Romance de Jane Austen")): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (fonte genérica nos dois registros ("Romance de Jane Austen")), não reconsultada'
    ],
    [
      'Jane Austen',
      'Não existe encanto igual ao coração que sabe ser terno.',
      'variante-removida',
      'Não há encanto igual à ternura do coração.',
      'fonte genérica nos dois registros ("Romance de Jane Austen")',
      'Romance de Jane Austen',
      'A-',
      'felicidade',
      'Mesma passagem que a frase mantida, em outra tradução (fonte genérica nos dois registros ("Romance de Jane Austen")): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (fonte genérica nos dois registros ("Romance de Jane Austen")), não reconsultada'
    ],
    [
      'George S. Clason',
      'Uma parte de tudo o que você ganha é sua para guardar.',
      'variante-removida',
      'Uma parte de tudo que ganho pertence a mim.',
      'O Homem Mais Rico da Babilônia',
      'O Homem Mais Rico da Babilônia',
      'A',
      'financas',
      'Mesma passagem que a frase mantida, em outra tradução (O Homem Mais Rico da Babilônia): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (O Homem Mais Rico da Babilônia), não reconsultada'
    ],
    [
      'Dinah Maria Craik',
      'Que conforto é sentir-se seguro com alguém: não precisar pesar pensamentos nem medir palavras, e sim derramá-los como são.',
      'variante-removida',
      'A amizade é o conforto indescritível de nos sentirmos seguros com uma pessoa, sem ter de pesar pensamentos nem medir palavras.',
      'A Life for a Life (1859), cap. 16',
      'Uma Vida por uma Vida',
      'A',
      'amizade',
      'Mesma passagem que a frase mantida, em outra tradução (A Life for a Life (1859), cap. 16): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (A Life for a Life (1859), cap. 16), não reconsultada'
    ],
    [
      'Marco Aurélio',
      'A melhor vingança é ser diferente daquele que praticou a injustiça.',
      'variante-removida',
      'A melhor vingança é não ser como aquele que causou o dano.',
      'Meditações, VI, 6',
      'Meditações, VI, 6',
      'A',
      'filosofos',
      'Mesma passagem que a frase mantida, em outra tradução (Meditações, VI, 6): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Meditações, VI, 6), não reconsultada'
    ],
    [
      'Hillel',
      'Não despreze ninguém e não rejeite nada, pois cada pessoa tem seu momento.',
      'variante-removida',
      'Não desprezes nenhuma pessoa e não rejeites nenhuma coisa, pois não há pessoa que não tenha sua hora.',
      'Pirkei Avot, 4:3',
      'Hillel · Tradição rabínica — Pirkei Avot e Talmude, tradução a partir do hebraico',
      'B',
      'fe',
      'Mesma passagem que a frase mantida, em outra tradução (Pirkei Avot, 4:3): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Pirkei Avot, 4:3), não reconsultada'
    ],
    [
      'Epicteto',
      'Quando algo acontece, não é o acontecimento que nos perturba, mas o nosso julgamento sobre ele.',
      'variante-removida',
      'Quando algo externo te perturba, não é a coisa que te aflige, mas o teu julgamento sobre ela.',
      'Enquirídio, V',
      'Enquirídio, V',
      'A',
      'dificeis',
      'Mesma passagem que a frase mantida, em outra tradução (Enquirídio, V): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Enquirídio, V), não reconsultada'
    ],
    [
      'Lao Tsé',
      'Quem está em harmonia com o Tao é como água: beneficia todas as coisas sem competir.',
      'variante-removida',
      'O melhor homem é como a água, que beneficia todas as coisas e não disputa com nenhuma.',
      'Tao Te Ching, 8',
      'Tao Te Ching, 8',
      'A',
      'fe',
      'Mesma passagem que a frase mantida, em outra tradução (Tao Te Ching, 8): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Tao Te Ching, 8), não reconsultada'
    ],
    [
      'Lee Iacocca',
      'Gerenciar é, no fim das contas, motivar outras pessoas.',
      'variante-removida',
      'A administração não é nada mais do que motivar outras pessoas.',
      'Iacocca: Uma Autobiografia',
      'Iacocca: Uma Autobiografia',
      'A',
      'lideranca',
      'Mesma passagem que a frase mantida, em outra tradução (Iacocca: Uma Autobiografia): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Iacocca: Uma Autobiografia), não reconsultada'
    ],
    [
      'Warren Buffett',
      'O tempo é amigo dos negócios excelentes e inimigo dos negócios medíocres.',
      'variante-removida',
      'O tempo é o amigo da empresa maravilhosa e o inimigo da medíocre.',
      'Cartas aos acionistas da Berkshire Hathaway',
      'Cartas aos acionistas da Berkshire Hathaway',
      'A-',
      'empreendedorismo',
      'Mesma passagem que a frase mantida, em outra tradução (Cartas aos acionistas da Berkshire Hathaway): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Cartas aos acionistas da Berkshire Hathaway), não reconsultada'
    ],
    [
      'Alcorão 65:3',
      'Aquele que confia em Deus, Ele lhe será suficiente.',
      'variante-removida',
      'E quem confiar em Deus, Ele lhe bastará.',
      'Alcorão 65:3',
      'Alcorão 65:3 · Alcorão — tradução de Samir El Hayek (edição brasileira de referência)',
      'B',
      'fe',
      'Mesma passagem que a frase mantida, em outra tradução (Alcorão 65:3): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original (Alcorão 65:3), não reconsultada'
    ],
    [
      'Elon Musk',
      'Se algo é importante o suficiente, você deve tentar, mesmo que o resultado seja incerto.',
      'variante-removida',
      'Quando algo é importante o suficiente, você faz mesmo que as probabilidades não estejam a seu favor.',
      '"Entrevista registrada" nos dois registros',
      'Entrevista registrada',
      'A',
      'empreendedorismo',
      'Mesma passagem que a frase mantida, em outra tradução ("Entrevista registrada" nos dois registros): mesma localização citada e mesmo conteúdo; mantida a versão mais literal / melhor referenciada. Relação conferida pelo conteúdo e pela localização dos dois registros; o texto original NÃO foi reconsultado nesta rodada.',
      'comparação dos dois registros no acervo atual; conhecimento da passagem original ("Entrevista registrada" nos dois registros), não reconsultada'
    ],
    [
      'Frida Kahlo',
      'Pinto a mim mesma porque sou a pessoa que conheço melhor.',
      'removida',
      '',
      '',
      'Registrado em seus diários e entrevistas',
      'A',
      'autorreconhecimento',
      'Passagem já removida na quarentena do build antigo por "fonte não localizada"; as duas variantes ativas citavam só "registrado em entrevistas/diários". Busca desta rodada (Wikiquote EN, biografia de Hayden Herrera citada em coletâneas, sites de arte): a frase circula amplamente, mas nenhuma fonte primária localizada (o Wikiquote a lista sem referência).',
      'Wikiquote EN Frida Kahlo; buscas web 03/10/2026'
    ],
    ['Frida Kahlo', 'Pinto autorretratos porque estou muito sozinha, e porque sou o tema que conheço melhor.', 'removida', '', '', 'Registrado em entrevistas e nos diários da artista', 'A', 'autorreconhecimento', 'Mesma passagem e mesmo motivo da variante anterior (ver registro acima).', 'Wikiquote EN Frida Kahlo; buscas web 03/10/2026'],
    [
      'George Bernard Shaw',
      'A vida não é sobre se encontrar. A vida é sobre se criar.',
      'removida',
      '',
      '',
      'Atribuído a Shaw em coletâneas, sem localização em sua obra',
      'A-',
      'autorreconhecimento',
      'Variante da passagem "a vida não é sobre encontrar a si mesmo…", já removida da quarentena por fonte não localizada; a fonte ativa era "atribuído em coletâneas, sem localização em sua obra".',
      'registro do build antigo; fonte ativa no CSV; sem nova fonte encontrada'
    ],
    [
      'Santo Agostinho',
      'O mundo é um livro, e quem não viaja lê apenas uma página.',
      'removida',
      '',
      '',
      'Atribuído a Agostinho a partir do século XIX, sem localização em sua obra',
      'A-',
      'vida',
      'Variante da passagem "a vida é um livro e aqueles que não viajam…", já removida; a fonte ativa era "atribuído a Agostinho a partir do século XIX, sem localização".',
      'registro histórico; fonte ativa no CSV; sem nova fonte encontrada'
    ],
    ['Albert Schweitzer', 'O exemplo não é a melhor maneira de influenciar os outros. É a única.', 'removida', '', '', 'Atribuído a Schweitzer em coletâneas, sem localização em sua obra', 'A-', 'lideranca', 'Variante de passagem já removida; a fonte ativa era "atribuído a Schweitzer em coletâneas, sem localização em sua obra".', 'registro histórico; fonte ativa no CSV; sem nova fonte encontrada'],
    [
      'Charles Chaplin',
      'A vida é uma tragédia quando vista de perto, mas uma comédia quando vista de longe.',
      'removida',
      '',
      '',
      'Atribuído a Chaplin em coletâneas, sem registro primário localizado',
      'A-',
      'reflexao',
      'Variante de passagem já classificada como disputada e removida (Fase 21 / 4º lote); a fonte ativa era "atribuído a Chaplin em coletâneas, sem registro primário".',
      'registro histórico; fonte ativa no CSV; sem nova fonte encontrada'
    ],
    [
      'Santos Dumont',
      'Sempre segui a divisa: “Quem quer vai, quem não quer manda”.',
      'removida-antes-do-merge',
      '',
      '',
      'O Que Eu Vi, o Que Nós Veremos (1918), parte I',
      'A',
      'motivacao',
      'Decisão do proprietário (03/10/2026): confirmada como texto do livro de 1918 (parte I), mas o dito é popular e o autor o apresenta como divisa que seguia, não como criação própria; sem comprovação de autoria da máxima, sai do catálogo. Inserida no PR #2 e removida antes do merge: nunca esteve na main.',
      'O que eu vi, o que nós veremos (1918), parte I (Wikisource, transcrição revista, não toda validada)'
    ]
  ];
  D.forEach(function (r) {
    window.CURADORIA_REMOVIDAS.push({
      data: '2026-10-03',
      lote: 'PR #2 — fechamento da auditoria',
      commit_base: '',
      commit_remocao: '',
      autor: r[0],
      texto: r[1],
      tipo: r[2],
      motivo: r[8],
      fontes: r[9],
      qid: '',
      fonte_anterior: r[5],
      status_anterior: r[6],
      categoria_anterior: r[7],
      contraparte: r[3],
      similaridade: '',
      origem: 'decisão desta sessão; qid preenchido na remoção quando a frase estava ativa'
    });
  });
  var norm = memoTexto(function (s) {
    return String(s)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  });
  function bigr(s) {
    var n = norm(s),
      m = {},
      i,
      g;
    for (i = 0; i < n.length - 1; i++) {
      g = n.substr(i, 2);
      m[g] = (m[g] || 0) + 1;
    }
    return { m: m, len: Math.max(0, n.length - 1) };
  }
  function dice(a, b) {
    if (!a.len || !b.len) return 0;
    var inter = 0,
      k;
    for (k in a.m) if (b.m[k]) inter += Math.min(a.m[k], b.m[k]);
    return (2 * inter) / (a.len + b.len);
  }
  /* CURADORIA_CHECAR(texto, autor, orig): verificação obrigatória antes de
     inserir uma frase nova. Compara por bigramas (coeficiente de Dice) com as
     frases ativas do mesmo autor e com o registro de remoções; devolve
     { exata, bloqueada, variantes:[{onde, qid, texto, score}] }. As fases de
     inserção (104, 110, 127, 128) pulam a frase se exata, bloqueada ou com
     variante de score >= 0,70. */
  window.CURADORIA_CHECAR = function (texto, autor, orig) {
    var t = bigr(texto),
      o = orig ? bigr(orig) : null,
      out = { exata: false, bloqueada: window.CURADORIA_BLOQUEADA(texto), variantes: [] };
    QUOTES.forEach(function (q) {
      if (autor && q.author !== autor) return;
      if (norm(q.text) === norm(texto)) out.exata = true;
      var s = dice(t, bigr(q.text)),
        so = o && q.orig ? dice(o, bigr(q.orig)) : 0;
      if (s >= 0.55 || so >= 0.8) out.variantes.push({ onde: 'ativa', qid: q.qid, texto: q.text, score: +Math.max(s, so).toFixed(2), via: so >= 0.8 && so > s ? 'original' : 'texto' });
    });
    window.CURADORIA_REMOVIDAS.forEach(function (r) {
      if (autor && r.autor !== autor) return;
      var s = dice(t, bigr(r.texto));
      if (s >= 0.55) out.variantes.push({ onde: 'registro', tipo: r.tipo, texto: r.texto, qid: r.qid || '', score: +s.toFixed(2) });
    });
    out.variantes.sort(function (a, b) {
      return b.score - a.score;
    });
    return out;
  };
  window.CURADORIA_VARIANTES_ATIVAS = function (limiar) {
    limiar = limiar || 0.6;
    var por = {},
      res = [];
    QUOTES.forEach(function (q) {
      (por[q.author] = por[q.author] || []).push(q);
    });
    Object.keys(por).forEach(function (a) {
      var L = por[a].map(function (q) {
        return { q: q, b: bigr(q.text) };
      });
      for (var i = 0; i < L.length; i++)
        for (var j = i + 1; j < L.length; j++) {
          var s = dice(L[i].b, L[j].b);
          if (s >= limiar) res.push({ autor: a, score: +s.toFixed(2), a: L[i].q.text, b: L[j].q.text, qidA: L[i].q.qid, qidB: L[j].q.qid });
        }
    });
    return res.sort(function (x, y) {
      return y.score - x.score;
    });
  };
  function aplicar() {
    var feitas = 0,
      ausentes = [];
    window.CURADORIA_REMOVIDAS.forEach(function (r) {
      if (r.data !== '2026-10-03' || (r.tipo !== 'variante-removida' && r.tipo !== 'removida')) return;
      var q = QUOTES.filter(function (x) {
        return x.author === r.autor && norm(x.text) === norm(r.texto);
      })[0];
      if (!q) {
        ausentes.push(r.autor + ' — ' + r.texto.slice(0, 40));
        return;
      }
      r.qid = q.qid;
      var res = typeof removerFrase === 'function' ? removerFrase(q.qid, r.motivo) : { ok: false };
      if (res && res.ok) feitas++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (ausentes.length) console.warn('MeMotiva · Fase 103: remoção não aplicada (frase não encontrada): ' + ausentes.join('; '));
    console.log('MeMotiva · Fase 103: ' + feitas + ' frases removidas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 104 — lote 1 de lacunas (03/10/2026). Só frases conferidas, nesta
    sessão, no texto da obra (Standard Ebooks para Eliot, Alcott e Barnum;
    corpus de texto integral PPORTAL/Colonia para Lima Barreto e Coelho
    Neto). Cada item: [autor, texto PT, original (só se em outra língua),
    título da obra em OBRAS (vazio = obra fora do catálogo), categoria,
    fonte exibida, nota]. Passa por CURADORIA_CHECAR antes de entrar:
    exata, bloqueada ou variante (>= 0,70) = não entra. Ver CHECKPOINT. */
  var LOTE = [
    ['George Eliot', 'Para que vivemos, se não for para tornar a vida menos difícil uns para os outros?', 'What do we live for, if it is not to make life less difficult to each other?', 'Middlemarch', 'vida', 'Middlemarch (1872), capítulo 72', 'Fala da personagem Dorothea Brooke, não da narradora. Original conferido no texto do Standard Ebooks. Tradução própria.'],
    ['Louisa May Alcott', 'O amor é um grande embelezador.', 'love is a great beautifier', 'Mulherzinhas', 'amor', 'Mulherzinhas (1868), capítulo 24 (“Gossip”)', 'Reflexão da narradora sobre Meg, no original “for love is a great beautifier”. Original conferido no texto do Standard Ebooks. Tradução própria.'],
    [
      'P. T. Barnum',
      'O dinheiro é, em certos aspectos, como o fogo: é um excelente servo, mas um terrível senhor.',
      'Money is in some respects like fire; it is a very excellent servant but a terrible master.',
      '',
      'financas',
      'The Art of Money Getting (1880), seção “Avoid Debt”',
      'Original conferido no texto do Standard Ebooks. A obra não consta do catálogo de obras do acervo (mesma situação da outra frase de Barnum já cadastrada). Tradução própria.'
    ],
    [
      'Coelho Neto',
      'Os marinheiros guiam-se pelas estrelas, os poetas não podem trabalhar sem um ideal qualquer.',
      '',
      'A Conquista',
      'motivacao',
      'A Conquista (1899)',
      'Fala de personagem (Anselmo). Texto conferido numa edição digital (corpus PPORTAL, registro com data 1913), que pode diferir da 1ª edição de 1899; capítulo não identificado porque a numeração da edição digital consultada é incompleta.'
    ],
    [
      'Coelho Neto',
      'Nunca se deve matar uma ilusão, que é a matéria-prima da esperança.',
      '',
      'A Conquista',
      'motivacao',
      'A Conquista (1899)',
      'Fala de personagem, em primeira pessoa. Texto conferido numa edição digital (corpus PPORTAL, registro com data 1913), que pode diferir da 1ª edição de 1899; capítulo não identificado porque a numeração da edição digital consultada é incompleta. No original o trecho começa em “calava-me porque entendo que nunca se deve matar uma ilusão…”.'
    ],
    [
      'Lima Barreto',
      'Há muita bondade no nosso caráter, mas também muita arrogância, muito exagero no mandar e um doentio impudor no desobedecer.',
      '',
      'Recordações do Escrivão Isaías Caminha',
      'reflexao',
      'Recordações do Escrivão Isaías Caminha (1909)',
      'Reflexão do narrador-protagonista, não fala de Lima Barreto em primeira pessoa. Texto conferido em edição digital (corpus PPORTAL); capítulo não identificado porque a numeração da edição digital consultada é incompleta.'
    ],
    [
      'Samuel Butler',
      'Todos os animais, exceto o homem, sabem que o principal negócio da vida é desfrutá-la.',
      'All animals, except man, know that the principal business of life is to enjoy it',
      'O Caminho de Toda Carne',
      'vida',
      'O Caminho de Toda Carne (1903), capítulo 19',
      'Reflexão do narrador (Overton) sobre o sr. Pontifex. Original conferido no texto do Standard Ebooks (publicação póstuma, 1903). Tradução própria.'
    ],
    [
      'George Eliot',
      'Se tivéssemos uma visão e um sentimento agudos de toda a vida humana comum, seria como ouvir a grama crescer e o coração do esquilo bater, e morreríamos desse rugido que fica do outro lado do silêncio.',
      "If we had a keen vision and feeling of all ordinary human life, it would be like hearing the grass grow and the squirrel's heart beat, and we should die of that roar which lies on the other side of silence.",
      'Middlemarch',
      'reflexao',
      'Middlemarch (1872), capítulo 20',
      'Reflexão da narradora. Original conferido no texto do Standard Ebooks. Tradução própria.'
    ],
    ['George Eliot', 'Nada é tão bom quanto parece de antemão.', 'Nothing is so good as it seems beforehand', 'Silas Marner', 'vida', 'Silas Marner (1861), capítulo 18', 'Fala da personagem Nancy a Godfrey, não da narradora. Original conferido no texto do Standard Ebooks. Tradução própria.']
  ];
  function aplicar() {
    var REMOVER = [
      [
        'Harriet Beecher Stowe',
        'Nunca desista, pois esse é o lugar',
        'Forma contraída moderna ("Never give up, for that is just the place and time that the tide will turn"). O original mais longo ("When you get into a tight place, and everything goes against you…") circula com atribuição a Stowe (Wikiquote EN, coletâneas e Poor Richard\'s Anthology of Thoughts on Success, 1947), mas nenhuma fonte primária foi localizada nesta rodada; a frase não está em A Cabana do Pai Tomás (texto integral do Standard Ebooks conferido) e a fonte ativa era "atribuído a Stowe em coletâneas, sem localização em sua obra". Não localizada em outras obras dela; sem comprovação, sai.',
        'Standard Ebooks (A Cabana do Pai Tomás); Wikiquote EN Harriet Beecher Stowe; CSMonitor "Words of Note" (1999); buscas web 03/10/2026'
      ]
    ];
    REMOVER.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r[0] && x.text.indexOf(r[1]) === 0;
      })[0];
      if (!q) return;
      window.CURADORIA_REMOVIDAS.push({ data: '2026-10-03', lote: 'Lacunas — lote 1', commit_base: '', commit_remocao: '', autor: q.author, texto: q.text, tipo: 'removida', motivo: r[2], fontes: r[3], qid: q.qid, fonte_anterior: q.src, status_anterior: q.st, categoria_anterior: q.cat, contraparte: '', similaridade: '', origem: 'decisão desta sessão' });
      if (typeof removerFrase === 'function') removerFrase(q.qid, r[2]);
    });
    var nQ = 0,
      pulos = [],
      semObra = [];
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var qids = {};
    QUOTES.forEach(function (q) {
      qids[q.qid] = 1;
    });
    LOTE.forEach(function (r, idx) {
      var chk = window.CURADORIA_CHECAR(r[1], r[0], r[2]);
      var forte = chk.variantes.filter(function (v) {
        return v.score >= 0.7;
      });
      if (chk.exata || chk.bloqueada || forte.length) {
        pulos.push(r[0] + ' — ' + r[1].slice(0, 40) + ' (' + (chk.exata ? 'exata' : chk.bloqueada ? 'bloqueada' : 'variante ' + forte[0].score) + ')');
        return;
      }
      if (
        r[3] &&
        !(
          OBRAS[r[0]] &&
          OBRAS[r[0]].some(function (o) {
            return o.t === r[3];
          })
        )
      )
        semObra.push(r[0] + ' — ' + r[3]);
      var id = 'f104' + idx.toString(36) + Math.abs((r[1].length * 2654435761) % 999983).toString(36);
      while (qids[id]) id += 'x';
      qids[id] = 1;
      var q = { author: r[0], text: r[1], src: r[5], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao', qid: id, notaAutoria: r[6] };
      if (r[2]) q.orig = r[2];
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (pulos.length) console.warn('MeMotiva · Fase 104: não inseridas — ' + pulos.join('; '));
    if (semObra.length) console.warn('MeMotiva · Fase 104: obra fora do catálogo — ' + semObra.join('; '));
    console.log('MeMotiva · Fase 104: +' + nQ + ' frases.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 105 — auditoria das 49 atribuições fracas (04/10/2026).
    41 removidas por falta de fonte verificada, 7 mantidas com fonte
    corrigida/melhorada (3 com texto corrigido, mesmo qid) e 1 já tinha sido
    removida no lote 1 (Stowe). Ver curadoria/CHECKPOINT.md, Fase 1. */
  var REMOVER = [
    [
      'Simone de Beauvoir',
      'O problema da mulher sempre foi um pro',
      'Introdução de O Segundo Sexo lida na íntegra nesta rodada (tradução de Parshley, texto reproduzido pela SJSU): a frase não consta; o livro completo não foi consultado. Fonte do registro: reprodução em fontes educacionais, sem localização. Reabrir só com capítulo e página.',
      'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'
    ],
    ['Simone de Beauvoir', 'O opressor não seria tão forte se não ', 'Introdução de O Segundo Sexo lida na íntegra nesta rodada (tradução de Parshley): a frase não consta (aparece apenas o tema da "cumplicidade" da mulher); o livro completo não foi consultado. Reabrir só com capítulo e página.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Buda', 'A raiva é como segurar uma brasa com a', 'Atribuição popular sem passagem do cânone páli identificada; a fonte do registro era genérica ("tradição atribuída ao cânone páli"). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Darcy Ribeiro', 'A crise da educação no Brasil não é um', 'A fonte do registro ("registrado em O Povo Brasileiro") não foi verificada e a frase não foi localizada em obra, discurso ou entrevista de Darcy Ribeiro nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Theodore Levitt', 'As pessoas não querem uma broca de um ', 'O próprio registro diz que Levitt a atribui a Leo McGivena (A Imaginação de Marketing): a máxima não é dele. Reatribuir exigiria autor novo no catálogo, fora do escopo. Edição de A Imaginação de Marketing não consultada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    [
      'Fernando Pessoa',
      'Navegar é preciso; viver não é preciso',
      'O lema "navegar é preciso; viver não é preciso" é antigo (a tradição o atribui a Pompeu, relatado por Plutarco; conhecimento geral, não reconsultado nesta rodada) e a fonte do registro ("poema atribuído a Álvaro de Campos") não foi confirmada. Fica fora até haver a passagem de Pessoa e a localização.',
      'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'
    ],
    ['Gustave Flaubert', 'Madame Bovary sou eu.', 'Frase atribuída a Flaubert por contemporâneos, sem carta ou registro primário: o próprio registro diz "sem carta o…". Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Eurípides', 'Quem os deuses querem destruir, primei', 'Fragmento "atribuído a Eurípides" e transmitido por autores posteriores, sem identificação do fragmento (numeração Nauck/Kannicht) nem do transmissor. Não localizada em obra preservada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Harry Markowitz', 'A diversificação é o único almoço grát', 'Frase repetida em entrevistas segundo o registro, sem entrevista identificada. Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Louis Armstrong', 'Se você tem de perguntar o que é jazz,', 'Sem registro primário identificado (o próprio registro diz "sem registro primário"). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Anaïs Nin', 'E veio o dia em que o risco de permane', 'Texto não localizado nos diários de Nin (o registro dizia "anotação nos diários, atribuída a 1979", sem volume); a literatura de checagem de citações indica origem em outra autora (não reconsultada nesta rodada).', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Sholom Aleichem', 'A vida é um sonho para os sábios, um j', 'Atribuída a Sholom Aleichem em coletâneas, sem obra localizada. Não encontrada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Arthur Ashe', 'Comece de onde você está. Use o que vo', 'Sem localização ("reproduzida em entrevistas", sem entrevista identificada). A fórmula "comece onde você está, use o que tem, faça o que pode" é anterior e tem outras atribuições; não resolvido nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Mário Quintana', 'O segredo é não correr atrás das borbo', 'Atribuída a Quintana em coletâneas, sem localização em sua obra. Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Fernando Pessoa', 'Tudo o que sinto é sentido para eu esc', 'Sem localização no Livro do Desassossego (o registro não indicava fragmento); não encontrada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Michelangelo', 'Eu vi o anjo no mármore e esculpi até ', 'Sem localização nas cartas ou poemas de Michelangelo; a fonte do registro é genérica. Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Michelangelo', 'Ainda estou aprendendo.', 'Atribuída a Michelangelo aos 87 anos sem registro documental contemporâneo (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Pablo Picasso', 'A arte lava da alma a poeira do dia a ', 'Sem registro primário localizado de Picasso (palavras do próprio registro). Não encontrada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Charles Chaplin', 'Um dia sem rir é um dia desperdiçado.', 'Sem registro primário localizado de Chaplin (palavras do próprio registro); a literatura de checagem de citações indica outra origem (não reconsultada nesta rodada).', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Francisco de Assis', 'Comece fazendo o necessário, depois o ', 'Atribuída a Francisco de Assis em coletâneas, sem localização nas fontes franciscanas primárias (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Martinho Lutero', 'Aqui estou; não posso fazer de outro m', 'As palavras "Aqui estou; não posso fazer de outro modo" não constam dos relatos de testemunhas do discurso em Worms (1521), segundo o próprio registro; a autenticidade como fala de Lutero é discutida. Não comprovada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Rumi', 'Ontem eu era esperto e queria mudar o ', 'Atribuída a Rumi em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Dalai Lama', 'Se você acha que é pequeno demais para', 'Sem registro primário do Dalai Lama (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Oprah Winfrey', 'Faça o seu melhor até saber mais. Quan', 'O próprio registro diz que Oprah cita Maya Angelou; a frase não é dela. Reatribuir à Angelou exigiria localizar a fala dela com redação exata, o que não foi feito nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Mao Tsé-Tung', 'Uma jornada de mil milhas começa com u', 'Provérbio de origem taoista (Tao Te Ching, 64) apenas repetido por Mao, segundo o próprio registro; sem passagem de Mao localizada. Não mantida sob o nome dele.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Epicteto', 'Temos duas orelhas e uma boca para ouv', 'Atribuída a Epicteto "por Diógenes Laércio", sem localização; a fonte do registro não foi confirmada nesta rodada e a fórmula tem outras atribuições na tradição antiga (não reverificado).', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Stephen Hawking', 'A inteligência é a capacidade de se ad', 'Atribuída a Hawking em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Charles Chaplin', 'Nada é permanente neste mundo maldito,', 'Sem registro primário localizado de Chaplin (palavras do próprio registro). Não encontrada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Manuel Bandeira', 'A vida é uma ópera e uma grande ópera ', 'Atribuída a Bandeira em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    [
      'Mário Quintana',
      'A vida é o dever que nós trouxemos par',
      'Verso atribuído a Quintana; um portal educacional o cita como do poema "O Tempo", mas o livro não foi identificado e a indicação do registro (Espelho Mágico, 1951) não foi confirmada. Provavelmente autêntica; reabrir com a edição e a localização.',
      'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'
    ],
    ['Chico Xavier', 'Nem todos os que sorriem estão content', 'Atribuída a Chico Xavier em coletâneas, sem obra localizada (palavras do próprio registro). Não encontrada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Bertrand Russell', 'A guerra não determina quem está certo', 'Atribuída a Russell em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Carl Gustav Jung', 'Conheça todas as teorias, domine todas', 'Atribuída a Jung em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Sigmund Freud', 'Um dia, em retrospecto, os anos de lut', 'Atribuída a Freud em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Tom Peters', 'Se uma janela de oportunidade aparecer', 'Atribuída a Tom Peters em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['William James', 'A maior arma contra o estresse é a nos', 'Atribuída a William James em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['William James', 'Somos como ilhas no mar, separados na ', 'Atribuída a William James em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Paulo Freire', 'É preciso ter esperança, mas ter esper', 'Formulação difundida a partir de falas de Freire, sem localização em obra (palavras do próprio registro). Passagem exata e obra não identificadas nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Victor Hugo', 'Aquele que abre uma escola fecha uma p', 'Atribuída a Victor Hugo em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Victor Hugo', 'O futuro tem muitos nomes: para os fra', 'Atribuída a Victor Hugo em coletâneas, sem localização em sua obra (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)'],
    ['Eleanor Roosevelt', 'O futuro pertence àqueles que acredita', 'Atribuída a Eleanor Roosevelt em coletâneas, sem registro documental localizado (palavras do próprio registro). Não localizada nesta rodada.', 'análise do registro de origem; buscas e leituras desta rodada (ver CHECKPOINT, Fase 1)']
  ];
  var MELHORAR = [
    ['Júlio César', 'Vim, vi e ve', null, null, null, 'Plutarco, Vida de César, 50.2 (carta a Amâncio); Suetônio, Divus Iulius, 37.2 (cartaz no triunfo pôntico, 46 a.C.)', 'Frase proclamada em latim (“Veni, vidi, vici”). Relatada por Plutarco e Suetônio; não existe original preservado. Conferida em Plutarco (trad. Perrin) e no trecho de Suetônio citado em artigo da Classical Quarterly.', 'A-'],
    ['Aristóteles', 'A amizade é uma alma que ', null, 'μία ψυχὴ δύο σώμασιν ἐνοικοῦσα', null, 'Diógenes Laércio, Vidas e Doutrinas dos Filósofos Ilustres, V, 20 (ed. Hicks)', 'Dito de Aristóteles transmitido por Diógenes Laércio, não texto do próprio Aristóteles. Grego conferido na edição Hicks (Perseus). Tradução própria.', 'A-'],
    ['Fernando Pessoa', 'Tenho em mim todos os son', null, null, null, '“Tabacaria” (1928), de Álvaro de Campos, heterônimo de Fernando Pessoa; publicado em Presença, 1933', 'Verso do trecho inicial do poema (datado de 15-1-1928); a voz é a do heterônimo Álvaro de Campos. Conferido em várias reproduções do poema; edição impressa de base não identificada.', 'A'],
    [
      'Will Durant',
      'A civilização é um rio co',
      null,
      null,
      null,
      'Entrevista a Jim Hicks, “Spry Old Team Does It Again”, Life, 18 out. 1963',
      'Dito do próprio Durant ao resumir a civilização. A referência da Life foi obtida numa compilação de citações (Wist) e em reportagem que a reproduz; a revista não foi consultada. A compilação informa não ter achado o trecho na Story of Civilization.',
      'A-'
    ],
    [
      'Reinhold Niebuhr',
      'Concedei-me serenidade pa',
      'Deus, concede-nos a graça de aceitar com serenidade as coisas que não podem ser mudadas, a coragem de mudar as coisas que devem ser mudadas e a sabedoria de distinguir umas das outras.',
      'God, give us grace to accept with serenity the things that cannot be changed, courage to change the things that should be changed, and the wisdom to distinguish the one from the other.',
      null,
      'Oração da Serenidade (1943; texto preferido pela família, publicado por Elisabeth Sifton em The Serenity Prayer, 2003)',
      'Autoria de Niebuhr considerada provável, não certa (Shapiro estima cerca de 80%; uma referência de 1937 já lhe atribui forma anterior). O texto anterior do acervo era a versão curta popularizada pelos Alcoólicos Anônimos, que não é a de Niebuhr. Tradução própria.',
      'A-'
    ],
    [
      'Fiódor Dostoiévski',
      'Se Deus não existe, tudo ',
      'Não há virtude se não há imortalidade.',
      'There is no virtue if there is no immortality.',
      null,
      'Os Irmãos Karamázov (1880), parte I, livro II, cap. 6 (fala de Ivan Karamázov)',
      'Fala de personagem. A fórmula popular “Se Deus não existe, tudo é permitido” não consta literalmente no romance (texto de Constance Garnett conferido): o livro traz “não há virtude se não há imortalidade” e, na boca de outros personagens, “tudo é lícito”. Tradução própria da versão inglesa.',
      'A'
    ],
    [
      'Frida Kahlo',
      'Eu não pinto sonhos nem p',
      'Pensavam que eu era surrealista, mas eu não era. Nunca pintei sonhos. Pintei a minha própria realidade.',
      "They thought I was a Surrealist, but I wasn't. I never painted dreams. I painted my own reality.",
      null,
      'Declaração sobre o rótulo surrealista de André Breton (1938-39), citada em Hayden Herrera, Frida: A Biography of Frida Kahlo (1983)',
      'Fonte primária da declaração (carta ou entrevista) não identificada; a redação inglesa vem de reproduções que a remetem à biografia de Herrera, que não foi consultada diretamente. A variante anterior do acervo (“não pinto sonhos nem pesadelos”) não foi localizada. Tradução própria.',
      'A-'
    ]
  ];
  function aplicar() {
    var nR = 0,
      nM = 0,
      ausentes = [];
    REMOVER.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r[0] && x.text.indexOf(r[1]) === 0;
      })[0];
      if (!q) {
        ausentes.push('REM ' + r[0] + ' — ' + r[1]);
        return;
      }
      window.CURADORIA_REMOVIDAS.push({ data: '2026-10-04', lote: 'Fase 1 — auditoria das 49 atribuições fracas', commit_base: '', commit_remocao: '', autor: q.author, texto: q.text, tipo: 'removida', motivo: r[2], fontes: r[3], qid: q.qid, fonte_anterior: q.src, status_anterior: q.st, categoria_anterior: q.cat, contraparte: '', similaridade: '', origem: 'decisão desta sessão' });
      if (typeof removerFrase === 'function' && removerFrase(q.qid, r[2]).ok) nR++;
    });
    MELHORAR.forEach(function (m) {
      var q = QUOTES.filter(function (x) {
        return x.author === m[0] && x.text.indexOf(m[1]) === 0;
      })[0];
      if (!q) {
        ausentes.push('MOD ' + m[0] + ' — ' + m[1]);
        return;
      }
      var antes = q.text;
      if (m[2]) {
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-04',
          lote: 'Fase 1 — auditoria das 49 atribuições fracas',
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: antes,
          tipo: 'substituida',
          motivo: 'Texto do acervo não correspondia à passagem documentada; substituído pela redação conferida (mesmo qid). ' + m[6],
          fontes: m[5],
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: m[2],
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        q.text = m[2];
      }
      if (m[3]) q.orig = m[3];
      q.src = m[5];
      q.notaAutoria = m[6];
      q.st = m[7];
      nM++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (ausentes.length) console.warn('MeMotiva · Fase 105: não encontradas — ' + ausentes.join('; '));
    console.log('MeMotiva · Fase 105: ' + nR + ' removidas, ' + nM + ' melhoradas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 106 — duplicata de tradução achada ao fechar a auditoria das 49
    atribuições fracas (04/10/2026): Aristóteles tinha duas entradas para o
    mesmo dito relatado por Diógenes Laércio, V, 20 (grego: "mía psychè dýo
    sómasin enoikoûsa", resposta a "o que é um amigo?"). Mantida uma, com o
    texto alinhado ao grego ("um amigo", não "o amor"/"a amizade"); a outra
    sai e fica registrada. */
  function aplicar() {
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var amor = QUOTES.filter(function (x) {
      return x.author === 'Aristóteles' && x.text.indexOf('O amor é composto de uma única alma') === 0;
    })[0];
    var amiz = QUOTES.filter(function (x) {
      return x.author === 'Aristóteles' && x.text.indexOf('A amizade é uma alma que habita dois corpos') === 0;
    })[0];
    if (amor) {
      window.CURADORIA_REMOVIDAS.push({
        data: '2026-10-04',
        lote: 'Fase 1 — auditoria das 49 atribuições fracas',
        commit_base: '',
        commit_remocao: '',
        autor: amor.author,
        texto: amor.text,
        tipo: 'variante-removida',
        motivo: 'Mesmo dito de Diógenes Laércio, V, 20, que a entrada mantida registra; esta traduzia "amigo" como "amor", o que não corresponde ao grego. Mantida a outra, com texto alinhado ao grego.',
        fontes: 'Diógenes Laércio, V, 20 (Hicks/Perseus), conferido em 03/10/2026',
        qid: amor.qid,
        fonte_anterior: amor.src,
        status_anterior: amor.st,
        categoria_anterior: amor.cat,
        contraparte: 'Um amigo é uma só alma que habita dois corpos.',
        similaridade: '',
        origem: 'decisão desta sessão'
      });
      if (typeof removerFrase === 'function') removerFrase(amor.qid, 'variante de tradução do mesmo dito (D.L. V, 20)');
    }
    if (amiz) {
      window.CURADORIA_REMOVIDAS.push({
        data: '2026-10-04',
        lote: 'Fase 1 — auditoria das 49 atribuições fracas',
        commit_base: '',
        commit_remocao: '',
        autor: amiz.author,
        texto: amiz.text,
        tipo: 'substituida',
        motivo: 'Texto alinhado ao grego de Diógenes Laércio, V, 20 ("um amigo", resposta à pergunta sobre o que é um amigo); a redação anterior dizia "a amizade".',
        fontes: 'Diógenes Laércio, V, 20 (Hicks/Perseus), conferido em 03/10/2026',
        qid: amiz.qid,
        fonte_anterior: amiz.src,
        status_anterior: amiz.st,
        categoria_anterior: amiz.cat,
        contraparte: 'Um amigo é uma só alma que habita dois corpos.',
        similaridade: '',
        origem: 'decisão desta sessão'
      });
      amiz.text = 'Um amigo é uma só alma que habita dois corpos.';
    }
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 107 — conferência manual do histórico anterior a 28/09 (04/10/2026).
    (1) Os 74 itens "removida-ou-fundida" foram lidos par a par: 64 são a
    mesma passagem em outra tradução/paráfrase (fundida-duplicata); 7 são
    passagens distintas removidas por outro motivo (histórico-removida); 3
    são passagens DISTINTAS removidas por semelhança estrutural (falso
    positivo provável: Mateus 5:8, Dhammapada 2, Tao Te Ching 33, primeira
    metade) — marcadas "restaurável": exigem texto de edição publicada
    conferido antes de voltar, e NÃO bloqueiam reinserção. (2) 6 itens
    "quarentena-restaurada" já não têm equivalente ativo (removidos na
    auditoria das 49 atribuições fracas) e voltam a "quarentena". A
    classificação é minha, lida sobre os textos em português, sem reconsultar
    originais. */
  var MAPA = [
    ['Jean-Jacques Rousseau', 'Não é a aparência, mas a essência, que const', 'historico-removida'],
    ['Krishna', 'O homem alcança a perfeição quando realiza s', 'historico-fundida-duplicata'],
    ['Krishna', 'O verdadeiro yogue vê todos os seres com igu', 'historico-fundida-duplicata'],
    ['Gerda Lerner', 'A história das mulheres precisa ser escrita ', 'historico-fundida-duplicata'],
    ['Warren Bennis', 'A confiança é o combustível da liderança.', 'historico-fundida-duplicata'],
    ['Marco Aurélio', 'Não desperdice o que resta da vida em pensam', 'historico-fundida-duplicata'],
    ['Robert Emmons', 'A gratidão é uma emoção que nasce quando rec', 'historico-fundida-duplicata'],
    ['Lao Tsé', 'O sábio não acumula tesouros para si; quanto', 'historico-fundida-duplicata'],
    ['Erich Fromm', 'A principal tarefa do ser humano na vida é d', 'historico-fundida-duplicata'],
    ['Buda', 'Aquele que compreende a impermanência não se', 'historico-fundida-duplicata'],
    ['Epicteto', 'Não peça que os acontecimentos sejam como vo', 'historico-fundida-duplicata'],
    ['Marco Aurélio', 'O impedimento à ação avança a ação. O que fi', 'historico-fundida-duplicata'],
    ['Aristóteles', 'A felicidade é uma atividade da alma conform', 'historico-fundida-duplicata'],
    ['Philip Zimbardo', 'A situação exerce uma influência maior sobre', 'historico-fundida-duplicata'],
    ['Benjamin Graham', 'O maior inimigo do investidor é a emoção.', 'historico-fundida-duplicata'],
    ['Marco Aurélio', 'O que não é bom para a colmeia não é bom par', 'historico-fundida-duplicata'],
    ['Richard Branson', 'Uma empresa deve ser uma força para melhorar', 'historico-fundida-duplicata'],
    ['Thomas Edison', 'A oportunidade é perdida pela maioria das pe', 'historico-fundida-duplicata'],
    ['Richard Branson', 'Negócios são como ônibus: sempre haverá outr', 'historico-fundida-duplicata'],
    ['Charlie Munger', 'A capacidade de esperar é uma das maiores va', 'historico-removida'],
    ['Warren Buffett', 'Leva 20 anos para construir uma reputação e ', 'historico-fundida-duplicata'],
    ['Krishna', 'O verdadeiro conhecimento é ver a mesma real', 'historico-fundida-duplicata'],
    ['Michael Porter', 'A vantagem competitiva surge das atividades ', 'historico-removida'],
    ['Helen Keller', 'O otimismo é a fé que leva à realização. Nad', 'historico-fundida-duplicata'],
    ['Aristóteles', 'As raízes da educação são amargas, mas o fru', 'historico-fundida-duplicata'],
    ['Peter Drucker', 'A melhor maneira de prever o futuro é criá-l', 'historico-fundida-duplicata'],
    ['Dale Carnegie', 'O agradecimento sincero é uma das forças mai', 'historico-removida'],
    ['Krishna', 'Aquele que abandona o apego e realiza suas a', 'historico-fundida-duplicata'],
    ['Viktor Frankl', 'Tudo pode ser tirado de um homem, exceto a ú', 'historico-fundida-duplicata'],
    ['Jesus Cristo', 'Bem-aventurados os puros de coração, porque ', 'historico-removida-restauravel'],
    ['Nicolau Maquiavel', 'Todos veem aquilo que você parece ser, pouco', 'historico-fundida-duplicata'],
    ['Kahlil Gibran', 'Sois os arcos dos quais vossos filhos são la', 'historico-fundida-duplicata'],
    ['Audre Lorde', 'Eu não sou livre enquanto alguma mulher for ', 'historico-fundida-duplicata'],
    ['J.K. Rowling', 'São as nossas escolhas, Harry, que mostram o', 'historico-fundida-duplicata'],
    ['Lao Tsé', 'O sábio não acumula para si; quanto mais ofe', 'historico-fundida-duplicata'],
    ['Epicteto', 'Não busque que tudo aconteça como você quer;', 'historico-fundida-duplicata'],
    ['Thomas Hobbes', 'Sem um poder comum capaz de manter todos em ', 'historico-fundida-duplicata'],
    ['Marco Aurélio', 'O obstáculo à ação faz avançar a ação. O que', 'historico-fundida-duplicata'],
    ['Carlos Drummond de Andrade', 'Tinha uma pedra no meio do caminho, no meio ', 'historico-fundida-duplicata'],
    ['Wolfgang Amadeus Mozart', 'Nem uma inteligência elevada nem a imaginaçã', 'historico-fundida-duplicata'],
    ['Kahlil Gibran', 'Eles são filhos e filhas da ânsia da Vida po', 'historico-fundida-duplicata'],
    ['Baruch Spinoza', 'A liberdade é compreender a necessidade.', 'historico-removida'],
    ['Michael Porter', 'Não existe estratégia sem escolha.', 'historico-fundida-duplicata'],
    ['Epicteto', 'Não são as coisas que inquietam os homens, m', 'historico-fundida-duplicata'],
    ['Epicteto', 'Não busque que os acontecimentos aconteçam c', 'historico-fundida-duplicata'],
    ['Buda', 'O ódio nunca termina pelo ódio; o ódio termi', 'historico-fundida-duplicata'],
    ['Erich Fromm', 'O amor é a única resposta e a única esperanç', 'historico-fundida-duplicata'],
    ['Epicteto', 'Não busques que os acontecimentos aconteçam ', 'historico-fundida-duplicata'],
    ['Mário Quintana', 'Eles passarão, eu passarinho.', 'historico-fundida-duplicata'],
    ['Marshall McLuhan', 'Primeiro moldamos nossas ferramentas, depois', 'historico-fundida-duplicata'],
    ['Lao Tsé', 'Quem sabe que possui o suficiente é verdadei', 'historico-fundida-duplicata'],
    ['Epicteto', 'O que impede o homem de agir não são as cois', 'historico-fundida-duplicata'],
    ['Aristóteles', 'Há três meios de persuasão: caráter do orado', 'historico-fundida-duplicata'],
    ['Viktor Frankl', 'Tudo pode ser tirado de uma pessoa, exceto u', 'historico-fundida-duplicata'],
    ['Marco Aurélio', 'Não ajas como se fosses viver dez mil anos.', 'historico-fundida-duplicata'],
    ['Buda', 'Se um homem fala ou age com uma mente pura, ', 'historico-removida-restauravel'],
    ['Sun Tzu', 'Conheça o inimigo e conheça a si mesmo; comb', 'historico-fundida-duplicata'],
    ['Marie Curie', 'Nada na vida deve ser temido, apenas compree', 'historico-fundida-duplicata'],
    ['Krishna', 'Aquele que vê o mesmo Senhor presente em tod', 'historico-fundida-duplicata'],
    ['Erich Fromm', 'A tarefa do homem é criar a si mesmo e torna', 'historico-fundida-duplicata'],
    ['Lao Tsé', 'Aquele que conhece os outros é sábio; aquele', 'historico-removida-restauravel'],
    ['Philip Fisher', 'O investidor deve procurar empresas com gran', 'historico-removida'],
    ['Gerda Lerner', 'A história das mulheres é a história da huma', 'historico-removida'],
    ['Krishna', 'Aquele que abandona o egoísmo e o apego enco', 'historico-fundida-duplicata'],
    ['William Shakespeare', 'As adversidades têm usos doces.', 'historico-fundida-duplicata'],
    ['Epicuro', 'Não estrague o que você tem desejando o que ', 'historico-fundida-duplicata'],
    ['Charlie Munger', 'Você não precisa ser brilhante; apenas preci', 'historico-fundida-duplicata'],
    ['Cícero', 'Tal amizade aumenta a prosperidade e alivia ', 'historico-fundida-duplicata'],
    ['Morgan Housel', 'A independência financeira é ter controle so', 'historico-fundida-duplicata'],
    ['Marco Aurélio', 'O obstáculo à ação promove a ação. O que fic', 'historico-fundida-duplicata'],
    ['Max Weber', 'A política é a luta pela distribuição de pod', 'historico-fundida-duplicata'],
    ['Lao Tsé', 'Aquele que conhece o Tao não fala; aquele qu', 'historico-fundida-duplicata'],
    ['Margaret Thatcher', 'Não existe dinheiro público; existe apenas d', 'historico-fundida-duplicata'],
    ['Lao Tsé', 'Aquele que se conhece é sábio; aquele que do', 'historico-fundida-duplicata']
  ];
  var STALE = [
    ['Frida Kahlo', 'Eu não pinto sonhos ou pesadelos, pinto a mi'],
    ['Carl Gustav Jung', 'Conheça todas as teorias, domine todas as té'],
    ['Arthur Ashe', 'Comece onde você está. Use o que você tem. F'],
    ['Sholom Aleichem', 'A vida é um sonho para os sábios, um jogo pa'],
    ['William James', 'A maior arma contra o estresse é nossa capac'],
    ['Eleanor Roosevelt', 'O futuro pertence àqueles que acreditam na b']
  ];
  var NOTA = {
    'historico-fundida-duplicata': '[conferido manualmente em 04/10/2026] Mesma passagem (ou paráfrase da mesma passagem) que a frase remanescente; a relação foi lida sobre o português, sem reconsultar o original. ',
    'historico-removida': '[conferido manualmente em 04/10/2026] Passagem distinta da frase remanescente, removida por outro motivo (frase sem passagem citável, paráfrase de argumento ou fonte não localizada); o motivo individual não é recuperável. ',
    'historico-removida-restauravel': '[conferido manualmente em 04/10/2026] Passagem DISTINTA da frase remanescente: a remoção parece falso positivo da deduplicação por semelhança estrutural. Só reinserir com o texto de uma edição publicada conferida. '
  };
  function aplicar() {
    var n = 0,
      ausentes = [];
    MAPA.forEach(function (m) {
      var r = window.CURADORIA_REMOVIDAS.filter(function (x) {
        return x.tipo === 'historico-removida-ou-fundida' && x.autor === m[0] && x.texto.indexOf(m[1]) === 0;
      })[0];
      if (!r) {
        ausentes.push(m[0]);
        return;
      }
      r.tipo = m[2];
      r.motivo = NOTA[m[2]] + r.motivo.replace(/^\[classificação inferida[^\]]*\]\s*/, '');
      n++;
    });
    var k = 0;
    STALE.forEach(function (m) {
      var r = window.CURADORIA_REMOVIDAS.filter(function (x) {
        return x.tipo === 'historico-quarentena-restaurada' && x.autor === m[0] && x.texto.indexOf(m[1]) === 0;
      })[0];
      if (!r) return;
      r.tipo = 'historico-quarentena';
      r.motivo = 'A frase equivalente que a "restaurava" foi removida depois, na auditoria das 49 atribuições fracas (04/10/2026); volta a constar como removida. ' + r.motivo;
      k++;
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 107: não encontrados — ' + ausentes.join('; '));
    console.log('MeMotiva · Fase 107: ' + n + ' reclassificados; ' + k + ' voltaram à quarentena.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 108 — auditoria da categoria Religiosidade ('fe'), 04/10/2026.
    Regra: só figuras ligadas a uma tradição religiosa (fundadores, profetas,
    teólogos, clérigos, santos, rabinos, textos sagrados). 135 autores/fontes
    revisados; 4 não são figuras religiosas e saem da categoria pela
    identidade do autor, não pelo assunto da frase: Max Planck (físico),
    Wangari Maathai (ambientalista), Jacques Maritain (filósofo leigo),
    Cleantes (filósofo estoico; o Hino a Zeus é texto filosófico-religioso,
    mas o autor não é figura de uma tradição religiosa). Mantidos: Schweitzer
    (pastor luterano, teólogo e médico missionário), Tillich e Niebuhr
    (teólogos), Tutu (arcebispo), Madre Teresa, Dalai Lama, Eckhart,
    Agostinho, Tomás, Jerônimo, Lutero, Francisco e as escrituras. Nenhuma
    frase foi movida PARA 'fe'. Também acrescenta a nota de reconsulta da
    atribuição a Anaïs Nin ao registro de remoções. */
  var MOVER = [
    ['Max Planck', 'Para o crente, Deus está no princípio', 'reflexao'],
    ['Wangari Maathai', 'Quando plantamos árvores', 'empoderamento'],
    ['Jacques Maritain', 'Não é a razão que se opõe à fé', 'filosofos'],
    ['Cleantes', 'Nada acontece na terra sem ti', 'filosofos'],
    ['Cleantes', 'Conduz-me, ó Zeus, e tu, Destino', 'filosofos']
  ];
  function aplicar() {
    var n = 0;
    MOVER.forEach(function (m) {
      var q = QUOTES.filter(function (x) {
        return x.author === m[0] && x.text.indexOf(m[1]) === 0 && x.cat === 'fe';
      })[0];
      if (!q) return;
      window.CURADORIA_REMOVIDAS.push({
        data: '2026-10-04',
        lote: 'Fase 3/108 — auditoria de Religiosidade',
        commit_base: '',
        commit_remocao: '',
        autor: q.author,
        texto: q.text,
        tipo: 'recategorizada',
        motivo: 'Autor não é figura ligada a uma tradição religiosa; sai de "fe" (Religiosidade) para "' + m[2] + '". Critério: identidade do autor, não o assunto da frase.',
        fontes: 'regra editorial do projeto (Religiosidade só para figuras religiosas)',
        qid: q.qid,
        fonte_anterior: q.src,
        status_anterior: q.st,
        categoria_anterior: 'fe',
        contraparte: m[2],
        similaridade: '',
        origem: 'decisão desta sessão'
      });
      q.cat = m[2];
      n++;
    });
    var nin =
      window.CURADORIA_REMOVIDAS.filter(function (r) {
        return r.autor === 'Anaïs Nin' && r.tipo === 'removida' && r.texto.indexOf('E chegou o dia') === 0;
      })[0] ||
      window.CURADORIA_REMOVIDAS.filter(function (r) {
        return r.autor === 'Anaïs Nin' && r.tipo === 'removida';
      })[0];
    if (nin)
      nin.motivo +=
        ' [reconsultado em 04/10/2026] Confirmado: o Wikiquote classifica a atribuição como "Disputed" (sem fonte na obra de Nin; Elizabeth Appell afirmou, em 2013, ter escrito o texto em 1979 para o cabeçalho de um catálogo de cursos da John F. Kennedy University), e a edição "The Quotable Anaïs Nin: 365 Quotations with Citations" afirma que o autor foi verificado como Elizabeth Appell.';
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    console.log('MeMotiva · Fase 108: ' + n + ' frases recategorizadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 109 — "o que o leitor vê tem de ser conferível" (04/10/2026).
    (1) Remove 6 frases que não passam no teste do proprietário (quem
    pesquisar a frase e a autoria precisa encontrar o mesmo): Niebuhr (autoria
    provável, não certa), Frida Kahlo (sem fonte primária), Durant (revista
    não consultada), Coelho Neto x2 e Lima Barreto/Isaías Caminha (frase não
    localizável online). (2) Notas exibidas ao leitor (notaAutoria) passam a
    ser só contexto factual curto; o processo de verificação (tradução
    própria, edição digital, ressalvas) vai para notaInterna, que NÃO aparece
    no site e sai em curadoria/notas-internas.csv. (3) Limpa o registro de
    remoções: descarta o que não é recuperável (itens "restaurada" e
    "restaurável") e troca a classificação inferida por fato verificável. */
  var REMOVER = [
    ['Reinhold Niebuhr', 'Deus, concede-nos a graça', 'Autoria sem certeza: o estudo de Fred Shapiro estima cerca de 80% de probabilidade, não confirmação. A frase só fica quando a autoria puder ser afirmada sem ressalva. Além disso, a forma que circula (a dos Alcoólicos Anônimos) não é a do texto de 1943.', 'Shapiro (Yale Alumni Magazine, 2008); Sifton (2003); conferido em 03/10/2026'],
    ['Frida Kahlo', 'Pensavam que eu era surrealista', 'A declaração circula citada em biografias (Herrera, 1983), mas a fonte primária — carta, diário ou entrevista — não foi localizada. Sem como o leitor conferir a passagem, sai.', 'Wikiquote EN Frida Kahlo; Encyclopedia.com; buscas web 03/10/2026'],
    ['Will Durant', 'A civilização é um rio com margens', 'A referência (entrevista a Jim Hicks, Life, 18-10-1963) só foi obtida em compilação de citações; a revista não foi consultada. Sem a fonte conferida, sai.', 'compilação de citações com procedência; buscas web 03/10/2026'],
    ['Coelho Neto', 'Os marinheiros guiam-se pelas estrelas', 'Busca pela frase exata não a encontrou em nenhuma fonte online indexada; o texto só existia numa transcrição digital de pesquisa, sem localização por capítulo. Quem pesquisar a frase não a encontra, então sai.', 'busca web 04/10/2026; corpus PPORTAL'],
    ['Coelho Neto', 'Nunca se deve matar uma ilusão', 'Busca pela frase exata (04/10/2026) não a encontrou em nenhuma fonte online indexada (só obras e estudos sobre A Conquista); texto de transcrição digital de pesquisa, sem capítulo identificado. Sai.', 'busca web 04/10/2026; corpus PPORTAL'],
    ['Lima Barreto', 'Há muita bondade no nosso caráter', 'Busca pela frase exata (04/10/2026) não a encontrou em nenhuma fonte online indexada (só estudos sobre Isaías Caminha); texto de transcrição digital de pesquisa, sem capítulo identificado. Sai.', 'busca web 04/10/2026; corpus PPORTAL']
  ];
  var NOTAS = [
    ['Júlio César', 'Vim, vi e venci', 'Em latim: “Veni, vidi, vici”. Relatada por Plutarco (César, 50) e Suetônio (César, 37).'],
    ['Aristóteles', 'Um amigo é uma só alma', 'Dito de Aristóteles registrado por Diógenes Laércio (V, 20).'],
    ['Thomas Edison', 'Não fracassei; apenas descobri', 'Registrada na biografia autorizada de Frank Lewis Dyer e Thomas Commerford Martin (1910).'],
    ['Fernando Pessoa', 'Tenho em mim todos os sonhos', 'Verso de “Tabacaria” (1928), de Álvaro de Campos, heterônimo de Fernando Pessoa.'],
    ['Fiódor Dostoiévski', 'Não há virtude se não há imortalidade', 'Fala de Ivan Karamázov. A síntese popular “Se Deus não existe, tudo é permitido” não aparece literalmente no romance.'],
    ['Lima Barreto', 'A pátria que quisera ter', 'Pensamento do protagonista, Policarpo Quaresma.'],
    ['Martinho Lutero', 'O verdadeiro tesouro da Igreja', ''],
    ['George Eliot', 'Para que vivemos, se não for', 'Fala de Dorothea Brooke.'],
    ['George Eliot', 'Se tivéssemos uma visão e um sentimento agudos', ''],
    ['George Eliot', 'Nada é tão bom quanto parece', 'Fala de Nancy a Godfrey.'],
    ['Louisa May Alcott', 'O amor é um grande embelezador', 'Comentário da narradora sobre Meg.'],
    ['P. T. Barnum', 'O dinheiro é, em certos aspectos', ''],
    ['Samuel Butler', 'Todos os animais, exceto o homem', '']
  ];
  function aplicar() {
    var n = 0,
      k = 0,
      ausentes = [];
    REMOVER.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r[0] && x.text.indexOf(r[1]) === 0;
      })[0];
      if (!q) {
        ausentes.push(r[0] + ' — ' + r[1]);
        return;
      }
      window.CURADORIA_REMOVIDAS.push({ data: '2026-10-04', lote: 'Critério de conferência pelo leitor', commit_base: '', commit_remocao: '', autor: q.author, texto: q.text, tipo: 'removida', motivo: r[2], fontes: r[3], qid: q.qid, fonte_anterior: q.src, status_anterior: q.st, categoria_anterior: q.cat, contraparte: '', similaridade: '', origem: 'decisão desta sessão' });
      if (typeof removerFrase === 'function') removerFrase(q.qid, r[2]);
      n++;
    });
    NOTAS.forEach(function (m) {
      var q = QUOTES.filter(function (x) {
        return x.author === m[0] && x.text.indexOf(m[1]) === 0;
      })[0];
      if (!q) return;
      if (q.notaAutoria && !q.notaInterna) q.notaInterna = q.notaAutoria;
      q.notaAutoria = m[2];
      k++;
    });
    var antes = window.CURADORIA_REMOVIDAS.length;
    /* remove NO LUGAR: a guarda e o exportador de CSV leem o array original */
    for (var i = window.CURADORIA_REMOVIDAS.length - 1; i >= 0; i--) {
      var t = window.CURADORIA_REMOVIDAS[i].tipo;
      if (t === 'historico-quarentena-restaurada' || t === 'historico-removida-restauravel') window.CURADORIA_REMOVIDAS.splice(i, 1);
    }
    window.CURADORIA_REMOVIDAS.forEach(function (r) {
      if (r.tipo === 'historico-removida' && /^\[classificação inferida/.test(r.motivo)) r.motivo = 'Presente no build antigo (3.196 frases) e ausente do v105 (3.132), sem frase equivalente no v105. Motivo individual não recuperável.';
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 109: não encontrados — ' + ausentes.join('; '));
    console.log('MeMotiva · Fase 109: ' + n + ' removidas; ' + k + ' notas ajustadas; ' + (antes - window.CURADORIA_REMOVIDAS.length) + ' registros históricos descartados.');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
  }
  /* notas-internas.csv: dentro do exportador, depois de todas as fases */
  var exp = window.CURADORIA_EXPORT_CSV;
  if (typeof exp === 'function') {
    window.CURADORIA_EXPORT_CSV = function (download) {
      var r = exp.apply(this, arguments) || {};
      var cel = function (v) {
        v = String(v == null ? '' : v);
        return /[;"\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
      };
      var linhas = QUOTES.filter(function (q) {
        return q.notaInterna;
      }).map(function (q) {
        return [q.author, q.text, q.src || '', q.notaInterna].map(cel).join(';');
      });
      r['notas-internas.csv'] = '\ufeffautor;frase;fonte;nota_interna\n' + linhas.join('\n') + '\n';
      return r;
    };
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 110 — lacunas, lote 2 (04/10/2026). Cada frase foi conferida no
    texto da obra (Standard Ebooks); a tradução para o português é fiel ao
    texto conferido. Mesma lógica da Fase 104: passa por CURADORIA_CHECAR;
    nota pública = contexto factual; processo em notaInterna. */
  var LOTE = [
    [
      'George Bernard Shaw',
      'O grande segredo, Eliza, não é ter maus modos, nem bons modos, nem qualquer outro tipo particular de modos, mas ter os mesmos modos para todas as almas humanas: em suma, comportar-se como se estivesse no Céu, onde não há vagões de terceira classe e uma alma vale tanto quanto outra.',
      'The great secret, Eliza, is not having bad manners or good manners or any other particular sort of manners, but having the same manner for all human souls: in short, behaving as if you were in Heaven, where there are no third-class carriages, and one soul is as good as another.',
      'Pigmaleão',
      'vida',
      'Pigmaleão (1913), ato V',
      'Fala de Henry Higgins a Eliza.',
      'Original em inglês conferido no texto do Standard Ebooks (ato V). Tradução própria, fiel ao texto.'
    ],
    [
      'George Bernard Shaw',
      'Independência? Isso é blasfêmia de classe média. Somos todos dependentes uns dos outros, cada alma sobre a terra.',
      "Independence? That's middle class blasphemy. We are all dependent on one another, every soul of us on earth.",
      'Pigmaleão',
      'vida',
      'Pigmaleão (1913), ato V',
      'Fala de Henry Higgins a Eliza.',
      'Original em inglês conferido no texto do Standard Ebooks (ato V). Tradução própria, fiel ao texto.'
    ],
    [
      'George Bernard Shaw',
      'As pessoas estão sempre culpando as circunstâncias pelo que são. Não acredito em circunstâncias. As pessoas que progridem neste mundo são as que se levantam e procuram as circunstâncias que querem e, se não as encontram, as criam.',
      "People are always blaming circumstances for what they are. I don't believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and, if they can't find them, make them.",
      'A Profissão da Senhora Warren',
      'motivacao',
      'A Profissão da Senhora Warren (1893; publicada em 1898), ato II',
      'Fala de Vivie Warren.',
      'Original em inglês conferido no texto do Standard Ebooks (ato II). Tradução própria, fiel ao texto.'
    ],
    [
      'Gustave Flaubert',
      'A fala humana é como uma chaleira de lata rachada, na qual batucamos melodias para fazer os ursos dançarem, quando desejaríamos comover as estrelas.',
      '',
      'Madame Bovary',
      'reflexao',
      'Madame Bovary (1857), parte II, capítulo 12',
      '',
      'Texto conferido na tradução inglesa de Eleanor Marx-Aveling (Standard Ebooks): human speech is like a cracked tin kettle, on which we hammer out tunes to make bears dance when we long to move the stars. O original francês não foi consultado nesta rodada; a tradução portuguesa segue a inglesa (a forma consagrada em português fala em caldeirão rachado). Voz do narrador.'
    ]
  ];
  function aplicar() {
    var nQ = 0,
      pulos = [],
      semObra = [];
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var qids = {};
    QUOTES.forEach(function (q) {
      qids[q.qid] = 1;
    });
    LOTE.forEach(function (r, idx) {
      var chk = window.CURADORIA_CHECAR(r[1], r[0], r[2]);
      var forte = chk.variantes.filter(function (v) {
        return v.score >= 0.7;
      });
      if (chk.exata || chk.bloqueada || forte.length) {
        pulos.push(r[0] + ' — ' + r[1].slice(0, 40));
        return;
      }
      if (
        r[3] &&
        !(
          OBRAS[r[0]] &&
          OBRAS[r[0]].some(function (o) {
            return o.t === r[3];
          })
        )
      )
        semObra.push(r[0] + ' — ' + r[3]);
      var id = 'f110' + idx.toString(36) + Math.abs((r[1].length * 2654435761) % 999983).toString(36);
      while (qids[id]) id += 'x';
      qids[id] = 1;
      var q = { author: r[0], text: r[1], src: r[5], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao', qid: id, notaAutoria: r[6], notaInterna: r[7] };
      if (r[2]) q.orig = r[2];
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (pulos.length) console.warn('MeMotiva · Fase 110: não inseridas — ' + pulos.join('; '));
    if (semObra.length) console.warn('MeMotiva · Fase 110: obra fora do catálogo — ' + semObra.join('; '));
    /* fontes melhoradas com a localização conferida no texto (04/10/2026) */
    [
      ['George Bernard Shaw', 'A diferença entre uma dama e uma florista', 'Pigmaleão (1913), ato V', 'Fala de Eliza Doolittle a Higgins.'],
      ['Gustave Flaubert', 'A linguagem humana é como um caldeirão rachado', 'Madame Bovary (1857), parte II, capítulo 12', '']
    ].forEach(function (m) {
      var q = QUOTES.filter(function (x) {
        return x.author === m[0] && x.text.indexOf(m[1]) === 0;
      })[0];
      if (q) {
        q.src = m[2];
        if (m[3]) q.notaAutoria = m[3];
      }
    });
    console.log('MeMotiva · Fase 110: +' + nQ + ' frases.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 111 — tipo das obras (04/10/2026). 412 obras estavam como "livro"
    (rótulo genérico); 167 são claramente romance, conto, teatro, poesia,
    texto sagrado, memórias, biografia, tratado, ensaio ou livro prático e
    passam a mostrar o tipo certo no cartão e na página da obra. Só entram
    os casos sem ambiguidade; o resto continua "livro". Também uniformiza o
    rótulo de 'peca' como "Teatro". */
  var MAPA = [
    ['Simone de Beauvoir', 'Os Mandarins', 'romance'],
    ['Voltaire', 'Cândido', 'romance'],
    ['Machado de Assis', 'Memórias Póstumas de Brás Cubas', 'romance'],
    ['Machado de Assis', 'Dom Casmurro', 'romance'],
    ['Machado de Assis', 'Quincas Borba', 'romance'],
    ['Clarice Lispector', 'A Hora da Estrela', 'romance'],
    ['Clarice Lispector', 'A Paixão Segundo G.H.', 'romance'],
    ['Clarice Lispector', 'Perto do Coração Selvagem', 'romance'],
    ['Jane Austen', 'Orgulho e Preconceito', 'romance'],
    ['Jane Austen', 'Emma', 'romance'],
    ['Jane Austen', 'Persuasão', 'romance'],
    ['Jane Austen', 'Razão e Sensibilidade', 'romance'],
    ['Charles Dickens', 'Oliver Twist', 'romance'],
    ['Charles Dickens', 'David Copperfield', 'romance'],
    ['Charles Dickens', 'Grandes Esperanças', 'romance'],
    ['Charles Dickens', 'A Casa Soturna', 'romance'],
    ['Victor Hugo', 'Os Miseráveis', 'romance'],
    ['Victor Hugo', 'O Corcunda de Notre-Dame', 'romance'],
    ['Liev Tolstói', 'Guerra e Paz', 'romance'],
    ['Liev Tolstói', 'Anna Kariénina', 'romance'],
    ['Liev Tolstói', 'A Morte de Ivan Ilitch', 'romance'],
    ['Oscar Wilde', 'O Retrato de Dorian Gray', 'romance'],
    ['Virginia Woolf', 'Mrs Dalloway', 'romance'],
    ['Virginia Woolf', 'Ao Farol', 'romance'],
    ['Virginia Woolf', 'Orlando', 'romance'],
    ['Mark Twain', 'As Aventuras de Huckleberry Finn', 'romance'],
    ['Mark Twain', 'As Aventuras de Tom Sawyer', 'romance'],
    ['Antoine de Saint-Exupéry', 'O Pequeno Príncipe', 'romance'],
    ['Antoine de Saint-Exupéry', 'Voo Noturno', 'romance'],
    ['J. R. R. Tolkien', 'O Senhor dos Anéis', 'romance'],
    ['J. R. R. Tolkien', 'O Hobbit', 'romance'],
    ['J. R. R. Tolkien', 'O Silmarillion', 'romance'],
    ['Honoré de Balzac', 'O Pai Goriot', 'romance'],
    ['Honoré de Balzac', 'Ilusões Perdidas', 'romance'],
    ['Honoré de Balzac', 'Eugénie Grandet', 'romance'],
    ['Honoré de Balzac', 'A Pele de Onagro', 'romance'],
    ['George Eliot', 'Middlemarch', 'romance'],
    ['George Eliot', 'O Moinho à Beira do Rio', 'romance'],
    ['George Eliot', 'Silas Marner', 'romance'],
    ['Ayn Rand', 'A Revolta de Atlas', 'romance'],
    ['Ayn Rand', 'A Nascente', 'romance'],
    ['Benjamin Constant', 'Adolphe', 'romance'],
    ['Gustave Flaubert', 'Madame Bovary', 'romance'],
    ['Gustave Flaubert', 'A Educação Sentimental', 'romance'],
    ['Oliver Goldsmith', 'O Vigário de Wakefield', 'romance'],
    ['Benjamin Disraeli', 'Sybil, ou As Duas Nações', 'romance'],
    ['Louisa May Alcott', 'Mulherzinhas', 'romance'],
    ['Louisa May Alcott', 'Homenzinhos', 'romance'],
    ['James M. Barrie', 'Peter Pan e Wendy', 'romance'],
    ['Ernest Hemingway', 'O Velho e o Mar', 'romance'],
    ['Ernest Hemingway', 'Adeus às Armas', 'romance'],
    ['Ernest Hemingway', 'Por Quem os Sinos Dobram', 'romance'],
    ['Ernest Hemingway', 'O Sol Também Se Levanta', 'romance'],
    ['Marcel Proust', 'Em Busca do Tempo Perdido', 'romance'],
    ['Alexandre Dumas', 'Os Três Mosqueteiros', 'romance'],
    ['Alexandre Dumas', 'O Conde de Monte Cristo', 'romance'],
    ['Agatha Christie', 'E Não Sobrou Nenhum', 'romance'],
    ['Agatha Christie', 'O Assassinato de Roger Ackroyd', 'romance'],
    ['Agatha Christie', 'Assassinato no Expresso do Oriente', 'romance'],
    ['José Saramago', 'Ensaio sobre a Cegueira', 'romance'],
    ['José Saramago', 'Memorial do Convento', 'romance'],
    ['José Saramago', 'O Evangelho Segundo Jesus Cristo', 'romance'],
    ['José Saramago', 'As Intermitências da Morte', 'romance'],
    ['Hermann Hesse', 'Sidarta', 'romance'],
    ['Hermann Hesse', 'O Lobo da Estepe', 'romance'],
    ['Hermann Hesse', 'Demian', 'romance'],
    ['Hermann Hesse', 'O Jogo das Contas de Vidro', 'romance'],
    ['Rabindranath Tagore', 'O Lar e o Mundo', 'romance'],
    ['Robert Louis Stevenson', 'A Ilha do Tesouro', 'romance'],
    ['Robert Louis Stevenson', 'O Médico e o Monstro', 'romance'],
    ['Marguerite Yourcenar', 'Memórias de Adriano', 'romance'],
    ['Marguerite Yourcenar', 'A Obra em Negro', 'romance'],
    ['Stendhal', 'O Vermelho e o Negro', 'romance'],
    ['Stendhal', 'A Cartuxa de Parma', 'romance'],
    ['George Sand', 'Indiana', 'romance'],
    ['George Sand', 'A Pequena Fadette', 'romance'],
    ['Érico Veríssimo', 'O Tempo e o Vento', 'romance'],
    ['Érico Veríssimo', 'Incidente em Antares', 'romance'],
    ['Érico Veríssimo', 'Olhai os Lírios do Campo', 'romance'],
    ['Aldous Huxley', 'Admirável Mundo Novo', 'romance'],
    ['Harriet Beecher Stowe', 'A Cabana do Pai Tomás', 'romance'],
    ['Madame de Staël', 'Corinne', 'romance'],
    ['Alex Haley', 'Raízes', 'romance'],
    ['Samuel Butler', 'Erewhon', 'romance'],
    ['Samuel Butler', 'O Caminho de Toda Carne', 'romance'],
    ['Alice Walker', 'A Cor Púrpura', 'romance'],
    ['Théophile Gautier', 'Mademoiselle de Maupin', 'romance'],
    ['François Mauriac', 'Thérèse Desqueyroux', 'romance'],
    ['François Mauriac', 'O Nó de Víboras', 'romance'],
    ['Coelho Neto', 'Rei Negro', 'romance'],
    ['Coelho Neto', 'A Conquista', 'romance'],
    ['Nathaniel Hawthorne', 'A Letra Escarlate', 'romance'],
    ['Nathaniel Hawthorne', 'A Casa das Sete Torres', 'romance'],
    ['Nora Ephron', 'Heartburn', 'romance'],
    ['Ring Lardner', 'You Know Me Al', 'romance'],
    ['Franz Kafka', 'A Metamorfose', 'romance'],
    ['Franz Kafka', 'O Processo', 'romance'],
    ['Franz Kafka', 'O Castelo', 'romance'],
    ['Gabriel García Márquez', 'Cem Anos de Solidão', 'romance'],
    ['Gabriel García Márquez', 'O Amor nos Tempos do Cólera', 'romance'],
    ['Gabriel García Márquez', 'Crônica de uma Morte Anunciada', 'romance'],
    ['Martha Medeiros', 'Divã', 'romance'],
    ['Machado de Assis', 'Contos', 'conto'],
    ['Clarice Lispector', 'Laços de Família', 'conto'],
    ['Charles Dickens', 'Um Conto de Natal', 'conto'],
    ['Gustave Flaubert', 'Três Contos', 'conto'],
    ['Esopo', 'Fábulas', 'conto'],
    ['Nelson Rodrigues', 'A Vida Como Ela É...', 'conto'],
    ['Caio Fernando Abreu', 'Morangos Mofados', 'conto'],
    ['Caio Fernando Abreu', 'Os Dragões Não Conhecem o Paraíso', 'conto'],
    ['Jorge Luis Borges', 'Ficções', 'conto'],
    ['Jorge Luis Borges', 'O Aleph', 'conto'],
    ['Sholom Aleichem', 'Tevye, o Leiteiro', 'conto'],
    ['William Shakespeare', 'Sonho de uma Noite de Verão', 'teatro'],
    ['William Shakespeare', 'Noite de Reis', 'teatro'],
    ['William Shakespeare', 'O Mercador de Veneza', 'teatro'],
    ['William Shakespeare', 'Henrique IV', 'teatro'],
    ['William Shakespeare', 'Como Gostais', 'teatro'],
    ['William Shakespeare', 'Júlio César', 'teatro'],
    ['Fernando Pessoa', 'Tabacaria', 'poesia'],
    ['Virgílio', 'Eneida', 'poesia'],
    ['Buda', 'Cânone páli — doutrina das três características', 'sagrado'],
    ['Jesus Cristo', 'Mateus 5', 'sagrado'],
    ['Jesus Cristo', 'Mateus 7:1–7 · Almeida Revista e Atualizada', 'sagrado'],
    ['Jesus Cristo', 'João 8:32 · Almeida Revista e Atualizada', 'sagrado'],
    ['Jesus Cristo', 'Mateus 6:19–21 · Almeida Revista e Atualizada', 'sagrado'],
    ['Jesus Cristo', 'João 13–15 · Almeida Revista e Atualizada', 'sagrado'],
    ['Jesus Cristo', 'Marcos 9:35 · Almeida Revista e Atualizada', 'sagrado'],
    ['Apóstolo Paulo', 'Cartas paulinas · Almeida Revista e Atualizada', 'sagrado'],
    ['Hillel', 'Tradição rabínica — Pirkei Avot e Talmude', 'sagrado'],
    ['Ben Zoma', 'Tradição rabínica — Pirkei Avot e Talmude', 'sagrado'],
    ['Rabi Tarfon', 'Tradição rabínica — Pirkei Avot e Talmude', 'sagrado'],
    ['Simone de Beauvoir', 'Memórias de uma Moça Bem-Comportada', 'memoria'],
    ['Bernard Montgomery', 'Memórias do Marechal Montgomery', 'memoria'],
    ['Colin Powell', 'My American Journey e palestras', 'memoria'],
    ['Ernest Renan', 'Vida de Jesus', 'biografia'],
    ['Henry Ward Beecher', 'Vida de Jesus, o Cristo', 'biografia'],
    ['Napoleão III', 'História de Júlio César', 'biografia'],
    ['Aristóteles', 'Ética a Nicômaco', 'tratado'],
    ['Aristóteles', 'Política', 'tratado'],
    ['Aristóteles', 'Metafísica', 'tratado'],
    ['Aristóteles', 'Órganon', 'tratado'],
    ['Aristóteles', 'Poética', 'tratado'],
    ['Aristóteles', 'Retórica', 'tratado'],
    ['John Locke', 'Dois Tratados sobre o Governo Civil', 'tratado'],
    ['Carl von Clausewitz', 'Da Guerra', 'tratado'],
    ['Sun Tzu', 'A Arte da Guerra', 'tratado'],
    ['Gottfried Wilhelm Leibniz', 'Teodiceia', 'tratado'],
    ['Max Weber', 'Economia e Sociedade', 'tratado'],
    ['Herbert Spencer', 'Princípios de Sociologia', 'tratado'],
    ['Michel de Montaigne', 'Ensaios', 'ensaio'],
    ['José Ortega y Gasset', 'A Rebelião das Massas', 'ensaio'],
    ['José Ortega y Gasset', 'Meditações do Quixote', 'ensaio'],
    ['Pierre-Joseph Proudhon', 'O Que é a Propriedade?', 'ensaio'],
    ['John Ruskin', 'Até Este Último', 'ensaio'],
    ['John Ruskin', 'As Pedras de Veneza', 'ensaio'],
    ['Guy Debord', 'A Sociedade do Espetáculo', 'ensaio'],
    ['Napoleon Hill', 'Quem Pensa Enriquece', 'manual'],
    ['Robert Kiyosaki', 'Pai Rico, Pai Pobre', 'manual'],
    ['John C. Maxwell', 'As 21 Irrefutáveis Leis da Liderança', 'manual'],
    ['Ken Blanchard', 'O Gerente-Minuto', 'manual'],
    ['Jim Rohn', 'Sete Estratégias para Alcançar Riqueza e Felicidade', 'manual'],
    ['Brian Tracy', 'Engula Aquele Sapo', 'manual'],
    ['Brian Tracy', 'Metas', 'manual'],
    ['Thomas J. Stanley', 'O Milionário Mora ao Lado', 'manual'],
    ['Stephen Covey', 'Os 7 Hábitos das Pessoas Altamente Eficazes', 'manual'],
    ['Stephen Covey', 'Primeiro o Mais Importante', 'manual']
  ];
  function aplicar() {
    var n = 0,
      perdidos = [];
    MAPA.forEach(function (m) {
      var lista = OBRAS[m[0]];
      var o =
        lista &&
        lista.filter(function (x) {
          return x.t === m[1];
        })[0];
      if (!o) {
        perdidos.push(m[0] + ' — ' + m[1]);
        return;
      }
      if (o.tipo === 'livro' && TIPO_OBRA[m[2]]) {
        o.tipo = m[2];
        n++;
      }
    });
    if (TIPO_OBRA.peca) TIPO_OBRA.peca.nome = 'Teatro';
    if (perdidos.length) console.warn('MeMotiva · Fase 111: obras não encontradas — ' + perdidos.slice(0, 5).join('; '));
    console.log('MeMotiva · Fase 111: ' + n + ' obras reclassificadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 112 — lacunas, lote 3 (04/10/2026): Rockefeller, conferido no texto
    integral de Random Reminiscences of Men and Events (Gutenberg #17090). */
  var LOTE = [
    [
      'John D. Rockefeller',
      'O homem que começa apenas com a ideia de enriquecer não terá sucesso; é preciso ter uma ambição maior.',
      "The man who starts out simply with the idea of getting rich won't succeed; you must have a larger ambition.",
      'Random Reminiscences of Men and Events',
      'negocios',
      'Random Reminiscences of Men and Events (1909), capítulo “Follow the Laws of Trade”',
      '',
      'Original conferido no texto integral do Project Gutenberg #17090 (espelho GITenberg); voz do próprio Rockefeller. Tradução própria, fiel ao texto.'
    ],
    [
      'John D. Rockefeller',
      'Não desperdice seu esforço numa coisa que termina num triunfo mesquinho, a menos que você se contente com uma vida de pequenos sucessos.',
      "Don't waste your effort on a thing which ends in a petty triumph unless you are satisfied with a life of petty success.",
      'Random Reminiscences of Men and Events',
      'negocios',
      'Random Reminiscences of Men and Events (1909), capítulo “Follow the Laws of Trade”',
      '',
      'Original conferido no texto integral do Project Gutenberg #17090. Tradução própria, fiel ao texto.'
    ],
    ['John D. Rockefeller', 'Não há mistério no sucesso nos negócios.', 'There is no mystery in business success.', 'Random Reminiscences of Men and Events', 'negocios', 'Random Reminiscences of Men and Events (1909), capítulo “Follow the Laws of Trade”', '', 'Original conferido no texto integral do Project Gutenberg #17090. Tradução própria, fiel ao texto.']
  ];
  function aplicar() {
    var nQ = 0,
      pulos = [];
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var qids = {};
    QUOTES.forEach(function (q) {
      qids[q.qid] = 1;
    });
    LOTE.forEach(function (r, idx) {
      var chk = window.CURADORIA_CHECAR(r[1], r[0], r[2]);
      var forte = chk.variantes.filter(function (v) {
        return v.score >= 0.7;
      });
      if (chk.exata || chk.bloqueada || forte.length) {
        pulos.push(r[0] + ' — ' + r[1].slice(0, 40));
        return;
      }
      var id = 'f112' + idx.toString(36) + Math.abs((r[1].length * 2654435761) % 999983).toString(36);
      while (qids[id]) id += 'x';
      qids[id] = 1;
      var q = { author: r[0], text: r[1], src: r[5], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao', qid: id, notaAutoria: r[6], notaInterna: r[7] };
      if (r[2]) q.orig = r[2];
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (pulos.length) console.warn('MeMotiva · Fase 112: não inseridas — ' + pulos.join('; '));
    console.log('MeMotiva · Fase 112: +' + nQ + ' frases.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 113 — lacunas, lote 4 (04/10/2026): Marie Curie, conferida no texto
    integral de Pierre Curie (1923), notas autobiográficas (Gutenberg #69617). */
  var LOTE = [
    [
      'Marie Curie',
      'A humanidade, sem dúvida, precisa de homens práticos, que tirem o melhor proveito de seu trabalho em benefício próprio, sem esquecer o interesse geral. Mas precisa também de sonhadores, para quem a busca desinteressada de um propósito é tão imperativa que se torna impossível dedicar muita atenção ao próprio benefício material.',
      'Humanity, surely, needs practical men who make the best of their work for the sake of their own interests, without forgetting the general interest. But it also needs dreamers, for whom the unselfish following of a purpose is so imperative that it becomes impossible for them to devote much attention to their own material benefit.',
      'Pierre Curie',
      'reflexao',
      'Pierre Curie (1923), notas autobiográficas de Marie Curie',
      '',
      'Original em inglês conferido no texto integral do Project Gutenberg #69617 (espelho GITenberg; edição Macmillan, 1923, tradução inglesa autorizada); voz de Marie Curie. Tradução própria, fiel ao texto.'
    ],
    [
      'Marie Curie',
      'Perguntam-me com frequência, sobretudo as mulheres, como consegui conciliar a vida familiar com uma carreira científica. Pois bem: não foi fácil; exigiu muita decisão e muito sacrifício.',
      'I have been frequently questioned, especially by women, how I could reconcile family life with a scientific career. Well, it has not been easy; it required a great deal of decision and of self-sacrifice.',
      'Pierre Curie',
      'empoderamento',
      'Pierre Curie (1923), notas autobiográficas de Marie Curie',
      '',
      'Original em inglês conferido no texto integral do Project Gutenberg #69617 (espelho GITenberg; edição Macmillan, 1923, tradução inglesa autorizada); voz de Marie Curie. Tradução própria, fiel ao texto.'
    ],
    [
      'Marie Curie',
      'Pode haver numa vida alguma direção geral, algum fio contínuo, devido a algumas ideias dominantes e a alguns sentimentos fortes, que explicam essa vida e caracterizam uma personalidade humana.',
      'But there may be in a life some general direction, some continuous thread, due to a few dominant ideas and a few strong feelings, that explain the life and are characteristic of a human personality.',
      'Pierre Curie',
      'vida',
      'Pierre Curie (1923), notas autobiográficas de Marie Curie',
      '',
      'Original em inglês conferido no texto integral do Project Gutenberg #69617 (espelho GITenberg; edição Macmillan, 1923, tradução inglesa autorizada); voz de Marie Curie. Tradução própria, fiel ao texto.'
    ]
  ];
  function aplicar() {
    var nQ = 0,
      pulos = [];
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var qids = {};
    QUOTES.forEach(function (q) {
      qids[q.qid] = 1;
    });
    LOTE.forEach(function (r, idx) {
      var chk = window.CURADORIA_CHECAR(r[1], r[0], r[2]);
      var forte = chk.variantes.filter(function (v) {
        return v.score >= 0.7;
      });
      if (chk.exata || chk.bloqueada || forte.length) {
        pulos.push(r[0] + ' — ' + r[1].slice(0, 40));
        return;
      }
      var id = 'f113' + idx.toString(36) + Math.abs((r[1].length * 2654435761) % 999983).toString(36);
      while (qids[id]) id += 'x';
      qids[id] = 1;
      var q = { author: r[0], text: r[1], src: r[5], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao', qid: id, notaAutoria: r[6], notaInterna: r[7] };
      if (r[2]) q.orig = r[2];
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (pulos.length) console.warn('MeMotiva · Fase 113: não inseridas — ' + pulos.join('; '));
    console.log('MeMotiva · Fase 113: +' + nQ + ' frases.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 114 — lacunas, lote 5 (04/10/2026): George Sand, conferida no texto de Indiana (Gutenberg #63445). */
  var LOTE = [
    [
      'George Sand',
      'É a causa de metade do gênero humano, ou antes, de todo o gênero humano; pois a infelicidade da mulher envolve a do homem, como a do escravo envolve a do senhor, e procurei demonstrá-lo em Indiana.',
      '',
      'Indiana',
      'empoderamento',
      'Prefácio à edição de 1842 de Indiana',
      '',
      'Texto conferido na tradução inglesa do Project Gutenberg #63445 (Indiana, prefácio de 1842); o original francês não foi consultado nesta rodada. Voz de George Sand. Tradução portuguesa própria, fiel ao texto inglês conferido.'
    ],
    [
      'George Sand',
      'Escrevi Indiana com um sentimento profundo e genuíno de que as leis que ainda regem a existência da mulher no casamento, na família e na sociedade são injustas e bárbaras.',
      '',
      'Indiana',
      'politica',
      'Prefácio à edição de 1842 de Indiana',
      '',
      'Texto conferido na tradução inglesa do Project Gutenberg #63445 (Indiana, prefácio de 1842); o original francês não foi consultado nesta rodada. Voz de George Sand. Tradução portuguesa própria, fiel ao texto inglês conferido.'
    ]
  ];
  function aplicar() {
    var nQ = 0,
      pulos = [];
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var qids = {};
    QUOTES.forEach(function (q) {
      qids[q.qid] = 1;
    });
    LOTE.forEach(function (r, idx) {
      var chk = window.CURADORIA_CHECAR(r[1], r[0], r[2]);
      var forte = chk.variantes.filter(function (v) {
        return v.score >= 0.7;
      });
      if (chk.exata || chk.bloqueada || forte.length) {
        pulos.push(r[0] + ' — ' + r[1].slice(0, 40));
        return;
      }
      var id = 'f114' + idx.toString(36) + Math.abs((r[1].length * 2654435761) % 999983).toString(36);
      while (qids[id]) id += 'x';
      qids[id] = 1;
      var q = { author: r[0], text: r[1], src: r[5], st: 'A', cat: cats.indexOf(r[4]) >= 0 ? r[4] : 'reflexao', qid: id, notaAutoria: r[6], notaInterna: r[7] };
      if (r[2]) q.orig = r[2];
      QUOTES.push(q);
      nQ++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
    if (pulos.length) console.warn('MeMotiva · Fase 114: não inseridas — ' + pulos.join('; '));
    console.log('MeMotiva · Fase 114: +' + nQ + ' frases.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 115 — auditoria de atribuições concorrentes (04/10/2026). Achado:
    a mesma frase registrada para autores diferentes (Epicteto/Epicuro,
    Churchill/Aristóteles, Kennedy/Einstein, Reagan/Aquino), duplicatas entre
    ditado e autor, duplicata de versículo e um rótulo errado de edição
    (o texto de Hebreus 11:1 "firme fundamento" é da Almeida Corrigida, não
    da Revista e Atualizada). Regra: atribuição concorrente sem localização
    confirmada sai; fica a que o projeto já mantém com fonte. */
  var REMOVER = [
    [
      'Epicteto',
      'A riqueza não consiste em ter grandes posses',
      'A mesma frase está no acervo atribuída a Epicteto e a Epicuro; nenhuma das duas localizações foi confirmada (a "Carta a Meneceu" não contém a frase; os "Fragmentos recolhidos por Estobeu" não foram conferidos). Atribuição concorrente sem comprovação: sai.',
      'comparação entre dois registros do acervo; Carta a Meneceu (conteúdo conhecido, não reconsultada)'
    ],
    ['Epicuro', 'A riqueza consiste não em ter grandes posses', 'A mesma frase está no acervo atribuída a Epicteto e a Epicuro; a "Carta a Meneceu" (fonte registrada) não contém a frase e nenhuma outra localização foi encontrada. Atribuição concorrente sem comprovação: sai.', 'comparação entre dois registros do acervo; Carta a Meneceu (conteúdo conhecido, não reconsultada)'],
    ['Aristóteles', 'A coragem é a primeira das qualidades humanas', 'Mesma frase, na mesma redação, que a registrada para Winston Churchill (que mantém fonte do projeto); a localização "Diógenes Laércio, V" não foi confirmada. Atribuição concorrente sem comprovação: sai.', 'comparação entre dois registros do acervo'],
    ['John F. Kennedy', 'A paz não pode ser mantida pela força', 'Mesma frase, quase na mesma redação, que a registrada para Albert Einstein, a atribuição mais difundida; para Kennedy não há discurso identificado. Atribuição concorrente sem comprovação: sai.', 'comparação entre dois registros do acervo'],
    ['Tomás de Aquino', 'A paz não é ausência de conflito', 'Mesma frase que a registrada para Ronald Reagan; a Suma Teológica não contém a formulação e nenhuma passagem foi identificada. Atribuição concorrente sem comprovação: sai.', 'comparação entre dois registros do acervo'],
    ['Carta aos Hebreus 11:1', 'A fé é a certeza das coisas que se esperam', 'Duplicata do mesmo versículo (Hebreus 11:1) já registrado em "Carta aos Hebreus"; a redação mantida é a da Almeida Corrigida.', 'comparação entre dois registros do acervo'],
    ['Ditado Popular', 'O coração tem razões que a razão desconhece', 'Duplicata de frase de autoria conhecida (Pascal, Pensamentos, 277), que permanece.', 'comparação entre dois registros do acervo'],
    ['Ditado Popular', 'Quem compra o que não precisa vende o que precisa', 'Duplicata de frase com autoria registrada (Benjamin Franklin), que permanece.', 'comparação entre dois registros do acervo'],
    ['Confúcio', 'A amizade verdadeira não depende de tempo ou distância', 'Fonte registrada ("Analectos") não confirmada; a frase tem forma de dito popular, e o acervo já tem a versão sem autor. Atribuição sem comprovação: sai.', 'comparação com o registro do dito popular; Analectos não reconsultados']
  ];
  function aplicar() {
    var n = 0,
      ausentes = [];
    REMOVER.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r[0] && x.text.indexOf(r[1]) === 0;
      })[0];
      if (!q) {
        ausentes.push(r[0] + ' — ' + r[1]);
        return;
      }
      window.CURADORIA_REMOVIDAS.push({ data: '2026-10-04', lote: 'Fase 115 — atribuições concorrentes', commit_base: '', commit_remocao: '', autor: q.author, texto: q.text, tipo: 'removida', motivo: r[2], fontes: r[3], qid: q.qid, fonte_anterior: q.src, status_anterior: q.st, categoria_anterior: q.cat, contraparte: '', similaridade: '', origem: 'decisão desta sessão' });
      if (typeof removerFrase === 'function') removerFrase(q.qid, r[2]);
      n++;
    });
    var h = QUOTES.filter(function (x) {
      return x.author === 'Carta aos Hebreus' && x.text.indexOf('A fé é o firme fundamento') === 0;
    })[0];
    if (h) {
      h.src = 'Carta aos Hebreus 11:1 · Novo Testamento — Almeida Corrigida';
    }
    if (ausentes.length) console.warn('MeMotiva · Fase 115: não encontrados — ' + ausentes.join('; '));
    console.log('MeMotiva · Fase 115: ' + n + ' removidas.');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 116 — versículos bíblicos com o texto exato de uma edição publicada
    (04/10/2026). Achado: das 104 frases bíblicas, só 17 eram trechos exatos
    de alguma edição; ~66 eram paráfrases ou redações soltas rotuladas como
    "Almeida Revista e Atualizada" (que não é a edição de nenhuma delas).
    Agora cada frase traz o texto de UMA edição verificada, conferido
    contra três edições em texto aberto (Almeida Corrigida Fiel, Almeida
    Revisada Imprensa Bíblica e Nova Versão Internacional): para cada
    versículo foi escolhida a edição cujo texto mais se aproxima da frase
    que o acervo já tinha, e a fonte exibida nomeia essa edição. Trechos que
    já eram exatos mantêm o texto e só ganham o rótulo correto. Referências
    erradas foram corrigidas (por exemplo, "Buscai primeiro o Reino" é
    Mateus 6:33, não 7:1-7; "permanece em amor" é 1 João 4:16, não João
    4:16). 7 duplicatas do mesmo versículo saem. */
  var BIBLIA = [
    ['Bíblia Sagrada', 'Toda a educação, no momento, não parece ', 'Nenhuma disciplina parece ser motivo de alegria no momento, mas sim de tristeza. Mais tarde, porém, produz fruto de justiça e paz para aqueles que por ela foram exercitados.', 'Hebreus 12:11', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Amarás o teu próximo como a ti mesmo.', 'Amarás o teu próximo como a ti mesmo.', 'Mateus 22:39', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Bem-aventurados os pacificadores, porque', 'Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.', 'Mateus 5:9', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Vinde a mim, todos os que estais cansado', 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.', 'Mateus 11:28', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro dos Salmos', 'O Senhor é meu pastor; nada me faltará.', 'O SENHOR é o meu pastor, nada me faltará.', 'Salmos 23:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro de Provérbios', 'Sobre tudo o que se deve guardar, guarda', 'Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.', 'Provérbios 4:23', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro de Eclesiastes', 'Tudo tem o seu tempo determinado, e há t', 'Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.', 'Eclesiastes 3:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Carta aos Hebreus', 'A fé é o firme fundamento das coisas que', 'A fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.', 'Hebreus 11:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Não julgueis, para que não sejais julgad', 'Não julgueis, para que não sejais julgados.', 'Mateus 7:1-7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Conhecereis a verdade, e a verdade vos l', 'Conhecereis a verdade, e a verdade vos libertará.', 'João 8:32', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Perdoai, e sereis perdoados.', 'Perdoai, e sereis perdoados.', 'Lucas 6:37', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Jesus Cristo', 'Amai os vossos inimigos e orai pelos que', 'Eu, porém, vos digo: Amai aos vossos inimigos, e orai pelos que vos perseguem.', 'Mateus 5:44', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Jesus Cristo', 'Aquele que é fiel no pouco também é fiel', 'Quem é fiel no pouco, também é fiel no muito; quem é injusto no pouco, também é injusto no muito.', 'Lucas 16:10', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Apóstolo Paulo', 'Tudo posso naquele que me fortalece.', 'Tudo posso naquele que me fortalece.', 'Filipenses 4:13', 'Nova Versão Internacional', 'substituir'],
    ['Apóstolo Paulo', 'Alegrai-vos sempre, orai sem cessar, em ', 'Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.', '1 Tessalonicenses 5:16-18', 'Almeida Corrigida Fiel', 'substituir'],
    ['Apóstolo Paulo', 'O fruto do Espírito é amor, alegria, paz', 'Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade.', 'Gálatas 5:22', 'Nova Versão Internacional', 'substituir'],
    ['Livro de Provérbios', 'Confia no Senhor de todo o teu coração e', 'Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.', 'Provérbios 3:5', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro de Provérbios', 'A sabedoria é a coisa principal; adquire', 'A sabedoria é a coisa principal; adquire, pois, a sabedoria.', 'Provérbios 4:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro dos Salmos', 'Entrega o teu caminho ao Senhor; confia ', 'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.', 'Salmos 37:5', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Livro dos Salmos', 'Aquietai-vos e sabei que eu sou Deus.', 'Aquietai-vos e sabei que eu sou Deus.', 'Salmos 46:10', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 24:16', 'O justo cai sete vezes e se levanta.', 'pois ainda que o justo caia sete vezes, tornará a erguer-se, mas os ímpios são arrastados pela calamidade.', 'Provérbios 24:16', 'Nova Versão Internacional', 'substituir'],
    ['Miqueias 6:8', 'Pratica a justiça, ama a misericórdia e ', 'Ele mostrou a você, ó homem, o que é bom e o que o Senhor exige: Pratique a justiça, ame a fidelidade e ande humildemente com o seu Deus.', 'Miquéias 6:8', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Bem-aventurados os misericordiosos, porq', 'Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia.', 'Mateus 5:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Porque onde estiver o teu tesouro, aí es', 'Porque onde estiver o teu tesouro, aí estará também o teu coração.', 'Mateus 6:19-21', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Apóstolo Paulo', 'Ainda que eu tivesse toda a fé, de manei', 'E ainda que tivesse o dom de profecia, e conhecesse todos os mistérios e toda a ciência, e ainda que tivesse toda a fé, de maneira tal que transportasse os montes, e não tivesse amor, nada seria.', '1 Coríntios 13:2', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Não se turbe o vosso coração; credes em ', 'Não se turbe o vosso coração; credes em Deus, crede também em mim.', 'João 14:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Eu sou o caminho, e a verdade, e a vida.', 'Eu sou o caminho, e a verdade, e a vida.', 'João 14:6', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'A minha graça te basta, porque o poder s', 'E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.', '2 Coríntios 12:9', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro de Deuteronômio 31:6', 'Sede fortes e corajosos; não temais.', 'Sede fortes e corajosos; não temais.', 'Deuteronômio 31:6', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Livro de Provérbios 15:1', 'A resposta branda desvia o furor, mas a ', 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.', 'Provérbios 15:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro dos Salmos 90:12', 'Ensina-nos a contar os nossos dias para ', 'Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.', 'Salmos 90:12', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro de Naum 1:7', 'O Senhor é bom, uma fortaleza no dia da ', 'O Senhor é bom, uma fortaleza no dia da angústia.', 'Naum 1:7', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Livro dos Salmos 91:1', 'Aquele que habita no esconderijo do Altí', 'Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.', 'Salmos 91:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Primeira Carta de Pedro 5:7', 'Lançando sobre ele toda a vossa ansiedad', 'Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.', '1 Pedro 5:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Carta de Tiago 1:27', 'A religião pura e imaculada para com Deu', 'A religião pura e imaculada para com Deus e Pai, é esta: Visitar os órfãos e as viúvas nas suas tribulações, e guardar-se da corrupção do mundo.', 'Tiago 1:27', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro dos Salmos 27:1', 'O Senhor é minha luz e minha salvação; a', 'O SENHOR é a minha luz e a minha salvação; a quem temerei? O SENHOR é a força da minha vida; de quem me recearei?', 'Salmos 27:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Apóstolo Paulo', 'Não andeis ansiosos por coisa alguma; an', 'Não andeis ansiosos por coisa alguma; antes, em tudo sejam os vossos pedidos conhecidos diante de Deus.', 'Filipenses 4:6', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Apóstolo Paulo', 'A paz de Deus, que excede todo entendime', 'E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus.', 'Filipenses 4:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'A quem muito foi dado, muito será exigid', 'A quem muito foi dado, muito será exigido.', 'Lucas 12:48', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Não só de pão viverá o homem, mas de tod', 'Ele, porém, respondendo, disse: Está escrito: Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.', 'Mateus 4:4', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'O maior entre vós será vosso servo.', 'O maior dentre vós será vosso servo.', 'Mateus 23:11', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Quem quiser salvar a sua vida perdê-la-á', 'Pois quem quiser salvar a sua vida, a perderá, mas quem perder a vida por minha causa, a encontrará.', 'Mateus 16:25', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Em verdade vos digo que, se não vos conv', 'e disse: Em verdade vos digo que se não vos converterdes e não vos fizerdes como crianças, de modo algum entrareis no reino dos céus.', 'Mateus 18:3', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Jesus Cristo', 'Aquele que estiver sem pecado seja o pri', 'E, como insistissem, perguntando-lhe, endireitou-se, e disse-lhes: Aquele que de entre vós está sem pecado seja o primeiro que atire pedra contra ela.', 'João 8:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Apóstolo Paulo', 'Não vos conformeis com este mundo, mas t', 'E não vos conformeis a este mundo, mas transformai-vos pela renovação da vossa mente, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.', 'Romanos 12:2', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Apóstolo Paulo', 'Todas as coisas cooperam para o bem daqu', 'E sabemos que todas as coisas concorrem para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.', 'Romanos 8:28', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Jesus Cristo', 'Seja feita a tua vontade, assim na terra', 'Seja feita a tua vontade, assim na terra como no céu.', 'Mateus 6:10', 'Almeida Corrigida Fiel', 'substituir'],
    ['Livro dos Provérbios 9:10', 'O princípio da sabedoria é o temor do Se', 'O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo a prudência.', 'Provérbios 9:10', 'Almeida Corrigida Fiel', 'substituir'],
    ['Levítico 19:18', 'Ama o teu próximo como a ti mesmo.', 'Não te vingarás nem guardarás ira contra os filhos do teu povo; mas amarás o teu próximo como a ti mesmo. Eu sou o Senhor.', 'Levítico 19:18', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Não ajunteis tesouros na terra, onde a t', 'Não ajunteis tesouros na terra, onde a traça e a ferrugem tudo consomem.', 'Mateus 6:19-21', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Buscai primeiro o Reino de Deus e a sua ', 'Buscai primeiro o Reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas.', 'Mateus 6:33', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Bem-aventurados os que têm fome e sede d', 'Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos.', 'Mateus 5:6', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Permanecei em mim, e eu permanecerei em ', 'Permanecei em mim, e eu permanecerei em vós.', 'João 15:4', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 1:7', 'O temor do Senhor é o princípio do conhe', 'O temor do Senhor é o princípio do conhecimento.', 'Provérbios 1:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 15:1', 'Uma resposta branda desvia o furor.', 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.', 'Provérbios 15:1', 'Almeida Corrigida Fiel', 'duplicata'],
    ['Provérbios 16:8', 'Melhor é o pouco com justiça do que gran', 'Melhor é o pouco com justiça, do que grandes rendas com injustiça.', 'Provérbios 16:8', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 18:22', 'Quem encontra uma esposa encontra algo e', 'Quem encontra uma esposa encontra algo excelente.', 'Provérbios 18:22', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Amai-vos uns aos outros como eu vos amei', 'O meu mandamento é este: amem-se uns aos outros como eu os amei.', 'João 15:12', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Sede misericordiosos, como também vosso ', 'Sede misericordiosos, como também vosso Pai é misericordioso.', 'Lucas 6:36', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 3:7', 'Não sejas sábio aos teus próprios olhos;', 'Não sejas sábio a teus próprios olhos; teme ao Senhor e aparta-te do mal.', 'Provérbios 3:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Eclesiastes 8:1', 'A sabedoria do homem torna seu rosto lum', 'Quem é como o sábio? E quem sabe a interpretação das coisas? A sabedoria do homem faz brilhar o seu rosto, e a dureza do seu rosto se muda.', 'Eclesiastes 8:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Eclesiastes 3:1', 'Há um tempo para todo propósito debaixo ', 'Tudo tem a sua ocasião própria, e há tempo para todo propósito debaixo do céu.', 'Eclesiastes 3:1', 'Almeida Revisada Imprensa Bíblica', 'duplicata'],
    ['Carta de Tiago 2:17', 'A fé sem obras é morta.', 'Assim também a fé, se não tiver as obras, é morta em si mesma.', 'Tiago 2:17', 'Almeida Corrigida Fiel', 'substituir'],
    ['Carta aos Colossenses 3:14', 'Revesti-vos de amor, que é o vínculo da ', 'Revesti-vos de amor, que é o vínculo da perfeição.', 'Colossenses 3:14', 'Almeida Corrigida Fiel', 'substituir'],
    ['Jesus Cristo', 'Se alguém quer ser o primeiro, será o úl', 'Assentando-se, Jesus chamou os Doze e disse: "Se alguém quiser ser o primeiro, será o último, e servo de todos".', 'Marcos 9:35', 'Nova Versão Internacional', 'substituir'],
    ['Jesus Cristo', 'Não vos preocupeis com o dia de amanhã, ', 'Portanto, não se preocupem com o amanhã, pois o amanhã se preocupará consigo mesmo. Basta a cada dia o seu próprio mal".', 'Mateus 6:34', 'Nova Versão Internacional', 'substituir'],
    ['Provérbios 17:9', 'Aquele que perdoa uma ofensa demonstra a', 'Aquele que cobre uma ofensa promove amor, mas quem a lança em rosto separa bons amigos.', 'Provérbios 17:9', 'Nova Versão Internacional', 'substituir'],
    ['Provérbios 25:11', 'Uma palavra dita no momento certo é como', 'Como maçãs de ouro em salvas de prata, assim é a palavra dita a seu tempo.', 'Provérbios 25:11', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 16:16', 'A sabedoria vale mais que as riquezas.', 'Quão melhor é adquirir a sabedoria do que o ouro! e quão mais excelente é adquirir a prudência do que a prata!', 'Provérbios 16:16', 'Almeida Corrigida Fiel', 'substituir'],
    ['1 Samuel 16:7', 'O homem vê o que está diante dos olhos, ', 'porque o Senhor não vê como vê o homem, pois o homem vê o que está diante dos olhos, porém o Senhor olha para o coração.', '1 Samuel 16:7', 'Almeida Corrigida Fiel', 'substituir'],
    ['Deuteronômio 16:20', 'A justiça, somente a justiça seguirás.', 'A justiça, somente a justiça seguirás.', 'Deuteronômio 16:20', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 17:22', 'O coração alegre serve de bom remédio, m', 'O coração alegre serve de bom remédio, mas o espírito abatido seca os ossos.', 'Provérbios 17:22', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 9:10', 'O temor do Senhor é o princípio da sabed', 'O temor do Senhor é o princípio da sabedoria.', 'Provérbios 9:10', 'Almeida Corrigida Fiel', 'duplicata'],
    ['Eclesiastes 7:8', 'Melhor é o fim das coisas do que o seu p', 'Melhor é o fim duma coisa do que o princípio; melhor é o paciente do que o arrogante.', 'Eclesiastes 7:8', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Jesus Cristo', 'Tudo quanto quereis que os homens vos fa', 'Portanto, tudo o que vós quereis que os homens vos façam, fazei-lho também vós a eles; porque esta é a lei e os profetas.', 'Mateus 7:12', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 4:18', 'O caminho dos justos é como a luz da aur', 'Mas a vereda dos justos é como a luz da aurora, que vai brilhando mais e mais até ser dia perfeito.', 'Provérbios 4:18', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 16:32', 'O homem paciente é melhor que o guerreir', 'Melhor é o homem paciente do que o guerreiro, mais vale controlar o seu espírito do que conquistar uma cidade.', 'Provérbios 16:32', 'Nova Versão Internacional', 'substituir'],
    ['Provérbios 16:18', 'O orgulho vem antes da destruição, e a a', 'O orgulho vem antes da destruição; o espírito altivo, antes da queda.', 'Provérbios 16:18', 'Nova Versão Internacional', 'substituir'],
    ['Provérbios 13:20', 'Aquele que anda com os sábios será sábio', 'Aquele que anda com os sábios será cada vez mais sábio, mas o companheiro dos tolos acabará mal.', 'Provérbios 13:20', 'Nova Versão Internacional', 'substituir'],
    ['Apóstolo Paulo', 'Não te deixes vencer pelo mal, mas vence', 'Não te deixes vencer do mal, mas vence o mal com o bem.', 'Romanos 12:21', 'Almeida Corrigida Fiel', 'substituir'],
    ['Apóstolo Paulo', 'Acima de tudo, porém, revistam-se do amo', 'Mas o trigo e o centeio não foram feridos, porque estavam cobertos.', 'Êxodo 9:32', 'Almeida Corrigida Fiel', 'duplicata'],
    ['Provérbios 20:27', 'A lâmpada do Senhor é o espírito do home', 'O espírito do homem é a lâmpada do Senhor, que esquadrinha todo o interior até o mais íntimo do ventre.', 'Provérbios 20:27', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 21:23', 'Aquele que guarda sua boca e sua língua ', 'O que guarda a sua boca e a sua língua guarda a sua alma das angústias.', 'Provérbios 21:23', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 15:13', 'O coração alegre embeleza o rosto.', 'O coração alegre aformoseia o rosto, mas pela dor do coração o espírito se abate.', 'Provérbios 15:13', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 21:21', 'Aquele que busca a justiça e a bondade e', 'Quem segue a justiça e a lealdade encontra vida, justiça e honra.', 'Provérbios 21:21', 'Nova Versão Internacional', 'substituir'],
    ['Salmos 27:1', 'O Senhor é minha luz e minha salvação; d', 'O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?', 'Salmos 27:1', 'Nova Versão Internacional', 'duplicata'],
    ['Provérbios 19:8', 'Aquele que busca a sabedoria ama a própr', 'O que adquire a sabedoria é amigo de si mesmo; o que guarda o entendimento prosperará.', 'Provérbios 19:8', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 18:21', 'A língua tem poder sobre a vida e sobre ', 'A língua tem poder sobre a vida e sobre a morte.', 'Provérbios 18:21', 'Nova Versão Internacional', 'substituir'],
    ['Provérbios 16:32', 'Aquele que é lento para irar-se é melhor', 'Melhor é o que tarda em irar-se do que o poderoso, e o que controla o seu ânimo do que aquele que toma uma cidade.', 'Provérbios 16:32', 'Almeida Corrigida Fiel', 'duplicata'],
    ['Provérbios 8:11', 'A sabedoria é mais preciosa que rubis.', 'pois a sabedoria é mais preciosa do que rubis; nada do que vocês possam desejar compara-se a ela.', 'Provérbios 8:11', 'Nova Versão Internacional', 'substituir'],
    ['Salmos 34:18', 'O Senhor está perto dos que têm o coraçã', 'O Senhor está perto dos que têm o coração quebrantado.', 'Salmos 34:18', 'Nova Versão Internacional', 'substituir'],
    ['Salmos 55:22', 'Lança sobre o Senhor a tua ansiedade, e ', 'Lança o teu fardo sobre o Senhor, e ele te susterá; nunca permitirá que o justo seja abalado.', 'Salmos 55:22', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Isaías 40:31', 'Aqueles que esperam no Senhor renovarão ', 'mas aqueles que esperam no Senhor renovam as suas forças. Voam bem alto como águias; correm e não ficam exaustos, andam e não se cansam.', 'Isaías 40:31', 'Nova Versão Internacional', 'substituir'],
    ['João 4:16', 'Aquele que permanece em amor permanece e', 'Assim conhecemos o amor que Deus tem por nós e confiamos nesse amor. Deus é amor. Todo aquele que permanece no amor permanece em Deus, e Deus nele.', '1 João 4:16', 'Nova Versão Internacional', 'substituir'],
    ['Salmos 103:8', 'O Senhor é compassivo e misericordioso, ', 'O Senhor é compassivo e misericordioso, mui paciente e cheio de amor.', 'Salmos 103:8', 'Nova Versão Internacional', 'substituir'],
    ['Salmos 89:14', 'A justiça e o direito são o fundamento d', 'Justiça e juízo são a base do teu trono; misericórdia e verdade irão adiante do teu rosto.', 'Salmos 89:14', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 31:10', 'Quem encontra uma mulher virtuosa encont', 'Álefe. Mulher virtuosa, quem a pode achar? Pois o seu valor muito excede ao de jóias preciosas.', 'Provérbios 31:10', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Provérbios 19:11', 'A sabedoria do homem o torna paciente; s', 'A sabedoria do homem lhe dá paciência; sua glória é ignorar as ofensas.', 'Provérbios 19:11', 'Nova Versão Internacional', 'substituir'],
    ['Eclesiastes 7:10', "Não digas: 'Por que os dias passados for", 'Não diga: "Por que os dias do passado foram melhores que os de hoje? " Pois não é sábio fazer tais perguntas.', 'Eclesiastes 7:10', 'Nova Versão Internacional', 'substituir'],
    ['Provérbios 22:1', 'Melhor é um bom nome do que grandes riqu', 'Vale mais ter um bom nome do que muitas riquezas; e o ser estimado é melhor do que a riqueza e o ouro.', 'Provérbios 22:1', 'Almeida Corrigida Fiel', 'substituir'],
    ['Apóstolo Paulo', 'A esperança não decepciona, porque o amo', 'e a esperança não desaponta, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado.', 'Romanos 5:5', 'Almeida Revisada Imprensa Bíblica', 'substituir'],
    ['Deuteronômio 31:6', 'Sejam fortes e corajosos; não tenham med', 'Sejam fortes e corajosos; não tenham medo.', 'Deuteronômio 31:6', 'Nova Versão Internacional', 'duplicata'],
    ['Salmos 29:11', 'O Senhor dá força ao seu povo; o Senhor ', 'O Senhor dará força ao seu povo; o Senhor abençoará o seu povo com paz.', 'Salmos 29:11', 'Almeida Corrigida Fiel', 'substituir'],
    ['Provérbios 17:17', 'Em todo tempo ama o amigo, e na angústia', 'O amigo ama em todo o tempo; e para a angústia nasce o irmão.', 'Provérbios 17:17', 'Almeida Revisada Imprensa Bíblica', 'substituir']
  ];
  function aplicar() {
    var nSub = 0,
      nRot = 0,
      nDup = 0,
      ausentes = [];
    BIBLIA.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.author === r[0] && x.text.indexOf(r[1]) === 0;
      })[0];
      if (!q) {
        ausentes.push(r[0] + ' — ' + r[1]);
        return;
      }
      if (r[5] === 'duplicata') {
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-04',
          lote: 'Fase 116 — versículos bíblicos',
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: q.text,
          tipo: 'variante-removida',
          motivo: 'Mesmo versículo (' + r[3] + ') já registrado em outra entrada; mantida a outra, com o texto exato de uma edição publicada.',
          fontes: r[4] + ' (texto aberto conferido em 04/10/2026)',
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: '',
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        if (typeof removerFrase === 'function') removerFrase(q.qid, 'duplicata de versículo');
        nDup++;
        return;
      }
      if (q.text !== r[2]) {
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-04',
          lote: 'Fase 116 — versículos bíblicos',
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: q.text,
          tipo: 'substituida',
          motivo: 'Redação solta ou paráfrase; substituída pelo texto exato de ' + r[3] + ' na edição ' + r[4] + '.',
          fontes: r[4] + ' (texto aberto conferido em 04/10/2026)',
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: r[2],
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        q.text = r[2];
        nSub++;
      } else nRot++;
      q.src = r[3] + ' · ' + r[4];
      q.st = 'A';
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 116: não encontrados — ' + ausentes.join('; '));
    console.log('MeMotiva · Fase 116: ' + nSub + ' textos substituídos; ' + nRot + ' só rótulo; ' + nDup + ' duplicatas removidas.');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof window.CURADORIA_ATUALIZAR_CONTADORES === 'function') window.CURADORIA_ATUALIZAR_CONTADORES();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 117 — verificação do campo `orig` contra textos de domínio público
    (08/10/2026). Método: o campo `orig` de cada frase foi comparado, por
    correspondência de texto normalizado, com o texto integral das edições
    do Standard Ebooks (domínio público) clonadas do GitHub. 48 frases tiveram
    o original encontrado literalmente na obra citada (registro em
    notaInterna). Na leitura dos pares português/original apareceram defeitos
    reais, corrigidos aqui: tradução que não correspondia ao original
    (Barrie, Booker T. Washington), original registrado alterado (Booker T.
    Washington, Mill, Goldsmith), obra ou capítulo errados (Christie,
    Hawthorne, Booker T. Washington) e localização acrescentada onde faltava.
    Cobertura: só a parte do acervo cujo texto está no corpus (cerca de 8 por
    cento das 633 frases com orig); o restante NÃO foi verificado por esta fase. */
  var VERIFICADAS = [
    ['f2406max', 'oscar-wilde_lady-windermeres-fan'],
    ['f241b167', 'oscar-wilde_lady-windermeres-fan'],
    ['f242d8lu', 'oscar-wilde_the-picture-of-dorian-gray'],
    ['f24463z0', 'mark-twain_the-adventures-of-huckleberry-finn'],
    ['f241n95yi', 'agatha-christie_the-mysterious-affair-at-styles'],
    ['f26c38q38', 'rabindranath-tagore_gitanjali'],
    ['f26e28t50', 'robert-louis-stevenson_treasure-island'],
    ['f26h2v98e', 'w-b-yeats_poetry'],
    ['f26i5v032', 'w-b-yeats_poetry'],
    ['f261283t82', 'nathaniel-hawthorne_the-scarlet-letter'],
    ['f26134subp', 'ambrose-bierce_the-devils-dictionary'],
    ['f26143aywd', 'ambrose-bierce_the-devils-dictionary'],
    ['f26151olur', 'john-ruskin_unto-this-last'],
    ['f262p3fgin', 'j-m-barrie_peter-and-wendy'],
    ['f264l3qokc', 'benjamin-disraeli_sybil'],
    ['f285foubtxj', 'booker-t-washington_up-from-slavery'],
    ['f31g10hv8mk', 'william-shakespeare_as-you-like-it'],
    ['f31ijuwcmv', 'william-shakespeare_hamlet'],
    ['f31kqu2up2', 'william-shakespeare_poetry'],
    ['f31lqar9x7', 'oscar-wilde_lady-windermeres-fan'],
    ['f31xrwq08s', 'john-locke_two-treatises-of-government'],
    ['f34k24vd5bf', 'john-stuart-mill_on-liberty'],
    ['f34l1dleaec', 'john-stuart-mill_on-liberty'],
    ['f63n12o7a81', 'thomas-hobbes_leviathan'],
    ['f63oge2lz4', 'thomas-hobbes_leviathan'],
    ['f63tt72ee6', 'adam-smith_the-theory-of-moral-sentiments'],
    ['f63wiftxq0', 'david-hume_a-treatise-of-human-nature'],
    ['f631al013em', 'henry-david-thoreau_walden'],
    ['f645iy9rnq', 'ambrose-bierce_the-devils-dictionary'],
    ['f646biw7kr', 'ambrose-bierce_the-devils-dictionary'],
    ['f64ujpxikb', 'george-bernard-shaw_pygmalion'],
    ['f64v12ezd96', 'george-eliot_middlemarch'],
    ['f6509h4vtv', 'lord-byron_don-juan'],
    ['f745765n44', 'booker-t-washington_up-from-slavery'],
    ['f79i7olh1u', 'j-m-barrie_peter-and-wendy'],
    ['f81no2o30y', 'nathaniel-hawthorne_the-scarlet-letter'],
    ['f862mjcl7s', 'rabindranath-tagore_gitanjali'],
    ['f880g4up09', 'oliver-goldsmith_the-vicar-of-wakefield'],
    ['f991bs44jm', 'benjamin-disraeli_sybil'],
    ['f1040keg5', 'george-eliot_middlemarch'],
    ['f1041jg7z', 'louisa-may-alcott_little-women'],
    ['f10467mwz', 'samuel-butler_the-way-of-all-flesh'],
    ['f1047e3yf', 'george-eliot_middlemarch'],
    ['f104851p7', 'george-eliot_silas-marner'],
    ['f1100d2t9', 'george-bernard-shaw_pygmalion'],
    ['f11017aj9', 'george-bernard-shaw_pygmalion'],
    ['f1102cy2w', 'george-bernard-shaw_mrs-warrens-profession'],
    ['f31bis9735', 'fyodor-dostoevsky_the-brothers-karamazov_constance-garnett']
  ];
  var CORRECOES = [
    [
      'f6411b9oalw',
      {
        text: 'Basta pensar pensamentos lindos e maravilhosos, e eles levantam você no ar.',
        src: 'Peter Pan e Wendy (1911), capítulo III',
        orig: 'You just think lovely wonderful thoughts and they lift you up in the air.',
        motivo: 'Tradução anterior (“Basta pensar em coisas alegres e o coração ganha asas”) não correspondia ao original; substituída por tradução fiel do texto conferido em Peter and Wendy, cap. III (Standard Ebooks).'
      }
    ],
    [
      'f744c1c1ih',
      {
        text: 'Eu não permitiria que homem algum, fosse qual fosse a sua cor, estreitasse e degradasse a minha alma fazendo-me odiá-lo.',
        src: 'Da Escravidão à Liberdade (1901), capítulo XI',
        orig: 'I would permit no man, no matter what his colour might be, to narrow and degrade my soul by making me hate him.',
        motivo: 'Texto anterior era paráfrase sem correspondência literal e o original registrado estava alterado (“I will permit”); substituídos pelo trecho exato de Up from Slavery, cap. XI (Standard Ebooks).'
      }
    ],
    ['f2417kjcn', { orig: 'That the sole end for which mankind are warranted, individually or collectively, in interfering with the liberty of action of any of their number, is self-protection.', motivo: 'O original registrado era a frase seguinte da mesma passagem; corrigido para a frase que a tradução traduz de fato (Sobre a Liberdade, cap. 1).' }],
    ['f74kqdnbqp', { orig: 'chose my wife as she did her wedding gown, not for a fine glossy surface, but such qualities as would wear well.', src: 'O Vigário de Wakefield (1766), capítulo 1', motivo: 'Original registrado trazia “I chose my wife,” com pontuação e sujeito alterados; corrigido para o texto de Standard Ebooks, cap. 1.' }],
    ['f241n95yi', { src: 'O Misterioso Caso de Styles (1920), capítulo XI', motivo: 'Fonte anterior (“O Retrato de Elsa Greer, 1942”) estava errada: a fala de Poirot consta em The Mysterious Affair at Styles, cap. XI (Standard Ebooks).' }],
    ['f81no2o30y', { src: 'A Letra Escarlate (1850), capítulo XXIV', motivo: 'Capítulo conferido no texto (Standard Ebooks): XXIV.' }],
    ['f261283t82', { src: 'A Letra Escarlate (1850), capítulo XX', motivo: 'Fonte anterior indicava cap. 11; a passagem está no cap. XX (Standard Ebooks).' }],
    ['f745765n44', { src: 'Discurso da Exposição de Atlanta (1895), reproduzido em Da Escravidão à Liberdade (1901), capítulo XIV', motivo: 'Passagem do discurso de Atlanta (cap. XIV de Up from Slavery); a fonte anterior (“Instituto Tuskegee”) não era a obra de onde vem a frase.' }],
    ['f285foubtxj', { src: 'Da Escravidão à Liberdade (1901), capítulo II', motivo: 'Capítulo conferido no texto (Standard Ebooks).' }],
    ['f79i7olh1u', { src: 'Peter Pan e Wendy (1911), capítulo I', motivo: 'Capítulo conferido no texto (Standard Ebooks).' }],
    ['f6509h4vtv', { src: 'Dom Juan (1819–1824), canto XIV', motivo: 'Canto conferido no texto (Standard Ebooks).' }],
    ['f63oge2lz4', { src: 'Leviatã (1651), capítulo XIII', motivo: 'Capítulo conferido no texto (Standard Ebooks).' }],
    ['f63usxuhfb', { src: 'A Riqueza das Nações (1776), livro IV, capítulo II', motivo: 'Localização conferida no texto (Standard Ebooks). Atenção: a tradução funde “intends only his own gain” (frase anterior) com a da “mão invisível”; o original registrado é só a segunda parte.' }],
    ['f63wiftxq0', { src: 'Tratado da Natureza Humana (1739–40), livro II, parte III, seção III', motivo: 'Localização conferida no texto (Standard Ebooks).' }],
    ['f631al013em', { src: 'Walden (1854), “Conclusão”', motivo: 'Localização conferida no texto (Standard Ebooks).' }]
  ];
  function aplicar() {
    var nv = 0,
      nc = 0,
      nt = 0,
      ausentes = [];
    function nota(q, t) {
      q.notaInterna = (q.notaInterna ? q.notaInterna + ' ' : '') + t;
    }
    VERIFICADAS.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.qid === r[0];
      })[0];
      if (!q) {
        ausentes.push(r[0]);
        return;
      }
      nota(q, 'Fase 117: original (campo orig) encontrado literalmente em ' + r[1] + ' (Standard Ebooks, domínio público), conferido em 08/10/2026.');
      nv++;
    });
    CORRECOES.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
          return x.qid === r[0];
        })[0],
        d = r[1];
      if (!q) {
        ausentes.push(r[0]);
        return;
      }
      if (d.text && d.text !== q.text) {
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-08',
          lote: 'Fase 117 — verificação de orig',
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: q.text,
          tipo: 'substituida',
          motivo: d.motivo,
          fontes: 'Standard Ebooks (texto de domínio público), conferido em 08/10/2026',
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: d.text,
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        q.text = d.text;
        nt++;
      }
      if (d.orig) q.orig = d.orig;
      if (d.src) q.src = d.src;
      nota(q, 'Fase 117 (correção): ' + d.motivo);
      nc++;
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 117: qid não encontrado — ' + ausentes.join(', '));
    console.log('MeMotiva · Fase 117: ' + nv + ' originais conferidos; ' + nc + ' correções (' + nt + ' textos substituídos).');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 118 — auditoria das frases A− com fonte genérica: Jane Austen
    ("Romance de Jane Austen") e Charles Dickens ("Romance de Charles
    Dickens"), 08/10/2026. Método: texto integral de Emma, Orgulho e
    Preconceito, Um Conto de Natal e Um Conto de Duas Cidades (Standard
    Ebooks, domínio público) lido por correspondência de texto; duas frases
    (Northanger Abbey; Razão e Sensibilidade) confirmadas por várias fontes
    independentes de citação com a obra identificada, sem acesso ao texto
    integral. Frases não localizadas em nenhuma obra consultada foram
    removidas (registro em CURADORIA_REMOVIDAS). */
  var OPS = [
    { op: 'c', qid: 'q5b3i4g8zkjbr', text: null, orig: 'it was the age of wisdom, it was the age of foolishness', src: 'Um Conto de Duas Cidades (1859), livro I, capítulo 1', nota: null, st: 'A' },
    { op: 'c', qid: 'q1tjh14wxlxe6o', text: null, orig: 'we had everything before us, we had nothing before us', src: 'Um Conto de Duas Cidades (1859), livro I, capítulo 1', nota: null, st: 'A' },
    { op: 'c', qid: 'q1q3n0sof1upn1', text: null, orig: 'we were all going direct to Heaven, we were all going direct the other way', src: 'Um Conto de Duas Cidades (1859), livro I, capítulo 1', nota: null, st: 'A' },
    { op: 'c', qid: 'qod17tg6w176r', text: null, orig: 'it was the epoch of belief, it was the epoch of incredulity', src: 'Um Conto de Duas Cidades (1859), livro I, capítulo 1', nota: null, st: 'A' },
    { op: 'c', qid: 'q9ooi5o5vv7ti', text: null, orig: 'it was the spring of hope, it was the winter of despair', src: 'Um Conto de Duas Cidades (1859), livro I, capítulo 1', nota: null, st: 'A' },
    { op: 'c', qid: 'qdk30rc1bhyhwh', text: null, orig: 'some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only', src: 'Um Conto de Duas Cidades (1859), livro I, capítulo 1', nota: null, st: 'A' },
    { op: 'c', qid: 'qcxsuai104ib5i', text: null, orig: 'There is nothing in the world so irresistibly contagious as laughter and good humour', src: 'Um Conto de Natal (1843), Estrofe III', nota: null, st: 'A' },
    { op: 'c', qid: 'q1is8xso19jmupg', text: null, orig: 'God bless us, every one!', src: 'Um Conto de Natal (1843), Estrofe III', nota: 'Fala de Tiny Tim.', st: 'A' },
    { op: 'c', qid: 'q1unbqas1jtqphl', text: null, orig: 'A lady’s imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.', src: 'Orgulho e Preconceito (1813), capítulo VI', nota: 'Fala do sr. Darcy.', st: 'A' },
    { op: 'c', qid: 'q1dpaz701tksevg', text: null, orig: 'there is no enjoyment like reading!', src: 'Orgulho e Preconceito (1813), capítulo XI', nota: 'Fala de Caroline Bingley.', st: 'A' },
    { op: 'c', qid: 'q1w283po1yjv0yl', text: null, orig: 'There is no charm equal to tenderness of heart', src: 'Emma (1815), capítulo XXXI', nota: 'Pensamento de Emma.', st: 'A' },
    { op: 'c', qid: 'qs2bu9k1pd9tfc', text: null, orig: 'Think only of the past as its remembrance gives you pleasure.', src: 'Orgulho e Preconceito (1813), capítulo LVIII', nota: 'Fala de Elizabeth Bennet.', st: 'A' },
    { op: 'c', qid: 'qplu7g11n21jgv', text: null, orig: 'Angry people are not always wise.', src: 'Orgulho e Preconceito (1813), capítulo XLV', nota: null, st: 'A' },
    { op: 'c', qid: 'q1d17egkrp5n4r', text: null, orig: 'One half of the world cannot understand the pleasures of the other.', src: 'Emma (1815), capítulo IX', nota: 'Fala de Emma.', st: 'A' },
    { op: 'c', qid: 'q12a3q81umvi2k', text: 'É muito injusto julgar a conduta de alguém sem um conhecimento íntimo de sua situação.', orig: 'It is very unfair to judge of anybody’s conduct, without an intimate knowledge of their situation.', src: 'Emma (1815), capítulo XVIII', nota: 'Fala de personagem.', st: 'A' },
    { op: 'c', qid: 'qsrmkqg1i7vuc5', text: 'A felicidade no casamento é inteiramente uma questão de sorte.', orig: 'Happiness in marriage is entirely a matter of chance.', src: 'Orgulho e Preconceito (1813), capítulo VI', nota: 'Fala de Charlotte Lucas.', st: 'A' },
    { op: 'r', qid: 'q1fe8myc6o4w0v', motivo: 'Variante da frase de Charlotte Lucas (P&P, cap. VI, “Happiness in marriage is entirely a matter of chance”) com sentido alterado (“boa vontade”); mantida a entrada com o texto literal.' },
    { op: 'c', qid: 'qvw4wcz1hrpf3', text: 'Conheça a sua própria felicidade. Você não quer nada além de paciência — ou dê-lhe um nome mais fascinante: chame-a de esperança.', orig: 'Know your own happiness. You want nothing but patience—or give it a more fascinating name, call it hope.', src: 'Razão e Sensibilidade (1811)', nota: 'Fala de personagem.', st: 'A' },
    { op: 'c', qid: 'qj8rwi0aji62n', src: 'Emma (1815), capítulo XXXII', text: null, orig: null, nota: null, st: null },
    { op: 'c', qid: 'q1fwm0vx1tbmnfs', text: null, orig: 'Friendship is certainly the finest balm for the pangs of disappointed love.', src: 'A Abadia de Northanger (1817)', nota: 'Comentário da narradora.', st: 'A' },
    { op: 'r', qid: 'q11vfoy818fnhgh', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'qpaixe0jx6ei6', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'q1nzwj0r1r39o3t', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'qcy25e8rxydkj', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'qy5uefk16eo5ca', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'q90tag014u0gkm', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'quccxxg1j0rq71', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' },
    { op: 'r', qid: 'q1h6gcug15gf5ft', motivo: 'Não localizada em Emma nem em Orgulho e Preconceito (texto integral lido) nem confirmada em outra obra de Austen; fonte anterior sem obra identificada ("Romance de Jane Austen").' }
  ];
  function aplicar() {
    var nc = 0,
      nr = 0,
      nt = 0,
      ausentes = [];
    OPS.forEach(function (o) {
      var q = QUOTES.filter(function (x) {
        return x.qid === o.qid;
      })[0];
      if (!q) {
        ausentes.push(o.qid);
        return;
      }
      if (o.op === 'r') {
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-08',
          lote: 'Fase 118 — auditoria A−/fonte genérica (Austen, Dickens)',
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: q.text,
          tipo: 'removida',
          motivo: o.motivo,
          fontes: 'texto integral de Emma e Orgulho e Preconceito (Standard Ebooks), lido em 08/10/2026',
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: '',
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        if (typeof removerFrase === 'function') removerFrase(q.qid, o.motivo);
        nr++;
        return;
      }
      if (o.text && o.text !== q.text) {
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-08',
          lote: 'Fase 118 — auditoria A−/fonte genérica (Austen, Dickens)',
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: q.text,
          tipo: 'substituida',
          motivo: 'Tradução ajustada ao original conferido na obra.',
          fontes: 'Standard Ebooks / fontes de citação com obra identificada, 08/10/2026',
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: o.text,
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        q.text = o.text;
        nt++;
      }
      if (o.orig) q.orig = o.orig;
      if (o.src) q.src = o.src;
      if (o.st) q.st = o.st;
      if (o.nota) q.notaAutoria = o.nota;
      q.notaInterna = (q.notaInterna ? q.notaInterna + ' ' : '') + 'Fase 118 (08/10/2026): localização e original conferidos; fonte anterior era genérica.';
      nc++;
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 118: qid não encontrado — ' + ausentes.join(', '));
    console.log('MeMotiva · Fase 118: ' + nc + ' frases corrigidas/confirmadas (' + nt + ' textos ajustados); ' + nr + ' removidas.');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();
