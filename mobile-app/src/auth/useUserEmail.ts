import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getFlatAttributes } from './getFlatAttributes';

export const useUserEmail = (): string | false => {
  const [userEmail, setUserEmail] = useState<string | false>(false);
  const authStatus = useContext(AuthContext);

  useEffect(() => {
    if (authStatus.status !== 'logged-in') {
      return;
    }

    getFlatAttributes(authStatus.user).then((attributes) => {
      setUserEmail(attributes['email'] ?? false);
    });
  }, [authStatus, setUserEmail]);

  return userEmail;
};
