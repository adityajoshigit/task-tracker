import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useContext } from 'react';
import TaskContext from './context/TaskContext';
import { TaskContextProvider } from './context/TaskContext';

function App() {
    const taskContext = useContext(TaskContext);
    
    const headerTitle = 'Task Tracker';
    
    const [tasks, setTasks] = useState(
        []
    );

    const handleDelete = (evtObjId) => {
        console.log('Delete Task Clicked! -- ' + evtObjId);
        let updatedTasks = [];
        console.log(tasks);
        tasks.forEach(t => {
            updatedTasks.push(
                { 
                    ...t, 
                    isDeleted: (t.id === evtObjId) ? true : t.isDeleted
                }
            );
        });
        setTasks(updatedTasks.sort(compareTasks));
    };

    const handleUndelete = (evtObjId) => {
        console.log('Undelete Task Clicked! -- ' + evtObjId);
        let updatedTasks = [];
        console.log(tasks);
        tasks.forEach(t => {
            updatedTasks.push(
                { 
                    ...t, 
                    isDeleted: (t.id === evtObjId) ? false : t.isDeleted
                }
            );
        });
        setTasks(updatedTasks.sort(compareTasks));
    };

    const compareTasks = (a, b) => {
        if(a.isDeleted && b.isDeleted) {
            return (a.id < b.id) ? -1 : 1;
        } else if(a.isDeleted && !b.isDeleted) {
            return 1;
        } else if(!a.isDeleted && b.isDeleted) {
            return -1;
        } else {
            return (a.id < b.id) ? -1 : 1;
        }
    };

    const toggleReminder = (taskId) => {
        let updatedTasks = [];
        tasks.forEach(t => {
            console.log((taskId === t.id));
            const upT = !t.isDeleted ? { 
                ...t, 
                reminder: (taskId === t.id) ? !t.reminder : t.reminder
            } : t;
            updatedTasks.push(
                upT
            );
        });
        setTasks(updatedTasks);
    };


    return (
        <TaskContextProvider>
            <div className="App">
                <Header title={headerTitle} />
                <Tasks 
                    taskList={tasks} 
                    onTaskDelete={handleDelete} 
                    onTaskUndelete={handleUndelete}
                    onTaskSetReminder={toggleReminder}
                    onTaskResetReminder={toggleReminder}
                />
            </div>
        </TaskContextProvider>
        
    );
}

export default App;
