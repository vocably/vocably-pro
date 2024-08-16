import { TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { Tag, TagsMenu } from './TagsSelector/TagMenu';

type Props = {
  value: TagItem[];
  onChange?: (tags: TagItem[]) => Promise<any>;
  icon?: string;
};

const isTagItem = (tag: Tag): tag is TagItem => {
  return tag.id !== undefined;
};

export const TagsSelector: FC<Props> = ({
  value,
  onChange,
  icon = 'tag-plus',
}) => {
  const { addTags, deck, removeTag } = useSelectedDeck();
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

  return (
    <TagsMenu
      value={value}
      existingTags={deck.tags ?? []}
      removeTag={removeTag}
      onChange={handleTagMenuChange}
      disabled={isSaving}
      isLoading={isSaving}
      icon={icon}
    />
  );
};
