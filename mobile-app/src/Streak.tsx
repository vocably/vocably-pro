import { FC, useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { getCountry } from 'react-native-localize';
import LinearGradient from 'react-native-linear-gradient';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { getStreakDays, StreakDay } from '@vocably/sulna';
import { AppTheme } from './ThemeProvider';

type Props = {
  consecutiveDays: number;
  hasBeenShown: boolean;
};

const BADGE_SIZE = 148;
const FLAME_COLOR = 'rgb(255, 149, 0)';
const FLAME_COLOR_DARK = 'rgb(255, 94, 58)';
const PARTICLE_COUNT = 14;

const isLastChecked = (index: number, days: StreakDay[]): boolean => {
  const next = days.at(index + 1);
  return days[index].checked && (!next || !next.checked);
};

export const Streak: FC<Props> = ({ consecutiveDays, hasBeenShown }) => {
  const theme = useTheme<AppTheme>();
  const { t } = useTranslation();

  const days = getStreakDays(consecutiveDays, new Date(), getCountry());
  const dayScale = useRef(new Animated.Value(1)).current;

  const previousNumberOpacity = useRef(
    new Animated.Value(hasBeenShown ? 0 : 1)
  ).current;
  const currentNumberOpacity = useRef(
    new Animated.Value(hasBeenShown ? 1 : 0)
  ).current;
  const previousNumberTranslateY = useRef(
    new Animated.Value(hasBeenShown ? 1 : 0)
  ).current;
  const currentNUmberTranslateY = useRef(
    new Animated.Value(hasBeenShown ? 0 : 100)
  ).current;

  const badgeScale = useRef(new Animated.Value(0.6)).current;
  const capScale = useRef(new Animated.Value(0)).current;
  const ripple = useRef(new Animated.Value(0)).current;
  const burst = useRef(new Animated.Value(0)).current;
  const daysAppearance = useRef(
    Array.from({ length: 7 }).map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    Animated.spring(badgeScale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
      tension: 80,
    }).start();

    Animated.sequence([
      Animated.delay(450),
      Animated.spring(capScale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4,
        tension: 120,
      }),
    ]).start();

    Animated.sequence([
      Animated.delay(250),
      Animated.timing(burst, {
        toValue: 1,
        duration: 1100,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    const rippleLoop = Animated.loop(
      Animated.timing(ripple, {
        toValue: 1,
        duration: 2400,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      })
    );
    rippleLoop.start();

    Animated.stagger(
      60,
      daysAppearance.map((value) =>
        Animated.spring(value, {
          toValue: 1,
          useNativeDriver: true,
          friction: 6,
        })
      )
    ).start(() => {
      Animated.sequence([
        Animated.spring(dayScale, {
          toValue: 1.2,
          useNativeDriver: true,
          friction: 6,
        }),
        Animated.spring(dayScale, {
          toValue: 1,
          useNativeDriver: true,
          friction: 1,
        }),
      ]).start();
    });

    const duration = 1000;

    Animated.parallel([
      Animated.timing(previousNumberTranslateY, {
        useNativeDriver: true,
        toValue: -100,
        duration,
      }),
      Animated.timing(currentNUmberTranslateY, {
        useNativeDriver: true,
        toValue: 0,
        duration,
      }),
      Animated.timing(previousNumberOpacity, {
        useNativeDriver: true,
        toValue: 0,
        duration,
      }),
      Animated.timing(currentNumberOpacity, {
        useNativeDriver: true,
        toValue: 1,
        duration,
      }),
    ]).start();

    return () => rippleLoop.stop();
  }, []);

  const particleColors = [
    theme.colors.primary,
    FLAME_COLOR,
    theme.colors.primaryVariant,
    FLAME_COLOR_DARK,
  ];

  const numberStyle = {
    fontSize: 64,
    lineHeight: 76,
    fontWeight: '700' as const,
    color: theme.colors.onPrimary,
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: BADGE_SIZE * 1.9,
          height: BADGE_SIZE * 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
          const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
          const distance = BADGE_SIZE * (0.62 + (i % 3) * 0.12);
          const size = 6 + (i % 3) * 2;
          return (
            <Animated.View
              key={i}
              pointerEvents="none"
              style={{
                position: 'absolute',
                width: size,
                height: i % 2 === 0 ? size : size * 2,
                borderRadius: size / 2,
                backgroundColor: particleColors[i % particleColors.length],
                opacity: burst.interpolate({
                  inputRange: [0, 0.15, 0.7, 1],
                  outputRange: [0, 1, 0.8, 0],
                }),
                transform: [
                  {
                    translateX: burst.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, Math.cos(angle) * distance],
                    }),
                  },
                  {
                    translateY: burst.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, Math.sin(angle) * distance * 0.85],
                    }),
                  },
                  { rotate: `${(i * 47) % 360}deg` },
                ],
              }}
            />
          );
        })}

        <Animated.View
          pointerEvents="none"
          style={{
            position: 'absolute',
            width: BADGE_SIZE,
            height: BADGE_SIZE,
            borderRadius: BADGE_SIZE / 2,
            borderWidth: 2,
            borderColor: theme.colors.primary,
            opacity: ripple.interpolate({
              inputRange: [0, 1],
              outputRange: [0.45, 0],
            }),
            transform: [
              {
                scale: ripple.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.35],
                }),
              },
            ],
          }}
        />
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            width: BADGE_SIZE + 24,
            height: BADGE_SIZE + 24,
            borderRadius: (BADGE_SIZE + 24) / 2,
            backgroundColor: theme.colors.inversePrimary,
          }}
        />

        <Animated.View
          style={{
            transform: [{ scale: badgeScale }],
            shadowColor: theme.colors.primary,
            shadowOpacity: 0.35,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: 8 },
            elevation: 10,
            borderRadius: BADGE_SIZE / 2,
          }}
        >
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.primaryVariant]}
            start={{ x: 0.15, y: 0 }}
            end={{ x: 0.85, y: 1 }}
            style={{
              width: BADGE_SIZE,
              height: BADGE_SIZE,
              borderRadius: BADGE_SIZE / 2,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Animated.View
              style={{
                position: 'absolute',
                opacity: previousNumberOpacity,
                transform: [{ translateY: previousNumberTranslateY }],
              }}
            >
              <Text style={numberStyle}>
                {/* This is a monkey-patch to prevent -1. I don't know how to fix it the right way */}
                {consecutiveDays > 0 ? consecutiveDays - 1 : consecutiveDays}
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: currentNumberOpacity,
                transform: [{ translateY: currentNUmberTranslateY }],
              }}
            >
              <Text style={numberStyle}>
                {/* This is a monkey-patch to prevent -1. I don't know how to fix it the right way */}
                {consecutiveDays === 0 ? 1 : consecutiveDays}
              </Text>
            </Animated.View>
          </LinearGradient>

          <Animated.View
            style={{
              position: 'absolute',
              right: 2,
              bottom: 2,
              transform: [{ scale: capScale }],
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 3,
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.aboveElevation,
              }}
            >
              <Icon
                name="rocket-launch"
                size={26}
                color={theme.colors.primary}
              />
            </View>
          </Animated.View>
        </Animated.View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            color: theme.colors.secondary,
          }}
        >
          {t('streak.consecutiveDays', {
            count: consecutiveDays === 0 ? 1 : consecutiveDays,
          })}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
          paddingHorizontal: 14,
          paddingVertical: 12,
          borderRadius: 20,
          backgroundColor: theme.colors.elevation.level2,
        }}
      >
        {days.map((streakDay, index) => {
          const last = isLastChecked(index, days);
          const appearance = daysAppearance[index] ?? daysAppearance[0];
          return (
            <Animated.View
              key={streakDay.day}
              style={{
                alignItems: 'center',
                gap: 6,
                opacity: appearance,
                transform: [
                  {
                    translateY: appearance.interpolate({
                      inputRange: [0, 1],
                      outputRange: [12, 0],
                    }),
                  },
                ],
              }}
            >
              <Animated.View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  transform: last ? [{ scale: dayScale }] : [],
                }}
              >
                {streakDay.checked && last && (
                  <LinearGradient
                    colors={[theme.colors.primary, theme.colors.primaryVariant]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      flex: 1,
                      borderRadius: 16,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon
                      name="rocket-launch"
                      size={18}
                      color={theme.colors.onPrimary}
                    />
                  </LinearGradient>
                )}
                {streakDay.checked && !last && (
                  <View
                    style={{
                      flex: 1,
                      borderRadius: 16,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: theme.colors.inversePrimary,
                    }}
                  >
                    <Icon
                      name="check-bold"
                      size={16}
                      color={theme.colors.primary}
                    />
                  </View>
                )}
                {!streakDay.checked && (
                  <View
                    style={{
                      flex: 1,
                      borderRadius: 16,
                      borderWidth: 2,
                      borderColor: theme.colors.tertiary,
                      borderStyle: 'dashed',
                    }}
                  />
                )}
              </Animated.View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: last ? '700' : '500',
                  color: last
                    ? theme.colors.secondary
                    : theme.colors.onBackground,
                }}
              >
                {t(`streak.days.${streakDay.day}`)}
              </Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};
