// Portão A: as três assinaturas (e a home mais calma) na abertura, no Explorar e na página do autor.
// Gravar com: node ferramentas/design/videos.mjs assinaturas --consulta "?portao"
export default async function ({ js, pausa, legenda, clicar, rolar, movel }) {
  const OPCOES = [
    ['', 'Como está hoje'],
    ['aspas', 'Assinatura 1: as aspas'],
    ['ficha', 'Assinatura 2: a ficha'],
    ['retratos', 'Assinatura 3: os retratos']
  ];
  // no celular a barra do portão começa recolhida
  if (movel) await clicar('.portao-recolher', 'As opções do portão');
  for (const [valor, nome] of OPCOES) {
    await js(() => {
      navigateTo('home');
      scrollTo(0, 0);
    });
    await clicar(`.portao-barra [data-portao="assinatura"][data-valor="${valor}"]`, nome + ': abertura');
    await pausa(2200);
    await js(() => {
      Object.assign(state.exploreFilter, { cat: 'all', q: '', profile: 'all' });
      navigateTo('explorar');
    });
    await legenda(nome + ': cartões do Explorar');
    await pausa(500);
    await rolar('#exploreGrid', 1200);
    await pausa(2000);
    await js(() => abrirPanorama('Victor Hugo'));
    await legenda(nome + ': página do autor');
    await pausa(800);
    if (movel) await rolar('.pan-id', 1200);
    await pausa(2000);
  }
  // a home mais calma, com a assinatura que recomendo (os retratos)
  await js(() => {
    navigateTo('home');
    scrollTo(0, 0);
  });
  await clicar('.portao-barra [data-portao="home"][data-valor="calma"]', 'Home mais calma + os retratos');
  await pausa(1200);
  await js(() => scrollTo(0, 0));
  await legenda('Home mais calma + os retratos: a página inteira');
  await pausa(800);
  const h = await js(() => document.documentElement.scrollHeight - innerHeight);
  await rolar(h, 14000);
  await pausa(1200);
}
