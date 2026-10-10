# curadoria/trabalho — registros intermediários das fases em andamento

Arquivos de trabalho, não lidos pelo site. Cada linha de um `.jsonl` é a decisão sobre uma frase (`qid`):

- `confirma` — original conferido; `evidencia` diz onde (texto integral lido ou fonte consultada).
- `corrige` — original, tradução, fonte ou nota ajustados; `motivo` explica o defeito encontrado.
- `remove` — sai do catálogo ativo; `motivo` e `fontes` registram por quê.

Quando a fase é aplicada em `assets/js/memotiva.js`, o conteúdo vai para `notaInterna`
(exportado em `notas-internas.csv`) e para o registro de remoções (`remocoes-curadoria.csv`).

- `fase119-orig-decisoes.jsonl` — verificação do campo `orig` (580 pendentes da Fase 117). Em andamento.
