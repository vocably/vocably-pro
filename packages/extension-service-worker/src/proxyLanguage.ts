import { GoogleLanguage } from '@vocably/model';
import { browserEnv } from './browserEnv';

export const getProxyLanguage = async (): Promise<GoogleLanguage | null> => {
  const { proxyLanguage } = await browserEnv.storage.sync.get([
    'proxyLanguage',
  ]);
  return (proxyLanguage ?? null) as GoogleLanguage;
};

export const setProxyLanguage = async (language: GoogleLanguage) => {
  await browserEnv.storage.sync.set({
    proxyLanguage: language,
  });
};
