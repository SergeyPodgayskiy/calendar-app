import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  getHours,
  getMinutes,
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

function getWidthInPercent(childRect, parentRect) {
  if (childRect && parentRect) {
    return (childRect.width / parentRect.width) * 100;
  }
}

function convertHourFormat24To12(hour) {
  const convertedHour = hour % 12 || 12;
  const period = hour < 12 ? 'AM' : 'PM';

  return {
    convertedHour,
    period,
  };
}

function get12HourFormatText(date, isShowMinutes = true) {
  if (date) {
    const { convertedHour, period } = convertHourFormat24To12(getHours(date));
    const minutes = getMinutes(date);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${convertedHour}${isShowMinutes && minutes !== 0 ? `:${formattedMinutes}` : ''} ${period}`;
  }
}

export {
  hours,
  weekdayShortNames,
  eachDayOfWeekForDate,
  calculateTimeIndicatorPositionShift,
  convertHourFormat24To12,
  eachWeekOfMonthForDate,
  getWidthInPercent,
  get12HourFormatText,
};
