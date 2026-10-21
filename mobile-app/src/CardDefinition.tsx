import { Card } from '@vocably/model';
import { explode } from '@vocably/sulna';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, StyleProp, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { maskTheWord } from './maskTheWord';

type Props = {
  card: Card;
  textStyle?: StyleProp<Text>;
  maskSource?: boolean;
  onPress?: () => unknown;
  lookUpDisabled?: boolean;
  hideDefinitions?: boolean;
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
  onPress,
  lookUpDisabled = false,
  hideDefinitions = false,
}) => {
  const theme = useTheme();
  const navigation = useNavigation();

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

  return (
    <View
      style={{
        maxWidth: '100%',
      }}
    >
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
              testID={`card-definition-${index}`}
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
    </View>
  );
};
