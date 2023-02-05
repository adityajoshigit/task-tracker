import React, { useState } from 'react'

function Reminder({
  containerCssClassName,
  onHourSelection,
  onMinSelection,
  defaultHours,
  defaultMins
}) {
  const [selectedHours, setSelHours] = useState(defaultHours);
  const [selectedMins, setSelMins] = useState(defaultMins);
  const getHourOptions = function () {
    let ops = [];
    for (let index = (defaultHours || 0); index <= 23; index++) {
      ops.push(index);
    }
    return ops;
  }

  const getMinOptions = function () {
    let ops = [];
    for (let index = (defaultMins || 0); index <= 59; index+=1) {
      ops.push(index);
    }
    return ops;
  }


  return (
    <div className={`d-flex  reminder-container ${containerCssClassName}`}>
      <select 
        className="form-select" 
        aria-label="hours" 
        onChange={
          (event) => {
            setSelHours(event.target.value);
            onHourSelection(event);
          }
        }
        value={(selectedHours || '00')}
        size='1'
      >
        {
          getHourOptions().map(h => {
            return (
              <option key={h} value={h} >
                {h < 10 ? `0${h}` : h}
              </option>
            );
          })
        }
      </select>
      <select 
        className="form-select" 
        aria-label="mins" 
        onChange={
          (event) => {
            setSelMins(event.target.value);
            onMinSelection(event);
          }
        } 
        value={(selectedMins || '00')}
        size='1'
      >
        {
          getMinOptions().map(m => {
            return (
              <option key={m} value={m}>
                {m < 10 ? `0${m}` : m}
              </option>
            );
          })
        }
      </select>

    </div>
  )
}

export default Reminder