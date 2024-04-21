export type ContentScriptConfiguration = {
  isFeedbackEnabled: boolean;
  askForRatingEnabled: boolean;
  displayMobileLookupButton: boolean;
  allowFirstTranslationCongratulation: boolean;
};

export let contentScriptConfiguration: ContentScriptConfiguration = {
  isFeedbackEnabled: false,
  askForRatingEnabled: false,
  displayMobileLookupButton: false,
  allowFirstTranslationCongratulation: false,
};

export const configureContentScript = (
  configuration: Partial<ContentScriptConfiguration>
) => {
  contentScriptConfiguration = {
    ...contentScriptConfiguration,
    ...configuration,
  };
};
