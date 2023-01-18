import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
    const headerTitle = 'Task Tracker';
    
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                desc: 'Grocery Shopping',
                dt: 'Jan 19th @ 7:00 PM',
                reminder: true,
                isDeleted: false
            },
            {
                id: 2,
                desc: 'Complete Online Assessment',
                dt: 'Jan 19th @ 10:00 AM',
                reminder: true,
                isDeleted: false
            },
            {
                id: 3,
                desc: 'Go through Lec 2 Slides',
                dt: 'Jan 19th @ 12:00 PM',
                reminder: true,
                isDeleted: false
            },
            {
                id: 4,
                desc: 'Check flights for Montreal Trip',
                dt: 'Jan 18th @ 10:00 PM',
                reminder: true,
                isDeleted: false
            }
        ]
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

    return (
        <div className="App">
            <Header title={headerTitle} />
            <Tasks 
                taskList={tasks} 
                onTaskDelete={handleDelete} 
                onTaskUndelete={handleUndelete}
            />
        </div>
    );
}

export default App;
