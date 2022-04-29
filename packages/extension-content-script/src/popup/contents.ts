import { api } from '../api';
import { Language } from '@vocably/model';

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

    const analyze = (sourceLanguage?: Language) => {
      translation.loading = true;
      api
        .analyze({ source: source, sourceLanguage })
        .finally(() => {
          translation.loading = false;
        })
        .then((translationResult) => {
          console.info('The word has been translated.', translationResult);
          translation.result = translationResult;
        });
    };

    translation.addEventListener(
      'language',
      ({ detail: language }: CustomEvent) => {
        if (translation.result && translation.result.success) {
          api.cleanUp(translation.result.value);
        }
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

  const updateAlertMessage = (isLoggedIn: boolean, isActive: boolean) => {
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
        alert.dataset.message = 'subscribe';
        alert.innerHTML = '';
        alert.appendChild(document.createElement('vocably-subscribe'));
      }
      return;
    }
  };

  updateAlertMessage(isLoggedIn, isActive);

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
      updateAlertMessage(isLoggedIn, isActive);
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
