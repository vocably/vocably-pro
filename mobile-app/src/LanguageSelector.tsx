import { FC, useContext, useState } from 'react';
import { Appbar, Portal, Dialog, Button, Menu } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';
import { getFullLanguageName } from '@vocably/model';

type LanguageSelector = FC<{}>;

export const LanguageSelector: LanguageSelector = () => {
  const { languages, selectedLanguage, selectLanguage } =
    useContext(LanguagesContext);

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const onSelect = (language: string) => {
    selectLanguage(language).then();
    hideDialog();
  };

  return (
    <>
      <Appbar.Action icon="earth" onPress={showDialog} />
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Dialog.Title>Select Language Deck</Dialog.Title>
          <Dialog.Content>
            {languages.map((language) => (
              <Menu.Item
                key={language}
                title={getFullLanguageName(language)}
                onPress={() => onSelect(language)}
                leadingIcon={
                  language === selectedLanguage
                    ? 'radiobox-marked'
                    : 'radiobox-blank'
                }
              />
            ))}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
