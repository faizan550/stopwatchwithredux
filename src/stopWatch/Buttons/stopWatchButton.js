import { splitTime } from '../../redux/actions/logActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react';
import '../Buttons/stopWatchButton.css'

const StopWatchButton = (props) => {

  const {
    startTimer,
    stopTheTimer,
    resetTheTimer,
    timertime,
    splitTime,
    timerState
  } = props

  return (
    <div>
      {(timerState === false) &&
        <button className="startbtn" onClick={() => startTimer()}>start</button>}
      {(timerState === true) &&
        <button className="pausebtn" onClick={() => (stopTheTimer(), splitTime('Pause', timertime))}>Pause</button>}
      <button className="splitbtn" disabled={timerState === false} onClick={() => splitTime('Split', timertime)}>Split</button>
      {(timertime === 0) ? <button className="resetbtn" disabled={true}>Reset</button> :
        <button className="resetbtn" disabled={timerState === true} onClick={() => resetTheTimer()}>Reset</button>}
    </div>
  )
}

const mapStateToProps = ({ timerReducer: { timertime, timerState } }) => ({
  timertime, timerState
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      splitTime
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchButton)