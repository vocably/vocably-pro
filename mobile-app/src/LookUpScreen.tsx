import React, { FC, useCallback, useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
  Button,
  IconButton,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { LanguagesContext } from './languages/LanguagesContainer';

const padding = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  languageToolbar: {
    padding: padding,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: padding,
    paddingRight: padding,
    alignItems: 'stretch',
  },
});

type LookUpScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const LookUpScreen: LookUpScreen = ({ navigation }) => {
  const { selectedLanguage, languages } = useContext(LanguagesContext);
  const [sourceLanguage, setSourceLanguage] = useState(selectedLanguage);
  const [translationLanguage, setTranslationLanguage] = useState('en');
  const [isDirect, setIsDirect] = useState<boolean>(true);
  const theme = useTheme();

  const onSource = useCallback((language: string) => {
    setSourceLanguage(language);
  }, []);

  const selectSourceLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Source',
      selected: sourceLanguage,
      preferred: languages,
      preferredTitle: 'Your Decks',
      onSelect: onSource,
    });
  }, [sourceLanguage, languages, onSource]);

  const onTranslation = useCallback((language: string) => {
    setTranslationLanguage(language);
  }, []);

  const selectTranslationLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Translation',
      selected: translationLanguage,
      onSelect: onTranslation,
    });
  }, [translationLanguage, onTranslation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.languageToolbar}>
        <View style={{ flex: 2 }}>
          <Button mode={'contained'} onPress={selectSourceLanguage}>
            {languageList[sourceLanguage as GoogleLanguage]}
          </Button>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <IconButton
            icon={isDirect ? 'arrow-right' : 'arrow-left'}
            onPress={() => setIsDirect(!isDirect)}
            mode="contained"
          ></IconButton>
        </View>
        <View style={{ flex: 2 }}>
          <Button mode="contained-tonal" onPress={selectTranslationLanguage}>
            {languageList[translationLanguage as GoogleLanguage]}
          </Button>
        </View>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          placeholder={
            languageList[
              (isDirect
                ? sourceLanguage
                : translationLanguage) as GoogleLanguage
            ]
          }
          right={
            <TextInput.Icon
              icon={'magnify'}
              color={theme.colors.primary}
              mode={'contained'}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};
