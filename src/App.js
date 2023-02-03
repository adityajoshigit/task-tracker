import './App.css';
// import { useState } from 'react';
import { TaskContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import Header from './components/Header';

function App() {
    const headerTitle = 'Task Tracker';
    return (
        <TaskContextProvider>
            <div className="App">
                <Header title={headerTitle} />
                <TaskList />
            </div>
        </TaskContextProvider>
        
    );
}

export default App;
