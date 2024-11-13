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
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getItem, setItem } from './asyncAppStorage';
import { LanguagesContext } from './languages/LanguagesContainer';
import { SourceLanguageButton } from './SourceLanguageButton';
import { Displayer, DisplayerRef } from './study/Displayer';
import { TargetLanguageButton } from './TargetLanguageButton';
import { useTranslationPreset } from './TranslationPreset/useTranslationPreset';
import { useAsync } from './useAsync';

const isIos = Platform.OS === 'ios';

type Props = {
  navigation: NavigationProp<any>;
};

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
    translationPreset.translationLanguage && translationPreset.sourceLanguage;

  useEffect(() => {
    if (
      !isScrolled &&
      isNextButtonVisible &&
      scrollViewRef.current &&
      onboardingDisplayerRef.current
    ) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [translationPreset, isScrolled]);

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
        minHeight: '90%',
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {onboardingStep.status === 'loaded' && onboardingStep.value === 'form' && (
        <Displayer
          style={{ gap: 16, maxWidth: 600 }}
          ref={onboardingDisplayerRef}
        >
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 24 }}>
            To get started, please answer these questions:
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
            }}
          >
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
            <View style={{ width: '50%' }}>
              <SourceLanguageButton
                navigation={navigation}
                preset={translationPreset}
                onChange={setTranslationPreset}
                languagePairs={languagePairs}
                emptyText="Select"
              />
            </View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text>
              You can study multiple languages. For now, let's pick one.
            </Text>
          </View>
          {translationPreset.sourceLanguage && (
            <Animated.View
              entering={FadeInDown}
              style={{
                gap: 16,
              }}
            >
              <Divider style={{ width: '100%' }} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    flex: 1,
                    textAlign: 'right',
                    color: theme.colors.onBackground,
                  }}
                >
                  What is your mother{'\u00A0'}tongue?
                </Text>
                <View style={{ width: '50%' }}>
                  <TargetLanguageButton
                    navigation={navigation}
                    preset={translationPreset}
                    onChange={setTranslationPreset}
                    languagePairs={languagePairs}
                  />
                </View>
              </View>
            </Animated.View>
          )}
          {isNextButtonVisible && (
            <Animated.View entering={FadeInDown} style={{ marginTop: 25 }}>
              <Button
                mode="contained"
                onPress={async () => {
                  onboardingDisplayerRef.current &&
                    (await onboardingDisplayerRef.current.hide());

                  setOnboardingStep('faq');
                  scrollViewRef.current &&
                    scrollViewRef.current.scrollTo({
                      x: 0,
                      y: 0,
                      animated: true,
                    });
                  postHog.capture('welcome_submitted', {
                    studyLanguage: translationPreset.sourceLanguage,
                    nativeLanguage: translationPreset.translationLanguage,
                  });
                  postHog.capture('$set', {
                    $set: {
                      lastSourceLanguage: translationPreset.sourceLanguage,
                      lastTranslationLanguage:
                        translationPreset.translationLanguage,
                    },
                  });
                }}
              >
                Next
              </Button>
            </Animated.View>
          )}
        </Displayer>
      )}
      {onboardingStep.status === 'loaded' && onboardingStep.value === 'faq' && (
        <Displayer style={{ gap: 16, maxWidth: 600 }}>
          <Text style={{ fontSize: 18 }}>
            Vocably is designed to help you{' '}
            {isTranslate ? 'translate' : 'look up'} words and phrases right when
            you need them.
          </Text>

          <Text style={{ fontSize: 18 }}>
            Each time you {isTranslate ? 'translate' : 'look up'} a word,
            Vocably creates custom flashcards to save and study later.
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
            .
          </Text>
          <Text style={{ fontSize: 18 }}>
            • When you see a new{' '}
            {languageList[translationPreset.sourceLanguage as GoogleLanguage]}{' '}
            word in any app, select it and share with Vocably for definitions
            and translations.
          </Text>
          {isIos && (
            <Text style={{ fontSize: 18 }}>
              • Enable the{' '}
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
              for accurate AI translations while browsing on your mobile device.
            </Text>
          )}

          <Text style={{ fontSize: 18 }}>
            • On your computer — use the{' '}
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
            extensions with AI-powered word matching.
          </Text>
        </Displayer>
      )}
    </ScrollView>
  );
};
