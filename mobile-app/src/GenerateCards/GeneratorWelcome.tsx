import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-paper';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../ThemeProvider';
import { PressableScale } from '../ui/PressableScale';

type Example = {
  icon: string;
  label: string;
};

type Props = {
  showIrregularVerbs: boolean;
  onExample: (message: string) => void;
  onFeedback: () => void;
};

const ExampleChip: FC<Example & { index: number; onPress: () => void }> = ({
  icon,
  label,
  index,
  onPress,
}) => {
  const theme = useAppTheme();

  return (
    <Animated.View
      entering={FadeInDown.delay(250 + index * 80)
        .springify()
        .damping(18)}
    >
      <PressableScale
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          paddingLeft: 10,
          paddingRight: 14,
          paddingVertical: 8,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.inversePrimary,
        }}
      >
        <Icon name={icon} size={18} color={theme.colors.primary} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: theme.colors.primary,
          }}
        >
          {label}
        </Text>
      </PressableScale>
    </Animated.View>
  );
};

export const GeneratorWelcome: FC<Props> = ({
  showIrregularVerbs,
  onExample,
  onFeedback,
}) => {
  const theme = useAppTheme();
  const { t } = useTranslation();

  const examples: Example[] = [
    ...(showIrregularVerbs
      ? [
          {
            icon: 'shuffle-variant',
            label: t('generateCards.exampleIrregularVerbs'),
          },
        ]
      : []),
    { icon: 'paw', label: t('generateCards.exampleAnimals') },
    {
      icon: 'comment-quote-outline',
      label: t('generateCards.examplePopularIdioms'),
    },
  ];

  return (
    <Animated.View
      entering={FadeInDown.springify().damping(18)}
      style={{
        borderRadius: 20,
        borderTopLeftRadius: 6,
        padding: 16,
        gap: 16,
        backgroundColor: theme.colors.elevation.level2,
        borderWidth: 1,
        borderColor: theme.colors.inversePrimary,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.primaryVariant]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="creation" size={22} color={theme.colors.onPrimary} />
        </LinearGradient>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            lineHeight: 22,
            color: theme.colors.onBackground,
          }}
        >
          {t('generateCards.intro')}
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <Animated.Text
          entering={FadeIn.delay(150).duration(400)}
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: theme.colors.secondary,
          }}
        >
          {t('generateCards.examplesToTry')}
        </Animated.Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {examples.map((example, index) => (
            <ExampleChip
              key={example.icon}
              {...example}
              index={index}
              onPress={() => onExample(example.label)}
            />
          ))}
        </View>
      </View>

      <Animated.View
        entering={FadeIn.delay(500).duration(500)}
        style={{
          flexDirection: 'row',
          gap: 8,
          paddingTop: 12,
          borderTopWidth: 1,
          borderTopColor: theme.colors.inversePrimary,
        }}
      >
        <Icon
          name="flask-outline"
          size={16}
          color={theme.colors.onBackground}
          style={{ opacity: 0.6, marginTop: 1 }}
        />
        <Text
          style={{
            flex: 1,
            fontSize: 13,
            lineHeight: 18,
            color: theme.colors.onBackground,
            opacity: 0.75,
          }}
        >
          <Trans
            i18nKey="generateCards.experimental"
            components={{
              feedback: (
                <Text
                  style={{
                    fontWeight: '600',
                    color: theme.colors.primary,
                  }}
                  onPress={onFeedback}
                />
              ),
            }}
          />
        </Text>
      </Animated.View>
    </Animated.View>
  );
};
