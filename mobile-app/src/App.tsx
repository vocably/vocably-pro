import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { awsConfig } from './aws-config';
import { Hub } from 'aws-amplify';
import { UserData } from 'amazon-cognito-identity-js';

Auth.configure(awsConfig);

Hub.listen('auth', ({ payload: { event, data } }) => {
  console.log('Event', event, data);
});

interface User {
  email: string;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log('Verify user login');
    Auth.currentAuthenticatedUser()
      .then((user) => {
        user.getUserData((err?: Error, userData?: UserData) => {
          setUser({
            email: userData?.UserAttributes.find((ud) => ud.Name === 'email')
              ?.Value as string,
          });
        });
      })
      .catch((error) => {
        setUser(null);
      });
  }, []);

  const signin = useCallback(() => {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  }, []);

  const signout = useCallback(() => {
    Auth.signOut();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        ...backgroundStyle,
        flexGrow: 1,
      }}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Hello, {user?.email ?? 'please login.'}</Text>

          {user === null && (
            <Button title="Login with Google" onPress={signin} />
          )}
          {user !== null && <Button title="Sign out" onPress={signout} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
