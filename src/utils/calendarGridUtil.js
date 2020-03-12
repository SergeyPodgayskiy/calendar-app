import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getMinutes,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

const hours = generateArrayOfHours();

const weekdayShortNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SUT'];

function generateArrayOfHours() {
  let hours = [];

  for (let hour = 1; hour <= 24; hour++) {
    hours.push(hour);
  }

  return hours;
}

function eachDayOfWeekForDate(date) {
  const startDayOfWeek = startOfWeek(date);
  const endDayOfWeek = endOfWeek(date);

  return eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });
}

function eachWeekOfMonthForDate(date) {
  const startDayOfMonth = startOfMonth(date);
  const endDayOfMonth = endOfMonth(date);

  return eachWeekOfInterval({
    start: startDayOfMonth,
    end: endDayOfMonth,
  });
}

function calculateTimeIndicatorPositionShift(htmlElementRect, currentDate) {
  console.debug('elementRect', htmlElementRect);
  if (htmlElementRect && currentDate) {
    return (htmlElementRect.height / 60) * getMinutes(currentDate);
  }
}

function convertHourFormat24To12(hour) {
  const convertedHour = hour % 12 || 12;
  const period = hour < 12 ? 'AM' : 'PM';

  return `${convertedHour} ${period}`;
}

export {
  hours,
  weekdayShortNames,
  eachDayOfWeekForDate,
  calculateTimeIndicatorPositionShift,
  convertHourFormat24To12,
  eachWeekOfMonthForDate,
};
