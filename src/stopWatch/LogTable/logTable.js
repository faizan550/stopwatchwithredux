import React from 'react';
import { connect } from 'react-redux';
import calculateTime from '../../utils';
import '../LogTable/logTable.css';

const LogTable = (props) => {

  const { logEntry } = props

  return (
    <div>
      {(logEntry.length > 0) &&
        <table className="time-table">
          {logEntry.map((entry, i) => {
            return [
              <tr>
                <td style={{ textAlign: "left" }}>#{i + 1}
                </td>
                {entry.actionType === 'Split' &&
                  <td className="split-time-style ">
                    {calculateTime(entry.actionTime)}
                  </td>
                }
                {entry.actionType === 'Pause' &&
                  <td className="pause-time-style">
                    {calculateTime(entry.actionTime)}
                  </td>
                }
                <td>{entry.actionType}</td>
              </tr>
            ]
          })
          }
        </table>
      }
    </div>
  )
}

const mapStateToProps = ({ logReducer: { logEntry } }) => ({
  logEntry
})

export default connect(mapStateToProps)(LogTable)
