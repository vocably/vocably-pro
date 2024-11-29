import {
  GetObjectCommand,
  GetObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import {
  defaultUserMetadata,
  mergeUserMetadata,
  PartialUserMetadata,
  Result,
  UserMetadata,
} from '@vocably/model';
import { Readable } from 'node:stream';

const s3Client = new S3Client({ region: process.env.AWS_REGION });

export const nodeFetchUserMetadata = async (
  sub: string
): Promise<Result<UserMetadata>> => {
  const command = new GetObjectCommand({
    Bucket: process.env.USER_FILES_BUCKET,
    Key: `${sub}/files/metadata.json`,
  });
  let response: GetObjectCommandOutput;

  try {
    response = await s3Client.send(command);
  } catch (e) {
    if (e.Code === 'NoSuchKey') {
      return {
        success: true,
        value: defaultUserMetadata,
      };
    }

    return {
      success: false,
      errorCode: 'USER_METADATA_FETCH_ERROR',
      reason: `Unable to fetch user metadata for ${sub}`,
      extra: e,
    };
  }

  if (!response.Body) {
    return {
      success: true,
      value: defaultUserMetadata,
    };
  }

  const stream = response.Body as Readable;
  const chunks: Buffer[] = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  return {
    success: true,
    value: JSON.parse(Buffer.concat(chunks).toString('utf-8')),
  };
};

export const nodeSaveUserMetadata = async (
  sub: string,
  partialUserMetadata: PartialUserMetadata
): Promise<Result<null>> => {
  const userMetadataResult = await nodeFetchUserMetadata(sub);
  if (userMetadataResult.success === false) {
    return userMetadataResult;
  }

  const userMetadata = mergeUserMetadata(
    userMetadataResult.value,
    partialUserMetadata
  );

  try {
    const command = new PutObjectCommand({
      Bucket: process.env.USER_FILES_BUCKET,
      Key: `${sub}/files/metadata.json`,
      Body: JSON.stringify(userMetadata),
    });
    await s3Client.send(command);
    return {
      success: true,
      value: null,
    };
  } catch (error) {
    return {
      success: false,
      errorCode: 'USER_METADATA_PUT_ERROR',
      reason: `Unable to save user metadata for ${sub}`,
      extra: error,
    };
  }
};
