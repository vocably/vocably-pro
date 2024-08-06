import { TagItem } from '@vocably/model';
import React, { FC, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Divider, IconButton, Menu, Text, useTheme } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TagText } from './TagText';

export type Tag = {
  id?: TagItem['id'];
  data: TagItem['data'];
};

const isExistingTag = (tag: Tag): tag is TagItem => {
  return !!tag.id;
};

type Props = {
  value: TagItem[];
  existingTags: TagItem[];
  onChange?: (tags: Tag[]) => Promise<any>;
  disabled?: boolean;
};

const SWIPE_MENU_BUTTON_SIZE = 50;

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
  const theme = useTheme();

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

  const isSelectedTag = (tag: Tag): boolean => {
    if (isExistingTag(tag)) {
      return selectedTags.some((t) => t.id === tag.id);
    }

    return newSelectedTags.includes(tag);
  };

  const newTagPressed = (tag: Tag) => () => {
    if (isSelectedTag(tag)) {
      setNewSelectedTags(newSelectedTags.filter((t) => t !== tag));
    } else {
      setNewSelectedTags([...newSelectedTags, tag]);
    }
  };

  const existingTagPressed = (tag: TagItem) => () => {
    if (isSelectedTag(tag)) {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const tagPressed = (tag: Tag) => () => {
    if (isExistingTag(tag)) {
      existingTagPressed(tag);
    } else {
      newTagPressed(tag);
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
        <SwipeListView<Tag>
          style={{}}
          data={[...existingTags, ...newTags]}
          keyExtractor={(item, index) => item.id ?? index.toString()}
          renderItem={(data) => (
            <Pressable
              onPress={() => console.log('pressed', data)}
              style={{
                backgroundColor: theme.colors.elevation.level2,
                // This is to prevent the swipe menu
                // from flashing occasionally
                borderWidth: 1,
                borderColor: 'transparent',
                padding: 12,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  borderStyle: 'solid',
                  borderColor: '#0f0',
                  borderWidth: 1,
                }}
              >
                {data.item.data.title}
              </Text>
              <Icon name="check" />
            </Pressable>
          )}
          renderHiddenItem={(data) => (
            <Pressable
              onPress={tagPressed(data.item)}
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                display: 'flex',
                borderWidth: 1,
                borderColor: '$ff0',
                borderStyle: 'solid',
                backgroundColor: theme.colors.error,
                width: SWIPE_MENU_BUTTON_SIZE,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name="delete-outline"
                size={24}
                color={theme.colors.onSecondary}
              />
            </Pressable>
          )}
          rightOpenValue={-SWIPE_MENU_BUTTON_SIZE}
        />
        {/*{existingTags.map((tag) => (*/}
        {/*  <List.Item*/}
        {/*    key={tag.id}*/}
        {/*    title={tag.data.title}*/}
        {/*    right={() => (*/}
        {/*      <List.Icon*/}
        {/*        icon="check"*/}
        {/*        style={{*/}
        {/*          opacity: isSelectedTag(tag) ? 1 : 0,*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*    onPress={existingTagPressed(tag)}*/}
        {/*  />*/}
        {/*))}*/}
        {/*{newTags.map((tag, index) => (*/}
        {/*  <List.Item*/}
        {/*    key={index}*/}
        {/*    title={tag.data.title}*/}
        {/*    onPress={newTagPressed(tag)}*/}
        {/*    right={() => (*/}
        {/*      <List.Icon*/}
        {/*        icon="check"*/}
        {/*        style={{*/}
        {/*          opacity: isNewTagSelected(tag) ? 1 : 0,*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*  />*/}
        {/*))}*/}
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
