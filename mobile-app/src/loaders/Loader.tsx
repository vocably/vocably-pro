import { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text, useTheme } from 'react-native-paper';

type Loader = {
  children: ReactNode;
};

export const Loader: FC<Loader> = ({ children }) => {
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
        {children}
      </Text>
    </View>
  );
};
