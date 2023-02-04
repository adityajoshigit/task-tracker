import './App.css';
// import { useState } from 'react';
import { TaskContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { useState } from 'react';
import NewTask from './components/NewTask';

function App() {
    const headerTitle = 'Task Tracker';
    const [newTaskSwitch] = useState(true);
    return (
        <TaskContextProvider>
            <div className='app-container'>
                <div className="App">
                    <Header title={headerTitle} />
                    {
                        newTaskSwitch && (
                            <NewTask />
                        )
                    }
                    <TaskList />
                </div>
            </div>
        </TaskContextProvider>
        
    );
}

export default App;
