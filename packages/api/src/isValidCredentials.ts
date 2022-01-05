import { Auth } from '@aws-amplify/auth';

export const isValidCredentials = (
  credentials: any
): credentials is Awaited<ReturnType<typeof Auth.currentUserCredentials>> =>
  typeof credentials === 'object' &&
  credentials !== null &&
  credentials.authenticated;
