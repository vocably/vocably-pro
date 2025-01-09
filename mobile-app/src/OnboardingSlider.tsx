import { useNavigation } from '@react-navigation/native';
import { GoogleLanguage, languageList } from '@vocably/model';
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
import { CardListItem } from './CardListItem';
import { IPhone } from './iPhone';
import { LanguagesContext } from './languages/LanguagesContainer';
import { SearchInput } from './LookUpScreen/SearchInput';
import { TranslationPresetForm } from './LookUpScreen/TranslationPresetForm';
import { getOnboardingData } from './Onboarding/getOnboardingData';
import { useColorScheme } from './useColorScheme';

type Props = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

const stringExample = 'זה *משהו* חדש';

export const OnboardingSlider: FC<Props> = ({
  sourceLanguage,
  targetLanguage,
}) => {
  const navigation: any = useNavigation();
  const swiperRef = useRef<Swiper>(null);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { languages } = useContext(LanguagesContext);

  const theme = useTheme();
  const colorScheme = useColorScheme();
  const sliderHeight = Math.min(windowHeight * 0.8, 600);
  const slideHeight = sliderHeight - 60;

  const onboardingData = getOnboardingData(sourceLanguage, targetLanguage);

  return (
    <View style={{ height: sliderHeight }}>
      <Swiper loop={false} showsPagination={true} ref={swiperRef}>
        <ScrollView
          contentContainerStyle={{
            height: slideHeight,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
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
            Vocably translates and makes flashcards like this one:
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
                maxWidth: 300,
              }}
              card={onboardingData.welcomeScreenCard}
              showExamples={true}
            />
          </View>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>
            You can save and study your flashcards with spaced repetition
            system.
          </Text>
          <Button
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Learn more →
          </Button>
        </ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: slideHeight,
            gap: 24,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you see a new {languageList[sourceLanguage]} word in real life or
            hear it in a conversation?{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('LookUp')}
            >
              Look it up!
            </Text>
          </Text>
          <IPhone
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
          </IPhone>

          <Button
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Next →
          </Button>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: slideHeight,
            gap: 24,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you want to say something in {languageList[sourceLanguage]} but
            don't know the word?{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('LookUp')}
            >
              Search for it in {languageList[targetLanguage]}!
            </Text>
          </Text>
          <IPhone
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
          </IPhone>

          <Button
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Next →
          </Button>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: slideHeight,
            gap: 24,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you see a new {languageList[sourceLanguage]} word while surfing
            the web in Mobile Safari? Translate it with{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() =>
                Linking.openURL('https://vocably.pro/ios-safari-extension.html')
              }
            >
              Vocably extension for Safari!
            </Text>
          </Text>
          <IPhone
            colorScheme={colorScheme}
            style={{ height: 350, maxWidth: 310 }}
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
          </IPhone>

          <Button
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Next →
          </Button>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: slideHeight,
            gap: 24,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontSize: 22 }}>
            Do you use a desktop computer? Install{' '}
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
            browser extension to surf the web in {languageList[sourceLanguage]}!
          </Text>
          <Image
            source={
              Platform.OS === 'ios'
                ? require('./DesktopSafari.png')
                : require('./DesktopChrome.png')
            }
            style={{
              width: 300,
              height: 200,
            }}
          />
          {languages.length > 0 && (
            <Button
              onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
            >
              Hide Welcome Page
            </Button>
          )}
        </View>
      </Swiper>
    </View>
  );
};
