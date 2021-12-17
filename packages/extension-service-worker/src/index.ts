import { Auth } from '@aws-amplify/auth';
import { configureApi, translate, loadCards, storeCards } from '@vocably/api';
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
    const isLoggedIn = await Auth.currentSession()
      .then(() => true)
      .catch(() => false);

    return sendResponse(isLoggedIn);
  });

  onTranslationRequest(async (sendResponse, phrase) => {
    try {
      const translationResult = await translate(phrase);

      if (translationResult.success === false) {
        return sendResponse(translationResult);
      }

      const languageCardsResult = await loadCards(
        translationResult.value.language
      );

      if (languageCardsResult.success === false) {
        return sendResponse(languageCardsResult);
      }

      const collection = languageCardsResult.value;
      const cards = createCards(collection, phrase, translationResult.value);

      const saveCardsCollectionResult = await storeCards(
        translationResult.value.language,
        collection
      );

      if (saveCardsCollectionResult.success === false) {
        return sendResponse(saveCardsCollectionResult);
      }

      return sendResponse({
        success: true,
        value: {
          cards,
          direct: translationResult.value.text,
          language: translationResult.value.language,
        },
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
};
