import { applyPosition, Position } from './position';

const popupId = 'translation-extension-popup';

const calculatePosition = (): Position => {
  const selection = window.document.getSelection();
  const rect = selection.getRangeAt(0).getBoundingClientRect();

  const left = window.scrollX + rect.left + rect.width / 2;

  if (rect.bottom < window.innerHeight / 2) {
    return {
      left,
      top: window.scrollY + rect.bottom,
    };
  } else {
    return {
      left,
      bottom: window.innerHeight - rect.top - window.scrollY,
    };
  }
};

export const createPopup = () => {
  const popup = document.createElement('vocably-popup');
  popup.id = popupId;
  popup.style.transform = 'translateX(-50%)';
  document.body.appendChild(popup);

  popup.addEventListener('mousedown', (event) => {
    event.stopPropagation();
  });

  popup.addEventListener('mouseup', (event) => {
    event.stopPropagation();
  });

  popup.addEventListener('close', () => {
    destroyPopup();
  });

  popup.phrase = window.getSelection().toString();

  const position = calculatePosition();
  applyPosition(popup, position);
};

export const destroyPopup = () => {
  const popup = document.getElementById(popupId);

  if (popup) {
    popup.remove();
  }
};
