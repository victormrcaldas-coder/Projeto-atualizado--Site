// Portão A: a gramática do movimento (design/movimento.html), padrão por padrão.
// Gravar com: node ferramentas/design/videos.mjs movimento --pagina design/movimento.html
export default async function ({ p, js, pausa, legenda, clicar, sobre, mover, movel }) {
  const ver = async (id) => {
    // a página tem rolagem suave: aqui o salto é instantâneo, para o vídeo mostrar só a demonstração
    await js((id) => {
      const el = document.getElementById(id).closest('.m-demo');
      scrollTo({ top: el.getBoundingClientRect().top + scrollY - 76, behavior: 'instant' });
    }, id);
    await pausa(700);
  };
  await legenda('');
  await pausa(1500);
  await ver('d1');
  await clicar('#telaDemo .t-pessoa', '1. Troca de tela: o retrato vira o retrato da página');
  await pausa(1800);
  await clicar('#telaVoltar');
  await pausa(1600);
  await clicar('#telaDemo .t-pessoa:nth-child(2)');
  await pausa(1800);
  await ver('d2');
  await clicar('#abrirJanela', '2. Janela: abre devagar, fecha mais rápido');
  await pausa(1800);
  await clicar('#fecharJanela');
  await pausa(1400);
  await ver('d3');
  await legenda('3. Lista: o traço desliza e os cartões entram um depois do outro');
  for (const n of [3, 4, 2]) {
    await clicar(`#chips .l-chip:nth-of-type(${n})`);
    await pausa(1500);
  }
  await ver('d4');
  await clicar('#repetirTitulo', '4. Título: cada palavra sobe da própria linha');
  await pausa(2000);
  await ver('d5');
  await clicar('#recarregarFotos', '5. Foto: se revela quando chega');
  await pausa(2600);
  if (!movel) {
    await ver('d7');
    await legenda('7. Cursor: o retrato acompanha o mouse e o nome aparece');
    const q = await sobre('#cursor .c-quadro', 10);
    const b = await q.boundingBox();
    for (const [x, y] of [
      [0.15, 0.2],
      [0.85, 0.3],
      [0.8, 0.85],
      [0.2, 0.75],
      [0.5, 0.5]
    ])
      await mover(b.x + b.width * x, b.y + b.height * y, 22);
    await mover(b.x + b.width + 120, b.y, 10);
    await pausa(900);
    await ver('d8');
    await legenda('8. Estados: o sublinhado se desenha');
    for (const n of [1, 2, 3]) {
      await sobre(`.s-link:nth-child(${n})`, 14);
      await pausa(700);
    }
  }
  await legenda('Com movimento reduzido: nada se desloca, só esmaece');
  await js(() => document.getElementById('chaveReduzido').click());
  await ver('d3');
  for (const n of [5, 1]) {
    await clicar(`#chips .l-chip:nth-of-type(${n})`);
    await pausa(1200);
  }
  await pausa(800);
}
