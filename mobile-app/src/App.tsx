import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
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
    <PaperProvider>
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
              <Button icon="camera" mode="outlined" onPress={signOut}>
                Sign out
              </Button>
            </ScrollView>
          </Login>
        </SafeAreaView>
      </AuthContainer>
    </PaperProvider>
  );
};

export default App;
