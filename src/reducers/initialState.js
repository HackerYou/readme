import config from '../services/config';

export default {
    auth: {
        loggedIn: !!localStorage[`${config.getAppName()}_token`],
    },
    course: {
        courses: [],
    },
};

