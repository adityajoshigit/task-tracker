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
    const addNewLabel = 'Add New Task';
    const closeLabel = 'Close';
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
            <div className='app-container container-fluid d-flex justify-content-center'>
                <div className="row p-2 m-2 App">
                    <div className="col-12 d-flex justify-content-between">
                        <Header title={headerTitle} />
                        <FormToggle 
                            defaultState={defaultStateFormShow} 
                            toggleSwitchLabel={showForm?closeLabel:addNewLabel} 
                            onAddClick={toggleNewTaskForm} 
                        />
                    </div>
                    <div className="col-12 ">
                        {
                            showForm && (
                                <NewTask />
                            )
                        }
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskContextProvider>
        
    );
}

export default App;
