import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  Button,
  Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContainer } from './auth/AuthContainer';
import { Auth } from '@aws-amplify/auth';
import { Login } from './auth/Login';

const signOut = () => Auth.signOut();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AuthContainer>
      <SafeAreaView
        style={{
          ...backgroundStyle,
          flexGrow: 1,
        }}
      >
        <Login>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Sign out</Text>
            <Button title="Sign out" onPress={signOut} />
          </ScrollView>
        </Login>
      </SafeAreaView>
    </AuthContainer>
  );
};

export default App;
