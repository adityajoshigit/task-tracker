import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({
    taskList,
    onTaskDelete,
    onTaskUndelete
}) => { 
    return (
        <div>
            <ul>
                { taskList
                    .map(t => (
                            <Task 
                                key={t.id} 
                                task={t}
                                onDelete={onTaskDelete} 
                                onUndelete={onTaskUndelete}
                            />
                        ) 
                    )
                }
            </ul>
        </div>
    );
}

Tasks.defaultProps = {
    taskList: []
};

Tasks.propTypes = {
    taskList: PropTypes.array
};

export default Tasks;