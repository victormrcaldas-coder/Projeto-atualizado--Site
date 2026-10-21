/* As listas (Etapa 9 refeita, Portão C; o CSS fica em telas/janelas.css, na parte das listas).
   - Quando uma lista é refeita (busca, filtro, tema), os 6 primeiros cartões entram em cascata: 8 px,
     360 ms na curva de chegada, 40 ms entre um e o seguinte. O "carregar mais" da rolagem infinita
     não anima, nem uma lista que aparece com a troca de tela (ela já tem a transição dela).
   - A contagem de resultados rola para o número novo em vez de piscar.
   - O traço do chip ativo desliza do chip de antes até o novo.
   Embrulha as funções que desenham as listas pelo nome (quem as chama pelo nome passa pelo embrulho). */
(function () {
  const reduz = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const visivel = (el) => !!el && el.offsetParent !== null;
  const CHEGADA = 'cubic-bezier(0.16, 1, 0.3, 1)';

  function cascata(grade) {
    if (!visivel(grade) || reduz() || window.__emTroca) return;
    [...grade.children]
      .filter((c) => c.offsetParent !== null)
      .slice(0, 6)
      .forEach((c, i) =>
        c.animate(
          [
            { opacity: 0, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'none' }
          ],
          { duration: 360, delay: i * 40, easing: CHEGADA, fill: 'backwards' }
        )
      );
  }
  function rolarContagem(el, antes) {
    if (!visivel(el) || reduz() || window.__emTroca || el.textContent === antes) return;
    el.animate(
      [
        { opacity: 0, transform: 'translateY(40%)' },
        { opacity: 1, transform: 'none' }
      ],
      { duration: 220, easing: CHEGADA }
    );
  }

  // [função, grade, contagem]
  const LISTAS = [
    ['renderExploreResults', 'exploreGrid', 'resultsCount'],
    ['renderDiscover', 'discoverGrid', 'discoverCount'],
    ['renderBiographies', 'storiesGrid', 'bioCount'],
    ['aoRenderResultados', 'aoResults', null],
    ['renderCommunityView', 'communityFeed', null]
  ];
  for (const [nome, idGrade, idConta] of LISTAS) {
    const original = window[nome];
    if (typeof original !== 'function') continue;
    window[nome] = function () {
      const conta = idConta && document.getElementById(idConta);
      const antes = conta ? conta.textContent : '';
      const r = original.apply(this, arguments);
      try {
        cascata(document.getElementById(idGrade));
        if (conta) rolarContagem(conta, antes);
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
      return r;
    };
  }

  // ---------- o traço do chip ativo desliza ----------
  const ativo = (fileira) => fileira && fileira.querySelector('.chip.active, .chip[aria-pressed="true"]');
  document.addEventListener(
    'click',
    (e) => {
      const chip = e.target instanceof Element && e.target.closest('.chip');
      const fileira = chip && chip.parentElement;
      const de = ativo(fileira);
      if (!de || de === chip || reduz()) return;
      const r0 = de.getBoundingClientRect();
      // depois dos ouvintes do clique: o chip novo já está marcado (a fileira pode ter sido refeita)
      requestAnimationFrame(() => {
        const para = ativo(fileira.isConnected ? fileira : null);
        if (!para || para === de || !visivel(para)) return;
        const r1 = para.getBoundingClientRect();
        // o traço do chip começa a --space-2 da borda (o mesmo desenho do CSS das telas)
        const margem =
          parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--space-2')) || 8;
        const traco = document.createElement('span');
        traco.className = 'mm-traco';
        traco.setAttribute('aria-hidden', 'true');
        Object.assign(traco.style, {
          left: r1.left + margem + 'px',
          top: r1.bottom - 8 - 2 + 'px',
          width: Math.max(0, r1.width - 2 * margem) + 'px'
        });
        document.body.appendChild(traco);
        para.classList.add('mm-traco-vindo');
        const dx = r0.left - r1.left;
        const s = (r0.width - 2 * margem) / Math.max(1, r1.width - 2 * margem);
        traco
          .animate([{ transform: `translateX(${dx}px) scaleX(${s})` }, { transform: 'none' }], {
            duration: 300,
            easing: 'cubic-bezier(0.2, 0, 0, 1)'
          })
          .finished.catch(() => {})
          .finally(() => {
            para.classList.remove('mm-traco-vindo');
            traco.remove();
          });
      });
    },
    true
  );
})();
