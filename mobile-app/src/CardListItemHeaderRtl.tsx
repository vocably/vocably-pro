import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';
import { Card, isGoogleTTSLanguage } from '@vocably/model';
import { isGoodPlural, sanitizeTranscript } from '@vocably/sulna';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PixelRatio, Platform, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FrequencyIndicator } from './FrequencyIndicator';
import { PlaySound } from './PlaySound';
import { isolate } from './isolate';

const LRM = '\u200E';

type Props = {
  card: Card;
  allowCopy: boolean;
  aiButton: 'dimmed' | 'bright' | 'none';
  showFrequency: boolean;
  isSharedLookup?: boolean;
  onCopy: () => void;
};

// The header is a single LTR paragraph (LRM forces the direction). RTL pieces
// are wrapped with isolate() so they keep their own direction without
// reordering the rest of the line.
// Everything except the play button and the frequency indicator is nested
// Text: RN mispositions inline views that follow RTL text, so both views come
// before the source.
export const CardListItemHeaderRtl: FC<Props> = ({
  card,
  allowCopy,
  aiButton,
  showFrequency,
  isSharedLookup = false,
  onCopy,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation();
  const [pressedIcon, setPressedIcon] = useState<'copy' | 'ai' | null>(null);

  const fontScale = PixelRatio.getFontScale();

  const hasFrequency = showFrequency && typeof card.frequency === 'number';

  const present = card.presentTenses
    ? t('common.presentTenses', { value: isolate(card.presentTenses) })
    : false;
  const past =
    card.tense === 'present' && card.pastTenses
      ? t('common.pastTenses', { value: isolate(card.pastTenses) })
      : false;

  const presentAndPast = [present, past].filter(Boolean).join(`\n`);

  return (
    <View style={{ width: '100%' }}>
      <Text style={{ fontSize: 16, textAlign: 'left' }}>
        {LRM}
        {isGoogleTTSLanguage(card.language) && (
          <>
            <PlaySound
              text={card.source}
              language={card.language}
              size={22}
              // Keep the play button's hit area off the frequency indicator
              // right next to it.
              hitSlop={
                hasFrequency
                  ? { top: 20, bottom: 20, left: 20, right: 4 }
                  : undefined
              }
              style={{
                transform: [{ translateY: Platform.OS === 'android' ? 6 : 2 }],
                justifyContent: 'center',
              }}
            />
            {hasFrequency ? '\u00A0\u00A0\u00A0' : ' '}
          </>
        )}
        {hasFrequency && (
          <>
            <FrequencyIndicator
              frequency={card.frequency!}
              source={card.source}
              language={card.language}
              isSharedLookup={isSharedLookup}
              style={{
                transform: [{ translateY: Platform.OS === 'android' ? 1 : -3 }],
              }}
            />
            {'\u00A0'}
            {'\u00A0'}
            {'\u00A0'}
          </>
        )}
        <Text
          style={{
            fontSize: 24,
            color: theme.colors.secondary,
          }}
        >
          {isolate(card.source)}
        </Text>
        {allowCopy && (
          <>
            {'  '}
            <Icon
              name="content-copy"
              size={17 * fontScale}
              color={theme.colors.onSurface}
              suppressHighlighting
              onPressIn={() => setPressedIcon('copy')}
              onPressOut={() => setPressedIcon(null)}
              onPress={() => {
                Clipboard.setString(card.source);
                onCopy();
              }}
              style={{ opacity: pressedIcon === 'copy' ? 0.4 : 1 }}
            />
          </>
        )}
        {aiButton !== 'none' && (
          <>
            {'   '}
            <Icon
              name="creation"
              size={17 * fontScale}
              color={
                aiButton === 'bright'
                  ? theme.colors.primary
                  : theme.colors.onSurface
              }
              suppressHighlighting
              onPressIn={() => setPressedIcon('ai')}
              onPressOut={() => setPressedIcon(null)}
              onPress={() => {
                // @ts-ignore
                navigation.navigate('ChatWithCardModal', {
                  card,
                });
              }}
              style={{ opacity: pressedIcon === 'ai' ? 0.4 : 1 }}
            />
            {' '}
          </>
        )}
        {card.ipa && <> /{isolate(sanitizeTranscript(card.ipa))}/</>}
        {card.g && <> ({isolate(card.g)})</>}
        {card.partOfSpeech && (
          <> {t(`language.${card.partOfSpeech}`, card.partOfSpeech)}</>
        )}
        {presentAndPast && <>{`\n${presentAndPast}`}</>}
        {card.number === 'singular' && isGoodPlural(card.pluralForm) && (
          <> {t('common.plural', { value: isolate(card.pluralForm) })}</>
        )}
      </Text>
    </View>
  );
};
