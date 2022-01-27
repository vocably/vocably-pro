import { buildDueDate } from './dueDate';

describe('dueDate', function () {
  it('should return proper due date for the zero interval', () => {
    console.log(buildDueDate(-1));

    const dueDate = new Date(buildDueDate(0));
    const now = new Date();

    expect(dueDate.getFullYear()).toEqual(now.getFullYear());
    expect(dueDate.getMonth()).toEqual(now.getMonth());
    expect(dueDate.getDate()).toEqual(now.getDate());
    expect(dueDate.getHours()).toEqual(0);
    expect(dueDate.getMinutes()).toEqual(0);
    expect(dueDate.getSeconds()).toEqual(0);
  });
});
