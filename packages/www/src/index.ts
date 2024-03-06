import { registerContentScript } from '@vocably/extension-content-script';
import { Result, TranslationCards } from '@vocably/model';
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
    analyze: (payload) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const result: Result<TranslationCards> = {
            success: true,
            value: {
              cards: [
                {
                  id: 'tVKa0',
                  created: 1646242718636,
                  data: {
                    language: 'nl',
                    source: 'gemaakt',
                    definition: 'als iets niet natuurlijk is of gebeurt',
                    translation: 'made',
                    partOfSpeech: 'adjective',
                    interval: 0,
                    repetition: 0,
                    eFactor: 2.5,
                    dueDate: 1646179200000,
                  },
                },
                {
                  id: 'Oqewl',
                  created: 1646242718636,
                  data: {
                    language: 'nl',
                    source: 'maken',
                    definition:
                      '* (iets dat nog niet bestond) laten ontstaan\n* (iets dat kapot is) zorgen dat het weer heel is',
                    translation: 'to make',
                    partOfSpeech: 'verb',
                    interval: 0,
                    repetition: 0,
                    eFactor: 2.5,
                    dueDate: 1646179200000,
                  },
                },
              ],
              source: 'gemaakt',
              translation: {
                source: 'gemaakt',
                sourceLanguage: 'nl',
                target: 'made',
                targetLanguage: 'en',
              },
            },
          };

          if (payload.sourceLanguage) {
            result.value.translation.sourceLanguage = payload.sourceLanguage;
          }

          resolve(result);
        }, Math.random() * 500);
      }),
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
    askForRating: () => {
      const askForRating = document.getElementById(
        'askForRating'
      ) as HTMLInputElement;
      return new Promise((resolve) => {
        if (askForRating.checked === false) {
          resolve(false);
          return;
        }

        setTimeout(() => resolve(true), 1000);
      });
    },
    saveAskForRatingResponse: () => Promise.resolve(null),
  },
  youTube: {
    ytHosts: ['https://www.youtube.com', 'https://m.youtube.com'],
  },
  contentScript: {
    isFeedbackEnabled: false,
  },
}).then();
