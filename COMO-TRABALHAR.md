# Como trabalhar neste projeto (guia para um chat novo)

Este arquivo explica como o trabalho foi feito até 21/10/2026, para que um chat novo continue igual.
O proprietário só manda o material e as decisões; a IA faz o resto.

**Para começar um chat novo,** cole o texto de `PROMPT-NOVO-CHAT.md`.

## 1. O que ler, nesta ordem

| Arquivo                       | Para quê                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `CLAUDE.md`                   | Regras do projeto e comandos. O Claude Code lê sozinho.                                                                               |
| `COMO-TRABALHAR.md`           | Este guia: o método, os agentes, o Crítico e as armadilhas.                                                                           |
| `RETOMAR.md`                  | **Onde parou e TUDO o que falta**, portão por portão. É o ponto de partida.                                                           |
| `design/PLANO-ETAPA-9.md`     | O plano aprovado: os portões B a E, o portão final e a biblioteca de movimentos.                                                      |
| `ARCHITECTURE.md`             | Como o site é montado. Ler antes de mudar código.                                                                                     |
| `design/BRIEFING-REDESIGN.md` | O briefing original (13/10): a visão, as regras, a paleta medida e as referências. É contexto: o trabalho continua pelo `RETOMAR.md`. |
| `design/DECISOES.md`          | As decisões de design já tomadas pelo proprietário.                                                                                   |
| `curadoria/CHECKPOINT.md`     | O histórico das fases de conteúdo e as dúvidas de curadoria.                                                                          |
| `.claude/agents/critico.md`   | O briefing do Crítico, usado como agente.                                                                                             |
| `ferramentas/critico/LEIA.md` | As ferramentas de quadro a quadro do Crítico.                                                                                         |

## 2. O método: portões

O redesign é dividido em **portões**, blocos com começo e fim (ver o plano). Cada portão segue o ciclo:

1. **Branch nova** a partir do último bloco, por exemplo `redesign/09d-rolagem-toque`.
   - Rodar `npm run estado:base` antes de mudar qualquer coisa.
2. **Implementar** em commits pequenos e coerentes.
   - O código novo vai em arquivos novos de `assets/js/app/` (IIFE, antes do `99-iniciar.js`) e de
     `assets/css/telas/`. Os existentes só mudam quando não há outro jeito.
3. **Verificar sozinho:**
   - `npm run teste` verde;
   - `npm run estado:comparar` IDÊNTICO, ou com a diferença explicada;
   - `node ferramentas/codigo/analise-carga.mjs`;
   - prints ou quadros em 390×844 e 1440×900, nos temas claro e escuro.
4. **Gerar a evidência:**
   - as folhas de quadros e os vídeos curtos;
   - **nunca** o roteiro longo de 25 min (pedido do proprietário).
5. **Rodada oficial com um Crítico NOVO** (agente `critico`). Ele dá 4 notas e os 10 piores defeitos.
6. **Corrigir os defeitos.** Depois de cada correção, **consultar o MESMO Crítico** (SendMessage para
   o agente que já existe) para ele dizer, item por item, se foi FEITO BEM, FEITO MAL ou NÃO FEITO.
   É uma regra do proprietário.
7. **Repetir** até **duas rodadas oficiais seguidas, cada uma com um Crítico novo, com 9,5 ou mais em
   todos os eixos**. Então o portão fecha.
8. **Push** da branch. O próximo portão sai dela.
9. **A `main`** só recebe com o "pode juntar" do proprietário. Em 21/10 ele pediu para juntar tudo; a
   `main` avançou por fast-forward.

**O que for do proprietário** não para o trabalho: vai para a lista "Decisões que dependem do
proprietário" no `RETOMAR.md`, e o trabalho segue. Isso vale para mudança de estrutura, texto novo,
gosto e curadoria duvidosa. Entre os blocos não se espera resposta.

## 3. O Crítico

- **Definição:** `.claude/agents/critico.md`. No chat novo, chamar com o Agent tool e
  `subagent_type: "critico"`. Se o tipo não aparecer, usar `general-purpose` e colar o conteúdo desse
  arquivo no pedido.
