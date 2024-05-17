import { Auth } from '@aws-amplify/auth';
import {
  analyze,
  configureApi,
  deleteLanguageDeck,
  loadLanguageDeck,
  playSound,
  saveLanguageDeck,
} from '@vocably/api';
import { makeCreate, makeDelete } from '@vocably/crud';
import {
  onAddCardRequest,
  onAnalyzeRequest,
  onAskForRating,
  onCleanUpRequest,
  onGetInternalProxyLanuage,
  onGetInternalSourceLanguage,
  onGetProxyLanguage,
  onGetSourceLanguage,
  onIsActiveRequest,
  onIsEligibleForTrialRequest,
  onIsLoggedInRequest,
  onIsUserKnowsHowToAdd,
  onListLanguagesRequest,
  onListTargetLanguagesRequest,
  onPing,
  onPingExternal,
  onPlaySound,
  onRemoveCardRequest,
  onSaveAskForRatingResponse,
  onSetInternalProxyLanguage,
  onSetInternalSourceLanguage,
  onSetProxyLanguage,
  onSetSourceLanguage,
  onSetUserKnowsHowToAdd,
} from '@vocably/extension-messages';
import {
  Analysis,
  AnalyzePayload,
  GoogleLanguage,
  isCardItem,
  isEligibleForTrial,
  LanguageDeck,
  mapUserAttributes,
  Result,
} from '@vocably/model';
import { get, isEqual } from 'lodash-es';
import {
  getAskForRatingCounter,
  resetAskForRatingCounter,
  storeAskForRatingCounter,
} from './askForRatingCounter';
import { browserEnv } from './browserEnv';
import { createTranslationCards } from './createTranslationCards';
import './fixAuth';
import { addLanguage, getUserLanguages, removeLanguage } from './languageList';
import { getLanguagePair } from './selectedLanguage/languagePairs';
import {
  getProxyLanguage,
  setProxyLanguage,
} from './selectedLanguage/proxyLanguage';
import {
  getSourceLanguage,
  setSourceLanguage,
} from './selectedLanguage/sourceLanguage';
import {
  getUserMetadata,
  invalidateUserMetadata,
  saveUserMetadata,
} from './userMetadata';

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

  const getAnalysisAndCards = async (
    analyzePayload: AnalyzePayload
  ): Promise<[Result<Analysis>, Result<LanguageDeck>]> => {
    if (analyzePayload.sourceLanguage) {
      return Promise.all([
        analyze(analyzePayload),
        loadLanguageDeck(analyzePayload.sourceLanguage),
      ]);
    }

    const analysisResult = await analyze(analyzePayload);
    if (analysisResult.success === false) {
      return [
        analysisResult,
        {
          success: false,
          errorCode: 'LANGUAGE_DECK_LOAD_ERROR',
          reason: `The language deck can't be loaded because the source language is not specified and can't be detected.`,
        },
      ];
    }

    return [
      analysisResult,
      await loadLanguageDeck(analysisResult.value.translation.sourceLanguage),
    ];
  };

  onAnalyzeRequest(async (sendResponse, payload) => {
    if (payload.sourceLanguage) {
      await setSourceLanguage(payload.sourceLanguage);
    }

    if (payload.targetLanguage) {
      await setProxyLanguage(payload.targetLanguage);
    }

    const analyzePayload = {
      ...payload,
      sourceLanguage:
        payload.sourceLanguage ?? (await getSourceLanguage()) ?? 'en',
      targetLanguage:
        payload.targetLanguage ?? (await getProxyLanguage()) ?? 'en',
    };

    try {
      const [analysisResult, loadLanguageDeckResult] =
        await getAnalysisAndCards(analyzePayload);

      if (analysisResult.success === false) {
        analysisResult.extra &&
          analysisResult.extra.body &&
          console.info(
            'Backend error body',
            analysisResult.extra.body.toString()
          );
        return sendResponse(analysisResult);
      }

      if (loadLanguageDeckResult.success === false) {
        return sendResponse(loadLanguageDeckResult);
      }

      const languageDeck = loadLanguageDeckResult.value;
      const cards = createTranslationCards(
        languageDeck.cards,
        analyzePayload,
        analysisResult.value
      );

      const value = {
        cards,
        source: analysisResult.value.source,
        translation: analysisResult.value.translation,
      };

      addLanguage(value.translation.sourceLanguage);
      return sendResponse({
        success: true,
        value,
      });
    } catch (e) {
      console.error('Cards creation error', e);

      return sendResponse({
        success: false,
        errorCode: 'EXTENSION_SERVICE_WORKER_ERROR_CREATING_CARDS',
        reason: `An unexpected error has occurred during the cards creation in service worker.`,
        extra: e,
      });
    }
  });

  onRemoveCardRequest(async (sendResponse, payload) => {
    const getLanguageDeckResult = await loadLanguageDeck(
      payload.translationCards.translation.sourceLanguage
    );

    if (getLanguageDeckResult.success === false) {
      return sendResponse(getLanguageDeckResult);
    }

    makeDelete(getLanguageDeckResult.value.cards)(payload.card.id);

    const saveLanguageDeckResult = await saveLanguageDeck(
      getLanguageDeckResult.value
    );

    if (saveLanguageDeckResult.success === false) {
      return sendResponse(saveLanguageDeckResult);
    }

    return sendResponse({
      success: true,
      value: {
        ...payload.translationCards,
        cards: payload.translationCards.cards.map((item) =>
          isEqual(item, payload.card)
            ? {
                data: item.data,
              }
            : item
        ),
      },
    });
  });

  onAddCardRequest(async (sendResponse, payload) => {
    const getLanguageDeckResult = await loadLanguageDeck(
      payload.translationCards.translation.sourceLanguage
    );

    if (getLanguageDeckResult.success === false) {
      return sendResponse(getLanguageDeckResult);
    }

    const addedCard = makeCreate(getLanguageDeckResult.value.cards)(
      payload.card.data
    );

    const saveLanguageDeckResult = await saveLanguageDeck(
      getLanguageDeckResult.value
    );

    if (saveLanguageDeckResult.success === false) {
      return sendResponse(saveLanguageDeckResult);
    }

    return sendResponse({
      success: true,
      value: {
        ...payload.translationCards,
        cards: payload.translationCards.cards.map((item) =>
          isEqual(item, payload.card) ? addedCard : item
        ),
      },
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

  onListTargetLanguagesRequest(async (sendResponse) => {
    const sourceLanguage = await getSourceLanguage();
    const languagePair = getLanguagePair(sourceLanguage);
    return sendResponse(
      languagePair ? languagePair.possibleTargetLanguages : []
    );
  });

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

  onGetSourceLanguage(async (sendResponse) => {
    return sendResponse(await getSourceLanguage());
  });

  onSetSourceLanguage(async (sendResponse, language) => {
    await setSourceLanguage(language);
    return sendResponse();
  });

  onIsUserKnowsHowToAdd(async (sendResponse) => {
    const { userKnowsHowToAdd } = await browserEnv.storage.sync.get([
      'userKnowsHowToAdd',
    ]);
    return sendResponse(userKnowsHowToAdd ?? false);
  });

  onSetUserKnowsHowToAdd(async (sendResponse, value) => {
    await browserEnv.storage.sync.set({
      userKnowsHowToAdd: value,
    });
    return sendResponse();
  });

  onPlaySound(async (sendResponse, payload) => {
    return sendResponse(await playSound(payload));
  });

  onAskForRating(async (sendResponse, payload) => {
    if (payload.translationResult.success === false) {
      return sendResponse(false);
    }

    const userMetadataResult = await getUserMetadata();

    if (userMetadataResult.success === false) {
      return sendResponse(false);
    }

    const userMetadata = userMetadataResult.value;

    if (
      userMetadata.rate[payload.extensionPlatform] &&
      (userMetadata.rate[payload.extensionPlatform].response === 'never' ||
        userMetadata.rate[payload.extensionPlatform].response === 'review')
    ) {
      return sendResponse(false);
    }

    const counter = await getAskForRatingCounter(
      payload.translationResult.value.translation.sourceLanguage
    );

    await storeAskForRatingCounter(counter + 1);

    if (counter === 0) {
      return sendResponse(false);
    }

    if (
      userMetadata.rate[payload.extensionPlatform] &&
      userMetadata.rate[payload.extensionPlatform].response === 'feedback'
    ) {
      return sendResponse(counter % 30 === 0);
    }

    return sendResponse(counter % 10 === 0);
  });

  onSaveAskForRatingResponse(async (sendResponse, payload) => {
    invalidateUserMetadata();
    const userMetadataResult = await getUserMetadata();

    if (userMetadataResult.success === false) {
      return sendResponse();
    }

    const userMetadata = userMetadataResult.value;

    userMetadata.rate[payload.extensionPlatform] = {
      response: payload.rateInteraction,
      isoDate: new Date().toISOString(),
    };

    await saveUserMetadata(userMetadata);
    await resetAskForRatingCounter();
    return sendResponse();
  });

  console.info('The service worker has been registered');
};
