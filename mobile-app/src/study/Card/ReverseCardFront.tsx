import { CardItem } from '@vocably/model';
import { explode, join } from '@vocably/sulna';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { CardDefinition } from '../../CardDefinition';
import { CardExample } from '../../CardExample';
import { maskTheWord } from '../../maskTheWord';

export const ReverseCardFront: FC<{ card: CardItem }> = ({ card }) => {
  const theme = useTheme();

  const examples = card.data.example
    ? explode(card.data.example)
        .map(maskTheWord(card.data.source, card.data.language))
        .filter((replacementResult) => replacementResult.masked)
        .map((replacementResult) => replacementResult.value)
    : [];

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>
        Guess the{' '}
        {(
          <Text style={{ color: theme.colors.secondary }}>
            {card.data.partOfSpeech}
          </Text>
        ) ?? 'word'}
        :
      </Text>
      <CardDefinition
        card={card.data}
        textStyle={{ fontSize: 24 }}
        maskSource={true}
      />
      {examples.length > 0 && (
        <>
          <Text
            style={{
              fontSize: 24,
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            Example{examples.length > 1 ? 's' : ''}:
          </Text>
          <CardExample example={join(examples)} />
        </>
      )}
    </View>
  );
};
