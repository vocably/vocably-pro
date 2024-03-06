export type ContentScriptConfiguration = {
  isFeedbackEnabled: boolean;
  isPreview: boolean;
};

export const contentScriptConfiguration: ContentScriptConfiguration = {
  isFeedbackEnabled: false,
  isPreview: false,
};

export const configureContentScript = (
  configuration: ContentScriptConfiguration
) => {
  Object.assign(contentScriptConfiguration, configuration);
};
