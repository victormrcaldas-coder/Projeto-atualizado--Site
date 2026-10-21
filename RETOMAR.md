# Onde parei (21/10/2026): tudo o que falta, para retomar

> Chat novo: leia antes `COMO-TRABALHAR.md` (o método, os agentes e o Crítico). Os prompts prontos estão em
> `PROMPT-NOVO-CHAT.md`.

## Estado do repositório

- **`main` no GitHub tem TUDO** (conferido num clone limpo em 21/10/2026). Nenhuma branch remota tem
  commit fora da `main`, além dos backups.
  - Em 21/10, a pedido do proprietário, a `main` avançou por fast-forward até a
    `redesign/09c-janelas-listas`, sem reescrita.
  - Recebeu também o briefing original (`design/BRIEFING-REDESIGN.md`) e as referências de paleta da
    branch `claude/modest-edison-so8ay4`.
  - Recebeu ainda os guias para um chat novo (`COMO-TRABALHAR.md`, `PROMPT-NOVO-CHAT.md`,
    `.claude/agents/critico.md`, `ferramentas/critico/`).
- **Branches de trabalho** (já contidas na `main`, ficam como histórico):
  - `redesign/09b-transicoes`: Portão B, último commit 94f685f;
  - `redesign/09c-janelas-listas`: Fases 130 e 131 e Portão C, mais os merges da 09b.
- **Backups intocados:**
  - branches `backup/main-original-2026-10-13` e `backup/trabalho-completo-2026-10-13`;
  - as tags.
- **Testes na `main` (commit b25360e, mesmo código):**
  - `npm run teste` todo verde: home 72, frase 38, autores 38, histórias 34, comunidade 32, movimento 60;
  - 1.751 páginas sem erro.
- **`estado:comparar`:** diverge só em `globais` (`FILMES_DE_ARQUIVO` e `FOTO_CREDITOS`, das Fases 130
  e 131). Ao retomar, rodar `npm run estado:base` de novo na `main` para a nova linha de base.
- **Como continuar:** criar uma branch nova a partir da `main` para o próximo bloco, por exemplo
  `redesign/09d-rolagem-toque`. Commits pequenos. A `main` só recebe com o "pode juntar" do proprietário.

## Regras que valem sempre (do proprietário)

- **Comunicação:** falar em português.
- **Branches:**
  - trabalhar por etapas, em branches;
  - não apagar nada sem perguntar;
  - sem force-push;
  - não mexer nos backups nem nas tags.
- **Fontes:** só fontes OFL.
- **Conteúdo:**
  - nada inventado;
  - o conteúdo só muda por uma fase nova em `assets/js/curadoria/`;
  - não editar `assets/js/dados/` nem fases antigas.
- **Testes:** não reescrever teste para "passar".
- **Críticos:**
  - **O Crítico** avalia sem amenizar. Um bloco fecha com 9,5 ou mais em cada eixo, em duas rodadas
    oficiais seguidas, cada uma com um Crítico novo.
  - **Depois de cada correção pedida por um Crítico,** consultar o mesmo Crítico para confirmar que foi
    bem feita.
- **Vídeo:** não gravar o roteiro longo de 25 min. Usar o roteiro curto:
  `node ferramentas/design/videos.mjs transicoes-curto --larguras 1440,390 --folha` (e `--tema escuro`).

## 1. Portão B (transições entre telas): rodada 4 feita, corrigir e repetir

- **Rodada 3 oficial** (commit d975072): 7,6 / 6,8 / 6,5 / 8,6, reprovado. Os 10 defeitos foram corrigidos
  em cad30c6 e 94f685f.
