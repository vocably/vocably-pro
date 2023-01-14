import { FC, useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Divider, Text, useTheme, Button } from 'react-native-paper';
import { DeckContext } from './DeckContainer';
import { NavigationProp } from '@react-navigation/native';
import { byDate } from '@vocably/sulna';
import { SideB } from './SideB';

const mainPadding = 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: mainPadding,
  },
  button: {
    width: '100%',
    textAlign: 'center',
  },
});

type Dashboard = FC<{
  navigation: NavigationProp<any>;
}>;

export const Dashboard: Dashboard = ({ navigation }) => {
  const { deck } = useContext(DeckContext);
  const cards = deck.cards.sort(byDate).slice(0, 7);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Button
        style={{
          width: Dimensions.get('screen').width - mainPadding * 2,
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
      {cards.map((card, index) => (
        <View style={{ width: '100%' }} key={card.id}>
          {index > 0 && <Divider style={{ marginTop: 16, marginBottom: 16 }} />}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
            }}
          >
            <Text style={{ fontSize: 24 }}>{card.data.source}</Text>
            {card.data.partOfSpeech && (
              <Text style={{ marginLeft: 8 }}>{card.data.partOfSpeech}</Text>
            )}
          </View>
          <SideB card={card} />
        </View>
      ))}
    </View>
  );
};
