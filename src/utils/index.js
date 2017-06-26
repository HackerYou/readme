export const setLocalStorage = (options) => {
    Object.keys(options).map((key) => {
        return localStorage.setItem(key, options[key]);
    });
};

export default {
    setLocalStorage,
};
