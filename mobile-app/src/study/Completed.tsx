import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, useTheme } from 'react-native-paper';
import { Displayer } from './Displayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Completed = FC<{
  onStudyAgain?: () => void;
}>;

export const Completed: Completed = ({ onStudyAgain = () => {} }) => {
  const theme = useTheme();
  return (
    <Displayer>
      <View style={styles.container}>
        <Icon
          name="check-circle"
          size={128}
          color={theme.colors.primary}
        ></Icon>
        <Text
          style={{ marginTop: 24, color: theme.colors.primary }}
          onPress={onStudyAgain}
        >
          Take one more round
        </Text>
      </View>
    </Displayer>
  );
};
