import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PixelRatio, StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

const FREQUENCY_BARS = 3;
const BAR_HEIGHTS = [5, 8, 11];

// Frequency comes as 1 (rare) to 10 (most common).
export const frequencyToLevel = (frequency: number): 1 | 2 | 3 => {
  if (frequency >= 8) {
    return 3;
  }

  if (frequency >= 5) {
    return 2;
  }

  return 1;
};

type Props = {
  // 1 (rare) to 10 (most common)
  frequency: number;
  style?: StyleProp<ViewStyle>;
};

export const FrequencyIndicator: FC<Props> = ({ frequency, style }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const fontScale = PixelRatio.getFontScale();

  const level = frequencyToLevel(frequency);

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={t(`common.frequency_${level}`)}
      style={[
        {
          // Bars grow from a shared baseline, like a signal-strength meter.
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 2 * fontScale,
        },
        style,
      ]}
    >
      {Array.from({ length: FREQUENCY_BARS }, (_, index) => (
        <View
          key={index}
          style={{
            width: 3 * fontScale,
            height: BAR_HEIGHTS[index] * fontScale,
            borderRadius: 1,
            backgroundColor: theme.colors.primary,
            opacity: index < level ? 0.55 : 0.15,
          }}
        />
      ))}
    </View>
  );
};
