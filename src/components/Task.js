import React from 'react';
import { FaTimes, FaExchangeAlt, FaBell, FaBellSlash } from 'react-icons/fa';
import { useState } from 'react';

const Task = ({
    task,
    onDelete,
    onUndelete,
    onSetReminder,
    onResetReminder
}) => {


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
                    ? <FaBellSlash  onClick={ () => onResetReminder(task.id) } />
                    : <FaBell onClick={ () => onSetReminder(task.id) } />
                }
            </span>
        );
    };

    const showDeleteIcon = () => {
        return (
            task.isDeleted 
            ? <FaExchangeAlt 
                onClick={ () => onUndelete(task.id) } 
                style={{cursor: 'pointer'}} 
                />
            : <FaTimes 
                onClick={() => { onDelete(task.id) }} 
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