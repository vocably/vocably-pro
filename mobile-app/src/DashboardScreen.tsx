import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationProp } from '@react-navigation/native';
import { byDate, CardItem, TagItem } from '@vocably/model';
import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import {
  Alert,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Badge,
  Button,
  Chip,
  Text,
  useTheme,
} from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Loader } from './loaders/Loader';
import { mainPadding } from './styles';
import { TagsSelector } from './TagsSelector';

const SWIPE_MENU_BUTTON_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  editPanel: {
    paddingLeft: mainPadding,
    paddingRight: mainPadding,
    paddingTop: 12,
    paddingBottom: 12,
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeList: {
    width: '100%',
  },
  emptyContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type DashboardScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const DashboardScreen: DashboardScreen = ({ navigation }) => {
  const {
    deck,
    reload,
    status,
    remove,
    update,
    selectedTags,
    setSelectedTagIds,
    filteredCards,
  } = useSelectedDeck();
  const { refreshLanguages } = useContext(LanguagesContext);
  const cards = useMemo(() => filteredCards.sort(byDate), [filteredCards]);
  const theme = useTheme();
  const netInfo = useNetInfo();

  const [refreshing, setRefreshing] = useState(false);
  const [toBeDeletedId, setToBeDeletedId] = useState<string | null>(null);
  const [editPanelHeight, setEditPanelHeight] = useState(100);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refreshLanguages();
    await reload();
    setRefreshing(false);
  }, [setRefreshing, refreshLanguages, reload]);

  const deleteCard = useCallback(
    async (id: string) => {
      setToBeDeletedId(id);
      const deleteResult = await remove(id);
      if (deleteResult.success === false) {
        Alert.alert(
          'Error: Card deletion failed',
          `Oops! Something went wrong while attempting to delete the card. Please try again later.`
        );
      }
      setToBeDeletedId(null);
    },
    [remove]
  );

  const onTagsChange = useCallback(
    (id: string) => async (tags: TagItem[]) => {
      await update(id, {
        tags,
      });
    },
    [update]
  );

  const renderCard = (data: ListRenderItemInfo<CardItem>) => (
    <Pressable
      onPress={() => navigation.navigate('EditCard', { card: data.item })}
      style={{
        backgroundColor: theme.colors.background,
        // This is to prevent the swipe menu
        // from flashing occasionally
        borderWidth: 1,
        borderColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: mainPadding,
      }}
    >
      <CardListItem card={data.item.data} style={{ flex: 1 }} />
      <TagsSelector
        value={data.item.data.tags}
        onChange={onTagsChange(data.item.id)}
      />
    </Pressable>
  );

  const renderSwipeMenu = (data: ListRenderItemInfo<CardItem>) => (
    <View
      style={{
        alignSelf: 'flex-end',
        height: '100%',
        // This is to prevent the swipe menu
        // from flashing occasionally
        borderWidth: 1,
        borderColor: 'transparent',
      }}
    >
      <Pressable
        onPress={() => deleteCard(data.item.id)}
        disabled={toBeDeletedId === data.item.id}
        style={{
          backgroundColor: theme.colors.error,
          width: SWIPE_MENU_BUTTON_SIZE,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {toBeDeletedId === data.item.id ? (
          <ActivityIndicator size={32} color={theme.colors.onSecondary} />
        ) : (
          <Icon
            name="delete-outline"
            size={32}
            color={theme.colors.onSecondary}
          />
        )}
      </Pressable>
    </View>
  );

  if (deck.cards.length === 0 && status === 'loading') {
    return <Loader>Loading cards...</Loader>;
  }

  const isEmpty = deck.cards.length === 0;

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: editPanelHeight,
      }}
    >
      {!isEmpty && (
        <View
          style={{
            paddingHorizontal: mainPadding,
          }}
        >
          <View
            style={{
              position: 'relative',
              marginBottom: 8,
            }}
          >
            <Button
              labelStyle={{
                fontSize: 18,
              }}
              mode={'contained'}
              onPress={() => navigation.navigate('Study')}
              disabled={cards.length === 0 || !netInfo.isInternetReachable}
            >
              Practice{selectedTags.length > 0 ? ' selected tags' : ''}
            </Button>
            {deck.tags.length > 0 && (
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}
              >
                <TagsSelector
                  value={selectedTags}
                  onChange={(tags) => setSelectedTagIds(tags.map((t) => t.id))}
                  icon="tag"
                  iconColor={theme.colors.onPrimary}
                  iconOpacity={1}
                  pressedIconOpacity={0.8}
                  isAllowedToAdd={false}
                />
              </View>
            )}
          </View>
          {selectedTags.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <Text>Selected tags: </Text>
              {selectedTags.map((tag) => (
                <Chip
                  mode="outlined"
                  selectedColor={theme.colors.outlineVariant}
                  onClose={() =>
                    setSelectedTagIds(
                      selectedTags
                        .filter((selectedTag) => selectedTag.id !== tag.id)
                        .map((t) => t.id)
                    )
                  }
                >
                  {tag.data.title}
                </Chip>
              ))}
            </View>
          )}
          {!netInfo.isInternetReachable && (
            <Text style={{ textAlign: 'left', color: theme.colors.secondary }}>
              <Icon name="connection" /> Practice mode isn't available right now
              as it looks like your device is offline. Please connect to the
              internet and try again later.
            </Text>
          )}
        </View>
      )}
      <SwipeListView<CardItem>
        onRefresh={onRefresh}
        refreshing={refreshing}
        style={styles.swipeList}
        data={cards}
        ItemSeparatorComponent={Separator}
        keyExtractor={keyExtractor}
        renderItem={renderCard}
        renderHiddenItem={renderSwipeMenu}
        rightOpenValue={-SWIPE_MENU_BUTTON_SIZE}
        contentContainerStyle={isEmpty && styles.emptyContentContainer}
        ListEmptyComponent={
          <View style={{ paddingHorizontal: mainPadding }}>
            {selectedTags.length === 0 && <Text>Card list is empty.</Text>}
            {selectedTags.length === 1 && (
              <Text>
                You don't yet have cards marked with the{' '}
                <Text style={{ fontWeight: 'bold' }}>
                  {selectedTags[0].data.title}
                </Text>{' '}
                tag.
              </Text>
            )}
            {selectedTags.length > 1 && (
              <Text>
                You don't yet have cards marked with the selected tags.
              </Text>
            )}
          </View>
        }
        ListHeaderComponentStyle={{
          paddingHorizontal: mainPadding,
        }}
      />
      <View
        style={[styles.editPanel]}
        onLayout={(e) => setEditPanelHeight(e.nativeEvent.layout.height)}
      >
        <Button compact={true} onPress={() => navigation.navigate('EditDeck')}>
          Edit deck
        </Button>
        <Badge
          style={{
            alignSelf: 'center',
            backgroundColor: theme.colors.secondary,
            color: theme.colors.onSecondary,
          }}
        >
          {cards.length}
        </Badge>
      </View>
    </View>
  );
};
