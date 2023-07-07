import { APIGatewayProxyEvent } from 'aws-lambda';
import { lastValueFrom, of, switchMap, tap } from 'rxjs';
import { saveFeedback } from './saveFeedback';

export const userFeedback = async (event: APIGatewayProxyEvent): Promise<any> =>
  lastValueFrom(of(event).pipe(tap(console.log), switchMap(saveFeedback)));

exports.userFeedback = userFeedback;
