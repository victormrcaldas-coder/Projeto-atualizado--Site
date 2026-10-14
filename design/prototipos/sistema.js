/* MeMotiva · modelos de marcação do sistema (Etapa 3 do redesign).
   Fora do site. Usado pelo guia (design/guia.html) e pelo layout (design/prototipos/layout.html):
   cartão de frase e frase ampliada com as mesmas classes que o site usa (quoteCardHTML, openQuoteModal),
   sem travessão. Depende de comum.js (window.Proto). */
(function () {
  'use strict';
  const { esc, comAspas, imagem, credito, linguaDoOriginal } = window.Proto;
  const LONGA = 140;
  const comprimento = (t) => (t.length > LONGA ? ' data-comprimento="longa"' : '');
  const ehDitado = (f) => f.autor === 'Ditado Popular';
  const PARTICULAS = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'van', 'von']);
  const iniciais = (nome) => {
    const p = nome.split(/\s+/).filter((x) => !PARTICULAS.has(x.toLowerCase()));
    return ((p[0] || '')[0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
  };
  const coracao = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 21s-7.5-4.7-10.2-9.1C.2 9 1 5.4 4.2 4.1 6.7 3 9.3 4 12 7c2.7-3 5.3-4 7.8-2.9 3.2 1.3 4 4.9 2.4 7.8C19.5 16.3 12 21 12 21Z"/></svg>';
  const balao = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4Z"/></svg>';
  const retrato = (a, classe, largura) =>
    a.foto
      ? imagem(a, { largura, larguras: [largura, largura * 2], tamanhos: largura + 'px' })
      : '';
  // as iniciais ficam sempre por baixo: enquanto a foto carrega (ou se falhar), o quadro nunca fica vazio
  const quadro = (a, largura) => `<span class="avatar-fallback" style="display:grid" aria-hidden="true">${esc(iniciais(a.nome))}</span>${retrato(a, '', largura)}`;

  /* ---- modelos: a mesma marcação que o site usa (quoteCardHTML e openQuoteModal), sem travessão ---- */
  window.DIRECAO = {
    cartaoHTML(f, a) {
      const nome = ehDitado(f) ? 'Ditado popular' : a.nome;
      return `<article class="quote-card" data-abrir="${esc(f.qid)}" role="button" tabindex="0" aria-label="Ampliar frase de ${esc(nome)}">
        <span class="quote-card-cat">${esc(f.categoria)}</span>
        <p class="quote-card-text"${comprimento(f.texto)}>${comAspas(f.texto)}</p>
        ${f.fonte ? `<p class="quote-card-src">${esc(f.fonte)}</p>` : ''}
        <div class="quote-card-foot">
          <div class="quote-author">
            ${ehDitado(f) ? '' : `<div class="avatar-frame">${quadro(a, 80)}</div>`}
            <span class="author-name">${esc(nome)}</span>
          </div>
          <button class="heart-btn" type="button" data-salvar aria-pressed="false" aria-label="Salvar frase nos favoritos">${coracao}</button>
        </div>
      </article>`;
    },
    modalHTML(f, a) {
      const lingua = f.original ? linguaDoOriginal(f.original) : '';
      const nome = ehDitado(f) ? 'Ditado popular' : a.nome;
      return `<button class="expand-close" type="button" data-fechar aria-label="Fechar frase ampliada">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="expand-inner">
          <span class="expand-cat">${esc(f.categoria)}</span>
          <p class="expand-text"${comprimento(f.texto)}>${comAspas(f.texto)}</p>
          <div class="expand-foot">
            ${ehDitado(f) ? '<span></span>' : a.foto
              ? `<div class="expand-avatar" role="button" tabindex="0" data-ampliar-foto="${esc(a.nome)}" aria-label="Ampliar a fotografia de ${esc(a.nome)}">${quadro(a, 264)}</div>`
              : `<div class="expand-avatar">${quadro(a, 264)}</div>`}
            <div class="expand-ident-wrap">
              <div class="expand-ident"><span class="expand-author">${esc(nome)}</span>${a.papel && !ehDitado(f) ? `<span class="expand-src">${esc(a.papel)}</span>` : ''}</div>
              <dl class="quote-label">
                ${f.fonte ? `<dt>Obra</dt><dd><span class="obra">${esc(f.fonte)}</span>${f.status === 'A' ? '<span class="conferida">fonte conferida</span>' : ''}</dd>` : ''}
                ${f.original ? `<dt>Original</dt><dd><p class="quote-original"${lingua ? ` lang="${lingua}"` : ''}>${esc(f.original)}</p></dd>` : ''}
                ${a.foto ? `<dt>Imagem</dt><dd class="expand-src" style="font-style:normal">${esc(credito(a).replace(/^Imagem: /, ''))}</dd>` : ''}
              </dl>
              ${ehDitado(f) ? '' : `<div class="expand-links"><button class="expand-know" type="button">Saiba mais</button><button class="expand-know" type="button">Conhecer ${esc(a.nome)}</button></div>`}
            </div>
            <div class="expand-acts">
              <button class="expand-act" type="button" data-salvar aria-pressed="false" aria-label="Salvar frase nos favoritos">${coracao}</button>
              <button class="expand-act" type="button" aria-label="Escrever a partir desta frase">${balao}</button>
            </div>
          </div>
        </div>`;
    }
  };
  window.Sistema = { LONGA, comprimento, ehDitado, iniciais, quadro };
})();
