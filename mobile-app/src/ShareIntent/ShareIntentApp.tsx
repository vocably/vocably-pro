import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FC, PropsWithChildren } from 'react';
import { BackHandler, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { FadeInUp, SlideInDown } from 'react-native-reanimated';
import { AuthContainer } from '../auth/AuthContainer';
import { Login } from '../auth/Login';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { LookUpScreen } from '../LookUpScreen';
import { ThemeProvider } from '../ThemeProvider';

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
      <Animated.View
        entering={SlideInDown}
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
      </Animated.View>
    </>
  );
};

const AnimatedLookUpScreen: FC<{
  navigation: NavigationProp<any>;
}> = ({ navigation }) => {
  return (
    <Animated.View
      entering={FadeInUp}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <LookUpScreen navigation={navigation} />
    </Animated.View>
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
          </Login>
        </AuthContainer>
      </Viewport>
    </ThemeProvider>
  );
};

export default ShareIntentApp;
