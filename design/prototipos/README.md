# Protótipos de direção visual (Etapa 1 do redesign)

Três direções visuais para o MeMotiva, montadas como páginas estáticas, **fora do site**: o `index.html` da raiz não carrega nada desta pasta. Servem para o proprietário escolher, ou misturar, a direção no Portão 1.

## Como abrir

```bash
python3 -m http.server 8000
# abrir http://localhost:8000/design/prototipos/
```

- **Tema.** Cada página tem um botão de tema; também dá para forçar pelo endereço, com `?tema=claro` ou `?tema=escuro`.
- **Modo limpo.** `?limpo=1` esconde a barra cinza do protótipo, que não faz parte do design.
- **Frase ampliada.** `?abrir=<qid>` abre a frase ampliada ao carregar.
- **Prints.** Saem com `node ferramentas/design/capturas-prototipos.mjs` e vão para `.trabalho/design/01-direcao/prototipos/`. O script também mede a rolagem lateral, confere Esc e foco, e audita o contraste de cada texto.

## Arquivos

| Arquivo | O que é |
|---|---|
| `amostra.js` | Conteúdo **real** do acervo, gerado por `ferramentas/design/amostra.mjs`: frases por `qid`, fonte, original, papel e foto curada com enquadramento, mais autor e licença de cada foto lidos da API do Commons. Não editar à mão. |
| `comum.js` | O que é igual nas três: tema, frase ampliada (Esc, foco preso na janela, foco devolvido), foto ampliada, cartões, tabela de contraste medida no tema atual e chegada suave da frase. |
| `a-marginalia.html` | Direção A · Marginália |
| `b-florada.html` | Direção B · Florada |
| `c-galeria.html` | Direção C · Galeria |
| `index.html` | As três lado a lado, no tamanho do celular |
| `sistema.js` | Etapa 3: modelos do cartão de frase e da frase ampliada com as classes do site, mais as iniciais sem "de", "da" e "dos". Usado pelo guia, pelo layout e pela home. |
| `layout.html` | Etapa 3: o layout aprovado no Portão 3 (abertura, cartões, frase ampliada, faixas e rodapé), com o CSS real do sistema. |
| `home.html` e `home.js` | Etapa 4a: a home do Portão 4a, fora do site, com botões que não levam a lugar nenhum. Fica como registro. A home de verdade está no site desde 20/10/2026 (`index.html`, `app/40-home.js`), com outra seção de Histórias, outro Descubra e outra Comunidade. |

## Regras seguidas

- **Fontes.** Só fontes **SIL OFL** (decisão 7 em `design/DECISOES.md`), carregadas do Google Fonts nos protótipos. As escolhidas serão guardadas em `assets/fonts/` na Etapa 2.
- **Conteúdo.**
  - Nenhuma frase, fonte ou número foi digitado: tudo vem de `amostra.js`.
  - A nota "fonte conferida", em letra pequena ao lado da fonte (não um selo), aparece só em frases com status `A`, a verificação registrada.
  - Ditados populares aparecem sem fonte.
- **Fotos.**
  - Os arquivos e o enquadramento são os da curadoria do site (`PHOTOS`).
  - O crédito traz autor, licença e "Wikimedia Commons"; a foto ampliada tem link para a página do arquivo.
  - Foto com menos de 900 px de largura não vai para formato grande; nesse caso o layout usa a versão tipográfica.
- **Acessibilidade.**
  - Botões de verdade, anel de foco, alvos de 44 px e `alt` nas fotos.
  - Esc fecha as janelas e o foco volta ao cartão.
  - Com movimento reduzido, nada se anima.

## Referências consultadas e o princípio tirado de cada uma

Só princípios, nunca cópia de layout. Prints em `.trabalho/design/01-direcao/referencias/`, capturados em 14/10/2026.

