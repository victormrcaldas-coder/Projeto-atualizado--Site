# Fase 130 — filmes de arquivo: regras, fontes e resultado

Pesquisa feita em 20/10/2026 para a curadoria do MeMotiva. É material de trabalho em `.trabalho/fase130/`. Nada foi aplicado ao site, e nenhum arquivo de `assets/` foi alterado.

## O que se buscou

Trechos curtos (6–10 s) de **filmagem real de arquivo** das pessoas que aparecem no site. A pessoa precisa estar claramente visível, e o arquivo precisa estar no Wikimedia Commons com licença livre verificável.

## Critérios (todos obrigatórios)

1. **Pessoa do site.** O nome é grafado exatamente como no site (conferido em `dados-do-site.mjs biografias`).
2. **É a pessoa real.** Ficam de fora atores, encenações, filmes de ficção (inclusive Chaplin no papel de Carlitos), sequências de fotos, animações, montagens e vídeos explicativos.
3. **A descrição do Commons nomeia a pessoa.** Quando a descrição está vazia ou não cita o nome, o arquivo foi recusado, mesmo com título ou categoria sugestivos.
4. **Licença livre declarada no Commons:** domínio público, CC0, CC BY ou CC BY-SA (sem NC/ND).
5. **Material impróprio fica fora:** funeral, cadáver, violência, doença terminal ou pessoa incapacitada.
6. **Imagem utilizável:**
   - rosto ou tronco reconhecível num trecho estável de 6 s ou mais;
   - sem cartela, legenda ou logotipo gravado no trecho. Uma marca d'água de canto só foi aceita quando pôde ser recortada sem cortar a pessoa (Vinicius de Moraes e Milton Friedman), e isso está registrado em `observacoes`.
7. **Recorte de época.** Imagens até o ano 2000 (filme ou vídeo de arquivo). Vídeos posteriores foram recusados.
8. **Conferência visual.** Cada arquivo aprovado foi baixado (transcode do Commons), examinado em folhas de contato quadro a quadro e cortado entre dois cortes de cena. A folha de cada clipe final está em `folhas/<slug>.jpg`.
9. **Ano.** Vem do campo de data, da descrição ou da categoria do Commons. Não há ano estimado: quando a data não existe, `ano` fica `null` (Vinicius de Moraes).

## Fontes e método

- **Pessoas:** 521 nomes do site. Ficaram fora 140 que morreram antes de 1895, são da Antiguidade ou não tiveram QID resolvido. Sobraram **381 pessoas da era do cinema** (383 QIDs no Wikidata).
- **Busca no Commons:** API com `User-Agent: MeMotiva-curadoria/1.0 (fase130; …)`. Pedidos foram feitos um de cada vez, com pausa de 1,2 a 2 s entre eles e respeito a HTTP 429/`retry-after`. Para cada pessoa, a busca usou:
  - `filetype:video` com o nome (inglês, português e nome nativo);
  - `haswbstatement:P180=<QID>`;
  - `incategory` e `deepcat` com a categoria da pessoa.

  Depois vieram os metadados de cada arquivo (licença, autor, data, descrição e categorias).
- **Triagem automática:** só ordena a revisão humana, não decide sozinha. Ela marca:
  - evidência forte, por categoria da pessoa ou `depicts`, e evidência fraca, quando o nome só aparece no texto;
  - palavras de material derivado (trailer, explicativo, montagem, documentário moderno, homenagem etc.).

  O filme de Edison de 1922 foi marcado como "documentário" pela triagem e mesmo assim aprovado depois de conferido.
- **Corte:** `ffmpeg -ss <início> -t <dur> -an -vf "[crop,]scale='min(720,iw)':-2,format=yuv420p" -c:v libx264 -profile:v high -crf 28 -preset slow -movflags +faststart -r 24`.
  - O CRF sobe até 32 para ficar em até 450 KB por clipe.
  - O pôster é um JPEG do mesmo quadro, com até 60 KB.
  - Os clipes não têm áudio, e os metadados do arquivo foram removidos.

## Números

| Etapa | Pessoas / pares |
|---|---|
| Pessoas pesquisadas (era do cinema) | 381 |
| Pessoas com algum vídeo ligado no Commons (categoria, depicts ou nome no texto) | 202 |
| Pessoas com candidato de licença livre e época até 2000 (lista de revisão) | 100 (54 com história no site) |
| Pares pessoa×arquivo registrados em `candidatos.jsonl` | 919 |
| Arquivos baixados e conferidos visualmente | 48 |
| **Aprovados** | **23 clipes (23 pessoas, 21 com história no site)** |

Os 896 pares recusados ou não usados se dividem assim (os motivos completos estão em `candidatos.jsonl`):

