import './fixAuth';
import { Auth } from '@aws-amplify/auth';
import {
  configureApi,
  translate,
  loadLanguageDeck,
  saveLanguageDeck,
} from '@vocably/api';
import {
  onIsLoggedInRequest,
  onTranslationRequest,
} from '@vocably/extension-messages';
import { createCards } from './createCards';

type RegisterServiceWorkerOptions = {
  auth: Parameters<typeof Auth.configure>[0];
  api: Parameters<typeof configureApi>[0];
};
export const registerServiceWorker = (
  registerServiceWorkerOptions: RegisterServiceWorkerOptions
) => {
  Auth.configure(registerServiceWorkerOptions.auth);
  configureApi(registerServiceWorkerOptions.api);

  onIsLoggedInRequest(async (sendResponse) => {
    console.info('Login check has been requested.');
    const isLoggedIn = await Auth.currentSession()
      .then(() => true)
      .catch(() => false);

    console.info(`The user is ${isLoggedIn ? 'logged in' : 'not logged in'}.`);
    return sendResponse(isLoggedIn);
  });

  onTranslationRequest(async (sendResponse, phrase) => {
    console.info(`Translation has been requested.`);
    try {
      const translationResult = await translate(phrase);
      console.info(`Translation has been requested.`, translationResult);

      if (translationResult.success === false) {
        return sendResponse(translationResult);
      }

      const loadLanguageDeckResult = await loadLanguageDeck(
        translationResult.value.language
      );
      console.info(`Cards loading has been requested.`, loadLanguageDeckResult);

      if (loadLanguageDeckResult.success === false) {
        return sendResponse(loadLanguageDeckResult);
      }

      const languageDeck = loadLanguageDeckResult.value;
      const cards = createCards(
        languageDeck.cards,
        phrase,
        translationResult.value
      );

      const saveCardsCollectionResult = await saveLanguageDeck(languageDeck);
      console.info(
        `Cards saving has been requested.`,
        saveCardsCollectionResult
      );

      if (saveCardsCollectionResult.success === false) {
        return sendResponse(saveCardsCollectionResult);
      }

      const value = {
        cards,
        direct: translationResult.value.text,
        language: translationResult.value.language,
      };

      console.info('And translation result is', value);

      return sendResponse({
        success: true,
        value,
      });
    } catch (e) {
      return sendResponse({
        success: false,
        errorCode: 'EXTENSION_SERVICE_WORKER_ERROR_CREATING_CARDS',
        reason: `An unexpected error has occurred during the cards creation in service worker.`,
        extra: e,
      });
    }
  });

  console.info('The service worker has been registered.');
};