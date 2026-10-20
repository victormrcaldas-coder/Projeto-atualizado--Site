# MeMotiva — Arquitetura e guia para continuar o projeto

> **Para quem chega agora**, seja uma pessoa ou outra instância do Claude: leia este arquivo inteiro antes de mexer em qualquer coisa. Ele basta para continuar o trabalho.
> O histórico detalhado de cada decisão está em `curadoria/CHECKPOINT.md`. O que falta fazer está em `curadoria/PLANO.md`.
> Estado descrito aqui: **13/10/2026, depois da Fase 129** (auditoria sistemática: `curadoria/AUDITORIA-2026-10-13.md`), branch `main`.

---

## 1. O que é o MeMotiva

Um site em português (pt-BR) de **frases curadas**, com páginas de **autores** (biografia, cronologia, obras) e de **obras**, além de **histórias** narradas, **comunidade** e **perfil**. O compromisso central, que guia toda a curadoria, é este:

> **Quem pesquisar a frase e o autor deve encontrar o mesmo.** Cada frase atribuída a alguém é uma passagem real de obra, discurso, carta ou entrevista documentada. O português é o texto literal, no caso de autores de língua portuguesa, ou uma tradução **fiel e própria** do original conferido. Na dúvida, a frase não entra ou sai do site.

Números atuais, conferidos no Chromium em 13/10/2026:

| Item | Quantidade |
|---|---|
| Frases ativas | **2.412** — status A: 2.026; status X: 386 (384 Ditados Populares e 2 de "Autor não identificado") |
| Autores no índice | 521 |
| Obras no catálogo | 1.230 |
| Histórias | 235 |
| Panoramas biográficos | 529 |
| Registros de remoção ou decisão | 3.153 |
| Lacunas (pessoas com 1 ou 2 frases) | 97 |
| Autores com obra e nenhuma frase | 35 (mantidos por decisão do proprietário) |

---

## 2. Stack

| Camada | Tecnologia |
|---|---|
| Site | **HTML + CSS + JavaScript puro** (ES2020+, scripts clássicos). Sem framework, sem bundler, sem etapa de build. |
| Entrada | `index.html` na raiz do repositório. Basta servir a pasta como arquivos estáticos (`python3 -m http.server`). |
| Estilo | `assets/css/memotiva.css`. Fontes do Google Fonts (Fraunces e outras), com tema claro e escuro. |
| Dados | Literais JavaScript dentro de `assets/js/dados/`, mais as fases de curadoria em `assets/js/curadoria/`, que os modificam na carga. **Não há banco de dados nem API.** |
| Persistência do usuário | `window.storage` (API de armazenamento dos *artifacts* do Claude.ai). **Fora desse ambiente cai para memória**: contas, favoritos e relatos da comunidade somem ao recarregar. Ver §9. |
| Recursos externos | Google Fonts; fotos de autores do Wikimedia Commons e consulta à Wikipédia em tempo de execução (`app/14`); fala sintetizada do navegador (`speechSynthesis`) para narrar histórias. |
| Ferramentas | Node 18+ com **Playwright/Chromium** (testes e exportação), **acorn** (análise do código), **Prettier** (formatação) e Python 3 (geradores de fase, validadores). Ver `ferramentas/README.md`. |

---

## 3. Estrutura do repositório

