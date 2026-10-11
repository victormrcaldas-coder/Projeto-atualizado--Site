# curadoria/trabalho — registros intermediários das fases em andamento

Arquivos de trabalho, não lidos pelo site. Cada linha de um `.jsonl` é a decisão sobre uma frase (`qid`):

- `confirma` — original conferido; `evidencia` diz onde (texto integral lido ou fonte consultada).
- `corrige` — original, tradução, fonte ou nota ajustados; `motivo` explica o defeito encontrado.
- `remove` — sai do catálogo ativo; `motivo` e `fontes` registram por quê.
- `duplicata` — mesma passagem de outra entrada (`contraparte`) em outra tradução; sai como `variante-removida`.

Quando a fase é aplicada em `assets/js/memotiva.js`, o conteúdo vai para `notaInterna`
(exportado em `notas-internas.csv`) e para o registro de remoções (`remocoes-curadoria.csv`).

- `fase119-orig-decisoes.jsonl` — verificação do campo `orig` (580 pendentes da Fase 117). Concluída e aplicada (Fase 119, 10/10/2026).
- `fase120-escrituras-decisoes.jsonl` — escrituras não bíblicas (240 frases: Alcorão, hadith, tradição judaica, Tao, Buda, Gita, Analectos, Upanishads/Veda). Concluída e aplicada (Fase 120, 10/10/2026).
- `fase121-aminus-decisoes.jsonl` — auditoria das 542 frases A− (8 lotes por autor, revisão integral). Regras usadas em `fase121-regras.md`. Concluída e aplicada (Fase 121, 11/10/2026).
