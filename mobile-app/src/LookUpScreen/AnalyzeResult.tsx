import { Analysis, CardItem, Result, TagItem } from '@vocably/model';
import React, { FC } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { Separator } from '../CardListItem';
import { Deck } from '../languageDeck/useLanguageDeck';
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
  deck: Deck;
}>;

export const Analyze: AnalyzeResult = ({
  analysis,
  style,
  cards,
  onAdd,
  onRemove,
  onTagsChange,
  deck,
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
          deck={deck}
        />
      )}
      keyExtractor={(item) => `${item.card.source}${item.card.partOfSpeech}`}
      ItemSeparatorComponent={Separator}
      nestedScrollEnabled={true}
    />
  );
};
