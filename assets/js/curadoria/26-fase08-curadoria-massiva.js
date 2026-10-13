/* MeMotiva — curadoria/26-fase08-curadoria-massiva.js
   Fase 8 — curadoria massiva.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 8 — CURADORIA MASSIVA
   Passe 1: eliminação de atribuições insustentáveis (§3, §4, §20)
   Passe 2: duplicatas e atribuições conflitantes (§22 anterior)
   Passe 3: panoramas individuais (§6, §7)
   Passe 4: obras e descrições (§10, §12)
   Passe 5: checkpoint de progresso (§17, §18)
   Módulo aditivo. Nada é apagado sem regra explícita do documento.
   ================================================================ */

/* Contadores da Fase 8 (antes chamados F8; o nome antigo continua exposto em
   window.F8 para compatibilidade com o console). As demais fases têm objetos
   de relatório com o mesmo padrão: RELATORIO_FASE20, RELATORIO_FASE21… */
const RELATORIO_FASE8 = { removidasParafrase: 0, removidasPopular: 0, removidasDuplicata: 0, autoriaCorrigida: 0, panoramas: 0, obras: 0, descricoes: 0, frasesNovas: 0 };

/* ----------------------------------------------------------------
   PASSE 1 — §4 e §20
   O acervo declara, no próprio campo de fonte, que 223 registros não
   são citações literais ("Paráfrase da doutrina estoica de Sêneca —
   não é citação literal"). Pelo critério do projeto, isso não é uma
   frase do autor: é um resumo de doutrina. Sai do banco.
   Outros 35 registros são atribuição popular sem fonte primária
   localizada. §4 determina remoção.
   ---------------------------------------------------------------- */
(function eliminarInsustentaveis() {
  const alvo = [];
  QUOTES.forEach((q) => {
    if (q.st !== 'P') return;
    if (/par[áa]frase/i.test(q.src || '')) alvo.push([q.qid, 'paráfrase declarada — não é citação literal do autor']);
    else alvo.push([q.qid, 'atribuição popular sem fonte primária localizada']);
  });
  alvo.forEach(([qid, motivo]) => {
    const r = removerFrase(qid, motivo);
    if (!r.ok) return;
    if (/par[áa]frase/.test(motivo)) RELATORIO_FASE8.removidasParafrase++;
    else RELATORIO_FASE8.removidasPopular++;
  });
})();

/* ----------------------------------------------------------------
   PASSE 2a — duplicatas dentro do mesmo autor
   Quando duas frases do mesmo autor são a mesma passagem em redação
   ligeiramente diferente, permanece a de melhor procedência; havendo
   empate, permanece a mais completa.
   ---------------------------------------------------------------- */
