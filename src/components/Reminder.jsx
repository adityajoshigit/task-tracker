import { getOptions, getCurrentInstant, getNextInstant } from '../services/util/misc';
import React, { useState, useContext, useEffect } from 'react'
import TaskContext from '../context/TaskContext';

function Reminder({
  containerCssClassName
}) {
  const {
    hours, 
    mins,
    setHours,
    setMins
  } = useContext(TaskContext);

  const [hourOptions, setHourOptions] = useState([]);
  const [minOptions, setMinOptions] = useState([]);

  const initialize = () => { 
      const [nextHr, nextMin] = getNextInstant(getCurrentInstant());
      setHours(nextHr);
      setMins(nextMin);
      setHourOptions(getOptions(nextHr, 24, false, 1));
      setMinOptions(getOptions(nextMin, 60, false, 1));
  
      console.log('a');
  };

  useEffect(() => {
    initialize();
  }, []);

  const updateMinOptions = function (hourValue) {
    const thisMoment = new Date();
    const opts = getOptions( parseInt(hourValue) === thisMoment.getHours() ? thisMoment.getMinutes() + 1 : 0, 60, false, 1);
    // console.log(opts);
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
            setHours(selectedValue);
            updateMinOptions(selectedValue);
          }
        }
        value={hours || hourOptions[0]}
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
            setMins(selectedValue);
          }
        } 
        value={mins || minOptions[0]}
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