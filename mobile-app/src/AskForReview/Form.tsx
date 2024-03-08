import { useNavigation } from '@react-navigation/native';
import { RateInteractionPayload } from '@vocably/model';
import React, { FC } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text, useTheme } from 'react-native-paper';
import { mobileStoreName } from '../mobilePlatform';

const gradientHeight = 100;

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
  },

  scrollContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingBottom: gradientHeight - 30,
  },
  element: {
    marginTop: 12,
  },
  gradientPanel: {
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: gradientHeight,
    pointerEvents: 'none',
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
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, style]}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>You can help this project.</Text>
        </View>
        <View style={styles.element}>
          <Text>Vocably is 100% free and open-source.</Text>
        </View>
        <View style={styles.element}>
          <Text style={{ textAlign: 'center' }}>
            Your positive review on {mobileStoreName} would help other users to
            discover this project.
          </Text>
        </View>
        <View style={styles.element}>
          <Text style={{ textAlign: 'center' }}>
            If you are missing or don't like something, you can always{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('Feedback')}
            >
              let me know
            </Text>
            . I take every feedback seriously.
          </Text>
        </View>
        <View style={[styles.element, { alignSelf: 'stretch' }]}>
          <Button mode={'contained'} onPress={() => onAction('review')}>
            Rate on {mobileStoreName}
          </Button>
        </View>
        <View style={[styles.element, { alignSelf: 'stretch' }]}>
          <Button mode={'outlined'} onPress={() => onAction('later')}>
            Ask me later
          </Button>
        </View>
        <View style={styles.element}>
          <Button mode="text" onPress={() => onAction('never')}>
            Please don't ask me about this.
          </Button>
        </View>
      </ScrollView>
      <LinearGradient
        locations={[0.1, 1]}
        // @ts-ignore
        colors={[theme.colors.transparentSurface, theme.colors.surface]}
        style={[styles.gradientPanel]}
      ></LinearGradient>
    </View>
  );
};
