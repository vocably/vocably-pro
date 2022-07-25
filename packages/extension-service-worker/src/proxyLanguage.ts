import { GoogleLanguage } from '@vocably/model';

export const getProxyLanguage = async (): Promise<GoogleLanguage> => {
  const { proxyLanguage } = await chrome.storage.sync.get(['proxyLanguage']);
  return (proxyLanguage ?? 'en') as GoogleLanguage;
};