- **Rodada 4 oficial** (Crítico novo, 21/10, commit 501e19b na `main`): **8,4 / 8,0 / 7,6 / 9,0,
  REPROVADO**. Subiu em todos os eixos. Os 10 defeitos dele, a corrigir agora (código em `app/42`,
  `app/43` e `telas/movimento.css`):
  1. **Texto duplicado** no lugar do toque: a fusão de 80 ms entre as fontes de `mm-titulo` mostra
     as duas famílias juntas (quadro d-indice-040). Correção: trocar de família num quadro só,
     escondido pelo voo, ou viajar só a fonte de chegada desde 0 ms.
  2. **Tela vazia de 80 a 200 ms** na ida e na volta do título (só o título sobre o fundo). Correção:
     a página nova começar aos 120 ms, com deslocamento, acompanhando o pouso. Equilibrar com o
     defeito da rodada 3 (texto sobre texto).
  3. **Latência** do toque ao `ready` de 172 a 276 ms. Correção: tirar as 5 cópias do CSS (adiantar
     essa parte do Portão E) e medir; o alvo é menos de 100 ms.
  4. **A cortina do filme corta letra a seco** (1440, folha 06, quadro 15). Correção: borda em
     degradê (máscara, como a coluna do autor) ou a citação sumir antes da cortina.
  5. **A página nova vaza por baixo do filme parado** (1440, folha 06, quadros 9 a 14). Correção: a
     cortina começar no mesmo quadro, ou cobrir a viewport.
  6. **No Voltar, o retrato muda de cor em 40 ms** (b-volta-000 cinza, b-volta-040 sépia). Correção:
     o mesmo tom nas duas pontas, ou uma transição de filtro no grupo.
  7. **A cor chega em dois saltos depois do pouso** (sépia e depois cinza frio, com o passe-partout
     aparecendo). Correção: o duotono terminar perto do tom real, e a moldura entrar junto com o
     fade. Liga com "cor em P&B" no Portão E.
  8. **Tela vazia só com o retrato aos 80 ms** (a-galeria-080, b-volta-080). Correção: a nova começar
     aos 60 ms, ou uma sobreposição mínima.
  9. **Legenda sobreposta no pouso do Voltar** (b-volta-120). Correção: o rótulo entrar depois do
     pouso, por volta de 260 ms.
  10. **O foco vai para a tela ainda invisível** (`43-rota.js:257`, no `updateCallbackDone`).
      Correção: focar em `t.finished`, ou depois de 340 ms, e anunciar sempre pelo `aviso`.
- **O Crítico não conferiu:** o Avançar, o movimento reduzido na prática e o tema escuro do link
  direto. O código prevê os três.
- **Os quadros da rodada 4** ficam em `.trabalho/critico/` (local) e se regeram com
  `ferramentas/critico/q1` a `q3`.
- **A FAZER:**
  1. Corrigir os 10.
  2. Mandar ao MESMO Crítico da rodada 4 para verificar. Se ele não existir mais no chat novo, um
     Crítico novo com esta lista.
  3. Fazer duas rodadas oficiais novas, até 9,5 em todos os eixos.
- **Continua adiado com motivo:**
  - cor em foto P&B (Commons sem CORS; Portão E com URLs diretas);
  - dados só da rota no link direto;
  - elemento compartilhado no filme.

## 2. Portão C (janelas, listas, fotos e carregamento): falta o Crítico

- **Feito:**
  - `app/45-janelas.js`: uma trava só, `inert`, Esc na de cima, fundo fecha, foco, histórico, folha
    do celular que fecha arrastando, a aspa que abre;
  - `telas/janelas.css`: entrada e saída com `@starting-style`, folha no celular, toast em pílula com
    `role=status`;
  - `app/46-listas.js`: cascata nos 6 primeiros, contagem que rola, traço do chip;
  - `app/44-midias.js`: foto que chega, placa sem foto no tom `--frame`, crédito da foto e filme na
    moldura;
  - testes das janelas no `movimento.mjs` (60 casos).
- **Não se aplica:** "ler mais" com `interpolate-size`, porque não existe "ler mais" no site.
- **A FAZER:**
  1. "Mais" como painel lateral e filtros e tradições como popover que cresce do botão: conferir se o
     CSS atual já cumpre o plano. Se não, fazer.
  2. Esqueleto com brilho lento de 1.500 ms nas telas injetadas (Autores, autor, obra). Hoje só o
     link direto tem esqueleto.
  3. Conferir as 3 janelas que não tinham transição: Publicados/Seguindo, editor de mídia e busca de
     música.
  4. Folhas de quadros das janelas: abrir e fechar a frase, a história e a folha no 390. Pode ser um
     roteiro curto novo, `janelas-curto`.
  5. Rodadas do Crítico: verificação e duas rodadas oficiais.

## 3. Portão D (rolagem, cursor, toque e cabeçalho): não começado

