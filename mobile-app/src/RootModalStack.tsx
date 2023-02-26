import { createStackNavigator } from '@react-navigation/stack';
import { StudyScreen } from './study/StudyScreen';
import { DrawerNavigator } from './DrawerNavigator';
import { LanguageSelectorScreen } from './LanguageSelectorScreen';

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
        <Stack.Screen
          name="LanguageSelector"
          component={LanguageSelectorScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
