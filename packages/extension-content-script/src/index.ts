import '@webcomponents/custom-elements';
import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import { createButton, destroyButton } from './button';
import { destroyPopup } from './popup';
import { ApiConfigOptions, configureApi } from './api';
import { isValidSelection } from './selection';

type RegisterContentScriptOptions = {
  api: ApiConfigOptions;
};

export const registerContentScript = async (
  { api: apiOptions }: RegisterContentScriptOptions = { api: {} }
) => {
  configureApi(apiOptions);

  defineCustomElements();

  document.addEventListener('mouseup', async (event) => {
    const selection = window.getSelection();
    if (!isValidSelection(selection)) {
      return;
    }
    await createButton(selection, event);
  });

  document.addEventListener('mousedown', async (event) => {
    destroyButton();
    destroyPopup();
  });
};
