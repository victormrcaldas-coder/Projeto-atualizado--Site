# Pacote do estado atual — MeMotiva (gerado em 04/10/2026)

Estado = commit `ca90ef3` da branch `curadoria-lacunas-02` (PR #2). `main` não foi tocada.

## Estrutura (caminhos originais do repositório preservados)
- `index.html`, `assets/css/`, `assets/js/` — o site.
- `curadoria/` — CHECKPOINT.md, PLANO.md, todos os CSVs editoriais, histórico de remoções e `tools/` (scripts de teste versionados).
- `_auxiliares/` — **fora do repositório**, material de trabalho:
  - `git/` — `curadoria-lacunas-02.bundle` (todos os commits desde a `main`) e `.patch`.
  - `historico-fornecido/` — arquivos históricos que você enviou (build antigo, CHECKPOINTs antigos, CSVs v105).
  - `scripts-teste/` — scripts de Playwright/jsdom usados nas validações.
  - `scripts-historico/` — scripts Python que reconstruíram o histórico e verificaram os versículos.
  - `dados-intermediarios/` — JSON/CSV gerados nesses passos (diffs, quarentena do build antigo, mapas de versículos, `quotes_now.json` etc.).
  - `capturas/` e `resultados-de-teste/` — capturas de tela, resultados dos testes e CSVs exportados no Chromium real.

## Para o Contexto do Projeto
Substitua os arquivos do Projeto por: `curadoria/CHECKPOINT.md`, `curadoria/PLANO.md`, `curadoria/curadoria-frases.csv`, `curadoria/catalogo-obras.csv`, `curadoria/lacunas-restantes.csv`, `curadoria/remocoes-curadoria.csv`, `curadoria/notas-internas.csv`. Os demais podem ficar só no repositório.

## Números do estado
2.932 frases · 528 autores · 1.245 obras · 102 lacunas · 1.636 registros de remoção/decisão.

## Nenhuma credencial
Verificado: nenhum arquivo do pacote contém token do GitHub.
