import { api } from './api';
import {
  applyPosition,
  applyTransform,
  Position,
  setupTransform,
} from './position';
import { applyMaxZIndex } from './zIndex';

let popup: HTMLElement;
let resizeObserver: ResizeObserver;

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
  popup = document.createElement('vocably-popup');
  const translation = document.createElement('vocably-translation');

  applyMaxZIndex(popup);

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
  setupTransform(popup);

  resizeObserver = new ResizeObserver(() => {
    applyTransform(popup, position);
  });
  resizeObserver.observe(popup);
};

export const destroyPopup = () => {
  if (popup) {
    popup.remove();
  }

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
};
