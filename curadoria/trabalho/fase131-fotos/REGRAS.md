# Fase 131 — fotos: critérios e contagens

Pesquisa feita em 20/10/2026 pela API do Commons e do Wikidata. Nada no site foi alterado: a fase de curadoria em `assets/js/curadoria/` ainda precisa ser escrita a partir de `decisoes.jsonl`.

## Arquivos desta pasta

| Arquivo | O que tem |
|---|---|
| `estado.jsonl` | As 190 pessoas com foto curada efetiva: arquivo, tamanho, se existe, classe (OK, QUEBRADA, PEQUENA, SEM_ARQUIVO). |
| `decisoes.jsonl` | As 84 pessoas revistas: arquivo atual, arquivo novo (ou `null`), tamanho, licença, autor, página, caixa do rosto, `card`, `wide`, ação, motivo e `conferido_visual`. |
| `creditos.jsonl` | Os 172 créditos de todas as fotos curadas depois das mudanças: nome, arquivo, autor, licença e página. |
| `folha-decisoes.jpg` | Antes e depois, lado a lado, das 84 pessoas. |

## Estado de partida (`estado.jsonl`)

- **190** pessoas com foto curada efetiva (Carl Gustav Jung não entra: a entrada dele não é a efetiva).
- **108 OK**, **41 QUEBRADA** (arquivo inexistente no Commons), **40 PEQUENA** (menos de 640 px de largura ou de 800 px de altura) e **1 SEM_ARQUIVO** (Drummond).
- Casos especiais revistos mesmo estando OK:
  - Fernando Pessoa: estátua do Chiado;
  - Blaise Pascal: linha de escaneamento no topo;
  - Warren Buffett: a foto é larga e corta o rosto no Descubra.

## Critérios para a foto nova

1. **Ordem de busca:**
   - primeiro o P18 do Wikidata;
   - depois a categoria do Commons (P373);
   - por último, a busca do Commons por título (`intitle:` + `fileh:`).
2. **Licença livre:** domínio público, CC0, CC BY ou CC BY-SA.
3. **O que vale como retrato:**
   - foto real ou retrato pintado, gravado ou desenhado de época;
   - de frente ou em 3/4, com o rosto visível;
   - **pelo menos 1000 px de altura**;
   - sem marca d'água, sem grupo e sem caricatura.
4. **Exceções e recusas:**
   - para a Antiguidade e o Oriente antigo (Marco Aurélio, Epicteto, Confúcio, Lao Tsé, Zumbi), vale o busto ou o retrato imaginado de época, porque não existe outro;
   - estátuas e bustos modernos foram recusados (Pessoa, Florbela, Cora Coralina, Lima Barreto, Camões, Montaigne);
   - imagem gerada por IA também foi recusada (há uma de Paulo Freire no Commons).
5. **Identidade:**
   - a descrição ou o título no Commons tem de nomear a pessoa;
   - caso pego na conferência: "Salon du livre - Michel Foucault.jpg" é Jean-Pierre Foucault, e foi recusada.
6. **Conferência visual:** cada candidata foi vista em miniatura de 330 px com grade de 10%, e cada decisão tem `conferido_visual: true`.
7. **Sem foto:**
   - se nada passa, a pessoa fica com a placa de iniciais, e o motivo fica registrado;
   - nas PEQUENAS sem troca, o motivo diz se a foto atual pode seguir só em tamanho pequeno, como prevê o item 2 de `PENDENCIAS-CODIGO.md`. A escolha é do dono.

## Ponto focal (`card` e `wide`)

