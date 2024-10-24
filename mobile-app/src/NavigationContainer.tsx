import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native';
import React, { FC, PropsWithChildren } from 'react';
import { useTheme } from 'react-native-paper';

export const NavigationContainer: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    // @ts-ignore
    <ReactNavigationContainer theme={theme}>
      {children}
    </ReactNavigationContainer>
  );
};
