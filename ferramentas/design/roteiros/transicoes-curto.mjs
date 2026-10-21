// As 5 trocas mais delicadas do Portão B, para conferir depressa em folha de quadros (sem o roteiro
// inteiro): retrato → autor, Voltar à galeria, nome do índice → título, obra → página e filme → autor.
// Gravar com: node ferramentas/design/videos.mjs transicoes-curto --larguras 1440 --folha
export default async function ({ p, pausa, legenda, clicar, rolar, marca, js }) {
  await rolar('#home-autores', 600);
  await pausa(600);
  await clicar('#galeria .retrato:nth-child(3) button', 'Retrato → autor', 'galeria → autor');
  await pausa(1500);
  await legenda('Voltar');
  await marca('voltar à galeria');
  await p.goBack();
  await pausa(1500);
  await js(() => navigateTo('autores'));
  await pausa(600);
  await clicar('#aoRoot [data-indice="Clarice Lispector"]', 'Nome → título', 'índice → autor');
  await pausa(1500);
  await rolar('#pan-obras', 600);
  await pausa(400);
  await clicar('#pan-obras .obra-card [data-obra]', 'Obra → página', 'obra → página da obra');
  await pausa(1500);
  await js(() => navigateTo('home'));
  await rolar('#home-descubra', 600);
  await pausa(2500);
  await clicar('.filme [data-autor]', 'Filme → autor', 'filme → autor');
  await pausa(1500);
  await legenda('');
}
