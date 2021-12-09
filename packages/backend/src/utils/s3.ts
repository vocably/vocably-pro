import { S3 } from 'aws-sdk';
import { Result } from './result';
const s3Client = new S3();

export const buildSaveFunction =
  <D>(bucket: string) =>
  async (key: string, data: D): Promise<Result<undefined>> => {
    try {
      await s3Client
        .putObject({
          Bucket: bucket,
          Key: key,
          ContentType: 'application/json; charset=utf-8',
          Body: JSON.stringify(data),
        })
        .promise();

      return {
        success: true,
        value: undefined,
      };
    } catch (e) {
      return {
        success: false,
        errorCode: 'S3_SAVE_ERROR',
        reason: `Unable to save object with the key ${key} into s3 bucket '${bucket}'`,
        extra: e,
      };
    }
  };

export const buildLoadFunction =
  <R>(bucket: string) =>
  async (key: string): Promise<Result<R>> => {
    try {
      const result = await s3Client
        .getObject({
          Bucket: bucket,
          Key: key,
        })
        .promise();

      return {
        success: true,
        value: JSON.parse(result.Body.toString()) as R,
      };
    } catch (e) {
      if (typeof e === 'object' && e['code'] === 'NoSuchKey') {
        return {
          success: false,
          errorCode: 'S3_LOAD_MISSING_KEY',
          reason: `The key ${key} is missing in s3 bucket '${bucket}'.`,
          extra: e,
        };
      }

      return {
        success: false,
        errorCode: 'S3_LOAD_ERROR',
        reason: `Unable to load object with the key ${key} from s3 bucket '${bucket}' due to an error.`,
        extra: e,
      };
    }
  };

export const buildRemoveFunction =
  (bucket: string) =>
  async (key: string): Promise<Result<null>> => {
    try {
      const result = await s3Client
        .deleteObject({
          Bucket: bucket,
          Key: key,
        })
        .promise();

      return {
        success: true,
        value: null,
      };
    } catch (e) {
      return {
        success: false,
        errorCode: 'S3_REMOVE_ERROR',
        reason: `Unable to remove object with the key ${key} from s3 bucket '${bucket}'`,
        extra: e,
      };
    }
  };
