import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import calendarReducer from './modules/calendar';

const rootReducer = combineReducers({
  calendarReducer,
});

console.log('rootRed', createStore);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE) || compose;

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeEnhancers));

export default store;
