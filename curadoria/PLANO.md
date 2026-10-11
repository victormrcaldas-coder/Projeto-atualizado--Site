# MeMotiva — plano de trabalho (atualizado em 10/10/2026)

Critério do projeto: **quem pesquisar a frase e o autor deve encontrar o mesmo.** Sem "não foi possível confirmar" no site. Traduções fiéis de original conferido são aceitas (o site avisa que busca a maior proximidade).

## A. Processos que NÃO são lacunas (ordem sugerida)

| # | Trabalho | Estado | Próximo passo |
|---|---|---|---|
| 1 | Auditoria das 49 atribuições fracas | feito | — |
| 2 | Atribuições concorrentes e duplicatas entre autores (Fase 115) | feito (9 removidas) | repetir após cada lote |
| 3 | Versículos bíblicos com texto exato de edição publicada (Fase 116) | feito (97 frases) | decisão do proprietário (09/10): **não padronizar**; cada versículo fica na edição efetivamente conferida, rotulada corretamente; não trocar por ARA sem conferência |
| 4 | Verificar o campo `orig` (633 frases com original) | **feito (Fases 117 e 119)**: as 580 pendentes foram decididas em 10/10 — 247 confirmadas, 194 corrigidas, 139 removidas (ver CHECKPOINT) | — |
| 5 | Escrituras não bíblicas (Alcorão, Upanishads, Gita, Dhammapada, Tao Te Ching, Pirkei Avot, Analectos, hadith) | **feito (Fase 120)**: 240 decididas em 10/10 — 158 corrigidas, 42 removidas, 40 duplicatas (ver CHECKPOINT) | — |
| 6 | Frases com status A− e fonte genérica | **feito (Fase 121)**: as 542 decididas em 10–11/10 — 81 confirmadas, 124 corrigidas, 322 removidas, 18 duplicatas; A− = 0 (ver CHECKPOINT) | — |
| 7 | Descrições das obras: conferir fatos contra fontes (não reescrever) | não iniciado | amostragem por tipo + obras mais citadas |
| 8 | Motivos de remoção ainda "não reconsultados" (Pessoa/Pompeu, Epicteto/Zenão, Chaplin/Chamfort, Levitt/McGivena, Oprah/Angelou, Mao/Lao Tsé) + duplicatas achadas na Fase 119 (Michelle Obama, Megginson, Sojourner Truth) | pendente | buscas + fusão de duplicatas |
| 9 | Auditoria de código (funções duplicadas, listeners, desempenho) | parcial | só correções reais |
| 10 | Testes finais: responsividade (7 resoluções), Firefox/Safari | **por último**; Firefox/Safari indisponíveis aqui | navegador real do proprietário |
| 11 | Fotos de autores | **adiado a pedido** | 338 sem entrada |
| 12 | Obras duplicadas no catálogo (10) | **não unificar (decisão)** | — |

## B. Lacunas — 161 pessoas com 1–2 frases após a Fase 121 (mais 98 autores com obra e nenhuma frase, ver CHECKPOINT) (plano, não iniciado; recalcular ao fim das etapas editoriais)

A meta de 3 por autor é só referência (decisão de 09/10: não é obrigação; entra o que for comprovado, priorizando qualidade). **Só começa depois das etapas editoriais da seção A (itens 5–8) e da estabilização dos números.** Não usar 102 como alvo fixo.

**Grupo 1 — texto em domínio público provavelmente acessível (≈ 27), trabalhar primeiro**
- Textos já clonados ou localizados: Harriet Beecher Stowe (*A Cabana do Pai Tomás*), Flaubert (*Madame Bovary*), Ring Lardner (*You Know Me Al*, GITenberg), Théophile Gautier (*Mademoiselle de Maupin*, GITenberg), Júlio César (*Guerra das Gálias*), Plutarco (outros volumes das *Vidas* e *Moralia*), Dinah Craik, Santos Dumont (parte II e *Dans l'air*).
- A localizar: Hipócrates, Cleantes, Santo Isidoro, São Jerônimo, Lutero, Meister Eckhart, Herbert Spencer, Rumi, Maiakóvski, Michelangelo, Mozart (cartas), Tarsila (carta de 1923), Henri Matisse (*Notas de um pintor*), Gertrude Stein, Albert Schweitzer, Lima Barreto e Coelho Neto (edição com capítulo).
- **Poesia** (Yeats, Florbela, Maiakóvski, Adélia Prado, Quintana): permitida se legítima e verificável; não copiar trechos protegidos só para preencher lacuna (registrar e pular).

**Grupo 2 — contemporâneos; exigem texto impresso (≈ 65)**: sem acesso a texto verificável aqui, ficam como lacuna documentada, a menos que você forneça os textos ou o link de uma fonte confiável.

**Grupo 3 — sem obra textual (≈ 6)**: Harriet Tubman, Oswaldo Cruz, Charles Chaplin, John Lennon, Stephen Hawking, Walt Disney. Ficam como estão.

**Regras por lote** (sem limite artificial de tamanho; o limite é a qualidade da verificação): texto da obra lido; original e tradução identificados; `CURADORIA_CHECAR` antes de inserir; nota pública só factual, processo em `notaInterna`; deduplicação; CSVs reexportados no Chromium real; teste nas 2 resoluções; CHECKPOINT; commit.

## C. Decisões do proprietário (09/10/2026)
1. Lacunas: Grupo 1 autorizado, **depois** de todas as etapas editoriais (A5–A8), da atualização dos números e da estabilização do catálogo.
2. Versículos: não padronizar em uma edição; manter a edição conferida.
3. Processos 4, 5 e 6 autorizados (podem remover frases; não manter frase só por quantidade).
4. GitHub: trabalhar no repositório oficial em branch própria, commits coerentes; **sem merge/publicação em `main` sem autorização**.
