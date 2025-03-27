import { Card, isGoogleTTSLanguage, TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import {
  Clipboard,
  Platform,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {
  ActivityIndicator,
  Chip,
  Divider,
  Portal,
  Snackbar,
  Text,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardDefinition } from './CardDefinition';
import { CardExample } from './CardExample';
import { PlaySound } from './PlaySound';

type Props = {
  card: Card;
  style?: StyleProp<ViewStyle>;
  showExamples?: boolean;
  savingTagsInProgress?: boolean;
  onTagsChange?: (tags: TagItem[]) => Promise<any>;
  allowCopy?: boolean;
};

export const CardListItem: FC<Props> = ({
  card,
  style,
  showExamples = false,
  savingTagsInProgress = false,
  onTagsChange = () => null,
  allowCopy = false,
}) => {
  const theme = useTheme();

  const onTagClose = (tagToRemove: TagItem) => () => {
    onTagsChange(card.tags.filter((t) => t.id !== tagToRemove.id));
  };

  const [copied, setCopied] = useState(false);

  return (
    <View style={style}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'baseline',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlignVertical: 'top',
            }}
          >
            {isGoogleTTSLanguage(card.language) && (
              <>
                <PlaySound
                  text={card.source}
                  language={card.language}
                  size={22}
                  style={{
                    transform: [
                      { translateY: Platform.OS === 'android' ? 3 : 1 },
                    ],
                  }}
                />{' '}
              </>
            )}
            <Text
              style={{
                fontSize: 24,
                color: theme.colors.secondary,
                textAlignVertical: 'top',
              }}
            >
              {card.source}
            </Text>
            {allowCopy && (
              <>
                {'\u00A0'}
                <Pressable
                  hitSlop={10}
                  onPress={() => {
                    Clipboard.setString(card.source);
                    !copied && setCopied(true);
                  }}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.4 : 1,
                    transform: [
                      { translateY: Platform.OS === 'android' ? 3 : 0 },
                    ],
                  })}
                >
                  <Icon
                    name="content-copy"
                    size={16}
                    color={theme.colors.onSurface}
                  />
                </Pressable>
              </>
            )}
            {card.ipa && (
              <>
                {' '}
                <Text>[{card.ipa}]</Text>
              </>
            )}

            {card.g && (
              <>
                {' '}
                <Text>({card.g})</Text>
              </>
            )}

            {card.partOfSpeech && (
              <>
                {' '}
                <Text>{card.partOfSpeech}</Text>
              </>
            )}
          </Text>
        </View>
      </View>
      {allowCopy && (
        <Portal>
          <Snackbar
            visible={copied}
            onDismiss={() => copied && setCopied(false)}
            duration={2000}
          >
            Copied to clipboard.
          </Snackbar>
        </Portal>
      )}
      <View style={{ marginTop: 8 }}>
        <CardDefinition card={card} />
      </View>
      {showExamples && card.example && (
        <View style={{ marginStart: 10, marginTop: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>Examples</Text>
          <CardExample example={card.example} />
        </View>
      )}
      {(card.tags.length > 0 || savingTagsInProgress) && (
        <View
          style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
            minHeight: 36,
          }}
        >
          {card.tags.map((tag) => (
            <Chip
              key={tag.id}
              selectedColor={theme.colors.outlineVariant}
              mode="outlined"
              onClose={onTagClose(tag)}
            >
              {tag.data.title}
            </Chip>
          ))}
          {savingTagsInProgress && (
            <ActivityIndicator color={theme.colors.onBackground} />
          )}
        </View>
      )}
    </View>
  );
};

export const Separator: FC = () => <Divider style={{ zIndex: 1 }} />;
