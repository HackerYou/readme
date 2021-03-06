import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Topics from './Topics';
import * as topicActions from '../../actions/topicActions/topicActions';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';

const filterTopics = topics => filter => topics.filter(topic => topic.category === filter);

const getFilteredTopics = (topics, filter) => {
    const topicsToFilter = filterTopics(topics);
    switch (filter) {
    case 'SHOW_ALL':
        return topics;
    case 'HTML':
        return topicsToFilter('html');
    case 'CSS':
        return topicsToFilter('css');
    case 'Javascript':
        return topicsToFilter('javascript');
    case 'Tools':
        return topicsToFilter('tools');
    case 'Project':
        return topicsToFilter('project');
    case 'Resource':
        return topicsToFilter('resource');
    case 'UX':
        return topicsToFilter('ux');
    case 'SEO':
        return topicsToFilter('seo');
    default:
        return topics;
    }
};

const searchTopics = (topics, keyword) => {
    if (keyword === '') {
        return topics;
    }
    const lowercaseKeyword = keyword.toLowerCase();
    return topics.filter((topic) => {
        return topic.title && topic.title.toLowerCase().indexOf(lowercaseKeyword) !== -1;
    });
};

const mapStateToProps = ({ topics, broadcast }) => {
    return {
        topics: {
            topics:
                getFilteredTopics(
                    searchTopics(topics.topics, topics.searchKeyword),
                topics.visibilityFilter),
            visibilityFilter: topics.visibilityFilter,
        },
        broadcast,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...topicActions, ...broadcastActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
