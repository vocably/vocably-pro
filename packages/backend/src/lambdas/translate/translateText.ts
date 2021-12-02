import { APIGatewayProxyEvent } from 'aws-lambda';
import { Phrase, Translation } from '@vocably/api-types';
import { TranslationServiceClient } from '@google-cloud/translate';

const translationClient = new TranslationServiceClient();
const location = 'global';

export const translateText = async (
  event: APIGatewayProxyEvent
): Promise<Translation> => {
  const phrase: Phrase = JSON.parse(event.body);

  const request = {
    parent: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}`,
    contents: [phrase.phrase],
    mimeType: 'text/plain',
    targetLanguageCode: 'en',
  };

  const [response] = await translationClient.translateText(request);

  if (response.translations.length === 0) {
    return {};
  }

  return {
    asIs: response.translations[0].translatedText,
  };
};
