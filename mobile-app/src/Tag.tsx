import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from './ThemeProvider';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export const Tag: FC<Props> = ({ children, style }) => {
  const theme = useAppTheme();

  return (
    <View
      style={[
        {
          paddingHorizontal: 10,
          // Tags are mostly lowercase: shift up to center the x-height
          paddingTop: 2,
          paddingBottom: 4,
          borderRadius: 12,
          backgroundColor: theme.colors.inputBg,
        },
        style,
      ]}
    >
      <Text
        style={{
          fontSize: 13,
          fontWeight: '500',
          letterSpacing: 0.3,
          lineHeight: 16,
          includeFontPadding: false,
          color: theme.colors.onSurfaceVariant,
        }}
      >
        {children}
      </Text>
    </View>
  );
};
