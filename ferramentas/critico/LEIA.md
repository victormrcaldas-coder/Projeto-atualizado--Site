# Ferramentas do Crítico

Scripts que congelam as View Transitions e fotografam quadro a quadro. Foram escritos pelo próprio
Crítico na rodada 3 do Portão B e guardados aqui para as próximas rodadas. Os quadros saem em
`.trabalho/critico/` (fora do git).

```bash
node ferramentas/critico/q1-galeria.mjs 390 light       # largura e tema (light|dark)
node ferramentas/critico/q2-indice-obra.mjs 1440 dark
CRITICO_SITE=/tmp/copia node ferramentas/critico/q3-filme.mjs 390 light   # serve outra cópia (git archive <commit>)
```

| Script                   | O que fotografa                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `q1-galeria.mjs`         | retrato da galeria → página do autor, e a volta (`a-galeria`, `a-cor`, `b-volta`)  |
| `q2-indice-obra.mjs`     | galeria rolada de lado e a volta, nome do índice → título, obra → página e a volta |
| `q3-filme.mjs`           | filme do Descubra → autor, e a volta ao filme (cortina)                            |
| `q4-link-direto.mjs`     | link direto (`#autor-…`) nos dois temas e larguras; movimento reduzido             |
| `q5-link-lento.mjs`      | link direto com a CPU 4× mais lenta: o esqueleto e a primeira pintura              |
| `q6-lateral-teclado.mjs` | galeria rolada de lado; teclado (Tab até um cartão e Enter)                        |
| `q7-lateral-volta.mjs`   | volta para a galeria rolada de lado (moldura e retrato)                            |

`base.mjs` exporta:

- `abrir({ w, h, tema, reduz, hash })`: abre o site e espera o acervo carregar;
- `tocar(p, seletor)`: clique por coordenada, sem o Playwright rolar a página;
- `congelar(p, nome, tempos, acao)`: dispara a ação, pausa as animações `::view-transition-*` assim
  que aparecem e fotografa em cada tempo, em ms.

Ela também anota em `window.__log` o tempo do toque até o `ready` de cada transição.

Para um portão novo (janelas, rolagem), escreva um `qN-….mjs` no mesmo molde. Para as janelas e a
rolagem, que não usam View Transition, pause `document.getAnimations()` inteiro.