| Referência | Princípio aproveitado |
|---|---|
| jitter.video | Os vídeos não carregaram no navegador automático. Do que apareceu: um parágrafo grande, sozinho, pode ser uma seção inteira. |
| brik.space | Título enorme e apertado, com uma imagem pequena encaixada na linha como se fosse uma palavra. |
| godly.design | Galeria em alturas diferentes, com etiquetas pequenas; variar o tamanho evita a fileira de cartões iguais. |
| fontshare.com | A letra é a imagem: espécime gigante sobre uma grade de fios finos, com controles mínimos. |
| inspotype.com (playground 78) | Colagem de blocos de cor chapada (creme, marrom, oliva) com pinturas e frases curtas; cada bloco, uma cor e uma ideia. |
| originkit.dev | Biblioteca de efeitos (céu, partículas, 3D), cada um num quadro. Serve como lista do que evitar; movimento é pontual e preso a um componente. |
| styles.refero.design | A busca estava fora do ar; abri Structured, Intercom e Figma. Os três concordam em: um fundo, uma tinta e um acento só; fio fino no lugar de sombra; cantos retos; legendas em letra pequena e espaçada, como em museu. Também mostram que o "creme editorial" virou moda entre marcas de tecnologia: o fundo claro sozinho não dá identidade. |
| cult-ui.com | O "Shift card" revela detalhes no hover **e** no foco do teclado; no toque o detalhe já aparece. O resto (vidro, maquetes de aparelho) não combina com o MeMotiva. |
| publicdomainreview.org | A imagem tratada como prancha de livro, com legenda técnica, e o texto de apresentação numa caixa com fio lateral. |
| quatrocincoum.com.br | Um sinal de pontuação vira identidade (as chaves de "a revista dos livros"); rótulos de seção em maiúsculas pequenas; retratos grandes de autores. |
| poetryfoundation.org | O próprio poema é a vitrine: itens só de texto alternam com itens com foto, com rótulo de gênero em cor e linha de autor e data. |
| theparisreview.org | Rubricas em itálico ("From the Archive") acima de títulos em serifa: hierarquia feita só com estilo de letra. |
| rijksmuseum.nl | A obra ocupa a tela, e a interface flutua mínima por cima. |
| aeon.co | Rubrica em letra mono com barra ("Essay / Technology and the self"), título em serifa e uma foto grande por texto. |

## Onde cada princípio entrou

- **A · Marginália:**
  - a prancha com legenda (Public Domain Review);
  - a hierarquia feita só com estilo de letra (Paris Review);
  - a fonte como nota de rodapé;
  - fio fino no lugar de caixa (Refero).
- **B · Florada:**
  - blocos de cor chapada, cada um com uma ideia (Inspotype);
  - título enorme e apertado (Brik);
  - a fonte numa faixa, como crédito de cartaz;
  - o ritmo de cores fixo nos cartões, sem arco-íris (Godly).
- **C · Galeria:**
  - a obra ocupa a tela (Rijksmuseum);
  - legendas de museu e salas claras e escuras (Refero Structured);
  - texto e foto alternados (Poetry Foundation).
- **Nas três:**
  - o detalhe que aparece no foco do teclado, não só no hover (Cult UI);
  - o movimento pontual (Originkit, como contraexemplo).

## Problemas de conteúdo encontrados (anotados, não corrigidos)

**Fotos curadas que apontam para arquivos inexistentes no Commons.** São 42 das 192, e no site esses autores aparecem com iniciais. Entre eles:
- Clarice Lispector, Guimarães Rosa, Cecília Meireles, Cora Coralina;
- Manuel Bandeira, Vinicius de Moraes, Graciliano Ramos, Lima Barreto;
- Rui Barbosa, Tarsila do Amaral, Santos Dumont, Jorge Amado;
- Luís de Camões e Marco Aurélio (24 frases).

A lista completa sai do script de auditoria; correção só com aprovação do proprietário.

**Fotos curadas com menos de 600 px de largura.** São 34; exemplos: Paulo Freire, 171 px; Ayrton Senna, 224 px; Nelson Mandela, 273 px.

**Crédito incompleto.** O site credita as fotos só como "Wikimedia Commons". As de licença CC BY-SA (Fernando Pessoa e Paulo Freire, por exemplo) pedem também o autor e a licença.

**Originais em escritas que as fontes da web não cobrem.** No acervo há:
- 123 originais em grego politônico;
- 47 em chinês;
- 29 em devanágari;
- 8 em russo;
- 5 em hebraico;
- 4 em árabe.

A fonte escolhida precisa cobrir grego e russo, e o resto depende de fontes do sistema, com `lang` no texto. Literata e Noto Serif Display cobrem grego e russo; Archivo e Hanken Grotesk não.
