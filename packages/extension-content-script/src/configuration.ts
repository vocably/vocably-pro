export type ContentScriptConfiguration = {
  isFeedbackEnabled: boolean;
};

export let contentScriptConfiguration: ContentScriptConfiguration = {
  isFeedbackEnabled: false,
};

export const configureContentScript = (
  configuration: ContentScriptConfiguration
) => {
  contentScriptConfiguration = configuration;
};