```
index.html                 página única; carrega o CSS e os 41 scripts NA ORDEM (ver §4)
assets/
  css/memotiva.css         o estilo antigo (responsivo; 725 regras), ainda o das telas fora da home
  css/00–04, telas/        o sistema do redesign (fontes, tokens, base, componentes, ponte) e as telas novas;
                           a home usa telas/home-site.css, gerado por ferramentas/design/escopo-home.py
  js/
    nucleo/                01–02  utilitários, categorias, aliases de autor, perfis, origens
    dados/                 03–08, 16, 21–22  acervo-base: frases, histórias, obras, papéis, panoramas, páginas de obra
    app/                   09–20, 24, 40, 99  interface: estado, telas, cartões, busca, navegação, áudio, SEO, home, init
    curadoria/             23, 25–39  fases de curadoria 6 → 129 (corrigem, removem e acrescentam dados)
curadoria/
  CHECKPOINT.md            diário completo de todas as fases e decisões (longo; consulte por "## Fase N")
  AUDITORIA-2026-10-13.md  auditoria editorial, técnica e de segurança (achados por gravidade, dúvidas abertas)
  PLANO.md                 trabalhos feitos e pendentes + decisões do proprietário (seção C)
  *.csv                    exportações do estado real (ver §7)
  trabalho/                decisões JSONL e regras de cada fase recente (119–129) + LEIAME.md
ferramentas/               testes, auditoria, exportação, análise de código e geradores de fase (README próprio)
arquivo/                   material histórico (capturas, bundles git, builds antigos, scripts antigos). Não é usado.
package.json               comandos (npm run teste, estado:base, estado:comparar, auditoria, exportar, formatar)
CLAUDE.md                  instruções curtas para o Claude Code (regras, comandos, o que não tocar)
.prettierrc.json           formatação (código 110 colunas; dados/curadoria 400, um registro por linha)
.trabalho/                 (fora do git) saídas locais de testes, exportações e lotes em andamento
```

---

## 4. Como as peças se conectam

### 4.1 Ordem de carga e escopo global

`index.html` carrega **41 scripts clássicos** (sem `type="module"`), nesta ordem:

```
nucleo/01, nucleo/02, dados/03…08, app/09…15, dados/16, app/17…20, dados/21, dados/22,
curadoria/23, app/24, curadoria/25…39, app/40-home.js, app/99-iniciar.js   ← sempre o último
```

- **Escopo compartilhado.** Todos os arquivos dividem o mesmo escopo global: `const`, `let` e `function` de topo de um arquivo são visíveis nos outros. Isso é intencional e herdado: até 13/10/2026 tudo era um único arquivo, `memotiva.js`, de 42,5 mil linhas, que foi dividido sem mudar o comportamento.
- **A ordem importa.** Um arquivo só pode usar, **durante a carga**, o que já foi declarado nos anteriores. Dentro de funções chamadas depois, como handlers e telas, pode usar qualquer coisa.
- **Verificação.** `node ferramentas/codigo/analise-carga.mjs` confere a regra acima automaticamente e também acusa funções declaradas duas vezes.

### 4.2 Sequência de inicialização

1. **Carga dos scripts.**
   - Os arquivos de `dados/` definem os arrays-base (`QUOTES`, `STORIES`, `OBRAS_CURADAS`, `PERFIS_PROFUNDOS`, `OBRA_PAGINA`…).
   - Os de `app/` definem as funções da interface.
   - Os de `curadoria/` executam correções imediatas e **registram-se na cadeia de fases**.
2. **`init()`** (`app/15`): carrega sessão e favoritos e faz a primeira renderização. A home nova (`app/40`) já se monta na carga e se monta de novo no fim da cadeia de fases, com o acervo final; os elementos antigos da home que `init()` e as fases ainda escrevem ficam guardados em `.home-legado`, fora da tela.
3. **`window.__fase5Boot()`** (disparada por `app/99`): executa a cadeia de fases, da Fase 5 até a última (hoje a 129, em `curadoria/39`). Cada fase altera os dados e, quando precisa, chama `reindexarQuotes()` e `reconstruirIndices()`.
4. **Fase 89 (portão de duplicatas).** Garante que o portão final de desduplicação (Fase 75) rode dentro da cadeia. As Fases 75 e 78 ainda têm um `setTimeout(…, 0)` redundante.

### 4.3 O padrão "fase de curadoria"

Toda alteração de conteúdo feita depois do acervo-base é uma **fase**: um IIFE que guarda a função anterior da cadeia e se encadeia depois dela:

```js
(function () {
  /* Fase N — o que faz, por quê, data. Registro: curadoria/trabalho/faseN-….jsonl */
  var DADOS = [ /* decisões */ ];
  function aplicar() {
    /* corrige/remove/acrescenta em QUOTES, OBRAS, OBRA_PAGINA, PERFIS_PROFUNDOS, STORIES… */
    console.log('MeMotiva · Fase N: resumo do que aplicou');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () { if (typeof prev === 'function') prev(); aplicar(); };
})();
```

