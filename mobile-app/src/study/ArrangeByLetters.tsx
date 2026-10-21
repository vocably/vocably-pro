import { CardItem, DeckSettings, isGoogleTTSLanguage } from '@vocably/model';
import { SrsScore } from '@vocably/srs';
import { shuffle } from 'lodash-es';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  Easing,
  PixelRatio,
  Pressable,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { ReverseCardFront, ReverseCardFrontRef } from './Card/ReverseCardFront';
import { Displayer, DisplayerRef } from './Displayer';
import { PlaySound, PlaySoundRef } from '../PlaySound';
import { isRtlText } from '../isRtlText';
import { useAppTheme } from '../ThemeProvider';

const MAX_TILE_SIZE = 40;
const MIN_TILE_SIZE = 28;
const TILE_GAP = 8;
const SMALL_TILE_GAP = 6;

// Picks the largest tile that fits the word into the fewest rows, so long
// words shrink a bit before wrapping instead of turning into a tall grid.
const getTileLayout = (letterCount: number, availableWidth: number) => {
  const maxSize = MAX_TILE_SIZE * Math.max(1, PixelRatio.getFontScale());

  for (let rows = 1; rows <= letterCount; rows++) {
    const perRow = Math.ceil(letterCount / rows);
    const gap = perRow > 8 ? SMALL_TILE_GAP : TILE_GAP;
    const size = Math.floor((availableWidth - gap * (perRow - 1)) / perRow);

    if (size >= MIN_TILE_SIZE) {
      return { size: Math.min(size, maxSize), gap };
    }
  }

  return { size: MIN_TILE_SIZE, gap: SMALL_TILE_GAP };
};

type LetterTileProps = {
  letter: string | false;
  size: number;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  color: string;
  popOnChange?: boolean;
  testID?: string;
};

