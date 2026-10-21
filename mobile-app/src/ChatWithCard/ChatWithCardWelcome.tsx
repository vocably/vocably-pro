import { ChatCard } from '@vocably/model';
import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SuggestionChip } from '../Chat/SuggestionChip';
import { WelcomeBubble } from '../Chat/WelcomeBubble';

type Props = {
  card: ChatCard;
  disabled: boolean;
  onSuggestion: (message: string) => void;
};

export const ChatWithCardWelcome: FC<Props> = ({
  card,
  disabled,
  onSuggestion,
}) => {
  const { t } = useTranslation();

  const suggestions = [
    {
      icon: 'lightbulb-on-outline',
      label: t('chat.explain'),
      message: t('chat.explainMessage'),
    },
    {
      icon: 'format-quote-open',
      label: t('chat.examples'),
      message: t('chat.examplesMessage'),
    },
    {
      icon: 'brain',
      label: t('chat.remember'),
      message: t('chat.rememberMessage'),
    },
  ];

  const intro = (
    <Trans
      i18nKey={
        card.partOfSpeech
          ? 'chat.initialMessageWithPartOfSpeech'
          : 'chat.initialMessage'
      }
      values={{
        source: card.source,
        partOfSpeech:
          card.partOfSpeech &&
          t(`language.${card.partOfSpeech}` as any, card.partOfSpeech),
      }}
      components={{ bold: <Text style={{ fontWeight: '700' }} /> }}
    />
  );

  return (
    <WelcomeBubble intro={intro}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {suggestions.map((suggestion) => (
          <SuggestionChip
            key={suggestion.icon}
            icon={suggestion.icon}
            label={suggestion.label}
            disabled={disabled}
            onPress={() => onSuggestion(suggestion.message)}
          />
        ))}
      </View>
    </WelcomeBubble>
  );
};
