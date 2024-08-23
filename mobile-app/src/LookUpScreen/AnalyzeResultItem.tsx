import { CardItem, Result, TagItem } from '@vocably/model';
import React, { FC, useCallback, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardListItem } from '../CardListItem';
import { Deck } from '../languageDeck/useLanguageDeck';
import {
  iconButtonOpacity,
  pressedIconButtonOpacity,
} from '../stupidConstants';
import { mainPadding } from '../styles';
import { TagsSelector } from '../TagsSelector';
import { AssociatedCard } from './associateCards';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: mainPadding,
  },
});

type AnalyzeResultItem = FC<{
  onAdd: (card: AssociatedCard) => Promise<Result<CardItem>>;
  onRemove: (card: AssociatedCard) => Promise<Result<true>>;
  onTagsChange: (id: string, tags: TagItem[]) => Promise<Result<true>>;
  item: AssociatedCard;
  deck: Deck;
}>;

export const AnalyzeResultItem: AnalyzeResultItem = ({
  onAdd,
  onRemove,
  onTagsChange,
  item,
  deck,
}) => {
  const theme = useTheme();
  const [isProcessing, setIsProcessing] = useState(false);
  const toggleCard = useCallback(async () => {
    setIsProcessing(true);
    if (item.id) {
      await onRemove(item);
    } else {
      await onAdd(item);
    }
    setIsProcessing(false);
  }, [setIsProcessing, onAdd, onRemove]);

  return (
    <View style={styles.container}>
      <CardListItem card={item.card} style={{ flex: 1 }} showExamples={true} />
      {item.id && (
        <TagsSelector
          value={item.card.tags}
          onChange={async (tags) =>
            item.id && (await onTagsChange(item.id, tags))
          }
          deck={deck}
          renderAnchor={({ openMenu, disabled }) => (
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed
                    ? pressedIconButtonOpacity
                    : iconButtonOpacity,
                  padding: 8,
                },
              ]}
              hitSlop={20}
              onPress={openMenu}
              disabled={disabled}
            >
              <Icon
                name={'tag-plus'}
                color={theme.colors.onBackground}
                style={{ fontSize: 22 }}
              />
            </Pressable>
          )}
        />
      )}
      <IconButton
        icon={!item.id ? 'plus-circle' : 'minus-circle'}
        iconColor={!item.id ? theme.colors.primary : theme.colors.error}
        onPress={toggleCard}
        disabled={isProcessing}
      />
    </View>
  );
};
