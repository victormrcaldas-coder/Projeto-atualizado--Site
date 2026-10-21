# Plano da Etapa 9 refeita (aprovado pelo proprietário)

> Cópia do plano aprovado na sessão de 13 a 21/10/2026. O andamento de cada portão fica em `RETOMAR.md`.

## Contexto

O proprietário aprovou as recomendações do Portão A:

1. manter o que mudei sem autorização;
2. a assinatura "os retratos";
3. a home mais calma;
4. o filme vivo no Descubra, com o Descubra subindo para logo depois do Explorar, e 5 s depois da escrita;
5. abrir a fase dos filmes de arquivo depois do Portão B;
6. a gramática do movimento;
7. o tema escuro nascendo do café, no Portão E;
8. trocar os textos com travessão;
9. ver o site pelo GitHub Pages numa branch.

**O pedido agora:**

- levar movimento e transições a todas as telas, com itens da biblioteca de referência e transições novas;
- usar os padrões de UI/UX mais novos;
- pôr "vídeos no site", no sentido de movimento contínuo;
- o Crítico segue avaliando, sem amenizar, e trabalhamos até o melhor resultado ("quero buscar o 10").

**Onde estamos:**

- **Notas** da combinação aprovada: 8,5 / 7,5 / 7.
- **Branch:** `redesign/09a-direcao` (commit 523bf4e, limpo). A `main` não foi tocada.

**O que o levantamento do código mostrou (o motivo da fluidez baixa):**

- **Não existe roteamento.** `navigateTo(view)` (`app/20:946`) só troca `.hidden` (`display:none`) e rola suave até o topo **depois** da troca.
- **Sem histórico:** não há `pushState` nem `popstate`, então o Voltar do navegador sai do site.
- **Sem foco:** o foco não vai para a tela nova.
- **Sem View Transition** no site.
- **O cabeçalho anima a altura** (`navegacao.css:21-40`).
- **O botão "Mais"** nunca fica marcado.
- **Os `[data-nav]` criados depois da carga** não recebem o clique: não há delegação.
- **Para onde vão as telas:**
  - Descubra e Histórias abrem a história num overlay `#bioExpand` (`app/24:215-339`);
  - o autor vai por `abrirPanorama` (`app/24:926`, `panAtual`);
  - a obra vai por `abrirObra` (`app/19:9`, `obraAtual`).
- **Os embrulhos de `navigateTo`:**
  - `app/24:2141` (SEO);
  - `app/40:675` (galeria).

## Como vou trabalhar (o que muda a partir daqui)

- **Uma branch por bloco, em cadeia:**
  - `redesign/09b-transicoes` sai da `09a`;
  - `09c` sai da `09b`, e assim por diante.

  Cada uma é enviada ao GitHub ao fechar o bloco. **Nada vai para a `main` sem o seu "pode juntar".**

- **A ordem:**
  1. A′;
  2. B;
  3. as fases 130 e 131 por agentes, em paralelo ao C, em commits próprios na `09c`;
  4. C;
  5. D;
  6. E;
  7. portão final.
- **Vitrine (decisão 9).** A branch `redesign/vitrine` aponta sempre para o último bloco fechado. Ela só avança (sem force-push), porque a cadeia é linear. Você liga o Pages nela uma vez só (Settings → Pages → Deploy from a branch → `redesign/vitrine`, `/ (root)`) e o endereço fica o mesmo até o fim.
- **Sem parar entre os blocos, como você pediu.** Sigo de B até E e o Crítico é quem libera cada bloco. Ao fechar um bloco, mando os vídeos dele sem esperar resposta. As decisões que não forem minhas ficam como opções atrás de `?portao`, na lista do fim. Isso vale para o que fuja deste plano (estrutura, comportamento ou texto novo de interface).
- **O Crítico fica mais duro.** Em cada rodada é um avaliador novo, que não vê as notas anteriores (assim não sobe nota por "melhorou").
  - **Régua fixa:**
    - 10 = o nível dos melhores sites gravados nas referências (Brik, Monograph, Kierkegaard, Set);
    - 9 = vitrine de design (Godly);
    - 7 = trabalho profissional comum.
  - **Regras da nota:**
    - qualquer defeito grave limita o eixo a 8;
    - a lista dos 10 piores defeitos é obrigatória, mesmo quando a nota é alta.
  - **Ele vê:**
    - prints em 6 larguras e nos 2 temas;
    - folhas de quadros de cada transição (um quadro a cada 50 ms);
    - os vídeos;
    - as medidas automáticas (quadros perdidos, CLS, tempo de resposta).
  - **Libera o bloco** com 9,5 ou mais em cada eixo em duas rodadas seguidas. Se o que falta depender de você ou de curadoria, isso vai para a lista do fim.

