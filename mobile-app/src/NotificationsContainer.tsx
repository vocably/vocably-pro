import { FC, PropsWithChildren, useContext, useEffect } from 'react';
import { AppState } from 'react-native';
import { AuthContext } from './auth/AuthContext';
import { notificationsIdentifyUser } from './notificationsIdentifyUser';
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
          notificationsIdentifyUser();
          recalibrateNotifications().then().catch(console.error);
        }
      }
    );

    recalibrateNotifications().then().catch(console.error);

    return () => {
      onAppChangeListener.remove();
    };
  }, []);

  useEffect(() => {
    console.log(
      'Auth status is updated. Identifying notifications user.',
      authStatus.status
    );
    notificationsIdentifyUser();
  }, [authStatus]);

  return <>{children}</>;
};