Consequências práticas:

- **O acervo-base não é a verdade.** `dados/07-frases-base.js` tem frases que foram depois corrigidas ou removidas por fases. O **estado final** só existe depois da cadeia, no navegador. Por isso toda conferência se faz sobre o estado carregado, com `ferramentas/testes/estado.mjs` ou com as exportações CSV.
- **Não edite dados antigos.** Para mudar o conteúdo, crie uma **nova fase** (ver §8), com a decisão documentada. Assim o histórico fica auditável: cada mudança tem data, motivo e evidência.
- **Logs das fases.** Cada fase escreve no console `MeMotiva · Fase N: …`. Para ver todos: `node ferramentas/exportar/dados-do-site.mjs logs`.

### 4.4 Modelo de dados (estado final)

#### Frase (`QUOTES[i]`)

| Campo | Significado |
|---|---|
| `author` | Nome canônico (ver `canonAuthor` / `AUTHOR_ALIASES`) |
| `text` | Texto exibido (pt-BR) |
| `src` | Fonte exibida: "Obra (ano), capítulo N", "Discurso em X, data", "Carta a Y, data" |
| `orig` | Texto original exato, quando conferido (1.651 frases) |
| `cat` | Categoria. Uma de: `vida`, `reflexao`, `filosofos`, `motivacao`, `dificeis`, `conforto`, `felicidade`, `gratidao`, `amor`, `amizade`, `familia`, `educacao`, `autorreconhecimento`, `fe`, `politica`, `lideranca`, `negocios`, `empreendedorismo`, `financas`, `manipulacao`, `empoderamento`, `ditados` |
| `st` | `A` = verificada, com verificação registrada. `X` = ditado popular ou sem autor (fora de auditoria, ver §6). Os status antigos `A−`, `B`, `R` e `P` foram extintos pelas Fases 116–123. |
| `qid` | Identificador estável, derivado do conteúdo. Frases novas usam o prefixo `f<fase>…` |
| `notaAutoria` | Nota **pública** e factual, como "Fala de Eliza Doolittle a Higgins." |
| `notaInterna` | Processo de curadoria e evidência (não aparece ao leitor; exportado em `notas-internas.csv`) |
| `obra` | (opcional) Título **exato** da obra no catálogo. Liga a frase à página da obra quando a fonte usa outra forma do título ("Carta aos acionistas…" × "Cartas aos Acionistas…"). Sem ele, a página da obra lista as frases cuja fonte começa pelos 12 primeiros caracteres do título. O gerador de inserções grava `obra` sozinho. |
| Outros | `proc`, `procTexto`, `procOriginal`, `themes`, `vg`/`vn`/`vdup` (variantes), `srcBruto` e `textoAnterior` são campos auxiliares de fases antigas |

#### Índices e estruturas de autor, obra e histórias

| Estrutura | Conteúdo |
|---|---|
| `QUOTE_POR_QID[qid]` | Índice em `QUOTES`. Mantido por `reindexarQuotes()` (`curadoria/25`). |
| `OBRAS[autor]` | `[{ t, tipo, ano, d, autor, oid, dAntiga? }]` |
| `OBRA_POR_ID[oid]` | A obra pelo `oid`, que vale `slug(autor)--N`. Remover obra não renumera as outras. |
| `OBRA_PAGINA["Autor\|\|Título"]` | `{ sobre, contexto, momento, importancia, curiosidade }` — página longa da obra |
| `PERFIS_PROFUNDOS[autor]` | Panorama: `{ titulo, resumo, curta, bio[], contexto, contribuicoes[], cronologia[[ano, texto]], nota }` |
| `STORIES[]` | Histórias: `{ id, author, title, role, excerpt, text, photo, cat }` |
| `PAPEIS[autor]` | Descrição curta "Profissão nacionalidade (nasc–morte)". Se existir `story.role`, ele tem prioridade (ver `papelDe()`). |
| `FEITOS[autor]` | Realizações |
| `AUTOR_INDEX` | `Map` nome → `{ nome, frases: [índices], story }`. Reúne quem tem história, frase ou obra; escrituras ficam de fora (`SCRIPTURE_RE`). |

