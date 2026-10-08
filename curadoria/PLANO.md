# MeMotiva — plano de trabalho (atualizado em 04/10/2026)

Critério do projeto: **quem pesquisar a frase e o autor deve encontrar o mesmo.** Sem "não foi possível confirmar" no site. Traduções fiéis de original conferido são aceitas (o site avisa que busca a maior proximidade).

## A. Processos que NÃO são lacunas (ordem sugerida)

| # | Trabalho | Estado | Próximo passo |
|---|---|---|---|
| 1 | Auditoria das 49 atribuições fracas | feito | — |
| 2 | Atribuições concorrentes e duplicatas entre autores (Fase 115) | feito (9 removidas) | repetir após cada lote |
| 3 | Versículos bíblicos com texto exato de edição publicada (Fase 116) | feito (97 frases) | **decidir** se quer padronizar em uma só edição |
| 4 | Verificar o campo `orig` (633 frases com original) contra textos em domínio público (GITenberg/Standard Ebooks) | **não iniciado** | verificação automática em lote; só cobre autores PD (Shakespeare, Wilde, Bacon, Twain etc.); modernos ficam sem verificação |
| 5 | Escrituras não bíblicas (Alcorão 16, Upanishads 10, Gita 47, Dhammapada, Tao Te Ching 45, Pirkei Avot): conferir contra tradução publicada ou original | **não iniciado** | verificar caso a caso contra textos abertos |
| 6 | Frases com status A− e fonte genérica (635 A−) | **não iniciado** | classificar por padrão de fonte; remover as que não têm obra/local conferível |
| 7 | Descrições das obras: conferir fatos contra fontes (não reescrever) | **não iniciado** | amostragem por tipo + obras mais citadas |
| 8 | Motivos de remoção ainda "não reconsultados" (Pessoa/Pompeu, Epicteto/Zenão, Chaplin/Chamfort, Levitt/McGivena, Oprah/Angelou, Mao/Lao Tsé) | pendente (não muda o resultado) | 6 buscas |
| 9 | Auditoria de código (funções duplicadas, listeners, desempenho) | parcial | só correções reais |
| 10 | Testes finais: responsividade (7 resoluções), Firefox/Safari | **por último**; Firefox/Safari indisponíveis aqui | navegador real do proprietário |
| 11 | Fotos de autores | **adiado a pedido** | 338 sem entrada |
| 12 | Obras duplicadas no catálogo (10) | **não unificar (decisão)** | — |

## B. Lacunas — 102 pessoas com 1–2 frases (plano, não iniciado)

A meta de 3 por autor é só referência; entra o que for comprovado, fica a lacuna se não houver fonte.

**Grupo 1 — texto em domínio público provavelmente acessível (≈ 27), trabalhar primeiro**
- Textos já clonados ou localizados: Harriet Beecher Stowe (*A Cabana do Pai Tomás*), Flaubert (*Madame Bovary*), Ring Lardner (*You Know Me Al*, GITenberg), Théophile Gautier (*Mademoiselle de Maupin*, GITenberg), Júlio César (*Guerra das Gálias*), Plutarco (outros volumes das *Vidas* e *Moralia*), Dinah Craik, Santos Dumont (parte II e *Dans l'air*).
- A localizar: Hipócrates, Cleantes, Santo Isidoro, São Jerônimo, Lutero, Meister Eckhart, Herbert Spencer, Rumi, Maiakóvski, Michelangelo, Mozart (cartas), Tarsila (carta de 1923), Henri Matisse (*Notas de um pintor*), Gertrude Stein, Albert Schweitzer, Lima Barreto e Coelho Neto (edição com capítulo).
- **Poesia** (Yeats, Florbela, Maiakóvski, Adélia Prado, Quintana): política do acervo sobre versos a confirmar.

**Grupo 2 — contemporâneos; exigem texto impresso (≈ 65)**: sem acesso a texto verificável aqui, ficam como lacuna documentada, a menos que você forneça os textos ou o link de uma fonte confiável.

**Grupo 3 — sem obra textual (≈ 6)**: Harriet Tubman, Oswaldo Cruz, Charles Chaplin, John Lennon, Stephen Hawking, Walt Disney. Ficam como estão.

**Regras por lote** (cada lote ≤ 10 frases): texto da obra lido; original e tradução identificados; `CURADORIA_CHECAR` antes de inserir; nota pública só factual, processo em `notaInterna`; deduplicação; CSVs reexportados no Chromium real; teste nas 2 resoluções; CHECKPOINT; commit.

## C. Decisões que dependem de você
1. **Iniciar a resolução das lacunas?** (peço permissão antes de começar)
2. Padronizar os versículos em **uma** edição (qual)?
3. Autorizar os processos 4, 5 e 6 acima (podem remover dezenas de frases).
