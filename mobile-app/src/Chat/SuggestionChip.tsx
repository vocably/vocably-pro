import { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../ThemeProvider';
import { PressableScale } from '../ui/PressableScale';

type Props = {
  icon: string;
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export const SuggestionChip: FC<Props> = ({
  icon,
  label,
  onPress,
  disabled = false,
}) => {
  const theme = useAppTheme();

  return (
    <View style={{ opacity: disabled ? 0.4 : 1 }}>
      <PressableScale
        onPress={disabled ? undefined : onPress}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          paddingLeft: 10,
          paddingRight: 14,
          paddingVertical: 8,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.inversePrimary,
        }}
      >
        <Icon name={icon} size={18} color={theme.colors.primary} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: theme.colors.primary,
          }}
        >
          {label}
        </Text>
      </PressableScale>
    </View>
  );
};
