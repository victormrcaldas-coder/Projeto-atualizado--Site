/* MeMotiva — dados/22-biblioteca-paginas-de-obra.js
   Obras extras, descrições novas e páginas únicas das obras (OBRA_PAGINA).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 6 — BIBLIOTECA EXPANDIDA E DESCRIÇÕES NOVAS
   ----------------------------------------------------------------
   1. OBRAS_EXTRA: obras dos autores aprofundados nesta fase, com o
      tipo correto para alimentar os filtros de produção.
   2. DESC_NOVA: descrições reescritas no modelo pedido — dizem do
      que a obra trata e dão vontade de abrir.
   3. OBRA_PAGINA: conteúdo da página única das obras principais.
   ================================================================ */
const OBRAS_EXTRA = {
  /* ---------- filosofia e política ---------- */
  'John Stuart Mill': [
    ['Sobre a Liberdade', 'tratado', 1859, 'Defende que a única razão legítima para o poder limitar alguém é impedir dano a outra pessoa. Escrito com Harriet Taylor, é o texto que sustenta boa parte das liberdades civis modernas.'],
    ['A Sujeição das Mulheres', 'tratado', 1869, 'Argumenta que a desigualdade entre homens e mulheres é herança de força bruta, não de natureza, e que o casamento da época funcionava como uma forma legal de tutela.'],
    ['Utilitarismo', 'tratado', 1863, 'Reformula a doutrina de Bentham distinguindo prazeres superiores e inferiores, e responde às objeções de quem via na busca do prazer uma moral rasa.'],
    ['Autobiografia', 'memoria', 1873, 'Conta a educação extrema que recebeu do pai, o colapso nervoso aos vinte anos e a recuperação pela poesia — um dos relatos mais honestos já escritos sobre formação intelectual.'],
    ['Princípios de Economia Política', 'tratado', 1848, 'Manual que dominou o ensino de economia por meio século, unindo a análise clássica de mercados a propostas de reforma social.'],
    ['Considerações sobre o Governo Representativo', 'tratado', 1861, 'Discute que desenho institucional torna a representação real, incluindo a proteção das minorias contra a maioria eleita.']
  ],
  'Francis Bacon': [
    ['Novum Organum', 'tratado', 1620, 'Propõe substituir a lógica dedutiva de Aristóteles por um método baseado em observação e experimento, e descreve os quatro "ídolos" que distorcem o que a mente enxerga.'],
    ['Ensaios', 'ensaio', 1597, 'Textos curtos e diretos sobre verdade, morte, amizade, riqueza, viagem e estudo, escritos numa prosa que fixou o gênero em inglês.'],
    ['A Nova Atlântida', 'livro', 1627, 'Utopia inacabada sobre uma ilha governada por uma casa de pesquisa científica — projeto que inspiraria a criação da Royal Society.'],
    ['O Avanço do Conhecimento', 'tratado', 1605, 'Mapeia todo o saber humano da época e aponta onde ele falhava, propondo um programa coletivo de investigação.']
  ],
  'William James': [
    ['Princípios de Psicologia', 'tratado', 1890, 'Obra em dois volumes que fundou a psicologia americana, com os capítulos sobre hábito, atenção e fluxo de consciência que ainda são citados.'],
    ['As Variedades da Experiência Religiosa', 'ensaio', 1902, 'Estuda a conversão, o misticismo e a santidade como fenômenos psicológicos, sem defender nem atacar a fé.'],
    ['Pragmatismo', 'filosofia', 1907, 'Defende que o valor de uma ideia se mede pelas diferenças concretas que ela produz na experiência.'],
    ['A Vontade de Crer', 'ensaio', 1896, 'Argumenta que há situações em que decidir acreditar antes da prova é legítimo, e até necessário para agir.']
  ],
  'Henry David Thoreau': [
    ['Walden', 'livro', 1854, 'Relato dos dois anos que passou numa cabana à beira de um lago, testando de quanto uma vida realmente precisa. Virou fundação do pensamento ambiental moderno.'],
    ['Desobediência Civil', 'ensaio', 1849, 'Escrito depois de uma noite na cadeia por não pagar imposto a um Estado escravista, defende que a consciência vem antes da lei. Gandhi e Martin Luther King o leram.'],
    ['Uma Semana nos Rios Concord e Merrimack', 'livro', 1849, 'Diário de uma viagem de barco com o irmão, misturando paisagem, filosofia e luto.'],
    ['Diários', 'diario', 1862, 'Catorze volumes de anotações naturalistas tão precisas que hoje servem de referência para pesquisadores do clima.']
  ],
  'Mary Wollstonecraft': [
    ['Reivindicação dos Direitos da Mulher', 'tratado', 1792, 'Sustenta que a suposta frivolidade feminina é produto da educação recebida, e não da natureza — e exige para as meninas a mesma instrução dada aos meninos.'],
    ['Reivindicação dos Direitos do Homem', 'tratado', 1790, 'Resposta rápida e contundente ao ataque de Edmund Burke à Revolução Francesa, escrita em poucas semanas.'],
    ['Maria, ou os Erros da Mulher', 'romance', 1798, 'Romance inacabado sobre uma mulher internada à força pelo marido, denunciando o que o casamento permitia legalmente.'],
    ['Cartas Escritas na Suécia, Noruega e Dinamarca', 'carta', 1796, 'Relato de viagem que mistura observação social e intimidade, e que fez William Godwin se apaixonar por ela.']
  ],
  'Blaise Pascal': [
    ['Pensamentos', 'aforismo', 1670, 'Fragmentos de uma apologia do cristianismo que ele não chegou a terminar. Contêm a aposta, as razões do coração e o retrato do ser humano dividido entre miséria e grandeza.'],
    ['Cartas Provinciais', 'carta', 1656, 'Polêmica devastadora contra a casuística jesuítica, escrita com tanta graça que virou modelo de prosa francesa.'],
    ['Tratado do Vácuo', 'ciencia', 1651, 'Defende que o vazio existe, contra o consenso aristotélico, a partir de experimentos com mercúrio feitos na montanha.'],
    ['A Pascaline', 'invento', 1642, 'Calculadora mecânica construída aos dezenove anos para aliviar o trabalho do pai, coletor de impostos.']
  ],
  'David Hume': [
    ['Tratado da Natureza Humana', 'tratado', 1739, 'Escrito aos 26 anos e ignorado na época, ataca a ideia de causalidade necessária e descreve o eu como um feixe de percepções.'],
    ['Investigação sobre o Entendimento Humano', 'tratado', 1748, 'Versão mais enxuta e legível do Tratado, com o argumento contra os milagres que provocou escândalo.'],
    ['Diálogos sobre a Religião Natural', 'dialogo', 1779, 'Publicado após sua morte, encena três personagens discutindo se a ordem do mundo prova a existência de um criador.'],
    ['História da Inglaterra', 'livro', 1754, 'Best-seller que o sustentou financeiramente e foi a história padrão do país por mais de um século.']
  ],
  'Thomas Hobbes': [
    ['Leviatã', 'tratado', 1651, 'Parte do princípio de que, sem um poder comum, a vida vira guerra de todos contra todos, e conclui que a segurança justifica um soberano forte. Escrito no exílio, durante a guerra civil inglesa.'],
    ['Do Cidadão', 'tratado', 1642, 'Versão anterior e mais direta de sua teoria política, escrita em latim para circular na Europa.'],
    ['Behemoth', 'livro', 1681, 'Análise em forma de diálogo sobre as causas da guerra civil inglesa, escrita por quem a viveu.']
  ],
  Montesquieu: [
    ['O Espírito das Leis', 'tratado', 1748, 'Vinte anos de estudo comparando regimes, climas e costumes para explicar por que uma lei funciona num lugar e falha em outro. Daqui vem a separação entre os três poderes.'],
    ['Cartas Persas', 'romance', 1721, 'Dois viajantes persas escrevem sobre a França e desmontam com ironia a corte, a igreja e os costumes do país.'],
    ['Considerações sobre as Causas da Grandeza dos Romanos', 'ensaio', 1734, 'Explica ascensão e queda de Roma por causas institucionais e sociais, sem recorrer ao destino.']
  ],
  'René Descartes': [
    ['Discurso do Método', 'tratado', 1637, 'Conta em primeira pessoa como decidiu recomeçar do zero e apresenta as quatro regras para conduzir bem a razão. Publicado em francês, para ser lido por qualquer um.'],
    ['Meditações Metafísicas', 'tratado', 1641, 'Seis dias de dúvida radical até chegar ao que não pode ser negado, e a tentativa de reconstruir o conhecimento a partir dali.'],
    ['Geometria', 'ciencia', 1637, 'Une álgebra e geometria e cria o sistema de coordenadas que leva seu nome.'],
    ['Princípios da Filosofia', 'tratado', 1644, 'Síntese de sua física e metafísica, escrita como manual para uso universitário.']
  ],
  'Tomás de Aquino': [
    ['Suma Teológica', 'tratado', 1274, 'Milhares de questões organizadas como debate — objeção, resposta, réplica — que uniram a filosofia de Aristóteles à teologia cristã. Ficou inacabada.'],
    ['Suma Contra os Gentios', 'tratado', 1264, 'Argumentação dirigida a quem não aceita a autoridade das Escrituras, construída só com razão.'],
    ['Comentário à Ética a Nicômaco', 'ensaio', 1272, 'Leitura minuciosa de Aristóteles que reintroduziu a ética das virtudes no pensamento cristão.']
  ],
  'Karl Marx': [
    ['O Capital', 'tratado', 1867, 'Analisa a mercadoria, o valor e a acumulação para explicar como o lucro se forma. Escrito ao longo de décadas na sala de leitura do Museu Britânico.'],
    ['Manifesto Comunista', 'ensaio', 1848, 'Encomendado por uma liga de trabalhadores e publicado semanas antes das revoluções de 1848, é um dos textos políticos mais difundidos da história.'],
    ['Manuscritos Econômico-Filosóficos', 'ensaio', 1844, 'Cadernos de juventude, publicados só em 1932, onde aparece a análise do trabalho alienado.'],
    ['O 18 de Brumário de Luís Bonaparte', 'ensaio', 1852, 'Estuda o golpe de 1851 na França e mostra como uma classe pode ser representada por quem não pertence a ela.']
  ],
  'Alexis de Tocqueville': [
    ['A Democracia na América', 'tratado', 1835, 'Escrito após nove meses viajando pelos Estados Unidos, descreve como a igualdade molda costumes, imprensa e família — e alerta para a tirania da maioria.'],
    ['O Antigo Regime e a Revolução', 'livro', 1856, 'Mostra que a Revolução Francesa continuou a centralização que já vinha da monarquia, em vez de rompê-la.'],
    ['Lembranças de 1848', 'memoria', 1893, 'Relato pessoal e ácido dos acontecimentos revolucionários que ele viveu como deputado.']
  ],
  'Nicolau Maquiavel': [
    ['O Príncipe', 'tratado', 1532, 'Descreve como o poder é conquistado e mantido de fato, sem julgar se deveria ser assim. Escrito no exílio, na esperança de reconquistar um cargo que nunca voltou.'],
    ['Discursos sobre a Primeira Década de Tito Lívio', 'tratado', 1531, 'Muito menos lido que "O Príncipe" e bem mais republicano: defende o conflito social como fonte de liberdade.'],
    ['A Arte da Guerra', 'tratado', 1521, 'Defende milícias de cidadãos contra o uso de mercenários, com base no que observou como funcionário militar de Florença.'],
    ['A Mandrágora', 'teatro', 1518, 'Comédia sobre um golpe amoroso em Florença, considerada uma das melhores peças do Renascimento italiano.']
  ],
  'Adam Smith': [
    ['A Riqueza das Nações', 'tratado', 1776, 'Explica como a divisão do trabalho multiplica a produção e como os preços se formam. Fundou a economia como campo próprio — e também critica o conluio entre comerciantes.'],
    ['Teoria dos Sentimentos Morais', 'tratado', 1759, 'Seu primeiro livro e, segundo ele, o mais importante: parte da capacidade humana de se colocar no lugar do outro para explicar o juízo moral.'],
    ['Ensaios Filosóficos', 'ensaio', 1795, 'Textos póstumos sobre história da astronomia, das artes e da linguagem.']
  ],
  'Jean-Paul Sartre': [
    ['O Ser e o Nada', 'tratado', 1943, 'Tratado central do existencialismo francês, escrito durante a ocupação. Apresenta a liberdade como condição inescapável e a má-fé como a fuga dessa responsabilidade.'],
    ['A Náusea', 'romance', 1938, 'Antoine Roquentin descobre, num café de província, que as coisas existem sem justificativa nenhuma — e o enjoo que isso provoca.'],
    ['O Existencialismo é um Humanismo', 'discurso', 1946, 'Conferência que popularizou o existencialismo e respondeu à acusação de que ele seria uma filosofia do desespero.'],
    ['As Palavras', 'memoria', 1964, 'Autobiografia da infância que lhe rendeu o Nobel — e que ele recusou.'],
    ['Entre Quatro Paredes', 'teatro', 1944, 'Três pessoas trancadas numa sala descobrem que o inferno não tem fogo nem grades.']
  ],
  'Simone Weil': [
    ['O Enraizamento', 'ensaio', 1949, 'Escrito em Londres para a França Livre, propõe reconstruir o país a partir de obrigações, e não de direitos abstratos.'],
    ['A Condição Operária', 'ensaio', 1951, 'Diário e reflexões dos meses em que trabalhou como operária não qualificada em fábricas de automóveis.'],
    ['A Gravidade e a Graça', 'aforismo', 1947, 'Fragmentos de cadernos sobre atenção, desapego e sofrimento, organizados por Gustave Thibon após sua morte.'],
    ['Reflexões sobre as Causas da Liberdade e da Opressão Social', 'ensaio', 1934, 'Crítica precoce e independente tanto do capitalismo quanto do socialismo de Estado.']
  ],
  'Baltasar Gracián': [
    ['A Arte da Prudência', 'aforismo', 1647, 'Trezentos aforismos comentados sobre reputação, tempo certo de agir e defesa contra a inveja. Schopenhauer o traduziu e o carregava consigo.'],
    ['O Criticón', 'romance', 1651, 'Alegoria em três partes que acompanha dois personagens pela infância, maturidade e velhice do mundo.'],
    ['O Herói', 'ensaio', 1637, 'Primeiro livro, publicado sob pseudônimo, sobre as qualidades que distinguem quem lidera.']
  ],
  'Samuel Johnson': [
    ['A Dictionary of the English Language', 'livro', 1755, 'Nove anos de trabalho para definir mais de quarenta mil palavras, cada uma ilustrada com citações reais — método que criou a lexicografia moderna.'],
    ['Vidas dos Poetas', 'biografia', 1779, 'Cinquenta e dois retratos críticos de poetas ingleses, marco da crítica literária na língua.'],
    ['Rasselas', 'romance', 1759, 'Escrito em uma semana para pagar o enterro da mãe, acompanha um príncipe que sai do vale feliz em busca de uma vida com sentido.'],
    ['O Rambler', 'ensaio', 1752, 'Ensaios periódicos sobre moral, literatura e vida cotidiana, publicados duas vezes por semana.']
  ],
  Heráclito: [['Fragmentos', 'aforismo', 'séc. V a.C.', 'Cerca de cem trechos sobreviventes de uma obra perdida, escritos em enigmas: o rio que nunca é o mesmo, a unidade dos opostos, o logos que ordena a mudança.']],
  Krishna: [
    ['Bhagavad Gita', 'sagrado', 'séc. II a.C.', 'Diálogo de setecentos versos entre Krishna e o guerreiro Arjuna às vésperas de uma batalha, sobre dever, ação e desapego do resultado. O texto espiritual mais lido da Índia.'],
    ['Mahabharata', 'sagrado', 'séc. IV a.C.', 'Epopeia indiana de cerca de cem mil versos, na qual o Bhagavad Gita está inserido.']
  ],
  'Jesus Cristo': [
    ['Sermão da Montanha', 'sagrado', 'séc. I', 'As bem-aventuranças, o amor aos inimigos e a crítica à religiosidade de fachada, reunidos nos capítulos 5 a 7 do Evangelho de Mateus.'],
    ['Parábolas', 'sagrado', 'séc. I', 'Histórias curtas do cotidiano rural e doméstico usadas como forma de ensino — o filho pródigo, o bom samaritano, o semeador.']
  ],
  'Apóstolo Paulo': [
    ['Carta aos Romanos', 'carta', 57, 'A mais sistemática de suas cartas, escrita a uma comunidade que ele ainda não conhecia, para expor o que entendia por graça e justificação.'],
    ['Primeira Carta aos Coríntios', 'carta', 54, 'Responde a conflitos concretos de uma comunidade dividida e contém, no capítulo 13, um dos textos sobre o amor mais lidos do mundo.'],
    ['Carta aos Gálatas', 'carta', 50, 'Defende com veemência que os não judeus podem entrar na comunidade cristã sem adotar a lei mosaica.'],
    ['Primeira Carta aos Tessalonicenses', 'carta', 50, 'O texto cristão mais antigo que existe, anterior a todos os Evangelhos.']
  ],
  Hillel: [
    ['Pirkei Avot', 'sagrado', 'séc. II', 'Tratado da Mishná com máximas éticas dos sábios, entre elas as três perguntas encadeadas de Hillel sobre responsabilidade e urgência.'],
    ['Prosbul', 'feito', 'séc. I a.C.', 'Ajuste jurídico criado por Hillel para manter o crédito funcionando apesar do perdão de dívidas do ano sabático, protegendo justamente os mais pobres.']
  ],
  'Madre Teresa de Calcutá': [
    ['Missionárias da Caridade', 'feito', 1950, 'Congregação fundada em Calcutá que chegou a mais de setecentas casas em mais de cem países, dedicadas a moribundos, leprosos e órfãos.'],
    ['Vem, Seja Minha Luz', 'carta', 2007, 'Correspondência publicada após sua morte, revelando quase quatro décadas de silêncio interior que ela nunca tornou público.'],
    ['Nobel da Paz', 'feito', 1979, 'Recebeu o prêmio e pediu que o dinheiro do banquete de honra fosse usado com os pobres de Calcutá.']
  ],

  /* ---------- negócios, gestão e investimentos ---------- */
  'John C. Maxwell': [
    ['As 21 Irrefutáveis Leis da Liderança', 'manual', 1998, 'Organiza em princípios testáveis o que o autor aprendeu liderando voluntários — gente que ninguém pode obrigar a nada.'],
    ['Desenvolvendo o Líder Dentro de Você', 'manual', 1993, 'Primeiro grande livro do autor, defende que liderança é influência construída, e não cargo recebido.'],
    ['Os 5 Níveis de Liderança', 'manual', 2011, 'Descreve a escada que vai da posição ao pináculo, com a ideia de que cada degrau é conquistado, não concedido.'],
    ['Vencendo com as Pessoas', 'manual', 2004, 'Vinte e cinco princípios de relacionamento aplicados a equipes, família e vida pública.'],
    ['Às Vezes Se Ganha, Às Vezes Se Aprende', 'manual', 2013, 'Trata a derrota como matéria-prima, com base em erros da própria trajetória.']
  ],
  'Morgan Housel': [
    ['A Psicologia Financeira', 'livro', 2020, 'Dezenove histórias curtas mostrando que a diferença entre quem enriquece e quem quebra costuma estar no comportamento, não no conhecimento técnico.'],
    ['O Mesmo de Sempre', 'livro', 2023, 'Em vez de tentar prever o que vai mudar, olha para o que nunca muda no comportamento humano e usa isso como base de decisão.']
  ],
  'Benjamin Franklin': [
    ['Autobiografia', 'memoria', 1791, 'Conta como saiu de casa aos dezessete anos com pouco dinheiro e virou tipógrafo, cientista e diplomata — incluindo o quadro das treze virtudes que tentava praticar.'],
    ['Almanaque do Pobre Ricardo', 'livro', 1732, 'Publicação anual com provérbios, calendário e conselhos práticos que o tornou financeiramente independente aos 42 anos.'],
    ['Para-raios', 'invento', 1752, 'Depois de provar que o raio é eletricidade, criou o dispositivo que protege construções — e recusou-se a patenteá-lo.'],
    ['Primeira biblioteca pública por assinatura', 'feito', 1731, 'Fundou na Filadélfia a Library Company, modelo das bibliotecas públicas americanas.'],
    ['Óculos bifocais', 'invento', 1784, 'Juntou duas lentes numa armação só para não precisar trocar de óculos ao ler.']
  ],
  'Peter Drucker': [
    ['A Prática da Administração', 'manual', 1954, 'Formula a administração por objetivos e defende que o propósito de um negócio é criar um cliente. Livro que fundou a gestão como disciplina.'],
    ['O Gestor Eficaz', 'manual', 1966, 'Sobre o que separa quem produz resultado de quem apenas se ocupa: decisão, prioridade e uso do próprio tempo.'],
    ['Inovação e Espírito Empreendedor', 'manual', 1985, 'Trata inovação como prática sistemática, com fontes de oportunidade identificáveis, e não como lampejo de gênio.'],
    ['Concept of the Corporation', 'livro', 1946, 'Resultado de dois anos observando a General Motors por dentro; a própria empresa detestou o resultado.'],
    ['Sociedade Pós-Capitalista', 'livro', 1993, 'Descreve a economia em que o recurso decisivo passa a ser o conhecimento.']
  ],
  'Philip Kotler': [
    ['Administração de Marketing', 'manual', 1967, 'O livro-texto que transformou marketing em disciplina com método próprio e formou gerações inteiras em dezenas de países.'],
    ['Princípios de Marketing', 'manual', 1980, 'Versão introdutória, adotada em cursos de graduação no mundo todo.'],
    ['Marketing 4.0', 'manual', 2016, 'Sobre o deslocamento do marketing tradicional para o digital, com foco na jornada do cliente.'],
    ['Marketing 5.0', 'manual', 2021, 'Trata do uso de tecnologia — dados, automação, inteligência artificial — a serviço da experiência humana.']
  ],
  'W. Edwards Deming': [
    ['Saia da Crise', 'manual', 1986, 'Apresenta os catorze pontos para transformar a gestão, entre eles abandonar a inspeção em massa e remover o medo do ambiente de trabalho.'],
    ['A Nova Economia', 'manual', 1993, 'Último livro, com o conceito de "saber profundo": sistema, variação, conhecimento e psicologia.'],
    ['Palestras no Japão', 'discurso', 1950, 'As conferências a executivos japoneses que mudaram a indústria do país e deram origem ao Prêmio Deming.']
  ],
  'Michael Porter': [
    ['Estratégia Competitiva', 'manual', 1980, 'Apresenta as cinco forças que determinam a lucratividade de um setor inteiro, independentemente da competência de cada empresa.'],
    ['Vantagem Competitiva', 'manual', 1985, 'Introduz a cadeia de valor: decompor a empresa em atividades para descobrir onde ela cria valor de fato.'],
    ['A Vantagem Competitiva das Nações', 'tratado', 1990, 'Aplica a análise competitiva a países, explicando por que certos setores prosperam em certos lugares.'],
    ['Redefinindo a Saúde', 'manual', 2006, 'Propõe organizar sistemas de saúde por resultado para o paciente, e não por volume de procedimentos.']
  ],
  'Warren Bennis': [
    ['Líderes: Estratégias para Assumir a Verdadeira Liderança', 'manual', 1985, 'Resultado de entrevistas com noventa líderes, sustenta que liderança é competência desenvolvida, não traço de nascimento.'],
    ['A Formação do Líder', 'manual', 1989, 'Sobre as "provações" — episódios difíceis que formam líderes mais do que qualquer curso.'],
    ['Os Gênios da Organização', 'manual', 1997, 'Estuda grupos extraordinários, do Projeto Manhattan à Disney, para entender o que os fez funcionar.']
  ],
  'Robert Cialdini': [
    ['As Armas da Persuasão', 'manual', 1984, 'Três anos infiltrado em equipes de venda e telemarketing resultaram em seis princípios que explicam por que dizemos sim.'],
    ['Pré-Suasão', 'manual', 2016, 'Mostra que o momento e o contexto anteriores à mensagem determinam boa parte do resultado dela.']
  ],
  'Stephen R. Covey': [
    ['Os 7 Hábitos das Pessoas Altamente Eficazes', 'manual', 1989, 'Nasceu de uma pesquisa sobre dois séculos de literatura americana de sucesso e propõe voltar ao caráter, depois de décadas de foco em técnica e imagem.'],
    ['O 8º Hábito', 'manual', 2004, 'Continuação que trata de encontrar a própria voz e ajudar os outros a encontrarem a deles.'],
    ['Primeiro o Mais Importante', 'manual', 1994, 'Aprofunda a matriz de urgência e importância como método de organização da semana.']
  ],
  'Jeff Bezos': [
    ['Cartas aos Acionistas', 'carta', 1997, 'Escritas todo ano e sempre acompanhadas da primeira, de 1997, viraram um dos textos de gestão mais lidos do setor.'],
    ['Amazon', 'feito', 1994, 'Livraria online aberta numa garagem em Seattle que virou uma das maiores empresas do mundo.'],
    ['Amazon Web Services', 'feito', 2006, 'Serviço de computação em nuvem que reorganizou a infraestrutura da internet.'],
    ['Blue Origin', 'feito', 2000, 'Empresa aeroespacial fundada com o objetivo declarado de reduzir o custo do acesso ao espaço.']
  ],
  'Sam Walton': [
    ['Sam Walton: Made in America', 'memoria', 1992, 'Autobiografia escrita meses antes de morrer, contando como construiu a maior varejista do mundo a partir de cidades que ninguém queria.'],
    ['Walmart', 'feito', 1962, 'Primeira loja aberta em Rogers, Arkansas, com a aposta de vender barato em municípios pequenos.']
  ],
  'Jim Collins': [
    ['Empresas Feitas para Vencer', 'manual', 2001, 'Filtrou 1.435 empresas para achar onze que deram o salto e sustentaram por quinze anos — e o que encontrou contraria o discurso sobre líderes carismáticos.'],
    ['Feitas para Durar', 'manual', 1994, 'Compara empresas visionárias com concorrentes do mesmo setor e idade para descobrir o que as separa.'],
    ['Como as Gigantes Caem', 'manual', 2009, 'Descreve os cinco estágios do declínio, do orgulho do sucesso à rendição.'],
    ['Vencedoras por Opção', 'manual', 2011, 'Estuda empresas que prosperaram em ambientes caóticos e imprevisíveis.']
  ],
  'Clayton Christensen': [
    ['O Dilema da Inovação', 'manual', 1997, 'Explica por que empresas líderes quebram justamente por fazerem tudo certo: ouvem os melhores clientes e ignoram tecnologias que começam piores e mais baratas.'],
    ['O Crescimento pela Inovação', 'manual', 2003, 'Continuação prática, sobre como criar deliberadamente negócios disruptivos.'],
    ['Como Você Vai Medir Sua Vida?', 'livro', 2012, 'Escrito após câncer, infarto e um AVC, aplica teoria de gestão a decisões sobre família, integridade e sentido.'],
    ['Muito Além da Sorte', 'manual', 2016, 'Apresenta a abordagem dos "trabalhos a serem feitos" para entender por que as pessoas compram o que compram.']
  ],
  'Nassim Nicholas Taleb': [
    ['A Lógica do Cisne Negro', 'ensaio', 2007, 'Publicado às vésperas da crise financeira, argumenta que eventos raros e imprevisíveis explicam a maior parte da história — e que nossos modelos os ignoram por construção.'],
    ['Antifrágil', 'ensaio', 2012, 'Propõe o conceito que o autor considera central: sistemas que não apenas resistem à desordem, mas melhoram com ela.'],
    ['Iludido pelo Acaso', 'ensaio', 2001, 'Ataca a confusão entre sorte e habilidade, sobretudo no mercado financeiro.'],
    ['Arriscando a Própria Pele', 'ensaio', 2018, 'Defende que quem decide deve arcar com o risco da decisão, e que sem isso nenhum conselho vale muito.']
  ],
  'Philip Fisher': [
    ['Ações Comuns, Lucros Extraordinários', 'manual', 1958, 'Lista quinze pontos para avaliar uma empresa, quase todos qualitativos, e apresenta o método de sair a campo conversando com clientes e concorrentes.'],
    ['Caminhos Conservadores para o Investimento', 'manual', 1975, 'Sobre como preservar patrimônio sem abrir mão de crescimento real.']
  ],
  'George S. Clason': [['O Homem Mais Rico da Babilônia', 'livro', 1926, 'Parábolas ambientadas na Babilônia antiga que ensinam a guardar ao menos um décimo do que se ganha e a fazer o dinheiro trabalhar. Nunca saiu de catálogo.']],
  'Jack Welch': [
    ['Paixão por Vencer', 'manual', 2005, 'Reúne o que aprendeu em vinte anos no comando da GE, de contratação a demissão e estratégia.'],
    ['Jack: Definitivo', 'memoria', 2001, 'Autobiografia escrita logo após deixar a presidência da General Electric.']
  ],
  'Seth Godin': [
    ['A Vaca Roxa', 'manual', 2003, 'Num mercado saturado, produto mediano com boa propaganda não funciona mais: ou é notável a ponto de gerar conversa, ou é invisível.'],
    ['Marketing de Permissão', 'manual', 1999, 'Antecipou o fim do marketing de interrupção e propôs conquistar a atenção em vez de comprá-la.'],
    ['Tribos', 'manual', 2008, 'Sobre grupos organizados em torno de uma causa e sobre quem se dispõe a liderá-los.'],
    ['Isso é Marketing', 'manual', 2018, 'Síntese de sua abordagem: encontrar o menor público viável e servi-lo de verdade.']
  ],
  'Chris Voss': [['Negocie Como se Sua Vida Dependesse Disso', 'manual', 2016, 'Traz para conversas do dia a dia as técnicas que usava como negociador-chefe de sequestros do FBI, incluindo empatia tática e a busca deliberada pelo "não".']],
  'Simon Sinek': [
    ['Comece pelo Porquê', 'manual', 2009, 'Apresenta o círculo dourado: organizações que inspiram comunicam primeiro o propósito, depois o processo e só então o produto.'],
    ['Líderes se Servem por Último', 'manual', 2014, 'Usa exemplos militares para mostrar que equipes cooperam onde se sentem protegidas e se defendem umas das outras onde se sentem ameaçadas.'],
    ['O Jogo Infinito', 'manual', 2019, 'Distingue organizações que jogam para vencer daquelas que jogam para continuar — e explica por que as segundas duram mais.']
  ],

  /* ---------- psicologia, educação, ativismo e ciência ---------- */
  'Carl Rogers': [
    ['Tornar-se Pessoa', 'livro', 1961, 'Reúne artigos sobre o que acontece quando alguém é ouvido sem julgamento, e sobre as três condições que tornam a mudança possível.'],
    ['Terapia Centrada no Cliente', 'tratado', 1951, 'Apresenta a abordagem que tirou o terapeuta do lugar de autoridade e devolveu a condução à pessoa atendida.'],
    ['Liberdade para Aprender', 'livro', 1969, 'Leva a mesma abordagem para a sala de aula, propondo uma educação centrada em quem aprende.'],
    ['Um Jeito de Ser', 'livro', 1980, 'Últimos textos, incluindo o trabalho com grupos de encontro em zonas de conflito.']
  ],
  'Martin Seligman': [
    ['Felicidade Autêntica', 'livro', 2002, 'Livro que apresentou a psicologia positiva ao grande público, com o argumento de que o campo passou meio século estudando só o sofrimento.'],
    ['Aprenda a Ser Otimista', 'livro', 1990, 'Mostra que o modo como explicamos a nós mesmos o que deu errado pode ser modificado com treino.'],
    ['Florescer', 'livro', 2011, 'Apresenta o modelo PERMA: emoção positiva, engajamento, relacionamentos, sentido e realização.'],
    ['Desamparo aprendido', 'ciencia', 1967, 'Série de experimentos que descreveu a desistência causada por experiências repetidas sem controle, e que virou modelo para entender a depressão.']
  ],
  'Philip Zimbardo': [
    ['O Efeito Lúcifer', 'livro', 2007, 'Argumenta que situações e sistemas explicam mais sobre crueldade do que a ideia de "maçãs podres", usando Stanford e Abu Ghraib como casos.'],
    ['Experimento da Prisão de Stanford', 'ciencia', 1971, 'Prisão simulada num porão universitário, interrompida no sexto dia. Continua sendo o estudo mais discutido e mais criticado da psicologia social.'],
    ['O Paradoxo do Tempo', 'livro', 2008, 'Sobre como a relação de cada pessoa com passado, presente e futuro molda suas decisões.']
  ],
  'Marshall Rosenberg': [
    ['Comunicação Não Violenta', 'manual', 1999, 'Apresenta os quatro passos — observar, sentir, identificar a necessidade, pedir — de um método hoje usado em escolas, presídios e mediações internacionais.'],
    ['Vivendo a Comunicação Não Violenta', 'manual', 2005, 'Aplicações práticas do método em conflitos familiares, escolares e organizacionais.'],
    ['Center for Nonviolent Communication', 'feito', 1984, 'Organização fundada por ele, hoje presente em dezenas de países.']
  ],
  'Robert Emmons': [
    ['Obrigado! Como a Gratidão Pode Fazer Você Feliz', 'livro', 2007, 'Reúne os primeiros experimentos controlados sobre gratidão, incluindo os estudos com diários semanais que fundaram o campo.'],
    ['Gratitude Works!', 'manual', 2013, 'Programa prático de exercícios de gratidão baseado nas pesquisas do autor.']
  ],
  'Angela Davis': [
    ['Mulheres, Raça e Classe', 'ensaio', 1981, 'Relê a história do feminismo americano a partir da escravidão e do trabalho, tornando-se texto fundador do pensamento interseccional.'],
    ['Estarão as Prisões Obsoletas?', 'ensaio', 2003, 'Defende o abolicionismo penal e descreve o encarceramento em massa como indústria.'],
    ['Uma Autobiografia', 'memoria', 1974, 'Conta a infância em Birmingham, a demissão da UCLA, os meses foragida e os dezesseis na prisão.'],
    ['A Liberdade é uma Luta Constante', 'ensaio', 2016, 'Reúne discursos e entrevistas ligando lutas antirracistas em diferentes países.']
  ],
  'Audre Lorde': [
    ['Irmã Outsider', 'ensaio', 1984, 'Coletânea central do pensamento feminista negro, com o ensaio sobre as ferramentas do senhor e o texto sobre os usos da raiva.'],
    ['Diários do Câncer', 'diario', 1980, 'Escreve sobre a mastectomia e a doença recusando o silêncio e a estética da superação.'],
    ['Zami: Uma Nova Grafia do Meu Nome', 'memoria', 1982, 'Autobiografia que ela chamou de biomitografia, sobre infância caribenha, Nova York e descoberta de si.'],
    ['Carvão', 'poesia', 1976, 'Livro de poemas que a apresentou a um público amplo.']
  ],
  'Nísia Floresta': [
    ['Direitos das Mulheres e Injustiça dos Homens', 'ensaio', 1832, 'O primeiro texto de defesa dos direitos das mulheres publicado no Brasil, escrito aos 22 anos.'],
    ['Opúsculo Humanitário', 'ensaio', 1853, 'Sessenta e dois artigos sobre a educação das mulheres brasileiras e o atraso que a sua ausência produzia.'],
    ['A Lágrima de um Caeté', 'poesia', 1849, 'Poema longo em defesa dos povos indígenas e contra a violência da colonização.'],
    ['Colégio Augusto', 'feito', 1838, 'Escola fundada no Rio de Janeiro onde meninas estudavam latim, ciências e educação física — currículo então reservado aos meninos.']
  ],
  'Ruth Bader Ginsburg': [
    ['Projeto de Direitos das Mulheres da ACLU', 'feito', 1972, 'Programa que ela dirigiu e que construiu, caso a caso, a jurisprudência americana de igualdade de gênero.'],
    ['Estados Unidos v. Virginia', 'feito', 1996, 'Decisão escrita por ela que abriu o Instituto Militar da Virgínia às mulheres.'],
    ['Meu Próprio Caminho', 'ensaio', 2016, 'Reúne artigos, discursos e votos escritos ao longo de mais de cinquenta anos de carreira.'],
    ['Voto vencido no caso Ledbetter', 'discurso', 2007, 'Manifestação tão contundente que levou o Congresso a aprovar uma lei de igualdade salarial.']
  ],
  'Thomas Edison': [
    ['Fonógrafo', 'invento', 1877, 'Primeira máquina capaz de gravar e reproduzir som; ele a considerava sua invenção favorita.'],
    ['Lâmpada incandescente durável', 'invento', 1879, 'Não inventou a lâmpada, mas resolveu o filamento e, sobretudo, criou o sistema completo que tornou a luz elétrica viável.'],
    ['Central elétrica de Pearl Street', 'feito', 1882, 'Primeira usina de distribuição de energia elétrica em Manhattan, com geradores, medidores e rede.'],
    ['Laboratório de Menlo Park', 'feito', 1876, 'Primeiro laboratório industrial de pesquisa do mundo — a base de todo departamento de P&D moderno.'],
    ['Cinetoscópio', 'invento', 1891, 'Aparelho de visualização individual de filmes, decisivo para o nascimento do cinema.']
  ],
  'John Wooden': [
    ['A Pirâmide do Sucesso', 'manual', 1997, 'Quinze blocos que vão de laboriosidade e entusiasmo até serenidade e fé, sem nenhuma menção a placar.'],
    ['Wooden on Leadership', 'manual', 2005, 'Aplica ao mundo do trabalho o método que lhe rendeu dez títulos nacionais em doze anos.'],
    ['Dez títulos da NCAA', 'feito', 1975, 'Sete deles consecutivos, além de uma sequência de 88 vitórias seguidas — números nunca igualados.']
  ],
  'Colin Powell': [
    ['Minha Jornada Americana', 'memoria', 1995, 'Autobiografia que vai do Harlem ao comando do Estado-Maior Conjunto.'],
    ['Meu Caminho Funcionou', 'manual', 2012, 'Reúne as treze regras que ele mantinha sob o vidro da mesa e o que aprendeu liderando.'],
    ['Doutrina Powell', 'feito', 1990, 'Conjunto de critérios para o uso da força militar: objetivo claro, força esmagadora e estratégia de saída definida.']
  ],
  'C. S. Lewis': [
    ['As Crônicas de Nárnia', 'romance', 1950, 'Quatro irmãos atravessam um guarda-roupa e chegam a um país onde é sempre inverno e nunca Natal. Sete livros, mais de cem milhões de exemplares.'],
    ['Cristianismo Puro e Simples', 'ensaio', 1952, 'Nasceu das palestras de rádio da BBC durante a guerra e virou a apologética cristã mais lida do século.'],
    ['Cartas de um Diabo a seu Aprendiz', 'romance', 1942, 'Um demônio experiente escreve ao sobrinho aprendiz ensinando como afastar um ser humano aos poucos.'],
    ['A Anatomia de uma Dor', 'memoria', 1961, 'Diário do luto pela morte da esposa, publicado inicialmente sob pseudônimo por ser cru demais.'],
    ['A Alegoria do Amor', 'ensaio', 1936, 'Estudo acadêmico sobre o amor cortês na literatura medieval que fundou boa parte do campo.']
  ],
  'Edith Eger': [
    ['A Bailarina de Auschwitz', 'memoria', 2017, 'Publicado aos noventa anos, conta a deportação aos dezesseis, a noite em que dançou para Mengele e as décadas seguintes tratando trauma como psicóloga.'],
    ['O Presente', 'manual', 2020, 'Doze prisões mentais e como sair delas, escritas a partir de casos clínicos e da própria história.']
  ],
  'Rubem Alves': [
    ['A Alegria de Ensinar', 'cronica', 1994, 'Textos curtos sobre escola, infância e o professor como quem provoca fome de perguntas em vez de encher de respostas.'],
    ['O Retorno e o Terno', 'cronica', 1992, 'Crônicas sobre corpo, comida, memória e delicadeza, no estilo que o tornou leitura de formação de professores.'],
    ['Teologia da Libertação', 'tratado', 1969, 'Tese de doutorado em Princeton apontada como um dos primeiros textos do movimento.'],
    ['A História do Pássaro Que Vivia no Ar', 'livro', 1990, 'Livro infantil sobre liberdade e pertencimento.']
  ],
  'Marshall McLuhan': [
    ['Os Meios de Comunicação como Extensões do Homem', 'ensaio', 1964, 'Argumenta que a mudança real não vem do que a televisão transmite, mas do fato de haver televisão. Daqui vem "o meio é a mensagem".'],
    ['A Galáxia de Gutenberg', 'ensaio', 1962, 'Mostra como a imprensa criou o pensamento linear e privado — e cunha a expressão aldeia global.'],
    ['A Noiva Mecânica', 'ensaio', 1951, 'Analisa anúncios publicitários como objetos culturais, décadas antes de isso virar prática comum.']
  ],
  'Gustave Le Bon': [
    ['Psicologia das Multidões', 'tratado', 1895, 'Primeiro estudo sistemático sobre como uma pessoa muda de comportamento dentro de uma massa. Influenciou Freud, a publicidade e também regimes autoritários.'],
    ['A Psicologia das Revoluções', 'tratado', 1912, 'Aplica o mesmo aparato à Revolução Francesa e aos movimentos políticos modernos.']
  ],
  'Napoleão Bonaparte': [
    ['Código Civil', 'tratado', 1804, 'Reuniu num só texto o direito civil francês e virou base de códigos em dezenas de países, inclusive o Brasil.'],
    ['Memorial de Santa Helena', 'memoria', 1823, 'Ditado no exílio ao conde de Las Cases, é onde Napoleão constrói a própria versão da história.'],
    ['Máximas de Guerra', 'manual', 1827, 'Princípios militares reunidos a partir de suas campanhas, estudados em academias por mais de um século.'],
    ['Campanha do Egito', 'feito', 1798, 'Expedição militar que levou junto uma comissão de cientistas e produziu a descoberta da Pedra de Roseta.']
  ],
  'Theodore Roosevelt': [
    ['O Homem na Arena', 'discurso', 1910, 'Trecho do discurso "Cidadania numa República", feito na Sorbonne, sobre quem se arrisca em campo contra quem apenas critica da arquibancada.'],
    ['A Vida Extenuante', 'ensaio', 1899, 'Defende uma vida de esforço e responsabilidade pública contra o conforto acomodado.'],
    ['Criação do Serviço Florestal', 'feito', 1905, 'Protegeu cerca de 93 milhões de hectares de terras públicas, criando parques e florestas nacionais.'],
    ['Nobel da Paz', 'feito', 1906, 'Recebido por mediar o fim da guerra entre Rússia e Japão.'],
    ['Através do Sertão Brasileiro', 'memoria', 1914, 'Relato da expedição pelo Rio da Dúvida, feita com Cândido Rondon, que quase o matou.']
  ]
};

