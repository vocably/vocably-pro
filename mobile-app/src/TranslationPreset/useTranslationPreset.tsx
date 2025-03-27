import { useContext } from 'react';
import {
  Preset,
  PresetState,
  TranslationPresetContext,
} from './TranslationPresetContainer';
import { LanguagePairs } from './useLanguagePairs';

export const useTranslationPreset = (): [
  preset: PresetState,
  languagePairs: LanguagePairs,
  setPreset: (preset: Preset) => Promise<void>
] => {
  const contextProps = useContext(TranslationPresetContext);
  return [
    contextProps.presetState,
    contextProps.languagePairs,
    contextProps.setPreset,
  ];
};
