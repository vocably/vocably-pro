import { NavigationProp } from '@react-navigation/native';
import { FC } from 'react';
import { View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { Study } from './Study';

type Dashboard = FC<{
  navigation: NavigationProp<any>;
}>;

export const StudyScreen: Dashboard = ({ navigation }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        height: '100%',
      }}
    >
      <View
        style={{
          position: 'absolute',
          width: '100%',
          padding: 20,
          zIndex: 1,
        }}
      >
        <Button icon="arrow-left-thin" onPress={() => navigation.goBack()}>
          Back
        </Button>
      </View>
      <Study onExit={() => navigation.goBack()}></Study>
    </View>
  );
};
