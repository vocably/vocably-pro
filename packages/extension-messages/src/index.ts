import { createMessage } from '@vocably/hermes';
import { CardItem, Phrase, Result } from '@vocably/model';

const createScope =
  (scope: string): typeof createMessage =>
  (identifier: string) =>
    createMessage(`${scope}.${identifier}`);

const createScopedMessage = createScope('vocably');

export const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage<
  void,
  boolean
>('isLoggedIn');

export type Translation = {
  language: string;
  direct: string;
  cards: CardItem[];
};
export const [translate, onTranslationRequest] = createScopedMessage<
  Phrase,
  Result<Translation>
>('translate');
