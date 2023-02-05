import { getUID } from "../util/uid";

const getAll = async function () {
  return new Promise(
    resolve => {
      const data = localStorage.getItem('tasks');
      console.log(JSON.parse(data));
      resolve(data ? JSON.parse(data) : []);
    }
  );
};
const addTask = async function (newTask) {
  return new Promise((resolve) => {
    getAll()
      .then(data => {
        newTask.id = getUID(6991);
        data.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(data));
        resolve(newTask);
      })
      .catch(err => resolve(null));
  });
};
const getTask = async function (taskId) {
  return new Promise(
    resolve => {
      let data = localStorage.getItem('tasks');
      if (data) {
        data = data.filter(item => item.id === taskId);
        resolve(data[0]);
      } else {
        resolve(null);
      }
    }
  );
};
const toggleTaskReminder = async function(taskId) {
  return new Promise((resolve) => {
    getAll()
      .then(data => {
        data = data
                .map(item => {
                  return {
                    ...item,
                    reminder: (((item.id ===  taskId) && !item.isComplete) ? !item.reminder : item.reminder)
                  };
                });
        localStorage.setItem('tasks', JSON.stringify(data));
        resolve(true);
      })
      .catch(err => resolve(false));
  });
};
const toggleTaskCompletion = async function(taskId) {
  return new Promise((resolve) => {
    getAll()
      .then(data => {
        data = data
                .map(item => {
                  return {
                    ...item,
                    isComplete: ((item.id ===  taskId) ? !item.isComplete : item.isComplete)
                  };
                });
        localStorage.setItem('tasks', JSON.stringify(data));
        resolve(true);
      })
      .catch(err => resolve(false));
  });
};
const removeTask = async function(taskId) {
  return new Promise((resolve) => {
    getAll()
      .then(data => {
        data = data.filter(item => item.id ===  taskId);
        localStorage.setItem('tasks', JSON.stringify(data));
        resolve(true);
      })
      .catch(err => resolve(false));
  });
};

const staticAPI = {
  addTask, getTask, getAll, toggleTaskReminder, toggleTaskCompletion, removeTask
};

export default staticAPI;