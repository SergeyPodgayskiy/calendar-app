import viewTypes, { DEFAULT_CALENDAR_VIEW_TYPE } from '../utils/dateViewTypes';
import { add, sub, set, getHours, getMinutes, getSeconds, getMilliseconds } from 'date-fns';

// Action Types
const CALENDAR_SET_CURRENT_DATE = 'calendar:setCurrentDate';
const CALENDAR_SET_SELECTED_DATE = 'calendar:setSelectedDate';
const CALENDAR_SET_VIEW_TYPE = 'calendar:setViewType';

// Initial state
const currentDate = new Date();
const initialState = {
  currentDate: currentDate,
  selectedDate: currentDate,
  viewType: DEFAULT_CALENDAR_VIEW_TYPE,
};

// Reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CALENDAR_SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: set(payload.selectedDate, {
          hours: getHours(state.currentDate),
          minutes: getMinutes(state.currentDate),
          seconds: getSeconds(state.currentDate),
          milliseconds: getMilliseconds(state.currentDate),
        }),
      };
    case CALENDAR_SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: payload.currentDate,
      };
    case CALENDAR_SET_VIEW_TYPE:
      return {
        ...state,
        viewType: payload.viewType,
      };
    default:
      return state;
  }
}

// Actions
export function setViewType(viewType) {
  return dispatch => {
    dispatch({ type: CALENDAR_SET_VIEW_TYPE, payload: { viewType } });
  };
}

export function setSelectedDate(date) {
  return dispatch => {
    dispatch({ type: CALENDAR_SET_SELECTED_DATE, payload: { selectedDate: date } });
  };
}

export function setNextDatePeriod(currentSelectedDate, viewType) {
  const dateToSelect = add(currentSelectedDate, getDateDuration(viewType));
  return setSelectedDate(dateToSelect);
}

export function setPrevDatePeriod(currentSelectedDate, viewType) {
  const dateToSelect = sub(currentSelectedDate, getDateDuration(viewType));
  return setSelectedDate(dateToSelect);
}

export function setCurrentDate(currentDate) {
  return dispatch => {
    dispatch({ type: CALENDAR_SET_CURRENT_DATE, payload: { currentDate } });
  };
}

// Helper functions
function getDateDuration(viewType) {
  switch (viewType) {
    case viewTypes.day: {
      return { days: 1 };
    }
    case viewTypes.week: {
      return { weeks: 1 };
    }
    case viewTypes.month: {
      return { months: 1 };
    }
    case viewTypes.year: {
      return { years: 1 };
    }
    default:
      return { weeks: 1 };
  }
}
