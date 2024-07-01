import { PropsWithChildren } from 'react';
import { BackHandler, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { AuthContainer } from '../auth/AuthContainer';
import { Login } from '../auth/Login';
import { ThemeProvider } from '../ThemeProvider';
import { ShareIntentAppBase } from './ShareExtensionAppBase';

const Viewport = (props: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <>
      <Pressable
        onPress={() => BackHandler.exitApp()}
        style={{
          width: '100%',
          height: '34%',
        }}
      />
      <Animated.View
        entering={SlideInDown}
        style={{
          width: '100%',
          height: '66%',
          overflow: 'hidden',
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
        }}
      >
        {props.children}
      </Animated.View>
    </>
  );
};

const ShareIntentApp = () => {
  return (
    <ThemeProvider>
      <Viewport>
        <AuthContainer>
          <Login>
            <ShareIntentAppBase />
          </Login>
        </AuthContainer>
      </Viewport>
    </ThemeProvider>
  );
};

export default ShareIntentApp;
