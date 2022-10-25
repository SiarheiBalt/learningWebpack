function createAnalitics() {
  let counter = 0;
  let destroyed = false;

  const listener = () => counter++;
  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },
    getClick() {
      if (destroyed) {
        return `Analitics is destroyed`;
      }
      return counter;
    },
  };
}

window.analitics = createAnalitics();
