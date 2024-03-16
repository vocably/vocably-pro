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

const onCreateSelectionTimeout = async () => {
  try {
    await api.ping();
  } catch {
    return;
  }

  const selection = window.getSelection();
  if (!isValidSelection(selection)) {
    return;
  }
  destroyButton();
  await createButton(selection);
};

let createSelectionTimeout: ReturnType<typeof setTimeout> | null = null;

const onTextSelect = async () => {
  if (createSelectionTimeout) {
    clearTimeout(createSelectionTimeout);
    createSelectionTimeout = null;
  }

  createSelectionTimeout = setTimeout(onCreateSelectionTimeout, 500);
};

const onMouseUp = async (event) => {
  document.addEventListener('selectionchange', onTextSelect, false);
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
  document.removeEventListener('selectionchange', onTextSelect);
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
    contentScript: { isFeedbackEnabled: false, askForRatingEnabled: false },
  }
) => {
  configureApi(apiOptions);
  defineCustomElements();
  initYoutube(youTubeOptions);
  configureContentScript(contentScript);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('selectionchange', onTextSelect, false);
};
