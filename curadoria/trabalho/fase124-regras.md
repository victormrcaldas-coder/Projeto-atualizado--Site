# Conferência dos fatos nas páginas de obras (Fase 124) — regras

Site: MeMotiva (catálogo de frases em pt-BR). Cada obra do catálogo tem uma
descrição curta (`d`) e uma página com até cinco campos: `sobre`, `contexto`,
`momento`, `importancia`, `curiosidade`, além de `tipo` e `ano`.

**Tarefa:** conferir os FATOS de cada obra da sua lista — datas, nomes,
lugares, números, atribuições, quem escreveu/disse o quê, primeira publicação,
prêmios, adaptações, circunstâncias — contra fontes confiáveis. **Não
reescrever** o estilo: o texto é do site e fica como está, a menos que contenha
um erro de fato ou uma afirmação que não se sustenta.

## O que fazer em cada obra

- `ok` — nenhum erro de fato encontrado (os fatos centrais conferem).
- `corrige` — há erro de fato. Dê o campo inteiro reescrito com a **menor
  mudança possível** (troque só a data/nome/afirmação errada; mantenha o resto
  da frase igual). Se a afirmação não puder ser confirmada e não for essencial,
  retire-a do campo (mantendo o restante). Explique em `motivo` o que estava
  errado e qual é o fato certo, e em `evidencia` onde conferiu.
- `sinaliza` — problema que não se resolve com correção de campo: a obra não
  existe ou não é desse autor; título trocado por outro livro; obra de outra
  pessoa; data de publicação impossível de conciliar. Explique em `motivo`.
  (Eu decido o que fazer.)

## Padrão de evidência

Enciclopédias e obras de referência (Britannica, Wikipedia com fonte,
Stanford Encyclopedia of Philosophy), editoras, catálogos de bibliotecas,
artigos acadêmicos, imprensa de referência, o próprio texto integral (Project
Gutenberg/GITenberg). Não invente nada: se não conseguir confirmar um detalhe
secundário (por exemplo, uma "curiosidade" anedótica), e ele parecer duvidoso,
retire-o; se parecer plausível e for corrente em fontes de referência, deixe.
Afirmações vagas e interpretativas ("é um dos textos mais lidos…") não precisam
de prova, desde que não sejam falsas.

Atenção a erros típicos: ano da primeira edição trocado pelo da tradução;
idade ou data de morte do autor; "primeiro livro" que não foi o primeiro;
prêmios inexistentes; lugar de publicação; tipo errado (romance x conto,
ensaio x livro); citações dentro da página que não são do autor.

## Saída

Arquivo `a25/dec_<G>.jsonl` — uma linha JSON por obra (`chave` igual à da
lista), gravada logo que decidir:

```
{"chave":"Autor||Título", "acao":"ok|corrige|sinaliza",
 "campos":{"ano":..., "tipo":"...", "d":"...", "sobre":"...", "contexto":"...", "momento":"...", "importancia":"...", "curiosidade":"..."},
 "motivo":"o que estava errado e o fato certo", "evidencia":"onde conferiu"}
```

Em `campos` vá SÓ o que mudar (texto completo do campo). Para `ok`, omita
`campos` e `motivo`; `evidencia` curta (ex.: "Britannica; Wikipedia"). Textos
em português (pt-BR), no tom do site.

## Ferramentas

- `WebSearch` funciona (modo "standard"). `WebFetch`/curl para sites comuns
  estão bloqueados. Funcionam `raw.githubusercontent.com` e `git clone` de
  repositórios públicos. Textos do Gutenberg: `corpus/gitberg/gitenberg/data/GITenberg_repo_list.tsv`
  + `python3 -I tools/pg.py <id>` (caminhos relativos ao scratchpad).
- Se a cota de buscas acabar, continue com o que dá para conferir e liste no
  fim as chaves que ficaram sem decisão.
- Não altere nada fora do seu `a25/dec_<G>.jsonl`.