- **Caixa do rosto:** está em `rosto_caixa`, em % da imagem (x da esquerda para a direita, y de cima para baixo). É uma estimativa feita a olho sobre a grade de 10%.
- **Formato dos valores:** são `object-position` com horizontal e vertical (`'X% Y%'`), para `object-fit: cover` (`app/14`, `photoImgHTML`).
- **Como foram calculados:**
  - `card` no quadro **quadrado** (avatar). É o caso que mais corta; serve também para 4:5 e 3:4;
  - `wide` no quadro **16:9**;
  - o valor põe o centro do rosto a 30% da altura do quadro (terço superior) sem cortar o alto da cabeça, e centra o rosto na horizontal quando sobra largura.
- **Valores altos (até 100%):** quando a imagem quase não sobra no quadro, o valor pode parecer alto, mas o efeito é pequeno.
- **Conferência:** nada substitui conferir no Playwright (390×844 e 1440×900).

## Contagens

| | Trocar | Sem foto | Total |
|---|---|---|---|
| QUEBRADA | 30 | 11 | 41 |
| PEQUENA | 33 | 7 | 40 |
| SEM_ARQUIVO (Drummond) | 1 | 0 | 1 |
| OK revistas (Pessoa, Pascal) | 2 | 0 | 2 |
| **Total** | **66** | **18** | **84** |

Warren Buffett está entre as PEQUENAS: a foto atual tem 640×386.

**Sem foto, QUEBRADA:** Abílio Diniz, Benjamin Graham, Chico Xavier, Cora Coralina, Dale Carnegie, Howard Marks, John Bogle, Luís de Camões, Peter Lynch, Profeta Muhammad e Rumi.

**Sem foto, PEQUENA:** Florbela Espanca, Jean Piaget, John Maynard Keynes, Michel Foucault, Paulo Freire, Rainer Maria Rilke e bell hooks.

## Achados da conferência visual

- **Mário Quintana:** a foto curada hoje ("Mario Quintana.jpg") mostra um homem de hoje, de camisa azul. Não é o poeta, que morreu em 1994. A troca é urgente.
- **Florbela Espanca:** a foto atual é uma pintura digital moderna, não um retrato de época.

## Dúvidas para o dono

- **Trocas aceitas com ressalva** (passam no critério, mas o rosto fica pequeno no quadro): Ailton Krenak, Ayrton Senna, Coco Chanel, Manuel Bandeira, Simone Weil e Stephen Hawking.
  - Se preferir, essas também viram placa.
  - Rosalind Franklin e Maria Callas também têm o rosto menor que o ideal.
- **Lima Barreto:** a foto é da ficha de internação manicomial (1914). É o retrato mais usado dele, mas o dono decide se aceita a origem.
- **Profeta Muhammad:** recomendo a placa por respeito religioso, além de não existir retrato real.
- **Abaixo de 1000 px, mas melhores que a placa** (se o dono aceitar exceção):
  - Paulo Freire: `Paulo Freire 1977.jpg`, 660×833;
  - Camões: `Camões, por Fernão Gomes.jpg`, 640×714;
  - Montaigne: há também o Dumonstier, 698×900, mas foi escolhido um óleo com 1594 px;
  - John Bogle: `Photo of a John C. Bogle By Bill Cramer.jpg`, 594×792.
- **Candido Portinari:** foi escolhida a foto de Annemarie Heinrich, porque a descrição o nomeia. A "Cândido Portinari, sem data.tif" tem rosto maior, mas a descrição só cita o fundo documental.
- **Fotos do fundo Correio da Manhã** (Arquivo Nacional), como Drummond, Clarice, Vinicius, Graciliano e Quintana: estão marcadas como domínio público no Commons. Seguimos a marcação do Commons.
- **Fora do escopo, visto de passagem:**
  - Sêneca: o arquivo curado redireciona para "Duble herma of Socrates and Seneca Antikensammlung Berlin 07.jpg". Pelo título, é uma herma dupla de Sócrates e Sêneca; não conferi a imagem;
  - Chien-Shiung Wu: a licença está como "No restrictions" (Flickr Commons), não como PD ou CC;
  - Winston Churchill: a página do Commons não nomeia o fotógrafo e marca a foto como protegida em alguns países.
