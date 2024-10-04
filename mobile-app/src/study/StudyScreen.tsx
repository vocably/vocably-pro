import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, IconButton, useTheme } from 'react-native-paper';
import {
  getAutoPlayFromStorage,
  saveAutoPlayToStorage,
} from '../autoPlayState';
import {
  getMultiChoiceEnabled,
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
  const [isRandomizerEnabled] = useAsync(getRandomizerEnabled);

  if (
    isMultiChoiceEnabledResult.status !== 'loaded' ||
    isRandomizerEnabled.status !== 'loaded' ||
    autoPlayState.status !== 'loaded'
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
        isRandomizerEnabled={isRandomizerEnabled.value}
        isMultiChoiceEnabled={isMultiChoiceEnabledResult.value}
      ></Study>
    </View>
  );
};
