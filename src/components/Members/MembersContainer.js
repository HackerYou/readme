import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Members from './Members';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';
import * as usersActions from '../../actions/usersActions/usersActions';

const filterTopics = users => filter => users.filter(user => user.category === filter);

const getFilteredUsers = (users, filter) => {
    const usersToFilter = filterTopics(users);
    switch (filter) {
    case 'SHOW_ALL':
        return users;
    case 'HTML':
        return usersToFilter('html');
    case 'CSS':
        return usersToFilter('css');
    case 'Javascript':
        return usersToFilter('javascript');
    case 'Tools':
        return usersToFilter('tools');
    case 'Project':
        return usersToFilter('project');
    case 'Resource':
        return usersToFilter('resource');
    case 'UX':
        return usersToFilter('ux');
    case 'SEO':
        return usersToFilter('seo');
    default:
        return users;
    }
};

const searchUsers = (users, keyword) => {
    if (keyword === '') {
        return users;
    }
    const lowercaseKeyword = keyword.toLowerCase();
    return users.filter((user) => {
        return user.firstName && user.firstName.toLowerCase().indexOf(lowercaseKeyword) !== -1;
    });
};

const mapStateToProps = ({ users, broadcast }) => {
    return {
        users: {
            users:
            getFilteredUsers(
                searchUsers(users.users, users.searchKeyword),
                users.visibilityFilter),
            visibilityFilter: users.visibilityFilter,
        },
        broadcast,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...usersActions, ...broadcastActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
