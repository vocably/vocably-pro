import { Card, CardItem, GoogleLanguage } from '@vocably/model';
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';
import { PlaySound } from './PlaySound';
import { SideB } from './SideB';
import { mainPadding } from './styles';

type CardListItem = FC<{
  card: Card;
  style?: StyleProp<ViewStyle>;
}>;

export const CardListItem: CardListItem = ({ card, style }) => {
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
        <PlaySound
          text={card.source}
          language={card.language as GoogleLanguage}
          size={22}
          style={{ marginRight: 6 }}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: theme.colors.secondary,
            }}
          >
            {card.source}
          </Text>
        </View>
        {card.partOfSpeech && (
          <Text style={{ marginLeft: 8 }}>{card.partOfSpeech}</Text>
        )}
      </View>
      <SideB card={card} />
    </View>
  );
};

export const Separator: FC = () => <Divider />;

export const keyExtractor: (item: CardItem) => string = (item) => item.id;
