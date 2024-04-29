import {
  AddCardPayload,
  GoogleLanguage,
  RateInteractionPayload,
  RemoveCardPayload,
} from '@vocably/model';
import { api } from '../api';
import { contentScriptConfiguration } from '../configuration';
import { detectExtensionPlatform } from '../detectExtensionPlatform';

type Options = {
  popup: HTMLElement;
  source: string;
  detectedLanguage: GoogleLanguage | undefined;
  context?: string;
};

export type TearDown = () => void;

const getLocaleLanguage = (): string => {
  if (!window?.navigator?.language) {
    return 'en';
  }

  return window.navigator.language.substring(0, 2);
};

export const setContents = async ({
  popup,
  source,
  detectedLanguage,
  context,
}: Options): Promise<TearDown> => {
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const tearDown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const setTranslation = async () => {
    const userKnowsHowToAdd = await api.isUserKnowsHowToAdd();
    const extensionPlatform = detectExtensionPlatform();
    const translation = document.createElement('vocably-translation');
    translation.isFeedbackEnabled =
      contentScriptConfiguration.isFeedbackEnabled;
    translation.phrase = source;
    translation.playSound = api.playSound;
    translation.showSaveHint = !userKnowsHowToAdd;
    translation.extensionPlatform = extensionPlatform;
    translation.canCongratulate =
      contentScriptConfiguration.allowFirstTranslationCongratulation &&
      !userKnowsHowToAdd;

    const analyze = (sourceLanguage?: GoogleLanguage) => {
      translation.loading = true;
      api
        .analyze({ source: source, sourceLanguage, context })
        .finally(() => {
          translation.loading = false;
        })
        .then(async (translationResult) => {
          if (translationResult.success === false) {
            console.error('Analyze error', translationResult);
          }

          if (contentScriptConfiguration.askForRatingEnabled) {
            api
              .askForRating({
                translationResult: translationResult,
                extensionPlatform: extensionPlatform.platform,
              })
              .then((result) => {
                translation.askForRating = result;
              });
          }

          translation.result = translationResult;
          if (translationResult.success === true) {
            translation.language =
              translationResult.value.translation.sourceLanguage;
          }

          const existingLanguagesResult = await api.listLanguages();
          translation.existingLanguages = existingLanguagesResult.success
            ? existingLanguagesResult.value
            : [];
        });
    };

    translation.addEventListener(
      'changeLanguage',
      ({ detail: language }: CustomEvent) => {
        if (translation.result && translation.result.success) {
          api.cleanUp(translation.result.value);
        }
        translation.language = language;
        analyze(language);
      }
    );

    translation.addEventListener(
      'removeCard',
      async ({ detail: payload }: CustomEvent<RemoveCardPayload>) => {
        translation.isUpdating = payload.card;
        translation.result = await api.removeCard(payload);
        translation.isUpdating = null;
        await api.setUserKnowsHowToAdd(true);
      }
    );

    translation.addEventListener(
      'addCard',
      async ({ detail: payload }: CustomEvent<AddCardPayload>) => {
        translation.isUpdating = payload.card;
        translation.result = await api.addCard(payload);
        translation.isUpdating = null;
        await api.setUserKnowsHowToAdd(true);
      }
    );

    translation.addEventListener(
      'ratingInteraction',
      async ({ detail: payload }: CustomEvent<RateInteractionPayload>) => {
        await api.saveAskForRatingResponse({
          extensionPlatform: extensionPlatform.platform,
          rateInteraction: payload,
        });
      }
    );

    analyze();

    popup.innerHTML = '';
    popup.appendChild(translation);
  };

  const isAlright = (): Promise<
    [boolean, boolean, GoogleLanguage | null, GoogleLanguage | null]
  > => {
    return Promise.all([
      api.isLoggedIn(),
      api.isActive(),
      api.getInternalSourceLanguage(),
      api.getInternalProxyLanguage(),
    ]);
  };

  const [isLoggedIn, isActive, internalSourceLanguage, internalTargetLanguage] =
    await isAlright();

  if (
    isLoggedIn &&
    isActive &&
    internalSourceLanguage &&
    internalTargetLanguage
  ) {
    await setTranslation();
    return tearDown;
  }

  const alert = document.createElement('div');

  const updateAlertMessage = async (
    isLoggedIn: boolean,
    isActive: boolean,
    internalSourceLanguage: GoogleLanguage | null,
    internalTargetLanguage: GoogleLanguage | null
  ) => {
    if (!isLoggedIn) {
      if (alert.dataset.message !== 'sign-in') {
        alert.dataset.message = 'sign-in';
        alert.innerHTML = '';
        const signInElement = document.createElement('vocably-sign-in');

        signInElement.addEventListener('confirm', () => {
          closeWindow();
          windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');
          windowProxy.focus();
        });

        alert.appendChild(signInElement);
      }
      return;
    }

    if (!isActive) {
      if (alert.dataset.message !== 'subscribe') {
        const isEligibleForTrial = await api.isEligibleForTrial();
        alert.dataset.message = 'subscribe';
        alert.innerHTML = '';
        const subscribeElement = document.createElement('vocably-subscribe');
        subscribeElement.trial = isEligibleForTrial;
        alert.appendChild(subscribeElement);
      }
      return;
    }

    if (!internalSourceLanguage || !internalTargetLanguage) {
      if (alert.dataset.message !== 'proxy-language') {
        alert.dataset.message = 'proxy-language';
        alert.innerHTML = '';
        const languageForm = document.createElement('vocably-language');
        languageForm.sourceLanguage =
          internalSourceLanguage ?? detectedLanguage;
        languageForm.targetLanguage =
          internalTargetLanguage ?? getLocaleLanguage();

        languageForm.addEventListener('confirm', async (event: CustomEvent) => {
          languageForm.waiting = true;
          const { sourceLanguage, targetLanguage } = event.detail;
          await Promise.all([
            api.setInternalSourceLanguage(sourceLanguage),
            api.setInternalProxyLanguage(targetLanguage),
          ]);
        });

        alert.appendChild(languageForm);
      }
    }
  };

  await updateAlertMessage(
    isLoggedIn,
    isActive,
    internalSourceLanguage,
    internalTargetLanguage
  );

  let windowProxy: WindowProxy | null = null;

  const closeWindow = () => {
    if (windowProxy !== null) {
      windowProxy.close();
      windowProxy = null;
    }
  };

  intervalId = setInterval(async () => {
    const [
      isLoggedIn,
      isActive,
      internalSourceLanguage,
      internalTargetLanguage,
    ] = await isAlright();
    if (
      isLoggedIn &&
      isActive &&
      internalSourceLanguage &&
      internalTargetLanguage
    ) {
      clearInterval(intervalId);
      intervalId = null;
      await setTranslation();
      setTimeout(closeWindow, 3000);
    } else {
      await updateAlertMessage(
        isLoggedIn,
        isActive,
        internalSourceLanguage,
        internalTargetLanguage
      );
    }
  }, 1000);

  popup.innerHTML = '';
  popup.appendChild(alert);

  return tearDown;
};
