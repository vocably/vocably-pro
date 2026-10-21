import { FC } from 'react';
import {
  Pressable,
  StyleProp,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../ThemeProvider';

type Props = {
  label: string;
  icon?: string;
  onClose?: () => void;
  closeAccessibilityLabel?: string;
  closeTestID?: string;
  style?: StyleProp<ViewStyle>;
};

export const Tag: FC<Props> = ({
  label,
  icon = 'tag-outline',
  onClose,
  closeAccessibilityLabel,
  closeTestID,
  style,
}) => {
  const theme = useAppTheme();
  const { fontScale } = useWindowDimensions();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          maxWidth: '100%',
          minHeight: 30,
          paddingLeft: 10,
          paddingRight: onClose ? 4 : 12,
          paddingVertical: 4,
          gap: 6,
          borderRadius: 999,
          borderWidth: 1,
          borderColor: theme.colors.inputBgFocused,
          backgroundColor: theme.colors.inputBg,
        },
        style,
      ]}
    >
      <Icon
        name={icon}
        size={14 * fontScale}
        color={theme.colors.inputIconColor}
      />
      <Text
        numberOfLines={1}
        style={{
          flexShrink: 1,
          fontSize: 14,
          fontWeight: '500',
          letterSpacing: 0.1,
          color: theme.colors.onSurface,
        }}
      >
        {label}
      </Text>
      {onClose && (
        <Pressable
          testID={closeTestID}
          onPress={onClose}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={closeAccessibilityLabel ?? label}
          style={({ pressed }) => ({
            width: 22 * fontScale,
            height: 22 * fontScale,
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: pressed
              ? theme.colors.inputBgFocused
              : 'transparent',
          })}
        >
          <Icon
            name="close"
            size={14 * fontScale}
            color={theme.colors.inputIconColor}
          />
        </Pressable>
      )}
    </View>
  );
};
