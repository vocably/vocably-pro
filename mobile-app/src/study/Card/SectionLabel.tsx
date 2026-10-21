import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

type Props = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
}>;

export const SectionLabel: FC<Props> = ({ children, style }) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        {
          fontSize: 13,
          fontWeight: '600',
          letterSpacing: 1,
          textTransform: 'uppercase',
          color: theme.colors.onSurfaceVariant,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
