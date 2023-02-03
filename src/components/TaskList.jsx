import {useContext} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskContext from '../context/TaskContext';

const TaskList = () => { 
    const {
      tasks
    } = useContext(TaskContext);
    console.log(tasks);
    return (
        <div>
            <ul>
                { tasks
                    .map(t => (
                            <Task 
                                key={t.id} 
                                task={t}
                            />
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