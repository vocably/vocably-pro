import { FC, useCallback, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { Button, IconButton } from 'react-native-paper';
import { GoogleLanguage, languageList } from '@vocably/model';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export type Preset = {
  sourceLanguage: string;
  translationLanguage: string;
  isReverse: boolean;
};

type TranslationPreset = FC<{
  navigation: NavigationProp<any>;
  preset: Preset;
  onChange: (preset: Preset) => void;
}>;

export const TranslationPreset: TranslationPreset = ({
  navigation,
  preset,
  onChange,
}) => {
  const { languages } = useContext(LanguagesContext);

  const onSourceSelection = useCallback(
    (sourceLanguage: string) => {
      onChange({
        ...preset,
        sourceLanguage,
      });
    },
    [preset, onChange]
  );

  const selectSourceLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Source',
      selected: preset.sourceLanguage,
      preferred: languages,
      preferredTitle: 'Your Decks',
      onSelect: onSourceSelection,
    });
  }, [preset, languages, onSourceSelection]);

  const onTranslationSelection = useCallback((translationLanguage: string) => {
    onChange({
      ...preset,
      translationLanguage,
    });
  }, []);

  const selectTranslationLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Translation',
      selected: preset.translationLanguage,
      onSelect: onTranslationSelection,
    });
  }, [preset, onTranslationSelection]);

  const clickReverse = useCallback(() => {
    onChange({
      ...preset,
      isReverse: !preset.isReverse,
    });
  }, [preset]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Button mode={'contained'} onPress={selectSourceLanguage}>
          {languageList[preset.sourceLanguage as GoogleLanguage]}
        </Button>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <IconButton
          icon={preset.isReverse ? 'arrow-left' : 'arrow-right'}
          onPress={clickReverse}
          mode="contained"
        ></IconButton>
      </View>
      <View style={{ flex: 2 }}>
        <Button mode="outlined" onPress={selectTranslationLanguage}>
          {languageList[preset.translationLanguage as GoogleLanguage]}
        </Button>
      </View>
    </View>
  );
};
