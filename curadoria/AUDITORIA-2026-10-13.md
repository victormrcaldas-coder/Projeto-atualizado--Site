# Auditoria sistemática do MeMotiva — 13/10/2026

Feita sobre o **estado real** do site, ou seja, o que o Chromium carrega depois de toda a cadeia de fases (`ferramentas/testes/estado.mjs`). Antes de editar foram lidos `CHECKPOINT.md`, `PLANO.md` e os CSVs de `curadoria/`. A ordem de trabalho foi diagnosticar primeiro e depois corrigir **só o que ficou comprovado**. As correções de conteúdo estão na **Fase 129** (`assets/js/curadoria/39-fase129-auditoria.js`), com cada decisão em `curadoria/trabalho/fase129-auditoria-decisoes.jsonl`.

Ferramentas criadas para a auditoria (podem ser rodadas de novo a qualquer momento):

| Script | O que faz |
|---|---|
| `ferramentas/auditoria/editorial.py` | Roda 25 checagens automáticas sobre o estado capturado: duplicatas e variantes, campos, categorias, status, Bíblia, registro de remoções, obras, nomes de autor, datas de biografia, histórias e ligação entre frase e página da obra. |
| `ferramentas/auditoria/biblia.py` | Confere cada versículo contra o texto aberto da edição que o rótulo indica: ACF, AA e NVI do repositório `thiagobodruk/biblia`. |
| `ferramentas/auditoria/tecnico.mjs` | Mede no Chromium o tempo de carga, o layout shift, os erros de console e de rede, o crescimento de listeners ao navegar e roda **sondas de XSS** pelo armazenamento compartilhado e pelos campos de texto. |

---

## 1. Auditoria editorial

### 1.1 O que foi checado e o resultado

| Checagem | Resultado |
|---|---|
| Duplicatas exatas (texto normalizado) | **0** |
| Variantes do mesmo autor (Dice ≥ 0,60, faixa abaixo do portão da Fase 75) | 7 pares. **Todos são passagens distintas**: "Ensinar exige pesquisa" e "Ensinar exige saber escutar" (títulos de capítulo de Freire); Ética a Nicômaco X, 7 e X, 8; Mateus 5:6 e 5:9; Bhagavad Gita 2:68 e 2:61; *O Profeta*; dois ensaios de Montaigne. Nenhuma foi apagada. |
| Categoria inválida / status inesperado | 0 / 0 |
| Frase A sem fonte | **1**: Edison (ver 1.2) |
| Frase A sem evidência registrada | **92**: todas citações bíblicas (ver 1.2) |
| Fonte genérica em frase A | 9 sinalizadas, **todas falsos positivos**: as fontes nomeiam o discurso com data, o capítulo ou o livro que registra a fala (Lincoln, Roosevelt, Locke, Sojourner Truth na versão de Gage, Napoleão III, Muhammad Ali em Bockris, Will Durant na Time). |
| `orig` igual ao texto | 17, todos de autores de língua portuguesa (o original é o próprio texto). Correto. |
| Aspas desbalanceadas | **1**: Mateus 6:34 (ver 1.2) |
| Nota pública com linguagem de processo | 0 |
| Registro de remoções sem motivo / frase registrada como removida e ainda ativa | 0 / 0 |
| Obra sem descrição, título repetido do mesmo autor, página de obra órfã | 0 / 0 / 0 (as duplicatas entre obras seguem a decisão do proprietário de não unificar) |
| Nomes de autor quase iguais no índice | 0 |
| Datas do papel × cronologia | 1 divergência real (Newton) e 1 cronologia fora de ordem (Ken Blanchard). As outras 19 marcações são falsos positivos: a regex pegou outro evento do mesmo ano, como prisão, exílio ou publicação, ou se trata de pessoa viva ou de dupla de autores. |
| Histórias | 0 problemas estruturais |
| **Bíblia**: versículo × edição rotulada | **99 de 99 idênticos** ao texto aberto da edição indicada (ACF 52, NVI 25, AA 22). Nenhum rótulo foi padronizado. |
| Frase que cita obra do catálogo e não aparece na página dela | **33** (ver 1.2). Resta 1, correta: Charles Kuralt cita o especial de TV da CBS de 1987, que é outra obra, não o livro do catálogo. |
| Ditados Populares | Fora da auditoria por decisão do proprietário. Só se registra que `qcipdkwtuegyw` ("…amolando o machado") está em `negocios` e não em `ditados`. **Não foi alterado.** |

