import { createExternalMessage, createMessage } from '@vocably/hermes';
import {
  AddCardPayload,
  DirectAnalyzePayload,
  GoogleLanguage,
  PlaySoundPayload,
  PlaySoundResponse,
  RateInteractionPayload,
  RemoveCardPayload,
  Result,
  TranslationCards,
} from '@vocably/model';

const createScope =
  (scope: string): typeof createMessage =>
  (identifier: string) =>
    createMessage(`${scope}.${identifier}`);

const createScopedMessage = createScope('vocably');

export const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage<
  void,
  boolean
>('isLoggedIn');

export const [isActive, onIsActiveRequest] = createScopedMessage<void, boolean>(
  'isActive'
);

export const [isEligibleForTrial, onIsEligibleForTrialRequest] =
  createScopedMessage<void, boolean>('isEligibleForTrial');

export const [analyze, onAnalyzeRequest] = createScopedMessage<
  Omit<DirectAnalyzePayload, 'targetLanguage'> & Partial<DirectAnalyzePayload>,
  Result<TranslationCards>
>('analyze');

export const [removeCard, onRemoveCardRequest] = createScopedMessage<
  RemoveCardPayload,
  Result<TranslationCards>
>('removeCard');

export const [addCard, onAddCardRequest] = createScopedMessage<
  AddCardPayload,
  Result<TranslationCards>
>('addCard');

export const [listLanguages, onListLanguagesRequest] = createScopedMessage<
  void,
  Result<GoogleLanguage[]>
>('listLanguages');

export const [listTargetLanguages, onListTargetLanguagesRequest] =
  createScopedMessage<void, GoogleLanguage[]>('listTargetLanguages');

export const [cleanUp, onCleanUpRequest] = createScopedMessage<
  TranslationCards,
  Result<null>
>('cleanUp');

export const [ping, onPing] = createScopedMessage<void, string>('ping');

export const [getInternalProxyLanguage, onGetInternalProxyLanuage] =
  createScopedMessage<void, GoogleLanguage | null>('getInternalProxyLanguage');

export const [setInternalProxyLanguage, onSetInternalProxyLanguage] =
  createScopedMessage<GoogleLanguage, void>('setInternalProxyLanguage');

export const [getInternalSourceLanguage, onGetInternalSourceLanguage] =
  createScopedMessage<void, GoogleLanguage | null>('getInternalSourceLanguage');

export const [setInternalSourceLanguage, onSetInternalSourceLanguage] =
  createScopedMessage<GoogleLanguage, void>('setInternalSourceLanguage');

export const [isUserKnowsHowToAdd, onIsUserKnowsHowToAdd] = createScopedMessage<
  void,
  boolean
>('isUserKnowsHowToAdd');

export const [setUserKnowsHowToAdd, onSetUserKnowsHowToAdd] =
  createScopedMessage<boolean, void>('setUserKnowsHowToAdd');

export const [pingExternal, onPingExternal] = createExternalMessage<
  void,
  string
>('vocably.ping-external');

export const [setProxyLanguage, onSetProxyLanguage] = createExternalMessage<
  GoogleLanguage,
  void
>('vocably.setProxyLanguage');

export const [getProxyLanguage, onGetProxyLanguage] = createExternalMessage<
  void,
  GoogleLanguage | null
>('vocably.getProxyLanguage');

export const [setSourceLanguage, onSetSourceLanguage] = createExternalMessage<
  GoogleLanguage,
  void
>('vocably.setSourceLanguage');

export const [getSourceLanguage, onGetSourceLanguage] = createExternalMessage<
  void,
  GoogleLanguage | null
>('vocably.getSourceLanguage');

export const [playSound, onPlaySound] = createScopedMessage<
  PlaySoundPayload,
  Result<PlaySoundResponse>
>('playSound');

export const [askForRating, onAskForRating] = createScopedMessage<
  {
    translationResult: Result<TranslationCards>;
    extensionPlatform: 'chromeExtension' | 'safariExtension';
  },
  boolean
>('askForRating');

export const [saveAskForRatingResponse, onSaveAskForRatingResponse] =
  createScopedMessage<
    {
      extensionPlatform: 'chromeExtension' | 'safariExtension';
      rateInteraction: RateInteractionPayload;
    },
    void
  >('askForRatingResponse');
