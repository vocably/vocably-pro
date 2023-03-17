import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { TranslationPreset } from './LookUpScreen/TranslationPreset';
import { useTranslationPreset } from './LookUpScreen/useTranslationPreset';

const padding = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  languageToolbar: {
    padding: padding,
    width: '100%',
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
  const [translationPreset, setTranslationPreset] = useTranslationPreset();

  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.languageToolbar}>
        <TranslationPreset
          navigation={navigation}
          preset={translationPreset}
          onChange={setTranslationPreset}
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          placeholder={
            languageList[
              (translationPreset.isReverse
                ? translationPreset.translationLanguage
                : translationPreset.sourceLanguage) as GoogleLanguage
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
