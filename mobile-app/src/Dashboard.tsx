import { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { DeckContext } from './DeckContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Dashboard = FC<{}>;

export const Dashboard: Dashboard = () => {
  const { deck } = useContext(DeckContext);
  return (
    <View style={styles.container}>
      <Text>{deck.cards.length} cards</Text>
    </View>
  );
};
