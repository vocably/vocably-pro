import { API_BASE_URL, API_CARDS_BUCKET, API_REGION } from '@env';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { configureApi } from '@vocably/api';
import { FC, PropsWithChildren } from 'react';
import { useTheme } from 'react-native-paper';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { AuthContainer } from '../auth/AuthContainer';
import { Error } from '../Error';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { Loader } from '../loaders/Loader';
import { LookUpScreen } from '../LookUpScreen';
import { ThemeProvider } from '../ThemeProvider';
import { Login } from './LoginIos';
import { useSharedStorageSync } from './useSharedStorageSync';

configureApi({
  baseUrl: API_BASE_URL,
  region: API_REGION,
  cardsBucket: API_CARDS_BUCKET,
});

const Stack = createStackNavigator();

const StorageProvider = (props: PropsWithChildren) => {
  const sharedStorage = useSharedStorageSync();

  if (sharedStorage.status === 'error') {
    return (
      <Error onRetry={sharedStorage.sync}>Oops! Something went wrong.</Error>
    );
  } else if (sharedStorage.status === 'loading') {
    return <Loader>Synchronizing...</Loader>;
  } else {
    return props.children;
  }
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
    <StorageProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </StorageProvider>
  );
};

export default ShareIntentApp;
