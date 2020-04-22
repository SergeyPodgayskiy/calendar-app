import localStorageApi from '../utils/localStorageApi';
import { EVENTS } from '../constants/constants';

// Action Types
const EVENTS_FETCHING = 'events:fetching';
const EVENTS_FETCH_SUCCESS = 'events:fetch.success';
const EVENTS_FETCH_FAIL = 'events:fetch.fail';
const EVENTS_PERSIST_SUCCESS = 'events:persist.success';
const EVENTS_PERSIST_FAIL = 'events:persist.failure';
const EVENT_FORM_TOGGLE = 'eventForm:toggle';

// Initial State
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isExpandedEventForm: false,
};

// Reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EVENTS_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case EVENTS_FETCH_SUCCESS:
      return {
        ...state,
        items: [...payload],
        isLoading: false,
        error: null,
      };
    case EVENTS_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case EVENTS_PERSIST_SUCCESS:
      return {
        ...state,
        items: [...payload],
        isLoading: false,
        error: null,
      };
    case EVENTS_PERSIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case EVENT_FORM_TOGGLE: {
      return {
        ...state,
        isExpandedEventForm: !state.isExpandedEventForm,
      };
    }
    default:
      return state;
  }
}

// Actions
export function fetchEvents() {
  return async dispatch => {
    dispatch({ type: EVENTS_FETCHING });
    try {
      const events = await localStorageApi.fetchAsync(EVENTS);
      dispatch({ type: EVENTS_FETCH_SUCCESS, payload: events ? events : [] });
      return events;
    } catch (error) {
      dispatch({ type: EVENTS_FETCH_FAIL, payload: new Error('Failed to get your events. Please refresh the page') });
      console.error(error);
    }
  };
}

export function persistEvent(event) {
  return async dispatch => {
    try {
      const eventsObj = localStorageApi.get(EVENTS);
      let eventsArr = eventsObj ? [...eventsObj, event] : [event];
      eventsArr = await localStorageApi.persistAsync(EVENTS, eventsArr);
      dispatch({ type: EVENTS_PERSIST_SUCCESS, payload: eventsArr });
    } catch (error) {
      dispatch({ type: EVENTS_PERSIST_FAIL, payload: new Error('Failed to save your events. Please try again') });
      console.error(error);
    }
  };
}

export function deleteEvent(eventId) {
  return async dispatch => {
    try {
      const eventsArr = [...localStorageApi.get(EVENTS)];

      if (eventsArr?.length) {
        const updatedEvents = eventsArr.filter(event => event.id !== eventId);
        dispatch({ type: EVENTS_PERSIST_SUCCESS, payload: updatedEvents });
        await localStorageApi.persistAsync(EVENTS, updatedEvents);
        return eventId;
      }
    } catch (error) {
      dispatch({ type: EVENTS_PERSIST_FAIL, payload: new Error('Failed to delete the event. Please try again') });
      console.error(error);
    }
  };
}

export function editEvent(updatedEvent) {}

export function toggleEventForm() {
  return dispatch => {
    dispatch({ type: EVENT_FORM_TOGGLE });
  };
}
