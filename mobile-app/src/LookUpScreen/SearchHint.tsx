import { isGoogleLanguage } from '@vocably/model';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-paper';
import { exampleWords } from './exampleWords';

type Props = {
  sourceLanguage: string;
  targetLanguage: string;
  onPress: (word: string) => void;
  style?: StyleProp<ViewStyle>;
};

const ExampleWord: FC<{ word: string; onPress: () => void }> = ({
  word,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <Pressable
      testID={`search-hint-example-${word}`}
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Text
        variant="bodyMedium"
        style={{ color: theme.colors.primary, fontWeight: '500' }}
      >
        {word}
      </Text>
      {/*
        Android ignores dotted text decoration and dotted single-side
        borders, so the underline is the top edge of a fully bordered box
        clipped to 1px.
      */}
      <View style={{ height: 1, overflow: 'hidden' }}>
        <View
          style={{
            height: 2,
            borderWidth: 1,
            borderRadius: 1,
            borderStyle: 'dotted',
            borderColor: theme.colors.primary,
          }}
        />
      </View>
    </Pressable>
  );
};

export const SearchHint: FC<Props> = ({
  sourceLanguage,
  targetLanguage,
  onPress,
  style,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const sourceWord = isGoogleLanguage(sourceLanguage)
    ? exampleWords[sourceLanguage]
    : undefined;
  const targetWord = isGoogleLanguage(targetLanguage)
    ? exampleWords[targetLanguage]
    : undefined;

  if (!sourceWord) {
    return null;
  }

  const isTargetWordShown = !!targetWord && targetWord !== sourceWord;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          columnGap: 6,
          rowGap: 4,
          paddingHorizontal: 4,
        },
        style,
      ]}
    >
      <View style={{ transform: [{ translateY: -2 }] }}>
        <Icon
          source="lightbulb-on-outline"
          size={16}
          color={theme.colors.onSurfaceVariant}
        />
      </View>
      <Text
        variant="bodyMedium"
        style={{ color: theme.colors.onSurfaceVariant }}
      >
        {t('lookUp.searchHintForExample')}
      </Text>
      <ExampleWord word={sourceWord} onPress={() => onPress(sourceWord)} />
      {isTargetWordShown && (
        <>
          <Text
            variant="bodyMedium"
            style={{ color: theme.colors.onSurfaceVariant }}
          >
            {t('lookUp.searchHintOr')}
          </Text>
          <ExampleWord word={targetWord} onPress={() => onPress(targetWord)} />
        </>
      )}
    </View>
  );
};
