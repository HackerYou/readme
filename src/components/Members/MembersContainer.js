import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Members from './Members';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';
import * as usersActions from '../../actions/usersActions/usersActions';

const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...usersActions, ...broadcastActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
