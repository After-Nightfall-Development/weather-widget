import { dayOfTheWeek } from './date-utils';

describe('date util', () => {
  it('should hand back Wed', () => {
    const day = dayOfTheWeek('2021-02-10');

    expect(day).toEqual('Wed');
  });

  it('should hand back Wed', () => {
    const day = dayOfTheWeek('2021-02-11');

    expect(day).toEqual('Thurs');
  });
});
