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
      <select class="form-select" aria-label="hours">
        {
          getHourOptions().map(h => {
            return (
              <option label={h} value={h}>{h}</option>
            );
          })
        }
      </select>
      <select class="form-select" aria-label="mins">
        {
          getMinOptions().map(m => {
            return (
              <option label={m} value={m}>{m}</option>
            );
          })
        }
      </select>

    </div>
  )
}

export default Reminder