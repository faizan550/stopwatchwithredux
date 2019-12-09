import React, { Component } from "react";
import { startStopWatch, pauseStopWatch, resetStopWatch } from '../redux/actions/timerActions'
import { resetSplitTime, splitTime } from '../redux/actions/logActions'
import { bindActionCreators } from "redux";
import Buttons from './Buttons/stopWatchButton'
import { connect } from 'react-redux';
import StopWatchTime from "./Timer/stopWatchTime";
import LogTable from './LogTable/logTable';
import SplitTime from './SplitTimer/splitTime';
import '../stopWatch/stopWatch.css';

class StopWatch extends Component {

  render() {
    const {
      startStopWatch,
      resetStopWatch,
      pauseStopWatch,
      resetSplitTime,
      stopWatchTime,
      timerState,
      splitTime,
      splitTimeList
    } = this.props

    return (
      <div className="stop-watch-main-div">
        <div className="stop-watch-content-div">
          <StopWatchTime stopWatchTime={stopWatchTime} />
          <SplitTime splitTimeList={splitTimeList} />
          <Buttons
            startStopWatch={startStopWatch}
            pauseStopWatch={pauseStopWatch}
            resetStopWatch={resetStopWatch}
            timerState={timerState}
            stopWatchTime={stopWatchTime}
            splitTime={splitTime}
            resetSplitTime={resetSplitTime}
          />
          <LogTable splitTimeList={splitTimeList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ timerReducer: { stopWatchTime, timerState }, logReducer: { splitTimeList } }) => ({
  stopWatchTime, timerState, splitTimeList
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      startStopWatch,
      resetStopWatch,
      pauseStopWatch,
      resetSplitTime,
      splitTime
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StopWatch)
