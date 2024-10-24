import { FC, PropsWithChildren } from 'react';
import { BackHandler, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { SlideInDown } from 'react-native-reanimated';

type Props = {
  os: 'ios' | 'android';
};

export const Viewport: FC<PropsWithChildren<Props>> = ({ children, os }) => {
  const theme = useTheme();

  if (os !== 'android') {
    return <>{children}</>;
  }

  return (
    <>
      <Pressable
        onPress={() => BackHandler.exitApp()}
        style={{
          width: '100%',
          height: '5%',
        }}
      />
      <Animated.View
        entering={SlideInDown}
        style={{
          width: '100%',
          height: '95%',
          overflow: 'hidden',
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};
