# Redesign do MeMotiva: relatório final (Etapa 9, 20/10/2026)

O registro de cada decisão está em `design/DECISOES.md`. O que depende de código ou de curadoria, com o que fazer, está em `design/PENDENCIAS-CODIGO.md`.

## O que mudou

| Etapa | O que ficou no site                                                                                                                                              |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0–2   | Diagnóstico; direção visual (a Galeria, com toques da Florada); tokens, fontes livres (OFL) e componentes em `assets/css/01` a `03` e no guia `design/guia.html` |
| 3     | Cabeçalho que encolhe ao rolar, barra inferior de 5 itens no celular, rodapé roxo                                                                                |
| 4     | Home nova, de A a I, com cada botão ligado à sua tela; Descubra a cada 5 s, com "Voltar"; galeria com todas as pessoas com história; a página não pula na carga  |
| 5     | Cartão de frase como verbete, em todas as grades; frase ampliada como "sala" (retrato, nome, papel, Obra · Original · Imagem); Explorar, busca e filtros         |
| 6     | Autores & Obras com a busca direta e o índice de A a Z (menu, letra, nome: 3 cliques); página do autor e página da obra                                          |
| 7     | Descubra, Histórias e a história aberta como página de leitura, numa coluna só                                                                                   |
| 8     | Comunidade sem os relatos inventados; fundos dos relatos na paleta; Perfil, Escrever e a janela de entrar                                                        |
| 9     | Varredura de contraste e de rolagem lateral; movimento no tempo do sistema; iniciais sem o "de"; ajustes do Crítico                                              |

**Paleta.** Linho `#FAF3E1` de fundo, tinta café `#2B1811`, roxo `#401D47` na ação principal e nas salas escuras, ocre `#E5D17A` e café em faixas, apricot `#D78B30` só como ponto. O laranja forte e a combinação roxo com laranja da primeira direção foram recusados no Portão 1, por chamarem atenção demais. O detalhe está em `DECISOES.md`.

**Fontes (todas OFL).**

- Noto Serif Display: frases, nomes e títulos.
- Hanken Grotesk: a interface.
- Literata: leitura longa.
- Caveat: só a opção "Manuscrita" do Escrever.

## Referências e princípios

Consultadas na Etapa 1. Os prints estão em `.trabalho/design/01-direcao/referencias/`, e a tabela, em `design/prototipos/README.md`.

| Referência | Princípio aproveitado                                                     |
| ---------- | ------------------------------------------------------------------------- |
| Refero     | Um fundo, uma tinta e um acento; fio no lugar de sombra; legenda de museu |
| Inspotype  | Blocos de cor chapada, cada um com uma ideia                              |
| Brik       | Título enorme e apertado                                                  |
| Godly      | Galeria com etiquetas pequenas, sem arco-íris                             |
| Cult UI    | O detalhe aparece no hover **e** no foco do teclado                       |
| Originkit  | Como contraexemplo: movimento só pontual                                  |

## Testes (todos passam)

- **`npm run teste`:**
  - ordem de carga;
  - e2e no celular e no computador;
  - home: 72 casos;
  - Explorar e frase: 38;
  - Autores & Obras: 38;
  - Descubra e Histórias: 34;
  - Comunidade e entrar: 32;
  - 1.230 páginas de obra e 521 de autor, sem erro.
- **`npm run estado:comparar`:** IDÊNTICO. Nenhuma frase, fonte, biografia ou obra mudou.
- **`npm run auditoria:tecnica`:**
  - CLS na carga de 0,002 (celular) e 0,008 (computador); antes da correção da Etapa 4, era 0,75;
  - 0 exceções e 0 XSS executado.
- **Varredura da Etapa 9:**
  - 14 telas e janelas, em 6 larguras (320 a 1.920 px) e nos dois temas;
  - cerca de 72 mil textos medidos;
  - nenhuma falha de contraste AA e nenhuma rolagem lateral.

**Defeitos de antes do redesign achados e corrigidos pelos testes:**

- a janela de entrar ficava abaixo da camada escura e não recebia o clique;
- o cabeçalho tremia, parado perto do topo;
- a história aberta não fechava com Esc;
- o cartão de história não abria pelo teclado;
- abrir uma história com outra aberta travava a rolagem.

## Notas (0 a 10)

|                              | Crítico (antes dos ajustes) | Depois dos ajustes | Por quê                                                                                                                                                                                                   |
| ---------------------------- | --------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identidade visual            | 6                           | 7                  | A paleta e a serifa dão um ar literário próprio. O que pesa contra, segundo o Crítico, são elementos aprovados nos portões: o arco laranja, as faixas de cor e os rótulos com ponto.                      |
| Fluidez entre seções e telas | 5                           | 6,5                | Hoje todas as telas usam o mesmo sistema: cabeça, chips, verbetes, salas e janelas. A home ainda troca de fundo a cada seção, e a página do autor alterna larguras.                                       |
| Acabamento dos componentes   | 6                           | 7,5                | Saíram os links em caixa alta e a citação com travessão. As fileiras de chips agora esmaecem na borda. Foram corrigidos o nome logado estourando o cabeçalho e os dados do autor desalinhados no celular. |

## Opções do Crítico que dependem de você

São mudanças na direção aprovada, por isso não foram feitas.

1. **Home mais calma:**
   - tirar o fundo ocre do Explorar e deixar só um fio;
   - manter uma única sala escura (Descubra);
   - tirar o arco laranja e a faixa roxa da fonte da abertura.
2. **Menos "assinaturas":** o quadradinho laranja só nos rótulos de seção, não nos cartões nem nas janelas; o menu em caixa normal.
3. **Comunidade:**
   - tirar a faixa que explica a tela;
   - levar "Escrever um relato" para a linha das abas;
   - usar a coluna da direita no computador.

## Limitações

- As fotos dependem do Wikimedia Commons: 41 curadas não existem mais, e 33 são pequenas. Ver as pendências 1 a 4.
- A narração usa a voz do navegador.
- O CSS antigo (`memotiva.css`) e o bloco injetado por JS ainda carregam; as telas novas os anulam. Ver as pendências 13 e 14.
- A camada de cursor ficou mínima, com hovers discretos e sem efeito que siga o mouse, por pedido de sobriedade.
- Os prints de teste mostram alguns retratos vazios porque o ambiente de captura baixa as fotos uma a uma. No site elas carregam normalmente.
