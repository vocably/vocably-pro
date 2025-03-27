import { GoogleLanguage } from '@vocably/model';
import { useContext } from 'react';
import { TranslationPresetContext } from '../TranslationPreset/TranslationPresetContainer';

export const useTranslationLanguage = (
  sourceLanguage: GoogleLanguage
): GoogleLanguage | null => {
  const { presetState, languagePairs } = useContext(TranslationPresetContext);

  if (presetState.status === 'unknown') {
    return null;
  }

  const translationLanguage = languagePairs[sourceLanguage]
    ? languagePairs[sourceLanguage]?.translationLanguage
    : (presetState.preset.translationLanguage as GoogleLanguage);

  return translationLanguage ?? null;
};
