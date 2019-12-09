import React from 'react';
import '../Buttons/stopWatchButton.css';

const StopWatchButton = (props) => {

  const {
    startStopWatch,
    pauseStopWatch,
    resetStopWatch,
    splitTime,
    timerState,
    stopWatchTime,
    resetSplitTime
  } = props

  return (
    <div>
      {(!timerState) &&
        <button className="startbtn" onClick={startStopWatch}>start</button>}
      {(timerState) &&
        <button className="pausebtn" onClick={() => (pauseStopWatch(), splitTime("Pause", stopWatchTime))}>Pause</button>}
      <button className="splitbtn" disabled={timerState === false} onClick={() => splitTime("Split", stopWatchTime)}>Split</button>
      {(!stopWatchTime) ? <button className="resetbtn" disabled={true}>Reset</button> :
        <button className="resetbtn" disabled={timerState === true} onClick={() => (resetStopWatch(), resetSplitTime())}>Reset</button>}
    </div>
  )
}

export default StopWatchButton