- **Régua:**
  - 10 = Brik, Monograph, Kierkegaard, Set Studio;
  - 9 = vitrine de design (Godly);
  - 7 = trabalho profissional comum;
  - um defeito grave limita o eixo a 8.
- **4 eixos:** coreografia e beleza; integridade quadro a quadro; resposta e desempenho; navegação e
  acessibilidade.
- **O pedido ao Crítico deve trazer:**
  - o portão;
  - o commit e a branch;
  - o que o portão diz que faz (ele confere);
  - onde estão as folhas e os vídeos;
  - os arquivos de código;
  - o limite do ambiente (raster por software, vídeo que atrasa).

  Ele **não** recebe as notas anteriores.

- **Cada rodada oficial usa um agente novo.** A verificação de correções usa o mesmo agente (o
  SendMessage retoma o agente com o histórico dele).
- **Rodar em segundo plano** e esperar a notificação. Não lançar dois Críticos para a mesma coisa.
- **Se o agente bater no limite da sessão,** retomar com SendMessage ao mesmo agente quando o limite
  voltar.
- **Histórico de notas:**

  | Portão      | Notas                 | Resultado |
  | ----------- | --------------------- | --------- |
  | B, rodada 3 | 7,6 / 6,8 / 6,5 / 8,6 | reprovado |

  As correções estão nos commits cad30c6 e 94f685f e falta a verificação (ver `RETOMAR.md`).

## 4. Os outros agentes

| Tipo              | Quando usar                                                                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Explore`         | Levantamentos grandes no código: "onde cada janela abre e fecha", "quem chama `navigateTo`". Devolve a conclusão sem encher o contexto.                                                                                                                                |
| `general-purpose` | Pesquisa de curadoria em paralelo. Exemplo: as Fases 130 (filmes de arquivo) e 131 (fotos) foram pesquisadas por agentes que gravaram tudo em `curadoria/trabalho/<fase>/`, e o código da fase foi gerado por script (`ferramentas/curadoria/gerar_fases_130_131.py`). |
| `Plan`            | Planejar um portão grande antes de começar.                                                                                                                                                                                                                            |
| `critico`         | Ver a seção 3.                                                                                                                                                                                                                                                         |

Regras para os agentes:

- Dizer sempre ao agente para **não editar** o que não é dele.
- Para pesquisa de conteúdo: **nada inventado**. O que não se confirma sai, com registro do motivo.

## 5. Conteúdo novo (o material que o proprietário manda)

O conteúdo (frases, fontes, biografias, obras, fotos, filmes) **só muda por uma fase nova** em
`assets/js/curadoria/`, com o fluxo de `ARCHITECTURE.md` §8.3. Não se edita `assets/js/dados/` nem
fase antiga.

1. **Receber o material** no chat (anexo ou texto) ou em `material/entrada/`, e dizer o que é.
2. **Registrar** em `curadoria/trabalho/faseNNN-<nome>/`: a fonte de cada item, o que entrou e o que
   saiu, e por quê.
3. **Escrever a fase** `assets/js/curadoria/NN-faseNNN-<nome>.js`, de preferência gerada por um script
   em `ferramentas/curadoria/`.
4. **Registrar a seção no `curadoria/CHECKPOINT.md`.**
5. **Verificar:**
   - `npm run teste`;
   - `npm run estado:comparar`: só pode mudar o que a fase mexe;
   - `npm run auditoria` quando for frase.

**Regras de veracidade:**

- não inventar frase, fonte, capítulo, página, original nem tradução;
- Ditados Populares ficam fora de auditoria;
- versículos ficam na edição rotulada.

**Fotos:** só do Wikimedia Commons, com licença livre e crédito (autor e licença). Quem não tem foto
que sirva fica com a placa de iniciais.

## 6. Comandos

```bash
python3 -m http.server 8000                    # o site em http://localhost:8000
npm run estado:base                            # linha de base (antes de mudar)
npm run estado:comparar                        # depois (código e visual: IDÊNTICO)
npm run teste                                  # tudo (cerca de 15 min): ordem de carga, e2e, home, frase,
                                               # autores, histórias, comunidade, movimento, páginas
