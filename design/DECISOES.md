# Redesign do MeMotiva: decisões do proprietário

Registro das decisões tomadas nos portões do redesign. Serve para continuar o trabalho em outro chat sem perder o contexto. O briefing completo fica com o proprietário (`BRIEFING-REDESIGN.md`). As regras gerais estão em `CLAUDE.md` e `ARCHITECTURE.md`.

## Etapas e branches

| Etapa | Branch | Situação |
|---|---|---|
| 0. Diagnóstico | `redesign/00-diagnostico` | Aprovada em 14/10/2026 |
| 1. Direção visual | `redesign/01-direcao` | Aprovada no Portão 1 (14/10/2026) |
| 2. Sistema de design | `redesign/02-sistema` | Aprovada no Portão 2 (14/10/2026) |
| 3. Cabeçalho, navegação e rodapé | `redesign/03-navegacao` | Aprovada no Portão 3 (14/10/2026) |
| 4. Home | `redesign/04-home` | 4a (protótipo) no Portão 4a |

Nada entra na `main` sem o proprietário dizer "pode juntar". As branches `backup/main-original-2026-10-13` e `backup/trabalho-completo-2026-10-13` não são tocadas.

## Portão 0 (14/10/2026)

| # | Assunto | Decisão | Onde entra |
|---|---|---|---|
| 1 | Relatos inventados da comunidade (`marina_sp`, `joao.forte`, `luztotal`, em `seedCommunityIfNeeded`, `app/10`) | Retirar e pôr no lugar um convite discreto para escrever | Etapas 4b (home, seção H) e 8 (comunidade) |
| 2 | Botão de compartilhar que já existe nos relatos (`sharePost`) | Manter. Não acrescentar compartilhamento novo | Etapa 8 |
| 3 | Contadores da home (frases curadas, temas, autores e vozes) | Manter, na seção Explorar, fora da abertura, com o número exato (hoje aparece "2412+") | Etapa 4b |
| 4 | Fontes | Guardar os arquivos no repositório, com a licença ao lado (ver a decisão 7) | Etapa 2, em `assets/fonts/` |
| 5 | Navegação no celular | Manter a barra inferior. Propor como reduzir os 8 botões | Etapa 3 |
| 6 | Rede do ambiente | Acesso "Completo". Em 14/10/2026 abriam: Commons, pt.wikipedia, Fontshare e as 8 referências. O en.wikipedia respondeu 429 (limite de pedidos) | — |
| 8 | Defeitos pequenos vistos no diagnóstico | Corrigir na etapa em que cada tela for redesenhada | Ver a lista abaixo |

**Defeitos pequenos a corrigir:**
- a pílula escura vazia no pé de todas as telas (`#toast` escondido com `translateY(120%)`, em `memotiva.css`);
- palavras partidas nos blocos de tema a 390 px ("Empreendedorism / o", "Autoconheciment / o");
- iniciais "MD" para Machado de Assis (`initials()`, em `nucleo/01`, conta o "de");
- contadores "2412+" sem ponto de milhar e com "+";
- o mesmo ícone para Autores e Histórias na barra inferior.

## Decisão 7: só fontes livres (14/10/2026)

**Decisão:** o site usa apenas fontes com licença **SIL Open Font License (OFL)**, do Google Fonts ou da parte livre do Fontshare.

**Motivo.** As fontes sugeridas no briefing (Zodiak, Gambetta, Erode, Sentient, Boska, Bespoke Serif, General Sans, Satoshi, Switzer, Supreme, Synonym) são do Fontshare, sob a **ITF Free Font License 2.0, de 17/08/2026**. Essa licença:
- **permite** hospedar as fontes no próprio site;
- **proíbe** distribuí-las por "repositório" ou "servidores de acesso público". O repositório do MeMotiva é público;
- **proíbe** oferecê-las "como fonte selecionável para usuários criarem o próprio conteúdo". É o que fazem as opções "Padrão", "Serifada" e "Manuscrita" do Escrever (`STYLE_FONTS`);
- **proíbe** modificar os arquivos, inclusive reduzir (subsetting) e converter formato.

As fontes OFL não têm essas restrições. Podem ficar no repositório público com o arquivo `OFL.txt`, podem ser reduzidas para carregar mais rápido e podem ser usadas no Escrever.

## Portão 1: direção visual (14/10/2026)

**Resposta do proprietário:** gostou do esquema de cores, mas pediu outra disposição:
- usar mais o café e as cores em hex do briefing;
- o laranja chamativo só como detalhe, sem aparecer muito;
- um projeto maduro, com tons que combinam e mais sutis, no lugar da combinação forte de laranja com roxo;
- adequar as fontes e manter um padrão: todas as frases com a mesma tipografia, para não ficar cada frase num estilo.

**O que ficou decidido (aplicado na Etapa 2):**

