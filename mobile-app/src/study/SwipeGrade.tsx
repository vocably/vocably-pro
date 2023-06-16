import { SrsScore } from '@vocably/srs';
import React, { FC, ReactNode, useRef } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
  },
});

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const iconSize = 80;

export const SwipeGrade: FC<{
  onGrade: (score: SrsScore) => void;
  children: ReactNode;
}> = ({ onGrade, children }) => {
  const theme = useTheme();

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const pan = useRef(new Animated.ValueXY()).current;
  const movementRef = useRef<null | 'horizontal' | 'vertical'>(null);
  const weakVisibility = useRef(new Animated.Value(0)).current;
  const mediumVisibility = useRef(new Animated.Value(0)).current;
  const strongVisibility = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) >= 5 || Math.abs(gestureState.dy) >= 5;
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          // @ts-ignore
          x: pan.x._value,
          // @ts-ignore
          y: pan.y._value,
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        if (movementRef.current === null) {
          if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
            movementRef.current = 'horizontal';
          }

          if (gestureState.dy > 5) {
            movementRef.current = 'vertical';
          }
        }

        if (movementRef.current === null) {
          return;
        }

        if (movementRef.current === 'horizontal') {
          if (gestureState.dx > 0) {
            strongVisibility.setValue(
              Math.min(1, gestureState.dx / (windowWidth / 4))
            );
            weakVisibility.setValue(0);
          } else {
            weakVisibility.setValue(
              Math.min(1, Math.abs(gestureState.dx) / (windowWidth / 4))
            );
            strongVisibility.setValue(0);
          }

          pan.setValue({
            x: gestureState.dx,
            y: 0,
          });
        } else if (movementRef.current === 'vertical' && gestureState.dy > 0) {
          mediumVisibility.setValue(
            Math.min(1, gestureState.dy / (windowHeight / 5))
          );

          pan.setValue({
            x: 0,
            y: gestureState.dy,
          });
        }
      },
      onPanResponderRelease: () => {
        if ((weakVisibility as any)._value === 1) {
          onGrade(0);
          return;
        }

        if ((mediumVisibility as any)._value === 1) {
          onGrade(3);
          return;
        }

        if ((strongVisibility as any)._value === 1) {
          onGrade(5);
          return;
        }

        pan.setValue({
          x: 0,
          y: 0,
        });

        weakVisibility.setValue(0);
        mediumVisibility.setValue(0);
        strongVisibility.setValue(0);
        movementRef.current = null;
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <AnimatedIcon
        style={[
          styles.icon,
          {
            color: theme.colors.primary,
          },
          {
            opacity: strongVisibility,
            transform: [{ scale: strongVisibility }],
          },
        ]}
        name="check-all"
        size={iconSize}
      ></AnimatedIcon>
      <AnimatedIcon
        style={[
          styles.icon,
          {
            color: theme.colors.primary,
          },
          {
            opacity: mediumVisibility,
            transform: [{ scale: mediumVisibility }],
          },
        ]}
        name="check"
        size={iconSize}
      ></AnimatedIcon>
      <AnimatedIcon
        style={[
          styles.icon,
          {
            color: theme.colors.error,
          },
          {
            opacity: weakVisibility,
            transform: [{ scale: weakVisibility }],
          },
        ]}
        name="close"
        size={iconSize}
      ></AnimatedIcon>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
        ]}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </View>
  );
};
