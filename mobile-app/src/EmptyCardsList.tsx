import { ReactNode, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type EmptyCardsList = FC<{
  children?: ReactNode;
}>;

export const EmptyCardsList: EmptyCardsList = ({ children }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Icon name="cards-outline" color={theme.colors.secondary} size={80} />
      {children}
    </View>
  );
};