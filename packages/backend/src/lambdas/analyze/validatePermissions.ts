import { APIGatewayProxyEvent } from 'aws-lambda';
import { get } from 'lodash-es';
import { inspect } from '../../utils/inspect';
import { buildResponse } from '../../utils/buildResponse';

export const validatePermissions = (event: APIGatewayProxyEvent) => {
  const hasPaidGroup = get(
    event,
    'requestContext.authorizer.claims.cognito:groups',
    ''
  )
    .split(',')
    .includes('paid');

  if (!hasPaidGroup) {
    console.log(
      'The event.requestContext.authorizer.claims is missing paid group. event.requestContext.authorizer is:',
      inspect(get(event, 'requestContext.authorizer', {}))
    );

    throw buildResponse({
      statusCode: 401,
      body: JSON.stringify({
        error: 'UNPAID_REQUEST',
      }),
    });
  }
};
