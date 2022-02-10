const { S3 } = require('aws-sdk');

const clearDecks = async (userSub = process.env.SUB) => {
  const bucket = process.env.DECKS_BUCKET;
  const s3Client = new S3();

  const response = await s3Client
    .listObjects({
      Bucket: bucket,
      Prefix: `${userSub}/`,
    })
    .promise();

  for (let object of response.Contents) {
    await s3Client
      .deleteObject({
        Bucket: bucket,
        Key: object.Key,
      })
      .promise();
  }

  return null;
};

module.exports = {
  clearDecks,
};
