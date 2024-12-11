import { CardItem, isGoogleTTSLanguage } from '@vocably/model';
import React, { FC, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { CardExample } from '../../CardExample';
import { PlaySound } from '../../PlaySound';

type Props = {
  card: CardItem;
  autoPlay: boolean;
};

export const CardFront: FC<Props> = ({ card, autoPlay }) => {
  const theme = useTheme();

  const [isAutoPlayed, setIsAutoPlayed] = useState(false);
  const playRef = useRef();

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    if (isAutoPlayed) {
      return;
    }

    if (!playRef.current) {
      return;
    }

    // @ts-ignore
    playRef.current.play();
    setIsAutoPlayed(true);
  }, [isAutoPlayed, autoPlay]);

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {isGoogleTTSLanguage(card.data.language) && (
          <PlaySound
            text={card.data.source}
            language={card.data.language}
            size={24}
            // @ts-ignore
            ref={playRef}
            style={{
              marginRight: 6,
              alignSelf: 'flex-start',
              marginTop: 12,
            }}
          />
        )}
        <Text
          style={{
            fontSize: 32,
            color: theme.colors.secondary,
            marginRight: 8,
          }}
        >
          {card.data.source}
        </Text>
      </View>
      {(card.data.ipa || card.data.partOfSpeech || card.data.g) && (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginLeft: 8,
            marginTop: 6,
          }}
        >
          {card.data.ipa && (
            <Text style={{ marginRight: 8 }}>[{card.data.ipa}]</Text>
          )}
          {card.data.g && (
            <Text style={{ marginRight: 8 }}>({card.data.g})</Text>
          )}
          {card.data.partOfSpeech && (
            <Text style={{ marginRight: 8 }}>{card.data.partOfSpeech}</Text>
          )}
        </View>
      )}
      {card.data.example && (
        <View style={{ marginTop: 12, marginLeft: 8 }}>
          <CardExample
            example={card.data.example}
            textStyle={{ fontSize: 18 }}
          />
        </View>
      )}
    </View>
  );
};
