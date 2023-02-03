import React, { useContext } from 'react';
import { FaTimes, FaExchangeAlt, FaBell, FaBellSlash } from 'react-icons/fa';
import { useState } from 'react';
import TaskContext from '../context/TaskContext';

const Task = ({
    task
}) => {
    const {
      handleDelete,
      handleUndelete,
      updateReminder
    } = useContext(TaskContext);
  
    const [reminderDisplay, setReminderDisplay] = useState(
        ['none']
    );
    
    let taskCss = {
        deletedTask: {
            textDecoration: 'line-through',
            color: 'grey'
        }
    };

    const reminderIcon = () => {
        return (
            <span className='reminder-icon' style={ {display: reminderDisplay} }>
                { 
                    task.reminder 
                    ? <FaBellSlash  onClick={ onResetReminder } />
                    : <FaBell onClick={ onSetReminder } />
                }
            </span>
        );
    };

    const showDeleteIcon = () => {
        return (
            task.isDeleted 
            ? <FaExchangeAlt 
                onClick={onUndelete } 
                style={{cursor: 'pointer'}} 
                />
            : <FaTimes 
                onClick={onDelete } 
                style={{cursor: 'pointer', color: 'red'}} 
                />
        );
    };

    const getTaskClassName = () => {
        return (
            'task ' + ( task.reminder ? 'reminder' : '')
        );
    };

    const toggleReminderBtn = (boolVal) => {
        const val = boolVal ? 'block' : 'none';
        setReminderDisplay(val);
    };

    
    const onDelete = function () {
      handleDelete(task.id);
    }

    const onUndelete = function () {
      handleUndelete(task.id);
    }
    
    const onSetReminder = function () {
      updateReminder(task.id);
    }
    
    const onResetReminder = function () {
        updateReminder(task.id);
    }
    

    const getTaskDetails = () => {
        let taskData = <></>;
        if (task) {
            taskData = ( 
                <div 
                    onMouseEnter={ () => toggleReminderBtn(true) }
                    onMouseLeave={ () => toggleReminderBtn(false) }
                    className={getTaskClassName()}>
                    
                    <h3 
                        className='task-desc'
                        style={ task.isDeleted ? taskCss.deletedTask : {} }
                    >
                        <span style={{ display: 'inline-flex' }}>
                            {reminderIcon()}
                            {task.desc}
                        </span>
                        {showDeleteIcon()}
                    </h3>
                    <p
                        style={ task.isDeleted ? taskCss.deletedTask : {} }
                    >
                        {task.dt}
                    </p>
                </div>
            );
        }
        return taskData;
    };

    return getTaskDetails();
};



export default Task;