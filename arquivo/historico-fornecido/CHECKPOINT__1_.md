# MeMotiva — checkpoint de curadoria

Arquivo entregue: `memotiva.html` (build v105)

## Estado do acervo

| | |
|---|---|
| Frases | 3.132 |
| — obra e localização identificadas | 784 |
| — obra ou meio de registro identificado | 1.898 |
| — obra nomeada, localização interna não confirmada | 50 |
| — atribuição consolidada/disputada/refutada, sinalizada | 11 |
| — ditados e provérbios sem autor | 388 |
| **Frases sem obra identificada** | **0** |
| Obras catalogadas | 1.244 |
| Obras com descrição editorial completa | 1.244 (100%) |
| Páginas individuais de obra | 1.244 (100%) |
| Pessoas no índice navegável | 529 |
| Panoramas curados | 529 (100%) |
| Panoramas sem vínculo no acervo | 0 |
| Pessoas com 1 ou 2 frases | 87 |
| — das quais com apenas 1 frase | 21 |

Auditoria automática: os onze indicadores em zero. Campos vazios ou curtos nas
páginas de obra: zero. Categorias sem frase: nenhuma. Duplicatas exatas: zero.

## O que foi resolvido (Fases 60 a 85)

### Panoramas órfãos — encerrado
64 panoramas existiam sem vínculo no acervo, invisíveis na navegação. 54 figuras
documentadas foram recuperadas catalogando obras verificáveis; 10 registros com
identidade não confirmada, sem frase, obra ou história associada, foram removidos.

### Classe B extinta — nenhuma frase sem obra
Das 240 frases que só tinham obras candidatas, 94 foram localizadas em obra exata
e 146 removidas, por serem reformulações do argumento do autor e não passagens
citáveis.

### Duplicação — 264 frases removidas, com portão permanente
O acervo tinha a mesma passagem registrada duas ou três vezes em traduções
diferentes: as levas anteriores acrescentavam versões melhor referenciadas sem
remover as antigas. Resolvido em quatro passagens, com medidas diferentes —
conjunto de termos, bigramas de caracteres e semelhança de ordem das palavras —
mais conferência individual dos casos ambíguos. A **Fase 75 ficou como portão
permanente**: roda depois de todas as outras, por execução adiada, e confere
automaticamente qualquer frase acrescentada daqui em diante.

### Expansão — obras e frases
No total, o acervo ganhou **51 obras novas** e passou de 2.581 para 3.132 frases
com procedência declarada. Foram catalogadas obras para **21 pessoas que estavam
no acervo sem nenhuma obra** — entre elas Maslow, Booker T. Washington, Darcy
Ribeiro, Anísio Teixeira, Max Planck, Meister Eckhart, Sojourner Truth, Oprah
Winfrey, John Bowlby, Coco Chanel, Conceição Evaristo, Winnicott e Kübler-Ross.

Três atribuições que circulavam sem fonte ganharam a obra real que lhes
corresponde, e isso corrigiu más atribuições conhecidas:

- **Henry Stanley Haskins**, *Meditações em Wall Street* (1940) — origem da frase
  sobre o que há dentro de nós, atribuída em massa a Emerson.
- **Dinah Maria Craik**, *Uma Vida por uma Vida* (1859) — origem da passagem sobre
  o conforto de sentir-se seguro com alguém, que circula sem autor.
- **Leon C. Megginson**, artigo de 1963 — origem da frase sobre a espécie que
  sobrevive ser a que melhor se adapta, atribuída no mundo inteiro a Darwin e
  gravada em pedra na Academia Nacional de Ciências dos Estados Unidos.

Para quem só tinha quadros, música ou feitos catalogados, foram acrescentadas as
obras textuais que existem: cartas de Tarsila e de Mozart, depoimentos de
Portinari, memórias de Dalí e de Louis Armstrong, poemas de Michelangelo, as
aulas de Maria Callas na Juilliard, a autobiografia de Jesse Owens, as cartas de
Rosalind Franklin e as falas registradas de Picasso, Grace Hopper e Barbara
McClintock.