const LetterTile: FC<LetterTileProps> = ({
  letter,
  size,
  disabled,
  onPress,
  style,
  color,
  popOnChange = false,
  testID,
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!popOnChange || letter === false) {
      return;
    }

    scale.setValue(0.6);
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      tension: 220,
      useNativeDriver: true,
    }).start();
  }, [letter]);

  const animateTo = (toValue: number) =>
    Animated.spring(scale, {
      toValue,
      friction: 6,
      tension: 300,
      useNativeDriver: true,
    }).start();

  return (
    <Pressable
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => animateTo(0.88)}
      onPressOut={() => animateTo(1)}
    >
      <Animated.View
        style={[
          {
            width: size,
            height: Math.round(size * 1.2),
            borderRadius: Math.round(size * 0.3),
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
          { transform: [{ scale }] },
        ]}
      >
        {letter !== false && (
          <Text
            style={{
              fontSize: Math.round(size * 0.5),
              fontWeight: '700',
              color,
            }}
          >
            {letter === ' ' ? '_' : letter}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

type Props = {
  card: CardItem;
  onGrade: (score: SrsScore) => void;
  autoPlay?: boolean;
  playRandomExample?: boolean;
  deckSettings: DeckSettings;
};

export const ArrangeByLetters: FC<Props> = ({
  card,
  onGrade,
  autoPlay = false,
  playRandomExample = true,
  deckSettings,
}) => {
  const displayerRef = useRef<DisplayerRef>(null);
  const theme = useAppTheme();
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);
  const x = useRef(new Animated.Value(0)).current;
  const [hintedOrMistaken, setHintedOrMistaken] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const correctString = card.data.source.toUpperCase();
  const isRtl = isRtlText(correctString);
  const lettersRef = useRef<string[]>(shuffle(correctString.split('')));
  const [answer, setAnswer] = useState<Array<number | false>>(
    lettersRef.current.map(() => false)
  );
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [tilesWidth, setTilesWidth] = useState(0);
  const tileLayout = getTileLayout(lettersRef.current.length, tilesWidth);

  const playSoundRef = useRef<PlaySoundRef>(null);
  const reverseCardFrontRef = useRef<ReverseCardFrontRef>(null);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    if (!isAnswerVisible) {
      return;
    }

    const timeOutId = setTimeout(async () => {
      await playSoundRef.current?.play();
      if (playRandomExample) {
        await reverseCardFrontRef.current?.playExample();
      }
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [autoPlay, isAnswerVisible]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({
          animated: true,
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  useEffect(() => {
    if (!isAnswerVisible) {
      return;
    }

    // Long words push the revealed answer below the fold
    const timeOutId = setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [isAnswerVisible]);

  const shake = () => {
    const intensity = 14;
    const totalDuration = 420;

    x.stopAnimation(); // cancel any in-flight animation

    // Damped offsets (in "units", multiplied by intensity below)
    // Starts strong, decays naturally.
    const offsets = [-1, 1, -0.8, 0.8, -0.6, 0.6, -0.3, 0.3, 0];

    // Slightly front-load the time to the first jolts, then taper
    const base = totalDuration / offsets.length;

    const seq = offsets.map((o, i) =>
      Animated.timing(x, {
        toValue: o * intensity,
        duration: Math.max(40, base * (1.15 - i * 0.08)), // ease-out feel
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      })
    );

    // Finish with a small spring to settle perfectly on 0
    Animated.sequence([
      ...seq,
      Animated.spring(x, {
        toValue: 0,
        // Using friction/tension for broad RN support
        friction: 6,
        tension: 180,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const validateResponse = (answer: number[]) => {
    const answerString = answer
      .map((answerIndex) => lettersRef.current[answerIndex])
      .join('');

    if (answerString === correctString) {
      setIsCorrect(true);
      if (displayerRef.current) {
        displayerRef.current
          .hide()
          .then(() => onGrade(hintedOrMistaken ? 3 : 5));
      }
      return;
    } else {
      setHintedOrMistaken(true);
      setIsWrong(true);
      shake();
    }
  };

  const setAnswerIndex = (answerLetterIndex: number) => {
    const firstFalseIndex = answer.findIndex(
      (indexOrFalse) => indexOrFalse === false
    );

    if (firstFalseIndex === -1) {
      return;
    }

    const newValue = [
      ...answer.slice(0, firstFalseIndex),
      answerLetterIndex,
      ...answer.slice(firstFalseIndex + 1),
    ];

    setAnswer(newValue);

    if (newValue.every((v) => v !== false)) {
      // @ts-ignore
      validateResponse(newValue);
    }
  };

  const removeAnswerIndex = (answerLetterIndex: number) => {
    setIsWrong(false);
    setAnswer(answer.map((i) => (i === answerLetterIndex ? false : i)));
  };

  const clearAll = () => {
    setIsWrong(false);
    setAnswer(answer.map(() => false));
  };

  const response: Array<number | false> = lettersRef.current.map((_, index) => {
    if (!answer.includes(index)) {
      return index;
    } else {
      return false;
    }
  });

  const nextSlotIndex = answer.findIndex(
    (indexOrFalse) => indexOrFalse === false
  );

  const getSlotStyle = (
    indexOrFalse: number | false,
    slotIndex: number
  ): StyleProp<ViewStyle> => {
    if (isCorrect) {
      return {
        backgroundColor: theme.colors.primary,
      };
    }

    if (indexOrFalse === false) {
      const isNext = slotIndex === nextSlotIndex;
      return {
        backgroundColor: isNext
          ? theme.colors.inversePrimary
          : theme.colors.inputBg,
        borderBottomWidth: 3,
        borderBottomColor: isNext ? theme.colors.primary : theme.colors.divider,
      };
    }

    return {
      backgroundColor: isWrong ? 'transparent' : theme.colors.inversePrimary,
      borderWidth: 1.5,
      borderColor: isWrong ? theme.colors.error : theme.colors.primary,
    };
  };

  const filledSlotColor = isCorrect
    ? theme.colors.onPrimary
    : isWrong
      ? theme.colors.error
      : theme.colors.primary;

  const rowStyle: StyleProp<ViewStyle> = {
    flexDirection: isRtl ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: tileLayout.gap,
    alignSelf: 'stretch',
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={{
        width: '100%',
      }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Displayer
        ref={displayerRef}
        style={{
          padding: 16,
          maxWidth: 700,
          gap: 16,
        }}
      >
        <ReverseCardFront
          deckSettings={deckSettings}
          ref={reverseCardFrontRef}
          hasChecked={isAnswerVisible}
          card={card}
        />
        <View
          style={{ gap: 28, marginTop: 8, opacity: tilesWidth ? 1 : 0 }}
          onLayout={(event) => setTilesWidth(event.nativeEvent.layout.width)}
        >
          <Animated.View style={[rowStyle, { transform: [{ translateX: x }] }]}>
            {answer.map((indexOrFalse, itemIndex) => (
              <LetterTile
                testID={`study-letter-answer-${itemIndex}`}
                key={itemIndex}
                letter={
                  indexOrFalse === false
                    ? false
                    : lettersRef.current[indexOrFalse]
                }
                disabled={isCorrect || indexOrFalse === false}
                size={tileLayout.size}
                popOnChange={true}
                color={filledSlotColor}
                style={getSlotStyle(indexOrFalse, itemIndex)}
                onPress={() => {
                  if (indexOrFalse !== false) {
                    removeAnswerIndex(indexOrFalse);
                  }
                }}
              />
            ))}
          </Animated.View>

          <View style={rowStyle}>
            {response.map((indexOrFalse, itemIndex) => (
              <LetterTile
                testID={`study-letter-option-${itemIndex}`}
                key={itemIndex}
                letter={
                  indexOrFalse === false
                    ? false
                    : lettersRef.current[indexOrFalse]
                }
                disabled={isCorrect || indexOrFalse === false}
                size={tileLayout.size}
                color={theme.colors.secondary}
                style={
                  indexOrFalse === false
                    ? {
                        borderWidth: 1.5,
                        borderStyle: 'dashed',
                        borderColor: theme.colors.tertiary,
                      }
                    : {
                        backgroundColor: theme.colors.aboveElevation,
                        borderWidth: 1,
                        borderBottomWidth: 3,
                        borderColor: theme.colors.tertiary,
                        shadowColor: '#000',
                        shadowOpacity: theme.dark ? 0.3 : 0.08,
                        shadowRadius: 4,
                        shadowOffset: { width: 0, height: 2 },
                      }
                }
                onPress={() => {
                  if (indexOrFalse !== false) {
                    setAnswerIndex(indexOrFalse);
                  }
                }}
              />
            ))}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            minHeight: 56,
            marginTop: 4,
          }}
        >
          <Button
            testID="study-letters-clear-all"
            icon="backspace-outline"
            mode="outlined"
            textColor={theme.colors.onBackground}
            style={{ borderColor: theme.colors.tertiary }}
            disabled={isCorrect || answer.every((index) => index === false)}
            onPress={clearAll}
          >
            {t('study.arrangeByLetters.clearAll')}
          </Button>
          {!isAnswerVisible && (
            <Button
              testID="study-letters-show-answer"
              icon="eye-outline"
              mode="contained-tonal"
              buttonColor={theme.colors.inversePrimary}
              textColor={theme.colors.primary}
              disabled={isCorrect}
              onPress={() => {
                setIsAnswerVisible(true);
                setHintedOrMistaken(true);
              }}
            >
              {t('study.arrangeByLetters.showMeTheAnswer')}
            </Button>
          )}
          {isAnswerVisible && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                minHeight: 40,
                paddingVertical: 4,
                paddingLeft: isGoogleTTSLanguage(card.data.language) ? 8 : 20,
                paddingRight: 20,
                maxWidth: '100%',
                borderRadius: 20,
                backgroundColor: theme.colors.inversePrimary,
              }}
            >
              {isGoogleTTSLanguage(card.data.language) && (
                <PlaySound
                  ref={playSoundRef}
                  text={card.data.source}
                  language={card.data.language}
                  size={24}
                  color={theme.colors.primary}
                />
              )}
              <Text
                style={{
                  flexShrink: 1,
                  fontSize: 18,
                  fontWeight: '700',
                  letterSpacing: 2,
                  color: theme.colors.primary,
                }}
              >
                {correctString}
              </Text>
            </View>
          )}
        </View>
      </Displayer>
    </ScrollView>
  );
};