node ferramentas/testes/movimento.mjs          # só as transições e as janelas (cerca de 5 min)
npm run auditoria:tecnica                      # XSS, listeners, CLS, tempo de carga
npm run formatar                               # Prettier
node ferramentas/design/videos.mjs transicoes-curto --larguras 1440,390 --folha     # folhas + vídeos
node ferramentas/design/videos.mjs transicoes-curto --larguras 390 --tema escuro --folha
node ferramentas/critico/q1-galeria.mjs 390 light   # quadros congelados (ver ferramentas/critico/LEIA.md)
```

As saídas locais vão para `.trabalho/`, que fica fora do git: vídeos, folhas, quadros e o estado.

## 7. Armadilhas já descobertas (para não repetir)

**Ambiente**

- O Playwright e o Chromium ficam em `/opt/node-tools` e `/opt/pw-browsers`. **Não** rodar
  `playwright install`.
- **Clique por coordenada** (`page.mouse`). O `locator.click` rola a página por causa do cabeçalho
  fixo.
  - O `videos.mjs` já confere se o ponto do clique está coberto, por exemplo pela barra de baixo.
- O Chromium daqui desenha **por software**: ~90 ms por foto da transição, e o vídeo atrasa e engasga.
  Para tempo exato, valem os quadros congelados (`ferramentas/critico`).
- O Chromium guarda **no máximo 50 entradas** de histórico. Teste não pode contar com `history.length`.
- `npx prettier --check index.html` já avisava antes; não é problema novo.

**Código das transições** (`app/42-movimento.js`, `app/43-rota.js`, `telas/movimento.css`)

- **Atributo no `<html>` ou `scroll-behavior` em linha** recalcula o estilo da página inteira (~80 ms).
  - Usar tipos de View Transition (`types: ['ir'|'voltar', 'titulo', 'filme']`) e
    `:active-view-transition` no CSS.
  - Usar a marca em JS `window.__emTroca`.
  - Rolar com `behavior: 'instant'`.
- **Animação criada no JS** (`element.animate` no `ready`) começa um ou mais quadros atrasada quando a
  página está ocupada. O que precisa estar certo no primeiro quadro vai no CSS (exemplo:
  `::view-transition-new(mm-filme):only-child`).
- **`content-visibility: auto`** só nos `.retrato` da home e nos `.ao-grupo`: em seções e cartões, ele
  deslocava a foto da tela antiga.
- **Cliques durante a transição** caem no `<html>`. O `42` pula a transição e repassa o clique ao que
  está embaixo do dedo.
- **Três cliques seguidos:** o contador `vez` impede que a atualização de uma troca pulada rode.

**Fotos e CSS**

- O **`Special:FilePath` do Commons não tem CORS**: não dá para ler os pixels. Para canvas, usar a URL
  direta do `upload.wikimedia.org` (Portão E).
- **O CSS está em 5 cópias com escopo** (`telas/*-site.css`), algumas com `!important`. Antes de
  concluir que uma regra "não pega", procurar a cópia com escopo. A consolidação é do Portão E.
- **Há CSS fora dos `.css`:**
  - o `<style id="memotiva-responsivo">` injetado por `curadoria/29`;
  - cerca de 85 `style=""` nos templates de `app/`.
- **O JS depende de ids e classes:** procurar em `assets/js` antes de renomear.

## 8. Antes do limite da sessão acabar

1. Commit e push de tudo, mesmo trabalho pela metade, numa branch de trabalho.
2. Atualizar o `RETOMAR.md`: o que foi feito, o que falta, os commits, as notas do Crítico e as
   decisões pendentes.
3. Se houver Crítico rodando, anotar o id e o que ele estava verificando.

## 9. Commits

- Mensagem em português, dizendo o que mudou e por quê.
- Terminar com as linhas de atribuição que o sistema pedir.
- Sem force-push. Não apagar nada sem perguntar.
- Não mexer em `backup/main-original-2026-10-13`, em `backup/trabalho-completo-2026-10-13` nem nas
  tags.
