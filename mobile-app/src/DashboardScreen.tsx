import { FC, useCallback, useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { Text, useTheme, Button, Badge } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { mainPadding } from './styles';
import { CardItem, byDate } from '@vocably/model';
import { CardListItem, Separator } from './CardListItem';
import { EmptyCardsList } from './EmptyCardsList';
import LinearGradient from 'react-native-linear-gradient';
import { LanguagesContext } from './languages/LanguagesContainer';
import { useNetInfo } from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Loader } from './loaders/Loader';
import { userSelectedDeck } from './languageDeck/userSelectedDeck';

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
    paddingTop: mainPadding * 2,
    paddingBottom: mainPadding * 1.5,
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const renderItem: ListRenderItem<CardItem> = ({ item }) => (
  <CardListItem card={item.data} />
);

type DashboardScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const DashboardScreen: DashboardScreen = ({ navigation }) => {
  const { deck, reload, status } = userSelectedDeck();
  const { refreshLanguages } = useContext(LanguagesContext);
  const cards = deck.cards.sort(byDate).slice(0, 17);
  const theme = useTheme();
  const netInfo = useNetInfo();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refreshLanguages();
    await reload();
    setRefreshing(false);
  }, [setRefreshing, refreshLanguages, reload]);

  if (deck.cards.length === 0 && status === 'loading') {
    return <Loader>Loading cards...</Loader>;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={[styles.container]}>
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {cards.length > 0 && (
            <View style={styles.contentContainer}>
              <View
                style={{ alignSelf: 'stretch', marginHorizontal: mainPadding }}
              >
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
                    <Icon name="connection" /> Practice mode isn't available
                    right now as it looks like your device is offline. Please
                    connect to the internet and try again later.
                  </Text>
                )}
              </View>

              {cards.map((card, index) => (
                <View key={card.id} style={{ width: '100%' }}>
                  {index !== 0 && <Separator />}
                  {<CardListItem card={card.data} />}
                </View>
              ))}
            </View>
          )}
          {cards.length === 0 && (
            <EmptyCardsList>
              <Text>Card list is empty</Text>
            </EmptyCardsList>
          )}
        </ScrollView>
        <LinearGradient
          locations={[0.1, 0.3]}
          // @ts-ignore
          colors={[theme.colors.transparentSurface, theme.colors.surface]}
          style={[styles.editPanel]}
        >
          <Button
            compact={true}
            onPress={() => navigation.navigate('EditDeck')}
          >
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
    </View>
  );
};
