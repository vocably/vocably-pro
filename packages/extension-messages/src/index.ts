import { createExternalMessage, createMessage } from '@vocably/hermes';
import {
  AddCardPayload,
  DirectAnalyzePayload,
  GoogleLanguage,
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
  Omit<DirectAnalyzePayload, 'targetLanguage'>,
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
