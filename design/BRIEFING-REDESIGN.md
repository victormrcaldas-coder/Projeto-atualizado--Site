# MeMotiva: briefing completo do redesign

> **Para a IA que recebe este arquivo.** Você é o designer e o desenvolvedor front-end do redesign do MeMotiva e vai trabalhar **junto** com o proprietário, em etapas, com aprovação dele antes de cada mudança grande. Leia este arquivo **inteiro** antes de qualquer ação. Ele traz todo o contexto que não está escrito no código, as regras que não podem ser quebradas, a visão de design organizada, o plano de trabalho e o jeito de apresentar propostas.
>
> Se houver conflito entre este corpo e o **prompt original do proprietário** (Apêndice A), **vale este corpo**. Ele é a versão revisada e coerente do mesmo pedido.

---

## 0. Como o proprietário usa este arquivo

1. Abra um chat novo no **Claude Code** com o repositório `https://github.com/victormrcaldas-coder/Projeto-atualizado--Site`. O modelo recomendado está na §16.
2. Anexe **este arquivo** e a imagem **`paleta-1-poster-bloom-pantone.jpg`** (pôster "bloom" com os Pantone). As outras três imagens de paleta são opcionais: os códigos HEX delas já estão no texto (§6).
3. Primeira mensagem sugerida (pode copiar):

   > Leia o arquivo anexado inteiro, depois `CLAUDE.md` e `ARCHITECTURE.md` do repositório. Comece pela **Etapa 0** do plano (§12) e só avance quando eu aprovar cada portão. Fale comigo em português.

> **Para a IA:** a partir daqui as instruções são para você.

---

## 1. Regras de ouro (inegociáveis)

1. **Não toque nas branches de backup.** `backup/main-original-2026-10-13` e `backup/trabalho-completo-2026-10-13` não podem ser alteradas, rebaseadas, apagadas nem usadas como base de trabalho. São a cópia de segurança do proprietário. Também não crie nem apague tags.
2. **Não trabalhe direto na `main`.**
   - Crie uma branch por etapa a partir da `main`, por exemplo `redesign/00-diagnostico`, `redesign/01-direcao`, `redesign/02-sistema`, `redesign/03-home`.
   - A `main` só recebe merge **depois** que o proprietário aprovar os prints daquela etapa e disser "pode juntar".
   - Nunca use `push --force` em branch compartilhada.
3. **Aprovação antes de mudança grande.**
   - Toda mudança de direção visual, de estrutura de uma tela ou de comportamento (movimento, rotação automática, cursor, navegação) é apresentada **antes** como modelo e espera aprovação.
   - Ajustes pequenos dentro de uma direção já aprovada, como espaçamento, contraste ou correção de bug visual, não precisam de aprovação. Basta listá-los no resumo da etapa.
4. **O conteúdo é patrimônio.** Frases, autores, fontes, biografias, histórias, obras, notas e números do acervo **não mudam** no redesign. Leia a §3 sobre os travessões e textos da interface.
   - Se surgir um problema de conteúdo, anote e mostre ao proprietário. Mudança de conteúdo só acontece como **fase de curadoria** (ARCHITECTURE.md §8.3), e não faz parte deste trabalho.
5. **Nada inventado.** Não use avaliação, depoimento, número de usuários, estatística, frase, autor, foto de pessoa errada ou dado fictício. Números exibidos têm de vir do acervo real, calculados ao vivo.
6. **Mudança visual não pode mudar dado.**
   - Antes de cada etapa, rode `npm run estado:base`.
   - Antes de cada commit, rode `npm run estado:comparar`. Para mudança só visual o resultado tem de ser **IDÊNTICO** (a lista de funções pode mudar se você criar funções novas de interface; os dados, não).
   - Rode também `npm run teste` antes de cada commit.
7. **Stack mantida:** HTML, CSS e JavaScript puro, sem build.
   - Não introduza React, Tailwind, shadcn, bundler nem framework.
   - Uma biblioteca pequena só entra com justificativa (benefício, peso, manutenção) e aprovação do proprietário. A preferência é CSS e JS próprios.
8. **Segurança mantida** (`CLAUDE.md`). Nada vindo de usuário ou do armazenamento compartilhado entra em `innerHTML` sem passar por `escapeHtml`, `urlMidiaSegura`, `urlCssSegura`, `filtroSeguro` ou `idSeguro`, todas em `nucleo/01`.
9. **Commits pequenos e descritivos, em português.** Terminam com as linhas de atribuição que o ambiente indicar.
10. **Não reescreva testes para "passar".** Se um seletor de teste mudar por causa do redesign, atualize o teste para checar a mesma coisa e explique no commit. Nunca enfraqueça a checagem.

---

## 2. Contexto do projeto (o que não está óbvio no código)

### 2.1 O que é o MeMotiva

- Site em pt-BR de **frases curadas**, com páginas de **autores** (biografia, cronologia, obras), páginas de **obras**, **histórias** narradas, **Descubra pessoas**, **comunidade** (relatos de usuários), **perfil** e **favoritos**.
- Compromisso central: **"quem pesquisar a frase e o autor deve encontrar o mesmo"**. Cada frase foi conferida contra a obra original, em 129 fases de curadoria documentadas em `curadoria/CHECKPOINT.md`. Esse rigor é o diferencial do produto, e o design deve transmiti-lo: fonte, obra e autor têm presença, não são rodapé escondido.
- **Números de 13/10/2026:**
  - 2.412 frases: 2.026 verificadas (status A) e 386 sem autor identificado (status X, das quais 384 são Ditados Populares);
  - 521 autores, 1.230 obras, 235 histórias e 529 panoramas biográficos;
  - 22 categorias.
- O proprietário fala português e aprova cada etapa. Ele **não é programador**: explique decisões em linguagem simples, com imagens.

### 2.2 Stack e estrutura (resumo; detalhes em `ARCHITECTURE.md`)

- **`index.html`** é a página única.
  - Seis telas fixas: `home`, `explorar`, `descubra`, `historias`, `comunidade` e `perfil` (`<section id="view-…">`).
  - Telas injetadas por JS: **Autores & Obras**, **Panorama** (autor), **Obra** e **Escrever** (`app/18`, `app/19`, `app/24`).
- **40 scripts clássicos**, carregados em ordem e com escopo global compartilhado. A ordem é a de execução, e `app/99-iniciar.js` é sempre o último. Pastas: `nucleo/`, `dados/`, `app/` e `curadoria/`.
- **CSS:** `assets/css/memotiva.css` (cerca de 100 KB, 725 regras).
  - Tokens em `:root`, tema escuro em `html[data-theme='dark']`.
  - Fontes atuais: Fraunces, Manrope e Caveat, pelo Google Fonts.
- **Navegação:** `navigateTo(view)`, redefinida em cadeia por várias fases; vale a última versão, em `app/24`. No celular há uma **barra de navegação inferior** (`.bottom-nav`).

### 2.3 Pontos frágeis para o redesign

1. **O JS depende de ids e classes.** Exemplos: `#exploreGrid`, `[data-fav-quote]`, `.profile-tab[data-tab="favorites"]` (usados pelos testes), `.view.active`, `.post-card`, `.quote-grid`, `data-nav`, `data-qid`, `#headerAuthArea` e `#toast`. Antes de renomear ou remover qualquer id ou classe, procure-o em `assets/js` e em `ferramentas/testes`. Prefira mudar o estilo, não a marcação.
2. **Há CSS fora do arquivo de estilo.**
   - Um bloco responsivo injetado por JS: `<style id="memotiva-responsivo">`, em `assets/js/curadoria/29-fases30-36-paginas-de-obra.js`.
   - Cerca de 90 atributos `style="…"` dentro dos templates de `assets/js/app/`.
   - Cores fixas em `STYLE_COLORS` (`assets/js/dados/08-historias-e-estilos.js`), que são os fundos que o usuário escolhe para seus relatos.

   Se uma regra "não pegar", é ali que está.
3. **Ids gravados pelos usuários não podem mudar.**
   - `STYLE_COLORS[].id` (coral, jade, marigold…) e `STYLE_FONTS[].id` (`body`, `display`, `hand`) estão gravados nos relatos.
   - O visual de cada opção pode ser redesenhado, desde que os **ids** fiquem.
   - A fonte manuscrita (`--font-hand`) existe por causa da opção "Manuscrita" do compositor de relatos. Se trocar a fonte, mantenha uma manuscrita.
4. **Fotos dos autores.**
   - Cerca de 183 autores têm foto curada (Wikimedia Commons, em `app/09` e `dados/08`). Os outros cerca de 338 são buscados na Wikipédia em tempo de execução e, se falhar, aparece um **avatar de iniciais**.
   - **Todo layout com foto grande precisa de uma versão tipográfica elegante** para quando não houver foto. É o caso comum, não exceção.
   - Fotos do Commons têm licença: mantenha os créditos onde já existem e não remova atribuição.
   - URLs `Special:FilePath` aceitam `?width=N`. Peça a largura certa em vez da imagem original gigante.
   - Não existe ponto focal salvo. Se precisar enquadrar rostos, crie um mapa **visual** separado (autor → `object-position`). Isso é dado de apresentação, não editorial, e pode ser criado.
5. **Persistência é de demonstração.**
   - `window.storage` só existe dentro dos artifacts do Claude.ai. Fora dele, login, favoritos e comunidade ficam só na memória.
   - A autenticação é toda no cliente (ver `curadoria/AUDITORIA-2026-10-13.md`, S2).
   - O redesign não resolve isso, e não deve prometer na interface o que o sistema não faz (por exemplo, "sua conta está segura na nuvem").
