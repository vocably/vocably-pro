import 'zx/globals';
import { config } from 'dotenv-flow';

config();

const customAttributes = [
  'status',
  'update_url',
  'cancel_url',
  'next_bill_date',
  'cancellation_date',
  'unit_price',
  'product_id',
]
  .map((attribute) => `"custom:${attribute}"`)
  .join(' ');

const command = `aws cognito-idp admin-delete-user-attributes --user-pool-id ${process.env.USER_POOL_ID} --username ${process.env.USERNAME} --region ${process.env.AWS_REGION} --user-attribute-names ${customAttributes}`;

await $([command]);
