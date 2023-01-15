import React, { FC, useContext } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { useTheme } from 'react-native-paper';
import { DeckContext } from './DeckContainer';
import { byDate } from '@vocably/sulna';
import { CardListItem } from './CardListItem';
import { mainPadding } from './styles';
import { CardItem } from '@vocably/model';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

type EditDeck = FC<{}>;

const renderItem: ListRenderItem<CardItem> = ({ item, index }) => (
  <CardListItem key={item.id} card={item} index={index} />
);

const keyExtractor: (item: CardItem) => string = (item) => item.id;

export const EditDeck: EditDeck = () => {
  const theme = useTheme();
  const { deck, update, remove } = useContext(DeckContext);

  const cards = deck.cards.sort(byDate);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          padding: mainPadding,
        },
      ]}
    >
      <FlatList
        style={{
          width: '100%',
        }}
        data={cards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
