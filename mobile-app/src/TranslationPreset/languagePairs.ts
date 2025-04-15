import { isGoogleLanguage } from '@vocably/model';
import { Preset } from './TranslationPresetContainer';
import { LanguagePairs } from './useLanguagePairs';

export const updateLanguagePairs = (
  currentPairs: LanguagePairs,
  preset: Preset
): LanguagePairs => {
  if (!isGoogleLanguage(preset.sourceLanguage)) {
    return currentPairs;
  }

  if (!isGoogleLanguage(preset.translationLanguage)) {
    return currentPairs;
  }

  if (
    currentPairs[preset.sourceLanguage] &&
    // @ts-ignore
    currentPairs[preset.sourceLanguage].translationLanguage ===
      preset.translationLanguage
  ) {
    return currentPairs;
  }

  return {
    ...currentPairs,
    [preset.sourceLanguage]: {
      translationLanguage: preset.translationLanguage,
      availableLanguages: currentPairs[preset.sourceLanguage]
        ? [
            preset.translationLanguage,
            // @ts-ignore
            ...currentPairs[preset.sourceLanguage].availableLanguages.filter(
              (availableLanguage) =>
                availableLanguage !== preset.translationLanguage
            ),
          ].slice(0, 3)
        : [preset.translationLanguage],
    },
  };
};
