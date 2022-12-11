import React, { FC, ReactNode, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Text, View, Button } from 'react-native';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const signIn = () =>
  Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });

export const Login: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const authStatus = useContext(AuthContext);

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
      <Text>Please sign in</Text>
      <Button title="Login with Google" onPress={signIn} />
    </View>
  );
};