## Bloco A′: aplicar as decisões do Portão A (na `09a`)

**As opções aprovadas viram padrão, sem `?`:**

- **Os retratos:** duotono e passe-partout.
- **A home calma.**
- **O filme no Descubra.**
- **O Descubra sobe para logo depois do Explorar** (`index.html`, `#home-descubra` antes de `#home-acaso`).
- **O que sai:** as aspas, a ficha e o filme na abertura.
- **A barra `?portao`** fica só como ferramenta para as opções que ainda pedem decisão.

**Arquivos novos:**

| Arquivo                           | Origem                                           |
| --------------------------------- | ------------------------------------------------ |
| `assets/css/telas/assinatura.css` | Retratos e home calma, tirados de `portao-a.css` |
| `assets/css/telas/filme.css`      | O filme                                          |
| `assets/js/app/41-filme.js`       | O filme, tirado de `41-portao.js`                |
| `assets/js/app/48-portao.js`      | Só a barra                                       |

`app/99` continua sendo o último. `portao-a.css` sai.

**Textos sem travessão (decisão 8):**

| Onde                           | Mudança                                                     |
| ------------------------------ | ----------------------------------------------------------- |
| `app/18:407`                   | `…ou uma obra, e siga a partir daí.`                        |
| `app/14:367`                   | `…popular, sem fonte primária localizada.`                  |
| `app/24:960`                   | `…em curadoria. Preferimos dizer isso a inventar um texto.` |
| `app/10:158`                   | `"…" (via MeMotiva)`                                        |
| `app/24:1161` e `index.html:6` | `MeMotiva: frases, histórias e motivação para cada dia`     |
| `app/24:1178`                  | `${obra}, de ${autor} \| MeMotiva`                          |
| `app/24:1220`                  | `${nome}: biografia, frases e obras \| MeMotiva`            |
| `app/24:951`                   | `${nome}, ${papel}.`                                        |

**Registro:** a decisão vai para `design/DECISOES.md`.

## Portão B: transições entre telas (`redesign/09b-transicoes`)

**Arquivos novos, antes do `99`.** Cada um é uma IIFE, sem `function` solta, porque `analise-carga.mjs` recusa declarações duplicadas.

| Arquivo                          | O que faz                                                                                                                                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assets/js/app/42-movimento.js`  | `window.Movimento`: a troca de tela (View Transition ou alternativa), o elemento clicado de origem, os pares de elemento compartilhado e a espera da foto                                                                                        |
| `assets/js/app/43-rota.js`       | O roteamento: o embrulho mais externo de `navigateTo`, histórico, link direto, altura de volta, foco e anúncio. Não precisa embrulhar `abrirPanorama` nem `abrirObra`, porque eles definem `panAtual` e `obraAtual` antes de chamar `navigateTo` |
| `assets/css/telas/movimento.css` | O CSS da transição                                                                                                                                                                                                                               |

**Cuidados que o levantamento mostrou:**

- **A View Transition só roda numa troca pedida por você:** clique, toque, tecla ou o botão Voltar. Toda troca feita por código continua instantânea e síncrona. Partes do site e os testes atuais chamam `navigateTo` e já leem a tela nova na linha seguinte.
- **Defeito que já existe, corrigido aqui:** `unlockScroll` (`app/12:27`) usa a rolagem suave. Ao fechar qualquer janela, a página rola do topo até onde você estava. Passa a voltar de forma instantânea.
- **O link direto espera o fim da curadoria.** A página do autor e a da obra só existem depois de `__fase5Boot`. Enquanto isso, `#mainApp` fica escondido, com uma garantia de 4 s.
- **O endereço só serve para procurar o autor ou a obra num mapa.** Ele nunca vai para a página, e um nome desconhecido leva à home.
- **Os nomes de transição** ficam só no par clicado e no destino, e são limpos ao fim. O cabeçalho, a barra de baixo e o aviso têm nome fixo, para ficarem parados.
- **Uma promessa recusada** da View Transition vira erro na página e quebraria o teste. As duas são tratadas.
- **Três cliques seguidos:** o anterior é pulado (`skipTransition`), e o atributo `html[data-transicao]` não fica preso.

