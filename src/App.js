import './App.css';
import { useState, useContext } from 'react';
import { TaskContextProvider } from './context/TaskContext';
import TaskContext from './context/TaskContext';

function App() {
    
    const {tasks, headerTitle} = useContext(TaskContext); 

    return (
        <TaskContextProvider>
            <div className="App">
                <header>
                    {headerTitle}
                </header>
            </div>
        </TaskContextProvider>
        
    );
}

export default App;
