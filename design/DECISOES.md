# Redesign do MeMotiva: decisões do proprietário

Registro das decisões tomadas nos portões do redesign. Serve para continuar o trabalho em outro chat sem perder o contexto. O briefing completo fica com o proprietário (`BRIEFING-REDESIGN.md`). As regras gerais estão em `CLAUDE.md` e `ARCHITECTURE.md`.

## Etapas e branches

| Etapa | Branch | Situação |
|---|---|---|
| 0. Diagnóstico | `redesign/00-diagnostico` | Aprovada em 14/10/2026 |
| 1. Direção visual | `redesign/01-direcao` (parte da Etapa 0) | Em andamento |

Nada entra na `main` sem o proprietário dizer "pode juntar". As branches `backup/main-original-2026-10-13` e `backup/trabalho-completo-2026-10-13` não são tocadas.

## Portão 0 (14/10/2026)

| # | Assunto | Decisão | Onde entra |
|---|---|---|---|
| 1 | Relatos inventados da comunidade (`marina_sp`, `joao.forte`, `luztotal`, em `seedCommunityIfNeeded`, `app/10`) | Retirar e pôr no lugar um convite discreto para escrever | Etapas 4b (home, seção H) e 8 (comunidade) |
| 2 | Botão de compartilhar que já existe nos relatos (`sharePost`) | Manter. Não acrescentar compartilhamento novo | Etapa 8 |
| 3 | Contadores da home (frases curadas, temas, autores e vozes) | Manter, na seção Explorar, fora da abertura, com o número exato (hoje aparece "2412+") | Etapa 4b |
| 4 | Fontes | Guardar os arquivos no repositório, com a licença ao lado (ver a decisão 7) | Etapa 2, em `assets/fonts/` |
| 5 | Navegação no celular | Manter a barra inferior. Propor como reduzir os 8 botões | Etapa 3 |
| 6 | Rede do ambiente | Acesso "Completo". Em 14/10/2026 abriam: Commons, pt.wikipedia, Fontshare e as 8 referências. O en.wikipedia respondeu 429 (limite de pedidos) | — |
| 8 | Defeitos pequenos vistos no diagnóstico | Corrigir na etapa em que cada tela for redesenhada | Ver a lista abaixo |

**Defeitos pequenos a corrigir:**
- a pílula escura vazia no pé de todas as telas (`#toast` escondido com `translateY(120%)`, em `memotiva.css`);
- palavras partidas nos blocos de tema a 390 px ("Empreendedorism / o", "Autoconheciment / o");
- iniciais "MD" para Machado de Assis (`initials()`, em `nucleo/01`, conta o "de");
- contadores "2412+" sem ponto de milhar e com "+";
- o mesmo ícone para Autores e Histórias na barra inferior.

## Decisão 7: só fontes livres (14/10/2026)

**Decisão:** o site usa apenas fontes com licença **SIL Open Font License (OFL)**, do Google Fonts ou da parte livre do Fontshare.

**Motivo.** As fontes sugeridas no briefing (Zodiak, Gambetta, Erode, Sentient, Boska, Bespoke Serif, General Sans, Satoshi, Switzer, Supreme, Synonym) são do Fontshare, sob a **ITF Free Font License 2.0, de 17/08/2026**. Essa licença:
- **permite** hospedar as fontes no próprio site;
- **proíbe** distribuí-las por "repositório" ou "servidores de acesso público". O repositório do MeMotiva é público;
- **proíbe** oferecê-las "como fonte selecionável para usuários criarem o próprio conteúdo". É o que fazem as opções "Padrão", "Serifada" e "Manuscrita" do Escrever (`STYLE_FONTS`);
- **proíbe** modificar os arquivos, inclusive reduzir (subsetting) e converter formato.

As fontes OFL não têm essas restrições. Podem ficar no repositório público com o arquivo `OFL.txt`, podem ser reduzidas para carregar mais rápido e podem ser usadas no Escrever.

## Portão 1

A preencher quando o proprietário escolher a direção visual.
