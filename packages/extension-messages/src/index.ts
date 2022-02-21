import { createMessage } from '@vocably/hermes';
import { TranslationCards, AnalyzePayload, Result } from '@vocably/model';

const createScope =
  (scope: string): typeof createMessage =>
  (identifier: string) =>
    createMessage(`${scope}.${identifier}`);

const createScopedMessage = createScope('vocably');

export const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage<
  void,
  boolean
>('isLoggedIn');

export const [analyze, onAnalyzeRequest] = createScopedMessage<
  AnalyzePayload,
  Result<TranslationCards>
>('analyze');
