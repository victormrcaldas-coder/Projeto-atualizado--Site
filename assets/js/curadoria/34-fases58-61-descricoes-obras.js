/* MeMotiva — curadoria/34-fases58-61-descricoes-obras.js
   Fases 58–61 — descrições de obra ao padrão e obras verificáveis dos panoramas órfãos.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ===== FASE 58a — descrições de obra ao padrão de 2–3 linhas (lote 1) ===== */
(function () {
  var D = {
    'Abílio Diniz||Novo Caminho': 'Continuação das memórias do empresário, sobre a saída do grupo que a família fundou e o recomeço como investidor aos oitenta anos. Trata de sucessão familiar, disciplina física e das escolhas que ele revisaria. É o relato de um recomeço tardio por alguém que já havia construído a maior rede varejista do país.',
    'Adam Smith||Ensaios Filosóficos': 'Reúne textos que Smith autorizou preservar antes de mandar queimar o resto de seus papéis, sobre história da astronomia, das artes imitativas e da linguagem. O ensaio sobre a astronomia descreve o espanto e a surpresa como motores da investigação científica, e é hoje considerado contribuição pioneira à história da ciência.',
    'Ailton Krenak||A Vida Não é Útil': 'Reúne falas e conferências contra a ideia de que só tem valor aquilo que produz, e contra a separação entre humanidade e natureza. Publicado durante a pandemia, propõe outras formas de habitar o mundo a partir do pensamento indígena. Ampliou o alcance do autor, eleito em 2023 o primeiro indígena da Academia Brasileira de Letras.',
    'Alan Turing||Máquinas de Computação e Inteligência': 'Propõe substituir a pergunta sobre máquinas pensarem por um teste prático: se um interrogador não distinguir a máquina de uma pessoa, a pergunta original perde utilidade. Escrito em 1950, quando existiam poucos computadores no mundo, fundou a discussão filosófica da inteligência artificial e continua sendo sua referência central.',
    'Albert Einstein||A Teoria da Relatividade Especial e Geral': 'Exposição escrita pelo próprio Einstein para leitores sem formação em física, com o mínimo de matemática possível. Explica a relatividade do tempo e do espaço e a gravidade como curvatura, usando trens, elevadores e réguas como exemplos. É reeditada desde 1916 e continua sendo a porta de entrada mais confiável à teoria.',
    'Albert Einstein||Como Vejo o Mundo': 'Reúne ensaios, cartas abertas e discursos do físico sobre ciência, pacifismo, religião, educação e responsabilidade social. Mostra a figura pública que ele construiu ao lado da obra técnica e é a principal referência para verificar o que Einstein de fato afirmou — boa parte das frases atribuídas a ele não consta de nenhum escrito seu.',
    'Ariano Suassuna||A Pedra do Reino': 'Quaderna, preso e sob interrogatório, narra sua linhagem, seus delírios de rei do sertão e um episódio messiânico real ocorrido em Pernambuco no século XIX. Funde cordel, romance de cavalaria e barroco ibérico na realização máxima da estética armorial, e é considerada a obra-prima de Suassuna em prosa.',
    'Ariano Suassuna||O Santo e a Porca': 'Comédia sobre um avarento que esconde o dinheiro dentro de uma porca de madeira enquanto reza a Santo Antônio. O autor a apresenta na capa como imitação nordestina de Plauto, cruzando a comédia latina clássica com o universo do sertão. É uma de suas peças mais montadas e mostra a outra via de seu projeto, além do cordel.',
    'Alexis de Tocqueville||Lembranças de 1848': 'Memórias sobre a revolução de fevereiro de 1848 escritas por quem era deputado e ministro durante os acontecimentos. Tocqueville escreveu sem intenção de publicar, o que explica a franqueza dos retratos que faz dos políticos de seu tempo. Publicado postumamente, é um dos testemunhos mais agudos sobre a psicologia coletiva em momentos de ruptura.',
    'Amartya Sen||Desenvolvimento como Liberdade': 'Defende que o desenvolvimento de um país deve ser medido pela ampliação das liberdades reais das pessoas — saúde, educação, participação política — e não pelo crescimento da renda isolado. Publicado dois anos após o Nobel do autor, está na base do Índice de Desenvolvimento Humano da ONU e mudou o que governos e agências contam como progresso.',
    'Amartya Sen||A Ideia de Justiça': 'Argumenta que teorias sobre a sociedade perfeitamente justa são pouco úteis, e propõe concentrar o esforço em comparar situações reais para remover injustiças concretas. Dialoga diretamente com John Rawls, de quem o autor foi aluno e amigo, e reabriu o debate entre justiça ideal e justiça comparativa na filosofia política.',
    'Andrew Carnegie||O Evangelho da Riqueza': 'Sustenta que o homem rico é apenas administrador temporário de sua fortuna e tem o dever de distribuí-la em vida, em obras que ampliem oportunidade, em vez de deixá-la a herdeiros. Publicado no auge da Era Dourada americana, formulou a doutrina da filantropia moderna e inspirou gerações de grandes doadores.',
    'Andrew Carnegie||Autobiografia de Andrew Carnegie':
      'Relata a trajetória do autor da infância pobre na Escócia ao trabalho em fábrica de tecidos nos Estados Unidos e à construção do maior império siderúrgico do mundo. Publicada postumamente, é a principal fonte em primeira pessoa sobre a formação da indústria americana — e praticamente não menciona a greve de Homestead, episódio mais violento de sua trajetória.',
    'Angela Davis||Mulheres, Raça e Classe': 'Reconstrói a história do sufragismo e do feminismo americano mostrando como as questões de raça e de classe foram separadas da pauta de gênero, e o custo dessa separação. Publicado em 1981, tornou-se texto fundador do feminismo negro e antecipou em vários pontos o que se consolidaria como interseccionalidade.',
    'Angela Davis||Estarão as Prisões Obsoletas?': 'Defende que a prisão não é solução inevitável para o crime, mas instituição histórica ligada à escravidão e ao racismo, e propõe pensar alternativas em vez de reformar o sistema. Escrito após três décadas de encarceramento em massa nos Estados Unidos, é o texto de entrada mais lido do abolicionismo penal contemporâneo.',
    'Angela Davis||Uma Autobiografia': 'Narra a infância no Alabama segregado, a formação filosófica na Europa, a militância comunista, a perseguição, a fuga e os dezesseis meses de prisão que antecederam sua absolvição. Escrita antes dos trinta anos e editada por Toni Morrison, é documento de primeira mão sobre a repressão política nos Estados Unidos dos anos 1970.',
    'Angela Davis||A Liberdade é uma Luta Constante': 'Reúne entrevistas e discursos que conectam o movimento negro americano, a questão palestina, o feminismo e o abolicionismo penal como partes de uma mesma luta internacional. Publicado após os protestos de Ferguson, destaca a liderança coletiva dos novos movimentos em contraste com o modelo carismático do passado.',
    'Apóstolo Paulo||Carta aos Romanos': 'A mais extensa e sistemática das cartas paulinas, expõe a doutrina da justificação pela fé e a relação entre judeus e gentios na nova comunidade. Escrita a uma igreja que Paulo ainda não conhecia, tornou-se a base de boa parte da teologia cristã posterior e o texto decisivo para Agostinho, Lutero e Calvino.',
    'Apóstolo Paulo||Primeira Carta aos Coríntios': 'Responde a conflitos concretos de uma comunidade dividida: disputas de liderança, processos judiciais entre irmãos, casamento, alimentos e desordem nas reuniões. Contém o capítulo 13, sobre o amor que tudo suporta, lido em quase todo casamento cristão e um dos trechos mais conhecidos de toda a literatura ocidental.',
    'Apóstolo Paulo||Carta aos Gálatas': 'Defende com veemência que os convertidos não judeus não precisam seguir a lei mosaica, e afirma que em Cristo não há judeu nem grego, escravo nem livre, homem nem mulher. É um dos textos decisivos para a separação entre cristianismo e judaísmo, e foi central na Reforma como base da justificação pela fé.',
    'Apóstolo Paulo||Primeira Carta aos Tessalonicenses': 'Carta de encorajamento a uma comunidade recém-formada, com instruções sobre trabalho, conduta e consolo diante da morte dos que já partiram. É consenso entre estudiosos que se trata do documento cristão mais antigo preservado, anterior a todos os evangelhos, e por isso a janela mais próxima do pensamento das primeiras comunidades.',
    'Audre Lorde||Irmã Outsider': 'Reúne ensaios e discursos sobre raça, classe, gênero, sexualidade e idade, e sobre o que se perde quando um movimento trata a diferença como obstáculo em vez de força. Publicada em 1984, é uma das obras mais citadas do feminismo negro e trouxe ao vocabulário comum a ideia de que as ferramentas do senhor não derrubam a casa do senhor.',
    'Audre Lorde||Diários do Câncer': 'Reúne entradas de diário e ensaios escritos durante o diagnóstico, a mastectomia e a recuperação, recusando o tom de superação obrigatória e a pressão para esconder o corpo alterado. Publicado quando o câncer de mama ainda era assunto privado, abriu espaço para uma literatura de doença que não pede consolo.',
    'Audre Lorde||Zami: Uma Nova Grafia do Meu Nome': 'Narra a infância no Harlem em família caribenha, a descoberta da própria sexualidade e os vínculos com as mulheres que formaram a autora. Lorde chamou o livro de biomitografia, termo que criou para a mistura de biografia, história e mito, e o gênero que inventou ali virou referência nos estudos literários e de gênero.',
    'Audre Lorde||Carvão': 'Livro de poemas sobre identidade, raça, linguagem e desejo, cujo poema-título afirma o negro como origem da palavra e da voz. Reúne textos antes publicados por pequenas editoras e foi o volume que apresentou a autora a um público amplo, estabelecendo-a como poeta de projeção nacional nos Estados Unidos.',
    'Baltasar Gracián||O Herói': 'Primeiro livro do autor, descreve as qualidades que distinguem o homem superior: medir o que se revela, cultivar o gosto e nunca esgotar a expectativa alheia. Publicado sob o nome do irmão e sem licença da ordem jesuíta, inaugura a série de tratados que culminaria na Arte da Prudência e influenciou o moralismo europeu.',
    'Barbara McClintock||Trabalhos sobre elementos genéticos móveis':
      'Pesquisas com milho que demonstraram que certos elementos genéticos mudam de posição no genoma e podem ligar e desligar outros genes. Apresentadas em 1950, foram recebidas com ceticismo porque contrariavam a convicção de que genes ocupam posições fixas. Confirmadas décadas depois, renderam à autora o Nobel de Medicina, sozinha, em 1983.',
    'bell hooks||Não Sou Eu Uma Mulher?': 'Examina o efeito combinado de racismo e sexismo sobre mulheres negras americanas, da escravidão aos movimentos sociais do século XX, e a ausência dessa experiência nos dois movimentos. A autora começou a escrevê-lo aos dezenove anos, e o livro tornou-se um dos textos fundadores do feminismo negro.',
    'Benjamin Franklin||Primeira biblioteca pública por assinatura':
      'Biblioteca criada em 1731 na Filadélfia por artesãos e comerciantes que reuniram recursos para comprar livros de uso comum, então caros e importados. Nasceu do clube de discussão que Franklin havia fundado com amigos e é apontada como origem do sistema de bibliotecas públicas americano e das associações civis voluntárias nas colônias.',
    'Benjamin Franklin||Óculos bifocais': 'Lentes divididas em duas partes, uma para longe e outra para perto, montadas na mesma armação. Franklin relatou em carta de 1784 que se cansara de trocar de óculos na mesa e à janela e mandou cortar as lentes dos dois pares que usava. A solução permanece em uso, hoje em versões progressivas.',
    'Abílio Diniz||Caminho Sereno': 'Memórias do empresário sobre a construção do Grupo Pão de Açúcar, o sequestro de 1989 que o manteve seis dias em cativeiro e a disputa societária com o grupo francês Casino. Publicado durante o litígio que encerraria sua atuação no grupo, é a principal fonte em primeira pessoa sobre a formação de uma das maiores redes varejistas do Brasil.',
    'Ada Lovelace||Notas sobre a Máquina Analítica':
      'Tradução comentada de um artigo sobre a máquina de Charles Babbage, em que as notas da tradutora ocupam mais que o triplo do texto original. A Nota G contém o que é reconhecido como o primeiro algoritmo escrito para ser executado por uma máquina. Lovelace escreveu ainda que o aparelho poderia manipular símbolos e compor música, não apenas números.',
    'Alan Turing||Sobre Números Computáveis': 'Define uma máquina abstrata capaz de executar qualquer procedimento mecânico de cálculo e prova que existem problemas que nenhuma máquina desse tipo pode resolver. Publicado em 1936, quando não existiam computadores, é o modelo teórico de todo computador programável e o ponto de partida da ciência da computação.',
    'Adam Smith||A Riqueza das Nações': 'Analisa como a divisão do trabalho, a troca e a busca do interesse próprio produzem prosperidade coletiva, e critica monopólios, corporações de ofício e restrições ao comércio. Publicado em 1776, fundou a economia política como campo de estudo e é a obra mais citada — e mais citada fora de contexto — da história da disciplina.',
    'Adam Smith||Teoria dos Sentimentos Morais': 'Sustenta que o juízo moral nasce da simpatia — da capacidade de se colocar no lugar do outro — e da figura do espectador imparcial que cada pessoa constrói dentro de si. Smith a considerava sua obra principal e a revisou até o fim da vida; é indispensável para entender o que ele de fato defendia em A Riqueza das Nações.',
    'Ailton Krenak||Ideias para Adiar o Fim do Mundo': 'Reúne três conferências em que o autor critica a ideia de humanidade separada da natureza e a noção de progresso que sustenta a devastação ambiental. Publicado em 2019, tornou-se um dos ensaios brasileiros mais lidos da década e levou o pensamento indígena ao centro do debate público e das universidades.',
    'Albert Camus||O Estrangeiro': 'Meursault não chora no enterro da mãe, mata um homem numa praia argelina e é julgado menos pelo crime do que pela indiferença. Publicado em 1942, na França ocupada, é a formulação literária mais direta do absurdo camusiano e um dos romances mais lidos e mais traduzidos do século XX.',
    'Albert Camus||O Mito de Sísifo': 'Abre perguntando se a vida vale a pena ser vivida e responde que sim, sem recorrer a esperança nem a religião. Descreve o absurdo como o choque entre a busca humana de sentido e o silêncio do mundo, e termina imaginando Sísifo feliz ao descer a montanha. É o texto central da filosofia de Camus.',
    'Albert Camus||A Peste': 'Uma epidemia isola a cidade argelina de Orã e obriga médicos, jornalistas e padres a decidir o que fazem diante do sofrimento sem explicação. Escrita como alegoria da ocupação nazista, funciona para qualquer catástrofe coletiva — o livro voltou às listas de mais vendidos em todo o mundo em 2020.',
    'Albert Camus||O Homem Revoltado': 'Examina a revolta como afirmação de um limite e critica as revoluções que sacrificam vidas presentes em nome do futuro. Publicado em 1951, custou a Camus a amizade de Sartre e o isolamento em boa parte da esquerda francesa, e é sua obra política mais extensa e mais discutida.',
    'Albert Einstein||Sobre a Eletrodinâmica dos Corpos em Movimento':
      'Artigo que apresenta a relatividade restrita, mostrando que tempo e espaço dependem do referencial e que a velocidade da luz é constante para todos os observadores. Publicado em 1905, quando o autor era examinador de patentes em Berna e não tinha posição acadêmica, reorganizou a física em poucas páginas e sem citar quase nenhuma referência.',
    'Albert Einstein||Por Que a Guerra? (com Freud)': 'Troca de cartas entre Einstein e Freud, encomendada pela Liga das Nações em 1932, sobre a possibilidade de livrar a humanidade da guerra. Einstein pergunta por que é tão fácil mobilizar homens para matar; Freud responde a partir de sua teoria das pulsões. O nazismo chegou ao poder meses depois da publicação.',
    'Aldous Huxley||Admirável Mundo Novo': 'Retrata um Estado mundial em que os seres humanos são produzidos em laboratório, condicionados para a casta em que vão servir e mantidos dóceis por prazer, consumo e uma droga sem ressaca. Publicado em 1932, define, ao lado de 1984, os dois polos da distopia moderna: o controle pelo medo e o controle pelo prazer.',
    'Alexis de Tocqueville||A Democracia na América': 'Nasce de uma viagem aos Estados Unidos para estudar o sistema prisional e tornou-se a análise clássica da sociedade igualitária: associações voluntárias, imprensa, religião e os riscos da tirania da maioria e do despotismo brando. É referência permanente em ciência política e uma das obras mais citadas sobre democracia.',
    'Alexis de Tocqueville||O Antigo Regime e a Revolução': 'Argumenta que a Revolução Francesa não rompeu com o Estado anterior tanto quanto se acredita: a centralização administrativa que ela levou ao extremo já vinha sendo construída pela monarquia. Baseado em pesquisa inédita em arquivos provinciais, formulou a tese de que regimes opressivos correm mais risco quando começam a se reformar.',
    'Anne Frank||O Diário de Anne Frank': 'Dois anos de anotações de uma adolescente escondida com a família em um anexo secreto em Amsterdã, entre o medo e as brigas com a mãe, o primeiro beijo e a vontade de ser escritora. É a porta de entrada de gerações ao Holocausto justamente por não descrever campos, e sim uma vida comum sendo estrangulada aos poucos.',
    'Antoine de Saint-Exupéry||O Pequeno Príncipe': 'Um piloto cai no deserto do Saara e encontra um menino vindo de outro planeta, que lhe conta de uma rosa exigente, de uma raposa que pede para ser cativada e dos adultos que só entendem números. Publicado em 1943, é um dos livros mais traduzidos do mundo e é lido simultaneamente como fábula infantil e meditação adulta sobre perda.',
    'Ariano Suassuna||Auto da Compadecida': 'João Grilo e Chicó armam pequenas trapaças para sobreviver no sertão paraibano até que a morte chega e todos são julgados diante de Cristo, com Nossa Senhora como advogada de defesa. Montada a partir de folhetos de cordel na estrutura dos autos medievais, é a peça brasileira mais encenada do século XX.',
    'Aristóteles||Ética a Nicômaco': 'Investiga o que é uma vida boa e conclui que a virtude é hábito construído pela repetição, e não talento recebido, definindo cada virtude como meio-termo entre dois excessos. Escrita para uso no Liceu a partir de notas de aula, é a obra fundadora da ética das virtudes e a mais lida da filosofia moral antiga.',
    'Arthur Schopenhauer||O Mundo como Vontade e Representação': 'Sustenta que o mundo que conhecemos é representação nossa, e que por trás dele há uma vontade cega e insaciável que se manifesta em tudo o que existe. Propõe a arte e a compaixão como suspensões momentâneas do sofrimento. Publicada em 1818 e ignorada por décadas, influenciou Nietzsche, Wagner, Freud, Tolstói e Borges.',
    'Arthur Schopenhauer||Aforismos para a Sabedoria de Vida': 'Reúne conselhos práticos sobre como viver da maneira menos infeliz possível, distinguindo o que a pessoa é, o que tem e o que representa aos olhos dos outros — e defendendo que só o primeiro importa. Foi este livro tardio, e não sua obra filosófica principal, que finalmente trouxe fama ao autor nos últimos anos de vida.',
    'Arthur Schopenhauer||A Arte de Ter Razão': 'Catálogo de trinta e oito estratagemas usados para vencer discussões independentemente de ter razão, descritos com exemplos e sem disfarce moral. Publicado postumamente, tornou-se leitura corrente em retórica, direito e debate público, e é usado para identificar manobras argumentativas no discurso político.',
    'Ayrton Senna||Instituto Ayrton Senna': 'Organização criada pela família em 1994, meses após a morte do piloto, a partir de um projeto social que ele vinha preparando e financiava em silêncio. Atua em formação de professores e políticas educacionais e já alcançou milhões de crianças em redes públicas brasileiras.',
    'Baltasar Gracián||A Arte da Prudência': 'Trezentos aforismos sobre como agir no mundo real — medir o que se diz, escolher aliados, reconhecer a hora de parar — sem abrir mão da integridade. Publicado em 1647 por um jesuíta que escrevia sem licença da ordem, foi traduzido por Schopenhauer, que o carregava consigo, e influenciou La Rochefoucauld e Nietzsche.',
    'Baltasar Gracián||O Criticón': 'Alegoria em três partes sobre a educação de um homem criado fora da sociedade, que atravessa as idades da vida descobrindo o funcionamento real do mundo. Combina sátira, filosofia e romance de formação, e é considerada a obra literária mais ambiciosa do barroco espanhol em prosa.',
    'Baruch Spinoza||Ética': 'Expõe, em ordem geométrica com definições e proposições, um sistema em que Deus se identifica à natureza, o livre-arbítrio como usualmente entendido não existe e a liberdade consiste em compreender as causas que nos determinam. Publicada meses após a morte do autor, foi condenada por mais de um século e reabilitada no XIX.',
    'Baruch Spinoza||Tratado Teológico-Político': 'Defende a liberdade de pensamento e de expressão e submete as Escrituras à crítica histórica, tratando-as como documentos produzidos por pessoas em contextos determinados. Publicado anonimamente em 1670, foi proibido em quase toda a Europa e é um dos textos fundadores da crítica bíblica moderna e da laicidade do Estado.',
    'Benjamin Franklin||Autobiografia': 'Relata a saída de casa aos dezessete anos, a construção da tipografia na Filadélfia e a passagem do ofício à vida pública, incluindo o método das treze virtudes acompanhadas em tabela. Escrita em quatro etapas e publicada postumamente, fundou o gênero da narrativa de ascensão pelo próprio esforço nos Estados Unidos.',
    'Benjamin Franklin||Almanaque do Pobre Ricardo': 'Almanaque anual com calendário, previsões e provérbios sobre trabalho, economia e prudência, assinados pelo personagem fictício Richard Saunders. Publicado desde 1732 em um tempo em que o almanaque era o único impresso em muitas casas, fixou dezenas de ditados ainda correntes na cultura americana.',
    'Benjamin Franklin||Para-raios': 'Dispositivo que conduz a descarga de um raio até o solo por uma haste metálica, resultado das experiências do autor com eletricidade atmosférica. Proposto em 1752, quando incêndios por raio destruíam torres e depósitos de pólvora, foi uma das primeiras aplicações práticas de uma descoberta científica — e Franklin recusou-se a patenteá-lo.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58a · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58a: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 58b — descrições ao padrão (lote 2) ===== */
(function () {
  var D = {
    'Benjamin Graham||Security Analysis': 'Estabelece o método de avaliar uma empresa por seus fundamentos — ativos, lucros, dívida — em vez do humor do mercado, e introduz a exigência de margem de segurança. Escrito com David Dodd logo após a quebra de 1929, fundou a análise fundamentalista e continua sendo o texto de referência do investimento em valor.',
    'Bertrand Russell||Os Problemas da Filosofia': 'Introdução curta que percorre as questões centrais da teoria do conhecimento: o que podemos saber, como distinguimos aparência de realidade e até onde a indução se sustenta. Publicada em 1912 em linguagem acessível, permanece uma das melhores portas de entrada à filosofia e defende a dúvida como exercício útil, e não como paralisia.',
    'Bertrand Russell||Principia Mathematica (com Whitehead)': 'Tentativa monumental, em três volumes, de derivar toda a matemática de princípios puramente lógicos, com centenas de páginas até provar que um mais um é igual a dois. O projeto foi limitado pelos teoremas de incompletude de Gödel, mas transformou a lógica moderna e é uma das obras mais influentes da filosofia do século XX.',
    'Blaise Pascal||Cartas Provinciais': 'Série de cartas públicas que defendem os jansenistas e atacam a casuística moral jesuítica, mostrando como ela permitia justificar quase qualquer conduta. Escritas em linguagem acessível e irônica para o leitor comum, são consideradas marco da prosa francesa moderna e foram queimadas por ordem real em 1660.',
    'Blaise Pascal||A Pascaline': 'Máquina de calcular mecânica capaz de somar e subtrair por rodas dentadas, construída a partir de 1642 por um rapaz de dezenove anos para aliviar o trabalho do pai, coletor de impostos. É uma das primeiras calculadoras da história e deu nome, três séculos depois, à linguagem de programação Pascal.',
    'Buda||Dhammapada': 'Reúne quatrocentos e vinte e três versos que condensam o ensinamento budista sobre a mente, o desejo, a raiva e o caminho do meio, em formulações breves e memorizáveis. É o texto do cânone páli mais lido fora da Ásia e uma das principais portas de entrada ocidentais ao budismo.',
    'Buda||Sermão de Benares': 'Primeiro discurso após o despertar, dirigido a cinco antigos companheiros de ascese, em que são expostas as quatro nobres verdades e o caminho do meio entre o prazer e a mortificação. É o texto fundador do budismo e o ponto de partida de todas as suas escolas posteriores.',
    'C. S. Lewis||As Crônicas de Nárnia': 'Sete livros sobre crianças que atravessam para um mundo de animais falantes governado pelo leão Aslan e participam de sua criação, de suas guerras e de seu fim. Escritos na Inglaterra do pós-guerra, com a memória das crianças evacuadas de Londres, venderam mais de cem milhões de exemplares em dezenas de idiomas.',
    'C. S. Lewis||Cristianismo Puro e Simples': 'Apresenta o que o autor considera o núcleo comum do cristianismo, partilhado pelas diferentes denominações, argumentando primeiro pela existência de uma lei moral e só depois pela doutrina. Nasceu de falas transmitidas pela BBC durante a Segunda Guerra e é o livro de apologética cristã mais lido do século XX.',
    'C. S. Lewis||A Anatomia de uma Dor': 'Diário do luto escrito após a morte da esposa, registrando sem consolo a raiva, a dúvida sobre Deus e o desconforto dos outros diante do enlutado. Publicado sob pseudônimo, é um contraponto direto à obra apologética do próprio autor e um dos relatos mais usados hoje em acompanhamento de pessoas em luto.',
    'C. S. Lewis||Cartas de um Diabo a seu Aprendiz': 'Um demônio experiente orienta o sobrinho iniciante sobre como afastar um homem comum da fé — não por grandes tentações, mas por distração, vaidade e pequenas acomodações. Escrito em 1942, com o personagem tentado vivendo sob bombardeio, é a obra mais engenhosa do autor e a que mais circulou fora dos círculos religiosos.',
    'C. S. Lewis||A Alegoria do Amor': 'Estudo sobre a tradição alegórica medieval e o surgimento do amor cortês, do Romance da Rosa a Spenser, e sobre como essa concepção moldou a literatura ocidental. Publicado em 1936, é considerado um marco dos estudos medievais em língua inglesa e foi a obra que estabeleceu a reputação acadêmica do autor, antes de sua fama como escritor.',
    'Candido Portinari||Guerra e Paz': 'Dois painéis de mais de dez metros de altura, um dedicado ao horror da guerra e outro às cenas de convívio em tempo de paz, doados pelo Brasil à sede da ONU em Nova York. Executados entre 1952 e 1956 contra recomendação médica, são a obra de maior escala do artista, que foi impedido de entrar nos Estados Unidos para a inauguração.',
    'Candido Portinari||Os Retirantes': 'Pintura de 1944 que retrata uma família de migrantes nordestinos em fuga da seca, com corpos angulosos, olhos enormes e chão rachado em cores terrosas. Integra a série mais dura do artista, ao lado de Criança Morta e Enterro na Rede, e tornou-se referência visual permanente da questão da seca e da migração interna no Brasil.',
    'Carl Gustav Jung||O Livro Vermelho': 'Registro manuscrito e ilustrado das visões que o autor teve entre 1913 e 1930, em um período de crise profunda após o rompimento com Freud. Guardado pela família por quase meio século e publicado só em 2009, é a matriz de praticamente todos os conceitos que Jung desenvolveria depois — arquétipos, inconsciente coletivo, individuação.',
    'Carl Gustav Jung||Memórias, Sonhos, Reflexões': 'Autobiografia ditada nos últimos anos de vida, que narra a infância, os sonhos formadores, a relação com Freud e a crise que originou toda a sua obra. Organizada por Aniela Jaffé, é a melhor porta de entrada ao pensamento junguiano e uma das autobiografias mais lidas da psicologia.',
    'Carl Gustav Jung||Tipos Psicológicos': 'Propõe uma classificação da diversidade psíquica a partir das atitudes de introversão e extroversão combinadas com quatro funções: pensamento, sentimento, sensação e intuição. Publicado em 1921, é a obra em que Jung apresenta um sistema próprio após romper com Freud, e dela vêm termos hoje incorporados à linguagem comum.',
    'Carl Rogers||Tornar-se Pessoa': 'Reúne artigos sobre a abordagem centrada na pessoa, com casos clínicos e uma franqueza incomum sobre as próprias dúvidas do terapeuta. Sustenta que aceitação, empatia e autenticidade bastam para que alguém encontre o próprio caminho, e é o livro que levou a psicologia humanista ao grande público.',
    'Carl Rogers||Um Jeito de Ser': 'Reflexões finais do autor sobre escuta, empatia, presença e a aplicação de sua abordagem a grupos, educação e conflitos internacionais. Publicado em 1980, é o livro mais pessoal de Rogers e o que melhor mostra a extensão que ele dava à ideia de relação terapêutica, muito além do consultório.',
    'Carl Rogers||Terapia Centrada no Cliente': 'Apresenta uma abordagem em que o terapeuta não dirige nem interpreta, mas oferece aceitação incondicional, empatia e autenticidade. Rogers trocou a palavra paciente por cliente justamente para marcar a mudança de posição, e o livro fundou a chamada terceira força da psicologia, ao lado da psicanálise e do behaviorismo.',
    'Carl Rogers||Liberdade para Aprender': 'Aplica à educação os princípios da abordagem centrada na pessoa, defendendo que aprender de maneira significativa exige que o estudante assuma a direção do processo, com o professor como facilitador. Publicado em 1969, no auge da contestação estudantil, tornou-se referência da educação humanista.',
    'Carl Sagan||Cosmos': 'Percorre a história do universo e do conhecimento humano sobre ele, da Alexandria antiga à exploração espacial, sem sacrificar rigor em nome da clareza. Publicado junto com a série de televisão vista por centenas de milhões de pessoas em mais de sessenta países, é o modelo até hoje imitado da divulgação científica.',
    'Carl Sagan||O Mundo Assombrado pelos Demônios': 'Defende o método científico e o ceticismo contra a pseudociência, e oferece ao leitor comum um kit de detecção de falácias para avaliar afirmações extraordinárias. Escrito quando o autor já estava doente, é seu testamento intelectual e voltou a circular amplamente com o debate atual sobre desinformação.',
    'Carl Sagan||Pálido Ponto Azul': 'Parte da fotografia da Terra tirada pela sonda Voyager a seis bilhões de quilômetros, em que o planeta aparece como um pixel suspenso na luz, para tratar de exploração espacial e do lugar humano no universo. A fotografia foi feita a pedido do próprio autor, e a passagem que a comenta é uma das mais citadas da divulgação científica.',
    'Carl Sagan||Contato': 'Único romance do autor, narra a recepção de um sinal de origem extraterrestre e o que acontece quando ciência, religião, política e imprensa precisam lidar com ele. Construído com rigor científico incomum no gênero, foi adaptado ao cinema em 1997 e é usado para discutir método, evidência e fé.',
    'Carlos Drummond de Andrade||Alguma Poesia': 'Livro de estreia, publicado em 1930 com tiragem custeada pelo próprio poeta, marcado pela ironia e pela linguagem coloquial do modernismo. Abre com o poema em que um anjo torto manda ser gauche na vida, imagem que atravessaria toda a obra e virou uma das mais citadas da poesia brasileira.',
    'Carlos Drummond de Andrade||Claro Enigma': 'Marca a volta do poeta à forma clássica e à meditação sobre tempo, memória, perda e a impossibilidade de mudar o passado. Publicado em 1951, depois da fase social, foi recebido com estranhamento por quem esperava a continuação daquela linha, e hoje é apontado como um dos pontos mais altos de sua obra.',
    'Carlos Drummond de Andrade||Sentimento do Mundo': 'O eu irônico e retraído da estreia se abre para o mundo: guerra, multidão, injustiça e a dificuldade de um indivíduo pequeno diante de acontecimentos grandes demais. Publicado em 1940, com a Europa em guerra e o Brasil sob o Estado Novo, inaugura a fase social do poeta e contém alguns de seus versos mais conhecidos.',
    'Cecília Meireles||Viagem': 'Livro marcado pela transitoriedade: mar, vento, tempo e ausência aparecem como formas de uma mesma reflexão sobre o que não se fixa. Publicado em 1939, após longo silêncio editorial, recebeu o prêmio de poesia da Academia Brasileira de Letras e gerou polêmica entre modernistas pelo uso de formas fixas.',
    'Cecília Meireles||Ou Isto ou Aquilo': 'Poesia para crianças construída sobre o jogo sonoro, a escolha e a brincadeira com as palavras, sem moral explícita nem tom pedagógico. Publicado em 1964, quando a literatura infantil brasileira ainda era dominada por textos didáticos, é um marco do gênero e presença permanente na alfabetização.',
    'Charles Chaplin||Tempos Modernos': 'O Vagabundo é engolido pelas engrenagens de uma fábrica, enlouquece na linha de montagem e atravessa desemprego, greve e prisão na Depressão americana. Lançado em 1936, quase mudo em plena era do som, combina comédia física e crítica social direta e é um dos filmes mais reproduzidos da história do cinema.',
    'Charles Chaplin||O Grande Ditador': 'Um barbeiro judeu é confundido com o ditador de um país fictício e acaba diante de um microfone, onde abandona a máscara cômica e fala diretamente à câmera. Lançado em 1940, quando os Estados Unidos ainda não haviam entrado na guerra, é o primeiro filme falado de Chaplin e seu discurso final continua sendo citado em todo o mundo.',
    'Charles Chaplin||Luzes da Cidade': 'O Vagabundo se apaixona por uma florista cega e reúne dinheiro para custear a cirurgia que lhe devolverá a visão — sabendo que ela não o reconhecerá. Lançado em 1931, quatro anos depois da chegada do som, é apontado com frequência como o melhor filme de Chaplin, e sua cena final como uma das maiores do cinema.',
    'Charles Darwin||A Descendência do Homem': 'Aplica a teoria da evolução à espécie humana e desenvolve a seleção sexual como segundo mecanismo evolutivo, para explicar caracteres que não servem à sobrevivência. Darwin esperou doze anos após A Origem das Espécies para publicá-lo, ciente da reação; o livro estabeleceu a continuidade entre humanos e outros animais, inclusive nas emoções.',
    'Charles Darwin||A Viagem do Beagle': 'Diário da viagem de quase cinco anos ao redor do mundo, com observações de geologia, fauna, flora e povos da América do Sul, do Pacífico e da Austrália. Publicado em 1839, tornou o autor conhecido como naturalista antes de qualquer teoria e reúne as observações que alimentariam a formulação da seleção natural.',
    'Charlie Munger||Almanaque do Charlie Munger': 'Reúne discursos, cartas e entrevistas do sócio de Warren Buffett sobre modelos mentais de várias disciplinas, incentivos e as causas psicológicas do erro humano. A palestra sobre as vinte e cinco tendências que levam ao juízo equivocado é o texto mais citado do livro e circula amplamente fora do mundo financeiro.',
    'Chico Xavier||Nosso Lar': 'Narra a experiência de um médico que, após a morte, desperta em uma região sombria e depois é acolhido em uma colônia espiritual organizada, onde trabalha e estuda. Psicografado e atribuído ao espírito André Luiz, é um dos livros espíritas mais vendidos do Brasil e foi adaptado ao cinema em 2010 com grande público.',
    'Chico Xavier||Parnaso de Além-Túmulo': 'Coletânea de poemas atribuídos a poetas brasileiros e portugueses já falecidos, cada um no estilo do autor a quem é creditado. Publicado em 1932, quando o médium tinha 22 anos e era funcionário público em Pedro Leopoldo, provocou debate imediato entre críticos literários e deu início a uma obra de mais de quatrocentos títulos.',
    'Chico Xavier||Doação integral dos direitos autorais': 'Prática mantida pelo médium por quase setenta anos, de destinar integralmente os direitos de seus mais de quatrocentos livros a obras assistenciais, vivendo de salário de funcionário público e depois de aposentadoria. Financiou creches e asilos em Minas Gerais e é um dos fatores da credibilidade pública que ele conquistou no país.',
    'Chien-Shiung Wu||Experimento de Wu': 'Mediu a emissão de elétrons no decaimento de núcleos de cobalto resfriados quase ao zero absoluto e demonstrou que a natureza distingue esquerda de direita nas interações fracas. Derrubou um dos princípios mais estabelecidos da física do século XX; o Nobel de 1957 foi concedido aos teóricos que propuseram a hipótese, e não a ela.',
    'Chimamanda Ngozi Adichie||Americanah': 'Ifemelu deixa a Nigéria para estudar nos Estados Unidos e descobre que só ali passou a ser tratada como negra, enquanto Obinze tenta a vida como imigrante ilegal em Londres. Publicado em 2013, trata de migração, cabelo, classe e retorno, e é um dos romances mais discutidos da década sobre identidade racial.',
    'Chimamanda Ngozi Adichie||Meio Sol Amarelo': 'Acompanha três personagens durante a guerra de Biafra, conflito que matou mais de um milhão de pessoas na Nigéria entre 1967 e 1970 e é pouco conhecido fora do país. Venceu o Orange Prize e é apontado como o romance que trouxe aquele episódio de volta à consciência internacional.',
    'Chimamanda Ngozi Adichie||Sejamos Todos Feministas': 'Palestra transformada em livro curto, que define feminismo em linguagem direta a partir de episódios da vida da autora na Nigéria e nos Estados Unidos. Foi distribuída a todos os estudantes de dezesseis anos da Suécia e é hoje um dos textos de entrada mais adotados no debate sobre gênero.',
    'Chris Voss||Negocie Como se Sua Vida Dependesse Disso': 'Aplica a negociação de reféns do FBI a situações comuns — salário, contrato, conflito familiar — com técnicas como a empatia tática, o espelhamento e a busca deliberada pelo não. Escrito por um ex-negociador-chefe da agência, contesta o modelo de ganha-ganha e tornou-se um dos manuais de negociação mais vendidos do mundo.',
    'Cícero||Sobre a Amizade (Laelius)': 'Diálogo sobre a amizade verdadeira, que Cícero define como rara, exigente e impossível entre pessoas desonestas, distinguindo-a da utilidade e da bajulação. Escrito em 44 a.C., ano do assassinato de César, é o tratado clássico sobre o tema e atravessou toda a tradição ocidental, de Montaigne a Emerson.',
    'Cícero||Sobre a Velhice (Cato Maior)': 'Responde aos quatro motivos pelos quais se teme a velhice — o afastamento dos negócios, a fraqueza do corpo, a perda dos prazeres e a proximidade da morte — mostrando que nenhum se sustenta. Escrito quando o autor já pressentia o próprio fim, é um dos textos antigos mais lidos sobre envelhecer.',
    'Cícero||Catilinárias': 'Quatro discursos proferidos no Senado romano em 63 a.C. que desmontaram publicamente a conspiração de Catilina para tomar o poder. A abertura, em que o orador pergunta até quando o conspirador abusará da paciência de todos, é uma das mais conhecidas da história, e os discursos são modelo de oratória política até hoje.',
    'Clarice Lispector||Água Viva': 'Não tem enredo nem personagens: é uma voz tentando registrar o instante enquanto ele passa, escrita como quem pinta. Publicado em 1973, é o livro em que a autora leva mais longe a recusa da narrativa convencional, e tornou-se referência para escritores, artistas plásticos e músicos muito além da literatura.',
    'Clayton Christensen||O Dilema da Inovação': 'Explica por que empresas bem geridas perdem mercado justamente por fazerem tudo certo: ouvem seus melhores clientes e investem onde a margem é maior, ignorando tecnologias inicialmente piores que crescem por baixo. Publicado em 1997, introduziu o conceito de disrupção e é um dos livros de negócios mais influentes já escritos.',
    'Clayton Christensen||Como Você Vai Medir Sua Vida?': 'Aplica teorias de gestão a decisões pessoais sobre carreira, família e integridade, a partir de uma aula que o autor deu após receber um diagnóstico de câncer. Argumenta que a mesma lógica que faz empresas privilegiarem o curto prazo leva pessoas a sacrificar relações duradouras por resultados imediatos.',
    'Clayton Christensen||O Crescimento pela Inovação': 'Continuação de O Dilema da Inovação, trata de como criar deliberadamente negócios disruptivos dentro de empresas estabelecidas, em vez de apenas sofrer a disrupção. Oferece critérios para identificar se uma oportunidade tem potencial disruptivo antes de investir, transformando um diagnóstico em ferramenta de decisão.',
    'Clayton Christensen||Muito Além da Sorte': 'Apresenta a teoria dos trabalhos a serem feitos: o cliente não compra um produto, contrata-o para resolver uma tarefa em sua vida, e entender essa tarefa é o que torna a inovação previsível. O estudo sobre por que as pessoas compram milk-shakes de manhã tornou-se o exemplo mais citado de pesquisa de produto.',
    'Colin Powell||Minha Jornada Americana': 'Autobiografia do general, da infância no Bronx como filho de imigrantes jamaicanos às duas passagens pelo Vietnã e à chefia do Estado-Maior Conjunto. Publicada em 1995, após a Guerra do Golfo, quando ele era uma das figuras públicas mais respeitadas dos Estados Unidos e era cogitado para a presidência.',
    'Colin Powell||Meu Caminho Deu Certo': 'Reúne as treze regras de liderança que o autor mantinha sob o vidro da mesa e relatos da carreira militar e diplomática, sobre responsabilidade, cuidado com subordinados e decisão sob pressão. Tornou-se referência em liderança militar e corporativa, sobretudo no que trata de decidir com informação incompleta.',
    'Colin Powell||Meu Caminho Funcionou': 'Reúne as treze regras que o general mantinha sob o vidro da mesa, com relatos da carreira e do que aprendeu liderando. A regra de que o otimismo perpétuo é multiplicador de força e a que lembra que o trabalho pode se importar com você muito menos do que você com ele estão entre as mais citadas.',
    'Cora Coralina||Estórias da Casa Velha da Ponte': 'Narrativas em prosa sobre a casa onde a autora viveu, a cidade de Goiás e as pessoas que passaram por ali ao longo de quase um século. Publicado em 1985, ano de sua morte aos 95 anos, é seu último livro em vida e o mais diretamente autobiográfico. A casa é hoje museu, tombada e aberta à visitação.',
    'Dale Carnegie||Como Evitar Preocupações e Começar a Viver': 'Reúne métodos práticos contra a ansiedade, montados a partir de centenas de entrevistas e de casos reais, entre eles a regra de viver em compartimentos estanques de um dia e a de aceitar o pior antes de tentar melhorá-lo. Publicado em 1948, é o segundo grande sucesso do autor e continua em catálogo desde então.',
    'Daniel Goleman||Inteligência Emocional': 'Sustenta que autoconsciência, autorregulação, motivação, empatia e habilidade social pesam tanto quanto o quociente intelectual no desempenho e na vida. Publicado em 1995, sistematizou para o público geral pesquisas de psicólogos como Salovey e Mayer e mudou de forma duradoura o vocabulário da gestão de pessoas e da educação.',
    'Daniel Goleman||Foco': 'Trata da atenção como recurso escasso e treinável, distinguindo o foco interno, o foco no outro e o foco no sistema mais amplo. Publicado em 2013, no início do debate sobre o custo cognitivo da distração permanente, articula neurociência, psicologia e prática contemplativa.',
    'Daniel Kahneman||Ruído (com Sibony e Sunstein)': 'Distingue ruído de viés: enquanto o viés é um erro sistemático em uma direção, o ruído é a variabilidade indesejada entre julgamentos que deveriam ser idênticos. Mostra juízes, médicos e seguradoras chegando a conclusões muito diferentes sobre casos iguais, e propõe auditorias de ruído como ferramenta prática de correção.',
    'David Hume||Investigação sobre o Entendimento Humano': 'Versão mais acessível do Tratado da Natureza Humana, que o próprio autor considerava mal escrito. Apresenta o problema da indução, a crítica à ideia de causalidade e o argumento cético sobre milagres. Foi o texto que, segundo Kant, o despertou do sono dogmático e reorientou a filosofia moderna.',
    'David Hume||História da Inglaterra': 'História em seis volumes da invasão romana à Revolução de 1688, com atenção a instituições, costumes e opinião pública, e não apenas a reis e batalhas. Foi a história padrão da Inglaterra por mais de meio século e deu ao autor a fama e o sustento que sua obra filosófica não lhe trouxera em vida.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58b · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58b: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 58c — descrições ao padrão (lote 3) ===== */
(function () {
  var D = {
    'Desmond Tutu||Não Há Futuro sem Perdão': 'Relato e reflexão sobre a Comissão da Verdade e Reconciliação sul-africana, presidida pelo autor, que ofereceu anistia a quem confessasse integralmente crimes do apartheid em audiências públicas. Publicado em 1999, tornou-se referência mundial em justiça de transição e serviu de modelo — e de objeto de crítica — para comissões em dezenas de países.',
    'Desmond Tutu||O Livro da Alegria (com o Dalai Lama)':
      'Registra uma semana de conversas entre os dois líderes religiosos em Dharamsala, sobre como manter alegria diante do sofrimento, da perda e da injustiça. Ambos viveram exílio e perseguição, e falam a partir dessa experiência comum. Propõe oito pilares da alegria como prática concreta e tornou-se um dos livros de espiritualidade mais vendidos da década.',
    'Edith Eger||A Bailarina de Auschwitz': 'Relata a deportação da autora aos dezesseis anos, a noite em que dançou para Mengele para sobreviver, a perda dos pais e a construção de uma vida nova nos Estados Unidos como psicóloga clínica. Publicado quando ela tinha noventa anos, une testemunho do Holocausto e prática clínica sobre trauma e escolha.',
    'Edith Eger||O Presente': 'Apresenta doze padrões mentais que aprisionam as pessoas — vitimização, evitação, culpa, ressentimento — e caminhos práticos para sair deles, ilustrados com casos clínicos e com a própria experiência da autora. Publicado em 2020 como continuação de A Bailarina de Auschwitz, tornou-se referência popular em resiliência.',
    'Eleanor Roosevelt||Declaração Universal dos Direitos Humanos':
      'Documento aprovado pela ONU em 1948, com trinta artigos que enunciam direitos reconhecidos a toda pessoa. Eleanor Roosevelt presidiu a comissão de redação, articulando delegações de sistemas jurídicos e ideológicos opostos em plena Guerra Fria. É o texto de referência do direito internacional dos direitos humanos e o mais traduzido do mundo.',
    'Eleanor Roosevelt||Você Aprende Vivendo': 'Reúne conselhos sobre medo, maturidade, uso do tempo, relações e responsabilidade pública, a partir da experiência da autora como primeira-dama, viúva e diplomata. Publicado em 1960, é seu livro mais pessoal e continua sendo citado nas discussões sobre coragem, sobretudo pelo tratamento que dá ao medo.',
    'Elon Musk||Elon Musk (biografia por Walter Isaacson)': 'Biografia construída a partir de dois anos de acompanhamento direto, com acesso a reuniões, viagens e decisões, cobrindo a infância na África do Sul, o PayPal, a Tesla, a SpaceX e a compra do Twitter. Publicada em 2023, registra com franqueza episódios desfavoráveis ao biografado, que não teve direito de aprovação sobre o texto.',
    'Epicteto||Diatribes': 'Aulas transcritas por um aluno, em que um ex-escravizado ensina a distinguir o que depende de nós do que não depende, e a concentrar todo o esforço no primeiro. Epicteto nada escreveu; o registro de Arriano preservou seu ensino e influenciou Marco Aurélio, Montaigne e toda a recuperação moderna do estoicismo.',
    'Epicuro||Carta a Meneceu': 'Carta breve que resume a ética epicurista: o prazer defendido não é excesso, mas ausência de dor e de perturbação, e a morte não deve ser temida porque onde ela está nós não estamos. É um dos poucos textos de Epicuro preservados integralmente e a exposição mais direta de sua doutrina.',
    'Epicuro||Máximas Principais': 'Quarenta sentenças breves que condensam toda a doutrina, pensadas para serem memorizadas e aplicadas no dia a dia, sobre desejo, medo, amizade, justiça e limite. Sobreviveram graças a Diógenes Laércio e são, junto com as cartas, a base de tudo o que se conhece do epicurismo em primeira mão.',
    'Erich Fromm||A Arte de Amar': 'Sustenta que amar não é um acaso que acontece, e sim uma prática que se aprende, exigindo disciplina, concentração, paciência e interesse genuíno pelo outro. Publicado em 1956, distingue as formas de amor — fraterno, materno, erótico, por si mesmo, por Deus — e é um dos livros de psicologia mais lidos do século XX.',
    'Erich Fromm||O Medo à Liberdade': 'Investiga por que pessoas trocam liberdade por segurança e se entregam a autoridades que as dispensam de escolher. Publicado em 1941, enquanto o nazismo avançava na Europa, combina psicanálise e teoria social para explicar a adesão popular ao totalitarismo, e continua sendo referência nas análises sobre autoritarismo.',
    'Erich Fromm||Ter ou Ser?': 'Contrapõe dois modos de existir: o da posse, que mede a pessoa pelo que acumula, e o do ser, que a mede pelo que exerce e compartilha. Publicado em 1976, é a crítica mais direta do autor ao consumo como identidade e um dos textos fundadores da discussão contemporânea sobre decrescimento e bem-estar.',
    'Fernando Pessoa||Poesias de Álvaro de Campos': 'Reúne a obra do heterônimo do excesso e da fadiga moderna, engenheiro naval formado na Escócia, autor da Ode Triunfal, que celebra máquinas e velocidade, e de Tabacaria, sobre a distância entre o que se sonhou ser e o que se é. É a face mais nervosa e mais lida da constelação pessoana.',
    'Fernando Pessoa||O Guardador de Rebanhos (Alberto Caeiro)': 'Reúne os poemas do heterônimo que recusa toda metafísica e insiste em ver as coisas como elas são, sem interpretá-las. Pessoa o apresentava como mestre dos demais heterônimos, inclusive de si próprio. Escrito em linguagem deliberadamente simples, é o núcleo filosófico de todo o projeto heteronímico.',
    'Fernando Pessoa||Odes de Ricardo Reis': 'Reúne as odes do heterônimo médico e monarquista, que escreve em português com sintaxe latina e disciplina horaciana, aceitando o limite e cultivando serenidade diante do que não se pode mudar. É a face estoica de Pessoa, e o contraponto exato ao excesso de Álvaro de Campos.',
    'Fiódor Dostoiévski||Memórias do Subsolo': 'Monólogo de um ex-funcionário público ressentido que ataca a ideia de que os homens agem conforme seus próprios interesses e reivindica o direito de agir contra si mesmo. Publicado em 1864, antecipa boa parte do existencialismo e é apontado como o primeiro romance moderno da consciência dividida.',
    'Florbela Espanca||Livro de Mágoas': 'Estreia da autora, reúne sonetos sobre solidão, desejo, insatisfação e a distância entre o que se sente e o que a vida permite. Publicado em 1919, introduziu na poesia portuguesa uma voz feminina que fala de desejo em primeira pessoa e sem disfarce, o que lhe custou hostilidade social duradoura.',
    'Florbela Espanca||Charneca em Flor': 'Sonetos de maturidade em que o desejo e a vitalidade aparecem em plenitude, com a paisagem seca do Alentejo em flor como imagem central. Publicado em 1931, poucos meses após a morte da autora aos 36 anos, é o ponto mais alto de sua poesia e o livro mais estudado de sua obra.',
    'Florbela Espanca||Livro de Sóror Saudade': 'Sonetos em que a autora assume a persona de uma religiosa em clausura para falar de amor, ausência e reclusão sentimental, retomando a tradição das Cartas Portuguesas. Publicado em 1923, é o segundo dos três livros que formam o núcleo de sua obra e consolida o soneto como sua forma característica.',
    'Francis Bacon||Novum Organum': 'Propõe substituir a dedução aristotélica pelo método indutivo baseado em observação e experimento, e descreve os quatro ídolos que distorcem o conhecimento: os da tribo, da caverna, do mercado e do teatro. Publicado em 1620, é o manifesto fundador da ciência experimental moderna.',
    'Francis Bacon||Ensaios': 'Textos curtos sobre estudo, amizade, verdade, ambição, casamento e morte, escritos em prosa de extrema economia e revisados pelo autor ao longo de quase trinta anos. Publicados a partir de 1597, criaram o ensaio em língua inglesa e continuam sendo citados pela densidade de suas primeiras frases.',
    'Francis Bacon||O Avanço do Conhecimento': 'Faz o inventário do saber humano de sua época, aponta as lacunas e defende a investigação empírica organizada em campos que se possam estudar separadamente. Publicado em 1605 em inglês, e não em latim, para ampliar seu alcance, é o primeiro manifesto moderno por um programa coletivo de investigação da natureza.',
    'Francisco de Assis||Cântico das Criaturas': "Louvor em que o sol, a lua, o vento, a água, o fogo, a terra e a própria morte são chamados de irmãos e irmãs. Composto por volta de 1224, quando o autor já estava doente e quase cego, é um dos primeiros textos literários em língua vulgar italiana e inspirou a encíclica Laudato Si', de 2015.",
    'Francisco de Assis||Regra dos Frades Menores': 'Regra que organiza a vida da ordem franciscana em torno da pobreza absoluta, da obediência e da pregação itinerante, recusando propriedade individual e coletiva. Aprovada em 1223 após anos de resistência da Cúria, fundou juridicamente a maior ordem mendicante da Igreja e transformou o cristianismo medieval.',
    'Frederick Douglass||Narrativa da Vida de Frederick Douglass': 'Relato em primeira pessoa da vida sob escravidão em Maryland: a separação da mãe, a violência dos capatazes, o aprendizado clandestino da leitura e a fuga para o Norte. Publicado em 1845 com nomes e lugares reais, expôs o autor à recaptura e é a mais lida das narrativas de escravizados americanos.',
    'Frederick Douglass||O que é o 4 de Julho para o escravo?': 'Discurso em que o autor, convidado a falar na celebração da independência americana, pergunta o que a data significa para quem continua escravizado no país que celebra a liberdade. Proferido em 5 de julho de 1852 — e não no dia 4, recusa deliberada —, é um dos discursos mais estudados da história americana.',
    'Frida Kahlo||As Duas Fridas': 'Autorretrato duplo em que duas Fridas se dão as mãos, uma em vestido europeu com o coração aberto e outra em traje tehuano, ligadas por uma artéria que sangra. Pintado em 1939, ano do divórcio com Diego Rivera, é a maior tela da artista e a mais citada na leitura de sua obra como investigação de identidade dividida.',
    'Frida Kahlo||A Coluna Partida': 'Autorretrato em que o corpo aparece aberto ao meio, com uma coluna jônica rachada no lugar da espinha, o torso preso por faixas e pregos cravados na pele. Pintado em 1944, quando a artista voltou a usar colete ortopédico, tornou-se a imagem mais associada à representação da dor física na arte do século XX.',
    'Frida Kahlo||Diário de Frida Kahlo': 'Caderno íntimo dos últimos dez anos da pintora, com desenhos, manchas de tinta, poemas e anotações sobre dor, Diego Rivera, política e morte. Publicado em fac-símile em 1995, mostra o processo criativo em estado bruto e é fonte central nos estudos sobre a artista.',
    'Friedrich Nietzsche||Genealogia da Moral': 'Investiga de onde vêm as ideias de culpa, dever e má consciência, e a quem elas historicamente serviram, em três dissertações sobre bem e mal, culpa e ideais ascéticos. Publicada em 1887, é a obra mais sistemática do autor e uma das mais influentes da filosofia moral contemporânea.',
    'Friedrich Nietzsche||Crepúsculo dos Ídolos': 'Livro curto escrito em poucas semanas, que ataca com aforismos as ideias que o autor considerava já ocas — Sócrates, a moral, a razão, o progresso — no que ele chamou de filosofar a marteladas. Publicado em 1888, ano de seu colapso, é a melhor síntese de seu pensamento maduro.',
    'Friedrich Nietzsche||A Gaia Ciência': 'Reúne aforismos sobre conhecimento, alegria e coragem, e contém tanto a primeira formulação do eterno retorno quanto o anúncio da morte de Deus, feito por um louco que percebe ter chegado cedo demais. Publicado em 1882, é o livro mais leve em tom e mais decisivo em conteúdo de sua obra.',
    'Galileu Galilei||Diálogo sobre os Dois Máximos Sistemas do Mundo': 'Diálogo entre três personagens que comparam o sistema de Ptolomeu, com a Terra imóvel, e o de Copérnico. Publicado em 1632 em italiano, para leitores fora da universidade, foi entendido como defesa aberta do heliocentrismo e levou o autor ao processo inquisitorial, à abjuração e à prisão domiciliar.',
    'Galileu Galilei||O Mensageiro das Estrelas': 'Relata as primeiras observações feitas com telescópio: montanhas e crateras na Lua, estrelas invisíveis a olho nu e quatro satélites girando em torno de Júpiter. Publicado em 1610, mostrou que existiam corpos orbitando algo que não a Terra e tornou o autor célebre em toda a Europa em poucos meses.',
    'George Orwell||A Revolução dos Bichos': 'Os animais expulsam o fazendeiro e criam uma sociedade igualitária, até que os porcos assumem o comando, reescrevem os mandamentos e aprendem a andar de pé. Publicada em 1945 como alegoria da Revolução Russa, foi recusada por vários editores por contrariar a aliança com a União Soviética e é hoje leitura escolar em dezenas de países.',
    'George Orwell||Homenagem à Catalunha': 'Relato da experiência do autor como miliciano na Guerra Civil Espanhola: as trincheiras de Aragão, o entusiasmo revolucionário de Barcelona e a repressão interna que o obrigou a fugir. Vendeu pouquíssimo em vida por contrariar a linha dominante à esquerda, e é a chave para entender A Revolução dos Bichos e 1984.',
    'George Orwell||A Política e a Língua Inglesa': 'Relaciona a decadência da linguagem política à desonestidade: eufemismos, clichês e construções vagas servem para tornar aceitável o que dito com clareza seria intolerável. Publicado em 1946, é um dos ensaios mais citados sobre escrita, e suas seis regras finais continuam sendo ensinadas em jornalismo.',
    'Getúlio Vargas||Carta-testamento': 'Carta deixada na madrugada de 24 de agosto de 1954, em que o presidente apresenta seu governo como defesa dos trabalhadores contra interesses econômicos e internacionais. Lida pelo rádio horas após seu suicídio, reverteu o clima nacional, deteve a deposição em curso e fixou sua imagem pública por décadas.',
    'Grace Hopper||Compilador A-0': 'Primeiro programa capaz de traduzir instruções em notação simbólica para o código de máquina, automatizando um trabalho antes feito à mão. Desenvolvido em 1952, quando se dizia à autora que computadores não sabiam escrever programas, é o antepassado direto de todos os compiladores.',
    'Grace Hopper||COBOL': 'Linguagem de programação concebida para ser lida em inglês corrente, de modo que administradores, e não apenas matemáticos, entendessem o código. Especificada em 1959 a partir da FLOW-MATIC, criada por Hopper, tornou-se o padrão de sistemas financeiros e governamentais e ainda sustenta boa parte das operações bancárias do mundo.',
    'Graciliano Ramos||Angústia': 'Luís da Silva, funcionário público humilhado e apaixonado por uma vizinha que se casa com outro, descreve em fluxo febril os dias que antecedem um crime. Publicado em 1936, semanas antes da prisão do autor, é seu romance mais denso e mais próximo do delírio, e o único em que a prosa seca cede ao excesso.',
    'Guimarães Rosa||Sagarana': 'Nove histórias do sertão mineiro em que boiadas, feiticeiros, brigas de fazenda e um burro velho ganham densidade de mito. Publicado em 1946, é o livro de estreia do autor e já traz a língua inventada, com neologismos e ritmo de fala sertaneja, que ele levaria ao extremo dez anos depois.',
    'Guimarães Rosa||Primeiras Estórias': 'Vinte e um contos curtos, muitos narrados por crianças, loucos e pessoas à margem, em que a língua é reinventada frase a frase. Publicado em 1962, contém A Terceira Margem do Rio, um dos contos brasileiros mais estudados e adaptados, e é a melhor porta de entrada à obra do autor.',
    'Gustave Le Bon||A Psicologia das Revoluções': 'Analisa as revoluções como fenômenos de psicologia coletiva, sustentando que crenças e emoções das multidões pesam mais do que interesses racionais. Publicada em 1912, ampliando a Psicologia das Multidões, influenciou a sociologia da ação coletiva e também líderes autoritários interessados em suas conclusões práticas.',
    'Harriet Tubman||Rotas da Ferrovia Subterrânea': 'Rede clandestina de rotas, esconderijos e colaboradores que conduzia pessoas escravizadas do Sul dos Estados Unidos a estados livres e ao Canadá. Tubman escapou em 1849 e voltou cerca de treze vezes para conduzir familiares e outras pessoas, carregando uma arma e afirmando nunca ter perdido um passageiro.',
    'Helen Keller||A Porta Aberta': 'Reúne textos curtos sobre coragem, alegria, fé e limitação, escritos pela autora no fim da vida, quando já era figura pública internacional havia décadas. Surda e cega desde os dezenove meses, Keller formou-se em universidade e militou pelo sufrágio feminino e pelos direitos de pessoas com deficiência.',
    'Henry David Thoreau||Uma Semana nos Rios Concord e Merrimack':
      'Relato de uma viagem de barco feita com o irmão John, entremeado de digressões sobre literatura, religião e amizade. O irmão morrera de tétano em 1842, e o livro é também um monumento à sua memória. Financiado pelo próprio autor em 1849, vendeu tão mal que ele escreveu possuir uma biblioteca de novecentos volumes, setecentos escritos por ele mesmo.',
    'Heráclito||Fragmentos': 'Cerca de cem frases sobreviventes, obscuras e cortantes, sobre o fluxo permanente, o conflito como origem de tudo e a unidade dos opostos. Preservadas por citações de autores posteriores, tornaram Heráclito o pré-socrático mais influente sobre a filosofia moderna, de Hegel e Nietzsche a Heidegger.',
    'Hillel||Ensinos no Pirkei Avot': 'Conjunto de máximas atribuídas a Hillel no tratado Pirkei Avot, sobre responsabilidade por si e pelos outros, urgência da ação e amor à paz. Contém a formulação negativa da regra de ouro, dada a um estrangeiro que pedia a Torá inteira enquanto se equilibrava em um pé só, e a pergunta sobre quem será por mim se não eu.',
    'Howard Marks||O Mais Importante para o Investidor': 'Reúne os princípios que o autor desenvolveu em décadas de memorandos: pensamento de segundo nível, atenção ao ciclo, controle de risco e a noção de que o preço pago importa mais que a qualidade do ativo. Warren Buffett escreveu o prefácio e afirma ler os memorandos do autor assim que chegam.',
    'Howard Marks||Dominando o Ciclo de Mercado': 'Sustenta que não se pode prever o futuro, mas se pode saber em que ponto do ciclo se está — e que isso basta para ajustar o risco assumido. Publicado em 2018, sistematiza a observação de ciclos de economia, crédito e psicologia do investidor, e é referência em gestão de risco.',
    'Howard Schultz||Dedique-se de Coração': 'Relata como o autor conheceu a Starbucks como pequena torrefadora de Seattle, comprou a empresa e a transformou em rede global apostando na experiência da cafeteria italiana. Conta também a decisão de oferecer plano de saúde a funcionários de meio período, motivada pela doença do pai, que ficou sem cobertura.',
    'Immanuel Kant||Crítica da Razão Pura': 'Investiga o que a razão pode conhecer por si mesma e conclui que espaço, tempo e categorias são formas que o sujeito impõe à experiência, e não propriedades das coisas em si. Publicada em 1781 após onze anos de silêncio, dividiu a filosofia em antes e depois e é uma das obras mais difíceis e mais decisivas do pensamento ocidental.',
    'Immanuel Kant||Fundamentação da Metafísica dos Costumes': 'Estabelece o imperativo categórico: agir apenas segundo a máxima que se poderia querer como lei universal, e tratar toda pessoa como fim em si, nunca apenas como meio. Publicada em 1785, é a exposição mais concisa da ética kantiana e a base de toda ética deontológica posterior.',
    'Immanuel Kant||Crítica da Razão Prática': 'Investiga se a razão pura pode determinar a vontade e conclui que a lei moral obriga por si mesma, dela derivando os postulados da liberdade, da imortalidade e de Deus. Publicada em 1788, completa o projeto crítico no terreno da ação, e sua frase final sobre o céu estrelado e a lei moral está gravada no túmulo do autor.',
    'Immanuel Kant||Resposta à Pergunta: O Que é o Esclarecimento?': 'Define o esclarecimento como a saída da menoridade de que o próprio homem é culpado, isto é, a decisão de usar o próprio entendimento sem tutela. Publicado em 1784 em uma revista de Berlim, é o texto que melhor sintetiza o programa do Iluminismo e o ponto de partida das discussões sobre autonomia e autoridade.',
    'Isaac Newton||Princípios Matemáticos da Filosofia Natural': 'Estabelece as três leis do movimento e a lei da gravitação universal, demonstrando que os mesmos princípios regem a queda dos corpos e o movimento dos planetas. Publicado em 1687 e financiado por Edmond Halley, fundou a mecânica clássica e é provavelmente o livro científico mais influente já escrito.',
    'Isaac Newton||Óptica': 'Reúne experimentos com prismas que mostram que a luz branca é composta de raios de cores distintas e não é alterada pelo vidro. Publicada em 1704 em inglês e em linguagem acessível, é modelo de método experimental, e as Questões que a encerram pautaram pesquisas por mais de um século.',
    'J.K. Rowling||Harry Potter e a Pedra Filosofal': 'Um menino órfão maltratado pelos tios descobre aos onze anos que é bruxo e é enviado a uma escola de magia, onde encontra amigos e a verdade sobre a morte dos pais. Recusado por doze editoras e publicado em 1997 com tiragem de quinhentos exemplares, abriu a série literária mais vendida da história.',
    'J.K. Rowling||Harry Potter e o Prisioneiro de Azkaban': 'No terceiro ano escolar, o protagonista descobre que um condenado fugiu da prisão dos bruxos e teria relação com a morte de seus pais, e aprende a enfrentar criaturas que se alimentam de alegria. É apontado por críticos e leitores como o melhor da série e marca a passagem do infantil ao juvenil dentro da obra.',
    'J.K. Rowling||Morte Súbita': 'Na pequena cidade inglesa de Pagford, a morte de um vereador desencadeia uma disputa pela vaga que expõe hipocrisia, classismo, dependência química e violência doméstica. Publicado em 2012, é o primeiro romance adulto da autora e marcou deliberadamente sua ruptura com a literatura juvenil.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58c · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58c: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 58d — descrições ao padrão (lote 4) ===== */
(function () {
  var D = {
    'Jack Ma||Alibaba: A Casa que Jack Ma Construiu':
      'Reconstitui a criação do Alibaba, do apartamento em Hangzhou onde a empresa começou à maior oferta pública de ações da história até 2014. Escrito por Duncan Clark, consultor da companhia em seus primeiros anos, é a principal fonte em inglês sobre a formação do comércio eletrônico chinês e sobre um fundador reprovado em concursos e recusado em dezenas de empregos.',
    'Jack Welch||Paixão por Vencer': 'Sistematiza o método de gestão do autor após vinte anos à frente da General Electric: franqueza organizacional, diferenciação de desempenho, contratação e a exigência de liderança de mercado em cada negócio. Publicado em 2005, tornou-se um dos manuais executivos mais vendidos da década e também um dos mais contestados nas décadas seguintes.',
    'Jack Welch||Jack: Definitivo': 'Autobiografia do executivo que dirigiu a General Electric por vinte anos, com relatos sobre reestruturação, avaliação de desempenho, aquisições e a cultura que impôs à empresa. Publicada em 2001, no ano de sua aposentadoria, quando a GE era uma das companhias mais valiosas do mundo e ele, o modelo dominante de executivo americano.',
    'Jane Goodall||Uma Janela para a Vida': 'Relata trinta anos de observação de chimpanzés selvagens em Gombe, na Tanzânia, com descrições de personalidade, laços familiares, guerra entre grupos e uso de ferramentas. A descoberta de que chimpanzés fabricam instrumentos derrubou uma das definições então correntes de ser humano e mudou a pesquisa sobre cognição animal.',
    'Jane Goodall||Razão para Esperança': 'Autobiografia que narra a infância na Inglaterra, os anos em Gombe, a transição da pesquisa ao ativismo e as razões pelas quais a autora mantém esperança. Publicada em 1999, é sua obra mais pessoal e apresenta quatro fundamentos dessa esperança, entre eles a resiliência da natureza e a energia dos jovens.',
    'Jean Piaget||A Epistemologia Genética': 'Expõe o programa do autor: estudar como o conhecimento se constrói, partindo do desenvolvimento da criança para entender a formação das categorias do pensamento. Piaget se descrevia como epistemólogo, e não psicólogo, e via as pesquisas com crianças como método para responder a uma pergunta filosófica.',
    'Jean Piaget||O Nascimento da Inteligência na Criança': 'Descreve os estágios do desenvolvimento da inteligência nos primeiros dois anos de vida, a partir da observação diária dos próprios três filhos do autor. Publicado em 1936, fundou o estudo do desenvolvimento cognitivo como sequência de estágios e é a origem do conceito de permanência do objeto.',
    'Jean-Jacques Rousseau||O Contrato Social': 'Funda a legitimidade política na vontade geral e sustenta que nenhum governo é legítimo sem o consentimento continuado dos governados. Publicado em 1762 e imediatamente proibido e queimado em Paris e em Genebra, deu vocabulário à Revolução Francesa e é um dos textos mais influentes da teoria política moderna.',
    'Jean-Jacques Rousseau||Emílio, ou Da Educação': 'Romance pedagógico que acompanha a formação de um menino conforme a natureza, defendendo que a educação deve respeitar cada fase em vez de antecipar o adulto. Publicado em 1762 e condenado junto com o Contrato Social, inventou a ideia moderna de infância e influenciou Pestalozzi, Froebel, Montessori e Dewey.',
    'Jean-Jacques Rousseau||Confissões': 'Autobiografia que promete contar tudo, inclusive o vergonhoso, e cumpre: furtos, humilhações, os cinco filhos entregues a um orfanato. Publicada postumamente em 1782, inaugurou a escrita íntima moderna e o modelo de autobiografia como exame de si sem disfarce, retomado por toda a literatura confessional posterior.',
    'Jean-Paul Sartre||O Ser e o Nada': 'Tratado de ontologia fenomenológica que distingue o ser das coisas do ser da consciência e sustenta que o ser humano é liberdade, condenado a escolher sem natureza dada que o justifique. Publicado em 1943, na Paris ocupada, é a obra central do existencialismo francês e a fonte dos conceitos de má-fé e angústia.',
    'Jean-Paul Sartre||O Existencialismo é um Humanismo': 'Conferência curta que responde às acusações de que o existencialismo seria pessimista e individualista, e popularizou a fórmula de que a existência precede a essência. Proferida em 1945 diante de plateia lotada, é o texto de entrada mais lido do autor, embora ele próprio tenha depois relativizado suas simplificações.',
    'Jean-Paul Sartre||A Náusea': 'Diário de Antoine Roquentin, que numa cidade portuária começa a sentir mal-estar físico diante da existência bruta das coisas e da ausência de qualquer sentido dado de antemão. Publicado em 1938, é o romance de estreia do autor e a tradução mais concreta do existencialismo em experiência vivida.',
    'Jean-Paul Sartre||As Palavras': 'Autobiografia da infância, dividida entre ler e escrever, que examina com ironia como o menino foi levado a acreditar que sua vida se justificava pela literatura. Publicada em 1964, ano em que o autor recusou o Nobel, é considerada sua obra mais bem escrita e um clássico moderno da desmontagem do próprio mito de origem.',
    'Jean-Paul Sartre||Entre Quatro Paredes': 'Três pessoas mortas são trancadas juntas em uma sala e descobrem que não haverá torturador: cada uma será o suplício das outras, pelo olhar e pelo julgamento. Encenada em 1944, é a peça mais montada do autor, e sua frase final sobre o inferno ser os outros é constantemente citada fora de contexto.',
    'Jeff Bezos||Cartas anuais aos acionistas da Amazon': 'Série iniciada em 1997, no ano da abertura de capital, à qual o autor sempre anexa a carta original. Expõem obsessão pelo cliente, decisões de longo prazo, tolerância a experimentos que falham e a distinção entre decisões reversíveis e irreversíveis. São leitura padrão em estratégia empresarial.',
    'Jeff Bezos||Crie e Divague': 'Reúne as cartas anuais aos acionistas e discursos do fundador da Amazon, com introdução biográfica de Walter Isaacson. Publicado em 2020, organiza em livro os textos que já circulavam dispersos e que formam um dos conjuntos mais consistentes de filosofia corporativa publicados por um fundador.',
    'Jeff Bezos||Amazon': 'Empresa fundada em 1994 como livraria online e transformada em plataforma global de comércio eletrônico, logística, produção de conteúdo e computação em nuvem. Operou com prejuízo deliberado por anos, reinvestindo todo o caixa em crescimento, e mudou o varejo mundial e as expectativas de entrega do consumidor.',
    'Jeff Bezos||Amazon Web Services': 'Divisão de computação em nuvem lançada em 2006, que oferece processamento, armazenamento e infraestrutura sob demanda. Nasceu da necessidade interna de padronizar os próprios sistemas da Amazon e criou o mercado de nuvem, reduzindo drasticamente o custo de iniciar uma empresa de tecnologia.',
    'Jeff Bezos||Blue Origin': 'Empresa aeroespacial fundada em 2000 com o objetivo de reduzir o custo de acesso ao espaço por meio de foguetes reutilizáveis. O New Shepard realizou pouso vertical bem-sucedido em 2015 e o primeiro voo tripulado em 2021, com o próprio fundador a bordo. Seu lema, gradatim ferociter, remete à fábula da tartaruga.',
    'Jesse Owens||Quatro ouros em Berlim 1936': 'Conquista de quatro medalhas de ouro — 100 m, 200 m, salto em distância e revezamento — nos Jogos que o regime nazista organizou como demonstração de superioridade racial. De volta aos Estados Unidos, Owens continuou sujeito à segregação: não foi recebido na Casa Branca e usava elevadores de serviço em hotéis onde era festejado.',
    'Jesus Cristo||Sermão da Montanha': 'Reúne em Mateus 5 a 7 as bem-aventuranças, as reformulações da lei, a oração do Pai Nosso e a regra de ouro. É o núcleo ético dos Evangelhos e um dos textos mais lidos e mais citados de toda a literatura ocidental, referência explícita para Tolstói, Gandhi e Martin Luther King Jr.',
    'Jesus Cristo||Parábolas': 'Histórias curtas de uso cotidiano — o bom samaritano, o filho pródigo, o semeador, o joio e o trigo — que ensinam por imagem em vez de doutrina. Tiradas da vida rural e comercial da Galileia, tornaram-se parte do repertório narrativo ocidental e são estudadas tanto em teologia quanto em teoria literária.',
    'Jim Collins||Empresas Feitas para Vencer': 'Cinco anos de pesquisa comparando empresas que passaram de boas a excelentes com concorrentes que não deram esse salto. Introduziu a liderança de nível 5, o conceito do ouriço e a imagem do volante que ganha impulso. Publicado em 2001, é um dos livros de gestão mais vendidos e mais citados de todos os tempos.',
    'Jim Collins||Feitas para Durar': 'Estuda empresas visionárias com mais de meio século de existência e conclui que o que as distingue não é um produto ou um líder carismático, mas uma ideologia central preservada junto com a disposição de mudar tudo o mais. Escrito com Jerry Porras, é o livro que fundou a linha de pesquisa do autor.',
    'Jim Collins||Como as Gigantes Caem': 'Descreve cinco estágios do declínio de empresas bem-sucedidas, da arrogância nascida do sucesso à busca desesperada por salvação, e mostra em que ponto a queda ainda é reversível. Publicado em 2009, logo após a crise financeira, aponta que o declínio costuma começar quando os resultados ainda são excelentes.',
    'Jim Collins||Vencedoras por Opção': 'Examina empresas que prosperaram em ambientes de extrema incerteza e identifica práticas comuns, como avanço disciplinado em ritmo constante e experimentação de baixo custo antes de apostas grandes. Introduziu a marcha das vinte milhas e o tiro de bala antes da bala de canhão, hoje correntes em gestão de risco.',
    'Johann Wolfgang von Goethe||Fausto': 'O sábio que já sabe tudo e nada sente aposta a alma com Mefistófeles pela experiência plena da vida. Trabalhado por quase sessenta anos, com a primeira parte publicada em 1808 e a segunda concluída meses antes da morte do autor, é o texto central da literatura alemã e uma das obras mais reinterpretadas do Ocidente.',
    'Johann Wolfgang von Goethe||Os Sofrimentos do Jovem Werther': 'Romance epistolar sobre um jovem que se apaixona por uma mulher comprometida e não suporta a recusa. Publicado em 1774, tornou Goethe célebre aos 25 anos e provocou onda de imitação no vestuário e no comportamento em toda a Europa, além de uma controvérsia sobre suicídio que persegue o livro até hoje.',
    'Johann Wolfgang von Goethe||Máximas e Reflexões': 'Reúne mais de mil aforismos sobre arte, natureza, ciência, conduta e conhecimento, recolhidos de cadernos e papéis avulsos e publicados após a morte do autor. Mostram o Goethe observador e cientista ao lado do poeta, e são uma das principais fontes das frases que circulam com seu nome.',
    'John Bogle||O Pequeno Livro do Investimento de Bom Senso': 'Defende o fundo de índice de baixo custo contra a gestão ativa, mostrando com dados que taxas e giro consomem a maior parte do retorno de longo prazo. Escrito por quem criou o primeiro fundo de índice para o investidor comum, em 1976, é um dos livros de finanças pessoais mais influentes já publicados.',
    'John Bogle||Bogle on Mutual Funds': 'Explica em detalhe o funcionamento dos fundos de investimento e demonstra por que os custos corroem o retorno mais do que quase qualquer outro fator, inclusive a habilidade do gestor. Publicado em 1993, antecipou em duas décadas a migração em massa de investidores para produtos passivos de baixo custo.',
    'John C. Maxwell||Desenvolvendo o Líder Dentro de Você': 'Sustenta que liderança é influência construída, e não cargo recebido, e apresenta princípios sobre prioridades, integridade e formação de outros líderes. Publicado em 1993 a partir de décadas de trabalho do autor com equipes, é a base de uma obra que soma dezenas de títulos e milhões de exemplares.',
    'John C. Maxwell||Vencendo com as Pessoas': 'Reúne vinte e cinco princípios de relacionamento organizados em torno de cinco perguntas que as pessoas fazem ao se vincular a alguém: prontidão, conexão, confiança, investimento e sinergia. Complementa a obra do autor sobre liderança tratando da dimensão interpessoal, e é usado em programas de desenvolvimento de equipes.',
    'John C. Maxwell||Às Vezes Se Ganha, Às Vezes Se Aprende': 'Trata a perda como matéria-prima e apresenta onze elementos que transformam um revés em crescimento, entre eles humildade, realidade e responsabilidade. Escrito a partir de erros da própria carreira do autor, critica a ideia de que a experiência ensina por si: segundo ele, só a experiência avaliada ensina.',
    'John D. Rockefeller||Random Reminiscences of Men and Events':
      'Memórias em tom deliberadamente sereno sobre os primeiros empregos, a fundação da Standard Oil e a prática de doação que o autor mantinha desde o primeiro salário. Publicadas em 1909, quando a empresa enfrentava o processo antitruste, não respondem a nenhuma das acusações de Ida Tarbell — silêncio que é uma de suas características mais notadas.',
    'John Dewey||Democracia e Educação': 'Sustenta que educação e democracia são inseparáveis: uma sociedade democrática exige cidadãos capazes de pensar e cooperar, e isso só se aprende fazendo. Publicado em 1916, é a obra central da pedagogia progressista e influenciou reformas em todo o mundo, inclusive a Escola Nova brasileira, por Anísio Teixeira.',
    'John Dewey||Experiência e Educação': 'Livro curto em que o autor critica tanto a escola tradicional quanto os excessos de seus próprios seguidores, e define o que distingue uma experiência educativa de uma experiência qualquer. Publicado em 1938, quando Dewey tinha quase oitenta anos, insiste que nem toda experiência educa: algumas fecham possibilidades futuras.',
    'John Locke||Segundo Tratado sobre o Governo Civil': 'Funda a legitimidade do governo no consentimento dos governados, define os direitos naturais à vida, à liberdade e à propriedade e admite o direito de resistência ao poder que os viola. Publicado anonimamente em 1689, é o texto fundador do liberalismo político e foi citado quase literalmente na Declaração de Independência americana.',
    'John Maynard Keynes||Teoria Geral do Emprego, do Juro e da Moeda': 'Argumenta que uma economia pode permanecer em equilíbrio com desemprego alto porque a demanda agregada é insuficiente, e defende a intervenção do Estado para sustentá-la. Publicada em 1936, no meio da Grande Depressão, refundou a macroeconomia e continua sendo referência central em toda crise econômica desde então.',
    'John Maynard Keynes||As Consequências Econômicas da Paz': 'Critica o Tratado de Versalhes, sustentando que as reparações impostas à Alemanha eram impossíveis de pagar e politicamente desastrosas. Publicado em 1919 por quem havia deixado a delegação britânica em protesto, tornou o autor mundialmente conhecido e é citado como uma das previsões econômicas mais acertadas do século.',
    'John Stuart Mill||Sobre a Liberdade': 'Defende que o único motivo legítimo para limitar a liberdade de alguém é impedir dano a terceiros, e que mesmo a opinião falsa precisa circular para que a verdadeira não vire dogma morto. Publicado em 1859 e escrito com Harriet Taylor, é o texto fundador do liberalismo político e referência permanente em liberdade de expressão.',
    'John Stuart Mill||Utilitarismo': 'Reformula a doutrina da maior felicidade herdada de Bentham, distinguindo prazeres superiores de inferiores e sustentando que a qualidade da experiência importa tanto quanto a quantidade. Publicado em 1863, é a exposição clássica do utilitarismo e o ponto de partida de todo debate posterior sobre ética consequencialista.',
    'John Wooden||Wooden on Leadership': 'Sistematiza a filosofia do treinador que ganhou dez títulos universitários americanos em doze anos, com a pirâmide do sucesso e os princípios de preparação, disciplina e atenção ao detalhe. Publicado em 2005, é adotado em formação de treinadores, escolas e empresas muito além do esporte.',
    'John Wooden||A Pirâmide do Sucesso': 'Apresenta os quinze blocos que o autor levou catorze anos para montar, da laboriosidade e do entusiasmo na base à competitividade plena no topo, e define sucesso como a paz de saber que se fez o melhor possível. A definição não menciona vitória nem placar — omissão deliberada do técnico mais vitorioso de sua modalidade.',
    'John Wooden||Dez títulos da NCAA': 'Dez campeonatos nacionais universitários de basquete em doze anos à frente da UCLA, sete deles consecutivos, além de uma sequência de oitenta e oito vitórias seguidas. São números nunca igualados no esporte universitário americano e a base da reputação do treinador como formador de pessoas antes de atletas.',
    'Kahlil Gibran||Areia e Espuma': 'Reúne aforismos curtos sobre amor, solidão, verdade e contradição, escritos originalmente em inglês e na mesma chave de O Profeta. Publicado em 1926, é a obra mais fragmentária do autor e uma das principais fontes das frases que circulam com seu nome em redes sociais e coletâneas.',
    'Kahlil Gibran||O Louco': 'Primeiro livro do autor em inglês, reúne parábolas curtas e amargas sobre máscaras sociais, hipocrisia e a liberdade paradoxal de quem é tido por louco. Publicado em 1918, antecede O Profeta em cinco anos e mostra um Gibran mais irônico do que a imagem consolidada depois.',
    'Karl Marx||Manifesto Comunista (com Engels)': 'Apresenta a história como história da luta de classes, analisa o papel revolucionário da burguesia e conclama os trabalhadores de todos os países à união. Publicado em fevereiro de 1848, semanas antes da onda revolucionária europeia, é um dos textos políticos mais influentes já escritos e está traduzido em quase todos os idiomas.',
    'Karl Marx||Manuscritos Econômico-Filosóficos': 'Cadernos escritos em Paris aos 26 anos, em que o autor analisa o trabalho alienado: o trabalhador torna-se estranho ao produto, à atividade, aos outros e a si mesmo. Publicados apenas em 1932, quase noventa anos depois, provocaram uma reinterpretação do marxismo a partir do conceito de alienação.',
    'Karl Marx||O 18 de Brumário de Luís Bonaparte': 'Analisa o golpe de Estado de 1851 na França, explicando como um sobrinho medíocre de Napoleão chegou ao poder com apoio de classes de interesses contraditórios. Escrito no calor dos acontecimentos, é considerado o melhor texto de análise política do autor e modelo de análise de conjuntura.',
    'Katherine Johnson||Cálculos de trajetória orbital da NASA': 'Cálculos manuais de trajetória para os primeiros voos espaciais americanos, incluindo janela de lançamento e ponto de reentrada das cápsulas Mercury e da Apollo 11. Antes de seu voo orbital em 1962, John Glenn pediu que ela verificasse à mão os números do computador eletrônico, no qual ninguém confiava plenamente.',
    'Kofi Annan||Intervenções: Uma Vida na Guerra e na Paz': 'Memórias do secretário-geral da ONU entre 1997 e 2006, sobre Ruanda, Srebrenica, o Iraque e as escolhas impossíveis da organização. Annan assumiu publicamente parte da responsabilidade pelos fracassos dos anos 1990 e encomendou investigações independentes sobre eles — decisão incomum para um dirigente internacional.',
    'Krishna||Bhagavad Gita': 'Setecentos versos de diálogo entre Arjuna e Krishna às vésperas de uma batalha, sobre dever, ação sem apego ao fruto e as vias do conhecimento, da devoção e da ação. Episódio do Mahabharata que se tornou texto autônomo, é o mais lido da tradição hindu e influenciou Thoreau, Emerson, Gandhi e Oppenheimer.',
    'Krishna||Mahabharata': 'Épico indiano de cerca de cem mil versos que narra a guerra entre duas famílias aparentadas e reúne genealogias, mitos e tratados de conduta, além da Bhagavad Gita. É o poema épico mais longo do mundo, cerca de dez vezes a Ilíada e a Odisseia somadas, e um dos fundamentos da cultura indiana.',
    'Leonardo da Vinci||Mona Lisa': 'Retrato de uma mulher sentada diante de paisagem enevoada, com transições de tom tão suaves que os contornos parecem dissolver-se. Leonardo o levou consigo à França e nunca o entregou ao encomendante. É a pintura mais conhecida do mundo, e sua fama cresceu enormemente após o roubo de 1911, que a manteve desaparecida por dois anos.',
    'Leonardo da Vinci||A Última Ceia': 'Mural que retrata o instante em que Cristo anuncia a traição, com os doze apóstolos reagindo em grupos de três e a perspectiva convergindo sobre sua figura. Pintado entre 1495 e 1498 com técnica experimental sobre parede seca, começou a se deteriorar ainda em vida do autor e passou por restaurações sucessivas.',
    'Leonardo da Vinci||Cadernos (Códices)': 'Milhares de folhas com anotações e desenhos em escrita espelhada sobre anatomia, hidráulica, mecânica, voo, ótica e botânica, produzidos ao longo de toda a vida e nunca organizados para publicação. Dispersos após sua morte, antecipam em desenho problemas de engenharia e anatomia resolvidos séculos depois.',
    'Leonardo da Vinci||Homem Vitruviano': 'Desenho de uma figura masculina inscrita simultaneamente em um círculo e em um quadrado, a partir das proporções descritas pelo arquiteto romano Vitrúvio. Leonardo resolveu por volta de 1490 um problema que nenhum desenhista anterior conseguira, deslocando o centro das duas figuras; tornou-se imagem-símbolo do humanismo renascentista.',
    'Liev Tolstói||Confissão': 'Relato da crise que levou o autor, aos cinquenta anos, célebre e rico, a considerar o suicídio por não encontrar sentido na vida, e da saída que buscou na fé simples dos camponeses. Proibido pela censura russa, levou-o a romper com a Igreja Ortodoxa, que o excomungou, e influenciou Gandhi e Wittgenstein.',
    'Lima Barreto||Recordações do Escrivão Isaías Caminha':
      'Um jovem negro de talento sai do interior para estudar no Rio, fracassa diante de barreiras raciais e sociais e acaba em um jornal, onde observa a fabricação da opinião pública. Publicado em 1909 em Portugal, porque nenhum editor brasileiro quis assumir a crítica à imprensa, é um dos primeiros romances brasileiros a tratar o racismo como obstáculo objetivo.',
    'Lima Barreto||Diário do Hospício':
      'Anotações feitas durante a internação do autor no Hospital Nacional de Alienados, sobre os outros internos, os tratamentos e a própria condição. Escrito em 1919 e publicado décadas após sua morte, é um dos raros testemunhos em primeira pessoa sobre o interior de um manicômio brasileiro e registra a distinção brutal entre o tratamento de internos pobres e ricos.',
    'Lise Meitner||Interpretação da fissão nuclear':
      'Explicação teórica de que o núcleo de urânio bombardeado com nêutrons se divide em dois núcleos menores liberando enorme energia, com o cálculo dessa energia. Formulada no exílio com Otto Frisch, que batizou o fenômeno de fissão. O Nobel de Química de 1944 foi concedido apenas a Otto Hahn, omissão apontada como uma das mais graves da história do prêmio.',
    'Ludwig van Beethoven||Sinfonia nº 9': 'Sinfonia cujo final introduz coro e solistas cantando a Ode à Alegria, de Schiller, a primeira vez que vozes humanas entram em uma sinfonia de grande porte. Estreada em 1824, quando o compositor estava completamente surdo e precisou ser virado para ver os aplausos, tem seu tema principal como hino oficial da União Europeia.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58d · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58d: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 58e — descrições ao padrão (lote 5) ===== */
(function () {
  var D = {
    'Ludwig van Beethoven||Sinfonia nº 5': 'Construída a partir de um motivo rítmico de quatro notas que reaparece transformado ao longo dos quatro movimentos, em trajetória do dó menor ao dó maior. Estreada em 1808, quando o compositor já perdia a audição, é provavelmente a obra sinfônica mais reconhecível do mundo e modelo de construção temática unificada.',
    'Ludwig van Beethoven||Sonata ao Luar': 'Sonata em três movimentos cujo primeiro, lento e contínuo, rompe com a convenção de abrir com movimento rápido, e cujo final é de grande violência técnica. Composta em 1801, quando o autor começava a perceber a surdez, recebeu o apelido de um crítico alemão anos após sua morte — o subtítulo original é quase uma fantasia.',
    'Ludwig van Beethoven||Testamento de Heiligenstadt': 'Carta dirigida aos irmãos e nunca enviada, em que o compositor revela a surdez que escondia, descreve o isolamento que ela lhe causava e explica por que não tirou a própria vida: não suportaria deixar o mundo antes de produzir o que sentia dever produzir. Foi encontrada entre seus papéis apenas após sua morte, em 1827.',
    'Luís de Camões||Sonetos': 'Reúne os sonetos amorosos e reflexivos do poeta, sobre o desconcerto do mundo, a mudança, a ausência e a contradição da experiência amorosa. Publicados postumamente a partir de 1595, quinze anos depois de sua morte na pobreza, são o ponto mais alto da lírica em língua portuguesa e a referência da forma para toda a tradição posterior.',
    'Luiza Trajano||Magazine Luiza: a trajetória (relatos e entrevistas)': 'Conjunto de relatos e entrevistas sobre a construção do Magazine Luiza, da loja de interior em Franca à maior varejista digital do Brasil. Documenta a criação das lojas virtuais em 1992, muito antes do resto do setor, e a cultura de promoção interna que se tornou caso de estudo em gestão de pessoas no varejo brasileiro.',
    'Machado de Assis||Contos (A Cartomante, Missa do Galo, O Alienista)':
      'Reúne narrativas curtas em que o autor examina ciúme, autoengano, ambiguidade do desejo e a fronteira entre razão e loucura, sempre com ironia e sem julgamento explícito. São o ponto mais alto do conto em língua portuguesa, e O Alienista, em que o médico acaba internando a si mesmo, antecipou debates inteiros sobre normalidade e poder.',
    'Madre Teresa de Calcutá||Missionárias da Caridade': 'Congregação fundada em Calcutá em 1950 para cuidar dos mais pobres — moribundos, leprosos, órfãos, pessoas em situação de rua —, com um quarto voto de serviço gratuito além dos três tradicionais. Expandiu-se para mais de cem países e tornou-se a organização católica de assistência mais conhecida do mundo.',
    'Madre Teresa de Calcutá||Venha, Seja Minha Luz': 'Reúne cartas privadas da religiosa a seus diretores espirituais, em que relata décadas de escuridão interior e ausência sentida de Deus enquanto mantinha o trabalho com os moribundos. Publicado em 2007, durante o processo de canonização e contra o pedido dela de que fossem destruídas, alterou profundamente sua imagem pública.',
    'Madre Teresa de Calcutá||Nobel da Paz': 'Prêmio concedido em 1979 pelo trabalho da religiosa e de sua congregação com os mais pobres em Calcutá e em dezenas de outros países. Ela recusou o banquete oficial e pediu que o valor fosse destinado aos pobres, recebendo o prêmio explicitamente em nome dos famintos e das pessoas em situação de rua.',
    'Mahatma Gandhi||Minha Vida e Minhas Experiências com a Verdade':
      'Autobiografia escrita em capítulos semanais para um jornal, franca sobre erros, medos e experimentos de dieta, celibato e desobediência. Cobre a infância na Índia, os anos na África do Sul e a construção da satyagraha, e é a principal fonte em primeira pessoa sobre a formação do método que ele levaria à luta pela independência.',
    'Malcolm X||Autobiografia de Malcolm X': 'Narra a infância marcada pela morte do pai, os anos de crime, a conversão na prisão, a ascensão na Nação do Islã, a ruptura e a peregrinação a Meca. Construída por Alex Haley a partir de mais de cinquenta entrevistas e publicada meses após o assassinato do autor, é um dos livros de não ficção mais influentes dos Estados Unidos.',
    'Malcolm X||O Voto ou a Bala': 'Discurso que apresenta uma escolha ao Estado americano: garantir de fato o direito de voto e os direitos civis, ou enfrentar as consequências da recusa. Proferido em 1964, logo após o rompimento do autor com a Nação do Islã, é um dos discursos mais estudados da retórica política americana — e defende o voto como primeira alternativa.',
    'Manuel Bandeira||Estrela da Manhã': 'Livro de poemas que alterna humor, erotismo, memória e morte, com experimentação formal mais livre que a dos volumes anteriores. Publicado em 1936 com tiragem pequena impressa em Barcelona por iniciativa de amigos, é o mais experimental de Bandeira e contém alguns de seus poemas mais lembrados sobre desejo e perda.',
    'Manuel Bandeira||Itinerário de Pasárgada': 'Memórias literárias em que o poeta conta como cada um de seus livros nasceu, o efeito da tuberculose sobre sua vida e sua formação como leitor. Publicado em 1954, é fonte central para o estudo de sua obra e revela que a palavra Pasárgada ficou guardada em sua memória por vinte anos antes de virar poema.',
    'Mao Tsé-Tung||O Livro Vermelho': 'Coletânea de citações curtas do líder chinês sobre partido, guerra popular, trabalho e revolução, organizadas por tema. Compilada em 1964 para o exército e distribuída em massa durante a Revolução Cultural, tornou-se objeto de porte obrigatório na China e um dos livros mais impressos da história, com bilhões de exemplares.',
    'Mao Tsé-Tung||Sobre a Guerra Prolongada': 'Conferências de 1938 que analisam a guerra contra o Japão em três etapas — defesa, impasse e contraofensiva — e defendem que a vitória virá do tempo e da mobilização popular, não de batalhas decisivas. É um dos textos militares mais influentes do século XX e referência em guerra assimétrica em todos os continentes.',
    'Maria Callas||Norma (Bellini)': 'Interpretação da sacerdotisa druida dividida entre dever religioso, amor por um inimigo e maternidade, papel que exige simultaneamente agilidade de coloratura e peso dramático. Callas o cantou dezenas de vezes entre 1948 e 1965 e sua atuação foi decisiva para a redescoberta do bel canto, que havia caído em desuso.',
    'Maria Callas||Tosca (Puccini)': 'Interpretação da cantora que enfrenta o chefe de polícia Scarpia para salvar o amante preso, na Roma de 1800. Callas gravou o papel em 1953 sob regência de Victor de Sabata, registro apontado com frequência como uma das melhores gravações de ópera já realizadas, e a montagem de 1964 é estudada pela integração entre canto e atuação.',
    'Maria Montessori||O Método Montessori': 'Apresenta o método desenvolvido na Casa dei Bambini: ambiente preparado à escala da criança, materiais concretos e autocorretivos, liberdade de escolha e um adulto que observa em vez de dirigir. Publicado em 1909, difundiu mundialmente uma pedagogia hoje adotada em milhares de escolas e introduziu o mobiliário infantil, hoje padrão.',
    'Maria Montessori||A Mente Absorvente da Criança': 'Descreve a capacidade da criança pequena de absorver o ambiente inteiro sem esforço consciente nos primeiros anos de vida, e o que isso exige do adulto e do espaço. Publicado em 1949 a partir de conferências dadas na Índia, onde a autora ficou retida durante a guerra, é a exposição mais madura de seu método.',
    'Marie Curie||Tratado de Radioatividade': 'Obra em dois volumes que sistematiza o conhecimento então disponível sobre radioatividade: métodos de medida, propriedades dos elementos e técnicas de isolamento. Publicado em 1910, já viúva e dirigindo sozinha o laboratório, foi o texto de referência da área por décadas — e os cadernos da autora permanecem radioativos até hoje.',
    'Marie Curie||Pierre Curie': 'Biografia do marido escrita pela autora, com relato do trabalho conjunto sobre radioatividade, da descoberta do polônio e do rádio e das condições precárias em que trabalhavam. Publicada em 1923, descreve o galpão sem aquecimento onde processaram toneladas de minério para isolar frações de grama de rádio.',
    'Marielle Franco||UPP: a redução da favela a três letras': 'Dissertação de mestrado que analisa a política de Unidades de Polícia Pacificadora no Rio de Janeiro e questiona a lógica de segurança que a orienta e seus efeitos sobre os moradores. Defendida em 2014 por uma moradora da Maré que se elegeria vereadora dois anos depois, é referência em estudos sobre segurança pública e favelas.',
    'Mário Quintana||A Rua dos Cataventos': 'Livro de estreia, publicado quando o autor tinha 34 anos, reúne sonetos sobre infância, tempo e cotidiano com a leveza e a ironia melancólica que o tornariam um dos poetas mais populares do Brasil. Fixa desde o início a forma curta que seria sua marca e que o tornaria também um dos mais citados — e mais mal atribuídos — do país.',
    'Mário Quintana||Caderno H': 'Reúne fragmentos, aforismos e poemas curtos sobre tempo, morte, poesia e o absurdo do cotidiano, em registro entre a crônica e o verso. Publicado em 1973, é o livro que mais circula do autor fora das livrarias, em murais e redes sociais, e por isso mesmo o mais exposto a atribuições falsas.',
    'Mário Quintana||Nova Antologia Poética': 'Seleção de poemas de toda a obra do autor, preparada por ele mesmo, com textos curtos e aforísticos sobre tempo, infância, morte e o ofício de escrever. Publicada em 1981, é a principal porta de entrada à sua poesia e também um documento sobre como o próprio poeta lia a própria trajetória.',
    'Mark Twain||Um Ianque na Corte do Rei Artur': 'Um mecânico americano do século XIX acorda na Inglaterra do século VI e tenta industrializar o reino de Artur, com resultados que terminam em catástrofe. Publicado em 1889 como sátira ao medievalismo romântico, virou crítica à própria confiança no progresso e antecipou temas centrais da ficção científica.',
    'Marshall McLuhan||Os Meios de Comunicação como Extensões do Homem': 'Sustenta que cada meio é uma extensão de um sentido humano e que sua forma, mais do que seu conteúdo, é o que transforma a sociedade — daí a fórmula de que o meio é a mensagem. Publicado em 1964, fundou os estudos de mídia e antecipou em décadas boa parte do debate sobre a era digital.',
    'Marshall McLuhan||A Galáxia de Gutenberg': 'Sustenta que a imprensa de tipos móveis reorganizou a percepção humana, privilegiando a visão e produzindo o indivíduo linear, privado e uniforme da modernidade. Publicado em 1962, introduz a expressão aldeia global e é escrito em mosaico de fragmentos, forma que imita a percepção não sequencial que descreve.',
    'Marshall McLuhan||A Noiva Mecânica': 'Analisa anúncios publicitários, quadrinhos e capas de revista da cultura americana dos anos 1940 como objetos culturais dignos de estudo sério. Publicado em 1951, é um dos textos pioneiros dos estudos culturais e da análise crítica da publicidade, antecipando métodos que só se tornariam padrão décadas depois.',
    'Marshall Rosenberg||Comunicação Não Violenta': 'Apresenta um método em quatro passos — observar sem avaliar, identificar sentimentos, reconhecer necessidades e formular pedidos claros — para resolver conflitos sem julgamento nem coerção. Publicado em 1999 a partir de décadas de mediação em escolas, prisões e zonas de guerra, é referência mundial em resolução de conflitos.',
    'Marshall Rosenberg||Vivendo a Comunicação Não Violenta': 'Reúne aplicações práticas do método em situações concretas — conflitos familiares, sala de aula, ambiente de trabalho e a relação consigo mesmo —, com diálogos transcritos que mostram a técnica em funcionamento. Complementa a obra principal e ampliou o alcance do método em mediação escolar e organizacional.',
    'Marshall Rosenberg||Center for Nonviolent Communication': 'Organização internacional fundada em 1984 para formar facilitadores e difundir a comunicação não violenta em escolas, prisões, empresas e zonas de conflito. A formação de certificadores em dezenas de países levou o método a contextos de violência aberta, entre eles Ruanda, a Sérvia e o Oriente Médio.',
    'Martin Luther King Jr.||Eu Tenho um Sonho': 'Discurso proferido em 1963 diante de mais de duzentas mil pessoas na Marcha sobre Washington, em defesa dos direitos civis e do fim da segregação. A parte mais famosa foi improvisada depois que a cantora Mahalia Jackson gritou da plateia para que ele falasse do sonho, e é uma das falas mais reconhecidas da história.',
    'Martin Luther King Jr.||Carta da Prisão de Birmingham': 'Resposta a oito clérigos brancos que criticavam as manifestações e pediam paciência aos negros, escrita nas margens de um jornal e em papel higiênico dentro da cela. Proferida em 1963, é um dos textos centrais sobre desobediência civil e sobre a diferença entre leis justas e injustas.',
    'Martin Luther King Jr.||A Força de Amar': 'Reúne sermões sobre amor, poder, medo e não violência, pregados ao longo dos anos de maior intensidade do movimento por direitos civis. Publicado em 1963, mostra a base teológica de sua ação política e a influência de Gandhi, de Thoreau e do teólogo Reinhold Niebuhr sobre seu pensamento.',
    'Martin Seligman||Felicidade Autêntica': 'Apresenta o programa da psicologia positiva, campo que o autor fundou ao presidir a associação americana de psicologia, deslocando o foco da doença mental para as forças de caráter e o florescimento humano. Publicado em 2002, popularizou a ideia de que o bem-estar pode ser estudado com o mesmo rigor dado aos transtornos.',
    'Martin Seligman||Aprenda a Ser Otimista': 'Distingue estilos explicativos pessimistas e otimistas — como cada pessoa explica a si mesma o que lhe acontece de ruim — e apresenta técnicas para modificá-los, medindo permanência, abrangência e personalização. Publicado em 1990, preparou o terreno para a psicologia positiva que o autor fundaria oito anos depois.',
    'Martinho Lutero||95 Teses': 'Lista de proposições para debate acadêmico que contesta a venda de indulgências e questiona a autoridade do papa sobre o perdão dos pecados. Divulgadas em 1517 em latim e rapidamente traduzidas e impressas em alemão, tornaram-se o marco inicial da Reforma, que dividiria a cristandade ocidental.',
    'Martinho Lutero||Tradução da Bíblia para o alemão': 'Tradução completa feita a partir dos originais hebraico e grego, em linguagem falada pelo povo. O Novo Testamento foi traduzido em cerca de onze semanas enquanto o autor estava escondido no castelo de Wartburg, fora da lei. Padronizou o alemão escrito e é apontada como base da língua literária alemã moderna.',
    'Mary Wollstonecraft||Reivindicação dos Direitos da Mulher': 'Argumenta que a aparente inferioridade feminina resulta da educação negada, e não da natureza, e defende instrução igual para meninas e meninos. Publicado em 1792, em plena Revolução Francesa, é o texto fundador do feminismo moderno e antecedeu em mais de um século a conquista do voto feminino.',
    'Mary Wollstonecraft||Reivindicação dos Direitos do Homem': 'Resposta rápida e contundente às Reflexões sobre a Revolução na França, de Edmund Burke, defendendo os princípios revolucionários e atacando a hereditariedade de privilégios. Publicada em 1790, poucas semanas após o texto de Burke, estabeleceu a autora como voz política reconhecida.',
    'Mary Wollstonecraft||Cartas Escritas na Suécia, Noruega e Dinamarca': 'Cartas de viagem que combinam observação de paisagens, costumes e economia escandinavos com reflexão sobre solidão, maternidade e desilusão amorosa. Escritas durante uma viagem de negócios que a autora empreendeu sozinha com a filha pequena, são apontadas como precursoras da escrita romântica de viagem.',
    'Maya Angelou||E Ainda Assim Eu Me Levanto': 'Livro de poemas sobre dignidade e resistência, cujo poema-título afirma a recusa em ser abatida por opressão, desprezo ou história. Publicado em 1978, tornou-se um dos poemas mais recitados da língua inglesa, lido em funerais, protestos e cerimônias — Nelson Mandela o recitou em sua posse como presidente, em 1994.',
    'Maya Angelou||Carta à Minha Filha': 'Reúne ensaios curtos endereçados às mulheres que a autora considerava filhas sem o serem, sobre maternidade, perda, identidade, fé e generosidade. Publicado em 2008, quando ela tinha oitenta anos, é um dos livros mais pessoais de sua obra tardia e circula amplamente como literatura de conselho.',
    'Melinda French Gates||O Momento de Voar': 'Reúne relatos de encontros com mulheres em países pobres e defende que investir em saúde, contracepção, educação e autonomia econômica feminina é o caminho mais eficaz de desenvolvimento. Publicado em 2019, após duas décadas à frente da maior fundação filantrópica privada do mundo, trata também da renegociação de seu próprio papel.',
    'Michael Jordan||Eu Não Posso Aceitar Não Tentar': 'Livro curto com reflexões do jogador sobre disciplina, fracasso, medo e treino, acompanhado de fotografias. Publicado em 1994, no ano em que ele se afastou do basquete após o assassinato do pai, é a fonte do trecho sobre arremessos errados e jogos perdidos, um dos textos motivacionais mais reproduzidos do mundo.',
    'Michael Porter||Estratégia Competitiva': 'Apresenta o modelo das cinco forças — rivalidade, novos entrantes, substitutos, poder de fornecedores e de compradores — e as estratégias genéricas de custo, diferenciação e foco. Publicado em 1980, transformou a estratégia empresarial em disciplina analítica e é um dos livros de gestão mais citados da história.',
    'Michael Porter||Vantagem Competitiva': 'Introduz a cadeia de valor como ferramenta para decompor as atividades de uma empresa e descobrir onde ela de fato cria margem. Publicado em 1985 como continuação de Estratégia Competitiva, deu ao gestor um instrumento prático de diagnóstico e continua sendo adotado em cursos e consultorias em todo o mundo.',
    'Michael Porter||A Vantagem Competitiva das Nações': 'Investiga por que certos países se tornam líderes mundiais em determinados setores e propõe o modelo do diamante: condições de fatores, demanda interna exigente, setores correlatos e rivalidade doméstica. Publicado em 1990, introduziu a noção de clusters, hoje corrente em planejamento econômico regional.',
    'Michael Porter||Redefinindo a Saúde': 'Propõe reorganizar sistemas de saúde em torno do valor entregue ao paciente — resultados obtidos por custo — e não do volume de procedimentos realizados. Publicado em 2006 com Elizabeth Teisberg, deu origem ao movimento de saúde baseada em valor, adotado por sistemas públicos e privados em vários países.',
    'Michel Foucault||História da Loucura': 'Reconstitui como a loucura deixou de ser experiência presente na vida comum para se tornar doença mental, por meio do internamento e da constituição de um saber médico sobre ela. Publicada em 1961 como tese de doutorado, é a obra que inaugura o método do autor e fundamenta a crítica ao manicômio em vários países.',
    'Michel Foucault||História da Sexualidade': 'Contesta a ideia de que a modernidade reprimiu o sexo e sustenta o contrário: produziu um discurso incessante sobre ele, por meio do qual se exerce poder sobre corpos e populações. O primeiro volume saiu em 1976 e introduziu os conceitos de biopoder e biopolítica, fundadores dos estudos de gênero e governamentalidade.',
    'Michelangelo||Teto da Capela Sistina': 'Afresco que cobre mais de quinhentos metros quadrados com cenas do Gênesis, profetas e sibilas, entre elas a criação de Adão. Pintado entre 1508 e 1512 por um artista que se considerava escultor e aceitou a encomenda a contragosto, trabalhando com a cabeça inclinada para trás em andaimes durante quatro anos.',
    'Michelangelo||Davi': 'Escultura em mármore de mais de cinco metros que retrata o jovem Davi no instante anterior ao combate, tenso e concentrado. Esculpida entre 1501 e 1504 em um bloco abandonado havia décadas e considerado inutilizável, rompe com a tradição de representar Davi já vitorioso e tornou-se símbolo cívico de Florença.',
    'Michelangelo||Pietà': 'Escultura em mármore que representa Maria segurando o corpo de Cristo recém-descido da cruz, com serenidade e ausência de dramatização. Concluída em 1499, quando o autor tinha menos de 25 anos, é a única obra que ele assinou — teria gravado seu nome após ouvir a autoria atribuída a outro escultor.',
    'Michelle Obama||Minha História': 'Autobiografia que vai da infância no South Side de Chicago à formação em Princeton e Harvard, à carreira jurídica e aos oito anos na Casa Branca como primeira-dama. Publicada em 2018, vendeu milhões de exemplares em poucas semanas e é um dos livros de memórias mais vendidos da história.',
    'Michelle Obama||A Luz que Há em Nós': 'Reúne reflexões sobre como lidar com medo, mudança, invisibilidade e diferença, a partir de experiências pessoais e de conversas com leitores. Publicado em 2022, após a pandemia e em momento de forte ansiedade coletiva, desloca o foco da narrativa biográfica para ferramentas práticas.',
    'Miguel de Cervantes||Novelas Exemplares': 'Doze narrativas curtas que atravessam registros muito diferentes: picaresca, romance idealizado, retrato de ciganos e um diálogo filosófico entre dois cães que ganham fala por uma noite. Publicadas em 1613, são consideradas a fundação da novela curta em língua espanhola e influenciaram toda a tradição posterior do gênero.',
    'Milton Friedman||Livre para Escolher': 'Defende que a liberdade econômica é condição da liberdade política e argumenta contra regulação, tarifas e programas estatais, propondo alternativas de mercado. Publicado em 1980 com Rose Friedman e acompanhado de série de televisão, foi o livro de não ficção mais vendido dos Estados Unidos naquele ano.',
    'Montesquieu||O Espírito das Leis': 'Compara regimes políticos e sustenta que as leis de um povo dependem de seu clima, de seus costumes e de sua história, formulando a separação entre os poderes executivo, legislativo e judiciário. Publicado em 1748 e posto no Índice pela Igreja, estruturou as constituições modernas, inclusive a americana e a brasileira.',
    'Montesquieu||Considerações sobre as Causas da Grandeza dos Romanos': 'Analisa a ascensão e a queda de Roma buscando causas gerais — instituições, costumes, extensão territorial, corrupção — em vez de atribuir os fatos ao acaso. Publicado em 1734, é apontado como um dos primeiros ensaios de história explicativa moderna e preparou o método comparativo de O Espírito das Leis.',
    'Morgan Housel||A Psicologia Financeira': 'Reúne dezenove histórias curtas mostrando que o comportamento pesa mais do que o conhecimento técnico nas finanças pessoais, e que ninguém é louco: cada um decide a partir da própria experiência de vida. Publicado em 2020, tornou-se um dos livros de finanças mais vendidos da década e é adotado em educação financeira.',
    'Morgan Housel||O Mesmo de Sempre': 'Trata do que não muda no comportamento humano — medo, ganância, inveja, apego a histórias — mesmo quando tecnologia, mercados e instituições mudam por completo. Publicado em 2023, propõe que prever o que permanece é mais útil do que tentar prever o que virá, e é a continuação natural de A Psicologia Financeira.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58e · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58e: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 58f — descrições ao padrão (lote 6) ===== */
(function () {
  var D = {
    'Muhammad Ali||O Maior: Minha Própria História': 'Autobiografia do boxeador, da infância em Louisville à conquista do título mundial, à conversão ao islã, à recusa do alistamento e ao retorno aos ringues. Publicada em 1975, um ano após a vitória sobre Foreman no Zaire, é a principal fonte em primeira pessoa sobre uma das figuras esportivas e políticas mais influentes do século XX.',
    'Muhammad Ali||Recusa ao alistamento': 'Recusa pública em ser incorporado ao exército americano para servir no Vietnã, em 1967, por objeção de consciência religiosa. Custou-lhe o título, a licença e quase quatro anos de carreira, entre os 25 e os 29 anos. A Suprema Corte anulou a condenação por unanimidade em 1971, e o episódio tornou-se marco da objeção de consciência no país.',
    'Napoleão Bonaparte||Código Civil francês': 'Código promulgado em 1804 que unificou o direito civil francês, consagrando igualdade formal perante a lei, propriedade privada, liberdade contratual e casamento laico. Substituiu centenas de sistemas jurídicos locais e serviu de base a códigos civis na Europa e na América Latina, com influência direta sobre o direito brasileiro.',
    'Napoleão Bonaparte||Memorial de Santa Helena': 'Conversas ditadas pelo imperador no exílio e registradas pelo conde de Las Cases, que as publicou em 1823. Construíram boa parte da própria lenda napoleônica, apresentando o autor como herdeiro da Revolução e defensor das nacionalidades, e foram um dos livros mais lidos da Europa no século XIX.',
    'Napoleão Bonaparte||Código Civil': 'Reuniu em um só texto o direito civil francês, disperso até então em centenas de costumes locais, consagrando igualdade formal, propriedade e liberdade contratual. O próprio Napoleão escreveu que suas vitórias militares seriam esquecidas mas que o código sobreviveria — previsão amplamente confirmada.',
    'Napoleão Bonaparte||Máximas de Guerra': 'Compilação póstuma de máximas atribuídas ao imperador sobre estratégia, moral das tropas, logística e concentração de forças, reunidas a partir de ordens, cartas e conversas. Foram estudadas em academias militares ao longo de todo o século XIX e influenciaram a teoria moderna da guerra, inclusive por meio de Clausewitz.',
    'Napoleão Bonaparte||Campanha do Egito': "Expedição militar e científica ao Egito e à Síria, entre 1798 e 1801, que levou junto com as tropas cerca de cento e cinquenta cientistas, engenheiros e desenhistas. Fracassou militarmente após a destruição da frota por Nelson, mas produziu a Description de l'Égypte e a descoberta da Pedra de Roseta, fundando a egiptologia moderna.",
    'Nassim Nicholas Taleb||A Lógica do Cisne Negro': 'Sustenta que eventos raros, imprevisíveis e de impacto enorme explicam boa parte da história, e que nossos modelos os ignoram sistematicamente porque se baseiam na média. Publicado em 2007, um ano antes da crise financeira, tornou a expressão cisne negro parte do vocabulário corrente em finanças, política e gestão de risco.',
    'Nassim Nicholas Taleb||Antifrágil': 'Propõe uma categoria além da robustez: o que não apenas resiste à desordem, mas ganha com ela, como o corpo que fortalece sob esforço ou o sistema que aprende com falhas pequenas. Publicado em 2012, é a obra mais ambiciosa do autor e aplica o conceito a saúde, economia, política e decisões pessoais.',
    'Nassim Nicholas Taleb||Iludido pelo Acaso': 'Mostra como confundimos sorte com habilidade, sobretudo nos mercados, onde trajetórias vencedoras são frequentemente produto de amostragem e não de talento. Publicado em 2001, é o primeiro volume da série Incerto e introduziu o vocabulário sobre aleatoriedade que o autor desenvolveria nos livros seguintes.',
    'Nassim Nicholas Taleb||Arriscando a Própria Pele':
      'Sustenta que decisões só são confiáveis quando quem as toma partilha do risco de suas consequências, e ataca especialistas e executivos que não respondem por seus erros. Publicado em 2018, uma década após a crise em que bancos foram socorridos e bônus mantidos, deu nome corrente a um princípio de responsabilidade hoje aplicado em várias áreas.',
    'Nelson Mandela||Longo Caminho para a Liberdade': 'Autobiografia que vai da infância no Transkei à presidência da África do Sul, passando pelos 27 anos de prisão. Parte do manuscrito foi escrita clandestinamente em Robben Island e enterrada no jardim; descoberta e confiscada, sobreviveu numa cópia levada por um preso libertado. É o relato em primeira pessoa da transição sul-africana.',
    'Nelson Mandela||Discurso do julgamento de Rivonia': 'Declaração de três horas feita em 1964 no banco dos réus, em que o autor assumiu a luta armada, explicou suas razões e afirmou estar preparado para morrer pelo ideal de uma sociedade livre e democrática. Proferido sob risco de pena capital, tornou-se um dos discursos políticos mais conhecidos do século XX.',
    'Nelson Mandela||Conversas que Tive Comigo': 'Reúne cartas, agendas, rascunhos e anotações pessoais do autor, muitos escritos na prisão, com prefácio de Barack Obama. Publicado em 2010, mostra o homem por trás da figura pública — inclusive as dúvidas, a irritação e a saudade da família — e é a fonte mais íntima disponível sobre sua trajetória.',
    'Nicolau Maquiavel||O Príncipe': 'Manual de conquista e manutenção do poder escrito com realismo deliberado, que analisa como os governantes de fato agem em vez de como deveriam agir. Escrito em 1513 e publicado postumamente em 1532, foi condenado pela Igreja e deu origem ao adjetivo maquiavélico, que simplifica um texto muito mais complexo do que sua fama sugere.',
    'Nicolau Maquiavel||A Mandrágora': 'Comédia em que um jovem apaixonado arma, com ajuda de um parasita e de um frade corrupto, um plano para passar a noite com a esposa de um marido tolo. Escrita por volta de 1518, quando o autor estava afastado da política florentina, é considerada a melhor comédia italiana do Renascimento e encena a mesma visão do cálculo humano de sua obra política.',
    'Nikola Tesla||Minhas Invenções': 'Série autobiográfica publicada em revista de eletricidade em 1919, em que o inventor relata a infância na Croácia, as visões que descrevia como parte de seu processo criativo e a concepção do campo magnético rotativo. É a principal fonte em primeira pessoa sobre seu método de trabalho e sobre a disputa entre corrente alternada e contínua.',
    'Nikola Tesla||Sistema de corrente alternada (patentes)': 'Conjunto de patentes registradas a partir de 1888 que cobre o motor de indução polifásico, transformadores e o sistema completo de geração, transmissão e uso de corrente alternada. Comprado por George Westinghouse, venceu a guerra das correntes contra Edison e é a base de praticamente toda a rede elétrica existente.',
    'Nise da Silveira||Imagens do Inconsciente': 'Apresenta e analisa a produção plástica de internos do hospital psiquiátrico onde a autora trabalhava, interpretando as imagens à luz da psicologia junguiana. Publicado em 1981, documenta um trabalho iniciado em 1946 em que ela recusou eletrochoque e lobotomia e propôs em seu lugar atividade expressiva e afeto.',
    'Nise da Silveira||Museu de Imagens do Inconsciente':
      'Museu e centro de estudos criado em 1952 no Rio de Janeiro a partir da produção artística de pacientes do hospital do Engenho de Dentro, com dezenas de milhares de obras catalogadas. Jung correspondeu-se com a fundadora e organizou em 1957 uma exposição do acervo em Zurique; dali saiu o reconhecimento de Arthur Bispo do Rosário e Fernando Diniz.',
    'Nísia Floresta||Direitos das Mulheres e Injustiça dos Homens': 'Defende a igualdade intelectual entre homens e mulheres e o direito delas à instrução, a partir da leitura de Mary Wollstonecraft. Publicado em 1832 no Brasil imperial, quando a educação feminina se limitava a prendas domésticas, é apontado como o primeiro texto feminista publicado no país.',
    'Nísia Floresta||Opúsculo Humanitário': 'Reúne sessenta e dois artigos sobre a educação feminina no Brasil, defendendo que a formação das mulheres é condição do progresso do país e criticando o estado do ensino oferecido a elas. Publicado em 1853, quando a autora dirigia um colégio para meninas no Rio com currículo incomum para a época.',
    'Nísia Floresta||A Lágrima de um Caeté': 'Poema narrativo que toma o ponto de vista de um indígena sobrevivente para tratar da Revolução Praieira e da situação dos povos originários no Brasil imperial. Publicado em 1849 sob pseudônimo masculino, é um dos primeiros textos literários brasileiros a dar voz a um narrador indígena em chave crítica, e não decorativa.',
    'Oscar Wilde||A Balada do Cárcere de Reading': 'Poema longo escrito a partir do enforcamento de um condenado na prisão onde o autor cumpria pena, sobre a crueldade do sistema penal e o modo como todos destroem o que amam. Publicado em 1898 e assinado apenas com o número de sua cela, é seu último grande texto e contribuiu para o debate sobre a reforma penal britânica.',
    'Oswaldo Cruz||Campanha sanitária no Rio de Janeiro':
      'Conjunto de ações de saúde pública entre 1903 e 1909 para erradicar febre amarela, peste bubônica e varíola na capital federal, com brigadas de mata-mosquitos, desinfecção e vacinação obrigatória. Erradicou a febre amarela urbana e fundou a saúde pública brasileira, mas a imposição sem esclarecimento provocou a Revolta da Vacina, em 1904.',
    'Pablo Picasso||Guernica': 'Painel de quase oito metros, em preto, branco e cinza, sobre o bombardeio da cidade basca pela aviação alemã e italiana a serviço de Franco. Pintado em 1937 em cerca de um mês para o pavilhão espanhol em Paris, é a obra antiguerra mais conhecida do século XX. Picasso determinou que só voltaria à Espanha em democracia; chegou em 1981.',
    'Pablo Picasso||As Senhoritas de Avignon': 'Tela de grande formato com cinco figuras femininas de corpos fragmentados em planos angulosos, duas delas com rostos inspirados em máscaras africanas e ibéricas. Pintada em 1907, chocou até os amigos do pintor, que a mantiveram quase escondida por uma década, e é apontada como o ponto de partida do cubismo e da arte moderna.',
    'Paulo Freire||Educação como Prática da Liberdade': 'Apresenta o método que alfabetizou trezentos trabalhadores em quarenta horas em Angicos, no Rio Grande do Norte, partindo de palavras geradoras retiradas da própria vida dos alunos. Publicado em 1967, já no exílio, formula a crítica à educação bancária que ele desenvolveria na Pedagogia do Oprimido.',
    'Pelé||Pelé: A Autobiografia': 'Relata a trajetória do jogador, da infância pobre em Bauru às três Copas do Mundo, à carreira no Santos e ao período no New York Cosmos. Publicada em 2006, trata também de sua passagem pelo Ministério do Esporte e das polêmicas de sua vida pública. É a principal fonte autobiográfica sobre o único tricampeão mundial da história.',
    'Peter Drucker||O Gestor Eficaz': 'Trata a eficácia como hábito que se aprende, e não como talento, e propõe cinco práticas: administrar o tempo, concentrar-se na contribuição, apoiar-se nas forças, priorizar poucas coisas e decidir com método. Publicado em 1967, é o livro mais prático do autor e o mais adotado em programas de formação executiva.',
    'Peter Drucker||A Prática da Administração': 'Primeiro livro a tratar a administração como disciplina com princípios próprios, introduzindo a gestão por objetivos e definindo que o propósito de uma empresa é criar um cliente. Publicado em 1954, é a obra que fundou a gestão moderna e estabeleceu as perguntas que qualquer organização precisa responder sobre seu próprio negócio.',
    'Peter Drucker||Administrando em Tempos de Grande Mudança': 'Trata do trabalhador do conhecimento, do fim do emprego vitalício e da necessidade de abandonar deliberadamente o que já não funciona. Publicado em 1995, antecipou boa parte da discussão atual sobre carreira, terceirização e obsolescência de competências.',
    'Peter Drucker||Sociedade Pós-Capitalista': 'Prevê uma economia em que o recurso decisivo deixa de ser capital, terra ou trabalho e passa a ser conhecimento, com efeitos sobre governo, educação e organização das empresas. Publicado em 1993, é a obra em que o autor consolidou o conceito de sociedade do conhecimento, hoje corrente em política pública.',
    'Peter Drucker||Concept of the Corporation': 'Estudo interno da General Motors que analisa a grande corporação como instituição social e política, e não apenas econômica, discutindo descentralização e relação com trabalhadores. Resultado de dezoito meses dentro da empresa a convite dela própria, que recebeu mal as conclusões — mas a Ford usou o livro para se reorganizar.',
    'Philip Fisher||Ações Comuns, Lucros Extraordinários': 'Apresenta quinze pontos para avaliar uma empresa pela qualidade do negócio e da gestão, e não apenas pelo preço, e o método scuttlebutt de investigar junto a clientes, fornecedores e concorrentes. Publicado em 1958, influenciou diretamente Warren Buffett, que descreve sua abordagem como uma combinação de Graham e Fisher.',
    'Philip Fisher||Caminhos Conservadores para o Investimento': 'Expõe os critérios do autor para identificar empresas de qualidade superior — liderança em custos, pesquisa eficaz, profundidade da equipe de gestão e relação sólida com clientes. Publicado em 1975, trata de preservar patrimônio sem abrir mão de crescimento real e é a formulação madura de seu método.',
    'Philip Kotler||Administração de Marketing': 'Livro-texto que organizou o marketing como disciplina acadêmica, cobrindo segmentação, posicionamento, composto de marketing, comportamento do consumidor e planejamento. Publicado pela primeira vez em 1967 e revisado em sucessivas edições, formou gerações de profissionais e é o manual mais adotado da área no mundo.',
    'Philip Kotler||Marketing 4.0': 'Trata da transição do marketing tradicional para o digital, com foco na jornada do cliente e na passagem do reconhecimento à advocacia de marca. Publicado em 2016, quando a recomendação entre pares já pesava mais que a publicidade, propõe métricas e caminhos para atuar nesse ambiente.',
    'Philip Kotler||Princípios de Marketing': 'Versão introdutória do manual do autor, adotada em cursos de graduação no mundo inteiro, que apresenta segmentação, posicionamento, produto, preço, praça e promoção com exemplos e casos. Traduzido para dezenas de idiomas e revisado continuamente, é a porta de entrada padrão à disciplina.',
    'Philip Kotler||Marketing 5.0': 'Trata da aplicação de inteligência artificial, processamento de linguagem e realidade aumentada ao marketing, mantendo o foco em valores humanos. Publicado em 2021, após a aceleração digital da pandemia, argumenta que a tecnologia deve ampliar, e não substituir, a capacidade de criar vínculo com o consumidor.',
    'Philip Zimbardo||O Efeito Lúcifer': 'Reconta em detalhe o experimento da prisão de Stanford, de 1971, e analisa como situações e sistemas levam pessoas comuns a cometer atrocidades, com aplicação ao caso de Abu Ghraib. Publicado em 2007, inclui autocrítica do pesquisador sobre seu próprio envolvimento como diretor da prisão simulada.',
    'Philip Zimbardo||O Paradoxo do Tempo': 'Propõe que cada pessoa tem uma perspectiva temporal dominante — voltada ao passado, ao presente ou ao futuro — e que essa orientação afeta saúde, decisões e relações. Publicado em 2008, apresenta seis perfis e é aplicado hoje em terapia, educação financeira e tratamento de trauma.',
    'Platão||Apologia de Sócrates': 'Reproduz a defesa de Sócrates diante do tribunal ateniense que o julgava por corromper a juventude, e sua recusa em abandonar o modo de vida que levava. Escrita poucos anos após a condenação de 399 a.C., contém a formulação sobre a vida não examinada não valer a pena e fundou a figura do filósofo que prefere a morte à renúncia da verdade.',
    'Profeta Muhammad||Hadices': 'Coletâneas de ditos, atos e aprovações do Profeta transmitidos por seus companheiros e reunidos por compiladores dos séculos VIII e IX, com cadeias de transmissão rigorosamente examinadas. Formam a segunda fonte da lei islâmica, depois do Alcorão, e orientam a prática cotidiana de cerca de dois bilhões de pessoas.',
    'Profeta Muhammad||Sermão da Despedida': 'Último sermão público, proferido em 632 diante de uma multidão no monte Arafat, com princípios sobre igualdade entre os fiéis, proibição da usura, quitação de dívidas de sangue e tratamento das mulheres. É um dos textos mais citados do islã e é lido como resumo do ensino do Profeta.',
    'Rainer Maria Rilke||Cartas a um Jovem Poeta': 'Dez cartas escritas entre 1903 e 1908 a um estudante desconhecido que pedia opinião sobre seus versos, e que tratam de vocação, solidão, paciência e a decisão de escrever apenas se for preciso. Publicadas em 1929, tornaram-se o conselho mais reproduzido sobre vida criativa e circulam amplamente fora da literatura.',
    'Rainer Maria Rilke||Elegias de Duíno': 'Dez elegias escritas ao longo de dez anos, sobre anjos terríveis, a morte, o amor e a insuficiência do humano diante do que o ultrapassa. Iniciadas em 1912 no castelo de Duíno e concluídas em 1922 num surto de poucas semanas, são consideradas o ponto mais alto da poesia em língua alemã do século XX.',
    'Rainer Maria Rilke||Sonetos a Orfeu': 'Cinquenta e cinco sonetos escritos em poucas semanas de fevereiro de 1922, no mesmo surto criativo que concluiu as Elegias de Duíno, em memória de uma jovem dançarina morta. Tratam de canto, transformação e da capacidade da arte de afirmar a vida apesar da perda, e são obra-prima da forma fixa moderna.',
    'Ray Dalio||Big Debt Crises': 'Apresenta um modelo histórico dos ciclos de crise de dívida, com análise detalhada de quarenta e oito casos, entre eles 1929 e 2008, e propõe como identificar os estágios e reagir a cada um. Publicado em 2018 e distribuído gratuitamente em PDF pelo autor, é referência em análise macroeconômica de crises.',
    'René Descartes||Discurso do Método': 'Autobiografia intelectual que expõe as quatro regras do método cartesiano e chega, pela dúvida radical, à certeza do penso, logo existo. Publicado em 1637 em francês, e não em latim, para alcançar leitores fora da universidade, é o texto inaugural da filosofia moderna e um dos mais lidos de toda a tradição.',
    'René Descartes||Meditações Metafísicas': 'Seis meditações que levam a dúvida ao extremo — sentidos, corpo, mundo exterior, o gênio maligno — até encontrar na própria existência como coisa pensante um ponto indubitável. Publicadas em 1641 com objeções de Hobbes, Gassendi e outros e as respostas do autor, fundam o problema moderno da relação entre mente e corpo.',
    'René Descartes||Geometria': 'Ensaio que une álgebra e geometria, representando curvas por equações e resolvendo problemas geométricos pelo cálculo algébrico. Publicado em 1637 como apêndice do Discurso do Método, fundou a geometria analítica e tornou possível o cálculo diferencial desenvolvido por Newton e Leibniz na geração seguinte.',
    'René Descartes||Princípios da Filosofia': 'Exposição sistemática da filosofia do autor em forma de manual, cobrindo metafísica, física e a explicação mecânica dos fenômenos naturais, organizada em artigos curtos numerados. Publicada em 1644 no formato dos manuais escolásticos que pretendia substituir, dominou a física continental até ser suplantada por Newton.',
    'Richard Branson||Perdendo a Virgindade': 'Autobiografia que vai do disco vendido por correspondência à gravadora, à companhia aérea e às dezenas de empresas do grupo Virgin, com os fracassos relatados no mesmo tom dos acertos. Publicada em 1998, é um dos relatos empresariais mais lidos sobre construção de marca a partir de personalidade e risco deliberado.',
    'Robert Cialdini||As Armas da Persuasão': 'Descreve seis princípios de influência — reciprocidade, compromisso, prova social, afinidade, autoridade e escassez — identificados durante três anos em que o autor se infiltrou em equipes de venda e arrecadação. Publicado em 1984, é um dos livros de psicologia aplicada mais vendidos e mais citados do mundo.',
    'Robert Cialdini||Pré-Suasão': 'Trata do que acontece antes da mensagem: como dirigir a atenção do interlocutor para um aspecto da realidade de modo que ele fique receptivo ao que virá. Publicado em 2016, acrescenta a unidade como sétimo princípio de influência e é a continuação direta de As Armas da Persuasão.',
    'Robert Emmons||Gratitude Works!': 'Programa prático de vinte e um dias para desenvolver gratidão, com exercícios baseados nas pesquisas do autor, o principal pesquisador do tema no mundo. Publicado em 2013, trata também da gratidão em situações de perda e sustenta que escrever, e não apenas pensar, é o que produz o efeito medido nos estudos.',
    'Rosa Luxemburgo||Reforma ou Revolução': 'Responde à tese de Eduard Bernstein de que o capitalismo poderia ser gradualmente transformado por reformas, sustentando que reforma e revolução não são caminhos alternativos para o mesmo fim. Publicado em 1899, quando a autora tinha 28 anos, projetou-a como uma das principais teóricas do socialismo europeu.',
    'Rosa Luxemburgo||Cartas da Prisão': 'Cartas escritas a amigos durante os anos de encarceramento por oposição à Primeira Guerra, combinando análise política com observações sobre pássaros, plantas e o pátio da prisão. São documento central da oposição socialista à guerra e um dos textos mais lidos da autora fora dos círculos políticos, pela força literária.',
    'Rosa Parks||Rosa Parks: Minha História': 'Autobiografia que narra a infância no Alabama segregado, a militância na NAACP muito antes de 1955, a recusa de ceder o assento e o boicote que se seguiu. Publicada em 1992, corrige a narrativa popular da costureira cansada: ela era militante treinada, e o único cansaço que sentia, escreveu, era o de ceder.',
    'Rosalind Franklin||Fotografia 51': 'Imagem de difração de raios X da forma B do DNA, produzida em 1952 com o estudante Raymond Gosling, cuja nitidez permitiu identificar a estrutura helicoidal e calcular seus parâmetros. Foi mostrada a James Watson sem o conhecimento da autora e foi decisiva para o modelo de dupla hélice publicado em 1953.',
    'Rubem Alves||Teologia da Libertação': 'Tese doutoral defendida em Princeton em 1968, que critica a teologia da esperança europeia e propõe uma teologia partindo da experiência concreta de opressão e da ação humana pela libertação. É apontada como o primeiro trabalho acadêmico a formular a teologia da libertação, e a editora alterou seu título original.',
    'Rubem Alves||A História do Pássaro Que Vivia no Ar': 'Narrativa breve sobre um pássaro que não pousava nunca e sobre o encontro que o faz descobrir o repouso, escrita em registro de parábola para adultos e crianças. Integra o conjunto de textos curtos que tornaram o autor um dos escritores brasileiros mais lidos em escolas e em formação de professores.',
    'Rumi||Masnavi': 'Poema de cerca de vinte e cinco mil versos em persa, composto de histórias, fábulas e comentários sobre amor divino, separação e retorno, frequentemente chamado de Alcorão em língua persa. Ditado pelo autor em movimento ao longo de anos, é a obra central do sufismo e um dos grandes poemas místicos da literatura mundial.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58f · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58f: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 58g — descrições ao padrão (lote 7, final) ===== */
(function () {
  var D = {
    'Rumi||Divã de Shams de Tabriz': 'Reúne milhares de poemas de arrebatamento escritos após o encontro com o dervixe Shams de Tabriz, e dedicados a ele depois de seu desaparecimento. Rumi assina vários deles com o nome do amigo, dissolvendo a distinção entre quem ama e quem é amado — procedimento central de sua poesia mística.',
    'Ruth Bader Ginsburg||Projeto de Direitos das Mulheres da ACLU': 'Programa jurídico criado em 1972 para atacar a discriminação de gênero por meio de casos selecionados estrategicamente, construindo precedentes passo a passo. A estratégia incluía representar homens prejudicados por leis baseadas em papéis de gênero; Ginsburg argumentou seis casos na Suprema Corte e venceu cinco.',
    'Ruth Bader Ginsburg||Estados Unidos v. Virginia': 'Decisão de 1996 em que a Suprema Corte determinou que o Instituto Militar da Virgínia, instituição pública, não podia excluir mulheres. Ginsburg redigiu a opinião majoritária e exigiu justificativa extremamente persuasiva para qualquer distinção legal baseada em sexo, elevando o padrão constitucional aplicado à discriminação de gênero.',
    'Ruth Bader Ginsburg||Meu Próprio Caminho': 'Reúne artigos, discursos, votos e entrevistas da juíza, da juventude aos anos na Suprema Corte, sobre igualdade de gênero e método de argumentação. Organizado com sua participação direta, é a principal fonte sobre a estratégia jurídica que atacou a discriminação caso a caso ao longo de cinco décadas.',
    'Ruth Bader Ginsburg||Voto vencido no caso Ledbetter': 'Voto divergente de 2007 em que a juíza sustentou que o prazo para contestar discriminação salarial não poderia começar no primeiro pagamento desigual, já que a vítima em geral não sabe da diferença. Lido em voz alta no plenário, levou o Congresso a aprovar em 2009 a Lei Lilly Ledbetter, exatamente nos termos que ela indicara.',
    'Sam Walton||Sam Walton: Made in America': 'Autobiografia terminada semanas antes da morte do autor, que explica por dentro o varejo de custo baixo: controle rigoroso de despesas, logística própria e abertura de lojas em cidades pequenas ignoradas pelos concorrentes. Walton conta que visitava lojas de concorrentes com bloco de notas e copiou praticamente tudo o que deu certo.',
    'Sam Walton||Walmart': 'Rede fundada em 1962 em Rogers, Arkansas, sobre a aposta de vender barato em municípios pequenos, com preços baixos permanentes e centros de distribuição próprios. O investimento precoce em sistemas de informação e logística tornou-a a maior varejista e maior empregadora privada do mundo, reorganizando a cadeia de fornecimento global.',
    'Samuel Johnson||Vidas dos Poetas': 'Cinquenta e duas biografias críticas de poetas ingleses, cada uma reunindo vida, caráter e avaliação da obra em julgamentos diretos e muitas vezes severos. Publicadas entre 1779 e 1781 como prefácios a uma coleção comercial, são consideradas o ponto mais alto da crítica literária inglesa do século XVIII.',
    'Samuel Johnson||O Rambler': 'Série de mais de duzentos ensaios periódicos sobre moral, literatura, caráter e vida cotidiana, publicados duas vezes por semana entre 1750 e 1752 e escritos quase todos pelo próprio autor, muitas vezes sob pressão do mensageiro. Fixaram o modelo do ensaio moral inglês e foram reeditados dezenas de vezes ainda em sua vida.',
    'Santo Agostinho||A Cidade de Deus': 'Responde à acusação de que o cristianismo causara a queda de Roma e desenvolve a distinção entre duas cidades: a terrena, movida pelo amor de si, e a celeste, movida pelo amor de Deus. Escrita entre 413 e 426, após o saque de Roma pelos visigodos, definiu a relação entre poder espiritual e temporal para toda a Idade Média.',
    'Santos Dumont||14-Bis': 'Aeroplano de asas em células e leme dianteiro que decolou por meios próprios, voou e pousou diante de comissão oficial em Paris, em 1906. O voo de 12 de novembro superou duzentos metros e foi homologado pelo Aeroclube da França: o primeiro de um mais pesado que o ar reconhecido oficialmente, sem catapulta, trilhos ou vento externo.',
    'Santos Dumont||Demoiselle': 'Monoplano muito leve, de construção simples e barata, projetado para ser fabricado por qualquer pessoa com acesso aos planos — que o autor publicou gratuitamente em revista, autorizando a reprodução livre. É considerado o primeiro avião de produção em série da história e o antecessor dos aviões leves e ultraleves.',
    'Santos Dumont||O Que Eu Vi, o Que Nós Veremos': 'Livro em que o inventor relata suas experiências com balões e aeroplanos e reflete sobre o futuro da aviação. Publicado em 1918, durante a Primeira Guerra, já traz a decepção com o uso militar de sua invenção — ele chegou a apelar à Sociedade das Nações pela proibição de aeronaves em combate, sem sucesso.',
    'Sêneca||Sobre a Brevidade da Vida': 'Sustenta que a vida não é curta: nós é que a desperdiçamos em ocupações alheias, adiamentos e expectativa do futuro. Endereçado a um funcionário imperial sobrecarregado, é um dos textos mais diretos já escritos sobre o uso do tempo e continua sendo o mais lido de toda a obra de Sêneca.',
    'Sêneca||Sobre a Tranquilidade da Alma': 'Diálogo que parte da queixa de um amigo sobre inquietação crônica e insatisfação difusa, e propõe um método para atravessá-la sem fugir do mundo: escolher bem as ocupações, medir as posses, aceitar o limite e reservar tempo para si. É um dos tratados estoicos mais próximos da psicologia prática contemporânea.',
    'Serena Williams||Rainha da Quadra': 'Autobiografia que narra a infância em Compton, o treinamento conduzido pelo pai em quadras públicas, a ascensão ao topo do tênis mundial e os episódios de racismo que enfrentou, entre eles as vaias em Indian Wells que levaram a um boicote de catorze anos. Publicada em 2009, é documento de primeira mão sobre raça e gênero no esporte de elite.',
    'Seth Godin||Marketing de Permissão': 'Propõe substituir a publicidade que interrompe por uma relação em que o consumidor concede permissão para ser contatado, em troca de algo de valor. Publicado em 1999, quando o autor dirigia o marketing direto do Yahoo!, criou o vocabulário que fundamenta boa parte da regulação e da prática atual de comunicação digital.',
    'Seth Godin||A Vaca Roxa': 'Sustenta que a publicidade de massa perdeu eficácia e que o único caminho é tornar o produto notável em si mesmo — como uma vaca roxa em um campo de vacas comuns. Publicado em 2003 e distribuído em caixas de leite, argumenta que o oposto de notável não é ruim, é muito bom: o que é apenas muito bom passa despercebido.',
    'Seth Godin||Isso é Marketing': 'Propõe que marketing não é vender a todos, mas servir ao menor público viável, entender a mudança que se quer produzir e construir confiança ao longo do tempo. Publicado em 2018, quando a publicidade digital de massa gerava rejeição crescente, inverte a lógica de escala e é adotado por pequenos negócios e profissionais autônomos.',
    'Seth Godin||Tribos': 'Sustenta que grupos conectados por uma ideia sempre existiram, mas que a internet permitiu que qualquer pessoa os lidere — e que a escassez não é de seguidores, e sim de quem assuma a posição incômoda de liderar. Publicado em 2008, é referência em marketing de comunidade e construção de públicos próprios.',
    'Sigmund Freud||A Interpretação dos Sonhos': 'Propõe que o sonho é a realização disfarçada de um desejo e apresenta o método de associação livre que fundaria a psicanálise, com o próprio autor como principal objeto de análise. Publicado em 1900, vendeu poucas centenas de exemplares em anos e é hoje uma das obras mais influentes do pensamento ocidental.',
    'Sigmund Freud||O Mal-Estar na Civilização': 'Sustenta que a civilização exige renúncia pulsional e que essa renúncia produz um mal-estar permanente, e discute a agressividade humana como obstáculo estrutural à vida em comum. Publicado em 1930, às vésperas da ascensão nazista, é o texto freudiano mais lido fora da psicanálise e termina sem qualquer conclusão consoladora.',
    'Sigmund Freud||Três Ensaios sobre a Teoria da Sexualidade': 'Propõe que a sexualidade não começa na puberdade nem se define pela reprodução, e descreve a sexualidade infantil, suas fases e os desvios do objeto e do alvo. Publicado em 1905 na Viena vitoriana, provocou a maior resistência pública entre todos os escritos do autor e é apontado como a causa de seu isolamento médico.',
    'Simón Bolívar||Carta da Jamaica': 'Carta escrita no exílio em 1815, após derrotas militares, em que o autor analisa a situação das colônias espanholas, prevê o destino político de cada região e argumenta pela necessidade de união entre elas. É o documento mais importante do pensamento bolivariano e texto fundador do ideal de integração latino-americana.',
    'Simón Bolívar||Discurso de Angostura': 'Discurso de abertura do congresso constituinte da Venezuela, em 1819, que propõe um governo adaptado à realidade americana em vez da cópia de modelos estrangeiros, com senado hereditário e poder moral. É o texto constitucional mais elaborado de seu pensamento e adverte que um povo despreparado perde rapidamente a liberdade.',
    'Simon Sinek||Comece pelo Porquê': 'Propõe o círculo dourado: organizações comuns comunicam o que fazem, algumas comunicam como, e pouquíssimas começam pelo porquê — e as pessoas não compram o que você faz, e sim a razão pela qual você faz. Publicado em 2009, deu origem a uma das palestras mais assistidas do formato TED e entrou no vocabulário de marca.',
    'Simon Sinek||Líderes se Servem por Último': 'Argumenta que a função do líder é criar um círculo de segurança dentro do qual as pessoas não precisem se defender umas das outras e possam enfrentar em conjunto os perigos externos. O título vem de uma prática dos fuzileiros navais americanos, e o livro dialoga diretamente com a pesquisa sobre segurança psicológica.',
    'Simone Weil||A Gravidade e a Graça': 'Coletânea de anotações sobre atenção, desapego, desgraça e beleza, organizada após a morte da autora a partir dos cadernos que ela confiara a um amigo. Publicada em 1947, tornou-se um dos textos espirituais mais lidos do século XX e influenciou Camus, Susan Sontag e Iris Murdoch.',
    'Simone Weil||O Enraizamento': 'Sustenta que o enraizamento é a necessidade mais importante e mais ignorada da alma humana, e propõe um conjunto de necessidades — ordem, liberdade, responsabilidade, verdade, honra — como base para a reconstrução da França. Escrito em Londres em 1943 a pedido da França Livre, meses antes da morte da autora, aos 34 anos.',
    'Simone Weil||A Condição Operária': 'Reúne o diário de fábrica e ensaios escritos a partir do ano em que a autora, filósofa formada, pediu licença do magistério para trabalhar como operária em linhas de montagem em Paris. Descreve o efeito da repetição e da submissão sobre o pensamento de quem as vive, e é um dos principais documentos sobre trabalho industrial já escritos.',
    'Simone Weil||Reflexões sobre as Causas da Liberdade e da Opressão Social': 'Analisa por que revoluções substituem uma forma de opressão por outra e sustenta que o problema está na organização do trabalho e na divisão entre quem pensa e quem executa. Escrito em 1934, aos 25 anos, é apontado como uma das críticas mais lúcidas ao marxismo feitas de dentro da tradição socialista.',
    'Søren Kierkegaard||O Desespero Humano (A Doença Mortal)': 'Analisa o desespero como estado permanente do eu que não consegue ser si mesmo, e descreve suas formas, do desespero inconsciente ao que se sabe e se recusa a sair dele. Publicado em 1849 sob pseudônimo, antecedeu em décadas a psicologia existencial e a psicanálise e é uma das análises mais influentes da angústia moderna.',
    'Stephen Hawking||Uma Breve História do Tempo': 'Explica ao leitor leigo a estrutura do universo — relatividade, mecânica quântica, buracos negros e a origem do cosmos — praticamente sem equações. Publicado em 1988 quando o autor convivia havia duas décadas com esclerose lateral amiotrófica, vendeu mais de dez milhões de exemplares e o tornou figura pública mundial.',
    'Stephen Hawking||O Universo numa Casca de Noz': 'Continua a exposição de Uma Breve História do Tempo, tratando de teoria das cordas, branas e da busca por uma teoria unificada, com ilustrações abundantes e capítulos independentes. Publicado em 2001, ganhou o prêmio Aventis e consolidou o autor como principal divulgador de física de sua geração.',
    'Stephen Hawking||Breves Respostas para Grandes Questões': 'Reúne respostas do autor a dez perguntas que lhe eram feitas com frequência: existe Deus, há vida inteligente fora da Terra, a inteligência artificial nos superará. Publicado postumamente em 2018 a partir de material que ele havia selecionado, é seu testamento intelectual e traz seus alertas sobre riscos existenciais.',
    'Stephen R. Covey||O 8º Hábito': 'Propõe que a eficácia dos sete hábitos já não basta, e que o passo seguinte é encontrar a própria voz e ajudar outros a encontrarem a deles. Publicado em 2004, trata de liderança como escolha e não como posição, e desloca o foco do desempenho individual para a contribuição.',
    'Stephen R. Covey||Primeiro o Mais Importante': 'Aprofunda o hábito da priorização, propondo organizar o tempo por importância e não por urgência, a partir da matriz de quatro quadrantes e do planejamento semanal em torno de papéis. Publicado em 1994, consolidou a chamada quarta geração da gestão do tempo, e sua matriz é hoje ferramenta corrente em produtividade.',
    'Steve Jobs||Discurso em Stanford': 'Discurso de formatura proferido em 2005 e organizado em três histórias: conectar os pontos, amor e perda, e a morte. Feito um ano após seu primeiro diagnóstico de câncer, é uma das falas mais assistidas da internet e a fonte das frases mais citadas do autor sobre trabalho, intuição e tempo.',
    'Steve Jobs||Steve Jobs (biografia por Walter Isaacson)': 'Biografia autorizada construída a partir de mais de quarenta entrevistas com o próprio biografado e centenas com familiares, colegas e adversários. Publicada em 2011, semanas após sua morte, cobre a fundação da Apple, a demissão, a Pixar, o retorno e a criação do iPod, do iPhone e do iPad — sem direito de aprovação do texto.',
    'Tarsila do Amaral||Abaporu': 'Tela de 1928 que mostra uma figura humana de pé e mão enormes e cabeça minúscula ao lado de um cacto, sob um sol circular. Pintada como presente de aniversário a Oswald de Andrade, a reação dele levou ao Manifesto Antropófago no mesmo ano. É a obra mais conhecida da arte brasileira e a tela nacional mais valiosa já vendida.',
    'Tarsila do Amaral||Operários': 'Tela de 1933 que mostra dezenas de rostos sobrepostos de trabalhadores, de diferentes origens étnicas, diante de chaminés de fábrica. Pintada após a viagem da artista à União Soviética e em plena industrialização de São Paulo, marca sua fase social e é uma das imagens mais reproduzidas sobre a formação da classe trabalhadora brasileira.',
    'Tarsila do Amaral||A Negra': 'Tela pintada em Paris em 1923, que retrata uma mulher negra sentada, de formas monumentais e simplificadas, com fundo geometrizado. Fernand Léger, professor da artista, mostrava o quadro a seus alunos como exemplo. É considerada a obra que inaugura sua linguagem própria e antecede diretamente o Abaporu.',
    'Theodore Roosevelt||A Vida Extenuante': 'Discurso de 1899 que defende a vida de esforço, risco e trabalho árduo — individual e nacional — contra o que o autor considerava o ideal covarde do conforto. Proferido quando os Estados Unidos debatiam o que fazer com os territórios tomados da Espanha, é lido hoje tanto como exaltação da coragem quanto como justificativa do imperialismo.',
    'Theodore Roosevelt||Criação do Serviço Florestal': 'Conjunto de medidas que criou o Serviço Florestal americano e colocou sob proteção federal cerca de oitenta e cinco milhões de hectares em florestas nacionais, parques e refúgios. Ao saber que o Congresso limitaria seu poder de criar florestas, Roosevelt criou dezesseis milhões de hectares nos dias anteriores à assinatura da lei.',
    'Theodore Roosevelt||Nobel da Paz': 'Prêmio concedido em 1906 pela mediação que pôs fim à Guerra Russo-Japonesa, negociada sob os auspícios do presidente americano no Tratado de Portsmouth. Roosevelt foi o primeiro americano e o primeiro chefe de Estado em exercício a recebê-lo, e doou integralmente o valor do prêmio.',
    'Theodore Roosevelt||Através do Sertão Brasileiro': 'Relato da expedição científica que percorreu em 1913 e 1914 o então Rio da Dúvida, na Amazônia, conduzida pelo autor e pelo marechal Cândido Rondon. Roosevelt contraiu malária e uma infecção grave e chegou a pedir que o deixassem para trás; nunca se recuperou plenamente. O rio foi rebatizado com seu nome.',
    'Thich Nhat Hanh||O Milagre da Atenção Plena': 'Escrito originalmente como carta a monges que permaneciam no Vietnã em guerra, ensina a trazer atenção plena a atividades comuns — respirar, caminhar, lavar a louça — como prática e não como fuga do mundo. Publicado em 1975, foi decisivo para a difusão do mindfulness no Ocidente em linguagem sem jargão religioso.',
    'Thich Nhat Hanh||A Paz é Cada Passo': 'Apresenta práticas simples de atenção plena aplicadas ao dia comum — atender o telefone, dirigir, comer — como caminho para a paz interior e social. Publicado em 1991, é um dos livros mais lidos sobre o tema e influenciou diretamente a adoção da prática em hospitais, escolas e empresas no Ocidente.',
    'Thomas Edison||Lâmpada incandescente comercial': 'Lâmpada de filamento de alta resistência em bulbo a vácuo, capaz de queimar por centenas de horas. Edison não foi o primeiro a criar uma lâmpada elétrica: foi o primeiro a torná-la duradoura e comercialmente viável, e a contribuição decisiva não foi o objeto isolado, mas o sistema completo de geração e distribuição que o acompanhava.',
    'Thomas Edison||Fonógrafo': 'Primeira máquina capaz de gravar e reproduzir som, registrando vibrações em uma folha de estanho enrolada em cilindro. Apresentado em 1877, causou espanto imediato e era a invenção que o próprio Edison mais estimava. Fundou a indústria da música gravada e alterou para sempre a relação entre som e tempo.',
    'Thomas Edison||Central elétrica de Pearl Street': 'Primeira central elétrica comercial de corrente contínua, que gerava e distribuía eletricidade por cabos subterrâneos para iluminar um distrito de Manhattan. Inaugurada em 1882 com cerca de oitenta clientes, provou a viabilidade comercial da eletricidade distribuída e é o ponto de partida da indústria elétrica moderna.',
    'Thomas Edison||Laboratório de Menlo Park': 'Complexo de laboratórios e oficinas em Nova Jersey onde Edison reuniu químicos, maquinistas e desenhistas para desenvolver invenções em regime industrial e contínuo. Criado em 1876, é apontado como o primeiro laboratório de pesquisa e desenvolvimento do mundo e o modelo de todo departamento de P&D corporativo.',
    'Thomas Edison||Cinetoscópio': 'Aparelho de visualização individual em que o espectador observava, por uma lente, um filme em movimento contínuo. Desenvolvido no início dos anos 1890 no laboratório do autor, sobretudo por William Kennedy Dickson, foi o primeiro dispositivo comercialmente bem-sucedido de exibição de imagens em movimento.',
    'Thomas Hobbes||Do Cidadão': 'Expõe a teoria política do autor em três partes — liberdade, poder e religião — sustentando que sem um poder comum os homens vivem em guerra de todos contra todos. Publicado em latim em 1642, no início da Guerra Civil Inglesa, precede o Leviatã em quase uma década e circulou amplamente entre eruditos europeus.',
    'Thomas Hobbes||Behemoth': 'Diálogo histórico que analisa as causas da Guerra Civil Inglesa, atribuindo-as à disputa de autoridade entre pregadores, universidades, parlamento e coroa. Escrito por volta de 1668 e proibido por Carlos II, saiu postumamente e é o complemento histórico do Leviatã: mostra na prática o que o tratado explica em teoria.',
    'Tomás de Aquino||Suma Teológica': 'Síntese monumental entre a fé cristã e a filosofia aristotélica, organizada em milhares de artigos com pergunta, objeções, resposta e réplica. Escrita entre 1265 e 1273 e deixada inacabada, contém as cinco vias para a existência de Deus e estrutura a teologia católica até hoje.',
    'Tomás de Aquino||Suma Contra os Gentios': 'Expõe e defende a fé cristã por argumentos de razão natural, sem apelo à autoridade das Escrituras, exceto na parte final. Escrita entre 1259 e 1265, quando a filosofia de Aristóteles chegava à Europa por comentadores árabes, é a exposição mais completa da teologia natural tomista e referência em diálogo inter-religioso.',
    'Tomás de Aquino||Comentário à Ética a Nicômaco': 'Comentário sistemático ao tratado de Aristóteles sobre a virtude, a felicidade e a vida boa, acompanhando o texto capítulo a capítulo. Escrito por volta de 1272 a partir da tradução direta do grego feita por Guilherme de Moerbeke, é o comentário medieval mais influente sobre a ética aristotélica.',
    'Václav Havel||O Poder dos Sem-Poder': 'Analisa o regime comunista tchecoslovaco como sistema sustentado pela adesão simulada de todos, e propõe como resistência simplesmente viver na verdade e parar de repetir a mentira. Escrito em 1978 e circulado clandestinamente, tem no verdureiro que expõe um cartaz em que ninguém acredita sua imagem mais citada.',
    'Václav Havel||Cartas a Olga': 'Cartas escritas à esposa durante os anos de prisão do autor, que passam de questões cotidianas a reflexões filosóficas sobre identidade, responsabilidade e sentido. As regras proibiam tratar de política e humor, o que empurrou a escrita para a abstração; são o principal registro do pensamento filosófico de Havel.',
    'Victor Hugo||Contemplações': 'Coletânea dividida em duas partes, antes e depois da morte da filha Léopoldine, afogada aos dezenove anos, e organizada como travessia do luto. Publicada em 1856 durante o exílio do autor, é sua obra poética mais pessoal e um dos maiores livros de dor da literatura francesa.',
    'Viktor Frankl||A Vontade de Sentido': 'Expõe os fundamentos teóricos da logoterapia, a abordagem que o autor fundou a partir da tese de que a busca de sentido, e não o prazer ou o poder, é a motivação primária humana. Publicado em 1969, é o complemento técnico de Em Busca de Sentido, para quem quer ir além do relato dos campos de concentração.',
    'Vincent van Gogh||A Noite Estrelada': 'Tela pintada de memória em 1889, da janela do quarto no asilo de Saint-Rémy, com o céu em espirais, o cipreste em primeiro plano e uma aldeia que não existia na paisagem real. É uma das pinturas mais reproduzidas do mundo e integra o acervo do MoMA, em Nova York.',
    'Vincent van Gogh||Os Girassóis': 'Série pintada em Arles em 1888 para decorar o quarto que Gauguin ocuparia na Casa Amarela, em tons de amarelo sobre amarelo, técnica considerada impossível até então. São as telas mais reconhecidas do autor e representam o breve período de esperança que antecedeu a crise entre os dois pintores.',
    'Vincent van Gogh||Cartas a Theo': 'Mais de seiscentas cartas ao irmão, que o sustentou financeiramente por toda a vida adulta, com relatos de leitura, técnica, dúvida e projeto. Publicadas a partir de 1914 pela viúva de Theo, são um dos melhores registros já escritos sobre o processo de criar e desmentem a imagem do pintor como gênio inconsciente.',
    'Vinicius de Moraes||Antologia Poética': 'Seleção feita pelo próprio autor de poemas das duas fases de sua obra, da produção mística da juventude aos sonetos amorosos e aos poemas coloquiais. Publicada em 1954, contém o Soneto de Fidelidade e o Soneto da Separação, e é também um documento sobre como o poeta lia a própria trajetória.',
    'Vinicius de Moraes||Orfeu da Conceição': 'Peça em verso que transpõe o mito de Orfeu e Eurídice para um morro carioca, com Orfeu como sambista e a morte rondando o carnaval. Encenada em 1956 com elenco inteiramente negro, música de Tom Jobim e cenário de Niemeyer, deu origem ao filme Orfeu Negro, Palma de Ouro em 1959, e ao início da bossa nova.',
    'Vinicius de Moraes||Livro de Sonetos': 'Reúne sonetos do autor sobre amor, fidelidade, separação e morte, na forma fixa que ele cultivou durante toda a vida, mesmo depois de se tornar letrista de bossa nova. Publicado em 1957, é a principal reunião temática de sua poesia em forma fixa e a fonte dos sonetos mais conhecidos da língua portuguesa moderna.',
    'Virginia Woolf||Rumo ao Farol': 'Acompanha a família Ramsay em uma casa de veraneio na Escócia, em três partes separadas por dez anos, com a guerra e várias mortes narradas entre colchetes na seção central. Publicado em 1927, é apontado como sua obra-prima e um dos romances centrais do modernismo pelo tratamento do tempo e da percepção.',
    'Voltaire||Dicionário Filosófico': 'Reúne verbetes curtos e provocadores sobre religião, tolerância, justiça e superstição, publicados anonimamente para escapar da censura e queimados em praça pública em várias cidades. Publicado em 1764 em formato de bolso para facilitar a circulação clandestina, é a obra mais combativa do autor.',
    'W. Edwards Deming||Saia da Crise': 'Apresenta os catorze pontos para a transformação da gestão e as sete doenças mortais que a corroem, deslocando a responsabilidade pela qualidade do operário para a direção da empresa. Publicado em 1986, trouxe aos Estados Unidos o que o autor ensinara ao Japão três décadas antes, e ataca a avaliação individual de desempenho.',
    'W. Edwards Deming||A Nova Economia': 'Apresenta o sistema de saber profundo, que articula compreensão de sistemas, variação, teoria do conhecimento e psicologia como base de qualquer transformação organizacional. Publicado em 1993, é a última obra do autor e a formulação mais madura de seu pensamento sobre gestão.',
    'W. Edwards Deming||Palestras no Japão': 'Conferências sobre controle estatístico de qualidade ministradas a partir de 1950 a engenheiros e, sobretudo, à alta direção das empresas japonesas, num país que reconstruía a indústria e tinha fama de baixa qualidade. Foram decisivas para a transformação industrial japonesa, e o prêmio nacional de qualidade do país leva seu nome.',
    'Walt Disney||Branca de Neve e os Sete Anões': 'Primeiro longa-metragem de animação em cores com som sincronizado, com mais de duzentos mil desenhos feitos à mão. Lançado em 1937 depois de o estúdio se hipotecar num projeto que a indústria chamava de loucura de Disney, foi a maior bilheteria de seu tempo e fundou o longa de animação como formato.',
    'Walt Disney||Disneylândia': 'Parque temático inaugurado em 1955 na Califórnia, concebido como espaço narrativo dividido em áreas temáticas, com controle rigoroso de perspectiva e circulação. Financiado em parte por um contrato de televisão, criou o formato do parque temático moderno e transformou a indústria mundial de entretenimento e turismo.',
    'Wangari Maathai||Movimento Cinturão Verde': 'Movimento fundado em 1977 que organizou mulheres rurais quenianas para plantar árvores, combatendo desmatamento e escassez de lenha e água enquanto gerava renda. Plantou dezenas de milhões de árvores, uniu conservação, direitos das mulheres e democracia, e rendeu à fundadora o Nobel da Paz em 2004.',
    'Wangari Maathai||Unbowed': 'Autobiografia que narra a infância rural no Quênia, a formação como bióloga nos Estados Unidos, a fundação do Movimento Cinturão Verde e os anos de perseguição, prisão e agressão pelo regime de Daniel arap Moi. Publicada em 2006, é documento central sobre a ligação entre meio ambiente, gênero e democracia na África.',
    'Warren Bennis||A Formação do Líder': 'Sustenta que liderar começa por conhecer-se, e que líderes se formam ao converter experiência própria — sobretudo as provações e os fracassos — em capacidade de conduzir outros. Publicado em 1989 a partir de entrevistas com dezenas de líderes, é um dos textos fundadores dos estudos modernos de liderança.',
    'Warren Bennis||Os Gênios da Organização': 'Estuda grupos que produziram realizações extraordinárias — o Projeto Manhattan, o time original do Macintosh, a Disney dos primeiros anos — e identifica o que tinham em comum. Publicado em 1997, deslocou o foco dos estudos de liderança do indivíduo para o grupo e é referência em equipes de alto desempenho.',
    'Warren Buffett||Os Ensaios de Warren Buffett': 'Organização temática das cartas anuais do investidor aos acionistas da Berkshire Hathaway, feita por Lawrence Cunningham com aprovação do autor. Cobre governança, contabilidade, fusões, avaliação e investimento em valor, e é considerada a melhor porta de entrada ao pensamento de Buffett em forma de livro.',
    'William James||As Variedades da Experiência Religiosa': 'Estuda a religião a partir da experiência individual — conversões, misticismo, santidade — em vez de doutrinas e instituições, avaliando seus efeitos sobre a vida de quem a vive. Publicada em 1902, é obra fundadora da psicologia da religião e uma das fontes intelectuais reconhecidas do programa de Alcoólicos Anônimos.',
    'William James||Pragmatismo': 'Apresenta o pragmatismo como método para resolver disputas filosóficas examinando as consequências práticas de cada alternativa, e como teoria da verdade entendida como aquilo que funciona na experiência. Publicado em 1907, difundiu a corrente que é a principal contribuição americana à filosofia do século XX.',
    'William James||A Vontade de Crer': 'Defende que, diante de questões vitais, genuínas e indecidíveis por evidência, é legítimo decidir com base na própria natureza afetiva em vez de suspender o juízo indefinidamente. Publicado em 1896 como resposta à ética da crença de William Kingdon Clifford, é um dos textos mais debatidos da filosofia da religião.',
    'William Shakespeare||Macbeth': 'Três bruxas dizem a um general escocês que ele será rei, e a profecia se cumpre pelo caminho mais sangrento possível, com Lady Macbeth empurrando o marido e desmoronando depois. Escrita por volta de 1606, é a mais curta das grandes tragédias e a mais direta sobre ambição, culpa e o efeito corrosivo do poder tomado à força.',
    'William Shakespeare||Romeu e Julieta': 'Dois adolescentes de famílias inimigas se casam em segredo em Verona e morrem por um erro de comunicação e pela pressa dos adultos em torno deles. Escrita por volta de 1595, é a história de amor mais encenada e mais adaptada do mundo, e seu enredo é menos sobre paixão do que sobre ódio herdado.',
    'William Shakespeare||Rei Lear': 'Um rei velho divide o reino entre as filhas pelas razões erradas, exila a única sincera e é destruído pelas outras duas, enlouquecendo numa tempestade. Escrita por volta de 1606, é considerada por muitos a maior tragédia já escrita e foi encenada por quase dois séculos com final feliz, por ser tida como insuportável.',
    'William Shakespeare||Sonetos': 'Cento e cinquenta e quatro poemas sobre tempo, desejo, ciúme e a permanência que só o verso concede, dirigidos em sua maior parte a um jovem e, depois, a uma dama morena. Publicados em 1609, provavelmente sem autorização do autor, contêm o soneto 18 e são objeto de debate biográfico há mais de quatro séculos.',
    'William Shakespeare||A Tempestade': 'Próspero, duque destituído e exilado numa ilha com a filha e dois servos, provoca um naufrágio para trazer seus inimigos até ele — e acaba escolhendo o perdão em vez da vingança. Escrita por volta de 1611, é a última peça que Shakespeare escreveu sozinho e é lida como sua despedida do teatro.',
    'Wolfgang Amadeus Mozart||Réquiem': 'Missa de réquiem encomendada anonimamente e deixada inacabada na morte do compositor, concluída por seu aluno Süssmayr. Composta em 1791 enquanto ele trabalhava também em A Flauta Mágica, é uma das obras corais mais executadas do repertório ocidental e a mais cercada de mitologia da história da música.',
    'Wolfgang Amadeus Mozart||As Bodas de Fígaro': 'Ópera em que criados driblam o senhor que pretende exercer direitos sobre a noiva de um deles, num dia de enganos, disfarces e reconciliação. Estreada em 1786 a partir de uma peça de Beaumarchais proibida na França, é marco na caracterização musical de personagens e uma das óperas mais executadas do mundo.',
    'Wolfgang Amadeus Mozart||Sinfonia nº 40': 'Sinfonia em sol menor, uma das duas únicas em tonalidade menor do compositor, marcada pelo tema inicial inquieto e pela densidade do último movimento. Composta em 1788 num período de dificuldades financeiras, junto com as sinfonias 39 e 41 em cerca de seis semanas e sem encomenda conhecida — enigma biográfico até hoje.',
    'Zenão de Cítio||Fragmentos e testemunhos': 'Conjunto de citações e relatos indiretos sobre o fundador do estoicismo, cuja obra se perdeu inteiramente, preservados sobretudo por Diógenes Laércio. Zenão ensinava sob o pórtico pintado de Atenas — a stoa, que deu nome à escola — e a tradição conta que chegou à filosofia após um naufrágio que o deixou sem nada.',
    'Zumbi dos Palmares||Quilombo dos Palmares': 'Confederação de comunidades formada por pessoas que escaparam da escravidão na serra da Barriga, atual Alagoas, com agricultura, organização política própria e defesa militar. Resistiu por quase um século a dezenas de expedições; Zumbi assumiu a liderança em 1678 ao recusar um acordo de paz que não libertava todos.'
  };
  function aplicar() {
    var n = 0,
      f = [];
    for (var k in D) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (!l) {
        f.push(k);
        continue;
      }
      var ok = false;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          if (!l[j].dAntiga) l[j].dAntiga = l[j].d;
          l[j].d = D[k];
          delete l[j].descricaoPendente;
          ok = true;
          n++;
        }
      if (!ok) f.push(k);
    }
    if (f.length) console.warn('Fase 58g · não localizadas:', f.join(' | '));
    console.log('MeMotiva · Fase 58g: ' + n + ' descrições ampliadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 59 — sincroniza contadores dos relatórios com o estado real ===== */
(function () {
  function aplicar() {
    // 1. Obras com descrição editorial: recomputa a partir do catálogo
    var comDesc = 0,
      total = 0;
    for (var a in OBRAS) {
      for (var i = 0; i < OBRAS[a].length; i++) {
        total++;
        var d = String(OBRAS[a][i].d || '');
        if (d.length >= 110 && !OBRAS[a][i].descricaoPendente) comDesc++;
      }
    }
    if (typeof RELATORIO_FASE8 === 'object' && RELATORIO_FASE8) RELATORIO_FASE8.descricoes = comDesc;

    // 2. PROCEDENCIA_RELATORIO: os contadores de F20 são históricos, do momento
    //    da conversão. Rotula-os como tal para não serem lidos como estado atual.
    if (typeof PROCEDENCIA_RELATORIO === 'function' && !PROCEDENCIA_RELATORIO.__rotulado) {
      var orig = PROCEDENCIA_RELATORIO;
      window.PROCEDENCIA_RELATORIO = function () {
        console.log('Classes atribuídas na Fase 20 (registro histórico da conversão, não o estado atual do acervo):');
        return orig.apply(this, arguments);
      };
      window.PROCEDENCIA_RELATORIO.__rotulado = true;
    }

    console.log('MeMotiva · Fase 59: contadores sincronizados — ' + comDesc + ' de ' + total + ' obras com descrição editorial completa.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

/* ===== FASE 60a — obras verificáveis dos panoramas órfãos (parte 1) ===== */
(function () {
  var OB = {
    'Papa Francisco': [
      ["Laudato Si'", 'documento', 2015, 'Encíclica sobre o cuidado da casa comum, que trata a crise ambiental e a desigualdade social como um só problema e critica o consumo e a tecnocracia. Publicada meses antes do Acordo de Paris, foi a primeira encíclica dedicada ao meio ambiente e teve repercussão ampla fora da Igreja, citada em documentos de política climática.'],
      ['Evangelii Gaudium', 'documento', 2013, 'Exortação apostólica que abre o pontificado e propõe uma Igreja em saída, voltada às periferias, criticando a economia da exclusão e a idolatria do dinheiro. É considerada o texto programático do papado e a melhor síntese das prioridades que o autor adotaria nos anos seguintes.'],
      ['Fratelli Tutti', 'documento', 2020, 'Encíclica sobre fraternidade e amizade social, publicada durante a pandemia, que propõe a parábola do bom samaritano como critério político e critica o populismo, o racismo e a indiferença diante do migrante.']
    ],
    'Gloria Steinem': [
      ['Uma Ação Ultrajante e Rebeldias Cotidianas', 'ensaio', 1983, 'Reúne reportagens e ensaios da autora, entre eles o relato de sua infiltração como coelhinha da Playboy em 1963 para denunciar as condições de trabalho, e o perfil de Marilyn Monroe. É a principal coletânea de seu jornalismo e um documento sobre a segunda onda feminista americana.'],
      ['Minha Vida na Estrada', 'memoria', 2015, 'Memórias organizadas em torno das viagens que a autora fez por cinco décadas como militante e organizadora, das reuniões em salas de igreja às campanhas nacionais. Trata da militância como trabalho de escuta e de estrada, e não de palanque.'],
      ['Revista Ms.', 'feito', 1972, 'Revista fundada pela autora com outras jornalistas, a primeira de circulação nacional nos Estados Unidos dirigida e controlada por mulheres. A primeira edição esgotou em oito dias e a publicação tornou-se o principal veículo impresso do feminismo americano.']
    ],
    'Djamila Ribeiro': [
      ['Lugar de Fala', 'ensaio', 2017, 'Apresenta o conceito de lugar de fala a partir do feminismo negro e da teoria do ponto de vista, esclarecendo que ele trata da posição social de quem fala e não de autorização para falar. Publicado pela coleção Feminismos Plurais, que a autora coordena, levou o termo ao debate público brasileiro.'],
      ['Pequeno Manual Antirracista', 'ensaio', 2019, 'Reúne onze capítulos curtos com orientações práticas sobre reconhecer privilégios, enfrentar o racismo cotidiano e transformar convicção em ação. Foi um dos livros brasileiros mais vendidos de não ficção em seu ano e é adotado em formações em empresas e escolas.'],
      ['Quem Tem Medo do Feminismo Negro?', 'ensaio', 2018, 'Reúne textos e crônicas publicados pela autora na imprensa, junto com um relato autobiográfico sobre sua formação. Documenta a entrada do feminismo negro no debate público brasileiro na década de 2010.']
    ],
    'Akio Morita': [
      ['Made in Japan', 'memoria', 1986, 'Memórias do cofundador da Sony sobre a reconstrução industrial japonesa do pós-guerra e a decisão de fabricar produtos com marca própria em vez de produzir para terceiros. Explica por dentro como o rótulo made in Japan deixou de ser sinônimo de imitação barata, e foi um dos livros de negócios mais lidos dos anos 1980.'],
      ['Walkman', 'invento', 1979, 'Toca-fitas portátil com fones de ouvido e sem função de gravação, lançado contra a opinião da própria equipe de vendas da Sony. Criou o hábito da escuta musical privada em movimento, vendeu centenas de milhões de unidades e é apontado como um dos produtos que mais alteraram o comportamento cotidiano no século XX.']
    ],
    'Konosuke Matsushita': [
      ['Não Vivemos Só de Pão', 'ensaio', 1984, 'Reúne reflexões do fundador da Panasonic sobre a função social da empresa, sustentando que o propósito de um negócio é reduzir a pobreza produzindo bens acessíveis a todos. Formulou a filosofia de gestão de longo prazo que tornou a empresa caso de estudo internacional.'],
      ['Instituto PHP', 'feito', 1946, 'Instituto de pesquisa fundado pelo autor no pós-guerra sob o lema Paz e Felicidade pela Prosperidade, dedicado a estudar como a atividade econômica pode produzir bem-estar social. Publica até hoje e mantém uma escola de formação de lideranças públicas no Japão.']
    ],
    'Lou Gerstner': [
      ['Quem Disse que os Elefantes Não Dançam?', 'memoria', 2002, 'Relata a recuperação da IBM nos anos 1990, quando a empresa dava prejuízos bilionários e o plano em curso era dividi-la em treze companhias. Gerstner, vindo de fora do setor, manteve a empresa unida e a reposicionou em serviços — decisão que ele explica no livro e que é caso de estudo em estratégia e cultura organizacional.']
    ],
    'Indra Nooyi': [['Uma Vida Plena', 'memoria', 2021, 'Memórias da executiva que dirigiu a PepsiCo por doze anos, da infância em Madras à presidência de uma das maiores companhias de bens de consumo do mundo. Trata da reorientação do portfólio para produtos mais saudáveis, sob resistência de investidores, e da tensão entre carreira executiva e vida familiar.']],
    'Paul Graham': [
      ['Hackers e Pintores', 'ensaio', 2004, 'Reúne ensaios sobre programação, criação e o modo como se constrói uma empresa iniciante, defendendo que escrever software é mais próximo de pintar do que de engenharia. É a coletânea mais conhecida do autor e influenciou a cultura técnica do Vale do Silício.'],
      ['Y Combinator', 'feito', 2005, 'Aceleradora fundada pelo autor com sócios, que criou o formato do investimento em lotes de empresas muito jovens, com capital pequeno e mentoria intensiva. Financiou empresas como Airbnb, Stripe, Dropbox e Reddit e serviu de modelo para aceleradoras em todo o mundo.']
    ],
    'Eric Hoffer': [
      ['O Verdadeiro Crente', 'ensaio', 1951, 'Analisa o que leva pessoas a aderir a movimentos de massa — religiosos, políticos ou nacionalistas — e conclui que o motor comum é a frustração consigo mesmo, e não a doutrina específica. Escrito por um estivador autodidata que trabalhava no porto de São Francisco, é um clássico da psicologia política, citado por Eisenhower.'],
      ['A Provação da Mudança', 'ensaio', 1963, 'Reúne ensaios sobre como grupos e indivíduos reagem a transformações que não escolheram, tratando a mudança como perda de identidade antes de ser ganho. Recebeu a Medalha Presidencial da Liberdade em 1983, concedida ao autor por sua obra.']
    ],
    'Ralph Nader': [['Perigoso em Qualquer Velocidade', 'ensaio', 1965, 'Documenta como fabricantes de automóveis americanos conheciam falhas graves de segurança e deixavam de corrigi-las por cálculo de custo, com foco no Chevrolet Corvair. Levou à aprovação da lei federal de segurança veicular em 1966 e fundou o movimento moderno de defesa do consumidor nos Estados Unidos.']],
    'E. M. Forster': [
      ['Uma Passagem para a Índia', 'romance', 1924, 'Uma inglesa acusa um médico indiano de agressão durante um passeio a cavernas, e o julgamento expõe a impossibilidade de amizade real sob o domínio colonial. É o último romance publicado pelo autor em vida e uma das obras mais importantes da literatura inglesa sobre o império.'],
      ['Howards End', 'romance', 1910, 'Três famílias de classes diferentes disputam, sem saber, o destino de uma casa no campo inglês. O livro traz a epígrafe apenas conecte, formulação que resume o projeto do autor de unir o intelecto e a paixão, o interior e o exterior da vida.'],
      ['Aspectos do Romance', 'ensaio', 1927, 'Série de conferências em Cambridge sobre os elementos do romance — história, personagens, enredo, ritmo — em que o autor formula a distinção entre personagens planos e redondos, hoje corrente em teoria literária.']
    ],
    'Richard Bach': [
      ['Fernão Capelo Gaivota', 'romance', 1970, 'Fábula sobre uma gaivota que se recusa a voar apenas para comer e busca a perfeição do voo, sendo por isso expulsa do bando. Vendeu mais de quarenta milhões de exemplares e foi um dos maiores fenômenos editoriais dos anos 1970, lido como parábola sobre vocação e inconformidade.'],
      ['Ilusões', 'romance', 1977, 'Um piloto de aviões de acrobacia encontra outro que afirma ser um messias que desistiu da função, e recebe dele um manual sobre a natureza da realidade. É o segundo grande sucesso do autor e mantém o registro de fábula filosófica de Fernão Capelo Gaivota.']
    ],
    'George S. Patton': [['A Guerra Como Eu a Conheci', 'memoria', 1947, 'Diários e cartas do general sobre as campanhas do norte da África, da Sicília e da Europa, publicados postumamente. Trazem o relato direto do avanço do Terceiro Exército pela França e as observações táticas de um comandante conhecido pela velocidade de manobra e pela rispidez pública.']],
    'Wernher von Braun': [
      ['Foguete Saturno V', 'invento', 1967, 'Foguete de três estágios projetado sob direção do autor na NASA, o mais potente já construído e operado com sucesso, que levou as missões Apollo à Lua. Com 110 metros de altura, realizou treze lançamentos sem falha catastrófica entre 1967 e 1973.'],
      ['A Conquista do Espaço', 'ciencia', 1953, 'Obra de divulgação escrita com Willy Ley e ilustrada por Chesley Bonestell, que apresentou ao público americano a viagem espacial como projeto de engenharia realizável, e não como ficção. Foi decisiva para formar apoio popular ao programa espacial na década seguinte.']
    ],
    'Charles Spurgeon': [
      ['O Tesouro de Davi', 'tratado', 1885, 'Comentário completo sobre os Salmos, em sete volumes, escrito ao longo de vinte anos, reunindo exposição, notas e extratos de comentadores de vários séculos. É a obra mais extensa do autor e permanece em uso em seminários protestantes.'],
      ['Sermões', 'discurso', 1917, 'Coleção dos sermões pregados pelo autor em Londres, publicados semanalmente por quase quatro décadas e reunidos em mais de sessenta volumes. É o maior corpo de sermões publicado por um único autor na história do cristianismo.']
    ],
    'Erma Bombeck': [
      ['A Grama é Sempre Mais Verde sobre a Fossa Séptica', 'cronica', 1976, 'Reúne crônicas sobre a vida doméstica suburbana americana, escritas com humor sobre filhos, vizinhos, eletrodomésticos e a distância entre a revista e a realidade. Foi um dos maiores sucessos editoriais da autora, cuja coluna chegou a ser publicada em novecentos jornais.'],
      ['Se a Vida é um Prato de Cerejas, o que Faço no Caroço?', 'cronica', 1971, 'Primeira grande coletânea das crônicas da autora, que transformou a dona de casa suburbana em personagem literária com voz própria. Publicada em 1971, estabeleceu um registro de humor doméstico imitado por décadas na imprensa americana.']
    ],
    'Friedrich Schleiermacher': [
      ['Sobre a Religião', 'ensaio', 1799, 'Dirigido aos que desprezavam a religião entre os intelectuais românticos alemães, define a religião não como doutrina nem como moral, mas como sentimento e intuição do infinito. É o texto fundador da teologia protestante moderna.'],
      ['Hermenêutica', 'tratado', 1838, 'Reúne preleções em que o autor transforma a interpretação de textos, até então aplicada caso a caso à Bíblia e aos clássicos, em disciplina geral com regras próprias. Publicada postumamente, fundou a hermenêutica moderna e influenciou Dilthey, Heidegger e Gadamer.']
    ],
    'Pierre Abélard': [
      ['História das Minhas Calamidades', 'memoria', 1132, 'Carta autobiográfica em que o autor narra sua ascensão como lógico em Paris, a relação com Heloísa, a castração ordenada pelo tio dela e as condenações que sofreu por heresia. É um dos primeiros relatos autobiográficos da Idade Média e fonte central sobre a vida intelectual do século XII.'],
      ['Sim e Não', 'tratado', 1121, 'Reúne cerca de cento e cinquenta questões teológicas com citações de autoridades da Igreja que se contradizem entre si, sem resolver as contradições, obrigando o leitor a raciocinar. O método de confrontar autoridades divergentes tornou-se a base da escolástica e da forma de ensino universitário medieval.']
    ],
    'Tales de Mileto': [
      [
        'Testemunhos sobre a água como princípio',
        'tratado',
        -585,
        'Tales nada escreveu que tenha sobrevivido; sua doutrina é conhecida sobretudo por Aristóteles, que o apresenta como o primeiro a buscar um princípio material único para todas as coisas, identificando-o com a água. É por esse gesto — explicar a natureza sem recorrer aos deuses — que ele é considerado o iniciador da filosofia ocidental.'
      ],
      ['Previsão do eclipse de 585 a.C.', 'feito', -585, 'Segundo Heródoto, Tales previu o eclipse solar que interrompeu uma batalha entre lídios e medos, levando os exércitos a fazer as pazes. A previsão, provavelmente baseada em registros babilônicos de periodicidade, é o primeiro feito astronômico atribuído a um grego nomeado.']
    ],
    Protágoras: [
      ['Sobre a Verdade', 'tratado', -450, 'Obra perdida de que sobrevive a abertura, citada por Platão e Sexto Empírico: o homem é a medida de todas as coisas, das que são enquanto são e das que não são enquanto não são. É a formulação mais antiga do relativismo na filosofia ocidental e o alvo central do diálogo Teeteto, de Platão.'],
      ['Sobre os Deuses', 'tratado', -420, 'Tratado perdido cuja primeira frase sobreviveu, em que o autor afirma não ter como saber se os deuses existem ou não, dada a obscuridade do assunto e a brevidade da vida humana. Segundo a tradição antiga, o texto lhe custou a expulsão de Atenas e a queima pública de seus livros.']
    ],
    Pitágoras: [
      ['Teorema de Pitágoras', 'ciencia', -530, 'Relação entre os lados do triângulo retângulo conhecida por babilônios e egípcios séculos antes, mas cuja demonstração geral a tradição grega atribui à escola pitagórica. Nada escrito por Pitágoras sobreviveu, e é impossível separar sua contribuição pessoal da de seus discípulos.'],
      ['Escola pitagórica', 'feito', -530, 'Comunidade fundada em Crotona, no sul da Itália, em que matemática, música, astronomia e religião eram tratadas como uma só investigação, com regras de vida comum e sigilo. Formulou a descoberta das razões numéricas na harmonia musical e a ideia de que a realidade tem estrutura matemática, que atravessou Platão e chegou à ciência moderna.']
    ],
    'Dom Pedro II': [
      ['Diário do Imperador', 'diario', 1891, 'Registros pessoais mantidos ao longo de décadas, com anotações sobre leituras, ciência, política e viagens. Publicados no século XX, são a principal fonte em primeira pessoa sobre o segundo reinado e revelam um monarca mais interessado em astronomia e línguas do que em cerimonial.'],
      ['Lei Áurea', 'documento', 1888, 'Lei que aboliu a escravidão no Brasil, sancionada pela princesa Isabel na ausência do imperador, em viagem à Europa. Último país das Américas a abolir, o Brasil o fez sem qualquer medida de reparação ou integração das pessoas libertadas — omissão cujos efeitos a historiografia estuda até hoje.']
    ],
    'Ulysses Guimarães': [
      ['Discurso de promulgação da Constituição de 1988', 'discurso', 1988, 'Discurso proferido como presidente da Assembleia Constituinte na promulgação da Constituição, em que a chamou de Constituição cidadã e declarou ódio e nojo à ditadura. É um dos discursos mais citados da redemocratização brasileira.'],
      ['Campanha das Diretas Já', 'feito', 1984, 'Mobilização pela emenda que restabeleceria a eleição direta para presidente, da qual o autor foi uma das principais lideranças e a voz mais reconhecível nos comícios. A emenda foi derrotada no Congresso, mas a campanha levou milhões às ruas e acelerou o fim do regime militar.']
    ],
    'Michelle Bachelet': [
      ['Reforma educacional chilena', 'feito', 2016, 'Conjunto de leis aprovadas em seu segundo mandato que acabou com o lucro, a seleção e o copagamento nas escolas que recebem recursos públicos, e criou a gratuidade no ensino superior para os estudantes de menor renda. Respondeu diretamente às grandes mobilizações estudantis chilenas de 2006 e 2011.'],
      ['Relatórios da ONU sobre direitos humanos', 'documento', 2018, 'Conjunto de relatórios produzidos sob sua direção como Alta Comissária das Nações Unidas para os Direitos Humanos, entre 2018 e 2022, sobre situações na Venezuela, nas Filipinas, no Sri Lanka e em Xinjiang. O relatório sobre a região chinesa, publicado nos minutos finais de seu mandato, teve grande repercussão diplomática.']
    ],
    'Christine Lagarde': [
      ['Relatórios do FMI sobre desigualdade e gênero', 'documento', 2013, 'Conjunto de estudos produzidos sob sua direção no Fundo Monetário Internacional que passou a tratar desigualdade e participação econômica das mulheres como variáveis macroeconômicas, e não como questões sociais à parte. Representou uma mudança de agenda em uma instituição historicamente centrada em ajuste fiscal.']
    ],
    'Rosalynn Carter': [
      ['Cuidando de Quem Cuida', 'manual', 1994, 'Trata da situação de quem cuida em casa de familiares doentes ou idosos, com orientações práticas e defesa de políticas públicas de apoio. Foi um dos primeiros livros a tratar o cuidador como sujeito de política pública nos Estados Unidos e deu origem a um instituto dedicado ao tema.'],
      ['Lei de Saúde Mental de 1980', 'feito', 1980, 'Legislação federal americana resultante da comissão presidencial sobre saúde mental que a autora presidiu, ampliando o financiamento de serviços comunitários. Foi revogada no ano seguinte pelo governo seguinte, mas suas recomendações orientaram políticas estaduais por décadas.']
    ]
  };
  function aplicar() {
    var nObras = 0,
      nPessoas = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) {
        OBRAS[nome] = [];
        nPessoas++;
      }
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nObras++;
      }
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    console.log('MeMotiva · Fase 60a: +' + nObras + ' obras catalogadas para ' + nPessoas + ' pessoas recuperadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    Osho: [
      ['O Livro dos Segredos', 'livro', 1974, 'Comentário extenso sobre as 112 técnicas de meditação do Vigyan Bhairav Tantra, transcrito de palestras dadas na Índia. Osho traduz um texto tântrico antigo para a linguagem da experiência cotidiana, tratando a meditação como observação e não como esforço. É a obra mais volumosa de seu corpus e a principal referência para quem estuda seu método.'],
      [
        'Coragem: O Prazer de Viver Perigosamente',
        'livro',
        1999,
        'Reunião de palestras em que Osho distingue a coragem da ausência de medo, descrevendo-a como a disposição de seguir adiante mesmo com o medo presente. O livro trata da insegurança como condição inevitável de qualquer escolha viva e critica a busca de garantias. Integra a série Insights para uma Nova Maneira de Viver, sua coleção de maior circulação no Ocidente.'
      ],
      [
        'Consciência: A Chave para Viver em Equilíbrio',
        'livro',
        2001,
        'Exposição do que Osho chama de atenção testemunhal: observar pensamentos e emoções sem se identificar com eles. O texto contrasta reação automática e resposta consciente, e apresenta a consciência como prática aplicável ao trabalho e às relações, não como retiro do mundo. Compõe a mesma série de insights e é usado com frequência como porta de entrada a seu pensamento.'
      ]
    ],
    'Mark Zuckerberg': [
      [
        'Facebook',
        'feito',
        2004,
        'Rede social criada em Harvard e aberta ao público em 2006, que transformou a forma como bilhões de pessoas mantêm contato e consomem informação. O projeto consolidou o modelo de plataforma sustentada por publicidade segmentada e trouxe para o centro do debate público as questões de privacidade, moderação e desinformação. Tornou-se referência obrigatória na história da internet comercial.'
      ],
      [
        'Carta aos investidores na abertura de capital do Facebook',
        'carta',
        2012,
        'Documento anexado ao registro de oferta pública em que Zuckerberg define a empresa como movida por uma missão social antes que por lucro, e descreve a cultura interna que chamou de The Hacker Way. A carta defende iteração rápida, tolerância ao erro e decisões tomadas por quem executa. Passou a ser citada como exemplo de como fundadores comunicam valores a acionistas.'
      ]
    ],
    'Ban Ki-moon': [
      [
        'Agenda 2030 e os Objetivos de Desenvolvimento Sustentável',
        'documento',
        2015,
        'Conjunto de dezessete objetivos aprovado por unanimidade pela Assembleia Geral da ONU durante sua gestão como secretário-geral, substituindo as Metas do Milênio. O texto amarra pobreza, saúde, educação, clima e desigualdade em uma agenda única com prazo definido. Tornou-se a principal referência internacional para políticas públicas de desenvolvimento.'
      ],
      [
        'Mobilização diplomática para o Acordo de Paris',
        'feito',
        2015,
        'Articulação sustentada ao longo de quase uma década para levar cento e noventa e cinco países a um compromisso climático comum, incluindo a cúpula de 2014 em Nova York e a negociação direta com as maiores economias. O esforço priorizou adesão voluntária e metas nacionais em vez de imposição de limites. É apontado como a realização central de seus dois mandatos.'
      ]
    ],
    'George Washington Carver': [
      [
        'Como Cultivar o Amendoim e 105 Maneiras de Prepará-lo para o Consumo Humano',
        'manual',
        1916,
        'Boletim de extensão rural publicado pelo Instituto Tuskegee com instruções de plantio e mais de cem receitas e usos para o amendoim. O objetivo era dar mercado a uma cultura que recuperava o solo esgotado pelo algodão, oferecendo aos pequenos agricultores negros do sul dos Estados Unidos uma alternativa econômica concreta. Foi o mais difundido de seus quarenta e quatro boletins.'
      ],
      [
        'Pesquisas sobre rotação de culturas no sul dos Estados Unidos',
        'ciencia',
        1900,
        'Programa de experimentação agrícola conduzido em Tuskegee que demonstrou como alternar algodão com amendoim, batata-doce e leguminosas restaurava o nitrogênio do solo. Carver traduziu os resultados em linguagem acessível e os levou pessoalmente às fazendas por meio de carroças-escola. O trabalho mudou a prática agrícola de toda uma região.'
      ]
    ],
    'Hubert H. Humphrey': [
      [
        'Discurso sobre direitos civis na Convenção Democrata de 1948',
        'discurso',
        1948,
        'Intervenção de dez minutos em que Humphrey, então prefeito de Minneapolis, exigiu que o partido assumisse uma plataforma explícita de direitos civis, dizendo que era hora de sair da sombra dos direitos dos estados para a luz dos direitos humanos. A proposta foi aprovada e provocou a retirada de delegações do sul. O discurso definiu sua carreira nacional.'
      ],
      ['Lei dos Direitos Civis de 1964', 'feito', 1964, 'Condução da lei no Senado como líder da maioria encarregado da votação, incluindo a quebra da obstrução mais longa da história da casa até então, com oitenta e três dias de debate. Humphrey organizou a base bipartidária que garantiu os votos necessários. A lei proibiu a segregação em locais públicos e a discriminação no emprego.'],
      ['A Educação de um Homem Público', 'memoria', 1976, 'Autobiografia escrita no fim da vida, em que narra a trajetória do interior de Dakota do Sul à vice-presidência e à derrota de 1968. O livro é franco sobre o custo político de defender a Guerra do Vietnã por lealdade a Lyndon Johnson. Ficou como um dos relatos mais honestos de como funciona o compromisso na política americana.']
    ],
    'Brian Chesky': [
      [
        'Airbnb',
        'feito',
        2008,
        'Plataforma de hospedagem entre pessoas fundada em São Francisco a partir da ideia de alugar colchões infláveis durante uma conferência. O serviço criou um mercado global de acomodações baseado em confiança entre estranhos, com sistema de avaliações mútuas e verificação de identidade. Alterou a economia do turismo e abriu a discussão regulatória sobre aluguel de curta duração em grandes cidades.'
      ],
      [
        'Carta aos funcionários sobre a redução de equipe',
        'carta',
        2020,
        'Comunicado divulgado publicamente no início da pandemia, quando a empresa demitiu cerca de um quarto do quadro. Chesky detalhou o raciocínio da decisão, o pacote oferecido aos demitidos e o que a empresa deixaria de fazer, em vez de recorrer a linguagem corporativa evasiva. O texto passou a ser citado em escolas de administração como modelo de comunicação em crise.'
      ]
    ],
    'Ann Landers': [
      [
        'Coluna Ask Ann Landers',
        'artigo',
        1955,
        'Coluna diária de conselhos assinada por Esther Pauline Lederer sob o pseudônimo herdado em 1955, publicada por mais de quatro décadas em cerca de mil e duzentos jornais. Respondia a cartas sobre casamento, filhos, dinheiro e doença com franqueza e humor curto, e abriu espaço em jornais de família para assuntos antes silenciados, como alcoolismo e abuso. Foi por muitos anos a coluna mais lida dos Estados Unidos.'
      ],
      ['Enciclopédia Ann Landers de A a Z', 'livro', 1978, 'Compilação organizada em verbetes das orientações acumuladas em mais de vinte anos de coluna, com colaboração de médicos e especialistas em cada tema. O volume funciona como manual doméstico de referência sobre saúde, relações e conflitos familiares. Reúne em forma consultável o repertório que a tornou uma autoridade popular.']
    ],
    'Christopher McCandless': [
      [
        'Diário e anotações de Christopher McCandless',
        'diario',
        1992,
        'Registro breve mantido durante os cento e treze dias em que viveu isolado num ônibus abandonado na Trilha Stampede, no Alasca, somado às inscrições que deixou nas paredes do veículo e às anotações nas margens dos livros que carregava. O material documenta sua experiência de subsistência e a mudança de tom nas últimas semanas. Foi reproduzido em Na Natureza Selvagem, de Jon Krakauer, que o tornou público.'
      ]
    ],
    'John Templeton': [
      [
        'Templeton Growth Fund',
        'feito',
        1954,
        'Fundo de investimento pioneiro na compra de ações fora dos Estados Unidos, fundado sobre a tese de que as melhores oportunidades aparecem onde o pessimismo é maior. Templeton comprou papéis europeus e japoneses quando eram descartados pelo mercado americano e sustentou retornos elevados por quase quatro décadas. Consolidou a prática do investimento global em valor.'
      ],
      ['O Humilde Caminho para a Verdade', 'livro', 1981, 'Ensaio em que Templeton defende que religião e ciência compartilham a mesma disciplina básica, a de reconhecer o quanto ainda não se sabe. O texto propõe tratar afirmações espirituais com abertura à revisão, em vez de certeza fechada. É a exposição mais clara da posição que o levou a criar o prêmio e a fundação que levam seu nome.'],
      [
        'Fundação John Templeton',
        'feito',
        1987,
        'Instituição criada para financiar pesquisa na fronteira entre ciência, filosofia e religião, com foco em temas como consciência, livre-arbítrio, gratidão e propósito. A fundação mantém o Prêmio Templeton, concedido desde 1972 a figuras que ampliam a compreensão espiritual do ser humano. Tornou-se uma das maiores financiadoras privadas desse campo.'
      ]
    ],
    'Groucho Marx': [
      [
        'Groucho e Eu',
        'memoria',
        1959,
        'Autobiografia em que Groucho narra a infância pobre em Nova York, os anos de vaudeville com os irmãos e a passagem para o cinema, mantendo no texto escrito o mesmo tempo de piada dos palcos. O livro mistura relato factual e exagero declarado, e é franco sobre a instabilidade financeira que atravessou a família. Tornou-se referência sobre o teatro popular americano do início do século.'
      ],
      ['Uma Noite na Ópera', 'filme', 1935, 'Comédia dirigida por Sam Wood em que os irmãos Marx sabotam uma companhia de ópera, com a cena da cabine de navio que se enche de gente como sequência mais citada do cinema cômico. O filme depurou a anarquia das obras anteriores em uma estrutura narrativa mais firme, sem perder o improviso verbal. É considerado o ponto mais alto da carreira do grupo.'],
      ['Memórias de um Amante Ardente', 'memoria', 1963, 'Segundo volume autobiográfico, centrado nos casamentos, nas frustrações amorosas e na vaidade masculina, tratados como matéria de autoironia. Groucho constrói o livro como sequência de episódios curtos em que ele mesmo é sempre o alvo da piada. Mostra o humorista trabalhando a própria velhice como tema.']
    ],
    'W. Somerset Maugham': [
      ['Servidão Humana', 'romance', 1915, 'Romance de formação largamente autobiográfico que acompanha Philip Carey, órfão de pé torto, da infância rígida na casa do tio pastor aos estudos de medicina em Londres e à obsessão por uma mulher que o humilha. O livro examina como a busca de sentido sobrevive à perda da fé e ao fracasso amoroso. É tido como a obra central de Maugham.'],
      ['A Lua e Seis Vinténs', 'romance', 1919, 'História de um corretor londrino que abandona família e emprego aos quarenta anos para pintar, inspirada de forma livre na trajetória de Paul Gauguin. O narrador tenta compreender uma vocação que ignora qualquer obrigação moral, sem julgá-la nem absolvê-la. O romance é uma das formulações mais duras da literatura sobre o preço da arte.'],
      ['O Fio da Navalha', 'romance', 1944, 'Acompanha Larry Darrell, piloto marcado pela Primeira Guerra, que recusa a carreira e o casamento previstos para buscar sentido na Europa e na Índia. O contraste com personagens dedicados a dinheiro e posição social organiza o livro. Foi um dos primeiros romances de grande público a tratar a espiritualidade oriental com seriedade.'],
      ['Resumindo', 'memoria', 1938, 'Balanço feito aos sessenta e quatro anos sobre o próprio ofício, em que Maugham expõe sem cerimônia o que aprendeu como dramaturgo e romancista, e o que considera seus limites. O texto discute estilo, público e a relação entre observação e invenção. É leitura frequente em cursos de escrita pela clareza com que descreve o trabalho literário.']
    ],
    'Audrey Hepburn': [
      ['A Princesa e o Plebeu', 'filme', 1953, 'Comédia romântica dirigida por William Wyler em que Hepburn interpreta uma princesa que escapa do protocolo para passar um dia anônima em Roma. A atuação lhe rendeu o Oscar em seu primeiro papel principal em Hollywood e definiu uma imagem de elegância discreta que mudou o padrão de estrela da época. O filme segue como referência do gênero.'],
      [
        'Bonequinha de Luxo',
        'filme',
        1961,
        'Adaptação da novela de Truman Capote dirigida por Blake Edwards, em que Hepburn interpreta Holly Golightly, moça que sustenta em Nova York uma vida construída sobre aparências e fuga do próprio passado. O papel combina leveza e desamparo em doses incomuns para o cinema do período. A abertura na vitrine da Tiffany tornou-se uma das imagens mais reproduzidas do século.'
      ],
      ['Trabalho como embaixadora do UNICEF', 'feito', 1988, 'Atuação nos últimos cinco anos de vida em missões de campo na Etiópia, Sudão, Vietnã e Somália, com depoimentos ao Congresso americano e à imprensa sobre fome e vacinação infantil. Hepburn recusou a função decorativa e viajou a áreas de conflito quando já estava doente. Recebeu por esse trabalho a Medalha Presidencial da Liberdade.']
    ],
    'Aristóteles Onassis': [
      [
        'Frota de navios-tanque da Olympic Maritime',
        'feito',
        1946,
        'Construção, a partir do pós-guerra, de uma das maiores frotas privadas de petroleiros do mundo, apostando em navios de grande porte quando o mercado ainda operava com embarcações pequenas. Onassis financiou os cascos com contratos de afretamento de longo prazo firmados antes da construção, técnica depois copiada por todo o setor. A frota foi a base de sua fortuna.'
      ],
      ['Olympic Airways', 'feito', 1957, 'Companhia aérea nacional grega adquirida do Estado e operada por ele durante mais de vinte anos, com rotas transatlânticas e frota renovada. Onassis tratou a empresa como vitrine do país e assumiu o risco de um mercado pequeno em troca de concessão exclusiva. A operação ampliou de forma duradoura a ligação aérea da Grécia com o mundo.']
    ],
    'Karl Menninger': [
      ['Clínica Menninger', 'feito', 1925, 'Centro de tratamento psiquiátrico fundado com o pai e o irmão em Topeka, no Kansas, que substituiu o modelo do asilo por equipes multidisciplinares, ambiente terapêutico e formação de residentes. A clínica tornou-se o principal polo de treinamento psiquiátrico dos Estados Unidos no meio do século. Mudou a prática americana em saúde mental.'],
      ['O Homem Contra Si Mesmo', 'livro', 1938, 'Estudo sobre as formas de autodestruição, do suicídio declarado às condutas que o antecipam de modo indireto, como alcoolismo, acidentes repetidos e automutilação. Menninger propõe ler esses comportamentos como um continuum e não como eventos isolados. O livro introduziu ao público americano uma leitura clínica da autodestrutividade.'],
      ['A Mente Vital', 'livro', 1963, 'Proposta de classificar o transtorno mental por graus de desorganização do equilíbrio da pessoa, e não por rótulos diagnósticos fixos. Menninger insiste que a doença é um processo com etapas reversíveis, e não uma categoria à qual o paciente pertence. A obra influenciou o debate sobre diagnóstico psiquiátrico nas décadas seguintes.']
    ],
    'Napoleão III': [
      ['Ideias Napoleônicas', 'livro', 1839, 'Exposição doutrinária escrita no exílio, em que o futuro imperador apresenta o bonapartismo como regime que combina autoridade central, sufrágio universal e progresso material. O texto serviu de programa político para sua chegada ao poder em 1848. É o documento fundador do bonapartismo como ideologia.'],
      [
        'Reforma urbana de Paris',
        'feito',
        1853,
        'Reconstrução da capital francesa conduzida sob sua ordem pelo prefeito Haussmann, com abertura de grandes avenidas, rede de esgoto, parques e padronização das fachadas. A obra respondeu a razões sanitárias, econômicas e de controle da população, e deslocou moradores pobres para a periferia. Definiu a forma da Paris atual e virou modelo de urbanismo em todo o mundo.'
      ],
      [
        'História de Júlio César',
        'livro',
        1865,
        'Estudo histórico em que Napoleão III defende a figura do governante excepcional que impõe ordem e progresso contra a inércia das instituições, usando Roma como espelho de seu próprio regime. A obra foi preparada com apoio de eruditos e publicada com ampla repercussão. Interessa hoje menos pela pesquisa que pela declaração indireta de um projeto político.'
      ]
    ],
    'Robert Ingersoll': [
      ['Os Deuses', 'ensaio', 1872, 'Conferência publicada em que Ingersoll examina a pluralidade histórica de divindades para concluir que cada povo criou seus deuses à própria imagem. O texto defende o livre exame e a separação entre Estado e religião com linguagem de tribuna, dirigida ao grande público. Foi o ensaio que consolidou sua reputação nacional.'],
      ['Alguns Erros de Moisés', 'livro', 1879, 'Crítica sistemática às contradições internas do Pentateuco, tratadas com ironia e argumento acessível a leitores sem formação teológica. Ingersoll insiste que a moral não depende da literalidade das escrituras. O livro circulou amplamente e fez dele o mais conhecido livre-pensador dos Estados Unidos no século XIX.'],
      ['Por Que Sou Agnóstico', 'ensaio', 1896, 'Exposição pessoal das razões de sua posição, escrita perto do fim da vida, em que descreve a passagem da fé herdada à recusa de afirmar o que não se pode saber. O texto distingue agnosticismo de negação dogmática e recusa a acusação de amoralidade. Permanece uma das formulações clássicas do agnosticismo em língua inglesa.']
    ],
    'Henry Ward Beecher': [
      ['Palestras a Jovens', 'livro', 1844, 'Série de conferências publicadas em que Beecher orienta rapazes recém-chegados às cidades sobre trabalho, dinheiro, companhia e caráter, tratando de temas como jogo e ociosidade com exemplos concretos. O tom é prático e narrativo, distante do sermão doutrinário. Foi um dos livros de formação moral mais lidos nos Estados Unidos do século XIX.'],
      [
        'Sermões da Plymouth Church',
        'discurso',
        1847,
        'Pregações semanais feitas em Brooklyn ao longo de quatro décadas, taquigrafadas e publicadas em jornais de todo o país. Beecher usou o púlpito para defender a abolição da escravidão, chegando a leiloar simbolicamente pessoas escravizadas durante o culto para comprar sua liberdade. Os sermões transformaram a igreja em centro do abolicionismo do norte.'
      ],
      ['Vida de Jesus, o Cristo', 'livro', 1871, 'Biografia devocional escrita em linguagem corrente, que apresenta Jesus sobretudo por sua dimensão humana e afetiva, em contraste com a ênfase calvinista no juízo. Beecher recusa o quadro da danação herdado de seu pai e sustenta um cristianismo centrado no amor. O livro marcou a virada do protestantismo americano para um tom mais liberal.']
    ],
    'Malcolm Forbes': [
      ['Os Ditos do Presidente Malcolm', 'livro', 1978, 'Coletânea de aforismos e observações curtas sobre negócios, dinheiro, trabalho e vaidade, reunidas da coluna Fact and Comment que Forbes assinava na revista da família. O título brinca com as compilações de máximas de Mao Tsé-Tung então em circulação. É a fonte da maioria das frases que circulam com seu nome.'],
      [
        'Direção editorial da revista Forbes',
        'feito',
        1957,
        'Comando da publicação herdada do pai, que Forbes transformou em referência sobre empresas e fortunas, criando em 1982 a lista anual das quatrocentas maiores fortunas americanas e depois o ranking global de bilionários. A revista passou a medir e comparar riqueza de forma pública e sistemática. O modelo foi copiado por publicações de todo o mundo.'
      ],
      [
        'Mais do que Sonhei',
        'memoria',
        1989,
        'Autobiografia em que narra a passagem de filho de imigrante escocês a editor milionário, e descreve sem pudor o gosto pelos balões de ar quente, motocicletas, castelos e festas que fizeram dele personagem público. O livro é franco sobre o valor promocional desse estilo de vida para a revista. Registra uma figura que transformou o próprio consumo em marca editorial.'
      ]
    ],
    'James Dean': [
      ['Vidas Amargas', 'filme', 1955, 'Adaptação por Elia Kazan do romance de John Steinbeck, em que Dean interpreta Cal Trask, filho que disputa o afeto de um pai severo com o irmão tido como exemplar. A atuação, construída com pausas e gestos improvisados, introduziu ao cinema comercial americano o método de interpretação do Actors Studio. Foi seu único papel principal lançado em vida.'],
      ['Juventude Transviada', 'filme', 1955, 'Drama de Nicholas Ray sobre um adolescente recém-chegado a uma cidade nova que enfrenta a violência dos colegas e a omissão dos pais. O filme tratou a revolta juvenil como sintoma de família e não como delinquência isolada, algo então incomum. A imagem de Dean de jaqueta vermelha tornou-se símbolo de uma geração.'],
      ['Assim Caminha a Humanidade', 'filme', 1956, 'Épico de George Stevens sobre três décadas de uma família de criadores de gado no Texas, em que Dean interpreta o peão que enriquece com petróleo e envelhece amargurado. O papel exigiu dele um registro mais contido e um envelhecimento em cena. Foi finalizado após sua morte e lhe rendeu indicação póstuma ao Oscar.']
    ],
    'Lady Gaga': [
      ['The Fame', 'musica', 2008, 'Álbum de estreia que combinou pop eletrônico de pista com uma encenação deliberada da fama como tema e não apenas como consequência. Os singles Just Dance e Poker Face a levaram ao primeiro lugar em mais de vinte países e estabeleceram sua linguagem visual. O disco definiu grande parte do som pop da década seguinte.'],
      ['Born This Way', 'musica', 2011, 'Álbum concebido como afirmação de identidade, cuja canção-título tornou-se hino de aceitação para públicos LGBTQIA+ e para pessoas em situação de exclusão. A produção mistura rock, dance e influência religiosa na letra e na imagem. É o trabalho em que sua obra e seu ativismo passaram a ser inseparáveis.'],
      ['Nasce uma Estrela', 'filme', 2018, 'Quarta versão da história dirigida por Bradley Cooper, em que Gaga interpreta uma cantora que ascende enquanto seu mentor afunda no alcoolismo. A atuação lhe rendeu indicação ao Oscar de melhor atriz e a canção Shallow lhe rendeu a estatueta de melhor canção original. Confirmou sua transição para o cinema.'],
      ['Fundação Born This Way', 'feito', 2012, 'Organização criada com a mãe, Cynthia Germanotta, voltada à saúde mental de jovens e ao combate ao assédio escolar, com programas de formação de pares e pesquisa aplicada. A fundação trabalha em parceria com universidades e serviços públicos de saúde. Deu forma institucional ao trabalho que ela já fazia pelos palcos.']
    ],
    'Howard Stevenson': [
      [
        'Uma Perspectiva sobre o Empreendedorismo',
        'artigo',
        1983,
        'Texto acadêmico da Harvard Business School que define empreendedorismo como a busca de oportunidade independentemente dos recursos atualmente controlados, deslocando o foco do perfil psicológico do indivíduo para o comportamento diante da oportunidade. A definição permitiu estudar empreendedorismo também dentro de grandes empresas. Tornou-se a formulação mais citada do campo.'
      ],
      ['O Suficiente', 'livro', 2004, 'Estudo escrito com Laura Nash a partir de entrevistas com executivos de alto desempenho, que propõe medir uma vida bem-sucedida por quatro eixos simultâneos: realização, felicidade, significado e legado. O livro argumenta que perseguir apenas um deles produz o colapso dos outros. É usado em programas de educação executiva sobre carreira e propósito.']
    ],
    'Nicolas Hayek': [
      ['Swatch', 'feito', 1983, 'Relógio suíço de plástico com pouco mais de cinquenta peças, projetado para ser barato, preciso e vendido como objeto de moda. O produto devolveu à Suíça um mercado perdido para a indústria japonesa de quartzo e criou a ideia de relógio como acessório trocável. Salvou a relojoaria suíça da falência coletiva.'],
      ['Consolidação do Swatch Group', 'feito', 1983, 'Fusão das duas maiores holdings relojoeiras suíças em crise, a ASUAG e a SSIH, em um grupo único que reuniu marcas de todas as faixas de preço, de Swatch a Omega e Breguet. Hayek defendeu manter produção e montagem na Suíça em vez de transferi-las para a Ásia. O grupo tornou-se o maior fabricante de relógios do mundo.'],
      ['Projeto do carro urbano Smart', 'projeto', 1994, 'Concepção de um automóvel muito curto, de dois lugares e baixo consumo, pensado para cidades congestionadas e desenvolvido em parceria com a Mercedes-Benz. Hayek trouxe para o carro a lógica do Swatch: poucas peças, montagem modular e personalização visual. O veículo chegou ao mercado em 1998 e criou uma categoria nova.']
    ],
    'Magalhães Pinto': [
      [
        'Manifesto dos Mineiros',
        'documento',
        1943,
        'Declaração assinada por noventa e duas figuras públicas de Minas Gerais pedindo o fim do Estado Novo e a volta das liberdades constitucionais, redigida em plena ditadura de Getúlio Vargas e distribuída clandestinamente. Os signatários, entre eles Magalhães Pinto, sofreram represálias profissionais. O texto é tido como o primeiro rompimento aberto das elites civis com o regime.'
      ],
      ['Banco Nacional', 'feito', 1944, 'Instituição financeira que dirigiu por décadas a partir de Minas Gerais, expandindo-a até torná-la um dos maiores bancos privados do país e pioneira na informatização de agências no Brasil. A base bancária sustentou sua atuação política como governador e ministro. A trajetória ilustra a ligação entre finanças e poder na República brasileira.']
    ],
    'Walter Winchell': [
      ['Coluna On Broadway', 'artigo', 1929, 'Coluna diária publicada no New York Daily Mirror e distribuída a centenas de jornais, que misturava política, bastidores do teatro e vida privada de celebridades em frases curtas e gíria própria. Winchell criou o formato moderno da coluna de fofoca e o poder de fazer e destruir reputações por meio dela. Foi lido por dezenas de milhões de pessoas.'],
      ['Narração de Os Intocáveis', 'feito', 1959, 'Locução da série de televisão sobre o esquadrão de Eliot Ness em Chicago, feita no mesmo ritmo acelerado e telegráfico de seus programas de rádio. A voz deu ao seriado o tom de crônica jornalística em tempo real. Foi o trabalho que apresentou seu estilo a uma geração que já não lia sua coluna.']
    ],
    'George Burns': [
      ['The Burns and Allen Show', 'feito', 1929, 'Dupla de comédia formada com a esposa Gracie Allen, que atravessou o vaudeville, o rádio e a televisão ao longo de mais de trinta anos. Burns construiu o papel do parceiro contido que apenas reage às confusões lógicas de Gracie, invertendo a expectativa de quem faz a piada. O programa definiu o formato da comédia doméstica americana.'],
      ['Oh, Deus!', 'filme', 1977, 'Comédia de Carl Reiner em que Burns, aos oitenta e um anos, interpreta Deus como um senhor de boné e óculos que escolhe um gerente de supermercado para transmitir seu recado. A atuação sóbria e sem efeitos sustenta o humor do filme. O papel reinventou sua carreira no cinema e rendeu duas continuações.'],
      ['Gracie: Uma História de Amor', 'memoria', 1988, 'Livro escrito mais de vinte anos após a morte da esposa, em que Burns reconstrói a parceria profissional e o casamento, admitindo o quanto de seu sucesso vinha do talento dela. O relato alterna anedotas de palco e passagens de luto sem sentimentalismo. É seu texto mais pessoal entre dez livros publicados.']
    ],
    'Donald McGannon': [
      [
        'Direção do Westinghouse Broadcasting',
        'feito',
        1955,
        'Comando por mais de vinte e cinco anos do grupo de emissoras de rádio e televisão conhecido como Group W, em que impôs a produção local de programas e noticiários contra a prática de apenas retransmitir a rede nacional. McGannon também recusou receber pagamento de gravadoras para tocar discos, prática então corrente. Sua gestão é citada como padrão de responsabilidade na radiodifusão americana.'
      ]
    ],
    'Woody Allen': [
      ['Sem Plumas', 'livro', 1975, 'Coletânea de textos curtos de humor publicados originalmente na revista The New Yorker, incluindo paródias de tratados filosóficos, peças breves e diários apócrifos. Allen aplica a erudição a assuntos triviais e o contrário, extraindo a piada do desencontro de registros. O volume é a mais conhecida de suas três coletâneas de prosa humorística.'],
      [
        'Noivo Neurótico, Noiva Nervosa',
        'filme',
        1977,
        'Comédia em que Allen reconstrói de forma fragmentada o fim de um relacionamento, usando narração direta à câmera, legendas com o pensamento dos personagens e cenas de memória. O filme rompeu com a estrutura linear da comédia romântica e ganhou quatro Oscars, entre eles melhor filme e melhor direção. É apontado como sua obra mais influente.'
      ],
      ['Manhattan', 'filme', 1979, 'Retrato em preto e branco de um grupo de intelectuais nova-iorquinos, filmado por Gordon Willis ao som de Gershwin. O roteiro trata de relações desequilibradas e autoengano moral com ironia que não protege o protagonista. A abertura com a cidade e a trilha tornou-se uma das sequências mais citadas do cinema americano.'],
      ['A Rosa Púrpura do Cairo', 'filme', 1985, 'História de uma garçonete da Grande Depressão cujo personagem favorito sai da tela do cinema para procurá-la. O filme usa a premissa fantástica para discutir o que se busca na ficção quando a vida real não oferece saída. Allen o citou repetidamente como o mais próximo do que pretendia realizar.']
    ],
    'Pat Riley': [
      ['Showtime: Por Dentro da Temporada Decisiva dos Lakers', 'livro', 1988, 'Relato em primeira pessoa da temporada de 1986 e 1987 dos Los Angeles Lakers, escrito pelo próprio técnico durante a campanha do título. O livro descreve a rotina de treinos, a gestão de egos e a preparação psicológica de um grupo de estrelas. É um dos primeiros registros internos de um vestiário campeão da NBA.'],
      [
        'O Vencedor Interior',
        'livro',
        1993,
        'Sistematização do que Riley aprendeu como técnico em conceitos aplicáveis a qualquer equipe, entre eles a doença do eu, que descreve como o sucesso dissolve grupos vencedores, e a ideia de esforço de melhora contínua pactuado por todos. O texto alterna episódios de quadra e análise de comportamento coletivo. Tornou-se leitura corrente em programas de liderança.'
      ]
    ]
  };
  function aplicar() {
    var nObras = 0,
      nPessoas = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) {
        OBRAS[nome] = [];
        nPessoas++;
      }
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nObras++;
      }
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    console.log('MeMotiva · Fase 60b: +' + nObras + ' obras catalogadas para ' + nPessoas + ' pessoas recuperadas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var P = {
    "Papa Francisco||Laudato Si'": {
      sobre: 'Encíclica em seis capítulos sobre o cuidado da casa comum, que trata a crise ambiental e a desigualdade social como um único problema. Introduz a noção de ecologia integral: não se protege a natureza sem alterar o modelo econômico que descarta pessoas.',
      contexto: 'Publicada seis meses antes da conferência climática de Paris, em um momento em que a negociação internacional estava travada. Foi a primeira encíclica dedicada integralmente ao meio ambiente na história da Igreja Católica.',
      momento: 'Assinada em 24 de maio de 2015 e divulgada em 18 de junho, com o subtítulo Sobre o cuidado da casa comum, tomado do Cântico das Criaturas de Francisco de Assis.',
      importancia: 'Foi citada por chefes de Estado e por cientistas durante as negociações do Acordo de Paris e ampliou muito o alcance do debate climático em públicos religiosos. Deu à Igreja uma posição explícita sobre economia e clima.',
      curiosidade: 'O texto é endereçado a toda pessoa que habita o planeta, e não apenas aos católicos, o que é incomum no gênero das encíclicas.'
    },
    'Papa Francisco||Evangelii Gaudium': {
      sobre: 'Exortação apostólica sobre o anúncio do Evangelho no mundo atual, em que o papa descreve a Igreja que deseja: em saída, acidentada pelas ruas, em vez de fechada na própria estrutura. Critica o que chama de economia da exclusão e a idolatria do dinheiro.',
      contexto: 'Escrita no primeiro ano de pontificado, recolhendo as discussões do Sínodo sobre a Nova Evangelização de 2012 e definindo o programa da gestão que começava.',
      momento: 'Publicada em 24 de novembro de 2013, ao encerramento do Ano da Fé.',
      importancia: 'É considerada o documento programático de seu pontificado, e a fonte de expressões que passaram a definir seu vocabulário público, como hospital de campanha e cultura do descarte.',
      curiosidade: 'A passagem em que afirma que prefere uma Igreja acidentada a uma Igreja doente pelo fechamento tornou-se uma das mais citadas de todo o seu magistério.'
    },
    'Papa Francisco||Fratelli Tutti': {
      sobre: 'Encíclica sobre fraternidade e amizade social, construída em torno de uma leitura longa da parábola do bom samaritano. Trata de migração, nacionalismo, pena de morte, guerra e do que chama de populismos fechados.',
      contexto: 'Redigida durante a pandemia de covid-19, que o texto cita como prova de que ninguém se salva sozinho, e depois do encontro do papa com o grande imã de Al-Azhar em Abu Dhabi, em 2019.',
      momento: 'Assinada em Assis em 3 de outubro de 2020, véspera da festa de Francisco de Assis, de quem toma emprestado o título.',
      importancia: 'Reformulou a posição católica sobre a guerra justa e sobre a pena de morte, e é referência em documentos de diálogo inter-religioso.',
      curiosidade: 'É a primeira encíclica que cita textualmente um documento assinado em conjunto com uma autoridade muçulmana.'
    },
    'Gloria Steinem||Uma Ação Ultrajante e Rebeldias Cotidianas': {
      sobre: 'Coletânea de ensaios e reportagens escritos ao longo de vinte anos, entre eles o relato de sua infiltração como coelhinha no Playboy Club de Nova York e o perfil de Marilyn Monroe. Mistura jornalismo de campo, memória e argumento político.',
      contexto: 'Reúne textos produzidos no auge da segunda onda feminista americana, período em que Steinem passou de repórter a organizadora de um movimento nacional.',
      momento: 'Publicada em 1983, quando a autora já dirigia a revista Ms. havia mais de dez anos.',
      importancia: 'É a porta de entrada mais usada à sua obra e o registro de reportagem que expôs as condições de trabalho impostas às funcionárias dos clubes Playboy.',
      curiosidade: 'A reportagem sobre o Playboy Club, publicada em 1963, marcou tanto sua carreira que por anos ela relutou em ser lembrada apenas por ela.'
    },
    'Gloria Steinem||Minha Vida na Estrada': {
      sobre: 'Memória organizada em torno do deslocamento: aviões, ônibus, táxis e comícios em que Steinem passou a maior parte da vida adulta. O livro defende a escuta em círculo, aprendida em assembleias e em reservas indígenas, como método de organização política.',
      contexto: 'Escrita depois de cinco décadas de militância itinerante, quando a autora tinha mais de oitenta anos e havia sido diagnosticada e tratada de câncer duas décadas antes.',
      momento: 'Publicada em 2015 e adaptada para o cinema em 2020 no filme A Vida de Gloria.',
      importancia: 'É o relato mais completo de sua trajetória e uma das principais fontes sobre a formação prática do feminismo americano fora dos meios acadêmicos.',
      curiosidade: 'A dedicatória é ao médico londrino que, em 1957, realizou o aborto que permitiu à autora, então com vinte e dois anos, seguir sua vida.'
    },
    'Gloria Steinem||Revista Ms.': {
      sobre: 'Revista feminista de circulação nacional fundada por Steinem com Dorothy Pitman Hughes e outras editoras, feita para tratar aborto, violência doméstica, assédio e trabalho não pago com reportagem, e não com pauta de comportamento.',
      contexto: 'Surgiu em um mercado editorial em que revistas femininas viviam de moda, receitas e conselhos matrimoniais, e em que anunciantes recusavam páginas ao lado de temas políticos.',
      momento: 'Lançada como encarte da New York em dezembro de 1971 e como publicação independente em julho de 1972; a primeira tiragem de trezentos mil exemplares esgotou em oito dias.',
      importancia: 'Levou o vocabulário do feminismo a bancas de jornal em todo o país e foi a primeira publicação de grande circulação a tratar assédio sexual no trabalho como um problema nomeável.',
      curiosidade: 'O título vem do tratamento neutro Ms., então pouco usado, que a revista ajudou a tornar corrente por não indicar se a mulher é casada.'
    },
    'Djamila Ribeiro||Lugar de Fala': {
      sobre: 'Ensaio curto que recupera a genealogia da expressão a partir do feminismo negro e da teoria do ponto de vista, para argumentar que lugar de fala trata da posição social de quem enuncia, e não de permissão para falar.',
      contexto: 'Escrito quando a expressão havia se popularizado nas redes sociais brasileiras acompanhada de mal-entendidos que a reduziam a censura ou a privilégio de identidade.',
      momento: 'Publicado em 2017 como primeiro volume da coleção Feminismos Plurais, que a autora coordena.',
      importancia: 'Deu ao debate público brasileiro uma definição precisa de um conceito que circulava sem base teórica, recolocando em circulação autoras como Lélia Gonzalez e Patricia Hill Collins.',
      curiosidade: 'A coleção Feminismos Plurais foi concebida em formato de bolso e preço baixo para circular fora do ambiente universitário.'
    },
    'Djamila Ribeiro||Pequeno Manual Antirracista': {
      sobre: 'Onze capítulos breves com orientações práticas sobre reconhecer o racismo estrutural, entender a branquitude como lugar de privilégio e agir no trabalho, na escola e nas relações cotidianas. Cada capítulo termina apontando o que se pode fazer.',
      contexto: 'Escrito para leitores que aceitam o diagnóstico do racismo mas não sabem por onde começar, e em um país em que a maioria da população é negra e a desigualdade racial é medida em todos os indicadores.',
      momento: 'Publicado em 2019; tornou-se um dos livros mais vendidos no Brasil em 2020, durante a repercussão global dos protestos antirracistas.',
      importancia: 'Foi adotado em programas de formação de empresas, escolas e órgãos públicos, e rendeu à autora o Prêmio Jabuti de livro do ano em 2020.',
      curiosidade: 'O livro tem pouco mais de cem páginas, extensão escolhida deliberadamente para que pudesse ser lido de uma vez.'
    },
    'Djamila Ribeiro||Quem Tem Medo do Feminismo Negro?': {
      sobre: 'Reunião de artigos de imprensa e de um ensaio autobiográfico sobre a formação da autora, da infância em Santos como filha de um militante comunista à universidade e ao ativismo. Discute a relação entre feminismo negro, academia e imprensa.',
      contexto: 'Escrito no período em que a autora ocupava colunas em veículos de grande circulação e enfrentava reação organizada nas redes sociais.',
      momento: 'Publicado em 2018, um ano depois de Lugar de Fala.',
      importancia: 'É a principal fonte sobre a formação intelectual da autora e um registro do momento em que o feminismo negro brasileiro passou a ocupar espaço na imprensa tradicional.',
      curiosidade: 'O ensaio de abertura descreve a biblioteca do pai, estivador e autodidata, como sua primeira formação política.'
    },
    'Akio Morita||Made in Japan': {
      sobre: 'Relato da construção da Sony a partir de uma oficina em um prédio bombardeado de Tóquio, escrito em parceria com Edwin Reingold e Mitsuko Shimomura. Alterna história da empresa e análise das diferenças entre a prática empresarial japonesa e a americana.',
      contexto: 'Publicado quando produtos japoneses dominavam o mercado americano de eletrônicos e a expressão do título, antes sinônimo de mercadoria barata, havia se tornado sinal de qualidade.',
      momento: 'Lançado em 1986, três anos antes de a Sony comprar a Columbia Pictures.',
      importancia: 'Foi o livro que apresentou ao público ocidental a lógica da gestão japonesa de dentro, e não por meio de consultores, e continua sendo leitura corrente em cursos de negócios internacionais.',
      curiosidade: 'Morita conta que decidiu manter a marca Sony em letras latinas, contra a opinião de sócios, justamente para que o nome pudesse ser lido em qualquer país.'
    },
    'Akio Morita||Walkman': {
      sobre: 'Toca-fitas portátil com fones de ouvido e sem alto-falante, lançado a partir da insistência de Morita em um produto que a própria equipe considerava sem mercado, por não permitir gravação nem escuta coletiva.',
      contexto: 'Surgiu quando ouvir música fora de casa exigia aparelhos grandes e a indústria acreditava que o consumidor não pagaria por um aparelho que fizesse menos que os existentes.',
      momento: 'Lançado no Japão em julho de 1979; mais de duzentos milhões de unidades foram vendidas ao longo de sua vida comercial.',
      importancia: 'Criou o hábito da escuta individual em movimento, que depois se transferiu ao tocador digital e ao telefone celular. Alterou a relação entre música e espaço público.',
      curiosidade: 'Os primeiros modelos vinham com duas saídas de fone, porque a empresa achava rude que alguém ouvisse música sozinho em companhia de outra pessoa.'
    },
    'Konosuke Matsushita||Não Vivemos Só de Pão': {
      sobre: 'Exposição de sua filosofia de empresa, em que a produção industrial é apresentada como missão de tornar bens acessíveis a todos, e o lucro como consequência de servir bem, não como finalidade. Trata também de treinamento, humildade e responsabilidade social.',
      contexto: 'Escrito por quem começou como aprendiz de bicicletaria com pouca escolaridade e construiu a Matsushita Electric, depois Panasonic, em um Japão que se reconstruía da guerra.',
      momento: 'Publicado em 1984, dois anos antes de sua morte, aos noventa e quatro anos.',
      importancia: 'Consolidou a reputação de Matsushita como pensador da gestão, e não apenas como industrial, e influenciou a formulação de missão empresarial em companhias japonesas e ocidentais.',
      curiosidade: 'O autor definiu em 1932 um plano de duzentos e cinquenta anos para a empresa, dividido em ciclos de vinte e cinco, e apresentou-o publicamente aos funcionários.'
    },
    'Konosuke Matsushita||Instituto PHP': {
      sobre: 'Instituição de pesquisa e editora fundada por Matsushita em torno do programa Peace and Happiness through Prosperity, dedicada a estudar como a prosperidade material pode sustentar convivência pacífica.',
      contexto: 'Criada em um Japão devastado e faminto, quando o industrial concluiu que produzir bens não bastava se não houvesse reflexão sobre a que fim serviam.',
      momento: 'Fundado em 1946; mantém até hoje atividade editorial e de formação de lideranças.',
      importancia: 'Deu forma institucional a seu pensamento e formou quadros para a administração pública e privada japonesa por meio da escola de governo que criou em 1979.',
      curiosidade: 'Matsushita fundou a escola de governo aos oitenta e cinco anos, com recursos próprios, por considerar que o Japão formava bons engenheiros e maus políticos.'
    },
    'Lou Gerstner||Quem Disse que os Elefantes Não Dançam?': {
      sobre: 'Relato em primeira pessoa da recuperação da IBM entre 1993 e 2002, escrito pelo executivo que assumiu a empresa quando ela registrava o maior prejuízo da história corporativa americana. Detalha a decisão de não fragmentar a companhia e de apostar em serviços.',
      contexto: 'Escrito depois de uma virada considerada improvável: a empresa vinha de oito bilhões de dólares de prejuízo em um ano e era descrita pela imprensa como candidata ao desmembramento.',
      momento: 'Publicado em 2002, ano em que Gerstner deixou a presidência executiva.',
      importancia: 'Tornou-se um dos estudos de caso mais usados sobre mudança de cultura organizacional, sobretudo pela ênfase em que cultura não é um complemento da estratégia, mas o próprio jogo.',
      curiosidade: 'Gerstner escreve que a tarefa mais difícil não foi financeira nem tecnológica, mas convencer uma empresa orgulhosa de que ela estava perdendo.'
    },
    'Indra Nooyi||Uma Vida Plena': {
      sobre: 'Memória da trajetória de Madras à presidência da PepsiCo, escrita como argumento sobre o custo de conciliar carreira executiva e família na ausência de estrutura pública de cuidado. Descreve também a estratégia que chamou de desempenho com propósito.',
      contexto: 'Escrita depois de doze anos no comando de uma das maiores empresas de alimentos do mundo, por uma das poucas mulheres imigrantes a chegar a esse posto nos Estados Unidos.',
      momento: 'Publicada em 2021, três anos após sua saída da PepsiCo.',
      importancia: 'É referência em discussões sobre licença parental, creche e cuidado como questão de infraestrutura econômica, e não como assunto privado das famílias.',
      curiosidade: 'A autora relata que escreveu cartas aos pais dos seus principais executivos, agradecendo pelos filhos, prática que se tornou marca de sua gestão.'
    },
    'Paul Graham||Hackers e Pintores': {
      sobre: 'Coletânea de ensaios sobre programação, criação de empresas e a natureza do trabalho intelectual, cuja tese central é que escrever software se aproxima mais da pintura que da engenharia: faz-se corrigindo, não planejando por inteiro antes.',
      contexto: 'Reúne textos publicados em seu site nos anos que seguiram a venda da Viaweb à Yahoo, quando Graham era programador de Lisp conhecido em círculos técnicos e ainda não havia fundado a Y Combinator.',
      momento: 'Publicada em 2004, um ano antes de criar a Y Combinator.',
      importancia: 'Formulou grande parte do vocabulário com que o meio de tecnologia passou a falar de si mesmo, e é leitura frequente entre programadores e fundadores de empresas.',
      curiosidade: 'Um dos ensaios defende que a escolha da linguagem de programação é vantagem competitiva, argumento que Graham sustenta a partir da própria experiência com Lisp na Viaweb.'
    },
    'Paul Graham||Y Combinator': {
      sobre: 'Programa de aceleração de empresas nascentes que investe quantias pequenas em muitas companhias por ciclo, em troca de participação, e as submete a três meses de orientação intensiva encerrados por um dia de apresentação a investidores.',
      contexto: 'Criado quando o capital de risco americano operava com cheques grandes, poucas apostas e fundadores experientes, o que deixava fora do jogo programadores jovens sem rede de contatos.',
      momento: 'Fundado em 2005 com Jessica Livingston, Robert Morris e Trevor Blackwell; o primeiro ciclo teve oito empresas.',
      importancia: 'Financiou nos primeiros anos companhias como Airbnb, Stripe, Dropbox e Reddit, e seu modelo foi replicado por centenas de aceleradoras no mundo.',
      curiosidade: 'Os ensaios que Graham publicava no próprio site funcionaram como principal canal de recrutamento dos primeiros candidatos, antes que o programa tivesse reputação.'
    },
    'Eric Hoffer||O Verdadeiro Crente': {
      sobre: 'Estudo sobre o que leva pessoas a adotar movimentos de massa, religiosos ou políticos, e sobre o que cristianismo primitivo, nacionalismo, comunismo e fascismo têm em comum na forma de recrutar. A tese é que o adepto busca escapar de um eu que lhe parece estragado.',
      contexto: 'Escrito por um estivador autodidata do porto de San Francisco, poucos anos depois da derrota do nazismo e no início da Guerra Fria, quando a adesão em massa a regimes totalitários era a pergunta política central.',
      momento: 'Publicado em 1951; o presidente Eisenhower o citou publicamente em 1956, o que levou o livro ao grande público.',
      importancia: 'Tornou-se um clássico da psicologia política e continua sendo citado em análises de radicalização e de movimentos extremistas contemporâneos.',
      curiosidade: 'Hoffer nunca frequentou universidade, trabalhou como diarista agrícola e estivador e escrevia em cadernos durante os intervalos no cais.'
    },
    'Eric Hoffer||A Provação da Mudança': {
      sobre: 'Ensaios sobre a dificuldade humana de atravessar transformações rápidas, tema que o autor aplica à industrialização, à descolonização e à juventude dos anos sessenta. Argumenta que a mudança abrupta gera a insegurança de que os movimentos radicais se alimentam.',
      contexto: 'Escrito em meio à agitação política americana da década de 1960, que Hoffer, operário sem diploma, analisava com distância crítica em relação ao radicalismo universitário.',
      momento: 'Publicado em 1963, doze anos depois de O Verdadeiro Crente.',
      importancia: 'Ampliou sua reputação como ensaísta e deu continuidade à tese central de sua obra, ligando transição social e disposição para a adesão fanática.',
      curiosidade: 'Nos mesmos anos, Hoffer manteve por um período um programa de entrevistas na televisão pública americana, em que discutia esses temas ao vivo.'
    },
    'Ralph Nader||Perigoso em Qualquer Velocidade': {
      sobre: 'Investigação sobre a indústria automobilística americana, que documenta como fabricantes conheciam falhas de projeto capazes de matar em colisões e escolhiam não corrigi-las, priorizando estilo e custo sobre segurança. O capítulo de abertura trata do Chevrolet Corvair.',
      contexto: 'Publicado quando o número de mortes no trânsito nos Estados Unidos passava de quarenta mil por ano e o discurso corrente atribuía os acidentes exclusivamente ao motorista.',
      momento: 'Lançado em 1965; no ano seguinte Nader depôs no Senado e a General Motors admitiu ter contratado investigadores para segui-lo.',
      importancia: 'Levou à aprovação da Lei Nacional de Segurança de Tráfego e Veículos em 1966 e à criação do órgão federal de segurança viária. Cintos, colunas de direção retráteis e testes de colisão obrigatórios derivam desse processo.',
      curiosidade: 'A tentativa da General Motors de desacreditar o autor resultou em desculpas públicas de seu presidente diante do Senado e transformou Nader em figura nacional.'
    },
    'E. M. Forster||Uma Passagem para a Índia': {
      sobre: 'Romance sobre a acusação feita por uma jovem inglesa contra o médico indiano Aziz depois de uma visita às cavernas de Marabar, episódio que nunca é esclarecido e que expõe a impossibilidade de amizade genuína sob dominação colonial.',
      contexto: 'Escrito a partir de duas longas estadas do autor na Índia, em 1912 e 1921, e publicado no período em que o movimento de independência liderado por Gandhi ganhava força.',
      momento: 'Publicado em 1924; foi o último romance que Forster lançou em vida, embora tenha vivido mais quarenta e seis anos.',
      importancia: 'É considerado um dos principais romances em língua inglesa sobre o colonialismo e leitura central dos estudos pós-coloniais. Foi adaptado ao cinema por David Lean em 1984.',
      curiosidade: 'O eco indistinto das cavernas de Marabar, que reduz qualquer som à mesma nota vazia, é lido como a imagem central do livro sobre a falha da compreensão entre culturas.'
    },
    'E. M. Forster||Howards End': {
      sobre: 'Romance sobre o encontro de três famílias inglesas de posições distintas — as irmãs Schlegel, intelectuais e de origem alemã, os Wilcox, empresários, e o empregado Leonard Bast — em torno da posse de uma casa no campo.',
      contexto: 'Escrito na Inglaterra eduardiana, quando a fortuna comercial disputava prestígio com a cultura herdada e a questão de quem tem direito à terra e à casa era discussão social aberta.',
      momento: 'Publicado em 1910, quando Forster tinha trinta e um anos.',
      importancia: 'É tido por muitos críticos como seu romance mais bem construído, e a epígrafe que resume seu programa, apenas conectar, tornou-se uma das frases mais citadas da literatura inglesa.',
      curiosidade: 'A casa do título foi inspirada em Rooks Nest, a propriedade de Hertfordshire onde o autor passou a infância.'
    },
    'E. M. Forster||Aspectos do Romance': {
      sobre: 'Série de conferências sobre a arte do romance, em que Forster separa história de trama e propõe a distinção, depois clássica, entre personagens planos e redondos. Recusa organizar a análise por cronologia ou escola literária.',
      contexto: 'Preparado para as conferências Clark, em Cambridge, e dirigido a estudantes, com exemplos tirados de romancistas ingleses, franceses e russos que o autor lia como contemporâneos entre si.',
      momento: 'Proferido e publicado em 1927, três anos depois de Uma Passagem para a Índia.',
      importancia: 'Permanece em circulação em cursos de escrita e de teoria literária pela clareza das distinções que introduziu, especialmente a de personagem redonda.',
      curiosidade: 'Forster abre o livro avisando que não é crítico nem professor, apenas um romancista falando de ofício, e usa isso para justificar a recusa da ordem histórica.'
    },
    'Richard Bach||Fernão Capelo Gaivota': {
      sobre: 'Fábula sobre uma gaivota que se recusa a voar apenas para conseguir comida e se dedica a aprimorar o voo, o que a leva ao exílio do bando e depois a um aprendizado sem limites. A narrativa é curta e acompanhada de fotografias de aves em voo.',
      contexto: 'Recusado por dezoito editoras antes de ser aceito, e publicado em um momento de busca espiritual difusa nos Estados Unidos, o que ajudou a explicar sua recepção.',
      momento: 'Publicado em 1970; passou dois anos entre os mais vendidos e vendeu mais de quarenta milhões de exemplares no mundo.',
      importancia: 'Tornou-se um dos livros de maior circulação do século XX e referência de um gênero de parábola de autoaperfeiçoamento que se multiplicou depois dele.',
      curiosidade: 'Bach afirmou que a história lhe veio em duas etapas separadas por oito anos, e que ele não conseguiu escrever o final antes que a segunda parte lhe ocorresse.'
    },
    'Richard Bach||Ilusões': {
      sobre: 'Narrativa em que um piloto de aviões antigos encontra outro que se apresenta como messias aposentado, e recebe dele um manual cujas páginas se abrem sempre na resposta necessária. Trata da ideia de que limites são acordos que se aceitam.',
      contexto: 'Escrito depois do sucesso avassalador de Fernão Capelo Gaivota, em um período em que o autor relatava desconforto com a própria fama e retomou a vida de piloto itinerante.',
      momento: 'Publicado em 1977, com o subtítulo As Aventuras de um Messias Indeciso.',
      importancia: 'É o segundo livro mais lido do autor e circula amplamente como fonte de aforismos sobre escolha, limite e responsabilidade pela própria vida.',
      curiosidade: 'Bach voava de fato em biplanos antigos e sustentou-se por anos oferecendo voos pagos em campos de milho do Meio-Oeste americano, cenário que o livro reproduz.'
    },
    'George S. Patton||A Guerra Como Eu a Conheci': {
      sobre: 'Memórias de campanha reunidas a partir dos diários e das cartas do general durante as operações no norte da África, na Sicília e na Europa, incluindo a travessia de inverno até Bastogne. Inclui também suas notas sobre liderança e disciplina.',
      contexto: 'O material foi preparado pelo próprio Patton e organizado após sua morte em acidente de automóvel na Alemanha, em dezembro de 1945, poucos meses depois do fim da guerra.',
      momento: 'Publicado em 1947, dois anos após sua morte.',
      importancia: 'É fonte primária sobre o avanço do Terceiro Exército americano e um dos textos militares mais lidos sobre comando em campo, estudado em academias militares.',
      curiosidade: 'O volume inclui um apêndice com as instruções que Patton distribuía a oficiais, escritas em tom direto e sem a retórica habitual dos manuais da época.'
    },
    'Wernher von Braun||Foguete Saturno V': {
      sobre: 'Lançador de três estágios com mais de cento e dez metros de altura, projetado sob sua direção no Centro Marshall da NASA para levar a nave Apollo à Lua. Continua sendo um dos foguetes mais potentes já operados com sucesso.',
      contexto: 'Desenvolvido dentro do prazo fixado por Kennedy em 1961 para pousar na Lua antes do fim da década, em plena disputa espacial com a União Soviética.',
      momento: 'Voou treze vezes entre 1967 e 1973, sem perda de tripulação; levou a Apollo 11 à Lua em julho de 1969.',
      importancia: 'Viabilizou o programa Apollo e todas as suas missões lunares, além do lançamento da estação Skylab. É o marco técnico central da corrida espacial.',
      curiosidade: 'Von Braun havia dirigido antes o desenvolvimento do foguete V-2 para a Alemanha nazista, fato que acompanha sua biografia e que ele próprio discutiu publicamente pouco.'
    },
    'Wernher von Braun||A Conquista do Espaço': {
      sobre: 'Livro de divulgação escrito com Willy Ley e ilustrado por Chesley Bonestell, que apresenta ao público, em linguagem acessível e com pinturas detalhadas, a viagem orbital, a estação espacial em forma de roda e a expedição a Marte.',
      contexto: 'Publicado quando nenhum objeto humano havia alcançado a órbita e a ideia de voo espacial era tratada pela imprensa como fantasia.',
      momento: "Lançado em 1949 e ampliado em edições posteriores; o material deu origem a séries de reportagens na revista Collier's e a programas com Walt Disney nos anos cinquenta.",
      importancia: 'Foi decisivo para criar apoio público ao programa espacial americano antes de sua existência, e formou o imaginário visual da exploração do espaço por décadas.',
      curiosidade: 'As ilustrações de Bonestell foram tão influentes que estações espaciais em forma de roda apareceram em filmes de ficção por mais de trinta anos.'
    },
    'Charles Spurgeon||O Tesouro de Davi': {
      sobre: 'Comentário completo dos cento e cinquenta salmos, que reúne exposição própria, citações de comentaristas de vários séculos e aplicações homiléticas. Cada salmo recebe análise versículo por versículo.',
      contexto: 'Escrito ao longo de vinte anos por um pregador que sustentava o maior auditório protestante de Londres e publicava sermões semanalmente.',
      momento: 'Publicado em sete volumes entre 1865 e 1885.',
      importancia: 'É considerado um dos comentários mais consultados sobre os Salmos em língua inglesa e permanece em edição corrente mais de um século depois.',
      curiosidade: 'Spurgeon dizia que a obra lhe custou mais esforço que qualquer outra e que trabalhava nela nos períodos de convalescença da gota que o afligia.'
    },
    'Charles Spurgeon||Sermões': {
      sobre: 'Coleção das pregações feitas no Tabernáculo Metropolitano de Londres, taquigrafadas semanalmente, revisadas pelo autor e publicadas em folhetos que circulavam em vários países e idiomas.',
      contexto: 'Spurgeon pregava a auditórios de mais de cinco mil pessoas, sem amplificação, em uma Londres em que o púlpito competia com a imprensa popular pela atenção do público.',
      momento: 'Publicados semanalmente sem interrupção entre 1855 e 1917, vinte e cinco anos após sua morte, reunindo cerca de sessenta e três volumes.',
      importancia: 'Constituem a maior coleção de sermões de um único autor já impressa em língua inglesa e são fonte da maioria das frases que circulam com seu nome.',
      curiosidade: 'Cada sermão era pregado sem texto escrito, apenas com um esboço de poucas linhas, e só ganhava forma escrita depois, a partir da transcrição.'
    }
  };
  function aplicar() {
    var n = 0,
      orf = [];
    for (var k in P) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (
        !l ||
        !l.some(function (o) {
          return o.t === t;
        })
      ) {
        orf.push(k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = P[k];
        n++;
      }
    }
    if (orf.length) console.warn('Fase 60c1 · ignoradas:', orf.join(' | '));
    console.log('MeMotiva · Fase 60c1: +' + n + ' páginas de obra.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var P = {
    'Erma Bombeck||A Grama é Sempre Mais Verde sobre a Fossa Séptica': {
      sobre: 'Coletânea de crônicas sobre a vida em subúrbio americano: mudanças de casa, vizinhança, filhos adolescentes e a distância entre a propaganda da vida doméstica e sua prática. O humor vem da observação minuciosa, não do exagero.',
      contexto: 'Escrito quando a dona de casa suburbana era retratada na publicidade como figura realizada e satisfeita, e quando poucas vozes tratavam o tédio e o desgaste dessa rotina em tom cômico.',
      momento: 'Publicado em 1976, no auge de sua coluna sindicalizada, que saía em cerca de novecentos jornais.',
      importancia: 'Foi um dos maiores sucessos de venda de sua obra e consolidou seu papel de cronista da classe média americana, com mais de trinta milhões de exemplares somados entre seus livros.',
      curiosidade: 'Bombeck começou a escrever a coluna por três dólares por texto no jornal de Kettering, em Ohio, depois de anos afastada da redação para criar os filhos.'
    },
    'Erma Bombeck||Se a Vida é um Prato de Cerejas, o que Faço no Caroço?': {
      sobre: 'Reunião de crônicas sobre casamento, filhos pequenos, dietas e as expectativas impossíveis que recaem sobre a mãe de família. O título dá o tom do livro: a promessa de felicidade doméstica confrontada com o que sobra dela.',
      contexto: 'Publicado em uma década em que o papel da mulher nos Estados Unidos era objeto de disputa pública, e em que Bombeck ocupava uma posição incomum: fazia humor da vida doméstica sem defendê-la nem condená-la.',
      momento: 'Publicado em 1978, dois anos depois de seu maior sucesso de vendas.',
      importancia: 'É um dos títulos mais lembrados de sua obra e a fonte de várias das frases que circulam com seu nome. Está entre os livros que a levaram à lista de mais vendidos do New York Times por onze vezes.',
      curiosidade: 'A autora foi também porta-voz da campanha pela Emenda de Igualdade de Direitos nos Estados Unidos, atividade que manteve em paralelo à coluna de humor.'
    },
    'Friedrich Schleiermacher||Sobre a Religião': {
      sobre: 'Cinco discursos dirigidos aos intelectuais que desprezavam a religião, em que o autor sustenta que ela não consiste em doutrina nem em moral, mas em uma intuição do infinito, uma experiência anterior a qualquer sistema de crenças.',
      contexto: 'Escrito no círculo romântico de Berlim, em diálogo com Friedrich Schlegel e Novalis, e como resposta direta ao desprezo iluminista pela fé como superstição.',
      momento: 'Publicado anonimamente em 1799, quando o autor tinha trinta anos e era capelão de hospital em Berlim.',
      importancia: 'Fundou a teologia protestante liberal e deslocou o debate religioso da prova metafísica para a experiência do sujeito, influência sentida em toda a teologia dos dois séculos seguintes.',
      curiosidade: 'Schleiermacher é chamado de pai da teologia moderna, e este foi o livro que lhe deu esse lugar, embora tenha sido publicado sem seu nome.'
    },
    'Friedrich Schleiermacher||Hermenêutica': {
      sobre: 'Conjunto de preleções sobre a arte de interpretar textos, em que o autor propõe que a compreensão não é automática e exige método, e que interpretar envolve reconstruir tanto a língua quanto o pensamento individual do autor.',
      contexto: 'Desenvolvido a partir de sua prática como tradutor de Platão e exegeta do Novo Testamento, em uma universidade alemã que tratava a interpretação como técnica auxiliar e não como problema filosófico.',
      momento: 'Ministrado em aulas entre 1805 e 1833 e publicado a partir de seus manuscritos e das anotações dos alunos, após sua morte em 1834.',
      importancia: 'Transformou a hermenêutica em disciplina geral, aplicável a qualquer texto, e é o ponto de partida reconhecido da linha que segue por Dilthey, Heidegger, Gadamer e Ricoeur.',
      curiosidade: 'Sua tradução dos diálogos de Platão para o alemão continua em uso e é considerada um dos maiores trabalhos de tradução filosófica já realizados.'
    },
    'Pierre Abélard||História das Minhas Calamidades': {
      sobre: 'Carta autobiográfica longa em que Abélard narra sua ascensão como mestre de lógica em Paris, o amor por Heloísa, a castração ordenada pelo tio dela, a condenação de seus escritos e a perseguição que sofreu em mosteiros.',
      contexto: 'Escrita como carta de consolo a um amigo anônimo, gênero que permitia expor a própria desgraça como exemplo, no ambiente das escolas parisienses do século XII, em que a disputa intelectual tinha consequências pessoais graves.',
      momento: 'Escrita por volta de 1132, décadas depois dos acontecimentos que narra.',
      importancia: 'É um dos primeiros textos autobiográficos da Europa medieval e a principal fonte sobre a história de Abélard e Heloísa, além de documento de primeira ordem sobre o ensino escolástico.',
      curiosidade: 'A leitura desta carta por Heloísa, já abadessa, deu origem à correspondência entre os dois que se tornou uma das mais célebres da literatura ocidental.'
    },
    'Pierre Abélard||Sim e Não': {
      sobre: 'Compilação de cerca de cento e cinquenta questões teológicas, em que o autor reúne lado a lado citações de autoridades cristãs que se contradizem, sem resolver as contradições no corpo do texto.',
      contexto: 'Produzido em um ambiente em que a autoridade dos Padres da Igreja era tratada como coerente por definição, e em que apontar divergência entre elas soava próximo da heresia.',
      momento: 'Composto por volta de 1120; o prólogo, em que Abélard defende que a dúvida conduz à investigação e a investigação à verdade, é a parte mais citada.',
      importancia: 'Estabeleceu o método das questões disputadas que estruturou toda a teologia escolástica posterior, incluindo a Suma Teológica de Tomás de Aquino.',
      curiosidade: 'O livro não oferece respostas por escolha de método: cabe ao leitor conciliar as autoridades, exercício que Abélard considerava a própria formação do teólogo.'
    },
    'Tales de Mileto||Testemunhos sobre a água como princípio': {
      sobre: 'Conjunto de relatos antigos, transmitidos principalmente por Aristóteles, segundo os quais Tales afirmou que a água é o princípio de todas as coisas e que a Terra flutua sobre ela. Nenhum escrito seu sobreviveu.',
      contexto: 'Formulado em Mileto, cidade comercial da Jônia em contato com Egito e Babilônia, em um momento em que a explicação corrente do mundo era mitológica e genealógica.',
      momento: 'Atribuído ao início do século VI antes de Cristo; as fontes principais são a Metafísica de Aristóteles e as Vidas dos Filósofos de Diógenes Laércio.',
      importancia: 'É apontado como o primeiro esforço registrado de explicar a totalidade da natureza por uma causa natural única, o que faz de Tales o marco inicial da filosofia e da ciência ocidentais.',
      curiosidade: 'O acervo reúne a atribuição tal como a tradição antiga a transmitiu; não há texto de autoria própria de Tales, e a formulação exata de suas teses é objeto de discussão entre historiadores.'
    },
    'Tales de Mileto||Previsão do eclipse de 585 a.C.': {
      sobre: 'Registro, transmitido por Heródoto, de que Tales previu um eclipse solar que ocorreu durante uma batalha entre lídios e medos, levando os exércitos a interromper o combate e negociar.',
      contexto: 'A previsão só seria possível a partir de registros astronômicos babilônicos de longo prazo, a que os jônios tinham acesso pelas rotas comerciais.',
      momento: 'O eclipse é datado pela astronomia moderna em 28 de maio de 585 antes de Cristo; o relato está no primeiro livro das Histórias de Heródoto.',
      importancia: 'É citado desde a Antiguidade como episódio inaugural da astronomia grega e como demonstração de que fenômenos celestes podiam ser antecipados por cálculo.',
      curiosidade: 'Historiadores da ciência divergem sobre se Tales previu a data exata ou apenas o ano provável; o registro de Heródoto é a única fonte próxima do evento.'
    },
    'Protágoras||Sobre a Verdade': {
      sobre: 'Obra de que restou principalmente a frase de abertura, segundo a qual o ser humano é a medida de todas as coisas, das que são como são e das que não são como não são. É a formulação clássica do relativismo grego.',
      contexto: 'Produzida em Atenas no século V antes de Cristo, quando os sofistas ensinavam retórica e argumentação a cidadãos que precisavam falar em assembleia e em tribunal.',
      momento: 'Composta por volta de 440 antes de Cristo; é conhecida por citações em Platão, sobretudo no diálogo Teeteto, e em Sexto Empírico.',
      importancia: 'Fixou a posição contra a qual Platão construiu grande parte de sua teoria do conhecimento, e continua sendo referência em debates sobre relativismo e verdade.',
      curiosidade: 'A obra é conhecida apenas por fragmentos e citações indiretas; nenhum texto integral de Protágoras chegou até nós.'
    },
    'Protágoras||Sobre os Deuses': {
      sobre: 'Tratado de que se preservou a frase inicial, em que o autor declara não poder afirmar nem se os deuses existem nem se não existem, nem que forma teriam, alegando a obscuridade do assunto e a brevidade da vida humana.',
      contexto: 'Escrito em uma Atenas em que a religião cívica era assunto de Estado e a suspensão do juízo sobre os deuses podia ser lida como impiedade.',
      momento: 'Composto no século V antes de Cristo; a tradição antiga relata que o livro foi queimado publicamente em Atenas e o autor obrigado a deixar a cidade.',
      importancia: 'É o primeiro registro conhecido de uma posição agnóstica explícita no pensamento ocidental, e por isso é citado em toda a história do debate sobre a existência divina.',
      curiosidade: 'Restou apenas a sentença de abertura, transmitida por Diógenes Laércio e por Cícero; o corpo do tratado está perdido.'
    },
    'Pitágoras||Teorema de Pitágoras': {
      sobre: 'Relação segundo a qual, em qualquer triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos cateto. É atribuída à escola pitagórica, que teria sido a primeira a demonstrá-la de forma geral.',
      contexto: 'Casos particulares da relação eram conhecidos e usados na Babilônia, no Egito e na Índia séculos antes, para medição de terras e construção; a contribuição grega foi a exigência de prova válida para todos os casos.',
      momento: 'Atribuída ao século VI antes de Cristo; a demonstração que chegou até nós aparece nos Elementos de Euclides, cerca de três séculos depois.',
      importancia: 'É o resultado mais conhecido da matemática elementar, base da trigonometria, da geometria analítica e do cálculo de distâncias em qualquer número de dimensões.',
      curiosidade: 'A descoberta, pela própria escola, de que a diagonal do quadrado não pode ser expressa como razão entre inteiros provocou a primeira crise de fundamentos da matemática grega.'
    },
    'Pitágoras||Escola pitagórica': {
      sobre: 'Comunidade fundada em Crotona, no sul da Itália, que unia investigação matemática, astronomia, música e regras rígidas de conduta, e que sustentava que a estrutura da realidade pode ser expressa por números e proporções.',
      contexto: 'Formada em uma cidade grega da Magna Grécia, a escola funcionava ao mesmo tempo como confraria religiosa, comunidade de estudo e força política local, o que acabou provocando sua perseguição.',
      momento: 'Ativa a partir de cerca de 530 antes de Cristo; o pensamento do grupo é conhecido por relatos posteriores, pois seus membros mantinham sigilo e não assinavam descobertas individualmente.',
      importancia: 'Introduziu a ideia de que a natureza é matematicamente inteligível, princípio que atravessa Platão, Kepler e a física moderna. Estabeleceu também a relação numérica entre comprimento de corda e intervalo musical.',
      curiosidade: 'A regra de atribuir todas as descobertas ao mestre torna impossível saber o que foi de Pitágoras e o que foi de seus discípulos; o acervo registra as atribuições como a tradição as transmitiu.'
    },
    'Dom Pedro II||Diário do Imperador': {
      sobre: 'Registro pessoal mantido ao longo de décadas, com anotações sobre leituras, viagens, audiências, ciência e política. O tom é seco e minucioso, mais de observador que de governante em exercício.',
      contexto: 'Escrito por um monarca que reinou por quase meio século e que dedicava boa parte do tempo a astronomia, línguas e correspondência com cientistas europeus.',
      momento: 'Cobre principalmente o período de 1840 a 1891; os cadernos foram preservados pela família e publicados em edições críticas no século XX.',
      importancia: 'É fonte primária essencial sobre o Segundo Reinado, sobre a rotina do poder no Império e sobre as redes intelectuais que ligavam o Brasil à Europa.',
      curiosidade: 'Os diários registram o encontro do imperador com Graham Bell na Exposição da Filadélfia, em 1876, onde ele testou pessoalmente o telefone.'
    },
    'Dom Pedro II||Lei Áurea': {
      sobre: 'Lei de dois artigos que declarou extinta a escravidão no Brasil, sancionada pela princesa Isabel na condição de regente, durante viagem do imperador à Europa.',
      contexto: 'Aprovada após décadas de pressão do movimento abolicionista, de fugas em massa, da recusa do Exército em perseguir fugitivos e de leis parciais anteriores, como a do Ventre Livre e a dos Sexagenários.',
      momento: 'Sancionada em 13 de maio de 1888; o Brasil foi o último país das Américas a abolir a escravidão.',
      importancia: 'Encerrou juridicamente quase quatro séculos de escravidão no país. A ausência de qualquer medida de reparação, acesso à terra ou educação para os libertos é apontada como origem direta de desigualdades que persistem.',
      curiosidade: 'A lei é atribuída no acervo ao reinado de Pedro II por ter sido promulgada em seu nome; o ato foi assinado pela princesa Isabel, que exercia a regência.'
    },
    'Ulysses Guimarães||Discurso de promulgação da Constituição de 1988': {
      sobre: 'Discurso pronunciado como presidente da Assembleia Nacional Constituinte no ato de promulgação da nova Constituição, em que Ulysses a chama de Constituição cidadã e contrapõe o texto recém-aprovado aos anos de arbítrio.',
      contexto: 'Proferido ao fim de vinte meses de trabalho constituinte e de vinte e um anos de regime militar, em um país que retomava as liberdades civis e ainda não havia realizado eleição direta para presidente.',
      momento: 'Proferido em Brasília em 5 de outubro de 1988, no plenário do Congresso Nacional.',
      importancia: 'É o registro oficial do encerramento da transição democrática brasileira e a origem da expressão Constituição cidadã, com que o texto de 1988 passou a ser designado.',
      curiosidade: 'No mesmo discurso Ulysses ergueu o exemplar da Constituição diante do plenário, gesto que se tornou uma das imagens mais reproduzidas da história política recente do país.'
    },
    'Ulysses Guimarães||Campanha das Diretas Já': {
      sobre: 'Mobilização nacional pela emenda que restabeleceria a eleição direta para presidente, em que Ulysses atuou como uma das principais vozes nos comícios que reuniram multidões em São Paulo, Rio de Janeiro e Belo Horizonte.',
      contexto: 'Ocorreu no fim do regime militar, quando o presidente ainda era escolhido por colégio eleitoral, e reuniu partidos de oposição, sindicatos, igrejas e artistas em torno de uma pauta única.',
      momento: 'Auge entre 1983 e abril de 1984, quando a emenda Dante de Oliveira foi rejeitada na Câmara por falta de votos.',
      importancia: 'Foi a maior mobilização de rua da história brasileira até então e, apesar da derrota da emenda, tornou irreversível a transição que levou à Constituinte e às eleições diretas de 1989.',
      curiosidade: 'Ulysses era chamado de Senhor Diretas pela imprensa da época, apelido que acompanhou sua candidatura presidencial de 1989.'
    },
    'Michelle Bachelet||Reforma educacional chilena': {
      sobre: 'Conjunto de leis aprovadas em seu segundo mandato que proibiu o lucro, a seleção de alunos e o copagamento nas escolas que recebem recursos públicos, e criou gratuidade progressiva no ensino superior.',
      contexto: 'Respondeu a um ciclo de protestos estudantis massivos, iniciado em 2006 e retomado em 2011, contra um sistema educacional considerado o mais segregado da América Latina, herdado das reformas de mercado do regime militar.',
      momento: 'Aprovada entre 2015 e 2018, durante seu segundo governo.',
      importancia: 'Alterou a estrutura de financiamento da educação chilena construída ao longo de trinta anos e é apontada como a principal transformação social de seus mandatos.',
      curiosidade: 'Vários dos dirigentes estudantis que lideraram os protestos de 2011 foram eleitos deputados e participaram da tramitação das leis que reivindicavam.'
    },
    'Michelle Bachelet||Relatórios da ONU sobre direitos humanos': {
      sobre: 'Documentos produzidos sob sua responsabilidade como Alta Comissária das Nações Unidas para os Direitos Humanos, incluindo relatórios sobre Venezuela, Filipinas, Nicarágua, Xinjiang e territórios palestinos.',
      contexto: 'Elaborados em um período de retrocesso democrático em várias regiões e de pressão política intensa sobre o escritório, inclusive de países membros permanentes do Conselho de Segurança.',
      momento: 'Produzidos entre 2018 e 2022, período em que exerceu o cargo.',
      importancia: 'São fonte de referência para tribunais, organizações civis e imprensa internacional, e base de procedimentos abertos em cortes internacionais.',
      curiosidade: 'Bachelet foi presa e torturada durante a ditadura de Pinochet e exilou-se por anos, experiência que citava ao explicar sua atuação no cargo.'
    },
    'Christine Lagarde||Relatórios do FMI sobre desigualdade e gênero': {
      sobre: 'Linha de estudos institucionais conduzida durante sua direção-geral, que incorporou desigualdade de renda e participação econômica das mulheres às análises macroeconômicas do fundo, antes centradas em equilíbrio fiscal e inflação.',
      contexto: 'Produzida depois da crise financeira de 2008, quando a legitimidade das receitas de austeridade do fundo estava em questão e vários países cobravam revisão de seu diagnóstico.',
      momento: 'Desenvolvida entre 2011 e 2019, período em que Lagarde dirigiu o Fundo Monetário Internacional.',
      importancia: 'Deslocou a posição oficial da instituição, que passou a tratar desigualdade excessiva como risco ao crescimento, e não apenas como questão distributiva.',
      curiosidade: 'Lagarde foi a primeira mulher a dirigir o FMI e, depois, a primeira a presidir o Banco Central Europeu.'
    },
    'Rosalynn Carter||Cuidando de Quem Cuida': {
      sobre: 'Livro escrito com Susan Golant sobre a situação de quem cuida em casa de um parente doente ou idoso, com orientação prática e defesa de políticas públicas de apoio a cuidadores. Trata do esgotamento, do isolamento e do custo financeiro do cuidado.',
      contexto: 'Escrito a partir de décadas de trabalho da autora em saúde mental e de sua própria experiência familiar, em um país onde o cuidado domiciliar recai quase inteiramente sobre mulheres e não é remunerado.',
      momento: 'Publicado em 1994, com o subtítulo Ajuda para Cuidadores em Família.',
      importancia: 'É referência nos Estados Unidos sobre cuidado informal e serviu de base ao programa de bolsas para cuidadores que leva seu nome no Centro Carter.',
      curiosidade: 'A frase que ela repetia sobre existirem apenas quatro tipos de pessoas — quem já cuidou, quem cuida, quem vai cuidar e quem vai precisar de cuidado — vem deste trabalho.'
    },
    'Rosalynn Carter||Lei de Saúde Mental de 1980': {
      sobre: 'Lei federal americana que reorganizou o financiamento de serviços comunitários de saúde mental, resultado do trabalho da comissão presidencial que Rosalynn Carter presidiu como primeira-dama.',
      contexto: 'Proposta em um momento em que o fechamento de grandes hospitais psiquiátricos não havia sido acompanhado da criação de serviços locais, deixando pacientes sem atendimento e nas ruas.',
      momento: 'Sancionada em outubro de 1980; foi em grande parte revogada no ano seguinte pela nova administração, que converteu os recursos em repasses sem destinação obrigatória.',
      importancia: 'É o principal resultado legislativo de sua atuação pública e continua sendo citada nos debates americanos sobre desinstitucionalização e financiamento de saúde mental.',
      curiosidade: 'Rosalynn Carter depôs no Senado em defesa do projeto, o que a tornou a segunda primeira-dama a testemunhar diante do Congresso, depois de Eleanor Roosevelt.'
    },
    'Osho||O Livro dos Segredos': {
      sobre: 'Comentário longo sobre as cento e doze técnicas de meditação descritas no texto tântrico Vigyan Bhairav Tantra, em que cada método é explicado e situado na experiência cotidiana de quem o pratica.',
      contexto: 'Transcrito de séries de palestras dadas na Índia ao longo de vários anos, para um público de ouvintes indianos e estrangeiros que acompanhavam seus discursos diários.',
      momento: 'Publicado a partir de 1974, reunindo discursos proferidos nos anos anteriores; circulou também em cinco volumes separados.',
      importancia: 'É a obra mais extensa de seu corpus e a principal referência para o estudo de seu método de meditação, recorrentemente reeditada em dezenas de idiomas.',
      curiosidade: 'Os livros de Osho são todos transcrições de fala: ele não escreveu nenhum de seus mais de seiscentos títulos, todos organizados a partir de gravações.'
    },
    'Osho||Coragem: O Prazer de Viver Perigosamente': {
      sobre: 'Reunião de discursos sobre a coragem entendida não como ausência de medo, mas como disposição de agir com o medo presente. Trata da insegurança como condição de qualquer escolha viva e critica a busca de garantias.',
      contexto: 'Organizado para a série Insights para uma Nova Maneira de Viver, coleção temática montada a partir de seu acervo de palestras para leitores ocidentais.',
      momento: 'Publicado em 1999, após sua morte, ocorrida em 1990.',
      importancia: 'É o título de maior circulação da série e a fonte de grande parte das frases sobre risco e medo atribuídas a ele.',
      curiosidade: 'A série reúne os temas por recorte editorial e não por ordem cronológica das palestras, o que explica por que discursos de anos diferentes aparecem no mesmo volume.'
    },
    'Osho||Consciência: A Chave para Viver em Equilíbrio': {
      sobre: 'Exposição do que Osho chama de atenção testemunhal: observar pensamento e emoção sem se identificar com eles. O texto opõe reação automática e resposta consciente e apresenta a prática como aplicável ao trabalho e às relações.',
      contexto: 'Montado a partir de discursos em que ele respondia a perguntas de ouvintes, formato que dá ao livro a estrutura de objeção e resposta.',
      momento: 'Publicado em 2001, também na série Insights para uma Nova Maneira de Viver.',
      importancia: 'É um dos volumes mais usados como introdução ao seu pensamento e circula em mais de vinte idiomas.',
      curiosidade: 'O acervo mantém o nome Osho, adotado por ele no fim da vida; boa parte das palestras que originaram estes livros foi proferida quando ainda se chamava Bhagwan Shree Rajneesh.'
    },
    'Mark Zuckerberg||Facebook': {
      sobre: 'Rede social criada em Harvard como diretório de estudantes e aberta ao público em 2006, que organizou a vida social de bilhões de pessoas em torno de um feed ordenado por algoritmo e sustentado por publicidade segmentada.',
      contexto: 'Surgiu quando existiam redes sociais concorrentes de alcance maior, como MySpace e Orkut, e diferenciou-se pela exigência inicial de identidade real vinculada a instituição de ensino.',
      momento: 'Lançado em fevereiro de 2004; passou de um bilhão de usuários ativos mensais em 2012 e de três bilhões na década seguinte.',
      importancia: 'Reorganizou a distribuição de notícias, a publicidade e a comunicação pessoal em escala global, e colocou no centro do debate político as questões de privacidade, moderação de conteúdo e desinformação.',
      curiosidade: 'A disputa judicial sobre a origem da ideia, movida por colegas de Harvard, foi encerrada em acordo e é tratada no filme A Rede Social, de 2010.'
    },
    'Mark Zuckerberg||Carta aos investidores na abertura de capital do Facebook': {
      sobre: 'Carta anexada ao registro da oferta pública de ações, em que o fundador define a empresa como movida por uma missão social antes que pelo lucro e descreve a cultura interna que chama de The Hacker Way: iterar rápido, tolerar erro, decidir perto da execução.',
      contexto: 'Escrita quando a empresa se preparava para a maior abertura de capital de uma companhia de tecnologia até então, e precisava explicar a investidores por que manteria o controle acionário concentrado.',
      momento: 'Divulgada em fevereiro de 2012; a oferta ocorreu em maio do mesmo ano.',
      importancia: 'Tornou-se documento de referência sobre como fundadores comunicam valores e estrutura de poder a acionistas, e é estudada em cursos de governança corporativa.',
      curiosidade: 'A carta afirma explicitamente que a empresa não foi criada para ser uma empresa, formulação que passou a ser citada como exemplo do discurso de missão no setor de tecnologia.'
    },
    'Ban Ki-moon||Agenda 2030 e os Objetivos de Desenvolvimento Sustentável': {
      sobre: 'Documento aprovado por unanimidade pela Assembleia Geral da ONU que fixa dezessete objetivos e cento e sessenta e nove metas até 2030, ligando pobreza, saúde, educação, igualdade de gênero, clima e desigualdade em uma agenda única.',
      contexto: 'Negociado para substituir as Metas do Milênio, que venciam em 2015 e cobriam apenas países em desenvolvimento; a nova agenda passou a valer para todos os países, inclusive os mais ricos.',
      momento: 'Adotado em setembro de 2015, durante o segundo mandato de Ban Ki-moon como secretário-geral.',
      importancia: 'Tornou-se a principal referência internacional para planejamento de políticas públicas e para relatórios de impacto de empresas e organizações.',
      curiosidade: 'O processo de consulta que precedeu o texto envolveu pesquisas com milhões de pessoas em mais de cem países, o maior levantamento já feito pela organização.'
    },
    'Ban Ki-moon||Mobilização diplomática para o Acordo de Paris': {
      sobre: 'Articulação sustentada ao longo de quase uma década para levar cento e noventa e cinco países a um compromisso climático comum, com base em metas nacionais voluntárias em vez de limites impostos de cima.',
      contexto: 'Ocorreu depois do fracasso da conferência de Copenhague, em 2009, que havia deixado a negociação climática internacional paralisada e desacreditada.',
      momento: 'Culminou na conferência de Paris, em dezembro de 2015; incluiu a cúpula climática de Nova York em 2014 e negociação direta com Estados Unidos, China e Índia.',
      importancia: 'Resultou no primeiro acordo climático de adesão praticamente universal e é apontada como a principal realização de seus dois mandatos na ONU.',
      curiosidade: 'Ban Ki-moon visitou pessoalmente o Ártico e a Antártida durante o período, decisão deliberada de usar a imagem do cargo para sustentar a pauta.'
    }
  };
  function aplicar() {
    var n = 0,
      orf = [];
    for (var k in P) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (
        !l ||
        !l.some(function (o) {
          return o.t === t;
        })
      ) {
        orf.push(k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = P[k];
        n++;
      }
    }
    if (orf.length) console.warn('Fase 60c2 · ignoradas:', orf.join(' | '));
    console.log('MeMotiva · Fase 60c2: +' + n + ' páginas de obra.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var P = {
    'George Washington Carver||Como Cultivar o Amendoim e 105 Maneiras de Prepará-lo para o Consumo Humano': {
      sobre: 'Boletim de extensão rural com instruções de plantio, colheita e armazenamento do amendoim, seguidas de mais de cem receitas e aplicações industriais, de sopas e pães a substitutos de leite e café.',
      contexto: 'Publicado pelo Instituto Tuskegee para pequenos agricultores negros do sul dos Estados Unidos, cujos solos estavam esgotados por décadas de monocultura de algodão e que precisavam de mercado para a cultura que recuperava a terra.',
      momento: 'Publicado em 1916, como boletim número trinta e um da estação experimental de Tuskegee.',
      importancia: 'Foi o mais difundido dos quarenta e quatro boletins que Carver escreveu e o instrumento que tornou o amendoim uma cultura comercial viável no sul americano.',
      curiosidade: 'Carver escrevia os boletins em linguagem deliberadamente simples e os distribuía de graça, além de levá-los às fazendas em uma carroça adaptada como escola ambulante.'
    },
    'George Washington Carver||Pesquisas sobre rotação de culturas no sul dos Estados Unidos': {
      sobre: 'Programa de experimentação agrícola que demonstrou como alternar algodão com amendoim, batata-doce e outras leguminosas repõe o nitrogênio do solo e eleva a produtividade sem insumos caros.',
      contexto: 'Conduzido em uma região empobrecida pela monocultura e pelo endividamento dos arrendatários, em um momento em que a praga do bicudo do algodoeiro ameaçava destruir a única cultura da qual dependiam.',
      momento: 'Desenvolvido a partir de 1896, quando Carver assumiu a estação experimental de Tuskegee, e mantido por quase quatro décadas.',
      importancia: 'Mudou a prática agrícola de toda uma região e é o trabalho científico central de sua carreira, mais do que os usos industriais pelos quais ficou popularmente conhecido.',
      curiosidade: 'Carver recusou patentear a maioria de suas descobertas, argumentando que resultados obtidos com recursos públicos deveriam circular livremente entre os agricultores.'
    },
    'Hubert H. Humphrey||Discurso sobre direitos civis na Convenção Democrata de 1948': {
      sobre: 'Intervenção de cerca de dez minutos em que Humphrey, então prefeito de Minneapolis, exigiu que o Partido Democrata adotasse plataforma explícita de direitos civis, afirmando ser hora de sair da sombra dos direitos dos estados para a luz dos direitos humanos.',
      contexto: 'Proferido em um partido que dependia eleitoralmente do sul segregacionista e cuja liderança preferia manter a questão fora da plataforma para preservar a coalizão.',
      momento: 'Proferido na convenção da Filadélfia em julho de 1948; a proposta foi aprovada e delegações do Mississippi e do Alabama se retiraram do encontro.',
      importancia: 'Iniciou o realinhamento que levaria o partido a assumir a pauta dos direitos civis nas duas décadas seguintes e projetou Humphrey nacionalmente, elegendo-o senador no mesmo ano.',
      curiosidade: 'O discurso não constava da programação oficial: Humphrey conseguiu o tempo de tribuna às pressas para defender uma emenda minoritária à plataforma.'
    },
    'Hubert H. Humphrey||Lei dos Direitos Civis de 1964': {
      sobre: 'Condução da lei no Senado como responsável pela votação, incluindo a organização da base bipartidária que quebrou a obstrução mais longa da história da casa até então, com oitenta e três dias de debate contínuo.',
      contexto: 'O projeto enfrentava resistência de senadores do próprio partido e só poderia avançar com votos republicanos, o que exigiu negociação diária com a liderança da oposição.',
      momento: 'Aprovada em julho de 1964; a obstrução foi encerrada em junho, com setenta e um votos, quatro acima do mínimo necessário.',
      importancia: 'A lei proibiu a segregação em locais públicos e a discriminação no emprego por raça, cor, religião, sexo ou origem nacional, e é a legislação civil mais importante dos Estados Unidos no século XX.',
      curiosidade: 'Humphrey mantinha um controle diário de presença dos senadores favoráveis, para garantir quórum a qualquer hora, prática que se tornou modelo em votações difíceis.'
    },
    'Hubert H. Humphrey||A Educação de um Homem Público': {
      sobre: 'Autobiografia em que narra a trajetória de filho de farmacêutico no interior de Dakota do Sul a senador, vice-presidente e candidato derrotado à Presidência em 1968. Trata com franqueza do custo de sustentar a política de Lyndon Johnson no Vietnã.',
      contexto: 'Escrita no fim da vida, quando já lutava contra o câncer que o mataria em 1978, e quando sua reputação seguia marcada pela associação com uma guerra que ele próprio questionava em privado.',
      momento: 'Publicada em 1976, dois anos antes de sua morte.',
      importancia: 'É um dos relatos mais honestos sobre o funcionamento do compromisso na política americana e fonte primária sobre a aprovação da lei de direitos civis e sobre a campanha de 1968.',
      curiosidade: 'O livro relata que sua lealdade pública a Johnson na questão do Vietnã lhe custou o apoio da própria base e provavelmente a eleição presidencial.'
    },
    'Brian Chesky||Airbnb': {
      sobre: 'Plataforma de hospedagem entre pessoas, que conecta quem tem espaço disponível a quem procura acomodação, sustentada por avaliações mútuas, verificação de identidade e sistema de pagamento intermediado.',
      contexto: 'Nasceu de uma solução improvisada dos fundadores, que alugaram colchões infláveis no próprio apartamento durante uma conferência de design em São Francisco, quando os hotéis da cidade estavam lotados.',
      momento: 'Fundada em 2008; em 2020 abriu capital em bolsa, poucos meses após o colapso das viagens provocado pela pandemia.',
      importancia: 'Criou um mercado global de acomodação paralelo à rede hoteleira e alterou a economia do turismo urbano, abrindo em dezenas de cidades a discussão regulatória sobre aluguel de curta duração e seu efeito no preço da moradia.',
      curiosidade: 'Nos primeiros anos, os fundadores financiaram a empresa vendendo caixas de cereais temáticas produzidas para a campanha eleitoral americana de 2008.'
    },
    'Brian Chesky||Carta aos funcionários sobre a redução de equipe': {
      sobre: 'Comunicado divulgado publicamente quando a empresa demitiu cerca de um quarto do quadro, no qual Chesky detalha o raciocínio da decisão, o pacote oferecido aos demitidos e quais linhas de negócio seriam abandonadas.',
      contexto: 'Escrito quando as reservas da plataforma caíram mais de oitenta por cento em poucas semanas, no início da pandemia de covid-19, e a sobrevivência da empresa estava em dúvida.',
      momento: 'Divulgada em maio de 2020.',
      importancia: 'Passou a ser citada em escolas de administração como exemplo de comunicação em crise, por nomear a decisão e suas razões em vez de recorrer a linguagem corporativa evasiva.',
      curiosidade: 'A empresa criou um diretório público voluntário com os perfis dos demitidos, para facilitar sua recolocação, medida depois copiada por outras companhias do setor.'
    },
    'Ann Landers||Coluna Ask Ann Landers': {
      sobre: 'Coluna diária de conselhos escrita a partir de cartas de leitores sobre casamento, filhos, dinheiro, doença e conflito familiar, respondidas em texto curto, direto e com humor seco.',
      contexto: 'Esther Pauline Lederer assumiu o pseudônimo já existente em 1955 e o manteve por quase meio século, em uma imprensa de família que evitava tratar de alcoolismo, abuso, divórcio e sexualidade.',
      momento: 'Escrita de 1955 a 2002, ano de sua morte; chegou a sair em cerca de mil e duzentos jornais, com público estimado em noventa milhões de leitores.',
      importancia: 'Foi por décadas a coluna mais lida dos Estados Unidos e abriu espaço em jornais convencionais para assuntos até então silenciados, além de encaminhar leitores a serviços de apoio.',
      curiosidade: 'Sua irmã gêmea, Pauline Phillips, escrevia a coluna concorrente Dear Abby, e as duas passaram longos períodos sem se falar por causa da rivalidade profissional.'
    },
    'Ann Landers||Enciclopédia Ann Landers de A a Z': {
      sobre: 'Compilação em forma de verbetes das orientações acumuladas em mais de duas décadas de coluna, organizada por tema e revisada com apoio de médicos e especialistas em cada área.',
      contexto: 'Publicada quando a coluna já era instituição nacional e as cartas repetiam as mesmas dúvidas, o que tornou útil reunir as respostas em obra consultável.',
      momento: 'Publicada em 1978, com o subtítulo Melhoria do Lar e da Família.',
      importancia: 'Funcionou como manual doméstico de referência sobre saúde, relações e conflitos familiares em milhões de casas americanas, e reúne em forma permanente o repertório que a tornou autoridade popular.',
      curiosidade: 'A autora mantinha correspondência com especialistas de universidades e clínicas para checar as respostas médicas antes de publicá-las, prática incomum no gênero.'
    },
    'Christopher McCandless||Diário e anotações de Christopher McCandless': {
      sobre: 'Registro breve mantido durante os cento e treze dias em que viveu isolado num ônibus abandonado na Trilha Stampede, no Alasca, somado às inscrições deixadas nas paredes do veículo e às anotações nas margens dos livros que carregava.',
      contexto: 'Escrito por um jovem de vinte e quatro anos que havia abandonado a família, doado a poupança e viajado dois anos pelos Estados Unidos sob o nome de Alexander Supertramp antes de entrar no Alasca.',
      momento: 'As anotações cobrem abril a agosto de 1992; o corpo e o material foram encontrados em setembro do mesmo ano.',
      importancia: 'É a única fonte direta sobre sua experiência e sobre a mudança de tom de suas últimas semanas, e tornou-se público por meio do livro Na Natureza Selvagem, de Jon Krakauer, de 1996.',
      curiosidade: 'A anotação em que afirma que a felicidade só é real quando compartilhada foi escrita na margem de um livro de Tolstói e é a mais citada de todo o material.'
    },
    'John Templeton||Templeton Growth Fund': {
      sobre: 'Fundo de investimento pioneiro na compra sistemática de ações fora dos Estados Unidos, operado sobre a tese de que as melhores oportunidades aparecem onde o pessimismo do mercado é maior.',
      contexto: 'Criado quando investidores americanos praticamente não olhavam para fora do próprio mercado, e quando ações europeias e japonesas eram descartadas como risco excessivo no pós-guerra.',
      momento: 'Fundado em 1954 e operado por Templeton até 1992, quando vendeu a gestora; o fundo sustentou retorno médio anual próximo de quinze por cento nesse período.',
      importancia: 'Consolidou a prática do investimento global em valor e formou uma escola de gestores que aplicam a mesma lógica contracíclica.',
      curiosidade: 'Em 1939, no início da guerra, Templeton comprou cem ações de cada companhia americana negociada abaixo de um dólar, incluindo empresas em concordata; a maioria se recuperou.'
    },
    'John Templeton||O Humilde Caminho para a Verdade': {
      sobre: 'Ensaio em que o autor sustenta que religião e ciência compartilham a mesma disciplina básica: reconhecer o quanto ainda não se sabe. Propõe tratar afirmações espirituais como hipóteses abertas à revisão, e não como certezas fechadas.',
      contexto: 'Escrito por um investidor presbiteriano em um momento em que o debate público americano opunha ciência e fé como campos irreconciliáveis.',
      momento: 'Publicado em 1981, com o subtítulo Uma Abordagem Cientificamente Humilde de Novas Informações Espirituais.',
      importancia: 'É a exposição mais clara da posição que o levou a criar o prêmio e a fundação que levam seu nome, e o texto de referência do que chamou de teologia humilde.',
      curiosidade: 'Templeton estabeleceu que o valor do prêmio que criou fosse sempre superior ao do Nobel, por considerar que o progresso espiritual não deveria ser tratado como secundário.'
    },
    'John Templeton||Fundação John Templeton': {
      sobre: 'Instituição criada para financiar pesquisa na fronteira entre ciência, filosofia e religião, com linhas sobre consciência, livre-arbítrio, gratidão, perdão e propósito, e que mantém o Prêmio Templeton.',
      contexto: 'Fundada depois que o autor deixou a gestão de fundos, para dar continuidade institucional à tese de que questões espirituais podem ser investigadas com método.',
      momento: 'Fundada em 1987; o prêmio que administra é concedido desde 1972 e teve entre os primeiros laureados Madre Teresa de Calcutá.',
      importancia: 'Tornou-se uma das maiores financiadoras privadas de pesquisa nessa interface, com aporte anual na casa das centenas de milhões de dólares.',
      curiosidade: 'A fundação também financia pesquisa em ciências exatas, incluindo trabalhos de cosmologia e física teórica sobre as condições iniciais do universo.'
    },
    'Groucho Marx||Groucho e Eu': {
      sobre: 'Autobiografia que narra a infância pobre em Nova York, os anos de vaudeville com os irmãos e a passagem ao cinema, mantendo no texto o mesmo ritmo de piada dos palcos. Alterna relato factual e exagero declarado.',
      contexto: 'Escrita quando Groucho já era apresentador de televisão e figura popular por conta própria, separado da imagem coletiva dos irmãos Marx.',
      momento: 'Publicada em 1959, mais de vinte anos depois do auge do grupo no cinema.',
      importancia: 'É fonte de primeira mão sobre o teatro popular americano do início do século e sobre o funcionamento do circuito de vaudeville, além do registro mais completo de sua própria trajetória.',
      curiosidade: 'O livro é franco sobre a perda de quase toda a fortuna da família na quebra da bolsa de 1929, episódio que Groucho tratava como piada em público e como trauma no texto.'
    },
    'Groucho Marx||Uma Noite na Ópera': {
      sobre: 'Comédia dirigida por Sam Wood em que os irmãos Marx sabotam a estreia de uma companhia de ópera em Nova York. A cena da cabine de navio que se enche de gente é a sequência mais citada do cinema cômico americano.',
      contexto: 'Primeiro filme do grupo na MGM, feito sob orientação do produtor Irving Thalberg, que exigiu estrutura narrativa mais firme e testes das piadas em turnê teatral antes da filmagem.',
      momento: 'Lançado em 1935, depois da saída do grupo da Paramount.',
      importancia: 'É considerado o ponto mais alto da carreira dos irmãos Marx e integra a lista de preservação do Registro Nacional de Filmes dos Estados Unidos.',
      curiosidade: 'As cenas cômicas foram apresentadas ao vivo em teatros por várias semanas antes da filmagem, e os diálogos foram ajustados de acordo com a reação do público.'
    },
    'Groucho Marx||Memórias de um Amante Ardente': {
      sobre: 'Segundo volume autobiográfico, centrado nos casamentos, nas frustrações amorosas e na vaidade masculina, tratados como matéria de autoironia em episódios curtos em que o autor é sempre o alvo da piada.',
      contexto: 'Escrito na casa dos setenta anos, depois de três casamentos e três divórcios, e num momento em que o humorista já trabalhava a própria velhice como assunto público.',
      momento: 'Publicado em 1963, quatro anos depois de Groucho e Eu.',
      importancia: 'É o registro mais pessoal de sua obra escrita e fonte de várias das frases sobre casamento e idade que circulam com seu nome.',
      curiosidade: 'Groucho publicou ainda outros títulos e manteve correspondência literária com T. S. Eliot, que lhe escreveu pedindo uma fotografia autografada.'
    },
    'W. Somerset Maugham||Servidão Humana': {
      sobre: 'Romance de formação largamente autobiográfico que acompanha Philip Carey, órfão de pé torto, da infância rígida na casa do tio pastor aos estudos de arte em Paris e de medicina em Londres, e à obsessão por uma mulher que o despreza.',
      contexto: 'Escrito por um autor que havia sido órfão, criado por um tio clérigo, gago em lugar do defeito físico do personagem, e formado em medicina antes de viver de literatura.',
      momento: 'Publicado em 1915, em plena Primeira Guerra Mundial, quando Maugham servia como intérprete e depois como agente de inteligência britânico.',
      importancia: 'É tido como a obra central de Maugham e um dos grandes romances de formação em língua inglesa, estudado pelo modo como trata a perda da fé e a servidão afetiva.',
      curiosidade: 'O título vem de uma passagem da Ética de Spinoza sobre a sujeição humana às paixões.'
    },
    'W. Somerset Maugham||A Lua e Seis Vinténs': {
      sobre: 'História de Charles Strickland, corretor londrino que aos quarenta anos abandona mulher, filhos e emprego para pintar, e termina no Taiti. O narrador tenta compreender uma vocação que ignora qualquer obrigação moral, sem absolvê-la nem condená-la.',
      contexto: 'Inspirado de forma livre na trajetória de Paul Gauguin, cuja obra Maugham conheceu em viagem ao Taiti em 1917.',
      momento: 'Publicado em 1919, quatro anos depois de Servidão Humana.',
      importancia: 'É uma das formulações mais duras da literatura sobre o preço humano da criação artística, e permanece entre seus livros mais lidos.',
      curiosidade: 'Em viagem ao Taiti, Maugham comprou por cem francos uma porta de vidro pintada por Gauguin, que manteve consigo pelo resto da vida.'
    },
    'W. Somerset Maugham||O Fio da Navalha': {
      sobre: 'Acompanha Larry Darrell, piloto marcado pela Primeira Guerra, que recusa a carreira e o casamento previstos para procurar sentido na Europa e na Índia. O contraste com personagens dedicados a dinheiro e posição social organiza o livro.',
      contexto: 'Escrito durante a Segunda Guerra, quando Maugham vivia nos Estados Unidos, e a partir de seu interesse pelo vedanta, que estudou em viagem à Índia em 1938.',
      momento: 'Publicado em 1944; adaptado ao cinema em 1946 e novamente em 1984.',
      importancia: 'Foi um dos primeiros romances de grande público em língua inglesa a tratar a espiritualidade indiana com seriedade, e não como exotismo.',
      curiosidade: 'O título vem de uma passagem do Katha Upanishad, citada na epígrafe, segundo a qual o caminho da salvação é estreito e difícil como o fio de uma navalha.'
    },
    'W. Somerset Maugham||Resumindo': {
      sobre: 'Balanço do próprio ofício feito aos sessenta e quatro anos, em que o autor expõe sem cerimônia o que aprendeu como dramaturgo e romancista, discute estilo, público, observação e invenção, e delimita o que considera seus limites.',
      contexto: 'Escrito quando Maugham era o autor vivo mais bem pago em língua inglesa e, ao mesmo tempo, tratado com reserva pela crítica literária séria.',
      momento: 'Publicado em 1938.',
      importancia: 'É leitura corrente em cursos de escrita pela clareza com que descreve o trabalho literário, e um dos textos mais honestos de um escritor sobre a própria medida.',
      curiosidade: 'No livro Maugham afirma estar na primeira fila dos escritores de segunda classe, avaliação que a crítica posterior citou tanto para concordar quanto para contestar.'
    },
    'Audrey Hepburn||A Princesa e o Plebeu': {
      sobre: 'Comédia romântica dirigida por William Wyler em que Hepburn interpreta uma princesa que escapa do protocolo para passar um dia anônima em Roma, ao lado de um jornalista americano que reconhece nela a chance de uma reportagem.',
      contexto: 'Filmado inteiramente na Itália, com uma atriz então desconhecida que passou por teste para o papel e cuja naturalidade na câmera de prova convenceu o diretor.',
      momento: 'Lançado em 1953; rendeu a Hepburn o Oscar de melhor atriz em seu primeiro papel principal em Hollywood.',
      importancia: 'Definiu um padrão de estrela baseado em elegância discreta, distinto do modelo dominante da época, e segue como referência clássica do gênero.',
      curiosidade: 'O roteirista Dalton Trumbo estava na lista negra de Hollywood e assinou o filme por meio de um intermediário; seu crédito foi restituído oficialmente décadas depois.'
    },
    'Audrey Hepburn||Bonequinha de Luxo': {
      sobre: 'Adaptação da novela de Truman Capote dirigida por Blake Edwards, em que Hepburn interpreta Holly Golightly, moça que sustenta em Nova York uma vida construída sobre aparências e sobre a fuga do próprio passado.',
      contexto: 'Filmada em um momento em que o cinema americano começava a tratar personagens femininas ambíguas, embora o roteiro tenha amenizado consideravelmente o material original.',
      momento: 'Lançado em 1961; a canção Moon River, de Henry Mancini e Johnny Mercer, ganhou o Oscar.',
      importancia: 'A abertura na vitrine da Tiffany tornou-se uma das imagens mais reproduzidas do século, e o papel é o mais associado à atriz.',
      curiosidade: 'Truman Capote queria Marilyn Monroe no papel e manifestou publicamente insatisfação com a escolha de Hepburn.'
    },
    'Audrey Hepburn||Trabalho como embaixadora do UNICEF': {
      sobre: 'Atuação em missões de campo na Etiópia, Sudão, Turquia, Vietnã, Bangladesh e Somália, com depoimentos ao Congresso americano e à imprensa internacional sobre fome, água potável e vacinação infantil.',
      contexto: 'Hepburn havia sido assistida por um antecessor do UNICEF na Holanda ocupada, ao fim da Segunda Guerra, experiência que citava como razão de aceitar a função.',
      momento: 'Exercida entre 1988 e 1992; a última missão, à Somália, ocorreu meses antes de sua morte, em janeiro de 1993.',
      importancia: 'Recusou o papel decorativo e viajou a áreas de conflito já doente, estabelecendo um padrão de atuação para embaixadores de boa vontade. Recebeu a Medalha Presidencial da Liberdade em 1992.',
      curiosidade: 'Seu salário no cargo era de um dólar por ano, valor simbólico previsto para o posto.'
    },
    'Aristóteles Onassis||Frota de navios-tanque da Olympic Maritime': {
      sobre: 'Uma das maiores frotas privadas de petroleiros do mundo, construída a partir do pós-guerra com aposta em navios de grande porte quando o setor ainda operava com embarcações pequenas.',
      contexto: 'Montada em um momento em que o transporte de petróleo crescia com a reconstrução europeia, e em que bancos hesitavam em financiar cascos de grande tonelagem.',
      momento: 'Desenvolvida a partir de 1946; Onassis havia comprado seus primeiros navios cargueiros canadenses ainda na década de 1930, por preço de sucata.',
      importancia: 'Foi a base de sua fortuna e popularizou a técnica de financiar a construção com contratos de afretamento de longo prazo firmados antes do navio existir, prática depois adotada por todo o setor.',
      curiosidade: 'Onassis começou a vida como imigrante grego na Argentina, trabalhando como telefonista, e fez a primeira fortuna no comércio de tabaco antes de entrar na navegação.'
    },
    'Aristóteles Onassis||Olympic Airways': {
      sobre: 'Companhia aérea nacional grega, adquirida do Estado por concessão exclusiva e operada por ele durante mais de vinte anos, com renovação de frota e abertura de rotas transatlânticas.',
      contexto: 'Assumida quando a aviação civil grega era pequena e deficitária, e o governo buscava um operador privado capaz de sustentar a ligação aérea do país.',
      momento: 'Adquirida em 1957; Onassis devolveu a empresa ao Estado em 1974, após desentendimentos com o governo e a morte do filho em acidente aéreo.',
      importancia: 'Ampliou de forma duradoura a conexão aérea da Grécia com o mundo e foi tratada por ele como vitrine internacional do país.',
      curiosidade: 'O único filho de Onassis, Alexander, morreu em 1973 na queda de um hidroavião da própria companhia, episódio que o levou a perder interesse pelo negócio.'
    },
    'Karl Menninger||Clínica Menninger': {
      sobre: 'Centro de tratamento psiquiátrico fundado com o pai e o irmão em Topeka, no Kansas, que substituiu o modelo do asilo por equipes multidisciplinares, ambiente terapêutico planejado e formação sistemática de residentes.',
      contexto: 'Criada quando o tratamento psiquiátrico americano se resumia em grande parte à internação de longo prazo em instituições estatais superlotadas, sem programa terapêutico definido.',
      momento: 'Fundada em 1925; tornou-se depois da Segunda Guerra o principal polo de treinamento psiquiátrico dos Estados Unidos.',
      importancia: 'Formou uma geração inteira de psiquiatras americanos e mudou a prática nacional em saúde mental, levando a psicanálise ao sistema hospitalar.',
      curiosidade: 'Durante a Segunda Guerra, cerca de um em cada cinco psiquiatras do Exército americano havia recebido formação na clínica.'
    },
    'Karl Menninger||O Homem Contra Si Mesmo': {
      sobre: 'Estudo sobre as formas de autodestruição, das mais declaradas às que se manifestam de modo indireto, como dependência alcoólica, acidentes repetidos, automutilação e sabotagem da própria saúde.',
      contexto: 'Escrito em um momento em que a psiquiatria americana tratava esses comportamentos como quadros isolados e sem relação entre si.',
      momento: 'Publicado em 1938.',
      importancia: 'Propôs lê-los como um mesmo contínuo de intensidade variável, leitura que influenciou a psiquiatria e a psicologia clínica do século XX e é citada até hoje em suicidologia.',
      curiosidade: 'O livro é considerado um dos textos fundadores do estudo sistemático da autodestrutividade como categoria clínica ampla.'
    },
    'Karl Menninger||A Mente Vital': {
      sobre: 'Proposta de classificar o transtorno mental por graus de desorganização do equilíbrio da pessoa, e não por rótulos diagnósticos fixos. Sustenta que a doença é processo com etapas reversíveis, não categoria à qual o paciente pertence.',
      contexto: 'Escrito no período em que a psiquiatria americana consolidava manuais diagnósticos de categorias discretas, direção oposta à que o autor defendia.',
      momento: 'Publicado em 1963, com o subtítulo Um Guia para a Doença e a Saúde Mental.',
      importancia: 'Influenciou o debate sobre a validade do diagnóstico psiquiátrico categórico, discussão que segue aberta na formulação de manuais internacionais.',
      curiosidade: 'Menninger dedicou um livro posterior, de 1973, a questionar se o próprio conceito de doença mental não havia substituído indevidamente o de responsabilidade moral.'
    },
    'Napoleão III||Ideias Napoleônicas': {
      sobre: 'Exposição doutrinária em que o futuro imperador apresenta o bonapartismo como regime capaz de combinar autoridade central forte, sufrágio universal masculino e progresso material, em oposição tanto à monarquia legitimista quanto ao parlamentarismo liberal.',
      contexto: 'Escrito no exílio, quando era apenas sobrinho de Napoleão I e conspirava para retornar à França, e destinado a construir base política para essa volta.',
      momento: 'Publicado em 1839; nove anos depois seria eleito presidente da República francesa por sufrágio universal.',
      importancia: 'É o documento fundador do bonapartismo como ideologia e serviu de programa efetivo para seu governo, que aplicou vários de seus pontos, do plebiscito às grandes obras públicas.',
      curiosidade: 'O autor foi preso após duas tentativas frustradas de golpe e escreveu parte de sua obra política durante os seis anos que passou na fortaleza de Ham.'
    },
    'Napoleão III||Reforma urbana de Paris': {
      sobre: 'Reconstrução da capital francesa conduzida sob sua ordem pelo prefeito Georges-Eugène Haussmann, com abertura de grandes avenidas retilíneas, rede de esgoto e água, parques, mercados, estações e padronização das fachadas.',
      contexto: 'Paris era então uma cidade medieval superlotada, com epidemias recorrentes de cólera e ruas estreitas que favoreciam barricadas, questão sensível para um regime nascido de golpe.',
      momento: 'Executada entre 1853 e 1870; consumiu recursos equivalentes a vários orçamentos anuais do Estado francês.',
      importancia: 'Definiu a forma da Paris atual e tornou-se modelo de intervenção urbana em cidades de todo o mundo, incluindo reformas no Rio de Janeiro e em Buenos Aires.',
      curiosidade: 'A obra deslocou dezenas de milhares de moradores pobres do centro para a periferia, efeito que está na origem do vocabulário crítico sobre remoção urbana.'
    },
    'Napoleão III||História de Júlio César': {
      sobre: 'Estudo histórico em que o imperador defende a figura do governante excepcional que impõe ordem e progresso contra a inércia das instituições, usando a Roma de César como espelho de seu próprio regime.',
      contexto: 'Preparado com apoio de eruditos e arquivistas do Estado, e publicado quando o regime enfrentava crítica crescente de liberais e republicanos.',
      momento: 'Publicado em 1865; ficou inacabado, com apenas dois dos volumes previstos.',
      importancia: 'Interessa hoje menos pela pesquisa histórica que como declaração indireta de um projeto político, e é fonte para o estudo da autolegitimação do Segundo Império.',
      curiosidade: 'O autor patrocinou escavações arqueológicas em Alésia para localizar o cerco descrito por César, trabalho que deu origem a pesquisas de campo que seguem em curso.'
    }
  };
  function aplicar() {
    var n = 0,
      orf = [];
    for (var k in P) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (
        !l ||
        !l.some(function (o) {
          return o.t === t;
        })
      ) {
        orf.push(k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = P[k];
        n++;
      }
    }
    if (orf.length) console.warn('Fase 60c3 · ignoradas:', orf.join(' | '));
    console.log('MeMotiva · Fase 60c3: +' + n + ' páginas de obra.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var P = {
    'Robert Ingersoll||Os Deuses': {
      sobre: 'Conferência publicada em que Ingersoll examina a pluralidade histórica de divindades para concluir que cada povo criou seus deuses à própria imagem, e defende o livre exame e a separação entre Estado e religião.',
      contexto: 'Proferida em um país onde o protestantismo organizava a vida pública e onde a crítica religiosa aberta podia custar carreira e reputação, por um advogado que se apresentava em teatros lotados.',
      momento: 'Publicada em 1872, quando o autor era procurador-geral do estado de Illinois.',
      importancia: 'Consolidou sua reputação nacional e deu ao público americano um texto de crítica religiosa escrito em linguagem de tribuna, acessível a leitores sem formação teológica.',
      curiosidade: 'Ingersoll cobrava ingresso para suas conferências e chegava a encher teatros de mais de três mil lugares, o que o tornou um dos oradores mais bem pagos de seu tempo.'
    },
    'Robert Ingersoll||Alguns Erros de Moisés': {
      sobre: 'Crítica sistemática às contradições internas do Pentateuco, tratadas com ironia e argumento acessível, em que o autor sustenta que a moral não depende da literalidade das escrituras.',
      contexto: 'Publicada em pleno debate americano sobre evolução e interpretação bíblica, poucos anos depois da difusão das teses de Darwin nos Estados Unidos.',
      momento: 'Publicada em 1879, a partir de conferências proferidas nos anos anteriores.',
      importancia: 'Foi o livro de maior circulação do autor e fez dele o mais conhecido livre-pensador dos Estados Unidos no século XIX.',
      curiosidade: 'Apesar de sua posição sobre religião, Ingersoll manteve carreira política no Partido Republicano e foi responsável por um dos discursos de indicação presidencial mais célebres da história americana.'
    },
    'Robert Ingersoll||Por Que Sou Agnóstico': {
      sobre: 'Exposição pessoal das razões de sua posição, em que descreve a passagem da fé herdada à recusa de afirmar o que não se pode saber, distingue agnosticismo de negação dogmática e rejeita a acusação de amoralidade.',
      contexto: 'Escrita perto do fim da vida, por alguém que havia sido criado por um pastor congregacionalista e passado décadas defendendo publicamente o livre-pensamento.',
      momento: 'Publicada em 1896, três anos antes de sua morte.',
      importancia: 'Permanece uma das formulações clássicas do agnosticismo em língua inglesa e é citada regularmente em antologias de filosofia da religião.',
      curiosidade: 'Ingersoll era conhecido por discursar em funerais de amigos sem qualquer referência à vida após a morte, prática que causava escândalo na imprensa da época.'
    },
    'Henry Ward Beecher||Palestras a Jovens': {
      sobre: 'Série de conferências publicadas em que Beecher orienta rapazes recém-chegados às cidades sobre trabalho, dinheiro, companhia e caráter, tratando de jogo, ociosidade e endividamento com exemplos concretos.',
      contexto: 'Escrita durante seu pastorado em Indianápolis, em um período de migração acelerada do campo para as cidades americanas, quando jovens sem vínculo familiar chegavam sozinhos aos centros urbanos.',
      momento: 'Publicada em 1844, três anos antes de sua ida para Brooklyn.',
      importancia: 'Foi um dos livros de formação moral mais lidos nos Estados Unidos do século XIX e o texto que projetou seu nome antes dos sermões abolicionistas.',
      curiosidade: 'O tom narrativo e o uso de casos concretos, incomuns em literatura moral da época, são apontados como a razão de seu alcance fora dos círculos religiosos.'
    },
    'Henry Ward Beecher||Sermões da Plymouth Church': {
      sobre: 'Pregações semanais feitas na igreja de Brooklyn ao longo de quatro décadas, taquigrafadas e publicadas em jornais de todo o país, em que o púlpito foi usado para defender a abolição da escravidão e, depois, o sufrágio feminino.',
      contexto: 'Beecher pregava a auditórios de mais de duas mil pessoas em uma igreja que se tornou centro do abolicionismo do norte, e em um país que caminhava para a guerra civil.',
      momento: 'Proferidos a partir de 1847; durante a Guerra Civil, Beecher viajou à Inglaterra para pregar contra o reconhecimento britânico da Confederação.',
      importancia: 'Transformaram a igreja em polo político do abolicionismo e fizeram dele o pregador mais influente dos Estados Unidos em seu tempo.',
      curiosidade: 'Beecher chegou a realizar leilões simbólicos de pessoas escravizadas durante o culto, arrecadando com a congregação o valor necessário para comprar sua liberdade.'
    },
    'Henry Ward Beecher||Vida de Jesus, o Cristo': {
      sobre: 'Biografia devocional escrita em linguagem corrente, que apresenta Jesus sobretudo por sua dimensão humana e afetiva, em contraste com a ênfase calvinista no juízo e na danação.',
      contexto: 'Escrita por filho de Lyman Beecher, pregador calvinista rigoroso, e como recusa explícita do quadro teológico herdado do pai.',
      momento: 'Publicada em 1871; o segundo volume previsto só apareceu depois de sua morte.',
      importancia: 'Marcou a virada do protestantismo americano para um tom mais liberal, centrado no amor divino, e influenciou gerações de pregadores.',
      curiosidade: 'Sua irmã era Harriet Beecher Stowe, autora de A Cabana do Pai Tomás, o romance abolicionista de maior circulação no século XIX.'
    },
    'Malcolm Forbes||Os Ditos do Presidente Malcolm': {
      sobre: 'Coletânea de aforismos e observações curtas sobre negócios, dinheiro, trabalho, educação e vaidade, reunidas da coluna Fact and Comment que o autor assinava na revista da família.',
      contexto: 'Publicada quando compilações de máximas de líderes políticos, sobretudo o livro vermelho de Mao Tsé-Tung, circulavam amplamente, referência com que o título brinca.',
      momento: 'Publicada em 1978.',
      importancia: 'É a fonte da maioria das frases que circulam com seu nome e o registro mais direto de seu estilo como editor e comentarista.',
      curiosidade: 'A coluna Fact and Comment havia sido criada pelo pai do autor, B. C. Forbes, fundador da revista, e Malcolm a herdou junto com a publicação.'
    },
    'Malcolm Forbes||Direção editorial da revista Forbes': {
      sobre: 'Comando da revista herdada do pai, transformada em referência sobre empresas e fortunas, com a criação em 1982 da lista anual das quatrocentas maiores fortunas americanas e, depois, do ranking global de bilionários.',
      contexto: 'Assumido em um mercado em que revistas de negócios cobriam empresas, mas evitavam tratar da riqueza pessoal de seus donos como assunto jornalístico mensurável.',
      momento: 'Dirigida por ele de 1957 até sua morte, em 1990.',
      importancia: 'Fez da revista a principal medidora pública de fortunas, modelo copiado por publicações de todo o mundo, e multiplicou sua circulação.',
      curiosidade: 'Forbes usava seu próprio estilo de vida — balões de ar quente, motocicletas, castelos, um iate e festas amplamente noticiadas — como instrumento deliberado de promoção da revista.'
    },
    'Malcolm Forbes||Mais do que Sonhei': {
      sobre: 'Autobiografia em que narra a passagem de filho de imigrante escocês a editor milionário, e descreve sem pudor o gosto pelo consumo espetacular que fez dele personagem público.',
      contexto: 'Escrita quando o autor havia se tornado tão conhecido por suas festas e coleções quanto pela revista, e um ano depois da festa de aniversário que promoveu no Marrocos para centenas de convidados.',
      momento: 'Publicada em 1989, um ano antes de sua morte.',
      importancia: 'Registra uma figura que transformou o próprio consumo em estratégia editorial, e é fonte sobre a formação da imprensa americana de negócios.',
      curiosidade: 'O livro é franco sobre o valor promocional de seu estilo de vida, que ele descreve como investimento em visibilidade para a publicação.'
    },
    'James Dean||Vidas Amargas': {
      sobre: 'Adaptação por Elia Kazan do romance de John Steinbeck, em que Dean interpreta Cal Trask, filho que disputa o afeto de um pai severo com o irmão tido como exemplar, na Califórnia do início do século.',
      contexto: 'Filmado quando o método de interpretação do Actors Studio começava a chegar ao cinema comercial americano, e Kazan buscava um ator capaz de improvisar em cena.',
      momento: 'Lançado em março de 1955; foi o único filme de Dean em papel principal lançado antes de sua morte, em setembro do mesmo ano.',
      importancia: 'Rendeu-lhe indicação póstuma ao Oscar e introduziu ao grande público um registro de atuação construído com pausas, gestos improvisados e fala hesitante.',
      curiosidade: 'A cena em que Cal abraça o pai não constava do roteiro: Kazan manteve o improviso de Dean e o corte final da sequência.'
    },
    'James Dean||Juventude Transviada': {
      sobre: 'Drama de Nicholas Ray sobre um adolescente recém-chegado a uma cidade nova que enfrenta a violência dos colegas e a omissão dos pais, em vinte e quatro horas que terminam em tragédia.',
      contexto: 'Produzido em uma década em que a delinquência juvenil era pauta de comissões do Congresso americano, e tratada na imprensa como problema de caráter individual.',
      momento: 'Lançado em outubro de 1955, menos de um mês depois da morte do ator em acidente de automóvel.',
      importancia: 'Tratou a revolta juvenil como sintoma de família e de ausência de autoridade afetiva, e não como delinquência isolada. Integra o Registro Nacional de Filmes dos Estados Unidos.',
      curiosidade: 'A imagem de Dean de jaqueta vermelha e camiseta branca tornou-se símbolo de uma geração e é uma das mais reproduzidas da história do cinema.'
    },
    'James Dean||Assim Caminha a Humanidade': {
      sobre: 'Épico de George Stevens sobre três décadas de uma família de criadores de gado no Texas, em que Dean interpreta o peão Jett Rink, que enriquece com petróleo e envelhece amargurado e alcoolizado.',
      contexto: 'Rodado em locação no Texas, exigiu do ator um registro mais contido que nos filmes anteriores e a interpretação do mesmo personagem envelhecido em mais de vinte anos.',
      momento: 'Filmado em 1955 e lançado em 1956, depois de sua morte; as últimas cenas tiveram de ser dubladas por outro ator.',
      importancia: 'Rendeu-lhe a segunda indicação póstuma consecutiva ao Oscar, caso único na história da premiação, e é considerado um dos grandes filmes americanos sobre riqueza e ressentimento.',
      curiosidade: 'Dean é o único ator a receber duas indicações póstumas ao Oscar de melhor ator, por este filme e por Vidas Amargas.'
    },
    'Lady Gaga||The Fame': {
      sobre: 'Álbum de estreia que combina pop eletrônico de pista com uma encenação deliberada da fama como tema, e não apenas como consequência do sucesso. Os singles Just Dance e Poker Face a levaram ao primeiro lugar em mais de vinte países.',
      contexto: 'Lançado quando o pop americano vivia domínio do rhythm and blues e do hip hop, e a produção de música eletrônica de pista era considerada nicho europeu.',
      momento: 'Lançado em agosto de 2008; rendeu o Grammy de melhor álbum de dance eletrônico.',
      importancia: 'Definiu grande parte do som pop da década seguinte e estabeleceu a linguagem visual da artista, em que figurino e persona são parte da obra.',
      curiosidade: 'A cantora havia sido contratada e dispensada por uma gravadora antes disso, e trabalhava como compositora para outros artistas quando o álbum foi produzido.'
    },
    'Lady Gaga||Born This Way': {
      sobre: 'Álbum concebido como afirmação de identidade, cuja canção-título se tornou hino de aceitação para públicos LGBTQIA+ e para pessoas em situação de exclusão. A produção mistura pop, rock e referências religiosas na letra e na imagem.',
      contexto: 'Lançado em um momento de mobilização pelo casamento civil igualitário nos Estados Unidos, quando a artista já atuava publicamente na campanha contra a política militar que proibia militares assumidamente homossexuais.',
      momento: 'Lançado em maio de 2011; vendeu mais de um milhão de cópias na primeira semana nos Estados Unidos.',
      importancia: 'É o trabalho em que sua obra e seu ativismo passaram a ser inseparáveis, e a canção-título tornou-se uma das mais tocadas em manifestações por direitos civis na década.',
      curiosidade: 'A faixa foi escrita em dez minutos, segundo a autora, e gravada praticamente sem alterações em relação à primeira versão.'
    },
    'Lady Gaga||Nasce uma Estrela': {
      sobre: 'Quarta versão da história dirigida por Bradley Cooper, em que Gaga interpreta uma cantora que ascende profissionalmente enquanto seu mentor e companheiro afunda no alcoolismo e na perda de audição.',
      contexto: 'Filmado com as apresentações musicais gravadas ao vivo, decisão do diretor para evitar a artificialidade das cenas de palco dubladas.',
      momento: 'Lançado em 2018; rendeu indicação ao Oscar de melhor atriz e a estatueta de melhor canção original por Shallow.',
      importancia: 'Confirmou sua transição ao cinema como atriz dramática e é o trabalho de maior alcance comercial de sua carreira audiovisual.',
      curiosidade: 'A cena de abertura de sua personagem foi filmada em um bar de apresentações drag, ambiente em que a própria cantora começou a se apresentar em Nova York.'
    },
    'Lady Gaga||Fundação Born This Way': {
      sobre: 'Organização criada com a mãe, Cynthia Germanotta, voltada à saúde mental de jovens e ao combate ao assédio escolar, com programas de formação entre pares, pesquisa aplicada e material para escolas.',
      contexto: 'Fundada depois de anos em que a artista falava publicamente sobre o assédio que sofreu na adolescência e sobre a própria saúde mental.',
      momento: 'Fundada em 2012; mantém parceria com universidades e com serviços públicos de saúde nos Estados Unidos.',
      importancia: 'Deu forma institucional ao trabalho que ela já fazia pelos palcos e produz estudos usados por escolas e órgãos de saúde sobre bem-estar adolescente.',
      curiosidade: 'A fundação foi lançada em Harvard, em evento que reuniu pesquisadores de saúde mental e educadores, e não como ação promocional de um disco.'
    },
    'Howard Stevenson||Uma Perspectiva sobre o Empreendedorismo': {
      sobre: 'Texto acadêmico que define empreendedorismo como a busca de oportunidade independentemente dos recursos atualmente controlados, deslocando o foco do perfil psicológico do indivíduo para o comportamento diante da oportunidade.',
      contexto: 'Escrito na Harvard Business School em um momento em que o campo procurava traços de personalidade que distinguiriam o empreendedor, linha de pesquisa que produzia resultados inconclusivos.',
      momento: 'Publicado em 1983 como documento de trabalho da escola.',
      importancia: 'Tornou-se a definição mais citada do campo e permitiu estudar empreendedorismo também dentro de grandes organizações, e não apenas na criação de empresas.',
      curiosidade: 'A definição é usada como base curricular em escolas de negócios de todo o mundo, e Stevenson é reconhecido como o principal responsável pela consolidação do empreendedorismo como disciplina acadêmica em Harvard.'
    },
    'Howard Stevenson||O Suficiente': {
      sobre: 'Estudo escrito com Laura Nash a partir de entrevistas com executivos de alto desempenho, que propõe medir uma vida bem-sucedida por quatro eixos simultâneos: realização, felicidade, significado e legado.',
      contexto: 'Escrito a partir de pesquisa com profissionais que atingiram o topo de suas carreiras e relatavam, ainda assim, sensação de fracasso em outras dimensões da vida.',
      momento: 'Publicado em 2004, com o subtítulo Sucesso Verdadeiro e a Vida Bem Vivida.',
      importancia: 'É usado em programas de educação executiva sobre carreira e propósito, e sua tese central, de que perseguir apenas um dos eixos derruba os demais, é referência corrente na área.',
      curiosidade: 'Os autores propõem que os quatro eixos precisam ser renovados em ciclos curtos, e não equilibrados uma única vez, o que chamam de método do caleidoscópio.'
    },
    'Nicolas Hayek||Swatch': {
      sobre: 'Relógio suíço de plástico com pouco mais de cinquenta peças, em lugar das mais de cem usuais, projetado para ser preciso, barato e vendido como acessório de moda substituível.',
      contexto: 'Criado quando a indústria relojoeira suíça havia perdido a maior parte do mercado mundial para fabricantes japoneses de quartzo e demitido dezenas de milhares de trabalhadores.',
      momento: 'Lançado em 1983; passou de cem milhões de unidades vendidas em uma década.',
      importancia: 'Devolveu à Suíça o mercado de relógios de entrada e criou a categoria de relógio como acessório de moda, salvando a relojoaria nacional de um colapso coletivo.',
      curiosidade: 'A montagem foi projetada para dispensar manutenção: a caixa é selada por ultrassom e o relógio não foi pensado para ser aberto ou consertado.'
    },
    'Nicolas Hayek||Consolidação do Swatch Group': {
      sobre: 'Fusão das duas maiores holdings relojoeiras suíças em crise, a ASUAG e a SSIH, em um grupo único reunindo marcas de todas as faixas de preço, de Swatch a Omega, Longines e Breguet.',
      contexto: 'Hayek foi contratado pelos bancos credores como consultor para recomendar a liquidação das empresas; recomendou o oposto, a fusão, e comprou participação majoritária no grupo resultante.',
      momento: 'Fusão concretizada em 1983; Hayek assumiu o controle acionário em 1985.',
      importancia: 'O grupo tornou-se o maior fabricante de relógios do mundo e manteve produção e montagem na Suíça, contra a tendência de transferência para a Ásia.',
      curiosidade: 'O grupo produz também movimentos mecânicos usados por marcas concorrentes, posição que fez dele peça central de toda a cadeia relojoeira suíça.'
    },
    'Nicolas Hayek||Projeto do carro urbano Smart': {
      sobre: 'Concepção de um automóvel muito curto, de dois lugares, baixo consumo e painéis de carroceria trocáveis, pensado para cidades congestionadas e desenvolvido em parceria com a Mercedes-Benz.',
      contexto: 'Proposto por alguém de fora da indústria automobilística, que aplicou ao carro a lógica do Swatch: poucas peças, montagem modular e personalização visual como atrativo.',
      momento: 'Parceria firmada em 1994; o veículo chegou ao mercado europeu em 1998, já sem a participação de Hayek, que deixou o projeto por divergências técnicas.',
      importancia: 'Criou a categoria do carro urbano ultracompacto, seguida depois por outros fabricantes, e a marca permaneceu em produção por mais de duas décadas.',
      curiosidade: 'Hayek queria um carro híbrido ou elétrico desde o início e retirou-se do projeto quando a versão de produção adotou apenas motor a combustão.'
    },
    'Magalhães Pinto||Manifesto dos Mineiros': {
      sobre: 'Declaração assinada por noventa e duas figuras públicas de Minas Gerais pedindo o fim do Estado Novo e o retorno das liberdades constitucionais, redigida em plena ditadura e distribuída de forma clandestina.',
      contexto: 'Publicada quando o Brasil enviava tropas para combater o nazifascismo na Europa enquanto mantinha em casa um regime sem eleições, contradição que o texto explora diretamente.',
      momento: 'Divulgado em 24 de outubro de 1943; vários signatários, entre eles Magalhães Pinto, sofreram demissões e represálias profissionais.',
      importancia: 'É tido como o primeiro rompimento aberto das elites civis brasileiras com o Estado Novo e um marco do processo que levou à queda de Vargas em 1945.',
      curiosidade: 'O texto foi redigido principalmente por advogados e empresários mineiros e circulou em cópias datilografadas, já que nenhum jornal podia publicá-lo.'
    },
    'Magalhães Pinto||Banco Nacional': {
      sobre: 'Instituição financeira que dirigiu a partir de Minas Gerais, expandindo-a de banco regional a um dos maiores bancos privados do país e pioneira na informatização de agências no Brasil.',
      contexto: 'Construída em um período de forte expansão do crédito e de concentração bancária no Brasil, em que grupos regionais disputavam alcance nacional.',
      momento: 'Dirigida por ele a partir da década de 1940; o banco operou até 1995, quando foi liquidado e incorporado no contexto da crise bancária que levou à criação do programa federal de reestruturação do setor.',
      importancia: 'Foi a base econômica que sustentou sua atuação política como governador de Minas Gerais, ministro das Relações Exteriores e presidente da Câmara dos Deputados.',
      curiosidade: 'O banco foi um dos primeiros do país a adotar processamento eletrônico de dados em suas operações, na década de 1960.'
    },
    'Walter Winchell||Coluna On Broadway': {
      sobre: 'Coluna diária que misturava política, bastidores do teatro e vida privada de celebridades em frases curtas, ritmo telegráfico e gíria própria, muitas vezes inventada pelo autor.',
      contexto: 'Escrita em uma Nova York de jornais populares em disputa feroz por leitores, em que a informação de bastidor valia circulação e o colunista acumulava poder sobre reputações.',
      momento: 'Publicada no New York Daily Mirror a partir de 1929 e distribuída a centenas de jornais; seu público somado, contando o programa de rádio, foi estimado em cinquenta milhões de pessoas.',
      importancia: 'Criou o formato moderno da coluna de fofoca e o poder editorial de fazer e destruir carreiras, influência que atravessou o jornalismo de celebridades do século XX.',
      curiosidade: 'Winchell usou a coluna para atacar publicamente o nazismo e simpatizantes americanos de Hitler nos anos trinta, posição minoritária na imprensa da época.'
    },
    'Walter Winchell||Narração de Os Intocáveis': {
      sobre: 'Locução da série de televisão sobre o esquadrão de Eliot Ness em Chicago, feita no mesmo ritmo acelerado e telegráfico de seus programas de rádio, dando ao seriado o tom de crônica jornalística em tempo real.',
      contexto: 'Realizada quando sua coluna já havia perdido influência e o próprio colunista estava em declínio profissional, após anos de controvérsia política.',
      momento: 'Feita entre 1959 e 1963, ao longo das quatro temporadas da série.',
      importancia: 'Apresentou seu estilo a uma geração que já não lia sua coluna e é o trabalho pelo qual sua voz permaneceu reconhecível décadas depois.',
      curiosidade: 'A narração em terceira pessoa com data e hora precisas, que ele trouxe do rádio, tornou-se convenção de séries policiais americanas.'
    },
    'George Burns||The Burns and Allen Show': {
      sobre: 'Dupla de comédia formada com a esposa Gracie Allen, que atravessou o vaudeville, o rádio e a televisão, em que Burns construiu o papel do parceiro contido que apenas reage às confusões lógicas de Gracie.',
      contexto: 'Formada quando o padrão do vaudeville era o homem fazer as piadas e a mulher servir de contraponto; Burns inverteu a divisão ao perceber que o público ria das falas dela.',
      momento: 'A parceria começou em 1923 e o programa foi ao ar no rádio de 1932 a 1950 e na televisão de 1950 a 1958, encerrando-se com a aposentadoria de Gracie.',
      importancia: 'Definiu o formato da comédia doméstica americana e influenciou o desenho das séries de situação que se firmaram na televisão a partir dos anos cinquenta.',
      curiosidade: 'A versão televisiva foi uma das primeiras a romper a quarta parede: Burns falava diretamente com o público e comentava a própria trama em cena.'
    },
    'George Burns||Oh, Deus!': {
      sobre: 'Comédia de Carl Reiner em que Burns interpreta Deus como um senhor de boné e óculos que escolhe um gerente de supermercado para transmitir seu recado ao mundo, sem qualquer efeito especial.',
      contexto: 'Filmado quando o ator tinha oitenta e um anos e havia passado quase duas décadas sem papéis de destaque no cinema, depois da morte de Gracie Allen.',
      momento: 'Lançado em 1977; o roteiro é de Larry Gelbart, a partir do romance de Avery Corman.',
      importancia: 'Reinventou sua carreira cinematográfica, rendeu duas continuações e é lembrado pela decisão de representar o divino por meio de contenção e não de espetáculo.',
      curiosidade: 'Burns havia recebido o Oscar de ator coadjuvante dois anos antes por A Canção da Vitória, prêmio que veio depois de trinta e seis anos sem filmar.'
    },
    'George Burns||Gracie: Uma História de Amor': {
      sobre: 'Livro escrito mais de vinte anos após a morte da esposa, em que Burns reconstrói a parceria profissional e o casamento, admitindo o quanto de seu sucesso vinha do talento dela.',
      contexto: 'Escrito quando o autor tinha noventa e dois anos e era o último sobrevivente de sua geração de artistas de vaudeville.',
      momento: 'Publicado em 1988; Gracie Allen havia morrido em 1964.',
      importancia: 'É seu texto mais pessoal entre dez livros publicados e fonte de primeira mão sobre o vaudeville americano e a transição do rádio para a televisão.',
      curiosidade: 'Burns relatava visitar o túmulo da esposa uma vez por mês para conversar com ela, hábito que manteve por mais de três décadas e que o livro descreve.'
    },
    'Donald McGannon||Direção do Westinghouse Broadcasting': {
      sobre: 'Comando por mais de vinte e cinco anos do grupo de emissoras de rádio e televisão conhecido como Group W, em que impôs produção local de programas e noticiários contra a prática de simplesmente retransmitir a programação das redes nacionais.',
      contexto: 'Assumido em uma indústria em que emissoras afiliadas funcionavam como repetidoras e em que era comum gravadoras pagarem estações para tocar seus discos, prática conhecida como payola.',
      momento: 'Dirigiu o grupo de 1955 a 1981; recusou publicamente a aceitação de pagamento por execução musical antes de o escândalo do payola chegar ao Congresso americano.',
      importancia: 'Sua gestão é citada como padrão de responsabilidade editorial na radiodifusão americana, e o centro de pesquisa em comunicação da Universidade Fordham leva seu nome.',
      curiosidade: 'McGannon defendeu perante a Comissão Federal de Comunicações que emissoras locais tinham obrigação de produzir conteúdo próprio, posição que contrariava o interesse econômico das redes.'
    },
    'Woody Allen||Sem Plumas': {
      sobre: 'Coletânea de textos curtos de humor publicados originalmente na revista The New Yorker, entre eles paródias de tratados filosóficos, peças breves, diários apócrifos e resenhas de livros inexistentes.',
      contexto: 'Escrita no período em que o autor transitava entre a comédia de palco, o cinema e a colaboração regular com revistas literárias americanas.',
      momento: 'Publicada em 1975, entre as três coletâneas de prosa humorística que lançou.',
      importancia: 'É a mais conhecida de suas coletâneas de prosa e o registro mais claro de seu humor escrito, construído sobre o desencontro entre erudição e trivialidade.',
      curiosidade: 'O texto em que um personagem discute a morte com a própria morte, em tom de tratado, é um dos mais reproduzidos em antologias de humor americano.'
    },
    'Woody Allen||Noivo Neurótico, Noiva Nervosa': {
      sobre: 'Comédia em que o diretor reconstrói de forma fragmentada o fim de um relacionamento, usando narração direta à câmera, legendas com o pensamento dos personagens, animação e cenas de memória.',
      contexto: 'Feito quando o autor era conhecido por comédias de estrutura solta e piada acumulada, e representou uma mudança deliberada para material autobiográfico e construção narrativa mais ambiciosa.',
      momento: 'Lançado em 1977; ganhou quatro Oscars, entre eles melhor filme, melhor direção e melhor roteiro original.',
      importancia: 'Rompeu com a linearidade da comédia romântica e é apontado como sua obra mais influente, referência recorrente em filmes do gênero nas décadas seguintes.',
      curiosidade: 'O roteiro original era muito mais longo e incluía uma trama de assassinato, descartada na montagem em favor da história do casal.'
    },
    'Woody Allen||Manhattan': {
      sobre: 'Retrato em preto e branco de um grupo de intelectuais nova-iorquinos, filmado por Gordon Willis ao som de Gershwin, em que relações desequilibradas e autoengano moral são tratados com ironia que não protege o protagonista.',
      contexto: 'Filmado logo depois do sucesso de seu filme anterior, com liberdade de produção e a escolha de rodar em preto e branco e em tela larga para retratar a cidade como personagem.',
      momento: 'Lançado em 1979.',
      importancia: 'A sequência de abertura com a cidade e a trilha de Gershwin é uma das mais citadas do cinema americano, e o filme é referência sobre a representação de Nova York no cinema.',
      curiosidade: 'O próprio diretor manifestou publicamente insatisfação com o resultado e chegou a propor à distribuidora não lançá-lo.'
    },
    'Woody Allen||A Rosa Púrpura do Cairo': {
      sobre: 'História de uma garçonete da Grande Depressão cujo personagem favorito sai da tela do cinema para procurá-la, o que desorganiza tanto sua vida quanto o próprio filme dentro do filme.',
      contexto: 'Escrito em torno da função da ficção como refúgio em tempos de miséria, tema sugerido pela própria época em que a narrativa se passa.',
      momento: 'Lançado em 1985; foi um fracasso comercial nos Estados Unidos e sucesso de crítica na Europa.',
      importancia: 'Usa a premissa fantástica para discutir o que se busca na ficção quando a vida real não oferece saída, e o diretor o citou repetidamente como o mais próximo do que pretendia realizar.',
      curiosidade: 'O final, em que a protagonista permanece no cinema assistindo a outro filme, foi mantido contra a pressão do estúdio por um desfecho feliz.'
    },
    'Pat Riley||Showtime: Por Dentro da Temporada Decisiva dos Lakers': {
      sobre: 'Relato em primeira pessoa da temporada de 1986 e 1987 dos Los Angeles Lakers, escrito pelo próprio técnico durante a campanha, com descrição da rotina de treinos, da gestão de egos e da preparação psicológica do grupo.',
      contexto: 'Escrito no auge do time que ficou conhecido como Showtime, reunindo Magic Johnson, Kareem Abdul-Jabbar e James Worthy, em plena rivalidade com o Boston Celtics.',
      momento: 'Publicado em 1988; a temporada narrada terminou com o título da NBA.',
      importancia: 'É um dos primeiros registros internos de um vestiário campeão da NBA escrito pelo próprio treinador durante a disputa, e fonte corrente sobre aquela equipe.',
      curiosidade: 'Riley declarou publicamente, durante a comemoração do título de 1987, que o time repetiria a conquista no ano seguinte, promessa incomum que foi cumprida.'
    },
    'Pat Riley||O Vencedor Interior': {
      sobre: 'Sistematização do que o autor aprendeu como técnico em conceitos aplicáveis a qualquer equipe, entre eles a doença do eu, que descreve como o sucesso dissolve grupos vencedores, e o esforço de melhora contínua pactuado por todos os membros.',
      contexto: 'Escrito depois de quatro títulos da NBA como treinador e da passagem dos Lakers para o New York Knicks, quando o autor já era procurado para falar a plateias empresariais.',
      momento: 'Publicado em 1993, com o subtítulo Uma Estratégia de Vida para Equipes Campeãs.',
      importancia: 'Tornou-se leitura corrente em programas de liderança e gestão de equipes, e a expressão doença do eu passou a circular fora do esporte.',
      curiosidade: 'Riley pedia a cada jogador um compromisso mensurável de melhora percentual em uma estatística de sua escolha, prática que o livro apresenta como base do método.'
    }
  };
  function aplicar() {
    var n = 0,
      orf = [];
    for (var k in P) {
      var i = k.indexOf('||'),
        a = k.slice(0, i),
        t = k.slice(i + 2);
      var l = (typeof OBRAS !== 'undefined' && OBRAS[a]) || null;
      if (
        !l ||
        !l.some(function (o) {
          return o.t === t;
        })
      ) {
        orf.push(k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = P[k];
        n++;
      }
    }
    if (orf.length) console.warn('Fase 60c4 · ignoradas:', orf.join(' | '));
    console.log('MeMotiva · Fase 60c4: +' + n + ' páginas de obra.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  // Fase 60d — remoção de panoramas sem lastro no acervo.
  // Cada nome abaixo tinha panorama registrado mas nenhuma frase, obra ou história
  // associada, e a própria nota do registro declarava que a identidade ou a autoria
  // não pôde ser confirmada em fonte independente. Pela regra editorial do acervo,
  // registro sem confirmação não permanece no site.
  var REMOVER = ['Luiz Gasparetto', 'Chris Grosser', 'Bertram Carr', 'J. Petit Senn', 'Roy M. Goodman', 'Margaret Lee Runbeck', 'Hyman Schachtel', 'Marge Kennedy', 'Anthony Brandt', 'Gail Lumet Buckley'];
  function aplicar() {
    var n = 0,
      mantidos = [];
    for (var i = 0; i < REMOVER.length; i++) {
      var nome = REMOVER[i];
      if (!PERFIS_PROFUNDOS[nome]) continue;
      // salvaguarda: só remove se de fato não houver nada apontando para o nome
      var temFrase =
        typeof QUOTES !== 'undefined' &&
        QUOTES.some(function (q) {
          return q.author === nome;
        });
      var temObra = typeof OBRAS !== 'undefined' && !!(OBRAS[nome] && OBRAS[nome].length);
      var temHist =
        typeof STORIES !== 'undefined' &&
        STORIES.some(function (s) {
          return s && (s.autor === nome || s.author === nome || s.nome === nome);
        });
      if (temFrase || temObra || temHist) {
        mantidos.push(nome);
        continue;
      }
      delete PERFIS_PROFUNDOS[nome];
      if (typeof AUTOR_INDEX !== 'undefined' && AUTOR_INDEX && AUTOR_INDEX.delete) AUTOR_INDEX.delete(nome);
      n++;
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (mantidos.length) console.warn('Fase 60d · preservados por terem vínculo no acervo:', mantidos.join(' | '));
    console.log('MeMotiva · Fase 60d: ' + n + ' panoramas sem confirmação de identidade removidos.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Helen Keller': [
      [
        'Otimismo',
        'ensaio',
        1903,
        'Ensaio em três partes em que Keller apresenta o otimismo não como disposição de temperamento, mas como decisão prática de quem perdeu visão e audição antes dos dois anos de idade. Argumenta que a esperança é condição de qualquer realização e recusa a ideia de que a deficiência exija resignação. Foi seu primeiro texto publicado fora do relato autobiográfico e circulou amplamente em antologias escolares americanas.'
      ]
    ],
    'Chimamanda Ngozi Adichie': [
      [
        'Para Educar Crianças Feministas',
        'ensaio',
        2017,
        'Quinze sugestões escritas em forma de carta a uma amiga que pedira conselho sobre como criar a filha, tratando de linguagem, aparência, trabalho doméstico, casamento e autonomia. O texto recusa fórmulas e trabalha por indicações concretas e discutíveis. Tornou-se referência em debates sobre educação não sexista e circula em mais de trinta idiomas.'
      ]
    ],
    'David Hume': [
      [
        'Ensaios Morais, Políticos e Literários',
        'ensaio',
        1777,
        'Coleção reunida e revisada pelo autor ao longo da vida, com textos sobre gosto, comércio, superstição, milagres, tragédia, opinião pública e o caráter nacional. O estilo é claro e voltado ao leitor culto não especialista, em contraste com a densidade do Tratado. É a porta de entrada mais acessível ao pensamento de Hume e a fonte de suas formulações mais citadas sobre estética e política.'
      ]
    ],
    'Michael Porter': [
      [
        'O Que É Estratégia?',
        'artigo',
        1996,
        'Artigo publicado na Harvard Business Review que separa estratégia de eficácia operacional e sustenta que estratégia consiste em escolher deliberadamente um conjunto diferente de atividades, não em executar as mesmas atividades melhor. Introduz a noção de posicionamento por trade-off e de encaixe entre atividades. É o texto de Porter mais citado fora do meio acadêmico e leitura obrigatória em cursos de estratégia.'
      ]
    ],
    'Norberto Bobbio': [
      [
        'O Futuro da Democracia',
        'livro',
        1984,
        'Conjunto de ensaios em que Bobbio define democracia por seu procedimento — o conjunto de regras que determina quem decide e como — e examina as promessas não cumpridas do regime democrático, entre elas a sobrevivência do poder invisível e a apatia política. O tom é sóbrio e recusa tanto o entusiasmo quanto o niilismo. É uma das obras de teoria política mais lidas na América Latina.'
      ]
    ],
    'Theodore Levitt': [
      [
        'A Criatividade Não Basta',
        'artigo',
        1963,
        'Artigo da Harvard Business Review que distingue ter ideias de fazê-las funcionar, e critica a valorização da criatividade descolada da responsabilidade pela execução. Levitt argumenta que a organização precisa de conformidade suficiente para operar e que a ideia sem implementação é apenas irresponsabilidade. Continua sendo um dos textos mais reimpressos da revista.'
      ]
    ],
    'Albert Bandura': [
      [
        'Teoria da Aprendizagem Social',
        'livro',
        1977,
        'Formulação sistemática da tese de que grande parte do comportamento humano é adquirida pela observação de modelos, e não apenas por reforço direto das próprias ações. O livro introduz os conceitos de modelação, expectativa de resultado e autoeficácia, e propõe uma explicação em que pessoa, comportamento e ambiente se determinam reciprocamente. É uma das obras mais citadas da psicologia do século XX.'
      ]
    ],
    'Edward Bernays': [
      [
        'A Engenharia do Consentimento',
        'ensaio',
        1947,
        'Ensaio em que Bernays nomeia e defende como técnica legítima o trabalho de organizar a opinião pública por meio de pesquisa, segmentação e uso planejado da imprensa. O texto trata a persuasão em massa como engenharia aplicada, com método e mensuração. É a formulação mais explícita de seu pensamento e documento central para o estudo crítico das relações públicas.'
      ]
    ],
    'Friedrich Hayek': [
      [
        'A Arrogância Fatal',
        'livro',
        1988,
        'Último livro do autor, dedicado a sustentar que a ordem econômica de mercado resulta de evolução espontânea de regras e não de projeto consciente, e que o erro do socialismo está em supor que se pode planejar aquilo cujo conhecimento está disperso entre milhões de pessoas. Retoma e condensa argumentos de toda sua obra. É citado como a síntese final de seu pensamento sobre conhecimento e ordem social.'
      ]
    ]
  };
  var PG = {
    'Helen Keller||Otimismo': {
      sobre: 'Ensaio em três partes — o otimismo interior, o otimismo exterior e a prática do otimismo — em que Keller sustenta que a esperança é decisão e não temperamento, e recusa a ideia de que a deficiência exija resignação.',
      contexto: 'Escrito por uma jovem de vinte e três anos que havia perdido visão e audição antes dos dois anos e acabara de concluir os estudos no Radcliffe College, em uma época em que pessoas cegas e surdas eram tratadas como incapazes de vida intelectual.',
      momento: 'Publicado em 1903, no mesmo ano de sua autobiografia A História da Minha Vida.',
      importancia: 'Foi seu primeiro texto publicado fora do relato autobiográfico, circulou amplamente em antologias escolares americanas e é a fonte das frases sobre otimismo e fé que circulam com seu nome.',
      curiosidade: 'O ensaio afirma que o otimismo não vale nada se não conduzir à ação, formulação que a autora aplicou à própria militância por educação, sufrágio feminino e direitos trabalhistas.'
    },
    'Chimamanda Ngozi Adichie||Para Educar Crianças Feministas': {
      sobre: 'Quinze sugestões escritas em forma de carta a uma amiga de infância que pedira conselho sobre como criar a filha, tratando de linguagem, aparência, divisão do trabalho doméstico, casamento, sexualidade e autonomia.',
      contexto: 'Escrito originalmente como carta privada e publicado anos depois, quando a autora já era uma das vozes mais ouvidas do feminismo contemporâneo em língua inglesa.',
      momento: 'Publicado em 2017, quatro anos depois de Sejamos Todos Feministas.',
      importancia: 'Tornou-se referência em debates sobre educação não sexista e circula em mais de trinta idiomas, sendo usado em programas de formação de professores e de pais.',
      curiosidade: 'O livro recusa a forma do manual: a autora afirma no início que não tem certezas e que oferece sugestões discutíveis, e não regras.'
    },
    'David Hume||Ensaios Morais, Políticos e Literários': {
      sobre: 'Coleção reunida e revisada pelo próprio autor ao longo de décadas, com textos sobre gosto, comércio, luxo, superstição, milagres, tragédia, opinião pública e caráter nacional, escritos em estilo claro para o leitor culto não especialista.',
      contexto: 'Hume havia publicado o Tratado da Natureza Humana com pouca repercussão e passou a escrever ensaios curtos justamente para alcançar público, decisão que ele descreve como a reformulação de sua carreira.',
      momento: 'Publicados em volumes sucessivos a partir de 1741 e reunidos na edição definitiva de 1777, um ano após sua morte.',
      importancia: 'É a porta de entrada mais acessível ao pensamento de Hume e a fonte de suas formulações mais citadas sobre estética, gosto e economia política. O ensaio Sobre o Padrão do Gosto é texto fundador da estética moderna.',
      curiosidade: 'Adam Smith era amigo próximo de Hume e ficou encarregado de organizar sua obra póstuma, incluindo o ensaio sobre o suicídio, que os dois discutiram longamente antes da morte do autor.'
    },
    'Michael Porter||O Que É Estratégia?': {
      sobre: 'Artigo que separa estratégia de eficácia operacional e sustenta que estratégia consiste em escolher deliberadamente um conjunto diferente de atividades, e não em executar as mesmas atividades melhor que os concorrentes.',
      contexto: 'Escrito quando as empresas americanas vinham de uma década de reengenharia, qualidade total e comparação com concorrentes, práticas que melhoravam a operação mas tornavam todas as companhias parecidas entre si.',
      momento: 'Publicado na Harvard Business Review em novembro e dezembro de 1996.',
      importancia: 'É o texto de Porter mais citado fora do meio acadêmico e introduziu ao vocabulário corrente as ideias de trade-off estratégico e de encaixe entre atividades.',
      curiosidade: 'O artigo argumenta que a essência da estratégia está em escolher o que não fazer, formulação que passou a ser repetida em quase todo curso de administração.'
    },
    'Norberto Bobbio||O Futuro da Democracia': {
      sobre: 'Conjunto de ensaios em que o autor define democracia por seu procedimento — o conjunto de regras que determina quem decide e como — e examina as promessas não cumpridas do regime, entre elas a sobrevivência do poder invisível e a apatia política.',
      contexto: 'Escrito na Itália dos anos oitenta, entre o terrorismo político da década anterior e a crise dos partidos, e em diálogo crítico tanto com o marxismo quanto com o liberalismo.',
      momento: 'Publicado em 1984; a tradução brasileira, de 1986, teve grande circulação durante a redemocratização do país.',
      importancia: 'É uma das obras de teoria política mais lidas na América Latina e a referência corrente para a definição procedimental de democracia em português.',
      curiosidade: 'Bobbio recusava tanto o entusiasmo quanto o niilismo em relação à democracia, e resumia sua posição dizendo que ela é o menos ruim dos regimes justamente por admitir a própria correção.'
    },
    'Theodore Levitt||A Criatividade Não Basta': {
      sobre: 'Artigo que distingue ter ideias de fazê-las funcionar e critica a valorização da criatividade descolada da responsabilidade pela execução, argumentando que a ideia sem implementação é apenas irresponsabilidade.',
      contexto: 'Escrito em um momento em que a literatura de gestão americana promovia sessões de geração de ideias e criticava a burocracia corporativa como inimiga da inovação.',
      momento: 'Publicado na Harvard Business Review em 1963 e reimpresso repetidamente ao longo de cinco décadas.',
      importancia: 'Continua entre os textos mais reimpressos da revista e é a fonte da distinção, hoje corrente, entre criatividade como pensar coisas novas e inovação como fazer coisas novas.',
      curiosidade: 'Levitt sustenta no artigo que alguma medida de conformidade é necessária para que qualquer organização funcione, posição que contrariava diretamente o discurso dominante de sua época.'
    },
    'Albert Bandura||Teoria da Aprendizagem Social': {
      sobre: 'Formulação sistemática da tese de que grande parte do comportamento humano é adquirida pela observação de modelos, e não apenas por reforço direto das próprias ações. Introduz modelação, expectativa de resultado e autoeficácia.',
      contexto: 'Escrito em resposta ao behaviorismo então dominante, que explicava a aprendizagem apenas por consequências diretas da conduta do próprio indivíduo.',
      momento: 'Publicado em 1977, quinze anos depois dos experimentos com o boneco inflável que demonstraram a imitação de comportamento agressivo por crianças.',
      importancia: 'É uma das obras mais citadas da psicologia do século XX e a base de programas de educação, saúde pública e prevenção que se apoiam em modelos de comportamento.',
      curiosidade: 'Bandura foi apontado em levantamentos acadêmicos como o psicólogo vivo mais citado do mundo, e o quarto mais citado de toda a história da disciplina.'
    },
    'Edward Bernays||A Engenharia do Consentimento': {
      sobre: 'Ensaio em que o autor nomeia e defende como técnica legítima o trabalho de organizar a opinião pública por meio de pesquisa, segmentação de público e uso planejado da imprensa, tratando a persuasão em massa como engenharia aplicada.',
      contexto: 'Escrito depois da Segunda Guerra, quando a propaganda de guerra havia demonstrado o alcance das técnicas de persuasão em massa e o autor buscava legitimá-las para uso comercial e político em tempos de paz.',
      momento: 'Publicado em 1947 em periódico acadêmico e depois ampliado em volume próprio, em 1955.',
      importancia: 'É a formulação mais explícita de seu pensamento e documento central para o estudo crítico das relações públicas, citado tanto por profissionais da área quanto por seus críticos.',
      curiosidade: 'Bernays era sobrinho de Sigmund Freud e afirmava aplicar à comunicação de massa a compreensão da motivação inconsciente desenvolvida pelo tio.'
    },
    'Friedrich Hayek||A Arrogância Fatal': {
      sobre: 'Último livro do autor, dedicado a sustentar que a ordem econômica de mercado resulta da evolução espontânea de regras e não de projeto consciente, e que o erro do socialismo está em supor que se pode planejar aquilo cujo conhecimento está disperso entre milhões de pessoas.',
      contexto: 'Escrito na casa dos oitenta anos, como balanço de mais de meio século de debate sobre planejamento econômico, e publicado no ano anterior à queda do Muro de Berlim.',
      momento: 'Publicado em 1988, com o subtítulo Os Erros do Socialismo; circula em português também como A Presunção Fatal.',
      importancia: 'É citado como a síntese final de seu pensamento sobre conhecimento disperso e ordem social, e reúne em um volume argumentos espalhados por toda sua obra anterior.',
      curiosidade: 'A extensão da participação de Hayek na redação final é objeto de discussão entre estudiosos, dada sua idade avançada e o envolvimento de seu editor no preparo do texto.'
    }
  };
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      var l = OBRAS[a];
      if (
        !l ||
        !l.some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 61a · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    console.log('MeMotiva · Fase 61a: +' + nO + ' obras e +' + nP + ' páginas para confirmação de procedência.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  // Fase 61b — higiene do catálogo e duas obras faltantes.
  // (1) Cinco registros com título em barra ("Walden / Desobediência Civil") eram
  //     resíduos da lista de obras candidatas convertida em obra única. Não são
  //     títulos reais, não têm ano e nenhuma frase os referencia.
  // (2) "Manifesto Comunista" aparecia duas vezes em Karl Marx.
  // (3) Spinoza e Bourdieu recebem as obras que faltavam para confirmar frases.
  var REMOVER = [
    ['Jean-Jacques Rousseau', 'Contrato Social / Emílio / Confissões'],
    ['Thomas Hobbes', 'Leviatã / De Cive'],
    ['Carl Sagan', 'Cosmos / O Mundo Assombrado pelos Demônios'],
    ['Jack Welch', 'Winning / Jack: Straight from the Gut'],
    ['Henry David Thoreau', 'Walden / Desobediência Civil'],
    ['Karl Marx', 'Manifesto Comunista']
  ];
  var OB = {
    'Baruch Spinoza': [
      [
        'Tratado Político',
        'tratado',
        1677,
        'Obra inacabada, interrompida pela morte do autor, que examina monarquia, aristocracia e democracia a partir do que os homens de fato são, e não do que deveriam ser. Spinoza recusa tanto a indignação moral quanto o elogio, propondo analisar a política como se analisa a natureza. É o texto em que sua teoria do Estado aparece de forma mais direta e prática.'
      ]
    ],
    'Pierre Bourdieu': [['O Poder Simbólico', 'ensaio', 1989, 'Reunião de textos sobre como a dominação se exerce por meio de significados aceitos como legítimos por quem os sofre, sem necessidade de coerção explícita. Introduz e desenvolve as noções de capital simbólico, campo e violência simbólica. É a coletânea mais usada como entrada à obra de Bourdieu em língua portuguesa.']]
  };
  var PG = {
    'Baruch Spinoza||Tratado Político': {
      sobre: 'Tratado inacabado que examina monarquia, aristocracia e democracia a partir do que os homens de fato são, e não do que deveriam ser, propondo analisar a política como se analisa qualquer fenômeno natural.',
      contexto: 'Escrito por um pensador excomungado da comunidade judaica de Amsterdã e que vivia de polir lentes, em uma Holanda que acabara de ver o líder republicano Jan de Witt ser linchado por uma multidão.',
      momento: 'Interrompido pela morte do autor em 1677 e publicado no mesmo ano, na edição póstuma de suas obras; o capítulo sobre a democracia ficou incompleto.',
      importancia: 'É o texto em que sua teoria do Estado aparece de forma mais direta, e a fonte do princípio metodológico de não rir, não lamentar nem detestar, mas compreender.',
      curiosidade: 'O tratado é a obra em que Spinoza discute com mais franqueza os limites do poder soberano, sustentando que nenhum governo consegue de fato controlar aquilo que as pessoas pensam.'
    },
    'Pierre Bourdieu||O Poder Simbólico': {
      sobre: 'Reunião de textos sobre como a dominação se exerce por meio de significados aceitos como legítimos por quem os sofre, sem necessidade de coerção explícita. Desenvolve as noções de capital simbólico, campo e violência simbólica.',
      contexto: 'Organizada a partir de artigos e conferências produzidos ao longo de duas décadas, em um momento em que a sociologia francesa disputava se a desigualdade se reproduz pela economia ou pela cultura.',
      momento: 'Publicada em 1989; a edição brasileira, de 1989, teve grande circulação em cursos de ciências sociais e educação.',
      importancia: 'É a coletânea mais usada como entrada à obra de Bourdieu em língua portuguesa e a fonte de suas formulações mais citadas sobre poder simbólico e cumplicidade dos dominados.',
      curiosidade: 'A definição de poder simbólico como poder invisível que só se exerce com a cumplicidade de quem não quer saber que o sofre é a passagem mais reproduzida de toda sua obra.'
    }
  };
  function aplicar() {
    var rem = 0,
      bloq = [];
    for (var i = 0; i < REMOVER.length; i++) {
      var a = REMOVER[i][0],
        t = REMOVER[i][1],
        l = OBRAS[a];
      if (!l) continue;
      var idx = -1;
      for (var j = 0; j < l.length; j++)
        if (l[j].t === t) {
          idx = j;
          break;
        }
      if (idx < 0) continue;
      var oid = l[idx].oid;
      // salvaguarda: só remove se nenhuma frase apontar para a obra
      var usada = QUOTES.some(function (q) {
        return q.oid === oid || (q.src && q.src === t);
      });
      if (usada) {
        bloq.push(a + ' || ' + t);
        continue;
      }
      l.splice(idx, 1);
      if (typeof OBRA_POR_ID === 'object') delete OBRA_POR_ID[oid];
      delete OBRA_PAGINA[a + '||' + t];
      rem++;
    }
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var k = 0; k < OB[nome].length; k++) {
        var r = OB[nome][k];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--x' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var key in PG) {
      var p = key.indexOf('||'),
        aa = key.slice(0, p),
        tt = key.slice(p + 2);
      var ll = OBRAS[aa];
      if (
        !ll ||
        !ll.some(function (o) {
          return o.t === tt;
        })
      ) {
        console.warn('Fase 61b · página sem obra:', key);
        continue;
      }
      if (!OBRA_PAGINA[key]) {
        OBRA_PAGINA[key] = PG[key];
        nP++;
      }
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (bloq.length) console.warn('Fase 61b · não removidos (em uso):', bloq.join(' | '));
    console.log('MeMotiva · Fase 61b: ' + rem + ' registros espúrios removidos, +' + nO + ' obras e +' + nP + ' páginas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var OB = {
    'Carl Gustav Jung': [
      [
        'Estudos Alquímicos',
        'ensaio',
        1967,
        'Volume treze das obras completas, que reúne os estudos de Jung sobre textos alquímicos e sobre o que ele lia neles como descrição simbólica do processo de individuação. Inclui A Árvore Filosófica, ensaio em que trata a integração do que há de obscuro na própria pessoa como condição do amadurecimento psíquico. É a principal fonte de suas formulações sobre sombra e consciência.'
      ]
    ],
    'Francis Bacon': [
      [
        'Meditationes Sacrae',
        'ensaio',
        1597,
        'Coleção breve de meditações religiosas em latim, publicada junto aos primeiros Ensaios, em que Bacon comenta passagens das escrituras em prosa condensada. É nesse texto que aparece a formulação de que o próprio conhecimento é poder, escrita em contexto teológico e não político. Circula hoje sobretudo por essa passagem, que se tornou uma das frases mais citadas do mundo moderno.'
      ]
    ],
    'Norberto Bobbio': [
      [
        'A Era dos Direitos',
        'livro',
        1990,
        'Reunião de ensaios sobre a trajetória histórica dos direitos humanos, da afirmação das liberdades individuais aos direitos sociais e aos chamados direitos de terceira geração. Bobbio argumenta que o problema atual não é justificar esses direitos, mas protegê-los na prática. É sua obra mais lida sobre o tema e referência corrente em direito constitucional e internacional.'
      ]
    ]
  };
  var PG = {
    'Carl Gustav Jung||Estudos Alquímicos': {
      sobre: 'Volume treze das obras completas, que reúne os estudos de Jung sobre textos alquímicos lidos como descrição simbólica do processo de individuação, entre eles o ensaio A Árvore Filosófica.',
      contexto: 'Jung dedicou as últimas décadas de trabalho à alquimia por entender que aqueles textos registravam, em linguagem de laboratório, um processo de transformação psíquica que a psicologia de seu tempo não sabia nomear.',
      momento: 'Os ensaios foram escritos entre 1929 e 1954 e reunidos no volume treze das obras completas, publicado em 1967, seis anos após sua morte.',
      importancia: 'É a principal fonte de suas formulações sobre sombra e consciência, entre elas a passagem sobre não se tornar iluminado imaginando figuras de luz, mas tornando consciente a escuridão.',
      curiosidade: 'Jung montou em Zurique uma das maiores bibliotecas particulares de textos alquímicos da Europa, com obras que ele mesmo traduzia do latim.'
    },
    'Francis Bacon||Meditationes Sacrae': {
      sobre: 'Coleção breve de meditações religiosas em latim, em que Bacon comenta passagens das escrituras em prosa condensada e aforística. É o texto em que aparece a formulação de que o próprio conhecimento é poder.',
      contexto: 'Publicada junto à primeira edição dos Ensaios, quando o autor era advogado e parlamentar em busca de posição na corte de Elizabeth I, décadas antes de formular seu método científico.',
      momento: 'Publicada em 1597, trinta e três anos antes do Novum Organum.',
      importancia: 'Circula hoje sobretudo pela passagem sobre conhecimento e poder, que se tornou uma das frases mais citadas do mundo moderno, em geral sem referência à sua origem religiosa.',
      curiosidade: 'A frase aparece no original em latim, ipsa scientia potestas est, dentro de uma meditação sobre os atributos de Deus, e não como programa político ou científico.'
    },
    'Norberto Bobbio||A Era dos Direitos': {
      sobre: 'Reunião de ensaios sobre a trajetória histórica dos direitos humanos, da afirmação das liberdades individuais aos direitos sociais e aos direitos de terceira geração, com a tese de que o problema atual não é justificá-los, mas protegê-los.',
      contexto: 'Escrita ao fim da Guerra Fria, quando a linguagem dos direitos humanos se tornava consenso formal entre Estados que continuavam a violá-los na prática.',
      momento: 'Publicada em 1990; a edição brasileira, de 1992, teve ampla circulação em cursos de direito e ciências sociais.',
      importancia: 'É sua obra mais lida sobre o tema e referência corrente em direito constitucional e internacional, além da fonte da formulação que liga direitos humanos, democracia e paz como momentos do mesmo movimento histórico.',
      curiosidade: 'Bobbio sustenta que os direitos humanos não são naturais nem eternos, mas históricos: nasceram de lutas concretas e podem ser perdidos da mesma forma.'
    }
  };
  // texto (prefixo) -> obra confirmada
  var CONF = {
    'Adam Smith': [
      ['O consumo é o único fim', 'A Riqueza das Nações'],
      ['Nenhuma sociedade pode ser seguramente próspera', 'A Riqueza das Nações'],
      ['Não é da benevolência do açougueiro', 'A Riqueza das Nações'],
      ['O trabalho anual de cada nação', 'A Riqueza das Nações']
    ],
    'Albert Bandura': [['O aprendizado seria extremamente trabalhoso', 'Teoria da Aprendizagem Social']],
    'Amartya Sen': [['A liberdade é tanto o principal fim', 'Desenvolvimento como Liberdade']],
    'Antoine de Saint-Exupéry': [['Amor não é se olhar nos olhos', 'Terra dos Homens']],
    'Baruch Spinoza': [
      ['A felicidade não é a recompensa da virtude', 'Ética'],
      ['Não choramos, não rimos, não odiamos', 'Tratado Político'],
      ['A mente humana é parte do intelecto infinito', 'Ética']
    ],
    'Benjamin Graham': [
      ['O investidor inteligente é um realista', 'O Investidor Inteligente'],
      ['A margem de segurança é o conceito central', 'O Investidor Inteligente'],
      ['Uma ação não é apenas um pedaço de papel', 'O Investidor Inteligente'],
      ['O investidor individual deve agir consistentemente', 'O Investidor Inteligente'],
      ['Uma operação de investimento é aquela que', 'Security Analysis'],
      ['As pessoas que não conseguem controlar suas emoções', 'O Investidor Inteligente'],
      ['A bolsa de valores é feita para servir', 'O Investidor Inteligente']
    ],
    'Carl Gustav Jung': [['Não me torno iluminado imaginando figuras de luz', 'Estudos Alquímicos']],
    'Carl Sagan': [
      ['Você deve manter uma mente aberta', 'O Mundo Assombrado pelos Demônios'],
      ['A imaginação frequentemente nos leva a mundos', 'Cosmos']
    ],
    'Chimamanda Ngozi Adichie': [
      ['A pessoa mais qualificada para liderar', 'Sejamos Todos Feministas'],
      ['Perdemos muito tempo ensinando as meninas', 'Sejamos Todos Feministas'],
      ['A cultura não faz as pessoas', 'Sejamos Todos Feministas'],
      ['Ensine a ela que ideias e conhecimento', 'Para Educar Crianças Feministas']
    ],
    'Dale Carnegie': [
      ['Mostre respeito pelas opiniões dos outros', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['A maneira de desenvolver o melhor que há', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['Você pode conquistar mais amigos em dois meses', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['A felicidade não depende do que você tem', 'Como Evitar Preocupações e Começar a Viver'],
      ['A crítica é perigosa porque fere o orgulho', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['O desejo de ser importante', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['A única maneira de obter o melhor de uma discussão', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['A maneira de conseguir que alguém faça algo', 'Como Fazer Amigos e Influenciar Pessoas'],
      ['Desperte na outra pessoa um desejo sincero', 'Como Fazer Amigos e Influenciar Pessoas']
    ],
    'David Hume': [
      ['O hábito é o grande guia', 'Investigação sobre o Entendimento Humano'],
      ['A beleza das coisas existe no espírito', 'Ensaios Morais, Políticos e Literários'],
      ['A razão é, e deve ser apenas a escrava', 'Tratado da Natureza Humana'],
      ['Nada é mais livre do que a imaginação', 'Investigação sobre o Entendimento Humano']
    ],
    'Edward Bernays': [
      ['A manipulação consciente e inteligente', 'Propaganda'],
      ['Aqueles que manipulam esse mecanismo invisível', 'Propaganda'],
      ['A engenharia do consentimento é a própria essência', 'A Engenharia do Consentimento']
    ],
    'Erich Fromm': [
      ['Amar significa comprometer-se sem garantia', 'A Arte de Amar'],
      ['O amor é a preocupação ativa pela vida', 'A Arte de Amar'],
      ['O amor é uma arte, assim como viver', 'A Arte de Amar'],
      ['O amor é a única resposta sã e satisfatória', 'A Arte de Amar'],
      ['O amor é um ato de fé', 'A Arte de Amar']
    ],
    'Erving Goffman': [
      ['A vida social pode ser compreendida', 'A Representação do Eu na Vida Cotidiana'],
      ['Quando um indivíduo aparece diante dos outros', 'A Representação do Eu na Vida Cotidiana']
    ],
    'Francis Bacon': [['O conhecimento é poder', 'Meditationes Sacrae']],
    'Friedrich Hayek': [
      ['A curiosa tarefa da economia', 'A Arrogância Fatal'],
      ['Emergências sempre foram o pretexto', 'A Constituição da Liberdade']
    ],
    'Helen Keller': [
      ['O otimismo é a fé em ação', 'Otimismo'],
      ['Embora o mundo esteja cheio de sofrimento', 'Otimismo'],
      ['A vida é uma aventura ousada', 'A Porta Aberta'],
      ['A segurança é principalmente uma superstição', 'A Porta Aberta']
    ],
    'Henry David Thoreau': [
      ['Vá confiante na direção dos seus sonhos', 'Walden'],
      ['O preço de qualquer coisa é a quantidade de vida', 'Walden'],
      ['A massa dos homens leva vidas de silencioso desespero', 'Walden'],
      ['Em vez de amor, dinheiro ou fama', 'Walden'],
      ['Quero viver profundamente e sugar', 'Walden'],
      ['A bondade é o único investimento', 'Walden']
    ],
    'J. R. R. Tolkien': [
      ['Mesmo a menor pessoa pode mudar', 'O Senhor dos Anéis'],
      ['A coragem é encontrada em lugares improváveis', 'O Senhor dos Anéis'],
      ['Nem todos os que vagam estão perdidos', 'O Senhor dos Anéis']
    ],
    'Jack Welch': [['Antes de ser um líder, o sucesso consiste', 'Paixão por Vencer']],
    'Jean-Jacques Rousseau': [
      ['A educação do homem começa no momento', 'Emílio, ou Da Educação'],
      ['Em política, tal como na moral', 'Emílio, ou Da Educação'],
      ['A vontade geral deve dirigir as forças', 'O Contrato Social'],
      ['O homem nasce livre', 'O Contrato Social'],
      ['A liberdade do homem consiste em não obedecer', 'O Contrato Social'],
      ['A soberania não pode ser representada', 'O Contrato Social'],
      ['A força não faz o direito', 'O Contrato Social'],
      ['A lei é a expressão da vontade geral', 'O Contrato Social']
    ],
    'Jim Collins': [
      ['Líderes de nível 5 combinam humildade', 'Empresas Feitas para Vencer'],
      ['A grandeza é mais uma questão de escolhas', 'Empresas Feitas para Vencer']
    ],
    'Jonathan Haidt': [['A mente emocional e a mente racional', 'A Mente Moralista']],
    'José Ortega y Gasset': [['Eu sou eu e minha circunstância', 'Meditações do Quixote']],
    'Karl Marx': [['A história de todas as sociedades', 'Manifesto Comunista (com Engels)']],
    'Max Weber': [
      ['A política significa a tentativa de participar', 'Ciência e Política: Duas Vocações'],
      ['O Estado é aquela comunidade humana', 'Ciência e Política: Duas Vocações'],
      ['Todo Estado se baseia na força', 'Ciência e Política: Duas Vocações'],
      ['Quem faz política aspira ao poder', 'Ciência e Política: Duas Vocações']
    ],
    'Michael Porter': [['Estratégia competitiva significa ser diferente', 'O Que É Estratégia?']],
    'Milton Friedman': [
      ['A liberdade econômica é um requisito essencial', 'Capitalismo e Liberdade'],
      ['A inflação é sempre e em toda parte', 'Livre para Escolher']
    ],
    'Nassim Nicholas Taleb': [
      ['O oposto da fragilidade não é a robustez', 'Antifrágil'],
      ['A ausência de evidência não é evidência', 'A Lógica do Cisne Negro']
    ],
    'Norberto Bobbio': [
      ['Sem direitos reconhecidos e protegidos', 'A Era dos Direitos'],
      ['A democracia é caracterizada por um conjunto de regras', 'O Futuro da Democracia'],
      ['Direitos humanos, democracia e paz', 'A Era dos Direitos']
    ],
    'Pierre Bourdieu': [
      ['O gosto classifica aquele que classifica', 'A Distinção: Crítica Social do Julgamento'],
      ['O poder simbólico é um poder invisível', 'O Poder Simbólico'],
      ['A cultura dominante contribui para a integração', 'O Poder Simbólico']
    ],
    'Theodore Levitt': [['A criatividade é pensar em coisas novas', 'A Criatividade Não Basta']],
    'Thomas Hobbes': [['Os pactos sem a espada', 'Leviatã']]
  };
  function aplicar() {
    var nO = 0,
      nP = 0;
    for (var nome in OB) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OB[nome].length; i++) {
        var r = OB[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--y' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    for (var k in PG) {
      var j = k.indexOf('||'),
        a = k.slice(0, j),
        t = k.slice(j + 2);
      if (
        !OBRAS[a] ||
        !OBRAS[a].some(function (o) {
          return o.t === t;
        })
      ) {
        console.warn('Fase 61c · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    var nQ = 0,
      semMatch = [],
      semObra = [];
    for (var aut in CONF) {
      var lote = CONF[aut];
      for (var m = 0; m < lote.length; m++) {
        var pref = lote[m][0],
          obra = lote[m][1];
        // a obra precisa constar do catálogo do autor
        if (
          !OBRAS[aut] ||
          !OBRAS[aut].some(function (o) {
            return o.t === obra;
          })
        ) {
          semObra.push(aut + ' → ' + obra);
          continue;
        }
        var alvo = QUOTES.filter(function (q) {
          return q.author === aut && q.proc && q.proc.classe === 'B' && q.text.indexOf(pref) === 0;
        });
        if (alvo.length !== 1) {
          semMatch.push(aut + ' → "' + pref + '" (' + alvo.length + ')');
          continue;
        }
        var q = alvo[0];
        q.src = obra;
        q.procTexto = null;
        q.proc = { classe: 'AC', obras: [obra], oral: false };
        q.st = 'A';
        delete q.fonteGenerica;
        nQ++;
      }
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (semObra.length) console.warn('Fase 61c · obra ausente do catálogo:', semObra.join(' | '));
    if (semMatch.length) console.warn('Fase 61c · prefixo sem correspondência única:', semMatch.join(' | '));
    console.log('MeMotiva · Fase 61c: ' + nQ + ' frases com obra exata confirmada, +' + nO + ' obras, +' + nP + ' páginas.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();
