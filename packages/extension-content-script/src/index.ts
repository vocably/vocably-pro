import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import '@webcomponents/custom-elements';
import { api, ApiConfigOptions, configureApi } from './api';
import { createButton, destroyButton } from './button';
import {
  configureContentScript,
  ContentScriptConfiguration,
} from './configuration';
import { destroyPopup } from './popup';
import { isValidSelection } from './selection';
import { initYoutube, InitYouTubeOptions } from './youtube';

type RegisterContentScriptOptions = {
  api: ApiConfigOptions;
  youTube: InitYouTubeOptions;
  contentScript: ContentScriptConfiguration;
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
  {
    api: apiOptions,
    youTube: youTubeOptions,
    contentScript,
  }: RegisterContentScriptOptions = {
    api: {},
    youTube: { ytHosts: ['www.youtube.com'] },
    contentScript: { isFeedbackEnabled: true },
  }
) => {
  configureApi(apiOptions);
  defineCustomElements();
  initYoutube(youTubeOptions);
  configureContentScript(contentScript);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousedown', onMouseDown);
};
