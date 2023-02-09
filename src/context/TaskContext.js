import { createContext, useState, useEffect } from "react";
import controller from '../controller';

const TaskContext = createContext();

export const TaskContextProvider = ({
  children
}) => {
  const getOptions = function(start, end, endInclusive, stepBy) {
    let ops = [];
    for (let index = start; endInclusive ? (index <= end) : index < end; index+=stepBy) {
      ops.push(index);
    }
    return ops;
  }

  // const getCurrentInstant = function () {
  //   const thisMoment = new Date();
  //   return [thisMoment.getHours(), thisMoment.getMinutes(), thisMoment.getSeconds()];
  // }

  // const getNextInstant = function ([hh, mm]) {
  //   if(hh !== 23 && mm === 59) {
  //     return [hh + 1, 0];
  //   }
  //   return [hh , (mm + 1)];
  // }

  // const [nextHr, nextMin] = getNextInstant(getCurrentInstant());
    
  const headerTitle = 'Task Tracker';

  const [tasks, setTasks] = useState([]);
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();

  


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
        hours,
        mins,
        handleRemove,
        updateReminder,
        handleAdd,
        toggleCompletion,
        searchTasks,
        setHours,
        setMins,
        getOptions
      }
    }>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;