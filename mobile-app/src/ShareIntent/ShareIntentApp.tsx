import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PropsWithChildren } from 'react';
import { BackHandler, Pressable, View } from "react-native";
import {  useTheme } from 'react-native-paper';
import { AuthContainer } from '../auth/AuthContainer';
import { Login } from '../auth/Login';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { ThemeProvider } from '../ThemeProvider';
import { LookUpScreen } from '../LookUpScreen';

const Stack = createStackNavigator();

const Viewport = (props: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <>
    <Pressable
      onPress={() => BackHandler.exitApp()}
      style={{
        width: '100%',
        height: '34%',
      }}
    />
    <View
      style={{
        width: '100%',
        height: '66%',
        overflow: 'hidden',
        backgroundColor: theme.colors.background,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
      }}
    >
      {props.children}
    </View>
    </>
  );
};

const ShareIntentApp = () => {
  return (
    <ThemeProvider>
      <Viewport>
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
                      presentation: 'card'
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
      </Viewport>
    </ThemeProvider>
  );
};

export default ShareIntentApp;