| Motivo | Pares |
|---|---|
| Não conferido: pessoa sem história no site, limite de ~20 clipes (em geral vídeos de Reagan e de Hillary Clinton) | 291 |
| Filme de ficção: Chaplin atuando como Carlitos | 141 |
| Não conferido: já existe clipe aprovado da pessoa | 139 |
| Metadados indicam material derivado (trailer, explicativo, montagem, documentário, homenagem) | 131 |
| Vídeo posterior a 2000 | 62 |
| A pessoa só é citada no texto (obra baseada, lugar ou evento com o nome) | 58 |
| Produção recente que só cita o nome | 29 |
| Não conferido: pessoa com história, candidato plausível que fica para a próxima rodada | 12 |
| Conferido e recusado (logotipo gravado, pessoa pequena ou encoberta, menos de 6 s, baixa resolução, pessoa ausente) | 20 |
| Conferido e válido, mas preterido por outro arquivo da mesma pessoa | 5 |
| Homônimo ou outra pessoa (Muhammad Ali Jinnah, Henry Ford II) | 2 |
| Arquivo aprovado para outra pessoa que também aparece nele | 3 |
| Não baixado (já havia clipe, ou material sensível) | 3 |

## Aprovados

Total: 5.722 KB (clipes + pôsteres), abaixo do orçamento de 8 MB.

| Pessoa | Ano | Licença | KB (clipe + pôster) | Clipe | Arquivo no Commons |
|---|---|---|---|---|---|
| Liev Tolstói | 1908 | Domínio público | 421 + 19 | `liev-tolstoi-1908.mp4` | 1908-1910. Leo Tolstoy Лев Толстой. Фрагменты кинохроники.ogv |
| Mark Twain | 1909 | Domínio público | 406 + 19 | `mark-twain-1909.mp4` | Mark Twain at Stormfield (1909).webm |
| Mahatma Gandhi | 1931 | Domínio público | 183 + 12 | `mahatma-gandhi-1931.mp4` | Mahatma Gandhi first film interview (30 April 1931).webm |
| Helen Keller | 1929 | Domínio público | 94 + 7 | `helen-keller-1929.mp4` | How Helen Keller Learned To Talk.webm |
| Amelia Earhart | 1935 | Domínio público | 200 + 9 | `amelia-earhart-1935.mp4` | Amelia Earhart First Female Aviator Flies Solo Across Pacific in 18 Hours, 1932.webm |
| Winston Churchill | 1946 | Domínio público | 420 + 23 | `winston-churchill-1946.mp4` | HET BEZOEK VAN WINSTON CHURCHILL AAN NEDERLAND- AANKOMST OP - SCHIPHOL-PGM4011879.webm |
| Martin Luther King Jr. | 1964 | CC BY-SA 3.0 NL | 92 + 9 | `martin-luther-king-jr-1964.mp4` | Bezoek ds Martin Luther King.ogv |
| Nelson Mandela | 1994 | Domínio público | 275 + 19 | `nelson-mandela-1994.mp4` | MandelaDinnerWH.ogv |
| Stephen Hawking | 1998 | Domínio público | 307 + 29 | `stephen-hawking-1998.mp4` | Stephen Hawking at the White House with President Clinton.webm |
| Paulo Freire | 1985 | CC BY 3.0 | 230 + 13 | `paulo-freire-1985.mp4` | Resgate - Encontro com Paulo Freire.webm |
| Albert Einstein | 1933 | Domínio público | 211 + 8 | `albert-einstein-1933.mp4` | Альберт Эйнштейн прибывает в Америку из нацистской Германии в 1933 году.ogv |
| Eleanor Roosevelt | 1940 | Domínio público | 74 + 9 | `eleanor-roosevelt-1940.mp4` | 1940-05-22 Mrs Roosevelt In Red Cross Appeal.ogv |
| Walt Disney | 1951 | CC BY-SA 3.0 NL | 145 + 10 | `walt-disney-1951.mp4` | De beroemde filmkunstenaar Walt Disney in ons land.ogv |
| Theodore Roosevelt | 1917 | Domínio público | 361 + 16 | `theodore-roosevelt-1917.mp4` | Theodore Roosevelt and Leonard Wood at the New York flower show (1917).webm |
| Thomas Edison | 1922 | Domínio público | 366 + 25 | `thomas-edison-1922.mp4` | A day with Thomas A. Edison.webm |
| John F. Kennedy | 1961 | Domínio público | 256 + 20 | `john-f-kennedy-1961.mp4` | Kennedy inauguration footage.ogv |
| Vinicius de Moraes | — (sem data) | Domínio público | 79 + 8 | `vinicius-de-moraes.mp4` | Vídeo Fundação Centro Brasileiro de TV Educativa 07.webm |
| Milton Friedman | 1980 | CC0 | 84 + 11 | `milton-friedman-1980.mp4` | Pencil.webm |
| Madre Teresa de Calcutá | 1985 | Domínio público | 161 + 14 | `madre-teresa-de-calcuta-1985.mp4` | President Reagan's Photo Opportunities on June 20, 1985.webm |
| Grace Hopper | 1982 | Domínio público | 86 + 9 | `grace-hopper-1982.mp4` | Grace Hopper - Future Possibilities - Data, Hardware, Software, and People.webm |
| Rabindranath Tagore | 1921 | CC BY-SA 4.0 | 430 + 57 | `rabindranath-tagore-1921.mp4` | Rabindranâth Tagore - AI88540.webm |
| Franklin D. Roosevelt | 1944 | Domínio público | 97 + 16 | `franklin-d-roosevelt-1944.mp4` | Second Bill of Rights Speech.ogv |
| Charles Chaplin | 1921 | Domínio público | 355 + 27 | `charles-chaplin-1921.mp4` | "Charlie" on the Ocean.webm |

