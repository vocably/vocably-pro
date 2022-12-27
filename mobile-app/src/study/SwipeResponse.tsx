import React, { FC, ReactNode, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
  },
});

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const SwipeResponse: FC<{
  onResponse?: (scores: number) => void;
  children: ReactNode;
}> = ({ onResponse, children }) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const pan = useRef(new Animated.ValueXY()).current;
  const movementRef = useRef<null | 'horizontal' | 'vertical'>(null);
  const weakVisibility = useRef(new Animated.Value(0)).current;
  const mediumVisibility = useRef(new Animated.Value(0)).current;
  const strongVisibility = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
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

          if (gestureState.dy > 0) {
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
    <>
      <View style={styles.container}>
        <AnimatedIcon
          style={[
            styles.icon,
            {
              opacity: strongVisibility,
              transform: [{ scale: strongVisibility }],
            },
          ]}
          name="check-all"
          size={100}
        ></AnimatedIcon>
        <AnimatedIcon
          style={[
            styles.icon,
            {
              opacity: mediumVisibility,
              transform: [{ scale: mediumVisibility }],
            },
          ]}
          name="check"
          size={100}
        ></AnimatedIcon>
        <AnimatedIcon
          style={[
            styles.icon,
            {
              opacity: weakVisibility,
              transform: [{ scale: weakVisibility }],
            },
          ]}
          name="close"
          size={100}
        ></AnimatedIcon>
        <Animated.View
          style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
          {...panResponder.panHandlers}
        >
          {children}
        </Animated.View>
      </View>
    </>
  );
};
