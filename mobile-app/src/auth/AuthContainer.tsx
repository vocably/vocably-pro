import { Auth } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { awsConfig } from '../aws-config';
import { AuthContext, AuthStatus } from './AuthContext';

Auth.configure(awsConfig);

export const AuthContainer: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>({
    status: 'undefined',
  });

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
          .then((user) => {
            setAuthStatus({
              status: 'logged-in',
              user,
            });
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
  }, [setAuthStatus]);

  return (
    <AuthContext.Provider value={authStatus}>{children}</AuthContext.Provider>
  );
};
