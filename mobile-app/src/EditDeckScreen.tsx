import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DeleteDeckButton } from './DeleteDeckButton';

type EditDeckScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const EditDeckScreen: EditDeckScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        gap: 16,
      }}
    >
      <DeleteDeckButton />

      <Divider style={{ alignSelf: 'stretch' }} />

      <Text>Are you looking for a specific feature?</Text>
      <Button mode="outlined" onPress={() => navigation.navigate('Feedback')}>
        Yes, provide feedback
      </Button>
    </View>
  );
};
