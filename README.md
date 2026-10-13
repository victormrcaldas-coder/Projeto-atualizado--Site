# MeMotiva

Site de frases curadas em português, com páginas de autores, obras, histórias, comunidade e perfil. Compromisso central do projeto: **quem pesquisar a frase e o autor deve encontrar o mesmo.**

- **Rodar:** `python3 -m http.server 8000` e abrir `http://localhost:8000`. É um site estático, sem build.
- **Entender e continuar:** leia **[ARCHITECTURE.md](ARCHITECTURE.md)** (arquitetura, dados, padrões, regras de curadoria e como fazer a próxima fase).
- **Histórico e pendências:** [`curadoria/CHECKPOINT.md`](curadoria/CHECKPOINT.md) e [`curadoria/PLANO.md`](curadoria/PLANO.md).
- **Ferramentas e testes:** [`ferramentas/README.md`](ferramentas/README.md). Atalhos: `npm run teste`, `npm run estado:base`, `npm run estado:comparar`, `npm run exportar`.

- **Auditoria mais recente:** [`curadoria/AUDITORIA-2026-10-13.md`](curadoria/AUDITORIA-2026-10-13.md) (editorial, técnica e de segurança). Para o Claude Code: [`CLAUDE.md`](CLAUDE.md).

Estado em 13/10/2026 (depois da Fase 129): 2.412 frases · 521 autores · 1.230 obras · 235 histórias. A `main` tem o estado completo e testado; o backup do estado anterior está nas branches `backup/main-original-2026-10-13` e `backup/trabalho-completo-2026-10-13`.
