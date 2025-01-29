import { useNavigation } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
import { usePostHog } from 'posthog-react-native';
import React, { FC, useContext, useRef } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import { Button, Divider, Text, useTheme } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardListItem } from './CardListItem';
import { LanguagesContext } from './languages/LanguagesContainer';
import { SearchInput } from './LookUpScreen/SearchInput';
import { TranslationPresetForm } from './LookUpScreen/TranslationPresetForm';
import { getOnboardingData } from './Onboarding/getOnboardingData';
import { Telephone } from './Telephone';
import { useColorScheme } from './useColorScheme';
import { WelcomeContext } from './WelcomeContainer';

type Props = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  setIsReverse: (isReverse: boolean) => void;
};

const isAndroid = Platform.OS === 'android';

export const OnboardingSlider: FC<Props> = ({
  sourceLanguage,
  targetLanguage,
  setIsReverse,
}) => {
  const navigation: any = useNavigation();
  const swiperRef = useRef<Swiper>(null);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { languages } = useContext(LanguagesContext);

  const theme = useTheme();
  const colorScheme = useColorScheme();
  const sliderHeight = Math.min(windowHeight * 0.7, 600);
  const { setIsWelcomeVisible } = useContext(WelcomeContext);

  const onboardingData = getOnboardingData(sourceLanguage, targetLanguage);

  const posthog = usePostHog();

  return (
    <View style={{ height: sliderHeight }}>
      <Swiper
        loop={false}
        showsPagination={true}
        ref={swiperRef}
        onIndexChanged={(index) => {
          posthog.capture('onboardingSwiped', {
            index,
          });
        }}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
            paddingBottom: 60,
            flexGrow: 1,
          }}
        >
          {languages.length === 0 && (
            <>
              <Text style={{ fontSize: 22, textAlign: 'center' }}>
                You don't have flashcards yet.
              </Text>

              <Text style={{ fontSize: 18, textAlign: 'center' }}>But...</Text>
            </>
          )}

          <Text style={{ fontSize: 22, textAlign: 'center' }}>
            Vocably translates words and makes flashcards like this one:
          </Text>
          <View
            style={{
              borderRadius: 16,
              padding: 16,
              borderWidth: 1,
              borderColor: theme.colors.secondary,
              backgroundColor: theme.colors.surfaceVariant,
            }}
          >
            <CardListItem
              style={{
                width: '100%',
                padding: 0,
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              card={onboardingData.welcomeScreenCard}
              showExamples={true}
            />
          </View>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>
            You can save <Icon name="plus-circle" size={18} /> your flashcards
            and study them with spaced repetition system.
          </Text>
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
            paddingBottom: 60,
            flexGrow: 1,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you see or hear a new {languageList[sourceLanguage]} word
            somewhere?{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => {
                navigation.navigate('LookUp');
                setTimeout(() => {
                  setIsReverse(false);
                }, 500);
                posthog.capture('onboardingLookUpClicked');
              }}
            >
              Look it up!
            </Text>
          </Text>
          <Telephone
            colorScheme={colorScheme}
            style={{ height: 350, maxWidth: 310 }}
          >
            <View pointerEvents="none">
              <View style={{ marginBottom: 16, marginTop: 44 }}>
                <TranslationPresetForm
                  navigation={navigation}
                  preset={{
                    sourceLanguage:
                      onboardingData.directTranslationExample.sourceLanguage,
                    translationLanguage:
                      onboardingData.directTranslationExample.targetLanguage,
                    isReverse:
                      onboardingData.directTranslationExample.isReversed,
                  }}
                  onChange={() => {}}
                  languagePairs={{}}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <SearchInput
                  value={onboardingData.directTranslationExample.text}
                  placeholder={''}
                  onChange={() => {}}
                  onSubmit={() => {}}
                />
              </View>
              {onboardingData.directTranslationExample.results.map(
                (card, index) => (
                  <View key={index}>
                    {index > 0 && <Divider bold={true} />}
                    <CardListItem style={{ paddingVertical: 16 }} card={card} />
                  </View>
                )
              )}
            </View>
          </Telephone>
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
            paddingBottom: 60,
            flexGrow: 1,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you want to say something in {languageList[sourceLanguage]} but
            don't know the word?{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => {
                navigation.navigate('LookUp');
                setTimeout(() => {
                  setIsReverse(true);
                }, 500);
                posthog.capture('onboardingReverseLookUpClicked');
              }}
            >
              Look it up in {languageList[targetLanguage]}!
            </Text>
          </Text>
          <Telephone
            colorScheme={colorScheme}
            style={{ height: 350, maxWidth: 310 }}
          >
            <View pointerEvents="none">
              <View style={{ marginBottom: 16, marginTop: 44 }}>
                <TranslationPresetForm
                  navigation={navigation}
                  preset={{
                    sourceLanguage:
                      onboardingData.reverseTranslationExample.sourceLanguage,
                    translationLanguage:
                      onboardingData.reverseTranslationExample.targetLanguage,
                    isReverse:
                      onboardingData.reverseTranslationExample.isReversed,
                  }}
                  onChange={() => {}}
                  languagePairs={{}}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <SearchInput
                  value={onboardingData.reverseTranslationExample.text}
                  placeholder={''}
                  onChange={() => {}}
                  onSubmit={() => {}}
                />
              </View>
              {onboardingData.reverseTranslationExample.results.map(
                (card, index) => (
                  <View key={index}>
                    {index > 0 && <Divider bold={true} />}
                    <CardListItem style={{ paddingVertical: 16 }} card={card} />
                  </View>
                )
              )}
            </View>
          </Telephone>
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
            paddingBottom: 60,
            flexGrow: 1,
          }}
        >
          {!isAndroid && (
            <Text style={{ fontSize: 22 }}>
              Do you see a new {languageList[sourceLanguage]} word while surfing
              the web in Mobile Safari? Translate it with{' '}
              <Text
                style={{ color: theme.colors.primary }}
                onPress={() => {
                  Linking.openURL(
                    'https://vocably.pro/ios-safari-extension.html'
                  );
                  posthog.capture('onboardingMobileSafariClicked');
                }}
              >
                Vocably extension for Safari!
              </Text>
            </Text>
          )}
          {isAndroid && (
            <View style={{ gap: 8 }}>
              <Text style={{ fontSize: 22 }}>
                Do you see a new {languageList[sourceLanguage]} word on the
                screen of your Android device?
              </Text>
              <Text style={{ fontSize: 22 }}>
                Select the word <Icon name="arrow-right" size={18} /> Click{' '}
                <Icon name="dots-vertical" size={22} />{' '}
                <Icon name="arrow-right" size={22} /> Click "Translate with
                Vocably"
              </Text>
            </View>
          )}
          <Telephone
            colorScheme={colorScheme}
            style={{ height: 300, maxWidth: 310 }}
          >
            <View
              pointerEvents="none"
              style={{
                marginTop: 64,
                alignItems: 'center',
                gap: 24,
                position: 'relative',
              }}
            >
              <View>
                <Text style={{ fontSize: 24 }}>
                  {onboardingData.contextTranslationExample.text
                    .split('*')
                    .map((part, index) => (
                      <Text
                        key={index}
                        style={{
                          backgroundColor: index === 1 ? '#2C9FD9' : undefined,
                        }}
                      >
                        {part}
                      </Text>
                    ))}
                </Text>
              </View>
            </View>

            <View
              style={{
                position: 'absolute',
                left: 0,
                top: 110,
                right: 0,
                backgroundColor: theme.colors.surfaceVariant,
                borderWidth: 1,
                borderColor: theme.colors.outlineVariant,
                borderRadius: 16,
              }}
            >
              {onboardingData.contextTranslationExample.results.map(
                (card, index) => (
                  <View key={index}>
                    {index > 0 && <Divider bold={true} />}
                    <CardListItem
                      style={{ padding: 16 }}
                      card={card}
                      showExamples={true}
                    />
                  </View>
                )
              )}
            </View>
          </Telephone>
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
            paddingBottom: 60,
            flexGrow: 1,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you use a desktop computer? Install{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => {
                Linking.openURL(
                  'https://chromewebstore.google.com/detail/vocably-pro-language-flas/baocigmmhhdemijfjnjdidbkfgpgogmb'
                );
                posthog.capture('onboardingChromeLinkClicked');
              }}
            >
              Chrome
            </Text>{' '}
            or{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => {
                Linking.openURL('https://apps.apple.com/app/id6464076425');
                posthog.capture('onboardingSafariLinkClicked');
              }}
            >
              Safari
            </Text>{' '}
            browser extension to surf the web in {languageList[sourceLanguage]}!
          </Text>
          <Image
            source={require('./Desktop.png')}
            style={{
              width: 300,
              height: 200,
            }}
          />
          {languages.length > 0 && (
            <Button
              onPress={() => {
                setIsWelcomeVisible(false);
                posthog.capture('onboardingHideClicked');
              }}
            >
              Hide Welcome Page
            </Button>
          )}
        </ScrollView>
      </Swiper>
    </View>
  );
};
