import { Result, TagItem } from '@vocably/model';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, Pressable, View } from 'react-native';
import {
  ActivityIndicator,
  Divider,
  Menu,
  Text,
  useTheme,
} from 'react-native-paper';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
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
  isAllowedToAdd?: boolean;
  value: TagItem[];
  existingTags: TagItem[];
  removeTag: (id: string) => Promise<Result<true>>;
  onChange?: (tags: Tag[]) => Promise<any>;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: string;
  iconColor?: string;
  iconOpacity?: number;
  pressedIconOpacity?: number;
};

const SWIPE_MENU_BUTTON_SIZE = 50;

export const extractKey = (tag: Tag) => tag.id ?? tag.data.title;

export const TagsMenu: FC<Props> = ({
  value,
  existingTags,
  removeTag,
  disabled = false,
  icon = 'tag-plus',
  iconColor,
  iconOpacity = iconButtonOpacity,
  pressedIconOpacity = pressedIconButtonOpacity,
  onChange,
  isAllowedToAdd = true,
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
    setNewTags([newTag, ...newTags]);
    setNewSelectedTags([newTag, ...newSelectedTags]);
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
      setNewSelectedTags([tag, ...newSelectedTags]);
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

  const updateNewTag = useCallback(
    (tagToUpdate: Tag, newData: Partial<Tag['data']>) => {
      const newTag = {
        ...tagToUpdate,
        data: {
          ...tagToUpdate.data,
          ...newData,
        },
      };

      setNewTags((newTags) =>
        newTags.map((tag) => (tag === tagToUpdate ? newTag : tag))
      );
      setNewSelectedTags((newSelectedTags) =>
        newSelectedTags.map((tag) => (tag === tagToUpdate ? newTag : tag))
      );
    },
    [setNewTags, setNewSelectedTags]
  );

  const editTagPressed = (tag: Tag, row: SwipeRow<Tag> | undefined) => () => {
    row && row.closeRow();
    Alert.prompt(
      'Edit Tag',
      'Enter the new tag name',
      [
        { text: 'Cancel', style: 'destructive' },
        {
          text: 'Save',
          onPress: (title) => {
            if (!title) {
              return;
            }

            if (!tag.id) {
              updateNewTag(tag, {
                title,
              });
            }
          },
        },
      ],
      'plain-text',
      tag.data.title
    );
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
                opacity: pressed ? pressedIconOpacity : iconOpacity,
                padding: 8,
              },
            ]}
            hitSlop={20}
            onPress={openMenu}
            disabled={disabled}
          >
            <Icon
              name={icon}
              color={iconColor ?? theme.colors.onBackground}
              style={{ fontSize: 22 }}
            />
          </Pressable>
        }
      >
        <View
          style={{
            minWidth: 300,
          }}
        >
          {isAllowedToAdd && (
            <View style={{ padding: 12 }}>
              <TagText
                onSubmit={addNewTag}
                autoFocus={existingTags.length === 0 && newTags.length === 0}
              />
            </View>
          )}
          <SwipeListView<Tag>
            style={{}}
            data={[...newTags, ...existingTags]}
            keyExtractor={extractKey}
            ItemSeparatorComponent={Divider}
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
            renderHiddenItem={(data, rowMap) => (
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Pressable
                  onPress={deleteTagPressed(data.item)}
                  disabled={isRemovingTagId !== null}
                  style={{
                    height: SWIPE_MENU_BUTTON_SIZE,
                    display: 'flex',
                    backgroundColor: theme.colors.error,
                    width: SWIPE_MENU_BUTTON_SIZE,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isRemovingTagId === data.item.id ? (
                    <ActivityIndicator
                      size={24}
                      color={theme.colors.onSecondary}
                    />
                  ) : (
                    <Icon
                      name="delete-outline"
                      size={24}
                      color={theme.colors.onSecondary}
                    />
                  )}
                </Pressable>
                <Pressable
                  onPress={editTagPressed(
                    data.item,
                    rowMap[extractKey(data.item)]
                  )}
                  disabled={isRemovingTagId !== null}
                  style={{
                    height: SWIPE_MENU_BUTTON_SIZE,
                    marginLeft: 'auto',
                    display: 'flex',
                    backgroundColor: theme.colors.primary,
                    width: SWIPE_MENU_BUTTON_SIZE,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    name="file-edit-outline"
                    size={24}
                    color={theme.colors.onSecondary}
                  />
                </Pressable>
              </View>
            )}
            leftOpenValue={SWIPE_MENU_BUTTON_SIZE}
            rightOpenValue={-SWIPE_MENU_BUTTON_SIZE}
          />
        </View>
      </Menu>
    </>
  );
};
