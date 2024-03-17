export type ContentScriptConfiguration = {
  isFeedbackEnabled: boolean;
  askForRatingEnabled: boolean;
};

export let contentScriptConfiguration: ContentScriptConfiguration = {
  isFeedbackEnabled: false,
  askForRatingEnabled: false,
};

export const configureContentScript = (
  configuration: ContentScriptConfiguration
) => {
  contentScriptConfiguration = configuration;
};
