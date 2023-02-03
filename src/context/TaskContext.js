import { createContext, useState, useEffect } from "react";
import {
    // isLive,
    getTasks,
    deleteTask,
    undeleteTask,
    toggleReminder,
    postTask,
    // clearTasks
} from '../services/api';

const TaskContext = createContext();

export const TaskContextProvider = ({
  children
}) => {
  const [headerTitle] = 'Task Tracker';
    
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
        const res = await getTasks();
        console.log(res);
        setTasks(res);
    };
    getInitialData();
  }, []);
  
  
  const handleDelete = async (evtObjId) => {
    const res = await deleteTask(evtObjId);
    if(res) {
        const tasks = await getTasks();
        setTasks(tasks.sort(compareTasks));
    }
  };

  const handleUndelete = async (evtObjId) => {
    const res = await undeleteTask(evtObjId);
    if(res) {
        const tasks = await getTasks();
        setTasks(tasks.sort(compareTasks));
    }
  };

  const handleAdd = async (newTask) => {
    if (newTask) {
        const res = await postTask(newTask);
        if(res) {
            const data = await getTasks();
            setTasks(data);
        }
    }
  };

    const updateReminder = async (taskId) => {
        if (toggleReminder(taskId)) {
            const res = await getTasks();
            setTasks(res.sort(compareTasks));
        }
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
    <TaskContext.Provider value={
      {
        headerTitle,
        tasks,
        handleDelete,
        handleUndelete,
        updateReminder,
        handleAdd
      }
    }>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;