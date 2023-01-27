import { FC, useCallback, useContext, useState } from 'react';
import { Appbar, Button, Dialog, Menu, Portal, Text } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';
import { useNavigation } from '@react-navigation/native';

type EditDeckMenu = FC<{}>;

export const EditDeckMenu: EditDeckMenu = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [isAboutToDelete, setIsAboutToDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { selectedLanguage, deleteLanguage } = useContext(LanguagesContext);
  const navigation = useNavigation();

  const deleteAfterConfirmation = useCallback(async () => {
    setIsDeleting(true);
    await deleteLanguage(selectedLanguage);
    setIsAboutToDelete(false);
    setIsDeleting(false);
    navigation.goBack();
  }, [setIsDeleting]);

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action onPress={openMenu} icon={'dots-vertical'} />}
        anchorPosition={'bottom'}
      >
        <Menu.Item
          onPress={() => {
            setIsAboutToDelete(true);
            closeMenu();
          }}
          leadingIcon={'delete'}
          title="Delete deck"
        />
      </Menu>
      <Portal>
        <Dialog
          visible={isAboutToDelete}
          onDismiss={() => setIsAboutToDelete(false)}
          style={{
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Dialog.Title>Delete Deck</Dialog.Title>
          <Dialog.Content>
            <Text>
              Are you sure that you want to delete this deck? This operation can
              not be reversed.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={deleteAfterConfirmation}
              loading={isDeleting}
              disabled={isDeleting}
            >
              Yes
            </Button>
            <Button
              onPress={() => setIsAboutToDelete(false)}
              disabled={isDeleting}
            >
              No
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
