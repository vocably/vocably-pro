import { jest } from '@jest/globals';
import {
  GetUserEndpointsCommand,
  SendMessagesCommand,
} from '@aws-sdk/client-pinpoint';
import {
  deletePushToken,
  getPushTokenOwner,
  getPushTokensBySub,
} from '../../utils/pushTokens';
import { sendPushMessage } from './sendPushMessage';

const mockSend = jest.fn<(command: any) => Promise<any>>();

jest.mock('@aws-sdk/client-pinpoint', () => {
  const actual = jest.requireActual<object>('@aws-sdk/client-pinpoint');
  return {
    ...actual,
    PinpointClient: jest.fn().mockImplementation(() => ({
      send: (command: any) => mockSend(command),
    })),
  };
});

jest.mock('../../utils/pushTokens', () => ({
  getPushTokensBySub: jest.fn(),
  getPushTokenOwner: jest.fn(),
  deletePushToken: jest.fn(),
}));

const mockedGetPushTokensBySub: any = getPushTokensBySub;
const mockedGetPushTokenOwner: any = getPushTokenOwner;
const mockedDeletePushToken: any = deletePushToken;

const body = { Title: 'Title', Body: 'Body' };

const endpoint = (address: string, extra: Record<string, any> = {}) => ({
  Address: address,
  ChannelType: 'APNS',
  EndpointStatus: 'ACTIVE',
  OptOut: 'NONE',
  ...extra,
});

const mockPinpoint = ({
  endpoints,
  results = {},
}: {
  endpoints: any[] | Error;
  results?: Record<string, any>;
}) => {
  mockSend.mockImplementation(async (command: any) => {
    if (command instanceof GetUserEndpointsCommand) {
      if (endpoints instanceof Error) {
        throw endpoints;
      }
      return { EndpointsResponse: { Item: endpoints } };
    }

    if (command instanceof SendMessagesCommand) {
      return { MessageResponse: { Result: results } };
    }

    throw new Error('Unexpected command');
  });
};

const sentAddresses = () =>
  mockSend.mock.calls
    .map(([command]) => command as any)
    .filter((command) => command instanceof SendMessagesCommand)
    .map((command) => command.input.MessageRequest?.Addresses);

describe('sendPushMessage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedGetPushTokensBySub.mockResolvedValue({ success: true, value: [] });
    mockedGetPushTokenOwner.mockResolvedValue({
      success: true,
      value: undefined,
    });
    mockedDeletePushToken.mockResolvedValue({ success: true, value: null });
  });

  it('sends to legacy endpoints when no tokens are stored', async () => {
    mockPinpoint({ endpoints: [endpoint('legacy-token')] });

    const result = await sendPushMessage('sub', body);

    expect(result.success).toBe(true);
    expect(sentAddresses()).toEqual([
      { 'legacy-token': { ChannelType: 'APNS' } },
    ]);
  });

  it('sends once when the address is both stored and a legacy endpoint', async () => {
    mockedGetPushTokensBySub.mockResolvedValue({
      success: true,
      value: [{ token: 'token', sub: 'sub', channelType: 'APNS' }],
    });
    mockPinpoint({ endpoints: [endpoint('token')] });

    await sendPushMessage('sub', body);

    expect(sentAddresses()).toEqual([{ token: { ChannelType: 'APNS' } }]);
  });

  it('sends to stored tokens when endpoints are unavailable', async () => {
    mockedGetPushTokensBySub.mockResolvedValue({
      success: true,
      value: [{ token: 'token', sub: 'sub', channelType: 'GCM' }],
    });
    mockPinpoint({ endpoints: new Error('Pinpoint is gone') });

    const result = await sendPushMessage('sub', body);

    expect(result.success).toBe(true);
    expect(sentAddresses()).toEqual([{ token: { ChannelType: 'GCM' } }]);
  });

  it('skips legacy endpoints owned by another user', async () => {
    mockedGetPushTokenOwner.mockResolvedValue({
      success: true,
      value: 'another-sub',
    });
    mockPinpoint({ endpoints: [endpoint('legacy-token')] });

    await sendPushMessage('sub', body);

    expect(sentAddresses()).toEqual([]);
  });

  it('skips inactive and opted out legacy endpoints', async () => {
    mockPinpoint({
      endpoints: [
        endpoint('inactive', { EndpointStatus: 'INACTIVE' }),
        endpoint('opted-out', { OptOut: 'ALL' }),
        endpoint('email', { ChannelType: 'EMAIL' }),
      ],
    });

    await sendPushMessage('sub', body);

    expect(sentAddresses()).toEqual([]);
  });

  it('deletes stale tokens', async () => {
    mockedGetPushTokensBySub.mockResolvedValue({
      success: true,
      value: [
        { token: 'stale', sub: 'sub', channelType: 'APNS' },
        { token: 'fresh', sub: 'sub', channelType: 'APNS' },
      ],
    });
    mockPinpoint({
      endpoints: [],
      results: {
        stale: { DeliveryStatus: 'PERMANENT_FAILURE', StatusCode: 410 },
        fresh: { DeliveryStatus: 'SUCCESSFUL', StatusCode: 200 },
      },
    });

    await sendPushMessage('sub', body);

    expect(mockedDeletePushToken).toHaveBeenCalledTimes(1);
    expect(mockedDeletePushToken).toHaveBeenCalledWith('stale');
  });
});
