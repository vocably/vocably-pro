import { configureApi } from '@vocably/api';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { NavigationContainer } from './NavigationContainer';
import { ThemeProvider } from './ThemeProvider';
// @ts-ignore
import { API_BASE_URL, API_CARDS_BUCKET, API_REGION } from '@env';
import { UserMetadataContainer } from './UserMetadataContainer';

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
          <UserMetadataContainer>
            <LanguagesContainer>
              <NavigationContainer />
            </LanguagesContainer>
          </UserMetadataContainer>
        </Login>
      </AuthContainer>
    </ThemeProvider>
  );
};

export default App;
