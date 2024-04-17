import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationProp } from '@react-navigation/native';
import { byDate, CardItem } from '@vocably/model';
import { FC, useCallback, useContext, useState } from 'react';
import {
  Alert,
  ListRenderItem,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
import { EmptyCardsList } from './EmptyCardsList';
import { userSelectedDeck } from './languageDeck/userSelectedDeck';
import { LanguagesContext } from './languages/LanguagesContainer';
import { Loader } from './loaders/Loader';
import { mainPadding } from './styles';

const SWIPE_MENU_BUTTON_SIZE = 50;

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
    paddingTop: mainPadding,
    paddingBottom: mainPadding,
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
  swipeButton: {
    width: SWIPE_MENU_BUTTON_SIZE,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeMenu: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const renderItem: ListRenderItem<CardItem> = ({ item }) => (
  <CardListItem card={item.data} />
);

type DashboardScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const DashboardScreen: DashboardScreen = ({ navigation }) => {
  const { deck, reload, status, remove } = userSelectedDeck();
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
    <View style={{ backgroundColor: theme.colors.background }}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? theme.colors.inversePrimary
              : theme.colors.background,
          },
        ]}
        onPress={() => navigation.navigate('EditCard', { card: data.item })}
      >
        <CardListItem card={data.item.data} />
      </Pressable>
    </View>
  );

  const renderSwipeMenu = (data: ListRenderItemInfo<CardItem>) => (
    <View style={styles.swipeMenu}>
      <Pressable
        onPress={() => deleteCard(data.item.id)}
        disabled={toBeDeletedId === data.item.id}
        style={[styles.swipeButton, { backgroundColor: theme.colors.error }]}
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

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: editPanelHeight,
      }}
    >
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
        ListEmptyComponent={
          <EmptyCardsList>
            <Text>Card list is empty</Text>
          </EmptyCardsList>
        }
        ListHeaderComponentStyle={{
          paddingHorizontal: mainPadding,
        }}
        ListHeaderComponent={
          <View>
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
              <Text
                style={{ textAlign: 'left', color: theme.colors.secondary }}
              >
                <Icon name="connection" /> Practice mode isn't available right
                now as it looks like your device is offline. Please connect to
                the internet and try again later.
              </Text>
            )}
          </View>
        }
      />
      <LinearGradient
        onLayout={(e) => setEditPanelHeight(e.nativeEvent.layout.height)}
        locations={[0.1, 0.3]}
        // @ts-ignore
        colors={[theme.colors.transparentSurface, theme.colors.surface]}
        style={[styles.editPanel]}
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
      </LinearGradient>
    </View>
  );
};
