import { NavigationProp } from '@react-navigation/native';
import { analyze } from '@vocably/api';
import {
  AnalyzePayload,
  CardItem,
  GoogleLanguage,
  languageList,
  Result,
  TagItem,
} from '@vocably/model';
import { buildTagMap } from '@vocably/model-operations';
import { usePostHog } from 'posthog-react-native';
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useLanguageDeck } from './languageDeck/useLanguageDeck';
import { LanguagesContext } from './languages/LanguagesContainer';
import { InlineLoader } from './loaders/InlineLoader';
import { Analyze } from './LookUpScreen/AnalyzeResult';
import { AssociatedCard } from './LookUpScreen/associateCards';
import { SearchInput } from './LookUpScreen/SearchInput';
import { TranslationPresetForm } from './LookUpScreen/TranslationPresetForm';
import { useShareIntentData } from './ShareIntent/useShareIntentData';
import { Preset } from './TranslationPreset/TranslationPresetContainer';
import { useTranslationPreset } from './TranslationPreset/useTranslationPreset';
import { useLastUsedTagIds } from './useLastUsedTagIds';

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
  resultContainer: {
    flex: 1,
    width: '100%',
  },
});

const getLoadingText = (translationPreset: Preset) => {
  const fromLanguage = translationPreset.isReverse
    ? translationPreset.translationLanguage
    : translationPreset.sourceLanguage;

  const toLanguage = translationPreset.isReverse
    ? translationPreset.sourceLanguage
    : translationPreset.translationLanguage;

  const fromLanguageLabel = languageList[fromLanguage as GoogleLanguage];
  const toLanguageLabel = languageList[toLanguage as GoogleLanguage];

  if (!fromLanguageLabel || !toLanguageLabel) {
    return 'Looking up...!';
  }

  if (fromLanguageLabel !== toLanguageLabel) {
    return `Translating from ${fromLanguageLabel} to ${toLanguageLabel}...`;
  }

  return `Looking up...!`;
};

type Props = {
  navigation: NavigationProp<any>;
};

