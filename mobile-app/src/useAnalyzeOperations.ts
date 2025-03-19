import { CardItem, Result, TagItem } from '@vocably/model';
import { buildTagMap } from '@vocably/model-operations';
import { useCallback, useContext } from 'react';
import { Alert } from 'react-native';
import { Deck } from './languageDeck/useLanguageDeck';
import { LanguagesContext } from './languages/LanguagesContainer';
import { AssociatedCard } from './LookUpScreen/associateCards';
import { useLastUsedTagIds } from './useLastUsedTagIds';

type Params = {
  deck: Deck;
};

type ReturnedMethods = {
  onAdd: (card: AssociatedCard) => Promise<Result<CardItem>>;
  onRemove: (card: AssociatedCard) => Promise<Result<true>>;
  onTagsChange: (id: string, tags: TagItem[]) => Promise<Result<true>>;
};

export const useAnalyzeOperations = ({ deck }: Params): ReturnedMethods => {
  const [lastUsedTagIds, setLastUsedTagIds] = useLastUsedTagIds();
  const languages = useContext(LanguagesContext);

  const onAdd = useCallback(
    async (card: AssociatedCard): Promise<Result<CardItem>> => {
      if (card.id) {
        const existingCard = deck.deck.cards.find(
          (item) => item.id === card.id
        );
        if (existingCard) {
          return {
            success: true,
            value: existingCard,
          };
        }
      }

      let tags = card.card.tags;
      if (lastUsedTagIds.status === 'loaded') {
        const tagMap = buildTagMap(deck.deck.tags);
        const lastUsedTags = lastUsedTagIds.value
          .filter((tagId) => !tags.some((t) => t.id === tagId))
          .filter((tagId) => tagMap[tagId])
          .map((tagId) => tagMap[tagId] as TagItem);

        tags = [...tags, ...lastUsedTags];
      }

      const addResult = await deck.add({
        ...card.card,
        tags,
      });

      if (addResult.success === false) {
        Alert.alert(
          'Error: Card addition failed',
          'Oops! Something went wrong while attempting to add a new card into your collection. Please try again later.'
        );
        return addResult;
      }

      languages.addLanguage(card.card.language);
      await languages.selectLanguage(card.card.language);

      return addResult;
    },
    [deck]
  );

  const onRemove = useCallback(
    async (card: AssociatedCard): Promise<Result<true>> => {
      if (!card.id) {
        return {
          success: true,
          value: true,
        };
      }

      const removeResult = await deck.remove(card.id);

      if (removeResult.success === false) {
        Alert.alert(
          'Error: Card removal failed',
          'Oops! Something went wrong while attempting to remove a the card from your collection. Please try again later.'
        );
        return removeResult;
      }

      await languages.selectLanguage(card.card.language);

      return removeResult;
    },
    [deck, languages]
  );

  const onTagsChange = useCallback(
    async (id: string, tags: TagItem[]): Promise<Result<true>> => {
      const updateResult = await deck.update(id, {
        tags,
      });

      if (updateResult.success === false) {
        return updateResult;
      }

      await setLastUsedTagIds(tags.map((t) => t.id));

      return {
        success: true,
        value: true,
      };
    },
    [deck]
  );

  return {
    onAdd,
    onRemove,
    onTagsChange,
  };
};
