/* MeMotiva — app/15-inicializacao.js
   init(): primeira renderização. É chamada no último arquivo, depois de todas as fases.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   INICIALIZAÇÃO
   ================================================================ */
async function init() {
  await initTheme();
  await loadSession();
  await loadCommunityPosts();

  renderHeaderAuthArea();
  renderHeroStack();
  renderQuoteOfDay();
  renderCategoryGrid('catGridHome');
  renderStoriesGrid('storiesPreview', pickHomeStories(4));
  renderCommunityPreview();

  document.getElementById('statQuotes').textContent = QUOTES.length + '+';
  document.getElementById('statCats').textContent = CATEGORIES.length;
  document.getElementById('statAuthors').textContent = new Set(QUOTES.map((q) => q.author)).size + '+';

  initFase2();
  initFase3();
  prefetchStoryPhotos();
  navigateTo('home');
  observeReveals();
}
