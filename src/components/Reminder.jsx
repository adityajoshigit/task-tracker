import React from 'react'

function Reminder({
  containerCssClassName
}) {
  const getHourOptions = function () {
    let ops = [];
    for (let index = 0; index <= 23; index++) {
      ops.push(index);
    }
    return ops;
  }

  const getMinOptions = function () {
    let ops = [];
    for (let index = 0; index <= 59; index+=5) {
      ops.push(index);
    }
    return ops;
  }


  return (
    <div className={`d-flex  reminder-container ${containerCssClassName}`}>
      <select className="form-select" aria-label="hours">
        {
          getHourOptions().map(h => {
            return (
              <option key={h} label={h} value={h}>{h}</option>
            );
          })
        }
      </select>
      <select className="form-select" aria-label="mins">
        {
          getMinOptions().map(m => {
            return (
              <option key={m} label={m} value={m}>{m}</option>
            );
          })
        }
      </select>

    </div>
  )
}

export default Reminder