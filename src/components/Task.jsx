import React, { useContext } from 'react';
import { FaTimes, FaBell } from 'react-icons/fa';
import { FcUndo, FcCheckmark } from 'react-icons/fc';
import TaskContext from '../context/TaskContext';

const Task = ({
    task
}) => {
    const {
        handleRemove,
        toggleCompletion,
        updateReminder
    } = useContext(TaskContext);
    
    const onRemove = function () {
        handleRemove(task.id);
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
                    ? <FaBell style={{color: !task.isComplete ? 'green' : 'grey'}} onClick={ onResetReminder } />
                    : <FaBell style={{color: 'grey'}} onClick={ onSetReminder } />
                }
            </span>
        );
    };

    const showDeleteIcon = () => {
        return (
            <span className='cursor-pointer'>
                {task.isComplete 
                ? <FcUndo 
                    onClick={onUndoCompletion } 
                    />
                : <FcCheckmark 
                    onClick={onComplete } 
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
    
    const onComplete = function () {
        toggleCompletion(task.id);
    }

    const onUndoCompletion = function () {
        toggleCompletion(task.id);
    }
    
    const onSetReminder = function () {
        console.log('here--');
      updateReminder(task.id);
    }
    
    const onResetReminder = function () {
        console.log('here1-');
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
                        style={ task.isComplete ? taskCss.deletedTask : {} }
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