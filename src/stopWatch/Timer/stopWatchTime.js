import React from 'react'
import { connect } from 'react-redux'
import calculateTime from '../../utils'
import '../Timer/stopWatchTime.css'

const StopWatchTime = (props) => {
  const { timertime } = props
  // console.log(props)
  return (
    <div>
      <h1 className="timer-size">{calculateTime(timertime)}</h1>
    </div>
  )
}

const mapStateToProps = ({ timerReducer: { timertime } }) => ({
  timertime
})


export default connect(mapStateToProps)(StopWatchTime)