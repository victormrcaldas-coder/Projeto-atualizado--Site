# Pendências de código e de conteúdo (achadas no redesign)

Achados que melhorariam a estética, mas dependem de código do site ou de uma fase nova de curadoria. Por isso ficam fora das etapas de design.

O proprietário pediu, no refinamento da Etapa 4a (20/10/2026), que todas fossem anotadas e apresentadas no fim das etapas gerais, com o que fazer em cada uma.

Cada item diz:

- onde o problema está;
- o que se vê na tela;
- o caminho de correção.

Conteúdo (frases, fontes, fotos curadas) só muda com uma fase nova em `assets/js/curadoria/` (ARCHITECTURE.md §8.3).

## Fotos dos autores

### 1. Fotos curadas que apontam para arquivos que não existem no Commons

- **Onde:** nas fotos curadas dos autores (`photoInfo`).
- **O que se vê:** no site, o autor cai nas iniciais. Na home nova, não pode entrar na galeria.
- **Como corrigir:** fase de curadoria que troque o nome do arquivo de cada um pelo arquivo certo no Commons, ou retire a foto com registro.
- **Lista:** conferida em 20/10/2026 pela API do Commons, autor por autor.

41 autores, de 189 com foto curada:

Abílio Diniz, Ailton Krenak, Angela Davis, Benjamin Graham, Candido Portinari, Cecília Meireles, Charlie Munger, Chico Xavier, Chimamanda Ngozi Adichie, Clarice Lispector, Coco Chanel, Cora Coralina, Dale Carnegie, Desmond Tutu, Francisco de Assis, Getúlio Vargas, Graciliano Ramos, Guimarães Rosa, Howard Marks, Howard Schultz, John Bogle, Jorge Amado, Lima Barreto, Luís de Camões, Manuel Bandeira, Mao Tsé-Tung, Marco Aurélio, Maria Callas, Oswaldo Cruz, Pelé, Peter Lynch, Profeta Muhammad, Ray Dalio, Rosa Parks, Rosalind Franklin, Rui Barbosa, Rumi, Santos Dumont, Tarsila do Amaral, Vinicius de Moraes, Zumbi dos Palmares.

### 2. Fotos curadas pequenas demais para retrato grande

- **Onde:** fotos com menos de 600 px de largura no original.
- **O que se vê:** borram na galeria, no Descubra e na abertura.
- **Como corrigir:** a mesma fase de curadoria do item 1 procura uma versão maior. Se não houver, o autor só aparece em tamanho pequeno.

33 autores (largura do original em px):

Amartya Sen (200), Antoine de Saint-Exupéry (450), Ariano Suassuna (450), Ayrton Senna (224), Bill Gates (550), Carl Sagan (328), Charles Chaplin (540), Confúcio (350), Epicteto (273), Florbela Espanca (500), Hannah Arendt (181), Jean Piaget (408), John Maynard Keynes (250), Kahlil Gibran (274), Lao Tsé (400), Leonardo da Vinci (420), Madre Teresa de Calcutá (576), Melinda French Gates (546), Michael Jordan (398), Michel Foucault (207), Nelson Mandela (273), Oprah Winfrey (182), Pablo Picasso (446), Paulo Freire (171), Rainer Maria Rilke (300), Ralph Waldo Emerson (452), Simone de Beauvoir (564), Simone Weil (450), Stephen Hawking (250), Søren Kierkegaard (310), Václav Havel (294), Walt Disney (450), Wangari Maathai (256).

### 3. Retratos que não são retratos

- **Fernando Pessoa:** a foto curada é a estátua do Chiado, em cor, com fundo verde. Ao lado de retratos de época, ela quebra a família da galeria.
- **Como corrigir:** curadoria trocar por um retrato fotográfico em domínio público.

### 4. Autores importantes sem foto curada

- **Carlos Drummond de Andrade** não tem foto curada.
- **Como corrigir:** só entra se houver retrato com licença livre confirmada. Se não houver, fica a placa tipográfica.

## Home e código do site

