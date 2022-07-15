import { byDueDate } from './byDueDate';

describe('byDueDate', function () {
  it('should put the smaller date first', () => {
    expect(
      byDueDate(0)({ data: { dueDate: 3 } }, { data: { dueDate: 2 } })
    ).toBeGreaterThan(0);
  });

  it('should prioritize the todays date', () => {
    expect(
      byDueDate(3)({ data: { dueDate: 3 } }, { data: { dueDate: 2 } })
    ).toBeLessThan(0);

    expect(
      byDueDate(3)({ data: { dueDate: 2 } }, { data: { dueDate: 3 } })
    ).toBeGreaterThan(0);

    expect(
      byDueDate(3)({ data: { dueDate: 3 } }, { data: { dueDate: 3 } })
    ).toEqual(0);
  });
});
