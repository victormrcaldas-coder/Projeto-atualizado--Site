# Ferramentas do MeMotiva

Scripts para testar o site, exportar o acervo e produzir novas fases de curadoria.
Nada aqui é carregado pelo site; o site é só `index.html` + `assets/`.

## Requisitos

- Node 18+ e Python 3.
- Playwright com Chromium. Dois jeitos:
  - `npm install && npx playwright install chromium`;
  - no Claude Code na nuvem já existe em `/opt/node-tools`, e `lib/navegador.mjs` o encontra sozinho.
- Saídas de trabalho vão para `.trabalho/` (fora do git). Para usar outra pasta, defina a variável `MEMOTIVA_TRABALHO`.

## Antes e depois de qualquer mudança no código

```bash
node ferramentas/testes/estado.mjs --salvar base     # 1. captura o estado ANTES
# … faça a mudança …
node ferramentas/codigo/analise-carga.mjs            # 2. ordem de carga dos scripts
node ferramentas/testes/estado.mjs --comparar base   # 3. estado DEPOIS (IDÊNTICO = nada mudou para o leitor)
node ferramentas/testes/e2e.mjs minha-mudanca        # 4. ponta a ponta, celular e desktop
node ferramentas/testes/paginas.mjs                  # 5. todas as páginas de obra e de autor
```

Numa mudança de conteúdo (fase de curadoria), o passo 3 deve mostrar diferença só onde a fase mexe.

## Pastas

| Pasta | Script | O que faz |
|---|---|---|
| `lib/` | `navegador.mjs` | Infra comum: Playwright, servidor estático, bloqueio de rede externa, espera da cadeia de fases. |
| `testes/` | `estado.mjs` | Estado final completo do site (frases, obras, páginas, biografias, histórias, registro de remoções, índices, logs) e comparação com uma captura anterior. |
| | `e2e.mjs` | Ponta a ponta em 390×844 e 1440×900: exceções, favoritos por `qid`, busca, rolagem, números, registro. Exporta os CSVs para `.trabalho/csv/`. |
| | `paginas.mjs` | Abre as 1.230 páginas de obra e as 521 de autor e acusa erro, página vazia ou "undefined". |
| | `legado/` | Testes antigos (`@sparticuz/chromium`), guardados como referência. |
| `exportar/` | `exportar-csv.mjs` | Gera os 5 CSVs de `curadoria/` a partir do estado real, mais `quotes.json`, `obras.json` e `lacunas.json`. |
| | `dados-do-site.mjs` | Extrai `obras`, `biografias` ou `logs` do site carregado. Serve para montar lotes de conferência. |
| `codigo/` | `analise-carga.mjs` | Acusa uso na carga de função declarada num arquivo posterior e funções declaradas duas vezes. |
| | `codigo-morto.mjs` | Lista declarações de topo que ninguém usa. |
| | `scripts.mjs` | Ordem dos scripts em `index.html`. |
| | `historico/` | Script e plano que dividiram o antigo `memotiva.js` (13/10/2026). Só documentação. |
| `curadoria/` | `gerar_bloco.py` | Gera o bloco JS de uma fase a partir de decisões JSONL. Tipos: `insercao`, `frases`, `obras`, `biografias`. |
| | `juntar_decisoes.py` | Junta as decisões dos lotes e aplica a revisão humana (overrides). |
| | `validar_insercoes.py` | Confere as inserções antes de gerar o bloco (campos, categoria, semelhança com frases atuais ou removidas). |
| | `nova_fase.py` | Instala o bloco como `assets/js/curadoria/NN-faseXXX-nome.js` e o registra em `index.html` antes de `app/99-iniciar.js`. |
| `auditoria/` | `editorial.py` | 25 checagens editoriais sobre o estado capturado (duplicatas, variantes, campos, Bíblia, registro, obras, datas, ligação frase → obra). `npm run auditoria`. |
| | `biblia.py` | Confere cada versículo contra o texto aberto da edição do rótulo (ACF, AA, NVI; baixar para `.trabalho/biblia/`, ver cabeçalho). |
| | `tecnico.mjs` | Carga, CLS, console, rede, listeners ao navegar e sondas de XSS pelo armazenamento compartilhado. `npm run auditoria:tecnica`. |
| `textos/` | `gutenberg.py` | Baixa textos integrais do Gutenberg pelo espelho GITenberg. |
| `design/` | `capturas.mjs` | Prints de cada tela (16, inclusive modais e telas com sessão) por largura e tema, com a rolagem horizontal medida e uma folha de contato. Base dos portões do redesign. Ex.: `node ferramentas/design/capturas.mjs --etapa 03-navegacao --larguras 390,768,1440`. Saída em `.trabalho/design/<etapa>/`. |
| | `amostra.mjs` | Copia do site carregado, por `qid`, as frases usadas nos protótipos de `design/prototipos/` (texto, fonte, original, papel, foto curada) e lê na API do Commons o autor e a licença de cada foto. Gera `design/prototipos/amostra.js`. Rodar com `NODE_USE_ENV_PROXY=1` na nuvem. |
| | `capturas-prototipos.mjs` | Prints dos protótipos (abertura, cartões, frase ampliada, paleta, tipografia) por largura e tema; mede a rolagem lateral, confere Esc e foco e audita o contraste de cada texto contra o fundo real. |

## Fluxo de uma nova fase de curadoria

É o fluxo das Fases 119–128. O passo a passo completo está em `ARCHITECTURE.md`, seção "Como continuar".

1. **Lotes.** Exporte os dados (`exportar-csv.mjs` ou `dados-do-site.mjs`) e monte lotes JSONL em `.trabalho/faseNNN/`.
2. **Regras.** Escreva `REGRAS.md` para quem vai decidir (agentes ou pessoas). Os modelos são `curadoria/trabalho/fase12x-regras.md`.
3. **Decisões.** Cada lote grava `dec_<lote>.jsonl`, uma linha por decisão, logo que decide.
4. **Revisão.** Confira as evidências fracas e escreva as correções em `revisao.jsonl`. Depois:
   - `juntar_decisoes.py`;
   - `validar_insercoes.py`, se a fase insere frases.
5. **Bloco.** Gere com `gerar_bloco.py <tipo> --fase NNN …` e instale com `nova_fase.py`.
6. **Testes e exportação.** Rode os testes da seção acima e `exportar-csv.mjs`. Copie os CSVs para `curadoria/`.
7. **Registro.** Copie as decisões para `curadoria/trabalho/faseNNN-…-decisoes.jsonl` e as regras para `faseNNN-regras.md`. Atualize `curadoria/CHECKPOINT.md`, `curadoria/PLANO.md` e `curadoria/trabalho/LEIAME.md`. Faça o commit.

### Pedido padrão para um agente de lote

> Leia primeiro as regras em `.trabalho/faseNNN/REGRAS.md` e siga-as à risca (qualidade antes de quantidade; não invente nada, nem capítulo ou página). Seu lote é X: lista em `.trabalho/faseNNN/lista_X.jsonl`, saída em `.trabalho/faseNNN/dec_X.jsonl`. Grave cada linha logo que decidir (append; se o arquivo já existir, continue de onde parou). Prefira texto integral. Não altere nada além do arquivo de saída. Ao terminar, responda com o resumo e as evidências mais fracas.

O limite de buscas na web é compartilhado entre agentes. Rode cerca de 6 lotes por vez e retome os que pararem pelo arquivo de saída.
