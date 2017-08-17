import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Members from './Members';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';
import * as userActions from '../../actions/userActions/userActions';

const mapStateToProps = ({ course }) => {
    return {
        course,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...userActions, ...broadcastActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
