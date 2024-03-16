import { registerContentScript } from '@vocably/extension-content-script';

registerContentScript({
  api: {
    appBaseUrl: process.env.APP_BASE_URL,
  },
  youTube: { ytHosts: [] },
  contentScript: {
    isFeedbackEnabled: process.env.IS_FEEDBACK_ENABLED == 'true',
  },
}).then();
