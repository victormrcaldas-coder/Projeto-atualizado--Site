<!-- Regras entregues a quem conferiu as frases A− na Fase 121 (10–11/10/2026); registro do critério usado. -->

# Auditoria das frases A− (Fase 121) — regras para quem decide

Site: MeMotiva, catálogo de frases em português (pt-BR). Critério do projeto:
**quem pesquisar a frase e o autor deve encontrar o mesmo.** Cada frase precisa
ser uma passagem real da obra/fonte indicada, e o português deve ser uma
tradução fiel dessa passagem (sem acréscimos, sem "melhorar" a ideia).

As frases com status A− têm uma obra provável no campo `src`, mas o texto nunca
foi conferido. A tarefa é conferir **cada** frase da sua lista e decidir.

## Decisões possíveis (uma linha JSON por `qid`, todas as frases da lista)

- `confirma` — a redação (no idioma original) foi localizada na obra citada.
  O português já é fiel. Informe `orig` (texto original exato) quando o
  original estiver no idioma da obra; acrescente `src` com localização se a
  evidência mostrar (capítulo, ano da carta, parte, número da máxima...).
- `corrige` — a passagem existe, mas algo está errado: o português não
  traduz fielmente (dê `text` novo, tradução própria e fiel), a obra está
  errada (dê `src` certo), o original estava errado, etc. `motivo` obrigatório.
- `remove` — não localizada na obra nem em fonte confiável ligada à obra;
  paráfrase/resumo de ideia apresentado como citação; atribuição errada ou
  contestada (outro autor, filme, meme); fala apócrifa. `motivo` e `fontes`
  obrigatórios (o que foi procurado e onde).
- `duplicata` — a mesma passagem de outra frase ativa do mesmo autor (na sua
  lista ou no arquivo `outras_<G>.jsonl`), em outra tradução. Informe
  `contraparte` (qid da que fica) e `motivo`. Fica a que tem a tradução mais
  fiel e/ou a melhor fonte; se a que deve ficar é a da sua lista, decida-a
  normalmente (confirma/corrige) e marque a outra como duplicata — mesmo que a
  outra esteja só em `outras_<G>.jsonl` (nesse caso use `acao: "duplicata"`
  com o `qid` dela, numa linha a mais).

## Padrão de evidência (o mesmo das Fases 117–120)

Aceitos, em ordem de preferência:
1. **Texto integral lido** (Project Gutenberg via espelho GITenberg, Latin
   Library, Perseus — ver "Ferramentas"); diga edição e capítulo.
2. **Documento primário oficial** reproduzido em fonte confiável (carta anual
   da Berkshire Hathaway, discurso transcrito por instituição, artigo
   publicado).
3. **Fonte confiável que reproduz o trecho com a obra**: Quote Investigator,
   Google Books (trecho visível), editora, artigo acadêmico, imprensa de
   referência, Wikiquote **com página/capítulo**.
4. Para livros contemporâneos: destaques/citações de leitores **da edição
   publicada** (Goodreads/Kindle) **somados** a pelo menos uma segunda fonte
   independente (resumo detalhado, resenha, Google Books) com a mesma redação
   ligada ao mesmo livro.

Não bastam: sites de frases (Pensador, BrainyQuote, AZQuotes, Frases Famosas,
KDFrases etc.) sem obra; posts de redes sociais; uma única fonte fraca.
Se a redação só aparece em sites de frases, sem obra → `remove`.

**Não invente nada.** Não invente capítulo, página, ano ou original. Se a
evidência não mostra a localização, deixe `src` só com obra/ano. Se não achou
o original, não escreva um original "provável". Melhor remover do que inventar.

## Tradução

- `text` em pt-BR, tradução **própria** e fiel do original conferido.
- **Não copie** tradução portuguesa publicada protegida por direitos.
- Se o português atual já for fiel (diferenças só de estilo), não mude.
- Se o original é em alemão/francês/etc. e você só conferiu uma tradução
  inglesa publicada, NÃO coloque o inglês em `orig`; deixe `orig` vazio e diga
  em `evidencia` qual tradução conferiu (ex.: "Man's Search for Meaning, trad.
  Ilse Lasch, parte I").
- Recorte permitido: a frase pode ser um trecho contínuo da passagem; não
  junte pedaços distantes nem omita uma negação/condição que mude o sentido.

## Formato de `src`

Título em português como já está no site (ou o título original se o site já
usa), ano entre parênteses quando conhecido, depois a localização:
"A Psicologia Financeira (2020), capítulo 5", "Carta aos acionistas da
Berkshire Hathaway, 1989", "Cartas a Lucílio, LXXI", "O Príncipe, XVII".
Use "capítulo N" (não "cap. N").

## Saída

Arquivo `a21/dec_<G>.jsonl` (crie/reescreva só este). Uma linha por decisão:

```
{"qid":"...", "acao":"confirma|corrige|remove|duplicata",
 "orig":"texto original exato (opcional)", "text":"pt novo (só se mudar)",
 "src":"fonte nova (só se mudar)", "notaAutoria":"nota pública factual curta (opcional)",
 "evidencia":"onde foi conferido (obra/edição/capítulo + site da evidência)",
 "motivo":"por que corrigiu/removeu", "fontes":"o que foi consultado (remove)",
 "contraparte":"qid (duplicata)", "observacao":"opcional"}
```

Escreva `evidencia`, `motivo`, `fontes` em português, frases completas,
factuais e curtas (vão para a nota interna e para o registro de remoções).
`notaAutoria` é pública: só fato útil ao leitor (ex.: "Buffett repete a
imagem em cartas posteriores"), nunca processo de curadoria.

## Ferramentas e rede

- `WebSearch` funciona (use `mode: "standard"`; "extended" só se precisar).
  `WebFetch`, curl e navegadores para sites comuns estão BLOQUEADOS.
- Funciona: `raw.githubusercontent.com` e `git clone` de repositórios
  públicos do GitHub.
- Project Gutenberg via GITenberg: procure o id em
  `corpus/gitberg/gitenberg/data/GITenberg_repo_list.tsv` (colunas: id, nome
  do repositório) e baixe com `python3 -I tools/pg.py <id>` → texto em
  `corpus/pg/<id>.txt`. Muitos já estão baixados em `corpus/pg/`. O índice não
  tem livros acrescentados ao Gutenberg depois de ~2019.
- Latim: `corpus/latinlib/` (The Latin Library). Grego: `corpus/gr/` (Perseus
  XML; mais textos via clone de `PerseusDL/canonical-greekLit`).
- Todos os caminhos são relativos ao scratchpad:
  `(pasta de trabalho da sessão)`.
- **Não altere** nada no repositório `/home/user/Projeto-atualizado--Site`
  nem arquivos de outros grupos. Rode Python com `-I`.

## Acréscimo (11/10) — substituição de paráfrase

`corrige` com texto novo só vale quando a frase do catálogo **deriva claramente
daquela passagem** (mesma imagem, mesmas palavras-chave, mesma estrutura — é
uma tradução solta ou encurtada dela). Se a frase do catálogo é um resumo
genérico da tese do livro, ou se a passagem real escolhida é apenas "do mesmo
tema", decida `remove` (paráfrase sem correspondência) — não escolha outra
frase do livro para pôr no lugar. Na dúvida, `remove`. Em `corrige` com texto
novo, diga em `motivo` qual elemento da frase antiga mostra que ela vinha
dessa passagem.
