// Async Local Storage Api
const localStorageApi = {
  get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  set(key, item) {
    window.localStorage.setItem(key, JSON.stringify(item));
  },
  fetchAsync(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.get(key));
      }, 2000);
    });
  },
  persistAsync(key, item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.set(key, item);
        resolve(Array.isArray(item) ? [...item] : { ...item });
      }, 500);
    });
  },
};

export default localStorageApi;
