import { FC } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Study } from './Study';
import { Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: theme.colors.primary,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left-thin" size={18} />
          Back
        </Text>
      </View>
      <Study></Study>
    </View>
  );
};
