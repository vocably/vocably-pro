import { UserData } from '../auth/auth.service';

export const isSubscribed = (userData: UserData) =>
  userData.status !== undefined;
