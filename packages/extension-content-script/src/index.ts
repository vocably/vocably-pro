import { defineCustomElements } from '@vocably/extension-content-ui';

defineCustomElements();

const getTranslationButton = (): HTMLElement => {
  const buttonId = 'translation-extension-button';
  let button = document.getElementById(buttonId);

  if (button) {
    return button;
  }

  button = document.createElement('vocably-button');
  button.id = buttonId;
  button.style.position = 'absolute';
  document.body.appendChild(button);
  return button;
};

const hideTranslationIcon = (translationIcon: HTMLElement) => {
  translationIcon.style.display = 'none';
};

type ShowTranslationIconOptions = {
  translationIcon: HTMLElement;
  left: number;
  top: number;
};

const showTranslationIcon = ({
  translationIcon,
  left,
  top,
}: ShowTranslationIconOptions) => {
  translationIcon.style.display = 'block';
  translationIcon.style.left = `${left}px`;
  translationIcon.style.top = `${top}px`;
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
  const translationIcon = getTranslationButton();

  const selection = window.getSelection();
  if (!selection || !selection.toString()) {
    hideTranslationIcon(translationIcon);
    return;
  }

  const selectedText = selection.toString();

  setTimeout(() => {
    const gtxIcon = document.getElementById('gtx-trans');
    if (gtxIcon) {
      const offset = getElementOffset(gtxIcon);
      showTranslationIcon({
        translationIcon,
        left: offset.left + 30,
        top: offset.top,
      });
    }
  }, 100);
});