6. **A comunidade tem posts "semente" fictícios.** `seedCommunityIfNeeded` (`app/10`) cria 3 posts de usuários inventados (`marina_sp`, `joao.forte`, `luztotal`), e a home mostra "Da comunidade, para você". Isso conflita com "não fingir prova social" (§7.G e §7.H). **É decisão do proprietário** (§15, item 1): não remova sem aprovação; apresente a questão na Etapa 0.
7. **Carga.**
   - O site carrega cerca de 8 MB de JS. A cadeia de curadoria leva cerca de 4,5 s no Chromium antes de os números ficarem prontos; a home mostra "—" até lá.
   - O redesign deve ter um **estado de carregamento digno** (abertura e tipografia aparecem antes; números e listas entram com transição suave, sem salto de layout).
   - **Não acrescente peso:** nada de bibliotecas de animação grandes nem imagens sem dimensão.
8. **Áudio e narração.** Histórias têm narração (`speechSynthesis`) e relatos podem ter música, com botões de som nos cartões. Mantenha esses controles visíveis e acessíveis.

### 2.4 Ambiente do Claude Code na nuvem

- **Playwright e Chromium já instalados:** `/opt/node-tools/node_modules` e `/opt/pw-browsers`. **Não** rode `playwright install`. `ferramentas/lib/navegador.mjs` já resolve isso.
- **Rede.** Com a política padrão do ambiente, `WebFetch` e `curl` para sites comuns costumam ser **bloqueados**; `WebSearch` funciona. As referências da §8 (jitter.video, godly.design, fontshare.com, refero…) provavelmente **não abrem**.
  - Se uma referência não abrir, **diga ao proprietário qual domínio foi bloqueado**.
  - Peça que ele libere o domínio no ambiente (menu do ambiente na barra de título da sessão → Edit → Network access → Allowed domains; passos em https://code.claude.com/docs/en/cloud-environments#network-access) **ou** que mande prints das referências.
  - **Não invente** como uma referência é.
- **Fontes do Fontshare.** O download vem de `api.fontshare.com`, que pode precisar ser liberado. Prefira **hospedar os arquivos `.woff2` no repositório** (`assets/fonts/`), com a licença ao lado. Confira a licença de cada família na página dela antes de usar.
- **Pré-visualização para o proprietário.** Gere prints com Playwright e envie como arquivo, **ou** publique protótipos HTML como página de pré-visualização (Artifact privado) para ele abrir no celular. Não peça que ele rode comandos.

### 2.5 Comandos

```bash
python3 -m http.server 8000            # site em http://localhost:8000
npm run estado:base                    # foto do estado de dados ANTES de mexer
npm run estado:comparar                # depois: tem de dar IDÊNTICO
npm run teste                          # ordem de carga + e2e (390×844 e 1440×900) + 1.751 páginas
npm run auditoria:tecnica              # XSS, listeners, layout shift (CLS), tempo de carga
npm run formatar                       # Prettier
```

---

## 3. Análise de coerência do pedido original (o que foi ajustado e por quê)

O pedido original (Apêndice A) está bem pensado e consistente na visão. Havia, porém, conflitos que levariam a IA a errar. Foram resolvidos assim:

| # | No pedido original | Problema | Como fica |
|---|---|---|---|
| 1 | "Não fique me perguntando", "não envie relatórios", "continue até concluir" (§31 e fim da §17) | Contradiz o desejo de **construir junto, com aprovação** antes de mudanças grandes | Trabalho em **etapas com portões de aprovação** (§12). Entre portões a IA trabalha sozinha, sem relatórios intermediários. |
| 2 | "NÃO faça um mockup separado" | Impede mostrar modelos antes de mexer | Modelos e protótipos **são obrigatórios** nos portões de direção e de layout. A implementação real vem depois da aprovação. |
| 3 | "Leia todos os arquivos do projeto" | São cerca de 8 MB de JS e 37 MB de material histórico (`arquivo/`); ler tudo é impossível e inútil | Leia `CLAUDE.md`, `ARCHITECTURE.md`, `index.html`, `assets/css/memotiva.css` e os templates de `assets/js/app/`. Ignore `arquivo/`, `.trabalho/` e o miolo das fases de curadoria. |
| 4 | "Revise os textos" e "remova travessões artificiais" (§4) | Os textos das frases, biografias e histórias são **conteúdo editorial verificado**. Um travessão dentro de uma citação ou biografia faz parte do texto. | A revisão de texto vale **só para a interface**: títulos de seção, subtítulos, rótulos, botões, estados vazios e descrições escritas para o site (por exemplo, "Da comunidade, para você", "Ver comunidade →"). Conteúdo editorial não muda. |
| 5 | "Não adicionar compartilhamento social" (§11) | O site **já tem** compartilhar nos relatos da comunidade (`sharePost`) | Não **adicionar** compartilhamento novo. O que já existe fica até o proprietário decidir (§15). |
| 6 | Seção "Avaliações" (§6.G) | Não existe nenhuma avaliação real no sistema | O componente pode ser desenhado **no guia de estilo** (Etapa 2), mas **não aparece na home** enquanto não houver dados reais. "Espaço discreto" significa ausência, não espaço vazio com título. |
| 7 | Comunidade integrada à home (§6.H) | Os posts que aparecem hoje são **fictícios** (sementes) | Decisão do proprietário (§15). Até lá, a seção da home mostra só relatos reais; se não houver nenhum, mostra um convite discreto para escrever. |
| 8 | Fotografias grandes como centro da identidade (§12) | Cerca de 65 % dos autores não têm foto curada | Layouts com foto **e** com versão tipográfica. Seleções automáticas (Descubra, galeria, abertura) priorizam autores com foto curada, sem esconder os demais. |
| 9 | Referências por URL (§2) | A rede do ambiente pode bloquear os sites | Ver §2.4: pedir liberação de domínio ou prints. Não descrever o que não viu. |
| 10 | "Paleta original" | Os tons claros são quase idênticos entre si, e nenhum laranja passa contraste AA como texto sobre fundo claro (§6.2) | A IA propõe uma paleta **hierárquica** com variações derivadas para texto. O proprietário aprova. |
| 11 | Rotação automática (Descubra, biografias) | Conteúdo que muda sozinho por mais de 5 s exige forma de **pausar** (WCAG 2.2.2) | Botão de pausar/retomar visível e pausa no hover, foco e toque. Com `prefers-reduced-motion`, não gira sozinho. |
| 12 | Header "menu mobile" | O site já usa barra inferior no celular | Manter a navegação inferior no celular (é a mais confortável para o polegar), redesenhada. O header superior fica mínimo. Se quiser mudar, proponha na Etapa 3. |

O restante do pedido é coerente e fica como está, organizado nas seções a seguir.

---

## 4. A visão

**O que o MeMotiva deve ser:** "uma biblioteca viva de frases, autores e ideias". Não "um site de frases".

**Personalidade:** literatura, cultura, conhecimento, descoberta, profundidade, humanidade, sofisticação, contemporaneidade, calma, curiosidade. O usuário entra para **permanecer, explorar e descobrir**.

**Não pode parecer:**
- landing page genérica, template de SaaS, site de startup, dashboard ou portfólio de agência;
- template pronto de Framer ou projeto escolar;
- sequência de cards iguais;
- site claramente gerado por IA.

**Maturidade:** menos elementos, melhor hierarquia, mais espaço, melhor tipografia, mais consistência e mais intenção. **Espaço vazio é parte do design.** A sofisticação vem de tipografia, composição, fotografia, ritmo, espaçamento, contraste, proporção e microinterações, não da quantidade de efeitos.

**Sinais de "feito por IA" a eliminar na interface:**
- travessões e frases picadas por "—" nos textos da interface;
- blocos de texto genéricos e excesso de texto explicativo;
- grades de cards idênticos e estruturas repetidas seção após seção;
- excesso de bordas arredondadas, sombras, gradientes, glassmorphism e componentes em pílula;
- botões genéricos de SaaS, excesso de CTAs e ícones desnecessários;
- elementos flutuantes sem propósito e efeitos de demonstração técnica;
- espaçamento artificial e layouts previsíveis.

**Movimento:** o site deve parecer **vivo**, não **tentando impressionar**, e funcionar perfeitamente **sem animação**.

---

## 5. Tipografia

- Combinação recomendada: **serifa editorial contemporânea** (display e títulos, inclusive a frase em destaque) + **sans moderna** (corpo, metadados e navegação). Mantenha uma **manuscrita** para a opção "Manuscrita" dos relatos.
- **Pesquisar no Fontshare** (fontshare.com). A IA deve montar um espécime **com frases reais do acervo**: uma longa, uma curta, com acentos e "ç", "ã" e "õ", em tamanhos de display e de corpo, nos dois temas. Ponto de partida para testar, sem obrigação:
  - serifas: Zodiak, Gambetta, Erode, Sentient, Boska, Bespoke Serif;
  - sans: General Sans, Satoshi, Switzer, Supreme, Synonym.

  Confira se a família tem os caracteres do português e qual é a licença.
- **Escala curta e com contraste forte.** Cerca de 6 tamanhos fluidos com `clamp()`: display, título 1, título 2, corpo, pequeno e meta. Títulos podem ser muito grandes. O corpo precisa ser **muito legível**: 16–18 px no celular, linha de 60–75 caracteres e entrelinha generosa.
- **A frase é a protagonista.** Defina um estilo próprio para a citação, com aspas tipográficas, recuo ótico das aspas (hanging punctuation onde for possível) e tamanho que se adapta ao comprimento da frase. Já existe `quoteFontSize(q.text)`; reaproveite a ideia.
- **Hospede os arquivos `.woff2`** em `assets/fonts/`, use `font-display: swap`, faça preload só das 1–2 variantes da primeira dobra e use métricas de fallback (`size-adjust`) para não haver salto de layout.

---

## 6. Identidade cromática

### 6.1 Todas as cores fornecidas (todas devem entrar na comparação)

| Grupo | Nome | HEX |
|---|---|---|
| Paleta original | Light Parchment | `#FFF4D6` |
| | Light Gold | `#F1E59B` |
| | Muted Ochre | `#E5D17A` |
| | Dark Espresso | `#2B1811` |
| | Deep Purple | `#401D47` |
| | Burnt Orange | `#E06F2D` |
| Novas, das referências | Sustainable Linen | `#FAF3E1` |
| | Recycled Cotton | `#F5E7C6` |
| | Electric Tangerine | `#FF6D1F` |
| | Black Hole | `#222222` |
| | Ivory | `#F5E6C5` |
| | Apricot | `#D78B30` |
| | Natural | `#9F886F` |
| | Organic | `#3F422E` |
| Pôster "bloom" (imagem 1, amostra **aproximada** da foto) | areia (Pantone P 15-2 C) | ≈ `#B1A082` |
| | roxo (Pantone P 95-16 C) | ≈ `#3C1C44`, quase o Deep Purple |
| | laranja (Pantone P 30-8 C) | ≈ `#E06F2D`, igual ao Burnt Orange |

O pôster "bloom" é a referência de **clima e proporção**: fundo de areia e papel, laranja como massa principal, roxo profundo como tinta e contorno, muito espaço e formas simples. As outras três imagens só mostram amostras com nome e HEX. **Não copie os nomes comerciais nem os layouts das imagens.**

### 6.2 Fatos medidos (contraste WCAG, calculado)

| Par | Contraste | Leitura |
|---|---|---|
| Espresso `#2B1811` sobre Linen `#FAF3E1` | **15,3 : 1** | Excelente para texto |
| Deep Purple `#401D47` sobre Linen | **12,8 : 1** | Serve para títulos e texto |
| Organic `#3F422E` sobre Linen | 9,4 : 1 | Serve para texto de apoio |
| Natural `#9F886F` sobre Linen | 3,05 : 1 | **Reprova como texto comum.** Só para texto grande ou decoração; `#7A6450` dá 5,0 : 1. |
| Burnt Orange `#E06F2D` sobre Linen | 2,9 : 1 | **Reprova como texto.** Variante escura `#A9501A` dá 4,9 : 1. |
| Electric Tangerine `#FF6D1F` sobre Linen | 2,5 : 1 | Reprova como texto. Só como **massa de cor** ou acento grande. |
| Apricot `#D78B30` sobre Linen | 2,5 : 1 | Reprova como texto |
| Branco sobre Burnt Orange | 3,2 : 1 | **Reprova** para texto de botão |
| Espresso sobre Burnt Orange | 5,2 : 1 | Passa: botão laranja usa **texto escuro** |
| Espresso sobre Tangerine | 6,0 : 1 | Passa |
| Linen sobre Deep Purple | 12,8 : 1 | Excelente: seções e blocos roxos com texto claro |
| Tangerine sobre Deep Purple | 5,0 : 1 | Passa: acento sobre roxo |
| Linen sobre Espresso | 15,3 : 1 | Excelente (tema escuro) |
| Tangerine sobre Espresso | 6,0 : 1 | Passa (acento no tema escuro) |
| Deep Purple sobre Espresso | 1,2 : 1 | **Invisível.** No tema escuro o roxo só funciona como superfície com texto claro, nunca como texto. |

**Redundâncias medidas:**
- Linen × Parchment: **1,01 : 1**, praticamente iguais;
- Recycled Cotton × Ivory: **1,01 : 1**, praticamente iguais;
- Linen × Cotton: 1,11 : 1, diferença sutil, mas útil para **separar superfícies**.

### 6.3 Recomendação inicial (ponto de partida; a decisão final é aprovada na Etapa 1)

- **Fundo principal (claro):** Sustainable Linen `#FAF3E1`. Parchment fica de fora por ser igual.
- **Superfície secundária:** Recycled Cotton `#F5E7C6`. Ivory fica de fora por ser igual.
- **Texto:** Dark Espresso `#2B1811`. Black Hole só se um cinza neutro for necessário em algum ponto; o espresso é mais quente e mais próprio da marca.
- **Tinta da marca:** Deep Purple `#401D47`, para títulos grandes, seções de destaque com texto claro, a assinatura do autor e o foco.
- **Acento principal:** Burnt Orange `#E06F2D` como **massa de cor** (fundos de destaque, formas, botão principal com texto escuro), com uma **variante escura `#A9501A` para texto e link**.
- **Acento pontual:** Electric Tangerine `#FF6D1F`, só no tema escuro e em detalhes muito pequenos. Uso amplo fica neon demais.
- **Apoio discreto:** Natural (metadados grandes e linhas, em versão escurecida para texto pequeno) e Organic (contraponto raro: um selo, uma seção, a categoria "natureza/vida"), sem forçar presença.
- **Reservar ou descartar da paleta ativa:** Light Gold e Muted Ochre (risco de "amarelo demais" e vintage), no máximo como marca-texto sutil ou fundo de um estado. Apricot vira candidato a acento do tema escuro, se testar melhor que o tangerina.
- **Tema escuro**, irmão do claro, sem inverter:
  - fundo espresso profundo (por exemplo `#1A120E`, derivado do Espresso) e superfícies em espresso `#2B1811`;
  - texto Linen;
  - seções em Deep Purple com texto claro;
  - acento Tangerine ou Burnt Orange;
  - fotos sem filtro pesado.

**A paleta precisa de hierarquia:** a maioria das seções usa **um fundo, uma tinta e um acento**. Registre tudo em **tokens semânticos** (§11) e entregue no fim uma tabela "escolhida / apoio / descartada, e por quê", como o pedido original exige.

---

## 7. A Home: narrativa editorial (de A a I)

A home atual é curta. A nova deve ser **mais extensa e contar uma história ao longo da rolagem**, com seções de personalidades diferentes que pertençam ao mesmo sistema. Cada seção abaixo traz a ideia e de onde vêm os **dados reais**.

| Seção | Ideia | Dados reais | Cuidados |
|---|---|---|---|
| **A. Abertura** | Capa contemporânea, assimétrica: tipografia grande, uma frase, um retrato, o nome e pequenos atalhos de navegação. **Nunca** o padrão título + subtítulo + botão + imagem ao lado. | `QUOTES` (status A) com autor que tenha foto curada; `AUTOR_INDEX` | Precisa funcionar antes de o acervo terminar de carregar (§2.3, item 7): tipografia e composição aparecem primeiro, a frase entra suavemente. |
| **B. Frase em destaque** | A frase como protagonista, fora de card, enorme, com muito ar; autor com presença e foto integrada. Mostrar a **fonte/obra** com elegância, porque é o diferencial do site. | `QUOTES` com `src`; foto do autor | Tamanho adaptado ao comprimento da frase |
| **C. Explorar** | Convite à exploração: grid editorial, grandes títulos, categorias como índice de revista e números reais. Evitar cara de catálogo. | `CATEGORIES` (22); contagens ao vivo | Categorias são navegação: precisam ser claramente clicáveis |
| **D. Autores** | Coleção editorial: trilho horizontal ou galeria com tamanhos diferentes e sobreposição leve. Não reduzir todos a miniaturas iguais. | `AUTOR_INDEX`, `PAPEIS`, fotos | Versão tipográfica para quem não tem foto |
| **E. Descubra** | O ponto alto: um autor por vez (foto, nome, papel, biografia curta, frase), trocando **devagar** (crossfade ou deslocamento pequeno). O usuário assume o controle ao interagir. | `PERFIS_PROFUNDOS` (`curta`, `resumo`), `PAPEIS`, `QUOTES` | Pausa no hover, no foco e no toque; botão de pausa; não trocar enquanto a pessoa lê; com movimento reduzido, troca só manual (§9) |
| **F. Histórias / Biografias** | Experiência editorial: imagem grande + nome enorme + texto curto, ou texto revelado na rolagem, ou o autor atual e o próximo surgindo. **Componente extensível** para novas biografias. | `STORIES` (235), `PERFIS_PROFUNDOS` | Narração por áudio continua acessível |
| **G. Avaliações** | **Não aparece** enquanto não houver avaliações reais. O componente (nome, nota, comentário, data, avatar) fica pronto no guia de estilo. | Nenhum hoje | Nunca usar "4,9 estrelas", "milhares de usuários" ou similares |
| **H. Comunidade** | Parte natural do ecossistema, sem botão gigante de conversão e sem linguagem agressiva. | Relatos reais de `feed:posts` | Decisão sobre os posts semente (§15, item 1) |
| **I. Encerramento** | Final forte e **diferente** da abertura: uma frase, um autor, descoberta e acesso às outras áreas. Integrado ao **rodapé**, que também pertence à identidade. | `QUOTES`, navegação | Não repetir a estrutura da abertura |

**Ritmo:** alterne tipografia grande, fotografia, vazio, grid, assimetria, frase isolada, galeria e biografia. Nenhuma seção deve ter a mesma estrutura da anterior.

---

## 8. Referências visuais (princípios, nunca cópia)

Referências do proprietário:
- https://jitter.video/
- https://brik.space/
- https://godly.design/
- https://www.fontshare.com/
- https://inspotype.com/playground?projectId=78
- https://www.originkit.dev/
- https://styles.refero.design/ (consulta obrigatória)
- https://www.cult-ui.com/ (consulta obrigatória)

Busque também referências de sites editoriais, revistas digitais, literatura, cultura, fotografia, bibliotecas digitais, portais de conteúdo e experiências de leitura contemporâneas.

**O que estudar:** composição, tipografia, espaçamento, grids, proporção, imagens, hierarquia, ritmo, navegação, comportamento na rolagem, galerias, carrosséis, microinterações, movimento, cursor, transições e apresentação de conteúdo.

**Regras para usar as referências:**
- **Não copiar**, não reproduzir layout específico e não virar mistura das referências. A identidade final é do MeMotiva.
- **Refero:** priorize sistemas de marcas ligadas a leitura, cultura e fotografia, não as que estão em alta. Pode exigir login: se não abrir, peça prints.
- **Cult UI:** é feito em React, Tailwind e shadcn. **Extraia o princípio** da interação e reproduza com CSS e JS puros. Não instale nada dele.
- **Na Etapa 1**, mostre ao proprietário quais princípios tirou de cada referência, em uma frase cada. No fim, registre a síntese no relatório da Etapa 9.
- Se uma URL não abrir, siga a §2.4.

---

## 9. Comportamento global

### Header e navegação
- O header fica acessível durante a rolagem (sticky), mas **sem dominar a tela**: mais aberto e integrado no topo, mais compacto durante a rolagem, com transição discreta.
- **No celular:** header mínimo e a barra inferior redesenhada, com alvos de toque de pelo menos 44 px. Nada cobre conteúdo e o menu fecha corretamente.
- Ao trocar de tela, o usuário sabe **onde está**, **como voltar** e **o que é clicável**.

### Rolagem
- O conteúdo aparece conforme a pessoa chega: fade, reveal, clipping, pequeno deslocamento, entrada de imagem e escala muito discreta, com `IntersectionObserver` e só `transform` e `opacity`.
- Sensação de "conteúdo sendo descoberto", não de "apresentação".
- **Proibido:** sequestrar a rolagem, parallax extremo, zoom exagerado, texto girando, elementos voando, animação longa ou lenta demais, e qualquer efeito que atrapalhe a leitura.
- Duração típica: 200–450 ms, curvas suaves.

### Cursor (só desktop, `@media (hover: hover) and (pointer: fine)`)
- Camada **quase imperceptível**: imagens e fotos com deslocamento sutil, leve profundidade, cards reagindo à posição, revelação de detalhes, escala mínima e clipping suave em áreas específicas.
- **Sem cursor customizado chamativo** e sem "efeito de videogame".
- **Um único listener** de `pointermove` por componente ativo, com `requestAnimationFrame`, desligado fora da tela.
- **Nenhuma informação depende do mouse.** No toque, use comportamento próprio (toque revela e arrastar navega).

### Galeria horizontal de autores
- **No desktop:** arrastar com o mouse, hover, movimento suave, autoplay opcional que **pausa na interação**.
- **No celular:** arrastar natural com `scroll-snap` e áreas de toque confortáveis.
- Precisa parecer **galeria de museu**, não carrossel de loja. O loop não pode "quebrar" visualmente. Setas e teclado também funcionam.

### Biografias em renovação
- Troca elegante, **só com dados reais**.
- **Não muda enquanto a pessoa lê**: pausa com foco, hover, toque ou seleção de texto. Tem controle manual e botão de pausa.

### Frase ampliada (modal)
- Mantém a função atual de abrir em tamanho ampliado, redesenhada como **página editorial**: a frase respira, o autor tem presença, a foto está integrada e a fonte e a obra aparecem.
- **X sempre visível e acessível**, fechamento com Esc e retorno do foco.
- A foto do autor **continua podendo abrir em visualização maior**.
- Não adicionar compartilhamento social novo.

### Fotografias
- Escalas variadas (retrato grande, vertical, quadrada, horizontal, foto ocupando área), mas **nunca cortar rosto mal**.
- Revise `object-fit`, `object-position`, `aspect-ratio` e ponto focal (mapa visual da §2.3, item 4).
- Use `loading="lazy"`, dimensões declaradas, `srcset` ou `?width=` do Commons, e fallback tipográfico.

### Fluidez dos fluxos existentes
- Navegação, busca, filtros, exploração, troca de frases, seleção de autores, biografias, Descubra, Histórias, comunidade, perfil, modais, tema e carrosséis devem parecer **o mesmo sistema**.
- Sem saltos de layout, sem elementos surgindo em posição inesperada e sem loading agressivo. Use skeleton com a forma final, nunca spinner gigante.

### Dark mode
- Faz parte da identidade, não é extra. Toda tela e todo estado (hover, foco, ativo, desabilitado) precisa estar certo nos **dois temas**: botões, modais, menus, filtros, carrosséis, cards, separadores e fotos.

### Microinterações
- **Permitidas:** hover suave, pequeno zoom em imagem, sublinhado surgindo, opacidade, escala mínima, transição de cor, indicadores, troca suave de autores e entrada de conteúdo. Todas rápidas e com propósito.
- **Proibidas:** partículas, blobs, cursor exagerado, glassmorphism generalizado, gradiente animado contínuo, 3D pesado e animação decorativa sem propósito.

---

## 10. Qualidade não negociável

- **Responsividade (prioridade absoluta).**
  - Larguras: 320, 360, 390, 430, 768, 820, 1024, 1280, 1366, 1440 e 1920 px, mais as intermediárias.
  - Mobile não é "desktop encolhido": pode ter outra ordem e outro comportamento.
  - Sem rolagem horizontal, texto saindo da tela, header cobrindo conteúdo, botão pequeno, carrossel impossível de tocar ou imagem mal enquadrada.
- **Acessibilidade.**
  - Contraste AA nos dois temas (meça, não presuma) e navegação completa por teclado.
  - Foco visível (anel com token próprio), rótulos, `alt` nas imagens e botões de verdade (`<button>`).
  - `prefers-reduced-motion` com experiência excelente sem animação.
  - Nenhuma informação depende só de hover, cursor ou animação.
- **Performance.**
  - Só `transform` e `opacity` em animação; `IntersectionObserver`; lazy loading; `aspect-ratio`; `content-visibility` em listas longas.
  - Nenhum listener por elemento em listas grandes: use delegação.
  - Imagens no tamanho certo e nenhuma biblioteca pesada.
  - Medir com `npm run auditoria:tecnica`: o CLS precisa continuar abaixo de 0,1 (hoje 0,003–0,005) e os listeners estáveis ao navegar.
- **UX.** Não esconder funcionalidade para ficar bonito. A estética serve à usabilidade.

---

## 11. Sistema de design (tokens e organização do CSS)

**Tokens centralizados**, sem HEX nem valores soltos nos componentes:
- **Cor (semânticos):** `--bg`, `--surface`, `--surface-muted`, `--text`, `--text-secondary`, `--text-meta`, `--border`, `--accent`, `--accent-ink` (texto sobre o acento), `--accent-text` (acento usado como texto, versão AA), `--brand` (roxo), `--focus-ring`, `--overlay`.
  - Os nomes atuais (`--bg`, `--surface`, `--text`…) podem continuar, para reduzir a troca no código.
  - Os antigos (`--coral`, `--jade`, `--marigold`, `--plum`, `--paper-*`) devem ser **mapeados** para os novos ou retirados com cuidado: procure todos os usos, inclusive nos templates JS e em `STYLE_COLORS`.
- **Tipografia:** famílias, a escala fluida (§5), pesos, entrelinhas e espaçamento entre letras.
- **Espaço:** uma escala única (por exemplo 4, 8, 12, 16, 24, 32, 48, 64, 96, 128) e larguras de leitura (`--measure`).
- **Forma:** raios (poucos, discretos), bordas e elevação (pouquíssimas sombras).
- **Movimento:** durações, curvas e atrasos, todos zerados sob `prefers-reduced-motion`.
- **Breakpoints e camadas (z-index):** nomeados.

**Organização sugerida dos arquivos**, com carga em ordem pelo `index.html`, antes ou no lugar do atual:

```
assets/css/
  01-tokens.css        cores (claro/escuro), tipografia, espaço, forma, movimento
  02-base.css          reset, tipografia base, links, foco, acessibilidade
  03-componentes.css   botões, campos, cartão de frase, modal, header, nav, rodapé, galeria
  telas/home.css, explorar.css, autores.css, obra.css, descubra.css, historias.css,
        comunidade.css, perfil.css, escrever.css
```

Esses arquivos podem conviver com o `memotiva.css` antigo durante a transição. Cada etapa **migra uma tela** e remove do antigo o que ficou sem uso. No fim, o `memotiva.css` antigo some ou fica mínimo. Essa divisão também permite **agentes em paralelo sem conflito** (§13).

O bloco `memotiva-responsivo` injetado por JS (§2.3) deve ser **migrado para o CSS** e retirado do JS quando a tela correspondente for redesenhada. É mudança de código, não de conteúdo, e tem de passar no `estado:comparar`.

---

## 12. Plano de trabalho em etapas, com portões de aprovação

Cada etapa termina num **PORTÃO**: a IA apresenta o resultado (§14) e **espera** o "aprovado" do proprietário. Entre portões, trabalha sem pedir licença e sem relatórios intermediários.

| Etapa | O que fazer | O que mostrar no portão |
|---|---|---|
| **0. Diagnóstico** (branch `redesign/00-diagnostico`, só leitura) | Ler `CLAUDE.md`, `ARCHITECTURE.md`, `index.html`, o CSS e os templates; capturar **prints do site atual** (6 telas + Autores & Obras, Panorama, Obra, Escrever e modal) em 390 e 1440 px, claro e escuro; inventariar componentes, estilos inline, tokens em uso, ids e classes usados pelo JS e pelos testes; listar riscos. | Folha de contato com os prints atuais, inventário curto, riscos e as **decisões pendentes da §15**. **PORTÃO 0** |
| **1. Direção visual** | Montar **2 ou 3 direções** diferentes de verdade, com nome curto e uma frase de conceito cada. Cada uma traz: paleta (com tabela de contraste), par tipográfico (espécime com frases reais), **abertura da home** e **cartão/modal de frase**, em celular e desktop, nos dois temas, como protótipo HTML estático em `design/prototipos/` (fora do site) ou página de pré-visualização. Dizer quais princípios vieram de quais referências. | As direções lado a lado + recomendação da IA. **PORTÃO 1:** o proprietário escolhe ou mistura. |
| **2. Sistema de design** | Tokens (§11) e componentes base: botões, links, campos, chips/filtros, cartão de frase, modal, header, barra inferior, rodapé, estados vazio, erro e carregamento, componente de avaliação (só no guia). Página `design/guia.html`, que **não é linkada no site** e carrega os tokens reais. | O guia de estilo nos dois temas, em 390 e 1440. **PORTÃO 2** |
| **3. Header, navegação e rodapé** | Aplicar ao site real: header sticky que compacta e barra inferior no celular. | Prints antes e depois + vídeo curto ou sequência mostrando a compactação. **PORTÃO 3** |
| **4. Home** (a maior) | **4a.** Wireframe ou protótipo da narrativa A–I com dados reais. **PORTÃO 4a.** **4b.** Implementação no site real. | 4a: protótipo navegável. 4b: prints de todas as seções (celular, tablet e desktop, dois temas). **PORTÃO 4b** |
| **5. Frase: cartão, modal, Explorar, busca e filtros** | Cartão e modal editoriais; Explorar com filtros fluidos; busca. | Prints + fluxo (abrir, ampliar foto, fechar, filtrar, buscar). **PORTÃO 5** |
| **6. Autores & Obras, Panorama (autor) e Obra** | Galeria horizontal, página de autor com cronologia e obras, página de obra com frases ligadas. | Prints de 3 autores (com foto, sem foto, com muitas obras) e 2 obras. **PORTÃO 6** |
| **7. Descubra e Histórias** | Renovação automática com pausa; histórias com narração. | Sequência de prints ou vídeo da troca; prints com movimento reduzido. **PORTÃO 7** |
| **8. Comunidade, Perfil, Escrever, login, favoritos e estados vazios** | Compositor de relatos (mantendo os ids de cor e fonte), feed, perfil, modais de entrada. | Prints dos fluxos. **PORTÃO 8** |
| **9. Movimento, cursor e revisão final** | Camada única de movimento e cursor; QA completo (§14); acessibilidade e performance; revisão crítica (§10 + perguntas do Apêndice A, §30); retirada do CSS antigo sem uso. | Relatório final: o que mudou, a paleta escolhida, apoio e descartada com motivo, referências e princípios, resultados de teste. **PORTÃO FINAL:** merge na `main` só com "pode juntar". |

**Ao fim de cada etapa aprovada:** `npm run teste` passa, `npm run estado:comparar` dá IDÊNTICO e o commit está na branch. O merge na `main` acontece **só** quando o proprietário disser "pode juntar".

---

## 13. Divisão em agentes (subagentes do Claude Code)

Use subagentes para **ler, comparar e testar em paralelo**. A **escrita de código** fica com um agente por vez, ou com agentes em paralelo **só** quando cada um mexe em arquivos diferentes (por exemplo `telas/autores.css` × `telas/comunidade.css`), de preferência em worktrees separadas, juntando com cuidado.

| Agente | Quando | Função |
|---|---|---|
| **Explorador** (só leitura) | Etapa 0 | Inventário: ids e classes usados por JS e testes, estilos inline, tokens em uso, telas e componentes. Devolve listas, não opiniões. |
| **Diretor de arte** | Etapas 1 e 2 | Monta as direções, a paleta, a tipografia e o guia. É o "dono" da coerência visual. |
| **Implementador** | Etapas 3 a 8 | Aplica a direção aprovada uma tela por vez, sem mudar dados nem ids. |
| **Revisor visual (QA)** | Fim de cada etapa | Gera a folha de prints (larguras da §10 × 2 temas) com Playwright, procura rolagem horizontal, cortes, sobreposição, rosto mal enquadrado e texto quebrado. |
| **Revisor de acessibilidade e desempenho** | Fim das etapas 3–9 | Contraste medido, teclado, foco, movimento reduzido, CLS, listeners e peso de imagens (`npm run auditoria:tecnica`). |
| **Guardião do conteúdo** | Antes de cada commit | `npm run estado:comparar` (IDÊNTICO), `npm run teste`, e checa se nenhum texto editorial, número ou id gravado mudou. |
| **Crítico "isso parece IA?"** | Etapas 1, 4 e 9 | Olhar externo e duro com a lista de sinais da §4 e as perguntas finais do Apêndice A, §30. Aponta o que parece template. |

**Script recomendado para criar na Etapa 0:** `ferramentas/design/capturas.mjs`. Ele abre cada tela com `navigateTo('<tela>')` e, nas larguras e nos temas pedidos, salva os prints em `.trabalho/design/<etapa>/` e monta uma folha de contato. Esse script é a base dos portões e da QA.

---

## 14. Como apresentar ao proprietário

- **Imagens antes de palavras.** Prints em 390 e 1440 px (e 768 quando fizer diferença), nos temas claro e escuro, antes e depois lado a lado. Envie como arquivo ou como página de pré-visualização que ele abra no celular.
- **No máximo 3 opções por decisão**, cada uma com nome, uma frase de conceito e a **recomendação da IA com o motivo**.
- **Pergunta final clara:** "Aprova a direção B?", "Prefere A ou B para a galeria?".
- **Linguagem simples:** sem jargão; quando precisar de um termo técnico, explique em meia linha.
- **Resumo de etapa** em até 10 linhas: o que mudou, o que foi testado e o que ficou para depois.
- **Problemas de conteúdo** encontrados (texto estranho, foto da pessoa errada, dado quebrado) são **listados e não corrigidos**.

---

## 15. Decisões que dependem do proprietário (apresentar na Etapa 0)

1. **Posts semente da comunidade.** Os 3 relatos de usuários fictícios (`marina_sp`, `joao.forte`, `luztotal`) aparecem na comunidade e na home. Recomendação: **retirar as sementes**, porque é prova social fingida, e mostrar um estado vazio convidativo.
2. **Botão de compartilhar** existente nos relatos da comunidade: manter (recomendado, porque não é novo) ou retirar.
3. **Contadores da home** ("frases curadas", "temas", "autores e vozes"): mantê-los (são reais e calculados ao vivo) e decidir onde ficam na nova narrativa.
4. **Fontes:** aprovar a hospedagem das fontes do Fontshare no repositório, com licença ao lado.
5. **Navegação no celular:** manter a barra inferior (recomendado) ou trocar por outro padrão.
6. **Rede do ambiente:** liberar os domínios das referências e do Fontshare **ou** enviar prints delas.

---

## 16. Recomendação de chat e modelo para a produção

- **Onde:** **Claude Code** (web em claude.ai/code, app desktop ou terminal), ligado ao repositório. Não use um chat comum: o redesign precisa editar arquivos, rodar Playwright para tirar prints, rodar os testes e fazer commits.
- **Modelo:** **Claude Opus 5.5**, o mais capaz para julgar design e escrever código ao mesmo tempo.
- **Esforço (raciocínio):**
  - **alto (high)** como padrão;
  - **máximo** na **Etapa 1** (direção visual), na **Etapa 4a** (narrativa da home) e na **revisão final**, quando o julgamento de design pesa mais.
- **Modo:** comece em **modo de planejamento** (plan mode) para a Etapa 0. Assim a IA apresenta o plano antes de criar qualquer arquivo. Depois, modo normal.
- **Um chat por fase grande** (por exemplo, 0–2 num chat e a home em outro) para não lotar o contexto. Em cada chat novo, mande o link do repositório, este arquivo e em que etapa está ("Estamos na Etapa 4b; a direção B e o guia foram aprovados").

---

## Apêndice A: prompt original do proprietário (referência)

> Texto original do proprietário, mantido por inteiro como referência da visão. **Onde divergir do corpo acima, vale o corpo**; ver a §3. Em especial, a §31 abaixo ("não fique perguntando", "não faça mockup") foi **substituída** pelo trabalho em etapas com aprovação (§12).

```text
QUERO QUE VOCÊ FAÇA AGORA UM REDESIGN VISUAL COMPLETO DO MEMOTIVA.

IMPORTANTE:

Não quero um pequeno ajuste de CSS.
Não quero apenas trocar cores ou arredondar componentes.
Não quero apenas “deixar moderno”.

Quero uma reconstrução consciente da linguagem visual, da composição, da navegação e da experiência do site inteiro.

Mantenha as funcionalidades, dados, conteúdos e arquitetura existentes, mas transforme a apresentação do Memotiva para que ele pareça um produto digital real, maduro, sofisticado, editorial e cultural.

O resultado NÃO pode parecer:

- uma landing page genérica
- um template de SaaS
- um site de startup
- um dashboard
- um portfólio de agência
- um template pronto de Framer
- um projeto escolar
- um site claramente gerado por IA
- uma sequência de cards genéricos

O Memotiva deve parecer uma plataforma cultural e editorial que poderia existir profissionalmente por muitos anos.

==================================================
1. PRIMEIRO: ENTENDA O PROJETO
==================================================

Antes de alterar qualquer coisa:

1. Leia todos os arquivos relevantes do projeto.
2. Entenda a estrutura atual.
3. Identifique como as páginas, componentes, dados, imagens, filtros, modais, temas e funcionalidades estão conectados.
4. Identifique quais elementos podem ser refatorados sem comprometer o funcionamento.
5. Preserve o conteúdo e a lógica existente.

NÃO comece simplesmente substituindo estilos.

Primeiro entenda o sistema.

Depois faça o redesign diretamente no código.

==================================================
2. REFERÊNCIAS VISUAIS
==================================================

Analise estas referências:

https://jitter.video/
https://brik.space/
https://godly.design/
https://www.fontshare.com/
https://inspotype.com/playground?projectId=78
https://www.originkit.dev/
https://styles.refero.design/
https://www.cult-ui.com/

Também procure referências modernas de:

- sites editoriais
- revistas digitais
- literatura
- cultura
- fotografia
- bibliotecas digitais
- portais de conteúdo
- experiências de leitura contemporâneas

Use as referências para estudar:

- composição
- tipografia
- espaçamento
- grids
- proporção
- imagens
- hierarquia
- ritmo visual
- navegação
- comportamento durante o scroll
- galerias
- carrosséis
- microinterações
- movimento
- interação com cursor
- transições
- apresentação de conteúdo

NÃO copie nenhum site.

NÃO reproduza layouts específicos.

NÃO transforme o Memotiva em uma mistura visual dessas referências.

Use apenas os princípios de design.

A identidade final precisa ser própria do Memotiva.

==================================================
3. NOVA PERSONALIDADE DO MEMOTIVA
==================================================

O Memotiva deve transmitir:

- literatura
- cultura
- conhecimento
- descoberta
- profundidade
- humanidade
- sofisticação
- contemporaneidade
- calma
- curiosidade

Quero a sensação de:

“uma biblioteca viva de frases, autores e ideias”

e não:

“um site de frases”.

O usuário deve sentir que está entrando em um espaço para permanecer, explorar e descobrir.

O site deve ter personalidade.

Cada seção precisa parecer intencionalmente desenhada.

==================================================
4. ELIMINAR CARACTERÍSTICAS VISUAIS DE IA
==================================================

Faça uma revisão completa procurando características que entreguem aparência de site gerado automaticamente.

REMOVER OU REDUZIR:

- travessões artificiais em textos
- excesso de frases separadas por “—”
- blocos de texto genéricos
- excesso de cards iguais
- estruturas repetidas
- excesso de bordas arredondadas
- excesso de sombras
- excesso de gradientes
- excesso de glassmorphism
- botões genéricos de SaaS
- excesso de CTAs
- ícones desnecessários
- elementos flutuantes sem propósito
- efeitos visuais que parecem demonstração técnica
- espaçamento artificial
- layouts previsíveis
- excesso de “pill components”
- excesso de textos explicativos onde uma boa composição visual seria suficiente

Não faça apenas uma substituição automática dos travessões.

Revise os textos visualmente e linguisticamente quando necessário.

O resultado deve parecer produzido por uma equipe de design e produto, não por um gerador automático de interfaces.

==================================================
5. MATURIDADE VISUAL
==================================================

Quero um design MADURO.

Isso significa:

menos elementos,
melhor hierarquia,
mais espaço,
melhor tipografia,
melhor composição,
mais consistência,
mais intenção.

Não tente preencher todos os espaços.

Espaço vazio também é parte do design.

Não transformar modernidade em exagero visual.

A sofisticação deve vir principalmente de:

- tipografia
- composição
- fotografia
- ritmo
- espaçamento
- contraste
- proporção
- microinterações

e não da quantidade de efeitos.

==================================================
6. HOME: RECONSTRUIR COMPLETAMENTE
==================================================

A Home precisa deixar de parecer curta ou incompleta.

Quero uma Home consideravelmente mais extensa.

Mas atenção:

Não simplesmente adicionar mais blocos.

Quero uma narrativa de navegação.

A Home deve funcionar como uma experiência editorial digital.

O usuário deve ir descobrindo o Memotiva ao longo do scroll.

Aproximadamente:

--------------------------------------------------
A. ABERTURA
--------------------------------------------------

Criar uma abertura marcante.

NÃO utilizar o padrão:

Título
Subtítulo
Botão
Imagem ao lado

Quero uma composição editorial.

Pode combinar:

- frase
- grande tipografia
- fotografia de autor
- nome
- pequenos elementos de navegação
- espaço vazio
- composição assimétrica

A abertura deve parecer uma capa contemporânea.

--------------------------------------------------
B. FRASE EM DESTAQUE
--------------------------------------------------

Criar uma apresentação visualmente forte para uma frase.

A frase é o protagonista.

Não colocar necessariamente dentro de um card.

Permitir que:

- o tamanho do texto seja grande
- o espaço ao redor seja amplo
- o autor tenha presença
- a fotografia funcione como parte da composição

--------------------------------------------------
C. EXPLORAR
--------------------------------------------------

Criar uma seção convidativa para exploração.

Pode utilizar:

- grid editorial
- composição assimétrica
- grandes títulos
- agrupamentos de conteúdo
- números
- pequenas categorias
- imagens

Evitar aparência de catálogo.

--------------------------------------------------
D. AUTORES
--------------------------------------------------

Criar uma apresentação visual sofisticada dos autores.

Os autores são parte importante da identidade do Memotiva.

Utilizar, quando apropriado:

- trilho horizontal
- carrossel
- galeria
- fotografias grandes
- tamanhos diferentes
- sobreposição
- composição assimétrica

Não transformar todos os autores em pequenas miniaturas iguais.

Quero uma sensação de coleção editorial.

--------------------------------------------------
E. DESCUBRA
--------------------------------------------------

Essa deve ser uma das partes mais interessantes da Home.

Criar uma experiência dinâmica de descoberta.

Enquanto o usuário permanece nessa seção, o conteúdo pode se renovar lentamente.

Por exemplo:

Autor A
fotografia
nome
pequena biografia
frase/contexto

depois de alguns segundos:

Autor B

depois:

Autor C

A troca deve ser:

- lenta
- natural
- elegante
- previsível o suficiente para ser confortável
- imprevisível o suficiente para gerar descoberta

A transição pode ocorrer por:

- crossfade
- troca de posição
- entrada de imagem
- deslocamento pequeno
- mudança de composição

Mas sem exagero.

Ao interagir, o usuário deve poder assumir o controle.

--------------------------------------------------
F. HISTÓRIAS / BIOGRAFIAS
--------------------------------------------------

Transformar essa área em uma experiência editorial.

NÃO usar apenas:

foto
nome
descrição
botão

Experimentar composições como:

imagem grande + nome enorme + pequeno texto

ou:

fotografia ocupando grande parte da tela + texto revelado conforme o scroll

ou:

autor atual + próximo autor surgindo progressivamente

As biografias precisam parecer uma coleção cultural.

O componente deve permitir que novas biografias sejam adicionadas no futuro sem destruir a composição.

Não criar dados fictícios.

--------------------------------------------------
G. AVALIAÇÕES
--------------------------------------------------

Criar espaço visual preparado para avaliações reais.

NÃO INVENTAR NADA.

Não utilizar:

“4.9 estrelas”
“milhares de usuários”
“10.000 pessoas”
“melhor site”
ou qualquer outra informação não existente.

A infraestrutura visual deve estar preparada para futuramente apresentar:

- nome
- avaliação
- comentário
- data
- avatar/foto quando disponível

Hoje, se não houver avaliações reais, o espaço deve ser discreto.

Não fingir prova social.

--------------------------------------------------
H. COMUNIDADE
--------------------------------------------------

A comunidade deve parecer parte natural do ecossistema do Memotiva.

Não criar um enorme botão:

“ENTRE NA COMUNIDADE”

Evitar linguagem agressiva de conversão.

Integrar comunidade à experiência editorial.

--------------------------------------------------
I. FINAL DA HOME
--------------------------------------------------

Criar um encerramento forte e diferente do hero.

Pode combinar:

- frase
- autor
- imagem
- navegação
- descoberta
- acesso a outras áreas

Não repetir a mesma estrutura da abertura.

==================================================
7. HEADER FIXO
==================================================

O usuário deve conseguir navegar pelo site sem precisar voltar ao topo.

O header deve permanecer acessível durante o scroll.

Usar:

sticky/fixed header

Mas com extremo cuidado.

O header NÃO pode dominar a tela.

No início da página:

mais aberto e integrado.

Durante o scroll:

mais compacto.

A transformação deve ser discreta.

Não fazer animação chamativa.

No mobile:

- compacto
- acessível
- não bloquear conteúdo
- área de toque adequada
- menu eficiente
- fechamento correto
- sem ocupar metade da tela

==================================================
8. SCROLL: O SITE DEVE “RESPONDER” AO USUÁRIO
==================================================

Quero que o conteúdo apareça conforme o usuário chega a cada parte.

Usar moderadamente:

- fade
- reveal
- clipping
- pequeno deslocamento
- mudança de opacidade
- entrada de imagens
- transformação de texto
- mudança de escala muito discreta

A sensação precisa ser:

“o conteúdo está sendo descoberto”

e não:

“o site está executando uma apresentação”.

NÃO utilizar:

- scroll hijacking
- parallax extremo
- zoom exagerado
- textos girando
- elementos voando
- animações longas
- transições lentas demais
- efeitos que atrapalhem leitura

==================================================
9. INTERAÇÃO COM O CURSOR
==================================================

ADICIONE UMA CAMADA DE INTERAÇÃO SUTIL COM O CURSOR NO DESKTOP.

O site deve responder ao mouse de maneira sofisticada.

NÃO criar um cursor customizado chamativo.

NÃO criar efeitos de videogame.

A interação pode ocorrer em determinados componentes.

Exemplos:

- imagens reagindo levemente ao movimento do cursor
- fotografias com deslocamento sutil
- elementos editoriais acompanhando minimamente o cursor
- pequenos efeitos de profundidade
- cards reagindo ao posicionamento
- textos ou detalhes revelando informações
- mudança muito discreta de escala
- máscara ou clipping suave em áreas específicas
- indicação visual de elementos interativos
- pequenos movimentos de background vinculados ao cursor

IMPORTANTE:

O efeito deve ser quase imperceptível até que o usuário interaja.

A pessoa deve sentir que o site responde ao movimento.

Ela não deve perceber um “efeito de cursor”.

No mobile, essas interações devem ser substituídas por comportamentos apropriados ao touch.

Nunca depender do mouse para acessar uma informação.

==================================================
10. FUNCIONALIDADES DEVEM PARECER FLUIDAS
==================================================

Não basta redesenhar a aparência.

Todos os fluxos existentes precisam parecer parte do mesmo sistema.

Revisar a fluidez de:

- navegação
- busca
- filtros
- exploração
- troca de frases
- seleção de autores
- biografias
- Descubra
- Histórias
- comunidade
- perfil
- modais
- tema
- carrosséis

Evitar mudanças bruscas de layout.

Evitar telas “saltando”.

Evitar elementos aparecendo em posições inesperadas.

Evitar loading visualmente agressivo.

Quando houver transição entre estados, fazê-la de maneira rápida e suave.

==================================================
11. FRASES E MODAIS
==================================================

Manter a funcionalidade atual de abrir a frase em tamanho ampliado.

Porém, redesenhar visualmente o modal.

O modal precisa parecer editorial.

A frase deve respirar.

O texto deve ter excelente hierarquia.

O autor deve ter presença.

A fotografia deve ser integrada ao design.

O botão X deve permanecer claramente acessível.

A fotografia do autor deve continuar podendo ser aberta separadamente em visualização maior.

Não adicionar compartilhamento social.

==================================================
12. FOTOGRAFIAS
==================================================

As fotografias dos autores são parte central da identidade.

Não tratá-las como thumbnails genéricas.

Usar fotografias em diferentes escalas.

Pode haver:

- retratos grandes
- imagens verticais
- quadradas
- horizontais
- imagens ocupando grandes áreas
- fotografias integradas ao fundo

Mas NUNCA cortar rostos de forma ruim.

Revisar:

- object-fit
- object-position
- aspect-ratio
- focal point

Quando necessário, adaptar o container à fotografia.

O rosto e a expressão do autor precisam ser respeitados.

==================================================
13. PASSADA DE AUTORES / GALERIA HORIZONTAL
==================================================

Criar uma experiência de passagem de autores.

Deve funcionar como galeria editorial.

No desktop:

- arrastar com mouse
- hover
- movimento horizontal suave
- autoplay opcional
- pausa durante interação

No mobile:

- touch drag natural
- snapping quando apropriado
- áreas de toque confortáveis

Evitar sensação de carrossel de loja virtual.

A passagem deve parecer uma galeria.

Não deixar o looping visualmente quebrado.

==================================================
14. BIOGRAFIAS EM RENOVAÇÃO
==================================================

Criar uma lógica visual para que determinadas áreas de biografia possam se renovar automaticamente.

Usar SOMENTE os dados reais existentes.

Exemplo:

Autor
↓
foto
↓
nome
↓
pequena descrição
↓
frase/contexto

Depois de alguns segundos:

novo autor

A troca precisa ser elegante.

Evitar alterar o conteúdo enquanto o usuário estiver lendo ativamente.

Ao detectar interação:

- pausar
- permitir controle manual
- evitar troca automática desconfortável

==================================================
15. RITMO VISUAL
==================================================

Não estruturar todas as seções da mesma maneira.

Alternar:

- tipografia grande
- fotografia
- espaço vazio
- grid
- composição assimétrica
- frase isolada
- galeria
- autores
- biografia
- descoberta
- conteúdo editorial

Uma seção deve ter personalidade própria.

Mas todas precisam pertencer ao mesmo sistema.

==================================================
16. TIPOGRAFIA
==================================================

Pesquisar fontes contemporâneas em:

https://www.fontshare.com/

Considerar seriamente uma combinação:

serif editorial + sans moderna

ou outra combinação que transmita literatura e cultura sem parecer antiga.

Não escolher fontes apenas por popularidade.

Definir uma hierarquia consistente para:

- display
- títulos
- subtítulos
- corpo
- metadados
- navegação

Evitar dezenas de tamanhos.

Quero contraste tipográfico significativo.

Os títulos podem ser grandes.

O corpo precisa continuar extremamente legível.

A tipografia deve dizer:

literatura
cultura
sofisticação
modernidade

e não:

startup.

==================================================
17. IDENTIDADE CROMÁTICA

Existe uma paleta de referência inicial para orientar a direção artística do Memotiva. Ela foi ampliada com novas cores extraídas das referências visuais fornecidas. Você deve analisar os tons em conjunto e decidir, com critério de design, qual combinação funciona melhor para a identidade final.

PALETA ORIGINAL DO MEMOTIVA

LIGHT PARCHMENT
#FFF4D6

LIGHT GOLD
#F1E59B

MUTED OCHRE
#E5D17A

DARK ESPRESSO
#2B1811

DEEP PURPLE
#401D47

BURNT ORANGE
#E06F2D

NOVAS CORES DAS REFERÊNCIAS VISUAIS

SUSTAINABLE LINEN
#FAF3E1

RECYCLED COTTON
#F5E7C6

ELECTRIC TANGERINE
#FF6D1F

BLACK HOLE
#222222

IVORY
#F5E6C5

APRICOT
#D78B30

NATURAL
#9F886F

ORGANIC
#3F422E

IMPORTANTE: TODOS OS CÓDIGOS HEX ACIMA DEVEM SER CONSIDERADOS DURANTE A ANÁLISE. Não omita cores da avaliação, mas também não tente utilizar todas simultaneamente só porque foram fornecidas.

Antes de implementar a paleta:

1. Compare visualmente as cores originais e as novas.
2. Identifique tons redundantes ou muito próximos, especialmente os tons claros de papel, linho e marfim.
3. Avalie como as cores se comportam em conjunto, considerando temperatura, saturação, luminosidade, contraste e hierarquia.
4. Escolha uma combinação principal coerente com literatura, cultura, conhecimento, fotografia e descoberta.
5. Decida quais cores devem atuar como fundos principais, superfícies secundárias, texto, acentos e estados interativos.
6. Verifique se Electric Tangerine (#FF6D1F) é intenso demais para uso amplo. Considere-o como acento pontual se essa for a solução mais sofisticada.
7. Avalie o uso de Black Hole (#222222) como alternativa ao preto puro e de Organic (#3F422E) e Natural (#9F886F) como tons de apoio, sem forçar sua presença em todas as seções.
8. Compare Sustainable Linen (#FAF3E1), Recycled Cotton (#F5E7C6), Ivory (#F5E6C5) e Light Parchment (#FFF4D6). Escolha os tons claros com melhor diferenciação e legibilidade em vez de acumular superfícies quase iguais sem função.
9. Avalie Apricot (#D78B30), Muted Ochre (#E5D17A), Light Gold (#F1E59B) e Burnt Orange (#E06F2D) para definir se algum deve ser removido da paleta ativa, reservado a usos específicos ou substituído por uma variação mais equilibrada.
10. Teste o contraste entre texto e fundo em todos os pares relevantes, tanto no light mode quanto no dark mode.
11. Registre a decisão final em tokens CSS centralizados e sem cores duplicadas ou valores arbitrários espalhados pelo projeto.

As imagens fornecidas são referências de paletas, não uma ordem para reproduzir literalmente os layouts ou os nomes comerciais apresentados nelas. A escolha final deve ser própria do Memotiva.

Essas cores NÃO são uma regra absoluta. Você pode ajustar tonalidade, saturação, luminosidade e transparência ou propor variações derivadas quando isso melhorar a sofisticação, a acessibilidade e a coerência. Entretanto, preserve todos os HEX fornecidos durante a etapa de comparação e explique no resumo final quais foram escolhidos, quais ficaram como apoio e quais foram descartados da paleta ativa.

A paleta deve ter hierarquia. Não use todos os acentos com a mesma intensidade.

LIGHT MODE:
Pode trabalhar principalmente com:
- tons de linho, papel, marfim e off-white selecionados criteriosamente
- espresso ou carvão para texto
- tons quentes controlados
- dourado/ocre ou apricot em usos específicos
- roxo profundo, caso contribua para a identidade
- verde orgânico, caso funcione como contraponto discreto

DARK MODE:
Pode trabalhar principalmente com:
- espresso, carvão e marrons profundos
- tons claros de papel para texto
- terracota ou tangerina em acentos controlados
- roxo profundo
- pequenos toques de ouro ou tons orgânicos

NÃO simplesmente inverter o light mode para criar o dark mode. Os dois temas precisam parecer irmãos, mas cada um deve ter contraste, profundidade e hierarquia próprios.

Não transformar o site em:
- vintage
- retrô
- infantil
- excessivamente amarelo
- excessivamente colorido
- uma interface escura com laranja neon em todos os elementos

A estética deve ser contemporânea. A cor deve ser usada com intenção. Muitas seções podem trabalhar somente com um fundo, uma cor principal e um pequeno acento.

Crie ou organize tokens de design / CSS variables para centralizar toda a identidade cromática. Prefira tokens semânticos, por exemplo:
- background
- foreground
- surface
- surface-muted
- text-primary
- text-secondary
- border
- accent
- accent-foreground
- focus-ring

Não espalhe HEX diretamente por componentes quando um token semântico puder ser usado. Verifique o contraste real dos pares escolhidos e não presuma que uma cor clara ou escura é automaticamente acessível.

==================================================
REFERÊNCIAS VISUAIS: COMO USÁ-LAS
==================================================

Além das referências já listadas, analise obrigatoriamente:

https://styles.refero.design/
https://www.cult-ui.com/

Refero:
- Pesquise referências reais relevantes para uma plataforma cultural e editorial.
- Observe sistemas de cores, tipografia, hierarquia, espaçamento, composição, navegação e comportamento responsivo.
- Quando disponível, consulte os detalhes do sistema visual e os arquivos de design que ajudem a entender as decisões, em vez de se limitar a capturas de tela.
- Não escolha referências apenas porque estão em alta. Priorize as que dialogam com literatura, cultura, leitura e fotografia.

Cult UI:
- Explore componentes, padrões de interação e microinterações que possam inspirar partes específicas do projeto.
- Avalie cada padrão antes de adotá-lo. Não instale componentes, dependências ou bibliotecas indiscriminadamente.
- Não introduza React, Tailwind, shadcn/ui ou qualquer outra tecnologia apenas para usar uma referência. Respeite a arquitetura e a stack reais do Memotiva.
- Se uma ideia depender de uma tecnologia incompatível com o projeto, reproduza o princípio visual com a tecnologia já existente, desde que isso seja seguro e sustentável.
- Evite componentes chamativos, animações exageradas ou padrões com aparência de dashboard/SaaS que contrariem a identidade editorial.

Para as duas referências:
- Extraia princípios, não copie interfaces.
- Não reproduza layouts, componentes ou identidade de uma marca de forma literal.
- Não adicione dependências sem justificar o benefício, o custo de manutenção, o impacto na performance e a compatibilidade com o projeto.
- Use as referências para elevar a qualidade das decisões, não para substituir o julgamento de design.

Ao final, documente brevemente as referências consultadas e os princípios aproveitados. Não interrompa a implementação para apresentar um relatório de progresso; faça essa síntese somente na entrega final.

==================================================

18. DARK MODE
==================================================

O dark mode é parte da identidade, não um extra.

Revisar todas as telas no dark mode.

Garantir:

- contraste
- legibilidade
- fotografias bem integradas
- estados de hover
- botões
- modais
- menus
- filtros
- carrosséis
- cards
- textos
- separadores

Nenhum componente deve parecer “quebrado” apenas porque o tema mudou.

==================================================
19. MICROINTERAÇÕES
==================================================

Adicionar microinterações apenas quando melhorarem a experiência.

Exemplos:

- hover suave
- pequeno zoom em imagem
- sublinhado aparecendo
- mudança discreta de opacidade
- mudança mínima de escala
- transição de cor
- resposta ao cursor
- indicadores
- troca suave de autores
- entrada de conteúdo

Todas devem ser rápidas e intencionais.

Evitar:

- partículas
- blobs animados
- cursores exagerados
- glassmorphism generalizado
- gradientes animados continuamente
- efeitos 3D pesados
- animações decorativas sem propósito

==================================================
20. RESPONSIVIDADE
==================================================

PRIORIDADE ABSOLUTA.

O site precisa funcionar de maneira excelente em:

320px
360px
390px
430px
768px
820px
1024px
1280px
1366px
1440px
1920px

E também em larguras intermediárias que não estejam explicitamente listadas.

NÃO fazer:

desktop → diminuir tudo → mobile.

Criar composição verdadeiramente responsiva.

Mobile pode possuir layout, ordem ou comportamento diferente quando necessário.

Revisar:

- tipografia
- imagens
- grids
- carrosséis
- header
- menus
- modais
- botões
- espaçamento
- áreas de toque
- conteúdo dinâmico
- largura do texto
- quebra de linhas

Não permitir:

- overflow horizontal
- elementos cortados
- textos saindo da tela
- header cobrindo conteúdo
- botões pequenos demais
- carrossel impossível de tocar
- imagens mal enquadradas

==================================================
21. PERFORMANCE
==================================================

Não sacrificar performance para criar estética.

O projeto possui:

- imagens
- conteúdo dinâmico
- carrosséis
- animações
- scroll reveal
- interações

Use técnicas apropriadas:

- CSS transforms
- opacity
- IntersectionObserver
- lazy loading
- responsive images
- aspect-ratio
- content-visibility quando apropriado
- carregamento progressivo

Evitar:

- listeners excessivos
- animação causando layout recalculation
- scripts desnecessários
- imagens gigantes
- efeitos custosos em cada elemento

O scroll deve permanecer fluido.

As interações do cursor devem ser leves.

==================================================
22. ACESSIBILIDADE
==================================================

Preservar:

- contraste adequado
- navegação por teclado
- foco visível
- labels corretos
- alt nas imagens
- botões acessíveis
- estados de foco
- prefers-reduced-motion

Quando o usuário utilizar reduced motion, a experiência continua excelente.

Informações importantes nunca podem depender exclusivamente de:

- hover
- cursor
- animação

==================================================
23. CONTEÚDO E INTEGRIDADE EDITORIAL
==================================================

NÃO apagar conteúdo existente.

NÃO inventar:

- frases
- autores
- biografias
- fontes
- avaliações
- estatísticas
- números de usuários

NÃO alterar informações editoriais simplesmente para combinar com o novo design.

O conteúdo atual deve ser tratado como patrimônio do projeto.

O trabalho é:

visual
estrutural
interativo
responsivo
experiencial

e não uma reforma arbitrária da base editorial.

==================================================
24. FUNCIONALIDADES EXISTENTES
==================================================

Preservar todas as funcionalidades atuais.

Não quebrar:

- Explorar
- busca
- filtros
- frases
- autores
- Descubra
- Histórias
- biografias
- comunidade
- perfil
- modais
- tema
- qualquer fluxo existente

Se precisar refatorar componentes, faça isso de maneira segura.

Após cada alteração estrutural importante, verifique se a funcionalidade continua funcionando.

==================================================
25. UX
==================================================

Não esconder funcionalidades para deixar a interface mais “bonita”.

A estética precisa servir à usabilidade.

O usuário deve entender:

- onde está
- o que pode fazer
- o que é clicável
- como voltar
- como explorar
- como fechar
- como navegar

Tudo deve parecer natural.

==================================================
26. NÃO CRIAR UMA EXPERIÊNCIA EXAGERADA
==================================================

Quero movimento.

Quero vida.

Quero interação.

Mas quero CONTROLE.

O usuário deve sentir:

“o site está vivo”

e não:

“o site está tentando me impressionar”.

A experiência precisa funcionar perfeitamente mesmo sem animações.

==================================================
27. SISTEMA DE DESIGN
==================================================

Crie ou organize tokens reutilizáveis para:

- cores
- tipografia
- espaçamentos
- tamanhos
- bordas
- sombras
- transições
- breakpoints
- elevação
- componentes

Evitar valores aleatórios espalhados pelo projeto.

O design deve ser consistente e fácil de manter.

==================================================
28. FOOTER E ÁREAS SECUNDÁRIAS
==================================================

Não deixar o footer com aparência de elemento padrão colocado no final.

Ele deve pertencer à identidade.

Revisar também:

- menus
- estados vazios
- loading
- filtros
- páginas internas
- modais
- seções secundárias

O redesign precisa ser GLOBAL.

Não adianta ter uma Home linda e páginas internas com aparência antiga.

==================================================
29. TESTES FINAIS OBRIGATÓRIOS
==================================================

NÃO considere o trabalho concluído quando o código apenas “parecer certo”.

Depois de implementar, faça uma revisão completa.

TESTE:

Desktop:
- 1024
- 1280
- 1366
- 1440
- 1920

Tablet:
- 768
- 820
- 1024

Mobile:
- 320
- 360
- 390
- 430

Teste também larguras intermediárias.

--------------------------------------------------
VERIFICAR VISUALMENTE
--------------------------------------------------

- header
- home
- hero
- frases
- autores
- Descubra
- Histórias
- biografias
- comunidade
- filtros
- busca
- modal
- footer
- dark mode
- light mode

--------------------------------------------------
VERIFICAR FUNCIONALMENTE
--------------------------------------------------

- clique em frases
- abertura de modais
- fechamento de modais
- ampliação de fotografias
- navegação
- filtros
- busca
- carrosséis
- drag com mouse
- touch
- menu mobile
- troca de tema
- links
- estados de hover
- estados de foco

--------------------------------------------------
VERIFICAR PERFORMANCE
--------------------------------------------------

- carregamento inicial
- carregamento de imagens
- lazy loading
- scroll
- animações
- interação com cursor
- troca automática de autores
- comportamento em máquinas mais fracas
- ausência de travamentos
- ausência de layout shift excessivo

--------------------------------------------------
VERIFICAR RESPONSIVIDADE
--------------------------------------------------

Procurar:

- overflow horizontal
- elementos cortados
- texto quebrando de maneira ruim
- imagens mal enquadradas
- componentes saindo da viewport
- header cobrindo conteúdo
- elementos sobrepostos
- botões inacessíveis
- grids quebrados
- carrosséis quebrados

Corrigir tudo que encontrar.

==================================================
30. REVISÃO FINAL DE QUALIDADE
==================================================

Depois dos testes, faça uma segunda revisão visual com olhar crítico.

Pergunte internamente:

“O site realmente parece uma plataforma editorial profissional?”

“O design parece humano e intencional?”

“Existe algum detalhe que parece gerado por IA?”

“Existe alguma seção com aparência de template?”

“Alguma animação está exagerada?”

“A paleta está sofisticada ou colorida demais?”

“O light mode e dark mode parecem pertencer à mesma marca?”

“O cursor interage sem parecer um efeito artificial?”

“As funcionalidades parecem fluidas?”

“O celular está tão bem cuidado quanto o desktop?”

“A Home parece completa?”

“Existe ritmo entre as seções?”

“Estou usando espaço vazio de maneira intencional?”

Faça as correções necessárias antes de considerar o trabalho concluído.

==================================================
31. INSTRUÇÕES DE EXECUÇÃO
==================================================

NÃO entregue apenas sugestões.

NÃO entregue apenas análise.

NÃO faça um mockup separado.

FAÇA AS ALTERAÇÕES REAIS NO CÓDIGO.

Leia.
Planeje.
Implemente.
Teste.
Corrija.
Revise.
Finalize.

Não fique me perguntando se deve continuar.

Não pare depois da análise.

Não envie relatórios de progresso durante a execução.

Continue até concluir o redesign.

Quando terminar, entregue o projeto já atualizado.

O resultado final precisa parecer:

editorial
literário
cultural
humano
moderno
maduro
fluido
interativo
sofisticado
responsivo
rápido

e, principalmente:

NÃO parecer feito por IA.
```
