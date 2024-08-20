import { TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import { Deck } from './languageDeck/useLanguageDeck';
import { Tag, TagsMenu } from './TagsSelector/TagMenu';

type Props = {
  value: TagItem[];
  onChange?: (tags: TagItem[]) => Promise<any>;
  icon?: string;
  iconColor?: string;
  iconOpacity?: number;
  pressedIconOpacity?: number;
  isAllowedToAdd?: boolean;
  deck: Deck;
};

const isTagItem = (tag: Tag): tag is TagItem => {
  return tag.id !== undefined;
};

export const TagsSelector: FC<Props> = ({
  value,
  onChange,
  icon = 'tag-plus',
  iconOpacity,
  pressedIconOpacity,
  iconColor,
  isAllowedToAdd,
  deck: { addTags, deck, removeTag },
}) => {
  const [isSaving, setIsSaving] = useState(false);

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

  const existingTags = deck.tags.sort((a, b) => b.created - a.created);

  return (
    <TagsMenu
      value={value}
      existingTags={existingTags ?? []}
      removeTag={removeTag}
      onChange={handleTagMenuChange}
      disabled={isSaving}
      isLoading={isSaving}
      iconOpacity={iconOpacity}
      pressedIconOpacity={pressedIconOpacity}
      icon={icon}
      iconColor={iconColor}
      isAllowedToAdd={isAllowedToAdd}
    />
  );
};
