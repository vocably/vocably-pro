import { isGoogleLanguage } from '@vocably/model';
import { useCallback, useContext, useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { updateLanguagePairs } from './languagePairs';
import { Preset } from './TranslationPreset';
import { LanguagePairs, useLanguagePairs } from './useLanguagePairs';

const deviceLocale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const deviceLanguage = deviceLocale.substring(0, 2);

export const useTranslationPreset = (): [
  preset: Preset,
  languagePairs: LanguagePairs,
  setPreset: (preset: Preset) => Promise<void>
] => {
  const { selectedLanguage } = useContext(LanguagesContext);
  const [languagePairs, saveLanguagePairs] = useLanguagePairs();
  const [preset, setPresetState] = useState<Preset>({
    sourceLanguage: selectedLanguage,
    translationLanguage: deviceLanguage,
    isReverse: false,
  });

  const setPreset = useCallback(
    (preset: Preset) => {
      setPresetState(preset);
      const newPairs = updateLanguagePairs(languagePairs ?? {}, preset);
      return saveLanguagePairs(newPairs);
    },
    [setPresetState, languagePairs, saveLanguagePairs]
  );

  useEffect(() => {
    if (languagePairs === null) {
      return;
    }

    if (!isGoogleLanguage(preset.sourceLanguage)) {
      return;
    }

    setPresetState({
      ...preset,
      sourceLanguage: selectedLanguage,
      translationLanguage: languagePairs[preset.sourceLanguage]
        ? // @ts-ignore
          languagePairs[preset.sourceLanguage].translationLanguage
        : preset.translationLanguage,
    });
  }, [preset, languagePairs]);

  return [preset, languagePairs ?? {}, setPreset];
};
