import { FC, ReactNode, Ref, useCallback, useRef } from 'react';
import {
  Animated,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../ThemeProvider';
import { darkShadows, lightShadows } from './CustomSurface';

type Props = TextInputProps & {
  ref?: Ref<TextInput>;
  style?: ViewStyle;
  inputStyle?: TextInputProps['style'];
  label?: string;
  labelStyle?: TextStyle;
  right?: ReactNode;
};

export const FormText: FC<Props> = ({
  style,
  onFocus,
  onBlur,
  inputStyle,
  label,
  labelStyle,
  right,
  ...textInputProps
}) => {
  const theme = useAppTheme();
  const focusAnimation = useRef(new Animated.Value(0)).current;

  const onFocusReloaded = useCallback(
    (e: any) => {
      Animated.timing(focusAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      onFocus && onFocus(e);
    },
    [onFocus, focusAnimation]
  );

  const onBlurReloaded = useCallback(
    (e: any) => {
      Animated.timing(focusAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      onBlur && onBlur(e);
    },
    [onBlur, focusAnimation]
  );

  // Solid surface so the shadow reads as a raised field; focus is shown
  // with a primary-tinted border instead of a darker fill.
  const borderColor = focusAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      theme.dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(16, 24, 40, 0.06)',
      theme.colors.primary,
    ],
  });

  return (
    <View
      style={[
        {
          gap: 16,
        },
        style,
      ]}
    >
      {label && <Text style={labelStyle}>{label}</Text>}
      <Animated.View
        style={{
          backgroundColor: theme.dark
            ? theme.colors.elevation.level2
            : theme.colors.surface,
          borderRadius: 16,
          borderWidth: 1,
          borderColor,
          boxShadow: (theme.dark ? darkShadows : lightShadows)[2],
          paddingHorizontal: 12,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={[
            {
              color: theme.colors.secondary,
              textAlignVertical: 'top',
              fontSize: 16,
              flexGrow: 1,
              paddingTop: 16,
              paddingBottom: 16,
            },
            inputStyle,
          ]}
          placeholderTextColor={theme.colors.inputPlaceholderColor}
          {...textInputProps}
          onFocus={onFocusReloaded}
          onBlur={onBlurReloaded}
        ></TextInput>
        {right}
      </Animated.View>
    </View>
  );
};
