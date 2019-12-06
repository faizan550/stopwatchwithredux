import { RESET_TIMER, START_TIMER, STOP_TIMER } from '../actions/timerActions';

const initialState = {
  timertime: 0,
  timerState: false
};

const timerReducer = (state = initialState, actions) => {
  const { payload, type } = actions
  switch (type) {
    case START_TIMER:
      return {
        ...state,
        timertime: payload,
        timerState: true
      };

    case STOP_TIMER:
      return {
        ...state,
        timerState: false
      };

    case RESET_TIMER:
      return {
        ...initialState
      };

    default:
      return {
        ...state
      }
  }
}

export default timerReducer;