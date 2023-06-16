import { Analysis, CardItem, Result } from '@vocably/model';
import React, { FC } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { Separator } from '../CardListItem';
import { AnalyzeResultItem } from './AnalyzeResultItem';
import { associateCards, AssociatedCard } from './associateCards';
import { makeCards } from './makeCards';

type AnalyzeResult = FC<{
  analysis: Analysis;
  cards: CardItem[];
  onAdd: (card: AssociatedCard) => Promise<Result<CardItem>>;
  onRemove: (card: AssociatedCard) => Promise<Result<true>>;
  style?: StyleProp<ViewStyle>;
}>;

export const Analyze: AnalyzeResult = ({
  analysis,
  style,
  cards,
  onAdd,
  onRemove,
}) => {
  const associatedCards = associateCards(makeCards(analysis), cards);

  return (
    <FlatList
      style={style}
      data={associatedCards}
      renderItem={({ item }) => (
        <AnalyzeResultItem onAdd={onAdd} onRemove={onRemove} item={item} />
      )}
      ItemSeparatorComponent={Separator}
      nestedScrollEnabled={true}
    />
  );
};
