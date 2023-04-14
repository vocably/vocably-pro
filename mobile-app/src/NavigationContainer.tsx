import React, { FC } from 'react';
import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native';
import { RootModalStack } from './RootModalStack';
import { useTheme } from 'react-native-paper';

type NavigationContainer = FC<{}>;

export const NavigationContainer: NavigationContainer = () => {
  const theme = useTheme();
  return (
    // @ts-ignore
    <ReactNavigationContainer theme={theme}>
      <RootModalStack />
    </ReactNavigationContainer>
  );
};
