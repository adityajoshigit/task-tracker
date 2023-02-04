import './App.css';
// import { useState } from 'react';
import { TaskContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { useState } from 'react';
import NewTask from './components/NewTask';
import FormToggle from './components/FormToggle';

function App() {
    const headerTitle = 'Task Tracker';
    const addNewLabel = '+';
    const closeLabel = 'X';
    const defaultStateFormShow = false;

    const [showForm, setShowForm] = useState(defaultStateFormShow);

    const toggleNewTaskForm = function () {
        console.log(showForm);
        console.log('toggling..');
        setShowForm( prevState => !prevState);
        console.log(showForm);
    }
    

    return (
        <TaskContextProvider>
            <div className='parent-container container-fluid'>
                <div class="app-container row d-flex justify-content-center">
                        <div className="col-10 col-sm-6 col-md-6 col-lg-4 App">
                            <div className='row'>
                                <div 
                                    className="col-12 d-flex flex-row justify-content-center justify-content-sm-between section-container"
                                >
                                    <Header title={headerTitle} />
                                    <FormToggle 
                                        defaultState={defaultStateFormShow} 
                                        toggleSwitchLabel={showForm?closeLabel:addNewLabel} 
                                        onAddClick={toggleNewTaskForm} 
                                    />
                                </div>
                                <div className="col-12 section-container">
                                    {
                                        showForm && (
                                            <NewTask />
                                        )
                                    }
                                </div>
                                <div className="col-12 section-container">
                                    <TaskList />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </TaskContextProvider>
        
    );
}

export default App;
