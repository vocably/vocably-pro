import { configureApi } from '@vocably/api';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { NavigationContainer } from './NavigationContainer';
import { ThemeProvider } from './ThemeProvider';
// @ts-ignore
import { API_BASE_URL, API_CARDS_BUCKET, API_REGION } from '@env';
import * as Sentry from '@sentry/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PostHogProvider } from './PostHogProvider';
import { RootModalStack } from './RootModalStack';
import { TranslationPresetContainer } from './TranslationPreset/TranslationPresetContainer';
import { UserMetadataContainer } from './UserMetadataContainer';
import { WelcomeContainer } from './WelcomeContainer';

Sentry.init({
  dsn: 'https://88ec70cfa6b68493c79646625c208280@o1191770.ingest.us.sentry.io/4507980535758848',
});

configureApi({
  baseUrl: API_BASE_URL,
  region: API_REGION,
  cardsBucket: API_CARDS_BUCKET,
});

const App = () => {
  return (
    <ThemeProvider>
      <WelcomeContainer>
        <NavigationContainer>
          <PostHogProvider>
            <AuthContainer>
              <Login>
                <UserMetadataContainer>
                  <LanguagesContainer refreshLanguagesOnActive={true}>
                    <TranslationPresetContainer>
                      <SafeAreaProvider>
                        <RootModalStack />
                      </SafeAreaProvider>
                    </TranslationPresetContainer>
                  </LanguagesContainer>
                </UserMetadataContainer>
              </Login>
            </AuthContainer>
          </PostHogProvider>
        </NavigationContainer>
      </WelcomeContainer>
    </ThemeProvider>
  );
};

export default App;
