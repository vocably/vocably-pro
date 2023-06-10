import { GoogleLanguage } from '@vocably/model';

export const getProxyLanguage = async (): Promise<GoogleLanguage | null> => {
  console.log('get proxy language');
  const { proxyLanguage } = await chrome.storage.sync.get(['proxyLanguage']);
  return (proxyLanguage ?? null) as GoogleLanguage;
};

export const setProxyLanguage = async (language: GoogleLanguage) => {
  await chrome.storage.sync.set({
    proxyLanguage: language,
  });
};
