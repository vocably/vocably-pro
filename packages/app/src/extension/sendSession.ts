import { Auth } from 'aws-amplify';
import { environment } from '../environments/environment';

export const sendSession = async () => {
  const session = await Auth.currentSession();

  if (!chrome) {
    return;
  }

  chrome.runtime.sendMessage(environment.chromeExtensionId, session);
};
