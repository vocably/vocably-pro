import React, { FC, useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { CardItem } from '@vocably/model';
import { explode } from '@vocably/sulna';
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

  const [sideB, setSideB] = useState<
    { text: string; style: StyleProp<ViewStyle> }[]
  >([]);
  const theme = useTheme();

  useEffect(() => {
    setSideB(
      explode(card.data.definition)
        .map((text) => ({
          text,
          style: {},
        }))
        .concat({
          text: card.data.translation,
          style: {
            fontStyle: 'italic',
            color: theme.colors.secondary,
          },
        })
    );
  }, [card]);

  return (
    <Displayer>
      <TouchableWithoutFeedback
        onPress={() => (!!flipRotation ? flipToBack() : flipToFront())}
      >
        <View style={styles.container}>
          <Animated.View style={{ ...styles.cardFront, ...flipToBackStyle }}>
            <Text>{card.data.source}</Text>
          </Animated.View>
          <Animated.View style={{ ...styles.cardBack, ...flipToFrontStyle }}>
            <FlatList
              contentContainerStyle={styles.list}
              data={sideB}
              renderItem={(item) => (
                <Text
                  style={item.item.style}
                >{`\u2022 ${item.item.text}`}</Text>
              )}
            ></FlatList>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Displayer>
  );
};