### Conferência entre tradução e original — Fase 83
Uma verificação de proporção entre o texto em português e o campo `orig` apontou
catorze entradas minhas em que os dois não correspondiam: ou o português trazia
explicação ausente do original, ou o original citado era outra passagem do mesmo
autor. Onze foram acertadas, uma retirada por redundância. Somados os
acréscimos que eu mesmo retirei ao longo da sessão por não resistirem ao próprio
critério, foram **doze entradas minhas descartadas** — Abílio Diniz, Alain de
Botton, Herbert Spencer, Alex Haley, Candido Portinari, Hillary Clinton,
Marielle Franco, Louis Armstrong, Laurel Thatcher Ulrich e outras: paráfrases,
obra errada, ou frase de outro meio que não o indicado.

### Relatórios
`CURADORIA_RELATORIO()` foi reescrito: os contadores são calculados na consulta,
não congelados no carregamento, e o relatório separa pessoas de referências de
escritura. Criado `LACUNAS()`, que lista cada pessoa com uma ou duas frases e
**o motivo** pelo qual continua assim.

## O que permanece, e por quê

**87 pessoas com uma ou duas frases.** `LACUNAS()` no console e
`lacunas-restantes.csv` trazem a lista com o motivo de cada uma:

- **83 têm obra textual** — a expansão é possível, exige localizar a passagem.
- **4 não têm** — Zumbi dos Palmares, Oswaldo Cruz, John Lennon e Harriet Tubman.
  De Zumbi não sobreviveu nenhuma palavra registrada. De Lennon o que existe é
  letra de canção, que o acervo não reproduz. Nesses casos não há o que
  pesquisar.

**As 21 que ainda têm uma única frase são, em sua maioria, autores de língua
portuguesa** — Lima Barreto, Érico Veríssimo, Caio Fernando Abreu, Millôr
Fernandes, Nise da Silveira, Santos Dumont, Coelho Neto, Martha Medeiros,
Leandro Karnal, Augusto Cury, entre outros. Para eles a frase precisa ser
reproduzida na redação exata em que foi impressa, e não numa versão minha do
mesmo sentido. Preferi deixar a lacuna a arriscar uma paráfrase: pela regra desta
curadoria, uma frase errada custa mais do que uma frase a menos. Essas exigem
consulta ao texto impresso.

**Sobre o ritmo:** o portão de desduplicação apanhou dezenas de frases que
acrescentei e que já existiam no acervo com fonte igual ou melhor. É o sinal mais
claro de que a expansão fácil acabou — o que parecia lacuna, em boa parte, já
estava registrado em outra tradução.

## Ferramentas de conferência no console

`AUDITORIA()` · `CURADORIA_RELATORIO()` · `LACUNAS()` · `PROCEDENCIA_RELATORIO()` ·
`F62_RELATORIO()` (removidas por obra não confirmada) ·
`F70_RELATORIO()`, `F71_RELATORIO()`, `F75_RELATORIO()` (desduplicação) ·
`OBRAS_SEM_PAGINA(n)` · `DIAGNOSTICO_LAYOUT()`

## Testes

Playwright/Chromium em 390×844, 820×1180 e 1440×900: zero erro de JavaScript,
zero transbordo horizontal, navegação real conferida (abrir página de obra por
oid, abrir panorama por nome, conferir frases novas com a fonte correta, rolar
até o rodapé sem que a barra fixa esconda conteúdo) e verificação de que não
resta duplicata exata. Os erros de rede no ambiente isolado são apenas fontes do
Google e fotos da Wikipédia bloqueadas pelo proxy — funcionam com internet.

## Arquivos

- `memotiva.html` — o site
- `catalogo-obras.csv` — 1.244 obras com tipo, ano, página e descrição
- `curadoria-frases.csv` — 3.132 frases com fonte, procedência e categoria
- `panoramas.csv` — 529 pessoas com contagem de frases e obras
- `lacunas-restantes.csv` — as 87 pessoas com 1 ou 2 frases, com o motivo
- `remocoes-recentes.csv` — as últimas 500 remoções com o motivo de cada uma
