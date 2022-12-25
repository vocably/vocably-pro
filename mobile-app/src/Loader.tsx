import React, { FC } from 'react';
import { View } from 'react-native';
import { Text, ActivityIndicator, useTheme } from 'react-native-paper';

export const Loader: FC = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator
        color={theme.colors.secondary}
        style={{ marginBottom: 20 }}
        size={25}
      ></ActivityIndicator>
      <Text variant="bodyLarge" style={{ marginBottom: 15 }}>
        Loading
      </Text>
    </View>
  );
};
