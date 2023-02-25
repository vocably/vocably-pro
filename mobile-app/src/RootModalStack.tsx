import { createStackNavigator } from '@react-navigation/stack';
import { StudyScreen } from './study/StudyScreen';
import { DrawerNavigator } from './DrawerNavigator';

const Stack = createStackNavigator();

export const RootModalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Study" component={StudyScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
