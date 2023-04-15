import { FC, useContext } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Text, useTheme, Button, Badge } from 'react-native-paper';
import { DeckContext } from './DeckContainer';
import { NavigationProp } from '@react-navigation/native';
import { mainPadding } from './styles';
import { CardItem, byDate } from '@vocably/model';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { EmptyCardsList } from './EmptyCardsList';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: mainPadding,
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

const renderItem =
  ({
    sourceStyle,
  }: {
    sourceStyle: StyleProp<TextStyle>;
  }): ListRenderItem<CardItem> =>
  ({ item }) =>
    <CardListItem card={item.data} sourceStyle={sourceStyle} />;

type DashboardScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const DashboardScreen: DashboardScreen = ({ navigation }) => {
  const { deck } = useContext(DeckContext);
  const cards = deck.cards.sort(byDate).slice(0, 7);
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <View style={[styles.container]}>
        {cards.length > 0 && (
          <View style={styles.contentContainer}>
            <View style={{ alignSelf: 'stretch' }}>
              <Button
                style={{
                  marginBottom: 24,
                }}
                labelStyle={{
                  fontSize: 18,
                }}
                mode={'contained'}
                onPress={() => navigation.navigate('Study')}
              >
                Practice
              </Button>
            </View>
            <FlatList
              style={{ width: '100%' }}
              ItemSeparatorComponent={Separator}
              data={cards}
              renderItem={renderItem({
                sourceStyle: { fontSize: 24, color: theme.colors.secondary },
              })}
              keyExtractor={keyExtractor}
              scrollEnabled={false}
            />
          </View>
        )}
        {cards.length === 0 && (
          <EmptyCardsList>
            <Text>Cards list is empty</Text>
          </EmptyCardsList>
        )}
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
