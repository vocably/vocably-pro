import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { FC, useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, IconButton, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { LanguagePairs } from './useLanguagePairs';

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
  languagePairs: LanguagePairs;
}>;

export const TranslationPreset: TranslationPreset = ({
  navigation,
  preset,
  onChange,
  languagePairs,
}) => {
  const { languages } = useContext(LanguagesContext);
  const theme = useTheme();

  const onSourceSelection = useCallback(
    (sourceLanguage: string) => {
      onChange({
        ...preset,
        sourceLanguage,
        // @ts-ignore
        translationLanguage: languagePairs[sourceLanguage]
          ? // @ts-ignore
            languagePairs[sourceLanguage].translationLanguage
          : preset.translationLanguage,
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

  const onTranslationSelection = useCallback(
    (translationLanguage: string) => {
      onChange({
        ...preset,
        translationLanguage,
      });
    },
    [preset]
  );

  const selectTranslationLanguage = useCallback(() => {
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
  }, [preset, onTranslationSelection]);

  const clickReverse = useCallback(() => {
    onChange({
      ...preset,
      isReverse: !preset.isReverse,
    });
  }, [preset]);

  return (
    <View>
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Button mode={'contained'} onPress={selectSourceLanguage}>
            {preset.sourceLanguage
              ? languageList[preset.sourceLanguage as GoogleLanguage]
              : 'Target language'}
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
      {!preset.sourceLanguage && (
        <View
          style={{
            marginLeft: 48,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name="arrow-up-thin" size={48} color={theme.colors.secondary} />
          <Text style={{ color: theme.colors.secondary }}>
            Select language you're learning.
          </Text>
        </View>
      )}
    </View>
  );
};
