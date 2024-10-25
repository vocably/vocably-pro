import { NavigationProp } from '@react-navigation/native';
import React, { FC, useCallback, useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Button, Divider, Text, useTheme } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';
import { SourceLanguageButton } from './SourceLanguageButton';
import { TargetLanguageButton } from './TargetLanguageButton';
import { useTranslationPreset } from './TranslationPreset/useTranslationPreset';

type Props = {
  navigation: NavigationProp<any>;
};

export const WelcomeScreen: FC<Props> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();
  const { refreshLanguages } = useContext(LanguagesContext);

  const [translationPreset, languagePairs, setTranslationPreset] =
    useTranslationPreset();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshLanguages().then(() => {
      setRefreshing(false);
    });
  }, [refreshLanguages, setRefreshing]);
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        gap: 16,
        minHeight: '100%',
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
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
        <Button mode="outlined" style={{ width: '60%' }}>
          Beginner (A2)
        </Button>
      </View>
      {/*<Text style={{ textAlign: 'center', fontSize: 18 }}>*/}
      {/*  To get started, try to{' '}*/}
      {/*  <Text*/}
      {/*    style={{ color: theme.colors.primary }}*/}
      {/*    onPress={() => navigation.navigate('LookUp')}*/}
      {/*  >*/}
      {/*    look up*/}
      {/*  </Text>{' '}*/}
      {/*  an unfamiliar word and add it to your collection.*/}
      {/*</Text>*/}
    </ScrollView>
  );
};
