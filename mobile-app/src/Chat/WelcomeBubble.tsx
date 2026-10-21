import { FC, PropsWithChildren, ReactNode } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../ThemeProvider';

type Props = {
  intro: ReactNode;
};

export const WelcomeBubble: FC<PropsWithChildren<Props>> = ({
  intro,
  children,
}) => {
  const theme = useAppTheme();

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
          {intro}
        </Text>
      </View>
      {children}
    </Animated.View>
  );
};
