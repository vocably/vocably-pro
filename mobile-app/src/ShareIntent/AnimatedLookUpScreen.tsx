import { NavigationProp } from '@react-navigation/native';
import { FC } from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { LookUpScreen } from '../LookUpScreen';

export const AnimatedLookUpScreen: FC<{
  navigation: NavigationProp<any>;
}> = ({ navigation }) => {
  return (
    <Animated.View
      entering={FadeInUp}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <LookUpScreen navigation={navigation} />
    </Animated.View>
  );
};
