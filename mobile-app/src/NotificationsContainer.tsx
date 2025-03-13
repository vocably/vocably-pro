import { FC, PropsWithChildren, useContext, useEffect } from 'react';
import { AppState } from 'react-native';
import { AuthContext } from './auth/AuthContext';
import { recalibrateNotifications } from './recalibrateNotifications';

type Props = {};

export const NotificationsContainer: FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const authStatus = useContext(AuthContext);
  useEffect(() => {
    const onAppChangeListener = AppState.addEventListener(
      'change',
      (nextAppState) => {
        if (nextAppState === 'active') {
          recalibrateNotifications().then().catch(console.error);
        }
      }
    );

    recalibrateNotifications().then().catch(console.error);

    return () => {
      onAppChangeListener.remove();
    };
  }, []);

  return <>{children}</>;
};
