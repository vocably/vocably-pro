import { createTranslationCards } from '@vocably/analysis-cards';
import { registerContentScript } from '@vocably/extension-content-script';
import { pingExternal } from '@vocably/extension-messages';
import {
  DirectAnalysis,
  DirectAnalyzePayload,
  GoogleLanguage,
  isGoogleLanguage,
  languageList,
} from '@vocably/model';
import Bowser from 'bowser';
import { environment } from '../environment.js';

const browserLanguage = navigator.language.substring(0, 2);
const browser = Bowser.getParser(window.navigator.userAgent);

const letUsersToTryTheExtension = async () => {
  if (!browser.satisfies({ desktop: { chrome: '>0' } })) {
    return;
  }

  let browserGoogleLanguage = isGoogleLanguage(browserLanguage)
    ? browserLanguage
    : 'en';

  const extensionId = browser.satisfies({
    macos: {
      safari: '>10.1',
    },
  })
    ? environment.safariExtensionId
    : environment.chromeExtensionId;

  let extensionInstalled = false;

  try {
    const result = await pingExternal(extensionId);
    extensionInstalled = result === 'pong';
  } catch (e) {}

  if (extensionInstalled === true) {
    return;
  }

  const translationLanguageElement = document.getElementById(
    'translationLanguage'
  ) as HTMLSelectElement;

  Object.entries(languageList).forEach(([languageCode, languageName]) => {
    const option = document.createElement('option');
    option.value = languageCode;
    option.text = languageName;
    translationLanguageElement.add(option);
  });

  translationLanguageElement.value = browserGoogleLanguage;

  translationLanguageElement.addEventListener('change', () => {
    browserGoogleLanguage = translationLanguageElement.value as GoogleLanguage;
  });

  const encourageElement = document.getElementById('encourageToTry');
  encourageElement.classList.remove('d-none');

  await registerContentScript({
    api: {
      appBaseUrl: environment,
      isLoggedIn: async () => true,
      getInternalProxyLanguage: async () => browserGoogleLanguage,
      setInternalProxyLanguage: async () => {},
      getInternalSourceLanguage: async () => 'en',
      setInternalSourceLanguage: async () => {},
      isActive: async () => true,
      isEligibleForTrial: async () => true,
      analyze: async (payload) => {
        const wwwPayload: DirectAnalyzePayload = {
          ...payload,
          sourceLanguage: 'en',
          targetLanguage: browserGoogleLanguage,
        };
        const analyzeResponse = await fetch(
          `${environment.apiBaseUrl}/analyze?${new URLSearchParams(
            wwwPayload
          ).toString()}`
        );

        if (!analyzeResponse.ok) {
          return {
            success: false,
            errorCode: 'WWW_ANALYZE_REQUEST_NOT_OK',
            reason: 'The analyze request has ended up with an error.',
            extra: await analyzeResponse.text(),
          };
        }

        try {
          const analysis: DirectAnalysis = await analyzeResponse.json();

          return {
            success: true,
            value: {
              source: analysis.source,
              translation: analysis.translation,
              cards: createTranslationCards([], wwwPayload, analysis),
            },
          };
        } catch (e) {
          return {
            success: false,
            errorCode: 'WWW_ANALYZE_RESPONSE_INVALID_JSON',
            reason: 'Unable to convert JSON values from the analyze response.',
            extra: e,
          };
        }
      },
      // @ts-ignore
      addCard: async (payload) => {},
      // @ts-ignore
      removeCard: async (payload) => {},
      cleanUp: () => Promise.resolve({ success: true, value: null }),
      ping: () => Promise.resolve('pong'),
      listLanguages: () => Promise.resolve({ success: true, value: [] }),
      isUserKnowsHowToAdd: async () => true,
      setUserKnowsHowToAdd: async (value) => {},
      playSound: (payload) =>
        Promise.resolve({
          success: true,
          value: {
            url: `https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3`,
          },
        }),
      askForRating: async () => false,
      saveAskForRatingResponse: () => Promise.resolve(null),
    },
    youTube: {
      ytHosts: ['https://www.youtube.com', 'https://m.youtube.com'],
    },
    contentScript: {
      isFeedbackEnabled: false,
      isPreview: true,
    },
  });
};

letUsersToTryTheExtension().then();
