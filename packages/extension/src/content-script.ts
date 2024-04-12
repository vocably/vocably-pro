import { registerContentScript } from '@vocably/extension-content-script';
import { awakeServiceWorker } from '@vocably/extension-stay-alive';

registerContentScript({
  api: {
    appBaseUrl: process.env.APP_BASE_URL,
  },
  youTube: { ytHosts: ['www.youtube.com'] },
  contentScript: {
    isFeedbackEnabled: process.env.IS_FEEDBACK_ENABLED == 'true',
    askForRatingEnabled: true,
    displayMobileLookupButton: false,
  },
}).then();

awakeServiceWorker();
