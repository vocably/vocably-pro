import { isGoogleLanguage } from '@vocably/model';
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { updateLanguagePairs } from './languagePairs';
import { LanguagePairs, useLanguagePairs } from './useLanguagePairs';
import { useTranslationPresetSelectedLanguage } from './useTranslationPresetSelectedLanguage';

export type Preset = {
  sourceLanguage: string;
  translationLanguage: string;
  isReverse: boolean;
};

type PresetKnown = {
  status: 'known';
  preset: Preset;
};

type PresetUnknown = {
  status: 'unknown';
};

export type PresetState = PresetKnown | PresetUnknown;

export type TranslationPresetContextProps = {
  presetState: PresetState;
  languagePairs: LanguagePairs;
  setPreset: (preset: Preset) => Promise<void>;
};

export const TranslationPresetContext =
  createContext<TranslationPresetContextProps>({
    presetState: {
      status: 'unknown',
    },
    languagePairs: {},
    setPreset: async (preset: Preset) => {},
  });

export const TranslationPresetContainer: FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedLanguage, saveSelectedLanguage] =
    useTranslationPresetSelectedLanguage();
  const [languagePairs, saveLanguagePairs] = useLanguagePairs();
  const [presetState, setPresetState] = useState<PresetState>({
    status: 'unknown',
  });

  const setPreset = (preset: Preset) => {
    setPresetState({
      status: 'known',
      preset,
    });
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

    if (presetState.status === 'unknown') {
      setPresetState({
        status: 'known',
        preset: {
          sourceLanguage: selectedLanguage,
          translationLanguage: '',
          isReverse: false,
        },
      });
      return;
    }

    if (!presetState.preset.sourceLanguage && selectedLanguage) {
      setPresetState({
        status: 'known',
        preset: {
          ...presetState.preset,
          sourceLanguage: selectedLanguage,
        },
      });

      return;
    }

    if (!isGoogleLanguage(presetState.preset.sourceLanguage)) {
      return;
    }

    const translationLanguageCandidate = languagePairs[
      presetState.preset.sourceLanguage
    ]
      ? // @ts-ignore
        languagePairs[presetState.preset.sourceLanguage].translationLanguage
      : presetState.preset.translationLanguage;

    if (
      translationLanguageCandidate === presetState.preset.translationLanguage
    ) {
      return;
    }

    setPresetState({
      status: 'known',
      preset: {
        ...presetState.preset,
        sourceLanguage: selectedLanguage,
        translationLanguage: translationLanguageCandidate,
      },
    });
  }, [presetState, languagePairs, selectedLanguage]);

  return (
    <TranslationPresetContext.Provider
      value={{
        presetState,
        languagePairs: languagePairs ?? {},
        setPreset,
      }}
    >
      {children}
    </TranslationPresetContext.Provider>
  );
};
