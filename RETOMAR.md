# Onde parei (21/10/2026): para retomar depois do limite da sessão

Branches (nada foi para a `main`):
- `redesign/09b-transicoes`: Portão B, último commit 3280489.
- `redesign/09c-janelas-listas`: sai da 09b (com merges dela). Tem as Fases 130 e 131 e o começo do Portão C.

## Portão B (transições entre telas): correções até a 2ª verificação do Crítico feitas
- Testes: `npm run teste` todo verde (movimento 48/48) e `estado:comparar` IDÊNTICO no commit 3280489.
- **Pendente:** a 3ª verificação do Crítico parou pelo limite. Reenviar ao mesmo Crítico (SendMessage),
  ou a um novo, com o pedido de verificação dos 6 itens:
  1. texto sobre a barra no 390 (z-index 5 em cab/barra/aviso);
  2. link direto em aparelho lento (`__rotaDesistiu`);
  3. latência (sem atributo `data-transicao`; âncora reaproveitada);
  4. títulos (span `.mm-letras`);
  5. coluna do texto aos 120 ms;
  6. filme sem elemento compartilhado, com o quadro malva.
- **Evidência:** `node ferramentas/design/videos.mjs transicoes-curto --larguras 1440 --folha` (cerca de 2 min).
  O proprietário pediu para **não** gravar o roteiro longo.
- **Regra do proprietário:** depois de cada correção pedida pelo Crítico, consultar o mesmo Crítico para
  confirmar que foi feita da melhor maneira. A nota oficial de cada rodada é de um Crítico novo.
- **Ideia do Crítico para o filme**, ainda não feita: viagem com o mesmo enquadramento do filme
  (`clip-path` no old e transform no retrato até o pouso, depois a câmera se acomoda).
- **Latência:** ~190 ms em 1x. Cerca de 85 ms vêm de três recálculos de estilo (CSS duplicado em 5
  cópias, a consolidar no Portão E) e cerca de 90 ms do desenho por software deste ambiente.

## Fases 130 e 131: no site (09c)
- `curadoria/40-fase130-filmes-de-arquivo.js` e `41-fase131-fotos.js`, gerados por
  `ferramentas/curadoria/gerar_fases_130_131.py`.
- `app/44-midias.js` e `telas/midias.css`: filme na moldura do retrato, créditos, placa com iniciais.
- Registro em `curadoria/CHECKPOINT.md`. Dúvidas para o proprietário estão lá: rostos pequenos, Lima Barreto.

## Portão C (janelas): em andamento na 09c
- Feito:
  - `app/45-janelas.js`: trava única, `inert`, Esc só na de cima, fundo fecha, foco, histórico;
  - `app/43`: `Rota.abrirJanela`/`fecharJanela`; o Voltar fecha a janela.
  - Os testes atuais passam.
- Falta:
  - `telas/janelas.css`:
    - entrada e saída com `@starting-style` ou visibilidade (a frase ampliada hoje troca `display` sem animar);
    - folha de baixo no celular com arrastar para fechar (450 ms, `--curva-folha`);
    - "Mais" como painel lateral;
    - filtros como popover;
    - foto ampliada acima da história (z-index);
    - fundo do login clicável;
    - `.sheet` sem `min-height: 100dvh`;
    - toast em pílula, com `role=status`.
  - "A aspa que abre" (FLIP do cartão até a frase ampliada).
  - Listas: cascata nos 6 primeiros, traço do chip, contagem que rola, `interpolate-size`.
  - Fotos: revelação, esqueleto.
  - Testes de janelas no `movimento.mjs`.
- Levantamento completo das 10 janelas: pedir de novo a um agente Explore se precisar
  (os números de linha estão na conversa).

## Depois
Portão D (rolagem, cursor, toque, cabeçalho), Portão E (tema escuro, tipografia, CSS único), portão final.
