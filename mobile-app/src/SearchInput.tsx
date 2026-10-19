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

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  disabled?: boolean;
  multiline?: boolean;
  pasteFromClipboard?: boolean;
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

    const backgroundColor = focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.inputBg, theme.colors.inputBgFocused],
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
          backgroundColor: backgroundColor,
          paddingLeft: 12,
        }}
      >
        <TextInput
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
          placeholderTextColor={theme.colors.tertiary}
          returnKeyType={'search'}
          onSubmitEditing={() => onSubmit(textRef.current)}
        />
        {pasteFromClipboard && !text && clipboardHasText && (
          <IconButton
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
            icon={'close-circle'}
            mode="contained"
            iconColor={theme.colors.inputIconColor}
            onPress={() => {
              inputRef.current?.clear();
              handleChangeText('');
              inputRef.current?.focus();
            }}
            style={{ backgroundColor: 'transparent' }}
            size={18}
          />
        )}
        <IconButton
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
