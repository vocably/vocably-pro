import { isGoogleLanguage } from '@vocably/model';
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { NativeModules, Platform } from 'react-native';
import { updateLanguagePairs } from './languagePairs';
import { LanguagePairs, useLanguagePairs } from './useLanguagePairs';
import { useSelectedLanguage } from './useSelectedLanguage';

const deviceLocale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const deviceLanguage = deviceLocale.substring(0, 2);

export type Preset = {
  sourceLanguage: string;
  translationLanguage: string;
  isReverse: boolean;
};

export type TranslationPresetContextProps = {
  preset: Preset;
  languagePairs: LanguagePairs;
  setPreset: (preset: Preset) => Promise<void>;
};

export const TranslationPresetContext =
  createContext<TranslationPresetContextProps>({
    preset: {
      sourceLanguage: '',
      translationLanguage: '',
      isReverse: false,
    },
    languagePairs: {},
    setPreset: async (preset: Preset) => {},
  });

export const TranslationPresetContainer: FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedLanguage, saveSelectedLanguage] = useSelectedLanguage();
  const [languagePairs, saveLanguagePairs] = useLanguagePairs();
  const [preset, setPresetState] = useState<Preset>({
    sourceLanguage: selectedLanguage,
    translationLanguage: deviceLanguage,
    isReverse: false,
  });

  const setPreset = (preset: Preset) => {
    setPresetState(preset);
    if (selectedLanguage !== preset.sourceLanguage) {
      saveSelectedLanguage(preset.sourceLanguage);
    }

    const newPairs = updateLanguagePairs(languagePairs ?? {}, preset);
    return saveLanguagePairs(newPairs);
  };

  useEffect(() => {
    if (languagePairs === null) {
      return;
    }

    if (!preset.sourceLanguage && selectedLanguage) {
      setPresetState({
        ...preset,
        sourceLanguage: selectedLanguage,
      });

      return;
    }

    if (!isGoogleLanguage(preset.sourceLanguage)) {
      return;
    }

    const translationLanguageCandidate = languagePairs[preset.sourceLanguage]
      ? // @ts-ignore
        languagePairs[preset.sourceLanguage].translationLanguage
      : preset.translationLanguage;

    if (translationLanguageCandidate === preset.translationLanguage) {
      return;
    }

    setPresetState({
      ...preset,
      sourceLanguage: selectedLanguage,
      translationLanguage: translationLanguageCandidate,
    });
  }, [preset, languagePairs, selectedLanguage]);

  return (
    <TranslationPresetContext.Provider
      value={{
        preset,
        languagePairs: languagePairs ?? {},
        setPreset,
      }}
    >
      {children}
    </TranslationPresetContext.Provider>
  );
};
