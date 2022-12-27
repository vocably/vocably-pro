import React, { FC, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text } from 'react-native-paper';
import { CardItem } from '@vocably/model';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFront: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    backfaceVisibility: 'hidden',
  },
});

export const Card: FC<{ card: CardItem }> = ({ card }) => {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  let flipRotation = 0;
  flipAnimation.addListener(({ value }) => (flipRotation = value));
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => (!!flipRotation ? flipToBack() : flipToFront())}
    >
      <View style={styles.container}>
        <Animated.View style={{ ...styles.cardFront, ...flipToBackStyle }}>
          <Text>{card.data.source}</Text>
        </Animated.View>
        <Animated.View style={{ ...styles.cardBack, ...flipToFrontStyle }}>
          <Text>{card.data.definition}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
