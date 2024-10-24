import { CognitoUser } from '@aws-amplify/auth';
import { isCognitoUser } from './isCognitoUser';

export const getUserEmail = (
  user: CognitoUser | any
): Promise<string | null> => {
  return new Promise((resolve) => {
    if (!isCognitoUser(user)) {
      return resolve(null);
    }

    user.getUserAttributes((error, attributes) => {
      if (error) {
        return resolve(null);
      }

      if (!attributes) {
        return resolve(null);
      }

      const emailAttribute = attributes.find(
        (attr) => attr.getName() === 'email'
      );

      if (!emailAttribute) {
        return resolve(null);
      }

      return resolve(emailAttribute.getValue());
    });
  });
};
