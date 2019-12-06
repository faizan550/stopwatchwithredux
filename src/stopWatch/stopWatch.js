import React, { useRef } from "react";
import { startTimer, resetTimer, stopTimer } from '../redux/actions/timerActions'
import { resetSplitTime } from '../redux/actions/logActions'
import { bindActionCreators } from "redux";
import Buttons from './Buttons/stopWatchButton'
import { connect } from 'react-redux';
import StopWatchTime from "./Timer/stopWatchTime";
import LogTable from './LogTable/logTable';
import SplitTime from './SplitTimer/splitTime';
import '../stopWatch/stopWatch.css';


let timer = 0
const StopWatch = (props) => {

  const {
    startTimer,
    resetTimer,
    stopTimer,
    resetSplitTime
  } = props

  const timerStartRef = useRef(0);

  const startTheTimer = () => {
    const { timertime } = props;
    timerStartRef.current = Date.now() - timertime;
    timer = setInterval(() => {
      startTimer(Date.now() - timerStartRef.current);
    }, 1);
  };

  const stopTheTimer = () => {
    clearInterval(timer);
    stopTimer()
  };

  const resetTheTimer = () => {
    resetTimer();
    resetSplitTime();
  }

  return (
    <div className="stop-watch-main-div">
      <div className="stop-watch-content-div">
        <StopWatchTime />
        <SplitTime />
        <Buttons
          startTimer={startTheTimer}
          stopTheTimer={stopTheTimer}
          resetTheTimer={resetTheTimer}
        />
        <LogTable />
      </div>
    </div>
  );
}

const mapStateToProps = ({ timerReducer: { timertime } }) => ({
  timertime
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      startTimer,
      resetTimer,
      stopTimer,
      resetSplitTime
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StopWatch)
