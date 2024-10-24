import { createStackNavigator } from '@react-navigation/stack';

import { Header } from './Header';
import { WelcomeScreen } from './WelcomeScreen';

const Stack = createStackNavigator();

export const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name={'Welcome'}
        component={WelcomeScreen}
        options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  );
};
