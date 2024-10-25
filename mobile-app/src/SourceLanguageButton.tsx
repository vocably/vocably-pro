import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { FC, useContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Preset } from './LookUpScreen/TranslationPresetForm';
import { LanguagePairs } from './TranslationPreset/useLanguagePairs';

type Props = {
  navigation: NavigationProp<any>;
  preset: Preset;
  onChange: (preset: Preset) => void;
  languagePairs: LanguagePairs;
  emptyText?: string;
  style?: StyleProp<ViewStyle>;
};

export const SourceLanguageButton: FC<Props> = ({
  navigation,
  preset,
  onChange,
  languagePairs,
  emptyText = 'Target language',
  style,
}) => {
  const { languages: existingDeckLanguages } = useContext(LanguagesContext);

  const onSourceSelection = (sourceLanguage: string) => {
    onChange({
      ...preset,
      sourceLanguage,
      // @ts-ignore
      translationLanguage: languagePairs[sourceLanguage]
        ? // @ts-ignore
          languagePairs[sourceLanguage].translationLanguage
        : preset.translationLanguage,
    });
  };

  const selectSourceLanguage = () => {
    navigation.navigate('LanguageSelector', {
      title: 'Study Language',
      selected: preset.sourceLanguage,
      preferred:
        existingDeckLanguages.length === 0
          ? ['en', 'de', 'pt', 'es', 'nl', 'fr', 'it', 'ja']
          : existingDeckLanguages,
      preferredTitle:
        existingDeckLanguages.length > 0 ? 'Your Decks' : 'Popular Languages',
      onSelect: onSourceSelection,
    });
  };

  return (
    <Button style={style} mode={'contained'} onPress={selectSourceLanguage}>
      {preset.sourceLanguage
        ? languageList[preset.sourceLanguage as GoogleLanguage]
        : emptyText}
    </Button>
  );
};
