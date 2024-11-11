import React, { FC, PropsWithChildren } from 'react';
import { BackHandler, Pressable, View } from 'react-native';
import { useTheme } from 'react-native-paper';

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
          height: '20%',
        }}
      />
      <View
        style={{
          width: '100%',
          height: '80%',
          overflow: 'hidden',
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
        }}
      >
        {children}
      </View>
    </>
  );
};
