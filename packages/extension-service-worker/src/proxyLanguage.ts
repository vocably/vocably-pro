import { Language } from '@vocably/model';

export const getProxyLanguage = async (): Promise<Language> => {
  const { proxyLanguage } = await chrome.storage.sync.get(['proxyLanguage']);
  return (proxyLanguage ?? 'en') as Language;
};
