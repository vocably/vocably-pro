import { FC, useState } from 'react';
import { StyleProp, TextInput, View, ViewStyle } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  style?: StyleProp<ViewStyle>;
  value: string;
  onChange: (value: string) => void;
};

export const DashboardSearchInput: FC<Props> = ({ style, value, onChange }) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: isFocused
            ? theme.colors.primary
            : theme.colors.outlineVariant,
          borderWidth: 1,
          borderRadius: 32,
          paddingLeft: 16,
          paddingRight: 0,
          gap: 6,
        },
        style,
      ]}
    >
      <Icon
        name="magnify"
        size={24}
        color={theme.colors.outlineVariant}
        style={{
          opacity: 0.5,
        }}
      />
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          flex: 1,
          height: '100%',
          fontSize: 16,
          color: theme.colors.secondary,
          padding: 0,
        }}
        placeholder="Search..."
        value={value}
        onChangeText={onChange}
        returnKeyType={'done'}
        autoCapitalize={'none'}
      />
      {value && (
        <IconButton
          icon={'close-circle'}
          iconColor={theme.colors.outlineVariant}
          onPress={() => onChange('')}
          size={18}
        />
      )}
    </View>
  );
};
