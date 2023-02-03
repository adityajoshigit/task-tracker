import { createContext, useState, useEffect } from "react";
import {
    // isLive,
    getTasks,
    // postTask,
    deleteTask,
    undeleteTask,
    toggleReminder,
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
    if(deleteTask(evtObjId)) {
        const res = await getTasks();
        setTasks(res.sort(compareTasks));
    }
  };

  const handleUndelete = async (evtObjId) => {
    if(undeleteTask(evtObjId)) {
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

  const updateReminder = async (taskId) => {
      if (toggleReminder(taskId)) {
        const res = await getTasks();
        setTasks(res);
      }
  };

  return (
    <TaskContext.Provider value={
      {
        headerTitle,
        tasks,
        handleDelete,
        handleUndelete,
        updateReminder
      }
    }>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;