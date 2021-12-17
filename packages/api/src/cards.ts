import { AvailableLanguage, CardItem, Result } from '@vocably/model';
import { Auth } from '@aws-amplify/auth';
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
  S3ClientConfig,
} from '@aws-sdk/client-s3';
import { apiOptions } from './config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const storeCards = async (
  language: AvailableLanguage,
  cards: CardItem[]
): Promise<Result<null>> => {
  try {
    const credentials = await Auth.currentUserCredentials();
    const s3Configuration: S3ClientConfig = {
      credentials: credentials,
      region: apiOptions.region,
    };
    const s3 = new S3Client(s3Configuration);
    const url = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: apiOptions.cardsBucket,
        Key: `${credentials.identityId}/${language}`,
      }),
      { expiresIn: 15 * 60 }
    );

    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(cards),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          `Unable PUT signed URL. Response object: ${JSON.stringify(response)}.`
        );
      }
    });

    return {
      success: true,
      value: null,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'CARDS_SAVE_ERROR',
      reason: `Unable to save cards.`,
      extra: e,
    };
  }
};

export const loadCards = async (
  language: AvailableLanguage
): Promise<Result<CardItem[]>> => {
  try {
    const credentials = await Auth.currentUserCredentials();
    const s3Configuration: S3ClientConfig = {
      credentials: credentials,
      region: apiOptions.region,
    };
    const s3 = new S3Client(s3Configuration);
    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({
        Bucket: apiOptions.cardsBucket,
        Key: `${credentials.identityId}/${language}`,
      }),
      { expiresIn: 15 * 60 }
    );

    return fetch(url)
      .then((response) => response.json())
      .then((cards) => ({
        success: true,
        value: cards,
      }));
  } catch (e) {
    return {
      success: false,
      errorCode: 'CARDS_LOAD_ERROR',
      reason: `Unable to load cards.`,
      extra: e,
    };
  }
};
