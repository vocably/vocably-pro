import '@webcomponents/custom-elements';
import { defineCustomElements } from '@vocably/extension-content-ui';
import { createButton, destroyButton } from './button';
import { destroyPopup } from './popup';
import { api, ApiOptions, configureApi } from './api';

type RegisterContentScriptOptions = {
  api: ApiOptions;
};

export const registerContentScript = async ({
  api: apiOptions,
}: RegisterContentScriptOptions) => {
  configureApi(apiOptions);
  if (!(await api.isLoggedIn())) {
    return;
  }

  defineCustomElements();

  document.addEventListener('mouseup', async (event) => {
    const selection = window.getSelection();
    if (!selection || !selection.toString()) {
      return;
    }

    await createButton(selection.toString());
  });

  document.addEventListener('mousedown', async (event) => {
    destroyButton();
    destroyPopup();
  });
};
