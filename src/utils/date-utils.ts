export const dayOfTheWeek = (stringDate: string): string => {
  const date = new Date(stringDate);
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  return days[date.getUTCDay()];
};
