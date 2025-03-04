import { Auth } from '@aws-amplify/auth';
import { Notifications } from '@aws-amplify/notifications';
import { debounce } from 'lodash-es';
import { getFlatAttributes } from './auth/getFlatAttributes';

export const notificationsIdentifyUser = debounce(async () => {
  console.log('Identifying notifications user.');
  Auth.currentAuthenticatedUser()
    .then(async (user) => {
      console.log('User is logged in. Identifying.');
      const attributes = await getFlatAttributes(user);

      if (!attributes['sub'] || !attributes['email']) {
        return;
      }

      Notifications.Push.identifyUser(attributes['sub'], {
        attributes: {
          email: [attributes['email']],
        },
      }).catch(console.error);
    })
    .catch((error) => {
      console.log("User is not logged in. Can't identify.");
    });
}, 1000);
