import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Header = FC<StackHeaderProps>;

export const Header: Header = ({ back, navigation, route }) => {
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

      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};
