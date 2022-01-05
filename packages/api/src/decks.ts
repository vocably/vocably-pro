import { AvailableLanguage, Result } from '@vocably/model';
import { Auth } from '@aws-amplify/auth';
import { isValidCredentials } from './isValidCredentials';
import {
  S3Client,
  S3ClientConfig,
  ListObjectsCommand,
} from '@aws-sdk/client-s3';
import { apiOptions } from './config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { parse } from 'fast-xml-parser';

export const loadDecks = async (): Promise<Result<AvailableLanguage[]>> => {
  console.info('Load Cards: Operation requested.');
  try {
    const credentials = await Auth.currentUserCredentials();
    console.info('Load Decks: Credentials have been obtained.');

    if (!isValidCredentials(credentials)) {
      return {
        success: false,
        errorCode: 'AUTH_INVALID_USER_CREDENTIALS',
        reason: `The fetched credentials are not valid.`,
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
      new ListObjectsCommand({
        Bucket: apiOptions.cardsBucket,
        Prefix: `${credentials.identityId}`,
      }),
      { expiresIn: 15 * 60 }
    );

    console.info('Load Decks: Secure URL have been created.');

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
        errorCode: 'DECKS_LOAD_HTTP_FETCH_ERROR',
        reason: `Error during decks HTTP loading.`,
        extra: {
          response,
          body: await response.text(),
        },
      };
    }

    const result = parse(await response.text());
    const languages = (result?.ListBucketResult?.Contents ?? [])
      .map((r) => r.Key)
      .map((fileName) => fileName.replace(`${credentials.identityId}/`, ''));

    return {
      success: true,
      value: languages,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'DECKS_LOAD_ERROR',
      reason: `Unable to load decks.`,
      extra: e,
    };
  }
};
