import {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { BackHandler, Button, Linking, Text, View } from 'react-native';
import ShareMenu, { ShareData } from 'react-native-share-menu';
import { AuthContainer } from './auth/AuthContainer';
import { AuthContext } from './auth/AuthContext';
import { Loader } from './loaders/Loader';

const MAIN_APP_URL_SCHEME = 'vocably-pro://';

const openAnotherApp = () => {

  Linking.canOpenURL(MAIN_APP_URL_SCHEME)
    .then((supported) => {
      if (supported) {
        Linking.openURL(MAIN_APP_URL_SCHEME);
      } else {
        console.log(`Can't handle url: ${MAIN_APP_URL_SCHEME}`);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};

export const useShare = () => {
  const [sharedText, setSharedText] = useState<string>('');

  const handleShare = useCallback((data?: ShareData) => {
    if (data) {
      if (Array.isArray(data.data)) {
        setSharedText(data.data.join(', '));
      } else {
        setSharedText(data.data);
      }
    }
  }, []);

  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, []);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, []);
  return sharedText;
};

export const Login: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const authStatus = useContext(AuthContext);

  if (authStatus.status === 'undefined') {
    return <Loader>Authenticating...</Loader>;
  }

  if (authStatus.status === 'logged-in') {
    return <>{children}</>;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'gray',
          padding: 24,
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 24 }}>You are not logged in</Text>
        <Button title="Login" onPress={openAnotherApp} />
      </View>
    </View>
  );
};

const Share = () => {
  const sharedText = useShare();
  return (
    <AuthContainer>
      <Login>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'gray',
              padding: 24,
              borderRadius: 16,
            }}
          >
            <Text style={{ fontSize: 32 }}>{sharedText}</Text>
            <Button title="Done" onPress={() => BackHandler.exitApp()} />
          </View>
        </View>
      </Login>
    </AuthContainer>
  );
};

export default Share;
