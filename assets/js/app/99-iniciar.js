/* MeMotiva — app/99-iniciar.js
   Dispara init() e, em seguida, a cadeia de fases (window.__fase5Boot). Tem de ser o último arquivo carregado.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* Ordem de execução ao abrir o site:
   1. Carga dos scripts (index.html): dados-base, funções da interface e, em
      cada arquivo de curadoria, os blocos que corrigem/removem/acrescentam
      dados — parte roda já na carga, parte se registra na cadeia
      window.__fase5Boot (ver app/20).
   2. init() (app/15): carrega sessão e favoritos e faz a primeira renderização.
   3. window.__fase5Boot(): executa a cadeia de fases, da Fase 5 à última
      (hoje a Fase 128/126, no fim de curadoria/38). A Fase 89 garante que o
      portão de desduplicação da Fase 75 rode dentro da cadeia; a Fase 78 e
      a própria Fase 75 ainda têm um setTimeout(…, 0) redundante.
   Nova fase de curadoria = novo bloco no fim de curadoria/38 (ou novo
   arquivo antes deste), seguindo o padrão descrito em ARCHITECTURE.md. */
init().then(() => {
  if (window.__fase5Boot) window.__fase5Boot();
});
