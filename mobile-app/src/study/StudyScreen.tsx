import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, IconButton, useTheme } from 'react-native-paper';
import {
  getAutoPlayFromStorage,
  saveAutoPlayToStorage,
} from '../autoPlayState';
import {
  getMaximumCardsPerSession,
  getMultiChoiceEnabled,
  getPreferMultiChoiceEnabled,
  getRandomizerEnabled,
} from '../MainMenu/PracticeSettingsScreen';
import { useAsync } from '../useAsync';
import { Study } from './Study';

type Dashboard = FC<{
  navigation: NavigationProp<any>;
}>;

export const StudyScreen: Dashboard = ({ navigation }) => {
  const theme = useTheme();

  const [autoPlayState, setAutoPlay] = useAsync(
    getAutoPlayFromStorage,
    saveAutoPlayToStorage
  );

  const [isMultiChoiceEnabledResult] = useAsync(getMultiChoiceEnabled);
  const [isRandomizerEnabledResult] = useAsync(getRandomizerEnabled);
  const [preferMultiChoiceEnabledResult] = useAsync(
    getPreferMultiChoiceEnabled
  );
  const [maximumCardsPerSessionResult] = useAsync(getMaximumCardsPerSession);

  if (
    isMultiChoiceEnabledResult.status !== 'loaded' ||
    isRandomizerEnabledResult.status !== 'loaded' ||
    autoPlayState.status !== 'loaded' ||
    maximumCardsPerSessionResult.status !== 'loaded' ||
    preferMultiChoiceEnabledResult.status !== 'loaded'
  ) {
    return <></>;
  }

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        height: '100%',
      }}
    >
      <View
        style={{
          position: 'absolute',
          width: '100%',
          padding: 20,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {autoPlayState.status === 'loaded' && (
          <IconButton
            icon={autoPlayState.value ? 'volume-high' : 'volume-variant-off'}
            size={24}
            animated={true}
            onPress={() => setAutoPlay(!autoPlayState.value)}
          />
        )}
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Button
            textColor={theme.colors.onBackground}
            onPress={() => navigation.goBack()}
          >
            Done
          </Button>
        </View>
      </View>
      <Study
        onExit={() => navigation.goBack()}
        autoPlay={autoPlayState.value}
        isRandomizerEnabled={isRandomizerEnabledResult.value}
        preferMultiChoiceEnabled={preferMultiChoiceEnabledResult.value}
        isMultiChoiceEnabled={isMultiChoiceEnabledResult.value}
        maximumCardsPerSession={maximumCardsPerSessionResult.value}
      ></Study>
    </View>
  );
};
