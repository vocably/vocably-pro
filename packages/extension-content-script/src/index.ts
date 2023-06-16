import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import '@webcomponents/custom-elements';
import { api, ApiConfigOptions, configureApi } from './api';
import { createButton, destroyButton } from './button';
import { destroyPopup } from './popup';
import { isValidSelection } from './selection';

type RegisterContentScriptOptions = {
  api: ApiConfigOptions;
};

const onMouseUp = async (event) => {
  try {
    await api.ping();
  } catch {
    return;
  }

  const selection = window.getSelection();
  if (!isValidSelection(selection)) {
    return;
  }
  await createButton(selection, event);
};

const onMouseDown = async () => {
  try {
    await api.ping();
  } catch {
    return;
  }

  destroyButton();
  destroyPopup();
};

export const registerContentScript = async (
  { api: apiOptions }: RegisterContentScriptOptions = { api: {} }
) => {
  configureApi(apiOptions);
  defineCustomElements();
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousedown', onMouseDown);
};
