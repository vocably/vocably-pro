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
  if (!languagePairs[sourceLanguage]) {
    languagePairs[sourceLanguage] = {
      currentTargetLanguage: targetLanguage,
      possibleTargetLanguages: [targetLanguage],
    };

    await saveLanguagePairs();

    return;
  }

  if (languagePairs[sourceLanguage].currentTargetLanguage === targetLanguage) {
    return;
  }

  languagePairs[sourceLanguage] = {
    currentTargetLanguage: targetLanguage,
    possibleTargetLanguages: [
      targetLanguage,
      ...languagePairs[sourceLanguage].possibleTargetLanguages.filter(
        (possibleTargetLanguage) => possibleTargetLanguage !== targetLanguage
      ),
    ].slice(0, 3),
  };

  await saveLanguagePairs();
};

export const getLanguagePair = (
  language: GoogleLanguage
): LanguagePair | undefined => {
  return languagePairs[language];
};
