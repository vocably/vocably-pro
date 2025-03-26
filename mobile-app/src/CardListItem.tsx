import { Card, isGoogleTTSLanguage, TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import { Clipboard, Pressable, StyleProp, View, ViewStyle } from 'react-native';
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
          {isGoogleTTSLanguage(card.language) && (
            <View style={{ alignSelf: 'flex-start', paddingTop: 6 }}>
              <PlaySound
                text={card.source}
                language={card.language}
                size={22}
                style={{
                  marginRight: 4,
                }}
              />
            </View>
          )}
          <Text
            style={{
              fontSize: 24,
              color: theme.colors.secondary,
              marginRight: 8,
            }}
          >
            <Text
              style={{ color: theme.colors.secondary, verticalAlign: 'bottom' }}
            >
              {card.source}
            </Text>
          </Text>
          {allowCopy && (
            <>
              <Pressable
                hitSlop={30}
                onPress={() => {
                  Clipboard.setString(card.source);
                  !copied && setCopied(true);
                }}
                style={({ pressed }) => ({
                  marginLeft: 0,
                  marginRight: 8,
                  opacity: pressed ? 0.4 : 1,
                })}
              >
                <Icon
                  name="content-copy"
                  size={16}
                  color={theme.colors.onSurface}
                />
              </Pressable>

              <Portal>
                <Snackbar
                  visible={copied}
                  onDismiss={() => copied && setCopied(false)}
                  duration={2000}
                >
                  Copied to clipboard.
                </Snackbar>
              </Portal>
            </>
          )}

          {card.ipa && <Text style={{ marginRight: 8 }}>[{card.ipa}]</Text>}

          {card.g && <Text style={{ marginRight: 8 }}>({card.g})</Text>}

          {card.partOfSpeech && <Text>{card.partOfSpeech}</Text>}
        </View>
      </View>
      <CardDefinition card={card} />
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
