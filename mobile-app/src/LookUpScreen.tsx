import { FC, useCallback, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  languageToolbar: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

type LookUpScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const LookUpScreen: LookUpScreen = ({ navigation }) => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [translationLanguage, setTranslationLanguage] = useState('en');
  const [isDirect, setIsDirect] = useState<boolean>(true);

  const onSource = useCallback((language: string) => {
    setSourceLanguage(language);
  }, []);

  const selectSourceLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Source',
      selected: 'en',
      preferred: [],
      onSelect: onSource,
    });
  }, [onSource]);

  const onTranslation = useCallback((language: string) => {
    setTranslationLanguage(language);
  }, []);

  const selectTranslationLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Translation',
      selected: 'en',
      preferred: [],
      onSelect: onTranslation,
    });
  }, [onTranslation]);

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
    </SafeAreaView>
  );
};
