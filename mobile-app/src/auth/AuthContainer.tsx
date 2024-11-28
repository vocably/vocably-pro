import { Auth } from '@aws-amplify/auth';
import { userLoggedIn } from '@vocably/api';
import { Hub } from 'aws-amplify';
import { usePostHog } from 'posthog-react-native';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { awsConfig } from '../aws-config';
import { facility } from '../facility';
import { AuthContext, AuthStatus } from './AuthContext';
import { getFlatAttributes } from './getFlatAttributes';

Auth.configure(awsConfig);

export const AuthContainer: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>({
    status: 'undefined',
  });

  const posthog = usePostHog();

  useEffect(() => {
    if (authStatus.status !== 'logged-in') {
      return;
    }

    getFlatAttributes(authStatus.user).then((attributes) => {
      if (!attributes) {
        return;
      }

      if (!attributes['sub'] || !attributes['email']) {
        return;
      }

      posthog.identify(attributes['sub'], {
        email: attributes['email'],
      });
    });
  }, [authStatus]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuthStatus({
          status: 'logged-in',
          user,
        });
      })
      .catch((error) => {
        setAuthStatus({
          status: 'not-logged-in',
        });
      });

    return Hub.listen('auth', ({ payload: { event, data } }) => {
      if (event === 'signOut') {
        setAuthStatus({
          status: 'not-logged-in',
        });
        return;
      }

      if (event === 'signIn') {
        Auth.currentAuthenticatedUser()
          .then(async (user) => {
            setAuthStatus({
              status: 'logged-in',
              user,
            });

            userLoggedIn({
              facility,
            }).then();
          })
          .catch((error) => {
            setAuthStatus({
              status: 'error',
              error,
            });
          });
        return;
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={authStatus}>{children}</AuthContext.Provider>
  );
};