/* ================================================================
   DESCRIÇÕES NOVAS — dizem do que a obra trata, em duas ou três
   linhas, no lugar de resumos vagos.
   ================================================================ */
const DESC_NOVA = {
  'Graciliano Ramos||Vidas Secas': 'Conta a história da seca que assolou o Nordeste, acompanhando uma família de retirantes que deixa a própria casa em busca de melhores condições e de uma vida digna, encontrando pelo caminho a fome, o abuso de poder e o silêncio.',
  'Graciliano Ramos||Memórias do Cárcere': 'Relato dos dez meses que o autor passou preso durante o Estado Novo, sem acusação formal, entre navios-prisão e a Colônia Correcional da Ilha Grande.',
  'Graciliano Ramos||São Bernardo': 'Paulo Honório narra em primeira pessoa como enriqueceu tomando terras e como destruiu, com ciúme e violência, o único afeto que teve.',
  'Graciliano Ramos||Angústia': 'Um funcionário público humilhado e apaixonado descreve em fluxo febril os dias que antecedem um crime.',
  'Clarice Lispector||A Hora da Estrela': 'Macabéa é uma datilógrafa nordestina que vive no Rio, come cachorro-quente e não sabe que é infeliz. Um narrador atormentado tenta contar a história dela sem saber se tem direito de fazê-lo.',
  'Clarice Lispector||A Paixão Segundo G.H.': 'Uma mulher entra no quarto vazio da empregada, esmaga uma barata no armário e passa o livro inteiro tentando entender o que aquilo desfez dentro dela.',
  'Clarice Lispector||Laços de Família': 'Treze contos sobre instantes em que a vida comum se rasga: uma dona de casa numa festa de aniversário, uma cega mascando chiclete, um casamento que se revela.',
  'Clarice Lispector||Água Viva': 'Não tem enredo: é uma voz tentando registrar o instante enquanto ele passa, escrita como quem pinta.',
  'Machado de Assis||Dom Casmurro': 'Bentinho, já velho, reconstrói a história do seu casamento com Capitu para provar que foi traído. O leitor passa o livro inteiro sem conseguir decidir se ele tem razão.',
  'Machado de Assis||Memórias Póstumas de Brás Cubas': 'Um defunto conta a própria vida sem nenhuma pressa nem vergonha, e conclui que a maior vantagem de ter morrido foi não ter transmitido a ninguém a miséria de existir.',
  'Machado de Assis||Quincas Borba': 'Rubião herda a fortuna de um filósofo louco e a perde aos poucos para um casal que o cerca com gentilezas calculadas.',
  'Machado de Assis||O Alienista': 'Um médico interna metade da cidade em nome da ciência, depois inverte o critério e interna a outra metade. Sátira sobre quem define o que é loucura.',
  'Fernando Pessoa||Mensagem': 'Único livro em português publicado em vida pelo autor: quarenta e quatro poemas que recontam a história de Portugal como profecia, do mito fundador ao "Mar Português".',
  'Fernando Pessoa||Livro do Desassossego': 'Bernardo Soares, ajudante de guarda-livros numa rua de Lisboa, escreve fragmentos sobre tédio, sonho e a impossibilidade de viver. Ficou inacabado numa arca com milhares de papéis.',
  'Fernando Pessoa||Poemas de Alberto Caeiro': 'O heterônimo que dizia não ter filosofia nenhuma, só olhos, e que escreve como quem se recusa a interpretar o mundo.',
  'Fernando Pessoa||Poemas de Álvaro de Campos': 'Do entusiasmo futurista da "Ode Triunfal" ao cansaço da "Tabacaria", é o heterônimo que grita e depois desiste.',
  'Guimarães Rosa||Grande Sertão: Veredas': 'Riobaldo, ex-jagunço, conta a um interlocutor mudo a guerra no sertão, o pacto que talvez tenha feito com o diabo e o amor por Diadorim.',
  'Guimarães Rosa||Sagarana': 'Nove histórias do sertão mineiro em que boiadas, feiticeiros e brigas de fazenda ganham densidade de mito.',
  'Guimarães Rosa||Primeiras Estórias': 'Vinte e um contos curtos, muitos narrados por crianças e loucos, em que a língua é reinventada frase a frase.',
  'Carlos Drummond de Andrade||Alguma Poesia': 'Livro de estreia, de 1930, onde aparece o "poema de sete faces" e o gauche que atravessaria toda a obra.',
  'Carlos Drummond de Andrade||A Rosa do Povo': 'Poesia escrita durante a guerra e o Estado Novo, entre a angústia política e a tentativa de encontrar sentido coletivo.',
  'Carlos Drummond de Andrade||Sentimento do Mundo': 'O poeta sai de si e olha para a multidão, no momento em que o fascismo avançava sobre a Europa.',
  'Cecília Meireles||Romanceiro da Inconfidência': 'Oitenta e cinco romances em verso que recontam a Inconfidência Mineira a partir dos autos do processo, dando voz aos condenados.',
  'Jorge Amado||Capitães da Areia': 'Um grupo de meninos abandonados vive num trapiche em Salvador, roubando para comer e criando entre si a família que ninguém lhes deu.',
  'Jorge Amado||Gabriela, Cravo e Canela': 'Ilhéus vive o auge do cacau e a chegada do progresso enquanto Nacib se apaixona pela cozinheira que se recusa a ser domesticada.',
  'Jorge Amado||Dona Flor e Seus Dois Maridos': 'Viúva de um boêmio, Flor casa-se com um farmacêutico correto — e o primeiro marido volta, só para ela, sem roupa e sem pressa.',
  'Euclides da Cunha||Os Sertões': 'Reportagem, tratado de geografia e denúncia ao mesmo tempo: conta a destruição de Canudos por quatro expedições do Exército e conclui que o crime foi do país, não do sertanejo.',
  'Lima Barreto||Triste Fim de Policarpo Quaresma': 'Um funcionário público patriota até a ingenuidade tenta salvar o Brasil e é destruído pela própria pátria que idolatrava.',
  'Aluísio Azevedo||O Cortiço': 'Um cortiço no Rio de Janeiro cresce como organismo vivo enquanto o dono enriquece e os moradores se desfazem.',
  'José de Alencar||Iracema': 'A índia tabajara e o colono português Martim geram o primeiro filho brasileiro, numa lenda de fundação escrita como poema em prosa.',
  'Manuel Bandeira||Libertinagem': 'Livro que consolidou o modernismo em verso livre, com "Vou-me embora pra Pasárgada" e o humor melancólico de quem conviveu com a tuberculose.',
  'Mário de Andrade||Macunaíma': 'O herói sem nenhum caráter atravessa o Brasil inteiro atrás de um amuleto perdido, misturando lendas indígenas, folclore e sátira urbana.',
  'Monteiro Lobato||Reinações de Narizinho': 'O Sítio do Picapau Amarelo recebe príncipes, peixes falantes e Emília, a boneca que aprende a falar e nunca mais para.',
  'Rachel de Queiroz||O Quinze': 'A seca de 1915 no Ceará vista por Conceição, professora que observa uma família de retirantes partir e se desfazer no caminho.',
  'Érico Veríssimo||O Tempo e o Vento': 'Saga de duzentos anos de duas famílias gaúchas, do povoamento à República, com Ana Terra e o capitão Rodrigo no centro.',
  'Ariano Suassuna||Auto da Compadecida': 'João Grilo e Chicó armam trapaças no sertão para sobreviver e acabam num julgamento diante de Cristo, com Nossa Senhora advogando por eles.',
  'Miguel de Cervantes||Dom Quixote': 'Um fidalgo enlouquece de tanto ler romances de cavalaria e sai pelo campo com um escudeiro prático, atacando moinhos e defendendo damas que não existem.',
  'Fiódor Dostoiévski||Crime e Castigo': 'Raskólnikov, estudante pobre em São Petersburgo, mata uma velha usurária para provar uma teoria — e passa o livro sendo destruído pela própria consciência.',
  'Fiódor Dostoiévski||Os Irmãos Karamázov': 'A morte de um pai brutal põe três irmãos em rota de colisão, e no meio do romance está a parábola do Grande Inquisidor.',
  'Fiódor Dostoiévski||O Idiota': 'O príncipe Míchkin, bondoso a ponto de parecer tolo, volta à Rússia e é triturado por uma sociedade que não sabe o que fazer com alguém assim.',
  'Liev Tolstói||Guerra e Paz': 'Cinco famílias russas atravessam as guerras napoleônicas, entre salões de baile e o campo de batalha de Borodino.',
  'Liev Tolstói||Anna Kariênina': 'Anna abandona casamento e filho por um oficial e descobre que a sociedade que tolerava o adultério dele não perdoa o dela.',
  'Victor Hugo||Os Miseráveis': 'Jean Valjean cumpre dezenove anos de galés por roubar um pão e passa o resto da vida tentando ser outro homem, perseguido por um policial que não acredita em mudança.',
  'Victor Hugo||O Corcunda de Notre-Dame': 'Quasímodo, Esmeralda e a catedral de Paris no centro de uma história sobre monstruosidade, desejo e injustiça.',
  'Gabriel García Márquez||Cem Anos de Solidão': 'Sete gerações da família Buendía fundam, povoam e perdem Macondo, num lugar onde o extraordinário acontece sem que ninguém se espante.',
  'Gabriel García Márquez||O Amor nos Tempos do Cólera': 'Florentino espera cinquenta e um anos, nove meses e quatro dias para reencontrar Fermina — e o livro pergunta se isso é amor ou obstinação.',
  'Franz Kafka||A Metamorfose': 'Gregor Samsa acorda transformado num inseto gigante e a família, depois do susto, vai simplesmente se acostumando com o problema.',
  'Franz Kafka||O Processo': 'Josef K. é preso numa manhã sem que ninguém diga do que é acusado, e passa o livro tentando se defender de uma acusação que nunca lhe é apresentada.',
  'George Orwell||1984': 'Winston Smith trabalha reescrevendo o passado num Estado que vigia tudo, até o pensamento, e tenta guardar para si um pedaço de verdade.',
  'George Orwell||A Revolução dos Bichos': 'Os animais expulsam o fazendeiro e criam uma sociedade igualitária, até que os porcos aprendem a andar de pé.',
  'Aldous Huxley||Admirável Mundo Novo': 'Uma sociedade sem dor, sem família e sem escolha, onde as pessoas são fabricadas em castas e mantidas felizes por uma droga sem ressaca.',
  'Antoine de Saint-Exupéry||O Pequeno Príncipe': 'Um piloto cai no deserto e encontra um menino vindo de outro planeta, que lhe conta de uma rosa, de uma raposa e do que os olhos não veem.',
  'Homero||Ilíada': 'Nos últimos dias da guerra de Troia, a fúria de Aquiles decide o destino de dois exércitos e de uma cidade inteira.',
  'Homero||Odisseia': 'Dez anos de viagem de volta para casa, entre ciclopes, sereias e deuses irritados, enquanto em Ítaca a mulher e o filho seguram os pretendentes.',
  'Dante Alighieri||A Divina Comédia': 'Um homem perdido numa floresta escura desce ao inferno, sobe o purgatório e atravessa o paraíso, guiado por um poeta morto e pela mulher que amou.',
  'William Shakespeare||Hamlet': 'O fantasma de um rei pede vingança ao filho, e o filho passa cinco atos hesitando, fingindo loucura e perguntando se vale a pena existir.',
  'William Shakespeare||Macbeth': 'Três bruxas dizem a um general que ele será rei, e a profecia se cumpre pelo caminho mais sangrento possível.',
  'William Shakespeare||Romeu e Julieta': 'Dois adolescentes de famílias inimigas se casam em segredo em Verona e morrem por um erro de comunicação.',
  'Marco Aurélio||Meditações': 'Anotações privadas de um imperador romano em campanha, escritas para si mesmo, sobre morte, dever e como não se deixar levar pela raiva.',
  'Sêneca||Cartas a Lucílio': 'Cento e vinte e quatro cartas a um amigo mais jovem sobre tempo, medo, riqueza e morte — filosofia prática, escrita como conversa.',
  'Epicteto||Enquirídio': 'Manual curto, anotado por um aluno, com o princípio que organiza o estoicismo: separar o que depende de nós do que não depende.',
  'Platão||A República': 'Começa perguntando o que é a justiça e termina desenhando uma cidade inteira, com a alegoria da caverna no meio do caminho.',
  'Aristóteles||Ética a Nicômaco': 'Investiga o que é uma vida boa e conclui que a virtude é hábito, construído pela repetição, e não talento recebido.',
  'Sun Tzu||A Arte da Guerra': 'Treze capítulos sobre vencer sem lutar, conhecer o terreno e o adversário, escritos há mais de dois mil anos e lidos hoje por generais e executivos.',
  'Viktor Frankl||Em Busca de Sentido': 'Psiquiatra sobrevivente de campos de concentração descreve o que observou ali e propõe uma terapia baseada na busca de sentido.',
  'Anne Frank||O Diário de Anne Frank': 'Dois anos escondida com a família num anexo em Amsterdã, escritos por uma adolescente que queria ser escritora e morreu antes de completar dezesseis anos.',
  'Primo Levi||É Isto um Homem?': 'Relato preciso e contido de onze meses em Auschwitz, escrito por um químico que sobreviveu porque sabia química.',
  'Simone de Beauvoir||O Segundo Sexo': 'Investigação em dois volumes sobre como a mulher foi construída como o "outro" na biologia, na história, na religião e no cotidiano.',
  'Paulo Freire||Pedagogia do Oprimido': 'Critica a educação que deposita conteúdo em alunos passivos e propõe uma alfabetização que parte da realidade de quem aprende.',
  'Nelson Mandela||Longa Caminhada até a Liberdade': 'Autobiografia escrita em parte na prisão de Robben Island, contando os 27 anos de cárcere e a negociação que evitou uma guerra civil.',
  'Charles Darwin||A Origem das Espécies': 'Apresenta a seleção natural com base em vinte anos de observações e adia por décadas a publicação por saber o que causaria.',
  'Sigmund Freud||A Interpretação dos Sonhos': 'Propõe que o sonho é a realização disfarçada de um desejo e cria o método que fundaria a psicanálise.',
  'Carl Gustav Jung||O Homem e Seus Símbolos': 'Último projeto do autor, escrito para leigos, sobre inconsciente coletivo, arquétipos e a linguagem dos sonhos.',
  'Daniel Kahneman||Rápido e Devagar': 'Descreve dois sistemas de pensamento — um automático e um lento — e mostra, com décadas de experimentos, onde a intuição erra sistematicamente.',
  'Benjamin Graham||O Investidor Inteligente': 'Ensina a tratar ação como pedaço de empresa, a exigir margem de segurança e a ignorar o Sr. Mercado quando ele fica eufórico ou desesperado.',
  'Napoleon Hill||Quem Pensa Enriquece': 'Resultado de vinte anos entrevistando empresários americanos, organiza em treze princípios o que ele julgou comum às trajetórias de sucesso.',
  'Dale Carnegie||Como Fazer Amigos e Influenciar Pessoas': 'Regras práticas de convivência e persuasão nascidas de cursos noturnos para vendedores, publicadas em 1936 e nunca esgotadas desde então.',
  'Miguel de Cervantes||Novelas Exemplares': 'Doze narrativas curtas que inauguram a novela moderna em espanhol, do ciganismo ao cão que fala.',
  'Jane Austen||Orgulho e Preconceito': 'Elizabeth Bennet e o senhor Darcy passam o romance inteiro corrigindo o julgamento que fizeram um do outro, numa Inglaterra em que casar era questão econômica.',
  'Emily Brontë||O Morro dos Ventos Uivantes': 'Heathcliff e Catherine se destroem e destroem duas famílias ao longo de duas gerações, numa charneca sem consolo.',
  'Mary Shelley||Frankenstein': 'Um estudante de ciências dá vida a uma criatura e foge dela; a criatura aprende sozinha a falar, a ler e a odiar.',
  'Virginia Woolf||Um Teto Todo Seu': 'Ensaio nascido de duas palestras: para escrever ficção, uma mulher precisa de dinheiro e de um quarto só dela — e a história explica por que quase nenhuma teve.',
  'Virginia Woolf||Mrs. Dalloway': 'Um único dia em Londres, dentro da cabeça de uma mulher que organiza uma festa e de um veterano de guerra que não consegue voltar.',
  'Maya Angelou||Eu Sei Por Que o Pássaro Canta na Gaiola': 'Primeira parte da autobiografia: infância no Arkansas segregado, o estupro aos oito anos, os cinco anos de mudez e a descoberta da literatura.'
};

