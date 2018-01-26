import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as usersActions from '../../actions/usersActions/usersActions';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';

import Instructors from './Instructors';

const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...usersActions,
            ...broadcastActions,
        }, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Instructors);
