import { defineCustomElements } from '@vocably/extension-content-ui';
import { calculatePopupPosition, getPopup, isTop } from './getPopup';

defineCustomElements();

const displayPopup = () => {
  const popup = getPopup();
  const selection = window.document.getSelection();

  if (!selection) {
    return;
  }

  const rect = selection.getRangeAt(0).getBoundingClientRect();
  const popupPosition = calculatePopupPosition(rect);
  popup.style.position = 'absolute';
  popup.style.transform = 'translateX(-50%)';
  popup.style.left = `${popupPosition.left}px`;
  if (isTop(popupPosition)) {
    popup.style.top = `${popupPosition.top}px`;
    popup.style.bottom = 'auto';
  } else {
    popup.style.bottom = `${popupPosition.bottom}px`;
    popup.style.top = 'auto';
  }
  popup.style.display = 'block';
};

const hidePopup = () => {
  const popup = getPopup();
  popup.style.display = 'none';
};

const getTranslationButton = (): HTMLElement => {
  const buttonId = 'translation-extension-button';
  let button = document.getElementById(buttonId);

  if (button) {
    return button;
  }

  button = document.createElement('vocably-button');
  button.id = buttonId;
  document.body.appendChild(button);

  button.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    event.preventDefault();
    displayPopup();
  });

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
  });

  button.addEventListener('mouseup', (event) => {
    event.stopPropagation();
    event.preventDefault();
    hideTranslationButton();
  });

  return button;
};

const hideTranslationButton = () => {
  const button = getTranslationButton();
  button.style.display = 'none';
};

type ShowTranslationIconOptions = {
  left: number;
  top: number;
};

const displayTranslationButton = ({
  left,
  top,
}: ShowTranslationIconOptions) => {
  const button = getTranslationButton();
  button.style.display = 'block';
  button.style.position = 'absolute';
  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
};

type ElementOffset = {
  left: number;
  top: number;
};
const getElementOffset = (element: HTMLElement): ElementOffset => {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};

document.addEventListener('mouseup', (event) => {
  const selection = window.getSelection();
  if (!selection || !selection.toString()) {
    return;
  }

  setTimeout(() => {
    const gtxIcon = document.getElementById('gtx-trans');
    if (gtxIcon) {
      const offset = getElementOffset(gtxIcon);
      displayTranslationButton({
        left: offset.left + 30,
        top: offset.top,
      });
    }
  }, 100);
});

document.addEventListener('click', () => {
  hideTranslationButton();
  hidePopup();
});
