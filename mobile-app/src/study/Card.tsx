import { CardItem } from '@vocably/model';
import React, { FC, useCallback, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { CardBack } from './Card/CardBack';
import { CardFront } from './Card/CardFront';
import { ReverseCardBack } from './Card/ReverseCardBack';
import { ReverseCardFront } from './Card/ReverseCardFront';
import { Displayer } from './Displayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  list: {
    flex: 1,
    justifyContent: 'center',
  },
  cardFront: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBack: {
    backfaceVisibility: 'hidden',
  },
});

type Props = {
  autoPlay: boolean;
  card: CardItem;
};

export const Card: FC<Props> = ({ card, autoPlay }) => {
  const flipAnimation = useRef(new Animated.Value(0)).current;
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

  const [isFlipped, setIsFlipped] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const flipToBack = useCallback(() => {
    setIsFlipped(true);
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [Animated, flipAnimation, setIsFlipped]);

  const flipToFront = useCallback(() => {
    setIsFlipped(false);
    setHasChecked(true);
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [Animated, flipAnimation, setIsFlipped, setHasChecked]);

  const isReverse = card.data.reverse;

  return (
    <Displayer style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => (isFlipped ? flipToFront() : flipToBack())}
      >
        <View style={styles.container}>
          <Animated.View
            style={{
              ...styles.cardBack,
              ...flipToFrontStyle,
              display: 'flex',
            }}
            pointerEvents={!isFlipped ? 'none' : 'auto'}
          >
            {isReverse ? (
              <ReverseCardBack autoPlay={autoPlay && isFlipped} card={card} />
            ) : (
              <CardBack card={card} />
            )}
          </Animated.View>
          <Animated.View
            style={{ ...styles.cardFront, ...flipToBackStyle }}
            pointerEvents={isFlipped ? 'none' : 'auto'}
          >
            {isReverse ? (
              <ReverseCardFront card={card} hasChecked={hasChecked} />
            ) : (
              <CardFront autoPlay={autoPlay && !isFlipped} card={card} />
            )}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Displayer>
  );
};