export const LookUpScreen: FC<Props> = ({ navigation }) => {
  const [isAutomaticallyLookedUp, setIsAutomaticallyLookedUp] = useState(false);
  const [translationPreset, languagePairs, setTranslationPreset] =
    useTranslationPreset();
  const [lookUpText, setLookUpText] = useState('');
  const [isAnalyzingPreset, setIsAnalyzingPreset] = useState<Preset | false>(
    false
  );
  const [lookUpResult, setLookupResult] =
    useState<Awaited<ReturnType<typeof analyze>>>();
  const theme = useTheme();
  const deck = useLanguageDeck({
    language: translationPreset.sourceLanguage,
    autoReload: true,
  });
  const languages = useContext(LanguagesContext);
  const intentData = useShareIntentData();
  const posthog = usePostHog();

  const [lastUsedTagIds, setLastUsedTagIds] = useLastUsedTagIds();

  useEffect(() => {
    if (intentData) {
      setLookUpText(intentData);
    }
  }, [intentData]);

  useEffect(() => {
    if (lookUpText === '') {
      setLookupResult(undefined);
    }
  }, [lookUpText]);

  const abortControllerRef = useRef<AbortController | null>(null);

  const lookUp = useCallback(async () => {
    if (isAnalyzingPreset && abortControllerRef.current) {
      abortControllerRef.current?.abort();
      abortControllerRef.current = null;
    }

    if (deck.status !== 'loaded') {
      return;
    }

    Keyboard.dismiss();

    setIsAnalyzingPreset({
      ...translationPreset,
    });
    // @ts-ignore
    const payload: AnalyzePayload = {
      [translationPreset.isReverse ? 'target' : 'source']: lookUpText,
      sourceLanguage: translationPreset.sourceLanguage as GoogleLanguage,
      targetLanguage: translationPreset.translationLanguage as GoogleLanguage,
    };

    abortControllerRef.current = new AbortController();
    const lookupResult = await analyze(payload, abortControllerRef.current);

    if (
      lookupResult.success === false &&
      lookupResult.errorCode !== 'API_REQUEST_ABORTED'
    ) {
      Alert.alert(
        'Error: Look up failed',
        'Oops! Something went wrong while attempting to look up. Please try again later.'
      );
    }

    if (
      !lookupResult.success &&
      lookupResult.errorCode === 'API_REQUEST_ABORTED'
    ) {
      return;
    }

    setLookupResult(lookupResult);
    setIsAnalyzingPreset(false);

    posthog.capture('lookup', payload);
  }, [
    translationPreset,
    lookUpText,
    setIsAnalyzingPreset,
    isAnalyzingPreset,
    deck,
  ]);

  useEffect(() => {
    if (isAnalyzingPreset) {
      lookUp();
    }
  }, [translationPreset]);

  useEffect(() => {
    if (
      !isAutomaticallyLookedUp &&
      intentData &&
      lookUpText &&
      deck.status === 'loaded'
    ) {
      setIsAutomaticallyLookedUp(true);
      lookUp().then();
    }
  }, [intentData, lookUpText, deck.status, isAutomaticallyLookedUp, lookUp]);

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

      let tags = card.card.tags;
      if (lastUsedTagIds.status === 'loaded') {
        const tagMap = buildTagMap(deck.deck.tags);
        const lastUsedTags = lastUsedTagIds.value
          .filter((tagId) => !tags.some((t) => t.id === tagId))
          .filter((tagId) => tagMap[tagId])
          .map((tagId) => tagMap[tagId] as TagItem);

        tags = [...tags, ...lastUsedTags];
      }

      const addResult = await deck.add({
        ...card.card,
        tags,
      });

      if (addResult.success === false) {
        Alert.alert(
          'Error: Card addition failed',
          'Oops! Something went wrong while attempting to add a new card into your collection. Please try again later.'
        );
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
      if (!card.id) {
        return {
          success: true,
          value: true,
        };
      }

      const removeResult = await deck.remove(card.id);

      if (removeResult.success === false) {
        Alert.alert(
          'Error: Card removal failed',
          'Oops! Something went wrong while attempting to remove a the card from your collection. Please try again later.'
        );
        return removeResult;
      }

      await languages.selectLanguage(card.card.language);

      return removeResult;
    },
    [deck, languages]
  );

  const onTagsChange = useCallback(
    async (id: string, tags: TagItem[]): Promise<Result<true>> => {
      const updateResult = await deck.update(id, {
        tags,
      });

      if (updateResult.success === false) {
        return updateResult;
      }

      await setLastUsedTagIds(tags.map((t) => t.id));

      return {
        success: true,
        value: true,
      };
    },
    [deck]
  );

  const setTranslationDirection = (isReverse: boolean) => {
    setTranslationPreset({
      ...translationPreset,
      isReverse,
    });
  };

  const canTranslate =
    translationPreset.sourceLanguage &&
    translationPreset.translationLanguage &&
    translationPreset.sourceLanguage !== translationPreset.translationLanguage;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.languageToolbar}>
        <TranslationPresetForm
          navigation={navigation}
          languagePairs={languagePairs}
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
      {!isAnalyzingPreset && !lookUpResult && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingHorizontal: padding,
              paddingVertical: padding,
              paddingLeft: padding + 18,
              gap: 8,
            }}
          >
            {canTranslate && (
              <View>
                <Text>
                  The cards will be saved to your{' '}
                  {
                    languageList[
                      translationPreset.sourceLanguage as GoogleLanguage
                    ]
                  }{' '}
                  deck.
                </Text>
              </View>
            )}
            {canTranslate && !translationPreset.isReverse && (
              <Animated.View entering={FadeIn} exiting={FadeOut}>
                <Text>
                  To search in{' '}
                  {
                    languageList[
                      translationPreset.translationLanguage as GoogleLanguage
                    ]
                  }{' '}
                  for a{' '}
                  {
                    languageList[
                      translationPreset.sourceLanguage as GoogleLanguage
                    ]
                  }{' '}
                  word or phrase, turn on reverse translation mode by clicking
                  this{'\u00A0'}button:{'\u00A0'}
                  <Text
                    style={{
                      backgroundColor: theme.colors.inversePrimary,
                    }}
                    onPress={() => setTranslationDirection(true)}
                  >
                    <Icon
                      size={14}
                      color={theme.colors.primary}
                      name="arrow-right"
                    ></Icon>
                  </Text>
                </Text>
              </Animated.View>
            )}

            {canTranslate && translationPreset.isReverse && (
              <Animated.View
                entering={FadeIn}
                exiting={FadeOut}
                style={{ gap: 8 }}
              >
                <View>
                  <Text>Reverse Translation mode is on.</Text>
                </View>
                <View>
                  <Text>
                    To search in{' '}
                    {
                      languageList[
                        translationPreset.sourceLanguage as GoogleLanguage
                      ]
                    }
                    {', '}
                    turn off reverse translation mode by clicking this{'\u00A0'}
                    button:{'\u00A0'}
                    <Text
                      style={{
                        backgroundColor: theme.colors.inversePrimary,
                      }}
                      onPress={() => setTranslationDirection(false)}
                    >
                      <Icon
                        size={14}
                        color={theme.colors.primary}
                        name="arrow-left"
                      ></Icon>
                    </Text>
                  </Text>
                </View>
              </Animated.View>
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
      {isAnalyzingPreset && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut.duration(50)}
          style={{
            padding: padding,
            marginTop: 16,
          }}
        >
          <InlineLoader>{getLoadingText(isAnalyzingPreset)}</InlineLoader>
        </Animated.View>
      )}
      {!isAnalyzingPreset && lookUpResult && lookUpResult.success && (
        <Analyze
          style={styles.resultContainer}
          analysis={lookUpResult.value}
          cards={deck.deck.cards}
          onAdd={onAdd}
          onRemove={onRemove}
          onTagsChange={onTagsChange}
          deck={deck}
        />
      )}
    </SafeAreaView>
  );
};
