import { TagItem } from '@vocably/model';
import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Divider, IconButton, List, Menu } from 'react-native-paper';
import { TagText } from './TagText';

export type Tag = {
  id?: TagItem['id'];
  data: TagItem['data'];
};

type Props = {
  value: TagItem[];
  existingTags: TagItem[];
  onChange?: (tags: Tag[]) => Promise<any>;
  disabled?: boolean;
};

export const TagsMenu: FC<Props> = ({
  value,
  existingTags,
  disabled = false,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const [newTags, setNewTags] = useState<Tag[]>([]);
  const [newSelectedTags, setNewSelectedTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagItem[]>([]);

  useEffect(() => {
    setSelectedTags(value);
  }, [value]);

  const openMenu = () => {
    setNewTags([]);
    setNewSelectedTags([]);
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
    onChange && onChange([...newSelectedTags, ...selectedTags]);
  };

  const addNewTag = (title: string) => {
    const newTag: Tag = {
      data: {
        title,
      },
    };
    setNewTags([...newTags, newTag]);
    setNewSelectedTags([...newSelectedTags, newTag]);
  };

  const isNewTagSelected = (tag: Tag): boolean => newSelectedTags.includes(tag);

  const newTagPressed = (tag: Tag) => () => {
    if (isNewTagSelected(tag)) {
      setNewSelectedTags(newSelectedTags.filter((t) => t !== tag));
    } else {
      setNewSelectedTags([...newSelectedTags, tag]);
    }
  };

  const isSelectedTag = (tag: TagItem): boolean =>
    selectedTags.some((t) => t.id === tag.id);

  const existingTagPressed = (tag: TagItem) => () => {
    if (isSelectedTag(tag)) {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{
          width: 300,
        }}
        contentStyle={{
          width: 300,
        }}
        anchor={
          <IconButton
            onPress={openMenu}
            icon="tag-plus-outline"
            disabled={disabled}
          />
        }
      >
        {existingTags.map((tag) => (
          <List.Item
            key={tag.id}
            title={tag.data.title}
            right={() => (
              <List.Icon
                icon="check"
                style={{
                  opacity: isSelectedTag(tag) ? 1 : 0,
                }}
              />
            )}
            onPress={existingTagPressed(tag)}
          />
        ))}
        {newTags.map((tag, index) => (
          <List.Item
            key={index}
            title={tag.data.title}
            onPress={newTagPressed(tag)}
            right={() => (
              <List.Icon
                icon="check"
                style={{
                  opacity: isNewTagSelected(tag) ? 1 : 0,
                }}
              />
            )}
          />
        ))}
        {(newTags.length > 0 || existingTags.length > 0) && <Divider />}
        <View
          style={{
            minWidth: 300,
            padding: 12,
          }}
        >
          <TagText
            onSubmit={addNewTag}
            autoFocus={existingTags.length === 0 && newTags.length === 0}
          />
        </View>
      </Menu>
    </>
  );
};
