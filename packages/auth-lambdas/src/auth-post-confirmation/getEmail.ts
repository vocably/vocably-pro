import { AdminGetUserResponse } from '@aws-sdk/client-cognito-identity-provider';

export const getEmail = (user: AdminGetUserResponse): string => {
  return user.UserAttributes.find((attribute) => attribute.Name === 'email')
    ?.Value as string;
};