| Tema | Decisão |
|---|---|
| Base | Direção A (Marginália): a frase como página, a fonte como nota, Literata. Da C, a etiqueta da fonte (Obra · Original · Imagem). A cor da B foi recusada. |
| Paleta | "Café": fundo Linen `#FAF3E1`, superfície Cotton `#F5E7C6`, tinta Espresso `#2B1811`, fios Natural `#9F886F`, segunda tinta rara Organic `#3F422E`, marca-texto Light Gold `#F1E59B` e Muted Ochre `#E5D17A`. |
| Laranja | Só detalhe: ponto da categoria e da marca, traço do item ativo, sublinhado de link, "fonte conferida". Nunca fundo nem botão cheio. Como texto, `#9A4614`. No escuro, Apricot `#D78B30` / `#E3A15A`. |
| Roxo | Fora das superfícies. Só no anel de foco do teclado (tema claro). |
| Botão principal | Espresso cheio com texto Linen (no escuro, o inverso). |
| Tema escuro | Espresso profundo `#1A120E`, superfícies Espresso, texto Linen, detalhe Apricot. |
| Fontes | Literata (frases, títulos, leitura) e Ysabeau Office (interface). Caveat só na opção "Manuscrita" do Escrever. Fraunces, Manrope e Playwrite BR saem. |
| A frase | Um estilo só em todo o site: Literata regular, sem itálico, cor `--text`, mesma entrelinha. Muda só o tamanho, fixo por lugar (`--quote-card`, `--quote-modal`, `--quote-hero`), com um degrau menor para frase de mais de 140 caracteres (`data-comprimento="longa"`). Sai a escala contínua de `quoteFontSize`, a rotação e a "fita" dos cartões. |

A tabela das 17 cores (escolhida, apoio ou descartada, e por quê) e os contrastes medidos ficam em `design/guia.html`.

## Etapa 2: sistema de design

- **Arquivos:** `assets/css/00-fontes.css` (gerado), `01-tokens.css`, `02-base.css`, `03-componentes.css` e `assets/fonts/` (com `OFL.txt` e `LEIA-ME.md`). Ainda **não** são carregados pelo `index.html`: o site entra no sistema a partir da Etapa 3, tela por tela.
- **Componentes** usam as classes reais do site (`.quote-card`, `.expand-*`, `.chip`, `.bottom-nav`, `.site-header`, `.empty-state`, `.toast`…). Classes que ainda não existem estão marcadas "(nova)" no CSS.
- **Para a Etapa 3:** o mapa dos tokens antigos (`--coral`, `--jade`, `--marigold`, `--plum`, `--paper-*`, `--font-*`) para os novos está no fim do guia. `STYLE_COLORS` e `STYLE_FONTS` ficam em `assets/js/dados/` sem mudança; a troca será por CSS ou JS de fora.
- **Fontes de reserva** com métricas calculadas (`ferramentas/design/metricas-fallback.py`), para o texto não pular quando a fonte chega.

## Portão 2: correção da paleta (14/10/2026)

**Resposta do proprietário:** não pediu para trocar tudo por café. O café entra de forma equilibrada, para compensar onde a tela ficaria laranja demais. Nos prints de navegação real, tirar os excessos de cor que deixam o site ultrapassado. Trazer o layout novo no formato do Portão 1 para aprovar. Etapa 3 aprovada para seguir.

**Aplicado na Etapa 3:**
- **Café** (linho, algodão, espresso) no fundo, nas superfícies e no texto corrido.
- **Roxo** `#401D47` como marca: títulos, frases, botão principal, rodapé, foco. No escuro, a frase ampliada abre numa página roxa.
- **Laranja** `#E06F2D` em detalhes (ponto da marca e da categoria, traço do item ativo, sublinhado de link) e numa única massa pequena por tela, a "prancha" atrás do retrato. No escuro, a massa vira roxa e o detalhe vira Apricot.
- **Site real:** fontes locais; tokens novos e `04-ponte.css` mapeando os nomes antigos; sem manchas desfocadas, pílulas com sombra colorida, degradê roxo-laranja e iniciais em cores vivas; cabeçalho, menu, barra inferior e rodapé redesenhados (`assets/css/telas/navegacao.css`).
- **Proposta pendente:** barra inferior com 5 itens (Início, Explorar, Autores, Escrever, Mais). Ainda não aplicada no site.

## Portão 3: volta à Galeria, com toques da Florada (14/10/2026)

**Resposta do proprietário:** o modo claro ficou "creme/dourado" (linho no fundo e algodão em cartões e painéis), e esse tom não combina. As aberturas da Galeria (C) no claro e no escuro e a da Florada (B) no claro estavam lindas. Funcionava o laranja só num detalhe perto da foto e o roxo só embaixo. Não funcionava a letra ou a faixa laranja sobre fundo roxo ou preto, nem o painel inteiro laranja. Fontes: explorar e escolher onde cada uma combina mais, sem uma frase em cada fonte.

**Escolhas (perguntas respondidas):** fundo claro = linho da Galeria, sem dourado; abertura = Galeria com toque da Florada.

