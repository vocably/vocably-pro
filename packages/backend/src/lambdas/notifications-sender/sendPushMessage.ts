import {
  AddressConfiguration,
  ChannelType,
  GetUserEndpointsCommand,
  PinpointClient,
  SendMessagesCommand,
} from '@aws-sdk/client-pinpoint';
import { PushChannelType, Result } from '@vocably/model';
import { inspect } from '@vocably/node-sulna';
import {
  deletePushToken,
  getPushTokenOwner,
  getPushTokensBySub,
} from '../../utils/pushTokens';
import { NotificationBody } from './getBody';

const pinpointClient = new PinpointClient({});

const pushChannelTypes: string[] = [
  'APNS',
  'APNS_SANDBOX',
  'GCM',
] satisfies PushChannelType[];

type Address = {
  address: string;
  channelType: PushChannelType;
};

// Pinpoint endpoints are being shut down on Oct 30, 2026. Until then,
// users on older app versions are only reachable through the endpoints
// that Amplify registered for them. Once the API is gone the call fails
// and only the stored tokens are used.
// TODO: remove after Oct 30, 2026.
const getLegacyAddresses = async (sub: string): Promise<Address[]> => {
  try {
    const result = await pinpointClient.send(
      new GetUserEndpointsCommand({
        ApplicationId: process.env.MOBILE_APP_PINPOINT_PROJECT_ID,
        UserId: sub,
      })
    );

    return (result.EndpointsResponse?.Item ?? [])
      .filter(
        (endpoint) =>
          endpoint.Address &&
          endpoint.ChannelType &&
          pushChannelTypes.includes(endpoint.ChannelType) &&
          endpoint.EndpointStatus === 'ACTIVE' &&
          endpoint.OptOut !== 'ALL'
      )
      .map((endpoint) => ({
        address: endpoint.Address as string,
        channelType: endpoint.ChannelType as PushChannelType,
      }));
  } catch (error) {
    console.log('Unable to get legacy Pinpoint endpoints', inspect(error));
    return [];
  }
};

const getAddresses = async (sub: string): Promise<Result<Address[]>> => {
  const storedTokensResult = await getPushTokensBySub(sub);
  if (storedTokensResult.success === false) {
    return storedTokensResult;
  }

  // Both sources contain raw APNs/FCM device tokens, so the address
  // is used as a key to send exactly one message per device.
  const addresses = new Map<string, Address>();
  for (const storedToken of storedTokensResult.value) {
    addresses.set(storedToken.token, {
      address: storedToken.token,
      channelType: storedToken.channelType,
    });
  }

  for (const legacyAddress of await getLegacyAddresses(sub)) {
    if (addresses.has(legacyAddress.address)) {
      continue;
    }

    // The device has been registered by another user.
    const ownerResult = await getPushTokenOwner(legacyAddress.address);
    if (ownerResult.success === false) {
      console.error('Unable to get push token owner', ownerResult);
      continue;
    }
    if (ownerResult.value !== undefined && ownerResult.value !== sub) {
      continue;
    }

    addresses.set(legacyAddress.address, legacyAddress);
  }

  return {
    success: true,
    value: [...addresses.values()],
  };
};

export const sendPushMessage = async (
  sub: string,
  body: NotificationBody
): Promise<Result<any>> => {
  const addressesResult = await getAddresses(sub);
  if (addressesResult.success === false) {
    return addressesResult;
  }

  const addresses = addressesResult.value;

  if (addresses.length === 0) {
    console.log('No push addresses found for the user', sub);
    return {
      success: true,
      value: null,
    };
  }

  try {
    const result = await pinpointClient.send(
      new SendMessagesCommand({
        ApplicationId: process.env.MOBILE_APP_PINPOINT_PROJECT_ID,
        MessageRequest: {
          Addresses: Object.fromEntries(
            addresses.map(({ address, channelType }) => [
              address,
              { ChannelType: channelType as ChannelType },
            ])
          ) as Record<string, AddressConfiguration>,
          MessageConfiguration: {
            DefaultPushNotificationMessage: body,
            APNSMessage: {
              Badge: 1,
            },
          },
        },
      })
    );
    console.log('Push sent result', inspect(result));

    const deliveryResults = result.MessageResponse?.Result ?? {};
    for (const [address, deliveryResult] of Object.entries(deliveryResults)) {
      const isStale =
        deliveryResult.DeliveryStatus === 'PERMANENT_FAILURE' ||
        deliveryResult.StatusCode === 404 ||
        deliveryResult.StatusCode === 410;

      if (!isStale) {
        continue;
      }

      console.log('Deleting stale push token', {
        sub,
        deliveryResult,
      });
      const deleteResult = await deletePushToken(address);
      if (deleteResult.success === false) {
        console.error('Unable to delete stale push token', deleteResult);
      }
    }

    return {
      success: true,
      value: null,
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      success: false,
      errorCode: 'NOTIFICATIONS_PUSH_ERROR',
      reason: 'Error sending message push notification message.',
      extra: error,
    };
  }
};
