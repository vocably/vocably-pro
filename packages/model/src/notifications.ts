export type NotificationItem = {
  ID: { S: string };
  Sub: { S: string };
  Language: { S: string };
  UTCTime: { S: string };
  SentTimestamp: { N: string };
  IANATimezone: { S: string };
  LocalTime: { S: string };
};

export type GetNotificationTimeResult =
  | {
      exists: true;
      language: string;
      time: string;
    }
  | {
      exists: false;
      language: string;
    };

export type SetNotificationTimePayload = {
  IANATimezone: string;
  localTime: string;
  language: string;
};

export type RecalibrateNotificationsPayload = {
  IANATimezone: string;
};
