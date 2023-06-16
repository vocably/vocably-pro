import { GoogleLanguage } from '@vocably/model';

export const getProxyLanguage = async (): Promise<GoogleLanguage | null> => {
  const { proxyLanguage } = await chrome.storage.sync.get(['proxyLanguage']);
  return (proxyLanguage ?? null) as GoogleLanguage;
};

export const setProxyLanguage = async (language: GoogleLanguage) => {
  await chrome.storage.sync.set({
    proxyLanguage: language,
  });
};
