import { Card } from '@vocably/model';
import { explode, isGoodPlural } from '@vocably/sulna';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, StyleProp, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Text, useTheme } from 'react-native-paper';
import { maskTheWord } from './maskTheWord';
import { i18n } from './i18n';
import { Tag } from './Tag';

type Props = {
  card: Card;
  textStyle?: StyleProp<Text>;
  maskSource?: boolean;
  showInflections?: boolean;
  onPress?: () => unknown;
  lookUpDisabled?: boolean;
  hideDefinitions?: boolean;
  enrichWithPartOfSpeech?: boolean;
};

type Definition = {
  text: string;
  style: StyleProp<Text>;
  lookUpEnabled: boolean;
};

export const CardDefinition: FC<Props> = ({
  card,
  textStyle,
  maskSource = false,
  showInflections = false,
  onPress,
  lookUpDisabled = false,
  hideDefinitions = false,
  enrichWithPartOfSpeech = false,
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();

  let definitions: Definition[] = [];

  if (!hideDefinitions) {
    definitions = explode(card.definition).map((text) => ({
      text,
      style: {},
      lookUpEnabled: true,
    }));

    if (maskSource) {
      definitions = definitions
        .filter(
          (definition) =>
            !(definition.text.includes('[') && definition.text.includes(']'))
        )
        .map((definition) => {
          return {
            ...definition,
            text: maskTheWord(card.source, card.language)(definition.text)
              .value,
          };
        });
    }
  }

  if (card.translation) {
    definitions.unshift({
      text: card.translation,
      style: {
        color: theme.colors.secondary,
      },
      lookUpEnabled: false,
    });
  }

  const bul = '\u2022 ';

  const partOfSpeech =
    enrichWithPartOfSpeech && card.partOfSpeech
      ? i18n.t(`language.${card.partOfSpeech}`, card.partOfSpeech)
      : '';

  return (
    <View
      style={{
        maxWidth: '100%',
      }}
    >
      {!!partOfSpeech && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Invisible bullet aligns the tag with the definitions text */}
          <Text style={[textStyle, { opacity: 0 }]}>{bul}</Text>
          <Tag>{partOfSpeech}</Tag>
        </View>
      )}
      {definitions.map((item, index) => {
        const lookUpEnabled = !lookUpDisabled && item.lookUpEnabled;
        return (
          <View
            key={index}
            style={{
              marginTop: 4,
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 4,
            }}
          >
            <Text style={textStyle}>{bul}</Text>

            <Pressable
              style={({ pressed }) => [
                { opacity: pressed && lookUpEnabled && item ? 0.6 : 1.0 },
                {
                  flexShrink: 1,
                  alignSelf: 'flex-end',
                },
              ]}
              onPress={onPress}
              onLongPress={
                lookUpEnabled
                  ? () => {
                      // @ts-ignore
                      navigation.push('LookUpModal', {
                        text: item.text,
                      });
                    }
                  : undefined
              }
            >
              <Text style={[textStyle, item.style]}>{item.text}</Text>
            </Pressable>
          </View>
        );
      })}
      {showInflections && card.presentTenses && (
        <Text
          style={[
            textStyle,
            {
              marginTop: 16,
            },
          ]}
        >
          {t('cardDefinition.present')}{' '}
          <Text style={{ color: theme.colors.secondary }}>
            {card.presentTenses}
          </Text>
        </Text>
      )}
      {showInflections && card.tense === 'present' && card.pastTenses && (
        <Text
          style={[
            textStyle,
            {
              marginTop: 16,
            },
          ]}
        >
          {t('cardDefinition.past')}{' '}
          <Text style={{ color: theme.colors.secondary }}>
            {card.pastTenses}
          </Text>
        </Text>
      )}

      {showInflections &&
        card.number === 'singular' &&
        isGoodPlural(card.pluralForm) && (
          <Text
            style={[
              textStyle,
              {
                marginTop: 16,
              },
            ]}
          >
            {t('cardDefinition.plural')}{' '}
            <Text style={{ color: theme.colors.secondary }}>
              {card.pluralForm}
            </Text>
          </Text>
        )}
    </View>
  );
};
