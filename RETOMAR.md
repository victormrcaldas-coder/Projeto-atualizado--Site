# Onde parei (20/10/2026): para retomar depois do limite da sessão

Branch: `redesign/09b-transicoes` (sai de `redesign/09a-direcao`). Nada foi para a `main`.
Plano aprovado: `/root/.claude/plans/root-claude-uploads-1d5331b9-7a34-52c3-deep-music.md` (cópia do resumo abaixo).

## Portão B (transições entre telas): quase fechado
- Feito: `app/42-movimento.js`, `app/43-rota.js`, `telas/movimento.css`; histórico, link direto, foco,
  aria-current, View Transition com retrato que viaja (ida e volta), cliques seguidos, sem recurso,
  movimento reduzido; teste novo `ferramentas/testes/movimento.mjs` (44/44) no `npm run teste`.
- Desempenho: toque → animação de 650 ms para 100–170 ms (scrollBehavior e data-vt-dir recalculavam a
  página inteira; content-visibility na galeria; cabeçalho espera a troca).
- Últimas mudanças AINDA SEM a bateria completa rodada depois delas: morph de volta (VOLTAS em app/42),
  troca em sequência (saída 150 ms, entrada 300 ms aos 150 ms).
- Falta: rodar `npm run teste` e `npm run estado:comparar`; rever folhas novas em
  `.trabalho/design/videos/folhas/` (regravar se o contêiner foi trocado:
  `node ferramentas/design/videos.mjs transicoes --larguras 1440,390 --folha` e `--tema escuro`);
  prints `node ferramentas/design/capturas.mjs --etapa 09b-transicoes --larguras 320,390,768,1024,1440,1920 --temas claro,escuro`;
  Crítico novo (régua dura, ≥9,5 por eixo em duas rodadas); DECISOES.md; push; `redesign/vitrine`.
- Nota para o Portão E: cada recálculo de estilo custa ~27 µs por elemento (CSS duplicado): consolidar.

## Fase 130 (filmes de arquivo): pesquisa pronta, fase ainda não escrita
- 23 clipes conferidos em `assets/video/arquivo/` (5,7 MB); registro em
  `curadoria/trabalho/fase130-filmes-de-arquivo/` (aprovados.json, candidatos.jsonl, REGRAS.md, folhas/).
- Falta: `assets/js/curadoria/40-fase130-filmes-de-arquivo.js` (FILMES_DE_ARQUIVO) pelo fluxo §8.3,
  e o uso no site (página do autor, filme do Descubra, hover) no Portão C.
- Atenção: Helen Keller saiu do transcode 240p (refazer); Einstein tem cortes; Vinicius sem ano.

## Fase 131 (fotos): pesquisa em andamento quando a sessão parou
- O que existia está em `curadoria/trabalho/fase131-fotos/` (estado.jsonl e parciais).
- Se incompleto: retomar a partir desses arquivos (quebradas, pequenas, Pessoa, Pascal, Buffett;
  ponto focal X% Y%; créditos "Foto: {autor} · {licença}").

## Depois
Portão C (janelas, listas, fotos), D (rolagem, cursor, toque), E (acabamento, escuro, CSS único), portão final.
