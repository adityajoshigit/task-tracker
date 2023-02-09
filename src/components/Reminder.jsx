import React, { useState } from 'react'

function Reminder({
  containerCssClassName,
  onTimeSelection
}) {

  const getOptions = function(start, end, endInclusive, stepBy) {
    let ops = [];
    for (let index = start; endInclusive ? (index <= end) : index < end; index+=stepBy) {
      ops.push(index);
    }
    return ops;
  }

  const getCurrentInstant = function () {
    const thisMoment = new Date();
    return [thisMoment.getHours(), thisMoment.getMinutes(), thisMoment.getSeconds()];
  }

  const getNextInstant = function ([hh, mm]) {
    return [(hh === 23) ? 23 : (hh), (mm === 59) ? 0 : (mm + 1)];
  }

  const [nextHr, nextMin] = getNextInstant(getCurrentInstant());

  const [selectedHours, setSelHours] = useState(nextHr);
  const [selectedMins, setSelMins] = useState(nextMin);
  const [hourOptions] = useState(getOptions(nextHr, 24, false, 1));
  const [minOptions, setMinOptions] = useState(getOptions(nextMin, 60, false, 1));
  
  const updateMinOptions = function (hourValue) {
    const thisMoment = new Date();
    const opts = getOptions( parseInt(hourValue) === thisMoment.getHours() ? thisMoment.getMinutes() + 1 : 0, 60, false, 1);
    console.log(opts);
    setMinOptions(
      opts
    );
  }

  

  return (
    <div className={`d-flex  reminder-container ${containerCssClassName}`}>
      <select 
        className="form-select" 
        aria-label="hours" 
        onChange={
          (event) => {
            const selectedValue = event.target.value;
            setSelHours(selectedValue);
            updateMinOptions(selectedValue);
          }
        }
        value={selectedHours || hourOptions[0]}
        size='1'
      >
        {
          hourOptions.map(h => {
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
            const selectedValue = event.target.value;
            setSelMins(selectedValue);
            onTimeSelection([selectedHours, selectedMins]);
          }
        } 
        value={minOptions[0]}
        size='1'
      >
        {
          minOptions.map(m => {
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