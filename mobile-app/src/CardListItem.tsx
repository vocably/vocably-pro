import React, { FC } from 'react';
import { View } from 'react-native';
import { CardItem } from '@vocably/model';
import { SideB } from './SideB';
import { Divider, Text } from 'react-native-paper';

type CardListItem = FC<{
  card: CardItem;
  index: number;
}>;

export const CardListItem: CardListItem = ({ card, index }) => {
  return (
    <View style={{ width: '100%' }}>
      {index > 0 && <Divider style={{ marginTop: 16, marginBottom: 16 }} />}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
        }}
      >
        <Text style={{ fontSize: 24 }}>{card.data.source}</Text>
        {card.data.partOfSpeech && (
          <Text style={{ marginLeft: 8 }}>{card.data.partOfSpeech}</Text>
        )}
      </View>
      <SideB card={card} />
    </View>
  );
};
