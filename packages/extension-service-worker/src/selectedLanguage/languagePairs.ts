import { GoogleLanguage, LanguagePair, LanguagePairs } from '@vocably/model';
import { browserEnv } from '../browserEnv';

export const languagePairs: LanguagePairs = {};

// Load language pairs
(async () => {
  const { languagePairs: storedLanguagePairs } =
    await browserEnv.storage.sync.get(['languagePairs']);

  if (storedLanguagePairs) {
    Object.assign(languagePairs, storedLanguagePairs);
  }
})();

const saveLanguagePairs = async () => {
  await browserEnv.storage.sync.set({ languagePairs });
};

export const addLanguagePair = async (
  sourceLanguage: GoogleLanguage,
  targetLanguage: GoogleLanguage
) => {
  const languagePair = languagePairs[sourceLanguage];
  if (!languagePair) {
    languagePairs[sourceLanguage] = {
      currentTargetLanguage: targetLanguage,
      possibleTargetLanguages: [targetLanguage],
    };

    await saveLanguagePairs();

    return;
  }

  if (languagePair.currentTargetLanguage === targetLanguage) {
    return;
  }

  languagePairs[sourceLanguage] = {
    currentTargetLanguage: targetLanguage,
    possibleTargetLanguages: [
      targetLanguage,
      ...languagePair.possibleTargetLanguages.filter(
        (possibleTargetLanguage) => possibleTargetLanguage !== targetLanguage
      ),
    ].slice(0, 3),
  };

  await saveLanguagePairs();
};

export const setLanguagePairs = async (newLanguagePairs: LanguagePairs) => {
  for (const key of Object.keys(languagePairs) as GoogleLanguage[]) {
    delete languagePairs[key];
  }
  Object.assign(languagePairs, newLanguagePairs);

  await saveLanguagePairs();
};

export const getLanguagePair = (
  language: GoogleLanguage
): LanguagePair | undefined => {
  return languagePairs[language];
};
