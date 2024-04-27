import { explode } from '@vocably/sulna';
import React, { FC } from 'react';
import { Text } from 'react-native-paper';

type CardExample = FC<{
  example: string;
}>;

export const CardExample: CardExample = ({ example }) => {
  const examples = explode(example);

  if (examples.length === 1) {
    return <Text>{examples[0]}</Text>;
  }

  return (
    <>
      {examples.map((example, index) => (
        <Text key={index}>{`\u2022 ${example}`}</Text>
      ))}
    </>
  );
};
