import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Appbar } from 'react-native-paper';

type Header = FC<StackHeaderProps>;

export const Header: Header = ({ options, back, navigation, route }) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="menu"
          onPress={() =>
            (navigation as any as DrawerNavigationProp<{}>).openDrawer()
          }
        />
      )}

      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
};
