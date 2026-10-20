// Portão A: o filme vivo na abertura e no Descubra (sem legenda por cima, para ver o movimento limpo).
// Gravar com: node ferramentas/design/videos.mjs filme --consulta "?portao&filme=abertura"
// (a barra do portão fica escondida no vídeo; os botões dela são usados por trás)
export default async function ({ js, pausa, legenda, clicar, rolar, mover, movel, largura }) {
  await js(() => {
    document.querySelector('.portao-barra').style.display = 'none';
    scrollTo(0, 0);
  });
  await mover(largura - 20, 20, 2); // o mouse fora do filme, para ele não pausar
  await pausa(26000);
  await clicar('.filme-proxima', 'Próxima pessoa');
  await legenda('');
  await pausa(5000);
  await clicar('.filme-voltar', 'Voltar');
  await legenda('');
  await pausa(6000);
  // o mesmo filme dentro do Descubra
  await js(() => {
    const b = document.querySelector('.portao-barra [data-portao="filme"][data-valor="descubra"]');
    b && b.click();
  });
  await pausa(600);
  await rolar('#home-descubra', 1400);
  await mover(largura - 20, 20, 2);
  await pausa(16000);
}
