import { buildDueDate } from './dueDate';

describe('dueDate', function () {
  it('should return proper due date for the zero interval', () => {
    const dueDate = new Date(buildDueDate(0));
    const now = new Date();

    expect(dueDate.getUTCFullYear()).toEqual(now.getUTCFullYear());
    expect(dueDate.getUTCMonth()).toEqual(now.getUTCMonth());
    expect(dueDate.getUTCDate()).toEqual(now.getUTCDate());
    expect(dueDate.getUTCHours()).toEqual(0);
    expect(dueDate.getUTCMinutes()).toEqual(0);
    expect(dueDate.getUTCSeconds()).toEqual(0);
  });
});
