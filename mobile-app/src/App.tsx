import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';
import { configureApi } from '@vocably/api';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { DeckContainer } from './DeckContainer';
import { NavigationContainer } from './NavigationContainer';
import { ThemeProvider } from './ThemeProvider';

configureApi({
  baseUrl: 'https://api.dev.env.vocably.pro',
  region: 'eu-central-1',
  cardsBucket: 'vocably-dev-cards',
});

const App = () => {
  return (
    <ThemeProvider>
      <AuthContainer>
        <Login>
          <LanguagesContainer>
            <DeckContainer>
              <NavigationContainer />
            </DeckContainer>
          </LanguagesContainer>
        </Login>
      </AuthContainer>
    </ThemeProvider>
  );
};

export default App;
