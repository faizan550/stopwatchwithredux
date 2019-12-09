import React from 'react'
import calculateTime from '../../utils'
import '../Timer/stopWatchTime.css'

const StopWatchTime = (props) => {
  const { stopWatchTime } = props

  return (
    <div>
      <h1 className="timer-size">{calculateTime(stopWatchTime)}</h1>
    </div>
  )
}

export default StopWatchTime