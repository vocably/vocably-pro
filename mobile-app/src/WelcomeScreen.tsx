import { NavigationProp } from '@react-navigation/native';
import React, { FC, useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getItem, setItem } from './asyncAppStorage';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Select, SelectOption } from './Select';
import { SourceLanguageButton } from './SourceLanguageButton';
import { Displayer } from './study/Displayer';
import { TargetLanguageButton } from './TargetLanguageButton';
import { useTranslationPreset } from './TranslationPreset/useTranslationPreset';
import { useAsync } from './useAsync';

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

export const WelcomeScreen: FC<Props> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();
  const { refreshLanguages } = useContext(LanguagesContext);
  const [level, setLevel] = useAsync(getLevelFromStorage, setLevelToStorage);
  const [translationPreset, languagePairs, setTranslationPreset] =
    useTranslationPreset();
  const insets = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);
    refreshLanguages().then(() => {
      setRefreshing(false);
    });
  };

  const isOnboardingFormVisible =
    !translationPreset.translationLanguage ||
    !translationPreset.sourceLanguage ||
    !level;

  return (
    <ScrollView
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
      {isOnboardingFormVisible && (
        <Displayer style={{ gap: 16 }}>
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 24 }}>
            To get started, please answer the following questions:
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text
              style={{
                fontSize: 18,
                width: '40%',
                textAlign: 'right',
                color: theme.colors.onBackground,
              }}
            >
              What language do you speak?
            </Text>
            <TargetLanguageButton
              navigation={navigation}
              preset={translationPreset}
              onChange={setTranslationPreset}
              languagePairs={languagePairs}
              style={{ width: '60%' }}
            />
          </View>
          <Divider style={{ width: '100%' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text
              style={{
                fontSize: 18,
                width: '40%',
                textAlign: 'right',
                color: theme.colors.onBackground,
              }}
            >
              What language do you study?
            </Text>
            <SourceLanguageButton
              navigation={navigation}
              preset={translationPreset}
              onChange={setTranslationPreset}
              languagePairs={languagePairs}
              emptyText="Select"
              style={{ width: '60%' }}
            />
          </View>
          <View>
            <Text>
              You can study multiple languages. For now, let's pick the one.
            </Text>
          </View>
          <Divider style={{ width: '100%' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text
              style={{
                fontSize: 18,
                width: '40%',
                textAlign: 'right',
                color: theme.colors.onBackground,
              }}
            >
              What is your level?
            </Text>
            <Select
              options={languageLevels}
              value={level.status === 'loaded' ? level.value : ''}
              onChange={setLevel}
              anchorContainerStyle={{ width: '60%' }}
            />
          </View>
        </Displayer>
      )}
      {!isOnboardingFormVisible && (
        <Displayer>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Now, try to{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('LookUp')}
            >
              look up
            </Text>{' '}
            an unfamiliar word and add it to your collection.
          </Text>
        </Displayer>
      )}
    </ScrollView>
  );
};
