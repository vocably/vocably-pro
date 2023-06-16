import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from './DrawerNavigator';
import { LanguageSelectorModal } from './LanguageSelectorModal';
import { StudyScreen } from './study/StudyScreen';

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
          component={LanguageSelectorModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