5. ~~**Contadores com "+"**~~ **resolvido na home nova**: ela escreve o número exato. As fases 36 e 37 ainda escrevem "2412+" nos contadores antigos, escondidos (ver o item 9).
6. ~~**`initials()` com o "de"**~~ **resolvido na Etapa 9**: usa o primeiro e o último nome (Machado de Assis → MA; Vincent van Gogh → VG).
7. ~~**Pílula vazia do aviso (`#toast`)**~~ **resolvido na Etapa 4**.
8. ~~**Galeria da home com foto quebrada**~~ **resolvido na Etapa 4**: a pessoa sem foto mostra uma placa com o nome e vai para o fim da fila.
9. **Código antigo da home:**
   - `renderHeroStack`, `renderQuoteOfDay`, o gerador (`generateBtn`), `renderCategoryGrid('catGridHome')` e os contadores com "+" (`init()` e as fases 36 e 37) ainda escrevem em elementos que a home nova não usa;
   - esses elementos ficam guardados em `.home-legado`, fora da tela;
   - **como corrigir:** tirar essas chamadas de `app/09`, `app/10` e `app/15` e trocar a escrita dos contadores por uma chamada à home. As fases antigas não são editadas: a troca vai numa fase nova.
10. **Créditos das fotos:**
    - o site guarda só o arquivo do Commons, não o autor da foto nem a licença;
    - por isso a home diz apenas "Imagem: Wikimedia Commons";
    - **como corrigir:** guardar autor e licença de cada foto curada (dá para buscar pela API do Commons, como faz `ferramentas/design/amostra.mjs`) e mostrá-los na legenda.
11. **Narração ("Ouvir"):** usa a voz do próprio navegador (`speechSynthesis`). Em navegador sem voz em português, a narração sai em outra voz, ou não sai.

12. **Ponto focal só na vertical:**
    - as fotos curadas (`PHOTOS`, em `app/11`) só dizem a altura do rosto (`center 20%`);
    - numa foto larga num quadro vertical, o rosto que está fora do centro sai cortado. Exemplo: Warren Buffett, no Descubra, com o rosto encostado na borda direita;
    - **como corrigir:** acrescentar a posição horizontal (por exemplo `70% 20%`) nas fotos largas, conferindo uma por uma.

## Achados das etapas 5 a 9

13. **Bloco de CSS injetado por JS** (`<style id="memotiva-responsivo">`, em `curadoria/29`):
    - ainda força `min-height: 100dvh` em toda `.modal` e limita todo `article` a 72ch;
    - as telas redesenhadas anulam isso uma a uma;
    - **como corrigir:** passar as regras que ainda servem para o CSS e deixar de injetar o bloco. Como `curadoria/29` é fase antiga, a troca vai em código novo (app) ou numa fase nova.
14. **CSS antigo (`memotiva.css`, cerca de 4.500 linhas) ainda carregado:**
    - todas as telas já foram redesenhadas por cima dele;
    - **como corrigir:** retirar as regras que ficaram sem uso, tela por tela, conferindo cada uma com os testes e os prints. É trabalho de limpeza, sem mudança visual, e pede uma etapa própria.
15. **Pré-carga das fotos** (`app/14`): ao abrir o site, ele procura as fotos de quem tem história e não tem foto curada. São muitos pedidos logo na carga. **Como corrigir:** carregar só quando a pessoa aparece na tela.
16. **Botão "Comprar"** (obras): só mostra o aviso "A função do botão Comprar ainda será definida". **O que decidir:** para onde ele leva (loja, sebo, biblioteca) ou se sai.
17. **Endereço do site:** o GitHub Pages ainda não está ligado. **O que fazer:** no GitHub, Settings → Pages → Deploy from a branch → `main`, pasta `/ (root)`. O site fica em `https://victormrcaldas-coder.github.io/Projeto-atualizado--Site/`.

18. **Obras repetidas** (conteúdo): Victor Hugo tem "As Contemplações" e "Contemplações", as duas de 1856. **Como corrigir:** fase de curadoria que junte as duas, com registro.

## O que você deve fazer, em ordem

1. Ligar o GitHub Pages (item 17), para abrir o site pelo celular.
2. Decidir o botão "Comprar" (item 16).
3. Pedir uma fase de curadoria (itens 1 a 4, 10, 12 e 18): fotos quebradas, fotos pequenas, Pessoa, Drummond, créditos, pontos focais e obras repetidas.
4. Pedir a limpeza de código (itens 9, 13, 14 e 15). Não muda nada na tela; deixa o site mais leve e mais fácil de manter.
5. A narração (item 11) depende do navegador; só muda se um dia houver áudio gravado.
