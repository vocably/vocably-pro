import { Callback, Context, PostConfirmationTriggerEvent } from 'aws-lambda';
import { adminAddUserToGroup } from './adminAddUserToGroup';
import { adminGetUser } from './adminGetUser';
import { addContact, sendWelcomeEmail } from './brevo';
import { getEmail } from './getEmail';

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

    const email = getEmail(user);

    await addContact({ email });
    await sendWelcomeEmail({ email });

    return callback(null, event);
  } catch (error) {
    console.log(error);
    return callback(error, event);
  }
};
