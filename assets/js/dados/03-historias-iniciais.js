/* MeMotiva — dados/03-historias-iniciais.js
   Histórias (biografias narrativas) acrescentadas na Fase 2.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   NOVAS BIOGRAFIAS (§6)
   Selecionadas pelo critério do próprio documento: os autores mais
   recorrentes no banco de frases que ainda não tinham história.
   ================================================================ */
const NEW_STORIES = [
  {
    id: 'aristoteles',
    author: 'Aristóteles',
    cat: 'filosofos',
    profiles: ['filosofos', 'cientistas'],
    origin: 'antiguidade',
    role: 'Filósofo grego (384–322 a.C.)',
    why: 'Foi tutor de Alexandre, o Grande, e organizou praticamente todo o conhecimento do mundo antigo.',
    title: 'O homem que quis catalogar o mundo inteiro',
    excerpt: 'Aluno de Platão, professor de um imperador e fundador de metade das disciplinas que ainda estudamos.',
    photo: 'Aristotle Altemps Inv8575.jpg',
    text: 'Aristóteles nasceu em Estagira, no norte da Grécia, filho do médico pessoal do rei da Macedônia. Aos dezessete anos foi enviado a Atenas para estudar na Academia de Platão, onde permaneceu por vinte anos — primeiro como aluno, depois como o mais brilhante dos colegas do mestre. Quando Platão morreu e a direção da Academia passou a outro, Aristóteles deixou a cidade.\n\nOs anos seguintes foram de viagem e observação. Ele passou um tempo na ilha de Lesbos dissecando peixes e moluscos, catalogando espécies, anotando hábitos reprodutivos com uma minúcia que só seria igualada dois mil anos depois. Foi um dos primeiros a olhar para a natureza não como enigma divino, mas como algo que se pode examinar, medir e classificar.\n\nEm 343 a.C. foi chamado para uma tarefa peculiar: educar um menino de treze anos, filho do rei Filipe II. O menino era Alexandre, que se tornaria Alexandre, o Grande. Anos depois, já com o apoio do antigo aluno, Aristóteles voltou a Atenas e fundou sua própria escola, o Liceu — onde ensinava caminhando, o que rendeu a seus discípulos o apelido de peripatéticos, "os que passeiam".\n\nO que ele deixou é menos um sistema do que um mapa: lógica, ética, política, física, biologia, retórica, poética. Ele praticamente inventou o hábito de dividir o saber em campos e tratar cada um com o método adequado. Muitas de suas conclusões científicas foram superadas — e algumas estavam simplesmente erradas —, mas o gesto de perguntar sistematicamente permaneceu. Sua ética, em particular, continua atual por uma razão simples: em vez de perguntar "o que devo fazer?", ele perguntava "que tipo de pessoa devo me tornar?".\n\nQuando Alexandre morreu e Atenas se voltou contra tudo o que fosse macedônio, Aristóteles fugiu da cidade. Disse, segundo a tradição, que não deixaria os atenienses pecarem duas vezes contra a filosofia — uma referência a Sócrates. Morreu no ano seguinte, aos 62 anos.'
  },

  {
    id: 'seneca',
    author: 'Sêneca',
    cat: 'filosofos',
    profiles: ['filosofos', 'literatura'],
    origin: 'antiguidade',
    role: 'Filósofo e senador romano (4 a.C.–65 d.C.)',
    why: 'Escreveu sobre serenidade enquanto era o homem mais poderoso — e mais vigiado — de Roma.',
    title: 'A calma escrita dentro do palácio',
    excerpt: 'Conselheiro de Nero, milionário e estoico: uma vida inteira feita da tensão entre o que se prega e o que se vive.',
    photo: 'Seneca-berlinantikensammlung-1.jpg',
    text: 'Lúcio Aneu Sêneca nasceu em Córdoba, na Hispânia, e foi levado ainda criança para Roma. Teve saúde frágil a vida toda — sofria de crises respiratórias que descreveu como "ensaios da morte" — e passou anos no Egito se recuperando. De volta a Roma, tornou-se advogado e senador, com uma reputação de orador tão boa que o imperador Calígula, por inveja, quase mandou executá-lo.\n\nEm 41 d.C. foi acusado de adultério com uma sobrinha do imperador e exilado na Córsega, onde ficou oito anos. Foi ali, longe de tudo, que escreveu algumas de suas cartas mais duras sobre consolo e desapego. Voltou por interferência de Agripina, que o queria como tutor de seu filho de doze anos.\n\nO filho era Nero. Durante os primeiros cinco anos do reinado — lembrados como um período surpreendentemente bom — Sêneca foi, na prática, quem governava Roma ao lado do prefeito Burro. Também ficou imensamente rico, o que seus inimigos nunca deixaram de apontar: como podia um estoico que pregava a indiferença ao dinheiro possuir uma das maiores fortunas do império? Sêneca respondeu que não pregava a pobreza, mas a liberdade em relação à riqueza — e que preferia ser criticado por ter do que corrompido por querer.\n\nCom o tempo, Nero se tornou incontrolável. Sêneca pediu para se retirar, devolveu bens, afastou-se da corte. Não bastou. Em 65 d.C., acusado de participar de uma conspiração, recebeu a ordem de tirar a própria vida. Segundo Tácito, encarou o desfecho com a mesma serenidade que descrevera por escrito durante décadas, dizendo aos amigos que a única herança que lhes deixava era o exemplo da própria conduta.\n\nSuas cartas a Lucílio continuam sendo lidas hoje quase como se tivessem sido escritas ontem — e é justamente a distância entre o filósofo e o cortesão que as torna tão humanas.'
  },

  {
    id: 'buda',
    author: 'Buda',
    cat: 'fe',
    profiles: ['religiosos', 'filosofos'],
    origin: 'asiaticos',
    role: 'Fundador do budismo (c. 563–483 a.C.)',
    why: 'Nasceu príncipe, largou tudo aos 29 anos e criou um caminho seguido hoje por meio bilhão de pessoas.',
    title: 'O príncipe que saiu do palácio',
    excerpt: 'A história de um herdeiro que trocou a certeza do trono pela investigação do sofrimento humano.',
    photo: 'Buddha in Sarnath Museum (Dhammajak Mutra).jpg',
    text: 'Sidarta Gautama nasceu em Lumbini, no atual Nepal, filho de um chefe do clã Shakya. A tradição conta que seu pai, avisado de que o menino poderia se tornar um grande rei ou um grande asceta, decidiu blindá-lo: criou-o dentro do palácio, cercado de conforto, sem contato com qualquer forma de dor.\n\nO plano funcionou por quase trinta anos. Então, nas chamadas quatro visões, Sidarta saiu do palácio e viu pela primeira vez um velho, um doente, um cadáver e um monge errante. As três primeiras cenas lhe mostraram que nada do que ele possuía o protegeria daquilo. A quarta lhe sugeriu que havia outro modo de viver.\n\nAos 29 anos abandonou o palácio, a esposa e o filho recém-nascido. Passou seis anos entre mestres ascetas, praticando jejuns tão severos que quase morreu. Concluiu que a mortificação extrema era tão inútil quanto o luxo extremo — e formulou o que chamaria de caminho do meio. Sentou-se sob uma figueira em Bodh Gaya decidido a não se levantar até compreender a raiz do sofrimento. Segundo a tradição, levantou-se desperto: Buda, "o que despertou".\n\nPassou os 45 anos seguintes caminhando pelo vale do Ganges ensinando. Sua proposta era notavelmente prática e pouco metafísica: o sofrimento existe, tem causa, pode cessar, e há um método. Aceitava discípulos de qualquer casta, incluindo mulheres — o que era escandaloso na Índia da época. Recusava-se a responder perguntas sobre a origem do universo, comparando quem insistia nelas a um homem baleado que se recusa a tirar a flecha antes de saber quem atirou.\n\nMorreu por volta dos oitenta anos, em Kushinagar. Suas últimas palavras registradas foram um conselho de autonomia: que cada um trabalhasse a própria salvação com diligência, sem depender dele.'
  },

  {
    id: 'laotse',
    author: 'Lao Tsé',
    cat: 'filosofos',
    profiles: ['filosofos', 'religiosos'],
    origin: 'asiaticos',
    role: 'Pensador chinês (séc. VI a.C.)',
    why: 'Escreveu em cinco mil caracteres o livro mais traduzido do mundo depois da Bíblia — e sumiu.',
    title: 'O sábio que foi embora',
    excerpt: 'Sobre o autor do Tao Te Ching, um homem de quem quase nada se sabe e cujo livro nunca parou de ser lido.',
    photo: 'Laozi.jpg',
    text: 'Lao Tsé — o nome significa simplesmente "velho mestre" — é uma dessas figuras em que história e lenda se tornaram inseparáveis. A versão mais antiga, registrada pelo historiador Sima Qian por volta de 100 a.C., diz que ele era arquivista da corte real da dinastia Zhou, guardião dos registros do reino. Teria conhecido Confúcio, mais jovem, que saiu do encontro impressionado e desconcertado.\n\nA história conta que, envelhecendo e desencantado com a decadência da corte, Lao Tsé montou num búfalo e partiu rumo ao oeste, decidido a desaparecer. Ao chegar ao posto da fronteira, o guarda o reconheceu e se recusou a deixá-lo passar sem que registrasse antes o que havia aprendido. Lao Tsé sentou-se e escreveu cerca de cinco mil caracteres. Depois atravessou a passagem e nunca mais se ouviu falar dele.\n\nO texto ficou conhecido como Tao Te Ching. São oitenta e um capítulos curtos, muitos deles paradoxais, girando em torno de duas ideias: o Tao — o curso natural das coisas, que não se define, só se acompanha — e o wu wei, a ação sem forçar, que não é passividade, mas a arte de agir no momento e na medida certos, como a água que contorna a pedra e ainda assim a desgasta.\n\nHistoriadores modernos duvidam que tenha existido um único autor; o mais provável é que o livro seja uma compilação de várias mãos ao longo de séculos. Isso, curiosamente, combina com o próprio texto, que desconfia de nomes, títulos e reputações.\n\nO resultado é um dos livros mais traduzidos da história e a base do taoismo. Sua influência atravessou a filosofia, a medicina chinesa, as artes marciais e, mais recentemente, a literatura ocidental sobre liderança — que redescobriu ali uma ideia inconveniente: o melhor governante é aquele cuja existência mal se percebe.'
  },

  {
    id: 'epicteto',
    author: 'Epicteto',
    cat: 'filosofos',
    profiles: ['filosofos', 'educadores'],
    origin: 'antiguidade',
    role: 'Filósofo estoico (c. 50–135 d.C.)',
    why: 'Nasceu escravo e mancou a vida inteira — e ensinou Roma o que significa ser livre.',
    title: 'O escravo que ensinou liberdade',
    excerpt: 'De propriedade de um secretário de Nero a mestre procurado por senadores: a virada mais improvável da filosofia antiga.',
    photo: 'Epictetus.jpg',
    text: 'Epicteto nasceu escravo em Hierápolis, na atual Turquia. Nem seu nome verdadeiro sobreviveu: "Epicteto" significa, em grego, algo como "adquirido". Foi levado a Roma como propriedade de Epafrodito, um liberto que servia como secretário do imperador Nero.\n\nEm algum momento da juventude ficou permanentemente aleijado de uma perna. A tradição — provavelmente lendária, mas reveladora do que os antigos viam nele — conta que seu dono torcia sua perna por diversão, e que Epicteto teria avisado, sem alterar a voz, que ela quebraria; quando quebrou, apenas observou que havia avisado. Verdadeira ou não, a anedota fixou sua imagem: um homem cuja serenidade não dependia das circunstâncias.\n\nSeu dono permitiu que estudasse filosofia com o estoico Musônio Rufo, e em algum momento Epicteto foi libertado. Começou a ensinar em Roma até que, por volta de 93 d.C., o imperador Domiciano expulsou todos os filósofos da Itália. Ele se mudou para Nicópolis, na Grécia, onde abriu uma escola que atraiu alunos de todo o império — incluindo futuros senadores.\n\nEpicteto nunca escreveu nada. Tudo que temos veio de Arriano, um aluno que anotava as aulas: as Diatribes e o Enquirídio, um manual curto de umas poucas páginas. O núcleo do ensinamento cabe em uma frase: algumas coisas dependem de nós — nossos juízos, escolhas e reações — e outras não. Confundir as duas é a origem de praticamente todo sofrimento evitável.\n\nViveu pobre por opção, numa casa sem quase nada. Já velho, adotou o filho de um amigo que seria abandonado e o criou. Sua influência atravessou os séculos de forma peculiar: foi lido por Marco Aurélio no trono, por prisioneiros de guerra em cativeiro e é hoje uma das bases reconhecidas da terapia cognitivo-comportamental.'
  },

  {
    id: 'cicero',
    author: 'Cícero',
    cat: 'politica',
    profiles: ['filosofos', 'politicos', 'literatura'],
    origin: 'antiguidade',
    role: 'Orador e cônsul romano (106–43 a.C.)',
    why: 'Salvou a República com um discurso e morreu por não conseguir se calar diante do fim dela.',
    title: 'A voz da República',
    excerpt: 'O maior orador de Roma foi também o homem que assistiu, escrevendo, ao desmoronamento de tudo em que acreditava.',
    photo: 'M-T-Cicero.jpg',
    text: 'Marco Túlio Cícero nasceu em Arpino, numa família abastada mas sem nenhum antepassado no Senado — o que, na Roma da época, praticamente fechava as portas da política. Ele as abriu com a única arma que tinha: a palavra. Estudou retórica e direito com obsessão e, ainda jovem, aceitou casos que ninguém queria, incluindo a defesa de um homem acusado de parricídio num processo que envolvia um aliado do ditador Sula.\n\nEm 63 a.C. chegou ao consulado, o cargo mais alto da República, como homo novus — o primeiro da família. Foi nesse ano que descobriu e desmontou a conspiração de Catilina, que planejava tomar o poder à força. Seus discursos contra o conspirador são estudados até hoje. Mas ele mandou executar os conjurados sem julgamento formal, e a decisão o perseguiria: anos depois foi exilado por isso.\n\nVoltou, mas encontrou uma Roma diferente. César, Pompeu e Crasso haviam concentrado o poder, e a República que Cícero defendia já era mais uma ideia do que uma realidade. Ele se retirou para escrever. Foi nesse período de derrota política que produziu a maior parte de sua obra filosófica — sobre a amizade, a velhice, os deveres, a natureza dos deuses — traduzindo para o latim conceitos gregos que não tinham palavra em Roma. Grande parte do vocabulário filosófico das línguas latinas veio dali.\n\nDepois do assassinato de César, Cícero tentou uma última cartada: atacou Marco Antônio numa série de discursos ferozes, as Filípicas. Perdeu. Antônio o incluiu nas listas de proscrição e mandou matá-lo em 43 a.C. Suas mãos e sua cabeça foram expostas no Fórum — uma mensagem sobre o preço de falar.\n\nSuas cartas privadas, mais de novecentas, sobreviveram por acaso. São o retrato mais íntimo que temos de qualquer romano: vaidoso, inseguro, brilhante e profundamente humano.'
  },

  {
    id: 'shakespeare',
    author: 'William Shakespeare',
    cat: 'filosofos',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Dramaturgo inglês (1564–1616)',
    why: 'Inventou centenas de palavras que usamos até hoje e escreveu as peças mais encenadas da história.',
    title: 'O homem que ampliou o idioma',
    excerpt: 'Filho de um luveiro do interior, sem formação universitária, tornou-se o autor mais representado do mundo.',
    photo: 'Shakespeare.jpg',
    text: 'William Shakespeare nasceu em Stratford-upon-Avon, filho de um luveiro e comerciante de lã que chegou a ocupar cargos na administração local antes de enfrentar dificuldades financeiras. Frequentou provavelmente a escola de gramática da cidade, onde teria aprendido latim e retórica clássica, mas nunca foi à universidade — algo que seus rivais formados em Oxford e Cambridge faziam questão de lembrar.\n\nCasou-se aos dezoito anos com Anne Hathaway, oito anos mais velha e já grávida. Tiveram três filhos. Dos anos seguintes praticamente não se sabe nada — os historiadores os chamam de "anos perdidos". Quando Shakespeare reaparece nos registros, por volta de 1592, já está em Londres, trabalhando como ator e escrevendo peças, e já incomoda o suficiente para ser atacado por escrito por um dramaturgo estabelecido.\n\nTornou-se sócio da companhia teatral Lord Chamberlain\u2019s Men, depois rebatizada King\u2019s Men sob o patrocínio de Jaime I. Ao contrário de quase todos os seus contemporâneos, Shakespeare era simultaneamente autor, ator e acionista do teatro — o Globe —, o que lhe deu independência financeira rara e lhe permitiu comprar a segunda maior casa de sua cidade natal.\n\nEscreveu cerca de trinta e oito peças e 154 sonetos. Sua marca não é o enredo — quase todos foram tomados de empréstimo de crônicas e novelas existentes — mas a interioridade: antes dele, personagens de teatro anunciavam o que sentiam; depois dele, começam a descobrir o que sentem enquanto falam. Hamlet muda de ideia no meio da própria frase. Isso era novo.\n\nContribuiu com um número extraordinário de palavras e expressões ao inglês, muitas ainda em uso diário. Morreu aos 52 anos, em sua cidade natal. Sete anos depois, dois colegas de companhia reuniram suas peças no volume que ficou conhecido como Primeiro Fólio — sem ele, cerca de metade da obra teria se perdido.'
  },

  {
    id: 'gibran',
    author: 'Kahlil Gibran',
    cat: 'amor',
    profiles: ['literatura', 'artistas'],
    origin: 'asiaticos',
    role: 'Poeta e pintor libanês (1883–1931)',
    why: 'Escreveu "O Profeta", livro que nunca saiu de catálogo em cem anos e foi traduzido para mais de cem idiomas.',
    title: 'Entre duas margens',
    excerpt: 'Um imigrante libanês nos cortiços de Boston que se tornou um dos poetas mais vendidos de todos os tempos.',
    photo: 'Kahlil Gibran 1913.jpg',
    text: 'Gibran Khalil Gibran nasceu em Bsharri, uma vila nas montanhas do norte do Líbano, então parte do Império Otomano. A família era pobre e o pai, cobrador de impostos, foi preso por desvio de fundos, o que custou à família todos os bens. Em 1895, a mãe, Kamila, embarcou sozinha com os quatro filhos para os Estados Unidos.\n\nInstalaram-se no bairro sírio-libanês de Boston, um dos mais pobres da cidade. Kamila vendia rendas de porta em porta. Na escola, um funcionário registrou errado o nome do menino — e "Kahlil Gibran" ficou para sempre. Um professor notou seus desenhos e o apresentou a Fred Holland Day, fotógrafo e editor que o introduziu à arte e à literatura, mudando sua trajetória.\n\nAos quinze anos, Gibran voltou sozinho a Beirute para estudar árabe. Ao regressar a Boston, em três anos perdeu a irmã, o irmão e a mãe, todos para doença. Sobreviveu vendendo quadros e escrevendo em árabe para a comunidade imigrante — textos ferozes contra o clero e as convenções sociais, que lhe renderam a excomunhão da igreja maronita e a proibição de seus livros em partes do mundo árabe.\n\nMary Haskell, diretora de escola que se tornou sua mecenas e editora, financiou seus estudos em Paris e revisou seus textos em inglês durante anos. Foi dessa parceria que nasceu, em 1923, "O Profeta": vinte e seis ensaios poéticos sobre casamento, filhos, trabalho, dor e alegria, narrados por um sábio prestes a deixar uma cidade estrangeira.\n\nA crítica literária ignorou o livro. Os leitores não. Ele nunca saiu de catálogo, foi lido em casamentos e funerais por gerações e ultrapassou cem traduções. Gibran morreu aos 48 anos, em Nova York, e foi enterrado no Líbano, no mosteiro que sua obra ajudou a comprar.'
  },

  {
    id: 'montaigne',
    author: 'Michel de Montaigne',
    cat: 'reflexao',
    profiles: ['filosofos', 'literatura'],
    origin: 'europeus',
    role: 'Pensador francês (1533–1592)',
    why: 'Inventou o ensaio como gênero ao decidir escrever, sem pudor, sobre si mesmo.',
    title: 'O inventor do ensaio',
    excerpt: 'Aos 38 anos trancou-se numa torre para pensar — e criou uma forma de escrita que não existia.',
    photo: 'Michel de Montaigne 1.jpg',
    text: 'Michel Eyquem de Montaigne nasceu num castelo perto de Bordeaux, herdeiro de uma família que havia enriquecido com o comércio de peixe salgado e vinho. Seu pai conduziu uma experiência educacional peculiar: contratou um tutor alemão que não falava francês, e determinou que ninguém se dirigisse ao menino em outra língua que não o latim. Montaigne aprendeu latim como língua materna, antes do francês.\n\nSeguiu carreira jurídica e serviu por treze anos no parlamento de Bordeaux. Ali conheceu Étienne de La Boétie, e a amizade entre os dois se tornou o episódio central de sua vida afetiva. Quando La Boétie morreu de peste, aos 32 anos, Montaigne ficou devastado. Sua tentativa de explicar aquele laço resultou numa das páginas mais citadas sobre amizade já escritas — e na constatação de que a explicação era impossível.\n\nEm 1571, aos 38 anos, retirou-se da vida pública. Instalou-se na torre do castelo, cercado por cerca de mil livros, com máximas gravadas nas vigas do teto. Começou a escrever o que chamou de essais — "tentativas", "provas". Não eram tratados nem sermões: eram registros de um homem tentando se entender, mudando de opinião em público, admitindo contradições, digressões e ignorância.\n\nO tema declarado era ele próprio, e isso era escandalosamente novo. Escreveu sobre a morte, a educação dos filhos, os canibais do Brasil — que considerou mais civilizados que os europeus de sua época —, seus problemas com pedras nos rins, seus medos e seus hábitos de leitura. Chegou a ser prefeito de Bordeaux durante as guerras religiosas, quando católicos e protestantes se massacravam, e manteve uma postura de tolerância que quase ninguém sustentava.\n\nOs Ensaios influenciaram Shakespeare, Nietzsche, Rousseau e praticamente toda a tradição do texto em primeira pessoa. Sua pergunta-guia, gravada numa medalha que mandou cunhar, era simplesmente: "Que sei eu?"'
  },

  {
    id: 'emerson',
    author: 'Ralph Waldo Emerson',
    cat: 'autorreconhecimento',
    profiles: ['filosofos', 'literatura'],
    origin: 'norteamericanos',
    role: 'Ensaísta americano (1803–1882)',
    why: 'Abandonou o púlpito para pregar autoconfiança e deu aos Estados Unidos sua primeira voz filosófica própria.',
    title: 'A recusa do púlpito',
    excerpt: 'Perdeu a esposa aos 26 anos, largou a igreja e passou a defender que cada pessoa deve confiar em si mesma.',
    photo: 'Ralph Waldo Emerson ca1857 retouched.jpg',
    text: 'Ralph Waldo Emerson nasceu em Boston, filho de um pastor unitarista que morreu quando o menino tinha oito anos, deixando a família na pobreza. A mãe manteve uma pensão para sustentar os filhos; uma tia excêntrica e culta, Mary Moody Emerson, encarregou-se de sua formação intelectual e o pressionou a estudar. Ele entrou em Harvard aos catorze anos, trabalhando como garçom para pagar os custos.\n\nSeguiu o caminho do pai e virou pastor. Aos 26 anos casou-se com Ellen Tucker, de dezoito. Ela morreu de tuberculose dezessete meses depois. Emerson entrou em colapso. Passou a visitar o túmulo dela diariamente e, segundo seu próprio diário, chegou a abrir o caixão — um episódio que ele registrou em uma única linha seca. Pouco depois renunciou ao ministério, alegando que não conseguia mais celebrar a comunhão com sinceridade.\n\nViajou pela Europa, onde conheceu Wordsworth, Coleridge e Carlyle. Voltou transformado. Instalou-se em Concord, casou-se novamente e começou a dar palestras públicas — o formato que o sustentaria pelo resto da vida, viajando por todo o país.\n\nEm 1836 publicou "Natureza", texto fundador do transcendentalismo, e em 1837 fez o discurso "O Estudioso Americano", que Oliver Wendell Holmes chamou de declaração de independência intelectual dos Estados Unidos. Sua tese era clara: a cultura americana copiava a europeia por insegurança, e cada pessoa — como cada nação — precisava confiar na própria percepção. "Autoconfiança", de 1841, tornou-se o ensaio mais lido dessa ideia.\n\nEmerson foi mentor de Thoreau, apoiou Whitman quando ninguém o levava a sério e se tornou abolicionista declarado. Perdeu o filho de cinco anos para a escarlatina, uma dor que o fez escrever sobre os limites da própria filosofia com honestidade rara. Morreu aos 78 anos em Concord.'
  },

  {
    id: 'drucker',
    author: 'Peter Drucker',
    cat: 'lideranca',
    profiles: ['estrategistas', 'educadores'],
    origin: 'europeus',
    role: 'Pensador da administração (1909–2005)',
    why: 'Praticamente inventou a gestão como disciplina e escreveu 39 livros — o último aos 95 anos.',
    title: 'O homem que inventou a gestão',
    excerpt: 'Fugiu do nazismo, entrou numa montadora para observar e criou o vocabulário com que empresas se pensam até hoje.',
    photo: 'Drucker5789.jpg',
    text: 'Peter Ferdinand Drucker nasceu em Viena, numa casa onde economistas, advogados e cientistas apareciam para jantar — Schumpeter e Freud estavam entre os visitantes. Formou-se em direito na Alemanha e trabalhou como jornalista econômico em Frankfurt. Em 1933, escreveu um ensaio elogiando o pensador judeu-conservador Friedrich Julius Stahl; os nazistas o queimaram e proibiram. Drucker considerou aquilo um sinal e deixou a Alemanha no mesmo ano.\n\nPassou por Londres, onde trabalhou num banco, e emigrou para os Estados Unidos em 1937. Em 1943, a General Motors — então a maior empresa do mundo — fez um convite inédito: que ele passasse dois anos circulando livremente por dentro da companhia, observando como ela funcionava. O resultado foi "Conceito de Corporação", de 1946.\n\nO livro incomodou profundamente a GM, que o tratou como um ataque. Drucker havia sugerido descentralizar decisões, tratar operários como recurso e não como custo, e ouvir os clientes. Toyota e outras empresas japonesas leram e aplicaram. A GM só reconheceria o valor daquelas ideias décadas depois.\n\nDrucker escreveu 39 livros ao longo de sete décadas e cunhou boa parte do vocabulário corrente: "trabalhador do conhecimento", "administração por objetivos", "privatização", "terceirização". Sua posição central era desconfortável para os dois lados: defendia o lucro como condição de sobrevivência, não como propósito, e argumentava que a função de uma empresa está fora dela — no cliente. Criticou publicamente a explosão dos salários de executivos, chamando-a de falha moral.\n\nDeu aulas por trinta anos na universidade que hoje leva seu nome, na Califórnia, e passou boa parte da carreira final consultando organizações sem fins lucrativos de graça. Publicou seu último livro aos 95 anos. Morreu poucos dias antes de completar 96.'
  },

  {
    id: 'nietzsche',
    author: 'Friedrich Nietzsche',
    cat: 'filosofos',
    profiles: ['filosofos', 'literatura'],
    origin: 'europeus',
    role: 'Filósofo alemão (1844–1900)',
    why: 'Foi professor catedrático aos 24 anos, escreveu seus livros centrais doente e quase sem leitores.',
    title: 'O martelo e a solidão',
    excerpt: 'Escreveu entre crises de enxaqueca e quase cego, vendendo pouquíssimos exemplares — e mudou a filosofia ocidental.',
    photo: 'Nietzsche187a.jpg',
    text: 'Friedrich Nietzsche nasceu em Röcken, na Prússia, filho de um pastor luterano que morreu de uma doença cerebral quando o menino tinha quatro anos. O irmão caçula morreu no ano seguinte. Nietzsche cresceu numa casa de mulheres — mãe, avó, irmã e duas tias — e foi um aluno excepcional, especialmente em filologia clássica.\n\nSua carreira acadêmica foi meteórica: aos 24 anos, antes mesmo de concluir o doutorado, a Universidade da Basileia o nomeou professor catedrático, um caso sem precedentes. Tornou-se amigo próximo do compositor Richard Wagner, relação que marcaria sua vida e cuja ruptura, anos depois, foi uma das dores centrais de sua biografia.\n\nServiu como enfermeiro voluntário na guerra franco-prussiana e voltou com difteria e disenteria, que agravaram uma saúde já frágil. Sofria de enxaquecas incapacitantes, vômitos e problemas de visão que o deixaram praticamente incapaz de ler por longos períodos. Em 1879, aos 34 anos, renunciou à cátedra e passou a viver de uma pensão modesta, mudando-se constantemente entre pensões baratas na Suíça, na Itália e no sul da França em busca de climas que aliviassem os sintomas.\n\nFoi nessa condição — doente, sozinho, escrevendo em cadernos durante caminhadas — que produziu quase toda a sua obra: "Assim Falou Zaratustra", "Além do Bem e do Mal", "Genealogia da Moral". Vendia pouquíssimo; chegou a pagar do próprio bolso a impressão de alguns títulos e a distribuir exemplares que ninguém lia.\n\nEm janeiro de 1889, em Turim, teve um colapso mental do qual nunca se recuperou. Passou os últimos onze anos sob os cuidados da mãe e depois da irmã, Elisabeth — que, simpatizante do nacionalismo antissemita que o próprio Nietzsche desprezava, editou e distorceu seus manuscritos inéditos. A reputação dele levaria décadas para se separar dessa falsificação.'
  },

  {
    id: 'austen',
    author: 'Jane Austen',
    cat: 'empoderamento',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Escritora inglesa (1775–1817)',
    why: 'Publicou anonimamente e sem crédito em vida os romances que hoje nunca saem de catálogo.',
    title: 'A ironia como bisturi',
    excerpt: 'Escrevia numa mesinha da sala de estar, escondendo as páginas quando alguém entrava — e dissecou como ninguém a economia do casamento.',
    photo: 'Jane Austen, from A Memoir of Jane Austen (1870).jpg',
    text: 'Jane Austen nasceu em Steventon, no interior da Inglaterra, sétima de oito filhos de um pároco anglicano. A família não era rica, mas era letrada: o pai tinha uma biblioteca de mais de quinhentos volumes e permitia que a filha lesse tudo, inclusive romances, que na época eram considerados leitura duvidosa para moças. Jane e a irmã Cassandra foram inseparáveis a vida toda.\n\nComeçou a escrever cedo, produzindo paródias satíricas para divertir a família. Aos vinte e poucos anos já tinha rascunhos do que viriam a ser "Razão e Sensibilidade", "Orgulho e Preconceito" e "A Abadia de Northanger". Uma tentativa de publicação em 1803 resultou num manuscrito comprado por dez libras e engavetado sem nunca ser impresso.\n\nAos 27 anos recebeu um pedido de casamento de um herdeiro rico, o que teria resolvido a situação financeira da família inteira. Aceitou à noite e recusou na manhã seguinte. Nunca se casou, e viveu com a mãe e a irmã em uma dependência financeira que compreendia bem — e que se tornaria o motor de todos os seus romances, onde o casamento aparece menos como romance do que como transação econômica com consequências para a vida inteira de uma mulher.\n\nA partir de 1809, instalada num chalé em Chawton, retomou a escrita com método. "Razão e Sensibilidade" saiu em 1811, assinado apenas "By a Lady". Todos os seus livros foram publicados anonimamente; o nome dela só apareceu postumamente. Escrevia numa pequena escrivaninha na sala comum e, segundo relatos da família, aproveitava o rangido de uma porta para esconder as páginas quando alguém se aproximava.\n\nMorreu aos 41 anos, provavelmente da doença de Addison, com dois romances ainda inéditos. A popularidade veio depois — e nunca mais parou. Sua precisão sobre dinheiro, classe e as pequenas violências da polidez continua desconfortavelmente exata.'
  },

  {
    id: 'jung',
    author: 'Carl Gustav Jung',
    cat: 'autorreconhecimento',
    profiles: ['psicologos'],
    origin: 'europeus',
    role: 'Psiquiatra suíço (1875–1961)',
    why: 'Rompeu com Freud, atravessou uma crise de seis anos e criou os conceitos de arquétipo, sombra e inconsciente coletivo.',
    title: 'A descida ao próprio subsolo',
    excerpt: 'Depois de romper com Freud, passou anos registrando as próprias visões — e delas tirou toda a sua obra.',
    photo: 'CGJung.jpg',
    text: 'Carl Gustav Jung nasceu em Kesswil, na Suíça, filho de um pastor protestante que, segundo o próprio Jung, havia perdido a fé mas continuava pregando. A mãe sofria de crises psíquicas e passava períodos internada. O menino cresceu solitário, com a sensação — que descreveria em detalhe na velhice — de ter duas personalidades convivendo dentro de si.\n\nFormou-se em medicina e escolheu a psiquiatria quase por acaso, ao ler num manual que ela unia o biológico ao espiritual. Trabalhou no hospital Burghölzli, em Zurique, sob Eugen Bleuler, e desenvolveu o teste de associação de palavras, que lhe deu reputação internacional ainda jovem.\n\nEm 1907 conheceu Freud em Viena. A conversa durou treze horas. Freud passou a vê-lo como seu herdeiro — "meu filho mais velho", "meu príncipe herdeiro" — e Jung presidiu a primeira associação psicanalítica internacional. A ruptura veio em 1913, quando Jung publicou um livro contestando a centralidade da sexualidade na teoria freudiana. O rompimento foi amargo e definitivo.\n\nO que se seguiu foi o período mais decisivo e mais estranho de sua vida. Jung se afastou de tudo, sentindo-se à beira da psicose, e decidiu enfrentar deliberadamente o próprio inconsciente: registrava visões, diálogos internos e imagens, transcrevendo-os e ilustrando-os num volume encadernado em couro vermelho. O Livro Vermelho só foi publicado em 2009, quase cinquenta anos após sua morte.\n\nDessa travessia saíram os conceitos que definiram sua obra: os arquétipos, o inconsciente coletivo, a sombra, a persona, a individuação, os tipos psicológicos que originaram — de forma bastante distorcida — os testes de personalidade populares. Estudou alquimia, mitologia comparada e religiões orientais buscando padrões recorrentes na imaginação humana.\n\nSua conduta durante os anos 1930, à frente de uma associação médica alemã reestruturada pelo regime nazista, permanece objeto de crítica e debate histórico. Morreu aos 85 anos em sua casa às margens do lago de Zurique.'
  },

  {
    id: 'pessoa',
    author: 'Fernando Pessoa',
    cat: 'autorreconhecimento',
    profiles: ['literatura'],
    origin: 'europeus',
    role: 'Poeta português (1888–1935)',
    why: 'Criou mais de setenta autores fictícios com biografias e estilos próprios — e publicou quase nada em vida.',
    title: 'O poeta que era muitos',
    excerpt: 'Deixou uma arca com 25 mil papéis e a obra mais desconcertante da língua portuguesa.',
    photo: 'Fernando Pessoa.jpg',
    text: 'Fernando António Nogueira Pessoa nasceu em Lisboa. O pai morreu de tuberculose quando ele tinha cinco anos; o irmão caçula morreu no ano seguinte. A mãe casou-se novamente com o cônsul português em Durban, na África do Sul, e a família mudou-se para lá. Pessoa cresceu estudando em inglês, língua na qual escreveria por toda a vida e que dominava a ponto de ganhar, aos quinze anos, um prêmio de melhor redação em inglês entre centenas de candidatos.\n\nVoltou a Lisboa aos dezessete anos e nunca mais saiu da cidade. Abandonou o curso superior e passou a vida trabalhando como tradutor de correspondência comercial para casas de importação — um emprego modesto e intermitente que lhe deixava tempo livre e o mantinha permanentemente sem dinheiro.\n\nEm 1914 aconteceu o que ele chamaria de "dia triunfal": escreveu de um só fôlego uma sequência de poemas que atribuiu a um poeta que não existia, Alberto Caeiro. Em seguida inventou Ricardo Reis, médico e monarquista que escrevia odes clássicas, e Álvaro de Campos, engenheiro naval eufórico e depois desiludido. Não eram pseudônimos: eram heterônimos, cada um com data de nascimento, biografia, estilo, opiniões próprias e até discordâncias entre si. Chegou a criar mais de setenta figuras assim.\n\nPublicou pouquíssimo em vida — um único livro de poemas em português, "Mensagem", em 1934. Envolveu-se em revistas de vanguarda, escreveu manifestos, projetou editoras que fracassaram. Teve uma única relação amorosa conhecida, com Ophélia Queiroz, interrompida por ele em cartas que misturam ternura e fuga.\n\nMorreu aos 47 anos de cirrose. Deixou uma arca de madeira com mais de 25 mil documentos inéditos, ainda hoje em processo de organização. Dela saiu o "Livro do Desassossego", atribuído ao semi-heterônimo Bernardo Soares, um dos textos mais lidos da literatura portuguesa — publicado quase meio século depois de sua morte.'
  },

  {
    id: 'platao',
    author: 'Platão',
    cat: 'filosofos',
    profiles: ['filosofos', 'educadores'],
    origin: 'antiguidade',
    role: 'Filósofo grego (c. 428–348 a.C.)',
    why: 'Fundou a primeira universidade do Ocidente e escreveu os diálogos que estruturam a filosofia até hoje.',
    title: 'A escola que durou novecentos anos',
    excerpt: 'Viu seu mestre ser condenado à morte pela cidade — e passou a vida tentando imaginar uma cidade melhor.',
    photo: 'Plato Silanion Musei Capitolini MC1377.jpg',
    text: 'Platão nasceu em Atenas, numa família aristocrática com parentes envolvidos na política da cidade. Foi preparado para essa carreira e, segundo relata em suas cartas, chegou a considerá-la seriamente na juventude. Dois acontecimentos o afastaram: primeiro a brutalidade do regime oligárquico dos Trinta Tiranos, do qual participavam parentes seus; depois, sob a democracia restaurada, o julgamento e a execução de Sócrates em 399 a.C.\n\nSócrates, seu mestre, foi condenado à morte por corromper a juventude e desrespeitar os deuses da cidade. Platão tinha cerca de 28 anos. A experiência de ver o homem que considerava o mais justo de Atenas ser morto legalmente por ela definiu sua obra inteira: praticamente todos os seus diálogos têm Sócrates como personagem central, e o problema recorrente é como organizar uma sociedade que não faça isso.\n\nViajou pelo Egito, pela Itália e pela Sicília. Em Siracusa, tentou por três vezes influenciar tiranos locais na direção de um governo filosófico. As três tentativas fracassaram; numa delas acabou vendido como escravo e teve de ser resgatado por um amigo.\n\nPor volta de 387 a.C. fundou a Academia, num bosque nos arredores de Atenas — geralmente considerada a primeira instituição de ensino superior do Ocidente. Ela funcionaria por mais de novecentos anos, até ser fechada no século VI. Aristóteles estudou lá por vinte anos.\n\nSua obra sobrevive quase integralmente, o que é raríssimo na Antiguidade: cerca de trinta e cinco diálogos. Neles estão a alegoria da caverna, a teoria das formas, a discussão sobre justiça de "A República" — cujo modelo político, vale dizer, é bastante autoritário e vem sendo criticado desde então. O filósofo Alfred North Whitehead resumiu a herança com um exagero deliberado: toda a tradição filosófica europeia seria uma série de notas de rodapé a Platão.'
  },

  {
    id: 'socrates',
    author: 'Sócrates',
    cat: 'filosofos',
    profiles: ['filosofos', 'educadores'],
    origin: 'antiguidade',
    role: 'Filósofo grego (c. 470–399 a.C.)',
    why: 'Nunca escreveu uma linha e mesmo assim dividiu a história da filosofia em antes e depois dele.',
    title: 'O incômodo público de Atenas',
    excerpt: 'Andava descalço fazendo perguntas na praça até que a cidade decidiu que era mais fácil matá-lo.',
    photo: 'Socrates Louvre.jpg',
    text: 'Sócrates nasceu em Atenas, filho de um escultor e de uma parteira — profissão materna que ele usaria como metáfora do próprio método: dizia não ensinar nada, apenas ajudar as pessoas a parir as ideias que já carregavam. Serviu como soldado de infantaria em pelo menos três campanhas e foi elogiado pela coragem, inclusive por salvar a vida de Alcibíades em combate.\n\nNão cobrava por ensinar, ao contrário dos sofistas, e vivia em evidente pobreza, andando descalço pela cidade. Passava os dias na ágora abordando políticos, poetas e artesãos com perguntas aparentemente simples: o que é a coragem? o que é a justiça? A conversa quase sempre terminava com o interlocutor percebendo que não sabia definir aquilo que julgava conhecer. Isso lhe rendeu discípulos devotados e inimigos poderosos em igual medida.\n\nSegundo Platão, o oráculo de Delfos declarou que ninguém era mais sábio que Sócrates. Ele passou anos tentando refutar aquilo, interrogando quem tinha fama de sábio, até concluir a única interpretação possível: era o mais sábio apenas porque sabia que não sabia.\n\nEm 399 a.C., aos setenta anos, foi levado a julgamento acusado de não reconhecer os deuses da cidade e de corromper a juventude. Atenas havia perdido a guerra do Peloponeso e vivia um período de humilhação e desconfiança; um velho que passava o dia questionando as certezas públicas era um alvo conveniente. Recusou-se a propor o exílio como pena alternativa e sugeriu, com ironia, que a cidade deveria alimentá-lo às custas públicas pelos serviços prestados. Foi condenado à morte.\n\nAmigos organizaram sua fuga. Ele recusou, argumentando que não podia passar a vida defendendo as leis e desobedecê-las quando lhe fossem desfavoráveis. Bebeu a cicuta cercado de discípulos. Nunca escreveu nada: tudo o que sabemos vem de Platão, Xenofonte e Aristófanes — que discordam entre si.'
  },

  {
    id: 'machado',
    author: 'Machado de Assis',
    cat: 'filosofos',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Escritor brasileiro (1839–1908)',
    why: 'Neto de escravizados, gago e epilético, tornou-se o maior escritor da literatura brasileira.',
    title: 'O bruxo do Cosme Velho',
    excerpt: 'Autodidata, saiu de um morro carioca para fundar a Academia Brasileira de Letras e reinventar o romance.',
    photo: 'Machado de Assis 1904.jpg',
    text: 'Joaquim Maria Machado de Assis nasceu no Morro do Livramento, no Rio de Janeiro, filho de um pintor de paredes mulato — neto de escravizados alforriados — e de uma lavadeira açoriana. A mãe morreu quando ele era criança. Foi criado num ambiente pobre, era gago e sofria de epilepsia, condições que o acompanhariam a vida toda.\n\nNunca frequentou uma universidade. Aprendeu francês com um padeiro imigrante, e depois inglês, alemão e grego sozinho. Aos dezessete anos entrou como aprendiz de tipógrafo na Imprensa Nacional, onde foi notado pelo escritor Manuel Antônio de Almeida. Passou a revisor, depois a jornalista, cronista, tradutor e crítico. Entrou por concurso no funcionalismo público, onde teve uma carreira sólida e discreta.\n\nCasou-se com Carolina Augusta Xavier de Novais, portuguesa de família aristocrática, cujos parentes se opuseram ao casamento com um mulato pobre. Viveram juntos trinta e cinco anos. A morte dela, em 1904, o devastou; o soneto que escreveu na ocasião é um dos textos mais desnudados de sua obra.\n\nSua carreira literária tem uma virada nítida. Os primeiros romances são românticos e convencionais. Em 1881, aos 41 anos, publica "Memórias Póstumas de Brás Cubas", narrado por um defunto que escreve depois de morto, com capítulos de uma linha, digressões, ironia corrosiva e um leitor constantemente interpelado. Nada parecido existia em português. Vieram "Quincas Borba", "Dom Casmurro" — cuja pergunta sobre a traição de Capitu ninguém consegue responder até hoje — e "Memorial de Aires".\n\nEm 1897 fundou a Academia Brasileira de Letras e foi seu presidente até morrer, onze anos depois. Tratou da escravidão e do racismo de forma oblíqua e mordaz, o que gerou décadas de debate sobre seu silêncio aparente. Morreu no Cosme Velho, sozinho e famoso.'
  },

  {
    id: 'clarice',
    author: 'Clarice Lispector',
    cat: 'autorreconhecimento',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Escritora brasileira (1920–1977)',
    why: 'Chegou ao Brasil como refugiada com dois meses de vida e escreveu a prosa mais original do país.',
    title: 'A estrangeira que reinventou o português',
    excerpt: 'Fugiu de pogroms na Ucrânia ainda bebê e criou uma escrita que ninguém conseguiu imitar.',
    photo: 'Clarice Lispector.tif',
    text: 'Chaya Pinkhasovna Lispector nasceu numa aldeia da Ucrânia enquanto a família fugia dos pogroms que se seguiram à Revolução Russa. A mãe havia sido violentada durante os ataques e contraiu sífilis. Chegaram ao Brasil em 1922, quando a menina tinha pouco mais de um ano, e ela foi rebatizada Clarice. Cresceram em Recife, na pobreza. A mãe morreu quando Clarice tinha nove anos.\n\nA família mudou-se para o Rio de Janeiro. Clarice estudou Direito — uma das poucas mulheres da turma — e trabalhou como jornalista na Agência Nacional, um dos raros espaços de imprensa então abertos a mulheres. Aos 23 anos publicou "Perto do Coração Selvagem", escrito enquanto ainda cursava a faculdade. O crítico Álvaro Lins não sabia como classificá-lo; outro crítico afirmou que nada semelhante havia sido escrito em português.\n\nCasou-se com um diplomata e passou quase quinze anos fora do Brasil — Itália durante a guerra, onde trabalhou como voluntária num hospital militar, depois Suíça, Inglaterra e Estados Unidos. Detestou a vida diplomática e a descreveu como um exílio dentro do exílio. Escrevia em português no meio de casas onde ninguém falava a língua. Separou-se em 1959 e voltou ao Rio com os dois filhos, um deles com esquizofrenia diagnosticada anos depois.\n\nPara se sustentar, escreveu crônicas semanais no Jornal do Brasil e colunas femininas sob pseudônimo, dando conselhos de beleza. Publicou "A Paixão Segundo G.H.", "Laços de Família", "Água Viva". Sua escrita abandona enredo em favor do instante: uma mulher olha uma barata, uma galinha foge no quintal, e a linguagem se torce tentando alcançar algo que ela mesma admite não conseguir dizer.\n\nEm 1966 adormeceu fumando e sofreu um incêndio que quase lhe custou a mão direita. Morreu de câncer aos 56 anos, na véspera de seu aniversário, tendo acabado de publicar "A Hora da Estrela".'
  },

  {
    id: 'graciliano',
    author: 'Graciliano Ramos',
    cat: 'dificeis',
    profiles: ['literatura'],
    origin: 'brasileiros',
    role: 'Escritor brasileiro (1892–1953)',
    why: 'Escreveu a prosa mais seca da literatura brasileira e um relato definitivo sobre o cárcere político.',
    title: 'A palavra reduzida ao osso',
    excerpt: 'Prefeito do interior de Alagoas, preso sem acusação formal, autor de "Vidas Secas" e "Memórias do Cárcere".',
    photo: 'Graciliano Ramos, 1930s.jpg',
    text: 'Graciliano Ramos nasceu em Quebrangulo, Alagoas, o mais velho de dezesseis filhos. A infância no sertão, que descreveria com dureza em "Infância", foi marcada por um pai autoritário e por uma seca que obrigou a família a se mudar. Aprendeu a ler tarde e com dificuldade, mas cedo desenvolveu uma obsessão por palavras exatas.\n\nTrabalhou como comerciante e jornalista, viveu um período no Rio de Janeiro e voltou para Palmeira dos Índios, onde assumiu a loja da família e depois, em 1928, foi eleito prefeito. Seus relatórios anuais de prefeitura — documentos administrativos secos, irônicos e brutalmente honestos sobre a miséria municipal — chamaram a atenção de intelectuais no Rio, entre eles Augusto Frederico Schmidt, que o incentivou a publicar. Foi assim que "Caetés" saiu em 1933.\n\nVieram "São Bernardo", narrado por um fazendeiro que destrói tudo o que ama, e "Angústia", escrito em estado de crise. Em 1936, durante o Estado Novo, foi preso sem acusação formal, sem julgamento e sem jamais saber oficialmente o motivo. Passou dez meses encarcerado, parte deles na Colônia Correcional de Dois Rios, na Ilha Grande, em condições degradantes, entre presos comuns e políticos.\n\nSolto e sem dinheiro, escreveu "Vidas Secas" em 1938 — a história de Fabiano, Sinhá Vitória, dois meninos e a cachorra Baleia atravessando a seca. É um romance sobre pessoas que quase não têm linguagem, escrito por um autor que cortava tudo o que fosse supérfluo. O capítulo da morte de Baleia é um dos mais citados da literatura brasileira.\n\nFiliou-se ao Partido Comunista em 1945 e viajou à União Soviética, sobre a qual escreveu com ceticismo. Trabalhou até o fim como revisor e inspetor de ensino. Morreu de câncer no pulmão aos 60 anos, deixando quase pronto "Memórias do Cárcere", publicado postumamente — o relato mais importante já escrito no Brasil sobre a prisão política.'
  },

  {
    id: 'munger',
    author: 'Charlie Munger',
    cat: 'financas',
    profiles: ['investidores'],
    origin: 'norteamericanos',
    role: 'Investidor americano (1924–2023)',
    why: 'Sócio de Buffett por mais de quarenta anos, defendia que evitar a burrice rende mais que buscar a genialidade.',
    title: 'O sócio que dizia não',
    excerpt: 'Perdeu um filho, a visão de um olho e a fortuna antes dos 40 — e reconstruiu tudo com um método próprio.',
    photo: 'Charlie Munger 2010.jpg',
    text: 'Charles Thomas Munger nasceu em Omaha, no Nebraska — a mesma cidade de Warren Buffett, em cuja mercearia da família chegou a trabalhar quando adolescente, sem que os dois se conhecessem na época. Abandonou a universidade para servir na Força Aérea durante a Segunda Guerra, onde estudou meteorologia. Depois, sem diploma de graduação, conseguiu ser aceito na Faculdade de Direito de Harvard e se formou com distinção.\n\nOs anos seguintes foram brutais. Divorciou-se aos 29 anos e ficou praticamente sem nada. Pouco depois, seu filho Teddy, de nove anos, foi diagnosticado com leucemia e morreu — Munger contava que caminhava pelas ruas de Pasadena chorando depois de visitá-lo no hospital. Anos mais tarde, uma cirurgia de catarata malsucedida o deixou cego de um olho, que precisou ser removido.\n\nConstruiu carreira primeiro como advogado imobiliário e depois como investidor. Conheceu Buffett num jantar em Omaha em 1959; segundo ambos, a conversa foi imediata e intensa. Munger tornou-se vice-presidente da Berkshire Hathaway e o interlocutor que Buffett credita por ter mudado sua estratégia: em vez de comprar empresas medíocres muito baratas, comprar empresas excelentes a preços razoáveis.\n\nSua contribuição intelectual mais própria foi a defesa dos "modelos mentais": a ideia de que ninguém deveria depender de uma única disciplina para pensar, e que é preciso tomar emprestado o que há de melhor em psicologia, física, biologia, matemática e história. Catalogou vinte e cinco vieses cognitivos que levam ao erro humano, num discurso que se tornou clássico.\n\nEra conhecido pela franqueza desconfortável nas reuniões anuais da Berkshire, onde frequentemente respondia apenas "não tenho nada a acrescentar". Doou centenas de milhões a universidades e hospitais. Morreu aos 99 anos, poucas semanas antes de completar cem.'
  },

  {
    id: 'carnegie',
    author: 'Dale Carnegie',
    cat: 'manipulacao',
    profiles: ['estrategistas', 'educadores'],
    origin: 'norteamericanos',
    role: 'Escritor e palestrante (1888–1955)',
    why: 'Filho de fazendeiros falidos, escreveu o livro de relações humanas mais vendido do século XX.',
    title: 'O curso que virou livro',
    excerpt: 'Vendeu banha, ensinou oratória em porões da associação cristã e criou um método que treinou milhões.',
    photo: 'Dale Carnegie.jpg',
    text: 'Dale Carnegie nasceu numa fazenda pobre do Missouri. A família perdeu tudo em enchentes e crises agrícolas mais de uma vez. Ele cavalgava cinco quilômetros até a faculdade porque não tinha dinheiro para morar na cidade, e entrou nas equipes de debate depois de ser rejeitado várias vezes — descobrindo ali que falar em público era uma habilidade treinável, não um dom.\n\nTentou várias carreiras. Vendeu cursos por correspondência a fazendeiros, depois banha e sabão para a Armour & Company, tornando-se um dos melhores vendedores da empresa em seu território. Largou tudo para tentar ser ator em Nova York, fracassou, e voltou a vender — dessa vez caminhões, sem entusiasmo nenhum.\n\nEm 1912, sem emprego e morando numa pensão barata, convenceu a Associação Cristã de Moços de Nova York a deixá-lo dar um curso de oratória. Pediu comissão sobre a receita em vez de salário fixo, porque a instituição não acreditava que daria certo. Deu. Em pouco tempo estava ganhando mais do que qualquer instrutor da casa e o curso se espalhou por outras cidades.\n\nCarnegie percebeu, ouvindo os alunos, que o problema real não era falar em público: era lidar com pessoas. Passou anos coletando casos, entrevistando figuras públicas e testando princípios nas próprias turmas. Em 1936 publicou "Como Fazer Amigos e Influenciar Pessoas", reunindo o que o curso já ensinava havia mais de vinte anos. Vendeu milhões de exemplares e nunca saiu de catálogo.\n\nO livro é criticado por reduzir relações a técnica e elogiado por levar a sério algo que a educação formal ignorava: a competência social se aprende. Carnegie também escreveu sobre ansiedade e preocupação, tema que o afligia pessoalmente. Morreu aos 66 anos, de linfoma, deixando uma rede de treinamento que continua operando em dezenas de países.'
  }
];
