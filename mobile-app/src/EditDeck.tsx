import React, { FC, useContext } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Divider, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DeckContext } from './DeckContainer';
import { byDate } from '@vocably/sulna';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { mainPadding } from './styles';
import { CardItem } from '@vocably/model';

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

type EditDeck = FC<{}>;
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
        },
      ]}
    >
      <FlatList
        style={{
          width: '100%',
          padding: mainPadding,
        }}
        ItemSeparatorComponent={Separator}
        data={cards}
        renderItem={renderItem({
          onDelete: console.log,
          buttonColor: theme.colors.secondary,
        })}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
