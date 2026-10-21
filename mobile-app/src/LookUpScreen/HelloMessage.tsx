import { isGoogleLanguage } from '@vocably/model';
import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Icon, IconButton, Text, useTheme } from 'react-native-paper';
import Animated, {
  SlideInUp,
  SlideOutUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { greeting } from './greeting';

const padding = 16;

type Props = {
  language: string;
  leftInset: number;
  rightInset: number;
  onGenerateCards: () => void;
  onClose: () => void;
};

const WavingHand: FC = () => {
  const theme = useTheme();
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withDelay(
      350,
      withSequence(
        withRepeat(
          withSequence(
            withTiming(20, { duration: 140 }),
            withTiming(-8, { duration: 140 })
          ),
          3
        ),
        withTiming(0, { duration: 140 })
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View style={[{ transformOrigin: '70% 90%' }, animatedStyle]}>
      <Icon source="hand-wave" size={32} color={theme.colors.primary} />
    </Animated.View>
  );
};

export const HelloMessage: FC<Props> = ({
  language,
  leftInset,
  rightInset,
  onGenerateCards,
  onClose,
}) => {
  const theme = useTheme();

  const text =
    (isGoogleLanguage(language) && greeting[language]) || greeting['en'];

  if (!text) {
    return null;
  }

  return (
    <Animated.View
      entering={SlideInUp.duration(300)}
      exiting={SlideOutUp.duration(300)}
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingLeft: leftInset + padding,
        paddingRight: rightInset + padding,
        paddingTop: padding,
      }}
    >
      <View
        style={{
          backgroundColor: theme.colors.elevation.level2,
          padding: 16,
          borderRadius: 16,
          gap: 12,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingRight: 32,
          }}
        >
          <WavingHand />
          <Text variant="titleMedium" style={{ flex: 1, fontWeight: '600' }}>
            {text.title}
          </Text>
        </View>

        <Text
          variant="bodyMedium"
          style={{ color: theme.colors.onSurfaceVariant }}
        >
          {text.body}
        </Text>

        <Button
          testID="hello-message-generate-cards"
          icon={'palette-swatch-outline'}
          mode={'contained-tonal'}
          onPress={onGenerateCards}
        >
          {text.button}
        </Button>

        <IconButton
          testID="hello-message-close"
          icon={'close'}
          size={16}
          style={{ position: 'absolute', right: 4, top: 4 }}
          onPress={onClose}
        />
      </View>
    </Animated.View>
  );
};
