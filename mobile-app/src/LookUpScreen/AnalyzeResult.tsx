import React, { FC, useCallback, useContext } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { Analysis, CardItem, Result } from '@vocably/model';
import { makeCards } from './makeCards';
import { Separator } from '../CardListItem';
import { associateCards, AssociatedCard } from './associateCards';
import { AnalyzeResultItem } from './AnalyzeResultItem';
import { Deck } from '../languageDeck/useLanguageDeck';
import { LanguagesContext } from '../languages/LanguagesContainer';

type AnalyzeResult = FC<{
  analysis: Analysis;
  deck: Deck;
  style?: StyleProp<ViewStyle>;
}>;

export const Analyze: AnalyzeResult = ({
  analysis,
  style,
  deck: {
    deck: { cards: existingCards },
    add,
    remove,
  },
}) => {
  const cards = associateCards(makeCards(analysis), existingCards);
  const languages = useContext(LanguagesContext);

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

      const addResult = await add(card.card);

      if (addResult.success === false) {
        return addResult;
      }

      languages.addLanguage(card.card.language);
      await languages.selectLanguage(card.card.language);

      return addResult;
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

      const removeResult = await remove(card.id);
      if (removeResult.success === false) {
        return removeResult;
      }
      languages.selectLanguage(card.card.language);
      return removeResult;
    },
    [existingCards, languages]
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
