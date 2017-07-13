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
        students: [],
        start_date: 0,
        end_date: 0,
        instructor: '0',
        description: '',
        created_at: 0,
        updated_at: 0,
        sections: [],
        tests: [],
        test_results: [],
    },
    lesson: {
        title: '',
        topics: [],
    },
    user: {
        firstName: 'Loading',
        lastName: '...',
        email: 'user@email.com',
        admin: false,
        instructor: false,
    },
    loader: {
        loading: false,
    },
    tests: {
        questions: [],
    },
};
