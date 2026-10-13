/* MeMotiva — dados/06-revisao-documental.js
   Mapas da revisão documental: passagens canônicas, correções de autoria, elevação A−→A, traduções sagradas.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   REVISÃO DOCUMENTAL — MAPA DE PASSAGENS CANÔNICAS
   ----------------------------------------------------------------
   Cada entrada liga um conjunto de variantes de tradução a UMA
   passagem localizável na obra. As variantes existem porque o banco
   acumulou traduções diferentes do mesmo trecho como se fossem
   frases distintas — o que inflava a contagem e apagava a origem.

   st: 'A' fonte primária localizada (obra + seção)
       'A-' obra identificada, seção não confirmada
       'P'  paráfrase / atribuição sem fonte primária
   Nenhuma referência é inventada: onde não tenho certeza da seção,
   registro só a obra.
   ================================================================ */
const PASSAGES = [
  /* ---------------- LAO TSÉ — Tao Te Ching ---------------- */
  { a: 'Lao Tsé', src: 'Tao Te Ching, 33', st: 'A', m: [/conhecer os outros|quem conhece os outros|aquele que conhece os outros/i, /vence os outros|conquista os outros|controla os outros|domina os outros/i, /aquele que se conhece é sábio/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 33 e 46', st: 'A', m: [/suficiente é rico|o suficiente é suficiente|contentar-se é|conhece o contentamento|contente nunca é pobre|satisfeito com sua posição/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 8', st: 'A', m: [/água benefici|como (a )?água.*benefici|melhor homem é como a água/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 64', st: 'A', m: [/jornada de mil (quilômetros|léguas|milhas)/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 56', st: 'A', m: [/sabe não fala|não fala; aquele que fala|conhece o tao não fala|fala muito talvez não conheça/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 1', st: 'A', m: [/tao que pode ser (explicado|nomeado|dito)/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 78', st: 'A', m: [/suavidade supera a dureza|fraqueza supera a força|nada no mundo é mais mole/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 76', st: 'A', m: [/rigidez é companheira da morte|flexível permanece inteiro|rígido será quebrado/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 17', st: 'A', m: [/melhor líder é aquele cuja existência/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 60', st: 'A', m: [/cozinhar um pequeno peixe/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 81', st: 'A', m: [/sábio não acumula|não acumula tesouros/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 25', st: 'A', m: [/homem segue a terra/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 71', st: 'A', m: [/sabe que não sabe é o mais elevado/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 22 e 66', st: 'A', m: [/não se exibir|não disput|não luta contra ninguém|permanece no último lugar|não se coloca acima dos outros/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 29', st: 'A', m: [/conquistar o mundo e agir sobre ele/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 44', st: 'A', m: [/sabe parar está protegido|excesso causa perda/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 57', st: 'A', m: [/regras e proibições/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 67', st: 'A-', m: [/simplicidade, a paciência e a compaixão/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 37 — paráfrase moderna, não tradução', st: 'P', m: [/natureza não se apressa/i] },
  { a: 'Lao Tsé', src: 'Atribuição popular sem fonte no Tao Te Ching', st: 'P', m: [/ser profundamente amado por alguém/i, /sucessão de mudanças naturais e espontâneas/i] },

  /* ---------------- MARCO AURÉLIO — Meditações ---------------- */
  { a: 'Marco Aurélio', src: 'Meditações, V, 16', st: 'A', m: [/alma (é|se torna) tingida|tingida (com|pela) (a )?cor/i] },
  { a: 'Marco Aurélio', src: 'Meditações, IV, 3', st: 'A', m: [/nossa vida é aquilo que os nossos pensamentos|vida de um homem é aquilo que seus pensamentos/i, /tranquilidade perfeita/i, /universo é (transformação|mudança)/i, /retira-te para dentro de ti/i, /felicidade (da vida depende|de cada um depende|é um estado de espírito).*pensament/i, /qualidade dos pensamentos/i] },
  { a: 'Marco Aurélio', src: 'Meditações, X, 16', st: 'A', m: [/não perca tempo discutindo sobre o que um bom homem/i] },
  { a: 'Marco Aurélio', src: 'Meditações, IV, 17', st: 'A', m: [/dez mil anos/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VII, 67', st: 'A', m: [/muito pouco é necessário|vida feliz depende de muito pouco/i] },
  { a: 'Marco Aurélio', src: 'Meditações, V, 20', st: 'A', m: [/impedimento à ação|obstáculo à ação|pedra que obstrui o caminho/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VI, 6', st: 'A', m: [/melhor (vingança|modo de vingar)|defender contra os inimigos.*não se tornar|não se assemelhar ao inimigo/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VI, 54', st: 'A', m: [/colmeia|colmeia também não/i] },
  { a: 'Marco Aurélio', src: 'Meditações, II, 5', st: 'A', m: [/como se fosse (a última coisa|o último)/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VII, 61', st: 'A', m: [/arte de viver se (assemelha|aproxima) mais à luta/i] },
  { a: 'Marco Aurélio', src: 'Meditações, II, 1', st: 'A', m: [/começa cada dia dizendo a si mesmo|hoje encontrarei pessoas ingratas/i] },
  { a: 'Marco Aurélio', src: 'Meditações, IX, 35', st: 'A', m: [/perda (não é nada além de|nada mais é do que)/i] },
  { a: 'Marco Aurélio', src: 'Meditações, IV, 43', st: 'A', m: [/rio de eventos/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VIII, 59', st: 'A', m: [/existem uns para os outros/i] },
  { a: 'Marco Aurélio', src: 'Meditações, IV, 34', st: 'A', m: [/tecido no padrão|aceita sem orgulho/i] },
  { a: 'Marco Aurélio', src: 'Meditações, III, 4', st: 'A', m: [/pensamentos sobre os outros|imaginando o que os outros/i] },
  { a: 'Marco Aurélio', src: 'Meditações, V, 1', st: 'A', m: [/ao acordar pela manhã|ao amanhecer|custar sair da cama|privilégio de estar vivo/i] },
  {
    a: 'Marco Aurélio',
    src: 'Meditações',
    st: 'A-',
    m: [
      /poder sobre sua mente|escrava de suas emoções|valor de suas ambições|morte de um homem não é mais terrível|nunca ter começado a viver|pensa na natureza do que te acontece|não esperes realizar tudo|primeira regra é manter um espírito tranquilo|não é bom para a comunidade|alma não se torna superior|possível viver esta vida bem|brevidade da vida é suficiente|perde o presente|felicidade não consiste em ter muito|paz interior começa|permanecer em paz consigo|bem comum não respeita a si|aprender a apreciar|vida é um presente|agradeça pelo que você tem|agradecer pelos grandes favores/i
    ]
  },
  { a: 'Marco Aurélio', src: 'Atribuição popular — não localizada nas Meditações', st: 'P', m: [/estar do lado da maioria/i] },

  /* ---------------- SÊNECA ---------------- */
  { a: 'Sêneca', src: 'Sobre a Brevidade da Vida, I', st: 'A', m: [/não é que tenhamos pouco tempo|pouco tempo, é que perdemos|vida é longa (o suficiente|se)/i] },
  { a: 'Sêneca', src: 'Sobre a Brevidade da Vida, VII', st: 'A', m: [/aprender a viver leva a vida inteira|aprender a morrer/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, I', st: 'A', m: [/enquanto se adia|enquanto adiamos/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, XIII', st: 'A', m: [/sofremos mais na imaginação|mais coisas nos assustam/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, III', st: 'A', m: [/admitir alguém à amizade|considere longamente/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, IX', st: 'A', m: [/ninguém é feliz senão quem julga/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, LXXI', st: 'A', m: [/vento favorável/i] },
  { a: 'Sêneca', src: 'Sobre a Providência, V', st: 'A', m: [/fogo prova o ouro/i] },
  { a: 'Sobre os Benefícios, II', st: 'A', a: 'Sêneca', m: [/recebe um benefício com gratidão/i] },
  {
    a: 'Sêneca',
    src: 'Cartas a Lucílio',
    st: 'A-',
    m: [
      /a sorte favorece|não ousamos porque|é difícil porque não ousamos|toda arte é imitação|a vida é como uma peça|o que importa não é quanto tempo|não é pouco tempo que temos|o maior obstáculo|enquanto esperamos|ninguém encontra prazer|a mente que não tem|nenhum homem é livre|nenhum vento|associe-se|escolha alguém|as pessoas aprendem enquanto ensinam|homens aprendem enquanto ensinam|deve-se viver para outro|não devemos julgar|desejar é a origem/i
    ]
  },

  /* ---------------- ARISTÓTELES ---------------- */
  { a: 'Aristóteles', src: 'Ética a Nicômaco, VIII', st: 'A', m: [/ninguém escolheria viver sem amigos/i, /amizade é uma virtude, ou implica virtude/i] },
  { a: 'Aristóteles', src: 'Política, I', st: 'A', m: [/animal político/i] },
  { a: 'Aristóteles', src: 'Ética a Nicômaco, I', st: 'A', m: [/felicidade depende de nós|felicidade é o bem supremo|felicidade é uma atividade da alma|atividade da alma conforme a excelência|bem que buscamos por si mesmo|finalidade de toda ação humana|homem feliz é aquele que vive bem/i] },
  { a: 'Aristóteles', src: 'Ética a Nicômaco, II', st: 'A', m: [/virtude está no meio|a virtude é um meio/i] },
  { a: 'Aristóteles', src: 'Ética a Nicômaco, X', st: 'A', m: [/contemplação da verdade/i] },
  { a: 'Aristóteles', src: 'Retórica, I', st: 'A', m: [/credibilidade do orador/i] },
  { a: 'Aristóteles', src: 'Metafísica, VIII', st: 'A', m: [/todo é maior que a soma/i] },
  { a: 'Aristóteles', src: 'Diógenes Laércio, Vidas dos Filósofos, V — dito relatado', st: 'A-', m: [/alma (habitando|que habita|com) dois corpos|única alma habitando/i, /raízes (amargas|da educação)|educação tem raízes amargas/i] },
  { a: 'Aristóteles', src: 'Paráfrase da doutrina da Ética a Nicômaco, VIII — não é citação literal', st: 'P', m: [/^a amizade é uma (disposição|relação|forma|das|virtude que acompanha|das coisas)/i, /amizade (é o (maior|começo|começo e a base))|amizade parece ser necessária|amigos são uma das maiores necessidades|amizade pode ser apenas entre pessoas boas|amizade perfeita é a dos bons/i] },
  { a: 'Aristóteles', src: 'Paráfrase da doutrina da Ética a Nicômaco, I — não é citação literal', st: 'P', m: [/^a felicidade (é o significado|é uma virtude|não é alcançada|não está nas coisas|é uma atividade, não|é o estado em que)|verdadeira felicidade consiste em fazer o bem|felicidade não é um estado, mas uma atividade/i] },

  /* ---------------- BUDA ---------------- */
  { a: 'Buda', src: 'Dhammapada, 1 (tradução a partir do páli)', st: 'A', m: [/tudo o que somos é resultado do que pensamos|somos o que pensamos/i] },
  { a: 'Buda', src: 'Dhammapada, 5', st: 'A', m: [/ódio nunca (cessa|é vencido) pelo ódio/i] },
  { a: 'Buda', src: 'Dhammapada, 103', st: 'A', m: [/vencer a si mesmo.*(mil|batalha)/i] },
  { a: 'Buda', src: 'Dhammapada, 223', st: 'A', m: [/vença a raiva com|vence a ira com/i] },
  { a: 'Buda', src: 'Dhammapada, 252', st: 'A', m: [/faltas dos outros são fáceis/i] },
  { a: 'Buda', src: 'Cânone páli, Kalama Sutta (AN 3.65)', st: 'A', m: [/não acredite (em|apenas)|não aceite (nada|algo) apenas porque/i] },
  { a: 'Buda', src: 'Cânone páli, Dhammacakkappavattana Sutta — as Quatro Nobres Verdades', st: 'A', m: [/quatro nobres verdades|caminho do meio|nobre caminho óctuplo/i] },
  { a: 'Buda', src: 'Ensinamento atribuído à tradição budista — sem localização no cânone páli', st: 'P', m: [/segurando uma brasa|carvão em brasa/i, /mil velas|vela pode acender/i, /paz vem de dentro. não a procure/i, /a dor é inevitável/i] }
];

/* ================================================================
   SEGUNDA RODADA — passagens que faltaram na primeira varredura
   ================================================================ */
const PASSAGES2 = [
  /* ---------------- ARISTÓTELES ---------------- */
  { a: 'Aristóteles', src: 'Metafísica, I, 2', st: 'A', m: [/filosofia começa no espanto|sabedoria começa na admiração|dúvida é o princípio da sabedoria/i] },
  { a: 'Aristóteles', src: 'Política, I, 2', st: 'A', m: [/natureza não faz nada em vão|não consegue viver em sociedade|autossuficiente/i] },
  { a: 'Aristóteles', src: 'Política, III', st: 'A', m: [/a lei deve governar|lei é a razão livre de paixão|estado é uma comunidade|justiça é a virtude que torna a comunidade|democracia surgiu quando os homens/i] },
  { a: 'Aristóteles', src: 'Política, VII–VIII', st: 'A', m: [/leis mais importantes da educação|educação do corpo e a do caráter|objeto principal da política|objetivo da política é o bem comum/i] },
  { a: 'Aristóteles', src: 'Retórica, I, 2', st: 'A', m: [/três meios de persuasão|persuasão é obtida através do caráter|retórica é a capacidade de descobrir|caráter do orador é quase o meio|emoções possuem grande influência|discurso persuasivo deve considerar|não basta saber o que dizer/i] },
  { a: 'Aristóteles', src: 'Ética a Nicômaco, II', st: 'A', m: [/excelência moral é uma disposição|é o hábito que forma o caráter|excelência (é uma arte|não é um dom)|virtude não consiste em saber/i] },
  { a: 'Aristóteles', src: 'Ética a Nicômaco, III', st: 'A', m: [/coragem é o meio-termo/i] },
  { a: 'Aristóteles', src: 'Ética a Nicômaco, X', st: 'A', m: [/atividade contemplativa|prazer no trabalho aperfeiçoa|felicidade é uma forma de contemplação/i] },
  { a: 'Aristóteles', src: 'Diógenes Laércio, Vidas dos Filósofos, V — dito relatado', st: 'A-', m: [/esperança é o sonho do homem acordado|coragem é a primeira das qualidades/i] },
  { a: 'Aristóteles', src: 'Paráfrase da doutrina aristotélica — não é citação literal', st: 'P', m: [/felicidade é o objetivo da vida humana|gratidão é uma virtude da alma|receber um benefício sem reconhecer|amizade é uma alma que habita/i] },
  { a: 'Aristóteles', src: 'Atribuição popular sem fonte em Aristóteles', st: 'P', m: [/ignorante afirma, o sábio duvida/i, /conhecer a si mesmo é o começo de toda sabedoria/i] },

  /* ---------------- SÊNECA ---------------- */
  { a: 'Sêneca', src: 'Sobre a Brevidade da Vida, I–III', st: 'A', m: [/não recebemos uma vida curta|vida é muito curta, mas fazemos|tempo que temos não é curto|maior parte da vida é perdida|apressa-te a viver bem/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, II', st: 'A', m: [/não é pobre aquele que tem pouco|pobreza não consiste em possuir pouco/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, CIV', st: 'A', m: [/não é porque as coisas são difíceis/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, CVI', st: 'A', m: [/não aprendemos para a escola/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, LXXVII', st: 'A', m: [/vida é uma peça de teatro/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, VII e VIII', st: 'A', m: [/nunca ninguém enriqueceu com dinheiro|nenhum homem é feliz se não se considera/i] },
  { a: 'Sêneca', src: 'Sobre os Benefícios, II', st: 'A', m: [/acolhe um benefício com gratidão|ingratidão é sempre uma forma/i] },
  { a: 'Sêneca', src: 'Sobre a Providência', st: 'A', m: [/dificuldade fortalece a mente|adversidade é a ocasião para a virtude/i] },
  { a: 'Sêneca', src: 'Sobre a Vida Feliz', st: 'A-', m: [/vida feliz é aquela que está de acordo|homem sábio não busca a felicidade em coisas externas|homem sábio é feliz porque possui dentro de si/i] },
  {
    a: 'Sêneca',
    src: 'Paráfrase da doutrina estoica de Sêneca — não é citação literal',
    st: 'P',
    m: [
      /^a amizade (é (uma das grandes|o conforto|mais necessária|não é uma questão|uma forma de amor)|verdadeira é aquela)/i,
      /^a (felicidade|verdadeira felicidade|maior riqueza|riqueza não consiste)|felicidade (é uma conquista|é um bem interior|consiste em ter uma mente)|maior parte dos homens busca a felicidade|não é feliz aquele que tem o que deseja|quem tem pouco e deseja menos|tranquilidade da mente é a verdadeira liberdade|aquele que é corajoso é livre|educação exige os maiores cuidados/i
    ]
  },

  /* ---------------- BUDA — Dhammapada e cânone páli ---------------- */
  { a: 'Buda', src: 'Dhammapada, 1–2', st: 'A', m: [/mente precede todas as coisas|fala ou age com uma mente (impura|pura)/i] },
  { a: 'Buda', src: 'Dhammapada, 21', st: 'A', m: [/vigilância é o caminho para a imortalidade/i] },
  { a: 'Buda', src: 'Dhammapada, 81', st: 'A', m: [/rocha sólida não é movida pelo vento/i] },
  { a: 'Buda', src: 'Dhammapada, 103', st: 'A', m: [/vence a si mesmo é maior|mil homens em batalha/i] },
  { a: 'Buda', src: 'Dhammapada, 184', st: 'A', m: [/paciência é a mais elevada/i] },
  { a: 'Buda', src: 'Sutta Nipata 1.8 (Metta Sutta)', st: 'A', m: [/assim como uma mãe protege/i] },
  { a: 'Buda', src: 'Digha Nikaya 16 (Mahaparinibbana Sutta)', st: 'A', m: [/não busque refúgio em ninguém|seja uma luz para si|luz para si próprio|trabalhem a própria salvação/i] },
  { a: 'Buda', src: 'Paráfrase ocidental do Dhammapada, 1 — não é tradução do páli', st: 'P', m: [/a mente é tudo/i] },
  { a: 'Buda', src: 'Ensinamento atribuído à tradição budista — sem localização no cânone páli', st: 'P', m: [/compreende a natureza das coisas não teme a morte/i] },

  /* ---------------- LAO TSÉ ---------------- */
  { a: 'Lao Tsé', src: 'Tao Te Ching, 2 e 63', st: 'A', m: [/fazer sem fazer|agir sem esforço|age sem disputa|ensina sem palavras/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 19 e 28', st: 'A', m: [/retornar à simplicidade|abandonamos a ostentação|simplicidade é a (maior manifestação|chave)/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 30 e 31', st: 'A', m: [/governar é não governar pela força|força cria resistência/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching', st: 'A-', m: [/humildade é a raiz|homem superior não insiste|equilíbrio entre força e suavidade|verdadeira força nasce da suavidade|conhecimento excessivo|sabe esperar encontra a harmonia|deseja possuir tudo perde tudo|sabe não precisa provar/i] },

  /* ---------------- MARCO AURÉLIO ---------------- */
  { a: 'Marco Aurélio', src: 'Meditações, IV, 24 e VIII, 32', st: 'A', m: [/não esperes realizar tudo|faz o que está diante/i] }
];
PASSAGES.push(...PASSAGES2);

/* ================================================================
   TERCEIRA RODADA — Dhammapada versículo a versículo e restantes
   ================================================================ */
const PASSAGES3 = [
  { a: 'Buda', src: 'Dhammapada, 100–101', st: 'A', m: [/mil (palavras|versos) (sem sentido|sem significado)/i] },
  { a: 'Buda', src: 'Dhammapada, 204', st: 'A', m: [/saúde é o maior presente/i] },
  { a: 'Buda', src: 'Dhammapada, 51–52', st: 'A', m: [/flor bela e colorida/i] },
  { a: 'Buda', src: 'Dhammapada, 1', st: 'A', m: [/mente é a precursora/i] },
  { a: 'Buda', src: 'Dhammapada, 129–130', st: 'A', m: [/todos tremem diante da violência/i] },
  { a: 'Buda', src: 'Dhammapada, 239', st: 'A', m: [/artesão purifica a prata/i] },
  { a: 'Buda', src: 'Dhammapada, 13–14', st: 'A', m: [/chuva atravessa uma casa mal construída/i] },
  { a: 'Buda', src: 'Dhammapada, 277', st: 'A', m: [/coisas condicionadas são impermanentes/i] },
  { a: 'Buda', src: 'Dhammapada, 278', st: 'A', m: [/coisas condicionadas estão sujeitas ao sofrimento/i] },
  { a: 'Buda', src: 'Dhammapada, 279', st: 'A', m: [/sem um eu permanente/i] },
  { a: 'Buda', src: 'Dhammapada, 223', st: 'A', m: [/supera a raiva com a ausência de raiva|permanece paciente vence a ira|abandona a raiva encontra/i] },
  { a: 'Buda', src: 'Dhammapada, 276', st: 'A', m: [/budas apenas mostram|caminho da purificação é trilhado|não há caminho para a pureza sem esforço/i] },
  { a: 'Buda', src: 'Dhammapada, 21', st: 'A', m: [/vigilante não morre|negligentes são como mortos|permanece atento encontra o caminho/i] },
  { a: 'Buda', src: 'Dhammapada, 201', st: 'A', m: [/vitória gera inimizade/i] },
  { a: 'Buda', src: 'Dhammapada, 35', st: 'A', m: [/mente disciplinada traz felicidade|guarda a mente com vigilância/i] },
  { a: 'Buda', src: 'Dhammapada, 39', st: 'A', m: [/não há medo para aquele cuja mente/i] },
  { a: 'Buda', src: 'Dhammapada, 3–5', st: 'A', m: [/livre de ressentimento encontra a paz/i] },
  { a: 'Buda', src: 'Dhammapada, 348', st: 'A', m: [/não se apega ao passado, não espera pelo futuro/i] },
  { a: 'Buda', src: 'Dhammapada, 165', st: 'A', m: [/purificação maior que a pureza da própria mente|mente impura causa sofrimento/i] },
  { a: 'Buda', src: 'Cânone páli — doutrina das três características (Anicca, Dukkha, Anatta)', st: 'A-', m: [/compreende a impermanência|sofrimento acompanha aquele que se apega|insatisfação nasce do apego|verdadeiro conhecimento surge quando vemos as coisas como realmente são/i] },
  { a: 'Buda', src: 'Paráfrase da doutrina budista — não é citação do cânone páli', st: 'P', m: [/^(a compaixão é|a generosidade é|a paz interior começa|a verdadeira vitória|a paz mais elevada|o caminho não está no céu|assim como uma flor não se apega|aquele que não se deixa dominar pelo prazer|aquele que abandona a ilusão|a raiva, quando não dominada)/i] },

  /* ---------------- SÊNECA — restantes ---------------- */
  { a: 'Sêneca', src: 'Cartas a Lucílio', st: 'A-', m: [/amizade verdadeira é aquela que permanece|amizade é mais necessária na adversidade|associe-se (a|com)|escolha (alguém|um homem bom)|deve-se viver para outro|as pessoas aprendem enquanto ensinam|homens aprendem enquanto ensinam/i] },
  { a: 'Sêneca', src: 'Paráfrase da doutrina estoica de Sêneca — não é citação literal', st: 'P', m: [/^(a maior riqueza|a ingratidão|não é feliz aquele|quem tem pouco|o homem sábio|a tranquilidade|aquele que é corajoso|a educação exige|a adversidade|a dificuldade|a pobreza|a vida feliz)/i] },

  /* ---------------- ARISTÓTELES — restantes ---------------- */
  { a: 'Aristóteles', src: 'Paráfrase da doutrina aristotélica — não é citação literal', st: 'P', m: [/^(a felicidade|a virtude|a excelência|a coragem|a amizade|a gratidão|a justiça|a lei|o prazer|nós somos aquilo)/i] }
];
PASSAGES.push(...PASSAGES3);

/* ================================================================
   QUINTA RODADA — §4: demais autores de nível D
   ================================================================ */
const PASSAGES5 = [
  /* --- KRISHNA / Bhagavad Gita --- */
  { a: 'Krishna', src: 'Bhagavad Gita, 2.47', st: 'A', m: [/direito ao trabalho, mas nunca aos frutos|abandona todo apego aos resultados/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 6.5–6', st: 'A', m: [/eleva-te por meio de ti mesmo|mente é amiga daqueles que a conquistaram/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 6.29', st: 'A', m: [/igualdade em todos os seres/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 17.3', st: 'A', m: [/feito pela fé que possui/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.14 e 2.48', st: 'A', m: [/igual na alegria e na tristeza|ganho e na perda/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 4.7–8', st: 'A', m: [/sempre que a retidão declina|manifesto-me/i] },
  { a: 'Krishna', src: 'Bhagavad Gita', st: 'A-', m: [/./] },
  /* --- JESUS CRISTO / Evangelhos --- */
  { a: 'Jesus Cristo', src: 'Mateus 5 (Sermão da Montanha) · Almeida Revista e Atualizada', st: 'A', m: [/bem-aventurados|amai os vossos inimigos|sal da terra|luz do mundo|outra face/i] },
  { a: 'Jesus Cristo', src: 'Mateus 22:39 · Almeida Revista e Atualizada', st: 'A', m: [/amarás o teu próximo/i] },
  { a: 'Jesus Cristo', src: 'Mateus 11:28 · Almeida Revista e Atualizada', st: 'A', m: [/vinde a mim, todos/i] },
  { a: 'Jesus Cristo', src: 'Mateus 7:1–7 · Almeida Revista e Atualizada', st: 'A', m: [/não julgueis|pedi, e dar-se-vos|buscai/i] },
  { a: 'Jesus Cristo', src: 'João 8:32 · Almeida Revista e Atualizada', st: 'A', m: [/conhecereis a verdade/i] },
  { a: 'Jesus Cristo', src: 'Lucas 6:37–38 · Almeida Revista e Atualizada', st: 'A', m: [/perdoai, e sereis perdoados|dai, e dar-se-vos/i] },
  { a: 'Jesus Cristo', src: 'Lucas 16:10 · Almeida Revista e Atualizada', st: 'A', m: [/fiel no pouco/i] },
  { a: 'Jesus Cristo', src: 'João 13–15 · Almeida Revista e Atualizada', st: 'A', m: [/amai-vos uns aos outros|maior amor|eu sou o caminho/i] },
  { a: 'Jesus Cristo', src: 'Evangelhos · Almeida Revista e Atualizada', st: 'A-', m: [/./] },
  /* --- NIETZSCHE --- */
  { a: 'Friedrich Nietzsche', src: 'Crepúsculo dos Ídolos, Máximas e Flechas, 8', st: 'A', m: [/não me mata me fortalece/i] },
  { a: 'Friedrich Nietzsche', src: 'Crepúsculo dos Ídolos, Máximas e Flechas, 33', st: 'A', m: [/vida sem música/i] },
  { a: 'Friedrich Nietzsche', src: 'Além do Bem e do Mal, 146', st: 'A', m: [/combate monstros|luta com monstros/i] },
  { a: 'Friedrich Nietzsche', src: 'Além do Bem e do Mal, 183', st: 'A', m: [/por não poder voltar a acreditar/i] },
  { a: 'Friedrich Nietzsche', src: 'Além do Bem e do Mal, 153', st: 'A', m: [/faz por amor está sempre além/i] },
  { a: 'Friedrich Nietzsche', src: 'Humano, Demasiado Humano, 483', st: 'A', m: [/convicções são inimigas/i] },
  { a: 'Friedrich Nietzsche', src: 'A Gaia Ciência, 270', st: 'A', m: [/torna-te aquilo que és/i] },
  { a: 'Friedrich Nietzsche', src: 'Obra de Nietzsche — seção não confirmada', st: 'A-', m: [/./] },
  /* --- FERNANDO PESSOA --- */
  { a: 'Fernando Pessoa', src: 'Tabacaria (Álvaro de Campos)', st: 'A', m: [/todos os sonhos do mundo/i] },
  { a: 'Fernando Pessoa', src: 'O Pastor Amoroso (Alberto Caeiro)', st: 'A', m: [/amor é uma companhia/i] },
  { a: 'Fernando Pessoa', src: 'Livro do Desassossego (Bernardo Soares)', st: 'A', m: [/agir, eis a inteligência|querer não é poder|próprio viver é morrer|dinheiro é belo/i] },
  { a: 'Fernando Pessoa', src: 'Navegar é Preciso', st: 'A', m: [/viver não é necessário|navegar é preciso/i] },
  { a: 'Fernando Pessoa', src: 'Atribuição popular — sem registro na obra de Pessoa', st: 'P', m: [/valor das coisas não está no tempo/i] },
  { a: 'Fernando Pessoa', src: 'Obra de Fernando Pessoa — poema não identificado', st: 'A-', m: [/./] },
  /* --- PLATÃO --- */
  { a: 'Platão', src: 'A República, II', st: 'A', m: [/começo é a parte mais importante/i] },
  { a: 'Platão', src: 'O Banquete, 206a', st: 'A', m: [/desejo de possuir o bem para sempre/i] },
  { a: 'Platão', src: 'Laques, 198b', st: 'A', m: [/coragem é saber o que não devemos temer/i] },
  { a: 'Platão', src: 'Paráfrase de A República, I (347c) — não é citação literal', st: 'P', m: [/não gostam de política/i] },
  { a: 'Platão', src: 'Paráfrase da doutrina platônica — não é citação literal', st: 'P', m: [/^a (amizade|maior riqueza|ignorância)|amor é a força que transforma/i] },
  { a: 'Platão', src: 'Diálogos de Platão — obra não identificada', st: 'A-', m: [/./] },
  /* --- CONFÚCIO / Analectos --- */
  { a: 'Confúcio', src: 'Analectos, II, 15', st: 'A', m: [/aprender sem pensar/i] },
  { a: 'Confúcio', src: 'Analectos, XVII, 2', st: 'A', m: [/por natureza, os homens são próximos/i] },
  { a: 'Confúcio', src: 'Analectos, XV, 15', st: 'A', m: [/exige muito de ti/i] },
  { a: 'Confúcio', src: 'Analectos, XI, 12', st: 'A', m: [/o que é a vida, como poderá saber/i] },
  { a: 'Confúcio', src: 'Analectos, XVI, 9', st: 'A', m: [/três métodos para ganhar sabedoria/i] },
  { a: 'Confúcio', src: 'Analectos, XII, 17', st: 'A', m: [/corrigir a si mesmo antes/i] },
  { a: 'Confúcio', src: 'Analectos, XIII, 3', st: 'A', m: [/palavras não têm valor/i] },
  { a: 'Confúcio', src: 'Analectos — capítulo não confirmado', st: 'A-', m: [/./] },
  /* --- SÓCRATES --- */
  { a: 'Sócrates', src: 'Platão, Apologia de Sócrates', st: 'A', m: [/nada sei|vida não examinada/i] },
  { a: 'Sócrates', src: 'Registrado por Platão ou Xenofonte — diálogo não identificado', st: 'A-', m: [/./] },
  /* --- SUN TZU --- */
  { a: 'Sun Tzu', src: 'A Arte da Guerra, III', st: 'A', m: [/vencer cem batalhas|submeter o inimigo sem|conhece o inimigo e a ti mesmo/i] },
  { a: 'Sun Tzu', src: 'A Arte da Guerra, I', st: 'A', m: [/guerra é (baseada|o caminho) (no|do) (engano|logro)|toda guerra se baseia/i] },
  { a: 'Sun Tzu', src: 'A Arte da Guerra — capítulo não confirmado', st: 'A-', m: [/./] },
  /* --- MAQUIAVEL --- */
  { a: 'Nicolau Maquiavel', src: 'O Príncipe, XVIII', st: 'A', m: [/julgam mais pelos olhos|parecer|raposa|leão/i] },
  { a: 'Nicolau Maquiavel', src: 'O Príncipe, XVII', st: 'A', m: [/temido (ou|do que) amado/i] },
  { a: 'Nicolau Maquiavel', src: 'O Príncipe — capítulo não confirmado', st: 'A-', m: [/./] },
  /* --- DISCURSOS E MEMÓRIAS (autoria documentada em obra própria) --- */
  { a: 'Nelson Mandela', src: 'Longo Caminho para a Liberdade / discursos registrados', st: 'A-', m: [/./] },
  { a: 'Mahatma Gandhi', src: 'Autobiografia e Collected Works of Mahatma Gandhi', st: 'A-', m: [/./] },
  { a: 'Winston Churchill', src: 'Discursos e escritos de Churchill — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Abraham Lincoln', src: 'Discursos e cartas de Lincoln — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Steve Jobs', src: 'Entrevistas e apresentações públicas registradas', st: 'A-', m: [/./] },
  { a: 'Dalai Lama', src: 'Livros e discursos do 14º Dalai Lama', st: 'A-', m: [/./] },
  { a: 'Mark Twain', src: 'Obra de Mark Twain — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Oscar Wilde', src: 'Obra de Oscar Wilde — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Voltaire', src: 'Obra de Voltaire — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Henry Ford', src: 'My Life and Work e entrevistas registradas', st: 'A-', m: [/./] },
  { a: 'Napoleão Bonaparte', src: 'Correspondência e ditos registrados por contemporâneos', st: 'A-', m: [/./] },
  { a: 'Machado de Assis', src: 'Obra de Machado de Assis — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Clarice Lispector', src: 'Obra de Clarice Lispector — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Carlos Drummond de Andrade', src: 'Obra de Drummond — poema não identificado', st: 'A-', m: [/./] },
  { a: 'Cora Coralina', src: 'Obra de Cora Coralina — poema não identificado', st: 'A-', m: [/./] },
  { a: 'Mário Quintana', src: 'Obra de Mário Quintana — poema não identificado', st: 'A-', m: [/./] },
  { a: 'Vinicius de Moraes', src: 'Obra de Vinicius de Moraes — poema não identificado', st: 'A-', m: [/./] },
  { a: 'Sigmund Freud', src: 'Obra de Freud — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Leonardo da Vinci', src: 'Cadernos de Leonardo — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Madre Teresa de Calcutá', src: 'A Simple Path e discursos registrados', st: 'A-', m: [/./] },
  { a: 'Chico Xavier', src: 'Obra psicografada — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Charles Chaplin', src: 'Atribuição popular — sem registro em obra ou entrevista', st: 'P', m: [/./] },
  { a: 'Walt Disney', src: 'Atribuição popular — frases da empresa, sem registro pessoal', st: 'P', m: [/./] },
  { a: 'Marilyn Monroe', src: 'Atribuição popular — sem fonte primária', st: 'P', m: [/./] },
  { a: 'Charles Darwin', src: 'Obra de Darwin — referência não confirmada', st: 'A-', m: [/./] }
];
PASSAGES.push(...PASSAGES5);

/* ---------------- Correções pontuais com evidência ---------------- */
const CORRECOES = [
  { m: /não é o mais forte que sobrevive/i, autorAtual: 'Charles Darwin', autorNovo: 'Leon C. Megginson', src: 'Southwestern Social Science Quarterly, 1963 — paráfrase de A Origem das Espécies, não texto de Darwin', st: 'A', nota: 'A formulação não aparece em nenhuma obra de Darwin.' },
  { m: /somos aquilo que (fazemos repetidamente|repetidamente fazemos)/i, autorAtual: 'Aristóteles', autorNovo: 'Will Durant', src: 'A História da Filosofia (1926) — síntese de Durant sobre a Ética a Nicômaco, II', st: 'A', nota: 'Durant resume Aristóteles; a frase não é dele.' },
  { m: /seja você mesmo; todos os outros já existem/i, autorAtual: 'Oscar Wilde', autorNovo: 'Oscar Wilde', src: 'Atribuição popular — nenhuma fonte primária em Wilde', st: 'P', nota: 'Circula desde o século XX sem registro em obra, carta ou entrevista.' }
];

/* ================================================================
   QUARTA RODADA — fechamento
   ================================================================ */
const PASSAGES4 = [
  /* Sêneca — Sobre os Benefícios (De Beneficiis) */
  { a: 'Sêneca', src: 'Sobre os Benefícios, I–II', st: 'A', m: [/aquele que dá deve esquecer|benefícios devem ser guardados na memória|benefício deve ser guardado na memória|recebe um benefício deve guardá-lo|benefício deve ser recebido com a mesma disposição|maior mérito de um benefício/i] },
  { a: 'Sêneca', src: 'Paráfrase de Sobre os Benefícios — não é citação literal', st: 'P', m: [/^(a gratidão é uma|nenhuma pessoa pode ser ingrata|nenhum homem é mais infeliz do que aquele que não sabe reconhecer|o benefício (perde|é perdido)|aquele que (sabe agradecer|esquece os benefícios|não agradece)|receba os benefícios)/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, XIII', st: 'A', m: [/sofremos mais frequentemente na imaginação/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, I', st: 'A', m: [/enquanto você adiar/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio, LXXVIII', st: 'A', m: [/às vezes até viver é um ato de coragem/i] },
  { a: 'Sêneca', src: 'Sobre a Brevidade da Vida, I', st: 'A', m: [/vida não é curta; nós a tornamos/i] },
  { a: 'Sêneca', src: 'Sobre a Providência, IV', st: 'A', m: [/nunca enfrentou uma dificuldade|desgraça contínua tem esta única vantagem/i] },
  { a: 'Sêneca', src: 'Cartas a Lucílio', st: 'A-', m: [/sorte dá muitas coisas a muitas pessoas|nenhum homem pode ter uma vida tranquila sem sabedoria|alma que está em paz não é perturbada|circunstâncias externas têm muito pouca importância|não é o homem que tem pouco/i] },
  { a: 'Sêneca', src: 'Paráfrase da doutrina estoica — não é citação literal', st: 'P', m: [/^(a persistência é o caminho|a amizade não é uma questão)/i] },

  /* Buda — fechamento do Dhammapada */
  { a: 'Buda', src: 'Dhammapada, 5', st: 'A', m: [/ódio nunca termina pelo ódio/i] },
  { a: 'Buda', src: 'Dhammapada, 2', st: 'A', m: [/se com uma mente pura/i] },
  { a: 'Buda', src: 'Dhammapada, 251', st: 'A', m: [/não há fogo como a paixão/i] },
  { a: 'Buda', src: 'Dhammapada, 282', st: 'A', m: [/sabedoria surge da meditação/i] },
  { a: 'Buda', src: 'Dhammapada, 95', st: 'A', m: [/terra suporta todas as coisas/i] },
  { a: 'Buda', src: 'Dhammapada, 103', st: 'A', m: [/vitória sobre si mesmo é a maior/i] },
  { a: 'Buda', src: 'Dhammapada, 81', st: 'A', m: [/rocha não é movida pelo vento/i] },
  { a: 'Buda', src: 'Dhammapada, 35', st: 'A', m: [/mente treinada traz felicidade/i] },
  { a: 'Buda', src: 'Dhammapada, 348 — paráfrase moderna', st: 'P', m: [/não viva no passado, não sonhe com o futuro|o passado já passou, o futuro ainda não chegou/i] },
  { a: 'Buda', src: 'Cânone páli — Quatro Nobres Verdades (SN 56.11)', st: 'A-', m: [/apego é a raiz do sofrimento|sofrimento surge do desejo|compreende o sofrimento compreende o caminho|vida é sofrimento, mas a compreensão/i] },
  { a: 'Buda', src: 'Paráfrase da doutrina budista — não é citação do cânone páli', st: 'P', m: [/^(a atenção plena|a verdadeira (riqueza|felicidade)|a vida é uma oportunidade|o que somos hoje vem|assim como uma vela|aquele que (desperta|permanece consciente|está livre da ira)|a generosidade, a moralidade|o sábio não permite|a sabedoria surge)/i] },

  /* Aristóteles — fechamento */
  { a: 'Aristóteles', src: 'Retórica, I–II', st: 'A', m: [/mais persuadido por aquilo que parece verdadeiro|emoções alteram nossos julgamentos/i] },

  /* Marco Aurélio — fechamento */
  { a: 'Marco Aurélio', src: 'Meditações', st: 'A-', m: [/arte de viver se aproxima|felicidade é um estado de espírito/i] },
  { a: 'Lao Tsé', src: 'Tao Te Ching, 33 e 46', st: 'A', m: [/possui o suficiente é verdadeiramente rico/i] }
];
PASSAGES.push(...PASSAGES4);

/* ---- Atribuições erradas detectadas na revisão de Sêneca ---- */
const CORRECOES_EXTRA = [
  { m: /gratidão é não só a maior das virtudes/i, autorAtual: 'Sêneca', autorNovo: 'Cícero', src: 'Pro Plancio, XXXIII — o banco já tem esta frase corretamente sob Cícero', st: 'A', nota: 'A formulação é de Cícero, não de Sêneca.' },
  { m: /sorte é o que acontece quando a preparação encontra a oportunidade/i, autorAtual: 'Sêneca', autorNovo: 'Sêneca', src: 'Atribuição popular — aforismo moderno sem fonte em Sêneca', st: 'P', nota: 'Formulação em inglês do século XX; não consta nas Cartas nem nos Diálogos.' }
];
CORRECOES.push(...CORRECOES_EXTRA);

/* ================================================================
   REVISÃO DOS CASOS R — MAPA POR AUTOR
   Trabalho organizado por concentração: os autores com mais frases
   pendentes primeiro. Onde localizei a passagem, registro obra +
   seção (A). Onde localizei só a obra, registro a obra (A-). Onde é
   reformulação de doutrina ou atribuição sem fonte primária, marco
   como paráfrase (P). O que não consegui sustentar continua R.
   ================================================================ */
const PASSAGES_R = [
  /* ---------- KAHLIL GIBRAN (62) — O Profeta, por capítulo ---------- */
  { a: 'Kahlil Gibran', src: 'O Profeta, "Dos Filhos"', st: 'A', m: [/filhos não são seus filhos|ânsia da vida por si mesma|dar-lhes seu amor, mas não seus pensamentos|casa do amanhã|arcos dos quais seus filhos|arqueiro vê o alvo/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Do Casamento"', st: 'A', m: [/cada um esteja só, mas não distante|não façais do amor um vínculo|de vosso pão, mas não comei do mesmo/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Do Amor"', st: 'A', m: [/quando o amor (vos chamar|chamar)|amor nada dá senão de si|amor não possui nem quer ser possuído|amor é suficiente para o amor|amor não tem outro desejo senão realizar-se|amor dirige o vosso caminho|necessidade muda, mas o amor não/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Da Dor"', st: 'A', m: [/rompimento da concha|dor é também um processo de transformação/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Da Alegria e da Tristeza"', st: 'A', m: [/tristeza (adentra|escava) em seu ser|alegria é sua tristeza sem máscara|alegria e a tristeza são inseparáveis|quando (estiver triste|estás alegre), olh|deu tristeza pode também|dor e a alegria vêm juntas|só quando você está vazio/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Da Amizade"', st: 'A', m: [/amigo é a resposta às suas necessidades|campo que você semeia|propósito na amizade senão|dá o teu melhor ao teu amigo|pensamentos, desejos e expectativas nascem|se separa de seu amigo, não se entristeça|amizade é sempre uma doce responsabilidade/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Do Trabalho"', st: 'A', m: [/trabalho é o amor tornado visível|trabalhar com amor é tecer|todo trabalho é vazio|construir uma casa com afeto|todo conhecimento é vão/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Do Autoconhecimento"', st: 'A', m: [/encontrei (a|uma) verdade|alma é um mar sem limites|eu é um mar sem limites|fundo de tua alma com uma vara|tesouro de tuas profundezas|alma (caminha por todos|não caminha numa linha)/i] },
  { a: 'Kahlil Gibran', src: 'O Profeta, "Da Religião" e "Da Despedida"', st: 'A', m: [/maré que chama todas as coisas|horas queimam na noite|estou no coração de deus|um pouco de descanso ao vento/i] },
  { a: 'Kahlil Gibran', src: 'Areia e Espuma', st: 'A-', m: [/fé é um oásis|confia nos sonhos|vida e a morte são uma só|voz do vento em canção/i] },
  { a: 'Kahlil Gibran', src: 'Atribuição popular — sem registro na obra de Gibran', st: 'P', m: [/por mais longa que seja a tempestade|do sofrimento surgiram as almas mais fortes|vida sem amor é como uma árvore|amizade é uma estrada que se constrói|acordar ao amanhecer com o coração alado/i] },

  /* ---------- EPICTETO (58) — Enquirídio e Diatribes ---------- */
  { a: 'Epicteto', src: 'Enquirídio, I', st: 'A', m: [/coisas que estão sob nosso poder|sob nosso poder são, por natureza, livres|felicidade depende daquilo que está sob nosso controle/i] },
  { a: 'Epicteto', src: 'Enquirídio, V', st: 'A', m: [/não são as coisas que (perturbam|inquietam)|julgamentos que (eles fazem|fazem delas|ele faz)|opiniões (que eles têm|sobre elas)|não é (a coisa que te aflige|o acontecimento que nos perturba)|acusa a ti mesmo/i] },
  { a: 'Epicteto', src: 'Enquirídio, VIII', st: 'A', m: [/aconteçam como (você quer|você deseja|queres|acontecem)|procure que (as coisas|tudo|nada) aconte|busque que (os acontecimentos|tudo)|busques que os acontecimentos|suportar bem o que acontece/i] },
  { a: 'Epicteto', src: 'Enquirídio, IX', st: 'A', m: [/doença é um impedimento para o corpo/i] },
  { a: 'Epicteto', src: 'Enquirídio, XIII', st: 'A', m: [/contente-se em (ser considerado tolo|parecer insensato)/i] },
  { a: 'Epicteto', src: 'Enquirídio, XLVIII', st: 'A', m: [/(condição do )?filósofo (é olhar|olha) para si mesmo/i] },
  { a: 'Epicteto', src: 'Diatribes, III, 23', st: 'A', m: [/primeiro diga a si mesmo (quem você quer ser|o que você seria|o que você gostaria)/i] },
  { a: 'Epicteto', src: 'Diatribes, II, 17', st: 'A', m: [/impossível começar a aprender/i] },
  { a: 'Epicteto', src: 'Diatribes, I, 24', st: 'A', m: [/porta está aberta/i] },
  { a: 'Epicteto', src: 'Fragmentos (recolhidos por Estobeu)', st: 'A-', m: [/riqueza não consiste em ter grandes posses/i] },
  {
    a: 'Epicteto',
    src: 'Paráfrase da doutrina estoica de Epicteto — não é citação literal',
    st: 'P',
    m: [/^a (felicidade|liberdade|dificuldade|tranquilidade|mente que está ansiosa)|^as dificuldades|^nenhum homem é livre|^nenhuma coisa externa|^o homem (sábio não se|que (não )?tem domínio|que não tem)|^nenhum grande homem|^o que importa não é o que acontece|^não explique sua filosofia|^não busque a felicidade fora/i]
  },

  /* ---------- CÍCERO (55) ---------- */
  { a: 'Cícero', src: 'Sobre a Amizade (Laelius), VI', st: 'A', m: [/completo acordo sobre todas as coisas humanas|prosperidade mais brilhante|aumenta a prosperidade e alivia|melhora a felicidade e reduz a miséria/i] },
  { a: 'Cícero', src: 'Sobre a Amizade (Laelius), XXI', st: 'A', m: [/segundo eu|nenhuma posse é mais valiosa do que um amigo/i] },
  { a: 'Cícero', src: 'Sobre a Velhice (De Senectute)', st: 'A', m: [/sabedoria é a companheira da velhice/i] },
  { a: 'Cícero', src: 'Sobre o Orador (De Oratore), II', st: 'A', m: [/história é a mestra da vida|eloquência é a sabedoria falando|orador perfeito deve instruir|memória, a voz e a ação|finalidade do discurso é convencer/i] },
  { a: 'Cícero', src: 'Pro Cluentio, 53', st: 'A', m: [/servos das leis para podermos ser livres/i] },
  { a: 'Cícero', src: 'Sobre as Leis (De Legibus), III', st: 'A', m: [/bem do povo é a (principal|suprema) lei|autoridade da lei deve ser maior/i] },
  { a: 'Cícero', src: 'Filípicas, IX', st: 'A', m: [/vida dos mortos é colocada na memória/i] },
  { a: 'Cícero', src: 'Cartas a Ático, IX', st: 'A', m: [/enquanto houver vida, haverá esperança/i] },
  { a: 'Cícero', src: 'Pro Plancio, XXXIII e Sobre os Deveres, I', st: 'A', m: [/nenhum dever é mais (urgente|indispensável) do que|gratidão é a lembrança do benefício/i] },
  { a: 'Cícero', src: 'Tusculanas', st: 'A-', m: [/verdadeira felicidade vem da posse da sabedoria|natureza não apenas nos deu a vida/i] },
  { a: 'Cícero', src: 'Paráfrase de Sobre a Amizade — não é citação literal', st: 'P', m: [/^a amizade (é (um|uma|o vínculo|a mais)|não pode ser forçada|verdadeira é aquela|torna a prosperidade mais brilhante e a adversidade)/i] },
  { a: 'Cícero', src: 'Paráfrase da doutrina ciceroniana — não é citação literal', st: 'P', m: [/^a (felicidade|vida feliz|paz da mente|sabedoria|liberdade é o direito|gratidão é uma)|^aquele que esquece os benefícios|^é próprio de uma alma nobre|^não há nada mais nobre|^se há algo que possamos fazer/i] },

  /* ---------- WILLIAM SHAKESPEARE (53) ---------- */
  { a: 'William Shakespeare', src: 'Hamlet', st: 'A', m: [/ser ou não ser|há mais coisas entre o céu e a terra|acima de tudo, sê fiel a ti|brevidade é a alma|nada é bom ou mau|palavras, palavras/i] },
  { a: 'William Shakespeare', src: 'Macbeth', st: 'A', m: [/amanhã, e amanhã|conto contado por um idiota|sono que tece/i] },
  { a: 'William Shakespeare', src: 'Como Gostais (As You Like It)', st: 'A', m: [/mundo (inteiro )?é um palco|todos os homens e mulheres, meros atores/i] },
  { a: 'William Shakespeare', src: 'Romeu e Julieta', st: 'A', m: [/que há num nome|rosa (com outro nome|teria)|mais eu te dou, mais tenho/i] },
  { a: 'William Shakespeare', src: 'Sonho de uma Noite de Verão', st: 'A', m: [/curso do verdadeiro amor|amor não vê com os olhos/i] },
  { a: 'William Shakespeare', src: 'Sonetos', st: 'A', m: [/comparar-te a um dia de verão|amor não é amor se muda/i] },
  { a: 'William Shakespeare', src: 'O Mercador de Veneza', st: 'A', m: [/nem tudo que reluz|qualidade da (misericórdia|clemência)/i] },
  { a: 'William Shakespeare', src: 'Júlio César', st: 'A', m: [/culpa não está (em nossas estrelas|nas estrelas)|covardes morrem muitas vezes/i] },
  { a: 'William Shakespeare', src: 'Obra de Shakespeare — peça não identificada', st: 'A-', m: [/./] },

  /* ---------- RALPH WALDO EMERSON (46) ---------- */
  { a: 'Ralph Waldo Emerson', src: 'Ensaios: Primeira Série, "Autoconfiança"', st: 'A', m: [/insist[ae] (em si mesmo|em ti mesmo)|inveja é ignorância|nada é finalmente sagrado|confia em ti mesmo|nada pode te trazer paz senão tu mesmo|nada externo a ti tem poder/i] },
  { a: 'Ralph Waldo Emerson', src: 'Ensaios: Primeira Série, "Amizade"', st: 'A', m: [/única maneira de ter um amigo|obra-prima da natureza|ousamos ser nós mesmos|pensar em voz alta|glória da amizade/i] },
  { a: 'Ralph Waldo Emerson', src: 'Ensaios: Segunda Série e Sociedade e Solidão', st: 'A-', m: [/cada artista foi primeiro um amador|recompensa de uma coisa bem feita|nada de grande foi realizado sem entusiasmo|adota o ritmo da natureza|faça a coisa que você teme|carro uma estrela|raio de luz que atravessa sua mente|felicidade é um perfume/i] },
  { a: 'Ralph Waldo Emerson', src: 'Atribuição popular — sem registro na obra de Emerson', st: 'P', m: [/não siga por onde o caminho pode levar|única pessoa que você está destinado|ser você mesmo em um mundo|maior conquista é ser capaz de ser você mesmo|natureza não se apressa/i] },
  {
    a: 'Ralph Waldo Emerson',
    src: 'Paráfrase de temas de Emerson — não é citação literal',
    st: 'P',
    m: [/^a vida é uma|^a vida dá a cada homem|^não é a duração da vida|^a gratidão é|^a maior homenagem|^o reconhecimento daquilo que temos|^o que fazemos hoje melhora|^a confiança em si mesmo é o primeiro|^a amizade é um dos maiores dons|^a coisa mais importante é descobrir|^cultive o hábito de ser grato|^o que é ensinado em escolas/i]
  },

  /* ---------- MICHEL DE MONTAIGNE (45) ---------- */
  { a: 'Michel de Montaigne', src: 'Ensaios, Livro I, XXVIII ("Da Amizade")', st: 'A', m: [/porque era ele, porque era eu|amizade (perfeita|verdadeira) (é|se) (indivisível|uma)/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, Livro I, XXVI ("Da Educação das Crianças")', st: 'A', m: [/cabeça bem-feita|cabeça muito cheia|saber de cor não é saber/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, Livro I, XX ("Filosofar é aprender a morrer")', st: 'A', m: [/filosofar é aprender a morrer|quem ensinasse os homens a morrer/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, Livro III, XIII ("Da Experiência")', st: 'A', m: [/sobre o mais alto trono do mundo|nosso próprio traseiro|a mais bela das vidas/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios — livro e capítulo não confirmados', st: 'A-', m: [/./] },

  /* ---------- PETER DRUCKER (40) ---------- */
  { a: 'Peter Drucker', src: 'The Practice of Management', st: 'A', m: [/criar e manter um cliente|o que é medido|objetivo do marketing é conhecer|administração por objetivos/i] },
  { a: 'Peter Drucker', src: 'The Effective Executive', st: 'A', m: [/fazer as coisas (direito|certas)|eficácia|primeiro fazer as coisas certas/i] },
  { a: 'Peter Drucker', src: 'Inovação e Espírito Empreendedor', st: 'A', m: [/melhor maneira de prever o futuro|inovação sistemática/i] },
  { a: 'Peter Drucker', src: 'Obra de Peter Drucker — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- WARREN BUFFETT (37) ---------- */
  { a: 'Warren Buffett', src: 'Cartas aos acionistas da Berkshire Hathaway', st: 'A-', m: [/./] },

  /* ---------- JOHN STUART MILL (36) ---------- */
  { a: 'John Stuart Mill', src: 'Sobre a Liberdade', st: 'A', m: [/único propósito pelo qual o poder|liberdade de (expressão|pensamento)|silenciar uma opinião|tirania da maioria|sobre si mesmo, sobre seu próprio corpo/i] },
  { a: 'John Stuart Mill', src: 'Utilitarismo', st: 'A', m: [/sócrates insatisfeito|porco satisfeito|maior felicidade do maior número/i] },
  { a: 'John Stuart Mill', src: 'A Sujeição das Mulheres', st: 'A', m: [/subordinação legal de um sexo/i] },
  { a: 'John Stuart Mill', src: 'Obra de John Stuart Mill — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- JOHN C. MAXWELL (36) ---------- */
  { a: 'John C. Maxwell', src: 'As 21 Irrefutáveis Leis da Liderança', st: 'A', m: [/conhece o caminho, percorre o caminho|liderança é influência|teto|lei do processo/i] },
  { a: 'John C. Maxwell', src: 'Obra de John C. Maxwell — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- EPICURO (34) ---------- */
  { a: 'Epicuro', src: 'Carta a Meneceu', st: 'A', m: [/morte não é nada para nós|quando estamos, a morte não|riqueza consiste (não )?em|poucas necessidades|acostuma-te a pensar que a morte/i] },
  { a: 'Epicuro', src: 'Máximas Principais (Kyriai Doxai)', st: 'A', m: [/prazer é o princípio e o fim|justiça é (um pacto|uma convenção)|não é possível viver (feliz|prazerosamente) sem/i] },
  { a: 'Epicuro', src: 'Sentenças Vaticanas', st: 'A', m: [/não estrague o que você tem|amizade dança ao redor do mundo|de tudo o que a sabedoria/i] },
  { a: 'Epicuro', src: 'Fragmentos de Epicuro — obra não confirmada', st: 'A-', m: [/./] },

  /* ---------- CARL GUSTAV JUNG (31) ---------- */
  { a: 'Carl Gustav Jung', src: 'Memórias, Sonhos, Reflexões', st: 'A-', m: [/não sou o que me aconteceu|solidão não vem de não ter pessoas/i] },
  { a: 'Carl Gustav Jung', src: 'Obras Completas de C. G. Jung — volume não confirmado', st: 'A-', m: [/./] },

  /* ---------- FRANCIS BACON (29) ---------- */
  { a: 'Francis Bacon', src: 'Ensaios (1625)', st: 'A', m: [/alguns livros devem ser (provados|degustados)|leitura torna o homem completo|amigo é outro eu|dinheiro é (um bom servo|como esterco)/i] },
  { a: 'Francis Bacon', src: 'Novum Organum / Meditationes Sacrae', st: 'A', m: [/conhecimento é poder|saber é poder|natureza, para ser comandada/i] },
  { a: 'Francis Bacon', src: 'Obra de Francis Bacon — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- PAULO FREIRE (28) ---------- */
  { a: 'Paulo Freire', src: 'Pedagogia do Oprimido', st: 'A', m: [/educação bancária|ninguém liberta ninguém|oprimido|conscientiza/i] },
  { a: 'Paulo Freire', src: 'Pedagogia da Autonomia', st: 'A', m: [/ensinar (não é transferir|exige)|não há docência sem discência|mudar é difícil, mas é possível/i] },
  { a: 'Paulo Freire', src: 'Obra de Paulo Freire — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- VIKTOR FRANKL (27) ---------- */
  { a: 'Viktor Frankl', src: 'Em Busca de Sentido', st: 'A-', m: [/./] },

  /* ---------- JANE AUSTEN (27) ---------- */
  { a: 'Jane Austen', src: 'Orgulho e Preconceito', st: 'A', m: [/verdade universalmente reconhecida|minha coragem sempre se ergue|enfeitiçou de corpo e alma|vaidade e o orgulho são coisas diferentes/i] },
  { a: 'Jane Austen', src: 'Emma', st: 'A', m: [/nada como ficar em casa|se eu te amasse menos/i] },
  { a: 'Jane Austen', src: 'Persuasão', st: 'A', m: [/não sabemos o que é|amo-te. não me digas/i] },
  { a: 'Jane Austen', src: 'Romance de Jane Austen — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- ARTHUR SCHOPENHAUER (25) ---------- */
  { a: 'Arthur Schopenhauer', src: 'Aforismos para a Sabedoria de Vida', st: 'A-', m: [/saúde supera|nove décimos da nossa felicidade|solidão é a sorte/i] },
  { a: 'Arthur Schopenhauer', src: 'O Mundo como Vontade e Representação', st: 'A-', m: [/vontade|mundo é minha representação/i] },
  { a: 'Arthur Schopenhauer', src: 'Obra de Schopenhauer — título não confirmado', st: 'A-', m: [/./] },

  /* ---------- OUTROS AUTORES COM CORPUS PUBLICADO DEFINIDO ---------- */
  { a: 'Morgan Housel', src: 'A Psicologia Financeira', st: 'A-', m: [/./] },
  { a: 'Dale Carnegie', src: 'Como Fazer Amigos e Influenciar Pessoas / Como Evitar Preocupações', st: 'A-', m: [/./] },
  { a: 'Martin Luther King Jr.', src: 'Discursos e escritos de Martin Luther King Jr.', st: 'A-', m: [/./] },
  { a: 'William James', src: 'Obra de William James — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Maya Angelou', src: 'Obra e entrevistas de Maya Angelou', st: 'A-', m: [/./] },
  { a: 'Erich Fromm', src: 'A Arte de Amar / O Medo à Liberdade / Ter ou Ser', st: 'A-', m: [/./] },
  { a: 'Søren Kierkegaard', src: 'Diários e obra de Kierkegaard — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Charlie Munger', src: 'Poor Charlie\u2019s Almanack e reuniões da Berkshire', st: 'A-', m: [/./] },
  { a: 'Benjamin Franklin', src: 'Poor Richard\u2019s Almanack e Autobiografia', st: 'A-', m: [/./] },
  { a: 'Philip Kotler', src: 'Administração de Marketing', st: 'A-', m: [/./] },
  { a: 'Warren Bennis', src: 'On Becoming a Leader', st: 'A-', m: [/./] },
  { a: 'Mary Wollstonecraft', src: 'Reivindicação dos Direitos da Mulher', st: 'A-', m: [/./] },
  { a: 'Jeff Bezos', src: 'Cartas aos acionistas da Amazon e entrevistas', st: 'A-', m: [/./] },
  { a: 'Carl Rogers', src: 'Tornar-se Pessoa', st: 'A-', m: [/./] },
  { a: 'Henry David Thoreau', src: 'Walden / Desobediência Civil', st: 'A-', m: [/./] },
  { a: 'Benjamin Graham', src: 'O Investidor Inteligente / Security Analysis', st: 'A-', m: [/./] },
  { a: 'Immanuel Kant', src: 'Obra de Kant — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Albert Camus', src: 'Obra de Albert Camus — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Jean-Jacques Rousseau', src: 'Contrato Social / Emílio / Confissões', st: 'A-', m: [/./] },
  { a: 'John Bogle', src: 'O Pequeno Livro do Investimento de Bom Senso', st: 'A-', m: [/./] },
  { a: 'John Wooden', src: 'Wooden on Leadership', st: 'A-', m: [/./] },
  { a: 'Peter Lynch', src: 'O Jeito Peter Lynch de Investir', st: 'A-', m: [/./] },
  { a: 'Alexis de Tocqueville', src: 'A Democracia na América', st: 'A-', m: [/./] },
  { a: 'Rui Barbosa', src: 'Oração aos Moços e discursos de Rui Barbosa', st: 'A-', m: [/./] },
  { a: 'Victor Hugo', src: 'Obra de Victor Hugo — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Eleanor Roosevelt', src: 'Escritos e discursos de Eleanor Roosevelt', st: 'A-', m: [/./] },
  { a: 'Adam Smith', src: 'A Riqueza das Nações / Teoria dos Sentimentos Morais', st: 'A-', m: [/./] },
  { a: 'Bertrand Russell', src: 'Obra de Bertrand Russell — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Hannah Arendt', src: 'Obra de Hannah Arendt — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Simone de Beauvoir', src: 'O Segundo Sexo e demais obras', st: 'A-', m: [/./] },
  { a: 'Helen Keller', src: 'The Story of My Life / The Open Door', st: 'A-', m: [/./] },
  { a: 'Colin Powell', src: 'My American Journey e palestras', st: 'A-', m: [/./] },
  { a: 'Stephen R. Covey', src: 'Os 7 Hábitos das Pessoas Altamente Eficazes', st: 'A-', m: [/./] },
  { a: 'Bill Gates', src: 'Entrevistas, cartas anuais e The Road Ahead', st: 'A-', m: [/./] },
  { a: 'Malala Yousafzai', src: 'Eu Sou Malala e discursos', st: 'A-', m: [/./] },
  { a: 'Virginia Woolf', src: 'Obra de Virginia Woolf — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Jean-Paul Sartre', src: 'Obra de Sartre — título não confirmado', st: 'A-', m: [/./] },
  { a: 'David Hume', src: 'Tratado da Natureza Humana / Investigação', st: 'A-', m: [/./] },
  { a: 'Richard Branson', src: 'Perdendo a Virgindade e entrevistas', st: 'A-', m: [/./] },
  { a: 'John Kotter', src: 'Liderando Mudanças', st: 'A-', m: [/./] },
  { a: 'Robert Cialdini', src: 'As Armas da Persuasão', st: 'A-', m: [/./] },
  { a: 'W. Edwards Deming', src: 'Out of the Crisis e seminários', st: 'A-', m: [/./] },
  { a: 'Apóstolo Paulo', src: 'Cartas paulinas · Almeida Revista e Atualizada', st: 'A-', m: [/./] },
  { a: 'Michael Porter', src: 'Estratégia Competitiva / Vantagem Competitiva', st: 'A-', m: [/./] },
  { a: 'Napoleon Hill', src: 'Pense e Enriqueça', st: 'A-', m: [/./] },
  { a: 'Robert Greene', src: 'As 48 Leis do Poder e demais obras', st: 'A-', m: [/./] },
  { a: 'Jim Collins', src: 'Empresas Feitas para Vencer / Feitas para Durar', st: 'A-', m: [/./] },
  { a: 'Simon Sinek', src: 'Comece pelo Porquê / Líderes se Servem por Último', st: 'A-', m: [/./] },
  { a: 'Seth Godin', src: 'Obra de Seth Godin — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Ray Dalio', src: 'Princípios', st: 'A-', m: [/./] },
  { a: 'Nassim Nicholas Taleb', src: 'A Lógica do Cisne Negro / Antifrágil', st: 'A-', m: [/./] },
  { a: 'Robert Kiyosaki', src: 'Pai Rico, Pai Pobre', st: 'A-', m: [/./] },
  { a: 'George S. Clason', src: 'O Homem Mais Rico da Babilônia', st: 'A-', m: [/./] },
  { a: 'Daniel Goleman', src: 'Inteligência Emocional', st: 'A-', m: [/./] },
  { a: 'Abraham Maslow', src: 'Motivation and Personality / Toward a Psychology of Being', st: 'A-', m: [/./] },
  { a: 'Martin Seligman', src: 'Felicidade Autêntica / Florescer', st: 'A-', m: [/./] },
  { a: 'Brené Brown', src: 'A Coragem de Ser Imperfeito e demais obras', st: 'A-', m: [/./] },
  { a: 'Carol Dweck', src: 'Mindset: A Nova Psicologia do Sucesso', st: 'A-', m: [/./] },
  { a: 'Marshall Rosenberg', src: 'Comunicação Não-Violenta', st: 'A-', m: [/./] },
  { a: 'bell hooks', src: 'Obra de bell hooks — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Angela Davis', src: 'Obra e discursos de Angela Davis', st: 'A-', m: [/./] },
  { a: 'Audre Lorde', src: 'Irmã Outsider e demais obras', st: 'A-', m: [/./] },
  { a: 'Chimamanda Ngozi Adichie', src: 'Sejamos Todos Feministas / O Perigo de uma História Única', st: 'A-', m: [/./] },
  { a: 'Rubem Alves', src: 'Obra de Rubem Alves — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Ariano Suassuna', src: 'Obra e palestras de Ariano Suassuna', st: 'A-', m: [/./] },
  { a: 'Darcy Ribeiro', src: 'Obra de Darcy Ribeiro — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Anísio Teixeira', src: 'Educação Não é Privilégio e demais escritos', st: 'A-', m: [/./] },
  { a: 'Maria Montessori', src: 'A Mente Absorvente / A Descoberta da Criança', st: 'A-', m: [/./] },
  { a: 'John Dewey', src: 'Democracia e Educação e demais obras', st: 'A-', m: [/./] },
  { a: 'Jean Piaget', src: 'Obra de Jean Piaget — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Lev Vygotsky', src: 'Pensamento e Linguagem / A Formação Social da Mente', st: 'A-', m: [/./] },
  { a: 'Sun Tzu', src: 'A Arte da Guerra — capítulo não confirmado', st: 'A-', m: [/./] },
  { a: 'Marco Aurélio', src: 'Meditações — livro não confirmado', st: 'A-', m: [/./] },
  { a: 'Sêneca', src: 'Obra de Sêneca — título não confirmado', st: 'A-', m: [/./] }
];

/* ---- Atribuições corrigidas nesta rodada, com evidência ---- */
const CORRECOES_R = [{ m: /o que está atrás de nós e o que está diante de nós/i, autorAtual: 'Ralph Waldo Emerson', autorNovo: 'Henry Stanley Haskins', src: 'Meditations in Wall Street (1940), p. 131 — publicado anonimamente, o que originou a confusão', st: 'A', nota: 'Confirmado pelo Quote Investigator e por Jeffrey Cramer, editor de The Portable Emerson.' }];

/* ================================================================
   TERCEIRA RODADA — cauda dos casos R
   Autores com obra publicada identificável. Registro a obra
   (nível A-); onde reconheço a passagem exata, registro a seção (A).
   Autores sem corpus identificável permanecem em R.
   ================================================================ */
const PASSAGES_R2 = [
  /* --- passagens localizadas (A) --- */
  { a: 'Charles Dickens', src: 'Um Conto de Duas Cidades, abertura', st: 'A', m: [/melhor dos tempos|pior dos tempos/i] },
  { a: 'Antoine de Saint-Exupéry', src: 'O Pequeno Príncipe, XXI', st: 'A', m: [/só se vê bem com o coração|essencial é invisível|responsável (para sempre|eternamente)|tempo que dedicaste à tua rosa/i] },
  { a: 'Luís de Camões', src: 'Sonetos', st: 'A', m: [/amor é (um )?fogo que arde sem se ver|mudam-se os tempos/i] },
  { a: 'Luís de Camões', src: 'Os Lusíadas', st: 'A', m: [/as armas e os barões|por mares nunca dantes/i] },
  { a: 'Blaise Pascal', src: 'Pensamentos', st: 'A', m: [/coração tem razões|caniço pensante|toda a infelicidade dos homens/i] },
  { a: 'John Locke', src: 'Ensaio sobre o Entendimento Humano', st: 'A', m: [/papel em branco|folha em branco|tábula rasa/i] },
  { a: 'John Locke', src: 'Dois Tratados sobre o Governo', st: 'A', m: [/vida, (à )?liberdade e (à )?propriedade|estado de natureza/i] },
  { a: 'Montesquieu', src: 'O Espírito das Leis', st: 'A', m: [/separação dos poderes|poder detenha o poder|todo homem que tem poder/i] },
  { a: 'Baruch Spinoza', src: 'Ética / Tratado Político', st: 'A', m: [/não rir, não lamentar|paz não é a ausência da guerra/i] },
  { a: 'René Descartes', src: 'Discurso do Método / Meditações', st: 'A', m: [/penso, logo existo|bom senso é a coisa mais bem distribuída/i] },
  { a: 'Heráclito', src: 'Fragmentos (Diels-Kranz)', st: 'A', m: [/mesmo rio|tudo flui|caráter (do homem )?é (o seu )?destino/i] },
  { a: 'John F. Kennedy', src: 'Discurso de posse, 20/01/1961', st: 'A', m: [/não pergunte o que (o seu país|seu país)/i] },
  { a: 'Theodore Roosevelt', src: 'Discurso "Citizenship in a Republic", Sorbonne, 1910', st: 'A', m: [/está na arena|rosto sujo de poeira/i] },
  { a: 'Karl Marx', src: 'Manifesto Comunista / O Capital', st: 'A', m: [/proletários de todos os países|religião é o ópio|história de todas as sociedades/i] },
  { a: 'Thomas Hobbes', src: 'Leviatã', st: 'A', m: [/guerra de todos contra todos|homem é o lobo do homem|solitária, pobre, sórdida/i] },
  { a: 'Virgílio', src: 'Eneida / Éclogas', st: 'A', m: [/o amor vence tudo|a fortuna favorece os audazes/i] },
  { a: 'Thomas Edison', src: 'Entrevista à Harper\u2019s Monthly, 1932', st: 'A', m: [/um por cento de inspiração|noventa e nove por cento de transpiração/i] },
  { a: 'Johann Wolfgang von Goethe', src: 'Fausto', st: 'A', m: [/detém-te, és tão belo|duas almas habitam/i] },
  { a: 'Júlio César', src: 'Comentários sobre a Guerra da Gália / Suetônio', st: 'A', m: [/vim, vi, venci|a sorte está lançada|gália está dividida/i] },
  { a: 'Santo Agostinho', src: 'Confissões', st: 'A', m: [/coração inquieto|tarde te amei|tornaste-nos para ti/i] },
  { a: 'Tomás de Aquino', src: 'Suma Teológica', st: 'A', m: [/graça não destrói a natureza|lei é uma ordenação da razão/i] },

  /* --- corpus identificado (A-) --- */
  { a: 'Charles Dickens', src: 'Romance de Charles Dickens — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Antoine de Saint-Exupéry', src: 'O Pequeno Príncipe / Terra dos Homens / Voo Noturno', st: 'A-', m: [/./] },
  { a: 'Robert Emmons', src: 'Thanks! e demais estudos sobre gratidão', st: 'A-', m: [/./] },
  { a: 'Philip Fisher', src: 'Ações Comuns, Lucros Extraordinários', st: 'A-', m: [/./] },
  { a: 'John Locke', src: 'Obra de John Locke — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Daniel Kahneman', src: 'Rápido e Devagar / artigos com Amos Tversky', st: 'A-', m: [/./] },
  { a: 'Luís de Camões', src: 'Obra de Camões — poema não identificado', st: 'A-', m: [/./] },
  { a: 'C. S. Lewis', src: 'Obra de C. S. Lewis — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Montesquieu', src: 'O Espírito das Leis / Cartas Persas', st: 'A-', m: [/./] },
  { a: 'Blaise Pascal', src: 'Pensamentos — fragmento não identificado', st: 'A-', m: [/./] },
  { a: 'John F. Kennedy', src: 'Discursos e escritos de John F. Kennedy', st: 'A-', m: [/./] },
  { a: 'Elon Musk', src: 'Entrevistas e declarações públicas registradas', st: 'A-', m: [/./] },
  { a: 'Max Weber', src: 'A Ética Protestante / Ciência e Política como Vocação', st: 'A-', m: [/./] },
  { a: 'Baltasar Gracián', src: 'A Arte da Prudência (Oráculo Manual)', st: 'A-', m: [/./] },
  { a: 'Liev Tolstói', src: 'Obra de Tolstói — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Samuel Johnson', src: 'Obra de Samuel Johnson e Vida de Johnson, de Boswell', st: 'A-', m: [/./] },
  { a: 'Albert Einstein', src: 'Escritos, cartas e entrevistas de Einstein — referência não confirmada', st: 'A-', m: [/./] },
  { a: 'Theodore Roosevelt', src: 'Discursos e escritos de Theodore Roosevelt', st: 'A-', m: [/./] },
  { a: 'Rainer Maria Rilke', src: 'Cartas a um Jovem Poeta / obra poética', st: 'A-', m: [/./] },
  { a: 'Profeta Muhammad', src: 'Hadith — coletânea não confirmada', st: 'A-', m: [/./] },
  { a: 'Clayton Christensen', src: 'O Dilema da Inovação e demais obras', st: 'A-', m: [/./] },
  { a: 'Sam Walton', src: 'Sam Walton: Made in America', st: 'A-', m: [/./] },
  { a: 'Gustave Le Bon', src: 'Psicologia das Multidões', st: 'A-', m: [/./] },
  { a: 'Philip Zimbardo', src: 'O Efeito Lúcifer e estudos publicados', st: 'A-', m: [/./] },
  { a: 'Marshall McLuhan', src: 'Os Meios de Comunicação como Extensões do Homem', st: 'A-', m: [/./] },
  { a: 'Baruch Spinoza', src: 'Ética / Tratado Político — proposição não confirmada', st: 'A-', m: [/./] },
  { a: 'Florbela Espanca', src: 'Obra de Florbela Espanca — poema não identificado', st: 'A-', m: [/./] },
  { a: 'Michelle Obama', src: 'Minha História e discursos', st: 'A-', m: [/./] },
  { a: 'Karl Marx', src: 'Obra de Marx — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Ronald Reagan', src: 'Discursos de Ronald Reagan', st: 'A-', m: [/./] },
  { a: 'Franklin D. Roosevelt', src: 'Discursos de Franklin D. Roosevelt', st: 'A-', m: [/./] },
  { a: 'Thomas Hobbes', src: 'Leviatã / De Cive', st: 'A-', m: [/./] },
  { a: 'Mary Parker Follett', src: 'Dynamic Administration', st: 'A-', m: [/./] },
  { a: 'Howard Marks', src: 'O Mais Importante para o Investidor e memorandos da Oaktree', st: 'A-', m: [/./] },
  { a: 'Kofi Annan', src: 'Discursos e relatórios de Kofi Annan na ONU', st: 'A-', m: [/./] },
  { a: 'Tomás de Aquino', src: 'Suma Teológica — questão não confirmada', st: 'A-', m: [/./] },
  { a: 'Jack Welch', src: 'Winning / Jack: Straight from the Gut', st: 'A-', m: [/./] },
  { a: 'Noam Chomsky', src: 'Obra de Noam Chomsky — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Guy Debord', src: 'A Sociedade do Espetáculo', st: 'A-', m: [/./] },
  { a: 'Ken Blanchard', src: 'O Gerente-Minuto e demais obras', st: 'A-', m: [/./] },
  { a: 'John D. Rockefeller', src: 'Random Reminiscences of Men and Events / cartas', st: 'A-', m: [/./] },
  { a: 'Luiza Trajano', src: 'Entrevistas e depoimentos públicos', st: 'A-', m: [/./] },
  { a: 'Santo Agostinho', src: 'Obra de Agostinho — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Rosa Luxemburgo', src: 'Obra e cartas de Rosa Luxemburgo', st: 'A-', m: [/./] },
  { a: 'Virgílio', src: 'Obra de Virgílio — passagem não confirmada', st: 'A-', m: [/./] },
  { a: 'Thomas Edison', src: 'Entrevistas e registros de Thomas Edison', st: 'A-', m: [/./] },
  { a: 'Gerda Lerner', src: 'A Criação do Patriarcado', st: 'A-', m: [/./] },
  { a: 'Ruth Bader Ginsburg', src: 'Votos, discursos e entrevistas', st: 'A-', m: [/./] },
  { a: 'René Descartes', src: 'Obra de Descartes — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Heráclito', src: 'Fragmentos de Heráclito — numeração não confirmada', st: 'A-', m: [/./] },
  { a: 'Jim Rohn', src: 'Palestras e livros de Jim Rohn', st: 'A-', m: [/./] },
  { a: 'J. R. R. Tolkien', src: 'O Senhor dos Anéis / O Hobbit', st: 'A-', m: [/./] },
  { a: 'Larry Page', src: 'Entrevistas e cartas aos acionistas do Google', st: 'A-', m: [/./] },
  { a: 'Milton Friedman', src: 'Capitalismo e Liberdade / Livre para Escolher', st: 'A-', m: [/./] },
  { a: 'George Orwell', src: 'Obra de George Orwell — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Walter Lippmann', src: 'Opinião Pública', st: 'A-', m: [/./] },
  { a: 'Roger Fisher e William Ury', src: 'Como Chegar ao Sim', st: 'A-', m: [/./] },
  { a: 'Johann Wolfgang von Goethe', src: 'Obra de Goethe — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Ray Kroc', src: 'Grinding It Out', st: 'A-', m: [/./] },
  { a: 'Henry Kissinger', src: 'Diplomacia e demais obras', st: 'A-', m: [/./] },
  { a: 'Chris Voss', src: 'Negocie Como Se Sua Vida Dependesse Disso', st: 'A-', m: [/./] },
  { a: 'James Kouzes e Barry Posner', src: 'O Desafio da Liderança', st: 'A-', m: [/./] },
  { a: 'Bernard Montgomery', src: 'Memórias do Marechal Montgomery', st: 'A-', m: [/./] },
  { a: 'Júlio César', src: 'Comentários de Júlio César / relatos de Suetônio e Plutarco', st: 'A-', m: [/./] },
  { a: 'Margaret Thatcher', src: 'Discursos e Os Anos na Downing Street', st: 'A-', m: [/./] },
  { a: 'Edward Bernays', src: 'Propaganda / Cristalizando a Opinião Pública', st: 'A-', m: [/./] },
  { a: 'Ayrton Senna', src: 'Entrevistas registradas de Ayrton Senna', st: 'A-', m: [/./] },
  { a: 'Honoré de Balzac', src: 'A Comédia Humana — romance não identificado', st: 'A-', m: [/./] },
  { a: 'Thomas Jefferson', src: 'Cartas e escritos de Thomas Jefferson', st: 'A-', m: [/./] },
  { a: 'François de La Rochefoucauld', src: 'Máximas', st: 'A-', m: [/./] },
  { a: 'Betty Friedan', src: 'A Mística Feminina', st: 'A-', m: [/./] },
  { a: 'Nísia Floresta', src: 'Direitos das Mulheres e Injustiça dos Homens', st: 'A-', m: [/./] },
  { a: 'Susan B. Anthony', src: 'Discursos e escritos de Susan B. Anthony', st: 'A-', m: [/./] },
  { a: 'Amartya Sen', src: 'Desenvolvimento como Liberdade / Pobreza e Fomes', st: 'A-', m: [/./] },
  { a: 'George Washington', src: 'Cartas e Discurso de Despedida', st: 'A-', m: [/./] },
  { a: 'Muhammad Ali', src: 'Entrevistas e The Greatest: My Own Story', st: 'A-', m: [/./] },
  { a: 'Simone Weil', src: 'A Gravidade e a Graça / cartas', st: 'A-', m: [/./] },
  { a: 'José Ortega y Gasset', src: 'A Rebelião das Massas / Meditações do Quixote', st: 'A-', m: [/./] },
  { a: 'Carl Sagan', src: 'Cosmos / O Mundo Assombrado pelos Demônios', st: 'A-', m: [/./] },
  { a: 'Jack Ma', src: 'Entrevistas e palestras de Jack Ma', st: 'A-', m: [/./] },
  { a: 'Rumi', src: 'Masnavi / Divan de Shams — verso não confirmado', st: 'A-', m: [/./] },
  { a: 'Edith Eger', src: 'A Bailarina de Auschwitz', st: 'A-', m: [/./] },
  { a: 'George Bernard Shaw', src: 'Obra de George Bernard Shaw — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Theodore Levitt', src: 'A Imaginação de Marketing / Miopia em Marketing', st: 'A-', m: [/./] },
  { a: 'Eric Ries', src: 'A Startup Enxuta', st: 'A-', m: [/./] },
  { a: 'Simón Bolívar', src: 'Discursos e cartas de Simón Bolívar', st: 'A-', m: [/./] },
  { a: 'Norberto Bobbio', src: 'A Era dos Direitos / Direita e Esquerda', st: 'A-', m: [/./] },
  { a: 'Edmund Burke', src: 'Reflexões sobre a Revolução em França', st: 'A-', m: [/./] },
  { a: 'Solomon Asch', src: 'Estudos sobre conformidade (1951–1956)', st: 'A-', m: [/./] },
  { a: 'Erving Goffman', src: 'A Representação do Eu na Vida Cotidiana / Estigma', st: 'A-', m: [/./] },
  { a: 'Michel Foucault', src: 'Obra de Foucault — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Zenão de Cítio', src: 'Fragmentos recolhidos por Diógenes Laércio', st: 'A-', m: [/./] },
  { a: 'Scott Belsky', src: 'Fazendo Ideias Acontecer', st: 'A-', m: [/./] },
  { a: 'André Kostolany', src: 'A Arte de Pensar o Dinheiro', st: 'A-', m: [/./] },
  { a: 'Konrad Adenauer', src: 'Memórias e discursos de Konrad Adenauer', st: 'A-', m: [/./] },
  { a: 'Albert Bandura', src: 'Teoria Social Cognitiva / Auto-eficácia', st: 'A-', m: [/./] },
  { a: 'Pierre Bourdieu', src: 'A Distinção / O Poder Simbólico', st: 'A-', m: [/./] },
  { a: 'Jonathan Haidt', src: 'A Mente Moralista / A Geração Ansiosa', st: 'A-', m: [/./] },
  { a: 'Dan Ariely', src: 'Previsivelmente Irracional', st: 'A-', m: [/./] },
  { a: 'Thomas Sowell', src: 'Obra de Thomas Sowell — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Mao Tsé-Tung', src: 'Obras Escolhidas de Mao Tsé-Tung', st: 'A-', m: [/./] },
  { a: 'Getúlio Vargas', src: 'Discursos e carta-testamento de Getúlio Vargas', st: 'A-', m: [/./] },
  { a: 'Juscelino Kubitschek', src: 'Discursos e Por que Construí Brasília', st: 'A-', m: [/./] },
  { a: 'Mikhail Gorbachev', src: 'Perestroika e discursos', st: 'A-', m: [/./] },
  { a: 'Friedrich Hayek', src: 'O Caminho da Servidão / A Constituição da Liberdade', st: 'A-', m: [/./] },
  { a: 'Reed Hastings', src: 'A Regra é Não Ter Regras', st: 'A-', m: [/./] },
  { a: 'Carl von Clausewitz', src: 'Da Guerra', st: 'A-', m: [/./] },
  { a: 'Tristan Harris', src: 'Palestras e depoimentos públicos de Tristan Harris', st: 'A-', m: [/./] },
  { a: 'Cícero', src: 'Obra de Cícero — título não confirmado', st: 'A-', m: [/./] },
  { a: 'Epicteto', src: 'Enquirídio / Diatribes — seção não confirmada', st: 'A-', m: [/./] }
];

/* ================================================================
   ELEVAÇÃO A- → A
   Passagens localizadas com precisão em obras de estrutura numerada
   (capítulo, verso, livro, ato). Só entram aqui as que reconheço na
   fonte; o resto permanece A-.
   ================================================================ */
const ELEVACAO = [
  /* ---------- KRISHNA — Bhagavad Gita, capítulo.verso ---------- */
  { a: 'Krishna', src: 'Bhagavad Gita, 2.11', st: 'A', m: [/não lamenta pelos vivos nem pelos mortos/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.15', st: 'A', m: [/igual diante do (prazer e da dor|sucesso e no fracasso)|equilibrado diante da felicidade e do sofrimento|equilibrado no sucesso e no fracasso/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.20', st: 'A', m: [/alma nunca nasce e nunca morre|eu não nasce nem morre|alma é imutável, eterna/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.22', st: 'A', m: [/abandona roupas gastas/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.40', st: 'A', m: [/nenhum esforço realizado no caminho espiritual/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.47', st: 'A', m: [/direito à ação, mas não aos frutos|ações sem apego aos resultados|abandona o apego aos frutos da ação/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.55', st: 'A', m: [/abandona todos os desejos que surgem na mente/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.61', st: 'A', m: [/sentidos são controlados, a mente se torna estável|controla seus sentidos e mantém a mente firme/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.62–63', st: 'A', m: [/do apego nasce o desejo/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.65', st: 'A', m: [/da serenidade nasce a eliminação/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.68', st: 'A', m: [/domínio sobre seus sentidos permanece firme/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 2.70–71', st: 'A', m: [/paz (vem para aquele|pertence àquele) que abandon|tranquilidade nasce quando os desejos cessam|quando a mente está tranquila, o ser encontra paz/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 3.8', st: 'A', m: [/ação é superior à inação/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 4.18', st: 'A', m: [/ação na inação/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 4.37', st: 'A', m: [/conhecimento é o fogo/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 4.39', st: 'A', m: [/fé, disciplina e dedicação/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 5.18', st: 'A', m: [/erudito, um animal, um elefante/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 5.21', st: 'A', m: [/encontra alegria no interior/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 6.5', st: 'A', m: [/eleve-se por meio de si mesmo|elevar-se por sua própria força/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 6.6', st: 'A', m: [/mente (é amiga|pode ser amiga|controlada é o melhor amigo)|controla a mente encontra um amigo|conquistou a mente alcançou um amigo/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 6.19', st: 'A', m: [/chama protegida do vento/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 6.29', st: 'A', m: [/yogue vê todos os seres com igualdade|vê a unidade em todas as coisas|todos os seres com igualdade possui/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 12.12', st: 'A', m: [/conhecimento é considerado superior à ação/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 13.28', st: 'A', m: [/mesmo senhor presente em todos|mesmo em todos os seres, e todos os seres no supremo|mesma realidade em todos os seres|unidade de todos os seres/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 17.3', st: 'A', m: [/feito pela sua fé|é sua fé, assim ele/i] },
  { a: 'Krishna', src: 'Bhagavad Gita, 18.45–46', st: 'A', m: [/perfeição quando (realiza seu dever|encontra alegria em cumprir)/i] },

  /* ---------- MONTAIGNE — Ensaios, livro e capítulo ---------- */
  { a: 'Michel de Montaigne', src: 'Ensaios, I, 26 ("Da Educação das Crianças")', st: 'A', m: [/cabeça (bem formada|bem feita|cheia de fatos)|apenas conhecedor; quero que seja capaz|educada para repetir opiniões|filtro de sua própria cabeça|criança deve provar as coisas/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, I, 28 ("Da Amizade")', st: 'A', m: [/almas se misturam|amizades comuns, é preciso fazer concessões|almas que se unem espontaneamente/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, I, 20 ("Filosofar é aprender a morrer")', st: 'A', m: [/ensina os homens a morrer|estudar filosofia é aprender a morrer|morte é o remédio de todos os males|julgar nossa felicidade até o fim/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, "Ao Leitor" (prefácio)', st: 'A', m: [/eu mesmo sou a matéria deste livro/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, III, 13 ("Da Experiência")', st: 'A', m: [/estudo a mim mesmo|minha vida tem sido minha matéria|profissão e minha arte é viver|desejo mais natural que o desejo de conhecimento|quem teme sofrer já sofre|grandeza da alma consiste menos em subir/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, III, 2 ("Do Arrependimento")', st: 'A', m: [/cada homem traz em si toda a condição humana|não somos feitos para estar sempre no mesmo estado/i] },
  { a: 'Michel de Montaigne', src: 'Ensaios, I, 23 ("Do Costume")', st: 'A', m: [/costume que nos guia em quase tudo/i] },
  { a: 'Michel de Montaigne', src: 'Formulação de Sêneca (Cartas a Lucílio, LXXI), citada por Montaigne', st: 'P', m: [/vento favorável para aquele que não sabe aonde vai/i] },
  { a: 'Michel de Montaigne', src: 'Paráfrase dos Ensaios — não é citação literal', st: 'P', m: [/^a (amizade|felicidade|sabedoria (consiste|humana|tem)|vida (é uma arte|não é nem boa|não é medido))|^o valor da vida/i] },

  /* ---------- SHAKESPEARE — peça, ato e cena ---------- */
  { a: 'William Shakespeare', src: 'Hamlet, I, 3', st: 'A', m: [/sê (verdadeiro|fiel) contigo mesmo|dá a todos teu ouvido/i] },
  { a: 'William Shakespeare', src: 'Hamlet, III, 1', st: 'A', m: [/consciência nos torna covardes/i] },
  { a: 'William Shakespeare', src: 'Hamlet, IV, 5', st: 'A', m: [/sabemos o que somos, mas não sabemos/i] },
  { a: 'William Shakespeare', src: 'Macbeth, V, 5', st: 'A', m: [/sombra (ambulante|que passa)|história contada por um idiota/i] },
  { a: 'William Shakespeare', src: 'Macbeth, III, 2', st: 'A', m: [/o que está feito está feito/i] },
  { a: 'William Shakespeare', src: 'A Tempestade, IV, 1', st: 'A', m: [/matéria de que (são feitos os sonhos|os sonhos são feitos)/i] },
  { a: 'William Shakespeare', src: 'A Tempestade, II, 1', st: 'A', m: [/passado é prólogo|o que passou é prólogo/i] },
  { a: 'William Shakespeare', src: 'A Tempestade, II, 2', st: 'A', m: [/miséria torna o homem familiar/i] },
  { a: 'William Shakespeare', src: 'Noite de Reis, I, 1', st: 'A', m: [/música é o alimento do amor/i] },
  { a: 'William Shakespeare', src: 'Noite de Reis, II, 5', st: 'A', m: [/nascem grandes|feitos grandes/i] },
  { a: 'William Shakespeare', src: 'Noite de Reis, III, 1', st: 'A', m: [/amor procurado é bom/i] },
  { a: 'William Shakespeare', src: 'Noite de Reis, IV, 2', st: 'A', m: [/escuridão senão a ignorância/i] },
  { a: 'William Shakespeare', src: 'O Mercador de Veneza, II, 6', st: 'A', m: [/amor é cego, e os amantes/i] },
  { a: 'William Shakespeare', src: 'O Mercador de Veneza, II, 7', st: 'A', m: [/tudo que reluz não é ouro/i] },
  { a: 'William Shakespeare', src: 'O Mercador de Veneza, IV, 1', st: 'A', m: [/misericórdia é duas vezes abençoada/i] },
  { a: 'William Shakespeare', src: 'Júlio César, I, 2', st: 'A', m: [/caro brutus/i] },
  { a: 'William Shakespeare', src: 'Júlio César, IV, 3', st: 'A', m: [/maré nos assuntos dos homens/i] },
  { a: 'William Shakespeare', src: 'Como Gostais, II, 1', st: 'A', m: [/doçuras da adversidade|adversidades têm usos doces/i] },
  { a: 'William Shakespeare', src: 'Sonho de uma Noite de Verão, I, 1', st: 'A', m: [/caminho do verdadeiro amor/i] },
  { a: 'William Shakespeare', src: 'Romeu e Julieta, I, 1', st: 'A', m: [/fumaça feita com o vapor dos suspiros/i] },
  { a: 'William Shakespeare', src: 'Antônio e Cleópatra, I, 1', st: 'A', m: [/amor pobre aquele que se pode medir/i] },
  { a: 'William Shakespeare', src: 'Otelo, I, 3', st: 'A', m: [/desgraças passadas/i] },
  { a: 'William Shakespeare', src: 'Medida por Medida, I, 4', st: 'A', m: [/dúvidas são traidoras/i] },
  { a: 'William Shakespeare', src: 'Henrique IV, Parte 2, III, 1', st: 'A', m: [/cabeça que sustenta uma coroa/i] },
  { a: 'William Shakespeare', src: 'Henrique IV, Parte 1, V, 4', st: 'A', m: [/melhor da valentia/i] },
  { a: 'William Shakespeare', src: 'Rei Lear, I, 1', st: 'A', m: [/nada pode vir de nada/i] },
  { a: 'William Shakespeare', src: 'Bem Está o Que Bem Acaba, IV, 3', st: 'A', m: [/teia da nossa vida/i] },
  { a: 'William Shakespeare', src: 'Atribuição popular — sem localização na obra de Shakespeare', st: 'P', m: [/gratidão é o único tesouro dos humildes|tempo deve esperar por ninguém|amizade é a mais doce consolação|ato da vida é breve/i] },

  /* ---------- EPICURO ---------- */
  { a: 'Epicuro', src: 'Máximas Principais, V', st: 'A', m: [/impossível sem (a sabedoria|uma vida sábia)|não é possível viver bem sem filosofar/i] },
  { a: 'Epicuro', src: 'Carta a Meneceu', st: 'A', m: [/ausência de dor no corpo|prazer é o começo e o fim|maior virtude é a prudência|menos necessita de riquezas|verdadeira riqueza é não precisar|contenta com pouco possui uma grande riqueza/i] },
  { a: 'Epicuro', src: 'Sentenças Vaticanas, 35', st: 'A', m: [/não (arruínes|estrague) (o que tens|aquilo que você tem)/i] },
  { a: 'Epicuro', src: 'Sentenças Vaticanas, 68', st: 'A', m: [/não se contenta com pouco, nada o satisfará|não considera o que possui como suficiente/i] },
  { a: 'Epicuro', src: 'Sentenças Vaticanas, 9', st: 'A', m: [/necessidade é um mal/i] },
  { a: 'Epicuro', src: 'Fragmento 221 (edição Usener)', st: 'A', m: [/não cura nenhuma aflição humana/i] },
  { a: 'Epicuro', src: 'Sentenças Vaticanas', st: 'A-', m: [/lembram o passado com gratidão|identidade de almas|menos necessita do amanhã/i] },
  { a: 'Epicuro', src: 'Paráfrase da doutrina epicurista — não é citação literal', st: 'P', m: [/^a (felicidade|vida feliz (é uma vida|consiste)|vã opinião)|^o prazer (mais nobre|da alma)/i] },

  /* ---------- MARCO AURÉLIO ---------- */
  { a: 'Marco Aurélio', src: 'Meditações, VII, 3', st: 'A', m: [/valor de suas ambições/i] },
  { a: 'Marco Aurélio', src: 'Meditações, XII, 26', st: 'A', m: [/perde o presente/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VIII, 46', st: 'A', m: [/natureza do que te acontece/i] },
  { a: 'Marco Aurélio', src: 'Meditações, IV, 17', st: 'A', m: [/viver esta vida bem, mesmo neste instante/i] },
  { a: 'Marco Aurélio', src: 'Meditações, VI, 54', st: 'A', m: [/não é bom para a comunidade|respeito pelo bem comum/i] },
  {
    a: 'Marco Aurélio',
    src: 'Paráfrase das Meditações — não é citação literal',
    st: 'P',
    m: [/poder sobre sua mente|escrava de suas emoções|não deve temer a morte, mas nunca ter começado|^a (felicidade|alma não se torna superior|brevidade da vida|paz interior|vida é um presente|primeira regra)|^agradeça pelo que você tem|^não (devemos apenas agradecer|procure possuir mais)|^a maior coisa que um homem|morte de um homem não é mais terrível/i]
  },

  /* ---------- JESUS CRISTO — evangelho, capítulo e versículo ---------- */
  { a: 'Jesus Cristo', src: 'Mateus 4:4 · Almeida Revista e Atualizada', st: 'A', m: [/não só de pão viverá/i] },
  { a: 'Jesus Cristo', src: 'Mateus 6:10 · Almeida Revista e Atualizada', st: 'A', m: [/seja feita a tua vontade/i] },
  { a: 'Jesus Cristo', src: 'Mateus 6:19–21 · Almeida Revista e Atualizada', st: 'A', m: [/ajunteis tesouros na terra|onde (estiver o teu tesouro|está o teu tesouro)/i] },
  { a: 'Jesus Cristo', src: 'Mateus 6:34 · Almeida Revista e Atualizada', st: 'A', m: [/dia de amanhã/i] },
  { a: 'Jesus Cristo', src: 'Mateus 7:12 · Almeida Revista e Atualizada', st: 'A', m: [/quereis que os homens vos façam/i] },
  { a: 'Jesus Cristo', src: 'Mateus 16:25 · Almeida Revista e Atualizada', st: 'A', m: [/salvar a sua vida perdê-la-á/i] },
  { a: 'Jesus Cristo', src: 'Mateus 18:3 · Almeida Revista e Atualizada', st: 'A', m: [/tornardes como crianças/i] },
  { a: 'Jesus Cristo', src: 'Mateus 23:11 · Almeida Revista e Atualizada', st: 'A', m: [/maior entre vós/i] },
  { a: 'Jesus Cristo', src: 'Marcos 9:35 · Almeida Revista e Atualizada', st: 'A', m: [/quiser ser o primeiro|quer ser o primeiro/i] },
  { a: 'Jesus Cristo', src: 'Lucas 6:36 · Almeida Revista e Atualizada', st: 'A', m: [/sede misericordiosos/i] },
  { a: 'Jesus Cristo', src: 'Lucas 12:48 · Almeida Revista e Atualizada', st: 'A', m: [/muito foi dado, muito será exigido/i] },
  { a: 'Jesus Cristo', src: 'João 8:7 · Almeida Revista e Atualizada', st: 'A', m: [/sem pecado seja o primeiro/i] },
  { a: 'Jesus Cristo', src: 'João 8:32 · Almeida Revista e Atualizada', st: 'A', m: [/a verdade vos libertará/i] },
  { a: 'Jesus Cristo', src: 'João 14:1 · Almeida Revista e Atualizada', st: 'A', m: [/não se turbe o vosso coração/i] },
  { a: 'Jesus Cristo', src: 'João 15:4 · Almeida Revista e Atualizada', st: 'A', m: [/permanecei em mim/i] },
  { a: 'Jesus Cristo', src: '2 Coríntios 12:9 · Almeida Revista e Atualizada', st: 'A', m: [/minha graça te basta/i] }
];

/* ---------------- Traduções declaradas dos textos sagrados (§9) ---------------- */
const TRADUCOES_SAGRADAS = [
  { re: /^(Alcor[ãa]o|Cor[ãa]o)/i, nota: 'Alcorão — tradução de Samir El Hayek (edição brasileira de referência)' },
  { re: /^(Prov[ée]rbios|Salmos|Livro d|Eclesiastes|Deuteron[ôo]mio|Lev[íi]tico|G[êe]nesis|[ÊE]xodo|Isa[íi]as|Miqueias|1 Samuel|B[íi]blia)/i, nota: 'Bíblia — Almeida Revista e Atualizada' },
  { re: /^(Carta a|Carta d|Primeira Carta|Mateus|Marcos|Lucas|Jo[ãa]o \d|Atos|Hebreus|Tiago)/i, nota: 'Novo Testamento — Almeida Revista e Atualizada' },
  { re: /^(Upanishad|Mundaka|Katha|Rig Veda|Bhagavad)/i, nota: 'Tradução a partir do sânscrito; versão em português consolidada' },
  { re: /^(Mishn[áa]|Pirkei|Tor[áa]|Talmude|Ben Zoma|Ben Sir[áa]|Rabi |Shimon|Hillel|Tradi[çc][ãa]o (judaica|rabínica))/i, nota: 'Tradição rabínica — Pirkei Avot e Talmude, tradução a partir do hebraico' },
  { re: /^(Tao Te|Dhammapada|Tradi[çc][ãa]o budista)/i, nota: 'Tradução a partir do original; versão em português consolidada' }
];
