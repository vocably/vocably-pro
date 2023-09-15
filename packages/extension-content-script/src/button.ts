import { detectLanguage } from './detectLanguage';
import { getText } from './getText';
import { createPopup } from './popup';
import { getGlobalRect } from './position';
import {
  applyMaxZIndex,
  applyPosition,
  applyTransform,
  Position,
  setHorizontalDisplacement,
  setupTransform,
} from './styling';

const buttonId = 'translation-extension-button';

const considerGoogleTranslate = async (button: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const gtxIcon = document.getElementById('gtx-trans');
      if (gtxIcon) {
        gtxIcon.addEventListener('mouseup', (event) => {
          event.stopPropagation();
        });
        const rect = gtxIcon.getBoundingClientRect();
        setHorizontalDisplacement(button, rect.width + 3);
      }
      resolve();
    }, 100);
  });
};

const getPosition = (
  selection: Selection,
  event: MouseEvent
): Promise<Position | null> => {
  return new Promise<Position>((resolve) => {
    setTimeout(() => {
      if (selection.rangeCount === 0) {
        resolve(null);
        return;
      }

      const selectionRect = selection.getRangeAt(0).getBoundingClientRect();

      const left = window.scrollX + event.x;

      if ((selectionRect.bottom + selectionRect.top) / 2 > event.y) {
        resolve({
          left,
          bottom: selectionRect.top - 1 + window.scrollY,
        });
      } else {
        resolve({
          left,
          top: selectionRect.bottom + window.scrollY + 1,
        });
      }
    }, 100);
  });
};

const hide = (button: HTMLElement) => {
  button.style.display = 'none';
};

const show = (button: HTMLElement) => {
  button.style.display = 'block';
};

export const createButton = async (selection: Selection, event: MouseEvent) => {
  const button = document.createElement('vocably-button');
  button.id = buttonId;
  hide(button);
  document.body.appendChild(button);
  applyMaxZIndex(button);

  const popupOptions = {
    text: getText(selection),
    language: detectLanguage(selection),
    globalRect: getGlobalRect(selection.getRangeAt(0).getBoundingClientRect()),
  };

  button.addEventListener('click', () => {
    createPopup(popupOptions);
    destroyButton();
  });

  button.addEventListener('mousedown', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  button.addEventListener('mouseup', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  const position = await getPosition(selection, event);

  if (position === null) {
    destroyButton();
    return;
  }

  applyPosition(button, position);
  setupTransform(button);
  applyTransform(button, position);
  await considerGoogleTranslate(button);
  show(button);
};

export const destroyButton = () => {
  const button = document.getElementById(buttonId);

  if (button) {
    button.remove();
  }
};
