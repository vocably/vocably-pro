import { translate } from './index';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { TranslationServiceClient } from '@google-cloud/translate';

// @ts-ignore
let mockEvent: APIGatewayProxyEvent = {};

describe('integration check for translate lambda', () => {
  if (process.env.TEST_SKIP_MANUAL === 'true') {
    it('skip manual testing', () => {});
    return;
  }

  it('execute translate lambda', async () => {
    const result = await translate(mockEvent);
    console.log({ result });
    expect(result.statusCode).toEqual(200);
  });

  it('tests translation client', async () => {
    const translationClient = new TranslationServiceClient();

    const projectId = 'vocably-332109';
    const location = 'global';
    const text = 'bijgelegd';

    const request = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [text],
      mimeType: 'text/plain', // mime types: text/plain, text/html
      targetLanguageCode: 'en',
    };

    // Run request
    const [response] = await translationClient.translateText(request);
    console.log(response);
  });
});
