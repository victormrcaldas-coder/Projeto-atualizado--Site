# Prompt para o chat da Etapa 4 (home)

Copie o texto abaixo num chat novo do Claude Code, ligado ao repositório `victormrcaldas-coder/Projeto-atualizado--Site`, e anexe o arquivo `BRIEFING-REDESIGN.md`. Configure o modelo Claude Opus 5.5 com raciocínio **máximo** para a Etapa 4a. Depois do Portão 4a, o raciocínio **alto** basta para a 4b.

---

Fale comigo em português. Estamos no redesign do MeMotiva, na **Etapa 4 (home)**. As etapas 0 a 3 já foram aprovadas.

**1. Leia antes de qualquer coisa, nesta ordem:**
1. o `BRIEFING-REDESIGN.md` anexo, inteiro (a home está na §7, narrativa A a I);
2. `CLAUDE.md`;
3. `ARCHITECTURE.md`;
4. `design/DECISOES.md`, onde está tudo o que eu decidi até aqui;
5. `design/guia.html`, o sistema de design aprovado;
6. `design/prototipos/layout.html`, o layout aprovado no Portão 3: abertura, cartões, frase ampliada, faixas e rodapé.

**2. Branch.** Crie `redesign/04-home` a partir de `redesign/03-navegacao` e rode `npm run estado:base` antes de mudar qualquer coisa. Não toque nas branches `backup/*` nem em tags. Nada vai para a `main` sem o meu "pode juntar".

**3. O que já está aprovado e não deve mudar:**
- **Direção.** A Galeria (retrato grande, nome em Noto Serif Display condensada, frase em itálico, etiqueta Obra / Autor / Original), com toques da Florada no tema claro: o arco laranja atrás do retrato da abertura e a faixa roxa da fonte embaixo. No escuro, a "sala escura", sem laranja grande.
- **Cores.** Fundo de linho `#FAF3E1`, sem painéis dourados. Tinta café `#2B1811`. Roxo `#401D47` no botão principal, na faixa da fonte e no rodapé. Faixas em café (`.faixa-cafe`) e em ocre `#E5D17A` (`.faixa-ocre`). Oliva `#3F422E` nos acentos de texto. Apricot `#D78B30` só como ponto. Use os tokens de `assets/css/01-tokens.css` e nunca hex solto.
- **Fontes, uma por papel:**
  - Noto Serif Display: todas as frases, sempre em itálico e no mesmo estilo; nomes e títulos;
  - Hanken Grotesk: a interface;
  - Literata: leitura longa;
  - Caveat: só a opção "Manuscrita".
  
  Toda frase do acervo tem a mesma fonte, o mesmo estilo e a mesma cor em qualquer lugar. Só o tamanho muda, por contexto (`--quote-*`, com `data-comprimento="longa"` acima de 140 caracteres).
- **Navegação.** Cabeçalho, menu, rodapé e a barra inferior de 5 itens (Início, Explorar, Autores, Escrever, Mais) já estão no site, em `assets/css/telas/navegacao.css`.
- **Sem exageros.** Nada mirabolante. Movimento e transições ficam para a Etapa 9.

**4. Decisões do Portão 0 que entram na home:**
- **Decisão 1.** Tirar os 3 relatos inventados da seção de comunidade da home e pôr um convite discreto para escrever. O layout aprovado já tem o convite numa `.faixa-cafe`.
- **Decisão 3.** Os contadores ficam na seção Explorar, fora da abertura, com o número exato. Nada de "2412+".
- **Defeitos pequenos que aparecem na home:**
  - a pílula vazia;
  - palavras partidas a 390 px;
  - as iniciais "MD" do Machado (`initials()` conta o "de");
  - os contadores.

