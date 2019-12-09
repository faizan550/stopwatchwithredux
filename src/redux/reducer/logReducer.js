import { SPLIT_TIME, RESET_SPLIT_TIME } from '../actions/logActions'

const initialState = {
  splitTimeList: []
}

export const logReducer = (state = initialState, actions) => {
  const { payload, type } = actions
  switch (type) {
    case SPLIT_TIME:
      debugger
      return {
        splitTimeList:
          [...state.splitTimeList,
          {
            actionType: payload.actionType,
            actionTime: payload.actionTime
          }]
      }

    case RESET_SPLIT_TIME:
      return {
        ...initialState
      }
      console.log(state)
    default:
      return {
        ...state
      }
  }
}

export default logReducer;