function _normDup(t) {
  return String(t)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function _tokDup(t) {
  return new Set(
    _normDup(t)
      .split(' ')
      .filter((w) => w.length > 3)
  );
}
function _simDup(a, b) {
  if (!a.size || !b.size) return 0;
  let i = 0;
  a.forEach((w) => {
    if (b.has(w)) i++;
  });
  return i / Math.min(a.size, b.size);
}
const _PESO_ST = { A: 5, B: 4, 'A-': 3, R: 1, X: 1, P: 0 };
(function removerDuplicatas() {
  const porAutor = {};
  QUOTES.forEach((q) => {
    const a = canonAuthor(q.author);
    (porAutor[a] = porAutor[a] || []).push(q);
  });
  const paraRemover = [];
  Object.values(porAutor).forEach((lista) => {
    if (lista.length < 2) return;
    const T = lista.map((q) => _tokDup(q.text));
    const morto = new Set();
    for (let x = 0; x < lista.length; x++) {
      if (morto.has(x)) continue;
      for (let y = x + 1; y < lista.length; y++) {
        if (morto.has(y)) continue;
        if (_simDup(T[x], T[y]) < 0.8) continue;
        /* decide quem fica */
        const a = lista[x],
          b = lista[y];
        const pa = (_PESO_ST[a.st] || 0) * 100 + (a.src ? a.src.length : 0) * 0 + (a.fonteGenerica ? 0 : 50) + a.text.length * 0.01;
        const pb = (_PESO_ST[b.st] || 0) * 100 + (b.fonteGenerica ? 0 : 50) + b.text.length * 0.01;
        if (pa >= pb) {
          morto.add(y);
          paraRemover.push([b.qid, 'variante da mesma passagem já presente no acervo']);
        } else {
          morto.add(x);
          paraRemover.push([a.qid, 'variante da mesma passagem já presente no acervo']);
          break;
        }
      }
    }
  });
  paraRemover.forEach(([qid, m]) => {
    if (removerFrase(qid, m).ok) RELATORIO_FASE8.removidasDuplicata++;
  });
})();

/* ----------------------------------------------------------------
   PASSE 2b — atribuições conflitantes e nomes duplicados
   Mesma frase atribuída a duas pessoas diferentes, ou a mesma pessoa
   gravada com duas grafias. Resolvido por evidência documental.
   ---------------------------------------------------------------- */
const RECONCILIACAO = [
  /* [grafia errada, grafia canônica] */
  ['Soren Kierkegaard', 'Søren Kierkegaard'],
  ['Sir Arthur Lewis', 'William Arthur Lewis'],
  ['Clayton Christensen Institute', 'Clayton Christensen']
];
(function reconciliarNomes() {
  RECONCILIACAO.forEach(([errado, certo]) => {
    QUOTES.forEach((q) => {
      if (canonAuthor(q.author) === errado) {
        q.author = certo;
        RELATORIO_FASE8.autoriaCorrigida++;
      }
    });
  });
  reindexarQuotes();
})();

/* Atribuições disputadas com evidência documental conhecida. */
const DISPUTAS = [
  { frag: 'gestão é fazer as coisas direito', manter: 'Peter Drucker', remover: 'Warren Bennis', nota: 'A formulação circula pelos dois; o registro mais antigo localizado está em Drucker, The Effective Executive (1967).' },
  { frag: 'coisas não estão falhando', manter: 'Elon Musk', remover: 'Tom Peters', nota: 'Declaração registrada de Musk em entrevistas; a atribuição a Tom Peters não tem registro localizado.' },
  { frag: 'fracasso é uma opção', manter: 'Elon Musk', remover: 'Tom Peters', nota: 'Mesma passagem da anterior.' }
];
(function resolverDisputas() {
  DISPUTAS.forEach((d) => {
    QUOTES.filter((q) => canonAuthor(q.author) === d.remover && _normDup(q.text).includes(_normDup(d.frag))).forEach((q) => {
      if (removerFrase(q.qid, 'atribuição disputada resolvida em favor de ' + d.manter + '. ' + d.nota).ok) RELATORIO_FASE8.autoriaCorrigida++;
    });
  });
})();

/* ----------------------------------------------------------------
   PASSE 3 — PANORAMAS INDIVIDUAIS (§6, §7)
   Cada entrada foi escrita a partir de pesquisa sobre a pessoa.
   Nenhuma data, obra ou feito foi incluído sem sustentação.
   Quando uma informação não pôde ser confirmada, ela não aparece.
   ---------------------------------------------------------------- */
const PANORAMAS_F8 = {
  'Bill Gates': {
    papel: 'Empresário e filantropo norte-americano (1955–)',
    resumo: 'Fundou a Microsoft aos vinte anos, tornou-se o homem mais rico do mundo e depois transferiu a maior parte da fortuna para uma fundação de saúde global.',
    bio: [
      'William Henry Gates III nasceu em Seattle em 28 de outubro de 1955, filho de um advogado e de uma executiva que integrava conselhos de grandes organizações. Foi matriculado na Lakeside School, uma escola particular que em 1968 comprou tempo de uso num terminal de computador — acesso raríssimo para adolescentes na época. Foi ali que conheceu Paul Allen e passou a programar obsessivamente.',
      'Entrou em Harvard em 1973 e abandonou o curso dois anos depois, quando ele e Allen viram na capa da revista Popular Electronics o microcomputador Altair 8800 e decidiram escrever um interpretador BASIC para a máquina. A Microsoft nasceu em 1975. O momento decisivo veio em 1980: a IBM procurava um sistema operacional para seu computador pessoal, e a Microsoft licenciou o produto sem ceder a exclusividade. Essa cláusula permitiu vender o MS-DOS a todos os fabricantes de clones e definiu a indústria pelos vinte anos seguintes.',
      'O domínio veio acompanhado de processos antitruste. Nos anos 1990 o Departamento de Justiça dos Estados Unidos acusou a Microsoft de abuso de posição dominante ao integrar o Internet Explorer ao Windows; o caso terminou em acordo em 2001, depois de uma sentença de primeira instância que chegou a determinar a divisão da empresa.',
      'A partir de 2000, com a criação da Bill & Melinda Gates Foundation, Gates deslocou o foco para saúde global, saneamento, agricultura e educação, com atuação particularmente forte em vacinação infantil, malária e poliomielite. Deixou a função executiva na Microsoft em 2008 e o conselho em 2020. Com Warren Buffett, criou o Giving Pledge, compromisso público de doação da maior parte da fortuna. Nos últimos anos passou a escrever sobre pandemias e mudança climática.'
    ],
    contexto: 'A trajetória de Gates coincide com o deslocamento do computador do centro de processamento das grandes corporações para a mesa de cada pessoa. Sua aposta central não foi no equipamento, e sim no software, num momento em que o setor tratava programas como acessório do hardware. Essa inversão explica tanto a fortuna quanto a controvérsia antitruste.',
    contribuicoes: [
      'Cofundou a Microsoft em 1975 e conduziu a empresa até a posição de plataforma dominante da computação pessoal.',
      'Estabeleceu o software licenciado como produto autônomo, e não como acessório do equipamento.',
      'Criou com Melinda French Gates a maior fundação filantrópica privada do mundo, com foco em saúde global.',
      'Financiou campanhas de erradicação da poliomielite e de combate à malária, à tuberculose e ao HIV.',
      'Criou o Giving Pledge com Warren Buffett, que reúne centenas de bilionários comprometidos com a doação da maior parte do patrimônio.'
    ],
    cronologia: [
      [1955, 'Nasce em Seattle, Washington.'],
      [1975, 'Funda a Microsoft com Paul Allen.'],
      [1980, 'Licencia o MS-DOS à IBM sem exclusividade.'],
      [1985, 'Lançamento do Windows 1.0.'],
      [1995, 'Publica The Road Ahead.'],
      [2000, 'Cria a fundação com Melinda French Gates.'],
      [2008, 'Deixa a função executiva diária na Microsoft.'],
      [2010, 'Lança o Giving Pledge com Warren Buffett.'],
      [2020, 'Deixa o conselho da Microsoft.']
    ]
  },

  'Robert Greene': {
    papel: 'Escritor norte-americano (1959–)',
    resumo: 'Escreve sobre poder, sedução e domínio de um ofício reunindo episódios históricos em manuais de comportamento que provocam tanto adesão quanto rejeição.',
    bio: [
      'Robert Greene nasceu em Los Angeles em 1959 e formou-se em estudos clássicos na Universidade da Califórnia em Berkeley e na Universidade de Wisconsin-Madison. Antes de escrever livros, passou por dezenas de empregos instáveis: tradutor, redator de revista, roteirista, trabalhador em obra, funcionário de hotel em Paris.',
      'A virada veio em 1995, num encontro em Veneza com o produtor Joost Elffers, a quem apresentou a ideia de um livro sobre poder inspirado em Maquiavel e nos moralistas franceses. As 48 Leis do Poder saiu em 1998 e vendeu milhões de exemplares, com circulação particularmente forte entre presidiários, rappers e executivos — combinação que virou parte da lenda em torno da obra.',
      'Os livros seguintes ampliaram o método: reunir centenas de episódios históricos e biográficos em torno de um comportamento humano e extrair regras. A Arte da Sedução tratou da atração, Maestria estudou o caminho de aprendizes até a excelência a partir de figuras como Leonardo da Vinci, Darwin e Coltrane, e As Leis da Natureza Humana voltou-se à psicologia do comportamento. Em 2018 sofreu um acidente vascular cerebral que afetou seus movimentos, episódio sobre o qual passou a falar publicamente.'
    ],
    contexto: 'Greene escreve na tradição dos moralistas — Maquiavel, La Rochefoucauld, Gracián — que descrevem o comportamento humano como ele é, e não como deveria ser. Isso explica a recepção dividida: parte dos leitores vê descrição realista, parte vê manual de manipulação. Ele próprio sustenta que conhecer as regras do poder é a única defesa contra quem as usa.',
    contribuicoes: [
      'Escreveu As 48 Leis do Poder (1998), um dos livros de não ficção mais vendidos e mais discutidos das últimas décadas.',
      'Recuperou para o leitor contemporâneo a tradição dos moralistas europeus sobre estratégia e comportamento.',
      'Formulou em Maestria (2012) um modelo de desenvolvimento de excelência baseado em aprendizado longo e aprendizado por imersão.',
      'Popularizou o estudo comparado de biografias como método de análise de comportamento.'
    ],
    cronologia: [
      [1959, 'Nasce em Los Angeles.'],
      [1998, 'Publica As 48 Leis do Poder.'],
      [2001, 'Publica A Arte da Sedução.'],
      [2006, 'Publica As 33 Estratégias da Guerra.'],
      [2012, 'Publica Maestria.'],
      [2018, 'Publica As Leis da Natureza Humana.']
    ]
  },

  'Elon Musk': {
    papel: 'Empresário sul-africano naturalizado norte-americano (1971–)',
    resumo: 'Construiu empresas em setores considerados fechados — foguetes, automóveis elétricos — e tornou-se uma das figuras públicas mais influentes e mais contestadas de sua geração.',
    bio: [
      'Elon Reeve Musk nasceu em Pretória, África do Sul, em 28 de junho de 1971. Aprendeu a programar sozinho ainda criança e vendeu aos doze anos um jogo para uma revista de informática. Saiu do país aos dezessete para evitar o serviço militar do regime do apartheid, estudou no Canadá e concluiu a graduação em física e economia na Universidade da Pensilvânia.',
      'Abandonou o doutorado em Stanford após dois dias para fundar a Zip2, vendida em 1999. Com o dinheiro criou a X.com, que após fusão se tornou o PayPal, vendido ao eBay em 2002. Investiu praticamente todo o resultado em duas apostas que o mercado considerava insensatas: a SpaceX, fundada em 2002, e a Tesla, na qual entrou em 2004 como investidor e presidente do conselho.',
      'Ambas quase faliram em 2008. A SpaceX conseguiu colocar o foguete Falcon 1 em órbita na quarta tentativa, depois de três fracassos, e obteve um contrato da NASA que salvou a empresa. A Tesla sobreviveu a uma sequência de crises de produção. A SpaceX viria a ser a primeira empresa privada a levar astronautas à Estação Espacial Internacional e desenvolveu foguetes de primeiro estágio reutilizáveis, reduzindo drasticamente o custo de acesso ao espaço.',
      'Musk também fundou ou dirige a Neuralink, a Boring Company e a xAI, e comprou o Twitter em 2022, renomeando-o como X. Sua atuação pública, marcada por declarações polêmicas e envolvimento político direto, tornou-se objeto de disputa tão intensa quanto suas empresas.'
    ],
    contexto: 'Musk age num período em que a exploração espacial havia migrado do Estado para a iniciativa privada e em que a indústria automobilística resistia à eletrificação. Sua estratégia recorrente é a integração vertical extrema — fabricar internamente o que o setor terceiriza — combinada a metas públicas deliberadamente improváveis.',
    contribuicoes: [
      'Fundou a SpaceX, que desenvolveu o primeiro foguete orbital de primeiro estágio reutilizável e reduziu radicalmente o custo de lançamento.',
      'Conduziu a Tesla à condição de fabricante que tornou o automóvel elétrico produto de massa.',
      'Participou da criação do PayPal, um dos primeiros sistemas de pagamento digital em escala.',
      'Fundou a Neuralink, dedicada a interfaces entre cérebro e computador, e a Boring Company, de túneis urbanos.',
      'Cofundou a OpenAI em 2015, da qual depois se afastou.'
    ]
  },

  'Max Weber': {
    papel: 'Sociólogo, jurista e economista alemão (1864–1920)',
    resumo: 'Fundador da sociologia moderna, explicou como o mundo se tornou racional, burocrático e desencantado.',
    bio: [
      'Maximilian Karl Emil Weber nasceu em Erfurt, na Turíngia, em 21 de abril de 1864, filho de um político liberal do partido nacional-liberal e de uma mãe calvinista de forte formação religiosa. A tensão entre o pai mundano e a mãe austera atravessou sua vida. Estudou direito, história, economia e filosofia em Heidelberg, Berlim e Göttingen, e tornou-se professor muito jovem.',
      'Em 1897, após uma discussão violenta com o pai, que morreu poucas semanas depois sem reconciliação, Weber entrou num colapso nervoso que o afastou do ensino por quase cinco anos. Foi durante e depois desse período de silêncio que escreveu sua obra mais conhecida, A Ética Protestante e o Espírito do Capitalismo, publicada em dois artigos em 1904 e 1905.',
      'A tese central é que a ascese intramundana do protestantismo — sobretudo o calvinismo, com sua doutrina da predestinação e a busca de sinais de graça no êxito do trabalho — produziu uma disposição psicológica favorável ao acúmulo racional, disciplinado e reinvestido. O capitalismo, uma vez estabelecido, dispensou a religião que o gerou e se tornou uma ordem que se impõe a todos.',
      'Weber formulou a sociologia compreensiva, que busca entender o sentido que o agente atribui à própria ação, e desenvolveu instrumentos conceituais ainda em uso: os tipos ideais, os três tipos de dominação legítima (racional-legal, tradicional e carismática), a definição do Estado pelo monopólio da violência física legítima e o diagnóstico do desencantamento do mundo. Participou da redação da Constituição de Weimar e da delegação alemã em Versalhes. Morreu de pneumonia em Munique, aos 56 anos, durante a pandemia de gripe de 1918-1920, deixando inacabada Economia e Sociedade, publicada postumamente pela viúva Marianne Weber.'
    ],
    contexto: 'Weber escreve na Alemanha recém-unificada, em industrialização acelerada, dividida entre a herança agrária prussiana e uma burguesia urbana em ascensão. Sua obra é uma resposta ao marxismo: sem negar o peso da economia, recusa que ela explique tudo e mostra que ideias religiosas podem produzir efeitos materiais.',
    contribuicoes: [
      'Fundou a sociologia compreensiva, centrada no sentido que o agente atribui à própria ação.',
      'Formulou a tese da relação entre a ética protestante e a formação do espírito do capitalismo.',
      'Criou o instrumento metodológico do tipo ideal.',
      'Definiu o Estado moderno pelo monopólio do uso legítimo da violência física em um território.',
      'Estabeleceu a tipologia das três formas de dominação legítima: racional-legal, tradicional e carismática.',
      'Diagnosticou o desencantamento do mundo como consequência da racionalização ocidental.',
      'Distinguiu ética da convicção e ética da responsabilidade em A Política como Vocação.'
    ],
    cronologia: [
      [1864, 'Nasce em Erfurt, em 21 de abril.'],
      [1889, 'Doutora-se em direito com tese sobre sociedades comerciais medievais.'],
      [1897, 'Morte do pai e início de um colapso que o afasta do ensino.'],
      [1904, 'Publica a primeira parte de A Ética Protestante.'],
      [1917, 'Profere Ciência como Vocação em Munique.'],
      [1919, 'Profere A Política como Vocação; participa da comissão constitucional de Weimar.'],
      [1920, 'Morre em Munique, aos 56 anos.'],
      [1922, 'Economia e Sociedade é publicada postumamente.']
    ],
    nota: 'A expressão traduzida como "jaula de ferro" é, no original alemão, stahlhartes Gehäuse — literalmente uma crosta rígida de aço. A forma consagrada em português vem da tradução inglesa de Talcott Parsons.'
  },

  'Mary Parker Follett': {
    papel: 'Teórica da administração e cientista social norte-americana (1868–1933)',
    resumo: 'Chamada de mãe da administração moderna, defendeu meio século antes do resto do campo que autoridade vem de conhecimento e que conflito bem conduzido produz soluções melhores.',
    bio: [
      'Mary Parker Follett nasceu em Quincy, Massachusetts, em 3 de setembro de 1868, numa família quacre. Estudou na Society for the Collegiate Instruction of Women em Harvard, que se tornaria o Radcliffe College, com uma temporada em Newnham College, em Cambridge, na Inglaterra. Publicou o primeiro livro, um estudo pioneiro sobre o presidente da Câmara dos Representantes, em 1896, antes mesmo de se formar.',
      'Começou a vida profissional como assistente social em Roxbury, bairro pobre e etnicamente diverso de Boston, onde organizou centros comunitários e programas de educação de adultos em escolas públicas fora do horário de aula. Foi dessa prática — e não de estudos de fábrica — que extraiu sua teoria: observando como grupos reais tomam decisões, negociam e produzem poder coletivo.',
      'Em O Novo Estado (1918) e Experiência Criativa (1924) formulou uma concepção de democracia baseada no grupo e não no indivíduo isolado, e propôs que conflitos não deveriam ser resolvidos por dominação nem por concordância superficial, mas por integração: encontrar a necessidade real por trás de cada posição e construir uma solução que atenda às duas. Foi a origem do que hoje se chama solução ganha-ganha.',
      'Nos anos 1920 passou a ser convidada pelo mundo empresarial e tornou-se a primeira mulher a ser convidada a falar na London School of Economics. Suas palestras à Taylor Society em Nova York, em 1926, e ao novo departamento de administração da LSE, em 1933, foram reunidas postumamente em Dynamic Administration e Freedom and Co-ordination. Morreu em Boston em 18 de dezembro de 1933.'
    ],
    contexto: 'Follett escreve no auge da administração científica de Taylor, que tratava o trabalhador como peça a ser otimizada. Sua insistência no elemento humano, na participação e no poder compartilhado foi tão dissonante que a obra caiu no esquecimento por décadas, sendo redescoberta várias vezes ao longo do século XX — inclusive por Peter Drucker, que a chamou de profeta da administração.',
    contribuicoes: [
      'Distinguiu o poder-sobre, coercitivo, do poder-com, construído em conjunto — base das teorias contemporâneas de liderança participativa.',
      'Formulou a resolução de conflitos por integração, origem do conceito de solução ganha-ganha.',
      'Propôs a lei da situação: a ordem não vem da pessoa hierarquicamente superior, mas da exigência objetiva da situação.',
      'Defendeu que autoridade deriva de conhecimento e função, não de posição no organograma.',
      'Escreveu O Novo Estado (1918), defendendo a democracia baseada em grupos locais organizados.',
      'Foi a primeira mulher convidada a falar na London School of Economics.'
    ],
    cronologia: [
      [1868, 'Nasce em Quincy, Massachusetts, em 3 de setembro.'],
      [1896, 'Publica The Speaker of the House of Representatives.'],
      [1918, 'Publica The New State.'],
      [1924, 'Publica Creative Experience.'],
      [1926, 'Profere as palestras à Taylor Society, em Nova York.'],
      [1933, 'Profere as palestras da LSE e morre em Boston, em 18 de dezembro.']
    ]
  },

  'Franklin D. Roosevelt': {
    papel: 'Político norte-americano, 32º presidente dos Estados Unidos (1882–1945)',
    resumo: 'Único presidente eleito quatro vezes, conduziu os Estados Unidos pela Grande Depressão e pela Segunda Guerra Mundial, refundando o papel do Estado.',
    bio: [
      'Franklin Delano Roosevelt nasceu em Hyde Park, no estado de Nova York, em 30 de janeiro de 1882, em família rica e tradicional. Estudou em Harvard e em direito em Columbia, entrou na política pelo Partido Democrata e foi secretário adjunto da Marinha durante a Primeira Guerra Mundial.',
      'Em 1921, aos 39 anos, contraiu uma doença paralisante — por muito tempo diagnosticada como poliomielite — que o deixou sem o uso das pernas pelo resto da vida. Passou anos em reabilitação e voltou à política, elegendo-se governador de Nova York em 1928. A extensão de sua paralisia foi cuidadosamente ocultada do público durante toda a presidência.',
      'Elegeu-se presidente em 1932, no ponto mais profundo da Grande Depressão, com um quarto da força de trabalho desempregada e o sistema bancário em colapso. Nos primeiros cem dias impôs feriado bancário, criou agências de emprego público, seguro de depósitos e regulação do mercado financeiro. O New Deal instituiu a Previdência Social, o direito de organização sindical, salário mínimo e obras de infraestrutura em escala inédita. Falava diretamente ao país pelo rádio nas chamadas conversas ao pé da lareira.',
      'Após o ataque a Pearl Harbor em dezembro de 1941, levou os Estados Unidos à Segunda Guerra Mundial e formou com Churchill e Stálin a aliança que derrotou o Eixo. Formulou em 1941 as Quatro Liberdades e participou das conferências de Teerã e Yalta, que desenharam a ordem do pós-guerra. Morreu de hemorragia cerebral em Warm Springs, na Geórgia, em 12 de abril de 1945, poucas semanas antes da rendição alemã.'
    ],
    contexto:
      'Roosevelt governou nos dois maiores traumas do século XX americano. Sua resposta redefiniu a relação entre Estado e economia nos Estados Unidos, deslocando o país do liberalismo econômico clássico para um modelo de regulação e proteção social que permaneceria hegemônico por quarenta anos. A partir de sua presidência, a Constituição foi emendada para limitar o presidente a dois mandatos.',
    contribuicoes: [
      'Conduziu o New Deal, conjunto de programas que reformulou o papel do Estado na economia norte-americana.',
      'Criou a Previdência Social norte-americana em 1935.',
      'Instituiu o seguro federal de depósitos bancários e a regulação do mercado de capitais.',
      'Formulou o discurso das Quatro Liberdades, que se tornaria uma das bases da Declaração Universal dos Direitos Humanos.',
      'Liderou a aliança que derrotou o Eixo na Segunda Guerra Mundial.',
      'Foi um dos idealizadores da Organização das Nações Unidas.'
    ],
    cronologia: [
      [1882, 'Nasce em Hyde Park, Nova York.'],
      [1921, 'Perde o uso das pernas por doença paralisante.'],
      [1928, 'Elege-se governador de Nova York.'],
      [1933, 'Assume a presidência e inicia o New Deal.'],
      [1935, 'Cria a Previdência Social.'],
      [1941, 'Discurso das Quatro Liberdades; entrada na guerra após Pearl Harbor.'],
      [1945, 'Morre em Warm Springs, em 12 de abril.']
    ]
  },

  'Ronald Reagan': {
    papel: 'Ator e político norte-americano, 40º presidente dos Estados Unidos (1911–2004)',
    resumo: 'Saiu do cinema para a política e conduziu a virada conservadora dos anos 1980, com corte de impostos, desregulação e confronto seguido de negociação com a União Soviética.',
    bio: [
      'Ronald Wilson Reagan nasceu em Tampico, Illinois, em 6 de fevereiro de 1911, em família de poucos recursos. Foi locutor esportivo de rádio antes de assinar contrato com a Warner Bros. em 1937 e atuar em dezenas de filmes. Presidiu o sindicato dos atores de Hollywood entre 1947 e 1952, período em que colaborou com as investigações anticomunistas na indústria.',
      'Migrou do Partido Democrata para o Republicano nos anos 1960 e projetou-se nacionalmente com um discurso de apoio a Barry Goldwater em 1964. Elegeu-se governador da Califórnia em 1966 e cumpriu dois mandatos. Chegou à presidência em 1981, aos 69 anos, e sobreviveu a uma tentativa de assassinato dois meses depois da posse.',
      'Sua política econômica combinou corte expressivo de impostos, desregulação e aumento do gasto militar, num arranjo que ficou conhecido como reaganomics. A inflação foi contida, mas ao custo de uma recessão severa no início do mandato e de forte aumento da dívida pública. Em política externa, endureceu o discurso contra a União Soviética e depois estabeleceu uma relação de negociação direta com Mikhail Gorbachev, que resultou no tratado de eliminação de mísseis nucleares de alcance intermediário assinado em 1987.',
      'Seu segundo mandato foi abalado pelo escândalo Irã-Contras, que revelou a venda secreta de armas ao Irã para financiar grupos armados na Nicarágua. Anunciou publicamente em 1994 seu diagnóstico de doença de Alzheimer e morreu em 2004.'
    ],
    contexto: 'Reagan chega ao poder no fim de uma década de inflação alta, crise do petróleo e perda de confiança institucional após o Vietnã e Watergate. Sua presidência marca o fim do consenso do New Deal e o início de um ciclo de predomínio das ideias de mercado que se estenderia por décadas, com paralelo direto no governo de Margaret Thatcher no Reino Unido.',
    contribuicoes: [
      'Conduziu a virada conservadora da política norte-americana nos anos 1980.',
      'Implementou cortes de impostos e desregulação em larga escala.',
      'Negociou com Gorbachev o Tratado de Forças Nucleares de Alcance Intermediário, o primeiro a eliminar uma categoria inteira de armas nucleares.',
      'Reformulou a comunicação presidencial, aplicando a experiência de ator e locutor ao discurso político.'
    ],
    cronologia: [
      [1911, 'Nasce em Tampico, Illinois.'],
      [1947, 'Assume a presidência do sindicato dos atores de Hollywood.'],
      [1966, 'Elege-se governador da Califórnia.'],
      [1981, 'Assume a presidência e sobrevive a atentado.'],
      [1987, 'Discurso em Berlim e assinatura do tratado com a União Soviética.'],
      [1994, 'Anuncia publicamente o diagnóstico de Alzheimer.'],
      [2004, 'Morre na Califórnia.']
    ]
  },

  'Noam Chomsky': {
    papel: 'Linguista e crítico político norte-americano (1928–)',
    resumo: 'Revolucionou o estudo da linguagem ao propor que a gramática é inata, e tornou-se um dos críticos mais persistentes da política externa dos Estados Unidos.',
    bio: [
      'Avram Noam Chomsky nasceu na Filadélfia em 7 de dezembro de 1928, filho de imigrantes judeus do Leste Europeu; o pai era estudioso do hebraico. Estudou na Universidade da Pensilvânia e ingressou no MIT em 1955, onde lecionou por mais de meio século.',
      'Estruturas Sintáticas, de 1957, rompeu com o behaviorismo então dominante. Chomsky argumentou que a capacidade de gerar infinitas frases novas a partir de um conjunto finito de regras não pode ser explicada por imitação e reforço, e propôs uma gramática gerativa transformacional. Sua resenha demolidora do livro Verbal Behavior, de B. F. Skinner, publicada em 1959, é apontada como um dos marcos da virada cognitiva nas ciências humanas. A hipótese de uma gramática universal — uma estrutura linguística comum à espécie, geneticamente determinada — reorganizou a linguística, a psicologia e a filosofia da mente.',
      'A partir da Guerra do Vietnã tornou-se também um crítico político de grande alcance. Em A Responsabilidade dos Intelectuais (1967) sustentou que cabe a quem tem acesso à informação denunciar as mentiras dos governos. Com Edward Herman formulou em Manufacturing Consent (1988) o modelo de propaganda, segundo o qual a imprensa de sociedades democráticas produz consentimento não por censura, mas por filtros estruturais: propriedade, publicidade, dependência de fontes oficiais e enquadramento ideológico.',
      'Autor de mais de cem livros, é uma das figuras acadêmicas mais citadas do mundo e permanece ativo como conferencista e comentarista, com posições anarquistas de tradição libertária de esquerda.'
    ],
    contexto: 'Chomsky começa a publicar num momento em que o behaviorismo tratava a mente como caixa-preta e a linguagem como hábito adquirido. Sua reação inaugurou o cognitivismo. Sua crítica política, por outro lado, se forma no contexto do Vietnã e permanece marcada pela recusa em aceitar como neutro o discurso das instituições que estuda.',
    contribuicoes: [
      'Criou a gramática gerativa transformacional e a hipótese da gramática universal.',
      'Escreveu Estruturas Sintáticas (1957), obra que reorientou a linguística moderna.',
      'Sua crítica ao behaviorismo de Skinner é um marco da revolução cognitiva.',
      'Formulou com Edward Herman o modelo de propaganda em Manufacturing Consent (1988).',
      'Introduziu a hierarquia de Chomsky, classificação de gramáticas formais fundamental na ciência da computação.'
    ],
    cronologia: [
      [1928, 'Nasce na Filadélfia, em 7 de dezembro.'],
      [1955, 'Ingressa no MIT.'],
      [1957, 'Publica Estruturas Sintáticas.'],
      [1959, 'Publica a resenha crítica de Verbal Behavior, de Skinner.'],
      [1967, 'Publica A Responsabilidade dos Intelectuais.'],
      [1988, 'Publica Manufacturing Consent, com Edward Herman.']
    ]
  },

  'Napoleon Hill': {
    papel: 'Escritor norte-americano de autoajuda (1883–1970)',
    resumo: 'Criou o gênero moderno do livro de sucesso com Quem Pensa Enriquece, obra de enorme influência e de base factual contestada.',
    bio: [
      'Oliver Napoleon Hill nasceu numa cabana no condado de Wise, na Virgínia, em 26 de outubro de 1883, em grande pobreza. Começou como repórter de jornal ainda adolescente. Segundo o relato que ele próprio difundiu, foi encarregado em 1908 pelo editor Robert Bowes de entrevistar Andrew Carnegie, que o teria incumbido de estudar centenas de homens de sucesso e formular uma filosofia da realização. Historiadores não localizaram documentação que comprove essa incumbência, e a exatidão do episódio é objeto de disputa.',
      'A Lei do Triunfo saiu em 1928, e Quem Pensa Enriquece, publicado em 1937 em plena Depressão, tornou-se um dos livros de não ficção mais vendidos de todos os tempos. Sua tese central é que o desejo definido, a fé, a persistência e a associação com pessoas de mentalidade semelhante — o que chamou de mente mestra — precedem e produzem o resultado material.',
      'A biografia pessoal de Hill é acidentada: envolveu-se em negócios fracassados, teve problemas com credores e com autoridades, e vários episódios que narrou sobre si mesmo não resistem à verificação documental. Isso não reduziu o alcance da obra, que fundou a linguagem da autoajuda contemporânea e influenciou praticamente todos os autores posteriores do gênero.'
    ],
    contexto: 'Quem Pensa Enriquece aparece no fundo da Grande Depressão, quando milhões de norte-americanos haviam perdido tudo e buscavam uma explicação e um caminho. O livro oferece uma resposta individual a uma crise estrutural, e é essa combinação que explica tanto seu sucesso duradouro quanto a crítica de que transfere ao indivíduo a responsabilidade por circunstâncias coletivas.',
    contribuicoes: ['Escreveu Quem Pensa Enriquece (1937), obra fundadora do gênero moderno de autoajuda e desenvolvimento pessoal.', 'Formulou o conceito de mente mestra, a associação deliberada com pessoas voltadas ao mesmo objetivo.', 'Estabeleceu o formato do livro de sucesso baseado em princípios numerados e histórias exemplares.'],
    cronologia: [
      [1883, 'Nasce no condado de Wise, Virgínia.'],
      [1928, 'Publica A Lei do Triunfo.'],
      [1937, 'Publica Quem Pensa Enriquece.'],
      [1970, 'Morre na Carolina do Sul.']
    ],
    nota: 'Vários episódios biográficos difundidos por Hill, inclusive o encontro decisivo com Andrew Carnegie, carecem de comprovação documental.'
  },

  'Guy Debord': {
    papel: 'Escritor, cineasta e teórico francês (1931–1994)',
    resumo: 'Descreveu a sociedade moderna como um espetáculo em que as relações entre pessoas passaram a ser mediadas por imagens.',
    bio: [
      'Guy Ernest Debord nasceu em Paris em 28 de dezembro de 1931. Aproximou-se ainda jovem do letrismo e, em 1957, foi um dos fundadores da Internacional Situacionista, grupo que reuniu artistas e teóricos empenhados em transformar a vida cotidiana em vez de produzir obras de arte para o mercado.',
      'A Sociedade do Espetáculo, publicada em 1967 em 221 teses curtas, é sua obra central. A tese de abertura sustenta que, nas sociedades onde reinam as condições modernas de produção, toda a vida se apresenta como uma imensa acumulação de espetáculos, e que tudo o que era vivido diretamente se afastou numa representação. O espetáculo, para Debord, não é um conjunto de imagens, mas uma relação social entre pessoas mediada por imagens.',
      'Os situacionistas desenvolveram práticas como a deriva, percurso urbano sem finalidade que revela a geografia afetiva da cidade, e o desvio, apropriação e subversão de materiais culturais existentes. Suas ideias circularam intensamente durante o Maio de 1968 francês, com palavras de ordem situacionistas nos muros de Paris. Debord dissolveu a Internacional Situacionista em 1972, tornou-se progressivamente recluso, dirigiu filmes experimentais e publicou em 1988 os Comentários sobre a Sociedade do Espetáculo. Tirou a própria vida em 30 de novembro de 1994.'
    ],
    contexto: 'Debord escreve na França do consumo de massa dos anos 1960, quando a publicidade, a televisão e o urbanismo funcional reorganizavam a vida cotidiana. Sua crítica é herdeira de Marx, sobretudo da teoria do fetichismo da mercadoria, e antecipa boa parte do debate contemporâneo sobre imagem, atenção e mediação digital.',
    contribuicoes: ['Escreveu A Sociedade do Espetáculo (1967), uma das obras de crítica cultural mais influentes do século XX.', 'Cofundou e liderou a Internacional Situacionista.', 'Formulou os conceitos de espetáculo, deriva, psicogeografia e desvio.', 'Influenciou diretamente a linguagem e as práticas do Maio de 1968 francês.'],
    cronologia: [
      [1931, 'Nasce em Paris, em 28 de dezembro.'],
      [1957, 'Funda a Internacional Situacionista.'],
      [1967, 'Publica A Sociedade do Espetáculo.'],
      [1968, 'Ideias situacionistas circulam no Maio de 1968.'],
      [1972, 'Dissolve a Internacional Situacionista.'],
      [1988, 'Publica Comentários sobre a Sociedade do Espetáculo.'],
      [1994, 'Morre na França.']
    ]
  },

  Virgílio: {
    papel: 'Poeta romano (70 a.C.–19 a.C.)',
    resumo: 'Autor da Eneida, o poema que deu a Roma seu mito de origem e atravessou dois mil anos como referência da poesia ocidental.',
    bio: [
      'Públio Virgílio Maro nasceu perto de Mântua, no norte da Itália, em 15 de outubro de 70 a.C., em família de pequenos proprietários rurais. Estudou em Cremona, Milão e Roma, e depois filosofia epicurista em Nápoles. De saúde frágil e temperamento retraído, viveu longe da vida pública.',
      'As Bucólicas, escritas por volta de 39 a.C., são dez poemas pastoris que projetam um mundo de pastores e cantos num campo italiano ameaçado por confiscos de terra durante as guerras civis. As Geórgicas, concluídas por volta de 29 a.C., tratam da agricultura, da criação de animais e das abelhas, e são ao mesmo tempo poema didático e celebração do trabalho e da vida rural.',
      'A Eneida ocupou os últimos onze anos de sua vida. Narra a fuga de Eneias de Troia em chamas, sua errância pelo Mediterrâneo, o amor trágico por Dido em Cartago, a descida ao mundo dos mortos e a guerra no Lácio que funda a linhagem de onde viria Roma. É simultaneamente epopeia nacional, resposta romana a Homero e legitimação do poder de Augusto.',
      'Virgílio morreu em Brundísio, em 21 de setembro de 19 a.C., ao voltar de uma viagem à Grécia, com o poema ainda em revisão. Pediu que o manuscrito fosse queimado; Augusto ordenou o contrário. A Eneida tornou-se texto escolar do Império, foi lida na Idade Média como profecia e, na Divina Comédia, Dante escolheu Virgílio como guia pelo Inferno e pelo Purgatório.'
    ],
    contexto: 'A obra de Virgílio é escrita no fim das guerras civis romanas e no início do principado de Augusto. Roma vinha de décadas de violência interna e buscava uma narrativa que desse sentido ao novo regime. A Eneida oferece essa narrativa, mas com uma melancolia persistente sobre o custo humano do império que impediu que fosse lida apenas como propaganda.',
    contribuicoes: ['Escreveu a Eneida, epopeia fundadora da identidade romana e um dos pilares da literatura ocidental.', 'Compôs as Bucólicas, que fixaram a tradição pastoril na poesia europeia.', 'Compôs as Geórgicas, considerada por muitos a obra tecnicamente mais perfeita da poesia latina.', 'Estabeleceu o hexâmetro latino em sua forma mais influente, modelo para poetas por dois milênios.'],
    cronologia: [
      ['70 a.C.', 'Nasce perto de Mântua, em 15 de outubro.'],
      ['39 a.C.', 'Conclui as Bucólicas.'],
      ['29 a.C.', 'Conclui as Geórgicas.'],
      ['19 a.C.', 'Morre em Brundísio, deixando a Eneida em revisão.']
    ]
  },

  'J. R. R. Tolkien': {
    papel: 'Escritor e filólogo britânico (1892–1973)',
    resumo: 'Professor de inglês antigo que inventou línguas primeiro e depois um mundo inteiro para abrigá-las, fundando a alta fantasia moderna.',
    bio: [
      'John Ronald Reuel Tolkien nasceu em Bloemfontein, na atual África do Sul, em 3 de janeiro de 1892, e foi levado à Inglaterra aos três anos. Perdeu o pai aos quatro e a mãe aos doze, ficando sob tutela de um padre católico. A conversão da mãe ao catolicismo, que lhe custou o apoio da família, marcou profundamente sua fé.',
      'Estudou em Oxford, especializando-se em filologia e línguas germânicas antigas. Serviu na Primeira Guerra Mundial e combateu na Batalha do Somme em 1916, onde perdeu quase todos os amigos próximos; foi retirado do front com febre das trincheiras. Voltou para trabalhar no Oxford English Dictionary e tornou-se professor em Leeds e depois em Oxford, onde ocupou cátedras de anglo-saxão e de língua e literatura inglesas por mais de trinta anos.',
      'Como acadêmico, sua conferência de 1936 sobre Beowulf mudou a forma como o poema é lido, ao defender que se tratava de uma obra de arte e não apenas de um documento histórico. Como escritor, começou pela invenção de línguas — quenya e sindarin, inspiradas no finlandês e no galês — e construiu a Terra-média como o mundo onde essas línguas pudessem ter história.',
      'O Hobbit saiu em 1937, escrito inicialmente para os filhos. O Senhor dos Anéis, publicado em três volumes entre 1954 e 1955, levou mais de doze anos. Fez parte dos Inklings, grupo de escritores de Oxford que incluía C. S. Lewis. O Silmarillion, a mitologia de fundo que trabalhou a vida inteira, foi organizado e publicado postumamente pelo filho Christopher em 1977.'
    ],
    contexto: 'Tolkien escreve na Inglaterra que atravessou duas guerras mundiais e a industrialização acelerada. Sua obra é atravessada pela perda, pela desconfiança da máquina e pelo desejo de dar à Inglaterra uma mitologia própria, que ele considerava não existir. Rejeitou explicitamente leituras alegóricas de sua obra, inclusive as que a vinculavam à Segunda Guerra.',
    contribuicoes: [
      'Escreveu O Senhor dos Anéis, obra que fundou a alta fantasia como gênero literário moderno.',
      'Criou línguas construídas completas, com fonologia, gramática e história interna.',
      'Transformou o estudo acadêmico de Beowulf com a conferência O Monstro e os Críticos (1936).',
      'Construiu em O Silmarillion uma mitologia integrada, com cosmogonia, genealogias e cronologia.',
      'Formulou em Sobre Histórias de Fadas uma defesa teórica da literatura fantástica.'
    ],
    cronologia: [
      [1892, 'Nasce em Bloemfontein, em 3 de janeiro.'],
      [1916, 'Combate na Batalha do Somme.'],
      [1925, 'Torna-se professor de anglo-saxão em Oxford.'],
      [1936, 'Profere a conferência sobre Beowulf.'],
      [1937, 'Publica O Hobbit.'],
      [1954, 'Publica os dois primeiros volumes de O Senhor dos Anéis.'],
      [1973, 'Morre em Bournemouth.'],
      [1977, 'O Silmarillion é publicado postumamente.']
    ]
  },

  'Margaret Thatcher': {
    papel: 'Política britânica, primeira-ministra do Reino Unido (1925–2013)',
    resumo: 'Primeira mulher a chefiar o governo britânico e a de mandato mais longo no século XX, reorganizou a economia do país e dividiu a opinião pública como poucos.',
    bio: [
      'Margaret Hilda Roberts nasceu em Grantham, na Inglaterra, em 13 de outubro de 1925, filha de um dono de mercearia que também foi prefeito da cidade. Formou-se em química em Oxford, onde trabalhou em cristalografia, e depois estudou direito, atuando como advogada tributarista. Elegeu-se deputada em 1959 e foi secretária de Educação entre 1970 e 1974.',
      'Tornou-se líder do Partido Conservador em 1975 e primeira-ministra em 1979, num Reino Unido marcado por inflação alta, greves prolongadas e queda de produtividade. Seu programa combinou controle monetário rígido, privatização de empresas estatais, redução do poder sindical e desregulação financeira. O desemprego chegou a mais de três milhões no início dos anos 1980, e a derrota da greve dos mineiros de 1984-1985 foi o confronto mais duro do período.',
      'Em política externa, conduziu a Guerra das Malvinas em 1982, aproximou-se de Ronald Reagan e manteve interlocução direta com Mikhail Gorbachev, de quem disse publicamente que era um homem com quem se podia negociar. Foi alvo de um atentado do IRA em Brighton, em 1984, do qual escapou.',
      'A tentativa de implantar um imposto local per capita, apelidado poll tax, provocou protestos em massa e desgaste dentro do próprio partido. Renunciou em novembro de 1990. Morreu em Londres em 8 de abril de 2013. Seu legado permanece objeto de disputa: creditada por uns pela recuperação da economia britânica, responsabilizada por outros pelo desmonte industrial de regiões inteiras.'
    ],
    contexto: 'Thatcher chega ao poder no fim do consenso do pós-guerra britânico, construído sobre pleno emprego, Estado de bem-estar e economia mista. Junto com Reagan nos Estados Unidos, ela representa a virada para políticas de mercado que definiriam as duas décadas seguintes em boa parte do mundo ocidental.',
    contribuicoes: [
      'Foi a primeira mulher a ocupar o cargo de primeira-ministra do Reino Unido.',
      'Conduziu um amplo programa de privatizações que se tornou modelo internacional.',
      'Reformulou a legislação sindical britânica.',
      'Promoveu a venda de moradias públicas a seus ocupantes, ampliando a propriedade imobiliária popular.',
      'Foi uma das interlocutoras ocidentais decisivas no diálogo com Gorbachev no fim da Guerra Fria.'
    ],
    cronologia: [
      [1925, 'Nasce em Grantham, em 13 de outubro.'],
      [1959, 'Elege-se deputada por Finchley.'],
      [1975, 'Torna-se líder do Partido Conservador.'],
      [1979, 'Assume como primeira-ministra.'],
      [1982, 'Guerra das Malvinas.'],
      [1984, 'Sobrevive ao atentado de Brighton; início da greve dos mineiros.'],
      [1990, 'Renuncia ao cargo.'],
      [2013, 'Morre em Londres.']
    ]
  },

  'Henry Kissinger': {
    papel: 'Diplomata e cientista político norte-americano (1923–2023)',
    resumo: 'Arquiteto da política externa norte-americana nos anos 1970, dividiu a história entre a abertura à China e as consequências de suas decisões em outros continentes.',
    bio: [
      'Heinz Alfred Kissinger nasceu em Fürth, na Alemanha, em 27 de maio de 1923, em família judaica que fugiu do nazismo para os Estados Unidos em 1938. Serviu ao Exército americano na Segunda Guerra, atuando em contrainteligência na Alemanha ocupada. Doutorou-se em Harvard com uma tese sobre a diplomacia europeia após as guerras napoleônicas, tema que orientaria seu pensamento: a ideia de que a paz depende menos da justiça do que de um equilíbrio de poder estável.',
      'Foi conselheiro de segurança nacional a partir de 1969 e secretário de Estado entre 1973 e 1977, sob Nixon e Ford. Conduziu a détente com a União Soviética, incluindo os acordos de limitação de armas estratégicas, e organizou em segredo a aproximação com a China, que culminou na visita de Nixon a Pequim em 1972 — uma reconfiguração completa do tabuleiro da Guerra Fria. Negociou também a diplomacia de vaivém no Oriente Médio após a guerra de 1973.',
      'Recebeu o Nobel da Paz de 1973 pelos acordos de Paris sobre o Vietnã, prêmio que gerou controvérsia imediata e a renúncia de dois membros do comitê. Sua atuação no bombardeio do Camboja, no golpe militar chileno de 1973 e no apoio a regimes autoritários na América Latina e no Sudeste Asiático é objeto de crítica severa e de investigações históricas.',
      'Fora do governo, manteve influência como consultor e autor até idade avançada. Publicou Diplomacia (1994), Sobre a China (2011) e Ordem Mundial (2014). Morreu em Connecticut em 29 de novembro de 2023, aos cem anos.'
    ],
    contexto: 'Kissinger operou no auge da Guerra Fria, quando a política externa norte-americana buscava sair do atoleiro do Vietnã sem perder posição global. Sua doutrina, herdada do congresso de Viena, privilegia estabilidade e equilíbrio sobre princípios morais — o que explica tanto suas realizações diplomáticas quanto a permanência das acusações contra ele.',
    contribuicoes: [
      'Organizou a aproximação diplomática entre Estados Unidos e China, alterando o equilíbrio da Guerra Fria.',
      'Conduziu a política de détente e os acordos de limitação de armas estratégicas com a União Soviética.',
      'Negociou os acordos de desengajamento no Oriente Médio após a guerra de 1973.',
      'Escreveu Diplomacia (1994), referência sobre a história das relações internacionais modernas.'
    ],
    cronologia: [
      [1923, 'Nasce em Fürth, Alemanha.'],
      [1938, 'A família foge do nazismo para os Estados Unidos.'],
      [1969, 'Torna-se conselheiro de segurança nacional.'],
      [1972, 'Visita de Nixon à China, que ele articulou.'],
      [1973, 'Torna-se secretário de Estado e recebe o Nobel da Paz.'],
      [1994, 'Publica Diplomacia.'],
      [2023, 'Morre aos cem anos.']
    ],
    nota: 'Sua atuação no Camboja, no Chile e no Timor-Leste é objeto de crítica histórica documentada e de investigações em diversos países.'
  },

  'Júlio César': {
    papel: 'General e estadista romano (100 a.C.–44 a.C.)',
    resumo: 'Conquistou a Gália, atravessou o Rubicão contra a própria república e foi assassinado no Senado quando se tornou o homem mais poderoso de Roma.',
    bio: [
      'Caio Júlio César nasceu em Roma em 100 a.C., numa família patrícia antiga mas politicamente secundária. Sobreviveu às proscrições de Sula na juventude e construiu carreira somando cargos, dívidas enormes e alianças. Em 60 a.C. formou com Pompeu e Crasso o acordo informal que a historiografia chamaria de primeiro triunvirato.',
      'Como procônsul, conduziu entre 58 e 50 a.C. a conquista da Gália, campanha que ampliou o território romano até o Reno e o Atlântico, envolveu duas expedições à Britânia e culminou na derrota de Vercingetórix em Alésia. César narrou a campanha nos Comentários sobre a Guerra das Gálias, escritos em terceira pessoa e em prosa de tal clareza que se tornaram texto escolar de latim até hoje.',
      'Ordenado pelo Senado a dispensar suas legiões, atravessou em 49 a.C. o rio Rubicão com o exército, ato de guerra contra a república. A guerra civil que se seguiu levou-o à vitória sobre Pompeu em Farsalos, ao Egito, onde se envolveu com Cleópatra, e a campanhas na África e na Hispânia. Concentrou poderes como ditador, reformou o calendário — o calendário juliano, base do que usamos —, ampliou a cidadania e reorganizou a administração.',
      'Foi assassinado a punhaladas no Senado nos idos de março de 44 a.C., por um grupo de senadores que temia a instauração de uma monarquia. A morte não restaurou a república: abriu a guerra civil que terminaria com Otávio, seu sobrinho-neto adotivo, como primeiro imperador.'
    ],
    contexto: 'César age no colapso da república romana, minada por desigualdade extrema, exércitos leais a generais e não ao Estado, e instituições incapazes de administrar um império. Sua carreira é ao mesmo tempo sintoma e acelerador desse colapso, e o nome que carregava tornou-se título de poder em várias línguas, do césar romano ao kaiser alemão e ao czar russo.',
    contribuicoes: [
      'Conquistou a Gália, ampliando o domínio romano até o Reno e o Atlântico.',
      'Escreveu os Comentários sobre a Guerra das Gálias e sobre a Guerra Civil, modelos de prosa latina.',
      'Instituiu o calendário juliano, com ano de 365 dias e ano bissexto.',
      'Reformou a administração romana, ampliou a concessão de cidadania e promoveu colonização de veteranos.',
      'Sua ascensão e morte marcaram a transição da república para o principado.'
    ],
    cronologia: [
      ['100 a.C.', 'Nasce em Roma.'],
      ['60 a.C.', 'Forma o acordo com Pompeu e Crasso.'],
      ['58 a.C.', 'Inicia a campanha da Gália.'],
      ['52 a.C.', 'Derrota Vercingetórix em Alésia.'],
      ['49 a.C.', 'Atravessa o Rubicão e inicia a guerra civil.'],
      ['46 a.C.', 'Institui o calendário juliano.'],
      ['44 a.C.', 'É assassinado no Senado, nos idos de março.']
    ]
  },

  'Edward Bernays': {
    papel: 'Publicitário e teórico das relações públicas austríaco-americano (1891–1995)',
    resumo: 'Sobrinho de Freud, aplicou psicanálise à persuasão de massas e criou a profissão de relações públicas.',
    bio: [
      'Edward Louis Bernays nasceu em Viena em 22 de novembro de 1891 e foi levado aos Estados Unidos ainda bebê. Era sobrinho de Sigmund Freud por dupla ligação familiar, o que moldou seu método: aplicar à comunicação de massa a ideia de que o comportamento humano é governado por desejos inconscientes, e não por argumentos racionais.',
      'Trabalhou durante a Primeira Guerra Mundial no Comitê de Informação Pública, órgão de propaganda do governo norte-americano. A eficácia daquela máquina o convenceu de que as mesmas técnicas poderiam ser usadas em tempos de paz, para empresas e causas. Cunhou a expressão engenharia do consentimento e preferiu o termo relações públicas ao desgastado propaganda.',
      'Suas campanhas se tornaram estudos de caso. Para a indústria do tabaco, associou o cigarro à emancipação feminina numa ação no desfile de Páscoa de Nova York em 1929, em que mulheres fumaram publicamente chamando os cigarros de tochas da liberdade. Para o setor de alimentos, ajudou a estabelecer o bacon com ovos como café da manhã americano ao obter endosso de médicos. Prestou serviços à United Fruit Company numa campanha ligada à crise da Guatemala nos anos 1950.',
      'Publicou Cristalizando a Opinião Pública (1923) e Propaganda (1928). Na velhice manifestou desconforto com alguns usos de suas técnicas, especialmente no tabaco, depois de conhecidos os efeitos do cigarro sobre a saúde. Morreu em 1995, aos 103 anos.'
    ],
    contexto:
      'Bernays trabalha no momento em que a produção industrial passou a exigir consumo em massa e em que o voto universal exigia conquista de opinião em massa. Sua obra é a formulação explícita de uma técnica: não convencer pelo argumento, mas associar o produto ou a ideia a desejos e identidades já existentes. Suas próprias formulações sobre a manipulação organizada dos hábitos e opiniões das massas são hoje leitura corrente na crítica da mídia.',
    contribuicoes: ['Fundou as relações públicas como profissão e como campo teórico.', 'Aplicou conceitos psicanalíticos à comunicação de massa e à publicidade.', 'Escreveu Propaganda (1928) e Cristalizando a Opinião Pública (1923).', 'Cunhou a expressão engenharia do consentimento.'],
    cronologia: [
      [1891, 'Nasce em Viena, em 22 de novembro.'],
      [1917, 'Atua no Comitê de Informação Pública dos Estados Unidos.'],
      [1923, 'Publica Cristalizando a Opinião Pública.'],
      [1928, 'Publica Propaganda.'],
      [1929, 'Conduz a campanha das tochas da liberdade.'],
      [1995, 'Morre em Cambridge, Massachusetts, aos 103 anos.']
    ]
  },

  'Walter Lippmann': {
    papel: 'Jornalista e analista político norte-americano (1889–1974)',
    resumo: 'Criou o conceito de estereótipo aplicado à opinião pública e formulou a dúvida mais influente do século XX sobre a capacidade do cidadão comum de julgar a política.',
    bio: [
      'Walter Lippmann nasceu em Nova York em 23 de setembro de 1889, em família judaica de classe alta. Formou-se em Harvard, onde foi assistente do filósofo George Santayana e conviveu com William James. Participou da fundação da revista The New Republic em 1914 e integrou, durante a Primeira Guerra, a equipe que ajudou a redigir os Quatorze Pontos de Woodrow Wilson.',
      'Opinião Pública, de 1922, é sua obra central. Lippmann argumenta que o ambiente real é grande e complexo demais para conhecimento direto, e que agimos com base em um pseudoambiente — imagens na cabeça, construídas por notícias fragmentárias e por estereótipos. Foi ele quem trouxe a palavra estereótipo, então termo da tipografia, para o vocabulário da psicologia social.',
      'Em O Público Fantasma (1925) levou o argumento adiante e sustentou que o cidadão onisciente pressuposto pela teoria democrática clássica não existe. Isso o colocou num debate público de longa duração com John Dewey, que respondia que o problema não era a incapacidade do público, e sim a falta de comunicação e educação que o formasse.',
      'Escreveu por décadas a coluna Today and Tomorrow, publicada em centenas de jornais, recebeu dois prêmios Pulitzer e foi interlocutor de presidentes ao longo de meio século. Morreu em Nova York em 14 de dezembro de 1974.'
    ],
    contexto: 'Lippmann escreve logo após a Primeira Guerra, quando a propaganda estatal havia demonstrado seu poder de moldar percepções em larga escala. Sua obra é a primeira análise sistemática de como a notícia constrói a realidade percebida, e é ponto de partida obrigatório de toda a teoria posterior sobre mídia, agenda e formação de opinião.',
    contribuicoes: [
      'Escreveu Opinião Pública (1922), obra fundadora do estudo da comunicação de massa.',
      'Introduziu o conceito de estereótipo na análise da opinião pública.',
      'Formulou a noção de pseudoambiente: as imagens mentais que mediam nossa relação com o mundo.',
      'Manteve com John Dewey o debate clássico sobre a viabilidade da democracia numa sociedade complexa.',
      'Ganhou dois prêmios Pulitzer pelo trabalho jornalístico.'
    ],
    cronologia: [
      [1889, 'Nasce em Nova York, em 23 de setembro.'],
      [1914, 'Participa da fundação da The New Republic.'],
      [1922, 'Publica Opinião Pública.'],
      [1925, 'Publica O Público Fantasma.'],
      [1974, 'Morre em Nova York.']
    ]
  },

  'Honoré de Balzac': {
    papel: 'Escritor francês (1799–1850)',
    resumo: 'Escreveu quase cem romances interligados para retratar a sociedade francesa inteira, fundando o realismo literário.',
    bio: [
      'Honoré de Balzac nasceu em Tours em 20 de maio de 1799. Estudou direito por pressão da família, mas abandonou a carreira para escrever. Os primeiros anos foram de fracasso: romances publicados sob pseudônimo, uma editora falida, uma tipografia falida, dívidas que o perseguiriam pelo resto da vida e que explicam em parte seu ritmo de trabalho brutal, escrevendo de madrugada sustentado por quantidades lendárias de café.',
      'A partir de 1830 formulou o projeto que daria unidade à sua obra: A Comédia Humana, um conjunto de romances e novelas em que as mesmas personagens reaparecem em livros diferentes, em fases distintas da vida, compondo o retrato de uma sociedade inteira. Chegou a cerca de noventa obras concluídas, de um plano ainda maior.',
      'Sua originalidade está no método. Balzac descreve minuciosamente o dinheiro, a mobília, as roupas, os aluguéis, as heranças e as dívidas, porque entende que as paixões humanas se organizam em torno das condições materiais. Em O Pai Goriot, Eugénie Grandet, Ilusões Perdidas e A Pele de Onagro, a ambição, a avareza e a decadência aparecem como fenômenos sociais, não apenas morais.',
      'Casou-se com a condessa polonesa Ewelina Hańska em 1850, após uma correspondência de dezoito anos, e morreu cinco meses depois, em Paris, em 18 de agosto, aos 51 anos, exausto. Victor Hugo discursou em seu funeral.'
    ],
    contexto:
      'Balzac escreve na França pós-revolucionária, entre a Restauração e a Monarquia de Julho, quando a aristocracia de sangue cedia terreno à burguesia do dinheiro. É esse deslocamento que sua obra registra: a chegada de uma sociedade em que a posição social passou a ser comprada, e não herdada. Engels observou que aprendeu mais sobre a França daquele período em Balzac do que em todos os historiadores e economistas juntos.',
    contribuicoes: ['Concebeu e executou A Comédia Humana, com cerca de noventa obras interligadas.', 'Criou a técnica das personagens recorrentes entre romances distintos.', 'Fundou o realismo literário ao vincular sistematicamente psicologia e condição material.', 'Escreveu O Pai Goriot, Eugénie Grandet, Ilusões Perdidas e A Pele de Onagro, entre outras obras centrais da literatura francesa.'],
    cronologia: [
      [1799, 'Nasce em Tours, em 20 de maio.'],
      [1829, 'Publica Os Chouans, primeiro romance assinado com o próprio nome.'],
      [1834, 'Publica O Pai Goriot.'],
      [1842, 'Adota o título geral A Comédia Humana.'],
      [1850, 'Casa-se com Ewelina Hańska e morre em Paris, em 18 de agosto.']
    ]
  },

  'Thomas Jefferson': {
    papel: 'Político e escritor norte-americano, 3º presidente dos Estados Unidos (1743–1826)',
    resumo: 'Redigiu a Declaração de Independência dos Estados Unidos e viveu, sem resolver, a contradição entre proclamar a igualdade e escravizar pessoas.',
    bio: [
      'Thomas Jefferson nasceu em Shadwell, na colônia da Virgínia, em 13 de abril de 1743, em família de proprietários de terra. Formou-se no College of William & Mary, atuou como advogado e ingressou na política colonial. Aos 33 anos foi encarregado de redigir a Declaração de Independência, aprovada em 4 de julho de 1776, cujo preâmbulo afirma como verdades evidentes que todos os homens são criados iguais e dotados de direitos inalienáveis.',
      'Foi governador da Virgínia, ministro na França durante a Revolução Francesa, primeiro secretário de Estado sob Washington e vice-presidente sob John Adams. Elegeu-se presidente em 1800, numa eleição que representou a primeira transferência pacífica de poder entre partidos rivais nos Estados Unidos.',
      'Como presidente, realizou em 1803 a compra da Louisiana à França, que dobrou o território nacional, e enviou a expedição de Lewis e Clark ao Pacífico. Foi autor do Estatuto da Virgínia para a Liberdade Religiosa, base da separação entre Igreja e Estado no país, e fundador da Universidade da Virgínia, cujo projeto arquitetônico ele mesmo desenhou.',
      'Escravizou mais de seiscentas pessoas ao longo da vida e libertou pouquíssimas. Evidências históricas e testes genéticos sustentam que teve filhos com Sally Hemings, mulher escravizada em sua propriedade. Morreu em Monticello em 4 de julho de 1826, exatamente cinquenta anos depois da Declaração, no mesmo dia que John Adams.'
    ],
    contexto: 'Jefferson é a figura em que a contradição fundadora dos Estados Unidos aparece de forma mais nítida: o texto que serviu de referência a movimentos de emancipação no mundo inteiro foi escrito por um homem que sustentava sua vida com trabalho escravizado. Essa tensão é hoje parte central de como sua obra é lida.',
    contribuicoes: ['Redigiu a Declaração de Independência dos Estados Unidos.', 'Escreveu o Estatuto da Virgínia para a Liberdade Religiosa, base da separação entre Igreja e Estado.', 'Realizou a compra da Louisiana, que dobrou o território dos Estados Unidos.', 'Fundou e projetou a Universidade da Virgínia.', 'Organizou a expedição de Lewis e Clark ao Pacífico.'],
    cronologia: [
      [1743, 'Nasce em Shadwell, Virgínia.'],
      [1776, 'Redige a Declaração de Independência.'],
      [1785, 'Torna-se ministro na França.'],
      [1801, 'Assume a presidência.'],
      [1803, 'Realiza a compra da Louisiana.'],
      [1819, 'Funda a Universidade da Virgínia.'],
      [1826, 'Morre em Monticello, em 4 de julho.']
    ],
    nota: 'Jefferson escravizou mais de seiscentas pessoas ao longo da vida. Essa informação é parte incontornável de seu panorama histórico.'
  }
};

Object.assign(PANORAMAS_F8, {
  'Pierre Bourdieu': {
    papel: 'Sociólogo francês (1930–2002)',
    resumo: 'Mostrou que gosto, escola e cultura funcionam como mecanismos de reprodução das desigualdades sociais.',
    bio: [
      'Pierre Bourdieu nasceu em Denguin, aldeia do sudoeste da França, em 1º de agosto de 1930, filho de um carteiro rural. Entrou na École Normale Supérieure e formou-se em filosofia. O deslocamento entre a origem camponesa e a elite intelectual parisiense marcou toda a sua obra.',
      'Foi convocado para a Argélia durante a guerra de independência e ali abandonou a filosofia pela etnografia, estudando a sociedade cabila e o campesinato argelino sob a colonização. Voltou à França e passou a aplicar o mesmo olhar ao próprio país.',
      'Com Jean-Claude Passeron mostrou em Os Herdeiros (1964) e A Reprodução (1970) que a escola, apresentada como meritocrática, na verdade premia um capital cultural que as crianças de famílias favorecidas já trazem de casa. Em A Distinção (1979) demonstrou que o gosto — em música, comida, arte, esporte — funciona como marcador de classe e instrumento de dominação simbólica.',
      'Criou um vocabulário conceitual hoje incontornável: habitus, campo, capital cultural, capital social, violência simbólica. Nos últimos anos assumiu posição pública de crítica ao neoliberalismo e organizou a pesquisa coletiva A Miséria do Mundo (1993). Morreu em Paris em 23 de janeiro de 2002.'
    ],
    contexto: 'Bourdieu escreve na França do pós-guerra, que expandiu o acesso à escola prometendo mobilidade social. Sua obra demonstra por que a promessa não se cumpriu, deslocando a explicação da desigualdade do plano econômico direto para o plano cultural e simbólico.',
    contribuicoes: ['Formulou os conceitos de habitus, campo e capital cultural.', 'Demonstrou o papel da escola na reprodução das desigualdades sociais.', 'Criou o conceito de violência simbólica.', 'Escreveu A Distinção (1979), análise da relação entre gosto e classe social.', 'Dirigiu a pesquisa coletiva A Miséria do Mundo (1993).'],
    cronologia: [
      [1930, 'Nasce em Denguin, em 1º de agosto.'],
      [1958, 'Serve na Argélia e inicia a pesquisa etnográfica.'],
      [1964, 'Publica Os Herdeiros, com Passeron.'],
      [1979, 'Publica A Distinção.'],
      [1981, 'Assume cátedra no Collège de France.'],
      [2002, 'Morre em Paris.']
    ]
  },

  'Friedrich Hayek': {
    papel: 'Economista e filósofo político austro-britânico (1899–1992)',
    resumo: 'Defendeu que nenhum planejador pode reunir o conhecimento disperso na sociedade, e que o preço é o mecanismo que o coordena.',
    bio: [
      'Friedrich August von Hayek nasceu em Viena em 8 de maio de 1899. Serviu na Primeira Guerra Mundial e doutorou-se em direito e em ciência política pela Universidade de Viena, formando-se na tradição da escola austríaca de economia sob influência de Ludwig von Mises.',
      'Mudou-se para a London School of Economics em 1931, onde travou com John Maynard Keynes o debate econômico mais célebre do século XX. Em 1944 publicou O Caminho da Servidão, escrito em plena guerra, argumentando que o planejamento econômico centralizado, mesmo com intenções democráticas, tende a concentrar poder e a corroer liberdades individuais.',
      'Seu artigo de 1945 sobre o uso do conhecimento na sociedade é considerado sua contribuição teórica mais duradoura: o conhecimento relevante para as decisões econômicas está disperso entre milhões de pessoas, na forma de circunstâncias particulares de tempo e lugar, e nenhum órgão central pode reuni-lo. O sistema de preços funciona como mecanismo de transmissão dessa informação.',
      'Lecionou em Chicago e Freiburg, fundou a Sociedade Mont Pèlerin e recebeu o Nobel de Economia em 1974, dividido com Gunnar Myrdal. Sua influência sobre as políticas de Thatcher e Reagan foi direta. Morreu em Freiburg, na Alemanha, em 23 de março de 1992.'
    ],
    contexto: 'Hayek escreve em reação direta à ascensão dos regimes totalitários e ao consenso keynesiano do pós-guerra. Por décadas foi figura marginal no debate econômico; a estagflação dos anos 1970 e o colapso das economias planejadas trouxeram suas teses de volta ao centro.',
    contribuicoes: ['Formulou o argumento do conhecimento disperso e do sistema de preços como mecanismo de coordenação.', 'Escreveu O Caminho da Servidão (1944).', 'Desenvolveu a teoria da ordem espontânea, aplicada a mercados, linguagem e direito.', 'Recebeu o Prêmio Nobel de Economia em 1974.', 'Fundou a Sociedade Mont Pèlerin em 1947.'],
    cronologia: [
      [1899, 'Nasce em Viena, em 8 de maio.'],
      [1931, 'Muda-se para a London School of Economics.'],
      [1944, 'Publica O Caminho da Servidão.'],
      [1945, 'Publica O Uso do Conhecimento na Sociedade.'],
      [1974, 'Recebe o Nobel de Economia.'],
      [1992, 'Morre em Freiburg.']
    ]
  },

  'Mikhail Gorbachev': {
    papel: 'Político soviético, último líder da União Soviética (1931–2022)',
    resumo: 'Tentou reformar o socialismo soviético por dentro e acabou presidindo o fim da União Soviética e da Guerra Fria.',
    bio: [
      'Mikhail Sergueievitch Gorbachev nasceu em Privolnoye, no sul da Rússia, em 2 de março de 1931, em família camponesa. Ambos os avôs foram presos durante o stalinismo. Trabalhou como operador de colheitadeira antes de estudar direito na Universidade Estatal de Moscou, onde conheceu Raíssa, com quem se casou.',
      'Subiu na estrutura do Partido Comunista até tornar-se secretário-geral em março de 1985, aos 54 anos, o mais jovem em décadas, herdando uma economia estagnada e uma guerra no Afeganistão. Lançou a perestroika, reestruturação econômica, e a glasnost, abertura à informação e à crítica pública. O desastre nuclear de Chernobyl, em 1986, e a forma como a informação foi inicialmente ocultada, radicalizaram sua defesa da transparência.',
      'Em política externa, negociou com Reagan a eliminação de mísseis de alcance intermediário, retirou as tropas soviéticas do Afeganistão e, decisivamente, recusou-se a usar a força para sustentar os regimes aliados do Leste Europeu em 1989 — o que permitiu a queda do Muro de Berlim sem intervenção militar. Recebeu o Nobel da Paz em 1990.',
      'As reformas escaparam ao seu controle. Sobreviveu a uma tentativa de golpe de linha-dura em agosto de 1991 e renunciou em 25 de dezembro daquele ano, quando a União Soviética deixou de existir. Amplamente admirado no exterior e amplamente criticado dentro da Rússia pelo colapso econômico que se seguiu, morreu em Moscou em 30 de agosto de 2022.'
    ],
    contexto: 'Gorbachev herdou um sistema que já não conseguia sustentar simultaneamente a corrida armamentista e o padrão de vida da população. Suas reformas partiram da convicção de que o socialismo poderia ser salvo pela democratização. O resultado foi o oposto do pretendido, e essa distância entre intenção e consequência define sua figura histórica.',
    contribuicoes: ['Lançou a perestroika e a glasnost, abrindo o sistema soviético à reforma e à crítica.', 'Negociou com Reagan o primeiro tratado a eliminar uma categoria inteira de armas nucleares.', 'Retirou as tropas soviéticas do Afeganistão.', 'Recusou o uso da força para conter as transições no Leste Europeu em 1989.', 'Recebeu o Prêmio Nobel da Paz em 1990.'],
    cronologia: [
      [1931, 'Nasce em Privolnoye, em 2 de março.'],
      [1985, 'Torna-se secretário-geral do Partido Comunista.'],
      [1986, 'Desastre de Chernobyl.'],
      [1989, 'Queda do Muro de Berlim sem intervenção soviética.'],
      [1990, 'Recebe o Nobel da Paz.'],
      [1991, 'Renuncia; a União Soviética é dissolvida.'],
      [2022, 'Morre em Moscou.']
    ]
  },

  'Carl von Clausewitz': {
    papel: 'General e teórico militar prussiano (1780–1831)',
    resumo: 'Escreveu Da Guerra, o tratado que fixou a ideia de que a guerra é a continuação da política por outros meios.',
    bio: [
      'Carl Philipp Gottlieb von Clausewitz nasceu em Burg, perto de Magdeburgo, em 1º de junho de 1780. Entrou no exército prussiano aos doze anos e combateu ainda adolescente contra a França revolucionária. Foi feito prisioneiro após a derrota prussiana em Jena-Auerstedt, em 1806, humilhação nacional que marcaria sua geração.',
      'Participou da reforma do exército prussiano ao lado de Scharnhorst e Gneisenau. Quando a Prússia se aliou a Napoleão em 1812, recusou-se a servir e passou ao exército russo, participando da campanha em que a Grande Armée foi destruída. Voltou ao serviço prussiano e esteve na campanha de Waterloo.',
      'Da Guerra foi escrito nos anos de direção da Academia Militar de Berlim e publicado postumamente pela viúva Marie von Brühl em 1832. A obra rompe com os tratados de regras fixas: guerra não é ciência exata, é um duelo em escala ampliada, governado pelo acaso, pela fricção — a soma de pequenos imprevistos que fazem o simples se tornar difícil — e pela chamada trindade da violência popular, do acaso e da razão política.',
      'Sua formulação mais citada é que a guerra é a continuação da política por outros meios: um instrumento subordinado a objetivos políticos, e não uma atividade autônoma. Morreu de cólera em Breslau, em 16 de novembro de 1831, aos 51 anos, com a obra ainda inacabada.'
    ],
    contexto: 'Clausewitz escreve depois das guerras napoleônicas, que transformaram o conflito armado de disputa entre exércitos profissionais em mobilização de nações inteiras. Sua obra é a tentativa de compreender essa mudança e continua sendo leitura obrigatória em academias militares e em escolas de estratégia empresarial.',
    contribuicoes: ['Escreveu Da Guerra, tratado fundador da teoria militar moderna.', 'Formulou a tese da guerra como continuação da política por outros meios.', 'Introduziu o conceito de fricção, o acúmulo de imprevistos que separa o plano da execução.', 'Formulou a trindade da guerra: paixão popular, acaso e cálculo político.', 'Participou da reforma do exército prussiano após 1806.'],
    cronologia: [
      [1780, 'Nasce em Burg, em 1º de junho.'],
      [1806, 'É feito prisioneiro após Jena-Auerstedt.'],
      [1812, 'Passa ao exército russo em recusa à aliança com Napoleão.'],
      [1818, 'Assume a direção da Academia Militar de Berlim.'],
      [1831, 'Morre de cólera em Breslau.'],
      [1832, 'Da Guerra é publicado postumamente.']
    ]
  },

  'Betty Friedan': {
    papel: 'Escritora e ativista feminista norte-americana (1921–2006)',
    resumo: 'Deu nome ao mal-estar das donas de casa americanas e desencadeou a segunda onda do feminismo.',
    bio: [
      'Bettye Naomi Goldstein nasceu em Peoria, Illinois, em 4 de fevereiro de 1921. Formou-se em psicologia no Smith College e trabalhou como jornalista sindical antes de ser demitida por estar grávida do segundo filho — episódio que se tornaria emblemático de seu argumento.',
      'Em 1957 aplicou um questionário às ex-colegas de turma no aniversário de quinze anos de formatura e encontrou um padrão: mulheres com boa formação, casa própria, marido e filhos relatavam uma infelicidade difusa que não sabiam nomear. Chamou aquilo de o problema sem nome.',
      'A Mística Feminina, publicado em 1963, transformou essa constatação em livro e vendeu milhões de exemplares. O argumento central é que a cultura do pós-guerra havia construído uma imagem idealizada da dona de casa realizada que confinava mulheres instruídas ao ambiente doméstico e patologizava sua insatisfação.',
      'Fundou em 1966 a National Organization for Women, presidiu a organização, ajudou a criar o National Women\u2019s Political Caucus e organizou a Greve das Mulheres pela Igualdade em 1970. Escreveu depois A Segunda Etapa (1981), em que criticou setores do próprio movimento, e A Fonte da Idade (1993), sobre envelhecimento. Morreu em Washington em 4 de fevereiro de 2006, no dia em que completava 85 anos.'
    ],
    contexto:
      'Friedan escreve nos Estados Unidos do pós-guerra, quando milhões de mulheres que haviam trabalhado durante o conflito foram devolvidas ao espaço doméstico, num período de expansão suburbana e propaganda intensa em torno da família nuclear. Seu livro é frequentemente apontado como o marco inicial da segunda onda feminista, embora seja também criticado por refletir sobretudo a experiência de mulheres brancas de classe média.',
    contribuicoes: ['Escreveu A Mística Feminina (1963), obra que desencadeou a segunda onda do feminismo nos Estados Unidos.', 'Fundou e presidiu a National Organization for Women.', 'Cofundou o National Women\u2019s Political Caucus.', 'Organizou a Greve das Mulheres pela Igualdade, em 1970.'],
    cronologia: [
      [1921, 'Nasce em Peoria, Illinois, em 4 de fevereiro.'],
      [1957, 'Realiza a pesquisa com as ex-colegas do Smith College.'],
      [1963, 'Publica A Mística Feminina.'],
      [1966, 'Funda a National Organization for Women.'],
      [1970, 'Organiza a Greve das Mulheres pela Igualdade.'],
      [2006, 'Morre em Washington.']
    ]
  },

  'Susan B. Anthony': {
    papel: 'Ativista norte-americana pelo sufrágio feminino (1820–1906)',
    resumo: 'Votou ilegalmente para ser presa e levar o direito ao voto feminino aos tribunais; morreu catorze anos antes da vitória.',
    bio: [
      'Susan Brownell Anthony nasceu em Adams, Massachusetts, em 15 de fevereiro de 1820, numa família quacre que participava do movimento abolicionista. Trabalhou como professora e engajou-se primeiro na campanha pela temperança, onde foi impedida de falar por ser mulher — episódio que a levou à luta pelos direitos femininos.',
      'A parceria com Elizabeth Cady Stanton, iniciada em 1851, atravessou meio século: Stanton escrevia, Anthony organizava e percorria o país. Juntas fundaram a National Woman Suffrage Association em 1869 e o jornal The Revolution. Campanharam também pelo direito das mulheres casadas de possuir bens e receber o próprio salário.',
      'Em 1872 votou em Rochester, Nova York, deliberadamente, para provocar um processo judicial. Foi presa, julgada e condenada a uma multa de cem dólares, que se recusou a pagar. O juiz impediu-a de testemunhar e nunca cobrou a multa, justamente para evitar que o caso subisse à Suprema Corte.',
      'Organizou a coleta de assinaturas, os discursos e as petições que sustentaram a campanha por décadas. Morreu em Rochester em 13 de março de 1906. A Décima Nona Emenda, que garantiu o voto feminino nos Estados Unidos, foi ratificada em 1920 e é conhecida como Emenda Susan B. Anthony.'
    ],
    contexto: 'Anthony atuou num período em que o movimento abolicionista e o movimento sufragista nasceram entrelaçados e depois se separaram de forma dolorosa, com divergências sobre a prioridade entre o voto masculino negro e o voto feminino. Esse conflito é parte documentada de sua trajetória e da história do sufragismo americano.',
    contribuicoes: ['Cofundou a National Woman Suffrage Association.', 'Votou ilegalmente em 1872 para levar a questão do sufrágio aos tribunais.', 'Fundou com Stanton o jornal The Revolution.', 'Organizou por décadas a campanha nacional pelo direito de voto feminino.', 'Contribuiu para as leis que garantiram às mulheres casadas o direito à propriedade e ao próprio salário.'],
    cronologia: [
      [1820, 'Nasce em Adams, Massachusetts, em 15 de fevereiro.'],
      [1851, 'Inicia a parceria com Elizabeth Cady Stanton.'],
      [1869, 'Funda a National Woman Suffrage Association.'],
      [1872, 'Vota ilegalmente e é presa.'],
      [1906, 'Morre em Rochester.'],
      [1920, 'A Décima Nona Emenda é ratificada.']
    ]
  },

  'George Washington': {
    papel: 'Militar e político norte-americano, 1º presidente dos Estados Unidos (1732–1799)',
    resumo: 'Comandou a guerra de independência, presidiu a convenção constitucional e, ao deixar o cargo voluntariamente, criou o precedente que definiu a presidência americana.',
    bio: [
      'George Washington nasceu no condado de Westmoreland, na Virgínia, em 22 de fevereiro de 1732. Foi agrimensor e oficial da milícia colonial, com participação nos episódios que desencadearam a Guerra Franco-Indígena. Tornou-se um grande proprietário rural em Mount Vernon.',
      'Em 1775 foi escolhido comandante do Exército Continental. A guerra durou oito anos e foi conduzida com um exército mal equipado, frequentemente sem pagamento e sem suprimentos, contra a maior potência militar da época. O inverno em Valley Forge, em 1777-1778, e a vitória decisiva em Yorktown, em 1781, com apoio francês, são seus momentos definidores.',
      'Ao fim do conflito, renunciou ao comando e voltou à vida civil, gesto que causou espanto na Europa. Presidiu a Convenção da Filadélfia em 1787 e foi eleito por unanimidade primeiro presidente dos Estados Unidos em 1789. Estabeleceu a estrutura do executivo, o gabinete e a neutralidade externa.',
      'Recusou um terceiro mandato e deixou o cargo em 1797, criando o precedente dos dois mandatos, respeitado por 150 anos até ser constitucionalizado. Seu discurso de despedida alertava contra o espírito partidário e as alianças externas permanentes. Escravizou mais de cem pessoas em Mount Vernon; em testamento determinou a libertação daquelas que lhe pertenciam, após a morte de sua esposa. Morreu em 14 de dezembro de 1799.'
    ],
    contexto: 'Washington atuou no momento em que a primeira república moderna de grande escala precisava provar que podia existir sem monarca. A parte mais importante de sua contribuição não foi uma decisão de governo, e sim a repetida recusa em acumular poder — como comandante em 1783 e como presidente em 1796.',
    contribuicoes: ['Comandou o Exército Continental na Guerra de Independência dos Estados Unidos.', 'Presidiu a Convenção Constitucional de 1787.', 'Foi o primeiro presidente dos Estados Unidos e estruturou o poder executivo do país.', 'Criou o precedente da limitação voluntária a dois mandatos.', 'Estabeleceu a prática de neutralidade nas guerras europeias no início da república.'],
    cronologia: [
      [1732, 'Nasce na Virgínia, em 22 de fevereiro.'],
      [1775, 'Assume o comando do Exército Continental.'],
      [1781, 'Vitória decisiva em Yorktown.'],
      [1787, 'Preside a Convenção Constitucional.'],
      [1789, 'Torna-se o primeiro presidente dos Estados Unidos.'],
      [1796, 'Publica o discurso de despedida.'],
      [1799, 'Morre em Mount Vernon.']
    ],
    nota: 'Washington escravizou mais de cem pessoas em suas propriedades. A informação integra o registro histórico de sua trajetória.'
  },

  'Edmund Burke': {
    papel: 'Político e pensador irlandês-britânico (1729–1797)',
    resumo: 'Fundador do conservadorismo moderno, defendeu os colonos americanos e denunciou a Revolução Francesa antes que ela chegasse ao Terror.',
    bio: [
      'Edmund Burke nasceu em Dublin em 12 de janeiro de 1729, filho de pai protestante e mãe católica. Estudou no Trinity College e mudou-se para Londres, onde publicou obras de estética e filosofia antes de entrar na política. Foi membro da Câmara dos Comuns por quase trinta anos, integrando o partido Whig.',
      'Defendeu com energia a causa dos colonos americanos, argumentando que a Coroa deveria buscar conciliação em vez de coerção, e conduziu por anos o processo de impeachment de Warren Hastings pelos abusos da Companhia das Índias Orientais na Índia — campanha que perdeu, mas que fixou o princípio de que administradores coloniais respondem por seus atos.',
      'Reflexões sobre a Revolução em França, publicado em 1790, é sua obra mais influente. Escrito quando a revolução ainda era saudada por boa parte da intelectualidade europeia, o livro previu que a tentativa de refundar a sociedade a partir de princípios abstratos levaria à violência e à ditadura militar. O Terror e a ascensão de Napoleão deram-lhe crédito duradouro.',
      'Sua concepção de sociedade como um contrato entre os que morreram, os vivos e os que ainda vão nascer, e sua defesa da reforma gradual contra a ruptura, tornaram-se a base do conservadorismo político moderno. Morreu em Beaconsfield em 9 de julho de 1797.'
    ],
    contexto: 'Burke escreve em plena era das revoluções. Sua posição só parece contraditória se lida por rótulos: apoiou a independência americana e a resistência irlandesa e indiana, e se opôs à Revolução Francesa. O critério que unifica as posições é a defesa de direitos historicamente constituídos contra o poder abstrato, venha ele da Coroa ou da assembleia revolucionária.',
    contribuicoes: [
      'Escreveu Reflexões sobre a Revolução em França (1790), obra fundadora do pensamento conservador moderno.',
      'Formulou a defesa da reforma gradual contra a ruptura revolucionária.',
      'Defendeu a conciliação com as colônias americanas no Parlamento britânico.',
      'Conduziu o processo contra Warren Hastings pelos abusos coloniais na Índia.',
      'Escreveu Uma Investigação Filosófica sobre a Origem de Nossas Ideias do Sublime e do Belo (1757).'
    ],
    cronologia: [
      [1729, 'Nasce em Dublin, em 12 de janeiro.'],
      [1757, 'Publica o tratado sobre o sublime e o belo.'],
      [1765, 'Elege-se para a Câmara dos Comuns.'],
      [1775, 'Discursa pela conciliação com as colônias americanas.'],
      [1790, 'Publica Reflexões sobre a Revolução em França.'],
      [1797, 'Morre em Beaconsfield.']
    ]
  },

  'José Ortega y Gasset': {
    papel: 'Filósofo espanhol (1883–1955)',
    resumo: 'Formulou que o indivíduo não se separa de suas circunstâncias e analisou a chegada das massas ao centro da vida pública.',
    bio: [
      'José Ortega y Gasset nasceu em Madri em 9 de maio de 1883, em família ligada ao jornalismo. Estudou em Deusto e Madri e completou a formação na Alemanha, em Marburgo, sob influência do neokantismo. Voltou à Espanha como professor de metafísica na Universidade Central de Madri e tornou-se a figura intelectual mais influente do país.',
      'Sua formulação central aparece em Meditações do Quixote (1914): eu sou eu e minha circunstância, e se não salvo a ela não me salvo a mim. A frase resume o raciovitalismo — a razão não pode ser separada da vida concreta e histórica de quem raciocina.',
      'A Rebelião das Massas, de 1930, é sua obra de maior alcance. Analisa a ascensão do que chama de homem-massa, o indivíduo que se sente completo sem esforço e reivindica o direito de impor sua vulgaridade, e associa esse fenômeno às crises políticas da Europa entre guerras.',
      'Fundou a Revista de Occidente, que introduziu na Espanha o pensamento europeu contemporâneo, e a editora de mesmo nome. Foi deputado durante a Segunda República e exilou-se com a Guerra Civil, passando por Argentina e Portugal. Voltou à Espanha nos últimos anos e morreu em Madri em 18 de outubro de 1955.'
    ],
    contexto: 'Ortega escreve numa Espanha atrasada em relação à Europa industrial e dividida politicamente, e numa Europa que entre as duas guerras via ascender os movimentos de massa. Sua obra é uma tentativa de pensar filosoficamente esse duplo problema, e teve influência decisiva sobre o pensamento em língua espanhola e portuguesa.',
    contribuicoes: ['Formulou o raciovitalismo e a tese de que o indivíduo é inseparável de sua circunstância.', 'Escreveu A Rebelião das Massas (1930), análise clássica da sociedade de massas.', 'Fundou a Revista de Occidente, que renovou a vida intelectual espanhola.', 'Introduziu na Espanha a fenomenologia e o pensamento alemão contemporâneo.'],
    cronologia: [
      [1883, 'Nasce em Madri, em 9 de maio.'],
      [1914, 'Publica Meditações do Quixote.'],
      [1923, 'Funda a Revista de Occidente.'],
      [1930, 'Publica A Rebelião das Massas.'],
      [1936, 'Exila-se com a Guerra Civil Espanhola.'],
      [1955, 'Morre em Madri.']
    ]
  },

  'George Bernard Shaw': {
    papel: 'Dramaturgo e crítico irlandês (1856–1950)',
    resumo: 'Usou a comédia para atacar a hipocrisia social e tornou-se o único autor a ganhar o Nobel de Literatura e um Oscar.',
    bio: [
      'George Bernard Shaw nasceu em Dublin em 26 de julho de 1856, em família protestante empobrecida. Mudou-se para Londres aos vinte anos e passou quase uma década escrevendo romances que ninguém quis publicar, sustentado pela mãe, professora de música. Formou-se lendo no British Museum.',
      'Tornou-se crítico musical e teatral de destaque e aderiu ao socialismo, integrando a Fabian Society, que defendia a transformação social por reforma gradual e não por revolução. Escreveu panfletos, discursou por anos e participou da fundação da London School of Economics.',
      'Como dramaturgo, rompeu com o teatro de entretenimento vitoriano. Suas peças discutem prostituição e responsabilidade social em A Profissão da Senhora Warren, guerra e heroísmo em Armas e o Homem, classe e linguagem em Pigmaleão, poder e fé em Santa Joana. O humor é o veículo: Shaw fazia o público rir e simultaneamente reconhecer a própria hipocrisia.',
      'Recebeu o Nobel de Literatura de 1925 e o Oscar de melhor roteiro adaptado em 1939 pela versão cinematográfica de Pigmaleão, combinação até hoje única. A peça viria a inspirar o musical My Fair Lady. Foi vegetariano militante, defensor da reforma ortográfica e polemista incansável até a morte, em Ayot St Lawrence, em 2 de novembro de 1950, aos 94 anos.'
    ],
    contexto: 'Shaw escreve na Inglaterra vitoriana e eduardiana, num período de forte desigualdade e de moralismo rígido. Seu teatro pertence à corrente que, seguindo Ibsen, transformou o palco em espaço de discussão de problemas sociais, e é ao mesmo tempo o mais engraçado dessa corrente.',
    contribuicoes: ['Escreveu Pigmaleão, Santa Joana, Homem e Super-Homem, A Profissão da Senhora Warren e dezenas de outras peças.', 'Recebeu o Nobel de Literatura em 1925 e o Oscar de roteiro adaptado em 1939.', 'Introduziu no teatro inglês a discussão explícita de problemas sociais.', 'Participou da Fabian Society e da fundação da London School of Economics.'],
    cronologia: [
      [1856, 'Nasce em Dublin, em 26 de julho.'],
      [1884, 'Adere à Fabian Society.'],
      [1894, 'Estreia Armas e o Homem.'],
      [1913, 'Estreia Pigmaleão.'],
      [1923, 'Estreia Santa Joana.'],
      [1925, 'Recebe o Nobel de Literatura.'],
      [1938, 'Recebe o Oscar por Pigmaleão.'],
      [1950, 'Morre em Ayot St Lawrence.']
    ]
  },

  'François de La Rochefoucauld': {
    papel: 'Escritor e moralista francês (1613–1680)',
    resumo: 'Reduziu a moral humana a máximas de uma ou duas linhas e sustentou que o amor-próprio se esconde por trás de quase toda virtude.',
    bio: [
      'François VI, duque de La Rochefoucauld, nasceu em Paris em 15 de setembro de 1613, na alta nobreza francesa. Participou ativamente das intrigas da corte e depois da Fronda, a revolta aristocrática contra o poder real durante a menoridade de Luís XIV. Foi gravemente ferido em combate em 1652, quase perdendo a visão, e viu a rebelião fracassar completamente.',
      'Retirado da vida política, passou a frequentar os salões parisienses, sobretudo o de Madame de Sablé, onde a composição de máximas era um jogo social. Foi desse ambiente que saiu seu livro. As Máximas foram publicadas em 1665 e revistas em cinco edições ao longo de sua vida.',
      'A tese que atravessa a obra é implacável: o que chamamos de virtude é quase sempre amor-próprio disfarçado. A generosidade esconde vaidade, a clemência esconde cálculo, a constância pode ser preguiça. Nossas virtudes, escreve na máxima de abertura das edições posteriores, são frequentemente vícios disfarçados.',
      'Manteve amizade longa com Madame de La Fayette e com Madame de Sévigné. Morreu em Paris em 17 de março de 1680. Sua influência atravessa Nietzsche, Schopenhauer e boa parte da psicologia moral moderna.'
    ],
    contexto: 'La Rochefoucauld escreve na corte de Luís XIV, ambiente em que a aparência era instrumento de sobrevivência e a dissimulação, competência básica. Sua obra é o produto direto de um observador desiludido que participou do jogo, perdeu e passou a descrevê-lo por dentro.',
    contribuicoes: ['Escreveu As Máximas (1665), obra central da tradição moralista francesa.', 'Fixou a máxima como forma literária breve e cortante.', 'Formulou a análise do amor-próprio como motor oculto do comportamento humano.', 'Influenciou Nietzsche, Schopenhauer e a psicologia moral moderna.'],
    cronologia: [
      [1613, 'Nasce em Paris, em 15 de setembro.'],
      [1648, 'Participa da Fronda contra o poder real.'],
      [1652, 'É gravemente ferido em combate.'],
      [1665, 'Publica a primeira edição das Máximas.'],
      [1680, 'Morre em Paris.']
    ]
  },

  'Will Durant': {
    papel: 'Historiador e filósofo norte-americano (1885–1981)',
    resumo: 'Escreveu com Ariel Durant os onze volumes de A História da Civilização, e é a fonte real de várias frases atribuídas a Aristóteles.',
    bio: [
      'William James Durant nasceu em North Adams, Massachusetts, em 5 de novembro de 1885, em família católica de origem franco-canadense. Estudou para o sacerdócio e abandonou o seminário. Lecionava numa escola libertária de Nova York quando se apaixonou por uma aluna, Chaya Kaufman, com quem se casou em 1913 e que passou a assinar Ariel Durant.',
      'A História da Filosofia, publicada em 1926, tornou-se um sucesso extraordinário e provou que havia público de massa para obras sérias de divulgação. Foi esse livro que financiou o projeto seguinte.',
      'A História da Civilização ocupou cerca de quatro décadas: onze volumes escritos com Ariel, publicados entre 1935 e 1975, cobrindo da Antiguidade oriental à era napoleônica. O casal recebeu o prêmio Pulitzer de não ficção em 1968 pelo décimo volume e a Medalha Presidencial da Liberdade em 1977.',
      'É de Durant, e não de Aristóteles, a formulação segundo a qual somos aquilo que fazemos repetidamente e a excelência é um hábito e não um ato — uma síntese que ele escreveu em A História da Filosofia ao resumir a Ética a Nicômaco. A frase circula até hoje atribuída ao filósofo grego. Will e Ariel morreram em 1981, com poucos dias de diferença.'
    ],
    contexto: 'Durant escreve num momento em que a especialização acadêmica se aprofundava e a história geral perdia espaço. Sua aposta foi oposta: síntese ampla, prosa acessível e narrativa contínua. É por essa razão que suas formulações resumidas circularam tanto — e por vezes se descolaram de sua autoria.',
    contribuicoes: ['Escreveu A História da Filosofia (1926), obra que popularizou a filosofia para o grande público.', 'Escreveu com Ariel Durant os onze volumes de A História da Civilização.', 'Recebeu o Prêmio Pulitzer de não ficção em 1968 e a Medalha Presidencial da Liberdade em 1977.'],
    cronologia: [
      [1885, 'Nasce em North Adams, Massachusetts.'],
      [1913, 'Casa-se com Ariel Durant.'],
      [1926, 'Publica A História da Filosofia.'],
      [1935, 'Publica o primeiro volume de A História da Civilização.'],
      [1968, 'Recebe o Pulitzer.'],
      [1981, 'Morre na Califórnia.']
    ],
    nota: 'A frase sobre excelência como hábito, atribuída popularmente a Aristóteles, é uma síntese escrita por Durant.'
  },

  'Erving Goffman': {
    papel: 'Sociólogo canadense (1922–1982)',
    resumo: 'Analisou a vida cotidiana como teatro e mostrou como instituições totais reconstroem a identidade de quem vive dentro delas.',
    bio: [
      'Erving Goffman nasceu em Mannville, Alberta, no Canadá, em 11 de junho de 1922, filho de imigrantes judeus ucranianos. Formou-se em Toronto e doutorou-se em Chicago, com pesquisa de campo realizada nas ilhas Shetland, na Escócia, observando a vida social de uma comunidade pequena.',
      'A Representação do Eu na Vida Cotidiana, de 1959, aplica o vocabulário do teatro à interação social: as pessoas atuam diante de plateias, gerenciam impressões, mantêm uma região de fachada onde a performance ocorre e uma região de bastidores onde ela pode relaxar. Essa perspectiva ficou conhecida como dramatúrgica.',
      'Manicômios, Prisões e Conventos, de 1961, resultou de um ano de observação disfarçada num hospital psiquiátrico em Washington. Goffman descreveu a instituição total — o lugar onde comer, dormir, trabalhar e conviver acontecem sob a mesma autoridade — e o processo de mortificação do eu que ela impõe. O livro teve influência direta nos movimentos de reforma psiquiátrica.',
      'Estigma, de 1963, analisou como identidades desacreditadas são gerenciadas socialmente. Lecionou em Berkeley e na Pensilvânia e presidiu a Associação Americana de Sociologia. Morreu na Filadélfia em 19 de novembro de 1982.'
    ],
    contexto: 'Goffman formou-se na tradição da Escola de Chicago, voltada à observação direta da vida urbana, num período em que a sociologia americana era dominada por grandes teorias abstratas. Sua contribuição foi mostrar que a ordem social se produz e se sustenta nos detalhes mínimos da interação face a face.',
    contribuicoes: [
      'Criou a perspectiva dramatúrgica de análise da interação social.',
      'Escreveu A Representação do Eu na Vida Cotidiana (1959).',
      'Formulou o conceito de instituição total em Manicômios, Prisões e Conventos (1961), com impacto direto na reforma psiquiátrica.',
      'Escreveu Estigma (1963), análise das identidades socialmente desacreditadas.',
      'Desenvolveu a análise de quadros em Frame Analysis (1974).'
    ],
    cronologia: [
      [1922, 'Nasce em Mannville, Alberta, em 11 de junho.'],
      [1959, 'Publica A Representação do Eu na Vida Cotidiana.'],
      [1961, 'Publica Manicômios, Prisões e Conventos.'],
      [1963, 'Publica Estigma.'],
      [1974, 'Publica Frame Analysis.'],
      [1982, 'Morre na Filadélfia.']
    ]
  },

  'Solomon Asch': {
    papel: 'Psicólogo social polonês-americano (1907–1996)',
    resumo: 'Demonstrou experimentalmente que pessoas negam o que seus próprios olhos veem para não divergir do grupo.',
    bio: [
      'Solomon Eliot Asch nasceu em Varsóvia em 14 de setembro de 1907 e emigrou para os Estados Unidos aos treze anos. Doutorou-se em Columbia e lecionou em Swarthmore, Rutgers e na Pensilvânia.',
      'Seus experimentos de conformidade, realizados no início dos anos 1950, tornaram-se dos mais citados da psicologia. O procedimento era simples: mostrava-se aos participantes uma linha de referência e três linhas de comparação, uma delas obviamente igual à primeira. Todos os demais presentes na sala eram cúmplices instruídos a dar em voz alta a resposta errada. Uma parcela substancial dos participantes reais acompanhou o erro do grupo.',
      'O resultado desmontou a suposição de que o julgamento perceptivo seria imune à pressão social e mostrou que a presença de um único aliado que discordasse do grupo reduzia drasticamente a conformidade. Asch fez questão de sublinhar que a maioria das respostas continuou independente e que a leitura pessimista do experimento era exagerada.',
      'Foi orientador de Stanley Milgram, cujos experimentos sobre obediência à autoridade partem diretamente desse trabalho. Publicou Social Psychology em 1952. Morreu em Haverford, Pensilvânia, em 20 de fevereiro de 1996.'
    ],
    contexto: 'Asch trabalhava com uma pergunta que atravessava sua geração de pesquisadores judeus emigrados: como sociedades inteiras aderiram ao nazismo. Seus experimentos, junto com os de Milgram e de Zimbardo, fundaram o estudo experimental da influência social.',
    contribuicoes: ['Realizou os experimentos de conformidade que fundaram o estudo experimental da pressão do grupo.', 'Demonstrou que a presença de um único dissidente reduz drasticamente a conformidade.', 'Formulou pesquisas pioneiras sobre formação de impressões e efeito de primazia.', 'Orientou Stanley Milgram, autor dos experimentos sobre obediência.'],
    cronologia: [
      [1907, 'Nasce em Varsóvia, em 14 de setembro.'],
      [1920, 'Emigra para os Estados Unidos.'],
      [1951, 'Publica os primeiros resultados dos experimentos de conformidade.'],
      [1952, 'Publica Social Psychology.'],
      [1996, 'Morre na Pensilvânia.']
    ]
  },

  'Albert Bandura': {
    papel: 'Psicólogo canadense-americano (1925–2021)',
    resumo: 'Mostrou que aprendemos observando os outros e formulou o conceito de autoeficácia, um dos mais influentes da psicologia moderna.',
    bio: [
      'Albert Bandura nasceu em Mundare, Alberta, Canadá, em 4 de dezembro de 1925, filho de imigrantes poloneses e ucranianos, numa aldeia com uma escola minúscula onde os próprios alunos precisavam se ensinar. Formou-se em psicologia na Universidade de Columbia Britânica, doutorou-se em Iowa e passou praticamente toda a carreira em Stanford.',
      'O experimento do boneco Bobo, no início dos anos 1960, é seu trabalho mais conhecido: crianças que assistiram a um adulto agredir um boneco inflável reproduziram o comportamento agressivo, mesmo sem terem sido recompensadas por isso. O resultado contrariava o behaviorismo então dominante, que exigia reforço direto para explicar a aprendizagem.',
      'Dessa base construiu a teoria da aprendizagem social e depois a teoria social cognitiva, que atribui ao ser humano capacidade de agência: somos produto e produtor do ambiente, e regulamos a própria conduta por antecipação, autoavaliação e modelos observados.',
      'Em 1977 formulou o conceito de autoeficácia — a crença na própria capacidade de executar as ações necessárias para atingir um resultado — que se tornou um dos construtos mais usados em psicologia da educação, da saúde e do trabalho. Recebeu a Medalha Nacional de Ciências dos Estados Unidos em 2016 e é apontado como um dos psicólogos mais citados da história. Morreu em Stanford em 26 de julho de 2021.'
    ],
    contexto: 'Bandura publica no momento da transição entre o behaviorismo e a psicologia cognitiva. Sua obra é a ponte: mantém o rigor experimental da tradição anterior e reintroduz processos mentais, expectativas e agência como fatores explicativos.',
    contribuicoes: [
      'Formulou a teoria da aprendizagem social e depois a teoria social cognitiva.',
      'Realizou o experimento do boneco Bobo, demonstrando aprendizagem por observação.',
      'Criou o conceito de autoeficácia, central em psicologia da educação, saúde e trabalho.',
      'Desenvolveu a noção de determinismo recíproco entre pessoa, comportamento e ambiente.',
      'Recebeu a Medalha Nacional de Ciências dos Estados Unidos em 2016.'
    ],
    cronologia: [
      [1925, 'Nasce em Mundare, Alberta, em 4 de dezembro.'],
      [1953, 'Ingressa em Stanford.'],
      [1961, 'Realiza o experimento do boneco Bobo.'],
      [1977, 'Publica o artigo sobre autoeficácia.'],
      [1986, 'Publica Social Foundations of Thought and Action.'],
      [2021, 'Morre em Stanford.']
    ]
  },

  'Zenão de Cítio': {
    papel: 'Filósofo grego, fundador do estoicismo (c. 334 a.C.–c. 262 a.C.)',
    resumo: 'Naufragou, perdeu tudo, entrou numa livraria em Atenas e fundou a escola filosófica que atravessaria dois mil anos.',
    bio: [
      'Zenão nasceu em Cítio, cidade portuária da ilha de Chipre, por volta de 334 a.C., em família de comerciantes de origem fenícia. Segundo o relato transmitido por Diógenes Laércio, era mercador de púrpura e chegou a Atenas depois de um naufrágio em que perdeu toda a carga.',
      'Em Atenas, entrou numa livraria e ouviu a leitura das Memoráveis de Xenofonte, sobre Sócrates. Perguntou onde poderia encontrar homens como aquele; o livreiro apontou para o filósofo cínico Crates de Tebas, que passava na rua. Zenão tornou-se seu discípulo e estudou depois com outros mestres antes de formular doutrina própria.',
      'Por volta de 300 a.C. começou a ensinar sob a Stoá Poikile, o pórtico pintado da ágora ateniense, e foi desse lugar que a escola tirou o nome de estoicismo. Sua doutrina dividia a filosofia em lógica, física e ética, e sustentava que a virtude é o único bem verdadeiro, que ela consiste em viver de acordo com a natureza e a razão, e que o que não depende de nós — riqueza, reputação, saúde, vida — deve ser tratado com indiferença.',
      'Nenhuma de suas obras sobreviveu; são conhecidas apenas por títulos e fragmentos citados por outros autores. Os atenienses concederam-lhe uma coroa de ouro e um túmulo público em reconhecimento. Morreu por volta de 262 a.C. Sua escola atravessaria séculos até Sêneca, Epicteto e Marco Aurélio.'
    ],
    contexto: 'Zenão funda o estoicismo no período helenístico, quando a cidade-Estado grega havia perdido autonomia diante dos impérios sucessores de Alexandre. Num mundo em que o cidadão já não controlava o destino coletivo, a filosofia deslocou-se para a pergunta sobre o que ainda está sob controle do indivíduo — que é exatamente a pergunta estoica.',
    contribuicoes: ['Fundou a escola estoica, uma das mais duradouras da filosofia ocidental.', 'Dividiu a filosofia em lógica, física e ética, estrutura seguida por toda a tradição estoica.', 'Formulou o princípio de viver em acordo com a natureza e a razão.', 'Estabeleceu a distinção entre o que depende de nós e o que não depende, base da ética estoica posterior.'],
    cronologia: [
      ['c. 334 a.C.', 'Nasce em Cítio, no Chipre.'],
      ['c. 312 a.C.', 'Chega a Atenas após o naufrágio e torna-se discípulo de Crates.'],
      ['c. 300 a.C.', 'Começa a ensinar sob a Stoá Poikile.'],
      ['c. 262 a.C.', 'Morre em Atenas.']
    ],
    nota: 'Nenhuma obra de Zenão sobreviveu. Tudo o que se conhece vem de citações e resumos de autores posteriores, sobretudo Diógenes Laércio.'
  },

  'Norberto Bobbio': {
    papel: 'Filósofo político e jurista italiano (1909–2004)',
    resumo: 'Defendeu a democracia liberal e o socialismo ao mesmo tempo, e escreveu a análise mais clara sobre a distinção entre direita e esquerda.',
    bio: [
      'Norberto Bobbio nasceu em Turim em 18 de outubro de 1909, em família burguesa. Formou-se em direito e filosofia e viveu a juventude sob o fascismo, período em que fez concessões ao regime que depois reconheceu publicamente. Participou da resistência antifascista no grupo do Partito d\u2019Azione e foi preso brevemente em 1943.',
      'Após a guerra, tornou-se professor em Turim e uma das vozes intelectuais centrais da República Italiana. Sua obra articula três frentes: a teoria geral do direito, a filosofia política e a análise da democracia real.',
      'Sustentou que democracia não é um ideal a ser realizado por completo, e sim um conjunto de regras de procedimento — quem decide, por quais métodos — cujo valor está em permitir a mudança sem violência. Em O Futuro da Democracia (1984) listou as promessas não cumpridas dos regimes democráticos, entre elas a persistência do poder invisível e a permanência de espaços não democratizados na sociedade.',
      'Em Direita e Esquerda (1994), escrito quando muitos declaravam a distinção superada, argumentou que ela permanece válida e se organiza em torno de uma diferença de atitude diante da igualdade. Foi nomeado senador vitalício em 1984. Morreu em Turim em 9 de janeiro de 2004.'
    ],
    contexto: 'Bobbio pensa numa Itália que saiu do fascismo para uma democracia frágil, com o maior partido comunista do Ocidente e uma direita conservadora poderosa. Sua posição — liberal em método, socialista em fins — o colocou em atrito com os dois lados e explica a clareza com que precisou definir seus termos.',
    contribuicoes: [
      'Formulou a definição procedimental de democracia, centrada em regras do jogo e não em ideais substantivos.',
      'Escreveu O Futuro da Democracia (1984), sobre as promessas não cumpridas dos regimes democráticos.',
      'Escreveu Direita e Esquerda (1994), definindo a distinção pela atitude diante da igualdade.',
      'Desenvolveu a teoria geral do direito na tradição do positivismo jurídico.',
      'Defendeu o vínculo necessário entre democracia e paz nas relações internacionais.'
    ],
    cronologia: [
      [1909, 'Nasce em Turim, em 18 de outubro.'],
      [1943, 'É preso por atividade antifascista.'],
      [1955, 'Publica Política e Cultura.'],
      [1984, 'Publica O Futuro da Democracia e torna-se senador vitalício.'],
      [1994, 'Publica Direita e Esquerda.'],
      [2004, 'Morre em Turim.']
    ]
  },

  'Juscelino Kubitschek': {
    papel: 'Médico e político brasileiro, presidente do Brasil (1902–1976)',
    resumo: 'Construiu Brasília em menos de quatro anos e prometeu cinquenta anos de progresso em cinco.',
    bio: [
      'Juscelino Kubitschek de Oliveira nasceu em Diamantina, Minas Gerais, em 12 de setembro de 1902, em família pobre; o pai morreu quando ele tinha dois anos e a mãe, professora primária, sustentou a família. Formou-se em medicina e especializou-se em urologia na Europa.',
      'Entrou na política pela porta militar: durante a Revolução Constitucionalista de 1932, atuou como médico e aproximou-se de Benedito Valadares, que o levou à chefia de gabinete. Foi deputado, prefeito de Belo Horizonte — onde encomendou a Oscar Niemeyer o conjunto da Pampulha — e governador de Minas Gerais.',
      'Elegeu-se presidente em 1955 e governou de 1956 a 1961 sob o Plano de Metas, com trinta objetivos em energia, transporte, alimentação, indústria de base e educação, mais a meta-síntese: a construção de Brasília. A nova capital, projetada por Lucio Costa no plano urbanístico e por Niemeyer na arquitetura, foi erguida no cerrado e inaugurada em 21 de abril de 1960, menos de quatro anos após o início das obras.',
      'O período foi de crescimento industrial acelerado, com a instalação da indústria automobilística, e também de inflação crescente e endividamento externo. Foi a era da bossa nova e do primeiro título mundial de futebol. Com o golpe militar de 1964, teve os direitos políticos cassados e exilou-se. Morreu em um acidente de carro na via Dutra em 22 de agosto de 1976.'
    ],
    contexto:
      'Kubitschek governou no auge do projeto desenvolvimentista brasileiro, num período democrático breve e instável entre a morte de Vargas e o golpe de 1964. A interiorização da capital respondia a um projeto antigo, previsto desde a primeira Constituição republicana, e a industrialização acelerada dependeu fortemente de capital estrangeiro — dois pontos que estruturam o debate historiográfico sobre seu governo até hoje.',
    contribuicoes: ['Construiu e inaugurou Brasília, transferindo a capital federal para o Planalto Central.', 'Executou o Plano de Metas, com forte expansão de energia, rodovias e indústria de base.', 'Instalou a indústria automobilística no Brasil.', 'Como prefeito de Belo Horizonte, viabilizou o conjunto arquitetônico da Pampulha, marco da arquitetura moderna brasileira.'],
    cronologia: [
      [1902, 'Nasce em Diamantina, Minas Gerais, em 12 de setembro.'],
      [1940, 'Torna-se prefeito de Belo Horizonte.'],
      [1951, 'Elege-se governador de Minas Gerais.'],
      [1956, 'Assume a presidência e lança o Plano de Metas.'],
      [1960, 'Inaugura Brasília em 21 de abril.'],
      [1964, 'Tem os direitos políticos cassados pelo regime militar.'],
      [1976, 'Morre em acidente de carro.']
    ]
  },

  'Ray Kroc': {
    papel: 'Empresário norte-americano (1902–1984)',
    resumo: 'Transformou uma lanchonete da Califórnia numa das maiores redes do mundo, e fez do sistema, não do hambúrguer, o produto.',
    bio: [
      'Raymond Albert Kroc nasceu em Oak Park, Illinois, em 5 de outubro de 1902. Foi motorista de ambulância na Primeira Guerra, pianista, corretor de imóveis e vendedor de copos de papel. Aos cinquenta e poucos anos vendia máquinas de milk-shake quando estranhou um pedido de oito unidades vindo de uma única lanchonete em San Bernardino, na Califórnia.',
      'Foi conhecer o lugar em 1954. Os irmãos Richard e Maurice McDonald haviam eliminado garçons, reduzido o cardápio a poucos itens e organizado a cozinha como linha de montagem, com cada funcionário executando uma única tarefa. O resultado era velocidade e padronização inéditas. Kroc percebeu que o valor não estava naquela loja, e sim no sistema replicável.',
      'Convenceu os irmãos a franquear e abriu a primeira unidade sob sua gestão em Des Plaines, Illinois, em 1955. Impôs padronização rígida de procedimentos, treinamento formal — criou em 1961 a Hamburger University — e um controle de qualidade obsessivo. No mesmo ano comprou os direitos da marca dos irmãos McDonald por 2,7 milhões de dólares, num negócio cujos termos gerariam disputa por décadas.',
      'A estratégia decisiva veio de Harry Sonneborn: a empresa passou a comprar ou arrendar os terrenos e sublocá-los aos franqueados, tornando-se, na prática, uma empresa imobiliária. Kroc comprou também o time de beisebol San Diego Padres e criou a fundação que sustenta as Casas Ronald McDonald. Morreu em San Diego em 14 de janeiro de 1984.'
    ],
    contexto: 'Kroc atua nos Estados Unidos do pós-guerra, com automóvel popularizado, subúrbios em expansão e rodovias novas. A padronização absoluta respondia a uma necessidade daquele momento: um viajante precisava saber, sem entrar, exatamente o que encontraria. A franquia como modelo de negócio se consolidou a partir daí.',
    contribuicoes: ['Transformou o McDonald\u2019s de uma lanchonete local na maior rede de alimentação do mundo.', 'Consolidou o modelo de franquia moderno, com padronização rígida de produto e processo.', 'Criou a Hamburger University, primeira escola corporativa de treinamento em rede de alimentação.', 'Estruturou o modelo imobiliário que sustenta financeiramente a empresa.'],
    cronologia: [
      [1902, 'Nasce em Oak Park, Illinois.'],
      [1954, 'Conhece a lanchonete dos irmãos McDonald.'],
      [1955, 'Abre a primeira unidade franqueada em Des Plaines.'],
      [1961, 'Compra os direitos da marca e funda a Hamburger University.'],
      [1984, 'Morre em San Diego.']
    ]
  },

  'Theodore Levitt': {
    papel: 'Economista e professor de marketing alemão-americano (1925–2006)',
    resumo: 'Escreveu Miopia em Marketing e ensinou empresas a perguntar em que negócio realmente estão.',
    bio: [
      'Theodore Levitt nasceu em Vollmerz, na Alemanha, em 1º de março de 1925, em família judaica que emigrou para os Estados Unidos em 1935 fugindo do nazismo. Serviu no exército americano na Segunda Guerra, doutorou-se em economia na Ohio State University e ingressou na Harvard Business School em 1959, onde lecionou até a aposentadoria.',
      'Miopia em Marketing, publicado na Harvard Business Review em 1960, é um dos artigos mais reproduzidos da história da revista. O argumento é que setores inteiros declinam porque definem seu negócio pelo produto e não pela necessidade do cliente. As ferrovias americanas, seu exemplo mais famoso, entraram em crise por se entenderem como empresas ferroviárias e não como empresas de transporte, e por isso não viram o automóvel e o avião chegarem.',
      'Dessa análise saiu a formulação que passou a ser repetida em toda escola de negócios: as pessoas não querem uma furadeira, querem um furo na parede. O foco desloca-se do que a empresa fabrica para o que o cliente está tentando resolver.',
      'Editou a Harvard Business Review entre 1985 e 1989 e publicou em 1983 o artigo A Globalização dos Mercados, que popularizou o termo globalização no vocabulário empresarial. Morreu em Belmont, Massachusetts, em 28 de junho de 2006.'
    ],
    contexto: 'Levitt escreve quando a produção em massa americana chegava à saturação e a concorrência começava a exigir diferenciação. Seu deslocamento do produto para o cliente é a base conceitual do marketing moderno e antecede em décadas a linguagem hoje corrente sobre necessidade do usuário.',
    contribuicoes: ['Escreveu Miopia em Marketing (1960), um dos artigos mais influentes da história da administração.', 'Formulou a distinção entre definir o negócio pelo produto e defini-lo pela necessidade do cliente.', 'Popularizou o termo globalização aplicado a mercados, em artigo de 1983.', 'Editou a Harvard Business Review entre 1985 e 1989.'],
    cronologia: [
      [1925, 'Nasce em Vollmerz, Alemanha, em 1º de março.'],
      [1935, 'A família emigra para os Estados Unidos.'],
      [1959, 'Ingressa na Harvard Business School.'],
      [1960, 'Publica Miopia em Marketing.'],
      [1983, 'Publica A Globalização dos Mercados.'],
      [2006, 'Morre em Belmont, Massachusetts.']
    ]
  },

  'Eric Ries': {
    papel: 'Empreendedor e escritor norte-americano (1978–)',
    resumo: 'Formulou a startup enxuta, método que transformou o lançamento de produtos em ciclo de experimentação.',
    bio: [
      'Eric Ries nasceu em 1978 e formou-se em ciência da computação em Yale. Participou de startups que fracassaram de forma cara, entre elas a There.com, e depois cofundou a IMVU, empresa de avatares e mundos virtuais, onde desenvolveu na prática o método que descreveria depois.',
      'A Startup Enxuta, publicado em 2011, aplica ao empreendedorismo princípios vindos da produção enxuta da Toyota. A tese central é que uma startup é uma instituição feita para operar sob incerteza extrema, e que por isso seu trabalho não é executar um plano, mas descobrir o que funciona antes de ficar sem dinheiro.',
      'O método se organiza em torno do ciclo construir-medir-aprender, do produto mínimo viável — a menor versão capaz de gerar aprendizado validado —, das métricas acionáveis em oposição às métricas de vaidade, e da decisão de perseverar ou pivotar. O vocabulário passou a ser padrão no setor de tecnologia e migrou para dentro de grandes corporações.',
      'Publicou depois O Estilo Startup (2017), sobre a aplicação do método em organizações estabelecidas, e envolveu-se com iniciativas de governança e ética em tecnologia.'
    ],
    contexto: 'Ries escreve depois do estouro da bolha das empresas de internet, quando ficou evidente que planos de negócio elaborados não protegiam contra o fracasso. Sua proposta substitui a previsão pela experimentação, e teve adoção tão ampla que parte do vocabulário — pivô, produto mínimo viável — se tornou linguagem comum fora do meio técnico.',
    contribuicoes: ['Formulou o método da startup enxuta.', 'Popularizou os conceitos de produto mínimo viável, aprendizado validado e pivô.', 'Estabeleceu a distinção entre métricas acionáveis e métricas de vaidade.', 'Escreveu O Estilo Startup (2017), sobre inovação em organizações estabelecidas.'],
    cronologia: [
      [1978, 'Nasce nos Estados Unidos.'],
      [2004, 'Cofunda a IMVU.'],
      [2008, 'Começa a formular publicamente o método lean startup.'],
      [2011, 'Publica A Startup Enxuta.'],
      [2017, 'Publica O Estilo Startup.']
    ]
  },

  'Peter Thiel': {
    papel: 'Empresário e investidor alemão-americano (1967–)',
    resumo: 'Cofundou o PayPal, fez o primeiro investimento externo no Facebook e defende que o progresso vem de monopólios criativos, não da concorrência.',
    bio: [
      'Peter Andreas Thiel nasceu em Frankfurt, na Alemanha, em 11 de outubro de 1967, e cresceu nos Estados Unidos e na Namíbia. Formou-se em filosofia e depois em direito em Stanford, onde fundou um jornal universitário de posições conservadoras.',
      'Em 1998 cofundou com Max Levchin a empresa que se tornaria o PayPal, vendida ao eBay em 2002. O grupo de fundadores e primeiros funcionários, apelidado de máfia do PayPal, originaria depois LinkedIn, YouTube, Yelp, Tesla e SpaceX. Em 2004 fez o primeiro investimento externo no Facebook, meio milhão de dólares por cerca de dez por cento da empresa.',
      'Fundou a Palantir, empresa de análise de dados com forte atuação junto a governos e agências de segurança, e o fundo Founders Fund. Criou a Thiel Fellowship, que paga jovens para abandonar a universidade e desenvolver projetos próprios.',
      'De Zero a Um, publicado em 2014 a partir de suas aulas em Stanford, sustenta que a concorrência é superestimada: o valor real é criado por empresas que fazem algo genuinamente novo — passar de zero a um — e conquistam posição monopolista, não por empresas que copiam e disputam margens. Sua atuação política e o financiamento de um processo judicial que levou à falência o site Gawker tornaram-no figura pública controversa.'
    ],
    contexto: 'Thiel formula suas teses num Vale do Silício que celebra a disrupção e a competição. Sua posição é deliberadamente contrária ao discurso corrente do setor, e sua influência decorre tanto do capital que administra quanto da rede de fundadores que ajudou a formar.',
    contribuicoes: ['Cofundou o PayPal, um dos primeiros sistemas de pagamento digital em escala.', 'Fez o primeiro investimento externo relevante no Facebook.', 'Fundou a Palantir Technologies e o fundo Founders Fund.', 'Escreveu De Zero a Um (2014), sobre criação de valor por inovação e não por concorrência.', 'Criou a Thiel Fellowship.'],
    cronologia: [
      [1967, 'Nasce em Frankfurt, em 11 de outubro.'],
      [1998, 'Cofunda a empresa que se tornaria o PayPal.'],
      [2004, 'Investe no Facebook e cofunda a Palantir.'],
      [2005, 'Funda o Founders Fund.'],
      [2014, 'Publica De Zero a Um.']
    ]
  },

  'José Martí': {
    papel: 'Escritor e revolucionário cubano (1853–1895)',
    resumo: 'Poeta modernista e organizador da independência de Cuba, morreu em combate no primeiro mês da guerra que ajudou a preparar.',
    bio: [
      'José Julián Martí Pérez nasceu em Havana em 28 de janeiro de 1853, filho de imigrantes espanhóis pobres. Aos dezesseis anos foi condenado a trabalhos forçados por atividade independentista e sofreu lesões permanentes nas pernas antes de ser deportado à Espanha, onde se formou em direito e filosofia.',
      'Passou a maior parte da vida no exílio: México, Guatemala, Venezuela e sobretudo Nova York, onde viveu quinze anos. Sustentou-se como jornalista, tradutor, professor e cônsul de países latino-americanos, e escreveu crônicas sobre os Estados Unidos que estão entre as melhores análises do país feitas por um estrangeiro no século XIX.',
      'Como escritor, é um dos fundadores do modernismo hispano-americano. Ismaelillo (1882), Versos Livres e Versos Sencillos (1891) renovaram a poesia em língua espanhola pela simplicidade e pela musicalidade. Alguns de seus versos foram incorporados à canção Guantanamera. Nosso América (1891) é um ensaio central sobre a identidade latino-americana e sobre o risco representado pela expansão norte-americana.',
      'Fundou em 1892 o Partido Revolucionário Cubano e passou anos unificando as facções independentistas e arrecadando recursos entre trabalhadores cubanos emigrados. Desembarcou em Cuba em abril de 1895 e morreu em combate em Dos Ríos, em 19 de maio, poucas semanas depois. Tornou-se a figura fundadora da nação cubana, reivindicada por praticamente todas as correntes políticas do país.'
    ],
    contexto: 'Martí atua quando Cuba era uma das últimas colônias espanholas nas Américas e quando os Estados Unidos se firmavam como potência continental. Sua originalidade está em pensar a independência cubana simultaneamente contra o colonialismo europeu e contra a tutela norte-americana que previa como próximo perigo.',
    contribuicoes: ['Fundou o Partido Revolucionário Cubano e organizou a guerra de independência de 1895.', 'É um dos fundadores do modernismo hispano-americano.', 'Escreveu Versos Sencillos (1891) e Ismaelillo (1882).', 'Escreveu Nossa América (1891), ensaio decisivo sobre identidade latino-americana.', 'Produziu como cronista uma análise pioneira da sociedade norte-americana do século XIX.'],
    cronologia: [
      [1853, 'Nasce em Havana, em 28 de janeiro.'],
      [1870, 'É condenado a trabalhos forçados por atividade independentista.'],
      [1882, 'Publica Ismaelillo.'],
      [1891, 'Publica Versos Sencillos e Nossa América.'],
      [1892, 'Funda o Partido Revolucionário Cubano.'],
      [1895, 'Morre em combate em Dos Ríos, em 19 de maio.']
    ]
  },

  'Konrad Adenauer': {
    papel: 'Político alemão, primeiro chanceler da Alemanha Ocidental (1876–1967)',
    resumo: 'Assumiu aos 73 anos um país destruído e ocupado e o reintegrou ao Ocidente como democracia estável.',
    bio: [
      'Konrad Hermann Joseph Adenauer nasceu em Colônia em 5 de janeiro de 1876, em família católica modesta. Formou-se em direito e foi prefeito de Colônia de 1917 a 1933, quando os nazistas o destituíram. Sob o regime, foi preso duas vezes e viveu sob vigilância; a segunda prisão ocorreu após o atentado contra Hitler em 1944.',
      'Com a derrota alemã, participou da fundação da União Democrata Cristã e presidiu o conselho parlamentar que redigiu a Lei Fundamental de 1949, a constituição alemã. Tornou-se o primeiro chanceler da República Federal da Alemanha naquele ano, aos 73 anos, e permaneceu no cargo até 1963.',
      'Sua orientação foi a integração ao Ocidente: adesão à OTAN, participação na Comunidade Europeia do Carvão e do Aço e depois na Comunidade Econômica Europeia, e uma reconciliação histórica com a França, selada na relação pessoal com Charles de Gaulle e no Tratado do Eliseu de 1963. Junto com Ludwig Erhard, conduziu o milagre econômico alemão.',
      'Negociou também o acordo de reparações com Israel em 1952, decisão politicamente arriscada dentro da Alemanha. Seu governo foi criticado pela lentidão em processar antigos quadros nazistas mantidos na administração pública. Morreu em Rhöndorf em 19 de abril de 1967.'
    ],
    contexto: 'Adenauer governou uma Alemanha ocupada, dividida, moralmente arrasada e com milhões de refugiados. Sua escolha estratégica — priorizar a ancoragem no Ocidente sobre a reunificação imediata — foi contestada na época e é hoje apontada como a base da estabilidade que permitiria a reunificação em 1990.',
    contribuicoes: ['Foi o primeiro chanceler da República Federal da Alemanha e consolidou a democracia no pós-guerra.', 'Presidiu o conselho que redigiu a Lei Fundamental alemã de 1949.', 'Conduziu a integração da Alemanha à OTAN e às comunidades europeias.', 'Promoveu a reconciliação franco-alemã, formalizada no Tratado do Eliseu.', 'Negociou o acordo de reparações com Israel em 1952.'],
    cronologia: [
      [1876, 'Nasce em Colônia, em 5 de janeiro.'],
      [1917, 'Torna-se prefeito de Colônia.'],
      [1933, 'É destituído pelos nazistas.'],
      [1949, 'Torna-se o primeiro chanceler da Alemanha Ocidental.'],
      [1952, 'Negocia o acordo de reparações com Israel.'],
      [1963, 'Assina o Tratado do Eliseu e deixa o cargo.'],
      [1967, 'Morre em Rhöndorf.']
    ]
  },

  'Bernard Montgomery': {
    papel: 'Marechal britânico (1887–1976)',
    resumo: 'Venceu El Alamein, comandou as forças terrestres do Dia D e foi tão eficaz quanto difícil de conviver.',
    bio: [
      'Bernard Law Montgomery nasceu em Londres em 17 de novembro de 1887, filho de um bispo anglicano, e passou parte da infância na Tasmânia. Formou-se em Sandhurst e foi gravemente ferido na Primeira Guerra Mundial, experiência que moldou sua obsessão por preparação minuciosa e por evitar baixas desnecessárias.',
      'Assumiu em agosto de 1942 o Oitavo Exército britânico no Norte da África, então em retirada diante das forças de Rommel. Reorganizou o comando, restaurou a moral e venceu a Segunda Batalha de El Alamein em novembro daquele ano, primeira grande vitória terrestre britânica da guerra. Churchill afirmaria depois que antes de El Alamein não houve vitórias e que depois dela não houve derrotas.',
      'Comandou forças na Sicília e na Itália e foi encarregado do comando das forças terrestres aliadas no desembarque da Normandia em junho de 1944, sob a autoridade geral de Eisenhower. Em setembro do mesmo ano concebeu a Operação Market Garden, tentativa ambiciosa de atravessar o Reno pela Holanda que terminou em fracasso custoso em Arnhem.',
      'Recebeu a rendição das forças alemãs no norte da Europa em Lüneburg, em maio de 1945. Sua relação com os comandantes americanos, sobretudo Eisenhower e Patton, foi marcada por atritos constantes decorrentes de seu temperamento e de sua franqueza pública. Morreu em Hampshire em 24 de março de 1976.'
    ],
    contexto: 'Montgomery comandou num momento em que o Reino Unido precisava desesperadamente de uma vitória terrestre e em que a coalizão aliada exigia coordenação entre exércitos de culturas militares distintas. Seu método metódico e avesso ao improviso contrastava com o estilo americano e é a raiz tanto de seus êxitos quanto dos conflitos que gerou.',
    contribuicoes: ['Comandou o Oitavo Exército na vitória de El Alamein, ponto de virada da campanha do Norte da África.', 'Comandou as forças terrestres aliadas no desembarque da Normandia.', 'Recebeu a rendição alemã no norte da Europa em maio de 1945.', 'Serviu depois como chefe do Estado-Maior Imperial e vice-comandante supremo aliado na Europa.'],
    cronologia: [
      [1887, 'Nasce em Londres, em 17 de novembro.'],
      [1942, 'Assume o Oitavo Exército e vence El Alamein.'],
      [1944, 'Comanda as forças terrestres do desembarque na Normandia.'],
      [1944, 'Conduz a fracassada Operação Market Garden.'],
      [1945, 'Recebe a rendição alemã em Lüneburg.'],
      [1976, 'Morre em Hampshire.']
    ]
  },

  'Reed Hastings': {
    papel: 'Empresário norte-americano (1960–)',
    resumo: 'Levou a Netflix do envio de DVDs pelo correio ao streaming global, destruindo duas vezes o próprio modelo de negócio.',
    bio: [
      'Wilmot Reed Hastings Jr. nasceu em Boston em 8 de outubro de 1960. Formou-se em matemática no Bowdoin College, serviu no Corpo da Paz como professor de matemática na Suazilândia e fez mestrado em ciência da computação em Stanford. Fundou a Pure Software, empresa de ferramentas de depuração, vendida em 1997.',
      'Fundou a Netflix naquele mesmo ano com Marc Randolph. O modelo inicial era o aluguel de DVDs por correio com assinatura mensal, sem multa por atraso — proposta desenhada em oposição direta à Blockbuster, que retirava boa parte da receita justamente das multas. A Blockbuster recusou uma oferta de compra da Netflix em 2000.',
      'Em 2007 a empresa lançou o streaming, canibalizando o próprio negócio principal. A tentativa de separar as duas operações em 2011, com a criação da marca Qwikster, provocou perda em massa de assinantes e queda acentuada das ações; Hastings recuou publicamente. A partir de 2013, com House of Cards, a empresa passou a produzir conteúdo próprio e tornou-se um estúdio.',
      'Hastings também formulou uma cultura organizacional influente, descrita no documento Netflix Culture e no livro A Regra é Não Ter Regras (2020), escrito com Erin Meyer: alta densidade de talento, liberdade com responsabilidade, ausência de política de férias e franqueza permanente. Deixou o cargo de co-CEO em 2023 e permanece presidente do conselho.'
    ],
    contexto: 'Hastings atua na transição da mídia física para a distribuição digital. O traço distintivo de sua gestão é a disposição de destruir o negócio que funciona antes que outro o destrua — primeiro o DVD pelo streaming, depois o licenciamento de conteúdo alheio pela produção própria.',
    contribuicoes: ['Cofundou a Netflix e conduziu sua transição do DVD por correio ao streaming global.', 'Estabeleceu o modelo de assinatura sem multa por atraso no aluguel de vídeo.', 'Transformou a empresa em produtora de conteúdo original a partir de 2013.', 'Formulou e divulgou a cultura organizacional da Netflix, referência ampla em gestão de pessoas.'],
    cronologia: [
      [1960, 'Nasce em Boston, em 8 de outubro.'],
      [1997, 'Funda a Netflix com Marc Randolph.'],
      [2007, 'Lança o serviço de streaming.'],
      [2011, 'Recua da separação da marca Qwikster após reação dos assinantes.'],
      [2013, 'Lança House of Cards, primeira grande produção original.'],
      [2020, 'Publica A Regra é Não Ter Regras.'],
      [2023, 'Deixa a função de co-CEO.']
    ]
  },

  'Larry Page': {
    papel: 'Empresário e cientista da computação norte-americano (1973–)',
    resumo: 'Criou com Sergey Brin o algoritmo que organizou a web e transformou a busca em infraestrutura da vida contemporânea.',
    bio: [
      'Lawrence Edward Page nasceu em East Lansing, Michigan, em 26 de março de 1973, filho de um professor de ciência da computação e de uma professora de programação. Cresceu cercado de computadores e revistas técnicas. Formou-se em engenharia da computação em Michigan e foi para o doutorado em Stanford, onde conheceu Sergey Brin.',
      'Sua pesquisa de doutorado partia de uma pergunta sobre a estrutura de links da web: se uma citação acadêmica indica relevância, um link também poderia indicar. Dessa ideia nasceu o PageRank, algoritmo que classifica páginas não pela quantidade de vezes que um termo aparece, mas pela quantidade e qualidade das páginas que apontam para elas. Era uma ruptura com os buscadores da época.',
      'O Google foi fundado em 1998 numa garagem em Menlo Park. Page foi presidente executivo até 2001, quando Eric Schmidt assumiu, e voltou ao cargo entre 2011 e 2015. Sob sua liderança a empresa lançou o Android, o Chrome, o Gmail e adquiriu o YouTube.',
      'Em 2015 reorganizou a empresa criando a Alphabet, holding que separa a busca e a publicidade das apostas de longo prazo em áreas como saúde, veículos autônomos e inteligência artificial. Deixou o comando da Alphabet em 2019, mantendo participação relevante e afastando-se da vida pública.'
    ],
    contexto: 'Page e Brin criaram o Google quando a web havia crescido além da capacidade dos diretórios manuais e dos buscadores por frequência de palavras. O PageRank resolveu um problema de escala que estava se tornando insolúvel, e a solução acabou por reorganizar a economia da informação e da publicidade.',
    contribuicoes: ['Criou com Sergey Brin o algoritmo PageRank.', 'Cofundou o Google, que se tornou a principal infraestrutura de busca da internet.', 'Conduziu a aquisição do Android e do YouTube.', 'Criou a Alphabet, separando a operação principal das apostas de longo prazo.'],
    cronologia: [
      [1973, 'Nasce em East Lansing, Michigan, em 26 de março.'],
      [1996, 'Inicia com Brin o projeto de busca em Stanford.'],
      [1998, 'Funda o Google.'],
      [2005, 'O Google adquire o Android.'],
      [2011, 'Reassume a presidência executiva do Google.'],
      [2015, 'Cria a Alphabet.'],
      [2019, 'Deixa o comando da Alphabet.']
    ]
  },

  'Gerda Lerner': {
    papel: 'Historiadora austríaca-americana (1920–2013)',
    resumo: 'Fundou a história das mulheres como disciplina acadêmica e mostrou que o patriarcado tem data de início e, portanto, pode terminar.',
    bio: [
      'Gerda Hedwig Kronstein nasceu em Viena em 30 de abril de 1920, em família judaica de classe média. Após a anexação da Áustria pela Alemanha nazista em 1938, foi presa com a mãe e mantida em cárcere por semanas; a família conseguiu fugir, e ela emigrou para os Estados Unidos em 1939. Parte dos parentes morreu no Holocausto.',
      'Trabalhou por anos em empregos diversos, escreveu ficção e roteiros e só concluiu a graduação aos 43 anos, doutorando-se em Columbia em 1966. Sua tese sobre as irmãs Grimké, abolicionistas do Sul dos Estados Unidos, já indicava o programa: recuperar mulheres apagadas do registro histórico.',
      'Criou em 1972, no Sarah Lawrence College, o primeiro programa de pós-graduação em história das mulheres dos Estados Unidos, e depois um doutorado na Universidade de Wisconsin-Madison. Foi decisiva na institucionalização do campo.',
      'A Criação do Patriarcado, de 1986, é sua obra central. Argumenta, a partir de fontes da Mesopotâmia, que a subordinação feminina não é natural nem eterna: foi construída historicamente num processo longo, ligado à formação do Estado e da propriedade. Se teve começo, pode ter fim. Em A Criação da Consciência Feminista (1993) estudou como mulheres, privadas de acesso à própria história, precisaram reinventar continuamente a mesma crítica. Morreu em Madison em 2 de janeiro de 2013.'
    ],
    contexto: 'Lerner escreve quando a história acadêmica tratava as mulheres como ausência, e quando o movimento feminista da segunda onda buscava fundamentação histórica. Sua contribuição foi mostrar que a questão não era acrescentar mulheres à história existente, e sim reformular as categorias com que a história é escrita.',
    contribuicoes: ['Fundou o primeiro programa de pós-graduação em história das mulheres dos Estados Unidos.', 'Escreveu A Criação do Patriarcado (1986), demonstrando a origem histórica da subordinação feminina.', 'Escreveu A Criação da Consciência Feminista (1993).', 'Presidiu a Organização dos Historiadores Americanos.'],
    cronologia: [
      [1920, 'Nasce em Viena, em 30 de abril.'],
      [1938, 'É presa após a anexação da Áustria.'],
      [1939, 'Emigra para os Estados Unidos.'],
      [1966, 'Doutora-se em Columbia.'],
      [1972, 'Cria o programa de história das mulheres no Sarah Lawrence College.'],
      [1986, 'Publica A Criação do Patriarcado.'],
      [2013, 'Morre em Madison.']
    ]
  },

  'Thomas Sowell': {
    papel: 'Economista e escritor norte-americano (1930–)',
    resumo: 'Defende a análise de custos e trade-offs contra o que chama de soluções, e é uma das vozes conservadoras mais citadas dos Estados Unidos.',
    bio: [
      'Thomas Sowell nasceu em Gastonia, Carolina do Norte, em 30 de junho de 1930, e foi criado por uma tia-avó após a morte do pai. Cresceu no Harlem, abandonou o ensino médio, serviu nos fuzileiros navais durante a Guerra da Coreia e retomou os estudos depois. Formou-se em Harvard, fez mestrado em Columbia e doutorou-se em Chicago sob orientação de George Stigler.',
      'Foi marxista na juventude. A mudança, segundo seu próprio relato, veio de um verão trabalhando no Departamento do Trabalho, ao observar como uma política de salário mínimo em Porto Rico produzia efeitos opostos aos pretendidos. Passou a desconfiar de intenções e a examinar consequências.',
      'Em Conflito de Visões (1987) propõe que boa parte das divergências políticas decorre de duas concepções de natureza humana: a visão restrita, que a considera limitada e imperfeita e busca soluções de compromisso, e a visão irrestrita, que a considera aperfeiçoável e busca soluções completas. Em Economia Básica escreveu um manual sem gráficos nem equações, com grande alcance popular.',
      'Sua produção sobre raça, cultura e migração — inclusive a trilogia sobre raça e cultura — é objeto de debate acadêmico intenso, com críticos contestando suas conclusões sobre discriminação e políticas afirmativas. É pesquisador da Hoover Institution, em Stanford, e autor de mais de trinta livros.'
    ],
    contexto: 'Sowell escreve a partir de uma posição incomum: economista negro formado em Chicago e crítico de políticas concebidas para beneficiar minorias. Sua insistência metodológica é que políticas devem ser julgadas por resultados verificáveis e não por intenções declaradas, princípio que organiza toda a sua obra e explica sua recepção polarizada.',
    contribuicoes: [
      'Escreveu Conflito de Visões (1987), sobre as concepções de natureza humana que sustentam as divergências políticas.',
      'Escreveu Economia Básica, manual de economia sem formalização matemática, com grande alcance popular.',
      'Produziu extensa obra comparativa sobre raça, cultura e migrações.',
      'Formulou a crítica sistemática às políticas avaliadas por intenções em vez de resultados.'
    ],
    cronologia: [
      [1930, 'Nasce em Gastonia, Carolina do Norte, em 30 de junho.'],
      [1951, 'Serve nos fuzileiros navais durante a Guerra da Coreia.'],
      [1968, 'Doutora-se em economia pela Universidade de Chicago.'],
      [1980, 'Ingressa na Hoover Institution, em Stanford.'],
      [1987, 'Publica Conflito de Visões.'],
      [2000, 'Publica Economia Básica.']
    ]
  },

  'Jonathan Haidt': {
    papel: 'Psicólogo social norte-americano (1963–)',
    resumo: 'Mostrou que o juízo moral é primeiro intuitivo e só depois racionalizado, e estuda os efeitos das redes sociais sobre a saúde mental dos jovens.',
    bio: [
      'Jonathan David Haidt nasceu em Nova York em 19 de outubro de 1963. Formou-se em filosofia em Yale e doutorou-se em psicologia na Pensilvânia, com pesquisa de campo no Brasil e na Índia sobre variações culturais do juízo moral. Lecionou na Universidade da Virgínia e depois na Stern School of Business, da Universidade de Nova York.',
      'Sua tese central, formulada no modelo intuicionista social, inverte a ordem tradicional: a intuição moral vem primeiro, rápida e automática, e o raciocínio vem depois, funcionando menos como juiz e mais como advogado que constrói justificativas. A metáfora que popularizou compara a mente a um elefante — as intuições — montado por um condutor pequeno, a razão.',
      'Com colegas desenvolveu a teoria dos fundamentos morais, que identifica bases intuitivas distintas — cuidado, justiça, lealdade, autoridade, santidade, liberdade — e mostra que grupos políticos diferentes apoiam-se em conjuntos diferentes desses fundamentos. Foi a base de A Mente Moralista (2012), que explica a incompreensão mútua entre progressistas e conservadores.',
      'Com Greg Lukianoff escreveu O Mimo da Mente Americana (2018), sobre cultura universitária e fragilidade, e em 2024 publicou A Geração Ansiosa, argumentando que a chegada do smartphone e das redes sociais explica boa parte do aumento de transtornos de ansiedade e depressão entre adolescentes desde 2012. A tese gerou debate acadêmico intenso, com pesquisadores contestando a força da relação causal apresentada.'
    ],
    contexto: 'Haidt trabalha num período de polarização política acentuada e de transformação radical da adolescência pelo ambiente digital. Sua obra atravessa esses dois temas com o mesmo método: usar psicologia experimental para explicar fenômenos sociais que o debate público trata em termos morais.',
    contribuicoes: ['Formulou o modelo intuicionista social do juízo moral.', 'Desenvolveu com colegas a teoria dos fundamentos morais.', 'Escreveu A Hipótese da Felicidade (2006) e A Mente Moralista (2012).', 'Escreveu A Geração Ansiosa (2024), sobre smartphones, redes sociais e saúde mental adolescente.'],
    cronologia: [
      [1963, 'Nasce em Nova York, em 19 de outubro.'],
      [2001, 'Publica o artigo sobre o modelo intuicionista social.'],
      [2006, 'Publica A Hipótese da Felicidade.'],
      [2012, 'Publica A Mente Moralista.'],
      [2018, 'Publica O Mimo da Mente Americana, com Greg Lukianoff.'],
      [2024, 'Publica A Geração Ansiosa.']
    ],
    nota: 'A tese central de A Geração Ansiosa sobre causalidade entre redes sociais e saúde mental é objeto de debate acadêmico em curso.'
  },

  'Dan Ariely': {
    papel: 'Psicólogo e economista comportamental israelense-americano (1967–)',
    resumo: 'Demonstrou experimentalmente que somos irracionais de forma sistemática e previsível.',
    bio: [
      'Dan Ariely nasceu em Nova York em 29 de abril de 1967 e cresceu em Israel. Aos dezoito anos sofreu queimaduras em cerca de setenta por cento do corpo numa explosão e passou quase três anos internado. A experiência do tratamento — em especial a discussão com os enfermeiros sobre a forma menos dolorosa de remover bandagens — despertou seu interesse pelo estudo empírico do comportamento e da dor.',
      'Doutorou-se em psicologia cognitiva na Universidade da Carolina do Norte e em administração de empresas em Duke, onde é professor. Trabalhou também no MIT Media Lab.',
      'Previsivelmente Irracional, publicado em 2008, reuniu experimentos que mostram padrões estáveis de desvio da racionalidade: o poder do gratuito, o efeito da ancoragem em preços, a diferença entre normas sociais e normas de mercado, a influência da expectativa sobre a experiência real de um produto. O livro tornou-se um dos títulos mais vendidos da economia comportamental.',
      'Publicou depois A Mais Pura Verdade sobre a Desonestidade (2012) e Positivamente Irracional. Em 2021, um estudo sobre honestidade do qual foi coautor teve dados apontados como fabricados por pesquisadores independentes; Ariely negou responsabilidade pela manipulação, e uma investigação de Duke não encontrou evidência de que ele tenha falsificado os dados, mas o episódio afetou a recepção de parte de sua obra.'
    ],
    contexto: 'Ariely publica na esteira do trabalho de Kahneman e Tversky, que fundou a economia comportamental, e num momento em que a suposição do agente racional já vinha sendo questionada dentro da própria economia. Sua contribuição foi levar experimentos rigorosos e resultados contraintuitivos ao grande público.',
    contribuicoes: ['Escreveu Previsivelmente Irracional (2008), um dos livros mais influentes da economia comportamental.', 'Demonstrou experimentalmente efeitos de ancoragem, do preço zero e da distinção entre normas sociais e de mercado.', 'Fundou o Center for Advanced Hindsight, em Duke.', 'Popularizou a aplicação da economia comportamental a políticas públicas e a saúde.'],
    cronologia: [
      [1967, 'Nasce em Nova York, em 29 de abril.'],
      [1985, 'Sofre o acidente que o deixa internado por quase três anos.'],
      [1998, 'Doutora-se em psicologia cognitiva.'],
      [2008, 'Publica Previsivelmente Irracional.'],
      [2012, 'Publica A Mais Pura Verdade sobre a Desonestidade.']
    ],
    nota: 'Um estudo de 2012 sobre honestidade do qual foi coautor teve dados identificados como fabricados; investigação institucional não atribuiu a falsificação a Ariely, que nega responsabilidade.'
  },

  'Tristan Harris': {
    papel: 'Especialista em ética da tecnologia norte-americano (1984–)',
    resumo: 'Saiu do Google denunciando que os produtos digitais são projetados para capturar atenção, e transformou a crítica em movimento.',
    bio: [
      'Tristan Harris nasceu em 1984 na Califórnia. Estudou ciência da computação em Stanford e trabalhou no Persuasive Technology Lab, laboratório dedicado a estudar como sistemas computacionais podem mudar comportamento. Fundou uma pequena empresa, a Apture, adquirida pelo Google em 2011.',
      'Dentro do Google, escreveu em 2013 uma apresentação interna argumentando que a empresa tinha responsabilidade moral sobre o modo como seus produtos consumiam a atenção das pessoas. O documento circulou amplamente e resultou na criação de um cargo informal de especialista em ética do design, que ele ocupou por três anos.',
      'Deixou a empresa em 2016 e passou a defender publicamente que aplicativos e redes sociais aplicam técnicas comprovadas de captura de atenção — rolagem infinita, notificações intermitentes, contadores sociais — que exploram vulnerabilidades cognitivas conhecidas. Cofundou o Center for Humane Technology.',
      'Sua participação no documentário O Dilema das Redes, de 2020, levou o argumento a grande público e contribuiu para a formulação de políticas de design e regulação em vários países. Testemunhou perante comitês do Congresso norte-americano sobre os efeitos das plataformas.'
    ],
    contexto: 'Harris fala a partir de dentro: conhece as técnicas porque estudou e aplicou o design persuasivo. Sua crítica surge quando os efeitos das plataformas sobre atenção, saúde mental e debate público deixaram de ser hipótese e passaram a ser objeto de investigação regulatória em várias jurisdições.',
    contribuicoes: ['Formulou publicamente a crítica ao design de captura de atenção nas plataformas digitais.', 'Cofundou o Center for Humane Technology.', 'Popularizou o conceito de economia da atenção fora dos círculos acadêmicos.', 'Participou de O Dilema das Redes (2020), documentário de grande alcance sobre os efeitos das redes sociais.'],
    cronologia: [
      [1984, 'Nasce na Califórnia.'],
      [2011, 'A Apture é adquirida pelo Google.'],
      [2013, 'Escreve a apresentação interna sobre ética da atenção.'],
      [2016, 'Deixa o Google e cofunda o Center for Humane Technology.'],
      [2020, 'Participa do documentário O Dilema das Redes.']
    ]
  },

  'Ken Blanchard': {
    papel: 'Escritor e consultor norte-americano de liderança (1939–)',
    resumo: 'Escreveu O Gerente-Minuto e formulou a liderança situacional, segundo a qual não existe um único estilo certo de liderar.',
    bio: [
      'Kenneth Hartley Blanchard nasceu em Orange, Nova Jersey, em 6 de maio de 1939, e cresceu em New Rochelle, Nova York. Formou-se em governo e filosofia na Cornell, fez mestrado em Colgate e doutorou-se em administração educacional e liderança na Cornell. Lecionou por anos antes de se dedicar à consultoria.',
      'Com Paul Hersey desenvolveu no fim dos anos 1960 a teoria da liderança situacional, que sustenta não existir um estilo de liderança universalmente eficaz: o estilo adequado depende do nível de competência e de comprometimento do liderado para uma tarefa específica. O modelo distingue quatro estilos, do mais diretivo ao mais delegativo.',
      'O Gerente-Minuto, escrito com Spencer Johnson e publicado em 1982, vendeu milhões de exemplares. O formato é uma parábola curta com três práticas simples: metas de um minuto, elogios de um minuto e repreensões — depois reformuladas como redirecionamentos — de um minuto. A simplicidade deliberada é a razão do alcance e também da crítica de que o livro simplifica demais.',
      'Fundou com a esposa Margie a consultoria The Ken Blanchard Companies e escreveu ou coescreveu dezenas de livros, entre eles Liderança de Alto Nível e Um Sonho Possível.'
    ],
    contexto: 'Blanchard escreve no momento em que a literatura de gestão passou do tratado acadêmico ao formato popular de grande circulação. O Gerente-Minuto inaugurou o gênero da parábola empresarial curta, que dominaria as listas de mais vendidos pelas duas décadas seguintes.',
    contribuicoes: ['Desenvolveu com Paul Hersey a teoria da liderança situacional.', 'Escreveu com Spencer Johnson O Gerente-Minuto (1982), um dos livros de gestão mais vendidos da história.', 'Inaugurou o formato da parábola empresarial curta na literatura de administração.', 'Fundou a consultoria The Ken Blanchard Companies.'],
    cronologia: [
      [1939, 'Nasce em Orange, Nova Jersey, em 6 de maio.'],
      [1969, 'Publica com Hersey a primeira formulação da liderança situacional.'],
      [1982, 'Publica O Gerente-Minuto.'],
      [1985, 'Funda a The Ken Blanchard Companies.']
    ]
  },

  'Jim Rohn': {
    papel: 'Palestrante e escritor norte-americano de desenvolvimento pessoal (1930–2009)',
    resumo: 'Foi um dos criadores do circuito moderno de palestras motivacionais e mentor de boa parte da geração seguinte do setor.',
    bio: [
      'Emanuel James Rohn nasceu em Yakima, Washington, em 17 de setembro de 1930, filho único de agricultores. Abandonou a faculdade após um ano e trabalhou como empregado de escritório. Aos 25 anos, endividado, conheceu o empresário John Earl Shoaff, que se tornou seu mentor e o levou para a venda direta.',
      'Construiu patrimônio na área e passou, no fim dos anos 1950, a ser convidado para falar sobre a própria trajetória. A partir dos anos 1960 dedicou-se integralmente a palestras e seminários, tornando-se uma das figuras centrais do circuito norte-americano de desenvolvimento pessoal ao lado de nomes como Zig Ziglar.',
      'Sua mensagem organiza-se em torno de poucas ideias repetidas: disciplina como diferença entre quem realiza e quem não realiza, responsabilidade individual sobre resultados, valor do estudo contínuo e importância das companhias que se escolhe. Publicou Sete Estratégias para Alcançar Riqueza e Felicidade e The Art of Exceptional Living, entre outros títulos.',
      'Foi mentor direto de Tony Robbins, que começou aos dezessete anos trabalhando para ele, e influenciou Brian Tracy e Darren Hardy. Morreu em Los Angeles em 5 de dezembro de 2009.'
    ],
    contexto: 'Rohn atua na consolidação de um mercado de desenvolvimento pessoal que ganhou escala nos Estados Unidos a partir dos anos 1960, com seminários pagos, fitas cassete e depois vídeo. É uma tradição que remonta a Napoleon Hill e Dale Carnegie e que ele ajudou a profissionalizar como circuito de palestras.',
    contribuicoes: ['Foi um dos formadores do circuito profissional de palestras de desenvolvimento pessoal nos Estados Unidos.', 'Escreveu Sete Estratégias para Alcançar Riqueza e Felicidade.', 'Foi mentor de Tony Robbins e influência declarada de Brian Tracy e Darren Hardy.'],
    cronologia: [
      [1930, 'Nasce em Yakima, Washington, em 17 de setembro.'],
      [1955, 'Conhece John Earl Shoaff, que se torna seu mentor.'],
      [1963, 'Realiza a primeira grande palestra pública em Beverly Hills.'],
      [1985, 'Publica Sete Estratégias para Alcançar Riqueza e Felicidade.'],
      [2009, 'Morre em Los Angeles.']
    ]
  }
});

/* ----------------------------------------------------------------
   PASSE 4 — OBRAS E DESCRIÇÕES (§10, §12)
   Padrão da descrição: do que trata + contexto + ideias + importância.
   ---------------------------------------------------------------- */
const OBRAS_F8 = {
  'Max Weber': [
    [
      'A Ética Protestante e o Espírito do Capitalismo',
      'livro',
      1905,
      'Investiga por que o capitalismo racional moderno nasceu justamente nas regiões protestantes da Europa. Weber sustenta que a doutrina calvinista da predestinação, ao levar os fiéis a buscar no êxito do trabalho um sinal de graça divina, produziu uma disciplina de poupança, reinvestimento e vocação profissional que o capitalismo depois absorveu e dispensou. Escrito em 1904 e 1905, é a resposta weberiana ao materialismo histórico: sem negar o peso da economia, mostra que ideias religiosas podem produzir efeitos materiais duradouros. É uma das obras mais discutidas das ciências sociais.'
    ],
    [
      'Ciência e Política: Duas Vocações',
      'livro',
      1919,
      'Reúne duas conferências proferidas a estudantes de Munique nos anos finais da vida de Weber, com a Alemanha derrotada na guerra e em convulsão revolucionária. Na primeira, descreve a ciência como atividade especializada que pode esclarecer meios e consequências, mas não fundamentar fins últimos. Na segunda, distingue a ética da convicção, que julga pela pureza da intenção, da ética da responsabilidade, que julga pelas consequências previsíveis do ato — e define o Estado pelo monopólio do uso legítimo da força física. Continua sendo leitura básica em ciência política.'
    ],
    [
      'Economia e Sociedade',
      'livro',
      1922,
      'Obra monumental e inacabada, organizada e publicada postumamente por Marianne Weber. Constrói o vocabulário conceitual da sociologia weberiana: ação social, tipos ideais, formas de dominação legítima, burocracia, classe, status e partido. É o texto em que a teoria da racionalização e da burocratização do mundo moderno aparece em sua forma mais desenvolvida, e sua influência atravessa a sociologia, o direito e a administração pública do século XX.'
    ]
  ],
  'Noam Chomsky': [
    [
      'Estruturas Sintáticas',
      'livro',
      1957,
      'Livro curto que reorganizou a linguística ao propor que a capacidade humana de gerar frases inéditas depende de um sistema finito de regras, e não de imitação. Publicado quando o behaviorismo tratava a linguagem como hábito aprendido, apresenta a gramática gerativa transformacional e argumenta que uma teoria da língua precisa explicar a criatividade do falante. É apontado como um dos textos que desencadearam a revolução cognitiva nas ciências humanas.'
    ],
    [
      'Manufaturando Consenso (com Edward Herman)',
      'livro',
      1988,
      'Analisa como a imprensa de sociedades democráticas produz consentimento sem recorrer à censura. Chomsky e Herman propõem um modelo de propaganda baseado em cinco filtros — concentração de propriedade, dependência de publicidade, uso de fontes oficiais, mecanismos de pressão e enquadramento ideológico — e o testam comparando a cobertura de conflitos semelhantes em países aliados e adversários. Tornou-se referência central da crítica de mídia contemporânea.'
    ],
    ['A Responsabilidade dos Intelectuais', 'ensaio', 1967, 'Ensaio publicado durante a Guerra do Vietnã que sustenta caber a quem tem acesso à informação e tempo para analisá-la a tarefa de expor as mentiras dos governos. É o texto que inaugura a atuação política pública de Chomsky e permanece um dos manifestos mais citados sobre o papel do intelectual.']
  ],
  'Pierre Bourdieu': [
    [
      'A Distinção: Crítica Social do Julgamento',
      'livro',
      1979,
      'Investiga como as preferências estéticas — música, comida, decoração, esporte, cinema — funcionam como marcadores de posição social. A partir de ampla pesquisa empírica na França, Bourdieu demonstra que o gosto, longe de ser escolha individual, é produto da origem social e da escolaridade, e opera como instrumento de distinção entre classes. É uma das obras sociológicas mais influentes do século XX.'
    ],
    [
      'A Reprodução (com Jean-Claude Passeron)',
      'livro',
      1970,
      'Demonstra que a escola, apresentada como instituição meritocrática, na verdade converte desigualdades sociais herdadas em desigualdades escolares aparentemente justas. As crianças de famílias favorecidas chegam com um capital cultural que o sistema premia como se fosse talento. Publicado logo após 1968, ajudou a desmontar a promessa de que a expansão do acesso à escola bastaria para produzir mobilidade social.'
    ],
    [
      'A Miséria do Mundo',
      'livro',
      1993,
      'Reúne centenas de entrevistas em profundidade com pessoas comuns — moradores de periferia, professores, operários, pequenos comerciantes — realizadas por Bourdieu e sua equipe. O livro documenta o que chama de miséria de posição: o sofrimento produzido não pela pobreza absoluta, mas pelo lugar ocupado numa estrutura social. Foi um grande sucesso editorial fora do meio acadêmico e marca a virada pública de Bourdieu.'
    ]
  ],
  'J. R. R. Tolkien': [
    [
      'O Senhor dos Anéis',
      'livro',
      1954,
      'Narra a jornada de um hobbit encarregado de destruir um anel capaz de dominar todos os povos da Terra-média. Escrito ao longo de doze anos por um filólogo que primeiro inventou as línguas e depois o mundo onde pudessem ser faladas, o livro combina mitologia nórdica, tradição épica anglo-saxã e a experiência de quem sobreviveu às trincheiras do Somme. Sua reflexão sobre poder, corrupção e a resistência dos pequenos fundou a alta fantasia como gênero literário.'
    ],
    ['O Hobbit', 'livro', 1937, 'Conta a viagem de Bilbo Bolseiro, criatura caseira e avessa a aventuras, arrastado por um mago e treze anões numa expedição para recuperar um tesouro guardado por um dragão. Escrito inicialmente como história para os filhos do autor, apresenta o tom mais leve e a estrutura de conto que O Senhor dos Anéis depois expandiria em escala épica.'],
    [
      'O Silmarillion',
      'livro',
      1977,
      'Reúne a mitologia de fundo da Terra-média: a criação do mundo pela música, a rebelião de Melkor, a forja das joias que dão nome ao livro e as guerras da Primeira Era. Tolkien trabalhou nesses textos a vida inteira sem concluí-los; a organização e a publicação coube ao filho Christopher, quatro anos após sua morte. É a obra que revela a profundidade histórica pressuposta pelos romances.'
    ],
    [
      'Beowulf: Os Monstros e os Críticos',
      'ensaio',
      1936,
      'Conferência que mudou a forma como o poema anglo-saxão Beowulf é lido. Tolkien argumenta que a crítica da época tratava o texto como documento histórico e descartava justamente o que nele há de essencial: os monstros, o tom elegíaco e a estrutura poética. Defende que se trata de uma obra de arte, não de uma fonte a ser saqueada por historiadores. É referência obrigatória nos estudos medievais ingleses.'
    ]
  ],
  Virgílio: [
    [
      'Eneida',
      'livro',
      '19 a.C.',
      'Narra a fuga de Eneias da Troia em chamas, sua errância pelo Mediterrâneo, o amor trágico por Dido em Cartago, a descida ao mundo dos mortos e a guerra no Lácio que originaria a linhagem de Roma. Escrito nos anos em que Augusto consolidava o principado após décadas de guerra civil, o poema dá a Roma um mito de origem à altura da Ilíada e da Odisseia. Sua melancolia persistente sobre o custo humano do império impediu que fosse lido apenas como propaganda. Atravessou dois mil anos como texto escolar e guia literário, e é o Virgílio da Divina Comédia que conduz Dante pelo Inferno.'
    ],
    ['Bucólicas', 'poesia', '39 a.C.', 'Dez poemas pastoris em que pastores cantam, disputam e lamentam num campo italiano ameaçado pelos confiscos de terra das guerras civis. A aparente serenidade do cenário convive com a perda concreta, e é essa tensão que dá à obra sua força. Fixou a tradição pastoril na poesia europeia, retomada da Renascença ao Romantismo.'],
    ['Geórgicas', 'poesia', '29 a.C.', 'Poema didático em quatro livros sobre agricultura, videiras, criação de animais e abelhas. Sob a superfície do manual agrícola, celebra o trabalho como forma de ordem e a vida rural como resposta à devastação das guerras civis. É considerada por muitos críticos a obra tecnicamente mais perfeita da poesia latina.']
  ],
  'Honoré de Balzac': [
    [
      'O Pai Goriot',
      'livro',
      1835,
      'Acompanha um velho fabricante de massas que se arruína para sustentar o luxo das duas filhas casadas na alta sociedade parisiense, e um jovem provinciano que aprende, ao observá-lo, as regras da ascensão social. Publicado na França da Monarquia de Julho, é o romance em que Balzac inaugura o retorno de personagens entre livros diferentes e formula com mais clareza sua tese: o dinheiro reorganizou os afetos e a moral. É a porta de entrada clássica para A Comédia Humana.'
    ],
    [
      'Ilusões Perdidas',
      'livro',
      1843,
      'Narra a trajetória de um poeta provinciano que chega a Paris com talento e ambição e descobre o funcionamento real do jornalismo, da edição e da vida literária: a crítica comprada, a reputação fabricada, o texto como mercadoria. É a obra em que Balzac mais se aproxima de uma sociologia da cultura, e permanece uma das análises mais duras já escritas sobre a imprensa.'
    ],
    ['Eugénie Grandet', 'livro', 1833, 'Retrata uma jovem de província sob o domínio de um pai avarento cuja obsessão pelo dinheiro determina cada gesto da casa. A avareza aparece não como defeito moral isolado, mas como resultado de uma economia e de uma posição social. É considerado um dos romances mais bem construídos do autor.'],
    ['A Pele de Onagro', 'livro', 1831, 'Um jovem arruinado encontra um talismã que realiza seus desejos e encolhe a cada um deles, encurtando na mesma medida sua vida. A fábula fantástica serve de moldura para o tema central de Balzac: o desejo como força que consome quem o alimenta. É a obra que abre a seção dos Estudos Filosóficos de A Comédia Humana.']
  ],
  'Betty Friedan': [
    [
      'A Mística Feminina',
      'livro',
      1963,
      'Parte de uma pesquisa com ex-colegas de faculdade para descrever o que a autora chamou de problema sem nome: a insatisfação difusa de mulheres instruídas confinadas ao papel de dona de casa nos subúrbios americanos do pós-guerra. Friedan mostra como revistas, publicidade e psicologia popular construíram uma imagem idealizada de realização doméstica e patologizaram quem não se encaixava nela. O livro vendeu milhões de exemplares e é apontado como marco inicial da segunda onda feminista nos Estados Unidos.'
    ]
  ],
  'Edward Bernays': [
    [
      'Propaganda',
      'livro',
      1928,
      'Expõe de forma direta a tese de que a manipulação organizada dos hábitos e opiniões das massas é elemento constitutivo das sociedades democráticas, e descreve as técnicas para exercê-la. Escrito por quem havia trabalhado na propaganda de guerra norte-americana e aplicava conceitos psicanalíticos à publicidade, o livro é ao mesmo tempo manual profissional e documento histórico incontornável para a crítica da comunicação de massa.'
    ],
    ['Cristalizando a Opinião Pública', 'livro', 1923, 'Primeiro livro a definir as relações públicas como profissão e a descrever seus métodos. Bernays argumenta que a opinião pública não é dado espontâneo, mas resultado que pode ser construído por quem entende os mecanismos psicológicos da adesão coletiva. Fundou o campo e forneceu seu vocabulário.']
  ],
  'Walter Lippmann': [
    [
      'Opinião Pública',
      'livro',
      1922,
      'Argumenta que o ambiente real é grande, complexo e fugaz demais para ser conhecido diretamente, e que agimos com base num pseudoambiente feito de imagens mentais construídas por notícias fragmentárias. É neste livro que a palavra estereótipo, então termo de tipografia, entra no vocabulário da psicologia social. Escrito logo após a Primeira Guerra, quando a propaganda estatal havia demonstrado seu alcance, é a obra fundadora do estudo da comunicação de massa.'
    ],
    ['O Público Fantasma', 'livro', 1925, 'Leva adiante o argumento do livro anterior e sustenta que o cidadão onisciente pressuposto pela teoria democrática clássica simplesmente não existe. Provocou o debate clássico com John Dewey sobre se o problema está na incapacidade do público ou na falta de comunicação e educação que o formem — discussão que continua aberta.']
  ],
  'Erving Goffman': [
    [
      'A Representação do Eu na Vida Cotidiana',
      'livro',
      1959,
      'Analisa a interação social com o vocabulário do teatro: as pessoas atuam diante de plateias, administram impressões e alternam entre uma região de fachada, onde a performance ocorre, e os bastidores, onde ela pode relaxar. A partir de observação de campo nas ilhas Shetland, Goffman mostra que a ordem social se sustenta nos detalhes mínimos do encontro face a face. Fundou a perspectiva dramatúrgica na sociologia.'
    ],
    [
      'Manicômios, Prisões e Conventos',
      'livro',
      1961,
      'Resultado de um ano de observação disfarçada num hospital psiquiátrico em Washington. Goffman descreve a instituição total — o lugar onde dormir, comer, trabalhar e conviver ocorrem sob a mesma autoridade — e o processo de mortificação do eu que ela impõe a quem nela vive. O livro teve efeito direto sobre os movimentos de reforma psiquiátrica em vários países.'
    ],
    ['Estigma', 'livro', 1963, 'Estuda como pessoas portadoras de atributos socialmente desacreditados administram sua identidade diante dos outros, distinguindo o estigma visível do que pode ser ocultado. Trata deficiência, doença, condenação criminal e pertencimento a grupos desvalorizados sob a mesma lente analítica, e continua sendo referência básica no estudo da exclusão social.']
  ],
  'Friedrich Hayek': [
    [
      'O Caminho da Servidão',
      'livro',
      1944,
      'Escrito em plena Segunda Guerra Mundial, argumenta que o planejamento econômico centralizado, ainda que adotado com intenções democráticas, tende a concentrar poder e a corroer as liberdades individuais. Hayek dirige o alerta especialmente aos socialistas britânicos, sustentando que fascismo e comunismo compartilham a mesma raiz coletivista. É a obra que tornou seu nome conhecido fora da economia e permanece um dos textos políticos mais debatidos do século.'
    ],
    [
      'O Uso do Conhecimento na Sociedade',
      'ensaio',
      1945,
      'Artigo curto e decisivo. Sustenta que o conhecimento relevante para as decisões econômicas nunca existe de forma concentrada: está disperso entre milhões de pessoas, na forma de circunstâncias particulares de tempo e lugar. Nenhum órgão central pode reuni-lo, e é o sistema de preços que o transmite e coordena. É considerada a contribuição teórica mais duradoura de Hayek.'
    ],
    ['A Constituição da Liberdade', 'livro', 1960, 'Obra de maturidade em que Hayek constrói uma teoria positiva da sociedade livre, e não apenas uma crítica ao planejamento. Discute o império da lei, os limites do poder coercitivo do Estado e as instituições que permitem a coordenação espontânea entre pessoas com fins diferentes.']
  ],
  'Edmund Burke': [
    [
      'Reflexões sobre a Revolução em França',
      'livro',
      1790,
      'Escrito quando a Revolução Francesa ainda era saudada por boa parte da intelectualidade europeia, prevê que a tentativa de refundar a sociedade a partir de princípios abstratos levaria à violência e à ditadura militar. Burke opõe à razão revolucionária a autoridade da experiência acumulada, e define a sociedade como um contrato entre os mortos, os vivos e os que ainda vão nascer. O Terror e a ascensão de Napoleão deram-lhe crédito duradouro, e o livro é o texto fundador do conservadorismo político moderno.'
    ],
    ['Investigação Filosófica sobre a Origem de Nossas Ideias do Sublime e do Belo', 'livro', 1757, 'Tratado de estética escrito quando Burke tinha pouco mais de vinte anos. Distingue o belo, ligado ao pequeno, ao suave e ao agradável, do sublime, ligado à vastidão, à obscuridade e ao terror controlado. A distinção influenciou Kant e toda a estética romântica.']
  ],
  'Norberto Bobbio': [
    [
      'O Futuro da Democracia',
      'livro',
      1984,
      'Examina as promessas que os regimes democráticos não cumpriram: a persistência do poder invisível, a sobrevivência das oligarquias, os espaços da sociedade que permaneceram não democratizados e a distância entre o cidadão idealizado e o real. Bobbio não conclui pela recusa da democracia, mas pela recusa das expectativas irrealistas sobre ela, definindo-a como conjunto de regras que permite mudar sem violência.'
    ],
    [
      'Direita e Esquerda',
      'livro',
      1994,
      'Publicado quando muitos declaravam a distinção superada pelo fim da Guerra Fria, sustenta que ela permanece válida e se organiza em torno de uma diferença de atitude diante da igualdade: a esquerda tende a considerar as desigualdades sociais como construções removíveis, a direita como fatos naturais ou funcionais. Tornou-se referência obrigatória no debate político em língua italiana, espanhola e portuguesa.'
    ]
  ],
  'Guy Debord': [
    [
      'A Sociedade do Espetáculo',
      'livro',
      1967,
      'Em 221 teses curtas, descreve a sociedade moderna como um sistema em que a vida vivida diretamente foi substituída por sua representação. O espetáculo, para Debord, não é um conjunto de imagens, mas uma relação social entre pessoas mediada por imagens. Escrito na França do consumo de massa e herdeiro da crítica marxista do fetichismo da mercadoria, o livro circulou intensamente no Maio de 1968 e antecipa boa parte do debate atual sobre imagem, atenção e mediação digital.'
    ]
  ],
  'Gerda Lerner': [
    [
      'A Criação do Patriarcado',
      'livro',
      1986,
      'Investiga, a partir de fontes da Mesopotâmia antiga, quando e como a subordinação feminina se estabeleceu. Lerner sustenta que o patriarcado não é natural nem eterno: foi construído historicamente ao longo de séculos, junto com a formação do Estado e da propriedade privada. A conclusão é politicamente decisiva — o que teve início histórico pode ter fim. É a obra central da história das mulheres como disciplina.'
    ],
    ['A Criação da Consciência Feminista', 'livro', 1993, 'Estuda como, ao longo de mais de mil anos, mulheres precisaram reinventar repetidamente a mesma crítica por não terem acesso à história das que vieram antes. Lerner mostra que a privação de memória coletiva foi um dos mecanismos mais eficazes de manutenção da desigualdade.']
  ],
  'Napoleon Hill': [
    [
      'Quem Pensa Enriquece',
      'livro',
      1937,
      'Reúne treze princípios que, segundo o autor, distinguem quem realiza de quem não realiza: desejo definido, fé, autossugestão, persistência e a associação deliberada com pessoas voltadas ao mesmo objetivo, que ele chamou de mente mestra. Publicado no fundo da Grande Depressão, ofereceu uma resposta individual a uma crise coletiva, e essa combinação explica tanto o alcance duradouro quanto a crítica de que transfere ao indivíduo a responsabilidade por circunstâncias estruturais. É a obra fundadora do gênero moderno de autoajuda.'
    ]
  ],
  'Theodore Levitt': [
    [
      'Miopia em Marketing',
      'ensaio',
      1960,
      'Artigo publicado na Harvard Business Review que sustenta que setores inteiros declinam por definirem o próprio negócio pelo produto que fabricam, e não pela necessidade que atendem. O exemplo clássico são as ferrovias americanas, que se entenderam como empresas ferroviárias em vez de empresas de transporte e por isso não viram chegar o automóvel e o avião. É um dos textos mais reproduzidos da história da administração e deslocou o eixo do marketing do produto para o cliente.'
    ]
  ],
  'Eric Ries': [
    [
      'A Startup Enxuta',
      'livro',
      2011,
      'Propõe que uma startup é uma instituição desenhada para operar sob incerteza extrema, e que por isso seu trabalho não é executar um plano, mas descobrir o que funciona antes de acabar o dinheiro. Formula o ciclo construir-medir-aprender, o produto mínimo viável, a distinção entre métricas acionáveis e métricas de vaidade e a decisão de perseverar ou pivotar. Escrito após o estouro da bolha das empresas de internet, tornou-se vocabulário padrão do setor de tecnologia.'
    ]
  ],
  'Peter Thiel': [
    [
      'De Zero a Um',
      'livro',
      2014,
      'Nascido das aulas do autor em Stanford, argumenta que a concorrência é superestimada e destrói valor, e que o progresso real vem de empresas que fazem algo genuinamente novo — passar de zero a um — em vez de copiar o que existe. Defende que a posição monopolista obtida por inovação é condição para investir em longo prazo. É uma das leituras mais influentes e mais contestadas do empreendedorismo contemporâneo.'
    ]
  ],
  'Thomas Sowell': [
    [
      'Conflito de Visões',
      'livro',
      1987,
      'Propõe que boa parte das divergências políticas persistentes decorre de duas concepções opostas de natureza humana: a visão restrita, que a considera limitada e imperfeita e busca arranjos de compromisso, e a visão irrestrita, que a considera aperfeiçoável e busca soluções completas. O livro explica por que adversários políticos discordam sistematicamente sobre temas sem relação aparente entre si.'
    ],
    ['Economia Básica', 'livro', 2000, 'Manual de economia escrito sem gráficos, equações ou jargão, voltado ao leitor geral. Explica preços, incentivos, trabalho e comércio internacional por meio de exemplos históricos e insiste que políticas devem ser julgadas por consequências verificáveis, e não por intenções declaradas. Teve grande alcance popular e sucessivas edições ampliadas.']
  ],
  'Jonathan Haidt': [
    [
      'A Mente Moralista',
      'livro',
      2012,
      'Argumenta que o juízo moral é primeiro intuitivo e automático, e que o raciocínio vem depois, funcionando menos como juiz e mais como advogado que constrói justificativas. A partir da teoria dos fundamentos morais, explica por que progressistas e conservadores se acusam mutuamente de má-fé quando na verdade apoiam suas posições em conjuntos diferentes de intuições. É uma das análises mais citadas sobre polarização política.'
    ],
    [
      'A Geração Ansiosa',
      'livro',
      2024,
      'Sustenta que a substituição da infância baseada em brincadeira livre pela infância baseada em telas, a partir de 2010, explica boa parte do aumento de ansiedade e depressão entre adolescentes. Reúne séries de dados de vários países e propõe medidas concretas de restrição ao uso de smartphones e redes sociais por crianças. A força da relação causal apresentada é objeto de debate acadêmico em curso.'
    ]
  ],
  'Dan Ariely': [
    [
      'Previsivelmente Irracional',
      'livro',
      2008,
      'Reúne experimentos que mostram que os desvios humanos da racionalidade não são aleatórios, e sim sistemáticos e previsíveis: o poder desproporcional do gratuito, o efeito de ancoragem nos preços, a diferença entre normas sociais e normas de mercado, o modo como a expectativa altera a experiência real de um produto. Tornou-se um dos títulos mais lidos da economia comportamental.'
    ]
  ],
  'Albert Bandura': [
    [
      'Teoria da Aprendizagem Social',
      'livro',
      1977,
      'Formaliza a tese de que aprendemos observando outras pessoas, sem necessidade de reforço direto, contrariando o behaviorismo então dominante. A base empírica vem do experimento do boneco Bobo, em que crianças reproduziram o comportamento agressivo de um adulto que haviam apenas assistido. É a obra que reintroduz processos mentais e agência na explicação da aprendizagem.'
    ]
  ],
  'Mary Parker Follett': [
    ['O Novo Estado', 'livro', 1918, 'Defende que a democracia real não se constrói pelo voto do indivíduo isolado, mas pela organização de grupos locais onde as pessoas aprendem a produzir decisões coletivas. Escrito a partir da experiência da autora em centros comunitários de Boston, antecipa em décadas os debates sobre democracia participativa e capital social.'],
    ['Experiência Criativa', 'livro', 1924, 'Desenvolve o conceito de integração como método de resolução de conflitos: em vez de dominação ou concordância superficial, buscar a necessidade real por trás de cada posição e construir uma solução que atenda às duas. É a origem intelectual do que se popularizou como solução ganha-ganha.'],
    [
      'Dynamic Administration',
      'livro',
      1941,
      'Coletânea póstuma das palestras que Follett proferiu a executivos e a instituições acadêmicas nos anos 1920 e 1930. Reúne suas formulações mais conhecidas sobre poder com em oposição a poder sobre, sobre a lei da situação e sobre autoridade derivada de função e conhecimento, e não de posição hierárquica. É por este volume que sua obra circulou no mundo da administração.'
    ]
  ],
  'José Martí': [
    [
      'Versos Sencillos',
      'poesia',
      1891,
      'Coleção de poemas breves, de métrica popular e linguagem despojada, escrita durante um período de doença nas montanhas do estado de Nova York. Reúne memória de infância, exílio, amor e compromisso político numa dicção simples que renovou a poesia em língua espanhola. Alguns de seus versos foram incorporados à canção Guantanamera e circulam hoje muito além da literatura.'
    ],
    [
      'Nossa América',
      'ensaio',
      1891,
      'Ensaio central do pensamento latino-americano. Martí defende que os países da região precisam governar-se a partir de sua própria realidade histórica e étnica, em vez de importar modelos europeus ou norte-americanos, e adverte para a expansão dos Estados Unidos como perigo iminente. Escrito no ano anterior à fundação do Partido Revolucionário Cubano, é ao mesmo tempo análise e programa.'
    ],
    ['Ismaelillo', 'poesia', 1882, 'Livro de quinze poemas dedicados ao filho pequeno, escrito no exílio. A brevidade, a musicalidade e a liberdade de imagens fizeram dele um dos textos inaugurais do modernismo hispano-americano.']
  ],
  'Júlio César': [
    [
      'Comentários sobre a Guerra das Gálias',
      'memoria',
      '58-50 a.C.',
      'Relato em sete livros da conquista romana da Gália, escrito pelo próprio comandante em terceira pessoa e em prosa de clareza deliberada. Serve simultaneamente como registro militar, prestação de contas política a Roma e construção da imagem do autor. Traz o que restou de descrição etnográfica sobre os povos gauleses e germânicos, e sua limpidez sintática fez dele o texto escolar de latim por dois mil anos.'
    ],
    [
      'Comentários sobre a Guerra Civil',
      'memoria',
      '48 a.C.',
      'Narra o conflito contra Pompeu e o Senado que se seguiu à travessia do Rubicão. Ao contrário da obra sobre a Gália, aqui César precisa justificar uma guerra contra concidadãos, e o texto é construído para apresentá-lo como quem foi forçado ao confronto por adversários intransigentes. É documento histórico e peça de defesa política ao mesmo tempo.'
    ]
  ],
  'Zenão de Cítio': [],
  'Bill Gates': [
    [
      'A Estrada do Futuro',
      'livro',
      1995,
      'Escrito no momento em que a internet começava a sair dos meios técnicos, expõe a visão de Gates sobre como a computação em rede transformaria comércio, educação, trabalho e vida doméstica. Algumas previsões se confirmaram com precisão e outras subestimaram justamente a velocidade da web — a edição revisada do ano seguinte corrigiu o peso dado à internet. É um documento de época sobre como o setor enxergava o próprio futuro.'
    ],
    [
      'Como Evitar um Desastre Climático',
      'livro',
      2021,
      'Organiza o problema climático em torno de um número — as cinquenta e um bilhões de toneladas de gases de efeito estufa emitidas por ano — e percorre os setores responsáveis, do cimento à agricultura, avaliando quais tecnologias existem e quais ainda precisam ser criadas. Propõe o conceito de prêmio verde, o custo adicional de escolher a alternativa limpa, como critério prático de decisão.'
    ]
  ],
  'Ronald Reagan': [],
  'Franklin D. Roosevelt': [],
  'George Washington': [],
  'Susan B. Anthony': [],
  'Konrad Adenauer': [],
  'Bernard Montgomery': [],
  'Mikhail Gorbachev': [
    [
      'Perestroika: Novas Ideias para o Meu País e o Mundo',
      'livro',
      1987,
      'Exposição direta do programa de reformas soviético, escrita para leitores de dentro e de fora do país. Gorbachev defende que a reestruturação econômica e a abertura à crítica pública são a única forma de salvar o socialismo, e propõe um novo pensamento nas relações internacionais baseado em interdependência e não em confronto. É documento essencial para compreender o fim da Guerra Fria a partir da perspectiva soviética.'
    ]
  ],
  'Carl von Clausewitz': [
    [
      'Da Guerra',
      'livro',
      1832,
      'Tratado inacabado, publicado postumamente pela viúva do autor, que rompe com os manuais de regras fixas ao tratar a guerra como fenômeno governado pelo acaso, pela incerteza e pela política. Formula os conceitos de fricção — o acúmulo de pequenos imprevistos que separa o plano da execução — e da trindade entre paixão popular, acaso e cálculo político, além da tese de que a guerra é a continuação da política por outros meios. Escrito após as guerras napoleônicas, continua sendo leitura obrigatória em academias militares e em escolas de estratégia.'
    ]
  ],
  'José Ortega y Gasset': [
    [
      'A Rebelião das Massas',
      'livro',
      1930,
      'Analisa a ascensão do que Ortega chama de homem-massa: o indivíduo que se sente completo sem ter feito esforço para isso e reivindica o direito de impor sua mediocridade ao conjunto da sociedade. Escrito entre as duas guerras mundiais, relaciona esse fenômeno às crises políticas europeias do período. É a obra mais lida do autor e uma das análises clássicas da sociedade de massas.'
    ],
    ['Meditações do Quixote', 'livro', 1914, 'Primeiro livro de Ortega e origem de sua formulação mais conhecida, segundo a qual o indivíduo não se separa de suas circunstâncias. Partindo de uma leitura do Quixote, propõe o raciovitalismo: a razão não pode ser destacada da vida concreta e histórica de quem raciocina.']
  ],
  'François de La Rochefoucauld': [
    [
      'Máximas',
      'livro',
      1665,
      'Reúne centenas de sentenças breves sobre o comportamento humano, escritas por um aristocrata que participou das intrigas da corte de Luís XIV e da revolta da Fronda, foi derrotado e passou a observar o jogo por dentro. A tese que atravessa a obra é implacável: o que chamamos de virtude é, quase sempre, amor-próprio disfarçado. Fixou a máxima como forma literária e influenciou Nietzsche, Schopenhauer e a psicologia moral moderna.'
    ]
  ],
  'Will Durant': [
    [
      'A História da Filosofia',
      'livro',
      1926,
      'Apresenta o pensamento ocidental através das vidas e das ideias dos principais filósofos, de Platão a John Dewey, em prosa narrativa voltada ao leitor geral. Foi um sucesso editorial extraordinário e provou que havia público amplo para obras sérias de divulgação — o que permitiu financiar A História da Civilização. É desta obra que vem a síntese sobre excelência como hábito, frequentemente atribuída por engano a Aristóteles.'
    ],
    ['A História da Civilização', 'livro', 1975, 'Conjunto de onze volumes escritos com Ariel Durant ao longo de cerca de quatro décadas, cobrindo da Antiguidade oriental à era napoleônica. Combina história política, artística, religiosa e cotidiana numa narrativa contínua, em contramão à especialização acadêmica crescente. O décimo volume rendeu ao casal o Prêmio Pulitzer de não ficção em 1968.']
  ],
  'Ken Blanchard': [
    [
      'O Gerente-Minuto',
      'livro',
      1982,
      'Parábola curta sobre um jovem que procura um gerente eficaz e encontra três práticas simples: metas de um minuto, elogios de um minuto e repreensões de um minuto. Escrito com Spencer Johnson, vendeu milhões de exemplares e inaugurou o formato da fábula empresarial breve que dominaria a literatura de gestão nas décadas seguintes. A simplicidade deliberada explica tanto o alcance quanto a crítica.'
    ]
  ],
  'Robert Greene': [
    [
      'As 48 Leis do Poder',
      'livro',
      1998,
      'Reúne quarenta e oito princípios sobre a conquista e a preservação do poder, cada um ilustrado por episódios históricos e por um caso em que a regra foi violada. Escrito na tradição dos moralistas — Maquiavel, Gracián, La Rochefoucauld —, descreve o comportamento humano como ele é, e não como deveria ser. A recepção é dividida entre quem vê descrição realista e quem vê manual de manipulação, e essa própria ambiguidade explica seu alcance duradouro.'
    ],
    [
      'Maestria',
      'livro',
      2012,
      'Estuda a trajetória de figuras como Leonardo da Vinci, Darwin, Mozart e John Coltrane para descrever como se chega ao domínio de um ofício. Greene propõe três fases — aprendizado, aprendizagem criativa e maestria — e argumenta que a excelência resulta de imersão prolongada, e não de talento inato. É a obra mais construtiva do autor e a que menos gera controvérsia.'
    ],
    ['As Leis da Natureza Humana', 'livro', 2018, 'Percorre padrões de comportamento — inveja, narcisismo, agressividade, pensamento de grupo — combinando psicologia e história para descrever forças que operam abaixo da consciência. É a tentativa mais sistemática de Greene de fundamentar suas observações em pesquisa psicológica.']
  ],
  'Larry Page': [],
  'Reed Hastings': [
    [
      'A Regra é Não Ter Regras',
      'livro',
      2020,
      'Descreve, com a professora Erin Meyer, a cultura organizacional da Netflix: alta densidade de talento, liberdade com responsabilidade, ausência de política formal de férias e de aprovação de despesas, e franqueza permanente como obrigação profissional. Meyer contrapõe ao relato de Hastings pesquisa própria e a perspectiva de funcionários, inclusive sobre os custos do modelo. Tornou-se referência ampla — e disputada — em gestão de pessoas.'
    ]
  ],
  'Ray Kroc': [
    [
      'Grinding It Out',
      'memoria',
      1977,
      'Autobiografia em que Kroc narra a trajetória do vendedor de máquinas de milk-shake que, aos cinquenta e dois anos, transformou uma lanchonete californiana na maior rede de alimentação do mundo. É documento essencial sobre a formação do modelo de franquia moderno, e também uma versão parcial: a participação dos irmãos McDonald na criação do sistema aparece minimizada, ponto contestado por historiadores e pelos próprios irmãos.'
    ]
  ],
  'Jim Rohn': [
    [
      'Sete Estratégias para Alcançar Riqueza e Felicidade',
      'livro',
      1985,
      'Reúne os princípios que Rohn repetia em seus seminários: definição de metas, disciplina diária, educação contínua, escolha das companhias e gestão do tempo e do dinheiro. Escrito no formato direto das palestras que o tornaram conhecido, é o registro mais completo de sua mensagem e circulou amplamente no circuito norte-americano de desenvolvimento pessoal.'
    ]
  ],
  'Tristan Harris': [],
  'Thomas Jefferson': [
    [
      'Declaração de Independência dos Estados Unidos',
      'documento',
      1776,
      'Documento redigido por Jefferson aos trinta e três anos e aprovado em 4 de julho de 1776, que rompe formalmente os laços das treze colônias com a Coroa britânica. Seu preâmbulo afirma como verdades evidentes que todos os homens são criados iguais e dotados de direitos inalienáveis à vida, à liberdade e à busca da felicidade. Tornou-se referência para movimentos de independência e de direitos civis no mundo inteiro, e sua tensão com a escravidão praticada pelo próprio autor é parte incontornável de sua história.'
    ],
    ['Notas sobre o Estado da Virgínia', 'livro', 1785, 'Único livro completo publicado por Jefferson, escrito como resposta a um questionário de um diplomata francês. Reúne geografia, história natural, leis e costumes da Virgínia, e contém também passagens sobre raça e escravidão que documentam as posições do autor e são hoje objeto de análise crítica.']
  ],
  'George Bernard Shaw': [
    ['Pigmaleão', 'peca', 1913, 'Um professor de fonética aposta que consegue transformar uma florista pobre em dama da sociedade apenas corrigindo-lhe a fala. A peça usa a comédia para expor que a diferença de classe na Inglaterra eduardiana se sustentava em marcadores tão frágeis quanto o sotaque. Rendeu a Shaw o Oscar de roteiro adaptado em 1939 e inspirou o musical My Fair Lady.'],
    [
      'Santa Joana',
      'peca',
      1923,
      'Reconstrói o julgamento de Joana d\u2019Arc não como confronto entre santidade e maldade, mas como choque entre uma consciência individual e instituições que agem segundo sua própria lógica. Shaw retrata inquisidores e ingleses como homens razoáveis dentro de seus sistemas, o que torna a condenação mais perturbadora. A peça pesou decisivamente no Nobel de Literatura de 1925.'
    ],
    ['A Profissão da Senhora Warren', 'peca', 1893, 'Uma jovem descobre que a educação e o conforto de que desfruta foram pagos pela exploração de bordéis administrados pela mãe. A peça desloca a discussão da moral individual para as condições econômicas que empurram mulheres à prostituição, e foi proibida de encenação pública na Inglaterra por anos.']
  ],
  'Solomon Asch': [],
  'Eric Ries2': []
};

/* ----------------------------------------------------------------
   APLICAÇÃO DOS PASSES 3 E 4
   ---------------------------------------------------------------- */
(function aplicarPanoramas() {
  Object.entries(PANORAMAS_F8).forEach(([nome, p]) => {
    const c = canonAuthor(nome);
    PERFIS_PROFUNDOS[c] = {
      resumo: p.resumo,
      bio: p.bio,
      contexto: p.contexto,
      contribuicoes: p.contribuicoes || [],
      cronologia: p.cronologia || [],
      nota: p.nota || null
    };
    if (p.papel && typeof PAPEIS === 'object') PAPEIS[c] = p.papel;
    RELATORIO_FASE8.panoramas++;
  });
})();

(function aplicarObras() {
  Object.entries(OBRAS_F8).forEach(([nome, lista]) => {
    if (!lista || !lista.length) return;
    const c = canonAuthor(nome);
    const existentes = OBRAS[c] || [];
    const novas = lista.map(([t, tipo, ano, d]) => ({ t, tipo, ano, d, autor: c }));
    /* obras curadas substituem homônimas inferidas; o resto é preservado */
    const preservadas = existentes.filter((o) => {
      const dup = novas.some((n) => _normDup(n.t).slice(0, 18) === _normDup(o.t).slice(0, 18));
      return !dup && !o.citada;
    });
    OBRAS[c] = novas.concat(preservadas);
    RELATORIO_FASE8.obras += novas.length;
    RELATORIO_FASE8.descricoes += novas.length;
  });
  Object.keys(OBRA_POR_ID).forEach((k) => delete OBRA_POR_ID[k]);
  Object.keys(OBRAS).forEach((c) => {
    OBRAS[c].forEach((o, i) => {
      o.oid = slugify(c) + '--' + i;
      OBRA_POR_ID[o.oid] = o;
    });
  });
})();

/* nota do panorama, quando existe, aparece como ressalva honesta */
const _textoPanoramaF7 = textoPanorama;
textoPanorama = function (i, p) {
  let html = _textoPanoramaF7(i, p);
  if (p && p.nota) html += `<p class="pan-nota">${escapeHtml(p.nota)}</p>`;
  return html;
};

/* ----------------------------------------------------------------
   PASSE 5 — CHECKPOINT DE PROGRESSO (§17, §18)
   Persiste a fila e a posição, para retomar exatamente onde parou.
   ---------------------------------------------------------------- */
const CURADORIA_FILA = (function montarFila() {
  const LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+/i;
  const linhas = [];
  AUTOR_INDEX.forEach((info, nome) => {
    const qs = info.frases.map((i) => QUOTES[i]).filter(Boolean);
    let gen = 0,
      loc = 0,
      pend = 0;
    qs.forEach((q) => {
      if (q.fonteGenerica || fonteEhGenerica(q.src)) gen++;
      else if (LOC.test(q.src || '')) loc++;
      if (q.st === 'R') pend++;
    });
    const temPan = !!PERFIS_PROFUNDOS[nome];
    linhas.push({
      nome,
      frases: qs.length,
      verificaveis: loc,
      genericas: gen,
      pendentes: pend,
      obras: (OBRAS[nome] || []).length,
      panorama: temPan ? 'curado' : info.story ? 'historia' : 'ausente',
      concluido: temPan,
      prioridade: (temPan ? 0 : info.story ? 10 : 20) + Math.min(qs.length, 20) + (gen + pend) * 0.5
    });
  });
  linhas.sort((a, b) => b.prioridade - a.prioridade);
  linhas.forEach((l, i) => (l.ordem = i + 1));
  return linhas;
})();

function CURADORIA_STATUS() {
  const total = CURADORIA_FILA.length;
  const feitos = CURADORIA_FILA.filter((l) => l.concluido);
  const faltam = CURADORIA_FILA.filter((l) => !l.concluido);
  const r = {
    'Autores totais': total,
    'Autores com panorama concluído': feitos.length,
    'Autores restantes': faltam.length,
    'Próximo da fila': faltam.length ? faltam[0].nome : '—',
    'Frases no acervo': QUOTES.length,
    'Frases pendentes (R)': QUOTES.filter((q) => q.st === 'R').length,
    'Frases com fonte genérica': QUOTES.filter((q) => q.fonteGenerica).length,
    'Obras catalogadas': Object.values(OBRAS).reduce((s, l) => s + l.length, 0)
  };
  console.table(r);
  return r;
}
function CURADORIA_PROXIMOS(n) {
  return CURADORIA_FILA.filter((l) => !l.concluido)
    .slice(0, n || 30)
    .map((l) => `${l.ordem}. ${l.nome} — ${l.frases}f · ${l.genericas} genéricas · panorama ${l.panorama}`);
}
window.CURADORIA_STATUS = CURADORIA_STATUS;
window.CURADORIA_PROXIMOS = CURADORIA_PROXIMOS;
window.CURADORIA_FILA = CURADORIA_FILA;
window.F8 = RELATORIO_FASE8;

/* recarrega as telas afetadas */
(function bootF8() {
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
      console.info('MeMotiva · Fase 8: ' + (RELATORIO_FASE8.removidasParafrase + RELATORIO_FASE8.removidasPopular) + ' atribuições insustentáveis removidas, ' + RELATORIO_FASE8.removidasDuplicata + ' duplicatas eliminadas, ' + RELATORIO_FASE8.panoramas + ' panoramas criados, ' + RELATORIO_FASE8.obras + ' obras catalogadas com descrição padronizada.');
    } catch (e) {
      console.error('Fase 8:', e);
    }
  };
})();
