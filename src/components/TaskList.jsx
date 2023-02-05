import {useContext} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskContext from '../context/TaskContext';

const TaskList = () => { 
    const {
      tasks
    } = useContext(TaskContext);
    return (
        <div className='task-list-container'>
            <ul className='task-list'>
                { tasks
                    .map(t => (
                            <li
                                key={t.id} >
                                <Task 
                                    task={t}
                                />
                            </li>
                        ) 
                    )
                }
            </ul>
        </div>
    );
}

TaskList.defaultProps = {
    taskList: []
};

TaskList.propTypes = {
    taskList: PropTypes.array
};

export default TaskList;