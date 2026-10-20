import { FC, PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { MD3Elevation } from 'react-native-paper';
import { useAppTheme } from '../ThemeProvider';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  elevation?: MD3Elevation;
}>;

// Layered shadows: a tight contact shadow for definition plus a wide,
// soft ambient shadow for depth. Opacity stays low so cards lift off
// the page without looking smudged.
export const lightShadows: Record<MD3Elevation, string> = {
  0: 'none',
  1: '0px 1px 2px rgba(16, 24, 40, 0.04), 0px 4px 16px rgba(16, 24, 40, 0.06)',
  2: '0px 1px 3px rgba(16, 24, 40, 0.05), 0px 6px 20px rgba(16, 24, 40, 0.08)',
  3: '0px 2px 4px rgba(16, 24, 40, 0.05), 0px 10px 28px rgba(16, 24, 40, 0.1)',
  4: '0px 2px 6px rgba(16, 24, 40, 0.06), 0px 14px 36px rgba(16, 24, 40, 0.12)',
  5: '0px 3px 8px rgba(16, 24, 40, 0.07), 0px 20px 48px rgba(16, 24, 40, 0.14)',
};

// On dark backgrounds shadows barely read, so depth comes mostly from the
// lighter elevation color and a faint top-lit border.
export const darkShadows: Record<MD3Elevation, string> = {
  0: 'none',
  1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 4px 12px rgba(0, 0, 0, 0.25)',
  2: '0px 1px 3px rgba(0, 0, 0, 0.32), 0px 6px 16px rgba(0, 0, 0, 0.28)',
  3: '0px 2px 4px rgba(0, 0, 0, 0.34), 0px 10px 24px rgba(0, 0, 0, 0.3)',
  4: '0px 2px 6px rgba(0, 0, 0, 0.36), 0px 14px 32px rgba(0, 0, 0, 0.32)',
  5: '0px 3px 8px rgba(0, 0, 0, 0.38), 0px 20px 44px rgba(0, 0, 0, 0.34)',
};

export const CustomSurface: FC<Props> = ({
  style,
  children,
  elevation = 1,
}) => {
  const theme = useAppTheme();

  return (
    <View
      style={[
        {
          padding: 4,
          borderRadius: 16,
          backgroundColor: theme.dark
            ? theme.colors.elevation[`level${elevation}`]
            : theme.colors.surface,
          borderWidth: elevation > 0 ? 1 : 0,
          borderColor: theme.dark
            ? 'rgba(255, 255, 255, 0.06)'
            : 'rgba(16, 24, 40, 0.06)',
          boxShadow: (theme.dark ? darkShadows : lightShadows)[elevation],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
