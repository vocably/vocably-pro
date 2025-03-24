import { NavigationProp, Route } from '@react-navigation/native';
import { FC, useCallback, useState } from 'react';
import { ListRenderItem, Pressable, SectionList, View } from 'react-native';
import { Appbar, Divider, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchInput } from '../SearchInput';
import { createLanguageList, LanguageListItem } from './createLanguageList';

const createItem =
  (onPress: (language: string) => void): ListRenderItem<LanguageListItem> =>
  ({ item }) => {
    const theme = useTheme();
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? theme.colors.inversePrimary
              : theme.colors.background,
          },
          { padding: 16 },
        ]}
        onPress={() => onPress(item.key)}
      >
        <Text style={{ fontSize: 16 }}>
          {item.selected && (
            <>
              <Icon name="check" />{' '}
            </>
          )}
          {item.label}
        </Text>
      </Pressable>
    );
  };

type LanguageSelectorModal = FC<{
  navigation: NavigationProp<any>;
  route: Route<
    string,
    {
      title: string;
      selected: string;
      onSelect: (language: string) => void;
      preferred?: string[];
      preferredTitle?: string;
    }
  >;
}>;

export const LanguageSelectorModal: LanguageSelectorModal = ({
  route,
  navigation,
}) => {
  const {
    title,
    selected,
    preferred = [],
    preferredTitle = 'Preferred',
    onSelect,
  } = route.params;
  const theme = useTheme();

  const [searchText, setSearchText] = useState('');

  const onPress = useCallback(
    (language: string) => {
      onSelect(language);
      navigation.goBack();
    },
    [onSelect]
  );

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: theme.colors.background,
      }}
    >
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Content title={title} />
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={{ padding: 8 }}>
        <SearchInput
          value={searchText}
          placeholder="Search"
          onChange={(value) => {
            setSearchText(value);
          }}
          onSubmit={() => {}}
        />
      </View>
      <SectionList
        sections={createLanguageList({
          selected,
          preferred,
          preferredTitle,
          searchText,
        })}
        renderItem={createItem(onPress)}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              padding: 16,
              fontWeight: 'bold',
              backgroundColor: theme.colors.background,
            }}
          >
            {title}
          </Text>
        )}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};
