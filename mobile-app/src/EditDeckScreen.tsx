import { NavigationProp } from '@react-navigation/native';
import { byDate, CardItem } from '@vocably/model';
import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  Alert,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { ActivityIndicator, Text, useTheme } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { EmptyCardsList } from './EmptyCardsList';
import { userSelectedDeck } from './languageDeck/userSelectedDeck';

const SWIPE_MENU_BUTTON_SIZE = 50;

type EditDeckScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const EditDeckScreen: EditDeckScreen = ({ navigation }) => {
  const theme = useTheme();
  const { deck, remove } = userSelectedDeck();
  const cards = useMemo(() => deck.cards.sort(byDate), [deck]);

  const [toBeDeletedId, setToBeDeletedId] = useState<string | null>(null);

  const deleteCard = useCallback(
    async (id: string) => {
      setToBeDeletedId(id);
      const deleteResult = await remove(id);
      if (deleteResult.success === false) {
        Alert.alert(
          'Error: Card deletion failed',
          `Oops! Something went wrong while attempting to delete the card. Please try again later.`
        );
      }
      setToBeDeletedId(null);
    },
    [remove]
  );

  const renderCard = (data: ListRenderItemInfo<CardItem>) => (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? theme.colors.inversePrimary
              : theme.colors.background,
          },
        ]}
        onPress={() => navigation.navigate('EditCard', { card: data.item })}
      >
        <CardListItem card={data.item.data} />
      </Pressable>
    </View>
  );

  const renderSwipeMenu = (data: ListRenderItemInfo<CardItem>) => (
    <View style={styles.swipeMenu}>
      <Pressable
        onPress={() => deleteCard(data.item.id)}
        disabled={toBeDeletedId === data.item.id}
        style={[styles.swipeButton, { backgroundColor: theme.colors.error }]}
      >
        {toBeDeletedId === data.item.id ? (
          <ActivityIndicator size={32} color={theme.colors.onSecondary} />
        ) : (
          <Icon
            name="delete-outline"
            size={32}
            color={theme.colors.onSecondary}
          />
        )}
      </Pressable>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      {!cards.length ? (
        <EmptyCardsList>
          <Text>Card list is empty</Text>
        </EmptyCardsList>
      ) : (
        <SwipeListView<CardItem>
          style={styles.swipeList}
          data={cards}
          ItemSeparatorComponent={Separator}
          keyExtractor={keyExtractor}
          renderItem={renderCard}
          renderHiddenItem={renderSwipeMenu}
          rightOpenValue={-SWIPE_MENU_BUTTON_SIZE}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  swipeList: {
    width: '100%',
  },
  swipeButton: {
    width: SWIPE_MENU_BUTTON_SIZE,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeMenu: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
