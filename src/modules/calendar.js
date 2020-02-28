import { DEFAULT_CALENDAR_VIEW_TYPE } from '../utils/dateViewTypes';

// Action Types
const CALENDAR_SET_CURRENT_DATE = 'calendar:setSelectedDate';

// Initial state
const currentDate = new Date();
const initialState = {
  currentDate: currentDate,
  selectedDate: currentDate,
  calendarViewType: DEFAULT_CALENDAR_VIEW_TYPE,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_SET_CURRENT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
}

// Actions
