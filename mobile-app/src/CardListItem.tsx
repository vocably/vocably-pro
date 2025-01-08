import { Card, isGoogleTTSLanguage, TagItem } from '@vocably/model';
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {
  ActivityIndicator,
  Chip,
  Divider,
  Text,
  useTheme,
} from 'react-native-paper';
import { CardDefinition } from './CardDefinition';
import { CardExample } from './CardExample';
import { PlaySound } from './PlaySound';

type CardListItem = FC<{
  card: Card;
  style?: StyleProp<ViewStyle>;
  showExamples?: boolean;
  savingTagsInProgress?: boolean;
  onTagsChange?: (tags: TagItem[]) => Promise<any>;
}>;

export const CardListItem: CardListItem = ({
  card,
  style,
  showExamples = false,
  savingTagsInProgress = false,
  onTagsChange = () => null,
}) => {
  const theme = useTheme();

  const onTagClose = (tagToRemove: TagItem) => () => {
    onTagsChange(card.tags.filter((t) => t.id !== tagToRemove.id));
  };

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
