import { SPLIT_TIME } from '../actions/logActions'
import { RESET_SPLIT_TIME } from '../actions/logActions'

const initialState = {
  logEntry: []
}


export const logReducer = (state = initialState, actions) => {
  const { payload, type } = actions
  switch (type) {
    case SPLIT_TIME:
      return {
        ...state,
        logEntry:
          [...state.logEntry,
          {
            actionType: payload.actionType,
            actionTime: payload.actionTime
          }]
      }
    case RESET_SPLIT_TIME:
      return {
        ...initialState
      }
    default:
      return {
        ...state
      }
  }
}

export default logReducer;