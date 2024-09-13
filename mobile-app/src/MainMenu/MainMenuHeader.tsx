import { StackHeaderProps } from '@react-navigation/stack';
import { FC } from 'react';
import { Appbar } from 'react-native-paper';

export const MainMenuHeader: FC<StackHeaderProps> = ({
  back,
  options,
  navigation,
}) => {
  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
};
