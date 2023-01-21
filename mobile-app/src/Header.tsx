import React, { FC, useContext } from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { LanguagesContext } from './languages/LanguagesContainer';
import { LanguageSelector } from './LanguageSelector';

type Header = FC<StackHeaderProps>;

export const Header: Header = ({ options, back, navigation, route }) => {
  const { languages } = useContext(LanguagesContext);

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

      {route.name === 'Dashboard' && languages.length > 1 && (
        <LanguageSelector />
      )}
    </Appbar.Header>
  );
};
