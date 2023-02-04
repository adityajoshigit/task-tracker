import React, { useContext } from 'react';
import { FaTimes, FaBell } from 'react-icons/fa';
import { FcUndo, FcCheckmark } from 'react-icons/fc';
import TaskContext from '../context/TaskContext';

const Task = ({
    task
}) => {
    const {
      handleDelete,
      handleUndelete,
      updateReminder
    } = useContext(TaskContext);
    
    const onRemove = function () {
        console.log('to remove' + task.id);
    }

    let taskCss = {
        deletedTask: {
            textDecoration: 'line-through',
            color: 'grey'
        }
    };

    const reminderIcon = () => {
        return (
            <span 
                className='reminder-icon cursor-pointer' 
                // style={ {display: reminderDisplay} }
            >
                { 
                    task.reminder 
                    ? <FaBell style={{color: 'green'}} onClick={ onResetReminder } />
                    : <FaBell style={{color: 'grey'}} onClick={ onSetReminder } />
                }
            </span>
        );
    };

    const showDeleteIcon = () => {
        return (
            <span className='cursor-pointer'>
                {task.isDeleted 
                ? <FcUndo 
                    onClick={onUndelete } 
                    />
                : <FcCheckmark 
                    onClick={onDelete } 
                    />}
            </span>
        );
    };

    const showRemoveIcon = () => {
        return (
            <span className='cursor-pointer'>
                <FaTimes 
                    onClick={onRemove} 
                    style={{color: 'red'}} 
                    />
            </span>
        );
    };

    const getTaskClassName = () => {
        return (
            'task ' + ( task.reminder ? 'reminder' : '')
        );
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
                    className={`${getTaskClassName()} row`}
                >
                    
                    <span className='col-1 '>
                        {reminderIcon()}
                    </span>
                    <div  
                        className=" col-8 col-md-9"
                        style={ task.isDeleted ? taskCss.deletedTask : {} }
                    >
                        <div 
                            className='text-truncate task-desc'
                            title={task.desc}
                        >
                            {task.desc}
                        </div>
                        
                        <div className='task-dt'>
                            {task.dt}
                        </div>
                    </div>
                    <span className='col-1'>
                        {showDeleteIcon()}
                    </span>
                    <span className='col-1'>
                        {showRemoveIcon()}
                    </span>
                </div>
            );
        }
        return taskData;
    };

    return getTaskDetails();
};



export default Task;