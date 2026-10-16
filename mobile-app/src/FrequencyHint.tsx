import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  Linking,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePremium } from './usePremium';
import { usePresentPaywall } from './usePresentPaywall';

export const MAX_FREQUENCY = 10;

// Gap between the anchor and the tip of the arrow.
const ANCHOR_GAP = 8;
// Minimum distance between the hint and the screen edges.
const SCREEN_MARGIN = 12;
// Keeps the arrow away from the rounded corners of the bubble.
const ARROW_EDGE_OFFSET = 18;
const ARROW_SIZE = 12;
const HINT_WIDTH = 300;
const HINT_DURATION = 180;

const LIGHT_BACKGROUND = '#1d2230';
// Lifted a bit, so the hint stands out on the dark background.
const DARK_BACKGROUND = '#2b3245';

export type AnchorRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Props = {
  // 1 (rare) to 10 (most common)
  frequency: number;
  level: 1 | 2 | 3;
  visible: boolean;
  // Where the indicator is on the screen. The arrow points to it.
  anchor: AnchorRect | undefined;
  isSharedLookup: boolean;
  onClose: () => void;
};

/**
 * Explains the frequency indicator of a card. Mirrors `vocably-frequency-hint`
 * of the browser extension.
 */
export const FrequencyHint: FC<Props> = ({
  frequency,
  level,
  visible,
  anchor,
  isSharedLookup,
  onClose,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isPremium = usePremium();
  const presentPaywall = usePresentPaywall();
  const insets = useSafeAreaInsets();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const [bubbleHeight, setBubbleHeight] = useState<number | undefined>();
  const [showSettingsHint, setShowSettingsHint] = useState(false);
  const appearance = useRef(new Animated.Value(0)).current;
  const scaleFill = useRef(new Animated.Value(0)).current;
  // The paywall can't be presented on top of the hint modal, so it waits
  // until the modal is gone.
  const afterDismissRef = useRef<(() => void) | undefined>(undefined);

  // Reset on close, so the next opening starts from scratch.
  useEffect(() => {
    if (visible) {
      return;
    }

    setShowSettingsHint(false);
    appearance.setValue(0);
    scaleFill.setValue(0);
  }, [visible, appearance, scaleFill]);

  const isMeasured = bubbleHeight !== undefined;

  useEffect(() => {
    if (!visible || !isMeasured) {
      return;
    }

    Animated.parallel([
      Animated.timing(appearance, {
        toValue: 1,
        duration: HINT_DURATION,
        easing: Easing.bezier(0.2, 0.8, 0.2, 1),
        useNativeDriver: true,
      }),
      Animated.timing(scaleFill, {
        toValue: 1,
        duration: 500,
        delay: 160,
        easing: Easing.bezier(0.2, 0.8, 0.2, 1),
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible, isMeasured, appearance, scaleFill]);

  const runAfterDismiss = () => {
    const action = afterDismissRef.current;
    afterDismissRef.current = undefined;
    action?.();
  };

  const upgrade = async () => {
    if (!isSharedLookup) {
      afterDismissRef.current = () => presentPaywall();
      onClose();
      // onDismiss is iOS-only, while Android can present the paywall right
      // away.
      if (Platform.OS !== 'ios') {
        runAfterDismiss();
      }
      return;
    }

    if (await Linking.canOpenURL('vocably-pro://upgrade')) {
      onClose();
      await Linking.openURL('vocably-pro://upgrade');
      return;
    }

    setShowSettingsHint(true);
  };

  const onBubbleLayout = (event: LayoutChangeEvent) => {
    setBubbleHeight(event.nativeEvent.layout.height);
  };

  const score = Math.min(Math.max(Math.round(frequency), 1), MAX_FREQUENCY);
  const width = Math.min(HINT_WIDTH, screenWidth - 2 * SCREEN_MARGIN);
  const backgroundColor = theme.dark ? DARK_BACKGROUND : LIGHT_BACKGROUND;

  let left = SCREEN_MARGIN;
  let top = 0;
  let arrowX = width / 2;
  let placement: 'below' | 'above' = 'below';
  let maxHeight: number | undefined;

  if (anchor) {
    const anchorCenter = anchor.x + anchor.width / 2;
    left = Math.min(
      Math.max(anchorCenter - width / 2, SCREEN_MARGIN),
      screenWidth - width - SCREEN_MARGIN
    );
    arrowX = Math.min(
      Math.max(anchorCenter - left, ARROW_EDGE_OFFSET),
      width - ARROW_EDGE_OFFSET
    );

    const spaceBelow =
      screenHeight -
      insets.bottom -
      SCREEN_MARGIN -
      (anchor.y + anchor.height) -
      ANCHOR_GAP;
    const spaceAbove = anchor.y - ANCHOR_GAP - insets.top - SCREEN_MARGIN;
    const height = bubbleHeight ?? 0;

    if (height <= spaceBelow) {
      placement = 'below';
    } else if (height <= spaceAbove) {
      placement = 'above';
    } else {
      // Fits on neither side, so it takes the roomier one and scrolls.
      placement = spaceBelow >= spaceAbove ? 'below' : 'above';
      maxHeight = placement === 'below' ? spaceBelow : spaceAbove;
    }

    const placedHeight = maxHeight ?? height;
    top =
      placement === 'below'
        ? anchor.y + anchor.height + ANCHOR_GAP
        : anchor.y - ANCHOR_GAP - placedHeight;
  }

  const direction = placement === 'below' ? -1 : 1;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onClose}
      onDismiss={runAfterDismiss}
    >
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel={t('common.close')}
      />
      <Animated.View
        accessibilityViewIsModal
        style={{
          position: 'absolute',
          left,
          top,
          width,
          // Hidden until measured, so it doesn't flash at a wrong position.
          opacity: isMeasured ? appearance : 0,
          transform: [
            {
              translateY: appearance.interpolate({
                inputRange: [0, 1],
                outputRange: [4 * direction, 0],
              }),
            },
            {
              scale: appearance.interpolate({
                inputRange: [0, 1],
                outputRange: [0.96, 1],
              }),
            },
          ],
          transformOrigin: `${arrowX}px ${placement === 'below' ? '0%' : '100%'}`,
        }}
      >
        <View
          style={[
            styles.bubble,
            { backgroundColor, maxHeight },
            theme.dark && styles.bubbleDark,
          ]}
          onLayout={maxHeight === undefined ? onBubbleLayout : undefined}
        >
          <View
            style={[
              styles.arrow,
              {
                backgroundColor,
                left: arrowX - ARROW_SIZE / 2,
              },
              placement === 'below'
                ? { top: -ARROW_SIZE / 2 + 1 }
                : { bottom: -ARROW_SIZE / 2 + 1 },
            ]}
          />
          <ScrollView
            bounces={false}
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.header}>
              <Text style={styles.title}>{t(`common.frequency_${level}`)}</Text>
              <Text style={styles.score}>
                {t('frequencyHint.score', { score, max: MAX_FREQUENCY })}
              </Text>
            </View>
            <View style={styles.scale}>
              <Animated.View
                style={[
                  styles.scaleFill,
                  {
                    width: `${(score / MAX_FREQUENCY) * 100}%`,
                    transform: [{ scaleX: scaleFill }],
                  },
                ]}
              >
                <LinearGradient
                  colors={['#6f9bff', theme.colors.primary]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={StyleSheet.absoluteFill}
                />
              </Animated.View>
            </View>
            <Text style={styles.text}>
              {t(`frequencyHint.description_${level}`)}
            </Text>
            {!isPremium && (
              <View style={styles.premium}>
                <LinearGradient
                  colors={['#4d85ff', theme.colors.primary]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.badge}
                >
                  <Text style={styles.badgeText}>
                    {t('frequencyHint.premiumBadge')}
                  </Text>
                </LinearGradient>
                <Text style={styles.text}>{t('frequencyHint.premium')}</Text>
                {showSettingsHint ? (
                  <Text style={[styles.text, styles.settingsHint]}>
                    {t('cardsLimit.openVocablySettings')}
                  </Text>
                ) : (
                  <Pressable
                    onPress={upgrade}
                    accessibilityRole="button"
                    style={({ pressed }) => [
                      styles.upgrade,
                      pressed && styles.upgradePressed,
                    ]}
                  >
                    <LinearGradient
                      colors={['#ffd66b', '#f2a93b']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.upgradeGradient}
                    >
                      <Text style={styles.upgradeText}>
                        {t('cardsLimit.upgradeToPremium')}
                      </Text>
                    </LinearGradient>
                  </Pressable>
                )}
              </View>
            )}
          </ScrollView>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 14,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },
  bubbleDark: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  // A rotated square peeking out of the bubble.
  arrow: {
    position: 'absolute',
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  // Separate from the bubble, which can't clip its overflow without clipping
  // the arrow.
  content: {
    flexGrow: 0,
    flexShrink: 1,
    borderRadius: 14,
  },
  contentContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 10,
  },
  title: {
    flexShrink: 1,
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  score: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    fontVariant: ['tabular-nums'],
  },
  scale: {
    height: 4,
    marginBottom: 12,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    overflow: 'hidden',
  },
  scaleFill: {
    height: '100%',
    borderRadius: 2,
    overflow: 'hidden',
    transformOrigin: 'left',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.78)',
    fontSize: 14,
    lineHeight: 20,
  },
  premium: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.18)',
    alignItems: 'flex-start',
  },
  badge: {
    marginBottom: 8,
    paddingVertical: 2,
    paddingHorizontal: 9,
    borderRadius: 10,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  settingsHint: {
    marginTop: 12,
    color: '#ffffff',
  },
  upgrade: {
    alignSelf: 'stretch',
    marginTop: 12,
    borderRadius: 10,
    shadowColor: '#f2a93b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  upgradePressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  upgradeGradient: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  upgradeText: {
    color: '#3a2600',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
