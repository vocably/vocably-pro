import { sample } from 'lodash-es';
import { usePostHog } from 'posthog-react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Streak } from '../Streak';
import { AppTheme } from '../ThemeProvider';
import { Displayer } from './Displayer';
import { PADDING_VERTICAL } from './StudyScreen';

const MOTIVATIONAL_QUOTE_COUNT = 28;

type Props = {
  onStudyAgain?: () => void;
  onDone?: () => void;
  streakHasBeenShown: boolean;
  streakDays: number;
  onShow: () => void;
  canStudyAgain: boolean;
};

export const Completed: FC<Props> = ({
  onStudyAgain = () => {},
  onDone = () => {},
  streakHasBeenShown,
  streakDays,
  onShow,
  canStudyAgain,
}) => {
  const theme = useTheme<AppTheme>();
  const { t } = useTranslation();
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    const quotes = Array.from({ length: MOTIVATIONAL_QUOTE_COUNT }).map(
      (_, i) => t(`study.motivationalQuotes.${i}`)
    );
    setMotivationalQuote(sample(quotes) as string);
  }, []);

  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture('study_completed');
    onShow();
  }, []);

  const quoteAppearance = useRef(new Animated.Value(0)).current;
  const actionsAppearance = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(150, [
      Animated.spring(quoteAppearance, {
        toValue: 1,
        delay: 700,
        useNativeDriver: true,
        friction: 7,
      }),
      Animated.spring(actionsAppearance, {
        toValue: 1,
        delay: 700,
        useNativeDriver: true,
        friction: 7,
      }),
    ]).start();
  }, []);

  const slideUp = (value: Animated.Value) => ({
    opacity: value,
    transform: [
      {
        translateY: value.interpolate({
          inputRange: [0, 1],
          outputRange: [24, 0],
        }),
      },
    ],
  });

  return (
    <Displayer style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          paddingBottom: PADDING_VERTICAL,
          minHeight: '100%',
          paddingTop: 48,
        }}
      >
        <Streak
          consecutiveDays={streakDays}
          hasBeenShown={streakHasBeenShown}
        ></Streak>
        {motivationalQuote.length > 0 && (
          <Animated.View
            style={[
              {
                marginHorizontal: 24,
                marginTop: 12,
                marginBottom: 8,
                paddingHorizontal: 24,
                paddingTop: 20,
                paddingBottom: 22,
                borderRadius: 20,
                backgroundColor: theme.colors.elevation.level1,
                borderWidth: 1,
                borderColor: theme.colors.inversePrimary,
                alignItems: 'center',
                gap: 8,
                maxWidth: 420,
              },
              slideUp(quoteAppearance),
            ]}
          >
            <Icon
              name="format-quote-open"
              size={28}
              color={theme.colors.primary}
            />
            <Text
              style={{
                color: theme.colors.onBackground,
                fontSize: 17,
                lineHeight: 24,
                fontStyle: 'italic',
                textAlign: 'center',
              }}
            >
              {motivationalQuote}
            </Text>
          </Animated.View>
        )}
        <Animated.View
          style={[{ alignItems: 'center', gap: 8 }, slideUp(actionsAppearance)]}
        >
          <Button
            testID="study-completed-done"
            onPress={onDone}
            mode="contained"
            icon="check"
            style={{ width: 260, borderRadius: 28 }}
            contentStyle={{ height: 52 }}
            labelStyle={{ fontSize: 17, fontWeight: '600' }}
          >
            {t('study.finish')}
          </Button>
          {canStudyAgain && (
            <Button
              testID="study-completed-study-again"
              onPress={onStudyAgain}
              icon="refresh"
              style={{ width: 260, borderRadius: 28 }}
              contentStyle={{ height: 48 }}
              labelStyle={{ fontSize: 16 }}
            >
              {t('study.takeOneMoreRound')}
            </Button>
          )}
        </Animated.View>
      </ScrollView>
      <LinearGradient
        locations={[0.1, 1]}
        // @ts-ignore
        colors={[theme.colors.transparentSurface, theme.colors.surface]}
        style={{
          position: 'absolute',
          display: 'flex',
          bottom: 0,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: PADDING_VERTICAL,
          pointerEvents: 'none',
        }}
      ></LinearGradient>
    </Displayer>
  );
};
