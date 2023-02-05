import taskAPI from './services/api/taskAPI';
import staticAPI from './services/api/staticAPI';

const handler = taskAPI.isLive ? taskAPI : staticAPI ;

const addTask = handler.addTask;
const getTask = handler.getTask;
const getAll = handler.getAll;
const toggleTaskReminder = handler.toggleTaskReminder;
const toggleTaskCompletion = handler.toggleTaskCompletion;
const removeTask = handler.removeTask;

const controller = { 
  addTask,
  getTask,
  getAll,
  toggleTaskReminder,
  toggleTaskCompletion,
  removeTask
};

export default controller;