- **Revelação na rolagem** em todas as telas: `animation-timeline: view()`, com IntersectionObserver
  como alternativa. Nada acima da dobra espera.
- **Títulos grandes:** sobem por máscara, palavra por palavra, uma vez só.
- **Retratos:** revelação por recorte, de baixo para cima.
- **Números da home:** contam até o valor real, uma vez só.
- **Barra de leitura:** linha damasco no topo da história aberta e da página do autor.
- **Capa da história aberta:** ganha a câmera lenta do filme.
- **Cabeçalho:** no celular, some ao descer e volta ao subir (o compacto por transform já existe).
- **Cursor** (só no computador):
  - sublinhados que se desenham;
  - fio do cartão que se estende;
  - nome e datas do retrato no hover e no foco;
  - a cor do retrato chegando no hover;
  - galeria com inércia.
- **Toque:** escala de 0,98 em 150 ms, sem o realce azul. No filme do Descubra, deslizar troca a
  pessoa.
- **Opções atrás de `?portao`** para o Crítico julgar: o letreiro lento dos temas e o fundo que
  escurece na sala roxa.

## 4. Portão E (acabamento, tema escuro, tipografia e limpeza): não começado

- **Tema escuro nascido do café** (decisão 7 do Portão A):
  - roxo #401D47 nas salas;
  - "fonte conferida" numa cor só;
  - o damasco sem virar laranja;
  - AA medido.
- **Tipografia de livro:**
  - aspa pendurada;
  - `text-wrap: balance` nos títulos e `pretty` nos textos;
  - números de texto e tabulares;
  - hifenização pt-BR.
- **Estados** de cada componente nos dois temas. Cor de seleção e barra de rolagem.
- **Uma camada de CSS só** (isto também resolve parte da latência do Portão B):
  - retirar o bloco injetado por `curadoria/29` (`<style id="memotiva-responsivo">`) com código novo em
    `app/`, sem editar a fase;
  - desfazer as 5 cópias com escopo (`*-site.css`);
  - os ~85 `style=""` dos templates viram classes;
  - conferir 6 larguras × 2 temas antes e depois.
- **Fotos:**
  - URLs diretas do `upload.wikimedia.org`;
  - duotono feito em canvas;
  - detectar P&B (ver Portão B).
- **Desempenho:**
  - pré-carregar a foto só quando a pessoa aparece;
  - `content-visibility` nas listas longas;
  - filmes só na tela;
  - dados só da rota no link direto.

## 5. Portão final

- Dois Críticos novos revisam as 14 telas, as 11 larguras (320 a 1920), os 2 temas e os vídeos. Os
  dois precisam dar 9,5 ou mais em cada eixo.
- Refazer `RELATORIO-FINAL.md` com as referências e os princípios.
- Criar `redesign/vitrine` (ainda não existe). O proprietário liga o Pages nela.
- Varredura final: 0 rolagem lateral e 0 falha de contraste AA nas 11 larguras e nos 2 temas. CLS
  abaixo de 0,02 e menos de 5% de quadros perdidos com a CPU 4×.

## 6. Registros que faltam atualizar

- `design/DECISOES.md`: registrar as decisões dos Portões B e C.
  - a gramática das trocas;
  - o tipo `titulo` e o tipo `filme`;
  - a placa no tom `--frame`;
  - "ler mais" não se aplica;
  - a garantia de 30 s do link direto;
  - o tema em `localStorage`.

## 7. Decisões que dependem do proprietário

- **Rostos pequenos** na foto (Fase 131): Krenak, Senna, Chanel, Bandeira, Weil e Hawking, com
  Franklin e Callas no limite. Qualquer um pode passar à placa.
- **Lima Barreto:** a foto é da ficha de internação de 1914. Manter ou usar a placa?
- **Outros pontos da Fase 131** em `curadoria/CHECKPOINT.md`: Sêneca (herma dupla), Chien-Shiung Wu
  ("No restrictions"), Correio da Manhã (domínio público pelo Commons).
- **O filme do Descubra sem elemento compartilhado:** aceitar ou investir na ideia do Crítico.
- **O GitHub Pages:** ligar em Settings → Pages quando a vitrine existir.
- **Opções do Portão D** que o Crítico aprovar: o letreiro e o fundo que escurece.
