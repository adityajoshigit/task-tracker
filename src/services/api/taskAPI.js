const isLive = false;

/*
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
*/

const addTask = async function (task) {
    
};
const getTask = async function (task) {
  
};
const getAll = async function () {
  
};
const toggleTaskReminder = async function(task) {

};
const toggleTaskCompletion = async function(task) {

};
const removeTask = async function(task) {

};

const taskAPI = {
  addTask, getTask, getAll, toggleTaskReminder, toggleTaskCompletion, removeTask, isLive
};

export default taskAPI;