import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContainer } from './auth/AuthContainer';
import { Auth } from '@aws-amplify/auth';
import { Login } from './auth/Login';
import { Study } from './study/Study';

import { configureApi } from '@vocably/api';

configureApi({
  baseUrl: 'https://api.dev.env.vocably.pro',
  region: 'eu-central-1',
  cardsBucket: 'vocably-dev-cards',
});

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
            <Study />
            {/*<ScrollView*/}
            {/*  contentInsetAdjustmentBehavior="automatic"*/}
            {/*  contentContainerStyle={{*/}
            {/*    flexGrow: 1,*/}
            {/*    justifyContent: 'center',*/}
            {/*    alignItems: 'center',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Text>Sign out</Text>*/}
            {/*  <Button icon="camera" mode="outlined" onPress={signOut}>*/}
            {/*    Sign out*/}
            {/*  </Button>*/}
            {/*</ScrollView>*/}
          </Login>
        </SafeAreaView>
      </AuthContainer>
    </PaperProvider>
  );
};

export default App;
