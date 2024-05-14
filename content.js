document.addEventListener('DOMContentLoaded', (event) => {
  const allowRightClickAndSelect = () => {
    document.addEventListener('contextmenu', (e) => e.stopPropagation(), true);
    document.addEventListener('selectstart', (e) => e.stopPropagation(), true);
    document.addEventListener('mousedown', (e) => e.stopPropagation(), true);
  };

  allowRightClickAndSelect();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => allowRightClickAndSelect());
  });

  observer.observe(document, { childList: true, subtree: true });
});
