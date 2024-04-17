import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Menu, Text } from 'react-native-paper';
import { EditDeckMenu } from './EditDeckMenu';
import { mainPadding } from './styles';


type EditDeckScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const EditDeckScreen: EditDeckScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <EditDeckMenu/>

      <View style={styles.bottomInfo}>
        <Text>More deck settings are comming soon.</Text>
        <Text>Stay tuned!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: mainPadding,
  },
  bottomInfo: {
    alignItems: 'center',
  }
});
