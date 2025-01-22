import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import React, { FC, ReactNode, useContext } from 'react';
import { Linking, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { Loader } from '../loaders/Loader';
import { urlOpenerOptions } from '../urlOpener';
import { AuthContext } from './AuthContext';

const signIn = () => Auth.federatedSignIn();

const signInWithAnIdioticCognitoFlow = async () => {
  urlOpenerOptions.ephemeralWebSession = true;
  await Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Google,
  });
};

export const Login: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const authStatus = useContext(AuthContext);
  const theme = useTheme();

  if (authStatus.status === 'undefined') {
    return <Loader>Authenticating...</Loader>;
  }

  if (authStatus.status === 'logged-in') {
    return <>{children}</>;
  }

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="bodyLarge" style={{ marginBottom: 15 }}>
        Sign in to try the Vocably experience.
      </Text>
      <Button mode="contained" onPress={signIn} style={{ marginBottom: 20 }}>
        Sign in or Create an account
      </Button>
      <Text style={{ marginHorizontal: 20, textAlign: 'center' }}>
        By signing in, you agree to our{' '}
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() =>
            Linking.openURL('https://vocably.pro/terms-and-conditions.html')
          }
        >
          Terms and Conditions
        </Text>{' '}
        and{' '}
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() =>
            Linking.openURL('https://vocably.pro/privacy-policy.html')
          }
        >
          Privacy Policy
        </Text>
        .
      </Text>
      <Text
        onPress={() => signInWithAnIdioticCognitoFlow()}
        style={{
          color: theme.colors.primary,
          marginTop: 12,
        }}
      >
        I want to sign in with another Google Account.
      </Text>
    </View>
  );
};
