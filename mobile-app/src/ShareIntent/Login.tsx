import { FC, PropsWithChildren } from 'react';
import { Login as OriginalAuthLogin } from '../auth/Login';
import { IosLogin } from './IosLogin';

type Props = {
  os: 'ios' | 'android';
};

export const Login: FC<PropsWithChildren<Props>> = ({ children, os }) => {
  if (os === 'ios') {
    return <IosLogin>{children}</IosLogin>;
  }

  return <OriginalAuthLogin>{children}</OriginalAuthLogin>;
};
