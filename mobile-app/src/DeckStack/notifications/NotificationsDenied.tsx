import { FC } from 'react';
import { Linking, Platform, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

type Props = {};

export const NotificationsDenied: FC<Props> = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        gap: 12,
      }}
    >
      {Platform.OS !== 'ios' && (
        <Text>
          Notifications can't be set through the app. Please enable them in the
          App Info settings.
        </Text>
      )}
      {Platform.OS === 'ios' && (
        <>
          <Text>
            Notifications can't be set through the app. Please enable them in
            Settings → Vocably.
          </Text>
          <Button mode="contained" onPress={() => Linking.openSettings()}>
            Open Settings
          </Button>
        </>
      )}
    </View>
  );
};
