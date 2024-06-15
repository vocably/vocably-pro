import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const useUserEmail = (): string | false => {
  const [userEmail, setUserEmail] = useState<string | false>(false);
  const authStatus = useContext(AuthContext);

  useEffect(() => {
    if (authStatus.status !== 'logged-in') {
      return;
    }

    authStatus.user.getUserAttributes((error, attributes) => {
      if (!attributes) {
        setUserEmail(false);
        return;
      }

      const emailAttribute = attributes.find(
        (attr) => attr.getName() === 'email'
      );

      if (!emailAttribute) {
        setUserEmail(false);
        return;
      }

      setUserEmail(emailAttribute.getValue());
    });
  }, [authStatus, setUserEmail]);

  return userEmail;
};
