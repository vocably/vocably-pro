import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { Preset } from './TranslationPreset/TranslationPresetContainer';
import { LanguagePairs } from './TranslationPreset/useLanguagePairs';

type Props = {
  navigation: NavigationProp<any>;
  preset: Preset;
  onChange: (preset: Preset) => void;
  languagePairs: LanguagePairs;
  style?: StyleProp<ViewStyle>;
};

export const TargetLanguageButton: FC<Props> = ({
  navigation,
  preset,
  onChange,
  languagePairs,
  style,
}) => {
  const onTranslationSelection = (translationLanguage: string) => {
    onChange({
      ...preset,
      translationLanguage,
    });
  };

  const selectTranslationLanguage = () => {
    navigation.navigate('LanguageSelector', {
      title: 'Translation',
      // @ts-ignore
      preferred: languagePairs[preset.sourceLanguage]
        ? // @ts-ignore
          languagePairs[preset.sourceLanguage].availableLanguages
        : [],
      selected: preset.translationLanguage,
      onSelect: onTranslationSelection,
    });
  };

  return (
    <Button style={style} mode="outlined" onPress={selectTranslationLanguage}>
      {languageList[preset.translationLanguage as GoogleLanguage]}
    </Button>
  );
};
