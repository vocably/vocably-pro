import { createStackNavigator } from '@react-navigation/stack';
import { TabsNavigator } from './TabsNavigator';
import { StudyScreen } from './study/StudyScreen';

const Stack = createStackNavigator();

export const RootModalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
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
