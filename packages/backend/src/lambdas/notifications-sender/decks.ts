import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { LanguageDeck, Result, resultify } from '@vocably/model';
import { deserializeDeck } from '@vocably/model-operations';
import { Readable } from 'node:stream';

const s3Client = new S3Client({});

const streamToString = (stream: Readable): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    stream.on('error', reject);
  });

const stringBodyToDeckObject = (body: string): Result<LanguageDeck> => {
  try {
    return {
      success: true,
      value: deserializeDeck(JSON.parse(body)),
    };
  } catch (error) {
    return {
      success: false,
      errorCode: 'JSON_PARSE_ERROR',
      reason: 'Unable to parse JSON body',
    };
  }
};

export const getDeck = async (
  sub: string,
  language: string
): Promise<Result<LanguageDeck>> => {
  const getObjectResult = await resultify(
    s3Client.send(
      new GetObjectCommand({
        Bucket: process.env.CARDS_BUCKET,
        Key: `${sub}/languages/${language}`,
      })
    ),
    {
      errorCode: 'NOTIFICATIONS_CARDS_GET_ERROR',
      reason: `Unable to get deck for ${language} of ${sub}`,
    }
  );

  if (getObjectResult.success === false) {
    return getObjectResult;
  }

  if (!getObjectResult.value.Body) {
    return {
      success: false,
      errorCode: 'NOTIFICATIONS_CARDS_GET_ERROR',
      reason: `The body of ${language} of ${sub} is empty.`,
    };
  }

  const bodyParseResult = await resultify(
    streamToString(getObjectResult.value.Body as Readable),
    {
      errorCode: 'NOTIFICATIONS_CARDS_GET_ERROR',
      reason: `Unable to convert stream into string of ${language} of ${sub},`,
    }
  );

  if (bodyParseResult.success === false) {
    return bodyParseResult;
  }

  return stringBodyToDeckObject(bodyParseResult.value);
};
