import { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

type Props = {
  autoFocus?: boolean;
  onSubmit?: (value: string) => any;
};

export const TagText: FC<Props> = ({ onSubmit, autoFocus = false }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const submit = () => {
    onSubmit && onSubmit(value);
    setValue('');
  };

  return (
    <View
      style={{
        width: '100%',
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
      {value && (
        <IconButton
          icon={'close-circle'}
          iconColor={theme.colors.outlineVariant}
          onPress={() => setValue('')}
          style={{
            marginVertical: 4,
            marginHorizontal: 0,
            backgroundColor: 'transparent',
          }}
        />
      )}
      <IconButton
        icon="check"
        disabled={value.trim() === ''}
        onPress={submit}
        iconColor={theme.colors.primary}
        style={{
          marginVertical: 4,
          marginRight: 4,
          backgroundColor: 'transparent',
        }}
      />
    </View>
  );
};
