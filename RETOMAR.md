# Onde parei (21/10/2026): para retomar depois do limite da sessão

Branches (nada foi para a `main`):

- `redesign/09b-transicoes`: Portão B, último commit 94f685f.
- `redesign/09c-janelas-listas`: sai da 09b (com merges dela). Tem as Fases 130 e 131 e o Portão C.

## Portão B (transições entre telas): correções da rodada 3 feitas, falta a verificação

- **Rodada 3 oficial** (Crítico novo, commit d975072): 7,6 / 6,8 / 6,5 / 8,6, reprovado.
- **Correções** (commits cad30c6 e 94f685f), conferidas com o script de quadros congelados do próprio
  Crítico (`scratchpad/critico-b3/scripts`, r1 a r3):
  - título sem texto por baixo: espera de 80 ms nos dois sentidos, tipo `titulo` passado, página
    nova só aos 200 ms;
  - fusão das duas letras no lugar do toque;
  - cabeçalho compacto já dentro da troca;
  - coluna do autor com máscara suave de 48 px, 24 px depois do retrato;
  - foto do autor pré-carregada no toque e no hover; teto de espera de 60 ms;
  - filme: tela inteira sob a cortina (tipo `filme`), volta como cortina ao contrário, o retrato sem
    destino sai em 80 ms (CSS `:only-child`);
  - moldura esmaece com a página no Voltar;
  - animações do JS canceladas no fim;
  - link direto: garantia de 30 s, foco na tela, tema no localStorage para a primeira pintura;
  - folhas de quadros: uma cor por marca, marca fora da View Transition, clique conferindo se o
    ponto está coberto, roteiro curto com as voltas.
- **Adiado, com motivo:**
  - "a cor chega" em foto P&B: o `Special:FilePath` não tem CORS e não dá para ler os pixels. Vai
    para o Portão E, com as URLs diretas do upload.wikimedia.org.
  - Latência de cerca de 85 ms de estilo (CSS em 5 cópias): Portão E.
  - Dados só da rota no link direto: Portão E (desempenho).
- **Próximo passo:** mandar as folhas novas (`.trabalho/design/videos/folhas/transicoes-curto-*`)
  ao mesmo Crítico da rodada 3 para verificação. Depois, uma rodada oficial com um Crítico novo.
- **Regra do proprietário:** depois de cada correção pedida pelo Crítico, consultar o mesmo Crítico. A
  nota oficial de cada rodada vem de um Crítico novo. Não gravar o roteiro longo.

## Fases 130 e 131: no site (09c)

- `curadoria/40-fase130-filmes-de-arquivo.js` e `41-fase131-fotos.js`, gerados por
  `ferramentas/curadoria/gerar_fases_130_131.py`.
- `app/44-midias.js` e `telas/midias.css`: filme na moldura, créditos, placa com iniciais (agora no
  tom do passe-partout, `--frame`).
- Registro em `curadoria/CHECKPOINT.md`. Dúvidas para o proprietário: rostos pequenos, Lima Barreto.

## Portão C (janelas, listas, fotos): quase pronto na 09c

- **Feito:**
  - `app/45-janelas.js` (trava única, `inert`, Esc, fundo, foco, histórico, arrasto da folha, a aspa
    que abre);
  - `telas/janelas.css` (entrada e saída, folha no celular, toast em pílula);
  - `app/46-listas.js` (cascata, contagem, traço do chip);
  - `app/44` (foto que chega).
  - **Testes:** `movimento.mjs` com 60 casos, entre eles os das janelas: histórico, inert, Voltar, Esc,
    X e foco, "Conhecer" + Voltar, arrasto de 10% e 40%.
- "Ler mais" com `interpolate-size`: não existe "ler mais" no site; o item não se aplica.
- **Falta:**
  - rodar a suíte na 09c depois do merge de 94f685f;
  - as rodadas do Crítico para o Portão C.

## Depois

Portão D (rolagem, cursor, toque, cabeçalho), Portão E (tema escuro, tipografia, CSS único, cor em P&B,
desempenho), portão final.
