import { CardItem, isGoogleTTSLanguage } from '@vocably/model';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { CardExample } from '../../CardExample';
import { PlaySound } from '../../PlaySound';

export const CardFront: FC<{ card: CardItem }> = ({ card }) => {
  const theme = useTheme();
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {isGoogleTTSLanguage(card.data.language) && (
          <PlaySound
            text={card.data.source}
            language={card.data.language}
            size={24}
            style={{
              marginRight: 6,
              alignSelf: 'flex-start',
              marginTop: 12,
            }}
          />
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            flexWrap: 'wrap',
          }}
        >
          <Text
            style={{
              fontSize: 32,
              color: theme.colors.secondary,
              marginRight: 8,
            }}
          >
            {card.data.source}
          </Text>

          {(card.data.ipa || card.data.partOfSpeech) && (
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
              }}
            >
              {card.data.ipa && (
                <Text style={{ marginRight: 8 }}>[{card.data.ipa}]</Text>
              )}
              {card.data.partOfSpeech && (
                <Text style={{ marginRight: 8 }}>{card.data.partOfSpeech}</Text>
              )}
            </View>
          )}
        </View>
      </View>
      {card.data.example && (
        <View style={{ marginTop: 8, marginLeft: 8 }}>
          <CardExample
            example={card.data.example}
            textStyle={{ fontSize: 18 }}
          />
        </View>
      )}
    </View>
  );
};
