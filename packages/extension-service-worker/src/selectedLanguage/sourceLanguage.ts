import { GoogleLanguage } from '@vocably/model';
import { browserEnv } from '../browserEnv';
import { getLanguagePair } from './languagePairs';

export const getSourceLanguage = async (): Promise<GoogleLanguage | null> => {
  const { sourceLanguage } = await browserEnv.storage.sync.get([
    'sourceLanguage',
  ]);
  return (sourceLanguage ?? null) as GoogleLanguage;
};

export const setSourceLanguage = async (language: GoogleLanguage) => {
  const currentSourceLanguage = await getSourceLanguage();

  if (currentSourceLanguage === language) {
    return;
  }

  const pair = getLanguagePair(language);
  await browserEnv.storage.sync.set({
    sourceLanguage: language,
  });

  if (pair) {
    await browserEnv.storage.sync.set({
      proxyLanguage: pair.currentTargetLanguage,
    });
  }
};
