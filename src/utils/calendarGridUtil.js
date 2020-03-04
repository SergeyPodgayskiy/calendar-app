import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';

const AM_HOUR_PERIOD = 'AM';
const PM_HOUR_PERIOD = 'PM';

export const hours = [
  {
    hour: 12,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 1,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 2,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 3,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 4,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 5,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 6,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 7,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 8,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 9,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 10,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 11,
    period: AM_HOUR_PERIOD,
  },
  {
    hour: 12,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 1,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 2,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 3,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 4,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 5,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 6,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 7,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 8,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 9,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 10,
    period: PM_HOUR_PERIOD,
  },
  {
    hour: 11,
    period: PM_HOUR_PERIOD,
  },
];

export function eachDayOfWeekForDate(date) {
  const startDayOfWeek = startOfWeek(date);
  const endDayOfWeek = endOfWeek(date);

  const weekDays = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return weekDays;
}
