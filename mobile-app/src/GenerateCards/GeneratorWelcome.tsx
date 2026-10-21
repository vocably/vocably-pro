import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SuggestionChip } from '../Chat/SuggestionChip';
import { WelcomeBubble } from '../Chat/WelcomeBubble';
import { useAppTheme } from '../ThemeProvider';

type Example = {
  icon: string;
  label: string;
};

type Props = {
  showIrregularVerbs: boolean;
  onExample: (message: string) => void;
  onFeedback: () => void;
};

export const GeneratorWelcome: FC<Props> = ({
  showIrregularVerbs,
  onExample,
  onFeedback,
}) => {
  const theme = useAppTheme();
  const { t } = useTranslation();

  const examples: Example[] = [
    ...(showIrregularVerbs
      ? [
          {
            icon: 'shuffle-variant',
            label: t('generateCards.exampleIrregularVerbs'),
          },
        ]
      : []),
    { icon: 'paw', label: t('generateCards.exampleAnimals') },
    {
      icon: 'comment-quote-outline',
      label: t('generateCards.examplePopularIdioms'),
    },
  ];

  return (
    <WelcomeBubble intro={t('generateCards.intro')}>
      <View style={{ gap: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: theme.colors.secondary,
          }}
        >
          {t('generateCards.examplesToTry')}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {examples.map((example) => (
            <SuggestionChip
              key={example.icon}
              {...example}
              onPress={() => onExample(example.label)}
            />
          ))}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 8,
          paddingTop: 12,
          borderTopWidth: 1,
          borderTopColor: theme.colors.inversePrimary,
        }}
      >
        <Icon
          name="flask-outline"
          size={16}
          color={theme.colors.onBackground}
          style={{ opacity: 0.6, marginTop: 1 }}
        />
        <Text
          style={{
            flex: 1,
            fontSize: 13,
            lineHeight: 18,
            color: theme.colors.onBackground,
            opacity: 0.75,
          }}
        >
          <Trans
            i18nKey="generateCards.experimental"
            components={{
              feedback: (
                <Text
                  testID="generator-feedback-link"
                  style={{
                    fontWeight: '600',
                    color: theme.colors.primary,
                  }}
                  onPress={onFeedback}
                />
              ),
            }}
          />
        </Text>
      </View>
    </WelcomeBubble>
  );
};
