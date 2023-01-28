import { FC, useCallback, useContext, useState } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
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
  },
});

type WelcomeScreen = FC<{}>;

export const WelcomeScreen: WelcomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();
  const { refreshLanguages, selectedLanguage } = useContext(LanguagesContext);

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
      <Text>Welcome to Vocably {selectedLanguage}</Text>
    </ScrollView>
  );
};
