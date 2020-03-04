// Async Local Storage Api
const localStorageApi = {
  fetch(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = JSON.parse(window.localStorage.getItem(key));
        resolve(item);
      }, 500);
    });
  },

  persist(key, item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        window.localStorage.setItem(key, JSON.stringify(item));
        resolve(Array.isArray(item) ? [...item] : { ...item });
      }, 0);
    });
  },
};

export default localStorageApi;
