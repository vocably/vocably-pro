import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type LookUpScreen = FC<{}>;

export const LookUpScreen: LookUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Look up</Text>
    </View>
  );
};
