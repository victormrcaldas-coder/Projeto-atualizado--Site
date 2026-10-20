/* Portão A da Etapa 9 (refeita): o seletor das assinaturas e da home mais calma.
   Lê ?assinatura=aspas|ficha|retratos e ?home=calma do endereço e põe em <html>
   (o CSS fica em telas/assinaturas.css). Com ?portao no endereço, mostra uma barra
   para trocar ao vivo. Sai depois da escolha do proprietário. */
(function () {
  const OPCOES = {
    assinatura: [
      ['', 'Como está'],
      ['aspas', 'As aspas'],
      ['ficha', 'A ficha'],
      ['retratos', 'Os retratos']
    ],
    home: [
      ['', 'Como está'],
      ['calma', 'Mais calma']
    ]
  };
  const ROTULO = { assinatura: 'Assinatura', home: 'Home' };
  const raiz = document.documentElement;
  const params = new URLSearchParams(location.search);
  const valido = (k, v) => OPCOES[k].some(([id]) => id === v);
  const aplicar = (k, v) => (v ? raiz.setAttribute('data-' + k, v) : raiz.removeAttribute('data-' + k));
  for (const k of Object.keys(OPCOES)) if (valido(k, params.get(k) || '')) aplicar(k, params.get(k) || '');
  if (!params.has('portao')) return;

  const barra = document.createElement('div');
  barra.className = 'portao-barra';
  barra.setAttribute('role', 'region');
  barra.setAttribute('aria-label', 'Opções do Portão A');
  // só textos fixos deste arquivo entram aqui
  barra.innerHTML =
    Object.keys(OPCOES)
      .map(
        (k) =>
          `<div class="portao-grupo"><span>${ROTULO[k]}</span>${OPCOES[k]
            .map(
              ([id, nome]) =>
                `<button type="button" data-portao="${k}" data-valor="${id}" aria-pressed="${(raiz.getAttribute('data-' + k) || '') === id}">${nome}</button>`
            )
            .join('')}</div>`
      )
      .join('') + '<button type="button" class="portao-recolher" aria-label="Recolher as opções">–</button>';
  barra.addEventListener('click', (e) => {
    if (e.target.closest('.portao-recolher')) {
      barra.classList.toggle('recolhida');
      return;
    }
    const b = e.target.closest('[data-portao]');
    if (!b) return;
    const k = b.dataset.portao;
    aplicar(k, b.dataset.valor);
    barra
      .querySelectorAll(`[data-portao="${k}"]`)
      .forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const p = new URLSearchParams(location.search);
    b.dataset.valor ? p.set(k, b.dataset.valor) : p.delete(k);
    history.replaceState(history.state, '', '?' + p.toString() + location.hash);
  });
  document.body.appendChild(barra);
})();
