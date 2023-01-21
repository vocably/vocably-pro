import React, { FC, useCallback, useContext, useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Button, Dialog, Portal, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DeckContext } from './DeckContainer';
import { byDate } from '@vocably/sulna';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { mainPadding } from './styles';
import { CardItem } from '@vocably/model';
import { NavigationProp } from '@react-navigation/native';
import { EmptyCardsList } from './EmptyCardsList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    position: 'absolute',
    top: 0,
  },
});

const renderItem: (options: {
  onDelete: (id: string) => void;
  buttonColor: string;
}) => ListRenderItem<CardItem> =
  ({ onDelete, buttonColor }): ListRenderItem<CardItem> =>
  ({ item, index }) =>
    (
      <View style={{ position: 'relative' }}>
        <CardListItem key={item.id} card={item} />
        <Icon
          style={[styles.button, { right: 0 }]}
          onPress={() => onDelete(item.id)}
          name="pencil-box-outline"
          size={32}
          color={buttonColor}
        />
        <Icon
          style={[styles.button, { right: 36 }]}
          onPress={() => onDelete(item.id)}
          name="delete-outline"
          size={32}
          color={buttonColor}
        />
      </View>
    );

type EditDeck = FC<{
  navigation: NavigationProp<any>;
}>;

export const EditDeck: EditDeck = ({ navigation }) => {
  const theme = useTheme();
  const { status, deck, update, remove } = useContext(DeckContext);
  const [toBeDeleted, setToBeDeleted] = useState<false | string>(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteAfterConfirmation = useCallback(async () => {
    if (toBeDeleted === false) {
      return;
    }

    setIsDeleting(true);
    await remove(toBeDeleted, { silent: false });
    setIsDeleting(false);
    setToBeDeleted(false);
  }, [toBeDeleted, remove, isDeleting]);

  const cards = deck.cards.sort(byDate);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      {cards.length === 0 && (
        <EmptyCardsList>
          <Text>Cards list is empty</Text>
        </EmptyCardsList>
      )}
      {cards.length > 0 && (
        <FlatList
          style={{
            width: '100%',
            padding: mainPadding,
          }}
          ItemSeparatorComponent={Separator}
          data={cards}
          renderItem={renderItem({
            onDelete: (id) => {
              setToBeDeleted(id);
              setIsDeleting(false);
            },
            buttonColor: theme.colors.secondary,
          })}
          keyExtractor={keyExtractor}
        />
      )}

      <Portal>
        <Dialog
          visible={toBeDeleted !== false}
          onDismiss={() => setToBeDeleted(false)}
          style={{
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Dialog.Title>Delete Card</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure that you want to delete this card?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={deleteAfterConfirmation}
              loading={isDeleting}
              disabled={isDeleting}
            >
              Yes
            </Button>
            <Button onPress={() => setToBeDeleted(false)} disabled={isDeleting}>
              No
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