/* ================================================================
   PÁGINAS ÚNICAS DAS OBRAS PRINCIPAIS
   ================================================================ */
const OBRA_PAGINA = {
  'Graciliano Ramos||Vidas Secas': {
    sobre: 'Conta a história da seca que assolou o Nordeste, acompanhando Fabiano, Sinhá Vitória, dois meninos sem nome e a cachorra Baleia — uma família de retirantes que sai de casa em busca de melhores condições e de uma vida digna, e encontra pelo caminho a fome, o abuso de poder e o silêncio.',
    contexto: 'Publicado em 1938, quatro anos depois da grande seca de 1932, que levou o governo a criar campos de concentração de retirantes no Ceará. O Brasil vivia o Estado Novo, com censura e prisões políticas, e o romance de 1930 já havia colocado o Nordeste no centro da literatura nacional.',
    momento: 'Graciliano escreveu o livro logo depois de sair da cadeia. Havia passado dez meses preso sem acusação formal, entre navios-prisão e a Ilha Grande, e trabalhava como revisor no Rio de Janeiro. Os capítulos foram publicados avulsos em jornais antes de virarem livro — por isso cada um funciona também como conto.',
    importancia: 'É o ponto mais alto da prosa seca brasileira: frases curtas, sem adjetivo sobrando, sem uma linha de piedade fácil. O capítulo da morte de Baleia é considerado um dos momentos mais duros da literatura em português. Foi traduzido para dezenas de idiomas e virou filme de Nelson Pereira dos Santos, em 1963, marco do Cinema Novo.',
    curiosidade: 'Os dois filhos do casal não têm nome: são "o menino mais velho" e "o menino mais novo". A cachorra é o único personagem com nome próprio, e é dela o capítulo mais lembrado.'
  },
  'Clarice Lispector||A Hora da Estrela': {
    sobre: 'Macabéa é uma datilógrafa alagoana de dezenove anos que vive numa pensão no Rio, come cachorro-quente, ouve Rádio Relógio e não sabe que é infeliz. Quem conta a história é Rodrigo S. M., um narrador que se atormenta o tempo todo perguntando se tem direito de falar por ela.',
    contexto: 'Publicado em 1977, poucos meses antes da morte da autora, em pleno regime militar e em meio à migração nordestina em massa para o Sudeste. É o livro em que Clarice, sempre acusada de escrever para poucos, encara a pobreza de frente.',
    momento: 'Clarice estava doente e sabia disso. Escreveu o livro em pedaços de papel avulsos, e o título original tinha treze variações, todas impressas na abertura. Morreu de câncer no ano seguinte, no dia anterior ao seu aniversário de 57 anos.',
    importancia: 'É o livro mais lido da autora e o que melhor resume seu projeto: não explicar a personagem, mas expor o problema de tentar. A pergunta que ele deixa — quem pode narrar a vida de quem não tem voz — atravessou a literatura brasileira das décadas seguintes.'
  },
  'Machado de Assis||Dom Casmurro': {
    sobre: 'Bentinho, já velho e sozinho numa casa que mandou construir igual à da infância, resolve escrever a história do seu casamento com Capitu. Quer provar que foi traído com o melhor amigo. O leitor termina o livro sem conseguir decidir se ele tem razão — e essa dúvida é o livro.',
    contexto: 'Publicado em 1899, no fim do século e no começo da República. O Brasil recém-saíra da escravidão, e a elite do Rio de Janeiro a que Bentinho pertence é retratada com uma ironia que os leitores da época não perceberam por inteiro.',
    momento: 'Machado tinha sessenta anos, era presidente da Academia Brasileira de Letras e já havia escrito "Brás Cubas" e "Quincas Borba". Estava no auge do domínio técnico e escolheu deliberadamente um narrador em quem não se pode confiar.',
    importancia: 'Durante décadas o país discutiu se Capitu traiu, até que a crítica percebeu que a pergunta certa é outra: por que acreditamos em Bentinho? O romance é hoje um dos exemplos clássicos mundiais de narrador não confiável, ao lado dos de Nabokov e Ford Madox Ford.',
    curiosidade: 'Capitu nunca fala em defesa própria no livro. Tudo o que sabemos dela chega pela boca de quem a acusa.'
  },
  'Fernando Pessoa||Mensagem': {
    sobre: 'Quarenta e quatro poemas curtos que recontam a história de Portugal como profecia, divididos em três partes: o brasão, o mar e o tempo que virá. Vão do mito fundador aos navegadores, terminando na espera pelo que ainda não aconteceu.',
    contexto: 'Publicado em 1934, sob a ditadura de Salazar, e inscrito num concurso oficial de poesia nacionalista — no qual ficou em segundo lugar da sua categoria. É um livro patriótico e, ao mesmo tempo, estranho demais para servir de propaganda.',
    momento: 'Foi o único livro em português que Pessoa publicou em vida. Ele tinha 46 anos e morreria no ano seguinte, deixando na arca mais de vinte e cinco mil papéis inéditos.',
    importancia: 'É o texto que fixou "Mar Português" e "Tudo vale a pena se a alma não é pequena" na memória coletiva de língua portuguesa. Também é a chave para entender a tensão entre o Pessoa místico e o Pessoa moderno.'
  },
  'Guimarães Rosa||Grande Sertão: Veredas': {
    sobre: 'Riobaldo, fazendeiro velho e ex-jagunço, conta a um interlocutor que nunca responde a guerra entre bandos no sertão, o pacto que talvez tenha feito com o diabo numa encruzilhada e o amor por Diadorim, o companheiro de armas cujo segredo só se revela no fim.',
    contexto: 'Publicado em 1956, num Brasil que se industrializava e construía Brasília, o livro olha para trás — para o sertão das primeiras décadas do século — no exato momento em que o país tentava esquecê-lo.',
    momento: 'Rosa era diplomata e escreveu o romance em pouco mais de dois anos, junto com os contos de "Corpo de Baile". Trabalhava de madrugada, com cadernetas de campo cheias de palavras anotadas em viagens pelo interior de Minas.',
    importancia: 'É considerado o maior romance brasileiro do século XX. A língua é reinventada palavra a palavra, misturando fala sertaneja, arcaísmo, neologismo e sintaxe própria. Não tem capítulos: é um bloco único de fala, do começo ao fim.',
    curiosidade: 'A última palavra do livro é "travessia", seguida do símbolo do infinito.'
  },
  'Marco Aurélio||Meditações': {
    sobre: 'Anotações privadas de um imperador romano escritas em campanha militar, na fronteira do Danúbio, sem intenção de publicação. São lembretes para si mesmo sobre como não se deixar levar pela raiva, como aceitar a morte e como fazer o que precisa ser feito.',
    contexto: 'Escritas entre 170 e 180 d.C., durante as guerras contra os povos germânicos e em meio à peste antonina, que matou milhões no império. O autor era o homem mais poderoso do mundo conhecido e passava os dias tentando não se corromper por isso.',
    momento: 'Marco Aurélio tinha perdido vários filhos, enfrentava uma revolta interna e sabia que sua saúde estava indo. O primeiro livro é inteiro dedicado a agradecer o que aprendeu com cada pessoa de sua vida — e é a parte menos citada e talvez a mais reveladora.',
    importancia: 'É o texto estoico mais lido do mundo, adotado por militares, atletas, executivos e pacientes em tratamento. Sua força vem justamente de não ter sido escrito para ninguém: não há retórica, não há defesa de posição, só alguém tentando se manter íntegro.'
  },
  'Sun Tzu||A Arte da Guerra': {
    sobre: 'Treze capítulos curtos sobre como vencer com o menor custo possível: conhecer o terreno, conhecer o adversário, conhecer a si mesmo, e preferir sempre a vitória sem batalha ao confronto direto.',
    contexto: 'Escrito na China do Período dos Estados Combatentes, entre os séculos V e III a.C., quando reinos rivais guerreavam sem trégua e um erro estratégico podia apagar um Estado inteiro do mapa.',
    importancia: 'Atravessou dois mil e quinhentos anos e saiu do campo militar: é leitura obrigatória em escolas de negócios, em direito e em esporte de alto rendimento. A ideia central — que a melhor vitória é a que não precisa de luta — continua sendo o que mais se cita dele.'
  },
  'Viktor Frankl||Em Busca de Sentido': {
    sobre: 'A primeira parte descreve o que o autor observou como prisioneiro em campos de concentração, incluindo Auschwitz. A segunda apresenta a logoterapia, a abordagem que ele criou a partir dali: o que sustenta uma pessoa não é o prazer nem o poder, é ter um porquê.',
    contexto: 'Escrito em nove dias, em 1946, logo após a libertação. Frankl havia perdido a mulher, os pais e o irmão. O manuscrito original de sua teoria, costurado no forro do casaco, foi destruído na entrada do campo, e ele o reconstruiu de memória.',
    importancia: 'Vendeu mais de dezesseis milhões de exemplares e foi eleito um dos livros mais influentes dos Estados Unidos pela Biblioteca do Congresso. É leitura frequente em cuidados paliativos, psiquiatria e formação de profissionais de saúde.'
  },
  'George Orwell||1984': {
    sobre: 'Winston Smith trabalha no Ministério da Verdade reescrevendo notícias antigas para que o passado sempre confirme o presente. Ele começa um diário, se apaixona e tenta guardar para si um pedaço de verdade num Estado que vigia até o pensamento.',
    contexto: 'Publicado em 1949, com a Europa saindo da guerra e entrando na Guerra Fria. Orwell tinha lutado na Espanha, visto de perto a manipulação stalinista da informação e escrito sobre isso desde então.',
    momento: 'Escreveu o livro doente de tuberculose, numa casa isolada na ilha escocesa de Jura, datilografando ele mesmo o manuscrito final. Morreu sete meses após a publicação, aos 46 anos.',
    importancia: 'Deu ao vocabulário comum "Grande Irmão", "duplipensar", "novilíngua" e "polícia do pensamento". Continua sendo a referência mais citada em debates sobre vigilância, propaganda e reescrita de fatos.'
  },
  'Antoine de Saint-Exupéry||O Pequeno Príncipe': {
    sobre: 'Um piloto cai no deserto do Saara e encontra um menino vindo de um asteroide minúsculo. O menino conta das visitas que fez a outros planetas, da rosa que deixou para trás e da raposa que lhe ensinou o que significa cativar.',
    contexto: 'Publicado em 1943, em Nova York, com a França ocupada e o autor exilado. É um livro infantil escrito por um homem que estava perdendo o país e que voltaria a voar pela França Livre no ano seguinte.',
    momento: 'Saint-Exupéry desapareceu em missão no Mediterrâneo em julho de 1944, um ano após a publicação. Os destroços de seu avião só foram encontrados em 2000.',
    importancia: 'É um dos livros mais traduzidos do mundo, com versões em mais de quinhentos idiomas e dialetos. As ilustrações são do próprio autor, que era piloto e desenhava mal de propósito.'
  },
  'Anne Frank||O Diário de Anne Frank': {
    sobre: 'Dois anos de anotações de uma adolescente escondida com a família num anexo secreto nos fundos de um prédio comercial em Amsterdã. Fala de medo e de fome, mas também de brigas com a mãe, do primeiro beijo e da vontade de ser escritora.',
    contexto: 'Escrito entre 1942 e 1944, durante a ocupação nazista dos Países Baixos. Oito pessoas viveram escondidas no anexo até serem denunciadas. Só o pai, Otto Frank, sobreviveu.',
    momento: 'Anne recebeu o diário de aniversário, aos treze anos, poucas semanas antes de a família se esconder. Estava reescrevendo o texto para publicá-lo como livro quando o esconderijo foi descoberto. Morreu em Bergen-Belsen aos quinze anos.',
    importancia: 'É a porta de entrada de gerações inteiras ao Holocausto, justamente por não descrever campos nem violência direta: descreve uma vida comum sendo estrangulada aos poucos. Está traduzido em mais de setenta idiomas.'
  },
  'Simone de Beauvoir||O Segundo Sexo': {
    sobre: 'Investigação em dois volumes sobre como a mulher foi construída como o "outro" em relação ao homem — na biologia, na psicanálise, no materialismo histórico, na religião, na literatura e no cotidiano de cada fase da vida.',
    contexto: 'Publicado em 1949, quando as francesas tinham direito ao voto havia apenas cinco anos e ainda precisavam de autorização do marido para trabalhar. O livro foi para o Índice da Igreja e vendeu vinte e dois mil exemplares na primeira semana.',
    importancia: 'A frase de abertura da segunda parte — de que não se nasce mulher, torna-se — organizou o feminismo da segunda onda e continua sendo o ponto de partida de qualquer discussão sobre gênero como construção social.'
  },
  'Paulo Freire||Pedagogia do Oprimido': {
    sobre: 'Critica o que chama de educação bancária, em que o professor deposita conteúdo em alunos tratados como recipientes vazios, e propõe no lugar uma alfabetização que parte das palavras e da realidade de quem aprende.',
    contexto: 'Escrito no exílio no Chile, depois do golpe de 1964, que interrompeu o programa nacional de alfabetização que Freire coordenava. No Brasil, o livro só pôde circular anos depois.',
    importancia: 'É um dos livros de educação mais citados do mundo e serviu de base para programas de alfabetização de adultos na América Latina, na África e nos Estados Unidos. Também é um dos textos brasileiros mais influentes já escritos, em qualquer área.'
  },
  'Nelson Mandela||Longa Caminhada até a Liberdade': {
    sobre: 'Autobiografia que vai da infância numa aldeia do Transkei à presidência da África do Sul, passando pelos 27 anos de prisão, boa parte deles em Robben Island, quebrando pedra numa pedreira de cal.',
    contexto: 'Parte do manuscrito foi escrita clandestinamente na prisão, nos anos 1970, e enterrada no jardim. Foi descoberta e confiscada, mas uma cópia havia saído com um companheiro libertado.',
    importancia: 'É o relato em primeira pessoa da transição sul-africana e da decisão política mais difícil daquele processo: negociar com quem o havia prendido, em vez de ganhar pela força.'
  },
  'Charles Darwin||A Origem das Espécies': {
    sobre: 'Apresenta a seleção natural: variações herdáveis que dão vantagem em determinado ambiente tendem a se acumular ao longo de gerações. O argumento é construído devagar, com centenas de exemplos de criadores de pombos, plantas e insetos.',
    contexto: 'Publicado em 1859, vinte anos depois de Darwin ter formulado a hipótese. Ele adiou a publicação por saber o que causaria, e só se decidiu quando Alfred Russel Wallace lhe enviou um artigo com a mesma ideia.',
    importancia: 'Reorganizou a biologia inteira e continua sendo a base de tudo o que se faz na área. A primeira tiragem esgotou no dia do lançamento.'
  },
  'Benjamin Graham||O Investidor Inteligente': {
    sobre: 'Ensina a tratar uma ação como pedaço de uma empresa, a exigir margem de segurança em toda compra e a lidar com o Sr. Mercado — a figura que aparece todo dia oferecendo preços eufóricos ou desesperados.',
    contexto: 'Publicado em 1949, quando a geração que viveu a quebra de 1929 ainda não confiava em ações. Graham havia perdido quase tudo na crise e reconstruiu seu método a partir dali.',
    importancia: 'Warren Buffett o chama de melhor livro sobre investimento já escrito e diz que os capítulos 8 e 20 mudaram sua vida. É a fundação do investimento em valor.'
  },
  'Daniel Kahneman||Rápido e Devagar': {
    sobre: 'Descreve dois modos de pensar: um rápido, automático e emocional, outro lento, deliberado e cansativo. Mostra, com décadas de experimentos, onde o primeiro erra de forma sistemática e previsível.',
    contexto: 'Publicado em 2011, reúne quarenta anos de pesquisa feita com Amos Tversky, morto em 1996. O trabalho dos dois rendeu a Kahneman o Nobel de Economia em 2002 e fundou a economia comportamental.',
    importancia: 'Reorganizou a forma como governos, empresas e médicos pensam decisão sob incerteza. Conceitos como ancoragem, aversão à perda e viés de disponibilidade entraram no vocabulário comum a partir daqui.'
  }
};

