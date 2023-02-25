import { Provider as PaperProvider } from 'react-native-paper';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';
import { configureApi } from '@vocably/api';
import { NavigationContainer } from '@react-navigation/native';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { DeckContainer } from './DeckContainer';
import { RootModalStack } from './RootModalStack';

configureApi({
  baseUrl: 'https://api.dev.env.vocably.pro',
  region: 'eu-central-1',
  cardsBucket: 'vocably-dev-cards',
});

const App = () => {
  return (
    <PaperProvider>
      <AuthContainer>
        <Login>
          <LanguagesContainer>
            <DeckContainer>
              <NavigationContainer>
                <RootModalStack />
              </NavigationContainer>
            </DeckContainer>
          </LanguagesContainer>
        </Login>
      </AuthContainer>
    </PaperProvider>
  );
};

export default App;
