# MeMotiva — plano de trabalho (atualizado em 13/10/2026)

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
| 7 | Descrições das obras: conferir fatos contra fontes (não reescrever) | **feito (Fase 124)**: as 1.245 conferidas em 12/10 — 850 sem erro, 380 corrigidas (538 campos), 15 retiradas (título inexistente, obra de outra pessoa ou atribuição errada); obras 1.230 (ver CHECKPOINT) | — |
| 8 | Motivos de remoção ainda "não reconsultados" + duplicatas achadas | **feito (Fase 122)**: 9 motivos reconsultados, duplicatas resolvidas, 6 escrituras B conferidas, rótulos de autor corrigidos (ver CHECKPOINT) | — |
| 8b | Frases A sem verificação registrada | **feito (Fase 123)**: 977 auditadas em 11–12/10 — 318 confirmadas, 321 corrigidas, 317 removidas, 22 duplicatas (ver CHECKPOINT) | — |
| 9 | Auditoria de código (funções duplicadas, listeners, desempenho) | **feito em 13/10/2026**: código dividido em 39 módulos (`assets/js/nucleo|dados|app|curadoria`), 45 duplicatas e 16 declarações mortas removidas, formatação padronizada, ferramentas em `ferramentas/`, `ARCHITECTURE.md`; estado final idêntico (ver CHECKPOINT) | pendente opcional: consolidar as fases antigas (ARCHITECTURE.md §9), só com decisão do proprietário |
| 10 | Testes finais: responsividade (7 resoluções), Firefox/Safari | **por último**; Firefox/Safari indisponíveis aqui | navegador real do proprietário |
| 11 | Fotos de autores | **adiado a pedido** | 338 sem entrada |
| 12 | Obras duplicadas no catálogo (10) | **não unificar (decisão)**; fatos das duas entradas conferidos na Fase 124 | — |
| 13 | Estabilização do catálogo: varredura final de duplicatas (mesmo autor e autores diferentes) | **feito (Fase 125)**: 1 atribuição removida (Esopo), 1 duplicata removida (Primo Levi), 2 fontes uniformizadas (Rosalind Franklin) | — |
| 14 | Ditados Populares (384 frases, status X, sem autor) | **fora do escopo de auditoria — decisão do proprietário (12/10/2026)**. Categoria editorial própria (ditados, provérbios, expressões tradicionais e frases de efeito, sem fonte bibliográfica nem autor). Não verificar, não contar como lacuna nem como pendência. **Não retomar.** | — |
| 16 | Auditoria sistemática (editorial, técnica e de segurança) do estado real | **feito (Fase 129, 13/10/2026)**: relatório em `curadoria/AUDITORIA-2026-10-13.md`. Edison corrigido, Mt 6:34, Reale, Godin removida, Newton e Blanchard, evidência de 92 versículos, 33 frases ligadas à página da obra; XSS da comunidade fechado, carga de ~17 s para ~4,5 s | dúvidas listadas no relatório (§1.3); autenticação real depende de back-end |
| 15 | Biografias e histórias: conferir fatos (perfis de 521 autores, 235 histórias, citações dentro dos textos) | **feito (Fase 126, 13/10/2026)**: 232 sem erro, 289 corrigidos (492 campos; 92 histórias), falas sem fonte retiradas, papéis genéricos substituídos (ver CHECKPOINT) | — |

## B. Lacunas — 97 pessoas com 1–2 frases após a Fase 129 (13/10/2026): 44 que restaram da Fase 127 (documentadas sem texto verificável) + 52 dos 131 autores que passaram de 0 para 1–2 frases + Seth Godin (frase sem fonte primária removida na Fase 129). 35 autores continuam sem frase (documentados). Os Ditados Populares não entram na contagem. Biografias e histórias concluídas (Fase 126).

A meta de 3 por autor é só referência (decisão de 09/10: não é obrigação; entra o que for comprovado, priorizando qualidade). Etapas editoriais da seção A (itens 4–8 e 13) concluídas e números estabilizados em 12/10. A lista de trabalho é `curadoria/lacunas-restantes.csv`. Não usar número antigo como alvo fixo.

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
5. Obras duplicadas no catálogo: não unificar (item 12).
6. (12/10/2026) **Ditados Populares fora de qualquer auditoria**, definitivamente. A exceção vale só para essa categoria; toda frase atribuída a autor continua sujeita aos critérios de autoria, fidelidade textual e fonte.
7. (12/10/2026) Lacunas: depois de recalcular, iniciar a resolução de **todas** (não só do Grupo 1).
8. (13/10/2026) Ordem de trabalho: (1) terminar as 179 lacunas; (2) **os 131 autores com obra e nenhuma frase**: são relevantes e ficam na curadoria; buscar frases verificáveis para todos e inseri-las com fonte, no modelo dos cartões do site, com a mesma regra rígida de veracidade (muitas frases correntes são só atribuições: essas não entram; não inventar); (3) **biografias e histórias** (item 15): conferir e corrigir datas, fatos e acontecimentos de todas.
