import { NavigationProp } from '@react-navigation/native';
import { FC } from 'react';
import { View } from 'react-native';
import { LookUpScreen } from '../LookUpScreen';

export const AnimatedLookUpScreen: FC<{
  navigation: NavigationProp<any>;
}> = ({ navigation }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <LookUpScreen navigation={navigation} />
    </View>
  );
};
