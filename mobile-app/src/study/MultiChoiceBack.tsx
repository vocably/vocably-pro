import { CardItem } from '@vocably/model';
import { SrsScore } from '@vocably/srs';
import { shuffle } from 'lodash-es';
import React, { FC, useMemo, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { CardDefinition } from '../CardDefinition';
import { Displayer, DisplayerRef } from './Displayer';

type Props = {
  autoPlay: boolean;
  card: CardItem;
  onGrade: (score: SrsScore) => void;
  alternatives: CardItem[];
};

export const MultiChoiceBack: FC<Props> = ({ card, onGrade, alternatives }) => {
  const theme = useTheme();

  const [wrong, setWrong] = useState<string[]>([]);
  const [correct, setCorrect] = useState<string>('');
  const displayerRef = useRef<DisplayerRef>(null);

  const answers = useMemo(() => shuffle([...alternatives, card]), []);

  const validate = (validateItem: CardItem) => {
    if (wrong.includes(card.id)) {
      return;
    }

    if (validateItem.id !== card.id) {
      setWrong([...wrong, validateItem.id]);
      return;
    }

    setCorrect(card.id);

    if (displayerRef.current) {
      displayerRef.current.hide().then(() => {
        onGrade(wrong.length === 0 ? 5 : 1);
      });
    } else {
      onGrade(wrong.length === 0 ? 5 : 1);
    }
  };

  return (
    <Displayer ref={displayerRef}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 24, marginBottom: 12 }}>
          Select the correct answer for the{' '}
          {card.data.partOfSpeech ? (
            <Text style={{ color: theme.colors.secondary }}>
              {card.data.partOfSpeech}
            </Text>
          ) : (
            'meaning'
          )}
          {':'}
        </Text>
        <View style={{ alignSelf: 'flex-start' }}>
          <CardDefinition
            card={card.data}
            textStyle={{ fontSize: 24 }}
            maskSource={true}
          />
        </View>
        <View style={{ marginTop: 32, width: '100%', gap: 8 }}>
          {answers.map((card) => (
            <Button
              style={{
                borderWidth: 1,
                borderColor: wrong.includes(card.id)
                  ? theme.colors.error
                  : theme.colors.primary,
              }}
              labelStyle={{
                color: wrong.includes(card.id)
                  ? theme.colors.onError
                  : correct === card.id
                  ? theme.colors.onPrimary
                  : theme.colors.primary,
              }}
              key={card.id}
              mode={correct === card.id ? 'contained' : 'outlined'}
              onPress={() => validate(card)}
              buttonColor={
                wrong.includes(card.id) ? theme.colors.error : undefined
              }
            >
              {card.data.source}
            </Button>
          ))}
        </View>
      </ScrollView>
    </Displayer>
  );
};
