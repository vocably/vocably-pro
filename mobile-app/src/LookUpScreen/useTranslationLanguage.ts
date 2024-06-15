import { useCallback, useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';
import * as asyncAppStorage from '../asyncAppStorage';

const deviceLocale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const deviceLanguage = deviceLocale.substring(0, 2);

export const useTranslationLanguage = (): [
  translationLanguage: string | null,
  setTranslationLanguage: (language: string) => Promise<void>
] => {
  const [translationLanguage, setLanguageState] = useState<string | null>(null);
  const setTranslationLanguage = useCallback(
    (language: string) => {
      setLanguageState(language);
      return asyncAppStorage.setItem('translationLanguage', language);
    },
    [setLanguageState]
  );

  useEffect(() => {
    asyncAppStorage
      .getItem('translationLanguage')
      .then((previouslySelectedLanguage) => {
        setLanguageState(previouslySelectedLanguage ?? deviceLanguage);
      });
  }, [setLanguageState]);

  return [translationLanguage, setTranslationLanguage];
};
