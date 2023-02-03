import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';

function NewTask() {
  const {
    handleAdd
  } = useContext(TaskContext);

  const [taskDescription, setTaskDescription] = useState('');

  const onSubmit = function (e) {
    e.preventDefault();
    console.log('submit clicked');
    console.log(taskDescription);
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
    console.log(e.target.value);
    setTaskDescription(e.target.value);
  }

  return (
    <div className='add-form'>
      <form className='form-control new-task-form' onSubmit={onSubmit}>
        {/* <label htmlFor="taskDesc" >
          Add Description
        </label> */}
        <input 
          type="text" 
          name="taskDesc" 
          id="taskDesc" 
          placeholder='Task To Do..'
          onChange={onDescChange}
        />
        <button type="submit" className='btn'>
          Add
        </button>
      </form>
    </div>
  )
}

export default NewTask