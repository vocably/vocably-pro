import { useCallback, useContext, useEffect, useState } from 'react';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { Preset } from './TranslationPreset';
import { useTranslationLanguage } from './useTranslationLanguage';

export const useTranslationPreset = (): [
  preset: Preset,
  setPreset: (preset: Preset) => Promise<void>
] => {
  const { selectedLanguage, selectLanguage } = useContext(LanguagesContext);
  const [translationLanguage, setTranslationLanguage] =
    useTranslationLanguage();
  const [preset, setPresetState] = useState<Preset>({
    sourceLanguage: selectedLanguage,
    translationLanguage: translationLanguage ?? '',
    isReverse: false,
  });

  const setPreset = useCallback(
    (preset: Preset) => {
      setPresetState(preset);
      selectLanguage(preset.sourceLanguage);
      return setTranslationLanguage(preset.translationLanguage);
    },
    [setPresetState]
  );

  useEffect(() => {
    if (translationLanguage === null) {
      return;
    }

    setPresetState({
      ...preset,
      translationLanguage,
    });
  }, [translationLanguage]);
  useEffect(() => {
    if (selectedLanguage === null) {
      return;
    }

    setPresetState({
      ...preset,
      sourceLanguage: selectedLanguage,
    });
  }, [selectedLanguage]);

  return [preset, setPreset];
};
