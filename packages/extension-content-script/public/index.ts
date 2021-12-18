import { registerContentScript } from '../src/index';

registerContentScript({
  api: {
    isLoggedIn: () => Promise.resolve(true),
    translate: (phrase) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            JSON.parse(
              (document.getElementById('response') as HTMLTextAreaElement).value
            )
          );
        }, parseInt((document.getElementById('delay') as HTMLInputElement).value));
      }),
  },
}).then();
