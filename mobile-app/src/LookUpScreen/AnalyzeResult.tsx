import React, { FC, useCallback, useState } from 'react';
import {
  View,
  FlatList,
  StyleProp,
  ViewStyle,
  ListRenderItem,
} from 'react-native';
import { Analysis, Card, CardItem, Result } from '@vocably/model';
import { makeCards } from './makeCards';
import { CardListItem, Separator } from '../CardListItem';
import { associateCards, AssociatedCard } from './associateCards';
import { useLanguageDeck } from '../useLanguageDeck';
import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper';
import { AnalyzeResultItem } from './AnalyzeResultItem';

type AnalyzeResult = FC<{
  analysis: Analysis;
  style?: StyleProp<ViewStyle>;
}>;

export const Analyze: AnalyzeResult = ({ analysis, style }) => {
  const theme = useTheme();
  const {
    deck: { cards: existingCards },
    add,
    remove,
  } = useLanguageDeck();
  const cards = associateCards(makeCards(analysis), existingCards);

  const onAdd = useCallback(
    async (card: AssociatedCard): Promise<Result<CardItem>> => {
      if (card.id) {
        const existingCard = existingCards.find((item) => item.id === card.id);
        if (existingCard) {
          return {
            success: true,
            value: existingCard,
          };
        }
      }

      return add(card.card);
    },
    [existingCards]
  );

  const onRemove = useCallback(
    async (card: AssociatedCard): Promise<Result<true>> => {
      if (!card.id) {
        return {
          success: true,
          value: true,
        };
      }

      return remove(card.id, {
        silent: false,
      });
    },
    [existingCards]
  );

  return (
    <FlatList
      style={style}
      data={cards}
      renderItem={({ item }) => (
        <AnalyzeResultItem onAdd={onAdd} onRemove={onRemove} item={item} />
      )}
      ItemSeparatorComponent={Separator}
      nestedScrollEnabled={true}
    />
  );
};
