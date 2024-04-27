import { explode } from '@vocably/sulna';
import React, { FC } from 'react';
import { StyleProp } from 'react-native';
import { Text } from 'react-native-paper';

type CardExample = FC<{
  example: string;
  textStyle?: StyleProp<Text>;
}>;

export const CardExample: CardExample = ({ example, textStyle }) => {
  const examples = explode(example);

  if (examples.length === 1) {
    return <Text style={textStyle}>{examples[0]}</Text>;
  }

  return (
    <>
      {examples.map((example, index) => (
        <Text key={index} style={textStyle}>{`\u2022 ${example}`}</Text>
      ))}
    </>
  );
};
