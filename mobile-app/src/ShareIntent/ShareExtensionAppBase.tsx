import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { AnimatedLookUpScreen } from './AnimatedLookUpScreen';

const Stack = createStackNavigator();

export const ShareIntentAppBase = () => {
  return (
    <LanguagesContainer>
      <NavigationContainer theme={useTheme()}>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={AnimatedLookUpScreen}
            options={{
              headerShown: false,
              presentation: 'card',
            }}
          />
          <Stack.Screen
            name="LanguageSelector"
            component={LanguageSelectorModal}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguagesContainer>
  );
};
