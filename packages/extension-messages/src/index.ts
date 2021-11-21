import { createMessage } from '@vocably/hermes';

const createScope =
  (scope: string): typeof createMessage =>
  (identifier: string) =>
    createMessage(`${scope}.${identifier}`);

const createScopedMessage = createScope('vocably');

export const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage<
  void,
  boolean
>('isLoggedIn');
