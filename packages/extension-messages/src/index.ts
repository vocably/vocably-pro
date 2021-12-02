import { createMessage } from '@vocably/hermes';
import { Phrase, Translation } from '@vocably/api-types';

const createScope =
  (scope: string): typeof createMessage =>
  (identifier: string) =>
    createMessage(`${scope}.${identifier}`);

const createScopedMessage = createScope('vocably');

export const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage<
  void,
  boolean
>('isLoggedIn');

export const [translate, onTranslationRequest] = createScopedMessage<
  Phrase,
  Translation
>('translate');
