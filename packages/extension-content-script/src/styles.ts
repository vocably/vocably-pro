export const youtubeHighlightDuration = 50;

const primary = `#0050ff`;
const darkPrimary = `#28a5ff`;

export const setYouTubeStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
  .vocably-word {
    cursor: pointer;
    display: inline-block;
    position: relative;
    z-index: 0;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${primary};
      box-shadow: -2px 0 0 ${primary}, 2px 0 0 ${primary};
      content: '';
      border-radius: 8px;
      z-index: -1;
      opacity: 0;
      transform: scale(50%);
      transition: all 100ms ease-in-out;
    }

    &:hover {
      color: white;

      &::before {
        opacity: 1;
        transform: scale(100%);
      }
    }
  }

  .vocably-selectable-captions .ytp-caption-segment {
    transition: text-shadow ${youtubeHighlightDuration}ms ease-in-out;
  }
  .vocably-selectable-captions-highlighted .ytp-caption-segment {
    text-shadow: 0 0 5px ${darkPrimary}, 0 0 10px ${darkPrimary}, 0 0 20px ${darkPrimary},
      0 0 40px ${darkPrimary} !important;
  }
`;
  document.head.appendChild(style);
};
