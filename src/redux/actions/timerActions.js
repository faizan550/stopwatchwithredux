export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const RESET_TIMER = "RESET_TIMER";

let timer = 0;
let startTime = 0;

export const startStopWatch = () => (dispatch, getState) => {

  const { stopWatchTime } = getState().timerReducer;
  startTime = Date.now() - stopWatchTime;

  timer = setInterval(() => {
    console.log(timer)
    dispatch({
      type: START_TIMER,
      payload: Date.now() - startTime
    })
  }, 1)
}

export const pauseStopWatch = () => (dispatch, getState) => {
  clearInterval(timer)
  return dispatch({
    type: STOP_TIMER,
  })
}

export const resetStopWatch = () => {
  return {
    type: RESET_TIMER
  }
}