const localStorageHandler = {
  set: function (key, value) {
    if (key) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  get: function (key) {
    let extractedValue;
    if (key) {
      extractedValue = localStorage.getItem(key);
    }
    return JSON.parse(extractedValue);
  },
  remove: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  }
};

const getLocal = localStorageHandler.get;
const setLocal = localStorageHandler.set;
const removeLocal = localStorageHandler.remove;
const clearLocal = localStorageHandler.clear;

export {
  getLocal,
  setLocal,
  removeLocal,
  clearLocal,
};