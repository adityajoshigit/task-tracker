// import feedbacks from "../data/feedbackData";
import { 
  getLocal ,
  setLocal,
  // removeLocal,
  // clearLocal
} from "./storageOps";

const start = Date.now();
let millis = 0;
setInterval(() => {
  millis = Math.floor((Date.now() - start) / 1000);
}, 1000);

const isLive = false;
const CONTENT_TYPE = 'application/json';
const BASE_URL = 'http://localhost:5000/tasks';

let reqData = {
  url: BASE_URL,
  method: 'POST',
  contentType: CONTENT_TYPE,
  body: null
};

const apiCallout = function({
  method,
  stringifiedBody,
  contentType,
  url
}) {
  let reqParams = {
    method: method,
    headers: {
      'Content-Type': contentType
    },
  };
  if (stringifiedBody) {
    reqParams = {
      ...reqParams, 
      body: stringifiedBody
    };
  }
  return fetch(
    url,
    reqParams
  );
};

const taskAPIOps = {
  /*
  delete: async function (id) {
    try {
      await apiCallout({ ...reqData, method: 'DELETE', url: (BASE_URL + '/' + id) });
      return true;
    } catch (error) {
      return false;
    }
  },
  add: async function (feedback) {
    const response = (await apiCallout({ ...reqData, stringifiedBody: JSON.stringify(feedback) }));
    const savedFeedback = await response.json();
    return savedFeedback;
  },
  update: async function (feedback) {
    const response = (await apiCallout({ 
      ...reqData, 
      stringifiedBody: JSON.stringify(feedback),
      url: BASE_URL + '/' + feedback.id,
      method: 'PUT'
    }));
    const updatedFeedback = await response.json();
    return updatedFeedback;
  },
  readAll: async function() {
    let dataList = [];
    try {
      const response = (await apiCallout({ ...reqData, method: 'GET' }));
      dataList = await response.json();
    } catch (error) {
      console.log(error);
    }
    return dataList;
  }
  */
};

const staticOps = {
  clearAll: function () {
    setLocal('tasks', []);
  },
  readAll : async function () {
    console.log('++++');
    return (
      getLocal('tasks') || []
    );
  },
  add : async function(task) {
    try {
      const id = Math.floor(
        (Math.random() * 1000) + (Math.random() * 1000) + millis
      );
      task.id = id;
      setLocal('tasks', [...(getLocal('tasks') || []), task]);
      return task;
    } catch (error) {
      return null;
    }
  },
  update : async function(task) {
    
  },
  delete : async function(taskId) {
    try{
      let tasks = getLocal('tasks') || [];
      tasks = tasks.map(t => {
        return {
          ...t, 
          isDeleted: (t.id === taskId) ? true : t.isDeleted
        };
      });
      setLocal('tasks', tasks);
      return true;
    } catch(err) {
      return false;
    }
  },
  undelete : async function(taskId) {
    try{
      let tasks = getLocal('tasks') || [];
      tasks = tasks.map(t => {
        return {
          ...t, 
          isDeleted: (t.id === taskId) ? true : t.isDeleted
        };
      });
      setLocal('tasks', tasks);
      return true;
    } catch(err) {
      return false;
    }
  },
  toggleReminder: function (taskId) {
    try {
      setLocal(
        'tasks',
        (getLocal('tasks') || []).map(t => {
          console.log((taskId === t.id));
          const upT = !t.isDeleted ? { 
              ...t, 
              reminder: (taskId === t.id) ? !t.reminder : t.reminder
          } : t;
          return upT;
        })
      );
      return true;
    } catch (error) {
      return false;
    }
  }
};

const handler = isLive ? taskAPIOps : staticOps ;


const getTasks = handler.readAll;
const postTask = handler.add;
const putTask = handler.update;
const deleteTask = handler.delete;
const undeleteTask = handler.undelete;
const clearTasks = handler.clearAll;
const toggleReminder = handler.toggleReminder;

export { 
  BASE_URL, 
  CONTENT_TYPE, 
  isLive,
  reqData, 
  apiCallout,
  getTasks,
  postTask,
  putTask,
  deleteTask,
  undeleteTask,
  clearTasks,
  toggleReminder
};