import { AdminGetUserResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

export const getEmail = (user: AdminGetUserResponse): string => {
  return user.UserAttributes.find((attribute) => attribute.Name === 'email')
    ?.Value as string;
};
