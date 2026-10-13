# Resolução de lacunas (Fase 127) — regras

Site: MeMotiva, catálogo de frases em português (pt-BR). Critério do projeto:
**quem pesquisar a frase e o autor deve encontrar o mesmo.** Cada frase é uma
passagem real de obra, discurso, carta ou entrevista documentada, e o
português é o texto literal (autor de língua portuguesa) ou uma tradução
**fiel e própria** do original conferido.

Cada pessoa da sua lista tem só 1 ou 2 frases no site. A tarefa é procurar
**novas frases verificadas** até chegar a **3 frases por pessoa** (3 é
referência, não obrigação). **Qualidade antes de quantidade:** é melhor não
inserir nada do que inserir frase duvidosa. Não invente nada.

## Para cada pessoa

O item da lista traz `frases_atuais` (não repetir), `obras_catalogo` (obras
do site; prefira tirar a frase delas), `situacao` e `removidas_registro`
(frases já retiradas do site, com o motivo). **Nunca proponha uma frase de
`removidas_registro`** nem variante dela.

Decisões (uma linha JSON por frase nova; e uma linha final por pessoa):
- `insere` — frase nova verificada.
- `sem_frase` — linha final quando não chegou a 3: diga quantas inseriu, o
  que procurou e por que parou (sem texto verificável acessível, só sites de
  frases, obra protegida sem trecho curto adequado, etc.).

## O que a frase precisa ter

1. **Fonte real e localizada:** obra + ano + localização (capítulo, parte,
   carta, ato/cena, verso, data do discurso/entrevista). Formato de `src`:
   "Título em português (ano), capítulo N" / "Discurso em Oslo, 10 de dezembro
   de 1964" / "Carta a Theo van Gogh, julho de 1880". Use o título do
   catálogo do site quando a obra estiver nele (`obra`).
2. **Original exato** em `orig` quando o original não é português e você o
   leu (texto integral, Gutenberg, Perseus, Latin Library, arquivo
   institucional, Google Books com trecho visível). Se só conferiu uma
   tradução inglesa de original alemão/francês/russo etc., deixe `orig` vazio
   e diga em `evidencia` qual tradução conferiu.
3. **Tradução própria e fiel** (não copie tradução portuguesa publicada).
   Recorte contínuo; sem juntar pedaços distantes; sem cortar negação ou
   condição que mude o sentido.
4. **Autores de língua portuguesa:** texto literal da edição; diga a edição.
5. **Frase que se sustenta sozinha** e diz algo (reflexão, conselho,
   observação marcante): o site é de frases para ler, guardar e compartilhar.
   Nada de fragmento que só faz sentido no contexto. Em ficção, fala de
   personagem é aceitável; diga em `notaAutoria` quem fala ("Fala de
   Eliza Doolittle a Higgins.").
6. **Direitos autorais:** obra protegida → só trecho curto (até 2 frases ou
   até 4 versos), nunca poema inteiro ou estrofe longa; prefira prosa,
   entrevistas e discursos. Não copie trecho protegido só para preencher a
   lacuna: se não houver trecho curto bom, `sem_frase`.
7. **Atribuição limpa:** confira se a frase não é de outra pessoa nem
   apócrifa (Quote Investigator, Wikiquote "Disputed/Misattributed").
   Frases famosas "de internet" costumam ser falsas: prefira tirar a frase do
   texto da obra do que validar uma frase solta.
8. Não repetir a mesma passagem de uma frase atual (nem em outra tradução).

## Padrão de evidência (o mesmo das Fases 117–123)

Aceitos, em ordem de preferência:
1. **Texto integral lido** (Gutenberg/GITenberg, Latin Library, Perseus,
   Wikisource, arquivos institucionais); diga edição e capítulo.
2. **Documento primário** reproduzido em fonte confiável (discurso transcrito
   por instituição, carta publicada, entrevista em veículo de referência,
   Nobel Prize, arquivos presidenciais).
3. **Fonte confiável que reproduz o trecho com a obra**: Quote Investigator,
   Google Books (trecho visível), editora, artigo acadêmico, imprensa de
   referência, Wikiquote **com página/capítulo**.
4. Livros contemporâneos: destaques/citações da edição publicada
   (Goodreads/Kindle) **somados** a uma segunda fonte independente com a
   mesma redação ligada ao mesmo livro.

Não bastam: sites de frases (Pensador, BrainyQuote, AZQuotes, KDFrases,
Frases Famosas etc.), redes sociais, uma única fonte fraca.

## Categorias (`cat`) — use uma destas

vida, reflexao, filosofos, motivacao, dificeis, conforto, felicidade,
gratidao, amor, amizade, familia, educacao, autorreconhecimento, fe,
politica, lideranca, negocios, empreendedorismo, financas, manipulacao
(influência e persuasão), empoderamento (empoderamento feminino).

## Saída

Arquivo `a31/dec_<G>.jsonl` (crie e acrescente só este; grave cada linha
logo que decidir; se o arquivo já existir, continue de onde parou):

```
{"autor":"Nome exatamente como na lista", "acao":"insere",
 "text":"frase em pt-BR", "orig":"original exato (ou vazio)",
 "obra":"título como em obras_catalogo (ou vazio se não estiver lá)",
 "src":"Título (ano), localização", "cat":"categoria",
 "notaAutoria":"nota pública curta e factual (opcional)",
 "evidencia":"onde leu/conferiu: edição, capítulo, site da evidência"}
{"autor":"...", "acao":"sem_frase", "inseridas":N,
 "motivo":"por que não chegou a 3", "fontes":"o que foi consultado"}
```

`notaAutoria` é pública: só fato útil ao leitor (contexto da passagem), nunca
processo de curadoria. `evidencia`, `motivo`, `fontes`: português, curtos e
factuais (vão para a nota interna).

## Ferramentas

- `WebSearch` (mode "standard"). Cota de buscas é **compartilhada** por vários
  agentes: use o texto integral sempre que possível (economiza busca).
  `WebFetch`/curl para sites comuns estão BLOQUEADOS. Funcionam
  `raw.githubusercontent.com` e `git clone` de repositórios públicos.
- Gutenberg via GITenberg: id em
  `corpus/gitberg/gitenberg/data/GITenberg_repo_list.tsv` (colunas: id, nome
  do repositório); baixe com `python3 -I tools/pg.py <id>` → `corpus/pg/<id>.txt`.
  Muitos já estão em `corpus/pg/`. Latim: `corpus/latinlib/`. Grego:
  `corpus/gr/` (Perseus; mais via clone de `PerseusDL/canonical-greekLit`).
  Wikisource e outros textos: tente `raw.githubusercontent.com` de repositórios
  públicos que tenham o texto.
- Caminhos relativos ao scratchpad:
  `/tmp/claude-0/-home-user-Projeto-atualizado--Site/2ddfe8c6-dbaa-5773-b055-42e411439abc/scratchpad`.
- Escreva o JSON com Python (`python3 -I`, `json.dumps(..., ensure_ascii=False)`).
- Se a cota de buscas acabar, pare e liste no fim as pessoas não terminadas.
- **Não altere** nada no repositório `/home/user/Projeto-atualizado--Site`
  nem arquivos de outros lotes.
