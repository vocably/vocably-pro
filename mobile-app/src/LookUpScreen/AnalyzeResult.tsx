import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
  ListRenderItem,
} from 'react-native';
import { Analysis, Card } from '@vocably/model';
import { makeCards } from './makeCards';
import { CardListItem, Separator } from '../CardListItem';
import { associateCards, AssociatedCard } from './associateCards';
import { useLanguageDeck } from '../useLanguageDeck';
import { IconButton, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

type RenderItemParams = {
  addIconColor: string;
  removeIconColor: string;
};

const renderItem =
  ({
    addIconColor,
    removeIconColor,
  }: RenderItemParams): ListRenderItem<AssociatedCard> =>
  ({ item: card }) =>
    (
      <View style={styles.itemContainer}>
        <CardListItem card={card} style={{ flex: 1 }} />
        <IconButton
          icon={card.id ? 'minus-circle' : 'plus-circle'}
          iconColor={card.id ? removeIconColor : addIconColor}
        />
      </View>
    );

type AnalyzeResult = FC<{
  analysis: Analysis;
  style?: StyleProp<ViewStyle>;
}>;

export const Analyze: AnalyzeResult = ({ analysis, style }) => {
  const theme = useTheme();
  const { deck } = useLanguageDeck();
  const cards = associateCards(makeCards(analysis), deck.cards);
  return (
    <FlatList
      style={style}
      data={cards}
      renderItem={renderItem({
        addIconColor: theme.colors.primary,
        removeIconColor: theme.colors.error,
      })}
      ItemSeparatorComponent={Separator}
      nestedScrollEnabled={true}
    />
  );
};