#### Registro e funções de curadoria

| Item | O que faz |
|---|---|
| `window.CURADORIA_REMOVIDAS` | **Registro permanente** de tudo o que saiu, foi substituído ou foi recusado. Exportado em `remocoes-curadoria.csv`. |
| `CURADORIA_BLOQUEADA(texto)` | Impede que texto já removido volte. |
| `CURADORIA_CHECAR(texto, autor, orig)` | Checagem obrigatória antes de inserir: texto exato, bloqueado ou variante (Dice ≥ 0,70). |
| `removerFrase(qid, motivo)` | Remove uma frase, ajusta favoritos e reindexa da posição removida em diante. |
| `LACUNAS()` | Pessoas com 1–2 frases e o motivo. Escrituras e ditados não contam. |
| `CURADORIA_EXPORT_CSV()` | Gera os CSVs editoriais. |

### 4.5 Interface

- **Página única.** As telas do HTML são `home`, `explorar`, `descubra`, `historias`, `comunidade` e `perfil` (`<section id="view-…">`). As telas **Autores & Obras**, **Panorama** (autor), **Obra** e **Escrever** são injetadas pelo JS (`app/18`).
- **Navegação.** `navigateTo(view)`, encadeada por várias fases. A versão final é a última atribuída.
- **Cartão de frase.** `quoteCardHTML` / `attachQuoteCardEvents` / `openQuoteModal`. A procedência aparece por `procedenciaHTML`.
- **SEO.** Título, descrição, `canonical` e JSON-LD são ajustados por tela (`app/24`, seção 11).
- **Favoritos.** São gravados por `qid` (`{ type: 'quote', qid }`). Entradas antigas gravadas por índice são descartadas por `normalizarFavoritos`.

### 4.6 Segurança e desempenho (regras desde a Fase 129)

- **Conteúdo de usuário nunca entra cru em HTML.** Texto vai por `escapeHtml`. URL de mídia vai por `urlMidiaSegura`, só `https:`, `blob:` e `data:` de imagem, vídeo ou áudio. URL dentro de `url('…')` vai por `urlCssSegura`. Filtro CSS vai por `filtroSeguro`. Id em atributo vai por `idSeguro`. Todos ficam em `nucleo/01`.
- **O armazenamento compartilhado é não confiável.** Qualquer visitante pode gravar nele JSON arbitrário. Todo post lido de `feed:posts` passa por `sanearPost` (`app/10`), que refaz o objeto só com os campos esperados. Mídias passam por `midiaTag` (`app/20`). `midiaSessao`, a mídia que só existe na sessão, não é gravada no feed.
- **Funções puras de texto usadas em comparação de pares** (normalização, bigramas) passam por `memoTexto` (`nucleo/01`). Sem isso, a desduplicação da cadeia levava cerca de 10 s por carga. O valor memorizado é compartilhado e não deve ser alterado por quem chama.
- **Auditoria técnica** repetível: `npm run auditoria:tecnica` (XSS, listeners, CLS, tempo de carga).

---

## 5. Padrões e convenções

- **Idioma.** Código, comentários, nomes e documentação em **português**. Há nomes em inglês herdados do protótipo (`quoteCardHTML`, `state`…); não vale a pena renomear em massa.
- **Arquivos.** O nome segue `NN-descricao.js`, e o número é a ordem de carga. Cada arquivo abre com um comentário que diz o que contém. Uma fase nova vira um arquivo novo em `curadoria/`, antes de `app/99`.
- **Comentários.** Cada fase começa com um bloco que diz o quê, por quê, a data e onde está o registro das decisões. Lógica não óbvia leva comentário no ponto (cadeia de fases, índices, `oid`, registro).
- **Formatação.** Prettier com `.prettierrc.json`: código a 110 colunas, aspas simples; dados e curadoria a 400 colunas. Comando: `npm run formatar`.
- **Sobrescrita de funções.** O código antigo redefinia funções em fases posteriores. Hoje só resta **uma** declaração de cada função; as versões posteriores são **atribuições** (`navigateTo = function…`), que guardam a anterior em `_navegarF5` e similares. Não volte a declarar a mesma função duas vezes; `analise-carga.mjs` acusa.
- **Objetos de relatório.** `RELATORIO_FASE8`, `RELATORIO_FASE20`… (antes `F8`…). O nome antigo continua exposto em `window.F8` etc. para uso no console.
- **Frases novas.** Sempre passam por `CURADORIA_CHECAR`, recebem `qid` com o prefixo da fase, `st: 'A'` e a evidência em `notaInterna`.
- **Remoções.** Sempre geram uma entrada em `CURADORIA_REMOVIDAS`, com motivo e fontes. Nada some sem registro.

