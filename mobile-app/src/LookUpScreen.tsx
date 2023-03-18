import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { AnalyzePayload, GoogleLanguage, languageList } from '@vocably/model';
import { TranslationPreset } from './LookUpScreen/TranslationPreset';
import { useTranslationPreset } from './LookUpScreen/useTranslationPreset';
import { analyze } from '@vocably/api';
import { InlineLoader } from './InlineLoader';
import { Analyze } from './LookUpScreen/AnalyzeResult';
import { SearchInput } from './LookUpScreen/SearchInput';

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
  searchContainer: {
    width: '100%',
    paddingLeft: padding,
    paddingRight: padding,
  },
  loaderContainer: {
    padding: padding,
  },
  resultContainer: {
    flex: 1,
    padding: padding,
    width: '100%',
  },
});

type LookUpScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const LookUpScreen: LookUpScreen = ({ navigation }) => {
  const [translationPreset, setTranslationPreset] = useTranslationPreset();
  const [lookUpText, setLookUpText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [lookUpResult, setLookupResult] =
    useState<Awaited<ReturnType<typeof analyze>>>();
  const theme = useTheme();

  const lookUp = useCallback(async () => {
    if (isAnalyzing) {
      return;
    }

    setIsAnalyzing(true);
    // @ts-ignore
    const payload: AnalyzePayload = {
      [translationPreset.isReverse ? 'target' : 'source']: lookUpText,
      sourceLanguage: translationPreset.sourceLanguage as GoogleLanguage,
      targetLanguage: translationPreset.translationLanguage as GoogleLanguage,
    };
    const lookupResult = await analyze(payload);
    setLookupResult(lookupResult);
    setIsAnalyzing(false);
  }, [translationPreset, lookUpText, setIsAnalyzing, isAnalyzing]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.languageToolbar}>
        <TranslationPreset
          navigation={navigation}
          preset={translationPreset}
          onChange={setTranslationPreset}
        />
      </View>
      <View style={[styles.searchContainer]}>
        <SearchInput
          value={lookUpText}
          placeholder={
            languageList[
              (translationPreset.isReverse
                ? translationPreset.translationLanguage
                : translationPreset.sourceLanguage) as GoogleLanguage
            ]
          }
          onChange={setLookUpText}
          onSubmit={lookUp}
        />
      </View>
      {isAnalyzing && (
        <View style={styles.loaderContainer}>
          <InlineLoader>Translating...</InlineLoader>
        </View>
      )}
      {!isAnalyzing && lookUpResult && lookUpResult.success && (
        <Analyze style={styles.resultContainer} analysis={lookUpResult.value} />
      )}
    </SafeAreaView>
  );
};
