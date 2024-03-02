import { RateInteractionPayload } from '@vocably/model';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  element: {
    marginTop: 12,
  },
});

export type AskForReviewForm = FC<{
  style?: StyleProp<ViewStyle>;
  onAction?: (choice: RateInteractionPayload) => void;
}>;

export const AskForReviewForm: AskForReviewForm = ({
  style,
  onAction = () => {},
}) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={{ fontWeight: 'bold' }}>
          You can help other language learners.
        </Text>
      </View>
      <View style={styles.element}>
        <Text>Vocably is 100% free and open-source.</Text>
      </View>
      <View style={styles.element}>
        <Text style={{ textAlign: 'center' }}>
          Your positive review on App Store would help other users to discover
          this project.
        </Text>
      </View>
      <View style={[styles.element, { alignSelf: 'stretch' }]}>
        <Button mode={'contained'} onPress={() => onAction('rate')}>
          Rate on App Store
        </Button>
      </View>
      <View style={[styles.element, { alignSelf: 'stretch' }]}>
        <Button mode={'outlined'} onPress={() => onAction('later')}>
          Ask me later
        </Button>
      </View>
      <View>
        <Text
          style={[
            styles.element,
            { color: theme.colors.primary, textAlign: 'center' },
          ]}
          onPress={() => {
            onAction('never');
          }}
        >
          Please don't ask me about this.
        </Text>
      </View>
    </View>
  );
};
