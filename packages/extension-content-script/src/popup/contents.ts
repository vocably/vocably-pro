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

  if (await api.isLoggedIn()) {
    setTranslation();
    return tearDown;
  }

  const unauthorized = document.createElement('vocably-unauthorized');

  unauthorized.addEventListener('signIn', () => {
    const windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');

    windowProxy.focus();

    intervalId = setInterval(async () => {
      if (await api.isLoggedIn()) {
        setTranslation();
        clearInterval(intervalId);
        intervalId = null;
        windowProxy.close();
      }
    }, 1000);
  });

  popup.innerHTML = '';
  popup.appendChild(unauthorized);

  return tearDown;
};