### 1.2 Achados confirmados e corrigidos (Fase 129)

| # | Achado | Evidência | Correção |
|---|---|---|---|
| E1 | **Edison**: "Não fracassei; apenas descobri dez mil maneiras que não funcionam" estava como confirmada (A) **sem fonte**. A nota dizia que vinha da biografia de Dyer e Martin (1910), mas essa redação não está no livro. | Texto integral de *Edison: His Life and Inventions* (Gutenberg #820), cap. XXIV, relato de Walter S. Mallory: *"Results! Why, man, I have gotten a lot of results! I know several thousand things that won't work."* | O texto passa a ser a fala documentada, com tradução própria, `orig`, fonte com capítulo e nota pública explicando que "dez mil maneiras" é paráfrase posterior. O texto antigo foi para o registro como `substituida`. |
| E2 | **Mateus 6:34** terminava com uma aspa solta (`mal".`). | Na NVI essa aspa fecha o Sermão do Monte (Mt 5–7) e não faz parte do versículo isolado. | A aspa foi retirada. O texto continua o da NVI. |
| E3 | **Miguel Reale**: a fórmula "o Direito é uma integração normativa de fatos segundo valores" estava ligada a *Filosofia do Direito*, e a própria nota (Fase 123) dizia "merece revisão". | Artigos acadêmicos (Revista Jurídica FURB; Âmbito Jurídico, n.º 156) citam a fórmula de *Teoria Tridimensional do Direito*. Nenhum a localiza em *Filosofia do Direito*. | A fonte passa a "Teoria Tridimensional do Direito (1968)", sem página inventada. |
| E4 | **Seth Godin**: "Não encontre clientes para seus produtos; encontre produtos para seus clientes" estava como A com fonte "Blog de Seth Godin", mas a evidência registrada era um **site de frases**. | Busca pela redação inglesa, com e sem `seths.blog`: só aparecem Goodreads, AZQuotes, Quotepark, Pinterest e Threads. O post original não foi localizado. | **Removida** do catálogo ativo, com registro em `remocoes-curadoria.csv` (motivo e fontes). Godin fica com 2 frases e passa a constar nas lacunas (97). |
| E5 | **Isaac Newton**: a cronologia dava o nascimento no calendário juliano ("Natal de 1642") e a morte no gregoriano (31/3/1727). O papel diz 1643–1727. | Britannica / Royal Society: 25/12/1642 no juliano equivale a 4/1/1643 no gregoriano. | A cronologia passa ao gregoriano, com o juliano entre parênteses. A bio ("no Natal de 1642") continua correta. |
| E6 | **Ken Blanchard**: a cronologia estava fora de ordem (1982 antes de 1979). | Os próprios anos registrados. | Os itens foram reordenados, sem mudar o texto. |
| E7 | **92 citações bíblicas** com status A e nenhuma evidência registrada. | `biblia.py`: cada uma é idêntica à edição do rótulo. | Foi acrescentada uma `notaInterna` com a conferência (edição e arquivo). O texto e o rótulo não mudaram. |
| E8 | **33 frases não apareciam na página da própria obra.** A página lista as frases cuja fonte começa pelo título da obra, e essas usam outra forma do título: singular × plural ("Carta aos acionistas…" × "Cartas aos Acionistas…", 15 de Buffett), artigo, título original × edição brasileira, "Fragmento 53" × "Fragmentos". | `editorial.py` (checagem 9) e conferência no navegador: a página "Cartas aos Acionistas da Berkshire Hathaway" listava 0 frases e passou a listar 8, o máximo da página. | Campo novo `q.obra` (título exato do catálogo). O texto e a fonte não mudam. O gerador de inserções (`gerar_bloco.py`) passou a gravar `obra`, que ele recebia e descartava. |

### 1.3 Dúvidas que precisam de pesquisa (não alteradas)

Ficaram como estão porque a evidência registrada atende ao padrão do projeto e nada foi refutado. Seria preciso consultar a edição impressa ou o original:

- **Guimarães Rosa**, `f311vvnz1nt` ("Mestre não é quem sempre ensina…"). Atribuída a *Grande Sertão: Veredas* por imprensa e por texto da ABMES, sem página. Para fechar, falta conferir numa edição do livro.
- **John Bogle**, `q17hw0zkftz9o7`. A fonte é uma entrevista ao *New York Sun*, sem data.
- **Norman Schwarzkopf**, `f8297fdk2z`. A fonte é a entrevista à Academy of Achievement ("regra 13"); a frase não foi localizada no livro.
- **Konosuke Matsushita**, `f1283gdprc`. Conferida na tradução inglesa oficial da Panasonic; o original japonês não foi conferido.
- **Osho**, `f128pgs37`. Não se sabe se o trecho entra na coletânea *Coragem* (1999); a fonte cita o livro original.
- **Warren Buffett**, `qheho9wyrbq63`. A fonte (Fortune, 1986) está correta. A retomada da ideia na carta de 2024 não foi conferida no texto primário.
- **122 frases A** têm nota do tipo "original não consultado" ou "capítulo não confirmado". Em todas a fonte já foi reduzida a obra e ano, como mandam as regras; não são afirmações falsas.
- **44 + 35 autores sem fonte acessível.** Seguem mantidos, por decisão do proprietário.

---

## 2. Diagnóstico técnico e de segurança

### 2.1 Inventário

| Área | Onde está | Situação |
|---|---|---|
| HTML | `index.html`: página única, 6 telas fixas, mais as telas Autores & Obras, Panorama, Obra e Escrever, injetadas pelo JS | OK |
| CSS | `assets/css/memotiva.css`: 100 KB, 725 regras, temas claro e escuro | OK |
| JS | 40 scripts clássicos, **8,1 MB**: `nucleo/` 2, `dados/` 9, `app/` 13, `curadoria/` 16 | Carga em ordem verificada (`analise-carga.mjs`: 0 problemas) |
| Lotes de dados | Acervo-base em `dados/`, alterado pelas fases de `curadoria/` na cadeia `__fase5Boot` | OK; 0 exceções |
| Busca, filtros | `app/24` (`bNorm`, `bPontua`, índices em `reconstruirIndices`) | OK; nenhuma interpolação crua do termo buscado |
| Favoritos | Por `qid`, em `favorites:<email>` (pessoal) | Testado no e2e |
| Modais, carrosséis | `app/12`, `app/09`; rolagem horizontal testada no e2e | OK |
| Temas | `theme` em armazenamento pessoal; `data-theme` no `<body>` | OK |
| `window.storage` | `dbGet`/`dbSet` (`nucleo/01`); sem a API cai para memória | Ver S2 |
| Navegação | `navigateTo`, encadeada; versão final em `app/24` | OK; listeners estáveis (ver 2.3) |
| Estados vazio, erro e carregamento | Contadores da home mostram "—" até carregar; `empty-state` nos favoritos e no feed vazio; falha do armazenamento cai para memória sem quebrar | OK |
| Dependências externas | Google Fonts, Wikimedia Commons, API da Wikipédia (fotos), iTunes Search, Spotify (PKCE, desligado sem `clientId`) | Sem `<a target="_blank">`, sem `eval`/`new Function`/`document.write` |

### 2.2 Achados por gravidade

| ID | Gravidade | Achado | Evidência | Impacto | Dependências | Situação |
|---|---|---|---|---|---|---|
| S1 | **Alta** | **XSS armazenado pela comunidade.** Qualquer visitante pode gravar JSON arbitrário no armazenamento compartilhado (`feed:posts`, `midia:*`). Campos do post (`id`, `midiaSessao.src`, `filtro`) e da mídia (`src`, `filtro`) entravam crus em `innerHTML`. | `tecnico.mjs`, rodada "antes": **50 execuções** do script injetado nas duas telas | Executa código na página de todo visitante que abre a comunidade: rouba a sessão, altera favoritos e o feed | Nenhuma | **Corrigido.** `sanearPost()` refaz cada post lido do feed só com campos esperados e tipados, e descarta o que tem `id` inválido. `midiaTag()`, `urlMidiaSegura()`, `filtroSeguro()` e `urlCssSegura()` validam URL, filtro e capa. `midiaSessao` não é mais gravada no feed compartilhado. Rodada "depois": **0 execuções**, e o post com conteúdo hostil e `id` válido aparece desarmado. |
| S2 | **Alta** (não corrigível sem back-end) | **Autenticação só no cliente.** O hash de senha (SHA-256 com prefixo fixo, sem sal por usuário) fica em `user:<email>` no armazenamento **compartilhado**, legível por qualquer visitante. A sessão é um objeto local que qualquer um pode forjar. O feed não tem controle de autoria: quem grava `feed:posts` pode apagar ou editar posts alheios. | Leitura de `app/10` (`handleRegister`, `completeLogin`, `saveCommunityPosts`) | Contas e comunidade não são confiáveis fora de demonstração | **Banco de dados e hospedagem com autenticação** (Supabase, Firebase…), que ficam fora deste escopo | Documentado (ARCHITECTURE §9). Não houve migração. |
| S3 | **Média** | **Carga lenta**: cerca de 17 s de CPU antes do primeiro uso, no Chromium local. A desduplicação das Fases 70–75 normalizava e montava os bigramas do mesmo texto milhares de vezes (pares dentro dos 384 ditados), e `removerFrase` reindexava o acervo inteiro a cada remoção. | Perfil de CPU (CDP): `35-fases62-75` 9,5 s, `reindexarQuotes` 2,5 s, `norm` (`37`) 1,5 s | Página travada por cerca de 17 s, ou mais num celular | Nenhuma | **Corrigido sem mudar o resultado.** `memoTexto()` memoriza as funções puras de texto, o cosseno usa vetores com norma pré-calculada e a reindexação só vai da posição removida em diante. Carga caiu de **~17 s para ~4,5 s**. `estado:comparar` deu **idêntico**: só a lista de funções globais mudou. |
| S4 | **Média** | 33 frases não apareciam na página da obra, e o gerador de inserções descartava o campo `obra` | Ver E8 | Páginas de obra incompletas | Nenhuma | **Corrigido** (E8) |
| S5 | Baixa | Login do Spotify (OAuth PKCE) **sem `state`** | Leitura de `spotifyEntrar`/`spotifyToken` | CSRF no retorno do login (o PKCE já mitiga em parte) | Só vale com `clientId` configurado | **Corrigido**: `state` aleatório, gravado em `sessionStorage` e conferido na volta. |
| S6 | Baixa | O nome de usuário aceitava qualquer caractere; ele entra em chaves de armazenamento e no avatar de iniciais. | `handleRegister` | Ruído e risco de injeção | Nenhuma | **Corrigido**: só `[A-Za-z0-9._]`, de 3 a 24 caracteres (o `maxlength` do HTML já era 24). |
| S7 | Baixa | Capa da música em `url('…')` escapada só para HTML: um apóstrofo fechava o `url()` do CSS. | Leitura de `volumeHTML` e das listas de música | Injeção de CSS | Nenhuma | **Corrigido** (`urlCssSegura`). |
| S8 | Info | **Segredos expostos**: procurados padrões de chave e token (API keys, `sk-`, `AIza`, `ghp_`, `AKIA`, `xox*`) em todo o código, nas ferramentas e na documentação. | Varredura com `grep` | — | — | **Nada encontrado.** O Spotify usa só `clientId` público, hoje vazio. |
| S9 | Info | **Listeners repetidos**: três voltas por todas as telas | `tecnico.mjs`: window 20, document 6 e listeners em elementos na página iguais nas três voltas (391 no celular, 541 no desktop) | — | — | **Sem vazamento.** |
| S10 | Info | **Console, rede e layout shift** | 0 exceções. O único erro de console é a rede externa bloqueada no teste. CLS de 0,003 a 0,005. | — | — | OK |
| S11 | Baixa (decisão do proprietário) | **8,1 MB de JS** a cada carga; `curadoria/38` sozinho tem 2,3 MB. As fases antigas rodam sempre. | Medição | Primeiro acesso pesado em rede móvel | Decisão de arquitetura ("consolidar" as fases) | Documentado (ARCHITECTURE §9). Não houve migração. |
| S12 | Baixa | **`arquivo/` tem 37 MB** (61 % do repositório, 142 dos 238 arquivos) e o site não o usa. | `du` | Clone mais pesado | O proprietário pediu que o material fosse guardado | Mantido, com aviso em `CLAUDE.md` para ignorar a pasta. Pode ir para a branch de backup quando o proprietário quiser. |
| S13 | Info | **Duplicação de dados**: `dados/07-frases-base.js` ainda tem textos que fases posteriores corrigem ou removem | Por desenho (§4.3 da arquitetura) | — | Consolidação (S11) | Documentado |

### 2.3 Medições

| Medida | Antes | Depois |
|---|---|---|
| Tempo até o acervo pronto (Chromium local, 390×844) | 18,3 s | **4,4 s** |
| Tempo até o acervo pronto (1440×900) | 17,1 s | **4,5 s** |
| Execuções de XSS nas sondas | **50** | **0** |
| Exceções JS | 0 | 0 |
| Layout shift (CLS) | 0,085 (celular, com o post hostil) | 0,005 |

---

## 3. Testes depois das correções

- `node ferramentas/codigo/analise-carga.mjs`: 40 arquivos, **nenhum problema de ordem de carga**.
- `node ferramentas/testes/estado.mjs --comparar base`, com as otimizações sozinhas: **idêntico**. Só `funcoes` mudou, por causa da função `memoTexto` nova. Com a Fase 129, as diferenças ficam só onde ela mexe: 1 frase removida, 2 textos, 2 fontes, 95 notas internas, 33 `obra`, 2 cronologias, 3 registros.
- `node ferramentas/testes/e2e.mjs fase129`: 0 exceções em 390×844 e 1440×900. 2.412 frases, 97 lacunas, sem rolagem horizontal.
- `node ferramentas/testes/paginas.mjs`: **1.230 páginas de obra e 521 de autor** sem erro, sem página vazia e sem "undefined".
- `node ferramentas/auditoria/tecnico.mjs`: XSS 0, listeners estáveis, carga em ~4,5 s.
- `python3 ferramentas/auditoria/biblia.py`: 99 de 99 idênticos.
- CSVs regenerados e copiados para `curadoria/`.

**Fora do alcance destes testes**, porque dependem de banco de dados ou hospedagem: login real, persistência entre aparelhos, comunidade multiusuário, integração com o Spotify com `clientId` real, e Firefox e Safari.

## 4. Números depois da auditoria

Frases **2.412** (A 2.026 · X 386) · autores 521 · obras 1.230 · histórias 235 · panoramas 529 · registros 3.153 · com `orig` 1.651 · lacunas 97.
