import { createContext, useState, useEffect } from "react";
import controller from '../controller';

const TaskContext = createContext();

export const TaskContextProvider = ({
  children
}) => {
  const [headerTitle] = 'Task Tracker';
    
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
      const allTasks = await controller.getAll();
      setTasks(allTasks);
    };
    getInitialData();
  }, []);
  
  
  const handleRemove = async (evtObjId) => {
    controller.removeTask(evtObjId)
      .then(() => {
        return controller.getAll();
      })
      .then((allTasks) => {
        setTasks(allTasks);
      })
      .catch(err => {
        setTasks([]);
      });
  };

  
  const toggleCompletion = async (evtObjId) => {
    controller.toggleTaskCompletion(evtObjId)
      .then(() => {
        return controller.getAll();
      })
      .then((allTasks) => {
        setTasks(allTasks);
      })
      .catch(err => {
        setTasks([]);
      });
  };

  const handleAdd = async (newTask) => {
     controller.addTask(newTask)
      .then(() => {
        return controller.getAll();
      })
      .then((allTasks) => {
        setTasks(allTasks);
      })
      .catch(err => {
        setTasks([]);
      });
  };

  const updateReminder = async (taskId) => {
    controller.toggleTaskReminder(taskId)
      .then(() => {
        return controller.getAll();
      })
      .then((allTasks) => {
        setTasks(allTasks);
      })
      .catch(err => {
        setTasks([]);
      });
  };

  const searchTasks = async function (query) {
    if (query === '') {
      resetTasks();
    } else {
      controller.getAll()
        .then(allTasks => {
          return new Promise(resolve => {
            resolve(
              allTasks.filter(task => {
                return task.desc.toLowerCase().search(query.toLowerCase()) !== -1;
              })
            );
          });
        })
        .then(result => {
          setTasks(result || []);
        });
    }
  }

  const resetTasks = async function () {
    setTasks(
      await controller.getAll()
    );
  }

  // const compareTasks = (a, b) => {
  //   if(a.isComplete && b.isComplete) {
  //       return (a.id < b.id) ? -1 : 1;
  //   } else if(a.isComplete && !b.isComplete) {
  //       return 1;
  //   } else if(!a.isComplete && b.isComplete) {
  //       return -1;
  //   } else {
  //       return (a.id < b.id) ? -1 : 1;
  //   }
  // };


  return (
    <TaskContext.Provider value={
      {
        headerTitle,
        tasks,
        handleRemove,
        updateReminder,
        handleAdd,
        toggleCompletion,
        searchTasks
      }
    }>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;