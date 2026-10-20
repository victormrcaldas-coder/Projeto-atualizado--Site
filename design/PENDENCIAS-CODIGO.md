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

## Home (para a Etapa 4b)

5. **Contadores com "+":** as fases de curadoria 36 e 37 escrevem "2412+" em `statQuotes` e `statAuthors`. O número exato precisa ser escrito no fim da cadeia.
6. **`initials()`** (`nucleo/01`) põe o "de" nas iniciais (ex.: "MD" para Machado de Assis).
7. **Aviso (`#toast`):** aparece como uma pílula vazia.
8. **Seleção da galeria da home:** no site, ela deve ser escolhida entre autores com foto curada existente e de tamanho bom. Assim, foto quebrada nunca vira um bloco que parece imagem faltando.
9. **Código antigo da home:**
   - `renderHeroStack`, `renderQuoteOfDay`, o gerador (`generateBtn`), `renderCategoryGrid('catGridHome')` e os contadores com "+" (`init()` e as fases 36 e 37) ainda escrevem em elementos que a home nova não usa;
   - esses elementos ficam guardados em `.home-legado`, fora da tela;
   - **como corrigir:** tirar essas chamadas de `app/09`, `app/10` e `app/15` e trocar a escrita dos contadores por uma chamada à home. As fases antigas não são editadas: a troca vai numa fase nova.
10. **Créditos das fotos:**
    - o site guarda só o arquivo do Commons, não o autor da foto nem a licença;
    - por isso a home diz apenas "Imagem: Wikimedia Commons";
    - **como corrigir:** guardar autor e licença de cada foto curada (dá para buscar pela API do Commons, como faz `ferramentas/design/amostra.mjs`) e mostrá-los na legenda.
11. **Narração ("Ouvir"):** usa a voz do próprio navegador (`speechSynthesis`). Em navegador sem voz em português, a narração sai em outra voz, ou não sai.

