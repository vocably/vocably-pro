export const setYouTubeStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
  .vocably-word {
    cursor: pointer;
  }
  .vocably-word:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;
  document.head.appendChild(style);

  console.log('styles.ts');
};
