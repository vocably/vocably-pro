import { GoogleLanguage } from '@vocably/model';

export const getSourceLanguage = async (): Promise<GoogleLanguage | null> => {
  const { sourceLanguage } = await chrome.storage.sync.get(['sourceLanguage']);
  return (sourceLanguage ?? null) as GoogleLanguage;
};

export const setSourceLanguage = async (language: GoogleLanguage) => {
  await chrome.storage.sync.set({
    sourceLanguage: language,
  });
};
