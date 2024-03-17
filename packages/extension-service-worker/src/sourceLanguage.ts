import { GoogleLanguage } from '@vocably/model';
import { browserEnv } from './browserEnv';

export const getSourceLanguage = async (): Promise<GoogleLanguage | null> => {
  const { sourceLanguage } = await browserEnv.storage.sync.get([
    'sourceLanguage',
  ]);
  return (sourceLanguage ?? null) as GoogleLanguage;
};

export const setSourceLanguage = async (language: GoogleLanguage) => {
  await browserEnv.storage.sync.set({
    sourceLanguage: language,
  });
};
