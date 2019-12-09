import React from 'react'
import calculateTime from '../../utils/index'
import '../SplitTimer/splitTime.css'

const SplitTime = (props) => {
  const { splitTimeList } = props
  const listTimeOfSplit = splitTimeList.filter(item => item.actionType === "Split")

  return (
    <div className="split-time">
      {listTimeOfSplit.length === 0 &&
        <p style={{ margin: "0px 0 0px 0" }}>Split Time</p>}
      {listTimeOfSplit.length !== 0 &&
        <p style={{ margin: "0px 0 0px 0" }}>{calculateTime(listTimeOfSplit[listTimeOfSplit.length - 1].actionTime)}</p>}
    </div>
  )
}

export default SplitTime