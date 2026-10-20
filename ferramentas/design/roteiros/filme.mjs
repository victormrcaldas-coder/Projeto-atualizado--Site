// O filme vivo no Descubra da home (sem legenda por cima durante a leitura, para ver o movimento limpo).
// Gravar com: node ferramentas/design/videos.mjs filme --larguras 1440,390
export default async function ({ js, pausa, legenda, clicar, rolar, mover, largura }) {
  await rolar('#home-descubra', 1400);
  await mover(largura - 20, 20, 2); // o mouse fora do filme, para ele não pausar
  await pausa(20000);
  await clicar('.filme-proxima', 'Próxima pessoa');
  await legenda('');
  await pausa(5000);
  await clicar('.filme-voltar', 'Voltar');
  await legenda('');
  await mover(largura - 20, 20, 2);
  await pausa(9000);
  await js(() => scrollTo({ top: 0, behavior: 'instant' }));
}
