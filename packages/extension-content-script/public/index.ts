import { registerContentScript } from '../src/index';

registerContentScript({
  api: {
    isLoggedIn: () => Promise.resolve(true),
    translate: (phrase) =>
      Promise.resolve({
        asIs: `Translated ${phrase.phrase}`,
      }),
  },
}).then();
