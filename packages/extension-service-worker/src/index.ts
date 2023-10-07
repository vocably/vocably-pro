import { Auth } from '@aws-amplify/auth';
import {
  analyze,
  configureApi,
  deleteLanguageDeck,
  loadLanguageDeck,
  saveLanguageDeck,
} from '@vocably/api';
import { makeDelete } from '@vocably/crud';
import {
  onAddCardRequest,
  onAnalyzeRequest,
  onCleanUpRequest,
  onGetInternalProxyLanuage,
  onGetInternalSourceLanguage,
  onGetProxyLanguage,
  onIsActiveRequest,
  onIsEligibleForTrialRequest,
  onIsLoggedInRequest,
  onListLanguagesRequest,
  onPing,
  onPingExternal,
  onRemoveCardRequest,
  onSetInternalProxyLanguage,
  onSetInternalSourceLanguage,
  onSetProxyLanguage,
} from '@vocably/extension-messages';
import {
  GoogleLanguage,
  isCardItem,
  isEligibleForTrial,
  mapUserAttributes,
} from '@vocably/model';
import { get } from 'lodash-es';
import { createCards } from './createCards';
import './fixAuth';
import { addLanguage, getUserLanguages, removeLanguage } from './languageList';
import { getProxyLanguage, setProxyLanguage } from './proxyLanguage';
import { getSourceLanguage, setSourceLanguage } from './sourceLanguage';

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
    const analyzePayload = {
      ...payload,
      sourceLanguage:
        payload.sourceLanguage ?? (await getSourceLanguage()) ?? undefined,
      targetLanguage: (await getProxyLanguage()) ?? 'en',
    };

    if (payload.sourceLanguage) {
      await setSourceLanguage(payload.sourceLanguage);
    }

    try {
      const analysis = await analyze(analyzePayload);
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
      const cards = createCards(
        languageDeck.cards,
        analyzePayload,
        analysis.value
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

  onRemoveCardRequest(async (sendResponse, payload) => {
    return sendResponse({
      success: true,
      value: payload.translationCards,
    });
  });

  onAddCardRequest(async (sendResponse, payload) => {
    return sendResponse({
      success: true,
      value: payload.translationCards,
    });
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
      payload.cards.forEach((item) => {
        if (isCardItem(item)) {
          deleteCard(item.id);
        }
      });

      if (deck.cards.length === 0) {
        console.info(`The entire deck will be deleted.`, payload);
        removeLanguage(deck.language as GoogleLanguage);
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

  onGetInternalProxyLanuage(async (sendResponse) => {
    return sendResponse(await getProxyLanguage());
  });

  onSetInternalProxyLanguage(async (sendResponse, language) => {
    await setProxyLanguage(language);
    return sendResponse();
  });

  onGetInternalSourceLanguage(async (sendResponse) => {
    return sendResponse(await getSourceLanguage());
  });

  onSetInternalSourceLanguage(async (sendResponse, language) => {
    await setSourceLanguage(language);
    return sendResponse();
  });

  onGetProxyLanguage(async (sendResponse) => {
    return sendResponse(await getProxyLanguage());
  });

  onSetProxyLanguage(async (sendResponse, language) => {
    await setProxyLanguage(language);
    return sendResponse();
  });

  console.info('The service worker has been registered.');
};
