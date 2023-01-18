import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
const Task = ({
    task,
    onDelete,
    onUndelete
}) => {

    const taskCss = {
        deletedTask: {
            textDecoration: 'line-through',
            color: 'grey'
        }
    };
    
    const showIcon = () => {
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

    const getTaskDetails = () => {
        let taskData = <></>;
        if (task) {
            taskData = ( 
                <div className='task'>
                    <h3 
                        style={ task.isDeleted ? taskCss.deletedTask : {} }
                    >
                        {task.desc}
                        {showIcon()}
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