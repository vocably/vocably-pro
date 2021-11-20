import { applyPosition, Position } from './position';
import { createPopup } from './popup';

const buttonId = 'translation-extension-button';

const getPosition = (): Promise<Position> => {
  return new Promise<Position>((resolve) => {
    setTimeout(() => {
      const gtxIcon = document.getElementById('gtx-trans');
      if (gtxIcon) {
        gtxIcon.addEventListener('mouseup', (event) => {
          event.stopPropagation();
        });
        const rect = gtxIcon.getBoundingClientRect();

        resolve({
          left: rect.right + window.scrollX + 3,
          top: rect.top + window.scrollY,
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

export const createButton = async () => {
  const button = document.createElement('vocably-button');
  button.id = buttonId;
  hide(button);
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    createPopup();
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

  const position = await getPosition();
  applyPosition(button, position);
  show(button);
};

export const destroyButton = () => {
  const button = document.getElementById(buttonId);

  if (button) {
    button.remove();
  }
};
