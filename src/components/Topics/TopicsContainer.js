import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Topics from './Topics';
import * as topicActions from '../../actions/topicActions/topicActions';

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

const mapStateToProps = (state) => {
    console.log(state.topics.visibilityFilter);
    return {
        topics: {
            topics: getFilteredTopics(state.topics.topics, state.topics.visibilityFilter),
            visibilityFilter: state.topics.visibilityFilter,
        },
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...topicActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
