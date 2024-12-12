export type ContentScriptConfiguration = {
  askForRatingEnabled: boolean;
  displayMobileLookupButton: boolean;
  allowFirstTranslationCongratulation: boolean;
};

export let contentScriptConfiguration: ContentScriptConfiguration = {
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
