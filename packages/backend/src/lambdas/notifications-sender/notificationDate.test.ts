import { roundNotificationDate } from './notificationDate';

describe('notificationDate', () => {
  it('properly rounds minutes', () => {
    const date = new Date();
    let roundedRes: Date;

    date.setMinutes(11);
    roundedRes = roundNotificationDate(date);
    expect(roundedRes.getMinutes()).toBe(0);

    date.setMinutes(15);
    roundedRes = roundNotificationDate(date);
    expect(roundedRes.getMinutes()).toBe(15);

    date.setMinutes(17);
    roundedRes = roundNotificationDate(date);
    expect(roundedRes.getMinutes()).toBe(15);

    date.setMinutes(31);
    roundedRes = roundNotificationDate(date);
    expect(roundedRes.getMinutes()).toBe(30);

    date.setMinutes(56);
    roundedRes = roundNotificationDate(date);
    expect(roundedRes.getMinutes()).toBe(45);

    date.setMinutes(45);
    roundedRes = roundNotificationDate(date);
    expect(roundedRes.getMinutes()).toBe(45);
  });
});
