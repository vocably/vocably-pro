import { NavigationProp } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { usePostHog } from 'posthog-react-native';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import {
  Linking,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import { Button, Divider, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getItem, setItem } from './asyncAppStorage';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Select, SelectOption } from './Select';
import { SourceLanguageButton } from './SourceLanguageButton';
import { Displayer, DisplayerRef } from './study/Displayer';
import { TargetLanguageButton } from './TargetLanguageButton';
import { useTranslationPreset } from './TranslationPreset/useTranslationPreset';
import { useAsync } from './useAsync';

const isIos = Platform.OS === 'ios';

type Props = {
  navigation: NavigationProp<any>;
};

const languageLevels: SelectOption[] = [
  {
    value: 'beginner',
    label: 'Beginner (A1-A2)',
  },
  {
    value: 'intermediate',
    label: 'Intermediate (B1-B2)',
  },
  {
    value: 'advanced',
    label: 'Advanced (C1-C2)',
  },
  {
    value: 'not-sure',
    label: "I'm not sure",
  },
];

const getLevelFromStorage = () =>
  getItem('languageLevel').then((value) => value ?? '');
const setLevelToStorage = (level: string) => setItem('languageLevel', level);

type OnboardingStep = 'form' | 'faq';
const getOnboardingStepFromStorage = (): Promise<OnboardingStep> =>
  getItem('onboardingStep').then((value) => {
    if (value === 'faq') {
      return 'faq';
    }

    return 'form';
  });

const setOnboardingStepToStorage = (onboardingStep: OnboardingStep) =>
  setItem('onboardingStep', onboardingStep);

export const WelcomeScreen: FC<Props> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();
  const { refreshLanguages } = useContext(LanguagesContext);
  const [level, setLevel] = useAsync(getLevelFromStorage, setLevelToStorage);
  const [onboardingStep, setOnboardingStep] = useAsync(
    getOnboardingStepFromStorage,
    setOnboardingStepToStorage
  );
  const [translationPreset, languagePairs, setTranslationPreset] =
    useTranslationPreset();
  const insets = useSafeAreaInsets();
  const onboardingDisplayerRef = useRef<DisplayerRef>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const onRefresh = () => {
    setRefreshing(true);
    refreshLanguages().then(() => {
      setRefreshing(false);
    });
  };

  const postHog = usePostHog();

  const [isScrolled, setIsScrolled] = useState(false);

  const isNextButtonVisible =
    translationPreset.translationLanguage &&
    translationPreset.sourceLanguage &&
    level.status === 'loaded' &&
    level.value;

  useEffect(() => {
    if (
      !isScrolled &&
      isNextButtonVisible &&
      scrollViewRef.current &&
      onboardingDisplayerRef.current
    ) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [translationPreset, level, isScrolled]);

  useEffect(() => {
    postHog.capture('Welcome');
  }, []);

  const isTranslate =
    translationPreset.sourceLanguage !== translationPreset.translationLanguage;

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingLeft: insets.left + 24,
        paddingRight: insets.right + 24,
        minHeight: '100%',
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {onboardingStep.status === 'loaded' && onboardingStep.value === 'form' && (
        <Displayer style={{ gap: 16 }} ref={onboardingDisplayerRef}>
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 24 }}>
            To get started, please answer the following questions:
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                textAlign: 'right',
                color: theme.colors.onBackground,
              }}
            >
              What language do you speak?
            </Text>
            <View style={{ width: '60%' }}>
              <TargetLanguageButton
                navigation={navigation}
                preset={translationPreset}
                onChange={setTranslationPreset}
                languagePairs={languagePairs}
              />
            </View>
          </View>
          <Divider style={{ width: '100%' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                textAlign: 'right',
                color: theme.colors.onBackground,
              }}
            >
              What language do you study?
            </Text>
            <View style={{ width: '60%' }}>
              <SourceLanguageButton
                navigation={navigation}
                preset={translationPreset}
                onChange={setTranslationPreset}
                languagePairs={languagePairs}
                emptyText="Select"
              />
            </View>
          </View>
          <View>
            <Text>
              You can study multiple languages. For now, let's pick one.
            </Text>
          </View>
          <Divider style={{ width: '100%' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                textAlign: 'right',
                color: theme.colors.onBackground,
              }}
            >
              What is your level?
            </Text>
            <View style={{ width: '60%' }}>
              <Select
                options={languageLevels}
                value={level.status === 'loaded' ? level.value : ''}
                onChange={setLevel}
              />
            </View>
          </View>
          <View style={{ marginTop: 25, opacity: isNextButtonVisible ? 1 : 0 }}>
            <Button
              mode="contained"
              onPress={async () => {
                onboardingDisplayerRef.current &&
                  (await onboardingDisplayerRef.current.hide());

                setOnboardingStep('faq');
                postHog.capture('Welcome form submitted');
                postHog.capture('$set', {
                  $set: {
                    studyLanguage: translationPreset.sourceLanguage,
                    nativeLanguage: translationPreset.translationLanguage,
                    level: level.status === 'loaded' && level.value,
                  },
                });
              }}
            >
              Next
            </Button>
          </View>
        </Displayer>
      )}
      {onboardingStep.status === 'loaded' && onboardingStep.value === 'faq' && (
        <Displayer style={{ gap: 16 }}>
          <Text style={{ fontSize: 18 }}>
            Vocably helps you {isTranslate ? 'translate' : 'look up'} and learn
            new words and phrases with ease.
          </Text>
          <Text style={{ fontSize: 18 }}>
            Each time you {isTranslate ? 'translate' : 'look up'} a word,
            Vocably creates a custom flashcard to save and study later.
          </Text>
          <Text style={{ fontSize: 18 }}>Features:</Text>
          <Text style={{ fontSize: 18 }}>
            •{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('LookUp')}
            >
              Look up
            </Text>{' '}
            words and phrases
            {isTranslate &&
              ` in ${
                languageList[translationPreset.sourceLanguage as GoogleLanguage]
              } and ${
                languageList[
                  translationPreset.translationLanguage as GoogleLanguage
                ]
              }`}
          </Text>
          <Text style={{ fontSize: 18 }}>
            • Share highlighted words or phrases from any app
          </Text>
          {isIos && (
            <Text style={{ fontSize: 18 }}>
              • Use the{' '}
              <Text
                style={{ color: theme.colors.primary }}
                onPress={() =>
                  Linking.openURL(
                    'https://vocably.pro/ios-safari-extension.html'
                  )
                }
              >
                Mobile Safari Extension
              </Text>{' '}
              to create flashcards while browsing on your mobile device.
            </Text>
          )}

          <Text style={{ fontSize: 18 }}>
            Use the{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() =>
                Linking.openURL(
                  'https://chromewebstore.google.com/detail/vocably-pro-language-flas/baocigmmhhdemijfjnjdidbkfgpgogmb'
                )
              }
            >
              Chrome
            </Text>{' '}
            or{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() =>
                Linking.openURL('https://apps.apple.com/app/id6464076425')
              }
            >
              Safari
            </Text>{' '}
            desktop extension to add words to your collection while browsing on
            your computer.
          </Text>
        </Displayer>
      )}
    </ScrollView>
  );
};
