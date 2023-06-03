import React, { FC, useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Pressable,
  Alert,
} from 'react-native';
import {
  Button,
  Dialog,
  MD3Theme,
  Portal,
  Text,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { mainPadding } from './styles';
import { CardItem, byDate } from '@vocably/model';
import { NavigationProp } from '@react-navigation/native';
import { EmptyCardsList } from './EmptyCardsList';
import { userSelectedDeck } from './languageDeck/userSelectedDeck';
import { dialogAlign } from './dialogAlign';

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
  theme: MD3Theme;
}) => ListRenderItem<CardItem> =
  ({ onDelete, onEdit, theme }): ListRenderItem<CardItem> =>
  ({ item, index }) =>
    (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? theme.colors.inversePrimary
              : theme.colors.background,
          },
        ]}
        onPress={() => onEdit(item)}
      >
        <CardListItem card={item.data} />
        <Icon
          style={[styles.button, { right: mainPadding, top: mainPadding }]}
          onPress={() => onDelete(item)}
          name="delete-outline"
          size={32}
          color={theme.colors.primary}
        />
      </Pressable>
    );

type EditDeckScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const EditDeckScreen: EditDeckScreen = ({ navigation }) => {
  const theme = useTheme();
  const { deck, remove } = userSelectedDeck();
  const [toBeDeleted, setToBeDeleted] = useState<false | CardItem>(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteAfterConfirmation = useCallback(async () => {
    if (toBeDeleted === false) {
      return;
    }

    setIsDeleting(true);
    const deleteResult = await remove(toBeDeleted.id);

    if (deleteResult.success === false) {
      Alert.alert(
        'Error: Card deletion failed',
        // `Oops! Something went wrong while attempting to delete the card. Please try again later and don't hesitate to let the support know if the issue persists.`
        `Oops! Something went wrong while attempting to delete the card. Please try again later.`
      );
    }

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
          <Text>Card list is empty</Text>
        </EmptyCardsList>
      )}
      {cards.length > 0 && (
        <FlatList
          style={{
            width: '100%',
          }}
          ItemSeparatorComponent={Separator}
          data={cards}
          renderItem={renderItem({
            onDelete: (card) => {
              setToBeDeleted(card);
              setIsDeleting(false);
            },
            onEdit: (card) => navigation.navigate('EditCard', { card }),
            theme: theme,
          })}
          keyExtractor={keyExtractor}
        />
      )}

      <Portal>
        <Dialog
          visible={toBeDeleted !== false}
          onDismiss={() => setToBeDeleted(false)}
          style={{
            alignSelf: dialogAlign,
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
