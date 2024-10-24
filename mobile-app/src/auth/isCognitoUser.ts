import { CognitoUser } from '@aws-amplify/auth';

export const isCognitoUser = (input: any): input is CognitoUser => {
  return input instanceof CognitoUser;
};
