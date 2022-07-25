import { api } from '../api';
import { GoogleLanguage } from '@vocably/model';

type Options = {
  popup: HTMLElement;
  source: string;
};

export type TearDown = () => void;

export const setContents = async ({
  popup,
  source,
}: Options): Promise<TearDown> => {
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const tearDown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const setTranslation = () => {
    const translation = document.createElement('vocably-translation');
    translation.phrase = source;

    const analyze = (sourceLanguage?: GoogleLanguage) => {
      translation.loading = true;
      api
        .analyze({ source: source, sourceLanguage })
        .finally(() => {
          translation.loading = false;
        })
        .then(async (translationResult) => {
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

    analyze();

    popup.innerHTML = '';
    popup.appendChild(translation);
  };

  const isAlright = (): Promise<[boolean, boolean]> => {
    return Promise.all([api.isLoggedIn(), api.isActive()]);
  };

  const [isLoggedIn, isActive] = await isAlright();

  if (isLoggedIn && isActive) {
    setTranslation();
    return tearDown;
  }

  const alert = document.createElement('div');

  const updateAlertMessage = async (isLoggedIn: boolean, isActive: boolean) => {
    if (!isLoggedIn) {
      if (alert.dataset.message !== 'sign-in') {
        alert.dataset.message = 'sign-in';
        alert.innerHTML = '';
        alert.appendChild(document.createElement('vocably-sign-in'));
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
  };

  await updateAlertMessage(isLoggedIn, isActive);

  let windowProxy: WindowProxy | null = null;

  const closeWindow = () => {
    if (windowProxy !== null) {
      windowProxy.close();
      windowProxy = null;
    }
  };

  intervalId = setInterval(async () => {
    const [isLoggedIn, isActive] = await isAlright();
    if (isLoggedIn && isActive) {
      clearInterval(intervalId);
      intervalId = null;
      setTranslation();
      setTimeout(closeWindow, 3000);
    } else {
      await updateAlertMessage(isLoggedIn, isActive);
    }
  }, 1000);

  alert.addEventListener('confirm', () => {
    closeWindow();
    windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');
    windowProxy.focus();
  });

  popup.innerHTML = '';
  popup.appendChild(alert);

  return tearDown;
};
