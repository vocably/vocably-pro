import { CardItem, Result } from '@vocably/model';
import { Auth } from '@aws-amplify/auth';
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
  S3ClientConfig,
} from '@aws-sdk/client-s3';
import { apiOptions } from './config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { isValidCredentials } from './isValidCredentials';

export const storeCards = async (
  language: string,
  cards: CardItem[]
): Promise<Result<null>> => {
  console.info('Store Cards: Operation requested.');
  try {
    const credentials = await Auth.currentUserCredentials();
    console.info('Store Cards: Credentials have been obtained.');

    if (!isValidCredentials(credentials)) {
      return {
        success: false,
        errorCode: 'AUTH_INVALID_USER_CREDENTIALS',
        reason: `The fetched credentials are not valid`,
        extra: credentials,
      };
    }

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

    console.info('Store Cards: Signed URL has been successfully created.');

    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(cards),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        success: false,
        errorCode: 'CARDS_SAVE_HTTP_FETCH_ERROR',
        reason: `The HTTP PUT operation has ended up with an unsuccessful status.`,
        extra: {
          response,
          body: await response.text(),
        },
      };
    }

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
  language: string
): Promise<Result<CardItem[]>> => {
  console.info('Load Cards: Operation requested.');
  try {
    const credentials = await Auth.currentUserCredentials();
    console.info('Load Cards: Credentials have been obtained.');

    if (!isValidCredentials(credentials)) {
      return {
        success: false,
        errorCode: 'AUTH_INVALID_USER_CREDENTIALS',
        reason: `The fetched credentials are not valid`,
        extra: credentials,
      };
    }

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

    console.info('Load Cards: Secure URL have been created.');

    const response = await fetch(url);

    if (response.status === 403) {
      return {
        success: true,
        value: [],
      };
    }

    if (!response.ok) {
      return {
        success: false,
        errorCode: 'CARDS_LOAD_HTTP_FETCH_ERROR',
        reason: `Error during cards HTTP loading.`,
        extra: {
          response,
          body: await response.text(),
        },
      };
    }

    return {
      success: true,
      value: await response.json(),
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'CARDS_LOAD_ERROR',
      reason: `Unable to load cards.`,
      extra: e,
    };
  }
};
