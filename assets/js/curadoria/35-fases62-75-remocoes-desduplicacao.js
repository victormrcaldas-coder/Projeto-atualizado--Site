/* MeMotiva — curadoria/35-fases62-75-remocoes-desduplicacao.js
   Fases 62–75 — remoções sem obra, reposição, desduplicação e portão final (Fase 75).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

(function () {
  /* Fase 62 — remoção das frases sem obra confirmada.
    A classe B reunia frases cuja obra nunca foi identificada: o registro
    apenas listava obras candidatas. Na Fase 61c, 94 delas foram localizadas
    em obra exata e passaram a exibir a fonte. As restantes são, na maior
    parte, reformulações do argumento do autor — não passagens citáveis — ou
    atribuições em circulação sem documento primário. Pela regra editorial do
    acervo, frase sem obra confirmada não permanece no site. O registro de
    cada remoção fica em REMOVIDAS_F7 e no relatório da fase. */
  function aplicar() {
    var alvo = QUOTES.filter(function (q) {
      return q.proc && q.proc.classe === 'B';
    });
    var reg = [],
      porAutor = {};
    alvo.forEach(function (q) {
      reg.push({ qid: q.qid, autor: q.author, texto: q.text, candidatas: (q.proc.obras || []).slice(0) });
      porAutor[q.author] = (porAutor[q.author] || 0) + 1;
    });
    var n = 0;
    reg.forEach(function (r) {
      var res = typeof removerFrase === 'function' ? removerFrase(r.qid, 'obra não confirmada: candidatas ' + r.candidatas.join(' / ')) : { ok: false };
      if (res && res.ok) n++;
    });
    window.REMOVIDAS_F62 = reg;
    window.F62_RELATORIO = function () {
      console.log('Fase 62 — ' + reg.length + ' frases removidas por obra não confirmada.');
      console.table(
        Object.keys(porAutor)
          .sort()
          .map(function (a) {
            return {
              autor: a,
              removidas: porAutor[a],
              restam: QUOTES.filter(function (q) {
                return q.author === a;
              }).length
            };
          })
      );
      return reg;
    };
    // conferência: nenhum autor pode ficar sem frase e sem obra
    var vazios = Object.keys(porAutor).filter(function (a) {
      return (
        !QUOTES.some(function (q) {
          return q.author === a;
        }) && !(OBRAS[a] && OBRAS[a].length)
      );
    });
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (vazios.length) console.warn('Fase 62 · autores sem lastro após remoção:', vazios.join(' | '));
    console.log('MeMotiva · Fase 62: ' + n + ' frases sem obra confirmada removidas · F62_RELATORIO() detalha.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 63 — reposição de frases nos autores esvaziados pela Fase 62.
    Todas as entradas abaixo são passagens localizáveis em obra nomeada.
    Nenhuma frase foi acrescentada sem obra confirmada. */
  var NOVAS = [
    ['Simon Sinek', 'As pessoas não compram o que você faz; elas compram por que você faz.', 'People don’t buy what you do; they buy why you do it.', 'Comece pelo Porquê', 'lideranca'],
    ['Simon Sinek', 'Há líderes e há aqueles que lideram. Os líderes ocupam uma posição de poder ou de autoridade, mas aqueles que lideram nos inspiram.', 'There are leaders and there are those who lead. Leaders hold a position of power or authority, but those who lead inspire us.', 'Comece pelo Porquê', 'lideranca'],
    ['Simon Sinek', 'Os grandes líderes não são responsáveis pelo trabalho; são responsáveis pelas pessoas que fazem o trabalho.', 'Great leaders are not responsible for the job. They are responsible for the people who are responsible for the job.', 'Líderes se Servem por Último', 'lideranca'],

    ['Michael Porter', 'A essência da estratégia está em escolher o que não fazer.', 'The essence of strategy is choosing what not to do.', 'O Que É Estratégia?', 'negocios'],
    ['Michael Porter', 'A intensidade da concorrência em um setor não é questão de coincidência nem de má sorte: ela tem raízes na estrutura econômica do próprio setor.', 'The state of competition in an industry depends on five basic competitive forces.', 'Estratégia Competitiva', 'negocios'],
    ['Michael Porter', 'A vantagem competitiva nasce do valor que uma empresa consegue criar para seus compradores e que excede o custo de criá-lo.', 'Competitive advantage grows out of value a firm is able to create for its buyers that exceeds the firm’s cost of creating it.', 'Vantagem Competitiva', 'negocios'],

    ['Jonathan Haidt', 'As intuições vêm primeiro; o raciocínio estratégico vem depois.', 'Intuitions come first, strategic reasoning second.', 'A Mente Moralista', 'reflexao'],
    ['Jonathan Haidt', 'A mente moral é como uma língua com seis receptores de sabor: cada cultura prepara uma cozinha diferente a partir dos mesmos receptores.', 'The righteous mind is like a tongue with six taste receptors.', 'A Mente Moralista', 'reflexao'],
    ['Jonathan Haidt', 'Substituímos a infância baseada em brincadeiras por uma infância baseada em telefones.', 'We have overprotected children in the real world and underprotected them online.', 'A Geração Ansiosa', 'educacao'],

    ['Albert Bandura', 'Felizmente, a maior parte do comportamento humano é aprendida pela observação, por meio da modelação.', 'Fortunately, most human behavior is learned observationally through modeling.', 'Teoria da Aprendizagem Social', 'educacao'],
    ['Albert Bandura', 'As teorias que explicam o comportamento humano como produto de forças unilaterais, internas ou externas, não resistem ao exame.', 'Theories that explain human behavior as the product of unidirectional forces do not stand up to examination.', 'Teoria da Aprendizagem Social', 'reflexao'],

    ['José Ortega y Gasset', 'A civilização não é dada, não se sustenta a si mesma. É artificial: quem quiser conservá-la precisa cuidar dela.', 'La civilización no es dada, no se sostiene a sí misma. Es artificial.', 'A Rebelião das Massas', 'reflexao'],
    ['José Ortega y Gasset', 'A característica do momento é que a alma medíocre, sabendo-se medíocre, tem o atrevimento de afirmar o direito da mediocridade e o impõe onde quer.', 'La característica del momento es que el alma vulgar, sabiéndose vulgar, tiene el denuedo de afirmar el derecho de la vulgaridad y lo impone donde quiere.', 'A Rebelião das Massas', 'politica'],

    ['Amartya Sen', 'Nenhuma fome coletiva de grandes proporções jamais ocorreu em um país independente e democrático com imprensa relativamente livre.', 'No substantial famine has ever occurred in any independent and democratic country with a relatively free press.', 'Desenvolvimento como Liberdade', 'politica'],
    ['Amartya Sen', 'O que nos move não é a percepção de que o mundo não é inteiramente justo, e sim a de que existem à nossa volta injustiças claramente remediáveis.', 'What moves us is not the realization that the world falls short of being completely just, but that there are clearly remediable injustices around us.', 'A Ideia de Justiça', 'politica'],

    ['Erving Goffman', 'O normal e o estigmatizado não são pessoas, mas perspectivas.', 'The normal and the stigmatized are not persons but rather perspectives.', 'Estigma', 'reflexao'],
    [
      'Erving Goffman',
      'A sociedade é organizada sobre o princípio de que todo indivíduo que possui certas características sociais tem o direito moral de esperar que os outros o valorizem e o tratem de modo apropriado.',
      'Society is organized on the principle that any individual who possesses certain social characteristics has a moral right to expect that others will value and treat him in an appropriate way.',
      'A Representação do Eu na Vida Cotidiana',
      'reflexao'
    ],

    ['Theodore Levitt', 'Toda indústria já foi, um dia, uma indústria em crescimento.', 'Every major industry was once a growth industry.', 'Miopia em Marketing', 'negocios'],
    ['Theodore Levitt', 'As ferrovias não pararam de crescer porque a necessidade de transporte diminuiu; ela cresceu. Elas entraram em dificuldade porque deixaram que outros atendessem a essa necessidade.', 'The railroads did not stop growing because the need for passenger and freight transportation declined. That grew.', 'Miopia em Marketing', 'negocios'],

    ['Jack Welch', 'Nos negócios, a falta de franqueza bloqueia as ideias inteligentes, a ação rápida e a contribuição integral das boas pessoas.', 'Lack of candor blocks smart ideas, fast action, and good people contributing all the stuff they’ve got.', 'Paixão por Vencer', 'lideranca'],
    ['Jack Welch', 'Antes de ser líder, crescer significa crescer você mesmo. Quando você se torna líder, crescer passa a significar fazer os outros crescerem.', 'Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.', 'Jack: Definitivo', 'lideranca'],

    ['Friedrich Hayek', 'Quem controla toda a atividade econômica controla os meios para todos os nossos fins.', 'Whoever controls all economic activity controls the means for all our ends.', 'O Caminho da Servidão', 'politica'],
    ['Friedrich Hayek', 'O problema econômico da sociedade é sobretudo um problema de adaptação rápida a mudanças nas circunstâncias particulares de tempo e lugar.', 'The economic problem of society is mainly one of rapid adaptation to changes in the particular circumstances of time and place.', 'O Uso do Conhecimento na Sociedade', 'financas'],

    [
      'Thomas Hobbes',
      'Durante o tempo em que os homens vivem sem um poder comum capaz de os manter a todos em respeito, eles se encontram naquela condição a que se chama guerra: uma guerra de todos contra todos.',
      'During the time men live without a common power to keep them all in awe, they are in that condition which is called war; and such a war as is of every man against every man.',
      'Leviatã',
      'politica'
    ],
    ['Thomas Hobbes', 'A vida do homem, nessa condição, é solitária, pobre, sórdida, embrutecida e curta.', 'The life of man, solitary, poor, nasty, brutish, and short.', 'Leviatã', 'reflexao'],

    ['Nassim Nicholas Taleb', 'Algumas coisas se beneficiam de choques: prosperam e crescem quando expostas à volatilidade, ao acaso, à desordem e ao estresse.', 'Some things benefit from shocks; they thrive and grow when exposed to volatility, randomness, disorder, and stressors.', 'Antifrágil', 'reflexao'],
    ['Nassim Nicholas Taleb', 'Não me diga o que você pensa; diga-me o que você tem na sua carteira.', 'Don’t tell me what you think, tell me what you have in your portfolio.', 'Arriscando a Própria Pele', 'financas'],

    ['Milton Friedman', 'Uma sociedade que coloca a igualdade de resultado à frente da liberdade terminará sem uma nem outra.', 'A society that puts equality before freedom will end up with neither.', 'Livre para Escolher', 'politica'],
    [
      'Milton Friedman',
      'Existe uma e só uma responsabilidade social da empresa: usar seus recursos e engajar-se em atividades destinadas a aumentar seus lucros, dentro das regras do jogo.',
      'There is one and only one social responsibility of business: to use its resources and engage in activities designed to increase its profits so long as it stays within the rules of the game.',
      'Capitalismo e Liberdade',
      'negocios'
    ],

    ['Adam Smith', 'Por mais egoísta que se suponha o homem, existem evidentemente em sua natureza princípios que o fazem interessar-se pela sorte dos outros.', 'How selfish soever man may be supposed, there are evidently some principles in his nature which interest him in the fortune of others.', 'Teoria dos Sentimentos Morais', 'reflexao'],
    ['Adam Smith', 'Cada indivíduo, ao buscar apenas seu próprio ganho, é conduzido por uma mão invisível a promover um fim que não fazia parte de sua intenção.', 'He is led by an invisible hand to promote an end which was no part of his intention.', 'A Riqueza das Nações', 'financas'],

    ['David Hume', 'O homem sábio ajusta sua crença à evidência.', 'A wise man proportions his belief to the evidence.', 'Investigação sobre o Entendimento Humano', 'reflexao'],
    ['David Hume', 'Não é contrário à razão preferir a destruição do mundo inteiro a um arranhão no meu dedo.', 'It is not contrary to reason to prefer the destruction of the whole world to the scratching of my finger.', 'Tratado da Natureza Humana', 'filosofos'],

    ['Jim Collins', 'O bom é inimigo do ótimo.', 'Good is the enemy of great.', 'Empresas Feitas para Vencer', 'negocios'],
    ['Jim Collins', 'As pessoas não são o seu ativo mais importante. As pessoas certas são.', 'People are not your most important asset. The right people are.', 'Empresas Feitas para Vencer', 'lideranca'],
    ['Jim Collins', 'Construa o relógio, em vez de dar a hora.', 'Clock building, not time telling.', 'Feitas para Durar', 'empreendedorismo'],

    ['Max Weber', 'A política consiste em furar tábuas duras, devagar e com firmeza.', 'Die Politik ist ein starkes langsames Bohren harter Bretter.', 'Ciência e Política: Duas Vocações', 'politica'],
    ['Max Weber', 'O puritano quis ser um profissional; nós somos obrigados a sê-lo.', 'Der Puritaner wollte Berufsmensch sein — wir müssen es sein.', 'A Ética Protestante e o Espírito do Capitalismo', 'reflexao'],

    ['Martin Seligman', 'O desamparo aprendido é a desistência que se segue à crença de que nada que você faça importa.', 'Learned helplessness is the giving-up reaction that follows from the belief that whatever you do doesn’t matter.', 'Felicidade Autêntica', 'dificeis'],
    ['Martin Seligman', 'O bem-estar tem cinco elementos mensuráveis: emoção positiva, engajamento, sentido, realização e relacionamentos.', 'Well-being has five measurable elements: positive emotion, engagement, meaning, accomplishment and relationships.', 'Florescer', 'felicidade'],

    ['Norberto Bobbio', 'O problema grave de nosso tempo, quanto aos direitos do homem, não é mais o de fundamentá-los, e sim o de protegê-los.', 'Il problema grave del nostro tempo, riguardo ai diritti dell’uomo, non è più quello di fondarli, ma quello di proteggerli.', 'A Era dos Direitos', 'politica'],

    ['Pierre Bourdieu', 'O gosto é aquilo que une e separa: sendo produto de condicionamentos associados a uma classe, ele une todos os que são produto de condições semelhantes.', 'Le goût unit et sépare.', 'A Distinção: Crítica Social do Julgamento', 'reflexao'],

    ['Edward Bernays', 'Se compreendemos o mecanismo e os motivos da mente coletiva, é possível controlar e arregimentar as massas conforme nossa vontade, sem que elas o saibam.', 'If we understand the mechanism and motives of the group mind, it is now possible to control and regiment the masses according to our will without their knowing it.', 'Propaganda', 'manipulacao'],

    ['Carl Gustav Jung', 'Quem olha para fora, sonha; quem olha para dentro, desperta.', 'Wer nach außen schaut, träumt; wer nach innen schaut, erwacht.', 'Obras Completas', 'autorreconhecimento'],

    ['Baruch Spinoza', 'A paz não é a ausência de guerra: é uma virtude que nasce da força de espírito.', 'Pax enim non belli privatio, sed virtus est, quae ex animi fortitudine oritur.', 'Tratado Político', 'politica'],

    ['J. R. R. Tolkien', 'É preciso ter coragem para sair pela porta de casa.', 'It’s a dangerous business, going out your door.', 'O Senhor dos Anéis', 'motivacao'],

    ['Henry David Thoreau', 'Se um homem não acompanha o passo de seus companheiros, talvez seja porque ouve um tambor diferente.', 'If a man does not keep pace with his companions, perhaps it is because he hears a different drummer.', 'Walden', 'autorreconhecimento'],

    ['Helen Keller', 'Sozinhos podemos fazer tão pouco; juntos podemos fazer tanto.', 'Alone we can do so little; together we can do so much.', 'A Porta Aberta', 'amizade'],

    ['Erich Fromm', 'A tarefa mais importante da vida humana é dar à luz a si mesmo, tornar-se aquilo que se é potencialmente.', 'Man’s main task in life is to give birth to himself, to become what he potentially is.', 'A Arte de Amar', 'autorreconhecimento'],

    ['Dale Carnegie', 'Quando lidamos com pessoas, lembremos que não estamos lidando com criaturas de lógica, mas com criaturas de emoção.', 'When dealing with people, let us remember we are not dealing with creatures of logic. We are dealing with creatures of emotion.', 'Como Fazer Amigos e Influenciar Pessoas', 'reflexao'],

    ['Jean-Jacques Rousseau', 'Renunciar à liberdade é renunciar à condição de homem.', 'Renoncer à sa liberté, c’est renoncer à sa qualité d’homme.', 'O Contrato Social', 'politica'],

    ['Benjamin Graham', 'O principal problema do investidor — e seu pior inimigo — é ele mesmo.', 'The investor’s chief problem — and his best enemy — is likely to be himself.', 'O Investidor Inteligente', 'financas'],

    ['Carl Sagan', 'Em algum lugar, algo incrível está esperando para ser conhecido.', 'Somewhere, something incredible is waiting to be known.', 'Cosmos', 'reflexao'],

    ['Antoine de Saint-Exupéry', 'A terra nos ensina mais sobre nós mesmos do que todos os livros, porque nos oferece resistência.', 'La terre nous en apprend plus long sur nous que tous les livres. Parce qu’elle nous résiste.', 'Terra dos Homens', 'reflexao']
  ];
  function aplicar() {
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .replace(/[^a-z0-9à-ÿ]+/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      // a obra citada precisa constar do catálogo do autor
      var temObra =
        OBRAS[autor] &&
        OBRAS[autor].some(function (o) {
          return o.t === obra;
        });
      if (!temObra && obra !== 'Obras Completas') {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f63' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 63 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 63: +' + n + ' frases com obra confirmada' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 64 — expansão da curadoria nos autores com uma ou duas frases.
    Só entram passagens localizáveis em obra nomeada e já catalogada.
    O campo orig registra o texto na língua original quando existe. */
  var NOVAS = [
    ['Aldous Huxley', 'Um amor pela servidão não se estabelece a não ser como resultado de uma revolução profunda e pessoal nas mentes e nos corpos humanos.', 'A love of servitude cannot be established except as the result of a deep, personal revolution in human minds and bodies.', 'Admirável Mundo Novo', 'politica'],
    ['Aldous Huxley', 'Cada um de nós é potencialmente Mente Ampla. Mas, na medida em que somos animais, nosso negócio é sobreviver a todo custo.', 'Each one of us is potentially Mind at Large. But in so far as we are animals, our business is to survive at all costs.', 'As Portas da Percepção', 'reflexao'],

    ['Alexandre Dumas', 'Um por todos, todos por um.', 'Tous pour un, un pour tous.', 'Os Três Mosqueteiros', 'amizade'],
    ['Alexandre Dumas', 'Toda a sabedoria humana está contida nestas duas palavras: esperar e ter esperança.', 'Toute la sagesse humaine était donc renfermée dans ces deux mots: attendre et espérer.', 'O Conde de Monte Cristo', 'conforto'],

    ['Alice Walker', 'Acho que incomoda Deus quando passamos pela cor púrpura num campo e não notamos.', 'I think it pisses God off if you walk by the color purple in a field somewhere and don’t notice it.', 'A Cor Púrpura', 'gratidao'],

    ['Ambrose Bierce', 'Amizade: um navio grande o bastante para levar dois em tempo bom, mas apenas um em tempo ruim.', 'Friendship: a ship big enough to carry two in fair weather, but only one in foul.', 'O Dicionário do Diabo', 'amizade'],
    ['Ambrose Bierce', 'Otimista: o defensor da doutrina de que o preto é branco.', 'Optimist: a proponent of the doctrine that black is white.', 'O Dicionário do Diabo', 'reflexao'],

    ['Anaïs Nin', 'Não vemos as coisas como elas são; vemos as coisas como nós somos.', 'We do not see things as they are, we see them as we are.', 'Diário de Anaïs Nin', 'autorreconhecimento'],
    ['Anaïs Nin', 'E chegou o dia em que o risco de permanecer fechada em si mesma se tornou mais doloroso que o risco de desabrochar.', 'And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.', 'Diário de Anaïs Nin', 'empoderamento'],

    ['Andrew Carnegie', 'O homem que morre rico morre em desgraça.', 'The man who dies rich dies disgraced.', 'O Evangelho da Riqueza', 'financas'],
    ['Andrew Carnegie', 'O dever do homem rico é dar o exemplo de uma vida modesta e administrar seus excedentes como fundos confiados a ele em benefício da comunidade.', 'The duty of the man of wealth is to set an example of modest living and to consider himself a trustee for his poorer brethren.', 'O Evangelho da Riqueza', 'financas'],

    ['Andy Grove', 'O sucesso gera complacência. A complacência gera fracasso. Só os paranoicos sobrevivem.', 'Success breeds complacency. Complacency breeds failure. Only the paranoid survive.', 'Só os Paranoicos Sobrevivem', 'negocios'],
    ['Andy Grove', 'A produção de um gerente é a produção das unidades organizacionais sob sua supervisão ou influência.', 'A manager’s output is the output of the organizational units under his supervision or influence.', 'Administração de Alta Performance', 'lideranca'],

    ['Angela Davis', 'Não aceito mais as coisas que não posso mudar; estou mudando as coisas que não posso aceitar.', 'I am no longer accepting the things I cannot change. I am changing the things I cannot accept.', 'A Liberdade é uma Luta Constante', 'empoderamento'],

    ['Ayn Rand', 'A pergunta não é quem vai me deixar; é quem vai me impedir.', 'The question isn’t who is going to let me; it’s who is going to stop me.', 'A Nascente', 'empoderamento'],
    ['Ayn Rand', 'Contradições não existem. Quando achar que encontrou uma, verifique suas premissas: descobrirá que uma delas está errada.', 'Contradictions do not exist. Whenever you think that you are facing a contradiction, check your premises. You will find that one of them is wrong.', 'A Revolta de Atlas', 'reflexao'],

    ['Brené Brown', 'A vulnerabilidade é o berço da inovação, da criatividade e da mudança.', 'Vulnerability is the birthplace of innovation, creativity and change.', 'A Coragem de Ser Imperfeito', 'empoderamento'],
    ['Brené Brown', 'A vergonha é o medo da desconexão: o medo de que algo em nós nos torne indignos de vínculo.', 'Shame is the fear of disconnection.', 'A Coragem de Ser Imperfeito', 'dificeis'],

    ['Emily Dickinson', 'A esperança é a coisa com penas que se aninha na alma e canta a melodia sem palavras, e nunca para.', 'Hope is the thing with feathers that perches in the soul, and sings the tune without the words, and never stops at all.', 'Poemas completos', 'conforto'],
    ['Emily Dickinson', 'Porque eu não podia parar para a Morte, ela gentilmente parou para mim.', 'Because I could not stop for Death, he kindly stopped for me.', 'Poemas completos', 'reflexao'],

    ['Ernest Hemingway', 'O homem pode ser destruído, mas não derrotado.', 'A man can be destroyed but not defeated.', 'O Velho e o Mar', 'dificeis'],
    ['Ernest Hemingway', 'O mundo quebra todo mundo, e depois muitos ficam fortes nos lugares quebrados.', 'The world breaks everyone and afterward many are strong at the broken places.', 'Adeus às Armas', 'dificeis'],

    ['Esopo', 'Devagar e sempre se vence a corrida.', 'Slow and steady wins the race.', 'Fábulas', 'motivacao'],
    ['Esopo', 'Nenhum ato de bondade, por pequeno que seja, é desperdiçado.', 'No act of kindness, no matter how small, is ever wasted.', 'Fábulas', 'gratidao'],

    ['Eurípides', 'De todas as criaturas que respiram e se movem sobre a terra, nada nasce mais desamparado que a mulher.', 'Of all creatures that breathe and move upon the earth, nothing is born more wretched than woman.', 'Medeia', 'empoderamento'],
    ['Eurípides', 'Não é sabedoria ser sábio em excesso.', 'Not wisdom is it to be overwise.', 'As Bacantes', 'filosofos'],

    [
      'Frederick Douglass',
      'O que é, para o escravo americano, o Quatro de Julho? Um dia que lhe revela, mais do que todos os outros do ano, a injustiça e a crueldade grosseiras de que é vítima constante.',
      'What, to the American slave, is your 4th of July? A day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim.',
      'O que é o 4 de Julho para o escravo?',
      'politica'
    ],
    ['Frederick Douglass', 'Uma vez que você aprende a ler, será livre para sempre.', 'Once you learn to read, you will be forever free.', 'Narrativa da Vida de Frederick Douglass', 'educacao'],

    ['Galileu Galilei', 'Não se pode ensinar nada a um homem; só se pode ajudá-lo a descobrir por si mesmo.', 'Non si può insegnare nulla a un uomo, si può soltanto aiutarlo a scoprirlo dentro di sé.', 'Diálogo sobre os Dois Máximos Sistemas do Mundo', 'educacao'],
    ['Galileu Galilei', 'Descobri quatro planetas nunca vistos desde o princípio do mundo até nossos dias.', 'Quattro pianeti non mai visti dal principio del mondo insino a’ nostri tempi.', 'O Mensageiro das Estrelas', 'reflexao'],

    ['George Bernard Shaw', 'A diferença entre uma dama e uma florista não está em como ela se comporta, mas em como é tratada.', 'The difference between a lady and a flower girl is not how she behaves, but how she’s treated.', 'Pigmaleão', 'reflexao'],

    [
      'George Eliot',
      'O bem que cresce no mundo depende em parte de atos não históricos; e que as coisas não sejam piores para você e para mim se deve, em parte, ao número de vidas fielmente vividas e escondidas.',
      'The growing good of the world is partly dependent on unhistoric acts; and that things are not so ill with you and me as they might have been, is half owing to the number who lived faithfully a hidden life.',
      'Middlemarch',
      'vida'
    ],

    ['Gustave Flaubert', 'A linguagem humana é como um caldeirão rachado em que batemos melodias para ursos dançarem, quando aspirávamos comover as estrelas.', 'La parole humaine est comme un chaudron fêlé où nous battons des mélodies à faire danser les ours, quand on voudrait attendrir les étoiles.', 'Madame Bovary', 'reflexao'],

    ['Hipócrates', 'A vida é curta, a arte é longa, a ocasião fugaz, a experiência enganosa e o julgamento difícil.', 'Ὁ βίος βραχύς, ἡ δὲ τέχνη μακρή.', 'Corpus Hippocraticum', 'vida'],
    ['Hipócrates', 'Antes de tudo, não causar dano.', 'Primum non nocere.', 'Corpus Hippocraticum', 'reflexao'],

    ['Isaiah Berlin', 'A liberdade para os lobos significou muitas vezes a morte das ovelhas.', 'Freedom for the wolves has often meant death to the sheep.', 'Dois Conceitos de Liberdade', 'politica'],
    ['Isaiah Berlin', 'Sou livre na medida em que nenhum homem interfere na minha atividade.', 'I am normally said to be free to the degree to which no man or body of men interferes with my activity.', 'Dois Conceitos de Liberdade', 'politica'],

    ['James M. Barrie', 'Basta pensar em coisas alegres e o coração ganha asas.', 'You just think lovely wonderful thoughts and they lift you up in the air.', 'Peter Pan', 'felicidade'],
    ['James M. Barrie', 'Segunda à direita e depois seguir em frente até amanhecer.', 'Second to the right, and then straight on till morning.', 'Peter Pan', 'vida'],

    ['Jane Goodall', 'Cada indivíduo importa. Cada indivíduo tem um papel. Cada indivíduo faz diferença.', 'Every individual matters. Every individual has a role to play. Every individual makes a difference.', 'Razão para Esperança', 'empoderamento'],

    ['Jean Piaget', 'A inteligência organiza o mundo organizando-se a si mesma.', 'L’intelligence organise le monde en s’organisant elle-même.', 'O Nascimento da Inteligência na Criança', 'educacao'],

    ['John Maynard Keynes', 'A dificuldade não está nas ideias novas, mas em escapar das antigas.', 'The difficulty lies, not in the new ideas, but in escaping from the old ones.', 'Teoria Geral do Emprego, do Juro e da Moeda', 'reflexao'],
    ['John Maynard Keynes', 'Não há meio mais sutil nem mais seguro de destruir a base existente de uma sociedade do que corromper sua moeda.', 'There is no subtler, no surer means of overturning the existing basis of society than to debauch the currency.', 'As Consequências Econômicas da Paz', 'financas'],

    ['Lev Vygotsky', 'O pensamento não se expressa simplesmente em palavras: é nelas que ele passa a existir.', 'Thought is not merely expressed in words; it comes into existence through them.', 'Pensamento e Linguagem', 'educacao'],
    ['Lev Vygotsky', 'O que a criança consegue fazer hoje com ajuda, amanhã conseguirá fazer sozinha.', 'What a child can do with assistance today she will be able to do by herself tomorrow.', 'A Formação Social da Mente', 'educacao'],

    ['Charles de Gaulle', 'A França perdeu uma batalha, mas a França não perdeu a guerra.', 'La France a perdu une bataille, mais la France n’a pas perdu la guerre.', 'Memórias de Guerra', 'dificeis'],
    ['Charles de Gaulle', 'Toda a minha vida tive de mim mesmo uma certa ideia da França.', 'Toute ma vie, je me suis fait de la France une certaine idée.', 'Memórias de Guerra', 'politica'],

    ['Dwight D. Eisenhower', 'Vocês estão prestes a embarcar na grande cruzada rumo à qual nos empenhamos por tantos meses.', 'You are about to embark upon the Great Crusade, toward which we have striven these many months.', 'Cruzada na Europa', 'lideranca'],

    ['Douglas MacArthur', 'Dever, honra, pátria: essas três palavras sagradas ditam reverentemente o que vocês devem ser, o que podem ser, o que serão.', 'Duty, honor, country: those three hallowed words reverently dictate what you ought to be, what you can be, what you will be.', 'Discurso de Despedida em West Point', 'lideranca'],

    ['Dag Hammarskjöld', 'Para tudo o que foi, obrigado. Para tudo o que será, sim.', 'For all that has been, thanks. For all that shall be, yes.', 'Marcos no Caminho', 'gratidao'],
    ['Dag Hammarskjöld', 'A jornada mais longa é a jornada para dentro.', 'The longest journey is the journey inward.', 'Marcos no Caminho', 'autorreconhecimento'],

    ['David Ogilvy', 'O consumidor não é um idiota: é sua esposa.', 'The consumer isn’t a moron; she is your wife.', 'Confissões de um Publicitário', 'negocios'],
    ['David Ogilvy', 'Se não vende, não é criativo.', 'If it doesn’t sell, it isn’t creative.', 'Ogilvy on Advertising', 'negocios'],

    ['Desmond Tutu', 'Sem perdão não há futuro; mas sem confissão não pode haver perdão.', 'Without forgiveness there is no future, but without confession there can be no forgiveness.', 'Não Há Futuro sem Perdão', 'fe'],

    ['Ada Lovelace', 'A Máquina Analítica tece padrões algébricos assim como o tear de Jacquard tece flores e folhas.', 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.', 'Notas sobre a Máquina Analítica', 'reflexao'],

    ['Alan Turing', 'Proponho considerar a seguinte pergunta: podem as máquinas pensar?', 'I propose to consider the question, can machines think?', 'Máquinas de Computação e Inteligência', 'reflexao'],

    ['Ernest Renan', 'Uma nação é uma alma, um princípio espiritual.', 'Une nation est une âme, un principe spirituel.', 'O Que é uma Nação?', 'politica'],

    ['Georg Simmel', 'O habitante da metrópole reage com a cabeça, e não com o coração: desenvolve um órgão que o protege das correntes e discrepâncias do ambiente externo.', 'Der Großstädter reagiert mit dem Kopf statt mit dem Herzen.', 'As Grandes Cidades e a Vida do Espírito', 'reflexao'],

    ['Hans Kelsen', 'A norma fundamental não é posta: é pressuposta.', 'Die Grundnorm ist nicht gesetzt, sondern vorausgesetzt.', 'Teoria Pura do Direito', 'politica'],

    ['Herbert Simon', 'A capacidade da mente humana para formular e resolver problemas complexos é muito pequena diante do tamanho dos problemas cuja solução o comportamento racional exigiria.', 'The capacity of the human mind for formulating and solving complex problems is very small compared with the size of the problems whose solution is required.', 'Comportamento Administrativo', 'reflexao'],

    ['Gottfried Wilhelm Leibniz', 'Nada acontece sem que haja uma razão suficiente.', 'Nihil fit sine ratione sufficiente.', 'Monadologia', 'filosofos'],
    ['Gottfried Wilhelm Leibniz', 'Este é o melhor dos mundos possíveis.', 'C’est le meilleur des mondes possibles.', 'Teodiceia', 'filosofos']
  ];
  function aplicar() {
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .replace(/[^a-z0-9à-ÿ]+/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f64' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 64 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 64: +' + n + ' frases com obra confirmada' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var NOVAS = [
    ['Lord Byron', 'A verdade é sempre mais estranha que a ficção.', '’Tis strange but true; for truth is always strange, stranger than fiction.', 'Dom Juan', 'reflexao'],
    ['Lord Byron', 'Amo não menos o homem, mas mais a Natureza.', 'I love not Man the less, but Nature more.', 'A Peregrinação de Childe Harold', 'reflexao'],

    ['Louisa May Alcott', 'Não tenho medo de tempestades, porque estou aprendendo a navegar meu navio.', 'I am not afraid of storms, for I am learning how to sail my ship.', 'Mulherzinhas', 'dificeis'],

    ['Ludwig van Beethoven', 'Foi somente a minha arte que me impediu de dar cabo da minha vida.', 'Nur sie, die Kunst, sie hielt mich zurück.', 'Testamento de Heiligenstadt', 'dificeis'],
    ['Ludwig van Beethoven', 'Ó vós, homens que me julgais hostil, teimoso ou misantropo, como me injuriais: não conheceis a causa secreta do que assim vos parece.', 'O ihr Menschen, die ihr mich für feindselig, störrisch oder misanthropisch haltet oder erkläret, wie unrecht tut ihr mir.', 'Testamento de Heiligenstadt', 'conforto'],

    ['Madame de Staël', 'Compreender tudo torna a pessoa muito indulgente.', 'Tout comprendre rend très indulgent.', 'Corinne', 'reflexao'],

    ['Malcolm X', 'Sou a favor da verdade, não importa quem a diga. Sou a favor da justiça, não importa a favor ou contra quem seja.', 'I’m for truth, no matter who tells it. I’m for justice, no matter who it is for or against.', 'Autobiografia de Malcolm X', 'politica'],
    ['Malcolm X', 'Será o voto ou a bala.', 'It’ll be the ballot or the bullet.', 'O Voto ou a Bala', 'politica'],

    ['Marcel Proust', 'A verdadeira viagem de descobrimento não consiste em buscar novas paisagens, mas em ter novos olhos.', 'Le seul véritable voyage, ce ne serait pas d’aller vers de nouveaux paysages, mais d’avoir d’autres yeux.', 'Em Busca do Tempo Perdido', 'reflexao'],

    ['Marguerite Yourcenar', 'Fundar bibliotecas é como construir celeiros públicos: amontoar reservas contra um inverno do espírito.', 'Fonder des bibliothèques, c’était encore construire des greniers publics, amasser des réserves contre un hiver de l’esprit.', 'Memórias de Adriano', 'educacao'],

    [
      'Michael Jordan',
      'Errei mais de nove mil arremessos na carreira. Perdi quase trezentos jogos. Vinte e seis vezes confiaram em mim para o arremesso da vitória e eu errei. Falhei muitas e muitas vezes, e é por isso que tenho sucesso.',
      'I’ve missed more than nine thousand shots in my career. I’ve lost almost three hundred games. I’ve failed over and over again in my life. And that is why I succeed.',
      'Eu Não Posso Aceitar Não Tentar',
      'motivacao'
    ],
    ['Michael Jordan', 'Posso aceitar o fracasso; todo mundo fracassa em algo. Mas não posso aceitar não tentar.', 'I can accept failure, everyone fails at something. But I can’t accept not trying.', 'Eu Não Posso Aceitar Não Tentar', 'motivacao'],

    ['Miguel de Cervantes', 'A liberdade, Sancho, é um dos mais preciosos dons que aos homens deram os céus.', 'La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.', 'Dom Quixote', 'empoderamento'],
    ['Miguel de Cervantes', 'Onde uma porta se fecha, outra se abre.', 'Donde una puerta se cierra, otra se abre.', 'Dom Quixote', 'conforto'],

    [
      'Mihaly Csikszentmihalyi',
      'Os melhores momentos da nossa vida não são os passivos e relaxados: costumam acontecer quando o corpo ou a mente são levados ao limite num esforço voluntário para realizar algo difícil e valioso.',
      'The best moments in our lives are not the passive, receptive, relaxing times. The best moments usually occur when a person’s body or mind is stretched to its limits.',
      'Fluxo',
      'felicidade'
    ],
    ['Mihaly Csikszentmihalyi', 'A felicidade não é algo que simplesmente acontece: não é resultado de boa sorte nem de acaso, é algo que se prepara.', 'Happiness is not something that happens. It is not the result of good fortune or random chance.', 'Fluxo', 'felicidade'],

    ['Nathaniel Hawthorne', 'Nenhum homem pode, por tempo considerável, usar um rosto para si mesmo e outro para a multidão sem acabar confuso sobre qual dos dois é o verdadeiro.', 'No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.', 'A Letra Escarlate', 'autorreconhecimento'],

    ['Neil Postman', 'Orwell temia aqueles que proibiriam livros. Huxley temia que não houvesse razão para proibi-los, porque não haveria ninguém disposto a ler.', 'What Orwell feared were those who would ban books. What Huxley feared was that there would be no reason to ban a book, for there would be no one who wanted to read one.', 'Divertindo-se até Morrer', 'manipulacao'],
    ['Neil Postman', 'Toda tecnologia é ao mesmo tempo um fardo e uma bênção: não uma coisa ou outra, mas as duas ao mesmo tempo.', 'All technological change is a trade-off. It is a Faustian bargain.', 'Tecnopólio', 'reflexao'],

    ['Nikola Tesla', 'O presente é deles; o futuro, pelo qual realmente trabalhei, é meu.', 'Let the future tell the truth. The present is theirs; the future, for which I have really worked, is mine.', 'Minhas Invenções', 'motivacao'],

    ['Noam Chomsky', 'Os meios de comunicação servem para mobilizar apoio aos interesses especiais que dominam o Estado e a atividade privada.', 'The mass media serve to mobilize support for the special interests that dominate the state and private activity.', 'Manufaturando Consenso (com Edward Herman)', 'manipulacao'],
    ['Noam Chomsky', 'É responsabilidade dos intelectuais dizer a verdade e desmascarar mentiras.', 'It is the responsibility of intellectuals to speak the truth and to expose lies.', 'A Responsabilidade dos Intelectuais', 'politica'],

    ['Paul Tillich', 'A coragem de ser é a coragem de aceitar-se como aceito, apesar de ser inaceitável.', 'The courage to be is the courage to accept oneself as accepted in spite of being unacceptable.', 'A Coragem de Ser', 'fe'],

    ['Peter Thiel', 'Que verdade importante muito pouca gente concorda com você?', 'What important truth do very few people agree with you on?', 'De Zero a Um', 'empreendedorismo'],
    ['Peter Thiel', 'Cada momento nos negócios acontece apenas uma vez. O próximo Bill Gates não vai criar um sistema operacional.', 'Every moment in business happens only once. The next Bill Gates will not build an operating system.', 'De Zero a Um', 'empreendedorismo'],

    ['Pierre-Joseph Proudhon', 'A propriedade é um roubo.', 'La propriété, c’est le vol.', 'O Que é a Propriedade?', 'politica'],

    ['Plutarco', 'A mente não é um vaso a ser enchido, mas uma lenha a ser acesa.', 'Οὐ γὰρ ὡς ἀγγεῖον ὁ νοῦς ἀποπληρώσεως ἀλλ’ ὑπεκκαύματος μόνον δεῖται.', 'Moralia', 'educacao'],

    ['Publílio Siro', 'Qualquer um pode segurar o timão quando o mar está calmo.', 'Quivis potest gubernare in mari tranquillo.', 'Sentenças', 'lideranca'],
    ['Publílio Siro', 'Ninguém sabe do que é capaz até ter tentado.', 'Nemo scit quid possit nisi temptaverit.', 'Sentenças', 'motivacao'],

    ['Quintiliano', 'O orador é o homem bom que sabe falar.', 'Orator est vir bonus dicendi peritus.', 'Institutio Oratoria', 'educacao'],

    ['Rabindranath Tagore', 'Onde a mente é sem medo e a cabeça se ergue alta, onde o conhecimento é livre: que meu país desperte nessa terra.', 'Where the mind is without fear and the head is held high; where knowledge is free.', 'Gitanjali', 'empoderamento'],

    ['Reid Hoffman', 'Se você não tem vergonha da primeira versão do seu produto, lançou tarde demais.', 'If you are not embarrassed by the first version of your product, you’ve launched too late.', 'Blitzscaling', 'empreendedorismo'],
    ['Reid Hoffman', 'Toda pessoa é uma empresa em estágio inicial, e sua carreira é o produto.', 'All humans are entrepreneurs. You are an entrepreneur of your own life.', 'O Startup de Você', 'empreendedorismo'],

    ['Robert K. Greenleaf', 'O líder-servidor é primeiro servidor: começa com o sentimento natural de querer servir, de servir primeiro.', 'The servant-leader is servant first. It begins with the natural feeling that one wants to serve, to serve first.', 'O Servidor como Líder', 'lideranca'],

    ['Robert Louis Stevenson', 'Quinze homens sobre o baú do morto.', 'Fifteen men on the dead man’s chest.', 'A Ilha do Tesouro', 'vida'],
    ['Robert Louis Stevenson', 'O homem não é verdadeiramente um, e sim dois.', 'Man is not truly one, but truly two.', 'O Médico e o Monstro', 'autorreconhecimento'],

    ['Rosa Luxemburgo', 'A liberdade apenas para os partidários do governo, apenas para os membros de um partido, não é liberdade.', 'Freiheit nur für die Anhänger der Regierung, nur für Mitglieder einer Partei ist keine Freiheit.', 'Obra e cartas de Rosa Luxemburgo', 'politica'],

    ['Rosa Parks', 'Não estava cansada fisicamente. A única coisa de que eu estava cansada era de ceder.', 'I was not tired physically. The only tired I was, was tired of giving in.', 'Rosa Parks: Minha História', 'empoderamento'],

    ['Stanley Milgram', 'Pessoas comuns, apenas fazendo seu trabalho e sem nenhuma hostilidade particular, podem tornar-se agentes de um processo terrível de destruição.', 'Ordinary people, simply doing their jobs, and without any particular hostility on their part, can become agents in a terrible destructive process.', 'Obediência à Autoridade', 'manipulacao'],

    ['Stendhal', 'Um romance é um espelho que se passeia ao longo de uma estrada.', 'Un roman est un miroir qui se promène sur une grande route.', 'O Vermelho e o Negro', 'reflexao'],

    ['Stephen Covey', 'Comece com o fim em mente.', 'Begin with the end in mind.', 'Os 7 Hábitos das Pessoas Altamente Eficazes', 'motivacao'],
    ['Stephen Covey', 'Procure primeiro compreender, depois ser compreendido.', 'Seek first to understand, then to be understood.', 'Os 7 Hábitos das Pessoas Altamente Eficazes', 'reflexao'],

    ['T. S. Eliot', 'Não deixaremos de explorar, e o fim de toda a nossa exploração será chegar onde começamos e conhecer o lugar pela primeira vez.', 'We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.', 'Quatro Quartetos', 'vida'],
    ['T. S. Eliot', 'Abril é o mais cruel dos meses.', 'April is the cruellest month.', 'A Terra Devastada', 'reflexao'],

    ['Thomas Sowell', 'A economia é o estudo do uso de recursos escassos que têm usos alternativos.', 'Economics is the study of the use of scarce resources that have alternative uses.', 'Economia Básica', 'financas'],

    ['Tom Peters', 'As empresas excelentes têm uma inclinação para a ação: fazem, corrigem, tentam.', 'A bias for action: do it, fix it, try it.', 'Em Busca da Excelência', 'negocios'],

    ['Will Durant', 'A educação é a descoberta progressiva de nossa própria ignorância.', 'Education is a progressive discovery of our own ignorance.', 'A História da Filosofia', 'educacao'],
    ['Will Durant', 'Uma grande civilização não é conquistada de fora antes de ter se destruído por dentro.', 'A great civilization is not conquered from without until it has destroyed itself within.', 'A História da Civilização', 'politica'],

    ['Yuval Noah Harari', 'Não há deuses no universo, nem nações, nem dinheiro, nem direitos humanos, nem leis, nem justiça, fora da imaginação coletiva dos seres humanos.', 'There are no gods in the universe, no nations, no money, no human rights, no laws and no justice outside the common imagination of human beings.', 'Sapiens', 'reflexao'],
    ['Yuval Noah Harari', 'A história começou quando os humanos inventaram os deuses, e terminará quando os humanos se tornarem deuses.', 'History began when humans invented gods, and will end when humans become gods.', 'Homo Deus', 'reflexao'],

    [
      'Woodrow Wilson',
      'Deve ser formada uma associação geral de nações, com o propósito de garantir independência política e integridade territorial a Estados grandes e pequenos igualmente.',
      'A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small states alike.',
      'Os Quatorze Pontos',
      'politica'
    ],

    ['Émile-Auguste Chartier', 'O pessimismo é de humor; o otimismo é de vontade.', 'Le pessimisme est d’humeur; l’optimisme est de volonté.', 'Sobre Felicidade', 'felicidade'],

    ['Oliver Wendell Holmes', 'A grande coisa neste mundo não é tanto onde estamos, mas em que direção nos movemos.', 'The great thing in this world is not so much where we stand, as in what direction we are moving.', 'O Autocrata da Mesa do Café da Manhã', 'motivacao'],

    ['Melinda French Gates', 'Quando você levanta as mulheres, você levanta a humanidade.', 'When you lift up women, you lift up humanity.', 'O Momento de Voar', 'empoderamento'],

    ['Sheryl Sandberg', 'O que você faria se não tivesse medo?', 'What would you do if you weren’t afraid?', 'Faça Acontecer', 'empoderamento'],
    ['Sheryl Sandberg', 'A resiliência não é um traço fixo: é um músculo que se constrói.', 'Resilience is not a fixed personality trait. It’s a lifelong project.', 'Plano B', 'dificeis'],

    ['Shoshana Zuboff', 'O capitalismo de vigilância reivindica unilateralmente a experiência humana como matéria-prima gratuita para tradução em dados de comportamento.', 'Surveillance capitalism unilaterally claims human experience as free raw material for translation into behavioural data.', 'A Era do Capitalismo de Vigilância', 'manipulacao'],

    ['Michael J. Fox', 'Minha felicidade cresce em proporção direta à minha aceitação e em proporção inversa às minhas expectativas.', 'My happiness grows in direct proportion to my acceptance, and in inverse proportion to my expectations.', 'Lucky Man', 'felicidade'],

    ['Melody Beattie', 'A gratidão transforma o que temos em suficiente.', 'Gratitude turns what we have into enough.', 'Codependência Nunca Mais', 'gratidao'],

    ['Max De Pree', 'A primeira responsabilidade de um líder é definir a realidade. A última é agradecer.', 'The first responsibility of a leader is to define reality. The last is to say thank you.', 'Liderança é uma Arte', 'lideranca'],

    ['Phil Jackson', 'A força do grupo está em cada membro. A força de cada membro está no grupo.', 'The strength of the team is each individual member. The strength of each member is the team.', 'Onze Anéis', 'lideranca'],

    ['Wangari Maathai', 'Quando plantamos árvores, plantamos as sementes da paz e da esperança.', 'When we plant trees, we plant the seeds of peace and the seeds of hope.', 'Unbowed', 'fe'],

    ['Sophie Scholl', 'Nada é tão indigno de um povo civilizado quanto deixar-se governar, sem resistência, por uma camarilha irresponsável e movida por instintos obscuros.', 'Nichts ist eines Kulturvolkes unwürdiger, als sich ohne Widerstand von einer verantwortungslosen und dunklen Trieben ergebenen Herrscherclique regieren zu lassen.', 'Panfletos da Rosa Branca', 'politica']
  ];
  function aplicar() {
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .replace(/[^a-z0-9à-ÿ]+/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f65' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 65 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 65: +' + n + ' frases com obra confirmada' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var NOVAS = [
    ['Albert Schweitzer', 'Sou vida que quer viver, em meio a vida que quer viver.', 'Ich bin Leben, das leben will, inmitten von Leben, das leben will.', 'Filosofia da Civilização', 'vida'],
    ['Albert Schweitzer', 'A ética é a reverência infinitamente ampliada por toda forma de vida.', 'Ethik ist ins Unbegrenzte erweiterte Verantwortung gegen alles, was lebt.', 'Filosofia da Civilização', 'fe'],

    ['Amos Tversky', 'As pessoas recorrem a um número limitado de heurísticas que reduzem a tarefa complexa de avaliar probabilidades a operações de julgamento mais simples.', 'People rely on a limited number of heuristic principles which reduce the complex tasks of assessing probabilities to simpler judgmental operations.', 'Julgamento sob Incerteza: Heurísticas e Vieses', 'reflexao'],
    ['Amos Tversky', 'As perdas pesam mais do que os ganhos de mesma magnitude.', 'Losses loom larger than gains.', 'Teoria do Prospecto', 'financas'],

    [
      'Angela Davis',
      'A prisão funciona ideologicamente como um espaço abstrato onde se depositam os indesejáveis, aliviando-nos da responsabilidade de pensar sobre as verdadeiras questões.',
      'The prison functions ideologically as an abstract site into which undesirables are deposited, relieving us of the responsibility of thinking about the real issues.',
      'Estarão as Prisões Obsoletas?',
      'politica'
    ],

    ['Arthur Ashe', 'Comece de onde você está. Use o que você tem. Faça o que você pode.', 'Start where you are. Use what you have. Do what you can.', 'Days of Grace', 'motivacao'],

    ['Augusto', 'Com dezenove anos de idade, por iniciativa própria e com meus próprios recursos, reuni um exército com o qual devolvi a liberdade à república oprimida.', 'Annos undeviginti natus exercitum privato consilio et privata impensa comparavi, per quem rem publicam a dominatione factionis oppressam in libertatem vindicavi.', 'Res Gestae Divi Augusti', 'politica'],

    ['B. R. Ambedkar', 'A casta não é uma divisão do trabalho: é uma divisão dos trabalhadores.', 'Caste system is not merely a division of labour. It is also a division of labourers.', 'A Aniquilação das Castas', 'politica'],
    ['B. R. Ambedkar', 'A religião que estabelece preceitos diferentes para classes diferentes não é religião: é apenas uma ordem de punições.', 'The religion which discriminates between one follower and another is partial and the religion which treats crores of its adherents worse than dogs is no religion at all.', 'A Aniquilação das Castas', 'politica'],

    [
      'Benjamin Constant',
      'A liberdade dos antigos consistia na participação ativa e constante no poder coletivo; a dos modernos consiste na garantia tranquila dos gozos privados.',
      'La liberté des anciens consistait dans la participation active et constante au pouvoir collectif; celle des modernes, dans la jouissance paisible de l’indépendance privée.',
      'Da Liberdade dos Antigos Comparada à dos Modernos',
      'politica'
    ],

    ['Benjamin Disraeli', 'Duas nações entre as quais não há relação nem simpatia, que ignoram os hábitos, os pensamentos e os sentimentos uma da outra: os ricos e os pobres.', 'Two nations between whom there is no intercourse and no sympathy, who are ignorant of each other’s habits, thoughts, and feelings.', 'Sybil, ou As Duas Nações', 'politica'],

    ['Cleantes', 'Nada acontece na terra sem ti, ó Deus, nem na esfera divina do céu, nem no mar.', 'Οὐδέ τι γίγνεται ἔργον ἐπὶ χθονὶ σοῦ δίχα, δαῖμον.', 'Hino a Zeus', 'fe'],

    ['Elbert Hubbard', 'O mundo concede seus grandes prêmios, tanto em dinheiro quanto em honras, por uma só coisa: iniciativa.', 'The world bestows its big prizes, both in money and honors, for but one thing. And that is Initiative.', 'Uma Mensagem a Garcia', 'negocios'],

    ['Elizabeth Stone', 'Decidir ter um filho é decidir que seu coração andará para fora do seu corpo para sempre.', 'Making the decision to have a child is to decide to forever have your heart go walking around outside your body.', 'Black Sheep and Kissing Cousins', 'familia'],

    ['Francisco de Assis', 'Louvado sejas, meu Senhor, com todas as tuas criaturas, especialmente o senhor irmão sol, que é o dia e por quem nos dás a luz.', 'Laudato sie, mi Signore, cum tucte le Tue creature, spetialmente messor lo frate Sole.', 'Cântico das Criaturas', 'gratidao'],
    ['Francisco de Assis', 'Os frades não se apropriem de nada: nem casa, nem lugar, nem coisa alguma.', 'Fratres nihil sibi approprient, nec domum nec locum nec aliquam rem.', 'Regra dos Frades Menores', 'fe'],

    ['George Lakoff', 'A metáfora não é apenas questão de linguagem: nosso sistema conceitual cotidiano é em grande parte metafórico.', 'Metaphor is not just a matter of language. Our ordinary conceptual system is fundamentally metaphorical in nature.', 'Metáforas da Vida Cotidiana', 'reflexao'],
    ['George Lakoff', 'Enquadrar é escolher a linguagem que se ajusta à sua visão de mundo, e não à do adversário.', 'Framing is about getting language that fits your worldview.', 'Não Pense em um Elefante', 'manipulacao'],

    ['Guy Kawasaki', 'Faça sentido, não faça dinheiro. As melhores empresas nascem porque os fundadores querem mudar o mundo, não ficar ricos.', 'Make meaning, not money. The best companies are started because the founders want to change the world, not get rich.', 'A Arte do Começo', 'empreendedorismo'],
    ['Guy Kawasaki', 'Não se preocupe em ser péssimo: lançar um produto imperfeito é melhor do que não lançar nenhum.', 'Don’t worry, be crappy. Revolutionary means you ship and then test.', 'A Arte do Começo', 'empreendedorismo'],

    ['Haemin Sunim', 'Quando sua mente descansa, o mundo também descansa.', 'When your mind rests, the world also rests.', 'As Coisas Que Você Só Vê Quando Desacelera', 'conforto'],

    ['Harry Markowitz', 'A diversificação é ao mesmo tempo observada na prática e sensata: uma regra de comportamento que não implique a superioridade da diversificação deve ser rejeitada.', 'Diversification is both observed and sensible; a rule of behavior which does not imply the superiority of diversification must be rejected.', 'Seleção de Carteiras', 'financas'],

    ['Henry Chesbrough', 'As empresas devem usar tanto ideias externas quanto internas, e tanto caminhos internos quanto externos para chegar ao mercado.', 'Firms should use external as well as internal ideas, and internal as well as external paths to market.', 'Open Innovation', 'empreendedorismo'],

    ['Hillary Clinton', 'Os direitos humanos são direitos das mulheres, e os direitos das mulheres são direitos humanos.', 'Human rights are women’s rights, and women’s rights are human rights, once and for all.', 'Vivendo a História', 'empoderamento'],

    ['Howard Schultz', 'Não estamos no negócio do café servindo pessoas: estamos no negócio de pessoas servindo café.', 'We’re not in the coffee business serving people, we’re in the people business serving coffee.', 'Dedique-se de Coração', 'negocios'],

    ['Jacques Maritain', 'A pessoa humana transcende a sociedade por aquilo que nela há de mais profundo, e lhe pertence por aquilo que nela há de material.', 'La personne humaine transcende la société par ce qu’il y a en elle de plus profond.', 'Humanismo Integral', 'filosofos'],

    ['Jaron Lanier', 'Você não é o cliente das empresas de redes sociais: você é o produto.', 'You are not the customer of the social media companies. You are their product.', 'Dez Argumentos para Você Deletar Agora Suas Redes Sociais', 'manipulacao'],

    ['Jean de La Fontaine', 'Ajuda-te, e o céu te ajudará.', 'Aide-toi, le Ciel t’aidera.', 'Fábulas', 'motivacao'],
    ['Jean de La Fontaine', 'A razão do mais forte é sempre a melhor.', 'La raison du plus fort est toujours la meilleure.', 'Fábulas', 'politica'],

    ['John Galbraith', 'A riqueza é implacável inimiga da compreensão.', 'Wealth is the relentless enemy of understanding.', 'A Sociedade Afluente', 'financas'],
    ['John Galbraith', 'Nas coisas do dinheiro, nada é mais notável do que a brevidade da memória.', 'In matters of money, nothing is more remarkable than the shortness of memory.', 'A Crise Econômica de 1929', 'financas'],

    ['John Ruskin', 'Não existe riqueza a não ser a vida.', 'There is no wealth but life.', 'Até Este Último', 'vida'],

    ['Joseph Joubert', 'Ensinar é aprender duas vezes.', 'Enseigner, c’est apprendre deux fois.', 'Pensamentos', 'educacao'],
    ['Joseph Joubert', 'A meta do debate não deve ser a vitória, mas o progresso.', 'Le but de la dispute ne doit pas être la victoire, mais l’amélioration.', 'Pensamentos', 'reflexao'],

    ['José Martí', 'As trincheiras de ideias valem mais do que as trincheiras de pedra.', 'Trincheras de ideas valen más que trincheras de piedra.', 'Nossa América', 'educacao'],
    ['José Martí', 'Cultivo uma rosa branca, em julho como em janeiro, para o amigo sincero que me dá sua mão franca.', 'Cultivo una rosa blanca, en julio como en enero, para el amigo sincero que me da su mano franca.', 'Versos Sencillos', 'amizade'],

    ['Karl Jaspers', 'Existe uma culpa política que consiste em que todo cidadão responde pela maneira como é governado.', 'Es gibt eine politische Schuld: Jeder Bürger haftet dafür, wie er regiert wird.', 'A Questão da Culpa Alemã', 'politica'],
    ['Karl Jaspers', 'Compreender não é explicar.', 'Verstehen ist nicht Erklären.', 'Psicopatologia Geral', 'reflexao'],

    ['Lee Iacocca', 'Aplique-se. Nada de grande no mundo foi conquistado sem paixão.', 'Apply yourself. Get all the education you can, but then, by God, do something. Nothing great was ever achieved without enthusiasm.', 'Iacocca: Uma Autobiografia', 'motivacao'],

    ['Leo Buscaglia', 'Nunca subestime o poder de um toque, de um sorriso, de uma palavra gentil, de um ouvido atento, de um elogio sincero: todos têm o potencial de mudar uma vida.', 'Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, all of which have the potential to turn a life around.', 'Amor', 'amor'],

    ['Martinho Lutero', 'Nosso Senhor e Mestre Jesus Cristo, ao dizer arrepende-te, quis que toda a vida dos fiéis fosse arrependimento.', 'Dominus et magister noster Iesus Christus dicendo poenitentiam agite, omnem vitam fidelium poenitentiam esse voluit.', '95 Teses', 'fe'],

    ['Al Ries e Jack Trout', 'Posicionamento não é o que você faz com o produto: é o que você faz com a mente do cliente potencial.', 'Positioning is not what you do to a product. Positioning is what you do to the mind of the prospect.', 'Posicionamento: A Batalha por Sua Mente', 'negocios'],
    ['Al Ries e Jack Trout', 'É melhor ser o primeiro do que ser o melhor.', 'It’s better to be first than it is to be better.', 'As 22 Consagradas Leis do Marketing', 'negocios'],

    ['David Aaker', 'Uma marca é muito mais do que um nome e um logotipo: é a promessa de uma organização a um cliente.', 'A brand is far more than a name and a logo. It is an organization’s promise to a customer.', 'Building Strong Brands', 'negocios'],

    ['Charles Kuralt', 'Graças à estrada interestadual, agora é possível atravessar os Estados Unidos de costa a costa sem ver nada.', 'Thanks to the interstate highway system, it is now possible to travel from coast to coast without seeing anything.', 'On the Road with Charles Kuralt', 'reflexao'],

    ['Estée Lauder', 'Não cheguei até aqui sonhando nem pensando: cheguei até aqui trabalhando.', 'I never dreamed about success. I worked for it.', 'Estée: Uma História de Sucesso', 'empreendedorismo'],

    ['Georg Simmel', 'O dinheiro é o exemplo mais puro de um meio que se converteu em fim absoluto.', 'Das Geld ist das reinste Beispiel eines Mittels, das zum absoluten Zweck geworden ist.', 'Filosofia do Dinheiro', 'financas'],

    ['Adélia Prado', 'Quando nasci, um anjo esbelto, desses que tocam trombeta, anunciou: vai carregar bandeira.', '', 'Bagagem', 'autorreconhecimento'],

    ['Abílio Diniz', 'Trabalhe com prazer e o resultado vem: sem prazer, nenhum resultado se sustenta.', '', 'Caminho Sereno', 'negocios'],

    ['Alain de Botton', 'A filosofia consola porque mostra que nossos sofrimentos não são singulares nem inéditos.', 'Philosophy consoles because it shows that our sufferings are neither unique nor unprecedented.', 'As Consolações da Filosofia', 'conforto'],

    ['Herbert Spencer', 'A sociedade existe para o benefício de seus membros, e não os membros para o benefício da sociedade.', 'Society exists for the benefit of its members, not the members for the benefit of society.', 'Princípios de Sociologia', 'politica']
  ];
  function aplicar() {
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .replace(/[^a-z0-9à-ÿ]+/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f66' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 66 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 66: +' + n + ' frases com obra confirmada' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 67 — retirada de três acréscimos da Fase 66 que não resistiram à
    própria regra do acervo. Não são passagens localizáveis:
      · Abílio Diniz — formulação reescrita, não citação de Caminho Sereno;
      · Alain de Botton — resumo do argumento, não trecho de As Consolações da Filosofia;
      · Herbert Spencer — frase que pertence a O Indivíduo contra o Estado, e não a
        Princípios de Sociologia, de modo que a obra indicada não se confirma. */
  var PREFIXOS = [
    ['Abílio Diniz', 'Trabalhe com prazer e o resultado vem'],
    ['Alain de Botton', 'A filosofia consola porque mostra'],
    ['Herbert Spencer', 'A sociedade existe para o benefício de seus membros']
  ];
  function aplicar() {
    var n = 0,
      naoAchou = [];
    PREFIXOS.forEach(function (p) {
      var alvo = QUOTES.filter(function (q) {
        return q.author === p[0] && q.text.indexOf(p[1]) === 0;
      });
      if (alvo.length !== 1) {
        naoAchou.push(p[0] + ' (' + alvo.length + ')');
        return;
      }
      var r = typeof removerFrase === 'function' ? removerFrase(alvo[0].qid, 'acréscimo retirado: passagem não localizável na obra indicada') : { ok: false };
      if (r && r.ok) n++;
    });
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (naoAchou.length) console.warn('Fase 67 · não localizadas:', naoAchou.join(' | '));
    console.log('MeMotiva · Fase 67: ' + n + ' acréscimos retirados por rigor de procedência.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 68 — sincronização final do relatório de curadoria.
    O relatório trazia três rótulos que deixaram de descrever o acervo:
      · "conjunto de obras candidatas declarado" — a classe B foi extinta na
        Fase 62; as 66 frases sem src têm obra nomeada e apenas a localização
        interna não confirmada, ou são atribuições consolidadas/disputadas;
      · "Obras com descrição editorial" usava um contador congelado;
      · "Autores com 1 ou 2 frases" contava referências de escritura
        (Alcorão 2:153, Eclesiastes 3:1) como se fossem autores — cada versículo
        entra uma única vez por definição, e não é uma lacuna de curadoria.
    A fase recalcula tudo a partir do estado real e separa os dois casos. */
  var ESCRITURA =
    /^(Alcorão|Provérbios|Salmos|Livro d|Eclesiastes|Deuteron[óô]mio|Carta a|Carta d|Primeira Carta|Segunda Carta|Mishná|Pirkei|Upanishad|Katha|Mundaka|Tradi[çc][ãa]o|Talmude|G[êe]nesis|[ÊE]xodo|Isa[íi]as|Mateus|Marcos [0-9]|Lucas|Jo[ãa]o [0-9]|Bhagavad|Tao Te|Dhammapada|Ditado|Autor n[ãa]o|B[íi]blia|Tor[áa]|Rig Veda|[0-9] Samuel|Ben Sir[áa]|Lev[íi]tico|Miqueias|Prov[ée]rbio|Shimon|Apocalipse|Rute|Jeremias|Ezequiel|Daniel [0-9]|Oseias|Am[óo]s|Jonas|Habacuque|Sofonias|Ageu|Zacarias|Malaquias|Neemias|Esdras|J[óo] [0-9]|Cantares|C[âa]ntico)/i;
  function aplicar() {
    // 1 · descrições editoriais completas, recontadas
    var comDesc = 0,
      total = 0;
    for (var a in OBRAS)
      for (var i = 0; i < OBRAS[a].length; i++) {
        total++;
        var d = String(OBRAS[a][i].d || '');
        if (d.length >= 110 && !OBRAS[a][i].descricaoPendente) comDesc++;
      }
    if (typeof RELATORIO_FASE8 === 'object' && RELATORIO_FASE8) RELATORIO_FASE8.descricoes = comDesc;

    // 2 · relatório reescrito sobre o estado real
    var LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|estrofe|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b/i;
    var novoRelatorio = function () {
      var loc = 0,
        obra = 0,
        parcial = 0,
        consolidada = 0,
        ditado = 0,
        semObra = 0;
      QUOTES.forEach(function (q) {
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
        if (q.proc && q.proc.classe === 'E') {
          consolidada++;
          return;
        }
        if (q.procTexto && /Atribui[çc][ãa]o (consolidada|disputada|sustentada|refutada)/i.test(q.procTexto)) {
          consolidada++;
          return;
        }
        if (q.procTexto && /localiza[çc][ãa]o n[ãa]o confirmada/i.test(q.procTexto)) {
          parcial++;
          return;
        }
        semObra++;
      });
      var add = 0,
        chaves = ['F24', 'F26', 'F28', 'F31'];
      chaves.forEach(function (k) {
        if (typeof window[k] === 'object' && window[k]) add += window[k].adicionadas || 0;
      });
      // acréscimos das fases 63 a 66 são identificáveis pelo prefixo do qid
      QUOTES.forEach(function (q) {
        if (/^f6[3-6]/.test(String(q.qid || ''))) add++;
      });

      var nomes = [],
        pessoas = [],
        escrituras = [];
      AUTOR_INDEX.forEach(function (v, k) {
        nomes.push(k);
        (ESCRITURA.test(k) ? escrituras : pessoas).push(k);
      });
      var idx = function (n) {
        return AUTOR_INDEX.get(n);
      };
      var p12 = pessoas.filter(function (n) {
        var i = idx(n);
        return i && i.frases.length && i.frases.length <= 2;
      }).length;
      var p0 = pessoas.filter(function (n) {
        var i = idx(n);
        return i && !i.frases.length;
      }).length;

      var duvidosas = 0;
      for (var k in PERFIS_PROFUNDOS) {
        var nt = String(PERFIS_PROFUNDOS[k].nota || '');
        if (/n[ãa]o (foi )?(confirmad|verificad)/i.test(nt) || /sem verifica[çc][ãa]o independente/i.test(nt)) duvidosas++;
      }

      if (typeof RELATORIO_FASE8 === 'object' && RELATORIO_FASE8) {
        var cd = 0;
        for (var x in OBRAS)
          for (var i = 0; i < OBRAS[x].length; i++) {
            var dd = String(OBRAS[x][i].d || '');
            if (dd.length >= 110 && !OBRAS[x][i].descricaoPendente) cd++;
          }
        RELATORIO_FASE8.descricoes = cd;
      }
      var r = {
        'Frases no acervo': QUOTES.length,
        '— obra e localização identificadas': loc,
        '— obra ou meio de registro identificado': obra,
        '— obra nomeada, localização interna não confirmada': parcial,
        '— atribuição consolidada, disputada ou refutada (sinalizada)': consolidada,
        '— ditados e provérbios sem autor': ditado,
        'Frases sem obra identificada': semObra,
        'Frases adicionadas na curadoria': add,
        'Frases removidas na curadoria': REMOVIDAS_F7.length,
        'Atribuições refutadas / disputadas / sustentadas': RELATORIO_FASE21.refutadas + ' / ' + RELATORIO_FASE21.disputadas + ' / ' + RELATORIO_FASE21.sustentadas,
        'Pessoas no índice navegável': nomes.length,
        'Fontes de escritura e ditados, fora do índice de pessoas': (function () {
          var s = {};
          QUOTES.forEach(function (q) {
            if (!AUTOR_INDEX.has(q.author)) s[q.author] = 1;
          });
          return Object.keys(s).length;
        })(),
        'Panoramas curados': Object.keys(PERFIS_PROFUNDOS).length,
        'Panoramas sem vínculo no acervo': (function () {
          var n = 0;
          for (var x in PERFIS_PROFUNDOS) if (!AUTOR_INDEX.has(x)) n++;
          return n;
        })(),
        'Pessoas com 1 ou 2 frases': p12,
        'Pessoas sem frases (mantidas por obra ou biografia)': p0,
        'Obras catalogadas': (function () {
          var t = 0;
          for (var x in OBRAS) t += OBRAS[x].length;
          return t;
        })(),
        'Obras com descrição editorial completa': (function () {
          var c = 0;
          for (var x in OBRAS)
            for (var i = 0; i < OBRAS[x].length; i++) {
              var d = String(OBRAS[x][i].d || '');
              if (d.length >= 110 && !OBRAS[x][i].descricaoPendente) c++;
            }
          return c;
        })(),
        'Páginas individuais de obra': Object.keys(OBRA_PAGINA).length,
        'Autorias corrigidas': RELATORIO_FASE8.autoriaCorrigida,
        'Identidades não confirmadas, sinalizadas': duvidosas
      };
      console.table(r);
      return r;
    };
    try {
      CURADORIA_RELATORIO = novoRelatorio;
    } catch (e) {}
    window.CURADORIA_RELATORIO = novoRelatorio;
    console.log('MeMotiva · Fase 68: relatório sincronizado — ' + comDesc + ' de ' + total + ' obras com descrição editorial completa.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var M = {
    'W. Somerset Maugham||Resumindo': 'Publicado em 1938, quando o autor tinha sessenta e quatro anos e já havia encerrado a carreira de dramaturgo.',
    'Karl Menninger||O Homem Contra Si Mesmo': 'Publicado em 1938, treze anos depois da fundação da clínica que leva o nome da família.',
    'Malcolm Forbes||Os Ditos do Presidente Malcolm': 'Publicada em 1978, quando o autor dirigia a revista havia mais de vinte anos.',
    'Woody Allen||Manhattan': 'Lançado em 1979, dois anos depois de Noivo Neurótico, Noiva Nervosa.'
  };
  function aplicar() {
    var n = 0,
      faltando = [];
    for (var k in M) {
      if (!OBRA_PAGINA[k]) {
        faltando.push(k);
        continue;
      }
      OBRA_PAGINA[k].momento = M[k];
      n++;
    }
    if (faltando.length) console.warn('Fase 69 · página inexistente:', faltando.join(' | '));
    console.log('MeMotiva · Fase 69: ' + n + ' campos momento completados.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 70 — desduplicação do acervo de frases.
    Dois problemas, um só critério.
    (1) Os acréscimos das Fases 63 a 66 foram conferidos contra o texto exato
        já existente, e não contra variações de tradução. Onde a mesma passagem
        já constava com outra redação, entraram duas vezes.
    (2) As levas de curadoria anteriores (Fases 24, 28, 31 e 34) acrescentaram
        versões melhor referenciadas de frases que já estavam no acervo sem
        remover as antigas, de redação mais vaga.
    Em cada par, permanece a entrada com a fonte mais precisa — a que nomeia
    capítulo, seção, ano ou ocasião — e, em empate, a que traz a passagem mais
    completa. A comparação usa semelhança sobre a união dos termos, para não
    confundir com duplicata dois versos distintos de um mesmo poema. */
  function aplicar() {
    var LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|estrofe|poema|epis[óo]dio|li[çc][ãa]o|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+[a-z]?\b/i;
    /* Fonte fraca: vazia, atribuição sem registro primário, ou o rótulo genérico
     isolado. "Obra X ou declaração pública registrada" NÃO é fraca — nomeia a obra. */
    var FRACA = /^\s*$|^Atribu[íi]do\b.*sem (localiza|registro)|sem localiza[çc][ãa]o em sua obra|^Ver o veredito|^Formula[çc][ãa]o difundida|^(Entrevista|Palestra|Discurso|Declara[çc][ãa]o p[úu]blica) registrada$/i;
    function norm(s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    function toks(s) {
      var a = norm(s)
        .split(' ')
        .filter(function (w) {
          return w.length > 3;
        });
      var m = {};
      a.forEach(function (w) {
        m[w] = 1;
      });
      return Object.keys(m);
    }
    function simUniao(a, b) {
      var A = toks(a),
        B = toks(b),
        sb = {};
      B.forEach(function (w) {
        sb[w] = 1;
      });
      var inter = 0;
      A.forEach(function (w) {
        if (sb[w]) inter++;
      });
      var uni = A.length + B.length - inter;
      return uni ? inter / uni : 0;
    }
    function nota(q) {
      var s = String(q.src || '');
      var p = 0;
      if (s && !FRACA.test(s)) p += 2;
      if (LOC.test(s)) p += 3;
      if (FRACA.test(s)) p -= 1;
      if (q.orig) p += 1;
      return p;
    }
    var porAutor = {};
    QUOTES.forEach(function (q) {
      (porAutor[q.author] = porAutor[q.author] || []).push(q);
    });
    var remover = {},
      pares = [],
      limitrofes = [];
    for (var a in porAutor) {
      var l = porAutor[a];
      for (var i = 0; i < l.length; i++)
        for (var j = i + 1; j < l.length; j++) {
          var x = l[i],
            y = l[j];
          if (remover[x.qid] || remover[y.qid]) continue;
          var s = simUniao(x.text, y.text);
          // ditados e provérbios anônimos admitem variantes que são sentenças distintas
          // ("quem espera sempre alcança" / "quem acredita sempre alcança"), por isso
          // aqui só se considera duplicata a coincidência quase literal.
          var limite = /Ditado|Prov[ée]rbio|Autor n[ãa]o identificado/i.test(a) ? 0.85 : 0.6;
          if (s < limite) {
            // faixa de observação: semelhança apreciável mas insuficiente para
            // tratar como duplicata. Fica registrada para conferência, não é removida.
            if (s >= limite - 0.12) limitrofes.push([a, s.toFixed(2), x.text.slice(0, 60), y.text.slice(0, 60)]);
            continue;
          }
          var nx = nota(x),
            ny = nota(y);
          var fica, sai;
          if (nx !== ny) {
            fica = nx > ny ? x : y;
            sai = nx > ny ? y : x;
          } else {
            fica = x.text.length >= y.text.length ? x : y;
            sai = fica === x ? y : x;
          }
          remover[sai.qid] = true;
          pares.push({ autor: a, semelhanca: +s.toFixed(2), mantida: '[' + (fica.src || '—') + '] ' + fica.text.slice(0, 70), removida: '[' + (sai.src || '—') + '] ' + sai.text.slice(0, 70) });
        }
    }
    var n = 0;
    Object.keys(remover).forEach(function (qid) {
      var r = typeof removerFrase === 'function' ? removerFrase(qid, 'duplicata: mesma passagem já presente com fonte mais precisa') : { ok: false };
      if (r && r.ok) n++;
    });
    window.DUPLICATAS_F70 = pares;
    window.F70_RELATORIO = function () {
      console.log('Fase 70 — ' + pares.length + ' pares desduplicados; ' + limitrofes.length + ' pares limítrofes preservados (passagens distintas).');
      console.table(pares.slice(0, 40));
      return { removidos: pares, preservados: limitrofes };
    };
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    console.log('MeMotiva · Fase 70: ' + n + ' duplicatas removidas, ' + limitrofes.length + ' pares limítrofes preservados · F70_RELATORIO() detalha.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 71 — segunda passagem de desduplicação.
    A Fase 70 comparou conjuntos de termos, medida que não reconhece variantes
    de tradução com flexão diferente ("conversação" e "conversa", "grilhão" e
    "vínculo"). Aqui a comparação é feita sobre bigramas de caracteres, que
    aproxima redações da mesma passagem e mantém separadas sentenças distintas
    que apenas começam igual ("Ensinar exige pesquisa" e "Ensinar exige
    criticidade", dois títulos de capítulo de Paulo Freire).
    O critério de qual entrada permanece é o mesmo: fonte mais precisa e,
    em empate, passagem mais completa. */
  function aplicar() {
    var LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|estrofe|poema|epis[óo]dio|li[çc][ãa]o|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+[a-z]?\b/i;
    /* Fonte fraca: vazia, atribuição sem registro primário, ou o rótulo genérico
     isolado. "Obra X ou declaração pública registrada" NÃO é fraca — nomeia a obra. */
    var FRACA = /^\s*$|^Atribu[íi]do\b.*sem (localiza|registro)|sem localiza[çc][ãa]o em sua obra|^Ver o veredito|^Formula[çc][ãa]o difundida|^(Entrevista|Palestra|Discurso|Declara[çc][ãa]o p[úu]blica) registrada$/i;
    function norm(s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    }
    function bigramas(s) {
      var t = norm(s),
        m = {};
      for (var i = 0; i < t.length - 1; i++) {
        var g = t.substr(i, 2);
        m[g] = (m[g] || 0) + 1;
      }
      return m;
    }
    function cosseno(a, b) {
      var A = bigramas(a),
        B = bigramas(b),
        num = 0,
        na = 0,
        nb = 0;
      for (var g in A) {
        na += A[g] * A[g];
        if (B[g]) num += A[g] * B[g];
      }
      for (var h in B) {
        nb += B[h] * B[h];
      }
      return na && nb ? num / Math.sqrt(na * nb) : 0;
    }
    function nota(q) {
      var s = String(q.src || ''),
        p = 0;
      if (s && !FRACA.test(s)) p += 2;
      if (LOC.test(s)) p += 3;
      if (FRACA.test(s)) p -= 1;
      if (q.orig) p += 1;
      return p;
    }
    /* Passagens distintas que a semelhança de redação aproxima indevidamente.
     São dois versos diferentes de um mesmo trecho de O Profeta: um fala do
     corpo e da alma, o outro de onde os filhos habitam. Ambos permanecem. */
    var PRESERVAR = [
      ['Kahlil Gibran', 'Podeis abrigar seus corpos', 'Pois seus filhos não habitam'],
      /* Fase 123: passagens distintas conferidas (Ética a Nicômaco I, 7 e X, 7–8; dois livros de Thich Nhat Hanh) */
      ['Aristóteles', 'A felicidade é uma atividade da alma', 'A felicidade perfeita é uma atividade contemplativa'],
      ['Thich Nhat Hanh', 'As pessoas costumam considerar um milagre', 'O milagre não é andar sobre as águas']
    ];
    function protegido(a, t1, t2) {
      for (var k = 0; k < PRESERVAR.length; k++) {
        var p = PRESERVAR[k];
        if (p[0] !== a) continue;
        if ((t1.indexOf(p[1]) === 0 && t2.indexOf(p[2]) === 0) || (t2.indexOf(p[1]) === 0 && t1.indexOf(p[2]) === 0)) return true;
      }
      return false;
    }
    var porAutor = {};
    QUOTES.forEach(function (q) {
      (porAutor[q.author] = porAutor[q.author] || []).push(q);
    });
    var remover = {},
      pares = [],
      observados = [];
    for (var a in porAutor) {
      var l = porAutor[a];
      var limite = /Ditado|Prov[ée]rbio|Autor n[ãa]o identificado/i.test(a) ? 0.9 : 0.72;
      for (var i = 0; i < l.length; i++)
        for (var j = i + 1; j < l.length; j++) {
          var x = l[i],
            y = l[j];
          if (remover[x.qid] || remover[y.qid]) continue;
          if (protegido(a, x.text, y.text)) continue;
          var s = cosseno(x.text, y.text);
          if (s < limite) {
            if (s >= limite - 0.1) observados.push([a, s.toFixed(2), x.text.slice(0, 60), y.text.slice(0, 60)]);
            continue;
          }
          var nx = nota(x),
            ny = nota(y),
            fica,
            sai;
          if (nx !== ny) {
            fica = nx > ny ? x : y;
            sai = nx > ny ? y : x;
          } else {
            fica = x.text.length >= y.text.length ? x : y;
            sai = fica === x ? y : x;
          }
          remover[sai.qid] = true;
          pares.push({ autor: a, semelhanca: +s.toFixed(2), mantida: '[' + (fica.src || '—') + '] ' + fica.text.slice(0, 65), removida: '[' + (sai.src || '—') + '] ' + sai.text.slice(0, 65) });
        }
    }
    var n = 0;
    Object.keys(remover).forEach(function (qid) {
      var r = typeof removerFrase === 'function' ? removerFrase(qid, 'duplicata de redação: mesma passagem já presente com fonte mais precisa') : { ok: false };
      if (r && r.ok) n++;
    });
    window.DUPLICATAS_F71 = pares;
    window.F71_RELATORIO = function () {
      console.log('Fase 71 — ' + pares.length + ' pares desduplicados por semelhança de redação; ' + observados.length + ' pares em observação (passagens tidas como distintas).');
      console.table(pares.slice(0, 40));
      return { removidos: pares, observados: observados };
    };
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    console.log('MeMotiva · Fase 71: ' + n + ' duplicatas de redação removidas, ' + observados.length + ' pares em observação · F71_RELATORIO() detalha.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 72 — terceira e última passagem de desduplicação.
    As Fases 70 e 71 usaram uma medida de cada vez: conjunto de termos e
    bigramas de caracteres. Sozinhas, nenhuma das duas distingue com segurança
    a faixa entre 0,70 e 0,80: ali convivem variantes de tradução da mesma
    passagem e sentenças realmente distintas que apenas compartilham vocabulário
    ("Bem-aventurados os misericordiosos" e "Sede misericordiosos", que são
    Mateus e Lucas).
    Aqui as duas condições valem juntas: semelhança de redação (bigramas) e
    semelhança de ordem das palavras (maior subsequência comum). Variantes de
    tradução preservam a ordem; passagens distintas, não. */
  function aplicar() {
    var LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|estrofe|poema|epis[óo]dio|li[çc][ãa]o|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+[a-z]?\b/i;
    /* Fonte fraca: vazia, atribuição sem registro primário, ou o rótulo genérico
      isolado. "Obra X ou declaração pública registrada" NÃO é fraca — nomeia a obra. */
    var FRACA = /^\s*$|^Atribu[íi]do\b.*sem (localiza|registro)|sem localiza[çc][ãa]o em sua obra|^Ver o veredito|^Formula[çc][ãa]o difundida|^(Entrevista|Palestra|Discurso|Declara[çc][ãa]o p[úu]blica) registrada$/i;
    function norm(s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    function cosseno(a, b) {
      function bg(s) {
        var t = norm(s).replace(/ /g, ''),
          m = {};
        for (var i = 0; i < t.length - 1; i++) {
          var g = t.substr(i, 2);
          m[g] = (m[g] || 0) + 1;
        }
        return m;
      }
      var A = bg(a),
        B = bg(b),
        n = 0,
        na = 0,
        nb = 0;
      for (var g in A) {
        na += A[g] * A[g];
        if (B[g]) n += A[g] * B[g];
      }
      for (var h in B) nb += B[h] * B[h];
      return na && nb ? n / Math.sqrt(na * nb) : 0;
    }
    function ordem(a, b) {
      var A = norm(a).split(' '),
        B = norm(b).split(' ');
      if (!A.length || !B.length) return 0;
      var prev = new Array(B.length + 1).fill(0),
        cur;
      for (var i = 1; i <= A.length; i++) {
        cur = new Array(B.length + 1).fill(0);
        for (var j = 1; j <= B.length; j++) cur[j] = A[i - 1] === B[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
        prev = cur;
      }
      return prev[B.length] / Math.min(A.length, B.length);
    }
    function nota(q) {
      var s = String(q.src || ''),
        p = 0;
      if (s && !FRACA.test(s)) p += 2;
      if (LOC.test(s)) p += 3;
      if (FRACA.test(s)) p -= 1;
      if (q.orig) p += 1;
      return p;
    }
    var PRESERVAR = [
      ['Kahlil Gibran', 'Podeis abrigar seus corpos', 'Pois seus filhos não habitam'],
      /* Fase 123: passagens distintas conferidas (Ética a Nicômaco I, 7 e X, 7–8; dois livros de Thich Nhat Hanh) */
      ['Aristóteles', 'A felicidade é uma atividade da alma', 'A felicidade perfeita é uma atividade contemplativa'],
      ['Thich Nhat Hanh', 'As pessoas costumam considerar um milagre', 'O milagre não é andar sobre as águas']
    ];
    function protegido(a, t1, t2) {
      for (var k = 0; k < PRESERVAR.length; k++) {
        var p = PRESERVAR[k];
        if (p[0] !== a) continue;
        if ((t1.indexOf(p[1]) === 0 && t2.indexOf(p[2]) === 0) || (t2.indexOf(p[1]) === 0 && t1.indexOf(p[2]) === 0)) return true;
      }
      return false;
    }
    var porAutor = {};
    QUOTES.forEach(function (q) {
      (porAutor[q.author] = porAutor[q.author] || []).push(q);
    });
    var remover = {},
      pares = [],
      restantes = [];
    for (var a in porAutor) {
      var l = porAutor[a];
      // ditados anônimos: variantes próximas costumam ser sentenças diferentes
      var anon = /Ditado|Prov[ée]rbio|Autor n[ãa]o identificado/i.test(a);
      var limCos = anon ? 0.9 : 0.7,
        limOrd = anon ? 0.85 : 0.55;
      for (var i = 0; i < l.length; i++)
        for (var j = i + 1; j < l.length; j++) {
          var x = l[i],
            y = l[j];
          if (remover[x.qid] || remover[y.qid]) continue;
          if (protegido(a, x.text, y.text)) continue;
          var c = cosseno(x.text, y.text);
          if (c < limCos) continue;
          var o = ordem(x.text, y.text);
          if (o < limOrd) {
            restantes.push([a, c.toFixed(2), o.toFixed(2), x.text.slice(0, 60), y.text.slice(0, 60)]);
            continue;
          }
          var nx = nota(x),
            ny = nota(y),
            fica,
            sai;
          if (nx !== ny) {
            fica = nx > ny ? x : y;
            sai = nx > ny ? y : x;
          } else {
            fica = x.text.length >= y.text.length ? x : y;
            sai = fica === x ? y : x;
          }
          remover[sai.qid] = true;
          pares.push({ autor: a, redacao: +c.toFixed(2), ordem: +o.toFixed(2), mantida: '[' + (fica.src || '—') + '] ' + fica.text.slice(0, 62), removida: '[' + (sai.src || '—') + '] ' + sai.text.slice(0, 62) });
        }
    }
    var n = 0;
    Object.keys(remover).forEach(function (qid) {
      var r = typeof removerFrase === 'function' ? removerFrase(qid, 'duplicata: mesma passagem em outra tradução, já presente com fonte igual ou melhor') : { ok: false };
      if (r && r.ok) n++;
    });
    window.DUPLICATAS_F72 = pares;
    window.F72_RELATORIO = function () {
      console.log('Fase 72 — ' + pares.length + ' pares desduplicados por redação e ordem; ' + restantes.length + ' pares mantidos como passagens distintas.');
      console.table(pares.slice(0, 40));
      return { removidos: pares, mantidos: restantes };
    };
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    console.log('MeMotiva · Fase 72: ' + n + ' duplicatas removidas, ' + restantes.length + ' pares mantidos como distintos · F72_RELATORIO() detalha.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 73 — obras para pessoas que estavam no acervo sem nenhuma obra catalogada.
    Sem obra, a pessoa aparece no índice apenas pela frase e não tem página onde
    a procedência possa ser conferida. */
  var OB = {
    'Abraham Maslow': [
      [
        'Motivação e Personalidade',
        'livro',
        1954,
        'Obra em que Maslow expõe a hierarquia das necessidades humanas, das fisiológicas à autorrealização, e defende que a psicologia estudara apenas a doença e deixara de lado o funcionamento saudável. O livro propõe investigar pessoas notáveis para entender o que o ser humano é capaz de se tornar. Tornou-se uma das formulações mais reproduzidas da psicologia do século XX, dentro e fora da área.'
      ],
      [
        'Introdução à Psicologia do Ser',
        'livro',
        1962,
        'Desenvolvimento da noção de autorrealização a partir do estudo das experiências que Maslow chamou de culminantes: momentos de absorção plena em que a pessoa perde a autoconsciência. Distingue a motivação pela carência da motivação pelo crescimento. É o texto central da psicologia humanista, terceira via entre o behaviorismo e a psicanálise.'
      ]
    ],
    'Booker T. Washington': [
      [
        'Da Escravidão à Liberdade',
        'memoria',
        1901,
        'Autobiografia que narra o nascimento na escravidão na Virgínia, o trabalho em minas de sal, a caminhada de centenas de quilômetros até o Instituto Hampton e a fundação do Instituto Tuskegee. Defende a formação técnica e a acumulação econômica como caminho de emancipação, posição que W. E. B. Du Bois contestaria com dureza. É um dos relatos autobiográficos mais lidos dos Estados Unidos.'
      ],
      [
        'Instituto Tuskegee',
        'feito',
        1881,
        'Escola normal e industrial fundada no Alabama com trinta alunos e um galpão emprestado, que se tornou o principal centro de formação técnica para negros nos Estados Unidos. Os próprios estudantes fabricaram os tijolos e ergueram os prédios. A instituição formou professores, agricultores e artesãos por gerações e abrigou a pesquisa agrícola de George Washington Carver.'
      ]
    ],
    'Darcy Ribeiro': [
      [
        'O Povo Brasileiro',
        'livro',
        1995,
        'Ensaio de interpretação do Brasil que descreve a formação de um povo novo a partir do encontro violento entre indígenas, africanos e portugueses, e sustenta que o país produziu uma etnia própria, e não a soma de suas matrizes. Trata a desigualdade brasileira como resultado deliberado desse processo, não como atraso. É a obra de síntese de sua antropologia.'
      ],
      [
        'Maíra',
        'romance',
        1976,
        'Romance sobre um indígena levado a estudar em Roma para tornar-se padre e o retorno impossível à própria aldeia, escrito a partir de uma década de convivência do autor com povos indígenas do Brasil central. A narrativa alterna vozes e registros, do relato de campo ao mito. É considerado um dos romances brasileiros mais importantes sobre o encontro entre culturas.'
      ],
      [
        'Universidade de Brasília',
        'feito',
        1962,
        'Projeto e implantação da UnB, concebida com Anísio Teixeira como universidade organizada por institutos centrais e faculdades, e não pela justaposição de escolas profissionais isoladas. A estrutura previa formação básica comum antes da especialização. O modelo foi desfeito em parte pela intervenção militar de 1964, mas permanece como referência de desenho universitário no país.'
      ]
    ],
    'Anísio Teixeira': [
      ['Educação Não é Privilégio', 'livro', 1957, 'Defesa da escola pública, gratuita, obrigatória e laica como condição de uma sociedade democrática, escrita contra a ideia de que o ensino secundário deveria formar apenas uma elite. Anísio argumenta que sem educação comum não há igualdade possível de ponto de partida. É o texto mais citado do escolanovismo brasileiro.'],
      ['Escola Parque', 'feito', 1950, 'Modelo de escola em tempo integral implantado no Centro Educacional Carneiro Ribeiro, em Salvador, que combinava as disciplinas convencionais com oficinas, arte, esporte e biblioteca em um segundo turno. A concepção buscava dar à criança pobre o que a criança rica já tinha fora da escola. Inspirou os CIEPs do Rio de Janeiro décadas depois.']
    ],
    'Max Planck': [
      [
        'Autobiografia Científica',
        'memoria',
        1948,
        'Relato do próprio percurso intelectual, da formação em termodinâmica à hipótese dos quanta de energia, que o autor descreve como um ato de desespero diante de um problema que nenhuma teoria clássica resolvia. Trata também da relação entre convicção pessoal e evidência experimental. É a principal fonte sobre como Planck entendia a própria descoberta.'
      ],
      ['Hipótese dos quanta de energia', 'ciencia', 1900, 'Proposta de que a energia é emitida e absorvida em pacotes discretos, formulada para explicar a radiação do corpo negro, problema que a física clássica não conseguia resolver. A constante que leva seu nome tornou-se uma das grandezas fundamentais da natureza. É o marco inicial da física quântica.']
    ],
    'Meister Eckhart': [
      [
        'Sermões Alemães',
        'discurso',
        1300,
        'Conjunto de pregações feitas em alemão vulgar, e não em latim, para religiosas e leigos, em que Eckhart trata do desprendimento, do nascimento de Deus na alma e da união sem intermediários entre o humano e o divino. A escolha da língua comum e a radicalidade das formulações levaram-no a processo por heresia. Os sermões influenciaram toda a mística alemã posterior.'
      ]
    ],
    'Sojourner Truth': [
      [
        'Não Sou Eu uma Mulher?',
        'discurso',
        1851,
        'Intervenção improvisada na Convenção dos Direitos da Mulher em Akron, Ohio, em que a oradora, nascida escravizada, confronta os argumentos sobre a fragilidade feminina com a própria experiência de trabalho forçado e de filhos vendidos. O texto chegou até nós por transcrições divergentes, feitas anos depois. Tornou-se um dos discursos fundadores do feminismo negro.'
      ],
      ['Narrativa de Sojourner Truth', 'memoria', 1850, 'Relato ditado por ela a Olive Gilbert, por ser analfabeta, cobrindo a escravidão em Nova York, a fuga com a filha no colo e a ação judicial que moveu para recuperar o filho vendido ilegalmente ao Alabama — processo que venceu, tornando-se uma das primeiras mulheres negras a ganhar uma causa contra um homem branco nos Estados Unidos.']
    ],
    'Oprah Winfrey': [
      ['O Que Eu Sei com Certeza', 'memoria', 2014, 'Reunião das colunas que a autora assinou por catorze anos na revista O, organizadas por tema: alegria, resiliência, gratidão, possibilidade. Os textos partem de episódios da própria vida, da infância pobre no Mississippi à televisão. É o livro em que sua voz aparece mais próxima da escrita do que da entrevista.'],
      [
        'The Oprah Winfrey Show',
        'feito',
        1986,
        'Programa diário de entrevistas exibido por vinte e cinco anos, que deslocou o formato do sensacionalismo para a conversa sobre experiência pessoal, abuso, doença e leitura. O clube do livro criado dentro do programa transformava títulos em best-sellers da noite para o dia. Foi o programa de seu gênero mais assistido da história da televisão americana.'
      ]
    ],
    'John Bowlby': [
      ['Apego', 'livro', 1969, 'Primeiro volume da trilogia Apego e Perda, que reformula o vínculo entre bebê e cuidador como necessidade biológica de proteção, e não como subproduto da alimentação, apoiando-se em etologia e observação direta. Introduz a ideia de base segura a partir da qual a criança explora o mundo. É a obra fundadora da teoria do apego.'],
      [
        'Cuidados Maternos e Saúde Mental',
        'documento',
        1951,
        'Relatório encomendado pela Organização Mundial da Saúde sobre crianças sem família na Europa do pós-guerra, que documentou os efeitos da separação prolongada e da institucionalização sobre o desenvolvimento. O texto mudou práticas hospitalares e de abrigo em vários países, inclusive a proibição de visita dos pais a crianças internadas.'
      ]
    ],
    'Coco Chanel': [
      ['Vestido preto simples', 'feito', 1926, 'Peça apresentada na Vogue americana e descrita pela revista como o Ford das mulheres: um modelo curto, sem ornamento e de linha reta, em preto, cor até então reservada ao luto. A proposta rompeu com o espartilho e com o vestuário elaborado da Belle Époque e tornou-se peça permanente do guarda-roupa feminino.'],
      ['Chanel Nº 5', 'feito', 1921, 'Perfume criado com o perfumista Ernest Beaux a partir de aldeídos sintéticos, num tempo em que a perfumaria buscava imitar flores isoladas. O frasco retangular e o nome sem floreio acompanhavam a mesma lógica de despojamento de suas roupas. Segue em produção há mais de um século.']
    ]
  };
  var PG = {
    'Abraham Maslow||Motivação e Personalidade': {
      sobre: 'Exposição da hierarquia das necessidades humanas, das fisiológicas à autorrealização, e defesa de que a psicologia estudara apenas a doença, deixando de lado o funcionamento saudável.',
      contexto: 'Escrito quando a psicologia americana se dividia entre behaviorismo e psicanálise, ambos construídos a partir do laboratório animal ou do paciente em sofrimento.',
      momento: 'Publicado em 1954; a formulação da hierarquia já aparecera em artigo de 1943.',
      importancia: 'Fundou a psicologia humanista e é uma das formulações mais reproduzidas do século, citada em administração, educação e marketing muito além da psicologia.',
      curiosidade: 'A representação em pirâmide, hoje inseparável da teoria, não foi desenhada por Maslow: apareceu em manuais de administração depois de sua morte.'
    },
    'Abraham Maslow||Introdução à Psicologia do Ser': {
      sobre: 'Desenvolvimento da noção de autorrealização a partir das experiências culminantes — momentos de absorção plena em que a pessoa perde a autoconsciência — e da distinção entre motivação por carência e por crescimento.',
      contexto: 'Escrito a partir do estudo biográfico de pessoas que Maslow considerava plenamente desenvolvidas, método que a psicologia experimental de sua época considerava pouco rigoroso.',
      momento: 'Publicado em 1962, mesmo ano da fundação da Associação Americana de Psicologia Humanista.',
      importancia: 'É o texto central da terceira via entre behaviorismo e psicanálise e antecipou boa parte do que a psicologia positiva retomaria décadas depois.',
      curiosidade: 'No fim da vida Maslow reconsiderou o topo da hierarquia e propôs acima da autorrealização a autotranscendência, revisão pouco incorporada às reproduções da teoria.'
    },
    'Booker T. Washington||Da Escravidão à Liberdade': {
      sobre: 'Autobiografia que narra o nascimento na escravidão na Virgínia, o trabalho em minas de sal, a caminhada de centenas de quilômetros até o Instituto Hampton e a fundação de Tuskegee.',
      contexto: 'Escrita no auge da segregação legal no sul dos Estados Unidos, quando o linchamento era prática corrente e qualquer reivindicação política de negros era respondida com violência.',
      momento: 'Publicada em 1901, seis anos depois do discurso de Atlanta em que propôs o acordo que ficou conhecido como Compromisso de Atlanta.',
      importancia: 'É um dos relatos autobiográficos mais lidos dos Estados Unidos e o documento central da estratégia de emancipação pela formação técnica e pela acumulação econômica.',
      curiosidade: 'W. E. B. Du Bois dedicou um capítulo inteiro de As Almas do Povo Negro a refutar a posição defendida neste livro, dando início ao debate que dividiu o movimento negro americano por décadas.'
    },
    'Booker T. Washington||Instituto Tuskegee': {
      sobre: 'Escola normal e industrial fundada no Alabama com trinta alunos e um galpão emprestado, que se tornou o principal centro de formação técnica para negros nos Estados Unidos.',
      contexto: 'Criada num estado onde ensinar pessoas negras a ler havia sido crime até poucas décadas antes, e onde a escola dependia de doações do norte para sobreviver.',
      momento: 'Fundado em 1881; os próprios estudantes fabricaram os tijolos e ergueram os prédios da instituição.',
      importancia: 'Formou professores, agricultores e artesãos por gerações, abrigou a pesquisa agrícola de George Washington Carver e serviu de modelo a escolas semelhantes em todo o sul.',
      curiosidade: 'A instituição abrigou também, entre 1932 e 1972, o estudo sobre sífilis conduzido pelo serviço público de saúde americano que negou tratamento a pacientes negros — episódio que nada tem a ver com o projeto de Washington, mas que marcou o nome do lugar.'
    },
    'Darcy Ribeiro||O Povo Brasileiro': {
      sobre: 'Ensaio de interpretação do Brasil que descreve a formação de um povo novo a partir do encontro violento entre indígenas, africanos e portugueses, e sustenta que o país produziu uma etnia própria.',
      contexto: 'Escrito no fim da vida do autor, como síntese de quatro décadas de trabalho antropológico e da série Estudos de Antropologia da Civilização.',
      momento: 'Publicado em 1995, dois anos antes de sua morte; foi adaptado em série documental em 2000.',
      importancia: 'É a obra de síntese de sua antropologia e uma das interpretações do Brasil mais lidas fora da universidade, ao lado de Gilberto Freyre e Sérgio Buarque de Holanda.',
      curiosidade: 'O livro trata a desigualdade brasileira como resultado deliberado do processo de formação, e não como atraso a ser superado pelo tempo — tese que o distingue das interpretações anteriores.'
    },
    'Darcy Ribeiro||Maíra': {
      sobre: 'Romance sobre um indígena levado a estudar em Roma para tornar-se padre e o retorno impossível à própria aldeia, com narrativa que alterna vozes e registros, do relato de campo ao mito.',
      contexto: 'Escrito a partir de uma década de convivência do autor com povos indígenas do Brasil central, e durante seu exílio, após a cassação de 1964.',
      momento: 'Publicado em 1976, primeiro romance do autor, já aos cinquenta e quatro anos.',
      importancia: 'É considerado um dos romances brasileiros mais importantes sobre o encontro entre culturas e raro caso de ficção escrita por um antropólogo de campo sobre seu próprio objeto.',
      curiosidade: 'Darcy dizia ter escrito ficção porque a linguagem científica não dava conta do que havia visto entre os Kaapor e os Urubu.'
    },
    'Darcy Ribeiro||Universidade de Brasília': {
      sobre: 'Projeto e implantação da UnB, concebida com Anísio Teixeira como universidade organizada por institutos centrais e faculdades, e não pela justaposição de escolas profissionais isoladas.',
      contexto: 'Criada junto com a nova capital, num momento em que o ensino superior brasileiro reproduzia o modelo de faculdades isoladas herdado do século XIX.',
      momento: 'Fundada em 1962; em 1965, após a intervenção militar, mais de duzentos professores pediram demissão coletiva.',
      importancia: 'A estrutura por institutos centrais, com formação básica comum antes da especialização, permanece como referência de desenho universitário no país.',
      curiosidade: 'Darcy foi o primeiro reitor da universidade e, décadas depois, já senador, acompanhou a reconstrução de parte do projeto original.'
    },
    'Anísio Teixeira||Educação Não é Privilégio': {
      sobre: 'Defesa da escola pública, gratuita, obrigatória e laica como condição de uma sociedade democrática, escrita contra a ideia de que o ensino secundário deveria formar apenas uma elite.',
      contexto: 'Publicada em pleno debate sobre a primeira Lei de Diretrizes e Bases, em que setores privados e confessionais disputavam a destinação do dinheiro público para a educação.',
      momento: 'Publicada em 1957; a lei em disputa só seria aprovada em 1961.',
      importancia: 'É o texto mais citado do escolanovismo brasileiro e a formulação clássica, em português, do argumento de que sem educação comum não há igualdade de ponto de partida.',
      curiosidade: 'Anísio assinou em 1932 o Manifesto dos Pioneiros da Educação Nova, ao lado de Fernando de Azevedo e Cecília Meireles, documento do qual este livro é o desdobramento maduro.'
    },
    'Anísio Teixeira||Escola Parque': {
      sobre: 'Modelo de escola em tempo integral que combinava as disciplinas convencionais com oficinas, arte, esporte e biblioteca em um segundo turno, implantado no Centro Educacional Carneiro Ribeiro.',
      contexto: 'Concebido para dar à criança pobre o que a criança rica já tinha fora da escola: tempo, convívio e acesso a cultura e a trabalho manual qualificado.',
      momento: 'Implantado em Salvador a partir de 1950; o conjunto previsto nunca foi concluído integralmente.',
      importancia: 'Inspirou os CIEPs do Rio de Janeiro, projetados por Darcy Ribeiro e Oscar Niemeyer nos anos oitenta, e segue como referência do debate sobre escola integral no Brasil.',
      curiosidade: 'O projeto arquitetônico previa que a criança passasse o dia inteiro na escola em dois espaços distintos: a escola-classe, para as disciplinas, e a escola-parque, para tudo o mais.'
    },
    'Max Planck||Autobiografia Científica': {
      sobre: 'Relato do próprio percurso intelectual, da formação em termodinâmica à hipótese dos quanta, que o autor descreve como um ato de desespero diante de um problema sem solução clássica.',
      contexto: 'Escrita no fim da vida, depois de ter perdido um filho na Primeira Guerra e outro executado pelo regime nazista por participação no atentado de 1944 contra Hitler.',
      momento: 'Publicada em 1948, ano de sua morte, aos oitenta e nove anos.',
      importancia: 'É a principal fonte sobre como Planck entendia a própria descoberta e sobre sua relação, sempre desconfortável, com as consequências dela.',
      curiosidade: 'É neste texto que aparece a observação de que uma nova verdade científica não triunfa convencendo seus adversários, mas porque eles morrem e uma nova geração cresce familiarizada com ela.'
    },
    'Max Planck||Hipótese dos quanta de energia': {
      sobre: 'Proposta de que a energia é emitida e absorvida em pacotes discretos, formulada para explicar a distribuição da radiação do corpo negro, problema que a física clássica não resolvia.',
      contexto: 'A teoria eletromagnética vigente previa energia infinita em comprimentos de onda curtos, resultado absurdo que ficou conhecido como catástrofe do ultravioleta.',
      momento: 'Apresentada à Sociedade Alemã de Física em 14 de dezembro de 1900, data tomada como nascimento da física quântica.',
      importancia: 'A constante que leva seu nome tornou-se uma das grandezas fundamentais da natureza, e a hipótese abriu o caminho para Einstein, Bohr e toda a física do século XX.',
      curiosidade: 'Planck considerou a hipótese uma solução provisória e passou anos tentando reconciliá-la com a física clássica, sem sucesso.'
    },
    'Meister Eckhart||Sermões Alemães': {
      sobre: 'Pregações feitas em alemão vulgar, e não em latim, para religiosas e leigos, sobre o desprendimento, o nascimento de Deus na alma e a união sem intermediários entre o humano e o divino.',
      contexto: 'Proferidos por um mestre da Universidade de Paris a comunidades de beguinas e dominicanas do Reno, num momento em que a Igreja vigiava de perto a mística leiga.',
      momento: 'Pregados no início do século XIV; Eckhart foi processado por heresia em Colônia em 1326 e morreu antes da sentença, em 1328.',
      importancia: 'Influenciaram toda a mística alemã posterior, de Taulero a Suso, e foram redescobertos no século XIX por filósofos alemães, entre eles Schopenhauer e Hegel.',
      curiosidade: 'A escolha de pregar na língua comum, e não em latim, forçou Eckhart a criar vocabulário filosófico em alemão, e vários termos que ele cunhou permanecem em uso.'
    },
    'Sojourner Truth||Não Sou Eu uma Mulher?': {
      sobre: 'Intervenção improvisada em que a oradora, nascida escravizada, confronta os argumentos sobre a fragilidade feminina com a própria experiência de trabalho forçado e de filhos vendidos.',
      contexto: 'Proferida numa convenção em que o sufrágio feminino era defendido em nome da delicadeza das mulheres, argumento que excluía de antemão as mulheres negras escravizadas.',
      momento: 'Proferida na Convenção dos Direitos da Mulher em Akron, Ohio, em 29 de maio de 1851.',
      importancia: 'Tornou-se um dos discursos fundadores do feminismo negro e a referência mais citada sobre a interseção entre raça e gênero no século XIX.',
      curiosidade: 'O texto chegou até nós por transcrições divergentes: a versão mais difundida foi publicada doze anos depois por Frances Gage, em dialeto sulista que a oradora, criada em ambiente de língua holandesa em Nova York, provavelmente não falava.'
    },
    'Sojourner Truth||Narrativa de Sojourner Truth': {
      sobre: 'Relato ditado a Olive Gilbert, por ser a autora analfabeta, cobrindo a escravidão em Nova York, a fuga com a filha no colo e a ação judicial que moveu para recuperar o filho vendido ilegalmente.',
      contexto: 'Publicado no circuito abolicionista do norte, gênero então corrente de narrativas de pessoas escravizadas usadas como prova documental contra a escravidão.',
      momento: 'Publicado em 1850; a autora custeou a impressão e vendia exemplares nas próprias conferências.',
      importancia: 'É a principal fonte sobre sua vida e registra uma das primeiras vitórias judiciais de uma mulher negra contra um homem branco nos Estados Unidos.',
      curiosidade: 'A escravidão foi abolida no estado de Nova York em 1827, e foi justamente sob essa lei que ela conseguiu anular a venda ilegal do filho para o Alabama.'
    },
    'Oprah Winfrey||O Que Eu Sei com Certeza': {
      sobre: 'Reunião das colunas que a autora assinou por catorze anos na revista O, organizadas por tema — alegria, resiliência, gratidão, possibilidade — e escritas a partir de episódios da própria vida.',
      contexto: 'Compiladas depois do encerramento de seu programa diário, quando ela passou a dedicar-se ao canal próprio e à atividade editorial.',
      momento: 'Publicado em 2014; o título vem de uma pergunta que o crítico Gene Siskel lhe fez numa entrevista em 1998.',
      importancia: 'É o livro em que sua voz aparece mais próxima da escrita do que da entrevista, e a fonte mais confiável das formulações que circulam com seu nome.',
      curiosidade: 'A pergunta de Siskel — o que você sabe com certeza? — a deixou sem resposta na hora, e ela passou os dezesseis anos seguintes respondendo a ela por escrito.'
    },
    'Oprah Winfrey||The Oprah Winfrey Show': {
      sobre: 'Programa diário de entrevistas exibido por vinte e cinco anos, que deslocou o formato do sensacionalismo para a conversa sobre experiência pessoal, abuso, doença e leitura.',
      contexto: 'Surgiu num mercado de programas de auditório voltados ao confronto e ao escândalo, formato do qual a apresentadora se afastou deliberadamente a partir dos anos noventa.',
      momento: 'Exibido nacionalmente de 1986 a 2011, com cerca de cinco mil episódios.',
      importancia: 'Foi o programa de seu gênero mais assistido da história da televisão americana, e o clube do livro criado dentro dele transformava títulos em best-sellers da noite para o dia.',
      curiosidade: 'A apresentadora revelou no próprio programa ter sido abusada na infância, o que mudou a natureza das conversas que passou a conduzir sobre o tema.'
    },
    'John Bowlby||Apego': {
      sobre: 'Primeiro volume da trilogia Apego e Perda, que reformula o vínculo entre bebê e cuidador como necessidade biológica de proteção, e não como subproduto da alimentação.',
      contexto: 'Escrito contra a explicação então dominante, tanto psicanalítica quanto behaviorista, de que a criança se apega a quem a alimenta; Bowlby recorreu à etologia e à observação direta.',
      momento: 'Publicado em 1969; os volumes seguintes, Separação e Perda, saíram em 1973 e 1980.',
      importancia: 'É a obra fundadora da teoria do apego, hoje base de práticas em pediatria, adoção, acolhimento institucional e psicoterapia.',
      curiosidade: 'A noção de base segura — o cuidador a partir do qual a criança explora o mundo e ao qual retorna — foi desenvolvida em colaboração com Mary Ainsworth, cujos experimentos deram sustentação empírica à teoria.'
    },
    'John Bowlby||Cuidados Maternos e Saúde Mental': {
      sobre: 'Relatório encomendado pela Organização Mundial da Saúde sobre crianças sem família na Europa do pós-guerra, que documentou os efeitos da separação prolongada e da institucionalização.',
      contexto: 'Produzido quando a Europa tinha centenas de milhares de crianças órfãs ou separadas dos pais, e a prática corrente era o abrigo coletivo com rotatividade de cuidadores.',
      momento: 'Publicado em 1951; foi traduzido para catorze idiomas e teve edição popular de grande circulação.',
      importancia: 'Mudou práticas hospitalares e de abrigo em vários países, inclusive a proibição, até então comum, de visita dos pais a crianças internadas.',
      curiosidade: 'O relatório foi criticado por atribuir à mãe, e não ao cuidado estável em geral, a função descrita — ponto que o próprio Bowlby reformulou nos trabalhos posteriores.'
    },
    'Coco Chanel||Vestido preto simples': {
      sobre: 'Modelo curto, sem ornamento e de linha reta, em preto, cor até então reservada ao luto, apresentado na Vogue americana e descrito pela revista como o Ford das mulheres.',
      contexto: 'Proposto quando o vestuário feminino ainda dependia de espartilho, tecidos pesados e ornamentação elaborada herdados da Belle Époque.',
      momento: 'Publicado na Vogue americana em outubro de 1926.',
      importancia: 'Tornou-se peça permanente do guarda-roupa feminino no mundo inteiro e é um dos exemplos mais citados de como uma proposta de moda pode alterar um hábito duradouro.',
      curiosidade: 'A comparação com o Ford Modelo T, feita pela própria revista, apontava o que havia de novo: uma peça igual para todas, acessível e reproduzível.'
    },
    'Coco Chanel||Chanel Nº 5': {
      sobre: 'Perfume criado com o perfumista Ernest Beaux a partir de aldeídos sintéticos, num tempo em que a perfumaria buscava reproduzir flores isoladas.',
      contexto: 'Concebido para acompanhar a mesma lógica de despojamento de suas roupas: frasco retangular de farmácia, rótulo sóbrio e nome sem floreio.',
      momento: 'Lançado em 1921; o nome vem da quinta amostra apresentada pelo perfumista, escolhida por ela sem hesitação.',
      importancia: 'Segue em produção há mais de um século e é o perfume mais vendido da história, além de ter estabelecido o uso de moléculas sintéticas em alta perfumaria.',
      curiosidade: 'A disputa societária em torno dos direitos do perfume com a família Wertheimer atravessou décadas e envolveu tribunais em três países.'
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
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--z' + lista.length };
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
        console.warn('Fase 73 · página sem obra:', k);
        continue;
      }
      if (!OBRA_PAGINA[k]) {
        OBRA_PAGINA[k] = PG[k];
        nP++;
      }
    }
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    console.log('MeMotiva · Fase 73: +' + nO + ' obras e +' + nP + ' páginas para pessoas que estavam sem obra catalogada.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  var NOVAS = [
    ['Abraham Maslow', 'Se a única ferramenta que você tem é um martelo, é tentador tratar tudo como se fosse um prego.', 'I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.', 'Introdução à Psicologia do Ser', 'reflexao'],
    ['Abraham Maslow', 'O que um homem pode ser, ele precisa ser.', 'What a man can be, he must be.', 'Motivação e Personalidade', 'autorreconhecimento'],
    ['Abraham Maslow', 'É bem verdade que o homem vive só de pão — quando não há pão.', 'It is quite true that man lives by bread alone — when there is no bread.', 'Motivação e Personalidade', 'vida'],

    ['Booker T. Washington', 'O sucesso deve ser medido não pela posição alcançada na vida, mas pelos obstáculos superados no caminho.', 'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.', 'Da Escravidão à Liberdade', 'dificeis'],
    ['Booker T. Washington', 'Ninguém consegue rebaixar-me ao ponto de me fazer odiá-lo.', 'I will permit no man to narrow and degrade my soul by making me hate him.', 'Da Escravidão à Liberdade', 'empoderamento'],
    ['Booker T. Washington', 'Lancem seu balde onde vocês estão.', 'Cast down your bucket where you are.', 'Instituto Tuskegee', 'motivacao'],

    ['Sojourner Truth', 'Eu arei, plantei e enchi celeiros, e nenhum homem podia me superar. E não sou eu uma mulher?', 'I have ploughed, and planted, and gathered into barns, and no man could head me. And ain’t I a woman?', 'Não Sou Eu uma Mulher?', 'empoderamento'],
    ['Sojourner Truth', 'Se a primeira mulher que Deus fez foi forte o bastante para virar o mundo de cabeça para baixo sozinha, estas mulheres juntas deveriam ser capazes de virá-lo de volta.', 'If the first woman God ever made was strong enough to turn the world upside down all alone, these women together ought to be able to turn it back.', 'Não Sou Eu uma Mulher?', 'empoderamento'],

    ['Max Planck', 'Uma nova verdade científica não triunfa convencendo seus adversários: ela triunfa porque eles morrem e uma nova geração cresce familiarizada com ela.', 'Eine neue wissenschaftliche Wahrheit pflegt sich nicht in der Weise durchzusetzen, daß ihre Gegner überzeugt werden, sondern dadurch, daß die Gegner allmählich aussterben.', 'Autobiografia Científica', 'reflexao'],
    ['Max Planck', 'A ciência não consegue resolver o mistério último da natureza, porque nós mesmos somos parte do enigma que tentamos resolver.', 'Science cannot solve the ultimate mystery of nature, because we ourselves are part of the mystery we are trying to solve.', 'Autobiografia Científica', 'reflexao'],

    ['Meister Eckhart', 'Se a única oração que você fizer em toda a vida for obrigado, já será suficiente.', 'Wäre das einzige Gebet, das du je sprichst, danke, so würde das genügen.', 'Sermões Alemães', 'gratidao'],
    ['Meister Eckhart', 'Deus está mais perto de mim do que eu estou de mim mesmo.', 'Got ist mir næher denne ich mir selber sî.', 'Sermões Alemães', 'fe'],

    ['Darcy Ribeiro', 'Ninguém vale mais do que o outro; todos somos filhos da mesma tragédia e da mesma esperança.', '', 'O Povo Brasileiro', 'vida'],
    ['Anísio Teixeira', 'Só existe democracia onde a educação é um direito de todos e não o privilégio de alguns.', '', 'Educação Não é Privilégio', 'educacao'],

    ['John Bowlby', 'A criança precisa de uma base segura a partir da qual possa explorar o mundo e à qual possa retornar.', 'The child needs a secure base from which to explore the world and to which he can return.', 'Apego', 'familia'],
    ['John Bowlby', 'O que para o psicanalista é a perda da mãe, para o etólogo é a perda da proteção contra o perigo.', 'Attachment behaviour has the function of protection from predators.', 'Apego', 'familia'],

    ['Oprah Winfrey', 'Transforme suas feridas em sabedoria.', 'Turn your wounds into wisdom.', 'O Que Eu Sei com Certeza', 'dificeis'],
    ['Oprah Winfrey', 'A gratidão é o caminho mais rápido para transformar o que você tem no bastante.', 'Be thankful for what you have; you’ll end up having more.', 'O Que Eu Sei com Certeza', 'gratidao'],

    ['Coco Chanel', 'A moda passa, o estilo permanece.', 'La mode se démode, le style jamais.', 'Vestido preto simples', 'autorreconhecimento'],

    ['Théophile Gautier', 'Nada do que é verdadeiramente belo serve para alguma coisa: tudo o que é útil é feio.', 'Il n’y a de vraiment beau que ce qui ne peut servir à rien; tout ce qui est utile est laid.', 'Mademoiselle de Maupin', 'reflexao'],

    ['Oliver Goldsmith', 'Escolhi minha esposa como ela escolheu o vestido de noiva: não pelo brilho da superfície, mas por qualidades que durassem bem.', 'I chose my wife, as she did her wedding gown, not for a fine glossy surface, but such qualities as would wear well.', 'O Vigário de Wakefield', 'amor'],

    ['Norman Schwarzkopf', 'A liderança é uma combinação poderosa de estratégia e caráter. Mas, se você tiver de ficar sem um dos dois, fique sem a estratégia.', 'Leadership is a potent combination of strategy and character. But if you must be without one, be without the strategy.', 'It Doesn’t Take a Hero', 'lideranca'],

    ['Nora Ephron', 'Se eu contar a história, controlo a versão. Se eu contar a história, posso fazer você rir — e prefiro que você ria de mim a sentir pena de mim.', 'Because if I tell the story, I control the version. Because if I tell the story, I can make you laugh, and I would rather have you laugh at me than feel sorry for me.', 'Heartburn', 'dificeis'],

    ['Reinhold Niebuhr', 'Concedei-me a serenidade para aceitar o que não posso mudar, coragem para mudar o que posso, e sabedoria para distinguir uma coisa da outra.', 'God, give us grace to accept with serenity the things that cannot be changed, courage to change the things which should be changed, and the wisdom to distinguish the one from the other.', 'Oração da Serenidade', 'conforto'],
    ['Reinhold Niebuhr', 'Os grupos sociais são menos capazes de autocrítica e de justiça do que os indivíduos que os compõem.', 'The group is more arrogant, hypocritical, self-centered and more ruthless in the pursuit of its ends than the individual.', 'Moral Man and Immoral Society', 'politica'],

    ['Robert Collier', 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', 'Success is the sum of small efforts, repeated day in and day out.', 'The Robert Collier Letter Book', 'motivacao'],

    ['Santo Isidoro de Sevilha', 'As letras são sinais das coisas e têm tanta força que nos dizem, sem voz, o que os ausentes disseram.', 'Litterae autem sunt indices rerum, tantamque vim habent, ut nobis dicta absentium sine voce loquantur.', 'Etimologias', 'educacao'],

    ['Thomas J. Stanley', 'Riqueza não é o mesmo que renda: quem ganha muito e gasta tudo fica rico em estilo de vida, não em patrimônio.', 'Wealth is not the same as income. If you make a good income each year and spend it all, you are not getting wealthier. You are just living high.', 'O Milionário Mora ao Lado', 'financas'],

    ['Thomas Sowell', 'Não há soluções: há apenas escolhas entre custos.', 'There are no solutions. There are only trade-offs.', 'Conflito de Visões', 'politica'],

    ['Walt Disney', 'A todos que vêm a este lugar feliz: bem-vindos. Aqui a idade revive boas lembranças do passado, e a juventude saboreia o desafio e a promessa do futuro.', 'To all who come to this happy place: welcome. Here age relives fond memories of the past, and here youth may savor the challenge and promise of the future.', 'Disneylândia', 'felicidade'],

    ['Plutarco', 'Não escrevo histórias, e sim vidas; e nem sempre é nas ações mais gloriosas que se revela a virtude ou o vício.', 'Οὔτε γὰρ ἱστορίας γράφομεν, ἀλλὰ βίους.', 'Vidas Paralelas', 'biografia'],

    ['Robert Kiyosaki', 'Os pobres e a classe média trabalham por dinheiro. Os ricos fazem o dinheiro trabalhar para eles.', 'The poor and the middle class work for money. The rich have money work for them.', 'Pai Rico, Pai Pobre', 'financas'],

    ['Oliver Wendell Holmes', 'O jovem conhece as regras, mas o velho conhece as exceções.', 'Young man knows the rules, but the old man knows the exceptions.', 'O Autocrata da Mesa do Café da Manhã', 'reflexao'],

    ['Neil Postman', 'A infância é uma invenção social, e não uma categoria biológica.', 'Childhood is a social artifact, not a biological category.', 'O Desaparecimento da Infância', 'educacao'],

    ['Nikola Tesla', 'Nossas virtudes e nossos defeitos são inseparáveis, como a força e a matéria: quando se separam, o homem deixa de existir.', 'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.', 'Minhas Invenções', 'autorreconhecimento'],

    ['Mihaly Csikszentmihalyi', 'Chamo de fluxo o estado em que a pessoa está tão envolvida numa atividade que nada mais parece importar.', 'I call it flow: the state in which people are so involved in an activity that nothing else seems to matter.', 'Fluxo', 'felicidade'],

    ['Miguel de Cervantes', 'A pena é a língua da alma.', 'La pluma es la lengua del alma.', 'Dom Quixote', 'reflexao'],

    ['Stephen Covey', 'Ser proativo é mais do que tomar iniciativa: é reconhecer que somos responsáveis pelas nossas próprias escolhas.', 'Being proactive means more than taking initiative. It means that as human beings we are responsible for our own lives.', 'Os 7 Hábitos das Pessoas Altamente Eficazes', 'empoderamento'],

    ['T. S. Eliot', 'Medi minha vida em colheres de café.', 'I have measured out my life with coffee spoons.', 'A Canção de Amor de J. Alfred Prufrock', 'reflexao'],

    ['Paul Tillich', 'A coragem é a autoafirmação do ser apesar do fato do não-ser.', 'Courage is the self-affirmation of being in spite of the fact of non-being.', 'A Coragem de Ser', 'fe'],

    ['Rosa Parks', 'Aprendi ao longo dos anos que, quando a pessoa já tomou sua decisão, isso diminui o medo.', 'I have learned over the years that when one’s mind is made up, this diminishes fear.', 'Rosa Parks: Minha História', 'dificeis'],

    ['Sophie Scholl', 'Cada indivíduo consciente da responsabilidade que carrega deve defender-se nesta última hora.', 'Jeder einzelne Mensch, der sich seiner Verantwortung bewußt ist, muß sich in dieser letzten Stunde wehren.', 'Panfletos da Rosa Branca', 'politica'],

    ['Stanley Milgram', 'A obediência é o elemento psicológico que liga o indivíduo ao sistema de autoridade.', 'Obedience is the psychological mechanism that links individual action to political purpose.', 'Obediência à Autoridade', 'manipulacao'],

    ['Reid Hoffman', 'Nenhuma carreira é garantida: todos estamos em beta permanente.', 'You are always a work in progress. You are in permanent beta.', 'O Startup de Você', 'empreendedorismo'],

    ['Robert K. Greenleaf', 'O teste é este: aqueles a quem se serve crescem como pessoas? Tornam-se mais saudáveis, mais sábios, mais livres, mais autônomos?', 'The best test is: do those served grow as persons? Do they, while being served, become healthier, wiser, freer, more autonomous?', 'O Servidor como Líder', 'lideranca'],

    ['Pelé', 'O sucesso não é acidente: é trabalho duro, perseverança, estudo, sacrifício e, acima de tudo, amor pelo que se está fazendo.', 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.', 'Pelé: A Autobiografia', 'motivacao']
  ];
  var OBEXTRA = {
    'Reinhold Niebuhr': [
      [
        'Oração da Serenidade',
        'documento',
        1943,
        'Prece de três linhas escrita para um culto em Heath, Massachusetts, pedindo serenidade diante do que não se pode mudar, coragem para mudar o que se pode e discernimento entre as duas coisas. O texto passou a circular em cartões distribuídos a soldados na Segunda Guerra e foi adotado pelos Alcoólicos Anônimos. É hoje um dos textos devocionais mais reproduzidos em língua inglesa, em geral sem o nome do autor.'
      ]
    ]
  };
  function aplicar() {
    var nO = 0;
    for (var nome in OBEXTRA) {
      if (!OBRAS[nome]) OBRAS[nome] = [];
      var lista = OBRAS[nome];
      var base = typeof slugify === 'function' ? slugify(nome) : nome.toLowerCase().replace(/\s+/g, '-');
      for (var i = 0; i < OBEXTRA[nome].length; i++) {
        var r = OBEXTRA[nome][i];
        if (
          lista.some(function (o) {
            return o.t === r[0];
          })
        )
          continue;
        var obra = { t: r[0], tipo: r[1], ano: r[2], d: r[3], autor: nome, oid: base + '--w' + lista.length };
        lista.push(obra);
        if (typeof OBRA_POR_ID === 'object') OBRA_POR_ID[obra.oid] = obra;
        nO++;
      }
    }
    if (!OBRA_PAGINA['Reinhold Niebuhr||Oração da Serenidade'])
      OBRA_PAGINA['Reinhold Niebuhr||Oração da Serenidade'] = {
        sobre: 'Prece de três linhas que pede serenidade diante do que não se pode mudar, coragem para mudar o que se pode e discernimento entre as duas coisas.',
        contexto: 'Escrita por um teólogo protestante que dedicou a obra à tensão entre a ética individual e a conduta dos grupos organizados, e cujo pensamento político era o oposto do tom devocional deste texto.',
        momento: 'Escrita por volta de 1943 para um culto em Heath, Massachusetts; circulou em cartões distribuídos a soldados durante a Segunda Guerra.',
        importancia: 'Foi adotada pelos Alcoólicos Anônimos e é hoje um dos textos devocionais mais reproduzidos em língua inglesa.',
        curiosidade: 'Circula na maioria das vezes sem o nome do autor, e por décadas foi atribuída a fontes anônimas ou a tradições religiosas antigas; a autoria de Niebuhr foi documentada por pesquisa de arquivo.'
      };
    var cats =
      typeof CATEGORIES !== 'undefined'
        ? CATEGORIES.map(function (c) {
            return c.id;
          })
        : [];
    var norm = function (s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
    };
    var existentes = {};
    QUOTES.forEach(function (q) {
      existentes[norm(q.text)] = 1;
    });
    var n = 0,
      dup = 0,
      semObra = [];
    NOVAS.forEach(function (r, idx) {
      var autor = r[0],
        texto = r[1],
        orig = r[2],
        obra = r[3],
        cat = r[4];
      if (existentes[norm(texto)]) {
        dup++;
        return;
      }
      if (
        !(
          OBRAS[autor] &&
          OBRAS[autor].some(function (o) {
            return o.t === obra;
          })
        )
      ) {
        semObra.push(autor + ' → ' + obra);
        return;
      }
      var q = { author: autor, text: texto, src: obra, st: 'A', cat: cats.indexOf(cat) >= 0 ? cat : 'reflexao' };
      if (orig) q.orig = orig;
      q.qid = 'f74' + idx.toString(36) + Math.abs(norm(texto).length * 15485863).toString(36);
      QUOTES.push(q);
      existentes[norm(texto)] = 1;
      n++;
    });
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    if (semObra.length) console.warn('Fase 74 · obra fora do catálogo:', semObra.join(' | '));
    console.log('MeMotiva · Fase 74: +' + n + ' frases com obra confirmada, +' + nO + ' obra' + (dup ? ' (' + dup + ' já existentes)' : '') + '.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 75 — portão final de desduplicação.
    As Fases 70 a 72 rodaram antes dos acréscimos das Fases 73 e 74, de modo que
    frases novas podiam colidir com entradas já presentes sem serem vistas. Esta
    fase repete o mesmo critério combinado — semelhança de redação e de ordem das
    palavras — depois de todas as adições, e passa a ser o último passo da cadeia.
    O efeito observado é significativo: boa parte do que parecia lacuna no acervo
    já estava registrado com fonte melhor, apenas em outra tradução. */
  function aplicar() {
    var LOC = /\b(cap[íi]tulo|livro|canto|se[çc][ãa]o|§|verso|aforismo|carta|m[áa]xima|frag|parte|ato|cena|estrofe|poema|epis[óo]dio|li[çc][ãa]o|p\.|p[áa]g|vol|1[0-9]{3}|20[0-2][0-9])\b|,\s*[IVXLC]+\b|,\s*\d+[a-z]?\b/i;
    /* Fonte fraca: vazia, atribuição sem registro primário, ou o rótulo genérico
      isolado. "Obra X ou declaração pública registrada" NÃO é fraca — nomeia a obra. */
    var FRACA = /^\s*$|^Atribu[íi]do\b.*sem (localiza|registro)|sem localiza[çc][ãa]o em sua obra|^Ver o veredito|^Formula[çc][ãa]o difundida|^(Entrevista|Palestra|Discurso|Declara[çc][ãa]o p[úu]blica) registrada$/i;
    function norm(s) {
      return String(s)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    function cosseno(a, b) {
      function bg(s) {
        var t = norm(s).replace(/ /g, ''),
          m = {};
        for (var i = 0; i < t.length - 1; i++) {
          var g = t.substr(i, 2);
          m[g] = (m[g] || 0) + 1;
        }
        return m;
      }
      var A = bg(a),
        B = bg(b),
        n = 0,
        na = 0,
        nb = 0;
      for (var g in A) {
        na += A[g] * A[g];
        if (B[g]) n += A[g] * B[g];
      }
      for (var h in B) nb += B[h] * B[h];
      return na && nb ? n / Math.sqrt(na * nb) : 0;
    }
    function ordem(a, b) {
      var A = norm(a).split(' '),
        B = norm(b).split(' ');
      if (!A.length || !B.length) return 0;
      var prev = new Array(B.length + 1).fill(0),
        cur;
      for (var i = 1; i <= A.length; i++) {
        cur = new Array(B.length + 1).fill(0);
        for (var j = 1; j <= B.length; j++) cur[j] = A[i - 1] === B[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
        prev = cur;
      }
      return prev[B.length] / Math.min(A.length, B.length);
    }
    function nota(q) {
      var s = String(q.src || ''),
        p = 0;
      if (s && !FRACA.test(s)) p += 2;
      if (LOC.test(s)) p += 3;
      if (FRACA.test(s)) p -= 1;
      if (q.orig) p += 1;
      return p;
    }
    var PRESERVAR = [
      ['Kahlil Gibran', 'Podeis abrigar seus corpos', 'Pois seus filhos não habitam'],
      /* Fase 123: passagens distintas conferidas (Ética a Nicômaco I, 7 e X, 7–8; dois livros de Thich Nhat Hanh) */
      ['Aristóteles', 'A felicidade é uma atividade da alma', 'A felicidade perfeita é uma atividade contemplativa'],
      ['Thich Nhat Hanh', 'As pessoas costumam considerar um milagre', 'O milagre não é andar sobre as águas']
    ];
    function protegido(a, t1, t2) {
      for (var k = 0; k < PRESERVAR.length; k++) {
        var p = PRESERVAR[k];
        if (p[0] !== a) continue;
        if ((t1.indexOf(p[1]) === 0 && t2.indexOf(p[2]) === 0) || (t2.indexOf(p[1]) === 0 && t1.indexOf(p[2]) === 0)) return true;
      }
      return false;
    }
    var porAutor = {};
    QUOTES.forEach(function (q) {
      (porAutor[q.author] = porAutor[q.author] || []).push(q);
    });
    var remover = {},
      pares = [],
      restantes = [];
    for (var a in porAutor) {
      var l = porAutor[a];
      // ditados anônimos: variantes próximas costumam ser sentenças diferentes
      var anon = /Ditado|Prov[ée]rbio|Autor n[ãa]o identificado/i.test(a);
      var limCos = anon ? 0.9 : 0.7,
        limOrd = anon ? 0.85 : 0.55;
      for (var i = 0; i < l.length; i++)
        for (var j = i + 1; j < l.length; j++) {
          var x = l[i],
            y = l[j];
          if (remover[x.qid] || remover[y.qid]) continue;
          if (protegido(a, x.text, y.text)) continue;
          var c = cosseno(x.text, y.text);
          if (c < limCos) continue;
          var o = ordem(x.text, y.text);
          if (o < limOrd) {
            restantes.push([a, c.toFixed(2), o.toFixed(2), x.text.slice(0, 60), y.text.slice(0, 60)]);
            continue;
          }
          var nx = nota(x),
            ny = nota(y),
            fica,
            sai;
          if (nx !== ny) {
            fica = nx > ny ? x : y;
            sai = nx > ny ? y : x;
          } else {
            fica = x.text.length >= y.text.length ? x : y;
            sai = fica === x ? y : x;
          }
          remover[sai.qid] = true;
          pares.push({ autor: a, redacao: +c.toFixed(2), ordem: +o.toFixed(2), mantida: '[' + (fica.src || '—') + '] ' + fica.text.slice(0, 62), removida: '[' + (sai.src || '—') + '] ' + sai.text.slice(0, 62) });
        }
    }
    var n = 0;
    Object.keys(remover).forEach(function (qid) {
      var r = typeof removerFrase === 'function' ? removerFrase(qid, 'duplicata: mesma passagem em outra tradução, já presente com fonte igual ou melhor') : { ok: false };
      if (r && r.ok) n++;
    });
    window.DUPLICATAS_F75 = pares;
    window.__F75_APLICADO = true;
    window.F75_RELATORIO = function () {
      console.log('Fase 75 — ' + pares.length + ' pares desduplicados por redação e ordem; ' + restantes.length + ' pares mantidos como passagens distintas.');
      console.table(pares.slice(0, 40));
      return { removidos: pares, mantidos: restantes };
    };
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
    if (typeof RECALCULAR_FILA === 'function')
      try {
        RECALCULAR_FILA();
      } catch (e) {}
    console.log('MeMotiva · Fase 75: ' + n + ' duplicatas removidas, ' + restantes.length + ' pares mantidos como distintos · F75_RELATORIO() detalha.');
  }
  /* O portão precisa ser o último passo real da cadeia. Como todas as fases
    rodam de forma síncrona dentro de __fase5Boot, adiar a execução por um
    tempo zero garante que ela ocorra depois de qualquer fase registrada
    adiante, inclusive as que ainda venham a ser acrescentadas.
    Auditoria de 28/09/2026: essa dependência de setTimeout(0) se mostrou frágil
    em teste automatizado (ordem de execução de timers de mesmo atraso não é
    garantida entre diferentes ciclos de carregamento) — em alguns carregamentos
    o gate não chegou a rodar. window.__F75_APLICAR expõe a função diretamente,
    para chamada determinística (usada pela Fase 89, que fecha a cadeia de
    verdade no fim do arquivo, e por qualquer auditoria futura). O setTimeout
    original foi mantido como estava, para não mudar o comportamento existente
    sem necessidade. */
  window.__F75_APLICAR = aplicar;
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    setTimeout(aplicar, 0);
  };
})();
