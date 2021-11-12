import '@webcomponents/custom-elements';
import { defineCustomElements } from '@vocably/extension-content-ui';
import { createButton, destroyButton } from './button';
import { destroyPopup } from './popup';

defineCustomElements();

document.addEventListener('mouseup', async (event) => {
  const selection = window.getSelection();
  if (!selection || !selection.toString()) {
    return;
  }

  await createButton();
});

document.addEventListener('mousedown', async (event) => {
  destroyButton();
  destroyPopup();
});
