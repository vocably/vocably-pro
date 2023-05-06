import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { explode } from '@vocably/sulna';
import { useTheme, Text } from 'react-native-paper';
import { Card } from '@vocably/model';

type SideB = FC<{
  card: Card;
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
    <>
      {sideB.map((item, index) => (
        <Text
          key={index}
          style={[item.style, textStyle]}
        >{`\u2022 ${item.text}`}</Text>
      ))}
    </>
  );
};
