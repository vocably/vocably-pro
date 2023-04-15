import React, { FC, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
  },
});

type SearchInput = FC<{
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}>;

export const SearchInput: SearchInput = ({
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const isSearchDisabled = value === '';
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: 1,
          borderColor: isFocused
            ? theme.colors.primary
            : theme.colors.outlineVariant,
          borderRadius: 8,
        },
      ]}
    >
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          paddingLeft: 8,
          color: theme.colors.secondary,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        autoCapitalize={'none'}
        onChangeText={onChange}
        placeholder={placeholder}
        returnKeyType={'search'}
        onSubmitEditing={() => onSubmit(value)}
      />
      {value && (
        <IconButton
          icon={'close-circle'}
          iconColor={theme.colors.outlineVariant}
          onPress={() => onChange('')}
        />
      )}
      <IconButton
        icon={'magnify'}
        mode="contained"
        iconColor={theme.colors.onPrimary}
        style={{
          backgroundColor: isSearchDisabled
            ? theme.colors.surfaceVariant
            : theme.colors.primary,
        }}
        onPress={() => onSubmit(value)}
        disabled={isSearchDisabled}
      />
    </View>
  );
};
