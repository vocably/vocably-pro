import { FC } from 'react';
import { View, StyleSheet, FlatList, StyleProp, ViewStyle } from 'react-native';
import { Analysis } from '@vocably/model';
import { makeSimpleCards } from './makeSimpleCards';
import { CardListItem, Separator } from '../CardListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type AnalyzeResult = FC<{
  analysis: Analysis;
  style?: StyleProp<ViewStyle>;
}>;

export const Analyze: AnalyzeResult = ({ analysis, style }) => {
  const simpleCards = makeSimpleCards(analysis);
  return (
    <FlatList
      style={style}
      data={simpleCards}
      renderItem={({ item }) => <CardListItem card={item} />}
      ItemSeparatorComponent={Separator}
      nestedScrollEnabled={true}
    />
  );
};