Rabindranath Tagore e Franklin D. Roosevelt não têm história no site. Entraram porque o total ficou abaixo de ~25 qualificados e cabe no orçamento.

### Crédito obrigatório

- **MLK e Walt Disney** (Polygoon/Beeld en Geluid, CC BY-SA 3.0 NL), **Tagore** (Museu Albert-Kahn, CC BY-SA 4.0) e **Paulo Freire** (TV Unicamp, CC BY 3.0): exigem crédito ao autor, link para a licença e, no caso de BY-SA, compartilhamento pela mesma licença do clipe derivado.
- **Domínio público e CC0:** o crédito não é obrigatório, mas convém exibi-lo. O campo `credito` de `aprovados.json` traz uma linha pronta.

## Pontos de atenção (para o proprietário decidir)

- **Helen Keller.** O clipe saiu do transcode 240p do Commons. O original 480×360 ficou bloqueado por HTTP 429 (`retry-after: 600`) em três tentativas. Vale refazer o clipe do original depois.
- **Albert Einstein.** O arquivo inteiro tem 10 s e três planos (close, multidão, Einstein ao lado de uma mulher). O clipe mantém os cortes originais.
- **Liev Tolstói.** O ano 1908 vem da categoria do Commons; o campo de data diz "entre 1908 e 1910".
- **Amelia Earhart.** O título do arquivo diz 1932, mas a descrição e a data dizem 1935 (voo Havaí–Oakland). Foi usado 1935.
- **Vinicius de Moraes e Milton Friedman.** A marca d'água do Arquivo Nacional e o logotipo "Free to Choose" foram recortados. Credite as fontes mesmo assim.
- **Milton Friedman.** O Commons declara CC0 (Free to Choose Network/PBS). A descrição diz apenas "Friedman", e o arquivo está na categoria Milton Friedman.
- **Charles Chaplin.** É um cinejornal real de 1921 (Topical Budget), com Chaplin sem figurino. O rosto aparece de perfil ou inclinado na maior parte do trecho de 6,7 s.
- **Tagore.** Ele caminha em direção à câmera, e o rosto só fica nítido no fim.

### Exclusões que podem ser revistas

- **Anne Frank.** É a única filmagem existente, mas ela aparece cerca de 5 s, pequena numa janela.
- **Maya Angelou.** O rosto fica encoberto no abraço com Clinton.
- **Santos Dumont.**
  - "Santos-Dumont discursando" tem 176×144 e o rosto sai borrado.
  - O mutoscópio de 1901 tem descrição vazia no Commons.
- **Muhammad Ali.** O único vídeo até 2000 tem logotipo de TV gravado na imagem.
- **Nietzsche no asilo.** Excluído por mostrar doença e incapacidade.

### Próxima rodada (candidatos plausíveis com história no site, não conferidos por causa do limite)

- Carl Sagan: Who's Out There, 1975.
- Santos Dumont: First flights in aviation history, 1945.
- Mao Tsé-Tung: Chairman Mao-1/2/3 e China: The Roots of Madness.
- Angela Davis: Boston, 1970.
- Ruth Bader Ginsburg: 1993, três vídeos.
- Colin Powell: 1993, dois vídeos.

## Arquivos desta pasta

- `aprovados.json`: um registro por clipe aprovado, com licença, autor, crédito, ano, trecho, medidas e descrição curta em pt-BR tirada só da descrição do Commons.
- `candidatos.jsonl`: uma linha por par pessoa×arquivo considerado, com `decisao` e `motivo`.
- `clipes/<slug>-<ano>.mp4` e `.jpg`: clipes sem áudio e pôsteres.
- `folhas/<slug>-<ano>.jpg`: folha de contato de cada clipe (1 quadro por segundo).

Os scripts de busca, download e corte e os downloads intermediários ficaram fora do repositório, na pasta temporária da sessão (`scratchpad/f130`).
