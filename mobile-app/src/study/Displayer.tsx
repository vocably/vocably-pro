import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
});

type Displayer = FC<{
  children: ReactNode;
}>;

export const Displayer: Displayer = ({ children }) => {
  const scaleAnimation = useRef(new Animated.Value(0.5)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        opacity: opacityAnimation,
        transform: [{ scale: scaleAnimation }],
        width: '100%',
        flex: 1,
      }}
    >
      {children}
    </Animated.View>
  );
};
