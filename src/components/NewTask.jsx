import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import Reminder from './Reminder';

function NewTask() {
  const {
    handleAdd
  } = useContext(TaskContext);

  const currentDate = new Date();
  const defaultHrs = currentDate.getHours();
  const defaultMins = 0;
  const [taskDescription, setTaskDescription] = useState('');
  const [hours, setHours] = useState(defaultHrs);
  const [mins, setMins] = useState(defaultMins);

  const clickHandler = function () {
    sendData();
  }

  const sendData = function () {
    if (taskDescription) {
      handleAdd({
        desc: taskDescription,
        dt: `Today @ ${hours<10?('0'+hours):hours}:${mins<10?('0'+mins):mins}`,
        reminder: false,
        isComplete: false
      });
      resetData();
    }
  }

  const resetData = function () {
    setTaskDescription('');
  }

  const onDescChange = function (e) {
    setTaskDescription(e.target.value);
  }

  const onHourSelection = function (event) {
    setHours(event.target.value);
  }

  const onMinSelection = function (event) {
    setMins(event.target.value);
  }

  return (
    <div className='d-flex flex-column align-items-stretch justify-content-between  add-form'>
        <input 
          className='flex-sm-grow-1 flex-lg-grow-0'
          type="text" 
          name="taskDesc" 
          id="taskDesc" 
          placeholder='Task To Do..'
          onChange={onDescChange}
          value={taskDescription || ''}
        />
        <Reminder 
          onHourSelection={onHourSelection} 
          onMinSelection={onMinSelection}
          // defaultHours={`${hours}`}
          // defaultMins={`${mins}`}
          defaultHours={defaultHrs}
          defaultMins={defaultMins}
        />
        <button type="button" className='btn btn-primary' onClick={clickHandler}>
          Add
        </button>
    </div>
  )
}

export default NewTask