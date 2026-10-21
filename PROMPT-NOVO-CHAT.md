# Prompts para um chat novo (é só copiar e colar)

Abra um chat novo no Claude Code (na nuvem ou local) com este repositório. Use um dos textos abaixo.

## A. Continuar o trabalho de onde parou (o mais comum)

```text
Fale comigo em português. Leia, nesta ordem: COMO-TRABALHAR.md, RETOMAR.md e design/PLANO-ETAPA-9.md
(e ARCHITECTURE.md antes de mexer em código). Continue o redesign exatamente pelo método descrito lá:
portões em branches novas a partir da main, testes e estado:comparar a cada passo, folhas de quadros
curtas (nunca o roteiro longo), o agente "critico" (.claude/agents/critico.md) NOVO a cada rodada
oficial e o MESMO Crítico para verificar cada correção que ele pediu. Um portão só fecha com duas
rodadas oficiais seguidas com 9,5 ou mais em todos os eixos. Comece pelo item 1 do RETOMAR.md (corrigir os 10
defeitos da rodada 4 do Portão B, depois o Crítico verifica) e siga sem parar entre os portões. O que depender de mim vai
para a lista de decisões do RETOMAR.md, sem parar o trabalho. Nada vai para a main sem eu dizer "pode
juntar". Antes do limite da sessão acabar, faça commit e push de tudo e atualize o RETOMAR.md.
No fim de cada portão, me diga as notas do Crítico.
```

## B. Mandar material novo (frases, fotos, textos, referências)

Anexe o material no chat ou ponha os arquivos em `material/entrada/`. Depois cole:

```text
Fale comigo em português. Leia COMO-TRABALHAR.md (seção 5) e ARCHITECTURE.md §8.3. O material que
estou mandando é: <diga o que é: por exemplo "frases novas de Clarice com as fontes", "fotos de
autores", "uma referência de site">. Faça o trabalho como uma fase nova de curadoria, com registro
em curadoria/trabalho/ e no CHECKPOINT.md, sem inventar nada (o que não se confirma sai, com o
motivo). Teste, compare o estado, faça commit e push numa branch nova e me diga o que entrou e o que
ficou de fora.
```

## C. Só pedir a nota do Crítico (sem mudar nada)

```text
Fale comigo em português. Leia COMO-TRABALHAR.md (seção 3) e RETOMAR.md. Lance um agente "critico"
NOVO para avaliar o estado atual do <portão> na branch <branch>, com as folhas geradas por
ferramentas/design/videos.mjs (roteiro curto) e as ferramentas de ferramentas/critico/. Não mude
código. Me traga as 4 notas, os 10 piores defeitos e o veredito.
```

## D. Dar uma decisão pendente

```text
Fale comigo em português. Leia RETOMAR.md, seção "Decisões que dependem do proprietário". Minha
decisão: <por exemplo "Lima Barreto fica com a placa; os rostos pequenos ficam como estão">. Aplique
como manda o COMO-TRABALHAR.md (conteúdo é fase nova), registre em design/DECISOES.md, teste, faça
commit e push e atualize o RETOMAR.md.
```

## Dicas

- **Se o chat ficar longo ou o limite estiver acabando,** diga: "salve tudo e atualize o RETOMAR.md".
- **Se quiser ver o site,** peça: "publique uma prévia" ou "mande prints em 390 e 1440, claro e escuro".
- **Para pôr o site no ar pelo GitHub Pages:** em Settings → Pages, escolha a branch (a `main` ou a
  `redesign/vitrine`, quando existir) e a pasta `/ (root)`. Só o proprietário consegue fazer isso.
