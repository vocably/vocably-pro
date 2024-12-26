import { GoogleLanguage } from '@vocably/model';
import { browserEnv } from '../browserEnv';
import { addLanguagePair } from './languagePairs';
import { getSourceLanguage } from './sourceLanguage';

export const getProxyLanguage = async (): Promise<GoogleLanguage | null> => {
  const { proxyLanguage } = await browserEnv.storage.sync.get([
    'proxyLanguage',
  ]);
  return (proxyLanguage ?? null) as GoogleLanguage;
};

export const setProxyLanguage = async (targetLanguage: GoogleLanguage) => {
  const sourceLanguage = await getSourceLanguage();
  if (sourceLanguage) {
    await addLanguagePair(sourceLanguage, targetLanguage);
  }

  const currentProxyLanguage = await getProxyLanguage();
  if (currentProxyLanguage === targetLanguage) {
    return;
  }

  await browserEnv.storage.sync.set({
    proxyLanguage: targetLanguage,
  });
};
