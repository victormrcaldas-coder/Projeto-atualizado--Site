/* MeMotiva — curadoria/39-fase129-auditoria.js
   Fase 129 — auditoria editorial e técnica de 13/10/2026 (ver curadoria/AUDITORIA-2026-10-13.md).
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

(function () {
  /* Fase 129 — auditoria editorial: frases (13/10/2026).
    Edison (fala real do capítulo XXIV de Dyer e Martin), Mateus 6:34 (aspas soltas), Reale (obra da fórmula), Godin (sem fonte primária: removida) e registro da conferência de 92 citações bíblicas.
    Registro das decisões: curadoria/trabalho/fase129-auditoria-decisoes.jsonl. */
  var OPS = [
    {
      qid: 'q1434h1gu2wigb',
      op: 'k',
      text: 'Resultados! Ora, homem, obtive muitos resultados! Conheço vários milhares de coisas que não funcionam.',
      orig: "Results! Why, man, I have gotten a lot of results! I know several thousand things that won't work.",
      src: 'Relato de Walter S. Mallory em Frank L. Dyer e T. C. Martin, Edison: His Life and Inventions (1910), capítulo XXIV',
      nota: 'Resposta de Edison a seu colaborador Walter S. Mallory, que lamentava a falta de resultados depois de mais de nove mil experimentos com a bateria de níquel-ferro. A forma popular, com “dez mil maneiras que não funcionam”, é paráfrase posterior.',
      ev: 'Texto integral de Edison: His Life and Inventions (Project Gutenberg #820), capítulo XXIV, relato de Walter S. Mallory: "Results! Why, man, I have gotten a lot of results! I know several thousand things that won\'t work."',
      mot: 'A redação do catálogo (“Não fracassei; apenas descobri dez mil maneiras que não funcionam”) não está na biografia de Dyer e Martin que a nota citava, e a frase estava como confirmada sem fonte. O livro registra outra fala, relatada por Mallory; ela substitui a paráfrase, com tradução própria.'
    },
    {
      qid: 'q1c46wb91vxjca4',
      op: 'k',
      text: 'Portanto, não se preocupem com o amanhã, pois o amanhã se preocupará consigo mesmo. Basta a cada dia o seu próprio mal.',
      ev: 'Mateus 6:34 na NVI (texto aberto em github.com/thiagobodruk/biblia, nvi.json): mesma redação, com as aspas finais do discurso.',
      mot: 'Aspas de fechamento soltas no fim do recorte: na NVI elas encerram o Sermão do Monte (Mateus 5–7), não fazem parte do versículo isolado.'
    },
    {
      qid: 'f264p3sxdh',
      op: 'k',
      src: 'Teoria Tridimensional do Direito (1968)',
      ev: 'Revista Jurídica da FURB (artigo sobre o tridimensionalismo): "o Direito é uma integração normativa de fatos segundo valores", citado de Reale, Teoria Tridimensional do Direito – Situação Atual; Âmbito Jurídico, revista 156, cita a mesma fórmula como REALE, 1994 (edição de Teoria Tridimensional do Direito).',
      mot: 'A ligação da fórmula com Filosofia do Direito não foi confirmada (a nota da Fase 123 pedia revisão). Os artigos acadêmicos que localizam a frase a citam de Teoria Tridimensional do Direito; a fonte passa a essa obra, sem página.'
    },
    { qid: 'q1ynjy641t4paby', op: 'k', ev: 'Mateus 22:39 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qwc8e2s16lcnrj', op: 'k', ev: 'Mateus 5:9 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qg2zsmq1roqd96', op: 'k', ev: 'Mateus 11:28 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1j7uo9g1lqe6qk', op: 'k', ev: 'Salmos 23:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q89r9twetuenc', op: 'k', ev: 'Provérbios 4:23 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1fi3t5r8koh1a', op: 'k', ev: 'Eclesiastes 3:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qdb6x3i1h3ecbl', op: 'k', ev: 'Hebreus 11:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q183qco01so2vzc', op: 'k', ev: 'Mateus 7:1-7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1asnzp4gy3spy', op: 'k', ev: 'João 8:32 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1jy8l8ains52s', op: 'k', ev: 'Lucas 6:37 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q70y1vr1o47mzi', op: 'k', ev: 'Mateus 5:44 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qg8wj5w1vz7cpb', op: 'k', ev: 'Lucas 16:10 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q3qsif81pw9dhu', op: 'k', ev: 'Filipenses 4:13 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qewb70g1glazms', op: 'k', ev: '1 Tessalonicenses 5:16-18 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q974zsgp9c52w', op: 'k', ev: 'Gálatas 5:22 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qw4otxs1fsnse6', op: 'k', ev: 'Provérbios 3:5 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qcfs6j41dhylaq', op: 'k', ev: 'Provérbios 4:7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q10wjsm518rqzbk', op: 'k', ev: 'Salmos 37:5 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q5ifoe81iycj8x', op: 'k', ev: 'Salmos 46:10 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q18v92xs147mum2', op: 'k', ev: 'Provérbios 24:16 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qr99v9f952r9m', op: 'k', ev: 'Mateus 5:7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qjww7sgavlj7c', op: 'k', ev: 'Mateus 6:19-21 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1qrqqa8hqwv24', op: 'k', ev: '1 Coríntios 13:2 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q15ggak0nec5n', op: 'k', ev: 'João 14:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qsao4ev1eo8ix1', op: 'k', ev: 'João 14:6 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1icl0thd0ahuz', op: 'k', ev: '2 Coríntios 12:9 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qjw11hs141fogh', op: 'k', ev: 'Deuteronômio 31:6 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1yk2un1nnw3f1', op: 'k', ev: 'Provérbios 15:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1y05e8x1kkmi8t', op: 'k', ev: 'Salmos 90:12 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1n0u3dzxfp1fd', op: 'k', ev: 'Naum 1:7 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qxburgwy16x4q', op: 'k', ev: 'Salmos 91:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1k3z91gtocclg', op: 'k', ev: 'Tiago 1:27 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1pd86z8196zsjn', op: 'k', ev: 'Salmos 27:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qw4ht5t49ylbt', op: 'k', ev: 'Filipenses 4:6 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qikptp29oapfm', op: 'k', ev: 'Filipenses 4:7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1eobgw43g651c', op: 'k', ev: 'Lucas 12:48 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q6gq2x41ahh0cj', op: 'k', ev: 'Mateus 4:4 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1m8xqac1993ol4', op: 'k', ev: 'Mateus 23:11 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qtfvmps174d1bd', op: 'k', ev: 'Mateus 16:25 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q18b1ojs1a3r5yy', op: 'k', ev: 'Mateus 18:3 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qc3g4ew3cy1xx', op: 'k', ev: 'João 8:7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q10ouf104jjkfq', op: 'k', ev: 'Romanos 12:2 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qpv2nc0wc1w5c', op: 'k', ev: 'Romanos 8:28 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1rqyusfn8n9ux', op: 'k', ev: 'Mateus 6:10 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1wbixkwc7p09w', op: 'k', ev: 'Provérbios 9:10 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1qeequc15j8zgz', op: 'k', ev: 'Mateus 6:19-21 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1g2zixlqdpvaq', op: 'k', ev: 'Mateus 6:33 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qxijmlp1yoohyo', op: 'k', ev: 'Mateus 5:6 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1a9out4dfsm6c', op: 'k', ev: 'João 15:4 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qwjkgh81rf095o', op: 'k', ev: 'Provérbios 1:7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1vr3zu81eair2p', op: 'k', ev: 'Provérbios 16:8 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q15qb54jnj3dar', op: 'k', ev: 'Provérbios 18:22 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qhd43gcge11q', op: 'k', ev: 'João 15:12 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1fbogpqosxxkc', op: 'k', ev: 'Lucas 6:36 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1j8zs9413d0r60', op: 'k', ev: 'Provérbios 3:7 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1wcgxy4g196a7', op: 'k', ev: 'Eclesiastes 8:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qj1zkuo1plac7p', op: 'k', ev: 'Tiago 2:17 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q6r7u741qiyi68', op: 'k', ev: 'Colossenses 3:14 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qfy59755fq2y3', op: 'k', ev: 'Marcos 9:35 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1c46wb91vxjca4', op: 'k', ev: 'Mateus 6:34 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qqmuvbxs5o8tf', op: 'k', ev: 'Provérbios 17:9 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qeodytwl0bc8b', op: 'k', ev: 'Provérbios 25:11 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qjsklaw9syee6', op: 'k', ev: 'Provérbios 16:16 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1mag3hu103u28m', op: 'k', ev: 'Deuteronômio 16:20 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q17r34pm1xsx27s', op: 'k', ev: 'Provérbios 17:22 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qxjad581ydvugd', op: 'k', ev: 'Eclesiastes 7:8 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q3y551w1paj58y', op: 'k', ev: 'Mateus 7:12 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'quzc8kx19wdap1', op: 'k', ev: 'Provérbios 4:18 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1501ras1jdt367', op: 'k', ev: 'Provérbios 16:32 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1gg598w1ewkhef', op: 'k', ev: 'Provérbios 16:18 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1chzjjkaiiswx', op: 'k', ev: 'Provérbios 13:20 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qwlc0g81qsfi4m', op: 'k', ev: 'Romanos 12:21 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1jceiqoj7a3my', op: 'k', ev: 'Provérbios 20:27 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qpkii701gc299m', op: 'k', ev: 'Provérbios 21:23 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q10w2nc91wprvno', op: 'k', ev: 'Provérbios 15:13 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q177kjyddb2w5t', op: 'k', ev: 'Provérbios 21:21 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'ql4r4z81tq1s4j', op: 'k', ev: 'Provérbios 19:8 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qyzckikqczdkz', op: 'k', ev: 'Provérbios 18:21 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qy0ntrw75vuf4', op: 'k', ev: 'Provérbios 8:11 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q14zat4ymaydc1', op: 'k', ev: 'Salmos 34:18 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q191xnnyv3bgul', op: 'k', ev: 'Salmos 55:22 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1c7xo0oh74nzm', op: 'k', ev: 'Isaías 40:31 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qyl15wa7402z', op: 'k', ev: '1 João 4:16 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1ed3473xqkhsz', op: 'k', ev: 'Salmos 103:8 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q13q81zk70kes', op: 'k', ev: 'Salmos 89:14 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q10h8vv119o3u2a', op: 'k', ev: 'Provérbios 31:10 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q1lsxgscbfp4of', op: 'k', ev: 'Provérbios 19:11 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qsfzrg4w25zvf', op: 'k', ev: 'Eclesiastes 7:10 conferido no texto aberto da Nova Versão Internacional (github.com/thiagobodruk/biblia, nvi.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q7wgfx01pndt2m', op: 'k', ev: 'Provérbios 22:1 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'q10j15cgvlcdxq', op: 'k', ev: 'Romanos 5:5 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qcu5jxgni79zz', op: 'k', ev: 'Salmos 29:11 conferido no texto aberto da Almeida Corrigida Fiel (github.com/thiagobodruk/biblia, acf.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    { qid: 'qtdq2fg3hnezr', op: 'k', ev: 'Provérbios 17:17 conferido no texto aberto da Almeida Revisada Imprensa Bíblica (github.com/thiagobodruk/biblia, aa.json): trecho idêntico.', mot: 'Registro da conferência do texto bíblico na edição indicada no rótulo (a frase não tinha evidência registrada).' },
    {
      qid: 'f312j15brflb',
      op: 'r',
      mot: 'Frase atribuída a Seth Godin sem fonte primária: não foi localizado o texto do blog (seths.blog) nem livro com a redação; só aparece em sites de citações (Goodreads, AZQuotes, Quotepark) e redes sociais. A evidência da Fase 119 era um site de frases.',
      fon: 'Busca web pela redação inglesa com e sem seths.blog (13/10/2026): Goodreads, AZQuotes, Quotepark, Pinterest, Threads, Fishbowl, CX Journey — nenhum aponta o post original.'
    }
  ];
  function aplicar() {
    var nk = 0,
      nr = 0,
      nd = 0,
      nt = 0,
      ausentes = [];
    var LOTE = 'Fase 129 — auditoria editorial: frases';
    function nota(q, t) {
      q.notaInterna = (q.notaInterna ? q.notaInterna + ' ' : '') + t;
    }
    function fim(t) {
      t = String(t || '').replace(/\s+$/, '');
      return /[.!?…]["”»)]?$/.test(t) ? t : t + '.';
    }
    function porQid(id) {
      return QUOTES.filter(function (x) {
        return x.qid === id;
      })[0];
    }
    OPS.forEach(function (o) {
      var q = porQid(o.qid);
      if (!q) {
        ausentes.push(o.qid);
        return;
      }
      if (o.op === 'r' || o.op === 'd') {
        /* toda remoção vai para o registro permanente (curadoria/remocoes-curadoria.csv) */
        var cp = o.cp ? porQid(o.cp) : null;
        window.CURADORIA_REMOVIDAS.push({
          data: '2026-10-13',
          lote: LOTE,
          commit_base: '',
          commit_remocao: '',
          autor: q.author,
          texto: q.text,
          tipo: o.op === 'd' ? 'variante-removida' : 'removida',
          motivo: o.mot,
          fontes: o.fon || '',
          qid: q.qid,
          fonte_anterior: q.src,
          status_anterior: q.st,
          categoria_anterior: q.cat,
          contraparte: cp ? cp.text : '',
          similaridade: '',
          origem: 'decisão desta sessão'
        });
        if (typeof removerFrase === 'function') removerFrase(q.qid, o.mot);
        if (o.op === 'd') nd++;
        else nr++;
        return;
      }
      if (o.text && o.text !== q.text) {
        window.CURADORIA_REMOVIDAS.push({ data: '2026-10-13', lote: LOTE, commit_base: '', commit_remocao: '', autor: q.author, texto: q.text, tipo: 'substituida', motivo: o.mot, fontes: o.ev || '', qid: q.qid, fonte_anterior: q.src, status_anterior: q.st, categoria_anterior: q.cat, contraparte: o.text, similaridade: '', origem: 'decisão desta sessão' });
        q.text = o.text;
        nt++;
      }
      if (o.autor) q.author = o.autor;
      if (o.orig) q.orig = o.orig;
      if (o.src) q.src = o.src;
      if (o.nota) q.notaAutoria = o.nota;
      q.st = o.st || 'A';
      nota(q, 'Fase 129 (13/10/2026): ' + fim(o.mot) + ' Evidência: ' + fim(o.ev) + (o.obs ? ' Observação: ' + fim(o.obs) : ''));
      nk++;
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 129: qid não encontrado — ' + ausentes.join(', '));
    console.log('MeMotiva · Fase 129: ' + nk + ' corrigidas (' + nt + ' textos trocados); ' + nr + ' removidas; ' + nd + ' duplicatas removidas.');
    if (typeof reindexarQuotes === 'function') reindexarQuotes();
    if (typeof reconstruirIndices === 'function') reconstruirIndices();
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 129 — auditoria editorial: cronologias (13/10/2026).
    Newton (calendário) e Ken Blanchard (ordem).
    Registro das decisões: curadoria/trabalho/fase129-auditoria-decisoes.jsonl. */
  var CORR = [
    {
      k: 'Isaac Newton',
      c: {
        cronologia: [
          [1643, 'Nasce em Woolsthorpe, Inglaterra, em 4 de janeiro (25 de dezembro de 1642 no calendário juliano, então em uso na Inglaterra).'],
          [1665, 'A peste fecha Cambridge; começam seus anos de maior invenção.'],
          [1668, 'Constrói o primeiro telescópio refletor.'],
          [1687, "Publica os 'Princípios Matemáticos da Filosofia Natural'."],
          [1696, 'Assume cargo na Casa da Moeda.'],
          [1704, "Publica a 'Óptica'."],
          [1727, 'Morre em Londres, em 31 de março.']
        ]
      }
    },
    {
      k: 'Ken Blanchard',
      c: {
        cronologia: [
          [1939, 'Nasce em Orange, Nova Jersey, em 6 de maio.'],
          [1969, 'Publica com Hersey a primeira formulação da liderança situacional.'],
          [1979, 'Funda a The Ken Blanchard Companies.'],
          [1982, 'Publica O Gerente-Minuto.']
        ]
      }
    }
  ];
  var CAMPOS_PERFIL = ['titulo', 'resumo', 'curta', 'bio', 'contexto', 'contribuicoes', 'cronologia', 'nota'];
  function aplicar() {
    var n = 0,
      nf = 0,
      ausentes = [];
    CORR.forEach(function (r) {
      var c = canonAuthor(r.k),
        p = PERFIS_PROFUNDOS[c];
      Object.keys(r.c).forEach(function (f) {
        var v = r.c[f];
        if (f.indexOf('historia:') === 0) {
          var id = f.slice(9),
            s = STORIES.filter(function (x) {
              return x.id === id;
            })[0];
          if (!s) {
            ausentes.push(r.k + ' / ' + f);
            return;
          }
          Object.keys(v).forEach(function (g) {
            s[g] = v[g];
            nf++;
          });
          return;
        }
        /* o papel exibido vem do role da história, se houver; senão de PAPEIS */
        if (f === 'papel') {
          var st = STORIES.filter(function (x) {
            return canonAuthor(x.author) === c && x.role;
          })[0];
          if (st) st.role = v;
          else PAPEIS[c] = v;
          nf++;
          return;
        }
        if (f === 'feitos') {
          FEITOS[c] = v;
          nf++;
          return;
        }
        if (CAMPOS_PERFIL.indexOf(f) >= 0) {
          if (!p) {
            ausentes.push(r.k + ' / ' + f);
            return;
          }
          if (v === '' || v === null) delete p[f];
          else p[f] = v;
          nf++;
          return;
        }
        ausentes.push(r.k + ' / campo ' + f);
      });
      n++;
    });
    if (ausentes.length) console.warn('MeMotiva · Fase 129: não aplicado — ' + ausentes.join(' | '));
    console.log('MeMotiva · Fase 129: ' + n + ' autores corrigidos (' + nf + ' campos).');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();

(function () {
  /* Fase 129 — auditoria técnica: ligação frase → página da obra (13/10/2026).
    A página de uma obra lista as frases cuja fonte começa pelo título da obra. Estas
    frases citam a obra com outra forma do título (singular × plural, artigo, título
    original ou edição brasileira) e não apareciam na página dela; recebem q.obra com o
    título exato do catálogo. Nenhum texto ou fonte muda. A frase de Edison corrigida
    nesta fase perde o rótulo antigo de procedência (procTexto), como nas Fases 80–99. */
  var LIGAR = [
    ['qbribi49jhhkl', 'Heráclito', 'Fragmentos'],
    ['q3i6rlw1sdrau2', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['qwidc0s1vui7cf', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q1f2ksj4406jyr', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q1a678l52kqr7r', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q1yfrggujg5o1m', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q8vb30g1uj0ssc', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['qx466jlt1n95', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['qvskdro10mckuw', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['qbey0ck2gkim0', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['qx72spjotwwxx', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q1ejlmh51r4dpyc', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q1uk9s5csanxqd', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['qshow2s1vizttm', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['q1iao430mj3r4h', 'Jeff Bezos', 'Cartas anuais aos acionistas da Amazon'],
    ['q1bzbh721ttje8u', 'Henry Stanley Haskins', 'Meditações em Wall Street'],
    ['q1va31bg6u0utg', 'Jeff Bezos', 'Cartas anuais aos acionistas da Amazon'],
    ['qxbz71i12s5ec6', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['f24rlk0h', 'Hannah Arendt', 'Origens do Totalitarismo'],
    ['f263l1hvfc', 'Ring Lardner', 'Os Jovens Imigrantes'],
    ['f28148ph4xa', 'Heráclito', 'Fragmentos'],
    ['f28157olh1u', 'Heráclito', 'Fragmentos'],
    ['f282h8ph4xa', 'Anne Frank', 'O Diário de Anne Frank'],
    ['f28335mu5ay', 'Marielle Franco', 'Discursos na Câmara Municipal do Rio de Janeiro'],
    ['f284ydbfmcs', 'John Bogle', 'O Pequeno Livro do Investimento de Bom Senso'],
    ['f3112is9735', 'Heráclito', 'Fragmentos'],
    ['f312ikxji6l', 'Seth Godin', 'Isso é Marketing'],
    ['f312szyjnup', 'Warren Buffett', 'Cartas aos Acionistas da Berkshire Hathaway'],
    ['f81u8yp1w5', 'Émile-Auguste Chartier', 'Sobre Felicidade'],
    ['f1289hxyq', 'Ulysses Guimarães', 'Discurso de promulgação da Constituição de 1988'],
    ['f128acgyt', 'Ulysses Guimarães', 'Discurso de promulgação da Constituição de 1988'],
    ['f128bgfph', 'Ulysses Guimarães', 'Discurso de promulgação da Constituição de 1988'],
    ['f1284l28u2', 'Djamila Ribeiro', 'Lugar de Fala']
  ];
  function aplicar() {
    var n = 0,
      ausentes = [];
    LIGAR.forEach(function (r) {
      var q = QUOTES.filter(function (x) {
        return x.qid === r[0];
      })[0];
      var ok =
        q &&
        q.author === r[1] &&
        (OBRAS[r[1]] || []).some(function (o) {
          return o.t === r[2];
        });
      if (!ok) {
        ausentes.push(r[0]);
        return;
      }
      q.obra = r[2];
      n++;
    });
    var ed = QUOTES.filter(function (x) {
      return x.qid === 'q1434h1gu2wigb';
    })[0];
    if (ed) {
      ed.procTexto = null;
      delete ed.atribuicaoConsolidada;
    }
    if (ausentes.length) console.warn('MeMotiva · Fase 129: ligação de obra não aplicada — ' + ausentes.join(', '));
    console.log('MeMotiva · Fase 129: ' + n + ' frases ligadas à página da obra.');
  }
  var prev = window.__fase5Boot;
  window.__fase5Boot = function () {
    if (typeof prev === 'function') prev();
    aplicar();
  };
})();