**Roteamento e Voltar**

- `pushState` a cada navegação do usuário, guardando a tela, o autor ou a obra, e a altura da página que ficou para trás.
- `popstate` volta de tela e devolve a mesma altura. `scrollRestoration` fica em `manual`.
- O endereço reaproveita o formato que o SEO já escreve: `#autor-machado-de-assis`, `#obra-…`, além de `#explorar`, `#historias` e assim por diante. O link abre direto, depois da curadoria pronta.
- Janelas (frase, história, foto e folhas do celular) também entram no histórico. Assim o gesto de voltar do celular fecha a janela em vez de sair do site.

**A troca**

- É uma View Transition, com o tipo `ir` ou `voltar`.
  - A tela que sai esmaece em 180 ms.
  - A que entra sobe 8 px em 360 ms, com a `--curva-chegada`.
  - No `voltar` o sentido se inverte.
- O topo é posto **dentro** da troca, de forma instantânea. Acaba o pulo.
- O cabeçalho e a barra de baixo ficam parados, com nome próprio na transição.
- **Elementos que viram o próximo** (o nome da transição vai só no elemento clicado e no destino):
  - retrato (galeria, cartão, índice, filme) → retrato da página do autor, em 340 ms com a `--curva-troca`, como no Brik;
  - cartão da obra → título da obra.
- **Janelas não usam View Transition.** Elas animam a partir do cartão clicado (FLIP), e isso entra no Portão C:
  - capa da história → história aberta;
  - **"a aspa que abre"** (transição nova, da assinatura): a aspa do cartão vira a aspa grande da frase ampliada.
- **"A cor chega quando você chega à pessoa"** (transição nova): o retrato viaja em duotono e, já na página do autor, a cor revela em 450 ms.
- **Sem o recurso no navegador:** um esmaecimento simples, feito com `element.animate`. É só opacidade: um `transform` em `.view` quebraria os elementos fixos de dentro das telas.
- **Com movimento reduzido:** só esmaecimento de 120 ms.

**Foco e leitor de tela**

- O foco vai para o título da tela nova, e uma região `aria-live` anuncia o nome dela.
- `aria-current` marca o item do menu, e o "Mais" fica marcado quando a tela está dentro dele.
- Os cliques de `[data-nav]` passam a ser delegados, então os itens criados depois da carga também funcionam.

## Fase 130 (curadoria): filmes de arquivo, os "vídeos no site"

Segue o fluxo do ARCHITECTURE §8.3, com registro.

**A busca**

- Termina a busca nas 383 pessoas da era do cinema, a partir dos dados salvos (`scratchpad/portao-a/vid/`).
- Fontes:
  - a propriedade P10 (vídeo) do Wikidata;
  - as categorias do Commons "Videos of …";
  - o `depicts` do Commons.

**O que entra**

- Domínio público ou CC BY / BY-SA, com crédito.
- A pessoa aparece de verdade (não é ator, nem reconstituição).
- Ficam de fora funeral, corpo e violência.
- Cada arquivo é conferido quadro a quadro, numa folha de quadros.

**O trecho**

- 6 a 10 s, sem som, mp4 H.264, até 720 px.
- No máximo 450 KB por filme, mais um pôster de até 60 KB.
- Fica em `assets/video/arquivo/`, com orçamento total de 8 MB.

**A fase e o registro**

- O arquivo novo `assets/js/curadoria/40-fase130-filmes-de-arquivo.js` define `FILMES_DE_ARQUIVO`, com:
  - o arquivo e o pôster;
  - o ano;
  - o trecho;
  - o crédito, a licença e a página no Commons.
- O registro vai para `curadoria/trabalho/fase130-…` e para o `CHECKPOINT.md`.
- **Nada inventado:** quem não se confirma fica de fora, com o motivo.

**Onde aparecem**

1. **Página do autor:** o filme toca dentro da moldura do retrato, em duotono, só enquanto está na tela. Tem botão de pausa.
   - Crédito, com texto novo: "Filme de 1908 · domínio público · Wikimedia Commons".
2. **Filme vivo do Descubra:** quem tem filme aparece em movimento real, com a frase escrita por cima. É o que você descreveu: "vídeos atrás e fontes escritas por cima".
3. **Retratos nas listas e na galeria:** no computador, o filme toca no hover e no foco (o "hover video player" do Cult UI).

