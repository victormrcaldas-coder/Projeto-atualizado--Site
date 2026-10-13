# CLAUDE.md — MeMotiva

Site estático em pt-BR (HTML + CSS + JS puro, sem build) de frases curadas, autores, obras e histórias.
**Leia `ARCHITECTURE.md` antes de qualquer mudança.** A auditoria mais recente está em `curadoria/AUDITORIA-2026-10-13.md`.

## Comandos

```bash
python3 -m http.server 8000                    # abrir http://localhost:8000
npm run estado:base                            # captura o estado final (fazer ANTES de mudar algo)
npm run estado:comparar                        # depois: mudança só de código/visual tem de dar IDÊNTICO
npm run teste                                  # ordem de carga + e2e (390×844 e 1440×900) + 1.751 páginas
npm run auditoria:tecnica                      # XSS, listeners, CLS, tempo de carga
npm run formatar                               # Prettier
```

No Claude Code na nuvem, o Playwright e o Chromium já estão em `/opt/node-tools` e `/opt/pw-browsers`. Não rode `playwright install`.

## Regras que não mudam

- **Conteúdo** (frases, fontes, biografias, obras) **só muda com uma fase nova** em `assets/js/curadoria/`, com o fluxo de `ARCHITECTURE.md` §8.3. Não edite `assets/js/dados/` nem fases antigas.
- **Veracidade.** Não inventar frase, fonte, capítulo, página, original nem tradução. O que não se confirma sai, com registro. Ditados Populares ficam fora de auditoria. Versículos ficam na edição rotulada, sem padronizar.
- **Ordem dos scripts** em `index.html` é a ordem de execução, e `app/99-iniciar.js` é sempre o último. Confira com `node ferramentas/codigo/analise-carga.mjs`.
- **Segurança.** Nada de usuário ou do armazenamento compartilhado entra em `innerHTML` sem `escapeHtml`, `urlMidiaSegura`, `urlCssSegura`, `filtroSeguro` ou `idSeguro` (`nucleo/01`). Posts do feed passam por `sanearPost`.
- **Ignore `arquivo/`** (37 MB de material histórico, não usado pelo site) e `.trabalho/` (saídas locais).
- Commits pequenos e coerentes. Nada vai para a `main` sem autorização do proprietário.

## Redesign: o que saber antes de mexer no visual

- **Estilo:** `assets/css/memotiva.css`. Os tokens ficam em `:root` (cores, fontes, raios, `--maxw`), com o tema escuro em `html[data-theme='dark']`. Fontes do Google: Fraunces (títulos), Manrope (texto) e Caveat (manuscrito).
- **Há CSS fora do arquivo de estilo:**
  - um bloco responsivo injetado por JS (`<style id="memotiva-responsivo">`, em `assets/js/curadoria/29-fases30-36-paginas-de-obra.js`);
  - cerca de 90 `style="…"` dentro dos templates de `assets/js/app/`.
  
  Procure-os antes de concluir que uma regra "não pega".
- **O JS depende de ids e classes.** Antes de renomear ou remover um id ou classe, procure por ele em `assets/js` (por exemplo `.post-card`, `.quote-grid`, `#view-…`, `data-nav`, `data-qid`). Prefira trocar o estilo, não a marcação.
- **Telas:**
  - estáticas em `index.html`: home, explorar, descubra, historias, comunidade, perfil;
  - injetadas por JS: Autores & Obras, Panorama, Obra, Escrever (`app/18`, `app/19`, `app/24`);
  - cartão de frase: `quoteCardHTML` (`app/12`).
- **Verificação visual:** use o Playwright em 390×844 e 1440×900, nos temas claro e escuro, e confira cada tela com `navigateTo('<tela>')`. Depois de qualquer mudança visual, `npm run estado:comparar` tem de dar IDÊNTICO e `npm run teste` tem de passar.
