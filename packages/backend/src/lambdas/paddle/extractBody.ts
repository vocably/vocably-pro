import { APIGatewayProxyEvent } from 'aws-lambda';
import { URLSearchParams } from 'url';
import { PaddleRawBody } from './types';

export const extractBody = (event: APIGatewayProxyEvent): PaddleRawBody => {
  const searchParams = new URLSearchParams(event.body);
  return Object.fromEntries(searchParams);
};
