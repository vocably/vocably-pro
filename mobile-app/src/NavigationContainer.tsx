import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { useTheme } from 'react-native-paper';
import { RootModalStack } from './RootModalStack';

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
