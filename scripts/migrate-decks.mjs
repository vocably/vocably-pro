import 'zx/globals';
import pkg from 'aws-sdk';
import { mapKeys } from 'lodash-es';
const { S3 } = pkg;

const bucket = 'vocably-dev-cards';
const s3Client = new S3();

const objects = (
  await s3Client
    .listObjects({
      Bucket: bucket,
    })
    .promise()
).Contents;

for (let object of objects) {
  const deck = JSON.parse(
    (
      await s3Client
        .getObject({
          Bucket: bucket,
          Key: object.Key,
        })
        .promise()
    ).Body.toString()
  );

  console.log(deck);

  for (let card of deck.cards) {
    card.data = {
      translation: '',
      partOfSpeech: '',
      ...mapKeys(card.data, (value, key) => {
        switch (key) {
          case 'sideA':
            return 'source';
          case 'sideB':
            return 'definition';
          default:
            return key;
        }
      }),
    };
  }

  await s3Client
    .putObject({
      Bucket: bucket,
      Key: object.Key,
      Body: JSON.stringify(deck),
      ContentType: 'application/json',
    })
    .promise();
}
