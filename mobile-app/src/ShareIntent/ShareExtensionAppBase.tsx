import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler, Platform } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShareMenuReactView } from 'react-native-share-menu';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { AnimatedLookUpScreen } from './AnimatedLookUpScreen';

const Stack = createStackNavigator();

export const ShareIntentAppBase = () => {
  return (
    <LanguagesContainer>
      <SafeAreaProvider>
        <NavigationContainer theme={useTheme()}>
          <Stack.Navigator>
            <Stack.Screen
              name="Vocably"
              component={AnimatedLookUpScreen}
              options={{
                headerShown: true,
                presentation: 'card',
                headerTitleAlign: 'center',
                headerTitle: () => (
                  <Text style={{ fontSize: 20 }}>Vocably</Text>
                ),
                headerRight: () => (
                  <Button
                    onPress={() =>
                      Platform.OS === 'ios'
                        ? ShareMenuReactView.dismissExtension()
                        : BackHandler.exitApp()
                    }
                  >
                    Done
                  </Button>
                ),
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
      </SafeAreaProvider>
    </LanguagesContainer>
  );
};
