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

  popup.phrase = window.getSelection().toString();

  api.translate({ phrase }).then((translation) => {
    console.info('The word has been translated.', translation);

    if (translation.success === true) {
      popup.meaning = translation.value.direct;
    }
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
