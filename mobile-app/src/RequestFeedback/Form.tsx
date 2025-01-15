import { useNavigation } from '@react-navigation/native';
import { RateInteractionPayload } from '@vocably/model';
import React, { FC } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text, useTheme } from 'react-native-paper';
import { mobileStoreName } from '../mobilePlatform';

const windowDimensions = Dimensions.get('window');

const gradientHeight = 100;

const styles = StyleSheet.create({
  container: {
    maxHeight: Math.min(380, 300 + (windowDimensions.height - 667)),
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

export type Props = {
  style?: StyleProp<ViewStyle>;
  onAction?: (choice: RateInteractionPayload) => void;
};

export const RequestFeedbackForm: FC<Props> = ({
  style,
  onAction = () => {},
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <ScrollView
        contentContainerStyle={[
          {
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: gradientHeight - 30,
            gap: 16,
          },
          style,
        ]}
      >
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            It will take less than a minute.
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>
            Do you find Vocably useful? Your rating on {mobileStoreName} will
            make a big difference.
          </Text>
        </View>
        <View style={{ alignSelf: 'stretch' }}>
          <Button mode={'contained'} onPress={() => onAction('review')}>
            Rate on {mobileStoreName}
          </Button>
        </View>
        <View style={{ alignSelf: 'stretch' }}>
          <Button mode={'outlined'} onPress={() => onAction('later')}>
            Ask me later
          </Button>
        </View>
        <View>
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
        <View>
          <Button
            mode="text"
            textColor={theme.colors.onSurface}
            onPress={() => onAction('never')}
          >
            Don't show this message again
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
