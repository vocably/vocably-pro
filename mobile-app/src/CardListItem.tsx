import { Card, CardItem, isGoogleTTSLanguage } from '@vocably/model';
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';
import { CardDefinition } from './CardDefinition';
import { CardExample } from './CardExample';
import { PlaySound } from './PlaySound';
import { mainPadding } from './styles';

type CardListItem = FC<{
  card: Card;
  style?: StyleProp<ViewStyle>;
  showExamples?: boolean;
}>;

export const CardListItem: CardListItem = ({
  card,
  style,
  showExamples = false,
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        style,
        {
          marginHorizontal: mainPadding,
          marginVertical: 16,
        },
      ]}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
        }}
      >
        {isGoogleTTSLanguage(card.language) && (
          <PlaySound
            text={card.source}
            language={card.language}
            size={22}
            style={{ marginRight: 6 }}
          />
        )}
        <Text
          style={{
            fontSize: 24,
            color: theme.colors.secondary,
          }}
        >
          {card.source}
        </Text>

        {card.partOfSpeech && (
          <Text style={{ marginLeft: 8 }}>{card.partOfSpeech}</Text>
        )}
      </View>
      <CardDefinition card={card} />
      {showExamples && card.example && (
        <View style={{ marginStart: 10, marginTop: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>Examples</Text>
          <CardExample example={card.example} />
        </View>
      )}
    </View>
  );
};

export const Separator: FC = () => <Divider />;

export const keyExtractor: (item: CardItem) => string = (item) => item.id;
