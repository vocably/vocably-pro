import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import '@webcomponents/custom-elements';
import { api, ApiConfigOptions, configureApi } from './api';
import { createButton, destroyButton } from './button';
import {
  configureContentScript,
  contentScriptConfiguration,
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

  destroyButton();

  const selection = window.getSelection();
  if (!isValidSelection(selection)) {
    return;
  }

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

const enableSelectionChangeDetection = () => {
  if (!contentScriptConfiguration.displayMobileLookupButton) {
    return;
  }

  document.addEventListener('selectionchange', onTextSelect, false);
};

const disableSelectionChangeDetection = () =>
  document.removeEventListener('selectionchange', onTextSelect);

const onMouseUp = async (event) => {
  enableSelectionChangeDetection();

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
  disableSelectionChangeDetection();
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
    contentScript: {
      isFeedbackEnabled: false,
      askForRatingEnabled: false,
      displayMobileLookupButton: false,
    },
  }
) => {
  configureApi(apiOptions);
  defineCustomElements();
  initYoutube(youTubeOptions);
  configureContentScript(contentScript);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousedown', onMouseDown);

  enableSelectionChangeDetection();
};
