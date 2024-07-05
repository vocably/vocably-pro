import { CardItem } from '@vocably/model';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CardFront } from './CardFront';

export const ReverseCardBack: FC<{ card: CardItem }> = ({ card }) => {
  return (
    <View>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>The answer is</Text>
      <CardFront card={card} />
    </View>
  );
};
