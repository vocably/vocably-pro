import { CardItem } from '@vocably/model';
import React, { FC, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SideB } from '../SideB';
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

  const theme = useTheme();

  return (
    <Displayer>
      <TouchableWithoutFeedback
        onPress={() => (!!flipRotation ? flipToBack() : flipToFront())}
      >
        <View style={styles.container}>
          <Animated.View style={{ ...styles.cardFront, ...flipToBackStyle }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 32, color: theme.colors.secondary }}>
                {card.data.source}
              </Text>
              {card.data.partOfSpeech && (
                <Text style={{ marginLeft: 8 }}>{card.data.partOfSpeech}</Text>
              )}
            </View>
          </Animated.View>
          <Animated.View style={{ ...styles.cardBack, ...flipToFrontStyle }}>
            <SideB
              card={card.data}
              style={styles.list}
              textStyle={{ fontSize: 24 }}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Displayer>
  );
};
