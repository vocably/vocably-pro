import { NavigationProp } from '@react-navigation/native';
import { postOnboardingAction } from '@vocably/api';
import { GoogleLanguage } from '@vocably/model';
import { usePostHog } from 'posthog-react-native';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import { Button, Divider, Text, useTheme } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getItem, setItem } from './asyncAppStorage';
import { facility } from './facility';
import { LanguagesContext } from './languages/LanguagesContainer';
import { OnboardingSlider } from './OnboardingSlider';
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

  const postHog = usePostHog();

  const [isScrolled, setIsScrolled] = useState(false);

  const isNextButtonVisible =
    translationPreset.translationLanguage && translationPreset.sourceLanguage;

  useEffect(() => {
    postHog.capture('welcome');
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        minHeight: '90%',
      }}
    >
      {onboardingStep.status === 'loaded' && onboardingStep.value === 'form' && (
        <Displayer
          style={{ gap: 16, maxWidth: 600, paddingHorizontal: 24 }}
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
                  postOnboardingAction({
                    name: 'facilityOnboarded',
                    payload: {
                      facility,
                      targetLanguage: translationPreset.translationLanguage,
                    },
                  }).then();

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
          <OnboardingSlider
            setIsReverse={(isReverse) =>
              setTranslationPreset({
                ...translationPreset,
                isReverse,
              })
            }
            sourceLanguage={translationPreset.sourceLanguage as GoogleLanguage}
            targetLanguage={
              translationPreset.translationLanguage as GoogleLanguage
            }
          />
        </Displayer>
      )}
    </View>
  );
};
