import React, { FC, PropsWithChildren, useContext } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { ShareMenuReactView } from 'react-native-share-menu';
import { AuthContext } from '../auth/AuthContext';
import { Loader } from '../loaders/Loader';

export const IosLogin: FC<PropsWithChildren> = ({ children }) => {
  const authStatus = useContext(AuthContext);

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
      <Text
        variant="bodyLarge"
        style={{ marginBottom: 15, textAlign: 'center' }}
      >
        Open App to sign in and try the Vocably experience.
      </Text>
      <Button
        mode="contained"
        onPress={ShareMenuReactView.openApp}
        style={{ marginBottom: 20 }}
      >
        Open App
      </Button>
    </View>
  );
};
