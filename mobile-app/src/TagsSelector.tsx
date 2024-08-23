import { TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import { Deck } from './languageDeck/useLanguageDeck';
import { Tag, TagsMenu } from './TagsSelector/TagMenu';
import { TagMenuAnchorProps } from './TagsSelector/TagMenuAnchor';

type Props = {
  value: TagItem[];
  renderAnchor: TagMenuAnchorProps['renderAnchor'];
  onChange?: (tags: TagItem[]) => Promise<any>;
  isAllowedToAdd?: boolean;
  deck: Deck;
};

const isTagItem = (tag: Tag): tag is TagItem => {
  return tag.id !== undefined;
};

export const TagsSelector: FC<Props> = ({
  value,
  renderAnchor,
  onChange,
  isAllowedToAdd,
  deck: { addTags, deck, removeTag, updateTag },
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
      updateTag={updateTag}
      onChange={handleTagMenuChange}
      disabled={isSaving}
      isLoading={isSaving}
      isAllowedToAdd={isAllowedToAdd}
      renderAnchor={renderAnchor}
    />
  );
};
