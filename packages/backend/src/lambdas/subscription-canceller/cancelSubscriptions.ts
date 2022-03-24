import { getUsernames } from '../../subscriptionCancellerDb';
import { cancelSubscription } from './cancelSubscription';

export const cancelSubscriptions = async (timestamp: number) => {
  console.log('Cancelling subscriptions under timestamp', timestamp);
  const usernames = await getUsernames(timestamp);
  console.log('Found usernames', usernames);
  await Promise.all(usernames.map(cancelSubscription));
  return usernames;
};
