import { createExternalMessage, createMessage } from '@vocably/hermes';
import {
  TranslationCards,
  AnalyzePayload,
  Result,
  Language,
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

export const [analyze, onAnalyzeRequest] = createScopedMessage<
  AnalyzePayload,
  Result<TranslationCards>
>('analyze');

export const [listLanguages, onListLanguagesRequest] = createScopedMessage<
  void,
  Result<Language[]>
>('listLanguages');

export const [cleanUp, onCleanUpRequest] = createScopedMessage<
  TranslationCards,
  Result<null>
>('cleanUp');

export const [ping, onPing] = createScopedMessage<void, string>('ping');

export const [pingExternal, onPingExternal] = createExternalMessage<
  void,
  string
>('vocably.ping-external');
