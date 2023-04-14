import React, { FC, useCallback, useContext, useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Button, Dialog, Portal, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DeckContext } from './DeckContainer';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { mainPadding } from './styles';
import { CardItem, byDate } from '@vocably/model';
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
  onDelete: (card: CardItem) => void;
  onEdit: (card: CardItem) => void;
  buttonColor: string;
}) => ListRenderItem<CardItem> =
  ({ onDelete, onEdit, buttonColor }): ListRenderItem<CardItem> =>
  ({ item, index }) =>
    (
      <View style={{ position: 'relative' }}>
        <CardListItem card={item.data} />
        <Icon
          style={[styles.button, { right: 0 }]}
          onPress={() => onEdit(item)}
          name="pencil-box-outline"
          size={32}
          color={buttonColor}
        />
        <Icon
          style={[styles.button, { right: 36 }]}
          onPress={() => onDelete(item)}
          name="delete-outline"
          size={32}
          color={buttonColor}
        />
      </View>
    );

type EditDeckScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const EditDeckScreen: EditDeckScreen = ({ navigation }) => {
  const theme = useTheme();
  const { deck, remove } = useContext(DeckContext);
  const [toBeDeleted, setToBeDeleted] = useState<false | CardItem>(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteAfterConfirmation = useCallback(async () => {
    if (toBeDeleted === false) {
      return;
    }

    setIsDeleting(true);
    await remove(toBeDeleted.id);
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
            onDelete: (card) => {
              setToBeDeleted(card);
              setIsDeleting(false);
            },
            onEdit: (card) => navigation.navigate('EditCard', { card }),
            buttonColor: theme.colors.primary,
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
          <Dialog.Title style={{ color: theme.colors.secondary }}>
            Delete Card
          </Dialog.Title>
          <Dialog.Content>
            <Text style={{ color: theme.colors.secondary }}>
              Are you sure that you want to delete this card?
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
            <Button onPress={() => setToBeDeleted(false)} disabled={isDeleting}>
              No
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
