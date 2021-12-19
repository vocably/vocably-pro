import { api } from './api';
import { applyPosition, applyTransform, Position } from './position';
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
      bottom: window.scrollY + rect.top,
    };
  }
};

export const createPopup = (phrase: string) => {
  const popup = document.createElement('vocably-popup');
  const translation = document.createElement('vocably-translation');

  popup.id = popupId;
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

  translation.phrase = window.getSelection().toString();

  popup.appendChild(translation);

  api.translate({ phrase }).then((translationResult) => {
    console.info('The word has been translated.', translationResult);
    translation.result = translationResult;
  });

  const position = calculatePosition();
  applyPosition(popup, position);
  applyTransform(popup, position);
};

export const destroyPopup = () => {
  const popup = document.getElementById(popupId);

  if (popup) {
    popup.remove();
  }
};
