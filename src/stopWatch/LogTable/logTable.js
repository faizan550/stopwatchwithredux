import React from 'react';
import calculateTime from '../../utils';
import '../LogTable/logTable.css';

const LogTable = (props) => {

  const { splitTimeList } = props

  return (
    <div>
      {(splitTimeList.length > 0) &&
        <table className="time-table">
          {splitTimeList.map((entry, i) => {
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

export default LogTable
