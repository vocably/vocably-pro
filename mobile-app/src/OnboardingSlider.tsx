import { useNavigation } from '@react-navigation/native';
import { GoogleLanguage } from '@vocably/model';
import { FC, useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import { CardListItem } from './CardListItem';
import { IPhone } from './iPhone';
import { SearchInput } from './LookUpScreen/SearchInput';
import { TranslationPresetForm } from './LookUpScreen/TranslationPresetForm';
import { getOnboardingData } from './Onboarding/getOnboardingData';

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

  const theme = useTheme();
  const sliderHeight = Math.min(windowHeight * 0.8, 600);
  const slideHeight = sliderHeight - 60;

  const onboardingData = getOnboardingData(sourceLanguage, targetLanguage);

  return (
    <View style={{ height: sliderHeight }}>
      <Swiper loop={false} showsPagination={true} ref={swiperRef}>
        <View
          style={{
            height: slideHeight,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontSize: 22, textAlign: 'center' }}>
            You don't have flashcards yet.
          </Text>

          <Text style={{ fontSize: 18, textAlign: 'center' }}>But...</Text>

          <Text style={{ fontSize: 22, textAlign: 'center' }}>
            Vocably translates anything and makes flashcards like this one:
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
            <CardListItem card={onboardingData.card} />
          </View>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>
            You can practice your flashcards with spaced repetition system.
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.onBackground,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
              }}
              onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
            >
              Swipe to learn more →
            </Text>
          </View>
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
            Do you see a new English word in real life of hear it in a
            conversation?{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('LookUp')}
            >
              Look it up!
            </Text>
          </Text>
          <IPhone style={{ height: 350 }}>
            <View pointerEvents="none">
              <View style={{ marginBottom: 16, marginTop: 44 }}>
                <TranslationPresetForm
                  navigation={navigation}
                  preset={{
                    sourceLanguage: 'en',
                    translationLanguage: 'ru',
                    isReverse: false,
                  }}
                  onChange={() => {}}
                  languagePairs={{}}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <SearchInput
                  value={'Test'}
                  placeholder={''}
                  onChange={() => {}}
                  onSubmit={() => {}}
                />
              </View>
              <CardListItem
                style={{ paddingVertical: 16 }}
                card={{
                  source: 'something',
                  definition: '',
                  example: '',
                  ipa: 'something',
                  partOfSpeech: 'noun',
                  tags: [],
                  language: 'en',
                  translation: 'Something',
                }}
              />
              <Divider bold={true} />
              <CardListItem
                style={{ paddingVertical: 16 }}
                card={{
                  source: 'something',
                  definition: '',
                  example: '',
                  ipa: 'something',
                  partOfSpeech: 'noun',
                  tags: [],
                  language: 'en',
                  translation: 'Something',
                }}
              />
            </View>
          </IPhone>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.onBackground,
            }}
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Next →
          </Text>
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
            Do you want to say something in English but don't know the word?{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('LookUp')}
            >
              Search for it in Russian!
            </Text>
          </Text>
          <IPhone style={{ height: 350 }}>
            <View pointerEvents="none">
              <View style={{ marginBottom: 16, marginTop: 44 }}>
                <TranslationPresetForm
                  navigation={navigation}
                  preset={{
                    sourceLanguage: 'en',
                    translationLanguage: 'ru',
                    isReverse: false,
                  }}
                  onChange={() => {}}
                  languagePairs={{}}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
                <SearchInput
                  value={'Test'}
                  placeholder={''}
                  onChange={() => {}}
                  onSubmit={() => {}}
                />
              </View>
              <CardListItem
                style={{ paddingVertical: 16 }}
                card={{
                  source: 'something',
                  definition: '',
                  example: '',
                  ipa: 'something',
                  partOfSpeech: 'noun',
                  tags: [],
                  language: 'en',
                  translation: 'Something',
                }}
              />
              <Divider bold={true} />
              <CardListItem
                style={{ paddingVertical: 16 }}
                card={{
                  source: 'something',
                  definition: '',
                  example: '',
                  ipa: 'something',
                  partOfSpeech: 'noun',
                  tags: [],
                  language: 'en',
                  translation: 'Something',
                }}
              />
            </View>
          </IPhone>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.onBackground,
            }}
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Next →
          </Text>
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
            Do you see a new English word while surfing the web in Mobile
            Safari? Translate it with Vocably extension for Safari!
          </Text>
          <IPhone style={{ height: 350 }}>
            <View
              pointerEvents="none"
              style={{ marginTop: 64, alignItems: 'center', gap: 24 }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.surfaceVariant,
                  borderRadius: 16,
                }}
              >
                <CardListItem
                  style={{
                    padding: 16,
                  }}
                  card={{
                    source: 'something',
                    definition: '',
                    example: '',
                    ipa: 'something',
                    partOfSpeech: 'noun',
                    tags: [],
                    language: 'en',
                    translation: 'Something',
                  }}
                />
                <Divider bold={true} />
                <CardListItem
                  card={{
                    source: 'something',
                    definition: '',
                    example: '',
                    ipa: 'something',
                    partOfSpeech: 'noun',
                    tags: [],
                    language: 'en',
                    translation: 'Something',
                  }}
                />
              </View>

              <View>
                <Text style={{ fontSize: 36 }}>
                  {stringExample
                    .split('*')
                    .map((part, index) =>
                      index === 1 ? (
                        <Text style={{ backgroundColor: '#2C9FD9' }}>
                          {part}
                        </Text>
                      ) : (
                        part
                      )
                    )}
                </Text>
              </View>
            </View>
          </IPhone>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.onBackground,
            }}
            onPress={() => swiperRef.current && swiperRef.current.scrollBy(1)}
          >
            Next →
          </Text>
        </View>
      </Swiper>
    </View>
  );
};
