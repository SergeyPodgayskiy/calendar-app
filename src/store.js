import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import calendarReducer from './modules/calendar';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeEnhancers));

export default store;
