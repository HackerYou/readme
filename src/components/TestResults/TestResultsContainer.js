import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TestResults from './TestResults';
// import * as userActions from '../../actions/userActions';
import * as classroomActions from '../../actions/classroomActions';

const mapStateToProps = ({ classroom }) => {
    return {
        // user,
        classroom,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...classroomActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResults);
