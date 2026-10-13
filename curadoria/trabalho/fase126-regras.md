# Conferência dos fatos nas biografias e histórias (Fase 126) — regras

Site: MeMotiva (catálogo de frases em pt-BR). Cada autor tem:
- `papel` — descrição curta com datas, ex.: "Pintora mexicana (1907–1954)";
- `feitos` (alguns) — lista de realizações;
- `perfil` (panorama biográfico): `titulo`, `resumo`, `curta`, `bio` (lista
  de parágrafos), `contexto`, `contribuicoes` (lista), `cronologia` (lista de
  `[ano, texto]`), `nota`, às vezes `papel`;
- `historias` (alguns) — história narrativa com `title`, `role`, `excerpt`,
  `text`.

**Tarefa:** conferir os FATOS de cada autor da sua lista: datas de nascimento
e morte, lugares, nomes, números, cargos, prêmios, obras e anos, quem disse o
quê, circunstâncias, cronologia. **Não reescrever** o estilo: o texto fica
como está, salvo erro de fato ou afirmação que não se sustenta.

## Citações dentro das biografias

Falas entre aspas atribuídas à pessoa ("contaria depois: '…'") seguem o
padrão do site: precisam estar documentadas (livro, entrevista, discurso,
carta, biografia de referência). Se não conseguir confirmar a fala, retire a
citação: apague a frase ou troque por um enunciado factual **que você
confirmou** (sem aspas). Nunca invente fala nem fonte.

## O que fazer em cada autor

- `ok` — nenhum erro de fato encontrado.
- `corrige` — há erro. Em `campos`, dê **o campo inteiro** corrigido com a
  **menor mudança possível**:
  - campos de texto (`papel`, `titulo`, `resumo`, `curta`, `contexto`, `nota`):
    o texto completo;
  - campos lista (`bio`, `contribuicoes`, `feitos`): a **lista inteira**;
  - `cronologia`: a lista inteira de `[ano, texto]`;
  - história: use a chave `historia:<id>` com um objeto só com os campos que
    mudam (`title`, `role`, `excerpt`, `text`), cada um com o texto completo.
  Afirmação não confirmada e não essencial (anedota duvidosa, superlativo
  falso, "foi o primeiro a…") → retire-a, mantendo o resto. Explique em
  `motivo` o que estava errado e o fato certo; em `evidencia`, onde conferiu.
- `sinaliza` — problema que não se resolve com correção de campo (biografia
  de outra pessoa, autor que não existe, história inteira lendária). Explique
  em `motivo`. Eu decido.

## Padrão de evidência

Enciclopédias e obras de referência (Britannica, Wikipedia com fonte, Stanford
Encyclopedia of Philosophy, Dicionário Histórico-Biográfico Brasileiro/FGV,
Academia Brasileira de Letras, Nobel Prize), biografias publicadas, sites
institucionais, imprensa de referência, obituários. Não bastam sites de frases,
blogs de autoajuda, redes sociais. Afirmações vagas e interpretativas ("uma das
vozes mais respeitadas…") não precisam de prova, desde que não sejam falsas.

Erros típicos: ano trocado na cronologia; idade errada; "primeiro livro" que
não foi; cargo ou prêmio inexistente; lugar de nascimento; datas no `papel`
diferentes da cronologia; anedotas famosas mas apócrifas; falas inventadas.

## Saída

Arquivo `a29/dec_<G>.jsonl` — uma linha JSON por autor (`chave` igual à da
lista), gravada logo que decidir (append; se o arquivo já existir, continue
dos que faltam):

```
{"chave":"Nome", "acao":"ok|corrige|sinaliza",
 "campos":{"papel":"...", "bio":["...","..."], "cronologia":[[1806,"..."]],
           "historia:trajano":{"text":"..."}},
 "motivo":"o que estava errado e o fato certo (um item por erro)",
 "evidencia":"onde conferiu"}
```

Em `campos` vai SÓ o que muda. Para `ok`, omita `campos` e `motivo`;
`evidencia` curta. Português pt-BR, no tom do site. Copie o texto original
exatamente nas partes que não mudam (cuidado com aspas e acentos).

## Ferramentas

- `WebSearch` funciona (modo "standard"). `WebFetch`/curl para sites comuns
  estão bloqueados. Funcionam `raw.githubusercontent.com` e `git clone`.
- Escreva o JSON com Python (`python3 -I`, `json.dumps(..., ensure_ascii=False)`)
  para não quebrar aspas.
- Se a cota de buscas acabar, pare e liste no fim as chaves sem decisão.
- Caminhos relativos ao scratchpad:
  `/tmp/claude-0/-home-user-Projeto-atualizado--Site/2ddfe8c6-dbaa-5773-b055-42e411439abc/scratchpad`.
- Não altere nada fora do seu `a29/dec_<G>.jsonl`.
