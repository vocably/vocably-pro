import { BulkAnalysisPayload, isBulkAnalysisPayload } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const extractPayload = (
  event: APIGatewayProxyEvent
): BulkAnalysisPayload => {
  const payload = JSON.parse(event.body);

  if (!isBulkAnalysisPayload(payload)) {
    throw {
      success: false,
      errorCode: 'MALFORMED_PAYLOAD',
      reason: 'Incorrect payload',
      extra: { payload },
    };
  }

  if (payload.sources.length > 100) {
    throw {
      success: false,
      errorCode: 'MALFORMED_PAYLOAD',
      reason: 'Payload is too big',
      extra: { payload },
    };
  }

  return payload;
};