**5. Etapa 4a: protótipo da home. Termina no PORTÃO 4a.**
- Monte `design/prototipos/home.html` com a narrativa A a I do briefing (§7), com dados reais do acervo (via `design/prototipos/amostra.js` e `ferramentas/design/amostra.mjs`; se precisar de mais frases, gere de novo com `NODE_USE_ENV_PROXY=1`). Use o CSS real do sistema (`assets/css/00` a `03` e `telas/navegacao.css`) e os modelos de `design/prototipos/sistema.js` e `comum.js`.
- Pode explorar a cor em áreas maiores, com equilíbrio: faixas em café, ocre e roxo, e o arco laranja. Sem alternar fontes por frase.
- **Prints:**
  - gere a versão autocontida com `python3 ferramentas/design/pagina-autocontida.py design/prototipos/home.html .trabalho/design/04-home/pagina`;
  - tire os prints com `node ferramentas/design/capturas-prototipos.mjs --etapa 04-home --arquivo .trabalho/design/04-home/pagina/home.html --secoes … --inteira`, a 390 e a 1440 px, nos dois temas;
  - o objetivo é zero rolagem lateral, Esc e foco funcionando, e zero falhas de contraste AA.
- **Fotos.** Se a pasta de fotos locais (`.trabalho/design/01-direcao/pagina/fotos`) não existir no chat novo, baixe as fotos do Commons respeitando o limite de pedidos. Se o Wikimedia bloquear, use as iniciais e me avise.
- **Crítico.** Use um subagente "Crítico" (§13 do briefing) para revisar os prints contra os sinais de "feito por IA" (§4) e faça uma rodada de ajustes.
- **No portão:**
  - um Artifact privado com o protótipo navegável e os prints, incluindo a comparação com a abertura aprovada no Portão 3;
  - 3 ou 4 imagens no chat;
  - um resumo de até 10 linhas;
  - no máximo 3 opções, com a sua recomendação;
  - uma pergunta clara.
  
  **Espere o meu "aprovado".**

**6. Etapa 4b: a home no site real. Termina no PORTÃO 4b.**
- Leve o protótipo aprovado para o site: a seção `#view-home` do `index.html`, os templates da home em `assets/js/app/`, um CSS novo em `assets/css/telas/home.css` carregado depois de `04-ponte.css`, e a limpeza do que ficar sem uso.
- Antes de renomear um id ou classe, procure por ele em `assets/js` e prefira mudar o estilo à marcação. A ordem dos scripts não muda, e `app/99-iniciar.js` continua o último (`node ferramentas/codigo/analise-carga.mjs`).
- **Segurança.** Nada de usuário ou do armazenamento entra em `innerHTML` sem `escapeHtml`, `urlMidiaSegura`, `urlCssSegura`, `filtroSeguro` ou `idSeguro`.
- **Conteúdo.** Não muda nenhuma frase, fonte, biografia ou obra. Não edite `assets/js/dados/` nem as fases de curadoria. Não invente nada.
- **Prints da navegação real:** `node ferramentas/design/capturas.mjs --etapa 04-home` (celular, tablet e desktop, nos dois temas). Compare com `00-diagnostico` e `03-navegacao`.
- **Antes de cada commit:**
  - `npm run estado:comparar` tem de dar IDÊNTICO;
  - `npm run teste` tem de passar;
  - `npm run auditoria:tecnica` não pode piorar CLS nem os erros de console;
  - rode `npm run formatar`.
- **Commits** pequenos em português, com as linhas de atribuição, e `git push -u origin redesign/04-home`.
- **Portão 4b:**
  - Artifact com os prints de todas as seções (celular, tablet e desktop, nos dois temas);
  - comparação antes e depois;
  - resumo e pergunta;
  - espere o "aprovado".

**7. Em cada portão:**
- imagens primeiro, depois as palavras;
- no máximo 3 opções, com a sua recomendação;
- resumo de até 10 linhas e uma pergunta clara;
- me lembre de conferir o modelo e o raciocínio da etapa seguinte;
- sugira chat novo para as fases grandes.

**8. Estilo de texto na interface:** frases curtas e diretas, sem travessão "—" nem rótulos de enfeite. O conteúdo editorial (frases e biografias) não muda.