---

## 6. Regras de curadoria (critérios que não mudam)

Valem para **toda frase atribuída a autor**. As versões completas, usadas pelos agentes, estão em `curadoria/trabalho/fase12x-regras.md`.

1. **Fonte real e localizada.** Obra, ano e localização (capítulo, ato/cena, verso, carta, discurso com data). **Nunca inventar** capítulo, página, data ou original: sem evidência da localização, fica só obra e ano.
2. **Original e tradução.** Quando o original foi lido, ele vai exato em `orig`. A tradução é **própria e fiel**; não se copia tradução publicada protegida.
3. **Autor de língua portuguesa.** Texto literal da edição, confirmado por inteiro.
4. **Ordem de preferência das evidências:**
   1. texto integral lido (Gutenberg/GITenberg, Perseus, Latin Library, Wikisource);
   2. documento primário (discurso transcrito por instituição, carta publicada, ata oficial);
   3. fonte confiável que reproduz o trecho com a obra (Quote Investigator, Google Books, editora, imprensa de referência, Wikiquote com página).

   **Livro contemporâneo** exige duas fontes independentes com a mesma redação. Sites de frases (Pensador, BrainyQuote…) **não valem**.
5. **Recorte contínuo.** Não juntar pedaços distantes nem trechos confirmados separadamente, e não cortar negação ou condição que mude o sentido.
6. **Obra protegida.** Só trecho curto: até 2 frases ou até 4 versos.
7. **Atribuição limpa.** Frases famosas "de internet" costumam ser falsas: conferir no Quote Investigator e na seção *Misattributed* do Wikiquote.
8. **Na dúvida, não entra.** Se uma frase do site não se confirma, ela sai, com registro.
9. **Fatos de biografias e obras.** Corrigir com a menor mudança possível. Retirar o que não se confirma, como anedotas, superlativos ("o primeiro…") e falas sem fonte.

### Decisões do proprietário (vigentes)

Estão na seção C do `PLANO.md`:

- **Branch e `main`.** Trabalhar em branch própria, com commits coerentes. A `main` recebeu todo o trabalho em 13/10/2026, por autorização expressa do proprietário, com backup nas branches `backup/main-original-2026-10-13` e `backup/trabalho-completo-2026-10-13`. **Novos merges na `main` só com autorização.**
- **Versículos bíblicos.** Não padronizar numa edição só: cada versículo fica na edição efetivamente conferida (ACF, NVI, AA…), rotulada.
- **Ditados Populares (st `X`, categoria `ditados`).** Categoria editorial própria, **fora de qualquer auditoria**, em definitivo: não verificar, não contar como lacuna nem como pendência. A exceção vale **só** para essa categoria.
- **Obras duplicadas no catálogo.** Não unificar (`curadoria/obras-duplicadas.csv`).
- **Autores sem fonte confiável.** Os 44 com 1–2 frases e os 35 sem frase **não são removidos**, e não se acrescenta frase sem fonte. Só voltam a ser trabalhados com fonte nova (CHECKPOINT, 13/10/2026).
- **Número de lacunas.** Não usar número antigo como alvo fixo. A meta de 3 frases por pessoa é referência, não obrigação.

---

## 7. Arquivos editoriais (`curadoria/`)

