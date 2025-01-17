import { GoogleLanguage } from '@vocably/model';
import { useContext } from 'react';
import { TranslationPresetContext } from '../TranslationPreset/TranslationPresetContainer';

export const useTranslationLanguage = (
  sourceLanguage: GoogleLanguage
): GoogleLanguage | null => {
  const { preset, languagePairs } = useContext(TranslationPresetContext);

  const translationLanguage = languagePairs[sourceLanguage]
    ? languagePairs[sourceLanguage]?.translationLanguage
    : (preset.translationLanguage as GoogleLanguage);

  return translationLanguage ?? null;
};
