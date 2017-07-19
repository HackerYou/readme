import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions/courseActions';
import * as usersActions from '../../actions/usersActions/usersActions';
import ManageClassroom from './ManageClassroom';

const mapStateToProps = ({ course, users }) => {
    return {
        course,
        users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...courseActions, ...usersActions }, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageClassroom);