**Aplicado:**
- **Claro:** parede de linho em tudo; cartões e painéis sem fundo próprio (fio fino); tinta Black Hole `#222222`; oliva `#3F422E` nos acentos de texto; apricot só como ponto. Da Florada: disco laranja atrás do retrato da abertura e faixa roxa da fonte (e rodapé roxo).
- **Escuro:** a sala escura da Galeria (`#151311`, tinta Ivory), sem disco, sem faixa roxa, laranja só em texto pequeno.
- **Fontes por papel:** Noto Serif Display (todas as frases em itálico, nomes condensados, títulos), Hanken Grotesk (interface), Literata (leitura longa), Caveat (só "Manuscrita"). A Ysabeau Office sai.
- **Site real:** sem a textura de papel, a fita amarela, a sombra e a rotação dos cartões; frase ampliada atual com fundo liso.

## Portão 3: aprovado (14/10/2026)

**Resposta do proprietário:** aprovou o modelo da Galeria com toques da Florada e a barra inferior com 5 itens. Pediu para explorar as cores maiores, porque estava ficando "creme e preto": usar café, o amarelo mais escuro do briefing, aumentar o arco laranja e colocar coisas em roxo, sem nada mirabolante. Os movimentos e as transições ficam para a Etapa 9.

**Aplicado:**
- **Tinta café** (Dark Espresso `#2B1811`) no lugar do preto, para títulos, frases e texto.
- **Roxo** `#401D47` no botão principal, na faixa da fonte e no rodapé.
- **Faixas novas:** `.faixa-cafe` (espresso com texto linho, por exemplo o convite para escrever) e `.faixa-ocre` (Muted Ochre `#E5D17A` com texto café, por exemplo a faixa de temas).
- **Arco laranja** atrás do retrato maior (cerca de 2/3 da largura da foto), só no claro.
- **Barra inferior com 5 itens:** Início, Explorar, Autores, Escrever e Mais. O "Mais" abre o menu lateral com Descubra, Histórias, Comunidade e Perfil (`index.html`, `app/10`, `app/18`).

## Etapa 4a: proposta da home (15/10/2026, aguardando o Portão 4a)

Protótipo em `design/prototipos/home.html`, com conteúdo real do acervo e o CSS que vai para o site (`assets/css/telas/home.css`). Cada seção tem estrutura própria:

| Seção | O que mostra | Cor |
|---|---|---|
| A. Frase de hoje | A abertura aprovada no Portão 3: retrato com o arco laranja, nome, frase e etiqueta; embaixo, a faixa roxa da fonte | Linho |
| C. Explorar | "2.412 frases de 521 autores, em 22 temas", com o número exato, e o índice dos 22 temas com o número de frases de cada um | Sala ocre |
| B. Uma frase ao acaso | A frase sozinha, grande, com o botão "Outra frase" (o gerador de hoje) | Linho |
| D. Autores | Galeria de retratos em três tamanhos, alinhados pela base; sem foto, o nome numa placa café | Linho |
| E. Descubra | Um autor por vez (foto, nome, papel, resumo e uma frase), com troca a cada 9 s | Sala roxa |
| F. Histórias | Índice de histórias, uma aberta (foto, nome grande, resumo, Ler e Ouvir) | Linho |
| H. Comunidade | O convite para escrever, no lugar dos relatos inventados (decisão 1) | Sala café |
| I. Encerramento | Uma frase (Voltaire, Cândido) e o mapa do site, emendados no rodapé roxo | Sala roxa |

- **Sem a seção G (avaliações):** não há avaliações reais.
- **Descubra:**
  - pausa com o mouse em cima, com o foco do teclado dentro, ao selecionar texto, fora da tela e pelo botão;
  - no toque, a pessoa assume o controle;
  - com movimento reduzido, não troca sozinho.
- **Sistema:**
  - as salas de cor (`.faixa-cafe`, `.faixa-ocre`, `.faixa-roxa`) trocam a tinta, as linhas, o foco e o botão principal de tudo o que está dentro delas;
  - a frase em formato de cartaz (`--quote-poster`) tem o mesmo estilo de todas as frases, só maior.
- **Defeitos pequenos:**
  - o índice dos temas quebra só entre palavras, sem "Autoconheciment / o";
  - as iniciais ignoram "de", "da" e "dos".
- **Para a Etapa 4b:**
  - **CSS:** levar a marcação ao `#view-home`; carregar `telas/home.css` e o que ele usa de `03-componentes.css`.
  - **Abertura:** a frase de hoje passa a ser escolhida entre as frases verificadas de autores com foto curada.
  - **Gerador:** vira "Uma frase ao acaso", mantendo `#generateBtn`.
  - **Contadores:**
    - número exato com ponto de milhar e sem o "+";
    - as fases de curadoria escrevem o "+", por isso o número é corrigido no fim da cadeia.
  - **Comunidade:** relatos reais aparecem quando existirem.
  - **Defeitos:** corrigir `initials()` em `nucleo/01` e a pílula vazia do aviso (`#toast`).
- **Conteúdo, só anotado:** as fotos curadas de Clarice Lispector, Guimarães Rosa e Cora Coralina apontam para arquivos que não existem no Commons. Na galeria, os três aparecem na placa tipográfica.

