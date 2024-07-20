import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationProp } from '@react-navigation/native';
import { byDate, CardItem, TagItem } from '@vocably/model';
import { FC, useCallback, useContext, useState } from 'react';
import {
  Alert,
  ListRenderItem,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Badge,
  Button,
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

const renderItem: ListRenderItem<CardItem> = ({ item }) => (
  <CardListItem card={item.data} />
);

type DashboardScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const DashboardScreen: DashboardScreen = ({ navigation }) => {
  const { deck, reload, status, remove, clearTags } = useSelectedDeck();
  const { refreshLanguages } = useContext(LanguagesContext);
  const cards = deck.cards.sort(byDate);
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

  const renderCard = (data: ListRenderItemInfo<CardItem>) => (
    <Pressable
      onPress={() => navigation.navigate('EditCard', { card: data.item })}
      style={{
        backgroundColor: theme.colors.background,
        // This is to prevent the swipe menu
        // from flashing occasionally
        borderWidth: 1,
        borderColor: 'transparent',
      }}
    >
      <CardListItem card={data.item.data} />
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

  const [selectedTags, setSelectedTags] = useState<TagItem[]>([]);

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
        <View style={{ paddingHorizontal: mainPadding }}>
          <Button
            style={{
              marginBottom: 8,
            }}
            labelStyle={{
              fontSize: 18,
            }}
            mode={'contained'}
            onPress={() => navigation.navigate('Study')}
            disabled={!netInfo.isInternetReachable}
          >
            Practice
          </Button>
          {!netInfo.isInternetReachable && (
            <Text style={{ textAlign: 'left', color: theme.colors.secondary }}>
              <Icon name="connection" /> Practice mode isn't available right now
              as it looks like your device is offline. Please connect to the
              internet and try again later.
            </Text>
          )}
          <TagsSelector
            value={selectedTags}
            onChange={async (tags) => setSelectedTags(tags)}
          />
          <Button onPress={() => clearTags()}>Clear tags</Button>
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
        ListEmptyComponent={<Text>Card list is empty.</Text>}
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
          {deck.cards.length}
        </Badge>
      </View>
    </View>
  );
};
