import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import Reminder from './Reminder';

function NewTask() {
  const {
    handleAdd
  } = useContext(TaskContext);

  const [taskDescription, setTaskDescription] = useState('');
  let hours;
  let mins;
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

  const setReminderTime = function ([hh, mm]) {
    hours = hh;
    mins = mm;
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
          onTimeSelection={setReminderTime}
        />
        <button type="button" className='btn btn-primary' onClick={clickHandler}>
          Add
        </button>
    </div>
  )
}

export default NewTask