import Clipboard from '@react-native-clipboard/clipboard';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Animated, Platform, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useAppTheme } from './ThemeProvider';
import { darkShadows, lightShadows } from './ui/CustomSurface';

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  disabled?: boolean;
  multiline?: boolean;
  pasteFromClipboard?: boolean;
  onClear?: () => void;
};

export type SearchInputRef = {
  focus: () => void;
  blur: () => void;
};

export const SearchInput = forwardRef<SearchInputRef, Props>(
  (
    {
      value,
      placeholder,
      onChange,
      onSubmit,
      disabled = false,
      multiline = false,
      pasteFromClipboard = false,
      onClear,
    },
    ref
  ) => {
    const [clipboardHasText, setClipboardHasText] = useState(false);
    const theme = useAppTheme();
    const inputRef = useRef<TextInput>(null);

    // The input is uncontrolled: passing `value` to TextInput makes RN push
    // text back to the native view on every change, which breaks iOS dictation.
    // `textRef` mirrors the native text, `text` drives the buttons.
    const textRef = useRef(value);
    const [text, setText] = useState(value);
    // Bumping the key remounts TextInput so it picks up a new defaultValue.
    const [inputKey, setInputKey] = useState(0);
    const [autoFocus, setAutoFocus] = useState(false);

    const updateText = (newText: string) => {
      textRef.current = newText;
      setText(newText);
    };

    const replaceNativeText = (newText: string) => {
      updateText(newText);
      setAutoFocus(inputRef.current?.isFocused() ?? false);
      setInputKey((key) => key + 1);
    };

    useEffect(() => {
      if (value !== textRef.current) {
        replaceNativeText(value);
      }
    }, [value]);

    const handleChangeText = (newText: string) => {
      updateText(newText);
      onChange(newText);
    };

    const focusAnimation = useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
      Animated.timing(focusAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    const handleBlur = () => {
      Animated.timing(focusAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    // Solid surface so the shadow reads as a raised field; focus is shown
    // with a primary-tinted border instead of a darker fill.
    const borderColor = focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        theme.dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(16, 24, 40, 0.06)',
        theme.colors.primary,
      ],
    });

    useImperativeHandle(ref, () => ({
      focus: () => {
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
      },
      blur: () => {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      },
    }));

    Clipboard.hasString().then((hasText) => setClipboardHasText(hasText));

    const setTextFromClipboard = async () => {
      const clipboardText = await Clipboard.getString();
      replaceNativeText(clipboardText);
      onChange(clipboardText);
    };

    const isSearchDisabled = text === '';
    return (
      <Animated.View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          opacity: disabled ? 0.5 : 1,
          backgroundColor: theme.dark
            ? theme.colors.elevation.level2
            : theme.colors.surface,
          borderWidth: 1,
          borderColor,
          boxShadow: (theme.dark ? darkShadows : lightShadows)[2],
          paddingLeft: 12,
        }}
      >
        <TextInput
          testID="search-input"
          key={inputKey}
          ref={inputRef}
          autoFocus={autoFocus}
          style={{
            flex: 1,
            color: theme.colors.secondary,
            fontSize: 18,
            minHeight: 24,
            paddingTop: Platform.OS === 'android' ? 11 : 12,
            paddingBottom: 10,
          }}
          multiline={multiline}
          numberOfLines={1}
          editable={!disabled}
          onFocus={() => {
            handleFocus();
          }}
          onBlur={() => {
            handleBlur();
          }}
          defaultValue={textRef.current}
          autoCapitalize={'none'}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.inputPlaceholderColor}
          returnKeyType={'search'}
          onSubmitEditing={() => onSubmit(textRef.current)}
        />
        {pasteFromClipboard && !text && clipboardHasText && (
          <IconButton
            testID="search-paste"
            icon={'content-paste'}
            mode="contained"
            iconColor={theme.colors.inputIconColor}
            onPress={setTextFromClipboard}
            style={{ backgroundColor: 'transparent' }}
            size={20}
          />
        )}
        {text !== '' && (
          <IconButton
            testID="search-clear"
            icon={'close-circle'}
            mode="contained"
            iconColor={theme.colors.inputIconColor}
            onPress={() => {
              inputRef.current?.clear();
              handleChangeText('');
              onClear?.();
              inputRef.current?.focus();
            }}
            style={{ backgroundColor: 'transparent' }}
            size={18}
          />
        )}
        <IconButton
          testID="search-submit"
          icon={'magnify'}
          mode="contained"
          iconColor={theme.colors.inputIconColor}
          style={{
            backgroundColor: 'transparent',
          }}
          onPress={() => {
            if (!isSearchDisabled) {
              onSubmit(textRef.current);
            } else {
              inputRef.current?.focus();
            }
          }}
        />
      </Animated.View>
    );
  }
);
