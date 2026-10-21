import { CardItem, DeckSettings } from '@vocably/model';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon, Text, useTheme } from 'react-native-paper';
import { StudyCardDefinition } from '../StudyCardDefinition';

type Props = {
  card: CardItem;
  onPress?: () => unknown;
  deckSettings: DeckSettings;
};

export const CardBack: FC<Props> = ({ card, onPress, deckSettings }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  if (!card.data.translation && !card.data.definition) {
    return (
      <View style={{ alignItems: 'center', gap: 12, paddingHorizontal: 8 }}>
        <Icon
          source="card-text-outline"
          size={40}
          color={theme.colors.onSurfaceVariant}
        />
        <Text
          style={{
            fontSize: 18,
            lineHeight: 26,
            textAlign: 'center',
            color: theme.colors.onSurfaceVariant,
          }}
        >
          {t('study.cardBack.emptyCardMessage')}
        </Text>
      </View>
    );
  }

  return (
    <StudyCardDefinition
      onPress={onPress}
      card={card.data}
      showInflections={true}
      hideDefinitions={deckSettings.hideDefinitions}
    />
  );
};
