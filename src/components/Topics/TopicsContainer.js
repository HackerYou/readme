import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Topics from './Topics';
import * as topicActions from '../../actions/topicActions/topicActions';

const mapStateToProps = ({ topics }) => {
    return {
        topics,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...topicActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
