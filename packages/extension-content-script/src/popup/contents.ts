import { api } from '../api';

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

    const analyze = (sourceLanguage?: string) => {
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

  const alert = document.createElement('vocably-alert');

  const updateAlertMessage = (isLoggedIn: boolean, isActive: boolean) => {
    if (!isLoggedIn) {
      alert.message = 'Please sign in to proceed with translation.';
      alert.cta = 'Sign In';
      return;
    }

    if (!isActive) {
      alert.message = 'Please subscribe to proceed with translation.';
      alert.cta = 'Subscribe';
    }
  };

  updateAlertMessage(isLoggedIn, isActive);

  alert.addEventListener('confirm', () => {
    const windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');

    windowProxy.focus();

    intervalId = setInterval(async () => {
      const [isLoggedIn, isActive] = await isAlright();
      if (isLoggedIn && isActive) {
        clearInterval(intervalId);
        intervalId = null;
        setTranslation();
        windowProxy.close();
      } else {
        updateAlertMessage(isLoggedIn, isActive);
      }
    }, 1000);
  });

  popup.innerHTML = '';
  popup.appendChild(alert);

  return tearDown;
};
