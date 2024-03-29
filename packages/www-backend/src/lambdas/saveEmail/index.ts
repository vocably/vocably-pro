import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { nanoid } from 'nanoid';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
const ddb = new DynamoDB.DocumentClient();

export const saveEmail = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      mergeMap(async () => {
        const body = JSON.parse(event.body);
        await ddb
          .put({
            TableName: process.env.EMAILS_TABLE,
            Item: {
              id: nanoid(7),
              email: body.email,
            },
          })
          .promise();

        return buildResponse({
          body: JSON.stringify({ success: true }),
        });
      }),
      catchError(buildErrorResponse)
    )
  );

exports.saveEmail = saveEmail;
