import { Analysis, CardItem, Result, TagItem } from '@vocably/model';
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
  onTagsChange: (id: string, tags: TagItem[]) => Promise<Result<true>>;
  style?: StyleProp<ViewStyle>;
}>;

export const Analyze: AnalyzeResult = ({
  analysis,
  style,
  cards,
  onAdd,
  onRemove,
  onTagsChange,
}) => {
  const associatedCards = associateCards(makeCards(analysis), cards);

  return (
    <FlatList
      style={style}
      data={associatedCards}
      renderItem={({ item }) => (
        <AnalyzeResultItem
          onAdd={onAdd}
          onRemove={onRemove}
          onTagsChange={onTagsChange}
          item={item}
        />
      )}
      ItemSeparatorComponent={Separator}
      nestedScrollEnabled={true}
    />
  );
};
