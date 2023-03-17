import { Preset } from './TranslationPreset';
import { useContext, useState } from 'react';
import { LanguagesContext } from '../languages/LanguagesContainer';

export const useTranslationPreset = (): [
  preset: Preset,
  setPreset: (preset: Preset) => void
] => {
  const { selectedLanguage } = useContext(LanguagesContext);
  const [preset, setPreset] = useState<Preset>({
    sourceLanguage: selectedLanguage,
    translationLanguage: 'en',
    isReverse: false,
  });

  return [preset, setPreset];
};
