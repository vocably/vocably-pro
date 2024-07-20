import { TagItem } from '@vocably/model';
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Divider, IconButton, List, Menu } from 'react-native-paper';
import { TagText } from './TagsSelector/TagText';

export type Tag = {
  id?: TagItem['id'];
  data: TagItem['data'];
};

type Props = {
  selectedTags: TagItem[];
  existingTags: TagItem[];
  onChange?: (tags: Tag[]) => Promise<any>;
};

export const TagsSelector: FC<Props> = ({ selectedTags, existingTags }) => {
  const [visible, setVisible] = useState(false);
  const [newTags, setNewTags] = useState<Tag[]>([]);
  const [newSelectedTags, setNewSelectedTags] = useState<Tag[]>([]);

  const openMenu = () => {
    setNewTags([]);
    setNewSelectedTags([]);
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
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

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton onPress={openMenu} icon="tag-plus-outline" />}
      >
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
