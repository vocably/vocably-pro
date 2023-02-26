import { FC, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type LookUpScreen = FC<{
  navigation: NavigationProp<any>;
}>;

export const LookUpScreen: LookUpScreen = ({ navigation }) => {
  const onSelect = useCallback((language: string) => {
    console.log('language', language);
  }, []);

  const selectSourceLanguage = useCallback(() => {
    navigation.navigate('LanguageSelector', {
      title: 'Source',
      selected: 'en',
      preferred: [],
      onSelect,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={selectSourceLanguage}>
        Select Language
      </Button>
    </View>
  );
};
