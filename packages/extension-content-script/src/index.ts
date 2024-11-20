import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import '@webcomponents/custom-elements';
import { map, merge, Subject, take, timer } from 'rxjs';
import { api, ApiConfigOptions, configureApi } from './api';
import { browser } from './browser';
import { browserEnv } from './browserEnv';
import { createButton, destroyButton } from './button';
import {
  configureContentScript,
  contentScriptConfiguration,
  ContentScriptConfiguration,
} from './configuration';
import { contextLanguages } from './contextLanguages';
import { detectLanguage } from './detectLanguage';
import { getContext } from './getContext';
import { getText } from './getText';
import { createPopup, destroyAllOverlays } from './popup';
import { getGlobalRect } from './position';
import { isValidSelection } from './selection';
import { initYoutube, InitYouTubeOptions } from './youtube';

type RegisterContentScriptOptions = {
  api: ApiConfigOptions;
  youTube: InitYouTubeOptions;
  contentScript: Partial<ContentScriptConfiguration>;
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

const isClickableElement = (element: HTMLElement) => {
  if (
    ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'VOCABLY-POPUP'].includes(
      element.tagName
    )
  ) {
    return true;
  }

  if (element.parentElement) {
    return isClickableElement(element.parentElement);
  }

  return false;
};

const doubleClick$ = new Subject<void>();

const onMouseUp = async (event: MouseEvent) => {
  console.log('mouseup');
  if (isClickableElement(event.target as HTMLElement)) {
    return;
  }

  enableSelectionChangeDetection();

  try {
    console.log('awaiting ping');
    await api.ping();
    console.log('pong');
  } catch {
    return;
  }

  destroyButton();

  const selection = window.getSelection();
  if (!isValidSelection(selection)) {
    return;
  }

  merge(doubleClick$.pipe(map(() => true)), timer(50).pipe(map(() => false)))
    .pipe(take(1))
    .subscribe(async (doubleClick) => {
      if (doubleClick) {
        return;
      }

      const settings = await api.getSettings();
      // This is the attempt to make the "Double click" functionality
      // work in Lemur browser on Android.
      // The mouse event is not trusted in Lemur on Android.
      if (
        event.isTrusted === false &&
        browser.getOS().name === 'Android' &&
        settings.showOnDoubleClick
      ) {
        destroyAllOverlays();
        await showOnDbClick({ isTouchscreen: true })();
      }

      if (!settings.hideSelectionButton) {
        await createButton(selection, event);
      }
    });
};

type AutoShowOptions = {
  isTouchscreen: boolean;
};

const showOnDbClick = (options: AutoShowOptions) => async () => {
  const settings = await api.getSettings();
  if (!settings.showOnDoubleClick) {
    return;
  }

  doubleClick$.next();

  await showPopup(options);
};

const showPopup = async (options: AutoShowOptions) => {
  const selection = window.getSelection();
  if (!isValidSelection(selection)) {
    return;
  }

  const detectedLanguage = await detectLanguage(selection);
  const context =
    detectedLanguage && contextLanguages.includes(detectedLanguage)
      ? getContext(selection)
      : undefined;

  await createPopup({
    detectedLanguage,
    text: getText(selection),
    context: context,
    globalRect: getGlobalRect(selection.getRangeAt(0).getBoundingClientRect()),
    isTouchscreen: options.isTouchscreen,
  });
};

const onMouseDown = async (event: MouseEvent) => {
  if (isClickableElement(event.target as HTMLElement)) {
    return;
  }

  disableSelectionChangeDetection();
  try {
    await api.ping();
  } catch {
    return;
  }

  destroyButton();
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
      allowFirstTranslationCongratulation: false,
    },
  }
) => {
  configureApi(apiOptions);
  defineCustomElements();
  initYoutube(youTubeOptions);
  configureContentScript(contentScript);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousedown', onMouseDown);

  document.addEventListener(
    'dblclick',
    showOnDbClick({ isTouchscreen: false })
  );

  browserEnv.runtime?.onMessage?.addListener((request) => {
    if (request && request.action === 'contextMenuTranslateClicked') {
      showPopup({ isTouchscreen: false });
    }
  });

  enableSelectionChangeDetection();
};
