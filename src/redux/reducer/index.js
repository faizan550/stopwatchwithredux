import { combineReducers } from 'redux';
import timerReducer from './timerReducer';
import logReducer from './logReducer'

const allReducers = combineReducers({
  timerReducer: timerReducer,
  logReducer : logReducer
});

export default allReducers;