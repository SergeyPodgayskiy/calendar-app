import { eachDayOfInterval, endOfWeek, getMinutes, startOfWeek } from 'date-fns';

const hours = generateArrayOfHours();

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

  const weekDays = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return weekDays;
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

export { hours, eachDayOfWeekForDate, calculateTimeIndicatorPositionShift, convertHourFormat24To12 };
