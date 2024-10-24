import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getUserEmail } from './getUserEmail';

export const useUserEmail = (): string | false => {
  const [userEmail, setUserEmail] = useState<string | false>(false);
  const authStatus = useContext(AuthContext);

  useEffect(() => {
    if (authStatus.status !== 'logged-in') {
      return;
    }

    getUserEmail(authStatus.user).then((userEmail) => {
      setUserEmail(userEmail ?? false);
    });
  }, [authStatus, setUserEmail]);

  return userEmail;
};