| Arquivo | Conteúdo |
|---|---|
| `CHECKPOINT.md` | Diário de todas as fases: o que foi feito, como, exemplos, limites e números. **Fonte da verdade do histórico.** |
| `AUDITORIA-2026-10-13.md` | Auditoria sistemática: achados editoriais e técnicos por gravidade, evidência, impacto e dependências; dúvidas que ainda pedem pesquisa |
| `PLANO.md` | Itens A (processos editoriais: feito ou pendente), B (lacunas) e C (decisões do proprietário) |
| `curadoria-frases.csv` | Todas as frases ativas (estado final) |
| `catalogo-obras.csv` | Todas as obras |
| `lacunas-restantes.csv` | Pessoas com 1–2 frases e o motivo |
| `notas-internas.csv` | Evidência de cada frase |
| `remocoes-curadoria.csv` | Registro de remoções e decisões |
| `obras-duplicadas.csv`, `atribuicoes-fracas-resolucao.csv`, `fotos-sem-entrada.csv`, `verificacao-orig-pendente.csv` | Listas de apoio de fases anteriores |
| `trabalho/faseNNN-*-decisoes.jsonl` | Cada decisão individual das Fases 119–129, com evidência |
| `trabalho/faseNNN-regras.md` | Regras de cada fase |

Os CSVs são **gerados** a partir do estado real, com `npm run exportar` ou com o e2e. Não os edite à mão.

---

## 8. Como continuar daqui

### 8.1 Preparar o ambiente

```bash
git clone <repo> && cd <repo>                       # main tem o estado completo
npm install && npx playwright install chromium     # na nuvem do Claude Code o Playwright já existe em /opt/node-tools
python3 -m http.server 8000                         # abrir http://localhost:8000
npm run estado:base                                 # captura o estado atual (referência para comparações)
```

### 8.2 Mudança de código (sem mudar conteúdo)

1. `npm run estado:base`.
2. Faça a mudança.
3. `npm run teste` (análise de carga, e2e e todas as páginas) e `npm run estado:comparar`, que deve dar **IDÊNTICO**.
4. `npm run formatar`, depois commit.

### 8.3 Mudança de conteúdo (nova fase de curadoria)

O fluxo é o das Fases 119–128 e está detalhado em `ferramentas/README.md`.

1. **Lotes.** Exporte o estado (`npm run exportar` ou `node ferramentas/exportar/dados-do-site.mjs obras|biografias`). Monte lotes JSONL em `.trabalho/faseNNN/`.
2. **Regras.** Escreva `REGRAS.md`, partindo de `curadoria/trabalho/fase127-regras.md` (inserção), `fase123-regras.md` (auditoria de frases), `fase124-regras.md` (obras) ou `fase126-regras.md` (biografias).
3. **Decisões.** Agentes ou pessoas decidem lote a lote e gravam `dec_<lote>.jsonl`.
4. **Revisão humana.** É obrigatória para as evidências mais fracas. As correções vão em `revisao.jsonl`. Depois rode:
   - `python3 ferramentas/curadoria/juntar_decisoes.py --lotes ".trabalho/faseNNN/dec_*.jsonl" --revisao … --saida …`;
   - `validar_insercoes.py`, se for inserção.
5. **Bloco.** Gere com `python3 ferramentas/curadoria/gerar_bloco.py <insercao|frases|obras|biografias> --fase NNN --data DD/MM/AAAA --entrada … --saida bloco.js`.
6. **Instalação.** `python3 ferramentas/curadoria/nova_fase.py --bloco bloco.js --nome 40-faseNNN-descricao.js --descricao "…"`.
7. **Testes.** `npm run teste`, e confira com `npm run estado:comparar` que a diferença está só onde a fase mexe.
8. **CSVs.** `npm run exportar` e copie os CSVs de `.trabalho/exportacao/` para `curadoria/`.
9. **Registro.**
   - Copie as decisões para `curadoria/trabalho/faseNNN-…-decisoes.jsonl` e as regras para `faseNNN-regras.md`.
   - Escreva a seção `## Fase NNN` no `CHECKPOINT.md`: por quê, método, resultado, exemplos, limites e estado com os números.
   - Atualize `PLANO.md` e `trabalho/LEIAME.md`.
   - Faça o commit.

