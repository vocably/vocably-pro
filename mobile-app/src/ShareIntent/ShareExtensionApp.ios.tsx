import { AuthContainer } from '../auth/AuthContainer';
import { ThemeProvider } from '../ThemeProvider';
import { Login } from './IosShareExtensionLogin';
import { SharedStorageProvider } from './SharedStorageProvider';
import { ShareIntentAppBase } from './ShareExtensionAppBase';

const ShareIntentApp = () => {
  return (
    <SharedStorageProvider>
      <ThemeProvider>
        <AuthContainer>
          <Login>
            <ShareIntentAppBase />
          </Login>
        </AuthContainer>
      </ThemeProvider>
    </SharedStorageProvider>
  );
};

export default ShareIntentApp;
