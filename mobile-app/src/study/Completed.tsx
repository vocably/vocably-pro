import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RequestFeedback } from '../RequestFeedback.tsx';
import { Displayer } from './Displayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Completed = FC<{
  numberOfRepetitions?: number;
  onStudyAgain?: () => void;
}>;

export const Completed: Completed = ({
  onStudyAgain = () => {},
  numberOfRepetitions,
}) => {
  const theme = useTheme();
  return (
    <Displayer>
      <View style={styles.container}>
        <Icon
          name="check-circle"
          size={128}
          color={theme.colors.primary}
        ></Icon>
        <Button style={{ marginTop: 24 }} onPress={onStudyAgain}>
          Take one more round
        </Button>
        <RequestFeedback numberOfRepetitions={numberOfRepetitions} />
      </View>
    </Displayer>
  );
};
