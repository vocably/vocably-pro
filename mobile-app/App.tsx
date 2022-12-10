import React, {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { awsConfig } from './aws-config';
import { Hub } from 'aws-amplify';
import { UserData } from 'amazon-cognito-identity-js';

Auth.configure(awsConfig);

Hub.listen('auth', ({ payload: { event, data } }) => {
  console.log('Event', event, data);
});

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="Auth">
            <Text>Hello, {user?.email ?? 'please login.'}</Text>

            {user === null && (
              <Button title="Login with Google" onPress={signin} />
            )}
            {user !== null && <Button title="Sign out" onPress={signout} />}
          </Section>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
