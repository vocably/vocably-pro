import { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

type Props = {
  value?: string;
  autoFocus?: boolean;
  onSubmit?: (value: string) => any;
};

export const TagText: FC<Props> = ({
  value: initialValue = '',
  onSubmit,
  autoFocus = false,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const submit = () => {
    value && onSubmit && onSubmit(value);
    setValue('');
  };

  const canSave = value.trim() !== '';

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: isFocused
          ? theme.colors.primary
          : theme.colors.outlineVariant,
        borderRadius: 8,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          paddingLeft: 8,
          color: theme.colors.secondary,
          fontSize: 18,
        }}
        placeholder="New tag name"
        autoFocus={autoFocus}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        autoCapitalize={'none'}
        onChangeText={setValue}
        returnKeyType={'done'}
        onSubmitEditing={submit}
      />
      <IconButton
        icon="check"
        disabled={!canSave}
        onPress={submit}
        iconColor={theme.colors.primary}
        style={{
          opacity: canSave ? 1 : 0,
          marginVertical: 4,
          marginRight: 4,
          marginLeft: 0,
          backgroundColor: 'transparent',
        }}
      />
    </View>
  );
};
