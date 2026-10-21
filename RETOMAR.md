# Onde parei (21/10/2026): tudo o que falta, para retomar

## Estado do repositório

- **`main`**: tem todo o trabalho até aqui. O proprietário pediu, em 21/10, para juntar tudo na `main`.
  A `main` avançou por fast-forward até a `redesign/09c-janelas-listas`, sem merge e sem reescrita.
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

## 1. Portão B (transições entre telas): verificar e fechar

- **Rodada 3 oficial** (Crítico novo, commit d975072): **7,6 / 6,8 / 6,5 / 8,6, reprovado.**
  - Eixos: coreografia, integridade, resposta, navegação.
- **Os 10 defeitos dele, corrigidos nos commits cad30c6 e 94f685f.** Conferi com os scripts de quadros
  congelados do próprio Crítico (cópias em `scratchpad/critico-b3/scripts`, r1 a r7; o scratchpad
  some com a sessão; o método é `congelar()`: pausa as animações `::view-transition-*` e fotografa
  em 0, 40, 80, 120, 160, 200, 260 e 340 ms).
  - título sem texto por baixo: grupo `mm-titulo` com 80 ms de espera e tipo `titulo`;
  - fusão das fontes;
  - cabeçalho compacto já dentro de `update()`;
  - coluna do autor com máscara suave;
  - pré-carga da foto no toque e no hover;
  - filme com tipo `filme` e volta em cortina (`:only-child`);
  - moldura no Voltar;
  - animações do JS canceladas;
  - link direto: 30 s, foco e tema em `localStorage('mm-tema')`;
  - folhas de quadros: uma cor por marca, fora da View Transition.
- **A FAZER:**
  1. Pedir a verificação das correções a um Crítico. O da rodada 3 bateu no limite antes de
     responder. Mandar a ele (ou a um novo, se não der) a lista acima e as folhas regeradas com
     `transicoes-curto`.
  2. Corrigir o que ele apontar e consultar de novo o mesmo Crítico.
  3. Fazer duas rodadas oficiais com Críticos novos, até 9,5 em cada eixo.
- **Ainda não resolvido, e o Crítico vai cobrar:**
  - **"A cor chega" em foto P&B:** o sépia vira cinza e parece perder cor. A causa é que o
    `Special:FilePath` do Commons não tem CORS, então não dá para medir a saturação. A saída é usar as
    URLs diretas do `upload.wikimedia.org` (o caminho sai do md5 do nome do arquivo) e medir num
    canvas pequeno. Para foto monocromática, fazer uma revelação tonal em vez da cor.
  - **Latência** do toque até o movimento: ~170–250 ms neste ambiente.
    - ~85 ms são recálculo de estilo, porque o CSS do site está em 5 cópias com escopo: consolidar.
    - ~90 ms são raster por software, um limite do ambiente.
  - **Link direto num aparelho lento** (~20 s com a CPU 4×): carregar só os dados da rota pedida.
  - **O filme do Descubra não tem elemento compartilhado.** Ideia do Crítico: viajar com o mesmo
    enquadramento do filme, com `clip-path` no old e transform no retrato.

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
