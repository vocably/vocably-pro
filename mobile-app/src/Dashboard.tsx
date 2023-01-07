import { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { DeckContext } from './DeckContainer';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Dashboard = FC<{
  navigation: NavigationProp<any>;
}>;

export const Dashboard: Dashboard = ({ navigation }) => {
  const { deck } = useContext(DeckContext);

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Study')}>
        {deck.cards.length} cards
      </Text>
    </View>
  );
};
