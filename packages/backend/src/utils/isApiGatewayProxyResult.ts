import { APIGatewayProxyResult } from 'aws-lambda';

export const isApiGatewayProxyResult = (
  error: any
): error is APIGatewayProxyResult => {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  return error?.statusCode && error?.body;
};
