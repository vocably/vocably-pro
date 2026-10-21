import { CardItem, DeckSettings } from '@vocably/model';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { CardFront } from './CardFront';
import { SectionLabel } from './SectionLabel';

type Props = {
  card: CardItem;
  autoPlay: boolean;
  playRandomExample: boolean;
  onPress?: () => unknown;
  deckSettings: DeckSettings;
};

export const ReverseCardBack: FC<Props> = ({
  card,
  autoPlay,
  playRandomExample,
  onPress,
  deckSettings,
}) => {
  const { t } = useTranslation();
  return (
    <View>
      <SectionLabel style={{ marginBottom: 8 }}>
        {t('study.reverseCardBack.theAnswerIs')}
      </SectionLabel>
      <CardFront
        deckSettings={deckSettings}
        autoPlay={autoPlay}
        playRandomExample={playRandomExample}
        card={card}
        showInflections={true}
        onPress={onPress}
      />
    </View>
  );
};
