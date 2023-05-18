import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';
import { configureApi } from '@vocably/api';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { DeckContainer } from './DeckContainer';
import { NavigationContainer } from './NavigationContainer';
import { ThemeProvider } from './ThemeProvider';
// @ts-ignore
import { API_BASE_URL, API_REGION, API_CARDS_BUCKET } from '@env';

configureApi({
  baseUrl: API_BASE_URL,
  region: API_REGION,
  cardsBucket: API_CARDS_BUCKET,
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
