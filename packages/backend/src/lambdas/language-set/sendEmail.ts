import { isFacility, Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { fetchUserMetadata } from '../../utils/userMetadata';

export const sendEmail = async (
  event: APIGatewayProxyEvent
): Promise<Result<null>> => {
  const { targetLanguage, facility } = JSON.parse(event.body);
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub = claims['sub'] ?? '';
  const email = claims['email'] ?? '';

  if (!targetLanguage || !sub || !email || !isFacility(facility)) {
    return {
      success: false,
      errorCode: 'LANGUAGE_SET_INSUFFICIENT_PARAMS',
      reason: `Unable to process targetLanguage='${targetLanguage}, sub='${sub}', email='${email}', facility='${facility}'`,
    };
  }

  const userMetadataResult = await fetchUserMetadata(sub);

  if (userMetadataResult.success === false) {
    return userMetadataResult;
  }

  return {
    success: true,
    value: null,
  };
};
