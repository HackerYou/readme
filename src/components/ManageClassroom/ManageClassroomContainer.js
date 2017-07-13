import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions/courseActions';
import ManageClassroom from './ManageClassroom';

const mapStateToProps = ({ course }) => {
    return {
        course,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...courseActions }, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageClassroom);
