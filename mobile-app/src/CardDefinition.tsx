import { Card } from '@vocably/model';
import { explode } from '@vocably/sulna';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

type CardDefinition = FC<{
  card: Card;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<Text>;
}>;

export const CardDefinition: CardDefinition = ({ card, style, textStyle }) => {
  const theme = useTheme();
  let definitions = explode(card.definition).map((text) => ({
    text,
    style: {},
  }));

  if (card.translation) {
    definitions.unshift({
      text: card.translation,
      style: {
        color: theme.colors.secondary,
      },
    });
  }

  return (
    <>
      {definitions.map((item, index) => (
        <Text
          key={index}
          style={[item.style, textStyle]}
        >{`\u2022 ${item.text}`}</Text>
      ))}
    </>
  );
};