**Quando o filme não toca:** com movimento reduzido ou economia de dados, fica só o pôster, com um botão de tocar.

`ferramentas/lib/navegador.mjs` ganha os tipos `.mp4` e `.webm`.

## Fase 131 (curadoria): fotos

O acabamento não chega a 10 com fotos quebradas. É conteúdo, então também é uma fase com registro.

**Fotos de pessoas**

- As 41 fotos quebradas: trocar por um arquivo do Commons confirmado (P18 do Wikidata ou a categoria da pessoa), ou deixar sem foto, com registro.
- As 33 pequenas demais: procurar uma versão maior do mesmo retrato.
- A foto de Pessoa, o retrato de Pascal com a linha de escaneamento, e o Buffett do Descubra.

**Enquadramento**

- O ponto focal também na horizontal. O código lê `x` além de `y`.

**Créditos**

- Os créditos (autor e licença) aparecem na página do autor, com texto novo: "Foto: {autor} · {licença}".

## Portão C: janelas, listas, fotos e carregamento (`redesign/09c-janelas-listas`)

**Uma gramática só para as 10 janelas**

- Valem todas: frase, foto, história, entrar, "Mais", filtros do perfil, tradições, Publicados/Seguindo, editor de mídia e busca de música.
- **Como o controle acompanha as janelas:** observa a classe de cada uma (`show`/`open`) com um MutationObserver. Embrulhar as funções não serve: várias foram ligadas por `addEventListener` com a referência original (por exemplo `openMobileMenu` em `app/10:510-513`), e um embrulho não as alcançaria.
- **Arquivo novo:** `assets/js/app/44-janelas.js`.
- **O histórico das janelas:**
  - ao abrir, uma entrada no mesmo endereço;
  - ao fechar pelo X ou pelo Esc, a entrada sai (`history.go(-n)` numa microtarefa);
  - se uma navegação acontece na mesma hora (como "Conhecer" dentro da história), ela reaproveita a entrada.
- **Cuidados:**
  - `fecharSheet` e `fecharEditor` destravam a rolagem mesmo fechados: o controle confere `.show` antes de fechar.
  - `inert` só sai numa microtarefa, então o foco é dado só depois de `sincronizar()`.
  - Enquanto uma janela está aberta, `scrollY` vale 0: a altura certa é `_scrollLockY`.
- **O que todas passam a fazer:**
  - travar a rolagem (o `lockScroll` que já existe);
  - deixar o resto da página `inert`, o que prende o foco;
  - devolver o foco ao fechar;
  - fechar com Esc;
  - entrar no histórico.
- **Entrada e saída:** usam `@starting-style` com `transition-behavior: allow-discrete`, e assim até as janelas que hoje aparecem com `display` ganham a saída.
- **As 3 que hoje não têm nenhuma transição** passam a ter: Publicados/Seguindo, o editor e a busca de música.
- **Folha do celular** (o "family drawer" do Cult UI): a frase ampliada, a história e as folhas do perfil sobem de baixo e fecham arrastando para baixo. Fecha se o arrasto passar de 25% da altura, ou pela velocidade do gesto.
  - **Tempo:** o Cult UI usa 500 ms; aqui fica no teto da gramática, 450 ms.
  - **Curva:** a do Cult UI, `(.32,.72,0,1)`, vira o token novo `--curva-folha`.
- **O "Mais"** vira painel lateral (o "side panel" do Cult UI).
- **Filtros e tradições** crescem a partir do botão (o "popover" do Cult UI, 220 ms).

**Listas**

- Valem para Explorar, Autores & Obras, Descubra, Histórias e Comunidade.
- **A troca:** a lista nova entra com cascata de 40 ms nos 6 primeiros cartões, 8 px e 360 ms, com a `--curva-chegada`.
  - Embrulha as funções que desenham a lista: `renderExploreResults`, `aoRenderResultados`, `renderDiscover`, `renderBiographies` e `renderCommunityView`.
  - Não usa View Transition por tecla: travaria a digitação na busca.
- **O que não anima:** o "carregar mais" da rolagem infinita.
- **O chip ativo:** o traço desliza até o chip novo (o "direction-aware tabs" do Cult UI). O mesmo vale para as abas Frases/Obras e Publicados/Seguindo.
- **A contagem** de resultados rola os dígitos (o "rolling number" do Cult UI) e não pisca.
- **"Ler mais"** da biografia e das seções da obra abre animando a altura (`interpolate-size`).