/* ================================================================
   aplicação
   ================================================================ */
let _obrasFase6 = { novas: 0, descricoes: 0, autores: 0 };
function aplicarObrasFase6() {
  let novas = 0,
    autoresNovos = 0;

  Object.entries(OBRAS_EXTRA).forEach(([autor, lista]) => {
    const c = canonAuthor(autor);
    if (!OBRAS[c]) {
      OBRAS[c] = [];
      autoresNovos++;
    }
    lista.forEach(([t, tipo, ano, d]) => {
      if (OBRAS[c].some((o) => bNorm(o.t) === bNorm(t))) return;
      OBRAS[c].push({ t, tipo, ano, d, autor: c });
      novas++;
    });
  });

  let descricoes = 0;
  Object.entries(DESC_NOVA).forEach(([chave, texto]) => {
    const [autor, titulo] = chave.split('||');
    const lista = OBRAS[canonAuthor(autor)];
    if (!lista) return;
    const o = lista.find((x) => bNorm(x.t) === bNorm(titulo));
    if (!o) return;
    o.dAntiga = o.d;
    o.d = texto;
    descricoes++;
  });

  /* reindexa: o identificador de cada obra precisa continuar único */
  Object.keys(OBRA_POR_ID).forEach((k) => delete OBRA_POR_ID[k]);
  Object.keys(OBRAS).forEach((c) => {
    OBRAS[c].sort((a, b) => (a.citada ? 1 : 0) - (b.citada ? 1 : 0));
    OBRAS[c].forEach((o, i) => {
      o.oid = slugify(c) + '--' + i;
      OBRA_POR_ID[o.oid] = o;
    });
  });

  _obrasFase6 = { novas, descricoes, autores: autoresNovos };
  return _obrasFase6;
}
