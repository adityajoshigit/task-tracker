import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import Reminder from './Reminder';

function NewTask() {
  const {
    handleAdd
  } = useContext(TaskContext);

  const [taskDescription, setTaskDescription] = useState('');

  const onSubmit = function (e) {
    console.log(e);
    e.preventDefault();
    sendData();
  }

  const clickHandler = function () {
    sendData();
  }

  const sendData = function () {
    if (taskDescription) {
      handleAdd({
        desc: taskDescription,
        dt: 'Feb 20th @ 7:00 PM',
        reminder: false,
        isDeleted: false
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

  return (
    <div className='d-flex flex-column flex-sm-row align-items-stretch justify-content-between  add-form'>
        <input 
          className='flex-sm-grow-1 flex-lg-grow-0'
          type="text" 
          name="taskDesc" 
          id="taskDesc" 
          placeholder='Task To Do..'
          onChange={onDescChange}
        />
        <Reminder />
        <button type="button" className='btn btn-primary' onClick={clickHandler}>
          Add
        </button>
    </div>
  )
}

export default NewTask