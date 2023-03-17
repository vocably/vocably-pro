import { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import { Text, ActivityIndicator, useTheme } from 'react-native-paper';

type InlineLoader = PropsWithChildren;

export const InlineLoader: FC<InlineLoader> = ({ children }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator
        color={theme.colors.secondary}
        style={{ marginRight: 8 }}
        size={'small'}
      ></ActivityIndicator>
      <Text variant="bodyLarge">{children}</Text>
    </View>
  );
};
