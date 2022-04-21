import { S3 } from 'aws-sdk';
import { LanguageDeck } from '@vocably/model';

export const saveDeck = async (
  deck: LanguageDeck,
  userSub = process.env.SUB
) => {
  console.log('deck', deck);
  const bucket = process.env.DECKS_BUCKET;
  const s3Client = new S3();

  await s3Client
    .putObject({
      Bucket: bucket,
      Key: `${userSub}/languages/${deck.language}`,
      Body: JSON.stringify(deck),
      ContentType: 'application/json',
    })
    .promise();

  return null;
};
