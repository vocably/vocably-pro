import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { BackHandler, Platform } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShareMenuReactView } from 'react-native-share-menu';
import { AuthContainer } from '../auth/AuthContainer';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { NavigationContainer } from '../NavigationContainer';
import { PostHogProvider } from '../PostHogProvider';
import { ThemeProvider } from '../ThemeProvider';
import { TranslationPresetContainer } from '../TranslationPreset/TranslationPresetContainer';
import { AnimatedLookUpScreen } from './AnimatedLookUpScreen';
import { Login } from './Login';
import { Viewport } from './Viewport';

const Stack = createStackNavigator();

type Props = {
  os: 'ios' | 'android';
};

export const ShareIntentAppBase: FC<Props> = ({ os }) => {
  return (
    <ThemeProvider>
      <Viewport os={os}>
        <NavigationContainer>
          <PostHogProvider>
            <AuthContainer>
              <Login os={os}>
                <LanguagesContainer>
                  <TranslationPresetContainer>
                    <SafeAreaProvider>
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
                    </SafeAreaProvider>
                  </TranslationPresetContainer>
                </LanguagesContainer>
              </Login>
            </AuthContainer>
          </PostHogProvider>
        </NavigationContainer>
      </Viewport>
    </ThemeProvider>
  );
};
