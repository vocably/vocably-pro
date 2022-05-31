import './fixAuth';
import { Auth } from '@aws-amplify/auth';
import {
  configureApi,
  analyze,
  loadLanguageDeck,
  saveLanguageDeck,
  deleteLanguageDeck,
} from '@vocably/api';
import {
  onIsLoggedInRequest,
  onAnalyzeRequest,
  onCleanUpRequest,
  onIsActiveRequest,
  onPing,
  onPingExternal,
  onListLanguagesRequest,
  onIsEligibleForTrialRequest,
} from '@vocably/extension-messages';
import { createCards } from './createCards';
import { makeDelete } from '@vocably/crud';
import { get } from 'lodash-es';
import { addLanguage, getUserLanguages, removeLanguage } from './languageList';
import {
  isEligibleForTrial,
  Language,
  mapUserAttributes,
} from '@vocably/model';

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

  onIsActiveRequest(async (sendResponse) => {
    const user = await Auth.currentAuthenticatedUser().catch(() => false);

    if (!user) {
      return sendResponse(false);
    }

    return sendResponse(
      get(
        user,
        'signInUserSession.accessToken.payload.cognito:groups',
        []
      ).includes('paid')
    );
  });

  onIsEligibleForTrialRequest(async (sendResponse) => {
    const user = await Auth.currentAuthenticatedUser().catch(() => false);

    if (user === false) {
      return sendResponse(false);
    }

    const attributes = await Auth.userAttributes(user);

    const userData = mapUserAttributes({ user, attributes });
    return sendResponse(isEligibleForTrial(userData));
  });

  onAnalyzeRequest(async (sendResponse, payload) => {
    console.info(`Analyze has been requested.`);
    try {
      const analysis = await analyze(payload);
      console.info(`Analyze has returned data.`, analysis);

      if (analysis.success === false) {
        analysis.extra &&
          analysis.extra.body &&
          console.info('Backend error body', analysis.extra.body.toString());
        return sendResponse(analysis);
      }

      const loadLanguageDeckResult = await loadLanguageDeck(
        analysis.value.translation.sourceLanguage
      );
      console.info(`Cards loading has been requested.`, loadLanguageDeckResult);

      if (loadLanguageDeckResult.success === false) {
        return sendResponse(loadLanguageDeckResult);
      }

      const languageDeck = loadLanguageDeckResult.value;
      const cards = createCards(languageDeck.cards, payload, analysis.value);

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
        source: analysis.value.source,
        translation: analysis.value.translation,
      };

      console.info('And translation result is', value);

      addLanguage(value.translation.sourceLanguage);
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

  onCleanUpRequest(async (sendResponse, payload) => {
    console.info(`Clean up has been requested.`, payload);
    try {
      const loadLanguageDeckResult = await loadLanguageDeck(
        payload.translation.sourceLanguage
      );

      if (loadLanguageDeckResult.success === false) {
        return sendResponse(loadLanguageDeckResult);
      }

      const deck = loadLanguageDeckResult.value;

      const deleteCard = makeDelete(deck.cards);
      payload.cards.forEach((item) => deleteCard(item.id));

      if (deck.cards.length === 0) {
        console.info(`The entire deck will be deleted.`, payload);
        removeLanguage(deck.language as Language);
        return sendResponse(await deleteLanguageDeck(deck.language));
      }

      console.info(
        `${payload.cards.length} cards will be deleted from the deck.`,
        payload
      );
      return sendResponse(await saveLanguageDeck(deck));
    } catch (e) {
      return sendResponse({
        success: false,
        errorCode: 'EXTENSION_SERVICE_WORKER_ERROR_CLEANING_UP',
        reason: `An unexpected error has occurred during the cards clean up in service worker.`,
        extra: e,
      });
    }
  });

  onListLanguagesRequest(async (sendResponse) =>
    sendResponse(await getUserLanguages())
  );

  onPing((sendResponse) => {
    return sendResponse('pong');
  });

  onPingExternal((sendResponse) => {
    return sendResponse('pong');
  });

  console.info('The service worker has been registered.');
};