### 8.4 Limitações do ambiente observadas

Valem para o Claude Code na nuvem.

- **Acesso à web.**
  - `WebFetch` e `curl` para sites comuns costumam estar bloqueados.
  - Funcionam `WebSearch`, `raw.githubusercontent.com` e `git clone` de repositórios públicos.
  - Textos integrais vêm do Gutenberg via GITenberg (`ferramentas/textos/gutenberg.py`), do Perseus e da Latin Library (clonáveis do GitHub).
- **Agentes em paralelo.**
  - Há uma cota de buscas por turno, dividida entre os agentes, e limites de sessão.
  - Rode cerca de 6 lotes por vez. Cada lote grava a decisão logo que decide, para poder ser retomado.

---

## 9. Pendências e dívida técnica conhecidas

| Tema | Situação | Sugestão |
|---|---|---|
| **Persistência e autenticação** (gravidade alta, ver AUDITORIA S2) | `window.storage` só existe nos *artifacts* do Claude.ai. Em hospedagem comum, login, favoritos e comunidade ficam só em memória. A autenticação é toda no cliente: o hash de senha (SHA-256 sem sal por usuário) fica no armazenamento **compartilhado**, a sessão pode ser forjada e qualquer um pode reescrever o feed. | Trocar `dbGet`/`dbSet` (`nucleo/01`) por um back-end real (Supabase, Firebase etc.), com autenticação no servidor, regras de acesso por autor e hash de senha no servidor. Até lá, contas e comunidade servem só para demonstração. |
| **Peso da carga** | Cerca de 8,1 MB de JS, com todas as fases rodando a cada carga. Desde a Fase 129 a cadeia leva cerca de 4,5 s no Chromium local; antes eram 17 s. | "Consolidar": gerar `dados/` a partir do estado final (`estado.mjs` já captura tudo) e aposentar as fases antigas, mantendo o registro. É uma decisão de arquitetura: combinar com o proprietário. Testar com `estado:comparar`. |
| **Fotos** | 338 autores sem foto curada; o site busca na Wikipédia em tempo de execução. | Ver `curadoria/fotos-sem-entrada.csv` (item 11 do PLANO, adiado a pedido). |
| **Testes** | Só Chromium. Firefox, Safari e toque físico nunca foram testados (item 10 do PLANO). | Rodar no navegador do proprietário. |
| **`setTimeout` das Fases 75/78** | Redundante desde a Fase 89; mantido para não mudar comportamento. | Pode sair numa consolidação. |
| **Lacunas** | 97 pessoas com 1–2 frases; 35 autores sem frase. Todos documentados como sem fonte acessível. | Só com fonte nova (§6). |
| **Nomes herdados** | Funções em inglês do protótipo e parâmetros de uma letra em callbacks. | Manter; renomear só ao reescrever um trecho. |

---

## 10. Linha do tempo resumida

- **Protótipo e Fases 1–6.** Telas, acervo-base, biografias, fotos, Autores & Obras, panoramas, páginas de obra, busca e SEO.
- **Fases 7–60.** Auditoria de procedência, `qid` estável, fila de curadoria por autor, páginas de obra e panoramas.
- **Fases 62–99.** Remoção do que não se confirma, desduplicação (portão da Fase 75), conferência entre original e tradução, exportação CSV.
- **Fases 100–118.** Registro permanente de remoções, lacunas por lote, versículos com edição exata, verificação de `orig`.
- **Fases 119–125.** Auditoria completa: originais, escrituras, A−, A sem verificação, fatos das obras, estabilização.
- **Fases 126–128** (13/10/2026). Fatos das biografias e histórias, 199 frases para lacunas e 206 frases para autores sem frase.
- **13/10/2026.** Código dividido em 39 módulos, código morto removido, ferramentas trazidas para o repositório, este documento.
- **Fase 129** (13/10/2026). Auditoria sistemática: correções editoriais comprovadas, XSS da comunidade fechado, carga de cerca de 17 s para 4,5 s, ligação frase → página da obra. A `main` passa a ter todo o trabalho.
