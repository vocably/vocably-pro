import { inspect, nodeSaveUserMetadata } from '@vocably/node-sulna';
import { Callback, Context, PostConfirmationTriggerEvent } from 'aws-lambda';
import { adminAddUserToGroup } from './adminAddUserToGroup';
import { adminGetUser } from './adminGetUser';
import { addContact, sendWelcomeEmail } from './brevo';
import { getAttribute } from './getAttribute';

export const authPostConfirmation = async (
  event: PostConfirmationTriggerEvent,
  _context: Context,
  callback: Callback
): Promise<void> => {
  const { userPoolId, userName } = event;

  try {
    await adminAddUserToGroup({
      userPoolId,
      username: userName,
      groupName: 'paid',
    });

    const user = await adminGetUser({
      userPoolId,
      username: userName,
    });

    console.log(inspect(user.UserAttributes));

    const email = getAttribute(user, 'email');
    const sub = getAttribute(user, 'sub');

    if (!email || !sub) {
      return callback('Unable to determine email or sub', {
        email,
        sub,
      });
    }

    const addContactResult = await addContact({ email });

    if (addContactResult.success === false) {
      console.error('Brevo add contact error', addContactResult);
    }

    const saveMetadataResult = await nodeSaveUserMetadata(
      sub,
      process.env.USER_FILES_BUCKET,
      {
        onboardingFlow: {
          allowed: true,
          mobileAppSent: false,
          extensionSent: false,
        },
      }
    );

    if (saveMetadataResult.success === false) {
      console.error('Save metadata error', saveMetadataResult);
    }

    await sendWelcomeEmail({ email });

    return callback(null, event);
  } catch (error) {
    console.log(error);
    return callback(error, event);
  }
};
