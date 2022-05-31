import { UserData } from '@vocably/model';

export const isSubscribed = (userData: UserData) =>
  userData.status !== undefined;
