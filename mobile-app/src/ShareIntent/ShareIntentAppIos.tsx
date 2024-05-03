import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { AuthContainer } from '../auth/AuthContainer';
import { Login } from '../auth/Login';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { LookUpScreen } from '../LookUpScreen';
import { ThemeProvider } from '../ThemeProvider';

const Stack = createStackNavigator();

const ShareIntentApp = () => {
  console.log("Share component launched!")
  return (
    <ThemeProvider>
        <AuthContainer>
          <Login>
            <LanguagesContainer>
              <NavigationContainer theme={useTheme()}>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Main"
                    component={LookUpScreen}
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
          </Login>
        </AuthContainer>
    </ThemeProvider>
  );
};

export default ShareIntentApp;
