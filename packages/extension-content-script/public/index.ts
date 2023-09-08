import { registerContentScript } from '../src';

registerContentScript({
  api: {
    appBaseUrl: 'http://localhost:8030',
    isLoggedIn: () =>
      Promise.resolve(
        (document.getElementById('isLoggedIn') as HTMLInputElement).checked
      ),
    getInternalProxyLanguage: () =>
      Promise.resolve(
        (document.getElementById('hasProxyLanguage') as HTMLInputElement)
          .checked
          ? 'en'
          : null
      ),
    setInternalProxyLanguage: async () => {
      // @ts-ignore
      document.getElementById('hasProxyLanguage').checked = true;
    },
    getInternalSourceLanguage: () =>
      Promise.resolve(
        (document.getElementById('hasProxyLanguage') as HTMLInputElement)
          .checked
          ? 'nl'
          : null
      ),
    setInternalSourceLanguage: async () => {
      // @ts-ignore
      document.getElementById('hasProxyLanguage').checked = true;
    },
    isActive: () =>
      Promise.resolve(
        (document.getElementById('isActive') as HTMLInputElement).checked
      ),
    isEligibleForTrial: () =>
      Promise.resolve(
        (document.getElementById('isEligibleForTrial') as HTMLInputElement)
          .checked
      ),
    analyze: (payload) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const result = JSON.parse(
            (document.getElementById('response') as HTMLTextAreaElement).value
          );

          if (payload.sourceLanguage) {
            result.value.translation.sourceLanguage = payload.sourceLanguage;
          }

          resolve(result);
        }, parseInt((document.getElementById('delay') as HTMLInputElement).value));
      }),
    cleanUp: () => Promise.resolve({ success: true, value: null }),
    ping: () => Promise.resolve('pong'),
    listLanguages: () =>
      Promise.resolve({ success: true, value: ['ar', 'nl'] }),
  },
  youTube: {
    ytHosts: ['localhost:8020'],
  },
}).then();

(window as any).putCaptions = () => {
  document.querySelector(
    '.ytp-caption-segment'
  ).innerHTML = `...These orbits, these arcs`;
};
