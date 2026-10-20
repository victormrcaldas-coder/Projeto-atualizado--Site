// Portão B: as transições entre telas. O retrato tocado vira o retrato da página do autor, o
// título da obra vira o título da página da obra, e o Voltar do navegador volta de tela, na mesma
// altura. Gravar com: node ferramentas/design/videos.mjs transicoes --larguras 1440,390 --folha
export default async function ({ p, pausa, legenda, clicar, rolar, marca, movel }) {
  const menu = movel ? '.bottom-nav' : '.site-header';
  const voltar = async (texto, nomeDaMarca) => {
    await legenda(texto);
    await pausa(300);
    await marca(nomeDaMarca || texto);
    await p.goBack();
    await pausa(1600);
  };
  await legenda('Início');
  await pausa(1200);
  // 1. retrato da galeria → página do autor
  await rolar('#home-autores', 1200);
  await pausa(500);
  await clicar(
    '#galeria .retrato:nth-child(3) button',
    'O retrato vira a página da pessoa',
    'galeria → autor'
  );
  await pausa(2600);
  await voltar('Voltar do navegador: a galeria, na mesma altura', 'voltar à galeria');
  // 2. troca de tela pelo menu
  await clicar(`${menu} [data-nav="explorar"]`, 'Troca de tela: a nova sobe 8 px', 'menu → Explorar');
  await pausa(1600);
  await rolar(1800, 1200);
  await pausa(400);
  await clicar(`${menu} [data-nav="autores"]`, 'Autores & Obras', 'menu → Autores');
  await pausa(1400);
  await voltar('Voltar: o Explorar, na mesma altura', 'voltar ao Explorar');
  await p.goForward();
  await pausa(1400);
  // 3. índice → autor → obra
  await clicar('#aoRoot [data-indice="Clarice Lispector"]', 'Pelo índice', 'índice → autor');
  await pausa(2000);
  await rolar('#pan-obras', 1200);
  await pausa(400);
  await clicar(
    '#pan-obras .obra-card [data-obra]',
    'O título da obra vira o título da página',
    'obra → página da obra'
  );
  await pausa(2000);
  // obra → autor → Autores → Explorar → início
  await voltar('Voltar', 'voltar ao autor');
  for (let i = 0; i < 3; i++) await voltar('Voltar', `voltar ${i + 2}`);
  // 4. o filme do Descubra → a página da pessoa
  await rolar('#home-descubra', 1200);
  await pausa(2500);
  await clicar('.filme [data-autor]', 'Do filme para a página da pessoa', 'filme → autor');
  await pausa(2600);
  await legenda('');
}
