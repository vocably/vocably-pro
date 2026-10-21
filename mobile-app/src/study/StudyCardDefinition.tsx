import { useNavigation } from '@react-navigation/native';
import { Card } from '@vocably/model';
import { explode, isGoodPlural } from '@vocably/sulna';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleProp, TextStyle, View } from 'react-native';
import { Text } from 'react-native-paper';
import { isolate } from '../isolate';
import { maskTheWord } from '../maskTheWord';
import { Tag } from '../Tag';
import { useAppTheme } from '../ThemeProvider';

type Props = {
  card: Card;
  maskSource?: boolean;
  showInflections?: boolean;
  onPress?: () => unknown;
  hideDefinitions?: boolean;
  enrichWithPartOfSpeech?: boolean;
};

type Line = {
  text: string;
  style: StyleProp<TextStyle>;
  lookUpEnabled: boolean;
};

export const StudyCardDefinition: FC<Props> = ({
  card,
  maskSource = false,
  showInflections = false,
  onPress,
  hideDefinitions = false,
  enrichWithPartOfSpeech = false,
}) => {
  const theme = useAppTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  let definitions = hideDefinitions ? [] : explode(card.definition);

  if (maskSource) {
    definitions = definitions
      .filter((text) => !(text.includes('[') && text.includes(']')))
      .map((text) => maskTheWord(card.source, card.language)(text).value);
  }

  // The translation is the answer, so it gets the same prominence
  // as the source word on the front of the card
  const translationLine: Line | null = card.translation
    ? {
        text: card.translation,
        style: {
          fontSize: 30,
          lineHeight: 38,
          fontWeight: '600',
          letterSpacing: -0.3,
          color: theme.colors.secondary,
        },
        lookUpEnabled: false,
      }
    : null;

  const definitionStyle: TextStyle = {
    fontSize: 20,
    lineHeight: 28,
  };

  const lines: Line[] = definitions.map((text) => ({
    text,
    style: definitionStyle,
    lookUpEnabled: true,
  }));

  const partOfSpeech =
    enrichWithPartOfSpeech && card.partOfSpeech
      ? t(`language.${card.partOfSpeech}`, card.partOfSpeech)
      : '';

  const inflections = showInflections
    ? ([
        card.presentTenses && {
          label: t('cardDefinition.present'),
          value: card.presentTenses,
        },
        card.tense === 'present' &&
          card.pastTenses && {
            label: t('cardDefinition.past'),
            value: isolate(card.pastTenses),
          },
        card.number === 'singular' &&
          isGoodPlural(card.pluralForm) && {
            label: t('cardDefinition.plural'),
            value: isolate(card.pluralForm),
          },
      ].filter(Boolean) as { label: string; value: string }[])
    : [];

  const renderLine = (line: Line, index: number) => (
    <Pressable
      key={index}
      style={({ pressed }) => ({
        opacity: pressed && line.lookUpEnabled ? 0.6 : 1.0,
      })}
      onPress={onPress}
      onLongPress={
        line.lookUpEnabled
          ? () => {
              // @ts-ignore
              navigation.push('LookUpModal', {
                text: line.text,
              });
            }
          : undefined
      }
    >
      <Text style={line.style}>{line.text}</Text>
    </Pressable>
  );

  return (
    <View style={{ maxWidth: '100%' }}>
      {!!partOfSpeech && (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Tag>{partOfSpeech}</Tag>
        </View>
      )}
      <View style={{ gap: 12 }}>
        {translationLine && renderLine(translationLine, -1)}
        {inflections.length > 0 && (
          <View style={{ gap: 2 }}>
            {inflections.map((inflection, index) => (
              <Pressable key={index} onPress={onPress}>
                <Text style={definitionStyle}>
                  <Text style={{ color: theme.colors.onSurfaceVariant }}>
                    {inflection.label}
                  </Text>{' '}
                  {inflection.value}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
        {lines.map(renderLine)}
      </View>
    </View>
  );
};
