export const maintainAppSize = () => {
  const appSize = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', window.innerHeight + 'px');
    doc.style.setProperty('--screen-width-px', window.innerWidth.toString());
    doc.style.setProperty('--screen-height-px', window.innerHeight.toString());
  };

  window.addEventListener('resize', appSize);
  appSize();
};
