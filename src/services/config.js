// const url = 'https://notes-api.hackeryou.com/v1';
const appName = 'readme';
// const url = 'http://159.203.40.128/v1';
const url = 'http://localhost:3200/v1';

export default {
    getApiUrl() {
        return url;
    },
    getAppName() {
        return appName;
    },
    getToken() {
        return localStorage.getItem(`${appName}_token`);
    },
};
