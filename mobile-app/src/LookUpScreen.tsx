import React, { FC, useCallback, useContext, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import {
  AnalyzePayload,
  CardItem,
  GoogleLanguage,
  languageList,
  Result,
} from '@vocably/model';
import { TranslationPreset } from './LookUpScreen/TranslationPreset';
import { useTranslationPreset } from './LookUpScreen/useTranslationPreset';
import { analyze } from '@vocably/api';
import { InlineLoader } from './loaders/InlineLoader';
import { Analyze } from './LookUpScreen/AnalyzeResult';
import { SearchInput } from './LookUpScreen/SearchInput';
import { useLanguageDeck } from './languageDeck/useLanguageDeck';
import { DeckContext } from './DeckContainer';
import { AssociatedCard } from './LookUpScreen/associateCards';
import { LanguagesContext } from './languages/LanguagesContainer';

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
    paddingHorizontal: padding,
  },
  loaderContainer: {
    padding: padding,
  },
  resultContainer: {
    flex: 1,
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
  const sourceDeck = useLanguageDeck(translationPreset.sourceLanguage);
  const selectedDeck = useContext(DeckContext);
  const languages = useContext(LanguagesContext);

  const deck =
    sourceDeck.deck.language === selectedDeck.deck.language
      ? selectedDeck
      : sourceDeck;

  const lookUp = useCallback(async () => {
    if (isAnalyzing) {
      return;
    }

    if (deck.status !== 'loaded') {
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
  }, [translationPreset, lookUpText, setIsAnalyzing, isAnalyzing, deck]);

  const onAdd = useCallback(
    async (card: AssociatedCard): Promise<Result<CardItem>> => {
      if (card.id) {
        const existingCard = deck.deck.cards.find(
          (item) => item.id === card.id
        );
        if (existingCard) {
          return {
            success: true,
            value: existingCard,
          };
        }
      }

      const addResult = await deck.add(card.card);

      if (addResult.success === false) {
        return addResult;
      }

      languages.addLanguage(card.card.language);
      await languages.selectLanguage(card.card.language);

      return addResult;
    },
    [deck]
  );

  const onRemove = useCallback(
    async (card: AssociatedCard): Promise<Result<true>> => {
      console.log('remoe', card);
      if (!card.id) {
        return {
          success: true,
          value: true,
        };
      }

      const removeResult = await selectedDeck.remove(card.id);

      console.log(removeResult);

      if (removeResult.success === false) {
        return removeResult;
      }

      await languages.selectLanguage(card.card.language);

      return removeResult;
    },
    [deck, languages]
  );

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
          disabled={
            !translationPreset.sourceLanguage ||
            !translationPreset.translationLanguage
          }
        />
      </View>
      {!isAnalyzing && !lookUpResult && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1, width: '100%' }}></View>
        </TouchableWithoutFeedback>
      )}
      {isAnalyzing && (
        <View style={styles.loaderContainer}>
          <InlineLoader>Translating...</InlineLoader>
        </View>
      )}
      {!isAnalyzing && lookUpResult && lookUpResult.success && (
        <Analyze
          style={styles.resultContainer}
          analysis={lookUpResult.value}
          cards={deck.deck.cards}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      )}
    </SafeAreaView>
  );
};
