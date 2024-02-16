import { useNavigation } from '@react-navigation/native';
import { FC, useCallback, useContext, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { LanguagesContext } from './languages/LanguagesContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

type WelcomeScreen = FC<{}>;

export const WelcomeScreen: WelcomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();
  const { refreshLanguages } = useContext(LanguagesContext);
  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshLanguages().then(() => {
      setRefreshing(false);
    });
  }, [refreshLanguages, setRefreshing]);
  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      contentContainerStyle={[
        styles.content,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={{ textAlign: 'center', marginBottom: 8 }}>
        Welcome to VocablyPro.
      </Text>
      <Text style={{ textAlign: 'center' }}>
        To get started, try to{' '}
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() => navigation.navigate('LookUp')}
        >
          look up
        </Text>{' '}
        an unfamiliar word and add it to your collection.
      </Text>
    </ScrollView>
  );
};
