import React from 'react'
import { connect } from 'react-redux'
import calculateTime from '../../utils/index'
import '../SplitTimer/splitTime.css'

const SplitTime = (props) => {
  const { logEntry } = props
  const splitTimeList = logEntry.filter(item => item.actionType === "Split")

  return (
    <div className="split-time">
      {splitTimeList.length === 0 &&
        <p style={{ margin: "0px 0 0px 0" }}>Split Time</p>}
      {splitTimeList.length !== 0 &&
        <p style={{ margin: "0px 0 0px 0" }}>{calculateTime(splitTimeList[splitTimeList.length - 1].actionTime)}</p>}
    </div>
  )
}

const mapStateToProps = ({ logReducer: { logEntry } }) => ({
  logEntry
})

export default connect(mapStateToProps)(SplitTime)