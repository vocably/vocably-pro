import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { AuthContainer } from '../auth/AuthContainer';
import { Login } from '../auth/Login';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { LookUpScreen } from '../LookUpScreen';
import { ThemeProvider } from '../ThemeProvider';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { configureApi } from '@vocably/api';
import { API_BASE_URL, API_CARDS_BUCKET, API_REGION } from '@env';

configureApi({
  baseUrl: API_BASE_URL,
  region: API_REGION,
  cardsBucket: API_CARDS_BUCKET,
});

const Stack = createStackNavigator();

const ShareIntentApp = () => {
  useEffect(() => {
    SharedGroupPreferences
      .getItem("store", "group.pro.vocably.app")
      .then((store) => JSON.parse(store))
      .then((store) => AsyncStorage.multiSet(store));
  },[])

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
