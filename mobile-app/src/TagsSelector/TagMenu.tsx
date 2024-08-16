import { Result, TagItem } from '@vocably/model';
import React, { FC, useEffect, useState } from 'react';
import { Alert, Pressable, View } from 'react-native';
import {
  ActivityIndicator,
  Divider,
  Menu,
  Text,
  useTheme,
} from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  iconButtonOpacity,
  pressedIconButtonOpacity,
} from '../stupidConstants';
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
  removeTag: (id: string) => Promise<Result<true>>;
  onChange?: (tags: Tag[]) => Promise<any>;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: string;
};

const SWIPE_MENU_BUTTON_SIZE = 50;

export const TagsMenu: FC<Props> = ({
  value,
  existingTags,
  removeTag,
  disabled = false,
  isLoading = false,
  icon = 'tag-plus',
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const [newTags, setNewTags] = useState<Tag[]>([]);
  const [newSelectedTags, setNewSelectedTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagItem[]>([]);
  const [isRemovingTagId, setIsRemovingTagId] = useState<string | null>(null);
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

  const newTagPressed = (tag: Tag) => {
    if (isSelectedTag(tag)) {
      setNewSelectedTags(newSelectedTags.filter((t) => t !== tag));
    } else {
      setNewSelectedTags([...newSelectedTags, tag]);
    }
  };

  const existingTagPressed = (tag: TagItem) => {
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

  const deleteTagPressed = (tag: Tag) => async () => {
    if (!isExistingTag(tag)) {
      setNewTags(newTags.filter((t) => t !== tag));
      setNewSelectedTags(newSelectedTags.filter((t) => t !== tag));

      return;
    }

    setIsRemovingTagId(tag.id);
    const removeResult = await removeTag(tag.id);
    if (removeResult.success === false) {
      Alert.alert(
        'An error occurred while removing the tag. Please try again.'
      );
    }
    setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    setIsRemovingTagId(null);
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
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? pressedIconButtonOpacity : iconButtonOpacity,
                padding: 8,
              },
            ]}
            hitSlop={20}
            onPress={openMenu}
          >
            <Icon
              name={icon}
              color={theme.colors.onBackground}
              style={{ fontSize: 22 }}
            />
          </Pressable>
        }
      >
        <SwipeListView<Tag>
          style={{}}
          data={[...existingTags, ...newTags]}
          keyExtractor={(item, index) => item.id ?? index.toString()}
          renderItem={(data) => (
            <Pressable
              onPress={tagPressed(data.item)}
              style={{
                backgroundColor: theme.colors.elevation.level2,
                // This is to prevent the swipe menu
                // from flashing occasionally
                borderWidth: 1,
                borderColor: 'transparent',
                padding: 12,
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginRight: 6,
                }}
              >
                {data.item.data.title}
              </Text>
              <Icon
                name="check"
                size={18}
                color={theme.colors.onBackground}
                style={{
                  opacity: isSelectedTag(data.item) ? 1 : 0,
                }}
              />
            </Pressable>
          )}
          renderHiddenItem={(data) => (
            <Pressable
              onPress={deleteTagPressed(data.item)}
              disabled={isRemovingTagId !== null}
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
              {isRemovingTagId === data.item.id ? (
                <ActivityIndicator size={24} color={theme.colors.onSecondary} />
              ) : (
                <Icon
                  name="delete-outline"
                  size={24}
                  color={theme.colors.onSecondary}
                />
              )}
            </Pressable>
          )}
          rightOpenValue={-SWIPE_MENU_BUTTON_SIZE}
        />
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
