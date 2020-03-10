import { eachDayOfInterval, endOfWeek, getMinutes, startOfWeek } from 'date-fns';

const hours = generateArrayOfHours();

function generateArrayOfHours() {
  let hours = [];

  for (let hour = 0; hour < 24; hour++) {
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

function calculateTimeIndicatorPositionShift(htmlElement, currentDate) {
  console.log('htmlEl', htmlElement);
  console.log('currentDate', currentDate);
  if (htmlElement && currentDate) {
    const DOMRect = htmlElement.getClientRects()[0];
    return (DOMRect.height / 60) * getMinutes(currentDate);
  }
}

export { hours, eachDayOfWeekForDate, calculateTimeIndicatorPositionShift };
