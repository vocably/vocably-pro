import { FC, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Button, Menu } from 'react-native-paper';

export type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  options: SelectOption[];
  value?: string;
  onChange?: (newValue: string) => void;
  anchorContainerStyle?: StyleProp<ViewStyle>;
};

export const Select: FC<Props> = ({
  options,
  value,
  onChange,
  anchorContainerStyle,
}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <View style={[{ alignItems: 'stretch' }, anchorContainerStyle]}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button style={{ width: '100%' }} mode="outlined" onPress={openMenu}>
            {selectedOption ? selectedOption.label : 'Select'}
          </Button>
        }
      >
        {options.map((option) => (
          <Menu.Item
            key={option.value}
            onPress={() => {
              onChange && onChange(option.value);
              closeMenu();
            }}
            title={option.label}
            trailingIcon={value === option.value ? 'check' : undefined}
          />
        ))}
      </Menu>
    </View>
  );
};