**Fotos e carregamento**

- **Toda foto se revela:** do fundo no tom da moldura, esmaece e assenta de 1,02 para 1, em 300 ms.
- **A placa com o nome** entra do mesmo jeito.
- **O estado "sem foto"** é desenhado: iniciais em serifa, dentro do passe-partout.
- **Esqueleto** com a forma final nas telas injetadas (Autores, autor, obra), com brilho lento de 1500 ms, como no Originkit.
- **O aviso (toast):**
  - vira uma pílula que cresce para mostrar a mensagem (o "dynamic island" do Cult UI);
  - é anunciado ao leitor de tela;
  - passa a pegar no site: hoje as regras dele são código morto.

## Portão D: rolagem, cursor, toque e cabeçalho (`redesign/09d-rolagem-toque`)

**Rolagem**

- **A revelação vale em todas as telas.** Usa animação ligada à rolagem (`animation-timeline: view()`) e, sem suporte, IntersectionObserver. Nada acima da dobra espera.
- **Os títulos grandes** sobem da própria linha, palavra por palavra, por máscara, uma vez (Brik e Set).
- **Os retratos** se revelam por recorte, de baixo para cima.
- **Os números da home** contam até o valor real, uma vez.
- **Barra de leitura** (uma linha damasco no topo) na história aberta e na página do autor, ligada à rolagem.
- **A capa da história aberta** ganha a câmera lenta do filme.

**Cabeçalho**

- Encolhe só com `transform`: o cabeçalho sobe 16 px e o conteúdo dele desce 8 px com escala de 0,94. A altura fica fixa em 68 px, e a página não se mexe mais.
- No celular, some ao descer e volta ao subir (Vessa).

**Cursor**

- Só no computador, com mouse.
- Os sublinhados se desenham da esquerda para a direita.
- O fio do cartão se estende no hover e no foco.
- O nome e as datas do retrato aparecem no hover **e** no foco (o "cutout card" do Cult UI).
- A cor do retrato chega no hover e no foco (o duotono esmaece em 300 ms).
- A galeria da home arrasta com inércia.

**Toque**

- No celular, pressionar dá escala de 0,98 em 150 ms (Refero), sem o realce azul.
- No filme do Descubra, deslizar troca a pessoa.

**Opções para o Crítico julgar** (entram só atrás de `?portao`; se ele aprovar, vão para a sua lista do fim):

- o letreiro lento dos temas (o "ribbon" do Inspotype, 12 s);
- o fundo da home que escurece ao entrar na sala roxa (Monograph).

## Portão E: acabamento, tema escuro e tipografia (`redesign/09e-acabamento`)

**Tema escuro (decisão 7)**

