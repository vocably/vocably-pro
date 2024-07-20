import { TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { Tag, TagsMenu } from './TagsSelector/TagMenu';

type Props = {
  value: TagItem[];
  onChange?: (tags: TagItem[]) => Promise<any>;
};

const isTagItem = (tag: Tag): tag is TagItem => {
  return tag.id !== undefined;
};

export const TagsSelector: FC<Props> = ({ value, onChange }) => {
  const { addTags, deck } = useSelectedDeck();
  const [isSaving, setIsSaving] = useState(false);
  const theme = useTheme();

  const handleTagMenuChange = async (tags: Tag[]) => {
    setIsSaving(true);

    const newTags = tags
      .filter((tag) => tag.id === undefined)
      .map((tag) => tag.data);

    const addTagsResult = await addTags(newTags);

    if (addTagsResult.success === false) {
      setIsSaving(false);
      return;
    }

    if (onChange) {
      await onChange([...tags.filter(isTagItem), ...addTagsResult.value]);
    }

    setIsSaving(false);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <TagsMenu
        value={value}
        existingTags={deck.tags ?? []}
        onChange={handleTagMenuChange}
        disabled={isSaving}
      />
      {value.map((tag) => (
        <View
          key={tag.id}
          style={{
            padding: 6,
            borderRadius: 50,
            backgroundColor: theme.colors.outlineVariant,
            marginRight: 6,
          }}
        >
          <Text
            style={{
              minWidth: 16,
              textAlign: 'center',
              color: theme.colors.onPrimary,
            }}
          >
            {tag.data.title}
          </Text>
        </View>
      ))}
    </View>
  );
};
