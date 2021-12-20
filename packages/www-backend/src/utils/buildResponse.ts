import { APIGatewayProxyResult } from 'aws-lambda';

export const buildResponse = (
  response: Partial<APIGatewayProxyResult>
): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET',
    },
    body: JSON.stringify({ ok: true }),
    ...response,
  };
};
