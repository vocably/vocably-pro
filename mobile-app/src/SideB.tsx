import React, { FC } from 'react';
import { StyleProp, ViewStyle, FlatList } from 'react-native';
import { explode } from '@vocably/sulna';
import { useTheme, Text } from 'react-native-paper';
import { SimpleCard } from './SimpleCard';

type SideB = FC<{
  card: SimpleCard;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<Text>;
}>;

export const SideB: SideB = ({ card, style, textStyle }) => {
  const theme = useTheme();
  let sideB = explode(card.definition).map((text) => ({
    text,
    style: {},
  }));

  if (card.translation) {
    sideB = sideB.concat({
      text: card.translation,
      style: {
        color: theme.colors.secondary,
      },
    });
  }

  return (
    <FlatList
      contentContainerStyle={style}
      data={sideB}
      scrollEnabled={false}
      renderItem={(item) => (
        <Text
          style={[item.item.style, textStyle]}
        >{`\u2022 ${item.item.text}`}</Text>
      )}
    ></FlatList>
  );
};