- Nasce do café, com o roxo de verdade (#401D47) nas salas.
- "Fonte conferida" numa cor só.
- O damasco não vira laranja.
- AA medido.

**Tipografia de livro**

- Em todo bloco de frase:
  - a aspa pendurada (`hanging-punctuation`, com recuo negativo onde não há suporte);
  - `text-wrap: balance` nos títulos e `pretty` nos textos, sem palavra sozinha;
  - números de texto na leitura e tabulares nos contadores;
  - hifenização pt-BR nas colunas estreitas.

**Estados**

- Todos os estados de cada componente, nos dois temas: repouso, hover, foco, pressionado, desabilitado, carregando, vazio e erro.
- Cor de seleção de texto e barra de rolagem discreta.

**Uma camada de CSS só**

- **O bloco injetado de `curadoria/29`:** um código novo em `app/` o retira na carga, e o que ainda serve vai para o CSS. A fase antiga não é editada.
- **O `memotiva.css`** sai tela por tela, comparando prints (6 larguras × 2 temas) antes e depois.
- **O sistema** carrega uma vez só, sem as 5 cópias com escopo.
- **Os 85 `style=""`** dos templates viram classes.

**Desempenho**

- As fotos só são pré-carregadas quando a pessoa aparece na tela (pendência 15).
- `content-visibility` nas listas longas.
- Os filmes só carregam na tela.

## Portão final

- Dois Críticos novos, que não se conhecem, revisam:
  - as 14 telas;
  - as 11 larguras (320 a 1920);
  - os 2 temas;
  - os vídeos.

  Cada um precisa dar 9,5 ou mais em cada eixo.

- O `RELATORIO-FINAL.md` é refeito, com as referências e os princípios.
- A `redesign/vitrine` recebe o resultado final.
- Você abre, dá a sua nota e decide o "pode juntar".

## A biblioteca no site (o que entra e de onde vem)

| Padrão                             | Onde                             | Referência                             |
| ---------------------------------- | -------------------------------- | -------------------------------------- |
| Elemento compartilhado entre telas | retrato, capa, obra              | Brik (340 ms, `(.2,0,0,1)`)            |
| A aspa que abre                    | cartão → frase ampliada          | criação nossa                          |
| A cor chega com a pessoa           | retrato → página do autor        | criação nossa                          |
| Folha que sobe e fecha arrastando  | frase, história, perfil          | Cult UI family-drawer                  |
| Painel lateral / popover           | "Mais", filtros, tradições       | Cult UI side-panel, popover; Proofmode |
| Abas com traço que desliza         | chips e abas                     | Cult UI direction-aware-tabs           |
| Altura que anima                   | "ler mais"                       | Cult UI expandable                     |
| Dígitos que rolam                  | contagens e números              | Cult UI rolling-number                 |
| Nome que aparece no retrato        | retratos                         | Cult UI cutout-card                    |
| Filme no hover                     | retratos com filme de arquivo    | Cult UI hover-video-player             |
| Aviso em pílula                    | toast                            | Cult UI dynamic-island                 |
| Título que sobe por máscara        | títulos grandes                  | Brik, Set                              |
| Escrita palavra por palavra        | filme vivo                       | Brik, Set                              |
| Vídeo atrás com fusão lenta        | filme vivo com filmes de arquivo | Set (1500 ms)                          |
| Esqueleto com brilho lento         | telas injetadas                  | Originkit (1500 ms)                    |
| Cabeçalho que some ao descer       | celular                          | Vessa (650 ms)                         |
| Barra de leitura                   | história, autor                  | Set                                    |
| Toque que afunda                   | botões e cartões                 | Refero                                 |

## Recursos novos do navegador

| Recurso                                      | Uso                              | Sem suporte                      |
| -------------------------------------------- | -------------------------------- | -------------------------------- |
| View Transitions, com os tipos `ir`/`voltar` | telas e elementos compartilhados | esmaecimento simples             |
| `animation-timeline: view()` / `scroll()`    | revelação e barra de leitura     | IntersectionObserver / sem barra |
| `@starting-style` + `allow-discrete`         | entrada e saída das janelas      | abre sem animar a saída          |
| `interpolate-size`                           | "ler mais"                       | abre sem animar                  |
| `linear()` (molas medidas no Cult UI)        | folha, chips                     | curva comum                      |
| `inert`                                      | janelas                          | a armadilha de foco atual        |
| `text-wrap`, `hanging-punctuation`           | tipografia                       | recuo                            |
| `content-visibility`                         | listas longas                    | —                                |

## Arquivos principais

| Arquivo                                                                        | O que muda                                                                                                                                            |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/js/app/41-filme.js`                                                    | Novo: o filme vivo, com filmes de arquivo                                                                                                             |
| `assets/js/app/42-movimento.js`                                                | Novo: troca de tela, origem e pares compartilhados, cascata das listas, traço dos chips, dígitos que rolam e a correção da rolagem ao fechar janela   |
| `assets/js/app/43-rota.js`                                                     | Novo: histórico, link direto, altura de volta, foco, anúncio, `aria-current` e cliques delegados                                                      |
| `assets/js/app/44-janelas.js`                                                  | Novo: a gramática das janelas, FLIP a partir do cartão, a folha do celular e o histórico das janelas                                                  |
| `assets/js/app/45-fotos-rolagem.js`                                            | Novo: revelação de foto, esqueleto, aviso em pílula, revelação na rolagem, títulos, números, cabeçalho, galeria com inércia, toque e barra de leitura |
| `assets/js/app/46-filmes-arquivo.js`                                           | Novo: o filme no autor e no hover                                                                                                                     |
| `assets/js/app/48-portao.js`                                                   | Novo: só a barra de opções                                                                                                                            |
| `assets/css/telas/assinatura.css`, `filme.css`, `movimento.css`, `janelas.css` | Novos                                                                                                                                                 |
| `assets/css/01-tokens.css`                                                     | `--curva-folha` e as molas `linear()` (só acréscimos; o teto de 450 ms continua, e o filme segue como a única exceção)                                |
| `assets/js/curadoria/40-fase130-…`, `41-fase131-…`                             | As fases de conteúdo                                                                                                                                  |
| `app/10`, `12`, `14`, `18`, `24`                                               | Só os textos aprovados e as classes no lugar de `style=""` (Portão E)                                                                                 |
| `index.html`                                                                   | Ordem das seções da home, os CSS e scripts novos, `<title>`                                                                                           |
| `ferramentas/testes/movimento.mjs`                                             | Novo, entra no `npm run teste`                                                                                                                        |
| `ferramentas/design/videos.mjs`                                                | Ganha `--folha` (folha de quadros a cada 50 ms, para o Crítico) e roteiros novos                                                                      |

## Verificação (em cada portão)

**`npm run teste`:** verde, com o `movimento.mjs` novo (1440 e 390). Ele confere:

- **Histórico:**
  - Voltar e Avançar entre telas, autor e obra;
  - a mesma altura, com margem de ±40 px;
  - `#panBack` não aumenta o histórico.
- **Link direto:**
  - `#autor-…`, `#obra-…` e `#explorar`;
  - recarregar a página mantém a tela;
  - um nome inválido ou malicioso (`#autor-<img onerror>`) vai para a home e não cria nada na página.
- **Foco:** vai para o título; só um `aria-current` por menu; o "Mais" marcado no Descubra.
- **Janelas:**
  - entram no histórico e deixam o resto `inert`;
  - o Voltar fecha só a de cima;
  - Esc e X tiram a entrada;
  - "Conhecer" dentro da história e depois Voltar não reabre a janela.
- **View Transition:**
  - uma por clique, nenhuma por código;
  - nenhum nome sobrando;
  - 3 cliques em 50 ms não travam;
  - com a aba escondida, não roda.
- **Sem View Transition** (o recurso apagado): o histórico, o foco e o esmaecimento funcionam.
- **Movimento reduzido:** nenhum quadro com `transform`, e a View Transition não é chamada.
- **Estabilidade:**
  - os listeners iguais depois de 10 e de 50 navegações;
  - nenhum `inert` sobrando;
  - a rolagem destravada.
- **Cabeçalho compacto:** a mesma altura.
- **Listas:** no máximo 8 cartões animados; nada no "carregar mais"; a contagem final exata.
- **Folha no 390:**
  - arrastar 40% fecha;
  - arrastar 10% volta.
- **0 exceções.**

**Os testes atuais não são reescritos.** A troca da tela acontece no quadro seguinte ao clique, e eles já esperam de 300 a 400 ms. Se algum falhar só pelo tempo da transição, eu registro qual e por quê. A correção vai no código do site, não no teste.

**`npm run estado:comparar`:** IDÊNTICO nos portões de código. Nas fases 130 e 131, a diferença fica só no que a fase mexe.

**`node ferramentas/codigo/analise-carga.mjs`:** ordem certa, com o `99` por último.

**Medidas automáticas**, com a CPU 4× mais lenta e no celular 390:

- CLS ao navegar abaixo de 0,02;
- menos de 5% de quadros perdidos em cada transição;
- resposta visual ao toque abaixo de 100 ms.

**Varredura:** 0 rolagem lateral e 0 falhas de contraste AA, nas 11 larguras e nos 2 temas.

**Crítico:** novo a cada rodada, 9,5 ou mais por eixo, com a lista dos 10 piores defeitos.

**Entrega de cada portão** (mandada sem esperar resposta):

- vídeos 390 e 1440, claro e escuro;
- as folhas de quadros;
- push da branch e a `redesign/vitrine` atualizada.

## Pontos que podem pedir a sua decisão no fim

- As opções que o Crítico aprovar e que mudam a cara do site (o letreiro, o fundo que escurece).
- Os filmes de arquivo que eu deixar de fora por gosto, e não por regra.
- O que o Crítico ainda apontar e que mude estrutura ou texto fora deste plano.
- O Pages: só você liga, em Settings → Pages.

**Limite honesto:** aqui só tenho o Chromium. Safari e Firefox recebem as alternativas, testadas desligando os recursos; a conferência final no iPhone fica com você, pelo Pages.
