import { CardItem, Result } from '@vocably/model';
import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import { CardListItem } from '../CardListItem';
import { TagsSelector } from '../TagsSelector';
import { AssociatedCard } from './associateCards';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

type AnalyzeResultItem = FC<{
  onAdd: (card: AssociatedCard) => Promise<Result<CardItem>>;
  onRemove: (card: AssociatedCard) => Promise<Result<true>>;
  onUpdate: (card: AssociatedCard) => Promise<Result<true>>;
  item: AssociatedCard;
}>;

export const AnalyzeResultItem: AnalyzeResultItem = ({
  onAdd,
  onRemove,
  onUpdate,
  item,
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
          onChange={(tags) =>
            onUpdate({
              ...item,
              card: {
                ...item.card,
                tags,
              },
            })
          }
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
