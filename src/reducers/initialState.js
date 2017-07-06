import config from '../services/config';

export default {
    auth: {
        loggedIn: !!localStorage[`${config.getAppName()}_token`],
    },
    course: {
        courses: [],
    },
    classroom: {
        _id: '',
        title: '',
        template: false,
        term: '',
        start_date: 0,
        end_date: 0,
        instructor: '0',
        description: '',
        created_at: 0,
        updated_at: 0,
        sections: [],
    },
    user: {
        firstName: 'Loading',
        lastName: '...',
        email: 'user@email.com',
    },
};
