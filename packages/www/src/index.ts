import { createTranslationCards } from '@vocably/analysis-cards';
import { registerContentScript } from '@vocably/extension-content-script';
import { DirectAnalysis, DirectAnalyzePayload } from '@vocably/model';
import { environment } from '../environment.js';

registerContentScript({
  api: {
    appBaseUrl: environment,
    isLoggedIn: async () => true,
    getInternalProxyLanguage: async () => 'ru',
    setInternalProxyLanguage: async () => {
      // @ts-ignore
      document.getElementById('hasProxyLanguage').checked = true;
    },
    getInternalSourceLanguage: async () => 'en',
    setInternalSourceLanguage: async () => {
      // @ts-ignore
      document.getElementById('hasProxyLanguage').checked = true;
    },
    isActive: async () => true,
    isEligibleForTrial: async () => true,
    analyze: async (payload) => {
      const wwwPayload: DirectAnalyzePayload = {
        ...payload,
        sourceLanguage: 'en',
        targetLanguage: 'ru',
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
    addCard: async (payload) => window.alert('Add'),
    // @ts-ignore
    removeCard: async (payload) => {},
    cleanUp: () => Promise.resolve({ success: true, value: null }),
    ping: () => Promise.resolve('pong'),
    listLanguages: () =>
      Promise.resolve({ success: true, value: ['ar', 'nl'] }),
    isUserKnowsHowToAdd: async () => true,
    setUserKnowsHowToAdd: async (value) => {},
    playSound: (payload) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            value: {
              url: `https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3`,
            },
          });
        }, 3000);
      });
    },
    askForRating: async () => false,
    saveAskForRatingResponse: () => Promise.resolve(null),
  },
  youTube: {
    ytHosts: ['https://www.youtube.com', 'https://m.youtube.com'],
  },
  contentScript: {
    isFeedbackEnabled: false,
  },
}).then();
