import { S3Client } from '@aws-sdk/client-s3';
import { S3SyncClient } from 's3-sync-client';
import { getBackupFolder } from './getBackupFolder';

const s3Client = new S3Client({});

const { sync } = new S3SyncClient({ client: s3Client });

export const backupCards = async (): Promise<any> => {
  return sync(
    `s3://${process.env.CARDS_BUCKET}`,
    `s3://${process.env.CARDS_BACKUP_BUCKET}/${getBackupFolder(new Date())}`,
    { del: true }
  );
};
