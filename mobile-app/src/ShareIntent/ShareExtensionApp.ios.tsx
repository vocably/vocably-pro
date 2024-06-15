import { AuthContainer } from '../auth/AuthContainer';
import { ThemeProvider } from '../ThemeProvider';
import { Login } from './IosShareExtensionLogin';
import { ShareIntentAppBase } from './ShareExtensionAppBase';

const ShareIntentApp = () => {
  return (
    <ThemeProvider>
      <AuthContainer>
        <Login>
          <ShareIntentAppBase />
        </Login>
      </AuthContainer>
    </ThemeProvider>
  );
};

export default ShareIntentApp;
