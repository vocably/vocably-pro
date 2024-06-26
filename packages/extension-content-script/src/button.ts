import { applyButtonPosition } from './button/applyButtonPosition';
import { contextLanguages } from './contextLanguages';
import { detectLanguage } from './detectLanguage';
import { getContext } from './getContext';
import { getText } from './getText';
import { createPopup } from './popup';
import { getGlobalRect } from './position';
import {
  applyMaxZIndex,
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

export const createButton = async (
  selection: Selection,
  event: MouseEvent | null = null
) => {
  const isTouchscreen = event === null;
  const button = document.createElement(
    isTouchscreen ? 'vocably-mobile-button' : 'vocably-button'
  );
  button.id = buttonId;
  hide(button);
  document.body.appendChild(button);
  applyMaxZIndex(button);

  const detectedLanguage = await detectLanguage(selection);
  const context =
    detectedLanguage && contextLanguages.includes(detectedLanguage)
      ? getContext(selection)
      : undefined;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    createPopup({
      detectedLanguage,
      text: getText(selection),
      context: context,
      globalRect: getGlobalRect(
        selection.getRangeAt(0).getBoundingClientRect()
      ),
      isTouchscreen: isTouchscreen,
    });
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

  const position: Position = event
    ? await getPosition(selection, event)
    : {
        left: window.scrollX + window.innerWidth / 2,
        bottom: window.scrollY + window.innerHeight - 96,
      };

  if (position === null) {
    destroyButton();
    return;
  }

  applyButtonPosition({ element: button, position, isTouchscreen });
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
