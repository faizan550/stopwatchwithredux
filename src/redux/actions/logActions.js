export const SPLIT_TIME = 'SPLIT_TIME';
export const RESET_SPLIT_TIME = 'RESET_SPLIT_TIME';

export const splitTime = (actionType, actionTime) => {
  return {
    type: SPLIT_TIME,
    payload: { actionType, actionTime }
  }
}

export const resetSplitTime = () => {
  return{
    type: RESET_SPLIT_TIME
  }
}