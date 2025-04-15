import { getFullLanguageName } from '@vocably/model';
import { FC, useContext, useState } from 'react';
import { PixelRatio } from 'react-native';
import { Appbar, Menu, useTheme } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';

type LanguageSelector = FC<{}>;

export const LanguageSelector: LanguageSelector = () => {
  const { languages, selectedLanguage, selectLanguage } =
    useContext(LanguagesContext);

  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onSelect = (language: string) => {
    selectLanguage(language).then();
    setTimeout(() => {
      closeMenu();
    }, 400);
  };

  const fontScale = PixelRatio.getFontScale();

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action
            icon="earth"
            onPress={openMenu}
            size={24 * fontScale}
          />
        }
      >
        {languages.map((language) => (
          <Menu.Item
            key={language}
            title={getFullLanguageName(language)}
            onPress={() => onSelect(language)}
            titleStyle={{ color: theme.colors.secondary }}
            trailingIcon={language === selectedLanguage ? 'check' : undefined}
          />
        ))}
      </Menu>
    </>
  );
};
